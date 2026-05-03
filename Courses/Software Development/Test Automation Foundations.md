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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/build-a-foundation-of-test-automation-26042946?u=76281980&t=0)** - Automated testing provides confidence that the application under test is working as expected. I'll cover the steps involved to gain a strong [[Test Automation]] foundation. I'll explain models to help determine the types of automated tests to use on a project. I'll share tips on getting started with test automation, choosing test tools, and deciding what to automate. And I'll close with strategies to maintain test automation over time. I'm Meaghan Lewis, and I'm a quality engineer and blogger who's passionate about testing and skilled in automation. Let's start on a quest to discover how to succeed with test automation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test Automation]] (4)
> **Prerequisites:** getting started (1)
> **Speakers:** - automated (1)

#### [What you should know](https://www.linkedin.com/learning/test-automation-foundations/what-you-should-know-14475739?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/what-you-should-know-14475739?u=76281980&t=0)** - Throughout this course, I will describe different types of automated tests and how to implement them. No prior knowledge is required, but it would be helpful to have a basic understanding of [[Test Automation]]. I will write some test code and demonstrate how to use popular testing tools. For code examples throughout this course, I'll be using [[Node.js]], although no prior knowledge of Node.js is required. I'll also include a test application that I will reference throughout the course. Feel free to download and set up this application if you'd like to follow along. You can also use it to write your own test.

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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/value-of-automation-14475740?u=76281980&t=0)** - Every product team strives to deliver flawless software. Despite this effort, software will inevitably have defects. [[Manual Testing]] can provide great value by helping to expose defects. However, it's very time-consuming to manually test the same scenarios over and over again. Automated testing follows the same steps as manual testing, but it's much quicker. While there is an initial time investment to write the scripts. once the scripts are complete, they can be run repeatedly without much additional cost. There will be maintenance that is required, but it saves time in the long run. This makes automation have a great return on investment. In addition, the exact same steps are executed every time, which reduces any possibility of human error. Automated tests can also be run across multiple platforms, operating systems and devices, creating thousands of combinations. This is great at simulating different setups and use cases. Bugs and regressions can be found quickly, giving developers confidence that updates to the code base didn't break anything. At the end of the day, teams with automated tests will create better quality software [[Microsoft Products|products]]. These products can then be released smoothly and quickly, having used less resources.

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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=0)** - [Instructor] There are so many different types of automated test: unit, integration, component, functional, UI, and the list just goes on and on. Deciding which test to include for a project can be a difficult task. Luckily, there are some models that are extremely valuable when determining which type of test to automate. One model that I recommend using is the [[Agile Development|agile]] testing quadrants. The agile testing quadrants are used to classify tests. The quadrants have been helpful over the years for teams as they plan the types of tests they want to implement. It also helps teams identify the resources necessary to accomplish that task. This model was developed by an agile testing consultant, Brian Marick, back in 2003. There are four distinct quadrants separated by the X and Y axes. On the bottom, there are technology-facing test and on the top, there are business-facing test. On the left-hand side, there are tests that guide development and on the right, there are tests that critique the product. These quadrants defined four areas to better classify different types of test. Now, let's talk about what each quadrant means. I'll start with quadrant one in the lower left-hand side of the matrix. This quadrant describes technology-facing test that guide development. These type of tests are always automated,
>
> **[1:34](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=94)** and they ensure the functionality is working as expected, and that the code has a quality foundation to build upon. Examples of tests that fall into this category are unit test integration test, and component test, all of which confirm the code is working as intended. This is a very important quadrant and the most number of tests should be written in this area. Tests in quadrant one are written alongside development and help to confirm the functionality of the feature as its being built. Moving up to quadrant two in the top left-hand side describes business-facing test that guide development. These tests can either be automated or manual. They help answer questions and discover information about the application. The results of these tests help validate the features of an application. Examples of automated tests that fit into this category are functional and UI test. Manual tests in Q2 use models like prototypes or mockups and can include more high-fidelity prototypes, such as complete webpages. Tests in quadrant two are likely performed during and after development. The automated tests here should be included in the definition of done for a story to know when feature is complete. These tests will also help to uncover bugs and issues in the application before releasing the software to the public.
>
> **[3:08](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=188)** Moving over to quadrant three in the top right-hand side includes business-facing test that critique the product. This quadrant includes mainly manual test, but can benefit from automation as well. The tests here provide feedback about the current state of an application and whether or not things are working as expected. They are user-oriented and help to understand the user's experience by how they interact with the application. Quadrant three involves critical thinking and an in-depth observation of the application's workflows. Examples of tests in this quadrant include: exploratory testing, [[Usability Testing]], and A/B testing. Tests in quadrant three can be performed either before or after development is complete. The purpose is to provide information about what can be improved in workflows in the application. And finally, quadrant four on the bottom right-hand side has tests which are technology-facing that also critique the product. These tests are all automated and are built with the help of specific tools. Their purpose is to provide targeted information about the application. Examples of tests that fall into quadrant four are performance test, load test, security test, reliability test, and so much more. Likely, all of the tests that end with -ility
>
> **[4:42](https://www.linkedin.com/learning/test-automation-foundations/agile-testing-quadrants?u=76281980&t=282)** falls into this category. Quadrant four tests are performed based on priorities of what is most important in the application. For example, if fast page load time is important, then it is probably a good idea to implement performance testing. These tests measure data, which can then be analyzed, quantified, and visualized in some way. There are no hard rules about what type of tests must go into what quadrant and what tests are necessary to a software project. It is really all circumstantial. In addition, the quadrant numbering system does not imply any kind of order. There can be a focus on implementing quadrant two tests first and then quadrant one or vice versa. It also doesn't require that there must be test implemented in each and every quadrant. The goal is to understand that there are many different types of test that are either automated and manual and to identify what are the most important types of tests to implement. Use the test quadrants to guide your team when discussing which tests should be implemented for a particular [[Software Development]] project. Continue to think through the quadrants as your team does planning, development, and releases, so that your whole team understands the importance of testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (3), [[Usability Testing]] (1), [[Software Development]] (1)
> **Analogies:** such as (1), for example (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The test pyramid](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=0)** - [Instructor] Another model I always refer back to when planning [[Test Automation]] is the test pyramid. The test pyramid explains an ideal way to structure tests. It is a visual representation of the recommended amount of test coverage that should exist across each type of test. This concept was introduced by Mike Cohn and 2009 in the book "Succeeding with [[Agile Development|Agile]]." The original test pyramid consists of three levels. There are unit tests at the base of the pyramid, integration test in the middle and UI test at the top. These are the test types that are the usual suspects on [[Software Projects]]. At a minimum, I recommend that projects have at least these three types of automated tests, but can have additional types of tests as well. The test at the base of the pyramid will be the fastest running test. As you move up the pyramid, the test becomes slower. Similarly, the test at the base are the most isolated in what they test. And moving up the pyramid, the tests become more involved and more integrated with different services. Unit tests are always at the base of the pyramid. They test a single function by calling that function and passing in various values. Unit test confirmed that the right results are returned for each function. Unit tests are the fastest tests and run in a matter of milliseconds. There should be the greatest number of these tests.
>
> **[1:35](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=95)** And data for a unit test is typically mocked or stubbed, which are ways to create objects with certain values. Jumping up to the middle of the pyramid are the integration or service level tests. They test multiple services in conjunction to ensure that all parts work seamlessly together. They typically involve testing integrations between the database, file systems and other applications. [[API Testing]] is also very popular here. Integration tests take a bit longer than unit tests, typically taking anywhere between 10 or 100 milliseconds to run, and they create their own data. There should be a good amount of these tests to cover each service. User interface, or UI tests, are at the top of the pyramid. They are extremely valuable because they test end-to-end workflows and simulate user actions like clicking and typing. These tests run through the browser, and therefore can take many seconds, and sometimes up to a minute to run, depending on the workflow. There should be just a handful of these tests that cover each primary user workflow. The pyramid is intended to be a model of what a healthy, fast and maintainable test suite looks like. It encourages a team to be wise about a strategy of what to automate at each level. Be cognizant of the amount of tests that are written,
>
> **[3:09](https://www.linkedin.com/learning/test-automation-foundations/the-test-pyramid-14470759?u=76281980&t=189)** or else there can be negative effects. For example, sometimes teams run all unit tests on a project and don't care about any other type of test. The shape of testing here ends up looking like a big square. While the tests execute quickly, there are likely going to be some testing holes where bugs can slip through. Or maybe a project has a large number of UI tests, testing every single part of the user interface. There are a minimal number of integration and unit tests. Perhaps everything looks okay in an application, but at a lower level, it's not functioning as it should. The shape here can end up being an inverse pyramid. In this case, the tests likely have a slow execution time and are pain to maintain. There are many more shapes that can manifest based on the amount and level of tests implemented. And sometimes that's okay. Just be sure to consider the pros and cons of the shape and what it implicates. Besides different amounts of tests, the test pyramid can also include many other types of tests as well. I encourage you and your development team to think about what the test pyramid for your project will look like. Remember that the shape of your tests might not resemble the pyramid exactly, and might have more than three levels.

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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=0)** - [Instructor] I'm going to show examples of the most common types of automated test. But first, I'll take a minute to walk you through a simple test application. The application is called AI animal art. This is a fictional online store that sells AI-generated images using [[Microsoft Copilot]]. I see art for sale, and I can choose to add items to the cart by selecting the Add to Cart button. On the cart page, I can view all the items in the cart, including the item name, quantity, and price. I can change the quantity anywhere from 0 to 10, and changing the quantity updates the item price, as well as the total price shown down below. I see a link to go back to shop and a button to checkout. Selecting the Checkout button takes me to a simple page where I see the total price for the order, and a message saying that my order will be ready for digital download soon. Next, I want to take a deeper dive into unit tests. Unit tests are critical to the success of an application. They really help to make sure that the functionality of the application works as it should. They should be lightning-fast, simple, and test only one thing. I've talked about the value of unit tests enough from now, so let's focus on practical examples of what unit tests actually look like. Back in my browser, I navigate to the [[GitHub]] repository for this course. And for this course. I'll be working out of [[Codespaces]].
>
> **[1:36](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=96)** Codespaces is a [[Cloud Development]] environment that is linked to a GitHub repository. From the repository, I select Code, and in the Codespaces tab, I want to select a Codespaces instance to open. For me, I'm going to be working out of refactored fiesta, which is currently active. I encourage you, if you want to follow along, to create your own Codespace in this project. You can do that by selecting the plus sign here to create a Codespace on main. I'll go ahead and select refactored fiesta to open my Codespace instance. This will take a moment. I'll wait for the Codespace to finish setting up before continuing. Now, let me explain a little bit about this test application. This is a [[Node.js]] application, and the app uses Express, a minimal and flexible web framework for Node.js. I'll focus on the routes.js file first. This file defines the routes for the application. Here, you'll find a series of routes used in the application for things like the homepage, removing items, and adding items to the cart. Feel free to look around the routes.js file to get more familiar with the routes in this application, and understand a little bit about what's happening in each of the routes. Next, I'll highlight the middleware folder.
>
> **[3:13](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=193)** Middleware processes requests and responses in the application. It acts as a bridge between the incoming request, and the final route handler or response. These files handle common functionality the app performs, for example, like calculating the total price. You'll see there are also other middleware for error handlers, getting cart quantities, request logger, and validating input. This app uses a [[SQL]] database. I'll scroll down and locate the database.js file. In database.js, I create the required tables if they don't already exist, and load items into the database. The database has two tables, the items table, to store product details, and the cart table, to store cart items and quantities. Ideally, I want to write unit tests for the routes and for the middleware. For the remainder of this video, I'll focus on the unit test class to test out this calculate total price middleware. Let me navigate to test, unit, and open calculateTotalPrice.test.js. I'll scroll to the top and close the explorer. This test, and all the others that I'll show throughout this course are written in Mocha, which is a popular [[JavaScript]] testing framework. Mocha tests are written in a
>
> **[4:48](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=288)** behavior-driven development, or BDD way. This means that the outline of the test is defined in terms of behavior. The test uses Chai, an assertion library to confirm behavior. Sinon is used to mock or stub dependencies, which basically creates fake objects and data to use for testing. Note that I require the middleware that I'm going to be testing line three. At a high level, this test starts by describing the feature on line six, which is the calculate total price middleware test. On line seven, the first test is defined. The test starts with the [[Microsoft Word|word]] it and then describes what the test is doing. In this case, it should calculate the total price. The test begins by mocking the req object with items and quantities. An empty res object is created, and sinon.spy tracks what the next middleware function is called. In lines 21 to 22, I call the middleware. The middleware then calculates the total price and stores the result and req.totalPrice. Line 25 verifies that the total price is 40, and line 26 confirms that the next function is called, which is necessary to pass control to the next middleware or route handler. The second test on lines 29 to 42
>
> **[6:27](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=387)** sets the total price to zero if req.items is empty. This test confirms that the middleware handles no items as expected. The third test, on lines 44 to 59, sets a total price to zero if there's no quantity for an item. This test confirms that the middleware handles no quantity, as expected. Next, I want to run this test file. To do that, I open up my terminal and type npx mocha test/unit/calculateTotalPrice.test.js
>
> **[7:11](https://www.linkedin.com/learning/test-automation-foundations/unit-tests-26047870?u=76281980&t=431)** and press enter. I see that all three tests passed in six milliseconds. So with that, I was able to successfully test the calculateTotalPrice middleware. That's sufficient coverage for now, but more tests can also be written to test other paths and use a variety of input. Spend more time running the other unit test files, and you can try out writing some unit tests on your own to better familiarize yourself.

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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=0)** - [Instructor] Integration tests help to provide confidence that all parts of an application work seamlessly together. While [[Unit Testing]] focuses on individual small parts, integration tests focus on the whole. They can detect unexpected failures that happen where one part of the application is fixed and another is broken. Not all units are peer and unit testable. Some units can only be tested as part of a bigger process. Integration tests should cover important cross-module processes. I'm going to show you an example of an integration test for the AI animal art application. I have the repository for this course open in [[Codespaces]]. Next, I'll open the Explorer and navigate to the integration test class called routes.test.js under test, integration. Then let me close the Explorer window and explain a little bit more about this test. This is another Mocha test written in a behavior-driven development way to describe the routes for the test application. The integration test uses super test to simulate HTTP request, chai for assertions and sqlite to create an n memory database. An n memory sqlite database is used to isolate test so that no production data is affected.
>
> **[1:36](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=96)** The most important routes are tested and that includes add to cart, cart and checkout. The test starts with the helper function on line 9 to execute [[SQL]] queries within the test. Line 18 describes the test suite name, integration test for routes. The before hook on lines 19 to 38 creates the table's items and cart and adds an item to the cart. The after hook on lines 40 to 44 drops the tables to clean up after the test completes. The first test on lines 46 to 58 adds an item to the cart. The test simulates a post request on line 48 to add an item to the cart with an ID of 1. Then the test verifies the response status, redirect URL, and that the item is added to the cart table. The second test from line 60 to 66 displays the cart page. On line 61, I insert an item with an ID equal to 1 and a quantity equal to 2 into the cart. Then I simulate a get request to the cart route and verify the response status
>
> **[3:12](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=192)** and that the cart page includes that the test item's name. The third test on line 68 to 74 displays the checkout page. On line 69, I insert an item into the cart with an ID equal to 1 and a quantity equal to 2. Then again, I simulate a get request to the checkout route and verify the response status and that the checkout page has a message, "Thanks for your order." This test file provides a solid foundation for verifying the core functionality of the application's routes. More tests can be added to test the remaining routes and the application. To run the test, I'll open up my terminal and I'll type npx mocha test/integration/routes.test.js
>
> **[4:16](https://www.linkedin.com/learning/test-automation-foundations/integration-tests-26050848?u=76281980&t=256)** and press enter. I see the output of the test and that all three tests are passing and it takes 55 milliseconds to run. While this test is still really quick, it's many milliseconds slower than the unit test because it takes time to query the database, simulate sending request, wait for the response and confirm that the response is successful.

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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=0)** - [Instructor] Sometimes, the quick and effective lower level unit and integration tests are not enough. UI tests can help provide a complete picture of test coverage. UI tests are always running inside a browser and simulate user behavior by completing workflows within an application. UI tests are sometimes called end-to-end or functional tests because they test the entire application, from the frontend UI to the backend [[Database Systems]]. In that sense, UI tests are also a form of [[Integration Testing]], ensuring that machines and component collaborations are all working together as expected. It's important to remember that these UI tests are the hardest to set up. They require an environment that has specific browser types and versions. I want to show you an example of a UI test for the AI animal art application. In my browser window, I have the code spaces open for the [[Test Automation]] foundation's repository. I'll open up the explorer and focus my attention on the UI test under test/UI and select end-to-end test. This test file verifies the end-to-end user workflow, from adding an item to the cart to completing the checkout process. It confirms the application works as expected in the browser. This test class uses Mocha along with the help
>
> **[1:33](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=93)** of [[Selenium]] WebDriver, which is a popular option for browser automation. ChromeDriver is used to run the test in the browser,, and Chai is used for assertions, which confirm the behavior. Line six defines the test suite name, which is end-to-end test. A timeout of 30 seconds is set to allow time for Selenium steps to complete. The driver variable is defined on line eight, which drives browser interactions. On lines 10 to 21, the before hook sets up a headless Chrome browser, and the driver navigates to the application's homepage at localhost port 3000. The after hook on lines 23 to 25 closes the browser after all the tests are complete. The test case on lines 27 to 52 adds an item to the cart and completes the checkout workflow. In this UI test, I use the driver to find various web elements using their [[HTML]] selectors with attributes such as ID and class name. Then I can perform an action, like clicking a button. Let me explain what I mean here a bit more. If I want to use Selenium WebDriver to add an item to the cart, I can do that by clicking on the ID element for an item, as shown here on line 28. I'll go to the test application in the browser
>
> **[3:08](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=188)** and show how I find this ID element. Once I'm at the test application, I'll focus my attention on the last item and right click and select inspect to open up the inspector. This highlights a button element with an ID of add-to-cart-10. I want to choose to use this ID in my test on line 28. So I can use that ID here in my test on line 28 and then click that button on line 29. Lines 31 to 34 verify that a success notification is displayed Lines 35 to 36 navigate to the cart page by clicking the cart link. Lines 38 to 39 navigate to the checkout page by clicking an element with an ID of checkout-button. Lines 42 to 47 wait for the checkout page to load for up to five seconds, and then it verifies that the page title is checkout, and lines 49 to 50, find an element with the class name of thank-you-message. It gets the text from that class named thank-you-message, and then confirms the thank you message is displayed on screen. Now, I want to go to the terminal and run the test, so I'll open up the terminal, and what I first need to do is make sure the server is running.
>
> **[4:43](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=283)** If it's not, I can do that by using the script [[npm]] start. Then, I'll open up a new terminal window, and in this window is where I want to run the UI test. So to do that, I can type npx mocha test/UI/end-to-end.test.js
>
> **[5:11](https://www.linkedin.com/learning/test-automation-foundations/ui-tests-26050847?u=76281980&t=311)** and press enter. After just a second, I see that the test passes. The end-to-end test should add an item to the cart and complete the checkout workflow. It takes 624 milliseconds, or about a second is what the reporter tells me down here. That's way more than the 50 milliseconds or so it took the integration test to run and the five milliseconds or so it took the unit test to run. The UI test took so much longer because it created a new headless instance of the Chrome driver to run through the test steps, sending requests along the way, and shutting down the browser and WebDriver once the test completes. There are many more moving parts working together here than the lower levels of testing. If you're unfamiliar with UI tests, then this can seem like uncharted territory. I encourage you to write some more tests using this method by finding HTML elements to drive browser actions.

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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=0)** - When starting a new software delivery project, it's important to get the whole team involved in the planning, execution and maintenance of [[Test Automation]]. And by the whole team, I really mean the whole team, including developers, testers, and business stakeholders like product managers or business analyst. All of these team members can get involved and help ensure the success of test automation in some way. The team can make decisions about how to guide test automation for the software delivery project. They can work together to decide what types of tests to implement, what tools to choose, who will be responsible for each level of testing and how to collaborate with the stakeholders. Start by creating a shared big picture to align expectations across different groups. Do so in a cross-functional setting with representatives of developers, testers, and business stakeholders. Spend time brainstorming the aspects a good automation test suite will have. Every representative should have a chance to share what they think is valuable in a test suite. For example, ask your group of stakeholders what makes a good test suite. It's important for everyone to share their thoughts because something that one person considers critical might not even register on the scale of importance for a different person. It might be surprising to find out that stakeholders have different focuses. Use models like the testing quadrants and test pyramid to guide discussions around the important qualities and determine what types of test will make up the automation suite. Doing these exercises will help ensure
>
> **[1:33](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=93)** that all stakeholders are in agreement about the strategy for automation testing going forward. After implementing the automation test suite, I recommend getting together as a group every few months for a retrospective. This will help you address what's working well with automation testing and what can be better. Once the team has identified what type of test will be included in the project's automation test suite, determine ownership of each type of automation test. Typically, developers own unit tests because they are written alongside development. Developers and testers can own integration tests and testers own UI tests. This is a model I follow in most projects, but one size doesn't fit all. As a team, decide who owns the test for your project. Just because there are specific owners for types of tests doesn't mean that no other teammates will help work on those tests. Quality is a team responsibility. The whole team approach to testing and quality is most critical when it comes to automating tests. Automated tests provide huge amounts of value, but also require a lot of time and commitment. When the whole team is invested in the test automation process, it will lead to the best outcome with a test suite that is robust and well-maintained. There are many ways the whole [[Software Development]] team can get involved in test automation. For example, business stakeholders help developers and testers determine test scenarios for high priority features. Then, testers help developers think of edge cases for unit tests and integration level tests.
>
> **[3:07](https://www.linkedin.com/learning/test-automation-foundations/get-the-whole-team-involved-14474705?u=76281980&t=187)** And developers can help testers write UI test scripts. Finally, testers and developers can then report relevant test results to business stakeholders. Test automation projects will evolve over time. New tests will be added and there will always be room for maintenance and improvement. Work together as a team to think of ways to keep an automation suite lean so that it always provides the most value and confidence in an application.

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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=0)** - Before jumping in to write tests, it's smart to plan out the approach. Get the group of stakeholders together to list the highest priority features. The business stakeholders should be able to provide a list of those features. From there, spend time to brainstorm what type of scenarios will be automated versus manual for each feature. Scenarios that are good candidates for automation are those that test the highest impact features, are tedious to do manually, and provide the same result every time. As your team brainstorms scenarios, also try to identify types of test that can cover each scenario. Considering the inputs, actions, and outputs of the test can help here. As a general rule, you'll want to push automation to the lowest level. Going back to the test pyramid, it's good to have the most number of unit tests, a medium number of integration tests, and a small number of UI tests. So if a scenario will have the same results, using the UI or not, choose to avoid the UI. The goal of automated test suites should be to have a well-tested application and a suite that provides timely feedback. Decide which tests will be a part of the project. It can just be unit, integration, and UI, or additional types as well. It's best to have this scope defined early on in the project, although needs might change later on. After thinking about what to automate, there are some additional resources that will be needed, such as determining how test data
>
> **[1:33](https://www.linkedin.com/learning/test-automation-foundations/make-a-strategy-14474707?u=76281980&t=93)** will be used, created, and managed, what different tooling options are out there to build and run tests, or which test environments need to be available for automated and [[Manual Testing]]. I recommend making a list of these resources and any others that might be needed. Considering what will be automated and what resources will be needed to carry out the automation will all be part of a documented testing strategy. This will provide guidance to current and future teammates about how to approach automation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (1)
> **Best Practices:** general rule (1), it's best to (1)
> **Analogies:** such as (1)
> **Speakers:** - before (1)

#### [Test tools](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=0)** - Once the team of stakeholders has gotten together and made some initial decisions, the real action can start. After deciding how you want your automated tests to look, it's time to find the tools to support that. Otherwise, if you choose test tools before you know how you want to express your tests, you've eliminated many viable options too early. Select the right tools for the type of desired testing. There are discrete frameworks available for different types of tests. It can be tough for a team to come to consensus about selecting an automation framework, but it's best to discuss this problem together and try to find a good solution. One thing to understand is that there is no one right [[Test Automation]] solution that will solve all your team's needs. The goal is to find the tools that seem best suited for the job. I recommend starting with a baseline requirement of what the test tools need to support. There are two baseline requirements that I use. The first is the type of test to be implemented and the second is the language that the test will be written in. An example of this could be a [[JavaScript]] [[Unit Testing]] framework. I also recommend trying to find tools that promote cross-functional collaboration among testers, developers and business team members. Cross-functional collaboration will lead to better, more testable code with fewer defects. Use the baseline criteria to search for related test tools and write them down. From that list of tools your team has gathered, there are many considerations to evaluate any given one.
>
> **[1:37](https://www.linkedin.com/learning/test-automation-foundations/test-tools?u=76281980&t=97)** Focus on trying spikes, which are small experiments using the selected tools. This will allow teammates to learn the tool and the technical details of it to be able to come up with a more informed judgment. List out advantages and disadvantages learned from the spike. Bringing this information and analysis back to the larger team will insight more conversations where the tools can be compared effectively. The stakeholders should then be able to select the best tools for each type of testing.

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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980&t=0)** - Various types of tests are implemented at different points within the software delivery life cycle. Having processes in place about when to write and run tests can be helpful. In terms of writing tests, unit tests are completed during development. Ideally, test driven development or TDD is used to write tests before writing code, and then ensures that the code written works as expected once the test passes. Integration test should be written during development as well. However, features must be completed enough to be able to test components working together. UI testing can start during development, but can not be completed until the feature to be tested is finished with development. For any type of test, decide when in the development life cycle, they should be automated. It also makes sense to think about when to run automation. Determine how tests will be executed both locally and with [[Continuous Integration (CI)|continuous integration]]. Ideally before making code changes, engineers on the team should run tests locally and ensure that everything is passing. Once changes are made, it's best to have a continuous integration server hooked up to run the test suite. It's important to run tests often and ensure that they are passing as the application continues to change. Test must consistently run green in order to have confidence in the test results. Determining when to write and run test is a best practice. Following this process allows the team to constantly be thinking about testing
>
> **[1:33](https://www.linkedin.com/learning/test-automation-foundations/development-processes?u=76281980&t=93)** and become more skilled with automation.

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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=0)** - The [[Software Development]] community has continued to evolve design principles and patterns. These principles and patterns help to reduce the cost of writing and maintaining automated test scripts. Look for ways to improve test design to keep long-term maintenance costs to a minimum while getting fast and useful feedback. There are a few main principles that ensure a consistent and maintainable automation test suite. Principles such as don't repeat yourself, shorten to DRY, help avoid duplication. DRY can ensure that when something changes in the system under test, only one test component needs to be updated. For automation, DRY allows test code to be shared and reused. A domain-specific language, or DSL, describes items particular to a test application. With any item in the application, it's best to give a descriptive name and use that name consistently, both within the code and the test application. Using a DSL throughout test will make them easier to comprehend by anyone on a team. Having a common language helps teammates better communicate and collaborate. There are a few more design guidelines to remember. First, each test should have one single purpose. This makes tests have clearer scope, be easier to debug, and easier to update if business rules change. Also, tests should be able to be run in any order and should not depend on data from any other test. The goal is for each test to be completely self-contained.
>
> **[1:35](https://www.linkedin.com/learning/test-automation-foundations/follow-test-design-patterns-14471760?u=76281980&t=95)** Finally, tests should be composed of steps which describe behaviors. The technical details of each step should be defined in a function outside of the test. By abstracting out the lower-level technical steps this way, the test will be more human readable. This list of [[Design Patterns]] and practices is not exhaustive, but these are the top patterns I like to follow. This list can provide a good start to see what works best for your team and the product. Determine the test design patterns that are important for your team and document those patterns in detail, like a project README. Documentation will enable others to understand the principles to follow and the structure of the tests.

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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=0)** - [Instructor] In this chapter, I'll discuss test tools that work together to make a complete [[Test Automation]] project. I'll use an example of a [[JavaScript]] application that I want to select test tools for. There are a variety of tools to use for automation testing. Some provide only one functionality and some provide many different pieces. The one tool I recommend to start with is a test framework. A framework allows you to easily write and structure tests in a particular way. It provides consistency with the use of reusable test code for common actions. There are many options for frameworks that exist for each programming language. Mocha is great for writing and structuring tests. This framework helps to write tests for [[Node.js]] applications. It offers browser support, asynchronous testing, a built-in test runner and the use of any assertion library. The test examples in chapter one of this course are all written in Mocha. Jasmine is also a great option for a test framework. It can be used with any JavaScript flavor and does not require a browser or DOM. It has clean obvious syntax to help easily write tests. And it has its own customizable test runner. Jest is a popular framework used and created by [[Facebook]] to test all [[React.js|React]] code. Jest is already included when creating a new React project, which allows for a zero configuration experience
>
> **[1:35](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=95)** and makes it quick and easy to get started writing tests. Jest also has a built-in test runner, mocking library, and code coverage reporter. There are also some popular frameworks that provide a browser or browser-like environment for testing to be done through the UI. [[Selenium]] is the classic option for UI testing, and it can be used with any flavor of JavaScript and most popular frameworks including Mocha, Jasmine and Jest. Cucumber is a behavior driven development or BDD UI testing framework. Cucumber executes specifications written in plain language. The test scenarios inside of the specification use the Given-When-Then format to help describe the input, action, and results of tests. It also works well with Selenium. Cypress IO is another UI testing framework that is fast, easy, and reliable for testing any application that runs in a browser. There are lots of different frameworks, and because of that, I recommend you do some investigation before deciding to use any one in particular. A good thing is that many frameworks support a BDD structure. The benefits of this structure are that it allows for organization of features and scenarios to be clearly identified. It also allows for more collaboration between team members. I want to point out that it's not necessary to use a prebuilt framework like Mocha or Jasmine or Jest,
>
> **[3:11](https://www.linkedin.com/learning/test-automation-foundations/framework-14471757?u=76281980&t=191)** but I highly recommend it because it just makes life easier. These existing frameworks will allow you to get your test up and running much quicker. They allow you to spend less time thinking about how tests will be written and structured and more time actually writing test.

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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=0)** - [Instructor] Assertions are the backbones of tests. They make tests have meaning by validating the results. Assertions will fail a test when the expected results don't match the actual results. There are various assertion libraries that can be used in an automation project. Popular assertion libraries are Assert, which is built into [[Node.js]] itself. Jasmine and Jest, which are built into the framework. And Chai and Unexpected, which are standalone, BDD assertion libraries. I recommend using the assertion library that comes built-in to Node.js, or built into the test framework itself. There's no need to download unnecessary dependencies if you can avoid it. But if the framework you select doesn't have an assertion library, or you want more flexibility, pick any assertion library of your choice. Let's see some examples using each assertion library that I mentioned, where we can confirm that a function which adds two numbers returns the right result. First up is Assert. I've shown examples using Assert in chapter one, but here's a refresher. To assert equality, I can say assert.equal, the actual result compared to the expected result. The Assert module itself provides a simple set of assertion tests that can be used to verify results. It's not as customizable as some of the other options, but it's great for simple scenarios.
>
> **[1:35](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=95)** With Jasmine, the expect annotation is used. With expect, it's really the same as assert, but just a different way to phrase it. To expect equality, I can write a phrase that expects the actual value to equal the expected value. Jasmine offers a wide range of matcher functions to use in assertions, and allows custom matcher functions to be built as well. With Jest, the annotation is completely identical to Jasmine, but it's just specific to [[React.js|React]] test to code only. It also offers a wide range of matchers. Using Chai, the same expect function is used, but the statement uses matchers split up by periods. So the statement reads as expect, the actual value to.equal, the expected value. Chai has great custom plugins to extend assertions, and has integrations with other vendors to make assertions even more powerful. And with Unexpected, the syntax is similar as well, but simply writes out the matcher and a string format, making the statement very readable. The equality assertion looks like expect, the actual value, end quotes, to equal, the expected value. It is highly extensible and compatible with all testing frameworks. So as you can see, there are some differences in syntax, but that's okay.
>
> **[3:09](https://www.linkedin.com/learning/test-automation-foundations/assertion-library-14473705?u=76281980&t=189)** What's most important is that the assertion statements are readable and make it clear what is being validated. Find one that you feel comfortable using and stick with it.

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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=0)** - [Instructor] Once tests are written, the fund can really start. The whole idea about test is to run them over and over again. With all that test running going on, it's a good idea to have a way to easily run test in a repeatable way and see the results of those tests. I'll show an example of running test and reporting results now with Mocha. To get started, I'll hop over to the project repository that's open in code spaces. I'll focus on one of my unit test classes under test, unit and I'll open calculatetotalprice.test.js and show how I can run this one test file. I'll go ahead and close the explorer and open up my terminal. And in the terminal, I'll start by typing npx mocha. NPX is a tool that comes with NodeJS and allows you to execute binaries and command line tools. Use the NPX command with the mocha command to execute the mocha binary. Next I specify the file or files to run. In this case, let's just go with this test file that's shown at test/unit/calculateTotalPrice.test.js
>
> **[1:31](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=91)** and then I'll press enter. And I can see the output displayed in my terminal window. There are many options for which test and test files to run. If I want to run all the unit test, I'll type npx mocha test/unit/*.js.
>
> **[1:58](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=118)** This uses a file path pattern to match all files in the unit test directory that end with the .js extension. And when I press enter, I can see the output of all of the tests that were run. One way that I recommend writing tests is to use the help of our Node package manager. To demonstrate that, I'll go to the project and look for the package.[[JSON]] file.
>
> **[2:28](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=148)** And in this file there is a script section where there are different scripts to perform different actions, mainly a lot of testing type scripts are defined here. So let me focus my attention on line 7 where there is a unit test script which runs that command I just ran in the terminal to run all of the unit test in the unit directory. So going back to my terminal, I can type [[npm]] run unit-test
>
> **[3:03](https://www.linkedin.com/learning/test-automation-foundations/test-results-26049903?u=76281980&t=183)** to go ahead and execute that script that's defined on line 7. And when I press enter, I see somewhat the same results here in my terminal, I see all of the tests that ran, and at the beginning I see the information from the package.JSON including the project name, version and the script that was run as well as the command that runs. So a little bit different view this way. Look through the other scripts available to run test, and understand how each script works. Feel free to add or modify scripts to run different variations of test. Running tests with Jasmine and Jest have similar requirements to get set up and run test. All major frameworks have a basic level of reporting that come with the test runner. Most test runners can also be customized to present information in a particular way. And there's also an option to select a test runner that generates nice and detailed reports if that is what is important to you and your team. No matter the tool, just remember to make it easy to run test through a simple command and make sure the results can be clearly interpreted.

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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980&t=0)** - [Narrator] Spend some time to identify scenarios to automate. For each new feature being implemented, I recommend to sit down with your team and take 10 minutes to write down as many scenarios as you can think of. Don't worry about writing down scenarios that are too off the wall or not feasible. The goal in this stage should be to think of as many scenarios as possible. I'll spend the [[Representational State Transfer (REST)|rest]] of this video listing some possibilities for test scenarios. From the homepage of the AI Animal Art application, I can view [[Microsoft Products|products]] for sale. After viewing items available for purchase, I can choose the one I want and select add to cart. If I want many of the same type of item, I can continue to click the add to cart button, and then I can shop around and select add to cart for some other items as well. Going to my cart, I can see all of the items that I have added, and I can also see a total price of the items down below. If I decide I don't want an item any longer, I can select it and update the quantity anywhere from zero to 10. So for the cat, I'll set the quantity to zero, which removes the item. I can update the quantity on multiple items or remove multiple items from the cart. Then perhaps I don't want any of these items anymore and want to start over.
>
> **[1:33](https://www.linkedin.com/learning/test-automation-foundations/scenarios-to-automate-26050845?u=76281980&t=93)** I can then set the quantity of the last item to zero, which would go ahead and clear out my cart and remove all items. When I'm happy with my order and the items in my cart, I can select checkout to complete the purchase. I'll stop at these 10 scenarios for now, but this is still not an exhaustive list of all of the scenarios that could be automated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** cat (1)
> **Speakers:** - [narrator] (1)

#### [Give each scenario a value](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=0)** - After identifying a list of scenarios, they need to be evaluated. Assign a score of one to five, based on how valuable each scenario is. The scores for value will be determined based on the importance of the feature, the [[Probability]] this feature would be fixed if broken, and the distinctness of the scenario. Work with your team and use your best judgment along the way. As an exercise, have the group of stakeholders assign a score for the value of each scenario. I'll evaluate a couple of my test scenarios now. The first scenario is View [[Microsoft Products|Products]] for Sale. This is a required feature of high importance. Customers need to view the items for sale to buy them. This would be fixed immediately and it's distinct and necessary. So I'll give this a score of five. Next up is Adding an Item to the Cart. This is a very important feature and would definitely be fixed immediately. This is also a distinct feature. So I'll give this a score of five. Now we have Add Multiple Items to the Cart. It's a required feature and would be fixed immediately, but this isn't so distinct as adding a single item to a cart. So I'll give this a score of four. Another scenario is Removing an Item from the Cart. This is a good and distinct feature to have, but not as important as being able to add an item to the cart. I'll give this a score of four. The final scenario I'll evaluate is Order Checkout. It is a required feature of high importance,
>
> **[1:34](https://www.linkedin.com/learning/test-automation-foundations/give-each-scenario-a-value-14472690?u=76281980&t=94)** and this is how money will be made. It would be fixed faster than any other issue and is distinct. So I'll give this a score of five. I'll repeat this process for each potential test scenario. Here you can see the final values. This list can help surface the most valuable test to build.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1), [[Microsoft Products|Products]] (1)
> **Definitions:** is a  (4)
> **Speakers:** - after (1)

#### [Risk of automation](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/risk-of-automation?u=76281980&t=0)** - Now, I'll go through each scenario and assign it a risk score from one to five. The risk is determined based on two factors. One, the impact of the feature. If it's broken, what will the impact be to customers? And two, the [[Probability]] of use. How often will this feature be used by customers? The first scenario I'll evaluate for risk is viewing [[Microsoft Products|products]] for sale. This is a high impact feature and has high probability of use. I'll give this a score of five. Next, is add an item to cart. This is high impact and high probability, so I'll give this a score of five, as well. Another scenario is adding multiple items to the cart. This is high impact and will likely be used often. I'll give this a score of four. The final scenario is order checkout. This is the highest impact feature and certainly has a high probability of use, so this one also gets a score of five. I'll repeat the same process for the [[Representational State Transfer (REST)|rest]] of the scenarios. Here you can see the final risk scores. Risk allows teams to think about how often a feature will be used and what will go wrong if the feature is broken.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (4), [[Microsoft Products|Products]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - now (1)

#### [The cost of automation](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/the-cost-of-automation?u=76281980&t=0)** - Risk and value are critical when considering test scenarios, but it's also important to consider how much automating a test may cost. I'll go through each scenario and assign a score of one to five for the cost of automation. The score of cost will be determined by how easy it will be to write the test script and how quickly the test will be scripted. First step is view [[Microsoft Products|products]] for sale. This is an easy and quick test script to write. I'll give this a score of five. Next up is adding an item to the cart. This is easy to write and should also be pretty quick to write, so I'll give this a score of five. The next scenario is to remove an item from the cart. It is easy to write, but will first require adding an item to the cart to remove it. I'll give this a score of four. Remove items from cart is an easy to write scenario, but requires adding multiple items to the cart to remove them as well. Because of this, I'll give this scenario a score of three. And then we have the order checkout scenario. It's easy to write, but again, it depends on the amount of items added to the cart. In that case, I'll give this a score of four. Here you can see the final score for each scenario. Assigning a cost to each scenario is where we've been able to see the most variance. This helps quantify the effort of writing a test to make an informed judgment about what to automate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Definitions:** is an  (2)
> **CLI Commands:** make (1)
> **Speakers:** - risk (1)

#### [Select what to automate](https://www.linkedin.com/learning/test-automation-foundations/select-what-to-automate-14468801?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/select-what-to-automate-14468801?u=76281980&t=0)** - After identifying the value, risk, and cost of each scenario, there is now enough information to select the best candidates for automation. Here are the final scores. Now I'll sum the value, risk, and cost scores for each scenario to get the total, and here is the sum of the final scores. Now let's analyze these numbers to determine the next steps. Because this example was pretty limited in scope, all scores were three or higher, which is good. This will definitely not be the case for all features, but for now, let's work with the data we have, and make some conclusions about it. In this instance, I'll decide to create a scale as follows. Scores 13 to 15 should be automated, and scores 12 and less should not be automated. That means I'll end up automating the following scenarios. I have confidence these scenarios will be the most important to prioritize writing test for. Not saying the others aren't important, but the idea should be to focus on these top scenarios first. This isn't a hard-and-fast rule. Scoring a scenario on value, risk, and cost, help to quantify this data and make it easier to select what to automate. Feel free to adapt this model to suit your team's needs.

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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=0)** - [Instructor] [[Test Automation]] is an ongoing process. This process works out best when it starts with a strong foundation and continues to build steadily over time. It requires that the team invest in the test and follow good standards. There are three simple rules that can make all the difference when it comes to maintaining a healthy test suite. The first rule is valuable tests. Your automation tests should always be delivering value. It's a good idea to revisit tests over time and have a retrospective on them regularly to determine if tests need improvements. It's all about quality over quantity. Focus on automating what's important rather than about how many tests are written. Treat test code like production code and give it the same level of nurturing and attention. The second rule is about reliable tests. It is imperative that tests provide the same result every single time. Have a plan in place for mitigating failures. Failure is going to be inevitable, but it's necessary to have a plan for addressing the failed test. I'll discuss this more in the next video. I also recommend having independent tests where the execution of one does not affect the other. Similarly, run tests in a dedicated environment to not interfere with others that might be using the same environment for other reasons. The last rule is about fast tests. Try to keep execution as quick as possible to have fast build times and ultimately
>
> **[1:34](https://www.linkedin.com/learning/test-automation-foundations/maintain-standards-14470766?u=76281980&t=94)** be able to release code quicker. Parallelizing tests allows many tests to be run concurrently, which dramatically reduces the total time it takes to run. Limit testing in the UI in order to have more focus on the faster, lower level test. Keeping all these rules in mind about what's important to maintain a healthy automation suite makes a world of difference over time.

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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=0)** - [[Test Automation]] is an ongoing process and maintenance will be a huge portion of that process. The three main parts of maintenance include adding new tests, updating old tests and fixing failures. New features in a [[Software Development]] project will require that new tests be added. For the individuals working on the new functionality, discuss how it will be tested and what types of tests will be created. Applications change over time and tests can get out of date. It is necessary to keep things updated no matter the reason. Sometimes tests will need new test data or a different assertion to validate the results. Other times a test should be deleted if it's no longer relevant or the feature it's testing has changed completely. It's also inevitable that tests will fail for various reasons. Since the build must always be green, it's important that there be a plan of action for those tests not passing. If there's a random failure, find some way to mitigate the failure. Like rerunning the tests that don't pass. I also recommend isolating flaky tests from those that run consistently. Those flaky tests can be improved and then moved back to the main build once they are reliable. If it's a legitimate failure, it's necessary for the test to be investigated and fixed immediately. A legitimate failure might also indicate a bug that needs to be fixed in the code.
>
> **[1:34](https://www.linkedin.com/learning/test-automation-foundations/make-a-maintenance-plan-14472689?u=76281980&t=94)** This should require that the code which introduced the bug be reverted or the bug be fixed. Tests will need to be regularly added, updated, and fixed. Having a plan of attack for maintenance keeps these changes happening smoothly to ensure a more robust automation suite.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test Automation]] (1), [[Software Development]] (1)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - test (1)

#### [Use continuous integration](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=0)** - [Instructor] The magic of automated test is that they can be run over and over again and provide the same result. [[Continuous Integration (CI)|Continuous integration]] is the best way to allow automated tests to be run repeatedly across different platforms and environments. And with continuous integration, test can be triggered as a result of any new changes pushed to [[GitHub]]. Or tests can also be run on a reoccurring basis, such as every hour or every night at 9:00 PM. A benefit of running tests continuously is that it will likely catch bugs sooner than compared to engineers running tests locally on an ad hoc basis. There are many CI solutions available. I won't get into the different options here, but I will recommend selecting a solution based on cost, ease of use, maintenance, and support. For the [[Representational State Transfer (REST)|rest]] of this video, I'll demonstrate setting up my test application to work with continuous integration. I'll use GitHub's continuous integration solution with GitHub actions. GitHub actions makes it easy to automate software workflows. Using their continuous integration workflows you can build test and deploy code right from GitHub, plus it's free for public repositories. Focusing my attention back on the repository for [[Test Automation]] foundations, I'll select actions from the header and here I can create new workflows to run in my project.
>
> **[1:38](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=98)** So I'll select the new workflow button, which allows me to choose a workflow. I'll start searching for node and press Enter. And I want to configure the action called [[Node.js]]. So I'll press the configure button, which is going to open a new workflow YAML for me at GitHub/workflows. And the file is called node.js.yaml. This YAML file is a configuration file to specify how to build, test, and run the application. Looking, looking over this workflow file, I see the name of the workflow. I see that it will run on pushes to the main branch and pull request to the main branch. It's going to build on the latest version of [[Ubuntu]] and there is a matrix for node version. So this is the first thing that I'll change here on line 19. I only want to use the latest version of node, which is currently 22 point x. Let's step down and focus on the steps, starting with checking out the project using node.js, specifying the version running MPMCI, which is essentially going to run a build and install the packages. And then line 30 and 31, we will run another build and [[npm]] test.
>
> **[3:10](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=190)** So here is where I'm going to change things up a little bit more. I'm going to remove lines 30 and 31. On line 30 I want to start the server with the command run:npm start & to go ahead and start the test server running in the background. On line 31, I want to run the unit test with -run:npm run unit-test. I'll press Enter to go to a new line, line 32 where I will next run the integration test.
>
> **[3:53](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=233)** - run: npm run integration-test. And I'll press enter again to go to a new line. And now on line 33, I want to run the UI test, so I can say -run: npm run UI-test.
>
> **[4:17](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=257)** And that's it for now. So here in this build, I am going to run the install, start the server, run the unit test, run the integration test, and then run the UI test. So now that I'm done with that, I will scroll up and look for the commit changes button. I'll go ahead and select that. And for now, I will commit directly to the main branch. Let me commit those changes. And now I will click on the project name to go back to the homepage of the repository. Here I see my commit create node.js.yaml, which is pending. Selecting that little yellow circle will open up another window to let me know that the checks are in progress. Here I'll select the details link, which takes me to the output of the job. I see all of those same steps that were defined in the YAML running here in my window. So I can just wait for all of the build steps to finish, which should just take another couple seconds. Hooray. So this build was successful. It succeeded in 35 seconds, and I see the status here. Going back to the actions tab, I can see that same output of the job here, and I'll see as more and more of those builds run or workflows run, I'll see them all displayed here. I encourage you to look at other workflows
>
> **[5:50](https://www.linkedin.com/learning/test-automation-foundations/use-continuous-integration-26046913?u=76281980&t=350)** that GitHub actions has to offer. If it seems like this could be a good continuous integration workflow for your scenario.

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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=0)** - [Person] Code coverage is one of the most popular metrics to analyze automated test. Coverage is measured by how much of the code is used within test. It is helpful at visualizing which parts of the application are well-tested and which are not. Like all things with automated test, luckily, there are many tools that can help provide a solution. Code coverage tools are usually free for open-source projects and straightforward to set up. Code coverage typically tracks statement, branch, and function coverage. They also provide command-line tools and offer nice reports to visualize coverage. To use a coverage tool, a package needs to be installed to the project, then that tool can be used when the tests are run and a coverage report will be generated. As an example, I'll use the test coverage tool called Istanbul, which is widely used for [[JavaScript]] projects. Visit istanbul.[js.org](https://js.org) to get started. A really simple way to use Istanbul is through the command-line client called NYC, which has instructions to set up shown here. I'll go over to the terminal now and install the command-line tool called NYC by typing this command "[[npm]] install --save-dev nyc." Once I'm back in the code spaces for "test-automation-foundations," I'll open up the terminal and I can type "npm install --save-dev nyc," and press Enter
>
> **[1:49](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=109)** to go ahead and install that NYC command-line client. It looks like the NYC command-line client installed successfully, so now I can call the NYC test command when running tests to generate coverage. I'll now focus my attention on the "package.[[JSON]]" file. If I scroll down to the bottom of this file, I'll notice that on line 31 NYC is installed, and then, going back up towards the top, I'll focus on line 11, which has the test coverage script. This script uses the "nyc" command followed by "mocha," and we'll run the "unit," "integration," and "UI" test. Now let's try out this test script. So going back to the terminal, first, I want to make sure that my server is started, so to do that, I'll type "npm start," and I see that the server is up and running on my local host. Next, let me open a new terminal window, and here I can run that script, "npm run test-coverage," and press Enter and wait for the results. After all the test are run, the coverage report is generated and shows percentages of coverage for each test file broken down by statements, branches, functions, and lines,
>
> **[3:24](https://www.linkedin.com/learning/test-automation-foundations/measure-code-coverage-26050846?u=76281980&t=204)** I could also see the uncovered lines of code in the last column. The coverage metrics that are high in percentage are displayed in green, medium percentage are displayed in yellow, and low in percentage are displayed in red. It's then possible to analyze this data and see if there are any trends and determine if any area can use more test coverage. While I always recommend measuring test coverage for any project with automated test, I don't recommend having to meet strict coverage targets as a result. For example, 100% test coverage sounds wonderful because it means everything is tested, but it can also have negative effects. Decouple coverage from purpose to focus on writing the most important test that will provide the highest value. Never automate something for the sole purpose of increasing coverage, rather, use the coverage data to make informed decisions about how testing in a particular area can be improved.

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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/share-automation-success-14471759?u=76281980&t=0)** - [Instructor] Share stories about automation with the [[Representational State Transfer (REST)|rest]] of the organization or company. Chances are not everyone will be familiar with [[Test Automation]]. In that case, it's beneficial to discuss what problem automation intends to solve. Also highlight the value of automation so that it's relevant to others. Tests can tell a compelling story about the state of an application. The best way to promote automation is to share wins with the rest of the organization. Share examples of things like how many bugs automation caught. A goal of automation is to help catch bugs quicker and ideally before release. Take note of which bugs were discovered from test automation. It can also be a good idea to share how many hours automation saved from manually testing a feature. A good sign of this is having higher productivity and being able to spend less time on each release because more of the checks are automated. In terms of [[Team Collaboration]], it's good to share how automation helped cross-functional team members work more closely together to pair on activities like identifying high value scenarios and writing test code. Being able to share compelling stories of automation backed by data is invaluable. It will make the team feel more excited about automation and that the time invested in automation is worthwhile.

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
> **[0:00](https://www.linkedin.com/learning/test-automation-foundations/advance-your-skills?u=76281980&t=0)** - Thank you so much for watching my course on the Foundations of [[Test Automation]]. Remember that test automation is extremely valuable to the success of a software project, but requires proper planning, execution, and maintenance. To continue to advance your skills with test automation, spend more time learning about and writing automated tests. I also recommend building your own automation suite for an application. If you'd like to get in touch, I'd enjoy hearing from you or answering any questions you might have. You can reach me on [[LinkedIn]], Twitter, or on my website. Looking forward to hearing from you.

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