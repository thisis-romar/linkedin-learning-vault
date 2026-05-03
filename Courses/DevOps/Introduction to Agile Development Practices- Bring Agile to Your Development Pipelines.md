---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines
url: "https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines"
duration_minutes: 43
duration: 43m
level: Intermediate
updated: 8/18/2025
learners: 4543
skills:
  - Agile Methodologies
  - Agile Development
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFizssGS-Y-GA/learning-public-crop_675_1200/B4EZeEHS8JH0Ao-/0/1750268194814?e=2147483647&amp;v=beta&amp;t=aucgq2awHT_CV6bWWmvDmQJiZHNqEx46PkcIoaqicfk"
linkedin_topic: DevOps
learning_paths:
  - '[[Master Digital Transformation]]'
  - '[[Develop Your Skills in Agile Software Development]]'
  - '[[Essential New Skills in Software Engineering]]'
  - '[[The Top Skills IT Professionals Have Right Now]]'
  - '[[Getting Started with Agile Software Development]]'
prev_courses:
  - '[[IoT Foundations- Fundamentals]]'
  - '[[Devops Foundations Lean And Agile]]'
  - '[[Building Monorepos On Github]]'
  - '[[Azure Administration Essential Training]]'
  - '[[Agile Software Development]]'
next_courses:
  - '[[Agile Foundations]]'
  - '[[Planning and Releasing Software with Jira]]'
  - '[[GitHub Dependabot- Dependency Updates]]'
  - '[[Python Essential Training]]'
  - '[[Planning and Releasing Software with Jira]]'
path_nav: '[{"path":"Master Digital Transformation","position":8,"total":13,"prev":"IoT Foundations- Fundamentals","next":"Agile Foundations"},{"path":"Develop Your Skills in Agile Software Development","position":3,"total":6,"prev":"Devops Foundations Lean And Agile","next":"Planning and Releasing Software with Jira"},{"path":"Essential New Skills in Software Engineering","position":2,"total":4,"prev":"Building Monorepos On Github","next":"GitHub Dependabot- Dependency Updates"},{"path":"The Top Skills IT Professionals Have Right Now","position":6,"total":10,"prev":"Azure Administration Essential Training","next":"Python Essential Training"},{"path":"Getting Started with Agile Software Development","position":2,"total":10,"prev":"Agile Software Development","next":"Planning and Releasing Software with Jira"}]'
path_count: 5
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - topic/devops
  - topic/network-and-system-administration
  - skill/agile-methodologies
  - skill/agile-development
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Introduction%20to%20Agile%20Development%20Practices-%20Bring%20Agile%20to%20Your%20Development%20Pipelines.md)

