---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: introduction-to-neo4j
url: "https://www.linkedin.com/learning/introduction-to-neo4j"
duration_minutes: 85
duration: 1h 25m
level: Beginner
updated: 8/22/2022
learners: 4262
skills:
  - Neo4j
exercise_files: true
github: "https://github.com/LinkedInLearning/learning-neo4j-2483130"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHW5qTGHHzVxQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1660756613039?e=2147483647&amp;v=beta&amp;t=V7xR7ohFtweeH1uqB7RQgDW7ALDy-DkndokTo9QqkDM"
linkedin_topic: Database Management
learning_paths:
  - '[[Develop Your NoSQL Skills]]'
prev_courses:
  - '[[Learning MongoDB]]'
next_courses:
  - '[[Graph Databases- Neo4j for Complex Data Relationships]]'
path_nav: '[{"path":"Develop Your NoSQL Skills","position":4,"total":10,"prev":"Learning MongoDB","next":"Graph Databases- Neo4j for Complex Data Relationships"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/neo4j
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Introduction%20to%20Neo4j.md)

![Introduction to Neo4j](https://media.licdn.com/dms/image/v2/C560DAQHW5qTGHHzVxQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1660756613039?e=2147483647&amp;v=beta&amp;t=V7xR7ohFtweeH1uqB7RQgDW7ALDy-DkndokTo9QqkDM)

# Introduction to Neo4j

> Data is at the core of almost everything we do in the modern world, and at this point in the evolution of data, it’s not just the raw data that’s important, it’s also how different data is connected, and why. While common databases like relational databases and document databases sometimes struggle to illustrate the deep connections of data, graph databases are designed precisely for understanding

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-neo4j) | 1h 25m | Beginner | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Navigating the world of connected data](#navigating-the-world-of-connected-data)
- [**1. Introduction**](#1-introduction) (7 videos)
  - [What are graph databases](#what-are-graph-databases)
  - [Types of graph structures for data](#types-of-graph-structures-for-data)
  - [Why graph databases?](#why-graph-databases)
  - [Good graph database use cases and bad graph database use cases](#good-graph-database-use-cases-and-bad-graph-database-use-cases)
  - [Introducing Neo4j: A property graph database](#introducing-neo4j-a-property-graph-database)
  - [Challenge: Is this a connected data problem?](#challenge-is-this-a-connected-data-problem)
  - [Solution: Is this a connected data problem?](#solution-is-this-a-connected-data-problem)
- [**2. Getting Started**](#2-getting-started) (6 videos)
  - [Anatomy of a property graph](#anatomy-of-a-property-graph)
  - [Getting up and running with Neo4j](#getting-up-and-running-with-neo4j)
  - [Hello, world!](#hello-world)
  - [Introducing Cypher](#introducing-cypher)
  - [Challenge: Your first Cypher queries](#challenge-your-first-cypher-queries)
  - [Solution: Your first Cypher queries](#solution-your-first-cypher-queries)
- [**3. Reading Data**](#3-reading-data) (7 videos)
  - [Introducing the course data set](#introducing-the-course-data-set)
  - [MATCHing nodes](#matching-nodes)
  - [MATCHing nodes and relationships](#matching-nodes-and-relationships)
  - [Counting and aggregating data](#counting-and-aggregating-data)
  - [Beyond one hop](#beyond-one-hop)
  - [Challenge: Time to answer some questions](#challenge-time-to-answer-some-questions)
  - [Solution: Time to answer some questions](#solution-time-to-answer-some-questions)
- [**4. Writing Data**](#4-writing-data) (5 videos)
  - [CREATEing your data](#createing-your-data)
  - [Updating and REMOVEing your data](#updating-and-removeing-your-data)
  - [DELETEing your data](#deleteing-your-data)
  - [Challenge: Putting it all together](#challenge-putting-it-all-together)
  - [Solution: Putting it all together](#solution-putting-it-all-together)
- [**Conclusion**](#conclusion) (1 videos)
  - [What's next?](#whats-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Navigating the world of connected data](https://www.linkedin.com/learning/introduction-to-neo4j/navigating-the-world-of-connected-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/navigating-the-world-of-connected-data?u=76281980&t=0)** - [Lulu] Graph [[Databases]] are completely different.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-neo4j/navigating-the-world-of-connected-data?u=76281980&t=3)** From the ground up, they are designed for understanding relationships in data, treating connections between the data with the same importance as the data itself.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-neo4j/navigating-the-world-of-connected-data?u=76281980&t=12)** They fundamentally are designed to understand these deep joins in data.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-neo4j/navigating-the-world-of-connected-data?u=76281980&t=17)** In this course, you will learn about what are graph databases and why they are so powerful, how to spot when it is the best time to use them, as well as an interactive hands-on learning experience with [[Neo4j]], the market leading graph database.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-neo4j/navigating-the-world-of-connected-data?u=76281980&t=32)** I'm Lulu Lazarevic, a data geek and was part of the Field Team and Developer Relations Team at Neo4j as well as an active member of the community.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-neo4j/navigating-the-world-of-connected-data?u=76281980&t=42)** Join me on this whirlwind tour of Why Graph Databases and hands-on experience working with a fun data set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (3), [[Neo4j]] (2)
> **Speakers:** - [lulu] (1)


### 1. Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [What are graph databases](https://www.linkedin.com/learning/introduction-to-neo4j/what-are-graph-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/what-are-graph-databases?u=76281980&t=0)** - [Instructor] What are graph [[Databases]]?
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-neo4j/what-are-graph-databases?u=76281980&t=2)** First of all, let's start off with what are graphs?
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-neo4j/what-are-graph-databases?u=76281980&t=6)** When we talk about graphs in the context of this course, we're referring to the branch of mathematics known as graph theory.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-neo4j/what-are-graph-databases?u=76281980&t=14)** This is a way of representing discrete entities and the relationships that join them and being able to apply various [[Algorithms]] and thinking around it.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-neo4j/what-are-graph-databases?u=76281980&t=23)** And the things with graphs, you can find them absolutely everywhere when you're looking at where entities are being joined together.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-neo4j/what-are-graph-databases?u=76281980&t=31)** So, for example, if we think about social networks, we are thinking about the various people that are in them and how they're connected to each other through friendship, acquaintances and so forth.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-neo4j/what-are-graph-databases?u=76281980&t=42)** Or if we think about infrastructure, for example, we can think about power lines that are being connected to transformers, how they're connected to power stations and the homes that they eventually power.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-neo4j/what-are-graph-databases?u=76281980&t=53)** Or if we're looking at a train network, we'll be interested in things such as tracks, the switching points, signal route planning and all of these elements that bring together a running train network.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-neo4j/what-are-graph-databases?u=76281980&t=64)** So what are databases?
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-neo4j/what-are-graph-databases?u=76281980&t=66)** Databases are a software technology that allow us to store data in structured and organized way.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-neo4j/what-are-graph-databases?u=76281980&t=73)** It helps us to curate our data and allows us to systematically query data and delete data.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-neo4j/what-are-graph-databases?u=76281980&t=79)** You may well have heard of the acronym CRUDs, create, read, update, delete, which describes the essential features you'd expect of a database system.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-neo4j/what-are-graph-databases?u=76281980&t=88)** Databases are an extremely important component in [[Software Architecture]].
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-neo4j/what-are-graph-databases?u=76281980&t=92)** And indeed, you'll find a database used in nearly every single computing application found on service, laptops, even your tablet or mobile devices.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-neo4j/what-are-graph-databases?u=76281980&t=102)** So, what are graph databases?
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-neo4j/what-are-graph-databases?u=76281980&t=105)** We've provided an introduction to what graphs are and what databases are, so what exactly are graph databases?
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-neo4j/what-are-graph-databases?u=76281980&t=111)** Put simply, they are the [[Database Systems]] that specialize in storing and querying data in a graph structure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (7), [[Algorithms]] (1), [[Software Architecture]] (1), [[Database Systems]] (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** find (2)
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Types of graph structures for data](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980&t=0)** - [Instructor] Types of graph structures for data.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980&t=3)** Let's take a look at two of the most commonly used graph structures for representing connected data.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980&t=9)** The two most common types are resource description framework, commonly referred to as RDF, and property graph.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980&t=17)** Whilst both are used for representing graph structures, they are used for quite different purposes.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980&t=23)** Both of these structures use the concept of relationships and notes or edges and vertices for those of you coming in from a graph theory background.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980&t=31)** Let's take a look at these two different structures in a bit more detail.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980&t=35)** The resource description framework, as it's most commonly known by its acronym RDF, uses the concept of subject-predicate-object.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980&t=45)** For each item that you look at, the subject, it'll have some sort of relationship, the predicate, ends with some sort of descriptor, the object.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980&t=55)** If we take a look at our image here, and we've got an example of this, we can see that the subject, identify one, has a predicate, a name with an object, the string Kat, the subject, identify one, also has a predicate type with the object, student, and so on.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980&t=73)** There are no shortcuts here.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980&t=75)** Every label, every data type and every descriptor will be described in this way.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980&t=80)** The nature of this data structure means that RDF lends itself very well as an efficient means to transmit data between machines and the data is easy to serialize.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980&t=90)** In fact, RDF is the worldwide web consortium standard for exchanging data.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980&t=96)** The property graph structures data in a graph format where the data is annotated with properties, labels and types.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980&t=105)** In our example image here, you can see our distinct entities with the labels of students and they have a relationship type joining them, friend.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980&t=115)** Each node has a name property with the values of Kat's and Matt's, respectively.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980&t=120)** This structure will also lend itself to efficient storage and retrieval of connected data, especially in native built graph [[Databases]].
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-neo4j/types-of-graph-structures-for-data?u=76281980&t=128)** You will typically see property graph databases used in transactional systems, such as those handling purchases or other organizational operational data or analytical systems where you'll study the data to create reports or investigate past actions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2)
> **Env Vars:** rdf (4)
> **CLI Commands:** node (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Why graph databases?](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=0)** - Why Graph [[Databases]]?
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=2)** Many data problems are connected data problems.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=6)** And, let's take a look at a simple example.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=9)** Kat, a [[Graphic Design]] student, would like to reach out to another person doing graphic design, Matt, about studying abroad.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=18)** However, she's not directly acquainted with him.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=21)** Is there a common person who could do the introductions?
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=24)** Let's take a look at how this might look, based on different database technologies.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=30)** If we look at typical relational database example, we tend to normalize our data.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=35)** This is the process of removing duplicate data and simplifying it down to its most basic components.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=42)** For our finding a mutual acquaintance example, we would probably have tables that look something like this.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=47)** For us to find who could introduce Matt to Kat, we would need to do what is called a "join query", to bring the data together from both tables.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=57)** This would involve finding out the unique identifiers for Kat and Matt, from the Student Table, and then going to the Knows Table, to see where those IDs map to.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=68)** We would then eventually find that the common connection for Kat and Matt, is Lara.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=73)** When using a relatively small data set, this is achievable in a relational database.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=79)** However, where this starts to become challenging, is if we're looking at tables with many rows, or, if Matt's and Kat's, don't have a second degree friend in common.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=89)** Now, let's turn our attention to a typical document database structure.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=94)** For example, on GO.db.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=96)** There are a number of ways of how we could do this, but the most likely approach would be the one above.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=101)** For each of our objects, we would have a friend's array, which stores the IDs of friends of that particular object.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=108)** Whilst this looks different to our relational database example, conceptually, how we'd answer this question, is very similar.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=116)** We would go to the Kat object, and retrieve the friend's array, and do the same again for the Matt object.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=122)** We would then look to see which values, in the respective friends arrays matched, giving us the answer of mutual friend, Lara.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=130)** Similar to the relational example previously, when using a relatively small data set, this is not problematic.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=137)** Where we start to see the challenges are as follows: As we go beyond second degree friends or connections, more and more objects, depending on the indexes used, may need to be pulled into memory, to handle the matching on the friends field.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=152)** In addition, if for whatever reason, we needed to remove one of the objects, for example, we needed to satisfy a [[Data Privacy]] request.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=160)** We would need to update every single object that referenced that particular friend object.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=166)** With a property graph database, you will spot a fundamental difference when compared to other commonly used database technologies.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=174)** When we know two entities are connected, we will put a physical relationship between them and join them.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=181)** Think of this as Joins on Right, for those of you who are familiar with [[Relational Databases]], Because of how the data is structured in this scenario, we don't need to keep exploring how Kat and Matt might be connected.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=195)** We just take for granted that, if that connection is there, we'll find it.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=200)** And, you can clearly see, that we'll very quickly find that Lara is the acquaintance in common, to introduce both Kat to Matt.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=208)** And because of those physical connections we have with our data entities, looking for third degree, fourth degree, nth degree connections, are not a problem here.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-neo4j/why-graph-databases?u=76281980&t=217)** We just follow those relationships, until we find that connecting path.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Graphic Design]] (2), [[Databases]] (1), [[Data Privacy]] (1), [[Relational Databases]] (1)
> **CLI Commands:** find (5)
> **Analogies:** for example (2), similar to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)
> **Speakers:** - why (1)

#### [Good graph database use cases and bad graph database use cases](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=0)** - [Instructor] Good graph database use cases, bad graph database use cases.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=5)** For most problems, you could use a graph database instead of another database.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=9)** And this is true with many database technologies.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=12)** However, there will be scenarios where a graph database may be a less than optimal choice.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=17)** This doesn't mean you should never use a graph database in these scenarios, but if you find that the bulk of your queries are not asking graphy questions then a graph database may not be the best choice.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=29)** So let's start by taking a look at what we would consider to be good graph database use cases.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=36)** When thinking about your data, if you find yourself asking how entities within your data might be connected, for example how might two [[Microsoft Products|products]] be related or the different ways that two people may be connected.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=49)** Or you're looking at independences for example, figuring out what systems are impacted by local outage or how you might reroute a journey based on road closures.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=58)** Or perhaps understanding the relationship itself between entities, such as fraudulent activities associated with a card.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=65)** These all would be great examples of where you'd use a graph database.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=69)** Whenever you find yourself thinking about entities in relation to other entities this would be what we would call a graph shaped problem.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=78)** Now let's take a look at examples where a graph database may not be the best choice.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=84)** If you find yourself needing to investigate long lists of data.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=88)** For example, you want to find out the average sales figure for a region for the past month or quarter or year, or if you're looking to store and retrieve binary data such as images and generally not looking specifically at how or why data entities are connected to each other then these are not good graph database use cases.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=107)** This is not to say you cannot use a graph database for these examples, but if these are the primary queries you're looking to run then it would make sense to consider looking at other storage technologies.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=117)** So let's have a look at some examples based on a typical life at a college campus.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=123)** In our first example, let's say the college wants to analyze quarterly fees collected for course Math 101.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=130)** This is not a connected data problem as this does not look at any relationships within the data but, is merely looking at collected fees across different time buckets.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=139)** In our second example, let's say the school is rolling out a new website and they need somewhere to store images along with their descriptions.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=147)** The requirement here is to store binary data, i.e. the image, this would not be a good fit for graph [[Databases]].
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=154)** Although a graph database could help with the storage of the description, along with the URL of where the image lives and its own respective data store.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=163)** In our third example, let's say the college is looking to deliver some exam papers to various campuses and remote locations and are deciding on logistics for it, such as route planning and predictive delivery times.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=175)** This would be a good example of a connected problem as we would be looking at different roads, known closures, and calculating root costs best and expected travel times.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=185)** In our fourth example, let's say the college is building a course recommendation system for students based on past historical selections.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=193)** As we're looking to understand the relationship between what courses a student has selected previously, the ratings they provided, and then the courses they subsequently selected.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-neo4j/good-graph-database-use-cases-and-bad-graph-database-use-cases?u=76281980&t=204)** This would be a good example of a connected problem to use a graph database with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Databases]] (1)
> **CLI Commands:** find (5), make (1)
> **Analogies:** for example (3), such as (3)
> **Env Vars:** url (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)

