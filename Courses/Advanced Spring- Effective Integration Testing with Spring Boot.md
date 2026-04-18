---
type: course
slug: advanced-spring-effective-integration-testing-with-spring-boot
url: "https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot"
duration_minutes: 74
duration: 1h 14m
level: Advanced
updated: 10/12/2023
learners: 5058
skills:
  - Integration Testing
  - Spring Boot
exercise_files: true
tags:
  - course
  - topic/software-development
  - topic/cloud-computing
  - topic/database-management
  - topic/web-development
  - skill/integration-testing
  - skill/spring-boot
status: not-started
created: 2026-04-17
---

# Advanced Spring: Effective Integration Testing with Spring Boot

> Writing and running tests is an essential part of delivering reliable software, but we don’t always do so as efficiently as we could. Have you ever been in a situation where all the tests pass, yet the application still doesn’t work? In this course, instructor Terezija Semenski gets you up to speed on how to take advantage of advanced testing features in Spring Boot. Terezija explains the importan

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot) | 1h 14m | Advanced | 5K learners

## Instructor

- [[Terezija Semenski]]

## Resources

- Exercise files available

## Skills Covered

- Integration Testing
- Spring Boot

## Table of Contents

### Introduction

#### Take advantage of Spring events
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/take-advantage-of-spring-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/take-advantage-of-spring-events?u=76281980&t=0)** - In my course, I will teach you Spring Boot's advanced testing features to test some tricky real-world scenarios, such as database queries, caching, web layers, and testing in microservice environments.
>
> **[0:13](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/take-advantage-of-spring-events?u=76281980&t=13)** Hi, I'm Terezija Semenski.
>
> **[0:15](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/take-advantage-of-spring-events?u=76281980&t=15)** I've been a software developer in Java and Spring for over a decade.
>
> **[0:19](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/take-advantage-of-spring-events?u=76281980&t=19)** The best way to run integration testing is to jump right in, so let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Analogies:** such as (1)
> **Speakers:** - in (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/what-you-need-to-know?u=76281980&t=0)** - [Narrator] Before starting this course, let's explore what skills and knowledge you will need.
>
> **[0:06](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/what-you-need-to-know?u=76281980&t=6)** This course is targeted at intermediate and advanced developers.
>
> **[0:10](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/what-you-need-to-know?u=76281980&t=10)** In order to truly be successful in this course, you should have experienced with Java and a solid understanding of Spring framework and Spring Boot.
>
> **[0:20](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/what-you-need-to-know?u=76281980&t=20)** It'll also be helpful to have some exposure to functional programming, and streams and lambdas that were introduced with Java 8.
>
> **[0:29](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/what-you-need-to-know?u=76281980&t=29)** Previous experience with JUnit testing is nice to have, but since we will be doing hands on exercises from scratch, you will quickly pick up the essentials.
>
> **[0:41](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/what-you-need-to-know?u=76281980&t=41)** Our focus will be on the latest versions of Java 15 and Spring Boot, current 2.4 with supporting APIs.
>
> **[0:51](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/what-you-need-to-know?u=76281980&t=51)** Throughout this course, we will be using IntelliJ IDE, but any Java IDE is sufficient with this course.

> [!info]- Semantic Content
>
> **Versions:** java 8 (1), java 15 (1), 2.4 (1)
> **Env Vars:** ide (2)
> **Code Keywords:** let (1)
> **Tools:** intellij (1)
> **Speakers:** - [narrator] (1)

