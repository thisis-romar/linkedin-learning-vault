---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: graph-databases-neo4j-for-complex-data-relationships
url: "https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships"
duration_minutes: 78
duration: 1h 18m
level: Intermediate
updated: 9/15/2022
learners: 4262
skills:
  - Neo4j
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQE1LvNesh6fIg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1663090796489?e=2147483647&amp;v=beta&amp;t=JOjohJQBaSeQdeEFF8-U2hUKzgAYfE42OHHHhoISkoA"
linkedin_topic: Database Management
learning_paths:
  - Develop Your NoSQL Skills
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/neo4j
status: not-started
created: 2026-04-20
---

![Graph Databases: Neo4j for Complex Data Relationships](https://media.licdn.com/dms/image/v2/C4E0DAQE1LvNesh6fIg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1663090796489?e=2147483647&amp;v=beta&amp;t=JOjohJQBaSeQdeEFF8-U2hUKzgAYfE42OHHHhoISkoA)

# Graph Databases: Neo4j for Complex Data Relationships

> Data is becoming more complex, and graph databases are perfect for storing and representing complex relationships between data. In this course, instructor Andreas Kretz introduces you to Neo4j fundamentals and walks you through creating a data project using Neo4j. Andreas explains terminology and goes over the properties of graph databases and the differences in data modeling between relational an

> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships) | 1h 18m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Andreas Kretz]]

## Resources

- Exercise files available

## Skills Covered

- Neo4j

## Table of Contents

### Introduction

#### Course introduction and goals
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/course-introduction-and-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/course-introduction-and-goals?u=76281980&t=0)** - [Instructor] Let's face it.
>
> **[0:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/course-introduction-and-goals?u=76281980&t=1)** Data is being created faster today than ever before.
>
> **[0:04](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/course-introduction-and-goals?u=76281980&t=4)** And with more data, the complexity and requirements of data analytics are increasing too.
>
> **[0:10](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/course-introduction-and-goals?u=76281980&t=10)** This Neo4j course will introduce you to this new topic and open up a totally new horizon for you.
>
> **[0:17](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/course-introduction-and-goals?u=76281980&t=17)** Understanding how different noSQL databases work and when to use them will make you a super valuable person in any modern data team.
>
> **[0:25](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/course-introduction-and-goals?u=76281980&t=25)** We'll start by exploring the fundamental terminology and design of Neo4j.
>
> **[0:30](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/course-introduction-and-goals?u=76281980&t=30)** Then I'll show you how to design a database model based on a real word data set and interact with it by writing and reading data with Python.
>
> **[0:39](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/course-introduction-and-goals?u=76281980&t=39)** Hi, my name is Andreas Kretz.
>
> **[0:41](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/course-introduction-and-goals?u=76281980&t=41)** I have over 10 years of experience as a data engineer.
>
> **[0:45](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/course-introduction-and-goals?u=76281980&t=45)** My mission is to help students to either become a data engineer or to add data engineering to their skillset.
>
> **[0:51](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/course-introduction-and-goals?u=76281980&t=51)** So have fun with this course and let's get into it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), super (1)
> **CLI Commands:** make (1), python (1)
> **Code Identifiers:** nosql (1)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, you only need two things.
>
> **[0:04](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/what-you-should-know?u=76281980&t=4)** You need to have some Python knowledge and some SQL knowledge.
>
> **[0:07](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/what-you-should-know?u=76281980&t=7)** Don't worry though, as with all my courses, I'm limiting this to only the essentials.
>
> **[0:13](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/what-you-should-know?u=76281980&t=13)** So if you have a bit of Python knowledge, you can code a bit with Python, you understand the data structures and how to work with functions, then you're good.
>
> **[0:22](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/what-you-should-know?u=76281980&t=22)** If you are on the SQL side, know how to create tables, how tables and columns work, how the relationships between tables work, and you have a bit of an understanding and a bit of experience with SQL queries, then you're also good there.
>
> **[0:39](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/what-you-should-know?u=76281980&t=39)** You don't need to have very complex knowledge of SQL, basics are absolutely enough.
>
> **[0:45](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/what-you-should-know?u=76281980&t=45)** If you feel like you need to brush up a bit on your skills, I recommend two courses from the LinkedIn Learning Library.
>
> **[0:52](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/what-you-should-know?u=76281980&t=52)** I recommend the course [[Python Essential Training]] and I recommend [[SQL Essential Training]].
>
> **[0:59](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/what-you-should-know?u=76281980&t=59)** With these you will be fine.
>
> **[1:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/what-you-should-know?u=76281980&t=61)** So let's head on, let's get into the course.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5)
> **CLI Commands:** python (4)
> **Code Keywords:** let (2)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### Real-world graph database use cases
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=0)** - [Narrator] Where are graph databases used?
>
> **[0:02](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=2)** So generally, graph databases are used whenever you have very complex data and complex relationships between the data points in your data.
>
> **[0:12](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=12)** Examples for these are fraud detection use cases where you might want to find suspicious credit card transactions.
>
> **[0:20](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=20)** Or manufacturing.
>
> **[0:21](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=21)** In the car production, for instance, where changes in a small thing may affect the whole product.
>
> **[0:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=27)** Or, for instance, contact tracing in disease management where you want to find infected people, and trace these infected people and build a network who these people met.
>
> **[0:38](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=38)** So let's look at credit card transaction data.
>
> **[0:41](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=41)** Let's look at fraud detection.
>
> **[0:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=43)** A simple example here is you have a person who lives in Mexico City.
>
> **[0:49](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=49)** And at 9:00 AM, this person purchases groceries in a store.
>
> **[0:55](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=55)** At 9:15, this person purchases cat food in a different store, also in Mexico City.
>
> **[1:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=61)** Then you have another transaction that is happening in a petrol station in Ireland at 9:30.
>
> **[1:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=68)** So it makes absolutely no sense or, and it's even impossible, for a person to make these three transactions.
>
> **[1:16](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=76)** The first two are absolutely clear.
>
> **[1:18](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=78)** It's in the same vicinity. It's in the same city.
>
> **[1:21](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=81)** Everything's okay.
>
> **[1:22](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=82)** But then purchase fuel in Ireland 15 minutes later, you can't travel that far.
>
> **[1:28](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=88)** So these are things where you can actually find that out, that connection, and that localization and can flag this transaction.
>
> **[1:37](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=97)** You can then even go further and you can find out, okay, do I have businesses where a lot of fraud transactions are happening, and flag them and look into it?
>
> **[1:47](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=107)** What's the problem?
>
> **[1:47](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=107)** Is it the users? Or, is it the business owners?
>
> **[1:50](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=110)** What's going on here?
>
> **[1:51](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=111)** So it's very useful for uncovering trends in the data and for finding these fraudulent entities.
>
> **[1:59](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=119)** Then we have our graph databases in manufacturing.
>
> **[2:03](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=123)** Manufacturing is a very difficult industry and a very difficult task.
>
> **[2:09](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=129)** Let's look at a car.
>
> **[2:10](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=130)** For instance, you have modern cars. Over 30,000 components.
>
> **[2:14](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=134)** A lot of components interact with each other.
>
> **[2:17](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=137)** So it's difficult to change something.
>
> **[2:20](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=140)** And you have to look at the car as a whole.
>
> **[2:22](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=142)** This means, for instance, you have an axle.
>
> **[2:25](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=145)** You want to change something on the axle.
>
> **[2:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=147)** The axle is connected to a rod.
>
> **[2:29](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=149)** You have a wheel on there. You have screws on there.
>
> **[2:32](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=152)** And with these screws are the discs connected, and the disc is also with axle, and so on and so on.
>
> **[2:38](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=158)** So, as you can see, it's a very complex thing.
>
> **[2:41](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=161)** Now, you change one part here.
>
> **[2:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=163)** Change out the axle, or change out the screw.
>
> **[2:45](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=165)** What does that have an influence, too?
>
> **[2:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=168)** What is influenced by this?
>
> **[2:51](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=171)** Is this good? Is this bad?
>
> **[2:53](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=173)** Does this one screw lead to a chain reaction where something then happens?
>
> **[2:58](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=178)** It's very complex.
>
> **[2:59](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=179)** And it's a lot easier to visualize and to create this connection with a graph database.
>
> **[3:06](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=186)** The third example, is the example that we're actually going to use in our course.
>
> **[3:12](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=192)** We're going to use contact tracing.
>
> **[3:14](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=194)** Contact tracing can be very, very useful to monitor the spread of disease, and inform people of contact with an infected person.
>
> **[3:22](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=202)** So think of a group of people shopping in the same store.
>
> **[3:26](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=206)** These people most likely don't know each other.
>
> **[3:29](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=209)** And once they leave, they have no idea with whom they actually visited the store.
>
> **[3:35](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=215)** So they may never encounter these people again.
>
> **[3:39](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=219)** Now, the goal is to actually find out who are these people.
>
> **[3:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=223)** So if a person gets sick, this person can then be tracked, can be found out.
>
> **[3:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=228)** This person went to a certain business.
>
> **[3:52](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=232)** Who has this person encountered there?
>
> **[3:53](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=233)** And then you can automatically notify everybody else that they were in the same room with an infected person at the same time.
>
> **[4:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=241)** This allows you to manage the spread better.
>
> **[4:04](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=244)** This gives people more security and an organization can actually track the spread of the disease throughout time.

> [!info]- Semantic Content
>
> **CLI Commands:** find (5), cat (1), make (1)
> **Analogies:** for instance (4)
> **Code Keywords:** let (3)
> **Ports:** :00 (1), :15 (1), :30 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. Neo4j Fundamentals

