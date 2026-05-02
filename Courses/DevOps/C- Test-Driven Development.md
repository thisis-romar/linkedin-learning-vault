---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: c-sharp-test-driven-development-14275015
url: "https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015"
duration_minutes: 82
duration: 1h 22m
level: Intermediate
updated: 1/29/2024
learners: 669650
skills:
  - Test-Driven Development
  - C#
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHer6AaKu2izw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1632339054345?e=2147483647&amp;v=beta&amp;t=PAsefRZzFZKcfhCMxSynhTP9lh2Eqox3FO8f_RPaLRY"
linkedin_topic: DevOps
learning_paths:
  - '[[Elevating C- Skills- Building Robust Applications]]'
prev_courses:
  - '[[C- Interfaces and Generics]]'
next_courses:
  - '[[C- Exception and Error Handling]]'
path_nav: '[{"path":"Elevating C- Skills- Building Robust Applications","position":4,"total":8,"prev":"C- Interfaces and Generics","next":"C- Exception and Error Handling"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/mobile-development
  - topic/software-development
  - skill/test-driven-development
  - skill/c
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/C-%20Test-Driven%20Development.md)

![C# Test-Driven Development](https://media.licdn.com/dms/image/v2/C560DAQHer6AaKu2izw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1632339054345?e=2147483647&amp;v=beta&amp;t=PAsefRZzFZKcfhCMxSynhTP9lh2Eqox3FO8f_RPaLRY)

# C# Test-Driven Development

> The old carpentry adage “measure twice, cut once” may not seem applicable to programming, but when you consider all the ill effects that bad code can have down the line, doesn’t “test twice, code once” make sense? The later you test, the more effort it requires to fix any issues that may have been introduced months ago. With test-driven development, you create the test first, and then you write th

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015) | 1h 22m | Intermediate | 670K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Testing web applications and APIs](#testing-web-applications-and-apis)
  - [What you should know](#what-you-should-know)
- [**1. TDD Theory**](#1-tdd-theory) (4 videos)
  - [About testing](#about-testing)
  - [What is TDD?](#what-is-tdd)
  - [Advantages and disadvantages of TDD](#advantages-and-disadvantages-of-tdd)
  - [Software and tooling](#software-and-tooling)
- [**2. Getting Started with TDD**](#2-getting-started-with-tdd) (7 videos)
  - [Demo project introduction](#demo-project-introduction)
  - [Creating a test](#creating-a-test)
  - [Fixing the code](#fixing-the-code)
  - [Adding another test](#adding-another-test)
  - [Satisfying the next test](#satisfying-the-next-test)
  - [Challenge: Making the test pass](#challenge-making-the-test-pass)
  - [Solution: Making the test pass](#solution-making-the-test-pass)
- [**3. Advanced TDD Techniques**](#3-advanced-tdd-techniques) (9 videos)
  - [Introduction to mocking](#introduction-to-mocking)
  - [Adding an interface](#adding-an-interface)
  - [Using a test with a mock](#using-a-test-with-a-mock)
  - [Testing without a database: Preparations](#testing-without-a-database-preparations)
  - [Demo: Testing without a database](#demo-testing-without-a-database)
  - [Testing ASP.NET Core applications: Preparations](#testing-aspnet-core-applications-preparations)
  - [Demo: Testing ASP.NET Core applications](#demo-testing-aspnet-core-applications)
  - [Challenge: Testing an API](#challenge-testing-an-api)
  - [Solution: Testing an API](#solution-testing-an-api)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps with C#](#next-steps-with-c)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Testing web applications and APIs
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-web-applications-and-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-web-applications-and-apis?u=76281980&t=0)** - [Instructor] High quality software is one key factor to success.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-web-applications-and-apis?u=76281980&t=5)** A common approach to achieve this is to use testing, but the later you test, the more effort it requires to fix any issues that might have been introduced months ago.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-web-applications-and-apis?u=76281980&t=17)** Test run development or TDD uses a different process.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-web-applications-and-apis?u=76281980&t=21)** First, you create the test, and then you write the code.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-web-applications-and-apis?u=76281980&t=25)** In my LinkedIn Learning course, I will show you how to use TDD with .NET and C#.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-web-applications-and-apis?u=76281980&t=32)** After taking a close look at the TDD process, we will use Visual Studio to create, and run tests using NUnit as our testing framework of choice.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-web-applications-and-apis?u=76281980&t=43)** We will also look at more complex scenarios, such as testing web applications and APIs, and replacing database objects during a test.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-web-applications-and-apis?u=76281980&t=53)** Don't worry.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-web-applications-and-apis?u=76281980&t=54)** For each step on the way, I'll show you exactly what needs to be done.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-web-applications-and-apis?u=76281980&t=59)** You will see how TDD works, and how you can use it for your .NET applications.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-web-applications-and-apis?u=76281980&t=65)** My name is Christian Wenz.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-web-applications-and-apis?u=76281980&t=67)** I started with .NET in 2000 when it was still in Beader, and never looked back.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-web-applications-and-apis?u=76281980&t=72)** Join me in Test Driven Development with C#.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-web-applications-and-apis?u=76281980&t=77)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), web (1), database (1)
> **Env Vars:** tdd (4), net (3)
> **Tools:** visual studio (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=0)** - [Instructor] This course does have a few prerequisites.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=4)** I'll try to be as inclusive as possible and I will also explain vital steps.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=10)** But still, there are a few things that you should know.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=14)** First of all, with regards to .NET, it's paramount that you're using a version that's still under support.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=22)** This obviously depends on when you're watching this course, but just remember that the last even .NET releases had three years of support.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=33)** The odd ones got about one and a half.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=36)** For instance, .NET 7 was released in November, 2022 and has, or had, support until some point in May, 2024.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=46)** .NET 8 is from November, 2023 and will receive updates 'till November, 2026.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=53)** Everything in this course was tested down to .NET 5, which has already expired.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=60)** I'm also confident that nothing significant will change in the coming versions of .NET.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=66)** Also, C# is the language we will be using.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=70)** If you prefer, say, Visual Basic or F#, you still should be able to follow along, but all of the code samples will be in C#.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=82)** and then, there are also a few other technologies that we'll touch upon in select parts of this course.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=90)** We will be working with Entity Framework Core for database access a little bit later.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=96)** But don't worry if you haven't used that before.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=99)** You will still be able to follow along, but of course it's beneficial if you have already had some exposure to Entity Framework Core.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=109)** Also, we will be talking about testing web applications, so knowledge of [ASP.NET](https://ASP.NET) Core, especially [API.NET](https://API.NET) Core MVC is beneficial.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=120)** Having seen web APIs is helpful too.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=126)** Then, from a software development point of view, we'll be using an IDE to develop our applications and to work with the demos.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=137)** Visual Studio is the IDE of choice as it's a fully fledged IDE that Microsoft provides.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=145)** The Community edition, which is free If you meet some prerequisites, please check it out on the Visual Studio website, is good enough for everything we cover in this course.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=159)** If you have another edition of Visual Studio at your disposal, that of course works as well.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=167)** The latest version of Visual Studio is 2022.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=172)** But 2019 works as well, and I have no doubt that future versions will be compatible as well.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=181)** Of course, you could also use Visual Studio Code if that's what you prefer.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=186)** It's free, yet very powerful, and it's also cross-platform.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=195)** I think that's an important aspect in general.
>
> **[3:17](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=197)** However, many of the UI aspects of TDD, test driven development, are implemented right away in Visual Studio and are not available in Visual Studio Code, at least not out of the box.
>
> **[3:32](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=212)** That's why we have chosen Visual Studio, and I also recommend that you are using Vision Studio for this course.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-you-should-know-23401540?u=76281980&t=221)** And that's all you need to know and all you need to have available on your system to follow along this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** web (2), database (1), [[ASP.NET Core]] (1), api (1), [[Software Development]] (1)
> **Env Vars:** net (8), ide (3), asp (1), api (1), mvc (1)
> **Tools:** visual studio (8)
> **URLs:** [asp.net](https://asp.net) (1), [api.net](https://api.net) (1)
> **Analogies:** for instance (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)


### 1. TDD Theory

[↑ Back to Table of Contents](#table-of-contents)

#### About testing
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=0)** - Before we dive into test driven development, let's first talk about a little bit of terminology.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=9)** A few terms we will be using later in this course.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=14)** The first term, and arguably one of the most important ones, is unit test.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=19)** Because we will be writing unit tests.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=22)** Unit tests are one of the pillars of test driven development.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=28)** So a unit test is testing a unit, a unit of work.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=34)** There's always discussion, what this unit of work is.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=37)** What is a unit?
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=39)** The definition I personally like the most is that a unit of work, it's basically what happens when you call a public method and then, get a result.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=55)** That's basically a unit of work.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=58)** So a unit should not be a super complex process, but maybe a unit of work is not just instantiating a class and then check whether all of the arguments have been set to properties.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=73)** So this is basically my rule of thumb.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=75)** So we are testing a unit of work, and those tests, they're either red or green, if a test passes.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=87)** So if everything works as expected, then we have a green test.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=90)** If not, we have a red test.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=93)** And, as we will see in a bit, when doing test driven development, we very often have red tests.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=101)** That doesn't sound like a good thing, but it's part of the process because that process includes making all of the red tests green, and believe me, it's a good feeling seeing all those green check marks a little bit later in this course.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=116)** While we are testing, we are sometimes talking about the SUT, the System Under Test.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=124)** I'm just briefly mentioning it because the term will reappear a little bit later.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=131)** And while we are testing, there is a very common approach of how we will do that.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=137)** And that approach is called Arrange, act, and assert.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=142)** So basically, we set up everything so that everything is ready. So for instance, we are instantiating some classes, or, we are setting up the connection to a database.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=159)** And then, we act. We call the public method for instance.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=164)** And then, finally we assert. We have some assumptions.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=167)** After calling the method, we get a certain result.
>
> **[2:51](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=171)** That's our assertion. That's our actual test.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=174)** So we have the assertion. The return value must be this and that.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=178)** If it is, the test is green. If not, it's red.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=183)** Another way of describing it is first we set up, then we execute, then we validate.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=189)** And maybe as a fourth step, we clean up, right?
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=192)** So, if you opened up a database connection, or if you opened the file, we should close the connection, or we should free that file.
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=199)** That's another way of coining it basically.
>
> **[3:24](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=204)** And then finally one term that is not part of this course, but it's still very common, and heard very often when talking about testing, and test driven development, is code coverage.
>
> **[3:36](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=216)** And that's a metric that basically tells us how much of our code is covered by a test.
>
> **[3:43](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=223)** And of course it sounds very logical to aim for 100%.
>
> **[3:47](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=227)** So that every single line of code is tested, is covered by a test.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=233)** Also, there is a debate whether 100% is really necessary, and whether there should be exceptions to that, and whether there are parts that should really be thoroughly tested.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=244)** Whereas there are other parts of an application that just doesn't justify elaborate tests.
>
> **[4:11](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/about-testing?u=76281980&t=251)** I will stay out of discussion, at least in this course, but if you hear about code coverage, it's basically a metric that is ranging somewhere between 0% and 100%.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (2), application (1)
> **Definitions:** is a  (3), is called (1)
> **Cross-References:** later in (2)
> **Analogies:** for instance (2)
> **Prerequisites:** set up (2)
> **Env Vars:** sut (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - before (1)

#### What is TDD?
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=0)** - [Instructor] Let's take a look at the process of test-driven development.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=4)** Test-driven development basically means we start with a test.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=9)** So we have a cycle of steps, which we repeat over and over again.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=14)** And the first step is writing a test.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=19)** So we write a test we arrange, act, assert, but what happens if you run the test?
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=24)** It must be a red test because you only have the test.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=28)** And indeed running the test will give us red result, we have a red test.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=33)** And that sounds weird at first, why do we start with the testing?
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=37)** But basically, by writing the test, we specify what the application needs to do.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=43)** So we write the test, we run the test, or as I wrote here, we run the tests, because if we repeat that we have a set of tests and we should always run all of the tests, because a change in the code might make another test invalid and go red.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=61)** So we run the tests and at least the new test will be red, because you really don't have code for it.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=66)** So therefore we write code that satisfies the test.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=70)** We fix our code, and the extra recommendation is to write code in such a way that it's basically the minimum effort required to satisfy the test, but well on the other hand, if you say, have a calculation engine, and then you write just one test, and that test assumes that the calculation engine returns a value of say 42, then the minimum code to satisfy this would be return 42.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=99)** So, no actually we write meaningful code, but that code should basically satisfy the test by doing what the test expects, by fulfilling the specifications so to speak.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=111)** And then we re-run all of the tests, and hopefully now they are all green, we have only green tests, but you know, maybe some other tests failed, or we find out by writing the new piece of code, we need to change something in the application, we need to change the structure, we need to refactor.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=130)** So, refactoring is an integral part of this whole process.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=136)** We reflect a lot when we do test driven development, and that's because we basically start with the tests and then write the code, and therefore the way the code is structured in architecture, at least in part depends on the tests, and the more tests we have, the more we see the big picture.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=155)** So to speak.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=156)** The more we are probably competent to refactor, because we learn something and then we amend the application.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=165)** And then we start again, we write a new test, we run all the tests, we most probably need to fix code, we rerun the tests.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/what-is-tdd?u=76281980&t=172)** Maybe we are inclined to reflect again, and we repeat until the software is basically done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (3), [[Test-Driven Development]] (2)
> **CLI Commands:** make (1), find (1)
> **Definitions:** basically means (1), is an  (1)
> **Analogies:** picture (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Advantages and disadvantages of TDD
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=0)** - [Instructor] Test-driven development is a very appealing proposition but not everyone is doing it because as always, there are advantages but also potential disadvantages.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=12)** And I don't want to go into a lengthy discussion here because you have already decided that you want to watch this course so you are at least interested in TDD.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=25)** And therefore, I'll just give you some reasons why this was a good decision, but also some things to keep in mind when doing test driven development.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=35)** So for the advantages, since we have rather small tests, we tend to get more modular apps because we are testing so many individual parts of the application.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=48)** Also writing an application that is testable more or less automatically leads to a more modular architecture and that's of course, always a good thing.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=59)** Then we refactor a lot and we refactor early.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=63)** Have you refactored a complex Legacy app that has been a few years old?
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=69)** I've been there a few times and usually it wasn't much fun.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=75)** And sometimes I thought ah, had I known this earlier and indeed if we refactor early, then the effort required for refactoring is not as much as when we have to refactor a whole complex beast.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=92)** And therefore, the early refactoring is just an advantage over late refactoring so this might be a positive aspect of TDD as well.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=103)** And another thing I want to mention is that since we have code that tests something and especially in the .net space, there are really good frameworks and tooling.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=119)** Those tests can be run automatically in the IDE and also when checking into code for instance or when deploying.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=131)** So we have automated testing with little to zero extra effort.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=138)** So we write the tests but we don't have to write a test runner for instance.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=141)** That's already available.
>
> **[2:23](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=143)** Now there are of course more advantages by that.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=146)** Just wanted to give you some points that I thought were the paramount for the whole topic.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=152)** And for disadvantages, writing those tests can be hard.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=157)** I think that's the major block for many that they say okay, I would love to do TDD but the way my application is structured because I already have an application or the way I envisioned my new application, it's really hard to write some of the tests.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=173)** I have a lot of dependencies. I work with databases.
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=176)** It's a map application. I communicate with an API.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=181)** It requires effort and that effort sometimes might be too much or at least could lead to writing tests that are not super complex just to avoid the effort required.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=195)** I mean in this course, the tests we will be writing, they are not all super trivial, but of course they have a manageable size so that it's easy to understand and by that to learn how TDD works.
>
> **[3:29](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=209)** And of course, since we don't start writing extra work in code but writing tests that will eventually be satisfied by code, initially it takes more time to write the application because we have a working result later.
>
> **[3:45](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=225)** On the other hand, it's like adding money to an account and we will deplete the account later.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=234)** Of course, we are investing into easier and cheaper maintenance of our application.
>
> **[3:59](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=239)** If our application is well tested and very modular et cetera, then maintaining it is usually less an effort than if we had this untested monolith.
>
> **[4:13](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=253)** So at the beginning, it takes more time.
>
> **[4:16](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=256)** So everyone has to buy into that not only of the developers but also management or customers.
>
> **[4:23](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=263)** But then the idea is that on the long run, it's more efficient to work with TDD than to work without TDD.
>
> **[4:33](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=273)** And one thing I want to mention and I am guilty of that as well.
>
> **[4:37](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=277)** Since refactoring is such an integral part of the process, there might be the tendency that you lose yourself into continuously refactoring but not getting anything done.
>
> **[4:53](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=293)** So, a lot of times I see when I work with development teams and I always encourage them to refactor early, right but at sometimes I just encounter the developers, they just refactor and refactor and refactor and amend the architecture and amend the architecture.
>
> **[5:09](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=309)** And it's getting better and more modular and more testable and great, but then a week has passed and there's still no working application but just a beautiful architecture.
>
> **[5:21](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=321)** So refactoring is really good and should be done early as I've mentioned a few times now, but don't forget that eventually you're paid to write an application that works what's it's supposed to do.
>
> **[5:33](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/advantages-and-disadvantages-of-tdd?u=76281980&t=333)** So also remember that you have to write code that satisfies the tests, not just refactor until everything is perfect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (11), [[Test-Driven Development]] (1), [[Databases]] (1), api (1), management (1)
> **Env Vars:** tdd (6), ide (1), api (1)
> **Analogies:** for instance (2), it's like (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Software and tooling
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=0)** - There are several frameworks and tools with regards to unit testing in the .NET space.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=8)** And this course is not on one specific framework and all of its features.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=15)** Of course, I have picked a specific framework and later a second one, but I want to show you how TDD works in general.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=24)** So even if you choose to pick another framework, another library, another IDE, another tooling, you still get value out of this course.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=34)** And that's why it's not an exhaustive course, over all of the features, but just gives you an idea how things work and will get you started into TDD.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=45)** So we're looking at testing frameworks in .NET.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=49)** There are a few which are relatively popular.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=51)** One is MSTest directly coming from Microsoft, but there are other options as well.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=58)** And the most famous, or probably most famous, unit testing tool is J unit from the Java world.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=69)** And there are .NET ports.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=72)** One is NUnit and one is xUnit, and both of them are really great.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=78)** Both of them are still under active development, X unit, at least as of the time of recording, hasn't had a major release in quite a while because they're working on a new iteration or a new generation of their framework.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=96)** So I've picked NUnit, which I am also using more often in projects, but still no bad choice here on that slide.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=103)** And those are the most popular frameworks here.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=106)** And of course their APIs are different and sometimes their feature sets are different, but the general approach is the same, no matter what you're picking here, more or less, it's just syntax.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=119)** So even if you prefer another framework than NUnit, you'll still get something out of this course.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=126)** And a little bit later in this course, we will also need a mocking library a mocking library basically creates a replacement for a component, and there might be reasons why we do not want to use specific components in a test.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=142)** For instance, when working with a database and we are testing a certain process, for instance, then we are not really interested in the database per se.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=152)** We don't want to write and read from the database, and maybe even changing data there, we just want to test the process.
>
> **[2:38](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=158)** So we may want a replacement for the database that has the same API and gives us results, but doesn't persist anything.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=166)** And for that, there are a few options.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=168)** The most popular one, the one we will be using, is called Moq but there's also NSubstitute and, I just love the name, FakeItEasy.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=178)** So these are also very popular options.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=180)** Microsoft also started working on something in that space.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=183)** So there's Microsoft Fakes, which is relatively new, but also is something for mocking.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/software-and-tooling?u=76281980&t=190)** But the two picks we are using for this course, are NUnit and Moq. And with that out of the way, let's move on and actually start testing and coding!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (4), [[Microsoft]] (3), [[Unit Testing]] (2), [[Java]] (1), feature (1)
> **Env Vars:** net (3), tdd (2), ide (1), api (1)
> **Analogies:** for instance (2)
> **Code Identifiers:** xunit (1)
> **Cross-References:** later in (1)
> **Definitions:** is called (1)
> **Speakers:** - there (1)