#### Why bother testing?
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=0)** - [Narrator] Spring Boot applications are built in multiple layers data, service and web.
>
> **[0:06](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=6)** In unit testing, we test each of these layers independently.
>
> **[0:10](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=10)** For example, we test the web controllers that mock out the business services.
>
> **[0:16](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=16)** But how do we test to ensure all these layers work well when combined together?
>
> **[0:21](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=21)** How do we test other web controller responsibilities such as input validation or exception handling?
>
> **[0:29](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=29)** Or how do we test integrations with external systems such as database custom queries or using external API?
>
> **[0:37](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=37)** This is where integration tests come into play.
>
> **[0:41](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=41)** Before we start into integration tests with Spring Boot let's define what sets an integration test apart from a unit test.
>
> **[0:51](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=51)** A unit test targets a small unit of code for example, a method or a class.
>
> **[0:58](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=58)** Any dependencies are removed from unit tests like replacing the dependency with a test implementation or a mock object created by test framework.
>
> **[1:09](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=69)** An integration test on the other hand can be anything of the following, a test that covers multiple units because it tests the interaction between two or more components which is spring we refer to spring beans.
>
> **[1:25](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=85)** A test that covers multiple layers.
>
> **[1:28](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=88)** This is actually a specialization of the first case and might cover the interaction between a web controller and a service layer or a business service, and a persistence layer.
>
> **[1:40](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=100)** A test that covers the whole path for the application.
>
> **[1:44](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=104)** In this test, we send the request to the application and check that it responds correctly and has changed the database state according to our expectations.
>
> **[1:55](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=115)** A test that requires an interaction with external systems such as database SFTP server, other API endpoints.
>
> **[2:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=125)** So whenever we are moving beyond unit testing and start integration testing, we should use SpringBootTest support to create an application context containing all the objects we need for all the above test types.
>
> **[2:22](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=142)** As you progress through the course we will explore SpringBootTest libraries.
>
> **[2:28](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=148)** Learn some three key real world testing scenarios such as testing with real database, testing service layer with caching support, web layers and testing in micro serviced environment.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for example (2)
> **Env Vars:** api (2), sftp (1)
> **Code Keywords:** let (1), class. (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [narrator] (1)


### 1. Explore the Power of Spring Boot Libraries

#### Creating a Spring Boot application from start.spring.io
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=0)** - [Instructor] Writing good tests can be considered an art that is hard to master, but the good news is that the mechanics supporting it are easy to learn.
>
> **[0:09](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=9)** In this lesson, we're going to create our first application, called Students Service, and explore the powerful set of Spring Boot's including libraries that make our tests straightforward and easy to implement.
>
> **[0:24](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=24)** Creating Spring Boot applications can be done in many ways, but one of the easiest is to head off to start.[spring.io](https://spring.io).
>
> **[0:33](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=33)** This is the initializer web application where we can choose many of the options that we will use to create our first application, called Student Service.
>
> **[0:43](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=43)** We can leave most of default options, like using Maven Project, Java as our language, and latent Spring Boot dependency.
>
> **[0:52](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=52)** Now, we are going to populate the group.
>
> **[0:55](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=55)** Let's use com.linkedin.
>
> **[0:57](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=57)** As an artifact, we need to set it to Student Service.
>
> **[1:01](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=61)** Leave the packaging as a .jar, since with this option we have the benefit of embedded Tomcat, which we will need considering we are building REST service.
>
> **[1:11](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=71)** As the Java version, we will choose the latest Java 15.
>
> **[1:15](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=75)** However, examples are also compatible from Java 11, which provides long-term support.
>
> **[1:22](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=82)** In the dependencies we will bring Lombok, which makes Java less cluttered with code.
>
> **[1:27](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=87)** We're going to add Spring Web, Spring Data GPA Support, embedded H2 database, and contract verifier.
>
> **[1:39](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=99)** Click on Generate.
>
> **[1:42](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=102)** Let's open the Download directory, unzip the generated project, and open it in the IDE, either from terminal or from Java IDE.
>
> **[1:51](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=111)** I'm using IntelliJ IDEA, which comes with a useful set of plugins for Spring Boot projects.
>
> **[1:59](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=119)** Immediately after opening the project, IntelliJ will pull all the Maven dependencies.
>
> **[2:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=125)** Make sure that you have the correct Java version installed.
>
> **[2:08](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=128)** You can check it by opening File, Project Structure.
>
> **[2:12](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=132)** Under Project SDK, you should see Java 15.
>
> **[2:16](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=136)** As we can see, this is a fresh Spring Boot application, which comes out of the box with Spring Boot Test Support.
>
> **[2:24](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=144)** It provides a number of utilities and annotations to help when testing your application.
>
> **[2:30](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=150)** These are the libraries we are going to use, JUnit5, the de facto standard for unit testing Java applications, SpringBootTest Utilities and Integration Test Support for Spring Boot applications, Mockito, a Java mocking framework, AssertJ fluent API, JSON Assert, an assertion library for JSON, and JSONPath, Xpath for J--

> [!info]- Semantic Content
>
> **Env Vars:** ide (2), json (2), rest (1), gpa (1), idea (1)
> **CLI Commands:** make (2), unzip (1)
> **Code Keywords:** let (2), assert (1)
> **Versions:** java 15 (2), java 11 (1)
> **Tools:** intellij (2), terminal (1)
> **UI Navigation:** click on (1), open the (1)
> **URLs:** [spring.io](https://spring.io) (1)
> **Definitions:** is a  (1)

#### Creating human-readable tests with Mockito and AssertJ
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=0)** - [Instructor] The code and tests tends to be disorganized.
>
> **[0:03](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=3)** Some mocks here and there, interleaved with assertions and test method calls.
>
> **[0:09](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=9)** Let's look at the given-when-then methodology with BDDMockito and AssertJ to create human readable tests.
>
> **[0:18](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=18)** Given-when-then methodology arrived from a very popular AGL development process called BDD or behavior-driven development.
>
> **[0:29](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=29)** BDD, which emerged from TDD, brings to the table a human friendly style of writing test scenarios by structuring the test into three parts.
>
> **[0:40](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=40)** Given is where we put our preconditions and requirements for this use case.
>
> **[0:46](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=46)** When is the action that we want to test.
>
> **[0:49](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=49)** Usually this involves calling no more than one or two lines of code.
>
> **[0:54](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=54)** Then is used to verify what should happen after the execution of the action.
>
> **[1:01](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=61)** It is represented usually by assertions to more classes and validation of returned results.
>
> **[1:08](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=68)** This brings more clarity in our tests as we are following a natural language that is easy to read not only by developers but also by business users.
>
> **[1:20](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=80)** Unlike standard Mockito, which uses when alias to configure behavior of a mock.
>
> **[1:26](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=86)** BDDMockito provides us with a more elegant alias given, which integrates nicely with a given part of BDD style test.
>
> **[1:36](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=96)** Another library that we are going to use in our tests is the AssertJ.
>
> **[1:41](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=101)** But why should you care about AssertJ if J unit comes with assertions out of the box?
>
> **[1:48](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=108)** Actually JUnit assertions are quite limited to a few basic scenarios and lead to confusion when reading them.
>
> **[1:56](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=116)** For example, a common mistake that many developers still make is mixed up the expected with the actual value.
>
> **[2:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=125)** Compare that to a AssertJ which provides a much more natural and fluent API, AssertJ provides a rich set of assertions, truly helpful error messages, improves test code readability and is designed to be super easy to use.
>
> **[2:24](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=144)** To highlight some of the features describing assertions, field by field comparison, iterable, araya assertions, capture and then assert on a throwable, which can be expressed by Alonda.
>
> **[2:37](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=157)** Note that a AssertJ also comes with BDD friendly alias.
>
> **[2:42](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=162)** Like BDDMockito has called then, which we will use instead of assertThat.
>
> **[2:48](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=168)** The adoption of BDDMockito together with AssertJ provides us with a powerful feature set that can help us reduce boilerplate code and write more readable verification called blocks.

> [!info]- Semantic Content
>
> **Env Vars:** bdd (4), agl (1), tdd (1), api (1)
> **Code Keywords:** let (1), case. (1), super (1), assert (1)
> **Warnings:** common mistake (1), note that (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** assertthat (1)
> **Exercise Files:** boilerplate (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)


### 2. Integration Testing Against a Real Database

#### Effective ways to test your data access
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=0)** - [Instructor] Writing tests for all database interactions can be tedious.
>
> **[0:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=5)** How to choose which interactions to mock and which test, what risks are we introducing with custom queries, having in-memory databases, and how to avoid common pitfalls.
>
> **[0:17](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=17)** Let's explore three keys to write an effective integration test for the database layer.
>
> **[0:24](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=24)** But first, let's understand spring boot data support and common ways of interacting with our persistence layer in spring applications.
>
> **[0:35](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=35)** Spring boot comes with a variety of spring data projects to work with SQL and NoSQL databases, such as document, graph, and search.
>
> **[0:47](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=47)** We also get extensive support to interact with our database from direct Jdbc access using data source or Jdbc template.
>
> **[0:57](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=57)** Up to complete ORM such as hibernate where we work with entity managers or repositories.
>
> **[1:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=65)** Spring data also provides different ways to create a DB schema.
>
> **[1:10](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=70)** From writing SQL scripts or using DB migration tools such as flyway or Liquibase, to simplest autocreation based owner entities.
>
> **[1:21](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=81)** Each customization we make, we introduce different levels of risks.
>
> **[1:26](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=86)** Key one, choosing the right interactions to test.
>
> **[1:29](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=89)** Let's consider you're using spring data repository which you create by extending one of the repository interfaces.
>
> **[1:37](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=97)** Spring data also allows you to customize queries in the following ways.
>
> **[1:42](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=102)** By using custom query methods, we don't need to tell spring data what to do since it automatically derives the SQL query from the method name using query annotation with JPQL query syntax.
>
> **[1:56](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=116)** JPQL is Java Persistent Query Language used to create queries against entities to store in a relational database.
>
> **[2:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=125)** Using SQL query followed by native SQL targeted at the database table.
>
> **[2:11](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=131)** Now, imagine we make a bug in all four cases.
>
> **[2:15](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=135)** The neat thing with spring is that for the first three cases, spring data and hibernate automatically check if entity and query are valid at startup.
>
> **[2:27](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=147)** So there is a very little risk involved.
>
> **[2:30](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=150)** However, native queries are not validated.
>
> **[2:34](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=154)** So native queries are primary candidates for integration tests.
>
> **[2:39](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=159)** Key two, make your tests fast by using test slices.
>
> **[2:43](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=163)** Running integration tests in spring can be achieved by adding spring boot test annotation, which loads full spring context.
>
> **[2:53](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=173)** However, this can lead to loading unnecessary parts of your application.
>
> **[2:58](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=178)** For example, you might want to test database interactions but you are not interested in the web layer when those tests run.
>
> **[3:08](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=188)** Or you're only interested in web layer and want to avoid loading all repositories.
>
> **[3:15](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=195)** The spring boot test module includes a number of annotation test slices.
>
> **[3:21](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=201)** Each test slide, loads only the parts of the configuration that are required to test the slice of your application which can drastically speed up your tests.
>
> **[3:32](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=212)** Key three, in memory database doesn't equal production database.
>
> **[3:37](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=217)** Springboard provides a convenient way to set up an environment with an embedded database such as age two or age as SQL to test our database interactions.
>
> **[3:50](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=230)** Even though each tool comes with compatibility mode for my SQL or Postgres.
>
> **[3:56](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=236)** However, if compatibility is not in sync with the version of DB you're using, you can almost get lulled into false sense of security, thinking that all SQL interactions are fine.
>
> **[4:10](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=250)** What is the alternative?
>
> **[4:12](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=252)** How can we mitigate such risks with test containers?
>
> **[4:16](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=256)** This container is a lightweight library that provides throwaway instances of a common database in a docker container.
>
> **[4:24](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=264)** But without requiring complex setups for developers, we can define exactly which database type and version we want to work with.
>
> **[4:34](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=274)** We don't need to worry about tests, having polluted the database, or left things in a broken state as each time our test starts with a fresh instance.
>
> **[4:44](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=284)** By choosing right interactions to test, using test slices with embedded databases or test containers.
>
> **[4:52](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=292)** We can produce integration tests with more efficiency and with more reliability to deliver first-class software.

> [!info]- Semantic Content
>
> **Env Vars:** sql (8), jpql (2), orm (1)
> **Analogies:** such as (4), imagine (1), for example (1)
> **CLI Commands:** make (3), docker (1)
> **Code Keywords:** let (3), module (1)
> **Definitions:** is a  (2)
> **Prerequisites:** required to (1), set up (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Writing integration tests for a JPA repository
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=0)** - [Instructor] Let's take into practice everything we've learned so far by writing our first test.
>
> **[0:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=5)** When it comes to testing, there are two different approaches we can use from the smallest component all the way up which is called bottom up approach or inside out.
>
> **[0:18](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=18)** This approach is great When we have two different teams working independently on a different services and we are not so worried about integration.
>
> **[0:29](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=29)** However, when we have two different teams and we know integration is going to be risky in this case, we want to prioritize building the integration and points first, and then focus on smaller components.
>
> **[0:46](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=46)** This is called Top-down approach or outside-in.
>
> **[0:50](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=50)** In our example, we are going to start with Bottom up Approach by writing integration tests for our repository.
>
> **[0:59](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=59)** We want to prove we can retrieve objects from the database by queering it by student name.
>
> **[1:06](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=66)** We want to verify that student object maps correctly to the database.
>
> **[1:12](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=72)** We will write our tests first and then the actual implementation.
>
> **[1:17](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=77)** This is known as TDD and red-green refactor.
>
> **[1:22](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=82)** First, we will write a red failing test and then write just enough code to make our tests green again.
>
> **[1:29](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=89)** We can then do refactoring by improving the implementation without changing his behavior.
>
> **[1:36](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=96)** Let's create Student Repository Test Class, another first test method.
>
> **[1:42](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=102)** Test gets student by name, return student details.
>
> **[1:47](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=107)** We will use a given when, then met structure.
>
> **[1:52](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=112)** In the given part, We need to create new student.
>
> **[1:56](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=116)** Since student doesn't exist yet, we will create one with properties, ID, and name.
>
> **[2:04](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=124)** We could create getters and setters but what I like to use is project Lombok which removes the ball plate code.
>
> **[2:13](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=133)** Let's give our student object name Mark.
>
> **[2:16](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=136)** Now, the assumption is that ID will be autocreated per database.
>
> **[2:22](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=142)** Therefore we can leave it now.
>
> **[2:24](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=144)** Here we also need to persist our student.
>
> **[2:28](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=148)** Spring gives us a lot of options when it comes to interacting with DB, and the easiest way is to use GPA Repository.
>
> **[2:38](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=158)** We will create a new field, student repository, Student repository must be an interface and must extend GPA repository that manages the entity of type student with primary key of type log.
>
> **[2:58](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=178)** Keep in mind, this is just an interface and spring data provides the implementation for us.
>
> **[3:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=185)** In order for this to take effect we need to bring in spring to our test.
>
> **[3:10](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=190)** We could use spring boot test annotation, that loads the full application context.
>
> **[3:17](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=197)** However, we don't want to test the entire spring application.
>
> **[3:22](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=202)** What we only want to test is our data tier and for that, we will use Data GPA test.
>
> **[3:30](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=210)** Since we have spring in our tests, we can now inject student repository.
>
> **[3:36](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=216)** In one part, we still need to query students by name.
>
> **[3:41](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=221)** We will create a new query method, get students by name, which returns the student.
>
> **[3:47](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=227)** And what is left to do is verify that student is retrieved and contains ID that is not now, and name that is the same to saved student.
>
> **[4:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=240)** Now, our code compiles, let's see if our tests is going through.
>
> **[4:09](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=249)** It failed.
>
> **[4:12](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=252)** It failed because we didn't mark student class as entity.
>
> **[4:18](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=258)** We also need to tell GPA what is our ID and mark it as generated value since we expect it is out to generated by database.
>
> **[4:33](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=273)** Now, our test is passing however, we still have an undetected bug.
>
> **[4:40](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=280)** With GPA, we need to have a default constructor in our entity class.
>
> **[4:45](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=285)** With data test GPA and using repository, our changes are not flushed to the database and we aren't really interacting with the database, but with the first level cache of GPA repository.
>
> **[5:02](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=302)** Spring provides us with the convenient bin called Test Entity Manager.
>
> **[5:08](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=308)** With Test Entity Manager, we can use persist, flush find methods to force synchronization by inserting object to the database and detaching it.
>
> **[5:21](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=321)** Meaning, all new queries will be executed to a low fetching entities again.
>
> **[5:29](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=329)** After refactoring, our bug has not been detected, let's add a missing constructor.
>
> **[5:39](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=339)** And there we have it.
>
> **[5:41](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=341)** Let's run our test, and now it is green.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), interface (2), case, (1), class, (1), class. (1)
> **Env Vars:** gpa (7), tdd (1)
> **Definitions:** is called (2), known as (1)
> **CLI Commands:** make (1), find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Write tests for a custom query
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-tests-for-a-custom-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-tests-for-a-custom-query?u=76281980&t=0)** (soft music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-tests-for-a-custom-query?u=76281980&t=5)** - [Instructor] So far, we haven't really introduced any customizations.
>
> **[0:09](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-tests-for-a-custom-query?u=76281980&t=9)** And there is a very little risk involved that we have introduced bugs in our application.
>
> **[0:16](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-tests-for-a-custom-query?u=76281980&t=16)** In this challenge, we want you to create a custom query that is able to fetch average grades for active students.
>
> **[0:24](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-tests-for-a-custom-query?u=76281980&t=24)** First, you should extend the student class with new attributes boolean active and int grade.
>
> **[0:31](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-tests-for-a-custom-query?u=76281980&t=31)** Grade can be anything between zero and 100.
>
> **[0:35](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-tests-for-a-custom-query?u=76281980&t=35)** Next you'll write a failing test by pre-existing a couple of students and verifying average grade.
>
> **[0:43](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-tests-for-a-custom-query?u=76281980&t=43)** And finally write an implementation for a custom query.
>
> **[0:47](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-tests-for-a-custom-query?u=76281980&t=47)** This challenge should take about 5 to 10 minutes.
>
> **[0:51](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-tests-for-a-custom-query?u=76281980&t=51)** When you're done, or if you get stuck, you can check out my solution widow to see how I solved the challenge.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (soft music) (1)

