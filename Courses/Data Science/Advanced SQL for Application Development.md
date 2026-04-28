---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-sql-for-application-development
url: "https://www.linkedin.com/learning/advanced-sql-for-application-development"
duration_minutes: 127
duration: 2h 7m
level: Advanced
updated: 9/5/2025
learners: 73284
skills:
  - Application Development
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGOJN0DZ3MYUg/learning-public-crop_675_1200/B4EZhoPUiKGUAY-/0/1754095504223?e=2147483647&amp;v=beta&amp;t=OyTlRSSvAcV8E5vTqxNet40ZBA3Sp7bDG4PLuWHkxj8"
linkedin_topic: Data Science
learning_paths:
  - '[[Master SQL Development]]'
prev_courses:
  - '[[Advanced SQL for Query Tuning and Performance Optimization]]'
next_courses:
  - '[[Advanced SQL for Data Scientists]]'
path_nav: '[{"path":"Master SQL Development","position":6,"total":8,"prev":"Advanced SQL for Query Tuning and Performance Optimization","next":"Advanced SQL for Data Scientists"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/application-development
  - skill/sql
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Advanced%20SQL%20for%20Application%20Development.md)

![Advanced SQL for Application Development](https://media.licdn.com/dms/image/v2/D4E0DAQGOJN0DZ3MYUg/learning-public-crop_675_1200/B4EZhoPUiKGUAY-/0/1754095504223?e=2147483647&amp;v=beta&amp;t=OyTlRSSvAcV8E5vTqxNet40ZBA3Sp7bDG4PLuWHkxj8)

# Advanced SQL for Application Development

> Many applications require a relational database. But poorly designed data architecture and poorly written SQL can result in subpar performance, unreliable services, and difficulty scaling. This course includes hands-on examples and lessons that show how to build scalable and resilient databases to support any application. Learn how to write optimized SQL for transaction processing, use indexes to 

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development) | 2h 7m | Advanced | 73K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. Advanced Querying with Select** (6 videos)
- **3. 2. Indexing Tables** (8 videos)
- **4. 3. Object-Relational Mapping (ORM)** (7 videos)
- **5. 4. Designing for Scalability** (8 videos)
- **6. 5. Designing for Reliability** (7 videos)
- **7. 6. Designing for Maintainability** (6 videos)
- **8. Conclusion** (1 videos)

### 1. Introduction

#### Getting started with SQL for application developers
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/getting-started-with-sql-for-application-developers-23751431?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/getting-started-with-sql-for-application-developers-23751431?u=76281980&t=0)** - [Narrator] While developers have many tools available to help with application development, ranging from integrated development environments to AI-based code generators, it's important to understand fundamental design principles and patterns.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/getting-started-with-sql-for-application-developers-23751431?u=76281980&t=13)** Hello, my name is Dan Sullivan.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-application-development/getting-started-with-sql-for-application-developers-23751431?u=76281980&t=15)** Welcome to Advanced SQL for Application Development, where you'll learn how to design, implement, and maintain efficient and scalable database applications.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/getting-started-with-sql-for-application-developers-23751431?u=76281980&t=25)** In this course, we'll review key design concepts, see how to implement them, and then use hands-on challenge exercises to reinforce our learning.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-application-development/getting-started-with-sql-for-application-developers-23751431?u=76281980&t=35)** Developing efficient, highly available scalable database applications is challenging, but you can learn best practices here.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-application-development/getting-started-with-sql-for-application-developers-23751431?u=76281980&t=42)** So let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** sql (1)
> **Speakers:** - [narrator] (1)

#### Tour of CoderPad
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/tour-of-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/tour-of-coderpad?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course table of contents.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/tour-of-coderpad?u=76281980&t=7)** Each challenge includes instructions and a code editor you can use to create and test your own solution to the challenge.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/tour-of-coderpad?u=76281980&t=14)** These challenges are hosted by CoderPad and they appear in the same area of the course page where you watch the course videos.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/tour-of-coderpad?u=76281980&t=21)** We recommend using a desktop browser for the best experience with code challenges, but you can use the LinkedIn Learning mobile app if you prefer.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/tour-of-coderpad?u=76281980&t=30)** The code challenge has three areas.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-for-application-development/tour-of-coderpad?u=76281980&t=32)** Instructions are in the top left.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-application-development/tour-of-coderpad?u=76281980&t=34)** A console for output is in the bottom left, and the code for your answer is on the right.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-application-development/tour-of-coderpad?u=76281980&t=41)** You can use the drag candles such as these and these to adjust the size of the different areas.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/tour-of-coderpad?u=76281980&t=48)** Each challenge has instructions that include a description of the challenge and the challenge's desired results.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-application-development/tour-of-coderpad?u=76281980&t=56)** Now you create your answer in the code editor.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/tour-of-coderpad?u=76281980&t=59)** So for example, I can type SELECT maxprice.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-for-application-development/tour-of-coderpad?u=76281980&t=66)** When you click test code, you'll see a message indicating whether your code returned a correct result and a text-based version of the return data.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/tour-of-coderpad?u=76281980&t=76)** If your answer doesn't create a correct result, you'll see a message telling you that the code is incorrect and showing you the data that was returned.
>
> **[1:24](https://www.linkedin.com/learning/advanced-sql-for-application-development/tour-of-coderpad?u=76281980&t=84)** So for example, if instead of max, I use min and use test my code, we'll see an incorrect output result.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-for-application-development/tour-of-coderpad?u=76281980&t=96)** Now, when you finish each code challenge, return to the course table of contents and click the tech solution to see my answer to the challenge.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), such as (1)
> **SQL:** select (1)
> **Env Vars:** select (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Advanced Querying with Select

#### Designing an ecommerce application database
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=0)** - [Narrator] Let's take a look at Designing an Ecommerce Application Database.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=5)** Now we're going to be working with a relational database, so the question that we first have to address is what's the design of our database?
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=12)** Well, when we approach a database application, there are a number of questions we need to answer.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=18)** Specifically, we need to know what data needs to be collected and stored.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=23)** We need to understand how that data's going to be used.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=26)** For example, will we be looking up specific records or will we be looking up a number of records of costs, of range, of time, maybe across different types of products, and then doing some kind of aggregate calculation, like averaging a sales price.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=39)** We also need to know how much data will be stored and how fast it will grow.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=44)** Now, often times transactional databases, like the kind we're designing here, are used to support an interactive application, for example, with end users making purchases, but the data that is stored in that database, is useful for other things, especially business intelligence or analytics kind of operations.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=64)** In that case, the data's often exported and stored in a data warehouse or a data mart.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=69)** Now there's some interesting design questions around data marts and data warehouses, but we're not going to get into those.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=75)** Those are outside the scope of this course.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=78)** So when we talk about how much data will be stored, how fast it will grow, we're talking about just the data that we're going to store in this particular transaction processing database.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=87)** And we don't want to forget about security.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=89)** We're going to be collecting a lot of data and so we want to make sure we understand who needs access to that and who could be a particular employee in your company or it could be a customer looking up their own data or it could be another application or service acting on someone's behalf.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=106)** So access controls around data is another important topic you want to keep in mind when you design relational databases.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=113)** Now for our purposes, we're going to work with a very simple data model.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=116)** And the model that we're working with has customers and customers are people who make purchases and when they make purchases we want to be able to track those individual instances of purchases.
>
> **[2:08](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=128)** So we have a table called orders, and an order can contain multiple products.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=133)** So I might purchase three or four different items.
>
> **[2:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=136)** Well each of those items is represented as a product, and a product can be purchased many times over.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=143)** So we need a table to keep track of that intersection of products and orders.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=148)** And in our case, we're calling that table the product orders table.
>
> **[2:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=151)** Now there's one more thing I want to point out in this diagram, and that is the 1:M you see on three of the arrows.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=159)** That indicates that there is a one to many relationship.
>
> **[2:43](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=163)** In our case, we have customers and one customer can have many orders, and each of those orders can have many different product orders.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=171)** And remember, product orders is where we track information about particular products being included on orders, and then of course we also have the product table and one product, say a desk chair, could be in many different product orders.
>
> **[3:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=184)** So what we have here is called a logical model, shows a very high level conceptual description.
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=189)** Let's jump over to another tool called pgAdmin and take a look at a physical model.
>
> **[3:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=196)** Now what we have here again is pgAdmin and this is a graphical user interface for the Postgres database.
>
> **[3:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=203)** We'll be using Postgres in this course, but you could also use any other relational database like mySQL, Microsoft SQL server, Mariadb, Oracle, and the basic principles all apply, there may be some slight difference in SQL syntax, but for the most part, anything you see here readily translates into those other relational databases.
>
> **[3:45](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=225)** Now, as you'll see here, over on the left, we have a navigation hierarchy and what I have here is an eCommerce database, which I have created already and you'll notice within a database there are a number of things the database needs to keep track of.
>
> **[4:02](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=242)** We're particularly interested in schemas, and a schema is a collection of objects that are all related to a particular function.
>
> **[4:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=249)** And the type of entity within a scheme that we're most interested in right now, are tables.
>
> **[4:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=253)** And here you'll notice we have four tables, customers, orders, product orders, and products, and if I drill down into customers, I'll see that there are some things that are associated with customers, and tables, in general, and those are things like columns and constraints and indexes.
>
> **[4:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=271)** We're going to get into those a little, in a little more detail later.
>
> **[4:35](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=275)** I just want to focus on the columns right now.
>
> **[4:37](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=277)** You'll notice for customers we're keeping track of things like the customer ID, and that's a unique identifier which helps us keep track of customers and we're going to assume that we want to keep track of a customer's first name, last name, their email address, their physical shipping address, and so that's a very small, simplified version of a customer table, but it's sufficient for our purposes.
>
> **[5:01](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=301)** Similarly, for orders we have a very simple model where you're just interested in the order ID, a unique identifier for the order.
>
> **[5:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=310)** We want to keep track of the customer ID and also an order date.
>
> **[5:15](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=315)** For products, again, we have an oversimplified model where we have a unique identifier for the product.
>
> **[5:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=321)** We have a name of the product, and then we have a type, which is sort of like a category, which we'll use later on to be able to show some grouping queries.
>
> **[5:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=329)** And then finally, in the product orders table, this is a combination of an order ID and a product ID.
>
> **[5:35](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=335)** So that uniquely identifies a particular product order and then, within that product order, we want to know the unit price of the particular item that we're selling and how many of those we're selling.
>
> **[5:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=348)** So those are the details in terms of the columns that we're keeping track of.
>
> **[5:52](https://www.linkedin.com/learning/advanced-sql-for-application-development/designing-an-ecommerce-application-database?u=76281980&t=352)** Now we'll spend more time in pgAdmin and do additional things, but I just wanted to give you a sense of how that logical diagram that we looked at on the slide, maps to, what we call the physical model.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (3), let (2), interface (1), function (1), type, (1)
> **Definitions:** is a  (4), is called (1), is an  (1)
> **Code Identifiers:** pgadmin (3), mysql (1), ecommerce (1)
> **CLI Commands:** make (3), mysql (1)
> **Env Vars:** sql (2)
> **Analogies:** for example (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### Creating tables and loading data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=0)** - [Narrator] Now since this is an advanced SQL course I'm making some assumptions about your skill level with SQL.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=6)** I assume that you are familiar with the difference between data definition language statements such as Create Table and data manipulation languages such as Update and Select.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=17)** I also assume you are familiar enough with data bases that you can install for example, Postgres, as I have done here.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=23)** I will include files in the exercise folder which will include information on different data bases and links to downloading for example, Postgres and MySQL.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=34)** Now what I'd like to do in this video is to start with essentially a fresh data base.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=42)** In the previous video I showed what the physical structure of the data base looks like.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=47)** Here, in this video we're actually going to go through the steps to create that.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=51)** So, I'm in PgAdmin right now but I'm going to jump over to my editor and show this file here which is a set of SQL commands for creating the tables in our data base.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=63)** I won't go through all the details here but I assume you are familiar enough with Create Table Statements that you're able to read this and understand what the various commands do.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=72)** So I'm simply going to select all the content and copy it.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=76)** And then come over to the query editor and simply paste it in.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=79)** And I'll just navigate up through this just to give you a sense of the contents.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=85)** And there's a pattern that we follow for all of these tables.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=88)** Which is the first thing we do is to delete the table if it exists.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=92)** And then we create the table giving it a set of attributes.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=96)** And then we specify some additional information like the default table space and who the owner of the table is.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=102)** So, I'm going to execute this query.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=104)** And it looks like that executed correctly.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=108)** And I'm just going to scroll up a little bit just to highlight these messages here that basically the table did not exist.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=116)** That message was generated because of drop table statements such as this.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=121)** So if the table doesn't exist you'll get a notice or a message indicating that there was nothing to delete.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=127)** Okay, now we have our tables created.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=130)** So if we navigate over here to the navigation bar, I'm going to right click and select refresh and then open up the tables.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=139)** And we'll notice we have our four tables here.
>
> **[2:22](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=142)** And they have the columns that we would expect.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=144)** Now we don't have any data in these tables.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=146)** So let's clear our query window and jump back to our editor and copy these commands.
>
> **[2:34](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=154)** Which by the way happen to be called "copy commands".
>
> **[2:37](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=157)** And copy is a command Postgres uses for copying data from an operating system or a file system, CSV file into a table.
>
> **[2:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=168)** So I'm going to simply select and copy those four lines.
>
> **[2:52](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=172)** Paste them here.
>
> **[2:53](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=173)** And the structure of the copy command is such that the term copy is followed by a name of the table and the key word "from" and then the location of a file.
>
> **[3:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=183)** In this case I have four different files.
>
> **[3:05](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=185)** You'll want to update the location of the files to correspond to the directory or the folder where you placed these files which are included in the exercise folder.
>
> **[3:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=194)** And then there's some additional information.
>
> **[3:15](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=195)** For example, I indicate what the delimiter is between columns and whether or not there's a header on the table.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=201)** So, I'm going to execute that.
>
> **[3:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=203)** And it looks like we have executed that command correctly.
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=208)** So, I will again clear the window.
>
> **[3:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=210)** And now I'm going to do a simple select statement.
>
> **[3:32](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=212)** I'll Select * From Customers to show the date here.
>
> **[3:39](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=219)** And you'll see we have about 1,000 rows were returned.
>
> **[3:44](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=224)** And so we get basic fictitious information in here.
>
> **[3:47](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=227)** But those are the steps that are required to upload data into a Postgres data base.
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=233)** Now again if you're using a different data base like MySQL or SQL Server the steps will be slightly different but the concept is basically the same.
>
> **[4:01](https://www.linkedin.com/learning/advanced-sql-for-application-development/creating-tables-and-loading-data?u=76281980&t=241)** You would create the tables using a set of data definition commands and then you would load the table with data using your data base's particular data loading program.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for example (3)
> **Env Vars:** sql (4), csv (1)
> **Code Keywords:** delete (2), this. (1), let (1)
> **CLI Commands:** mysql (2)
> **Definitions:** is a  (2)
> **Cross-References:** previous video (1)
> **UI Navigation:** scroll up (1)
> **Prerequisites:** install (1)

#### Using environment variables for connection parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=0)** - [Instructor] Now that we have a database created and some database loaded, let's spend some time actually working with the data from a programming environment.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=8)** Now we could use an IDE like Pycharm or visual studio, but I'm choosing to use Jupyter notebooks.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=17)** Jupyter notebooks is an interactive programming environment and the reason I'm using it is because it is very easy to see programs developed iteratively and incrementally.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=27)** And so we're going to be working in Python although again, just as what I say applies to different relational databases, not just Postgres, the things that I'm pointing out and showing in Python apply to other languages as well.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=41)** So first thing I'm going to do is show how to work with environment variables, to store connection information.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=49)** And so I'm going to work with Python 3.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=52)** And again, because this is an advanced SQL course, I assume you will be able to install Jupyter without a problem on your own.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=59)** And I will place links to information about installing Jupyter in the exercise folder.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=64)** Now because we're working with a Postgres database.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=68)** One of the first things we're going to want to do is install a library for working with Postgres from Python.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=74)** And in Python to import a library, we use the import command and the library we want to import is called P-S-Y-C-O-P-G-2.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=86)** And we also want to import some operating system commands, and that's because we're going to be working with environment variables.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=95)** So there are two commands, now in Jupyter notebook when you want to actually execute the commands and a block like this, you simply hit Shift + Enter and after you do that, there'll be a number assigned to the block over on the left, that is just an indicator of the sequence of execution of various steps.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=113)** Now, what I want to do is rather than hard code in my username and password for the database into my application code, I want to use environment variables.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=123)** Now, if you're familiar with Linux and bash shell scripts and things like that, oftentimes we set our environment variables in shell scripts that are run on login.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=133)** That's certainly one way to do it.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=134)** And that's a great way to do it.
>
> **[2:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=136)** If you're working in a windows environment, it's slightly different.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=139)** What I'm going to do here is show how to set these environment variables in Python.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=144)** But again, this could be set wherever you normally set your environment variables.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=148)** So to set an environment variable, we use the OS package and we use the environ structure.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=155)** And what we're going to be doing is setting a couple of environment variables.
>
> **[2:38](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=158)** And the first one, we're going to set is username and we're going to set that to our Postgres username, which happens to be Postgres.
>
> **[2:46](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=166)** And then I also want to set a password for that account.
>
> **[2:50](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=170)** And so I'll specify password.
>
> **[2:52](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=172)** Note here I'll just make something up.
>
> **[2:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=175)** And now I just hit Shift + Enter.
>
> **[2:57](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=177)** So I executed those commands.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=179)** And basically what that allows us to do is that actually sets the environment variable.
>
> **[3:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=184)** So for example, I can retrieve now that environment variable by kind of switching the command around, let's say I have a variable called user and it's a constant.
>
> **[3:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=194)** So I'm going to follow the Python convention and capitalize that, and I simply just need to do a lookup into that data structure.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=201)** And now if I actually print out the value of users, I'll see that it's Postgres.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=206)** Now, similarly, I can do the same thing with password and I can save password into a local variable and I can look it up, and I can print out the value of that and I'll see that I have my password.
>
> **[3:42](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=222)** So that's basically how you work with environment variables.
>
> **[3:45](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters?u=76281980&t=225)** So you may decide to set the environment variable in one of your startup scripts, but when you are in Python and you actually want to retrieve the value, you would do it using the steps we've indicated here.