### 2. Getting Started with TDD

[↑ Back to Table of Contents](#table-of-contents)

#### Demo project introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-project-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-project-introduction?u=76281980&t=0)** - [Instructor] The code we will be writing in this course is for the fictional h+sport company.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-project-introduction?u=76281980&t=9)** They sell a variety of sports related products, like mineral water, supplements, and apparel for women and men.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-project-introduction?u=76281980&t=17)** So let's see whether they have something for me.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-project-introduction?u=76281980&t=20)** How about this skater graphic T-shirt? It's even on sale.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-project-introduction?u=76281980&t=25)** So let's go here and then choose a size.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-project-introduction?u=76281980&t=29)** Well, on good days, ah, (sighs) let's be honest here and a color.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-project-introduction?u=76281980&t=34)** How about blue?
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-project-introduction?u=76281980&t=36)** And then I add it to the cart.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-project-introduction?u=76281980&t=38)** Now it's in my shopping cart, and I can... Well, see your shopping cart, I can't really order it because, again, it's fictional, but that's what they do.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-project-introduction?u=76281980&t=47)** And when using TDD, we will implement some of the back office parts of their application.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-project-introduction?u=76281980&t=58)** And we'll start with parts of the shopping cart.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Microsoft Office|Office]] (1), application (1)
> **Env Vars:** tdd (1)
> **Speakers:** - [instructor] (1)