#### Neo4j fundamental terminology
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=0)** - [Instructor] Let's start the Neo4j fundamentals by looking into where Neo4j actually fits into a platform.
>
> **[0:07](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=7)** Now, in this, I draw a line in the middle where we have two parts, an upper part and a lower part.
>
> **[0:14](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=14)** The upper part is something that you find very often.
>
> **[0:17](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=17)** You, for instance, have a e-commerce transaction that is happening.
>
> **[0:21](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=21)** This transaction goes into a transactional database and the client that sits on the user interface on the website looks at the database and sees the status of this eCommerce transaction that the client previously set off.
>
> **[0:36](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=36)** And this upper part is a transactional part of a platform.
>
> **[0:39](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=39)** A eCommerce transaction is started, it gets locked in the database, somebody does something with that data, either checks it or processes it.
>
> **[0:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=48)** Then we have the lower part in this picture.
>
> **[0:50](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=50)** We have the analytics part of the platform.
>
> **[0:53](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=53)** Very often you find tools like data warehouses and BI tools in there where the data from the eCommerce transaction either directly gets written in the warehouse, or once a day, it gets imported from the database on top into the data warehouse.
>
> **[1:10](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=70)** And then on the right side, we have our data analyst who is then using BI tools to view the data and to find out what's happening on the platform and tries to create some business value and business insights out of the transactions that are happening.
>
> **[1:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=87)** So this is where it fits usually.
>
> **[1:30](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=90)** Neo4j and graph databases usually come into play in the upper part in the database part of your transactional process because these databases are transactional databases.
>
> **[1:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=103)** Now let's look next into the fundamental terminology of Neo4j.
>
> **[1:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=108)** The fundamental terminology of Neo4j starts with nodes.
>
> **[1:52](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=112)** You can see them here on the left and on the right, Node 1 and Node 2.
>
> **[1:57](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=117)** And these nodes are how you store your data in.
>
> **[2:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=120)** So you don't store your data in tables, like relational databases.
>
> **[2:05](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=125)** You store the data in nodes.
>
> **[2:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=128)** Each node, as you can see below the Node 1 and below the Node 2, you can have attributes.
>
> **[2:15](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=135)** So you can have an attribute name and then a value for this attribute could be a text, could also be a number.
>
> **[2:22](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=142)** It has multiple ways of storing data in it.
>
> **[2:25](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=145)** So this is how you store your data.
>
> **[2:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=147)** You have the nodes, you have the attributes in the nodes, then you also need to create relationships between these nodes.
>
> **[2:35](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=155)** Our relationships are done.
>
> **[2:36](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=156)** You can see them here from Node 1 to Node 2 with by the indication of the arrow from Node 1 to Node 2, this creates a relationship.
>
> **[2:47](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=167)** The arrow here, the relationship has a direction.
>
> **[2:50](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=170)** This is a logical direction within the database, and when you create it, it doesn't really make a difference of the direction, but it's always good to think of this, what's the direction of the relationship.
>
> **[3:02](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=182)** Because once you do this, you can also give it a type.
>
> **[3:06](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=186)** So, the type most likely will explain what this relationship is and as the same with nodes, you can also give the relationship, if you want, multiple attributes.

> [!info]- Semantic Content
>
> **CLI Commands:** node (9), find (3), make (1)
> **Versions:** node 1 (4), node 2 (4)
> **Code Keywords:** this, (3), let (2), interface (1), type. (1)
> **Code Identifiers:** ecommerce (3)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1), picture (1)
> **Speakers:** - [instructor] (1)

#### CRUD and ACID properties of graph databases
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=1)** - [Narrator] Let's talk about CRUD and ACID-Compatibility.
>
> **[0:04](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=4)** CRUD, meaning Create, Read, Update and Delete operations are a standard for relational databases.
>
> **[0:13](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=13)** You always have these.
>
> **[0:14](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=14)** This is how you interact with the database.
>
> **[0:17](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=17)** This is how you store your data.
>
> **[0:19](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=19)** This is how you query your data.
>
> **[0:21](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=21)** Maybe you want to update it.
>
> **[0:23](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=23)** Or, you want to delete some data out of the database.
>
> **[0:26](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=26)** Now, with NoSQL databases, this is sometimes a bit complicated.
>
> **[0:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=31)** Because sometimes a NoSQL database doesn't allow you to update data, or it's difficult to update data.
>
> **[0:38](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=38)** Sometimes the deletion aspect doesn't really work, or doesn't work as like with a relational database.
>
> **[0:47](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=47)** For Neo 4j, this is very similar.
>
> **[0:50](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=50)** It's completely compatible how it is with a relational database.
>
> **[0:56](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=56)** You have full compatibility with CRUD operations, which is really awesome.
>
> **[1:02](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=62)** As with all transactional databases, ACID-Compliance is something very, very important.
>
> **[1:09](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=69)** Meaning ACID, Automicy, Consistency, Isolation and Durability.
>
> **[1:14](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=74)** The idea for automicy is that in a transaction, there are multiple statements.
>
> **[1:19](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=79)** And once you execute these statements, either all of them pass, or none of them pass.
>
> **[1:25](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=85)** So this is a very important topic that a transaction is seen as a unit, either all or none.
>
> **[1:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=91)** Then you have consistency.
>
> **[1:33](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=93)** This means that whenever you start a transaction, you do your statements, or your inserts, and then you commit the transaction.
>
> **[1:41](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=101)** It always brings the database from one valid state to another valid state.
>
> **[1:46](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=106)** So it's not like something is messed up within your database, and you will have long-term problems with your data in your database.
>
> **[1:55](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=115)** Then you have isolation, which means that whenever you use your database, there will be a lot of transactions happening at the same time.
>
> **[2:05](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=125)** And these transactions might not even see each other, or know from each other.
>
> **[2:10](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=130)** But each of these transactions need to be processed in itself, and not affect other transactions that are happening.
>
> **[2:17](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=137)** So your transaction is completely isolated from other transactions.
>
> **[2:22](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=142)** Then you have durability, which means once something is committed, once a transaction is committed, and the data is in the database, or the data has been changed, the transaction will stay committed, even if there is a system failure.
>
> **[2:37](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=157)** Which is very, very important, because think of it, you are writing data to a database and then you're committing it.
>
> **[2:44](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=164)** The database shuts down, or you have an error under the server.
>
> **[2:47](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=167)** So now, is your data still there? Or, is it lost?
>
> **[2:50](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=170)** You need to be sure that you have durability.

> [!info]- Semantic Content
>
> **Env Vars:** crud (3), acid (3)
> **Code Keywords:** delete (2), pass (2), let (1)
> **Definitions:** is a  (2), means that (2)
> **Speakers:** - [narrator] (1)

#### Graph database vs. relational database design
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=0)** - [Instructor] Let's look into how you design a Neo4j database.
>
> **[0:04](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=4)** For that, let's take a detour into relational databases.
>
> **[0:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=8)** How relational databases work.
>
> **[0:10](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=10)** You have your tables.
>
> **[0:11](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=11)** Tables have rows and have columns.
>
> **[0:15](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=15)** Each column has a data type.
>
> **[0:18](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=18)** And also a column might be a primary key for the table or a foreign key from another table.
>
> **[0:24](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=24)** You use primary and foreign keys to build relationships between your tables.
>
> **[0:30](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=30)** And then you query the data via a join, where you join the tables together.
>
> **[0:35](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=35)** All of this you use to store your data in the rows of each table.
>
> **[0:39](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=39)** And so the tables are building up and getting bigger and bigger and bigger.
>
> **[0:42](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=42)** In Neo4j, you would do it this way.
>
> **[0:44](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=44)** And this is a quick example of somebody, a user, is visiting a website.
>
> **[0:49](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=49)** Now, you would start with the nodes.
>
> **[0:51](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=51)** Okay, let's create two types of nodes.
>
> **[0:54](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=54)** Let's create a type of node that is called User, and let's create a type of node that is called Website.
>
> **[1:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=61)** These are the two circles.
>
> **[1:03](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=63)** Then you give them attributes.
>
> **[1:05](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=65)** So the user would have the attributes user_ID, user_first name, user_last name, for instance.
>
> **[1:11](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=71)** And then you would give the Website a attribute, that's, for instance, called path, like here/home, so this way you could log people who are visiting the home website.
>
> **[1:23](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=83)** The relationship between the User and the Website would be created through creating a relationship here.
>
> **[1:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=91)** For instance, we would call this relationship visitedPage with the direction User to Website, and give it, for instance, the attribute date, where we have the date, and also we could add here the time, if the user accesses the site multiple times in a day.
>
> **[1:47](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=107)** This is how you would build this up.
>
> **[1:49](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=109)** You have your two nodes or node types, User and Website.
>
> **[1:53](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=113)** You have the attributes for them.
>
> **[1:55](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=115)** You have the relationship, visitedPage, and you have the attribute for this.
>
> **[1:59](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=119)** This is also why I meant before, look at the logical way of these directions of the relationship, because in this, the description or the name of the relationship fits to how you directed it.
>
> **[2:14](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=134)** So the User visits the Website, this is why you would call this visitedPage.
>
> **[2:20](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=140)** The other way around, you would call this maybe visitedBy, right?
>
> **[2:24](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=144)** When you create the relationship from Website directed to User, visitedBy, and then this would be how you do it.
>
> **[2:33](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=153)** Also important here is that every node must have a unique ID.
>
> **[2:37](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=157)** So for this, you would set the user_id for the user as the unique ID, and the path for the Website, because this might be the only attribute that you have in there.
>
> **[2:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=168)** As you can see, this is pretty straightforward and pretty simple.
>
> **[2:53](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=173)** Now let's look into how you query data from Neo4j.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (2), type. (1), this. (1)
> **Code Identifiers:** visitedpage (3), visitedby (2), user_first (1), user_last (1), user_id (1)
> **CLI Commands:** node (4)
> **Analogies:** for instance (4)
> **Definitions:** is called (2), is a  (1)
> **Speakers:** - [instructor] (1)

