---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-jdbc-24697410
url: "https://www.linkedin.com/learning/learning-jdbc-24697410"
duration_minutes: 123
duration: 2h 3m
level: Beginner
updated: 10/25/2024
learners: 38941
skills:
  - Java Database Connectivity (JDBC)
exercise_files: true
github: "https://github.com/LinkedInLearning/learning-jdbc-2725172"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQELGCBArDCkxg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1728506593128?e=2147483647&amp;v=beta&amp;t=QZavY1s7ezWzBCxyr4UqF-uajftjI1IbfHDDZFzLg-g"
linkedin_topic: Data Science
learning_paths:
  - '[Getting Started as a Java Developer](../../Paths/Data%20Science/Learning%20Paths/Getting%20Started%20as%20a%20Java%20Developer.md)'
  - '[Java Foundations Professional Certificate by JetBrains](../../Paths/Data%20Science/Professional%20Certificates/Java%20Foundations%20Professional%20Certificate%20by%20JetBrains.md)'
prev_courses:
  - '[Learning Spring 6 With Spring Boot](../Software%20Development/Learning%20Spring%206%20With%20Spring%20Boot.md)'
  - '[Java- Data Structures](Java-%20Data%20Structures.md)'
next_courses:
  - '[Learning Java Collections](Learning%20Java%20Collections.md)'
  - null
path_nav: '[{"path":"Getting Started as a Java Developer","position":4,"total":10,"prev":"Learning Spring 6 With Spring Boot","next":"Learning Java Collections"},{"path":"Java Foundations Professional Certificate by JetBrains","position":5,"total":5,"prev":"Java- Data Structures","next":null}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/web-development
  - skill/java-database-connectivity-jdbc
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Learning%20JDBC.md)