> [!info]- Semantic Content
>
> **CLI Commands:** python (8), make (1)
> **Tools:** jupyter (5), pycharm (1), visual studio (1), bash (1)
> **Code Keywords:** let (2), this, (1)
> **Definitions:** is an  (2), is called (1)
> **Env Vars:** ide (1), sql (1)
> **Prerequisites:** install (2)
> **Versions:** python 3 (1)
> **Analogies:** for example (1)

#### Connecting to a database
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=0)** - [Narrator] Our next step that we're going to go over is how to connect to the database.
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=3)** Now, offscreen I reset the password in the environment variable to the actual password, but the username hasn't changed, so I'll just show that again.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=11)** So user and let's look at the length of the password.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=14)** Just so you know it is actually set.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=17)** And you'll see I have a 10 character password on that.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=20)** Now the next step is to create a connection.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=25)** A connection is basically a data structure which allows us to communicate with the database backend from our application.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=32)** Now, to do that in Python, we specify the variable name.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=36)** Typically "C-O-N-N" is a good generic variable name.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=40)** And we specify the Python library for connecting which is "P-S-Y-C-O-P-G-2", and we call the connect function.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=49)** The connect function's going to return a connection.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=52)** And we simply have to specify a database.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=55)** And the name of our database is "E-C-O-M-M".
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=59)** And our username is actually stored in our variable user, and our password, which we retrieved from the environment variable, is stored in a variable called password.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=71)** And we need to specify a port.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=75)** We're going to use the default postgres port 5433.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=80)** That will look on port 5433 on the localhost.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=85)** When we hit return, we now have created a variable called "C-O-N-N".
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=91)** So let's take a look at that.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=92)** You'll notice it's a connection object.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=94)** And you'll notice here it has some of the same information that we passed in.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=98)** The username is postgres, the password is blanked out, our database name is ecomm, and we're working with the default port 5433.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=106)** Now, once we have a connection, then we want to be able to use something called a cursor.
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=112)** A cursor is created on a connection.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=115)** A cursor is like a logical pointer to the results of a query.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=121)** We can create a cursor and call it cursor.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=124)** We're going to create that on the connection, and we're going to create it by calling the cursor function.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=130)** Now, let's take a look at the cursor object or the cursor variable.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=134)** We'll notice, again, this is an object.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-for-application-development/connecting-to-a-database?u=76281980&t=137)** We're going to be manipulating cursors and to some degree, connections in the following videos as we execute queries and do some manipulation with our data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (3), return, (1)
> **Ports:** port 5433 (3)
> **CLI Commands:** python (2)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [narrator] (1)

#### Parameterizing SELECT statements
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=0)** - [Instructor] Now I'm going to pick up where I left off in the previous video.
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=3)** Now one thing I'm going to do is, I want to remove that global variable called cursor that I just created, so I'll just delete it.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=10)** And I'm going to do that because I'm going to create a local variable called cursor.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=14)** Now that wouldn't conflict, but I want to avoid any potential confusion.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=18)** So one of the things I would like to do, is I want to be able to execute a query.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=23)** And I want to be able to parameterize that query.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=25)** So let's take a look at how we do that.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=27)** And the task we're going to do is to create a query that returns a list of all products of a particular type.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=34)** Now as you may recall from our discussion of the data model, in our products table, we have a product ID attribute, a product name, and a product type.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=44)** And we use product type for grouping things together.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=47)** So let's take advantage of having that type information.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=50)** Now, the first thing I'm going to do is create a function to get products by type and I'm going to call it, get Products By Type and I'm going to pass in a database connection and a product type.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=63)** And the first thing I'm going to do is create a local variable with a cursor in it and I'm going to use the connection that was just passed in, and now I have a cursor.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=73)** And I'm going to correct a typo here.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=75)** And I'm going to specify a SQL string that I want to execute and that string is SELECT star FROM products WHERE, product type is equal to, and now I'm going to specify a parameter.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=94)** And to do that in Python, I use the percent s because this is a string parameter.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=100)** Now, I could have typed in the word oven, or some other type, but I want to be able to change this around by passing in a different product types to this function.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=109)** And now that I have my string and I have a cursor, I can specify for that cursor, I want to execute this particular string, or this particular SQL statement.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=121)** And that is the statement that is in SQL string.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=124)** And I also have to pass in a list of parameters.
>
> **[2:08](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=128)** Now, in this case, we have just one, which is product type.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=131)** So we'll pass that in, now we want to return from this function, the list of all of the items, or all of the products that match that selection criteria.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=141)** And to do that, I'm going to reference my cursor and call the fetchall function.
>
> **[2:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=147)** Now, fetch all, you want to be careful with, it's safe for me to use this here because I'm only going to be returning about 20 rows, but if you have very large datasets, you probably want to be careful around fetch all because you could easily run out of memory or just spend a lot more time fetching data that you don't actually need.
>
> **[2:43](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=163)** But for now, we're not going to worry about that because we're dealing with small amounts of data.
>
> **[2:47](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=167)** So I'll just hit Shift to enter to define that function.
>
> **[2:49](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=169)** Now I'm going to call it and I'm going to save the results of this function into a variable called all ovens.
>
> **[2:56](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=176)** And I'm going to call get Product By Type and I'm going to pass in my database connection that I created earlier and I'm going to pass in the product type I'm interested in, which in this case is oven.
>
> **[3:08](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=188)** Now, if I look at the variable, all ovens, I'll see I'd get a list, I think it's about 20, let's do a length, all ovens, 20 different products.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=201)** So this is an example of how we can execute a SQL statement from within our programming environment.
>
> **[3:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/parameterizing-select-statements?u=76281980&t=207)** And also how we can parameterize that, so that we can treat these select statements almost like they were functions, which allow us to pass parameters in.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), pass (6), type. (4), let (3), delete (1)
> **Env Vars:** sql (4), select (1), where (1)
> **SQL:** select (1), where (1)
> **Definitions:** is a  (1), is an  (1)
> **Warnings:** be careful (2)
> **CLI Commands:** python (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### Avoiding N+1 queries
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=0)** - Now starting again from where we left off, one of the things we often have to do, is look up data from more than one table.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=7)** Now there are a couple of different ways of doing that.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=9)** Now a common way, that people who are maybe new to SQL will do, is to fetch information from one table, save that information in a variable, loop over it, and then go get information from the second table.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=24)** Let's see how that would work using our all ovens.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=27)** So suppose we have our list of all ovens and now let's say we want to get information from product orders, to see what orders include ovens.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=36)** One way to do that, is to essentially just loop over the, all the items in all ovens.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=42)** So let's see how that would look.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=43)** First of all, I'm going to create a cursor conn.cursor and I'm going to have a local variable here called fetch, all count, which I'm going to use just to print out, to show how many times we're going to the database.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=58)** And now what I want to do is iterate over my list, all ovens.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=62)** So I'll say, for oven, in all ovens.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=67)** The first thing I need to do, is pull off the first element of the list, because that, is a product ID.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=74)** So I'm going to put that in a variable called, oven ID and I'm going to look that up, by looking at the oven variable, and getting the first item in the list.
>
> **[1:24](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=84)** And Python uses zero based list indexing, so I'm going to use zero as my parameter.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=90)** Now, I need to specify a SQL string here too, because what I want to do, is query product orders.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=97)** So I can say select, star, from product orders, where, product ID is equal to, and now I'm going to pass in a parameter just as we did before by using percent S.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=110)** And I'm going to have my cursor, execute that particular SQL string.
>
> **[1:58](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=118)** And I'm going to pass in my list of parameters, which again is just one parameter.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=122)** And that's, in this case it's oven ID.
>
> **[2:05](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=125)** And now, I want to go and fetch that particular order.
>
> **[2:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=129)** I'll call this variable oven order, for holding that results, and I'll do a cursor.fetchall to get the results.
>
> **[2:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=138)** And, I don't need this so much for the query, this is more for my own interest in keeping track of counts.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=143)** I'm going to increment fetchall count, and I'll just increment that by one.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=150)** And now, I want to print out the results of that.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=153)** So I'm going to print oven order and also going to specify a new line character at the end.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=159)** And I'll also, print fetch all count and I just executed.
>
> **[2:49](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=169)** And what you'll notice here, is, we are printing out the oven order and sometimes there's a few orders that have multiple ovens and sometimes there aren't.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=179)** And so we have this list here.
>
> **[3:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=180)** We have the orders that we've retrieved.
>
> **[3:02](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=182)** And what you'll notice is, each time that fetchall count is being incremented, that's indicating we're doing another fetch to the database.
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=189)** And that's kind of like going to the store, and picking up one item, going home, dropping it off, going back to the store, pick up your next item, go home, drop it off and so on.
>
> **[3:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=199)** A much better way to do it, whether you're fetching data from a database or getting groceries from the store, is to get all of the items you need at one time, in one trip, rather than going back and forth.
>
> **[3:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=210)** So let's take a look at how to do that.
>
> **[3:32](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=212)** I want to create a function, called kit, product orders, and a product type.
>
> **[3:42](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=222)** I'll create a cursor, again, a local cursor, and I'll base this on the connection that's passed in.
>
> **[3:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=228)** I'm going to create a SQL string that allows me to get data from both tables using a single S SQL statement.
>
> **[3:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=235)** And let me show you how that's done.
>
> **[3:57](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=237)** Basically what we're going to do, is something called a join and specifically, an inner join.
>
> **[4:02](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=242)** So, I am going to create a select statement, and, I want to select all the product orders.
>
> **[4:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=249)** So, I am going to select star, but I need to specify a table.
>
> **[4:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=256)** I don't want to select from everything.
>
> **[4:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=258)** I want to select from product order.
>
> **[4:20](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=260)** So, I'm going to specify an alias P O, and I'm going to say select po.star.
>
> **[4:28](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=268)** And I'm going to continue this on another line.
>
> **[4:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=270)** So I'm going to use a slash and I'm going to select from product orders and now I'm going to specify the alias for this, which is P O.
>
> **[4:44](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=284)** So that's how SQL will interpret, po.star.
>
> **[4:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=288)** That'll assume that PO is referring to the product table.
>
> **[4:51](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=291)** And I'm going to specify an inner join, on products.
>
> **[4:58](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=298)** And I'm going to give that an alias and call that P.
>
> **[5:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=300)** Now what inner joint does, is it looks for rows that have matching identifiers in both tables.
>
> **[5:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=309)** And those identifiers are specified in the on clause.
>
> **[5:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=313)** So for example, in the product order I want to look at the product ID, and in the product table, I also want to look at the product ID.
>
> **[5:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=323)** And I need to specify a where clause, and it's where the product type is equal to whatever product that we're passing in.
>
> **[5:32](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=332)** So I'm going to use percent S.
>
> **[5:34](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=334)** So, let's take a look at this again, before I go any further.
>
> **[5:37](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=337)** So we have a single select statement.
>
> **[5:39](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=339)** Now instead of saying, select from and there's just one table, I'm saying select from a table inner-joining with another table.
>
> **[5:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=348)** And when I do an inner join, I specify the identifiers, or the keys in each table that need to match up.
>
> **[5:56](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=356)** Now with an inter-joined has to be a key.
>
> **[5:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=359)** These key values have to match in both tables, for a row to appear in the inner join.
>
> **[6:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=364)** If either the product order table, or the product table doesn't have a key that corresponds to a key in the other table, then it won't show up in our list.
>
> **[6:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=373)** Now, I want to call cursor.execute, and I'm going to pass in the SQL string.
>
> **[6:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=378)** This is going to look very familiar, and I'm going to pass in my list of parameters, which is prod type.
>
> **[6:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=383)** And I'm simply going to return cursor, fetchhall.
>
> **[6:28](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=388)** And again, fetchhall is safe here because we're dealing with such a small amount of data.
>
> **[6:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=391)** Let's see if we got that correct.
>
> **[6:34](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=394)** And now, let's call get product orders by type.
>
> **[6:44](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=404)** Then, will pass that in our database connection string.
>
> **[6:46](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=406)** And let's get ovens again.
>
> **[6:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=408)** Now what you see here is a single fetch got us all the information that we need.
>
> **[6:52](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=412)** So in general, anytime you're working with multiple tables, you want to avoid and plus one queries.
>
> **[6:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=419)** So don't do one query, get a list stored in memory, and then iterate over that.
>
> **[7:05](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=425)** That's really inefficient.
>
> **[7:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=427)** Relational databases today, are really well optimized, for doing the joint operation.
>
> **[7:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-n-plus-1-queries?u=76281980&t=433)** And they can do it much more efficiently, in the database engine, than we can do in our application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), pass (5), type. (3), function (1), continue (1)
> **Env Vars:** sql (7)
> **Analogies:** kind of like (1), for example (1)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Speakers:** - now (1)


### 3. 2. Indexing Tables

