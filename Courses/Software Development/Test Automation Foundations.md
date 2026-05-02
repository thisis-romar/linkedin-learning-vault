---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: test-automation-foundations
url: "https://www.linkedin.com/learning/test-automation-foundations"
level: Beginner
updated: 6/13/2025
learners: 233578
skills:
  - Test Automation
exercise_files: true
github: "https://github.com/LinkedInLearning/test-automation-foundations-728391"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFRnuvxMHYVhA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568058485055?e=2147483647&amp;v=beta&amp;t=vxoGdmva-xLTMogkOIdgJFuXOkC70-IZC4yU6RvzWX8"
linkedin_topic: Software Development
learning_paths:
  - '[[TestMu AI Test Automation Professional Certificate]]'
  - '[[The Top Skills Engineering Professionals Have Right Now]]'
  - '[[Getting Started with Software Testing]]'
prev_courses:
  - null
  - '[[SOLIDWORKS 2024 Essential Training]]'
  - '[[Understanding Manual Testing]]'
next_courses:
  - '[[Selenium Essential Training]]'
  - '[[C Programming for Embedded Applications]]'
  - '[[Software Testing- Planning Tests for Mobile]]'
path_nav: '[{"path":"TestMu AI Test Automation Professional Certificate","position":1,"total":2,"prev":null,"next":"Selenium Essential Training"},{"path":"The Top Skills Engineering Professionals Have Right Now","position":8,"total":9,"prev":"SOLIDWORKS 2024 Essential Training","next":"C Programming for Embedded Applications"},{"path":"Getting Started with Software Testing","position":3,"total":12,"prev":"Understanding Manual Testing","next":"Software Testing- Planning Tests for Mobile"}]'
path_count: 3
tags:
  - course
  - topic/software-development
  - skill/test-automation
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Test%20Automation%20Foundations.md)

