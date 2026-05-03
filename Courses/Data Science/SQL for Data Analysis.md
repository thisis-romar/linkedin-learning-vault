---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: sql-for-data-analysis-22645200
url: "https://www.linkedin.com/learning/sql-for-data-analysis-22645200"
duration_minutes: 70
duration: 1h 10m
level: Intermediate
updated: 7/17/2023
learners: 33486
skills:
  - Data Analysis
  - SQL
exercise_files: true
github: "https://github.com/LinkedInLearning/sql-for-data-analysis-3271025/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHW625ALPsQSQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1689272470053?e=2147483647&amp;v=beta&amp;t=CZ2IqWXVSN8-jp_yCFfWY-BjIDzkXWYWmWqYreq-RC4"
linkedin_topic: Data Science
learning_paths:
  - '[[Explore a Career in SQL Development]]'
  - '[[Moving from Data Scientist to Data Analyst]]'
  - '[[Advance Your Business Analytics Skills]]'
  - '[[Advance Your Skills in SQL]]'
prev_courses:
  - '[[SQL Server Intelligence- Cracking the Code of Enterprise Data]]'
  - null
  - '[[Power BI Data Modeling with DAX]]'
  - null
next_courses:
  - '[[SQL Hands-On Practice- Solve Business Problems]]'
  - '[[R for Data Science- Analysis and Visualization]]'
  - '[[SQL Hands-On Practice- Solve Business Problems]]'
  - '[[SQL Hands-On Practice- Solve Business Problems]]'
path_nav: '[{"path":"Explore a Career in SQL Development","position":5,"total":8,"prev":"SQL Server Intelligence- Cracking the Code of Enterprise Data","next":"SQL Hands-On Practice- Solve Business Problems"},{"path":"Moving from Data Scientist to Data Analyst","position":1,"total":10,"prev":null,"next":"R for Data Science- Analysis and Visualization"},{"path":"Advance Your Business Analytics Skills","position":6,"total":11,"prev":"Power BI Data Modeling with DAX","next":"SQL Hands-On Practice- Solve Business Problems"},{"path":"Advance Your Skills in SQL","position":1,"total":5,"prev":null,"next":"SQL Hands-On Practice- Solve Business Problems"}]'
path_count: 4
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/data-analysis
  - skill/sql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/SQL%20for%20Data%20Analysis.md)