#### Overview of index types
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=0)** - [Instructor] When it comes to developing efficient relational database applications, one of the most important tools we have to work with are indexes.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=9)** So let's take a look at different kinds of indexes that we have available to us.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=14)** So first I want to go over basic idea behind an index.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=19)** An index is a data structure and its purpose is to improve the time or to reduce the time it takes to access data that we're actually interested in.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=28)** You can think of indexes as a set of keys and values, where the key is an attribute of the row that we want to retrieve.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=37)** So that could be a primary key, it could be an attribute like the name in a customer table or the product type in a product table.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=48)** And then there's the value.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=49)** The value, in this case, is a location as to where we can retrieve the data we're interested in.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=55)** Now typically, that means where the location of the row is on a particular data block.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=60)** Now I want to mention I will use terms like data block, or persistent storage.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=65)** Databases often cache data, so even though there may be a read operation, so for example, after referencing an index, I need to go fetch a piece of data, and I might refer to it as fetching it from the disc, or from SSD.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=80)** In fact, the database may actually have stored that in cache so there isn't a need to actually fetch from the disc.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=85)** So I just wanted to point that out.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=87)** When we're looking up data, sometimes that data may already be in memory for us.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=91)** So there's several kinds of indexes.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=93)** Probably the most popular is the B-tree, and this is a type of index that allows for order log and time to find an index entry, so the key values that we're interested in.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=106)** Hash indexes use a hashing function, and so it's a constant time to do a look up to get the value of a particular key that we're looking for.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=115)** Bitmap indexes are particularly useful when dealing with retrieving large volumes of rows, so for example, in a data warehouse application or a business intelligent application.
>
> **[2:06](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=126)** We won't use Bitmap indexes really much for transaction processing system, which is our focus here.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=131)** And then also, some databases like postgres have specialized indexes for things like geolocation indexing.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-index-types?u=76281980&t=139)** Now again, those are an interesting type of index, and I just want to point them out, but we won't be delving into them any further here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1), function (1), for. (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Env Vars:** ssd (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### Using B-tree indexes and range scans
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980&t=0)** - [Instructor] Let's take a look at B-tree or balanced tree indexes.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980&t=4)** These are widely used in the kinds of applications that we have been discussing.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980&t=9)** As the name implies, the B-tree index is a tree data structure with a root, and then several nodes below that.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980&t=17)** The tree is balanced because the root node is the index value that splits the range of values found in the index column.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980&t=24)** So for example, if an index column had values from one to 100, then the root would be 50 or close to 50 if there wasn't a 50 in the column.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980&t=33)** Each side of the tree has a subtree.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980&t=36)** The top node of the subtree splits the values of the index column so that the values less than the node value are stored to the left branch, and the value is greater than the value of the node are stored in the right.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980&t=49)** This pattern continues at each level of the tree until we reach the bottom.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980&t=54)** Now, in this example, the B-tree has 11 nodes storing the values of the index column of a table with 11 rows.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980&t=63)** B-trees make for efficient lookups, because we can always determine where, in a tree, a node is located by looking at a node value, and branching to the left or right until we find the value of the tree.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980&t=74)** In this example, we're looking for the value 15.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980&t=77)** So we make three comparisons: at 50, 25, and 13 before finding the node with the value 15.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980&t=86)** Once we reach the node we want, we can find a reference to where the corresponding row is stored, such as an address of a data block.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980&t=93)** To summarize, B-trees are the most commonly used type of index.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980&t=98)** It's used when there is a large number of distinct values in a column, this is called high cardinality.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980&t=104)** B-trees also rebalance as needed to keep the depth of the tree about the same for all paths.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980&t=110)** This prevents a lopsided tree that would be fast to search on one side and slower on the other.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-b-tree-indexes-and-range-scans?u=76281980&t=116)** Anytime you look up a value in a B-tree index, you can expect it to take the time that is proportional to the log of the number of nodes in the tree.

> [!info]- Semantic Content
>
> **CLI Commands:** node (8), make (2), find (2)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for example (1), such as (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Using hash indexes and equality operations
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-hash-indexes-and-equality-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-hash-indexes-and-equality-operations?u=76281980&t=0)** - [Narrator] The next type of index we'll discuss is the hash index.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-hash-indexes-and-equality-operations?u=76281980&t=4)** The basis of this kind of index is a function called a hash function.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-hash-indexes-and-equality-operations?u=76281980&t=8)** Hash functions take an arbitrary length data and map it to a fixed-size value.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-hash-indexes-and-equality-operations?u=76281980&t=14)** Hash values are designed so that different inputs produce different outputs.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-hash-indexes-and-equality-operations?u=76281980&t=19)** Now, occasionally, quite rarely, two different inputs will produce the same output, but that's highly unlikely.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-hash-indexes-and-equality-operations?u=76281980&t=26)** In general, even a slight change in the input will produce different hash values.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-hash-indexes-and-equality-operations?u=76281980&t=30)** The has value that is created can vary in size, depending on which hash algorithm is used.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-hash-indexes-and-equality-operations?u=76281980&t=36)** You'll notice in this example that similar input strings can produce widely different hash values.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-hash-indexes-and-equality-operations?u=76281980&t=43)** Adding a single letter or changing the case of a letter is sufficient to lead to a new value, and as we can see, similar inputs can have vastly different outputs.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-hash-indexes-and-equality-operations?u=76281980&t=53)** Here are a few things to keep in mind about hash indexes.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-hash-indexes-and-equality-operations?u=76281980&t=56)** They're only used for equality comparisons.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-hash-indexes-and-equality-operations?u=76281980&t=59)** Hash values won't help you if you want to filter on a range of values.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-hash-indexes-and-equality-operations?u=76281980&t=63)** Som recent improvements in Postgres have led to hash indexes that can be smaller than B-tree indexes, but still just as fast or faster, so this can be an advantage when you want to keep an entire hash index in memory.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-hash-indexes-and-equality-operations?u=76281980&t=76)** Also, because they're fast or as fast as B-tree indexes, the choice between hash indexes and B-tree, if given the choice, come down to the advantage of being able to store an entire index in memory, which is possible with some hash indexes.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### Covering indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/covering-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/covering-indexes?u=76281980&t=0)** - [Narrator] Now we're going to turn our attention to something called a covering index.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/covering-indexes?u=76281980&t=4)** Now a covering index is not a new type, like a B-tree or a hash index.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-application-development/covering-indexes?u=76281980&t=8)** Instead, a covering index is one that is created based on the values that are stored in the index.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/covering-indexes?u=76281980&t=16)** Now, let's think about what happens when we use an index.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/covering-indexes?u=76281980&t=19)** Basically it starts when the query plan builder determines which indexes to use to satisfy a query.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/covering-indexes?u=76281980&t=25)** The locations of the rows are retrieved from the index, and then the rows are retrieved either from cache or persistent storage and then we apply filtering, joining, functions, etc., and then we return the results, so that's the basic structure of an execution plan.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-for-application-development/covering-indexes?u=76281980&t=43)** Now, a covering index is an index in which all columns referenced in a query are in that index, and what that means is there's no need to retrieve data from the table and that saves a seek operation.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-for-application-development/covering-indexes?u=76281980&t=58)** So what we have is a series of steps in which we can remove one of the most expensive steps of that operation which is the retrieving in the rows from the cache or the persistent storage.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/covering-indexes?u=76281980&t=69)** Let's take a look at our customer table.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-application-development/covering-indexes?u=76281980&t=71)** Here we have our customer information and it includes things like name and address.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-application-development/covering-indexes?u=76281980&t=75)** Now let's suppose we have a query that looks up by last name and state or province.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/covering-indexes?u=76281980&t=81)** We can create an index, and I'll call it IDX, L name, state, province, and I'll create that index on the customer table, and I will be using a B-tree index, and the index is basically the last name and the state or province.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-application-development/covering-indexes?u=76281980&t=95)** What that allows us to do is to have queries such as this where I'm selecting only the last name and the state or province and I'm filtering on a province and I have a particular list here.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-for-application-development/covering-indexes?u=76281980&t=106)** I'm looking at all states on the western coast of the continental United States.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-for-application-development/covering-indexes?u=76281980&t=111)** So again, a covering index is one that has all of the values that are referenced in a query, so covering indexes are relative to particular queries, and again, the key factor is that all values that are referenced in the select statement are available in the index and that saves us that extra operation of going from the index to actually seeking and looking up and retrieving data from rows on persistent disk or occasionally cache.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type, (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** idx (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Indexes and bulk data loading
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980&t=0)** - [Instructor] Now we're going to shift gears and talk a little bit about some issues you might run into, in production.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980&t=5)** The first one I want to talk about, is bulk loading and indexing.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980&t=9)** Now, when we add data to a table, the data is actually inserted into the table and then, any indexes are updated.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980&t=18)** So, as we add a row to the table, we add an entry to the index.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980&t=22)** You can imagine the sequence, add a row to the table, add an entry to the index.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980&t=27)** Now, that kind of back and forth operation works well, when you're doing transaction processing, so you might have many different processes running to the database, because you have, for example, different customers placing different orders at different times.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980&t=39)** So this kind of back and forth and writing to the table and the index, in the same kind of operation, it makes a lot of sense.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980&t=47)** Now, when you're bulk loading data, for example, if you're loading up a bunch of data, maybe some historical records, or some new customer data, what we find is, we're inserting a large number of rows at once, and each time the row is inserted, the index is also updated.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980&t=63)** So we're alternating back and forth between the table, updating and the index updating.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980&t=69)** So let's look, an alternate way to do that though is to focus just on the table.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980&t=73)** So for example, in a bulk operation we would want to insert a row followed by another row, followed by another row and so on until we had the table full.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980&t=83)** And then, we just create the index, we immediately build the index rather than alternating back and forth.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980&t=91)** Now, the way we do this, is that we drop any indexes before we bulk load any data.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980&t=97)** Then we insert the data.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980&t=99)** Now, oftentimes databases, will have a bulk loading program and these are highly optimized.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980&t=106)** And after we insert the data, then we create the index.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980&t=110)** And this operation is much more efficient because that bulk loading program I referenced, can take advantage of the fact that it knows, for example, it doesn't have to update indexes, and so it can be much faster in terms of writing data to the desk.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/indexes-and-bulk-data-loading?u=76281980&t=124)** So, if you ever find that you're working with a production database and you need to do a bulk load and you want to do it as quickly as possible, drop all the indexes first, do the bulk load, and then recreate the indexes.

> [!info]- Semantic Content
>
> **Analogies:** for example (4), imagine (1)
> **CLI Commands:** find (2)
> **Code Keywords:** let (1), this, (1)
> **Speakers:** - [instructor] (1)

#### Avoiding index locks
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=0)** - [Instructor] Now, another issue we can run into in production that's related to indexing, is something called an index Lock.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=7)** Now, an index Lock can occur when we need to rebuild an index.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=12)** Now you may wonder why we'd ever need to rebuild and index.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=15)** Well in theory we shouldn't, however in practice sometimes there are errors in the index, like an index may become corrupted, because of a software bug or something that causes the data in the index to become invalid.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=29)** And so it needs to be corrected and the most effective and reliable way to do that, is by rebuilding an index.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=36)** But even if it's not an error, you may learn things about the, sort of the characteristics about how your database is being used, and you may decide after some period of time that you want to adjust maybe some of the storage parameters, in your create index clause.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=52)** Well if that's the case you going to need to rebuild the index.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=55)** Also there are some unusual access patterns that can lead to some, almost like fragmentation in the pages that are stored in b-trees.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=63)** And so what we may end up with is a balanced tree index that has many pages with very few entries.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=71)** So to correct with that, we need to rebuild the index.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=75)** So those are times we might need to rebuild an index.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=78)** But we need to keep in mind that during a rebuild on an index, PostgreSQL for example, will lock the table for Writes.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=85)** So that means any Insert, Update or Delete is not going to finish, it's going to be blocked.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=90)** Now PostgreSQL does allow reads.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=93)** So for example, you can execute Select statements during an index rebuild.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=97)** Those won't be blocked.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=98)** So that pattern may be okay if you're working in a business intelligence application, such as a data warehousing or data Mart kind of environment, where there's bulk data loading going on, say off hours, and then users are running reports during the day.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=115)** That kind of Select only read-only kind of operation wouldn't be impacted, but we're primarily talking about transaction processing applications, like the e-commerce application, where you might be reading about customer data or, and then writing new customer data at the same time, different processes doing both of those things.
>
> **[2:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=136)** So we can't count on having read-only requests.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=141)** And so we need to be able to figure out a way of rebuilding our index so that we don't get this index lock error while we're in production.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=150)** So the way to do that is to use the Create Index Concurrently Command and what this does it's a relatively new feature in PostgreSQL that allows you to build a new index on a table without blocking rights.
>
> **[2:43](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=163)** And it does this by basically building the new index while using the old index and then immediately switches over once the index is built.
>
> **[2:52](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=172)** So again, this is sort of an issue that you may run into in production.
>
> **[2:56](https://www.linkedin.com/learning/advanced-sql-for-application-development/avoiding-index-locks?u=76281980&t=176)** So if you do need to rebuild an index in production, consider using the Create Index Concurrently Command.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), such as (1)
> **Code Keywords:** delete (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Define a B-tree and a hash index
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-define-a-b-tree-and-a-hash-index?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-define-a-b-tree-and-a-hash-index?u=76281980&t=0)** (chill music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-define-a-b-tree-and-a-hash-index?u=76281980&t=5)** - [Instructor] Now that concludes our discussion of indexes, so it's time for a challenge.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-define-a-b-tree-and-a-hash-index?u=76281980&t=10)** This is a two-parter.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-define-a-b-tree-and-a-hash-index?u=76281980&t=12)** First, create a b-tree index on the last and first names in the customers table.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-define-a-b-tree-and-a-hash-index?u=76281980&t=17)** And then also create a hash index on the product name in the products table.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-define-a-b-tree-and-a-hash-index?u=76281980&t=22)** Now we haven't seen an example of how to create a hash index, but you can either use the postgres documentation, or take a guess, based on the structure of how you create a b-tree index.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-define-a-b-tree-and-a-hash-index?u=76281980&t=34)** We'll have the solution in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (chill music) (1)

#### Solution: Defining B-tree and hash indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-defining-b-tree-and-hash-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-defining-b-tree-and-hash-indexes?u=76281980&t=0)** - [Instructor] Okay, the first part of the solution to the indexing challenge is to sue the CREATE INDEX command, followed by a name of an index, and then the term ON, followed by the name of the table, in this case, customers.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-defining-b-tree-and-hash-indexes?u=76281980&t=18)** And then we have a USING clause, and we'd say, USING B-tree, because we want this to be a B-tree index.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-defining-b-tree-and-hash-indexes?u=76281980&t=23)** And then we specify a list of the attributes that we want in the index.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-defining-b-tree-and-hash-indexes?u=76281980&t=28)** In this case, it's last name and first name.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-defining-b-tree-and-hash-indexes?u=76281980&t=30)** Now, not surprisingly, creating a hash index is similar.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-defining-b-tree-and-hash-indexes?u=76281980&t=35)** The solution there is again to use the CREATE INDEX command, specifying a name of the index, and then the ON clause, in this case it would be ON products, and then the USING clause, this cause we would be using hash, and again, followed by the list of attributes, but we only have one attribute that we're indexing in this case and that's product name.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-defining-b-tree-and-hash-indexes?u=76281980&t=54)** So that's the solution to the index challenge.

