---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: programming-foundations-databases-2
url: "https://www.linkedin.com/learning/programming-foundations-databases-2"
level: Beginner
updated: 12/5/2024
learners: 75878
skills:
  - Databases
  - Database Development
  - Programming Foundations
exercise_files: true
github: "https://github.com/LinkedInLearning/databases-pf-784293"
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQE3jENAPmsZ-A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1592866492461?e=2147483647&amp;v=beta&amp;t=yAbEoiIyPCsSwpTaBq3oU3k4eX7zA5jpwAL90ZgNKZI"
linkedin_topic: Software Development
learning_paths:
  - '[Explore a Career in Database Development](../../Paths/Database%20Management/Learning%20Paths/Explore%20a%20Career%20in%20Database%20Development.md)'
  - '[Become a Programmer- Foundations](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20Programmer-%20Foundations.md)'
  - '[Become a Software Developer](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20Software%20Developer.md)'
prev_courses:
  - null
  - '[Programming Foundations- Design Patterns](Programming%20Foundations-%20Design%20Patterns.md)'
  - '[Programming Foundations Fundamentals](Programming%20Foundations%20Fundamentals.md)'
next_courses:
  - '[Quick Start Guide to SQL](../Database%20Management/Quick%20Start%20Guide%20to%20SQL.md)'
  - '[Programming Foundations- Memory, Pointers, and Garbage Collection](Programming%20Foundations-%20Memory%2C%20Pointers%2C%20and%20Garbage%20Collection.md)'
  - '[Succeeding in Web Development- Full Stack and Front End](Succeeding%20in%20Web%20Development-%20Full%20Stack%20and%20Front%20End.md)'
path_nav: '[{"path":"Explore a Career in Database Development","position":1,"total":5,"prev":null,"next":"Quick Start Guide to SQL"},{"path":"Become a Programmer- Foundations","position":7,"total":12,"prev":"Programming Foundations- Design Patterns","next":"Programming Foundations- Memory, Pointers, and Garbage Collection"},{"path":"Become a Software Developer","position":2,"total":12,"prev":"Programming Foundations Fundamentals","next":"Succeeding in Web Development- Full Stack and Front End"}]'
path_count: 3
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/databases
  - skill/database-development
  - skill/programming-foundations
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Programming%20Foundations%20Databases.md)