#### [Introducing Neo4j: A property graph database](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=0)** - [Instructor] Introducing [[Neo4j]].
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=3)** So let's take a look at the Neo4j graph database, which is the focus of this course.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=8)** Neo4j is a native property graph database.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=13)** So what do we mean by native?
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=15)** Native means that it has been built from the ground up to accommodate graph structures, from how the data is stored on disc through to how it is queried and held in memory.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=26)** It has a diverse property ecosystem, including plugins such as the graph [[Data Science]] plugin, A pop plugin, as well as the ability to create your own.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=36)** There are also a number of graph applications that connect to the database such as blue, a visualization tool, browser which we'll be using through the course and many others including community developed ones.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=49)** There are a number of ways that you can connect to Neo4j including via the browser or command line, if you're going to be using the query language direct and you can also use a number of drivers that are available including Spring, [[Java]], dot net, [[Python (Programming Language)|Python]], and [[JavaScript]], as well as many other drivers that have been created by the community supporting other programming languages.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=73)** And you have other options as well such as connecting to [[Databases]] via the [[Java Database Connectivity (JDBC)|JDBC]] connector.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=79)** And there are a number of ways you can use the product.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=81)** You have an option of a cloud version, a downloadable version, and a Sandbox version which we're going to be covering now.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=88)** So let's take a look at the Neo4j Sandbox.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=91)** So you can think of this bit like a cloud version of the product, so you don't have to download anything.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=96)** And it is a trial version of Neo4j and that trial can last for up to 10 days.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=102)** It has many different sample data sets available and you can have a blank database to work with and you can have as many trial sandboxes as you like.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=110)** And we will be using the Neo4j Sandbox for the duration of this course.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=115)** Then you have Neo4j aura.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=117)** So this is Neo4j's database as a service.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=119)** So this is a cloud version of the product and there is no need to administer the database.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=125)** This is all handled by Neo4j and there is a free version of Neo4j available.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=131)** This has up to 50,000 nodes and 175,000 relationships which is more than enough for experimenting with different projects.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=139)** Last but not least you also have the Neo4j server option.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=143)** You can operate it from your operating command line.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=146)** And this is where you can also use the community edition version of the database.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=150)** So you have a couple of options.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=152)** You can either download database and administrate yourself via the command line, or you can also use the Neo4j desktop tool, which is a downloadable product.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=162)** And it'll give you a nice environment to work with the database.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=166)** So you can think of this as a developer friendly wrapper.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=171)** So something to bear in mind that databases are created via Neo4j desktop are the enterprise edition only.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-neo4j-a-property-graph-database?u=76281980&t=178)** So you will need to check the licensing requirements around that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neo4j]] (14), [[Databases]] (2), [[Data Science]] (1), [[Java]] (1), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is a  (5), means that (1)
> **Tools:** command line (3)
> **Analogies:** such as (3)
> **CLI Commands:** python (1)
> **Env Vars:** jdbc (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Is this a connected data problem?](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-is-this-a-connected-data-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-is-this-a-connected-data-problem?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-is-this-a-connected-data-problem?u=76281980&t=5)** - [Instructor] Is this a connected data problem?
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-is-this-a-connected-data-problem?u=76281980&t=8)** It's time for you to have a go.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-is-this-a-connected-data-problem?u=76281980&t=11)** You're going to try and determine whether the following scenarios are a connected data problem.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-is-this-a-connected-data-problem?u=76281980&t=16)** We'll continue our theme of college life.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-is-this-a-connected-data-problem?u=76281980&t=19)** So thinking about students at a college, are the following a connected data problem?
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-is-this-a-connected-data-problem?u=76281980&t=25)** Identifying the most influential, identifying the average grades, identifying who lives closest to each other, identifying the most popular subject.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### [Solution: Is this a connected data problem?](https://www.linkedin.com/learning/introduction-to-neo4j/solution-is-this-a-connected-data-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/solution-is-this-a-connected-data-problem?u=76281980&t=0)** - [Instructor] Is this a connected data problem?
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-neo4j/solution-is-this-a-connected-data-problem?u=76281980&t=9)** So let's take a look at our answers to our connected data problem questions.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-neo4j/solution-is-this-a-connected-data-problem?u=76281980&t=14)** Identifying the most influential person is a connected data problem.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-neo4j/solution-is-this-a-connected-data-problem?u=76281980&t=19)** To determine if someone is influential would involve having to look at how they're connected to each other, the strengths of those connections, who's connected to those connections, and so forth.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-neo4j/solution-is-this-a-connected-data-problem?u=76281980&t=31)** Identifying the average grade is not a connected data problem.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-neo4j/solution-is-this-a-connected-data-problem?u=76281980&t=35)** All we need to do here is to gather up all of the grades and then apply an average and not really look at anything else.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-neo4j/solution-is-this-a-connected-data-problem?u=76281980&t=42)** Identifying who lives closest to each other can easily be a connected data problem, especially if we're interested in things such as distances based on route planning, what are the shortest paths to take, any different routes available, associated costs, and so forth.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-neo4j/solution-is-this-a-connected-data-problem?u=76281980&t=60)** Identifying the most popular favorite subject is not a connected data problem.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-neo4j/solution-is-this-a-connected-data-problem?u=76281980&t=65)** Again, much like the average age, all we're doing is looking at the most popular subjects in isolation.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-neo4j/solution-is-this-a-connected-data-problem?u=76281980&t=72)** However, it's probably worth mentioning that we could turn the average grade and most popular subject questions into connected data problems if we wanted to see if there was connections based on student locations, courses, teachers, and other factors.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-neo4j/solution-is-this-a-connected-data-problem?u=76281980&t=90)** In this instance, we're starting to explore connections within the data, and with this new twist, there certainly could be some connected data problems in there.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### [Anatomy of a property graph](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=0)** - [Instructor] Anatomy of a property graph database.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=3)** Let's start off by looking at the key components of a property graph.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=7)** First of all, we have our discrete entities, which we call nodes.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=12)** You may know them as vertices if you're familiar with graph theory.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=15)** Then we have a connection that joins the nodes, which we call a relationship, or edges, if you're familiar with graph theory.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=23)** Relationships will always have a direction when we add them, but we don't necessarily need to use direction when we are querying our data.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=31)** Then we have a way to categorize the nodes, which are called labels, and a way to categorize the relationships, which is called the type.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=39)** Last but not least, we can further describe our graph through the use of properties.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=44)** We use a key value pair construct to describe them, and properties can be applied to both nodes and relationships.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=51)** So let's have a look at the anatomy of a property graph by walking through a simple example.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=57)** Jane, a customer at a store, buys a pair of sunglasses, one of the [[Microsoft Products|products]] available for sale, on January 5th, 2022.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=65)** So let's split this scenario out into the components, based on our picture.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=70)** Thinking about the repeatable components in the scenario, what would we categorize, or put into categories?
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=75)** We have customers, a category, buying products, another category.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=80)** Jane is a customer, sunglasses are a product, and typically, customers buy products.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=85)** Now let's apply the more detailed information that we have, the more descriptive information.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=90)** In this specific example, we know that there's a customer named Jane, there is a product of type sunglasses, and that this particular buy action took place on January 5th, 2022.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=102)** I'm just using the ISO standard for displaying the dates in this example.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=106)** Last but not least, Jane buys sunglasses, rather than sunglasses buying Jane.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=112)** So we have an arrow to indicate who owns this relationship between customer and product.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=118)** So let's now replace our images with something that looks a bit more graph-like.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=124)** We've replaced Jane and sunglasses with nodes.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=128)** We've also represented the buying action with an arrow.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=131)** This is the relationship between our two nodes, with the direction showing ownership of the relationship.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=138)** We have also added further information to our graph through the use of properties.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=142)** In our example here, that's for the name of the customer, Jane, the date of the purchase, January 5th, 2022, and the type of product, sunglasses.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=152)** And we've also added labels to our nodes, of customer and product.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=156)** So that's the more generic view of what's happening in our graph data.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=161)** A quick note on modeling.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=163)** There is much discussion of when a label is a label and when a property is a property; this will change based on what questions you want to ask of the data.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-neo4j/anatomy-of-a-property-graph?u=76281980&t=171)** Modeling graph data is outside the scope of this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3)
> **Definitions:** is a  (4), is called (1)
> **Env Vars:** iso (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Getting up and running with Neo4j](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=0)** - [Instructor] You'll need to go to [neo4j.com/sandbox](https://neo4j.com/sandbox), and you'll be greeted with this page.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=7)** We're going to be pressing the Launch the Free Sandbox button, and you'll be presented with a login page.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=13)** You'll have the choice to either register with an email address and password, or login via single sign on.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=21)** For the purposes of this course, we're going to be using the blank sandbox.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=25)** So you'll need to scroll down and you will see the blank sandbox.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=29)** As the name suggests, it's a completely empty database instance where we'll be able to bring in our own data.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=35)** So select the blank sandbox and then press the create button at the bottom left hand side of the screen.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=44)** And the sandbox is now available to use.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=47)** So a quick note about the sandbox.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=49)** As we've mentioned before, you can have it for a maximum of 10 days.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=53)** Initially you have up to three days before the sandbox expires, and you can extend this for a further seven days by pressing the down arrow next to the open button, and you'll see an option to extend.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=65)** So you'll be asked to fill out a form with further information, and then your sandbox will be extended for an additional seven days.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=72)** Do bear in mind, that the maximum you can have a single sandbox is for 10 days, after which it'll no longer be available on the sandbox environment.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=81)** You are able to have more than one sandbox.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=84)** And for the purposes of this course, do not worry if your sandbox expires, you can always create a new blank sandbox and run our load scripts accordingly.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=94)** Let's take this opportunity to now press the open button, and this is going to launch the [[Neo4j]] browser.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=101)** Do bear in mind that when you run the browser for the first time, it may take a few moments for it to appear.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=107)** Please do be patient and if something happens, don't feel afraid to close it down and try pressing the open button again.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=115)** And there we go, our blank sandbox is now ready to be used.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=121)** I'm going to use this opportunity to introduce the Neo4j browser a little bit more fully.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=127)** Irrespective of what flavor of Neo4j you decide to use, you'll most likely have your first experience with the Neo4j browser.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=135)** Neo4j browser is a graph app, and a graph app is an application that runs on top of your Neo4j graph database and gives you an easy way to interact with your data.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=146)** The browser is a developer aide that allows you to write and test out queries using the cipher query language and it allows you to also visualize your results.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-neo4j/getting-up-and-running-with-neo4j?u=76281980&t=155)** It's a great starting point for getting hands-on experience working with Neo4j.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neo4j]] (8)
> **UI Navigation:** go to (1), scroll down (1), select the (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** you'll need (2)
> **URLs:** [neo4j.com](https://neo4j.com) (1)
> **Speakers:** - [instructor] (1)

#### [Hello, world!](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=0)** - [Instructor] Hello, World!
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=2)** So, we've got the [[Neo4j]] sandbox up and running.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=5)** So let's go and write a sample query.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=8)** And is traditional with all programming languages, we are going to be writing a Hello World query.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=13)** So, we're going to be doing that based on this statement you can see here.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=17)** You, a Learner, says Greeting with message "Hello, World!"
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=21)** And hopefully, it should be pretty straightforward to see that our discrete entities are going to be Learner and the Greeting.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=28)** Those would be the labels for our notes, and that they're connected with a relationship with the type "SAYS", and we've got some properties on there as well.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=36)** So, we've got the name of the student, so, I'm going to use me, and we've got our greeting, which is "Hello, World!"
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=43)** So, in the browser, we're going to create some data to begin with.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=47)** So, here is our CREATE statement.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=49)** So, you can see we are creating a couple of nodes here, and we've got a relationship that's going to connect those two nodes together.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=56)** Don't worry too much about the syntax, we're going to be going into that in a bit more detail later, but hopefully this should be pretty straightforward to follow and understand.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=66)** Now, this is going to create some data for us.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=68)** And now, let's have a look at our created data.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=73)** So, in this query, what we're going to do is match all of the nodes that have a learner label on them, and I'm going to assign them a reference called "me" I'm calling it me because I know it's just a data about me in there, but let's return that.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=87)** And we've got the Lju node there.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=89)** So what we can do is we can click on that node, and you can see in the bottom of the pane, we get some information.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=95)** So there, we can see it's a node with the label of Learner, and it has a property of name with the value of Lju.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=103)** And what you can do in browser is double click on nodes, and what will happen is it'll go away and expand all of the nodes that are available.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=112)** And if you want to cancel that, you can just float back onto the node, and you'll have this option to just get rid of them.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=118)** I would like to have a look at the data that's associated with this node, so I'm going to double click on there again, and you can see we've got our greeting node there, which has a property with the key of "message" and the value of "Hello, World!"
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=131)** And if I just drag this node over here, you can see our relationship as well, that has the type of "SAYS".
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=137)** So, that query just returned one node, and we explored our data by double clicking on the node to expand out an existing relationships.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=146)** What we could do as well is write a query to bring everything back in one go.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=151)** So, in the last query we're going to be exploring in this chapter, this query is going to be matching a pattern.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=157)** So here, we are looking to find all of the nodes that have a Learner label that are connected in some way to a node with the Greeting label on there, and that RETURN star says return everything.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=170)** So let's have a look at that.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=172)** There we go.
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-neo4j/hello-world?u=76281980&t=173)** That query's returned all of the data that we created in our first statement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neo4j]] (1)
> **CLI Commands:** node (10), find (1)
> **Env Vars:** says (2), create (1), return (1)
> **UI Navigation:** click on (3)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Introducing Cypher](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=0)** - [Instructor] Introducing Cypher.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=2)** Cypher is a graph query language for [[Neo4j]].
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=6)** And as well as being used in Neo4j, it is used in a number of other [[Databases]], such as RedisGraph and SAP HANA Graph.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=12)** It is a declarative language.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=15)** So this means, unlike an imperative language where you need to give specific instructions as to how to execute a query, a declarative language you specify what query you'd like to run, and the query engine figures out how exactly to implement it.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=30)** And within Cypher, everything is a pattern.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=33)** Always think pattern.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=35)** So a lone node is a pattern.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=38)** A pair of nodes with a relationship is a pattern.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=41)** Or a path is a pattern.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=43)** So if you cast your minds back to our "Hello, world!" example, we had a lone node where I was matching me, learner.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=51)** That is a pattern.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=52)** Along with our pattern of when we had learner, rail, greeting.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=57)** And you've got an example here from our "Hello, world!" chapter.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=60)** So everything is a pattern.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=62)** Let's take a look at how we represent nodes within Cypher.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=66)** Everything in round brackets in Cypher is a node.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=70)** If I want to have a reference to a node, so think of reference as a variable somewhere where we store information about the node as part of our query, we include a reference name inside round brackets.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=83)** If we want to refer to a label of the node, so think about our categories, then we do that using colon label.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=91)** So everything to the right of a colon is a label.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=95)** And in our example here we've got a reference and a label for our node.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=99)** And last but not least, if we want to refer to properties within our node, we use curly braces, and we use key value pair syntax for that.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=110)** So in our final example here, we've got a reference, we've got a label to our node, and we've got a property.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=117)** This'll make a lot more sense as we work with more queries in Cypher during the course.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=124)** Let's take a look at how we represent relationships in Cypher.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=128)** So there are a number of ways to represent them.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=130)** If you're just interested in how two nodes are connected and you're not interested in the direction of the relationship or any types, then you can just use dash dash as you've got here on the left.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=143)** If you are interested in the direction of the relationship then you can use dash dash and an arrowhead, and we use square brackets to represent relationships in Cypher.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=154)** So this would be for relationship types or properties and you can have them just empty as well.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=160)** So the example we've got here on the right is perfectly valid, where we are looking for a relationship in a certain direction, but we've not specified any more information about the relationship.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=171)** If we'd like to create a reference for the relationship, so let's say we want to get back some information about the properties in there, then we can include a reference inside the square brackets in a similar fashion we did for nodes being a reference name inside round brackets.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=187)** If we want to refer to the type of relationship, then we use colon type.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=193)** So everything to the right of the colon inside the square brackets refers to the relationship type.
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=199)** And this example here we've also got a reference for that relationship.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=203)** And last but not least, if we want to refer to properties inside a relationship, we use curly braces in the same way we did for nodes, using key value pairs.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=213)** And in our final example here we've got a relationship that has a reference or a variable for that relationship.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=220)** We've got a type indicated by the colon type.
>
> **[3:43](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-cypher?u=76281980&t=223)** We've got properties for that relationship included in the curly braces, and we've got a direction for that relationship.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neo4j]] (2), [[Databases]] (1)
> **Definitions:** is a  (10), refers to (1)
> **CLI Commands:** node (9), make (1)
> **Env Vars:** sap (1), hana (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Your first Cypher queries](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-your-first-cypher-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-your-first-cypher-queries?u=76281980&t=0)** - [Instructor] Your first cypher query.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-your-first-cypher-queries?u=76281980&t=7)** So, it's your turn to have your very first hands-on experience with writing some cypher.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-your-first-cypher-queries?u=76281980&t=14)** So I know we've not gone through any of the syntax yet, but I would like you, based on our hello world example, to have a go at putting together the following query.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-your-first-cypher-queries?u=76281980&t=24)** So the query you want to do is to create some data based on the following statement.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-your-first-cypher-queries?u=76281980&t=30)** You, a learner with name, your name, says the greeting with the message "Nice to meet you!"
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-your-first-cypher-queries?u=76281980&t=37)** Once you've done that, have a go at querying that data and I want you to find all of the learners.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-your-first-cypher-queries?u=76281980&t=44)** And again, if you get a little bit stuck, do refer back to our hello world chapter.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-your-first-cypher-queries?u=76281980&t=49)** Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Your first Cypher queries](https://www.linkedin.com/learning/introduction-to-neo4j/solution-your-first-cypher-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/solution-your-first-cypher-queries?u=76281980&t=0)** - [Lulu] Your First Cypher Queries.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-neo4j/solution-your-first-cypher-queries?u=76281980&t=8)** So hopefully you managed to succeed with that task.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-neo4j/solution-your-first-cypher-queries?u=76281980&t=11)** Again, you had the reference of our hello world chapter to help you with this.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-neo4j/solution-your-first-cypher-queries?u=76281980&t=16)** So let's have a look at a couple of queries to help answer those questions.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-neo4j/solution-your-first-cypher-queries?u=76281980&t=20)** So to answer the first question which was to create some data based on you, a learner with the name, your name, says greeting with the message "Nice to meet you."
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-neo4j/solution-your-first-cypher-queries?u=76281980&t=30)** This is a query that you could have used.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-neo4j/solution-your-first-cypher-queries?u=76281980&t=35)** And for our second question, which was to find all of the learners, this is a query that you could have used.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-neo4j/solution-your-first-cypher-queries?u=76281980&t=41)** So don't worry too much if you don't quite understand the queries that we've written.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-neo4j/solution-your-first-cypher-queries?u=76281980&t=46)** We're going to be going through those later on in the course but this was just an opportunity to get your hands on some Cypher and if you feel like exploring and experimenting, please do.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Speakers:** - [lulu] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Reading Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing the course data set](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=0)** - [Instructor] Introducing the course data set.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=3)** Let's take this opportunity to introduce the data set we're going to be using for the remainder of the course.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=8)** We're going to be using a data set based on the Royal Academy.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=12)** The Royal Academy is an arts college which runs a number of courses, both on campus and with partner universities worldwide.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=20)** The data we've got available to us includes student names, what state they're from, contact information, such as telephone number and email address as well as graduation year, GPA score, what program they've enrolled into and if they've studied abroad, in which country.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=36)** We're going to be using a flat-file form of this data, using the pre-provided script to load the data into our database.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=44)** As is true with all data problems, we need to have a think about how we're going to use the data.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=49)** The most common approach to handle this question is to come up with a data model.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=54)** A data model is a visual representation of key data elements and how they relate to each other.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=61)** Depending on the questions being asked, a data model can look different, even if the same data is being used.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=69)** This is the data model that we're going to be using for exploring the Royal Academy data set.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=74)** Whilst how to model data for a graph database is outside the scope of this course, we can make some observations.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=81)** Student is the center of our data universe, and this would make sense, as all of the relationships we'll be looking at are related to students in one way or another.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=91)** Nodes such as states, county, year and program are going to allow us to easily explore connections between these and the student nodes, as well as each other.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=103)** The grade node doesn't directly come from our data, as you may have spotted by our flat file, but it is a useful way for us to aggregate and convert GPA scores into grades, again, for further analysis and data exploration.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=117)** I've taken the Liberty of creating some arbitrary grade buckets for the purposes of this course.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=123)** Now let's load some data.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=125)** You'll find the data, along with the load scripts, available on this [[GitHub]] repository.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=131)** You don't need to download anything, and everything is available for you to just copy and paste into the [[Neo4j]] browser.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=138)** You can find this GitHub repository link also on the landing page of this course.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=145)** So let's go over to the repository now.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=147)** This is the landing page of the repository for this course, and you find the links here to the code snippets that we've used in the various chapters in this course.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=156)** What we're interested in now is the Introducing the course dataset link in the Reading data section.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=163)** So click on that now, and you'll be directed to this page.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=168)** So what you need to do is copy all of this.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=170)** So if you're on [[Windows]], that's Control + C, Control + A.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=174)** If you are on a Mac, that's Command + A, Command + C, and we will use this in the Neo4j browser.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=185)** So pop over into the Neo4j browser and paste all of those statements you've just copied into the query bar and press the blue triangle on the right to run all of those queries.
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=199)** This will take about 30 to 40 seconds.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=202)** So be patient with it, and if you run into any issues, all you need to do is just copy and paste those statements again and press the blue triangles.
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=211)** There we go.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=212)** That's all of the data loaded, and we're going to be exploring it shortly as we learn about Cypher in the next chapter but for now, let's have a quick look at what's in the database.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=221)** If you click on the database icon in the top left of the screen, you'll get some database information.
>
> **[3:49](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=229)** Here, we can see what node labels are in use, along with relationship types and property keys, and you can also see how many nodes and relationships we've got currently in the database.
>
> **[4:00](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=240)** What you can do here as well is if you click on the labels, the types or the keys, you can get some sample data back.
>
> **[4:07](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=247)** So let's click on Country.
>
> **[4:11](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=251)** There we go.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=252)** We've got some sample countries back, and if you remember from the "Hello World" chapter, if I'll double click on one of these nodes, it's going to expand out all of the other connecting nodes.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=261)** So let's do that now.
>
> **[4:26](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=266)** There we go.
>
> **[4:27](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=267)** We can see all of the students that are connected to the China node.
>
> **[4:30](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=270)** Now, you may find that your nodes come back blank.
>
> **[4:34](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=274)** So for example, they've got no names.
>
> **[4:36](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=276)** If you find that happens, this is easily resolved.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=280)** Just click on the node in question.
>
> **[4:42](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=282)** I put the top here.
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=283)** So for example, students, and you'll see, at the bottom of this pane, I have got an option here for captions.
>
> **[4:50](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=290)** So I can go away and select a different label if I so wish, but I could select email, for example, here, and I'll show email on the nodes, but I'm going to stick with first name.
>
> **[5:01](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=301)** You can also change the color of your nodes, if you like.
>
> **[5:04](https://www.linkedin.com/learning/introduction-to-neo4j/introducing-the-course-data-set?u=76281980&t=304)** So if you don't particularly want to use orange, but you want to, say, use red to represent the student nodes, you can do this here as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neo4j]] (3), [[GitHub]] (2), [[Windows]] (1)
> **CLI Commands:** find (5), node (4), make (2)
> **UI Navigation:** click on (6)
> **Analogies:** for example (3), such as (2)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** gpa (2)
> **Tools:** github (2)
> **Cross-References:** in the next (1)

#### [MATCHing nodes](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=0)** - [Instructor] "MATCHing Nodes."
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=2)** Let's start at looking at the Cypher query language, firstly, with how we retrieve nodes.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=8)** In Cypher, we use MATCH commands for retrieving nodes and relationships.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=12)** We can also apply ranges on properties for more fine-grained querying.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=16)** Let's now take a look at some examples of how to retrieve nodes in the browser.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=21)** If I wanted to return all of the nodes in the database, I would do this by doing MATCH (n) RETURN n.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=30)** So if you recall, round brackets represent nodes.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=33)** n is our reference.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=35)** That's how we can get at the data that the engine returns.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=37)** And then RETURN n is the syntax we use for bringing that data back.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=41)** Now, if you recall, we do have over 25,000 nodes.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=45)** I don't want to return all of those.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=47)** So I've got this syntax of LIMIT 10 to just limit it to the first 10 results.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=56)** If I wanted to be more specific with my query and say, "Actually, I just want to return Student nodes," so only nodes with the label of Student, then I use :label name, so here, :Student, to let the engine know that.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=72)** And here, I'm going to RETURN n again.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=74)** And we have many students in our database, so again, I'm limiting the results to first 10 records the database finds.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=84)** If I wanted to return all of the nodes with a particular property, so in this example here, let's say I wanted to return all of the nodes in the database that have got a property key of first with the value of Alia, then I would use the curly braces to return that data back.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=100)** So you can see the curly braces are within the node round brackets.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=105)** This is called inlining the property.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=108)** So again, I'm going to RETURN n.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=110)** And that's going to bring me back all of my nodes that have a value of Alia.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=118)** Now, I happen to know that Alia is likely to be a Student node.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=124)** And actually, what I wanted to do was bring back all of my student nodes that have this property of first equals Alia.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=132)** So I should specify a label, and this is very good practice because it allows the engine to know that it only needs to look at Student nodes, so this should result in faster queries.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=147)** So we looked at two examples where we used the property name.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=151)** And I referred to how we use the property as inlining.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=155)** Another way that we can look at properties on our nodes and our relationships, for that matter, is using the WHERE clause.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=164)** So if you now look at the query window, we've got a query that will do exactly the same request as we had earlier.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=172)** But the difference here is that we've pulled out the curly braces that we had inside our MATCH line and converted that inline property into an equivalent one in our WHERE line below the MATCH line.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=185)** So we use our reference, so that's n.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=187)** And here, we've got WHERE n.first = Alia.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=191)** And then again, we're going to RETURN n.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=194)** And there are Alia nodes again.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=198)** So where using the WHERE clause is really useful is when we want to do range queries.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=204)** So here's an example of where we want to match all of our Year nodes, and we only want to return the Year nodes where the value is higher than 2006.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes?u=76281980&t=213)** So that's what we've done with the WHERE clause here.