![Introduction to Agile Development Practices: Bring Agile to Your Development Pipelines](https://media.licdn.com/dms/image/v2/D4E0DAQFizssGS-Y-GA/learning-public-crop_675_1200/B4EZeEHS8JH0Ao-/0/1750268194814?e=2147483647&amp;v=beta&amp;t=aucgq2awHT_CV6bWWmvDmQJiZHNqEx46PkcIoaqicfk)

# Introduction to Agile Development Practices: Bring Agile to Your Development Pipelines

> Agile methodology has become a staple in the software development industry for its rapid development capabilities, iterative workflow, and improved team dynamics. In this course, Harrison Ferrone guides you through agile practices aimed at addressing the complexities and limitations unique to mobile projects. Explore everything from the concept and ideation phase all the way to continuous integrat

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines) | 43m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Welcome](#welcome)
  - [What you should know](#what-you-should-know)
- [**1. Planning**](#1-planning) (3 videos)
  - [Getting involved early](#getting-involved-early)
  - [Picking your tools](#picking-your-tools)
  - [To document or not](#to-document-or-not)
- [**2. Design**](#2-design) (2 videos)
  - [Flexible architecture](#flexible-architecture)
  - [Avoiding premature optimization](#avoiding-premature-optimization)
- [**3. Development**](#3-development) (3 videos)
  - [Determining velocity](#determining-velocity)
  - [Agile programming techniques](#agile-programming-techniques)
  - [Refactor…then refactor more](#refactorthen-refactor-more)
- [**4. Testing**](#4-testing) (2 videos)
  - [Choosing your testing regimen](#choosing-your-testing-regimen)
  - [Handling leapfrogging bugs](#handling-leapfrogging-bugs)
- [**5. Release**](#5-release) (3 videos)
  - [Continuous integration](#continuous-integration)
  - [Structuring a release pipeline](#structuring-a-release-pipeline)
  - [Closing out a project](#closing-out-a-project)
- [**Conclusion**](#conclusion) (1 videos)
  - [The big picture](#the-big-picture)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/welcome?u=76281980&t=0)** - [Harrison] [[Agile Development|Agile]] is one of those things that you either love or hate.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/welcome?u=76281980&t=3)** It's fast, intense, sometimes messy, and other times simplicity itself.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/welcome?u=76281980&t=9)** Whether or not you fall into either of these camps, the Agile philosophy and its many methodologies and implementations are a perfect fit for [[Software Development]].
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/welcome?u=76281980&t=18)** I want to share some of the development practices and practical tips I've learned as they relate to being an Agile developer.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/welcome?u=76281980&t=25)** Hi, I'm Harrison Ferrone.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/welcome?u=76281980&t=27)** I've been a software developer, Agile enthusiast, and certified [[Scrum]] master for almost a decade.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/welcome?u=76281980&t=32)** Whether you're a new Agile dev or part of a seasoned team, this course aims to provide concrete advice, practical knowledge, and tips to take your Agile development capabilities to the next level.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/welcome?u=76281980&t=45)** Let's get rolling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (6), [[Software Development]] (1), [[Scrum]] (1)
> **Speakers:** - [harrison] (1)

#### [What you should know](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/what-you-should-know?u=76281980&t=0)** - [Narrator] Before we dive in, there are a few things that we should go over.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/what-you-should-know?u=76281980&t=4)** I've designed this course to help developers who are already familiar with [[Agile Development|Agile]] processes and who are using Agile methodologies in their [[Software Projects]].
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/what-you-should-know?u=76281980&t=13)** We won't be going into any Agile basics or foundational knowledge here, but I've structured the information we'll be covering to be as platform agnostic and non-technical as possible.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/what-you-should-know?u=76281980&t=24)** If you want to delve into the basics of Agile and [[Scrum]], I'd highly recommend our Scrum Basics Training course on [[LinkedIn]] learning.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/what-you-should-know?u=76281980&t=32)** Here we'll be focusing exclusively on the technical design, development, testing, and release phases of Agile projects from a developer-centric point of view.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/what-you-should-know?u=76281980&t=43)** What we're not going to cover is concepting, requirement gathering, and visual design.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/what-you-should-know?u=76281980&t=49)** Again, you can check out the [[Representational State Transfer (REST)|rest]] of our Agile library because we have several courses that cover these topics in depth.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/what-you-should-know?u=76281980&t=55)** As a note, when I refer to Agile development throughout the course, I'm referring to the Scrum methodology and implementation.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/what-you-should-know?u=76281980&t=62)** Semantics aren't really the goal here, so if you hear me using those terms interchangeably, don't be put off.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/what-you-should-know?u=76281980&t=68)** If that sounds good and you're ready to go, let's begin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (7), [[Scrum]] (3), [[Software Projects]] (1), [[LinkedIn]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Speakers:** - [narrator] (1)


### 1. Planning

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting involved early](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/getting-involved-early?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/getting-involved-early?u=76281980&t=0)** - [Narrator] One of the most important takeaways from [[Agile Development|agile]] development is that everyone needs to be working together, not only developers and designers, but also clients, stakeholders, and testers.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/getting-involved-early?u=76281980&t=11)** Communication is king, especially between developers and designers.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/getting-involved-early?u=76281980&t=16)** They need to open up a channel of direct communication as early as possible.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/getting-involved-early?u=76281980&t=21)** One that'll last throughout the entire project.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/getting-involved-early?u=76281980&t=23)** And this might sound redundant if you're on a team that's already been working together for a long period of time, but for a new team or a newly added developer, knowing who to talk to and how is going to help your team efficiently self-organize.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/getting-involved-early?u=76281980&t=38)** Multiple channels of communication within your team are also a great way to share knowledge across disciplines.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/getting-involved-early?u=76281980&t=44)** As an agile developer, it's imperative this pool of information doesn't go to waste, and that you're constantly broadening your skillset.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/getting-involved-early?u=76281980&t=52)** If you have a bit of surplus time some days, seek out a teammate to learn something from, preferably outside your professional comfort zone.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/getting-involved-early?u=76281980&t=59)** Sharing knowledge like this will not only expand your team's competencies, it'll strengthen the team dynamic.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/getting-involved-early?u=76281980&t=66)** This is especially true in the concept and design phases.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/getting-involved-early?u=76281980&t=69)** If you get developers and designers together early on to collaborate, you'll save yourself and your development team time down the road by vetting both the visual and technical aspects of the project together instead of separately.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/getting-involved-early?u=76281980&t=82)** If you've just started using Agile in your projects and your company culture isn't quite aligned with some of these topics, we have a great course on Enterprise Agile and how to change your corporate culture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (4)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### [Picking your tools](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=0)** - [Instructor] Choosing a technical and managerial tool set is an important part of the design phase and one that [[Agile Development|agile]] developers should be in on.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=8)** This can be anything from project management and [[Version Control]] software, to third party development libraries, and really anything in between.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=17)** Although flexible, iterative, and focused on working software over documentation and processes, agile projects still need management tools.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=26)** I've included this brief discussion because it's easy to misconstrue agile development as a somewhat loose and fly-by-the-seat-of-your-pants methodology.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=36)** It's important to understand that this is not the case.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=39)** That being said, here are some things to consider.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=42)** What's the best tool for the job?
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=44)** Why is this the best option?
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=46)** And the why here is very important in agile.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=49)** Don't choose a tool without a clear need, and especially don't choose one based on its price tag.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=55)** Finally, is there a training ramp up time for any of these tools?
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=59)** That is, will there be lead time necessary for your developers to learn them?
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=65)** For agile [[Project Tracking]], I recommend basic kanban boards like [[Trello]], Pivotal Tracker, or Airtable, that you can create user stories, backlogs, and sprints on without having to train your team on complex software.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=78)** They also happen to have a lot of secondary features, custom tailored to agile management.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=84)** If you end up needing something more powerful, that's no problem at all.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=87)** Go ahead and make the jump to [[Jira]] or Hansoft.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=90)** Just remember that if you can make it work with a simple solution, that's what you should choose.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=96)** Now, this leads us into a common problem that we've all probably dealt with at one time or another.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=100)** Do we use a third party library for some needed functionality or do we implement it ourselves?
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=107)** For these decisions, you'll have to decide on your feature requirements and how much you want to bloat it with external tools.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=114)** You'll also want to compare how much of a learning curve comes with any of these given third party libraries, which affects your development sprints, how much the library might cost, and importantly, the maintenance of keeping up with the third party library once they're integrated into your projects.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=132)** Now, with that being said, third party libraries are a great way to keep those sprints moving at a good clip.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/picking-your-tools?u=76281980&t=137)** It's more of a game of cost versus gain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (6), [[Version Control]] (1), [[Project Tracking]] (1), [[Trello]] (1), [[Jira]] (1)
> **CLI Commands:** make (2)
> **Tools:** jira (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [To document or not](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/to-document-or-not?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/to-document-or-not?u=76281980&t=0)** - [Narrator] The concept and design phases in waterfall development tend to produce heaps of documentation, user flows, project milestone documents, and so much more.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/to-document-or-not?u=76281980&t=11)** [[Agile Development|Agile]] is about leaning down all of those aspects of development, which includes documentation by the design phase of an agile project.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/to-document-or-not?u=76281980&t=19)** The technical team has a good understanding of the product they're building, but it's always a balancing act between need and time.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/to-document-or-not?u=76281980&t=28)** This means that you will need some documentation, but it'll be a lot less than in a waterfall style project.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/to-document-or-not?u=76281980&t=34)** So when do we document how much is enough and when have we gone too far?
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/to-document-or-not?u=76281980&t=39)** Well, typically it's a good idea to have a short document with your project standards.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/to-document-or-not?u=76281980&t=44)** This can include how to write [[Version Control]], commits user stories, anything that needs to be standardized across your team.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/to-document-or-not?u=76281980&t=51)** A few simple rules about formatting shared information goes a long way in minimizing headaches and confusion later on.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/to-document-or-not?u=76281980&t=58)** You'll also want to have a main document with your technical decisions and decisions that have been made in the past.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/to-document-or-not?u=76281980&t=66)** This will keep the big picture clear without being weighed down by many details.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/to-document-or-not?u=76281980&t=72)** Now the question is when to defer documentation.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/to-document-or-not?u=76281980&t=76)** The answer is going to depend entirely on your project, but I'd suggest looking at Uncle Bob's first Law of Documentation.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/to-document-or-not?u=76281980&t=83)** Produce no document unless its need is immediate and significant.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/to-document-or-not?u=76281980&t=88)** So if the answer is no, don't document until you feel it's absolutely necessary.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/to-document-or-not?u=76281980&t=92)** When you think about it, that's actually a pretty good axiom for considering writing anything in an agile project, including code.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/to-document-or-not?u=76281980&t=100)** Now, just because agile development runs on the lighter side of documentation doesn't mean it's sloppy or not maintain.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/to-document-or-not?u=76281980&t=107)** Anytime you have significant changes to the project or important technical decisions that you've made, they should absolutely 100% be updated in your project documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (4), [[Version Control]] (1)
> **Definitions:** means that (1)
> **Analogies:** picture (1)
> **Speakers:** - [narrator] (1)


