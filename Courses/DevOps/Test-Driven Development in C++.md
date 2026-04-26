---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: test-driven-development-in-c-plus-plus
url: "https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus"
duration_minutes: 141
duration: 2h 21m
level: Beginner
updated: 6/28/2018
learners: 12773
skills:
  - Test-Driven Development
  - C++
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQG1LffEqB8vcw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567115047000?e=2147483647&amp;v=beta&amp;t=AiFwlGSnm4ldxZxxiuKjJN83ofLvBFvgmpi8qld5w1o"
linkedin_topic: DevOps
learning_paths:
  - '[[Master C++]]'
prev_courses:
  - '[[Complete Guide to Parallel and Concurrent Programming with C++]]'
next_courses:
  - '[[C++ Design Patterns- Behavioral]]'
path_nav: '[{"path":"Master C++","position":3,"total":6,"prev":"Complete Guide to Parallel and Concurrent Programming with C++","next":"C++ Design Patterns- Behavioral"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/test-driven-development
  - skill/c
status: not-started
created: 2026-04-21
---

![Test-Driven Development in C++](https://media.licdn.com/dms/image/v2/C4E0DAQG1LffEqB8vcw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567115047000?e=2147483647&amp;v=beta&amp;t=AiFwlGSnm4ldxZxxiuKjJN83ofLvBFvgmpi8qld5w1o)

# Test-Driven Development in C++

> Every software developer wants to ship high-quality applications. Test-driven development (TDD) is a key discipline that can help you enhance your development process—and, in turn, your code base—by ensuring that crashes and bugs are addressed early on. In this course, join Richard Wells as he covers unit testing and TDD for C++ projects. Richard provides an overview of both unit testing and TDD, 

> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus) | 2h 21m | Beginner | 13K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Richard Wells]]

## Resources

- Exercise files available

## Skills Covered

- Test-Driven Development
- C++

## Table of Contents

### Introduction

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980&t=1)** - [Instructor] Hi, welcome to this course on Beginning Test Driven Development in C++.
>
> **[0:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980&t=7)** My name is Rich Wells and I'm a software engineer with over 20 years of experience in software development, much of that using C++.
>
> **[0:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980&t=15)** I'm passionate about writing quality software and test-driven development is a key discipline every software developer should practice to ensure the quality of their code.
>
> **[0:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980&t=24)** I'm excited to show you how to use this discipline in your everyday coding process to help ensure the quality of your code base.
>
> **[0:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980&t=33)** In this course, we'll go over what is unit testing and test-driven development and how will they help you?
>
> **[0:39](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980&t=39)** What is Google Test and how is it used with test-driven development?
>
> **[0:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980&t=43)** How to set up some common C++ development environments to use Google Test.
>
> **[0:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980&t=49)** What are some best practices for unit testing and test-driven development?
>
> **[0:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980&t=53)** And lastly, I'll walk through some hands-on coding sessions practicing test-driven development in C++.
>
> **[1:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980&t=60)** To follow along with this course, you should have a basic knowledge of C++.
>
> **[1:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980&t=65)** The examples in this course are fairly simple but some C++ knowledge is necessary.
>
> **[1:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980&t=70)** You should have a Windows, Linux, or Mac PC, as these operating systems support all the tools necessary for compiling and executing C++ programs with Google Test.
>
> **[1:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980&t=82)** Most of the examples in this course are performed using the Eclipse CDT IDE with the GNU C++ Compiler which is available for Windows, Linux, and Mac.
>
> **[1:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980&t=92)** I also provide examples of how to set up Google Test with the Clion IDE which is also available for Windows, Linux, and Mac, and with Visual Studio in Windows, and the Xcode IDE on Mac.
>
> **[1:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980&t=106)** So let's get started learning test-driven development for your C++ projects today.

> [!info]- Semantic Content
>
> **Env Vars:** ide (3), cdt (1), gnu (1)
> **Prerequisites:** set up (2)
> **Code Keywords:** let (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Overview of Test-Driven Development

#### What is unit testing?
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=1)** - [Instructor] In this lecture, we're going to start the course on test-driven development by defining what unit testing actually is.
>
> **[0:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=7)** We'll go over some of the common types of software testing, look more closely at the specifics of unit testing, and review a simple example.
>
> **[0:17](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=17)** So why do we go through the effort of writing and running unit tests?
>
> **[0:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=21)** 'Cause software bugs can hurt the business.
>
> **[0:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=23)** We don't want any bugs making it out to the field for our customers to see, as that can hurt our reputation and cause customers to look at using other products.
>
> **[0:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=33)** Software testing attempts to address this problem by catching any bugs in the software before they get to the field.
>
> **[0:40](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=40)** This is done systematically, with a multilayered approach, where each layer of testing provides a safety net for catching bugs before they get to the field.
>
> **[0:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=51)** There are several levels of testing which provides the layers of safety nets for catching any bugs that might be in the code.
>
> **[0:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=57)** The lowest level are unit tests.
>
> **[0:59](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=59)** Unit tests validate individual functions in the production code.
>
> **[1:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=63)** Unit tests are generally the most comprehensive tests, which it tests all positive and negative test cases or function.
>
> **[1:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=71)** Next comes component level testing, which tests the external interfaces for individual components.
>
> **[1:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=78)** Components are essentially a collection of the functions.
>
> **[1:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=82)** Then comes system-level testing, which tests the external interfaces at a system level.
>
> **[1:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=88)** Systems can be collections of components, or of subsystems.
>
> **[1:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=93)** And lastly comes performance testing, which tests systems and subsystems at expected production loads to verify that response times and resource utilization such as memory, CPU and disk usage are acceptable levels.
>
> **[1:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=111)** Now let's look at some specifics on unit testing.
>
> **[1:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=114)** Unit testing tests individual functions in the code.
>
> **[1:59](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=119)** Each test case for the function should have a corresponding unit test.
>
> **[2:04](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=124)** Groups of unit tests can be combined into test suites, which can help with organizing the tests.
>
> **[2:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=132)** A unit test should execute in your development environment rather than the production environment.
>
> **[2:17](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=137)** This is important to ensure you can run them easily and often.
>
> **[2:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=141)** And lastly, a unit test should be implemented in an automated fashion.
>
> **[2:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=146)** You should be able to click a button and the unit test will build and execute and show you the results.
>
> **[2:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=153)** Here we have a very simple example showing a unit test for a bit of production code.
>
> **[2:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=158)** The production code is a function that returns the length of a passed-in string.
>
> **[2:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=162)** Unit test is a single positive test case that verifies a length of one is returned for a string with one character in it.
>
> **[2:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=170)** The test call is a Google Test macro for specifying that a function is a test, and it's passed in the name of the test cases and the actual test name.
>
> **[3:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=180)** A unit test performs three steps.
>
> **[3:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=182)** A setup step, where it creates the test string, an action step where it calls the production code to perform the action that is under test, an assertion step where the test validates the results of the action.
>
> **[3:17](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=197)** This is a common structure that all of your unit tests should follow.
>
> **[3:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=202)** To summarize, here are the key points on unit testing.
>
> **[3:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=207)** Unit tests are our first safety net for catching bugs in the production code.
>
> **[3:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=212)** Unit tests validate test cases for individual functions.
>
> **[3:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=218)** They should be built and run in the development environment.
>
> **[3:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=223)** And lastly, unit test should run fast.
>
> **[3:45](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=225)** We ideally want a developer rerunning the unit test every three to five minutes and this can be difficult with a slow build process, or if any of the test runs slow, i.e.
>
> **[3:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=236)** for more than a few seconds.
>
> **[3:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=238)** In the next lecture, we'll go over what test-driven development is.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (1)
> **Definitions:** is a  (5)
> **Env Vars:** cpu (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### What is test-driven development?
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=0)** - [Instructor] In this lecture, we're going to talk about what test-driven development is and how it helps to ensure you're writing high-quality and bug-free code.
>
> **[0:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=9)** So what is test-driven development, or TDD?
>
> **[0:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=12)** TDD is a process for writing code that helps you take personal responsibility for the quality of your code.
>
> **[0:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=18)** The process drives this by having you write the unit tests before the production code.
>
> **[0:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=23)** This can seem pretty strange at first.
>
> **[0:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=25)** But after you've used the process for a while, it becomes the norm, and you'll find it hard to write code any other way.
>
> **[0:31](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=31)** Even though the tests are written before the production code, that doesn't mean that all the tests are written first.
>
> **[0:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=37)** You write one unit test for one test case, and then you write the production code to make it pass.
>
> **[0:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=42)** The tests and the production code are written together, with small tests being written and then small bits of production code that make those tests pass.
>
> **[0:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=50)** This short cycle of writing a unit test and then writing the production code to make it pass provides immediate feedback on the code.
>
> **[0:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=58)** This feedback is one of the essential features of TDD.
>
> **[1:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=62)** So what are some of the benefits of using TDD?
>
> **[1:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=65)** TDD gives you confidence to make changes in your code because you have a test before you begin that verifies the code is working and will tell if any of your changes have broken anything.
>
> **[1:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=76)** This confidence comes from the immediate feedback the test provides for each small change in the production code.
>
> **[1:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=82)** The tests document what the production code is supposed to do.
>
> **[1:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=86)** A new developer looking at the code can use the unit test as a source for documentation for understanding what the production code is doing.
>
> **[1:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=94)** Writing the unit test first helps drive good object-oriented design, as making individual classes and functions testable in isolation drives the developer to break dependencies and add interfaces rather than making concrete implementations together directly.
>
> **[1:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=112)** TDD was created by Kent Beck in the mid-1990s as part of his work for the Chrysler Corporation, where he also created Extreme Programming, of which TDD is just a part.
>
> **[2:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=123)** He then went on to create one of the first unit testing frameworks for TDD in Smalltalk, called SUnit.
>
> **[2:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=129)** Then he collaborated with Erich Gamma to implement the first Java unit testing framework, CALLED JUnit.
>
> **[2:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=136)** JUnit has since been the basis for many other xUnit testing frameworks implemented for other languages.
>
> **[2:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=144)** The TDD workflow is broken up into three phases, referred to as the red phase, green phase, and refactor phase.
>
> **[2:31](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=151)** The first phase is the red phase.
>
> **[2:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=154)** In the red phase, you write a failing unit test for the next bit of functionality you want to implement in the production code.
>
> **[2:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=161)** Next comes the green phase, where you write just enough production code to make the failing unit test pass.
>
> **[2:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=167)** Last is the refactor phase, where you clean up the unit test and the production code to remove any duplication and make sure the code follows your team's coding standards and best practices.
>
> **[2:59](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=179)** Then you repeat the process for all the functionality you need to implement and all the positive and negative test cases.
>
> **[3:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=187)** Robert Martin, a.k.a Uncle Bob, created the following laws of TDD in his book Clean Code: A Handbook of [[Agile Software Development]].
>
> **[3:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=195)** These laws help ensure you're following the TDD process.
>
> **[3:19](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=199)** The first law, you may not write any production code until you have first created a failing unit test, follows along with the idea of writing the unit test first.
>
> **[3:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=208)** Seeing your new unit test fail before you've implemented the production code is a sign that the unit test has been implemented properly.
>
> **[3:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=216)** The second law, you may not write more of a unit test than is sufficient to fail, forces you to write only enough of a unit test for the next test case, and the next test case should always be the simplest test case.
>
> **[3:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=230)** The last law, you may not write more production code than is sufficient to pass the currently failing unit test, keeps you from writing production code without any unit tests to verify it.
>
> **[4:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=240)** These three laws help to keep you in a small tight loop of writing a little test that fails, then writing a little production code to make it pass.
>
> **[4:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=249)** Each iteration of the loop should only be a few minutes long, and you're always running the unit test to verify nothing has gotten broken.
>
> **[4:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=256)** If something does get broken, you can easily back out the changes that caused the problem because you implemented them in just the last couple of minutes.
>
> **[4:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=266)** Here are a couple of great books to pick up to help you with learning test-driven development.
>
> **[4:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=270)** Kent Beck's book Test-Driven Development: By Example is a great book from the creator of test-driven development, with a detailed case study on using TDD.
>
> **[4:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=281)** Robert Martin's Clean Code: A Handbook of Agile Software Craftsmanship provides the three laws of TDD, as well of a lot of other expert guidance on writing clean and maintainable code.
>
> **[4:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=293)** In the next lecture, we'll go through a working example to see TDD in action.