#### Neo4j query language explained
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=0)** - [Instructor] Once your data is in the database, how do you query it?
>
> **[0:04](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=4)** When you look at relational databases, relational databases have SQL, the structured query language.
>
> **[0:10](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=10)** Here with Neo4j, you don't have that, but you have another cool way of doing this with the Cypher language.
>
> **[0:18](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=18)** Here are the basics of Cypher language.
>
> **[0:20](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=20)** So it all starts with the structure of a query.
>
> **[0:24](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=24)** Usually your query is built in match, where and return.
>
> **[0:28](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=28)** It's a lot like a relational database where you have select something from a table where certain attributes are there.
>
> **[0:38](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=38)** So this is the general structure.
>
> **[0:40](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=40)** Then you start this by matching nodes.
>
> **[0:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=43)** You make the round brackets and you add either N, when you don't mention a distinct node, or you could say round brackets, and you add the type of the node in there.
>
> **[0:54](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=54)** In this case website, from our previous example.
>
> **[0:56](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=56)** You could even go further and can say, okay, I'm filtering directly on the website and an attribute for this.
>
> **[1:03](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=63)** So you would add round brackets, website, you would then use path and slash home.
>
> **[1:09](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=69)** So this is how you bring in the nodes.
>
> **[1:11](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=71)** Then you would build up visually, the path between these nodes.
>
> **[1:15](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=75)** You would create a node with a round brackets, then create a path between the nodes and the path between the nodes, you create by dashes.
>
> **[1:24](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=84)** Either you use two dashes, which means there is a relation between, or a path between these nodes without a direction given, or you could say I'm creating an arrow, and this already shows the direction between these.
>
> **[1:40](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=100)** You can also mention the relation by name, as we've seen before with our visited for the website.
>
> **[1:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=108)** So you would do a dash, then the brackets, and then give it the name in between.
>
> **[1:54](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=114)** Now, how does this look in practice?
>
> **[1:57](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=117)** I have here two examples.
>
> **[1:58](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=118)** This is an example where we say, okay, who visited the webpage or the homepage?
>
> **[2:03](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=123)** We would start by matching, say match and then we build our cypher.
>
> **[2:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=128)** Our cypher here is first, we say our first node.
>
> **[2:12](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=132)** From the node user, we make a path towards the website.
>
> **[2:17](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=137)** So we give it an arrow towards the node website, where website.path equals /home.
>
> **[2:24](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=144)** And then we return the information from the user and for the website.
>
> **[2:29](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=149)** On the right here, you see how this then looks graphically.
>
> **[2:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=154)** In the center, you have your home, you have your node, and on the outside, you have your users with an arrow visited from the user to the home.
>
> **[2:44](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=164)** It's pretty visual.
>
> **[2:46](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=166)** Very nice to do.
>
> **[2:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=168)** And here's another example.
>
> **[2:49](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=169)** It's a bit more complicated example.
>
> **[2:51](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=171)** Let's say we want to see who visited the webpage on January 1st.
>
> **[2:56](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=176)** So we can use reg access for this.
>
> **[2:59](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=179)** We would start by building our cypher like this.
>
> **[3:02](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=182)** We would start with match and then give it the user.
>
> **[3:06](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=186)** Then we say, okay, let's create our relation between.
>
> **[3:11](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=191)** So we name this vis:visitedPage and then on the right side, we give it our node for the website website where the attribute is /checkout.
>
> **[3:23](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=203)** So this limits already, this filters out already, all the nodes that are not related to the checkout page.
>
> **[3:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=211)** Now we say where and make the distinction what do we want to see?
>
> **[3:35](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=215)** Because we defined our relation as vis above, we now can access the date and then limit this on 2022 first, January 1st, and then give it a time.
>
> **[3:49](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=229)** And with the dot and star, this is a typical regex that you know from Python and this will then match everything that is below this in this date and time.
>
> **[4:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=241)** So it would match at 10 11, 10 12, 10 13, and so on.
>
> **[4:07](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=247)** And then we say, return us the user in the website and it would return us just two users, number four and number five visited the checkout page exactly at that time.

> [!info]- Semantic Content
>
> **CLI Commands:** node (8), make (3), python (1)
> **Code Keywords:** this. (3), let (2), match, (1), return. (1)
> **Definitions:** is a  (2), is an  (1)
> **Code Identifiers:** visitedpage (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### Neo4j deployment and scaling explained
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=0)** - [Instructor] Now that we know how to create a Neo4j database, and how to set this up either self-managed or on the cloud, let's look at scaling.
>
> **[0:10](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=10)** Scaling is something that is very important and that you are going to run into at some point.
>
> **[0:16](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=16)** Typically with the database, you start small and then once the load gets higher, you add more resources, so you scale vertically by making the database bigger.
>
> **[0:26](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=26)** You would add RAM, you would add better CPUs.
>
> **[0:30](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=30)** You would add a lot of storage into the server.
>
> **[0:32](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=32)** The problem with vertical scaling of making this whole database bigger is that it's finite.
>
> **[0:39](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=39)** Either technically you cannot scale anymore, or it will get too expensive to scale.
>
> **[0:45](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=45)** Now, this is where the beauty of NoSQL databases and Neo4j comes in.
>
> **[0:50](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=50)** It's horizontal scaling.
>
> **[0:52](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=52)** Instead of making the machines bigger, adding more machines to it.
>
> **[0:55](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=55)** It's a very efficient way of scaling.
>
> **[0:58](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=58)** It's a very simple way of scaling.
>
> **[1:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=61)** Overall, I personally like this a lot.
>
> **[1:04](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=64)** So let's look into the options and how to scale specifically.
>
> **[1:09](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=69)** When you look into scaling a Neo4j database, you can start by sharding your database.
>
> **[1:15](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=75)** Sharding means that your graph, so you have nodes and you have relationships between these nodes, you take a part of your graph and you put it on different servers.
>
> **[1:28](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=88)** One part is living on these servers.
>
> **[1:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=91)** Another part is living on other servers.
>
> **[1:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=94)** And so once people query these, then the load will get distributed because some parts that are called all the time or on different set of servers than another part that is going to be called.
>
> **[1:47](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=107)** This makes a lot of sense if you have multiple parts in your database that are independent from each other, and this way, you distribute the load.
>
> **[1:56](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=116)** As I said before, scaling is another way you add more servers to increase the read and write performance, instead of getting bigger machines.
>
> **[2:05](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=125)** This works very well in conjunction with charting.
>
> **[2:09](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=129)** A cool way is actually the way number three here is working with replicas.
>
> **[2:14](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=134)** This is something that is very unique to Neo4j.
>
> **[2:19](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=139)** You can create read-only servers or replica servers.
>
> **[2:24](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=144)** These servers have no writes to them.
>
> **[2:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=147)** So they're just there for read capacity for delivering content to the consumers.
>
> **[2:33](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=153)** It's a great way and very interesting way of scaling your infrastructure.
>
> **[2:39](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=159)** All right, let's start.
>
> **[2:41](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=161)** Let's set up your first Neo4j database with RDB.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), self (1)
> **Env Vars:** ram (1), rdb (1)
> **Definitions:** means that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Environment Setup