#### Solution: Write tests for a custom query
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:06](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=6)** How did you make out with the challenge?
>
> **[0:09](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=9)** I hope you were successful.
>
> **[0:10](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=10)** I will walk you through my solution.
>
> **[0:13](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=13)** Now, it might look different than yours but that's fine as long as the outcome is the same.
>
> **[0:19](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=19)** First, we want to extend our student class with new attributes.
>
> **[0:25](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=25)** Boolean active and int grade.
>
> **[0:31](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=31)** If you don't have desired constructor what I like to use is builder (indistinct) that can be simply enabled with Project Lombok, by adding ed builder with (indistinct) students class.
>
> **[0:44](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=44)** Also in previous tests, we have used construct through which accepts ID and name, which is now missing.
>
> **[0:53](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=53)** So let's add that one as well.
>
> **[0:57](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=57)** Now, we are ready to write our failing tests.
>
> **[1:01](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=61)** We will name it getAvgGrade for active students calculatesAvg.
>
> **[1:08](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=68)** Again, I will structure my test with given, when, then.
>
> **[1:13](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=73)** In the given part, we want to create a couple of students.
>
> **[1:18](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=78)** First, we want to create student Mark, which is active and has grade 80.
>
> **[1:26](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=86)** Similar to Mark, we have students Susan that is also active but his grade set to 100.
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=94)** 3rd student is Peter, which is inactive.
>
> **[1:38](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=98)** And has grade 50, this student should not be counted into average grade calculator since he's inactive.
>
> **[1:47](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=107)** In the given part, we also want to persist our students.
>
> **[1:52](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=112)** What I like to do is use arrays as list and persist all three students Mark, Susan and Peter.
>
> **[2:03](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=123)** With persistFlushFind method.
>
> **[2:07](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=127)** Under when part we will invoke our new query method.
>
> **[2:12](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=132)** GetAvgGrade for active students which returns double.
>
> **[2:18](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=138)** Keep in mind at this point this method doesn't do anything yet So we will need to create one.
>
> **[2:24](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=144)** Leave the method for now.
>
> **[2:26](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=146)** And let's go to our test and write assertion on average grade.
>
> **[2:30](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=150)** Then average grade is equal to 90 since Peter and Susan are the only active students sum of their grades is 180.
>
> **[2:42](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=162)** So the average grade is equal to 90.
>
> **[2:46](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=166)** Notice, when we run the test we get a failed result.
>
> **[2:53](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=173)** Well, that is to be expected as we haven't written our implementation.
>
> **[2:59](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=179)** For implementing query, unfortunately, there is no option to write method name from which query can be derived as there is no support for average.
>
> **[3:11](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=191)** However, we can write a GPQL query.
>
> **[3:15](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=195)** Which is the query running against the entities which is similar to SQL.
>
> **[3:20](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=200)** Select avg, which is keyword for average grade from student where active equals true.
>
> **[3:32](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=212)** Now, if you have gone with native SQL option that is still fine.
>
> **[3:38](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=218)** As long as the result is the same.
>
> **[3:40](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=220)** When we re-run our test case we should get green result and there you have it.
>
> **[3:48](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=228)** We have just completed our solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), class. (1)
> **Code Identifiers:** getavggrade (1), calculatesavg (1), persistflushfind (1)
> **Env Vars:** sql (2), gpql (1)
> **Analogies:** similar to (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 3. Integration Testing Against Services with Caching Support

#### Writing integration tests for the service layer
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=0)** - [Instructor] As we are making our way through the layers, the next one we will tackle is the service layer.
>
> **[0:06](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=6)** Separation of concern, loose coupling, orchestration, caching, are just some of the benefits we will get from the service layer.
>
> **[0:16](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=16)** Now let's write our first integration test that involves interaction between the service and data layers.
>
> **[0:25](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=25)** We want to test that we are able to correctly fetch our student by making a request to the repository and assure the response is as expected.
>
> **[0:38](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=38)** So here we are going to create StudentsServiceTest, as this is an integration test, we'll use SpringBootTest annotation.
>
> **[0:47](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=47)** SpringBootTest works by reading configuration from SpringBootApplication and creates an application context very similar to the one that would be started in a production environment.
>
> **[1:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=60)** Because we have a full application context, including web controller services and spring data repositories, SpringBootTest is a very convenient for integration tests that go through all layers of the application, however, in this test, we want to isolate all the services and repositories, and since the WebEnvironment is available in a class puff, by default, SpringBootTest will load the mock WebEnvironment.
>
> **[1:29](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=89)** In order to prevent that, we need to add WebEnvironment equals NONE.
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=94)** Now we can create our Test method, getStudentByID_forSavedStudent_isReturned.
>
> **[1:42](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=102)** If we want to give a more meaningful description, we can also use junit five, DisplayName annotation.
>
> **[1:50](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=110)** In our example, returning saved student from service layer.
>
> **[1:55](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=115)** Again, we will organize our tests into given, when, then structure.
>
> **[2:02](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=122)** In the given part, we want to have our student already saved in our database, therefore we need to inject the student's repository, which we created in the previous chapter, and save a new student.
>
> **[2:16](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=136)** Now, we can call StudentRepository.save new Student.
>
> **[2:23](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=143)** Keep in mind that SpringBootTest does not contain transactional notation, like there's data GPI test slice, which means any interaction will not get rolled back.
>
> **[2:35](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=155)** This means that any interaction with DB stays persisted and can cause side effects for other tests running at the same time, so we need to add Transactional.
>
> **[2:47](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=167)** In the when part, we want to invoke studentService component by calling a new method that accepts student ID, and returns student.
>
> **[2:57](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=177)** We will call this method getStudentById, and provide ID for saved student.
>
> **[3:04](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=184)** Now, we will add a new field name, StudentService, and the type, studentService, and need to create a new class and market with service and rotation to be registered in the spring context.
>
> **[3:18](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=198)** What is left to do is create an implementation, so in StudentService, we need to create missing method.
>
> **[3:26](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=206)** At this moment, we don't care about implementation, so let's return now for now.
>
> **[3:32](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=212)** Remember we are doing red green refactor TDD.
>
> **[3:36](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=216)** In the test, we can now alter our StudentService and verify that the retrieved student does really contain the right name and ID, which is not Null.
>
> **[3:48](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=228)** Now let's run our test.
>
> **[3:52](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=232)** So, why did our tests fail?
>
> **[3:54](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=234)** Well, we haven't really called a repository.
>
> **[3:57](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=237)** Let's do that now.
>
> **[3:59](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=239)** We need to inject StudentRepository.
>
> **[4:02](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=242)** We'll use the required argsConstructor from lonbok to use constructor injection.
>
> **[4:08](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=248)** For retrieving a student, we will invoke findById method, which comes from GPA repository.
>
> **[4:17](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=257)** Since findById returns our students in Optional, we have many options how to deal with missing student.
>
> **[4:26](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=266)** For now, we can just return now in case student is not found.
>
> **[4:32](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=272)** Great, let's rerun our test.
>
> **[4:38](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=278)** And there we have it!
>
> **[4:40](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=280)** We have successfully created our first integration test involving both service and repository layer in our application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), default, (1), type, (1)
> **Code Identifiers:** studentservice (2), findbyid (2), getstudentbyid (1), argsconstructor (1)
> **Env Vars:** none (1), gpi (1), tdd (1), gpa (1)
> **Definitions:** is an  (1), is a  (1), means that (1)
> **Cross-References:** previous chapter (1)
> **Analogies:** similar to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Writing integration tests for cache
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=0)** - [Instructor] Ever wonder how to test a hard problem, like caching?
>
> **[0:04](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=4)** We use the cache, to protect the database or to avoid cost-intensive calculations.
>
> **[0:10](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=10)** And spring provides an abstraction layer, for implementing a cache.
>
> **[0:15](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=15)** But how do we ensure, that our cache is really working as expected?
>
> **[0:20](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=20)** What we need is to ensure in cases, when we are retrieving the same student from our service, we want to verify we are not hitting the database, every single time.
>
> **[0:32](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=32)** We will start, by creating a new test class.
>
> **[0:36](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=36)** And we will call it Student Cache Test.
>
> **[0:40](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=40)** Let's create new test method, and name it, Gets Students By ID, for multiple requests, is retrieved from cache.
>
> **[0:50](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=50)** In the given part, we will create some random student ID.
>
> **[0:56](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=56)** We need to inject student service in our test, and in the Web part, simulate, multiple requests to the service layer, by calling Gets Students By ID, multiple times for the same student ID.
>
> **[1:12](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=72)** Since we need to test interaction with a repository, this means, we need the kind of way to check how many times, our database has been called.
>
> **[1:21](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=81)** What we need is a Mock.
>
> **[1:23](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=83)** As a mocking framework, we'll use Mockito, since it's well-rounded ,well established and well integrated into spring boot.
>
> **[1:32](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=92)** With Mockito Extension Unit Test, we can use Mock and Spy ,to define mocked objects, and on the tested class at Inject Mock.
>
> **[1:41](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=101)** Mockito will then try to instantiate fields, annotated with inject mocks by passing all the mocks in Togo structure or by using Setter Injection.
>
> **[1:52](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=112)** However, there are times, when we have to rely on spring boot, to set up an application context for us, because it would be too much work , to instantiate classes manually.
>
> **[2:04](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=124)** And we want to have full benefit from Spring contexts, such as dependency injection or infrastructure support, such as caching or data access.
>
> **[2:15](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=135)** We may not want to test integration between all the beans in a certain test.
>
> **[2:20](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=140)** So we need a way to replace certain spring beans with a mock.
>
> **[2:24](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=144)** For example, we may depend on remote service, that is unavailable doing development.
>
> **[2:31](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=151)** Mocking is also useful, when we want to simulate , failures that might be hard to trigger, in a real environment.
>
> **[2:38](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=158)** Spring Boot provides, the Mock Bean and Spy Bean, annotations for this purpose.
>
> **[2:45](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=165)** The Spring Boot test support, will then automatically create a Mock or a Spy, and then edits to the application context, So we can then use Mockito given, when methods to mock behavior or verify interactions with our bean.
>
> **[3:01](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=181)** Since we need to rely on spring, to give us caching support, we will use spring boot test notation and insulate ourselves from web environment, by adding web environment equals none.
>
> **[3:13](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=193)** In order to verify interactions, we cannot use a real Bean.
>
> **[3:17](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=197)** We need mock one.
>
> **[3:18](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=198)** Therefore we will inject student repository, with mock bean annotation.
>
> **[3:23](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=203)** In the given part, we need to mock out, student repository dot find by ID behavior, as this is called from students service.
>
> **[3:32](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=212)** Let's use BDDMockito method , given for student repository dot find by ID call , for student ID, we'll return optional, of type student.
>
> **[3:46](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=226)** In the Den part, we will use the method from BDDMockito library, to verify that find by ID was called only once.
>
> **[3:56](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=236)** Quito, gives us times method, to assert how many times the method has been called.
>
> **[4:02](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=242)** Then, student repository should times one, meaning called only once, called method Find by ID.
>
> **[4:09](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=249)** Let's run our test.
>
> **[4:12](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=252)** Why did it fail?
>
> **[4:14](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=254)** It fails since we haven't added cache in support.
>
> **[4:17](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=257)** We can do that easily, by annotating gets students by ID method , with Cacheable, with cache key, set to students.
>
> **[4:27](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=267)** And by adding ,enable caching annotation , to the spring boot application , to use Embedded Spring Cache.
>
> **[4:36](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=276)** When we rerun our test, now it should pass.
>
> **[4:42](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=282)** And there you go, you've just mastered Integration Testing For Spring Cache.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), class. (1), assert (1), pass (1)
> **CLI Commands:** find (4)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is a  (1), is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Write an integration test for exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-an-integration-test-for-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-an-integration-test-for-exceptions?u=76281980&t=0)** - [Instructor] Up 'til now we have only tested happy path but what if things go wrong?
>
> **[0:11](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-an-integration-test-for-exceptions?u=76281980&t=11)** What about edge cases?
>
> **[0:13](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-an-integration-test-for-exceptions?u=76281980&t=13)** What if exceptions are thrown?
>
> **[0:15](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-an-integration-test-for-exceptions?u=76281980&t=15)** In this challenge, we want you to write an integration test for exceptions.
>
> **[0:21](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-an-integration-test-for-exceptions?u=76281980&t=21)** As Joshua Block stated in his book "Effective Java", "When used to the best advantage, "exceptions can improve a program's readability, "reliability, and maintainability."
>
> **[0:33](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-an-integration-test-for-exceptions?u=76281980&t=33)** In this challenge, we want you to write an integration test for a custom exception we will throw in our service layer.
>
> **[0:42](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-an-integration-test-for-exceptions?u=76281980&t=42)** In case when a student is not available, instead of returning null, your task is to throw a custom runtime exception, studentnotfoundexception.
>
> **[0:53](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-an-integration-test-for-exceptions?u=76281980&t=53)** I suggest you to take a TDD approach by first writing failing test, then implementing exception, and refactor implementation so a test passes.
>
> **[1:06](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-an-integration-test-for-exceptions?u=76281980&t=66)** This challenge should take about five to 10 minutes.
>
> **[1:09](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-an-integration-test-for-exceptions?u=76281980&t=69)** When you're done or you get stuck, you can check out my solution video to see how I solved the challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** throw (2)
> **Env Vars:** tdd (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Write an integration test for exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=0)** - [Instructor} How was the Challenge?
>
> **[0:07](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=7)** Did you struggle or was it easy?
>
> **[0:09](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=9)** Even though we had to change a few lines of code, testing exceptions is no easy thing to do.
>
> **[0:17](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=17)** I will walk you through the solution.
>
> **[0:19](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=19)** First, on Student Service Desk, we need to create new method.
>
> **[0:24](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=24)** Get student by ID when missing student not found exception thrown.
>
> **[0:31](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=31)** Again, let's use given-when-then structure.
>
> **[0:36](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=36)** Since we want to simulate missing data scenario we don't need to pre-populate our database with students.
>
> **[0:43](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=43)** We also don't need to mock out any behavior since you're dealing with a real repository.
>
> **[0:49](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=49)** We only need some random ID for which we know there is no student.
>
> **[0:54](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=54)** When it comes to asserting exceptions, AssertJ comes with many different styles and it's up to you which one you find most readable.
>
> **[1:03](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=63)** For example, we can use non-BDD style with assert that exception of type or with assert that thrown by where when and then are part of the same line of code.
>
> **[1:16](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=76)** If you prefer a BDD style, we can separate catching and asserting exception by using catch throwable and by using then or assert that method call.
>
> **[1:28](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=88)** Since the goal of this test is to verify when get student is involved for a missing student, a custom exception is thrown.
>
> **[1:38](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=98)** We can use catch throwable method from AssertJ to catch thrown exception.
>
> **[1:46](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=106)** Under then part we can use BDD assertions then or assert that method call and verify an exception is of type student not found exception.
>
> **[1:57](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=117)** Our compiler is complaining as we haven't created one yet.
>
> **[2:02](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=122)** Let's create a new class.
>
> **[2:04](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=124)** And the only thing left is to extend runtime exception.
>
> **[2:09](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=129)** Now we can run our test.
>
> **[2:19](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=139)** Since we haven't changed anything yet in students service clause, the test failed.
>
> **[2:24](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=144)** So let's change implementation and, as you probably know, optional gives us a lot of possibilities for handling missing objects.
>
> **[2:33](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=153)** Here we use the replacement object which is null.
>
> **[2:37](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=157)** So we can easily change this by replacing or else part with or else throw that accepts an exception supplier.
>
> **[2:45](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=165)** In our case, we will throw a student not found exception.
>
> **[2:50](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=170)** After re-running our test, it should be green.
>
> **[2:54](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=174)** Lets run it.
>
> **[2:55](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=175)** Congratulations, you've just learned how to use TDD to implement custom exceptions and different ways to use AssertJ to perform assertions.