#### Creating a test
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=0)** - [Instructor] So we are ready to create our first test project.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=5)** I just fired up Visual Studio and create a new project.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=9)** Now, if you search for test, you'll get a variety of templates depending on what's installed, but what's definitely there is the NUnit test project.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=20)** And that's what we will be using.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=23)** If you're using another testing framework like xUnit or MSTest, the approach will be the same, there will just be subtle differences in the API and in some method names.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=35)** I picked NUnit because it is by far the most popular one.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=39)** We set up a project, it's called H plus sport T D D dot core dot tests, because we would like to write some tests.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=49)** However, the solution will be called H plus sport TDD because we will add more projects to that solution a little bit later.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=59)** Then we pick the latest version of .net.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=63)** As of time of recording, it's .net five, there might be .net six, once you are watching this.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=70)** And then the project is set up.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=72)** And what it basically is, is a class which includes a couple of tests.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=79)** And we will do one thing first.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=82)** We'll just get rid of that class because we'll create, well, an actual class with actual tests that makes sense in our scenario.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=91)** But first, I right click on the project name and go to the properties page because I would like to do one change.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=99)** That seems to be a small thing, but it's really convenient a little bit later.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=104)** I'll change the default namespace to H plus sport TDD dot core without the dot tests.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=109)** The reason for that is we do TDD.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=112)** So we start with the tests before we have an actual implementation.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=116)** So while writing the tests, we will add new classes on the go.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=121)** By changing the default namespace to this one here, we can later move all of the classes we added to a class library, for instance, and that can then be consumed by a web application or a mobile application or a fat client or whatever.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=137)** With the new default namespace in place, we can just add a new class, and I'll call it class ShoppingCartTests because we are testing the shopping cart.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=150)** We've had a look at a bit earlier in this course.
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=154)** Now in this class, we will add two methods.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=159)** The first one will be a method called SetUp.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=164)** The SetUp method is used for the assertion phase.
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=170)** And we adorn it with the setup attribute, I hit control dot, and then we can add using NUnit dot framework so that everything works.
>
> **[3:02](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=182)** We do not set up things yet, we will do that later.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=186)** But we would like to test something.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=187)** And I would say, I'll start with a test method that I call ShouldReturnArticleAddedToCart.
>
> **[3:18](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=198)** I would like to implement the functionality to add an item to the shopping cart and the return value of that method should contain well, the shopping cart and that shopping cart of course should contain the article I've just added.
>
> **[3:34](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=214)** I'll use the test attribute and test attribute makes this a test, which I can actually try out and run later.
>
> **[3:44](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=224)** Now, when adding something to the cart, I'll first need the payload, the data, the request that comes in, then I'll need a manager that handles the shopping cart, and then I'll get a response and I'll set up these classes on the go.
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=238)** So how about, I've started with a shopping cart item and I call this, how about the AddToCartItem.
>
> **[4:08](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=248)** And I set a few properties, the article ID, let's say 42 and a quantity, five.
>
> **[4:15](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=255)** And you see a lot of red squiggly lines because that clause doesn't exist yet, but I make sure the cursor is here, control dot.
>
> **[4:22](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=262)** And then I generate the AddToCartItem clause, and I get a preview here as well.
>
> **[4:28](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=268)** So I now have an item and that item can be used in a request.
>
> **[4:33](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=273)** So I create the request as new AddToCartRequest.
>
> **[4:41](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=281)** And the AddToCartRequest has a property, which is called item.
>
> **[4:47](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=287)** I'm just sending the item as part of the request.
>
> **[4:50](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=290)** And again, this class doesn't exist yet.
>
> **[4:53](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=293)** I have no intellisense support.
>
> **[4:55](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=295)** So now at least the class has been created.
>
> **[4:59](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=299)** And with that, I can instantiate the manager.
>
> **[5:03](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=303)** So I have a new ShoppingCartManager, again, class I just made up and I let Visual Studio create it without an implementation yet, of course.
>
> **[5:17](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=317)** Finally, we call manager dot AddToCart and provide the request.
>
> **[5:26](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=326)** And I'm of course, interested in the data that is coming back from that method call.
>
> **[5:30](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=330)** So I could do a VAR response equals.
>
> **[5:33](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=333)** However, I would like to provide the type here so that the generation of that method is feasible.
>
> **[5:40](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=340)** So AddToCartResponse.
>
> **[5:45](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=345)** All right, so a lot of things happening here, I'm using the AddToCartResponse type, which doesn't exist.
>
> **[5:52](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=352)** So it will get generated.
>
> **[5:55](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=355)** Then I have the AddToCart method, which doesn't exist yet.
>
> **[5:59](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=359)** So I generate it.
>
> **[6:02](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=362)** And then, if you look at it, the AddToCartResponse will probably have, well, a list of items in the shopping cart.
>
> **[6:10](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=370)** So how about we implement it that way?
>
> **[6:14](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=374)** We already have the AddToCartItem, which has the article ID and the quantity.
>
> **[6:20](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=380)** So in the AddToCartRequest, we have a property, item.
>
> **[6:27](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=387)** So how about in the AddToCartResponse, we just add a property, AddToCartItem, and then an array of it, items.
>
> **[6:46](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=406)** And then the response has a property items, and now we can start with our assertions.
>
> **[6:51](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=411)** So assert, and then you get a lot of suggestions here, what we can test for.
>
> **[6:58](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=418)** And again, this is a little bit different if you're using another framework, but the principles are the same.
>
> **[7:03](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=423)** So we could for instance, check for not null.
>
> **[7:08](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=428)** The response we get back must not be null.
>
> **[7:13](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=433)** It could be an empty list, but it should not be null.
>
> **[7:15](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=435)** And then of course we can assert is the article that we've just added really part of the shopping cart?
>
> **[7:21](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=441)** So we can do an assert and then just contains and then just check the item and whether the item is part of the items in the response.
>
> **[7:31](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=451)** And that's basically it.
>
> **[7:33](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=453)** And now with that method in place and the test attribute, we can right click on it and click here on run tests.
>
> **[7:41](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=461)** Or we can go to the view menu and open up the test explorer and the test explorer window, which appears here, shows the tests and then will allow us to run the tests.
>
> **[7:57](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=477)** So I hit the run button.
>
> **[8:05](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=485)** Application is compiled.
>
> **[8:07](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=487)** And then in the end we get, well, which color would you guess?
>
> **[8:11](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=491)** And we say one failed, red, of course, because we don't have an implementation here.
>
> **[8:16](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=496)** And if you look closely, you see that the ShouldReturnArticleAddedToCart method created the exception.
>
> **[8:24](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=504)** And we get an not implemented exception because we have not implemented AddToCart yet, but that's expected we are in the red phase.
>
> **[8:33](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=513)** So we just started with the test.
>
> **[8:36](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/creating-a-test?u=76281980&t=516)** We don't have the implementation yet, and that comes next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (2), data (2), [[Search]] (1), api (1), web application (1)
> **Prerequisites:** set up (4), setup (3)
> **Env Vars:** tdd (3), api (1), var (1)
> **UI Navigation:** click on (2), go to (2)
> **Definitions:** is a  (2), is called (1)
> **Tools:** visual studio (2)
> **Analogies:** for instance (2)
> **CLI Commands:** make (1)