> [!info]- Semantic Content
>
> **Env Vars:** tdd (14), called (1)
> **Code Keywords:** pass (6), case, (2), while, (1), case. (1)
> **CLI Commands:** make (7), find (1)
> **Definitions:** is a  (3)
> **Code Identifiers:** xunit (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [instructor] (1)

#### Example: TDD session, the FizzBuzz kata
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=0)** - [Instructor] In this lecture, we're going to walk through an actual test-driven development coding session.
>
> **[0:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=5)** For the example, we'll be using the fizzBuzz code kata.
>
> **[0:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=8)** The name kata comes from martial arts and means training exercises.
>
> **[0:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=12)** So code kata are training exercises for programmers.
>
> **[0:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=15)** The fizzBuzz Kata is pretty simple.
>
> **[0:17](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=17)** We'll be implementing a function that is passed in an integer value as an input and the function will return the string fizz if the passed-in number is a multiple of three, Buzz if the passed-in number is a multiple of five, and fizzBuzz if the passed-in number is a multiple of three and five.
>
> **[0:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=34)** If the value is not a multiple of three or five, then the value itself is returned as a string.
>
> **[0:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=41)** I'll be using Eclipse as my IDE for this example, and all the example coding sessions for this course.
>
> **[0:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=47)** But the TDD process should apply regardless of the IDE you're using.
>
> **[0:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=51)** In some of the future lectures, I'll show you how to build and use Google tests and some of the other common IDEs as well.
>
> **[0:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=57)** Okay, so let's get started.
>
> **[1:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=60)** On the screen I've got a basic test that I can use just to verify that things compile, link, and execute properly.
>
> **[1:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=67)** So we can run it, and we see that our unit test compiles and executes successfully.
>
> **[1:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=74)** This tells me that I've got Google Test set up in my project correctly, and I'm ready to start writing tests.
>
> **[1:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=81)** I've got a Google Test runner plugin installed in Eclipse and that's what you see here at the bottom of the screen.
>
> **[1:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=87)** The test runner shows all the tests that were executed and if they passed or failed, and this green bar on the right hand side shows if all the tests passed or not.
>
> **[1:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=96)** When it's green, then all the tests pass.
>
> **[1:39](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=99)** If any of the tests fail, this bar will turn red.
>
> **[1:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=102)** This is a typical layout for a test runner in an xUnit type testing framework.
>
> **[1:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=107)** In this file on the right hand side, I've got the list of test cases that I want to implement.
>
> **[1:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=112)** These should be in order of increasing complexity from the simplest test case to the most complex.
>
> **[1:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=117)** There are more complex test cases that can be added, but I think this is enough for this demonstration.
>
> **[2:04](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=124)** Okay, so let's implement our first test case.
>
> **[2:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=127)** Can I call fizzBuzz?
>
> **[2:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=129)** To start, we enter the red phase, and in the red phase, I need to implement a failing unit test.
>
> **[2:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=136)** So I'm gonna repurpose this assert true test case to validate that I can call the fizzBuzz function.
>
> **[2:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=145)** Okay.
>
> **[2:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=146)** Can call fizz buzz.
>
> **[2:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=152)** I remove the assert true, and in standard string result equals fizzBuzz.
>
> **[2:45](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=165)** And when I try to execute that, there's errors.
>
> **[2:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=170)** Look up the errors.
>
> **[2:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=172)** Undeclared identifier fizzBuzz.
>
> **[2:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=176)** Now I have a compile error because the fizzBuzz function does not exist and per our three laws of TDD, not compiling is equivalent to failing.
>
> **[3:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=185)** So we've successfully implemented a failing unit test which means we've completed the red phase.
>
> **[3:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=190)** So now we move on to the green phase.
>
> **[3:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=193)** We need to make this test pass.
>
> **[3:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=195)** We can do that pretty simply by implementing the fizzBuzz function.
>
> **[3:19](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=199)** This shouldn't be the final implementation of the function, this should just be enough to make this test pass.
>
> **[3:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=205)** So I'll do that now.
>
> **[3:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=213)** Int value.
>
> **[3:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=228)** And that passes.
>
> **[3:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=231)** Excellent, we've made our unit test pass with the simplest change we could make to the production code.
>
> **[3:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=236)** We're done with the green phase and it's time to go on to the refactor phase.
>
> **[4:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=240)** Is there anything to refactor here?
>
> **[4:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=243)** I don't think so, there's nothing here yet.
>
> **[4:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=245)** So let's mark this as complete in our to do list, and then go ahead and move right back to the red phase and restart our TDD cycle with a next test case.
>
> **[4:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=253)** So I'll go ahead and mark that one as complete.
>
> **[4:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=258)** Okay, so on to the next test case.
>
> **[4:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=261)** I need a string one returned when I pass in a value of 1.
>
> **[4:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=265)** I'm in the red phase, so my first step is to implement a failing unit test for this functionality.
>
> **[4:31](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=271)** Okay.
>
> **[4:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=273)** Test fizz buzz.
>
> **[4:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=276)** Test returns one when passed in with one passed in.
>
> **[4:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=287)** Okay.
>
> **[4:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=290)** Standard string result equals fizzBuzz(1).
>
> **[5:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=300)** Assert string equals one result dot C string.
>
> **[5:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=312)** Okay.
>
> **[5:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=314)** And that fails.
>
> **[5:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=316)** We see it's for our new test case, that it's failed.
>
> **[5:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=320)** Good, okay, so now that we've got our failing unit test, we can go to the green phase and make this test pass.
>
> **[5:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=327)** To make this test pass, we'll need to make the simplest change we can to the production code that will make it pass without breaking any of the other tests.
>
> **[5:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=336)** That should be pretty easy in this case.
>
> **[5:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=338)** We'll just modify the code to always return a string of one.
>
> **[5:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=342)** So instead of the empty string, let us always return one.
>
> **[5:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=348)** And that makes the test pass, and both my original test and the new test pass.
>
> **[5:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=353)** There we go, all of our tests pass now, so on to the refactoring phase.
>
> **[5:59](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=359)** Is there anything here to refactor?
>
> **[6:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=360)** Is there any duplication?
>
> **[6:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=362)** There is.
>
> **[6:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=365)** This call to fizzBuzz is duplicated in both of my tests.
>
> **[6:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=369)** That first test case is no longer really needed as the second test case validates that fizzBuzz can be called.
>
> **[6:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=375)** I'm gonna go ahead and remove that first test case.
>
> **[6:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=384)** Okay, I don't think there's any more refactoring to be done.
>
> **[6:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=387)** Let's mark this test case complete, and then back to the red phase in the next test case.
>
> **[6:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=395)** Mark it complete.
>
> **[6:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=398)** Okay, third test case.
>
> **[6:40](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=400)** In this test case, I'm going to need to return a string of two when a value of two is passed in.
>
> **[6:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=406)** I'm in the red phase, so the first thing I'm going to do is implement a failing unit test.
>
> **[6:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=417)** Fizz buzz test.
>
> **[7:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=421)** That's actually tests.
>
> **[7:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=425)** Returns two with two passed in.
>
> **[7:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=434)** (whistling) Okay.
>
> **[7:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=447)** Result equals fizzBuzz(2).
>
> **[7:31](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=451)** Assert string equals two result dot C string.
>
> **[7:39](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=459)** Google Test does its string comparison on C style strings, so we cast the standard string to a C string here.
>
> **[7:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=467)** Okay, so we've got our new unit test written, and it fails.
>
> **[7:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=474)** Okay, now that we've got the failing unit test, I can go to the green phase and update the production code to make the test pass.
>
> **[8:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=482)** I'll make this test pass by generalizing production code.
>
> **[8:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=486)** I'll make it more generalized by converting the passed in value to a string, and this is a common practice with TDD.
>
> **[8:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=493)** You'll implement some functionality in a very specific way in one test case just to make that test case pass, and then you'll generalize that production code in other test cases to make all the test cases pass.
>
> **[8:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=507)** So instead of returning this very specific one, I will convert this to a string.
>
> **[8:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=521)** And now my tests pass.
>
> **[8:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=528)** And now that the test is passing, we can go on to the refactoring phase.
>
> **[8:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=533)** Now in the refactoring phase, we will look for any duplication or other cleanup in the code.
>
> **[8:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=538)** Is there any duplication here?
>
> **[9:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=540)** The structure between our two tests is duplicated.
>
> **[9:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=543)** Let's refactor that into a simple utility function that can be used by our test.
>
> **[9:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=548)** Okay.
>
> **[9:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=550)** So, I'm going to create a void check fizz buzz function, which is passed in the integer value that we want to test with, and the expected result string and in this function, we will follow the same pattern.
>
> **[9:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=588)** (whistling) Expected result.
>
> **[9:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=593)** C string result dot C string.
>
> **[10:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=602)** Which means both of my test cases here to use that new checkFizzBuzz() utility function,
>
> **[10:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=627)** and after all these changes, I rerun my tests to see that they still pass.
>
> **[10:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=633)** Okay, great.
>
> **[10:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=635)** Let's mark off this test case and we'll move on to the next.
>
> **[10:40](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=640)** We mark that complete.
>
> **[10:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=644)** Okay.
>
> **[10:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=646)** In this test case, things are gonna start to get a little interesting.
>
> **[10:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=650)** We're going to make the code return Fizz when a value of three is passed in.
>
> **[10:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=654)** Again, we're in the red phase, so our first step is to implement a failing unit test.
>
> **[10:59](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=659)** We'll use our utility function to implement it.
>
> **[11:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=666)** Test fizz buzz test.
>
> **[11:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=676)** Returns fizz with three passed in.
>
> **[11:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=685)** Check fizzBuzz three Fizz.
>
> **[11:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=692)** And, the new test fails.
>
> **[11:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=697)** Okay, now that we have a failing unit test, we'll go ahead and move on to the green phase and make this test pass.
>
> **[11:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=704)** We want to make the smallest and simplest change we can to the production code to make this test pass.
>
> **[11:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=710)** That can be very specific for this test case, and then we'll generalize it as we need to in the future for future test cases.
>
> **[11:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=717)** So for this test, I'm gonna update the production code to check if three is passed in, and if so, return Fizz.
>
> **[12:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=731)** If value three equals value, return fizz.
>
> **[12:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=745)** Great.
>
> **[12:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=746)** Okay, our test is passing.
>
> **[12:29](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=749)** Let's move on to the refactoring phase.
>
> **[12:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=752)** Is there anything to refactor?
>
> **[12:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=754)** I don't think so.
>
> **[12:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=755)** Let's mark this test case complete, and then back to the red phase to enter another iteration of the TDD cycle.
>
> **[12:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=763)** Let's mark this complete.
>
> **[12:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=767)** Okay, this next test case is very similar to the last test case.
>
> **[12:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=772)** Here, we want to make fizzBuzz return Buzz when the value five is passed in.
>
> **[12:59](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=779)** So let's implement the failing unit test.
>
> **[13:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=785)** Test fizzBuzz test returns buzz with five passed in.
>
> **[13:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=800)** Check fizz buzz five buzz.
>
> **[13:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=810)** And it fails.
>
> **[13:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=812)** Okay, now we're in the green phase, and we'll make this test pass by adding another if condition to the production code.
>
> **[13:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=823)** If five equals value, return buzz.
>
> **[13:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=835)** Easy.
>
> **[13:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=836)** Okay, so now we go to the refactoring phase.
>
> **[13:59](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=839)** Is there anything to refactor?
>
> **[14:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=842)** It doesn't really look like it at this point.
>
> **[14:04](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=844)** Let's move on with the next test case.
>
> **[14:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=847)** So we'll mark this off.
>
> **[14:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=852)** Okay, now in this test case, we want to generalize the production code to not just return Fizz for the value of three, but for three or any multiple of three.
>
> **[14:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=862)** We're in the red phase, so let's write our failing unit test.
>
> **[14:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=870)** Fizz buzz test returns fizz with six passed in, six being a multiple of three.
>
> **[14:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=884)** Check fizz buzz three, oops.
>
> **[14:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=888)** Six fizz.
>
> **[14:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=894)** Okay.
>
> **[14:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=898)** Okay, we have our failing unit test, so let's go to the green phase and make it pass.
>
> **[15:04](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=904)** We're gonna modify the if statement for the three to have it use the modulus operator to see if the remainder of three is 0.
>
> **[15:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=913)** Let's make that change.
>
> **[15:17](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=917)** If 0 equals three, no, value modulus three.
>
> **[15:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=930)** And that makes our test pass.
>
> **[15:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=934)** Okay.
>
> **[15:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=935)** Great.
>
> **[15:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=937)** So let's refactor.
>
> **[15:39](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=939)** I think this fizzBuzz function could use a little cleanup to make those if statements a little bit cleaner.
>
> **[15:45](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=945)** I also don't like the multiple return statements.
>
> **[15:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=948)** I think I'm gonna leave those for now, so let's do the next test case.
>
> **[15:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=956)** Mark that off.
>
> **[16:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=961)** Okay, so this test case is basically a repeat again of the previous test case, but this time we want to return Buzz for multiples of five.
>
> **[16:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=970)** Let's implement the failing unit test because we're in the red phase.
>
> **[16:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=978)** Test fizz buzz tests, returns buzz with 10 passed in.
>
> **[16:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=992)** Check fizz buzz 10 buzz.
>
> **[16:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1002)** Okay, and now we'll make it pass like we did before using the modulus operator.
>
> **[16:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1011)** 0 equals value mod five.
>
> **[17:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1022)** Okay, this is getting to be routine.
>
> **[17:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1025)** All right, let's refactor.
>
> **[17:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1027)** Is there anything to refactor here, any duplication?
>
> **[17:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1030)** The expression in the two if statements in fizzBuzz are pretty much identical.
>
> **[17:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1034)** I'm going to go ahead and extract those into a isMultiple() utility method, try and make the code a little bit cleaner.
>
> **[17:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1042)** So I'll do that now.
>
> **[17:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1044)** Bool isMultiple.
>
> **[17:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1047)** Int value, int base.
>
> **[17:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1053)** Return 0 equals value mod base.
>
> **[17:45](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1065)** And then I'll modify the if statements to use the new utility function, hopefully make the code a little more readable,
>
> **[18:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1081)** and validate that my unit tests still pass.
>
> **[18:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1085)** Great.
>
> **[18:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1086)** Okay, on to the last test case.
>
> **[18:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1089)** In this final test case, we're gonna return FizzBuzz if the passed in value is a multiple of three and five.
>
> **[18:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1096)** We're in the red phase again, so let's go ahead and implement the failing unit test.
>
> **[18:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1110)** Returns Fizz Buzz with 15 passed in.
>
> **[18:40](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1120)** Check fizz buzz 15 Fizz Buzz.
>
> **[18:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1130)** Okay.
>
> **[18:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1132)** All right, we have our failing unit test.
>
> **[18:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1135)** Now let's enter the green phase and make it pass.
>
> **[18:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1138)** You're gonna make this pass pretty simply by adding another if statement to the fizzBuzz function, checking if the value is a multiple of three and five.
>
> **[19:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1150)** Okay.
>
> **[19:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1152)** If isMultiple() value, three and is multiple value, five, return Fizz Buzz.
>
> **[19:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1175)** And it passes.
>
> **[19:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1177)** Excellent.
>
> **[19:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1178)** Our code is now passing all the test cases, so on to the refactoring phase.
>
> **[19:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1183)** Anything to refactor here?
>
> **[19:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1186)** I think this looks pretty good at this point and no more refactoring is really necessary for this simple implementation, so that completes the fizzBuzz code kata.
>
> **[19:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1196)** In the exercises for the course, I'll provide some additional things you can do to add to this code kata to make it more challenging.
>
> **[20:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1203)** In the next lecture, I'm gonna go over downloading and compiling Google Test, and getting it set up in Eclipse with a unit test runner plugin.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (26), let (21), function (14), case. (11), case, (7)
> **CLI Commands:** make (27)
> **Code Identifiers:** fizzbuzz (20), ismultiple (3), xunit (1), checkfizzbuzz (1)
> **Env Vars:** tdd (5), ide (2)
> **Definitions:** is a  (7)
> **UI Navigation:** go to (4)
> **Cross-References:** in the next (2)
> **Prerequisites:** set up (2)