### 2. Design

[↑ Back to Table of Contents](#table-of-contents)

#### [Flexible architecture](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/flexible-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/flexible-architecture?u=76281980&t=0)** - [Instructor] One of the greatest advantages of [[Agile Software Development]] is its focus on iteration.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/flexible-architecture?u=76281980&t=6)** That being said, because the code base is going to be updated so frequently, it does need to be able to handle heavy iteration without architecture overhauls every sprint.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/flexible-architecture?u=76281980&t=16)** This doesn't mean everything has to be designed from the beginning as there's a big place in [[Agile Development|Agile]] for refactoring, but we'll get to that in a later video.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/flexible-architecture?u=76281980&t=25)** For now, let's just talk about some of the considerations we need to keep in mind, as far as project architecture goes.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/flexible-architecture?u=76281980&t=31)** You want to keep things as modular as possible, and this is something a lot of projects set out to do anyway, and us being the good programmers that we are, we do our best to make good use of [[Design Patterns]] and principles from the get go.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/flexible-architecture?u=76281980&t=44)** Then come deadlines, changing requirements, bugs, and client feedback, and this can transform an orderly project design with the best of intentions into spaghetti code in a matter of weeks or days, and pretty soon you'll be a couple sprints in and your code base will be a mess.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/flexible-architecture?u=76281980&t=62)** Avoiding these pitfalls is easier said than done, but it starts with a constant awareness of what's being built and more importantly, how it's getting built.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/flexible-architecture?u=76281980&t=71)** With Agile, the goal is to always deliver working software, which means writing code that's necessary and leaving out the garnish.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/flexible-architecture?u=76281980&t=78)** When your hands touch the keyboard, you need to consider not only how you're going to write good clean code, but how you can make it as flexible as possible for later expansion.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/flexible-architecture?u=76281980&t=89)** Let's take a for instance here.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/flexible-architecture?u=76281980&t=91)** If you were starting out with a specific color palette for an application, it'd be a good idea to store them globally and create some accessible wrappers to use.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/flexible-architecture?u=76281980&t=100)** However you choose to do that isn't really important.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/flexible-architecture?u=76281980&t=102)** The key is that changes to the designs later on can be done in minutes instead of hours.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/flexible-architecture?u=76281980&t=109)** The same can be said of almost anything that will be used across your product, including classes, [[Data Structures]], and debug helpers.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/flexible-architecture?u=76281980&t=117)** It's not surprising that a lot of the same traits that make a good Agile developer are also the same ones that make a good software developer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (3), [[Agile Software Development]] (1), [[Design Patterns]] (1), [[Data Structures]] (1)
> **CLI Commands:** make (4)
> **Analogies:** for instance (1)
> **Best Practices:** the key is (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Avoiding premature optimization](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=0)** - [Instructor] Now there's a dark side to designing your code to be super flexible and adaptive.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=5)** And that's premature optimization.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=8)** Okay, so that's all well and good, but what exactly is premature optimization?
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=12)** I like to think of it as a rabbit hole.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=14)** The deeper that you go, the less likely you are to realize you've lost sight of the immediate development goals.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=20)** Let's keep on going with our color palette analogy from the last video.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=25)** If I was trying to think of a flexible way to create one in code, I'd start with storing my base colors and I'd probably add some sort of conversion helper, and then I'd sit back and be the curious programmer that I am.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=35)** I might start to think about what I might need in the future.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=40)** Will I need to put in gradients at any point?
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=43)** Well, yeah, probably.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=44)** Alright, so let's look at some documentation for that.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=47)** Maybe some third party libraries to make things go faster and start to flush out the color palette class to incorporate all this.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=54)** And this is where you need to catch yourself.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=57)** You're at the mouth of the rabbit hole about to jump in headfirst and not be seen for hours.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=63)** Avoid this like the plague. I'm not kidding.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=66)** Looking ahead is a fantastic skill, but it often comes with blind spots 'cause it's hard to see the rabbit hole from the inside.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=74)** Now, time is your greatest asset when you're working with [[Agile Development|Agile]].
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=77)** So be aware of the trade-offs between optimizing your code and moving forward with sprint tasks.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=84)** It's not about solving every problem before it happens.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/avoiding-premature-optimization?u=76281980&t=87)** It's about having a foundation that is adaptable enough to handle new problems and features as they come.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** think of it as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### 3. Development