> [!info]- Semantic Content
>
> **Code Keywords:** assert (4), let (3), throw (2), class. (1), case, (1)
> **Env Vars:** bdd (3), tdd (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Integration Testing Against a Web Controller

#### Which type of web controller responsibilities to test?
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=0)** - Testing Web Controllers is easy.
>
> **[0:02](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=2)** We can just call business logic and we're done, or maybe not, How do you ensure that endpoint is really exposed on a certain URL?
>
> **[0:11](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=11)** How can you ensure that proper validation has been performed?
>
> **[0:14](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=14)** And how can you prove that exceptions in your applications are translated into right messages and status code for the user?
>
> **[0:24](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=24)** As you can see, there are plenty of other responsibilities that are happening around the controller.
>
> **[0:30](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=30)** Let's review them and see how we can run our integration tests against them so we are more confident that our application is properly covered with testing.
>
> **[0:41](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=41)** Here's an example of a simple RestController.
>
> **[0:44](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=44)** For each request, the controller does the following.
>
> **[0:48](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=48)** First, listen to HTTP request, response to certain URLs, HTTP methods, and content types.
>
> **[0:57](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=57)** Two, deserialized input, pass the incoming HTTP requests and then create Java objects from variables in the URL, HTTP requests parameters and request body.
>
> **[1:09](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=69)** Three, validate input.
>
> **[1:12](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=72)** Controller checks if input is not valid.
>
> **[1:15](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=75)** Four, call the business logic.
>
> **[1:18](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=78)** After Parsing the input transforms it into a business model and parse it to a business logic.
>
> **[1:24](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=84)** Five, serialize the output takes the output of a business logic and serialize it into HTTP response.
>
> **[1:33](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=93)** Six, translate exceptions.
>
> **[1:35](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=95)** When exception occurse controller will translate it into HTTP status and error message for the user.
>
> **[1:43](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=103)** How are we going to write meaningful tests that cover all of those responsibilities?
>
> **[1:48](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=108)** If you use the Unit Test.
>
> **[1:50](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=110)** We will test the controller in isolation by mocking away any interactions with control dependencies for example, calling the service layer and at the end call controller methods and verify the proper response since the Unit Testing is not leveraging spring framework.
>
> **[2:08](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=128)** All of the stations and processing which are happening behind the scenes of spring get ignored.
>
> **[2:15](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=135)** And our controller is no longer a controller, but a plain cloth that involves the business logic.
>
> **[2:22](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=142)** As you can see, a simple Unit Test will not cover responsibilities.
>
> **[2:27](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=147)** So we need to introduce spring to our tests and integration tests with spring fires up a spring application context that contains all beans required for testing controller.
>
> **[2:40](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=160)** This includes beans responsible for URL napping, serializing, and deserializing to and from JSON and Java objects and translating exceptions to proper HTTP message and status code.
>
> **[2:54](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=174)** These beans will evaluate the notations that would be ignored by simple Unit Tests.
>
> **[3:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=180)** So, how can we do it?
>
> **[3:03](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=183)** with WebMvcTest and WebFluxTest Slices.
>
> **[3:07](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=187)** WebMvcTest loads components required for testing Mvc parts of application.
>
> **[3:14](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=194)** WebMvcTest also auto configures MockMvc.
>
> **[3:18](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=198)** MockMvc offers a powerful way to quickly test Mvc controllers without need to start a full HTTP server.
>
> **[3:28](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=208)** Web Slice will not cover testing service component or repository beans?
>
> **[3:34](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=214)** So it is often used in combination with MockBean to provide mock implementations for required collaborators.
>
> **[3:42](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=222)** If you're coding reactive applications with WebFlux there's also WebFluxTests which also AutoConfigures WebTestClient enabling testing Web Fluxe controllers without the need to fire up HTTP server.
>
> **[3:57](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=237)** However, if you still feel you want to run a test for the full application you can always use Spring Boot Test.
>
> **[4:06](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=246)** Spring Boot Test will by default load a Mock Web environment, but it can also be configured to run on a production environment.
>
> **[4:16](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=256)** You also have the power to use real dependencies.
>
> **[4:20](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=260)** But if you want, you can mock them out.
>
> **[4:22](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=262)** Just be careful not to overuse Spring Boot Test notation.
>
> **[4:27](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=267)** Otherwise, you might end up with slow running tests since full application context is started.