> [!info]- Semantic Content
>
> **Env Vars:** using (3), create (2), index (2)
> **Code Keywords:** case, (2)
> **SQL:** index (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. 3. Object-Relational Mapping (ORM)

#### Overview of object-relational mapping
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-object-relational-mapping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-object-relational-mapping?u=76281980&t=0)** - [Narrator] Now in this section of the course, we're going to take a look at object relational mapping, and we'll start with a brief overview.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-object-relational-mapping?u=76281980&t=6)** Now when we talk about relational databases and object-oriented models, we're really talking about two different ways or two different models for representing data, specifically entities.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-object-relational-mapping?u=76281980&t=17)** Now, relational databases, they model entities using an ordered set of attributes.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-object-relational-mapping?u=76281980&t=22)** Now, we typically call those rows and the formal name is tuples, but in general it's safe to think of 'em as just like rows that are organized into collections and we call these collections tables.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-object-relational-mapping?u=76281980&t=33)** Now, object-oriented models, on the other hand, are organized around two concepts called class and instance.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-object-relational-mapping?u=76281980&t=40)** Now, a class or classes describe the structure of an object, and an instance, or instances, those are actual objects that store data about a particular entity, so these are some key terms you want to keep in mind when you're thinking about object-relational mappings.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-object-relational-mapping?u=76281980&t=56)** Now, there are definitely similarities across these models.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-object-relational-mapping?u=76281980&t=60)** So, for example, both kinds of models are used to represent entities.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-object-relational-mapping?u=76281980&t=64)** In a relational model, an entity is described by a row, which has attributes.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-object-relational-mapping?u=76281980&t=69)** In the object-oriented models, an entity is described by an instance and an instance has instance variables, so that's some of the basic concepts that we want to keep in mind as we work through this idea of object relational mapping.

> [!info]- Semantic Content
>
> **Analogies:** just like (1), for example (1)
> **Warnings:** keep in mind (2)
> **Speakers:** - [narrator] (1)

#### Introduction to SQLAlchemy
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=0)** - Now we're going to take a look at a particular Object relational mapping platform or ORM.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=6)** And this one is called SQLAlchemy.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=7)** SQLAlchemy is a Python SQL toolkit and it's designed to map between objects and relations.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=15)** Now, basically the way we often think about it is that tables, or more specifically relations, because it could include views for example.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=22)** Those tables are mapped to classes.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=24)** And SQLAlchemy is designed to perform many of the low-level tasks associated with mapping from a class to SQL statements.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=32)** But SQLAlchemy also allows developers to use SQL statements so you can explicitly write a SQL statement and use that as well when you're using SQLAlchemy.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=44)** The reason we can do this is because SQLAlchemy has two basic components.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=48)** One is called Core and that does the basic database operations.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=52)** And then, there is the ORM component and that's the part that does the mapping between object and relational models.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=59)** Now, SQLAlchemy provides functions that do several kinds of high-level operations like connecting to a database or declaring a mapping which is basically a specification of how you map rows in a table to a particular instances.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=76)** There are functions for creating sessions as well as, for updating, adding, and deleting data.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=81)** And of course, you can also query data using SQLAlchemy.
>
> **[1:24](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=84)** And one thing that's important when you're working with transaction processing systems, is the ability to perform commits and rollbacks.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=91)** And that's also supported with SQLAlchemy.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=93)** So, some things to keep in mind about SQLAlchemy is that it's built on the industry standard DBAPI.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=99)** So, it's very easy to work with different databases.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=103)** And SQLAlchemy allows you to work in an object-oriented fashion and then generates SQL for you.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=110)** So, it does the mapping, but literal mapping in terms of mapping object statements into SQL statements which can execute and actually return the data or operate on the data as you specify.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=124)** And one of the nice benefits of this is that it abstracts away database-specific implementation details.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=131)** So, for example, if you are writing an application, and you want to be able to easily port your application to use either ISQL or a postgreSQL backend, then using SQlAlchemy can actually make that easier because you don't have to worry about implementing maybe a mySQL-specific SQL statement in your application.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=153)** You'll let SQLAlchemy do the mapping from your object structure to whatever specific SQL statement is required for the backend you're using.
>
> **[2:42](https://www.linkedin.com/learning/advanced-sql-for-application-development/introduction-to-sqlalchemy?u=76281980&t=162)** So, that's one of the big advantages of using an object relational mapper is that in addition to allowing you to work in your object... In addition to allowing you to work in your object modeling paradigm, which you're maybe doing across your application, it also abstracts away some of the database specifics so you can more easily move your application and use it with different backends.

> [!info]- Semantic Content
>
> **Env Vars:** sql (8), orm (2), dbapi (1), isql (1)
> **CLI Commands:** python (1), make (1), mysql (1)
> **Definitions:** is called (2), is a  (1)
> **Code Identifiers:** postgresql (1), mysql (1)
> **Analogies:** for example (2)
> **Code Keywords:** let (1)
> **Documentation:** specification (1)
> **Warnings:** keep in mind (1)

#### Installing SQLAlchemy
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980&t=0)** - [Instructor] Let's install SQLAlchemy.
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980&t=3)** Now I've opened a terminal window on my Mac, so I have a command line available to me.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980&t=8)** So we are going to use PIP, which is a Python package installer, and I'm going to say PIP install and then give it the name of the package I want to install, or library is simply called SQLAlchemy.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980&t=21)** So I will say, PIP install SQLAlchemy and hit Return.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980&t=25)** And there'll be some information about which version is being downloaded.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980&t=29)** And it says here that we have successfully installed SQLAlchemy version 2.0.27.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980&t=35)** So let's just verify that.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980&t=36)** So I'm going to type Python.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980&t=39)** Python or Python 3 depending on how it's installed locally on your device.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980&t=43)** So we have Python, and I will just say import SQLAlchemy, which again is just the name of the package.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980&t=50)** And it's the same name we use when we did PIP install.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980&t=53)** And I'll import SQLAlchemy.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980&t=55)** And this should come up with no errors, which it does.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980&t=57)** And just to verify we're working with the correct version, I'm just going to type sqlalchemy.__version, followed by another set of double underscores.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980&t=67)** And that should print out the version 2.0.27, which is matches what we installed.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980&t=73)** So we're in good shape, we are ready to go.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980&t=74)** So I'm just going to exit out of here.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-application-development/installing-sqlalchemy-23752413?u=76281980&t=77)** And next, we'll start working with SQLAlchemy.

> [!info]- Semantic Content
>
> **CLI Commands:** python (5), pip (4)
> **Versions:** version 2 (2), 0.27 (2), python 3 (1)
> **Prerequisites:** install (5)
> **Env Vars:** pip (4)
> **Code Keywords:** let (2), return. (1)
> **Tools:** terminal (1), command line (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Query with SQLAlchemy
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=0)** - [Instructor] Hey, in this video we're going to take a look at what it's like to actually work with SQLAlchemy to query some of our tables.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=8)** And in particular actually we'll just query one.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=9)** We're going to take a look at working with the products table.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=12)** So the first thing I want to do is import the libraries that we're going to need because we are working with Pythons.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=18)** So we'll import some drivers here.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=20)** First of all we'll import a driver for working with the PostgreSQL database and we'll use the same one we've used before and I'm also storing username and password in environment variables.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=30)** So I'm going to get the operating system package as well so I can look those up.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=35)** And then I'm going to get a few things from SQLAlchemy.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=37)** So rather than import all of SQLAlchemy, I'm going to import just the stuff that I need.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=45)** And the first thing I'm going to do is import the create engine function and create engine allows us to basically make a connection to our backend database.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=55)** And we're also going to import some things that allow us to map different column attributes to object attributes.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=64)** So from SQLAlchemy, I'm also going to import column, string and integer.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=76)** And we'll see how that's used in a moment.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=79)** Now I also need to import from SQLAlchemy some code that allows me to make declarations about how classes should be created and that is in the SQLAlchemy external declarative package.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=97)** And from there I'm going to import declarative base.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=103)** And the last thing I'm going to need from SQLAlchemy, is from the object relational mapper module.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=110)** I'm going to import the session maker, which allows us to actually make that connection back to that engine that we created or we'll be creating.
>
> **[2:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=120)** So we'll just execute that, now.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=122)** So I have my libraries imported.
>
> **[2:05](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=125)** So first thing I want to do is define two variables user.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=132)** And that will be the value that I've defined in an environment variable called username.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=140)** And I'm also going to look up password, which is also in an environment variable.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=146)** And just to double check, I'm just going to print user.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=150)** Yep.
>
> **[2:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=151)** That's what we expected.
>
> **[2:32](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=152)** So, we're good to go there.
>
> **[2:34](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=154)** Okay.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=155)** Now what I want to do, is I want to basically create a connection and a session to my Postgres database.
>
> **[2:43](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=163)** So I'm going to need a connection string which specifies things like the username, password, port number, things like that.
>
> **[2:50](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=170)** So let's create a variable for that string and we'll call it db conn for connection, db conn string.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=179)** And now I'm just going to type in the value.
>
> **[3:02](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=182)** So first of all with SQLAlchemy, when we specify a DB connection string, we need to tell it what kind of database we're working with.
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=190)** So we're working with Postgres, so specify that.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=193)** And we also want to specify the driver we're using.
>
> **[3:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=196)** In this case it's the one we imported and the syntax is that that should follow with a colon and two slashes.
>
> **[3:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=205)** And then we want to specify the username.
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=208)** So we have that in a variable.
>
> **[3:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=209)** So we'll put that in.
>
> **[3:32](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=212)** And then we want to use a colon delimiter and then specify the password.
>
> **[3:40](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=220)** And then we want to specify the basically the network location and the port.
>
> **[3:45](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=225)** And we're using a local Postgres database.
>
> **[3:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=228)** So I can say local host.
>
> **[3:51](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=231)** And the port I'm using is 5433, so I'll specify that and I use a slash and then I specify the database name.
>
> **[3:58](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=238)** In this case it's econ.
>
> **[4:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=240)** Okay, double check syntax looks correct.
>
> **[4:02](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=242)** Okay, so that's our database connection string.
>
> **[4:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=244)** Now what I want to do next is create a variable, that basically represents the database engine.
>
> **[4:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=250)** So I'll just call it engine and I'll call create engine and I'll pass in our DB connection or DB constrain.
>
> **[4:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=259)** Now we have a data structure which represents the backend database.
>
> **[4:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=263)** So I want to make a session.
>
> **[4:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=265)** So to do that I create a session variable and I call the functions session maker and I pass in the engine.
>
> **[4:34](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=274)** Now the way SQLAlchemy works is once we have created this object, this session object, we actually need to treat that as a function and call that.
>
> **[4:44](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=284)** And that will actually create the session, the functional session that we're working with.
>
> **[4:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=288)** So we'll have another variable called session and that's going to be the value that is returned by invoking that session we just created.
>
> **[4:57](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=297)** There.
>
> **[4:58](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=298)** Now, so we do have a connection to our database.
>
> **[5:02](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=302)** We have a session, so now we can start essentially making queries back and forth, but before we do that we want to define a class that represents or mirrors or is analogous to the tables we're going to be working with.
>
> **[5:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=316)** So to do that, the first thing I need to do before creating a SQLAlchemy class is I've got to sort of get the base class that SQLAlchemy provides.
>
> **[5:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=327)** To do that, I'm going to create a new variable called base and I'm going to call the function declarative base.
>
> **[5:34](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=334)** And that returns the base class that I can work with.
>
> **[5:38](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=338)** Now I can go ahead and create a class called product just based on the base.
>
> **[5:46](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=346)** And now I'm going to specify some attributes.
>
> **[5:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=348)** First of all, I want to specify table name and for that we're going to use products.
>
> **[5:54](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=354)** Now we want to specify instance variables that will correspond to column names.
>
> **[5:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=359)** So we're going to need a product ID and that's of type column.
>
> **[6:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=363)** Now remember we imported column up above and along with column we also imported integer.
>
> **[6:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=369)** So that basically tells SQLAlchemy what the data type of the column we're dealing with is.
>
> **[6:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=376)** Now product I use...D is also a primary key, so we want to specify that and then there are two other columns we're interested in product name that's also a column, but instead of an integer it's a string.
>
> **[6:33](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=393)** Similarly, product type Is a column of type string.
>
> **[6:39](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=399)** So now we have created a class called product and now we can use product to actually query the session that we just created.
>
> **[6:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=408)** And to do that let's create a variable called products and that's basically going to be an iterable and we're going to call the session variable.
>
> **[6:57](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=417)** And we're going to use a query function and we're going to query the product table by using the product class that we just created.
>
> **[7:05](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=425)** Now if we just print out products just to see what it is, what we'll see is that it is a data structure which represents a SQLAlchemy query.
>
> **[7:15](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=435)** Now, because it's an iterable we can say something like for product in products print.
>
> **[7:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=446)** Let's print out the product's name.
>
> **[7:28](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=448)** So product and then the attribute we're looking for is product name.
>
> **[7:36](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=456)** Let's print that out and what you see here is we're getting the list of all of the product names that are in our product table.
>
> **[7:44](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=464)** So I just want to point out here, this is a very Pythonic way of getting data out of the table.
>
> **[7:51](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=471)** So we are using a class and then we're using operators on that class or methods on that class.
>
> **[7:58](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=478)** In this case the query.
>
> **[7:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=479)** And then we're getting results back that it's in an iterable and so then we can do things like iterate over that using the four statement.
>
> **[8:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=487)** Now one of the things I want to show you is that in addition to querying, you know just the bulk whole table, you can do things like filter that's analogous to using a where clause.
>
> **[8:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=499)** So if we wanted to do that, let's take a look at how we do that.
>
> **[8:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=503)** Let's redefine products.
>
> **[8:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=505)** And now instead of getting all of the products, I want to query my session and the product using the product class, but I want to filter based on the product type.
>
> **[8:40](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=520)** And so to do that I'm going to specify that I want to filter the product class using product type.
>
> **[8:50](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=530)** And in this case let's look for just the type of appliance called a fryer.
>
> **[8:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=535)** And because that's an iterable I can say something like for product in products and I can simply print out the product name.
>
> **[9:06](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=546)** And what we see here is we've returned just the products which are of type fryer.
>
> **[9:12](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=552)** So what we can see here is that for SQL constructs like a select statement or a where clause, there is a corresponding way of doing that with classes or with functions and there are other functions that can be applied.
>
> **[9:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=569)** So for example like aggregate functions in SQL have parallels in SQLAlchemy, which you can use as well.
>
> **[9:36](https://www.linkedin.com/learning/advanced-sql-for-application-development/query-with-sqlalchemy?u=76281980&t=576)** But I believe we've covered the purpose intended here, which is to kind of give you a flavor of how you can work with relational databases in a more object oriented Pythonic way if you choose to.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (4), pass (2), type. (2), module (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (4)
> **Analogies:** it's like (1), analogous to (1), for example (1)
> **Env Vars:** sql (2)
> **Speakers:** - [instructor] (1)

#### Limitations of ORM and cautionary advice
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/limitations-of-orm-and-cautionary-advice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/limitations-of-orm-and-cautionary-advice?u=76281980&t=0)** - [Lecturer] Now Object Relational Mapping systems work really well when you have relatively straightforward, not too complicated data models and you really want to work in a more object oriented fashion and keep your application code consistent.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/limitations-of-orm-and-cautionary-advice?u=76281980&t=14)** So you're not switching say between an ORM, oriented development model and a more SQL relational specific.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/limitations-of-orm-and-cautionary-advice?u=76281980&t=21)** Now that said, there are however limitations of ORMs that you should keep in mind when deciding if you want to use them.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/limitations-of-orm-and-cautionary-advice?u=76281980&t=27)** Now, there are several times where an ORM may not be a good fit.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/limitations-of-orm-and-cautionary-advice?u=76281980&t=31)** For example, when you're working with a complex data model that might require a lot of different joints, or if the data model is becoming more complex over time, then the complexity of the code that ORM has to generate will become more complex, and you may be risking some either performance issues or other issues that make using an ORM less of a good fit than just using SQL directly.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-for-application-development/limitations-of-orm-and-cautionary-advice?u=76281980&t=58)** Also, if you have any kind of operations where you're doing like cross-database transactions, if you're doing anything that requires a two-phase commit, that may not be a good fit for an ORM.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/limitations-of-orm-and-cautionary-advice?u=76281980&t=70)** Again, you may want to sort of look into the details and see if that might be a better fit for just hand coding with SQL.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/limitations-of-orm-and-cautionary-advice?u=76281980&t=76)** Now, in a similar case, if you need some kind of fine-grained transaction control, say over multiple SQL statements, and you might have say, particularly complex rollback logic or something like that, then again, you might want to just work with SQL directly.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/limitations-of-orm-and-cautionary-advice?u=76281980&t=91)** If you find yourself, for example, wanting to pass enhanced to the query plan builder, then that's another indication that it's probably better to use a more SQL oriented approach.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-for-application-development/limitations-of-orm-and-cautionary-advice?u=76281980&t=100)** And then also in the case of some institutions that may be highly regulated, like a financial institution or a government agency may have specific security requirements that preclude you from using an ORM.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-for-application-development/limitations-of-orm-and-cautionary-advice?u=76281980&t=113)** So in that case, of course, we want to be in compliance.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-for-application-development/limitations-of-orm-and-cautionary-advice?u=76281980&t=116)** So, that would be a reason not to use an ORM.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/limitations-of-orm-and-cautionary-advice?u=76281980&t=119)** But in general, if you find that the ORM is not a good fit, that's not a problem because you can still use database drivers and create SQL statements directly and work with the database that way.