[↑ Back to Table of Contents](#table-of-contents)

#### [Determining velocity](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/determining-velocity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/determining-velocity?u=76281980&t=0)** - [Narrator] In [[Agile Development|agile]] development, velocity is a measurement metric that's used to determine how much work an agile team can do over a period of time.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/determining-velocity?u=76281980&t=9)** The period of time is usually a sprint, so you might also hear this defined as sprint velocity.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/determining-velocity?u=76281980&t=15)** Now, velocity depends on how your team decides to weigh user stories and tasks.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/determining-velocity?u=76281980&t=20)** Whether it's with points, features, or some other metric unique to your team, it's important to keep it consistent.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/determining-velocity?u=76281980&t=27)** Otherwise, your velocity is going to end up fluctuating and it'll make it hard to get any usefulness out of it.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/determining-velocity?u=76281980&t=34)** Being that velocity is a measurement over time.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/determining-velocity?u=76281980&t=37)** The question at the beginning of a project is how to set the baseline.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/determining-velocity?u=76281980&t=41)** It's a good rule of thumb to think of your potential development velocity as about 30% of your actual sprint time.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/determining-velocity?u=76281980&t=48)** Now, that may seem like you're a low balling yourself, but I'm sure you're no stranger to meetings, emails, random question that turns into hours and the like limiting your first sprint to tasks you can realistically deliver in 30% of your total available working time.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/determining-velocity?u=76281980&t=64)** We'll start things off right and give your team a fair baseline velocity.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/determining-velocity?u=76281980&t=69)** Whether you hit that mark or not is going to tell you a lot about how you and your other developers work and what needs to improve.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/determining-velocity?u=76281980&t=76)** Once you have a baseline velocity, each successive sprint could be planned more effectively.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/determining-velocity?u=76281980&t=82)** If you're going through sprint tasks with ease and extra time, load up the next sprint a bit more.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/determining-velocity?u=76281980&t=88)** Conversely, if you aren't hitting your sprint goals, decrease the load immediately in the next sprint.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/determining-velocity?u=76281980&t=94)** After the fifth or sixth sprint, your team velocity is going to stabilize and you'll have a new solid team metric.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (2)
> **Definitions:** is a  (2), defined as (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [narrator] (1)

#### [Agile programming techniques](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=0)** - [Presenter] If you've ever wondered what programming methodologies go well with [[Agile Development|Agile]] development, look no further than pair programming and [[Test-Driven Development]] or TDD.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=10)** Now, full disclosure, there are many, many more, but these two methodologies are the most likely to deliver immediate value to you and your team if you're not already implementing them.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=21)** Let's start with pair programming first because honestly, it's my favorite.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=24)** Two developers sit down at one computer, one writing code, and the other watching and offering advice, direction, and possible improvements.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=33)** We call whoever is writing the code the driver, and you can either set time limits for when to switch roles or simply go until the current driver gets stuck.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=42)** The benefits of this strategy are many.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=45)** First, you get code that is written by two people.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=48)** This is going to result in less errors and more elegant coding solutions on average.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=54)** Second, each member of a team is going to get to work with each other one-on-one since you want to change the pairings on a daily basis if your team size can handle it.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=64)** This drastically increases the level of competence and knowledge that every member of an Agile team has, combining learning with practical software delivery, not to mention the fact that all credit for code written is shared.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=79)** Test-driven development is a more time-intensive programming practice, but it's also extremely powerful.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=86)** First, you write a failing test and this is the red phase.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=89)** Next, you write production code to pass that failing test, and we call that the green phase.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=94)** And finally, after your code passes, you're out of the green and into the refactor phase.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=100)** This is where you'll streamline the code you've just written and then start the process all over again with a new feature or user story.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=109)** Now here's the great part: Because you're only allowed to write code that passes specific tests, extraneous code gets left on the cutting room floor.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=117)** It doesn't hurt that developing this way naturally enforces good [[Object-Oriented Programming (OOP)|object-oriented programming]] techniques and all around clean code.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=125)** On top of that, you have a functional test suite that grows right alongside your production code base.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=131)** I just want to note here that the use of these and any other development techniques doesn't really determine whether you're running an Agile project or not.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=140)** I've met developers who have expressed this view and I simply can't agree.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=144)** These are available tools. Nothing more.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=147)** If you want to run your Agile project using some other methodology or technique, go right ahead.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/agile-programming-techniques?u=76281980&t=152)** You'll still be running an Agile project if you stick to the tenets and philosophy of [[Agile Software Development]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (5), [[Test-Driven Development]] (2), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[Agile Software Development]] (1)
> **Env Vars:** tdd (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### [Refactor…then refactor more](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/refactor-then-refactor-more?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/refactor-then-refactor-more?u=76281980&t=0)** - [Instructor] One of the most important aspects of good [[Agile Development|agile]] development is including refactoring into your development time as the status quo, rather than something you do when there's free time in the schedule, or worse yet, as an afterthought at the end of the project.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/refactor-then-refactor-more?u=76281980&t=16)** Let's look at some considerations for why refactoring should be done at every step of development.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/refactor-then-refactor-more?u=76281980&t=21)** Well, first, it produces more readable code.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/refactor-then-refactor-more?u=76281980&t=24)** It also has better architecture, and the structure naturally evolves with the project.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/refactor-then-refactor-more?u=76281980&t=30)** It also reveals hidden bugs and vulnerabilities early and generally makes your projects stronger.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/refactor-then-refactor-more?u=76281980&t=35)** If you're new to the idea, don't worry.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/refactor-then-refactor-more?u=76281980&t=37)** It's more about getting something working than going for a total retrofit.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/refactor-then-refactor-more?u=76281980&t=43)** The idea is small, continuous changes that improve your codebase over huge, one-time retrofits.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/refactor-then-refactor-more?u=76281980&t=49)** This way, you have time to test your refactored improvements right alongside your development.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/refactor-then-refactor-more?u=76281980&t=56)** If you leave refactoring to the end of a project or only after big chunks of code has been written, you run the risk of sending fragmenting ripples through your working code.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/refactor-then-refactor-more?u=76281980&t=66)** Just another reason why refactoring fits so well within an agile workflow.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/refactor-then-refactor-more?u=76281980&t=71)** Now, for a deeper dive into this topic, grab a copy of "Refactoring: Improving the Design of Existing Code" by Kent Beck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (2)
> **Speakers:** - [instructor] (1)


### 4. Testing

[↑ Back to Table of Contents](#table-of-contents)

#### [Choosing your testing regimen](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/choosing-your-testing-regimen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/choosing-your-testing-regimen?u=76281980&t=0)** - [Narrator] One of the most important decisions you'll have to make for your project is how to handle testing.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/choosing-your-testing-regimen?u=76281980&t=5)** In this section, we're going to explore some of the options that work best with [[Agile Development|agile]] development.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/choosing-your-testing-regimen?u=76281980&t=11)** The first, and I think the best way to test a software project, especially in an agile environment, is of course to use test driven development.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/choosing-your-testing-regimen?u=76281980&t=18)** We talked about this earlier, and I always default to this option because automating your code and interface testing will save you time down the road.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/choosing-your-testing-regimen?u=76281980&t=27)** If you're able to go with this route.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/choosing-your-testing-regimen?u=76281980&t=29)** You just need to adjust your sprint workloads to account for the extra test suite development time.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/choosing-your-testing-regimen?u=76281980&t=34)** You don't necessarily have to create user stories for testing, just adjust the sprint expectation.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/choosing-your-testing-regimen?u=76281980&t=40)** That being said, time platform and resource constraints are going to make that option difficult or impossible for some teams, so take that into account when planning this step.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/choosing-your-testing-regimen?u=76281980&t=51)** On the flip side of the testing coin is [[Manual Testing]].
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/choosing-your-testing-regimen?u=76281980&t=54)** Now, this can be done by your client, by your stakeholders, a dedicated [[Quality Assurance]] team, or more than likely by the developers themselves.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/choosing-your-testing-regimen?u=76281980&t=63)** You need to have a dedicated tester or testers and testing time set aside during each sprint.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/choosing-your-testing-regimen?u=76281980&t=70)** This means less time for development, and sometimes because of that, I see agile teams leaving manual testing until the last minute or after the application is finished.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/choosing-your-testing-regimen?u=76281980&t=80)** If you're used to doing things waterfall style, you'll know that this racks up a ton of technical debt and usually leads to missed deadlines and/or lots of overtime before release.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/choosing-your-testing-regimen?u=76281980&t=92)** Now, technical debt refers to how much time you'll eventually have to put in because of diver tasks in case you'd never heard that term before.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/choosing-your-testing-regimen?u=76281980&t=100)** Whichever testing regimen you do choose.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/choosing-your-testing-regimen?u=76281980&t=103)** It's important to get into the mindset of thinking about testing as a sprint priority rather than an afterthought.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/choosing-your-testing-regimen?u=76281980&t=110)** "Agile Testing: A Practical Guide for Testers "and Agile Teams" is a wonderful book if you're looking for a good resource on the topic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (5), [[Manual Testing]] (2), [[Quality Assurance]] (1)
> **CLI Commands:** make (2)
> **Definitions:** refers to (1), is a  (1)
> **Cross-References:** we talked about (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [narrator] (1)

#### [Handling leapfrogging bugs](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=0)** z- [Instructor] Now that we've talked a little about [[Test-Driven Development]] and [[Manual Testing]], we're going to take a detour into something I call Leapfrogging Bugs.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=9)** The basic idea is this.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=10)** Let's say we have Sprint 1 finished up and we're starting Sprint 2 right away.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=15)** Ideally, we'd have done some [[Quality Assurance]] testing as part of the end of Sprint 1, but that's not always easy.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=23)** There will always be bugs that come up after the fact, and now we're in the middle of Sprint 2, and a few bugs and change requests come back into the backlog.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=32)** Here's the problem.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=33)** We're already doing new work on a new sprint deliverable, and the rules of [[Agile Development|Agile]] are designed to keep sprint tasks locked in once the sprint starts.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=42)** This stops them getting added to on the fly and generally making everybody angry.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=46)** So, how do we deal with this?
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=49)** Well, first, it's a good idea to record what version or sprint-specific bugs are found in.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=54)** This is just good practice and common sense.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=57)** Second, you want to address bugs as early as possible.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=60)** The product owner or client could decide on priority, but the important thing to focus on is not letting them build up in your production code for too long.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=69)** If they do, there's no telling what ripples they'll cause down the line, or worse yet, what a late solution to an earlier bug will break.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=78)** Third, if you've got bugs stacking up towards the end of a sprint, consider having the next sprint be focused entirely on clearing them up, and load up less on new development work.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=88)** As far as how to handle bugs and change requests as backlog items, treat them the same as a development feature or user story.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=95)** Write 'em out, assign them points, and factor them into your workload.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=100)** Now, one of the worst positions to be in on an Agile project is trying to get a sprint out the door while you're being consistently given bugs from a previous iteration, and having the expectation that they'll just somehow magically get resolved by the end of the current sprint.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/handling-leapfrogging-bugs?u=76281980&t=114)** Investing in a great product owner that can be a buffer between your developers and the client or QA team is a really good idea here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (2), [[Test-Driven Development]] (1), [[Manual Testing]] (1), [[Quality Assurance]] (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)