> [!info]- Semantic Content
>
> **Env Vars:** http (9), url (3), json (1)
> **Code Keywords:** let (1), pass (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - testing (1)

#### Writing integration tests for a web controller
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=0)** - [Instructor] Let's get started by writing a test for HTTP controller.
>
> **[0:04](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=4)** We will create a new student controller test.
>
> **[0:08](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=8)** We are going to test if we can correctly make a request to students service and get the response we expect.
>
> **[0:15](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=15)** We need to assert certain things about the shape of the response.
>
> **[0:20](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=20)** First, let's create student controller test class.
>
> **[0:25](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=25)** A simple unit test will not cover the HTTP layer so we need to bring Spring Boot to do HTTP magic for us.
>
> **[0:34](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=34)** We could use Spring Boot test but with web MVC test slides Spring fires up an application context that contains only the beans needed for testing a web controller.
>
> **[0:47](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=47)** These beans will evaluate the annotations that would be ignored by simple unit test.
>
> **[0:54](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=54)** We will use mock MVC Spring's MVC test braver to perform HTTP requests on the web in-points inside our mock web environment.
>
> **[1:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=65)** Since the mock MVC bean is loaded into the context we will be able to simply auto wire it for our use.
>
> **[1:14](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=74)** We will name our method get student for saved student is returned.
>
> **[1:23](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=83)** As we make our request by calling mock MVC perform with get method to students end point we expect that HTTP status will be okay.
>
> **[1:41](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=101)** Body will contain Jason for which we can use Jason path.
>
> **[1:46](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=106)** We want to prove that Jason will contain attribute ID with value one, name equal to Mark and will contain attribute grade with value 10.
>
> **[2:01](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=121)** Running the test should give us 404 status since we haven't implemented the controller yet.
>
> **[2:08](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=128)** Let's run our test.
>
> **[2:12](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=132)** There is no end point to talk to.
>
> **[2:14](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=134)** So let's create an end point.
>
> **[2:16](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=136)** We will create the class student controller and annotate it with rest controller.
>
> **[2:23](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=143)** First thing we need to take care of is to create new method get student that accepts ID as parameter and returns a student.
>
> **[2:33](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=153)** We will return now for now.
>
> **[2:35](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=155)** We also need to annotate our method with get mapping and add students end point that accepts ID as a path variable and maps it to long ID parameter.
>
> **[2:49](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=169)** Let's rerun our test.
>
> **[2:54](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=174)** As we can see right now the controller is handling the request but is returning a null.
>
> **[3:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=180)** For every failure we get, we have to do minimal code changes that make the next assertion go green because this is a test slide where we easily did only the web tier from everything else.
>
> **[3:12](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=192)** The collaborating object student service was not available.
>
> **[3:17](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=197)** We need to provide that object as a mock.
>
> **[3:20](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=200)** So we are going to add student service and annotate it with a mock bean annotation and mock its behavior.
>
> **[3:30](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=210)** The way mock bean works is it try to find any bean in the application context of its type.
>
> **[3:37](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=217)** If it exists, it will replace it.
>
> **[3:39](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=219)** If it doesn't exist, it will add it.
>
> **[3:42](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=222)** Given students service dot get student by ID for any long will return a new student with ID one, name Mark and grade 10.
>
> **[4:04](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=244)** This test would still fail.
>
> **[4:06](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=246)** We are not using student service in our controller so let's go ahead and use it.
>
> **[4:12](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=252)** Let's add student service bean.
>
> **[4:17](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=257)** Keep in mind all this favor constructor injection over filled injection.
>
> **[4:22](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=262)** Therefore, I will make this dependency private final and we need to invoke get student by ID method which returns a student.
>
> **[4:35](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=275)** Let's rerun our test and there you have it.
>
> **[4:39](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=279)** We got our green test.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), assert (1), class. (1), else. (1), type. (1)
> **Env Vars:** http (5), mvc (5)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Testing custom exception returns
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=0)** - [Instructor] Spring Boot comes with some great features to help with error handling.
>
> **[0:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=5)** But it is left to the developer to use those features the three the exceptions and return meaningful responses to the API client.
>
> **[0:15](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=15)** Let's fire up our application and see how we are handling cases when somebody is looking for a research that is not found.
>
> **[0:25](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=25)** What will happen when we try to retrieve a student that does not exist.
>
> **[0:30](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=30)** So to do that, we need to call the following rest endpoint.
>
> **[0:34](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=34)** Get students ID.
>
> **[0:37](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=37)** Well, the default error representation looks a little bit messy and misleading, right?
>
> **[0:45](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=45)** 500 is not the right code to describe that the requested resource is not found.
>
> **[0:52](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=52)** Each should be 404.
>
> **[0:54](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=54)** Internal server error does not provide any meaningful information to the API consumers.
>
> **[1:01](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=61)** Exposing 500 internal server errors to the clients is not a good practice at all.
>
> **[1:08](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=68)** So, to handle our errors properly we need to customize the default Spring Boot API error response with a meaningful message indicating what went wrong and a proper status code based on the context.
>
> **[1:25](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=85)** So let's create a new test for the case when a student is missing.
>
> **[1:30](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=90)** We will use (indistinct) and Mockito to write an integration test one exception is thrown and verify that the proper HTTP status is returned.
>
> **[1:42](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=102)** We will first create a new test method in student control test.
>
> **[1:47](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=107)** Called getStudent_forMissingStudent_ status404.
>
> **[1:53](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=113)** Since this is a slice test and we're using mock students service we need to mock a behavior to draw an exception.
>
> **[2:02](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=122)** Recall from the service layer test exercise.
>
> **[2:06](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=126)** We have already created a custom student not found exception, so we need to mock (indistinct) it in a case of a missing student.
>
> **[2:15](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=135)** We can do that with mockitos method will throw students not found exception.
>
> **[2:25](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=145)** Now we just need to invoke students and point with any ID.
>
> **[2:30](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=150)** And this time assert that expect the status is not found.
>
> **[2:39](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=159)** If we run our test we will see that instead of 404 we get, a student not found exception.
>
> **[2:50](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=170)** Let's explore two simple ways we can implement custom mapping.
>
> **[2:55](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=175)** One, is by creating an exception handler.
>
> **[2:59](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=179)** We can define new method.
>
> **[3:02](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=182)** Void students not found exception that accepts exception as method argument and annotate it with exception handler and response status to map this exception to 404 not found status code.
>
> **[3:25](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=205)** Another way, instead of an exception handler we could have just annotated our exception with response status and status is not found that would have worked too.
>
> **[3:41](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=221)** When we re-run our test, we can see that we got green.
>
> **[3:50](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=230)** Communicating meaningful responses in case of exceptions is a crucial part when designing arrests API and together with Spring Boot support and more can we (indistinct) we can easily verify and implement such behaviors.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), throw (1), assert (1)
> **Env Vars:** api (4), http (1)
> **Definitions:** is a  (2)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)


