---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: spring-data-2
url: "https://www.linkedin.com/learning/spring-data-2"
duration_minutes: 101
duration: 1h 41m
level: Intermediate
updated: 1/23/2023
learners: 20928
skills:
  - Spring Data
exercise_files: true
github: "https://github.com/LinkedInLearning/spring-spring-data-2-2508603"
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQFKjea5yMgDKA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1674159455671?e=2147483647&amp;v=beta&amp;t=VEfAQCp9Lwovj4D65lA7bj2lOTNFrbmdROfgPBjVtzs"
linkedin_topic: Software Development
learning_paths:
  - '[Getting Started In Spring Development](../../Paths/Software%20Development/Learning%20Paths/Getting%20Started%20In%20Spring%20Development.md)'
prev_courses:
  - '[Creating Spring Boot Microservices](Creating%20Spring%20Boot%20Microservices.md)'
next_courses:
  - '[Spring 6- Spring Security](Spring%206-%20Spring%20Security.md)'
path_nav: '[{"path":"Getting Started In Spring Development","position":3,"total":5,"prev":"Creating Spring Boot Microservices","next":"Spring 6- Spring Security"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/spring-data
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Spring%20Data%202.md)

![Spring Data 2](https://media.licdn.com/dms/image/v2/C4D0DAQFKjea5yMgDKA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1674159455671?e=2147483647&amp;v=beta&amp;t=VEfAQCp9Lwovj4D65lA7bj2lOTNFrbmdROfgPBjVtzs)

# Spring Data 2

> Coding to databases—which often involves the use of boilerplate code that's difficult to maintain and debug—can be tedious work. Upgrading applications to a different kind of data storage is similarly challenging, as it usually involves massive code rewrites. Spring Data addresses these issues by abstracting data store interactions into a common repository API and eliminating boilerplate code.In t

> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2) | 1h 41m | Intermediate | 21K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Diving into Spring Data](#diving-into-spring-data)
  - [What you need](#what-you-need)
- [**1. Spring Data Umbrella Project**](#1-spring-data-umbrella-project) (2 videos)
  - [Mission and modules](#mission-and-modules)
  - [Java Persistence API](#java-persistence-api)
- [**2. Introduction to Spring Data JPA**](#2-introduction-to-spring-data-jpa) (5 videos)
  - [Spring Boot Starter Data JPA](#spring-boot-starter-data-jpa)
  - [Spring Data CrudRepository and JPA repository](#spring-data-crudrepository-and-jpa-repository)
  - [Challenge: Fix SimpleDBCrudTest syntax errors](#challenge-fix-simpledbcrudtest-syntax-errors)
  - [Solution: Fix SimpleDBCrudTest syntax errors](#solution-fix-simpledbcrudtest-syntax-errors)
  - [Spring Data JPA magic](#spring-data-jpa-magic)
- [**3. Spring Data JPA Query Methods**](#3-spring-data-jpa-query-methods) (6 videos)
  - [Property expression query methods](#property-expression-query-methods)
  - [Query method clauses with property expressions](#query-method-clauses-with-property-expressions)
  - [@Query annotation](#query-annotation)
  - [Challenge: Refactor to three query methods](#challenge-refactor-to-three-query-methods)
  - [Solution: Refactor to three query methods](#solution-refactor-to-three-query-methods)
  - [Paging and sorting](#paging-and-sorting)
- [**4. Dynamic Spring Data JPA Queries**](#4-dynamic-spring-data-jpa-queries) (5 videos)
  - [Specifications](#specifications)
  - [Querydsl](#querydsl)
  - [Query by Example](#query-by-example)
  - [Challenge: Query by Example](#challenge-query-by-example)
  - [Solution: Query by Example](#solution-query-by-example)
- [**5. More Spring Data Features**](#5-more-spring-data-features) (4 videos)
  - [Spring Data REST](#spring-data-rest)
  - [Spring Data MongoDB](#spring-data-mongodb)
  - [Non-blocking Spring Data reactive repositories](#non-blocking-spring-data-reactive-repositories)
  - [More data source support and features](#more-data-source-support-and-features)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps with Spring Data](#next-steps-with-spring-data)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Diving into Spring Data](https://www.linkedin.com/learning/spring-data-2/diving-into-spring-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/diving-into-spring-data?u=76281980&t=0)** - Coding to [Databases](../../Skills/Software%20Development/Databases.md) can be tedious. It's often requiring repetitive boilerplate code which is difficult to maintain, refactor and debug. Upgrading applications to a different kind of data store typically results in massive code rewrites and developer reeducation. [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) addresses these issues by eliminating boilerplate code and abstracting data store interactions into a common repository API. We'll begin with an overview of the Spring Data umbrella project, and I'll walk you through some examples that use Spring Data JPA and Spring Data [MongoDB](../../Skills/Software%20Development/MongoDB.md). And then look at other supported data store modules. I'm Mary Ellen Bowman, and I'll be leading you through this deep dive into Spring Data. Let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (1), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (1)
> **Env Vars:** api (1), jpa (1)
> **Exercise Files:** boilerplate (2)
> **Speakers:** - coding (1)

#### [What you need](https://www.linkedin.com/learning/spring-data-2/what-you-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/what-you-need?u=76281980&t=0)** - [Instructor] To interact with the exercises in this course I expect you to have [Java](../../Skills/Software%20Development/Java.md) 17 installed, although, the examples are not very complex so Java 11 should be fine. Apache Maven for automated builds and an IDE for debugging. I use IntelliJ but, you do you. I expect you to have a basic understanding of Java and how to build with Maven as well as how to run and debug [JUnit](../../Skills/Software%20Development/JUnit.md) test within your IDE. I also you to be familiar with the Spring famework for [Dependency Injection](../../Skills/Web%20Development/Dependency%20Injection.md) and the Java Persistence API. If Spring or JPA are new to you, I suggest these Spring and JPA courses in the library. Now let's jump in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4), [JUnit](../../Skills/Software%20Development/JUnit.md) (1), [Dependency Injection](../../Skills/Web%20Development/Dependency%20Injection.md) (1)
> **Env Vars:** ide (2), jpa (2), api (1)
> **Versions:** java 17 (1), java 11 (1)
> **CLI Commands:** apache (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)


### 1. Spring Data Umbrella Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Mission and modules](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=0)** - [Instructor] I've been a professional software developer for let's just say a while, and there have been a handful of solutions that have been game changers for me personally. Going from C and C++ to [Java](../../Skills/Software%20Development/Java.md). Now, portable applications can be written once, and run anywhere without rebuild. J2EE or Java EE to build Enterprise solutions without needing to code the supporting infrastructure. Hibernate eliminated manually mapping logical objects to physical [Databases](../../Skills/Software%20Development/Databases.md), asynchronous [JavaScript](../../Skills/Software%20Development/JavaScript.md) and XML. Also known as [AJAX](../../Skills/Web%20Development/AJAX.md). Websites became truly interactive, like desktop user interfaces, restful web services significantly reduced multi machine communication complexity. What makes them my game changers? Better features, less coding, which is why I also consider [Spring Data](../../Skills/Web%20Development/Spring%20Data.md), and specifically Spring Data JPA as a game-changer. Spring enjoys a great legacy of providing superior data access frameworks, making it a solution source for developers worldwide. More than an inversion of control framework, Spring now comprises a vast collection of enterprise solutions. One of the solutions is the Spring Data Project. Spring Data's mission is to provide a familiar, and consistent Spring-based programming model for data access while still retaining the special traits of the underlying data store.
>
> **[1:34](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=94)** Spring Data is actually an umbrella of several sub-projects. Some address the commonality between data stores, others tap into those special trades. There are several modules, and they all specialize in various data sources, but they all depend on commons. Commons abstracts away from any particular data source. No matter which data source, the goal is always the same. Have a way to convert Java object entities into target data source records and persist them, as well as convert the records back to entities. It can create entities which are then persisted as records to the data store. It can look up data source records by citing the entity attributes. It can update data source records by updating the entity and finally, delete the data source records by deleting the entity. The repository pattern is an abstraction that is used by Spring Data Commons to accomplish these goals. It is followed throughout the Spring Data Project for creating, reading, updating, and deleting records by citing entities. A module for a particular data source has a repository that extends from the base one. So for example, Spring Data JPA, has a JPA repository. Spring Data [MongoDB](../../Skills/Software%20Development/MongoDB.md) has a Mongo repository. Spring Data GemFire has a GemFire repository,
>
> **[3:08](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=188)** and so on. Spring Data JPA is the most popular module. Therefore, our deep dive into coding with Spring Data common repositories will be in that chapter, as well as the querying chapter. Lessons learned from these chapters will be leveraged in Spring Data, MongoDB, and hence any other spring data module.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (14), [Java](../../Skills/Software%20Development/Java.md) (3), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** jpa (4), j2ee (1), xml (1)
> **Definitions:** known as (1), is an  (1)
> **CLI Commands:** mongo (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Java Persistence API](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=0)** - [Instructor] Before we dive into [Spring Data](../../Skills/Web%20Development/Spring%20Data.md), let's look at the concept of object to relational mapping and how it relates to [Java](../../Skills/Software%20Development/Java.md) Persistence API. A classic problem in programming is mapping the physical model to the logical model. The typical physical model is a relational database schema, and a logical model comprises the Java domain objects. It's possible to do object-relational mapping in plain [Vanilla](../../Skills/Web%20Development/Vanilla.md) Java, but it's nasty. The most popular ORM framework is JPA. If you are unfamiliar with JPA, don't worry. Kesha Williams has two in-depth JPA courses in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning library. These are non-trivial concepts that require understanding before proceeding with Spring Data JPA. So if you're not sure, save your spot here and come back when you're ready. In the exercise files, there is a simple JPA Maven project called University with an in-memory relational H2 data store. University has JPA entities: staff, department, course, and student. Staff are people who teach at the university. Students are people who learn at the university. Each department has a chair, or head, that is part of the staff. A course is a particular class offered within the department that a staff member teaches. Students enroll in courses. Some courses have prerequisite courses.
>
> **[1:36](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=96)** Each entity has a data access object, aka DAO, and that class has public methods to interact with EntityManager. Business services encapsulate DAOs for higher tier composite actions. University employs application-managed persistence from [JUnit](../../Skills/Software%20Development/JUnit.md) tests. And the testing library are various examples on invoking the services and DAOs. SimpleDBCrudTest.java invokes db create, read, update, and delete methods. FindByOneAttribute.java invokes simple queries that look up entities from a single attribute. FindByClausesAndExpressions.java invokes complex queries. PagingTest.java queries that employ paging and sorting. CriteriaQueryTest invokes dynamic queries. And UniversityFactory is a helper class to set up seed data of predefined courses, staff, students, and departments before running a test. In the next two chapters, we will be refactoring this project into a Spring Data JPA [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) Maven application. So now is a good time to pause and download the exercise files. Take a look at the code associated with this video. Make sure that you can build it locally with the appropriate Maven and Java versions. Then run regression tests. So for this video is branch_01_02,
>
> **[3:13](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=193)** and you can see the business classes are here, CourseFilter, DynamicQueryService, and UniversityService. The DAOs are in the DAO folder. The domain has the entities, and then the configuration is in PersistenceJPAConfig. And then the tests are in the test folder.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (8), [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (3), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [JUnit](../../Skills/Software%20Development/JUnit.md) (1)
> **Env Vars:** jpa (7), dao (2), api (1), orm (1)
> **Definitions:** is a  (5)
> **File Paths:** simpledbcrudtest.java (1), findbyoneattribute.java (1), findbyclausesandexpressions.java (1), pagingtest.java (1)
> **Exercise Files:** exercise files (2), download the (1)
> **Prerequisites:** prerequisite (1), set up (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)


### 2. Introduction to Spring Data JPA

[↑ Back to Table of Contents](#table-of-contents)

#### [Spring Boot Starter Data JPA](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=0)** - [Instructor] Now that we have the exercise files, let's start refactoring it to use [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) JPA. A big boost comes from simply upgrading to [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md). So what do we get? The first is a less complex [Dependency Management](../../Skills/Software%20Development/Dependency%20Management.md) model provided by the Spring Boot starter and Spring Boot parent settings in a new pom.xml. The second is a significant reduction of the persistent context configuration. How do we do this? We will start by replacing the pom.xml with a smaller one that employs Spring Boot parent and Spring Data JPA starter dependencies. Next, we will remove the configuration class and replace it with a Spring Boot application class. Finally, we'll upgrade the J unit test to employ Spring Boot test features. So here is our existing application with just [Vanilla](../../Skills/Web%20Development/Vanilla.md) Spring and JPA, and we're going to start by refactoring the pom.xml of where it is now. And we're going to replace it in the exercise files as a Spring Boot pom.xml. We're just going to copy and paste all of that and replace the current pom.xml, which cites Spring contacts and Spring ORM and Hibernate Core. All those dependencies are going to be overwritten by less configuration. So here we have our Spring Boot starter parent and setting the version of Spring Boot,
>
> **[1:37](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=97)** and then Spring starter data JPA, and then just our H2 dependency. And then Spring Boot starter for testing. We don't have to have all the different intricacies of Spring involved there. So I'm going to say import changes. And while that's happening, we're going to go to our configuration file, persistence JPA config, and I'm going to replace these first annotations with Spring Boot application. And then we're going to take all of these beans that we've created in here and remove those for setting up the context. Delete that. And then I'm going to refactor, rename this to University Application.
>
> **[2:38](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=158)** And then we need a main in our Spring Boot application, so we'll say public. So we have a main program there. And now we need to modify our test classes with the annotation at Spring Boot test. So we're going to do that with all of our tests. So just copy, and then in each one of these, replace that.
>
> **[3:14](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=194)** And finally, the last one in the list. So what's actually happening here? I'm going to put a break point at line 42 in this class. And we're going to run this J unit test. So within this J unit test where we have the annotation at Spring Boot test, the entire application, the entire university application will be run. We will see a big Spring message showing that the university's Spring Boot application has started. So let's start that. I'm going to debug that. I'm going to move up the console here so we can see as that runs. So all the configuration that we manually had to do is now done automatically. And if this was not in memory H2 database, we would only have to need to add a little bit of configuration parameters in the properties. So let's just finish and let this run. So just by pivoting to Spring Data JPA and Spring Boot, we are already seeing improvements in the project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (16), [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (3), [Dependency Management](../../Skills/Software%20Development/Dependency%20Management.md) (1), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (1)
> **Env Vars:** jpa (6), orm (1)
> **File Paths:** pom.xml (5)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Spring Data CrudRepository and JPA repository](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=0)** - [Instructor] Now let's see how [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) JPA gives us better functionality while writing less code. In chapter one, we learned that spring data abstracts away from any particular data source by following a repository pattern. Now we're actually going to see the implementation of that pattern. Spring data starts with a repository interface with two bounded type parameters. The first type, T, is the entity class name. The second parameter, ID, is the type of the unique ID of the entity. The repository interface is just a marker without any methods. Spring data commons declares a crud repository. Crud, meaning create, read, update, delete. Crud repository extends from the marker repository interface, and declares methods that create, update, delete, and read entities, and inherit the bounded type parameters. So for the course entity, a course repository interface would extend from crud repository, and the first bounded parameter would be course. And the ID of the course is of type integer. Since we are specifically implementing JPA, we will actually declare course repository as a spring dated JPA repository. Let's add that to our code, and I'll show you the different methods declared in those interfaces.
>
> **[1:33](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=93)** So the first thing I'm going to do is create a repo folder,
>
> **[1:47](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=107)** and within that I'm going to start declaring repositories. So just to see you here, here's a preview of the course entity,
>
> **[2:02](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=122)** going to declare an interface called CourseRepo.
>
> **[2:13](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=133)** First, we're going to implement crud repository. And so course is the first parameter, and integer is the second. Now, within here, I'm going to use my IDE to give a preview of what methods come with CRUD repository. So here are the actual methods from crud repository. It's saving entities, find by ID, exist by ID, find all entities, get the counts, and then delete the entities. Now I'm going to actually change this to extending from JPA repository. And see all the methods that we get. So we get a lot more methods that weren't, here's just from crud repository, but then we get some more methods on flush, save and flush, which is specific for JPA. And we're also, instead of just getting iterables in our finds, we're getting lists, which is preferable to use if you're going to be a client for many different services. So we're going to keep that as JPA repository. And I'm going to do this for all my repos.
>
> **[3:39](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=219)** And I set that as a class, but it's actually interface.
>
> **[3:50](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=230)** Now we'll do staff repository.
>
> **[4:01](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=241)** A person is not a repository it's just an embedded type that's used. And the last one is student repository.
>
> **[4:20](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=260)** Okay, now we've got those done. And now I want to edit this university service. And I'm going to change these to repo, that we are going to inject. And I can actually do a, first, I'll do the repos here. I'm doing these one at a time so I can include them. And now I'm actually going to do a find and replace. Replace anything that's DAO with R-E-P-O. Replace all. Very good. And now here's my favorite thing to do, is delete code. So I can actually go into my DAOs, and delete all those methods that, so I can get rid of the find all, find by ID, save and delete, and delete all. Same thing in my department DAO. Delete the find alls, the save, and the deletes. Same thing in staff.
>
> **[5:50](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=350)** And lastly, in student.
>
> **[6:05](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=365)** So you can see right away, just by using JPA repositories, we've eliminated a lot of repetitive boiler plate code, and transactions are managed automatically.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (4)
> **Env Vars:** jpa (7), dao (2), ide (1), crud (1)
> **CLI Commands:** find (6)
> **Speakers:** - [instructor] (1)

#### [Challenge: Fix SimpleDBCrudTest syntax errors](https://www.linkedin.com/learning/spring-data-2/challenge-fix-simpledbcrudtest-syntax-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/challenge-fix-simpledbcrudtest-syntax-errors?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/spring-data-2/challenge-fix-simpledbcrudtest-syntax-errors?u=76281980&t=6)** - [Instructor] It's time for a challenge. So, deleting some of our DIO methods caused compilation errors in SimpleDBCRUDTest. Your challenge is to fix the errors by replacing the course DAO with course repo until it compiles. So if we look at this simple CRUD test in the test package, we see that we are injecting the staff DAO and it calls Find All to find all staff, and then we do a Find by ID, and a Save, and another Find by ID, a Delete, and then a Find All. This test basically reads in all the staff, does a find by one of them, deletes that staff member, and then tries to find it again and make sure that it's gone. So we need to refactor this class and instead of using staff DAO, use staff repo and make sure that all these methods compile.

> [!info]- Semantic Content
>
> **CLI Commands:** find (7), make (2)
> **Env Vars:** dao (3), dio (1), crud (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Fix SimpleDBCrudTest syntax errors](https://www.linkedin.com/learning/spring-data-2/solution-fix-simpledbcrudtest-syntax-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/solution-fix-simpledbcrudtest-syntax-errors?u=76281980&t=0)** - [Instructor] So, did you figure out how to make this compile? Don't feel bad if you didn't because I sort of cheated in a way, by, whenever I created my staff DAO methods, for example, the find, the staff DO, to find all, I created these method signatures to match the exact signatures of staff repo for the JPA repository interface. So, if you noticed that already, then you noticed that all I had to do was two things, is refactor the name just to staffRepo, and then just change this declaration to repo, and import that, and that just auto-magically makes that compile. So, there is a staffRepo.findall method already, a staffRepo find by ID, staffRepo, find by ID, and find, delete and find all.

> [!info]- Semantic Content
>
> **CLI Commands:** find (6), make (1)
> **Code Identifiers:** staffrepo (4)
> **Env Vars:** dao (1), jpa (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Spring Data JPA magic](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=0)** - [Mariann] After all of the PaLM updates, the configuration change, switching to [Spring Data](../../Skills/Web%20Development/Spring%20Data.md), repositories, and fixing syntax errors, let's actually run a test. But wait, you're probably thinking, "Mariann, you haven't implemented course repo, "or staff repo, or all the other repos. "You just have interfaces." You have an interface, you have to have something that implements it. What's implementing? What classes are actually implementing these interfaces? And here's the good news. We don't have to. It's Spring that implements the interfaces for us. And let's actually run the test and see how that happens. So we're going to debug this testStaffCRUD method. And I have a break point on the very first line. I'll show the console here as it's running. As we've seen before, it starts up the application within our [JUnit](../../Skills/Software%20Development/JUnit.md) test and we hit this breakpoint. And let's actually take a look within the debugger. Let me put this up here. We have the staff repo, which is autowired. And there's our interface. And we see that what is actually implementing this is simpleJpaRepository. So Spring Data scans for the repositories
>
> **[1:38](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=98)** and then will at the beginning of runtime instantiate this simpleJpaRepository, which implements the staff repo methods in this case. So I'm actually going to step into this university factory method to fill the university. And so this method will, at startup, just make sure that there's nothing in the database at all. Just empty it out by deleting all of the students, staff, courses, and departments. And then we'll continue to step over to create student. So this university service, which is going to create a student, going to step into that method and step out because it's doing a proxy.
>
> **[2:40](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=160)** So here's createStudent actually invokes studentRepo, and then saves it, creates a new student. So we're just going to continue and run this to get back to our CRUD test. And here's example where we have our staff repo. It's going to do a find all and then it's going to print that staff, print all those to the the screen. So it's actually really cool. Remember all that DAO code that we deleted for creating, doing simple fines, and saves, and deletes? We don't have to create that anymore. Spring Data provides them specifically for our entity types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (3), [JUnit](../../Skills/Software%20Development/JUnit.md) (1)
> **Code Identifiers:** simplejparepository (2), teststaffcrud (1), createstudent (1), studentrepo (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** crud (1), dao (1)
> **Speakers:** - [mariann] (1)


### 3. Spring Data JPA Query Methods

[↑ Back to Table of Contents](#table-of-contents)

#### [Property expression query methods](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=0)** - [Instructor] For general purpose database lookups, the built-in FIND ALL and FIND ONE repository methods are sufficient. But what if you want to look up all full-time students or students with a certain last name or students with an age range? This chapter demonstrates how to use [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) Commons to query a data source. Spring Data property expressions to the rescue! Via bin utils and reflection, Spring implements the methods under the covers for us. However, we must follow the rules when declaring methods and correctly mapping the entity properties to the method signatures. So these are the rules when using property expressions to query for entities. First we have to declare the return types for a single value. It could be an actual class or an optional of it. For multiple, a collection. Then you need to begin the methods signature with findBy followed by property expression name in camel case. For example, the course repository interface findByInstructor and findByName. You can also perform record count queries with property expressions. Same rules as entity queries but a long value is returned and the method starts with countBy. For example in course repository, we can get the number of courses taught by a certain instructor
>
> **[1:32](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=92)** or the number of four credit courses. Spring Data facilitates fast failure. Query methods are verified at Bootstrap. Here, course has not attributed named title. Spring Data throws a Spring Data query creation exception at startup. Without Spring Data, you would not know there was a syntax error until the query is actually invoked which is amazing. The exercise files use Spring Data JPA but the lessons learned here apply to any Spring Data Module that depends on commons. So now let's go to our code and refactor some of our student DAO queries and our course DAO queries into our repos. So right now I have student DAO up and I'm going to copy and actually going to cut these three queries, take them out of student DAO and let's paste them into student repo. And now I'm going to turn them into property expressions or interfaces we don't need the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) public. FindByFullTime. Let's see the JPQL S.full-time. Okay that works! So we can just delete that whole thing. And now, the next one. FindByAge, looking at the JPQL where S.H,
>
> **[3:08](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=188)** okay that's easy. We could just use the signature as it is and now we have a nested attribute findByLastName. And so this is actually a little more complicated so this JPQL S.Attendee.LastName. So we actually have an intermediate attribute we need to put in there. Very Good. Now let's look at the course DAO and the queries we want to pull out of that one, findByName, findByPre-requisite, findByCredits and findByChairLastName. Delete those. Paste them into our course repo and let's get rid of that public. FindByName, okay that's good. No problem there with that signature. FindByPre-requisite, a JOIN on the pre-requisite. Okay that's good. FindByCredits, also another easy one. Line up our indentation. FindByCredits as is. That's fine. FindByChairLastName. Let's look at the JPQL. Okay there's intermediate department attribute that we need to put in there.
>
> **[4:40](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=280)** So findByDepartment, chair and then there's also member last name. So, what Spring JPA is doing in reverse, what we're doing it forward now which is it's going to derive from the signature what the JPQL should be for this and then execute it at run time. But at Bootstrap, it's actually going to verify that that is correct. So let's actually put an error one in here. In StaffRepo, we're going to put a dummy one. So, let's go and say findByNothing int X.
>
> **[5:25](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=325)** And we're going to throw that erroneous property expression there and then see what happens. So we're actually going to have some compilation errors in the J unit test findByOneAttribute because some methods that were used to be in studentDao are no longer there or maybe have been renamed. So first of all, let's refactor this to the student repo and then course repo
>
> **[6:02](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=362)** and then change the type. And we have still have some syntax errors because the method names have changed. So findByLastName is now findByAttendeeLastName and findByChairLastName is now findByDepartmentChairMemberLastName. Okay, no compilation errors. Let's run this test and see if it runs. And we have an error. Let's see what Spring is complaining about. Go all the way the bottom of the message. It's complaining about the method that we put in StaffRepo findByNothing. No property, nothing found. So let's go back and remove that and run the test again. So what's really cool is we weren't even injecting staffRepo into this particular test. So just the fact that it found that problem and we weren't even referencing it is huge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (8), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Code Identifiers:** findbyname (2), findbylastname (2), findbychairlastname (2), findbynothing (2), findby (1)
> **Env Vars:** dao (5), jpql (5), find (2), jpa (2), join (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (2)
> **File Paths:** s.h (1)
> **SQL:** join (1)
> **UI Navigation:** go to (1)

#### [Query method clauses with property expressions](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=0)** - [Instructor] Now that we've run some simple [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) property-based query methods, let's kick it up a notch and look at some sample query methods containing clauses and more complex property expressions. Here are some examples of queries with logical expressions, findByFullTimeOrAge and the parameters are passed in whether they're full or part-time or not. And the target age, findByAttenndeeFirstNameAndAttendeeLastName. So the parameters are first name passed in and last name passed in. So we have query methods using expressions with operators. First is findByAgeGreaterThan minimum age. So we want to find students older than a certain age, findByFullTimeOrAgeLessThan. So we want to pass in the full-time status and the maximum age, findByAttendeeLastNameIgnoreCase. So we are passing in the last name and it's not case sensitive. How about limiting the number of results or sorting them? These are getting a little more complicated. So I put a comment above each method to understand what it's trying to accomplish. Find highest student in the alphabet. So that method would be, findFirstByOrderByAttendeeLastNameAsc, which means ascending, Find oldest student would be, findTopByOrderByAgeDesc, which is descending.
>
> **[1:37](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=97)** And then find the three oldest students, findTop3ByOrderByAgeDesc. There are many more options for you to choose from. Refer to the spring data reference, appendix C, repository keywords form even more options for you. Now let's extrapolate the student DAO methods into student repo. So I have the student DAO up and we need to refactor all of these methods into student repo and they're long and complicated. So I've actually copied and pasted into student repo, the name of the old one in the DAO and then how that would equal in a property expression in the repo here. So I'm going to uncomment this, find oldest is findTopOrderByAgeDesc, findBy first and last name is, findByAttendeeFirstNameAndAttendeeLastName. Find by age less than is the same as find by age less than. Find similar last name. So this is findByAttendeeLastNameLike, so this is sort of like a criteria where you would put in rejects or a percent sign to do a wild card in the string, findFirstInAlphabet would be, find first by order, by attendee, last name ascending. And find3Oldest would be,
>
> **[3:12](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=192)** findTopByOrderByAgeDescending. So these are invoked in the findBy clauses and expressions. So we'll do what we've been doing. Let's refactor the DAO into a repo.
>
> **[3:31](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=211)** And it's going to give us a lot of compilation errors. So find oldest. What was find oldest? Find oldest is this signature, findByFirstAndLastName,
>
> **[3:53](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=233)** findSimilarByLastName. So here we're passing in any student who has a last name that has a letter O in it,
>
> **[4:11](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=251)** findFirstInAlphabet.
>
> **[4:21](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=261)** And the last one is find3Oldest and that maps to this long thing, findTop3. And that's some examples of complex clauses and expressions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (2)
> **Code Identifiers:** findby (2), findfirstinalphabet (2), find3oldest (2), findbyfulltimeorage (1), findbyattenndeefirstnameandattendeelastname (1)
> **CLI Commands:** find (12)
> **Env Vars:** dao (4)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [@Query annotation](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=0)** - [Instructor] We've seen some pretty cool ways to make query methods using property expressions in the method signature. Another way is to declare a query method by applying an @Query annotation. The contents of an @Query annotation can be a source-specific query language, like JPQL, or a query language native to the actual data source management system, like H2 [SQL](../../Skills/Data%20Science/SQL.md) in our examples. When declaring a query method with @Query, the method signature can be anything you like. It does not have to follow property expression rules. Let's look at some reasons why using @Query is a better choice. It's encouraged to use non-native queries, because they are verified at Bootstrap. Native queries are only verified when invoked. So why would @Query be a better choice, then? Well, one is method simplification. Sometimes property expressions can get too long and awkward. Doesn't findByChairLastName seem more natural than findByDepartmentChairMemberLastName? Parameter substitution is possible with the @Param annotation. If I didn't supply @Param, then the question mark param number works just as well. Another reason to use @Query is that the query is just too complex for property expressions. In the first query, we need to take a JPQL join of Course to prerequisite courses. The second query is a JPQL select new, which returns a whole new object that's not even a JPA entity.
>
> **[1:34](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=94)** There are times when you just need to go native, meaning actually make a call to the native data of a management system. You can do this by setting the native query attribute to true. Even for a native query, the resulting roles are still mapped back to the JPA entity. In this example, I'm making a call out to H2 SQL to find the three youngest students. It may sound strange, but as of this recording, JPQL does not provide the ability to limit the results of a query, something which is possible with property expressions. So we're going to refactor the work we did in the last video in StudentRepo to have better sounding method names. So I'm actually, we still have the comment of the old name. So I'm going to refactor to rename it back to what it was.
>
> **[2:45](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=165)** Well, findByAgeLessThan was good enough, so we'll just keep that one, but findSimilarLastName seems a lot better than this. Oops, I need to actually tell the IDE to refactor it, otherwise I'll have a compilation error. Let's refactor this ugly looking thing to findFirstInAlphabet. And finally, find3Oldest.
>
> **[3:29](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=209)** Okay, we've refactored these, now let's actually put in our @Query methods. So we're going to do the simple ones first. @Query. And so, let's actually go back to the original DAO method for find by first and last name, and see what was there before. So here, we have the original JPQL query from our DAO.
>
> **[4:00](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=240)** I'm going to copy that and paste it into the @Query annotation. And so, we need to do, if we want to follow what's being done in this JPQL, we have a parameter of first name and last name. So I'll do @Param, and @Param on the last name.
>
> **[4:28](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=268)** And findByAgeLessThan was fine, findSimilarLastName, let's look at that one. So findSimilarLastName, we'll copy that.
>
> **[4:51](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=291)** And then we have name criteria here, so we need to put the @Param. Now, we have three more methods to refactor, and findOldest, for example, looking at the original findOldest, see, we set max result equal to one. And we cannot really do that in just JPQL, so I, because I didn't want to type a lot and make mistakes, I actually put the H2 native query right here, so let's actually apply that. So within HBQL, I can limit the number of results.
>
> **[5:41](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=341)** And next, I need to do... For findFirstInAlphabet also needs a native query, because we're limiting it to one. So you notice that I have in that native query last_Name. So that is what happens whenever the H2 database without actually adding @Column annotations. It's just going to, by default, switch from camel case to underscore case. So that's why it's last_Name. And then finally, on find three oldest students. find3Oldest, that uses the set max result to three. So that's, we have to do, if we want to just do this in one line here. We'll set that to native query equals true. Now obviously, if we went to production, and didn't use an H2 database, this code may or may not work. But just for teaching, this is a helpful way to show it.
>
> **[7:03](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=423)** Okay, everything's compiling. Is everything happy? Okay, so let's run our [JUnit](../../Skills/Software%20Development/JUnit.md) test, that's now... Since I refactored, the methods' names have changed. So let's run this. And oh, and the test passed, that's wonderful. And now, we get to do one of my favorite things in the world. Right now, there is nothing accessing any methods in StudentDao, so we can actually remove it from our project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [JUnit](../../Skills/Software%20Development/JUnit.md) (1)
> **Env Vars:** jpql (7), sql (2), jpa (2), dao (2), ide (1)
> **Code Identifiers:** findsimilarlastname (3), findbyagelessthan (2), findfirstinalphabet (2), find3oldest (2), findoldest (2)
> **CLI Commands:** make (3), find (3)
> **Definitions:** is a  (3)
> **Cross-References:** in the last (1), go back to (1)
> **Analogies:** for example (1)
> **Prerequisites:** prerequisite (1)

#### [Challenge: Refactor to three query methods](https://www.linkedin.com/learning/spring-data-2/challenge-refactor-to-three-query-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/challenge-refactor-to-three-query-methods?u=76281980&t=0)** - [Instructor] It's time for another challenge. This time we're going to see how well you understand query methods. Let's see if you can refactor the department DAO find by name method, and put it in department repo. Then refactor the staff DAO find by last name method, and put that into staff repo. You must keep the method signatures the same, just declare the interfaces. Then you need to refactor a [JUnit](../../Skills/Software%20Development/JUnit.md) test, create query test, to invoke the new methods. So just to help you along a little bit here, there's staff DAO, and here's a method find by last name. You want to put that into staff repo, and then here is department DAO, find by name, and you want to put that in department repo, and then finally, the criteria query test invokes the department DAO and staff DAO. Those find by methods, refactor those, find by last name and find by name methods, in here, and then run this to make sure it's still runs. You don't have to understand what's going on inside here yet but just run it so it doesn't run with errors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JUnit](../../Skills/Software%20Development/JUnit.md) (1)
> **CLI Commands:** find (7), make (1)
> **Env Vars:** dao (6)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Refactor to three query methods](https://www.linkedin.com/learning/spring-data-2/solution-refactor-to-three-query-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/solution-refactor-to-three-query-methods?u=76281980&t=0)** - [Instructor] So did you figure it out? Well, let's start with the easy one, which was department repo. And all we had to do is find by name on the department repo, easy peasy. Staff repo is a little more complicated because there's an intervening attribute called member but we wanted to keep it as fine by last name. So we did a JPQL query using at query annotation so select S from staff S where S.member.last name equals last name and then put the at param in there. Then we changed department DAO and staff DAO to the repos and refactored those. So it changed a couple methods in here and let's run it. It still runs fine. And then here's some more good news. Back in the department DAO nothing uses this method anymore, find by name, and therefore we can actually delete the department DAO.
>
> **[1:12](https://www.linkedin.com/learning/spring-data-2/solution-refactor-to-three-query-methods?u=76281980&t=72)** And then in staff, we have other methods that are still used but we can remove this find by last name.

> [!info]- Semantic Content
>
> **Env Vars:** dao (4), jpql (1)
> **CLI Commands:** find (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Paging and sorting](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=0)** - [Instructor] In our StaffDao class, there is a method to look up a subset of staff entities. This subset is referred to as a page. The first parameter is the page number, the second is the size of the page. The method calculates the actual record numbers with the setFirstResult and setMaxResult on the query object and hardcodes the sort in the JPQL on the last name of the staff member. I am happy to say that [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) provides a better out-of-the-box approach to paging and sorting, rendering this method unnecessary. In this video, we're going to learn just that, query methods for paging and sorting. So how is this done? There is a PagingAndSortingRepository interface, and it overrides the findAll methods with Spring Data Sort and Spring Data Pageable parameters. And the JpaRepository interface already extends from PagingAnSortingRepository. So all of our repo interfaces in our project already have these methods available. Plus, query methods can apply paging and sorting just by adding a Spring Data Sort, or a Spring Data Pageable parameter. We instantiate a Spring Data Sort by invoking the static Spring Data Sort.by method, which is overridden several ways. Let's look at these examples.
>
> **[1:34](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=94)** Sort A is created by passing a Sort.Direction, followed by the attribute as a string. Sort B is identical to Sort A, but a Sort.Order is provided. Sort C only provides the attributes and the Direction is the default. Finally, Sort D shows that many levels of subsorting can be applied. So the findAll which applies Sort D will get all of the staff sorted by lastName. And if the lastNames match, the subsort of firsName is applied. A Pageable object is created by the static PageRequest.of method. The first parameter is the number of the page. The second parameter is the page size and the optional third parameter is the Sort object. The first page always starts at index zero, so using the Sort of lastName and a subsort of firstname, Pageable X will request the first five staff members and Pageable Y will request the next five. Finally, invoking the findAll method with the Pageable object returns a container of type Page. The Page contains the found entities and [Metadata](../../Skills/Web%20Development/Metadata.md) about the results. To get the results, we can can invoke getContents for the list, or get for a stream, getTotalElements returns the total number of elements matching the query,
>
> **[3:09](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=189)** getTotalPages returns the number of pages of elements. Now, let's refactor our university project to leverage Spring Data paging and sorting. So here's our method in the StaffDao find and passing in an int page number and then the JPQL, and then, having to apply the first results and the max results. Let's, instead of invoking this, we're going to invoke our StaffRepo and we don't have to add anything to StaffRepo, because it already has these paging methods, I'll show you,
>
> **[3:49](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=229)** as part a PagingAndSortingRepository, it has these findAll with the page. So let's go to PagingTest, where we're now going to invoke the StaffRepo.
>
> **[4:20](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=260)** And now, we're going to replace this with what actually comes out of the box for us with Spring Data. I'm going to create a Sort,
>
> **[4:44](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=284)** so this Sort will do a Sort.by member.lastname. And then, we're going to actually do the page look up.
>
> **[5:13](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=313)** So now, this findAll method is going to do a page request of, and I'm going to request page zero of size five, just so that it would render the same results as the original StaffDao method. So we're going to get rid of that
>
> **[5:36](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=336)** and I'm going to rename this SpringDataPage. And then, so staffPage can have the same results, same value, equals staffSpringDataPage.getContent.
>
> **[6:00](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=360)** And now we have a list. Let's run this to see if we get the same results as before.
>
> **[6:11](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=371)** Yep, we didn't break anything. It got the same expected results as before. So good news, we can now delete StaffDao from our project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (9), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Code Identifiers:** findall (5), lastname (2), setfirstresult (1), setmaxresult (1), lastnames (1)
> **Env Vars:** jpql (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 4. Dynamic Spring Data JPA Queries

[↑ Back to Table of Contents](#table-of-contents)

#### [Specifications](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=0)** - [Instructor] Thus far, we have only learned about [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) queries whose parameters are known at implementation. In some applications, we may not know this until runtime. We need to be able to query the data store in a dynamic fashion. In this chapter, we are going to look at the various ways to create dynamic queries with Spring Data. Spring Data Commons query methods are static. Filtering by multiple fields requires several query methods covering all possible combinations. In this course repository example, filtering just by instructor, credits, and department, requires several different query methods plus logic to decide which method to invoke. The original CourseDAO provides dynamic filters to the course table via the [Java](../../Skills/Software%20Development/Java.md) Persistence Criteria API. This a API requires first instantiating a criteria builder from the entity manager to create a criteria query. The root of the course specifies the root table. Multiple predicates are built on the fly at runtime and applied to the criteria query's where clause. Finally, the criteria query is invoked via the entity manager. Not the most elegant looking code is it? Spring Data JPA provides an abstraction called the JpaSpecificationExecutor Interface. It invokes the same methods, but hides all the extraneous details from us. Here, CourseRepo implements not just JPA repository,
>
> **[1:37](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=97)** but also JpaSpecificationExecutor. The various findAll methods require a specification attribute. So, what are specifications? In this example, we instantiate an anonymous specification class where the two predicate methods body is built at runtime. We see the root query and the criteria builder from the criteria API are still part of the equation, but Spring Data provides them for us. Still not the most elegant, but luckily we can employ Java 8 Lambdas and delete unnecessary declarations. This is much better. Now we can concentrate on the most important part, creating the predicates. So, let's refactor our CourseDAO to use Spring Data JPA Specifications. So, in the CourseDAO, we have a findByCriteria method. The criteria query is passed into it and invoked by the entity manager. So, what invokes it? It's our business service class Dynamic Query Service. In DynamicQueryService.findCoursesByCriteria, a course filter is passed in. This is CourseFilter. CourseFilter contains optionals for department, credits, and instructor. They are initialized to empty, and the builder pattern is employed to set them at runtime. Back in our Dynamic Query Service,
>
> **[3:12](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=192)** we set up the criteria builder, criteria query and the root for Course. Then, we build our list of predicates by seeing if the department, credits, or instructor are present in the filter. If it is, we add it to our list of predicates and And conditions for the values. After that, we apply the criteria query Select of the root and where the array of predicates, and finally invoke coursesDAO.findCoursesByCriteria method passing in the criteria query. Let's test it. So, it's invoked by CriteriaQuerTtest, and we see that the setup is, there's a private method called queryAndVerify, which is invoked and passed in the criteria filter for various accommodations, and then it iterates through that and prints it out. So, I'm going to just run it, and we'll see the queries for all humanities courses, the results for all for credit courses, and courses taught by Professor Black, and courses in humanities taught by Professor Black and for credit courses. And it's just by invoking the filterBy method on the course filter that it knows what attributes to filter by. So, here's all humanities courses, all for credit courses, courses taught by Professor Black, and courses in humanities taught
>
> **[4:47](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=287)** by Professor Black and for credits. Now, let's refactor the code to use specifications instead. First we're going to go to CourseRepo, and add another extends JpaSpecificationExecutor.
>
> **[5:10](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=310)** Then, we're going to go to CourseFilter, and at the bottom here, because it's a lot of code, I just put it in a comment, to get the specification for whatever the current course filter is set to, it will derive the specification for the course. So, now we generate the specification from this particular CourseFilter. You have to make sure that the predicates that you import is the predicate from javax.persistence. There's another one in Spring, but you don't want that, you want the one from javax.persistence criteria. Now, let's go over to our DynamicQueryService, and we're going to do a big change here. We're going to now use CourseRepo, and we are not going to use the EntityManager at all. We're not going to use this old findCourseByCriteria method, and so I'm going to regenerate the constructor, so Spring will be able to eject that, and then finally we're going to have the method filterBySpecification, and we're going to pass this filter into our findAll method, and we're going to say getSpecification.
>
> **[6:43](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=403)** Big change there. And now finally, in our CriteriaQueryTest, we're going to change this to now reference the query service, is now going to invoke filterBySpecification. So, now we are going to run this, and just keep in mind that now it's going to invoke the new method filterBySpecification, and then the CourseFilter is now going to derive the specification for us. So, let's run this and make sure that it still passes. and it does pass, and it returns all the same values as before. And our final step is that we can now delete our CourseDAO, so, we don't have any more DAOs in our project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (6), [Java](../../Skills/Software%20Development/Java.md) (2)
> **Code Identifiers:** filterbyspecification (3), findall (2), findcoursesbycriteria (2), findbycriteria (1), coursesdao (1)
> **Env Vars:** api (3), jpa (3)
> **Documentation:** specification (6)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Prerequisites:** set up (1), setup (1)
> **Versions:** java 8 (1)

#### [Querydsl](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=0)** - [Instructor] A step up from specifications is the third party library, Querydsl. Querydsl provides an intuitive, type safe querying language that can run on multiple types of data stores. So its no wonder that [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) has a Querydsl executor. We use the apt-mavin plugin to generate special querying [Java](../../Skills/Software%20Development/Java.md) classes called Q classes. The backbone of a Querydsl for JPA are these Q classes and they are generated at build time via that Maven plugin. When the plugin is invoked, all of the JPA entities will have an associated Q class which can be referenced at implementation. Spring Data Commons provides an extension to Querydsl via the Querydsl Predicate Executor interface, a repository extending from Querydsl Predicate Executor overloads the find, count and exist methods. Predicate is the search criteria. These predicates are Querydsl predicate classes, not JPA criteria predicates. Q classes are search criteria helpers to create what are called Boolean expressions, the building blocks of predicates. In this example, I have three helper methods that are used to dynamically create Boolean expressions. There is a hasLastName helper method, a isFullTime helper method,
>
> **[1:34](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=94)** and isOlderThan helper method. I'll invoke the QStudent class attributes and conditionals. Now, we just mix and match the Boolean expressions into predicates and pass them into our repository findAll method. Its much cleaner looking, isn't it? And it reads better too. So find all students with last name Smith that's full time and is older than 20. Find all students that are full time and is older than 20. Find all students that has a last name Smith and is older than 20. And find students that are full time or older than 20. You can learn more about this powerful, open source project on www.[querydsl.com](https://querydsl.com). So lets apply Querydsl to our criteria queries. So the first thing we're going to do at the beginning of this chapter is in the pom. I have this plugin commented out so I'm going to uncomment it. The dependency for Querydsl and then the plugin. So now that that's in place, I'm going to use the Maven view here. You can do this at the command line too but I'm just going to first import the changes of the pom, and then just run the compile goal and we'll see the Q classes that it generates. So it finished
>
> **[3:07](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=187)** so its in the target folder, generated sources, Java, and here are these Q classes. So just open up source, course for example, Qcourse, and its got some nice public final static methods and attributes to access. So now lets actually, in our code, we're going to create a new repo. And call it CourseQueryDslRepo and its an interface.
>
> **[3:59](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=239)** And now we're going to add the executor, predicate executor on course, okay? And now, we're going to go to our course filter and there's some code that's commented out that we're going to uncomment. And this is the get Querydsl predicate. So you can see I have to put the full package of Predicate in here, otherwise it clashes with the Predicate that we've already used. And so this Querydsl Predicate is referencing this course here, that's a Q class, course.department.eq. In department, if the credits is present, add the predicate to course credits and if instructor is present, add the predicate for instructor. Okay, now to our dynamic query service. We're going to add the CourseQueryDslRepo and we're going to regenerate the constructor so its properly injected into this class.
>
> **[5:11](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=311)** And now we're going to add a new public method. And now we want to call findAll and we're going to filter.getQueryDslPredicate. So this method on the findAll returns an iterable, so I need to translate that and have it return a list. So I need to do a forEach and that will iterate through the iterable and add it to the courses list and then return courses. Very good. And now, let's go to our criteria query test.
>
> **[6:10](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=370)** And now, instead of filter by specification, we're going to invoke the new method we just wrote, filterByQueryDsl. It compiles, okay. Let's run it. Oh, keystroke error there. Run it again. And it passes, so its giving the same criteria results that were expected before where we're filtering first by all humanities courses, then all four credit courses, then courses taught by Professor Black, courses and humanities taught by Professor Black and four credits.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (2), [Java](../../Skills/Software%20Development/Java.md) (2)
> **Code Identifiers:** findall (3), haslastname (1), isfulltime (1), isolderthan (1), getquerydslpredicate (1)
> **CLI Commands:** find (5), apt (1)
> **Env Vars:** jpa (3)
> **UI Navigation:** go to (2)
> **URLs:** [querydsl.com](https://querydsl.com) (1)
> **Documentation:** specification (1)
> **Tools:** command line (1)

#### [Query by Example](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=0)** - Now let's look at QueryByExample as a dynamic querying option. It is a simple alternative and is built into [Spring Data](../../Skills/Web%20Development/Spring%20Data.md). Why use QueryByExample? It's much easier than having to learn another query language like JPQL. We look up records just based on entity settings. It's independent of the data store and it's easy to integrate with frequently refactored code. Why not use QueryByExample? Well, it does have its limitations. It falls short for querying required nesting property constraints or complex string matching. To add QueryByExample we just extend from QueryByExample executor interface. The JpaRepository interface already extends from QueryByExample executor. So we don't need to update our repositories. The QueryByExample executor interface provides find all, find one and count methods which take an example attribute. So how do we instantiate an example class? One way to instantiate an example class is with a probe. A probe is an instance of the entity with values we want to filter by. In this case department, we set the attributes and department that we need to match. So to find the department with the name, "humanities," we construct the department object with only the department name set. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the attributes are null. So to find all departments whose chair has the first name of, "Rachel," we construct the department object where the name is null,
>
> **[1:35](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=95)** set the first name attribute of the chairperson to, "Rachel," and the last name attribute of the chairperson to null. The other way to instantiate an example is to provide an ExampleMatcher with the probe to further refine the search. In this example, we have a case insensitive search on all departments ending with the name, "sciences." ExampleMatcher methods follow the builder pattern so you can just keep adding as many restrictions as needed. The restrictions here are with ignore case and with string match or ending. So let's use QueryByExample for our criteria queries. The first place we go again is to our course filter. And based on the settings of our attributes in the course filter, we will return an example probe. So I'm going to uncomment this code, that will instantiate a course object and then based on the presence of the credits, instructor or department's object will actually get the value of credits orElse put in a null, the value of instructor orElse a null, the value of the department's orElse a null. And then create an example probe from that object. And now we'll go to our dynamic query service and we're going to create a method that returns that. So then we're going to invoke the course repo, findAll with example as the attribute.
>
> **[3:09](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=189)** So filter dot getExampleProbe. And then we will return the result of that. And now let's go to our criteria query test and modify filterByExample and save that. That compiles and let's run it. And our test passes and we're getting the correct filters that we ask for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Code Identifiers:** orelse (3), findall (1), getexampleprobe (1), filterbyexample (1)
> **CLI Commands:** find (4)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** jpql (1)
> **Speakers:** - now (1)
> **Non-Speech:** (typing) (1)

#### [Challenge: Query by Example](https://www.linkedin.com/learning/spring-data-2/challenge-query-by-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/challenge-query-by-example?u=76281980&t=0)** (bright upbeat music)
>
> **[0:07](https://www.linkedin.com/learning/spring-data-2/challenge-query-by-example?u=76281980&t=7)** - [Instructor] It's time for another challenge. For this one, we are in the CriteriaQueryTest, and on lines 35 and 36, we are using query methods to look up the humanities department by name, and the professor whose last name is Black. Let's see if you can modify these two query methods. Instead of using query methods, use query by example to look up the humanities department and look up Professor Black. And bonus points if you could do it where it's a case insensitive search.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### [Solution: Query by Example](https://www.linkedin.com/learning/spring-data-2/solution-query-by-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/solution-query-by-example?u=76281980&t=0)** - [Instructor] Did you figure it out? Well, here's the answer. On line 38, we're calling departmentRepo.findOne instead of find all because we expect only one result when looking up the department name, and the example of is new department where the name that's passed in is capital H in Humanities, and then null for the chair. And here's the extra challenging part which was saying ignore the case. Even if there was not a capital H on Humanities, it would find it. So, matching static method dot with ignore case and then we're calling get on the optional that's returned, return Humanities, and then on Professor Black, there's a find all because you could have multiple professors with that same last name, so find all. And then our probe is an example of a new staff member and inside that is instantiating a person where the first name is null and the last name is Black, and then the second parameter in the probe is the matching dot with ignore case and then, we want to get back a list there which we will stream, and then just get the first one because we just expect Black to be the only one that's with that last name. And so, let's run this in the debugger to verify we get back what we were expecting.
>
> **[1:39](https://www.linkedin.com/learning/spring-data-2/solution-query-by-example?u=76281980&t=99)** So, we're at our break point. So, in our debugger, we see that Humanities is returned with this ID. I got back the Humanities object we were expecting. And Professor Black, Jack Black, is what we wanted and we got that back.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Code Identifiers:** departmentrepo (1), findone (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. More Spring Data Features

[↑ Back to Table of Contents](#table-of-contents)

#### [Spring Data REST](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=0)** - [Instructor] [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) is a module for exposing spring data repositories as hypermedia driven RESTful web services. And it's actually pretty amazing. Similar to Spring Data commons which extrapolates the underlying backend data store services from a CrudRepository, Spring Data REST exposes those same repositories as web services with no coding or extra configuration. All we need to do is add the Spring Data REST starter dependency to the palm, rebuild the application and start it. And that's when the magic happens. At application startup, after bootstrap, Spring Data REST finds the jpa entities that have the Spring Data repositories, creates an endpoint that matches the entity name, appends an s to that endpoint, and exposes methods as restful resource APIs over HTTP. So let's see how HTTP verbs get, post, put, patch, and delete our map to the repository methods. findAll, findById and the custom query methods mapped to HTTP get. So for example, let's say that our department repository just extended from CrudRepository HTTP get departments invokes departmentRepo.findAll, get/department/5 would find the department's, by Id five. And the query method fine by name is exposed by a department/search/findByName. The staff repository here extends from JpaRepository.
>
> **[1:38](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=98)** Remember, JpaRepository also extends from paging and sorting repository. So staffs has paging and sorting parameters. The same is applied to the query methods that include a Pageable parameter. HTTP post creates entities. The request body is in [JSON](../../Skills/Web%20Development/JSON.md) format, and maps to the save method. HTTP put and patch modifies an existing entity. Put modifies all non ID elements of an entity, patch modifies some elements. So a staff member with identifier two, Spring Data REST must first look up that member, and apply the modifications. And finally, HTTP delete of the endpoint maps to the repository.delete method. The response body returns Hypermedia enabled JSON content. The relationships, even if the JPA entity is [Fetch](../../Skills/Web%20Development/Fetch.md) type eager contains the endpoint of that relationship. So the chair attribute instead of being the first and last name is actually a link that you would use to fetch later on a different call that chair. We can override this behavior by creating a projection interface. Here is a projection called showChair that exposes the department name, and the chair formatted with spring expression language. Now invoking /departments endpoint with the projection equals showChair
>
> **[3:12](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=192)** will actually see the name of the chair, [John](../../Glossary/Tool/John%20the%20Ripper.md) Smith. Finally, the default mapping for the staff entity is to a staffs endpoint. Staffs is not proper English as staff is already plural. Thankfully we can override the default endpoint name with a repository rest resource annotation. So let's apply Spring Data REST to our university application. The first thing we need to do is in this branch we have some dependencies that are commented out. So the first dependency here is actually our spring-boot-starter-data-rest for Spring Data REST, but I'm also including a dependency for spring-doc-openapi-ui, and that's our generating swagger ui, so that we actually have a webpage that we can access in our browser that will interact with the APIs for us rather than us having to do everything on the Chrome url. And so, and then the next dependency is the same product, but for actually looking up Spring Data REST APIs. So uncommand that block and import the changes. There's a new file in the domain package called showChair, and this is our projection that we want to create to so we can show the chair and it's commanded up, but I'm going to uncommand it, and include projection in our imports. And so this showChair, we're actually using attributes in the entities.
>
> **[4:45](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=285)** So this will be first name, and then a space and then pulling in the last name. And then that's going to be returned in the showChair interface. Finally, we want to get rid of that S at the end of staffs. Okay, now let's make sure Maven is happy, but that things could still compile. This is the command line to run Maven install, or I'm just doing it within my IDE and everything compiles. You can start this as a jar at the command line, or I'm just going to actually run it the main program within my IDE, run university application. Okay, it started up, okay, let's go to our browser. So we're going to go to localhost:8080 which is we're looking at something on our run machine /swagger.ui/index.[HTML](../../Skills/Web%20Development/HTML.md). And this will show us a visual presentation of all of our restful resources that we now have exposed over HTTP. And you can actually see for all of our rest repositories we now have controllers for Get, Put, Patch every single verb that you would ever want to, all of our queries that we ever want to do. So let's first create a staff member. So we'll scroll down to the staff section, and let's use HTTP post. It's a nice little ui here to try it out. It's, and it has the format for it if we want to create a staff member, so you don't create the ID that's generated for us.
>
> **[6:22](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=382)** We want to create a staff member with the name Bob and last name Mack, and then execute and it will invoke this API to post, to staff and this data, okay? And we see that it did work and the response comes back, and we know that now the staff ID is one from the href. So I'm going to collapse this section, and do a get on all staff. It's going to show us, okay, here's the staff. We have Bob Mack, his first name, and then we have all kinds of reference links as well and paging information, okay? Now, that we have a staff number, and we know the idea of the staff number is one, let's create a department, and say that this Bob Mack is the chair of that department. So we'll go to the department controller, go to post.
>
> **[7:32](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=452)** So I'm going to create a department, remove the, this nice swagger, gives you a sample of what the data could look like that you want to put in. So I'm going to create a department called Sciences. And now here's where I put in a chair ref. So it's a reference to that staff member. So [http://localhost:8080/staff/1](http://localhost:8080/staff/1),
>
> **[8:07](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=487)** And we're not going to add any courses right now to the department. We want to make sure we remove that comma, otherwise we're going to get an error. So let's create Sciences department. And that worked, we created sciences department, and we see that department is ID two. And now, let's try to use that projection because whenever we do a get on departments,
>
> **[8:41](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=521)** we look up the department, it returns the chair, it just says a link. It doesn't really give us a lot of information, but we created a projection to deal with that. So here's the URL to use a projection. So we localhost, and, sorry, I'm doing this at the URL at the top here because this information wasn't easily available in swagger, on the swagger-ui. So that's, that's why it's in this URL right here. So it's localhost:8080/departments/2?projection=showChair.
>
> **[9:17](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=557)** Issue that, and so it came back, and we see that now not only is it having the links, we actually have this chair name attribute show up, and remember where we had the projection with the first name and then a space last name.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (11), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (11), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (2), [John](../../Glossary/Tool/John%20the%20Ripper.md) (1)
> **Env Vars:** http (9), rest (8), url (3), json (2), ide (2)
> **Code Identifiers:** showchair (6), findall (2), findbyid (1), departmentrepo (1), findbyname (1)
> **UI Navigation:** go to (4), scroll down (1)
> **CLI Commands:** make (2), find (1)
> **URLs:** [localhost:8080](https://localhost:8080) (2), [http://localhost:8080/staff/1](http://localhost:8080/staff/1) (1)
> **Ports:** :8080 (3)
> **Tools:** command line (2)

#### [Spring Data MongoDB](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=0)** - [Instructor] [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) supports many types of data sources via the commons Crud repository. We've already seen it in action with Spring Data JPA. Let's see what happens when we apply it to [MongoDB](../../Skills/Software%20Development/MongoDB.md). We have a new simplified [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) University project in the 5_02 branch. In the pom.xml configuration file from Maven, there are two dependencies that we should look at. One is spring booth starter data MongoDB, and that's our starter for MongoDB. Flapdoodle is our embedded Mongo instance, and so that instead of h2 for relational database flapdoodle is our MongoDB in memory instance. So before we do anything, if you switch branches from using JPA, let's do a mvn clean, so any of the old classes don't cause conflicts when compiling with this new project. So we have a domain package with three domain model objects department, person and staff. Instead of JPA entities, MongoDB persists what are called documents. Staff is a MongoDB document. It has a generated id, which must be of type string. Staff encapsulates person as a member attribute, person is just a plain old [Java](../../Skills/Software%20Development/Java.md) object, containing first and last name. And then we have the @Document annotation which comes from spring data MongoDB core mapping. Department is the other MongoDB document.
>
> **[1:38](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=98)** It has a generated ID, department name, and a staff member that is a department chair. For each document, there is a repository, department repo and staff repo. Staff repository is a spring data paging, and sorting repository, and it also implements Crud Repository similar to JPA staff repository in chapter four. There are two query methods, findByMemberLastName is a property expression. findByFirstName has the at query annotation. Here, instead of JPQL, there is a Mongo [JSON](../../Skills/Web%20Development/JSON.md) Query. Department Repo is a Mongo repository which extends paging and sorting repository, query by example, executor and Crud repository. There are three query methods, findByName and findByChair, and they are simple property expressions. Find name by pattern issues a JSON query, which performs a regular expression search on the department name. University application as our spring boot application class, just like the JPA and h2 example, Spring boot initializes the in-memory database at startup. I'm using Fungo instead of Mongo. So there was zero set up needed to run the exercise files. I do need to specify the spring MongoDB embedded version in the application properties for Fungo to work. So here's my application properties,
>
> **[3:10](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=190)** so you could have be using application.yaml, and this has to be set to tell what version to apply in production. This is not going to production, but you still need to set this value for the Fungo to work. Now we have MongoDB demos, which is a J-unit test, and at the top of them or so, just some helper methods. One helper method creates a staff passing in the first last name, and it calls the staffRepo save method with a new staff object. And another helper method is create department just passing in a department name, and a staff attribute to instantiate, and do department in the database. Let's run this in debug mode. Okay, so we've hit our break point. I'm going to move this up a little bit. And so we're going to create a bunch of staff members, and a bunch of department members. And I'm just going to hit go to go to this next break point. I have to do the console. So I'm going to call this query to find all staff members, and sort alphabetically by last name. So I was going to call that findAll on this sort that I've just declared, and print them to the screen. So here's all those staff members sorted alphabetically by last name. Next, I'm going to find the first five staff members, and sort alphabetically by last name.
>
> **[4:47](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=287)** So I'm passing in a page request, which we've talked about before on the staff repo, and print those out. And now a property expression to findByMemberLastName on staffRepo. And now find all staff members with first name as [John](../../Glossary/Tool/John%20the%20Ripper.md), findByFirstName, John. And there we found John Jones. And now, find all departments, and sort alphabetically on the last name. So we're passing in our sort with a direction, and the property last name. And now we are going to issue the property expression findByName, where departments are by the name of humanities. And it's printed that one out. And now we're going to use a regex regular expression to passing in findNameByPattern, and I'm going to do a search where anything ends in sciences. It could begins with a capital S, or lowercase s, and print those out. So we have natural sciences or social sciences. And because we have a dot before the S's, that means it's it could be anything, it's like it's a wild card. So that's why you have natural and social. And finally we're going to find chair named last name of Jones. And so here we found John Jones
>
> **[6:23](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=383)** as the chair of humanities and social sciences, and then just hit go. So it's kind of amazing that the, it's very similar to what we do with JPA, but now we've pivoted to a new type of data source, [SQL](../../Skills/Data%20Science/SQL.md) data source, but it's like we already know what we're doing to begin with. So it's nice that these things with Spring data commons can transfer to other data sources without a big learning curve.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MongoDB](../../Skills/Software%20Development/MongoDB.md) (10), [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (5), [John](../../Glossary/Tool/John%20the%20Ripper.md) (4), [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **CLI Commands:** find (6), mongo (4), mvn (1)
> **Code Identifiers:** findbymemberlastname (2), findbyfirstname (2), findbyname (2), staffrepo (2), findbychair (1)
> **Env Vars:** jpa (6), json (2), jpql (1), sql (1)
> **Definitions:** is a  (8)
> **Analogies:** similar to (2), it's like (2), just like (1)
> **File Paths:** pom.xml (1), application.yaml (1)
> **UI Navigation:** go to (2)

#### [Non-blocking Spring Data reactive repositories](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=0)** - [Instructor] [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) provides two web-to-data technology stacks. The original Servlet stack provides synchronous blocking I/O with one thread per API request. The other is the Reactive stack, which provides non-blocking I/O that leverages multi-core processors to handle several concurrent connections for multi-threading. The repositories we've used thus far are blocking and are part of the Servlet stack as well as [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) and Spring MVC. If you'd like to learn more about the Servlet stack, I encourage you to watch my course: Creating Your First Spring Boot Microservice. Reactive repositories only work with underlying data stores that support non-blocking I/Os such as Mongo, Cassandra, [Redis](../../Skills/Software%20Development/Redis.md), [Couchbase](../../Skills/Software%20Development/Couchbase.md), and R2DBC. In this video we'll see how our [MongoDB](../../Skills/Software%20Development/MongoDB.md) Spring Boot application has been converted into a Spring Book microservice that implements a Reactive stack with restful API endpoints. So this is our MongoDB Spring Boot application but now it is a microservice with a restful API because in our pom.xml we have a new dependency spring-boot-starter-webflux at line 22. And now we have spring-boot-starter-data-mongodb-reactive on line 27, which replaces spring-boot-starter-data-mongodb. Our repos now extend ReactiveCrudRepository.
>
> **[1:42](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=102)** Let's look at the provided methods.
>
> **[1:50](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=110)** And we see the typical CRUD repository methods except instead of returning optionals or lists, we see mono or [Flux](../../Glossary/Tool/Flux.md). A mono is an asynchronous publisher of zero or one result. A flux is a publisher of an asynchronous sequence of zero or any number of results. Our query methods must also return a flux or mono otherwise a runtime error is thrown at invocation. Now let's see our university application class. There is an @RestController annotation to tell Spring WebFlux that this class will expose restful endpoints. The application creates staff members and departments at startup by implementing the command line runner interface and auto wiring StaffRepo and DepartmentRepo. Now in our run method, we look and we see the typical save of our staff and our departments. But simply invoking the repository method does not automatically interact with the data source because they are asynchronous and return immediately. To interact with the data source within the same thread each publisher, mono or flux, requires a subscriber. It is the subscriber that actually triggers the interaction. Invoking block on a mono or subscribe on the flux forces the data source interaction
>
> **[3:24](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=204)** within the same thread. Invoking block on a mono will actually then return the value of that subscription. WebFlux in the web tier automatically subscribes to the mono and flux providers, and it's there where reactive programming really comes alive. So what endpoints does it expose? This class exposes restful endpoints to look up all staff members, all departments, staff by ID, department by ID and find staff member by last name. Let's run this and invoke a couple of those endpoints. The microservice will remain running as it waits to receive requests. So for this class, let's run it. And as it's starting up we see on this line, on line 42, we want to print out the staff members and the first time around it's print zero because we did not do a block on those yet. There's no subscription to that promise to look up but we want to actually have that happen within this thread. So after blocking on those monos we see that the staff count is two. On a terminal window, we're going to invoke these APIs with cURL. So curl on localhost:8080,
>
> **[4:58](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=298)** and I'm going to say staff which will look up all staff, and you know, let's pipe that to pretty print. It's a little easier to read. So those are our staff. Make it a little bigger so you can see. And let's look up a staff by ID.
>
> **[5:28](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=328)** So that's the [John](../../Glossary/Tool/John%20the%20Ripper.md) Martin staff ID. Now let's look up department, all departments. And there's our departments. Let's look up departments by ID. Find us social sciences. And there's social sciences. And finally, let's look up staff search member Jones.
>
> **[6:02](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=362)** And we find Jones there. So let's stop the application. So which stack should you choose? If you have an existing MVC application that is already performance, switching to Reactive is not critical. However, Spring does encourage the Reactive stack for new projects that use an asynchronous data store.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Flux](../../Glossary/Tool/Flux.md) (6), [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (4), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (4), [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** find (3), curl (2), mongo (1), make (1)
> **Env Vars:** api (3), mvc (2), r2dbc (1), crud (1)
> **Definitions:** is a  (2), is an  (1)
> **Tools:** command line (1), terminal (1)
> **File Paths:** pom.xml (1)
> **Code Identifiers:** curl (1)
> **URLs:** [localhost:8080](https://localhost:8080) (1)

#### [More data source support and features](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=0)** - [Instructor] Let's wrap things up by looking at the [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) website and seeing the Spring Data modules under this project. We already did a deep dive into Spring Data JPA to learn about repository abstraction and property expression queries found in Spring Data Commons, as well as methods specific to the data source. We leveraged that knowledge and applied it to the [NoSQL](../../Skills/Software%20Development/NoSQL.md) Mong DB data source. We saw how the repository abstraction was applied generically, as well as how Mongo specific features are addressed. Spring Data [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) is a module for exposing Spring Data repositories as restful HTTP endpoints simply by adding a dependency but allowed application specific configuration. If you have a relational database where the domains are loosely coupled you may want to look at Spring Data [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md). It provides a repository interface without JPA relationships so it's more lightweight than Spring Data JPA and more strictly follows the concepts of domain driven design. Almost any data source around has a Spring Data repository extraction. [Redis](../../Skills/Software%20Development/Redis.md), [Couchbase](../../Skills/Software%20Development/Couchbase.md), Cassandra, LDAP, [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md), [Neo4j](../../Skills/Software%20Development/Neo4j.md), Geode, GemFire. Now that you understand that Spring Data commons with JPA and Mongo, learning about these other modules is an easier lift. The non-blocking NoSQL data sources are available
>
> **[1:36](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=96)** in the classic servlet stack or reactive stack. And did you know that some relational data stores now support non-blocking IO? That's where Spring Data R2DBC shines. R2DBC stands for Reactive Relational Database Connectivity and it plays just as well with reactive stack as NoSQL data sources. Be aware that not all [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) support this approach and it does not provide typical features like lazy loading or caching like JPA. This page also informs you of projects that are on their way out. Spring Data recommends that no new projects should be started with Spring Data Solar. It recommends Spring Data Elasticsearch instead. Spring Data GemFire, instead use Spring Data for Apache Geode. Spring Data, JDBC Ext is being moved into the attic. And as [Hadoop](../../Skills/Data%20Science/Hadoop.md) is used less and less, Spring Data updates for that will no longer be available.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (18), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (3), [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (2), [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** jpa (5), jdbc (2), r2dbc (2), rest (1), http (1)
> **CLI Commands:** mongo (2), apache (1)
> **Definitions:** is a  (1), is an  (1), stands for (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps with Spring Data](https://www.linkedin.com/learning/spring-data-2/next-steps-with-spring-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/next-steps-with-spring-data?u=76281980&t=0)** - [Mary] So what's next? After finishing this course I would encourage you to apply [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) repositories into a fully running application. We do just that in my course, "Creating Your First [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) Microservice". Step by step we construct a [Java](../../Skills/Software%20Development/Java.md) application that leverages several spring technologies including Boot, Spring Data JPA, Spring Data [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md), and Spring Web NBC. Understanding microservice containerization is critical to modern [Software Development](../../Topics/Software%20Development.md). If this has evaded you, don't worry. I have a course to help you out. "[Introduction to Docker for Java Developers](../Data%20Science/Introduction%20to%20Docker%20for%20Java%20Developers.md)" hits that sweet spot of what you need to know as a developer without overwhelming you with the extraneous details. If you enjoyed this course, you can find all my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning courses on my website, maryellenteaches.me. And my [GitHub](../../Skills/Software%20Development/GitHub.md) organization is Mary Ellen teaches. I love learner feedback. Let me know what you think here in the Q and A and a and follow me on LinkedIn at [linkedin.com/in/mebowman](https://linkedin.com/in/mebowman). Thanks for watching. Time is precious. Game changing technologies helps spend it wisely.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (3), [Java](../../Skills/Software%20Development/Java.md) (2), [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** docker (1), find (1)
> **Env Vars:** jpa (1), nbc (1)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Tools:** github (1)
> **Speakers:** - [mary] (1)


## Instructor

- [Mary Ellen Bowman](../../Instructors/Software%20Development/Mary%20Ellen%20Bowman.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/spring-spring-data-2-2508603)

## Skills Covered

- Spring Data

## Path Context

### In [Getting Started In Spring Development](../../Paths/Software%20Development/Learning%20Paths/Getting%20Started%20In%20Spring%20Development.md)
← [Creating Spring Boot Microservices](Creating%20Spring%20Boot%20Microservices.md) | **3 of 5** | [Spring 6- Spring Security](Spring%206-%20Spring%20Security.md) →

## Appears In

- [Getting Started In Spring Development](../../Paths/Software%20Development/Learning%20Paths/Getting%20Started%20In%20Spring%20Development.md)

---

[↑ Back to top](#)