### 5. Release

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuous integration](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/continuous-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/continuous-integration?u=76281980&t=0)** - [Instructor] So far, we've addressed a few of the ways that you can handle continuous testing in [[Agile Development|Agile]] projects.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/continuous-integration?u=76281980&t=6)** The next question is, how do we handle integrating code from multiple developers so that our code base doesn't fragment?
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/continuous-integration?u=76281980&t=13)** As our problem suggests, we need something that can handle code integration, and later, deployment with multiple developers working at the same time.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/continuous-integration?u=76281980&t=20)** And that's where [[Continuous Integration (CI)|Continuous Integration]] comes in.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/continuous-integration?u=76281980&t=24)** Continuous Integration is the answer to the question of how can a project with multiple developers committing code be efficiently and thoroughly tested without having to throw major time at it?
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/continuous-integration?u=76281980&t=35)** Ideally, whatever CI tool you use, the process goes something like this.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/continuous-integration?u=76281980&t=40)** Every time a new commit is pushed to your project repository, it's tested against a defined test suite, and if it passes muster, it's deployed to either a testing platform or released to the public.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/continuous-integration?u=76281980&t=52)** I like to think of this process as taking a TDD approach to the next level, one that automates and supports team development.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/continuous-integration?u=76281980&t=60)** Now, if this sounds like something perfectly suited to Agile development, well, you'd be right.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/continuous-integration?u=76281980&t=64)** We're not going to go too deep into this topic, but I'll just leave you with some suggestions for good, efficient, continuous integration tools.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/continuous-integration?u=76281980&t=74)** Some of these support continuous integration and deployment, some only integration, and most are done in the cloud, so you don't have to tie up a machine every time you want to run tests or release a new build.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/continuous-integration?u=76281980&t=84)** It's also a major plus that these CI tools all integrate with [[GitHub]] right out of the box.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/continuous-integration?u=76281980&t=91)** So, here are my top CI recommendations.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/continuous-integration?u=76281980&t=93)** You have GitLab, CircleCI, and Travis CI.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/continuous-integration?u=76281980&t=97)** If you're using SVN or some other [[Version Control]], you will need to look into other alternatives, but you can find all their documentation online to get you up and running.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Integration (CI)|Continuous integration]] (4), [[Agile Development|Agile]] (2), [[GitHub]] (1), [[Version Control]] (1)
> **Env Vars:** tdd (1), svn (1)
> **Tools:** github (1), gitlab (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Structuring a release pipeline](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/structuring-a-release-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/structuring-a-release-pipeline?u=76281980&t=0)** - [Narrator] The last piece of the puzzle we're going to talk about is having a good stable release pipeline for your project.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/structuring-a-release-pipeline?u=76281980&t=6)** A release pipeline is a sibling topic of [[Continuous Integration (CI)|continuous integration]].
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/structuring-a-release-pipeline?u=76281980&t=11)** While CI is concerned with integrating and validating your code base, a release pipeline is focused on effectively managing your different project configurations.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/structuring-a-release-pipeline?u=76281980&t=20)** Both should be a part of your testing and release arsenal.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/structuring-a-release-pipeline?u=76281980&t=24)** One, you can just do this manually and do any configuration switching or settings in your code at build time.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/structuring-a-release-pipeline?u=76281980&t=31)** In an [[Agile Development|agile]] environment, this might be several times a day and it's not going to help you out at all.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/structuring-a-release-pipeline?u=76281980&t=37)** Automating this process as much as possible with third party tools can help you do this, and will be your best friend.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/structuring-a-release-pipeline?u=76281980&t=43)** Depending on what platform and IDE you're working with, there might already be tools in place to help make your agile life easier.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/structuring-a-release-pipeline?u=76281980&t=51)** Let's look at a practical example here and say, we have a mobile application that's going to have development, production, and release configurations.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/structuring-a-release-pipeline?u=76281980&t=60)** If the project is using a backend to push and pull data, these configurations would be mirrored in the API.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/structuring-a-release-pipeline?u=76281980&t=66)** So that means that we'd be in charge of three different sets of variables and settings when committing work, running tests, and deploying.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/structuring-a-release-pipeline?u=76281980&t=75)** Now, you can address this in two ways.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/structuring-a-release-pipeline?u=76281980&t=77)** The main takeaway here is don't spend sprint development time dealing with these kinds of logistics when you can just as easily set up a release pipeline at the beginning of your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (2), [[Continuous Integration (CI)|Continuous integration]] (1)
> **Env Vars:** ide (1), api (1)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [Closing out a project](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/closing-out-a-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/closing-out-a-project?u=76281980&t=0)** - [Narrator] How you end a project matters.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/closing-out-a-project?u=76281980&t=2)** And even in [[Agile Development|Agile]] projects, there's an ending point or a transition to maintenance.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/closing-out-a-project?u=76281980&t=7)** It's important that you use the end of a project to capture what your team learned for future projects and validate that you delivered the value you expected.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/closing-out-a-project?u=76281980&t=16)** This is also a great price to check loose ends, like remaining technical debt or documentation gaps.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/closing-out-a-project?u=76281980&t=24)** There's always unique tasks that come with ending a project, but here are some common actions that you can take: adding a final sprint to wrap up any open items in your backlog, freeze and stabilize your code base so new breaking changes aren't introduced at the 12th hour, do a final demo or release build for your stakeholders to validate the product, and hand off documentation if your project is transferring to another team.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/closing-out-a-project?u=76281980&t=50)** Project retrospectives are a great way to talk about what went well, what didn't, and what you want to improve on your next go-around.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/closing-out-a-project?u=76281980&t=59)** Ideally, you want to involve the entire team in these retrospectives.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/closing-out-a-project?u=76281980&t=63)** The team can't get better as a unit if everyone doesn't know what the new goals are.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/closing-out-a-project?u=76281980&t=68)** Now this isn't only about code or [[Project Tracking]] or anything like that.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/closing-out-a-project?u=76281980&t=72)** It's also about how your team worked and communicated as a whole.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/closing-out-a-project?u=76281980&t=76)** Don't be afraid to ask the hard questions here, and there's no better feeling than finishing a project, which is why it's important to cement those moments of accomplishment by taking the time to acknowledge the team's efforts, reflect on the impact you made and the value you delivered, and most importantly, do something that strengthens and celebrates your team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (1), [[Project Tracking]] (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [The big picture](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/the-big-picture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/the-big-picture?u=76281980&t=0)** - [Narrator] As you've probably experienced, being an [[Agile Development|Agile]] software developer brings some different considerations than say, being an Agile project manager, a [[Scrum]] master, or product owner.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/the-big-picture?u=76281980&t=9)** Since there's always more to learn and more to create, let's wrap things up with an overview of all the text resources I mentioned during the course.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/the-big-picture?u=76281980&t=19)** First up, we've got "[[Agile Software Development]]: "Principles, Patterns, and Practices" by Robert C. Martin and "Clean Code: A Handbook "of Agile Software Craftsmanship", also by Robert C. Martin.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/the-big-picture?u=76281980&t=31)** We have "Refactoring: Improving the Design of Existing Code" by Kent Beck and Martin Fowler.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/the-big-picture?u=76281980&t=37)** "Agile Testing: A Practical Guide for Testers "and Agile Teams" by Lisa Crispin and Janet Gregory.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/the-big-picture?u=76281980&t=43)** And finally, if you're feeling like a game style book, "Agile [[Game Development]] with Scrum" by Clinton Keith.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-agile-development-practices-bring-agile-to-your-development-pipelines/the-big-picture?u=76281980&t=50)** As always, happy Agile developing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (7), [[Scrum]] (2), [[Agile Software Development]] (1), [[Game Development]] (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Harrison Ferrone]]