### 2. Setting Up Your Development Environment

#### Set up Google Test with Eclipse
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=0)** - [Instructor] In this lecture, I'm going to walk through downloading and compiling Google Test C++ unit testing framework.
>
> **[0:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=6)** And then getting it set up to run in the Eclipse CDT C++ IDE.
>
> **[0:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=12)** The framework is patterned on the typical X unit type testing frameworks and compiles on Linux, Windows, and Mac environments.
>
> **[0:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=20)** To follow along with this lecture, you'll need to have a recent version of the Eclipse CDT IDE installed.
>
> **[0:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=27)** CDT stands for CC++ development tool.
>
> **[0:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=30)** This is a C++ flavor of the popular open source Eclipse IDE.
>
> **[0:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=36)** You'll also need to have C++ compiler and CMake installed.
>
> **[0:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=41)** The most common C++ compiler from any Posix environment is the Gnu C++ compiler.
>
> **[0:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=47)** Another option is the CLion C++ compiler.
>
> **[0:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=50)** In addition to that, you'll need to have CMake installed for the build process.
>
> **[0:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=54)** For the lecture, I'm gonna be working in Mac OS 10 but the set of steps to build Google Test and integrate it with Eclipse CDT should be essentially the same in Linux or Cygwin on Windows.
>
> **[1:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=68)** The Google Test library's stored on GitHub.
>
> **[1:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=71)** So the first step is I'm going to get the latest source code for the Google Test library by cloning the Git Repo from the command line.
>
> **[1:19](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=79)** So, let's go ahead and do that now.
>
> **[1:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=82)** First, I'm going to copy the URL for the repo.
>
> **[1:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=90)** And then for my command line, git clone and that URL.
>
> **[1:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=106)** And that downloads all the latest source code for Google Test into a Google Test directory.
>
> **[1:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=115)** Okay.
>
> **[1:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=117)** Now I'm gonna clone the repo.
>
> **[1:59](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=119)** I can go ahead and build the library.
>
> **[2:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=122)** Google Test uses CMake for building the library in Posix type environments, like Linux, Mac OS, and Cygwin on Windows.
>
> **[2:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=130)** So, first I'm going to make a build directory and then I'm gonna run CMake from that directory.
>
> **[2:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=136)** CMake will then generate the make file I need to build the library.
>
> **[2:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=142)** Make directory build.
>
> **[2:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=144)** Cd build.
>
> **[2:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=147)** CMake dot dot slash.
>
> **[2:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=153)** And now I see my make file.
>
> **[2:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=156)** Once CMake is completed, I can list the contents of the build directory and see the make file.
>
> **[2:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=162)** Now I can run make and actually build the library.
>
> **[2:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=177)** Now that the build's complete, I can see there's a Google Mock folder in the build directory, and inside that is the Google Test directory.
>
> **[3:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=191)** The Google Test directory contains the output library files that we'll be using.
>
> **[3:19](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=199)** That's libgtest.a and libgtest_main.a.
>
> **[3:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=204)** Google Mock is the library for creating mock objects, which are test objects that can be very useful during unit testing.
>
> **[3:31](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=211)** Google Mock was combined with the Google Test library recently, which is why you see references to it here.
>
> **[3:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=218)** I'll be providing a course on advanced tester developments C++, where I'll go over the usage of Google Mock to help you with getting your unit tests to run in isolation.
>
> **[3:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=228)** Now that I've got Google Test built, I can look at integrating it with the Eclipse CDT IDE.
>
> **[3:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=234)** To do that, I need to install the Eclipse C++ unit testing support plugin.
>
> **[4:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=240)** I'll do that by bringing up the Install New Software window, selecting the Eclipse download site from my version of Eclipse, and then selecting the C++ unit testing support plugin in the programming languages section.
>
> **[4:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=253)** So, let's go ahead and do that now.
>
> **[4:17](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=257)** I'll look at Help, Install New Software.
>
> **[4:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=263)** And I'll install from the Eclipse download site.
>
> **[4:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=267)** Okay.
>
> **[4:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=268)** So, now I'll go to the programming languages section.
>
> **[4:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=272)** And I will select CC++ Unit Testing Support.
>
> **[4:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=277)** Click Next.
>
> **[4:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=281)** And select that.
>
> **[4:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=282)** Click Next.
>
> **[4:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=284)** I accept the license agreement.
>
> **[4:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=286)** And then Finish.
>
> **[4:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=291)** And now Eclipse will need to restart.
>
> **[4:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=298)** Okay.
>
> **[4:59](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=299)** Now that I have the plugin installed, I'll set up a new C++ project to test that I can create the C++ binary, using the Google Test libraries.
>
> **[5:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=308)** I'll also set up a run configuration using the Google Test test runner that is installed with the C++ unit testing support plugin.
>
> **[5:17](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=317)** First, I'll create a new C++ project and I'll verify that it compiles and shows the hello world output.
>
> **[5:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=325)** So, let's do File, New, C++ Project.
>
> **[5:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=333)** GT Tests.
>
> **[5:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=338)** Mac OS 10.
>
> **[5:39](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=339)** Hello World.
>
> **[5:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=347)** Okay, let's see if that compiles.
>
> **[5:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=355)** It does.
>
> **[6:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=361)** And let's see it execute.
>
> **[6:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=372)** Can it run successfully?
>
> **[6:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=374)** Okay.
>
> **[6:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=375)** Now that I have the project set up, I'm gonna go ahead and modify the code for simple Google Test assert, unit test that should always pass.
>
> **[6:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=386)** So, first I include the Google Test library.
>
> **[6:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=396)** Header file.
>
> **[6:40](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=400)** And I'm gonna delete name.
>
> **[6:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=403)** So, I should be included with the Google Test libraries.
>
> **[7:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=420)** Okay.
>
> **[7:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=434)** Okay.
>
> **[7:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=435)** When I try to compile this, this doesn't compile right because the project doesn't know about the path to the Google Test headers.
>
> **[7:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=442)** Let's go ahead and fix that now.
>
> **[7:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=444)** So, I'm gonna right-click on the project and then click on Properties.
>
> **[7:31](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=451)** Then I'm going to go to C++ General Paths and Symbols.
>
> **[7:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=457)** Under Gnu C++ I'm gonna add a new include directory path.
>
> **[7:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=475)** Okay.
>
> **[7:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=478)** Let's see how that builds.
>
> **[8:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=483)** Okay.
>
> **[8:04](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=484)** That gets me past the problem of the include file, but now the linker's complaining.
>
> **[8:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=488)** It looks like it's complaining that it doesn't have a main function.
>
> **[8:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=492)** The main function is actually included with Google Test.
>
> **[8:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=495)** So I need to update the project to know the path to the Google Test libraries and to link with those libraries.
>
> **[8:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=501)** So let's do that now.
>
> **[8:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=503)** Right-click on the project, select the properties.
>
> **[8:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=507)** Under Library Paths, let's add the path to the Google Test libraries.
>
> **[8:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=515)** So we'll need Google Test.
>
> **[8:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=518)** And Google Mock is where the actual libraries are.
>
> **[8:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=523)** Under Build, Google Mock.
>
> **[8:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=526)** And then gtest.
>
> **[8:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=528)** Under gtest we have libgtest_main and libgtest.
>
> **[8:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=533)** So, we'll add the path to that directory and then we will add gtest_main and gtest to our list of additional... Libraries.
>
> **[9:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=556)** And now compile successfully.
>
> **[9:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=558)** And if I execute it, it executes successfully.
>
> **[9:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=564)** But it's a simple text output.
>
> **[9:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=567)** I want to have the green bar like I had with the fizzbuzz example.
>
> **[9:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=570)** I'm going to create a new run configuration using the Google Test test runner installed with the C++ unit testing plugin.
>
> **[9:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=578)** So, to do that, I'm gonna click on the down arrow next to the Run button.
>
> **[9:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=583)** I'm gonna select Run Configurations.
>
> **[9:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=593)** From there I'm going to add a new C++ unit test.
>
> **[10:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=600)** So, I'm gonna call it GTTests Unit Tests.
>
> **[10:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=607)** And then I'm going to select the Google Test Runner.
>
> **[10:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=613)** Which I run now.
>
> **[10:17](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=617)** Looks like everything passes successfully and we get our green bar.
>
> **[10:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=622)** At that point, we're all set.
>
> **[10:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=624)** I've got a C++ project in Eclipse using Google Test and a test runner showing me the results of my test.
>
> **[10:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=632)** In the next lecture, I'll walk through the same process but in Windows with Visual Studio.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (2), new, (1), assert (1), pass (1)
> **Env Vars:** cdt (5), ide (4), url (2)
> **Prerequisites:** set up (4), install (4), you'll need (2)
> **CLI Commands:** make (6), git (2), cd (1)
> **UI Navigation:** go to (2), right-click (2), click on (2), select the (2)
> **Tools:** command line (2), github (1), visual studio (1)
> **Code Identifiers:** libgtest_main (2), gtest_main (1)
> **Exercise Files:** source code (2), clone the repo (1)

#### Set up Google Test with Visual Studio
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=0)** - [Instructor] In this lecture, I'm gonna walk through downloading the Google Test C++ unit testing framework, and then building it and getting it set up with a test runner in Windows with Microsoft Visual Studio.
>
> **[0:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=11)** The framework is patterned on the typical X-unit type testing frameworks and compiles on Linux, Windows, and Mac environments.
>
> **[0:19](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=19)** For you to follow along with this lecture, you'll need to have a recent version of Visual Studio installed.
>
> **[0:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=25)** The first step is to download the Google Test Library, which is stored here on GitHub.
>
> **[0:31](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=31)** I'll be using the Windows Git client to clone the Google Test repo.
>
> **[0:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=36)** This requires that you have the Windows GitClient installed, but you can also download the latest source code from GitHub as a zip file instead.
>
> **[0:45](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=45)** So the first step is, I'm going to click this button and highlight the URL for the repo.
>
> **[0:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=53)** Then, I'm going to go to the command line and clone the repo using git.
>
> **[1:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=63)** Okay, now that I've cloned the repo, I can go ahead and build the library.
>
> **[1:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=68)** The Google Test files includes a solution and project files for building Google Test inside of Visual Studio.
>
> **[1:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=75)** The solution files are in the Google Test Microsoft Visual C directory of the repo.
>
> **[1:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=80)** When I open the solution, therefore, a different of Visual Studio, but I'll go ahead and let Visual Studio upgrade.
>
> **[1:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=88)** So Windows Explorer, I'll go into my Google Test directory.
>
> **[1:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=95)** And Google Test and MSVC, on 10 and GTestSolution.
>
> **[1:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=113)** Okay, I'm gonna go ahead and let Visual Studio upgrade the solution to this version of Visual Studio.
>
> **[2:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=122)** Now that the solution is open, I'll go ahead and build a release version of the Google Test libraries.
>
> **[2:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=128)** So I'll change this from debug to release, and then I will rebuild the solution.
>
> **[2:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=158)** Okay, so with the Google Test libraries created, I can go ahead and create a new Visual Studio C++ project to test them.
>
> **[2:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=166)** So I'll close this solution and I'll create a new project.
>
> **[2:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=178)** And it's gonna be a C++ Windows Console Application, which I will put in this directory, and I will call it GTTests.
>
> **[3:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=206)** Okay, so let's go ahead and make sure this can compile and do something.
>
> **[3:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=228)** Make sure I get all my certain name spaces.
>
> **[3:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=233)** And it should build.
>
> **[3:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=236)** Then I can run it.
>
> **[4:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=241)** Now I'm gonna go ahead and change the code to implement a simple unit test with GTest that just asserts true, so I'll add the GTest header file.
>
> **[4:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=258)** And I'm going to remove the main and change this to a test function.
>
> **[4:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=265)** GTTest, assert true.
>
> **[4:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=273)** Assert true true.
>
> **[4:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=284)** Okay.
>
> **[4:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=287)** Alright, here I can see that I've got a compile on the include statement.
>
> **[4:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=292)** I'm gonna need to add the Google Test include directory to the project.
>
> **[4:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=297)** First, I wanna change the project to use a release build, 'cause that's what I use for building Google Tests.
>
> **[5:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=303)** Then, I'll add the Google Test included in the library directories and the necessary library files.
>
> **[5:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=308)** So I'm gonna change this to release and update the properties of this project to include the Google Tests how we file libraries or directories.
>
> **[5:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=327)** Open test, get test, include.
>
> **[5:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=334)** And got the library directory.
>
> **[5:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=355)** Okay, and then I'm going to add the
>
> **[6:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=365)** Google Test Library files themselves.
>
> **[6:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=370)** Gtest main.lib and say GTest specific name and the GTest library itself.
>
> **[6:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=384)** That should be able to rebuild the solution.
>
> **[6:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=388)** That seems to have gotten rid of the include error, but now there's a bunch of link errors.
>
> **[6:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=392)** Looks like the Google Test Libraries were built with a different version of the runtime library.
>
> **[6:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=397)** I'm going to go into the project's code generation properties and change the runtime library to match what was used for building the Google Test Libraries.
>
> **[7:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=426)** Excellent.
>
> **[7:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=429)** Now I should be able to execute it.
>
> **[7:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=431)** Now, when the project builds successfully and I can execute it, but when I execute it, I see a console output rather than the green bar we had with the fizz buzz example.
>
> **[7:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=442)** The green bar and test results we had with the gooey based test runner was much more visual and informative.
>
> **[7:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=448)** Luckily, there's a couple of different Visual Studio extensions for running Google Test based unit tests.
>
> **[7:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=454)** I'll be using the Google Test adapter extension.
>
> **[7:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=457)** To install the Google Test adapter, I'm going to click on extensions and updates,
>
> **[7:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=470)** and then I'm gonna select online, and I'm gonna type in Google Test.
>
> **[7:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=476)** And Google Test adapter is the first thing that comes up.
>
> **[8:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=481)** I'm gonna click download and then close.
>
> **[8:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=487)** And I'll need to restart Visual Studio for the extension to be installed.
>
> **[8:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=498)** Okay, now I can open my GTTest solution and there's a test menu here at the top of the window.
>
> **[8:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=510)** I can click that and select run all tests.
>
> **[8:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=515)** And I get the familiar green bar and a list of tests that were executed.
>
> **[8:40](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=520)** Excellent, I have a working solution in Visual Studio and I'm ready to write more unit tests.
>
> **[8:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=526)** In the next lecture, I'm going to go back to Eclipse and start working on another hands-on TDD coding session.

