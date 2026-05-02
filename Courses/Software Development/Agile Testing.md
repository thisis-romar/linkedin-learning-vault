---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: agile-testing-2
url: "https://www.linkedin.com/learning/agile-testing-2"
duration_minutes: 48
duration: 48m
level: Intermediate
updated: 10/27/2023
learners: 259141
skills:
  - Agile Testing
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHmwBZkeEpPyg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668566557?e=2147483647&amp;v=beta&amp;t=vgLPwzZj8F6hbO9q5Cg9puRZJ5MELJQyrS9Qp0KyPrs"
linkedin_topic: Software Development
learning_paths:
  - '[[TestMu AI Software Testing Professional Certificate]]'
  - '[[Develop Your Skills as a Software Project Manager]]'
prev_courses:
  - '[[Software Testing Tips Weekly]]'
  - '[[Agile Software Development- Kanban for Developers (2019)]]'
next_courses:
  - '[[Succeeding in Software Testing]]'
  - null
path_nav: '[{"path":"TestMu AI Software Testing Professional Certificate","position":3,"total":4,"prev":"Software Testing Tips Weekly","next":"Succeeding in Software Testing"},{"path":"Develop Your Skills as a Software Project Manager","position":11,"total":11,"prev":"Agile Software Development- Kanban for Developers (2019)","next":null}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/devops
  - skill/agile-testing
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Agile%20Testing.md)