### 5. Integration Testing for the Client App

#### Integration testing without making an external API call
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=0)** - [Instructor] How can you counter integration testing for code that interacts with an external API?
>
> **[0:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=5)** Imagine you have a component that's talking to another service and the service that you're calling in production environment, just isn't available to you in your test environment.
>
> **[0:18](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=18)** Calling a staged version would be a better option but often you don't have it offered.
>
> **[0:24](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=24)** For example, you're calling a live service like YouTube, Google, Facebook or Twitter API.
>
> **[0:32](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=32)** APIs such as these have rate limits.
>
> **[0:35](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=35)** So when you're running the tests you could exceed rate limits and your tests would fail or you would need to be careful not to exceed your rate limit and incur additional expenses.
>
> **[0:48](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=48)** Then you also need to worry about storing credentials somewhere for your test use and it ends up way too complicated.
>
> **[0:57](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=57)** Your best option is to mock out the service that you're calling.
>
> **[1:01](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=61)** In the Spring world, we use the rest template or a WebClient to interact with external APIs.
>
> **[1:08](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=68)** You could mock out rest template by mocking rest template interfaces.
>
> **[1:13](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=73)** Set a bunch of expectations by using mock it or for particular URI and entity.
>
> **[1:19](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=79)** Define what kind of response will get returned but there is a lot of risk involved in making a mistake.
>
> **[1:27](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=87)** You could make a mistake in the URI or when substituting path variables or when you're mocking message conversion logic.
>
> **[1:36](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=96)** A better option is to use rest client test slides which comes with a pre-configured mock rest service server.
>
> **[1:43](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=103)** Mock rest service server provides a way to set up expected requests that will be performed through the rest template, as well as mock responses to send back thus removing the need for actual server.
>
> **[1:59](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=119)** In the same way, we could take an existing service API like YouTube, Twitter we are interacting with, take their requests and responses and map those to our mock rest service server which gives us a higher degree of confidence that a rest template is making right calls to external API.
>
> **[2:22](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=142)** However, usage of a mock rest service server is limited only to rest template.
>
> **[2:28](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=148)** If you are using WebClient things get even more challenging.
>
> **[2:33](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=153)** This is because the WebClient is a fluent API where a lot of objects pause between the calling code and the mock.
>
> **[2:42](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=162)** As we can see, we need to provide a different mock object for each call in the chain.
>
> **[2:48](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=168)** This is verbose and cumbersome.
>
> **[2:50](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=170)** It also requires us to know the implementation details of how exactly our service uses WebClient making this a brittle way of testing.
>
> **[3:01](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=181)** So what should we use?
>
> **[3:04](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=184)** The Spring team recommends using OkHTTPS mock web server or WireMock.
>
> **[3:11](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=191)** In a similar way, to mock rest service server you can set up expectations but unlike mock rest service server it is exposed or HTTP.
>
> **[3:23](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=203)** Instead of using some sort of mock with predetermined responses, you get to keep the HTTP client underneath which leads to more complete testing.
>
> **[3:34](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=214)** Over an actual socket it's more natural to simulate slow network conditions, chunked responses and then in turn to test the impact with the actual HTTP client in charge of processing content on the wire.