#### Fixing the code
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=0)** - [Instructor] How do we fix the failing test?
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=3)** Well, it needs to have something to do with the AddToCart method.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=9)** Let's look at its implementation.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=12)** Oh, well, not implemented yet.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=14)** So, what does AddToCart do?
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=16)** It adds the item from the AddToCartRequest to our shopping cart and then returns an AddToCartResponse and the AddToCartResponse, well contains all of the items in the shopping cart, so how about this?
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=32)** Very straightforward, we just return an AddToCartResponse and that AddToCartResponse needs to have items and the items are an array of AddToCartItem.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=50)** And we populate this array with the item from the request.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=58)** So if we add the item or the article with the ID 42 and a quantity of five, then items is set to an array of AddToCartItem with exactly one element in the array.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=73)** And that element is the item of ID 42 and quantity of five.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=80)** So we just get back what we put into the shopping cart.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=86)** And I believe that makes sense.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=88)** So let's run the tests.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=91)** You could go through a test explorer again, or we just right-click and then run tests and the project then builds.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=101)** And after the project has built, we see here at the bottom, one test passed.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=108)** So that's a good sign, but of course we'd like to see all of the details.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=113)** So we go back to test explorer and you see all green here.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=118)** We went from red to green. So all good, isn't it?
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/fixing-the-code?u=76281980&t=123)** Well, let's dive a little bit deeper and write another test.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (1)
> **UI Navigation:** right-click (1)
> **Speakers:** - [instructor] (1)

#### Adding another test
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-another-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-another-test?u=76281980&t=0)** - [Instructor] To create the new test, I will be using copy and paste.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-another-test?u=76281980&t=5)** Forgive me, but it just saves us a little bit of time.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-another-test?u=76281980&t=9)** I copy the existing one, paste it, and then rename the copy as ShouldReturnArticlesAddedToCart, plural because this time we are checking not only whether adding one article works, but also adding two articles will work.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-another-test?u=76281980&t=31)** Sounds like not necessary, but we'll see how far we can go.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-another-test?u=76281980&t=36)** To achieve this, we are using item1, that's the first item or article we add to the cart.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-another-test?u=76281980&t=44)** Then we add it to the cart, but before we do any checking, we continue with a second item, item2.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-another-test?u=76281980&t=57)** Let's just use a different article ID and a different quantity.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-another-test?u=76281980&t=61)** We are reusing the request, we just make sure that this time we're using item two, and then once again, we call the AddToCart method.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-another-test?u=76281980&t=74)** And then we have our assertions.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-another-test?u=76281980&t=76)** We assert that the response is not null, we assert that it contains item1, but of course, we also search that it contains item2.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-another-test?u=76281980&t=90)** Sounds like a trivial thing, but what does the test explorer say?
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-another-test?u=76281980&t=95)** So, let's run the tests and ugh, we are red.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-another-test?u=76281980&t=106)** One passed, the ShouldReturnArticleAddedToCart, but ShouldReturnArticlesAddedToCart, that one failed.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-another-test?u=76281980&t=118)** We expected some item, but we didn't get that item.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-another-test?u=76281980&t=122)** Hmm, so we have a bug in our implementation, so we need to fix it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Satisfying the next test
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=0)** - The problem, of course, is our very naive implementation of add to cart.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=7)** When we add an item to the cart, we basically return the item.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=13)** So if we call add to cart twice, after the second call, we only return the second item, but not the first that one is lost.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=21)** We are not maintaining a list of items and we didn't notice it when doing the first test, but with the second test, we did.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=30)** So that's why it's so important to have a lot of tests that are really testing many aspects of the application, of the logic.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=39)** So how can we solve this?
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=41)** Well, we need to maintain a list.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=42)** So, how about we add a list, so we could do private and let's use a list here, not an array, because then it's a bit easier to handle adding to that list and I'll call it just shopping cart because that's what it is.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=61)** We do not have lists available yet, so control dot, And then we are using system collections, generic, and in the constructor, we could instantiate the list.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=73)** So list add to cart item, and we have the list.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=80)** What happens when we call, add to cart before we return anything, we go to the shopping cart and add the item from the request.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=93)** And then we do not return an array just consisting of the current item, but of all items.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=101)** So we go to the shopping cart again, which contains all of the items and then convert it to an array.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=112)** So that's some minor refactoring going on, but if you go back to the test explorer and ask it to run off the tests again, we see that now we are back to green.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=130)** Both tests were passing and that's a super important lesson to learn.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=136)** The quality of your TDD approaches depends on the quality of your tests and while you're writing the tests and then writing the code so that those tests will turn green.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=149)** You are in a constant need or motivation to do some refactoring.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=156)** And my advice is refactoring risk rate, but don't overdo it.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=160)** Eventually you have to produce work and code and not just refactor until the day ends, but fixing your tests is crucial.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/satisfying-the-next-test?u=76281980&t=172)** And that's why you should have a lot of tests and then turn all of them from red to green.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (1), generic (1)
> **UI Navigation:** go to (2)
> **Env Vars:** tdd (1)
> **Cross-References:** go back to (1)
> **Speakers:** - the (1)

