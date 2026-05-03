---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
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
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQG2UdkVhaQJXQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1614197905403?e=2147483647&amp;v=beta&amp;t=LZJsPStGZctcDG14_uwJtIrdmMsYBsuP525HgtVWZgA"
linkedin_topic: Software Development
learning_paths:
  - '[[Building Your Skills in Spring Development]]'
  - '[[Advance Your Spring Development Skills]]'
prev_courses:
  - '[[Spring Framework in Depth]]'
  - '[[Advanced Spring- Application Events]]'
path_nav: '[{"path":"Building Your Skills in Spring Development","position":4,"total":4,"prev":"Spring Framework in Depth","next":null},{"path":"Advance Your Spring Development Skills","position":6,"total":6,"prev":"Advanced Spring- Application Events","next":null}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/cloud-computing
  - topic/database-management
  - topic/web-development
  - skill/integration-testing
  - skill/spring-boot
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Advanced%20Spring-%20Effective%20Integration%20Testing%20with%20Spring%20Boot.md)

![Advanced Spring: Effective Integration Testing with Spring Boot](https://media.licdn.com/dms/image/v2/C4D0DAQG2UdkVhaQJXQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1614197905403?e=2147483647&amp;v=beta&amp;t=LZJsPStGZctcDG14_uwJtIrdmMsYBsuP525HgtVWZgA)

# Advanced Spring: Effective Integration Testing with Spring Boot

> Writing and running tests is an essential part of delivering reliable software, but we don’t always do so as efficiently as we could. Have you ever been in a situation where all the tests pass, yet the application still doesn’t work? In this course, instructor Terezija Semenski gets you up to speed on how to take advantage of advanced testing features in Spring Boot. Terezija explains the importan

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot) | 1h 14m | Advanced | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Take advantage of Spring events](#take-advantage-of-spring-events)
  - [What you need to know](#what-you-need-to-know)
  - [Why bother testing?](#why-bother-testing)
- [**1. Explore the Power of Spring Boot Libraries**](#1-explore-the-power-of-spring-boot-libraries) (2 videos)
  - [Creating a Spring Boot application from start.spring.io](#creating-a-spring-boot-application-from-startspringio)
  - [Creating human-readable tests with Mockito and AssertJ](#creating-human-readable-tests-with-mockito-and-assertj)
- [**2. Integration Testing Against a Real Database**](#2-integration-testing-against-a-real-database) (4 videos)
  - [Effective ways to test your data access](#effective-ways-to-test-your-data-access)
  - [Writing integration tests for a JPA repository](#writing-integration-tests-for-a-jpa-repository)
  - [Challenge: Write tests for a custom query](#challenge-write-tests-for-a-custom-query)
  - [Solution: Write tests for a custom query](#solution-write-tests-for-a-custom-query)
- [**3. Integration Testing Against Services with Caching Support**](#3-integration-testing-against-services-with-caching-support) (4 videos)
  - [Writing integration tests for the service layer](#writing-integration-tests-for-the-service-layer)
  - [Writing integration tests for cache](#writing-integration-tests-for-cache)
  - [Challenge: Write an integration test for exceptions](#challenge-write-an-integration-test-for-exceptions)
  - [Solution: Write an integration test for exceptions](#solution-write-an-integration-test-for-exceptions)
- [**4. Integration Testing Against a Web Controller**](#4-integration-testing-against-a-web-controller) (3 videos)
  - [Which type of web controller responsibilities to test?](#which-type-of-web-controller-responsibilities-to-test)
  - [Writing integration tests for a web controller](#writing-integration-tests-for-a-web-controller)
  - [Testing custom exception returns](#testing-custom-exception-returns)
- [**5. Integration Testing for the Client App**](#5-integration-testing-for-the-client-app) (4 videos)
  - [Integration testing without making an external API call](#integration-testing-without-making-an-external-api-call)
  - [Writing integration tests for rest endpoints](#writing-integration-tests-for-rest-endpoints)
  - [Introduction to Spring Cloud Contract](#introduction-to-spring-cloud-contract)
  - [Ensuring client app (rest call) and web app (controller) are in sync](#ensuring-client-app-rest-call-and-web-app-controller-are-in-sync)
- [**Conclusion**](#conclusion) (1 videos)
  - [More Spring Boot integration testing resources](#more-spring-boot-integration-testing-resources)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Take advantage of Spring events](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/take-advantage-of-spring-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/take-advantage-of-spring-events?u=76281980&t=0)** - In my course, I will teach you [[Spring Boot]]'s advanced testing features to test some tricky real-world scenarios, such as [[Database Queries]], caching, web layers, and testing in microservice environments. Hi, I'm Terezija Semenski. I've been a software developer in [[Java]] and Spring for over a decade. The best way to run [[Integration Testing]] is to jump right in, so let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (1), [[Database Queries]] (1), [[Java]] (1), [[Integration Testing]] (1)
> **Analogies:** such as (1)
> **Speakers:** - in (1)

#### [What you need to know](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/what-you-need-to-know?u=76281980&t=0)** - [Narrator] Before starting this course, let's explore what skills and knowledge you will need. This course is targeted at intermediate and advanced developers. In order to truly be successful in this course, you should have experienced with [[Java]] and a solid understanding of [[Spring Framework]] and [[Spring Boot]]. It'll also be helpful to have some exposure to [[Functional Programming]], and streams and lambdas that were introduced with Java 8. Previous experience with [[JUnit]] testing is nice to have, but since we will be doing hands on exercises from scratch, you will quickly pick up the essentials. Our focus will be on the latest versions of Java 15 and Spring Boot, current 2.4 with supporting APIs. Throughout this course, we will be using IntelliJ IDE, but any Java IDE is sufficient with this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (4), [[Spring Boot]] (2), [[Spring Framework]] (1), [[Functional Programming]] (1), [[JUnit]] (1)
> **Versions:** java 8 (1), java 15 (1), 2.4 (1)
> **Env Vars:** ide (2)
> **Tools:** intellij (1)
> **Speakers:** - [narrator] (1)

#### [Why bother testing?](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=0)** - [Narrator] [[Spring Boot]] applications are built in multiple layers data, service and web. In [[Unit Testing]], we test each of these layers independently. For example, we test the web controllers that mock out the business services. But how do we test to ensure all these layers work well when combined together? How do we test other web controller responsibilities such as input validation or exception handling? Or how do we test integrations with external systems such as database custom queries or using external API? This is where integration tests come into play. Before we start into integration tests with Spring Boot let's define what sets an integration test apart from a unit test. A unit test targets a small unit of code for example, a method or a class. Any dependencies are removed from unit tests like replacing the dependency with a test implementation or a mock object created by test framework. An integration test on the other hand can be anything of the following, a test that covers multiple units because it tests the interaction between two or more components which is spring we refer to spring beans. A test that covers multiple layers. This is actually a specialization of the first case and might cover the interaction
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/why-bother-testing?u=76281980&t=94)** between a web controller and a service layer or a business service, and a persistence layer. A test that covers the whole path for the application. In this test, we send the request to the application and check that it responds correctly and has changed the database state according to our expectations. A test that requires an interaction with external systems such as database SFTP server, other API endpoints. So whenever we are moving beyond unit testing and start [[Integration Testing]], we should use SpringBootTest support to create an application context containing all the objects we need for all the above test types. As you progress through the course we will explore SpringBootTest libraries. Learn some three key real world testing scenarios such as testing with real database, testing service layer with caching support, web layers and testing in micro serviced environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (2), [[Unit Testing]] (2), [[Integration Testing]] (1)
> **Analogies:** such as (3), for example (2)
> **Env Vars:** api (2), sftp (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [narrator] (1)


### 1. Explore the Power of Spring Boot Libraries

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a Spring Boot application from start.spring.io](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=0)** - [Instructor] Writing good tests can be considered an art that is hard to master, but the good news is that the mechanics supporting it are easy to learn. In this lesson, we're going to create our first application, called Students Service, and explore the powerful set of [[Spring Boot]]'s including libraries that make our tests straightforward and easy to implement. Creating Spring Boot applications can be done in many ways, but one of the easiest is to head off to start.[spring.io](https://spring.io). This is the initializer web application where we can choose many of the options that we will use to create our first application, called Student Service. We can leave most of default options, like using Maven Project, [[Java]] as our language, and latent Spring Boot dependency. Now, we are going to populate the group. Let's use com.[[LinkedIn]]. As an artifact, we need to set it to Student Service. Leave the packaging as a .jar, since with this option we have the benefit of embedded Tomcat, which we will need considering we are building [[Representational State Transfer (REST)|REST]] service. As the Java version, we will choose the latest Java 15. However, examples are also compatible from Java 11, which provides long-term support. In the dependencies we will bring Lombok, which makes Java less cluttered with code. We're going to add Spring Web, [[Spring Data]] GPA Support, embedded H2 database, and contract verifier.
>
> **[1:39](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-a-spring-boot-application-from-start-spring-io?u=76281980&t=99)** Click on Generate. Let's open the Download directory, unzip the generated project, and open it in the IDE, either from terminal or from Java IDE. I'm using IntelliJ IDEA, which comes with a useful set of plugins for Spring Boot projects. Immediately after opening the project, IntelliJ will pull all the Maven dependencies. Make sure that you have the correct Java version installed. You can check it by opening File, Project Structure. Under Project SDK, you should see Java 15. As we can see, this is a fresh Spring Boot application, which comes out of the box with Spring Boot Test Support. It provides a number of utilities and annotations to help when testing your application. These are the libraries we are going to use, JUnit5, the de facto standard for [[Unit Testing]] Java applications, SpringBootTest Utilities and Integration Test Support for Spring Boot applications, Mockito, a Java mocking framework, AssertJ fluent API, [[JSON]] Assert, an assertion library for JSON, and JSONPath, Xpath for J--

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (10), [[Spring Boot]] (7), [[JSON]] (2), [[LinkedIn]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** ide (2), json (2), rest (1), gpa (1), idea (1)
> **CLI Commands:** make (2), unzip (1)
> **Versions:** java 15 (2), java 11 (1)
> **Tools:** intellij (2), terminal (1)
> **UI Navigation:** click on (1), open the (1)
> **URLs:** [spring.io](https://spring.io) (1)
> **Definitions:** is a  (1)

#### [Creating human-readable tests with Mockito and AssertJ](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=0)** - [Instructor] The code and tests tends to be disorganized. Some mocks here and there, interleaved with assertions and test method calls. Let's look at the given-when-then methodology with BDDMockito and AssertJ to create human readable tests. Given-when-then methodology arrived from a very popular AGL development process called BDD or behavior-driven development. BDD, which emerged from TDD, brings to the table a human friendly style of writing test scenarios by structuring the test into three parts. Given is where we put our preconditions and requirements for this use case. When is the action that we want to test. Usually this involves calling no more than one or two lines of code. Then is used to verify what should happen after the execution of the action. It is represented usually by assertions to more classes and validation of returned results. This brings more clarity in our tests as we are following a natural language that is easy to read not only by developers but also by business users. Unlike standard Mockito, which uses when alias to configure behavior of a mock. BDDMockito provides us with a more elegant alias given, which integrates nicely with a given part of BDD style test.
>
> **[1:36](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj?u=76281980&t=96)** Another library that we are going to use in our tests is the AssertJ. But why should you care about AssertJ if J unit comes with assertions out of the box? Actually [[JUnit]] assertions are quite limited to a few basic scenarios and lead to confusion when reading them. For example, a common mistake that many developers still make is mixed up the expected with the actual value. Compare that to a AssertJ which provides a much more natural and fluent API, AssertJ provides a rich set of assertions, truly helpful error messages, improves test code readability and is designed to be super easy to use. To highlight some of the features describing assertions, field by field comparison, iterable, araya assertions, capture and then assert on a throwable, which can be expressed by Alonda. Note that a AssertJ also comes with BDD friendly alias. Like BDDMockito has called then, which we will use instead of assertThat. The adoption of BDDMockito together with AssertJ provides us with a powerful feature set that can help us reduce boilerplate code and write more readable verification called blocks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (1)
> **Env Vars:** bdd (4), agl (1), tdd (1), api (1)
> **Warnings:** common mistake (1), note that (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** assertthat (1)
> **Exercise Files:** boilerplate (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)


### 2. Integration Testing Against a Real Database

[↑ Back to Table of Contents](#table-of-contents)

#### [Effective ways to test your data access](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=0)** - [Instructor] Writing tests for all database interactions can be tedious. How to choose which interactions to mock and which test, what risks are we introducing with custom queries, having in-memory [[Databases]], and how to avoid common pitfalls. Let's explore three keys to write an effective integration test for the database layer. But first, let's understand [[Spring Boot]] data support and common ways of interacting with our persistence layer in spring applications. Spring boot comes with a variety of [[Spring Data]] projects to work with [[SQL]] and [[NoSQL]] databases, such as document, graph, and search. We also get extensive support to interact with our database from direct [[Java Database Connectivity (JDBC)|Jdbc]] access using data source or Jdbc template. Up to complete ORM such as hibernate where we work with entity managers or repositories. Spring data also provides different ways to create a DB schema. From writing SQL scripts or using DB migration tools such as flyway or Liquibase, to simplest autocreation based owner entities. Each customization we make, we introduce different levels of risks. Key one, choosing the right interactions to test. Let's consider you're using spring data repository which you create by extending
>
> **[1:35](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=95)** one of the repository interfaces. Spring data also allows you to customize queries in the following ways. By using custom query methods, we don't need to tell spring data what to do since it automatically derives the SQL query from the method name using query annotation with JPQL query syntax. JPQL is [[Java]] Persistent Query Language used to create queries against entities to store in a relational database. Using SQL query followed by native SQL targeted at the database table. Now, imagine we make a bug in all four cases. The neat thing with spring is that for the first three cases, spring data and hibernate automatically check if entity and query are valid at startup. So there is a very little risk involved. However, native queries are not validated. So native queries are primary candidates for integration tests. Key two, make your tests fast by using test slices. Running integration tests in spring can be achieved by adding spring boot test annotation, which loads full spring context. However, this can lead to loading unnecessary parts of your application. For example, you might want to test database interactions but you are not interested in the web layer when those tests run.
>
> **[3:08](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=188)** Or you're only interested in web layer and want to avoid loading all repositories. The spring boot test module includes a number of annotation test slices. Each test slide, loads only the parts of the configuration that are required to test the slice of your application which can drastically speed up your tests. Key three, in memory database doesn't equal production database. Springboard provides a convenient way to set up an environment with an embedded database such as age two or age as SQL to test our database interactions. Even though each tool comes with compatibility mode for my SQL or [[PostgreSQL|Postgres]]. However, if compatibility is not in sync with the version of DB you're using, you can almost get lulled into false sense of security, thinking that all SQL interactions are fine. What is the alternative? How can we mitigate such risks with test containers? This container is a lightweight library that provides throwaway instances of a common database in a docker container. But without requiring complex setups for developers, we can define exactly which database type and version we want to work with. We don't need to worry about tests, having polluted the database, or left things in a broken state
>
> **[4:40](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access?u=76281980&t=280)** as each time our test starts with a fresh instance. By choosing right interactions to test, using test slices with embedded databases or test containers. We can produce integration tests with more efficiency and with more reliability to deliver first-class software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), [[Spring Data]] (6), [[Spring Boot]] (4), [[Databases]] (3), [[Java Database Connectivity (JDBC)|Jdbc]] (2)
> **Env Vars:** sql (8), jpql (2), orm (1)
> **Analogies:** such as (4), imagine (1), for example (1)
> **CLI Commands:** make (3), docker (1)
> **Definitions:** is a  (2)
> **Prerequisites:** required to (1), set up (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Writing integration tests for a JPA repository](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=0)** - [Instructor] Let's take into practice everything we've learned so far by writing our first test. When it comes to testing, there are two different approaches we can use from the smallest component all the way up which is called bottom up approach or inside out. This approach is great When we have two different teams working independently on a different services and we are not so worried about integration. However, when we have two different teams and we know integration is going to be risky in this case, we want to prioritize building the integration and points first, and then focus on smaller components. This is called Top-down approach or outside-in. In our example, we are going to start with Bottom up Approach by writing integration tests for our repository. We want to prove we can retrieve objects from the database by queering it by student name. We want to verify that student object maps correctly to the database. We will write our tests first and then the actual implementation. This is known as TDD and red-green refactor. First, we will write a red failing test and then write just enough code to make our tests green again. We can then do refactoring by improving the implementation
>
> **[1:33](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=93)** without changing his behavior. Let's create Student Repository Test Class, another first test method. Test gets student by name, return student details. We will use a given when, then met structure. In the given part, We need to create new student. Since student doesn't exist yet, we will create one with properties, ID, and name. We could create getters and setters but what I like to use is project Lombok which removes the ball plate code. Let's give our student object name Mark. Now, the assumption is that ID will be autocreated per database. Therefore we can leave it now. Here we also need to persist our student. Spring gives us a lot of options when it comes to interacting with DB, and the easiest way is to use GPA Repository. We will create a new field, student repository, Student repository must be an interface and must extend GPA repository that manages the entity of type student with primary key of type log. Keep in mind, this is just an interface and [[Spring Data]] provides the implementation for us. In order for this to take effect
>
> **[3:07](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=187)** we need to bring in spring to our test. We could use [[Spring Boot]] test annotation, that loads the full application context. However, we don't want to test the entire spring application. What we only want to test is our data tier and for that, we will use Data GPA test. Since we have spring in our tests, we can now inject student repository. In one part, we still need to query students by name. We will create a new query method, get students by name, which returns the student. And what is left to do is verify that student is retrieved and contains ID that is not now, and name that is the same to saved student. Now, our code compiles, let's see if our tests is going through. It failed. It failed because we didn't mark student class as entity. We also need to tell GPA what is our ID and mark it as generated value since we expect it is out to generated by database.
>
> **[4:33](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository?u=76281980&t=273)** Now, our test is passing however, we still have an undetected bug. With GPA, we need to have a default constructor in our entity class. With data test GPA and using repository, our changes are not flushed to the database and we aren't really interacting with the database, but with the first level cache of GPA repository. Spring provides us with the convenient bin called Test Entity Manager. With Test Entity Manager, we can use persist, flush find methods to force synchronization by inserting object to the database and detaching it. Meaning, all new queries will be executed to a low fetching entities again. After refactoring, our bug has not been detected, let's add a missing constructor. And there we have it. Let's run our test, and now it is green.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Data]] (1), [[Spring Boot]] (1)
> **Env Vars:** gpa (7), tdd (1)
> **Definitions:** is called (2), known as (1)
> **CLI Commands:** make (1), find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Write tests for a custom query](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-tests-for-a-custom-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-tests-for-a-custom-query?u=76281980&t=0)** (soft music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-tests-for-a-custom-query?u=76281980&t=5)** - [Instructor] So far, we haven't really introduced any customizations. And there is a very little risk involved that we have introduced bugs in our application. In this challenge, we want you to create a custom query that is able to [[Fetch]] average grades for active students. First, you should extend the student class with new attributes boolean active and int grade. Grade can be anything between zero and 100. Next you'll write a failing test by pre-existing a couple of students and verifying average grade. And finally write an implementation for a custom query. This challenge should take about 5 to 10 minutes. When you're done, or if you get stuck, you can check out my solution widow to see how I solved the challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (soft music) (1)

#### [Solution: Write tests for a custom query](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=0)** - [Instructor] Welcome back. How did you make out with the challenge? I hope you were successful. I will walk you through my solution. Now, it might look different than yours but that's fine as long as the outcome is the same. First, we want to extend our student class with new attributes. Boolean active and int grade. If you don't have desired constructor what I like to use is builder (indistinct) that can be simply enabled with Project Lombok, by adding ed builder with (indistinct) students class. Also in previous tests, we have used construct through which accepts ID and name, which is now missing. So let's add that one as well. Now, we are ready to write our failing tests. We will name it getAvgGrade for active students calculatesAvg. Again, I will structure my test with given, when, then. In the given part, we want to create a couple of students. First, we want to create student Mark, which is active and has grade 80. Similar to Mark, we have students Susan that is also active but his grade set to 100.
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=94)** 3rd student is Peter, which is inactive. And has grade 50, this student should not be counted into average grade calculator since he's inactive. In the given part, we also want to persist our students. What I like to do is use arrays as list and persist all three students Mark, Susan and Peter. With persistFlushFind method. Under when part we will invoke our new query method. GetAvgGrade for active students which returns double. Keep in mind at this point this method doesn't do anything yet So we will need to create one. Leave the method for now. And let's go to our test and write assertion on average grade. Then average grade is equal to 90 since Peter and Susan are the only active students sum of their grades is 180. So the average grade is equal to 90. Notice, when we run the test we get a failed result. Well, that is to be expected as we haven't written our implementation. For implementing query, unfortunately, there is no option to write method name from which query can be derived
>
> **[3:08](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-tests-for-a-custom-query?u=76281980&t=188)** as there is no support for average. However, we can write a GPQL query. Which is the query running against the entities which is similar to [[SQL]]. Select avg, which is keyword for average grade from student where active equals true. Now, if you have gone with native SQL option that is still fine. As long as the result is the same. When we re-run our test case we should get green result and there you have it. We have just completed our solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Code Identifiers:** getavggrade (1), calculatesavg (1), persistflushfind (1)
> **Env Vars:** sql (2), gpql (1)
> **Analogies:** similar to (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 3. Integration Testing Against Services with Caching Support

[↑ Back to Table of Contents](#table-of-contents)

#### [Writing integration tests for the service layer](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=0)** - [Instructor] As we are making our way through the layers, the next one we will tackle is the service layer. Separation of concern, loose coupling, orchestration, caching, are just some of the benefits we will get from the service layer. Now let's write our first integration test that involves interaction between the service and data layers. We want to test that we are able to correctly [[Fetch]] our student by making a request to the repository and assure the response is as expected. So here we are going to create StudentsServiceTest, as this is an integration test, we'll use SpringBootTest annotation. SpringBootTest works by reading configuration from SpringBootApplication and creates an application context very similar to the one that would be started in a production environment. Because we have a full application context, including web controller services and [[Spring Data]] repositories, SpringBootTest is a very convenient for integration tests that go through all layers of the application, however, in this test, we want to isolate all the services and repositories, and since the WebEnvironment is available in a class puff, by default, SpringBootTest will load the mock WebEnvironment. In order to prevent that, we need to add WebEnvironment equals NONE.
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=94)** Now we can create our Test method, getStudentByID_forSavedStudent_isReturned. If we want to give a more meaningful description, we can also use [[JUnit]] five, DisplayName annotation. In our example, returning saved student from service layer. Again, we will organize our tests into given, when, then structure. In the given part, we want to have our student already saved in our database, therefore we need to inject the student's repository, which we created in the previous chapter, and save a new student. Now, we can call StudentRepository.save new Student. Keep in mind that SpringBootTest does not contain transactional notation, like there's data GPI test slice, which means any interaction will not get rolled back. This means that any interaction with DB stays persisted and can cause side effects for other tests running at the same time, so we need to add Transactional. In the when part, we want to invoke studentService component by calling a new method that accepts student ID, and returns student. We will call this method getStudentById, and provide ID for saved student. Now, we will add a new field name, StudentService, and the type, studentService,
>
> **[3:11](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=191)** and need to create a new class and market with service and rotation to be registered in the spring context. What is left to do is create an implementation, so in StudentService, we need to create missing method. At this moment, we don't care about implementation, so let's return now for now. Remember we are doing red green refactor TDD. In the test, we can now alter our StudentService and verify that the retrieved student does really contain the right name and ID, which is not Null. Now let's run our test. So, why did our tests fail? Well, we haven't really called a repository. Let's do that now. We need to inject StudentRepository. We'll use the required argsConstructor from lonbok to use constructor injection. For retrieving a student, we will invoke findById method, which comes from GPA repository. Since findById returns our students in Optional, we have many options how to deal with missing student. For now, we can just return now in case student is not found. Great, let's rerun our test. And there we have it! We have successfully created our first integration test involving both service and repository layer
>
> **[4:46](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-the-service-layer?u=76281980&t=286)** in our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1), [[Spring Data]] (1), [[JUnit]] (1)
> **Code Identifiers:** studentservice (2), findbyid (2), getstudentbyid (1), argsconstructor (1)
> **Env Vars:** none (1), gpi (1), tdd (1), gpa (1)
> **Definitions:** is an  (1), is a  (1), means that (1)
> **Cross-References:** previous chapter (1)
> **Analogies:** similar to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Writing integration tests for cache](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=0)** - [Instructor] Ever wonder how to test a hard problem, like caching? We use the cache, to protect the database or to avoid cost-intensive calculations. And spring provides an abstraction layer, for implementing a cache. But how do we ensure, that our cache is really working as expected? What we need is to ensure in cases, when we are retrieving the same student from our service, we want to verify we are not hitting the database, every single time. We will start, by creating a new test class. And we will call it Student Cache Test. Let's create new test method, and name it, Gets Students By ID, for multiple requests, is retrieved from cache. In the given part, we will create some random student ID. We need to inject student service in our test, and in the Web part, simulate, multiple requests to the service layer, by calling Gets Students By ID, multiple times for the same student ID. Since we need to test interaction with a repository, this means, we need the kind of way to check how many times, our database has been called. What we need is a Mock. As a mocking framework, we'll use Mockito, since it's well-rounded ,well established and well integrated into [[Spring Boot]]. With Mockito Extension Unit Test,
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=94)** we can use Mock and Spy ,to define mocked objects, and on the tested class at Inject Mock. Mockito will then try to instantiate fields, annotated with inject mocks by passing all the mocks in Togo structure or by using Setter Injection. However, there are times, when we have to rely on spring boot, to set up an application context for us, because it would be too much work , to instantiate classes manually. And we want to have full benefit from Spring contexts, such as [[Dependency Injection]] or infrastructure support, such as caching or data access. We may not want to test integration between all the beans in a certain test. So we need a way to replace certain spring beans with a mock. For example, we may depend on remote service, that is unavailable doing development. Mocking is also useful, when we want to simulate , failures that might be hard to trigger, in a real environment. Spring Boot provides, the Mock Bean and Spy Bean, annotations for this purpose. The Spring Boot test support, will then automatically create a Mock or a Spy, and then edits to the application context, So we can then use Mockito given, when methods to mock behavior or verify interactions with our bean. Since we need to rely on spring, to give us caching support, we will use spring boot test notation
>
> **[3:07](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=187)** and insulate ourselves from web environment, by adding web environment equals none. In order to verify interactions, we cannot use a real Bean. We need mock one. Therefore we will inject student repository, with mock bean annotation. In the given part, we need to mock out, student repository dot find by ID behavior, as this is called from students service. Let's use BDDMockito method , given for student repository dot find by ID call , for student ID, we'll return optional, of type student. In the Den part, we will use the method from BDDMockito library, to verify that find by ID was called only once. Quito, gives us times method, to assert how many times the method has been called. Then, student repository should times one, meaning called only once, called method Find by ID. Let's run our test. Why did it fail? It fails since we haven't added cache in support. We can do that easily, by annotating gets students by ID method , with Cacheable, with cache key, set to students. And by adding ,enable caching annotation , to the spring boot application , to use Embedded Spring Cache. When we rerun our test, now it should pass. And there you go,
>
> **[4:43](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-cache?u=76281980&t=283)** you've just mastered [[Integration Testing]] For Spring Cache.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (6), [[Dependency Injection]] (1), [[Integration Testing]] (1)
> **CLI Commands:** find (4)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is a  (1), is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Write an integration test for exceptions](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-an-integration-test-for-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/challenge-write-an-integration-test-for-exceptions?u=76281980&t=0)** - [Instructor] Up 'til now we have only tested happy path but what if things go wrong? What about edge cases? What if exceptions are thrown? In this challenge, we want you to write an integration test for exceptions. As Joshua Block stated in his book "Effective [[Java]]", "When used to the best advantage, "exceptions can improve a program's readability, "reliability, and maintainability." In this challenge, we want you to write an integration test for a custom exception we will throw in our service layer. In case when a student is not available, instead of returning null, your task is to throw a custom runtime exception, studentnotfoundexception. I suggest you to take a TDD approach by first writing failing test, then implementing exception, and refactor implementation so a test passes. This challenge should take about five to 10 minutes. When you're done or you get stuck, you can check out my solution video to see how I solved the challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Env Vars:** tdd (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Write an integration test for exceptions](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=0)** - [Instructor} How was the Challenge? Did you struggle or was it easy? Even though we had to change a few lines of code, testing exceptions is no easy thing to do. I will walk you through the solution. First, on Student Service Desk, we need to create new method. Get student by ID when missing student not found exception thrown. Again, let's use given-when-then structure. Since we want to simulate missing data scenario we don't need to pre-populate our database with students. We also don't need to mock out any behavior since you're dealing with a real repository. We only need some random ID for which we know there is no student. When it comes to asserting exceptions, AssertJ comes with many different styles and it's up to you which one you find most readable. For example, we can use non-BDD style with assert that exception of type or with assert that thrown by where when and then are part of the same line of code. If you prefer a BDD style, we can separate catching and asserting exception by using catch throwable and by using then or assert that method call. Since the goal of this test is to verify when get student is involved for a missing student,
>
> **[1:36](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=96)** a custom exception is thrown. We can use catch throwable method from AssertJ to catch thrown exception. Under then part we can use BDD assertions then or assert that method call and verify an exception is of type student not found exception. Our compiler is complaining as we haven't created one yet. Let's create a new class. And the only thing left is to extend runtime exception. Now we can run our test.
>
> **[2:19](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/solution-write-an-integration-test-for-exceptions?u=76281980&t=139)** Since we haven't changed anything yet in students service clause, the test failed. So let's change implementation and, as you probably know, optional gives us a lot of possibilities for handling missing objects. Here we use the replacement object which is null. So we can easily change this by replacing or else part with or else throw that accepts an exception supplier. In our case, we will throw a student not found exception. After re-running our test, it should be green. Lets run it. Congratulations, you've just learned how to use TDD to implement custom exceptions and different ways to use AssertJ to perform assertions.

> [!info]- Semantic Content
>
> **Env Vars:** bdd (3), tdd (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Integration Testing Against a Web Controller

[↑ Back to Table of Contents](#table-of-contents)

#### [Which type of web controller responsibilities to test?](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=0)** - Testing Web Controllers is easy. We can just call business logic and we're done, or maybe not, How do you ensure that endpoint is really exposed on a certain URL? How can you ensure that proper validation has been performed? And how can you prove that exceptions in your applications are translated into right messages and status code for the user? As you can see, there are plenty of other responsibilities that are happening around the controller. Let's review them and see how we can run our integration tests against them so we are more confident that our application is properly covered with testing. Here's an example of a simple RestController. For each request, the controller does the following. First, listen to HTTP request, response to certain URLs, HTTP methods, and content types. Two, deserialized input, pass the incoming HTTP requests and then create [[Java]] objects from variables in the URL, HTTP requests parameters and request body. Three, validate input. Controller checks if input is not valid. Four, call the business logic. After Parsing the input transforms it into a business model and parse it to a business logic. Five, serialize the output takes the output of a business logic and serialize it into HTTP response. Six, translate exceptions.
>
> **[1:35](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=95)** When exception occurse controller will translate it into HTTP status and error message for the user. How are we going to write meaningful tests that cover all of those responsibilities? If you use the Unit Test. We will test the controller in isolation by mocking away any interactions with control dependencies for example, calling the service layer and at the end call controller methods and verify the proper response since the [[Unit Testing]] is not leveraging [[Spring Framework]]. All of the stations and processing which are happening behind the scenes of spring get ignored. And our controller is no longer a controller, but a plain cloth that involves the business logic. As you can see, a simple Unit Test will not cover responsibilities. So we need to introduce spring to our tests and integration tests with spring fires up a spring application context that contains all beans required for testing controller. This includes beans responsible for URL napping, serializing, and deserializing to and from [[JSON]] and Java objects and translating exceptions to proper HTTP message and status code. These beans will evaluate the notations that would be ignored by simple Unit Tests. So, how can we do it? with WebMvcTest and WebFluxTest Slices. WebMvcTest loads components required
>
> **[3:11](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test?u=76281980&t=191)** for testing Mvc parts of application. WebMvcTest also auto configures MockMvc. MockMvc offers a powerful way to quickly test Mvc controllers without need to start a full HTTP server. Web Slice will not cover testing service component or repository beans? So it is often used in combination with MockBean to provide mock implementations for required collaborators. If you're coding reactive applications with WebFlux there's also WebFluxTests which also AutoConfigures WebTestClient enabling testing Web Fluxe controllers without the need to fire up HTTP server. However, if you still feel you want to run a test for the full application you can always use [[Spring Boot]] Test. Spring Boot Test will by default load a Mock Web environment, but it can also be configured to run on a production environment. You also have the power to use real dependencies. But if you want, you can mock them out. Just be careful not to overuse Spring Boot Test notation. Otherwise, you might end up with slow running tests since full application context is started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (3), [[Java]] (2), [[Unit Testing]] (1), [[Spring Framework]] (1), [[JSON]] (1)
> **Env Vars:** http (9), url (3), json (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - testing (1)

#### [Writing integration tests for a web controller](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=0)** - [Instructor] Let's get started by writing a test for HTTP controller. We will create a new student controller test. We are going to test if we can correctly make a request to students service and get the response we expect. We need to assert certain things about the shape of the response. First, let's create student controller test class. A simple unit test will not cover the HTTP layer so we need to bring [[Spring Boot]] to do HTTP magic for us. We could use Spring Boot test but with web MVC test slides Spring fires up an application context that contains only the beans needed for testing a web controller. These beans will evaluate the annotations that would be ignored by simple unit test. We will use mock MVC Spring's MVC test braver to perform HTTP requests on the web in-points inside our mock web environment. Since the mock MVC bean is loaded into the context we will be able to simply auto wire it for our use. We will name our method get student for saved student is returned. As we make our request by calling mock MVC perform with get method to students end point we expect that HTTP status will be okay.
>
> **[1:41](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=101)** Body will contain Jason for which we can use Jason path. We want to prove that Jason will contain attribute ID with value one, name equal to Mark and will contain attribute grade with value 10. Running the test should give us 404 status since we haven't implemented the controller yet. Let's run our test. There is no end point to talk to. So let's create an end point. We will create the class student controller and annotate it with [[Representational State Transfer (REST)|rest]] controller. First thing we need to take care of is to create new method get student that accepts ID as parameter and returns a student. We will return now for now. We also need to annotate our method with get mapping and add students end point that accepts ID as a path variable and maps it to long ID parameter. Let's rerun our test. As we can see right now the controller is handling the request but is returning a null. For every failure we get, we have to do minimal code changes that make the next assertion go green because this is a test slide where we easily did only the web tier from everything else.
>
> **[3:12](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller?u=76281980&t=192)** The collaborating object student service was not available. We need to provide that object as a mock. So we are going to add student service and annotate it with a mock bean annotation and mock its behavior. The way mock bean works is it try to find any bean in the application context of its type. If it exists, it will replace it. If it doesn't exist, it will add it. Given students service dot get student by ID for any long will return a new student with ID one, name Mark and grade 10. This test would still fail. We are not using student service in our controller so let's go ahead and use it. Let's add student service bean. Keep in mind all this favor constructor injection over filled injection. Therefore, I will make this dependency private final and we need to invoke get student by ID method which returns a student. Let's rerun our test and there you have it. We got our green test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** http (5), mvc (5)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Testing custom exception returns](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=0)** - [Instructor] [[Spring Boot]] comes with some great features to help with error handling. But it is left to the developer to use those features the three the exceptions and return meaningful responses to the API client. Let's fire up our application and see how we are handling cases when somebody is looking for a research that is not found. What will happen when we try to retrieve a student that does not exist. So to do that, we need to call the following [[Representational State Transfer (REST)|rest]] endpoint. Get students ID. Well, the default error representation looks a little bit messy and misleading, right? 500 is not the right code to describe that the requested resource is not found. Each should be 404. Internal server error does not provide any meaningful information to the API consumers. Exposing 500 internal server errors to the clients is not a good practice at all. So, to handle our errors properly we need to customize the default Spring Boot API error response with a meaningful message indicating what went wrong and a proper status code based on the context. So let's create a new test for the case when a student is missing. We will use (indistinct) and Mockito to write an integration test
>
> **[1:35](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=95)** one exception is thrown and verify that the proper HTTP status is returned. We will first create a new test method in student control test. Called getStudent_forMissingStudent_ status404. Since this is a slice test and we're using mock students service we need to mock a behavior to draw an exception. Recall from the service layer test exercise. We have already created a custom student not found exception, so we need to mock (indistinct) it in a case of a missing student. We can do that with mockitos method will throw students not found exception. Now we just need to invoke students and point with any ID. And this time assert that expect the status is not found.
>
> **[2:39](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/testing-custom-exception-returns?u=76281980&t=159)** If we run our test we will see that instead of 404 we get, a student not found exception. Let's explore two simple ways we can implement custom mapping. One, is by creating an exception handler. We can define new method. Void students not found exception that accepts exception as method argument and annotate it with exception handler and response status to map this exception to 404 not found status code. Another way, instead of an exception handler we could have just annotated our exception with response status and status is not found that would have worked too. When we re-run our test, we can see that we got green. Communicating meaningful responses in case of exceptions is a crucial part when designing arrests API and together with Spring Boot support and more can we (indistinct) we can easily verify and implement such behaviors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (4), http (1)
> **Definitions:** is a  (2)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)


### 5. Integration Testing for the Client App

[↑ Back to Table of Contents](#table-of-contents)

#### [Integration testing without making an external API call](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=0)** - [Instructor] How can you counter [[Integration Testing]] for code that interacts with an external API? Imagine you have a component that's talking to another service and the service that you're calling in production environment, just isn't available to you in your test environment. Calling a staged version would be a better option but often you don't have it offered. For example, you're calling a live service like YouTube, [[Google]], [[Facebook]] or Twitter API. APIs such as these have rate limits. So when you're running the tests you could exceed rate limits and your tests would fail or you would need to be careful not to exceed your rate limit and incur additional expenses. Then you also need to worry about storing credentials somewhere for your test use and it ends up way too complicated. Your best option is to mock out the service that you're calling. In the Spring world, we use the [[Representational State Transfer (REST)|rest]] template or a WebClient to interact with external APIs. You could mock out rest template by mocking rest template interfaces. Set a bunch of expectations by using mock it or for particular URI and entity. Define what kind of response will get returned but there is a lot of risk involved in making a mistake. You could make a mistake in the URI or when substituting path variables or when you're mocking message conversion logic.
>
> **[1:36](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=96)** A better option is to use rest client test slides which comes with a pre-configured mock rest service server. Mock rest service server provides a way to set up expected requests that will be performed through the rest template, as well as mock responses to send back thus removing the need for actual server. In the same way, we could take an existing service API like YouTube, Twitter we are interacting with, take their requests and responses and map those to our mock rest service server which gives us a higher degree of confidence that a rest template is making right calls to external API. However, usage of a mock rest service server is limited only to rest template. If you are using WebClient things get even more challenging. This is because the WebClient is a fluent API where a lot of objects pause between the calling code and the mock. As we can see, we need to provide a different mock object for each call in the chain. This is verbose and cumbersome. It also requires us to know the implementation details of how exactly our service uses WebClient making this a brittle way of testing. So what should we use? The Spring team recommends using OkHTTPS mock web server or WireMock.
>
> **[3:11](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call?u=76281980&t=191)** In a similar way, to mock rest service server you can set up expectations but unlike mock rest service server it is exposed or HTTP. Instead of using some sort of mock with predetermined responses, you get to keep the HTTP client underneath which leads to more complete testing. Over an actual socket it's more natural to simulate slow network conditions, chunked responses and then in turn to test the impact with the actual HTTP client in charge of processing content on the wire.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (13), [[Integration Testing]] (1), [[Google]] (1), [[Facebook]] (1)
> **Env Vars:** api (5), http (3), uri (2)
> **Exercise Files:** template (6)
> **Analogies:** imagine (1), for example (1), such as (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Warnings:** be careful (1)

#### [Writing integration tests for rest endpoints](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=0)** - [Instructor] So far, we have written a student service app with integration tests covering all layers, but how can we ensure it can be consumed by other applications? Let's dive in and write a consumer for a service and see how we can write a meaningful integration test even when the student service is not available. Head over to start.[spring.io](https://spring.io). As the Group name, choose com.[[LinkedIn]] and as the Artifact use student-client. We can leave other configurations as default, choose [[Java]] 15. In the dependencies select Project lombok, Spring Reactive Web and stub runner click on generate go to downloads directory and open it between your ID.
>
> **[1:02](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=62)** This is our client application. We'll start by first writing a test that can create a client which can talk to our service. Using the TDD approach, we first need to write a failing test. Let's create a new class student client test and annotate it with [[Spring Boot]] test we will need a student client that will talk to our service. Since it doesn't exist we will create one and annotate it with add component so it is registered by Spring. We need a new test method get student for given student is returned.
>
> **[1:54](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=114)** Under given part, we will create random ID. Under when part, we will call our client with client dot get student and provide student ID. As the response, we expect to get back a student object. The student type and method don't exist yet so we will create them. For now, we can return null. For student class, we will add the same fields like ID, a student name and grade plus lombok connotations. Let's assert certain things about the response. We expect the student ID will not be null. Student name equal to Mark and grade equal to 10. If we run our tests, we know it will fail because in a client we are returning null. We will use WebClient since the [[Representational State Transfer (REST)|rest]] template will be deprecated in the future versions of Spring. We'll also include required args constructor from project lombok to handle construction injection. Now we can write WebClient dot get dot URI
>
> **[3:27](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=207)** slash student slash ID as a parameter and just to finish our call, we expect a type of student class. Note that WebClient by default wraps our object to Mono and [[Flux]] wrappers. Since our student service API is non reactive then Flux and Mono are not much use for us so we can unwrap them by calling block which blocks the stream and gets data out of it. In order for this to work, we need to configure our bean for our WebClient. We can do that in a student client application class we need to inject a WebClient builder to configure it and set the domain and port of the service. We could configure domain and port in application property but for now it's fine if we leave it hard-coded. Now let's try again running our test. Notice what happens. We get connection refused and it is obvious why our student service application is not running. We could run it by firing up another intelligent but what if we have 10 different services? Would you fire up those as well? Or what if you are depending on a service that is in a cloud environment
>
> **[4:59](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=299)** but it is either unavailable or unreachable from our test? So what should we do? The obvious thing to do is run a mock but not just any mock. We need a mock on HTTP level. This is where WireMock can support us. We just need to configure auto configure WireMock which by default uses port 8080, we can overwrite it if we want to. Stub for get students slash plus ID will return Okay Jason, I love this fluent API from WireMock. As in a few lines of code, we can easily create a stub. Also with Java 15, we get a text block support plus with intelligent and James Jason reference and we can easily write Jason response. Now that we have everything ready, let's fire up our test again and there you have it. We have just proved our client application working. We have a green client. We have a green service. Everything seems working, right? Well, not exactly. Did you notice the bug on the client side resume the collaborating object has student name? While the service provides just the name,
>
> **[6:33](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints?u=76281980&t=393)** this can happen quite often. One team can change collaborating objects without being aware it is affecting other client's applications. Later we're going to follow up on this example and learn how to mitigate such issues in a microservice environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Flux]] (2), [[LinkedIn]] (1), [[Spring Boot]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (2), tdd (1), uri (1), http (1)
> **Prerequisites:** configure (5)
> **Versions:** java 15 (2)
> **UI Navigation:** click on (1), go to (1)
> **Code Identifiers:** linkedin (1)
> **URLs:** [spring.io](https://spring.io) (1)
> **Ports:** port 8080 (1)

#### [Introduction to Spring Cloud Contract](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=0)** - [Narrator] We have written Green Tests for both web and client applications yet there is still a bug. How can you ensure that the contract between the consumer and the producer of the API works? To make things more interesting, imagine your application is dependent on 10 different services in the microservice environment. How would you test integrations between them? Would you deploy all [[Microservices]] in the same environment and run an end to end test? Or would you use something like WireMock to mock out other services? Both come with their advantages and disadvantages. If we deploy all microservices and perform end to end we get the benefit of testing real communication between services which is as close as it gets to simulating production. But this comes at high price of having dedicated infrastructure with all servers, [[Databases]], and other dependencies. These tests can also be slow and flaky, meaning hard to debug and not so reliable in case data is inconsistent. In this case, the second approach with mocking might sound like a better idea. We get very fast feedback and no infrastructure requirements. However, we have seen that the mocking service might not be aligned with real service, which can give us false assurance
>
> **[1:35](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=95)** that everything is fine. To solve this issue, Spring Cloud Contract was created. The main idea of the Spring Cloud Contract is to give you very fast feedback without the need to set up the whole world of microservices. Client applications work with stubs. However, we get certainty that the stubs that we use in our client application consumer. were created by the service producer recall, but how does it all work? Imagine that before two applications communicate with each other, they've formalized a way they send and receive messages. On the producer side, we can define contract in [[Java]], Groovy, [[Kotlin]] and YAML by specifying expected request and response. Second, in order for this contract to have an effect, Spring Cloud Maven Plugin will read contract definitions and generate tests. We also need to define this class for a test, which contains all the setup information necessary to run the tests. For example, mocking out service layer. Once our tests are passing and verified, both the application and the WireMock stubs are installed on the local or upload it to Maven manager such as Nexus or Artifactory. Now, let's explore how we can change the consumer side test
>
> **[3:11](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract?u=76281980&t=191)** to reuse those stubs. Spring Cloud Contract comes with a component called a stub runner. It comes with auto configure stub runner annotation, in which we need to define artifact coordinates such as stub storage, artifactId and port number. Stub runner will [[Fetch]] the stub from various locations and the HTTP server stub will get started on defined ports. Our client tests can now reference the stub server directly. So what's the outcome of such an approach? As consumers, we will fail fast if they are not in sync with producer. As producers we can see if our code changes are not breaking the contracts we have made with our client. This approach is called consumer-driven construct testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microservices]] (3), [[Databases]] (1), [[Java]] (1), [[Kotlin]] (1), [[Fetch]] (1)
> **Analogies:** imagine (2), such as (2), for example (1)
> **Env Vars:** api (1), yaml (1), http (1)
> **Prerequisites:** set up (1), setup (1), configure (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** artifactid (1)
> **Definitions:** is called (1)
> **Speakers:** - [narrator] (1)

#### [Ensuring client app (rest call) and web app (controller) are in sync](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=0)** - [Instructor] We have our service and client integration test on both end screen. But since they deviate in one or three bit name, they won't be able to work together. We want to make sure that any change on the service immediately impacts the client with a failing test. One way to get such assurance is by using Spring Cloud Contract. We will go ahead and define a contract in Groovy. In our students service application, under test, resources, contracts, we will create a new file, Should Return Student.groovy. This is the default directory where spring scans for all contracts. Don't be alarmed if you have not used Groovy before. Knowledge of the language is not really needed as DSL is statically typed to make it programmer readable without any knowledge of the DSL itself. Let's start by typing contract.make. First we add the description, should return a student. Then in the request, where we are going to define what a request will look like. We expect method of type get, and we'll arrive on the /students/1. And then we describe how response would look like. First by adding HTTP status, OK. and content type application [[JSON]].
>
> **[1:38](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=98)** Underbody, we can define response as JSON literal, or as an object which gets converted to JSON. Spring Cloud Contract provides the Maven plugin. And when running our Maven test score, this is going to read our contract and create an integration test. Since we're using MockMVC to verify our integration tests, we need to tell our Spring Cloud Contract plugin to use MockMVC as test mode. Let's run a Maven test call. Notice that our test failed but reached one. Noticed the class name Contract Verifier Test failed. We didn't write this class. it was generated by Spring Cloud Contract. We can open it in IntelliJ and see that it contains test method for API. Each failed because this is just a unit test. In order to fix it, it needs to be extend base class where we can set up spring integration test and Mock behavior. Since we don't have our base class yet, let's create one and call it Student Controller Base Class. In the Base Class, we need to do similar setup as we did in previous integration test. And that means, first, by setting up web MVC test slides,
>
> **[3:13](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=193)** and second mock out student service get used by the end points. We can just copy paste the same configuration from the previous integration test, and add it within the new method which needs to run before each test. Let's call this method before, an annotated with before each. We also need to pass MockMVC bean by calling [[Representational State Transfer (REST)|rest]] assured MockMVC.mockMVC
>
> **[3:51](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=231)** We're not done yet. Between Maven plugin, we need to point out where is the Base Class. Now, let's rerun Maven clean and install. And we see it worked. Apart from running the test in a local main repository, it also stopped three things. Our students service jar, students service pom, and students service stubs jar which contains WireMock stub, we can use on the client's side. Producer side is done, we can now go to students-client application and use that stub. Since the stub will create an end point for us, we don't need to mock out responses in our client. We can just get rid of out to configure WireMock annotation and to stop configuration. What we need is stub runner, Here in the annotation, we need to put out to configure Stub runner and provide me even coordinates for a construct definition, so it knows from where to pull this stub from. This means providing ID of artifact. We will use plus to find the latest version and run it on port 8080. Make sure port is aligned with the port used by web client. Now we can run test again and we see it failed.
>
> **[5:26](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=326)** It failed because our test was not able to find value for students name. Let's fix it easily by changing from student name to name.
>
> **[5:40](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626?u=76281980&t=340)** Rerun our test. And there you have it, our test passed. It was fast, we didn't need to mock up anything and it caught the bug we introduced earlier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** json (3), dsl (2), http (1), api (1), mvc (1)
> **CLI Commands:** make (4), find (2)
> **Prerequisites:** configure (2), set up (1), setup (1), install (1)
> **Code Identifiers:** mockmvc (1)
> **Ports:** port 8080 (1)
> **Tools:** intellij (1)
> **UI Navigation:** go to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [More Spring Boot integration testing resources](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/more-spring-boot-integration-testing-resources-10133853?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/more-spring-boot-integration-testing-resources-10133853?u=76281980&t=0)** - [Instructor] I hope you enjoyed the course, and now have a solid foundation of [[Integration Testing]] with [[Spring Boot]]. A good next step would be to look into our library for more Spring Boot programming courses. I want to wrap up by saying thank you. You have devoted time to learning this material with me, and I want you to know that I don't take that for granted. I really do appreciate your engagement, as well as your feedback on this course. If you enjoyed this course, I'd love to know. Find me on [[LinkedIn]], and let met know how you are doing integration testing within your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Integration Testing]] (2), [[Spring Boot]] (2), [[LinkedIn]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Terezija Semenski]]

## Resources

- Exercise files available

## Skills Covered

- Integration Testing
- Spring Boot

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

---

[↑ Back to top](#)