> [!info]- Semantic Content
>
> **Env Vars:** orm (8), sql (7)
> **Code Keywords:** case, (2), require (1), pass (1)
> **CLI Commands:** find (2), make (1)
> **Analogies:** for example (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [lecturer] (1)

#### Challenge: Create an ORM model
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-create-an-orm-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-create-an-orm-model?u=76281980&t=0)** (chill music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-create-an-orm-model?u=76281980&t=5)** - [Instructor] Here's a challenge to test your understanding of SQLAlchemy.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-create-an-orm-model?u=76281980&t=8)** I'd like you to define a class using SQLAlchemy that corresponds to a suppliers table.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-create-an-orm-model?u=76281980&t=14)** Now we'll keep this simple.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-create-an-orm-model?u=76281980&t=15)** The suppliers table will have four columns, a supplier ID, a supplier name, a supplier region, and a supplier level.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-create-an-orm-model?u=76281980&t=23)** Now the supplier ID and supplier level, those are of type integer.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-create-an-orm-model?u=76281980&t=27)** The supplier name and the supplier region are variable character strings and also you should know that the supplier ID is the primary key.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (chill music) (1)

#### Solution: Create an ORM model
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-create-an-orm-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-create-an-orm-model?u=76281980&t=5)** - [Narrator] Now, the solution to the challenge of creating a supplier class is shown here.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-create-an-orm-model?u=76281980&t=11)** It's a very simple pattern.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-create-an-orm-model?u=76281980&t=13)** We are going to build a class and we're going to build it off the base class which we have defined using the declarative statement we had created earlier.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-create-an-orm-model?u=76281980&t=24)** Now, we always need to specify a table name, and the table name has two underscores as a prefix and as a suffix.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-create-an-orm-model?u=76281980&t=31)** So we specify __tablename__ as suppliers.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-create-an-orm-model?u=76281980&t=33)** The supplier_id is an integer, so we specify an Integer, and since it's the primary key we pass in the primary_key Boolean and specify True.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-create-an-orm-model?u=76281980&t=42)** The supplier_name and supplier_region are both strings so we specify Columns of type String.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-create-an-orm-model?u=76281980&t=48)** And then finally, the supplier_level is an integer so we specify a Column of type Integer.

> [!info]- Semantic Content
>
> **Code Identifiers:** supplier_id (1), primary_key (1), supplier_name (1), supplier_region (1), supplier_level (1)
> **Code Keywords:** pass (1), finally, (1)
> **Definitions:** is an  (2)
> **Speakers:** - [narrator] (1)


### 5. 4. Designing for Scalability

#### Overview of partitioning
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=0)** - [Narrator] As developers using relational databases for their applications, one thing we need to watch out for is how the growth in the size of our data impacts our application performance.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=12)** The reason is, is that we add more and more data, the latency or the time required to execute a query can increase.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=20)** One of the ways we can deal with that is to use a technique called partitioning.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=25)** There are two kinds of partitioning.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=26)** One is called horizontal partitioning.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=29)** Not surprisingly, the other's called vertical.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=31)** We'll get to that one in a minute.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=33)** With horizontal partitioning, the basic idea is that when we have really large tables it can be difficult to query those tables efficiently.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=42)** One of the things we can do is break those large tables into chunks.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=47)** We call those chunks partitions.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=50)** With horizontal partitionings, in each chunk we keep a subset of rows.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=56)** What this allows us to do is basically treat each partition as if it were a separate table.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=62)** But the logic around our application code does not have to be as complex as if we had actually implemented a bunch of separate tables.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=70)** What are the benefits of horizontal partitioning?
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=73)** Probably the biggest is that it allows us to limit the scans we have to do to a subset of the partitions.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=80)** So rather than looking at, for example, all the rows in the table, we can look at just some of the rows.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=86)** We can also implement indexes at the partition level.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=90)** Those are called local indexes and there could be one index for each partition rather than having just a single global index.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=99)** This makes for more efficient adding and deleting of data, as well as for more efficient querying of data.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=106)** You'll see horizontal partitioning often used in data warehouses.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=110)** For example, you might want to partition on time and that's because we often query on time and we often delete data based on time, and we load data based on time.
>
> **[2:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=120)** For example, we might load sales figures from last night or last week and we might be more interested in querying, say comparing, this quarter's sales to same quarter last year.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=130)** So, very time oriented.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=132)** Also time series data, like Internet of Things or monitoring data that is collecting, say, performance metrics.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=139)** Oftentimes with time series data we're more likely to be interested in the latest data.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=144)** So, we want to have access to the latest data.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=146)** We still look at maybe the historical data or the older data, but more often than not, we're not as interested in specific details about a particular row in a time series from a week ago.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=159)** But we might be interested in averages and totals, say, for an hour or a day.
>
> **[2:44](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=164)** Then also there are times, depending on the business and the domain that you're working in, there might be a natural partitioning.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=171)** For example, if you're a retailer you might want to group sales data by different regions or by different stores.
>
> **[2:57](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=177)** If you're a data scientist or a business analyst, you might want to look at data by a product category.
>
> **[3:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=183)** For example, home appliances versus clothing versus automotive.
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=190)** That kind of grouping falls out naturally based on the subject area that you're working with.
>
> **[3:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=196)** As I mentioned, the second kind of partitioning is called vertical partitioning.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=201)** Here, the idea is that we separate groups of columns into multiple tables.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=206)** The reason we do this is because we often times find that some attributes or some columns are queried frequently together.
>
> **[3:34](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=214)** For example, a name, address, city, state or province, and postal code might be frequently queried together.
>
> **[3:42](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=222)** So, we want to keep those together.
>
> **[3:44](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=224)** But there may be a lot of other attributes that are being kept in a particular row that aren't necessarily used all at one time.
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=233)** That's where we get the idea of vertical partitioning.
>
> **[3:56](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=236)** One of the things that you want to keep in mind about vertical partitioning, is that we use the same primary key in all tables.
>
> **[4:01](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=241)** So, just as if the columns were all kept in a single table and you could look up all columns using one primary key, with vertical partitioning you can still look up all columns using a single primary key.
>
> **[4:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=256)** It's just that we happen to store some of those columns in different tables.
>
> **[4:20](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=260)** There are benefits to vertical partitioning, as well.
>
> **[4:24](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=264)** One of them is that we can increase the number of rows that we can store in a single data block.
>
> **[4:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=270)** A data block is that logical data structure at the persistence storage level.
>
> **[4:35](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=275)** So, when you have an I/O operation and you read a chunk of data, it's going to be read in a block size.
>
> **[4:40](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=280)** Whatever the block size is for that persistent storage device.
>
> **[4:44](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=284)** Because we're storing fewer columns, when we go and grab a block of data we're actually going to get more rows of those frequently used columns in one block.
>
> **[4:54](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=294)** That's one of the advantages.
>
> **[4:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=295)** Another is that we have global indexes for each partition.
>
> **[4:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=299)** This is a little different from the horizontal partitioning where we want to keep our indexes small by having fewer rows.
>
> **[5:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=307)** Here we're keeping our indexes smaller by having fewer columns, but we're using global indexes instead of local indexes.
>
> **[5:15](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=315)** This allows us to reduce the amount I/O we're performing.
>
> **[5:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=319)** Again, a lot of this has to do with fact that we're getting more rows, or more relevant data, in a single data block or I/O operation.
>
> **[5:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=327)** You may have heard of columnar data storage.
>
> **[5:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=330)** Here the idea is very similar.
>
> **[5:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=331)** It's that the data is stored in data blocks based on columns rather than rows.
>
> **[5:38](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=338)** Oftentimes, this is used in analytic databases like Google BigQuery, which is based on the Dremel model.
>
> **[5:44](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=344)** Also some other data warehouse oriented databases can use a columnar format or columnar data storage.
>
> **[5:53](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=353)** Again, you can use vertical partitioning in data warehouses.
>
> **[5:56](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=356)** So, you can group on similarly used attributes.
>
> **[6:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=360)** When we have many attributes, for example, like in a product catalog, there may be some attributes that are associated with just appliances and some that are associated with clothing.
>
> **[6:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=369)** So you may want to partition those off into different tables using vertical partitioning.
>
> **[6:15](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=375)** Also in data analytics, there may be statistics on subsets of attributes that you want to keep together.
>
> **[6:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=381)** Also, if you're familiar with data analysis and statistics, you might have heard a phrase called factor analysis.
>
> **[6:28](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=388)** That's basically a technique for identifying attributes in a data set that are most informative.
>
> **[6:35](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=395)** That give you the most information in terms of discriminating or classifying.
>
> **[6:40](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=400)** That give you more information for categorizing or classifying particular rows.
>
> **[6:47](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=407)** With vertical partitioning, we implement those as separate tables rather than as a single table with partitioning logic.
>
> **[6:53](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=413)** What that allows you to do is there's no partitioning-specific definitions that are required.
>
> **[6:58](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=418)** But as we will see, that is the case, there is partitioning-specific definitions that are required when you use horizontal partitioning.
>
> **[7:05](https://www.linkedin.com/learning/advanced-sql-for-application-development/overview-of-partitioning?u=76281980&t=425)** With vertical partitioning, we're just using straight create table statements.

> [!info]- Semantic Content
>
> **Analogies:** for example (7)
> **Definitions:** is called (2), is a  (1)
> **Code Keywords:** delete (1), case, (1)
> **Warnings:** watch out (1), keep in mind (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### Range partitioning
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=0)** - [Instructor] There are a few different kinds of horizontal partitioning or different ways that we can come up with how we decide on how to group rows.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=8)** The first one we'll look at is called partitioning by range.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=11)** Now, partitioning by range, as I'd said, is a type of horizontal partitioning, and the basic idea is that we create these partitions using non-overlapping keys.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=22)** So in this example, I'm showing how we can partition based on month and year.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=27)** And that's a common thing.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=29)** Partitioning by date is often used, for example, in data warehousing.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=33)** Similarly, you can partition based on date in IoT or time series data, although you may actually have even more fine grain partitions if you have a lot of data, say, coming in at the minute or hour level.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=44)** You can also range partitioning for numeric ranges.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=48)** So anything that has, say, an integer ID, and has a min and max value.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=52)** That's often a good candidate for using as a criteria for setting up your range partitions.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=58)** And alphabetic ranges too, because of course you have a well-defined sort order, so you can partition using alphabetic range as well.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=65)** So some key concepts to keep in mind is that we need something called a partition key, and that determines which partition is used for a particular row.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=73)** Now, a partition key doesn't have to be primary key.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=77)** Partition key is basically something in addition to the other keys and attributes that we define when we create a partition table, in addition to defining keys, and indexes, and attributes, and things like that.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=91)** We also identify one of the columns, or set of columns, as a partition key, and that's the column that has the data we use, which determines where a particular row goes in terms of which partition it goes into.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=108)** Now, partitions have bounds, so they have max values and min values, and that allows us to determine which partition should hold a particular row.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=116)** Each partition can have its own indexes, its own constraints, sometimes its own set of default values.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=123)** That really depends on the particular relational database management system you're using, but in general, it's helpful to keep that in mind as you're designing other table features like indexes and constraints.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=134)** You want to keep in mind the particular features that are provided for in the relational database that you're using.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=141)** So here's an internet of things, of IoT, example.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=144)** So this is really simple.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=146)** We're going to assume that we have some kind of sensors out in the field and the environment that are sending in data, and the data includes a location ID, a date at which some measurement is being taken, and let's say it returns the average temperature and average relative humidity for a particular day at a particular location, and we want to be able to partition by measurement date.
>
> **[2:49](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=169)** So this is an example of how you would specify a create table definition in Postgres, and basically, in addition to the standard create table statement, we have a clause that states partition by range, and then we specify measure date, 'cause that's our partition key.
>
> **[3:05](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=185)** Now, in Postgres, there's a second step we need to do, which is basically we create the tables for each of the partitions, and we do that by using the create table statement, and then we specify a name for the table, which is actually the name of the partition, and specify that that table is a partition of, and then we refer to the parent table.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=206)** In this case, in the first line, specifying I'm going to create a table called iot_measurement_wk1_2019, and I'm specifying that it's a partition of iot_measurement.
>
> **[3:37](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=217)** Then I also specify the min and max values, because remember, with a range partition, in addition to having our partition key, we also need to specify a minimum value and a maximum value.
>
> **[3:49](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=229)** So that's what I'm doing here, and I'm specifying dates based on week.
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=233)** So the data for the first week of the year will go into a table called iot_measurement_wk1_2019.
>
> **[3:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=239)** Now, for the second week, so that's anything that has dates from January 8th through January 15th, it's going to go into iot_measurement_wk2_2019.
>
> **[4:12](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=252)** And again, that's as a partition of iot_measurement.
>
> **[4:15](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=255)** Now, I should specify if you're looking closely, you'll notice that the end value in the first partition is the 8th of January, and the start value in the second table is also the 8th of January.
>
> **[4:28](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=268)** Now this is a standard feature, and basically what happens is depending on what kind of database you're using, the end date can be either inclusive or exclusive.
>
> **[4:38](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=278)** That's why you say the same date, even though the value for 2019-01-08 will only land on one of those partitions, and that's again, because these are either inclusive or exclusive, depending on the logic of your particular implementation.
>
> **[4:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=295)** So in terms of when do you want to use partitioning by range, well certainly, if you're working with IoT data, or other times, series data where you're constantly wanting to query the latest data, that's a good use case for partitioning by range.
>
> **[5:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=310)** If you're doing comparative queries, like in often times in data warehousing or business analytics if you want to compare, say, this quarter's sales to the same quarter last year, that's a good use case for partitioning by range as well.
>
> **[5:22](https://www.linkedin.com/learning/advanced-sql-for-application-development/range-partitioning?u=76281980&t=322)** Anytime you want to quickly select by some of numeric identifier, range partitioning can make sense, and then also, if again, like in a data warehouse, if you're doing data operations, like bulk loads, bulk deletes based on periods of time, so for example, if you have a data warehouse and you want to keep three years' worth of data and every week you want to roll off the oldest week, that's another use case where partitioning by range makes a lot of sense.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is called (1), is an  (1)
> **Code Keywords:** let (1), case, (1)
> **Code Identifiers:** iot_measurement (2)
> **Analogies:** for example (2)
> **Warnings:** keep in mind (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### List partitioning
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=0)** - [Tutor] Now let's take a look at partitioning by lists.
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=3)** List partitioning is another type of horizontal partitioning, and like other forms of horizontal partitioning, we're going to use non overlapping keys, and basically the idea here is that we're going to partition on some value, a particular attribute, or some lists of values.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=20)** So here for example, I'm partitioning based on geographic location.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=25)** Now, like other forms of horizontal partitioning, we have a partition key, which determines which partition is used to store a particular row, we have partitioned bounds.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=35)** Now this is a little different from horizontal where we have min and max.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=38)** The partition bounds here are simply the values that we use to determine which partition to use for storing a row, and like partitioning by range, each partition can have its own indexes, constraints and defaults.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=53)** So here we have a basic create table statement, and toward the bottom, you'll notice partition by list.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=59)** So again, we're using a partition by clause, and now instead of specifying range, we're going to specify list, and again, we're specifying the partition key here.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=69)** In this case, its product category.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=71)** The product category, of course, is one of the columns sits in the create table statement.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=76)** Now like range partitioning, when we're using Postgres, we need to specify the definitions for each of the partition.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=83)** Now, here, instead of creating tables and then specifying them with time, for example, a table for week one, week two, week three, I'm specifying tables that are partitions of the product table, and I'm calling them things like product clothing, product electronics, product kitchen.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=100)** So I'm partitioning by category, and the way I specify what categories belong to what partition, is I use a four values in clause.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=108)** So the syntax is a little different from the range partitioning.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=111)** But the idea is basically the same.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=113)** We're specifying the criteria for determining when a row should go in this particular partition, and as you'll notice, in the clothing partition, we have values like casual clothing, business attire.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=124)** In product electronics, we're looking at things like mobile phones and laptops, and so on, and in the kitchen product type category, we're looking at things like blenders and food processors.
>
> **[2:15](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=135)** So when do you want to use partitioning by lists?
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=139)** Basically, when the data kind of logically falls into subgroups.
>
> **[2:22](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=142)** So again, this is often domain specific.
>
> **[2:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=145)** So it depends on the sort of the business logic behind what you're modeling.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=149)** Also, if you often want to query within subgroups, so for example, if you're constantly querying within, say, the product category, if you're constantly looking up just kitchen items, or just clothing items, then that's often a kind of a criteria or good indicator for using partitioning by lists.
>
> **[2:47](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=167)** Also can use partitioning by lists when you don't have sort of a logical time oriented kind of criteria.
>
> **[2:53](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=173)** So you're not frequently orienting querying by time, or you're querying by time, but you're also querying by these logical subgroups.
>
> **[3:01](https://www.linkedin.com/learning/advanced-sql-for-application-development/list-partitioning?u=76281980&t=181)** So that would be another thing to consider when deciding whether or not to use partitioning by list.

> [!info]- Semantic Content
>
> **Analogies:** for example (3)
> **Code Keywords:** let (1), case, (1)
> **Definitions:** is a  (2)
> **Speakers:** - [tutor] (1)

#### Hash partitioning
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=0)** - [Narrator] Another form of partitioning is partitioning by hash and hash partitioning is a type of horizontal partitioning.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=6)** And here the way we decide where to put a row is by taking the partition key and dividing it by some number and then looking at the remainder.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=18)** And then depending on the remainder, we decide which partition to use for storing the particular row.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=25)** So in this example, we have a table that is partitioned into three partitions.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=31)** So we divide the partition key by three and then depending on the remainder, determine whether the partition should go into the petition with remainder zero or remainder one or remainder two.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=43)** Now again, as with other forms of horizontal petitioning, the partition key determines which partition is used to store the data.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=51)** Now the modulus is the number of partitions we're going to use and that's the number we use for our division operation, our modulo division operation.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=60)** Now, not all relational databases support partitioning by hash, but some of the more popular ones like PostgreSQL and Oracle and mySQL do.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=70)** Let's take a look at a web path analysis example.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=73)** And here are the ideas we want to sort of blog information about how our customers are maybe working through our web application or eCommerce site.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=82)** So each time a customer clicks on a URL, we record how long they stayed at that URL and what the sequence of events was.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=91)** So if they clicked through five different things, each click has click sequence integer one through five.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=98)** And what we want to do here is hash or calculate the hash based on the customer interaction ID, which is happens to be our primary key.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=107)** So in the create table statement, we have a partition by clause and we specified the type as hash and we specify our partition key, which in this case is ci id or customer interaction id.
>
> **[2:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=120)** And as with other types of partitioning, we need to specify a table for the partition in PostgreSQL.
>
> **[2:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=129)** So here we're going to create the table for each partition.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=132)** We're going to specify the partition of customer interaction, 'cause that's the parent table.
>
> **[2:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=138)** We're going to indicate a name for each partition and in this case, I'm just numbering them one through five.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=143)** So customer interaction one through five.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=146)** And then for the values clause, we have a four values with and then specify the modulus, which is the number that we're using to divide and then the remainder.
>
> **[2:38](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=158)** So depending on which remainder we get when we divide by five, that will determine which partition will house that particular row.
>
> **[2:46](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=166)** So typically we use partitioning by hash when we want to partition, but the data doesn't have sort of a natural logical grouping say by time or by category of some type.
>
> **[2:57](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=177)** Also partitioning by hash is good when you're just want to make sure your data is evenly distributed across the different partitions.
>
> **[3:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=183)** So that can be useful when you're concerned about say, hot spotting and you're concerned with say like partitioning by time, which is really great for keeping data that is time oriented or close in time together in the database.
>
> **[3:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=198)** However, that creates a lot of IO operations on the same partition at the same time.
>
> **[3:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=203)** So if you want to avoid that kind of thing and you want to distribute your IO operations to different partitions, than hash partitioning is a good option.
>
> **[3:32](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=212)** And some things you want to keep in mind about hash partitioning.
>
> **[3:34](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=214)** It's good when you don't need to work on subgroups of data, for example, dropping a set of data by time because basically it's really easy to drop by time when you partition based on time.
>
> **[3:46](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=226)** But if you partition based on hash, then you'd basically have to go and look through each of the partitions to drop, say something from the last week.
>
> **[3:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=235)** Or if you have a query that requires you to look at all of the partitions, then in that case you're going to be perhaps doing more IO than you would do if you hadn't partitioned by hash and kept all of your data in a single table without partitioning.
>
> **[4:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=249)** So when you use hash partitioning, consider the use cases, both how you're writing the data and how you will be querying the data daily.
>
> **[4:17](https://www.linkedin.com/learning/advanced-sql-for-application-development/hash-partitioning?u=76281980&t=257)** You don't want to be supporting a lot of queries that have to access or query each of the partitions to satisfy a particular select statement.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1), type. (1)
> **CLI Commands:** mysql (1), make (1)
> **Code Identifiers:** mysql (1), ecommerce (1)
> **Env Vars:** url (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### Querying partitioned tables
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/querying-partitioned-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/querying-partitioned-tables?u=76281980&t=0)** - [Narrator] When we use partition tables, we want to keep in mind our partitioning logic when we're writing queries against those tables.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/querying-partitioned-tables?u=76281980&t=7)** We need to keep in mind our partition key.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/querying-partitioned-tables?u=76281980&t=10)** Now again, the partition key determines where a row is stored and so when you write queries, when you write select statements in sequel, you want to be sure to use a partition key or reference the partition key in the where clause whenever possible, so for example, writing a select statement using a partition key might look something as simple as this.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/querying-partitioned-tables?u=76281980&t=31)** So here I have a table called sales history and I want to select where month equals three.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-application-development/querying-partitioned-tables?u=76281980&t=37)** That allows us to focus on the partition where the partition key has a value of three, so if you don't use a partition key in the where clause, then you risk scanning all of the different partitions, which can undermine the utility and the benefits of the using partitioning, so that's why we want to keep in mind our partitioning strategy whenever we are querying a partition table.

> [!info]- Semantic Content
>
> **Warnings:** keep in mind (3)
> **Code Keywords:** this. (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Using read-only replicas
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980&t=0)** - [Narrator] Now another thing we can do to improve our I/O performance is to use something called read-only replicas.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980&t=8)** Basically, the idea is that reading and writing to the same database disks, or SSDs, can create contention.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980&t=16)** So there's only so much I/O a particular device can handle.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980&t=20)** And this is particularly problematic when writing data to the database, because we want to be able to have certain levels of consistency and transaction control.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980&t=30)** When we write data, the database typically locks the rows.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980&t=34)** And that means only one process can write to those rows at a time.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980&t=38)** Now reading does not need to lock rows.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980&t=41)** So we can take advantage of this to make copies of the data.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980&t=46)** And when we use something called replicas, what we're doing is keeping separate copies of the data, but in a single database.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980&t=54)** So we have our primary and our replica.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980&t=57)** And each of these are datasets.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980&t=58)** And what we can do is always write to the primary.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980&t=61)** And when we write to the primary, the database also updates the replica copy.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980&t=66)** And what that allows us to do is it allows us to read from the replica.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980&t=70)** And that reduces the I/O load on the primary.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980&t=74)** So what we're doing is shifting or splitting our write operations, keeping our write operations busy on the primary.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980&t=81)** But we're not taxing that primary device with our read operations.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/using-read-only-replicas?u=76281980&t=85)** So if you're finding that you are having I/O contention, that you need to do both a lot of writing and a lot of reading at the same time, and you're finding that your I/O constrained, that's a time to consider using read-only replicas.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### Challenge: Define a partitioned table
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-define-a-partitioned-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-define-a-partitioned-table?u=76281980&t=0)** (chill music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-define-a-partitioned-table?u=76281980&t=5)** - [Instructor] In this challenge, I'd like you to define a sales history table that's partitioned by month of sale.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-define-a-partitioned-table?u=76281980&t=11)** Now in this example, we're going to assume that months are represented as integers from one to 12.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-define-a-partitioned-table?u=76281980&t=16)** And the set of attributes in this table should include a product ID, a product name, which is a variable character, a product type, which is also a variable character, total units sold, which can be an integer, and then the month of the sale.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-define-a-partitioned-table?u=76281980&t=29)** And again, the month of sale could be an integer.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-define-a-partitioned-table?u=76281980&t=31)** Also, create a primary key using both the month of sale and the product ID.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (chill music) (1)