#### Challenge: Making the test pass
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-making-the-test-pass?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-making-the-test-pass?u=76281980&t=0)** - [Instructor] Are you game for a quick coding challenge?
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-making-the-test-pass?u=76281980&t=8)** I would like to add a test to the project, or rather I would like you to add a test to the project.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-making-the-test-pass?u=76281980&t=16)** When we add the same article to the shopping cart, several times, I would expect that we get the article back once, but with the combined quantity of all our individual add-to-cart calls.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-making-the-test-pass?u=76281980&t=35)** So, write a test that asserts that those quantities are correctly added up.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-making-the-test-pass?u=76281980&t=43)** And once you do this, you will notice that this test will fail, so the next step is that you have to fix the code.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-making-the-test-pass?u=76281980&t=52)** There's one important piece of advice here.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-making-the-test-pass?u=76281980&t=54)** And that advice actually applies to writing the test.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-making-the-test-pass?u=76281980&t=59)** So far we've been using Assert.Contains, but that works with references.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-making-the-test-pass?u=76281980&t=66)** Since we are now combining items that were added to the cart, references don't get us very far.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-making-the-test-pass?u=76281980&t=74)** We have to use other assertions.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-making-the-test-pass?u=76281980&t=77)** And one that probably is the most convenient option is to use Assert.That.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-making-the-test-pass?u=76281980&t=85)** And within the parentheses you just write the condition.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-making-the-test-pass?u=76281980&t=89)** So, an expression that is either true or false, and that correctly sets up the test and then allows you to fix the code.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-making-the-test-pass?u=76281980&t=99)** I would estimate it'll take you 15 minutes, maybe 10, if you're quick and I'll wait until you're done and will present you my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** game (1), next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Making the test pass
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=0)** [Upbeat Electronic Music]
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=5)** - [Narrator] Let's start with the test.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=7)** Here's how I would do it.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=10)** I copy the other test we had just written, because the new one is similar, at least to some degree.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=19)** And I'll call this, Should Return Combined Articles Added To Cart, because this time I'd like to add the same article twice and see what happens.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=28)** The article ID is 42, the quantity is five, and the second article will have article ID 42 as well, and quantity of 10. So we should get 15.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=44)** As I mentioned, we cannot use .Contains because we do not have an item here that was added to the shopping cart by reference, with a quantity of 15.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=56)** So, .Contains would fail, and the error message wouldn't be really helpful.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=62)** We can use Assert.That and then just use an expression in here that returns true or false.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=70)** Unfortunately, the list of items and response is an array.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=75)** So, our link capabilities are limited to some degree.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=79)** We could now refactor the application so that we are using a list instead of the array.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=86)** Or, well, we could use the APIs we have in C sharp [and.net](https://and.net) to check whether an array contains a specific element.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=98)** And we do that by calling Array.Exists and just check whether the list of items contains an item where the item article ID equals 42 and the item quantity equals 15.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=118)** Right? So, maybe let me break that here.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=125)** And that's our new assertion, which checks whether those two articles are combined to one.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=134)** If you go to the test manager, or test explorer, and try this out and run the tests, surprise, surprise! The third test is red.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=146)** Expected true but was false, because we do not combine those articles yet.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=153)** But, solving this actually is not that difficult.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=160)** Before we add something to the shopping cart, first check whether there is an item in the shopping cart, and that item has the property that the article ID is the same as the article ID of the item in the request, right?
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=183)** So, we check for the presence of that article and if it's already in there.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=189)** So, if item is not null, then we just take the quantity of that item and increase it by the quantity of the item in the request.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=205)** Otherwise, if it's not in the shopping cart yet, we have to edit.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=213)** And that's basically it. So, simple fix, but it probably took some time to find it.
>
> **[3:39](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=219)** We go back to the test explorer, run all the tests, and now they are all green again.
>
> **[3:46](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=226)** And so you've seen the principles of writing tests, and then writing the code to make those tests green.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=234)** There are so many more features of NUnit to get started.
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=240)** These were the basics you absolutely need to know.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=244)** And in the next chapter, we will cover a few more advanced topics.
>
> **[4:08](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-making-the-test-pass?u=76281980&t=248)** See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (1), next (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** is an  (2)
> **URLs:** [and.net](https://and.net) (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)


### 3. Advanced TDD Techniques

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to mocking
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=0)** - [Instructor] More often than not, the system under test has dependencies and those dependencies may have their own unit tests.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=10)** Therefore we do not want to test the dependencies we want to test our system under test.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=16)** But what do we do when those dependencies have functionality that we don't really need to run because we trust those dependencies?
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=26)** For instance, when we have a database and do not want to write to the database as part of our test of our own system under test.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=36)** In that case, we might consider using so-called test doubles.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=42)** So we have specific objects that can behave like the dependency but are not the dependency.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=51)** There are different kinds of that.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=53)** The first and probably most well-known term is that of a mock.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=60)** A mock handles so-called indirect outputs of the system under test.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=66)** So, it's an object with properties and with methods and they implemented and so among other things, the mock knows which methods were called, how often they were called, et cetera, et cetera.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=80)** And basically the mock then stands in for the dependency or the object we are mocking.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=88)** There's also a stub.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=89)** Stub handles indirect inputs of the system under test.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=96)** So, a stub usually just returns hard-coded values.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=103)** A typical example was actually our own simple, first implementation of the shopping cart manager.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=112)** So we always got the item back, we put into the shopping cart, but there wasn't a list of items in the shopping cart that were maintained by implementation and that kind of corresponds to a stub.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=125)** And then apart from this, there's also a dummy.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=132)** And the dummy, as the name already suggests, basically satisfies the compiler.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=139)** So if we have a method where we just need an argument of a specific type, if we have certain parameters that have to fulfill certain criteria, you just use the dummy so that the code compiles and it can run but there is no functionality involved.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=156)** There are other terms in use as well.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=159)** So for instance, there are fakes.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=162)** Fakes are basically full implementations that pretend that things are working well.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=168)** So a typical example for that is that instead of using a real database, we're using an in-memory database.
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=176)** But these 3 terms here, mocks, stubs and dummies are the most common ones in our testing.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/introduction-to-mocking?u=76281980&t=183)** So up next, we will use a mock framework and I'll just show you how mocking or stubbing can work with it in the context of our H+ support application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (4), next (1), application (1)
> **Analogies:** for instance (2)
> **Speakers:** - [instructor] (1)

#### Adding an interface
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=0)** - [Instructor] Before we are actually mocking or possibly stopping, I would like to refactor our app a tiny bit.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=9)** We have a specific shopping cart manager that doesn't really do much as you could witness in the previous chapter.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=18)** A real shopping cart manager would have a database backend, or would talk to a service, or might even use the file system.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=26)** So eventually, we'll be swapping out the shopping cart manager.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=30)** Therefore, I would suggest we introduce an interface.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=38)** And then the specific implementation or implementations of the shopping cart manager just implement that interface.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=45)** So we'll use IShoppingCartManager as the name.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=52)** I'll make it public because that facilitates mocking later.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=58)** And then I just add the method that we already have in our specific implementation.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=64)** So AddToCart response is returned by a method called AddToCart.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=70)** And it expects an AddToCart request as an argument.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=75)** You see the red squiggly line, and that's not because of the typo here, but the AddToCart request.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=83)** And AddToCart response classes are less accessible than the method.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=88)** The method is public.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=90)** So those classes should be public as well.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=93)** And therefore, we go to those classes we already have and make them public.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=101)** So public here, public there.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=105)** And actually, in our implementation of the shopping class manager, we go to public.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=113)** And for that method, we go to public as well.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=118)** And since we're at it, how about adding the method that returns to contents of the cart?
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=129)** I think it absolutely makes sense to do that.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=133)** And therefore, we just implement that as well.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=138)** And again, AddToCartItem is not public yet.
>
> **[2:23](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=143)** So let's change it really quick.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=147)** And the interface is done.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=150)** Now, let's go to our existing shopping cart manager.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=152)** We could actually rename it to our fake shopping cart manager, but so far, I'll leave it as it is so that everything compiles.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=160)** And we say this needs to implement IshoppingCartManager.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=165)** And then I say, implement the interface because we haven't implemented GetCart yet.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=172)** And we can do it right away.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=174)** So we just return to shoppingCart and then convert it to an array.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/adding-an-interface?u=76281980&t=181)** We are done. And now, it's time to start mocking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (1)
> **UI Navigation:** go to (4)
> **CLI Commands:** make (2)
> **Code Identifiers:** shoppingcart (1)
> **Cross-References:** previous chapter (1)
> **Speakers:** - [instructor] (1)

