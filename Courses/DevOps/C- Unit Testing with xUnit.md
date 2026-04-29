---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: c-sharp-unit-testing-with-xunit
url: "https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit"
duration_minutes: 49
duration: 49m
level: Intermediate
updated: 8/4/2023
learners: 45099
skills:
  - xUnit
  - C#
  - Unit Testing
exercise_files: true
github: "https://github.com/LinkedInLearning/c-sharp-unit-testing-with-xunit-4401481"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFbkepEwSX3vA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691084155010?e=2147483647&amp;v=beta&amp;t=JCv0g-b98lkNnkBiom6gDHCI9YwS6YnMx-w5v4RYCug"
linkedin_topic: DevOps
learning_paths:
  - '[[Elevating C- Skills- Building Robust Applications]]'
prev_courses:
  - '[[C- Cross-Platform Development]]'
next_courses:
  - '[[C- Practice- Generic Collections]]'
path_nav: '[{"path":"Elevating C- Skills- Building Robust Applications","position":7,"total":8,"prev":"C- Cross-Platform Development","next":"C- Practice- Generic Collections"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/mobile-development
  - topic/software-development
  - skill/xunit
  - skill/c
  - skill/unit-testing
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/C-%20Unit%20Testing%20with%20xUnit.md)

![C# Unit Testing with xUnit](https://media.licdn.com/dms/image/v2/D560DAQFbkepEwSX3vA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691084155010?e=2147483647&amp;v=beta&amp;t=JCv0g-b98lkNnkBiom6gDHCI9YwS6YnMx-w5v4RYCug)

# C# Unit Testing with xUnit

> In this course, learn the basics of test-driven development by creating a sample project in pure C# and using unit tests to validate that all the business logic works. Instructor Jesse Freeman first introduces you to the foundational concept of unit testing and the role xUnit plays in it. He then guides you through a detailed setup process of xUnit for your development environment. Jesse also delv

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit) | 49m | Intermediate | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. TDD Testing with xUnit]]** (3 videos)
- **[[#2. Writing and Running Unit Tests]]** (4 videos)
- **[[#3. Building a Simple Calculator]]** (4 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Getting started with xUnit
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/getting-started-with-xunit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/getting-started-with-xunit?u=76281980&t=0)** - Hi, my name is Jesse Freeman.
>
> **[0:02](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/getting-started-with-xunit?u=76281980&t=2)** Welcome to this course, "C# Unit Testing with xUnit."
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/getting-started-with-xunit?u=76281980&t=6)** In this course, I'll first introduce you to the foundational concepts of unit testing and the role xUnit plays in it.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/getting-started-with-xunit?u=76281980&t=13)** Then I'll guide you through a detailed setup process of xUnit for your development environment.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/getting-started-with-xunit?u=76281980&t=17)** We'll also dive deeper into the specifications of xUnit's function, benefits, and its core role in the test-driven development cycle.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/getting-started-with-xunit?u=76281980&t=27)** Now let's get started.