#### Solution: Defining a partitioned table
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-defining-a-partitioned-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-defining-a-partitioned-table?u=76281980&t=0)** - [Instructor] Here is the solution to the challenge.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-defining-a-partitioned-table?u=76281980&t=7)** So we're going to create a table called sales history and we're going to specify the attributes that I mentioned, product ID, product name, product type, total units sold, and month of sales.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-defining-a-partitioned-table?u=76281980&t=18)** The key things here are that we have the primary key.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-defining-a-partitioned-table?u=76281980&t=21)** And the primary key is defined using the month of sale and product ID, and we're creating a partition by range, so we specify month of sale.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-defining-a-partitioned-table?u=76281980&t=28)** But that's all in the create table statement.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-defining-a-partitioned-table?u=76281980&t=30)** And then, for each of the partitions we create a separate table and specificity it as a partition of sales history.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-defining-a-partitioned-table?u=76281980&t=37)** Now here I'm just showing three months worth of data, but you can see the pattern.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-defining-a-partitioned-table?u=76281980&t=42)** The full solution would include a total of 12 create table statements that are partitions of sales history, but this is an example solution using partitioning by range.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. 5. Designing for Reliability

#### Database errors
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=0)** - [Narrator] An important key to ensuring that our applications are reliable is handling database errors.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=7)** We're probably all familiar with Murphy's Law that whatever can go wrong will go wrong, and let's just take a look at how many different ways things can go wrong in a database application.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=17)** First of all, there can be interface errors and that has to do with interfaces to the database.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=23)** There could be errors within the database itself.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=26)** It could have errors regarding how we work with the data.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=29)** There could be operational errors, integrity errors, especially around how we're handling data and working with constraints.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=37)** There could be some internal error to the RDBMS.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=40)** There could also be programming errors on our part, and we may try to do things that actually aren't supported by that particular database, so let's take a look at each of these in a little more detail.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=50)** Now, here are some examples of interface and database errors.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=54)** A common interface error is that a connection is already closed, so we're trying to make a connection or rephrase, so if we try to execute a query, for example, and we pass in a connection that we've earlier closed we're going to get an interface error.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=67)** Now, we can also have database errors like there could be an exception.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=71)** Something goes wrong on the connection, or the connection may not exist or we do an operation that causes a database trigger to execute and there's some problem there, or there may even be some kind of invalid role specification that we've specified or tried to specify.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=88)** In terms of data and operational errors, some common examples are things like a numeric value out of range or we might specify a date that's in an invalid format.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=98)** Division by zero is one we have to watch out for pretty much any time we're programming and doing any kind of arithmetic operations.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=104)** We may misspell something in our code and try to use an invalid sequel statement name.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=109)** When it comes to integrity and internal errors, some common ones are having a not null violation on a column that hase to have a value, or a foreign key violation if we try to use a key which is not defined as a foreign key in another reference table.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=127)** There might be some kind of transaction that does end correctly or we try to modify some data that's not allowed.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=133)** Now there are also programming errors in a small group called not supported errors.
>
> **[2:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=138)** Programming errors examples include having an invalid schema name or a syntax error in your select statement or other data manipulation language statement, or if you're making a query using a select statement and you're joining two tables and both tables have a column with the same name, you have to be sure to use an alias.
>
> **[2:38](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=158)** If you don't, you'll get an ambiguous column error.
>
> **[2:41](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-errors?u=76281980&t=161)** You may also try to converse between data types and it may not be allowed, and then there's a general feature not supported error that you might run into as well, so as you can see, there are quite a few different ways to generate database errors, and in the next video, we'll take a look at how to handle some of those.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), let (2), pass (1)
> **CLI Commands:** make (1)
> **Env Vars:** rdbms (1)
> **Cross-References:** in the next (1)
> **Documentation:** specification (1)
> **Definitions:** defined as (1)
> **Analogies:** for example (1)
> **Warnings:** watch out (1)