> [!info]- Semantic Content
>
> **Tools:** visual studio (11), github (2), command line (1)
> **Code Keywords:** let (3), assert (2), function (1), include. (1)
> **Exercise Files:** download the (2), source code (1), zip file (1), clone the repo (1)
> **CLI Commands:** git (2), make (2)
> **Env Vars:** url (1), msvc (1), tdd (1)
> **UI Navigation:** go to (1), open the (1), click on (1)
> **Prerequisites:** set up (1), you'll need (1), install (1)
> **Cross-References:** in the next (1), go back to (1)

#### Set up Google Test with CLion
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=0)** - [Instructor] In this lecture, I'm going to walk through getting Google Test set up to run in the JetBrain CLion C++ IDE.
>
> **[0:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=8)** To follow along with this lecture, you'll need to have a recent version of the CLion IDE installed and set up to use your C++ compiler of choice.
>
> **[0:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=18)** You'll also need to download and compile the Google Test library.
>
> **[0:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=22)** Please refer to the video for compiling and running Google Test in Eclipse for instructions on downloading and compiling Google Test.
>
> **[0:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=30)** For the lecture, I'm going to be working in Linux, but the set of steps to set up and use Google Test in CLion should be essentially the same on MAC OS or Cygwin on Windows.
>
> **[0:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=41)** So, first I'm going to create a new test project called googletest_test, and I'll make sure it compiles and executes.
>
> **[0:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=50)** So, first I'll create a new project and call it googletest_test.
>
> **[0:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=55)** Then I'll compile and execute it.
>
> **[1:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=80)** Now that I have the project set up, I'm going to modify the code for a simple Google Test assert unit test that should always pass.
>
> **[1:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=88)** Then I'll try to compile and execute the code.
>
> **[2:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=132)** This doesn't compile right now because the project doesn't know about the path to the Google Test headers.
>
> **[2:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=138)** CLion uses CMake for its project files.
>
> **[2:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=141)** I'll fix my compilers by adding the Google Test include files and library files test and gtest main to the project's Cmake list .txt file.
>
> **[2:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=152)** Google Test in Linux also requires the p thread library.
>
> **[2:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=156)** So, first I'll add the path to the Google Test headers using the Include Directories command.
>
> **[2:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=173)** Then I'll add the path to the directory that has the Google Test library files using the Link Directories command.
>
> **[3:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=190)** Then I'll add the command to link the Google Test libraries and the p thread library.
>
> **[3:29](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=209)** And lastly, I'll try to compile everything.
>
> **[3:39](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=219)** That compiles and executes.
>
> **[3:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=221)** But it's a simple text output.
>
> **[3:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=223)** I want it to have the green bar like I had with the fizzbuzz example.
>
> **[3:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=228)** CLion comes with a Google Test runner included.
>
> **[3:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=231)** So, all I have to do is create a new run configuration that uses that test runner.
>
> **[3:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=237)** So, first I'll bring up the Configuration screen by clicking on Run and Edit Configurations.
>
> **[4:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=243)** Then I'll add a new Google Test configuration and call it unit tests.
>
> **[4:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=249)** Then I'll run that new configuration and see the green bar.
>
> **[4:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=265)** And we're all set.
>
> **[4:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=266)** I've got a C++ project in CLion using Google Test and a test runner showing me the results of my test.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (4), you'll need (1)
> **Env Vars:** ide (2), mac (1)
> **Code Keywords:** assert (1), pass (1)
> **Code Identifiers:** googletest_test (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Set up Google Test with Xcode
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=0)** - [Instructor] In this lecture, I'm going to walk through getting Google Tests set up to run in the Apple Xcode IDE.
>
> **[0:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=6)** To follow along with this lecture, you'll need to have a recent version of the Xcode IDE installed.
>
> **[0:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=11)** You'll also need to have downloaded and compiled the Google Test library.
>
> **[0:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=15)** Please refer to the video for compiling and running Google Test in Eclipse for instructions on downloading and compiling Google Test.
>
> **[0:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=22)** First, I'm going to create a new test project called googletest_test, and I'll make sure it compiles and executes.
>
> **[1:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=60)** Now that I have the project set up, I'm going to modify the code to have a simple unit test that always asserts true and should always pass.
>
> **[1:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=67)** Then I'll try to compile and execute that code.
>
> **[1:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=109)** And I immediately see compile errors from Xcode that it can't find the gtest header and doesn't know the gtest macros.
>
> **[1:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=116)** I'll fix the compile errors by adding the path to the Google Test include files to the project.
>
> **[2:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=122)** I'll also add the library files gtest and gtest_main.
>
> **[2:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=130)** First I'll add the path to the Google Test headers by going to the project's configuration.
>
> **[2:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=135)** I want to be sure to select the project configuration and not the target.
>
> **[2:19](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=139)** Then I'll locate the search paths configuration section under the build settings, and I'll add the path to the Google Test headers to the header search path configuration.
>
> **[2:45](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=165)** Next I'll add the path to the Google Test libraries to the library search path configuration.
>
> **[3:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=185)** Then I'll select the target configuration and I'll add the gtest and gtest_main libraries via the linked frameworks and libraries configuration.
>
> **[3:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=223)** Lastly, I'll try to recompile and execute the test.
>
> **[3:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=237)** Great.
>
> **[3:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=238)** That compiles and executes, but it's a simple text output.
>
> **[4:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=241)** I'd like to have something more integrative with Xcode's built-in testing UI.
>
> **[4:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=247)** Xcode comes with a unit test runner, but it doesn't have built-in support for Google Test.
>
> **[4:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=251)** I'll first need to download an open source wrapper that I can add to a unit test target build that will translate the Google Test output to what the Xcode test runner expects.
>
> **[4:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=262)** This code is on Github at [https://github.com/mattstevens/xcode-googletest](https://github.com/mattstevens/xcode-googletest).
>
> **[4:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=274)** I'll go ahead and clone that repo to get it on my system.
>
> **[5:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=311)** Next I'll need to create a new unit testing bundle target in my project.
>
> **[5:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=332)** Xcode only lets me select Swift or Objective-C for the languages.
>
> **[5:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=336)** I'll need to select Objective-C, as that's what the Google Test wrapper is written in.
>
> **[5:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=342)** That creates a new unit test folder in my project.
>
> **[5:45](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=345)** I'll go ahead and add the wrapper code to that folder.
>
> **[6:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=374)** Then I'll select my new unit test target as the current scheme which is the target that I want Xcode to build and execute by selecting it under the product and schemes menu.
>
> **[6:31](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=391)** Then I'll update the scheme to use the googletest_test executable.
>
> **[6:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=395)** I'll also add the main.cpp to the unit test target by selecting it under the target membership parameter for the file.
>
> **[7:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=436)** Lastly I'll update the target to link in the gtest and gtest_main libraries.
>
> **[7:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=467)** Now I'll build the target and execute the tests.
>
> **[8:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=486)** And I'm all set.
>
> **[8:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=487)** I've got a C++ project in Xcode using Google Test and a test runner showing me the results of my tests.

> [!info]- Semantic Content
>
> **Code Identifiers:** gtest_main (3), googletest_test (2)
> **Prerequisites:** set up (2), you'll need (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** ide (2)
> **Tools:** github (2)
> **UI Navigation:** select the (2)
> **File Paths:** main.cpp (1)
> **Code Keywords:** pass (1)


### 3. Google Test Overview

#### Google Test
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=0)** - [Instructor] In this lecture, I'm gonna give you an overview of Google Test.
>
> **[0:04](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=4)** I'll explain exactly what it is and go over its major features.
>
> **[0:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=8)** So what is Google Test?
>
> **[0:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=11)** Google Test is an open source C++ unit testing framework from Google, styled after common NUnit type frameworks.
>
> **[0:19](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=19)** It provides the ability to create tests, test cases, and test suites, which it calls text fixtures.
>
> **[0:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=27)** It provides several types of assert macros for generating unit test failures.
>
> **[0:31](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=31)** This includes Boolean true/false macros, binary comparison of integer and floating point values, string comparisons, and asserts.
>
> **[0:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=41)** It also adds many useful command line arguments to your unit test binary to help specify what tests should be run and in what order.
>
> **[0:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=50)** The TEST macro is the simplest way to create a test.
>
> **[0:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=54)** It defines a specific test for a specific test case.
>
> **[0:59](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=59)** Tests from the same test case will all be grouped together in the final test output from Google Test.
>
> **[1:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=65)** The test case and test names should be valid C++ identifiers and should not use the underscore character.
>
> **[1:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=73)** Google Test provides a framework for what are known as test fixtures or test suites.
>
> **[1:19](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=79)** Test fixtures allow for common setup and tear down between tests.
>
> **[1:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=84)** Test fixtures are classes which are derived from the Google Test test class.
>
> **[1:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=88)** And a new instance of this class will be created for each test.
>
> **[1:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=92)** Each test fixture can implement virtual SetUp and TearDown functions which will be called between each test.
>
> **[1:40](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=100)** And when creating tests using a test fixture, the TEST_F macro is used rather than the TEST macro.
>
> **[1:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=106)** And the text fixture name and the test name are passed in.
>
> **[1:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=110)** Since Google Test creates new instances of the text fixture class at the start of each test and then destroys that class after the test is run, then the initialization and cleanup of the test fixture can be done in the class' constructor and destructor.
>
> **[2:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=125)** This is the preferable method and should be more commonly used as it allows for specifying member variables as const and will automatically call base class constructors.
>
> **[2:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=135)** SetUp and TearDown functions may still be necessary if there's a chance the code will generate an exception in the cleanup as that will lead to undefined behavior if it occurred in the destructor.
>
> **[2:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=148)** Here I've got a very simple example of a test fixture with a test that uses it.
>
> **[2:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=152)** The text fixture has a pointer to a test object, which it creates a new instance of in a constructor and cleans up in the destructor.
>
> **[2:40](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=160)** The test then makes a method call on the test object and asserts the results.
>
> **[2:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=166)** Google Test provides assert macros.
>
> **[2:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=169)** And these macros perform the checks that determine if a test passes or fails.
>
> **[2:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=174)** There are two types of failure assert macros.
>
> **[2:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=177)** The ASSERT macros will completely abort the current tests when they fail.
>
> **[3:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=181)** Meaning that none of the other asserts in the test are called.
>
> **[3:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=185)** The EXPECT macros will indicate the failure, but will not abort the current test.
>
> **[3:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=190)** Any additional macros will still be called, potentially identifying additional failures in the test.
>
> **[3:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=196)** The EXPECT macros should be used if possible when the test has multiple asserts to try to identify all the failures in the test.
>
> **[3:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=204)** There are four comparison type asserts that Google Test provides.
>
> **[3:29](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=209)** A basic comparison, which simply verifies that the passed-in condition evaluates to true or false.
>
> **[3:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=215)** A binary comparison, which will verify that the two values are either equal, not equal, less than, less than or equal, greater than, or greater than or equal to each other.
>
> **[3:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=227)** A string comparison, which will compare two C style strings to each other.
>
> **[3:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=232)** For standard string comparisons, you can also use the binary comparison asserts.
>
> **[3:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=238)** Google Test also provides asserts for comparing floats and doubles.
>
> **[4:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=242)** Floats and doubles are unique, in that they can never be compared exactly due to how they are stored in memory.
>
> **[4:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=248)** The asserts that Google Test provides will verify that two floating point values are either very close to each other with several digits of precision, or allow you to specify how much air is allowed between the two compared numbers.
>
> **[4:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=263)** This slide shows examples of the basic assert statements.
>
> **[4:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=266)** The first assert passes because the expression evaluates to true.
>
> **[4:31](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=271)** The second assert passes because the expression evaluates to false.
>
> **[4:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=275)** The third assert fails because the passed-in expression evaluates to false.
>
> **[4:40](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=280)** And the fourth assert fails because the passed-in expression evaluates to true.
>
> **[4:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=288)** Here I'm showing you an example of each of the binary comparison asserts.
>
> **[4:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=292)** Each of these asserts pass as the passed-in values match the corresponding comparison operation of the assert.
>
> **[5:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=300)** The equals, not equals, less than, less than or equal, greater than, or greater than or equal.
>
> **[5:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=311)** Here I'm showing the different asserts for string comparison.
>
> **[5:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=315)** The top two asserts show how the binary comparison asserts can be used with the C++ standard string.
>
> **[5:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=322)** The remaining asserts show how C style strings can be compared for equals or not equals, and optionally, ignoring case.
>
> **[5:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=333)** Here I'm showing the assert comparisons for floating point values.
>
> **[5:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=336)** The first two asserts use Google Test's built-in logic for determining a floating point values are very close to each other in value.
>
> **[5:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=344)** The second two asserts show how you can specify your own absolute error for the difference between the two passed-in floating point values.
>
> **[5:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=354)** Google Test also supports asserts on exceptions.
>
> **[5:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=358)** Asserts can fail a test when an exception is expected to be thrown from a function call.
>
> **[6:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=363)** That assert can be on a specific exception or on any exception.
>
> **[6:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=368)** An assert can also fail a test when an exception is thrown that was not expected.
>
> **[6:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=374)** Google Test also adds several command line options to your unit test executable.
>
> **[6:19](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=379)** In this slide, I'm showing a few of the most useful.
>
> **[6:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=383)** The gtest_filter command line argument allows you to specify which tests are executed.
>
> **[6:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=388)** This parameter is broken up into two regular expressions separated by a colon.
>
> **[6:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=393)** The first regular expression defines the names of the test cases that should be executed.
>
> **[6:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=398)** And the second regular expression defines the names of the tests that should be executed.
>
> **[6:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=403)** Both regular expressions must be matched by a test for it to be executed.
>
> **[6:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=408)** The next option is gtest_repeat.
>
> **[6:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=411)** This allows you to tell Google Test to run the suite of tests n number of times.
>
> **[6:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=415)** This can be very useful for identifying flaky tests that fail intermittently.
>
> **[7:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=422)** The last option is gtest_shuffle.
>
> **[7:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=425)** This runs the test in a randomized order.
>
> **[7:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=428)** This can also be very helpful in verifying that there are no dependencies between the different tests in the test suite.
>
> **[7:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=434)** So that's it for this overview of Google Test.
>
> **[7:17](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=437)** In the next lecture, I'll do another hands-on TDD coding session, where I'll put into practice many of the things that were went over here.