#### Using a test with a mock
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=0)** - There are several options for mocking libraries or mocking frameworks.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=6)** If you go to "Manage NuGet Packages", and then click on "Browse", you get a couple of suggestions, because we have a test project, so there are testing-related suggestions, and we'll use one of the starred options here, "Moq".
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=22)** According to its own description, the most popular and friendly mocking framework for .NET, and in my humble opinion, yes, it is very friendly, easy to use, and we'll have results rather quickly.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=36)** So I install it, and then we can start mocking.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=41)** We'll mock the ShoppingCartManager, or the IShoppingCartManager interface, for sure, and how we about use the ShouldReturnArticleAddedToCart test?
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=53)** It's probably the simplest test, and we can have a look at a few select options for mocking with it.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=62)** So far, we are creating the ShoppingCartManager here, and we are then using it.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=66)** And now I would like to mock that manager, or rather, the interface that ShoppingCartManager is using.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=74)** So I create a new variable, "mockManager", as a new mock, with "ck", that's defined in the Moq framework, "Moq".
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=84)** So I hit control dot, using mock and then I just say what I would like to mock, I would like to mock the IShoppingCartManager, and then I have a mock containing, basically, a representation of that interface, so all of the public methods and properties.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=106)** So I can just comment it out here, and instead of the manager, I could use the mockManager, and then the Object embedded within it.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=117)** So I do "mockManager.Object.AddCart", and that's it, no further changes required, which is good, but let's check whether that works first.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=130)** I don't have a good feeling about that.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=133)** And indeed, if you look at the first test here, we see that we expect "not null" in one of our assertions, but we got null. So what happened here?
>
> **[2:28](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=148)** As you can see here, we have Assert.NotNull(response), but response supposedly is null, why is that?
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=154)** Well, because we do not have an implementation.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=156)** We are just mocking the interface.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=159)** Moq has no idea about the required values to be returned, so it just returns null.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=169)** So that's logical, but of course, so that our tests are passing, we could change the behavior of our mock, and that's what we'll do next.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=181)** So we go to our mockManager, and set it up, by using a method which is aptly called, well, "Setup", and we are setting it up by saying, "Okay, we have our manager, and then we have our AddToCart method,
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=205)** and when that method is called, well, we can kind of configure what will happen."
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=213)** Now, that AddToCart method expects an argument of type AddToCartRequest, we can now define some prerequisites about that argument, but here, I'm just saying, "Okay, it needs to be any value, as long as it is of type, AddToCartRequest."
>
> **[3:56](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=236)** And then we say, "Okay, we would like to return a specific value." I could now, for instance, write code that makes this method call, AddToCart, of the mock, return an empty AddToCartResponse that would satisfy the not null assertion, but it would not satisfy the contains assertion.
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=258)** And therefore, you have to specifically say what we would like to return.
>
> **[4:23](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=263)** I would like the return value to depend on the argument in the method call, and the argument is of type AddToCartRequest, and I would like to return a new AddToCartResponse, and that AddToCartResponse has the list of items, and that list of items is a new array of type AddToCartItem, and it contains the item from the request.
>
> **[4:48](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=288)** So super similar to what we did in our very first implementation of the ShoppingCartManager class.
>
> **[4:59](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=299)** So the mock library just takes the interface, provides us with something that has all of the public properties and methods of that interface.
>
> **[5:09](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=309)** But if you would like to have some extra implementations or behaviors we need to, and can, configure them.
>
> **[5:17](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=317)** So let's save this, and go back to our Test Explorer, and run the test again.
>
> **[5:26](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=326)** So everything compiles, and then the tests are run, and in the end we see, "Ah, we are green again because now we satisfy the test."
>
> **[5:36](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=336)** We satisfied the assertion that the return value contains the articles, which were added to the cart.
>
> **[5:45](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=345)** And depending on what you're testing, such an approach might be very useful.
>
> **[5:51](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=351)** Especially when, later, the ShoppingCartManager implementation itself might work with a database, and that might be tested individually.
>
> **[6:02](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/using-a-test-with-a-mock?u=76281980&t=362)** And therefore, if we just have the communication with the shopping cart as part of our workflow, then we can mock certain aspects of it in the tests for the workflow itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (1), next (1), database (1)
> **Code Identifiers:** mockmanager (4)
> **Prerequisites:** configure (2), install (1), setup (1)
> **UI Navigation:** go to (2), click on (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** for instance (1), similar to (1)
> **Env Vars:** net (1)
> **Cross-References:** go back to (1)

#### Testing without a database: Preparations
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=0)** - [Instructor] Mocking a database is not trivial in part fueled by the complexity of database access.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=7)** Well, the access itself, it is not that complex because entity framework does bulk of the work.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=15)** But the proceedings of entity framework make things complex and is especially hard to mock.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=23)** So for instance, what I've done here is I've created a DbShoppingCartManager.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=30)** Once again, implementing the IShoppingCartManager interface.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=34)** And here I'm using a shopping cart context and with that context, I can use link and things like this first or default call.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=43)** Which checks whether among the items to the shopping cart, there is one with the decide article ID, and then I can increase the quantity as before, or I can add a new item to the list of items and the context and that I called SaveChanges.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=59)** Which basically persisted in the database and that looks pretty straightforward, but it's a bit tough to test.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=66)** If you would just use a naive approach and mock DB context, or specifically the ShoppingCartContext I've created here.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=77)** Then, what would happen is we would get exceptions because FirstOrDefault is not implemented when we use mocking.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=86)** We would also have a problem with the ToArray call here and that's one of the reasons why there is the In Memory provider for entity framework core.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=99)** It allows us to use a database that just exists in memory.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=103)** So once we stop the application, the database is gone.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=106)** That's perfect for testing.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=108)** We can write data, it's there.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=110)** We have the same database engine as if it was a real file based database or server based database, but it just runs in memory, perfect for testing.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=120)** However, if it would like to use mocking, there are some ways to do it.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=124)** It really depends on the scenario and I've picked one specific scenario.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=128)** Which we can mock so that you see how it could be done, but before we do that, let me quickly show you how I've reflected the application a little bit.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=140)** First of all, I did something which I promised at the beginning and now is a good time.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=145)** I moved all of the actual implementations into the HPlusSportTDD.Core project.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=150)** So in the main project and the test project well, only has the tests now.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=157)** Also I've changed the IShoppingCartManager interface.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=161)** Now the GetCart method returns, IEnnumerable of AddToCartItem and not just an array.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=168)** This facilitates things later when we mock because a tool list call that is supported by the mocking we choose.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=178)** And since I've changed the signature of that interface, I had to change for instance, the specific implementation, the ShoppingCartManager, the code itself here, the implementation of the GetCart method is the same, but here in the signature I have to use IEnnumerable instead of the Array.
>
> **[3:17](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-without-a-database-preparations?u=76281980&t=197)** And with that, we are ready to try mocking the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (9), application (2), data (1)
> **Analogies:** for instance (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Demo: Testing without a database
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=0)** - [Instructor] In order to enable mocking, we need some support.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=4)** I manage my NuGet packages, and since mocking the DB context doesn't really work well enough out of the box, there are some helper libraries, and each of them support a specific feature, depending on what you want to do.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=22)** The one I'd like to show you now is, and if you just look for Moq and then Entity Framework, you see that there are several options, which try to support mocking in Entity Framework.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=34)** And the one I've picked is this one here, Moq.EntityFrameworkCore.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=41)** And once we install it, we are able to well, at least test a specific aspect via mocking.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=49)** I go to the ShoppingCartTests class and just create a copy of it.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=53)** And the copy will be called DbShoppingCartTests because that's for testing the database functionality.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=61)** I just rename the class and then I remove all the test methods, except for the first one because we can reuse a little bit of the first one, just a little bit.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=73)** And once I've done this, I will then write the actual tests, including the mocking.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=81)** I would call the method now ShouldReturnArticlesInCart.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=86)** So what I'll test is just to be able to test the context whether if I provide a list of cart items and then use the context, and then access the property, whether it all fits together, and whether then the GetCart method really returns those items.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=104)** So I start with a list of initialItems.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=110)** And initialItems is a new array of AddToCartItems, and I'll pre-populate it with a new AddToCartItem.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=125)** And that AddToCartItem then has well, the same properties as before essentially.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=133)** I'll just need to indent this a little bit so it looks at least a little bit nicer.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=140)** All right.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=142)** Then once I have the initialItems, I create the context.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=146)** I do not need the request any longer.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=149)** And I do not need the mockManager.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=153)** Before that, I create the context.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=155)** So let's just call it mockContext, and then new Mock, and then this time, I mock the ShoppingCartContext.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=168)** And then I can use the setup method on it.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=172)** We have see the setup method before but this time, we can use a feature that is given to us by the NuGet package I've just added.
>
> **[3:02](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=182)** So when we have our context, and then access the let's say items property of that context.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=190)** And we do that in the specific DbShoppingCartManager implementation.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=194)** Then we just say okay, this needs to return a DbSet, so the method's called ReturnsDbSet.
>
> **[3:24](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=204)** And when we use Control + dot, you get the suggestion, hey, that could be something from the Moq.EntityFrameworkCore package, and indeed, it is.
>
> **[3:34](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=214)** And what is the DbSet we return?
>
> **[3:36](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=216)** Well, it's initialItems.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=220)** So whenever the implementation based on the Mock ShoppingCartContext is trying to access context.items, it'll get the items that we defined.
>
> **[3:50](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=230)** And so this allows testing because then we just use, that case well, we could even mock it but you just use the regular manager we want.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=244)** So in that case, it's the new DbShoppingCartManager, and the ShoppingCartManager expects a context, so mockContext.Object.
>
> **[4:21](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=261)** And then the manager can be used to, for instance, call the GetCart method.
>
> **[4:28](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=268)** So var items equals manager.GetCart.
>
> **[4:33](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=273)** And now we can start with our assertions and maybe just using one.
>
> **[4:37](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=277)** So Assert.AreEqual just checks whether two things are equal.
>
> **[4:42](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=282)** And I compare the initialItems to ones we put in with the ones we get back.
>
> **[4:52](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=292)** Right?
>
> **[4:53](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=293)** So we're testing the GetCart method and of course, that is in part possible because the GetCart is really simple.
>
> **[5:01](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=301)** The one thing the GetCart method does is it is calling ToArray in the old ShoppingCartManager but in the DbShoppingCartManager, it's calling ToList and that's what is enabled by the NuGet package I've been adding.
>
> **[5:19](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=319)** So once it's done, let's save everything.
>
> **[5:22](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=322)** Go to Test Explorer.
>
> **[5:25](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=325)** And then run all tests.
>
> **[5:31](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=331)** The tests aren't there yet, so let's just rebuild for good measure.
>
> **[5:39](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-without-a-database?u=76281980&t=339)** And then we see here that ShouldReturnArticlesInCart is a green test because not much to my and certainly, your surprise, the articles we provided at the beginning are also the articles that are being returned by the GetCart call.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** feature (2), database (1)
> **Code Identifiers:** initialitems (5), mockcontext (2), mockmanager (1)
> **Prerequisites:** setup (2), install (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Testing ASP.NET Core applications: Preparations
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=0)** - Let's check out how we can test web applications using the knowledge we have gathered so far.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=8)** I have added a new class to our HplusSportTDD.Core project and article class.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=14)** Because this time I would like to display a few articles, and then of course I need a name and maybe also a price.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=21)** Then I've set up a new [asp.net](https://asp.net) core application.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=26)** And I would like to start MVC style.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=29)** So I've added a shop controller, a controller class.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=34)** And in that class, I have a static list of articles that just simplifies things a little bit.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=40)** Of course, we could also work with a database backend, and then we could mock that and then test the web application.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=48)** But so far this static list we'll do because it simplifies the test a little bit later.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=55)** And then I have an index page and the index page receives all of the articles as the model for the view, unless there is a search query, a query parameter.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=68)** And if that query parameter is sent along the request, then we only get those articles that contain the query parameter.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=79)** How does the view look like?
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=81)** I've just used the scaffolding feature in visual studio to set up that view here.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=88)** And I've added a simple HTTP get form where I can put in the query parameter.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=96)** The view is typed to I Enumerable of article.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=101)** And then for each loop just outputs all of the articles.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=108)** Let's see how that looks in the web browser.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=111)** It's shop controller, so /shop will do, and when we get a list of articles, two t-shirts and one windbreaker.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=119)** And if I just look for shirt, hit search, then I only get two results back.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/testing-asp-dot-net-core-applications-preparations?u=76281980&t=126)** And that's exactly the behavior I would like to test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** web (2), [[Search]] (2), [[ASP.NET Core]] (1), application (1), database (1)
> **Env Vars:** mvc (1), http (1)
> **Prerequisites:** set up (2)
> **URLs:** [asp.net](https://asp.net) (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - let (1)

#### Demo: Testing ASP.NET Core applications
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=0)** - [Instructor] I have already prepared a test project, HPlusSportTDD.Web.Tests.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=7)** And I've also added a class called WebTests.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=13)** I've added some usings here.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=15)** You see most of them are grayed out, but some of them won't be once we are done with the code.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=22)** And now, I would just recommend that we just add one or two tests to that class.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=29)** And remember, we are testing an MVC application.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=32)** The MVC application consists of controllers which are classes and action methods which are, well, methods.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=41)** So we can instantiate the ShopController class and then run the action methods and then do some assertions on the result.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=49)** And that's exactly how we can proceed here in that application.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=54)** So I'm adding a new test, and I just want to test whether there are actually articles provided as a model to the view.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=64)** So how about we call this ShouldShowArticles?
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=69)** And in here, I first instantiate the controller, and it works thanks to the usings without any control dot magic.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=79)** And then I can call the Index method of that controller.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=84)** However, the Index method expects a search query.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=88)** Since I don't want to search right now, I just use string.Empty.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=94)** The return value of the Index method is of type IActionResult, but if we look in the method, we see that we return a view, so we have a view result.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=106)** So I just do some casting.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=108)** And of course, I should also add error handling, but we don't need it just to demonstrate how testing an MVC application can be done.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=118)** So I'll just skip that and instead I'm optimistic and just say the viewResult is the result as a ViewResult.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=128)** And then I can access the model, the data which is sent to the view.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=134)** Again, I have to do casting because the viewResult.Model property is of type object, obviously.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=144)** So I can cast this as an IEnumerable of Article.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=149)** That should work.
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=151)** Well, and finally I can start my assertions.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=155)** So the number three is the number of articles that should be displayed.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=163)** So I can compare three with model.Count.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=168)** And that's basically it.
>
> **[2:51](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=171)** I arrange, I act, and I assert.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=177)** Let's save and build this and then switch over to the Test Explorer.
>
> **[3:02](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=182)** And here in the Test Explorer, we can already see the new test, ShouldShowArticles, and then we just run the test.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=194)** So I'll test, and it did, it's green.
>
> **[3:18](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=198)** Three articles is what we expect and three articles is what we get.
>
> **[3:24](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=204)** And maybe if we try the same trick twice but a little bit different, instead of ShouldShowArticles, we can now test ShouldFindArticles.
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=215)** And this time, we provide a search argument, for instance, shirt, because we have two t-shirts in the system.
>
> **[3:44](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=224)** But this time, we only expect two articles on the page, because you only have two t-shirts and one windbreaker.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=231)** And again, if you go back to Test Explorer, we see the new test.
>
> **[3:56](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=236)** And then once we run it, after a short while we'll see that everything is green again.
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=243)** And that's the basic approach, how you can test [ASP.NET](https://ASP.NET) Core applications when they're using MVC.
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=250)** You access the controllers, you instantiate the controllers, and then you run the action methods.
>
> **[4:15](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/demo-testing-asp-dot-net-core-applications?u=76281980&t=255)** And if there are any arguments that need to provide it to those action methods, you just supply them as well and then you check the results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (4), [[Search]] (3), web (1), data (1), [[ASP.NET Core]] (1)
> **Env Vars:** mvc (4), asp (1), net (1)
> **Code Identifiers:** viewresult (2)
> **URLs:** [asp.net](https://asp.net) (1)
> **Cross-References:** go back to (1)
> **Definitions:** we call this (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Testing an API
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=5)** - [Instructor] It's time for a final coding challenge.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=8)** I've added an API project using Asp.NetCore's web API.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=14)** I called it HPlusSportTDD.API.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=17)** and I have also added an article's controller as an API controller with a static list of articles.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=29)** The same three as before and two end points.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=32)** GetAll gives us all of the articles and GetSingle just gives us a specific article and returns it using the HTTP status code 200.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=44)** I've enabled the open API support.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=49)** So when we run this project, we get Swagger here and we see those two end points and we can try them out directly in the browser.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=56)** So, for the list of all of the articles well, we get them here, nicely formatted as Jason and for the second end point, we can also try it out and see what happens if you use the ID of say, three.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=71)** We executed and we get the green windbreaker.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=77)** And now the challenge.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=80)** First of all, test whether the API returns the articles we expect.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=85)** The number of articles is good enough.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=87)** So, that's really similar to what we did before in the Asp.NetCore.Mvc application.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=92)** Then, test or write a test that checks whether when we use an invalid ID.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=99)** For the GetSingle end point, whether we really get the HTTP status code 404 for not found because it's a restful API so that's what we expect.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=111)** Turns out.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=112)** No, that's not what we get.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=114)** So finally fix the code so that we do get the HTTP 404 status code in that case and so that all tests are green again.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/challenge-testing-an-api?u=76281980&t=125)** I think that should take you no longer than 10-15 minutes and after that, I'll be back with the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (7), web (1), application (1)
> **Env Vars:** api (7), http (3)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution: Testing an API
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=5)** - [Instructor] Usually, I would start by creating a new test project for all of the API tests, but to save us some time and effort, I'll just put the API tests within the WebTests here.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=18)** But first, I go to the dependencies of the test project, and then I need to make sure that I add a reference to the API project because we would like to work with the controller in the API project.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=34)** And then I just copy the existing WebTests class and call it ApiTests.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=41)** And rename the class in here as well.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=45)** And then we are ready to go.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=48)** I'll just remove the tests that are already in there, and create a new one.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=54)** And the first test I would like to create is one that just checks whether any articles are returned.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=63)** So we could call this ShouldReturnArticles.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=70)** And there, like before, we just instantiate the controller.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=75)** In that case, it's the new ArticlesController from the API project, so control dot, use the Controllers namespace from the API project, and then we can just do controller.GetAll.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=94)** And the nice thing is, if we have a look at the ArticlesController, the GetAll method returns an IEnumerable of Article.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=103)** Web API does all the magic that then creates JSON and sends the correct HTTP headers, et cetera.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=111)** But for our test, that's great.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=114)** No conversions necessary.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=116)** We just check whether the two things are equal three and the count of the items in the result.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=128)** And that's the test.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=129)** That's pretty nice and quick and easy, isn't it?
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=132)** This was the test for all of the articles.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=135)** Now let's continue with a test for a single article.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=141)** So I just copy this because the start looks rather similar and maybe I can rename it.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=147)** ShouldReturnAllArticles and then ShouldReturnSingleArticle, and it's a bit easier to read and easier to see.
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=154)** This time, we are calling GetSingle, and use, for instance, three as an argument.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=161)** Now what happens in that method?
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=164)** Let's take a look.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=166)** You search for the correct article, and then we return it using the Ok method, and Ok gives us an OkObjectResult, which contains the result and an HTTP status code of 200.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=178)** So that's something we could test for.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=181)** So we could try in other assertion method we haven't tried before, which is IsInstanceOf.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=190)** Of course you could also do casting, et cetera, et cetera, but I'm interested whether the result is an instance of the OkObjectResult.
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=199)** So typeof OkObjectResult.
>
> **[3:23](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=203)** And then we have verified whether that is the case.
>
> **[3:29](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=209)** The third test is what happens if we use an invalid ID.
>
> **[3:32](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=212)** So ShouldReturn404OnMissingArticle.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=218)** We could use, for instance, 42, which is not a valid ID.
>
> **[3:42](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=222)** And then there are several ways what we could try to test for now, but if you get a status code result, then the status code needs to be 404, and that's something we can test.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=233)** So we can go back to our standard AreEqual call, and we just use the result, try to convert it to a StatusCodeResult.
>
> **[4:07](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=247)** And if that is successful, we access the StatusCode, and this needs to be 404.
>
> **[4:14](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=254)** Otherwise, we just get null.
>
> **[4:15](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=255)** And these are the three tests.
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=258)** So let's see what happens in Test Explorer.
>
> **[4:21](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=261)** So I go to the Test Explorer, and then we already see that there are three ApiTests, which we can run now.
>
> **[4:31](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=271)** All articles, one single article, and the missing article.
>
> **[4:34](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=274)** And we see that checking for all articles works, checking for a single article worked as well, but the 404 test didn't work.
>
> **[4:44](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=284)** Why is that the case?
>
> **[4:45](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=285)** Well, because we are still lacking the implementation for that.
>
> **[4:49](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=289)** So let's go to the ArticlesController to fix it.
>
> **[4:53](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=293)** We are checking for an article with a given id and the article variable is null if the id doesn't exist.
>
> **[5:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=300)** So how about this?
>
> **[5:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=300)** If article == null, return NotFound.
>
> **[5:07](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=307)** That returns a NotFound result, which is a status code result with a status code of 404 built in.
>
> **[5:14](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/solution-testing-an-api?u=76281980&t=314)** And if we go back to the Test Explorer and try to rerun this test now, then this test turns green as well, and we've successfully tested our API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (8), web (1), [[JSON]] (1), [[Search]] (1)
> **Env Vars:** api (8), http (2), json (1)
> **UI Navigation:** go to (3)
> **Cross-References:** go back to (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for instance (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps with C#
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/next-steps-with-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/next-steps-with-c-sharp?u=76281980&t=0)** - [Christian] We are almost at the end of our journey, so what's next?
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/next-steps-with-c-sharp?u=76281980&t=5)** The first step is that you need to pick a testing framework and then stick with it and become proficient with it.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/next-steps-with-c-sharp?u=76281980&t=14)** So read the documentation, do some tutorials, and then get to know the framework inside-out.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/next-steps-with-c-sharp?u=76281980&t=23)** And the next recommendation I have is that you should train and exercise one of the most important aspects of the TDD process, refactoring, because if you're a proficient with refactoring, then it's easy for you not only to rearrange your application, but also to write great tests.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/next-steps-with-c-sharp?u=76281980&t=47)** There's a [[C- Refactoring Tips and Tricks]] course in the library and I would recommend that you watch it because it contains some great advice on how to do refactoring for your applications.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/next-steps-with-c-sharp?u=76281980&t=64)** Well, and then, it's ready to put theory into practice.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/next-steps-with-c-sharp?u=76281980&t=69)** So when creating your next application, it's always easier to start with a new one.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/next-steps-with-c-sharp?u=76281980&t=74)** Just use TDD and see how that goes.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/next-steps-with-c-sharp?u=76281980&t=77)** Thank you for watching that course.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-test-driven-development-14275015/next-steps-with-c-sharp?u=76281980&t=79)** See you next time here on LinkedIn Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (4), application (2), [[LinkedIn]] (1)
> **Env Vars:** tdd (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [christian] (1)


## Instructor

- [[Christian Wenz]]

## Resources

- Exercise files available

## Skills Covered

- Test-Driven Development
- C#

## Path Context

### In [[Elevating C- Skills- Building Robust Applications]]
← [[C- Interfaces and Generics]] | **4 of 8** | [[C- Exception and Error Handling]] →

## Appears In

- [[Elevating C- Skills- Building Robust Applications]]

## Related Courses

_Courses sharing skills:_

- [[JavaScript- Test-Driven Development (ES6)]] — Test-Driven Development
- [[Learning C-]] — C#
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[Test-Driven Development in C++]] — Test-Driven Development
- [[Nail Your C- Interview]] — C#

---

[↑ Back to top](#)