#### Error trapping
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=0)** - [Instructor] So there are many ways things can go wrong with database errors.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=4)** Fortunately the way we handle them is pretty standard.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=7)** So let's walk through an example.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=9)** We're going to make a connection and use an invalid password and we'll see how to trap for that kind of error.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=14)** So the first thing I want to do is import my database connection library and I also am going to be using environment variables, so import the OS package.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=27)** And just to show you that I'm using invalid password, I'm going to set up a couple of environment variables for username and we'll set that to Postgres.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=36)** We'll also have an environment variable for password.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=41)** Instead of using the actual password, I'll just make something up, invalid password, and we'll save that out to the environment variable.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=51)** And let's grab those environment variables and save them in local variables.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=54)** So we'll say user and we'll grab the username environment variable and password.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=68)** Now I could have just assigned the local variables, these values, but I just want to continue to emphasize the idea that we should never put passwords in our application code.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=78)** So we have our username and password set in the environment variable.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=82)** We've grabbed them, put them into a local variable.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=85)** Let's just make sure that actually worked.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=88)** Password yep. A user and now password, yep.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=93)** Okay, great. So we've got that set up correctly.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=96)** Now let's make a connection or try to make a connection to the database and we'll create a connection variable and we'll call our database connection library.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=107)** Actually it's the database driver library and we'll call the connect function and we'll specify our database, which you may recall is called E-com for short for E-commerce.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=119)** And we'll specify the user and that's the value in our user variable and password.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=130)** I'll specify then password variable.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=134)** And I didn't create a local variable or an environment variable for the port, so I'll just specify that.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=139)** But, you know, this were a real production environment I would definitely be doing that.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=143)** So we'll just hard-code it here.
>
> **[2:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=145)** Okay, so we're going to make a connection to E-com and we're going to pass on a username and password.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=150)** We know the password is invalid and we've got our port specifications.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=153)** So let's see what happens when we try and connect.
>
> **[2:36](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=156)** All right, well as we expect we got an error and it's sort of the era we would expect.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=160)** In this case it's an OperationalError and it from the message we can tell that it's the premise is that the password authentication failed.
>
> **[2:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=168)** So how can we handle this so that if this actually happened to one of our users, they wouldn't just crash and get this kind of stack trace?
>
> **[2:58](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=178)** Well, in Python the way to do it is to use something called the try-except block and different programming languages have different variations on this construct, but the idea is always the same, which is basically you have some block of code that you attempt to execute and then if there's an error, there's another block of code you execute.
>
> **[3:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=196)** So that in Python we specify the first block using this term, "try".
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=201)** And so let's put our connection information in here and I'm just going to copy it actually just to avoid any hyping errors on my part.
>
> **[3:32](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=212)** And so we'll try to create a connection and if we get an exception, and the particular exception I want to trap is an OperationalError.
>
> **[3:41](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=221)** So I'm going to specify that particular kind of error.
>
> **[3:47](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=227)** And what this is saying is there could be all kinds of errors that we get, but if it's a particular kind of error, like an OperationalError, such as an invalid password, I want to trap for it.
>
> **[3:58](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=238)** And now I specify my logic.
>
> **[4:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=240)** Well, what do I want to do in response to that error?
>
> **[4:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=243)** I'm going to keep it really simple for this example and just say, I'm going to print out the error message and then I'm going to set the connection or conn local variable to none.
>
> **[4:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=256)** Now let's try and execute this and see what happens.
>
> **[4:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=259)** Now this time I don't get an error dumper or a traceback.
>
> **[4:24](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=264)** Instead I get the simple error message and I print that out.
>
> **[4:28](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=268)** And now if I look at the variable conn I should see nothing, right?
>
> **[4:32](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=272)** It's set to none.
>
> **[4:33](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=273)** So, now this is a very simple sort of exception handling logic.
>
> **[4:39](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=279)** Your production application would probably have more complex logic.
>
> **[4:43](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=283)** For example, you'd probably, you know, set the connection to none and then give the user another chance to enter the password.
>
> **[4:49](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=289)** And again, if it were different kinds of errors, you would have different kinds of logic.
>
> **[4:54](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=294)** So for example, if it was an invalid username or host not found, or there was a timeout on the connection, you could have different kinds of logic.
>
> **[5:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/error-trapping?u=76281980&t=304)** And in the next couple of lessons, we'll look at alternative ways to handle some of the more complicated scenarios.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), continue (1), function (1), pass (1)
> **CLI Commands:** make (6), python (2)
> **Definitions:** is called (1), short for (1), is an  (1), is a  (1)
> **Analogies:** for example (2), such as (1)
> **Prerequisites:** set up (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Database not responding, timeouts, and exponential backoff
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=0)** - Connection errors are a common problem with database applications.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=4)** And one way to deal with them is a technique called exponential backoff.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=7)** So let's take a look at what that is.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=9)** Well, first of all, we want to understand that connection timeouts are due, because databases have limited resources, and those resources can become exhausted.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=19)** So, for example, databases have connection pools.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=22)** If all of the connections in the pool are in use, and there are no other connection available, then trying to make a connection and allocate one of those connection data structures, is going to fail.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=35)** So you basically have to wait until one of those becomes available.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=39)** Now, another possibility is that the database is so busy responding to other things, responding to queries, to database ingests, or some other operation, that it's not getting back, or handling a particular operation on a connection.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=54)** And so, the client side, your application on your server, actually has some kind of timeout, and it decides, okay, I've waited long enough, there's an error, and it triggers an error.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=65)** That gives you the connection error.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=67)** So what do you do in response when something like that happens?
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=70)** What we have to understand, first of all, that what we're talking about is not an error in application logic.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=76)** It's not like you did something wrong in your code, or you passed in an invalid password, or user name, or something like that.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=82)** This is strictly a problem with the database engine itself, with the relational database management system.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=89)** And what's going on is that there's some kind of resource allocation error.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=94)** So either there aren't enough connections, or there isn't enough time for the database to actually get to take care of your task.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=103)** So, one strategy is to basically give the database a chance to catch up, maybe release some resources or finish some other tasks, and then ask for a connection again, or try to make your connection again.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=115)** A common approach is to use something called exponential backoff.
>
> **[1:58](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=118)** So, let's look at the basic idea here.
>
> **[2:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=120)** The basic idea, that is, if a connection error occurs, you want to wait for some time, T.
>
> **[2:06](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=126)** Let's say you're going to wait one second.
>
> **[2:08](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=128)** And you're going to try and connect to the database again.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=131)** Well, what you want to do, at the very least, is wait a certain amount of time, but then add a little randomness to it, like a random number of milliseconds.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=139)** And that way, if there are a bunch of connections, all trying to get in at the same time, they don't all retry again at the same time.
>
> **[2:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=147)** Now, if you wait one second, plus some random number of milliseconds, and you try again and it fails, well then, whatever that time T is, wait twice that number, and then add on a small random number of milliseconds, and try again.
>
> **[2:44](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=164)** Now if you've waited one second, and then you've waited two seconds and it still fails, well that indicates the database is probably under some serious load.
>
> **[2:52](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=172)** So rather than try waiting another one second, or two seconds, we're going to wait four times our original wait time.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=179)** And the idea here is that, each time we try a slightly longer span for waiting, and if the database continues to fail to respond to that connection request, then we're assuming that the database is under excessive load, and we need to wait even longer.
>
> **[3:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=196)** So we keep increasing our wait time, and the basic formula is, each time we wait, we're going to add another one to our count of number of attempts.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=206)** We're going to take that number of extra attempts and square it.
>
> **[3:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=209)** That's where we get the exponential part.
>
> **[3:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=210)** The exponential part here is the power of two, that we're using.
>
> **[3:34](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=214)** And so, we continue to add on random number of milliseconds, basically we double the amount of time that we wait, each time we give it a try.
>
> **[3:43](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=223)** Now at some point, we do have to give up, so there's going to be a maximum number of attempts.
>
> **[3:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=228)** But again, the general idea here, is that if we have to wait one second, and then two seconds, and then four seconds, and it's still not responding, there's a high likelihood that the database is under unusually high load.
>
> **[3:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=239)** And so it's better to wait even a longer period of time before you try again, up to some reasonable number of maximum number of attempts.
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff?u=76281980&t=247)** So that is how you perform exponential backoff.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), continue (1), try. (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - connection (1)

#### Connection pooling and bulk heads
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/connection-pooling-and-bulk-heads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/connection-pooling-and-bulk-heads?u=76281980&t=0)** - [Narrator] Now a common pattern used with database applications is something called bulkheads and we do that when we need to kind of isolate sets of resources and this is commonly used when we're working with connections, so a common problem, as we've noted, is connection pool exhaustion, and here the idea is that we have a lot of clients or database clients attempting to connect to the database and to make connections, you have access to a data structure called a connection, and oftentimes, those connections are maintained in pools and if we have a single pool of connections, then any client that attempts to access the database has to allocate a connection from that pool.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-application-development/connection-pooling-and-bulk-heads?u=76281980&t=42)** Now, if that pool is exhausted, then any client trying to connect is going to fail, so one thing we can do is to create multiple pools and then have different clients tap into different pools and that allows us to isolate workloads, so for example we might have some high priority workloads, like our customers on the e-commerce site.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-application-development/connection-pooling-and-bulk-heads?u=76281980&t=62)** We want to make sure they always get a connection so that they can purchase our goods.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-for-application-development/connection-pooling-and-bulk-heads?u=76281980&t=66)** Now on the other hand we may have some batch jobs that run occasionally, say some processes that extract data for a data warehouse.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/connection-pooling-and-bulk-heads?u=76281980&t=74)** We don't mind if those occasionally time out as far as connections because it's okay if the data is a little bit late or if they have to wait a little longer to make a connection, so if that's the case, we want to be able to make sure our high priority use cases get access to connections, whereas our lower priority batch jobs can wait if necessary.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-application-development/connection-pooling-and-bulk-heads?u=76281980&t=93)** So, a very simple way to set up a database application is to create just a single connection pool in the database and have all the database clients connect through that connection pool, and that's okay as long as you have enough connections in the pool to satisfy all the simultaneous connections.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-application-development/connection-pooling-and-bulk-heads?u=76281980&t=110)** Now, here's an example where we have a connection pool that has N connections, say 100 connections.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-for-application-development/connection-pooling-and-bulk-heads?u=76281980&t=116)** Well, when that 101st client comes on and tries to make a 101st simultaneous connection, it's going to fail.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/connection-pooling-and-bulk-heads?u=76281980&t=123)** Now, again, we don't want to high-valued customer failing on our e-commerce site, so one way we can deal with that is by creating multiple connection pools, so for example we can have our connection pool one and we can give that a lot of resources and we can assign all of our customer-facing applications.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-for-application-development/connection-pooling-and-bulk-heads?u=76281980&t=144)** When those parts of the application make connections to the database we can send them to, for example, connection pool one, and we can make connection pool one very large.
>
> **[2:32](https://www.linkedin.com/learning/advanced-sql-for-application-development/connection-pooling-and-bulk-heads?u=76281980&t=152)** Now, for our back end batch processing data warehouse extraction, any of those connections that are satisfying that particular workload, we're going to send those to connection pool two, which may be much smaller.
>
> **[2:45](https://www.linkedin.com/learning/advanced-sql-for-application-development/connection-pooling-and-bulk-heads?u=76281980&t=165)** We may have, for example 10 connections there, so what this allows us to do is basically isolate or create bulkheads around our different pools, and the term bulkhead comes from the way ships are built and the idea that with bulkheads you can isolate sections of the ship so that if there is a breach in one part of the ship and it takes on water, the bulkheads isolate different sections so the water doesn't spread across all of the ship, so here the idea is something similar.
>
> **[3:17](https://www.linkedin.com/learning/advanced-sql-for-application-development/connection-pooling-and-bulk-heads?u=76281980&t=197)** If we run out of room in one pool, that doesn't cause ripple effects and connection failures in other parts.
>
> **[3:24](https://www.linkedin.com/learning/advanced-sql-for-application-development/connection-pooling-and-bulk-heads?u=76281980&t=204)** Now, you may need additional connection pool software in addition to your relational database management platform, so for example, Postgres, there's a couple of options, one called PgBouncer and another called Pgpool, and this is extra, essentially middleware that sites between the relational database and your client application, so depending on the database you're using, you probably have other connection pooling software options available to you, so that's something you just want to look into.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7)
> **Analogies:** for example (5)
> **Definitions:** is a  (2)
> **Code Keywords:** case, (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### Monitoring and logging best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=0)** - [Instructor] Now, another area that we want to consider, when we're thinking in terms of reliability, is monitoring and logging.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=6)** Now, there are several reasons why we want to monitor and log events that are happening in our database and database applications.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=14)** First of all, we want to just understand resource allocation.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=16)** How are we utilizing CPU's, and discs and Network resources?
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=20)** Because the more we understand about that, the more we can better plan for capacity that we'll need in the future.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=27)** And, it's also important to help us diagnose problems.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=30)** So, ideally, we will avoid problems by doing things like allocating enough resources before we actually need them.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=37)** But, as we've seen before, with Connection Pools and other resources, problems are going to crop up so we want to make sure we have as much information available to us when those problems occur, so that we can find the root cause of the problem and get the system functioning again.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=52)** And, also, there are definitely security reasons for logging, especially around audit logging.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=57)** Now, with regards to resource utilization, there are several key resources that we want to make sure we're monitoring.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=63)** That would be CPU utilization, our memory utilization, our Cache hit rate, this is very important from a performance perspective.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=71)** So, ideally we want a high Cache hit rate, and if we have a low Cache hit rate then our Cache may be too small, or we may be timing out our items in the Cache too early, so we want to look into that if our Cache hit rate is low.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=85)** And then also, of course, persistent storage.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=87)** This is our disc storage, we want to make sure we have plenty of that available so that we don't run out of disc space, or SSD space, when we're in the middle of trying to write a high value transaction.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=98)** Now, with regards to capacity planning, we want to think in terms of our current utilization, but then also our growth rates.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=104)** How fast are we growing in terms of the number of queries for running the CPU utilization?
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=110)** The amount of disc space we're consuming as particular tables grow in size.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=116)** So, we want to be able to project those needs and account for them.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=119)** And, now, if you are used to Auto Scaling, say with Web Front-ends, and things like that, it's a great feature to have when you have a load balancer and you can detect high load, and you can add additional servers to your back-end cluster to handle, say, Web application.
>
> **[2:15](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=135)** Auto Scaling is much more difficult with stateful applications, like databases, so it's more important that you have adequate capacity planning so that you can add resources in a timely manner, and before you need them.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=146)** Also, as we noted, there's always going to be problems.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=149)** So, we want to make sure that we have error handling within our application code, so that anytime we're in a Except clause, or in a Try Except Block, we want to make sure we're logging information about that.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=160)** We also want to understand what database logs are available, so that when there's an error within the database, itself, inside the relational database minimum platform, it is adequately logging, and we know where those log messages are and have access to them.
>
> **[2:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=175)** And we may need to correlate events within the database with other events, such as, maybe, running out of disc space which would show an error in the operating system, or there may be a network latency problem, so we want to be able to look at network logs, and, possibly, correlate with events in the database.
>
> **[3:11](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=191)** And then finally, with regards to security, audit logs are really important, especially for high valued, highly regulated applications, like if you're in finance or some forms of government, or other industries like health care, where there are definitely well defined regulations that you have to comply with.
>
> **[3:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=207)** And, so, we want to do things like record user activity, so if somebody's changing, you know, an important piece of information, say a medical record or a financial transaction, there's often times basic information that needs to be tracked and recorded about who made that change.
>
> **[3:43](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=223)** And this goes for other changes to other kinds of sensitive data.
>
> **[3:47](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=227)** We want to make sure we capture information about who changed it and when it was changed.
>
> **[3:52](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=232)** And then, also, we want to make sure we have a log of changes to, like, access controls or user permissions.
>
> **[3:58](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=238)** So, for example, if someone is given administrative roles, or some kind of super user role, we want to make sure we have a record of that transaction occurring.
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices?u=76281980&t=247)** So, those are some of the items, within the security framework, that we want to make sure we capture within our logging and monitoring practice.

> [!info]- Semantic Content
>
> **CLI Commands:** make (9), find (1)
> **Env Vars:** cpu (3), ssd (1)
> **Code Keywords:** finally, (1), super (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: When your Python application fails
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-when-your-python-application-fails?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-when-your-python-application-fails?u=76281980&t=0)** - [Instructor] Here is a two part challenge.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-when-your-python-application-fails?u=76281980&t=7)** First imagine your Python web application is failing and there's an unhandled exception and users are getting a stack trace.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-when-your-python-application-fails?u=76281980&t=14)** And the cause of the problem is that connection to the database is failing.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-when-your-python-application-fails?u=76281980&t=17)** When that happens, what Python programming statement would you use to trap the error?
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge-when-your-python-application-fails?u=76281980&t=22)** The second part of the challenge is this: what algorithm would you use in your error handling code when you're attempting to reconnect to the database?