> [!info]- Semantic Content
>
> **Code Keywords:** assert (13), case. (2), class. (1), const (1), pass (1)
> **Env Vars:** test (2), expect (2), test_f (1), assert (1), tdd (1)
> **Prerequisites:** setup (3), initialization (1)
> **Code Identifiers:** gtest_filter (1), gtest_repeat (1), gtest_shuffle (1)
> **Tools:** command line (3)
> **Definitions:** is an  (1), known as (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 4. The Supermarket Checkout Kata

#### Overview, setup, and the first test case
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=0)** - [Instructor] In this section of the course, I'll be preforming another hands-on TDD coding session.
>
> **[0:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=6)** For this example, I'll be implementing the supermarket checkout code kata.
>
> **[0:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=10)** In this kata, I'll be implementing a checkout class that maintains a list of items that are being added during a checkout at a supermarket.
>
> **[0:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=18)** This class should provide interfaces for setting the individual prices on items, adding individual items to the check out, calculating the current total cost from all the items that have been added, and applying optional discount rules where there are N number of a specific item type, i.e. three, four, doll.
>
> **[0:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=43)** The checkout class has the following test cases that I'll go through as I'm implementing the class with TDD.
>
> **[0:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=49)** The first and simplest test case is for creating an instance of the checkout class, next is the ability to add an item price, then adding an individual item to the list of checkout items, then calculating the current total, then adding multiple items and getting the correct total, then the class needs the ability to add discount rules, and then the class needs the ability to apply the discount rules when calculating the total.
>
> **[1:19](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=79)** Now I'm going to go ahead and set up a new eclipse CDT C++ project for this kata.
>
> **[1:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=85)** Then I'll verify I have Google Test setup properly and implement the first test case.
>
> **[1:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=90)** So I've created a new C++ project for this kata and verified that it builds and executes.
>
> **[1:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=96)** My next step is to get it configured to use Google Test.
>
> **[1:39](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=99)** To do that, I need to add the paths to the Google Test, include files and libraries, and then add the libraries to the link settings.
>
> **[1:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=107)** So I'm gonna right click on my project in eclipse and go to Properties.
>
> **[1:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=112)** Then I'm gonna go to Paths and Symbols and for Include, in GNU C++, I'm going to add a new file system path.
>
> **[2:04](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=124)** Google test, Google test, include.
>
> **[2:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=128)** My Google test include path.
>
> **[2:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=131)** In Libraries, I'm going to add gtest_main
>
> **[2:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=140)** and gtest.
>
> **[2:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=144)** And in the Library Paths, I'm going to add the file system path to the gtest libraries.
>
> **[2:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=166)** Okay, now I'm going to add a unit test run configuration for this project and modify the code to verify it can make a simple test case.
>
> **[2:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=175)** So I am going to go up here and select Run Configurations and I'm gonna add a new C++ unit test.
>
> **[3:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=187)** I'm gonna set the test runner to Google test.
>
> **[3:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=193)** Just gonna call this CheckoutTests.
>
> **[3:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=198)** Apply, close.
>
> **[3:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=202)** And then now I'm gonna change this code to just be a simple test case that verifies that I can insert.
>
> **[3:29](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=209)** Include Google test assert.
>
> **[3:31](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=211)** (computer keys clicking) TEST, CheckoutTests, CanAssert.
>
> **[3:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=228)** ASSERT_TRUE.
>
> **[3:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=233)** True.
>
> **[3:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=236)** I need to build that and then verify that it executes.
>
> **[4:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=246)** And it does.
>
> **[4:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=248)** So now that I have Google test set up and my green bar, I'm ready to enter my TDD loop of red green refactor.
>
> **[4:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=256)** I'm going to go ahead and enter the red phase and start implementing the first test case.
>
> **[4:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=260)** The first test case is to simply verify that I can create an instance of the checkout class.
>
> **[4:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=265)** I'm going to update this simple test case that I have now to do that.
>
> **[4:31](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=271)** So change this from CanAssert to CanInstantiateCheckout.
>
> **[4:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=287)** Checkout co.
>
> **[4:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=292)** And immediately I can see that there's a compile error.
>
> **[4:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=295)** So now that I have a failing unit test, it's time to enter the green phase and make this test pass.
>
> **[5:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=302)** I'll do that by going ahead and implementing this checkout class.
>
> **[5:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=306)** I'm gonna right click on my project, let's say New, Class.
>
> **[5:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=310)** And call the class Checkout.
>
> **[5:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=315)** And go finish.
>
> **[5:19](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=319)** So I have a checkout cpp and a checkout header and the default destructor and constructor.
>
> **[5:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=328)** And it should still fail and it does.
>
> **[5:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=333)** So we need to go ahead and add the checkout header file
>
> **[5:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=342)** and that should compile.
>
> **[5:45](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=345)** And it does.
>
> **[5:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=347)** And I can execute it, excellent.
>
> **[5:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=350)** I now have my first passing unit test and I'm ready to refactor it.
>
> **[5:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=354)** Is there anything to refactor here?
>
> **[5:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=356)** I don't think so.
>
> **[5:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=358)** I'm ready to go back to the red phase.
>
> **[6:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=360)** In the next lecture, I'll implement the next three test cases, adding item prices, adding items, and calculating a total.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (3), class. (3), type, (1), class, (1), include, (1)
> **Env Vars:** tdd (3), cdt (1), gnu (1), test (1), assert_true (1)
> **UI Navigation:** click on (2), go to (2)
> **Prerequisites:** set up (2), setup (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1), in the next (1)
> **Code Identifiers:** gtest_main (1)
> **Speakers:** - [instructor] (1)

