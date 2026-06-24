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
  - '[Elevating C- Skills- Building Robust Applications](../../Paths/DevOps/Learning%20Paths/Elevating%20C-%20Skills-%20Building%20Robust%20Applications.md)'
prev_courses:
  - '[C- Cross-Platform Development](C-%20Cross-Platform%20Development.md)'
next_courses:
  - '[C- Practice- Generic Collections](C-%20Practice-%20Generic%20Collections.md)'
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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/C-%20Unit%20Testing%20with%20xUnit.md)

![C# Unit Testing with xUnit](https://media.licdn.com/dms/image/v2/D560DAQFbkepEwSX3vA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691084155010?e=2147483647&amp;v=beta&amp;t=JCv0g-b98lkNnkBiom6gDHCI9YwS6YnMx-w5v4RYCug)

# C# Unit Testing with xUnit

> In this course, learn the basics of test-driven development by creating a sample project in pure C# and using unit tests to validate that all the business logic works. Instructor Jesse Freeman first introduces you to the foundational concept of unit testing and the role xUnit plays in it. He then guides you through a detailed setup process of xUnit for your development environment. Jesse also delv

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit) | 49m | Intermediate | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Getting started with xUnit](#getting-started-with-xunit)
  - [What you should know](#what-you-should-know)
- [**1. TDD Testing with xUnit**](#1-tdd-testing-with-xunit) (3 videos)
  - [Using xUnit for testing](#using-xunit-for-testing)
  - [The TDD cycle](#the-tdd-cycle)
  - [Installing xUnit](#installing-xunit)
- [**2. Writing and Running Unit Tests**](#2-writing-and-running-unit-tests) (4 videos)
  - [Writing your first unit test with xUnit](#writing-your-first-unit-test-with-xunit)
  - [Asserting with xUnit](#asserting-with-xunit)
  - [Understanding the core unit testing workflow](#understanding-the-core-unit-testing-workflow)
  - [Expanding your xUnit toolkit](#expanding-your-xunit-toolkit)
- [**3. Building a Simple Calculator**](#3-building-a-simple-calculator) (4 videos)
  - [Creating addition and subtraction logic](#creating-addition-and-subtraction-logic)
  - [Using assertions and refactoring](#using-assertions-and-refactoring)
  - [Creating a history functionality](#creating-a-history-functionality)
  - [Parsing a math equation string](#parsing-a-math-equation-string)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started with xUnit](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/getting-started-with-xunit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/getting-started-with-xunit?u=76281980&t=0)** - Hi, my name is Jesse Freeman. Welcome to this course, "C# [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) with xUnit." In this course, I'll first introduce you to the foundational concepts of unit testing and the role xUnit plays in it. Then I'll guide you through a detailed setup process of xUnit for your development environment. We'll also dive deeper into the specifications of xUnit's function, benefits, and its core role in the [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) cycle. Now let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (2), [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (1)
> **Code Identifiers:** xunit (4)
> **Prerequisites:** setup (1)
> **Speakers:** - hi (1)
> **Non-Speech:** (upbeat music) (1)

#### [What you should know](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/what-you-should-know?u=76281980&t=0)** - [Narrator] This course is primarily targeted towards intermediate developers who have a basic understanding of [Software Development](../../Topics/Software%20Development.md) practices. Before diving in, you should have some familiarity with coding and a grasp of fundamental programming principles. Knowing how to write code is a must, and a basic understanding of testing practices would be helpful, but is not required. I will walk you through every concept to ensure you have a firm understanding by the end of this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. TDD Testing with xUnit

[↑ Back to Table of Contents](#table-of-contents)

#### [Using xUnit for testing](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=0)** - [Instructor] The role of XUnit in [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md). Let's explore the concepts of unit testing in [Software Development](../../Topics/Software%20Development.md), its benefits, and the advantages of using [Xcode](../../Skills/Mobile%20Development/Xcode.md), which is a robust unit testing tool for the .NET Framework. First, let's start with an introduction to unit testing. Unit testing is a fundamental aspect of software development, serving to verify the functionality in individual units of source code. It's a critical first line of defense in finding and fixing bugs, facilitating changes, and ensuring overall software quality. Unit tests offer numerous benefits. They improve the quality of code, they make refactoring easier and safer, they can also serve as documentation, they speed up the development process, and they foster better design, among other advantages. Unit testing is a critical part of the software development life cycle, typically occurring after the implementation phase, but before [Integration Testing](../../Skills/Software%20Development/Integration%20Testing.md). By catching issues early, unit tests save time and effort in later stages of development. What are the real-world impacts of unit testing? A lack of adequate unit testing could have serious real-world consequences, leading to software failures that cost time, money, and even lives. Now, in order for us to begin using unit tests in our project, we're going to need to use a library called XUnit. XUnit is a free, open-source, community-focused unit testing tool for the .NET Framework. It's designed to be a clear, concise, and user-friendly framework for writing tests in languages like C# and F#.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-xunit-for-testing?u=76281980&t=95)** XUnit offers several notable features, including support for data-driven tests, easy integration with .NET Core, isolation of code through class level setup and teardown, and the ability to run parallel tests. These features make it a powerful tool for unit tests in .NET environments. Let's talk about XUnit versus other testing frameworks. XUnit stands out from other frameworks due to its focus on community, flexibility, and modern testing conventions. Here's how it compares to other popular frameworks like NUnit and MSTest. XUnit has more flexibility due to unique features like the theory attribute for data-driven tests. XUnit also has a strong community and is used in open-source projects and is open-source itself. And finally, XUnit has built-in support for parallel testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (9), [Software Development](../../Topics/Software%20Development.md) (3), [Xcode](../../Skills/Mobile%20Development/Xcode.md) (1), [Integration Testing](../../Skills/Software%20Development/Integration%20Testing.md) (1)
> **Env Vars:** net (4)
> **Definitions:** is a  (4)
> **CLI Commands:** make (2)
> **Exercise Files:** source code (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [The TDD cycle](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=0)** - [Narrator] Let's do a deep dive into the [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) cycle, or TDD for short. We'll discuss where XUnit fits in, some important terminology used in XUnit, and each phase of the red, green, and refactor process. Test-driven development is a [Software Development](../../Topics/Software%20Development.md) methodology where you write tests before writing the corresponding code. XUnit is a testing framework that'll provide us the structure and a way to create automated tests. Let's take a look at some of the terminology we'll need to know when using XUnit. A unit test is focused and tests a small unit of functionality. This allows us to verify the correctness of our code at a granular level. XUnit is a popular testing framework for .NET. It provides a structure for writing and running tests, making it easier to ensure our code behaves as expected. Assertions are the statements that test the logic of our code. For instance, if we have a method that adds two numbers, an assertion might check that the results of this method is the sum of those two numbers. Each test case is a scenario we want to test. For example, a test case might be the add method of a calculator class should return five when passed the numbers two and three. And finally, a test suite is a collection of test cases that are related. For example, you might have a test suite for all of the methods of your calculator class. Let's discuss the first part of the test-driven development cycle. We'll start with the red phase
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/the-tdd-cycle?u=76281980&t=92)** by creating a new test that fails. We do this by creating a calculator instance, calling the add method with certain inputs, and checking that the result is as expected. Since we haven't written any code, this test would automatically fail. The next phase of the test-driven development cycle is the green phase. Now that we have a failing test, we'll write just enough code to pass the test. Here you can see we've created a method called add that accepts two integers and returns the sum of those two integers. And the final phase of the test-driven development cycle is refactor. In this phase, we improve the code while making sure the test suite still passes. For instance, we could refactor the add method to accept any number of arguments. Now that we've written the test, anytime that we change the underlying logic to the method, it should pass the test as expected. If not, we know that we've created a problem and we have to go back and continue to correct the code until it passes the test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (5), [Software Development](../../Topics/Software%20Development.md) (1)
> **Definitions:** is a  (5)
> **Analogies:** for instance (2), for example (2)
> **Env Vars:** tdd (1), net (1)
> **Speakers:** - [narrator] (1)

#### [Installing xUnit](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=0)** - [Instructor] Now, let's go through the process of setting up [Xcode](../../Skills/Mobile%20Development/Xcode.md) in your development environment. If you don't already have .NET installed, you can get the .NET Core SDK from the official website or you can use Visual Studio, like I'll be using, for the Mac. Simply download install Visual Studio from the official site. This IDE is a comprehensive [Software Development](../../Topics/Software%20Development.md) environment tailored for creating .NET applications. This will also install the .NET Core SDK and any of the libraries and tools you'll need to develop applications and libraries. When you're ready, let's create a new solution. We'll select the Console Application from the template list and click Continue. We'll target .NET 7.0 and let's call the project HelloCalcApp. For the solution name, we'll simply delete the app so that it says HelloCalc. As you can see from the preview, we have a folder for the HelloCalc project with the solution in the route and a separate folder for the app along with its project file. Once you've decided on location for your project, click the Create button. Here you can see we've created a simple console application, which is a program that'll take input and display output at the command line or the terminal. Next, we need to add our tests. We can do this by right-clicking on the solution, go to Add, and select New Project.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=97)** From here, we can go to our tests and select the xUnit Test Project. Then, hit Continue. Again, we'll use .NET 7.0 and we're going to name this HelloCalcTests. Click Create, and now you can see that our HelloCalc solution has two projects in it: our app and our tests. The xUnit Test Projects is can provide the structure format for creating the unit tests we need when testing our application. Before we do that, though, we need to link it to our application. So right-click on the Dependencies folder inside of our test project. Select Add Project Reference and check our HelloCalcApplication project. Linking projects allows one project to use the classes methods and other code elements defined in another project. As you can see, the project template already created our first test, so let's go and run all the tests in this project. We'll do this by opening up the test panel and pinning it so it always stays open. Since we haven't run any tests, we won't be able to explore and see the list of tests available to us. So, let's run the test for the first time. This will go through our test project, identify any tests that we've defined, run them, and give us a green check mark if they've passed. As you see, our Test1 has passed,
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/installing-xunit?u=76281980&t=191)** and we know that everything is working.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (1), [Software Development](../../Topics/Software%20Development.md) (1)
> **Env Vars:** net (6), sdk (2), ide (1)
> **UI Navigation:** select the (2), go to (2), right-click (1)
> **Tools:** visual studio (2), command line (1), terminal (1)
> **Prerequisites:** install (2), you'll need (1)
> **Code Identifiers:** xunit (2)
> **Versions:** 7.0 (2)
> **Exercise Files:** template (2)


### 2. Writing and Running Unit Tests

[↑ Back to Table of Contents](#table-of-contents)

#### [Writing your first unit test with xUnit](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=0)** - [Instructor] In this video, let's discuss writing your first unit test in the xUnit framework. Since we've already run our first test by using the default test that was created for us when we created the hello calcs test project, now let's look at how to write our own test. A basic xUnit test consists of a public method with no parameters marked by the fact attribute. (keyboard clacking) We can write our own test by creating a fact attribute, then create a public method called MyFirstTest. Now, if we go back to our test panel and rerun it, you should see that our test will show up. Since we're not actually testing anything, it's always going to pass, just like the original test that was created in this project. Let's go ahead and write our first assertion. (keyboard clacking) Now let's create a new fact, and we're going to call this public method TestIfTrueIsTrue. One thing to keep in mind, since we're going to be referring to each test inside of the test panel, it helps to create useful method names that are easy to identify in a long list. In this case, our method is TestIfTrueIsTrue. Inside of the method, we're going to write an assertion, and the assertion is going to test if the value passed into it is true. Since true is always true, this test will also always pass. Let's go ahead and rerun all of our tests.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/writing-your-first-unit-test-with-xunit?u=76281980&t=99)** The test results panel in Visual Studio is going to give you an overview of all of your tests, and if the test fails, it'll provide a detailed message about what went wrong. Let's go ahead and see what that looks like by changing the true to a false and rerunning our tests. As you can see, our first two tests passed because they're not actually testing anything, but false can never be true, so our test failed. You can always right click on a test and rerun it, or go to the actual source code for the test, which will jump you to the test itself. Now let's go ahead and change this back to true. (keyboard clacking) And rerun just this test by right clicking on it and selecting run test. As you can see, the test has now passed, and since we know that the other tests have already passed, Visual Studio is simply going to show us the result for the test that we ran.

> [!info]- Semantic Content
>
> **Code Identifiers:** xunit (2)
> **Tools:** visual studio (2)
> **UI Navigation:** click on (1), go to (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** source code (1)
> **Analogies:** just like (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Asserting with xUnit](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=0)** - [Narrator] Let's write some simple assertions to get familiar with validating your code's behavior. Assertions are the heart of unit tests. They check conditions that must be true for the test to pass. An assertion verifies that a particular condition is met, if the condition is not met, then the test will fail. The assert equals method checks if two values are equal. Let's look at how we can write our own assert equals test. We're going to call this two plus two equals four.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=38)** Inside of the test, we're going to create a result variable that will store the value of two plus two. And next we're going to call the assert equals method. We're going to start by passing in four, since that's what the test requires in order to pass. And then we're going to pass in the result in order to make sure that the two are equal. Now let's go ahead and rerun all the tests in our project. As you can see, our two plus two equals four test has passed and now we're ready to take a look at a different assertion. In this case, we're going to look at not equal.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/asserting-with-xunit?u=76281980&t=79)** Let's create a new test called two plus two not equals five. We'll set it up like the test before, where we create a variable that stores the value of two plus two. But this time we're going to run an assertion not equal and we're going to pass it in the number five and we're going to use the result to verify what the value should actually be. Let's go ahead and run our tests. As you can see, the new test now passes and that's because the assert not equals checks that the two values are not equal.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Understanding the core unit testing workflow](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=0)** - [Instructor] Let's learn about the Arrange-Act-Assert pattern, a common methodology in [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) that ensures your tests are well structured and understandable. The Arrange-Act-Assert pattern is a common way of writing and structuring unit tests. It divides the test into three distinct sections, arrange, act, and assert. This helps keep our test organized and understandable. This flow chart helps us understand the Arrange-Act-Assert pattern. In the Arrange phase, we set up the conditions for the test and prepare the inputs. In the Act phase, we execute the functionality we're testing. And in the Assert phase, we verify that the result is expected. Now that we have an understanding of this pattern, let's move on to writing some tests. Now let's go ahead and write a simple test using the AAA pattern. We're going to call our test CanAddNumbers.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=61)** Inside of our CanAddNumbers test, we're going to set up the Arrange phase. In this, we're going to create two variables that'll store the numbers two and three. This is where we initialize our objects and set the value that's going to be passed to the methods in our test. Next is the Act step. In this case, we're going to create a result variable by adding the number one and number two variables together. This is where we invoke the method under the test with the new parameters we're passing in. And finally, we're going to do the Assert step. Here we're going to do Assert dot Equals, and we're going to pass in the number five since that's what we want to test and we're going to compare it to the results that were calculated above. The Assert is going to verify the action of the method and make sure that it behaves as expected. Let's go ahead and run our test and see if it passes. As you can see, the test has passed and we've come up with a more consistent and standardized way for structuring the logic inside of the test itself. Let's take a look at a more complex AAA test.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=141)** Now let's create a new test called CanCalculateAverage. In the Arrange step, we're going to create an array of numbers. We'll use 2, 3, 5, 7, and 11. In the Act step, we're going to create a new variable that's typed to a double called average, and we're going to average all the numbers together inside of the array. We'll do this by calling numbers.Average. And finally, in the Assert step, we're going to test to see if the value 5.6 is to the average we calculated above. And finally, we're going to pass in a new value of one to the end of the Equal method. This last parameter is going to be the precision used in order to verify the average. Let's go ahead and run our test. Once again, Visual Studio is going to go through all of our tests, and both tests should now pass confirming that the calculations in your methods are correct. Now let's look at a more advanced AAA test with parameters. In this step, we'll implement a test that uses a theory and an InlineData attribute for parametrization. This can make your test more efficient and readable. We'll start by creating a new Theory attribute. The Theory attribute denotes a parameterized test that is true for a subset of data. Next, we'll create an InlineData attribute. The inline attribute is used to supply the value
>
> **[3:56](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=236)** of those parameters. We'll start by passing in the values 3, 7, and 10. We can also run multiple tests by simply adding additional lines of InlineData attributes. Let's add -3, -7, and -10. And then finally we'll do one last InlineData attribute with the values 100, 200, and 300. We're going to call our test CanAddNumbersParameterized. We're going to pass in three arguments, number one, number two and what we expect the results to be. As you can see, these match up to the three values we're supplying in the InlineData attributes. Now for our Arrange step, the data is arranged through the InlineData attribute, so we don't need to do anything. For the Act step, We're going to create an integer called result and we're going to pass it, number one and number two, which are being passed in by the InlineData. And for the Assert step, we're going to see if the expected result, which we're passing in from the InlineData, is equal to the results we calculated above. Let's go ahead and run our tests. As you can see, three new tests popped up, and that's because each InlineData attribute will be its own test in the output window. Each one of these tests passed, and we now have a better way
>
> **[5:33](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/understanding-the-core-unit-testing-workflow?u=76281980&t=333)** of passing in dynamic values into each of our tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (1)
> **Env Vars:** aaa (3)
> **CLI Commands:** make (2)
> **Prerequisites:** set up (2)
> **Versions:** 5.6 (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Expanding your xUnit toolkit](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=0)** - [Instructor] In this video, I want to introduce you to more assert methods available in the xUnit framework. These methods allow for a broader range of test conditions, enabling you to more thoroughly test your C# code. Let's start with assert false. We've already looked at assert true, so assert false does the opposite and tests to see if a condition is false. We're going to create a test called test false and all we're going to do here is set up an arrange step for our condition to be false and the assert step will test if the condition is false. If we run our test, we'll see that this should pass. Next, we'll look at assert null. Let's create a test called test null and the arrange step we're going to create a generic object and set its value to null. Again, we don't need to do an act step, so we'll simply do an assert step and we're going to assert that the object variable is actually null. This is useful for making sure that when you instantiate classes or other values in your code, that they are either expected to be null or are not null in order to pass their test. Let's go ahead and run the test and make sure that this works. As you can see, the test is passed
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=94)** and let's move on to the next assert, not null. We'll name our test test not null. In the arrange step, we're going to create an object variable again and this time we will set it to a new instance of a generic object class. For the assert, we'll call not null and make sure that the object now has a value and is not null. Let's go ahead and run our test and make sure that it passes. Looks like everything is still passing. So let's move on to assert contains.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=138)** Let's name our test test contains. In the arrange step, we're going to create a list called collection and inside of the list we'll create an integer 42. In the assert step, we're going to assert that our collection contains 42. This method is useful for verifying that a collection contains a specific item. Let's go ahead and run our test and see if it passes. As you can see, all of our tests pass, so let's move on to assert in range. Let's create a new test called test in range. In the arrange step, we're going to create a variable called actual and we'll set it to five. For the assert, we're going to call assert in range, we'll pass it in the actual, and we can also pass in a minimum and maximum value. Let's go ahead and run the test and make sure it passes. As you can see, this test passes, too, and we can move on to assert empty. This method verifies that a collection is empty. We'll call our test test empty. In the arrange step, we're going to create a new list called collection and set its type to int. In the assert, we're going to do assert dot empty and pass in our collection. This is different than testing whether the assertion is null or not null. In this case, we've already instantiated the object,
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/expanding-your-xunit-toolkit?u=76281980&t=234)** but we want to make sure that there's nothing inside of it. So let's go ahead and run our test and see if it passes. As you can see, all of our tests are still passing and let's move on to our final one, assert dot not empty, which is the opposite of what we just did. This method verifies that a collection is not empty. Let's go ahead and create our test called test not empty. In the arrange step, we're going to create a new list collection typed to integer again and we're going to set its default value to one and in the assert step, we're going to call assert not empty and pass in our collection. Now let's run through all of our tests and make sure that everything works. As you can see, all 17 of our tests have now passed and we have full coverage over our imaginary app. In the next few videos, we're going to actually build a simple calculator and put all of these different assertions to use.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6)
> **Code Identifiers:** xunit (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Building a Simple Calculator

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating addition and subtraction logic](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=0)** - In this video we're going to create a calculator. It's going to have an add and subtract function. In order to make sure that these functions work as expected we're going to leverage the arrange, act and assert pattern. As a reminder, arrange means that we prepare the test, act means that we execute the functionality we want to test and assert means that we compare the actual result with the expected result. Let's get started by creating a new test class. We can close out the old test class that we were using previously and right click on the project and create a new class. We're going to call this calcTests. Now we're going to start by adding a test for the ad function that doesn't exist yet. This fits with the red phase of the red, green refactor cycle where we write tests that initially fail. Let's call our first test AddTwoIntegers. In the arrange step, we're going to create a new reference to the calculator, which we've yet to create. In the act step, we're going to calculate the result of using the calculator to add one and two together. And finally, in the assert step, we're going to assert that three equals the result that we calculated before. Now we can't run this test just yet 'cause we haven't created our calculator class so let's go ahead and do that in order to get this test to pass. Since we've linked our test class project up with our application, we can go ahead
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=95)** and create the new class inside of the Hello Calculator application project. We're going to call this calculator. Inside of the calculator class we're going to create a new public method called Add. This method will accept two values, A and B and all the method does is return the value of A plus B. Now let's go back into our CalcTest file. As you can see the calculator class still isn't resolving itself and that's because our tests are in a different namespace than our calculator. Let's correct that by changing the namespace of HelloCalcTests to HelloCalcApp. Now when we save the file, we can go ahead and run the tests and see if this new test passes. Now when we look at our test panel if we expand the HelloCalcTests, we see that we now have tests for our app and we have our previous HelloCalcTests. Inside of here is the Unit Test one file and in the HelloCalcApp project we have our calc tests. If we expand this, we'll see that our first test, AddTwoIntegers has passed. Let's go ahead and hide the other tests and focus on the HelloCalcApp tests as we move forward. Now that we've finished the green phase, which is the second phase of [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md), we've written just enough code
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-addition-and-subtraction-logic?u=76281980&t=189)** to satisfy the test condition. At this point, let's move on to our subtraction method. We'll start again in the red phase by creating a test that fails. Let's name our test, SubtractTwoIntegers. In the arrange step, we're going to create a new instance of the calculator, just like we did before. In the act step, we're going to calculate subtracting three minus two, and in the assert phase, we're going to test to see that one equals the result we calculated above. Again, you'll see that the subtract method is now throwing an error 'cause we haven't created it. So let's go into the green phase where we implement the subtract function for the calculator class and make our failing test pass. We'll create a new subtract method that accepts two values A and B, and we'll return the results of A minus B. If we go back into our test file, you'll see that the error is gone and we can now run our tests. Now we have two passing tests for our two methods, add and subtract. Next we'll take a look at how to implement the third part of test-driven development, which is refactoring.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (2)
> **Definitions:** means that (3)
> **CLI Commands:** make (2)
> **Code Identifiers:** calctests (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Speakers:** - in (1)
> **Non-Speech:** (typing) (1)

#### [Using assertions and refactoring](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=0)** - [Instructor] In this video, we'll dive into the important role [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) has during the modification and enhancement of existing code. Our focus will be on refactoring the add and subtract functions of our calculator to support multiple arguments. We'll verify these modifications work by writing corresponding unit tests. We'll start by writing a parameterized test for the enhanced add function that can accept multiple parameters, even though this functionality doesn't exist yet. (keyboard clicks) Let's start by creating a new theory. We'll use an inline data to pass in an array of integers as well as the value we expect them to be after we add them all up. We'll start with one, two, three, and six, and for the second test we'll create an inline data with an integer array containing 4, 5, 6 and 15. Now we'll create the new test called AddMultipleIntegers. We'll pass it in the array of numbers and an expected integer. For the arrange step we're going to create a new instance of the calculator. In the act step, we're going to calculate the results by passing the numbers into the calculator's Add method. As you can see, we're going to get an error because the existing Add method only accepts two numbers. In the assert step, we're going to assert that the expected value equals the result we just calculated.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=93)** Now let's go into our calculator class and refactor our Add method to support multiple numbers.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=104)** (keyboard clicks) Now let's start by refactoring the Add method. We're going to use the params keyword in order to allow any number of numbers to be passed into the method. Let's delete the previous code and create the new logic that'll add all the numbers passed in together. We'll start by creating a variable called sum and set it equal to zero. Next, we're going to need to create a for loop that iterates over the total length of the numbers being passed in. Inside of this for loop we'll take the current sum and add the next number to it. We do this by writing out sum plus equals. Then we access the current i value in the for loop for the numbers array. And finally, when we're done, we can return the sum value. Let's go ahead and run our test and see if everything passes. As you can see, all three addition tests now work. The new test that we created that accept multiple parameters and the original test we created that adds two numbers together. This is how we know the refactoring has been successful because we haven't broken any previous tests. But there's a third step to [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md), this is the refactor phase. And even though we refactored this method there's still a way that we can simplify this and make it work even better. And since we already have the existing tests,
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=199)** whatever changes we make now inside of this method we'll be able to verify still pass all of our tests. In order to simplify this method we're going to use the Sum method from the link library which simplifies the addition of all the numbers in the array. Now let's go back into our add method and delete all the code inside. Now we're going to write return numbers.Sum.
>
> **[3:48](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=228)** Now let's go back and rerun our tests. As you can see, we've now refactored our code and simplified it greatly by taking advantage of link and all of our addition tests still work. Now it's time for us to take the same principle and refactor the Subtract method just like we did with Add. But before we write any code, let's make sure we have some additional tests to verify that this will work. (keyboard clicks) Now we're going to create a new theory and in this theory's inline data we are going to subtract five, two, and one, and the expected result should be two. And we'll also add a new test as well to subtract 10, 5 and 2. And the expected result should be three. We're going to name this test SubtractMultipleIntegers, and again, we'll pass in an integer array of numbers and an expected integer. For the arrange step, we're going to create a new calculator. For the act step, we're going to calculate the results by subtracting all the numbers. Again, we're going to see an error here because we haven't modified the Subtract method. And for the assert step, we're going to test that the expected value is equal to the results that we just calculated. Let's go make the modifications in our calculator. Now that we've learned how to refactor our code in the previous step,
>
> **[5:20](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/using-assertions-and-refactoring?u=76281980&t=320)** we can jump directly to a more optimized solution. Let's first modify the Subtract method to accept multiple parameters. (keyboard clicks) And next, let's use link to aggregate the numbers. The Aggregate method for link applies to subtraction operations sequentially to all the numbers in the array, resulting in a single output. Let's return the numbers array and call aggregate. We're going to pass in an a b value and every time we get an a b value we're going to subtract b from a. The subtraction starts from the first number and subtracts each sequential number. Let's go ahead and run our tests and see if everything still works. At this point, you can see that all of our tests are now passing. All we've done is simply refactored and modified our Add and Subtract methods to accept multiple numbers. And we used existing and new tests to make sure that we didn't break any of our code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (1), [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (1)
> **CLI Commands:** make (5)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Creating a history functionality](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=0)** - [Instructor] This video will focus on the importance of using IDisposable in xUnit tests to ensure the proper setup and teardown of resources. We will implement a history feature for the add function that stores all the results. This will help us understand how to avoid data corruption between tests. Let's get started and create a new test called AddAndStoreInHistory. Now, in our new test for AddAndStoreInHistory our arrange step will be to create a new instance to the calculator. For act we're going to calculate two results. We want to make sure that every time we add numbers in the calculator we're able to go back through the history and see the value that was calculated. We're going to create a variable called result1, and in it we're going to call calc.Add and pass in one, two, three. And our expected result is going to be six. For result2 we'll call calc.Add, and we're going to pass in four, five, six, and the expected result should be 15. Now, in our assert step we're going to create three assertions. The first one is to test that the total history equals two. So, let's start by writing Assert.Equals, we'll pass in two, and we're going to get the count from the calculator's history. Now, we're going to get an error here because we haven't created the history just yet, but we'll do that in the next step.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=94)** Next, we'll write Assert.Equal and test that result1 is equal to the first item in the calculator's history array. And finally, we'll call Assert.Equal, and we'll test that result2 is equal to the second item in the history. Let's go into our calculator class and add the history logic. The first thing we're going to need to do is create a list to store our history. We'll do this at the top of the class, and we'll make it public since we need to access it from our test suite. And we'll create a public getter and a private setter. Now in our constructor let's go ahead and create a new instance of the history list. Now we need to refactor our add method again. We'll start by replacing the return, and setting the value of the sum to a new variable called result. Next, we'll call History.Add and add the result to the history list, and now we can return the final result. Now when we rerun our tests we should see that all of our previous add tests should still pass, and now the new tests we added for the history should also pass. And as you can see, all of our tests are passing,
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=189)** including the new AddAndStoreInHistory. And now let's look at a test we know is going to fail so that we can understand how to use IDisposable to keep our instances from being corrupted between different tests. We'll start by creating a new test called StoredInHistoryFailure. Now let's add the code that goes inside of our new test, StoreInHistoryFailure. We'll start with the arrange step by creating a new instance to the calculator. Next, in the act step we'll create a result1 and add one, two, three, which we know will equal six. Let's do the first assertion by testing that there's a single item in the history by calling Assert.Single, and passing it in the calculator history. Next, let's call Assert.Equals on the result and make sure that result1 equals the first item in the history. Now let's calculate a new value. We'll do another act and call this variable result2, and call calc.Add and pass in four, five, six, which should equal 15. And then we're going to do another assertion. We're going to do the same assertion even though we know this is going to fail. We want to see that Assert.Single, and if we pass in the calculator history should be two. Now we want to test that every time we add a new value only a single item exists in the history. That's why the second assertion
>
> **[4:44](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=284)** is going to test that result2 equals the first item in the calculator history. Now let's go ahead and run our test. As you can see, the test has now failed. To ensure the proper teardown and preventing test interference we can implement the IDisposable interface in the test class. This allows us to clean up the resources after each test. Let's go to the top of our test class and implement the new interface. Now we need to create an instance of the calculator we can use during each test. We'll start by creating a private property called calc that's typed to the calculator class. In the CalcTest constructor we're going to create a new instance of the calculator. Now let's clean up our StoreInHistoryFailure test so that we know it'll pass. Let's rename this to StoreInHistory, and now we can delete the new instantiation of the calculator because we're doing it in the constructor. And now we can do result1 and result2 together. And finally, let's use a new assertion to test that we have a correct history count of two by replacing single with equal, passing in two, and getting the history count.
>
> **[6:26](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=386)** Next, we can copy the result line and change the first option to result1 and the second to result2, and look at the second item in the history array. The last thing we need to do is add a method for dispose, which is part of the IDispose interface. Now every time we run the test the test will be properly disposed of, and we won't get a corruption in the calculator history from one test to another. Let's go ahead and run all of our tests and see if they pass. And now you can see that all the tests are passing, meaning that the two different tests that we have for storing in history aren't affecting each other because every time the test is rerun the instance of the calculator is being destroyed and a new one is being created. We can also confirm this across the board by going through and commenting out all the places where we create a new calculator and using the reference to it we created in the constructor.
>
> **[7:31](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/creating-a-history-functionality?u=76281980&t=451)** Let's save our test and run it one last time to make sure everything is still working. And as you can see, all the refactoring we've done all the tests are still passing, and now we can ensure that each time we run a test we're not corrupting it with the previous test data.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Identifiers:** xunit (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Parsing a math equation string](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=0)** - [Instructor] In this final video, we're going to demonstrate a step-by-step process to parse a mathematical equation from a string. This is useful for when processing a user provided input or creating dynamic equations based on program variables. We'll not only create the test to make sure that this works, but we'll also walk through the process, covering error handling and the operational proceedings. Let's get started by writing a new test. We'll start by creating a theory, and we'll set up inline data to test whether the string of two plus three will equal the integer five. Let's create another inline data test for five minus three, equaling two. The next inline data test will be four plus six minus two equals eight, and the final inline data test will be 10 plus 20 minus five plus eight equals 33. We'll name the method parse equation string, and it will accept an equation as a string and an expected value as an integer. We can skip the arrange step, because we've already created the calculator in the constructor, and move on to the act step. We'll set a result variable equal to the value of the new calculate method we're about to add. We'll pass in each of the equations in order to get the result. And finally, we'll call assert.equal, and we'll test that the expected value equals the result.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=98)** Now let's go and add our new method. Let's go and create a private static read-only dictionary to store each of our operational types. The function is going to accept two integers, and return a third integer. We're going to call this dictionary operations, and we'll create the new dictionary, and we'll instantiate it with two values. The first value is going to be a char for the plus sign, and we're going to write a function inside of it where we can take A and B, and add A to B, and return the result. The next item in the dictionary is going to be a char for the minus sign, and again, we'll accept an A and B, and we'll return the value of A minus B. Now it's time to write our calculate method. Our calculate method will accept a string called input, and it'll return the final integer after it calculates the formula. The first thing we need to do is clean up the string by removing any spaces. We can do that by setting the value of input to the value of input.replace. We'll pass in an empty space, and replace it with no space. Now we need to partition the input string into an array of numbers, utilizing the split method, and we'll be using the plus and the minus characters as separators. We'll also eliminate any empty entries by using
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=191)** the string split operations.remove empty entries. Now let's create a new variable called operators, and we're going to use input.where to map the characters that we find that are either a plus or a minus, and convert these into an array. The split method's going to break the string into substrings based on the delimiters passed into the array. It then returns an array of these substrings. Next, we need to set the result for the first number in the numbers array. This variable will be used to store the final calculation results. Here, we're attempting to parse the first element of the numbers array as an integer, and assigning it to result. If parsing fails, we'll throw an exception. Now we need to traverse over each operator in the operations array with a for loop. Now we will filter the operators from the input string, and store them in the operators array. Then we loop over this array to perform the associated operations on our numbers. Now we need to parse the number that follows the current operator, and store it in the number variable. As we iterate over each operator, we parse the number that follows it. If parsing fails, we throw an exception. Now it's time to execute the operation dictated by the current operator, and update the result variable. Now we retrieve the operation associated
>
> **[4:44](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=284)** with the current operator from the operations dictionary, and use it to perform the operation on result and the current number. If we come across an operator that we don't know, we throw an error saying an unsupported operator, and pass in the operator that we found. Finally, we're ready to return the result. The calculate method finally returns a result, which is the result of all the operations performed on the numbers in the equation. Now it's time to see if all the code we wrote actually works. Let's run our test and see if the previous test we created for this new method passes. It looks like we're getting a build error, so let's take a look at what the error is, and see if we can fix it.
>
> **[5:46](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/parsing-a-math-equation-string?u=76281980&t=346)** It looks like we have a typo in the name of the method, so let's go ahead and fix that. Now that we've fixed the typo, we should be able to run our tests and see if they pass. As you can see, the four tests we passed into our theory for parsing the equation string are all passing, and thanks to our unit tests and the compiler, we were able to figure out a typo and make sure that the code that we wrote still passes all of our tests.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-unit-testing-with-xunit/next-steps?u=76281980&t=1)** - Thank you so much for taking this course. I hope you've gained a wealth of knowledge on [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) with xUnit. As you continue your journey in [Software Testing](../../Skills/Software%20Development/Software%20Testing.md), I encourage you to dive deeper into more advanced concepts in unit testing. This could include learning about different testing techniques like integration and acceptance testing, as well as exploring other testing frameworks. Your continued practice and curiosity in the field will ultimately lead to you becoming a highly skilled and efficient developer. Good luck and happy testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (2), [Software Testing](../../Skills/Software%20Development/Software%20Testing.md) (1)
> **Code Identifiers:** xunit (1)
> **Speakers:** - thank (1)


## Instructor

- [Jesse Freeman](../../Instructors/Software%20Development/Jesse%20Freeman.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/c-sharp-unit-testing-with-xunit-4401481)

## Skills Covered

- xUnit
- C#
- Unit Testing

## Path Context

### In [Elevating C- Skills- Building Robust Applications](../../Paths/DevOps/Learning%20Paths/Elevating%20C-%20Skills-%20Building%20Robust%20Applications.md)
← [C- Cross-Platform Development](C-%20Cross-Platform%20Development.md) | **7 of 8** | [C- Practice- Generic Collections](C-%20Practice-%20Generic%20Collections.md) →

## Appears In

- [Elevating C- Skills- Building Robust Applications](../../Paths/DevOps/Learning%20Paths/Elevating%20C-%20Skills-%20Building%20Robust%20Applications.md)

## Related Courses

_Courses sharing skills:_

- [Unit Testing in Python](../Software%20Development/Unit%20Testing%20in%20Python.md) — Unit Testing
- [Learning C-](../Software%20Development/Learning%20C-.md) — C#
- [Cert Prep- Unity Certified Associate Game Developer Scripting with C-](../Software%20Development/Cert%20Prep-%20Unity%20Certified%20Associate%20Game%20Developer%20Scripting%20with%20C-.md) — C#
- [Nail Your C- Interview](../Software%20Development/Nail%20Your%20C-%20Interview.md) — C#
- [C- Design Patterns Part 2](../Software%20Development/C-%20Design%20Patterns%20Part%202.md) — C#

---

[↑ Back to top](#)