![Programming Foundations Databases](https://media.licdn.com/dms/image/v2/C4D0DAQE3jENAPmsZ-A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1592866492461?e=2147483647&amp;v=beta&amp;t=yAbEoiIyPCsSwpTaBq3oU3k4eX7zA5jpwAL90ZgNKZI)

# Programming Foundations Databases

> Once you get beyond basic programming, you'll need a database. Databases provide a consistent, organized structure for storing and retrieving large amounts of data. They allow programmers to build more complex applications that can take orders, process payments, make recommendations, authenticate users, and more. This course provides the foundation you need to get started in database programming. 

> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-databases-2) | Beginner | 76K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Why use a database?](#why-use-a-database)
  - [What you should know](#what-you-should-know)
  - [Understanding databases: Benefits of spreadsheets](#understanding-databases-benefits-of-spreadsheets)
  - [Understanding databases: Benefits of structured data](#understanding-databases-benefits-of-structured-data)
- [**1. Database Foundations**](#1-database-foundations) (5 videos)
  - [Relational databases](#relational-databases)
  - [Keys and unique values](#keys-and-unique-values)
  - [Relationships](#relationships)
  - [ACID and transactions](#acid-and-transactions)
  - [Basic SQL](#basic-sql)
- [**2. Tables**](#2-tables) (5 videos)
  - [Modeling and planning a database](#modeling-and-planning-a-database)
  - [Naming tables](#naming-tables)
  - [Columns and data types](#columns-and-data-types)
  - [Numbers and other types](#numbers-and-other-types)
  - [Primary and foreign keys](#primary-and-foreign-keys)
- [**3. Relationships**](#3-relationships) (5 videos)
  - [Creating relationships](#creating-relationships)
  - [One-to-many relationships](#one-to-many-relationships)
  - [Many-to-many relationships](#many-to-many-relationships)
  - [One-to-one relationships](#one-to-one-relationships)
  - [Relationship rules and referential integrity](#relationship-rules-and-referential-integrity)
- [**4. Database Optimization**](#4-database-optimization) (5 videos)
  - [Normalization](#normalization)
  - [First normal form](#first-normal-form)
  - [Second normal form](#second-normal-form)
  - [Third normal form](#third-normal-form)
  - [Denormalization](#denormalization)
- [**5. Querying a Database**](#5-querying-a-database) (8 videos)
  - [Creating a database](#creating-a-database)
  - [Creating tables](#creating-tables)
  - [Writing SQL queries](#writing-sql-queries)
  - [Narrowing query results](#narrowing-query-results)
  - [Sorting results](#sorting-results)
  - [Aggregate functions](#aggregate-functions)
  - [Joining tables](#joining-tables)
  - [Modifying data](#modifying-data)
- [**6. Further Database Topics**](#6-further-database-topics) (3 videos)
  - [Indexes, transactions, and stored procedures](#indexes-transactions-and-stored-procedures)
  - [Access control, compliance, and injection](#access-control-compliance-and-injection)
  - [Software options](#software-options)
- [**Glossaries**](#glossaries) (0 videos)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why use a database?](https://www.linkedin.com/learning/programming-foundations-databases-2/why-use-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/why-use-a-database?u=76281980&t=0)** - [Databases](../../Skills/Software%20Development/Databases.md) let us work with large amounts of data efficiently. They make updating data easy and reliable, and they help to ensure accuracy. They offer security features to control access to information, and they help us avoid redundancy. A database is a structure that stores information in an organized, consistent, reliable, and searchable way. And there are different kinds of databases intended for different use cases. The kind we'll focus on here is the relational database. These are found in many places, from [Banking](../../Skills/Software%20Development/Banking.md) and order processing systems, to mobile apps, to [content management systems](../../Skills/Web%20Development/Content%20Management%20Systems%20(CMS).md) like [WordPress](../../Skills/Web%20Development/WordPress.md), and beyond. Most of the concepts we'll need to understand when it comes to [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) are interconnected, and in this course, I'll take a sort of progressive approach to explaining them. We'll cover the very basics of relational databases, and then look at the foundational concepts we'll need to understand how they work. After that, we'll dig into the details more to build on those concepts. So the first or second time I mention something, know that we'll get into more detail as we go. I'm Scott Simpson, and I hope you'll join me in this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Course to explore the fundamentals of databases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (3), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (2), [Banking](../../Skills/Software%20Development/Banking.md) (1), [Content management systems](../../Skills/Web%20Development/Content%20Management%20Systems%20(CMS).md) (1), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - databases (1)

#### [What you should know](https://www.linkedin.com/learning/programming-foundations-databases-2/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/what-you-should-know?u=76281980&t=0)** - Before we start, I want to make one important distinction. We'll be talking about [Databases](../../Skills/Software%20Development/Databases.md) in general, not any particular [Database Management](../../Topics/Database%20Management.md) system or DBMS. A DBMS is the software, like [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md), [MySQL](../../Skills/Software%20Development/MySQL.md) or Access, we use to interact with the database. In this course, I'll be talking about databases in general and about the concepts that make [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) work. You don't need any special software to follow along with the course, and you don't even need a database of your own. Later on, I'll show examples of working with a database, but I don't expect that you follow along with me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (2), [Database Management](../../Topics/Database%20Management.md) (1), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1)
> **CLI Commands:** make (2), mysql (1)
> **Env Vars:** dbms (2), sql (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - before (1)

#### [Understanding databases: Benefits of spreadsheets](https://www.linkedin.com/learning/programming-foundations-databases-2/understanding-databases-benefits-of-spreadsheets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/understanding-databases-benefits-of-spreadsheets?u=76281980&t=0)** - A database gives us a way to add structure to data and to define rules that the data must follow. The whole point of having data is to be able to use it for something, and a database gives us the tools both to protect data and to use data to answer questions. Imagine you have a restaurant, and you've got a few customers who are really good loyal regulars. They support your business, and they're great about referring new customers, so you decide you want to give them some perks. You'll invite them to a holiday party this year and once they've ordered 10 meals in your restaurant, you'll offer them half off their favorite dish. First, you'll need a record of who they are. You could write down each customer's information on an note card. You might record their name, and email or phone number they've used for reservations in the past, and maybe their birthday, if they've given you that information too. For a few customers, the set of note cards is fine, but as you get more of them, it's harder to tell which of the pieces of information you have for each customer. And it's hard to look them up to keep track of the meals they've ordered, because, unless you've spent the time to move the cards around in the stack, they're not sorted by name or by birthday or by anything, really, and to send out invitations to the holiday party, you have to copy the information over to invitations manually. That's no fun. At this point, the data is unstructured and it can be helpful to move it into a spreadsheet, where you can add some structure, and more easily work with each customer's information. With this little bit of structure added, it's a lot easier to see gaps in the data and it becomes easier to do other things like print those party invitations or send happy birthday emails with the name included. Here we have some of the basic structure we'll work
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-databases-2/understanding-databases-benefits-of-spreadsheets?u=76281980&t=93)** with when using [Databases](../../Skills/Software%20Development/Databases.md). We've organized information about a particular thing, in this case, individual customers, into rows, and we've organized pieces of data with the same characteristics into columns, names, email addresses, phone numbers, and so on. Rows are sometimes called records and columns are sometimes called fields. We can clearly see how the information is organized if we look back at the note cards we started with. One card is one record or one row, and each piece of information on the card has a place with a similar data in a field or column, but now we can throw the cards away, because we have our data in a more structured format.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Analogies:** imagine (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - a (1)

#### [Understanding databases: Benefits of structured data](https://www.linkedin.com/learning/programming-foundations-databases-2/understanding-databases-benefits-of-structured-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/understanding-databases-benefits-of-structured-data?u=76281980&t=0)** - We've solved one of the problems we had with the cards, being able to use the customer data more efficiently, but we still need to track which customer has ordered which dishes and how many times. Of course, you can sort of shove the information into this spreadsheet and record what each customer has ordered either all crammed into one field or by adding one field for each visit, but this will quickly run up against problems similar to the notecards. If you want to know what a customer has ordered, you'll need to dig through those fields and count sandwiches, or salads, or bowls of pasta each time and you'll need to add data without accidentally removing what's there or you'll need to keep adding fields. We've reached another limitation and it's in overcoming this limitation where [Databases](../../Skills/Software%20Development/Databases.md) become even more helpful. If we think about all those meal orders are their own cards, we can take their information and create another set of rows and columns. These collections of rows and columns are called tables and they're the building blocks of databases. Generally, columns contain just one piece of information. So commonly we'll split values like Full Names into separate columns so we can use each piece of data they provide separately. And some values, like dates, will be recorded in a slightly different way to accommodate the format that a database expects. A database can contain more than one table and databases offer the ability to create relationships between tables based on rules you define. We'll see more about this in detail later on. The structure of tables in the database is called the schema. If we start to add a little more information to our Customers and Orders tables, like a unique identifier for each row, now we can connect our orders to our customers
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-databases-2/understanding-databases-benefits-of-structured-data?u=76281980&t=93)** and easily find out which dishes a customer has ordered. Aside from providing structure for our data, a database allows us to enforce certain rules on our data too. We can ensure that certain data isn't missing or that a field or column contains only a specific type of data. We can protect data from unauthorized access or changes and we can make sure that a change only gets made if other associated changes are made successfully. As we move on, we'll look at how all of these pieces work in more depth, but here we've seen how adding structure to data can help us answer questions and why we might choose a database instead of just a spreadsheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (3)
> **Prerequisites:** you'll need (3)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is called (1)
> **Analogies:** similar to (1)
> **Speakers:** - we (1)


### 1. Database Foundations

[↑ Back to Table of Contents](#table-of-contents)

#### [Relational databases](https://www.linkedin.com/learning/programming-foundations-databases-2/relational-databases-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/relational-databases-2?u=76281980&t=0)** - There's more than one type of database out there. Graph [Databases](../../Skills/Software%20Development/Databases.md) like [Neo4j](../../Skills/Software%20Development/Neo4j.md), object databases like Realm and Objectivity/DB, document databases like CouchDB and [MongoDB](../../Skills/Software%20Development/MongoDB.md) and more. But by far, the most common is the relational database, which is named for the way that it organizes data into relations or tables of related data. In a relational database, tables are made up of rows, which represent instances of a given entity, and columns, which represent attributes of each entity. The set of columns is called a relation. Let's explore what that actually means. Let's say we have a restaurant, and have a table in a database that keeps track of a list of customers. Here, customers are the entity. We're talking about different customers but they all share the condition of being a customer, and each individual customer is an instance of a customer. This one is different from this one, who's different from that one, but they all share in being customers. As customers, they also all share certain attributes or things that describe them in particular. They all have names, for example, and email addresses, and phone numbers, but their individual names, emails, and phone numbers are different from each of the others, even though they sure these attributes in common. If we have another table, say a listing of dishes offered by the restaurant, dishes are the entity. Each dish is an instance, and each dish has particular attributes, like a name, a price, a description, and so on. These dishes and customers are kept in separate tables in the database, because they're different entities. Dishes don't have phone numbers,
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-databases-2/relational-databases-2?u=76281980&t=92)** and people don't have prices. So a relational database is made up of relations or tables which are the set of columns, and these tables also contain rows, representing different instances. Every column or piece of information about the individual instance will have a type that we define to tell the database what sort of information it contains. That might be a number or a string of text. It could be a date, a true or false value or even a chunk of binary data that represents a file. All the values in a specific column will be the same kind of information, though the individual values will vary. In this chapter, we'll explore the general properties of [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) and get into details later on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (3), [Neo4j](../../Skills/Software%20Development/Neo4j.md) (1), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (1), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1)
> **Definitions:** is an  (2), is called (1)
> **Analogies:** for example (1)
> **Speakers:** - there (1)

#### [Keys and unique values](https://www.linkedin.com/learning/programming-foundations-databases-2/keys-and-unique-values-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/keys-and-unique-values-2?u=76281980&t=0)** - When information is stored in a database, we'll usually want to read or access that data, or part of it, for some particular purpose. Let's say we want to look up a customer's phone number so we can call them about their upcoming reservation. In a table of a few hundred customers, we might have customer names and their phone numbers, and it's pretty simple to ask the database for a customer's information. We could say, give me the record for Taylor [Jenkins](../../Skills/DevOps/Jenkins.md), and the database would return their row. But what happens when two people have the same name? That's a fairly common problem when dealing with names. If we were to ask the database to give us records matching a name that's shared by a few customers, we'd get back all the records that match. So how do we know which is the correct customer? We certainly wouldn't want to call the wrong person. Unique values allow us to unlock the power that [Databases](../../Skills/Software%20Development/Databases.md) provide. In a database, a unique value is a value that doesn't show up in any other row in a given column. So there's one and only one of any particular value for that particular field. Most DBMS tools will allow us to set this constraint, or limitation, on columns in our tables. So if we tried to enter a record with a value that's already in the table, the database will reject it until the information is changed to be unique. Unique values can also be used as keys. A key is a value we can use to refer to only one specific row or record. A primary key is the most important key in a table, though there can be others as well. A table doesn't require a primary key, but having one helps to access specific records easily. In many cases, there isn't a natural piece of information
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-databases-2/keys-and-unique-values-2?u=76281980&t=93)** that can be used as a key, so we need to provide one. We can do this by adding a column to a table and setting that column to require a unique value. In many DBMS tools, this is done by making the value in the new column a number and telling the database to increment the number for every new number that's added. When we add a field like this, we create a synthetic key or a surrogate key. In some situations, we might not be able to modify the schema of the table, and we might need to use two or more fields in the data to act as a key. This is called a composite key. When you set out to define your tables, you'll need to think about what value will be used as a key or whether you need to add one yourself. Another term we'll see later on is foreign key, and this is what a primary key from one table is called when it's referenced in another table. That's important when we start to build relationships between tables to associate one record with others.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Definitions:** is a  (2), is called (2)
> **Env Vars:** dbms (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - when (1)

#### [Relationships](https://www.linkedin.com/learning/programming-foundations-databases-2/relationships-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/relationships-2?u=76281980&t=0)** - As a database becomes more complex, with two or more tables containing data that we want to connect in some way, we need to define relationships. We need to tell the database that particular records should be associated with each other. Of course, we can use a database without using relationships. Simply querying a piece of information from this table and a piece of information from that table, but being able to connect records to each other in various ways, lets us use data in more complex and realistic applications. There are three general kinds of relationships to use with [Databases](../../Skills/Software%20Development/Databases.md), one to may, many to many, and one to one. A relationship starts out as something that exists in the model of the data. It's something we know about how the data will be used when we go to read or modify the data in the database. Later we'll see how to get the database to enforce our relationships. One to many is by far the most common relationship. This associates one record in one table with multiple records in another table. We can use this to show for every one dish, which of our many customers consider it their favorite. In order to use this kind of relationship, we store the key from a record on the one side of the relationship in each of the many records which reference it. So we might have a table with our Dishes and in the Customers table we'd have a field where we store the key for their favorite dish. The key from the Dishes table, while it's a primary key in the Dishes table, is a foreign key here in the Customers table. A many to many relationship works in a similar way and in fact, in most DBMS tools we model it using two one to many relationships. But we create a new table called
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-databases-2/relationships-2?u=76281980&t=93)** an associative or linking table that contains columns for the foreign keys from the tables we're associating. As we'll see in a little while, this can be used to associate many customers with many dishes, like you might need if you want to keep a record of each dish each customer has ever ordered. And finally here, I want to talk about the one to one relationship. This isn't too widely used, though it can be useful. Unlike a one to many relationship, a one to one relationship associates only one record on one table with only one record on another table, such that the targeted record can't be associated with another record at the same time. We'll get into the details of these relationships later on in the course. Relationships are an important concept both in thinking about your data and in retrieving it later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** dbms (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - as (1)

#### [ACID and transactions](https://www.linkedin.com/learning/programming-foundations-databases-2/acid-and-transactions-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/acid-and-transactions-2?u=76281980&t=0)** - The data in our database needs to remain accurate and that means we need to be careful about how we update or modify information it contains. If we are simply adding or removing a customer in our customer table, for example, it's a pretty straightforward operation. One record is added or one record is removed, but in a more complex interaction, such as transferring money between bank accounts where more than one operation makes up the task, we need to be more strict about how the change to the data takes place. In this case, the complex operation of transferring money between accounts takes a few steps. Checking the balance of the debited account, updating the balance to reflect a withdrawal, checking the balance of the credited account, and updating the balance to reflect the added money. Modern systems are able to process information very quickly but not instantaneously, so some error could interrupt the process. We could suffer a power failure in the middle of the operation, possibly leaving the first account with less money without adding it to the second account. That's no good. To protect against this kind of error, we use transactions. A transaction is a set of operations that must all be completed, and if for some reason any of the individual operations aren't completed, no changes are made to the database. Anything that's partially done will be undone. Transactions follow a set of principles outlined by the acronym ACID, which requires that the transactions be atomic, consistent, isolated, and durable. Atomic here means that the transaction is indivisible, that pieces of it can't be separated out. Consistency means that whatever the transaction does,
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-databases-2/acid-and-transactions-2?u=76281980&t=95)** it needs to leave the database in a valid or consistent state. The actions in a transaction can't violate integrity rules that are defined for the database. Isolation means that while the activities in the transaction are being completed, nothing else can make changes to the data involved. If we were in the middle of moving money from one account to another, and the user submitted another transfer request, that request would have to wait until the first one finishes completely. Durability means that the information we change in the transaction actually gets written to the database. When the transaction is reported as complete, the data is there. The change has been made. Even though we often hear the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) transaction as it relates to financial activity, a transaction in a database doesn't have to deal with financial information. We might use a transaction when booking a reservation at a restaurant, to prevent other customers from sneaking in at the same time and grabbing the table we want, or we might use a transaction when we check the stock level of something in our inventory, where we want to keep another worker from altering the amount while we look it up. Anytime we have an activity made up of steps that must happen together, and when we want to ensure that we have exclusive access to certain information while we perform a task, we'll use a transaction. The capability for following the ACID principles are part of [Database Management](../../Topics/Database%20Management.md) systems already, so instead of having to write the code into logic that makes sure these conditions are followed, all you have to do is tell the DBMS that you're doing a transaction, and the software takes cares of the ACID requirements for you. How you do that varies by software, so we're not going to get into the details.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-databases-2/acid-and-transactions-2?u=76281980&t=187)** Just know that the tools are there when you need them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Database Management](../../Topics/Database%20Management.md) (1)
> **Definitions:** means that (4), is a  (1)
> **Env Vars:** acid (3), dbms (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Warnings:** be careful (1)
> **Speakers:** - the (1)

#### [Basic SQL](https://www.linkedin.com/learning/programming-foundations-databases-2/basic-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/basic-sql?u=76281980&t=0)** - Once we have a database, we'll need to actually talk to it. A common language used to do this is called [SQL](../../Skills/Data%20Science/SQL.md), often called Sequel, and it stands for structured query language. Most relational [Database Management](../../Topics/Database%20Management.md) system tools, also called RDBMS tools, support ANSI SQL. That's the version of SQL defined by the American National Standards Institute, which is generally considered to be the standard or minimum most widely supported set of commands for the SQL language. Though many tools offer their own flavor or version of the language that extends ANSI SQL to add features specific to that DBMS. Two examples of this are T-SQL or [Transact-SQL](../../Skills/Software%20Development/Transact-SQL%20(T-SQL).md) used by [Microsoft SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) and [MySQL](../../Skills/Software%20Development/MySQL.md), an open-source DBMS that includes a few other useful features on top of the SQL standard. SQL allows us to write statements which the DBMS interprets, and that's how we interact with the data in the database, from apps, or even within the DBMS itself. In this role of interacting with data, SQL is called a [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) language, or DML. SQL also offers features to manage the database itself by creating and modifying tables and controlling access to tables. In these roles, SQL acts as a DDL or a data definition language, and a DCL, or a data control language. We'll see more about SQL's capabilities as a DDL and DML in particular later on. It's likely you'll need to read and write SQL at some point, so let's take a few minutes to explore this foundational language and we'll get into more details later in the course. Don't worry about the specifics of the statements
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-databases-2/basic-sql?u=76281980&t=94)** at this point, though. A SQL statement is composed of clauses, which can contain expressions and predicates. A clause will include a keyword, specifying some action to take and something to act on or use. Expressions and predicates set parameters within which to operate. Statements can be written inside of software that works directly with the database, like [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) Management Studio or phpMyAdmin. Or they can be incorporated directly into program code in order to allow an app to access data. To ask for data from a database, we'll ask for the fields we want information from and we'll specify the tables that contain the information. We might also specify how to display, sort, or associate the information. And in return, we'll get matching records or the fields from records which match our criteria. This statement, for example, will show us the first name and last name of customers with a specific birthdate, and this one would return us a list of customers names and birth dates sorted chronologically by birthday. In the first example, we have two clauses. In the first clause, there are field names, and in the second clause, there's the name of the table to read the fields from. In the second example, we have three clauses. The first asks for the first name, last name, and birthday fields. The second clause tells the database to use records from the customers table, and the third is telling the database which field we'll use to sort the records we get back. Because we're asking for information from the database or asking for the database to do something, these statements are called queries. In SQL,
>
> **[3:06](https://www.linkedin.com/learning/programming-foundations-databases-2/basic-sql?u=76281980&t=186)** it's common to see the keywords written in uppercase, though it's not strictly necessary. It can help with readability though, so in this course, I'll keep the keywords uppercased. Putting data into a database, retrieving information from a database, changing records, and removing records are typically things we'll do with a SQL query of some sort. And even if you're working at a higher level like writing an app that interacts with a database, eventually, whatever you're doing with your data will get translated into a SQL query somewhere along the line. These activities create, read, update, and delete are called crud, and they're the basis of interacting with data. SQL allows us to write out what we want and the DBMS returns what we have asked for or otherwise acts on the data in the database for us. We'll revisit SQL in more depth later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (19), [Database Management](../../Topics/Database%20Management.md) (1), [Transact-sql](../../Skills/Software%20Development/Transact-SQL%20(T-SQL).md) (1), [Microsoft SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **Env Vars:** sql (22), dbms (5), ansi (2), dml (2), ddl (2)
> **Definitions:** is called (2), stands for (1)
> **Cross-References:** later in (2)
> **CLI Commands:** mysql (1)
> **Code Identifiers:** phpmyadmin (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)


### 2. Tables

[↑ Back to Table of Contents](#table-of-contents)

#### [Modeling and planning a database](https://www.linkedin.com/learning/programming-foundations-databases-2/modeling-and-planning-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/modeling-and-planning-a-database?u=76281980&t=0)** - With the fundamentals out of the way, it's time to start exploring how to plan a database. Before we jump into a DBMS and start building rows and columns and tables and relationships, we need to step back and start with the basics and a paper. We can use paper or a whiteboard or anything to organize our thoughts about what fields, tables, and relationships we'll need in order to model and create a database. We'll draw diagrams called entity relationship diagrams or ER diagrams that show our table's fields and relationships that will later translate into the schema of our database. We'll start by doing a basic needs analysis. What does our database need to store? When you're designing a database, your needs will vary. We've seen examples from our restaurant database in this course, so let's plan out and build that database. In our restaurant, we want to keep track of customers, dishes, events, orders, and reservations. We'll offer our customers a discount on their favorite dish on their birthday too, so we need to keep track of their favorite dish. Let's start by building the Customers table. To do that, think about an individual customer record, like we might keep on a note card or contact card. What information will be there? Customers have a name and in order to personalize cards and messages without sounding like a robot, and because it's a good practice, let's use a FirstName field and a LastName field. Let's add an email address, a phone number, and a birthday. We might also add an address. In the US, this will often include a street address, a city, and the state. In other countries or areas, the format of the address may be different,
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-databases-2/modeling-and-planning-a-database?u=76281980&t=92)** so if you need to accommodate other formats for the address, you'll need to do some research and see what the common practice is for storing addresses in those regions. Now, let's turn to the Dishes table. We'll keep track of the dishes we offer, so we can print a menu and associate favorite dishes with customers. A dish will have a name, a description, and a price. Okay, pretty straightforward, and now let's turn to the Events. For each event, we'll want to include the name of the event and the date. Let's also add a description of the event that we could use on invitation cards. These cards each represent one of each kind of thing we want to keep track of. We'll have many of each type of information, like stacks of cards, with each card representing one customer, one dish, or one event, and that's why we'll start putting information into rows inside of tables. That's a good start for planning the structure or schema of our database.

> [!info]- Semantic Content
>
> **Env Vars:** dbms (1)
> **Best Practices:** good practice (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - with (1)

#### [Naming tables](https://www.linkedin.com/learning/programming-foundations-databases-2/naming-tables-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/naming-tables-2?u=76281980&t=0)** - Usually, though not always, tables will be named with a plural version of whatever record type we're keeping in them. We have a table where customer data is stored. So that's the Customers table. Likewise, we have Dishes and Events. This helps us talk about the items we store in the table more easily later on. We wouldn't want to name the tables A, B, and C, or something nondescriptive like that. Whether or not you use plurals for your table, it's a best practice to name the tables starting with a capital letter. You should also avoid using special characters and spaces in table names. As we've defined fields, I've given them specific names as well. Fields should be named singularly, because for each record, there's only one piece of data in the field. So we have FirstName, LastName, Birthday, and so on. It wouldn't make sense to ask the database for one person's birthdays. This way of writing the names with each [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) capitalized and without spaces between them is called UpperCamelCase, from the way that the words are thought to look like bumps on a camel's back. There's two kinds of camel case, lower and upper, where the first word is lower-cased or upper-cased respectively. But we use UpperCamelCase here by convention. And again, avoid using special characters or spaces in the field names. Most DBMS tools will let you use spaces but it makes things a little harder to deal with later on. So save yourself some extra work and get the names right from the beginning. We have a few other tables yet to define, but doing that will follow these same steps. Before we start actually building our tables, we need to know precisely what kind of information will go into them and having these notes
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-databases-2/naming-tables-2?u=76281980&t=94)** will help us do just that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2)
> **CLI Commands:** make (1)
> **Env Vars:** dbms (1)
> **Definitions:** is called (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - usually (1)

#### [Columns and data types](https://www.linkedin.com/learning/programming-foundations-databases-2/columns-and-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/columns-and-data-types?u=76281980&t=0)** - We've spent some time thinking about what information we'll store in our database, what different tables we want to create, and what fields we'll need. And now it's time to decide what sort of information each of the fields will hold. This might seem a little strange. Our name fields will store names, descriptions will store descriptions, and so on. But when working with a database, we need to tell it specifically what sort of information we're dealing with. This allows the database to store the information more efficiently, and to offer us helpful features based on the type of information. The kind of information stored in each column is called a data type. And these data types break down into a few categories. The first category is strings. A string represents a collection of characters, or individual letters, numbers, and symbols. For string types and for some other types, the length of the information we're storing becomes important. [Databases](../../Skills/Software%20Development/Databases.md) generally accept a handful of string types, including CHAR, a fixed length of characters, VARCHAR, a variable length of characters up to a certain limit, and longer text fields intended for something like a description. The database needs to know how long these fields are so it can efficiently store the information. For our name fields and for the street address and city, we'll use a variable length character string, or VARCHAR, maxing out at, say, 200 characters. If we set the length of the field to be too short, the end of the information would be cut off and discarded, and not stored in the database. Using a variable length here, we'll save a little space. The CHAR type is a fixed length, and that means that regardless of the information stored in that type, a CHAR field takes up the same amount of space.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-databases-2/columns-and-data-types?u=76281980&t=94)** That may seem a little bit academic for this database, but when you have hundreds of fields across millions or billions of rows, those tiny wastes of space add up. So CHAR is usually reserved for fields where we know we have an exact number of characters in that field in all rows. Our VARCHAR still has an upper limit, though it's not likely we'll get up to that with names or addresses. There may eventually be exceptions, but handling those is a topic for a later discussion. It's possible to store all of our information here as strings, but if we do, we'll need to do some extra work to sort dates, for example, or to do math with the prices. Remember, each data type has its own set of features. Another set of datatypes works specifically for dates in different formats. Our birthdays are dates, and for that, we'll use the DATE type. We don't care what time our customers were born, because that's a little creepy. There are some other types for dealing with dates and times, depending on whether you need to store a time along with a date, like DATETIME, and various other more specialized types that are supported by different DBMS tools, like TIMESTAMP, which automatically captures and stores the date and time when a row is updated or added. TIMESTAMP is great for recording when an order was placed, for example. We'll use DATE for the Birthday field, and DATETIME for events and reservations, because the time as well as the date, is important for those.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** char (4), varchar (3), date (2), datetime (2), timestamp (2)
> **SQL:** varchar (3), timestamp (2)
> **Definitions:** is a  (2), is called (1), means that (1)
> **Analogies:** for example (2)
> **Speakers:** - we (1)

#### [Numbers and other types](https://www.linkedin.com/learning/programming-foundations-databases-2/numbers-and-other-types-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/numbers-and-other-types-2?u=76281980&t=0)** - [Databases](../../Skills/Software%20Development/Databases.md) also offer specific data types for different kinds of numbers. These types are for integers, double precision numbers, floating point numbers, decimals of varying length, and more. As you need to store specific kinds of numbers, you'll need to do a little research to find out the best data type for your information. It's important to be precise when choosing the data type for working with numbers so that you don't run into issues with rounding or other pitfalls that can cause problems with your data. We'll use a decimal type for the prices of our dishes sent to three digits and two digits representing three places for dollars and two places for cents. None of our dishes will be $1,000 and none of our dishes will have fractional cents beyond two digits, so this will work just fine. It's worth taking a moment to talk about how we store phone numbers, too. Phone numbers aren't strictly numbers like an integer. We're not going to be doing math with phone numbers. Often they use special characters or have unique formatting, and they can even include an extension. So we don't store them as numbers, but rather, as characters, and a 20-digit variable text field should be long enough to accommodate an international number or a number with an extension. There are other types we might use for different kinds of information, including binary types to store binary data like files. Some databases also accommodate geographic data, graphs, objects, and other more exotic types, but we won't get into those here. Let's take a moment and assign data types to the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the columns. Nothing new here. Most of these will end up being varchar of various lengths. That's pretty common when we store short pieces of text.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-databases-2/numbers-and-other-types-2?u=76281980&t=94)** For descriptions, we'll use a much longer field because we want to store a few sentences, but we don't need to store a whole book, so we'll limit ourselves to 500 characters. That should be enough to describe a dish without writing a whole novel about it. In different databases, there are more specialized types for this kind of text, like the text type in [MySQL](../../Skills/Software%20Development/MySQL.md) or [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md), or other types for even longer text, up into the multi-gigabyte range. But we're keeping things general here. Again, our orders and reservations tables will follow with similar data types. Before we move on, I want to introduce one other element that will be important as we define what kind of data each column will hold. Null is a value that represents the absence of a value. It's often used to represent a missing value in a database. If we don't have someone's phone number, we don't store the value false, for example, or a placeholder like zero. We use null to indicate that a value is missing rather than some placeholder value that might cause problems later on. Null isn't a data type. It's more of a condition. We talk about no values as being null or not null rather than being equal to null. If there's a value in a cell, than the cell, whatever type it is, is not null. Even if a cell contains the text "null," it's not null. If there's a missing value, no value at all, not even false or zero, that value is null. And when we define the columns later on, we'll have the opportunity to say whether a column can contain null values and whether the default value for a column is null or something else. Okay, we've got an idea of what types we'll need to use for each column,
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-databases-2/numbers-and-other-types-2?u=76281980&t=187)** and this is helpful information to add to the paper or whiteboard that we're using to plan the database. We'll need this information when we go to actually create the database itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1)
> **CLI Commands:** find (1), mysql (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - databases (1)

#### [Primary and foreign keys](https://www.linkedin.com/learning/programming-foundations-databases-2/primary-and-foreign-keys-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/primary-and-foreign-keys-2?u=76281980&t=0)** - The next important task we'll need to do in designing our database is to look for keys, or to provide keys if there aren't natural keys already in our data. How do we uniquely identify our records? Let's start by looking at the Customers table. When working with personal information, we don't want to make the assumption that anything about the individual will be unique. That might sound a little harsh, but it's often the case that people share the same name. And depending on their situation, they might also share a phone number, an email address, mailing address, and even the same birthday. So none of the information in our Customers table is reliably unique. That means we need to add our own unique information, a surrogate or a synthetic key that will be different for each person. We'll add a Customer ID column to the Customers table. It'll be a numeric field, so we'll use the integer type. Later, we'll tell the database that it's intended to be the primary key, and that the value should auto-increment. That way, we're always guaranteed a unique value for every customer we add. One quick note here, an integer key is useful for simple examples like this, but for security reasons, many people choose to use a value called a UUID, a universally-unique identifier, which is much longer and therefore more difficult for an attacker to guess. But for now, we'll stick with this integer key to keep things clear. The name of a key can be anything that's valid for your DBMS, but it's a good idea to name your keys consistently and descriptively. I like to make the name a combination of the table name and the singular, and ID. The table name helps me to identify the key when I use it in queries, and ID reminds me that it's an identifier, or a key.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-databases-2/primary-and-foreign-keys-2?u=76281980&t=94)** Sometimes these keys are named with a table name and PK for Primary Key. It's worth thinking about what naming system makes sense for you. As we look at our other tables, we'll see that we need to follow this pattern for some of them. Dishes will probably have unique names, but if we end up changing a name later, that would cause a consistency problem elsewhere in the database if we used that name as a key. So we'll add a synthetic key here, just like before. It's numeric, it'll tell the database to auto-increment it, and so on. We'll do the same with events, adding EventID to the table, and orders by adding OrderID there. There's another kind of key too called a composite key. This is what we get when we use more than one field to uniquely identify a record. A composite key might be a combination of a first name, last name, and phone number, if the combination of all of those values is unique for every row. Usually, we'll want to use a single key, but if for some reason we can't add a key column to a particular table, and that table doesn't have one single column that can act as a natural key, we may need to use a composite key instead. We've defined all the primary keys that we'll need for now. In a little bit, we'll see how to use these as foreign keys, but first, we need to explore relationships between tables.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** uuid (1), dbms (1)
> **Analogies:** just like (1)
> **Speakers:** - the (1)


### 3. Relationships

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating relationships](https://www.linkedin.com/learning/programming-foundations-databases-2/creating-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/creating-relationships?u=76281980&t=0)** - Once we know which pieces of information we'll be storing in our database, we need to think about how those pieces of data are connected to each other. We thought about this a little bit when we were defining keys. Some [Databases](../../Skills/Software%20Development/Databases.md) can be used without connecting records in different tables at all. A database can simply retrieve records from one table or another table. But as we model more complex information in our database, we'll need to build relationships. There are three kinds of relationships to connect data. These are one-to-many relationships, many-to-many relationships, and one-to-one relationships. As I mentioned earlier, a relationship isn't something we have to define explicitly in our database schema, or in a DBMS tool. It can be more of a way of thinking about how pieces of data are connected to each other in our information model. When we're planning a database, we'll draw lines that represent relationships. And we'll use that information to create fields, organize tables, reduce redundancy, and improve the integrity of our data. And once the relationships are defined, we can configure our database to enforce them. In this chapter, we'll take a look at each relationship in turn, and see how they apply to our database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** dbms (1)
> **Prerequisites:** configure (1)
> **Speakers:** - once (1)

#### [One-to-many relationships](https://www.linkedin.com/learning/programming-foundations-databases-2/one-to-many-relationships-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/one-to-many-relationships-2?u=76281980&t=0)** - Let's take a look at the one-to-many relationship. This is the most common type of relationship that [Databases](../../Skills/Software%20Development/Databases.md) use. It connects one piece of data, one row of a table to one or more other pieces of data. This relationship is represented by a line that looks like this. One endpoint for the one side of the relationship to a little symbol called a crow's foot, representing many endpoints. Let's consider our Customers table and our Dishes table here for a moment. We want to represent our customer's favorite dish in the Customers table. For each customer, we would write the name of the dish in the FavoriteDish column. But this is a lot of work, and if we ever change the name of a dish, maybe if we notice a spelling error in our Dishes table, we'd need to be conscientious and update the name in our Customers table as well. In a small database, this may not be a huge problem, but in a large database, this kind of hands-on maintenance and administration would quickly become a time-consuming problem to solve, and a major issue for the consistency and integrity of our data. Instead, we'll use the primary key for the dish to represent data in the customer table. Using the key has a few advantages, the key never changes and is guaranteed to be unique. It also has the benefit of taking up much less space than a full-text name, which helps keep the database smaller as more entries are added. We use a one-to-many relationship here because one dish may be the favorite of many customers. And so this looks like many-to-one. Many customers to one dish. In the one-to-many relationship, the foreign key will be on the many side. The dish ID is a foreign key in the FavoriteDish column of the Customers table, so this relationship is one dish to many customers,
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-databases-2/one-to-many-relationships-2?u=76281980&t=95)** and so it's a one-to-many. Regardless of the direction that the relationship appears on paper or in a diagram, it's still a one-to-many. There's not really a separate thing called a many-to-one relationship. It's just a matter of how you look at it. Now, our favorite dish column has a piece of information that represents a whole row in the Dishes table, and we don't have to worry about changes there causing problems we'll need to fix or update to maintain the integrity of our data. We can also use this relationship to model other connections between items. To keep track of reservations, we'd have an entry for each reservation in a dedicated table. And in the Customer column, we'd put the key for the Customers entry in the Customers table. Each reservation will have one customer, but one customer might have many reservations, at least we hope they will. Using a one-to-many relationship doesn't require the many end to have a lot of instances. There could just be two different values on the many side, or even one. The point is that this relationship allows one record to be associated with many records.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Definitions:** is a  (2)
> **Speakers:** - let (1)

#### [Many-to-many relationships](https://www.linkedin.com/learning/programming-foundations-databases-2/many-to-many-relationships-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/many-to-many-relationships-2?u=76281980&t=0)** - Another relationship used frequently in [Databases](../../Skills/Software%20Development/Databases.md) is called a many-to-many relationship. This model is useful when we want to associate more than one thing with more than one other thing. Let's consider orders and how we track them. Our orders table tracks individual orders from customers. There's only one customer per order and each customer could have more than one order, so that's a one-to-many relationship. But orders can be made up of more than one item. To keep track of which dishes are part of which order, we could start adding columns to the orders table and put a dish key in each one, but we shouldn't start adding columns here on the orders table because we don't know what the maximum number of items someone might order is. And if we make 50 columns, one for each potential dish a customer could order, most of our fields will remain blank. To solve this problem efficiently, we'll use a many-to-many relationship. Many orders could have many dishes and many dishes could be included in many orders. This is what we draw when we discover that we need this kind of relationship, a line with a crow's foot on each end. And that's a signal to us that we need to do a little more work. In most DBMS tools, we can't model a many-to-many relationship directly, so we need to create a linking table, which has a one-to-many relationship with both of the tables we want to use. We'll name it orders dishes. These linking tables are customarily named by combining the table on the left of the many-to-many relationship with the name of the table on the right. The linking table only needs two columns, an order ID and a dish ID. For each item in an order, we'll add a row for each dish.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-databases-2/many-to-many-relationships-2?u=76281980&t=93)** Then when we want to call up information about a customer's orders, we'll ask the database for rows matching the order numbers, and we'll get back a list of the dishes, or rather, the dish IDs that were part of each order. It could be just one or it could be five, 10, or 50. Doing this keeps our orders table nice and clean while allowing us to record the details of what each order included. And it also let's us easily find out how many orders a particular dish was included in. We could create other many-to-many relationships using linking tables for other associations, like if we wanted to keep track of many dishes that a customer likes, we might make a customers dishes table, or if we had a list of ingredients or allergens, we could create a dishes ingredients table or a dishes allergens table, so we could have that information at our fingertips for printing up detailed menus or adding warnings to entries on the menu for someone who might be allergic to an ingredient. We could also model a customer's events linking table. If a customer attends or is interested in attending various events offered throughout the year. Like the previous linking table, this would involve just a customer ID and an event ID with one row for each event the customer plants to attend. And in building this, we'll also be able to get a list of which events specific customers are interested in to help us with our planning. Many-to-many relationships are fairly common, but they're really made up of one-to-many relationships with the addition of a linking table. As you model your database, keep in mind that you might need to add in some linking tables to fulfill certain relationships. Remember, designing a database with ER diagrams is an iterative process. You don't have to get it just right on the first try.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is called (1), is an  (1)
> **Env Vars:** dbms (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - another (1)

#### [One-to-one relationships](https://www.linkedin.com/learning/programming-foundations-databases-2/one-to-one-relationships-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/one-to-one-relationships-2?u=76281980&t=0)** - There's another kind of relationship called one-to-one. This is not frequently used, because usually if there's only one row that associates with only one other row, it suggests that the two rows should just be one row and one table. Our database here doesn't have anything that needs a one-to-one relationship. But a real-world example of a one-to-one relationship involves security. We could separate our customers table into two tables, putting just the customers' name and ID in one table and their personal information in the other. Then we'd have a one-to-one relationship between the tables. We might choose to protect the customers' personal information, like their birthday or email address, from being viewed by our employees, while leaving their name and key available to use in other relationships, like printing place cards or looking up a reservation. We might also use a one-to-one relationship if we were assigning resources of some kind, like aprons or chef's hats or iPads, from a table of equipment. If we assign one item to one person, it's not available to be assigned to another person. And one person couldn't be assigned more than one item. Chances are in a real-life scenario, you'd handle equipment assignment differently than this, but that's another way to think about it. One-to-one relationships are indicated by a line with just one endpoint on either side. Some DBMS tools will allow you to secure individual columns of data. So, depending on your implementation, building a relationship like this may not be necessary to protect information. It certainly makes more sense to keep related information together, but various restrictions might require you to separate information. Doing so is an example of denormalization, as we'll see in a little bit.

> [!info]- Semantic Content
>
> **Code Identifiers:** ipads (1)
> **Env Vars:** dbms (1)
> **Definitions:** is an  (1)
> **Speakers:** - there (1)

#### [Relationship rules and referential integrity](https://www.linkedin.com/learning/programming-foundations-databases-2/relationship-rules-and-referential-integrity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/relationship-rules-and-referential-integrity?u=76281980&t=0)** - Once we've decided what our relationships will be, what they represent, and how they connect data, it's time to decide whether to enforce them. [Databases](../../Skills/Software%20Development/Databases.md) allow us to benefit from referential integrity, which means the database will be aware of the relationship and will not let you or another user modify data in a way that violates that relationship. This helps us to maintain the consistency of the database. Let's look again at our Customers table and our Dishes table. The Customers FavoriteDish column is a foreign key from the Dishes table. It's really just a number, but we can tell the database when we create this table, that the number in this field also needs to exist in a field in the other table. It wouldn't make sense to set a customer's favorite dish to something that doesn't exist. So if we entered a customer or updated their record and tried to put in something that doesn't exist, the database would reject the entry or the change. We'd only be able to make the change after that dish was added to the database, or we change the entry to reflect something that is already in the Dishes table. This referential integrity helps to keep the database consistent and accurate. We don't want to have to worry about whether we have bad data in the tables. And, using integrity rules like this lets the database do the work of keeping things consistent, instead of doing it ourselves. Another benefit of referential integrity is that we can use it to delete records or to prevent records from being deleted. If we were to delete a customer record, it may be that we want that customer's orders to be deleted along with them. Depending on your [Privacy](../../Skills/Data%20Science/Privacy.md) restrictions or business requirements, this could
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-databases-2/relationship-rules-and-referential-integrity?u=76281980&t=93)** be something you need to do. It can be done manually, but these rules allow us to have the database perform a cascading delete, where associated records are removed in order to maintain consistency. Otherwise, when a customer is deleted, their orders would refer to a non-existent customer. However, this isn't something we want to do with all of our data. If we delete a customer, we don't want their favorite dish to be removed from our Dishes table. That dish is still available to other customers, and it's still on our menu. So it's important to not just define relationships, but also to decide how they'll be enforced by the database. Consistency is a feature offered by the database, and you'll need to decide how it applies to your particular situation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - once (1)


### 4. Database Optimization

[↑ Back to Table of Contents](#table-of-contents)

#### [Normalization](https://www.linkedin.com/learning/programming-foundations-databases-2/normalization-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/normalization-2?u=76281980&t=0)** - In the early 1970s, Edgar Codd defined three rules for organizing data in a database. These are called normalization rules, and they help us to reduce redundancy and improve the integrity of our data. These first three rules, called first, second, and third normal form, are considered to be the standard level of optimization for a business database. Applying these rules is an important step in designing any database. These rules are sets of formal criteria, and they build on top of each other, step by step. We move through the [Forms](../../Skills/Web%20Development/Forms.md) as we optimize our database to third normal form. The definitions of these forms are pretty academic, and they're interesting to look up if you're curious about the mathematics behind how [Databases](../../Skills/Software%20Development/Databases.md) work. When a normalization rule has been applied to a database, we can say that the database is in that normal form. There are many normal forms beyond third normal form, but we won't cover them here because they get a little bit exotic for a basic database like ours. Normalization helps us prevent problems in working with our data, and the process should be revisited whenever there's a change to the schema or the structure of a database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Definitions:** is an  (1)
> **Speakers:** - in (1)

#### [First normal form](https://www.linkedin.com/learning/programming-foundations-databases-2/first-normal-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/first-normal-form?u=76281980&t=0)** - First normal form requires that values in each cell are atomic, and that tables have no repeating groups. This means that each field in each table has only one value in it, and that there are no columns representing repeated kinds of data for each row. First normal form is often extended to include the idea that there aren't duplicate rows in a table. This also suggests that the order of rows and columns is not important to the data. The primary tables that we're using already satisfy first normal form. But let's take a look at ways we might have built these tables that don't satisfy it. In this first example, we've extended the customer's table with three columns for favored dishes. But these are repeating groups, and this violates first normal form. Another approach might have been to put all the keys for dishes in a list in one cell. This is also a repeating group, and so it violates first normal form, as well. Remember, first normal form requires us to have one and only one value in each cell. To resolve this problem, we'd remove the repeating groups, either from a list in one cell or from multiple columns and create another table that satisfies first normal form to hold the values. Then, we'd link the tables with a relationship between their keys. That's how I've designed this database from the start, though. Violations of first normal form are usually pretty easy to spot early on in the design process. Whenever you find yourself putting multiple values in a cell or creating columns that end with numbers like favorite dish one, favorite dish two and so on, that's a big red flag that indicates you'll need to change the design. We still have a little bit of a problem, though. Our orders dishes linking table could have repeating groups.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-databases-2/first-normal-form?u=76281980&t=93)** One customer might have ordered more than one of the same dish in an order. So we'd have two or more rows with the same order ID and dish ID. These are repeating duplicate rows. And to fix that, we can add a unique value for each row to this table, as well. This would act as a primary key, and while we're not using it right now, doing this makes the linking table satisfy first normal form. We'll go through and add a value like this to the other linking tables as well. So far our database is designed in such a way that the actual sequence of rows in the tables doesn't matter. Our Orders table has a date time field, which is the unique value that can determine the chronological sequence of the orders, so it doesn't matter how the rows themselves are organized in the table. The sequence in which rows or columns appear should never matter in a table. If you find that your relying on the sequence of rows or columns that's another red flag. If the sequence in which records were entered is important you'll want to use an auto-incrementing unique value, or a time-stamp, to indicate that instead. When we query data we might not always get it back in the order in which it appears in a visual representation of the table. First normal form is the starting point for getting our database optimized.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Definitions:** means that (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - first (1)

#### [Second normal form](https://www.linkedin.com/learning/programming-foundations-databases-2/second-normal-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/second-normal-form?u=76281980&t=0)** - [Instructor] Second normal form says that no value in our table should depend only on part of a key that can be used to uniquely identify a row. This means that for every column in the table that isn't a key, each of the values must rely on only the whole key. The values must describe something about that row that we can't determine from just the part of a key. This problem comes up in the context of composite keys. Let's take a look at the events table to explore the requirements of second normal form. Let's say we have a few events that happen repeatedly. The Winter Wonderland event, for example, is held every year, so it has happened a few times, and the Eating Healthy at School event is something we'll offer weekly throughout the school year. For each event, the name doesn't change, but the date does, and so the name and the date taken together give us a composite key. We already have a primary key on this table, but if you remember from before, tables can have more than one key. This unique pair of values is a candidate key, meaning that it also is able to uniquely identify each row. And we have to evaluate the pieces of information in a row based on all possible keys, not just the primary key. When we offer an event, it has to take place somewhere, so we have a column that indicates the location for each event. The Eating Healthy event is a hands-on food preparation exercise, so it always takes place in our teaching kitchen. And the Winter Wonderland event takes place in the ballroom of the fancy hotel across the street. When we look at this table, we can see that the location is not dependent on the full candidate key. For the Winter Wonderland events, we know where the event will be held, just based on the name of the event, which is only part of the composite key.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-databases-2/second-normal-form?u=76281980&t=94)** The date doesn't matter, and we always offer the Eating Healthy class in the teaching kitchen, so this location value is also not dependent on the full key. It only really depends on part of this candidate key. In order to make this table comply with second normal form, we need to create a new table with a key for the event and a corresponding location. Now the Events table has values that are dependent on the full key, and the new EventsLocations table reflects the fact that each event is held in just one place. The location is now dependent on the event name. Just by knowing the name of the event, we can tell where it's held.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Third normal form](https://www.linkedin.com/learning/programming-foundations-databases-2/third-normal-form-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/third-normal-form-2?u=76281980&t=0)** - While second normal form tells us that we shouldn't be able to determine a value in a column from only part of a composite key, third normal form tells us we shouldn't be able to figure out any value in a column from a field that isn't a key. Let's look at the dishes table here as an example. It may be that we want to offer a lunch menu with prices discounted by 50% during the middle of the day. We need some price to print on the lunch menu, so we might add a column here next to price that reflects the lunch price of each of our items. That way when we print the normal menus, we'll use price, and when we print the lunch menus, we use lunch price. And so when we print out the price for our mini cheeseburgers, instead of the full price of $8, they'd be listed at $4 instead. Designing a table this way violates third normal form. Because we know that this lunch price is just half of the regular price, we can figure out that information from the regular price. The lunch price column is dependent on the price non-key field, and that's a problem. Not only are we wasting resources by storing this information, but having it available here means that someone could edit the price in one column but not the other, and then our business rule of offering 50% off of everything wouldn't be satisfied anymore. Of course, if you want to offer very specifically discounted lunch prices for individual items on your menu, you could have a column for that. We might offer the mini cheeseburgers for $6 instead of four and keep the salads, drinks, and pizza the same price as normal. The difference here is that setting a price that isn't based on an overall rule means that the data for that column
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-databases-2/third-normal-form-2?u=76281980&t=93)** is no longer dependent on another non-key field. It just becomes another non-key field itself. If a value you're storing can be derived from some kind of rule from another value in the table, that's a violation of third normal form. But if the value can't be derived from another field, if it describes something unique to that row, it's not a violation. You could also use a separate table where you indicate lunch prices for specific items. We won't do either of those in this database, though, because we'll stick to the rule that everything on the menu is half off for lunch time. Once your tables all satisfy first, second, and third normal form, the database is normalized to third normal form. This helps to guarantee that your database has low duplication, high integrity, and will be durable when you create, update, read, and delete entries.

> [!info]- Semantic Content
>
> **Definitions:** means that (2)
> **Speakers:** - while (1)

#### [Denormalization](https://www.linkedin.com/learning/programming-foundations-databases-2/denormalization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/denormalization?u=76281980&t=0)** - While normalizing [Databases](../../Skills/Software%20Development/Databases.md) to third normal form is a best practice, occasionally there may be a business need or a database performance issue that requires violating the rules of normalization. Denormalization is the process of intentionally duplicating information in tables in violation of normalization rules. Denormalization is done after normalizing a database. It doesn't mean skipping normalization altogether. In our restaurant database, it's not likely we'll run into speed problems any time soon, but as an example of denormalization let's take a look at the Orders table. For each order we can determine the number of items included and a total price for those items. By using the OrderID we can get the associated items in the OrdersDishes table, count them up, and pull information from the Dishes table to get the price of each item and sum those up as well. We wouldn't usually store this information on the Orders table because if we did, we'd be storing derived information in a place where it could be edited with no consistency checks. What if an order had three items and cost $26.98 and then someone edited the quantity? Looking back at this record it wouldn't reflect what was really ordered and the data would be inconsistent, but it's problems like this we need to balance when we're making a decision to denormalize. When we ask the database for an order summary, there's a lot of activity going on in the background and with a very large database, a very slow server, or a huge number of requests coming into the database at the same time speed may be something we need to optimize for. So we would make the conscious decision to record the quantity and total at the time
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-databases-2/denormalization?u=76281980&t=93)** when we generate the order, to save time later and we would be aware of this risk to consistency and accuracy in our database. Denormalization is about trade-offs. Usually a gain in speed for a reduction in consistency and that's a decision you'll need to make based on your own business requirements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** make (2)
> **Versions:** 26.98 (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - while (1)


### 5. Querying a Database

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a database](https://www.linkedin.com/learning/programming-foundations-databases-2/creating-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/creating-a-database?u=76281980&t=0)** - After we've planned, designed, and normalized a database, the next step is to create it. Depending on the [Database Management](../../Topics/Database%20Management.md) system you're using, that task will either be done by writing [SQL](../../Skills/Data%20Science/SQL.md) commands by hand or in a graphical environment, where software takes care of composing those commands for you. I can't show you how to create a database in every possible DBMS, so I want to talk about the general approach and about one important distinction in how we interact with the database. Chances are, if you're working with a relational database, you'll be communicating with it using SQL or a structured query language. We saw a little bit of this earlier, and you may remember that I mentioned SQL can be used both as a DDL, or data definition language, and a DML, or a [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) language. When we create a database or modify its schema, we'll use SQL as a DDL, and when we work with data inside the structure of a database, we'll use SQL as a DML. As an example, I'll step through the creation of one of the tables we designed earlier. Keep in mind, though, you don't need to follow along with this. I just want to show you how it's done in general. As you learn more about [Databases](../../Skills/Software%20Development/Databases.md), about SQL, and about your DBMS in particular, you'll learn how to do this on your system. Before we define tables, we need to create a database, and in SQL, that's done like this. Sometimes we need to tell a system to use our newly created database. Now that I have a database, I'm going to switch over to software that will let me show you SQL statements and their results. For the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this chapter, I'll go through some examples using SQL that you can watch but that you don't need to follow along with. If you have a DBMS to use, that's great,
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-databases-2/creating-a-database?u=76281980&t=93)** but the intention here is just to show you how SQL queries work in general.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (10), [Database Management](../../Topics/Database%20Management.md) (1), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** sql (10), dbms (3), ddl (2), dml (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - after (1)

#### [Creating tables](https://www.linkedin.com/learning/programming-foundations-databases-2/creating-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/creating-tables?u=76281980&t=0)** - [Instructor] Once I have a database I can work with I'll use the CREATE keyword in [SQL](../../Skills/Data%20Science/SQL.md) along with parameters for our fields to tell the database what we want a table to look like. In SQL we'll start writing a description of how to create a table and we'll give it the name Customers. Then within a set of parentheses we'll add information about the columns. First, I'll add a field called CustomerID. That's our primary key for the table. For my notes I know that the data it will hold will be an integer, up to six digits. Because it's the primary key it can't contain a null value. That wouldn't make any sense. So it's not null and it'll auto-increment. Every time we add a new customer that new row will get a unique number, the next one in the sequence. There are different ways to indicate that a field is a primary key depending on the system you're using. In the system I'm using I need to add a line like this. Then I'll go through the other fields and write down what they need to be. FirstName and LastName will be of variable lengths up to 200 characters. And we'll set the constraint that they not be null. We don't want to put in a customer with no name. Depending on where the people in your database are from you may have different requirements for a valid name. In some cultures people can have single names and in others you'll need to accommodate more than just a FirstName and a LastName. For a great resource about valid name requirements, check out Patrick McKenzie's blog post called Falsehoods Programmers Believe About Names. I'll continue by adding more of the fields from my notes. We'll set Phone to NOT NULL
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-databases-2/creating-tables?u=76281980&t=97)** because we need some way to contact our customers. This is a business requirement, and we'll satisfy it by letting the database's constraints prevent us from entering a record that doesn't fit our business requirement. I'll add Birthday and then I'll add FavoriteDish. Here I've indicated that this field references the DishID from the Dishes table. FavoriteDish is a foreign key in this table, and once again, depending on the DBMS you're using, the way you set up and enforce this relationship will be different. When that command is complete I'll send it to the database. I'll refresh my view and my table was created. Create statements and a few others like alter, drop, and truncate are examples of SQL used as a data definition language. These are used to define and refine the schema of the database. Once a schema is in place we need to use SQL as a [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) language to work with the data itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1)
> **Env Vars:** sql (4), create (1), null (1), dbms (1)
> **Definitions:** is a  (3)
> **Prerequisites:** you'll need (1), set up (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Writing SQL queries](https://www.linkedin.com/learning/programming-foundations-databases-2/writing-sql-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/writing-sql-queries?u=76281980&t=0)** - [Instructor] Now I want to shift gears a little bit and show you how we manipulate data in the database using [SQL](../../Skills/Data%20Science/SQL.md), I've taken a moment to finish creating the database and I've added some data that will let us see how the database will work, one common task you'll need to do with SQL is write queries. A query returns specific information that we ask for. Over the next few videos we'll take a look at some basic SQL queries and statements. These videos are intended more as a demonstration than a tutorial on the specifics of SQL. If you'd like to learn more about SQL in particular take a look at [Learning SQL Programming](Learning%20SQL%20Programming.md) here on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, when we ask for information from a database we'll use the select statement. This tells the database we want to see information from specific fields, I'll write a select statement here and to start out I'll use the asterisk or star character which SQL treats as a wildcard, or a character that indicates all possible values in order to ask the database to give me information from all the fields in the table that I'll specify. Doing this can be useful when you're exploring a table but in a real production database it's usually not recommended because it can use a lot of resources on large tables. Once I've asked for fields I need to tell the database what table I'm talking about, to do that I'll add from and the name of one of my tables. Let's use customers, and I'll end the statement with a semi colon, then I'll run the query. Depending on the software you end up using how you run a query may be different. Here at the bottom of my screen I can see the result, this is a list of all the customers in the customers table in my database
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-databases-2/writing-sql-queries?u=76281980&t=93)** and we see all the fields from that table because I used the wildcard character. I can modify my query to show records from other tables too. I'll change customers up here in my query to dishes and I'll run that, here's all the fields and records for my dishes table. I can also change this wildcard to be individual field names that I want to see returned. I'll replace the asterisk with name and leave from dishes. I'll run this query and now I can see just the field I asked for. I'll change name here to first name comma last name comma email and I'll change dishes to customers. When I run this query I can see a list of names and emails for customers. This might be useful to generate a promotional email or something like that. Where we don't need all of the information in the customers table, the select clause allows us to return data from the tables in our database and it acts as a starting point for making more complex and detailed queries as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (7), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** sql (7)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Narrowing query results](https://www.linkedin.com/learning/programming-foundations-databases-2/narrowing-query-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/narrowing-query-results?u=76281980&t=0)** - [Instructor] Using SELECT we can ask for specific rows in our table. But when we use it without qualification we get those fields for all the records in the table. To further refine our SELECT query we can use the WHERE clause to choose only specific records or records which match our criteria. I'll write a query here to get my customer's FirstName, LastName, and state from the customer's table. I'll run it and I'll see that we have a lot of results. Here after the FROM clause, I'll add a WHERE clause to filter these results. We'll take a look at customers only from the state of California. I'll run the query and here they are. I can use some logical operators in my query as well if I want to get results that match more than one condition. Let's take a look at the customers who are from California or Colorado. To do that after WHERE State="CA" I'll add OR State="CO".
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-databases-2/narrowing-query-results?u=76281980&t=57)** I'll run this query and then I can see that I have customers returned whose state is California and Colorado. We can also look for fields that have similar values instead of just exact matches. To do that we'll use the LIKE operator instead of equals and we'll use a placeholder for part of the string. I'll change my query here to read WHERE State LIKE and then I'll write "C%". Here the percent is the placeholder for one character. I'll run the query and I can see I have results from Connecticut, California, Colorado, and so on. We can search by other fields, too. Let's look for customers named Taylor. I'll change my WHERE clause to look for FirstName="Taylor",
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-databases-2/narrowing-query-results?u=76281980&t=102)** and I'll run that query. Here I can see that we have two customers with the same name. Good thing we have a primary key so we can tell them apart. I can see that by adding CustomerID to my SELECT clause. Now I want to show you how we can take advantage of other data types, and the fact that the database understands how certain data works when it's stored as the correct type. We have a few date fields in the database including the date of scheduled reservations. Let's look for all the reservations on a particular day, February 6, 2019. I'll replace my query here. And I'll get every field from the reservations table. And then I'll add a condition to look for dates greater than the date that we're looking for and less than the following day's date. I'll run that query and I see all of the reservations on the date that we're looking for. I can't just ask for dates equal to the current date because the type of data stored in the date column in the reservations table is a date time not a date. That field contains a time component. So asking for exactly the date doesn't work. I need to get a range for the date. I do this by asking for anything greater than or after the very first moment of the date I'm asking for. And anything less than or before the very first moment of the following day. So these two ranges overlap and I get just the values that match the date that I'm looking for. If this were just a date with no time I could use equals here with the date instead of a range. But if we store reservations with just a date and no times then we wouldn't have any times for our reservations, which wouldn't be very helpful to us or our customers.
>
> **[3:16](https://www.linkedin.com/learning/programming-foundations-databases-2/narrowing-query-results?u=76281980&t=196)** Being able to query data based on a particular condition is a powerful use of a database. And it's a cornerstone of retrieving exactly the information you need.

> [!info]- Semantic Content
>
> **SQL:** where (5), select (3)
> **Env Vars:** where (5), select (3)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Sorting results](https://www.linkedin.com/learning/programming-foundations-databases-2/sorting-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/sorting-results?u=76281980&t=0)** - [Instructor] When we're querying a database, it's often useful to get the results back in a particular order. Using correct data types can help us out here too. Let's take a look at the dishes in the Dishes table in alphabetical order by name. To do that I'll write Select, Star, from Dishes, Order by, Name and then I'll run that query. The Order by clause takes the name of the field we're going to sort by. In the results area, I can see that the records are sorted by name. Apple pie, artichokes, barbecued tofu skewers, caffe latte, and so on. This sequence from A to Z is called ascending and that's the default. It's represented by ASC and I can invert the sort order to descending by changing that to DESC. Sorting works with any data type that has a logical sort order. So we can sort numbers, like the prices of our dishes. Let's change the query here and run it again and now I can see that the results are sorted by price and we can sort dates as well. Let's take a look at the reservations we have sorted by date. To do that I'll write Select, Star, From Reservations, Order by, Date and I'll run the query. We can also combine sorts with other queries. Let's recall our previous search that we had looking for reservations on a particular date and then return those in a sorted order as well. I'll split up my query and add the Where clause.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-databases-2/sorting-results?u=76281980&t=98)** Now when I run the query I see the reservations for the date that I'm looking for in chronological order. Asking the database to sort results can save us time and processing power later on in the process, especially if we're using the results in an app or a report.

> [!info]- Semantic Content
>
> **Env Vars:** asc (1), desc (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Aggregate functions](https://www.linkedin.com/learning/programming-foundations-databases-2/aggregate-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/aggregate-functions?u=76281980&t=0)** - [Instructor] [SQL](../../Skills/Data%20Science/SQL.md) offers aggregate functions which use more than one piece of data to generate a value. One of the most common aggregate functions is count, which returns the number of records in a particular field from rows that match a particular condition. This is helpful because it can be time consuming to count up records by hand. Let's see how many customers we have in our customers table. I'll write a query to do this. With select count first name from customers.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-databases-2/aggregate-functions?u=76281980&t=36)** And then I'll run that query. The count function takes the name of a field and tells us how many rows that match our criteria have a value in that field. Because of how the database is designed we know that there won't be any null values in the first name field. We don't allow anyone to enter a record with an empty first name. We could also use last name or even the key field to get a count of matching records. We can stack this with a search like the state to see how many records match. I'll run that query as well and I can see that I have 16 customers from California. This query works with the data we have but it's usually a good idea to count on the same field you're matching on unless you need to count from another field. There are some other useful aggregate functions that work with numbers. Sum adds up all the values of the matching criteria, let's see how much it would cost if someone ordered one of each item on our menu. To do that, I'll sum up the prices in the dishes table. With select sum price from dishes and I'll run the query. The total comes to $176.93. We can also get an average of values with the AVG keyword. I'll add that in here with AVG and the price field. I'll run that and it looks like our average price is about $8 and we can get the minimum and maximum values in a column with min and max. I'll add those to my query as well. Min price and max price and I'll run that query. There are actually a couple of items that are 9.99
>
> **[2:15](https://www.linkedin.com/learning/programming-foundations-databases-2/aggregate-functions?u=76281980&t=135)** but that's the highest value in the column so that's what we get returned to us. These aggregate functions are useful in sub-queries where we use the result of one query as a condition in another. There are some other aggregate functions but these are the common ones. So I wanted to show them to you briefly here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** avg (2), sql (1)
> **Versions:** 176.93 (1), 9.99 (1)
> **Speakers:** - [instructor] (1)

#### [Joining tables](https://www.linkedin.com/learning/programming-foundations-databases-2/joining-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/joining-tables?u=76281980&t=0)** - [Instructor] One of the powerful features of [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) is the ability to connect records across different relations or tables. Those relationships are part of our data model, and when we're getting data from a database, we can write a query that uses the connections between data to return us a useful result. If you recall, our customers table has a field for the customers' favorite dishes. I'll write a query to show those values. I'll write SELECT, FirstName, LastName, and FavoriteDish FROM Customers. And I'll run the query. This isn't extremely useful to us like this, because unless you're a little too familiar with the menu, you probably won't remember what dish 15 or 13 or three is. But we also have a table where those numbers line up with the name of a dish. That's our Dishes table. We can use the JOIN keyword to tell the database to consider two tables, our Customers table and our Dishes table, instead of just one. This takes a little bit of setup here in the query to get the right result. I'll start with the JOIN keyword, to tell the database to use Customers and Dishes. This query by itself doesn't make a lot of sense. If we run it right now, we'll get back one row from our Customers table for every row in the Dishes table. Not too helpful. So we need to add some more information. We need to tell the database which fields match. And so I'll add a statement that says the FavoriteDish column in Customers is the DishID from Dishes. With ON Customers.FavoriteDish
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-databases-2/joining-tables?u=76281980&t=97)** equals Dishes.DishID. If I run this query, the information that I get back still doesn't make a lot of sense, so there's one more piece of information to add. I want to see the name of the dish from the Dishes table. So I'll add it to my query. And now, when I run my query, I can see the name of each customer's favorite dish. If I add the DishID column from Dishes, and run the query again, I can see how the matching is working. But that's not really information we need right now. So I can get rid of the ID columns from my query. And just get what I really want, customer names and favorite dishes. We can use this across other tables, too. We can take a look at the items in Reservations, for example. We don't know who customer 17 is, but linking to their name using the customer ID is pretty straightforward. I'll modify my query a little bit. Now, I can see the name of customers associated with the time of the reservation and the size of their party. And, if we use a more advanced query joining across more than two tables, we can even create a summary of all of our orders, with the customer name and phone number, order date, items in the order, and total cost of the order. That's a pretty complicated example for an introductory course, but it shows how useful querying across tables can be. Joins make using data in a database even more powerful.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-databases-2/joining-tables?u=76281980&t=192)** There are different kinds of joins, but we won't get into them here. This is just to show you the basics of how one kind of join works to associate records across two or more tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1)
> **CLI Commands:** make (3)
> **SQL:** join (2), select (1)
> **Env Vars:** join (2), select (1)
> **Analogies:** for example (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Modifying data](https://www.linkedin.com/learning/programming-foundations-databases-2/modifying-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/modifying-data?u=76281980&t=0)** - [Instructor] While we can query information from a database with [SQL](../../Skills/Data%20Science/SQL.md), we can also use SQL to modify data, retrieving data or reading it is the R in the CRUD acronym. Let's take a look at the others, create, update, and delete. Let's add a new customer to the database, to do that I'll use the insert keyword and tell the database where I want the data to go with into customers and then I'll provide the column names and the values to insert into them. I'll run that query and then when I ask for the contents of the customers table again, down here at the bottom of the table I can see my new customer was added. The database provided an auto incrementing key to give us a unique value for this customer. Any values we didn't provide are null and that's okay because of the way that we defined this table earlier. We only required that first name, last name, and phone need to not be null. If we left off one of those fields and if the database were configured to enforce that constraint we'd get an error preventing us from entering data that violated the constraint. Now let's take a look at updating an existing record, let's say one of our customers got a new email address and we need to make that change to the record. When working with statements that will modify data in the database, it's always a good idea to do a select first to make sure you're targeting the records you think you are. I'll write select star from customers where first name equals Taylor and last name equals [Jenkins](../../Skills/DevOps/Jenkins.md), and I'll run the query.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-databases-2/modifying-data?u=76281980&t=100)** Let's change the email address for a Taylor Jenkins who lives in Florida, we've got two customers by that name so to be precise let's work with a unique key for the customer instead of trying to target them based on non-key fields. The correct Taylor is customer ID number one. That's better, now we'll use that key to write an update query to change the email address. I'll write update and the table name customers, set email the field name equals Tjenkins@[landonhotel.com](https://landonhotel.com)
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-databases-2/modifying-data?u=76281980&t=137)** where customer ID equals one, if I left off this conditional clause here the database would update the email address for all the records in the table to this email address and generally speaking there's no undo button in [Databases](../../Skills/Software%20Development/Databases.md). Sometimes that behavior is useful, but for this purpose it's not, and if we just use the names to match two records would be updated instead of just the one we want. So we'll make sure to write a very specific condition that only targets the record we want to change. Now if we take a look at the record in the customers table, we can see that the change was made. The last action I want to show you is delete which removes rows from tables. Let's use both of our Taylors as an example, as with updating it's important to make sure you're working with the record you want when you're deleting data. I'll select all of my customers named Taylor. Let's remove the Taylor from Washington D.C. That one's ID is 26 so we'll use that to be precise, and to remove a record I'll write delete from the table name, where customer ID equals 26.
>
> **[3:32](https://www.linkedin.com/learning/programming-foundations-databases-2/modifying-data?u=76281980&t=212)** Now when I take a look at my customers I can see here that customer 26 Taylor Jenkins from Washington D.C. was deleted from the table. If I deleted by name I'd have deleted two records, that user's ID is gone and it won't be reused if we had set up some referential constraints like a cascading delete across records where this customer was referenced, the database would take care of those for us deleting the customer's orders, their attendance at events and their reservations. Working with data through SQL statements is convenient but it's extremely important to make sure you're targeting the data you intend to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3), [Jenkins](../../Skills/DevOps/Jenkins.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** make (5)
> **Env Vars:** sql (3), crud (1)
> **File Paths:** d.c (2)
> **URLs:** [landonhotel.com](https://landonhotel.com) (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 6. Further Database Topics

[↑ Back to Table of Contents](#table-of-contents)

#### [Indexes, transactions, and stored procedures](https://www.linkedin.com/learning/programming-foundations-databases-2/indexes-transactions-and-stored-procedures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/indexes-transactions-and-stored-procedures?u=76281980&t=0)** - Indexes, transactions, and stored procedures are all features offered by most DBMS tools. How they are used and how you choose to apply them will vary based on the software and your needs. Just like in a book, tables in a database can have indexes, where you can look up information quickly. A primary key acts as an index, but sometimes, especially on large tables, you may want to look up other fields. Normally, this involves scanning the whole table for matching terms. For example, on a table with many customers, we might want to look up customers directly by name. We could search using the first name and last name fields. On a large table, this kind of search might take a while, as the database compares those fields in each row with the search term. But with an index on those fields, the database stores a reference to what each value is in those fields and where it's located, and using that index, the database can return information much faster, but when we add indexes, it increases the amount of time some operations, like inserting a record, will take. So like many optimizations you might make to a database, there is a trade-off. Even though I mentioned transactions earlier, I want to touch on them here again. Once you learn to read [SQL](../../Skills/Data%20Science/SQL.md), it's easy to write up some queries and statements and just start using your database through a command prompt or in an app. Constraints that you put in place can help protect data, but it's still important to make sure your queries aren't causing integrity problems with the database. And so it's helpful to remember what transactions are, how they work and when you might need them in working with your data. Transactions group queries or statements into a block of activities, where, if one of the components fails for any reason, the whole group of statements is not executed,
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-databases-2/indexes-transactions-and-stored-procedures?u=76281980&t=93)** and anything that's partially done is rolled back. This helps to guarantee that an action isn't only partially applied, leaving the database in an inconsistent state. That means you'll need to think carefully about a whole action that you're planning to do, what steps need to be taken, what business rules need to be applied, and which pieces of data are affected. Creating a transaction in different DBMS tools will be done differently depending on the software, but across the different types of tools, the concept is the same. Many DBMS tools offer a feature called stored procedures. A stored procedure is kind of like a program you write that's stored on the database server. It contains a series of commands that you can then reference and use when you interact with the database. Using a stored procedure, you can avoid having to write out a long or detailed query if it's something you use frequently. Stored procedures are also used to provide safe or approved ways of dealing with sensitive data. Instead of allowing access to data directly from manually entered SQL, which could contain errors, a database administrator often provides a set of stored procedures designed to take certain input, run transactions, and verify a result of a query. In many cases, access to certain sensitive data or whole tables is only allowed through stored procedures rather than directly. As you learn more about your tools and develop your use case, be sure to keep indexes, transactions, and stored procedures in mind to help improve the speed, integrity, and consistency of your database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **Env Vars:** dbms (3), sql (2)
> **CLI Commands:** make (2)
> **Analogies:** just like (1), for example (1)
> **Tools:** command prompt (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - indexes (1)

#### [Access control, compliance, and injection](https://www.linkedin.com/learning/programming-foundations-databases-2/access-control-compliance-and-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/access-control-compliance-and-injection?u=76281980&t=0)** - We haven't talked about security for our simple database. But this is an important aspect of [Databases](../../Skills/Software%20Development/Databases.md), especially when they contain personally identifiable information or other sensitive data. Most [Database Management](../../Topics/Database%20Management.md) systems provide various access control mechanisms, including user accounts and control over whether certain people can access certain tables or even individual columns. In the database we can grant user varying levels of access to hold databases, tables, and even specific actions. We might define the user who can create, read, update, and delete data but who is not allowed to change the schema of the database. And we might create another user who only has read access and who can't modify data stored in the database at all. When you're designing a database and granting access to the database and the data it's important to consider your business requirements. It's also very important to consider any compliance rules you need to follow. Personally identifiable information, or PII, is very strictly regulated in some areas and some industries. HIPAA in the United States and GDPR in Europe are just a few examples of legislation that requires certain kinds of information to be treated, accessed, stored, and removed in very specific ways. And so when you're building your database you'll need to ensure that you're design and methods accommodate requirements that you're subject to. Not following compliance regulations can be a very costly mistake. Even with specific access control there can still be security issues with values we allow a user to enter into the database. Normally we expected a user will enter valid information into a field. But an attacker could try to enter a value that is part of an [SQL](../../Skills/Data%20Science/SQL.md) command to hijack
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-databases-2/access-control-compliance-and-injection?u=76281980&t=95)** the query we think we're running and change how it works. This is called SQL injection. If a user is adding a record and including a FirstName and LastName they could write a value in one of those fields that includes a fragment of code. Depending on how well the app and the database handle injection attacks, the database server might run that piece of code and deliver an unintended result. For example, if we took these fields and passed them onto a SQL query, in the normal case we'd have something that looks like this. But if an attacker wrote some SQL in the LastName field like this the resulting query might end up being changed. Instead of sending us a full name they sent us a piece of SQL that ends the regular command and adds another command that erases the whole customers table. And then to keep the SQL statement valid the attacker adds a comment at the end that keeps the database from trying to use the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the original command. Proper design of access control, best practices for interacting with data, safety features offered by programming languages, and proper processing of data that's entered can all help to secure a database against injection attacks. But hardly a week goes by when we don't hear of a data breach caused by SQL injection. There are automated tools you can run against an app to check for basic injection attacks. But you should always be mindful of security. It's not something you just set and forget. It's easy to procrastinate on security, but security should be part of every step of the design, creation, and ongoing maintenance of your database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (7), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Database Management](../../Topics/Database%20Management.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** sql (7), pii (1), hipaa (1), gdpr (1)
> **Definitions:** is an  (1), is called (1)
> **Analogies:** for example (1)
> **Best Practices:** you should always (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - we (1)

#### [Software options](https://www.linkedin.com/learning/programming-foundations-databases-2/software-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/software-options?u=76281980&t=0)** - When planning, building, and using a database, there are many [Database Management](../../Topics/Database%20Management.md) systems to choose from. Common relational database management systems include [Microsoft SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md), Oracle, dBase, FileMaker Pro, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Access, [MySQL](../../Skills/Software%20Development/MySQL.md), MariaDB, SAP HANA, and SQLite. some systems offer a whole graphical environment to build, manage, and edit the database. Others provide a text console where you'll write [SQL](../../Skills/Data%20Science/SQL.md) directly to work with the database. While the interfaces and sets of features differ, the general principles are the same. Some of these tools are intended for small solutions with just a few users, and these are called desktop [Databases](../../Skills/Software%20Development/Databases.md). Usually, but not always, this type of database is hosted on a workstation rather than a dedicated server. Access is an example of this, and FileMaker Pro is often used in this context, as well, though it can scale to larger installations, too. Other systems are intended to be used by huge numbers of people and run on infrastructure that can service millions of interactions simultaneously. These are often called enterprise database management systems. Examples include [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md), Oracle, and SAP HANA. They can be used for smaller workloads, too, but the licensing and infrastructure costs for some of them may not be worth it for small projects. Other solutions like MariaDB and MySQL may be the right fit for many different applications, especially for [Prototyping](../../Skills/Software%20Development/Prototyping.md) an idea or providing access to dozens, hundreds, or thousands of clients. DBMS tools can generally be used for most scenarios, though in certain domains and for certain uses, some are better suited than others.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-databases-2/software-options?u=76281980&t=93)** There are tools that are specialized for the extreme ends of the size scale, as well. SQLite is a great choice for very small databases like you might use for storing user preferences on a mobile device. When you get into the realm of [Big Data](../../Skills/Data%20Science/Big%20Data.md), that term which itself has kind of a fuzzy definition, sometimes you need to move beyond traditional relational database management systems to processing frameworks like [Hadoop](../../Skills/Data%20Science/Hadoop.md) or Spark. Depending on your needs, you might be able to choose the RDBMS you'll work with yourself, or if you're working in an organization, they may already have an RDBMS in place, and you'll need to learn how to work with that particular tool. while [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) are extremely common, not all data can be stored in relations or tables. To accommodate this need, there are other kinds of databases which store information in other ways. A popular term for this kind of database is [NoSQL](../../Skills/Software%20Development/NoSQL.md), which stands for Not Only SQL, and NoSQL databases can be anything, from just a collection of [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) to key-value pairs to graphs like the [Facebook](../../Glossary/Service/Facebook.md) social graph to objects, geographic data points, and streams of information, like posts and comments on social media websites.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Database Management](../../Topics/Database%20Management.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (4), [MySQL](../../Skills/Software%20Development/MySQL.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (2)
> **Env Vars:** sql (4), sap (2), hana (2), rdbms (2), dbms (1)
> **Definitions:** is an  (1), is a  (1), stands for (1)
> **CLI Commands:** mysql (2)
> **Code Identifiers:** dbase (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - when (1)


### Glossaries

[↑ Back to Table of Contents](#table-of-contents)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/programming-foundations-databases-2/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-databases-2/next-steps?u=76281980&t=0)** - In this course, we've planned, diagrammed, normalized created and queried a basic database. We've taken a look at the fundamentals of [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md), and learned about the principles that apply regardless of what specific relational [Database Management](../../Topics/Database%20Management.md) system you're using. Now that you've had a high level look at the concepts, it's time to take some further steps in your learning journey. It's a good idea to learn more about [SQL](../../Skills/Data%20Science/SQL.md), the language we use to query most relational databases. Take a look at my course called [Learning SQL Programming](Learning%20SQL%20Programming.md) for a hands on introduction to the language. It's also a good idea to learn about the RDBMS you'll be using. Or to take some time to look at software options if you're just getting started. Here at [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, we offer courses about [Microsoft SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md), [MySQL](../../Skills/Software%20Development/MySQL.md), Oracle, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Access, FileMaker Pro and other tools as well. Throughout many of our programming courses, you'll find information about using [Databases](../../Skills/Software%20Development/Databases.md) within your own app. And we offer other courses that dig into the concepts behind relational databases even more. With the foundations from this course, you're ready to explore further. See you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Database Management](../../Topics/Database%20Management.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Microsoft SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1)
> **Env Vars:** sql (3), rdbms (1)
> **CLI Commands:** mysql (1), find (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - in (1)


## Instructor

- [Scott Simpson](../../Instructors/Software%20Development/Scott%20Simpson.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/databases-pf-784293)

## Skills Covered

- Databases
- Database Development
- Programming Foundations

## Path Context

### In [Explore a Career in Database Development](../../Paths/Database%20Management/Learning%20Paths/Explore%20a%20Career%20in%20Database%20Development.md)
**1 of 5** | [Quick Start Guide to SQL](../Database%20Management/Quick%20Start%20Guide%20to%20SQL.md) →

### In [Become a Programmer- Foundations](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20Programmer-%20Foundations.md)
← [Programming Foundations- Design Patterns](Programming%20Foundations-%20Design%20Patterns.md) | **7 of 12** | [Programming Foundations- Memory, Pointers, and Garbage Collection](Programming%20Foundations-%20Memory%2C%20Pointers%2C%20and%20Garbage%20Collection.md) →

### In [Become a Software Developer](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20Software%20Developer.md)
← [Programming Foundations Fundamentals](Programming%20Foundations%20Fundamentals.md) | **2 of 12** | [Succeeding in Web Development- Full Stack and Front End](Succeeding%20in%20Web%20Development-%20Full%20Stack%20and%20Front%20End.md) →

## Appears In

- [Explore a Career in Database Development](../../Paths/Database%20Management/Learning%20Paths/Explore%20a%20Career%20in%20Database%20Development.md)
- [Become a Programmer- Foundations](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20Programmer-%20Foundations.md)
- [Become a Software Developer](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20Software%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [Advanced Python- Working with Databases](Advanced%20Python-%20Working%20with%20Databases.md) — Databases
- [Advanced Python- Practical Database Examples](Advanced%20Python-%20Practical%20Database%20Examples.md) — Database Development
- [Complete Guide to C Programming Foundations](../Hardware/Complete%20Guide%20to%20C%20Programming%20Foundations.md) — Programming Foundations
- [Programming Foundations- Web Security](Programming%20Foundations-%20Web%20Security.md) — Programming Foundations
- [Introduction to Couchbase](../Database%20Management/Introduction%20to%20Couchbase.md) — Database Development

---

[↑ Back to top](#)