#### How to install Neo4j
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=0)** - [Instructor] This is how you can set up your Neo4j database.
>
> **[0:03](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=3)** So go to [neo4j.com](https://neo4j.com), and then on the top right, there is a button Get Started.
>
> **[0:09](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=9)** And in the menu that comes up here, select Neo4j AuraDB, which is the fully managed version of Neo4j.
>
> **[0:17](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=17)** So click this.
>
> **[0:18](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=18)** Then, in the next, here it says Start Free.
>
> **[0:22](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=22)** Then this will lead you to a mask where you can log in.
>
> **[0:26](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=26)** I'm already logged in, I used my Google account for this.
>
> **[0:30](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=30)** Then we get onto the overview of AuraDB, where we can create ourselves an instance.
>
> **[0:35](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=35)** So, use the button, New Instance.
>
> **[0:38](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=38)** And then we see our instance types.
>
> **[0:40](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=40)** We are going to use AuraDB Free here, but I also want to show you AuraDB Professional.
>
> **[0:46](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=46)** So the Free is going to be free, literally as it says, but it's limited to a certain amount of nodes, 200,000 nodes and 400,000 relationships.
>
> **[0:57](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=57)** Instance details, we can give it a instance name.
>
> **[1:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=61)** Let's use the instance name contact_tracing.
>
> **[1:05](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=65)** And we can set ourselves a region.
>
> **[1:07](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=67)** I'm using the Europe region in Belgium.
>
> **[1:11](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=71)** You can also use Iowa, for instance, or Singapore, depending on your location.
>
> **[1:18](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=78)** What we're going to choose here is the Empty database.
>
> **[1:21](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=81)** And then we are going to Create Instance.
>
> **[1:24](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=84)** But before we do that, let's quickly look at the Professional way of doing this.
>
> **[1:28](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=88)** So you would select Professional here.
>
> **[1:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=91)** And then, just like with all the cloud platforms, you can define your instance size.
>
> **[1:37](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=97)** So you would say, "Okay, I need something with 32GB of memory, 6 CPU, 64GB of storage."
>
> **[1:45](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=105)** And this will cost you then a certain amount of dollars per hour.
>
> **[1:50](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=110)** You can set the version here, but right now there's only version 4.
>
> **[1:55](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=115)** But the difference here is that the region, which is GCP region.
>
> **[2:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=120)** So this runs on Google Cloud, as it seems.
>
> **[2:03](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=123)** You can set more here.
>
> **[2:05](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=125)** So you don't just have Belgium for Europe, you also, when you scroll down here, you would have Germany.
>
> **[2:10](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=130)** That's important for me.
>
> **[2:12](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=132)** But also, in the US, you would have Iowa and South Carolina.
>
> **[2:15](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=135)** Oregon as well.
>
> **[2:16](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=136)** So, that's the whole difference.
>
> **[2:20](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=140)** You can set up either a Free AuraDB, which has limits, or you use a Professional, where you can set your instance size and then run this.
>
> **[2:30](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=150)** So let's go back, select our AuraDB Free.
>
> **[2:33](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=153)** Just to be sure, we have instance name contact_tracing.
>
> **[2:37](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=157)** You choose your region.
>
> **[2:38](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=158)** We use the Empty database.
>
> **[2:40](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=160)** We don't use the Movies DB.
>
> **[2:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=163)** And then let's create this.
>
> **[2:44](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=164)** Here's something that is very important.
>
> **[2:46](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=166)** Once you create this, your username is neo4j.
>
> **[2:50](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=170)** That is always the same.
>
> **[2:51](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=171)** But the generated password, you need to copy out this password.
>
> **[2:55](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=175)** So click here to copy to clipboard.
>
> **[2:58](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=178)** And store this somewhere because you are never going to get this password again.
>
> **[3:03](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=183)** And that's it.
>
> **[3:04](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=184)** You can also download the credentials here.
>
> **[3:06](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=186)** So you can say, "I confirm I have copied the above credentials or downloaded the file credits."
>
> **[3:12](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=192)** Let's just quickly copy this.
>
> **[3:15](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=195)** And then, press Continue.
>
> **[3:17](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=197)** Now you see, your database is going to start up.
>
> **[3:20](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=200)** "contact_tracing, free.
>
> **[3:22](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=202)** Setting up your instance.
>
> **[3:24](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=204)** This will take a few minutes."
>
> **[3:25](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=205)** Now you have to just wait until it's set up.
>
> **[3:29](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=209)** All right, and here we are.
>
> **[3:30](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=210)** The database is running.
>
> **[3:32](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=212)** So now, you can click Explore for Bloom.
>
> **[3:36](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=216)** Or Query to write some queries.
>
> **[3:39](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=219)** More about that, in the next video, where I explain you these two options.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (6), let (5), this, (1), continue (1)
> **Code Identifiers:** contact_tracing (3)
> **UI Navigation:** go to (1), in the menu (1), scroll down (1)
> **Prerequisites:** set up (3)
> **Env Vars:** cpu (1), gcp (1)
> **Cross-References:** in the next (2)
> **Analogies:** for instance (1), just like (1)
> **URLs:** [neo4j.com](https://neo4j.com) (1)

#### Neo4j user interface and CLI explained
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=0)** - [Instructor] There are two ways how to interact with your Neo4j AuraDB.
>
> **[0:05](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=5)** The first one is the browser, and the second one is Neo4j Bloom.
>
> **[0:09](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=9)** Here's an example of the browser.
>
> **[0:11](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=11)** The browser is something where you can run queries interactively.
>
> **[0:16](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=16)** So here I have a query where we match a Person and Business, and then, in the direction of the zip, where we say, "Okay, return us where the user is named Gilbert Harris, and return for us the person, the business, and the zip code."
>
> **[0:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=34)** On the right here, we can click run, and we can run this.
>
> **[0:38](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=38)** And it's going to return us this as a graph, how this looks and how the data is organized.
>
> **[0:46](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=46)** So we can see here in the center, we have Gilbert Harris, and then on the outside, we have our locations, and completely outside here in blue, we have our zip codes.
>
> **[0:59](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=59)** On the right, you always see the attributes for this.
>
> **[1:02](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=62)** So when I go for the Zip code, we have id and zip.
>
> **[1:05](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=65)** Then for the Business, we have business_address and so on.
>
> **[1:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=68)** And for Gilbert, we have the deviceID and the user_name.
>
> **[1:11](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=71)** You can show this also as a table.
>
> **[1:13](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=73)** I personally like a lot the graph view.
>
> **[1:15](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=75)** Then, the second way is to explore your data using the Neo4j Bloom interface.
>
> **[1:22](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=82)** Now, the cool thing with Bloom is that you can explore your data in a very natural way.
>
> **[1:30](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=90)** How this is, let's say we want to find out, and this is also from our example that we're going to set up in this course, let's go from the Person, Person VISITED, so we use here the VISITED relationship, and then Business, VISITED Business, Person VISITED Business.
>
> **[1:46](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=106)** We press Enter.
>
> **[1:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=108)** And then this is going to show us a graph of how everything fits together.
>
> **[1:53](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=113)** Now, this is limited by the amount of nodes and relationships.
>
> **[1:58](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=118)** You can also configure this, but you cannot set this super high.
>
> **[2:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=121)** But it allows you to actually look into something here.
>
> **[2:04](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=124)** Okay, now, here we have our Business.
>
> **[2:06](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=126)** Let's analyze this Business.
>
> **[2:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=128)** You could then say, okay, let's draw this here.
>
> **[2:12](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=132)** And let's see, and let's Expand this, Expand ISLOCATED.
>
> **[2:17](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=137)** So we see which zip code this is in.
>
> **[2:20](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=140)** And then for the Zip code, you can Expand this, for instance, with All.
>
> **[2:24](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=144)** Then you see all the businesses that are around this zip code.
>
> **[2:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=147)** So it's really nice how you can work with Bloom to interact with your database, to explore your database.
>
> **[2:35](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=155)** These are the two main options for queries, and you can also then later profile queries here.
>
> **[2:42](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=162)** Use your normal browser.
>
> **[2:45](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=165)** It's a very nice tool.
>
> **[2:46](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=166)** Very, let's say, typical tool to interact with the database through writing queries, or do this completely visually with Bloom, which I personally like a lot.
>
> **[2:57](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=177)** Here, when you zoom in more, you can also see more details of this, of what's displayed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (4), this. (2), interface (1), super (1)
> **Env Vars:** visited (4), islocated (1)
> **Code Identifiers:** business_address (1), deviceid (1), user_name (1)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** find (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### How to use Python to work with Neo4j
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=0)** - [Instructor] For interacting with your database we are going to use Py2neo here.
>
> **[0:06](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=6)** It's a Python library that I personally like.
>
> **[0:09](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=9)** There is also a standard library for Neo4j.
>
> **[0:13](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=13)** The upside with Py2neo and why I chose this is it has a very nice feature of bulk uploading data from a CSV file into your database which is very simple and is also nice to work with transactions and querying data for Py2neo, so that's why I chose this and that's why I also recommend this to start with.
>
> **[0:36](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=36)** If you want to dive into the documentation yourself a bit, just go to [Py2neo.org](https://Py2neo.org) and then on the main page, you can scroll down here, and this is where you have all your important things.
>
> **[0:49](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=49)** Look into graph objects here.
>
> **[0:51](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=51)** This is very important because the graph object is the actual object where you are interacting with the database.
>
> **[0:59](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=59)** You can start transactions here.
>
> **[1:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=61)** You can commit transactions.
>
> **[1:03](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=63)** You can run cypher queries and so on with this.
>
> **[1:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=68)** Now, how do you install this?
>
> **[1:12](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=72)** There are two ways of installing this when you go back to the Py2neo handbook here, you can do just simple, a PIP install, upgrade Py2neo if you are on a Linux system.
>
> **[1:23](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=83)** The problem is usually with Microsoft, you don't have that.
>
> **[1:28](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=88)** You need to find a way of installing this.
>
> **[1:30](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=90)** And I'm personally using a lot Anaconda as a managing tool for Python on my Windows machines.
>
> **[1:38](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=98)** So how to do this is you go in and you go into the Anaconda navigator.
>
> **[1:45](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=105)** Once you are in the navigator you use here in the middle CMD. exit prompt and you launch this prompt.
>
> **[1:52](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=112)** Then you can do here, a PIP install, upgrade Py2neo and just execute this.
>
> **[1:58](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=118)** I have already installed it, so, it's already saying here on the left requirement already satisfied.
>
> **[2:05](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=125)** Well, that's the simple way of installing this.
>
> **[2:07](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=127)** One thing that is important, and I want you to make this change right now, is you need to modify something in your VS code.
>
> **[2:15](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=135)** So going to VS code, I brought up here the source code of one of our later lessons, but that's not the important part here.
>
> **[2:22](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=142)** One thing that you're going to run in when you run this with on the top right front Python file is very often you run into an error straight up here.
>
> **[2:33](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=153)** And when you scroll up, it says here conda activate base.
>
> **[2:37](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=157)** It doesn't find this conda.
>
> **[2:38](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=158)** You cannot execute conda commands.
>
> **[2:41](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=161)** This has something to do because the terminal is running PowerShell and with Anaconda, you cannot use PowerShell here.
>
> **[2:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=168)** So, what you do is on the right, there is the plus, you use the dropdown and you say select default profile, click this, and then go up here where you select just command prompt.
>
> **[3:02](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=182)** Just go select command prompt.
>
> **[3:04](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=184)** And with that, that's it.
>
> **[3:07](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=187)** So from this point on, you define that you're going to use the normal command line for executing your code.
>
> **[3:13](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=193)** And this is where it's going to find conda and this is where it's going to find the libraries then.
>
> **[3:18](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=198)** So, this is a very important step.
>
> **[3:20](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=200)** Now that we have set this up, we are done with the installing part and we can continue.

> [!info]- Semantic Content
>
> **Tools:** anaconda (3), vs code (2), powershell (2), command prompt (2), terminal (1)
> **CLI Commands:** find (4), python (3), pip (2), make (1)
> **Code Keywords:** this. (4), this, (1), continue (1)
> **Env Vars:** pip (2), csv (1), cmd (1)
> **UI Navigation:** go to (1), scroll down (1), scroll up (1), dropdown (1)
> **Prerequisites:** install (3)
> **URLs:** [py2neo.org](https://py2neo.org) (1)
> **Cross-References:** go back to (1)

#### Neo4j security best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=0)** - [Instructor] Now that we have the database set up and we have our Python library installed, I quickly want to spend a few words on security.
>
> **[0:10](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=10)** Security is always very important and there are two aspects that you need to look into, security, that is first securing your infrastructure, basically isolating your database in your network.
>
> **[0:24](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=24)** So you want to set up a way of security zones and firewalls to limit the access to your actual database.
>
> **[0:33](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=33)** So you might want to just open certain ports in your network, or you might want to only have access to your database from certain IP addresses.
>
> **[0:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=43)** It's very important to do this.
>
> **[0:45](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=45)** The network infrastructure security is there for making sure that nobody can access your database from systems that are unsecure or systems where you don't want to have access from.
>
> **[1:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=61)** The second part is protecting data at rest.
>
> **[1:04](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=64)** Now let's say you are in the self-managed infrastructure as we discussed in number one here.
>
> **[1:10](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=70)** You want a way of encrypting the data that is on your servers.
>
> **[1:16](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=76)** It could be that your infrastructure is safe and it's hard to access the data.
>
> **[1:21](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=81)** But if somebody has access to the server, this person could do almost everything.
>
> **[1:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=87)** So keep that in mind.
>
> **[1:28](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=88)** Protect data addressed, use volume encryption so nobody can just get a hard drive and access the hard drive and also enforce correct access permissions to the files and the drives and the servers.
>
> **[1:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=103)** So nobody from the inside or a hacker can actually hack into the server itself and access the data.
>
> **[1:51](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=111)** Three best practices for security that are very easy to realize are these.
>
> **[1:58](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=118)** First, use encryption.
>
> **[2:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=120)** So whenever you have a client talk with the server, use encrypted connection.
>
> **[2:07](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=127)** The connection from Python clients to your database in production should always be encrypted.
>
> **[2:13](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=133)** So nobody can sniff out the transmission and look into what data has been communicated throughout with the client and this server.
>
> **[2:25](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=145)** This is something encryption is important.
>
> **[2:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=147)** Then for actually securing the access, make sure that you use access tokens.
>
> **[2:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=154)** Tokens are always good to use because they're secure.
>
> **[2:38](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=158)** Use them for your users.
>
> **[2:40](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=160)** Every user gets a access token.
>
> **[2:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=163)** This token is only for this user.
>
> **[2:45](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=165)** This token can be manually invalidated if you would have a breach, or if you're unsure if a user leaves the company, whatever, or leaves the team.
>
> **[2:56](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=176)** Same thing goes for systems.
>
> **[2:58](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=178)** You don't want your web interface that queries data out of your database to straight up have access to your database.
>
> **[3:06](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=186)** You want to have something like a token infrastructure around it where the web server itself has an access token.
>
> **[3:14](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=194)** And this token is only for the web server and only the web server knows this token and can access data with this token.
>
> **[3:22](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=202)** Tokens also are a combination with access roles, right?
>
> **[3:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=207)** Because you only want to limit your users for certain roles.
>
> **[3:32](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=212)** You have admins who can do certain stuff.
>
> **[3:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=214)** You have testing testers who can do certain stuff.
>
> **[3:39](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=219)** You have users who can only read data.
>
> **[3:42](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=222)** You have certain web interfaces.
>
> **[3:44](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=224)** One web interface might only be able to access this database.
>
> **[3:49](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=229)** The other only access this database.
>
> **[3:52](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=232)** So it's very important to isolate your database or databases through access roles.
>
> **[3:58](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=238)** This is through network security.
>
> **[4:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=241)** This is firewalls.
>
> **[4:02](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=242)** This is also on a database level, very important.
>
> **[4:07](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=247)** And with that to keep these three things in mind and also what I discussed before, infrastructure and data address, then you're very well set up for development and for production.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), this. (1), from. (1), let (1), self (1)
> **CLI Commands:** python (2), make (1)
> **Prerequisites:** set up (3)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)


### 3. Writing Data

#### The data set explained and goals
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980&t=0)** - [Instructor] Every project starts with data and with goals.
>
> **[0:05](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980&t=5)** So let's first look into the data.
>
> **[0:07](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980&t=7)** The data that we're going to use for our project to contact trace people is a combination of two datasets.
>
> **[0:16](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980&t=16)** There is a public dataset for San Francisco where you have businesses in San Francisco.
>
> **[0:23](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980&t=23)** I used this dataset, and I created fake users for this dataset.
>
> **[0:28](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980&t=28)** So I created 5,000 people, and I selected 2,500 stores out of the San Francisco dataset.
>
> **[0:36](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980&t=36)** I then let these 5,000 people make in summary 50,000 transactions, or 50,000 visits, to these 2,500 stores.
>
> **[0:46](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980&t=46)** The information in the CSV file of this project is in every row of this file.
>
> **[0:53](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980&t=53)** We have the information for the user name, in this case, as an example, Casey Sanders.
>
> **[0:59](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980&t=59)** We have the deviceID of Casey, which is a unique ID.
>
> **[1:03](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980&t=63)** And we have the scan timestamp as an epoch value when this person has visited the business.
>
> **[1:09](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980&t=69)** Then we have a unique business ID, the name of the business, the actual address in San Francisco, the zip code, and a longitude and latitude value.
>
> **[1:19](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980&t=79)** So if we would want to do this, we could get up a map of San Francisco and put the businesses onto the map.
>
> **[1:28](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980&t=88)** With that, we have our data.
>
> **[1:30](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980&t=90)** Our main goal here in this project is to set up a database where we put this data in and we can select an individual person, see where this person went, and see who this person met there, or who else was at this business.
>
> **[1:49](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980&t=109)** So let's start designing our database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), public (1), case, (1), this, (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Code Identifiers:** deviceid (1)
> **Env Vars:** csv (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Modeling data as a relational database
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=0)** - [Instructor] Now that we know the data, let's design ourselves the database.
>
> **[0:04](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=4)** The easiest way how I always do this and how I recommend this to all students who want to learn something new like Neo4j is to first look at this typical way how you do this.
>
> **[0:16](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=16)** Look at a relational database.
>
> **[0:18](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=18)** How would you do this in a relational database?
>
> **[0:21](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=21)** So let's say we want to store this information.
>
> **[0:24](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=24)** We have on the left our table with the users with user ID, username, and device ID.
>
> **[0:30](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=30)** The user ID is just a auto increment integer.
>
> **[0:33](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=33)** It's the primary key for the user table.
>
> **[0:36](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=36)** On the right side, we have our business table with also a primary key for a business ID that gets auto generated.
>
> **[0:45](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=45)** We have our business ID, business name, business address, ZIP Code, longitude, and latitude.
>
> **[0:51](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=51)** These are the two main tables.
>
> **[0:53](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=53)** Now, how can we make this relationship between users visiting businesses?
>
> **[0:58](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=58)** How we do this is we are creating a N-to-M relationship, a many-to-many relationship.
>
> **[1:06](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=66)** Many-to-many relationships, there is only one way of really resolving these in relational databases is by adding another table.
>
> **[1:15](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=75)** And that's the middle table here.
>
> **[1:16](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=76)** That's the Scans table.
>
> **[1:18](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=78)** Each row of the Scans table has a primary key on its own.
>
> **[1:22](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=82)** It has the attribute of the scan time once the scan has happened, and then it has foreign keys, the primary keys of the user and the business table.
>
> **[1:32](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=92)** So this way, you can, for each scan, make a connection between the user and the business.
>
> **[1:38](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=98)** So although we have only two entities here, the user and the business, we need three tables to actually manage this.
>
> **[1:47](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=107)** There is something that is a negative in this.
>
> **[1:50](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=110)** Let's say you have the users and the businesses in the system.
>
> **[1:53](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=113)** Now people are going out and they're making scans.
>
> **[1:57](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=117)** So the middle table, the Scans table is going to explode in size, which is never really, really good and problematic from a storage and query standpoint.
>
> **[2:09](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=129)** So if you would still be unsure if Neo4j or NoSQL database is a good selection, this would be a very good indication that you're going to need something like this, especially in the case where you have hundreds of millions of scans.
>
> **[2:23](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=143)** Now, also one thing that makes this a bit complicated is you have many indices in this.
>
> **[2:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=151)** You have the user ID as the primary key, you have the primary key for the scans.
>
> **[2:35](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=155)** You have the primary ID for the business table.
>
> **[2:39](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=159)** You also have these foreign keys in the Scans table.
>
> **[2:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=163)** So this makes it very complicated in having all these IDs and needing to index all these IDs for a relational database.
>
> **[2:53](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=173)** This also makes the querying expensive because you have to always join these tables together, right?
>
> **[3:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=181)** You need to join the user tables, the Scans table, the business table, and try to filter or match the right information.
>
> **[3:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=188)** For the database, this is very expensive.
>
> **[3:11](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=191)** It's also expensive for inserts because you need to write the data into three tables.
>
> **[3:17](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=197)** These tables are connected.
>
> **[3:19](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=199)** Each of the table has a primary key.
>
> **[3:22](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=202)** That key needs to be indexed.
>
> **[3:23](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=203)** So the index is also growing for all of these three tables especially for the Scans table.
>
> **[3:30](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=210)** The index is growing very large.
>
> **[3:32](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=212)** All in all, yes, it's fairly easy to build as you see.
>
> **[3:36](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=216)** This design is fairly easy but it's also unnecessarily complicated and has an unnecessary overhead.
>
> **[3:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=223)** So let's look next into how we would design this in Neo4j.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (4), this, (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Env Vars:** zip (1)
> **Speakers:** - [instructor] (1)

#### Modeling the Neo4j database
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=0)** - [Instructor] So now that we have our relational database with the user table, the Scans table, and the Business table, let's look into a way of doing this with Neo4j, because this might be a bit complicated.
>
> **[0:15](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=15)** In Neo4j, let's build this.
>
> **[0:16](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=16)** So we would start on the left here, create us a node type that is called Person.
>
> **[0:21](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=21)** On the right, we would create us a node type for the Business.
>
> **[0:25](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=25)** That resembles already a lot the tables in our relational database.
>
> **[0:29](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=29)** Now the relation.
>
> **[0:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=31)** In our relational database, we had an extra table for this.
>
> **[0:35](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=35)** Here, we would just create a relationship from Person to Business that is indicated by the arrow and then call this VISITED.
>
> **[0:44](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=44)** This way, we already have almost everything.
>
> **[0:47](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=47)** Then we have our attributes.
>
> **[0:49](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=49)** Person would get attributes user_name:text, deviceID and text, for the data type.
>
> **[0:55](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=55)** The business would get the business_id, business_name, business_address, longitude, latitude, and the zip code.
>
> **[1:02](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=62)** The VISITED would have the scan_timestamp so we can actually understand when has this visit happened.
>
> **[1:10](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=70)** Compare this in your mind to the relational database.
>
> **[1:13](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=73)** This is only two nodes, one relation.
>
> **[1:16](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=76)** Pretty straightforward.
>
> **[1:17](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=77)** This is exactly how you would expect this to be, to build this, not like with the relational database.
>
> **[1:24](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=84)** Now, let's make this one step more complicated, and let's exclude the zip code from the Business.
>
> **[1:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=91)** So we're going to continue here.
>
> **[1:33](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=93)** The left side, Person, VISITED Business is still the same, but what we're going to do is we're going to add the Zip as a type of node here.
>
> **[1:42](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=102)** And we're going to say Business ISLOCATED Zip.
>
> **[1:46](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=106)** So this means we now can make the distinction, okay, this business is in this zip code, or the other way around, this zip code has these businesses in it.
>
> **[1:56](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=116)** From a relationship side, or from a design side, very straightforward, very simple.
>
> **[2:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=121)** This is the final Neo4j database schema that we are including here, that we're using in our project, including the zip code.
>
> **[2:10](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=130)** Let's look quickly, if we would have the zip code, how would our relational database look like?
>
> **[2:15](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=135)** So we would need to add another table here with a, setting a primary key for the Zip code, and then using this primary key as a foreign key in our Business table.
>
> **[2:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=147)** So this means already now we have four tables in this.
>
> **[2:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=151)** The relational database gets even bigger.
>
> **[2:33](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=153)** When we go back to our Neo4j database, very straightforward.
>
> **[2:38](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=158)** Three node types, Person, Business, Zip.
>
> **[2:40](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=160)** Two relationships, VISITED and ISLOCATED.
>
> **[2:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=163)** And that's it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (3), type. (1), this, (1), continue (1)
> **CLI Commands:** node (4), make (2)
> **Code Identifiers:** user_name (1), deviceid (1), business_id (1), business_name (1), business_address (1)
> **Env Vars:** visited (4), islocated (2)
> **Cross-References:** go back to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### How to bulk import CSV data into Neo4j
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=0)** - [Instructor] Let's write some data into our database.
>
> **[0:02](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=2)** What we're going to start here is we're going to start with a file import, which means we're taking a file that is full of transactions, and we're loading it at once into the database.
>
> **[0:16](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=16)** For this, Py2neo is very good because Py2neo has actually a library for this.
>
> **[0:22](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=22)** This is something different than what we're doing later, where we have individual transactions, and we're saving individual transactions in the database.
>
> **[0:30](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=30)** Let's start, but first here, what you see, Py2neo import Graph and the Py2neo.bulk.
>
> **[0:38](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=38)** These are the important libraries for interacting with our Neo4j database, then we have an import pandas as pd.
>
> **[0:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=48)** We do this because, for the preparation of the data, we are going to use pandas here.
>
> **[0:55](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=55)** Pandas is a library that is very nice because you can easily load CSV files and then modify them as if it is a table.
>
> **[1:03](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=63)** If you are unsure with pandas, you need to have a quick fresh-up, I put in a link here for you, where you can go, and it's a 10-minute user guide how to use pandas.
>
> **[1:15](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=75)** So, then we do an import JSON, and then we are going to start and load our data with pd.read_csv, we're going to load our CSV file.
>
> **[1:26](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=86)** The CSV, our prepared dataset, here, in my folder, it's laying under data/sf_dataset.csv, and we're going to load this into a data frame, which I call em_data frame for import data.
>
> **[1:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=103)** Then, what we need to do when you think back on our design, we had the design of a node type person, we had the node type business, and we had the node type zip, and between them we had relations, from person to business, from business to zip, and this is what we need to do here as well.
>
> **[2:03](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=123)** So, we're going to take our dataset that we get in, and we're going to prepare our business data for the nodes, for the business nodes.
>
> **[2:11](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=131)** For this what we do is, first, we take our now basically table of our data, and we're going to filter out only the information we need for the business.
>
> **[2:21](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=141)** So, we need the business_id, we need the business_name, the business_address, latitude, longitude.
>
> **[2:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=147)** So then, we have only these columns.
>
> **[2:30](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=150)** What we're then going to do, after that, we're going to drop the duplicates for this because, remember, we had 50,000 transactions, so there are multiple rows with the same business in it because multiple people went to the same business, but we don't want to recreate this node over and over, so let's just drop all the duplicates based on the business_id and just keep the last one.
>
> **[2:54](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=174)** After that, we're going create a JSON out of this, and then, we'll load it where we create a dictionary out of our JSON.
>
> **[3:05](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=185)** These exact steps, we're going to take for the person as well, and we're going to take for the zip.
>
> **[3:11](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=191)** So, the only thing that changes here is for the person, we need the user_name and the deviceID instead of business_id, like here on top, business_id, business_name.
>
> **[3:23](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=203)** Then, we do the same, we say, okay, drop_duplicates.
>
> **[3:26](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=206)** I added here a print for you.
>
> **[3:28](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=208)** This print will help you to visualize in the output of the console how the data frames look and how long they are.
>
> **[3:35](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=215)** This here is a length of this person, so we see how many people we have in there.
>
> **[3:41](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=221)** Then, again, we take this out, create a JSON out of this, and then, we load this JSON and create a dictionary for it.
>
> **[3:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=228)** Same thing we do with the node.
>
> **[3:51](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=231)** For the node, we just have the ZIP Code, so we take the zip, and, again, remove the duplicates and so on.
>
> **[3:57](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=237)** And then, we have our data for our dictionaries for our nodes, for the person, the business, and the ZIP Code.
>
> **[4:04](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=244)** We made this step back to dictionaries because our Py2neo actually needs dictionaries then to work with.
>
> **[4:12](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=252)** So, with that, the nodes are ready, then we need to prepare the relationships.
>
> **[4:16](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=256)** For the relationship, we do the same thing, first, we take our whole data, and we're going to it further.
>
> **[4:23](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=263)** We're going to filter based on where their relationship is going to go.
>
> **[4:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=267)** So, for the relationship between person and business, what we need is, we need the business_id, we need the deviceID, and we need the scan_timestamp.
>
> **[4:37](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=277)** Scan_timestamp is the attribute for our relationship, and the business_id and deviceID are the, let's call them primary keys for our nodes.
>
> **[4:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=288)** Then, we do again, we do a JSON load, and we put it into a dictionary.
>
> **[4:52](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=292)** Same thing we're going to do for the relationship between business and ZIP Code, we just filter by zip business_id and by zip, and this gives us all the information that we need because this relationship has no attribute in it like the scan_timestamp for person between person and business.
>
> **[5:12](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=312)** Here, I left a few prints, so once you do that, you can do a few prints to see how this looks, and then, we're going to create the connection with Neo4j.
>
> **[5:24](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=324)** For this, you instantiate the graph here.
>
> **[5:26](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=326)** The first variable is the link to your database that you have, then we do the authentication, first is the username, and then this is your secret access key that you got once you created the database.
>
> **[5:42](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=342)** Then, we have the connection, after that, the step is to bottle everything in.
>
> **[5:47](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=347)** So, we create the nodes with the Create nodes function, say it's graph.auto, this means auto commit this, we give it the dictionary for the businesses, label this as Business, and then, once this is done, we're going to do a count, where we say, okay, let's print ourselves the nodes that match the Business label.
>
> **[6:12](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=372)** so we see how many business did we actually put in.
>
> **[6:15](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=375)** Same thing we do for the zip, and same thing we do for the person.
>
> **[6:20](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=380)** So this is a bit of a different order than above, but we write the zip nodes, and we write the nodes for the person.
>
> **[6:29](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=389)** And then, the nodes are in there, we have written everything, then we need to create our relationships.
>
> **[6:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=394)** For the relationships, what we need to do is, we need to create a dictionary out of this.

