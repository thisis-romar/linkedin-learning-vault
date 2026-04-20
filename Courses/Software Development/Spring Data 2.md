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
  - Getting Started In Spring Development
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/spring-data
status: not-started
created: 2026-04-19
---

![Spring Data 2](https://media.licdn.com/dms/image/v2/C4D0DAQFKjea5yMgDKA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1674159455671?e=2147483647&amp;v=beta&amp;t=VEfAQCp9Lwovj4D65lA7bj2lOTNFrbmdROfgPBjVtzs)

# Spring Data 2

> Coding to databases—which often involves the use of boilerplate code that's difficult to maintain and debug—can be tedious work. Upgrading applications to a different kind of data storage is similarly challenging, as it usually involves massive code rewrites. Spring Data addresses these issues by abstracting data store interactions into a common repository API and eliminating boilerplate code.In t

> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2) | 1h 41m | Intermediate | 21K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Mary Ellen Bowman]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/spring-spring-data-2-2508603)

## Skills Covered

- Spring Data

## Table of Contents

### Introduction

#### Diving into Spring Data
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/diving-into-spring-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/diving-into-spring-data?u=76281980&t=0)** - Coding to databases can be tedious.
>
> **[0:03](https://www.linkedin.com/learning/spring-data-2/diving-into-spring-data?u=76281980&t=3)** It's often requiring repetitive boilerplate code which is difficult to maintain, refactor and debug.
>
> **[0:10](https://www.linkedin.com/learning/spring-data-2/diving-into-spring-data?u=76281980&t=10)** Upgrading applications to a different kind of data store typically results in massive code rewrites and developer reeducation.
>
> **[0:19](https://www.linkedin.com/learning/spring-data-2/diving-into-spring-data?u=76281980&t=19)** Spring Data addresses these issues by eliminating boilerplate code and abstracting data store interactions into a common repository API.
>
> **[0:27](https://www.linkedin.com/learning/spring-data-2/diving-into-spring-data?u=76281980&t=27)** We'll begin with an overview of the Spring Data umbrella project, and I'll walk you through some examples that use Spring Data JPA and Spring Data MongoDB.
>
> **[0:37](https://www.linkedin.com/learning/spring-data-2/diving-into-spring-data?u=76281980&t=37)** And then look at other supported data store modules.
>
> **[0:41](https://www.linkedin.com/learning/spring-data-2/diving-into-spring-data?u=76281980&t=41)** I'm Mary Ellen Bowman, and I'll be leading you through this deep dive into Spring Data.
>
> **[0:46](https://www.linkedin.com/learning/spring-data-2/diving-into-spring-data?u=76281980&t=46)** Let's dive in.

> [!info]- Semantic Content
>
> **Env Vars:** api (1), jpa (1)
> **Exercise Files:** boilerplate (2)
> **Code Keywords:** let (1)
> **Speakers:** - coding (1)

#### What you need
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/what-you-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/what-you-need?u=76281980&t=0)** - [Instructor] To interact with the exercises in this course I expect you to have Java 17 installed, although, the examples are not very complex so Java 11 should be fine.
>
> **[0:11](https://www.linkedin.com/learning/spring-data-2/what-you-need?u=76281980&t=11)** Apache Maven for automated builds and an IDE for debugging.
>
> **[0:15](https://www.linkedin.com/learning/spring-data-2/what-you-need?u=76281980&t=15)** I use IntelliJ but, you do you.
>
> **[0:18](https://www.linkedin.com/learning/spring-data-2/what-you-need?u=76281980&t=18)** I expect you to have a basic understanding of Java and how to build with Maven as well as how to run and debug JUnit test within your IDE.
>
> **[0:29](https://www.linkedin.com/learning/spring-data-2/what-you-need?u=76281980&t=29)** I also you to be familiar with the Spring famework for dependency injection and the Java Persistence API.
>
> **[0:37](https://www.linkedin.com/learning/spring-data-2/what-you-need?u=76281980&t=37)** If Spring or JPA are new to you, I suggest these Spring and JPA courses in the library.
>
> **[0:44](https://www.linkedin.com/learning/spring-data-2/what-you-need?u=76281980&t=44)** Now let's jump in.

> [!info]- Semantic Content
>
> **Env Vars:** ide (2), jpa (2), api (1)
> **Versions:** java 17 (1), java 11 (1)
> **CLI Commands:** apache (1)
> **Code Keywords:** let (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)


### 1. Spring Data Umbrella Project

#### Mission and modules
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=0)** - [Instructor] I've been a professional software developer for let's just say a while, and there have been a handful of solutions that have been game changers for me personally.
>
> **[0:09](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=9)** Going from C and C++ to Java.
>
> **[0:12](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=12)** Now, portable applications can be written once, and run anywhere without rebuild.
>
> **[0:18](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=18)** J2EE or Java EE to build Enterprise solutions without needing to code the supporting infrastructure.
>
> **[0:26](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=26)** Hibernate eliminated manually mapping logical objects to physical databases, asynchronous JavaScript and XML.
>
> **[0:35](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=35)** Also known as Ajax.
>
> **[0:36](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=36)** Websites became truly interactive, like desktop user interfaces, restful web services significantly reduced multi machine communication complexity.
>
> **[0:48](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=48)** What makes them my game changers?
>
> **[0:50](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=50)** Better features, less coding, which is why I also consider Spring Data, and specifically Spring Data JPA as a game-changer.
>
> **[1:01](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=61)** Spring enjoys a great legacy of providing superior data access frameworks, making it a solution source for developers worldwide.
>
> **[1:10](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=70)** More than an inversion of control framework, Spring now comprises a vast collection of enterprise solutions.
>
> **[1:18](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=78)** One of the solutions is the Spring Data Project.
>
> **[1:22](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=82)** Spring Data's mission is to provide a familiar, and consistent Spring-based programming model for data access while still retaining the special traits of the underlying data store.
>
> **[1:34](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=94)** Spring Data is actually an umbrella of several sub-projects.
>
> **[1:39](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=99)** Some address the commonality between data stores, others tap into those special trades.
>
> **[1:46](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=106)** There are several modules, and they all specialize in various data sources, but they all depend on commons.
>
> **[1:55](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=115)** Commons abstracts away from any particular data source.
>
> **[2:01](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=121)** No matter which data source, the goal is always the same.
>
> **[2:05](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=125)** Have a way to convert Java object entities into target data source records and persist them, as well as convert the records back to entities.
>
> **[2:14](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=134)** It can create entities which are then persisted as records to the data store.
>
> **[2:19](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=139)** It can look up data source records by citing the entity attributes.
>
> **[2:24](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=144)** It can update data source records by updating the entity and finally, delete the data source records by deleting the entity.
>
> **[2:33](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=153)** The repository pattern is an abstraction that is used by Spring Data Commons to accomplish these goals.
>
> **[2:41](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=161)** It is followed throughout the Spring Data Project for creating, reading, updating, and deleting records by citing entities.
>
> **[2:49](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=169)** A module for a particular data source has a repository that extends from the base one.
>
> **[2:56](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=176)** So for example, Spring Data JPA, has a JPA repository.
>
> **[3:01](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=181)** Spring Data MongoDB has a Mongo repository.
>
> **[3:04](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=184)** Spring Data GemFire has a GemFire repository, and so on.
>
> **[3:09](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=189)** Spring Data JPA is the most popular module.
>
> **[3:12](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=192)** Therefore, our deep dive into coding with Spring Data common repositories will be in that chapter, as well as the querying chapter.
>
> **[3:21](https://www.linkedin.com/learning/spring-data-2/mission-and-modules?u=76281980&t=201)** Lessons learned from these chapters will be leveraged in Spring Data, MongoDB, and hence any other spring data module.

> [!info]- Semantic Content
>
> **Code Keywords:** module (3), let (1), while, (1), finally, (1), delete (1)
> **Env Vars:** jpa (4), j2ee (1), xml (1)
> **Definitions:** known as (1), is an  (1)
> **CLI Commands:** mongo (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Java Persistence API
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=0)** - [Instructor] Before we dive into Spring data, let's look at the concept of object to relational mapping and how it relates to Java Persistence API.
>
> **[0:10](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=10)** A classic problem in programming is mapping the physical model to the logical model.
>
> **[0:16](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=16)** The typical physical model is a relational database schema, and a logical model comprises the Java domain objects.
>
> **[0:24](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=24)** It's possible to do object-relational mapping in plain vanilla Java, but it's nasty.
>
> **[0:30](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=30)** The most popular ORM framework is JPA.
>
> **[0:34](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=34)** If you are unfamiliar with JPA, don't worry.
>
> **[0:37](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=37)** Kesha Williams has two in-depth JPA courses in the LinkedIn Learning library.
>
> **[0:43](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=43)** These are non-trivial concepts that require understanding before proceeding with Spring Data JPA.
>
> **[0:50](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=50)** So if you're not sure, save your spot here and come back when you're ready.
>
> **[0:56](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=56)** In the exercise files, there is a simple JPA Maven project called University with an in-memory relational H2 data store.
>
> **[1:05](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=65)** University has JPA entities: staff, department, course, and student.
>
> **[1:12](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=72)** Staff are people who teach at the university.
>
> **[1:16](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=76)** Students are people who learn at the university.
>
> **[1:19](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=79)** Each department has a chair, or head, that is part of the staff.
>
> **[1:24](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=84)** A course is a particular class offered within the department that a staff member teaches.
>
> **[1:30](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=90)** Students enroll in courses.
>
> **[1:32](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=92)** Some courses have prerequisite courses.
>
> **[1:36](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=96)** Each entity has a data access object, aka DAO, and that class has public methods to interact with EntityManager.
>
> **[1:46](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=106)** Business services encapsulate DAOs for higher tier composite actions.
>
> **[1:52](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=112)** University employs application-managed persistence from JUnit tests.
>
> **[1:58](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=118)** And the testing library are various examples on invoking the services and DAOs.
>
> **[2:04](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=124)** SimpleDBCrudTest.java invokes db create, read, update, and delete methods.
>
> **[2:10](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=130)** FindByOneAttribute.java invokes simple queries that look up entities from a single attribute.
>
> **[2:16](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=136)** FindByClausesAndExpressions.java invokes complex queries.
>
> **[2:22](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=142)** PagingTest.java queries that employ paging and sorting.
>
> **[2:27](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=147)** CriteriaQueryTest invokes dynamic queries.
>
> **[2:30](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=150)** And UniversityFactory is a helper class to set up seed data of predefined courses, staff, students, and departments before running a test.
>
> **[2:40](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=160)** In the next two chapters, we will be refactoring this project into a Spring Data JPA Spring Boot Maven application.
>
> **[2:51](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=171)** So now is a good time to pause and download the exercise files.
>
> **[2:55](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=175)** Take a look at the code associated with this video.
>
> **[2:58](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=178)** Make sure that you can build it locally with the appropriate Maven and Java versions.
>
> **[3:04](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=184)** Then run regression tests.
>
> **[3:06](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=186)** So for this video is branch_01_02, and you can see the business classes are here, CourseFilter, DynamicQueryService, and UniversityService.
>
> **[3:19](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=199)** The DAOs are in the DAO folder.
>
> **[3:23](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=203)** The domain has the entities, and then the configuration is in PersistenceJPAConfig.
>
> **[3:31](https://www.linkedin.com/learning/spring-data-2/java-persistence-api?u=76281980&t=211)** And then the tests are in the test folder.

> [!info]- Semantic Content
>
> **Env Vars:** jpa (7), dao (2), api (1), orm (1)
> **Definitions:** is a  (5)
> **File Paths:** simpledbcrudtest.java (1), findbyoneattribute.java (1), findbyclausesandexpressions.java (1), pagingtest.java (1)
> **Code Keywords:** let (1), require (1), public (1), delete (1)
> **Exercise Files:** exercise files (2), download the (1)
> **Prerequisites:** prerequisite (1), set up (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)


### 2. Introduction to Spring Data JPA

#### Spring Boot Starter Data JPA
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=0)** - [Instructor] Now that we have the exercise files, let's start refactoring it to use Spring Data JPA.
>
> **[0:07](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=7)** A big boost comes from simply upgrading to Spring Boot.
>
> **[0:12](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=12)** So what do we get?
>
> **[0:14](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=14)** The first is a less complex dependency management model provided by the Spring Boot starter and Spring Boot parent settings in a new pom.xml.
>
> **[0:24](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=24)** The second is a significant reduction of the persistent context configuration.
>
> **[0:30](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=30)** How do we do this?
>
> **[0:31](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=31)** We will start by replacing the pom.xml with a smaller one that employs Spring Boot parent and Spring Data JPA starter dependencies.
>
> **[0:41](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=41)** Next, we will remove the configuration class and replace it with a Spring Boot application class.
>
> **[0:47](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=47)** Finally, we'll upgrade the J unit test to employ Spring Boot test features.
>
> **[0:54](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=54)** So here is our existing application with just Vanilla Spring and JPA, and we're going to start by refactoring the pom.xml of where it is now.
>
> **[1:07](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=67)** And we're going to replace it in the exercise files as a Spring Boot pom.xml.
>
> **[1:11](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=71)** We're just going to copy and paste all of that and replace the current pom.xml, which cites Spring contacts and Spring ORM and Hibernate Core.
>
> **[1:21](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=81)** All those dependencies are going to be overwritten by less configuration.
>
> **[1:29](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=89)** So here we have our Spring Boot starter parent and setting the version of Spring Boot, and then Spring starter data JPA, and then just our H2 dependency.
>
> **[1:44](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=104)** And then Spring Boot starter for testing.
>
> **[1:46](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=106)** We don't have to have all the different intricacies of Spring involved there.
>
> **[1:50](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=110)** So I'm going to say import changes.
>
> **[1:53](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=113)** And while that's happening, we're going to go to our configuration file, persistence JPA config, and I'm going to replace these first annotations with Spring Boot application.
>
> **[2:13](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=133)** And then we're going to take all of these beans that we've created in here and remove those for setting up the context.
>
> **[2:21](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=141)** Delete that.
>
> **[2:23](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=143)** And then I'm going to refactor, rename this to University Application.
>
> **[2:38](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=158)** And then we need a main in our Spring Boot application, so we'll say public.
>
> **[2:45](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=165)** So we have a main program there.
>
> **[2:47](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=167)** And now we need to modify our test classes with the annotation at Spring Boot test.
>
> **[2:58](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=178)** So we're going to do that with all of our tests.
>
> **[3:00](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=180)** So just copy, and then in each one of these, replace that.
>
> **[3:14](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=194)** And finally, the last one in the list.
>
> **[3:20](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=200)** So what's actually happening here?
>
> **[3:22](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=202)** I'm going to put a break point at line 42 in this class.
>
> **[3:27](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=207)** And we're going to run this J unit test.
>
> **[3:30](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=210)** So within this J unit test where we have the annotation at Spring Boot test, the entire application, the entire university application will be run.
>
> **[3:43](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=223)** We will see a big Spring message showing that the university's Spring Boot application has started.
>
> **[3:49](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=229)** So let's start that.
>
> **[3:52](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=232)** I'm going to debug that.
>
> **[3:59](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=239)** I'm going to move up the console here so we can see as that runs.
>
> **[4:06](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=246)** So all the configuration that we manually had to do is now done automatically.
>
> **[4:12](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=252)** And if this was not in memory H2 database, we would only have to need to add a little bit of configuration parameters in the properties.
>
> **[4:21](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=261)** So let's just finish and let this run.
>
> **[4:25](https://www.linkedin.com/learning/spring-data-2/spring-boot-starter-data-jpa?u=76281980&t=265)** So just by pivoting to Spring Data JPA and Spring Boot, we are already seeing improvements in the project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), class. (2), finally, (2), delete (1), public (1)
> **Env Vars:** jpa (6), orm (1)
> **File Paths:** pom.xml (5)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Spring Data CrudRepository and JPA repository
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=0)** - [Instructor] Now let's see how Spring Data JPA gives us better functionality while writing less code.
>
> **[0:06](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=6)** In chapter one, we learned that spring data abstracts away from any particular data source by following a repository pattern.
>
> **[0:13](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=13)** Now we're actually going to see the implementation of that pattern.
>
> **[0:17](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=17)** Spring data starts with a repository interface with two bounded type parameters.
>
> **[0:23](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=23)** The first type, T, is the entity class name.
>
> **[0:27](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=27)** The second parameter, ID, is the type of the unique ID of the entity.
>
> **[0:33](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=33)** The repository interface is just a marker without any methods.
>
> **[0:38](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=38)** Spring data commons declares a crud repository.
>
> **[0:43](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=43)** Crud, meaning create, read, update, delete.
>
> **[0:46](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=46)** Crud repository extends from the marker repository interface, and declares methods that create, update, delete, and read entities, and inherit the bounded type parameters.
>
> **[1:00](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=60)** So for the course entity, a course repository interface would extend from crud repository, and the first bounded parameter would be course.
>
> **[1:13](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=73)** And the ID of the course is of type integer.
>
> **[1:16](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=76)** Since we are specifically implementing JPA, we will actually declare course repository as a spring dated JPA repository.
>
> **[1:27](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=87)** Let's add that to our code, and I'll show you the different methods declared in those interfaces.
>
> **[1:33](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=93)** So the first thing I'm going to do is create a repo folder,
>
> **[1:47](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=107)** and within that I'm going to start declaring repositories.
>
> **[1:52](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=112)** So just to see you here, here's a preview of the course entity,
>
> **[2:02](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=122)** going to declare an interface called CourseRepo.
>
> **[2:13](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=133)** First, we're going to implement crud repository.
>
> **[2:18](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=138)** And so course is the first parameter, and integer is the second.
>
> **[2:25](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=145)** Now, within here, I'm going to use my IDE to give a preview of what methods come with CRUD repository.
>
> **[2:36](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=156)** So here are the actual methods from crud repository.
>
> **[2:39](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=159)** It's saving entities, find by ID, exist by ID, find all entities, get the counts, and then delete the entities.
>
> **[2:47](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=167)** Now I'm going to actually change this to extending from JPA repository.
>
> **[2:56](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=176)** And see all the methods that we get.
>
> **[3:04](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=184)** So we get a lot more methods that weren't, here's just from crud repository, but then we get some more methods on flush, save and flush, which is specific for JPA.
>
> **[3:15](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=195)** And we're also, instead of just getting iterables in our finds, we're getting lists, which is preferable to use if you're going to be a client for many different services.
>
> **[3:26](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=206)** So we're going to keep that as JPA repository.
>
> **[3:29](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=209)** And I'm going to do this for all my repos.
>
> **[3:39](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=219)** And I set that as a class, but it's actually interface.
>
> **[3:50](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=230)** Now we'll do staff repository.
>
> **[4:01](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=241)** A person is not a repository it's just an embedded type that's used.
>
> **[4:06](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=246)** And the last one is student repository.
>
> **[4:20](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=260)** Okay, now we've got those done.
>
> **[4:22](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=262)** And now I want to edit this university service.
>
> **[4:30](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=270)** And I'm going to change these to repo, that we are going to inject.
>
> **[4:37](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=277)** And I can actually do a, first, I'll do the repos here.
>
> **[4:47](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=287)** I'm doing these one at a time so I can include them.
>
> **[4:49](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=289)** And now I'm actually going to do a find and replace.
>
> **[4:53](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=293)** Replace anything that's DAO with R-E-P-O.
>
> **[5:00](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=300)** Replace all.
>
> **[5:02](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=302)** Very good.
>
> **[5:03](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=303)** And now here's my favorite thing to do, is delete code.
>
> **[5:11](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=311)** So I can actually go into my DAOs, and delete all those methods that, so I can get rid of the find all, find by ID, save and delete, and delete all.
>
> **[5:31](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=331)** Same thing in my department DAO.
>
> **[5:35](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=335)** Delete the find alls, the save, and the deletes.
>
> **[5:41](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=341)** Same thing in staff.
>
> **[5:50](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=350)** And lastly, in student.
>
> **[6:05](https://www.linkedin.com/learning/spring-data-2/spring-data-crudrepository-and-jpa-repository?u=76281980&t=365)** So you can see right away, just by using JPA repositories, we've eliminated a lot of repetitive boiler plate code, and transactions are managed automatically.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (8), interface (6), let (2), type, (1), extends (1)
> **Env Vars:** jpa (7), dao (2), ide (1), crud (1)
> **CLI Commands:** find (6)
> **Speakers:** - [instructor] (1)

#### Challenge: Fix SimpleDBCrudTest syntax errors
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/challenge-fix-simpledbcrudtest-syntax-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/challenge-fix-simpledbcrudtest-syntax-errors?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/spring-data-2/challenge-fix-simpledbcrudtest-syntax-errors?u=76281980&t=6)** - [Instructor] It's time for a challenge.
>
> **[0:09](https://www.linkedin.com/learning/spring-data-2/challenge-fix-simpledbcrudtest-syntax-errors?u=76281980&t=9)** So, deleting some of our DIO methods caused compilation errors in SimpleDBCRUDTest.
>
> **[0:17](https://www.linkedin.com/learning/spring-data-2/challenge-fix-simpledbcrudtest-syntax-errors?u=76281980&t=17)** Your challenge is to fix the errors by replacing the course DAO with course repo until it compiles.
>
> **[0:25](https://www.linkedin.com/learning/spring-data-2/challenge-fix-simpledbcrudtest-syntax-errors?u=76281980&t=25)** So if we look at this simple CRUD test in the test package, we see that we are injecting the staff DAO and it calls Find All to find all staff, and then we do a Find by ID, and a Save, and another Find by ID, a Delete, and then a Find All.
>
> **[0:49](https://www.linkedin.com/learning/spring-data-2/challenge-fix-simpledbcrudtest-syntax-errors?u=76281980&t=49)** This test basically reads in all the staff, does a find by one of them, deletes that staff member, and then tries to find it again and make sure that it's gone.
>
> **[1:00](https://www.linkedin.com/learning/spring-data-2/challenge-fix-simpledbcrudtest-syntax-errors?u=76281980&t=60)** So we need to refactor this class and instead of using staff DAO, use staff repo and make sure that all these methods compile.

> [!info]- Semantic Content
>
> **CLI Commands:** find (7), make (2)
> **Env Vars:** dao (3), dio (1), crud (1)
> **Code Keywords:** delete (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Fix SimpleDBCrudTest syntax errors
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/solution-fix-simpledbcrudtest-syntax-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/solution-fix-simpledbcrudtest-syntax-errors?u=76281980&t=0)** - [Instructor] So, did you figure out how to make this compile?
>
> **[0:09](https://www.linkedin.com/learning/spring-data-2/solution-fix-simpledbcrudtest-syntax-errors?u=76281980&t=9)** Don't feel bad if you didn't because I sort of cheated in a way, by, whenever I created my staff DAO methods, for example, the find, the staff DO, to find all, I created these method signatures to match the exact signatures of staff repo for the JPA repository interface.
>
> **[0:31](https://www.linkedin.com/learning/spring-data-2/solution-fix-simpledbcrudtest-syntax-errors?u=76281980&t=31)** So, if you noticed that already, then you noticed that all I had to do was two things, is refactor the name just to staffRepo, and then just change this declaration to repo, and import that, and that just auto-magically makes that compile.
>
> **[0:55](https://www.linkedin.com/learning/spring-data-2/solution-fix-simpledbcrudtest-syntax-errors?u=76281980&t=55)** So, there is a staffRepo.findall method already, a staffRepo find by ID, staffRepo, find by ID, and find, delete and find all.

> [!info]- Semantic Content
>
> **CLI Commands:** find (6), make (1)
> **Code Identifiers:** staffrepo (4)
> **Code Keywords:** interface (1), delete (1)
> **Env Vars:** dao (1), jpa (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Spring Data JPA magic
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=0)** - [Mariann] After all of the PaLM updates, the configuration change, switching to Spring Data, repositories, and fixing syntax errors, let's actually run a test.
>
> **[0:13](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=13)** But wait, you're probably thinking, "Mariann, you haven't implemented course repo, "or staff repo, or all the other repos.
>
> **[0:22](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=22)** "You just have interfaces."
>
> **[0:24](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=24)** You have an interface, you have to have something that implements it.
>
> **[0:28](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=28)** What's implementing?
>
> **[0:29](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=29)** What classes are actually implementing these interfaces?
>
> **[0:32](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=32)** And here's the good news.
>
> **[0:34](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=34)** We don't have to.
>
> **[0:36](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=36)** It's Spring that implements the interfaces for us.
>
> **[0:39](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=39)** And let's actually run the test and see how that happens.
>
> **[0:47](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=47)** So we're going to debug this testStaffCRUD method.
>
> **[0:51](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=51)** And I have a break point on the very first line.
>
> **[0:55](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=55)** I'll show the console here as it's running.
>
> **[1:00](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=60)** As we've seen before, it starts up the application within our JUnit test and we hit this breakpoint.
>
> **[1:09](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=69)** And let's actually take a look within the debugger.
>
> **[1:13](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=73)** Let me put this up here.
>
> **[1:16](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=76)** We have the staff repo, which is autowired.
>
> **[1:22](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=82)** And there's our interface.
>
> **[1:23](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=83)** And we see that what is actually implementing this is simpleJpaRepository.
>
> **[1:32](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=92)** So Spring Data scans for the repositories and then will at the beginning of runtime instantiate this simpleJpaRepository, which implements the staff repo methods in this case.
>
> **[1:51](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=111)** So I'm actually going to step into this university factory method to fill the university.
>
> **[2:00](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=120)** And so this method will, at startup, just make sure that there's nothing in the database at all.
>
> **[2:06](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=126)** Just empty it out by deleting all of the students, staff, courses, and departments.
>
> **[2:13](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=133)** And then we'll continue to step over to create student.
>
> **[2:20](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=140)** So this university service, which is going to create a student, going to step into that method and step out because it's doing a proxy.
>
> **[2:40](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=160)** So here's createStudent actually invokes studentRepo, and then saves it, creates a new student.
>
> **[2:48](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=168)** So we're just going to continue and run this to get back to our CRUD test.
>
> **[2:58](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=178)** And here's example where we have our staff repo.
>
> **[3:02](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=182)** It's going to do a find all and then it's going to print that staff, print all those to the the screen.
>
> **[3:14](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=194)** So it's actually really cool.
>
> **[3:15](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=195)** Remember all that DAO code that we deleted for creating, doing simple fines, and saves, and deletes?
>
> **[3:24](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=204)** We don't have to create that anymore.
>
> **[3:25](https://www.linkedin.com/learning/spring-data-2/spring-data-jpa-magic?u=76281980&t=205)** Spring Data provides them specifically for our entity types.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), implements (3), interface (2), continue (2), case. (1)
> **Code Identifiers:** simplejparepository (2), teststaffcrud (1), createstudent (1), studentrepo (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** crud (1), dao (1)
> **Speakers:** - [mariann] (1)


### 3. Spring Data JPA Query Methods

#### Property expression query methods
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=0)** - [Instructor] For general purpose database lookups, the built-in FIND ALL and FIND ONE repository methods are sufficient.
>
> **[0:08](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=8)** But what if you want to look up all full-time students or students with a certain last name or students with an age range?
>
> **[0:17](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=17)** This chapter demonstrates how to use Spring Data Commons to query a data source.
>
> **[0:22](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=22)** Spring Data property expressions to the rescue!
>
> **[0:26](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=26)** Via bin utils and reflection, Spring implements the methods under the covers for us.
>
> **[0:33](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=33)** However, we must follow the rules when declaring methods and correctly mapping the entity properties to the method signatures.
>
> **[0:42](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=42)** So these are the rules when using property expressions to query for entities.
>
> **[0:46](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=46)** First we have to declare the return types for a single value.
>
> **[0:50](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=50)** It could be an actual class or an optional of it.
>
> **[0:54](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=54)** For multiple, a collection.
>
> **[0:56](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=56)** Then you need to begin the methods signature with findBy followed by property expression name in camel case.
>
> **[1:04](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=64)** For example, the course repository interface findByInstructor and findByName.
>
> **[1:12](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=72)** You can also perform record count queries with property expressions.
>
> **[1:17](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=77)** Same rules as entity queries but a long value is returned and the method starts with countBy.
>
> **[1:25](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=85)** For example in course repository, we can get the number of courses taught by a certain instructor or the number of four credit courses.
>
> **[1:36](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=96)** Spring Data facilitates fast failure.
>
> **[1:39](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=99)** Query methods are verified at Bootstrap.
>
> **[1:42](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=102)** Here, course has not attributed named title.
>
> **[1:45](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=105)** Spring Data throws a Spring Data query creation exception at startup.
>
> **[1:51](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=111)** Without Spring Data, you would not know there was a syntax error until the query is actually invoked which is amazing.
>
> **[2:00](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=120)** The exercise files use Spring Data JPA but the lessons learned here apply to any Spring Data Module that depends on commons.
>
> **[2:10](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=130)** So now let's go to our code and refactor some of our student DAO queries and our course DAO queries into our repos.
>
> **[2:19](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=139)** So right now I have student DAO up and I'm going to copy and actually going to cut these three queries, take them out of student DAO and let's paste them into student repo.
>
> **[2:38](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=158)** And now I'm going to turn them into property expressions or interfaces we don't need the word public.
>
> **[2:49](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=169)** FindByFullTime.
>
> **[2:52](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=172)** Let's see the JPQL S.full-time. Okay that works!
>
> **[2:56](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=176)** So we can just delete that whole thing.
>
> **[3:00](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=180)** And now, the next one.
>
> **[3:04](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=184)** FindByAge, looking at the JPQL where S.H, okay that's easy.
>
> **[3:09](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=189)** We could just use the signature as it is and now we have a nested attribute findByLastName.
>
> **[3:18](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=198)** And so this is actually a little more complicated so this JPQL S.Attendee.LastName.
>
> **[3:25](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=205)** So we actually have an intermediate attribute we need to put in there.
>
> **[3:35](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=215)** Very Good.
>
> **[3:36](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=216)** Now let's look at the course DAO and the queries we want to pull out of that one, findByName, findByPre-requisite, findByCredits and findByChairLastName.
>
> **[3:55](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=235)** Delete those.
>
> **[3:57](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=237)** Paste them into our course repo and let's get rid of that public.
>
> **[4:07](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=247)** FindByName, okay that's good.
>
> **[4:10](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=250)** No problem there with that signature.
>
> **[4:14](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=254)** FindByPre-requisite, a JOIN on the pre-requisite.
>
> **[4:18](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=258)** Okay that's good.
>
> **[4:21](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=261)** FindByCredits, also another easy one.
>
> **[4:25](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=265)** Line up our indentation.
>
> **[4:28](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=268)** FindByCredits as is. That's fine.
>
> **[4:32](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=272)** FindByChairLastName.
>
> **[4:34](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=274)** Let's look at the JPQL.
>
> **[4:36](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=276)** Okay there's intermediate department attribute that we need to put in there.
>
> **[4:40](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=280)** So findByDepartment, chair and then there's also member last name.
>
> **[4:48](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=288)** So, what Spring JPA is doing in reverse, what we're doing it forward now which is it's going to derive from the signature what the JPQL should be for this and then execute it at run time.
>
> **[5:03](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=303)** But at Bootstrap, it's actually going to verify that that is correct.
>
> **[5:08](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=308)** So let's actually put an error one in here.
>
> **[5:10](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=310)** In StaffRepo, we're going to put a dummy one.
>
> **[5:14](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=314)** So, let's go and say findByNothing int X.
>
> **[5:25](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=325)** And we're going to throw that erroneous property expression there and then see what happens.
>
> **[5:31](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=331)** So we're actually going to have some compilation errors in the J unit test findByOneAttribute because some methods that were used to be in studentDao are no longer there or maybe have been renamed.
>
> **[5:46](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=346)** So first of all, let's refactor this to the student repo and then course repo
>
> **[6:02](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=362)** and then change the type.
>
> **[6:09](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=369)** And we have still have some syntax errors because the method names have changed.
>
> **[6:14](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=374)** So findByLastName is now findByAttendeeLastName and findByChairLastName is now findByDepartmentChairMemberLastName.
>
> **[6:29](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=389)** Okay, no compilation errors.
>
> **[6:32](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=392)** Let's run this test and see if it runs.
>
> **[6:39](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=399)** And we have an error.
>
> **[6:40](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=400)** Let's see what Spring is complaining about.
>
> **[6:42](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=402)** Go all the way the bottom of the message.
>
> **[6:49](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=409)** It's complaining about the method that we put in StaffRepo findByNothing.
>
> **[6:53](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=413)** No property, nothing found.
>
> **[6:55](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=415)** So let's go back and remove that and run the test again.
>
> **[7:05](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=425)** So what's really cool is we weren't even injecting staffRepo into this particular test.
>
> **[7:12](https://www.linkedin.com/learning/spring-data-2/property-expression-query-methods?u=76281980&t=432)** So just the fact that it found that problem and we weren't even referencing it is huge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), public (2), delete (2), implements (1), case. (1)
> **Code Identifiers:** findbyname (2), findbylastname (2), findbychairlastname (2), findbynothing (2), findby (1)
> **Env Vars:** dao (5), jpql (5), find (2), jpa (2), join (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (2)
> **File Paths:** s.h (1)
> **SQL:** join (1)
> **UI Navigation:** go to (1)

#### Query method clauses with property expressions
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=0)** - [Instructor] Now that we've run some simple spring data property-based query methods, let's kick it up a notch and look at some sample query methods containing clauses and more complex property expressions.
>
> **[0:13](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=13)** Here are some examples of queries with logical expressions, findByFullTimeOrAge and the parameters are passed in whether they're full or part-time or not.
>
> **[0:26](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=26)** And the target age, findByAttenndeeFirstNameAndAttendeeLastName.
>
> **[0:31](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=31)** So the parameters are first name passed in and last name passed in.
>
> **[0:37](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=37)** So we have query methods using expressions with operators.
>
> **[0:41](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=41)** First is findByAgeGreaterThan minimum age.
>
> **[0:46](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=46)** So we want to find students older than a certain age, findByFullTimeOrAgeLessThan.
>
> **[0:52](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=52)** So we want to pass in the full-time status and the maximum age, findByAttendeeLastNameIgnoreCase.
>
> **[1:01](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=61)** So we are passing in the last name and it's not case sensitive.
>
> **[1:05](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=65)** How about limiting the number of results or sorting them?
>
> **[1:09](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=69)** These are getting a little more complicated.
>
> **[1:11](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=71)** So I put a comment above each method to understand what it's trying to accomplish.
>
> **[1:16](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=76)** Find highest student in the alphabet.
>
> **[1:19](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=79)** So that method would be, findFirstByOrderByAttendeeLastNameAsc, which means ascending, Find oldest student would be, findTopByOrderByAgeDesc, which is descending.
>
> **[1:37](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=97)** And then find the three oldest students, findTop3ByOrderByAgeDesc.
>
> **[1:46](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=106)** There are many more options for you to choose from.
>
> **[1:48](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=108)** Refer to the spring data reference, appendix C, repository keywords form even more options for you.
>
> **[1:56](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=116)** Now let's extrapolate the student DAO methods into student repo.
>
> **[2:02](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=122)** So I have the student DAO up and we need to refactor all of these methods into student repo and they're long and complicated.
>
> **[2:14](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=134)** So I've actually copied and pasted into student repo, the name of the old one in the DAO and then how that would equal in a property expression in the repo here.
>
> **[2:28](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=148)** So I'm going to uncomment this, find oldest is findTopOrderByAgeDesc, findBy first and last name is, findByAttendeeFirstNameAndAttendeeLastName.
>
> **[2:42](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=162)** Find by age less than is the same as find by age less than.
>
> **[2:47](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=167)** Find similar last name.
>
> **[2:50](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=170)** So this is findByAttendeeLastNameLike, so this is sort of like a criteria where you would put in rejects or a percent sign to do a wild card in the string, findFirstInAlphabet would be, find first by order, by attendee, last name ascending.
>
> **[3:10](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=190)** And find3Oldest would be, findTopByOrderByAgeDescending.
>
> **[3:16](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=196)** So these are invoked in the findBy clauses and expressions.
>
> **[3:21](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=201)** So we'll do what we've been doing.
>
> **[3:22](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=202)** Let's refactor the DAO into a repo.
>
> **[3:31](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=211)** And it's going to give us a lot of compilation errors.
>
> **[3:34](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=214)** So find oldest.
>
> **[3:36](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=216)** What was find oldest?
>
> **[3:38](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=218)** Find oldest is this signature, findByFirstAndLastName,
>
> **[3:53](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=233)** findSimilarByLastName.
>
> **[3:56](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=236)** So here we're passing in any student who has a last name that has a letter O in it,
>
> **[4:11](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=251)** findFirstInAlphabet.
>
> **[4:21](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=261)** And the last one is find3Oldest and that maps to this long thing, findTop3.
>
> **[4:33](https://www.linkedin.com/learning/spring-data-2/query-method-clauses-with-property-expressions?u=76281980&t=273)** And that's some examples of complex clauses and expressions.

> [!info]- Semantic Content
>
> **Code Identifiers:** findby (2), findfirstinalphabet (2), find3oldest (2), findbyfulltimeorage (1), findbyattenndeefirstnameandattendeelastname (1)
> **CLI Commands:** find (12)
> **Code Keywords:** let (3), pass (1), from. (1), this, (1)
> **Env Vars:** dao (4)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### @Query annotation
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=0)** - [Instructor] We've seen some pretty cool ways to make query methods using property expressions in the method signature.
>
> **[0:06](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=6)** Another way is to declare a query method by applying an @Query annotation.
>
> **[0:12](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=12)** The contents of an @Query annotation can be a source-specific query language, like JPQL, or a query language native to the actual data source management system, like H2 SQL in our examples.
>
> **[0:27](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=27)** When declaring a query method with @Query, the method signature can be anything you like.
>
> **[0:32](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=32)** It does not have to follow property expression rules.
>
> **[0:36](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=36)** Let's look at some reasons why using @Query is a better choice.
>
> **[0:40](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=40)** It's encouraged to use non-native queries, because they are verified at Bootstrap.
>
> **[0:45](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=45)** Native queries are only verified when invoked.
>
> **[0:48](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=48)** So why would @Query be a better choice, then?
>
> **[0:51](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=51)** Well, one is method simplification.
>
> **[0:54](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=54)** Sometimes property expressions can get too long and awkward.
>
> **[0:58](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=58)** Doesn't findByChairLastName seem more natural than findByDepartmentChairMemberLastName?
>
> **[1:04](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=64)** Parameter substitution is possible with the @Param annotation.
>
> **[1:09](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=69)** If I didn't supply @Param, then the question mark param number works just as well.
>
> **[1:14](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=74)** Another reason to use @Query is that the query is just too complex for property expressions.
>
> **[1:20](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=80)** In the first query, we need to take a JPQL join of Course to prerequisite courses.
>
> **[1:26](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=86)** The second query is a JPQL select new, which returns a whole new object that's not even a JPA entity.
>
> **[1:34](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=94)** There are times when you just need to go native, meaning actually make a call to the native data of a management system.
>
> **[1:40](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=100)** You can do this by setting the native query attribute to true.
>
> **[1:44](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=104)** Even for a native query, the resulting roles are still mapped back to the JPA entity.
>
> **[1:50](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=110)** In this example, I'm making a call out to H2 SQL to find the three youngest students.
>
> **[1:56](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=116)** It may sound strange, but as of this recording, JPQL does not provide the ability to limit the results of a query, something which is possible with property expressions.
>
> **[2:08](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=128)** So we're going to refactor the work we did in the last video in StudentRepo to have better sounding method names.
>
> **[2:16](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=136)** So I'm actually, we still have the comment of the old name.
>
> **[2:20](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=140)** So I'm going to refactor to rename it back to what it was.
>
> **[2:45](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=165)** Well, findByAgeLessThan was good enough, so we'll just keep that one, but findSimilarLastName seems a lot better than this.
>
> **[2:55](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=175)** Oops, I need to actually tell the IDE to refactor it, otherwise I'll have a compilation error.
>
> **[3:08](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=188)** Let's refactor this ugly looking thing to findFirstInAlphabet.
>
> **[3:18](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=198)** And finally, find3Oldest.
>
> **[3:29](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=209)** Okay, we've refactored these, now let's actually put in our @Query methods.
>
> **[3:33](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=213)** So we're going to do the simple ones first.
>
> **[3:36](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=216)** @Query.
>
> **[3:38](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=218)** And so, let's actually go back to the original DAO method for find by first and last name, and see what was there before.
>
> **[3:51](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=231)** So here, we have the original JPQL query from our DAO.
>
> **[4:00](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=240)** I'm going to copy that and paste it into the @Query annotation.
>
> **[4:08](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=248)** And so, we need to do, if we want to follow what's being done in this JPQL, we have a parameter of first name and last name.
>
> **[4:16](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=256)** So I'll do @Param, and @Param on the last name.
>
> **[4:28](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=268)** And findByAgeLessThan was fine, findSimilarLastName, let's look at that one.
>
> **[4:36](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=276)** So findSimilarLastName, we'll copy that.
>
> **[4:51](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=291)** And then we have name criteria here, so we need to put the @Param.
>
> **[4:59](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=299)** Now, we have three more methods to refactor, and findOldest, for example, looking at the original findOldest, see, we set max result equal to one.
>
> **[5:15](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=315)** And we cannot really do that in just JPQL, so I, because I didn't want to type a lot and make mistakes, I actually put the H2 native query right here, so let's actually apply that.
>
> **[5:32](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=332)** So within HBQL, I can limit the number of results.
>
> **[5:41](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=341)** And next, I need to do... For findFirstInAlphabet also needs a native query, because we're limiting it to one.
>
> **[6:01](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=361)** So you notice that I have in that native query last_Name.
>
> **[6:07](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=367)** So that is what happens whenever the H2 database without actually adding @Column annotations.
>
> **[6:15](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=375)** It's just going to, by default, switch from camel case to underscore case.
>
> **[6:20](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=380)** So that's why it's last_Name.
>
> **[6:23](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=383)** And then finally, on find three oldest students.
>
> **[6:30](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=390)** find3Oldest, that uses the set max result to three.
>
> **[6:34](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=394)** So that's, we have to do, if we want to just do this in one line here.
>
> **[6:39](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=399)** We'll set that to native query equals true.
>
> **[6:44](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=404)** Now obviously, if we went to production, and didn't use an H2 database, this code may or may not work.
>
> **[6:52](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=412)** But just for teaching, this is a helpful way to show it.
>
> **[7:03](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=423)** Okay, everything's compiling.
>
> **[7:05](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=425)** Is everything happy?
>
> **[7:07](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=427)** Okay, so let's run our JUnit test, that's now... Since I refactored, the methods' names have changed.
>
> **[7:16](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=436)** So let's run this.
>
> **[7:23](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=443)** And oh, and the test passed, that's wonderful.
>
> **[7:25](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=445)** And now, we get to do one of my favorite things in the world.
>
> **[7:29](https://www.linkedin.com/learning/spring-data-2/query-annotation?u=76281980&t=449)** Right now, there is nothing accessing any methods in StudentDao, so we can actually remove it from our project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this. (2), finally, (2), new, (1), default, (1)
> **Env Vars:** jpql (7), sql (2), jpa (2), dao (2), ide (1)
> **Code Identifiers:** findsimilarlastname (3), findbyagelessthan (2), findfirstinalphabet (2), find3oldest (2), findoldest (2)
> **CLI Commands:** make (3), find (3)
> **Definitions:** is a  (3)
> **Cross-References:** in the last (1), go back to (1)
> **Analogies:** for example (1)
> **Prerequisites:** prerequisite (1)

#### Challenge: Refactor to three query methods
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/challenge-refactor-to-three-query-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/challenge-refactor-to-three-query-methods?u=76281980&t=0)** - [Instructor] It's time for another challenge.
>
> **[0:08](https://www.linkedin.com/learning/spring-data-2/challenge-refactor-to-three-query-methods?u=76281980&t=8)** This time we're going to see how well you understand query methods.
>
> **[0:13](https://www.linkedin.com/learning/spring-data-2/challenge-refactor-to-three-query-methods?u=76281980&t=13)** Let's see if you can refactor the department DAO find by name method, and put it in department repo.
>
> **[0:23](https://www.linkedin.com/learning/spring-data-2/challenge-refactor-to-three-query-methods?u=76281980&t=23)** Then refactor the staff DAO find by last name method, and put that into staff repo.
>
> **[0:30](https://www.linkedin.com/learning/spring-data-2/challenge-refactor-to-three-query-methods?u=76281980&t=30)** You must keep the method signatures the same, just declare the interfaces.
>
> **[0:36](https://www.linkedin.com/learning/spring-data-2/challenge-refactor-to-three-query-methods?u=76281980&t=36)** Then you need to refactor a JUnit test, create query test, to invoke the new methods.
>
> **[0:44](https://www.linkedin.com/learning/spring-data-2/challenge-refactor-to-three-query-methods?u=76281980&t=44)** So just to help you along a little bit here, there's staff DAO, and here's a method find by last name.
>
> **[0:51](https://www.linkedin.com/learning/spring-data-2/challenge-refactor-to-three-query-methods?u=76281980&t=51)** You want to put that into staff repo, and then here is department DAO, find by name, and you want to put that in department repo, and then finally, the criteria query test invokes the department DAO and staff DAO.
>
> **[1:11](https://www.linkedin.com/learning/spring-data-2/challenge-refactor-to-three-query-methods?u=76281980&t=71)** Those find by methods, refactor those, find by last name and find by name methods, in here, and then run this to make sure it's still runs.
>
> **[1:20](https://www.linkedin.com/learning/spring-data-2/challenge-refactor-to-three-query-methods?u=76281980&t=80)** You don't have to understand what's going on inside here yet but just run it so it doesn't run with errors.

> [!info]- Semantic Content
>
> **CLI Commands:** find (7), make (1)
> **Env Vars:** dao (6)
> **Code Keywords:** let (1), finally, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Refactor to three query methods
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/solution-refactor-to-three-query-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/solution-refactor-to-three-query-methods?u=76281980&t=0)** - [Instructor] So did you figure it out?
>
> **[0:08](https://www.linkedin.com/learning/spring-data-2/solution-refactor-to-three-query-methods?u=76281980&t=8)** Well, let's start with the easy one, which was department repo.
>
> **[0:12](https://www.linkedin.com/learning/spring-data-2/solution-refactor-to-three-query-methods?u=76281980&t=12)** And all we had to do is find by name on the department repo, easy peasy.
>
> **[0:16](https://www.linkedin.com/learning/spring-data-2/solution-refactor-to-three-query-methods?u=76281980&t=16)** Staff repo is a little more complicated because there's an intervening attribute called member but we wanted to keep it as fine by last name.
>
> **[0:26](https://www.linkedin.com/learning/spring-data-2/solution-refactor-to-three-query-methods?u=76281980&t=26)** So we did a JPQL query using at query annotation so select S from staff S where S.member.last name equals last name and then put the at param in there.
>
> **[0:40](https://www.linkedin.com/learning/spring-data-2/solution-refactor-to-three-query-methods?u=76281980&t=40)** Then we changed department DAO and staff DAO to the repos and refactored those.
>
> **[0:47](https://www.linkedin.com/learning/spring-data-2/solution-refactor-to-three-query-methods?u=76281980&t=47)** So it changed a couple methods in here and let's run it.
>
> **[0:54](https://www.linkedin.com/learning/spring-data-2/solution-refactor-to-three-query-methods?u=76281980&t=54)** It still runs fine.
>
> **[0:55](https://www.linkedin.com/learning/spring-data-2/solution-refactor-to-three-query-methods?u=76281980&t=55)** And then here's some more good news.
>
> **[0:58](https://www.linkedin.com/learning/spring-data-2/solution-refactor-to-three-query-methods?u=76281980&t=58)** Back in the department DAO nothing uses this method anymore, find by name, and therefore we can actually delete the department DAO.
>
> **[1:12](https://www.linkedin.com/learning/spring-data-2/solution-refactor-to-three-query-methods?u=76281980&t=72)** And then in staff, we have other methods that are still used but we can remove this find by last name.

> [!info]- Semantic Content
>
> **Env Vars:** dao (4), jpql (1)
> **CLI Commands:** find (3)
> **Code Keywords:** let (2), delete (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Paging and sorting
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=0)** - [Instructor] In our StaffDao class, there is a method to look up a subset of staff entities.
>
> **[0:07](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=7)** This subset is referred to as a page.
>
> **[0:10](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=10)** The first parameter is the page number, the second is the size of the page.
>
> **[0:15](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=15)** The method calculates the actual record numbers with the setFirstResult and setMaxResult on the query object and hardcodes the sort in the JPQL on the last name of the staff member.
>
> **[0:30](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=30)** I am happy to say that Spring Data provides a better out-of-the-box approach to paging and sorting, rendering this method unnecessary.
>
> **[0:39](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=39)** In this video, we're going to learn just that, query methods for paging and sorting.
>
> **[0:45](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=45)** So how is this done?
>
> **[0:47](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=47)** There is a PagingAndSortingRepository interface, and it overrides the findAll methods with Spring Data Sort and Spring Data Pageable parameters.
>
> **[0:57](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=57)** And the JpaRepository interface already extends from PagingAnSortingRepository.
>
> **[1:05](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=65)** So all of our repo interfaces in our project already have these methods available.
>
> **[1:11](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=71)** Plus, query methods can apply paging and sorting just by adding a Spring Data Sort, or a Spring Data Pageable parameter.
>
> **[1:22](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=82)** We instantiate a Spring Data Sort by invoking the static Spring Data Sort.by method, which is overridden several ways.
>
> **[1:32](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=92)** Let's look at these examples.
>
> **[1:34](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=94)** Sort A is created by passing a Sort.Direction, followed by the attribute as a string.
>
> **[1:42](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=102)** Sort B is identical to Sort A, but a Sort.Order is provided.
>
> **[1:48](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=108)** Sort C only provides the attributes and the Direction is the default.
>
> **[1:54](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=114)** Finally, Sort D shows that many levels of subsorting can be applied.
>
> **[2:00](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=120)** So the findAll which applies Sort D will get all of the staff sorted by lastName.
>
> **[2:07](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=127)** And if the lastNames match, the subsort of firsName is applied.
>
> **[2:13](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=133)** A Pageable object is created by the static PageRequest.of method.
>
> **[2:18](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=138)** The first parameter is the number of the page.
>
> **[2:21](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=141)** The second parameter is the page size and the optional third parameter is the Sort object.
>
> **[2:28](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=148)** The first page always starts at index zero, so using the Sort of lastName and a subsort of firstname, Pageable X will request the first five staff members and Pageable Y will request the next five.
>
> **[2:45](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=165)** Finally, invoking the findAll method with the Pageable object returns a container of type Page.
>
> **[2:52](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=172)** The Page contains the found entities and metadata about the results.
>
> **[2:57](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=177)** To get the results, we can can invoke getContents for the list, or get for a stream, getTotalElements returns the total number of elements matching the query, getTotalPages returns the number of pages of elements.
>
> **[3:12](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=192)** Now, let's refactor our university project to leverage Spring Data paging and sorting.
>
> **[3:18](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=198)** So here's our method in the StaffDao find and passing in an int page number and then the JPQL, and then, having to apply the first results and the max results.
>
> **[3:31](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=211)** Let's, instead of invoking this, we're going to invoke our StaffRepo and we don't have to add anything to StaffRepo, because it already has these paging methods, I'll show you,
>
> **[3:49](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=229)** as part a PagingAndSortingRepository, it has these findAll with the page.
>
> **[3:59](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=239)** So let's go to PagingTest, where we're now going to invoke the StaffRepo.
>
> **[4:20](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=260)** And now, we're going to replace this with what actually comes out of the box for us with Spring Data.
>
> **[4:28](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=268)** I'm going to create a Sort,
>
> **[4:44](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=284)** so this Sort will do a Sort.by member.lastname.
>
> **[4:51](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=291)** And then, we're going to actually do the page look up.
>
> **[5:13](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=313)** So now, this findAll method is going to do a page request of, and I'm going to request page zero of size five, just so that it would render the same results as the original StaffDao method.
>
> **[5:27](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=327)** So we're going to get rid of that
>
> **[5:36](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=336)** and I'm going to rename this SpringDataPage.
>
> **[5:43](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=343)** And then, so staffPage can have the same results, same value, equals staffSpringDataPage.getContent.
>
> **[6:00](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=360)** And now we have a list.
>
> **[6:03](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=363)** Let's run this to see if we get the same results as before.
>
> **[6:11](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=371)** Yep, we didn't break anything.
>
> **[6:13](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=373)** It got the same expected results as before.
>
> **[6:15](https://www.linkedin.com/learning/spring-data-2/paging-and-sorting?u=76281980&t=375)** So good news, we can now delete StaffDao from our project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), interface (2), static (2), finally, (2), class, (1)
> **Code Identifiers:** findall (5), lastname (2), setfirstresult (1), setmaxresult (1), lastnames (1)
> **Env Vars:** jpql (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 4. Dynamic Spring Data JPA Queries

#### Specifications
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=0)** - [Instructor] Thus far, we have only learned about Spring Data queries whose parameters are known at implementation.
>
> **[0:06](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=6)** In some applications, we may not know this until runtime.
>
> **[0:10](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=10)** We need to be able to query the data store in a dynamic fashion.
>
> **[0:14](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=14)** In this chapter, we are going to look at the various ways to create dynamic queries with Spring Data.
>
> **[0:22](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=22)** Spring Data Commons query methods are static.
>
> **[0:25](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=25)** Filtering by multiple fields requires several query methods covering all possible combinations.
>
> **[0:31](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=31)** In this course repository example, filtering just by instructor, credits, and department, requires several different query methods plus logic to decide which method to invoke.
>
> **[0:44](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=44)** The original CourseDAO provides dynamic filters to the course table via the Java Persistence Criteria API.
>
> **[0:53](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=53)** This a API requires first instantiating a criteria builder from the entity manager to create a criteria query.
>
> **[1:01](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=61)** The root of the course specifies the root table.
>
> **[1:04](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=64)** Multiple predicates are built on the fly at runtime and applied to the criteria query's where clause.
>
> **[1:11](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=71)** Finally, the criteria query is invoked via the entity manager.
>
> **[1:16](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=76)** Not the most elegant looking code is it?
>
> **[1:19](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=79)** Spring Data JPA provides an abstraction called the JpaSpecificationExecutor Interface.
>
> **[1:27](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=87)** It invokes the same methods, but hides all the extraneous details from us.
>
> **[1:32](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=92)** Here, CourseRepo implements not just JPA repository, but also JpaSpecificationExecutor.
>
> **[1:40](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=100)** The various findAll methods require a specification attribute.
>
> **[1:44](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=104)** So, what are specifications?
>
> **[1:48](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=108)** In this example, we instantiate an anonymous specification class where the two predicate methods body is built at runtime.
>
> **[1:57](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=117)** We see the root query and the criteria builder from the criteria API are still part of the equation, but Spring Data provides them for us.
>
> **[2:06](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=126)** Still not the most elegant, but luckily we can employ Java 8 Lambdas and delete unnecessary declarations.
>
> **[2:14](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=134)** This is much better.
>
> **[2:15](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=135)** Now we can concentrate on the most important part, creating the predicates.
>
> **[2:21](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=141)** So, let's refactor our CourseDAO to use Spring Data JPA Specifications.
>
> **[2:28](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=148)** So, in the CourseDAO, we have a findByCriteria method.
>
> **[2:33](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=153)** The criteria query is passed into it and invoked by the entity manager.
>
> **[2:37](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=157)** So, what invokes it?
>
> **[2:39](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=159)** It's our business service class Dynamic Query Service.
>
> **[2:46](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=166)** In DynamicQueryService.findCoursesByCriteria, a course filter is passed in.
>
> **[2:54](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=174)** This is CourseFilter.
>
> **[2:57](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=177)** CourseFilter contains optionals for department, credits, and instructor.
>
> **[3:01](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=181)** They are initialized to empty, and the builder pattern is employed to set them at runtime.
>
> **[3:09](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=189)** Back in our Dynamic Query Service, we set up the criteria builder, criteria query and the root for Course.
>
> **[3:17](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=197)** Then, we build our list of predicates by seeing if the department, credits, or instructor are present in the filter.
>
> **[3:24](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=204)** If it is, we add it to our list of predicates and And conditions for the values.
>
> **[3:30](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=210)** After that, we apply the criteria query Select of the root and where the array of predicates, and finally invoke coursesDAO.findCoursesByCriteria method passing in the criteria query.
>
> **[3:45](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=225)** Let's test it.
>
> **[3:46](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=226)** So, it's invoked by CriteriaQuerTtest, and we see that the setup is, there's a private method called queryAndVerify, which is invoked and passed in the criteria filter for various accommodations, and then it iterates through that and prints it out.
>
> **[4:06](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=246)** So, I'm going to just run it, and we'll see the queries for all humanities courses, the results for all for credit courses, and courses taught by Professor Black, and courses in humanities taught by Professor Black and for credit courses.
>
> **[4:26](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=266)** And it's just by invoking the filterBy method on the course filter that it knows what attributes to filter by.
>
> **[4:36](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=276)** So, here's all humanities courses, all for credit courses, courses taught by Professor Black, and courses in humanities taught by Professor Black and for credits.
>
> **[4:50](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=290)** Now, let's refactor the code to use specifications instead.
>
> **[4:55](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=295)** First we're going to go to CourseRepo, and add another extends JpaSpecificationExecutor.
>
> **[5:10](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=310)** Then, we're going to go to CourseFilter, and at the bottom here, because it's a lot of code, I just put it in a comment, to get the specification for whatever the current course filter is set to, it will derive the specification for the course.
>
> **[5:31](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=331)** So, now we generate the specification from this particular CourseFilter.
>
> **[5:38](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=338)** You have to make sure that the predicates that you import is the predicate from javax.persistence.
>
> **[5:47](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=347)** There's another one in Spring, but you don't want that, you want the one from javax.persistence criteria.
>
> **[5:53](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=353)** Now, let's go over to our DynamicQueryService, and we're going to do a big change here.
>
> **[5:59](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=359)** We're going to now use CourseRepo, and we are not going to use the EntityManager at all.
>
> **[6:08](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=368)** We're not going to use this old findCourseByCriteria method, and so I'm going to regenerate the constructor, so Spring will be able to eject that, and then finally we're going to have the method filterBySpecification, and we're going to pass this filter into our findAll method, and we're going to say getSpecification.
>
> **[6:43](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=403)** Big change there.
>
> **[6:44](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=404)** And now finally, in our CriteriaQueryTest, we're going to change this to now reference the query service, is now going to invoke filterBySpecification.
>
> **[7:02](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=422)** So, now we are going to run this, and just keep in mind that now it's going to invoke the new method filterBySpecification, and then the CourseFilter is now going to derive the specification for us.
>
> **[7:19](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=439)** So, let's run this and make sure that it still passes.
>
> **[7:25](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=445)** and it does pass, and it returns all the same values as before.
>
> **[7:29](https://www.linkedin.com/learning/spring-data-2/specifications?u=76281980&t=449)** And our final step is that we can now delete our CourseDAO, so, we don't have any more DAOs in our project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), finally, (2), delete (2), pass (2), static (1)
> **Code Identifiers:** filterbyspecification (3), findall (2), findcoursesbycriteria (2), findbycriteria (1), coursesdao (1)
> **Env Vars:** api (3), jpa (3)
> **Documentation:** specification (6)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Prerequisites:** set up (1), setup (1)
> **Versions:** java 8 (1)

#### Querydsl
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=0)** - [Instructor] A step up from specifications is the third party library, Querydsl.
>
> **[0:06](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=6)** Querydsl provides an intuitive, type safe querying language that can run on multiple types of data stores.
>
> **[0:13](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=13)** So its no wonder that Spring Data has a Querydsl executor.
>
> **[0:18](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=18)** We use the apt-mavin plugin to generate special querying Java classes called Q classes.
>
> **[0:28](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=28)** The backbone of a Querydsl for JPA are these Q classes and they are generated at build time via that Maven plugin.
>
> **[0:37](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=37)** When the plugin is invoked, all of the JPA entities will have an associated Q class which can be referenced at implementation.
>
> **[0:47](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=47)** Spring Data Commons provides an extension to Querydsl via the Querydsl Predicate Executor interface, a repository extending from Querydsl Predicate Executor overloads the find, count and exist methods.
>
> **[1:04](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=64)** Predicate is the search criteria.
>
> **[1:07](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=67)** These predicates are Querydsl predicate classes, not JPA criteria predicates.
>
> **[1:14](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=74)** Q classes are search criteria helpers to create what are called Boolean expressions, the building blocks of predicates.
>
> **[1:22](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=82)** In this example, I have three helper methods that are used to dynamically create Boolean expressions.
>
> **[1:28](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=88)** There is a hasLastName helper method, a isFullTime helper method, and isOlderThan helper method.
>
> **[1:37](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=97)** I'll invoke the QStudent class attributes and conditionals.
>
> **[1:42](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=102)** Now, we just mix and match the Boolean expressions into predicates and pass them into our repository findAll method.
>
> **[1:49](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=109)** Its much cleaner looking, isn't it?
>
> **[1:51](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=111)** And it reads better too.
>
> **[1:52](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=112)** So find all students with last name Smith that's full time and is older than 20.
>
> **[1:58](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=118)** Find all students that are full time and is older than 20.
>
> **[2:03](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=123)** Find all students that has a last name Smith and is older than 20.
>
> **[2:07](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=127)** And find students that are full time or older than 20.
>
> **[2:12](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=132)** You can learn more about this powerful, open source project on www.[querydsl.com](https://querydsl.com).
>
> **[2:19](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=139)** So lets apply Querydsl to our criteria queries.
>
> **[2:23](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=143)** So the first thing we're going to do at the beginning of this chapter is in the pom.
>
> **[2:29](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=149)** I have this plugin commented out so I'm going to uncomment it.
>
> **[2:35](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=155)** The dependency for Querydsl and then the plugin.
>
> **[2:46](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=166)** So now that that's in place, I'm going to use the Maven view here.
>
> **[2:50](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=170)** You can do this at the command line too but I'm just going to first import the changes of the pom, and then just run the compile goal and we'll see the Q classes that it generates.
>
> **[3:06](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=186)** So it finished so its in the target folder, generated sources, Java, and here are these Q classes.
>
> **[3:16](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=196)** So just open up source, course for example, Qcourse, and its got some nice public final static methods and attributes to access.
>
> **[3:29](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=209)** So now lets actually, in our code, we're going to create a new repo.
>
> **[3:42](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=222)** And call it CourseQueryDslRepo and its an interface.
>
> **[3:59](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=239)** And now we're going to add the executor, predicate executor on course, okay?
>
> **[4:07](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=247)** And now, we're going to go to our course filter and there's some code that's commented out that we're going to uncomment.
>
> **[4:15](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=255)** And this is the get Querydsl predicate.
>
> **[4:18](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=258)** So you can see I have to put the full package of Predicate in here, otherwise it clashes with the Predicate that we've already used.
>
> **[4:27](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=267)** And so this Querydsl Predicate is referencing this course here, that's a Q class, course.department.eq.
>
> **[4:37](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=277)** In department, if the credits is present, add the predicate to course credits and if instructor is present, add the predicate for instructor.
>
> **[4:47](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=287)** Okay, now to our dynamic query service.
>
> **[4:52](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=292)** We're going to add the CourseQueryDslRepo and we're going to regenerate the constructor so its properly injected into this class.
>
> **[5:11](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=311)** And now we're going to add a new public method.
>
> **[5:18](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=318)** And now we want to call findAll and we're going to filter.getQueryDslPredicate.
>
> **[5:31](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=331)** So this method on the findAll returns an iterable, so I need to translate that and have it return a list.
>
> **[5:43](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=343)** So I need to do a forEach and that will iterate through the iterable and add it to the courses list and then return courses.
>
> **[5:58](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=358)** Very good.
>
> **[5:59](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=359)** And now, let's go to our criteria query test.
>
> **[6:10](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=370)** And now, instead of filter by specification, we're going to invoke the new method we just wrote, filterByQueryDsl.
>
> **[6:21](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=381)** It compiles, okay.
>
> **[6:23](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=383)** Let's run it.
>
> **[6:27](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=387)** Oh, keystroke error there.
>
> **[6:30](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=390)** Run it again.
>
> **[6:34](https://www.linkedin.com/learning/spring-data-2/querydsl?u=76281980&t=394)** And it passes, so its giving the same criteria results that were expected before where we're filtering first by all humanities courses, then all four credit courses, then courses taught by Professor Black, courses and humanities taught by Professor Black and four credits.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), public (2), let (2), pass (1), static (1)
> **Code Identifiers:** findall (3), haslastname (1), isfulltime (1), isolderthan (1), getquerydslpredicate (1)
> **CLI Commands:** find (5), apt (1)
> **Env Vars:** jpa (3)
> **UI Navigation:** go to (2)
> **URLs:** [querydsl.com](https://querydsl.com) (1)
> **Documentation:** specification (1)
> **Tools:** command line (1)

#### Query by Example
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=0)** - Now let's look at QueryByExample as a dynamic querying option.
>
> **[0:05](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=5)** It is a simple alternative and is built into spring data.
>
> **[0:10](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=10)** Why use QueryByExample?
>
> **[0:12](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=12)** It's much easier than having to learn another query language like JPQL.
>
> **[0:18](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=18)** We look up records just based on entity settings.
>
> **[0:21](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=21)** It's independent of the data store and it's easy to integrate with frequently refactored code.
>
> **[0:28](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=28)** Why not use QueryByExample?
>
> **[0:30](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=30)** Well, it does have its limitations.
>
> **[0:32](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=32)** It falls short for querying required nesting property constraints or complex string matching.
>
> **[0:39](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=39)** To add QueryByExample we just extend from QueryByExample executor interface.
>
> **[0:45](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=45)** The JpaRepository interface already extends from QueryByExample executor.
>
> **[0:51](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=51)** So we don't need to update our repositories.
>
> **[0:54](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=54)** The QueryByExample executor interface provides find all, find one and count methods which take an example attribute.
>
> **[1:01](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=61)** So how do we instantiate an example class?
>
> **[1:04](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=64)** One way to instantiate an example class is with a probe.
>
> **[1:08](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=68)** A probe is an instance of the entity with values we want to filter by.
>
> **[1:13](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=73)** In this case department, we set the attributes and department that we need to match.
>
> **[1:18](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=78)** So to find the department with the name, "humanities," we construct the department object with only the department name set.
>
> **[1:25](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=85)** The rest of the attributes are null.
>
> **[1:27](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=87)** So to find all departments whose chair has the first name of, "Rachel," we construct the department object where the name is null, set the first name attribute of the chairperson to, "Rachel," and the last name attribute of the chairperson to null.
>
> **[1:41](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=101)** The other way to instantiate an example is to provide an ExampleMatcher with the probe to further refine the search.
>
> **[1:48](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=108)** In this example, we have a case insensitive search on all departments ending with the name, "sciences."
>
> **[1:55](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=115)** ExampleMatcher methods follow the builder pattern so you can just keep adding as many restrictions as needed.
>
> **[2:01](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=121)** The restrictions here are with ignore case and with string match or ending.
>
> **[2:07](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=127)** So let's use QueryByExample for our criteria queries.
>
> **[2:12](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=132)** The first place we go again is to our course filter.
>
> **[2:15](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=135)** And based on the settings of our attributes in the course filter, we will return an example probe.
>
> **[2:22](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=142)** So I'm going to uncomment this code, that will instantiate a course object and then based on the presence of the credits, instructor or department's object will actually get the value of credits orElse put in a null, the value of instructor orElse a null, the value of the department's orElse a null.
>
> **[2:42](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=162)** And then create an example probe from that object.
>
> **[2:48](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=168)** And now we'll go to our dynamic query service and we're going to create a method that returns that.
>
> **[2:58](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=178)** So then we're going to invoke the course repo, findAll with example as the attribute.
>
> **[3:09](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=189)** So filter dot getExampleProbe.
>
> **[3:15](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=195)** And then we will return the result of that.
>
> **[3:20](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=200)** And now let's go to our criteria query test and modify filterByExample and save that.
>
> **[3:32](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=212)** That compiles and let's run it.
>
> **[3:39](https://www.linkedin.com/learning/spring-data-2/query-by-example?u=76281980&t=219)** And our test passes and we're getting the correct filters that we ask for.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (3), extends (1), match. (1), for. (1)
> **Code Identifiers:** orelse (3), findall (1), getexampleprobe (1), filterbyexample (1)
> **CLI Commands:** find (4)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** jpql (1)
> **Speakers:** - now (1)
> **Non-Speech:** (typing) (1)

#### Challenge: Query by Example
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/challenge-query-by-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/challenge-query-by-example?u=76281980&t=0)** (bright upbeat music)
>
> **[0:07](https://www.linkedin.com/learning/spring-data-2/challenge-query-by-example?u=76281980&t=7)** - [Instructor] It's time for another challenge.
>
> **[0:09](https://www.linkedin.com/learning/spring-data-2/challenge-query-by-example?u=76281980&t=9)** For this one, we are in the CriteriaQueryTest, and on lines 35 and 36, we are using query methods to look up the humanities department by name, and the professor whose last name is Black.
>
> **[0:24](https://www.linkedin.com/learning/spring-data-2/challenge-query-by-example?u=76281980&t=24)** Let's see if you can modify these two query methods.
>
> **[0:28](https://www.linkedin.com/learning/spring-data-2/challenge-query-by-example?u=76281980&t=28)** Instead of using query methods, use query by example to look up the humanities department and look up Professor Black.
>
> **[0:37](https://www.linkedin.com/learning/spring-data-2/challenge-query-by-example?u=76281980&t=37)** And bonus points if you could do it where it's a case insensitive search.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### Solution: Query by Example
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/solution-query-by-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/solution-query-by-example?u=76281980&t=0)** - [Instructor] Did you figure it out?
>
> **[0:08](https://www.linkedin.com/learning/spring-data-2/solution-query-by-example?u=76281980&t=8)** Well, here's the answer.
>
> **[0:10](https://www.linkedin.com/learning/spring-data-2/solution-query-by-example?u=76281980&t=10)** On line 38, we're calling departmentRepo.findOne instead of find all because we expect only one result when looking up the department name, and the example of is new department where the name that's passed in is capital H in Humanities, and then null for the chair.
>
> **[0:31](https://www.linkedin.com/learning/spring-data-2/solution-query-by-example?u=76281980&t=31)** And here's the extra challenging part which was saying ignore the case.
>
> **[0:36](https://www.linkedin.com/learning/spring-data-2/solution-query-by-example?u=76281980&t=36)** Even if there was not a capital H on Humanities, it would find it.
>
> **[0:40](https://www.linkedin.com/learning/spring-data-2/solution-query-by-example?u=76281980&t=40)** So, matching static method dot with ignore case and then we're calling get on the optional that's returned, return Humanities, and then on Professor Black, there's a find all because you could have multiple professors with that same last name, so find all.
>
> **[0:59](https://www.linkedin.com/learning/spring-data-2/solution-query-by-example?u=76281980&t=59)** And then our probe is an example of a new staff member and inside that is instantiating a person where the first name is null and the last name is Black, and then the second parameter in the probe is the matching dot with ignore case and then, we want to get back a list there which we will stream, and then just get the first one because we just expect Black to be the only one that's with that last name.
>
> **[1:29](https://www.linkedin.com/learning/spring-data-2/solution-query-by-example?u=76281980&t=89)** And so, let's run this in the debugger to verify we get back what we were expecting.
>
> **[1:39](https://www.linkedin.com/learning/spring-data-2/solution-query-by-example?u=76281980&t=99)** So, we're at our break point.
>
> **[1:40](https://www.linkedin.com/learning/spring-data-2/solution-query-by-example?u=76281980&t=100)** So, in our debugger, we see that Humanities is returned with this ID.
>
> **[1:48](https://www.linkedin.com/learning/spring-data-2/solution-query-by-example?u=76281980&t=108)** I got back the Humanities object we were expecting.
>
> **[1:53](https://www.linkedin.com/learning/spring-data-2/solution-query-by-example?u=76281980&t=113)** And Professor Black, Jack Black, is what we wanted and we got that back.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Code Keywords:** case. (1), static (1), let (1)
> **Code Identifiers:** departmentrepo (1), findone (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. More Spring Data Features

#### Spring Data REST
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=0)** - [Instructor] Spring Data REST is a module for exposing spring data repositories as hypermedia driven RESTful web services.
>
> **[0:09](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=9)** And it's actually pretty amazing.
>
> **[0:11](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=11)** Similar to Spring Data commons which extrapolates the underlying backend data store services from a CrudRepository, Spring Data REST exposes those same repositories as web services with no coding or extra configuration.
>
> **[0:28](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=28)** All we need to do is add the Spring Data REST starter dependency to the palm, rebuild the application and start it.
>
> **[0:35](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=35)** And that's when the magic happens.
>
> **[0:37](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=37)** At application startup, after bootstrap, Spring Data REST finds the jpa entities that have the Spring Data repositories, creates an endpoint that matches the entity name, appends an s to that endpoint, and exposes methods as restful resource APIs over HTTP.
>
> **[0:57](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=57)** So let's see how HTTP verbs get, post, put, patch, and delete our map to the repository methods.
>
> **[1:05](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=65)** findAll, findById and the custom query methods mapped to HTTP get.
>
> **[1:09](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=69)** So for example, let's say that our department repository just extended from CrudRepository HTTP get departments invokes departmentRepo.findAll, get/department/5 would find the department's, by Id five.
>
> **[1:25](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=85)** And the query method fine by name is exposed by a department/search/findByName.
>
> **[1:33](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=93)** The staff repository here extends from JpaRepository.
>
> **[1:38](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=98)** Remember, JpaRepository also extends from paging and sorting repository.
>
> **[1:44](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=104)** So staffs has paging and sorting parameters.
>
> **[1:48](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=108)** The same is applied to the query methods that include a Pageable parameter.
>
> **[1:52](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=112)** HTTP post creates entities.
>
> **[1:56](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=116)** The request body is in JSON format, and maps to the save method.
>
> **[2:02](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=122)** HTTP put and patch modifies an existing entity.
>
> **[2:06](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=126)** Put modifies all non ID elements of an entity, patch modifies some elements.
>
> **[2:13](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=133)** So a staff member with identifier two, Spring Data REST must first look up that member, and apply the modifications.
>
> **[2:21](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=141)** And finally, HTTP delete of the endpoint maps to the repository.delete method.
>
> **[2:28](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=148)** The response body returns Hypermedia enabled JSON content.
>
> **[2:33](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=153)** The relationships, even if the JPA entity is fetch type eager contains the endpoint of that relationship.
>
> **[2:41](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=161)** So the chair attribute instead of being the first and last name is actually a link that you would use to fetch later on a different call that chair.
>
> **[2:52](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=172)** We can override this behavior by creating a projection interface.
>
> **[2:57](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=177)** Here is a projection called showChair that exposes the department name, and the chair formatted with spring expression language.
>
> **[3:05](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=185)** Now invoking /departments endpoint with the projection equals showChair will actually see the name of the chair, John Smith.
>
> **[3:15](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=195)** Finally, the default mapping for the staff entity is to a staffs endpoint.
>
> **[3:23](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=203)** Staffs is not proper English as staff is already plural.
>
> **[3:28](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=208)** Thankfully we can override the default endpoint name with a repository rest resource annotation.
>
> **[3:33](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=213)** So let's apply Spring Data REST to our university application.
>
> **[3:38](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=218)** The first thing we need to do is in this branch we have some dependencies that are commented out.
>
> **[3:45](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=225)** So the first dependency here is actually our spring-boot-starter-data-rest for Spring Data REST, but I'm also including a dependency for spring-doc-openapi-ui, and that's our generating swagger ui, so that we actually have a webpage that we can access in our browser that will interact with the APIs for us rather than us having to do everything on the Chrome url.
>
> **[4:11](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=251)** And so, and then the next dependency is the same product, but for actually looking up Spring Data REST APIs.
>
> **[4:19](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=259)** So uncommand that block and import the changes.
>
> **[4:25](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=265)** There's a new file in the domain package called showChair, and this is our projection that we want to create to so we can show the chair and it's commanded up, but I'm going to uncommand it, and include projection in our imports.
>
> **[4:40](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=280)** And so this showChair, we're actually using attributes in the entities.
>
> **[4:45](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=285)** So this will be first name, and then a space and then pulling in the last name.
>
> **[4:50](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=290)** And then that's going to be returned in the showChair interface.
>
> **[4:54](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=294)** Finally, we want to get rid of that S at the end of staffs.
>
> **[4:59](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=299)** Okay, now let's make sure Maven is happy, but that things could still compile.
>
> **[5:04](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=304)** This is the command line to run Maven install, or I'm just doing it within my IDE and everything compiles.
>
> **[5:12](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=312)** You can start this as a jar at the command line, or I'm just going to actually run it the main program within my IDE, run university application.
>
> **[5:24](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=324)** Okay, it started up, okay, let's go to our browser.
>
> **[5:28](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=328)** So we're going to go to localhost:8080 which is we're looking at something on our run machine /swagger.ui/index.html.
>
> **[5:40](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=340)** And this will show us a visual presentation of all of our restful resources that we now have exposed over HTTP.
>
> **[5:48](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=348)** And you can actually see for all of our rest repositories we now have controllers for Get, Put, Patch every single verb that you would ever want to, all of our queries that we ever want to do.
>
> **[5:59](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=359)** So let's first create a staff member.
>
> **[6:04](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=364)** So we'll scroll down to the staff section, and let's use HTTP post.
>
> **[6:11](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=371)** It's a nice little ui here to try it out.
>
> **[6:13](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=373)** It's, and it has the format for it if we want to create a staff member, so you don't create the ID that's generated for us.
>
> **[6:22](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=382)** We want to create a staff member with the name Bob and last name Mack, and then execute and it will invoke this API to post, to staff and this data, okay?
>
> **[6:42](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=402)** And we see that it did work and the response comes back, and we know that now the staff ID is one from the href.
>
> **[6:52](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=412)** So I'm going to collapse this section, and do a get on all staff.
>
> **[7:01](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=421)** It's going to show us, okay, here's the staff.
>
> **[7:04](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=424)** We have Bob Mack, his first name, and then we have all kinds of reference links as well and paging information, okay?
>
> **[7:11](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=431)** Now, that we have a staff number, and we know the idea of the staff number is one, let's create a department, and say that this Bob Mack is the chair of that department.
>
> **[7:21](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=441)** So we'll go to the department controller, go to post.
>
> **[7:32](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=452)** So I'm going to create a department, remove the, this nice swagger, gives you a sample of what the data could look like that you want to put in.
>
> **[7:40](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=460)** So I'm going to create a department called Sciences.
>
> **[7:45](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=465)** And now here's where I put in a chair ref.
>
> **[7:51](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=471)** So it's a reference to that staff member.
>
> **[7:55](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=475)** So [http://localhost:8080/staff/1](http://localhost:8080/staff/1),
>
> **[8:07](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=487)** And we're not going to add any courses right now to the department.
>
> **[8:11](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=491)** We want to make sure we remove that comma, otherwise we're going to get an error.
>
> **[8:16](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=496)** So let's create Sciences department.
>
> **[8:20](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=500)** And that worked, we created sciences department, and we see that department is ID two.
>
> **[8:26](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=506)** And now, let's try to use that projection because whenever we do a get on departments,
>
> **[8:41](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=521)** we look up the department, it returns the chair, it just says a link.
>
> **[8:46](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=526)** It doesn't really give us a lot of information, but we created a projection to deal with that.
>
> **[8:51](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=531)** So here's the URL to use a projection.
>
> **[8:54](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=534)** So we localhost, and, sorry, I'm doing this at the URL at the top here because this information wasn't easily available in swagger, on the swagger-ui.
>
> **[9:05](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=545)** So that's, that's why it's in this URL right here.
>
> **[9:07](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=547)** So it's localhost:8080/departments/2?projection=showChair.
>
> **[9:17](https://www.linkedin.com/learning/spring-data-2/spring-data-rest?u=76281980&t=557)** Issue that, and so it came back, and we see that now not only is it having the links, we actually have this chair name attribute show up, and remember where we had the projection with the first name and then a space last name.

> [!info]- Semantic Content
>
> **Env Vars:** http (9), rest (8), url (3), json (2), ide (2)
> **Code Keywords:** let (10), delete (3), finally, (3), extends (2), override (2)
> **Code Identifiers:** showchair (6), findall (2), findbyid (1), departmentrepo (1), findbyname (1)
> **UI Navigation:** go to (4), scroll down (1)
> **CLI Commands:** make (2), find (1)
> **URLs:** [localhost:8080](https://localhost:8080) (2), [http://localhost:8080/staff/1](http://localhost:8080/staff/1) (1)
> **Ports:** :8080 (3)
> **Tools:** command line (2)

#### Spring Data MongoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=0)** - [Instructor] Spring Data supports many types of data sources via the commons Crud repository.
>
> **[0:05](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=5)** We've already seen it in action with Spring Data JPA.
>
> **[0:09](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=9)** Let's see what happens when we apply it to MongoDB.
>
> **[0:12](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=12)** We have a new simplified Spring Boot University project in the 5_02 branch.
>
> **[0:19](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=19)** In the pom.xml configuration file from Maven, there are two dependencies that we should look at.
>
> **[0:25](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=25)** One is spring booth starter data MongoDB, and that's our starter for MongoDB.
>
> **[0:31](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=31)** Flapdoodle is our embedded Mongo instance, and so that instead of h2 for relational database flapdoodle is our MongoDB in memory instance.
>
> **[0:44](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=44)** So before we do anything, if you switch branches from using JPA, let's do a mvn clean, so any of the old classes don't cause conflicts when compiling with this new project.
>
> **[0:57](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=57)** So we have a domain package with three domain model objects department, person and staff.
>
> **[1:04](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=64)** Instead of JPA entities, MongoDB persists what are called documents.
>
> **[1:11](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=71)** Staff is a MongoDB document.
>
> **[1:14](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=74)** It has a generated id, which must be of type string.
>
> **[1:18](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=78)** Staff encapsulates person as a member attribute, person is just a plain old Java object, containing first and last name.
>
> **[1:25](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=85)** And then we have the @Document annotation which comes from spring data MongoDB core mapping.
>
> **[1:35](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=95)** Department is the other MongoDB document.
>
> **[1:38](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=98)** It has a generated ID, department name, and a staff member that is a department chair.
>
> **[1:44](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=104)** For each document, there is a repository, department repo and staff repo.
>
> **[1:51](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=111)** Staff repository is a spring data paging, and sorting repository, and it also implements Crud Repository similar to JPA staff repository in chapter four.
>
> **[2:02](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=122)** There are two query methods, findByMemberLastName is a property expression.
>
> **[2:07](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=127)** findByFirstName has the at query annotation.
>
> **[2:11](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=131)** Here, instead of JPQL, there is a Mongo JSON Query.
>
> **[2:18](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=138)** Department Repo is a Mongo repository which extends paging and sorting repository, query by example, executor and Crud repository.
>
> **[2:28](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=148)** There are three query methods, findByName and findByChair, and they are simple property expressions.
>
> **[2:34](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=154)** Find name by pattern issues a JSON query, which performs a regular expression search on the department name.
>
> **[2:44](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=164)** University application as our spring boot application class, just like the JPA and h2 example, Spring boot initializes the in-memory database at startup.
>
> **[2:54](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=174)** I'm using Fungo instead of Mongo.
>
> **[2:56](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=176)** So there was zero set up needed to run the exercise files.
>
> **[3:00](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=180)** I do need to specify the spring MongoDB embedded version in the application properties for Fungo to work.
>
> **[3:08](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=188)** So here's my application properties, so you could have be using application.yaml, and this has to be set to tell what version to apply in production.
>
> **[3:20](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=200)** This is not going to production, but you still need to set this value for the Fungo to work.
>
> **[3:25](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=205)** Now we have MongoDB demos, which is a J-unit test, and at the top of them or so, just some helper methods.
>
> **[3:35](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=215)** One helper method creates a staff passing in the first last name, and it calls the staffRepo save method with a new staff object.
>
> **[3:44](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=224)** And another helper method is create department just passing in a department name, and a staff attribute to instantiate, and do department in the database.
>
> **[3:56](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=236)** Let's run this in debug mode.
>
> **[4:00](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=240)** Okay, so we've hit our break point.
>
> **[4:02](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=242)** I'm going to move this up a little bit.
>
> **[4:04](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=244)** And so we're going to create a bunch of staff members, and a bunch of department members.
>
> **[4:11](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=251)** And I'm just going to hit go to go to this next break point.
>
> **[4:15](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=255)** I have to do the console.
>
> **[4:17](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=257)** So I'm going to call this query to find all staff members, and sort alphabetically by last name.
>
> **[4:24](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=264)** So I was going to call that findAll on this sort that I've just declared, and print them to the screen.
>
> **[4:31](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=271)** So here's all those staff members sorted alphabetically by last name.
>
> **[4:39](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=279)** Next, I'm going to find the first five staff members, and sort alphabetically by last name.
>
> **[4:47](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=287)** So I'm passing in a page request, which we've talked about before on the staff repo, and print those out.
>
> **[4:57](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=297)** And now a property expression to findByMemberLastName on staffRepo.
>
> **[5:06](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=306)** And now find all staff members with first name as John, findByFirstName, John.
>
> **[5:17](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=317)** And there we found John Jones.
>
> **[5:22](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=322)** And now, find all departments, and sort alphabetically on the last name.
>
> **[5:27](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=327)** So we're passing in our sort with a direction, and the property last name.
>
> **[5:33](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=333)** And now we are going to issue the property expression findByName, where departments are by the name of humanities.
>
> **[5:42](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=342)** And it's printed that one out.
>
> **[5:45](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=345)** And now we're going to use a regex regular expression to passing in findNameByPattern, and I'm going to do a search where anything ends in sciences.
>
> **[5:55](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=355)** It could begins with a capital S, or lowercase s, and print those out.
>
> **[6:02](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=362)** So we have natural sciences or social sciences.
>
> **[6:05](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=365)** And because we have a dot before the S's, that means it's it could be anything, it's like it's a wild card.
>
> **[6:13](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=373)** So that's why you have natural and social.
>
> **[6:16](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=376)** And finally we're going to find chair named last name of Jones.
>
> **[6:22](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=382)** And so here we found John Jones as the chair of humanities and social sciences, and then just hit go.
>
> **[6:28](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=388)** So it's kind of amazing that the, it's very similar to what we do with JPA, but now we've pivoted to a new type of data source, SQL data source, but it's like we already know what we're doing to begin with.
>
> **[6:39](https://www.linkedin.com/learning/spring-data-2/spring-data-mongodb?u=76281980&t=399)** So it's nice that these things with Spring data commons can transfer to other data sources without a big learning curve.

> [!info]- Semantic Content
>
> **CLI Commands:** find (6), mongo (4), mvn (1)
> **Code Identifiers:** findbymemberlastname (2), findbyfirstname (2), findbyname (2), staffrepo (2), findbychair (1)
> **Env Vars:** jpa (6), json (2), jpql (1), sql (1)
> **Definitions:** is a  (8)
> **Code Keywords:** let (3), switch (1), implements (1), extends (1), class, (1)
> **Analogies:** similar to (2), it's like (2), just like (1)
> **File Paths:** pom.xml (1), application.yaml (1)
> **UI Navigation:** go to (2)

#### Non-blocking Spring Data reactive repositories
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=0)** - [Instructor] Spring Boot provides two web-to-data technology stacks.
>
> **[0:05](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=5)** The original Servlet stack provides synchronous blocking I/O with one thread per API request.
>
> **[0:13](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=13)** The other is the Reactive stack, which provides non-blocking I/O that leverages multi-core processors to handle several concurrent connections for multi-threading.
>
> **[0:24](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=24)** The repositories we've used thus far are blocking and are part of the Servlet stack as well as Spring Data Rest and Spring MVC.
>
> **[0:34](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=34)** If you'd like to learn more about the Servlet stack, I encourage you to watch my course: Creating Your First Spring Boot Microservice.
>
> **[0:42](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=42)** Reactive repositories only work with underlying data stores that support non-blocking I/Os such as Mongo, Cassandra, Redis, Couchbase, and R2DBC.
>
> **[0:54](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=54)** In this video we'll see how our MongoDB Spring Boot application has been converted into a Spring Book microservice that implements a Reactive stack with restful API endpoints.
>
> **[1:08](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=68)** So this is our MongoDB Spring Boot application but now it is a microservice with a restful API because in our pom.xml we have a new dependency spring-boot-starter-webflux at line 22.
>
> **[1:24](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=84)** And now we have spring-boot-starter-data-mongodb-reactive on line 27, which replaces spring-boot-starter-data-mongodb.
>
> **[1:37](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=97)** Our repos now extend ReactiveCrudRepository.
>
> **[1:42](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=102)** Let's look at the provided methods.
>
> **[1:50](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=110)** And we see the typical CRUD repository methods except instead of returning optionals or lists, we see mono or flux.
>
> **[2:01](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=121)** A mono is an asynchronous publisher of zero or one result.
>
> **[2:06](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=126)** A flux is a publisher of an asynchronous sequence of zero or any number of results.
>
> **[2:12](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=132)** Our query methods must also return a flux or mono otherwise a runtime error is thrown at invocation.
>
> **[2:20](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=140)** Now let's see our university application class.
>
> **[2:25](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=145)** There is an @RestController annotation to tell Spring WebFlux that this class will expose restful endpoints.
>
> **[2:33](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=153)** The application creates staff members and departments at startup by implementing the command line runner interface and auto wiring StaffRepo and DepartmentRepo.
>
> **[2:46](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=166)** Now in our run method, we look and we see the typical save of our staff and our departments.
>
> **[2:54](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=174)** But simply invoking the repository method does not automatically interact with the data source because they are asynchronous and return immediately.
>
> **[3:05](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=185)** To interact with the data source within the same thread each publisher, mono or flux, requires a subscriber.
>
> **[3:13](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=193)** It is the subscriber that actually triggers the interaction.
>
> **[3:17](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=197)** Invoking block on a mono or subscribe on the flux forces the data source interaction within the same thread.
>
> **[3:26](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=206)** Invoking block on a mono will actually then return the value of that subscription.
>
> **[3:34](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=214)** WebFlux in the web tier automatically subscribes to the mono and flux providers, and it's there where reactive programming really comes alive.
>
> **[3:47](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=227)** So what endpoints does it expose?
>
> **[3:50](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=230)** This class exposes restful endpoints to look up all staff members, all departments, staff by ID, department by ID and find staff member by last name.
>
> **[4:03](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=243)** Let's run this and invoke a couple of those endpoints.
>
> **[4:07](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=247)** The microservice will remain running as it waits to receive requests.
>
> **[4:12](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=252)** So for this class, let's run it.
>
> **[4:19](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=259)** And as it's starting up we see on this line, on line 42, we want to print out the staff members and the first time around it's print zero because we did not do a block on those yet.
>
> **[4:35](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=275)** There's no subscription to that promise to look up but we want to actually have that happen within this thread.
>
> **[4:42](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=282)** So after blocking on those monos we see that the staff count is two.
>
> **[4:47](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=287)** On a terminal window, we're going to invoke these APIs with cURL.
>
> **[4:55](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=295)** So curl on localhost:8080, and I'm going to say staff which will look up all staff, and you know, let's pipe that to pretty print.
>
> **[5:06](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=306)** It's a little easier to read.
>
> **[5:10](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=310)** So those are our staff.
>
> **[5:11](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=311)** Make it a little bigger so you can see.
>
> **[5:15](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=315)** And let's look up a staff by ID.
>
> **[5:28](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=328)** So that's the John Martin staff ID.
>
> **[5:31](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=331)** Now let's look up department, all departments.
>
> **[5:38](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=338)** And there's our departments.
>
> **[5:40](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=340)** Let's look up departments by ID.
>
> **[5:45](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=345)** Find us social sciences.
>
> **[5:49](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=349)** And there's social sciences.
>
> **[5:51](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=351)** And finally, let's look up staff search member Jones.
>
> **[6:02](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=362)** And we find Jones there.
>
> **[6:05](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=365)** So let's stop the application.
>
> **[6:09](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=369)** So which stack should you choose?
>
> **[6:11](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=371)** If you have an existing MVC application that is already performance, switching to Reactive is not critical.
>
> **[6:18](https://www.linkedin.com/learning/spring-data-2/non-blocking-spring-data-reactive-repositories?u=76281980&t=378)** However, Spring does encourage the Reactive stack for new projects that use an asynchronous data store.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), implements (1), class. (1), interface (1), class, (1)
> **CLI Commands:** find (3), curl (2), mongo (1), make (1)
> **Env Vars:** api (3), mvc (2), r2dbc (1), crud (1)
> **Definitions:** is a  (2), is an  (1)
> **Tools:** command line (1), terminal (1)
> **File Paths:** pom.xml (1)
> **Code Identifiers:** curl (1)
> **URLs:** [localhost:8080](https://localhost:8080) (1)

#### More data source support and features
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=0)** - [Instructor] Let's wrap things up by looking at the Spring Data website and seeing the Spring Data modules under this project.
>
> **[0:08](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=8)** We already did a deep dive into Spring Data JPA to learn about repository abstraction and property expression queries found in Spring Data Commons, as well as methods specific to the data source.
>
> **[0:22](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=22)** We leveraged that knowledge and applied it to the NoSQL Mong DB data source.
>
> **[0:28](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=28)** We saw how the repository abstraction was applied generically, as well as how Mongo specific features are addressed.
>
> **[0:37](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=37)** Spring Data REST is a module for exposing Spring Data repositories as restful HTTP endpoints simply by adding a dependency but allowed application specific configuration.
>
> **[0:50](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=50)** If you have a relational database where the domains are loosely coupled you may want to look at Spring Data JDBC.
>
> **[0:58](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=58)** It provides a repository interface without JPA relationships so it's more lightweight than Spring Data JPA and more strictly follows the concepts of domain driven design.
>
> **[1:10](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=70)** Almost any data source around has a Spring Data repository extraction.
>
> **[1:16](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=76)** Redis, Couchbase, Cassandra, LDAP, Elasticsearch, Neo4j, Geode, GemFire.
>
> **[1:25](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=85)** Now that you understand that Spring Data commons with JPA and Mongo, learning about these other modules is an easier lift.
>
> **[1:33](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=93)** The non-blocking NoSQL data sources are available in the classic servlet stack or reactive stack.
>
> **[1:40](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=100)** And did you know that some relational data stores now support non-blocking IO?
>
> **[1:45](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=105)** That's where Spring Data R2DBC shines.
>
> **[1:49](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=109)** R2DBC stands for Reactive Relational Database Connectivity and it plays just as well with reactive stack as NoSQL data sources.
>
> **[1:59](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=119)** Be aware that not all relational databases support this approach and it does not provide typical features like lazy loading or caching like JPA.
>
> **[2:09](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=129)** This page also informs you of projects that are on their way out.
>
> **[2:13](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=133)** Spring Data recommends that no new projects should be started with Spring Data Solar.
>
> **[2:19](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=139)** It recommends Spring Data Elasticsearch instead.
>
> **[2:23](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=143)** Spring Data GemFire, instead use Spring Data for Apache Geode.
>
> **[2:28](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=148)** Spring Data, JDBC Ext is being moved into the attic.
>
> **[2:33](https://www.linkedin.com/learning/spring-data-2/more-data-source-support-and-features?u=76281980&t=153)** And as Hadoop is used less and less, Spring Data updates for that will no longer be available.

> [!info]- Semantic Content
>
> **Env Vars:** jpa (5), jdbc (2), r2dbc (2), rest (1), http (1)
> **CLI Commands:** mongo (2), apache (1)
> **Code Keywords:** let (1), module (1), interface (1)
> **Definitions:** is a  (1), is an  (1), stands for (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps with Spring Data
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-data-2/next-steps-with-spring-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-data-2/next-steps-with-spring-data?u=76281980&t=0)** - [Mary] So what's next?
>
> **[0:02](https://www.linkedin.com/learning/spring-data-2/next-steps-with-spring-data?u=76281980&t=2)** After finishing this course I would encourage you to apply spring data repositories into a fully running application.
>
> **[0:09](https://www.linkedin.com/learning/spring-data-2/next-steps-with-spring-data?u=76281980&t=9)** We do just that in my course, "Creating Your First Spring Boot Microservice".
>
> **[0:13](https://www.linkedin.com/learning/spring-data-2/next-steps-with-spring-data?u=76281980&t=13)** Step by step we construct a Java application that leverages several spring technologies including Boot, Spring Data JPA, Spring Data Rest, and Spring Web NBC.
>
> **[0:24](https://www.linkedin.com/learning/spring-data-2/next-steps-with-spring-data?u=76281980&t=24)** Understanding microservice containerization is critical to modern software development.
>
> **[0:30](https://www.linkedin.com/learning/spring-data-2/next-steps-with-spring-data?u=76281980&t=30)** If this has evaded you, don't worry.
>
> **[0:33](https://www.linkedin.com/learning/spring-data-2/next-steps-with-spring-data?u=76281980&t=33)** I have a course to help you out.
>
> **[0:35](https://www.linkedin.com/learning/spring-data-2/next-steps-with-spring-data?u=76281980&t=35)** "[[Introduction to Docker for Java Developers]]" hits that sweet spot of what you need to know as a developer without overwhelming you with the extraneous details.
>
> **[0:46](https://www.linkedin.com/learning/spring-data-2/next-steps-with-spring-data?u=76281980&t=46)** If you enjoyed this course, you can find all my LinkedIn learning courses on my website, maryellenteaches.me.
>
> **[0:53](https://www.linkedin.com/learning/spring-data-2/next-steps-with-spring-data?u=76281980&t=53)** And my Github organization is Mary Ellen teaches.
>
> **[0:57](https://www.linkedin.com/learning/spring-data-2/next-steps-with-spring-data?u=76281980&t=57)** I love learner feedback.
>
> **[0:59](https://www.linkedin.com/learning/spring-data-2/next-steps-with-spring-data?u=76281980&t=59)** Let me know what you think here in the Q and A and a and follow me on LinkedIn at [linkedin.com/in/mebowman](https://linkedin.com/in/mebowman).
>
> **[1:09](https://www.linkedin.com/learning/spring-data-2/next-steps-with-spring-data?u=76281980&t=69)** Thanks for watching.
>
> **[1:10](https://www.linkedin.com/learning/spring-data-2/next-steps-with-spring-data?u=76281980&t=70)** Time is precious.
>
> **[1:11](https://www.linkedin.com/learning/spring-data-2/next-steps-with-spring-data?u=76281980&t=71)** Game changing technologies helps spend it wisely.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (1), find (1)
> **Env Vars:** jpa (1), nbc (1)
> **Code Keywords:** let (1)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Tools:** github (1)
> **Speakers:** - [mary] (1)


## Path Context

### In [[Getting Started In Spring Development]]
← [[Creating Spring Boot Microservices]] | **3 of 5** | [[Spring 6- Spring Security]] →

## Appears In

- [[Getting Started In Spring Development]]

---

[↑ Back to top](#)