![Learning JDBC](https://media.licdn.com/dms/image/v2/D560DAQELGCBArDCkxg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1728506593128?e=2147483647&amp;v=beta&amp;t=QZavY1s7ezWzBCxyr4UqF-uajftjI1IbfHDDZFzLg-g)

# Learning JDBC

> Whether developers want to build mobile device apps for Android, web-based, or desktop-based applications with the core Java SDK from Oracle, they must contend with the fact that many dynamic applications need to integrate data from a relational database. In this course, Frank Moley helps you get up to speed with the Java Database Connectivity (JDBC) API, showing how to use it to read and manage d

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jdbc-24697410) | 2h 3m | Beginner | 39K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Get going with data access in Java](#get-going-with-data-access-in-java)
  - [What you need to know](#what-you-need-to-know)
- [**1. Introducing Java Data Access**](#1-introducing-java-data-access) (7 videos)
  - [Relational database management systems](#relational-database-management-systems)
  - [Java Database Connectivity](#java-database-connectivity)
  - [Terminology of JDBC](#terminology-of-jdbc)
  - [Introduction to PostgreSQL](#introduction-to-postgresql)
  - [Setting up Postgresql](#setting-up-postgresql)
  - [Creating the project](#creating-the-project)
  - [Create, read, update, and delete (CRUD)](#create-read-update-and-delete-crud)
- [**2. Data Access Basics**](#2-data-access-basics) (11 videos)
  - [Using a driver](#using-a-driver)
  - [The Data Access Object (DAO) pattern](#the-data-access-object-dao-pattern)
  - [Understanding result sets](#understanding-result-sets)
  - [Reading all data](#reading-all-data)
  - [Reading instance data](#reading-instance-data)
  - [Creating data](#creating-data)
  - [Updating data](#updating-data)
  - [Deleting data](#deleting-data)
  - [The Repository pattern](#the-repository-pattern)
  - [Challenge: Implement a DAO](#challenge-implement-a-dao)
  - [Solution: Implement a DAO](#solution-implement-a-dao)
- [**3. Advanced Data Access**](#3-advanced-data-access) (6 videos)
  - [Using stored procedures](#using-stored-procedures)
  - [Ordering and limiting results](#ordering-and-limiting-results)
  - [Paging](#paging)
  - [Connection pooling and management](#connection-pooling-and-management)
  - [Understanding transactions](#understanding-transactions)
  - [Exception handling in JDBC](#exception-handling-in-jdbc)
- [**Conclusion**](#conclusion) (2 videos)
  - [JPA and ORM](#jpa-and-orm)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Get going with data access in Java](https://www.linkedin.com/learning/learning-jdbc-24697410/get-going-with-data-access-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/get-going-with-data-access-in-java?u=76281980&t=0)** - [Frank] Most applications need access to data. In the [Java](../../Skills/Software%20Development/Java.md) world, the starting place is [Java Database Connectivity](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md), or [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md). Effectively using JDBC is a matter of focusing on both the use of well-structured [SQL](../../Skills/Data%20Science/SQL.md) and consistent use of the JDBC libraries. Hi, my name is Frank Moley. I'm an architect, developer, teacher, and perpetual student focused on large scale distributed systems. Join me as we focus on effective use of JDBC to access data for our application in "Learning JDBC."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (5), [Java](../../Skills/Software%20Development/Java.md) (1), [Java database connectivity](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** jdbc (5), sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [frank] (1)

#### [What you need to know](https://www.linkedin.com/learning/learning-jdbc-24697410/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/what-you-need-to-know?u=76281980&t=0)** - [Instructor] There are a few things that you need to know to be successful in this course. [Java Database Connectivity](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md), or [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md), is a [Java](../../Skills/Software%20Development/Java.md) technology. As such, you will need to have basic Java knowledge. Now, we will be using Java 21 for this course, but we won't be using any of the newer language features. So as long as you have a solid understanding of basic Java, you should be fine. We also will be leveraging Maven a bit, so some basic Maven knowledge will help. If you need to brush up on Maven, check out my course here on the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library, "Introducing Maven". This course uses [GitHub](../../Skills/Software%20Development/GitHub.md) Codsepaces to simplify the initial setup for you. I'm going to walk through how I use GitHub [Codespaces](../../Skills/Software%20Development/Codespaces.md) for this course. Now we're going to start here in GitHub and this is the course documentation and I'm going to go over here to the Code button and I'm going to create a codespace. Now, I'm going to do this on my branch, but for now we'll do this on Main. Now, the first time you start up this environment, it definitely will take longer than subsequent times. The reason for that is it needs to set up the virtual machine with the Docker images. Now, what you're actually running is a development environment in a Docker image, and attached to that, using Docker [Compose](../../Glossary/Framework/Jetpack%20Compose.md), is a database that is running and it's a traditional [Postgres](../../Skills/Software%20Development/PostgreSQL.md) database running in a containerized environment with a local file system.
>
> **[1:32](https://www.linkedin.com/learning/learning-jdbc-24697410/what-you-need-to-know?u=76281980&t=92)** That way, changes to the file system will actually withstand a restart. At this point, everything that we need to do is going to be done in VS code in the browser, and we'll be using the embedded terminal to do operations. Now, this is how we're going to progress throughout this entire course. If you've never used GitHub Codespaces, I encourage you to play around a little bit at this point and see what you can do. You have a terminal here. You can look at the file system, you can take a look at the dev container, specifically the Docker compose and what we're running. If there's other extensions that you find valuable than the ones that I have provided for you by default, now's the time to do that as well. Play around, see what you come up with, and when we come back, we'll jump into the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (4), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (2), [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (2), [Java database connectivity](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (1)
> **Tools:** github (4), terminal (2), vs code (1)
> **CLI Commands:** docker (4), find (1)
> **Definitions:** is a  (3)
> **Prerequisites:** setup (1), set up (1)
> **Env Vars:** jdbc (1)
> **Versions:** java 21 (1)
> **Speakers:** - [instructor] (1)


### 1. Introducing Java Data Access

[↑ Back to Table of Contents](#table-of-contents)

#### [Relational database management systems](https://www.linkedin.com/learning/learning-jdbc-24697410/relational-database-management-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/relational-database-management-systems?u=76281980&t=0)** - [Instructor] [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) is a technology for interacting with [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). As such, an introduction to relational [Database Management](../../Topics/Database%20Management.md) systems, or RDBMS, and relational theory is warranted in this course. Prior to relational databases, flat file systems were how data was traditionally stored. Edgar Codd, while working at IBM at the San Jose research facility, wrote a paper called "A Relational Model of Data for Large Shared Data Banks." IBM would eventually begin developing System R at that same facility. Larry Ellison of [Software Development](../../Topics/Software%20Development.md) Laboratories, soon to be Relational Software Incorporated, mimicked most of the RDBMS, except for, of course, the error codes from System R and created a product called Oracle Database. They were the first to market. IBM didn't release its commercial version DB2 for several more years. Now, let's talk a little bit about this famous paper and the changes that came from it. As stated, Codd worked at IBM when he wrote his paper, "A Relational Model of Data for Large Shared Data Banks." Out of this paper came the so-called Codd's 12 Rules. In reality, there's actually 13 rules. No RDBMS today implements all of these rules. Part of the paper yielded the concept
>
> **[1:36](https://www.linkedin.com/learning/learning-jdbc-24697410/relational-database-management-systems?u=76281980&t=96)** of normalized [Databases](../../Skills/Software%20Development/Databases.md) and normal form. BCNF, or Boyce-Codd Normal Form, was a result of work after the paper on a stricter version of Third Normal Form. Codd's Theorem of dealing with the equality of relational algebra and relational [Calculus](../../Skills/Data%20Science/Calculus.md) is named after him. I would be remiss if I didn't at least mention [NoSQL](../../Skills/Software%20Development/NoSQL.md) databases. In the market today, especially in [Cloud Computing](../../Topics/Cloud%20Computing.md), relational models have significant issues. NoSQL has risen in many of these markets where globally distributed database is key. Atomic operations can become difficult, if not impossible, when dealing with large-scale distributed systems. I would argue, however, that both of these database types have their place, and the market would agree. The fact is, however, that there are more RDBMS systems in the top 10 every month, at least up to the time of recording. There are, however, many signs of change in that top 10 list and have been for a while. This course will focus on RDBMS only, but know that both are valid, useful, and important to today's developers. The key in my opinion to database selections is to know your use cases. RDBMS excels at data that has relations inherent to its storage.
>
> **[3:13](https://www.linkedin.com/learning/learning-jdbc-24697410/relational-database-management-systems?u=76281980&t=193)** Makes sense we would store relational data in a relational database management system. If you need to have atomic transactions, especially large-scale atomic transactions, those really require RDBMS or some sort of a transaction manager that can span a NoSQL database. No [SQL](../../Skills/Data%20Science/SQL.md) databases, however, [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) in distributed systems because many of them were designed from the ground up to work in a distributed fashion, whereas RDBMS was not the case. When RDBMS databases were first created, it was a single server, and that's no longer the case. There are many plugins and many other behaviors you can add, however, to RDBMS systems to give them distributed-like characteristics. But in reality, if you are going to a large-scale distributed system, NoSQL is your usual best bet, with a few exceptions. And, of course, there's always devil in the details.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (4), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (4), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (2), [Database Management](../../Topics/Database%20Management.md) (2), [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (1)
> **Env Vars:** rdbms (10), ibm (4), jdbc (1), db2 (1), bcnf (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [Java Database Connectivity](https://www.linkedin.com/learning/learning-jdbc-24697410/java-database-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/java-database-connectivity?u=76281980&t=0)** - [Instructor] [Java Database Connectivity](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) is a technology within [Java](../../Skills/Software%20Development/Java.md) used to connect to [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). We're going to start with some deep understanding of what [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) is and what it focuses on. As alluded to JDBC stands for Java Database Connectivity. It is an API for client-side access to relational databases. It is specifically relational database focused or RDBMS, but one thing that you will find is many of the [NoSQL](../../Skills/Software%20Development/NoSQL.md) providers mimic JDBC in the way that they operate. In fact, we see that in their languages, their query languages, that they look very much like [SQL](../../Skills/Data%20Science/SQL.md) and the drivers work very much the same way as we would see with JDBC. So even though JDBC is focused on RDBMS systems, there are similarities. The latest JDBC spec is defined in JSR 221 and it was last updated in Java 9 to version 4.3. One of the benefits of using JDBC, especially with ANSI standard SQL, is we get universal data access. What this means is we can actually swap out our [Databases](../../Skills/Software%20Development/Databases.md) as we're developing our systems with little to no impact. In fact, this is a technology that I use quite often when I'm doing POC work with [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md), where I'll use an embedded H2 database and then when I deploy,
>
> **[1:33](https://www.linkedin.com/learning/learning-jdbc-24697410/java-database-connectivity?u=76281980&t=93)** it will actually use a [Postgres](../../Skills/Software%20Development/PostgreSQL.md) database because of the way that these are Swappable. As long as you stick with using ANSI standard SQL in your queries, you should not have any issues using JDBC with any underlying database, as long as it too is ANSI standard. The JDBC drivers are available for all of these database technologies and they all focus on allowing the use with JDBC as an API. What all of this means is, as I alluded to, you can run the same code against two or more different databases if you are using ANSI standard SQL and the databases themselves are ANSI standard compliant. Now, when you are doing a JDBC operation, there is a basic flow that we will see every single time we write an application. We start with mounting the driver and there's a driver manager that we use to connect to our database. We then do that connection with the driver and get a handle to a connection that can be shared or pooled, a thing that we will talk about in this course, If you need a transaction, you create that on the connection and each database is a little bit different with how you do it, but nonetheless, you will create a transaction. You then execute your SQL. Now, there are many different ways to do this,
>
> **[3:06](https://www.linkedin.com/learning/learning-jdbc-24697410/java-database-connectivity?u=76281980&t=186)** and we're going to talk about a few of them in this course, but you can create your SQL statements on the fly. You can use stored procedures. You can build with bind variables, dynamic queries as you're executing them. Again, we will show all of these to you, but the whole point is, is we now execute some SQL against the database. Then if we are in a transaction, we will either commit that transaction or roll it back, and then at the end of the application lifecycle, or when we're done with the database connection, we close that connection. Now, one thing that is very interesting with the way JDBC has implemented is the exception handling. All JDBC operations throw a generic SQL exception. It is a named exception, so you have to catch it or throw it in your method signature. Now, they have standardized SQL state codes and those are available from the exception itself. The error code is also available, but it is usually vendor specific in most cases. And I have a very consistent pattern that I use every single time that I need to output a message based on these errors rising in my application. And if you've worked on any of my spring courses, you'll know how strict I am about how I manage these exceptions out of the data layer because they are very critical to the applications function in a real life system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (13), [SQL](../../Skills/Data%20Science/SQL.md) (9), [Databases](../../Skills/Software%20Development/Databases.md) (3), [Java database connectivity](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (2), [Java](../../Skills/Software%20Development/Java.md) (2)
> **Env Vars:** jdbc (13), sql (9), ansi (5), api (2), rdbms (2)
> **Definitions:** is a  (5), stands for (1), is an  (1)
> **Versions:** java 9 (1), version 4 (1)
> **CLI Commands:** find (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)

#### [Terminology of JDBC](https://www.linkedin.com/learning/learning-jdbc-24697410/terminology-of-jdbc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/terminology-of-jdbc?u=76281980&t=0)** - [Instructor] Let's spend a little bit of time and get up to speed with the terminology of [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md). So when I'm talking about things in the course, you understand specifically what I'm saying. The first thing I want to talk about is the connection and how we manage that. The DriverManager is a class that interacts with the driver for creating connections. Now, modern implementations also support the concept of DataSource as it offers more functionality for enterprise applications. We won't be using DataSource in this course because quite honestly, it's not worth it for what we're doing. But if you ever take one of my spring courses, for instance, you'll see I use DataSource exclusively because I'm not actually managing the connection the [Spring Framework](../../Skills/Software%20Development/Spring%20Framework.md) is. And this is usually when data source comes into play, when you're allowing the container to manage the connections for you. Speaking of connection, you may be asking, what is it? Well, it's the class that the developer interacts with, that manages the actual communications between the client and the server. It's actually a socket connection on a specific port so that the data that you send from the client to the server and then the data it sends back to you is readable within the stream. Now, what do we do on these connections and we perform executions? The Statement is the representation of [SQL](../../Skills/Data%20Science/SQL.md) to be executed against the database. Many times we talk about writing a SQL Statement. Well, in JDBC, the Statement
>
> **[1:33](https://www.linkedin.com/learning/learning-jdbc-24697410/terminology-of-jdbc?u=76281980&t=93)** is where we store the SQL statement to be executed against that database. The ResultSet is the response from the SQL query, and it comes back to us in a very logical tabular form. Now, I say logical because it actually comes back as a stream but the way that you interact with it is the way you would expect to interact with the table, at least from an English speaking world. We read left to right, top to bottom, and that's very much how we are going to interact with the ResultSet. Now, there's also the concept of a PreparedStatement, and this is an extension of Statement itself, and it's used for pre-compiled statements. Many times. These are things that have inputs, and we pass those inputs via bind variables. This allows our code to not be susceptible to SQL injection if used properly, because you should never concatenate a SQL statement with inputs ever. Period, end of story. Now though, we're not going to use a CallableStatement. It is an extension of the PreparedStatement, and you may see it in examples or an existing code basis, so you at least need to know that it exists, but we have no use for its functionality in this course. Now, when you are executing against a database, you are executing to get a commit transactions. What does that mean? Well, for starters, we need to talk about the concept of auto-commit.
>
> **[3:07](https://www.linkedin.com/learning/learning-jdbc-24697410/terminology-of-jdbc?u=76281980&t=187)** Now, auto-commit is a function of a database driver where each statement is immediately readable by all processes once executed in the RDBMS. What does that mean? That means that there actually is a default transaction that commits immediately. This means everything can read the data. So there is no concept of doing things in a transaction block. A transaction, however, is a series of statements that must be executed completely or not at all before any other process can read them. Usually when we are writing data to a database, we're writing more than one topple. As such, we need to do it transactionally where we can write 5, 6, 10, 30 tuples in one complete block, and if anything fails, they all fail. And this is the concept of atomic transactions. Now, if we experience any kind of error, we can execute or rollback on the transaction. And the rollback is a mechanism by which all of the statements of a transaction are removed from the database such that it appears to all current and future processes like it never happened. It's like snapping your fingers and none of what you just did ever occurred, and no one knows you did it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (6), [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (2), [Spring Framework](../../Skills/Software%20Development/Spring%20Framework.md) (1)
> **Env Vars:** sql (6), jdbc (2), rdbms (1)
> **Definitions:** is a  (5), is an  (2), means that (1)
> **Analogies:** for instance (1), it's like (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to PostgreSQL](https://www.linkedin.com/learning/learning-jdbc-24697410/introduction-to-postgresql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/introduction-to-postgresql?u=76281980&t=0)** - [Instructor] Now for our last introductory video, and this is where we're going to talk about the database that we're going to be using for this course, which is [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md). So what is PostgreSQL? Well, first and foremost, it's an object-relational [Database Management](../../Topics/Database%20Management.md) system that extends a traditional RDBMS to the object-oriented space. It is free and [Open-Source Software](../../Skills/Cybersecurity/Open-Source%20Software.md). It's part of the reason I kind of love it is because it is an open source database with a lot of maintainers that is highly effective to be used in production systems. It's started at the University of California Berkeley. It is a fully ACID compliant and transactional database, which is very important when you are dealing with production systems. Now let's talk about a few of the other features Outside of the base behavior of a database. You do get materialized and updatable views with PostgreSQL. You can, as with many other [Databases](../../Skills/Software%20Development/Databases.md), execute triggers. Triggers are a powerful mechanism, such that when a topple is updated, it can fire a process. You also have the concept of functions and stored procedures, and we're going to play with those a little bit in this course. So you get an experience of using them. And this is very, very important. PostgreSQL runs on every major OS and in Docker if you don't have support
>
> **[1:35](https://www.linkedin.com/learning/learning-jdbc-24697410/introduction-to-postgresql?u=76281980&t=95)** for your specific version of an OS, but you do have support for Docker. So why would we use this database? First of all, it's very easy to run locally. In fact, every single one of my development machines, as well as my personal machines, has PostgreSQL running in a [Kubernetes](../../Skills/DevOps/Kubernetes.md) cluster. That's just how I do my work. It supports a very large section of ANSI-standard [SQL](../../Skills/Data%20Science/SQL.md). In fact, it is fully ANSI-standard compliant, but it does not support every single optional flavor of ANSI standard. It does support stored procedures. This is important, especially for people that have very intensive workloads that deal primarily with stored procedures. Most modern development does not deal with stored procedures, but knowing that they're there is a powerful proposition and it has a solid security model. Now, we're not going to get into database security because this is not a database course, but if you are looking for a production worthy system, part of the reason PostgreSQL checks the boxes is because it does have a very solid security model, as we would expect with a commercial database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) (6), [Database Management](../../Topics/Database%20Management.md) (1), [Open-Source Software](../../Skills/Cybersecurity/Open-Source%20Software.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1)
> **Env Vars:** ansi (3), rdbms (1), acid (1), sql (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** docker (2)
> **Speakers:** - [instructor] (1)

#### [Setting up Postgresql](https://www.linkedin.com/learning/learning-jdbc-24697410/setting-up-postgresql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/setting-up-postgresql?u=76281980&t=0)** - [Instructor] So now it's time to actually do some work. And we're going to start by getting our [Postgres](../../Skills/Software%20Development/PostgreSQL.md) database up and running in the appropriate fashion. I want you to jump over to your [Codespaces](../../Skills/Software%20Development/Codespaces.md) environment and the first thing that we're going to do is we're going to open up this dat folder. And you'll see that there's two files here. There's a data.[SQL](../../Skills/Data%20Science/SQL.md) file that creates a schema, several tables, populates that with a bunch of data and then adds a function to our database. I also have provided a script and that script we are going to use to actually load our database. So let's go ahead and do that. In the terminal window go to dat load-db.sh and execute that script. Now it has actually populated the database, it spun through there for us to see. But I want to actually go in and check that out. I provided you as you can see here from lines six through nine several environment variables that you can use to connect to your database. You also have the client available. So we're going to go ahead and use that client by doing a psql dash uppercase u and we're going to use the environment variable postgres underscore user. And then we're going to go to the dash d for database and we're going to go to the postgres db environment variable. And the we will connect on localhost. Now you will see I'm actually connected to the database
>
> **[1:34](https://www.linkedin.com/learning/learning-jdbc-24697410/setting-up-postgresql?u=76281980&t=94)** and it's called localdb. And I can show you that that's true by doing a select star from wisdom.services semicolon. And you'll see that I actually got data back. Now throughout the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this course we can use the psql client in our terminal to actually look at the state of the data at any point in time. We probably won't need to do it often, but it is nice to know how to do it in case you need to. Now while we're here I do want you to take a look at a couple files from devcontainer, specifically the docker-[compose](../../Glossary/Framework/Jetpack%20Compose.md). You will see that we are running our [Java](../../Skills/Software%20Development/Java.md) development container which is where we're actually working in right now and it is connecting to a database in the same docker-compose file and that is a postgres database. What I specifically want you to look at here is line 11 through 14. These are the values that we will need to create a connection to our database from our application when we get there. So I wanted to show you this so you know where it's at so that when I'm using these values later you'll know where I got them from.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (4), [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (2), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** psql (2), docker (2)
> **UI Navigation:** go to (3)
> **File Paths:** data.sql (1), load-db.sh (1)
> **Tools:** terminal (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Creating the project](https://www.linkedin.com/learning/learning-jdbc-24697410/creating-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/creating-the-project?u=76281980&t=0)** - [Instructor] So now that we have our database populated with data, we now need a place to write our code. So let's go ahead and get that set up. I want you to navigate back over to [Codespaces](../../Skills/Software%20Development/Codespaces.md), and go ahead and pop open the terminal. And from within the terminal, we're going to use a Maven command. Now I have Maven installed for you in the environment. We're going to use archetype, generate. We're going to set our group ID equal to, and I'm going to be specific to my domain of com.frankmoley. Choose anything that you would like. And then I'm going to do LIL for [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, I'm going to create an artifact ID of learning [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md). Now we're going to do a dash D archetype artifact ID. It's a little bit of a mouthful. Maven hyphen archetype hyphen quickstart, and then dash D, archetype version. And we're going to use 1.5, and we will set interactive mode through dash D. Interactive mode equal to false. So as that ran, what it did was it actually created a project for us at the root of our container. And that project is in generic Maven structure, where you have a source folder and then within there, a main and a test folder.
>
> **[1:32](https://www.linkedin.com/learning/learning-jdbc-24697410/creating-the-project?u=76281980&t=92)** And within there you have an app.[Java](../../Skills/Software%20Development/Java.md) in main at the base package, which equals our group name. There's also a palm file available. We're not going to have to mess with that, but just know that it is there. There's also a Maven wrapper. Now you can feel free to delete that if you want. We're not going to use it 'cause we have Maven installed. But that is a nice thing if you don't have Maven installed, and you want to use that in order to run Maven commands within the application without putting Maven on your machine. But that's all there is for this video. We now have a working application to write our code to connect to the database, and we're going to get to that in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Env Vars:** lil (1), jdbc (1)
> **Tools:** terminal (2)
> **File Paths:** app.java (1)
> **Versions:** 1.5 (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)

#### [Create, read, update, and delete (CRUD)](https://www.linkedin.com/learning/learning-jdbc-24697410/create-read-update-and-delete-crud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/create-read-update-and-delete-crud?u=76281980&t=0)** - [Instructor] The acronym CRUD is thrown around quite a bit with developers, especially API developers, and it has a very specific meaning, and that meaning really addresses database operations and not APIs, even though I myself am guilty of pushing it forward. So, let's talk a little bit about what CRUD means. So, what do CRUDders CRUD? CRUD is an acronym for the four main functions you do to data in a database. You create, you read, you update, and you delete. This is all part of what is called [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) language, or DML. Now, there is more to DML than just insert, update, select, and delete. But, those CRUD operations are contained within DML. Most [SQL](../../Skills/Data%20Science/SQL.md) statements are an extension of these four main functions, at least the SQL statements that developers most often use. So I want to talk a little bit about some thoughts around what you can do to more effectively write [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) code. You have to learn SQL. SQL is core to being an API developer dealing with [Databases](../../Skills/Software%20Development/Databases.md). And though we're going to write SQL queries in this course, it is a very cursory glance of SQL. So this is very important that you learn SQL in order to be most effective at this role. You also need to spend some time and learn data theory. Now, I'm not saying that you need to get into the weeds
>
> **[1:37](https://www.linkedin.com/learning/learning-jdbc-24697410/create-read-update-and-delete-crud?u=76281980&t=97)** the way CAD did on data theory, but it does give you value in knowing why you do the things that you do. Relational algebra is also in the same boat. You don't need to become an expert in relational algebra, but when you are talking about relations and tuples, as opposed to rows and tables, it actually does convey a very real meaning that you kind of lose when you're talking about rows and tables, because those could be anything, including an [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) spreadsheet. When we're talking about tuples and relations, we're actually talking about relational algebra, and you need to understand indexes. This is very, very important when you are doing [Database Systems](../../Skills/Software%20Development/Database%20Systems.md) because indexes are how you select your data in the quickest time possible. Let's talk a little bit now about the process of creating data. First of all, it's an INSERT statement. Constraints must be honored when you are doing an insert, so you cannot insert a foreign key before the primary key exists, things like that. Isolation levels can impact your results. Now, we're not going to get into isolation levels in this course, but if you really want to understand them, they actually do have meaning in how the data is read and how you are dealing with concurrency within a database. A creation, or an INSERT statement, is not an idempotent operation in most situations. The only time it would be idempotent
>
> **[3:12](https://www.linkedin.com/learning/learning-jdbc-24697410/create-read-update-and-delete-crud?u=76281980&t=192)** is if the data already exists and your INSERT statement is not really doing an insert. It's doing more of an upsert. However, all create operations, by default, are not idempotent because you cannot insert the key more than one time. Now, when we are reading data, all of these come from the form of a SELECT statement. Constraints are not important until join operations occur. And then the only reason constraints really are important is because of indexes. You actually don't need to follow constraints to do joins, it's just really good practice to do so. Isolation levels, once again, can impact consistency of all read operations. And reads, by their nature, are idempotent because they are reads, they're not writes, they're not changing the data in any way, shape, or form. A SELECT for UPDATE is a special case where you are preparing a tuple to be updated by locking it. So when you do your SELECT, you actually do a SELECT for UPDATE that locks the tuple so that no other process can change it. This is really good if you're doing optimistic locking. Now, when it comes to updating data, this is an UPDATE statement. Constraints can cause update anomalies, so it's important to understand those constraints. Again, isolation levels can impact results, and these are idempotent operations by their nature and update what the same values for the tuple
>
> **[4:48](https://www.linkedin.com/learning/learning-jdbc-24697410/create-read-update-and-delete-crud?u=76281980&t=288)** will execute with the same result in the database. And a delete operation. This is a DELETE statement. Constraints can cause errors or update anomalies if not managed properly. Isolation levels, once again, can impact a delete operation. It is idempotent after the first execution. So the first execution will delete the data from the database, but every time you execute after that, you're not going to do anything because the data is already gone. Now it's time to jump into the code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (7), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1), [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **Env Vars:** sql (7), crud (5), select (4), dml (3), insert (3)
> **SQL:** select (4), update (3)
> **Definitions:** is a  (3), is an  (2), is called (1)
> **API Endpoints:** delete  (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)


### 2. Data Access Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Using a driver](https://www.linkedin.com/learning/learning-jdbc-24697410/using-a-driver?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/using-a-driver?u=76281980&t=0)** - [Instructor] The first thing that we need to do is add a driver to our project and configure it for use. So let's go ahead and do that. Okay, so the first thing you need to do is open up your project and go to the pom file. Scroll down to the dependency section and let's add a new dependency. We will start with our group ID and it's org.[PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md). And now an artifact ID of Postgresql. And then we'll go ahead and do our version ID, which is going to be 42.7.4, which is the latest. Allow Maven to do its download. And while it's doing that, let's open up source main [Java](../../Skills/Software%20Development/Java.md). And at our base package, let's create a new package called data.util. Go ahead and open up that data.util folder. And in there let's create a new Java class, and we are going to call this database utils. Now we need to add a few strings to begin with, so private static final string URL, and the URL is going to be equal to [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) colon Postgresql colon slash slash local host colon 5432, which is the default port
>
> **[1:37](https://www.linkedin.com/learning/learning-jdbc-24697410/using-a-driver?u=76281980&t=97)** slash local db, which is the name of our database. Now let's go ahead and do a string of username. Now, of course, in the real world, we would not store a username and password in source code. In fact, all of these would be injected via properties, but for now this is good. So our username is local DB user. And remember, you can get these values from the Docker [compose](../../Glossary/Framework/Jetpack%20Compose.md). Go ahead and set our password. And that is going to be equal to capital P infra assigned SSW zero RD exclamation point.
>
> **[2:26](https://www.linkedin.com/learning/learning-jdbc-24697410/using-a-driver?u=76281980&t=146)** And now we're going to put in a logger called logger. And we're just going to use java.util logger
>
> **[2:44](https://www.linkedin.com/learning/learning-jdbc-24697410/using-a-driver?u=76281980&t=164)** and we'll go ahead and do it by getting the class and then get name on that class. Now we're going to add in a little bit of formatting so that we can output exceptions in the similar way. So we're going to do a private static final string called exception format, and that is going to be equal to exception in percent s message colon percent s comma code colon percent s.
>
> **[3:27](https://www.linkedin.com/learning/learning-jdbc-24697410/using-a-driver?u=76281980&t=207)** That way we can get a common exception message. And the last thing that we're going to do is a private static connection called connection.
>
> **[3:41](https://www.linkedin.com/learning/learning-jdbc-24697410/using-a-driver?u=76281980&t=221)** And that connection needs to be imported from java.[SQL](../../Skills/Data%20Science/SQL.md), which is where JDBC lives. All right, so now let's create a method, so public static connection get connection. And we're going to do this static as a way to maintain our connection throughout our code in a singleton way. In the real world, we would put this into pooling, but for the purpose of this course, it is just fine to do it this way. So if connection equals null, we're going to go ahead and synchronize on the class itself.
>
> **[4:29](https://www.linkedin.com/learning/learning-jdbc-24697410/using-a-driver?u=76281980&t=269)** And then within there we will do one more check of the connection, make sure that it is still indeed null. And if it is null, we will do a try. And within here we'll do a connection equals driver manager dot get connection. We'll pass in the URL, the username and the password.
>
> **[5:05](https://www.linkedin.com/learning/learning-jdbc-24697410/using-a-driver?u=76281980&t=305)** And if that fails, we will go ahead and catch a SQL exception. We'll simply call that E. And on that we will do a handle SQL exception, which does not exist yet, but we will create it here shortly. Database utils dot get connection, e, and then we'll pass in the logger.
>
> **[5:41](https://www.linkedin.com/learning/learning-jdbc-24697410/using-a-driver?u=76281980&t=341)** And at the proper point, we will do a return of the connection.
>
> **[6:00](https://www.linkedin.com/learning/learning-jdbc-24697410/using-a-driver?u=76281980&t=360)** Now that I've spelt that properly, we can go in and create another method. And this one is going to be a public static void method called Handle SQL exception. It will take in a string for a method, a SQL exception, E, and a logger called log. And we will simply do a log warning, string format, pass in the exception format, the method, E dot get message, and e get error code. And then we'll simply throw a new runtime exception at this point. And we'll explain a little bit more about this error handling. But for now, we have everything that we need to connect to our database and to use this, which we will do in subsequent videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (5), [Java](../../Skills/Software%20Development/Java.md) (4), [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) (3), [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (2), [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (1)
> **Env Vars:** sql (4), url (3), jdbc (2), ssw (1)
> **CLI Commands:** docker (1), make (1)
> **UI Navigation:** go to (1), scroll down (1)
> **File Paths:** java.sql (1)
> **Versions:** 42.7.4 (1)
> **Exercise Files:** source code (1)
> **Warnings:** warning (1)

#### [The Data Access Object (DAO) pattern](https://www.linkedin.com/learning/learning-jdbc-24697410/the-data-access-object-dao-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/the-data-access-object-dao-pattern?u=76281980&t=0)** - [Narrator] One of the oldest patterns in dealing with data access is the DAO pattern. To do data access, there are several objects that you need to start with, especially in either the DAO pattern or the repository pattern. The purpose of this is to provide an abstraction between [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) and the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of your code. It can be just abstraction or it can be a true object. It really depends on your use case. I tend to favor the abstraction aspect, but again, that's just a personal preference. Most of the time we will use a DTO with a DAO. The DTOs are nothing more than data transfer objects that are used to store state between the layers. This is very similar to the way that we do a repository pattern. But with DAOs, sometimes people try to combine the DTO and the DAO into a single thing to be more object oriented. That is simply a matter of preference. I do prefer to keep them separate. The whole purpose of doing this is it provides a clear separation of your concerns within your code. By leveraging common DAOs, you get a separation from the data access itself and the rest of your code. This is really a preferred way of doing it. So let's talk a little bit about the DTO itself. Again, it is a data transfer object. It provides a single domain data. Now, the important thing to note here is
>
> **[1:34](https://www.linkedin.com/learning/learning-jdbc-24697410/the-data-access-object-dao-pattern?u=76281980&t=94)** it is not necessarily a single table data. That is a very common mistake that people make. With the repository pattern, single table is applicable. But with the DTO, many times you will have joins across multiple tables to build this domain data. It should fully encapsulate the object and it can contain sub-objects. So, many times you may do a DTO for each table, but you cannot access a sub-object outside of the parent in your DAOs themselves. So it really depends on what your data model looks like and how you're building out the domain. But it should be the output and input of a single DAO. And that is really the important part. So if you are going to merge multiple tables, those will get handled by a single DAO. If you are going to keep tables separate, again, a single DAO. Let's talk a little bit deeper about the DAO itself. Usually you will leverage a common interface. Again, that is a preference. I prefer to do it that way. Many people do, but it is not a requirement. The concrete implementation of the DAO reacts on a single data domain. Again, not necessarily a table, a single data domain. It can and usually does support multiple tables. This is a very common way of doing DAOs for a reason.
>
> **[3:12](https://www.linkedin.com/learning/learning-jdbc-24697410/the-data-access-object-dao-pattern?u=76281980&t=192)** And the encapsulation of complex joins and aggregations are really what you're getting out of this. You no longer have to manage joins in code if you have done repository patterns that make sense. The reality is many times when we're writing data access, the repository pattern makes more sense. Even though we're going to focus on the DAO in this course. Now, sometimes you will use a DAO factory. This, again, is often used with DAOs, and it provides the ability to leverage very common paths for basic CRUD operations. When you are doing the same thing over and over again across an interface DAO, using a factory does make sense. So look for an opportunity to do that if you find yourself doing the same method calls over, and over, and over again. Now, this does tend to lose value when you start introducing custom methods, which is something that I usually do. I usually go ahead and have my base DAO interface. I implement it, but then I add specific methods that access data in specific ways that I need to. By doing this, you are getting an OOP pure implementation of the DAO, even though the DAO may not maintain state. It only provides methods. So when I say "pure," we're looking at it from the factory perspective and the object perspective, not necessarily the state perspective.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (1)
> **Env Vars:** dao (15), dto (5), jdbc (1), crud (1), oop (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is a  (4)
> **Warnings:** common mistake (1)
> **Speakers:** - [narrator] (1)

#### [Understanding result sets](https://www.linkedin.com/learning/learning-jdbc-24697410/understanding-result-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/understanding-result-sets?u=76281980&t=0)** - [Instructor] We're going to start our work with some abstractions, and then we're going to dig into the method of processing a result set. And if you remember, the result set is how we get data back from the database when we execute a query. So the first thing I want you to do is to open up the DAT folder and look at the data.[SQL](../../Skills/Data%20Science/SQL.md) file. This is going to give you all of the table definitions that we are going to be using as we build out our domain objects. So let's go into learning JVC, and source main [Java](../../Skills/Software%20Development/Java.md). In our data package, let's create a new Java package, and this one will be called entity. And in that entity package, we'll create a new Java class called Service.
>
> **[1:02](https://www.linkedin.com/learning/learning-jdbc-24697410/understanding-result-sets?u=76281980&t=62)** Now in here, we need to type in a private UUID from java.util called sevideid, and then a private String name, and a private BigDecimal price. Once we have those in, we'll go ahead and generate our getters and setters, and then we will generate a to string using all of our fields. Now back in the data package, let's create another new Java package, and this one will be called DAO. And in our DAO, we will create a new Java file, and this time, an interface called DAO. Now we're going to templatize this with a T and an ID that extends UUID. Go ahead and import that in.
>
> **[2:21](https://www.linkedin.com/learning/learning-jdbc-24697410/understanding-result-sets?u=76281980&t=141)** Now we're going to go ahead and type in a few methods here, so we will do a list from java.util of type T, getAll,
>
> **[2:32](https://www.linkedin.com/learning/learning-jdbc-24697410/understanding-result-sets?u=76281980&t=152)** and then a T create. We'll pass in a T with an entity. Now we'll use an optional from java.util, T getOne,
>
> **[2:51](https://www.linkedin.com/learning/learning-jdbc-24697410/understanding-result-sets?u=76281980&t=171)** pass in the ID. Then we'll do a T update that again takes in a T entity. Then we'll do a void delete that takes in our ID. So now that our interface is done, let's go ahead and create another new Java file, this time a class, and we will call this ServiceDao,
>
> **[3:27](https://www.linkedin.com/learning/learning-jdbc-24697410/understanding-result-sets?u=76281980&t=207)** and it will implement our DAO. We will pass in our service entity, and then UUID.
>
> **[3:50](https://www.linkedin.com/learning/learning-jdbc-24697410/understanding-result-sets?u=76281980&t=230)** Go ahead and import in from java.util.UUID.
>
> **[3:59](https://www.linkedin.com/learning/learning-jdbc-24697410/understanding-result-sets?u=76281980&t=239)** Okay, so now let's go ahead and override implement methods. Go ahead and select them all, and we're going to leave them alone for now, but we are going to put in a method down here. Go ahead and put in a private method here. Returns a list of service objects called processResultSet, and it will take in a ResultSet called rs, and it will go ahead and throw a SQLException. Need to import in from java.sql the ResultSet. So now let's go ahead and create a list of service called services.
>
> **[5:01](https://www.linkedin.com/learning/learning-jdbc-24697410/understanding-result-sets?u=76281980&t=301)** Import an ArrayList. Now to process your result set, it is simply a loop. So while rs.next, and now you go in and you do your work. So we're going to do a service, go ahead and create our new service, service.setServiceID. Now we need to cast this to a UUID because the method that we get is rs.getObject and we will simply pass in service_id, and then service.setName equal to rs.getString, and this is going to be a string of name, and we're using the column names from our selects, is how we're doing this. Now we can do a service.setPrice, and that is going to be an rs.getBigDecimal, and it is called price on the database. And then we'll do a services.add our service, and then we can simply return our services. Now by doing it in this way, we actually can process all of our result sets in the exact same manner, and we don't have to replicate code. So this is a very common way of doing this when you're setting up a DAO.
>
> **[6:34](https://www.linkedin.com/learning/learning-jdbc-24697410/understanding-result-sets?u=76281980&t=394)** So now let's actually go connect to the database in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (11), [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **Env Vars:** uuid (5), dao (5), dat (1), jvc (1)
> **Code Identifiers:** getall (1), getone (1), processresultset (1), setserviceid (1), getobject (1)
> **File Paths:** data.sql (1), java.sql (1)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Reading all data](https://www.linkedin.com/learning/learning-jdbc-24697410/reading-all-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/reading-all-data?u=76281980&t=0)** - [Instructor] So now that we have everything set up, it's time to read all the data from our services table through our services domain. So go ahead and open up your service DAO. Now I'm going to show you the pattern that I use when I'm writing these things because I think it's very important to keep your [SQL](../../Skills/Data%20Science/SQL.md) separate from the actual code itself as much as possible. So the first thing that we're going to do is we're going to go ahead and create a logger here. (keyboard clacking)
>
> **[0:47](https://www.linkedin.com/learning/learning-jdbc-24697410/reading-all-data?u=76281980&t=47)** So now that our logger is done, let's do a private static final string, get all,
>
> **[0:56](https://www.linkedin.com/learning/learning-jdbc-24697410/reading-all-data?u=76281980&t=56)** and I always use the same patterns when I do these. So I don't only put my SQL statements at the beginning of the class file, I use the same basic structure of my methods to keep these things working in a similar way. So now we're going to do our select. Now it's important here to actually name the fields that you're going to get back. So select service ID name price from Wisdom.Services. Again, use that data file, that data.SQL file if you need to. So now let's scroll down to the get all method. Go ahead and remove this comment so we can implement this. So the first thing I'm going to do is I'm going to create a list of service objects and I will simply set this to a new array list. Now there is a case where I throw this away and it becomes a blind object that never gets used. But by doing this, I know that I will always return something that is not null. And I always do that on a get all method. So now I will create an instance of my connection and I'm going to get that from DatabaseUtils.getConnection,
>
> **[2:19](https://www.linkedin.com/learning/learning-jdbc-24697410/reading-all-data?u=76281980&t=139)** Go ahead and import that in. So now I've got a handle to the connection. So now I'm going to do a try statement and so I don't have to worry about closing and I'm going to wrap that in the try. So statement statement equals connection.CreateStatement
>
> **[2:48](https://www.linkedin.com/learning/learning-jdbc-24697410/reading-all-data?u=76281980&t=168)** and now I'm going to get an instance of a result set equals statement.execute query and I'm going to go ahead and pass a get all. Now I'm going to set my services equal to this.processResultsSet and I'm going to go ahead and pass it in that results set. So all of that work that we did before got us to the point of getting a result set. Now I need to do my catch. So I'm going to catch a SQL exception. So if I get an exception, I will go back to DatabaseUtils.HandleSQLException. We are going to do a service DAO.GetAll and go ahead and pass it in E in the logger. And then we will simply return our services. Now, in order to test this, we're going to go back to the app class that came for free with the archetype and we will delete the hello world. We'll create an instance of our service DAO. We'll call this "Service DAO". (keyboard clacking) Go ahead and import that in. And now we're going to create a list of services
>
> **[4:26](https://www.linkedin.com/learning/learning-jdbc-24697410/reading-all-data?u=76281980&t=266)** called "Services" and we will simply set that equal to the service DAO.GetAll. And now we're going to give ourselves a little bit of an indication of what's going on. So we're going to start with a output with four stars. We'll call this "Services" and then we are going to do another output. Go ahead and do a /N three stars get all three more stars.
>
> **[5:09](https://www.linkedin.com/learning/learning-jdbc-24697410/reading-all-data?u=76281980&t=309)** And now we can do a services.forEach and we will do a system.out::printLine.
>
> **[5:22](https://www.linkedin.com/learning/learning-jdbc-24697410/reading-all-data?u=76281980&t=322)** Let's go ahead and import what is missing and we can now run this. So we're simply going to run the main method and you'll see in our output now we actually have services. We've got a get all, and then we have all of our data elements using the two stream method that we put on the entity. We've now connected to the database running in our Code Spaces environment from our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4)
> **Env Vars:** dao (5), sql (4)
> **Code Identifiers:** getconnection (1), processresultsset (1), foreach (1), printline (1)
> **File Paths:** data.sql (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Reading instance data](https://www.linkedin.com/learning/learning-jdbc-24697410/reading-instance-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/reading-instance-data?u=76281980&t=0)** - [Instructor] So passing a simple [SQL](../../Skills/Data%20Science/SQL.md) statement to the database and processing it is one thing, but what happens when we actually have to provide that query some dynamic data? And that's what we're going to do here when we read a single instance data. So let's jump back into our code. So back in our service DAO class, let's go ahead and start by creating another SQL statement. So private static final, string, get by id. And we're going to set that equal to select service id, name price from wisdom dot services where service ID equals question mark. By passing in that question mark, we're telling the query that we can bind to it. So let's go ahead and jump down to our get one method. And the first thing that we're going to do is we are going to do a try statement. And this is going to be a prepared statement.
>
> **[1:16](https://www.linkedin.com/learning/learning-jdbc-24697410/reading-instance-data?u=76281980&t=76)** And we're going to do this on database utils dot get connection dot prepare statement. And we will send it the get by id. Now I did this in one line as opposed to two as I did earlier just because I wanted to show you that you can do that with that pattern that we've built. So now that we have a statement, let's go ahead and handle our catch. And we're going to do that by copying from above the catch. And then I will simply change this to get one. So it's in our tri block, we're going to do a statement dot set object. We will set one and we will pass it in the id. Now it's important to note that this is not a zero based array. It actually starts with one. So the first question mark is index one instead of zero. It's worth setting, rephrase. It's worth stating that because all too often in [Java](../../Skills/Software%20Development/Java.md) we're on zero based arrays. So now we will do a results set, equals statement dot execute query.
>
> **[2:42](https://www.linkedin.com/learning/learning-jdbc-24697410/reading-instance-data?u=76281980&t=162)** And now we will do a list of a service object, services equals this dot process result sets passing it to RS. Now we're going to do a check here. So if services dot is empty, so if the services are empty, we will return an optional dot empty,
>
> **[3:15](https://www.linkedin.com/learning/learning-jdbc-24697410/reading-instance-data?u=76281980&t=195)** otherwise we will return an optional dot of services dot get zero. So now because we're processing this result set to always return a list, if we have anything, we know it's going to be zero. Because we're passing in by id, we know it's going to be zero. So even though it may seem a little strange, this will always work in this fashion. And in the last case, we'll go ahead and return an optional dot empty if we ever get there, which we should never. So now let's jump back to our app class and we will simply do an optional service called service equals our service DAO dot get one and we will simply go to our services element dot get zero dot get service id. So now we're going to do a system dot out dot println. Go ahead and do a slash n with three stars, get one, go ahead and do three more stars. We'll put another slash N here, and then we will simply pass it our service.get. And now we can go ahead and run our class once again.
>
> **[4:51](https://www.linkedin.com/learning/learning-jdbc-24697410/reading-instance-data?u=76281980&t=291)** So now you'll see we got a single element back and it happened to be the first one that we got before because that's what we went to in the array. But we've now used a prepared statement to bind a variable as well as a standard statement to execute the query for the get all.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Env Vars:** sql (2), dao (2)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Creating data](https://www.linkedin.com/learning/learning-jdbc-24697410/creating-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/creating-data?u=76281980&t=0)** - [Instructor] So now that we've done our Get All and our Get One operation, it's time to do a create and we'll look at how we actually operate within a transaction. Okay, so let's jump back into our service DAO. And as you might imagine, we're going to start by creating our [SQL](../../Skills/Data%20Science/SQL.md) statement. We will call it Create. And it's going to be insert into wisdom.services. Set our fields. So service id, name, price, and we will do values. And we will simply do question mark, question mark, question mark, separated by commas. Now that we've got that done, let's go down to our create method. And this is going to be just a little bit different because we're not going to create our statement in the try block itself. We're going to do it inside the block instead of on the definition of it. So let's get there and I'll show you what I mean. So we're going to create an instance of a service id. Now I'm not allowing the database to do this. I'm actually going to do it in code. And this is how I tend to do this always. You definitely could make an argument for doing it in code. I just don't like to do that 'cause I want to control it. And at the same time, in the real world, I'm actually going to take that and check against the database to make sure that that UUID doesn't exist. The reality is most of the time it won't exist because you have such a large area that you would have to collide.
>
> **[1:34](https://www.linkedin.com/learning/learning-jdbc-24697410/creating-data?u=76281980&t=94)** But I still like to check it, I just think it's good practice. So let's start by creating a try statement here. And I'm going to go ahead and catch at the parent a SQL exception. And I'll explain to you here in a little bit what I mean by the parent. But now in here, the first thing we want to do in our try statement is set auto commit equal to false. Now in [Postgres](../../Skills/Software%20Development/PostgreSQL.md), this is how we set it up to be transactional. So we now we're going to create a rollback segment that we can roll back if we need to. And now I'll go ahead and create my statement. So from the connection I will get a prepared statement and pass it to create. And now we are going to set a string and this will be the second field and it is going to come from the entity itself and we're going to call get name on it. And now we will set our third field, which is a big decimal, and that is going to come from the entity dot get price. So now that we've set all that, we can do our statement dot execute. But we're not done. We've executed it, but we're still in a rollback segment. So we actually need to do a connection dot commit. This will commit that to the database assuming that we've had no errors thrown in this process. And then we can do a statement at close. And we have to do this because we didn't create this statement in the try itself. We did it inside the block.
>
> **[3:06](https://www.linkedin.com/learning/learning-jdbc-24697410/creating-data?u=76281980&t=186)** So we actually have to manage that statement at this point. Now our exception here is going to be a little bit different because the first thing that we need to do is create another try block and we need to execute a connection dot rollback. So if any error is thrown, we need to roll back that connection. Now unfortunately there is a chance for this to throw an exception. And as you might expect, it is a SQL exception that it will throw. So we need to name this differently this time. But at this point we're going to do the same thing that we've done before. So we will call it database utils dot handle SQL exception. We are going to do a service DAO dot create. And I'm going to say that it is in the rollback, that way I know where this exception was handled. But if we don't have a problem with the rollback, we're still in the main exception. So we need to go ahead and tell the system what's going on through a log message. So we will handle a SQL exception here and this time we will do a service DAO dot create. We are no longer in the rollback, so we are good to do that. Now if everything is said and done, we can now create an optional service called service and I'm going to do a get one and pass it to service id. Now there's a couple ways we could have done this differently. This is the way that I choose to do it because I feel like this way I have a lot of control.
>
> **[4:39](https://www.linkedin.com/learning/learning-jdbc-24697410/creating-data?u=76281980&t=279)** I don't have to worry about a returning clause. But there is more than one way to do this. But nonetheless, this is how I choose to do it. So now what I want to do is I want to do an if. So if the service is not present, I will simply return a null. Now I probably should throw an exception because this means we had a problem in the Get or the Create, but I'm going to leave it as is. This works for the purposes of this course. Just know that you probably need to do a little bit better error handling here in the case that you've added something and it's not present. Now we can get rid of the Stubbed in Return null that existed, and we will now go to our app class. So let's start by creating an instance of new service. We will call it new service. And we can set the name and we will simply set the name to FooBarBaz but because we're going to execute this multiple times, I actually want to append it with a current time in milliseconds. Now we can do a setting of the price, create a new big decimal, and I'm going to set the value to 4.35. And now I'm going to get a handle to new service from the service DAO dot create,
>
> **[6:14](https://www.linkedin.com/learning/learning-jdbc-24697410/creating-data?u=76281980&t=374)** passing it to new service. And at this point I will do a system dot out dot print line. We're going to do a slash n, do three stars, call it create, three more stars with a slash n, and we will simply add to it the new service. Now let's run this and see what happens. So you will see we went ahead and created it. We've created it with the name of FooBarBaz and then the current time string. And we're good to go. Create is now functional and operational. If you run this more times than one, you're going to see that it goes ahead and creates a new instance with a new timestamp. But we see the one that we created before in the get all call. So run this a couple times. You'll see it starting to add new services to your system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (5), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1)
> **Env Vars:** sql (5), dao (4), uuid (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Versions:** 4.35 (1)
> **UI Navigation:** go to (1)
> **Analogies:** imagine (1)
> **Best Practices:** good practice (1)

#### [Updating data](https://www.linkedin.com/learning/learning-jdbc-24697410/updating-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/updating-data?u=76281980&t=0)** - [Instructor] So, now that we've done the create, it's time to do the next step, which is an update which will look very similar to the create. Obviously, the [SQL](../../Skills/Data%20Science/SQL.md) statement will be a little bit different. So like we've done before, let's go to the service DAO class and let's create our SQL statement. So private static final string, we'll call it update. And we will do an update wisdom.services set name equal to question mark. Price equal to question mark where service ID equals question mark. And I do like to always do updates with the primary key. So the first thing that I want to do is I'm actually going to go to the create method. And I'm just going to get the catch block copied into my buffer 'cause I'm going to basically use this again. So I'm just going to save myself some scrolling. But let's go down to the update method and we'll go ahead and delete what's there. And just like we did with the create, we're going to get our connection outside the try block.
>
> **[1:20](https://www.linkedin.com/learning/learning-jdbc-24697410/updating-data?u=76281980&t=80)** And then we're going to start our try block. We will set auto commit equal to false. We will then get a handle to our prepared statement
>
> **[1:38](https://www.linkedin.com/learning/learning-jdbc-24697410/updating-data?u=76281980&t=98)** and pass it update. And now we can do our bind variables. So statement.setString. Position one is going to be entity.getName. Statement.setBigDecimal will be in position two and it's going to be entity.getPrice. And then position three for us will be setObject. And that's going to be entity.getServiceId. And now like we did before, we'll do statement.execute. Connection.commit and then we will close our statement.
>
> **[2:28](https://www.linkedin.com/learning/learning-jdbc-24697410/updating-data?u=76281980&t=148)** Now I'm going to go outside the try block and I'm going to paste in the catch block from create. We'll go ahead and change our logging because this time we're doing the update. Now a little bit different than I did on the create. I'm going to simply do a return this.getOne, send in our entity.getServiceId. And then I'm just going to call get on the optional. The reason I can do this is because it's not a create. For the update to have actually executed, it had to be in the database. So getOne is going to return it. Again, I could have done this other ways, I could have used a returning clause, something like that. This is just how I prefer to do it when I'm writing code. So now let's go back to our app class. And we're going to go through and make some changes to our new service. So we'll set the price equal to new BigDecimal and let's send in 13.45. And then we will get handle back to our new service from the serviceDao.update, pass it in our new service. And then once again, we'll do a system out.print line /n, three stars,
>
> **[3:50](https://www.linkedin.com/learning/learning-jdbc-24697410/updating-data?u=76281980&t=230)** UPDATE, three stars, and /n. And then we'll go ahead and add in our new service once again. So now if we run this, you'll see that we've executed it, we've done our create, we set the price to 4.35. We then did our update and the price is not 13.45. So the system is working as we would expect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **Code Identifiers:** getserviceid (2), getone (2), setstring (1), getname (1), setbigdecimal (1)
> **Env Vars:** sql (2), dao (1), update (1)
> **Versions:** 13.45 (2), 4.35 (1)
> **UI Navigation:** go to (2)
> **Analogies:** similar to (1), just like (1)
> **CLI Commands:** make (1)
> **SQL:** update (1)

#### [Deleting data](https://www.linkedin.com/learning/learning-jdbc-24697410/deleting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/deleting-data?u=76281980&t=0)** - [Instructor] So now it's time for our final CRUD operation and that is deleting data. So like we've done so many other times, we will create a private static final string called delete and it'll be delete from wisdom.services where service_id equals the bind variable. Go down to our delete method. We'll once again get a handle to our connection from DatabaseUtils.getConnection. We'll put a try. And like we did before, I'm going to copy the catch block before I get too much further. We'll go ahead and just paste that in now. Change our message to have the proper function in. And now we can execute our method. So connection.setAutoCommit equal to false, PreparedStatement,
>
> **[1:25](https://www.linkedin.com/learning/learning-jdbc-24697410/deleting-data?u=76281980&t=85)** and pass it in delete. And now we'll set our bind variable
>
> **[1:38](https://www.linkedin.com/learning/learning-jdbc-24697410/deleting-data?u=76281980&t=98)** to our id that we're passing in. We will do a statement.execute.
>
> **[1:52](https://www.linkedin.com/learning/learning-jdbc-24697410/deleting-data?u=76281980&t=112)** We will do a connection.commit and a statement.close.
>
> **[2:05](https://www.linkedin.com/learning/learning-jdbc-24697410/deleting-data?u=76281980&t=125)** And that's all there is to this one. So let's go back to our app class. We'll come back down to the bottom here and we will simply call serviceDao.delete, pass it in the newService.getServiceId. And then we will simply do a System.out and we will say that the delete is done.
>
> **[2:41](https://www.linkedin.com/learning/learning-jdbc-24697410/deleting-data?u=76281980&t=161)** And now when we execute this, I actually want to take a look at the data here a little bit. So you'll notice that we created one that starts with 990000. And up above, we've got the several that we have created, but none of them are that value. So let's execute again and you will see that the one that we just previously created does not exist 'cause we've actually deleted it as we expected to. In fact, we have five elements here, which is what we would expect. So we do it one more time and once again, we have five of our FoodBarBaz entities because that's how many we had created before we ran this delete operation. So we now know the delete is completely working as expected and we've implemented our entire CRUD operation set for this database table.

> [!info]- Semantic Content
>
> **Code Identifiers:** service_id (1), getconnection (1), setautocommit (1), servicedao (1), newservice (1)
> **Env Vars:** crud (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [The Repository pattern](https://www.linkedin.com/learning/learning-jdbc-24697410/the-repository-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-jdbc-24697410/the-repository-pattern?u=76281980&t=1)** - [Narrator] Now the DAO pattern is great and all, but the reality is most of us today in a [Microservices](../../Skills/Software%20Development/Microservices.md) world leverage the repository pattern much more. So let's talk a little bit about the repository pattern. One of the distinctions is is that you are actually doing single table access per class. So instead of consolidating classes, you're doing a single table access. Now to date, that's what we've done so far in this course with our services class. But the reality is, is we could have spanned multiple tables into one DAO. That's really the biggest distinction. Instead of doing the joining in the database, you do it in code itself. So as I alluded to, our DAO that we've done so far could actually be a repository in this use case and very much mimics a repository in real life. But as I also alluded to, the joining that we would do in a database, if that existed in this case, we would actually do it in code. And that is a big distinction and it works really well, especially in [NoSQL](../../Skills/Software%20Development/NoSQL.md) environments. Now when we're talking about distribution of our [Databases](../../Skills/Software%20Development/Databases.md), we have to remember that complex joins in a database require it to be a single-instance database. So if we have two tables that we need to join across, they actually have to be in the same database in order for us to do that. But when we're dealing with distributed systems, we don't always have a single database. In fact, with microservices-based architectures, we don't always have a single database,
>
> **[1:35](https://www.linkedin.com/learning/learning-jdbc-24697410/the-repository-pattern?u=76281980&t=95)** and very seldom do we. So the repository pattern allows us to shard our databases into individual databases and still allow us to join, but we're joining in code instead of in the database itself. You can store a piece of database in a separate database to facilitate this distribution. Now we're not going to get a lot into data theory here, but if you shard your data appropriately, you could have, let's say, UK customers living in the UK database and US customers in a US instance of the database, even though it's technically the same table. Repositories give us the ability to handle that and not have to worry about all of the join, that customer, for instance, would be to other tables within the database itself. So there are some constraints that you have to take note of. So if your application is database constrained, meaning you can't shard it into multiple databases, the DAO pattern may be a better pattern for you if your database has sufficient horsepower to do all of the joins, and most of them. You also have to look at how is your application scalable? If it is horizontally scalable, repositories probably are going to be a better fit because you are going to scale those databases across multiple instances. But if it's only vertically scalable, again, you're back into the DAO world, most likely, where you have a single database server. So these are sort of telltale indications of which pattern may be a better fit for you,
>
> **[3:11](https://www.linkedin.com/learning/learning-jdbc-24697410/the-repository-pattern?u=76281980&t=191)** and also how normalized is your data? If you have a highly normalized database, third normal form, Boyce-Codd, something to that effect, DAOs will leverage high indexes and be able to join quickly in a database. The reality is a lot of us have gone away from normalization when we're building production systems because the benefits are not. We don't necessarily have to worry about the space of a database because disk has become very cheap, whereas processing is much more expensive. Probably the biggest reason to make a decision of one or the other is do you need atomic transactions that cross data tables? If you are doing an insert that has to insert to multiple tables, you may find that a DAO pattern is a better fit for you. Otherwise, you have to manage the transactions at a higher level in your code. Now I'm not saying that that's hard to do, it's just something to consider when you're making the decision of, do I go with the DAO or do I go with this repository pattern? If you want a little bit more view of repositories, take a look at any of my Spring courses here on the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library, because Spring inherently uses the repository pattern exclusively, and I've done that in all of those courses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (5), [Microservices](../../Skills/Software%20Development/Microservices.md) (2), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** dao (7)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1), find (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Implement a DAO](https://www.linkedin.com/learning/learning-jdbc-24697410/challenge-implement-a-dao?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/challenge-implement-a-dao?u=76281980&t=0)** - [Instructor] So now it's time for a code challenge in our course, and that's going to be creating a DAO. So let's talk about the instructions that I would like you to follow for this challenge. I want you to implement a DAO for the Customer domain. You're going to go ahead and implement all five methods like we did for the Service domain, so a getAll, getOne, create, update, and delete. And you're going to display the output in a similar way or the same way that we have done so far for the Services table. If you really want to try hard on this, you can also take a look at building a DAO. For the product and the vendor, I would combine those two into one and make it a DAO that serves both of those tables because they are actually intertwined through a foreign key relationship. That being said, the primary focus of this challenge is the Customer domain or the Customer's table within the database. Remember, you can take a look at the data.[SQL](../../Skills/Data%20Science/SQL.md) file to look at the structure of that table and anything else that you may need. I'll be back next with my solution to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** dao (4)
> **Code Identifiers:** getall (1), getone (1)
> **File Paths:** data.sql (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Implement a DAO](https://www.linkedin.com/learning/learning-jdbc-24697410/solution-implement-a-dao?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/solution-implement-a-dao?u=76281980&t=0)** - [Instructor] So now it's time for my solution to this challenge exercise. So I started by creating an entity called Customer. And in this entity, I have the six fields that are represented by the database table, a customer ID of type UUID, and then five strings, first name, last name, email, phone, and address. Now, technically, email is a unique field. So, we can take that into account when we build our DAO if we choose to. So let's go take a look at the customer DAO itself. So we have a GET_ALL, a GET_ONE, a CREATE, an UPDATE, and a DELETE. Again, if you wanted to add a GET_ONE by email address, you could have done that. I chose not to. The operations look very similar to what we did for the service. So we have a create, a delete, a getAll, a getOne, an update, and then the processResultsSet like we did before. So now if you go into your app, I've added into this all of the data for customers. So if I run this, and I expand my window here a little bit, you'll see that we executed the GET_ALL, GET_ONE, CREATE, UPDATE, and DELETE on the services.
>
> **[1:33](https://www.linkedin.com/learning/learning-jdbc-24697410/solution-implement-a-dao?u=76281980&t=93)** And then we went into the customer. There's about a hundred customers in the database, so there's quite a bit here. But then we have a GET_ONE, a CREATE, an UPDATE, and then, finally, a DELETE. And all of that is working properly. So, we've got CRUD done, but there's still a little bit more that we can work with. So in the next video, we're going to actually take you into the next step, a little bit more advanced use of [SQL](../../Skills/Data%20Science/SQL.md), in order to do the work that we would do with [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1), [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (1)
> **Env Vars:** get_one (4), create (3), update (3), delete (3), dao (2)
> **Code Identifiers:** getall (1), getone (1), processresultsset (1)
> **SQL:** update (3)
> **API Endpoints:** delete  (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Advanced Data Access

[↑ Back to Table of Contents](#table-of-contents)

#### [Using stored procedures](https://www.linkedin.com/learning/learning-jdbc-24697410/using-stored-procedures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/using-stored-procedures?u=76281980&t=0)** - [Person] We're now going to walk through the process of executing against a stored procedure or a function. In our case, we're going to use a function, but the behavior is very much the same. The first thing that I want to do is open up the data of that [SQL](../../Skills/Data%20Science/SQL.md) file, and if you go to the very bottom of it, you will see that we have a function created that will create a product based on some data, so let's go ahead and do that, so we're going to go to "src," "main," "[Java](../../Skills/Software%20Development/Java.md)," and open up the "entity" package and we will create a new Java file in there, and we are going to call this "SimpleProduct." Now, we need to put a few values in here, so "private String name," we'll add one above that, "private UUID," call it "productId," "private BigDecimal price," "private UUID vendorId," "private String vendorName," "private String contact," "private String phoneNumber," "private String email," and "private String address."
>
> **[1:35](https://www.linkedin.com/learning/learning-jdbc-24697410/using-stored-procedures?u=76281980&t=95)** Now, like we've done before, we'll go ahead and generate getters and setters, and I'm going to go ahead and also generate a "toString" on this, selecting all the fields. Excellent, so now, let's go to the "dao" package, and let's create a new Java class, and we will call this "SimpleProductDao." Now, in this case, we're not going to extend our DAO like we had done before, and there's a reason for that, we don't need to go implement everything to show this example, but we definitely could do that, so let's go ahead and do what we've done before though, and do a "private static final Logger" called "LOGGER..."
>
> **[2:34](https://www.linkedin.com/learning/learning-jdbc-24697410/using-stored-procedures?u=76281980&t=154)** And then, we'll also do a string called "CREATE,"
>
> **[2:43](https://www.linkedin.com/learning/learning-jdbc-24697410/using-stored-procedures?u=76281980&t=163)** and we're going to do a "select * from createproduct," passing it three bind variables. Now, normally, I wouldn't do "select *," I would actually want to do something like "select productId," but in this case, it's fine for what we're doing. So now, let's create our method, so we are going to create a method that returns a UUID called "createProduct," it will take a string of a name, a "BigDecimal" of "price," and a string of a "vendorName." And now, we're ready to get working, so "connection," like we've done before. We're going to set a UUID called "returnVal," and set it equal to "null" for right now.
>
> **[3:45](https://www.linkedin.com/learning/learning-jdbc-24697410/using-stored-procedures?u=76281980&t=225)** And let's make sure that we import UUID.
>
> **[4:01](https://www.linkedin.com/learning/learning-jdbc-24697410/using-stored-procedures?u=76281980&t=241)** And import "Connection."
>
> **[4:12](https://www.linkedin.com/learning/learning-jdbc-24697410/using-stored-procedures?u=76281980&t=252)** Okay, so now, we can do our "try," and we'll once again do "connection.setAutoCommit," set it equal to "false," we will do a "PreparedStatement," get it from the "connection," and we will pass in the "CREATE" string, and then we will do a "statement.setString," "1," and that is going to be the name.
>
> **[4:55](https://www.linkedin.com/learning/learning-jdbc-24697410/using-stored-procedures?u=76281980&t=295)** We will do a "statement.setBigDecimal" at "2," and that will be "price," and then, "statement.setString" for "3," and that will be our "vendorName." Now, we're going to do a "ResultsSet." We will execute our query.
>
> **[5:32](https://www.linkedin.com/learning/learning-jdbc-24697410/using-stored-procedures?u=76281980&t=332)** Iterate over our "ResultsSet," and set our "returnVal" equal to casting to a UUID, "rs.getObject,"
>
> **[5:54](https://www.linkedin.com/learning/learning-jdbc-24697410/using-stored-procedures?u=76281980&t=354)** and we will pass it the field "createproduct," which is the name of our function. We will then do a "connection.commit," we will do a "rs.close," and finally, we will do a "statement.close." Now, we will once again catch an "SqlException,"
>
> **[6:29](https://www.linkedin.com/learning/learning-jdbc-24697410/using-stored-procedures?u=76281980&t=389)** and I'm going to go ahead and open up one of our other DAOs, go get the "try" catch block that exists within the parent, come back over, paste that in, make our changes, so "SimpleProductDao.create.rollback," and "SimpleProductDao.create," and then, finally, at the end of this method, we will return our return value. Excellent, so now, let's go back to the "App" class like we've done before, and we are going to simply do a System.out.printLn," we'll do a "\n\n," we'll put "***" that say "SIMPLE PRODUCT," and now, we will do a "SimpleProductDao spdao = new SimpleProductDao,"
>
> **[7:49](https://www.linkedin.com/learning/learning-jdbc-24697410/using-stored-procedures?u=76281980&t=469)** now, we will do a UUID called "productId = spdao.createProduct,"
>
> **[8:01](https://www.linkedin.com/learning/learning-jdbc-24697410/using-stored-procedures?u=76281980&t=481)** and we are going to pass it in "foobarbaz," and once again, we will do our "System.currentTime" in milliseconds, we will do a "new BigDecimal" with a value of 45.67, and we are going to use a name that exists in the database called "Jaloo," J-A-L-O-O, and the reason we're doing that is we're actually doing a check in the function to make sure that that vendor exists, and then, we are simply adding it. Now, this is probably not how I would do this in the real world, but for now, this works just fine. So now, if we run our system, you will see at the bottom here that we actually have created a "SIMPLE PRODUCT" and we have an ID, so now, what I want to do is do a "psql -U $POSTGRES_USER -d
>
> **[9:05](https://www.linkedin.com/learning/learning-jdbc-24697410/using-stored-procedures?u=76281980&t=545)** $ POSTGRES_DB -h local host," and I will do a "select * from wisdom.[products](../../Skills/Software%20Development/Microsoft%20Products.md)," where "product_id" equals, and I'll grab this value, and put it into quotes, and you'll see that we have a product that we just added in the product database through that function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Code Identifiers:** productid (3), vendorname (3), createproduct (2), returnval (2), setstring (2)
> **Env Vars:** uuid (7), create (2), simple (2), product (2), sql (1)
> **CLI Commands:** make (3), psql (1)
> **UI Navigation:** go to (3)
> **Versions:** 45.67 (1)
> **Speakers:** - [person] (1)

#### [Ordering and limiting results](https://www.linkedin.com/learning/learning-jdbc-24697410/ordering-and-limiting-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/ordering-and-limiting-results?u=76281980&t=0)** - [Instructor] So now we're going to walk through the concept of ordering, and limiting results, and doing so through buying variables. So what I want you to do is to go into source main [Java](../../Skills/Software%20Development/Java.md), open up the Dao package and go to the service Dao. Now at the very top, we're going to do a private static final String, GET_ALL_LIMIT, and we're going to set that equal to select service id, name, price from wisdom.services order by name limit ?.
>
> **[0:49](https://www.linkedin.com/learning/learning-jdbc-24697410/ordering-and-limiting-results?u=76281980&t=49)** Now we could do the same with the order by clause, but the limit will get you the same thing that you need to know. So let's go ahead and create a function down here towards the bottom. This going to be a public list of type service. Get AllLimit. We will pass in an integer that is our limit. We'll do a list of service called services, as a new Arraylist. (instructor typing) We will do our connection. (instructor typing) (instructor typing) And I just realized that I missed an angle bracket there. So let's go ahead and put that in. Now we're going to go try, and in our try we'll do our prepared statement. (instructor typing) And we will pass it, GET_ALL_LIMIT. (instructor typing) We'll do our statement setInt1, and we'll pass it in the limit, and then we will do a ResultSet = statement.executeQuery.
>
> **[2:30](https://www.linkedin.com/learning/learning-jdbc-24697410/ordering-and-limiting-results?u=76281980&t=150)** (instructor typing) We will set our services = this.processResultSet, passing it in the results set. We can then close that result set. We will catch a [SQL](../../Skills/Data%20Science/SQL.md) exception. And as we've done so many times before, we'll call into DatabaseUtils, handleSqLException ServiceDao.getAll.
>
> **[3:10](https://www.linkedin.com/learning/learning-jdbc-24697410/ordering-and-limiting-results?u=76281980&t=190)** And then at the very end, we simply return our services. Now let's go back to the app class. Down here towards the bottom, we will do a System.out.println. We'll put a couple new lines in here, LIMIT. (instructor typing) We will then do a serviceDao.getAllLimit. We will pass in a limit of two. We will then do a forEach on that. And we'll do a System.out::print ln.
>
> **[4:02](https://www.linkedin.com/learning/learning-jdbc-24697410/ordering-and-limiting-results?u=76281980&t=242)** (instructor typing) And now if we run this, you'll see at the end, we now have limited our results to two. As you might expect, if you have ever done a limit in your SQL predicate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Code Identifiers:** setint1 (1), executequery (1), processresultset (1), handlesqlexception (1), getall (1)
> **Non-Speech:** (instructor typing) (8)
> **Env Vars:** get_all_limit (2), sql (2), limit (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Paging](https://www.linkedin.com/learning/learning-jdbc-24697410/paging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/paging?u=76281980&t=0)** - [Instructor] So now we're going to talk about the concept of paging. So paging is a concept that varies between each database. I'm going to show you a pattern that works on [Postgres](../../Skills/Software%20Development/PostgreSQL.md) and a couple other [Databases](../../Skills/Software%20Development/Databases.md) out there. The key here is how we manage pages. Each database implementation varies, but the idea of managing pages itself doesn't. So let's jump into the customer DAO and we're going to start, as we've done so many times before, with a private static final string. We will call this one "Get All Paged" and it is going to be select customer ID, first name, last name, email, phone, and address
>
> **[0:52](https://www.linkedin.com/learning/learning-jdbc-24697410/paging?u=76281980&t=52)** from wisdom.customers order by last name, first name and you have to put in an order by clause for paging to work in Postgres. And now we will do a limit and an offset. (keyboard clacking)
>
> **[1:25](https://www.linkedin.com/learning/learning-jdbc-24697410/paging?u=76281980&t=85)** All right. So we'll just put this at the top here to make it simple. So public list of customer, get all paged. We're going to pass in a page number and a limit.
>
> **[1:52](https://www.linkedin.com/learning/learning-jdbc-24697410/paging?u=76281980&t=112)** Now we will start with a list of customer called "Customers" and make it a new array list. Let me go ahead and put in a return statement here (keyboard clacking) and fix my missing bracket. (keyboard clacking) Now we'll get a handle to our connection. (keyboard clacking)
>
> **[2:26](https://www.linkedin.com/learning/learning-jdbc-24697410/paging?u=76281980&t=146)** And now we're going to set an offset and that's going to be equal to page number minus one because we always want to pass in a one for the page number but this is actually a zero based array times our limit. Now we will do like we've done before, a try statement with a prepared statement in it and pass it in our get all paged.
>
> **[3:03](https://www.linkedin.com/learning/learning-jdbc-24697410/paging?u=76281980&t=183)** And then we will do a statement.setInt one will pass
>
> **[3:12](https://www.linkedin.com/learning/learning-jdbc-24697410/paging?u=76281980&t=192)** in the limit. Statement.setInt two, pass in our offset value. We will now do a result set.
>
> **[3:29](https://www.linkedin.com/learning/learning-jdbc-24697410/paging?u=76281980&t=209)** Executing our query. We'll set our customers equal to this .process results set, passing in the results set and then we will do a results set.close. And now we can catch our [SQL](../../Skills/Data%20Science/SQL.md) exception. And if we get an exception, we will do our database utils.handle SQL exception. This is going to be customer DAO.get all paged. And we've already got our return statement in. So now let's go see what this looks like. We're going to go back to our app class and once again we'll do a system.out.println. We will do an indication that we're entering our page.
>
> **[4:33](https://www.linkedin.com/learning/learning-jdbc-24697410/paging?u=76281980&t=273)** And now what I'm going to do is I'm going to do a four Int I equals one, I less than 11 and I plus plus.
>
> **[4:47](https://www.linkedin.com/learning/learning-jdbc-24697410/paging?u=76281980&t=287)** And we will simply do a system.out.println and we're going to say which page number we're on and we will pass it the index. And then we will do our customer DAO.get all paged, we'll pass it in I and 10. I happen to know that there's a hundred customers, so we're going to be able to print all of them this way. And then we will do a for each at the end of this. And we will do our system.out::println. And now we can run this and I'm going to expand this view again. And what you'll see is we've actually executed this query 10 times. If you scroll through all of this, you'll see we have our page, page one, then page two, then page three. And if you look, they're all ordered so we know that we're not duplicating any of them by looking at the boundaries. And that's how you do paging. And paging is actually really powerful when you are doing web UIs where you don't want to show all of the results on a single page. By doing paging, you can actually go back to the database multiple times and have a smaller payload to display to your users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** dao (3), sql (2)
> **CLI Commands:** make (2)
> **Code Identifiers:** setint (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Connection pooling and management](https://www.linkedin.com/learning/learning-jdbc-24697410/connection-pooling-and-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/connection-pooling-and-management?u=76281980&t=0)** - [Instructor] In all of our examples, we've been getting a connection as a single instance, but in the real world, we actually build pools of connections and manage multiple connections to the database at once, handing each thread a connection from the pool when it is needed. So let's talk a little bit about that. So at its high level, connection pooling is a common data access pattern. We do this all the time, especially in web applications. What we can do is we can build a pool of connections and reuse those from request to request, much in the same way that we have done, but we've been working in a single-threaded environment. In the real world, we do these things in multi-threaded processing. It sort of works as a cache of all of our connections, and that's the important point is when you're done, it drops the connection back into the pool for the next use. And when you run out of connections, most of the pooling technologies will simply execute our routine to give you another set of connections. So it's an ever-growing list, and some of them manage the size and reduce them when they're not being used. We don't normally manage connection pools manually. We use a pooling framework to do all of this work, and as such, developers simply need to configure the pool and go forward from there. So why do we need to use this? The lifecycle to create connections is resource-intensive. I didn't really talk about this,
>
> **[1:33](https://www.linkedin.com/learning/learning-jdbc-24697410/connection-pooling-and-management?u=76281980&t=93)** but the reason that we have actually been managing it as a singleton is because it is the most expensive operation that we've been performing. It is a very costly operation as far as time goes, and that incrementally grows as you have more and more threads operating. In most instances, the cost of keeping these connections alive is significantly cheaper than creating a new one every time you need it. So the typical connection creation flow is a request from an application to the JVM. The JVM then goes to the operating system for a TCP socket. It reaches out to the server and the two-way handshake that exists on TCP occurs. Then the OS hands that connection back to the JVM. The JVM then hands it to the client via the driver. This is the typical way that a connection is created, and we've been doing this throughout the entire life cycle of this course. Now, when you're talking about connection pooling, it's a little bit different. The request from the application goes first to the pool, then the pool hands the connection handle to the application from its existing list. If none are available in the pool, you will then still have your full connection logic, and usually it's in blocks. It doesn't do it one by one, it does a block to add more
>
> **[3:08](https://www.linkedin.com/learning/learning-jdbc-24697410/connection-pooling-and-management?u=76281980&t=188)** to the pool and then manages those connections for the lifecycle of the application. There are some very common connection pooling libraries that you may be exposed to. Apache Commons DBCP is one of them. Another one is three CPO. You'll see this a lot if you're doing Spring, especially a little bit older Spring. And then there's HikariCP, which is probably the one that I have used the most just because it's the one that was selected and it's the one that we just operated with when I was doing a lot more [Java](../../Skills/Software%20Development/Java.md) development as opposed to architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **Env Vars:** jvm (4), tcp (2), dbcp (1), cpo (1)
> **Definitions:** is a  (3)
> **CLI Commands:** apache (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Understanding transactions](https://www.linkedin.com/learning/learning-jdbc-24697410/understanding-transactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/understanding-transactions?u=76281980&t=0)** - [Presenter] Throughout this course, we've been using transactions, but we haven't really talked a whole lot about them. So I want to spend a little bit of time talking about transactions themselves. So first of all, what is a transaction? At its simplest form, it's a unit of work. All work is either completed or it all fails. There is no in-between when dealing with a transaction. This is a powerful concept, but you must manage it and you must understand how a transaction block works in order to build your code effectively to utilize them. One very big problem with transactions is that they tend to break down in distributed systems very, very quickly. And we've talked a little bit about this, but be very careful when people start talking about doing distributed transactions. So let's talk about the commit concept. The commit point tells the system that the transaction is done. It can at that point be committed or written to disk in a way that it can then be read by other systems. Many [Databases](../../Skills/Software%20Development/Databases.md) implement this by putting the data into swap until you get to this point. Now, each database is a little bit different, but the most important concept here to understand is that the data sits in a state where it is not readable by other operations until the commit has occurred.
>
> **[1:35](https://www.linkedin.com/learning/learning-jdbc-24697410/understanding-transactions?u=76281980&t=95)** The converse of this is the rollback, and this returns the data to the state that it was prior to the transaction starting, at least with respect to this thread. If there is no locking and another transaction completed, that data is not lost, only the current transaction is lost. Now, this can get you into a really weird state, which is why I prefer to do select for updates instead of just straight update. And I prefer to use something like optimistic locking to ensure that I don't run into this weird state of I have a transaction starting, something else writes to that, and then I have to rollback. All uncommitted data is purged when the rollback command is executed And often, most often, in fact, I can't think of a time when it's not, this is part of a failure scenario. But that is not required. You can do a rollback for other reasons. We just tend to only execute a rollback when an exception has been raised of some kind. Now we've been turning off auto-commit. We didn't have to do that. We could have done this entire course without using transactions and just allowed auto-commit to do its thing. But let's talk a little bit about what auto-commit is. First of all, auto-commit is not transactional. The data is immediately committed,
>
> **[3:08](https://www.linkedin.com/learning/learning-jdbc-24697410/understanding-transactions?u=76281980&t=188)** which means if I have four insert statements and auto-commit is turned on, each one of those inserts is sort of a transaction because they're all atomic, but not all four of them are wrapped into one transaction. When you're doing this, there's no concept of this atomic transaction because each statement becomes its own transaction boundary. So while it is not transactional, it sort of acts that way when you're dealing with auto-commit. This is not something that we recommend for most, if not all use cases utilizing an RDBMS. In fact, I turn it off at the connection when I'm building a system and never allow auto-commit to ever rear its head in my application in case someone forgets to do a transaction. I just don't let it happen. So when I define my connection statement, I'm actually turning auto-commit off at that point. Now, often either the driver or transactional settings are how you do this. In this case, we've done it through the connection itself, but again, it varies by technology. Some ORMs, which we're going to talk about, actually turn auto-commit off as part of their operation. So you can't even do auto-commit if you're using these technologies without reconfiguring the way that the system default configures itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Definitions:** is a  (3)
> **Env Vars:** rdbms (1)
> **Speakers:** - [presenter] (1)

#### [Exception handling in JDBC](https://www.linkedin.com/learning/learning-jdbc-24697410/exception-handling-in-jdbc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/exception-handling-in-jdbc?u=76281980&t=0)** - [Instructor] Now we've spent a little bit of time dealing with error handling, but I want to talk about it a little bit more in depth. So first of all, why have we gone through all of this work? Error handling in [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) quite honestly can be a nightmare if you don't manage it. Everything is a SQLException, and you have to actually unpack the exception to see what the actual error code coming from the database is and what that means. The important part here is that this is not something to ignore. If you ignore SQLExceptions, you don't really have any flow control in your application when a SQLException happens. So let's talk a little bit about some common unpacking. One of the strategies you can use is to unpack SQLExceptions into your own named exceptions. So you could build a handler the way we did a simple logging handler to look at the error state and from that throw a very specific named exception. You definitely can and should log error codes and add common messaging, much like we've done so far in this course. So most often if you're going to create named exceptions, you do so only for the most common issues. If you had to go through the entire error code for a database, you would create more exceptions than you ever could use, and you have to manage translating those. So it's just not something we do.
>
> **[1:34](https://www.linkedin.com/learning/learning-jdbc-24697410/exception-handling-in-jdbc?u=76281980&t=94)** We tend to look at the most common past and build a named exception for these. Then you would have a generic exception that is named for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of them. But by putting it into your codes, you can actually handle it much easier because you know the common cases and how to handle flow control. And only when these generic exceptions come up do you have to sort of punt into what you're dealing with. Now, the method that I prefer is using runtime exceptions, and this is just my favorite way of doing it because then I don't have to trap them at any layer until I get to the edge of my application. By converting everything to a runtime exception, either generic or extensions of it, which is what I usually do, by doing this, you have a lot cleaner looking code, but you still have all the benefits of creating those named exceptions, they get translated from the error state. The biggest reason to do this is it allows you to bubble these exceptions up from layer to layer, and then you can catch it at the top and transform it as needed. And usually we're transforming it into a response code for an HTTP call. Now, the really important thing is when do you log it? And I prefer to log it when I do the actual conversion. I feel that that's the cleanest place to log it because I have all of the details I need from the SQLException, I can log them, and then put only the data that I care about moving up
>
> **[3:09](https://www.linkedin.com/learning/learning-jdbc-24697410/exception-handling-in-jdbc?u=76281980&t=189)** into the runtime exception. And by doing this, you have no leaky APIs, and that's a really important thing when you're looking at code from a clean perspective. But of course, you can leak those SQLExceptions up. When you do this, you will allow the SQLException to translate from the lowest level all the way up your level. And everybody in that stack has to throw a SQLException. By doing this, each method signature has to declare it. And in doing so, you've now taken a low level data access component and leaked it all the way up through your business layer and ultimately into, let's say, your web layer. And by doing so, you don't really have the encapsulation that we like to do if we're building layered code. Now, this may seem easy at first, just throw it everywhere, but I can promise you this is not the easiest path forward. The leaking of data access technology into higher levels creates a very tight coupling in your code that is not the best way to do it when you ultimately have to split it up or change the underlying code to be a different database. Let's say you go from an RDBMS to a [NoSQL](../../Skills/Software%20Development/NoSQL.md), now those SQLExceptions that you threw from layer to layer all have to be converted into the new database exception. It's just not an effective way to do it.
>
> **[4:46](https://www.linkedin.com/learning/learning-jdbc-24697410/exception-handling-in-jdbc?u=76281980&t=286)** Use a runtime exception, use a named exception, I can promise you your results will be worth the initial effort.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (1)
> **Env Vars:** jdbc (1), http (1), rdbms (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [JPA and ORM](https://www.linkedin.com/learning/learning-jdbc-24697410/jpa-and-orm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/jpa-and-orm?u=76281980&t=0)** - [Instructor] I would be remiss in a course on [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) if I didn't at least touch on JPA and ORMs. So why would you use JDBC? Everything in technology and architecture is all about trade-offs. ORM can cause just as many problems as it solves. JDBC gives you raw control, but with that raw control, as you've seen, there's a lot of manual effort and a lot of repetitive code. JDBC gives your DBAs much more control, however, which can improve performance. In fact, I've built patterns where all of my JDBC statements, my [SQL](../../Skills/Data%20Science/SQL.md) statements, were written into a properties file that my DBAs would actually be able to peruse and edit. And we injected those into applications at runtime. And by doing so, our DBA team was actually looking at the queries that we were executing before we executed them. And that control is really valuable to many organizations. So let's talk a little bit about what ORM is. An object relational mapper, ORM allows you to interact with [Databases](../../Skills/Software%20Development/Databases.md) through objects themselves instead of SQL statements. Technically a technique, but most devs call the library and ORM. So while object relational mapping is a technique,
>
> **[1:36](https://www.linkedin.com/learning/learning-jdbc-24697410/jpa-and-orm?u=76281980&t=96)** we usually talk about things like hibernate and say it's an ORM because it is an ORM technology. It tends to reduce your code, especially when you're looking at result set mapping, because you no longer have to do any of that, it just maps to the object. Hibernate, as I alluded to, is a very common implementation of a library that uses object relational mapping or ORM. Now all of this is built on the [Java](../../Skills/Software%20Development/Java.md) persistence API or JPA. This is a standard Java EE Jakarta EE specification for ORM. Hibernate is an implementation of JPA. This streamlines the persistence to a standard format, which can be valuable for many developers, especially those that don't really know SQL very well. And not only does it take SQL for the most part out of the system, it also reduces your JDBC code, especially the boilerplate code that we saw ourselves doing over and over again. And it also tends to focus on good object-oriented practices, which is really good for many developers. I did allude to the fact, however, that ORM comes with a cost. You do run the risk of doing things like generating Cartesian [products](../../Skills/Software%20Development/Microsoft%20Products.md), especially if you use a DAO pattern. My general recommendation is if you are doing JPA,
>
> **[3:13](https://www.linkedin.com/learning/learning-jdbc-24697410/jpa-and-orm?u=76281980&t=193)** go ahead and do a repository pattern to avoid any of those potential pitfalls.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (6), [SQL](../../Skills/Data%20Science/SQL.md) (4), [Java](../../Skills/Software%20Development/Java.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** orm (9), jdbc (6), jpa (4), sql (4), dba (1)
> **Definitions:** is a  (3), is an  (2)
> **Documentation:** specification (1)
> **Exercise Files:** boilerplate (1)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/learning-jdbc-24697410/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jdbc-24697410/next-steps?u=76281980&t=0)** - [Instructor] Now I want to talk about some next steps in your journey with [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md). Before we get there, I want to talk a little bit about what we've learned. So we had an introduction to RDBMS, JDBC, and our database. We went through the operations, the basic CRUD operations that exist for every database table. We then looked at some advanced concepts like paging, sorting, and using stored procedures. We talked through the basics of transactions as well as error handling and the concepts of JPA and ORMs. So what's your next steps? Well, I would advise you to spend a little bit of time and learn JPA. In addition, I would encourage you to study [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) access patterns because they really focus on the repository pattern as well as using JPA, and it's a great bridge between all of these technologies. Of course, you should learn Hibernate if you're going to do JPA and look at the pros and cons of it. And I can't emphasize enough the power of learning [SQL](../../Skills/Data%20Science/SQL.md). Whether you're using JPA or you're using JDBC or any other database technology, understanding the underlying SQL is a very valuable proposition. Now, my commitment to you does not end with this course, and there's a few ways that you can get ahold of me, on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) through the Question and Answer section, on this course or through my profile,
>
> **[1:36](https://www.linkedin.com/learning/learning-jdbc-24697410/next-steps?u=76281980&t=96)** also on Twitter, now called X, using @fpmoles, and StackOverflow or [GitHub](../../Skills/Software%20Development/GitHub.md) by the same handle. Now, the fact that you've spent this time with me is not lost on me at all. I find a lot of value in bringing this material to you as your instructor. And you've spent time with me, so that time is valuable and I very much appreciate it. And I'm encouraged by the fact that you've included me to be part of your learning journey. And remember, never stop learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Spring Data](../../Skills/Web%20Development/Spring%20Data.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** jpa (5), jdbc (3), sql (2), rdbms (1), crud (1)
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Frank P Moley III](../../Instructors/Software%20Development/Frank%20P%20Moley%20III.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-jdbc-2725172)

## Skills Covered

- Java Database Connectivity (JDBC)

## Path Context

### In [Getting Started as a Java Developer](../../Paths/Data%20Science/Learning%20Paths/Getting%20Started%20as%20a%20Java%20Developer.md)
← [Learning Spring 6 With Spring Boot](../Software%20Development/Learning%20Spring%206%20With%20Spring%20Boot.md) | **4 of 10** | [Learning Java Collections](Learning%20Java%20Collections.md) →

### In [Java Foundations Professional Certificate by JetBrains](../../Paths/Data%20Science/Professional%20Certificates/Java%20Foundations%20Professional%20Certificate%20by%20JetBrains.md)
← [Java- Data Structures](Java-%20Data%20Structures.md) | **5 of 5**

## Part of

- [Java Foundations Professional Certificate by JetBrains](../../Paths/Data%20Science/Professional%20Certificates/Java%20Foundations%20Professional%20Certificate%20by%20JetBrains.md)

## Appears In

- [Getting Started as a Java Developer](../../Paths/Data%20Science/Learning%20Paths/Getting%20Started%20as%20a%20Java%20Developer.md)
- [Java Foundations Professional Certificate by JetBrains](../../Paths/Data%20Science/Professional%20Certificates/Java%20Foundations%20Professional%20Certificate%20by%20JetBrains.md)

---

[↑ Back to top](#)