> [!info]- Semantic Content
>
> **Code Identifiers:** business_id (7), deviceid (3), business_name (2), scan_timestamp (2), read_csv (1)
> **Code Keywords:** let (5), this, (5), this. (2), import, (1), function (1)
> **Env Vars:** json (6), csv (3), zip (3)
> **CLI Commands:** node (6)
> **Definitions:** is a  (4)
> **File Paths:** data/sf_dataset.csv (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### How to bulk import relational CSV data into Neo4j
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=1)** So in the previous video, I've shown you how to create the nodes for the businesses, for the zip codes and for the people.
>
> **[0:07](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=7)** Let's create the relationships.
>
> **[0:09](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=9)** Creating relationships is a bit more tricky.
>
> **[0:12](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=12)** How this works is we need to use the function, create relationships of pi to new.
>
> **[0:18](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=18)** And what this function needs is, first the graph.
>
> **[0:21](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=21)** So it can do an auto commit here.
>
> **[0:24](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=24)** Then it needs a variable with two pulls.
>
> **[0:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=27)** More to that in a second.
>
> **[0:28](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=28)** It needs the name of the relationship and the start node key and an end node key.
>
> **[0:33](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=33)** So for the person, it will be the device ID and for the business, it will be the business ID.
>
> **[0:40](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=40)** So how does this variable look?
>
> **[0:42](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=42)** The idea with this is, this needs to be a tool or a list of tools, to be exact.
>
> **[0:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=48)** Above here I commented you an example how this looks.
>
> **[0:52](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=52)** So the first part of the two pull will be here.
>
> **[0:56](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=56)** This needs to be our ID of device, ID of the person.
>
> **[1:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=60)** Then we can, in the next part of the two pull, give it attributes that our relationship needs to have.
>
> **[1:06](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=66)** So this is a chase on.
>
> **[1:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=68)** This means you can add multiple attributes in here and then we have the business ID.
>
> **[1:14](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=74)** And of course, this is a list.
>
> **[1:16](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=76)** So we can add multiple relationships at once.
>
> **[1:19](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=79)** How this works is what we do.
>
> **[1:21](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=81)** We created before our dictionary for the relationship.
>
> **[1:25](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=85)** Let's go quickly above here, dict relationship it's this here.
>
> **[1:29](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=89)** And what we've done is we had business ID, device ID and scan timestamp in this data frame and then in this dictionary.
>
> **[1:36](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=96)** So what we do, we loop over this dictionary and for each run what we do is we take the device ID store in a variable.
>
> **[1:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=103)** We take the business ID stored in a variable and then we pop each of these out of this variable P.
>
> **[1:50](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=110)** So in P will only be the timestamp.
>
> **[1:53](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=113)** What we then do is we, to our export dictionary, we append our tool device, timestamp, business.
>
> **[2:03](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=123)** And that is exactly what we need.
>
> **[2:05](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=125)** This is exactly this format here.
>
> **[2:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=128)** With that we then create this and this print.
>
> **[2:12](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=132)** Although I kept it in this will not return as anything.
>
> **[2:16](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=136)** Somehow create relationship will not return as the number of relationships that it's created.
>
> **[2:22](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=142)** And then we do exactly the same also for the relationship business ID and zip.
>
> **[2:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=147)** In business ID and zip we don't have an actual attribute, right?
>
> **[2:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=151)** It's just it's in, but for creating here we actually need an attribute.
>
> **[2:37](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=157)** And so I manually add it here, active one.
>
> **[2:40](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=160)** And then we do exactly the same.
>
> **[2:42](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=162)** So we loop over this and we add these here and yeah, that's it.
>
> **[2:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=168)** And then we write it with the start node business, business ID and the end node zip, zip.
>
> **[2:55](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=175)** All right.
>
> **[2:55](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=175)** So let's start this.
>
> **[2:57](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=177)** Let's do our bulk import.
>
> **[2:58](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=178)** So on the top, right, press play, run Python file.
>
> **[3:05](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=185)** And let's put in our data.
>
> **[3:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=188)** So we can already see here on the bottom.
>
> **[3:11](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=191)** These are the print statements that I created, the 2,500.
>
> **[3:15](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=195)** That's the amount of businesses that we have in the 36 is the zip codes and the four, nine, nine, eight that is the people that we put in.
>
> **[3:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=207)** Now we have to wait here a sec because it's, right now, creating our relationships.
>
> **[3:33](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=213)** So you will see here none appearing below our 4,998 on the bottom.
>
> **[3:41](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=221)** So let's just wait for this and then continue.
>
> **[3:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=223)** This takes a a minute.
>
> **[3:45](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=225)** All right.
>
> **[3:46](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=226)** And here we are.
>
> **[3:47](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=227)** We see the two nodes, the data is in the processing is done.
>
> **[3:51](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=231)** It took me two to three minutes for this.
>
> **[3:54](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=234)** So let's continue.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (2), this. (2), continue (2), new. (1)
> **CLI Commands:** node (4), python (1)
> **Definitions:** is a  (3)
> **Cross-References:** previous video (1), in the next (1)
> **Speakers:** - [instructor] (1)