> [!info]- Semantic Content
>
> **Env Vars:** api (5), http (3), uri (2)
> **Exercise Files:** template (6)
> **Analogies:** imagine (1), for example (1), such as (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Writing integration tests for rest endpoints
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=0)** - [Instructor] So far, we have written a student service app with integration tests covering all layers, but how can we ensure it can be consumed by other applications?
>
> **[0:11](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=11)** Let's dive in and write a consumer for a service and see how we can write a meaningful integration test even when the student service is not available.
>
> **[0:23](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=23)** Head over to start.[spring.io](https://spring.io).
>
> **[0:26](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=26)** As the Group name, choose com.linkedIn and as the Artifact use student-client.
>
> **[0:35](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=35)** We can leave other configurations as default, choose Java 15.
>
> **[0:40](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=40)** In the dependencies select Project lombok, Spring Reactive Web and stub runner click on generate go to downloads directory and open it between your ID.
>
> **[1:02](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=62)** This is our client application.
>
> **[1:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=65)** We'll start by first writing a test that can create a client which can talk to our service.
>
> **[1:13](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=73)** Using the TDD approach, we first need to write a failing test.
>
> **[1:17](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=77)** Let's create a new class student client test and annotate it with Spring Boot test we will need a student client that will talk to our service.
>
> **[1:33](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=93)** Since it doesn't exist we will create one and annotate it with add component so it is registered by Spring.
>
> **[1:44](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=104)** We need a new test method get student for given student is returned.
>
> **[1:54](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=114)** Under given part, we will create random ID.
>
> **[2:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=120)** Under when part, we will call our client with client dot get student and provide student ID.
>
> **[2:11](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=131)** As the response, we expect to get back a student object.
>
> **[2:16](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=136)** The student type and method don't exist yet so we will create them.
>
> **[2:21](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=141)** For now, we can return null.
>
> **[2:25](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=145)** For student class, we will add the same fields like ID, a student name and grade plus lombok connotations.
>
> **[2:41](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=161)** Let's assert certain things about the response.
>
> **[2:44](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=164)** We expect the student ID will not be null.
>
> **[2:50](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=170)** Student name equal to Mark and grade equal to 10.
>
> **[2:57](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=177)** If we run our tests, we know it will fail because in a client we are returning null.
>
> **[3:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=185)** We will use WebClient since the rest template will be deprecated in the future versions of Spring.
>
> **[3:12](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=192)** We'll also include required args constructor from project lombok to handle construction injection.
>
> **[3:20](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=200)** Now we can write WebClient dot get dot URI slash student slash ID as a parameter and just to finish our call, we expect a type of student class.
>
> **[3:37](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=217)** Note that WebClient by default wraps our object to Mono and Flux wrappers.
>
> **[3:44](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=224)** Since our student service API is non reactive then Flux and Mono are not much use for us so we can unwrap them by calling block which blocks the stream and gets data out of it.
>
> **[3:58](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=238)** In order for this to work, we need to configure our bean for our WebClient.
>
> **[4:04](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=244)** We can do that in a student client application class we need to inject a WebClient builder to configure it and set the domain and port of the service.
>
> **[4:18](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=258)** We could configure domain and port in application property but for now it's fine if we leave it hard-coded.
>
> **[4:29](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=269)** Now let's try again running our test.
>
> **[4:37](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=277)** Notice what happens.
>
> **[4:38](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=278)** We get connection refused and it is obvious why our student service application is not running.
>
> **[4:46](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=286)** We could run it by firing up another intelligent but what if we have 10 different services?
>
> **[4:53](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=293)** Would you fire up those as well?
>
> **[4:55](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=295)** Or what if you are depending on a service that is in a cloud environment but it is either unavailable or unreachable from our test?
>
> **[5:04](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=304)** So what should we do?
>
> **[5:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=305)** The obvious thing to do is run a mock but not just any mock.
>
> **[5:12](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=312)** We need a mock on HTTP level.
>
> **[5:15](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=315)** This is where WireMock can support us.
>
> **[5:18](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=318)** We just need to configure auto configure WireMock which by default uses port 8080, we can overwrite it if we want to.
>
> **[5:29](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=329)** Stub for get students slash plus ID will return Okay Jason, I love this fluent API from WireMock.
>
> **[5:44](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=344)** As in a few lines of code, we can easily create a stub.
>
> **[5:49](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=349)** Also with Java 15, we get a text block support plus with intelligent and James Jason reference and we can easily write Jason response.
>
> **[6:01](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=361)** Now that we have everything ready, let's fire up our test again and there you have it.
>
> **[6:09](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=369)** We have just proved our client application working.
>
> **[6:13](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=373)** We have a green client.
>
> **[6:15](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=375)** We have a green service.
>
> **[6:17](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=377)** Everything seems working, right?
>
> **[6:20](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=380)** Well, not exactly.
>
> **[6:22](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=382)** Did you notice the bug on the client side resume the collaborating object has student name?
>
> **[6:30](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=390)** While the service provides just the name, this can happen quite often.
>
> **[6:36](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=396)** One team can change collaborating objects without being aware it is affecting other client's applications.
>
> **[6:43](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=403)** Later we're going to follow up on this example and learn how to mitigate such issues in a microservice environment.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), default, (1), class, (1), assert (1), class. (1)
> **Env Vars:** api (2), tdd (1), uri (1), http (1)
> **Prerequisites:** configure (5)
> **Versions:** java 15 (2)
> **UI Navigation:** click on (1), go to (1)
> **Code Identifiers:** linkedin (1)
> **URLs:** [spring.io](https://spring.io) (1)
> **Ports:** port 8080 (1)

#### Introduction to Spring Cloud Contract
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=0)** - [Narrator] We have written Green Tests for both web and client applications yet there is still a bug.
>
> **[0:07](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=7)** How can you ensure that the contract between the consumer and the producer of the API works?
>
> **[0:13](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=13)** To make things more interesting, imagine your application is dependent on 10 different services in the microservice environment.
>
> **[0:22](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=22)** How would you test integrations between them?
>
> **[0:26](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=26)** Would you deploy all microservices in the same environment and run an end to end test?
>
> **[0:32](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=32)** Or would you use something like WireMock to mock out other services?
>
> **[0:37](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=37)** Both come with their advantages and disadvantages.
>
> **[0:41](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=41)** If we deploy all microservices and perform end to end we get the benefit of testing real communication between services which is as close as it gets to simulating production.
>
> **[0:56](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=56)** But this comes at high price of having dedicated infrastructure with all servers, databases, and other dependencies.
>
> **[1:06](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=66)** These tests can also be slow and flaky, meaning hard to debug and not so reliable in case data is inconsistent.
>
> **[1:16](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=76)** In this case, the second approach with mocking might sound like a better idea.
>
> **[1:21](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=81)** We get very fast feedback and no infrastructure requirements.
>
> **[1:26](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=86)** However, we have seen that the mocking service might not be aligned with real service, which can give us false assurance that everything is fine.
>
> **[1:37](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=97)** To solve this issue, Spring Cloud Contract was created.
>
> **[1:41](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=101)** The main idea of the Spring Cloud Contract is to give you very fast feedback without the need to set up the whole world of microservices.
>
> **[1:52](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=112)** Client applications work with stubs.
>
> **[1:55](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=115)** However, we get certainty that the stubs that we use in our client application consumer.
>
> **[2:02](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=122)** were created by the service producer recall, but how does it all work?
>
> **[2:08](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=128)** Imagine that before two applications communicate with each other, they've formalized a way they send and receive messages.
>
> **[2:18](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=138)** On the producer side, we can define contract in Java, Groovy, Kotlin and YAML by specifying expected request and response.
>
> **[2:29](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=149)** Second, in order for this contract to have an effect, Spring Cloud Maven Plugin will read contract definitions and generate tests.
>
> **[2:39](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=159)** We also need to define this class for a test, which contains all the setup information necessary to run the tests.
>
> **[2:48](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=168)** For example, mocking out service layer.
>
> **[2:51](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=171)** Once our tests are passing and verified, both the application and the WireMock stubs are installed on the local or upload it to Maven manager such as Nexus or Artifactory.
>
> **[3:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=185)** Now, let's explore how we can change the consumer side test to reuse those stubs.
>
> **[3:13](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=193)** Spring Cloud Contract comes with a component called a stub runner.
>
> **[3:18](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=198)** It comes with auto configure stub runner annotation, in which we need to define artifact coordinates such as stub storage, artifactId and port number.
>
> **[3:30](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=210)** Stub runner will fetch the stub from various locations and the HTTP server stub will get started on defined ports.
>
> **[3:40](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=220)** Our client tests can now reference the stub server directly.
>
> **[3:45](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=225)** So what's the outcome of such an approach?
>
> **[3:49](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=229)** As consumers, we will fail fast if they are not in sync with producer.
>
> **[3:55](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=235)** As producers we can see if our code changes are not breaking the contracts we have made with our client.
>
> **[4:02](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=242)** This approach is called consumer-driven construct testing.

> [!info]- Semantic Content
>
> **Analogies:** imagine (2), such as (2), for example (1)
> **Env Vars:** api (1), yaml (1), http (1)
> **Prerequisites:** set up (1), setup (1), configure (1)
> **Code Keywords:** case, (1), let (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** artifactid (1)
> **Definitions:** is called (1)
> **Speakers:** - [narrator] (1)

#### Ensuring client app (rest call) and web app (controller) are in sync
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=0)** - [Instructor] We have our service and client integration test on both end screen.
>
> **[0:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=5)** But since they deviate in one or three bit name, they won't be able to work together.
>
> **[0:10](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=10)** We want to make sure that any change on the service immediately impacts the client with a failing test.
>
> **[0:17](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=17)** One way to get such assurance is by using Spring Cloud Contract.
>
> **[0:23](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=23)** We will go ahead and define a contract in Groovy.
>
> **[0:26](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=26)** In our students service application, under test, resources, contracts, we will create a new file, Should Return Student.groovy.
>
> **[0:40](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=40)** This is the default directory where spring scans for all contracts.
>
> **[0:45](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=45)** Don't be alarmed if you have not used Groovy before.
>
> **[0:48](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=48)** Knowledge of the language is not really needed as DSL is statically typed to make it programmer readable without any knowledge of the DSL itself.
>
> **[0:59](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=59)** Let's start by typing contract.make.
>
> **[1:04](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=64)** First we add the description, should return a student.
>
> **[1:11](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=71)** Then in the request, where we are going to define what a request will look like.
>
> **[1:16](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=76)** We expect method of type get, and we'll arrive on the /students/1.
>
> **[1:25](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=85)** And then we describe how response would look like.
>
> **[1:28](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=88)** First by adding HTTP status, OK.
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=94)** and content type application JSON.
>
> **[1:38](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=98)** Underbody, we can define response as JSON literal, or as an object which gets converted to JSON.
>
> **[1:48](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=108)** Spring Cloud Contract provides the Maven plugin.
>
> **[1:51](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=111)** And when running our Maven test score, this is going to read our contract and create an integration test.
>
> **[1:59](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=119)** Since we're using MockMVC to verify our integration tests, we need to tell our Spring Cloud Contract plugin to use MockMVC as test mode.
>
> **[2:12](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=132)** Let's run a Maven test call.
>
> **[2:17](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=137)** Notice that our test failed but reached one.
>
> **[2:21](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=141)** Noticed the class name Contract Verifier Test failed.
>
> **[2:25](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=145)** We didn't write this class.
>
> **[2:27](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=147)** it was generated by Spring Cloud Contract.
>
> **[2:30](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=150)** We can open it in IntelliJ and see that it contains test method for API.
>
> **[2:38](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=158)** Each failed because this is just a unit test.
>
> **[2:42](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=162)** In order to fix it, it needs to be extend base class where we can set up spring integration test and Mock behavior.
>
> **[2:51](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=171)** Since we don't have our base class yet, let's create one and call it Student Controller Base Class.
>
> **[3:01](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=181)** In the Base Class, we need to do similar setup as we did in previous integration test.
>
> **[3:07](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=187)** And that means, first, by setting up web MVC test slides, and second mock out student service get used by the end points.
>
> **[3:19](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=199)** We can just copy paste the same configuration from the previous integration test, and add it within the new method which needs to run before each test.
>
> **[3:32](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=212)** Let's call this method before, an annotated with before each.
>
> **[3:37](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=217)** We also need to pass MockMVC bean by calling rest assured MockMVC.mockMVC
>
> **[3:51](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=231)** We're not done yet.
>
> **[3:53](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=233)** Between Maven plugin, we need to point out where is the Base Class.
>
> **[4:01](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=241)** Now, let's rerun Maven clean and install.
>
> **[4:08](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=248)** And we see it worked.
>
> **[4:10](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=250)** Apart from running the test in a local main repository, it also stopped three things.
>
> **[4:17](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=257)** Our students service jar, students service pom, and students service stubs jar which contains WireMock stub, we can use on the client's side.
>
> **[4:29](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=269)** Producer side is done, we can now go to students-client application and use that stub.
>
> **[4:36](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=276)** Since the stub will create an end point for us, we don't need to mock out responses in our client.
>
> **[4:43](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=283)** We can just get rid of out to configure WireMock annotation and to stop configuration.
>
> **[4:49](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=289)** What we need is stub runner, Here in the annotation, we need to put out to configure Stub runner and provide me even coordinates for a construct definition, so it knows from where to pull this stub from.
>
> **[5:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=305)** This means providing ID of artifact.
>
> **[5:09](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=309)** We will use plus to find the latest version and run it on port 8080.
>
> **[5:14](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=314)** Make sure port is aligned with the port used by web client.
>
> **[5:19](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=319)** Now we can run test again and we see it failed.
>
> **[5:26](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=326)** It failed because our test was not able to find value for students name.
>
> **[5:32](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=332)** Let's fix it easily by changing from student name to name.
>
> **[5:40](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=340)** Rerun our test.
>
> **[5:47](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=347)** And there you have it, our test passed.
>
> **[5:50](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=350)** It was fast, we didn't need to mock up anything and it caught the bug we introduced earlier.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), class. (3), class, (1), pass (1), from. (1)
> **Env Vars:** json (3), dsl (2), http (1), api (1), mvc (1)
> **CLI Commands:** make (4), find (2)
> **Prerequisites:** configure (2), set up (1), setup (1), install (1)
> **Code Identifiers:** mockmvc (1)
> **Ports:** port 8080 (1)
> **Tools:** intellij (1)
> **UI Navigation:** go to (1)