#### Add items, add item prices, and calculate the current total
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=0)** - [Instructor] In this lecture I'll be implementing the add item prices and items, and calculate total test cases.
>
> **[0:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=8)** I'm gonna begin my marking off the can instantiate checkout test case, let's do that now.
>
> **[0:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=15)** Okay, then I need to create the test for the can add item price test case which will simply instantiate the checkout class and try to call in add item price method that will pass in the item string and the unit price as an integer.
>
> **[0:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=32)** So I'll do that now.
>
> **[0:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=36)** Test checkout test can add item price.
>
> **[0:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=51)** Checkout co co dot add item price.
>
> **[0:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=57)** The item name is A with a price of one.
>
> **[1:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=63)** Okay, and so here I can see the ID is already telling me that I have a compiler error because the add item price method does not yet exist in a checkout class.
>
> **[1:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=74)** And as our TDD rules state, compiling is equivalent to a failing unit test.
>
> **[1:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=81)** Okay so now that I've got a failing unit test, I need to enter the green phase and make the test pass.
>
> **[1:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=88)** I need to make it pass the simplest way possible.
>
> **[1:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=92)** In this case I just need to implement the add item price method to checkout.
>
> **[1:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=97)** So I'll go ahead and do that now.
>
> **[1:40](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=100)** So I'm going to need to include the string class
>
> **[1:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=110)** and I'll add the new function declaration to the class, add item price standard string item integer price.
>
> **[2:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=123)** And CCP file, void checkout add item price
>
> **[2:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=131)** standard string item integer price.
>
> **[2:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=140)** And for right now I don't need any implementation.
>
> **[2:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=143)** Simplest test case, I just need the function there.
>
> **[2:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=147)** So now I should be able to compile and run.
>
> **[2:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=150)** And I see that that makes my unit test pass, great.
>
> **[2:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=154)** So now that my unit test is passing I can go ahead and enter the refactoring phase.
>
> **[2:39](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=159)** Is there anything to refactor here?
>
> **[2:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=162)** At checkout instantiation it's duplicated it for both of my tests.
>
> **[2:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=166)** I don't think the first test is necessary anymore so I'm validating that I can instantiate an instance of checkout in the can add item price test.
>
> **[2:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=176)** So I'm gonna go ahead and remove that first test.
>
> **[3:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=182)** And validate my remaining test still passes, great.
>
> **[3:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=186)** So I'm gonna go ahead and mark off this test case in my list.
>
> **[3:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=191)** Okay, and then it's back to the red phase and the next test case.
>
> **[3:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=196)** So in this test case I need to update the checkout class to have a public interface for adding checkout items.
>
> **[3:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=203)** So I'm in the red phase, so the first step is to add a failing unit test.
>
> **[3:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=208)** Test checkout test can add item.
>
> **[3:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=217)** Checkout co co dot add item, and the item name.
>
> **[3:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=227)** Okay, once again I can see that I've already got a compile error here which means I have a failing unit test.
>
> **[3:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=234)** So now I'm going to enter the green phase and make this test pass by adding this new method.
>
> **[4:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=240)** So I'll go into checkout dot H, I'll add the new method declaration.
>
> **[4:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=249)** String item, and put the implementation in the CPP file.
>
> **[4:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=270)** So again I want this to be the simplest implementation possible to make the currently failing unit test pass.
>
> **[4:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=277)** So for right now an empty implementation will do that.
>
> **[4:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=281)** And we should be able to verify that it makes it pass, and it does, easy okay.
>
> **[4:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=287)** So now to the refactoring phase.
>
> **[4:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=290)** Is there anything to refactor?
>
> **[4:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=292)** The checkout instantiation is duplicated again.
>
> **[4:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=296)** This is gonna happen in all of our tests as they're all gonna need a checkout instance.
>
> **[5:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=300)** This is a good time to go ahead and add a test fixture where I can instantiate checkout as a member variable, and then it can be reused by each of the tests.
>
> **[5:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=309)** So I'll go ahead and do that now.
>
> **[5:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=311)** Class checkout tests, which is derived from testing test.
>
> **[5:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=323)** And in its constructor, first I'm going to put in a protected member variable for the checkout class.
>
> **[5:39](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=339)** Use a better name than co, and that's really all I need to do.
>
> **[5:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=349)** Now I'll change these to test fixture macros,
>
> **[5:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=358)** and remove the checkout instantiation from each and instead use the new member variable in my test fixture class.
>
> **[6:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=369)** And my test should still pass.
>
> **[6:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=374)** Helps if I put in the public inheritance, and now they pass, okay great.
>
> **[6:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=385)** Anything else to refactor here?
>
> **[6:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=387)** I don't think so, this looks pretty simple.
>
> **[6:29](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=389)** Okay back to the red phase and the next test case.
>
> **[6:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=394)** So we have can add item, with this test case I need to update the checkout class to have a public method for calculating the current total and verify that total is correct for one item.
>
> **[6:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=406)** I'm in the red phase so my first step is to create the failing unit test.
>
> **[6:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=410)** In this test I'll add one price for item A and then add one item A to the list of checkout items.
>
> **[6:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=418)** Then I'll call the calculate total method and verify it returns one, so let's do that now.
>
> **[7:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=426)** Test fixture checkout tests and calculate total checkout
>
> **[7:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=442)** dot add item price A one checkout dot add item A integer result equals checkout calculate total
>
> **[7:45](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=465)** assert equals one result.
>
> **[7:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=471)** And let's call result total.
>
> **[8:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=485)** So I can see here that I have a compile error which means I have a failing unit test.
>
> **[8:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=491)** So now that I've got my failing test I can go ahead and enter the green phase and make it pass by adding the calculate total method to the checkout class.
>
> **[8:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=500)** I'll want the simplest implementation of that method to start, so I'll just have it return one.
>
> **[8:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=506)** So let's add that method to the class, integer calculate total no parameters.
>
> **[8:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=515)** Add the implementation integer checkout calculate total no parameters, and for right now for the simplest implementation necessary to make the currently failing test pass I will just have it return one.
>
> **[9:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=541)** Great, now that my unit test is passing I can enter the refactoring phase.
>
> **[9:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=546)** Is there any duplication?
>
> **[9:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=550)** The add item price and add item method calls are duplicated in this new test.
>
> **[9:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=554)** I don't think the can add item price or can add item tests are needed now as they're both being done in the can calculate total test.
>
> **[9:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=564)** I'm gonna go ahead and remove those test cases.
>
> **[9:29](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=569)** Remove both of those, simplify my tests and verify my remaining test still runs.
>
> **[9:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=577)** And it does, excellent.
>
> **[9:39](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=579)** So now I can mark off that test case.
>
> **[9:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=588)** Okay, in the next lecture I'll implement the next test case for adding multiple items and getting the correct total.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (11), let (4), class. (4), case. (3), public (3)
> **CLI Commands:** make (6)
> **Env Vars:** tdd (1), ccp (1), cpp (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Add multiple items and calculate the total
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=0)** - [Instructor] In this test case, I'm going to add prices for multiple items, add multiple items to the checkout, and then verify the correct total is calculated.
>
> **[0:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=9)** I'm in the red phase, so first I'm going to add the failing test case.
>
> **[0:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=13)** In this test case, I'll add the price for two items and actually add two items and verify that the correct total is calculated.
>
> **[0:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=21)** Let me do that now.
>
> **[0:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=25)** Test fixture, CheckoutTests, CanGetTotalForMultipleItems.
>
> **[0:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=41)** checkOut.addItemPrice("a", 1).
>
> **[0:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=49)** checkOut.addItemPrice("b", 2).
>
> **[0:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=57)** checkOut.addItem("a").
>
> **[1:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=61)** checkOut.addItem("b").
>
> **[1:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=67)** Int total = checkOut.calculateTotal().
>
> **[1:17](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=77)** ASSERT_EQ(3,total).
>
> **[1:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=83)** As the total should be the sum of one and two for the two items A and B.
>
> **[1:31](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=91)** Let's build this and run it.
>
> **[1:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=93)** Excellent.
>
> **[1:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=94)** My new test is failing.
>
> **[1:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=96)** Great.
>
> **[1:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=97)** So I have a failing unit test, so onto the green phase and let's make it pass.
>
> **[1:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=102)** Things start to get a little bit more complicated with this test.
>
> **[1:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=106)** What I wanna try and do the simplest thing I can to get the test to pass.
>
> **[1:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=110)** To do that I'll go ahead and add a map, Ada structure, to the checkout class, to keep track of the prices per item.
>
> **[1:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=118)** Then I'll update checkout to have a total member variable and increment that total whenever a new item is added.
>
> **[2:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=125)** Let me do that now.
>
> **[2:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=128)** First I will add par file, standard map, Ada structure.
>
> **[2:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=136)** Then I'll add a couple of protected member variables.
>
> **[2:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=142)** One for the map prices,
>
> **[2:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=150)** and then member variable for my running total.
>
> **[2:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=155)** Make it initialize the total to zero and the class's initialization list.
>
> **[2:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=164)** Then I'm going to update the item price method to save this price in my new map of prices.
>
> **[2:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=174)** Prices[Item] = price.
>
> **[3:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=182)** Then the addItem method, I'm going to increment the total member variable with the price for this specified item.
>
> **[3:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=192)** Total += prices[Item].
>
> **[3:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=201)** Lastly, I'm going to change the calculate total to return my running total.
>
> **[3:29](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=209)** Now my test passes.
>
> **[3:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=212)** Now that my test is passing, I can enter the refactor phase.
>
> **[3:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=216)** Is there anything to refactor?
>
> **[3:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=217)** Anything of concern?
>
> **[3:39](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=219)** I don't think so.
>
> **[3:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=221)** So let's mark off this test case, and then we'll move on to the next one, which we'll do in the next lecture.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (3), pass (2), case. (1), class, (1)
> **Code Identifiers:** checkout (5), additem (3), additemprice (2), calculatetotal (1)
> **CLI Commands:** make (2)
> **Env Vars:** assert_eq (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### Add and apply discounts
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=0)** - [Instructor] So for this test case, I need to add a method to the checkout to allow me to submit a discount rule.
>
> **[0:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=6)** A discount has three parameters: the item type, the number of items required for the discount, and the discounted price.
>
> **[0:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=14)** So I'm going to add a method called AddDiscount, which takes those three parameters.
>
> **[0:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=20)** I'm in the red phase now, so I'll start by implementing a failing unit test that tries to call that new method.
>
> **[0:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=27)** Okay, so test fixture checkout test can add discount.
>
> **[0:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=42)** Checkout dot add discount, the item, the item count, and the discount price.
>
> **[0:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=56)** Okay, so I added a test which calls AddDiscount passing in the A type, with three for the number of A's, and two for the discounted price.
>
> **[1:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=66)** The test is failing to compile because the AddDiscount method doesn't exist in the checkout class yet.
>
> **[1:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=72)** I'm in the green phase now, so I'm gonna add that method to the checkout class to make the test pass.
>
> **[1:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=78)** As always, this should be the simplest implementation possible to make that test pass.
>
> **[1:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=83)** So I'm just going to implement an empty function for now.
>
> **[1:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=87)** So let me go ahead and do that.
>
> **[1:31](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=91)** Okay.
>
> **[1:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=94)** Void add discount, standard stream item, integer number of items, integer discount price.
>
> **[1:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=111)** Okay.
>
> **[1:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=114)** Then I will add this to my CPP file.
>
> **[2:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=121)** Void checkout, add discount, and for right now, I'll leave this an empty function.
>
> **[2:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=138)** And this should make my test pass.
>
> **[2:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=141)** Which it does.
>
> **[2:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=143)** So now that all my tests are passing, I can go back to the refactoring phase.
>
> **[2:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=147)** Anything to refactor?
>
> **[2:29](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=149)** I don't think so.
>
> **[2:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=150)** So lets go back to the red phase and the next test case.
>
> **[2:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=154)** Okay.
>
> **[2:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=155)** In this next test case, I'm going to add a discount rule, and then add enough items to the checkout so that the rule should be applied when calculating the total.
>
> **[2:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=163)** I'm going to implement the simplest test case, which is a rule for three of the same item, which has a lower price than the three individual items.
>
> **[2:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=172)** I'm in the red phase, so I'll implement my failing unit test first.
>
> **[2:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=178)** So I'll go to CheckoutTest.
>
> **[3:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=182)** Test fixture, checkout tests, can calculate with discount, can calculate total with discount.
>
> **[3:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=203)** Okay.
>
> **[3:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=204)** Checkout, add item price, one, checkout dot add discount,
>
> **[3:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=222)** A one, add discount, A is the item, three is the item count, and two is the discounted price.
>
> **[3:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=237)** Okay.
>
> **[3:59](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=239)** And I'm going to add three items, add item A, checkout dot add item A, and one more add item A.
>
> **[4:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=258)** Then I'm going to calculate the total, (keyboard sounds) and I'm going to assert that add should equal two instead of three.
>
> **[4:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=274)** (keyboard sounds) Which would be the case if it's actually applying the discount rule.
>
> **[4:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=281)** So let's build and run that.
>
> **[4:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=284)** And we see the new test case, or new test, is failing.
>
> **[4:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=289)** Okay so now I'm in the green phase, and I need to make this test pass.
>
> **[4:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=293)** Looking at the production code that I have so far, there are a couple of problems.
>
> **[4:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=298)** One, I'm not actually maintaining the discount rules when the add discount function is called.
>
> **[5:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=303)** So I'll need to add a data structure for that.
>
> **[5:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=306)** Then there's an issue with how I'm calculating the total.
>
> **[5:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=309)** Right now I have a running total which is updated whenever an item is added.
>
> **[5:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=314)** But I can't know what discounts to apply, until all the items have been added.
>
> **[5:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=318)** This is a design issue with the production code as I have it now.
>
> **[5:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=322)** I have an add item method which is calculating the total, rather than the calculate total method.
>
> **[5:29](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=329)** This is known as misplaced responsibility.
>
> **[5:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=332)** I need to move the calculation of the total down to the calculate total method.
>
> **[5:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=336)** First, I'm going to add a data structure for the discount rules.
>
> **[5:40](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=340)** To do that, I'm going to create a structure in my class with the count and discounted price, and now I have a map of those structures keyed by the item string.
>
> **[5:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=348)** So let me do that now.
>
> **[5:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=352)** Okay.
>
> **[5:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=354)** So down here in my protected section, I'm going to add a new structure called discount, and inside it's going to have the number of items and the discount price.
>
> **[6:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=378)** Okay.
>
> **[6:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=386)** And then I'm gonna add a map of these discount types, (keyboard sounds) keyed by the item name.
>
> **[6:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=398)** (keyboard sounds) Okay.
>
> **[6:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=408)** So that compiles why my unit test is still failing.
>
> **[6:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=412)** I need to update the add discount method to use my new discount stated structure.
>
> **[6:59](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=419)** So I will create a discount, then I will set the parameters, (keyboard sounds)
>
> **[7:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=444)** and then I'll add this new discount object into my map of discounts.
>
> **[7:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=450)** (keyboard sounds) Okay.
>
> **[7:39](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=459)** Let's see if that still compiles.
>
> **[7:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=461)** And it does.
>
> **[7:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=463)** Okay.
>
> **[7:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=463)** So now I'm storing the discounts in a data structure that I can use when calculating the total.
>
> **[7:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=468)** The next step, is I need to modify the production code to be able to calculate the total after all the items have been added.
>
> **[7:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=476)** To do that, I need to keep track of how many of each type of item has been added.
>
> **[8:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=481)** I'll implement that by adding a map of integers, keyed to get in by the item string.
>
> **[8:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=487)** The integer will be the count of each item that has been added.
>
> **[8:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=490)** So let me do that now.
>
> **[8:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=494)** So I'll add another map, (keyboard sounds) keyed by the item, with an integer listing the number of those items that have been added.
>
> **[8:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=507)** Then I can go back over here, update my add item method, to remove the total calculation, and instead increment the number of items that I have added of that type using my items structure.
>
> **[8:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=528)** We verify that still compiles.
>
> **[8:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=530)** Great.
>
> **[8:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=531)** So lastly, I'll update the calculate total method, to calculate the total based on the number of items added, and the discount rules.
>
> **[9:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=540)** First, I'll initialize the total member variable to zero.
>
> **[9:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=547)** Total equals zero.
>
> **[9:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=551)** Next I'm going to iterate over all of the item types in my items map.
>
> **[9:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=556)** For standard map standard string int iterator item iterator equals items dot begin.
>
> **[9:39](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=579)** That's actually item iter does not equal items dot end item iter plus plus.
>
> **[9:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=596)** Let's move this down.
>
> **[10:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=600)** Per brackets.
>
> **[10:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=602)** Let's go ahead and get the types out of the iterator.
>
> **[10:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=606)** Standard string item equals item iter first and integer item count equals item iter second.
>
> **[10:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=624)** Now I'm going to search in the discounts map to see if there's a discount for this item type.
>
> **[10:29](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=629)** First, I'm going to declare an iterator for the discounts map.
>
> **[10:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=633)** So standard map standard string discount iterator discount iter.
>
> **[10:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=650)** Now I'm going to search the map to see if it has any discount for this item, and I'm going to add an if statement for calculating the total when there is a discount.
>
> **[10:59](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=659)** So first I'll do the search.
>
> **[11:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=661)** Discount iter equals discounts dot find item,
>
> **[11:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=670)** and if discount iter does not equal discounts end.
>
> **[11:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=682)** If there is a discount, I will declare a local variable to use rather than the iterator.
>
> **[11:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=688)** So discount discount equals discount iter second.
>
> **[11:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=698)** Next I'm going to write a new statement to check and see if the number of items added to the checkout are equal to or greater than the number of items needed for the discount.
>
> **[11:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=709)** If item count is greater than or equal to discount dot number of items.
>
> **[12:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=725)** If the number of items is greater than or equal to the discount number of items, then the discount needs to be applied.
>
> **[12:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=732)** I do this by first calculating the number of discounts that should apply.
>
> **[12:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=736)** This is the number of items added to the checkout, divided by the number of items specified in the discount.
>
> **[12:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=744)** So number of int, number of discounts equals item count divided by discount dot number of items.
>
> **[12:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=762)** Once I have that number, I simply multiply it by the discount price, to calculate what needs to be added to the total.
>
> **[12:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=775)** Number of discounts times discount dot discount price.
>
> **[13:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=788)** Next I need to calculate how many of the items cannot be applied to a discount.
>
> **[13:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=793)** I can get this value by using the modulus operator.
>
> **[13:17](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=797)** I use the number of items added to the checkout, modulus the discount number of items.
>
> **[13:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=803)** This gives me a remainder value, which is the number of items that cannot be applied to a discount.
>
> **[13:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=808)** This number is multiplied by the normal item price and added to the total.
>
> **[13:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=813)** So int remaining items equals item count mod
>
> **[13:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=822)** discount dot number of items.
>
> **[13:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=829)** Total plus equals remaining items times prices item.
>
> **[14:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=843)** Next I need to implement the case for having less items than are required for a discount.
>
> **[14:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=848)** In this case, I just multiply the number of items by the regular item price and add that to the total.
>
> **[14:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=856)** So that is the else case for this is if, and I just take the number of items and multiply it by the item price and add that to the total.
>
> **[14:29](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=869)** The total plus equals item count times prices item.
>
> **[14:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=882)** The same thing applies if there is no discount for this item type.
>
> **[14:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=887)** I'll go ahead and add that to this else statement as well.
>
> **[14:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=893)** Total plus equals item count times prices item.
>
> **[15:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=907)** So lastly I just need to return the new total.
>
> **[15:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=913)** Now that should build and all my unit tests should pass.
>
> **[15:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=918)** Excellent.
>
> **[15:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=920)** So now I can mark off both of these test cases.
>
> **[15:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=924)** That was quite a bit of code.
>
> **[15:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=926)** So let's go on to the refactor phase.
>
> **[15:29](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=929)** Boy, there's a lot to refactor here.
>
> **[15:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=932)** First, I'm going to extract everything inside the top level four loop to be in a separate function that will calculate the total for a particular item.
>
> **[15:40](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=940)** So let's go and add that now.
>
> **[15:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=949)** Void calculate item.
>
> **[15:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=955)** (keyboard sounds) Let's put that in CPP file.
>
> **[16:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=967)** Void checkout calculate item standard string item.
>
> **[16:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=980)** And now, I'm gonna go ahead and pass in the item count now, as I've already done that search and I don't want to have to do the search again.
>
> **[16:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=990)** Integer item count.
>
> **[16:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=995)** Here, integer item count.
>
> **[16:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1004)** Okay.
>
> **[16:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1006)** Now I can take all of this code
>
> **[16:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1015)** and put it in this function.
>
> **[17:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1029)** Okay.
>
> **[17:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1042)** Calculate item item item count.
>
> **[17:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1050)** Now we're all green.
>
> **[17:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1052)** Okay.
>
> **[17:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1054)** So this top level function looks okay now.
>
> **[17:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1058)** Is there anymore refactoring we can do?
>
> **[17:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1061)** I think we can do some more in this calculate item function.
>
> **[17:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1066)** Next, let's extract a function to calculate the total price for an item when there is a discount.
>
> **[17:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1072)** This function should be passed in the item, the item count, and the discount.
>
> **[17:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1077)** So let's put that here.
>
> **[18:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1081)** Void calculate discount standard string item int item count discount discount.
>
> **[18:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1100)** Copy that function declaration over to our CPP file.
>
> **[18:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1108)** Void checkout.
>
> **[18:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1118)** Okay.
>
> **[18:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1121)** Now I'm going to copy, or move, all of this code down into the new calculate discount function.
>
> **[19:04](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1144)** And call that from here.
>
> **[19:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1147)** Item item count discount.
>
> **[19:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1158)** So everything builds, and all of our unit tests are still passing.
>
> **[19:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1162)** Anything else to refactor?
>
> **[19:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1164)** This looks a lot better, so I think we'll say this is good for now.
>
> **[19:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1168)** In the next lecture, I'll implement the last test case for throwing an exception when an item is added which has no price specified.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (11), pass (6), case, (5), type, (2)
> **Non-Speech:** (keyboard sounds) (8)
> **Definitions:** is a  (5), is called (1), known as (1)
> **CLI Commands:** make (4), find (1)
> **Env Vars:** cpp (3)
> **Cross-References:** go back to (2), in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Throw an exception when adding an item with no price
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=0)** - [Instructor] In this lecture, I'll implement the last test case.
>
> **[0:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=3)** Throwing an exception if an item is added to the checkout which does not have a price defined.
>
> **[0:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=8)** I'm in the red phase, so I'm going to start by writing a failing unit test.
>
> **[0:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=12)** I'll use the Google Test, cert throw macro which is past the function to call, and an expected exception that will be thrown by that function.
>
> **[0:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=21)** I'm gonna do that now.
>
> **[0:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=23)** Test fixture checkout test item with no price throws exception assert throw checkout.add item A standard invalid argument Okay.
>
> **[1:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=61)** Okay.
>
> **[1:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=62)** So now that I've got my failing unit test, I'm going to go to the green phase, and I'm gonna make it pass.
>
> **[1:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=67)** I'll make this pass by modifying the add item method to check if the passed in item has a price specified.
>
> **[1:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=74)** If it doesn't, then I'll throw the exception.
>
> **[1:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=78)** So I go to my checkout CPP.
>
> **[1:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=81)** And I wanna modify the add item method.
>
> **[1:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=84)** So first, I'm going to search my list of prices to see if I have a price for this specified item.
>
> **[1:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=92)** Standard mop standard string int iterator item price iter equals prices find item and if the price iterator equals the end of the prices map, then no price was found and I want to throw standard invalid argument invalid item no price.
>
> **[2:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=141)** Otherwise, I just keep the same code.
>
> **[2:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=144)** Items.
>
> **[2:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=146)** Item plus plus.
>
> **[2:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=150)** Okay.
>
> **[2:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=154)** The unit test has passed.
>
> **[2:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=155)** Now it's time for the refactor phase.
>
> **[2:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=158)** Is there anything to refactor?
>
> **[2:40](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=160)** I didn't add much, so I think this is still okay.
>
> **[2:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=162)** Although there is still some cleanup that could be done to make these methods smaller and clearer.
>
> **[2:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=167)** This ends the hands-on TDD session with the Checkout Kata.
>
> **[2:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=171)** In the next lecture, I'll start going over keeping the code you're testing isolated from the rest of the system using fakes, stubs, spies, and locks.