> [!info]- Semantic Content
>
> **Code Identifiers:** xunit (4)
> **Code Keywords:** function (1), let (1)
> **Prerequisites:** setup (1)
> **Speakers:** - hi (1)
> **Non-Speech:** (upbeat music) (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/what-you-should-know?u=76281980&t=0)** - [Narrator] This course is primarily targeted towards intermediate developers who have a basic understanding of software development practices.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/what-you-should-know?u=76281980&t=7)** Before diving in, you should have some familiarity with coding and a grasp of fundamental programming principles.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/what-you-should-know?u=76281980&t=14)** Knowing how to write code is a must, and a basic understanding of testing practices would be helpful, but is not required.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/what-you-should-know?u=76281980&t=20)** I will walk you through every concept to ensure you have a firm understanding by the end of this course.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. TDD Testing with xUnit

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Using xUnit for testing
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=0)** - [Instructor] The role of XUnit in unit testing.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=3)** Let's explore the concepts of unit testing in software development, its benefits, and the advantages of using Xcode, which is a robust unit testing tool for the .NET Framework.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=13)** First, let's start with an introduction to unit testing.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=16)** Unit testing is a fundamental aspect of software development, serving to verify the functionality in individual units of source code.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=24)** It's a critical first line of defense in finding and fixing bugs, facilitating changes, and ensuring overall software quality.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=32)** Unit tests offer numerous benefits.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=35)** They improve the quality of code, they make refactoring easier and safer, they can also serve as documentation, they speed up the development process, and they foster better design, among other advantages.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=48)** Unit testing is a critical part of the software development life cycle, typically occurring after the implementation phase, but before integration testing.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=57)** By catching issues early, unit tests save time and effort in later stages of development.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=63)** What are the real-world impacts of unit testing?
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=66)** A lack of adequate unit testing could have serious real-world consequences, leading to software failures that cost time, money, and even lives.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=74)** Now, in order for us to begin using unit tests in our project, we're going to need to use a library called XUnit.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=82)** XUnit is a free, open-source, community-focused unit testing tool for the .NET Framework.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=87)** It's designed to be a clear, concise, and user-friendly framework for writing tests in languages like C# and F#.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=95)** XUnit offers several notable features, including support for data-driven tests, easy integration with .NET Core, isolation of code through class level setup and teardown, and the ability to run parallel tests.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=109)** These features make it a powerful tool for unit tests in .NET environments.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=114)** Let's talk about XUnit versus other testing frameworks.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=118)** XUnit stands out from other frameworks due to its focus on community, flexibility, and modern testing conventions.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=125)** Here's how it compares to other popular frameworks like NUnit and MSTest.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=130)** XUnit has more flexibility due to unique features like the theory attribute for data-driven tests.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=137)** XUnit also has a strong community and is used in open-source projects and is open-source itself.
>
> **[2:23](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=143)** And finally, XUnit has built-in support for parallel testing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (1)
> **Env Vars:** net (4)
> **Definitions:** is a  (4)
> **CLI Commands:** make (2)
> **Exercise Files:** source code (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### The TDD cycle
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=0)** - [Narrator] Let's do a deep dive into the test-driven development cycle, or TDD for short.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=5)** We'll discuss where XUnit fits in, some important terminology used in XUnit, and each phase of the red, green, and refactor process.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=15)** Test-driven development is a software development methodology where you write tests before writing the corresponding code.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=22)** XUnit is a testing framework that'll provide us the structure and a way to create automated tests.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=29)** Let's take a look at some of the terminology we'll need to know when using XUnit.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=34)** A unit test is focused and tests a small unit of functionality.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=38)** This allows us to verify the correctness of our code at a granular level.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=43)** XUnit is a popular testing framework for .NET.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=46)** It provides a structure for writing and running tests, making it easier to ensure our code behaves as expected.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=53)** Assertions are the statements that test the logic of our code.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=57)** For instance, if we have a method that adds two numbers, an assertion might check that the results of this method is the sum of those two numbers.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=65)** Each test case is a scenario we want to test.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=69)** For example, a test case might be the add method of a calculator class should return five when passed the numbers two and three.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=77)** And finally, a test suite is a collection of test cases that are related.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=82)** For example, you might have a test suite for all of the methods of your calculator class.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=87)** Let's discuss the first part of the test-driven development cycle.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=91)** We'll start with the red phase by creating a new test that fails.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=94)** We do this by creating a calculator instance, calling the add method with certain inputs, and checking that the result is as expected.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=103)** Since we haven't written any code, this test would automatically fail.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=108)** The next phase of the test-driven development cycle is the green phase.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=112)** Now that we have a failing test, we'll write just enough code to pass the test.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=117)** Here you can see we've created a method called add that accepts two integers and returns the sum of those two integers.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=126)** And the final phase of the test-driven development cycle is refactor.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=131)** In this phase, we improve the code while making sure the test suite still passes.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=136)** For instance, we could refactor the add method to accept any number of arguments.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=141)** Now that we've written the test, anytime that we change the underlying logic to the method, it should pass the test as expected.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=149)** If not, we know that we've created a problem and we have to go back and continue to correct the code until it passes the test.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (2), for . (1), finally, (1), class. (1)
> **Definitions:** is a  (5)
> **Analogies:** for instance (2), for example (2)
> **Env Vars:** tdd (1), net (1)
> **Speakers:** - [narrator] (1)

#### Installing xUnit
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=0)** - [Instructor] Now, let's go through the process of setting up Xcode in your development environment.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=5)** If you don't already have .NET installed, you can get the .NET Core SDK from the official website or you can use Visual Studio, like I'll be using, for the Mac.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=16)** Simply download install Visual Studio from the official site.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=20)** This IDE is a comprehensive software development environment tailored for creating .NET applications.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=27)** This will also install the .NET Core SDK and any of the libraries and tools you'll need to develop applications and libraries.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=36)** When you're ready, let's create a new solution.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=40)** We'll select the Console Application from the template list and click Continue.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=47)** We'll target .NET 7.0 and let's call the project HelloCalcApp.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=58)** For the solution name, we'll simply delete the app so that it says HelloCalc.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=64)** As you can see from the preview, we have a folder for the HelloCalc project with the solution in the route and a separate folder for the app along with its project file.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=75)** Once you've decided on location for your project, click the Create button.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=79)** Here you can see we've created a simple console application, which is a program that'll take input and display output at the command line or the terminal.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=87)** Next, we need to add our tests.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=90)** We can do this by right-clicking on the solution, go to Add, and select New Project.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=97)** From here, we can go to our tests and select the xUnit Test Project.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=102)** Then, hit Continue.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=104)** Again, we'll use .NET 7.0 and we're going to name this HelloCalcTests.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=113)** Click Create, and now you can see that our HelloCalc solution has two projects in it: our app and our tests.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=123)** The xUnit Test Projects is can provide the structure format for creating the unit tests we need when testing our application.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=131)** Before we do that, though, we need to link it to our application.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=136)** So right-click on the Dependencies folder inside of our test project.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=140)** Select Add Project Reference and check our HelloCalcApplication project.
>
> **[2:28](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=148)** Linking projects allows one project to use the classes methods and other code elements defined in another project.
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=154)** As you can see, the project template already created our first test, so let's go and run all the tests in this project.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=162)** We'll do this by opening up the test panel and pinning it so it always stays open.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=168)** Since we haven't run any tests, we won't be able to explore and see the list of tests available to us.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=174)** So, let's run the test for the first time.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=178)** This will go through our test project, identify any tests that we've defined, run them, and give us a green check mark if they've passed.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=187)** As you see, our Test1 has passed, and we know that everything is working.

> [!info]- Semantic Content
>
> **Env Vars:** net (6), sdk (2), ide (1)
> **Code Keywords:** let (5), continue (2), delete (1)
> **UI Navigation:** select the (2), go to (2), right-click (1)
> **Tools:** visual studio (2), command line (1), terminal (1)
> **Prerequisites:** install (2), you'll need (1)
> **Code Identifiers:** xunit (2)
> **Versions:** 7.0 (2)
> **Exercise Files:** template (2)