![SQL for Data Analysis](https://media.licdn.com/dms/image/v2/D560DAQHW625ALPsQSQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1689272470053?e=2147483647&amp;v=beta&amp;t=CZ2IqWXVSN8-jp_yCFfWY-BjIDzkXWYWmWqYreq-RC4)

# SQL for Data Analysis

> If you’re looking to use Structured Query Language in your application development but your story is more prequel than SQL, you need to build a solid foundational knowledge of SQL analysis. In this course, instructor Nikiya Simpson starts with a quick review of SQL basics, then focuses on fundamental SQL queries used in beginning data analysis. Nikiya explains the importance of asking the right qu

> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200) | 1h 10m | Intermediate | 33K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Using SQL for data analysis](#using-sql-for-data-analysis)
  - [What you should know](#what-you-should-know)
  - [Setting up Codespaces](#setting-up-codespaces)
  - [Getting started with a database in Codespaces](#getting-started-with-a-database-in-codespaces)
- [**1. SQL Introduction and Asking the Right Questions**](#1-sql-introduction-and-asking-the-right-questions) (3 videos)
  - [A quick review of Structured Query Language (SQL)](#a-quick-review-of-structured-query-language-sql)
  - [What is a relational database?](#what-is-a-relational-database)
  - [Common SQL structures](#common-sql-structures)
- [**2. Using Data Types**](#2-using-data-types) (4 videos)
  - [Using data types and identifying the wrong data types](#using-data-types-and-identifying-the-wrong-data-types)
  - [Finding missing values](#finding-missing-values)
  - [Finding possible inaccurate data values](#finding-possible-inaccurate-data-values)
  - [Finding duplicate rows](#finding-duplicate-rows)
- [**3. Working with Dates**](#3-working-with-dates) (2 videos)
  - [Working with dates](#working-with-dates)
  - [Filtering data by dates](#filtering-data-by-dates)
- [**4. Easy SQL Functions**](#4-easy-sql-functions) (3 videos)
  - [Common SQL string functions](#common-sql-string-functions)
  - [Common SQL aggregate functions](#common-sql-aggregate-functions)
  - [Introduction to data manipulation](#introduction-to-data-manipulation)
- [**5. Presenting Your SQL Results in Data Visualization**](#5-presenting-your-sql-results-in-data-visualization) (2 videos)
  - [Getting started with data visualization](#getting-started-with-data-visualization)
  - [Creating data visualization](#creating-data-visualization)
- [**Conclusion**](#conclusion) (1 videos)
  - [Leveling up SQL](#leveling-up-sql)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Using SQL for data analysis](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-sql-for-data-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-sql-for-data-analysis?u=76281980&t=0)** - [[SQL]] is the most widely used language for managing data from a relational database. It's also essential in organizing and accessing data to get insights into your business. I'm Nikiya Simpson. I'm a full stack engineer and consultant. And this [[LinkedIn]] Learning course, we'll focus on building fundamentals to get you started with data analysis. We'll cover SQL skills like using various data types like dates and strings, utilizing keywords and clauses and a few easy SQL functions like count and averages, so you can get started on analysis right away.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[LinkedIn]] (1)
> **Env Vars:** sql (3)
> **Speakers:** - sql (1)

#### [What you should know](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we begin, let's discuss some skills you may need to know first. This is an introductory course for [[Relational Databases]]. However, you may be more comfortable with this course if you have some previous experience working with data. For example, if you have experience working with [[Microsoft Excel|Excel]], that can be helpful for understanding the concepts in this course. During this course, we'll use Visual Studio Code and [[GitHub]] [[Codespaces]] to practice writing queries that will demonstrate the concepts in each section. The tools and database needed for the course will populate for you in the Codespace environment. We'll also use the MariaDB version of [[MySQL]] as the [[Database Management]] system for this course. You won't need to be specifically familiar with MariaDB. There will be some commands used that will be specific to this database management system, but mostly the queries used in this course can be performed in any relational database management system. Before starting the practice materials in this course, I'm going to hand it over to Ray Villalobos to discuss how to use Codespaces. Then, I'll be back for more on this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Management]] (3), [[Codespaces]] (2), [[Relational Databases]] (1), [[Microsoft Excel|Excel]] (1), [[GitHub]] (1)
> **Tools:** visual studio (1), github (1)
> **CLI Commands:** mysql (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Setting up Codespaces](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=0)** - [Ravi] This is Ravi De Lobos, senior staff instructor at [[LinkedIn]] Learning, and I'm going to show you how to work with LinkedIn Learning courses using [[GitHub]] [[Codespaces]]. Codespaces is a code editor in the cloud with the full power of Visual Studio Code. It allows for real-world hands-on practice that mirrors [[Software Development]] in the workplace. This course was created using GitHub Codespaces. Using Codespaces, you have everything you need to get going without needing complex installations or build tools. One click and you're ready to go. First, make sure you've signed up for a free GitHub account and that you've logged in. You just see your profile icon right here. When you go to the repository for one of our courses, look for the Code button. Click on Create codespace. The first time you open up a codespace, it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers. The cloud editor's menu lives in a hamburger icon inside the activity bar. The menu will let you see the keyboard shortcuts for your operating system. Let's find the shortcut for the command palette. Look in the hamburger menu under View, and then look for the keyboard shortcut for your operating system. The activity bar has the most common tools you'll need to work with projects. You can, for example, show or hide the Explorer,
>
> **[1:38](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=98)** do a search and replace for content, manage features of the repository, and much more. By the way, if for any reason, you lose the activity bar, you can get it back using the command palette. Your course can have one or more extensions pre-installed based on the course you're taking. Those can be found in the Extensions panel. Because this is a browser, it's easy to inadvertently close the browser window and lose the editor. If you do that, don't panic. Codespaces saves everything you're doing on a virtual machine. You can always get the codespace back for this repo by going to the Code menu and finding your codespace right here. Notice that it even remembered that I had opened the Extensions panel. The sample course I'm looking at is what is known as a flat branch repository. You can tell because there is a single branch when you click on the branch icon on the status bar. You can also tell because there are different folders for each of the videos in the course. Your instructor will let you know what the folder structure is for your course. Forking let's you create your own copy of the repository on your account so that you can keep any changes that you've made even if you've deleted the codespace. To create your own fork, you can click
>
> **[3:11](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=191)** on the Fork button on the repository. I'm going to hit Create fork. Now, I have my own copy of this repository. And if I want to, I can start a new codespace on that fork. This fork version is almost exactly like the original repository, but it will let you push your own changes. Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[3:54](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=234)** I'm going to save it. You'll note that there is an M right here as well as an asterisk on this branch. In the Source Control panel, you can also see a 1 for the change that we just made. Let's go ahead and try to commit this change. I'm going to hit the Commit button and I'll ask it to go ahead and state the changes. And then I'm going to hit this button here to commit this onto my own version of the repo. I'll hit OK. You can also let it go ahead and run [[Git]] [[Fetch]]. That way, it'll automatically sync with your forked repo. Now, that change will be stored in your own version of this repository. Don't worry, if you forget to fork a repo and then try to push changes, Codespaces will also ask you if you want to create a fork automatically. Look for additional course specific tips from the instructor. Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (6), [[GitHub]] (4), [[LinkedIn]] (2), [[Software Development]] (1), [[Git]] (1)
> **Tools:** github (4), visual studio (2)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (2), find (1), git (1)
> **UI Navigation:** click on (2), go to (1)
> **Env Vars:** url (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)

#### [Getting started with a database in Codespaces](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-a-database-in-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-a-database-in-codespaces?u=76281980&t=0)** - [Instructor] Now that we know how to use [[Codespaces]], let's get you familiar with how to access the database we'll use in this course. Start by opening your Codespace from [[GitHub]]. Go to Code, we'll go to Codespaces, and click on Create a new codespace on main. After loading the repository in the Codespace, you'll notice lots of options here on the left hand side of your browser. Let's click on [[SQL]] Tools. Under Connections, you should see H+ Sport and this is the database we'll use within this course. You can click on arrows or carets next to H+ Sport to explore the database tables. We'll get into more about how to use this extension as we go along with the course, but feel free to pause the video and look around. Now that we have our database ready, let's get started with learning more about SQL for data analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (2), [[SQL]] (2), [[GitHub]] (1)
> **UI Navigation:** click on (3), go to (2)
> **Env Vars:** sql (2)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)


### 1. SQL Introduction and Asking the Right Questions

[↑ Back to Table of Contents](#table-of-contents)

#### [A quick review of Structured Query Language (SQL)](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=0)** - In this course, we'll focus on building fundamentals to get you started with using a database for a project. But, what is a database anyways? Well, a database is simply a collection of data arranged for retrieval of the data by a computer system. Let's say you're a business owner and you're selling a product. Most likely, you want to keep track of the amount of orders you receive. You may also want to know the dates of these orders, so that you can see trends or know how many orders you get each quarter. You should also keep track of your customers so that you can see what they like and what they don't like. A database is often organized as a collection of tables. A table is a two-dimensional grid consisting of rows and columns. A row is also known as an instance or a record. A row can be a student, a product, a customer, or an order. The column is also known as a field or an attribute, as it describes something about the row. In the case of a product, it could be the product's size, color, product name, or category. The most widely used language for managing data from a relational database is known as [[SQL]]. Structured Query Language, or SQL, or S-Q-L, is the primary language we use to manage and access structured data in a Relational [[Database Management]] System. It's how we communicate with the database. A Database Management System, or DBMS,
>
> **[1:36](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=96)** is a software application that helps us store, load, and update data. We can also use the DBMS to retrieve data or query directly. In addition to the relational database model, there are different types of database models. Some of the models include the entity-relationship, or ER model, and object-oriented relationship models that we'll discuss later in another section. Time for a brief history review. The SQL language was first developed in the 1970s by IBM researchers Raymond Boyce and Donald Chamberlain based on the relational model developed by Edgar F. Codd in 1970. He wrote the paper, "A Relational Model of Data for Large Shared Data Banks," which provided a theoretical base for working with structured data. This research led to the first Commercial Relational Database Management Systems, Oracle in 1979, SQL/DS in 1981, and DB2 in 1983.
>
> **[2:42](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=162)** As you can see, SQL is an old programming language, so why is it still relevant and why do I need to learn it? There's an easy answer to this. Many companies still use it. According to the 2020 Insights from Stack Overflow, SQL is the third most commonly used programming language behind [[JavaScript]] and [[HTML]] and CSS. Having a good database understanding is essential in today's job market. And it's not standing still. New concepts in database technology include processing [[Big Data]]. Big data is a concept of collecting, organizing, and analyzing massive amounts of data from a variety of sources. You may have heard of technologies, such as [[Hadoop]] MapReduce, [[NoSQL]], and NewSQL. Big data concepts involve analyzing and extracting information from enormous data sets that will require multiple servers and lots of compute power to process. As application developers, we develop code that calls the Database Management System to perform operations or retrieve data from the database, and this course will help H+ Sport display their sales [[Dashboards]] and give you essential SQL skills to put in your toolbox. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Database Management]] (4), [[Big Data]] (3), [[JavaScript]] (1), [[HTML]] (1)
> **Env Vars:** sql (7), dbms (2), ibm (1), db2 (1), html (1)
> **Definitions:** is a  (4), known as (3), is an  (1)
> **Cross-References:** later in (1)
> **Documentation:** stack overflow (1)
> **Analogies:** such as (1)
> **Speakers:** - in (1)

#### [What is a relational database?](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=0)** - A relational database is a type of database that stores and provides access to data points that are related to one another. In most instances, tables are organized by entities. An entity is a single object, like a person, place, or thing. This could be a customer, a store, an employee, or a product. The key is that each entity is unique. We infer relationships between the different entities to gain insights into our data. Let's use a cake example. Who doesn't like cake? Topsy Turvy Baking Company sells beautiful custom cakes that ship all across the United States. They have many customers, and I'm one of them. I want to order a birthday cake for my friend. They ship me a cake, and it's so good. I think I'll order another one for me too. So I place a different order. So we can see the relationship between customer and orders. Each customer can make more than one order. A cake can also have many different flavors. The company can have one or more locations to pick up orders in person. There are lots of different relationships between the entities, as we see here. When we talk about relationships between entities, there are three main different types. One-to-one, one-to-many, and many-to-many. A one-to-one relationship may be a customer and the username they use to log into your website. The customer name may be Mary Smith, and their username is Mary Smith without any spaces.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=95)** They both refer to the same person or entity. Therefore, the relationship is one-to-one. A one-to-many relationship is more like a relationship between a customer and an order. One customer can have many orders. So that relationship is one-to-many. And a many-to-many relationship is like the relationship between salespersons and customers. A salesperson can serve many customers. And a customer can request orders for more than one salesperson. Many-to-many relationships can be difficult to work with sometimes. If each salesperson and customer can work with anyone, we can't really define that relationship. So we usually use some type of entity in between to help clarify what that relationship is. For example, if we want to define the relationship between a salesperson and a customer, we can look back at the order they placed. This order clarifies that the salesperson worked with a specific customer, and vice versa. The order is the intermediary between the two. Clearly, we can see that things can get complicated really fast. So how do we visualize these relationships? Well, we use what's called an entity-relationship diagram, or ERD. This is a graphical representation of entities and their relationships to each other. It provides the guide to our data, and a quick view of what data is available to us. To see an example, check out the [[GitHub]] repo for the ERD in the H+ Sport database. Just so you know, some people call this
>
> **[3:10](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=190)** entity-relationship model. Both are fine, but I like the diagram better, so that's what we're using. Each entity has a unique identifier called a primary key. The primary key is used to identify that specific record. It doesn't contain null values, and there has to be something there to identify the record. It can also be a combination of more than one field, which is also known as a composite key. Again, this has to be a unique identifier, so some composite keys might seem like the easiest option, but would actually cause some problems. Let's say a developer is wanting to use first name and last name as the composite key. This might seem simple, but it wouldn't work if you have two [[John the Ripper|John]] Smiths. However, a composite key with the last name and address may work, if there is only one customer per household. Deciding on how you want to make your primary key is really up to how complicated you think your database is going to be. It's not really about if it works now. You have to look at the future, and how complicated you think your database is going to get. Trust me, it's a real pain to change a primary key. You don't want to do that. Let's look at the ERD for H+ Sport. Some examples of a primary key include the CustomerID, a ProductID, and the OrderID. Each table can refer to another table using a key called a foreign key.
>
> **[4:45](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=285)** The foreign keys refer to the primary keys of another table. Let's take a look at this example. Customer 101 makes a purchase on January 1st. It has an Order ID of #123. The order table shows us the Customer ID of the customer who purchased the order, and the Salesperson ID of the person who sold the order. We can join the order table to the order item table by Order ID, and see that the customer ordered Product ID A, along with the quantity that they ordered. Then we can join the Product ID A to the product table to find out the product name, and other attributes as associated with the product. From the order table, I can join the salesperson table by Salesperson ID. Then get more information, like the name and address of the person who sold the order. Each foreign key must have a matching primary key. This is known as referential integrity. It ensures the accuracy and consistency of data with your database. It also maintains the relationship between the two tables. Database administrators and programmers work together by putting constraints in place to ensure the integrity of the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[John the Ripper|John]] (1)
> **Definitions:** is a  (3), known as (2)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** erd (3)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Analogies:** for example (1)
> **Best Practices:** the key is (1)

#### [Common SQL structures](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=0)** - Now let's take a look at how to ask the right questions to get the results you want using some common [[SQL]] syntax. Let's start by opening up your code space environment and going to visual studio code. Let's make sure we are connected to the H plus Sport database, and can view the tables in the explore window. I see all five of the tables from the entity relationship diagram, customers, orders order item, product, and salesperson tables. When developing a good SQL query, it's important to determine a detailed question that you want to ask of the data. If not, you may end up with the wrong results. This could be the difference between asking about the number of times a customer has been to your website, and the number of times a customer has ordered from your website. Questions that can help you develop a more detailed query are, what tables do you need to access? What are the fields of interest? What data do we need to filter out, or is there a specific time period that we're looking for? Do we need to order our data in a specific way to get the right results? Let's start with the basic syntax for retrieving data. SQL statements are structured in subsections known as a clause, and each clause contains at least one SQL syntax keyword. The select keyword is part of the select clause, where we define the fields
>
> **[1:33](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=93)** that we want to be returned back to us. From is a keyword that is part of the from clause that identifies the tables in which we're pulling data from, like the order table, or the customer table. The foundation of a simple query looks like this. Select your field name from a table name. Let's look at how we can use the SQL tools and Visual Studio code. I'll demonstrate the code here, and feel free to pause and work in the code space along with me. Let's start by going to menu. Go to view and command palette. We'll type in SQL tools, colon, and then space, new SQL file. You can just push in, and go down to new SQL file. In the editor, you'll have a new SQL window to start writing your queries. All these options have shortcuts as well, but this should help you get started with knowing how to access all the commands. So, how do I retrieve all the information from the customer table? I'll start by typing in select star from customer,
>
> **[2:50](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=170)** and then I end with the semicolon here. I can click on run on active connection, and the results should appear on the right side of your screen. This retrieves all the rows and attributes from the customer table. So, what if I just want to select the state for all customers? Then, instead of using the star here, I can hit select state from customer, leave everything the same. Note, this doesn't give me a unique list of states where our customers live. It gives me the state field for every row in the customer table, and we'll go over creating a unique list later. Let's say the company website wants to display a map of customers from around the country. Instead of manually entering each location in the code for our website, we can add a call to the database to display the total amount of customers in each state. There are also great [[Geographic Information Systems (GIS)|geographic information systems]] that use SQL to perform visualizations like this. Most likely, we'll need to join tables together to gain more insights. A join statement will return the records or the keys on the tables in the join match. There are different types of joins. Some join types include inner join, left join, and outer join. The inner join returns only data that matches both tables. The left join returns all the data from the left table,
>
> **[4:27](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=267)** and the data for the matching rows on the right. The full outer join returns the rows from both the left and right tables. There are more join types that are available depending on your database system. We'll use these join types depending on the relationships between entities and the question that is being asked to make sure our query returns the correct information. We will focus on the inner join for now. Let's look at another example. So we want to find all of our order IDs by the customer's last name. So we're going to start by hitting select, last name, order ID, and we'll use our from clause, type in customer for our table, join to our orders table, and when we join we're going to join on the key. So we're going to use customer dot customer ID equals orders dot customer ID. This gives us our last name, the order ID from the orders table, and we can click on run on active connection. And this will give us all the order IDs by last name. To further define our queries, we can add on additional clauses like where, order by, group by, having, and limit, and the additional clauses
>
> **[5:59](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=359)** help us to further define our query so that we can display the correct information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (10), [[Geographic Information Systems (GIS)|Geographic information systems]] (1)
> **Env Vars:** sql (10)
> **UI Navigation:** click on (2), go to (1), select the (1)
> **CLI Commands:** make (2), find (1)
> **Tools:** visual studio (2)
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - now (1)


### 2. Using Data Types

[↑ Back to Table of Contents](#table-of-contents)

#### [Using data types and identifying the wrong data types](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=0)** - Now, let's take a look at what data types are and how we can prevent storing and processing the wrong data. Let's review. A relational database is an organization of related tables. A table consists of rows and columns with each row representing a record or an instance. A column represents an attribute of each instance. However, all fields are not made the same. The data type of a column defines what value the column can hold. Much like other programming languages, each attribute or column has a data type that helps the system and the programmer know how to interpret the value and how to process it. Here's an example. Let's say I want to order a pet carrier. Depending on the type of pet I have, like a dog, cat or bird and the size of my pet, I'm going to buy the carrier that best fits. Also, depending on their needs I might need different features. Data types work the same. They help us store the right value to make sure the application works correctly. There are many different data types to choose from, and depending on the system, data types and their corresponding functions can perform differently. Some common data types in [[SQL]] are INT or integer, a VARCHAR, or you see NVARCHAR as a derivative of that, DATE, DATETIME, FLOAT, Decimal and DOUBLE. Also note that different systems offer different data types.
>
> **[1:34](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=94)** When defining a column's data type, for some systems, you can include the maximum number of characters or digits allowed in the column. These restrictions are known as constraints. This is defined when the table is created. The developer or administrator can also define additional column constraints. When defining tables, we can define whether the data can be NULL or NOT NULL in each column. We can also ensure that all values in the column are UNIQUE. This is also where we define PRIMARY KEYs, FOREIGN KEYs and set DEFAULT values for each column. Here's an example of a CREATE TABLE statement. Don't worry about the syntax for right now. We'll go over that in more detail later. Let's look at the table's data types and constraints. Here we have the CustomerID column. You can specify an integer of 4 data type for CustomerID. That'll be good for about 9,999 customer IDs. If the system tries to auto increment greater than 9,999 or a customer ID has more than four digits, the process will error. It's important to work with the database team to ensure enough space for customer IDs that are larger than four digits, such as an INT or a SMALLINT data type. For example, in my SQL, the constraints on our integer values are TINYINT, SMALLINT, MEDIUMINT and BIGINT. Data types and constraints ensure that the data is kept consistent and has good quality.
>
> **[3:09](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=189)** Let's look at some more examples. I want to calculate the total amount a customer has ever spent with H+ Sport. I've typed out a query in advance so we can go over the main concepts you need to know for now. If there are some key words you don't recognize, it's okay. I've selected the CustomerID, FirstName, LastName from the Customer table, and the TotalDue from the Orders table. And the results from that query gives us the total due for each customer. However, that's not exactly the question we want to answer. We need to apply a function called SUM to add the total due for each customer ID. We can call this function using the GROUP BY clause and the SUM function. This allows us to aggregate the total due for each customer ID. Again, we'll cover aggregates in a minute. It's a great feature, and I won't forget to come back to this. Let's click on Run on active connection, and here are our query results. Be sure that when using the SUM operator, that you're working with a number data type. Let's try the same query with a text data type like customer email. Looks like we didn't encounter an error, but let's look at the results. We have zeros for the value for some email. The data type for email will not error but will also not give us the correct results. In up [[Database Management]] systems such as [[Microsoft SQL Server|SQL Server]], this would result in an error.
>
> **[4:43](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=283)** The data type character does not allow for the use of the SUM function. There are other functions we can use to count the number of emails in this case. I'll click on the Top10Customers, that SQL file. I'm going to close this query result. I'll add some additional code to select the top 10 customers by adding the LIMIT 10 and order by keywords. Scroll over a little bit to see the results. It works. We have our top 10 customers ordered by total due. Also note the IDs that we used to join the data together should also be of the same data type. For example, you can store customer ID 001 as VARCHAR or INT. Whatever you decide, the data type needs to be consistent across tables to prevent any future errors that might occur. Take a look at a few of the links for data types for [[MySQL]] and SQL Server for more information on data types that best fit the data that you are working with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Microsoft SQL Server|Sql server]] (2), [[Database Management]] (1), [[MySQL]] (1)
> **Env Vars:** sql (5), sum (4), int (3), varchar (2), null (2)
> **SQL:** varchar (2), create table (1), group by (1)
> **Analogies:** such as (2), for example (2)
> **CLI Commands:** cat (1), make (1), mysql (1)
> **UI Navigation:** click on (2), select the (1)
> **Definitions:** is an  (1), known as (1)
> **Warnings:** note that (1)

#### [Finding missing values](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=0)** - [Instructor] Next, we'll take a look at how we can identify missing data in our database. Missing data can have major implications for your development project, affecting your customer's experience and your organization's reputation. Let's look at some ways to identify data that may be missing. I'm going to go to the chapter two directory finding missing values, and first we're going to take a look at the salesperson's table. The database team has added a new column called Status. Here's a script we can run to add that new column to the salesperson table. Let's click on Run on Active Connection again, that adds the column to our table. Now, when we run select status from salesperson, we see that all the values for status are listed as null. Null represents an empty value. The value could be null upon creation of the record or it can be assigned a null value from the program. Of course, that depends on if our column allows null values as we discussed before in the column constraints. Null is not the same as a zero value or even a blank value. Sometimes data values can contain spaces and the value may look like it's empty, but it's really not. The WHERE clause is used to help us filter records to a specific set of data that we want to explore based on what we specify in select. The WHERE clause also comes after the FROM clause. To find values that contain blank spaces,
>
> **[1:33](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=93)** we can use the keyword LIKE. we use LIKE along with a wildcard, which is the percent sign to find characters like blank spaces within the text. It takes the place of the equal sign. The percent sign is used in place of any character string that we want to search for. The wildcards are enclosed in single quotation marks. Searches within the text are not case sensitive, so searching for capital MW can return MW or lowercase MW or even a mixed case in the string. And the wildcard with space [[SQL]] file, let's open that. In this example, let's look at the following query. We select first name on line one from customer, our customer table on line two, where a first name looks like and you see the percent signs with a space in the middle on line three. Let's click on run on active query, and the following query returns zero records. So we don't have any records that contain a space in the first name. Let's look at the [[Microsoft Products|products]] table. The company has a new orange mineral water. Let's run a script that will add a new product to the product table. We'll go to our AddNewProduct.sql file. This is syntax we haven't covered yet, but will help us set up for the next part of the analysis. Let's click on Run. Now it's just been entered into our products table
>
> **[3:06](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=186)** and the product is now available in the database. Let's click on our SelectNewProduct.sql file. Let's click on Run. You'll notice that we can't see a name for the product, so let's go to our SelectBlankProduct.sql file. Let's try to run this one. There is one record that returns that lets us know that the product code contains spaces and is not a null value. There is a record for product ID 17 listed, but how much does it cost? There also looks like there may be some data missing. Let's go back to the SelectNewProduct.sql file, we can see that the product name is still null and the cost is listed at $0. Let's perform some queries that find null values using the WHERE clause. You can filter records by adding is null or is not null to the WHERE criteria. Let's go to our StateIsNull.sql file. To identify customer records with a missing state value, we can select customer ID, first name, last name, first customer, and on line five, we have where state is null. Let's run this. This query should return zero records since the column state does not allow null values. If it does return records, we can take this information to our team to identify any issues that may be causing missing values and impose a proper constraints.
>
> **[4:42](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=282)** Next, let's go to the StateIsNotNull.sql. As a check, we can also run this following query on line five, you see, where state is not null. We will want this number to be the same number as the records in the customer table. That means that no state values are null. Again, it's still important to look at the data to make sure that there are no blanks or spaces and values in the state column, as they will not be identified as null. This is a great practice for enforcing quality in your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Microsoft Products|Products]] (2)
> **UI Navigation:** go to (5), click on (5)
> **File Paths:** selectnewproduct.sql (2), addnewproduct.sql (1), selectblankproduct.sql (1), stateisnull.sql (1), stateisnotnull.sql (1)
> **Env Vars:** where (4), sql (1)
> **CLI Commands:** find (3), make (1)
> **SQL:** where (4)
> **Definitions:** is a  (2), means that (1)
> **Cross-References:** we discussed (1), go back to (1)

#### [Finding possible inaccurate data values](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=1)** - [Presenter] Next, we'll take a look at using [[SQL]] functions to find some possible bad data values. Sometimes, we'll run across data that doesn't look right at all, like a misspelled [[Microsoft Word|word]] or a product that was giving the wrong product code. A great tip in [[Application Development]] is to search for possible anomalies in our data and be prepared for dealing with it in our app. There are several different operators you can use to gain more insights about your data. To do this, we'll look at three types of SQL operator: comparison, logical, and arithmetic. Comparison operators compare values and return a true or false to evaluate the statement. Some common comparison operators in SQL are equal, not equal, greater than or greater than or equal to, less than or less than or equal to. If I compare an apple and an orange by color and taste, would they be the same? No, so the operation would turn a result of false. We compare two values to evaluate whether or not we want to return the record. In this code example, we can return all the orders where the order date is greater than January 6, 2016. Depending on the date of format that your data is stored in, the structure and format of the date value may vary slightly. Logical operators combine multiple Boolean values and return a single Boolean output of true or false.
>
> **[1:36](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=96)** Some common logical operators in SQL are listed here including and, or, like, and between. Say you want to check for multiple conditions, such as if a product variety is Blueberry and the price is below $2. In this example, we selected all the records from the product table where the variety is Blueberry and the price is less than $2. We can see a simple example of the use of and as a logical operator here. Now, let's take a look at arithmetic operators. These are our operations that we use to perform calculations. We can use basic arithmetic operators to our data like addition, subtraction, multiplication, division, and modulo, which we'll find the remainder. Let's check the total due column by also checking the product price and quantity in the order item table. Let's open our check order total SQL file. We'll have to join the order item and product tables by the product ID, and we'll multiply the quantity and price. Next, to get the total for the orders, we will use the sum function to aggregate the order item records by order ID. In order to aggregate, we have to use a group-by clause that allows us to group data that is similar. When we look at our results, our total due is the same as our new total due that we have calculated from multiplying quantity and price.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=190)** We want to see if there are any discrepancies here that we may need to discuss with our team. Are we missing some additional calculations that we should consider, such as sales tax or discounts? This is all part of making sure that we're asking the right questions or let someone know that we have some bad data. A couple of things to note here: This is where good data documentation comes into play. Most [[Databases]] will also come with a definition of what is in each column. It's also good to document where the data originally comes from and how it's derived if it's a calculated field. It's also great to list or define valid values for the column. This could be a list or a range like store A, store B, and store C. Good documentation is essential in identifying bad data that can mess up the integrity of your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Microsoft Word|Word]] (1), [[Application Development]] (1), [[Databases]] (1)
> **Env Vars:** sql (5)
> **CLI Commands:** find (2)
> **Analogies:** such as (2)
> **Speakers:** - [presenter] (1)

#### [Finding duplicate rows](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=0)** - [Instructor] Let's look at some ways to use [[SQL]] to identify duplicate values in our data, as well as how to prepare a summary that will give us even more insight. Now let's add two new clauses. They are the GROUP BY and HAVING clauses. The GROUP BY clause allows us to introduce aggregation to our SQL query. By using GROUP BY, we can group together rows that have the same values and summarize those groups with aggregate functions, as we have seen in some previous examples. Aggregate functions include COUNT, SUM, AVG, MIN, and MAX functions. We will look at some of those functions a little later in this course. For now, let's focus on the COUNT function that will help us identify the duplicate records. Let's start by going to duplicate 1 dot SQL. All of fields in the select statement must also be in the group by. Now, here's an example of a summary. I want to count the number of orders for each customer. I'll use the customer ID from the customer table. Next, in our select statement, I'll add the COUNT function. Inside the COUNT function, you can add a field that you want to count the number of values as seen on line 4. A common practice, we'll write count one, and that will count the number of values in the first column. We can also use an alias to rename our calculated field to something else like num underscore orders. Next, I'll include some more information from the customer table by joining by customer ID.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=95)** We'll go over more about joins here soon. However, this is a simple join. I'll add the group by clause and add customer ID, first name, and last name. You can also add order by to order the account in ascending or descending order. Let's run this query to see what's returned. Now we have a summary that contains the number of orders for each customer. As you can see here, we have some num orders that have two and some that have one. A duplicate row happens if the record is not unique. This means that all the attributes for a row are the same. This can cause the application to count something twice or overestimate. Let's add the HAVING clause. The HAVING clause allows us to use some additional filtering based on the results of the aggregate functions. It will always come after the group by. Let's take a look at duplicate 2 dot SQL. On line 4, we add the following, having count of one greater than one. Let's run this, and ah, we have some duplicate values. By checking if the count is greater than one, we can identify where there may be one or more rows that are the same. Of course, first and last name combinations can be very common. However, if we were to add address, city, state, and zip code that makes it more likely
>
> **[3:08](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=188)** that these are different people and less likely that it's a duplicate record unless you have two people at your address with the same name. If that's the case, we can try to add even more fields to help us identify the truly unique records. Let's go to duplicate 3 dot SQL. Here, we've added city, state, and zip code to our existing query. Let's run that. No duplicate values there. Some key points to remember, the WHERE clause allows us to filter non aggregate data columns. The HAVING clause is only used to filter aggregated data like SUM and COUNT, and has to be accompanied by the GROUP BY clause that's listed first. Identifying duplication in our data can save us database space. It also helps us to prevent errors in our application or in our data analysis, ultimately leading to better decision making and a better customer experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5)
> **Env Vars:** sql (5), count (5), group (4), having (4), sum (2)
> **SQL:** group by (4), having (4), where (1)
> **Definitions:** is a  (1), means that (1)
> **Cross-References:** later in (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 3. Working with Dates

[↑ Back to Table of Contents](#table-of-contents)

#### [Working with dates](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=0)** - Most [[Database Management]] systems will allow for many different data types for dates, so let's look at some different methods. In [[MySQL]], you have DATE, DATETIME, TIMESTAMP, and YEAR. There are lots of different options. They may seem very similar, but there are some unique differences. In MySQL, the DATE datatype will store the value as YYYY-MM-DD. While the TIMESTAMP stores both the date and time that includes the hour, minute, and second of the time. With most business applications, the timestamp in [[SQL]] will be more than enough precision. Datatypes allow the database to have different levels of precision based on the needs of the application. Let's take a look at the order date. Let's open the SelectOrderDate.sql file. Date is in both the name of the field and the datatype, and sometimes that may be confusing. In practice, make sure that the fields used are not the same as keywords. In this instance, we use CreationDate instead of Date. This query returns the date for every order in the database. Let's add some more to this query. Open the SeparateDates.sql file. Here, we'll separate the month, day, and year of the order date into three separate columns. The Year returns a year in an integer, Month returns an integer 1 through 12 for the month of the date, and Day returns an integer that represents the day of the month.
>
> **[1:33](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=93)** I can also add aliases to make my columns easier to read for my audience. Open the SeparateDatesAlias.sql file for an example. Let's click on run. Now we have successfully created three columns of data from one. There's also a couple of ways to capture the current date and time. Let's again look at a few DBMS methods to do that. In MySQL, let's use the NOW function. We'll open the CurrentDateTime.sql file. The value is derived from the operating system where the database is running. These functions are great for when you're ready to insert a new order into the order table. There are so many date functions available to make the most of our data. Each database management system will contain documentation that is useful for helping us. There are so many date functions available to make the most of our data. Each database management system will contain documentation that's useful in helping us query effectively.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Database Management]] (3), [[MySQL]] (3)
> **Env Vars:** date (2), timestamp (2), datetime (1), year (1), yyyy (1)
> **CLI Commands:** make (4), mysql (3)
> **UI Navigation:** open the (4), click on (1)
> **File Paths:** selectorderdate.sql (1), separatedates.sql (1), separatedatesalias.sql (1), currentdatetime.sql (1)
> **SQL:** timestamp (2)
> **Speakers:** - most (1)

#### [Filtering data by dates](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=0)** - In a larger database, we wouldn't want to return all of the orders. For one, it could get pretty inefficient; and 2, we most likely aren't interested in every record. Instead, we're going to identify a subset of the data by using dates. I need to show the sales team a list of all the orders from May 2016. Let's incorporate both logical and comparison operators and the date functions from our previous section. Let's open the ComparisonOperators.[[SQL]] file. We have the following query, SELECT OrderID and CreationDate FROM Orders, where the month is equal to 5 and the year is equal to 2016. A couple of things to note here. Month and year are returned as integers, and the values can be noted in single quotes or not. That doesn't matter, since they are integers. Also, we use the AND operator so that both conditions must be true in order for the records to be returned. If either condition is false, we will not get the records we want. Let's click on run, and we see a order ID and creation date. We can also use BETWEEN to get a section of orders in a specified time period. Let's look at the same question of returning orders for May 2016. Let's open the BetweenDates.sql query. Close this result.
>
> **[1:36](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=96)** Notice the WHERE clause that has the BETWEEN keyword. In line 4, you see "BETWEEN '2016-05-01' and '2016-05-31'".
>
> **[1:52](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=112)** Click on run. The query returns 17 records. We'll also order the results by adding an ORDER BY clause that sorts our data by the order date in ascending order. By adding the DESCENDING keyword in our ORDER BY clause, we can order the order date in descending order. The ascending order keyword is ASC, but is also the default method in ORDER BY and does not need to be implied. We can also use comparison operators together with date functions to filter the results by dates. Let's select dates greater than today's date. Open the WithCurrentDate.sql file. Yep. Let's move this over here, and we'll close out the old result set. In the where clause, you'll see where we're comparing the creation date with the current date using the now function. Let's run this. No records are returned, which is what we expect, since we don't have any data in 2023 or in the future. Instead, let's find an order date where it's greater than 10 years. So let's open the WithCurrentDateMinus10years.sql file. Here we also add some arithmetic operators to our where clause.
>
> **[3:25](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=205)** Let's run this query. The query now returns 200 orders with a order date greater than 10 years ago. Next, let's try to return our order data from 2015 by month and year along with our other order information. Open the CompareYear.sql file. Let's close out our previous results. On line 6 and 7, in the where clause, you'll see the year function and we pass in the creation date as a parameter. We've used our year function to filter by just a year, and we're able to use our column alias to order our date by month and year in ascending order. Let's run this query. We have 87 records returned with the dates between June and December of 2015. We're also able to use our alias in the ORDER BY clause. This is allowed because of the order in which SQL processes each clause.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6)
> **Env Vars:** order (4), between (3), select (1), where (1), descending (1)
> **UI Navigation:** open the (5), click on (2)
> **SQL:** order by (4), select (1), where (1)
> **File Paths:** comparisonoperators.sql (1), betweendates.sql (1), withcurrentdate.sql (1), withcurrentdateminus10years.sql (1), compareyear.sql (1)
> **CLI Commands:** find (1)
> **Speakers:** - in (1)


### 4. Easy SQL Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Common SQL string functions](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=0)** - [Instructor] Different relational [[Database Management]] systems offer built-in [[SQL]] functions that allow us to retrieve data for our applications. This is especially helpful when working with text. Now let's take a step back for a moment and talk about what is a function. SQL functions are built into the database system and return values based on the operation, functions within SQL work much like functions in other programming languages they can take in one or more arguments and return a value. Some functions are specific to a data type and some functions can cross different data types. For example, we can use the MIN function to find the minimum total of [[Microsoft Products|products]] ordered and we can also use the minimum order date which would be the oldest date in the results. However, the sum function is for adding numerical values. You won't be able to use the sum of apples and oranges. The sum function will not work on strings Let's look at some common string functions. String functions are used to modify character and text space data. Some common string functions are CONCAT UPPER, LOWER, TRIM, REPLACE, and SUBSTRING. Using these functions within our select statement temporarily changes how the values are returned to us without actually changing the data in the underlying database. The SUBSTRING function in this case takes three arguments. The value of the field to use, the first position
>
> **[1:36](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=96)** of where you want the substring to begin and the number of characters to include in the substring. Some examples would be where, substring of the last name one for the first position, and three for the number of characters to include in the substrate. Will return last name that begins with Smi. Like Smith. The CONCAT function allows us to join strings together. In this example, we can add the first and last name together to get the customer's full name. The upper function will return your string in all capital letters, and the lower function will return the whole character string in lowercase. These functions are great for standardizing the result set. For instance, if you want to standardize a mailing address this is a great method to do that. The replace function can quickly replace all of the occurrences of a substring within a string with another substring. Let's take a look at these functions in action. Let's open the CONCAT and a upper.SQL file. This is a quick example for listing mailing address. We will use the CONCAT and upper functions to show the customer's full mailing address. Let's run this query and check out the results of the concatenated new address. Notice, we combine two string functions here along with the limit 10 to only include the first 10 records in our result set.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=190)** The trim function will remove spaces from the beginning or the end of a string. This is extremely helpful if we have some users that may enter text in a web input field and forget that there is an extra space at the end. The trim function can be used to remove these trailing spaces. The trim function can also remove specified characters from a string, for instance, with the dollar sign in a total due field in our invoices table. Let's look at the trim.SQL file. Let's close our previous query results. We can remove the M in front of a product code with a trim function with a following code. So clearly this is a lot easier to try to implement than the substring function with trimming characters from text. Some derivatives of the trim function include LTRIM which is a function that can remove leading spaces from the character on the left side and the RTRIM function which will remove the trailing spaces. The REPLACE function will replace a set of specified characters with another set of characters similar to find and replace in [[Microsoft Excel|excel]]. Let's open the replace.SQL file. Let's close this previous query result and let's say I'm interested in replacing product code B-L-U with B-L-E, you see on line two, we use replace, product code
>
> **[4:48](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=288)** with BLU to BLE and an alias of new product code. Let's run this query. We can see the original product codes with the new product codes using the replace function. Of course these are not all the string functions available to us. Find more useful string functions on document websites like [[MySQL]] for more string manipulation options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Database Management]] (1), [[Microsoft Products|Products]] (1), [[Microsoft Excel|Excel]] (1), [[MySQL]] (1)
> **Env Vars:** sql (6), concat (4), replace (2), substring (2), min (1)
> **Definitions:** is a  (5), is an  (1)
> **CLI Commands:** find (3), mysql (1)
> **Analogies:** for instance (2), for example (1), similar to (1)
> **File Paths:** upper.sql (1), trim.sql (1), replace.sql (1)
> **UI Navigation:** open the (2)
> **Speakers:** - [instructor] (1)

#### [Common SQL aggregate functions](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=0)** - [Instructor] Now let's look at the many mathematical functions we have available in [[SQL]] to translate our data into some meaningful information. Some common aggregate functions include count, average, min, max, and sum. Count is a commonly used function within SQL to find the frequency of values in a data set. For example, we may want to know how many customers we have. We can perform that calculation in the Count Customers.sql file. Let's take a look at that syntax, which should be familiar. Let's run this query. This query will return the number of customers in our database. Here, we see that we have a thousand customers in our database. We can also count the number of customers that have made purchases by counting the number of customer IDs in the order table. Let's go to Count Orders.sql. Run this query, I get a count of 200. However, we know that customers can make more than one order, so that will not give us a unique count of customers. In order to get the unique count of customers from our order table, we can use the distinct keyword. Let's open the Count Distinct.sql file. We'll click on Run. Now I get a count of 179, which is really the number of customers that have actually ordered something from our company. Let's say we also want to find the average amount of orders.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=95)** The average function finds the average of a set of numbers. In order to provide account summary for a group of similar rows, again, we can use the Group By statement. Let's work with some code examples. Open the Min Max Functions.sql file. We can join the customer table to the orders table to find the average total due by state. Let's build on this query to add some additional aggregate functions. We'll add the max function to find the maximum order amount, and the min function to find the minimum total due. And we'll also add the sum function to add all the orders for each state. Let's run this query. You can see in the results, all the aggregate values are the same for Utah. That's because there's only one order recorded in Utah. If we scroll down to Florida, we can see an average, minimum, maximum and some that are different. This is great summary information about the H+ Sport customers. Let's save this query as a view. Open the Create Views.sql file. Let's get this over here. Close out our previous SQL results. We'll call this view V_CustomerOrderSummary, and we can use it to incorporate into our web app for later. Just remove the Order By Class to prevent errors in the Create View statement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8)
> **CLI Commands:** find (5), make (1)
> **UI Navigation:** open the (3), go to (1), click on (1), scroll down (1)
> **File Paths:** customers.sql (1), orders.sql (1), distinct.sql (1), functions.sql (1), views.sql (1)
> **Env Vars:** sql (3)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to data manipulation](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=0)** - [Instructor] All of the syntax we've covered so far in this course are geared toward data retrieval. We've mainly used the select statement to retrieve data that we want to display. As a developer, you'll also have to create processes for creating, updating, and removing data. This is part of the [[SQL]] language called [[Data Manipulation]]. Data manipulation language or DML allows you as a developer to change the actual values of the data that is stored within the database tables. Common data manipulation functions include insert, update, and delete. The insert, update, and delete operations, along with select, are used to do CRUD operations, create, read, update, and delete. The select statement is a read or retrieval operation. We have used this operation in several examples already. It returns a result set of data from our database. The insert statement allows us to add new records to our tables, like adding a customer or adding a new order. Insert is one of the keywords in our create operation. We also use the create keyword when creating new tables or views in the data definition language. The update statement updates an existing row or set of rows in a table, like updating a customer's address or phone number. The update keyword is the keyword for our update operation. The delete statement allows us to delete rows of data. For example, if we need to delete
>
> **[1:34](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=94)** an old customer or user from our database. The delete keyword is used for our delete operations. Let's look at some examples. Let's start with the insert operation. We're going to add a new customer to our customer table. The syntax for inserting a new record is insert into the table name, the columns, and then they use the values keyword and we enter the values. To add a customer, we'll add the following code from the insert.sql file. You see we have insert into our customer table, our column names and the values for each column. Let's click on run, no errors in the console, but we can check the table to make sure the record was added. Let's open confirm.sql. Let's click on run. We can see that there's one record added here, to let us know that the row has been inserted into the table. I want to update the same record with an updated address, we'll use the update statement and also include a where clause to identify the record that we want to update. We'll also introduce the keyword set that sets the new value of the attributes that we're updating. Let's open the update.sql file. Here, we're updating the customer table, we're setting the phone number where customer ID is 9999. Here's the old phone number. Click on run.
>
> **[3:09](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=189)** There are no errors here. Let's run the select statement again to confirm that the record is updated with the new phone number. Notice if we do not include a where clause here, we'll update the attribute for every row in our database and most likely that's not what we want to do. Say our customer decides to no longer do business with us, we may want to delete that customer's record. Note that we don't have to include the field names here as the entire row will be deleted, depending on what is in the where clause. Let's open the delete.sql file. We'll delete from customer where customer ID is 9999. You can include the quotation marks or not. Let's click on run. We'll go back to confirm. Click on run and confirm that the record has been deleted.
>
> **[4:14](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=254)** We can also run account check to make sure that we are only down one row. If we delete more than one record here, we'd be in some serious trouble. Luckily, in SQL, we can perform transactions. Transactions are a single unit of work where data modifications can be made and committed to the database By default, when we perform SQL modification transactions, they are automatically committed to the database. However, you can explicitly run a transaction by adding begin transaction to the beginning of the statement and to the end of the statement with either commits or rollback. If an error occurs, we can rollback changes to what they were before the statement. If everything is good, we can commit and continue with the next set of processes. This is known as transact SQL and is an important part of the development process, especially when dealing with large transactions that involve cascading changes across the database. Transact SQL is helpful in ensuring the integrity of the database by preventing processes from continuing if an error has occurred in our [[Data Processing]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (9), [[Data Manipulation]] (3), [[Data Processing]] (1)
> **Env Vars:** sql (5), dml (1), crud (1)
> **UI Navigation:** click on (5), open the (2)
> **File Paths:** insert.sql (1), confirm.sql (1), update.sql (1), delete.sql (1)
> **Definitions:** is a  (1), known as (1), is an  (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)


### 5. Presenting Your SQL Results in Data Visualization

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started with data visualization](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=0)** - [Instructor] Let's bring it all together using the code we've learned in this course. We'll use fundamental concepts to create a simple, web-based dashboard using Jupiter Notebook and Plotly. In software applications, we use the CRUD operations to create, read, update, and delete data in the application code. Developers use a combination of these concepts with other advanced ones to create a successful data-driven application. Now, let's put some of our code into practice. I'm going to incorporate a dashboard using Plotly, an open source graphing library for [[Python (Programming Language)|Python]]. We'll build the dashboard using Jupyter Notebook and Python and display it on a webpage that shows how each salesperson is performing. If you aren't familiar with Python, no worries. Python is a programming language that can be used for lots of applications from [[Software Development]] to data analysis. Let's start by looking at the view V orders. It includes the sum of the total due, the count of orders by month, year, and the salesperson's full name. Let's start by opening the dashboard dot IPYNB file that contains our Jupiter notebook. Let's move this down a little bit and start from the top. Feel free to follow along with me as I go through each step in the Jupiter notebook. We'll begin by importing the Python libraries needed to run our code and connecting to the H plus sport database in the repo. Just go ahead and click
>
> **[1:32](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=92)** on the recommended Python environment. If the step is finished, you'll see that green check. This says it's okay to go ahead. We'll connect to the H plus sport database. Let's take a quick peek at our V orders table by running DF dot head. This is the head of our data frame in Python. We'll see our first five records in the table. Now let's plot this on a bar chart. I've already created a Python script that will demonstrate the total due by order date and salesperson. I also added a filter by salesperson so that the user can filter the data to show the sum of the total due for each salesperson. Let's click to run. You'll see a message that says your application is running on port 8050, so let's go there. You can go there by scrolling down and going to dash is running on [http://127.0.0.1](http://127.0.0.1) on port 8050.
>
> **[2:43](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=163)** You can click on the link and now you should see your dashboard running in an app. This could take a while to load, so be patient. It took me about two or three minutes to load. Here you can use your dropdown box to change the salesperson and you can see an order summary by salesperson here and interact with the data. Many [[Business Intelligence (BI)|business intelligence]] tools will have embed capabilities or APIs that we can call to add visualizations to a website. Some can have cost associated with it like a [[Tableau]] or [[Microsoft Power BI|Power BI]]. Plotly is open source and you can use it just like you did today in Python and Jupiter Notebook. To learn more about Python tools, check out the other courses in the library and also documentation on [python.org/about](https://python.org/about) and [plotly.com](https://plotly.com).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (11), [[Software Development]] (1), [[Business Intelligence (BI)|Business intelligence]] (1), [[Tableau]] (1), [[Microsoft Power BI|Power bi]] (1)
> **CLI Commands:** python (11)
> **URLs:** [http://127.0.0.1](http://127.0.0.1) (1), [python.org](https://python.org) (1), [plotly.com](https://plotly.com) (1)
> **Ports:** port 8050 (2)
> **Env Vars:** crud (1), ipynb (1)
> **UI Navigation:** click on (1), dropdown (1)
> **Versions:** 127.0.0 (1)
> **Tools:** jupyter (1)

#### [Creating data visualization](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/creating-data-visualization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/creating-data-visualization?u=76281980&t=0)** - [Instructor] Now it's your turn to create. In the repository for the course, you'll run the code for Create a dashboard.ipynb. This Jupiter Notebook contains the code to create a new dashboard from the V customer order summary view that contains the total sales, minimum due, maximum due and average due by state. Run through each step in the Jupiter notebook and note how we can incorporate [[SQL]] from this course into [[Python (Programming Language)|Python]], [[Pandas (Software)|Pandas]] and plot with Plotly to create a new web-based dashboard. I've updated the header to H plus Sport Sales Dashboard, and you can also look at the Plotly documentation if you're more interested in more ways that we can format the dashboard and make it even more interactive. Click on the link again from Jupiter notebook, and you've created your own web-based dashboard that you can share with the sales team for H Plus Sport. We can see that our webpage now includes the dashboard with our SQL queries that we created in this course. We can also use the filters that we created in Plotly right here on the webpage. Note that I'm using Plotly and Jupiter notebooks, but you can embed a dashboard into a webpage using [[Microsoft Power BI|Power BI]], [[Tableau]], Looker and many other data visualization software systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Python (Programming Language)|Python]] (1), [[Pandas (Software)|Pandas]] (1), [[Microsoft Power BI|Power bi]] (1), [[Tableau]] (1)
> **CLI Commands:** python (1), make (1)
> **Env Vars:** sql (2)
> **UI Navigation:** click on (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Leveling up SQL](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=0)** - We've reached the end of the course. By now, we've talked about what [[SQL]] is and how to use it. We've gone over some basic syntax to get information from a table and common functions to use that data. Then we brought it all together in a web visualization project using [[Python (Programming Language)|Python]]. We've done a lot, but this is only the beginning of incorporating SQL into your data driven web applications. So where do we go from here? If you're newer to data development, you should know that most calls to your data database occur on the backend. So if you're interested in using SQL for [[Web Development]], learning more about backend or even full stack web development may be a good idea. Also, this course was a high-level overview. You can create web apps to enter customers, update orders or allow customers to place their own orders but that's something we wouldn't do from a Jupyter Notebook. To do that, you should learn more about how to incorporate other more advanced CRUD operations and these can get really complex. Finally, there are a bunch of common [[Relational Databases]] used in web development. There's [[PostgreSQL]], SQLite, [[Microsoft SQL Server|SQL Server]], and that's not even scratching the surface. Good news, most of the SQL syntax is the same in various [[Database Management]] systems but how you apply it changes depending on the database that you're using.
>
> **[1:33](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=93)** You can check out some of our other courses on [[LinkedIn]] Learning for a deeper dive into the differences and more advanced SQL operations. SQL is still incredibly relevant and useful in both software and web development, analytics and [[Data Science]]. Good SQL fundamentals is a must have for any developer and a great skill to add to your resume. So congratulations! Again, I'm Nakia Simpson and here's to many successful development projects using your new SQL skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), [[Web Development]] (4), [[Python (Programming Language)|Python]] (1), [[Relational Databases]] (1), [[PostgreSQL]] (1)
> **Env Vars:** sql (9), crud (1)
> **CLI Commands:** python (1)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Speakers:** - we (1)


## Instructor

- [[Nikiya Simpson]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/sql-for-data-analysis-3271025/codespaces)

## Skills Covered

- Data Analysis
- SQL

## Path Context

### In [[Explore a Career in SQL Development]]
← [[SQL Server Intelligence- Cracking the Code of Enterprise Data]] | **5 of 8** | [[SQL Hands-On Practice- Solve Business Problems]] →

### In [[Moving from Data Scientist to Data Analyst]]
**1 of 10** | [[R for Data Science- Analysis and Visualization]] →

### In [[Advance Your Business Analytics Skills]]
← [[Power BI Data Modeling with DAX]] | **6 of 11** | [[SQL Hands-On Practice- Solve Business Problems]] →

### In [[Advance Your Skills in SQL]]
**1 of 5** | [[SQL Hands-On Practice- Solve Business Problems]] →

## Appears In

- [[Explore a Career in SQL Development]]
- [[Moving from Data Scientist to Data Analyst]]
- [[Advance Your Business Analytics Skills]]
- [[Advance Your Skills in SQL]]

## Related Courses

_Courses sharing skills:_

- [[Intermediate SQL- Data Reporting and Analysis]] — SQL, Data Analysis
- [[Data Analysis- Investigate with SQL]] — SQL, Data Analysis
- [[Advanced SQL for Data Scientists]] — SQL, Data Analysis
- [[Intermediate Sql For Data Scientists]] — SQL, Data Analysis
- [[SQL for Healthcare Professionals]] — SQL, Data Analysis

---

[↑ Back to top](#)