> [!info]- Semantic Content
>
> **Code Keywords:** throw (4), function (2), pass (2), case. (1), assert (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** cpp (1), tdd (1)
> **UI Navigation:** go to (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 5. Test Doubles

#### Test doubles overview
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=0)** - [Instructor] In this lecture, I'm going to go over how you can make sure you're running your unit tests in isolation, using the concepts of dummies, fakes, stubs, spies, and mocks.
>
> **[0:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=12)** So what are test doubles?
>
> **[0:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=14)** Almost all code that gets implemented will depend on another piece of code in the system.
>
> **[0:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=20)** Those other pieces of code are oftentimes trying to do things or communicate with things that are not available in a unit testing environment or are so slow that they would make our unit tests extremely slow.
>
> **[0:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=32)** Test doubles are the answer to that problem.
>
> **[0:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=34)** They're objects created in the tests to replace the real production system collaborators.
>
> **[0:40](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=40)** There are many types of test doubles.
>
> **[0:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=43)** Dummy objects are the simplest.
>
> **[0:45](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=45)** They are simply placeholders that are intended to be passed around but not actually called or used in any real way.
>
> **[0:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=51)** They will often generate exceptions if they are called.
>
> **[0:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=55)** Fake objects have a different and usually simplified implementation from the production collaborator that makes them usable in the test code but not suitable for production.
>
> **[1:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=65)** Stubs provide implementations that do expect to be called but respond with basic canned responses.
>
> **[1:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=72)** Spies provide implementations that record the values that are passed into them.
>
> **[1:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=76)** The tests then can use those recorded values for validating the code on our test.
>
> **[1:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=82)** Mock objects are the most sophisticated of all the test doubles.
>
> **[1:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=85)** They have pre-programmed expectations about the ordering of calls, the number of times functions will be called, and the values that will be passed in.
>
> **[1:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=94)** Mock objects will generate their own exceptions when these pre-programmed expectations are not met.
>
> **[1:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=101)** In this slide, I have a simple example of a dummy object.
>
> **[1:45](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=105)** Its implementation throws an exception if it's called, as it never expects to be used.
>
> **[1:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=111)** This is a simple example of a stub test double.
>
> **[1:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=114)** It returns a canned response when its one method is called.
>
> **[2:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=121)** This is an example of a fake object.
>
> **[2:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=123)** It provides a working implementation, but the implementation is likely only suitable for the test environment and not for production.
>
> **[2:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=131)** In this case, it's an in-memory database.
>
> **[2:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=136)** This is an example of a spy test double.
>
> **[2:19](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=139)** It records the value of the parameter that was passed into it in a public member variable.
>
> **[2:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=144)** That recorded value can then be validated by the unit test.
>
> **[2:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=150)** This is a simple example of a mock object.
>
> **[2:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=153)** This mock object has a built-in expectation that a value of one will be passed in for the parameter to the function and will throw an exception if that is not the case.
>
> **[2:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=164)** Mock frameworks are libraries that provide easy-to-use APIs for automatically creating any of these types of test doubles at runtime.
>
> **[2:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=172)** They provide easy APIs for specifying the mocking expectations in your unit tests.
>
> **[2:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=178)** They can be much more efficient than implementing your own custom mock objects, as creating your own custom mock objects can be time-consuming, tedious, and error-prone.
>
> **[3:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=189)** Google Mock is a C++ Mocking Framework from Google.
>
> **[3:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=193)** It comes bundled with Google Test and works well in the Google Test Framework.
>
> **[3:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=198)** That being said, it can also be used with any other C++ Unit Testing Framework.
>
> **[3:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=203)** In the next lecture, I'll walk through a simple example using Google Mock.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (2), is called (1)
> **Code Keywords:** case, (1), public (1), function (1), throw (1), case. (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Google Mock overview
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=1)** In this lecture I'm going to give a short overview of how Google Mock works.
>
> **[0:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=6)** A Google Mock Workflow is pretty straightforward.
>
> **[0:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=9)** You create a Mock class that derives from the class that the mock is replacing.
>
> **[0:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=14)** In this new class, you call the MOCK_METHOD macro to specify what methods in the class are being mocked.
>
> **[0:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=21)** Then you create an instance of a mock in your test.
>
> **[0:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=25)** And then specify the expectations of the calls to the mock object for the test.
>
> **[0:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=32)** Google Mock expectations specify how functions in the mock object are called.
>
> **[0:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=36)** The expectations are defined in your unit test using the EXPECT_CALL macro.
>
> **[0:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=41)** The EXPECT_CALL macro is passed in the mock object that the expectation applies to along with the function.
>
> **[0:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=49)** In the example, a my mock object is being passed into the EXPECT_CALL, along with the getData function.
>
> **[0:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=57)** This expectation specifies that the getData method of the my mock object is expected to be called once.
>
> **[1:04](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=64)** For functions that have parameters, Google Mock needs to know what values are expected for those parameters.
>
> **[1:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=71)** This is done with Matchers.
>
> **[1:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=73)** Matchers allow you to specify for the passed in parameters if they can be any value, equal to a specific value, or some other typical mathematical relationship, such as greater than or less than.
>
> **[1:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=85)** In the example, the set data function has an expectation set for a single function call with a matcher of an underscore.
>
> **[1:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=92)** The underscore means that any passed in value is acceptable.
>
> **[1:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=98)** In this slide, I'll go over some more examples on how to use Matchers.
>
> **[1:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=102)** This first example shows how to simply specify an exact value for a parameter.
>
> **[1:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=107)** The example specifies that the value of 100 is expected to be passed in to set data.
>
> **[1:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=114)** In the second example, the Ge clause is added which specifies that the parameter passed in to setData must be greater than or equal to 100.
>
> **[2:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=123)** In this third example, an object is getting passed in to the setData function and the NotNull matcher is being used to verify that the object is not null.
>
> **[2:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=135)** As part of the unit test, you may need to tell Google Mock how many times a function should be called.
>
> **[2:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=140)** You can tell Google Mock this using the "Times" clause which comes after the EXPECT_CALL macro.
>
> **[2:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=147)** You can use an exact value or specify a minimum number of times with the "AtLeast" clause or a maximum number of times with the "AtMost" clause.
>
> **[2:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=158)** In this example, Times is specifying that the getData function should be called exactly two times.
>
> **[2:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=164)** If Times is not specified and there are no other clauses after EXPECT_CALL, then Google Mock will expect the function to be called once.
>
> **[2:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=174)** Actions tell Google Mock what the mocked out function should do when it is called, such as return a value, or throw an exception, or even call another function.
>
> **[3:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=183)** The Actions are specified after the Times clause.
>
> **[3:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=186)** The function WillOnce specifies that for one call to the mocked function, a particular action should occur.
>
> **[3:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=193)** The function WillRepeatedly specifies that for any number of calls to the mock object and method, this is the expected action.
>
> **[3:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=204)** In this example, the example shows my mock object having an expectation set up for the getData function, that it will be called once and return the value of one.
>
> **[3:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=215)** If there is no Times clause but there are one or more WillOnce or WillRepeatedly clauses, then the number of times that a mock function can be called will be inferred by Google Mock.
>
> **[3:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=229)** In this slide, I'll go over a few more Action examples.
>
> **[3:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=234)** In the first example, the WillRepeatedly clause is used.
>
> **[3:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=238)** This example says that the getData method can be called any number of times and will always return one.
>
> **[4:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=245)** In the next example, WillOnce is used three times with three different values.
>
> **[4:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=250)** The specified expectation is that the function getData will be called three times.
>
> **[4:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=255)** The first time it should return one, the second time it should return two, and the third time it should return three.
>
> **[4:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=262)** In the last example, the Times clause is being used with the WillRepeatedly clause.
>
> **[4:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=267)** Because of the Times clause, the expectation is that the getData function will be called exactly four times.
>
> **[4:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=273)** Because of the WillRepeatedly clause, the action for each call is that getData will return one.
>
> **[4:40](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=280)** Now, I'll go over a simple working example in eclipse.

> [!info]- Semantic Content
>
> **Code Keywords:** function (17), class, (1), throw (1)
> **Code Identifiers:** getdata (8), setdata (2)
> **Env Vars:** expect_call (5), mock_method (1)
> **Cross-References:** in the next (1), in the last (1)
> **Definitions:** means that (1), is called (1)
> **Analogies:** such as (2)
> **Prerequisites:** set up (1)

#### Google Mock example
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=0)** - [Instructor] Now I'm going to go over a very simple working example.
>
> **[0:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=3)** In this example, I'm going to use TDD with Google Test and Google Mock to implement a class that holds data.
>
> **[0:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=9)** First I'm going to create an interface class for a queue that can enqueue and dequeue data.
>
> **[0:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=15)** Then I'm going to create a mock class for that interface.
>
> **[0:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=18)** With all of that in place, I'll use TDD to implement a DataHolder class that will be passed in an instance of the queue interface, and its constructor, and will implement the getData and addData methods that will use the queue's enqueue and dequeue methods.
>
> **[0:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=34)** I've created a new C++ project for this kata, and verified that it builds and executes.
>
> **[0:39](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=39)** My next step it to get it configured to use Google Test and Google Mock.
>
> **[0:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=43)** To do that, I need to add their include path, libraries, and library paths for Google Test and Google Mock to the project.
>
> **[0:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=51)** Okay, so I'll right-click on my GMockTest project, which is the project I created for this kata, and then under C/C++ General, Paths and Symbols, on the Includes tab, and the GNU C++ language, we're going to add the file system path for the Google Test include files.
>
> **[1:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=73)** Googletest, include.
>
> **[1:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=78)** And the Google Mock include files.
>
> **[1:29](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=89)** Then in the Libraries tab, I'm gonna add the Google Mock, and Google Test Libraries.
>
> **[1:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=98)** Now that I'm using Google Mock, Google Mock has its own version of the main method which will initialize both Google Mock, and Google Test in the Google Mock library itself, and in the gtest library.
>
> **[1:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=116)** Then I need to add the pass for both those libraries.
>
> **[2:19](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=139)** And now I will go ahead and update my source code to validate that Google Mock and Google Test are linked in properly, and I can do a simple assert test.
>
> **[2:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=152)** gtest, gtest.h, gmock, gmock.h.
>
> **[2:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=163)** And I'm gonna change my main to be a simple assert test.
>
> **[2:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=172)** CanAssertTrue.
>
> **[2:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=177)** ASSERT_TRUE, true.
>
> **[3:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=185)** And I'll validate that compiles, and it does.
>
> **[3:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=189)** And I already have a Google Test test runner set up for this project.
>
> **[3:17](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=197)** Now I have my green bar.
>
> **[3:19](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=199)** Okay, so now I'll go ahead and add the queue interface class with the enqueue and dequeue pure virtual functions, and a virtual destructor.
>
> **[3:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=208)** As you should always add virtual destructors to all your base classes.
>
> **[3:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=213)** Class QueueInterface.
>
> **[3:40](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=220)** Public, virtual void enqueue.
>
> **[3:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=228)** I'll just have it take an integer of zero.
>
> **[3:54](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=234)** Virtual void, actually it's gonna return an integer dequeue, no parameters, equals zero, see's our pure virtual functions.
>
> **[4:04](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=244)** This is an abstract interface.
>
> **[4:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=248)** Okay, so now I'll implement the mock class for this queue interface.
>
> **[4:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=253)** The mock class will derive from queue interface, and then it will declare mock methods for enqueue, and dequeue using the mock method macro.
>
> **[4:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=262)** Okay, class MockQueue, derive from QueueInterface.
>
> **[4:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=284)** MOCK_METHOD, dequeue, integer.
>
> **[4:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=296)** And mock method, actually that's MOCK_METHOD0.
>
> **[5:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=301)** And this is MOCK_METHOD1.
>
> **[5:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=307)** Enqueue, void integer data, okay.
>
> **[5:17](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=317)** And I need to add my virtual destructor.
>
> **[5:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=326)** QueueInterface, okay.
>
> **[5:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=333)** So now I'm ready to start my TDD loop to implement the DataHolder class.
>
> **[5:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=337)** Let's list out the test cases.
>
> **[5:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=341)** First I wanna be able to instantiate an instance of the new DataHolder class.
>
> **[5:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=346)** Then I wanna validate that I can add data using its add data interface.
>
> **[5:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=351)** Then I wanna validate that I can add data, and get that same data back out using the add and get data interfaces.
>
> **[5:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=358)** I'll stop there as this is just a simple exercise.
>
> **[6:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=362)** Okay, I'm gonna start my TDD loop and enter the red phase for my first test case.
>
> **[6:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=367)** First thing I wanna do is create an instance of the DataHolder class, so I'm gonna write a failing unit test that drives me to do that.
>
> **[6:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=374)** I want the constructor to be passed an instance of the queue interface, so I'll go ahead and create an instance of my mock queue and pass that in.
>
> **[6:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=381)** So I'm going to get rid of my CanAssertTrue test, and reuse it for the CanInstantiateDataHolder test case.
>
> **[6:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=394)** And inside I need to create an instance of my mock class.
>
> **[6:45](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=405)** And then create an instance of the NewDataHolder class.
>
> **[6:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=410)** Passing it my mock object.
>
> **[6:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=417)** So the IDE is telling me that I've got a compile error.
>
> **[7:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=420)** The DataHolder class does not exist yet.
>
> **[7:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=423)** So I've got a failing unit test, so I'm done with the red phase.
>
> **[7:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=427)** So now that I've got a failing unit test, I can go ahead and enter the green phase, and make it pass.
>
> **[7:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=432)** I'll do that by creating the initial implementation of the DataHolder class.
>
> **[7:17](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=437)** Class DataHolder, which is going to have a protected member variable for the queue.
>
> **[7:29](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=449)** QueueInterface, pointer, queue.
>
> **[7:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=457)** And then I'll have a public constructor where it's passed the queue instance.
>
> **[7:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=468)** Which we will set in the initializer list.
>
> **[8:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=482)** And now the IDE is telling me that my compile error is gone, so I should be able to build this, and see it execute.
>
> **[8:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=490)** And it compiles and executes successfully.
>
> **[8:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=492)** Now that the unit test is passing, I can enter the refactor phase.
>
> **[8:17](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=497)** There's nothing to refactor here, so I'm gonna go ahead and move on to the next test case.
>
> **[8:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=501)** For the next test case, I wanna verify I can successfully call the setData method.
>
> **[8:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=506)** I'm in the red phase, so I'm going to implement a failing unit test.
>
> **[8:29](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=509)** I'll use my mock object to verify that the enqueue method is called with the correct value passed in.
>
> **[8:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=517)** We're gonna create a new test, TEST(GMockTests, CanAddData).
>
> **[8:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=528)** Mock Queue myMockObj, and DataHolder dh addressed at myMockObj.
>
> **[9:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=542)** Now I want to create an expectation on my mock object, that will verify the enqueue method is called, and passed in the correct parameter.
>
> **[9:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=551)** So I'm going to use EXPECT_CALL, passing in my mock object, and the enqueue method.
>
> **[9:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=563)** And using the underscore, which is the accept any value wildcard.
>
> **[9:31](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=571)** The compiler, the IDE is telling me I have a compile error here.
>
> **[9:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=574)** It's because I haven't pulled in the name space for this underscore character.
>
> **[9:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=578)** So I'll go ahead and do that now.
>
> **[9:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=582)** Using testing, underscore.
>
> **[9:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=589)** Okay, that cleared that up.
>
> **[9:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=593)** And now I can make the addData call, addData(1).
>
> **[10:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=600)** Okay, so again my IDE is telling me that I have a compile error, which means I have now successfully completed creating my failing unit test.
>
> **[10:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=608)** And I can go ahead and move on to the green phase.
>
> **[10:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=611)** In this phase, I need to make the test pass by updating the DataHolder class to provide the addData method.
>
> **[10:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=618)** I'll provide just enough implementation to ensure that I can call addData, and that it calls the queue's enqueue function.
>
> **[10:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=625)** Let me do that now, we need to add a public method, void addData, integer data.
>
> **[10:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=635)** And inside here, I'm going to call the queue's, the queue's enqueue function.
>
> **[10:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=646)** Passing it that data.
>
> **[10:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=651)** And I no longer have a compile error, so I should be able to compile, and see my test run successfully, and it does.
>
> **[11:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=660)** Okay, so now, let's refactor.
>
> **[11:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=663)** I'm instantiating the DataHolder class in my new test, so I can remove the first unit test where I was just validating that it could be instantiated.
>
> **[11:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=673)** I'll go ahead and do that, and validate that my test still runs.
>
> **[11:19](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=679)** Then I'll mark off that test case.
>
> **[11:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=686)** Okay, so back to the red phase.
>
> **[11:29](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=689)** In this next test case, I'm going to both add data, and get data.
>
> **[11:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=693)** I'm in the red phase, so I'll first implement the failing unit test.
>
> **[11:39](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=699)** TEST(GMockTests, CanAddAndGetData).
>
> **[11:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=712)** MockQueue myMockObj.
>
> **[11:59](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=719)** DataHolder dh, which takes the pointer to my mock object.
>
> **[12:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=728)** Now I wanna set up the expectation that the enqueue method is going to be called, with the value of one.
>
> **[12:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=735)** And that the dequeue method is called, and I want the dequeue method to return one, when it's called.
>
> **[12:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=743)** So I'll use the EXPECT_CALL, passing in myMockObj.
>
> **[12:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=752)** And the enqueue method, and this time I want it to be the one passed in.
>
> **[12:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=763)** And then I wanna EXPECT_CALL, myMockObj, and the dequeue method.
>
> **[12:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=773)** And it will be called once, and it should return one.
>
> **[13:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=783)** So I've got some compile errors here, this is because I haven't specified the name space for the return function, so I'll go head and do that now.
>
> **[13:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=794)** Using testing Return.
>
> **[13:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=801)** I cleared that up.
>
> **[13:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=803)** So now that I have my objects instantiated, and my expectations created, I can go ahead and make my calls to the DataHolder object, and validate that I get the expected result.
>
> **[13:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=817)** So dh.addData(1).
>
> **[13:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=824)** Integer data = dh.getData.
>
> **[13:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=832)** Then I want to assert that the data that came back is one.
>
> **[14:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=841)** I've completed implementing my unit test and I've got a compile error.
>
> **[14:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=845)** Now that my test is failing, onto the green phase and make it pass by implementing the getData method, and having it call the queue's dequeue method.
>
> **[14:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=853)** I'll use my mock objects dequeue method to verify that it gets called, and have it return the expected value.
>
> **[14:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=860)** So let's do that now.
>
> **[14:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=865)** Void, int getData.
>
> **[14:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=872)** Queue->dequeue, return queue->dequeue.
>
> **[14:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=889)** So that cleared the compile error, so now I should be able to build and run my unit test and see that it passes, and it does.
>
> **[14:59](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=899)** Now I'm ready to refactor.
>
> **[15:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=901)** At this point, I could refactor this to have a test fixture that instantiates both my mock queue, and the instance of the DataHolder class, as they are both needed for each test.
>
> **[15:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=911)** But I'll leave that to you as part of the exercises for this lecture.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (9), pass (5), class. (5), let (4), case. (4)
> **Env Vars:** tdd (4), ide (4), expect_call (3), test (2), gnu (1)
> **Code Identifiers:** adddata (7), mymockobj (5), getdata (4), setdata (1)
> **CLI Commands:** make (5)
> **Definitions:** is called (3), is an  (1)
> **File Paths:** gtest.h (1), gmock.h (1)
> **Prerequisites:** set up (2)
> **UI Navigation:** right-click (1)