> [!info]- Semantic Content
>
> **CLI Commands:** python (2)
> **Code Keywords:** this: (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: When your Python application fails
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-when-your-python-application-fails?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-when-your-python-application-fails?u=76281980&t=0)** - [Instructor] Okay, the solution to the first part is the try-except block.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-when-your-python-application-fails?u=76281980&t=10)** Now, if you're not using Python and you're using another programming language, there's probably something very similar to try-except that you would find in that programming language.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-when-your-python-application-fails?u=76281980&t=17)** Now, the second part of the solution is the exponential backoff approach.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution-when-your-python-application-fails?u=76281980&t=23)** That's a commonly used technique which allows the database time to catch up and allocate resources and finish other tasks before trying to reconnect.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1), find (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. 6. Designing for Maintainability

#### Understanding schema changes
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=0)** - [Instructor] Software applications change frequently.
>
> **[0:02](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=2)** Sometimes we're adding new features or fixing bugs, but whatever the reason for the change, some of those changes require changes to the underlying database, and we're going to take a look at some of the issues that we have to be concerned about when we're making changes to an underlying database schema.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=18)** Now, it's just a fact of life that database structures change over time.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=22)** Typically in response to changes in application features, but there may be other reasons too.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=27)** For example, you may determine better ways to optimize performance of the database, so you want to make changes to the underlying data structures.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=36)** Often times, these changes come in the form of adding new tables or columns or indexes, or sometimes dropping some of those things, like dropping a column that you no longer need, or dropping an index that you find is not actually used that much and so it's not worth keeping around.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=51)** Also, in modern development environments where we have like agile practices, we often find that there are multiple environments.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=59)** For example, each software engineer might have a local development environment, and then there might a common test environment, and then, of course, there's the production environment.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=67)** Well, all of those different environments need to have some version of the database running, so have to be able to replicate changes across multiple environments.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=76)** Now in addition to changing structures, there can also be changes to the underlying data, or the data we store.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=82)** For example, reference data may need to be updated.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=86)** And once again, we might need to update data across multiple instances of the database across multiple environment, such as development, test and production.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=96)** There may also bulk data loads that we need to do, again, across multiple instances of the database.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=102)** So as you can see, we need a way to keep track of all of these different kinds of changes.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=107)** Now, we might want to think about the kinds of commands that we're actually running.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=111)** So when we're updating the schema, we're not actually querying data for the most part.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=116)** Instead, we're doing things like creating or dropping the table.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=119)** We're using other data definition languages commands, like alter table, to drop or add a column, or add or drop a constraint on a table.
>
> **[2:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=129)** We might be inserting data, or updating new reference data.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=133)** There are a number of challenges with managing schema and data changes.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=137)** The changes are incremental, so over the whole lifecycle of an application, there may be a whole series of changes that get applied to the database, and we need to keep track of all of those changes.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=149)** And if we have to create a new database, and we start with our original script, then we need to apply all of those updates in sequence and make sure they're all successfully executed.
>
> **[2:38](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=158)** Also, we want to make sure we can track versions across environments.
>
> **[2:42](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=162)** So for example, we might have on version running in our development and test environment, and an older version we're running in production.
>
> **[2:48](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=168)** In fact, there might even be multiple versions running in different development environments.
>
> **[2:53](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=173)** So we need ways of keeping track of which version is running in which environment.
>
> **[2:57](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=177)** Also, like software changes, sometimes database changes need to be rolled back, so we have to keep in mind whenever we make a change to the database, how will we recover our existing state if we need to roll back that changed?
>
> **[3:11](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=191)** And then finally, we need to keep in mind that database code changes and application code changes needed to be kept in sync.
>
> **[3:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=198)** Now, there are a couple of ways to deal with this.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=201)** We could write manual scripts, so those are ones that we would just generate and we would run ourselves.
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes?u=76281980&t=208)** Or we could use automated database refactoring tools, and we'll discuss a couple of those shortly.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (2)
> **Analogies:** for example (4), such as (1)
> **Code Keywords:** require (1), finally, (1), this. (1)
> **Warnings:** keep in mind (2)
> **Speakers:** - [instructor] (1)

#### Ad hoc scripts for schema changes
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=0)** - [Narrator] Now, one way of dealing with database schema changes and reference state of changes and bulk data loads is to write ad hoc scripts and run them manually.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=9)** So let's take a look at what we can expect if that's the approach were going to take.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=13)** Now, when we start with a database and a database definition, we're working with an initial set of data definition commands or DDL commands.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=22)** When we're modifying those, we typically have a set of changes in a single script or a set of scripts that we execute as a unit.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=29)** So all of those changes have to take effect or none of them have to take effect.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=33)** Now, the kinds of schema changes we typically make when we're writing our ad hoc scripts are things like adding new tables, adding new tables and reference data, maybe dropping or adding columns, adding or dropping constraints.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=47)** And there are other things we may do but these are some of the most common things that we do when we're working with schema changes and writing manual scripts.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=55)** Now, before we jump in too far and start writing scripts, we have to think about what things can go wrong Well first of all, there could be a syntax error in the DDL and we might not detected that error, If it's in the middle of the script.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=67)** We might run the first part of script, hit an error and then have correct it and then we might not want to rerun the first half of the script unless we've planned for re-executing the script.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=78)** So that's something to keep in mind as your designing the scripts.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=81)** So you might want to watch out for name conflicts.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=83)** This can occur, for example, if you're writing a manual script and it might be the third or fourth revision that we've done to a schema and there's a few other scripts that you're not aware of that have already been executed and they might have already used a name that you're starting to use.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=99)** So you want to watch out for that as well.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=100)** We could have constrained violations when you might start adding in new reference data or removing reference data that's actually needed and that could lead to constraint violations.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=109)** If you're doing a bulk data load, you might find that you're running out of resources like insufficient disk space.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=115)** And then of course there's always the risk of application logic errors.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=119)** So the application code might be out of sync with what's actually going on in the database and then a big problem that we already alluded to is partial execution.
>
> **[2:08](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=128)** So we may have some of the changes executed but not all of them.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=132)** So we need to be able to understand when a script has finished executing, what exactly succeeded and what if anything failed.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=139)** So here's some good practices to keep in mind.
>
> **[2:22](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=142)** Make sure as you're designing scripts, you're planning for the need to execute multiple scripts at any one time.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=149)** So for example, if you're creating a new environment, you might have to start with your initial data definition script, plus each of the incremental change scripts or ad hoc scripts that you've developed since then.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=160)** Always plan for rolling back changes.
>
> **[2:43](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=163)** Never assume that things are going to go correctly.
>
> **[2:45](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=165)** So have a plan in mind for how you will undo the changes, especially if there are partial changes that have been implemented.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=171)** And have some kind of mechanism for tracking changes in your environments.
>
> **[2:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=175)** So for example, log changes to a database table so that you understand which environments are running which versions of the database.
>
> **[3:01](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=181)** And of course implement version control.
>
> **[3:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes?u=76281980&t=184)** Just as your application code is stored in a version control repository like GitHub or Bitbucket, make sure your database modification scripts are as well.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **Warnings:** keep in mind (2), watch out (2)
> **Analogies:** for example (3)
> **Env Vars:** ddl (2)
> **Tools:** github (1), bitbucket (1)
> **Code Keywords:** let (1)
> **Speakers:** - [narrator] (1)

#### Automated schema migration with Flyway
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=0)** - [Instructor] In addition to manually running ad hoc scripts to keep our database schemas up-to-date, we now have tools available to us that can help automate the process.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=10)** So we'll take a look at a couple.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=12)** The first one we're going to look at is called Flyway.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=15)** Flyway is a version control system for database schemas and it's available from [flywaydb.org](https://flywaydb.org).
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=23)** Flyway is based on SQL scripts, so when you create migration scripts using Flyway, you're basically writing SQL scripts, which then Flyway manages for you and executes for you, relieving you of some of the sort of error-prone tedious manual processes.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=38)** So Flyway is a good way to migrate databases with code updates in a managed way, and it has other features, like the ability to detect inconsistent and failed migrations.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=49)** And that's really important, because as we've discussed earlier, one of the things we have to watch out for is having a partially implemented migration or set of changes.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=60)** Now, there are a number of use cases for Flyway, specifically schema changes.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=64)** So again, things like adding tables, dropping columns, adding other constraints, dropping indexes, those kinds of things.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=72)** And also reference data changes, so if we have, for example, lookup codes and things like that and we want to change those across all of our database instances, Flyway's a good way to do that.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=81)** And then also, it supports bulk data changes, as well.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=85)** Now, when you actually use Flyway, there's a number of different ways you can deploy it, or actually execute it.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=90)** One is with the command line, but it also has an API, and there are also plugins for software engineering tools, like Maven and Gradle.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=98)** Now, Flyway is available in a number of different versions.
>
> **[1:41](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=101)** There is a community version, which is available as open-source, and that's licensed under Apache version two.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=107)** And then there are a couple of commercial versions.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=109)** One is called Pro, and one is called Enterprise.
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=112)** Enterprise has even more features than Pro.
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway?u=76281980&t=114)** Now, if you want to check out Flyway, you can download the community version from GitHub and it's at this address here.

> [!info]- Semantic Content
>
> **Definitions:** is called (3), is a  (3)
> **Env Vars:** sql (2), api (1)
> **Tools:** command line (1), github (1)
> **CLI Commands:** apache (1)
> **URLs:** [flywaydb.org](https://flywaydb.org) (1)
> **Exercise Files:** download the (1)
> **Analogies:** for example (1)
> **Warnings:** watch out (1)

#### Automated schema migration with Liquibase
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=0)** - [Instructor] Another tool for automating database schema changes and migrations is called Liquibase.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=6)** Now Liquibase is available at [liquibase.org](https://liquibase.org).
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=9)** And it too is a version control system for database schemas.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=13)** Now, unlike Flyway, which requires that you script your changes in SQL, Liquibase can do that.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=21)** You can support, use SQL, but you can also use more abstract specifications that are written in XML, JSON or YAML.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=29)** Those XML, JSON, and YAML specifications will then be used to generate database specific SQL.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=36)** And that's really nice if you're working with multiple databases.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=40)** So for example, if you have an application that you want to be able to run on top of Postgres, and SQL Server and MySQL, then using something like Liquibase, and specifying your changes in YAML will help you avoid any database specific SQL issues with your migration scripts.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=57)** Now Liquibase uses a couple of mechanisms that are important to understand.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=61)** First of all, there's something called the changelog.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=63)** And changelogs are basically ledgers for tracking changes.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=67)** And then there's also Tracking Tables.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=70)** And this is where modifications are modeled.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=72)** And they're modeled with something called changesets, which are basically sets of modifications or instructions for changing things.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=79)** Now, the basic sequence of operations when you're working with Liquibase is first you create a changelog, then you add a changeset.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=86)** And again, that's a specification for the modifications you're making to your schema.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=89)** Then you deploy that changelog, and then you just check the database to make sure it executed as expected.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=95)** As you can tell with Liquibase, we're working at a little bit more abstract level.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=99)** We're separating a little bit away from the low level SQL and DDL specific issues into these more higher level concepts.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=107)** Now in terms of deploying or using Liquibase, Liquibase, like Flyway, has a command line option.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=113)** It also works with Ant and Maven.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=115)** These are software engineering tools, and Spring if you're familiar with Java.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=119)** And also, if you're working in Java and using a dependency injection management tool like JEE CDI, you can use Liquibase with that as well.
>
> **[2:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=129)** Now, there are multiple versions of Liquibase.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=131)** There's a community version, which again is available under Apache License version 2.0.
>
> **[2:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=136)** And there's a commercial or pro version as well.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase?u=76281980&t=139)** And the community version is available for download at this URL.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6), yaml (3), xml (2), json (2), ddl (1)
> **CLI Commands:** mysql (1), make (1), apache (1)
> **Code Keywords:** abstract (2)
> **Definitions:** is called (1), is a  (1)
> **URLs:** [liquibase.org](https://liquibase.org) (1)
> **Versions:** version 2 (1)
> **Documentation:** specification (1)
> **Tools:** command line (1)

#### Challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge?u=76281980&t=0)** (chill music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge?u=76281980&t=5)** - [Instructor] Here's a challenge with regards to database schema migrations.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge?u=76281980&t=9)** Consider what you would need to do to add a new attribute, called export code, which is a string of length 15, and we're going to add that to the products table in our ecommerce database.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge?u=76281980&t=19)** We're then going to add 10 new products to the product table, and they're going to have their export code attribute set to restricted.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge?u=76281980&t=27)** Also, the existing products that are in the table already must have their export code column set to unrestricted.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-application-development/challenge?u=76281980&t=34)** So describe the DDL commands required to implement these changes.

> [!info]- Semantic Content
>
> **Env Vars:** ddl (1)
> **Definitions:** is a  (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (chill music) (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution?u=76281980&t=0)** - [Instructor] Okay, the solution to our data migration challenge is as follows.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution?u=76281980&t=9)** We're going to have one DDL command which is an alter table, which we used to add the column, which is called export code to our product table.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution?u=76281980&t=17)** We're then going to have 10 insert statements with that new product data that was specified in the challenge itself, and then we're going to need an update statement to set export code to unrestricted for all of the rows where export code is null.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-application-development/solution?u=76281980&t=31)** So the 10 newly inserted product codes have a value of export code set to restricted, but the other rows in the product table that were already in there before the export code column was added are going to have null values, so we only want to update those with null values and that's why we need to have the where export code is null in that update statement.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), is called (1)
> **Env Vars:** ddl (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 8. Conclusion

#### Key considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=0)** - [Dan] Developing database applications is a complicated process.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=4)** And working with databases is much more than running select statements or inserting data.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=9)** So here's some key design considerations that you should keep in mind when you start planning for database application development.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=16)** So the things we want to keep in mind, first and foremost is always a SQL query performance.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=22)** How will we write our queries and how will they perform especially as data grows and our number of users that are working with our application increases?
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=29)** One of the ways we can keep our performance meeting our demand, is by using adequate indexing and here the idea is we don't want too many indexes, or we don't want too few.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=39)** We really need to hit the Goldilocks zone with that sweet spot between not too many and not too few indexing.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=45)** And sometimes you can make good guesses early on, in the application design phase as to which indexes that will be needed, but you may not know until the application is actually deployed and you have actual evidence and performance metrics from usage to help you guide your indexing strategy.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=63)** Also, if you're using an object oriented programming model, then you may want to consider object-relational mapping so that you don't kind of mix metaphors within your application code.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=73)** There are some drawbacks to object-relational mapping in very complex data model situations, but do consider ORM, if you are working with objects oriented programming paradigms.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=85)** Also, you want to consider scalability.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=87)** Now, a couple of things that we can do to improve scalability is to think about how we will partition our data going forward, especially as it grows, and also how we might be able to use replications, like in particular Read-Only replicas to isolate IO operations so that right operations are targeted to the primary replica and then reads can be sent to one or more read replicas.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=111)** Reliability is a key concern as well.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=113)** So you want to make sure you consider all the different ways databases and database applications can fail, and make sure you have adequate error handling.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=121)** Also make sure you use logging and monitoring to help ensure reliability.
>
> **[2:06](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=126)** And then finally keep in mind, database schemes are going to change.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=130)** Your application code changes and so will the database.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=133)** So be sure to use the same good practices that you use with application code, like version control, and testing and rolling out and rolling back.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-for-application-development/key-considerations?u=76281980&t=143)** Make sure you have similar practices for keeping your database up to date.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Warnings:** keep in mind (3)
> **Env Vars:** sql (1), orm (1)
> **Definitions:** is a  (2)
> **Prerequisites:** make sure you have (2)
> **Speakers:** - [dan] (1)


## Instructor

- [[Dan Sullivan]]

## Resources

- Exercise files available

## Skills Covered

- Application Development
- SQL

## Path Context

### In [[Master SQL Development]]
← [[Advanced SQL for Query Tuning and Performance Optimization]] | **6 of 8** | [[Advanced SQL for Data Scientists]] →

## Appears In

- [[Master SQL Development]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)