#### How to write transactions to Neo4j with Python
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=0)** - [Instructor] In the last part, we did a BLIC import, which meant we had a CSV file with many rows in it.
>
> **[0:06](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=6)** And we at once took this file and wrote this into the database.
>
> **[0:11](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=11)** Now, let's go the other way around where we have a single transaction and we store the single transaction into our Neo4j database.
>
> **[0:19](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=19)** What we need to do is first here we need to set our import straight.
>
> **[0:23](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=23)** So here in line two, we need to say from Py2neo.
>
> **[0:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=27)** We need to import graph, node, relationship, and a node matcher.
>
> **[0:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=31)** Graph again like here in line four is our connection to the database.
>
> **[0:36](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=36)** So give it the address of the database, the name of the user, and the key that we are in.
>
> **[0:44](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=44)** After that, we need to create a matcher.
>
> **[0:46](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=46)** We instantiate here a node matcher in our graph, which allows us to query data from it.
>
> **[0:52](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=52)** Then let's begin our transaction because this will be a transactional write.
>
> **[0:57](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=57)** This means if something fails, we can actually do a rollback.
>
> **[1:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=61)** How this works is we say, begin a transaction TX here and then let's try this.
>
> **[1:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=68)** So first we say, let's match our person if the person with the device ID full of zeros and one is here and give one result back.
>
> **[1:18](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=78)** If this person is not here, then we're going to write it.
>
> **[1:22](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=82)** And who is this?
>
> **[1:23](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=83)** We're going to write myself.
>
> **[1:25](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=85)** So we're going to write a node from the type person with the device ID 0001 and with my name.
>
> **[1:32](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=92)** And we say TX create, this creates the node.
>
> **[1:35](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=95)** If the note is in there, we do an if where we say, if the node doesn't exist, even if we just created it here, then let's raise an exception and let's do a rollback.
>
> **[1:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=108)** Once we raise the exception, this will go down here where we have our exception block.
>
> **[1:52](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=112)** And this will roll back our transaction and print us out the message.
>
> **[1:57](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=117)** So if this works and this is done, then we create ourselves a relationship with the business.
>
> **[2:05](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=125)** So we're going to get ourselves the business node here, we match our business by business ID, get this back, add our property, or create our property with the timestamp.
>
> **[2:17](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=137)** When was this created? When was this scanned?
>
> **[2:20](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=140)** And then we are going to set up our relationship.
>
> **[2:24](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=144)** Our relationship is here the person A, we have above here, person node.
>
> **[2:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=151)** This is our relationship type visited.
>
> **[2:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=154)** Then here is our target for this relationship, our business, and in the properties that we have our scan_timestamp.
>
> **[2:42](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=162)** So this creates us a directional relationship from the person, from me to a business.
>
> **[2:53](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=173)** This r.identity here you can forget.
>
> **[2:55](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=175)** Just leave this out.
>
> **[2:57](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=177)** And then do a tx.create R.
>
> **[3:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=180)** Same thing we do here.
>
> **[3:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=181)** If this exists, everything is good.
>
> **[3:04](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=184)** If this doesn't exist, we raise an exception.
>
> **[3:06](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=186)** And after this, once we get here, we know the person has been written, the relationship has been created.
>
> **[3:13](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=193)** We commit our transaction and that's it.
>
> **[3:16](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=196)** So let's start this.
>
> **[3:18](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=198)** Let's put in this person. That's it, done.
>
> **[3:22](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=202)** And then we can look and we can query from the database.
>
> **[3:28](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=208)** How we're going to do this is we're going to go into our Neo4J browser.
>
> **[3:32](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=212)** And here in the code, I prepared for you a few statements that you can execute.
>
> **[3:39](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=219)** So take this.
>
> **[3:39](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=219)** Let's match the person.
>
> **[3:42](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=222)** Let's see if I'm in there, execute this on the right.
>
> **[3:46](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=226)** Here's me, here's the person.
>
> **[3:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=228)** On the right, you see device ID 001, username, myself, and the unique ID for this person that automatically gets created inside the database.
>
> **[3:58](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=238)** What we can do once we're here, we can enlarge this as well.
>
> **[4:03](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=243)** And then we can see which business I visited.
>
> **[4:05](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=245)** So I visited American Rent A Car here.
>
> **[4:10](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=250)** We could also look this the other way around where we say, let's match our business.
>
> **[4:17](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=257)** American Rent A Car.
>
> **[4:18](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=258)** Let's enlarge this.
>
> **[4:19](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=259)** Who went there?
>
> **[4:20](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=260)** And there should be me somewhere, here, there's me.
>
> **[4:26](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=266)** So that worked, very good.
>
> **[4:28](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=268)** So what have you learned here?
>
> **[4:30](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=270)** You learned here two things at once.
>
> **[4:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=271)** You learned how to write something to the database and also how to create a simple matcher where you can match notes and return these notes.
>
> **[4:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=283)** There's also a way of matching or querying data with Cypher query.
>
> **[4:50](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=290)** That's something for you to do.
>
> **[4:51](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=291)** It's also available with Py2neo.
>
> **[4:53](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=293)** It's very simple. Check that out.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), this. (4), raise (3), import, (1), this, (1)
> **CLI Commands:** node (8)
> **Env Vars:** blic (1), csv (1)
> **Code Identifiers:** scan_timestamp (1)
> **Cross-References:** in the last (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Query Data

#### How to explore Neo4j data with the user interface
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=0)** - [Instructor] Now, we have written our data in with the Bel import and through the transactions, let's look at the data.
>
> **[0:06](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=6)** In the AuraDB overview here, you have two options, Explore which is Neo4j Bloom, and Query which is Neo4j Browser.
>
> **[0:14](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=14)** So let's start with Explore.
>
> **[0:17](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=17)** When you open up Bloom, you will be presented with this message, if you've already opened it up before, to tell you that there's a scene already here, do you want to restore this scene or do you want to create a new one?
>
> **[0:28](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=28)** So let's just create a new one here, and then, let's explore some data.
>
> **[0:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=34)** So we could go in here.
>
> **[0:35](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=35)** We could say, person, and then, visited, business, and let's create this.
>
> **[0:44](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=44)** Now, here in this, as you see on the top right, we have a thousand nodes, 1078 relationships.
>
> **[0:52](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=52)** This is shown in this way because in the perspective configuration here, we have a node limit of a thousand nodes.
>
> **[1:03](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=63)** This makes sense because if you set this very high, it will take a long time for Bloom to work, and then you will run into performance problems, so keep this low.
>
> **[1:14](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=74)** Of course, if you're, let's say you want to go in here and you want to explore this a bit, and select one of the options here, you could look into each of the businesses.
>
> **[1:25](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=85)** You could drag them out here, and explore them further, who is connected to this business.
>
> **[1:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=91)** The problem with the node limit is although you can edit filters here, that we could say, okay, for the, let's look at the business with the property, business id, this one here, and then apply this filter.
>
> **[1:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=103)** This is most likely not in, okay, in this case, it's , it's in, but, they, the business that you most likely want is not in because it's limited to a thousand nodes, and we have more of them.
>
> **[1:56](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=116)** So this is the downside with Bloom, that you don't see all the data, and can only look at a portion of data.
>
> **[2:03](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=123)** And then you could expand it going in further, and say, okay, Jake, where did Jake here go, and, and go here, expand all.
>
> **[2:11](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=131)** And then, you will get more information about Jake.
>
> **[2:17](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=137)** That's really, I'll move the filter here, you see.
>
> **[2:21](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=141)** So Home Reality wasn't shown before because we were at the limit, which is a bit of a problem.
>
> **[2:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=147)** And therefore, if you want to create queries, where you select specific data, it's always better to use the browser.
>
> **[2:35](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=155)** With the Neo4j Browser, put in your password, and then connect to the database, and then you're in.
>
> **[2:41](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=161)** Now here, you can write your queries directly as you would want it.
>
> **[2:46](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=166)** So, in the last lesson, we added me, Andreas Kretz into the database.
>
> **[2:51](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=171)** So let's look at this.
>
> **[2:52](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=172)** Let's try to find me.
>
> **[2:54](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=174)** How we do this is we say match, p person, and then, where p user name equals Andreas Kretz, Return p forward the user, or the person.
>
> **[3:07](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=187)** There's me.
>
> **[3:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=188)** All right, that was easy.
>
> **[3:11](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=191)** Of course, we can now improve this, so we could say here, let's connect the business to it here, b, Business, and return also our business,
>
> **[3:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=214)** and then we have the business here.
>
> **[3:36](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=216)** Me, visited, and then we're in the cart if we hover here or click on the relationship, we can see on the right scan, times tamp.
>
> **[3:45](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=225)** This how you query data from this browser.
>
> **[3:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=228)** You could also go the other way around, where you say, okay, let's match this business, just put in here, business, write this, we have our American Rent A Car, and either we click here on the enlarge, or we would write the query above, and this actually will, tells us everything, who went there, and also, to, in which zip code is it located.
>
> **[4:15](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=255)** So this is pretty, pretty nice.
>
> **[4:17](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=257)** You can also show this in the table view, where you have all the information.
>
> **[4:22](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=262)** We could also create this here through the query, so we would actually then, add to your person in front of here, p, person, connect it to business, and then say here, z, zip, and then, print out here, or b, our p, and our z.
>
> **[4:53](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=293)** Let's, so you can see, it's exactly the same view.
>
> **[4:56](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=296)** We can go ahead into table and now we can see the table.
>
> **[4:59](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=299)** We can see the information for everything that we have in our, in our graph here.
>
> **[5:05](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=305)** So it's created a sub graph for this information that we queried here.
>
> **[5:10](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=310)** And with that, let's look into the python way of querying data, not just through this interface.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), this, (3), this. (2), case, (1), match, (1)
> **CLI Commands:** node (2), find (1), python (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### How to query Neo4j database with Python
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=0)** - [Narrator] All right, so we have written data into the database with the py2neo import of a whole file and with individual transactions.
>
> **[0:09](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=9)** We've also looked at the user interface into the browser, how you can query data in the browser.
>
> **[0:15](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=15)** Now, usually you would not use the browser for doing complex stuff.
>
> **[0:19](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=19)** It's nice to look into data ad hoc if you want to search something, but with usually you would use this within code.
>
> **[0:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=27)** So for that, we use Python as well.
>
> **[0:29](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=29)** We start here in this code by importing graph from py2neo and then a pretty print I used here because it's a bit nicer for the output, so you understand what's going on.
>
> **[0:42](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=42)** We start again by instantiating our graph and then we run queries against this graph.
>
> **[0:47](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=47)** The first thing is, I know there's a person in there that is called Gilbert Harris because I looked at the automatically created data set in there.
>
> **[0:55](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=55)** Let's find out where Gilbert went and in which zip code this business is.
>
> **[1:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=61)** So what we're doing here is we're saying run a match of the person who visited the business.
>
> **[1:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=68)** And that business is located in zip where the username is Gilbert Harris, and return us, the person, the business and the zip.
>
> **[1:18](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=78)** And then this result, we print out and we look into how many results did this actually return.
>
> **[1:26](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=86)** So let's just run a debug here and look at the results.
>
> **[1:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=91)** Run, start debugging.
>
> **[1:39](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=99)** Let's remove this left here.
>
> **[1:40](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=100)** So here's our first results.
>
> **[1:42](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=102)** As you can see, this is how this will come out as a dictionary.
>
> **[1:45](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=105)** And in there, we have our business information.
>
> **[1:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=108)** We have our zip information and we have our P information which is the person, right?
>
> **[1:55](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=115)** P because we called it here P in this.
>
> **[1:58](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=118)** So this is our information that we have.
>
> **[2:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=120)** We have no information, no here above.
>
> **[2:03](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=123)** We have no information about the visit because we didn't return the visit.
>
> **[2:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=128)** We didn't return the timestamp but what this returned us is it says here eight.
>
> **[2:12](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=132)** So this returned us eight results.
>
> **[2:16](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=136)** Now, next is the same thing where just instead of using here the different ways of adding a relation, we just said here this is an arrow from person to business, and another one from business to zip, which returns exactly the same thing.
>
> **[2:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=151)** So let's just walk over this and print this.
>
> **[2:35](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=155)** This also returns as eight pretty straightforward.
>
> **[2:38](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=158)** The next thing is, I want to show you that the relationship direction actually matters for queries.
>
> **[2:45](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=165)** It doesn't matter in a technical way that it doesn't return you the data faster if you follow the direction or not, but in a way of querying the data, it makes a big difference.
>
> **[2:57](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=177)** So before we had eight notes that is returned.
>
> **[3:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=180)** Now, let's just do the exact same thing with Gilbert and zip and so on, but remove the direction.
>
> **[3:06](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=186)** So instead of having an arrow here, we just use two dashes.
>
> **[3:11](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=191)** So let's see what this returns, how much returns this?
>
> **[3:13](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=193)** 160, right?
>
> **[3:16](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=196)** So this will return us a lot more information because we didn't give it a direction.
>
> **[3:23](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=203)** Let's go further.
>
> **[3:24](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=204)** Let's use a second example here.
>
> **[3:26](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=206)** There's a bank or there are a few banks in there.
>
> **[3:29](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=209)** Let's find people who went to a bank and not just by selecting an individual bank but selecting a bank by reg X.
>
> **[3:40](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=220)** So we know it starts with bank.
>
> **[3:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=223)** That's what we do is we say, okay, business that has been visited by a person where the business equals and this is the sign for reg X starts with something and then has bank in it and then ends with something.
>
> **[4:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=240)** And we return business and return the person here.
>
> **[4:03](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=243)** So let's see how many results this returns.
>
> **[4:06](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=246)** I also have a pretty print here for the result, for the complete result, but let's just look over, look into this.
>
> **[4:15](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=255)** So this will return as 140 people.
>
> **[4:18](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=258)** Again, if you want to look more into the details, there's a pretty print for this.
>
> **[4:23](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=263)** The other way is what we can do is we can actually say, let's find everybody who visited a bank at a certain time, at a certain date.
>
> **[4:32](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=272)** And this is again, what we do is we do a matter here.
>
> **[4:35](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=275)** And because we set our timestamp up in a way that we have year, day, year, month, and day, we can actually use a reg X and find the right person.
>
> **[4:45](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=285)** So we do hear a match person, we add to a vis, we give the relationship a name, this way we can call it in the where, and then in the where, we say our date followed by something else.
>
> **[4:58](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=298)** So everything under that day is there every timestamp or every hour of the day and minute where the business name has something to do with bank, and then we print it.
>
> **[5:07](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=307)** So let's change my mind.
>
> **[5:09](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=309)** Let's quickly remove the pretty print here.
>
> **[5:12](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=312)** Let's just see how many we can see this here now, but yeah, for you remove the pretty print and just try it out.
>
> **[5:21](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=321)** So this will return as 49 people here who went to a bank and that's it.
>
> **[5:26](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=326)** That's how easy it is to query data with Python, pretty simple, right?
>
> **[5:30](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=330)** It's just creating Cypher queries and executing these queries.
>
> **[5:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=334)** And this will return you then dictionaries full of information.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), this. (4), interface (1), return. (1), else. (1)
> **CLI Commands:** find (4), python (2)
> **Definitions:** is called (1), is an  (1)
> **Speakers:** - [narrator] (1)