### 2. Writing and Running Unit Tests

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Writing your first unit test with xUnit
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=0)** - [Instructor] In this video, let's discuss writing your first unit test in the xUnit framework.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=5)** Since we've already run our first test by using the default test that was created for us when we created the hello calcs test project, now let's look at how to write our own test.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=16)** A basic xUnit test consists of a public method with no parameters marked by the fact attribute.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=23)** (keyboard clacking) We can write our own test by creating a fact attribute, then create a public method called MyFirstTest.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=35)** Now, if we go back to our test panel and rerun it, you should see that our test will show up.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=41)** Since we're not actually testing anything, it's always going to pass, just like the original test that was created in this project.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=49)** Let's go ahead and write our first assertion.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=52)** (keyboard clacking) Now let's create a new fact, and we're going to call this public method TestIfTrueIsTrue.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=64)** One thing to keep in mind, since we're going to be referring to each test inside of the test panel, it helps to create useful method names that are easy to identify in a long list.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=75)** In this case, our method is TestIfTrueIsTrue.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=80)** Inside of the method, we're going to write an assertion, and the assertion is going to test if the value passed into it is true.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=88)** Since true is always true, this test will also always pass.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=94)** Let's go ahead and rerun all of our tests.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=99)** The test results panel in Visual Studio is going to give you an overview of all of your tests, and if the test fails, it'll provide a detailed message about what went wrong.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=108)** Let's go ahead and see what that looks like by changing the true to a false and rerunning our tests.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=118)** As you can see, our first two tests passed because they're not actually testing anything, but false can never be true, so our test failed.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=128)** You can always right click on a test and rerun it, or go to the actual source code for the test, which will jump you to the test itself.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=137)** Now let's go ahead and change this back to true.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=140)** (keyboard clacking) And rerun just this test by right clicking on it and selecting run test.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=149)** As you can see, the test has now passed, and since we know that the other tests have already passed, Visual Studio is simply going to show us the result for the test that we ran.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), public (3), pass (2), case, (1)
> **Code Identifiers:** xunit (2)
> **Tools:** visual studio (2)
> **UI Navigation:** click on (1), go to (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** source code (1)
> **Analogies:** just like (1)
> **Warnings:** keep in mind (1)

#### Asserting with xUnit
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=0)** - [Narrator] Let's write some simple assertions to get familiar with validating your code's behavior.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=5)** Assertions are the heart of unit tests.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=7)** They check conditions that must be true for the test to pass.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=12)** An assertion verifies that a particular condition is met, if the condition is not met, then the test will fail.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=18)** The assert equals method checks if two values are equal.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=23)** Let's look at how we can write our own assert equals test.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=27)** We're going to call this two plus two equals four.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=38)** Inside of the test, we're going to create a result variable that will store the value of two plus two.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=44)** And next we're going to call the assert equals method.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=48)** We're going to start by passing in four, since that's what the test requires in order to pass.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=53)** And then we're going to pass in the result in order to make sure that the two are equal.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=57)** Now let's go ahead and rerun all the tests in our project.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=63)** As you can see, our two plus two equals four test has passed and now we're ready to take a look at a different assertion.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=70)** In this case, we're going to look at not equal.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=79)** Let's create a new test called two plus two not equals five.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=84)** We'll set it up like the test before, where we create a variable that stores the value of two plus two.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=89)** But this time we're going to run an assertion not equal and we're going to pass it in the number five and we're going to use the result to verify what the value should actually be.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=101)** Let's go ahead and run our tests.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=105)** As you can see, the new test now passes and that's because the assert not equals checks that the two values are not equal.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), pass (4), assert (4), case, (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### Understanding the core unit testing workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=0)** - [Instructor] Let's learn about the Arrange-Act-Assert pattern, a common methodology in unit testing that ensures your tests are well structured and understandable.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=10)** The Arrange-Act-Assert pattern is a common way of writing and structuring unit tests.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=14)** It divides the test into three distinct sections, arrange, act, and assert.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=20)** This helps keep our test organized and understandable.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=24)** This flow chart helps us understand the Arrange-Act-Assert pattern.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=28)** In the Arrange phase, we set up the conditions for the test and prepare the inputs.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=33)** In the Act phase, we execute the functionality we're testing.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=37)** And in the Assert phase, we verify that the result is expected.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=41)** Now that we have an understanding of this pattern, let's move on to writing some tests.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=47)** Now let's go ahead and write a simple test using the AAA pattern.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=51)** We're going to call our test CanAddNumbers.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=61)** Inside of our CanAddNumbers test, we're going to set up the Arrange phase.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=67)** In this, we're going to create two variables that'll store the numbers two and three.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=72)** This is where we initialize our objects and set the value that's going to be passed to the methods in our test.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=78)** Next is the Act step.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=80)** In this case, we're going to create a result variable by adding the number one and number two variables together.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=88)** This is where we invoke the method under the test with the new parameters we're passing in.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=93)** And finally, we're going to do the Assert step.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=97)** Here we're going to do Assert dot Equals, and we're going to pass in the number five since that's what we want to test and we're going to compare it to the results that were calculated above.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=108)** The Assert is going to verify the action of the method and make sure that it behaves as expected.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=114)** Let's go ahead and run our test and see if it passes.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=119)** As you can see, the test has passed and we've come up with a more consistent and standardized way for structuring the logic inside of the test itself.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=129)** Let's take a look at a more complex AAA test.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=141)** Now let's create a new test called CanCalculateAverage.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=145)** In the Arrange step, we're going to create an array of numbers.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=149)** We'll use 2, 3, 5, 7, and 11.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=155)** In the Act step, we're going to create a new variable that's typed to a double called average, and we're going to average all the numbers together inside of the array.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=165)** We'll do this by calling numbers.Average.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=168)** And finally, in the Assert step, we're going to test to see if the value 5.6 is to the average we calculated above.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=179)** And finally, we're going to pass in a new value of one to the end of the Equal method.
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=185)** This last parameter is going to be the precision used in order to verify the average.
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=192)** Let's go ahead and run our test.
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=196)** Once again, Visual Studio is going to go through all of our tests, and both tests should now pass confirming that the calculations in your methods are correct.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=205)** Now let's look at a more advanced AAA test with parameters.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=210)** In this step, we'll implement a test that uses a theory and an InlineData attribute for parametrization.
>
> **[3:37](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=217)** This can make your test more efficient and readable.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=220)** We'll start by creating a new Theory attribute.
>
> **[3:43](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=223)** The Theory attribute denotes a parameterized test that is true for a subset of data.
>
> **[3:49](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=229)** Next, we'll create an InlineData attribute.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=233)** The inline attribute is used to supply the value of those parameters.
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=238)** We'll start by passing in the values 3, 7, and 10.
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=243)** We can also run multiple tests by simply adding additional lines of InlineData attributes.
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=250)** Let's add -3, -7, and -10.
>
> **[4:15](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=255)** And then finally we'll do one last InlineData attribute with the values 100, 200, and 300.
>
> **[4:25](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=265)** We're going to call our test CanAddNumbersParameterized.
>
> **[4:30](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=270)** We're going to pass in three arguments, number one, number two and what we expect the results to be.
>
> **[4:39](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=279)** As you can see, these match up to the three values we're supplying in the InlineData attributes.
>
> **[4:46](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=286)** Now for our Arrange step, the data is arranged through the InlineData attribute, so we don't need to do anything.
>
> **[4:52](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=292)** For the Act step, We're going to create an integer called result and we're going to pass it, number one and number two, which are being passed in by the InlineData.
>
> **[5:03](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=303)** And for the Assert step, we're going to see if the expected result, which we're passing in from the InlineData, is equal to the results we calculated above.
>
> **[5:13](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=313)** Let's go ahead and run our tests.
>
> **[5:19](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=319)** As you can see, three new tests popped up, and that's because each InlineData attribute will be its own test in the output window.
>
> **[5:29](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=329)** Each one of these tests passed, and we now have a better way of passing in dynamic values into each of our tests.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), assert (10), pass (5), finally, (3), this, (1)
> **Env Vars:** aaa (3)
> **CLI Commands:** make (2)
> **Prerequisites:** set up (2)
> **Versions:** 5.6 (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Expanding your xUnit toolkit
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=0)** - [Instructor] In this video, I want to introduce you to more assert methods available in the xUnit framework.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=5)** These methods allow for a broader range of test conditions, enabling you to more thoroughly test your C# code.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=12)** Let's start with assert false.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=16)** We've already looked at assert true, so assert false does the opposite and tests to see if a condition is false.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=29)** We're going to create a test called test false and all we're going to do here is set up an arrange step for our condition to be false and the assert step will test if the condition is false.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=44)** If we run our test, we'll see that this should pass.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=48)** Next, we'll look at assert null.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=54)** Let's create a test called test null and the arrange step we're going to create a generic object and set its value to null.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=64)** Again, we don't need to do an act step, so we'll simply do an assert step and we're going to assert that the object variable is actually null.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=74)** This is useful for making sure that when you instantiate classes or other values in your code, that they are either expected to be null or are not null in order to pass their test.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=87)** Let's go ahead and run the test and make sure that this works.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=93)** As you can see, the test is passed and let's move on to the next assert, not null.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=101)** We'll name our test test not null.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=105)** In the arrange step, we're going to create an object variable again and this time we will set it to a new instance of a generic object class.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=113)** For the assert, we'll call not null and make sure that the object now has a value and is not null.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=121)** Let's go ahead and run our test and make sure that it passes.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=125)** Looks like everything is still passing.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=127)** So let's move on to assert contains.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=138)** Let's name our test test contains.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=141)** In the arrange step, we're going to create a list called collection and inside of the list we'll create an integer 42.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=150)** In the assert step, we're going to assert that our collection contains 42.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=156)** This method is useful for verifying that a collection contains a specific item.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=161)** Let's go ahead and run our test and see if it passes.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=165)** As you can see, all of our tests pass, so let's move on to assert in range.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=173)** Let's create a new test called test in range.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=177)** In the arrange step, we're going to create a variable called actual and we'll set it to five.
>
> **[3:04](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=184)** For the assert, we're going to call assert in range, we'll pass it in the actual, and we can also pass in a minimum and maximum value.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=194)** Let's go ahead and run the test and make sure it passes.
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=199)** As you can see, this test passes, too, and we can move on to assert empty.
>
> **[3:24](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=204)** This method verifies that a collection is empty.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=210)** We'll call our test test empty.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=213)** In the arrange step, we're going to create a new list called collection and set its type to int.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=220)** In the assert, we're going to do assert dot empty and pass in our collection.
>
> **[3:46](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=226)** This is different than testing whether the assertion is null or not null.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=231)** In this case, we've already instantiated the object, but we want to make sure that there's nothing inside of it.
>
> **[3:57](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=237)** So let's go ahead and run our test and see if it passes.
>
> **[4:01](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=241)** As you can see, all of our tests are still passing and let's move on to our final one, assert dot not empty, which is the opposite of what we just did.
>
> **[4:15](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=255)** This method verifies that a collection is not empty.
>
> **[4:19](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=259)** Let's go ahead and create our test called test not empty.
>
> **[4:24](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=264)** In the arrange step, we're going to create a new list collection typed to integer again and we're going to set its default value to one and in the assert step, we're going to call assert not empty and pass in our collection.
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=278)** Now let's run through all of our tests and make sure that everything works.
>
> **[4:42](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=282)** As you can see, all 17 of our tests have now passed and we have full coverage over our imaginary app.
>
> **[4:50](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=290)** In the next few videos, we're going to actually build a simple calculator and put all of these different assertions to use.

