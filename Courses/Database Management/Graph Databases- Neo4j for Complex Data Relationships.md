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
  - '[Develop Your NoSQL Skills](../../Paths/Database%20Management/Learning%20Paths/Develop%20Your%20NoSQL%20Skills.md)'
prev_courses:
  - '[Introduction to Neo4j](Introduction%20to%20Neo4j.md)'
next_courses:
  - '[Redis Essential Training](Redis%20Essential%20Training.md)'
path_nav: '[{"path":"Develop Your NoSQL Skills","position":5,"total":10,"prev":"Introduction to Neo4j","next":"Redis Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/neo4j
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Graph%20Databases-%20Neo4j%20for%20Complex%20Data%20Relationships.md)

![Graph Databases: Neo4j for Complex Data Relationships](https://media.licdn.com/dms/image/v2/C4E0DAQE1LvNesh6fIg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1663090796489?e=2147483647&amp;v=beta&amp;t=JOjohJQBaSeQdeEFF8-U2hUKzgAYfE42OHHHhoISkoA)

# Graph Databases: Neo4j for Complex Data Relationships

> Data is becoming more complex, and graph databases are perfect for storing and representing complex relationships between data. In this course, instructor Andreas Kretz introduces you to Neo4j fundamentals and walks you through creating a data project using Neo4j. Andreas explains terminology and goes over the properties of graph databases and the differences in data modeling between relational an

> [LinkedIn Learning](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships) | 1h 18m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Course introduction and goals](#course-introduction-and-goals)
  - [What you should know](#what-you-should-know)
  - [Real-world graph database use cases](#real-world-graph-database-use-cases)
- [**1. Neo4j Fundamentals**](#1-neo4j-fundamentals) (5 videos)
  - [Neo4j fundamental terminology](#neo4j-fundamental-terminology)
  - [CRUD and ACID properties of graph databases](#crud-and-acid-properties-of-graph-databases)
  - [Graph database vs. relational database design](#graph-database-vs-relational-database-design)
  - [Neo4j query language explained](#neo4j-query-language-explained)
  - [Neo4j deployment and scaling explained](#neo4j-deployment-and-scaling-explained)
- [**2. Environment Setup**](#2-environment-setup) (4 videos)
  - [How to install Neo4j](#how-to-install-neo4j)
  - [Neo4j user interface and CLI explained](#neo4j-user-interface-and-cli-explained)
  - [How to use Python to work with Neo4j](#how-to-use-python-to-work-with-neo4j)
  - [Neo4j security best practices](#neo4j-security-best-practices)
- [**3. Writing Data**](#3-writing-data) (6 videos)
  - [The data set explained and goals](#the-data-set-explained-and-goals)
  - [Modeling data as a relational database](#modeling-data-as-a-relational-database)
  - [Modeling the Neo4j database](#modeling-the-neo4j-database)
  - [How to bulk import CSV data into Neo4j](#how-to-bulk-import-csv-data-into-neo4j)
  - [How to bulk import relational CSV data into Neo4j](#how-to-bulk-import-relational-csv-data-into-neo4j)
  - [How to write transactions to Neo4j with Python](#how-to-write-transactions-to-neo4j-with-python)
- [**4. Query Data**](#4-query-data) (3 videos)
  - [How to explore Neo4j data with the user interface](#how-to-explore-neo4j-data-with-the-user-interface)
  - [How to query Neo4j database with Python](#how-to-query-neo4j-database-with-python)
  - [Neo4j query optimization](#neo4j-query-optimization)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Course introduction and goals](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/course-introduction-and-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/course-introduction-and-goals?u=76281980&t=0)** - [Instructor] Let's face it. Data is being created faster today than ever before. And with more data, the complexity and requirements of data analytics are increasing too. This [Neo4j](../../Skills/Software%20Development/Neo4j.md) course will introduce you to this new topic and open up a totally new horizon for you. Understanding how different [NoSQL](../../Skills/Software%20Development/NoSQL.md) [Databases](../../Skills/Software%20Development/Databases.md) work and when to use them will make you a super valuable person in any modern data team. We'll start by exploring the fundamental terminology and design of Neo4j. Then I'll show you how to design a database model based on a real [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) data set and interact with it by writing and reading data with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Hi, my name is Andreas Kretz. I have over 10 years of experience as a data engineer. My mission is to help students to either become a data engineer or to add [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) to their skillset. So have fun with this course and let's get into it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neo4j](../../Skills/Software%20Development/Neo4j.md) (2), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (1), python (1)
> **Code Identifiers:** nosql (1)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, you only need two things. You need to have some [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) knowledge and some [SQL](../../Skills/Data%20Science/SQL.md) knowledge. Don't worry though, as with all my courses, I'm limiting this to only the essentials. So if you have a bit of Python knowledge, you can code a bit with Python, you understand the [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) and how to work with functions, then you're good. If you are on the SQL side, know how to create tables, how tables and columns work, how the relationships between tables work, and you have a bit of an understanding and a bit of experience with SQL queries, then you're also good there. You don't need to have very complex knowledge of SQL, basics are absolutely enough. If you feel like you need to brush up a bit on your skills, I recommend two courses from the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library. I recommend the course [Python Essential Training](../Software%20Development/Python%20Essential%20Training.md) and I recommend [SQL Essential Training](../Data%20Science/SQL%20Essential%20Training.md). With these you will be fine. So let's head on, let's get into the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** sql (5)
> **CLI Commands:** python (4)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [Real-world graph database use cases](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=0)** - [Narrator] Where are graph [Databases](../../Skills/Software%20Development/Databases.md) used? So generally, graph databases are used whenever you have very complex data and complex relationships between the data points in your data. Examples for these are fraud detection use cases where you might want to find suspicious credit card transactions. Or manufacturing. In the car production, for instance, where changes in a small thing may affect the whole product. Or, for instance, contact tracing in disease management where you want to find infected people, and trace these infected people and build a network who these people met. So let's look at credit card transaction data. Let's look at fraud detection. A simple example here is you have a person who lives in Mexico City. And at 9:00 AM, this person purchases groceries in a store. At 9:15, this person purchases cat food in a different store, also in Mexico City. Then you have another transaction that is happening in a petrol station in Ireland at 9:30. So it makes absolutely no sense or, and it's even impossible, for a person to make these three transactions. The first two are absolutely clear. It's in the same vicinity. It's in the same city. Everything's okay. But then purchase fuel in Ireland 15 minutes later, you can't travel that far. So these are things where you can actually find that out, that connection, and that localization and can flag this transaction.
>
> **[1:37](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=97)** You can then even go further and you can find out, okay, do I have businesses where a lot of fraud transactions are happening, and flag them and look into it? What's the problem? Is it the users? Or, is it the business owners? What's going on here? So it's very useful for uncovering trends in the data and for finding these fraudulent entities. Then we have our graph databases in manufacturing. Manufacturing is a very difficult industry and a very difficult task. Let's look at a car. For instance, you have modern cars. Over 30,000 components. A lot of components interact with each other. So it's difficult to change something. And you have to look at the car as a whole. This means, for instance, you have an axle. You want to change something on the axle. The axle is connected to a rod. You have a wheel on there. You have screws on there. And with these screws are the discs connected, and the disc is also with axle, and so on and so on. So, as you can see, it's a very complex thing. Now, you change one part here. Change out the axle, or change out the screw. What does that have an influence, too? What is influenced by this? Is this good? Is this bad? Does this one screw lead to a chain reaction where something then happens? It's very complex. And it's a lot easier to visualize and to create this connection with a graph database. The third example, is the example that we're actually going to use in our course.
>
> **[3:12](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/real-world-graph-database-use-cases?u=76281980&t=192)** We're going to use contact tracing. Contact tracing can be very, very useful to monitor the spread of disease, and inform people of contact with an infected person. So think of a group of people shopping in the same store. These people most likely don't know each other. And once they leave, they have no idea with whom they actually visited the store. So they may never encounter these people again. Now, the goal is to actually find out who are these people. So if a person gets sick, this person can then be tracked, can be found out. This person went to a certain business. Who has this person encountered there? And then you can automatically notify everybody else that they were in the same room with an infected person at the same time. This allows you to manage the spread better. This gives people more security and an organization can actually track the spread of the disease throughout time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (3)
> **CLI Commands:** find (5), cat (1), make (1)
> **Analogies:** for instance (4)
> **Ports:** :00 (1), :15 (1), :30 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. Neo4j Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [Neo4j fundamental terminology](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=0)** - [Instructor] Let's start the [Neo4j](../../Skills/Software%20Development/Neo4j.md) fundamentals by looking into where Neo4j actually fits into a platform. Now, in this, I draw a line in the middle where we have two parts, an upper part and a lower part. The upper part is something that you find very often. You, for instance, have a [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) transaction that is happening. This transaction goes into a transactional database and the client that sits on the user interface on the website looks at the database and sees the status of this eCommerce transaction that the client previously set off. And this upper part is a transactional part of a platform. A eCommerce transaction is started, it gets locked in the database, somebody does something with that data, either checks it or processes it. Then we have the lower part in this picture. We have the analytics part of the platform. Very often you find tools like data warehouses and BI tools in there where the data from the eCommerce transaction either directly gets written in the warehouse, or once a day, it gets imported from the database on top into the data warehouse. And then on the right side, we have our data analyst who is then using BI tools to view the data and to find out what's happening on the platform and tries to create some business value and business insights out of the transactions that are happening. So this is where it fits usually. Neo4j and graph [Databases](../../Skills/Software%20Development/Databases.md) usually come into play in the upper part in the database part
>
> **[1:36](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=96)** of your transactional process because these databases are transactional databases. Now let's look next into the fundamental terminology of Neo4j. The fundamental terminology of Neo4j starts with nodes. You can see them here on the left and on the right, Node 1 and Node 2. And these nodes are how you store your data in. So you don't store your data in tables, like [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). You store the data in nodes. Each node, as you can see below the Node 1 and below the Node 2, you can have attributes. So you can have an attribute name and then a value for this attribute could be a text, could also be a number. It has multiple ways of storing data in it. So this is how you store your data. You have the nodes, you have the attributes in the nodes, then you also need to create relationships between these nodes. Our relationships are done. You can see them here from Node 1 to Node 2 with by the indication of the arrow from Node 1 to Node 2, this creates a relationship. The arrow here, the relationship has a direction. This is a logical direction within the database, and when you create it, it doesn't really make a difference of the direction, but it's always good to think of this, what's the direction of the relationship. Because once you do this, you can also give it a type. So, the type most likely will explain what this relationship is and as the same with nodes,
>
> **[3:12](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-fundamental-terminology?u=76281980&t=192)** you can also give the relationship, if you want, multiple attributes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neo4j](../../Skills/Software%20Development/Neo4j.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (3), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1)
> **CLI Commands:** node (9), find (3), make (1)
> **Versions:** node 1 (4), node 2 (4)
> **Code Identifiers:** ecommerce (3)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1), picture (1)
> **Speakers:** - [instructor] (1)

#### [CRUD and ACID properties of graph databases](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=1)** - [Narrator] Let's talk about CRUD and ACID-Compatibility. CRUD, meaning Create, Read, Update and Delete operations are a standard for [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). You always have these. This is how you interact with the database. This is how you store your data. This is how you query your data. Maybe you want to update it. Or, you want to delete some data out of the database. Now, with [NoSQL](../../Skills/Software%20Development/NoSQL.md) [Databases](../../Skills/Software%20Development/Databases.md), this is sometimes a bit complicated. Because sometimes a NoSQL database doesn't allow you to update data, or it's difficult to update data. Sometimes the deletion aspect doesn't really work, or doesn't work as like with a relational database. For Neo 4j, this is very similar. It's completely compatible how it is with a relational database. You have full compatibility with CRUD operations, which is really awesome. As with all transactional databases, ACID-Compliance is something very, very important. Meaning ACID, Automicy, Consistency, Isolation and Durability. The idea for automicy is that in a transaction, there are multiple statements. And once you execute these statements, either all of them pass, or none of them pass. So this is a very important topic that a transaction is seen as a unit, either all or none. Then you have consistency.
>
> **[1:33](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/crud-and-acid-properties-of-graph-databases?u=76281980&t=93)** This means that whenever you start a transaction, you do your statements, or your inserts, and then you commit the transaction. It always brings the database from one valid state to another valid state. So it's not like something is messed up within your database, and you will have long-term problems with your data in your database. Then you have isolation, which means that whenever you use your database, there will be a lot of transactions happening at the same time. And these transactions might not even see each other, or know from each other. But each of these transactions need to be processed in itself, and not affect other transactions that are happening. So your transaction is completely isolated from other transactions. Then you have durability, which means once something is committed, once a transaction is committed, and the data is in the database, or the data has been changed, the transaction will stay committed, even if there is a system failure. Which is very, very important, because think of it, you are writing data to a database and then you're committing it. The database shuts down, or you have an error under the server. So now, is your data still there? Or, is it lost? You need to be sure that you have durability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [NoSQL](../../Skills/Software%20Development/NoSQL.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1)
> **Env Vars:** crud (3), acid (3)
> **Definitions:** is a  (2), means that (2)
> **Speakers:** - [narrator] (1)

#### [Graph database vs. relational database design](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=0)** - [Instructor] Let's look into how you design a [Neo4j](../../Skills/Software%20Development/Neo4j.md) database. For that, let's take a detour into [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). How relational databases work. You have your tables. Tables have rows and have columns. Each column has a data type. And also a column might be a primary key for the table or a foreign key from another table. You use primary and foreign keys to build relationships between your tables. And then you query the data via a join, where you join the tables together. All of this you use to store your data in the rows of each table. And so the tables are building up and getting bigger and bigger and bigger. In Neo4j, you would do it this way. And this is a quick example of somebody, a user, is visiting a website. Now, you would start with the nodes. Okay, let's create two types of nodes. Let's create a type of node that is called User, and let's create a type of node that is called Website. These are the two circles. Then you give them attributes. So the user would have the attributes user_ID, user_first name, user_last name, for instance. And then you would give the Website a attribute, that's, for instance, called path, like here/home, so this way you could log people who are visiting the home website. The relationship between the User and the Website would be created through creating a relationship here. For instance, we would call this relationship visitedPage
>
> **[1:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/graph-database-vs-relational-database-design?u=76281980&t=94)** with the direction User to Website, and give it, for instance, the attribute date, where we have the date, and also we could add here the time, if the user accesses the site multiple times in a day. This is how you would build this up. You have your two nodes or node types, User and Website. You have the attributes for them. You have the relationship, visitedPage, and you have the attribute for this. This is also why I meant before, look at the logical way of these directions of the relationship, because in this, the description or the name of the relationship fits to how you directed it. So the User visits the Website, this is why you would call this visitedPage. The other way around, you would call this maybe visitedBy, right? When you create the relationship from Website directed to User, visitedBy, and then this would be how you do it. Also important here is that every node must have a unique ID. So for this, you would set the user_id for the user as the unique ID, and the path for the Website, because this might be the only attribute that you have in there. As you can see, this is pretty straightforward and pretty simple. Now let's look into how you query data from Neo4j.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neo4j](../../Skills/Software%20Development/Neo4j.md) (3), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (2)
> **Code Identifiers:** visitedpage (3), visitedby (2), user_first (1), user_last (1), user_id (1)
> **CLI Commands:** node (4)
> **Analogies:** for instance (4)
> **Definitions:** is called (2), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Neo4j query language explained](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=0)** - [Instructor] Once your data is in the database, how do you query it? When you look at [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md), relational databases have [SQL](../../Skills/Data%20Science/SQL.md), the structured query language. Here with [Neo4j](../../Skills/Software%20Development/Neo4j.md), you don't have that, but you have another cool way of doing this with the Cypher language. Here are the basics of Cypher language. So it all starts with the structure of a query. Usually your query is built in match, where and return. It's a lot like a relational database where you have select something from a table where certain attributes are there. So this is the general structure. Then you start this by matching nodes. You make the round brackets and you add either N, when you don't mention a distinct node, or you could say round brackets, and you add the type of the node in there. In this case website, from our previous example. You could even go further and can say, okay, I'm filtering directly on the website and an attribute for this. So you would add round brackets, website, you would then use path and slash home. So this is how you bring in the nodes. Then you would build up visually, the path between these nodes. You would create a node with a round brackets, then create a path between the nodes and the path between the nodes, you create by dashes. Either you use two dashes, which means there is a relation between, or a path between these nodes without a direction given,
>
> **[1:33](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=93)** or you could say I'm creating an arrow, and this already shows the direction between these. You can also mention the relation by name, as we've seen before with our visited for the website. So you would do a dash, then the brackets, and then give it the name in between. Now, how does this look in practice? I have here two examples. This is an example where we say, okay, who visited the webpage or the homepage? We would start by matching, say match and then we build our cypher. Our cypher here is first, we say our first node. From the node user, we make a path towards the website. So we give it an arrow towards the node website, where website.path equals /home. And then we return the information from the user and for the website. On the right here, you see how this then looks graphically. In the center, you have your home, you have your node, and on the outside, you have your users with an arrow visited from the user to the home. It's pretty visual. Very nice to do. And here's another example. It's a bit more complicated example. Let's say we want to see who visited the webpage on January 1st. So we can use reg access for this. We would start by building our cypher like this. We would start with match and then give it the user.
>
> **[3:06](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-language-explained?u=76281980&t=186)** Then we say, okay, let's create our relation between. So we name this vis:visitedPage and then on the right side, we give it our node for the website website where the attribute is /checkout. So this limits already, this filters out already, all the nodes that are not related to the checkout page. Now we say where and make the distinction what do we want to see? Because we defined our relation as vis above, we now can access the date and then limit this on 2022 first, January 1st, and then give it a time. And with the dot and star, this is a typical regex that you know from [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and this will then match everything that is below this in this date and time. So it would match at 10 11, 10 12, 10 13, and so on. And then we say, return us the user in the website and it would return us just two users, number four and number five visited the checkout page exactly at that time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Neo4j](../../Skills/Software%20Development/Neo4j.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** node (8), make (3), python (1)
> **Definitions:** is a  (2), is an  (1)
> **Code Identifiers:** visitedpage (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [Neo4j deployment and scaling explained](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=0)** - [Instructor] Now that we know how to create a [Neo4j](../../Skills/Software%20Development/Neo4j.md) database, and how to set this up either self-managed or on the cloud, let's look at scaling. Scaling is something that is very important and that you are going to run into at some point. Typically with the database, you start small and then once the load gets higher, you add more resources, so you scale vertically by making the database bigger. You would add RAM, you would add better CPUs. You would add a lot of storage into the server. The problem with vertical scaling of making this whole database bigger is that it's finite. Either technically you cannot scale anymore, or it will get too expensive to scale. Now, this is where the beauty of [NoSQL](../../Skills/Software%20Development/NoSQL.md) [Databases](../../Skills/Software%20Development/Databases.md) and Neo4j comes in. It's horizontal scaling. Instead of making the machines bigger, adding more machines to it. It's a very efficient way of scaling. It's a very simple way of scaling. Overall, I personally like this a lot. So let's look into the options and how to scale specifically. When you look into scaling a Neo4j database, you can start by sharding your database. Sharding means that your graph, so you have nodes and you have relationships between these nodes, you take a part of your graph and you put it on different servers. One part is living on these servers. Another part is living on other servers.
>
> **[1:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-deployment-and-scaling-explained?u=76281980&t=94)** And so once people query these, then the load will get distributed because some parts that are called all the time or on different set of servers than another part that is going to be called. This makes a lot of sense if you have multiple parts in your database that are independent from each other, and this way, you distribute the load. As I said before, scaling is another way you add more servers to increase the read and write performance, instead of getting bigger machines. This works very well in conjunction with charting. A cool way is actually the way number three here is working with replicas. This is something that is very unique to Neo4j. You can create read-only servers or replica servers. These servers have no writes to them. So they're just there for read capacity for delivering content to the consumers. It's a great way and very interesting way of scaling your infrastructure. All right, let's start. Let's set up your first Neo4j database with RDB.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neo4j](../../Skills/Software%20Development/Neo4j.md) (5), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** ram (1), rdb (1)
> **Definitions:** means that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Environment Setup

[↑ Back to Table of Contents](#table-of-contents)

#### [How to install Neo4j](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=0)** - [Instructor] This is how you can set up your [Neo4j](../../Skills/Software%20Development/Neo4j.md) database. So go to [neo4j.com](https://neo4j.com), and then on the top right, there is a button Get Started. And in the menu that comes up here, select Neo4j AuraDB, which is the fully managed version of Neo4j. So click this. Then, in the next, here it says Start Free. Then this will lead you to a mask where you can log in. I'm already logged in, I used my [Google](../../Glossary/Service/Google.md) account for this. Then we get onto the overview of AuraDB, where we can create ourselves an instance. So, use the button, New Instance. And then we see our instance types. We are going to use AuraDB Free here, but I also want to show you AuraDB Professional. So the Free is going to be free, literally as it says, but it's limited to a certain amount of nodes, 200,000 nodes and 400,000 relationships. Instance details, we can give it a instance name. Let's use the instance name contact_tracing. And we can set ourselves a region. I'm using the Europe region in Belgium. You can also use Iowa, for instance, or Singapore, depending on your location. What we're going to choose here is the Empty database. And then we are going to Create Instance. But before we do that, let's quickly look at the Professional way of doing this. So you would select Professional here. And then, just like with all the cloud platforms,
>
> **[1:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=94)** you can define your instance size. So you would say, "Okay, I need something with 32GB of memory, 6 CPU, 64GB of storage." And this will cost you then a certain amount of dollars per hour. You can set the version here, but right now there's only version 4. But the difference here is that the region, which is GCP region. So this runs on [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md), as it seems. You can set more here. So you don't just have Belgium for Europe, you also, when you scroll down here, you would have Germany. That's important for me. But also, in the US, you would have Iowa and South Carolina. Oregon as well. So, that's the whole difference. You can set up either a Free AuraDB, which has limits, or you use a Professional, where you can set your instance size and then run this. So let's go back, select our AuraDB Free. Just to be sure, we have instance name contact_tracing. You choose your region. We use the Empty database. We don't use the Movies DB. And then let's create this. Here's something that is very important. Once you create this, your username is neo4j. That is always the same. But the generated password, you need to copy out this password. So click here to copy to clipboard. And store this somewhere because you are never going to get this password again. And that's it. You can also download the credentials here. So you can say,
>
> **[3:07](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-install-neo4j?u=76281980&t=187)** "I confirm I have copied the above credentials or downloaded the file credits." Let's just quickly copy this. And then, press Continue. Now you see, your database is going to start up. "contact_tracing, free. Setting up your instance. This will take a few minutes." Now you have to just wait until it's set up. All right, and here we are. The database is running. So now, you can click Explore for Bloom. Or Query to write some queries. More about that, in the next video, where I explain you these two options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neo4j](../../Skills/Software%20Development/Neo4j.md) (5), [Google](../../Glossary/Service/Google.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **Code Identifiers:** contact_tracing (3)
> **UI Navigation:** go to (1), in the menu (1), scroll down (1)
> **Prerequisites:** set up (3)
> **Env Vars:** cpu (1), gcp (1)
> **Cross-References:** in the next (2)
> **Analogies:** for instance (1), just like (1)
> **URLs:** [neo4j.com](https://neo4j.com) (1)

#### [Neo4j user interface and CLI explained](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=0)** - [Instructor] There are two ways how to interact with your [Neo4j](../../Skills/Software%20Development/Neo4j.md) AuraDB. The first one is the browser, and the second one is Neo4j Bloom. Here's an example of the browser. The browser is something where you can run queries interactively. So here I have a query where we match a Person and Business, and then, in the direction of the zip, where we say, "Okay, return us where the user is named Gilbert Harris, and return for us the person, the business, and the zip code." On the right here, we can click run, and we can run this. And it's going to return us this as a graph, how this looks and how the data is organized. So we can see here in the center, we have Gilbert Harris, and then on the outside, we have our locations, and completely outside here in blue, we have our zip codes. On the right, you always see the attributes for this. So when I go for the Zip code, we have id and zip. Then for the Business, we have business_address and so on. And for Gilbert, we have the deviceID and the user_name. You can show this also as a table. I personally like a lot the graph view. Then, the second way is to explore your data using the Neo4j Bloom interface. Now, the cool thing with Bloom is that you can explore your data in a very natural way. How this is, let's say we want to find out, and this is also from our example
>
> **[1:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-user-interface-and-cli-explained?u=76281980&t=94)** that we're going to set up in this course, let's go from the Person, Person VISITED, so we use here the VISITED relationship, and then Business, VISITED Business, Person VISITED Business. We press Enter. And then this is going to show us a graph of how everything fits together. Now, this is limited by the amount of nodes and relationships. You can also configure this, but you cannot set this super high. But it allows you to actually look into something here. Okay, now, here we have our Business. Let's analyze this Business. You could then say, okay, let's draw this here. And let's see, and let's Expand this, Expand ISLOCATED. So we see which zip code this is in. And then for the Zip code, you can Expand this, for instance, with All. Then you see all the businesses that are around this zip code. So it's really nice how you can work with Bloom to interact with your database, to explore your database. These are the two main options for queries, and you can also then later profile queries here. Use your normal browser. It's a very nice tool. Very, let's say, typical tool to interact with the database through writing queries, or do this completely visually with Bloom, which I personally like a lot. Here, when you [Zoom](../../Skills/Software%20Development/Zoom.md) in more, you can also see more details of this, of what's displayed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neo4j](../../Skills/Software%20Development/Neo4j.md) (3), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **Env Vars:** visited (4), islocated (1)
> **Code Identifiers:** business_address (1), deviceid (1), user_name (1)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** find (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [How to use Python to work with Neo4j](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=0)** - [Instructor] For interacting with your database we are going to use Py2neo here. It's a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library that I personally like. There is also a standard library for [Neo4j](../../Skills/Software%20Development/Neo4j.md). The upside with Py2neo and why I chose this is it has a very nice feature of bulk uploading data from a CSV file into your database which is very simple and is also nice to work with transactions and querying data for Py2neo, so that's why I chose this and that's why I also recommend this to start with. If you want to dive into the documentation yourself a bit, just go to [Py2neo.org](https://Py2neo.org) and then on the main page, you can scroll down here, and this is where you have all your important things. Look into graph objects here. This is very important because the graph object is the actual object where you are interacting with the database. You can start transactions here. You can commit transactions. You can run cypher queries and so on with this. Now, how do you install this? There are two ways of installing this when you go back to the Py2neo handbook here, you can do just simple, a PIP install, upgrade Py2neo if you are on a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) system. The problem is usually with [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md), you don't have that. You need to find a way of installing this. And I'm personally using a lot Anaconda
>
> **[1:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=94)** as a managing tool for Python on my [Windows](../../Glossary/Service/Windows.md) machines. So how to do this is you go in and you go into the Anaconda navigator. Once you are in the navigator you use here in the middle CMD. exit prompt and you launch this prompt. Then you can do here, a PIP install, upgrade Py2neo and just execute this. I have already installed it, so, it's already saying here on the left requirement already satisfied. Well, that's the simple way of installing this. One thing that is important, and I want you to make this change right now, is you need to modify something in your VS code. So going to VS code, I brought up here the source code of one of our later lessons, but that's not the important part here. One thing that you're going to run in when you run this with on the top right front Python file is very often you run into an error straight up here. And when you scroll up, it says here conda activate base. It doesn't find this conda. You cannot execute conda commands. This has something to do because the terminal is running [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) and with Anaconda, you cannot use PowerShell here. So, what you do is on the right, there is the plus, you use the dropdown and you say select default profile, click this, and then go up here where you select just command prompt. Just go select command prompt. And with that, that's it.
>
> **[3:07](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-use-python-to-work-with-neo4j?u=76281980&t=187)** So from this point on, you define that you're going to use the normal command line for executing your code. And this is where it's going to find conda and this is where it's going to find the libraries then. So, this is a very important step. Now that we have set this up, we are done with the installing part and we can continue.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (2), [Neo4j](../../Skills/Software%20Development/Neo4j.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Tools:** anaconda (3), vs code (2), powershell (2), command prompt (2), terminal (1)
> **CLI Commands:** find (4), python (3), pip (2), make (1)
> **Env Vars:** pip (2), csv (1), cmd (1)
> **UI Navigation:** go to (1), scroll down (1), scroll up (1), dropdown (1)
> **Prerequisites:** install (3)
> **URLs:** [py2neo.org](https://py2neo.org) (1)
> **Cross-References:** go back to (1)

#### [Neo4j security best practices](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=0)** - [Instructor] Now that we have the database set up and we have our [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library installed, I quickly want to spend a few words on security. Security is always very important and there are two aspects that you need to look into, security, that is first securing your infrastructure, basically isolating your database in your network. So you want to set up a way of security zones and firewalls to limit the access to your actual database. So you might want to just open certain ports in your network, or you might want to only have access to your database from certain IP addresses. It's very important to do this. The network infrastructure security is there for making sure that nobody can access your database from systems that are unsecure or systems where you don't want to have access from. The second part is protecting data at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). Now let's say you are in the self-managed infrastructure as we discussed in number one here. You want a way of encrypting the data that is on your servers. It could be that your infrastructure is safe and it's hard to access the data. But if somebody has access to the server, this person could do almost everything. So keep that in mind. Protect data addressed, use volume encryption so nobody can just get a hard drive
>
> **[1:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=94)** and access the hard drive and also enforce correct access permissions to the files and the drives and the servers. So nobody from the inside or a hacker can actually hack into the server itself and access the data. Three best practices for security that are very easy to realize are these. First, use encryption. So whenever you have a client talk with the server, use encrypted connection. The connection from Python clients to your database in production should always be encrypted. So nobody can sniff out the transmission and look into what data has been communicated throughout with the client and this server. This is something encryption is important. Then for actually securing the access, make sure that you use access [Tokens](../../Skills/Web%20Development/Tokens.md). Tokens are always good to use because they're secure. Use them for your users. Every user gets a access token. This token is only for this user. This token can be manually invalidated if you would have a breach, or if you're unsure if a user leaves the company, whatever, or leaves the team. Same thing goes for systems. You don't want your web interface that queries data out of your database to straight up have access to your database. You want to have something like a token infrastructure
>
> **[3:09](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-security-best-practices?u=76281980&t=189)** around it where the web server itself has an access token. And this token is only for the web server and only the web server knows this token and can access data with this token. Tokens also are a combination with access roles, right? Because you only want to limit your users for certain roles. You have admins who can do certain stuff. You have testing testers who can do certain stuff. You have users who can only read data. You have certain web interfaces. One web interface might only be able to access this database. The other only access this database. So it's very important to isolate your database or [Databases](../../Skills/Software%20Development/Databases.md) through access roles. This is through [Network Security](../../Skills/Cybersecurity/Network%20Security.md). This is firewalls. This is also on a database level, very important. And with that to keep these three things in mind and also what I discussed before, infrastructure and data address, then you're very well set up for development and for production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1)
> **CLI Commands:** python (2), make (1)
> **Prerequisites:** set up (3)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)


### 3. Writing Data

[↑ Back to Table of Contents](#table-of-contents)

#### [The data set explained and goals](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980&t=0)** - [Instructor] Every project starts with data and with goals. So let's first look into the data. The data that we're going to use for our project to contact trace people is a combination of two datasets. There is a public dataset for San Francisco where you have businesses in San Francisco. I used this dataset, and I created fake users for this dataset. So I created 5,000 people, and I selected 2,500 stores out of the San Francisco dataset. I then let these 5,000 people make in summary 50,000 transactions, or 50,000 visits, to these 2,500 stores. The information in the CSV file of this project is in every row of this file. We have the information for the user name, in this case, as an example, Casey Sanders. We have the deviceID of Casey, which is a unique ID. And we have the scan timestamp as an epoch value when this person has visited the business. Then we have a unique business ID, the name of the business, the actual address in San Francisco, the zip code, and a longitude and latitude value. So if we would want to do this, we could get up a map of San Francisco and put the businesses onto the map. With that, we have our data. Our main goal here in this project is to set up a database
>
> **[1:35](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/the-data-set-explained-and-goals?u=76281980&t=95)** where we put this data in and we can select an individual person, see where this person went, and see who this person met there, or who else was at this business. So let's start designing our database.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Code Identifiers:** deviceid (1)
> **Env Vars:** csv (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Modeling data as a relational database](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=0)** - [Instructor] Now that we know the data, let's design ourselves the database. The easiest way how I always do this and how I recommend this to all students who want to learn something new like [Neo4j](../../Skills/Software%20Development/Neo4j.md) is to first look at this typical way how you do this. Look at a relational database. How would you do this in a relational database? So let's say we want to store this information. We have on the left our table with the users with user ID, username, and device ID. The user ID is just a auto increment integer. It's the primary key for the user table. On the right side, we have our business table with also a primary key for a business ID that gets auto generated. We have our business ID, business name, business address, ZIP Code, longitude, and latitude. These are the two main tables. Now, how can we make this relationship between users visiting businesses? How we do this is we are creating a N-to-M relationship, a many-to-many relationship. Many-to-many relationships, there is only one way of really resolving these in [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) is by adding another table. And that's the middle table here. That's the Scans table. Each row of the Scans table has a primary key on its own. It has the attribute of the scan time once the scan has happened, and then it has foreign keys, the primary keys of the user and the business table. So this way, you can, for each scan,
>
> **[1:35](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=95)** make a connection between the user and the business. So although we have only two entities here, the user and the business, we need three tables to actually manage this. There is something that is a negative in this. Let's say you have the users and the businesses in the system. Now people are going out and they're making scans. So the middle table, the Scans table is going to explode in size, which is never really, really good and problematic from a storage and query standpoint. So if you would still be unsure if Neo4j or [NoSQL](../../Skills/Software%20Development/NoSQL.md) database is a good selection, this would be a very good indication that you're going to need something like this, especially in the case where you have hundreds of millions of scans. Now, also one thing that makes this a bit complicated is you have many indices in this. You have the user ID as the primary key, you have the primary key for the scans. You have the primary ID for the business table. You also have these foreign keys in the Scans table. So this makes it very complicated in having all these IDs and needing to index all these IDs for a relational database. This also makes the querying expensive because you have to always join these tables together, right? You need to join the user tables, the Scans table, the business table, and try to filter or match the right information.
>
> **[3:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-data-as-a-relational-database?u=76281980&t=188)** For the database, this is very expensive. It's also expensive for inserts because you need to write the data into three tables. These tables are connected. Each of the table has a primary key. That key needs to be indexed. So the index is also growing for all of these three tables especially for the Scans table. The index is growing very large. All in all, yes, it's fairly easy to build as you see. This design is fairly easy but it's also unnecessarily complicated and has an unnecessary overhead. So let's look next into how we would design this in Neo4j.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neo4j](../../Skills/Software%20Development/Neo4j.md) (3), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Env Vars:** zip (1)
> **Speakers:** - [instructor] (1)

#### [Modeling the Neo4j database](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=0)** - [Instructor] So now that we have our relational database with the user table, the Scans table, and the Business table, let's look into a way of doing this with [Neo4j](../../Skills/Software%20Development/Neo4j.md), because this might be a bit complicated. In Neo4j, let's build this. So we would start on the left here, create us a node type that is called Person. On the right, we would create us a node type for the Business. That resembles already a lot the tables in our relational database. Now the relation. In our relational database, we had an extra table for this. Here, we would just create a relationship from Person to Business that is indicated by the arrow and then call this VISITED. This way, we already have almost everything. Then we have our attributes. Person would get attributes user_name:text, deviceID and text, for the data type. The business would get the business_id, business_name, business_address, longitude, latitude, and the zip code. The VISITED would have the scan_timestamp so we can actually understand when has this visit happened. Compare this in your mind to the relational database. This is only two nodes, one relation. Pretty straightforward. This is exactly how you would expect this to be, to build this, not like with the relational database. Now, let's make this one step more complicated, and let's exclude the zip code from the Business. So we're going to continue here.
>
> **[1:33](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/modeling-the-neo4j-database?u=76281980&t=93)** The left side, Person, VISITED Business is still the same, but what we're going to do is we're going to add the Zip as a type of node here. And we're going to say Business ISLOCATED Zip. So this means we now can make the distinction, okay, this business is in this zip code, or the other way around, this zip code has these businesses in it. From a relationship side, or from a design side, very straightforward, very simple. This is the final Neo4j database schema that we are including here, that we're using in our project, including the zip code. Let's look quickly, if we would have the zip code, how would our relational database look like? So we would need to add another table here with a, setting a primary key for the Zip code, and then using this primary key as a foreign key in our Business table. So this means already now we have four tables in this. The relational database gets even bigger. When we go back to our Neo4j database, very straightforward. Three node types, Person, Business, Zip. Two relationships, VISITED and ISLOCATED. And that's it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neo4j](../../Skills/Software%20Development/Neo4j.md) (4)
> **CLI Commands:** node (4), make (2)
> **Code Identifiers:** user_name (1), deviceid (1), business_id (1), business_name (1), business_address (1)
> **Env Vars:** visited (4), islocated (2)
> **Cross-References:** go back to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [How to bulk import CSV data into Neo4j](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=0)** - [Instructor] Let's write some data into our database. What we're going to start here is we're going to start with a file import, which means we're taking a file that is full of transactions, and we're loading it at once into the database. For this, Py2neo is very good because Py2neo has actually a library for this. This is something different than what we're doing later, where we have individual transactions, and we're saving individual transactions in the database. Let's start, but first here, what you see, Py2neo import Graph and the Py2neo.bulk. These are the important libraries for interacting with our [Neo4j](../../Skills/Software%20Development/Neo4j.md) database, then we have an import [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) as pd. We do this because, for the preparation of the data, we are going to use pandas here. Pandas is a library that is very nice because you can easily load CSV files and then modify them as if it is a table. If you are unsure with pandas, you need to have a quick fresh-up, I put in a link here for you, where you can go, and it's a 10-minute user guide how to use pandas. So, then we do an import [JSON](../../Skills/Web%20Development/JSON.md), and then we are going to start and load our data with pd.read_csv, we're going to load our CSV file. The CSV, our prepared dataset, here, in my folder, it's laying under data/sf_dataset.csv,
>
> **[1:36](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=96)** and we're going to load this into a data frame, which I call em_data frame for import data. Then, what we need to do when you think back on our design, we had the design of a node type person, we had the node type business, and we had the node type zip, and between them we had relations, from person to business, from business to zip, and this is what we need to do here as well. So, we're going to take our dataset that we get in, and we're going to prepare our business data for the nodes, for the business nodes. For this what we do is, first, we take our now basically table of our data, and we're going to filter out only the information we need for the business. So, we need the business_id, we need the business_name, the business_address, latitude, longitude. So then, we have only these columns. What we're then going to do, after that, we're going to drop the duplicates for this because, remember, we had 50,000 transactions, so there are multiple rows with the same business in it because multiple people went to the same business, but we don't want to recreate this node over and over, so let's just drop all the duplicates based on the business_id and just keep the last one. After that, we're going create a JSON out of this, and then, we'll load it where we create a dictionary out of our JSON. These exact steps, we're going to take for the person as well,
>
> **[3:10](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=190)** and we're going to take for the zip. So, the only thing that changes here is for the person, we need the user_name and the deviceID instead of business_id, like here on top, business_id, business_name. Then, we do the same, we say, okay, drop_duplicates. I added here a print for you. This print will help you to visualize in the output of the console how the data frames look and how long they are. This here is a length of this person, so we see how many people we have in there. Then, again, we take this out, create a JSON out of this, and then, we load this JSON and create a dictionary for it. Same thing we do with the node. For the node, we just have the ZIP Code, so we take the zip, and, again, remove the duplicates and so on. And then, we have our data for our dictionaries for our nodes, for the person, the business, and the ZIP Code. We made this step back to dictionaries because our Py2neo actually needs dictionaries then to work with. So, with that, the nodes are ready, then we need to prepare the relationships. For the relationship, we do the same thing, first, we take our whole data, and we're going to it further. We're going to filter based on where their relationship is going to go. So, for the relationship between person and business, what we need is, we need the business_id, we need the deviceID, and we need the scan_timestamp. Scan_timestamp is the attribute for our relationship, and the business_id and deviceID are
>
> **[4:44](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=284)** the, let's call them primary keys for our nodes. Then, we do again, we do a JSON load, and we put it into a dictionary. Same thing we're going to do for the relationship between business and ZIP Code, we just filter by zip business_id and by zip, and this gives us all the information that we need because this relationship has no attribute in it like the scan_timestamp for person between person and business. Here, I left a few prints, so once you do that, you can do a few prints to see how this looks, and then, we're going to create the connection with Neo4j. For this, you instantiate the graph here. The first variable is the link to your database that you have, then we do the authentication, first is the username, and then this is your secret access key that you got once you created the database. Then, we have the connection, after that, the step is to bottle everything in. So, we create the nodes with the Create nodes function, say it's graph.auto, this means auto commit this, we give it the dictionary for the businesses, label this as Business, and then, once this is done, we're going to do a count, where we say, okay, let's print ourselves the nodes that match the Business label. so we see how many business did we actually put in. Same thing we do for the zip,
>
> **[6:18](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-csv-data-into-neo4j?u=76281980&t=378)** and same thing we do for the person. So this is a bit of a different order than above, but we write the zip nodes, and we write the nodes for the person. And then, the nodes are in there, we have written everything, then we need to create our relationships. For the relationships, what we need to do is, we need to create a dictionary out of this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (6), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (5), [Neo4j](../../Skills/Software%20Development/Neo4j.md) (2)
> **Code Identifiers:** business_id (7), deviceid (3), business_name (2), scan_timestamp (2), read_csv (1)
> **Env Vars:** json (6), csv (3), zip (3)
> **CLI Commands:** node (6)
> **Definitions:** is a  (4)
> **File Paths:** data/sf_dataset.csv (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [How to bulk import relational CSV data into Neo4j](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=0)** - [Instructor] All right. So in the previous video, I've shown you how to create the nodes for the businesses, for the zip codes and for the people. Let's create the relationships. Creating relationships is a bit more tricky. How this works is we need to use the function, create relationships of pi to new. And what this function needs is, first the graph. So it can do an auto commit here. Then it needs a variable with two pulls. More to that in a second. It needs the name of the relationship and the start node key and an end node key. So for the person, it will be the device ID and for the business, it will be the business ID. So how does this variable look? The idea with this is, this needs to be a tool or a list of tools, to be exact. Above here I commented you an example how this looks. So the first part of the two pull will be here. This needs to be our ID of device, ID of the person. Then we can, in the next part of the two pull, give it attributes that our relationship needs to have. So this is a chase on. This means you can add multiple attributes in here and then we have the business ID. And of course, this is a list. So we can add multiple relationships at once. How this works is what we do. We created before our dictionary for the relationship. Let's go quickly above here, dict relationship it's this here. And what we've done is we had business ID, device ID and scan timestamp in this data frame
>
> **[1:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=94)** and then in this dictionary. So what we do, we loop over this dictionary and for each run what we do is we take the device ID store in a variable. We take the business ID stored in a variable and then we pop each of these out of this variable P. So in P will only be the timestamp. What we then do is we, to our export dictionary, we append our tool device, timestamp, business. And that is exactly what we need. This is exactly this format here. With that we then create this and this print. Although I kept it in this will not return as anything. Somehow create relationship will not return as the number of relationships that it's created. And then we do exactly the same also for the relationship business ID and zip. In business ID and zip we don't have an actual attribute, right? It's just it's in, but for creating here we actually need an attribute. And so I manually add it here, active one. And then we do exactly the same. So we loop over this and we add these here and yeah, that's it. And then we write it with the start node business, business ID and the end node zip, zip. All right. So let's start this. Let's do our bulk import. So on the top, right, press play, run [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) file. And let's put in our data.
>
> **[3:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-bulk-import-relational-csv-data-into-neo4j?u=76281980&t=188)** So we can already see here on the bottom. These are the print statements that I created, the 2,500. That's the amount of businesses that we have in the 36 is the zip codes and the four, nine, nine, eight that is the people that we put in. Now we have to wait here a sec because it's, right now, creating our relationships. So you will see here none appearing below our 4,998 on the bottom. So let's just wait for this and then continue. This takes a a minute. All right. And here we are. We see the two nodes, the data is in the processing is done. It took me two to three minutes for this. So let's continue.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** node (4), python (1)
> **Definitions:** is a  (3)
> **Cross-References:** previous video (1), in the next (1)
> **Speakers:** - [instructor] (1)

#### [How to write transactions to Neo4j with Python](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=0)** - [Instructor] In the last part, we did a BLIC import, which meant we had a CSV file with many rows in it. And we at once took this file and wrote this into the database. Now, let's go the other way around where we have a single transaction and we store the single transaction into our [Neo4j](../../Skills/Software%20Development/Neo4j.md) database. What we need to do is first here we need to set our import straight. So here in line two, we need to say from Py2neo. We need to import graph, node, relationship, and a node matcher. Graph again like here in line four is our connection to the database. So give it the address of the database, the name of the user, and the key that we are in. After that, we need to create a matcher. We instantiate here a node matcher in our graph, which allows us to query data from it. Then let's begin our transaction because this will be a transactional write. This means if something fails, we can actually do a rollback. How this works is we say, begin a transaction TX here and then let's try this. So first we say, let's match our person if the person with the device ID full of zeros and one is here and give one result back. If this person is not here, then we're going to write it. And who is this? We're going to write myself. So we're going to write a node from the type person with the device ID 0001 and with my name. And we say TX create, this creates the node.
>
> **[1:35](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=95)** If the note is in there, we do an if where we say, if the node doesn't exist, even if we just created it here, then let's raise an exception and let's do a rollback. Once we raise the exception, this will go down here where we have our exception block. And this will roll back our transaction and print us out the message. So if this works and this is done, then we create ourselves a relationship with the business. So we're going to get ourselves the business node here, we match our business by business ID, get this back, add our property, or create our property with the timestamp. When was this created? When was this scanned? And then we are going to set up our relationship. Our relationship is here the person A, we have above here, person node. This is our relationship type visited. Then here is our target for this relationship, our business, and in the properties that we have our scan_timestamp. So this creates us a directional relationship from the person, from me to a business. This r.identity here you can forget. Just leave this out. And then do a tx.create R. Same thing we do here. If this exists, everything is good. If this doesn't exist, we raise an exception. And after this, once we get here,
>
> **[3:09](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=189)** we know the person has been written, the relationship has been created. We commit our transaction and that's it. So let's start this. Let's put in this person. That's it, done. And then we can look and we can query from the database. How we're going to do this is we're going to go into our Neo4J browser. And here in the code, I prepared for you a few statements that you can execute. So take this. Let's match the person. Let's see if I'm in there, execute this on the right. Here's me, here's the person. On the right, you see device ID 001, username, myself, and the unique ID for this person that automatically gets created inside the database. What we can do once we're here, we can enlarge this as well. And then we can see which business I visited. So I visited American Rent A Car here. We could also look this the other way around where we say, let's match our business. American Rent A Car. Let's enlarge this. Who went there? And there should be me somewhere, here, there's me. So that worked, very good. So what have you learned here? You learned here two things at once. You learned how to write something to the database and also how to create a simple matcher where you can match notes and return these notes. There's also a way of matching
>
> **[4:46](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-write-transactions-to-neo4j-with-python?u=76281980&t=286)** or querying data with Cypher query. That's something for you to do. It's also available with Py2neo. It's very simple. Check that out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neo4j](../../Skills/Software%20Development/Neo4j.md) (2)
> **CLI Commands:** node (8)
> **Env Vars:** blic (1), csv (1)
> **Code Identifiers:** scan_timestamp (1)
> **Cross-References:** in the last (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Query Data

[↑ Back to Table of Contents](#table-of-contents)

#### [How to explore Neo4j data with the user interface](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=0)** - [Instructor] Now, we have written our data in with the Bel import and through the transactions, let's look at the data. In the AuraDB overview here, you have two options, Explore which is [Neo4j](../../Skills/Software%20Development/Neo4j.md) Bloom, and Query which is Neo4j Browser. So let's start with Explore. When you open up Bloom, you will be presented with this message, if you've already opened it up before, to tell you that there's a scene already here, do you want to restore this scene or do you want to create a new one? So let's just create a new one here, and then, let's explore some data. So we could go in here. We could say, person, and then, visited, business, and let's create this. Now, here in this, as you see on the top right, we have a thousand nodes, 1078 relationships. This is shown in this way because in the perspective configuration here, we have a node limit of a thousand nodes. This makes sense because if you set this very high, it will take a long time for Bloom to work, and then you will run into performance problems, so keep this low. Of course, if you're, let's say you want to go in here and you want to explore this a bit, and select one of the options here, you could look into each of the businesses. You could drag them out here, and explore them further, who is connected to this business. The problem with the node limit is
>
> **[1:33](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=93)** although you can edit filters here, that we could say, okay, for the, let's look at the business with the property, business id, this one here, and then apply this filter. This is most likely not in, okay, in this case, it's , it's in, but, they, the business that you most likely want is not in because it's limited to a thousand nodes, and we have more of them. So this is the downside with Bloom, that you don't see all the data, and can only look at a portion of data. And then you could expand it going in further, and say, okay, Jake, where did Jake here go, and, and go here, expand all. And then, you will get more information about Jake. That's really, I'll move the filter here, you see. So Home Reality wasn't shown before because we were at the limit, which is a bit of a problem. And therefore, if you want to create queries, where you select specific data, it's always better to use the browser. With the Neo4j Browser, put in your password, and then connect to the database, and then you're in. Now here, you can write your queries directly as you would want it. So, in the last lesson, we added me, Andreas Kretz into the database. So let's look at this. Let's try to find me. How we do this is we say match, p person, and then, where p user name equals Andreas Kretz, Return p forward the user, or the person. There's me.
>
> **[3:08](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=188)** All right, that was easy. Of course, we can now improve this, so we could say here, let's connect the business to it here, b, Business, and return also our business,
>
> **[3:34](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=214)** and then we have the business here. Me, visited, and then we're in the cart if we hover here or click on the relationship, we can see on the right scan, times tamp. This how you query data from this browser. You could also go the other way around, where you say, okay, let's match this business, just put in here, business, write this, we have our American Rent A Car, and either we click here on the enlarge, or we would write the query above, and this actually will, tells us everything, who went there, and also, to, in which zip code is it located. So this is pretty, pretty nice. You can also show this in the table view, where you have all the information. We could also create this here through the query, so we would actually then, add to your person in front of here, p, person, connect it to business, and then say here, z, zip, and then, print out here, or b, our p, and our z. Let's, so you can see, it's exactly the same view. We can go ahead into table and now we can see the table. We can see the information for everything that we have in our, in our graph here. So it's created a sub graph
>
> **[5:07](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-explore-neo4j-data-with-the-user-interface?u=76281980&t=307)** for this information that we queried here. And with that, let's look into the [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) way of querying data, not just through this interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neo4j](../../Skills/Software%20Development/Neo4j.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** node (2), find (1), python (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [How to query Neo4j database with Python](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=0)** - [Narrator] All right, so we have written data into the database with the py2neo import of a whole file and with individual transactions. We've also looked at the user interface into the browser, how you can query data in the browser. Now, usually you would not use the browser for doing complex stuff. It's nice to look into data ad hoc if you want to search something, but with usually you would use this within code. So for that, we use [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) as well. We start here in this code by importing graph from py2neo and then a pretty print I used here because it's a bit nicer for the output, so you understand what's going on. We start again by instantiating our graph and then we run queries against this graph. The first thing is, I know there's a person in there that is called Gilbert Harris because I looked at the automatically created data set in there. Let's find out where Gilbert went and in which zip code this business is. So what we're doing here is we're saying run a match of the person who visited the business. And that business is located in zip where the username is Gilbert Harris, and return us, the person, the business and the zip. And then this result, we print out and we look into how many results did this actually return. So let's just run a debug here and look at the results. Run, start debugging.
>
> **[1:39](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=99)** Let's remove this left here. So here's our first results. As you can see, this is how this will come out as a dictionary. And in there, we have our business information. We have our zip information and we have our P information which is the person, right? P because we called it here P in this. So this is our information that we have. We have no information, no here above. We have no information about the visit because we didn't return the visit. We didn't return the timestamp but what this returned us is it says here eight. So this returned us eight results. Now, next is the same thing where just instead of using here the different ways of adding a relation, we just said here this is an arrow from person to business, and another one from business to zip, which returns exactly the same thing. So let's just walk over this and print this. This also returns as eight pretty straightforward. The next thing is, I want to show you that the relationship direction actually matters for queries. It doesn't matter in a technical way that it doesn't return you the data faster if you follow the direction or not, but in a way of querying the data, it makes a big difference. So before we had eight notes that is returned. Now, let's just do the exact same thing with Gilbert and zip and so on, but remove the direction. So instead of having an arrow here, we just use two dashes. So let's see what this returns,
>
> **[3:13](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=193)** how much returns this? 160, right? So this will return us a lot more information because we didn't give it a direction. Let's go further. Let's use a second example here. There's a bank or there are a few banks in there. Let's find people who went to a bank and not just by selecting an individual bank but selecting a bank by reg X. So we know it starts with bank. That's what we do is we say, okay, business that has been visited by a person where the business equals and this is the sign for reg X starts with something and then has bank in it and then ends with something. And we return business and return the person here. So let's see how many results this returns. I also have a pretty print here for the result, for the complete result, but let's just look over, look into this. So this will return as 140 people. Again, if you want to look more into the details, there's a pretty print for this. The other way is what we can do is we can actually say, let's find everybody who visited a bank at a certain time, at a certain date. And this is again, what we do is we do a matter here. And because we set our timestamp up in a way that we have year, day, year, month, and day, we can actually use a reg X and find the right person. So we do hear a match person, we add to a vis,
>
> **[4:49](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/how-to-query-neo4j-database-with-python?u=76281980&t=289)** we give the relationship a name, this way we can call it in the where, and then in the where, we say our date followed by something else. So everything under that day is there every timestamp or every hour of the day and minute where the business name has something to do with bank, and then we print it. So let's change my mind. Let's quickly remove the pretty print here. Let's just see how many we can see this here now, but yeah, for you remove the pretty print and just try it out. So this will return as 49 people here who went to a bank and that's it. That's how easy it is to query data with Python, pretty simple, right? It's just creating Cypher queries and executing these queries. And this will return you then dictionaries full of information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** find (4), python (2)
> **Definitions:** is called (1), is an  (1)
> **Speakers:** - [narrator] (1)

#### [Neo4j query optimization](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=0)** - [Narrator] Let's talk about query optimization strategies and how you can actually find out where the problems are and try out solutions. So generally, how to optimize queries is instead of just saying MATCH and then round brackets pi, you can go and say MATCH pi and then call on, and then the node type. The good thing is this will already reduce the amount of data that has to be queried on the database because you're immediately filtering out based on the node type and not looking at all the nodes. Of course, this is a very general way of doing this very simple. Now the next part is indexing. Indexing is always important. It's important for [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). It's also important for Neo Force. This means you can create indexes for properties. So you can say, okay, let's create for the person, let's create index for the username because we are searching a lot for the username. So let's create an index for it, this way the database can first look into the index and then query the data actually from the from the drives, which makes it a lot faster. So how would that look with using node labels and using indices? Here's an example, go to your neon browser and in the browser we're going to execute statements. For this lesson, there is a file with all the statements in them. It's this one, it's called query optimization.
>
> **[1:33](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=93)** There is all the statements that we are going to execute here. So in our browser, let's do this. Let's look at the crude way of doing this and doing basically a full table scan. We say MATCH pi so match any node with the user where the username is my name, Andreas Kretz. What this will do is, it will do an all node scan here. So it will return here 7,500 DB hits for this. So it needs to go into the database and it will return us 7,536, which is all the nodes that were in there, remember, earlier. And then it will filter out 5,000 nodes for the persons where the username is in there, and then it will return as one row. So a way of making this simpler is let's profile this, by the way you profiling are you're doing with the statement here profile before, let's do it like we did before where we say pi and then already mentioned the type where the username is under scripts and pi. So this way, when we execute this, this will only hit on 5,000 rows, only hit on the amount of rows for our persons. So this will still look over all the people in there but it will return us less. Now this 9,998, I'm not sure why this call is here for these amount of hits. The important part is here, node by label scan. You can also see this here. This is very important in this. Now let's see, does this change
>
> **[3:07](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=187)** if we filter a bit differently here, if instead of doing here a match where we say here MATCH and we put our attribute directly in here as you see makes absolutely no difference at all. It still hit, just does 5,000 hits. So the, the way how you create your, your query this way or with the MATCH and WHERE doesn't really make a difference. Now, as I said before, the second option is creating indices. So let's create ourselves index for the username of the person. How we do this is we say here create index for pi Person on pi dot username. This will create as an index added one index completed after 65 milliseconds. Now let's run the exact same query as we've run before. Profile, MATCH, return. This will now have a return only one row with two DB hits. And as you can see, it's it's a lot simpler and it's node seek index first. And then it will go to the database. These individual hits I'm not a hundred percent sure how they do this exactly, but this must have to do something with the index and so on. The goal here is that you understand how much is the difference between these. So when we did this here, this would return us 5,000 hits from the database because we do a node by label scan. This here will first seek the index
>
> **[4:41](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/neo4j-query-optimization?u=76281980&t=281)** and then get us the data. So very, very fast, big difference right? Again, quick recap, optimize it by using the note type directly here, and also create indices for all the data that you query all the time and need very quick results, so you make sure that you don't do any full table scans.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1)
> **CLI Commands:** node (8), make (2), find (1)
> **Env Vars:** match (6), where (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **SQL:** where (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graph-databases-neo4j-for-complex-data-relationships/next-steps?u=76281980&t=0)** - [Instructor] Thanks for watching and congrats for making your first steps with the graph database. I hope you had as much fun with the course as I had creating it. You might ask yourself, "What should I do next?" I recommend you go and familiarize with yourself with other [NoSQL](../../Skills/Software%20Development/NoSQL.md) [Databases](../../Skills/Software%20Development/Databases.md) that are out there. Start with document stores like [MongoDB](../../Skills/Software%20Development/MongoDB.md) or key/value stores like [Redis](../../Skills/Software%20Development/Redis.md). Explore time series databases like InfluxDB or wide-column stores like Cassandra. There's so much to look into. Where do you find this information? Search the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library. There is a great selection of individual courses or check out my [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) Academy. There you find a step-by-step path from computer science and engineering basics to platform design fundamental tools up to full hands-on example projects. Again, thanks for watching. If you want to get in touch with me, then you can find me here on LinkedIn or through [learndataengineering.com](https://learndataengineering.com). If you're looking for free content, then check out my YouTube channel, where I do live streams and upload videos around data engineering. Bye.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (2), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (1), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (1)
> **CLI Commands:** find (3)
> **URLs:** [learndataengineering.com](https://learndataengineering.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Andreas Kretz](../../Instructors/Data%20Science/Andreas%20Kretz.md)

## Resources

- Exercise files available

## Skills Covered

- Neo4j

## Path Context

### In [Develop Your NoSQL Skills](../../Paths/Database%20Management/Learning%20Paths/Develop%20Your%20NoSQL%20Skills.md)
← [Introduction to Neo4j](Introduction%20to%20Neo4j.md) | **5 of 10** | [Redis Essential Training](Redis%20Essential%20Training.md) →

## Appears In

- [Develop Your NoSQL Skills](../../Paths/Database%20Management/Learning%20Paths/Develop%20Your%20NoSQL%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Introduction to Neo4j](Introduction%20to%20Neo4j.md) — Neo4j

---

[↑ Back to top](#)