#### Neo4j query optimization
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=0)** - [Narrator] Let's talk about query optimization strategies and how you can actually find out where the problems are and try out solutions.
>
> **[0:09](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=9)** So generally, how to optimize queries is instead of just saying MATCH and then round brackets pi, you can go and say MATCH pi and then call on, and then the node type.
>
> **[0:24](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=24)** The good thing is this will already reduce the amount of data that has to be queried on the database because you're immediately filtering out based on the node type and not looking at all the nodes.
>
> **[0:37](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=37)** Of course, this is a very general way of doing this very simple.
>
> **[0:41](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=41)** Now the next part is indexing.
>
> **[0:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=43)** Indexing is always important.
>
> **[0:45](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=45)** It's important for relational databases.
>
> **[0:47](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=47)** It's also important for Neo Force.
>
> **[0:50](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=50)** This means you can create indexes for properties.
>
> **[0:55](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=55)** So you can say, okay, let's create for the person, let's create index for the username because we are searching a lot for the username.
>
> **[1:04](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=64)** So let's create an index for it, this way the database can first look into the index and then query the data actually from the from the drives, which makes it a lot faster.
>
> **[1:16](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=76)** So how would that look with using node labels and using indices?
>
> **[1:21](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=81)** Here's an example, go to your neon browser and in the browser we're going to execute statements.
>
> **[1:27](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=87)** For this lesson, there is a file with all the statements in them.
>
> **[1:30](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=90)** It's this one, it's called query optimization.
>
> **[1:33](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=93)** There is all the statements that we are going to execute here.
>
> **[1:37](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=97)** So in our browser, let's do this.
>
> **[1:39](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=99)** Let's look at the crude way of doing this and doing basically a full table scan.
>
> **[1:44](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=104)** We say MATCH pi so match any node with the user where the username is my name, Andreas Kretz.
>
> **[1:52](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=112)** What this will do is, it will do an all node scan here.
>
> **[1:55](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=115)** So it will return here 7,500 DB hits for this.
>
> **[2:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=121)** So it needs to go into the database and it will return us 7,536, which is all the nodes that were in there, remember, earlier.
>
> **[2:10](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=130)** And then it will filter out 5,000 nodes for the persons where the username is in there, and then it will return as one row.
>
> **[2:19](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=139)** So a way of making this simpler is let's profile this, by the way you profiling are you're doing with the statement here profile before, let's do it like we did before where we say pi and then already mentioned the type where the username is under scripts and pi.
>
> **[2:35](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=155)** So this way, when we execute this, this will only hit on 5,000 rows, only hit on the amount of rows for our persons.
>
> **[2:45](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=165)** So this will still look over all the people in there but it will return us less.
>
> **[2:51](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=171)** Now this 9,998, I'm not sure why this call is here for these amount of hits.
>
> **[2:57](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=177)** The important part is here, node by label scan.
>
> **[3:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=180)** You can also see this here.
>
> **[3:02](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=182)** This is very important in this.
>
> **[3:05](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=185)** Now let's see, does this change if we filter a bit differently here, if instead of doing here a match where we say here MATCH and we put our attribute directly in here as you see makes absolutely no difference at all.
>
> **[3:20](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=200)** It still hit, just does 5,000 hits.
>
> **[3:23](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=203)** So the, the way how you create your, your query this way or with the MATCH and WHERE doesn't really make a difference.
>
> **[3:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=211)** Now, as I said before, the second option is creating indices.
>
> **[3:36](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=216)** So let's create ourselves index for the username of the person.
>
> **[3:42](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=222)** How we do this is we say here create index for pi Person on pi dot username.
>
> **[3:48](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=228)** This will create as an index added one index completed after 65 milliseconds.
>
> **[3:54](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=234)** Now let's run the exact same query as we've run before.
>
> **[3:59](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=239)** Profile, MATCH, return.
>
> **[4:03](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=243)** This will now have a return only one row with two DB hits.
>
> **[4:10](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=250)** And as you can see, it's it's a lot simpler and it's node seek index first.
>
> **[4:15](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=255)** And then it will go to the database.
>
> **[4:17](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=257)** These individual hits I'm not a hundred percent sure how they do this exactly, but this must have to do something with the index and so on.
>
> **[4:26](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=266)** The goal here is that you understand how much is the difference between these.
>
> **[4:31](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=271)** So when we did this here, this would return us 5,000 hits from the database because we do a node by label scan.
>
> **[4:38](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=278)** This here will first seek the index and then get us the data.
>
> **[4:43](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=283)** So very, very fast, big difference right? Again, quick recap, optimize it by using the note type directly here, and also create indices for all the data that you query all the time and need very quick results, so you make sure that you don't do any full table scans.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this. (3), this, (2), type. (1), match, (1)
> **CLI Commands:** node (8), make (2), find (1)
> **Env Vars:** match (6), where (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **SQL:** where (1)
> **Speakers:** - [narrator] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/next-steps?u=76281980&t=0)** - [Instructor] Thanks for watching and congrats for making your first steps with the graph database.
>
> **[0:04](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/next-steps?u=76281980&t=4)** I hope you had as much fun with the course as I had creating it.
>
> **[0:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/next-steps?u=76281980&t=8)** You might ask yourself, "What should I do next?"
>
> **[0:12](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/next-steps?u=76281980&t=12)** I recommend you go and familiarize with yourself with other NoSQL databases that are out there.
>
> **[0:18](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/next-steps?u=76281980&t=18)** Start with document stores like MongoDB or key/value stores like Redis.
>
> **[0:23](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/next-steps?u=76281980&t=23)** Explore time series databases like InfluxDB or wide-column stores like Cassandra.
>
> **[0:30](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/next-steps?u=76281980&t=30)** There's so much to look into.
>
> **[0:32](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/next-steps?u=76281980&t=32)** Where do you find this information?
>
> **[0:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/next-steps?u=76281980&t=34)** Search the LinkedIn Learning Library.
>
> **[0:36](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/next-steps?u=76281980&t=36)** There is a great selection of individual courses or check out my Data Engineering Academy.
>
> **[0:42](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/next-steps?u=76281980&t=42)** There you find a step-by-step path from computer science and engineering basics to platform design fundamental tools up to full hands-on example projects.
>
> **[0:52](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/next-steps?u=76281980&t=52)** Again, thanks for watching.
>
> **[0:54](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/next-steps?u=76281980&t=54)** If you want to get in touch with me, then you can find me here on LinkedIn or through [learndataengineering.com](https://learndataengineering.com).
>
> **[1:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/next-steps?u=76281980&t=61)** If you're looking for free content, then check out my YouTube channel, where I do live streams and upload videos around data engineering.
>
> **[1:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/next-steps?u=76281980&t=68)** Bye.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **URLs:** [learndataengineering.com](https://learndataengineering.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Develop Your NoSQL Skills]]
← [[Introduction to Neo4j]] | **5 of 10** | [[Redis Essential Training]] →

## Appears In

- [[Develop Your NoSQL Skills]]

## Related Courses

_Courses sharing skills:_

- [[Introduction to Neo4j]] — Neo4j

---

[↑ Back to top](#)