### 6. Test-Drive Development Best Practices

#### Test-driven development best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=1)** - [Instructor] There are a lot of things you can do to help with your practice of unit testing and test-driven development.
>
> **[0:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=5)** In this lecture, I'll go over some of the best practices that I have found are essential to making test-driven development productive.
>
> **[0:13](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=13)** You should always do the next simplest test case.
>
> **[0:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=16)** This allows you to gradually increase the complexity of the code, refactoring as you go.
>
> **[0:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=21)** This helps keep your code clean and understandable.
>
> **[0:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=25)** If you jump to the complex cases too quickly, you can find yourself stuck writing a lot of code for one test case which breaks the short feedback cycle we look for with TDD.
>
> **[0:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=35)** Beyond just slowing you down, this can also lead to bad design as you can miss some simple implementations that come from the incremental approach.
>
> **[0:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=44)** Always use descriptive test names.
>
> **[0:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=47)** Code is read thousands of times more than it's written as the years go by.
>
> **[0:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=51)** Making the code clear and understandable should be the top priority.
>
> **[0:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=55)** Unit tests are the best documentation for the developers that come after you for how you intended your code to work.
>
> **[1:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=61)** If they can't understand what the unit test is testing, that documentation value is lost.
>
> **[1:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=67)** Test suites should name the class or function that is under test and the test names should describe the functionality that is being tested.
>
> **[1:17](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=77)** Keep your unit tests building and running fast.
>
> **[1:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=80)** One of the biggest benefits of TDD is the fast feedback on how your changes have affected things.
>
> **[1:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=86)** You lose this if the build and/or execution of your unit test is taking a long time, i.e., more than a few seconds.
>
> **[1:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=94)** To help your test stay fast, try to keep the console output to a minimum or eliminated altogether.
>
> **[1:40](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=100)** This output just slows down the test and clutters up the test results.
>
> **[1:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=104)** And also try to mock out any slow collaborators that are being used with test doubles that are fast.
>
> **[1:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=112)** Use code coverage analysis tools.
>
> **[1:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=115)** Once you've implemented all your test cases, go back and run your unit test through a code coverage tool.
>
> **[2:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=120)** It can be surprising.
>
> **[2:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=121)** Some of the areas of your code you'll miss, especially negative test cases.
>
> **[2:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=126)** You should have a goal of 100% code coverage on functions with real logic.
>
> **[2:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=131)** Don't waste your time on one-line getter and setter functions.
>
> **[2:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=136)** Lastly, make sure your unit tests run multiple times and in a random order.
>
> **[2:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=141)** Running your tests many times will help ensure that you don't have any flaky tests that are failing intermittently.
>
> **[2:28](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=148)** Running your tests in random order ensures that your tests don't have dependencies between each other.
>
> **[2:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=154)** You can use the gtest_repeat and gtest_shuffle command line parameters with your Google test-based unit test executables to do this.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1), function (1), this. (1)
> **CLI Commands:** find (1), make (1)
> **Code Identifiers:** gtest_repeat (1), gtest_shuffle (1)
> **Env Vars:** tdd (2)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/next-steps?u=76281980&t=1)** - [Instructor] In this lecture, I'm going to quickly review what we went over in the course and where to go from here.
>
> **[0:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/next-steps?u=76281980&t=7)** Going through the course, we went over what Unit Testing and Test-Driven Development are and had a quick hands-on example, and we had an overview of Google Test, the C++ Unit Testing Framework from Google, then we had another more complex hands on example of TDD in the supermarket checkout Kata, then we reviewed the types of Test Doubles and how they help us test our code in isolation and we worked through an example using Googlemock, and lastly we went over some essential best practices of Unit Testing and Test-Driven Development.
>
> **[0:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/next-steps?u=76281980&t=44)** So that completes this course on Beginning Test-Driven Development in C++.
>
> **[0:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/next-steps?u=76281980&t=49)** I hope you've enjoyed this course and found it a valuable source of information and training on Unit Testing and Test-Driven Development in C++.
>
> **[0:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/next-steps?u=76281980&t=57)** If you have any questions or concerns about this course, please feel free to contact me and I'll try to respond quickly with any updates to the course as necessary.
>
> **[1:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/next-steps?u=76281980&t=66)** Thank you very much for your time and your interest in this course.

> [!info]- Semantic Content
>
> **Env Vars:** tdd (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Master C++]]
← [[Complete Guide to Parallel and Concurrent Programming with C++]] | **3 of 6** | [[C++ Design Patterns- Behavioral]] →

## Appears In

- [[Master C++]]

## Related Courses

_Courses sharing skills:_

- [[JavaScript- Test-Driven Development (ES6)]] — Test-Driven Development
- [[Nail Your C++ Interview]] — C++
- [[Web Servers and APIs using C++]] — C++
- [[Learning C++]] — C++
- [[Introducing Functional Programming in C++]] — C++

---

[↑ Back to top](#)