## Resources

- Exercise files available

## Skills Covered

- Agile Methodologies
- Agile Development

## Path Context

### In [[Master Digital Transformation]]
← [[IoT Foundations- Fundamentals]] | **8 of 13** | [[Agile Foundations]] →

### In [[Develop Your Skills in Agile Software Development]]
← [[Devops Foundations Lean And Agile]] | **3 of 6** | [[Planning and Releasing Software with Jira]] →

### In [[Essential New Skills in Software Engineering]]
← [[Building Monorepos On Github]] | **2 of 4** | [[GitHub Dependabot- Dependency Updates]] →

### In [[The Top Skills IT Professionals Have Right Now]]
← [[Azure Administration Essential Training]] | **6 of 10** | [[Python Essential Training]] →

### In [[Getting Started with Agile Software Development]]
← [[Agile Software Development]] | **2 of 10** | [[Planning and Releasing Software with Jira]] →

## Appears In

- [[Master Digital Transformation]]
- [[Develop Your Skills in Agile Software Development]]
- [[Essential New Skills in Software Engineering]]
- [[The Top Skills IT Professionals Have Right Now]]
- [[Getting Started with Agile Software Development]]

## Related Courses

_Courses sharing skills:_

- [[Agile Requirements Foundations]] — Agile Methodologies
- [[UX Research for Agile Teams]] — Agile Methodologies
- [[Agile Foundations]] — Agile Methodologies

---

[↑ Back to top](#)