> [!info]- Semantic Content
>
> **Env Vars:** return (5), where (5), match (4), limit (1)
> **SQL:** where (5)
> **CLI Commands:** node (2)
> **Definitions:** is called (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [MATCHing nodes and relationships](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=0)** - [Instructor] Matching nodes and relationships.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=3)** So, let's have a look at how we can connect nodes to relationships now.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=10)** If I wanted to match all of my Alia student nodes, specifically ones who have studied abroad, this is a way I could do it.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=21)** So, what we've got here, we've got our familiar student node set up here.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=25)** You'll notice on the right, we now have another node, a node with the label "Country" and a reference of C.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=33)** And they've been joined together with two dashes.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=36)** And if you recall, two dashes can represent a relationship.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=40)** So, here we are looking to match node, relationship node, and return star, and star means everything.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=48)** So, this is going to return everything that matches this pattern of a student node with the name Alia that has studied abroad.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=57)** And there's our data. We have got our results there.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=60)** So a quick tip here, if you want to expand the size of this frame you can, just look at the top right, and you'll see this button with the two diagonal arrows.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=70)** Click that to expand the scene and click it again to return the frame back to its original size.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=78)** So, we could rewrite that query we've just seen using the relationship type as well as relationship direction.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=85)** And if you recall, all the information about relationship is contained within square brackets and it's good practice if you know either the relationship direction, the relationship type, or both, to include all of that in your query, as it does mean your query will run faster.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=105)** So, let's have a look at how we'd access properties within a relationship.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=111)** So, we use the same approach as before.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=113)** So, if you know exactly what the property is, we use the curly braces inside, so we inline that property inside the square brackets in the similar approach you would do for the nodes in the round brackets.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=124)** And if we want to do a range query, then we can use the "Where" clause.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=129)** So in this example here, if I wanted to return all of the students that have got a GPA score above 3.98, if you remember from our data model the GPA score was being stored within a relationship and not a node.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=143)** So here, I've got a reference of R inside my relationship square brackets and here I'm calling where r.GPA is greater than 3.98.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=154)** Another thing that's going on here is you'll spot we're returning properties.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=159)** So, we don't always want to visualize circles and arrows, although it can be very handy for us to inspect our data.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=166)** Sometimes we want to get a tabular output back and this is exactly something you can do with near for J.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=172)** And that's what we're going to do here.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=174)** We're going to be returning the student's first name, last name, and their GPA score.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=180)** And there we go. So, let's take a look at one more example.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=185)** We're going to go back to our Alia student node.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=188)** And this example here, we've got a couple of things going on.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=191)** So firstly, I'm demonstrating that we can have all of our property inspection happening in our "Where" clause.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=198)** So, here we're looking of a range query of Alia's, who've got a GP of higher than 3.0 as well as obviously specifying that we're looking for Alia in the student nodes.
>
> **[3:29](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=209)** And another thing we can do as well is we can change the references of our data.
>
> **[3:36](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=216)** So in this example, here in the return line, maybe I don't want to return s.first, s.last, and so forth.
>
> **[3:43](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=223)** And what I can do is use the "AS" keyword to change the names of that.
>
> **[3:49](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=229)** So in this example here, I'm going to return s.first as name.
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=233)** I'm going to return s.last as family name.
>
> **[3:57](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=237)** Now, family name has a space in there.
>
> **[4:00](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=240)** So, if I'm working with spaces or any other awkward characters, I can use tactics.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=245)** So, that's what I'm doing here.
>
> **[4:07](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=247)** And I'm returning r.GPA as GPA.
>
> **[4:11](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=251)** So, if I run that query, I've got my tabular output once more and I've got more friendly names for those headers.
>
> **[4:20](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=260)** So, that's useful if I'm going to export that data out.
>
> **[4:23](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=263)** And you'll see in examples later on the course where we can rename references and data in our queries to use them elsewhere.
>
> **[4:33](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=273)** So in conclusion, it's all about pattern matching.
>
> **[4:37](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=277)** As we go deeper into querying the database with Cipher, you will never go wrong if you always remember to think in patterns.
>
> **[4:45](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=285)** As we said previously, Cipher is a pattern matching language.
>
> **[4:49](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=289)** Anything after match is a pattern, and that can be a lone node, two nodes connected by relationship or many nodes connected with many relationships.
>
> **[4:59](https://www.linkedin.com/learning/introduction-to-neo4j/matching-nodes-and-relationships?u=76281980&t=299)** Always think everything to the right of match is a pattern.

> [!info]- Semantic Content
>
> **CLI Commands:** node (9)
> **Env Vars:** gpa (6)
> **Definitions:** is a  (4)
> **Versions:** 3.98 (2), 3.0 (1)
> **Best Practices:** good practice (1), remember to (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Counting and aggregating data](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=0)** - [Instructor] Counting and aggregating data.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=3)** So far, we've looked at a lot of examples where we return visual graphs back.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=8)** This can be really helpful in circumstances where we want to explore the data or visualize connections and find insights.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=15)** However, it's not always about circles and arrows, and we've also seen we can output tabular data as well.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=21)** So more commonly when we use [[Neo4j]], we are using it to leverage the performance it offers under the hood of exploring and querying connected data.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=31)** And the most useful output to us is probably going to be in the form of a results table.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=35)** And it's not that dissimilar to what we'd expect to get when using other [[Database Systems]].
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=40)** As with many other query languages we also have the ability to count, aggregate, and order our data.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=47)** So let's take a look at those functions.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=49)** First, we have count, as the name suggests, this will count something for us.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=54)** This is commonly used when counting out how many nodes or relationships there are in the given situation.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=60)** Collect allows us to gather together nodes, relationships, properties, or other data into an array, either for outputting in a certain way or for further querying and processing.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=71)** For the purposes of this course, we'll just focus on collect for grouping data for output.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=76)** Size allows us to find out how big an array is, along with the length of the string.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=81)** LIMIT, as we've already seen, can help us limit how much data we output in a query or use for further querying.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=89)** This is useful when we just want to look at a sample of data.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=93)** Finally, ORDER BY as the name suggests, will order data for us either in ascending order which is by default or in descending order.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=101)** Let's take a look at some of these.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=103)** So, let's take a look at the count function.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=107)** If I wanted to find out how many students studied abroad, I would match all of the students that had a relationship with the country node and then I would return count s.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=120)** Let's now take a look at collect.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=122)** If I wanted to find all of the students that studied abroad that had the first name of Alia or Colleen and I then wanted to collect their names together according to the same country they've been together, I would do it like this.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=137)** So another thing that's going on in collect is I'm also collating the first name and the last name together.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=143)** You can do that, if you like.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=145)** That's an example of how we can process the data as we go along.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=150)** And there we go.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=151)** And we can see in this example here, that name is now returning arrays and for Brazil and France, we have an array of size two where we've got both an Alia and a Colleen studying there.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=164)** Now, let's take a look at size.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=167)** So in this example, I want to find out the number of students that have studied per country and this example here, what I'm going to do is I'm going to collect all of the student nodes together and I'm going to give that an alias of students.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=180)** And here, I'm now returning the size of the student's array, so when we collect things as we saw in our previous example, it creates an array.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=187)** So I'm returning the size of the array as number of students and I'm returning the country name as country.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=196)** Let's have a quick reminder of the LIMIT statement.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=200)** So here, I want to find out the first 10 students in alphabetical order based on first name and then take a cut of those.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=208)** So what this query is going to do is it's going to pull up all of the student nodes, it's going to sort them all by their first name alphabetically and then it's going to take the first 10.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=220)** So there we go.
>
> **[3:42](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=222)** And last but not least let's have a look at ORDER BY and size together.
>
> **[3:49](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=229)** So in this example here, let's revisit our query where we wanted to know the number of students who've studied per different country but now I want to order it from the highest number of students per country to the lowest.
>
> **[4:00](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=240)** So here I'm collecting all of my student nodes together in an array called students.
>
> **[4:04](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=244)** And here I'm returning the size of that student's array, I'm also returning the name and what you can see here is I've given the students array a new alias of Students.
>
> **[4:14](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=254)** You can do this, do bear in mind that you have case sensitivity with references as well as properties.
>
> **[4:22](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=262)** So here I am going to return the the size of the Students array along with the country name and here I am ordering by students descending.
>
> **[4:30](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=270)** So this is going to return the number of students per country from highest to lowest.
>
> **[4:35](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=275)** And as we can see India's got the highest number of students studying abroad there.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=280)** Some of the sharper eyed I'd amongst you may have spotted that we used the WITH keywords in our example aggregation, WITH allows us to chain queries together.
>
> **[4:49](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=289)** Think of WITH being conceptually the same as RETURN but allowing us to make changes and add new data for later on in the query, it allows us to keep variables for use as well as being able to mutate data as required.
>
> **[5:03](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=303)** For example, when we use the collect, you can also use the WHERE clause to filter down specific results.
>
> **[5:10](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=310)** So let's take a look at an example of using WITH and WHERE.
>
> **[5:15](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=315)** So here, I've got a query where not only do I want to find out the number of students that have studied in a particular country, but I want to know where there's been at least 150 students.
>
> **[5:27](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=327)** So here in my WITH line, what I've done is I've added that WHERE clause at the end, which says WHERE the size of students, so the size of our array of student nodes that we created with the collect statements is greater than or equal to 150 and then I return those results as before.
>
> **[5:49](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=349)** And there we go.
>
> **[5:51](https://www.linkedin.com/learning/introduction-to-neo4j/counting-and-aggregating-data?u=76281980&t=351)** If you remember from our previous example, we had 20 results returned, now we have 16.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neo4j]] (1), [[Database Systems]] (1)
> **CLI Commands:** find (7), node (1), make (1)
> **Env Vars:** where (4), limit (2), order (2), return (1)
> **SQL:** where (4), order by (2)
> **Cross-References:** as we saw (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Beyond one hop](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=0)** - [Instructor] Beyond one hop.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=2)** So far, we've been looking at queries that go up to one hop.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=6)** For example, nodes on their own to nodes, to relationship, to node.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=11)** Where we really start to see the power of a graph database is when we go beyond one hop.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=16)** This allows us to do things such as cycle between relationships and nodes.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=21)** For example, students to program, back to students, the year and so forth.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=27)** It also allows us to specify how many hops, or otherwise known as traversals, we can make.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=32)** For example, think about the famous Kevin Bacon number.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=36)** We can also do interesting things, such as simple shortest path queries, IE finding the shortest connection between two nodes.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=45)** So let's take a look at some examples.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=48)** So if I wanted to find all of the students who studied abroad, in Greece, in 2011, I could put something together like this.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=57)** So here I am matching a year node with the value of 2011 that is connected to a student node, which is connected to a country node with the value of Greece, and here I'm going to return the first and last names of all of those students.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=78)** I could also write this query in a slightly different way and get the same results.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=83)** So here, I am matching all of the students that have studied abroad in the country Greece, and then I've got that reference of S for students.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=92)** So all of those students that studied abroad in Greece, and then I've got the next part of my match statement, which is for those students, find those ones that graduated in the year 2011.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=104)** So if we bring back those results, you can see we've got the same results coming back.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=111)** So there, we've effectively, now, gone beyond the one hop.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=114)** So now we are going into two hops from our student node.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=120)** Another thing we can do is we can say we don't necessarily want to specify specific relationships, but what we do know is we want to go a number of hops away from our initial node.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=133)** So if I wanted to find out all of the students that are two hops away from Ardella Eaton, as an example, I could do something like this.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=142)** So on the left, I've got my Ardella Eaton student nodes, and a reference of s1 for that one.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=148)** On the right, I have my s2 student node.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=151)** So I'm telling the engine that I just want to bring back student nodes, and I've got a reference of s2 and in the middle there, you'll notice we've got something in square brackets.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=161)** So we're using square brackets, which means we are doing something about the relationship, and here we've got *0..2.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=169)** So if you remember, star means everything.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=172)** So that would say, look at all of the relationships, and then the 0..2 says, well, actually, we're going to scale that down to the number of hops.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=182)** So star is saying, keep hopping, and then 02 says, well, we're going to put a bound behind that.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=187)** So 0.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=188)** So from the Ardella node up to two hops away and bring back those student nodes, and if you remember our data model, you'll remember that the intermediate node we're going to be hopping through, to get to our two hops away, will be something like program or year or state and so forth, and then we're going to return the first and last name for those students.
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=211)** You'll notice we're using a DISTINCT keyword there.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=213)** So all DISTINCT means is just bring us back the distinct results.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=218)** So it could happen that we have some students that have more than one link with Ardella.
>
> **[3:43](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=223)** So for example, maybe they're from the same state and studied the same course, and we're just saying, just bring back one instance of them, not multiple repeats.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=232)** So if you cast your eyes to the bottom of the pane, you will notice we returned over 10,000 records.
>
> **[4:00](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=240)** So there is a lot of connected data in there.
>
> **[4:07](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=247)** So, perhaps, we decided, well, actually we want to be a little bit more specific with our query, and what we're really interested in are all of the students that studied the same course as Ardella.
>
> **[4:18](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=258)** Now, we're going up to two hops out again.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=261)** So what this means is we don't necessarily have to go and look up what course Ardella did because with a graph database, everything is connected.
>
> **[4:30](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=270)** All we need to do is just say, go up and down that studied relationship and then bring back all of the students that studied the same course as Ardella and the same again, we're going to be returning their first and last names.
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=283)** So let's have a look at that.
>
> **[4:47](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=287)** So those are all of the names.
>
> **[4:49](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=289)** Again, quite a lot of students.
>
> **[4:51](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=291)** So we've got something like just under 5,000 students studied the same course.
>
> **[4:56](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=296)** So we've got a database of about 25,000 students.
>
> **[4:59](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=299)** So 20% of our database studied the same course as Ardella.
>
> **[5:07](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=307)** Last but not least, let's have a look at a simple shortest path example, but let's say we want to find out the shortest path between Ardella Eaton and Christiana Boone.
>
> **[5:18](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=318)** So what we're doing here is matching our Adela node, matching our Christiana node, and we've got references for them of s1 and s2 respectively, and then we're going to use a function within Cypher, called shortestpath, and that shortestpath function is basically saying, search for the pattern of s1 to s2.
>
> **[5:39](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=339)** Notice we've got that start in the square bracket.
>
> **[5:42](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=342)** So that's saying unlimited number of hops between nodes to find the two paths, and the shortest path query will basically be smart enough to know, right, this path I'm looking at is longer than the one I've already got.
>
> **[5:55](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=355)** So I'm not going to bother.
>
> **[5:56](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=356)** So it's going to keep going through until it finds the shortest path or a shortest path between those two nodes.
>
> **[6:03](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=363)** So one thing you may spot here is we have this p=.
>
> **[6:06](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=366)** So anything that is a reference name equals and then the [[Representational State Transfer (REST)|rest]] of your pattern, that's what we call a path, and path is just basically something that consists of nodes and relationships in it.
>
> **[6:20](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=380)** So we're going to return that path, which we've called p.
>
> **[6:23](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=383)** So let's have a look, and there we go.
>
> **[6:29](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=389)** We have found a shortest path between Ardella and Christiana, and we can see that path consists of Ardella and Lucinda having a common grade of B, and Lucinda and Christiana have a common program of fashion and textile.
>
> **[6:45](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=405)** As uncle Ben of Marvel's Spider-Man very wisely said, "With great power comes great responsibility," and this is very true when it comes to traversing relationships.
>
> **[6:56](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=416)** Be aware that there are penalties for poorly-written queries.
>
> **[7:00](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=420)** A poorly-written query may accidentally traverse the entire graph, can cause queries to run very slowly and can provide unexpected results.
>
> **[7:12](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=432)** So what can you do to hop with care?
>
> **[7:16](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=436)** Try to use relationship types and directions wherever possible and where it makes sense.
>
> **[7:22](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=442)** The query engine will use that information to apply a pre-filter of data.
>
> **[7:27](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=447)** Also, try to limit how many traversals to make and when it makes sense to do so.
>
> **[7:33](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=453)** So do think about using star and star with a range with extreme care, and a quick note on the above.
>
> **[7:43](https://www.linkedin.com/learning/introduction-to-neo4j/beyond-one-hop?u=76281980&t=463)** This doesn't always apply if you're using graph [[Algorithms]], such as shortest path, because they are designed to run efficiently on the graph.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Algorithms]] (1)
> **CLI Commands:** node (11), find (5), make (2)
> **Analogies:** for example (4), such as (2)
> **Definitions:** is a  (2), known as (1)
> **Env Vars:** distinct (2)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Time to answer some questions](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-time-to-answer-some-questions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-time-to-answer-some-questions?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-time-to-answer-some-questions?u=76281980&t=5)** - [Instructor] Time to answer some questions.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-time-to-answer-some-questions?u=76281980&t=8)** It's your turn now, so have a go at answering the following questions.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-time-to-answer-some-questions?u=76281980&t=13)** You'll find it helpful to refer back to the graph data model for ARU Academy dataset, which we'll show you again shortly.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-time-to-answer-some-questions?u=76281980&t=21)** So why not have a go at answering the following?
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-time-to-answer-some-questions?u=76281980&t=23)** How many students are there in total?
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-time-to-answer-some-questions?u=76281980&t=26)** How many students have signed up to the newsletter?
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-time-to-answer-some-questions?u=76281980&t=29)** How many students have studied abroad?
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-time-to-answer-some-questions?u=76281980&t=32)** What's the most common GPA score?
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-time-to-answer-some-questions?u=76281980&t=34)** And how many students from Georgia have gotten an A grade in animation?