> [!info]- Semantic Content
>
> **Code Keywords:** assert (22), let (15), pass (7), class. (1), case, (1)
> **CLI Commands:** make (6)
> **Code Identifiers:** xunit (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Building a Simple Calculator

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Creating addition and subtraction logic
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=0)** - In this video we're going to create a calculator.
>
> **[0:02](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=2)** It's going to have an add and subtract function.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=5)** In order to make sure that these functions work as expected we're going to leverage the arrange, act and assert pattern.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=12)** As a reminder, arrange means that we prepare the test, act means that we execute the functionality we want to test and assert means that we compare the actual result with the expected result.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=24)** Let's get started by creating a new test class.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=27)** We can close out the old test class that we were using previously and right click on the project and create a new class.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=35)** We're going to call this calcTests.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=41)** Now we're going to start by adding a test for the ad function that doesn't exist yet.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=45)** This fits with the red phase of the red, green refactor cycle where we write tests that initially fail.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=52)** Let's call our first test AddTwoIntegers.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=56)** In the arrange step, we're going to create a new reference to the calculator, which we've yet to create.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=63)** In the act step, we're going to calculate the result of using the calculator to add one and two together.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=72)** And finally, in the assert step, we're going to assert that three equals the result that we calculated before.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=80)** Now we can't run this test just yet 'cause we haven't created our calculator class so let's go ahead and do that in order to get this test to pass.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=88)** Since we've linked our test class project up with our application, we can go ahead and create the new class inside of the Hello Calculator application project.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=100)** We're going to call this calculator.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=104)** Inside of the calculator class we're going to create a new public method called Add.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=112)** This method will accept two values, A and B and all the method does is return the value of A plus B.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=121)** Now let's go back into our CalcTest file.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=125)** As you can see the calculator class still isn't resolving itself and that's because our tests are in a different namespace than our calculator.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=133)** Let's correct that by changing the namespace of HelloCalcTests to HelloCalcApp.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=141)** Now when we save the file, we can go ahead and run the tests and see if this new test passes.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=149)** Now when we look at our test panel if we expand the HelloCalcTests, we see that we now have tests for our app and we have our previous HelloCalcTests.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=160)** Inside of here is the Unit Test one file and in the HelloCalcApp project we have our calc tests.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=169)** If we expand this, we'll see that our first test, AddTwoIntegers has passed.
>
> **[2:55](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=175)** Let's go ahead and hide the other tests and focus on the HelloCalcApp tests as we move forward.
>
> **[3:02](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=182)** Now that we've finished the green phase, which is the second phase of test-driven development, we've written just enough code to satisfy the test condition.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=191)** At this point, let's move on to our subtraction method.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=194)** We'll start again in the red phase by creating a test that fails.
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=199)** Let's name our test, SubtractTwoIntegers.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=210)** In the arrange step, we're going to create a new instance of the calculator, just like we did before.
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=215)** In the act step, we're going to calculate subtracting three minus two, and in the assert phase, we're going to test to see that one equals the result we calculated above.
>
> **[3:48](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=228)** Again, you'll see that the subtract method is now throwing an error 'cause we haven't created it.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=233)** So let's go into the green phase where we implement the subtract function for the calculator class and make our failing test pass.
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=243)** We'll create a new subtract method that accepts two values A and B, and we'll return the results of A minus B.
>
> **[4:12](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=252)** If we go back into our test file, you'll see that the error is gone and we can now run our tests.
>
> **[4:19](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=259)** Now we have two passing tests for our two methods, add and subtract.
>
> **[4:24](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=264)** Next we'll take a look at how to implement the third part of test-driven development, which is refactoring.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), assert (5), function (3), class. (2), pass (2)
> **Definitions:** means that (3)
> **CLI Commands:** make (2)
> **Code Identifiers:** calctests (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Speakers:** - in (1)
> **Non-Speech:** (typing) (1)

#### Using assertions and refactoring
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=0)** - [Instructor] In this video, we'll dive into the important role unit testing has during the modification and enhancement of existing code.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=6)** Our focus will be on refactoring the add and subtract functions of our calculator to support multiple arguments.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=13)** We'll verify these modifications work by writing corresponding unit tests.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=17)** We'll start by writing a parameterized test for the enhanced add function that can accept multiple parameters, even though this functionality doesn't exist yet.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=26)** (keyboard clicks) Let's start by creating a new theory.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=31)** We'll use an inline data to pass in an array of integers as well as the value we expect them to be after we add them all up.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=40)** We'll start with one, two, three, and six, and for the second test we'll create an inline data with an integer array containing 4, 5, 6 and 15.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=54)** Now we'll create the new test called AddMultipleIntegers.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=58)** We'll pass it in the array of numbers and an expected integer.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=65)** For the arrange step we're going to create a new instance of the calculator.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=70)** In the act step, we're going to calculate the results by passing the numbers into the calculator's Add method.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=79)** As you can see, we're going to get an error because the existing Add method only accepts two numbers.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=86)** In the assert step, we're going to assert that the expected value equals the result we just calculated.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=93)** Now let's go into our calculator class and refactor our Add method to support multiple numbers.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=104)** (keyboard clicks) Now let's start by refactoring the Add method.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=109)** We're going to use the params keyword in order to allow any number of numbers to be passed into the method.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=116)** Let's delete the previous code and create the new logic that'll add all the numbers passed in together.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=122)** We'll start by creating a variable called sum and set it equal to zero.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=128)** Next, we're going to need to create a for loop that iterates over the total length of the numbers being passed in.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=136)** Inside of this for loop we'll take the current sum and add the next number to it.
>
> **[2:23](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=143)** We do this by writing out sum plus equals.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=147)** Then we access the current i value in the for loop for the numbers array.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=153)** And finally, when we're done, we can return the sum value.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=157)** Let's go ahead and run our test and see if everything passes.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=163)** As you can see, all three addition tests now work.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=167)** The new test that we created that accept multiple parameters and the original test we created that adds two numbers together.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=177)** This is how we know the refactoring has been successful because we haven't broken any previous tests.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=183)** But there's a third step to test-driven development, this is the refactor phase.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=189)** And even though we refactored this method there's still a way that we can simplify this and make it work even better.
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=196)** And since we already have the existing tests, whatever changes we make now inside of this method we'll be able to verify still pass all of our tests.
>
> **[3:26](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=206)** In order to simplify this method we're going to use the Sum method from the link library which simplifies the addition of all the numbers in the array.
>
> **[3:34](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=214)** Now let's go back into our add method and delete all the code inside.
>
> **[3:39](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=219)** Now we're going to write return numbers.Sum.
>
> **[3:48](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=228)** Now let's go back and rerun our tests.
>
> **[3:52](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=232)** As you can see, we've now refactored our code and simplified it greatly by taking advantage of link and all of our addition tests still work.
>
> **[4:01](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=241)** Now it's time for us to take the same principle and refactor the Subtract method just like we did with Add.
>
> **[4:07](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=247)** But before we write any code, let's make sure we have some additional tests to verify that this will work.
>
> **[4:16](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=256)** (keyboard clicks) Now we're going to create a new theory and in this theory's inline data we are going to subtract five, two, and one, and the expected result should be two.
>
> **[4:31](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=271)** And we'll also add a new test as well to subtract 10, 5 and 2.
>
> **[4:37](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=277)** And the expected result should be three.
>
> **[4:40](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=280)** We're going to name this test SubtractMultipleIntegers, and again, we'll pass in an integer array of numbers and an expected integer.
>
> **[4:51](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=291)** For the arrange step, we're going to create a new calculator.
>
> **[4:55](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=295)** For the act step, we're going to calculate the results by subtracting all the numbers.
>
> **[5:01](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=301)** Again, we're going to see an error here because we haven't modified the Subtract method.
>
> **[5:05](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=305)** And for the assert step, we're going to test that the expected value is equal to the results that we just calculated.
>
> **[5:13](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=313)** Let's go make the modifications in our calculator.
>
> **[5:16](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=316)** Now that we've learned how to refactor our code in the previous step, we can jump directly to a more optimized solution.
>
> **[5:24](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=324)** Let's first modify the Subtract method to accept multiple parameters.
>
> **[5:29](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=329)** (keyboard clicks) And next, let's use link to aggregate the numbers.
>
> **[5:36](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=336)** The Aggregate method for link applies to subtraction operations sequentially to all the numbers in the array, resulting in a single output.
>
> **[5:45](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=345)** Let's return the numbers array and call aggregate.
>
> **[5:49](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=349)** We're going to pass in an a b value and every time we get an a b value we're going to subtract b from a.
>
> **[5:57](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=357)** The subtraction starts from the first number and subtracts each sequential number.
>
> **[6:02](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=362)** Let's go ahead and run our tests and see if everything still works.
>
> **[6:07](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=367)** At this point, you can see that all of our tests are now passing.
>
> **[6:11](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=371)** All we've done is simply refactored and modified our Add and Subtract methods to accept multiple numbers.
>
> **[6:18](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=378)** And we used existing and new tests to make sure that we didn't break any of our code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), pass (5), assert (3), delete (2), function (1)
> **CLI Commands:** make (5)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Creating a history functionality
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=0)** - [Instructor] This video will focus on the importance of using IDisposable in xUnit tests to ensure the proper setup and teardown of resources.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=8)** We will implement a history feature for the add function that stores all the results.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=13)** This will help us understand how to avoid data corruption between tests.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=17)** Let's get started and create a new test called AddAndStoreInHistory.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=23)** Now, in our new test for AddAndStoreInHistory our arrange step will be to create a new instance to the calculator.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=31)** For act we're going to calculate two results.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=34)** We want to make sure that every time we add numbers in the calculator we're able to go back through the history and see the value that was calculated.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=45)** We're going to create a variable called result1, and in it we're going to call calc.Add and pass in one, two, three.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=54)** And our expected result is going to be six.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=59)** For result2 we'll call calc.Add, and we're going to pass in four, five, six, and the expected result should be 15.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=69)** Now, in our assert step we're going to create three assertions.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=73)** The first one is to test that the total history equals two.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=79)** So, let's start by writing Assert.Equals, we'll pass in two, and we're going to get the count from the calculator's history.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=88)** Now, we're going to get an error here because we haven't created the history just yet, but we'll do that in the next step.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=94)** Next, we'll write Assert.Equal and test that result1 is equal to the first item in the calculator's history array.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=105)** And finally, we'll call Assert.Equal, and we'll test that result2 is equal to the second item in the history.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=114)** Let's go into our calculator class and add the history logic.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=119)** The first thing we're going to need to do is create a list to store our history.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=124)** We'll do this at the top of the class, and we'll make it public since we need to access it from our test suite.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=131)** And we'll create a public getter and a private setter.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=137)** Now in our constructor let's go ahead and create a new instance of the history list.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=146)** Now we need to refactor our add method again.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=150)** We'll start by replacing the return, and setting the value of the sum to a new variable called result.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=161)** Next, we'll call History.Add and add the result to the history list, and now we can return the final result.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=173)** Now when we rerun our tests we should see that all of our previous add tests should still pass, and now the new tests we added for the history should also pass.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=186)** And as you can see, all of our tests are passing, including the new AddAndStoreInHistory.
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=192)** And now let's look at a test we know is going to fail so that we can understand how to use IDisposable to keep our instances from being corrupted between different tests.
>
> **[3:23](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=203)** We'll start by creating a new test called StoredInHistoryFailure.
>
> **[3:29](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=209)** Now let's add the code that goes inside of our new test, StoreInHistoryFailure.
>
> **[3:34](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=214)** We'll start with the arrange step by creating a new instance to the calculator.
>
> **[3:39](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=219)** Next, in the act step we'll create a result1 and add one, two, three, which we know will equal six.
>
> **[3:48](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=228)** Let's do the first assertion by testing that there's a single item in the history by calling Assert.Single, and passing it in the calculator history.
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=238)** Next, let's call Assert.Equals on the result and make sure that result1 equals the first item in the history.
>
> **[4:07](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=247)** Now let's calculate a new value.
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=250)** We'll do another act and call this variable result2, and call calc.Add and pass in four, five, six, which should equal 15.
>
> **[4:21](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=261)** And then we're going to do another assertion.
>
> **[4:24](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=264)** We're going to do the same assertion even though we know this is going to fail.
>
> **[4:28](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=268)** We want to see that Assert.Single, and if we pass in the calculator history should be two.
>
> **[4:36](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=276)** Now we want to test that every time we add a new value only a single item exists in the history.
>
> **[4:42](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=282)** That's why the second assertion is going to test that result2 equals the first item in the calculator history.
>
> **[4:54](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=294)** Now let's go ahead and run our test.
>
> **[4:57](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=297)** As you can see, the test has now failed.
>
> **[5:01](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=301)** To ensure the proper teardown and preventing test interference we can implement the IDisposable interface in the test class.
>
> **[5:09](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=309)** This allows us to clean up the resources after each test.
>
> **[5:12](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=312)** Let's go to the top of our test class and implement the new interface.
>
> **[5:21](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=321)** Now we need to create an instance of the calculator we can use during each test.
>
> **[5:26](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=326)** We'll start by creating a private property called calc that's typed to the calculator class.
>
> **[5:33](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=333)** In the CalcTest constructor we're going to create a new instance of the calculator.
>
> **[5:42](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=342)** Now let's clean up our StoreInHistoryFailure test so that we know it'll pass.
>
> **[5:48](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=348)** Let's rename this to StoreInHistory, and now we can delete the new instantiation of the calculator because we're doing it in the constructor.
>
> **[5:59](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=359)** And now we can do result1 and result2 together.
>
> **[6:04](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=364)** And finally, let's use a new assertion to test that we have a correct history count of two by replacing single with equal, passing in two, and getting the history count.
>
> **[6:26](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=386)** Next, we can copy the result line and change the first option to result1 and the second to result2, and look at the second item in the history array.
>
> **[6:37](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=397)** The last thing we need to do is add a method for dispose, which is part of the IDispose interface.
>
> **[6:44](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=404)** Now every time we run the test the test will be properly disposed of, and we won't get a corruption in the calculator history from one test to another.
>
> **[6:53](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=413)** Let's go ahead and run all of our tests and see if they pass.
>
> **[6:57](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=417)** And now you can see that all the tests are passing, meaning that the two different tests that we have for storing in history aren't affecting each other because every time the test is rerun the instance of the calculator is being destroyed and a new one is being created.
>
> **[7:14](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=434)** We can also confirm this across the board by going through and commenting out all the places where we create a new calculator and using the reference to it we created in the constructor.
>
> **[7:31](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=451)** Let's save our test and run it one last time to make sure everything is still working.
>
> **[7:36](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=456)** And as you can see, all the refactoring we've done all the tests are still passing, and now we can ensure that each time we run a test we're not corrupting it with the previous test data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), pass (9), assert (7), interface (3), finally, (2)
> **CLI Commands:** make (4)
> **Code Identifiers:** xunit (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Parsing a math equation string
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=0)** - [Instructor] In this final video, we're going to demonstrate a step-by-step process to parse a mathematical equation from a string.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=7)** This is useful for when processing a user provided input or creating dynamic equations based on program variables.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=13)** We'll not only create the test to make sure that this works, but we'll also walk through the process, covering error handling and the operational proceedings.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=23)** Let's get started by writing a new test.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=28)** We'll start by creating a theory, and we'll set up inline data to test whether the string of two plus three will equal the integer five.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=39)** Let's create another inline data test for five minus three, equaling two.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=46)** The next inline data test will be four plus six minus two equals eight, and the final inline data test will be 10 plus 20 minus five plus eight equals 33.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=61)** We'll name the method parse equation string, and it will accept an equation as a string and an expected value as an integer.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=72)** We can skip the arrange step, because we've already created the calculator in the constructor, and move on to the act step.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=79)** We'll set a result variable equal to the value of the new calculate method we're about to add.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=86)** We'll pass in each of the equations in order to get the result.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=90)** And finally, we'll call assert.equal, and we'll test that the expected value equals the result.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=98)** Now let's go and add our new method.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=101)** Let's go and create a private static read-only dictionary to store each of our operational types.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=110)** The function is going to accept two integers, and return a third integer.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=115)** We're going to call this dictionary operations, and we'll create the new dictionary, and we'll instantiate it with two values.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=123)** The first value is going to be a char for the plus sign, and we're going to write a function inside of it where we can take A and B, and add A to B, and return the result.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=137)** The next item in the dictionary is going to be a char for the minus sign, and again, we'll accept an A and B, and we'll return the value of A minus B.
>
> **[2:28](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=148)** Now it's time to write our calculate method.
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=151)** Our calculate method will accept a string called input, and it'll return the final integer after it calculates the formula.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=162)** The first thing we need to do is clean up the string by removing any spaces.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=167)** We can do that by setting the value of input to the value of input.replace.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=174)** We'll pass in an empty space, and replace it with no space.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=180)** Now we need to partition the input string into an array of numbers, utilizing the split method, and we'll be using the plus and the minus characters as separators.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=189)** We'll also eliminate any empty entries by using the string split operations.remove empty entries.
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=196)** Now let's create a new variable called operators, and we're going to use input.where to map the characters that we find that are either a plus or a minus, and convert these into an array.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=210)** The split method's going to break the string into substrings based on the delimiters passed into the array.
>
> **[3:36](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=216)** It then returns an array of these substrings.
>
> **[3:39](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=219)** Next, we need to set the result for the first number in the numbers array.
>
> **[3:43](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=223)** This variable will be used to store the final calculation results.
>
> **[3:52](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=232)** Here, we're attempting to parse the first element of the numbers array as an integer, and assigning it to result.
>
> **[3:59](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=239)** If parsing fails, we'll throw an exception.
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=243)** Now we need to traverse over each operator in the operations array with a for loop.
>
> **[4:08](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=248)** Now we will filter the operators from the input string, and store them in the operators array.
>
> **[4:14](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=254)** Then we loop over this array to perform the associated operations on our numbers.
>
> **[4:19](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=259)** Now we need to parse the number that follows the current operator, and store it in the number variable.
>
> **[4:24](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=264)** As we iterate over each operator, we parse the number that follows it.
>
> **[4:28](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=268)** If parsing fails, we throw an exception.
>
> **[4:31](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=271)** Now it's time to execute the operation dictated by the current operator, and update the result variable.
>
> **[4:42](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=282)** Now we retrieve the operation associated with the current operator from the operations dictionary, and use it to perform the operation on result and the current number.
>
> **[4:54](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=294)** If we come across an operator that we don't know, we throw an error saying an unsupported operator, and pass in the operator that we found.
>
> **[5:07](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=307)** Finally, we're ready to return the result.
>
> **[5:14](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=314)** The calculate method finally returns a result, which is the result of all the operations performed on the numbers in the equation.
>
> **[5:21](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=321)** Now it's time to see if all the code we wrote actually works.
>
> **[5:26](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=326)** Let's run our test and see if the previous test we created for this new method passes.
>
> **[5:34](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=334)** It looks like we're getting a build error, so let's take a look at what the error is, and see if we can fix it.
>
> **[5:46](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=346)** It looks like we have a typo in the name of the method, so let's go ahead and fix that.
>
> **[5:53](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=353)** Now that we've fixed the typo, we should be able to run our tests and see if they pass.
>
> **[5:59](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=359)** As you can see, the four tests we passed into our theory for parsing the equation string are all passing, and thanks to our unit tests and the compiler, we were able to figure out a typo and make sure that the code that we wrote still passes all of our tests.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), pass (4), throw (3), finally, (2), function (2)
> **CLI Commands:** make (2), find (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/next-steps?u=76281980&t=1)** - Thank you so much for taking this course.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/next-steps?u=76281980&t=3)** I hope you've gained a wealth of knowledge on unit testing with xUnit.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/next-steps?u=76281980&t=6)** As you continue your journey in software testing, I encourage you to dive deeper into more advanced concepts in unit testing.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/next-steps?u=76281980&t=12)** This could include learning about different testing techniques like integration and acceptance testing, as well as exploring other testing frameworks.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/next-steps?u=76281980&t=21)** Your continued practice and curiosity in the field will ultimately lead to you becoming a highly skilled and efficient developer.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/next-steps?u=76281980&t=27)** Good luck and happy testing.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1)
> **Code Identifiers:** xunit (1)
> **Speakers:** - thank (1)


## Instructor

- [[Jesse Freeman]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/c-sharp-unit-testing-with-xunit-4401481)

## Skills Covered

- xUnit
- C#
- Unit Testing

## Path Context

### In [[Elevating C- Skills- Building Robust Applications]]
← [[C- Cross-Platform Development]] | **7 of 8** | [[C- Practice- Generic Collections]] →

## Appears In

- [[Elevating C- Skills- Building Robust Applications]]

## Related Courses

_Courses sharing skills:_

- [[Unit Testing in Python]] — Unit Testing
- [[Learning C-]] — C#
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[Nail Your C- Interview]] — C#
- [[C- Design Patterns Part 2]] — C#

---

[↑ Back to top](#)