![Test Automation Foundations](https://media.licdn.com/dms/image/v2/C4E0DAQFRnuvxMHYVhA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568058485055?e=2147483647&amp;v=beta&amp;t=vxoGdmva-xLTMogkOIdgJFuXOkC70-IZC4yU6RvzWX8)

# Test Automation Foundations

> Automated testing relies on scripting and frameworks like Selenium to prove that products work as expected. Test automation is an enormous time-saver, and it's crucial to continuous integration, continuous delivery, and agile software development. If you're employed in QA, DevOps, or IT, you need to know the basics. This course covers the foundations of test automation, as well as different strate

> [LinkedIn Learning](https://www.linkedin.com/learning/test-automation-foundations) | Beginner | 234K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Build a foundation of test automation](#build-a-foundation-of-test-automation)
  - [What you should know](#what-you-should-know)
  - [Value of automation](#value-of-automation)
- [**1. Test Types**](#1-test-types) (5 videos)
  - [Agile Testing Quadrants](#agile-testing-quadrants)
  - [The test pyramid](#the-test-pyramid)
  - [Unit tests](#unit-tests)
  - [Integration tests](#integration-tests)
  - [UI tests](#ui-tests)
- [**2. How to Approach Automation**](#2-how-to-approach-automation) (5 videos)
  - [Get the whole team involved](#get-the-whole-team-involved)
  - [Make a strategy](#make-a-strategy)
  - [Test tools](#test-tools)
  - [Development processes](#development-processes)
  - [Follow test design patterns](#follow-test-design-patterns)
- [**3. Testing Tools**](#3-testing-tools) (3 videos)
  - [Framework](#framework)
  - [Assertion library](#assertion-library)
  - [Test results](#test-results)
- [**4. Decide What to Automate**](#4-decide-what-to-automate) (5 videos)
  - [Scenarios to automate](#scenarios-to-automate)
  - [Give each scenario a value](#give-each-scenario-a-value)
  - [Risk of automation](#risk-of-automation)
  - [The cost of automation](#the-cost-of-automation)
  - [Select what to automate](#select-what-to-automate)
- [**5. Adopt Test Automation**](#5-adopt-test-automation) (5 videos)
  - [Maintain standards](#maintain-standards)
  - [Make a maintenance plan](#make-a-maintenance-plan)
  - [Use continuous integration](#use-continuous-integration)
  - [Measure code coverage](#measure-code-coverage)
  - [Share automation success](#share-automation-success)
- [**Conclusion**](#conclusion) (1 videos)
  - [Advance your skills](#advance-your-skills)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Build a foundation of test automation](https://www.linkedin.com/learning/test-automation-foundations/build-a-foundation-of-test-automation-26042946?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/build-a-foundation-of-test-automation-26042946?u=76281980&t=0)** - Automated testing provides confidence that the application under test is working as expected.
>
> **[0:06](https://www.linkedin.com/learning/test-automation-foundations/build-a-foundation-of-test-automation-26042946?u=76281980&t=6)** I'll cover the steps involved to gain a strong [[Test Automation]] foundation.
>
> **[0:10](https://www.linkedin.com/learning/test-automation-foundations/build-a-foundation-of-test-automation-26042946?u=76281980&t=10)** I'll explain models to help determine the types of automated tests to use on a project.
>
> **[0:16](https://www.linkedin.com/learning/test-automation-foundations/build-a-foundation-of-test-automation-26042946?u=76281980&t=16)** I'll share tips on getting started with test automation, choosing test tools, and deciding what to automate.
>
> **[0:22](https://www.linkedin.com/learning/test-automation-foundations/build-a-foundation-of-test-automation-26042946?u=76281980&t=22)** And I'll close with strategies to maintain test automation over time.
>
> **[0:27](https://www.linkedin.com/learning/test-automation-foundations/build-a-foundation-of-test-automation-26042946?u=76281980&t=27)** I'm Meaghan Lewis, and I'm a quality engineer and blogger who's passionate about testing and skilled in automation.
>
> **[0:34](https://www.linkedin.com/learning/test-automation-foundations/build-a-foundation-of-test-automation-26042946?u=76281980&t=34)** Let's start on a quest to discover how to succeed with test automation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test Automation]] (4)
> **Prerequisites:** getting started (1)
> **Speakers:** - automated (1)

#### [What you should know](https://www.linkedin.com/learning/test-automation-foundations/what-you-should-know-14475739?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/what-you-should-know-14475739?u=76281980&t=0)** - Throughout this course, I will describe different types of automated tests and how to implement them.
>
> **[0:06](https://www.linkedin.com/learning/test-automation-foundations/what-you-should-know-14475739?u=76281980&t=6)** No prior knowledge is required, but it would be helpful to have a basic understanding of [[Test Automation]].
>
> **[0:12](https://www.linkedin.com/learning/test-automation-foundations/what-you-should-know-14475739?u=76281980&t=12)** I will write some test code and demonstrate how to use popular testing tools.
>
> **[0:17](https://www.linkedin.com/learning/test-automation-foundations/what-you-should-know-14475739?u=76281980&t=17)** For code examples throughout this course, I'll be using [[Node.js]], although no prior knowledge of Node.js is required.
>
> **[0:25](https://www.linkedin.com/learning/test-automation-foundations/what-you-should-know-14475739?u=76281980&t=25)** I'll also include a test application that I will reference throughout the course.
>
> **[0:30](https://www.linkedin.com/learning/test-automation-foundations/what-you-should-know-14475739?u=76281980&t=30)** Feel free to download and set up this application if you'd like to follow along.
>
> **[0:34](https://www.linkedin.com/learning/test-automation-foundations/what-you-should-know-14475739?u=76281980&t=34)** You can also use it to write your own test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[Test Automation]] (1)
> **File Paths:** node.js (2)
> **CLI Commands:** node (2)
> **Prerequisites:** set up (1)
> **Speakers:** - throughout (1)

#### [Value of automation](https://www.linkedin.com/learning/test-automation-foundations/value-of-automation-14475740?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/value-of-automation-14475740?u=76281980&t=0)** - Every product team strives to deliver flawless software.
>
> **[0:05](https://www.linkedin.com/learning/test-automation-foundations/value-of-automation-14475740?u=76281980&t=5)** Despite this effort, software will inevitably have defects.
>
> **[0:10](https://www.linkedin.com/learning/test-automation-foundations/value-of-automation-14475740?u=76281980&t=10)** [[Manual Testing]] can provide great value by helping to expose defects.
>
> **[0:14](https://www.linkedin.com/learning/test-automation-foundations/value-of-automation-14475740?u=76281980&t=14)** However, it's very time-consuming to manually test the same scenarios over and over again.
>
> **[0:21](https://www.linkedin.com/learning/test-automation-foundations/value-of-automation-14475740?u=76281980&t=21)** Automated testing follows the same steps as manual testing, but it's much quicker.
>
> **[0:26](https://www.linkedin.com/learning/test-automation-foundations/value-of-automation-14475740?u=76281980&t=26)** While there is an initial time investment to write the scripts.
>
> **[0:30](https://www.linkedin.com/learning/test-automation-foundations/value-of-automation-14475740?u=76281980&t=30)** once the scripts are complete, they can be run repeatedly without much additional cost.
>
> **[0:35](https://www.linkedin.com/learning/test-automation-foundations/value-of-automation-14475740?u=76281980&t=35)** There will be maintenance that is required, but it saves time in the long run.
>
> **[0:39](https://www.linkedin.com/learning/test-automation-foundations/value-of-automation-14475740?u=76281980&t=39)** This makes automation have a great return on investment.
>
> **[0:43](https://www.linkedin.com/learning/test-automation-foundations/value-of-automation-14475740?u=76281980&t=43)** In addition, the exact same steps are executed every time, which reduces any possibility of human error.
>
> **[0:51](https://www.linkedin.com/learning/test-automation-foundations/value-of-automation-14475740?u=76281980&t=51)** Automated tests can also be run across multiple platforms, operating systems and devices, creating thousands of combinations.
>
> **[1:00](https://www.linkedin.com/learning/test-automation-foundations/value-of-automation-14475740?u=76281980&t=60)** This is great at simulating different setups and use cases.
>
> **[1:04](https://www.linkedin.com/learning/test-automation-foundations/value-of-automation-14475740?u=76281980&t=64)** Bugs and regressions can be found quickly, giving developers confidence that updates to the code base didn't break anything.
>
> **[1:12](https://www.linkedin.com/learning/test-automation-foundations/value-of-automation-14475740?u=76281980&t=72)** At the end of the day, teams with automated tests will create better quality software [[Microsoft Products|products]].
>
> **[1:18](https://www.linkedin.com/learning/test-automation-foundations/value-of-automation-14475740?u=76281980&t=78)** These products can then be released smoothly and quickly, having used less resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (2), [[Microsoft Products|Products]] (2)
> **Definitions:** is an  (1)
> **Speakers:** - every (1)


### 1. Test Types

[↑ Back to Table of Contents](#table-of-contents)

#### [Agile Testing Quadrants](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=0)** - [Instructor] There are so many different types of automated test: unit, integration, component, functional, UI, and the list just goes on and on.
>
> **[0:11](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=11)** Deciding which test to include for a project can be a difficult task.
>
> **[0:16](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=16)** Luckily, there are some models that are extremely valuable when determining which type of test to automate.
>
> **[0:23](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=23)** One model that I recommend using is the [[Agile Development|agile]] testing quadrants.
>
> **[0:28](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=28)** The agile testing quadrants are used to classify tests.
>
> **[0:33](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=33)** The quadrants have been helpful over the years for teams as they plan the types of tests they want to implement.
>
> **[0:39](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=39)** It also helps teams identify the resources necessary to accomplish that task.
>
> **[0:45](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=45)** This model was developed by an agile testing consultant, Brian Marick, back in 2003.
>
> **[0:52](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=52)** There are four distinct quadrants separated by the X and Y axes.
>
> **[0:57](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=57)** On the bottom, there are technology-facing test and on the top, there are business-facing test.
>
> **[1:04](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=64)** On the left-hand side, there are tests that guide development and on the right, there are tests that critique the product.
>
> **[1:11](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=71)** These quadrants defined four areas to better classify different types of test.
>
> **[1:17](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=77)** Now, let's talk about what each quadrant means.
>
> **[1:20](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=80)** I'll start with quadrant one in the lower left-hand side of the matrix.
>
> **[1:25](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=85)** This quadrant describes technology-facing test that guide development.
>
> **[1:31](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=91)** These type of tests are always automated, and they ensure the functionality is working as expected, and that the code has a quality foundation to build upon.
>
> **[1:41](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=101)** Examples of tests that fall into this category are unit test integration test, and component test, all of which confirm the code is working as intended.
>
> **[1:53](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=113)** This is a very important quadrant and the most number of tests should be written in this area.
>
> **[2:00](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=120)** Tests in quadrant one are written alongside development and help to confirm the functionality of the feature as its being built.
>
> **[2:09](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=129)** Moving up to quadrant two in the top left-hand side describes business-facing test that guide development.
>
> **[2:17](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=137)** These tests can either be automated or manual.
>
> **[2:21](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=141)** They help answer questions and discover information about the application.
>
> **[2:25](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=145)** The results of these tests help validate the features of an application.
>
> **[2:30](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=150)** Examples of automated tests that fit into this category are functional and UI test.
>
> **[2:36](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=156)** Manual tests in Q2 use models like prototypes or mockups and can include more high-fidelity prototypes, such as complete webpages.
>
> **[2:46](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=166)** Tests in quadrant two are likely performed during and after development.
>
> **[2:52](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=172)** The automated tests here should be included in the definition of done for a story to know when feature is complete.
>
> **[3:00](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=180)** These tests will also help to uncover bugs and issues in the application before releasing the software to the public.
>
> **[3:08](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=188)** Moving over to quadrant three in the top right-hand side includes business-facing test that critique the product.
>
> **[3:16](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=196)** This quadrant includes mainly manual test, but can benefit from automation as well.
>
> **[3:21](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=201)** The tests here provide feedback about the current state of an application and whether or not things are working as expected.
>
> **[3:30](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=210)** They are user-oriented and help to understand the user's experience by how they interact with the application.
>
> **[3:38](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=218)** Quadrant three involves critical thinking and an in-depth observation of the application's workflows.
>
> **[3:47](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=227)** Examples of tests in this quadrant include: exploratory testing, [[Usability Testing]], and A/B testing.
>
> **[3:55](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=235)** Tests in quadrant three can be performed either before or after development is complete.
>
> **[4:01](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=241)** The purpose is to provide information about what can be improved in workflows in the application.
>
> **[4:08](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=248)** And finally, quadrant four on the bottom right-hand side has tests which are technology-facing that also critique the product.
>
> **[4:17](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=257)** These tests are all automated and are built with the help of specific tools.
>
> **[4:23](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=263)** Their purpose is to provide targeted information about the application.
>
> **[4:28](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=268)** Examples of tests that fall into quadrant four are performance test, load test, security test, reliability test, and so much more.
>
> **[4:39](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=279)** Likely, all of the tests that end with -ility falls into this category.
>
> **[4:44](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=284)** Quadrant four tests are performed based on priorities of what is most important in the application.
>
> **[4:51](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=291)** For example, if fast page load time is important, then it is probably a good idea to implement performance testing.
>
> **[5:01](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=301)** These tests measure data, which can then be analyzed, quantified, and visualized in some way.
>
> **[5:08](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=308)** There are no hard rules about what type of tests must go into what quadrant and what tests are necessary to a software project.
>
> **[5:16](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=316)** It is really all circumstantial.
>
> **[5:19](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=319)** In addition, the quadrant numbering system does not imply any kind of order.
>
> **[5:25](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=325)** There can be a focus on implementing quadrant two tests first and then quadrant one or vice versa.
>
> **[5:31](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=331)** It also doesn't require that there must be test implemented in each and every quadrant.
>
> **[5:37](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=337)** The goal is to understand that there are many different types of test that are either automated and manual and to identify what are the most important types of tests to implement.
>
> **[5:48](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=348)** Use the test quadrants to guide your team when discussing which tests should be implemented for a particular [[Software Development]] project.
>
> **[5:57](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=357)** Continue to think through the quadrants as your team does planning, development, and releases, so that your whole team understands the importance of testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (3), [[Usability Testing]] (1), [[Software Development]] (1)
> **Analogies:** such as (1), for example (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The test pyramid](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=0)** - [Instructor] Another model I always refer back to when planning [[Test Automation]] is the test pyramid.
>
> **[0:07](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=7)** The test pyramid explains an ideal way to structure tests.
>
> **[0:11](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=11)** It is a visual representation of the recommended amount of test coverage that should exist across each type of test.
>
> **[0:20](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=20)** This concept was introduced by Mike Cohn and 2009 in the book "Succeeding with [[Agile Development|Agile]]."
>
> **[0:26](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=26)** The original test pyramid consists of three levels.
>
> **[0:30](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=30)** There are unit tests at the base of the pyramid, integration test in the middle and UI test at the top.
>
> **[0:38](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=38)** These are the test types that are the usual suspects on [[Software Projects]].
>
> **[0:44](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=44)** At a minimum, I recommend that projects have at least these three types of automated tests, but can have additional types of tests as well.
>
> **[0:52](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=52)** The test at the base of the pyramid will be the fastest running test.
>
> **[0:57](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=57)** As you move up the pyramid, the test becomes slower.
>
> **[1:01](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=61)** Similarly, the test at the base are the most isolated in what they test.
>
> **[1:06](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=66)** And moving up the pyramid, the tests become more involved and more integrated with different services.
>
> **[1:13](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=73)** Unit tests are always at the base of the pyramid.
>
> **[1:16](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=76)** They test a single function by calling that function and passing in various values.
>
> **[1:22](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=82)** Unit test confirmed that the right results are returned for each function.
>
> **[1:27](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=87)** Unit tests are the fastest tests and run in a matter of milliseconds.
>
> **[1:32](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=92)** There should be the greatest number of these tests.
>
> **[1:35](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=95)** And data for a unit test is typically mocked or stubbed, which are ways to create objects with certain values.
>
> **[1:43](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=103)** Jumping up to the middle of the pyramid are the integration or service level tests.
>
> **[1:48](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=108)** They test multiple services in conjunction to ensure that all parts work seamlessly together.
>
> **[1:55](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=115)** They typically involve testing integrations between the database, file systems and other applications.
>
> **[2:03](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=123)** [[API Testing]] is also very popular here.
>
> **[2:07](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=127)** Integration tests take a bit longer than unit tests, typically taking anywhere between 10 or 100 milliseconds to run, and they create their own data.
>
> **[2:17](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=137)** There should be a good amount of these tests to cover each service.
>
> **[2:22](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=142)** User interface, or UI tests, are at the top of the pyramid.
>
> **[2:27](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=147)** They are extremely valuable because they test end-to-end workflows and simulate user actions like clicking and typing.
>
> **[2:36](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=156)** These tests run through the browser, and therefore can take many seconds, and sometimes up to a minute to run, depending on the workflow.
>
> **[2:46](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=166)** There should be just a handful of these tests that cover each primary user workflow.
>
> **[2:52](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=172)** The pyramid is intended to be a model of what a healthy, fast and maintainable test suite looks like.
>
> **[3:00](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=180)** It encourages a team to be wise about a strategy of what to automate at each level.
>
> **[3:06](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=186)** Be cognizant of the amount of tests that are written, or else there can be negative effects.
>
> **[3:12](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=192)** For example, sometimes teams run all unit tests on a project and don't care about any other type of test.
>
> **[3:20](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=200)** The shape of testing here ends up looking like a big square.
>
> **[3:24](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=204)** While the tests execute quickly, there are likely going to be some testing holes where bugs can slip through.
>
> **[3:32](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=212)** Or maybe a project has a large number of UI tests, testing every single part of the user interface.
>
> **[3:39](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=219)** There are a minimal number of integration and unit tests.
>
> **[3:43](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=223)** Perhaps everything looks okay in an application, but at a lower level, it's not functioning as it should.
>
> **[3:50](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=230)** The shape here can end up being an inverse pyramid.
>
> **[3:55](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=235)** In this case, the tests likely have a slow execution time and are pain to maintain.
>
> **[4:01](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=241)** There are many more shapes that can manifest based on the amount and level of tests implemented.
>
> **[4:06](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=246)** And sometimes that's okay.
>
> **[4:09](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=249)** Just be sure to consider the pros and cons of the shape and what it implicates.
>
> **[4:14](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=254)** Besides different amounts of tests, the test pyramid can also include many other types of tests as well.
>
> **[4:21](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=261)** I encourage you and your development team to think about what the test pyramid for your project will look like.
>
> **[4:28](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=268)** Remember that the shape of your tests might not resemble the pyramid exactly, and might have more than three levels.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test Automation]] (1), [[Agile Development|Agile]] (1), [[Software Projects]] (1), [[API Testing]] (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Unit tests](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=0)** - [Instructor] I'm going to show examples of the most common types of automated test.
>
> **[0:05](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=5)** But first, I'll take a minute to walk you through a simple test application.
>
> **[0:09](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=9)** The application is called AI animal art.
>
> **[0:13](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=13)** This is a fictional online store that sells AI-generated images using [[Microsoft Copilot]].
>
> **[0:20](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=20)** I see art for sale, and I can choose to add items to the cart by selecting the Add to Cart button.
>
> **[0:27](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=27)** On the cart page, I can view all the items in the cart, including the item name, quantity, and price.
>
> **[0:34](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=34)** I can change the quantity anywhere from 0 to 10, and changing the quantity updates the item price, as well as the total price shown down below.
>
> **[0:45](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=45)** I see a link to go back to shop and a button to checkout.
>
> **[0:49](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=49)** Selecting the Checkout button takes me to a simple page where I see the total price for the order, and a message saying that my order will be ready for digital download soon.
>
> **[0:59](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=59)** Next, I want to take a deeper dive into unit tests.
>
> **[1:03](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=63)** Unit tests are critical to the success of an application.
>
> **[1:07](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=67)** They really help to make sure that the functionality of the application works as it should.
>
> **[1:12](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=72)** They should be lightning-fast, simple, and test only one thing.
>
> **[1:17](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=77)** I've talked about the value of unit tests enough from now, so let's focus on practical examples of what unit tests actually look like.
>
> **[1:26](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=86)** Back in my browser, I navigate to the [[GitHub]] repository for this course.
>
> **[1:32](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=92)** And for this course. I'll be working out of [[Codespaces]].
>
> **[1:36](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=96)** Codespaces is a [[Cloud Development]] environment that is linked to a GitHub repository.
>
> **[1:43](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=103)** From the repository, I select Code, and in the Codespaces tab, I want to select a Codespaces instance to open.
>
> **[1:53](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=113)** For me, I'm going to be working out of refactored fiesta, which is currently active.
>
> **[1:58](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=118)** I encourage you, if you want to follow along, to create your own Codespace in this project.
>
> **[2:04](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=124)** You can do that by selecting the plus sign here to create a Codespace on main.
>
> **[2:11](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=131)** I'll go ahead and select refactored fiesta to open my Codespace instance.
>
> **[2:16](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=136)** This will take a moment.
>
> **[2:19](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=139)** I'll wait for the Codespace to finish setting up before continuing.
>
> **[2:23](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=143)** Now, let me explain a little bit about this test application.
>
> **[2:27](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=147)** This is a [[Node.js]] application, and the app uses Express, a minimal and flexible web framework for Node.js.
>
> **[2:36](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=156)** I'll focus on the routes.js file first.
>
> **[2:41](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=161)** This file defines the routes for the application.
>
> **[2:44](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=164)** Here, you'll find a series of routes used in the application for things like the homepage, removing items, and adding items to the cart.
>
> **[2:58](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=178)** Feel free to look around the routes.js file to get more familiar with the routes in this application, and understand a little bit about what's happening in each of the routes.
>
> **[3:10](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=190)** Next, I'll highlight the middleware folder.
>
> **[3:13](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=193)** Middleware processes requests and responses in the application.
>
> **[3:18](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=198)** It acts as a bridge between the incoming request, and the final route handler or response.
>
> **[3:25](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=205)** These files handle common functionality the app performs, for example, like calculating the total price.
>
> **[3:32](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=212)** You'll see there are also other middleware for error handlers, getting cart quantities, request logger, and validating input.
>
> **[3:42](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=222)** This app uses a [[SQL]] database.
>
> **[3:45](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=225)** I'll scroll down and locate the database.js file.
>
> **[3:49](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=229)** In database.js, I create the required tables if they don't already exist, and load items into the database.
>
> **[3:57](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=237)** The database has two tables, the items table, to store product details, and the cart table, to store cart items and quantities.
>
> **[4:08](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=248)** Ideally, I want to write unit tests for the routes and for the middleware.
>
> **[4:14](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=254)** For the remainder of this video, I'll focus on the unit test class to test out this calculate total price middleware.
>
> **[4:24](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=264)** Let me navigate to test, unit, and open calculateTotalPrice.test.js.
>
> **[4:35](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=275)** I'll scroll to the top and close the explorer.
>
> **[4:38](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=278)** This test, and all the others that I'll show throughout this course are written in Mocha, which is a popular [[JavaScript]] testing framework.
>
> **[4:46](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=286)** Mocha tests are written in a behavior-driven development, or BDD way.
>
> **[4:52](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=292)** This means that the outline of the test is defined in terms of behavior.
>
> **[4:57](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=297)** The test uses Chai, an assertion library to confirm behavior.
>
> **[5:03](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=303)** Sinon is used to mock or stub dependencies, which basically creates fake objects and data to use for testing.
>
> **[5:12](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=312)** Note that I require the middleware that I'm going to be testing line three.
>
> **[5:18](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=318)** At a high level, this test starts by describing the feature on line six, which is the calculate total price middleware test.
>
> **[5:27](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=327)** On line seven, the first test is defined.
>
> **[5:31](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=331)** The test starts with the [[Microsoft Word|word]] it and then describes what the test is doing.
>
> **[5:36](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=336)** In this case, it should calculate the total price.
>
> **[5:40](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=340)** The test begins by mocking the req object with items and quantities.
>
> **[5:47](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=347)** An empty res object is created, and sinon.spy tracks what the next middleware function is called.
>
> **[5:57](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=357)** In lines 21 to 22, I call the middleware.
>
> **[6:01](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=361)** The middleware then calculates the total price and stores the result and req.totalPrice.
>
> **[6:08](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=368)** Line 25 verifies that the total price is 40, and line 26 confirms that the next function is called, which is necessary to pass control to the next middleware or route handler.
>
> **[6:23](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=383)** The second test on lines 29 to 42 sets the total price to zero if req.items is empty.
>
> **[6:32](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=392)** This test confirms that the middleware handles no items as expected.
>
> **[6:37](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=397)** The third test, on lines 44 to 59, sets a total price to zero if there's no quantity for an item.
>
> **[6:46](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=406)** This test confirms that the middleware handles no quantity, as expected.
>
> **[6:51](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=411)** Next, I want to run this test file.
>
> **[6:54](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=414)** To do that, I open up my terminal and type npx mocha test/unit/calculateTotalPrice.test.js
>
> **[7:11](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=431)** and press enter.
>
> **[7:14](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=434)** I see that all three tests passed in six milliseconds.
>
> **[7:19](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=439)** So with that, I was able to successfully test the calculateTotalPrice middleware.
>
> **[7:24](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=444)** That's sufficient coverage for now, but more tests can also be written to test other paths and use a variety of input.
>
> **[7:32](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=452)** Spend more time running the other unit test files, and you can try out writing some unit tests on your own to better familiarize yourself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (4), [[GitHub]] (2), [[Node.js]] (2), [[Microsoft Copilot]] (1), [[Cloud Development]] (1)
> **File Paths:** node.js (2), routes.js (2), database.js (2), calculatetotalprice.test.js (1), test/unit/calculatetotalprice.test.js (1)
> **Definitions:** is a  (4), is called (3), means that (1)
> **CLI Commands:** node (2), make (1), find (1), npx (1)
> **Code Identifiers:** calculatetotalprice (3), totalprice (1)
> **Tools:** github (2), terminal (1)
> **UI Navigation:** navigate to (2), scroll down (1)
> **Env Vars:** sql (1), bdd (1)

#### [Integration tests](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=0)** - [Instructor] Integration tests help to provide confidence that all parts of an application work seamlessly together.
>
> **[0:07](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=7)** While [[Unit Testing]] focuses on individual small parts, integration tests focus on the whole.
>
> **[0:14](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=14)** They can detect unexpected failures that happen where one part of the application is fixed and another is broken.
>
> **[0:22](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=22)** Not all units are peer and unit testable.
>
> **[0:25](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=25)** Some units can only be tested as part of a bigger process.
>
> **[0:30](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=30)** Integration tests should cover important cross-module processes.
>
> **[0:35](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=35)** I'm going to show you an example of an integration test for the AI animal art application.
>
> **[0:42](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=42)** I have the repository for this course open in [[Codespaces]].
>
> **[0:48](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=48)** Next, I'll open the Explorer and navigate to the integration test class called routes.test.js under test, integration.
>
> **[0:58](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=58)** Then let me close the Explorer window and explain a little bit more about this test.
>
> **[1:05](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=65)** This is another Mocha test written in a behavior-driven development way to describe the routes for the test application.
>
> **[1:13](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=73)** The integration test uses super test to simulate HTTP request, chai for assertions and sqlite to create an n memory database.
>
> **[1:27](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=87)** An n memory sqlite database is used to isolate test so that no production data is affected.
>
> **[1:36](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=96)** The most important routes are tested and that includes add to cart, cart and checkout.
>
> **[1:45](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=105)** The test starts with the helper function on line 9 to execute [[SQL]] queries within the test.
>
> **[1:53](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=113)** Line 18 describes the test suite name, integration test for routes.
>
> **[1:59](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=119)** The before hook on lines 19 to 38 creates the table's items and cart and adds an item to the cart.
>
> **[2:11](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=131)** The after hook on lines 40 to 44 drops the tables to clean up after the test completes.
>
> **[2:24](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=144)** The first test on lines 46 to 58 adds an item to the cart.
>
> **[2:31](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=151)** The test simulates a post request on line 48 to add an item to the cart with an ID of 1.
>
> **[2:39](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=159)** Then the test verifies the response status, redirect URL, and that the item is added to the cart table.
>
> **[2:51](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=171)** The second test from line 60 to 66 displays the cart page.
>
> **[2:56](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=176)** On line 61, I insert an item with an ID equal to 1 and a quantity equal to 2 into the cart.
>
> **[3:06](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=186)** Then I simulate a get request to the cart route and verify the response status and that the cart page includes that the test item's name.
>
> **[3:16](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=196)** The third test on line 68 to 74 displays the checkout page.
>
> **[3:23](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=203)** On line 69, I insert an item into the cart with an ID equal to 1 and a quantity equal to 2.
>
> **[3:32](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=212)** Then again, I simulate a get request to the checkout route and verify the response status and that the checkout page has a message, "Thanks for your order."
>
> **[3:43](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=223)** This test file provides a solid foundation for verifying the core functionality of the application's routes.
>
> **[3:51](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=231)** More tests can be added to test the remaining routes and the application.
>
> **[3:58](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=238)** To run the test, I'll open up my terminal and I'll type npx mocha test/integration/routes.test.js
>
> **[4:16](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=256)** and press enter.
>
> **[4:19](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=259)** I see the output of the test and that all three tests are passing and it takes 55 milliseconds to run.
>
> **[4:27](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=267)** While this test is still really quick, it's many milliseconds slower than the unit test because it takes time to query the database, simulate sending request, wait for the response and confirm that the response is successful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unit Testing]] (1), [[Codespaces]] (1), [[SQL]] (1)
> **Env Vars:** http (1), sql (1), url (1)
> **File Paths:** routes.test.js (1), test/integration/routes.test.js (1)
> **UI Navigation:** open the (1), navigate to (1)
> **CLI Commands:** npx (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [UI tests](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=0)** - [Instructor] Sometimes, the quick and effective lower level unit and integration tests are not enough.
>
> **[0:06](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=6)** UI tests can help provide a complete picture of test coverage.
>
> **[0:11](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=11)** UI tests are always running inside a browser and simulate user behavior by completing workflows within an application.
>
> **[0:19](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=19)** UI tests are sometimes called end-to-end or functional tests because they test the entire application, from the frontend UI to the backend [[Database Systems]].
>
> **[0:31](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=31)** In that sense, UI tests are also a form of [[Integration Testing]], ensuring that machines and component collaborations are all working together as expected.
>
> **[0:42](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=42)** It's important to remember that these UI tests are the hardest to set up.
>
> **[0:47](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=47)** They require an environment that has specific browser types and versions.
>
> **[0:53](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=53)** I want to show you an example of a UI test for the AI animal art application.
>
> **[1:00](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=60)** In my browser window, I have the code spaces open for the [[Test Automation]] foundation's repository.
>
> **[1:06](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=66)** I'll open up the explorer and focus my attention on the UI test under test/UI and select end-to-end test.
>
> **[1:16](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=76)** This test file verifies the end-to-end user workflow, from adding an item to the cart to completing the checkout process.
>
> **[1:26](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=86)** It confirms the application works as expected in the browser.
>
> **[1:30](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=90)** This test class uses Mocha along with the help of [[Selenium]] WebDriver, which is a popular option for browser automation.
>
> **[1:39](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=99)** ChromeDriver is used to run the test in the browser,, and Chai is used for assertions, which confirm the behavior.
>
> **[1:48](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=108)** Line six defines the test suite name, which is end-to-end test.
>
> **[1:53](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=113)** A timeout of 30 seconds is set to allow time for Selenium steps to complete.
>
> **[1:59](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=119)** The driver variable is defined on line eight, which drives browser interactions.
>
> **[2:06](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=126)** On lines 10 to 21, the before hook sets up a headless Chrome browser, and the driver navigates to the application's homepage at localhost port 3000.
>
> **[2:19](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=139)** The after hook on lines 23 to 25 closes the browser after all the tests are complete.
>
> **[2:28](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=148)** The test case on lines 27 to 52 adds an item to the cart and completes the checkout workflow.
>
> **[2:36](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=156)** In this UI test, I use the driver to find various web elements using their [[HTML]] selectors with attributes such as ID and class name.
>
> **[2:47](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=167)** Then I can perform an action, like clicking a button.
>
> **[2:51](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=171)** Let me explain what I mean here a bit more.
>
> **[2:54](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=174)** If I want to use Selenium WebDriver to add an item to the cart, I can do that by clicking on the ID element for an item, as shown here on line 28.
>
> **[3:05](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=185)** I'll go to the test application in the browser and show how I find this ID element.
>
> **[3:12](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=192)** Once I'm at the test application, I'll focus my attention on the last item and right click and select inspect to open up the inspector.
>
> **[3:23](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=203)** This highlights a button element with an ID of add-to-cart-10.
>
> **[3:32](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=212)** I want to choose to use this ID in my test on line 28.
>
> **[3:38](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=218)** So I can use that ID here in my test on line 28 and then click that button on line 29.
>
> **[3:45](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=225)** Lines 31 to 34 verify that a success notification is displayed Lines 35 to 36 navigate to the cart page by clicking the cart link.
>
> **[4:00](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=240)** Lines 38 to 39 navigate to the checkout page by clicking an element with an ID of checkout-button.
>
> **[4:10](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=250)** Lines 42 to 47 wait for the checkout page to load for up to five seconds, and then it verifies that the page title is checkout, and lines 49 to 50, find an element with the class name of thank-you-message.
>
> **[4:26](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=266)** It gets the text from that class named thank-you-message, and then confirms the thank you message is displayed on screen.
>
> **[4:35](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=275)** Now, I want to go to the terminal and run the test, so I'll open up the terminal, and what I first need to do is make sure the server is running.
>
> **[4:43](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=283)** If it's not, I can do that by using the script [[npm]] start.
>
> **[4:48](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=288)** Then, I'll open up a new terminal window, and in this window is where I want to run the UI test.
>
> **[4:55](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=295)** So to do that, I can type npx mocha test/UI/end-to-end.test.js
>
> **[5:11](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=311)** and press enter.
>
> **[5:14](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=314)** After just a second, I see that the test passes.
>
> **[5:17](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=317)** The end-to-end test should add an item to the cart and complete the checkout workflow.
>
> **[5:22](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=322)** It takes 624 milliseconds, or about a second is what the reporter tells me down here.
>
> **[5:30](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=330)** That's way more than the 50 milliseconds or so it took the integration test to run and the five milliseconds or so it took the unit test to run.
>
> **[5:39](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=339)** The UI test took so much longer because it created a new headless instance of the Chrome driver to run through the test steps, sending requests along the way, and shutting down the browser and WebDriver once the test completes.
>
> **[5:54](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=354)** There are many more moving parts working together here than the lower levels of testing.
>
> **[6:00](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=360)** If you're unfamiliar with UI tests, then this can seem like uncharted territory.
>
> **[6:05](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=365)** I encourage you to write some more tests using this method by finding HTML elements to drive browser actions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (3), [[HTML]] (2), [[Database Systems]] (1), [[Integration Testing]] (1), [[Test Automation]] (1)
> **CLI Commands:** find (3), make (1), npm (1), npx (1)
> **UI Navigation:** go to (2), navigate to (2)
> **Tools:** terminal (3)
> **Env Vars:** html (2)
> **Analogies:** picture (1), such as (1)
> **File Paths:** test/ui/end-to-end.test.js (1)
> **Ports:** port 3000 (1)


### 2. How to Approach Automation

[↑ Back to Table of Contents](#table-of-contents)

#### [Get the whole team involved](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=0)** - When starting a new software delivery project, it's important to get the whole team involved in the planning, execution and maintenance of [[Test Automation]].
>
> **[0:09](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=9)** And by the whole team, I really mean the whole team, including developers, testers, and business stakeholders like product managers or business analyst.
>
> **[0:19](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=19)** All of these team members can get involved and help ensure the success of test automation in some way.
>
> **[0:25](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=25)** The team can make decisions about how to guide test automation for the software delivery project.
>
> **[0:30](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=30)** They can work together to decide what types of tests to implement, what tools to choose, who will be responsible for each level of testing and how to collaborate with the stakeholders.
>
> **[0:40](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=40)** Start by creating a shared big picture to align expectations across different groups.
>
> **[0:45](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=45)** Do so in a cross-functional setting with representatives of developers, testers, and business stakeholders.
>
> **[0:53](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=53)** Spend time brainstorming the aspects a good automation test suite will have.
>
> **[0:57](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=57)** Every representative should have a chance to share what they think is valuable in a test suite.
>
> **[1:03](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=63)** For example, ask your group of stakeholders what makes a good test suite.
>
> **[1:07](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=67)** It's important for everyone to share their thoughts because something that one person considers critical might not even register on the scale of importance for a different person.
>
> **[1:16](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=76)** It might be surprising to find out that stakeholders have different focuses.
>
> **[1:21](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=81)** Use models like the testing quadrants and test pyramid to guide discussions around the important qualities and determine what types of test will make up the automation suite.
>
> **[1:31](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=91)** Doing these exercises will help ensure that all stakeholders are in agreement about the strategy for automation testing going forward.
>
> **[1:39](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=99)** After implementing the automation test suite, I recommend getting together as a group every few months for a retrospective.
>
> **[1:46](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=106)** This will help you address what's working well with automation testing and what can be better.
>
> **[1:51](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=111)** Once the team has identified what type of test will be included in the project's automation test suite, determine ownership of each type of automation test.
>
> **[1:59](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=119)** Typically, developers own unit tests because they are written alongside development.
>
> **[2:05](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=125)** Developers and testers can own integration tests and testers own UI tests.
>
> **[2:10](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=130)** This is a model I follow in most projects, but one size doesn't fit all.
>
> **[2:15](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=135)** As a team, decide who owns the test for your project.
>
> **[2:19](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=139)** Just because there are specific owners for types of tests doesn't mean that no other teammates will help work on those tests.
>
> **[2:26](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=146)** Quality is a team responsibility.
>
> **[2:29](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=149)** The whole team approach to testing and quality is most critical when it comes to automating tests.
>
> **[2:35](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=155)** Automated tests provide huge amounts of value, but also require a lot of time and commitment.
>
> **[2:41](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=161)** When the whole team is invested in the test automation process, it will lead to the best outcome with a test suite that is robust and well-maintained.
>
> **[2:50](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=170)** There are many ways the whole [[Software Development]] team can get involved in test automation.
>
> **[2:55](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=175)** For example, business stakeholders help developers and testers determine test scenarios for high priority features.
>
> **[3:02](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=182)** Then, testers help developers think of edge cases for unit tests and integration level tests.
>
> **[3:07](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=187)** And developers can help testers write UI test scripts.
>
> **[3:11](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=191)** Finally, testers and developers can then report relevant test results to business stakeholders.
>
> **[3:17](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=197)** Test automation projects will evolve over time.
>
> **[3:20](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=200)** New tests will be added and there will always be room for maintenance and improvement.
>
> **[3:24](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=204)** Work together as a team to think of ways to keep an automation suite lean so that it always provides the most value and confidence in an application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test Automation]] (6), [[Software Development]] (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (2), picture (1)
> **Definitions:** is a  (2)
> **Speakers:** - when (1)

#### [Make a strategy](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=0)** - Before jumping in to write tests, it's smart to plan out the approach.
>
> **[0:05](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=5)** Get the group of stakeholders together to list the highest priority features.
>
> **[0:09](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=9)** The business stakeholders should be able to provide a list of those features.
>
> **[0:13](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=13)** From there, spend time to brainstorm what type of scenarios will be automated versus manual for each feature.
>
> **[0:21](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=21)** Scenarios that are good candidates for automation are those that test the highest impact features, are tedious to do manually, and provide the same result every time.
>
> **[0:31](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=31)** As your team brainstorms scenarios, also try to identify types of test that can cover each scenario.
>
> **[0:38](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=38)** Considering the inputs, actions, and outputs of the test can help here.
>
> **[0:43](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=43)** As a general rule, you'll want to push automation to the lowest level.
>
> **[0:47](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=47)** Going back to the test pyramid, it's good to have the most number of unit tests, a medium number of integration tests, and a small number of UI tests.
>
> **[0:58](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=58)** So if a scenario will have the same results, using the UI or not, choose to avoid the UI.
>
> **[1:05](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=65)** The goal of automated test suites should be to have a well-tested application and a suite that provides timely feedback.
>
> **[1:12](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=72)** Decide which tests will be a part of the project.
>
> **[1:16](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=76)** It can just be unit, integration, and UI, or additional types as well.
>
> **[1:21](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=81)** It's best to have this scope defined early on in the project, although needs might change later on.
>
> **[1:26](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=86)** After thinking about what to automate, there are some additional resources that will be needed, such as determining how test data will be used, created, and managed, what different tooling options are out there to build and run tests, or which test environments need to be available for automated and [[Manual Testing]].
>
> **[1:45](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=105)** I recommend making a list of these resources and any others that might be needed.
>
> **[1:50](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=110)** Considering what will be automated and what resources will be needed to carry out the automation will all be part of a documented testing strategy.
>
> **[1:58](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=118)** This will provide guidance to current and future teammates about how to approach automation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (1)
> **Best Practices:** general rule (1), it's best to (1)
> **Analogies:** such as (1)
> **Speakers:** - before (1)

#### [Test tools](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=0)** - Once the team of stakeholders has gotten together and made some initial decisions, the real action can start.
>
> **[0:07](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=7)** After deciding how you want your automated tests to look, it's time to find the tools to support that.
>
> **[0:14](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=14)** Otherwise, if you choose test tools before you know how you want to express your tests, you've eliminated many viable options too early.
>
> **[0:22](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=22)** Select the right tools for the type of desired testing.
>
> **[0:26](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=26)** There are discrete frameworks available for different types of tests.
>
> **[0:30](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=30)** It can be tough for a team to come to consensus about selecting an automation framework, but it's best to discuss this problem together and try to find a good solution.
>
> **[0:39](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=39)** One thing to understand is that there is no one right [[Test Automation]] solution that will solve all your team's needs.
>
> **[0:47](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=47)** The goal is to find the tools that seem best suited for the job.
>
> **[0:51](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=51)** I recommend starting with a baseline requirement of what the test tools need to support.
>
> **[0:55](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=55)** There are two baseline requirements that I use.
>
> **[0:58](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=58)** The first is the type of test to be implemented and the second is the language that the test will be written in.
>
> **[1:05](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=65)** An example of this could be a [[JavaScript]] [[Unit Testing]] framework.
>
> **[1:09](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=69)** I also recommend trying to find tools that promote cross-functional collaboration among testers, developers and business team members.
>
> **[1:19](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=79)** Cross-functional collaboration will lead to better, more testable code with fewer defects.
>
> **[1:25](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=85)** Use the baseline criteria to search for related test tools and write them down.
>
> **[1:30](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=90)** From that list of tools your team has gathered, there are many considerations to evaluate any given one.
>
> **[1:37](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=97)** Focus on trying spikes, which are small experiments using the selected tools.
>
> **[1:42](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=102)** This will allow teammates to learn the tool and the technical details of it to be able to come up with a more informed judgment.
>
> **[1:49](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=109)** List out advantages and disadvantages learned from the spike.
>
> **[1:54](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=114)** Bringing this information and analysis back to the larger team will insight more conversations where the tools can be compared effectively.
>
> **[2:02](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=122)** The stakeholders should then be able to select the best tools for each type of testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test Automation]] (1), [[JavaScript]] (1), [[Unit Testing]] (1)
> **CLI Commands:** find (4)
> **UI Navigation:** select the (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - once (1)

#### [Development processes](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980&t=0)** - Various types of tests are implemented at different points within the software delivery life cycle.
>
> **[0:06](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980&t=6)** Having processes in place about when to write and run tests can be helpful.
>
> **[0:11](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980&t=11)** In terms of writing tests, unit tests are completed during development.
>
> **[0:15](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980&t=15)** Ideally, test driven development or TDD is used to write tests before writing code, and then ensures that the code written works as expected once the test passes.
>
> **[0:26](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980&t=26)** Integration test should be written during development as well.
>
> **[0:29](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980&t=29)** However, features must be completed enough to be able to test components working together.
>
> **[0:36](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980&t=36)** UI testing can start during development, but can not be completed until the feature to be tested is finished with development.
>
> **[0:43](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980&t=43)** For any type of test, decide when in the development life cycle, they should be automated.
>
> **[0:49](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980&t=49)** It also makes sense to think about when to run automation.
>
> **[0:53](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980&t=53)** Determine how tests will be executed both locally and with [[Continuous Integration (CI)|continuous integration]].
>
> **[0:58](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980&t=58)** Ideally before making code changes, engineers on the team should run tests locally and ensure that everything is passing.
>
> **[1:06](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980&t=66)** Once changes are made, it's best to have a continuous integration server hooked up to run the test suite.
>
> **[1:13](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980&t=73)** It's important to run tests often and ensure that they are passing as the application continues to change.
>
> **[1:20](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980&t=80)** Test must consistently run green in order to have confidence in the test results.
>
> **[1:25](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980&t=85)** Determining when to write and run test is a best practice.
>
> **[1:29](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980&t=89)** Following this process allows the team to constantly be thinking about testing and become more skilled with automation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Integration (CI)|Continuous integration]] (2)
> **Best Practices:** it's best to (1), best practice (1)
> **Env Vars:** tdd (1)
> **Definitions:** is a  (1)
> **Speakers:** - various (1)

#### [Follow test design patterns](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=0)** - The [[Software Development]] community has continued to evolve design principles and patterns.
>
> **[0:06](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=6)** These principles and patterns help to reduce the cost of writing and maintaining automated test scripts.
>
> **[0:12](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=12)** Look for ways to improve test design to keep long-term maintenance costs to a minimum while getting fast and useful feedback.
>
> **[0:20](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=20)** There are a few main principles that ensure a consistent and maintainable automation test suite.
>
> **[0:26](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=26)** Principles such as don't repeat yourself, shorten to DRY, help avoid duplication.
>
> **[0:32](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=32)** DRY can ensure that when something changes in the system under test, only one test component needs to be updated.
>
> **[0:39](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=39)** For automation, DRY allows test code to be shared and reused.
>
> **[0:44](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=44)** A domain-specific language, or DSL, describes items particular to a test application.
>
> **[0:50](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=50)** With any item in the application, it's best to give a descriptive name and use that name consistently, both within the code and the test application.
>
> **[0:59](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=59)** Using a DSL throughout test will make them easier to comprehend by anyone on a team.
>
> **[1:05](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=65)** Having a common language helps teammates better communicate and collaborate.
>
> **[1:09](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=69)** There are a few more design guidelines to remember.
>
> **[1:13](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=73)** First, each test should have one single purpose.
>
> **[1:17](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=77)** This makes tests have clearer scope, be easier to debug, and easier to update if business rules change.
>
> **[1:24](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=84)** Also, tests should be able to be run in any order and should not depend on data from any other test.
>
> **[1:31](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=91)** The goal is for each test to be completely self-contained.
>
> **[1:35](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=95)** Finally, tests should be composed of steps which describe behaviors.
>
> **[1:40](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=100)** The technical details of each step should be defined in a function outside of the test.
>
> **[1:44](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=104)** By abstracting out the lower-level technical steps this way, the test will be more human readable.
>
> **[1:50](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=110)** This list of [[Design Patterns]] and practices is not exhaustive, but these are the top patterns I like to follow.
>
> **[1:57](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=117)** This list can provide a good start to see what works best for your team and the product.
>
> **[2:02](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=122)** Determine the test design patterns that are important for your team and document those patterns in detail, like a project README.
>
> **[2:10](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=130)** Documentation will enable others to understand the principles to follow and the structure of the tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (2), [[Software Development]] (1)
> **Env Vars:** dry (3), dsl (2), readme (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - the (1)


### 3. Testing Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Framework](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=0)** - [Instructor] In this chapter, I'll discuss test tools that work together to make a complete [[Test Automation]] project.
>
> **[0:06](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=6)** I'll use an example of a [[JavaScript]] application that I want to select test tools for.
>
> **[0:12](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=12)** There are a variety of tools to use for automation testing.
>
> **[0:17](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=17)** Some provide only one functionality and some provide many different pieces.
>
> **[0:22](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=22)** The one tool I recommend to start with is a test framework.
>
> **[0:26](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=26)** A framework allows you to easily write and structure tests in a particular way.
>
> **[0:31](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=31)** It provides consistency with the use of reusable test code for common actions.
>
> **[0:38](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=38)** There are many options for frameworks that exist for each programming language.
>
> **[0:43](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=43)** Mocha is great for writing and structuring tests.
>
> **[0:46](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=46)** This framework helps to write tests for [[Node.js]] applications.
>
> **[0:51](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=51)** It offers browser support, asynchronous testing, a built-in test runner and the use of any assertion library.
>
> **[0:58](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=58)** The test examples in chapter one of this course are all written in Mocha.
>
> **[1:03](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=63)** Jasmine is also a great option for a test framework.
>
> **[1:07](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=67)** It can be used with any JavaScript flavor and does not require a browser or DOM.
>
> **[1:12](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=72)** It has clean obvious syntax to help easily write tests.
>
> **[1:16](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=76)** And it has its own customizable test runner.
>
> **[1:20](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=80)** Jest is a popular framework used and created by Facebook to test all [[React.js|React]] code.
>
> **[1:27](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=87)** Jest is already included when creating a new React project, which allows for a zero configuration experience and makes it quick and easy to get started writing tests.
>
> **[1:39](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=99)** Jest also has a built-in test runner, mocking library, and code coverage reporter.
>
> **[1:46](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=106)** There are also some popular frameworks that provide a browser or browser-like environment for testing to be done through the UI.
>
> **[1:54](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=114)** [[Selenium]] is the classic option for UI testing, and it can be used with any flavor of JavaScript and most popular frameworks including Mocha, Jasmine and Jest.
>
> **[2:06](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=126)** Cucumber is a behavior driven development or BDD UI testing framework.
>
> **[2:11](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=131)** Cucumber executes specifications written in plain language.
>
> **[2:16](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=136)** The test scenarios inside of the specification use the Given-When-Then format to help describe the input, action, and results of tests.
>
> **[2:27](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=147)** It also works well with Selenium.
>
> **[2:30](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=150)** Cypress IO is another UI testing framework that is fast, easy, and reliable for testing any application that runs in a browser.
>
> **[2:39](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=159)** There are lots of different frameworks, and because of that, I recommend you do some investigation before deciding to use any one in particular.
>
> **[2:48](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=168)** A good thing is that many frameworks support a BDD structure.
>
> **[2:52](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=172)** The benefits of this structure are that it allows for organization of features and scenarios to be clearly identified.
>
> **[3:00](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=180)** It also allows for more collaboration between team members.
>
> **[3:04](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=184)** I want to point out that it's not necessary to use a prebuilt framework like Mocha or Jasmine or Jest, but I highly recommend it because it just makes life easier.
>
> **[3:15](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=195)** These existing frameworks will allow you to get your test up and running much quicker.
>
> **[3:21](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=201)** They allow you to spend less time thinking about how tests will be written and structured and more time actually writing test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[React.js|React]] (2), [[Selenium]] (2), [[Test Automation]] (1), [[Node.js]] (1)
> **Env Vars:** bdd (2), dom (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1), node (1)
> **File Paths:** node.js (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)

#### [Assertion library](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=0)** - [Instructor] Assertions are the backbones of tests.
>
> **[0:03](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=3)** They make tests have meaning by validating the results.
>
> **[0:07](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=7)** Assertions will fail a test when the expected results don't match the actual results.
>
> **[0:13](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=13)** There are various assertion libraries that can be used in an automation project.
>
> **[0:18](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=18)** Popular assertion libraries are Assert, which is built into [[Node.js]] itself.
>
> **[0:24](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=24)** Jasmine and Jest, which are built into the framework.
>
> **[0:29](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=29)** And Chai and Unexpected, which are standalone, BDD assertion libraries.
>
> **[0:35](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=35)** I recommend using the assertion library that comes built-in to Node.js, or built into the test framework itself.
>
> **[0:43](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=43)** There's no need to download unnecessary dependencies if you can avoid it.
>
> **[0:48](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=48)** But if the framework you select doesn't have an assertion library, or you want more flexibility, pick any assertion library of your choice.
>
> **[0:57](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=57)** Let's see some examples using each assertion library that I mentioned, where we can confirm that a function which adds two numbers returns the right result.
>
> **[1:07](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=67)** First up is Assert.
>
> **[1:09](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=69)** I've shown examples using Assert in chapter one, but here's a refresher.
>
> **[1:14](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=74)** To assert equality, I can say assert.equal, the actual result compared to the expected result.
>
> **[1:23](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=83)** The Assert module itself provides a simple set of assertion tests that can be used to verify results.
>
> **[1:29](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=89)** It's not as customizable as some of the other options, but it's great for simple scenarios.
>
> **[1:35](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=95)** With Jasmine, the expect annotation is used.
>
> **[1:39](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=99)** With expect, it's really the same as assert, but just a different way to phrase it.
>
> **[1:45](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=105)** To expect equality, I can write a phrase that expects the actual value to equal the expected value.
>
> **[1:53](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=113)** Jasmine offers a wide range of matcher functions to use in assertions, and allows custom matcher functions to be built as well.
>
> **[2:02](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=122)** With Jest, the annotation is completely identical to Jasmine, but it's just specific to [[React.js|React]] test to code only.
>
> **[2:10](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=130)** It also offers a wide range of matchers.
>
> **[2:13](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=133)** Using Chai, the same expect function is used, but the statement uses matchers split up by periods.
>
> **[2:21](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=141)** So the statement reads as expect, the actual value to.equal, the expected value.
>
> **[2:30](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=150)** Chai has great custom plugins to extend assertions, and has integrations with other vendors to make assertions even more powerful.
>
> **[2:39](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=159)** And with Unexpected, the syntax is similar as well, but simply writes out the matcher and a string format, making the statement very readable.
>
> **[2:49](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=169)** The equality assertion looks like expect, the actual value, end quotes, to equal, the expected value.
>
> **[2:59](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=179)** It is highly extensible and compatible with all testing frameworks.
>
> **[3:04](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=184)** So as you can see, there are some differences in syntax, but that's okay.
>
> **[3:09](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=189)** What's most important is that the assertion statements are readable and make it clear what is being validated.
>
> **[3:15](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=195)** Find one that you feel comfortable using and stick with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[React.js|React]] (1)
> **CLI Commands:** make (3), node (2), find (1)
> **File Paths:** node.js (2)
> **Env Vars:** bdd (1)
> **Speakers:** - [instructor] (1)

#### [Test results](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=0)** - [Instructor] Once tests are written, the fund can really start.
>
> **[0:04](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=4)** The whole idea about test is to run them over and over again.
>
> **[0:10](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=10)** With all that test running going on, it's a good idea to have a way to easily run test in a repeatable way and see the results of those tests.
>
> **[0:20](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=20)** I'll show an example of running test and reporting results now with Mocha.
>
> **[0:25](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=25)** To get started, I'll hop over to the project repository that's open in code spaces.
>
> **[0:32](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=32)** I'll focus on one of my unit test classes under test, unit and I'll open calculatetotalprice.test.js and show how I can run this one test file.
>
> **[0:48](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=48)** I'll go ahead and close the explorer and open up my terminal.
>
> **[0:53](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=53)** And in the terminal, I'll start by typing npx mocha.
>
> **[0:59](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=59)** NPX is a tool that comes with NodeJS and allows you to execute binaries and command line tools.
>
> **[1:06](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=66)** Use the NPX command with the mocha command to execute the mocha binary.
>
> **[1:12](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=72)** Next I specify the file or files to run.
>
> **[1:16](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=76)** In this case, let's just go with this test file that's shown at test/unit/calculateTotalPrice.test.js
>
> **[1:31](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=91)** and then I'll press enter.
>
> **[1:36](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=96)** And I can see the output displayed in my terminal window.
>
> **[1:40](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=100)** There are many options for which test and test files to run.
>
> **[1:44](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=104)** If I want to run all the unit test, I'll type npx mocha test/unit/*.js.
>
> **[1:58](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=118)** This uses a file path pattern to match all files in the unit test directory that end with the .js extension.
>
> **[2:06](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=126)** And when I press enter, I can see the output of all of the tests that were run.
>
> **[2:12](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=132)** One way that I recommend writing tests is to use the help of our Node package manager.
>
> **[2:18](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=138)** To demonstrate that, I'll go to the project and look for the package.[[JSON]] file.
>
> **[2:28](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=148)** And in this file there is a script section where there are different scripts to perform different actions, mainly a lot of testing type scripts are defined here.
>
> **[2:40](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=160)** So let me focus my attention on line 7 where there is a unit test script which runs that command I just ran in the terminal to run all of the unit test in the unit directory.
>
> **[2:54](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=174)** So going back to my terminal, I can type [[npm]] run unit-test
>
> **[3:03](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=183)** to go ahead and execute that script that's defined on line 7.
>
> **[3:07](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=187)** And when I press enter, I see somewhat the same results here in my terminal, I see all of the tests that ran, and at the beginning I see the information from the package.JSON including the project name, version and the script that was run as well as the command that runs.
>
> **[3:29](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=209)** So a little bit different view this way.
>
> **[3:32](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=212)** Look through the other scripts available to run test, and understand how each script works.
>
> **[3:38](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=218)** Feel free to add or modify scripts to run different variations of test.
>
> **[3:43](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=223)** Running tests with Jasmine and Jest have similar requirements to get set up and run test.
>
> **[3:49](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=229)** All major frameworks have a basic level of reporting that come with the test runner.
>
> **[3:54](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=234)** Most test runners can also be customized to present information in a particular way.
>
> **[4:00](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=240)** And there's also an option to select a test runner that generates nice and detailed reports if that is what is important to you and your team.
>
> **[4:08](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=248)** No matter the tool, just remember to make it easy to run test through a simple command and make sure the results can be clearly interpreted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[npm]] (1)
> **CLI Commands:** npx (4), make (2), node (1), npm (1)
> **Tools:** terminal (6), command line (1)
> **File Paths:** package.json (2), calculatetotalprice.test.js (1), test/unit/calculatetotalprice.test.js (1)
> **Env Vars:** npx (2), json (2)
> **Definitions:** is a  (3)
> **Code Identifiers:** calculatetotalprice (1)
> **UI Navigation:** go to (1)


### 4. Decide What to Automate

[↑ Back to Table of Contents](#table-of-contents)

#### [Scenarios to automate](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980&t=0)** - [Narrator] Spend some time to identify scenarios to automate.
>
> **[0:04](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980&t=4)** For each new feature being implemented, I recommend to sit down with your team and take 10 minutes to write down as many scenarios as you can think of.
>
> **[0:14](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980&t=14)** Don't worry about writing down scenarios that are too off the wall or not feasible.
>
> **[0:19](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980&t=19)** The goal in this stage should be to think of as many scenarios as possible.
>
> **[0:24](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980&t=24)** I'll spend the [[Representational State Transfer (REST)|rest]] of this video listing some possibilities for test scenarios.
>
> **[0:30](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980&t=30)** From the homepage of the AI Animal Art application, I can view [[Microsoft Products|products]] for sale.
>
> **[0:37](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980&t=37)** After viewing items available for purchase, I can choose the one I want and select add to cart.
>
> **[0:46](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980&t=46)** If I want many of the same type of item, I can continue to click the add to cart button, and then I can shop around and select add to cart for some other items as well.
>
> **[0:59](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980&t=59)** Going to my cart, I can see all of the items that I have added, and I can also see a total price of the items down below.
>
> **[1:08](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980&t=68)** If I decide I don't want an item any longer, I can select it and update the quantity anywhere from zero to 10.
>
> **[1:16](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980&t=76)** So for the cat, I'll set the quantity to zero, which removes the item.
>
> **[1:21](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980&t=81)** I can update the quantity on multiple items or remove multiple items from the cart.
>
> **[1:28](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980&t=88)** Then perhaps I don't want any of these items anymore and want to start over.
>
> **[1:33](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980&t=93)** I can then set the quantity of the last item to zero, which would go ahead and clear out my cart and remove all items.
>
> **[1:45](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980&t=105)** When I'm happy with my order and the items in my cart, I can select checkout to complete the purchase.
>
> **[1:53](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980&t=113)** I'll stop at these 10 scenarios for now, but this is still not an exhaustive list of all of the scenarios that could be automated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** cat (1)
> **Speakers:** - [narrator] (1)

#### [Give each scenario a value](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=0)** - After identifying a list of scenarios, they need to be evaluated.
>
> **[0:05](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=5)** Assign a score of one to five, based on how valuable each scenario is.
>
> **[0:10](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=10)** The scores for value will be determined based on the importance of the feature, the [[Probability]] this feature would be fixed if broken, and the distinctness of the scenario.
>
> **[0:21](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=21)** Work with your team and use your best judgment along the way.
>
> **[0:25](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=25)** As an exercise, have the group of stakeholders assign a score for the value of each scenario.
>
> **[0:31](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=31)** I'll evaluate a couple of my test scenarios now.
>
> **[0:35](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=35)** The first scenario is View [[Microsoft Products|Products]] for Sale.
>
> **[0:38](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=38)** This is a required feature of high importance.
>
> **[0:42](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=42)** Customers need to view the items for sale to buy them.
>
> **[0:45](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=45)** This would be fixed immediately and it's distinct and necessary.
>
> **[0:49](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=49)** So I'll give this a score of five.
>
> **[0:51](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=51)** Next up is Adding an Item to the Cart.
>
> **[0:54](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=54)** This is a very important feature and would definitely be fixed immediately.
>
> **[0:59](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=59)** This is also a distinct feature.
>
> **[1:00](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=60)** So I'll give this a score of five.
>
> **[1:03](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=63)** Now we have Add Multiple Items to the Cart.
>
> **[1:06](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=66)** It's a required feature and would be fixed immediately, but this isn't so distinct as adding a single item to a cart.
>
> **[1:14](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=74)** So I'll give this a score of four.
>
> **[1:16](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=76)** Another scenario is Removing an Item from the Cart.
>
> **[1:19](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=79)** This is a good and distinct feature to have, but not as important as being able to add an item to the cart.
>
> **[1:25](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=85)** I'll give this a score of four.
>
> **[1:28](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=88)** The final scenario I'll evaluate is Order Checkout.
>
> **[1:32](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=92)** It is a required feature of high importance, and this is how money will be made.
>
> **[1:37](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=97)** It would be fixed faster than any other issue and is distinct.
>
> **[1:41](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=101)** So I'll give this a score of five.
>
> **[1:43](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=103)** I'll repeat this process for each potential test scenario.
>
> **[1:47](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=107)** Here you can see the final values.
>
> **[1:49](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=109)** This list can help surface the most valuable test to build.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1), [[Microsoft Products|Products]] (1)
> **Definitions:** is a  (4)
> **Speakers:** - after (1)

#### [Risk of automation](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=0)** - Now, I'll go through each scenario and assign it a risk score from one to five.
>
> **[0:06](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=6)** The risk is determined based on two factors.
>
> **[0:09](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=9)** One, the impact of the feature.
>
> **[0:12](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=12)** If it's broken, what will the impact be to customers?
>
> **[0:15](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=15)** And two, the [[Probability]] of use.
>
> **[0:18](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=18)** How often will this feature be used by customers?
>
> **[0:22](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=22)** The first scenario I'll evaluate for risk is viewing [[Microsoft Products|products]] for sale.
>
> **[0:27](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=27)** This is a high impact feature and has high probability of use.
>
> **[0:31](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=31)** I'll give this a score of five.
>
> **[0:34](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=34)** Next, is add an item to cart.
>
> **[0:37](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=37)** This is high impact and high probability, so I'll give this a score of five, as well.
>
> **[0:42](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=42)** Another scenario is adding multiple items to the cart.
>
> **[0:45](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=45)** This is high impact and will likely be used often.
>
> **[0:49](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=49)** I'll give this a score of four.
>
> **[0:51](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=51)** The final scenario is order checkout.
>
> **[0:54](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=54)** This is the highest impact feature and certainly has a high probability of use, so this one also gets a score of five.
>
> **[1:02](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=62)** I'll repeat the same process for the [[Representational State Transfer (REST)|rest]] of the scenarios.
>
> **[1:05](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=65)** Here you can see the final risk scores.
>
> **[1:09](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=69)** Risk allows teams to think about how often a feature will be used and what will go wrong if the feature is broken.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (4), [[Microsoft Products|Products]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - now (1)

#### [The cost of automation](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=0)** - Risk and value are critical when considering test scenarios, but it's also important to consider how much automating a test may cost.
>
> **[0:09](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=9)** I'll go through each scenario and assign a score of one to five for the cost of automation.
>
> **[0:15](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=15)** The score of cost will be determined by how easy it will be to write the test script and how quickly the test will be scripted.
>
> **[0:23](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=23)** First step is view [[Microsoft Products|products]] for sale.
>
> **[0:25](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=25)** This is an easy and quick test script to write.
>
> **[0:28](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=28)** I'll give this a score of five.
>
> **[0:30](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=30)** Next up is adding an item to the cart.
>
> **[0:33](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=33)** This is easy to write and should also be pretty quick to write, so I'll give this a score of five.
>
> **[0:40](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=40)** The next scenario is to remove an item from the cart.
>
> **[0:43](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=43)** It is easy to write, but will first require adding an item to the cart to remove it.
>
> **[0:48](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=48)** I'll give this a score of four.
>
> **[0:51](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=51)** Remove items from cart is an easy to write scenario, but requires adding multiple items to the cart to remove them as well.
>
> **[0:58](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=58)** Because of this, I'll give this scenario a score of three.
>
> **[1:01](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=61)** And then we have the order checkout scenario.
>
> **[1:04](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=64)** It's easy to write, but again, it depends on the amount of items added to the cart.
>
> **[1:10](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=70)** In that case, I'll give this a score of four.
>
> **[1:13](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=73)** Here you can see the final score for each scenario.
>
> **[1:16](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=76)** Assigning a cost to each scenario is where we've been able to see the most variance.
>
> **[1:22](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=82)** This helps quantify the effort of writing a test to make an informed judgment about what to automate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Definitions:** is an  (2)
> **CLI Commands:** make (1)
> **Speakers:** - risk (1)

#### [Select what to automate](https://www.linkedin.com/learning/test-automation-foundations/select-what-to-automate-14468801?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/select-what-to-automate-14468801?u=76281980&t=0)** - After identifying the value, risk, and cost of each scenario, there is now enough information to select the best candidates for automation.
>
> **[0:10](https://www.linkedin.com/learning/test-automation-foundations/select-what-to-automate-14468801?u=76281980&t=10)** Here are the final scores.
>
> **[0:12](https://www.linkedin.com/learning/test-automation-foundations/select-what-to-automate-14468801?u=76281980&t=12)** Now I'll sum the value, risk, and cost scores for each scenario to get the total, and here is the sum of the final scores.
>
> **[0:21](https://www.linkedin.com/learning/test-automation-foundations/select-what-to-automate-14468801?u=76281980&t=21)** Now let's analyze these numbers to determine the next steps.
>
> **[0:25](https://www.linkedin.com/learning/test-automation-foundations/select-what-to-automate-14468801?u=76281980&t=25)** Because this example was pretty limited in scope, all scores were three or higher, which is good.
>
> **[0:31](https://www.linkedin.com/learning/test-automation-foundations/select-what-to-automate-14468801?u=76281980&t=31)** This will definitely not be the case for all features, but for now, let's work with the data we have, and make some conclusions about it.
>
> **[0:38](https://www.linkedin.com/learning/test-automation-foundations/select-what-to-automate-14468801?u=76281980&t=38)** In this instance, I'll decide to create a scale as follows.
>
> **[0:43](https://www.linkedin.com/learning/test-automation-foundations/select-what-to-automate-14468801?u=76281980&t=43)** Scores 13 to 15 should be automated, and scores 12 and less should not be automated.
>
> **[0:49](https://www.linkedin.com/learning/test-automation-foundations/select-what-to-automate-14468801?u=76281980&t=49)** That means I'll end up automating the following scenarios.
>
> **[0:52](https://www.linkedin.com/learning/test-automation-foundations/select-what-to-automate-14468801?u=76281980&t=52)** I have confidence these scenarios will be the most important to prioritize writing test for.
>
> **[0:58](https://www.linkedin.com/learning/test-automation-foundations/select-what-to-automate-14468801?u=76281980&t=58)** Not saying the others aren't important, but the idea should be to focus on these top scenarios first.
>
> **[1:05](https://www.linkedin.com/learning/test-automation-foundations/select-what-to-automate-14468801?u=76281980&t=65)** This isn't a hard-and-fast rule.
>
> **[1:07](https://www.linkedin.com/learning/test-automation-foundations/select-what-to-automate-14468801?u=76281980&t=67)** Scoring a scenario on value, risk, and cost, help to quantify this data and make it easier to select what to automate.
>
> **[1:15](https://www.linkedin.com/learning/test-automation-foundations/select-what-to-automate-14468801?u=76281980&t=75)** Feel free to adapt this model to suit your team's needs.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **UI Navigation:** select the (1)
> **Speakers:** - after (1)


### 5. Adopt Test Automation

[↑ Back to Table of Contents](#table-of-contents)

#### [Maintain standards](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=0)** - [Instructor] [[Test Automation]] is an ongoing process.
>
> **[0:03](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=3)** This process works out best when it starts with a strong foundation and continues to build steadily over time.
>
> **[0:10](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=10)** It requires that the team invest in the test and follow good standards.
>
> **[0:15](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=15)** There are three simple rules that can make all the difference when it comes to maintaining a healthy test suite.
>
> **[0:21](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=21)** The first rule is valuable tests.
>
> **[0:24](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=24)** Your automation tests should always be delivering value.
>
> **[0:28](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=28)** It's a good idea to revisit tests over time and have a retrospective on them regularly to determine if tests need improvements.
>
> **[0:36](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=36)** It's all about quality over quantity.
>
> **[0:39](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=39)** Focus on automating what's important rather than about how many tests are written.
>
> **[0:45](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=45)** Treat test code like production code and give it the same level of nurturing and attention.
>
> **[0:52](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=52)** The second rule is about reliable tests.
>
> **[0:55](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=55)** It is imperative that tests provide the same result every single time.
>
> **[1:00](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=60)** Have a plan in place for mitigating failures.
>
> **[1:03](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=63)** Failure is going to be inevitable, but it's necessary to have a plan for addressing the failed test.
>
> **[1:09](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=69)** I'll discuss this more in the next video.
>
> **[1:11](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=71)** I also recommend having independent tests where the execution of one does not affect the other.
>
> **[1:18](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=78)** Similarly, run tests in a dedicated environment to not interfere with others that might be using the same environment for other reasons.
>
> **[1:26](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=86)** The last rule is about fast tests.
>
> **[1:28](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=88)** Try to keep execution as quick as possible to have fast build times and ultimately be able to release code quicker.
>
> **[1:37](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=97)** Parallelizing tests allows many tests to be run concurrently, which dramatically reduces the total time it takes to run.
>
> **[1:45](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=105)** Limit testing in the UI in order to have more focus on the faster, lower level test.
>
> **[1:52](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=112)** Keeping all these rules in mind about what's important to maintain a healthy automation suite makes a world of difference over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test Automation]] (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Make a maintenance plan](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=0)** - [[Test Automation]] is an ongoing process and maintenance will be a huge portion of that process.
>
> **[0:08](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=8)** The three main parts of maintenance include adding new tests, updating old tests and fixing failures.
>
> **[0:16](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=16)** New features in a [[Software Development]] project will require that new tests be added.
>
> **[0:22](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=22)** For the individuals working on the new functionality, discuss how it will be tested and what types of tests will be created.
>
> **[0:29](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=29)** Applications change over time and tests can get out of date.
>
> **[0:34](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=34)** It is necessary to keep things updated no matter the reason.
>
> **[0:37](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=37)** Sometimes tests will need new test data or a different assertion to validate the results.
>
> **[0:43](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=43)** Other times a test should be deleted if it's no longer relevant or the feature it's testing has changed completely.
>
> **[0:51](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=51)** It's also inevitable that tests will fail for various reasons.
>
> **[0:55](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=55)** Since the build must always be green, it's important that there be a plan of action for those tests not passing.
>
> **[1:03](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=63)** If there's a random failure, find some way to mitigate the failure.
>
> **[1:07](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=67)** Like rerunning the tests that don't pass.
>
> **[1:09](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=69)** I also recommend isolating flaky tests from those that run consistently.
>
> **[1:16](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=76)** Those flaky tests can be improved and then moved back to the main build once they are reliable.
>
> **[1:21](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=81)** If it's a legitimate failure, it's necessary for the test to be investigated and fixed immediately.
>
> **[1:29](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=89)** A legitimate failure might also indicate a bug that needs to be fixed in the code.
>
> **[1:34](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=94)** This should require that the code which introduced the bug be reverted or the bug be fixed.
>
> **[1:40](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=100)** Tests will need to be regularly added, updated, and fixed.
>
> **[1:44](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=104)** Having a plan of attack for maintenance keeps these changes happening smoothly to ensure a more robust automation suite.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test Automation]] (1), [[Software Development]] (1)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - test (1)

#### [Use continuous integration](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=0)** - [Instructor] The magic of automated test is that they can be run over and over again and provide the same result.
>
> **[0:07](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=7)** [[Continuous Integration (CI)|Continuous integration]] is the best way to allow automated tests to be run repeatedly across different platforms and environments.
>
> **[0:15](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=15)** And with continuous integration, test can be triggered as a result of any new changes pushed to [[GitHub]].
>
> **[0:22](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=22)** Or tests can also be run on a reoccurring basis, such as every hour or every night at 9:00 PM.
>
> **[0:29](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=29)** A benefit of running tests continuously is that it will likely catch bugs sooner than compared to engineers running tests locally on an ad hoc basis.
>
> **[0:40](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=40)** There are many CI solutions available.
>
> **[0:42](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=42)** I won't get into the different options here, but I will recommend selecting a solution based on cost, ease of use, maintenance, and support.
>
> **[0:52](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=52)** For the [[Representational State Transfer (REST)|rest]] of this video, I'll demonstrate setting up my test application to work with continuous integration.
>
> **[1:01](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=61)** I'll use GitHub's continuous integration solution with GitHub actions.
>
> **[1:07](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=67)** GitHub actions makes it easy to automate software workflows.
>
> **[1:12](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=72)** Using their continuous integration workflows you can build test and deploy code right from GitHub, plus it's free for public repositories.
>
> **[1:24](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=84)** Focusing my attention back on the repository for [[Test Automation]] foundations, I'll select actions from the header and here I can create new workflows to run in my project.
>
> **[1:38](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=98)** So I'll select the new workflow button, which allows me to choose a workflow.
>
> **[1:44](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=104)** I'll start searching for node and press Enter.
>
> **[1:48](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=108)** And I want to configure the action called [[Node.js]].
>
> **[1:52](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=112)** So I'll press the configure button, which is going to open a new workflow YAML for me at GitHub/workflows.
>
> **[2:03](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=123)** And the file is called node.js.yaml.
>
> **[2:07](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=127)** This YAML file is a configuration file to specify how to build, test, and run the application.
>
> **[2:16](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=136)** Looking, looking over this workflow file, I see the name of the workflow.
>
> **[2:21](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=141)** I see that it will run on pushes to the main branch and pull request to the main branch.
>
> **[2:29](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=149)** It's going to build on the latest version of [[Ubuntu]] and there is a matrix for node version.
>
> **[2:36](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=156)** So this is the first thing that I'll change here on line 19.
>
> **[2:40](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=160)** I only want to use the latest version of node, which is currently 22 point x.
>
> **[2:48](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=168)** Let's step down and focus on the steps, starting with checking out the project using node.js, specifying the version running MPMCI, which is essentially going to run a build and install the packages.
>
> **[3:05](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=185)** And then line 30 and 31, we will run another build and [[npm]] test.
>
> **[3:10](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=190)** So here is where I'm going to change things up a little bit more.
>
> **[3:14](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=194)** I'm going to remove lines 30 and 31.
>
> **[3:17](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=197)** On line 30 I want to start the server with the command run:npm start & to go ahead and start the test server running in the background.
>
> **[3:32](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=212)** On line 31, I want to run the unit test with -run:npm run unit-test.
>
> **[3:46](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=226)** I'll press Enter to go to a new line, line 32 where I will next run the integration test.
>
> **[3:53](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=233)** - run: npm run integration-test.
>
> **[4:03](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=243)** And I'll press enter again to go to a new line.
>
> **[4:05](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=245)** And now on line 33, I want to run the UI test, so I can say -run: npm run UI-test.
>
> **[4:17](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=257)** And that's it for now.
>
> **[4:19](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=259)** So here in this build, I am going to run the install, start the server, run the unit test, run the integration test, and then run the UI test.
>
> **[4:31](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=271)** So now that I'm done with that, I will scroll up and look for the commit changes button.
>
> **[4:35](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=275)** I'll go ahead and select that.
>
> **[4:37](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=277)** And for now, I will commit directly to the main branch.
>
> **[4:41](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=281)** Let me commit those changes.
>
> **[4:45](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=285)** And now I will click on the project name to go back to the homepage of the repository.
>
> **[4:51](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=291)** Here I see my commit create node.js.yaml, which is pending.
>
> **[4:57](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=297)** Selecting that little yellow circle will open up another window to let me know that the checks are in progress.
>
> **[5:05](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=305)** Here I'll select the details link, which takes me to the output of the job.
>
> **[5:09](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=309)** I see all of those same steps that were defined in the YAML running here in my window.
>
> **[5:15](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=315)** So I can just wait for all of the build steps to finish, which should just take another couple seconds.
>
> **[5:24](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=324)** Hooray.
>
> **[5:26](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=326)** So this build was successful.
>
> **[5:28](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=328)** It succeeded in 35 seconds, and I see the status here.
>
> **[5:32](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=332)** Going back to the actions tab, I can see that same output of the job here, and I'll see as more and more of those builds run or workflows run, I'll see them all displayed here.
>
> **[5:48](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=348)** I encourage you to look at other workflows that GitHub actions has to offer.
>
> **[5:52](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=352)** If it seems like this could be a good continuous integration workflow for your scenario.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (7), [[Continuous Integration (CI)|Continuous integration]] (6), [[npm]] (5), [[Node.js]] (4), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** node (7), npm (5)
> **Tools:** github (7)
> **UI Navigation:** select the (2), go to (2), scroll up (1), click on (1)
> **Env Vars:** yaml (3), mpmci (1), npm (1)
> **File Paths:** node.js (2), node.js.yaml (2)
> **Prerequisites:** configure (2), install (2)
> **Definitions:** is a  (2), is called (1)

#### [Measure code coverage](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=0)** - [Person] Code coverage is one of the most popular metrics to analyze automated test.
>
> **[0:05](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=5)** Coverage is measured by how much of the code is used within test.
>
> **[0:10](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=10)** It is helpful at visualizing which parts of the application are well-tested and which are not.
>
> **[0:16](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=16)** Like all things with automated test, luckily, there are many tools that can help provide a solution.
>
> **[0:22](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=22)** Code coverage tools are usually free for open-source projects and straightforward to set up.
>
> **[0:28](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=28)** Code coverage typically tracks statement, branch, and function coverage.
>
> **[0:33](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=33)** They also provide command-line tools and offer nice reports to visualize coverage.
>
> **[0:39](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=39)** To use a coverage tool, a package needs to be installed to the project, then that tool can be used when the tests are run and a coverage report will be generated.
>
> **[0:50](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=50)** As an example, I'll use the test coverage tool called Istanbul, which is widely used for [[JavaScript]] projects.
>
> **[0:59](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=59)** Visit istanbul.[js.org](https://js.org) to get started.
>
> **[1:05](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=65)** A really simple way to use Istanbul is through the command-line client called NYC, which has instructions to set up shown here.
>
> **[1:15](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=75)** I'll go over to the terminal now and install the command-line tool called NYC by typing this command "[[npm]] install --save-dev nyc."
>
> **[1:28](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=88)** Once I'm back in the code spaces for "test-automation-foundations," I'll open up the terminal and I can type "npm install --save-dev nyc," and press Enter
>
> **[1:49](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=109)** to go ahead and install that NYC command-line client.
>
> **[1:55](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=115)** It looks like the NYC command-line client installed successfully, so now I can call the NYC test command when running tests to generate coverage.
>
> **[2:05](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=125)** I'll now focus my attention on the "package.[[JSON]]" file.
>
> **[2:11](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=131)** If I scroll down to the bottom of this file, I'll notice that on line 31 NYC is installed, and then, going back up towards the top, I'll focus on line 11, which has the test coverage script.
>
> **[2:26](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=146)** This script uses the "nyc" command followed by "mocha," and we'll run the "unit," "integration," and "UI" test.
>
> **[2:38](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=158)** Now let's try out this test script.
>
> **[2:41](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=161)** So going back to the terminal, first, I want to make sure that my server is started, so to do that, I'll type "npm start," and I see that the server is up and running on my local host.
>
> **[2:56](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=176)** Next, let me open a new terminal window, and here I can run that script, "npm run test-coverage," and press Enter and wait for the results.
>
> **[3:11](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=191)** After all the test are run, the coverage report is generated and shows percentages of coverage for each test file broken down by statements, branches, functions, and lines, I could also see the uncovered lines of code in the last column.
>
> **[3:29](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=209)** The coverage metrics that are high in percentage are displayed in green, medium percentage are displayed in yellow, and low in percentage are displayed in red.
>
> **[3:42](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=222)** It's then possible to analyze this data and see if there are any trends and determine if any area can use more test coverage.
>
> **[3:50](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=230)** While I always recommend measuring test coverage for any project with automated test, I don't recommend having to meet strict coverage targets as a result.
>
> **[4:00](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=240)** For example, 100% test coverage sounds wonderful because it means everything is tested, but it can also have negative effects.
>
> **[4:08](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=248)** Decouple coverage from purpose to focus on writing the most important test that will provide the highest value.
>
> **[4:15](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=255)** Never automate something for the sole purpose of increasing coverage, rather, use the coverage data to make informed decisions about how testing in a particular area can be improved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (4), [[JavaScript]] (1), [[JSON]] (1)
> **CLI Commands:** npm (4), make (2)
> **Env Vars:** nyc (6)
> **Prerequisites:** install (4), set up (2)
> **Tools:** terminal (4)
> **File Paths:** istanbul.js (1), package.json (1)
> **URLs:** [js.org](https://js.org) (1)
> **Cross-References:** in the last (1)

#### [Share automation success](https://www.linkedin.com/learning/test-automation-foundations/share-automation-success-14471759?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/share-automation-success-14471759?u=76281980&t=0)** - [Instructor] Share stories about automation with the [[Representational State Transfer (REST)|rest]] of the organization or company.
>
> **[0:05](https://www.linkedin.com/learning/test-automation-foundations/share-automation-success-14471759?u=76281980&t=5)** Chances are not everyone will be familiar with [[Test Automation]].
>
> **[0:09](https://www.linkedin.com/learning/test-automation-foundations/share-automation-success-14471759?u=76281980&t=9)** In that case, it's beneficial to discuss what problem automation intends to solve.
>
> **[0:15](https://www.linkedin.com/learning/test-automation-foundations/share-automation-success-14471759?u=76281980&t=15)** Also highlight the value of automation so that it's relevant to others.
>
> **[0:19](https://www.linkedin.com/learning/test-automation-foundations/share-automation-success-14471759?u=76281980&t=19)** Tests can tell a compelling story about the state of an application.
>
> **[0:23](https://www.linkedin.com/learning/test-automation-foundations/share-automation-success-14471759?u=76281980&t=23)** The best way to promote automation is to share wins with the rest of the organization.
>
> **[0:29](https://www.linkedin.com/learning/test-automation-foundations/share-automation-success-14471759?u=76281980&t=29)** Share examples of things like how many bugs automation caught.
>
> **[0:33](https://www.linkedin.com/learning/test-automation-foundations/share-automation-success-14471759?u=76281980&t=33)** A goal of automation is to help catch bugs quicker and ideally before release.
>
> **[0:38](https://www.linkedin.com/learning/test-automation-foundations/share-automation-success-14471759?u=76281980&t=38)** Take note of which bugs were discovered from test automation.
>
> **[0:42](https://www.linkedin.com/learning/test-automation-foundations/share-automation-success-14471759?u=76281980&t=42)** It can also be a good idea to share how many hours automation saved from manually testing a feature.
>
> **[0:48](https://www.linkedin.com/learning/test-automation-foundations/share-automation-success-14471759?u=76281980&t=48)** A good sign of this is having higher productivity and being able to spend less time on each release because more of the checks are automated.
>
> **[0:56](https://www.linkedin.com/learning/test-automation-foundations/share-automation-success-14471759?u=76281980&t=56)** In terms of [[Team Collaboration]], it's good to share how automation helped cross-functional team members work more closely together to pair on activities like identifying high value scenarios and writing test code.
>
> **[1:09](https://www.linkedin.com/learning/test-automation-foundations/share-automation-success-14471759?u=76281980&t=69)** Being able to share compelling stories of automation backed by data is invaluable.
>
> **[1:14](https://www.linkedin.com/learning/test-automation-foundations/share-automation-success-14471759?u=76281980&t=74)** It will make the team feel more excited about automation and that the time invested in automation is worthwhile.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[Test Automation]] (2), [[Team Collaboration]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Advance your skills](https://www.linkedin.com/learning/test-automation-foundations/advance-your-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/advance-your-skills?u=76281980&t=0)** - Thank you so much for watching my course on the Foundations of [[Test Automation]].
>
> **[0:04](https://www.linkedin.com/learning/test-automation-foundations/advance-your-skills?u=76281980&t=4)** Remember that test automation is extremely valuable to the success of a software project, but requires proper planning, execution, and maintenance.
>
> **[0:14](https://www.linkedin.com/learning/test-automation-foundations/advance-your-skills?u=76281980&t=14)** To continue to advance your skills with test automation, spend more time learning about and writing automated tests.
>
> **[0:21](https://www.linkedin.com/learning/test-automation-foundations/advance-your-skills?u=76281980&t=21)** I also recommend building your own automation suite for an application.
>
> **[0:26](https://www.linkedin.com/learning/test-automation-foundations/advance-your-skills?u=76281980&t=26)** If you'd like to get in touch, I'd enjoy hearing from you or answering any questions you might have.
>
> **[0:31](https://www.linkedin.com/learning/test-automation-foundations/advance-your-skills?u=76281980&t=31)** You can reach me on [[LinkedIn]], Twitter, or on my website.
>
> **[0:35](https://www.linkedin.com/learning/test-automation-foundations/advance-your-skills?u=76281980&t=35)** Looking forward to hearing from you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test Automation]] (3), [[LinkedIn]] (1)
> **Speakers:** - thank (1)


## Instructor

- [[Meaghan Lewis]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/test-automation-foundations-728391)

## Skills Covered

- Test Automation

## Path Context

### In [[TestMu AI Test Automation Professional Certificate]]
**1 of 2** | [[Selenium Essential Training]] →

### In [[The Top Skills Engineering Professionals Have Right Now]]
← [[SOLIDWORKS 2024 Essential Training]] | **8 of 9** | [[C Programming for Embedded Applications]] →

### In [[Getting Started with Software Testing]]
← [[Understanding Manual Testing]] | **3 of 12** | [[Software Testing- Planning Tests for Mobile]] →

## Part of

- [[TestMu AI Test Automation Professional Certificate]]

## Appears In

- [[TestMu AI Test Automation Professional Certificate]]
- [[The Top Skills Engineering Professionals Have Right Now]]
- [[Getting Started with Software Testing]]

## Related Courses

_Courses sharing skills:_

- [[Postman Essential Training]] — Test Automation
- [[Learning Selenium- Structure, Scale, Run, and Optimize Automated Tests]] — Test Automation
- [[Advanced Playwright Techniques- Optimizing Speed, Stability, and Cloud Testing]] — Test Automation
- [[Playwright- Design Patterns]] — Test Automation
- [[Playwright Essential Training- Abstractions, Fixtures, and Complex Scenarios]] — Test Automation

---

[↑ Back to top](#)