> [!info]- Semantic Content
>
> **Env Vars:** aru (1), gpa (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Time to answer some questions](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=0)** - [Instructor] Time to answer some questions.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=8)** So let's take the look at the answer to our questions.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=11)** Do bear in mind that there's many ways to solve these questions and your query may look different to my query, but as long as we've got matching answers, that's what matters.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=22)** So let's take a look at our first question.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=24)** How many students are there in total?
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=27)** The approach I used was to match all of the nodes with a student label and return the count.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=32)** So my reference is s and I'm returning the count of s and there are 25,000 students in the database.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=41)** Our next question was to find out how many students had signed up to the newsletter.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=45)** The approach I used was to match all of the nodes with the student label, with the property of newsletter: YES as an inline property.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=55)** And I returned the count of those.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=57)** And I found there to be 12,419 students who had signed up to the newsletter.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=65)** Our next question was to find out how many students had studied abroad.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=69)** The approach I took was to match the student node that had a STUDIED_ABROAD_IN relationship with the country node and returned the count of students.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=79)** And I found there to be 3,150 students.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=85)** For our next query, we wanted to find out what was the most common GPA score.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=90)** The approach that I used was to match the students that had an obtained relationship with grade.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=95)** And I've got a reference there for the relationship as if you recall from the data model, our GPA score is stored in that obtained relationship type.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=104)** With that, I collected all of the students into a student's array.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=108)** I then looked at the size of that students array which tells you how many students got the specific score.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=114)** I also returned the GPA score and I'm ordering everything by common from descending order.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=120)** So from the most number of students down to the lowest number of students with that GPA score.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=127)** And I found the most common GPA score to be 3.75.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=133)** Last but not least, the final question that we had was to find out how many students from Georgia had gotten an A grade in Animation.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=142)** The approach that I used was to match all of the student nodes that had a relationship with the state of Georgia.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=149)** I then used that same group of students and extended that relationship of studied to the program with the name of Animation and then still using that same reference to that group of students, I looked at those that had an obtained relationship with the grade node with a value of grade A and then I returned the count of those students.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-neo4j/solution-time-to-answer-some-questions?u=76281980&t=169)** And I found there to be 18 students that are from the state of Georgia that studied Animation and obtained an A.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4), node (3)
> **Env Vars:** gpa (5), yes (1), studied_abroad_in (1)
> **Versions:** 3.75 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Writing Data

