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
  - '[Master C++](../../Paths/DevOps/Learning%20Paths/Master%20C%2B%2B.md)'
prev_courses:
  - '[Complete Guide to Parallel and Concurrent Programming with C++](Complete%20Guide%20to%20Parallel%20and%20Concurrent%20Programming%20with%20C%2B%2B.md)'
next_courses:
  - '[C++ Design Patterns- Behavioral](C%2B%2B%20Design%20Patterns-%20Behavioral.md)'
path_nav: '[{"path":"Master C++","position":3,"total":6,"prev":"Complete Guide to Parallel and Concurrent Programming with C++","next":"C++ Design Patterns- Behavioral"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/test-driven-development
  - skill/c
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Test-Driven%20Development%20in%20C%2B%2B.md)

![Test-Driven Development in C++](https://media.licdn.com/dms/image/v2/C4E0DAQG1LffEqB8vcw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567115047000?e=2147483647&amp;v=beta&amp;t=AiFwlGSnm4ldxZxxiuKjJN83ofLvBFvgmpi8qld5w1o)

# Test-Driven Development in C++

> Every software developer wants to ship high-quality applications. Test-driven development (TDD) is a key discipline that can help you enhance your development process—and, in turn, your code base—by ensuring that crashes and bugs are addressed early on. In this course, join Richard Wells as he covers unit testing and TDD for C++ projects. Richard provides an overview of both unit testing and TDD, 

> [LinkedIn Learning](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus) | 2h 21m | Beginner | 13K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Welcome](#welcome)
- [**1. Overview of Test-Driven Development**](#1-overview-of-test-driven-development) (3 videos)
  - [What is unit testing?](#what-is-unit-testing)
  - [What is test-driven development?](#what-is-test-driven-development)
  - [Example: TDD session, the FizzBuzz kata](#example-tdd-session-the-fizzbuzz-kata)
- [**2. Setting Up Your Development Environment**](#2-setting-up-your-development-environment) (4 videos)
  - [Set up Google Test with Eclipse](#set-up-google-test-with-eclipse)
  - [Set up Google Test with Visual Studio](#set-up-google-test-with-visual-studio)
  - [Set up Google Test with CLion](#set-up-google-test-with-clion)
  - [Set up Google Test with Xcode](#set-up-google-test-with-xcode)
- [**3. Google Test Overview**](#3-google-test-overview) (1 videos)
  - [Google Test](#google-test)
- [**4. The Supermarket Checkout Kata**](#4-the-supermarket-checkout-kata) (5 videos)
  - [Overview, setup, and the first test case](#overview-setup-and-the-first-test-case)
  - [Add items, add item prices, and calculate the current total](#add-items-add-item-prices-and-calculate-the-current-total)
  - [Add multiple items and calculate the total](#add-multiple-items-and-calculate-the-total)
  - [Add and apply discounts](#add-and-apply-discounts)
  - [Throw an exception when adding an item with no price](#throw-an-exception-when-adding-an-item-with-no-price)
- [**5. Test Doubles**](#5-test-doubles) (3 videos)
  - [Test doubles overview](#test-doubles-overview)
  - [Google Mock overview](#google-mock-overview)
  - [Google Mock example](#google-mock-example)
- [**6. Test-Drive Development Best Practices**](#6-test-drive-development-best-practices) (1 videos)
  - [Test-driven development best practices](#test-driven-development-best-practices)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980&t=1)** - [Instructor] Hi, welcome to this course on Beginning Test Driven Development in C++. My name is Rich Wells and I'm a software engineer with over 20 years of experience in [Software Development](../../Topics/Software%20Development.md), much of that using C++. I'm passionate about writing quality software and [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) is a key discipline every software developer should practice to ensure the quality of their code. I'm excited to show you how to use this discipline in your everyday coding process to help ensure the quality of your code base. In this course, we'll go over what is [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) and test-driven development and how will they help you? What is [Google](../../Glossary/Service/Google.md) Test and how is it used with test-driven development? How to set up some common C++ development environments to use Google Test. What are some best practices for unit testing and test-driven development? And lastly, I'll walk through some hands-on coding sessions practicing test-driven development in C++. To follow along with this course, you should have a basic knowledge of C++. The examples in this course are fairly simple but some C++ knowledge is necessary. You should have a [Windows](../../Glossary/Service/Windows.md), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), or Mac PC, as these operating systems support all the tools necessary for compiling and executing C++ programs with Google Test. Most of the examples in this course are performed using the Eclipse CDT IDE with the GNU C++ Compiler which is available for Windows, Linux, and Mac. I also provide examples of how to set up Google Test
>
> **[1:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/welcome?u=76281980&t=95)** with the Clion IDE which is also available for Windows, Linux, and Mac, and with Visual Studio in Windows, and the [Xcode](../../Skills/Mobile%20Development/Xcode.md) IDE on Mac. So let's get started learning test-driven development for your C++ projects today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (6), [Google](../../Glossary/Service/Google.md) (4), [Windows](../../Glossary/Service/Windows.md) (4), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (3), [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (2)
> **Env Vars:** ide (3), cdt (1), gnu (1)
> **Prerequisites:** set up (2)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Overview of Test-Driven Development

[↑ Back to Table of Contents](#table-of-contents)

#### [What is unit testing?](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=1)** - [Instructor] In this lecture, we're going to start the course on [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) by defining what [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) actually is. We'll go over some of the common types of [Software Testing](../../Skills/Software%20Development/Software%20Testing.md), look more closely at the specifics of unit testing, and review a simple example. So why do we go through the effort of writing and running unit tests? 'Cause software bugs can hurt the business. We don't want any bugs making it out to the field for our customers to see, as that can hurt our reputation and cause customers to look at using other [products](../../Skills/Software%20Development/Microsoft%20Products.md). Software testing attempts to address this problem by catching any bugs in the software before they get to the field. This is done systematically, with a multilayered approach, where each layer of testing provides a safety net for catching bugs before they get to the field. There are several levels of testing which provides the layers of safety nets for catching any bugs that might be in the code. The lowest level are unit tests. Unit tests validate individual functions in the production code. Unit tests are generally the most comprehensive tests, which it tests all positive and negative test cases or function. Next comes component level testing, which tests the external interfaces for individual components. Components are essentially a collection of the functions. Then comes system-level testing, which tests the external interfaces at a system level. Systems can be collections of components, or of subsystems. And lastly comes performance testing,
>
> **[1:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=95)** which tests systems and subsystems at expected production loads to verify that response times and resource utilization such as memory, CPU and disk usage are acceptable levels. Now let's look at some specifics on unit testing. Unit testing tests individual functions in the code. Each test case for the function should have a corresponding unit test. Groups of unit tests can be combined into test suites, which can help with organizing the tests. A unit test should execute in your development environment rather than the production environment. This is important to ensure you can run them easily and often. And lastly, a unit test should be implemented in an automated fashion. You should be able to click a button and the unit test will build and execute and show you the results. Here we have a very simple example showing a unit test for a bit of production code. The production code is a function that returns the length of a passed-in string. Unit test is a single positive test case that verifies a length of one is returned for a string with one character in it. The test call is a [Google](../../Glossary/Service/Google.md) Test macro for specifying that a function is a test, and it's passed in the name of the test cases and the actual test name. A unit test performs three steps. A setup step, where it creates the test string, an action step where it calls the production code
>
> **[3:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-unit-testing?u=76281980&t=189)** to perform the action that is under test, an assertion step where the test validates the results of the action. This is a common structure that all of your unit tests should follow. To summarize, here are the key points on unit testing. Unit tests are our first safety net for catching bugs in the production code. Unit tests validate test cases for individual functions. They should be built and run in the development environment. And lastly, unit test should run fast. We ideally want a developer rerunning the unit test every three to five minutes and this can be difficult with a slow build process, or if any of the test runs slow, i.e. for more than a few seconds. In the next lecture, we'll go over what test-driven development is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (5), [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (2), [Software Testing](../../Skills/Software%20Development/Software%20Testing.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Definitions:** is a  (5)
> **Env Vars:** cpu (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [What is test-driven development?](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=0)** - [Instructor] In this lecture, we're going to talk about what [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) is and how it helps to ensure you're writing high-quality and bug-free code. So what is test-driven development, or TDD? TDD is a process for writing code that helps you take personal responsibility for the quality of your code. The process drives this by having you write the unit tests before the production code. This can seem pretty strange at first. But after you've used the process for a while, it becomes the norm, and you'll find it hard to write code any other way. Even though the tests are written before the production code, that doesn't mean that all the tests are written first. You write one unit test for one test case, and then you write the production code to make it pass. The tests and the production code are written together, with small tests being written and then small bits of production code that make those tests pass. This short cycle of writing a unit test and then writing the production code to make it pass provides immediate feedback on the code. This feedback is one of the essential features of TDD. So what are some of the benefits of using TDD? TDD gives you confidence to make changes in your code because you have a test before you begin that verifies the code is working and will tell if any of your changes have broken anything. This confidence comes from the immediate feedback the test provides for each small change in the production code. The tests document what the production code is supposed to do. A new developer looking at the code can use the unit test as a source for documentation for understanding what the production code is doing.
>
> **[1:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=94)** Writing the unit test first helps drive good object-oriented design, as making individual classes and functions testable in isolation drives the developer to break dependencies and add interfaces rather than making concrete implementations together directly. TDD was created by Kent Beck in the mid-1990s as part of his work for the Chrysler Corporation, where he also created Extreme Programming, of which TDD is just a part. He then went on to create one of the first [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) frameworks for TDD in Smalltalk, called SUnit. Then he collaborated with Erich Gamma to implement the first [Java](../../Skills/Software%20Development/Java.md) unit testing framework, CALLED [JUnit](../../Skills/Software%20Development/JUnit.md). JUnit has since been the basis for many other xUnit testing frameworks implemented for other languages. The TDD workflow is broken up into three phases, referred to as the red phase, green phase, and refactor phase. The first phase is the red phase. In the red phase, you write a failing unit test for the next bit of functionality you want to implement in the production code. Next comes the green phase, where you write just enough production code to make the failing unit test pass. Last is the refactor phase, where you clean up the unit test and the production code to remove any duplication and make sure the code follows your team's coding standards and best practices. Then you repeat the process for all the functionality you need to implement and all the positive and negative test cases. Robert Martin, a.k.a Uncle Bob,
>
> **[3:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=189)** created the following laws of TDD in his book Clean Code: A Handbook of [Agile Software Development](../../Skills/DevOps/Agile%20Software%20Development.md). These laws help ensure you're following the TDD process. The first law, you may not write any production code until you have first created a failing unit test, follows along with the idea of writing the unit test first. Seeing your new unit test fail before you've implemented the production code is a sign that the unit test has been implemented properly. The second law, you may not write more of a unit test than is sufficient to fail, forces you to write only enough of a unit test for the next test case, and the next test case should always be the simplest test case. The last law, you may not write more production code than is sufficient to pass the currently failing unit test, keeps you from writing production code without any unit tests to verify it. These three laws help to keep you in a small tight loop of writing a little test that fails, then writing a little production code to make it pass. Each iteration of the loop should only be a few minutes long, and you're always running the unit test to verify nothing has gotten broken. If something does get broken, you can easily back out the changes that caused the problem because you implemented them in just the last couple of minutes. Here are a couple of great books to pick up to help you with learning test-driven development. Kent Beck's book Test-Driven Development: By Example is a great book from the creator of test-driven development, with a detailed case study on using TDD. Robert Martin's Clean Code:
>
> **[4:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/what-is-test-driven-development?u=76281980&t=283)** A Handbook of [Agile](../../Skills/DevOps/Agile%20Development.md) Software Craftsmanship provides the three laws of TDD, as well of a lot of other expert guidance on writing clean and maintainable code. In the next lecture, we'll go through a working example to see TDD in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (5), [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (2), [JUnit](../../Skills/Software%20Development/JUnit.md) (2), [Java](../../Skills/Software%20Development/Java.md) (1), [Agile Software Development](../../Skills/DevOps/Agile%20Software%20Development.md) (1)
> **Env Vars:** tdd (14), called (1)
> **CLI Commands:** make (7), find (1)
> **Definitions:** is a  (3)
> **Code Identifiers:** xunit (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [instructor] (1)

#### [Example: TDD session, the FizzBuzz kata](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=0)** - [Instructor] In this lecture, we're going to walk through an actual [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) coding session. For the example, we'll be using the fizzBuzz code kata. The name kata comes from martial arts and means training exercises. So code kata are training exercises for programmers. The fizzBuzz Kata is pretty simple. We'll be implementing a function that is passed in an integer value as an input and the function will return the string fizz if the passed-in number is a multiple of three, Buzz if the passed-in number is a multiple of five, and fizzBuzz if the passed-in number is a multiple of three and five. If the value is not a multiple of three or five, then the value itself is returned as a string. I'll be using Eclipse as my IDE for this example, and all the example coding sessions for this course. But the TDD process should apply regardless of the IDE you're using. In some of the future lectures, I'll show you how to build and use [Google](../../Glossary/Service/Google.md) tests and some of the other common IDEs as well. Okay, so let's get started. On the screen I've got a basic test that I can use just to verify that things compile, link, and execute properly. So we can run it, and we see that our unit test compiles and executes successfully. This tells me that I've got Google Test set up in my project correctly, and I'm ready to start writing tests. I've got a Google Test runner plugin installed in Eclipse and that's what you see here at the bottom of the screen. The test runner shows all the tests that were executed and if they passed or failed, and this green bar on the right hand side
>
> **[1:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=94)** shows if all the tests passed or not. When it's green, then all the tests pass. If any of the tests fail, this bar will turn red. This is a typical layout for a test runner in an xUnit type testing framework. In this file on the right hand side, I've got the list of test cases that I want to implement. These should be in order of increasing complexity from the simplest test case to the most complex. There are more complex test cases that can be added, but I think this is enough for this demonstration. Okay, so let's implement our first test case. Can I call fizzBuzz? To start, we enter the red phase, and in the red phase, I need to implement a failing unit test. So I'm gonna repurpose this assert true test case to validate that I can call the fizzBuzz function. Okay. Can call fizz buzz. I remove the assert true, and in standard string result equals fizzBuzz. And when I try to execute that, there's errors. Look up the errors. Undeclared identifier fizzBuzz. Now I have a compile error because the fizzBuzz function does not exist and per our three laws of TDD, not compiling is equivalent to failing. So we've successfully implemented a failing unit test
>
> **[3:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=188)** which means we've completed the red phase. So now we move on to the green phase. We need to make this test pass. We can do that pretty simply by implementing the fizzBuzz function. This shouldn't be the final implementation of the function, this should just be enough to make this test pass. So I'll do that now. Int value.
>
> **[3:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=228)** And that passes. Excellent, we've made our unit test pass with the simplest change we could make to the production code. We're done with the green phase and it's time to go on to the refactor phase. Is there anything to refactor here? I don't think so, there's nothing here yet. So let's mark this as complete in our to do list, and then go ahead and move right back to the red phase and restart our TDD cycle with a next test case. So I'll go ahead and mark that one as complete. Okay, so on to the next test case. I need a string one returned when I pass in a value of 1. I'm in the red phase, so my first step is to implement a failing unit test for this functionality. Okay. Test fizz buzz. Test returns one when passed in with one passed in. Okay. Standard string result equals fizzBuzz(1). Assert string equals one result dot C string. Okay. And that fails. We see it's for our new test case, that it's failed. Good, okay, so now that we've got our failing unit test,
>
> **[5:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=323)** we can go to the green phase and make this test pass. To make this test pass, we'll need to make the simplest change we can to the production code that will make it pass without breaking any of the other tests. That should be pretty easy in this case. We'll just modify the code to always return a string of one. So instead of the empty string, let us always return one. And that makes the test pass, and both my original test and the new test pass. There we go, all of our tests pass now, so on to the refactoring phase. Is there anything here to refactor? Is there any duplication? There is. This call to fizzBuzz is duplicated in both of my tests. That first test case is no longer really needed as the second test case validates that fizzBuzz can be called. I'm gonna go ahead and remove that first test case.
>
> **[6:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=384)** Okay, I don't think there's any more refactoring to be done. Let's mark this test case complete, and then back to the red phase in the next test case. Mark it complete. Okay, third test case. In this test case, I'm going to need to return a string of two when a value of two is passed in. I'm in the red phase, so the first thing I'm going to do is implement a failing unit test.
>
> **[6:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=417)** Fizz buzz test. That's actually tests. Returns two with two passed in. (whistling) Okay.
>
> **[7:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=447)** Result equals fizzBuzz(2). Assert string equals two result dot C string. Google Test does its string comparison on C style strings, so we cast the standard string to a C string here. Okay, so we've got our new unit test written, and it fails. Okay, now that we've got the failing unit test, I can go to the green phase and update the production code to make the test pass. I'll make this test pass by generalizing production code. I'll make it more generalized by converting the passed in value to a string, and this is a common practice with TDD. You'll implement some functionality in a very specific way in one test case just to make that test case pass, and then you'll generalize that production code in other test cases to make all the test cases pass. So instead of returning this very specific one, I will convert this to a string. And now my tests pass. And now that the test is passing, we can go on to the refactoring phase. Now in the refactoring phase, we will look for any duplication or other cleanup in the code. Is there any duplication here?
>
> **[9:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=540)** The structure between our two tests is duplicated. Let's refactor that into a simple utility function that can be used by our test. Okay. So, I'm going to create a void check fizz buzz function, which is passed in the integer value that we want to test with, and the expected result string and in this function, we will follow the same pattern.
>
> **[9:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=588)** (whistling) Expected result. C string result dot C string. Which means both of my test cases here to use that new checkFizzBuzz() utility function,
>
> **[10:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=627)** and after all these changes, I rerun my tests to see that they still pass. Okay, great. Let's mark off this test case and we'll move on to the next. We mark that complete. Okay. In this test case, things are gonna start to get a little interesting. We're going to make the code return Fizz when a value of three is passed in. Again, we're in the red phase, so our first step is to implement a failing unit test. We'll use our utility function to implement it. Test fizz buzz test. Returns fizz with three passed in. Check fizzBuzz three Fizz. And, the new test fails. Okay, now that we have a failing unit test, we'll go ahead and move on to the green phase and make this test pass. We want to make the smallest and simplest change we can to the production code to make this test pass. That can be very specific for this test case, and then we'll generalize it as we need to in the future for future test cases. So for this test, I'm gonna update the production code
>
> **[12:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=720)** to check if three is passed in, and if so, return Fizz.
>
> **[12:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=731)** If value three equals value, return fizz. Great. Okay, our test is passing. Let's move on to the refactoring phase. Is there anything to refactor? I don't think so. Let's mark this test case complete, and then back to the red phase to enter another iteration of the TDD cycle. Let's mark this complete. Okay, this next test case is very similar to the last test case. Here, we want to make fizzBuzz return Buzz when the value five is passed in. So let's implement the failing unit test. Test fizzBuzz test returns buzz with five passed in. Check fizz buzz five buzz. And it fails. Okay, now we're in the green phase, and we'll make this test pass by adding another if condition to the production code. If
>
> **[13:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=824)** five equals value, return buzz. Easy. Okay, so now we go to the refactoring phase. Is there anything to refactor? It doesn't really look like it at this point. Let's move on with the next test case. So we'll mark this off. Okay, now in this test case, we want to generalize the production code to not just return Fizz for the value of three, but for three or any multiple of three. We're in the red phase, so let's write our failing unit test. Fizz buzz test returns fizz with six passed in, six being a multiple of three. Check fizz buzz three, oops. Six fizz. Okay. Okay, we have our failing unit test, so let's go to the green phase and make it pass. We're gonna modify the if statement for the three to have it use the modulus operator to see if the remainder of three is 0. Let's make that change. If 0
>
> **[15:19](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=919)** equals three, no, value modulus three. And that makes our test pass. Okay. Great. So let's refactor. I think this fizzBuzz function could use a little cleanup to make those if statements a little bit cleaner. I also don't like the multiple return statements. I think I'm gonna leave those for now, so let's do the next test case. Mark that off. Okay, so this test case is basically a repeat again of the previous test case, but this time we want to return Buzz for multiples of five. Let's implement the failing unit test because we're in the red phase. Test fizz buzz tests, returns buzz with 10 passed in. Check fizz buzz 10 buzz. Okay, and now we'll make it pass like we did before using the modulus operator. 0
>
> **[16:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1013)** equals value mod five. Okay, this is getting to be routine. All right, let's refactor. Is there anything to refactor here, any duplication? The expression in the two if statements in fizzBuzz are pretty much identical. I'm going to go ahead and extract those into a isMultiple() utility method, try and make the code a little bit cleaner. So I'll do that now. Bool isMultiple. Int value, int base. Return 0 equals value mod base. And then I'll modify the if statements to use the new utility function, hopefully make the code a little more readable,
>
> **[18:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1081)** and validate that my unit tests still pass. Great. Okay, on to the last test case. In this final test case, we're gonna return FizzBuzz if the passed in value is a multiple of three and five. We're in the red phase again, so let's go ahead and implement the failing unit test.
>
> **[18:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1110)** Returns Fizz Buzz with 15 passed in. Check fizz buzz 15 Fizz Buzz. Okay. All right, we have our failing unit test. Now let's enter the green phase and make it pass. You're gonna make this pass pretty simply by adding another if statement to the fizzBuzz function, checking if the value is a multiple of three and five. Okay. If isMultiple() value, three and is multiple value, five, return Fizz Buzz. And it passes. Excellent. Our code is now passing all the test cases, so on to the refactoring phase. Anything to refactor here? I think this looks pretty good at this point and no more refactoring is really necessary for this simple implementation, so that completes the fizzBuzz code kata. In the exercises for the course, I'll provide some additional things you can do to add to this code kata to make it more challenging. In the next lecture, I'm gonna go over downloading
>
> **[20:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/example-tdd-session-the-fizzbuzz-kata?u=76281980&t=1205)** and compiling Google Test, and getting it set up in Eclipse with a unit test runner plugin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (5), [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (1)
> **CLI Commands:** make (27)
> **Code Identifiers:** fizzbuzz (20), ismultiple (3), xunit (1), checkfizzbuzz (1)
> **Env Vars:** tdd (5), ide (2)
> **Definitions:** is a  (7)
> **UI Navigation:** go to (4)
> **Cross-References:** in the next (2)
> **Prerequisites:** set up (2)


### 2. Setting Up Your Development Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Set up Google Test with Eclipse](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=0)** - [Instructor] In this lecture, I'm going to walk through downloading and compiling [Google](../../Glossary/Service/Google.md) Test C++ [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) framework. And then getting it set up to run in the Eclipse CDT C++ IDE. The framework is patterned on the typical X unit type testing frameworks and compiles on [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), [Windows](../../Glossary/Service/Windows.md), and Mac environments. To follow along with this lecture, you'll need to have a recent version of the Eclipse CDT IDE installed. CDT stands for CC++ development tool. This is a C++ flavor of the popular open source Eclipse IDE. You'll also need to have C++ compiler and CMake installed. The most common C++ compiler from any Posix environment is the Gnu C++ compiler. Another option is the CLion C++ compiler. In addition to that, you'll need to have CMake installed for the build process. For the lecture, I'm gonna be working in Mac OS 10 but the set of steps to build Google Test and integrate it with Eclipse CDT should be essentially the same in Linux or Cygwin on Windows. The Google Test library's stored on [GitHub](../../Skills/Software%20Development/GitHub.md). So the first step is I'm going to get the latest source code for the Google Test library by cloning the [Git](../../Skills/Software%20Development/Git.md) Repo from the command line. So, let's go ahead and do that now. First, I'm going to copy the URL for the repo. And then for my command line, git clone and that URL.
>
> **[1:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=106)** And that downloads all the latest source code for Google Test into a Google Test directory. Okay. Now I'm gonna clone the repo. I can go ahead and build the library. Google Test uses CMake for building the library in Posix type environments, like Linux, Mac OS, and Cygwin on Windows. So, first I'm going to make a build directory and then I'm gonna run CMake from that directory. CMake will then generate the make file I need to build the library. Make directory build. Cd build. CMake dot dot slash. And now I see my make file. Once CMake is completed, I can list the contents of the build directory and see the make file. Now I can run make and actually build the library.
>
> **[2:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=177)** Now that the build's complete, I can see there's a Google Mock folder in the build directory, and inside that is the Google Test directory.
>
> **[3:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=191)** The Google Test directory contains the output library files that we'll be using. That's libgtest.a and libgtest_main.a. Google Mock is the library for creating mock objects, which are test objects that can be very useful during unit testing. Google Mock was combined with the Google Test library recently, which is why you see references to it here. I'll be providing a course on advanced tester developments C++, where I'll go over the usage of Google Mock to help you with getting your unit tests to run in isolation. Now that I've got Google Test built, I can look at integrating it with the Eclipse CDT IDE. To do that, I need to install the Eclipse C++ unit testing support plugin. I'll do that by bringing up the Install New Software window, selecting the Eclipse download site from my version of Eclipse, and then selecting the C++ unit testing support plugin in the programming languages section. So, let's go ahead and do that now. I'll look at Help, Install New Software. And I'll install from the Eclipse download site. Okay. So, now I'll go to the programming languages section. And I will select CC++ Unit Testing Support. Click Next. And select that. Click Next.
>
> **[4:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=284)** I accept the license agreement. And then Finish. And now Eclipse will need to restart. Okay. Now that I have the plugin installed, I'll set up a new C++ project to test that I can create the C++ binary, using the Google Test libraries. I'll also set up a run configuration using the Google Test test runner that is installed with the C++ unit testing support plugin. First, I'll create a new C++ project and I'll verify that it compiles and shows the hello world output. So, let's do File, New, C++ Project. GT Tests. Mac OS 10. Hello World.
>
> **[5:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=347)** Okay, let's see if that compiles. It does. And let's see it execute.
>
> **[6:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=372)** Can it run successfully? Okay. Now that I have the project set up, I'm gonna go ahead and modify the code for simple Google Test assert, unit test that should always pass. So, first I include the Google Test library.
>
> **[6:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=396)** Header file. And I'm gonna delete name. So, I should be included with the Google Test libraries.
>
> **[7:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=420)** Okay.
>
> **[7:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=434)** Okay. When I try to compile this, this doesn't compile right because the project doesn't know about the path to the Google Test headers. Let's go ahead and fix that now. So, I'm gonna right-click on the project and then click on Properties. Then I'm going to go to C++ General Paths and Symbols. Under Gnu C++ I'm gonna add a new include directory path.
>
> **[7:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=475)** Okay. Let's see how that builds. Okay. That gets me past the problem of the include file, but now the linker's complaining. It looks like it's complaining that it doesn't have a main function. The main function is actually included with Google Test. So I need to update the project to know the path to the Google Test libraries and to link with those libraries. So let's do that now. Right-click on the project, select the properties. Under Library Paths, let's add the path to the Google Test libraries. So we'll need Google Test. And Google Mock is where the actual libraries are. Under Build, Google Mock. And then gtest. Under gtest we have libgtest_main and libgtest. So, we'll add the path to that directory and then we will add gtest_main and gtest to our list of additional... Libraries.
>
> **[9:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=556)** And now compile successfully. And if I execute it, it executes successfully. But it's a simple text output. I want to have the green bar like I had with the fizzbuzz example. I'm going to create a new run configuration using the Google Test test runner installed with the C++ unit testing plugin. So, to do that, I'm gonna click on the down arrow next to the Run button. I'm gonna select Run Configurations.
>
> **[9:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-eclipse?u=76281980&t=593)** From there I'm going to add a new C++ unit test. So, I'm gonna call it GTTests Unit Tests. And then I'm going to select the Google Test Runner. Which I run now. Looks like everything passes successfully and we get our green bar. At that point, we're all set. I've got a C++ project in Eclipse using Google Test and a test runner showing me the results of my test. In the next lecture, I'll walk through the same process but in Windows with Visual Studio.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (30), [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (7), [Windows](../../Glossary/Service/Windows.md) (4), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (3), [Git](../../Skills/Software%20Development/Git.md) (2)
> **Env Vars:** cdt (5), ide (4), url (2)
> **Prerequisites:** set up (4), install (4), you'll need (2)
> **CLI Commands:** make (6), git (2), cd (1)
> **UI Navigation:** go to (2), right-click (2), click on (2), select the (2)
> **Tools:** command line (2), github (1), visual studio (1)
> **Code Identifiers:** libgtest_main (2), gtest_main (1)
> **Exercise Files:** source code (2), clone the repo (1)

#### [Set up Google Test with Visual Studio](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=0)** - [Instructor] In this lecture, I'm gonna walk through downloading the [Google](../../Glossary/Service/Google.md) Test C++ [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) framework, and then building it and getting it set up with a test runner in [Windows](../../Glossary/Service/Windows.md) with [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Visual Studio. The framework is patterned on the typical X-unit type testing frameworks and compiles on [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), Windows, and Mac environments. For you to follow along with this lecture, you'll need to have a recent version of Visual Studio installed. The first step is to download the Google Test Library, which is stored here on [GitHub](../../Skills/Software%20Development/GitHub.md). I'll be using the Windows [Git](../../Skills/Software%20Development/Git.md) client to clone the Google Test repo. This requires that you have the Windows GitClient installed, but you can also download the latest source code from GitHub as a zip file instead. So the first step is, I'm going to click this button and highlight the URL for the repo. Then, I'm going to go to the command line and clone the repo using git. Okay, now that I've cloned the repo, I can go ahead and build the library. The Google Test files includes a solution and project files for building Google Test inside of Visual Studio. The solution files are in the Google Test Microsoft Visual C directory of the repo. When I open the solution, therefore, a different of Visual Studio, but I'll go ahead and let Visual Studio upgrade. So Windows Explorer, I'll go into my Google Test directory.
>
> **[1:35](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=95)** And Google Test and MSVC, on 10 and GTestSolution.
>
> **[1:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=113)** Okay, I'm gonna go ahead and let Visual Studio upgrade the solution to this version of Visual Studio. Now that the solution is open, I'll go ahead and build a release version of the Google Test libraries. So I'll change this from debug to release, and then I will rebuild the solution.
>
> **[2:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=158)** Okay, so with the Google Test libraries created, I can go ahead and create a new Visual Studio C++ project to test them. So I'll close this solution and I'll create a new project.
>
> **[2:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=178)** And it's gonna be a C++ Windows Console Application, which I will put in this directory, and I will call it GTTests.
>
> **[3:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=206)** Okay, so let's go ahead and make sure this can compile and do something.
>
> **[3:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=228)** Make sure I get all my certain name spaces. And it should build. Then I can run it. Now I'm gonna go ahead and change the code to implement a simple unit test with GTest that just asserts true, so I'll add the GTest header file.
>
> **[4:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=258)** And I'm going to remove the main and change this to a test function. GTTest, assert true.
>
> **[4:33](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=273)** Assert true true.
>
> **[4:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=284)** Okay. Alright, here I can see that I've got a compile on the include statement. I'm gonna need to add the Google Test include directory to the project. First, I wanna change the project to use a release build, 'cause that's what I use for building Google Tests. Then, I'll add the Google Test included in the library directories and the necessary library files. So I'm gonna change this to release and update the properties of this project to include the Google Tests how we file libraries or directories.
>
> **[5:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=327)** Open test, get test, include. And got the library directory.
>
> **[5:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=355)** Okay, and then I'm going to add the
>
> **[6:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=365)** Google Test Library files themselves. Gtest main.lib and say GTest specific name and the GTest library itself.
>
> **[6:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=384)** That should be able to rebuild the solution. That seems to have gotten rid of the include error, but now there's a bunch of link errors. Looks like the Google Test Libraries were built with a different version of the runtime library. I'm going to go into the project's code generation properties and change the runtime library to match what was used for building the Google Test Libraries.
>
> **[7:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=426)** Excellent. Now I should be able to execute it. Now, when the project builds successfully and I can execute it, but when I execute it, I see a console output rather than the green bar we had with the fizz buzz example. The green bar and test results we had with the gooey based test runner was much more visual and informative. Luckily, there's a couple of different Visual Studio extensions for running Google Test based unit tests. I'll be using the Google Test adapter extension. To install the Google Test adapter, I'm going to click on extensions and updates,
>
> **[7:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-visual-studio?u=76281980&t=470)** and then I'm gonna select online, and I'm gonna type in Google Test. And Google Test adapter is the first thing that comes up. I'm gonna click download and then close. And I'll need to restart Visual Studio for the extension to be installed. Okay, now I can open my GTTest solution and there's a test menu here at the top of the window. I can click that and select run all tests. And I get the familiar green bar and a list of tests that were executed. Excellent, I have a working solution in Visual Studio and I'm ready to write more unit tests. In the next lecture, I'm going to go back to Eclipse and start working on another hands-on TDD coding session.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (22), [Windows](../../Glossary/Service/Windows.md) (6), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Git](../../Skills/Software%20Development/Git.md) (2)
> **Tools:** visual studio (11), github (2), command line (1)
> **Exercise Files:** download the (2), source code (1), zip file (1), clone the repo (1)
> **CLI Commands:** git (2), make (2)
> **Env Vars:** url (1), msvc (1), tdd (1)
> **UI Navigation:** go to (1), open the (1), click on (1)
> **Prerequisites:** set up (1), you'll need (1), install (1)
> **Cross-References:** in the next (1), go back to (1)

#### [Set up Google Test with CLion](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=0)** - [Instructor] In this lecture, I'm going to walk through getting [Google](../../Glossary/Service/Google.md) Test set up to run in the JetBrain CLion C++ IDE. To follow along with this lecture, you'll need to have a recent version of the CLion IDE installed and set up to use your C++ compiler of choice. You'll also need to download and compile the Google Test library. Please refer to the video for compiling and running Google Test in Eclipse for instructions on downloading and compiling Google Test. For the lecture, I'm going to be working in [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), but the set of steps to set up and use Google Test in CLion should be essentially the same on MAC OS or Cygwin on [Windows](../../Glossary/Service/Windows.md). So, first I'm going to create a new test project called googletest_test, and I'll make sure it compiles and executes. So, first I'll create a new project and call it googletest_test. Then I'll compile and execute it.
>
> **[1:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=80)** Now that I have the project set up, I'm going to modify the code for a simple Google Test assert unit test that should always pass. Then I'll try to compile and execute the code.
>
> **[2:12](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=132)** This doesn't compile right now because the project doesn't know about the path to the Google Test headers. CLion uses CMake for its project files. I'll fix my compilers by adding the Google Test include files and library files test and gtest main to the project's Cmake list .txt file. Google Test in Linux also requires the p thread library. So, first I'll add the path to the Google Test headers using the Include Directories command.
>
> **[2:53](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=173)** Then I'll add the path to the directory that has the Google Test library files using the Link Directories command.
>
> **[3:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=190)** Then I'll add the command to link the Google Test libraries and the p thread library.
>
> **[3:29](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=209)** And lastly, I'll try to compile everything.
>
> **[3:39](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=219)** That compiles and executes. But it's a simple text output. I want it to have the green bar like I had with the fizzbuzz example. CLion comes with a Google Test runner included. So, all I have to do is create a new run configuration that uses that test runner. So, first I'll bring up the Configuration screen by clicking on Run and Edit Configurations. Then I'll add a new Google Test configuration and call it unit tests. Then I'll run that new configuration and see the green bar.
>
> **[4:25](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-clion?u=76281980&t=265)** And we're all set. I've got a C++ project in CLion using Google Test and a test runner showing me the results of my test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (15), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Windows](../../Glossary/Service/Windows.md) (1)
> **Prerequisites:** set up (4), you'll need (1)
> **Env Vars:** ide (2), mac (1)
> **Code Identifiers:** googletest_test (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Set up Google Test with Xcode](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=0)** - [Instructor] In this lecture, I'm going to walk through getting [Google](../../Glossary/Service/Google.md) Tests set up to run in the Apple [Xcode](../../Skills/Mobile%20Development/Xcode.md) IDE. To follow along with this lecture, you'll need to have a recent version of the Xcode IDE installed. You'll also need to have downloaded and compiled the Google Test library. Please refer to the video for compiling and running Google Test in Eclipse for instructions on downloading and compiling Google Test. First, I'm going to create a new test project called googletest_test, and I'll make sure it compiles and executes.
>
> **[1:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=60)** Now that I have the project set up, I'm going to modify the code to have a simple unit test that always asserts true and should always pass. Then I'll try to compile and execute that code.
>
> **[1:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=109)** And I immediately see compile errors from Xcode that it can't find the gtest header and doesn't know the gtest macros. I'll fix the compile errors by adding the path to the Google Test include files to the project. I'll also add the library files gtest and gtest_main.
>
> **[2:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=130)** First I'll add the path to the Google Test headers by going to the project's configuration. I want to be sure to select the project configuration and not the target. Then I'll locate the search paths configuration section under the build settings, and I'll add the path to the Google Test headers to the header search path configuration.
>
> **[2:45](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=165)** Next I'll add the path to the Google Test libraries to the library search path configuration.
>
> **[3:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=185)** Then I'll select the target configuration and I'll add the gtest and gtest_main libraries via the linked frameworks and libraries configuration.
>
> **[3:43](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=223)** Lastly, I'll try to recompile and execute the test.
>
> **[3:57](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=237)** Great. That compiles and executes, but it's a simple text output. I'd like to have something more integrative with Xcode's built-in testing UI. Xcode comes with a unit test runner, but it doesn't have built-in support for Google Test. I'll first need to download an open source wrapper that I can add to a unit test target build that will translate the Google Test output to what the Xcode test runner expects. This code is on [GitHub](../../Skills/Software%20Development/GitHub.md) at [https://github.com/mattstevens/xcode-googletest](https://github.com/mattstevens/xcode-googletest).
>
> **[4:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=274)** I'll go ahead and clone that repo to get it on my system.
>
> **[5:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=311)** Next I'll need to create a new [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) bundle target in my project.
>
> **[5:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=332)** Xcode only lets me select [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) or Objective-C for the languages. I'll need to select Objective-C, as that's what the Google Test wrapper is written in. That creates a new unit test folder in my project. I'll go ahead and add the wrapper code to that folder.
>
> **[6:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=374)** Then I'll select my new unit test target as the current scheme which is the target that I want Xcode to build and execute by selecting it under the product and schemes menu.
>
> **[6:31](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=391)** Then I'll update the scheme to use the googletest_test executable. I'll also add the main.cpp to the unit test target by selecting it under the target membership parameter for the file.
>
> **[7:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=436)** Lastly I'll update the target to link in the gtest and gtest_main libraries.
>
> **[7:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=467)** Now I'll build the target and execute the tests.
>
> **[8:06](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/set-up-google-test-with-xcode?u=76281980&t=486)** And I'm all set. I've got a C++ project in Xcode using Google Test and a test runner showing me the results of my tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (12), [Xcode](../../Skills/Mobile%20Development/Xcode.md) (10), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (1), [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) (1)
> **Code Identifiers:** gtest_main (3), googletest_test (2)
> **Prerequisites:** set up (2), you'll need (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** ide (2)
> **Tools:** github (2)
> **UI Navigation:** select the (2)
> **File Paths:** main.cpp (1)


### 3. Google Test Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Google Test](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=0)** - [Instructor] In this lecture, I'm gonna give you an overview of [Google](../../Glossary/Service/Google.md) Test. I'll explain exactly what it is and go over its major features. So what is Google Test? Google Test is an open source C++ [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) framework from Google, styled after common NUnit type frameworks. It provides the ability to create tests, test cases, and test suites, which it calls text fixtures. It provides several types of assert macros for generating unit test failures. This includes Boolean true/false macros, binary comparison of integer and floating point values, string comparisons, and asserts. It also adds many useful command line arguments to your unit test binary to help specify what tests should be run and in what order. The TEST macro is the simplest way to create a test. It defines a specific test for a specific test case. Tests from the same test case will all be grouped together in the final test output from Google Test. The test case and test names should be valid C++ identifiers and should not use the underscore character. Google Test provides a framework for what are known as test fixtures or test suites. Test fixtures allow for common setup and tear down between tests. Test fixtures are classes which are derived from the Google Test test class. And a new instance of this class will be created for each test.
>
> **[1:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=92)** Each test fixture can implement virtual SetUp and TearDown functions which will be called between each test. And when creating tests using a test fixture, the TEST_F macro is used rather than the TEST macro. And the text fixture name and the test name are passed in. Since Google Test creates new instances of the text fixture class at the start of each test and then destroys that class after the test is run, then the initialization and cleanup of the test fixture can be done in the class' constructor and destructor. This is the preferable method and should be more commonly used as it allows for specifying member variables as const and will automatically call base class constructors. SetUp and TearDown functions may still be necessary if there's a chance the code will generate an exception in the cleanup as that will lead to undefined behavior if it occurred in the destructor. Here I've got a very simple example of a test fixture with a test that uses it. The text fixture has a pointer to a test object, which it creates a new instance of in a constructor and cleans up in the destructor. The test then makes a method call on the test object and asserts the results. Google Test provides assert macros. And these macros perform the checks that determine if a test passes or fails. There are two types of failure assert macros. The ASSERT macros will completely abort the current tests when they fail. Meaning that none of the other asserts in the test are called.
>
> **[3:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=185)** The EXPECT macros will indicate the failure, but will not abort the current test. Any additional macros will still be called, potentially identifying additional failures in the test. The EXPECT macros should be used if possible when the test has multiple asserts to try to identify all the failures in the test. There are four comparison type asserts that Google Test provides. A basic comparison, which simply verifies that the passed-in condition evaluates to true or false. A binary comparison, which will verify that the two values are either equal, not equal, less than, less than or equal, greater than, or greater than or equal to each other. A string comparison, which will compare two C style strings to each other. For standard string comparisons, you can also use the binary comparison asserts. Google Test also provides asserts for comparing floats and doubles. Floats and doubles are unique, in that they can never be compared exactly due to how they are stored in memory. The asserts that Google Test provides will verify that two floating point values are either very close to each other with several digits of precision, or allow you to specify how much air is allowed between the two compared numbers. This slide shows examples of the basic assert statements. The first assert passes because the expression evaluates to true. The second assert passes because the expression evaluates to false. The third assert fails because the passed-in expression
>
> **[4:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=278)** evaluates to false. And the fourth assert fails because the passed-in expression evaluates to true. Here I'm showing you an example of each of the binary comparison asserts. Each of these asserts pass as the passed-in values match the corresponding comparison operation of the assert. The equals, not equals, less than, less than or equal, greater than, or greater than or equal. Here I'm showing the different asserts for string comparison. The top two asserts show how the binary comparison asserts can be used with the C++ standard string. The remaining asserts show how C style strings can be compared for equals or not equals, and optionally, ignoring case. Here I'm showing the assert comparisons for floating point values. The first two asserts use Google Test's built-in logic for determining a floating point values are very close to each other in value. The second two asserts show how you can specify your own absolute error for the difference between the two passed-in floating point values. Google Test also supports asserts on exceptions. Asserts can fail a test when an exception is expected to be thrown from a function call. That assert can be on a specific exception or on any exception. An assert can also fail a test when an exception is thrown that was not expected.
>
> **[6:14](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-test?u=76281980&t=374)** Google Test also adds several command line options to your unit test executable. In this slide, I'm showing a few of the most useful. The gtest_filter command line argument allows you to specify which tests are executed. This parameter is broken up into two regular expressions separated by a colon. The first regular expression defines the names of the test cases that should be executed. And the second regular expression defines the names of the tests that should be executed. Both regular expressions must be matched by a test for it to be executed. The next option is gtest_repeat. This allows you to tell Google Test to run the suite of tests n number of times. This can be very useful for identifying flaky tests that fail intermittently. The last option is gtest_shuffle. This runs the test in a randomized order. This can also be very helpful in verifying that there are no dependencies between the different tests in the test suite. So that's it for this overview of Google Test. In the next lecture, I'll do another hands-on TDD coding session, where I'll put into practice many of the things that were went over here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (17), [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (1)
> **Env Vars:** test (2), expect (2), test_f (1), assert (1), tdd (1)
> **Prerequisites:** setup (3), initialization (1)
> **Code Identifiers:** gtest_filter (1), gtest_repeat (1), gtest_shuffle (1)
> **Tools:** command line (3)
> **Definitions:** is an  (1), known as (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 4. The Supermarket Checkout Kata

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview, setup, and the first test case](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=0)** - [Instructor] In this section of the course, I'll be preforming another hands-on TDD coding session. For this example, I'll be implementing the supermarket checkout code kata. In this kata, I'll be implementing a checkout class that maintains a list of items that are being added during a checkout at a supermarket. This class should provide interfaces for setting the individual prices on items, adding individual items to the check out, calculating the current total cost from all the items that have been added, and applying optional discount rules where there are N number of a specific item type, i.e. three, four, doll. The checkout class has the following test cases that I'll go through as I'm implementing the class with TDD. The first and simplest test case is for creating an instance of the checkout class, next is the ability to add an item price, then adding an individual item to the list of checkout items, then calculating the current total, then adding multiple items and getting the correct total, then the class needs the ability to add discount rules, and then the class needs the ability to apply the discount rules when calculating the total. Now I'm going to go ahead and set up a new eclipse CDT C++ project for this kata. Then I'll verify I have [Google](../../Glossary/Service/Google.md) Test setup properly and implement the first test case. So I've created a new C++ project for this kata and verified that it builds and executes.
>
> **[1:36](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=96)** My next step is to get it configured to use Google Test. To do that, I need to add the paths to the Google Test, include files and libraries, and then add the libraries to the link settings. So I'm gonna right click on my project in eclipse and go to Properties. Then I'm gonna go to Paths and Symbols and for Include, in GNU C++, I'm going to add a new file system path. Google test, Google test, include. My Google test include path. In Libraries, I'm going to add gtest_main
>
> **[2:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=140)** and gtest. And in the Library Paths, I'm going to add the file system path to the gtest libraries.
>
> **[2:46](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=166)** Okay, now I'm going to add a unit test run configuration for this project and modify the code to verify it can make a simple test case. So I am going to go up here and select Run Configurations and I'm gonna add a new C++ unit test. I'm gonna set the test runner to Google test. Just gonna call this CheckoutTests. Apply, close. And then now I'm gonna change this code to just be a simple test case that verifies that I can insert. Include Google test assert. (computer keys clicking) TEST, CheckoutTests, CanAssert. ASSERT_TRUE. True. I need to build that and then verify that it executes. And it does. So now that I have Google test set up and my green bar, I'm ready to enter my TDD loop of red green refactor. I'm going to go ahead and enter the red phase
>
> **[4:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=258)** and start implementing the first test case. The first test case is to simply verify that I can create an instance of the checkout class. I'm going to update this simple test case that I have now to do that. So change this from CanAssert to CanInstantiateCheckout.
>
> **[4:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=287)** Checkout co. And immediately I can see that there's a compile error. So now that I have a failing unit test, it's time to enter the green phase and make this test pass. I'll do that by going ahead and implementing this checkout class. I'm gonna right click on my project, let's say New, Class. And call the class Checkout. And go finish. So I have a checkout cpp and a checkout header and the default destructor and constructor. And it should still fail and it does. So we need to go ahead and add the checkout header file
>
> **[5:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/overview-setup-and-the-first-test-case?u=76281980&t=342)** and that should compile. And it does. And I can execute it, excellent. I now have my first passing unit test and I'm ready to refactor it. Is there anything to refactor here? I don't think so. I'm ready to go back to the red phase. In the next lecture, I'll implement the next three test cases, adding item prices, adding items, and calculating a total.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (9)
> **Env Vars:** tdd (3), cdt (1), gnu (1), test (1), assert_true (1)
> **UI Navigation:** click on (2), go to (2)
> **Prerequisites:** set up (2), setup (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1), in the next (1)
> **Code Identifiers:** gtest_main (1)
> **Speakers:** - [instructor] (1)

#### [Add items, add item prices, and calculate the current total](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=0)** - [Instructor] In this lecture I'll be implementing the add item prices and items, and calculate total test cases. I'm gonna begin my marking off the can instantiate checkout test case, let's do that now. Okay, then I need to create the test for the can add item price test case which will simply instantiate the checkout class and try to call in add item price method that will pass in the item string and the unit price as an integer. So I'll do that now. Test checkout test can add item price.
>
> **[0:51](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=51)** Checkout co co dot add item price. The item name is A with a price of one. Okay, and so here I can see the ID is already telling me that I have a compiler error because the add item price method does not yet exist in a checkout class. And as our TDD rules state, compiling is equivalent to a failing unit test. Okay so now that I've got a failing unit test, I need to enter the green phase and make the test pass. I need to make it pass the simplest way possible. In this case I just need to implement the add item price method to checkout. So I'll go ahead and do that now. So I'm going to need to include the string class
>
> **[1:50](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=110)** and I'll add the new function declaration to the class, add item price standard string item integer price.
>
> **[2:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=123)** And CCP file, void checkout add item price
>
> **[2:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=131)** standard string item integer price.
>
> **[2:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=140)** And for right now I don't need any implementation. Simplest test case, I just need the function there. So now I should be able to compile and run. And I see that that makes my unit test pass, great. So now that my unit test is passing I can go ahead and enter the refactoring phase. Is there anything to refactor here? At checkout instantiation it's duplicated it for both of my tests. I don't think the first test is necessary anymore so I'm validating that I can instantiate an instance of checkout in the can add item price test. So I'm gonna go ahead and remove that first test. And validate my remaining test still passes, great. So I'm gonna go ahead and mark off this test case in my list. Okay, and then it's back to the red phase and the next test case. So in this test case I need to update the checkout class to have a public interface for adding checkout items. So I'm in the red phase, so the first step is to add a failing unit test. Test checkout test can add item.
>
> **[3:37](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=217)** Checkout co co dot add item, and the item name.
>
> **[3:47](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=227)** Okay, once again I can see that I've already got a compile error here which means I have a failing unit test. So now I'm going to enter the green phase and make this test pass by adding this new method. So I'll go into checkout dot H, I'll add the new method declaration. String item, and put the implementation in the CPP file.
>
> **[4:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=270)** So again I want this to be the simplest implementation possible to make the currently failing unit test pass. So for right now an empty implementation will do that. And we should be able to verify that it makes it pass, and it does, easy okay. So now to the refactoring phase. Is there anything to refactor? The checkout instantiation is duplicated again. This is gonna happen in all of our tests as they're all gonna need a checkout instance. This is a good time to go ahead and add a test fixture where I can instantiate checkout as a member variable, and then it can be reused by each of the tests. So I'll go ahead and do that now. Class checkout tests, which is derived from testing test.
>
> **[5:23](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=323)** And in its constructor, first I'm going to put in a protected member variable for the checkout class. Use a better name than co, and that's really all I need to do. Now I'll change these to test fixture macros,
>
> **[5:58](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=358)** and remove the checkout instantiation from each and instead use the new member variable in my test fixture class. And my test should still pass. Helps if I put in the public inheritance, and now they pass, okay great. Anything else to refactor here? I don't think so, this looks pretty simple. Okay back to the red phase and the next test case. So we have can add item, with this test case I need to update the checkout class to have a public method for calculating the current total and verify that total is correct for one item. I'm in the red phase so my first step is to create the failing unit test. In this test I'll add one price for item A and then add one item A to the list of checkout items. Then I'll call the calculate total method and verify it returns one, so let's do that now. Test fixture checkout tests and calculate total checkout
>
> **[7:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=442)** dot add item price A one checkout dot add item A integer result equals checkout calculate total
>
> **[7:45](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=465)** assert equals one result. And let's call result total.
>
> **[8:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=485)** So I can see here that I have a compile error which means I have a failing unit test. So now that I've got my failing test I can go ahead and enter the green phase and make it pass by adding the calculate total method to the checkout class. I'll want the simplest implementation of that method to start, so I'll just have it return one. So let's add that method to the class, integer calculate total no parameters. Add the implementation integer checkout calculate total no parameters, and for right now for the simplest implementation necessary to make the currently failing test pass I will just have it return one.
>
> **[9:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=541)** Great, now that my unit test is passing I can enter the refactoring phase. Is there any duplication? The add item price and add item method calls are duplicated in this new test. I don't think the can add item price or can add item tests are needed now as they're both being done in the can calculate total test. I'm gonna go ahead and remove those test cases. Remove both of those, simplify my tests and verify my remaining test still runs. And it does, excellent. So now I can mark off that test case.
>
> **[9:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-items-add-item-prices-and-calculate-the-current-total?u=76281980&t=588)** Okay, in the next lecture I'll implement the next test case for adding multiple items and getting the correct total.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6)
> **Env Vars:** tdd (1), ccp (1), cpp (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Add multiple items and calculate the total](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=0)** - [Instructor] In this test case, I'm going to add prices for multiple items, add multiple items to the checkout, and then verify the correct total is calculated. I'm in the red phase, so first I'm going to add the failing test case. In this test case, I'll add the price for two items and actually add two items and verify that the correct total is calculated. Let me do that now. Test fixture, CheckoutTests, CanGetTotalForMultipleItems.
>
> **[0:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=41)** checkOut.addItemPrice("a", 1).
>
> **[0:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=49)** checkOut.addItemPrice("b", 2). checkOut.addItem("a"). checkOut.addItem("b"). Int total = checkOut.calculateTotal().
>
> **[1:17](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=77)** ASSERT_EQ(3,total). As the total should be the sum of one and two for the two items A and B. Let's build this and run it. Excellent. My new test is failing. Great. So I have a failing unit test, so onto the green phase and let's make it pass. Things start to get a little bit more complicated with this test. What I wanna try and do the simplest thing I can to get the test to pass. To do that I'll go ahead and add a map, Ada structure, to the checkout class, to keep track of the prices per item. Then I'll update checkout to have a total member variable and increment that total whenever a new item is added. Let me do that now. First I will add par file, standard map, Ada structure.
>
> **[2:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=136)** Then I'll add a couple of protected member variables. One for the map prices,
>
> **[2:30](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=150)** and then member variable for my running total. Make it initialize the total to zero and the class's initialization list. Then I'm going to update the item price method to save this price in my new map of prices. Prices[Item] = price. Then the addItem method, I'm going to increment the total member variable with the price for this specified item. Total += prices[Item].
>
> **[3:21](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-multiple-items-and-calculate-the-total?u=76281980&t=201)** Lastly, I'm going to change the calculate total to return my running total. Now my test passes. Now that my test is passing, I can enter the refactor phase. Is there anything to refactor? Anything of concern? I don't think so. So let's mark off this test case, and then we'll move on to the next one, which we'll do in the next lecture.

> [!info]- Semantic Content
>
> **Code Identifiers:** checkout (5), additem (3), additemprice (2), calculatetotal (1)
> **CLI Commands:** make (2)
> **Env Vars:** assert_eq (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Add and apply discounts](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=0)** - [Instructor] So for this test case, I need to add a method to the checkout to allow me to submit a discount rule. A discount has three parameters: the item type, the number of items required for the discount, and the discounted price. So I'm going to add a method called AddDiscount, which takes those three parameters. I'm in the red phase now, so I'll start by implementing a failing unit test that tries to call that new method. Okay, so test fixture checkout test can add discount.
>
> **[0:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=42)** Checkout dot add discount, the item, the item count, and the discount price. Okay, so I added a test which calls AddDiscount passing in the A type, with three for the number of A's, and two for the discounted price. The test is failing to compile because the AddDiscount method doesn't exist in the checkout class yet. I'm in the green phase now, so I'm gonna add that method to the checkout class to make the test pass. As always, this should be the simplest implementation possible to make that test pass. So I'm just going to implement an empty function for now. So let me go ahead and do that. Okay. Void add discount, standard stream item, integer number of items, integer discount price. Okay. Then I will add this to my CPP file. Void checkout, add discount, and for right now,
>
> **[2:15](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=135)** I'll leave this an empty function. And this should make my test pass. Which it does. So now that all my tests are passing, I can go back to the refactoring phase. Anything to refactor? I don't think so. So lets go back to the red phase and the next test case. Okay. In this next test case, I'm going to add a discount rule, and then add enough items to the checkout so that the rule should be applied when calculating the total. I'm going to implement the simplest test case, which is a rule for three of the same item, which has a lower price than the three individual items. I'm in the red phase, so I'll implement my failing unit test first. So I'll go to CheckoutTest. Test fixture, checkout tests, can calculate with discount, can calculate total with discount. Okay. Checkout, add item price, one, checkout dot add discount,
>
> **[3:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=222)** A one, add discount, A is the item, three is the item count, and two is the discounted price. Okay. And I'm going to add three items, add item A, checkout dot add item A, and one more add item A. Then I'm going to calculate the total, (keyboard sounds) and I'm going to assert that add should equal two instead of three. (keyboard sounds) Which would be the case if it's actually applying the discount rule. So let's build and run that. And we see the new test case, or new test, is failing. Okay so now I'm in the green phase, and I need to make this test pass. Looking at the production code that I have so far, there are a couple of problems. One, I'm not actually maintaining the discount rules when the add discount function is called. So I'll need to add a data structure for that. Then there's an issue with how I'm calculating the total. Right now I have a running total which is updated whenever an item is added. But I can't know what discounts to apply,
>
> **[5:16](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=316)** until all the items have been added. This is a design issue with the production code as I have it now. I have an add item method which is calculating the total, rather than the calculate total method. This is known as misplaced responsibility. I need to move the calculation of the total down to the calculate total method. First, I'm going to add a data structure for the discount rules. To do that, I'm going to create a structure in my class with the count and discounted price, and now I have a map of those structures keyed by the item string. So let me do that now. Okay. So down here in my protected section, I'm going to add a new structure called discount, and inside it's going to have the number of items and the discount price.
>
> **[6:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=378)** Okay. And then I'm gonna add a map of these discount types, (keyboard sounds) keyed by the item name. (keyboard sounds) Okay. So that compiles why my unit test is still failing. I need to update the add discount method to use my new discount stated structure. So I will create a discount, then I will set the parameters, (keyboard sounds)
>
> **[7:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=444)** and then I'll add this new discount object into my map of discounts. (keyboard sounds) Okay. Let's see if that still compiles. And it does. Okay. So now I'm storing the discounts in a data structure that I can use when calculating the total. The next step, is I need to modify the production code to be able to calculate the total after all the items have been added. To do that, I need to keep track of how many of each type of item has been added. I'll implement that by adding a map of integers, keyed to get in by the item string. The integer will be the count of each item that has been added. So let me do that now. So I'll add another map, (keyboard sounds) keyed by the item, with an integer listing the number of those items that have been added. Then I can go back over here, update my add item method, to remove the total calculation, and instead increment the number of items that I have added of that type using my items structure. We verify that still compiles. Great. So lastly, I'll update the calculate total method, to calculate the total based on
>
> **[8:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=536)** the number of items added, and the discount rules. First, I'll initialize the total member variable to zero. Total equals zero. Next I'm going to iterate over all of the item types in my items map. For standard map standard string int iterator item iterator equals items dot begin.
>
> **[9:39](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=579)** That's actually item iter does not equal items dot end item iter plus plus.
>
> **[9:56](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=596)** Let's move this down. Per brackets. Let's go ahead and get the types out of the iterator. Standard string item equals item iter first and integer item count equals item iter second.
>
> **[10:24](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=624)** Now I'm going to search in the discounts map to see if there's a discount for this item type. First, I'm going to declare an iterator for the discounts map. So standard map standard string discount iterator discount iter. Now I'm going to search the map to see if it has any discount for this item, and I'm going to add an if statement for calculating the total when there is a discount. So first I'll do the search. Discount iter equals discounts dot find item,
>
> **[11:10](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=670)** and if discount iter does not equal discounts end.
>
> **[11:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=682)** If there is a discount, I will declare a local variable to use rather than the iterator. So discount discount equals discount iter second.
>
> **[11:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=698)** Next I'm going to write a new statement to check and see if the number of items added to the checkout are equal to or greater than the number of items needed for the discount. If item count is greater than or equal to discount dot number of items.
>
> **[12:05](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=725)** If the number of items is greater than or equal to the discount number of items, then the discount needs to be applied. I do this by first calculating the number of discounts that should apply. This is the number of items added to the checkout, divided by the number of items specified in the discount. So number of int, number of discounts equals item count divided by discount dot number of items. Once I have that number, I simply multiply it by the discount price, to calculate what needs to be added to the total.
>
> **[12:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=775)** Number of discounts times discount dot discount price.
>
> **[13:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=788)** Next I need to calculate how many of the items cannot be applied to a discount. I can get this value by using the modulus operator. I use the number of items added to the checkout, modulus the discount number of items. This gives me a remainder value, which is the number of items that cannot be applied to a discount. This number is multiplied by the normal item price and added to the total. So int remaining items equals item count mod
>
> **[13:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=822)** discount dot number of items. Total plus equals remaining items times prices item.
>
> **[14:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=843)** Next I need to implement the case for having less items than are required for a discount. In this case, I just multiply the number of items by the regular item price and add that to the total. So that is the else case for this is if, and I just take the number of items and multiply it by the item price and add that to the total. The total plus equals item count times prices item.
>
> **[14:42](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=882)** The same thing applies if there is no discount for this item type. I'll go ahead and add that to this else statement as well. Total plus equals item count times prices item.
>
> **[15:07](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=907)** So lastly I just need to return the new total. Now that should build and all my unit tests should pass. Excellent. So now I can mark off both of these test cases. That was quite a bit of code. So let's go on to the refactor phase. Boy, there's a lot to refactor here. First, I'm going to extract everything inside the top level four loop to be in a separate function that will calculate the total for a particular item. So let's go and add that now.
>
> **[15:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=949)** Void calculate item. (keyboard sounds) Let's put that in CPP file. Void checkout calculate item standard string item.
>
> **[16:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=980)** And now, I'm gonna go ahead and pass in the item count now, as I've already done that search and I don't want to have to do the search again. Integer item count. Here, integer item count. Okay. Now I can take all of this code
>
> **[16:55](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1015)** and put it in this function.
>
> **[17:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1029)** Okay.
>
> **[17:22](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1042)** Calculate item item item count. Now we're all green. Okay. So this top level function looks okay now. Is there anymore refactoring we can do? I think we can do some more in this calculate item function. Next, let's extract a function to calculate the total price for an item when there is a discount. This function should be passed in the item, the item count, and the discount. So let's put that here. Void calculate discount standard string item int item count discount discount.
>
> **[18:20](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1100)** Copy that function declaration over to our CPP file. Void checkout.
>
> **[18:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1118)** Okay. Now I'm going to copy, or move, all of this code down into the new calculate discount function.
>
> **[19:04](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1144)** And call that from here. Item item count discount.
>
> **[19:18](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/add-and-apply-discounts?u=76281980&t=1158)** So everything builds, and all of our unit tests are still passing. Anything else to refactor? This looks a lot better, so I think we'll say this is good for now. In the next lecture, I'll implement the last test case for throwing an exception when an item is added which has no price specified.

> [!info]- Semantic Content
>
> **Non-Speech:** (keyboard sounds) (8)
> **Definitions:** is a  (5), is called (1), known as (1)
> **CLI Commands:** make (4), find (1)
> **Env Vars:** cpp (3)
> **Cross-References:** go back to (2), in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Throw an exception when adding an item with no price](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=0)** - [Instructor] In this lecture, I'll implement the last test case. Throwing an exception if an item is added to the checkout which does not have a price defined. I'm in the red phase, so I'm going to start by writing a failing unit test. I'll use the [Google](../../Glossary/Service/Google.md) Test, cert throw macro which is past the function to call, and an expected exception that will be thrown by that function. I'm gonna do that now. Test fixture checkout test item with no price throws exception assert throw checkout.add item A standard invalid argument Okay. Okay. So now that I've got my failing unit test, I'm going to go to the green phase, and I'm gonna make it pass. I'll make this pass by modifying the add item method to check if the passed in item has a price specified. If it doesn't, then I'll throw the exception. So I go to my checkout CPP. And I wanna modify the add item method. So first, I'm going to search my list of prices to see if I have a price for this specified item.
>
> **[1:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/throw-an-exception-when-adding-an-item-with-no-price?u=76281980&t=92)** Standard mop standard string int iterator item price iter equals prices find item and if the price iterator equals the end of the prices map, then no price was found and I want to throw standard invalid argument invalid item no price. Otherwise, I just keep the same code. Items. Item plus plus. Okay. The unit test has passed. Now it's time for the refactor phase. Is there anything to refactor? I didn't add much, so I think this is still okay. Although there is still some cleanup that could be done to make these methods smaller and clearer. This ends the hands-on TDD session with the Checkout Kata. In the next lecture, I'll start going over keeping the code you're testing isolated from the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the system using fakes, stubs, spies, and locks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** cpp (1), tdd (1)
> **UI Navigation:** go to (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 5. Test Doubles

[↑ Back to Table of Contents](#table-of-contents)

#### [Test doubles overview](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=0)** - [Instructor] In this lecture, I'm going to go over how you can make sure you're running your unit tests in isolation, using the concepts of dummies, fakes, stubs, spies, and mocks. So what are test doubles? Almost all code that gets implemented will depend on another piece of code in the system. Those other pieces of code are oftentimes trying to do things or communicate with things that are not available in a [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) environment or are so slow that they would make our unit tests extremely slow. Test doubles are the answer to that problem. They're objects created in the tests to replace the real production system collaborators. There are many types of test doubles. Dummy objects are the simplest. They are simply placeholders that are intended to be passed around but not actually called or used in any real way. They will often generate exceptions if they are called. Fake objects have a different and usually simplified implementation from the production collaborator that makes them usable in the test code but not suitable for production. Stubs provide implementations that do expect to be called but respond with basic canned responses. Spies provide implementations that record the values that are passed into them. The tests then can use those recorded values for validating the code on our test. Mock objects are the most sophisticated of all the test doubles. They have pre-programmed expectations about the ordering of calls, the number of times functions will be called, and the values that will be passed in.
>
> **[1:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=94)** Mock objects will generate their own exceptions when these pre-programmed expectations are not met. In this slide, I have a simple example of a dummy object. Its implementation throws an exception if it's called, as it never expects to be used. This is a simple example of a stub test double. It returns a canned response when its one method is called. This is an example of a fake object. It provides a working implementation, but the implementation is likely only suitable for the test environment and not for production. In this case, it's an in-memory database. This is an example of a spy test double. It records the value of the parameter that was passed into it in a public member variable. That recorded value can then be validated by the unit test. This is a simple example of a mock object. This mock object has a built-in expectation that a value of one will be passed in for the parameter to the function and will throw an exception if that is not the case. Mock frameworks are libraries that provide easy-to-use APIs for automatically creating any of these types of test doubles at runtime. They provide easy APIs for specifying the mocking expectations in your unit tests. They can be much more efficient than implementing your own custom mock objects, as creating your own custom mock objects can be time-consuming, tedious, and error-prone.
>
> **[3:09](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-doubles-overview?u=76281980&t=189)** [Google](../../Glossary/Service/Google.md) Mock is a C++ Mocking Framework from Google. It comes bundled with Google Test and works well in the Google Test Framework. That being said, it can also be used with any other C++ Unit Testing Framework. In the next lecture, I'll walk through a simple example using Google Mock.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (5), [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (2)
> **Definitions:** is a  (3), is an  (2), is called (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Google Mock overview](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=1)** In this lecture I'm going to give a short overview of how [Google](../../Glossary/Service/Google.md) Mock works. A Google Mock Workflow is pretty straightforward. You create a Mock class that derives from the class that the mock is replacing. In this new class, you call the MOCK_METHOD macro to specify what methods in the class are being mocked. Then you create an instance of a mock in your test. And then specify the expectations of the calls to the mock object for the test. Google Mock expectations specify how functions in the mock object are called. The expectations are defined in your unit test using the EXPECT_CALL macro. The EXPECT_CALL macro is passed in the mock object that the expectation applies to along with the function. In the example, a my mock object is being passed into the EXPECT_CALL, along with the getData function. This expectation specifies that the getData method of the my mock object is expected to be called once. For functions that have parameters, Google Mock needs to know what values are expected for those parameters. This is done with Matchers. Matchers allow you to specify for the passed in parameters if they can be any value, equal to a specific value, or some other typical mathematical relationship, such as greater than or less than. In the example, the set data function has an expectation set for a single function call with a matcher of an underscore. The underscore means that any passed in value is acceptable.
>
> **[1:38](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=98)** In this slide, I'll go over some more examples on how to use Matchers. This first example shows how to simply specify an exact value for a parameter. The example specifies that the value of 100 is expected to be passed in to set data. In the second example, the Ge clause is added which specifies that the parameter passed in to setData must be greater than or equal to 100. In this third example, an object is getting passed in to the setData function and the NotNull matcher is being used to verify that the object is not null. As part of the unit test, you may need to tell Google Mock how many times a function should be called. You can tell Google Mock this using the "Times" clause which comes after the EXPECT_CALL macro. You can use an exact value or specify a minimum number of times with the "AtLeast" clause or a maximum number of times with the "AtMost" clause. In this example, Times is specifying that the getData function should be called exactly two times. If Times is not specified and there are no other clauses after EXPECT_CALL, then Google Mock will expect the function to be called once. Actions tell Google Mock what the mocked out function should do when it is called, such as return a value, or throw an exception, or even call another function. The Actions are specified after the Times clause. The function WillOnce specifies that for one call to the mocked function,
>
> **[3:11](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-overview?u=76281980&t=191)** a particular action should occur. The function WillRepeatedly specifies that for any number of calls to the mock object and method, this is the expected action. In this example, the example shows my mock object having an expectation set up for the getData function, that it will be called once and return the value of one. If there is no Times clause but there are one or more WillOnce or WillRepeatedly clauses, then the number of times that a mock function can be called will be inferred by Google Mock. In this slide, I'll go over a few more Action examples. In the first example, the WillRepeatedly clause is used. This example says that the getData method can be called any number of times and will always return one. In the next example, WillOnce is used three times with three different values. The specified expectation is that the function getData will be called three times. The first time it should return one, the second time it should return two, and the third time it should return three. In the last example, the Times clause is being used with the WillRepeatedly clause. Because of the Times clause, the expectation is that the getData function will be called exactly four times. Because of the WillRepeatedly clause, the action for each call is that getData will return one. Now, I'll go over a simple working example in eclipse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (9)
> **Code Identifiers:** getdata (8), setdata (2)
> **Env Vars:** expect_call (5), mock_method (1)
> **Cross-References:** in the next (1), in the last (1)
> **Definitions:** means that (1), is called (1)
> **Analogies:** such as (2)
> **Prerequisites:** set up (1)

#### [Google Mock example](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=0)** - [Instructor] Now I'm going to go over a very simple working example. In this example, I'm going to use TDD with [Google](../../Glossary/Service/Google.md) Test and Google Mock to implement a class that holds data. First I'm going to create an interface class for a queue that can enqueue and dequeue data. Then I'm going to create a mock class for that interface. With all of that in place, I'll use TDD to implement a DataHolder class that will be passed in an instance of the queue interface, and its constructor, and will implement the getData and addData methods that will use the queue's enqueue and dequeue methods. I've created a new C++ project for this kata, and verified that it builds and executes. My next step it to get it configured to use Google Test and Google Mock. To do that, I need to add their include path, libraries, and library paths for Google Test and Google Mock to the project. Okay, so I'll right-click on my GMockTest project, which is the project I created for this kata, and then under C/C++ General, Paths and Symbols, on the Includes tab, and the GNU C++ language, we're going to add the file system path for the Google Test include files. Googletest, include. And the Google Mock include files.
>
> **[1:29](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=89)** Then in the Libraries tab, I'm gonna add the Google Mock, and Google Test Libraries. Now that I'm using Google Mock, Google Mock has its own version of the main method which will initialize both Google Mock, and Google Test in the Google Mock library itself, and in the gtest library. Then I need to add the pass for both those libraries.
>
> **[2:19](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=139)** And now I will go ahead and update my source code to validate that Google Mock and Google Test are linked in properly, and I can do a simple assert test. gtest, gtest.h, gmock, gmock.h. And I'm gonna change my main to be a simple assert test.
>
> **[2:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=172)** CanAssertTrue. ASSERT_TRUE, true. And I'll validate that compiles, and it does. And I already have a Google Test test runner set up for this project. Now I have my green bar. Okay, so now I'll go ahead and add the queue interface class with the enqueue and dequeue pure virtual functions, and a virtual destructor. As you should always add virtual destructors to all your base classes. Class QueueInterface. Public, virtual void enqueue. I'll just have it take an integer of zero. Virtual void, actually it's gonna return an integer dequeue, no parameters, equals zero, see's our pure virtual functions. This is an abstract interface. Okay, so now I'll implement the mock class for this queue interface. The mock class will derive from queue interface, and then it will declare mock methods for enqueue, and dequeue using the mock method macro. Okay, class MockQueue,
>
> **[4:27](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=267)** derive from QueueInterface.
>
> **[4:44](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=284)** MOCK_METHOD, dequeue, integer. And mock method, actually that's MOCK_METHOD0. And this is MOCK_METHOD1. Enqueue, void integer data, okay.
>
> **[5:17](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=317)** And I need to add my virtual destructor.
>
> **[5:26](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=326)** QueueInterface, okay. So now I'm ready to start my TDD loop to implement the DataHolder class. Let's list out the test cases. First I wanna be able to instantiate an instance of the new DataHolder class. Then I wanna validate that I can add data using its add data interface. Then I wanna validate that I can add data, and get that same data back out using the add and get data interfaces. I'll stop there as this is just a simple exercise. Okay, I'm gonna start my TDD loop and enter the red phase for my first test case. First thing I wanna do is create an instance of the DataHolder class, so I'm gonna write a failing unit test that drives me to do that. I want the constructor to be passed an instance of the queue interface, so I'll go ahead and create an instance of my mock queue and pass that in. So I'm going to get rid of my CanAssertTrue test, and reuse it for the CanInstantiateDataHolder test case.
>
> **[6:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=394)** And inside I need to create an instance of my mock class.
>
> **[6:45](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=405)** And then create an instance of the NewDataHolder class. Passing it my mock object. So the IDE is telling me that I've got a compile error. The DataHolder class does not exist yet. So I've got a failing unit test, so I'm done with the red phase. So now that I've got a failing unit test, I can go ahead and enter the green phase, and make it pass. I'll do that by creating the initial implementation of the DataHolder class. Class DataHolder, which is going to have a protected member variable for the queue. QueueInterface, pointer, queue. And then I'll have a public constructor where it's passed the queue instance. Which we will set in the initializer list.
>
> **[8:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=482)** And now the IDE is telling me that my compile error is gone, so I should be able to build this, and see it execute. And it compiles and executes successfully. Now that the unit test is passing, I can enter the refactor phase. There's nothing to refactor here, so I'm gonna go ahead and move on to the next test case. For the next test case, I wanna verify I can successfully call the setData method. I'm in the red phase, so I'm going to implement a failing unit test. I'll use my mock object to verify that the enqueue method is called with the correct value passed in. We're gonna create a new test, TEST(GMockTests, CanAddData).
>
> **[8:48](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=528)** Mock Queue myMockObj, and DataHolder dh addressed at myMockObj.
>
> **[9:02](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=542)** Now I want to create an expectation on my mock object, that will verify the enqueue method is called, and passed in the correct parameter. So I'm going to use EXPECT_CALL, passing in my mock object, and the enqueue method. And using the underscore, which is the accept any value wildcard. The compiler, the IDE is telling me I have a compile error here. It's because I haven't pulled in the name space for this underscore character. So I'll go ahead and do that now. Using testing, underscore. Okay, that cleared that up. And now I can make the addData call, addData(1). Okay, so again my IDE is telling me that I have a compile error, which means I have now successfully completed creating my failing unit test. And I can go ahead and move on to the green phase. In this phase, I need to make the test pass by updating the DataHolder class to provide the addData method. I'll provide just enough implementation to ensure that I can call addData, and that it calls the queue's enqueue function. Let me do that now, we need to add a public method, void addData, integer data. And inside here, I'm going to call the queue's,
>
> **[10:41](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=641)** the queue's enqueue function. Passing it that data. And I no longer have a compile error, so I should be able to compile, and see my test run successfully, and it does. Okay, so now, let's refactor. I'm instantiating the DataHolder class in my new test, so I can remove the first unit test where I was just validating that it could be instantiated. I'll go ahead and do that, and validate that my test still runs. Then I'll mark off that test case. Okay, so back to the red phase. In this next test case, I'm going to both add data, and get data. I'm in the red phase, so I'll first implement the failing unit test. TEST(GMockTests, CanAddAndGetData).
>
> **[11:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=712)** MockQueue myMockObj. DataHolder dh, which takes the pointer to my mock object.
>
> **[12:08](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=728)** Now I wanna set up the expectation that the enqueue method is going to be called, with the value of one. And that the dequeue method is called, and I want the dequeue method to return one, when it's called. So I'll use the EXPECT_CALL, passing in myMockObj.
>
> **[12:32](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=752)** And the enqueue method, and this time I want it to be the one passed in. And then I wanna EXPECT_CALL, myMockObj, and the dequeue method. And it will be called once, and it should return one.
>
> **[13:03](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=783)** So I've got some compile errors here, this is because I haven't specified the name space for the return function, so I'll go head and do that now. Using testing Return. I cleared that up. So now that I have my objects instantiated, and my expectations created, I can go ahead and make my calls to the DataHolder object, and validate that I get the expected result. So dh.addData(1). Integer data = dh.getData.
>
> **[13:52](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=832)** Then I want to assert that the data that came back is one.
>
> **[14:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=841)** I've completed implementing my unit test and I've got a compile error. Now that my test is failing, onto the green phase and make it pass by implementing the getData method, and having it call the queue's dequeue method. I'll use my mock objects dequeue method to verify that it gets called, and have it return the expected value. So let's do that now. Void, int getData. Queue->dequeue, return queue->dequeue.
>
> **[14:49](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/google-mock-example?u=76281980&t=889)** So that cleared the compile error, so now I should be able to build and run my unit test and see that it passes, and it does. Now I'm ready to refactor. At this point, I could refactor this to have a test fixture that instantiates both my mock queue, and the instance of the DataHolder class, as they are both needed for each test. But I'll leave that to you as part of the exercises for this lecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (18)
> **Env Vars:** tdd (4), ide (4), expect_call (3), test (2), gnu (1)
> **Code Identifiers:** adddata (7), mymockobj (5), getdata (4), setdata (1)
> **CLI Commands:** make (5)
> **Definitions:** is called (3), is an  (1)
> **File Paths:** gtest.h (1), gmock.h (1)
> **Prerequisites:** set up (2)
> **UI Navigation:** right-click (1)


### 6. Test-Drive Development Best Practices

[↑ Back to Table of Contents](#table-of-contents)

#### [Test-driven development best practices](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=1)** - [Instructor] There are a lot of things you can do to help with your practice of [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) and [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md). In this lecture, I'll go over some of the best practices that I have found are essential to making test-driven development productive. You should always do the next simplest test case. This allows you to gradually increase the complexity of the code, refactoring as you go. This helps keep your code clean and understandable. If you jump to the complex cases too quickly, you can find yourself stuck writing a lot of code for one test case which breaks the short feedback cycle we look for with TDD. Beyond just slowing you down, this can also lead to bad design as you can miss some simple implementations that come from the incremental approach. Always use descriptive test names. Code is read thousands of times more than it's written as the years go by. Making the code clear and understandable should be the top priority. Unit tests are the best documentation for the developers that come after you for how you intended your code to work. If they can't understand what the unit test is testing, that documentation value is lost. Test suites should name the class or function that is under test and the test names should describe the functionality that is being tested. Keep your unit tests building and running fast. One of the biggest benefits of TDD is the fast feedback on how your changes have affected things. You lose this if the build and/or execution of your unit test is taking a long time, i.e., more than a few seconds.
>
> **[1:34](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/test-driven-development-best-practices?u=76281980&t=94)** To help your test stay fast, try to keep the console output to a minimum or eliminated altogether. This output just slows down the test and clutters up the test results. And also try to mock out any slow collaborators that are being used with test doubles that are fast. Use code coverage analysis tools. Once you've implemented all your test cases, go back and run your unit test through a code coverage tool. It can be surprising. Some of the areas of your code you'll miss, especially negative test cases. You should have a goal of 100% code coverage on functions with real logic. Don't waste your time on one-line getter and setter functions. Lastly, make sure your unit tests run multiple times and in a random order. Running your tests many times will help ensure that you don't have any flaky tests that are failing intermittently. Running your tests in random order ensures that your tests don't have dependencies between each other. You can use the gtest_repeat and gtest_shuffle command line parameters with your [Google](../../Glossary/Service/Google.md) test-based unit test executables to do this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (2), [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **CLI Commands:** find (1), make (1)
> **Code Identifiers:** gtest_repeat (1), gtest_shuffle (1)
> **Env Vars:** tdd (2)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus/next-steps?u=76281980&t=1)** - [Instructor] In this lecture, I'm going to quickly review what we went over in the course and where to go from here. Going through the course, we went over what [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) and [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) are and had a quick hands-on example, and we had an overview of [Google](../../Glossary/Service/Google.md) Test, the C++ Unit Testing Framework from Google, then we had another more complex hands on example of TDD in the supermarket checkout Kata, then we reviewed the types of Test Doubles and how they help us test our code in isolation and we worked through an example using Googlemock, and lastly we went over some essential best practices of Unit Testing and Test-Driven Development. So that completes this course on Beginning Test-Driven Development in C++. I hope you've enjoyed this course and found it a valuable source of information and training on Unit Testing and Test-Driven Development in C++. If you have any questions or concerns about this course, please feel free to contact me and I'll try to respond quickly with any updates to the course as necessary. Thank you very much for your time and your interest in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (4), [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (3), [Google](../../Glossary/Service/Google.md) (2)
> **Env Vars:** tdd (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Richard Wells](../../Instructors/DevOps/Richard%20Wells.md)

## Resources

- Exercise files available

## Skills Covered

- Test-Driven Development
- C++

## Path Context

### In [Master C++](../../Paths/DevOps/Learning%20Paths/Master%20C%2B%2B.md)
← [Complete Guide to Parallel and Concurrent Programming with C++](Complete%20Guide%20to%20Parallel%20and%20Concurrent%20Programming%20with%20C%2B%2B.md) | **3 of 6** | [C++ Design Patterns- Behavioral](C%2B%2B%20Design%20Patterns-%20Behavioral.md) →

## Appears In

- [Master C++](../../Paths/DevOps/Learning%20Paths/Master%20C%2B%2B.md)

## Related Courses

_Courses sharing skills:_

- [JavaScript- Test-Driven Development (ES6)](../Software%20Development/JavaScript-%20Test-Driven%20Development%20(ES6).md) — Test-Driven Development
- [Nail Your C++ Interview](../Software%20Development/Nail%20Your%20C%2B%2B%20Interview.md) — C++
- [Web Servers and APIs using C++](../Software%20Development/Web%20Servers%20and%20APIs%20using%20C%2B%2B.md) — C++
- [Learning C++](../Software%20Development/Learning%20C%2B%2B.md) — C++
- [Introducing Functional Programming in C++](../Software%20Development/Introducing%20Functional%20Programming%20in%20C%2B%2B.md) — C++

---

[↑ Back to top](#)