![Agile Testing](https://media.licdn.com/dms/image/v2/C4E0DAQHmwBZkeEpPyg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668566557?e=2147483647&amp;v=beta&amp;t=vgLPwzZj8F6hbO9q5Cg9puRZJ5MELJQyrS9Qp0KyPrs)

# Agile Testing

> Learn how to create higher-quality software at a faster clip by implementing agile testing in your organization. Throughout this course, instructor Ash Coleman helps you boost your understanding of the role and methods of software testers, as well as how testing can enhance your agile workflow. To kick things off, Ash goes over the role of the tester in agile teams, detailing how testers govern, m

> [LinkedIn Learning](https://www.linkedin.com/learning/agile-testing-2) | 48m | Intermediate | 259K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Testing agile projects](#testing-agile-projects)
- [**1. What Is Agile Testing?**](#1-what-is-agile-testing) (5 videos)
  - [Testing in the agile context](#testing-in-the-agile-context)
  - [The role of the tester](#the-role-of-the-tester)
  - [Shifting left](#shifting-left)
  - [Test collaborations](#test-collaborations)
  - [Fundamental QA methods](#fundamental-qa-methods)
- [**2. The Agile Testing Approach**](#2-the-agile-testing-approach) (8 videos)
  - [Backlog grooming](#backlog-grooming)
  - [Sprint planning](#sprint-planning)
  - [The "three amigos"](#the-three-amigos)
  - [Story kickoff](#story-kickoff)
  - [Retrospective](#retrospective)
  - [Action outcomes](#action-outcomes)
  - [Challenge: Testing estimations](#challenge-testing-estimations)
  - [Solution: Testing estimations](#solution-testing-estimations)
- [**3. Testing Process and Responsibilities**](#3-testing-process-and-responsibilities) (4 videos)
  - [Bug tracking](#bug-tracking)
  - [Workflow](#workflow)
  - [Bug advocacy](#bug-advocacy)
  - [Test matrices](#test-matrices)
- [**4. Agile Testing In Action**](#4-agile-testing-in-action) (3 videos)
  - [Manual testing](#manual-testing)
  - [Test automation](#test-automation)
  - [Continuous integration](#continuous-integration)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Testing agile projects](https://www.linkedin.com/learning/agile-testing-2/testing-agile-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-testing-2/testing-agile-projects?u=76281980&t=0)** - Testing has the greatest impact when it happens in tandem with project work.
>
> **[0:04](https://www.linkedin.com/learning/agile-testing-2/testing-agile-projects?u=76281980&t=4)** Build software first.
>
> **[0:05](https://www.linkedin.com/learning/agile-testing-2/testing-agile-projects?u=76281980&t=5)** Test it last.
>
> **[0:06](https://www.linkedin.com/learning/agile-testing-2/testing-agile-projects?u=76281980&t=6)** Nope. Absolutely not.
>
> **[0:08](https://www.linkedin.com/learning/agile-testing-2/testing-agile-projects?u=76281980&t=8)** In [[Agile Development|Agile]] workflows, project work is tested from kickoff to delivery by validating or verifying each step in development.
>
> **[0:16](https://www.linkedin.com/learning/agile-testing-2/testing-agile-projects?u=76281980&t=16)** Understanding the role of a tester, as well as some of the methods Agile testers utilize, can help you build robust testing processes that complement Agile methodologies.
>
> **[0:25](https://www.linkedin.com/learning/agile-testing-2/testing-agile-projects?u=76281980&t=25)** I'm Ash Coleman, and my passion is challenging the traditional concepts of Agile development.
>
> **[0:31](https://www.linkedin.com/learning/agile-testing-2/testing-agile-projects?u=76281980&t=31)** Join me in my course while I discuss strategies to test your Agile projects and help your team create robust, quality software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (5)
> **Speakers:** - testing (1)


### 1. What Is Agile Testing?

[↑ Back to Table of Contents](#table-of-contents)

#### [Testing in the agile context](https://www.linkedin.com/learning/agile-testing-2/testing-in-the-agile-context-19300571?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-testing-2/testing-in-the-agile-context-19300571?u=76281980&t=0)** - Testing is the art of going beyond validation and verification to stretch, shrink, stress, evaluate, and reveal aspects about a software you're creating through a series of tests.
>
> **[0:13](https://www.linkedin.com/learning/agile-testing-2/testing-in-the-agile-context-19300571?u=76281980&t=13)** This helps to expose this potential breaks under usage.
>
> **[0:16](https://www.linkedin.com/learning/agile-testing-2/testing-in-the-agile-context-19300571?u=76281980&t=16)** This is the job of a software quality engineer.
>
> **[0:20](https://www.linkedin.com/learning/agile-testing-2/testing-in-the-agile-context-19300571?u=76281980&t=20)** This process could stand on its own uninterrupted and staged at the end of any development process, and honestly, it is what most people imagine when discussing testing.
>
> **[0:31](https://www.linkedin.com/learning/agile-testing-2/testing-in-the-agile-context-19300571?u=76281980&t=31)** Build software first, test it last.
>
> **[0:34](https://www.linkedin.com/learning/agile-testing-2/testing-in-the-agile-context-19300571?u=76281980&t=34)** However, a question I always ask is, why wait when there are measures that can be taken to gain understanding about a product's quality earlier in the process?
>
> **[0:44](https://www.linkedin.com/learning/agile-testing-2/testing-in-the-agile-context-19300571?u=76281980&t=44)** This is called testing in an [[Agile Development|agile]] context, or simply agile testing.
>
> **[0:49](https://www.linkedin.com/learning/agile-testing-2/testing-in-the-agile-context-19300571?u=76281980&t=49)** Agile testing is an interactive, self-organizing process where experience and collaboration govern the ability to deliver effectively, taking the nature of agile and matching it with the best integration points within a workflow to provide the most feedback possible, all the while accessing most knowledge and understanding about technology at the very state it is in.
>
> **[1:12](https://www.linkedin.com/learning/agile-testing-2/testing-in-the-agile-context-19300571?u=76281980&t=72)** Imagine that, not waiting until the end, but instead meeting the development process with innovative and planned integration of testing along the way, no longer leaving questions around quality as an afterthought, instead, evolving the development process to include governed quality checks in each stage where decisions are being made.
>
> **[1:33](https://www.linkedin.com/learning/agile-testing-2/testing-in-the-agile-context-19300571?u=76281980&t=93)** Working in this way has the capacity to produce a usable product with the utmost quality, a gauge at correctness and completeness figured by conversations and planning of agile at delivery.
>
> **[1:46](https://www.linkedin.com/learning/agile-testing-2/testing-in-the-agile-context-19300571?u=76281980&t=106)** With this philosophy, we can answer more questions around quality when it's time to release a piece of software into the world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (5)
> **Definitions:** is called (1), is an  (1)
> **Analogies:** imagine (2)
> **Cross-References:** earlier in (1)
> **Speakers:** - testing (1)

#### [The role of the tester](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=1)** - [Instructor] Every role within the scope of development has an important contribution.
>
> **[0:05](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=5)** A tester's role is to be the guiding factor of a product's quality.
>
> **[0:09](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=9)** Business need indicates quality an abstract concept that doesn't begin with a measure.
>
> **[0:15](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=15)** By conceptualizing the product and talking through the product's anticipated use, a measure is then created.
>
> **[0:22](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=22)** This practice of product creation allows enough insight into the desired [[User Experience (UX)|user experience]] and its anticipated usage that a tester can begin to understand what the business expects.
>
> **[0:34](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=34)** This idea is considered product complete.
>
> **[0:38](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=38)** From the information gathered, a tester can conduct feedback and help govern the quality of the product as it's being built.
>
> **[0:45](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=45)** This guide assists the tester in giving vivid descriptions to the team through feedback and direction about how they are, and are not aligned with the product vision.
>
> **[0:57](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=57)** This is done by the issuance of documented stories created from interacting and testing the product.
>
> **[1:04](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=64)** Testers begin this process by applying unique skills to assist in governing quality.
>
> **[1:09](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=69)** For example, at the beginning of a project, while getting acquainted with a product a tester reviews any [[Microsoft Products|products]] requirements, asks clarifying questions extracts important information needed to set a standard of quality, creates a plan outlining the product's testability and implements a structure in which a team can be successful at realizing this quality.
>
> **[1:33](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=93)** The process is looking at the product from a different scope.
>
> **[1:37](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=97)** The challenge here, is in staying in alignment with business expectations as an overall outcome.
>
> **[1:43](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=103)** Knowing that quality is achieved when a product matches the description.
>
> **[1:47](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=107)** A tester's job is applying all the skills and process necessary to accomplish this.
>
> **[1:53](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=113)** Some skills that are especially noteworthy are, communication, curiosity with the desire to explore, attentiveness, active discovery, problem solving, mitigation, creativity and risk assessment.
>
> **[2:11](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=131)** These are just some of the skills a successful tester needs.
>
> **[2:15](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=135)** I often say testers are the mediators between business and tech.
>
> **[2:19](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=139)** Although they are a technical role, proper technical knowledge is entirely useful and should not be discounted when considering testability.
>
> **[2:28](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=148)** This knowledge is imperative when diving deep into code to assess potential risks.
>
> **[2:33](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=153)** Testers serve a unique role, and when included as part of a product team are able to amplify a product's quality.
>
> **[2:40](https://www.linkedin.com/learning/agile-testing-2/the-role-of-the-tester-19299609?u=76281980&t=160)** Through testing and guided practices the tester can manage quality, implement a standard of quality for the product, and monitor its success for the team throughout the [[Agile Development|agile]] process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1), [[Microsoft Products|Products]] (1), [[Agile Development|Agile]] (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Shifting left](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=1)** - A scene that often plays out in my head when I think about an issue in a project is the moment when someone expresses, "I wish I had known sooner" or "Why are you just telling me now?"
>
> **[0:12](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=12)** I think about these moments because how testing is positioned in line with [[Product Development]].
>
> **[0:18](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=18)** Often typecast as the bottleneck or the end of the road, testers are the recipients of code in its concluding stages, leaving little time for anything more than a superficial stamp of approval.
>
> **[0:30](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=30)** When I recall these moments, I cannot help but think, heavens, I never want to do that again, and honestly I won't.
>
> **[0:38](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=38)** [[Agile Development|Agile]] testing is a practice built off of the concept of early integrations for faster feedback and regular integrations of testing along the way.
>
> **[0:47](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=47)** The idea of shifting left.
>
> **[0:49](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=49)** This concept was conceived from the repercussions of testing in a delayed state brought to attention by recognizing the opportunities lost while waiting for feedback from testing a code base late in the process.
>
> **[1:03](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=63)** Testing in this way is time consuming, distanced from the work of development, and often yields extensive issues at the last minute that most likely could have been discovered earlier in the process had anyone been looking out for them.
>
> **[1:17](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=77)** In retrospect, a person will always consider, how could I have done that better?
>
> **[1:22](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=82)** The best answer is they could have known what was really being developed sooner and given feedback as to how the code did or did not align with the overall desired outcome.
>
> **[1:33](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=93)** This is the meat of shifting left.
>
> **[1:35](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=95)** The objective is to create more transparency into a product by being able to verify or validate designs and code in the moments they're conceived as ideas to be applied to the outcome.
>
> **[1:48](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=108)** This provides an easier framework to give feedback earlier, as well as identify weaknesses in the code and plan for testing at an earlier state.
>
> **[1:57](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=117)** Within a sprint, testers have many opportunities to engage the project team.
>
> **[2:03](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=123)** First, the ideation of a feature set provides a validation opportunity.
>
> **[2:10](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=130)** From that point, ticket creation with acceptance criteria brings more transparency.
>
> **[2:15](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=135)** That too can be validated.
>
> **[2:19](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=139)** Engineering ideation scopes out the possibilities.
>
> **[2:22](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=142)** This can be verified.
>
> **[2:26](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=146)** Then, design, copy, and legal considerations can be added.
>
> **[2:31](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=151)** This too can be verified.
>
> **[2:34](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=154)** And finally, code complete, which can be tested and verified.
>
> **[2:43](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=163)** As you can see, opportunities to test and provide feedback are integrated along the way to completion.
>
> **[2:49](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=169)** This provides ample opportunities within a sprint to verify and validate while also allowing time to follow up with feedback.
>
> **[2:57](https://www.linkedin.com/learning/agile-testing-2/shifting-left-19802061?u=76281980&t=177)** Shifting left can create more transparency as a product makes its way through the stages of development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Product Development]] (1), [[Agile Development|Agile]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - a (1)

#### [Test collaborations](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=1)** - As a concept, collaboration is at the very center of [[Agile Development|Agile]].
>
> **[0:05](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=5)** The Agile manifesto states, "We value individuals and interactions over tools and process," placing the most important aspects of any Agile team in the hands of the individuals.
>
> **[0:17](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=17)** This is an incredible stance to take.
>
> **[0:20](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=20)** It gives responsibility to the team to organize around the product and decide on a way forward as they strive to complete and release a quality product.
>
> **[0:29](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=29)** So what does this mean for an Agile tester?
>
> **[0:32](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=32)** I often say where much is given, much is expected, and there's no better role to explain this than that of the Agile tester.
>
> **[0:41](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=41)** Among many responsibilities, the iterations of a project are validated to discern whether the product being built is in compliance with what is expected.
>
> **[0:50](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=50)** This is done through a series of tests that are run to generate [[Real-Time]] data about the product.
>
> **[0:57](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=57)** Based on the information gathered, testers can take the data and turn it into constructive feedback about the overall product quality.
>
> **[1:05](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=65)** This feedback is helpful because it creates a snapshot for the team to comprehend their product's status.
>
> **[1:12](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=72)** Regularly running tests allows testers to generate data often, keeping them in consistent communication with the team.
>
> **[1:19](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=79)** A great deal of interaction and engagement is required at this stage.
>
> **[1:23](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=83)** An Agile tester's relationship with the other roles and stakeholders on the team is incredibly important.
>
> **[1:30](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=90)** Strong relationships help testers influence decisions from every team: design, development, product, copy, even legal.
>
> **[1:39](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=99)** The tester is an important part of planning.
>
> **[1:42](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=102)** Working closely with each team will build trust and understanding about the knowledge they possess about the product.
>
> **[1:49](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=109)** This will equip the tester with the ability to construct feedback and communicate to the team as often as they receive it, creating a series of short feedback loops.
>
> **[1:58](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=118)** This increases the capacity and productivity of the team as well as influences positive change faster by pinpointing potential weaknesses or foibles in the code as early in the development process as possible.
>
> **[2:13](https://www.linkedin.com/learning/agile-testing-2/test-collaborations-19296835?u=76281980&t=133)** This is the crux of the Agile experience, faster, shorter feedback cycles prepare the team to drive better plans forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (7), [[Real-Time]] (1)
> **Definitions:** is an  (2)
> **Speakers:** - as (1)

#### [Fundamental QA methods](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=0)** - Being involved in conversations at the right time will allow for sufficient planning.
>
> **[0:05](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=5)** The idea is the earlier the better.
>
> **[0:09](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=9)** There are varying methods of testing that can be applied to a process.
>
> **[0:12](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=12)** Being able to vet which ones are going to be the most beneficial relies on two things, knowing enough about each testing method to identify its use case, and knowing when to apply them.
>
> **[0:24](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=24)** Take testing on a [[Scrum]] team, for example.
>
> **[0:27](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=27)** Consider you are working on a team that has two-week sprints.
>
> **[0:31](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=31)** At kickoff, the tester will receive information about the project that is about to launch.
>
> **[0:36](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=36)** This information should be sufficient to understand the very basic asks of the project.
>
> **[0:42](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=42)** It is at this point you'll be able to assess what's important, more directly, why does this project matter?
>
> **[0:49](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=49)** Asking questions like what does success look like and what is the overall ask that this project is answering to will help you gather relevant information.
>
> **[0:59](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=59)** You should also be able to identify the people who possess project knowledge and have power to influence change, the project stakeholders.
>
> **[1:08](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=68)** Context is everything and will help you build the beginning scaffolding to carry you through a successful project as a tester.
>
> **[1:16](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=76)** At the beginning of a project, the tester should meet with the team to learn details about the project.
>
> **[1:22](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=82)** If you are working with existing software, try to determine what knowledge the overall team possesses to understand the pain points of building a new system in tandem with the old.
>
> **[1:33](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=93)** If you're building a new piece of software, consider what knowledge and understanding can be gathered before the team begins to build.
>
> **[1:40](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=100)** These are direct ways to add value in a time where there is no testable software in actuality.
>
> **[1:46](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=106)** This lead time is also a great time to consider all of the ways you would like to test the software once it commences delivery of any kind.
>
> **[1:54](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=114)** This is called your project plan.
>
> **[1:57](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=117)** A project plan is a document that addresses all of the applicable ways you find to test the product being built.
>
> **[2:03](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=123)** Beginning with the software setup, documenting what type of software you have on hand is key.
>
> **[2:09](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=129)** At a high level, this will help you plan the kind of testing needed to cover the project.
>
> **[2:14](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=134)** You can begin to understand the conditions of the software and apply testing directly.
>
> **[2:19](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=139)** For example, user interfaces might include anything from integration, stretch, functional, security, or performance testing.
>
> **[2:28](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=148)** Continually asking questions about the overall outcome will help you thoroughly determine what type of testing is needed.
>
> **[2:35](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=155)** If this exercise is done well, the specifics of the project can be mapped back to a testing technique.
>
> **[2:41](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=161)** Understanding the scope of delivery will help create a project plan to answer product questions.
>
> **[2:46](https://www.linkedin.com/learning/agile-testing-2/fundamental-qa-methods-19297645?u=76281980&t=166)** Use it as a guide to ensure that quality is established in your projects from the very beginning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scrum]] (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Prerequisites:** setup (1)
> **Speakers:** - being (1)


### 2. The Agile Testing Approach

[↑ Back to Table of Contents](#table-of-contents)

#### [Backlog grooming](https://www.linkedin.com/learning/agile-testing-2/backlog-grooming-19801484?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-testing-2/backlog-grooming-19801484?u=76281980&t=1)** - In [[Agile Development|Agile]] projects, there are meetings designed to move through work that creates a pattern for addressing its most basic needs.
>
> **[0:08](https://www.linkedin.com/learning/agile-testing-2/backlog-grooming-19801484?u=76281980&t=8)** Over time, these meetings add more information that define and detail the product being built.
>
> **[0:14](https://www.linkedin.com/learning/agile-testing-2/backlog-grooming-19801484?u=76281980&t=14)** One of the most standard of these meetings is backlog grooming.
>
> **[0:17](https://www.linkedin.com/learning/agile-testing-2/backlog-grooming-19801484?u=76281980&t=17)** Backlog grooming is a meeting held to discuss user stories or tickets that have been created to bring about the creation of a product.
>
> **[0:26](https://www.linkedin.com/learning/agile-testing-2/backlog-grooming-19801484?u=76281980&t=26)** While this meeting often only includes the product owner and various other stakeholders on the team, it's a great place for testers too.
>
> **[0:34](https://www.linkedin.com/learning/agile-testing-2/backlog-grooming-19801484?u=76281980&t=34)** I would argue that any place a decision is being made about the way a product is being built is a great place for a tester.
>
> **[0:41](https://www.linkedin.com/learning/agile-testing-2/backlog-grooming-19801484?u=76281980&t=41)** At this meeting, questions are asked about user stories that are being suggested.
>
> **[0:46](https://www.linkedin.com/learning/agile-testing-2/backlog-grooming-19801484?u=76281980&t=46)** Usually, the topic of conversation for this meeting is making decisions around whether user stories are still valid or need alteration, whether they embody the desired use case of a user, the size of the user story, or how long it takes to construct.
>
> **[1:03](https://www.linkedin.com/learning/agile-testing-2/backlog-grooming-19801484?u=76281980&t=63)** When viewed in this light, it becomes clear how a tester can contribute.
>
> **[1:08](https://www.linkedin.com/learning/agile-testing-2/backlog-grooming-19801484?u=76281980&t=68)** Leaning in on the testing project plan, testers can outline dependencies, determine time needed to test, accurately determine testability, and expose shortcomings in the scope.
>
> **[1:20](https://www.linkedin.com/learning/agile-testing-2/backlog-grooming-19801484?u=76281980&t=80)** This information will prove to assist the team in incorporating testing into the beginning phases of a project instead of relying on a single testing period once it has been built.
>
> **[1:30](https://www.linkedin.com/learning/agile-testing-2/backlog-grooming-19801484?u=76281980&t=90)** When testers are involved in backlog grooming, it can drive stakeholders to consider quality earlier, even before the product itself begins to be built.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (1)
> **Definitions:** is a  (2)
> **Speakers:** - in (1)

#### [Sprint planning](https://www.linkedin.com/learning/agile-testing-2/sprint-planning-19801485?u=76281980)

#### [The "three amigos"](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=0)** - The power of three is a concept that embodies the idea that two resources alone cannot build a solid argument.
>
> **[0:07](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=7)** However, by adding a third, there is support enough to reinforce and support an idea.
>
> **[0:12](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=12)** In [[Agile Development|agile]], this is something referred to as the three amigos.
>
> **[0:17](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=17)** Imagine a woman is given two sturdy cylinders and a wooden plane, and is asked to build a solid structure.
>
> **[0:23](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=23)** Over the course of the exercise, with these materials alone, she will find that there are very few combinations, if any, that would allow her to succeed in the given task.
>
> **[0:33](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=33)** Now, instructed to fulfill the same request, she's given a third wooden cylinder.
>
> **[0:39](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=39)** Going through the exercise once more, having received a third component, her chances of success have greatly increased.
>
> **[0:47](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=47)** This one addition has created balance to the structure she was tasked to build, resulting in a solid structure.
>
> **[0:54](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=54)** Realizing there was very little she could do with two alone, we see the power of three.
>
> **[0:59](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=59)** The three amigos is an idea that borrows the notion of the substantial power of threes.
>
> **[1:05](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=65)** In this context, three means a stakeholder, a developer, and a tester.
>
> **[1:11](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=71)** Among these three people, the revisiting of a ticket or story will bring three different angles to discuss.
>
> **[1:18](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=78)** Together, by asking questions around expectations, approach, and testing, the three, or more in some circumstances, can discern whether they have thought about all the possibilities for execution, and challenge each aspect of the story.
>
> **[1:33](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=93)** Because each amigo has a different perspective within the team, they'll ask different questions about each ticket.
>
> **[1:40](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=100)** For example, a developer might ask, "Is this still what I'm building with this story, given the previous additions to the project?"
>
> **[1:49](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=109)** A stakeholder might inquire with, "Do we still recognize the story as being this size, given the additional requirements that I have given?"
>
> **[1:58](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=118)** A tester will likely need to know, "Are these acceptance criteria all that we are expecting the story to fulfill?"
>
> **[2:04](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=124)** "What about the behavior of this field?"
>
> **[2:08](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=128)** Working together, the three amigos should be able to properly answer and challenge the information within the ticket, to make sure there is a clear understanding of work before building begins.
>
> **[2:19](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=139)** This group is equipped with areas of concern stemming from their position on the team, to iron out any potential issues and opportunities that may arise while working on the story.
>
> **[2:30](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=150)** Going back to our example of the woman building a structure, without the support of three important resources, it will be difficult to move forward.
>
> **[2:39](https://www.linkedin.com/learning/agile-testing-2/the-three-amigos-19295907?u=76281980&t=159)** For decision making and validation, having additional insights will result in greater overall success.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** imagine (1), for example (1)
> **Tools:** notion (1)
> **Speakers:** - the (1)

#### [Story kickoff](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=1)** - Technology is complex and constantly evolving.
>
> **[0:03](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=3)** It's no wonder technology is always under review and reform.
>
> **[0:07](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=7)** A practice known as versioning.
>
> **[0:09](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=9)** Building tools that users engage with on a daily basis pretty much guarantees ongoing revision.
>
> **[0:15](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=15)** So long as it's in the hands of individuals, as time passes, there will be a need to upgrade, fix or resolve the issues in order to stay relevant to users.
>
> **[0:25](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=25)** The funny part about this is these cycles of review and reform begin well before a developer even begins to write a single line of code.
>
> **[0:33](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=33)** The feeling of walking out of a planning meeting with all the details to begin working on a project is typically short-lived.
>
> **[0:40](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=40)** From the moment planning ends to when the ticket is pulled and is ready for development, more information will become available.
>
> **[0:48](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=48)** This new scope may contradict assumptions the team made at the time of planning.
>
> **[0:54](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=54)** This natural evolution comes from a wide array of events such as better advancements in versions of a technology or tool being released.
>
> **[1:03](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=63)** Updated clients, browsers, or devices.
>
> **[1:06](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=66)** Or maybe a common approach that is no longer reliable and an alternative needs to be used.
>
> **[1:11](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=71)** All of these slight variations in the plan suggest a new approach.
>
> **[1:16](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=76)** And for that to happen there needs to be a discussion.
>
> **[1:19](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=79)** This is called the story kickoff.
>
> **[1:22](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=82)** At story kickoff, considerations are brought to the table around how technology or deliverables have evolved since the planning of the ticket.
>
> **[1:30](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=90)** And the establishment of clear expectations are discussed.
>
> **[1:33](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=93)** At the start of every user story, with your three amigos, discussion should happen before the commencement of development in order to realign expectations.
>
> **[1:44](https://www.linkedin.com/learning/agile-testing-2/story-kickoff-19298622?u=76281980&t=104)** This includes finalizing acceptance criteria, discussing changes in the original plan of development, key testing approaches, and any other information that makes the execution of this story crystal clear.

> [!info]- Semantic Content
>
> **Definitions:** known as (1), is called (1)
> **Analogies:** such as (1)
> **Speakers:** - technology (1)

#### [Retrospective](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=0)** - When it comes to self-organization, feedback is incredibly important.
>
> **[0:05](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=5)** Having an opportunity to discuss current process, results, issues, and success is imperative.
>
> **[0:11](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=11)** Assessing how observations and experiences hold up against desired outcomes can provide a clear look at the way work was accomplished.
>
> **[0:21](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=21)** Feedback gives the team a sincere view of how they're functioning.
>
> **[0:25](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=25)** This event is the crowning opportunity in the [[Agile Development|agile]] process.
>
> **[0:29](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=29)** This meeting is called the retrospective and the findings can be used to create a foundation for progress.
>
> **[0:36](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=36)** Retrospectives position the team to better understand where they can go.
>
> **[0:41](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=41)** Based off of where they have been, a team can better navigate their potential while moving forward.
>
> **[0:47](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=47)** The path forward should include careful analysis of actions taken in previous sprints in order to demonstrate improvements in future project work.
>
> **[0:56](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=56)** However, this can only happen after a discussion about what did and did not work in the past.
>
> **[1:02](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=62)** A retrospective is moderated by an unbiased lead, usually the [[Scrum]] Master or other neutral member of the team.
>
> **[1:10](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=70)** The goal is to talk about three things: what the team is doing well in order to get their tasks and tickets completed; any issues the team has noticed in the process; and ideas, thoughts, and theories on how the team can improve.
>
> **[1:25](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=85)** The purpose of a retrospective is to capture the learning experiences that come from having completed a course of work.
>
> **[1:32](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=92)** Team members will be better equipped to provide feedback when they know that their contributions will be used for improvements.
>
> **[1:39](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=99)** This intentional transparency will drive each meeting as it creates an open atmosphere for feedback.
>
> **[1:46](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=106)** Fostering a safe environment for retrospectives is incredibly important.
>
> **[1:51](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=111)** This will help the team provide more honesty and transparency about their experience.
>
> **[1:56](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=116)** Once this feedback is gathered, the team will have an opportunity to discuss their achievements and hiccups in learning.
>
> **[2:03](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=123)** They can use their observations to provide a springboard to improvement.
>
> **[2:07](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=127)** As the shepherds of quality feedback, testers have the most to gain from an honest retrospective.
>
> **[2:13](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=133)** Everyone needs an opportunity to speak freely and provide clarity regarding the impact each decision has.
>
> **[2:20](https://www.linkedin.com/learning/agile-testing-2/retrospective-19296834?u=76281980&t=140)** Breaking this down into a conversation about how the team's performance calculates into quality will help the team understand some of the complex advantages to testing within the agile process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (2), [[Scrum]] (1)
> **Definitions:** is called (1)
> **Speakers:** - when (1)

#### [Action outcomes](https://www.linkedin.com/learning/agile-testing-2/action-outcomes-19801483?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-testing-2/action-outcomes-19801483?u=76281980&t=0)** - [[Agile Development|Agile]] methodologies strive to include all voices.
>
> **[0:04](https://www.linkedin.com/learning/agile-testing-2/action-outcomes-19801483?u=76281980&t=4)** Each member of the team has a significant impact on the projects they are working on.
>
> **[0:09](https://www.linkedin.com/learning/agile-testing-2/action-outcomes-19801483?u=76281980&t=9)** There are wonderful benefits of Agile ceremonies that complement the role of the tester.
>
> **[0:14](https://www.linkedin.com/learning/agile-testing-2/action-outcomes-19801483?u=76281980&t=14)** Agile is deeply rooted in communication.
>
> **[0:17](https://www.linkedin.com/learning/agile-testing-2/action-outcomes-19801483?u=76281980&t=17)** It's processes are designed to provide constant and regular reminders to communicate within the team.
>
> **[0:23](https://www.linkedin.com/learning/agile-testing-2/action-outcomes-19801483?u=76281980&t=23)** Regular communication helps the team understand the current status of a project.
>
> **[0:29](https://www.linkedin.com/learning/agile-testing-2/action-outcomes-19801483?u=76281980&t=29)** It also helps predict future outcomes based on the ever-flowing information collected throughout a project's lifeline.
>
> **[0:36](https://www.linkedin.com/learning/agile-testing-2/action-outcomes-19801483?u=76281980&t=36)** Teams who use [[Scrum]] or Kanban have routine feedback loops that provide insight.
>
> **[0:41](https://www.linkedin.com/learning/agile-testing-2/action-outcomes-19801483?u=76281980&t=41)** These loops can outline and tag potential risks, assist in course correction, provide clarity, and even help assess the overall quality of a project.
>
> **[0:52](https://www.linkedin.com/learning/agile-testing-2/action-outcomes-19801483?u=76281980&t=52)** These conversations are key to keeping the project moving in a positive direction.
>
> **[0:57](https://www.linkedin.com/learning/agile-testing-2/action-outcomes-19801483?u=76281980&t=57)** By regularly seeing what a product looks like in comparison to the acceptance criteria, a tester is able to help the team understand how close or far they are from achieving their goals.
>
> **[1:08](https://www.linkedin.com/learning/agile-testing-2/action-outcomes-19801483?u=76281980&t=68)** Testers assess and mitigate risk by defining the status of the project against expectations.
>
> **[1:14](https://www.linkedin.com/learning/agile-testing-2/action-outcomes-19801483?u=76281980&t=74)** Flagging issues and testing the software's health will provide details into whether a project is on track or at risk for a timely delivery.
>
> **[1:23](https://www.linkedin.com/learning/agile-testing-2/action-outcomes-19801483?u=76281980&t=83)** This information also helps refine the process in which the team is taking to complete the work.
>
> **[1:29](https://www.linkedin.com/learning/agile-testing-2/action-outcomes-19801483?u=76281980&t=89)** Feedback helps compare the [[Microsoft Products|products]] being built with the user stories that are created for the sprint to verify that completed work aligns with desired outcomes.
>
> **[1:39](https://www.linkedin.com/learning/agile-testing-2/action-outcomes-19801483?u=76281980&t=99)** A tester is paramount in providing details about a product's health.
>
> **[1:43](https://www.linkedin.com/learning/agile-testing-2/action-outcomes-19801483?u=76281980&t=103)** Through testing, they're able to lend information to help the team understand how strong their product is, and together, they work to refine their process to create a quality product.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (3), [[Scrum]] (1), [[Microsoft Products|Products]] (1)
> **Speakers:** - agile (1)

#### [Challenge: Testing estimations](https://www.linkedin.com/learning/agile-testing-2/challenge-testing-estimations-19297646?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-testing-2/challenge-testing-estimations-19297646?u=76281980&t=0)** - It's time for a quick challenge.
>
> **[0:03](https://www.linkedin.com/learning/agile-testing-2/challenge-testing-estimations-19297646?u=76281980&t=3)** A tester's involvement in [[Agile Development|Agile]] ceremonies is incredibly important to fully understand the scope of a project.
>
> **[0:10](https://www.linkedin.com/learning/agile-testing-2/challenge-testing-estimations-19297646?u=76281980&t=10)** Their contributions to the team are not free of cost or time.
>
> **[0:14](https://www.linkedin.com/learning/agile-testing-2/challenge-testing-estimations-19297646?u=76281980&t=14)** What's often misunderstood is how much of a cost or how much time testing is going to take.
>
> **[0:20](https://www.linkedin.com/learning/agile-testing-2/challenge-testing-estimations-19297646?u=76281980&t=20)** It's important to include testers wherever decisions are being made.
>
> **[0:24](https://www.linkedin.com/learning/agile-testing-2/challenge-testing-estimations-19297646?u=76281980&t=24)** Testing can easily be misunderstood when not included regularly in conversations about bug fixes and development of new features.
>
> **[0:33](https://www.linkedin.com/learning/agile-testing-2/challenge-testing-estimations-19297646?u=76281980&t=33)** For this challenge, I want you to consider a tester's role in backlog grooming, sprint planning, and story kickoff meetings.
>
> **[0:42](https://www.linkedin.com/learning/agile-testing-2/challenge-testing-estimations-19297646?u=76281980&t=42)** Take a moment to compare how a tester's role changes from one meeting to the next.
>
> **[0:47](https://www.linkedin.com/learning/agile-testing-2/challenge-testing-estimations-19297646?u=76281980&t=47)** How much information can a tester gather from each meeting to test each ticket?
>
> **[0:52](https://www.linkedin.com/learning/agile-testing-2/challenge-testing-estimations-19297646?u=76281980&t=52)** This challenge should take a few minutes.
>
> **[0:55](https://www.linkedin.com/learning/agile-testing-2/challenge-testing-estimations-19297646?u=76281980&t=55)** Write down your thoughts, and be sure to watch the solution video where I'll take a look at these questions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (1)
> **Speakers:** - it (1)

#### [Solution: Testing estimations](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=0)** - Welcome back from the challenge.
>
> **[0:02](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=2)** Let's take a moment to review a tester's role in backlog grooming, sprint planning, and story kickoff meetings, as well as how much information the tester can gather from each meeting to test tickets.
>
> **[0:13](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=13)** First, backlog grooming.
>
> **[0:16](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=16)** Because this meeting is created to cover the general idea of ticket criteria, information is discussed at a high level.
>
> **[0:22](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=22)** Lacking solid details, a tester would have just enough information to create a loose test plan.
>
> **[0:28](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=28)** The tester may ask questions to better understand clients, platforms, devices, and anything else the ticket scope is covering.
>
> **[0:35](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=35)** This information is then used to create a general testing approach.
>
> **[0:38](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=38)** I call this person forager.
>
> **[0:41](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=41)** The next meeting is sprint planning.
>
> **[0:44](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=44)** Sprint planning dives into the details quite a bit.
>
> **[0:47](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=47)** Completed acceptance criteria matched with the test plan, including testing methods, is a plausible outcome.
>
> **[0:54](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=54)** Testers will ask detailed questions about the developer approach and anticipated execution.
>
> **[0:59](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=59)** This helps create a foundation of tools, plugins, or data needed for testing.
>
> **[1:04](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=64)** This is also the time testers confirm all task criteria from stakeholders, including technical and non-technical contingencies.
>
> **[1:12](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=72)** This is the investigator.
>
> **[1:15](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=75)** Finally, there's the story kickoff meeting.
>
> **[1:18](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=78)** Though short and concise, story kickoff is meant to be the checkpoint before the race.
>
> **[1:22](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=82)** This is what I like to call the flagman.
>
> **[1:26](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=86)** As the flagman, a tester will designate a testing execution matrix that includes final checks on each ticket detail.
>
> **[1:33](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=93)** This includes coverage approach, quality execution and automation.
>
> **[1:37](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=97)** As you can see, a tester's role changes as the information available becomes more thought out.
>
> **[1:43](https://www.linkedin.com/learning/agile-testing-2/solution-testing-estimations-19296837?u=76281980&t=103)** But one thing remains the same: a tester must own information discovery to successfully develop a testing plan.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - welcome (1)


### 3. Testing Process and Responsibilities

[↑ Back to Table of Contents](#table-of-contents)

#### [Bug tracking](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=0)** - Organization as a tester is essential.
>
> **[0:03](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=3)** Any ounce of disorder could cause problems as the weight and complexity of a project increases.
>
> **[0:09](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=9)** It's a tester's duty to properly handle issues and track bugs that have been discovered, and this can be done in many ways.
>
> **[0:16](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=16)** In some cases, something as simple as a spreadsheet can be used to track bugs as they're discovered when testing.
>
> **[0:23](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=23)** On smaller teams, this may be preferred, as bug tracking software might provide too many options or even be too expensive.
>
> **[0:32](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=32)** For larger teams or smaller distributed teams, bug tracking software might be needed.
>
> **[0:38](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=38)** Things that can be easily communicated on smaller teams might need more defined organization, and additional options when working in different locations or in greater numbers, such as easy queries, project grouping, or organized workflows in swim lanes.
>
> **[0:53](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=53)** [[Agile Development|Agile]] teams are able to determine what works best for them.
>
> **[0:57](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=57)** Though organization can be verbal or via spreadsheet, in most cases, the help of some sort of electronic assistant is needed.
>
> **[1:05](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=65)** Once a method of bug tracking is considered, there are some common questions to help decide whether the method chosen is sufficient.
>
> **[1:12](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=72)** A simple place to start is by asking, what is our naming convention?
>
> **[1:17](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=77)** The ability to identify an issue that is being called out requires highly specific and descriptive naming.
>
> **[1:24](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=84)** The name should serve as an at a glance indication of what is going on with the documented issue.
>
> **[1:30](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=90)** The team can also ask, what is the priority?
>
> **[1:33](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=93)** This should be based on the severity of the bug and figuring out, how many people it will affect, how much money the company will lose if released into production, and how costly is the time to fix the issue going to be?
>
> **[1:48](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=108)** Having these discussions with stakeholders will better prepare tester to discern the priority of the issue.
>
> **[1:55](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=115)** What is the matter?
>
> **[1:56](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=116)** Simply stating in the description of the ticket what is failing is a great help.
>
> **[2:01](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=121)** Including screenshots or simulations that describe the issue in full detail will be critical when identifying whether an issue that is found is in scope or not.
>
> **[2:11](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=131)** How did you find the bug?
>
> **[2:13](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=133)** What are the steps needed to reproduce the issue?
>
> **[2:16](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=136)** Being able to recreate an issue with regularity will help in discerning the priority as well as confirm the existence of the issue in question.
>
> **[2:24](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=144)** When an issue is reproducible, another member of the team is able to trace the logs or call out warnings and failures that happen along the way.
>
> **[2:32](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=152)** This evidence will greatly decrease the time it will take to correct the issue, since it won't be a guessing game as to why it's happening in the first place.
>
> **[2:42](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=162)** Where was the bug found?
>
> **[2:44](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=164)** Most software is built to function on multiple clients, desktop web, mobile web, mobile native, et cetera.
>
> **[2:51](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=171)** The software may also behave differently on different browsers and devices.
>
> **[2:55](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=175)** Including this information helps determine if an issue is unique to a device or client, so the issue's priority can be better-assessed.
>
> **[3:03](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=183)** Knowing where an issue shows up provides helpful information to solve for the issue.
>
> **[3:08](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=188)** Along with the information previously noted, a cadence of assigning and delivering these bugs can be established.
>
> **[3:14](https://www.linkedin.com/learning/agile-testing-2/bug-tracking-19295906?u=76281980&t=194)** As they make their way through development and back to testing, a living record of how the issue was found, fixed, and deployed, serves many different needs, including identifying when a feature is complete, and providing additional information for an audit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - organization (1)

#### [Workflow](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=0)** - There are many roles on production teams that work independently.
>
> **[0:04](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=4)** Designers, developers, analysts, copy editors, testers, the list goes on.
>
> **[0:09](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=9)** Each role is staffed to provide a very specific input that, together, will help complete a project.
>
> **[0:15](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=15)** Simply having all the right roles on a team does not guarantee a timely and sufficient outcome.
>
> **[0:21](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=21)** There must be an order of operations so that each contribution is received at the right time.
>
> **[0:26](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=26)** A project is broken into a series of components which, together, make up the whole of a product.
>
> **[0:32](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=32)** These are called epics.
>
> **[0:34](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=34)** Each epic consists of a number of actions that are fulfilled to build out the functionality of a product.
>
> **[0:39](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=39)** These are called stories.
>
> **[0:42](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=42)** Stories are components assigned to developers who build out the scaffolding to accommodate the remaining components from other roles on the team.
>
> **[0:51](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=51)** This work can typically be completed separate from development.
>
> **[0:54](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=54)** These are called tasks.
>
> **[0:57](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=57)** For example, copy from a copy editor.
>
> **[1:00](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=60)** This task must be done before the delivery of a story that needs to include that copy.
>
> **[1:05](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=65)** So it could be said a condition that would need to be completed before publishing would be having approved copy from the copy editor.
>
> **[1:13](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=73)** Seeing that there are many working components in building a product, understanding the conditions that stories and tasks need in order to be completed is important.
>
> **[1:24](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=84)** It's under these conditions that they can be tested.
>
> **[1:27](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=87)** Working together as a team to discuss clear expectations improves the ability to deliver.
>
> **[1:33](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=93)** And at this time, testers can engage with all components as they are completed by their owners.
>
> **[1:39](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=99)** What's expected to begin developing and what's expected to call a team's effort complete are the definitions of ready and done.
>
> **[1:47](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=107)** These rules set clear expectations for a team to make decisions based on when tasks are required and when stories are ready for handoff to advance to their next stage.
>
> **[1:57](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=117)** Once they're established, a team can begin to create a pattern of completing work or, in simple terms, a workflow.
>
> **[2:05](https://www.linkedin.com/learning/agile-testing-2/workflow-19801482?u=76281980&t=125)** Having a common understanding of what's expected from each task and story makes testing that much easier.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Speakers:** - there (1)

#### [Bug advocacy](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=0)** - It's one thing to find a bug in software.
>
> **[0:03](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=3)** It's another to see what gets corrected or spoken for.
>
> **[0:06](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=6)** The truth is not all bugs are created equally.
>
> **[0:10](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=10)** I'm reminded of a time when I was a young tester.
>
> **[0:13](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=13)** I found a bug while testing newly-deployed code.
>
> **[0:16](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=16)** The issue was barely detectable from a user's perspective.
>
> **[0:19](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=19)** However, I knew it was there.
>
> **[0:22](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=22)** Over the course of a few days, digging really far into the code, I was finally able to nail it down.
>
> **[0:28](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=28)** I created a detailed ticket.
>
> **[0:30](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=30)** I dropped it in the queue and waited for acknowledgement of having found a really difficult bug.
>
> **[0:36](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=36)** Proud of myself. I did everything I could to speak about the issue and advocate for its correction.
>
> **[0:42](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=42)** It was so very important that the time I spent was validated by someone fixing the issue I found.
>
> **[0:48](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=48)** Unfortunately, the bug was never fixed.
>
> **[0:51](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=51)** What I failed to understand at that time in my career was the effort I put into discovering the bug was not what made it a high-priority.
>
> **[1:00](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=60)** My effort didn't directly correlate with the impact of the issue.
>
> **[1:04](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=64)** The bug's impact on the business and product is what determined whether it got fixed or not.
>
> **[1:09](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=69)** A lesson I only desire to learn once and a very true lesson at that.
>
> **[1:14](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=74)** Finding bugs is only one part of a tester's mission when working on a team.
>
> **[1:19](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=79)** Being someone who understands a bug's importance to the business is another.
>
> **[1:23](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=83)** That's not to say that the decision to fix a bug should only lie in the hands of a tester.
>
> **[1:29](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=89)** On the contrary, as an [[Agile Development|agile]] team, it should be documented enough to assess the impact the bug brings into the project.
>
> **[1:36](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=96)** The bug should serve as a discussion piece in evaluating what degree of quality to uphold.
>
> **[1:42](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=102)** A tester finds an issue and helps the team understand its impact.
>
> **[1:47](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=107)** If the bug discovered is one that will cause substantial issues, it should be communicated that way.
>
> **[1:53](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=113)** The team should decide if the bug should be fixed or not based on the behavior and description of the issue, the tester will then advocate for the movement of the bug through the workflow to completeness.
>
> **[2:05](https://www.linkedin.com/learning/agile-testing-2/bug-advocacy-19296836?u=76281980&t=125)** Understanding the priority established by the business and seeing that the issue gets corrected is a key part of a tester's job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - it (1)

#### [Test matrices](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=0)** - The trick to completing work quickly isn't speed, but efficiency.
>
> **[0:05](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=5)** As a tester, one thing's for sure, the ability to make plans around testing and covering all of the areas of a product that need testing is a skill worth investing in.
>
> **[0:15](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=15)** Oftentimes when testing a product for an organization in order to test in a way that covers most use cases, a tester needs to be knowledgeable about a few things.
>
> **[0:25](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=25)** What to test, where to test, and on which devices to test.
>
> **[0:31](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=31)** Let's start with what to test.
>
> **[0:33](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=33)** When a team is working to build an application, common questions like, "What are we building?
>
> **[0:38](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=38)** Why are we building this?
>
> **[0:39](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=39)** And who are we building this for," should be asked to gather general information.
>
> **[0:44](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=44)** This can be used to build out a test plan.
>
> **[0:47](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=47)** A test plan is a general guide that a tester creates and uses to define the scope of work they're going to apply to the application they're testing.
>
> **[0:56](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=56)** This document can be written or mind mapped, and includes information to help track all the product's components.
>
> **[1:03](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=63)** As each portion of functionality is built, a tester can set out the requirements to accompany a plan of action around testing.
>
> **[1:11](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=71)** They can use it to outline their approach to establish and maintain quality within a product.
>
> **[1:17](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=77)** Once a test plan is established, being descriptive about where the testing will take place is the next factor in fully covering a product.
>
> **[1:25](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=85)** This portion of the test plan is a matter of where users are using the product, not necessarily what is being built.
>
> **[1:32](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=92)** Tools such as [[Google]] Analytics or software like Looker or Fabric can be used to help assess information such as what percentage of users are using your product on each browser?
>
> **[1:44](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=104)** Based on the information you find, expectations of testability can be established.
>
> **[1:49](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=109)** For example, depending on the browser with the highest usage or business revenue, a tester can determine the most important browsers to test.
>
> **[1:58](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=118)** And since browser usage varies from one device to another or when developing a native application, a tester will need to determine the most common devices being used for the product.
>
> **[2:09](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=129)** This is mainly necessary for design-heavy UI.
>
> **[2:12](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=132)** Each device has different screen sizes and break points, which has the capacity to alter the way a product is displayed.
>
> **[2:20](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=140)** Understanding which devices a product is being used on will help further build out a realistic test plan, which will assist your tester in covering the highest percentage of usage.
>
> **[2:32](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=152)** A final consideration is operating systems.
>
> **[2:35](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=155)** Adding all of this information would create a large laundry list of testing.
>
> **[2:40](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=160)** Looking closely at the prioritized list of browsers, clients, devices, and platforms that a product is used on, a tester can set up certain combinations to reduce testing time.
>
> **[2:51](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=171)** This is sometimes called a testing matrix.
>
> **[2:54](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=174)** Consider the Safari browser, for example.
>
> **[2:57](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=177)** This browser functions on many types of devices.
>
> **[3:00](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=180)** If you know that usage is high for Safari on three different devices, a tester could utilize this information to understand the testing scope.
>
> **[3:09](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=189)** If it's only functionality that's being tested, consistency across all browsers is expected.
>
> **[3:15](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=195)** Issues are likely introduced by the operating system, and so it would be redundant to test Safari on both iPad and iPhone, considering they run the same OS.
>
> **[3:26](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=206)** Using a testing matrix to document that a product only needs to be tested on an iPhone or on an iPad, will prevent the tester from taking the time to test functionality on both.
>
> **[3:37](https://www.linkedin.com/learning/agile-testing-2/test-matrices-19801486?u=76281980&t=217)** Testing matrices are an efficient way to hone in on the most important platforms to test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **Code Identifiers:** ipad (2), iphone (2)
> **Analogies:** such as (2), for example (2)
> **Tools:** safari (3)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1), find (1)
> **Prerequisites:** set up (1)
> **Speakers:** - the (1)


### 4. Agile Testing In Action

[↑ Back to Table of Contents](#table-of-contents)

#### [Manual testing](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=0)** - Testing is the art of looking for all possible combinations of adverse and positive effects on a software and applying a condition to them.
>
> **[0:09](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=9)** This is done by many ways, one of which is [[Manual Testing]].
>
> **[0:13](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=13)** This term is a bit deceiving.
>
> **[0:15](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=15)** Manual tests often involve some automated aspects.
>
> **[0:18](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=18)** Manual really means that the test is kicked off, executed, or stewarded through the process by a person.
>
> **[0:25](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=25)** The emphasis on cognition to execute is the most evident distinction of manual testing being held within the confines of the human condition to conduct such tests.
>
> **[0:36](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=36)** Approaching an application with an eye to know more about it is the premise for all testing.
>
> **[0:41](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=41)** And testing the same way a user would engage with the software speaks very much to the breadth and possibilities of testing.
>
> **[0:48](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=48)** No one uses a tool the same way, so considering all of the ways a tool can be used may inform how much testing is needed.
>
> **[0:56](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=56)** Observing the very basic use cases of an application by positive testing to ensure what is supposed to be present is, is a great first step in understanding testing.
>
> **[1:07](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=67)** This approach confirms the completion and correctness of a product by making sure it works under all positive conditions.
>
> **[1:15](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=75)** On the adverse side of positive testing, negative testing is in the same genre of testing to confirm the functionality of an application.
>
> **[1:23](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=83)** But, this testing approach is used to ensure that any misinformation or incorrect entry into the application is calculated as such, denying accreditation.
>
> **[1:34](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=94)** For example, if an application requires a user to log in, using incorrect login criteria would not result in success.
>
> **[1:42](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=102)** However, these tests will pass in validating the correct behavior of the application, which is denying access.
>
> **[1:50](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=110)** The major advantage of manual testing is to explore and discover, leading to further understanding of an application.
>
> **[1:57](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=117)** This is called exploratory testing.
>
> **[2:00](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=120)** The cognitive approach to addressing a software by stretching, moving, trying, or even shrinking aspects of the software.
>
> **[2:08](https://www.linkedin.com/learning/agile-testing-2/manual-testing-19295905?u=76281980&t=128)** Exploratory testing reveals strengths and weaknesses within its design, which is a major benefit when building lasting software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (3)
> **Definitions:** is a  (3), means that (1), is called (1)
> **Analogies:** for example (1)
> **Speakers:** - testing (1)

#### [Test automation](https://www.linkedin.com/learning/agile-testing-2/test-automation-19299608?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-testing-2/test-automation-19299608?u=76281980&t=1)** - People simply cannot execute certain tests at the speed or mass needed to evaluate specific information about the software.
>
> **[0:08](https://www.linkedin.com/learning/agile-testing-2/test-automation-19299608?u=76281980&t=8)** [[Load Testing]] or understanding the conditions of a software when under extreme exposure or visitation is a scenario in which a human would have a hard time alone performing.
>
> **[0:19](https://www.linkedin.com/learning/agile-testing-2/test-automation-19299608?u=76281980&t=19)** And so the answer to these questions brings another tool into a tester's tool belt, [[Test Automation]].
>
> **[0:27](https://www.linkedin.com/learning/agile-testing-2/test-automation-19299608?u=76281980&t=27)** A series of tests that needs to be run in succession at rapid speed will best be served by automating the process.
>
> **[0:34](https://www.linkedin.com/learning/agile-testing-2/test-automation-19299608?u=76281980&t=34)** Test automation is a very regular practice in testing that does what humans are not able to do by the simple fact that testing is either redundant, excessive, or extreme.
>
> **[0:45](https://www.linkedin.com/learning/agile-testing-2/test-automation-19299608?u=76281980&t=45)** In these cases, the tests being performed are not necessarily tests, but are checks put in place to make sure the product being built maintains its composure under stressed conditions.
>
> **[0:56](https://www.linkedin.com/learning/agile-testing-2/test-automation-19299608?u=76281980&t=56)** Whether you're implementing new code or ramping a software from a low exposure rate to 100% of users, these conditions promote a need to keep tabs on performance.
>
> **[1:07](https://www.linkedin.com/learning/agile-testing-2/test-automation-19299608?u=76281980&t=67)** This is what test automation is for.
>
> **[1:10](https://www.linkedin.com/learning/agile-testing-2/test-automation-19299608?u=76281980&t=70)** Take a regression suite, for example.
>
> **[1:12](https://www.linkedin.com/learning/agile-testing-2/test-automation-19299608?u=76281980&t=72)** This series of tests ensures all key factors of an application are, in fact, working.
>
> **[1:17](https://www.linkedin.com/learning/agile-testing-2/test-automation-19299608?u=76281980&t=77)** Automating a regression suite provides full coverage on everything in that suite.
>
> **[1:23](https://www.linkedin.com/learning/agile-testing-2/test-automation-19299608?u=76281980&t=83)** Tasking a tester with manually walking through an entire application is a poor and expensive use of that tester's time.
>
> **[1:30](https://www.linkedin.com/learning/agile-testing-2/test-automation-19299608?u=76281980&t=90)** Some tests need to run frequently and others are too complex to execute manually.
>
> **[1:36](https://www.linkedin.com/learning/agile-testing-2/test-automation-19299608?u=76281980&t=96)** If a test only needs to run once every six months and consists of 10 steps, it might not be worthwhile to automate.
>
> **[1:44](https://www.linkedin.com/learning/agile-testing-2/test-automation-19299608?u=76281980&t=104)** However, if the test should run every five minutes, then naturally having a tester work through 10 steps every five minutes is unnecessary.
>
> **[1:53](https://www.linkedin.com/learning/agile-testing-2/test-automation-19299608?u=76281980&t=113)** Looking for ways to automate tests is a better value, in light of time, for your regular or extreme testing tasks.
>
> **[2:01](https://www.linkedin.com/learning/agile-testing-2/test-automation-19299608?u=76281980&t=121)** Automated tests can help support [[Manual Testing]] by identifying unexpected changes within your code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test Automation]] (3), [[Load Testing]] (1), [[Manual Testing]] (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - people (1)

#### [Continuous integration](https://www.linkedin.com/learning/agile-testing-2/continuous-integration-19297644?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-testing-2/continuous-integration-19297644?u=76281980&t=0)** - [[Continuous Integration (CI)|Continuous integration]] is the practice of regularly pushing code to a shared repository.
>
> **[0:06](https://www.linkedin.com/learning/agile-testing-2/continuous-integration-19297644?u=76281980&t=6)** The idea behind regular integration, regular, being a measure established by a team, is to run quality checks on smaller batches of code.
>
> **[0:15](https://www.linkedin.com/learning/agile-testing-2/continuous-integration-19297644?u=76281980&t=15)** By integrating these smaller bits, the result is more feedback sooner.
>
> **[0:20](https://www.linkedin.com/learning/agile-testing-2/continuous-integration-19297644?u=76281980&t=20)** With this feedback, a tester is better able to identify and test the issues that are found, knowing they're coming from the last, small integration.
>
> **[0:29](https://www.linkedin.com/learning/agile-testing-2/continuous-integration-19297644?u=76281980&t=29)** This process minimizes the testing scope to the most recently implemented code.
>
> **[0:35](https://www.linkedin.com/learning/agile-testing-2/continuous-integration-19297644?u=76281980&t=35)** Instead of waiting days or even weeks to run quality checks, they are done at each step instead of at the end of a feature or epic.
>
> **[0:43](https://www.linkedin.com/learning/agile-testing-2/continuous-integration-19297644?u=76281980&t=43)** This shifts the process of quality from testing by finding a needle in a haystack to testing by identifying the elephant in the room.
>
> **[0:52](https://www.linkedin.com/learning/agile-testing-2/continuous-integration-19297644?u=76281980&t=52)** The hope is, as a team continues to size and implement these smaller iterations, they will receive status updates more often.
>
> **[1:00](https://www.linkedin.com/learning/agile-testing-2/continuous-integration-19297644?u=76281980&t=60)** However, this process is not for the faint-of-heart.
>
> **[1:04](https://www.linkedin.com/learning/agile-testing-2/continuous-integration-19297644?u=76281980&t=64)** When a team commits to a continuous integration schedule, it must be matched with the appropriate tools to provide clear feedback.
>
> **[1:11](https://www.linkedin.com/learning/agile-testing-2/continuous-integration-19297644?u=76281980&t=71)** Committing smaller batches of code must align with other tools of quality.
>
> **[1:16](https://www.linkedin.com/learning/agile-testing-2/continuous-integration-19297644?u=76281980&t=76)** Aside from manual means of testing, a continuous integration schedule requires having a fully automated regression suite.
>
> **[1:24](https://www.linkedin.com/learning/agile-testing-2/continuous-integration-19297644?u=76281980&t=84)** The purpose of this tool is to catch any items of regression right away in order to identify whether the new code has caused issues in previously existing code.
>
> **[1:34](https://www.linkedin.com/learning/agile-testing-2/continuous-integration-19297644?u=76281980&t=94)** This empowers the team to recognize problematic changes as they happen, giving them the option to roll back the newly implemented code or construct and merge in a fix.
>
> **[1:45](https://www.linkedin.com/learning/agile-testing-2/continuous-integration-19297644?u=76281980&t=105)** Continuous integration can be difficult to implement but it can pay dividends in terms of testing outcomes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Integration (CI)|Continuous integration]] (4)
> **Speakers:** - continuous (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/agile-testing-2/next-steps-23016445?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-testing-2/next-steps-23016445?u=76281980&t=0)** - Thanks for joining me for [[Agile Development|agile]] testing.
>
> **[0:03](https://www.linkedin.com/learning/agile-testing-2/next-steps-23016445?u=76281980&t=3)** This is a vast topic, so if this course has sparked your interest, I urge you to keep learning.
>
> **[0:08](https://www.linkedin.com/learning/agile-testing-2/next-steps-23016445?u=76281980&t=8)** If you'd like to connect, I'd love to hear from you.
>
> **[0:11](https://www.linkedin.com/learning/agile-testing-2/next-steps-23016445?u=76281980&t=11)** Agile testing is like baking a great batch of cookies.
>
> **[0:14](https://www.linkedin.com/learning/agile-testing-2/next-steps-23016445?u=76281980&t=14)** By verifying and validating your work along the way, you can make small adjustments that will delight your users in the end.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - thanks (1)


## Instructor

- [[Ash Coleman]]

## Skills Covered

- Agile Testing

## Path Context

### In [[TestMu AI Software Testing Professional Certificate]]
← [[Software Testing Tips Weekly]] | **3 of 4** | [[Succeeding in Software Testing]] →

### In [[Develop Your Skills as a Software Project Manager]]
← [[Agile Software Development- Kanban for Developers (2019)]] | **11 of 11**

## Part of

- [[TestMu AI Software Testing Professional Certificate]]

## Appears In

- [[TestMu AI Software Testing Professional Certificate]]
- [[Develop Your Skills as a Software Project Manager]]

---

[↑ Back to top](#)