### Conclusion

#### More Spring Boot integration testing resources
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/more-spring-boot-integration-testing-resources-10133853?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/more-spring-boot-integration-testing-resources-10133853?u=76281980&t=0)** - [Instructor] I hope you enjoyed the course, and now have a solid foundation of integration testing with Spring Boot.
>
> **[0:07](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/more-spring-boot-integration-testing-resources-10133853?u=76281980&t=7)** A good next step would be to look into our library for more Spring Boot programming courses.
>
> **[0:13](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/more-spring-boot-integration-testing-resources-10133853?u=76281980&t=13)** I want to wrap up by saying thank you.
>
> **[0:17](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/more-spring-boot-integration-testing-resources-10133853?u=76281980&t=17)** You have devoted time to learning this material with me, and I want you to know that I don't take that for granted.
>
> **[0:24](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/more-spring-boot-integration-testing-resources-10133853?u=76281980&t=24)** I really do appreciate your engagement, as well as your feedback on this course.
>
> **[0:29](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/more-spring-boot-integration-testing-resources-10133853?u=76281980&t=29)** If you enjoyed this course, I'd love to know.
>
> **[0:32](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/more-spring-boot-integration-testing-resources-10133853?u=76281980&t=32)** Find me on LinkedIn, and let met know how you are doing integration testing within your organization.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Building Your Skills in Spring Development]]
← [[Spring Framework in Depth]] | **4 of 4**

### In [[Advance Your Spring Development Skills]]
← [[Advanced Spring- Application Events]] | **6 of 6**

## Appears In

- [[Building Your Skills in Spring Development]]
- [[Advance Your Spring Development Skills]]

## Related Courses

_Courses sharing skills:_

- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Spring Boot
- [[Advanced Spring- Spring Boot Actuator]] — Spring Boot
- [[Spring Boot Observability- Deep Dive into Logging, Metrics, and Tracing]] — Spring Boot
- [[Spring On Kubernetes Deploying And Managing Cloud Native Applications]] — Spring Boot
- [[Spring 6- Spring Security]] — Spring Boot
