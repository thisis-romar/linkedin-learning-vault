---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: understanding-manual-testing
url: "https://www.linkedin.com/learning/understanding-manual-testing"
duration_minutes: 40
duration: 40m
level: Intermediate
updated: 2/6/2026
learners: 59109
skills:
  - Quality Assurance
  - Manual Testing
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQET3VMfDxDEgQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1659547561066?e=2147483647&amp;v=beta&amp;t=M_5qZaMDRQaY1tqkEnxANnDkuMdEYOX1Y0DPzzcc7ew"
linkedin_topic: Software Development
learning_paths:
  - '[[Getting Started with Software Testing]]'
prev_courses:
  - '[[Programming Foundations- Software Testing-QA]]'
next_courses:
  - '[[Test Automation Foundations]]'
path_nav: '[{"path":"Getting Started with Software Testing","position":2,"total":12,"prev":"Programming Foundations- Software Testing-QA","next":"Test Automation Foundations"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/quality-assurance
  - skill/manual-testing
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Understanding%20Manual%20Testing.md)

![Understanding Manual Testing](https://media.licdn.com/dms/image/v2/C560DAQET3VMfDxDEgQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1659547561066?e=2147483647&amp;v=beta&amp;t=M_5qZaMDRQaY1tqkEnxANnDkuMdEYOX1Y0DPzzcc7ew)

# Understanding Manual Testing

> Did you know that manual testing is not all that different from creating a piece of art? While new technology has enabled quality assurance teams to automate many processes in product testing, the best and most reliable testing tools are still wielded manually with human skills, attention to nuance, and complex, agile understanding. In this course, instructor Mike Fine gives you the foundational k

> [LinkedIn Learning](https://www.linkedin.com/learning/understanding-manual-testing) | 40m | Intermediate | 59K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Mastering manual testing](#mastering-manual-testing)
  - [What you should know](#what-you-should-know)
  - [The argument: Automated vs. manual testing](#the-argument-automated-vs-manual-testing)
- [**1. Overview**](#1-overview) (3 videos)
  - [What is manual testing?](#what-is-manual-testing)
  - [Why is manual testing done?](#why-is-manual-testing-done)
  - [Types of manual testing](#types-of-manual-testing)
- [**2. Execution**](#2-execution) (4 videos)
  - [Test plans and use cases](#test-plans-and-use-cases)
  - [It's not all black and white: Box testing](#its-not-all-black-and-white-box-testing)
  - [Bugs and the output of manual testing](#bugs-and-the-output-of-manual-testing)
  - [Make manual testing work](#make-manual-testing-work)
- [**Conclusion**](#conclusion) (2 videos)
  - [Where do you start?](#where-do-you-start)
  - [Be an exceptional manual tester](#be-an-exceptional-manual-tester)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Mastering manual testing](https://www.linkedin.com/learning/understanding-manual-testing/mastering-manual-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/mastering-manual-testing?u=76281980&t=0)** - [Mike] Many of the most common things we do manually have been automated or improved by technology.
>
> **[0:07](https://www.linkedin.com/learning/understanding-manual-testing/mastering-manual-testing?u=76281980&t=7)** However, we've learned over time that there are applications where a machine can't equal a human.
>
> **[0:15](https://www.linkedin.com/learning/understanding-manual-testing/mastering-manual-testing?u=76281980&t=15)** It's like the difference between painting a room and painting a portrait.
>
> **[0:19](https://www.linkedin.com/learning/understanding-manual-testing/mastering-manual-testing?u=76281980&t=19)** These professionals don't just find bugs.
>
> **[0:22](https://www.linkedin.com/learning/understanding-manual-testing/mastering-manual-testing?u=76281980&t=22)** They understand the goals and objectives of the product.
>
> **[0:26](https://www.linkedin.com/learning/understanding-manual-testing/mastering-manual-testing?u=76281980&t=26)** [[Manual Testing]] helps development teams understand more than just a pass-fail approach to test results.
>
> **[0:33](https://www.linkedin.com/learning/understanding-manual-testing/mastering-manual-testing?u=76281980&t=33)** I'm Mike Fine.
>
> **[0:34](https://www.linkedin.com/learning/understanding-manual-testing/mastering-manual-testing?u=76281980&t=34)** I've been running product tests for nearly 30 years.
>
> **[0:37](https://www.linkedin.com/learning/understanding-manual-testing/mastering-manual-testing?u=76281980&t=37)** Join me as we explore the important role manual testing plays in ensuring a great product.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (2)
> **CLI Commands:** find (1)
> **Analogies:** it's like (1)
> **Speakers:** - [mike] (1)

#### [What you should know](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=0)** - [Instructor] If you are new to quality, [[Manual Testing]] is the absolute best place to start your journey.
>
> **[0:06](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=6)** It's where all the fundamentals of testing originate, and it's where you are going to be able to learn the entire process of how software is tested.
>
> **[0:15](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=15)** However, before beginning this journey, there are a few things you should know.
>
> **[0:21](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=21)** For starters, you ought to have a good basic understanding of how a product is developed.
>
> **[0:27](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=27)** You won't need to know the details, but understanding the framework will help you learn the when, why, and how of testing software.
>
> **[0:35](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=35)** It makes grasping the concepts a lot easier if you understand where you sit in the process.
>
> **[0:42](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=42)** Manual testing is a simple concept to understand but has many very complicated components that are incorporated into its design.
>
> **[0:52](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=52)** While I won't go into a lot of detail in this course on each technique used, I may introduce some concepts and vocabulary you'll want to follow up with and learn in detail.
>
> **[1:03](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=63)** I encourage you to dig deeper into these concepts to ensure you have a full understanding of the various test techniques.
>
> **[1:11](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=71)** To help explain and illustrate the challenges manual testers face, I'll be using a fictional software application called Explore California.
>
> **[1:20](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=80)** This is a travel tool for out-of-state visitors who are looking to book activities, reserve accommodations, and learn about places to visit.
>
> **[1:28](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=88)** In our example, you'll see our team working towards release and using manual testing to deliver a great software product.
>
> **[1:37](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=97)** Last, the most important thing to know is that manual testing is best learned when you do it yourself.
>
> **[1:44](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=104)** This course is designed to help you embark on this journey by covering all the information you might need to know to begin working as a manual tester.
>
> **[1:53](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=113)** Yet, even with my best efforts, I can't accommodate all the differences that exist in our industry.
>
> **[1:59](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=119)** Your individual software, your company, your product, or even your quality team may take a different approach to manual testing than I present here.
>
> **[2:10](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=130)** While there are industry standards, the culture and history in a workplace can alter these processes.
>
> **[2:18](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=138)** If you are new to testing, I encourage you to keep an open mind and use this course to help you establish a great foundation for learning.
>
> **[2:27](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=147)** If you're experienced, you'll get some great baseline data.
>
> **[2:31](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=151)** Being a tester is a rewarding experience.
>
> **[2:35](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=155)** Every day, you learn new things that improve your own skills as you explore your company's various applications.
>
> **[2:41](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=161)** It can be fun being on the leading edge of a product's release.
>
> **[2:45](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=165)** Manual testing will allow you to become an expert on the product you test.
>
> **[2:50](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=170)** Best of all, it's excellent knowing that your hard work is helping your company and team deliver a better product.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (6)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### [The argument: Automated vs. manual testing](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=0)** - [Instructor] Before we dive any deeper into the details of [[Manual Testing]], we need to address a common argument and misconception I've encountered in my career.
>
> **[0:09](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=9)** And you are bound to hear about.
>
> **[0:12](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=12)** I have met many test managers who've argued for automating as much of their testing as possible.
>
> **[0:17](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=17)** They see the speed and efficacy of an automated program as superior to a manual approach.
>
> **[0:24](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=24)** In fact, they often argue that manual testing should be abandoned all together.
>
> **[0:29](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=29)** There is no question that automation is a valuable and important tool in performing quality testing.
>
> **[0:37](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=37)** In a large application, manually reviewing hundreds of thousands of lines of code, and clicking the endless elements that a user face truly test the limits of human capabilities.
>
> **[0:49](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=49)** It's clear that these tools are needed.
>
> **[0:52](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=52)** It's why you'll see articles and videos pitting manual versus automation and learning why one is superior to the other.
>
> **[1:00](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=60)** The confusion in this argument is there is a belief that automated solutions are designed to replace a manual approach.
>
> **[1:07](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=67)** In the beginning, this was probably the case.
>
> **[1:09](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=69)** Before automation existed, everything was done manually.
>
> **[1:14](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=74)** Naturally, as automation displaced numerous manual test cases, many people probably predicted it would replace every case eventually.
>
> **[1:23](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=83)** However, just as automation has evolved, so has manual testing.
>
> **[1:29](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=89)** The contemporary version of manual testing explores the process through the expertise and experience of the quality engineer.
>
> **[1:36](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=96)** This is not a versus situation.
>
> **[1:39](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=99)** Automated testing exists as one part of a variable and complete quality solution.
>
> **[1:44](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=104)** Manual testing serves as another.
>
> **[1:47](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=107)** The two processes are not in competition with one another, but actually compliment one another and provide very different test results.
>
> **[1:57](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=117)** Automation delivers excellent scalable testing at a speed modern team's demand.
>
> **[2:03](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=123)** Manual testing provides the close scrutiny and examination that your software requires.
>
> **[2:09](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=129)** Measuring one approach versus the other is an argument that takes away from the focus of any quality program.
>
> **[2:15](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=135)** Between the two approaches, you give the product a complete evaluation that ensures the best possible product is delivered.
>
> **[2:22](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=142)** And in the end, that's all that matters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (6)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - [instructor] (1)


### 1. Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [What is manual testing?](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=0)** - [Educator] The simple question of what is [[Manual Testing]]?
>
> **[0:03](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=3)** Has an equally simple answer.
>
> **[0:06](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=6)** It is performing tests on a product manually, meaning by hand, and more recently, without any automation or special tools.
>
> **[0:14](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=14)** It's looking at the product from a user's perspective with a focus at identifying the pitfalls, design flaws, and issues.
>
> **[0:23](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=23)** While this is an easy answer, it's by no means easy.
>
> **[0:29](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=29)** Manual testing requires a lot of technical skills and a deep understanding of the product being tested.
>
> **[0:35](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=35)** It's whole focus is to reduce or eliminate issues users might encounter.
>
> **[0:40](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=40)** So there is a level of expertise necessary to accomplish this goal.
>
> **[0:45](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=45)** When you perform manual testing, you will conduct complicated test cases designed to stretch the reliability and performance of a product.
>
> **[0:54](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=54)** You need to have focus and determination.
>
> **[0:59](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=59)** At its core, manual testing is the original method of testing.
>
> **[1:04](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=64)** Quality professionals learn the product, review the product documentation, design a strategy to test, execute that strategy, then report the results.
>
> **[1:15](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=75)** Each of these steps are intricate and comprehensive, requiring skills, expertise, and experience to execute effectively.
>
> **[1:23](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=83)** As a manual tester, you'll be expected to report your findings in detail and then follow up with regression testing to verify developers fix the issues you discovered.
>
> **[1:32](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=92)** This process will mean running your test cases several times, both looking for new and eliminating old issues.
>
> **[1:42](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=102)** Much more than clicking buttons and reviewing the automated results, you'll be examining logic patterns, assessing performance, and evaluating compatibility.
>
> **[1:52](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=112)** In fact, manual testing focuses on using processes designed to reveal the limitations and issues, not only with the product itself, but how it is being used, it's functionality, and its flow.
>
> **[2:04](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=124)** Don't be intimidated or concerned if you are new to manual testing.
>
> **[2:10](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=130)** The one key element that differentiates you is that you are human.
>
> **[2:16](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=136)** Your own experience, your approach, and product knowledge are the tools you'll use.
>
> **[2:23](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=143)** You'll be refining your skills of observation to identify issues, not only with the software itself, but how it's used.
>
> **[2:30](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=150)** Manual testing seeks to eliminate the gap where automation can't go.
>
> **[2:36](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=156)** Many great manual testers learn the testing process through experience.
>
> **[2:41](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=161)** They can follow a script, execute the test plan, and explore the use cases.
>
> **[2:46](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=166)** They evaluate the use cases and the user stories as they evaluate the features of the product.
>
> **[2:52](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=172)** Your technical foundation will help you to explain failures in a way automation can't.
>
> **[2:58](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=178)** Whether it's a broken workflow or a system crash, you'll be using data to justify your issues but your expertise will help explain its impact.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (7)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [educator] (1)

#### [Why is manual testing done?](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=0)** - [Instructor] With daily advancements in all aspects of technology, it's good practice to ask why we continue to perform testing in what seems like an antiquated manner.
>
> **[0:13](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=13)** As I've noted, many see [[Manual Testing]] as an old process and unnecessary.
>
> **[0:19](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=19)** The speed, number of defects, cost savings, and agility of automation deliver a huge value to a testing program.
>
> **[0:26](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=26)** It also aligns well with the [[Agile Development|agile]] processes for development.
>
> **[0:30](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=30)** However, automation has its flaws.
>
> **[0:33](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=33)** For starters, the whole system disconnects the tester from the actual software.
>
> **[0:38](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=38)** It's designed to simply output results without developing an expertise in the product.
>
> **[0:44](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=44)** Moreover, it has a much longer prep time, and requires costly software tools.
>
> **[0:50](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=50)** Most important, it's missing the most critical element, human interaction.
>
> **[0:55](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=55)** The fact is most [[Microsoft Products|products]] are designed for people, which means people need to be looking at it.
>
> **[1:01](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=61)** Computers don't care about usability, intuitive design, aesthetics, and some aspects of performance.
>
> **[1:09](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=69)** Functionality isn't a straightforward concept.
>
> **[1:12](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=72)** It has context.
>
> **[1:14](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=74)** And whether something is considered functional is defined by your user.
>
> **[1:19](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=79)** Manual testing delivers this context.
>
> **[1:22](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=82)** Testers not only look at the software from the standpoint of if it works, but they also look at how it works.
>
> **[1:30](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=90)** They measure the experience of the feature and determine if it operates as design.
>
> **[1:36](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=96)** Manual testing often reveals things that work well from a functional standpoint, but don't deliver in many other ways.
>
> **[1:45](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=105)** Our Explore California team has noted that during their manual testing, they discovered that when entering search criteria into its built-in search engine, ads from the browser are preempting the [[Algorithms]] results.
>
> **[1:59](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=119)** Testers search for a good place for breakfast but are seeing corporate advertisements for national restaurants rather than local California-based businesses.
>
> **[2:09](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=129)** While the automated testing of the search engine shows its functioning exactly as it's designed and the ads are the expected result, it's still impacting the [[User Experience (UX)|user experience]].
>
> **[2:20](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=140)** Moreover, everyone knows a California app placing preference on a national chain is not a good look.
>
> **[2:29](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=149)** The team reports this as a bug, and shares these manual testing results, putting context around how the app should perform.
>
> **[2:37](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=157)** Another key benefit of manual testing is it doesn't have any lead time.
>
> **[2:42](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=162)** If a tester is properly prepared, he or she can begin working on test cases and performing examinations of the software immediately because manual testing begins the moment the software leaves the developer's hands.
>
> **[2:56](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=176)** It also functions exceptionally well in agile processes.
>
> **[3:00](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=180)** Additionally, manual testing is known for its flexibility in the [[Software Development]] life cycle.
>
> **[3:06](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=186)** Automation often has rigid requirements for the state and quality and type of software that can be tested.
>
> **[3:12](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=192)** However, manual tests can be executed on anything, even narrowed to target specific limited areas of the product.
>
> **[3:19](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=199)** This means testing can get engaged early on specific components and provide immediate value.
>
> **[3:26](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=206)** There is also a random component of manual testing, which can help reveal issues.
>
> **[3:32](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=212)** Automation often runs its testing in specified sequences.
>
> **[3:36](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=216)** It's a robot.
>
> **[3:38](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=218)** And by that nature, predictable.
>
> **[3:41](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=221)** A manual tester can select any element of a software application to assess and begin testing in any order.
>
> **[3:49](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=229)** This random character helps reveal potentially serious issues because many users don't follow precise patterns.
>
> **[3:57](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=237)** Manual testing does have its limitations.
>
> **[4:00](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=240)** But its value is immense.
>
> **[4:03](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=243)** It's why even after decades of improvement in quality automation, manual testing remains an important and central part of the quality test process.
>
> **[4:12](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=252)** While [[Artificial Intelligence (AI)|artificial intelligence]] and machine learning continue to evolve, the human component of manual testing remains a valuable aspect that can't be replicated with automated tools.
>
> **[4:24](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=264)** Well, at least not yet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (12), [[Agile Development|Agile]] (2), [[Microsoft Products|Products]] (1), [[Algorithms]] (1), [[User Experience (UX)|User experience]] (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Types of manual testing](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=0)** - [Instructor] [[Manual Testing]] is a complicated system designed to assess every aspect of a product, from its concept to its ultimate release.
>
> **[0:09](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=9)** Here we are reviewing the most typical types of manual testing.
>
> **[0:13](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=13)** However, each of these have their own subtypes that delve into specific areas of the software.
>
> **[0:20](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=20)** The point is, these are more tied to the product state.
>
> **[0:24](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=24)** They are specifically aligned with the stage of the product, and at each of those stages you'll be accomplishing specific quality tests.
>
> **[0:32](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=32)** Functional testing is the first and most foundational approach in manual testing.
>
> **[0:37](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=37)** It's effectively inputting data into a module of the software and noting its output.
>
> **[0:43](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=43)** You don't focus on the how or why the application operates, you just check to make sure the results are in line with what you expect.
>
> **[0:51](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=51)** There are dozens of kinds of functional tests that a manual tester will perform, but at their core, they all exist to ensure the software is functioning as it should.
>
> **[1:02](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=62)** [[Integration Testing]] takes the functional testing and performs it on multiple components of the application to ensure the combined pieces haven't broken in the process of bringing it together.
>
> **[1:13](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=73)** Integration can be on a couple components or on multiple elements, in either instance, you are testing the various functions as a group and looking to ensure that they play nicely.
>
> **[1:24](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=84)** Once the software is combined into a complete application, you'll be performing system testing.
>
> **[1:30](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=90)** If everything during integration testing seems to be working well, developers will want to combine all the pieces together to see if the full suite is operating as design.
>
> **[1:39](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=99)** Both systems test and integration testing are effectively functional tests, but now our scale has grown to the full application or the system.
>
> **[1:49](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=109)** If everything seems stable, and the software is getting close to being fully functional, it moves to compatibility testing.
>
> **[1:57](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=117)** This test is not a functional test.
>
> **[2:01](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=121)** It's about looking outside of the product and measuring whether it works in the environment it's designed to operate.
>
> **[2:07](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=127)** This could be the operating system, a browser, network, specific [[Hardware]], or even a smart device.
>
> **[2:13](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=133)** It's just ensuring everything is compatible.
>
> **[2:16](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=136)** Moving past compatibility testing, things get a little trickier.
>
> **[2:20](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=140)** In [[End-to-end Testing]], you manually attempt to simulate a real world environment to see if the application is working.
>
> **[2:28](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=148)** It's a nuts and bolts tests of every piece assembled.
>
> **[2:31](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=151)** You'll test the entire chain of activity, as close to the real world as possible.
>
> **[2:35](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=155)** The connected components, data, and everything in between, or end-to-end is created to ensure the product doesn't fail.
>
> **[2:43](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=163)** Throughout all these phases, you will also be performing regression testing.
>
> **[2:48](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=168)** This is a manual test designed to ensure nothing is broken when new changes have been implemented.
>
> **[2:54](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=174)** It's possibly the hardest and most mundane testing you'll perform.
>
> **[2:58](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=178)** You spend time looking closely at old bugs, hoping nothing's gone wrong.
>
> **[3:04](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=184)** Regression is about integrity.
>
> **[3:06](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=186)** Every new version is changed and it's your goal to ensure those changes didn't break anything.
>
> **[3:12](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=192)** Last, and possibly the most rewarding phase of manual test, is the acceptance testing.
>
> **[3:17](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=197)** At this point, you've been buried in the software and now you're just evaluating to see if it delivers on the specification.
>
> **[3:24](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=204)** It's one of the most critical manual tests, but by the time you've done this testing you should be so familiar with the application, it should also be the easiest to deliver.
>
> **[3:33](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=213)** Acceptance simply tells us whether the goals of our product team have been met.
>
> **[3:37](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=217)** Manual testing encompasses a lot.
>
> **[3:39](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=219)** At each stage of the product, the manual tester is evaluating a different facet of the application and assessing the quality of the software.
>
> **[3:47](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=227)** As I've noted, these different tests map naturally to the stages of the product in its development.
>
> **[3:54](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=234)** However, while I've presented them here in a serial order, it's very possible you may test them in a different sequence.
>
> **[4:01](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=241)** It's essential you learn all these different [[Forms]] of testing and treat them as objects rather than as a process.
>
> **[4:07](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=247)** All these manual test types can be performed at any stage of development of the software.
>
> **[4:13](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=253)** Projects and modern processes don't generally operate in a serial fashion.
>
> **[4:18](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=258)** You may be working with teams assigned to different parts.
>
> **[4:21](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=261)** [[Agile Development|Agile]] processes may even have you performing a piece of all these types, in a short sprint.
>
> **[4:27](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=267)** These are simply tools in your toolbox to help ensure the product meets your quality goals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (4), [[Integration Testing]] (3), [[Hardware]] (1), [[End-to-end Testing]] (1), [[Forms]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)


### 2. Execution

[↑ Back to Table of Contents](#table-of-contents)

#### [Test plans and use cases](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=0)** - [Instructor] [[Manual Testing]] is simply a system for approaching a test.
>
> **[0:04](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=4)** It's a suite of skills designed to manually assess a product through its different stages of development.
>
> **[0:10](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=10)** You and your product are unique.
>
> **[0:13](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=13)** And which test cases you choose might differ depending on the goals, objectives, timelines, and other factors.
>
> **[0:21](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=21)** Regardless of what you select, it should be documented in a test plan.
>
> **[0:26](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=26)** At the core of any effective quality program is a process to create a comprehensive test plan.
>
> **[0:33](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=33)** The plan serves as a container to document what will be tested, how it will be tested, when it will be tested, and sometimes even why it is being tested.
>
> **[0:43](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=43)** It's a foundational document intended to guide you through the test period to ensure the product receives a detailed and complete test designed to step you through each stage of the project.
>
> **[0:54](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=54)** The plan prevents you from going astray.
>
> **[0:57](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=57)** A bad bug, a failed feature, new product demands or other distractions can cause test teams to lose focus.
>
> **[1:05](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=65)** The test plan keeps you grounded.
>
> **[1:07](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=67)** It's effectively a checklist of how you plan to execute and the plans contents help bring structure and integrity to your program.
>
> **[1:16](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=76)** For starters, you will be documenting what features and functionality need to be assessed to effectively test the product.
>
> **[1:23](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=83)** Using test cases, you'll correlate your time and processes to the specific area of the software you are evaluating.
>
> **[1:30](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=90)** Each test case will take on a single element of the product, documenting what values, inputs, conditions, procedures and other factors are needed to measure that function.
>
> **[1:41](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=101)** It sounds difficult, but in fact many test cases are repetitive and can be applied across various areas of the product.
>
> **[1:49](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=109)** For example, you might use a similar test case for every input box of the software, slightly adjusting the steps of the case to apply to the specific parameters of the field.
>
> **[1:59](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=119)** In fact, if you find a lot of cases that can be grouped together to be executed across different parts of the product it then becomes a test suite.
>
> **[2:07](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=127)** In our Explore California software, the team is noticing that the car reservation tool operates very similarly to the flight reservation tool.
>
> **[2:18](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=138)** In fact, the configuration and output of these elements are almost identical with only a few small adjustments.
>
> **[2:26](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=146)** Recognizing they can make it more efficient and move more quickly through manual testing, they group the various test cases into a test suite.
>
> **[2:35](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=155)** The test suite now combines all the similar elements and is executed identically on both features, reducing redundancy in the test plan and even better, making the quality process move a lot smoother.
>
> **[2:49](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=169)** They add the new test suite to the plan and throw in a couple extra brief test cases to differentiate cars and planes.
>
> **[2:56](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=176)** They have documented their approach in the plan and refer to it for future testing.
>
> **[3:01](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=181)** Manual testing also takes a unique approach to the user stories and use case tests.
>
> **[3:07](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=187)** In these situations, a feature is being assessed to determine if it meets the needs of users through a specific series of evaluations.
>
> **[3:16](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=196)** In many cases, manual testing is the best method for seeing if it meets the user's needs.
>
> **[3:22](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=202)** Use case and user stories are the answer to an area where automation struggles.
>
> **[3:28](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=208)** There are very limited options when it comes to automating processes to see if a feature meets a user requirements.
>
> **[3:33](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=213)** In fact, manual testing is often specifically called out in a test plan when it comes to this aspect of [[Microsoft Products|products]].
>
> **[3:39](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=219)** While a series of test cases may be documented loosely because of their granular approach, use case and user story testing will be specifically identified and the expected results clearly documented.
>
> **[3:53](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=233)** Whether you are using automated or manual testing, documenting all the test cases and suites in a plan is necessary.
>
> **[4:01](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=241)** It can be a very slow process, but without a test plan it's possible you can miss or overlook key tests.
>
> **[4:10](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=250)** Beyond being an excellent record of your goals and objectives, it also keeps the project on track, ensuring everything is getting completed and the product thoroughly tested.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (6), [[Microsoft Products|Products]] (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [It's not all black and white: Box testing](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=0)** - [Instructor] The terms black-box and white-box testing have been around for years.
>
> **[0:05](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=5)** And while their view of the test world is somewhat antiquated, they remain steadfast tools to approaching a quality project.
>
> **[0:14](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=14)** Moreover, both [[Forms]] contain key procedures for [[Manual Testing]] in a project.
>
> **[0:19](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=19)** While both act is a framework, there are many specific techniques where a manual approach is necessary.
>
> **[0:27](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=27)** Sometimes these are very complicated tests that dig deep into the software's operation.
>
> **[0:33](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=33)** Sometimes the technique evaluates trivial, superficial functionality, however, both are essential for learning the integrity of the software.
>
> **[0:42](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=42)** In both instances, manual and automated processes are used.
>
> **[0:48](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=48)** As noted, both forms of testing employ techniques for executing evaluation of the software.
>
> **[0:53](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=53)** In both white box and black box, a technique is a tool designed to evaluate key components of the product and system to see if it meets the product requirements.
>
> **[1:05](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=65)** In black-box testing, the focus of the product evaluation is on measuring the key functionality of a product without looking into the inner workings of the software.
>
> **[1:16](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=76)** You are basically assessing whether it works or not.
>
> **[1:19](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=79)** In most of the techniques, automation makes the most sense.
>
> **[1:23](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=83)** The sheer number of variables and the mundane nature of this type of testing will make a manual approach prone to errors.
>
> **[1:30](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=90)** Still, black-box testing does use manual testing in some areas.
>
> **[1:35](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=95)** For example, in the error guessing technique, testers watch the software for specific failures.
>
> **[1:42](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=102)** Gathering the data from these tests, the manual tester will develop an idea of potential problem areas, target it, and then guess where to test.
>
> **[1:51](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=111)** Error guessing doesn't sound very scientific, but it's in these random elements where manual testing thrives.
>
> **[1:58](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=118)** White-box testing has a much bigger need for a manual process.
>
> **[2:04](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=124)** In this approach, the software is evaluated from the inside, examining the code for integrity, structure, output, and flow.
>
> **[2:13](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=133)** White-box testing requires test teams to review code line by line, unit by unit, and evaluate each piece.
>
> **[2:21](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=141)** While there are a whole host of debuggers and software tools out there to evaluate the structure and syntax of code, many times it takes a careful eye of an expert quality professional to evaluate it effectively.
>
> **[2:36](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=156)** While manual testing is utilized much more heavily in white-box testing, automation is still a big part.
>
> **[2:42](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=162)** Automation, combined with a pros programming experience, often are leveraged to develop effective code.
>
> **[2:49](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=169)** In all quality testing, the last technique that is frequently used is experience-based testing.
>
> **[2:55](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=175)** In this case, after weeks upon weeks of evaluating the software, quality professionals develop speed, expertise, and skills in looking over everything and identifying potential issues.
>
> **[3:09](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=189)** In these cases, there is little structure, but it's a valuable form of manual testing in both black and white-box tests.
>
> **[3:19](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=199)** What you should take from all of this is that manual testing exists in some form throughout all approaches and techniques.
>
> **[3:27](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=207)** You won't ever know when you'll be asked to utilize your skills in testing, however, with a keen understanding of how the product operates and how to execute the varying techniques, you'll be able to use your manual skills frequently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (6), [[Forms]] (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Bugs and the output of manual testing](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=0)** - [Instructor] As you build a repertoire of skills, techniques and a grasp of the concept surrounding testing, you're going to be using these manual skills to make a better product.
>
> **[0:11](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=11)** The goal of any quality test is to ensure that the product is stable, delivers on its specification and operates as designed prior to the product getting to a customer.
>
> **[0:22](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=22)** The byproduct of this effort are bugs.
>
> **[0:26](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=26)** During [[Manual Testing]], you'll be exploring every aspect of the software and as you move through this process you will encounter anomalies and behaviors that are unexpected, inconvenient, odd and often problematic.
>
> **[0:44](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=44)** Before you decide what these behaviors are, you need to understand what it means to call something a bug.
>
> **[0:51](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=51)** Putting it simply a bug is a function that doesn't work as designed.
>
> **[0:57](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=57)** We could delve into a whole esoteric discussion on what makes a bug and what doesn't, but that never goes well.
>
> **[1:06](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=66)** You see, the problem we have is that, while the definition itself is very clear, what a bug is, is not always clear.
>
> **[1:16](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=76)** Our Explorer California team has discovered a bug in the software.
>
> **[1:21](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=81)** When entering a numerical dollar amount of six digits or more, the software simply crashes.
>
> **[1:28](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=88)** This happens anywhere a dollar value is entered and is impacting the commerce portion of the app.
>
> **[1:34](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=94)** The quality team is using large values to ensure transactions like that don't get created accidentally.
>
> **[1:41](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=101)** The software team pushes back, explaining that it's not likely that anyone will ever enter six figures into a web form to order something like concert tickets, airline tickets, hotels, etcetera.
>
> **[1:54](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=114)** More importantly, the crash effectively delivers the desired result of the software closing.
>
> **[2:01](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=121)** They see this is a non-issue and note that the time it will take to address the issue, will cause the project schedule to slip.
>
> **[2:10](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=130)** In our Explore California example, the discussion on a bug's merit, results and other aspects can easily create division and frustration among the teams.
>
> **[2:19](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=139)** Quality testing can often look like an adversary to developers who are receiving pressure to deliver a product.
>
> **[2:26](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=146)** However, this is where a manual tester has a great opportunity to help both teams benefit.
>
> **[2:33](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=153)** For the quality team, use your skills to speak with data, take steps to document any bug you discover.
>
> **[2:41](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=161)** Very often manual techniques are used to verify bugs, use screenshots, document steps to reproduce, share version information, and provide any other details that will help the developer reproduce the problem.
>
> **[2:55](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=175)** For the developer team, use your manual techniques to seek a workaround, or other solution that might help reduce the friction of testing.
>
> **[3:03](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=183)** The bug is objectively a bug, however, there's nothing that says you can't help reduce or even eliminate the issue as you explore the issue in your testing.
>
> **[3:13](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=193)** As you go through manually evaluating issues, you'll develop expertise in the software application, its features, functionality and overall operation.
>
> **[3:23](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=203)** Your deeper experience means that you can use these skills to provide insight into the tools.
>
> **[3:30](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=210)** Good quality pros are collaborative and they see their role as helping deliver good software to the customer.
>
> **[3:36](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=216)** Just because something doesn't work the way you expect doesn't make it a bug.
>
> **[3:40](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=220)** Just because you discover an issue in your testing, doesn't make it a bug.
>
> **[3:44](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=224)** Bugs are only real when backed by solid data that can be reproduced.
>
> **[3:48](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=228)** Use your manual testing skills to ensure you provide coherent, complete issues that your team can't argue and you'll see it be fixed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (2)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), means that (1)
> **Documentation:** specification (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Make manual testing work](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=0)** - [Educator] I know it seems late here in the course to be sharing how to perform [[Manual Testing]].
>
> **[0:05](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=5)** However, I feel like you need to understand where and when it's used before you take the steps to learn how.
>
> **[0:11](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=11)** Manual testing is a slower and more arduous process than other [[Forms]] of testing.
>
> **[0:16](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=16)** However, it does create the foundation of every good tester.
>
> **[0:21](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=21)** Let's now explore how we can put it to use.
>
> **[0:24](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=24)** Manual testing begins with a product review.
>
> **[0:27](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=27)** Testing starts at the earliest stages of [[Product Development]], which means you might not even have a complete product to test.
>
> **[0:34](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=34)** Therefore it's important you begin by reviewing key documents that are used to build a product.
>
> **[0:41](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=41)** A marketing or product requirements document is a good place to start.
>
> **[0:46](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=46)** If there is a product specification, project document, or other materials, you could review those as well.
>
> **[0:52](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=52)** At this point, test managers and quality pros are enlisted to design a test plan.
>
> **[0:58](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=58)** This process means creating test cases and aligning test tools to ensure you have an approach to how you anticipate testing the product.
>
> **[1:07](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=67)** Take the time to review the test plan carefully.
>
> **[1:10](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=70)** You'll be referring to it again during the test.
>
> **[1:14](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=74)** Test plans use the product documents as the foundation for defining which test processes will be executed.
>
> **[1:20](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=80)** It will include all test cases, both manual and automated, to ensure it's thoroughly evaluated.
>
> **[1:27](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=87)** After you evaluate the test plan, you can start to build a scope of what skills you are going to need to deliver your portion of the test, examine each technique, and identify where you have gaps in your knowledge.
>
> **[1:40](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=100)** If you're completely new to testing, you may have a bit of heavy lifting over the first few weeks.
>
> **[1:45](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=105)** Don't be intimidated, many of the skills and techniques you'll learn are leveraged off one another.
>
> **[1:52](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=112)** Once the testing has begun, be an effective communicator, document bugs in detail, ask questions, share your issues, successes, and be part of the team.
>
> **[2:05](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=125)** Manual testing is often slow paced so be certain to create a clear plan of your objectives and goals for each day, let everyone know your schedule, and, if possible, use tools to stay organized and on track to complete your testing.
>
> **[2:19](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=139)** Use the time during the test to look at ways to automate.
>
> **[2:22](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=142)** Remember, automation is an ally in accomplishing your goals.
>
> **[2:27](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=147)** There is no competition between the two methodologies and each serves a different purpose.
>
> **[2:32](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=152)** If you can find a way to increase efficiency while maintain equality, there is a reason to explore it.
>
> **[2:38](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=158)** If you need help, don't be afraid to ask.
>
> **[2:42](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=162)** Remember, your role here is to ensure the team delivers a quality product and missing a step, overlooking a portion of the product, not finishing your testing could end in disastrous results.
>
> **[2:56](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=176)** If you can't deliver, then you need to make it clear to your partners.
>
> **[3:02](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=182)** Last, document everything, keep voluminous notes.
>
> **[3:07](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=187)** Some of the data may end up in a bug but other parts may be used for a future test plan.
>
> **[3:14](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=194)** Your role as a manual tester is to ensure that the steps taken are clearly documented, the missteps are noted, and the final product is delivered.
>
> **[3:24](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=204)** If things don't go right, you'll want to have the information to support your position.
>
> **[3:29](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=209)** If things went well, you'll want to be able to show your work.
>
> **[3:32](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=212)** Quality testing is about learning and growing.
>
> **[3:36](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=216)** Manual testing provides a foundational basis for all testing.
>
> **[3:40](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=220)** And even if you start writing scripts and converting tools to automated processes, the experience of manual testing will teach you how these tools need to perform.
>
> **[3:51](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=231)** If you invest in learning the techniques and tools of manual testing, you'll find it pays off in so many ways.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (7), [[Forms]] (1), [[Product Development]] (1)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** find (2), make (1)
> **Documentation:** specification (1)
> **Speakers:** - [educator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Where do you start?](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=0)** - [Instructor] The overwhelming number of test techniques and skills required to become proficient at [[Manual Testing]] can be daunting to someone new to [[Quality Assurance]].
>
> **[0:10](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=10)** Your mind races as you scrutinize the endless possibilities of things that need to be tested and wonder how you are going to accomplish at all.
>
> **[0:19](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=19)** Don't worry, there are a few easy steps that will guide you along the way.
>
> **[0:25](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=25)** First, the best place to start is with your company's product.
>
> **[0:30](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=30)** Before you jump into testing, take the time to understand your product completely.
>
> **[0:35](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=35)** All good quality testers know the product inside and out.
>
> **[0:40](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=40)** Spend time learning it and exploring it.
>
> **[0:43](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=43)** Know what you test better than anyone, and it will help you speak with data when you discover issues.
>
> **[0:49](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=49)** Next, revisit your test plan frequently.
>
> **[0:54](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=54)** If you are new to a company or to the quality team, it's very likely a plan has already been written, and inside, you'll find a roadmap of what needs to be accomplished.
>
> **[1:04](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=64)** Begin by reading that plan completely and take notes of things you don't know or need to get familiar with.
>
> **[1:10](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=70)** It's a great place to start.
>
> **[1:12](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=72)** If you have a plan, use it like a guidebook for your testing.
>
> **[1:15](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=75)** It will help ensure your success.
>
> **[1:19](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=79)** If the product is brand new and you are starting from scratch, look for prior test plans that might help you get your bearings on what was tested in the past.
>
> **[1:28](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=88)** Again, this is just a starting point to help you get oriented on what you'll be likely to encounter when you begin your manual testing.
>
> **[1:35](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=95)** It won't be identical because no two [[Microsoft Products|products]] are the same.
>
> **[1:40](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=100)** Even small version changes are different, and those differences mean a lot.
>
> **[1:46](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=106)** It's rare, maybe impossible, to see a completely new product nobody has ever created previously.
>
> **[1:53](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=113)** The internet is a great resource to build familiarity with the type of product you'll be testing.
>
> **[1:59](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=119)** Even if it isn't identical, it can still deliver foundational knowledge to help you get a head start in your testing.
>
> **[2:07](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=127)** Learn your techniques.
>
> **[2:09](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=129)** Prepping your mental toolbox before you begin on a project will help reduce the friction when it comes time to test.
>
> **[2:16](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=136)** You'll be surprised how quickly you'll pick up the testing and begin to become comfortable in your role.
>
> **[2:23](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=143)** It's daunting it first, but soon it will become second nature.
>
> **[2:28](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=148)** Last, always look forward, thinking about ways to increase efficiency, speed up testing, and be a more collaborative tester.
>
> **[2:36](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=156)** Your team and company will always appreciate your effort and your desire to make things easier and better.
>
> **[2:43](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=163)** If they see you as a partner in helping deliver a better product, you'll become an asset they trust and seek out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (2), [[Quality Assurance]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [instructor] (1)

#### [Be an exceptional manual tester](https://www.linkedin.com/learning/understanding-manual-testing/be-an-exceptional-manual-tester?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/be-an-exceptional-manual-tester?u=76281980&t=0)** - [Mike] We've come to the end of the course.
>
> **[0:02](https://www.linkedin.com/learning/understanding-manual-testing/be-an-exceptional-manual-tester?u=76281980&t=2)** However, this is just the beginning.
>
> **[0:05](https://www.linkedin.com/learning/understanding-manual-testing/be-an-exceptional-manual-tester?u=76281980&t=5)** We have learned that [[Manual Testing]] is an important foundational approach to learning the quality process and delivering a great product.
>
> **[0:14](https://www.linkedin.com/learning/understanding-manual-testing/be-an-exceptional-manual-tester?u=76281980&t=14)** If you're a testing expert, I hope this course has helped clarify the distinct role manual testing plays in our modern automated test labs.
>
> **[0:24](https://www.linkedin.com/learning/understanding-manual-testing/be-an-exceptional-manual-tester?u=76281980&t=24)** If you are just embarking on a career in testing, it's my hope you'll see that manual testing has an important role in understanding how your work enriches the experience of the end user.
>
> **[0:37](https://www.linkedin.com/learning/understanding-manual-testing/be-an-exceptional-manual-tester?u=76281980&t=37)** Most importantly, I hope I've conveyed how critical manual testing is in delivering a great product.
>
> **[0:44](https://www.linkedin.com/learning/understanding-manual-testing/be-an-exceptional-manual-tester?u=76281980&t=44)** This isn't the end, and I encourage you to learn more by exploring one of our other courses on [[LinkedIn]] Learning about quality testing to get more in depth knowledge.
>
> **[0:54](https://www.linkedin.com/learning/understanding-manual-testing/be-an-exceptional-manual-tester?u=76281980&t=54)** Again, my name is Mike Fine, and thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (4), [[LinkedIn]] (1)
> **Definitions:** is an  (1)
> **Speakers:** - [mike] (1)


## Instructor

- [[Mike Fine]]

## Skills Covered

- Quality Assurance
- Manual Testing

## Path Context

### In [[Getting Started with Software Testing]]
← [[Programming Foundations- Software Testing-QA]] | **2 of 12** | [[Test Automation Foundations]] →

## Appears In

- [[Getting Started with Software Testing]]

---

[↑ Back to top](#)