[↑ Back to Table of Contents](#table-of-contents)

#### [CREATEing your data](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=0)** - [Instructor] Creating your data.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=2)** Up until now, we've been looking at how to query our data, but wouldn't it be great if we could just add some of our own?
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=9)** So let's have a look at how we create data in Cypher.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=12)** To add new data, we use the CREATES keywords.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=16)** You'll be pleased to hear that we'll be using the same syntax that we've been using for MATCH.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=20)** As a result, everything is a pattern.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=23)** So as with MATCH, everything to the right of CREATE is a pattern.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=28)** Be that a lone node or nodes with relationships.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=32)** Do bear in mind that CREATE does just that it creates data.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=37)** So there'll be no checks to see whether the data already exists.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=41)** If you want to avoid duplicate data, you would need to check first whether that data exists and you can do that using MATCH.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=49)** There is also a MERGE keyword in Cypher, which behaves similarly to an UPSERT if you're familiar with them, however, MERGE is outside the scope of this course.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=58)** One key difference between MATCH and CREATE, you will need to specify a RELATIONSHIP_TYPE and direction when you are creating them.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=68)** And whilst you don't have to use a label for your nodes, you really should consider using them.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=74)** So let's take a look at some CREATE examples.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=77)** Let's take a look at a couple examples we probably shouldn't be creating when it comes to nodes.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=82)** So our first example there we've got CREATE and the brackets.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=87)** So that's a valid statement that will create a node.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=90)** Unfortunately, that node will be blank with no label or properties, so it probably isn't going to be useful in many situations, so you probably don't need to do that one.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=101)** Another example we've got here is CREATE brackets and then the Learner label there.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=107)** So that's going to go away and create a node with the label Learner.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=110)** That'll have no properties.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=112)** So that might be useful in some situations where you need the placeholder node, but you're probably not going to do that too often.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=123)** So let's take a look at creating a node here.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=127)** And here, this node I'm going to create is a Learner node, so a node with the Learner label, with the property of name and Lju, so that may look familiar from our hello world example.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=142)** And I'm just going to create another node here for Alia.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=145)** That's going to help us with our next example.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=150)** So how about creating a new relationship between existing nodes?
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=156)** So we know we've already got the Lju node and the Alia node 'cause we've just made those.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=161)** And let's say we want to create a relationship between the Lju and Alia node, and that's going to be a KNOWS relationship.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=168)** So I know Alia, and I've known her since the 1st of January, 2021.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=175)** So we're going to add a new relationship that will also have a property in there.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=179)** So notice we've got a RELATIONSHIP_TYPE there and a direction, so let's create that.
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=186)** Another thing we can do is we can create an entire pattern, so the two nodes and a relationship connecting those two nodes, all in one go.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=195)** So remember, everything to the right of CREATE is a pattern, and here we're going to create two nodes and the relationship that connects them all in one go.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=206)** So let's take a look at all of the new nodes that we've created.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=213)** And there, you can see, are Sue and Joe node and how they're connected with KNOWS, and the Lju and Alia nodes, how they're connected with KNOWS.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=221)** You may find that when you're doing your queries you don't get an error from the browser, but you also don't get the result you were expecting.
>
> **[3:49](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=229)** One of the causes could well be issues with case sensitivity.
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=233)** In Cypher, NodeLabels, RELATIONSHIP_TYPES, Properties, and References are all case sensitive.
>
> **[4:00](https://www.linkedin.com/learning/introduction-to-neo4j/createing-your-data?u=76281980&t=240)** The convention for how to represent labels, types, and properties are as follows: For NodeLabels we use Pascal case, for RELATIONSHIP_TYPES we use uppercase snake case, and for nodeProperties as well as relationshipProperties we use camel case.

> [!info]- Semantic Content
>
> **Env Vars:** create (7), match (4), knows (3), merge (2), relationship_type (2)
> **CLI Commands:** node (14), find (1)
> **Definitions:** is a  (4)
> **Code Identifiers:** nodeproperties (1), relationshipproperties (1)
> **Speakers:** - [instructor] (1)

#### [Updating and REMOVEing your data](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=0)** - [Narrator] Updating and removing your data.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=3)** Now let's take a look at how we go about updating our data.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=7)** The majority of our updates are handled with the SET keyword and we can use the SET keyword to update existing properties add new properties and add new labels.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=18)** And yes, you can have more than one label on a node.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=21)** There is however, one exception, updating relationship types with SET is not possible.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=27)** We'll show you how to update relationship types in the next video.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=32)** So if you'd like to discard something we will use the REMOVE keyword.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=37)** You can use it to remove a property and you can use it to remove a node label.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=41)** So let's now take a look at some examples of updating and removing data.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=46)** If I wanted to update the date that I've known Alia.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=51)** So it turns out I've known her since 1999 and not 2021, then what I would do is match that pattern and notice I've got a reference there for the relationship because that since property is on the relationship and then I use SETS (indistinct) to the new date.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=73)** If I wanted to further enrich our learner data.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=77)** And let's say in this example I wanted to add Twitter handles and I wanted to add a Twitter handle to the Lu node.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=84)** Then I would match the Lu nodes.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=85)** So they're matching the learner node with the name of Lu and then using the alias that reference I'm going to do SET Lu dot Twitter equals alia (indistinct) which is my Twitter handle.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=100)** If I wanted to add another label to Alia, so let's say I wanted to add an off campus label to her.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=106)** Then I would again, match the Alia node, as you can see there and then use SET Alia Colon off campus.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=114)** So remember we use colon and then the words to represent a node label, so that's what we're doing here.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=123)** And let's go away and have a look at all of those changes that we've made.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=130)** So there we go.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=131)** We've got that data there and you've probably spotted that Alia has changed color.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=136)** So if I float my mouse over the Alia node you'll notice we have not one but two labels now.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=141)** So learner as well as off campus, if I float my mouse on the Lu node, you can see we've got a new property on there called Twitter with the value of LSL.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=151)** And if I float my mouse on the node relationship you can see we've updated that since property.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=159)** Let's now have a look at how we would go around and remove some of those changes.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=164)** So if I wanted to remove that Twitter property that I've just added to myself, then I would match the Lu node and just use the REMOVE keyword like so.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=176)** If I decided that I wanted to remove that additional label that I added to Alia, similar approach, we match Alia and then we use that REMOVE keyword to remove that label.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=187)** So Alia colon off campus.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=191)** And let's have a look at that data that we've just removed.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=195)** So if I hover my mouse over the Alia node you'll notice she's back to just one label.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-neo4j/updating-and-removeing-your-data?u=76281980&t=200)** And if I hover my mouse over the Lu node you'll notice that that Twitter property has gone.

> [!info]- Semantic Content
>
> **CLI Commands:** node (12)
> **Env Vars:** set (5), remove (3), sets (1), lsl (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### [DELETEing your data](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=0)** - [Instructor] Deleting your data.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=2)** Let's now have a look at how we'd go about removing data.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=6)** To do this, we will use the DELETE keyword and it can be used to remove nodes and relationships.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=13)** To remove data, we'll first match what we want to work on.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=17)** And as you remember by now, everything is a pattern.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=21)** And then if we want to delete the nodes, we will need to use DETACH DELETE.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=26)** This means we need to detach the nodes from any existing relationships before we delete them or relationships, where we match the relationship in question we want to change, we will just need to use delete.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=37)** Let's have a look at some examples in the browser.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=41)** So I'm not going to run this query but I'm just going to quickly explain what's going on.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=46)** If we wanted to delete everything in the database, we would use this statement.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=51)** So match brackets N as you know by now, this will match everything in the database and give it a reference of the name N and then DETACH DELETE N, that's going to detach all of the relationships to all of the nodes found in the database and then delete them.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=69)** If I wanted to just delete all learner nodes with the property of name Lu, then here's an example of how I'd do it.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=78)** So here you can see I've matched the node based in the label and the property.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=82)** And then I just do DETACH DELETE L.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=88)** If I wanted to delete the relationship between Joe and Sue, I would match that pattern there.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=96)** So you've got the learner node with the name of Joe, the learner node with the name of Sue.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=101)** I've got the relationship between the two of them, that node relationship.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=105)** And I've got a reference of R and then here all I need to do is do DELETE R.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=111)** And to extend this example a little bit further, if I wanted to delete all nodes in the database that've got a learner label, then I would do it like this.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=120)** So match our learner.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=121)** That's going to match all of the nodes for learner label and then DETACH DELETE L will detach the relationships and then delete all of those nodes.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=129)** So if you're experimenting with delete and you happen to be doing it on the RO Academy data and you accidentally removed something, don't panic.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=139)** You can always rerun that load script from Chapter Two to get everything back to how it was.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=145)** So don't be afraid to experiment.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=148)** So, let's talk about updating relationship types.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=152)** Unfortunately, there is no straightforward way to rename your relationship types.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=156)** You will need to delete them and then recreate those relationships.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=160)** So let's take a look at the flow of how we would do this.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=163)** We would first match the two nodes whose relationship type you would like to update.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=168)** You would then create the new relationship between those two nodes and then finally you'd delete that existing relationship you no longer want.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=177)** Do bear in mind that if you've got a significant number of relationships to update, this could take a while.
>
> **[3:03](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=183)** One thing I'll mention as well is that you've got the plugin APAC which is a cipher helper tool and it does have functionality to manage this better but APAC is outside the scope of this course.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=195)** So let's take a quick look in the browser of how we'd go about updating the relationship type.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=202)** So unfortunately, when we ran our last query, we removed all of our learner nodes from the database.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=208)** So I'm going to create a new one in there and this is using the same query that we used in our previous video.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=218)** So let's say we've decided we want to change the relationship type between Joe and Sue from knows to friend.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=226)** This is a way we'd do it.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=228)** Notice that I'm matching and creating a reference for Joe, Sue and the relationship there that joins them.
>
> **[3:57](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=237)** So first of all, I'm going to create that new relationship between the two of them.
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=241)** So I'm using their references for Joe and Sue and I'm creating that friend relationship type between the two of them and then I'm going to delete that old relationship.
>
> **[4:10](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=250)** So I'm using the reference of R and then DELETE R.
>
> **[4:15](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=255)** And finally, let's take a look at that new relationship type that we've created.
>
> **[4:24](https://www.linkedin.com/learning/introduction-to-neo4j/deleteing-your-data?u=76281980&t=264)** As you can see, Joe and Sue are still connected but rather than having that knows relationship between them, it's now a friend relationship.

> [!info]- Semantic Content
>
> **Env Vars:** delete (7), detach (4), apac (2)
> **API Endpoints:** delete  (6)
> **CLI Commands:** node (4)
> **Definitions:** is a  (3)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Putting it all together](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=0)** - Putting It All Together.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=8)** The Roux Academy has approached you looking for your graph expertise.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=12)** They are looking to create a new program called Try Studying Abroad to encourage their students to consider visiting a partner institution overseas as part of their studies.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=23)** They want to gather together data about the most popular countries past students have studied in as well as understanding which ones attract the highest grades.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=32)** They also want to build connections between the Roux Academy alumni to encourage and promote friendships with past cohorts who have something in common.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=41)** Using all of this information, the Roux Academy are hopeful that not only will they have the evidence to support the benefits of studying abroad, but will be able to also encourage a network of past graduates to be their ambassadors for this brand new program.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=56)** Based on your conversations with the Roux Academy, between you both, you've decided on the following items of work.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=63)** First of all, you are going to update their database so that they have a field containing the whole student's name to improve reporting as well as making the database more efficient for querying.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=74)** Then, you are going to put together a query to find out the country that is the most popular for studying [[Graphic Design]].
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=80)** Afterwards, the Roux Academy would like to know which country attracts the most A grades.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=87)** For now, they're only interested in the absolute value rather than the relative value for the number of students studying in that country.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=95)** Last but not least, to help start off the alumni program, you'll need to put together a query that'll enable the Roux Academy to find sets of at least five students that have had the same country of study, course, and graduation year.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=109)** You may find referring back to the counting and aggregating section helpful if you're not quite sure how to do this.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=116)** Don't be afraid to experiment and explore this really interesting data sets as you go along.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=122)** As we start to do more complex queries, you may find yourself finding some unexpected results.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=129)** Here are some troubleshooting tips to help you on your way.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=132)** Did you check the data model for who's connected to what?
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=135)** You'll find a copy of the data model to refer to on the course [[GitHub]] repository as well as in the previous chapters in this course.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=143)** Don't forget to look at the relationship directions.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=146)** Have you remembered case sensitivity?
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=149)** Don't forget labels, types, and properties are all case sensitive.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-neo4j/challenge-putting-it-all-together?u=76281980&t=154)** And if all else failing, have you ensured that the labels, relationship types, properties, and references you're using match exactly what you've used in your queries and in the database?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Graphic Design]] (1), [[GitHub]] (1)
> **CLI Commands:** find (5)
> **Best Practices:** don't forget (2)
> **Non-Speech:** (upbeat music) (2)
> **Tools:** github (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - putting (1)

#### [Solution: Putting it all together](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=0)** - [Instructor] Putting it all together.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=7)** So let's have a look at the answers.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=10)** And don't forget, for these questions, there is more than one way to answer them.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=14)** So as long as we've got matching results, that's all that matters.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=19)** Our first task was to go away and create a new property called name, which included the first and the last name of the student.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=27)** So here, I matched all of the student nodes, gave them an alias, a reference of S, and then I've used the set keyword to set a new property of the first name plus space plus the last name.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=39)** And let's take a quick look at that.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=44)** So if I select a student at random here and look at the bottom of the pane, you can see we've now got a name property with the first and last name.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=55)** Our next task was to go away and find out which country was the most popular for [[Graphic Design]].
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=62)** I notice here I've shown there's at least two different ways that we could answer this question.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=66)** So the first approach that I've used is to chain the program nodes with the name of graphic design to the student nodes over to the country node.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=76)** And here, I'm returning the count of students.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=79)** So it's counting the number of student nodes that we have in this query that's within that pattern.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=85)** I'm going to give it an alias of total students.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=87)** I am returning the country name with an alias of country and I'm ordering it by total students descending.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=94)** So here, we find that China has the most number of students that studied graphic design.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=100)** The next question that we were set was to find out which country attracts the most A grades.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=106)** And as before, I've used a similar approach.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=108)** So I've used that same pattern of connecting the grade node with the property of grade equals A.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=114)** It's student node to the country node.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=117)** And this time, I've returned a count of grade as total students.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=123)** So I'm going to quickly explain this.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=125)** So you can do this because if you think about what's going on here, we're effectively creating that pattern or a path.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=133)** And that path is from grade to country via students.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=138)** So basically, however many number of students we have, we're going to have the same number of grades because one student has one grade.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=146)** So, if that makes sense.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=148)** So that's what's happening here and that's why we can also do a count on grade as well as a count on the student node.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=157)** And as we can see here, Greece has the most number of students that obtained an A grade.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=164)** Last but not least, the last problem that we were set was to go away and find classmates that took the same course in the same year in the same country, but we had to find where there was at least five students that met that criteria.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=182)** So here, you can see the pattern that we've used.
>
> **[3:04](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=184)** So here, I'm matching the student to graduation year.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=187)** I'm then taking the reference for that student to match it to a program year.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=191)** And I'm taking that same reference again to match them to a country.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=195)** So this is going to make sure that they're all matching the same group.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=198)** I'm then using the with statement.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=200)** So I'm using the with statement to not only give aliases, so new names, to how we're going to refer to things, those new references, but also, I'm using collect to collect up all of the student names.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=213)** So that's going to give me an array of student names, giving it an alias of students.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=217)** And I'm now using that where clause within with to do a bit of filtering.
>
> **[3:42](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=222)** And this filtering here is saying where the array of students has at least five names.
>
> **[3:50](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=230)** And then I'm returning all of that back.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=232)** And you don't have to do the order by.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-neo4j/solution-putting-it-all-together?u=76281980&t=234)** I've chosen to do it just to prettify my results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Graphic Design]] (3)
> **CLI Commands:** find (5), node (5), make (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What's next?](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=0)** - [Ljubica] What next?
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=2)** First of all, I'd like to congratulate you on completing the course.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=7)** Well done, you!
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=8)** The challenges set will have been pushing you, and hopefully you've learned a lot from the experience.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=14)** I also hope that you are now thirsty for more graph adventures.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=19)** Let's quickly summarize what we've covered in this introductory course.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=23)** We've looked at what a graph database is and why they're different to other [[Databases]].
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=28)** We've also looked at when to use a graph database and the different types of graph storage structures you may encounter.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=35)** We've also looked at creating, modifying, and querying data in [[Neo4j]] using the Cypher query language.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=42)** And last but not least, we've had hands-on experience answering connected questions.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=48)** So as the saying goes, practice makes perfect.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=53)** I would suggest that you take this opportunity to revisit the queries used in this course, either by rewatching the chapter videos or exploring the queries on the course [[GitHub]] repository.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=65)** This is especially useful if you don't quite completely understand why a query works in a certain way.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=72)** In my opinion, the Root Academy course is a really fun data set, so why not use this opportunity to think about what other questions you might want to ask of that dataset, and then query it.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=86)** But last and by no means least, why not have a go at creating your own data, either in addition to the Root Academy data, or perhaps a dataset that is interesting to you.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=98)** Now, let's talk about how you can quench that newly acquired graph database thirst.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=104)** As we covered earlier in the course, there are many different example datasets to work with, along with walkthrough guides, available on the Neo4j Sandbox, so do check them out.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=115)** To build upon your Neo4j knowledge, there is the Neo4j Graph Academy.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=119)** This is a useful resource to expand upon your Cypher querying knowledge, as well as learning about how to model for a graph database.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=126)** And if you get stuck on any questions, such as how to query something, do check out the Neo4j forum.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=132)** And of course, do post your questions in this course, and other students and myself can keep an eye on them and help you out.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=139)** Happy graphing.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=141)** If you'd like to, feel free to reach out to me on [[LinkedIn]].
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=145)** You can also check out other graph and tech-related content I write about, on my website.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=151)** And last but not least, follow me on Twitter if you'd like to hear about any new blog posts that I've written, planned conference talks, or meet-up appearances.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-neo4j/what-s-next?u=76281980&t=159)** And I would absolutely love to hear about your graph adventures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neo4j]] (5), [[Databases]] (1), [[GitHub]] (1), [[LinkedIn]] (1)
> **Cross-References:** we covered (1), earlier in (1)
> **Definitions:** is a  (2)
> **Tools:** github (1)
> **Analogies:** such as (1)
> **Speakers:** - [ljubica] (1)


## Instructor

- [[Ljubica Lazarevic]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-neo4j-2483130)

## Skills Covered

- Neo4j

## Path Context

### In [[Develop Your NoSQL Skills]]
← [[Learning MongoDB]] | **4 of 10** | [[Graph Databases- Neo4j for Complex Data Relationships]] →

## Appears In

- [[Develop Your NoSQL Skills]]

## Related Courses

_Courses sharing skills:_

- [[Graph Databases- Neo4j for Complex Data Relationships]] — Neo4j

---

[↑ Back to top](#)