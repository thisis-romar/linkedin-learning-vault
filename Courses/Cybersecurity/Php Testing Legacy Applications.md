---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: php-testing-legacy-applications
url: "https://www.linkedin.com/learning/php-testing-legacy-applications"
level: Intermediate
updated: 4/18/2018
learners: 35332
skills:
  - PHP
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFkj-Bf8vWqtw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118629594?e=2147483647&amp;v=beta&amp;t=WLBFAA8UF-GyMwjkvTV7kTAKQHiqoZ6qe0Yb4_2Zcts"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Advance Your PHP Skills]]'
next_courses:
  - '[[Functional Programming with PHP]]'
path_nav: '[{"path":"Advance Your PHP Skills","position":1,"total":7,"prev":null,"next":"Functional Programming with PHP"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/software-development
  - topic/web-development
  - skill/php
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Php%20Testing%20Legacy%20Applications.md)

![Php Testing Legacy Applications](https://media.licdn.com/dms/image/v2/C4E0DAQFkj-Bf8vWqtw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118629594?e=2147483647&amp;v=beta&amp;t=WLBFAA8UF-GyMwjkvTV7kTAKQHiqoZ6qe0Yb4_2Zcts)

# Php Testing Legacy Applications

> Working with a legacy code base can be tricky. Developers who need to add new features or fix bugs often feel the need to tread lightly when working with older code, fearing that one wrong move might cause them to break something important. The same apprehension can affect developers who want to test legacy PHP applications. In this course, instructor Chris Hartjes guides PHP developers through th

> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications) | Intermediate | 35K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Welcome](#welcome)
  - [What you need you to know](#what-you-need-you-to-know)
  - [Exercise files](#exercise-files)
- [**1. What Changes When Testing Legacy Code**](#1-what-changes-when-testing-legacy-code) (5 videos)
  - [TDD vs. test after](#tdd-vs-test-after)
  - [How the tools change](#how-the-tools-change)
  - [Quick primer on test doubles](#quick-primer-on-test-doubles)
  - [Code coverage and confidence levels](#code-coverage-and-confidence-levels)
  - [Difficult people](#difficult-people)
- [**2. Why Legacy Code Can Be Hard to Test**](#2-why-legacy-code-can-be-hard-to-test) (5 videos)
  - [Bootstrap sequences, part 1](#bootstrap-sequences-part-1)
  - [Bootstrap sequences, part 2](#bootstrap-sequences-part-2)
  - [Hard-coded dependencies](#hard-coded-dependencies)
  - [Difficult deployments](#difficult-deployments)
  - [Poor package management practices](#poor-package-management-practices)
- [**3. Laying the Foundation**](#3-laying-the-foundation) (4 videos)
  - [Just how many tests do we need?](#just-how-many-tests-do-we-need)
  - [Tests as questions](#tests-as-questions)
  - [How we decide what to test?](#how-we-decide-what-to-test)
  - [Real vs. monkey patch vs. double](#real-vs-monkey-patch-vs-double)
- [**4. Testing Legacy Code**](#4-testing-legacy-code) (8 videos)
  - [Why test a legacy application?](#why-test-a-legacy-application)
  - [Identifying dependencies](#identifying-dependencies)
  - [Planning a scenario](#planning-a-scenario)
  - [Building a scenario](#building-a-scenario)
  - [Planning real to doubles](#planning-real-to-doubles)
  - [Building real to doubles](#building-real-to-doubles)
  - [Refactor your tests](#refactor-your-tests)
  - [Add getters and setters](#add-getters-and-setters)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980&t=1)** - [Chris] Imagine this scenario.
>
> **[0:03](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980&t=3)** You're a PHP developer who has an old legacy code base that you need to fix bugs and add new features to.
>
> **[0:09](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980&t=9)** This code is old and crufty, and you are often afraid to change anything out of fear of breaking it.
>
> **[0:15](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980&t=15)** You also know that you should be writing tests for this application, because you've heard so many other people talk about unit testing, but have no idea where to start.
>
> **[0:25](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980&t=25)** Test-driven development sounds great, but you have all this existing code to worry about.
>
> **[0:30](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980&t=30)** Wouldn't it be great if you knew someone who could guide you through all the concepts you need to understand, and show you how to actually build these testing scenarios and then turn them into working tests?
>
> **[0:39](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980&t=39)** I'm that person.
>
> **[0:41](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980&t=41)** My name is Chris Hartjes, and I'm here to help you learn how to write tests for legacy PHP code bases.
>
> **[0:47](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980&t=47)** I've been using PHP since 1998 and talking to folks about writing tests for their code since 2003.
>
> **[0:54](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980&t=54)** In this course, I want to teach you the fundamental concepts and skills so you can add tests to your application to give you confidence that the changes you make don't break anything, and the bugs you fix stay fixed.
>
> **[1:07](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980&t=67)** First, I'm going to explain how the testing tools change when you already have code that needs tests as opposed to the perfect world test-driven development imagines you are in.
>
> **[1:17](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980&t=77)** Next, I'm going to talk about why legacy code bases can be so difficult to wrap tests around.
>
> **[1:23](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980&t=83)** Difficult people, weird bootstrapping sequences, hard-coded dependencies, challenging deployments, and poor package management can really derail your attempts to get automated tests in place.
>
> **[1:37](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980&t=97)** Then I lay the foundation by introducing you to the concepts that make up the backbone of your testing skillset.
>
> **[1:43](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980&t=103)** We'll talk about how and what you should be testing, along with explaining how test doubles work and showing how I plan out my testing scenarios using plain English.
>
> **[1:54](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980&t=114)** And finally, how we can refactor our tests and the code itself to lead to better testing outcomes.
>
> **[2:00](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980&t=120)** I want to help you get up to speed on testing your code a lot faster than I did.
>
> **[2:06](https://www.linkedin.com/learning/php-testing-legacy-applications/welcome?u=76281980&t=126)** There's a lot of things to cover, so sit back, relax, and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), application (2), [[Test-Driven Development]] (2), [[Unit Testing]] (1), next (1)
> **CLI Commands:** php (3), make (2)
> **Env Vars:** php (3)
> **Analogies:** imagine (1)
> **Speakers:** - [chris] (1)

#### What you need you to know
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/what-you-need-you-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/what-you-need-you-to-know?u=76281980&t=1)** - [Instructor] To get the most out of this course, I feel like you need to have the following skills.
>
> **[0:05](https://www.linkedin.com/learning/php-testing-legacy-applications/what-you-need-you-to-know?u=76281980&t=5)** First, be an experienced PHP developer.
>
> **[0:08](https://www.linkedin.com/learning/php-testing-legacy-applications/what-you-need-you-to-know?u=76281980&t=8)** Next, have experience working on a team writing code for an application.
>
> **[0:12](https://www.linkedin.com/learning/php-testing-legacy-applications/what-you-need-you-to-know?u=76281980&t=12)** Third, understand how your application gets deployed.
>
> **[0:15](https://www.linkedin.com/learning/php-testing-legacy-applications/what-you-need-you-to-know?u=76281980&t=15)** And finally, not be afraid to use the command line.
>
> **[0:18](https://www.linkedin.com/learning/php-testing-legacy-applications/what-you-need-you-to-know?u=76281980&t=18)** Also, this course assumes you are using the following things.
>
> **[0:21](https://www.linkedin.com/learning/php-testing-legacy-applications/what-you-need-you-to-know?u=76281980&t=21)** PHP 7.1 or greater, PHPUnit 6.5 or greater, and Composer is installed system-wide.
>
> **[0:28](https://www.linkedin.com/learning/php-testing-legacy-applications/what-you-need-you-to-know?u=76281980&t=28)** I'm using PhpStorm as my editor, but use whatever you know best.
>
> **[0:32](https://www.linkedin.com/learning/php-testing-legacy-applications/what-you-need-you-to-know?u=76281980&t=32)** And I'm using the Bash shell for command line work.
>
> **[0:35](https://www.linkedin.com/learning/php-testing-legacy-applications/what-you-need-you-to-know?u=76281980&t=35)** Again, use what you know best.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), application (2), next (1)
> **CLI Commands:** php (2), composer (1)
> **Tools:** command line (2), bash (1)
> **Env Vars:** php (2)
> **Versions:** php 7 (1), 6.5 (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### Exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/exercise-files?u=76281980&t=1)** - [Instructor] I've included exercise files with this course.
>
> **[0:03](https://www.linkedin.com/learning/php-testing-legacy-applications/exercise-files?u=76281980&t=3)** I've included all the code that makes up our legacy application and the tests that I wrote along the way, so you can follow along if you want.
>
> **[0:10](https://www.linkedin.com/learning/php-testing-legacy-applications/exercise-files?u=76281980&t=10)** I've included instructions on how to install this application, if you want to run all the tests yourself.
>
> **[0:15](https://www.linkedin.com/learning/php-testing-legacy-applications/exercise-files?u=76281980&t=15)** For each video I've included any changes that were made, whether I wrote a new test or actually changed the code I was testing.
>
> **[0:21](https://www.linkedin.com/learning/php-testing-legacy-applications/exercise-files?u=76281980&t=21)** You can find a Begin folder and End folder for the code for each video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (2)
> **CLI Commands:** find (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. What Changes When Testing Legacy Code

[↑ Back to Table of Contents](#table-of-contents)

#### TDD vs. test after
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980&t=1)** - [Instructor] I have told countless people before that test driven development is really a design pattern.
>
> **[0:05](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980&t=5)** You are using the test you write to guide you as you build your interfaces and your APIs.
>
> **[0:10](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980&t=10)** Code written using TDD tends to start to look the same, large number of objects with a few methods, accepting input, transforming that input and then returning that output for use by something else.
>
> **[0:20](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980&t=20)** When in many cases you already have code written and it was not designed with test in mind.
>
> **[0:24](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980&t=24)** Despite the uphill climb you want to add test to give you and others some confidence that the next time they change some code everything is not going to figuratively explode.
>
> **[0:32](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980&t=32)** This is often referred to as test after and requires a completely different skill set and I want to explain why.
>
> **[0:39](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980&t=39)** Test driven development assumes that you have already decided how you want your code to look like.
>
> **[0:43](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980&t=43)** Your tests are written as if everything is perfect and you just keep writing code until the test passes.
>
> **[0:48](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980&t=48)** You repeat this process until all your code is perfect and all your tests pass.
>
> **[0:53](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980&t=53)** Of course this is nonsense, when I'm doing TDD I am often exploring how things work before I commit to writing all the tests.
>
> **[1:00](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980&t=60)** I will write out what I'm trying to do as pseudo code, meaning free form English that states what I'm trying to do, and then I start turning the pseudo code into actual code line by line.
>
> **[1:09](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980&t=69)** I then repeat this process until I am happy with the amount of tests I have.
>
> **[1:13](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980&t=73)** Test after is totally different because you already have code that is being used and hopefully working in production.
>
> **[1:19](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980&t=79)** The test will look different because the design decisions were already made.
>
> **[1:22](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980&t=82)** Like I mentioned before, the secret power of TDD is that it forces you to consider things up front before you commit to a specific approach.
>
> **[1:29](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980&t=89)** With test after you're already committed to a specific structure and approach.
>
> **[1:34](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980&t=94)** That's not to say you can't go back later on and refactor or even rewrite the code, but work very hard to resist changing too many things at once.
>
> **[1:41](https://www.linkedin.com/learning/php-testing-legacy-applications/tdd-vs-test-after?u=76281980&t=101)** The real goal is to get some tests in place so they can tell you if you have accidentally broken something later on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (1), power (1)
> **Env Vars:** tdd (3)
> **Speakers:** - [instructor] (1)

#### How the tools change
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/how-the-tools-change?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/how-the-tools-change?u=76281980&t=1)** - [Instructor] Previously, I talked about how the test after approach that is required for legacy code differs from the test first approach that can be adopted for projects that start with testing from the very beginning.
>
> **[0:11](https://www.linkedin.com/learning/php-testing-legacy-applications/how-the-tools-change?u=76281980&t=11)** To be perfectly clear, you'll still be making use of assertions and test doubles, but you are likely going to be using a lot more test doubles than you will end up being comfortable with.
>
> **[0:20](https://www.linkedin.com/learning/php-testing-legacy-applications/how-the-tools-change?u=76281980&t=20)** I know you might not know what a test double is.
>
> **[0:22](https://www.linkedin.com/learning/php-testing-legacy-applications/how-the-tools-change?u=76281980&t=22)** Don't worry, I'm going to explain them in detail later.
>
> **[0:25](https://www.linkedin.com/learning/php-testing-legacy-applications/how-the-tools-change?u=76281980&t=25)** When we think about code that is easy to test, it has lots of the same properties, objects with lots of small methods, and we basically pass messages around that are processed and reacted to.
>
> **[0:36](https://www.linkedin.com/learning/php-testing-legacy-applications/how-the-tools-change?u=76281980&t=36)** In an environment like this, we can write code to greatly reduce the number of dependencies we need to create substitutes for.
>
> **[0:42](https://www.linkedin.com/learning/php-testing-legacy-applications/how-the-tools-change?u=76281980&t=42)** This, in turn, leads us to needing fewer and fewer test doubles.
>
> **[0:46](https://www.linkedin.com/learning/php-testing-legacy-applications/how-the-tools-change?u=76281980&t=46)** But legacy codebases are generally not that ready for the isolated unit tests that can help protect us from regressions and unexpected behavior.
>
> **[0:53](https://www.linkedin.com/learning/php-testing-legacy-applications/how-the-tools-change?u=76281980&t=53)** They can use a lot of hard-coded dependencies, and from a testing perspective, that can cause a lot of challenges.
>
> **[0:59](https://www.linkedin.com/learning/php-testing-legacy-applications/how-the-tools-change?u=76281980&t=59)** For a quick reminder of the arrange-act-assert pattern, you arrange the creation of any dependencies you need, you act on the code you are testing, then you assert the outcomes that you are expecting.
>
> **[1:11](https://www.linkedin.com/learning/php-testing-legacy-applications/how-the-tools-change?u=76281980&t=71)** Using many test doubles causes a very large expansion of the arrange step, which makes sense, because after all, tests are just code you write to make sure other code behaves as expected.
>
> **[1:23](https://www.linkedin.com/learning/php-testing-legacy-applications/how-the-tools-change?u=76281980&t=83)** The first time you go through the process of creating doubles for the dependencies the code you are testing needs, you will feel that pain, the pain of all that extra work just to get you to a point where you can test your code.
>
> **[1:34](https://www.linkedin.com/learning/php-testing-legacy-applications/how-the-tools-change?u=76281980&t=94)** Remember, getting your application to a testable state is not a sprint, it is a marathon.
>
> **[1:38](https://www.linkedin.com/learning/php-testing-legacy-applications/how-the-tools-change?u=76281980&t=98)** You can incrementally work on improving the code to be testable.
>
> **[1:42](https://www.linkedin.com/learning/php-testing-legacy-applications/how-the-tools-change?u=76281980&t=102)** This was a technique I used for the web registrar application I'm using to show you the techniques.
>
> **[1:47](https://www.linkedin.com/learning/php-testing-legacy-applications/how-the-tools-change?u=76281980&t=107)** Bit by bit you rewrite the code to be testable, and then refactor it to make it better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (2), web (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Quick primer on test doubles
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=0)** - [Instructor] Understanding where test doubles fit into my tests, was one of the biggest hurdles I had to overcome when first learning TDD.
>
> **[0:07](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=7)** They are powerful but easily misused.
>
> **[0:09](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=9)** I want to go over the different types of test doubles you will find in your tests.
>
> **[0:13](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=13)** So what is a double?
>
> **[0:14](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=14)** Simply put, a double is a substitute for a real dependency the code you are testing needs.
>
> **[0:19](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=19)** Most testing frameworks that use assertion based tests either provide you with the tools or they're available as a library or extension.
>
> **[0:26](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=26)** PHPUnit comes with Prophecy installed, which is a great tool for creating test doubles.
>
> **[0:30](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=30)** I prefer to use Mockery, I like the syntax better then Prophecy.
>
> **[0:34](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=34)** As a quick aside, most people who use these tools refer to them as mocks.
>
> **[0:38](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=38)** Mocks are simply just a type of test double but the original methods inside PHPUnit for creating doubles were called getMock and getMockBuilder.
>
> **[0:45](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=45)** Mocks could be thought of, and I'm using air quotes here, the brand name for doubles, but mocks are just another double.
>
> **[0:52](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=52)** And I think it helps to understand the different roles of doubles if we move away from calling everything a mock.
>
> **[0:57](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=57)** For the longest time you only had one option, what was built into PHPUnit itself.
>
> **[1:01](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=61)** Over time other tools were developed to work with PHPUnit and now Prophecy is included with the testing framework.
>
> **[1:07](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=67)** I don't think it matters what tool you use, to create your double, but I think it needs to have the following characteristics.
>
> **[1:13](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=73)** It has to be compatible with your testing framework of choice.
>
> **[1:16](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=76)** It has to create objects with class signatures that type hints and return types accept.
>
> **[1:21](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=81)** And it will not allow you to create methods on a double that do not exist on the original object.
>
> **[1:26](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=86)** For those wondering a bit about how doubles work internally, they rely on PHPs object reflection capabilities.
>
> **[1:32](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=92)** It creates a copy of the dependency and then starts changing how the copy behaves, that way we have something that behaves like the original but completely under our control.
>
> **[1:41](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=101)** So when do you use a double?
>
> **[1:43](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=103)** Again, from a high level you want to use a double when you can't use the real dependency.
>
> **[1:48](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=108)** Sometimes this is because it requires the use of a database and you don't want to maintain it.
>
> **[1:52](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=112)** Sometimes it's because you would be making an API call to a remote server and your account is rate limited.
>
> **[1:58](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=118)** There are many, many reasons to use a test double.
>
> **[2:02](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=122)** Now what are the different types of test doubles?
>
> **[2:04](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=124)** If you go by the definition that is given on Wikipedia, it says there are five types of doubles; dummies, fakes, spies, stubs and mocks.
>
> **[2:16](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=136)** Due to some limitations of the language itself in PHP, we can't create what would be considered canonical spies, because we lack the ability to easily introspect objects at runtime, meaning look inside them at their properties, which is what spies rely on.
>
> **[2:31](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=151)** So let's take a look at how I define the remaining four types of test doubles.
>
> **[2:35](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=155)** First we have dummies.
>
> **[2:37](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=157)** A dummy is a stand-in for a dependency when we don't care about class signatures or functionality.
>
> **[2:43](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=163)** When creating a dummy, which I'll show you later, I usually use PHPs standard object as a thing I copy.
>
> **[2:49](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=169)** If you are using versions of PHP that allow you to use type hints, you no longer should use dummies, PHP will complain and throw an error that you are trying to give it something that it doesn't expect.
>
> **[3:00](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=180)** Next we have fakes.
>
> **[3:02](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=182)** Fakes are dependencies that you build without the use of the frameworks tools.
>
> **[3:06](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=186)** A good example might be an object representing a class that sends emails.
>
> **[3:10](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=190)** You create it with all the same class signatures and methods but it won't actually send any emails.
>
> **[3:16](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=196)** There are some developers that are big fans of using fakes because of the overhead of maintaining your test doubles.
>
> **[3:21](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=201)** This was certainly true in the past but these days, as I mentioned before, most of the test double creation tools will not let you create doubles with class methods that do not exist on the original.
>
> **[3:32](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=212)** That way it greatly reduces the chances that your test doubles no longer work the way the real dependencies actually work.
>
> **[3:37](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=217)** It is possible to have tests that pass but the code actually no longer works the way the test expects it to.
>
> **[3:43](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=223)** Definitely a discussion for another time and it is outside the scope of this course, so let's keep going.
>
> **[3:48](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=228)** Next we have stubs.
>
> **[3:50](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=230)** Stubs are dummies that can be a substitute for a dependency and it matches the class signature so any code that relies on type hints will accept it.
>
> **[3:58](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=238)** This is definitely what you should be using instead of dummies if you choose to use type hints.
>
> **[4:03](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=243)** And finally we have mocks.
>
> **[4:05](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=245)** A mock is a stub where you have used the frameworks tools to tell it I expect this method to be called and to return this value, or I expect this object to have this value assigned to this property.
>
> **[4:17](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=257)** This is by far the most common test double you will use.
>
> **[4:21](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=261)** So to recap, 'cause we went over a lot of stuff.
>
> **[4:24](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=264)** Test doubles are a tool you can use when you need to create substitute dependencies.
>
> **[4:29](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=269)** There are a number of different double types suited to different needs.
>
> **[4:33](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=273)** Use them when you can't use the real dependency due to environmental restrictions.
>
> **[4:37](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=277)** Every assertion based testing framework supports them.
>
> **[4:41](https://www.linkedin.com/learning/php-testing-legacy-applications/quick-primer-on-test-doubles?u=76281980&t=281)** And finally, use test double tools that won't allow you to create methods on doubles that don't exist on the original.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), next (2), database (1), api (1)
> **Env Vars:** php (3), tdd (1), api (1)
> **Definitions:** is a  (5)
> **CLI Commands:** php (3), find (1)
> **Code Identifiers:** getmock (1), getmockbuilder (1)
> **Speakers:** - [instructor] (1)

#### Code coverage and confidence levels
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=0)** - [Instructor] Code coverage is a measurement of what parts of your code are executed when your tests are run.
>
> **[0:05](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=5)** To generate this information, you'll need to install the Xdebug extension for PHP.
>
> **[0:11](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=11)** Many times code coverage metrics are used as a way to indicate the success or failure of a test suite.
>
> **[0:16](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=16)** I urge some caution in the use of code coverage metrics as a leading indicator of good or bad tests.
>
> **[0:22](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=22)** I've seen a meme going around Twitter where someone shares a picture of a real world situation where two individual items behave as expected, but when combined, fail to work.
>
> **[0:31](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=31)** "CUnit tests are useless" is the message that is trying to be communicated.
>
> **[0:35](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=35)** First, those things are a failure of design and not a failure of tests themselves.
>
> **[0:40](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=40)** Yes, it is 100% possible to have 100% code coverage via the unit test, but not actually have the code work as expected.
>
> **[0:47](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=47)** I would instead suggest that if you are only testing that individual unites of code work as expected, and are not making sure that when they are used together in something approximately resembling the real world, you are definitely setting yourself up for a large failure in the future.
>
> **[1:02](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=62)** There's this great picture that a New York City based developer named Noah Sussmann has shared where he inverts the standard testing pyramid.
>
> **[1:10](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=70)** So if you look at this image, you can see we have a bottom layer that consists of unit tests, and that is by far the largest component of our test suite.
>
> **[1:17](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=77)** Then the next level up, we have integration tests which are designed to make sure that the individual units when talking to each other, work as expected.
>
> **[1:25](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=85)** And then finally, we have another layer that are our acceptance tests, where either a real person or an automated system will go and run those tests for us.
>
> **[1:34](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=94)** The whole idea is that every step up the pyramid, we're verifying that things continue to work the way we expect them to work.
>
> **[1:41](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=101)** Noah came up with this great image, and instead suggested thinking about all these tests as a filter.
>
> **[1:47](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=107)** So, instead of thinking about your tests as layers that build on top of each other, like a pyramid, as we go from unit tests to integration tests, where the units talk to each other, to acceptance tests, where either real people or automated systems actually use the application, we should think of all these different tests as filters that stop only certain types of bugs from occurring.
>
> **[2:07](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=127)** You still need all these different types of tests, but at the end of this filter, we're left with really weird edge case bugs and scenarios that we did not think of when we wrote the tests.
>
> **[2:17](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=137)** As an aside, you always need to understand that when we're writing tests, we're simply looking for situations and scenarios that we can think of right now.
>
> **[2:26](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=146)** Not necessarily thinking of tomorrow, but all these tests just simply represent all the different scenarios we came up with at the time we wrote them.
>
> **[2:33](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=153)** Things definitely change.
>
> **[2:35](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=155)** Code coverage is generally only applied at the unit test level.
>
> **[2:39](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=159)** How much of my code is actually being tested?
>
> **[2:41](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=161)** That's it.
>
> **[2:42](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=162)** There's really nothing special about the idea, but so many people put too much emphasis on code coverage as some universal metric that we could use to decide whether we're doing a good job.
>
> **[2:52](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=172)** Since I'm trying to focus on testing legacy code basis here, I want to set aside a lot of the rhetoric surrounding code coverage.
>
> **[2:59](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=179)** You've already made the commitment to try and write as many tests as possible for this code base, because you're looking to increase your ability to alter parts of the code base with a higher than normal level of confidence.
>
> **[3:10](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=190)** I use code coverage tools to look up parts of the code base that currently have no tests, and then use the report to target areas that need tests.
>
> **[3:17](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=197)** Let's look at a code coverage report for openCFP, a large project that I am the benevolent dictator for life on.
>
> **[3:24](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=204)** In this report we can see the following things: how many lines of code are covered by tests, how many functions and methods are covered by tests, and finally how many classes and traits are covered by these tests.
>
> **[3:37](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=217)** So, how do we actually use these metrics?
>
> **[3:39](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=219)** Well, if you're lucky enough to have been using test driven development, then you will have an application that has 100% code coverage all the time.
>
> **[3:46](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=226)** This is how it is supposed to work.
>
> **[3:48](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=228)** You can then focus on a good series of tests and make sure that when these fully tested units talk to each other under something resembling a production situation, they work as expected.
>
> **[3:58](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=238)** With legacy codebases we usually have no tests, or very few tests.
>
> **[4:02](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=242)** That means our strategies are totally different.
>
> **[4:05](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=245)** We have limited time and resources, so we need to approach things in a very different way.
>
> **[4:10](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=250)** So what would I do?
>
> **[4:11](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=251)** Remember our earlier discussion about thinking about tests as a filter instead of a pyramid?
>
> **[4:16](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=256)** Here's what my filter for deciding what to test looks like.
>
> **[4:19](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=259)** You should filter by objects with the most lines of code, then filter by how few lines of code have tests.
>
> **[4:26](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=266)** And then finally, start writing tests for the object with the most lines of untested code.
>
> **[4:31](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=271)** Once you've written enough tests that your current code on your test is no longer the leader, concentrate your efforts on the code that now occupies the top spot on the ontested leaderboard.
>
> **[4:41](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=281)** The title of this video mentions confidence in relation to code coverage.
>
> **[4:45](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=285)** The goal is always the same.
>
> **[4:47](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=287)** Write enough tests that you have the confidence to go and refactor things, knowing the tests will tell you if changes you made at point A have broken things at point B.
>
> **[4:56](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=296)** Code coverage is a way to identify parts of your code base, that have very little in the way of tests.
>
> **[5:01](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=301)** Keeping an eye out for regressions, meaning unintended changes and unintended bugs.
>
> **[5:07](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=307)** It can be totally intimidating to have a large code base to work on, and having a very slow feedback loop on whether or not your changes have broken something.
>
> **[5:15](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=315)** Automated testing tools are always aiming to make that feedback loop as short as possible.
>
> **[5:21](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=321)** When I can make a change, and find out in under a minute if that change has broken something, it gives me a really high level of confidence that I can explore solutions and make bug fixes.
>
> **[5:31](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=331)** To be very blunt here, if you make changes to code, and don't have an automated, repeatable way to verify these changes haven't broken anything, you are literally guessing that your application works as expected.
>
> **[5:44](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=344)** I don't want you to guess.
>
> **[5:45](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=345)** I want you to know.
>
> **[5:47](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=347)** So to recap here; code coverage tools let you identify which parts of your codebase are run during tests.
>
> **[5:54](https://www.linkedin.com/learning/php-testing-legacy-applications/code-coverage-and-confidence-levels?u=76281980&t=354)** Code coverage metrics can be used to decide what parts of your code need more tests, and finally, the rule should be to give you confidence in your ability to make changes to your code without breaking the application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (4), [[PHP]] (1), next (1)
> **CLI Commands:** make (7), php (1), find (1)
> **Definitions:** is a  (2)
> **Analogies:** picture (2)
> **Prerequisites:** you'll need (1), install (1)
> **Code Identifiers:** opencfp (1)
> **Env Vars:** php (1)
> **Warnings:** caution (1)

#### Difficult people
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=0)** - [Narrator] For a very long time, I was convinced that all you needed to know in order to be a good tester like me, was to master the basic concept surrounding writing tests, learn how to use the tools, and the rest would take care of itself.
>
> **[0:12](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=12)** Many programmers think of ourselves as beings of pure logic.
>
> **[0:16](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=16)** Of course once you learn about testing you'll want to do it all the time.
>
> **[0:19](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=19)** Because it is totally logical to have something that tells you when your code isn't working as expected.
>
> **[0:24](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=24)** I was totally wrong.
>
> **[0:26](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=26)** Tests are written by people.
>
> **[0:28](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=28)** And people can be difficult for a variety of reasons.
>
> **[0:31](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=31)** I want to share with you some thoughts based on my own experiences in the hope that you can come to this realization quicker than I did.
>
> **[0:37](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=37)** The first obstacle is that when people are learning PHP, tests are so far out of mind they might as well be in a different dimension.
>
> **[0:44](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=44)** When asked what skill level is expected for my workshops, I recommend people with a firm grasp of PHP.
>
> **[0:50](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=50)** Because writing tests requires you to understand how to write code and how to visualize what you are doing ahead of time.
>
> **[0:56](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=56)** This is of course nearly impossible to do with beginning programmers.
>
> **[1:00](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=60)** I didn't learn how to code using tests.
>
> **[1:02](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=62)** I learned PHP by finding examples online, and cutting and pasting them and tweaking them, and saving them and reloading the page, and repeating this forever and ever and ever.
>
> **[1:10](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=70)** Until it behaved the way I wanted it to.
>
> **[1:13](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=73)** All the other things that we regard as practices that lead to good outcomes come much later.
>
> **[1:18](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=78)** You need a firm grasp of the language before you learn the actual benefits of having a test suit available to you.
>
> **[1:23](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=83)** You'll also need access to people who already know how to write tests.
>
> **[1:27](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=87)** I'm firmly convinced that you cannot learn the necessary skills, both technical and personal, to write effective tests on your own.
>
> **[1:35](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=95)** To paraphrase someone a lot smarter than me, if you fail to train your people, you are training them to fail.
>
> **[1:40](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=100)** So now the number one thing I hear from people other than 'You're not as grumpy in person', is 'How do I convince people to let me write tests?', because they work in an environment where tests aren't valued.
>
> **[1:51](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=111)** I've heard all the possible reasons for not having tests.
>
> **[1:53](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=113)** So believe me when I tell you, they can be lumped into one of two categories.
>
> **[1:57](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=117)** 'We don't have enough time for tests', and 'we don't have enough money for tests'.
>
> **[2:01](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=121)** These are clearly not technical issues.
>
> **[2:04](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=124)** These are people issues.
>
> **[2:05](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=125)** I want to devote a little time to explaining how to deal with these issues.
>
> **[2:10](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=130)** When it comes to 'we don't have enough time for tests', I show people that in many cases writing tests is about moving the time you spend finding and fixing bugs, to the part of the software development lifecycle that is the cheapest and least stressful part.
>
> **[2:23](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=143)** When a developer has their editor and other tools available to them, and the ability to focus on solving a problem.
>
> **[2:29](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=149)** Once the code leaves their development environment the stress related to finding the mistakes increases.
>
> **[2:34](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=154)** We want our developers to be calm and thinking clearly as they solve problems for us.
>
> **[2:39](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=159)** Anything that can help people find mistakes in their code quicker, is a good thing.
>
> **[2:44](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=164)** If you think people rise to the challenge or thrive under pressure, you are wrong.
>
> **[2:49](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=169)** What really happens is that people retreat to their lowest base level of competency.
>
> **[2:54](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=174)** This is why practicing things is so important.
>
> **[2:57](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=177)** In a pressure filled situation, you want your basic skill level to be high enough so that you almost automatically do the correct thing.
>
> **[3:04](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=184)** Think of elite level athletes that you see, you see the final result as being something amazing.
>
> **[3:10](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=190)** What you didn't see was the thousands and thousands of hours they spent training their body to respond automatically under certain situations.
>
> **[3:19](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=199)** Armed with this knowledge there's a universal truth about programming and fixing bugs.
>
> **[3:22](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=202)** You can spend the time fixing bugs in development, or fixing bugs and make it into production when everyone around you is yelling at you.
>
> **[3:29](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=209)** But you will spend time fixing bugs.
>
> **[3:31](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=211)** Reducing the time it takes to find and fix bugs is critical.
>
> **[3:35](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=215)** And pretending otherwise it to be very very ignorant about how writing code works and how people handle pressure.
>
> **[3:41](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=221)** So on the top of 'we don't have enough money for tests', this is usually phrased 'i'm not being paid to write tests' or, 'the client isn't paying us to write tests'.
>
> **[3:50](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=230)** But it is really 'we don't have enough money for tests'.
>
> **[3:53](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=233)** Some of how to deal with this definitely overlaps the 'we don't have time for tests' strategies, but I think I have a better way to explain it to this particular group of people.
>
> **[4:02](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=242)** Let's say that the cost of a developer finding a bug while they were working on code and not using a test sweep is x per unit of time.
>
> **[4:09](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=249)** Seems pretty reasonable, right?
>
> **[4:10](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=250)** If your developer goes and gets their code reviewed by someone else and a bug is found, the cost to fix that bug might be x2.
>
> **[4:16](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=256)** The original developer needs to go back verify the bug exists, fix it, and then get the code reviewed.
>
> **[4:23](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=263)** Of course it's going to cost more than if the developer found the bug with some tools before passing it off.
>
> **[4:27](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=267)** Now the code makes it into a staging environment, where someone else takes a look and finds a bug.
>
> **[4:32](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=272)** Well, now maybe it costs x5 original to fix that bug.
>
> **[4:35](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=275)** Think of the time involved, your developer has to go back, and spend a unit of time to fix the bug.
>
> **[4:40](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=280)** Now a reviewer has to spend a simliar unit of time verifying the bug no longer exists.
>
> **[4:45](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=285)** And now QA or some other person spends a similar unit of developer time in staging, verifying the bug is gone.
>
> **[4:52](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=292)** See all the costs are adding up because of 'we're not getting paid to write tests' ?
>
> **[4:56](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=296)** If that bug makes it all the way to production, well who knows how much it could cost, as a developers unit of time to fix.
>
> **[5:02](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=302)** Your decision to not build systems to catch mistakes will cost you more money.
>
> **[5:08](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=308)** Not to mention the lost opportunity costs associated with bug fixes.
>
> **[5:11](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=311)** Every minute you spend fixing a bug is a minute that cannot be used to move the business forward or to solve different problems.
>
> **[5:19](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=319)** If the developer had been given permission to spend the time and therefore the money to setup tests and other tools to help them test, you could've avoided spending 100 times the normal amount of time to find that bug.
>
> **[5:30](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=330)** Your decision to not build systems to catch mistakes will cost you more money.
>
> **[5:35](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=335)** Now finally, I'm not going to spend a lot of time addressing the last group of difficult people I've come across.
>
> **[5:41](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=341)** This is the group that instead of celebrating the fact that people are writing tests, instead concentrate on making people feel bad that their chosen testing tools are inferior.
>
> **[5:48](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=348)** I've been on social media long enough to have seen the same set of arguments.
>
> **[5:51](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=351)** 'your choice of testing tool is wrong', 'your choice to use test doubles is wrong', 'your choices on what to test is wrong'.
>
> **[5:58](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=358)** I will be blunt, there can be no productive arguments with people who are choosing to be intellectually dishonest.
>
> **[6:04](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=364)** The fact that you are writing tests is good.
>
> **[6:06](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=366)** Everything else comes down to semantics and personal preferences.
>
> **[6:09](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=369)** Every testing technique has drawbacks.
>
> **[6:11](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=371)** And anyone who tries and convince you otherwise is not being truthful.
>
> **[6:15](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=375)** Remember the concept of the testing bug filter?
>
> **[6:18](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=378)** Every single level of filter here needs to be dealt with.
>
> **[6:21](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=381)** There are easy ways and difficult ways to do it, but you need to deal with them.
>
> **[6:25](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=385)** Ignoring tools and techniques simply because of their comparative popularity will lead to bad outcomes.
>
> **[6:31](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=391)** Put shorter, don't work with people who want to argue endlessly about testing techniques.
>
> **[6:36](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=396)** Instead, find people willing to explore all the techniques and learn when to apply them and when not to.
>
> **[6:41](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-people?u=76281980&t=401)** It's the only way to move forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), [[Representational State Transfer (REST)|Rest]] (1), [[Software Development]] (1), [[Programming]] (1), business (1)
> **CLI Commands:** find (4), php (3), make (1)
> **Env Vars:** php (3)
> **Definitions:** is a  (2)
> **Prerequisites:** setup (1)
> **Speakers:** - [narrator] (1)


### 2. Why Legacy Code Can Be Hard to Test

[↑ Back to Table of Contents](#table-of-contents)

#### Bootstrap sequences, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=1)** - Okay, so I wanted to talk about here about bootstrapping sequences and what they have to do with testing.
>
> **[0:06](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=6)** In this current era of PHP frameworks, we tend to use ones that support what is known as the front controller design pattern.
>
> **[0:13](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=13)** As a quick aside, a design pattern is like recommendations on if you're trying to solve specific tasks.
>
> **[0:19](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=19)** Many many years ago a bunch of really smart computer programmers identified patterns of behavior and said, "Here is how you should implement "this particular pattern in code."
>
> **[0:29](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=29)** So all the front controller design pattern says, is that all requests to the application are going to go through one central point, and then that file will determine what's supposed to happen.
>
> **[0:40](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=40)** This sample app that we're looking at inside our editor which is PhpStorm, for those who aren't familiar with it.
>
> **[0:46](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=46)** This is for open CFP, which is a project I've mentioned throughout these videos.
>
> **[0:50](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=50)** Where it's an opensource application built in PHP that's used by conferences that are accepting submissions for people that want to speak.
>
> **[0:59](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=59)** I created this application because I run my own conferences and I needed a tool that would let me do exactly that.
>
> **[1:04](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=64)** Over time, the tool has expanded.
>
> **[1:06](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=66)** I have a whole bunch of contributors and I'm super super happy to have help on something that would be a lot of work for just one individual person to do.
>
> **[1:13](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=73)** But in this case, it is a Symfony application, a Symfony four application to be exact.
>
> **[1:18](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=78)** And, like pretty much every other PHP framework out there, whether it's Symfony, it's Laravel, you're using some version this end framework, they all use this front controller pattern.
>
> **[1:28](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=88)** So, as you can see this file right here is the index dot PHP file that's all the way, I will show you, is in our little web directory here.
>
> **[1:37](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=97)** And the way you set up the application, is that you just tell the web server, any requests to the application, we want them to go through the index file.
>
> **[1:44](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=104)** Now, I know there's some stuff in here that looks kind of weird if you haven't seen it before.
>
> **[1:47](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=107)** If we look on the editor on line three, we have a declare statement that is simply us telling PHP we want to use strict types.
>
> **[1:54](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=114)** If you remember in the video where I talked about test doubles.
>
> **[1:58](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=118)** We talked about how once you start using strict types and type hints that you can't really use dummies anymore as your doubles.
>
> **[2:04](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=124)** You need to use stubs because the code will be expecting dependencies that are being passed in to have specific class signatures and methods on them.
>
> **[2:14](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=134)** So, in this case, every single request to the application goes through this.
>
> **[2:17](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=137)** On line 13, we load our autoloader.
>
> **[2:19](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=139)** If you're familiar with PHP, it uses an autoloading system so it can find code anywhere in the file system and automatically load it without you specifically saying please load this particular file.
>
> **[2:30](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=150)** If you worked in PHP back in the mid-2000s, or even as early as 2010, or as late as 2010 I should say, you basically had to manually load every single file yourself.
>
> **[2:41](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=161)** Autoloading means that we don't have to do that and we can use fully qualified domain names for things and use namespaces to divide everything up.
>
> **[2:49](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=169)** So, on line 13 we're requiring files.
>
> **[2:51](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=171)** Here on line 15, I'm going to expand it so you can see all the different objects that we're using as part of this bootstrap sequence.
>
> **[2:56](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=176)** We have our generic environment.
>
> **[2:58](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=178)** We have a kernel that the application itself uses.
>
> **[3:02](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=182)** And we add in debugging for when we run this application in development mode or testing mode.
>
> **[3:08](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=188)** And also, that we need to use the generic request object that Symfony expects us to use.
>
> **[3:13](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=193)** We're loading a base path so we can figure out where we are in the file system.
>
> **[3:17](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=197)** We're then loading the environment variable because we can define outside of the application whether we're in testing, development, or production modes so that the application behaves differently depending on those modes.
>
> **[3:28](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=208)** We can see here on line 23 through 25, how we're checking to see if we're in production.
>
> **[3:33](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=213)** If we're in production, we don't want debugging to be turned on because it's extra overhead.
>
> **[3:38](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=218)** And finally, here on lines 27 through 31, this is the bootstrap sequence.
>
> **[3:43](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=223)** We're loading the kernel that our application expects.
>
> **[3:45](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=225)** We're passing in an environment.
>
> **[3:47](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=227)** We're passing in whether or not we're in production.
>
> **[3:49](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=229)** Then we're creating our request, which means we're grabbing all the values from the web server and then we're going to generate a response based on the request.
>
> **[3:58](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=238)** We send the response into the kernel and then we tell the kernel to terminate it's request.
>
> **[4:04](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=244)** Now, I know I've just went through a lot of stuff like in a really short period of time.
>
> **[4:08](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=248)** But I think the overall thing you want to learn from this is that on every single request there's a whole bunch of actions we need to do and if we're going to write tests that deal with any part of the application, we need to be able to override anything inside the application for testing purposes.
>
> **[4:24](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=264)** So, what does this have to do with testing?
>
> **[4:27](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=267)** Well, clearly if testing is all about we want to have our code, we want to have our dependencies, the code we're testing, and we need our dependencies to be in specific states that we know about ahead of time.
>
> **[4:38](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=278)** Because we're all about repeatable processes.
>
> **[4:40](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=280)** We want the test to run, and we want the same thing to happen every single time.
>
> **[4:44](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=284)** We want a request object in a specific state for a test.
>
> **[4:47](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=287)** We want values for speakers in the system to be in a specific state.
>
> **[4:52](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=292)** It's all about repeatable outcomes so we can verify we haven't inadvertently broken something.
>
> **[4:57](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=297)** So, what this can mean in certain applications is a humongous headache.
>
> **[5:01](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=301)** I wanted to show you just a small slice of all the things that get loaded in the background that our wonderful framework code is actually hiding from us.
>
> **[5:09](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=309)** These are a whole bunch of services that are being used.
>
> **[5:12](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=312)** These are defined in a yml file because that's what Symfony wanted.
>
> **[5:15](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=315)** But I've written applications in previous versions of the framework where we are loading all these services manually inside a larger application object.
>
> **[5:22](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=322)** Symfony doesn't do it that way anymore so instead we have these yml files.
>
> **[5:27](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=327)** But as you can see, look at all these dependencies that we have to worry about just to get our application working.
>
> **[5:32](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=332)** We have a controller, we have an action, we have several forms where we've forgotten our password, or we need to reset our password.
>
> **[5:38](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=338)** We have some helpers for templates.
>
> **[5:40](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=340)** We have a object that just simply says, here is where you can find our stuff in the path.
>
> **[5:45](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=345)** So there's all these things here, and the sad thing about all this stuff is that we need to be able to override any of these things for testing purposes.
>
> **[5:53](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-1?u=76281980&t=353)** Now, I want to show you some of the ways that we can go about taking what we did in the bootstrap sequence and override it for a test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (17), [[PHP]] (7), web (3), generic (2), [[Debugging]] (2)
> **CLI Commands:** php (7), find (2)
> **Env Vars:** php (7), cfp (1)
> **Definitions:** is a  (3), known as (1), means that (1)
> **Cross-References:** we talked about (1)
> **Prerequisites:** set up (1)
> **Speakers:** - okay (1)

#### Bootstrap sequences, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=1)** - [Instructor] Having taken a look at everything that's involved in the bootstrapping sequence, now I want to write some tests to make sure that all the functionality surrounding updating an existing test works correctly.
>
> **[0:13](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=13)** So if I switch over to it, and I'm going to scroll to the top of the file.
>
> **[0:16](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=16)** Again, you can see some similar things from the bootstrap file in the index declaring that we want types, we have a named space that we want this test to be inside, we've decided just for organizational purposes to have a separate name space just for tests.
>
> **[0:32](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=32)** I'm going to click here on line 16 to show you, here's all the dependencies and other things that we need to load.
>
> **[0:38](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=38)** All theses dependencies you see from line 16 to 26 are being loaded behind the scenes by the kernel in conjunction with all those entries that are in this services file.
>
> **[0:49](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=49)** It's going to read this and load everything that we need so that the request is ready to go.
>
> **[0:53](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=53)** Now for testing purposes, we have to override these things because we may not want the real reset form.
>
> **[0:58](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=58)** We may have to override the request so we can fake the code out and make it think that it is a user doing something when it's really just a test doing the work for us.
>
> **[1:07](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=67)** So if we scroll down a little bit more and we see that we're declaring our class as an update action test, we're extending off of the framework's own test case.
>
> **[1:15](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=75)** This is the most common pattern when you're building your test in PHPUnit.
>
> **[1:19](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=79)** Every test object that we create extends off of the base test case that PHPUnit provides.
>
> **[1:25](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=85)** And that way it gives us a whole bunch of helper methods that are already previously defined by the framework itself, so we can access them without having to re-implement functionality ourselves.
>
> **[1:35](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=95)** So for example, let's look at this first test where I try to name things very, very descriptively.
>
> **[1:41](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=101)** PHP itself doesn't care how long function names are, there's obviously probably an internal limit, I don't know what it is 'cause I've never hit it, but you want your test names to be as verbose as possible.
>
> **[1:52](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=112)** So if you notice on line 35, we have the name of the first test that we want to run.
>
> **[1:57](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=117)** Now PHPUnit has a built in policy where if you create a test method on a test class, if you prepend test, it automatically knows that it's a test.
>
> **[2:06](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=126)** But, I prefer to have the names of my test as readable as possible.
>
> **[2:11](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=131)** If you remember in an earlier video, I talked about difficult people and how tests are about people, we want our test names to be as verbose as we can get them to be so that when we see a failure, cause when your tests eventually break, you want to be able to instantly figure out which test case is no longer passing so we can very quickly figure out what broke and what needs to be fixed.
>
> **[2:33](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=153)** So, if we go through this test, just to show you some of the things we have to override from the bootstrap sequence.
>
> **[2:37](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=157)** So if we scroll down here you can see on line 42, this test is using prophecy, because other contributors like prophecy and I certainly have no objection.
>
> **[2:46](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=166)** In this case, I'm having to take the session and in the bootstrap sequence we're creating our own session but here we need to override that session and create a session of our own and set to a very specific state.
>
> **[2:57](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=177)** So in this case, you can see that we're the same.
>
> **[2:59](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=179)** Please give me a double, in this case that is equivalent to the session interface class, and now we want to set these values inside it.
>
> **[3:07](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=187)** We're looking to have a session that's going to generate an error.
>
> **[3:11](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=191)** We want to have the type as an error, it's read only, and we're also checking to make sure you cannot edit any talks in the system once the call for papers has ended.
>
> **[3:19](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=199)** So we have to override that session and we do that by creating a double.
>
> **[3:24](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=204)** Then you can see on line 55 we have our request object, and this is like one of the central things that the web application uses.
>
> **[3:32](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=212)** You know, if you look back at our bootstrap, we're looking at requests, right, we can get our request from all the information from the web server, and then we ask the kernel to process it.
>
> **[3:42](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=222)** So in this case, for this test, we need to override the request.
>
> **[3:45](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=225)** If you look at line 57, we're taking this request object that we created a double for and we're saying when the get session method should be called, it will return this new session that we've create.
>
> **[3:55](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=235)** So we're overriding things, we're saying we have a new request object, and it behaves this way and returns a specific value.
>
> **[4:03](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=243)** You can also see on line 62 we're doing a similar thing.
>
> **[4:06](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=246)** We're telling that if the request object gets called and some code wants to get this ID value from our request, we have a talk ID that we defined up here.
>
> **[4:16](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=256)** I'm going to scroll up a little bit more.
>
> **[4:18](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=258)** That's defined on line 39, where we just hard coded and said just give me a number between zero and one.
>
> **[4:25](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=265)** And so now we also have this object that represents whether a call for papers is still open.
>
> **[4:31](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=271)** This is the concept of we wanted, this test is making sure that things are being projected if you're trying to submit a talk after the deadline is closed.
>
> **[4:38](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=278)** So we need to override existing call for papers class.
>
> **[4:41](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=281)** In the application itself, the call for papers object is reading from a configuration file that says the call for papers is open between two dates.
>
> **[4:50](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=290)** In this case, we need to override it and create a copy.
>
> **[4:53](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=293)** So we do that on line 67.
>
> **[4:55](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=295)** Then in line 69, we say if the is open method on this call for papers object is called, it will return false.
>
> **[5:04](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=304)** We're going to scroll down a little bit more, we create a copy of this URL generator so it will take a couple arguments.
>
> **[5:11](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=311)** And internally we have a structure that says if we have a talk with this ID, we can generate a URL.
>
> **[5:17](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=317)** The applications going to recognize, we kind of need to do the same thing, we need to override things.
>
> **[5:21](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=321)** We've defined a bunch of things in the bootstrap sequence we need to create doubles of them and then we can override them.
>
> **[5:27](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=327)** And then we just use the system.
>
> **[5:28](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=328)** There's this great tool called faker which will allow us to generate pretend emails and pretend words, and pretend sentences.
>
> **[5:35](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=335)** So we use this faker tool to generate unique and random values so that we don't hard code them.
>
> **[5:40](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=340)** The reason you want to use tool like this faker object is you want to avoid writing tests that rely on hard coded values cause you don't want the test failing with the hard coded value changes.
>
> **[5:51](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=351)** One of the challenges you have, the application the exists over time, is that the data that uses on the application submit can change over time and we don't want our tests breaking because the users have decided to send us different data.
>
> **[6:03](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=363)** You want to be filtering things, you want to be displaying things correctly and escaping values so that people can't stick weird Java Script in form fields and break your web page and leak information out that people can use.
>
> **[6:15](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=375)** Trust me when I say using tools like this to generate random email addresses and random sentences will go a long way towards making your application a lot more robust.
>
> **[6:24](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=384)** So as you can see, we're still doing all this set up work.
>
> **[6:27](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=387)** We're down to line 90 now, and this is about line 30 or 40 of this method.
>
> **[6:32](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=392)** We're still nowhere closer to actually executing the test.
>
> **[6:35](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=395)** So here's what we're doing.
>
> **[6:37](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=397)** On lines 90 through 101, we're actually creating our new update action.
>
> **[6:43](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=403)** This is the code that we're actually trying to test.
>
> **[6:45](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=405)** Now you can see all these things we have to override that are being set in the bootstrap.
>
> **[6:50](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=410)** You can see we're creating a double for our authentication layer where theoretically you would enter a username and password and would tell you whether you have access or not.
>
> **[6:58](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=418)** We have a talk helper that will display things in our little template there.
>
> **[7:02](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=422)** We have to deal with that call for papers object that we created before.
>
> **[7:06](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=426)** We're adding in things for our mailer, we're adding in things for filtering out HTML to remove weird characters.
>
> **[7:12](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=432)** We have to send it information about the templating engine, which is Twig, some information about that.
>
> **[7:18](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=438)** You have to send it the URL generator the generate nice little fancy URL's that show up in the talk.
>
> **[7:23](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=443)** Then we have to pass it into email and a title and an end table.
>
> **[7:26](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=446)** I mean, I don't know about you, but I'm getting tired explaining this because I'm like on line 70 and this is just setup and we haven't even gone to doing the actual test.
>
> **[7:35](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=455)** So finally, this is all it is the test.
>
> **[7:38](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=458)** We generate a response, because we have our pretend request object where we've passed in all these predefined values where we have all our dependencies in a known state.
>
> **[7:47](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=467)** We create our response object which is this action, whatever it returns, then we're doing a bunch of assertions.
>
> **[7:53](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=473)** And again, this is at the heart of any unit based testing.
>
> **[7:56](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=476)** We're asserting whether something is true or something is false.
>
> **[8:00](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=480)** In this case, we want to assert that the class signature is what we're matching.
>
> **[8:04](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=484)** We're trying to assert that the status code for the response not being found is the same, meaning that we're getting a 404 if you're familiar with HTTP access codes.
>
> **[8:16](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=496)** And also want to make sure that we are getting a redirect value 'cause this URL is supposed to be redirected.
>
> **[8:22](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=502)** So as you can see, if we scroll back up I will show you.
>
> **[8:25](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=505)** We started doing all the arrange work we talked about before the arranged act assert pattern for building a test.
>
> **[8:33](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=513)** This code from line 37, if we scroll all the way down to line 88, that is the arrange step.
>
> **[8:40](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=520)** These are all the dependencies that were set by the bootstrapping sequence that we need to override just to make the test work.
>
> **[8:46](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=526)** And then line 90 through 101, I mean, it's just nicely formatted so it's human readable.
>
> **[8:51](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=531)** But basically you could have one huge, long run on line.
>
> **[8:54](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=534)** That is creating this update action, which is the code we're trying to test, and these are all the dependencies and doubles we're passing into it.
>
> **[9:01](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=541)** So that's 12 lines of that, we then grab our response and then we assert are all these things true.
>
> **[9:06](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=546)** Did we get back a redirect response?
>
> **[9:08](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=548)** That's what the test is trying to trigger.
>
> **[9:10](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=550)** Did we get a 302 as the status code, which is HTTP found.
>
> **[9:14](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=554)** And did we get a URL that's redirecting us to a proper location simply because the call for papers was closed.
>
> **[9:22](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=562)** So as you can see, many application that's using a modern framework, there is a lot going on in the background that you need to override just in order to get some of these things testable.
>
> **[9:32](https://www.linkedin.com/learning/php-testing-legacy-applications/bootstrap-sequences-part-2?u=76281980&t=572)** I hope this has illustrated types of problems you're going to experience just getting the bootstrapping sequence in place for running tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (5), web (2), data (2), [[PHP]] (1), hit (1)
> **Env Vars:** url (6), http (2), php (1), html (1)
> **CLI Commands:** make (5), php (1)
> **UI Navigation:** scroll down (3), scroll up (1)
> **Definitions:** is a  (2), is called (1)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** we talked about (1)
> **Exercise Files:** template (1)

#### Hard-coded dependencies
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=0)** - [Instructor] Again, in the context of testing, dependencies that you are unable to set at runtime can cause a problem.
>
> **[0:06](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=6)** Why?
>
> **[0:07](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=7)** Well many tests will require you to use dependencies that are set to a specific state, usually in the form of this particular method call on this particular object, needs to return this specific value.
>
> **[0:18](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=18)** To look at it from a different point of view, consider this little code snippet from a controller class in another application that is used to track results for a simulation baseball league I have been a member of for more than 20 years.
>
> **[0:30](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=30)** Yes, I have some really weird and nerdy hobbies.
>
> **[0:33](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=33)** So to identify dependencies in any code, we need to look at values being passed in this parameters, objects being created inside the method we're trying to test and any values being set inside the constructor for this object that we're trying to test.
>
> **[0:49](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=49)** In this code sample let's break it down and identify all the potential dependencies.
>
> **[0:55](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=55)** First we have five parameters that are passed in, all of which default to null.
>
> **[1:00](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=60)** Those are likely set by other parts of the framework that would be using in the class.
>
> **[1:04](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=64)** So we might be okay and not have to worry about overriding those at runtime so much.
>
> **[1:08](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=68)** Then we also create a new standings object inside this method and assign it to a class attribute.
>
> **[1:15](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=75)** This last one is definitely a hard coded dependency.
>
> **[1:19](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=79)** Because we cannot alter it at runtime, meaning that we can't change it during the arrange step of our test before we act on the code that we're testing.
>
> **[1:27](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=87)** So what can we do here to make this a lot easier to test?
>
> **[1:30](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=90)** In a lot of cases it will require some code refactoring so we can set that value at runtime.
>
> **[1:36](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=96)** In this instance we have it a little easier because we are assigning a value to a publicly scoped class attribute.
>
> **[1:43](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=103)** So in the act state of our test we could do something like this code example.
>
> **[1:48](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=108)** As you can see we are going to create a double of our standings object.
>
> **[1:53](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=113)** Then we're going to create our new standings controller.
>
> **[1:55](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=115)** Then we're going to override the value that's in that class attribute with the double that we created.
>
> **[2:00](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=120)** And then what, of course, you're not seeing is the rest of the arrange step that would follow.
>
> **[2:04](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=124)** So that was a relatively easy problem to solve.
>
> **[2:07](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=127)** Now here's a really difficult one.
>
> **[2:09](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=129)** In that same class in a different method we are loading a model using a helper function that the framework provides to us.
>
> **[2:17](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=137)** On the surface I have no idea how to deal with that load model method if I wanted to substitute a dependency at runtime.
>
> **[2:24](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=144)** As far as I can tell, the following happens: A call to load model happens.
>
> **[2:29](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=149)** Then the games attribute of this particular object is assigned a value.
>
> **[2:34](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=154)** This is all magic code or spooky action at a distance as some people like to call it.
>
> **[2:39](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=159)** I call it side effects.
>
> **[2:41](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=161)** The side effects are anything that your code is doing that modifies something elsewhere in your application.
>
> **[2:46](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=166)** These can be very difficult to track and very difficult to override at runtime.
>
> **[2:51](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=171)** So I thought about this a little bit more, of course when I wasn't recording.
>
> **[2:54](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=174)** But I think we can do some refactoring in order to set that value just simply for testing purposes.
>
> **[2:59](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=179)** I think we can simply move the loading of the model to the constructor, and then just like in our other earlier example of a test for this particular controller, override the value using a double.
>
> **[3:10](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=190)** So here's what I think we can refactor it to look like.
>
> **[3:12](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=192)** You can see we're calling the parent constructor, and we'll load the games model in there.
>
> **[3:17](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=197)** We just simply moved it from out of one method into the constructor.
>
> **[3:21](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=201)** Then in our test we can just simply override that value, we create a double of our games model.
>
> **[3:26](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=206)** Then we're also going to tell the double if you call the get max week method we will return a hard coded value that we need for testing purposes.
>
> **[3:33](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=213)** Then we create the standings object that we're testing.
>
> **[3:35](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=215)** Then we override the games attribute with the double that we just created.
>
> **[3:40](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=220)** And then we continue on with the rest of our arrange step.
>
> **[3:45](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=225)** Identifying hard coded dependencies isn't tricky.
>
> **[3:47](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=227)** Figuring out how to deal with them can be, especially if your code base is resistant to refactoring due to tight coupling everywhere.
>
> **[3:54](https://www.linkedin.com/learning/php-testing-legacy-applications/hard-coded-dependencies?u=76281980&t=234)** Especially if you are worried that touching anything will cause the application to fall over and crash.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (3), [[Representational State Transfer (REST)|Rest]] (2), [[Simulation]] (1), [[Code Refactoring]] (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Difficult deployments
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=0)** - [Instructor] A critical step for testing that a lot of folks miss is the idea that the environment you run your test in needs to be as close as it can be to production.
>
> **[0:08](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=8)** My experiences with legacy code bases have been that reproducing the production environment locally can be difficult and even sometimes impossible.
>
> **[0:17](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=17)** This leads to bugs that only appear in one environment as opposed to another.
>
> **[0:20](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=20)** On top of this, you will sometimes not be able to reproduce bugs locally.
>
> **[0:24](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=24)** So what are some things we can do to help make it easier to deploy our applications anywhere and at anytime?
>
> **[0:30](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=30)** I think the first step is to eliminate the human factor.
>
> **[0:33](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=33)** Anything that you have been doing by hand to deploy your application really, really, really needs to be replaced by something automated.
>
> **[0:40](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=40)** It can start off as a shell script that runs the commands that you type into your shell when deploying and eventually become something complicated like Puppet or Chef.
>
> **[0:48](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=48)** Or even using something like Heroku's tools to push your code from your own development environment up onto the cloud.
>
> **[0:54](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=54)** But the main goal needs to be that you need to stop doing deployments manually, other than pressing the big button to deploy things.
>
> **[1:01](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=61)** Computers are great at doing what we tell them to over and over and over and over again.
>
> **[1:06](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=66)** Humans, not so much.
>
> **[1:08](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=68)** We have our own subtle biases and sometimes we subconsciously avoid steps that are difficult.
>
> **[1:14](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=74)** Automating the actual process of deploying your application will greatly reduce the chances of things going wrong.
>
> **[1:19](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=79)** And more importantly, it will show you all the difficult parts of the deployment itself.
>
> **[1:23](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=83)** So what are some other things we need to worry about?
>
> **[1:26](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=86)** Well we need to worry about package management.
>
> **[1:28](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=88)** Composer is a tool that solve package management issues by giving you the ability to install packages of code locally, just for your application, instead of having to install them globally, where everything could find them.
>
> **[1:39](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=99)** Composer also allows you to indicate specific versions of packages you want to install, removing the likelihood that two developers on the same project are using two different versions of a library.
>
> **[1:51](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=111)** And Packagist is the complementary tool for Composer that allows you to search for packages of code that you can install using Composer.
>
> **[1:58](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=118)** The steps involved in publishing a package are very easy and the open source community gets the benefit from having one centralized location to look for packages to build your PHP applications with.
>
> **[2:09](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=129)** I think at this point, it is a highly recommended noncontroversial practice to install your PHP libraries using Composer.
>
> **[2:16](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=136)** The ability to install the exact libraries you want, every single time, should not be underestimated.
>
> **[2:23](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=143)** Now I want to talk a bit about data sources.
>
> **[2:25](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=145)** One of the more interesting challenges for applications is making sure that for testing purposes, you have similar data sets available from production.
>
> **[2:34](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=154)** Maybe you need a database populated with a snapshot of your production data, Maybe you need some images that match what people are uploading from production.
>
> **[2:42](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=162)** Could need almost anything, but you definitely want the ability to take any data and information that is in production and get it into your development environment.
>
> **[2:49](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=169)** Why is it worth the effort?
>
> **[2:51](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=171)** Often times a bug is found because some data that entered the system is not what was expected.
>
> **[2:56](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=176)** How could you reproduce a bug with say a username that contains characters you weren't expecting?
>
> **[3:00](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=180)** Or discover there is a bug that lets half finished user accounts to be created, resulting in very unpredictable behavior in the application.
>
> **[3:07](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=187)** Both these things have actually happened to me, and at the time, I wish I had spent the necessary time to create a tool to allow me to grab data and images from production.
>
> **[3:16](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=196)** The downside to all of this is now someone is responsible for maintaining all these things, which probably means it's you.
>
> **[3:23](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=203)** So finally, I wanted to briefly talk about what people refer to as sight assets.
>
> **[3:28](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=208)** Now, the days of just throwing JavaScript and CSS files into a directory and calling it a day are over.
>
> **[3:33](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=213)** People are using asset management tools like Gulp and Grunt to package up all the assets your application needs.
>
> **[3:39](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=219)** You compress them, you shrink them, you combine them into one large file, so that browser performance is better.
>
> **[3:45](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=225)** For the application to work correctly in your testing environment, you will need those assets compressed and organized the same way as in production.
>
> **[3:53](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=233)** Again, you are looking to recreate as closely as possible, the environment your application runs in.
>
> **[3:59](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=239)** Any differences are just opportunities for the application to behave differently under test.
>
> **[4:04](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=244)** To recap things, In order to test your application, you are going to need to be able to do the following: deploy the entire application automatically, automatically install the correct versions of all packages your application needs, grab any data or images from production and use them for testing purposes, and have any JavaScript or CSS deployed locally as it is in production.
>
> **[4:22](https://www.linkedin.com/learning/php-testing-legacy-applications/difficult-deployments?u=76281980&t=262)** Eliminating dependency issues is a great way to make sure you have no weird edge case bugs happening with your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (12), data (7), [[Package Management]] (2), [[PHP]] (2), [[JavaScript]] (2)
> **CLI Commands:** composer (5), make (2), php (2), find (1)
> **Prerequisites:** install (7), make sure you have (1)
> **Env Vars:** php (2), css (2)
> **Definitions:** is a  (4)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Poor package management practices
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=1)** - [Instructor] I know that in a previous video, I mentioned Composer and Packagist.
>
> **[0:04](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=4)** I want to do a bit of a deeper dive into them for folks who are working with legacy codebases that might not have been built with them in mind.
>
> **[0:12](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=12)** As I mentioned before, Composer is an open-source tool that was built to solve a difficult problem.
>
> **[0:16](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=16)** How do we package up libraries of code in such a way that they can be easily distributed and easily installed?
>
> **[0:22](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=22)** Before Composer, your choices were things like PEAR, the PHP Extension and Application Repository, or copying them to a location on the file system somewhere in PHP's load path.
>
> **[0:33](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=33)** I don't think it's any kind of hyperbole to say that Composer changed the way PHP developers build their applications.
>
> **[0:39](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=39)** A combination of Composer and Packagist, the website that acts as the main repository for searching for Composer packages, now makes it incredibly easy to install third-party libraries and all their required dependencies.
>
> **[0:52](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=52)** Composer has expanded to allow for private repositories if you want to use it for your own libraries but can't share them with the outside world.
>
> **[0:58](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=58)** Hey, sometimes we're just not allowed to share.
>
> **[1:01](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=61)** Now, if you look at package management in the context of testing, you'll quickly understand why Composer is so powerful and what problem it is solving.
>
> **[1:09](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=69)** Imagine if instead of being installed right in the same directory as your application's code, all your third-party dependencies are installed somewhere else on the file system.
>
> **[1:18](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=78)** While this might not be a big deal because you can just add those locations to PHP's load path, but how would you go about updating those dependencies or even installing them locally?
>
> **[1:27](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=87)** If you are trying to deploy your application to an environment other than production, your first step should be to get all your third-party dependencies moved into your application's codebase.
>
> **[1:36](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=96)** This will allow you to do the easiest ever deployment technique for your code.
>
> **[1:41](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=101)** Create an archive of your codebase using your preferred tool like ZIP or the built-in archiving tool for Macintosh or whatever you're using if you're using a Linux-based system.
>
> **[1:50](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=110)** Send that archive to someone else.
>
> **[1:52](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=112)** Then that other person then extracts the contents of the archive in a location that your web server can find it, and now your application is running somewhere else.
>
> **[1:59](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=119)** Or if you're still a big fan, you could even use an FTP tool to copy everything from one location to another.
>
> **[2:05](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=125)** The point is you should make it as easy as possible for someone to take your code and deploy it somewhere else.
>
> **[2:12](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=132)** Now, Composer works so well because we have a feature in PHP called autoloading.
>
> **[2:16](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=136)** It allows us to tell PHP where to look for code by telling it, oh, if you're looking for a class in this namespace with this name, you can find it over here on the file system.
>
> **[2:26](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=146)** It allows us to no longer have to use a require statement for every single class that we wish to include in our code.
>
> **[2:32](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=152)** Instead, we just load our autoloader script, and then PHP handles the rest.
>
> **[2:37](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=157)** Again, I cannot emphasize enough how helpful Composer is when you are trying to deploy code in a different environment for testing purposes.
>
> **[2:45](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=165)** Composer also allows you to lock your dependencies to specific versions, so you don't run the risk of accidentally installing a newer version of a package that might have a bug in it.
>
> **[2:55](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=175)** Now, remember, the goal here is to make it as easy as possible to deploy all the code your application needs to any location.
>
> **[3:03](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=183)** Migrating your application to using community-adopted package management tools makes that goal a lot easier.
>
> **[3:09](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=189)** If your application was not built with Composer in mind, it can still help.
>
> **[3:13](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=193)** You might be able to take some of those libraries your application is relying on that are located somewhere else globally and install them with Composer or maybe even take a leap of faith and create some new packages for older things.
>
> **[3:25](https://www.linkedin.com/learning/php-testing-legacy-applications/poor-package-management-practices?u=76281980&t=205)** The main thing I want you to take away here is use Composer, and stop relying on globally installed packages that you may or may not have the ability to update.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (9), [[PHP]] (7), [[Package Management]] (2), open-source (1), [[Linux]] (1)
> **CLI Commands:** composer (14), php (7), find (2), make (2)
> **Env Vars:** php (7), pear (1), zip (1), ftp (1)
> **Prerequisites:** install (2)
> **Cross-References:** previous video (1)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 3. Laying the Foundation

[↑ Back to Table of Contents](#table-of-contents)

#### Just how many tests do we need?
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=0)** - [Instructor] I worked for a company that insisted that everyone needed to stick around whenever a deployment happened, just in case something went wrong.
>
> **[0:07](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=7)** It was terrible for morale, and did nothing to actually solve the problem of an application that would break in unexpected ways.
>
> **[0:13](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=13)** As you can guess, we had no tests in place.
>
> **[0:15](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=15)** So after a lot of lobbying, I got buy-in on test becoming mandatory.
>
> **[0:19](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=19)** But the first question I got was, well, how many tests do we need?
>
> **[0:22](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=22)** If we look at the situation I mentioned, how many tests would we need to make people less worried about a deployment?
>
> **[0:28](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=28)** I think you would want tests for any code that got changed, as proof that it all works as expected.
>
> **[0:33](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=33)** That way you are building confidence that releasing that code for everyone else to see won't be a disaster.
>
> **[0:39](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=39)** Also it made total sense that the whole team needed to be around in case something broke.
>
> **[0:43](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=43)** This was in 2003, before the tools and concepts I talk about were being widely promoted in the PHP world.
>
> **[0:49](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=49)** We literally weren't aware there was a better way.
>
> **[0:53](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=53)** It still was wrong to make us all stay instead of identifying who had code that was going up in the latest release.
>
> **[0:57](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=57)** We did have version control back in those dark days, so it would have been easy to figure out, but nobody cared.
>
> **[1:03](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=63)** Still, this doesn't provide some kind of metric to aim for.
>
> **[1:05](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=65)** We need this many tests by Friday.
>
> **[1:07](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=67)** I understand, some folks need a target, or else they can't focus on the task at hand.
>
> **[1:12](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=72)** So let's look at another scenario.
>
> **[1:13](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=73)** You have a very low number of tests in place, and you're trying to figure out, how many more tests you need.
>
> **[1:19](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=79)** I feel like this is really more of a programming culture issue than anything else, and let me explain why.
>
> **[1:24](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=84)** One of the side effects of committing to using tools to create automated test is that you are going to have to change the way you are writing code.
>
> **[1:30](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=90)** This change often leads to developers feeling uncomfortable, especially if they feel like they are being personally targeted by these changes.
>
> **[1:37](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=97)** This is even harder if you are used to being able to do things your own way with very little pushback.
>
> **[1:42](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=102)** I empathize with these people.
>
> **[1:44](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=104)** I argued a lot with them in the mid till late 2000s, while I tried to get better testing practices implemented at places where I worked.
>
> **[1:51](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=111)** My position, which remains pretty much the same today, as it was back then, was if you care about the outcome being an application with the fewest bugs possible, these are the things you are going to need to start doing.
>
> **[2:03](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=123)** For those resentful of being forced to change, the answer to how many tests do we need?
>
> **[2:08](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=128)** Is the fewest I can write without getting in trouble.
>
> **[2:10](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=130)** I cannot stress enough that this is toxic behavior in a team-centric environment.
>
> **[2:15](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=135)** It is okay to have the opinion that tests do not provide value, but the facts are clear, and this topic has been researched to death.
>
> **[2:23](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=143)** Automated tests for your code results in fewer bugs making it into released software.
>
> **[2:28](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=148)** For those who are okay with change, the answer to how many tests do we need is, enough tests that I have confidence, this code works as expected.
>
> **[2:37](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=157)** Sadly this isn't a firm number or even a percentage, because it can depend on many factors outside your control.
>
> **[2:43](https://www.linkedin.com/learning/php-testing-legacy-applications/just-how-many-tests-do-we-need?u=76281980&t=163)** I think asking the question, am I testing every line of code I just wrote, will point you in the right direction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (2), [[PHP]] (1), [[Version Control]] (1), [[Programming]] (1)
> **CLI Commands:** make (2), php (1)
> **Env Vars:** php (1)
> **Speakers:** - [instructor] (1)

#### Tests as questions
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=1)** - [Instructor] When you think about the role of tests in your application from a high level, it becomes an interesting exercise.
>
> **[0:06](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=6)** I do this from time to time, because it helps me focus on what value I am supposed to be delivering when I invest a nontrivial amount of time into writing tests.
>
> **[0:14](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=14)** Tests are working examples of your code that should be answering a bunch of questions you have about how the code is supposed to be working.
>
> **[0:20](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=20)** Some of these questions might be, Is your code filtering user input and escaping the output?
>
> **[0:25](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=25)** Is your code handling things nicely when the database isn't available?
>
> **[0:28](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=28)** What happens when I pass in a string when an integer is expected?
>
> **[0:32](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=32)** Or, how do I make sure this list I pass in is properly sorted?
>
> **[0:35](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=35)** I could go on and on, but I think you should be getting the idea.
>
> **[0:39](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=39)** Next, let's think about tests as a mirror.
>
> **[0:42](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=42)** I wish I could take credit for it, but this concept was introduced to me by Gojko Adzic, who has spent a lot more time thinking about testing, specifications, and delivering high quality software than I have.
>
> **[0:52](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=52)** In a blog post, he talked about how your tests act as a mirror for your application code.
>
> **[0:57](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=57)** Many people struggle with tests, because the virtual mirror it provides shows a code base that will be very difficult to test because of the decisions you made along the way.
>
> **[1:05](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=65)** This virtual mirror is unflinching in its honesty.
>
> **[1:09](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=69)** This code has dependencies you can't set at runtime.
>
> **[1:12](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=72)** That method call has a lot of dependencies, so the arrange process will be long.
>
> **[1:16](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=76)** All of this other stuff over here is tightly coupled and will take you weeks to slowly split apart and allow it to be tested.
>
> **[1:23](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=83)** When confronted with that sort of reality, it is not surprising that so many people grind their teeth and declare that testing has no value.
>
> **[1:30](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=90)** I want to expand on this idea a little bit more.
>
> **[1:33](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=93)** I have told many, many people that test-driven development is a design tool and the tests are just part of the design.
>
> **[1:39](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=99)** But this doesn't mean that TDD automatically ensures the design of the code will be perfect.
>
> **[1:45](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=105)** Like anything else, you still need skill and experience to understand the things you actually need to do.
>
> **[1:52](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=112)** Like any other tool that we use to help us write code, it can be used poorly if we don't understand the information in front of us.
>
> **[1:59](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=119)** I do know the dread that so many experience with testing tools feels when confronted with a code base that has little to no tests or a test suite that is so out of date that it might as well be deleted.
>
> **[2:09](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=129)** Test-driven development will not be your silver bullet.
>
> **[2:11](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=131)** It will just be another technique you can use to solve the problem facing you.
>
> **[2:15](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=135)** How to write tests for a code base so that you can move forward making changes with confidence.
>
> **[2:20](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=140)** When dealing with legacy code bases, we have the tools to go rather quickly from, What are we testing to how are we going to test this?
>
> **[2:27](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=147)** This is the first question you always need to ask when adding tests.
>
> **[2:31](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=151)** How am I going to test things and what might have to change in order to make it happen?
>
> **[2:35](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=155)** The checklist I use contains all sorts of questions.
>
> **[2:38](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=158)** What sorts of values will this method return?
>
> **[2:41](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=161)** What dependencies will I need for this specific test?
>
> **[2:44](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=164)** How can I set those dependencies at runtime?
>
> **[2:46](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=166)** Can I use a real dependency or will I need a double?
>
> **[2:49](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=169)** Can I reuse part of an existing test?
>
> **[2:51](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=171)** And can I use a data provider to test against multiple data sets?
>
> **[2:55](https://www.linkedin.com/learning/php-testing-legacy-applications/tests-as-questions?u=76281980&t=175)** Through a very systematic investigation of the code I am trying to test, I can use my experiences to determine the quickest path to a test that answers the question I have asked, which is, How do I prove this code is behaving as I expect it to?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (2), [[Test-Driven Development]] (2), data (2), database (1), next (1)
> **CLI Commands:** make (2)
> **Env Vars:** tdd (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### How we decide what to test?
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=1)** - [Instructor] How do we decide what to test? is by far the most common question I get from anyone staring into the abyss that is associated with a code base that has very few tests, if any at all.
>
> **[0:10](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=10)** While the plan on how to approach this is simple, it is a long process where you will feel like you are spending a lot of time doing busy work with no real payoff.
>
> **[0:18](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=18)** Just make sure your team is 100% on board with all the things I'm going to explain or else it will simply not work.
>
> **[0:25](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=25)** The first step is to take a good, honest look at the application and decide what has to work 100% correctly every single time.
>
> **[0:33](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=33)** Back when I worked for an online dating website, this was the account sign-up process.
>
> **[0:37](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=37)** If people couldn't sign up, we couldn't take their money, and then nobody would get paid.
>
> **[0:42](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=42)** The biggest obstacle is actually the level of awareness about the application itself that is required.
>
> **[0:47](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=47)** If you are ever going to get any kind of automated test suite in place, you cannot decide that everything that is wrong is of the same importance.
>
> **[0:54](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=54)** Start by writing tests that verify that critical parts of your application work as expected.
>
> **[0:58](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=58)** These aren't unit tests or even integration tests.
>
> **[1:01](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=61)** These are functional tests and over time you'll end up with the ability to remove them and replace them at first with integration tests and finally unit tests.
>
> **[1:09](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=69)** And don't feel like these tests actually need to be automated.
>
> **[1:12](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=72)** It could be as simple as a checklist that you follow every time you do a deployment and someone manually uses the application to verify the critical things work as expected.
>
> **[1:20](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=80)** It's okay to start off with manual, but eventually we need to move everything to be automated.
>
> **[1:25](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=85)** So having started writing some tests for critical functionality, I believe the next step is to write a test for every bug that is reported and fixed.
>
> **[1:33](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=93)** Making sure all bugs don't come back is just one of the ways tests can help you.
>
> **[1:37](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=97)** So I suggest enforcing a policy where every bug fix has to be accompanied with a test that proves the bug no longer exists.
>
> **[1:45](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=105)** If you allow fixes to be applied without these tests, once again, you are setting yourself up for failure and greatly increasing the likelihood that all bugs come back.
>
> **[1:54](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=114)** So at this point, you should have a small suite of tests that are making sure critical functionality doesn't break when you push new code, and bugs are getting fixed and hopefully not coming back.
>
> **[2:04](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=124)** Next up is the hardest slog of them all, writing tests for things that are not critical or bug fixes.
>
> **[2:10](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=130)** Typically, this means that anything new that gets added needs tests to verify the new functionality is behaving as expected.
>
> **[2:17](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=137)** This will often mean you will end up having to write tests for code that you are not directly modifying.
>
> **[2:21](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=141)** That's unfortunate but necessary if the effort is going to be worth it.
>
> **[2:25](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=145)** A lot of people will use a metric known as code coverage value as a gauge for how tested a code base is.
>
> **[2:31](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=151)** In another video I'd talk more in depth about code coverage.
>
> **[2:34](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=154)** But very quickly, code coverage is usually expressed as the percentage of your code that is executed when your tests are run.
>
> **[2:40](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=160)** 100% code coverage means that every line of code was touched by your tests.
>
> **[2:44](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=164)** Now, as someone who has struggled and continues to struggle to not let high code coverage be the outcome of testing efforts, let me just say that I think when it comes to legacy code bases, you simply shouldn't worry about it.
>
> **[2:55](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=175)** The code coverage metric simply means that you wrote all the tests you could think of for all the lines of code you have.
>
> **[3:01](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=181)** It does not mean that your code is 100% bug-free.
>
> **[3:03](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=183)** That can require a combination of tests and code written in a very defensive style, not allowing anything about what you are 100% expecting to occur.
>
> **[3:12](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=192)** In other words, focus instead on having a test suite that targets the things that matter going forward to a legacy application.
>
> **[3:19](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=199)** Critical functionality works as expected.
>
> **[3:22](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=202)** Bug fixes have tests.
>
> **[3:23](https://www.linkedin.com/learning/php-testing-legacy-applications/how-we-decide-what-to-test?u=76281980&t=203)** And new features always behave as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (5), next (2), functional (1)
> **Definitions:** means that (2), is a  (1), known as (1), in other words (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Real vs. monkey patch vs. double
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=1)** - [Instructor] As I've previously shown you when we are looking at creating the dependencies we need for a test, we have to decide whether to use one of these three things, the real dependency, monkey patch the dependency because we can't override it at runtime, or use a double because we can override it at runtime.
>
> **[0:16](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=16)** Now despite my love for using doubles to create quick running test suites, I do prefer to use the real thing but apply a few rules to it while deciding all within the context of the code I'm trying to test.
>
> **[0:27](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=27)** The key point to take away from all of this is that you must really consider the context of your test.
>
> **[0:32](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=32)** It could be perfectly logical to use a real dependency for one test and a double for the other.
>
> **[0:37](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=37)** So what do I look for when deciding what version, for lack of a better word of a dependency to use?
>
> **[0:41](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=41)** Does it write data to a data store of some sort?
>
> **[0:45](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=45)** Does it make HTTP calls to services I don't explicitly control?
>
> **[0:49](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=49)** Does it force me to maintain other tools to support it?
>
> **[0:52](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=52)** Or can I put it in a specific state for the test?
>
> **[0:55](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=55)** In other videos I have talked about test doubles, but I want to introduce another concept that can be used to create dependencies in our tests.
>
> **[1:02](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=62)** Monkey patching is a dependency substitution technique that is quite common with Ruby developers, but not that common for people working with PHP code.
>
> **[1:08](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=68)** I have no idea where the name came from, but developers like funny sounding names for things.
>
> **[1:14](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=74)** Monkey patching is the name given to a technique where you are able to modify the behavior of a dependency at runtime, much like a test double.
>
> **[1:22](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=82)** The big difference between doubles and monkey patching is that if the tool you use supports it, you can override just about anything in your code or anything the language itself is doing.
>
> **[1:33](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=93)** Need to change the output of date time call?
>
> **[1:35](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=95)** Done.
>
> **[1:36](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=96)** Need to control what value is returned by that database query without doing 100 lines of setup with doubles?
>
> **[1:42](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=102)** Easy.
>
> **[1:43](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=103)** There are some tools that allow you to monkey patch your PHP code for testing purposes.
>
> **[1:47](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=107)** But I'd personally hesitate to use them because they do not integrate nicely with PHP unit.
>
> **[1:52](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=112)** But it's clear that using monkey patching in a test suite is an alternative to consider if the pain of refactoring your code in order to make it more testable is just too much.
>
> **[2:00](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=120)** Monkey patching can still be done with the same arrange act assert pattern that I've advocated for testing.
>
> **[2:06](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=126)** For those interested in learning more about how to use monkey patching, there's a tool for PHP called Kahlan.
>
> **[2:12](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=132)** So here's an example of a test written using the framework.
>
> **[2:16](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=136)** This test assumes that we are testing a user object that uses a PDO object to get information from a database.
>
> **[2:22](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=142)** You can clearly see the arranged act assert pattern in play.
>
> **[2:25](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=145)** We tell the test framework that we want to override any calls using prepare and fetch all that are using PDO to instead return this array of results we need for our test.
>
> **[2:35](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=155)** The act and assert steps are basically the same as if we were using PHP unit.
>
> **[2:39](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=159)** The syntax is just different.
>
> **[2:41](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=161)** You will find out as you explore other testing frameworks, the concepts I am teaching you in this course are transferrable.
>
> **[2:47](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=167)** I also spent a lot of time writing tests using Python, and their testing tools have their own weird syntax.
>
> **[2:53](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=173)** But at the end of the day I am still able to use the familiar arrange act assert pattern.
>
> **[2:58](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=178)** So if you can't use the real thing because of the side effects that are caused, or you aren't going to go the monkey patching route, then you will be using test doubles to set those dependencies at runtime.
>
> **[3:08](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=188)** I go into detail in other videos on the specifics of test doubles.
>
> **[3:11](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=191)** But they are a way to definitely set your dependencies to the various states that they need to be in.
>
> **[3:16](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=196)** The downside to using them, as well as the monkey patching technique, is that as the dependencies change throughout the lifetime of the code base you will have to update the doubles or else you could end up with a test suite that passes but does not reflect how the code actually works.
>
> **[3:29](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=209)** This has happened to me numerous times and is always a source of frustration in a long, in depth debugging session that ends up with me reminding myself that the problem is almost always existing between the keyboard and the chair.
>
> **[3:42](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=222)** Luckily the current crop of test double frameworks helpfully tell you if you are trying to create doubles for functionality that does not exist on the dependency you are duplicating.
>
> **[3:51](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=231)** This will go a long way towards making sure your doubles stay in sync with your code base.
>
> **[3:56](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=236)** So when you can, use the real dependencies for your tests.
>
> **[3:58](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=238)** If you can't for the reasons outlined earlier, then you will have to resort to using test doubles to control dependencies.
>
> **[4:04](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=244)** Also consider if monkey patching is a solution if you have a code base that will require nontrivial amounts of effort to refactor it to make it friendlier to testing.
>
> **[4:13](https://www.linkedin.com/learning/php-testing-legacy-applications/real-vs-monkey-patch-vs-double?u=76281980&t=253)** Finally, if you do decide to use test doubles or monkey patching, make sure to keep them in sync with your real dependencies as your code base changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (5), data (2), database (2), [[Microsoft Word|Word]] (1), [[Fetch]] (1)
> **CLI Commands:** php (5), make (4), ruby (1), find (1), python (1)
> **Env Vars:** php (5), pdo (2), http (1)
> **Definitions:** is a  (2), is an  (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 4. Testing Legacy Code

[↑ Back to Table of Contents](#table-of-contents)

#### Why test a legacy application?
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=1)** - [Instructor] Okay, I know we've done a ton of theory and introduced a whole bunch of really high level concepts, and a few medium level concepts, I guess you can call them, about testing.
>
> **[0:10](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=10)** Now it's time to take all that theory and concepts and let's talk about actually writing some tests.
>
> **[0:15](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=15)** So we have a sample application here that is my oldest surviving page B application.
>
> **[0:20](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=20)** It's about 12 years old.
>
> **[0:21](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=21)** It is used by the simulation baseball league that I've been a member of for 21 years, which is a really long time to be doing a hobby, to maintain rosters and trade information, and anything to do with players moving around between teams.
>
> **[0:36](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=36)** So recently I was asked to modify some existing behavior of this application.
>
> **[0:41](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=41)** Now I want to emphasize we should be testing behavior not implementations of things.
>
> **[0:45](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=45)** We're trying to make sure the application behaves the way that we expected.
>
> **[0:49](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=49)** So I was recently asked to change this Git by nickname, not that that you see starting on line 24.
>
> **[0:55](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=55)** What it does as a super quick summary, you pass at the three character short name for a franchise in the league, it talks to the database a few times to get a list of players and draft picks and sorts them in a specific way where we want batters first, organized by a major league baseball team, then pitchers organized by major league baseball team and then finally, draft picks organized by a custom sort that consists of what you would call natural sorting of numbers where, normally when you do comparisons of strings one and 10, sometimes end up coming before two.
>
> **[1:29](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=89)** So you would have one, 10 and two.
>
> **[1:30](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=90)** I used to do that.
>
> **[1:31](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=91)** I didn't care.
>
> **[1:32](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=92)** But the boss of this league said you need to change it.
>
> **[1:35](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=95)** So we're changing the behavior.
>
> **[1:36](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=96)** We're sorting things in a different way.
>
> **[1:38](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=98)** So why do I want to go back and write a test for something that is working?
>
> **[1:41](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=101)** Well this is about confidence level in the application.
>
> **[1:44](https://www.linkedin.com/learning/php-testing-legacy-applications/why-test-a-legacy-application?u=76281980&t=104)** We're anticipating making a bunch of more changes to the registrar application, updating some user interfaces, adding some new functionality, so I want to make sure that now, when I change things, things aren't going to break.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (6), [[Simulation]] (1), teams (1), [[Git]] (1), database (1)
> **CLI Commands:** make (2), git (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Identifying dependencies
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=1)** - [Instructor] Okay, so now that we've identified why I'm going back and writing tests for some super old crafty code, it's time to do the first step of figuring out what to test is identifying dependencies.
>
> **[0:11](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=11)** So now we have two dependencies that are very clear and three dependencies that aren't so clear.
>
> **[0:16](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=16)** So I'm going to explain the clear ones first.
>
> **[0:18](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=18)** The first one is if we look at the code in question on line 12 we have the constructor for our roster model object.
>
> **[0:26](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=26)** So the first thing we're doing is we're passing in from outside, so passing it in at runtime, a query factory object that the rest of the code needs.
>
> **[0:34](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=34)** And that's stored in a property of the class called _db and then we're also using PHP's PDO library to create another database connection.
>
> **[0:42](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=42)** Obviously over time this code changes and we just add layer upon layer and sometimes I was in a hurry and just added code in without really going and refactoring.
>
> **[0:50](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=50)** So we have two database things sitting side by side.
>
> **[0:53](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=53)** So clearly at some point I will go back and get rid of this duplication.
>
> **[0:57](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=57)** As you can see, we're using PDO.
>
> **[0:59](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=59)** We need Postgres.
>
> **[1:00](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=60)** So if you're going to follow along with this sample code, you need to make sure you have Postgres installed on the computer where you're doing the work.
>
> **[1:06](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=66)** Go read up on the Postgres website.
>
> **[1:07](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=67)** There's almost as many different ways to install this package as there are operating systems out there.
>
> **[1:13](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=73)** So whatever one you use, don't worry, there will be a way to install Postgres and get it set up.
>
> **[1:17](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=77)** So I will need the database and the PDO connection.
>
> **[1:20](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=80)** Now those are the obvious dependencies that I'll need.
>
> **[1:23](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=83)** But there is kind of a hidden dependency.
>
> **[1:26](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=86)** I mentioned before that tests are questions.
>
> **[1:29](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=89)** And PHPUnit is an assertion based framework where our tests always end with us making an assertion that does this code behave the way that I expect.
>
> **[1:39](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=99)** So in this case I need to have some way to compare the output of the method to the expected result.
>
> **[1:45](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=105)** So because we're dealing with a database, what I decided to do was add a few lines of code as I started playing around experimenting with the test, that I added a line here, as you can see on line 42, where I'm taking the results of this database query and just dumping the raw results onto disk to use as a fixture.
>
> **[2:04](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=124)** And in this case as I scroll over to the right, you can see that I'm using PHP serialized method, which will turn an array into just a string that can be stored.
>
> **[2:14](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=134)** And then later on in the test, I'm going to read that data back, unserialize it, and then I will have some raw data.
>
> **[2:20](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=140)** Because at some point, I'm going to create a double for this database connection and I will need to say- hey when I do this database call, here's what the data looks like that I'm supposed to be getting back.
>
> **[2:29](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=149)** So I do that on line 42 to get the raw results for the players.
>
> **[2:34](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=154)** Then I do the same thing on line 58, this time where I take the result of the query that grabs our draft picks, I write those to file so I can read them later as part of a test, and then finally, down at the bottom of the method at line 89, I take the overall roster when it has been sorted the way that we expect, write that to disk so I can unserialize it later for testing purposes.
>
> **[2:56](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=176)** As you can see, two hard dependencies and three kind of soft dependencies that you wouldn't think about unless you actually read what the code is doing.
>
> **[3:04](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=184)** I have to emphasize that whenever you go to test something, you should always be reading the code to understand how the code is working because that will identify what I like to call hidden dependencies.
>
> **[3:13](https://www.linkedin.com/learning/php-testing-legacy-applications/identifying-dependencies?u=76281980&t=193)** So our next step will be to actually write a test as if everything is working without any doubles.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (7), [[PostgreSQL|Postgres]] (4), data (3), [[PHP]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** pdo (3), php (2)
> **Prerequisites:** install (2), make sure you have (1), set up (1)
> **CLI Commands:** php (2), make (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is an  (1)
> **Best Practices:** you should always (1)

#### Planning a scenario
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=1)** - [Instructor] Okay, so having identified all the dependencies that we need in order to test our method, both the visible ones and the kind of hidden dependencies, I want to show you how I go about planning my scenario by using pseudo code.
>
> **[0:14](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=14)** So, of course, we're using PHPUnit.
>
> **[0:16](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=16)** If you're not familiar with PHPUnit, it's a stand alone testing framework that we've installed with this application using Composer.
>
> **[0:23](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=23)** Don't worry.
>
> **[0:24](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=24)** There will be a documentation included with this course that shows you how to install all this stuff.
>
> **[0:28](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=28)** You want to follow along with me instead of just looking at the results.
>
> **[0:31](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=31)** So whenever I'm doing a test, I always start off with a failing test.
>
> **[0:37](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=37)** So we create a test.
>
> **[0:38](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=38)** We give it a name that makes sense to us.
>
> **[0:40](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=40)** Try to group things according to the behavior we're trying to test.
>
> **[0:44](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=44)** So in this case we're trying to test behavior of our roster model.
>
> **[0:47](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=47)** So this file's called RosterModelTest.
>
> **[0:49](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=49)** And then, of course, we give the class the name that matches it, RosterModelTest.
>
> **[0:53](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=53)** We extend off of PHPUnit's own test case, which gives us a whole bunch of helper functions that we don't have to write ourselves mainly surrounding doing the various type of assertions that we need to do.
>
> **[1:06](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=66)** So I'm going to start of by doing a test that fails.
>
> **[1:09](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=69)** So a quick little aside here.
>
> **[1:11](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=71)** There's a couple of naming conventions we can use for our test.
>
> **[1:14](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=74)** If we call every single test, if we pre-pen the name of the test method with test, PHPUnit will automatically figure out this is a test and run it.
>
> **[1:23](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=83)** If we want to go with test method names that are a little bit verbose, we put an annotation in front of the test itself to let PHPUnit know that this is a test and not just some other functional that it should ignore.
>
> **[1:38](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=98)** That it's not actually a test.
>
> **[1:39](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=99)** I always use the annotations, so I want to get that practice ingrained in you.
>
> **[1:44](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=104)** So we create our little docblock and we add our annotation for test.
>
> **[1:49](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=109)** And then I'm going to go ahead and then create our first test.
>
> **[1:51](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=111)** These are all visibility of public.
>
> **[1:53](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=113)** So a public function.
>
> **[1:55](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=115)** And we're testing behavior, so the behavior we're trying to test is sortOrderWorksAsExpected.
>
> **[2:05](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=125)** And now we use a built-in helper method called assertTrue.
>
> **[2:09](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=129)** And we're going to assert that true is false, which, of course, will fail.
>
> **[2:12](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=132)** So let's save this, and then I'm going to switch back to the terminal and run the test and make sure that the test fails.
>
> **[2:21](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=141)** Okay, so we're in the terminal and this is how we will be running PHPUnit throughout all these examples.
>
> **[2:27](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=147)** Composer installs everything inside a vendor directory inside our application.
>
> **[2:32](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=152)** And PHPUnit is a command line binary that we run.
>
> **[2:35](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=155)** So I'm just going to tell it to run, PHPUnit against the test directory.
>
> **[2:40](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=160)** So we get a bunch of information from PHPUnit.
>
> **[2:43](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=163)** We'll see the version of PHPUnit that we're using, which in this case is 6.5.6.
>
> **[2:49](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=169)** We're running PHP 7.1.
>
> **[2:51](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=171)** I highly recommend people always use the latest stable version that's available for your operating system.
>
> **[2:56](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=176)** So in this case PHP 7.1 is what we went with.
>
> **[2:59](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=179)** So where I have my cursor right now, is where we will see the results of any test runs.
>
> **[3:04](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=184)** We will see a dot for any test that passes, and we'll see an F for any test that fails.
>
> **[3:10](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=190)** So in this case we have a failing test.
>
> **[3:12](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=192)** All the way over here we can see that we have one out of one test that ran.
>
> **[3:16](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=196)** 100% of our tests we ran.
>
> **[3:19](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=199)** It will give us some other debugging information.
>
> **[3:20](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=200)** How long in milliseconds it took for the test to run.
>
> **[3:23](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=203)** How much memory the test consumed.
>
> **[3:25](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=205)** And then we get to what PHPUnit really needs to tell us.
>
> **[3:28](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=208)** That there was a failure.
>
> **[3:29](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=209)** It tells us that the sort order works as expected.
>
> **[3:32](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=212)** Test that is inside RosterModelTest failed asserting that false is true, which, of course, makes sense.
>
> **[3:39](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=219)** Because we deliberately create a failing test.
>
> **[3:41](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=221)** So now that we have our failing test, let's go back to the editor.
>
> **[3:45](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=225)** Now I'm going to show you how I write out the steps that I want to do for the test as pseudo code.
>
> **[3:51](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=231)** Okay, we're back inside the editor.
>
> **[3:53](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=233)** So if you remember we identified all those dependencies.
>
> **[3:55](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=235)** So pretend I'm sitting next to you as you're going to write this test.
>
> **[4:00](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=240)** We're doing pair programming.
>
> **[4:01](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=241)** This is the first time you've ever written a test.
>
> **[4:03](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=243)** I will explain to you in English what it is we're trying to do.
>
> **[4:06](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=246)** And then in later videos we're going to turn the English into actual code.
>
> **[4:10](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=250)** So I use a docblock just like I did for the annotation, and I write out everything that I think I'm going to need.
>
> **[4:17](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=257)** So we're going to need to create a QueryFactory object, because that is a dependency.
>
> **[4:24](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=264)** We need to make sure we have a Postgres database running.
>
> **[4:33](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=273)** Remember in the video where we were identifying dependencies, I showed how I added some lines into the code that I am testing that are now commented out.
>
> **[4:41](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=281)** That write the results of database queries to disk so we can read them later.
>
> **[4:45](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=285)** I need to make a note that I need to read those in.
>
> **[4:47](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=287)** Read in our data fixtures.
>
> **[4:51](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=291)** Then we will create a new RosterModel object.
>
> **[4:57](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=297)** We will then execute the getByNickname method.
>
> **[5:05](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=305)** Then we will assert that our expected roster matches what is returned.
>
> **[5:15](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=315)** So that's it.
>
> **[5:16](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=316)** These are the one, two, three, four, five, six steps for our test that we will need to have in order to have a test that verifies that the sort order works as expected.
>
> **[5:28](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-a-scenario?u=76281980&t=328)** So in the next video I'm going to show you how we actually turn that into code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (2), [[PHP]] (2), next (2), database (2), functional (1)
> **CLI Commands:** make (3), composer (2), php (2)
> **Definitions:** is a  (4)
> **Code Identifiers:** sortorderworksasexpected (1), asserttrue (1), getbynickname (1)
> **Versions:** php 7 (2), 6.5.6 (1)
> **Tools:** terminal (2), command line (1)
> **Env Vars:** php (2)
> **Cross-References:** go back to (1), in the next (1)

#### Building a scenario
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=1)** - [Instructor] Alright, in a previous video, I showed you how I go and create my testing scenario by using pseudo code, in other words, plain English, so I can understand all the steps that I need in order to write a test.
>
> **[0:11](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=11)** So now I'm going to show you how I go and change all the pseudo code into actual working code, and then we will have a working test by the end of this video that uses the real dependencies, 'cause in the future we're not going to explain how we turn these into doubles.
>
> **[0:25](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=25)** So, what I usually do is, I literally go line-by-line and duplicate what I need.
>
> **[0:31](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=31)** So, my first step I have here in my test is I need to create a Query Factory object.
>
> **[0:36](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=36)** So I need to create a Query Factory object.
>
> **[0:38](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=38)** I have a file called db_config that takes care of creating that for me, So I'm going to go into that file, copy the code, it's line six to 11, I'm going to paste that into my test.
>
> **[0:49](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=49)** And as always, with every single time we change something in the test, we need to go back and run the test and make sure anything we've added in hasn't broken things.
>
> **[0:59](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=59)** So I'm going to switch over to the terminal.
>
> **[1:01](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=61)** Okay, so we're back in the terminal, now I'm just going to go and run that test that we wrote before.
>
> **[1:07](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=67)** It should still fail, but we shouldn't see any other unexpected error messages.
>
> **[1:15](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=75)** So as we can see the test failed because it can't find the Query Factory.
>
> **[1:19](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=79)** Now that makes sense because, in our test, we didn't tell the test where to go and find this Query Factory object.
>
> **[1:23](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=83)** So let's go back to the test, add the line of code that we need in order to load the Query Factory, and then we'll switch back to the terminal and rerun the test.
>
> **[1:32](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=92)** Now how do I include that for use in this test?
>
> **[1:35](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=95)** In the db_config file we have a use line here that tells PHP, I want to use this particular object.
>
> **[1:43](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=103)** So I go back to my test, add the Query Factory into it, save it, and let's go back to the terminal.
>
> **[1:52](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=112)** And now we can rerun our test and make sure that worked.
>
> **[1:56](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=116)** So there we have it, we can see the test is still failing, but we no longer have the error message that it can't find the Query Factory.
>
> **[2:04](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=124)** Alright, let's go back to the next step in the pseudo code.
>
> **[2:07](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=127)** Okay so, now we're onto the next step, which is read in our data fixtures.
>
> **[2:11](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=131)** If you remember from the previous video, I showed you how I wrote data to disks so I could read it back in later.
>
> **[2:17](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=137)** Inside the directory where this test is, there is a fixtures directory and it's a very standard convention, to have a fixtures directory associated with your test, so inside here, I can see that I have a overall representation of the roster for my team, I have the raw information for picks, and I have raw information for players.
>
> **[2:36](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=156)** Since we're not worried about a double at this point, I just need to retrieve the roster for a team that I know.
>
> **[2:41](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=161)** So I'm going to add that here, where I'm going to call it $expectedRoster =, we're going to use file_get_contents to read in the file, I know the location on the file system will be here, you have to back up and go from here into the fixtures directory, and then we just load mad_roster.txt.
>
> **[3:07](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=187)** And then I also know that we need to unserialize the data 'cause we serialized it when it was written to the file system so I use the unserialize command, and go over to the end of the line here, add the missing bracket or semicolon, sorry.
>
> **[3:25](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=205)** I know what I did wrong, I need to add back in this file_get_contents.
>
> **[3:33](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=213)** And the editor, very helpfully, tells me if I didn't know how to use this particular method, what all the arguments are.
>
> **[3:39](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=219)** So it looks good, there are no syntax errors being reported by the editor, let's save this.
>
> **[3:45](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=225)** Go back to the terminal, rerun our test, and again so far, as expected, no new errors, test is still failing.
>
> **[3:56](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=236)** Now, let's go back to the editor and do the next step of turning the pseudo code into a test.
>
> **[4:01](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=241)** So, now that we have our data fixtures, now we need to create a new roster model object.
>
> **[4:06](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=246)** So we can do that on the line below, we can go, $rosterModel = new Roster, and we pass in this db object that we created, save, go back to the terminal, now we rerun the test.
>
> **[4:26](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=266)** Same thing, it's failing but no new errors.
>
> **[4:29](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=269)** Notice how this is very methodical, very systematic.
>
> **[4:31](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=271)** We make one change, we save, we go run the test and verify that nothing else has broken, we know the test is supposed to be failing.
>
> **[4:39](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=279)** Let's go back into the editor.
>
> **[4:41](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=281)** Now our next step is to execute the get by nickname method on the roster object so we can go, $roster =, $rosterModel, getByNickname, and I know that when I created the data fixtures, I used a known value for the team, which is my team and the league.
>
> **[5:04](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=304)** So now we should have results inside that roster variable.
>
> **[5:07](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=307)** Again same thing, let's save, go back to the terminal, rerun the test.
>
> **[5:14](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=314)** No new errors popping up, still the failure asserting that false is true.
>
> **[5:20](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=320)** Now we're onto the last step, where we're going to do the assertion.
>
> **[5:22](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=322)** Let's go back to the editor.
>
> **[5:24](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=324)** And now we can add the last line, where we delete our existing assertion.
>
> **[5:31](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=331)** And then we go, $this, assertEquals, and we're always going to assert that the thing we expect to happen as compared to what actually happened.
>
> **[5:47](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=347)** So, we save that, let's go back to the terminal.
>
> **[5:51](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=351)** Let's run our test, and if we've done everything correctly, this should pass.
>
> **[5:56](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=356)** And look at that, we have a passing test.
>
> **[5:58](https://www.linkedin.com/learning/php-testing-legacy-applications/building-a-scenario?u=76281980&t=358)** So there you saw how I go and take the pseudo code that I had generated, and turned it into real code so that we have a test that passes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), next (4), [[PHP]] (1)
> **Cross-References:** go back to (10), previous video (2)
> **Code Identifiers:** db_config (2), file_get_contents (2), rostermodel (2), expectedroster (1), mad_roster (1)
> **CLI Commands:** make (3), find (3), php (1), go run (1)
> **Tools:** terminal (8)
> **Definitions:** in other words (1), is a  (1)
> **File Paths:** mad_roster.txt (1)
> **Env Vars:** php (1)

#### Planning real to doubles
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=1)** - [Instructor] Okay, so you've seen how I turn my pseudocode into this working test that you have in front of you.
>
> **[0:07](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=7)** Now the next step is, I'm going to create a test that uses test doubles so that we no longer need to talk directly to the database.
>
> **[0:14](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=14)** So the first step is we're going to create an empty test, and then I'm going to write the pseudocode that I'm going to later turn into code.
>
> **[0:23](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=23)** So we can do the same thing with the annotation, and then we will call this test function sortOrderWorksAsExpectedWithDoubles.
>
> **[0:41](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=41)** We have the assertion in here, but we're not going to run it just yet, because first, I want to go over the pseudocode.
>
> **[0:46](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=46)** You'll see how it changes, how we now go from one to use real things to using doubles, so what I say in this pseudocode, plan changes.
>
> **[0:55](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=55)** So if we go over what we have here already on lines 14 through 19, where I'm describing the test, I'm going to now describe as if we're using doubles, so as before, we had a QueryFactory object, I'm going to need to create a QueryFactory double.
>
> **[1:14](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=74)** The next step was make sure we have a Postgres database running.
>
> **[1:17](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=77)** Well, we're not going to be using the database in this test at all, so now we have to think about how the dependencies change, so for that, we need to go back into our code and take a quick look at what we can do here.
>
> **[1:31](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=91)** So if you notice, on line 15, we're assigning this database connection to a PDO variable.
>
> **[1:39](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=99)** It's a property of this class.
>
> **[1:41](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=101)** Now I need to be able to override this at runtime, meaning after we've created the object, I need to override the value, so what we could do, if the visibility, if this is a public attribute, I should be able to set it afterwards, so let me scroll up to the definitions here and make sure.
>
> **[1:59](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=119)** Yep, as you can see on line five, PDO is declared as public, so that's great.
>
> **[2:03](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=123)** That means we can override this at runtime, so let's go back to the test and make a note.
>
> **[2:09](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=129)** So we're going to need to create a PDO double.
>
> **[2:15](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=135)** Override PDO with our double, so that's great.
>
> **[2:21](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=141)** That's the first thing we have to do.
>
> **[2:22](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=142)** Now, and this is where it starts to differ quite a bit from our existing test that uses real things.
>
> **[2:29](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=149)** Now we know that we're going to be creating a double of our database connection, so we need to look at our code and figure out what things do we need to override that the database code is doing.
>
> **[2:40](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=160)** So if you scroll down, we can see that we have to do, we have to do one query here, where we're going to be returning a bunch of information from the database, so we're going to have to pretend to do that, so that's one query we need to worry about, so let's go back and make a note.
>
> **[2:57](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=177)** Create fake results from player and pitcher query, 'cause that's what we're grabbing.
>
> **[3:03](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=183)** Let's go back into the model and look at the next query.
>
> **[3:08](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=188)** You see here on lines 50 through 57, we're creating the database to get information about our draft picks, so we need to create fake draft pick data, so let's go back into our test and make a note that we need to do that as well.
>
> **[3:20](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=200)** Create fake results for draft picks.
>
> **[3:25](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=205)** So what's left, if I go scroll back up to our first test, what are we missing now?
>
> **[3:31](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=211)** Reading our data fixtures, so we still need to do that.
>
> **[3:35](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=215)** Read in our data fixtures, 'cause these will be used by the fake PDO object that we create.
>
> **[3:43](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=223)** Scroll back up again, and see what else is left.
>
> **[3:47](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=227)** We just need to create our new RosterModel object, execute the getByNickname method, and assert that our expected roster matches what is returned, so let me just copy those three lines, scroll back down, paste them in here, and remove this extraneous asterisks.
>
> **[4:07](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=247)** All right, so there we have it.
>
> **[4:08](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=248)** That is the pseudocode for a test that's going to use doubles.
>
> **[4:13](https://www.linkedin.com/learning/php-testing-legacy-applications/planning-real-to-doubles?u=76281980&t=253)** Next, I'm going to show you how we turn all these requirements into doubles.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (8), next (4), data (3), [[PostgreSQL|Postgres]] (1)
> **CLI Commands:** make (5)
> **Env Vars:** pdo (5)
> **Code Identifiers:** sortorderworksasexpectedwithdoubles (1), getbynickname (1)
> **UI Navigation:** scroll up (1), scroll down (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)

#### Building real to doubles
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=0)** - [Narrator] Okay I showed you an example of how I would write all the pseudo-code that we would need to turn this test that used real dependencies into one that uses doubles.
>
> **[0:09](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=9)** Now, rather than make you sit around and watch me for 45 minutes make syntax errors and mumble to myself and go read up on how different parts of the application work, I went and implemented the entire test.
>
> **[0:20](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=20)** So this test actually does pass.
>
> **[0:22](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=22)** Now I want to go over every little section of this test to explain what's going on, because I'm sure for many of you a lot of what's going on here is not obvious, and I want it to be obvious for you.
>
> **[0:33](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=33)** Okay, so now we're ready to go from the pseudo-code where we've outlined all the doubles that we need to create to actually creating the doubles.
>
> **[0:40](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=40)** Now the tool that I'm using is Mockery.
>
> **[0:43](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=43)** I've mentioned it before, Mockery is a stand alone framework for creating test doubles.
>
> **[0:47](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=47)** It's a little bit different from the built in one that comes with PHPUnit, and again that's a little bit different from Prophecy, which is automatically included when you install PHPUnit.
>
> **[0:56](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=56)** You can install Mockery the same way that you install PHPUnit using Composer.
>
> **[1:01](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=61)** So in order for us to use Mockery we have to add a few things to our test.
>
> **[1:06](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=66)** The first thing I need to do is I need to tell the test class that I want you to use Mockery.
>
> **[1:11](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=71)** And I like to alias Mockery, because as an older programmer, I'm well aware that I only have a limited number of keystrokes left in my fingers, so I want to save myself from carpal tunnel syndrome.
>
> **[1:19](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=79)** So I'm going to alias Mockery to just the letter M.
>
> **[1:24](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=84)** Then the next step is, for every test case that you create using PHPUnit, there is a teardown statement that can get executed.
>
> **[1:33](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=93)** The authors of Mockery recommend that you add some code to the teardown statement for your test case that clears out any memory associated with creating our test doubles so that our tests don't run out of memory.
>
> **[1:45](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=105)** PHP can be limited in how much memory you use at once so it's better to release these things so future tests that aren't relying on doubles are okay and won't cause the interpreter to crash.
>
> **[1:56](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=116)** So in order to release the memory that Mockery uses we need to add a teardown statement to our test case here.
>
> **[2:03](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=123)** So we add it in this way, we go "public function teardown" and you can see my editor, very helpfully, does the skeleton for it.
>
> **[2:14](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=134)** So what I need to do is delete this comment saying "TODO: Change the autogenerated stub" as a little reminder, and then I add a line that says "m" because I'm making a static call with two colons, "close" and that's all we need to release that memory and now we're ready to actually start creating some doubles with Mockery.
>
> **[2:35](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=155)** In this first section, I need to create doubles of the select object that we're using that's part of Aura.
>
> **[2:41](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=161)** If you see on lines 48 and 50 we have two different calls that we're expecting to happen, and they are long chain calls using a fluent interface.
>
> **[2:50](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=170)** Mockery has a bit of a weird syntax that it uses for telling it that I'm expecting a long series of fluent chain calls.
>
> **[2:59](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=179)** So on line 48 I'm setting up the first fluent call and I'm telling it on line 49, I'm only expecting it to be called once.
>
> **[3:06](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=186)** And then I do the same thing on line 50 with a slightly different call, and again tell it I only need it to be executed once.
>
> **[3:12](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=192)** And I tell I'm expecting a get statement method to be called, don't care what the return value is for the purpose of this test.
>
> **[3:19](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=199)** Then there is a get bind values call that's being made, again, doesn't matter what's being called.
>
> **[3:25](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=205)** Next, I need to create a double of the query factory class that our roster mall expects.
>
> **[3:30](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=210)** This is a really short one, we only need to tell it we're making one call to new select, but it's being called twice, and we then can return these same new select object I created on lines 47 through 53.
>
> **[3:43](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=223)** Next I need to get the data that I wrote previously, that's supposed to be returned from the database column, unserialize it and put it into variables that we can then use later.
>
> **[3:53](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=233)** On line 62 through 64, and 67 through 69 I'm creating PDO statements, where I'm telling it I'm expecting to see an execute method called, I'm expecting to see one fetch all call, and then I want to return the raw roster information, then I'm expecting to see another fetch all call that's going to be called once that will return the raw picks.
>
> **[4:17](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=257)** Then I need to create a double of the PDO object the code is using that will return the PDO statement that I created on the lines above it.
>
> **[4:25](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=265)** Again, quite simple compared to some of the other constructs I had to do, I'm telling you, you should receive a prepare call and just return this statement that I created.
>
> **[4:33](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=273)** Then in line 74 through 77, I have the act part of the test where I'm creating a new instance of the roster model on the constructor, I'm passing in the double I created for my query factory, then on line 76 I'm overriding the PDO attribute that was created when the roster model object was initially created, and then finally I'm saying, return this roster information by making a call to my get by nickname method, passing in the little three character nickname.
>
> **[5:02](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=302)** And then finally, on the last lines from 79 through 81, I'm loading the expected roster in terms of being an array where everything is sorted the way that I'm expecting it to be, load that information off of the file system, unserialize it and then I do my final assertion that says "does the expected roster match the existing roster?"
>
> **[5:22](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=322)** Just to prove that the test passes, I'm going to go back over into the terminal and run the test for you.
>
> **[5:28](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=328)** Okay I'm back in the terminal, and now the moment of truth.
>
> **[5:32](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=332)** Now you can see that we had two tests that passed.
>
> **[5:34](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=334)** Where my cursor is you can see we have two dots to indicate we had two tests and they passed, over on the far right it said two of two tests passed.
>
> **[5:43](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=343)** So we have our time, we have our memory, and it says "OK, 2 tests, 2 assertions."
>
> **[5:48](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=348)** Now, I want to go back to the editor just to explain one more concept to you very quickly.
>
> **[5:55](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=355)** Now I'm sure, looking here at the editor, you realize, "Look how much work I had to do, in the arraying step as for the test that uses doubles as opposed to the work that I did when I was using the real resources."
>
> **[6:09](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=369)** This is the most common argument used for why you should really reduce the use of test doubles in your test.
>
> **[6:16](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=376)** We go from needing one line of the arraying step really, but we're saying "please create this query factory for me" to, if we start, what are we looking at from line 47 all the way down to 72, so almost 30 lines of just arranging things before we can even do any of our test.
>
> **[6:36](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=396)** If this isn't an incentive for you to go into your code and consider some ways to refactor things, so instead of me having to create, I don't know, a rough estimate, seven or eight doubles, I want to get it down where I'm maybe I'm only creating one or two.
>
> **[6:50](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=410)** That makes the arraying step a lot easier to do, and also reduces the amount of code that we need to change if we ever decide to change its functionality.
>
> **[6:58](https://www.linkedin.com/learning/php-testing-legacy-applications/building-real-to-doubles?u=76281980&t=418)** Now in the next video, I'm going to show you a little sample of how we can refactor some of this work that we're doing into a helper method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (4), [[Fetch]] (2), application (1), [[PHP]] (1), data (1)
> **Env Vars:** pdo (4), php (1), todo (1)
> **CLI Commands:** make (2), composer (1), php (1)
> **Definitions:** is a  (3)
> **Prerequisites:** install (3)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** terminal (2)
> **Speakers:** - [narrator] (1)

#### Refactor your tests
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=1)** - [Narrator] Okay, so when I was writing the previous tests that used doubles, when I was looking at the code in the roster model, I discovered I was not writing a test for a specific condition.
>
> **[0:11](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=11)** I want to show you that condition in the code.
>
> **[0:14](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=14)** As you can see in lines 30 to 40, I added a conditional statement that basically says if I get no information from the database, I want to return an empty array, and then later on in the application, I handle what happens when we get that empty array.
>
> **[0:27](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=27)** When you're writing tests, you need to look at every single conditional statement, and every loop, to make sure that you have coverage for all possible behaviors.
>
> **[0:35](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=35)** So while you were busy soaking in all the information that I taught you before, I went and wrote a test to cover this, so let's take a quick look at it.
>
> **[0:44](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=44)** So we're doing the same sort of things that we did for the previous test, where we're creating a bunch of doubles for our select object, our db object, our pdo statement, and then down below we do the usual act step.
>
> **[0:57](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=57)** As I was writing the test I noticed I was duplicating functionality that existed in the previous test, so what I want to do is look at the things that are similar, and extract those into a helper method that belongs to this class, and then rework the test to call that method instead.
>
> **[1:14](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=74)** Remember, tests are just code, so we need to refactor them the same way that we would refactor our existing code.
>
> **[1:20](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=80)** So what looks the same?
>
> **[1:22](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=82)** Now this code on lines 90 to 94 looks quite similar to some existing code that I wrote before.
>
> **[1:28](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=88)** So I'm going to take that code and extract it.
>
> **[1:31](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=91)** I'm going to create a method that will create a new select, a mock in this case, and return it.
>
> **[1:37](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=97)** And then the things that are different in the previous test, we can apply to the mock.
>
> **[1:41](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=101)** So let me quickly create that, you can watch me do it.
>
> **[1:45](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=105)** So I'm going to create a method, and I'll call it createNewSelectMock().
>
> **[1:54](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=114)** And what are we going to return, let me scroll back up.
>
> **[1:57](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=117)** I believe that this code from lines 90 to 94, is generic between the two tests.
>
> **[2:05](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=125)** So I'm going to copy that, put it into this method, and then I will simply go return newSelect.
>
> **[2:17](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=137)** Then I go back into my test, and where I have lines 90 to 94, I'm simply going to replace them with a call to this method that I just created.
>
> **[2:28](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=148)** Now, just to be safe, I'm simply going to comment out the existing code.
>
> **[2:36](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=156)** So in case I need it, you never know, I might have done something wrong, so I'm going to save this.
>
> **[2:40](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=160)** I'm going to go back into my terminal.
>
> **[2:42](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=162)** Now that I'm back in the terminal I'm going to run this test again.
>
> **[2:45](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=165)** And let's make sure that it passes.
>
> **[2:47](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=167)** So excellent, it does pass.
>
> **[2:49](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=169)** So I'm now going to go back into the editor, go to the previous test, and refactor the test to use this new method I just created.
>
> **[2:58](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=178)** Okay we're back in the editor.
>
> **[3:00](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=180)** I can safety delete this code that I had commented out.
>
> **[3:05](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=185)** And now I will go back up to the first test that we wrote, and what's different?
>
> **[3:12](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=192)** The only real difference is that we have this one extra line at line 50, where we need to create another expectation on the double.
>
> **[3:21](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=201)** So here's what I'm going to do.
>
> **[3:23](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=203)** I'm going to override the new Select that I first created with this method, createNewSelectMock(), and I'm going to delete this code on lines 48 through 50 'cause it's not needed anymore.
>
> **[3:41](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=221)** And then also delete what's on lines 50 and 51 'cause that's being handled by this method I created as well.
>
> **[3:46](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=226)** So I just need to push this one character over.
>
> **[3:50](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=230)** All right, that looks good, I'm going to save.
>
> **[3:53](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=233)** Now let's go back to the terminal and verify that the test passes.
>
> **[3:57](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=237)** All right we're back in the terminal.
>
> **[4:00](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=240)** Boom.
>
> **[4:01](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=241)** Perfect.
>
> **[4:02](https://www.linkedin.com/learning/php-testing-legacy-applications/refactor-your-tests?u=76281980&t=242)** So just so you can see whenever we do these tests now, y'know we have to look at our code, and we can easily refactor things that we find ourselves duplicating.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (1), application (1), generic (1)
> **Tools:** terminal (4)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** createnewselectmock (2), newselect (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### Add getters and setters
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=1)** - [Instructor] I know that in some other videos we've talked about how often you will need to refactor or rewrite your code in order for it to be more testable.
>
> **[0:08](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=8)** And so far we've been pretty lucky with this roster model that we haven't had to change anything.
>
> **[0:12](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=12)** But let's consider another scenario.
>
> **[0:14](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=14)** Let's say we have a coding standard in place for this application where we say that all these attributes of classes like what we see on lines four and five on the screen, they have to be private, they can't be public.
>
> **[0:26](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=26)** Meaning that you cannot modify them at runtime after we've created an instance of this class.
>
> **[0:32](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=32)** If we had to rewrite our test to comply with this coding standard, what change would we have to make?
>
> **[0:38](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=38)** Well, we would have to turn those attributes into private ones and then we would add a getter and setter combination so that we could override the PDO attribute at runtime.
>
> **[0:48](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=48)** So let me show you how I would particularly handle this.
>
> **[0:51](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=51)** So right below our constructor, I'm just going to add method called getPdo and all it's going to do is just return the internal PDO attributes.
>
> **[1:04](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=64)** If you've done any work with Java then this sort of pattern of using getters and setters will be very familiar to you.
>
> **[1:10](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=70)** And then we need to create the other complimentary function to it where we will add public function setPdo pass in a value ($value) and then we go $this->pdo = value; Let's save that.
>
> **[1:29](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=89)** Now as with all this stuff, every time we make a change to the code we're going to go back and run our test and make sure that everything is passing.
>
> **[1:36](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=96)** So let's switch back to the terminal and let's rerun our tests and make sure they still pass.
>
> **[1:40](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=100)** Great, so we didn't break anything when we added these two methods.
>
> **[1:44](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=104)** As an aside, this is actually a very effective refacting technique where you're very unlikely to break something that already works by adding your getter or setter.
>
> **[1:54](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=114)** It's usually the first step along a longer refactor where we're going to get away from using these internal attributes and instead rely on values that we pass in from outside.
>
> **[2:03](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=123)** So let's go back to the editor and take a look at our test and modify the test to use the new set PDO method.
>
> **[2:10](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=130)** Okay, so we're back in the editor.
>
> **[2:12](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=132)** Let's go look at our test.
>
> **[2:13](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=133)** And go down to the test where we are using the double.
>
> **[2:17](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=137)** We'll change this one first.
>
> **[2:18](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=138)** The sort order works as expected with doubles.
>
> **[2:21](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=141)** Scroll down to our Act section, remember always about the Arrange Act Assert pattern for our test.
>
> **[2:28](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=148)** We can see on line 72 where we're setting the PDO value or overriding it with the double.
>
> **[2:34](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=154)** Let's just change that to this command.
>
> **[2:36](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=156)** $rosterModel->setPdo And pass in the PDO value ($pdo); And just temporarily we will comment out line 73 which is what used to be there.
>
> **[2:50](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=170)** We'll save that.
>
> **[2:51](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=171)** Let's go back to our terminal and verify that the tests all still pass.
>
> **[2:55](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=175)** Okay we're back in the terminal.
>
> **[2:56](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=176)** Let's run our tests.
>
> **[2:57](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=177)** Hey, perfect it passes so let's just go back to our editor and clean up the code to remove the thing we commented out and change the follow up test that is doing the same thing Okay we're back in the editor.
>
> **[3:12](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=192)** Let's delete this line 73.
>
> **[3:14](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=194)** And we scroll down to our other test and find the same section we're overriding it.
>
> **[3:18](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=198)** Here it is on line 104.
>
> **[3:21](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=201)** Let's do the same thing we did in the other test.
>
> **[3:25](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=205)** Add the ->set Pdo($pdo); Delete what's on line 105.
>
> **[3:31](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=211)** Save, let's go back into the terminal.
>
> **[3:34](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=214)** Okay, we're back in the terminal.
>
> **[3:35](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=215)** Rerun our test.
>
> **[3:36](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=216)** And everything passes.
>
> **[3:38](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=218)** So as you can see this was a pretty easy refactor.
>
> **[3:40](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=220)** Now, you will run across a lot of other refactors that will be more difficult, but I think the overarching thing you need to remember here is that we can do little tiny incremental changes to our code in order to make things easier to test.
>
> **[3:53](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=233)** We don't have to do it all at once.
>
> **[3:54](https://www.linkedin.com/learning/php-testing-legacy-applications/add-getters-and-setters?u=76281980&t=234)** We can just do it in bits and pieces until we're comfortable with the outcome.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (1), [[Java]] (1)
> **CLI Commands:** make (5), find (1)
> **Env Vars:** pdo (5)
> **Tools:** terminal (5)
> **Code Identifiers:** setpdo (2), getpdo (1), rostermodel (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** scroll down (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/php-testing-legacy-applications/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-testing-legacy-applications/next-steps?u=76281980&t=1)** - [Chris] Hey, I know we've covered a lot of stuff in this course, and you might be feeling a little overwhelmed.
>
> **[0:06](https://www.linkedin.com/learning/php-testing-legacy-applications/next-steps?u=76281980&t=6)** Thanks for sticking through to the end, and I hope I have done a great job of explaining all the basics of testing to you.
>
> **[0:11](https://www.linkedin.com/learning/php-testing-legacy-applications/next-steps?u=76281980&t=11)** I know you might be looking at the tests I wrote and the code itself and thinking, my code doesn't look like that at all.
>
> **[0:17](https://www.linkedin.com/learning/php-testing-legacy-applications/next-steps?u=76281980&t=17)** What should I do?
>
> **[0:19](https://www.linkedin.com/learning/php-testing-legacy-applications/next-steps?u=76281980&t=19)** Don't worry.
>
> **[0:20](https://www.linkedin.com/learning/php-testing-legacy-applications/next-steps?u=76281980&t=20)** The concepts I've taught you are transferrable to your own code.
>
> **[0:23](https://www.linkedin.com/learning/php-testing-legacy-applications/next-steps?u=76281980&t=23)** Every application is different and has its own unique challenges, but I'm 100% confident that you can take what I've shown you here and get started writing tests for your own code.
>
> **[0:34](https://www.linkedin.com/learning/php-testing-legacy-applications/next-steps?u=76281980&t=34)** Testing doesn't have to be intimidating.
>
> **[0:36](https://www.linkedin.com/learning/php-testing-legacy-applications/next-steps?u=76281980&t=36)** It's a systematic process of identifying behavior that you want to test, figuring out your dependencies, and then letting the tools help you create the right test for the right scenario.
>
> **[0:46](https://www.linkedin.com/learning/php-testing-legacy-applications/next-steps?u=76281980&t=46)** If you're interested in learning more about testing or want to ask me questions about specific parts of the course, the best way to get in touch with me is via Twitter, where I do performance art as grmpyprogrammer without the U.
>
> **[0:58](https://www.linkedin.com/learning/php-testing-legacy-applications/next-steps?u=76281980&t=58)** I've written several books that can help you further along your journey to becoming a tester of code.
>
> **[1:03](https://www.linkedin.com/learning/php-testing-legacy-applications/next-steps?u=76281980&t=63)** Visit my website at [grumpy-learning.com](https://grumpy-learning.com) to see my books and sign up for a mailing list where I send you interesting testing tips and other cool things I come across every other week.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (1)
> **URLs:** [grumpy-learning.com](https://grumpy-learning.com) (1)
> **Speakers:** - [chris] (1)


## Resources

- Exercise files available

## Skills Covered

- PHP

## Path Context

### In [[Advance Your PHP Skills]]
**1 of 7** | [[Functional Programming with PHP]] →

## Appears In

- [[Advance Your PHP Skills]]

## Related Courses

_Courses sharing skills:_

- [[Essential Statamic for PHP and Laravel Developers]] — PHP
- [[Essential Jigsaw for PHP and Laravel Developers]] — PHP
- [[Advanced PHP- Debugging Techniques]] — PHP
- [[PHP Techniques- Pagination]] — PHP
- [[PHP- User Authentication]] — PHP

---

[↑ Back to top](#)