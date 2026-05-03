---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: database-foundations-database-management
url: "https://www.linkedin.com/learning/database-foundations-database-management"
level: Beginner
updated: 1/19/2024
learners: 196483
skills:
  - Database Administration
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFqmZR1AdSRWQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1613059527518?e=2147483647&amp;v=beta&amp;t=4btvXnkz0vAOPQXTpBPMLCJM8agCn7s3dTI-ZCFgyfQ"
linkedin_topic: Data Science
learning_paths:
  - '[[Introduction to Fundamental Skills for Data Work- Data Management]]'
  - '[[Database Foundations- From Concepts to Applications]]'
  - '[[Advance Your Database Administration Skills]]'
prev_courses:
  - null
  - '[[Database Foundations- Data Structures]]'
  - '[[Database Foundations- Data Structures]]'
next_courses:
  - '[[Data Management Essential Training]]'
  - '[[Database Foundations- Administration]]'
  - '[[Database Foundations- Administration]]'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Management","position":1,"total":6,"prev":null,"next":"Data Management Essential Training"},{"path":"Database Foundations- From Concepts to Applications","position":3,"total":5,"prev":"Database Foundations- Data Structures","next":"Database Foundations- Administration"},{"path":"Advance Your Database Administration Skills","position":3,"total":11,"prev":"Database Foundations- Data Structures","next":"Database Foundations- Administration"}]'
path_count: 3
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/database-administration
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Database%20Foundations%20Database%20Management.md)

![Database Foundations Database Management](https://media.licdn.com/dms/image/v2/C560DAQFqmZR1AdSRWQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1613059527518?e=2147483647&amp;v=beta&amp;t=4btvXnkz0vAOPQXTpBPMLCJM8agCn7s3dTI-ZCFgyfQ)

# Database Foundations Database Management

> In the realm of relational databases, the table is the main event, the showstopper, the lead singer, the king. However, there are several other components of databases that are just as vital to a fully functioning system. In this course—the third part of his Database Foundations series—Adam Wilbert turns the spotlight on the supporting cast of database management characters. He covers topics like 

> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-database-management) | Beginner | 196K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Managing database performance](#managing-database-performance)
  - [What you should know](#what-you-should-know)
  - [Set up the database servers](#set-up-the-database-servers)
  - [Create the Two Trees database](#create-the-two-trees-database)
- [**1. Database Views**](#1-database-views) (6 videos)
  - [Save queries as database view objects](#save-queries-as-database-view-objects)
  - [Create a database view](#create-a-database-view)
  - [Views and database maintenance](#views-and-database-maintenance)
  - [Views and database security](#views-and-database-security)
  - [Challenge: Create a view](#challenge-create-a-view)
  - [Solution: Create a view](#solution-create-a-view)
- [**2. Query Performance**](#2-query-performance) (5 videos)
  - [The query optimizer](#the-query-optimizer)
  - [Reading execution plans](#reading-execution-plans)
  - [View a SQL Server execution plan](#view-a-sql-server-execution-plan)
  - [View a PostgreSQL execution plan](#view-a-postgresql-execution-plan)
  - [Control query plans with hints](#control-query-plans-with-hints)
- [**3. Transactions**](#3-transactions) (4 videos)
  - [Transactions and data consistency](#transactions-and-data-consistency)
  - [ACID properties](#acid-properties)
  - [Commit and rollback transactions](#commit-and-rollback-transactions)
  - [Understanding concurrency and locks](#understanding-concurrency-and-locks)
- [**4. Data and Object Management**](#4-data-and-object-management) (5 videos)
  - [Explore the system tables](#explore-the-system-tables)
  - [Duplicate tables](#duplicate-tables)
  - [Delete data with TRUNCATE](#delete-data-with-truncate)
  - [Remove database objects with DROP](#remove-database-objects-with-drop)
  - [Create temporary tables](#create-temporary-tables)
- [**5. Functions and Stored Procedures**](#5-functions-and-stored-procedures) (6 videos)
  - [Add programming elements to the database](#add-programming-elements-to-the-database)
  - [Create a function](#create-a-function)
  - [Create a stored procedure in PostgreSQL](#create-a-stored-procedure-in-postgresql)
  - [Create a stored procedure in SQL Server](#create-a-stored-procedure-in-sql-server)
  - [Challenge: Write a stored procedure](#challenge-write-a-stored-procedure)
  - [Solution: Write a stored procedure](#solution-write-a-stored-procedure)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing database performance](https://www.linkedin.com/learning/database-foundations-database-management/managing-database-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/managing-database-performance?u=76281980&t=0)** - [Instructor] In a relational database, the table is king. But they're only the most visible object type. There are other components of a database that are equally important to a stable performance and complete system. And in my [[LinkedIn]] learning course, database foundations [[Database Management]], I'm going to introduce you to the supporting cast of database characters. We'll get to know view objects, which store select queries for later use. And creates a security layer between users and the data. We'll explore the query optimizer in execution plans to understand how to improve the performance of the system. And with stored procedures, we can introduce programming elements to the database that'll create a consistent end-[[User Experience (UX)|user experience]]. Hi, my name is Adam Wilbert, and I've made it my career to introduce people to the world of [[Database Development]]. We'll cover all these topics and more in this, the third course in the database foundation series. I'm glad you've chosen to join me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[Database Management]] (1), [[User Experience (UX)|User experience]] (1), [[Database Development]] (1)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/database-foundations-database-management/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is the third in the Database Foundation series and it's designed to build upon the information presented in the first two. Therefore, I expect that you're coming in with a little bit of database experience already under your belt. In the first course, we covered the client/server model and the structure of a relational database. The second course was all about building data tables using the [[SQL]] language and creating relationships with primary and foreign keys. If you feel comfortable with all of those topics, then you're ready to move forward here. If you need a refresher or are looking to get started in your journey on relational [[Database Development]], then I'd suggest beginning with Database Foundations, Intro to [[Databases]] followed by the [[Data Structures]] course first before continuing on here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Database Development]] (1), [[Databases]] (1), [[Data Structures]] (1)
> **Env Vars:** sql (1)
> **Cross-References:** we covered (1)
> **Speakers:** - [instructor] (1)

#### [Set up the database servers](https://www.linkedin.com/learning/database-foundations-database-management/set-up-the-database-servers-23386460?u=76281980)

#### [Create the Two Trees database](https://www.linkedin.com/learning/database-foundations-database-management/create-the-two-trees-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/create-the-two-trees-database?u=76281980&t=0)** - [Instructor] For this course, we're going to continue working with data for a company called TwoTrees that manufactures a line of olive oil [[Microsoft Products|products]]. I want to make sure that everyone gets the same results as I do in working with the data. And I don't want things to get mixed up with [[Databases]] that you may have created in the prior courses. So let's take a moment and create a fresh database that includes a number of different tables and rows of data so that we have something interesting to work with. I'm going to close the three tabs that are currently open in my [[Microsoft Azure|Azure]] Data Studio window. Then I'm going to go and start with the [[Microsoft SQL Server|SQL server]] instance I'll right click on it and choose new query. The first thing we need to do is create a database. I'm going to call this two trees with an underscore between the two words and then I'll follow that with underscore DBF three. This will make it clear that this database is the one that corresponds to the third part of the database foundation series. I'll press the run button and the database will get created on the server. I can then right click on the databases folder over here and choose refresh and I should see it right there. Now we need to add in all of the data. To do that, I've created a script inside of the exercise files for the course. Inside of the chapter zero folder is a file called two trees database dot TXT. I can open that up in my default text editor and then press control or command a to select everything
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-database-management/create-the-two-trees-database?u=76281980&t=94)** and then control our command C to copy it to my clipboard. Then we're returning back into Azure Data Studio. I'm going to highlight the create database line and get rid of it and then paste in everything from that exercise file. Now, this is a really long script. If I adjust my screen a little bit, you can see that it's made up of over 300 different lines. It's going to create some tables and fill in a bunch of different rows of data. Let's make sure that we're targeting the new to trees database by using this dropdown menu here and choosing it from the dropdown list. And then I'll press the run button to execute all of those commands. When it's done, we should be able to go over here to the table folder on the left and expand it and see the different tables that were created. You might need to right click on it and she was refresh in order to see those tables. At the very bottom of the scripts we have some select demands. This will allow us to view the data in each of the tables that was created. So let's take a look inside of the inventory schema in the categories table. Here, we have three different categories of products that were added. These all have a unique category ID. In the inventory dot products table, we have all the different products that are in the database. They have that category ID, the references, the inventory that categories table. We also have a schema for sales and inside of there ,we have a table for our different customers and there they are. Each of those customers, places different orders.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-database-management/create-the-two-trees-database?u=76281980&t=189)** There are the order numbers and each order is made up of many lines and we can take a look at that data by running line 329. This will allow us to match the different skews of the products to the order lines that were placed by the different customers. So that's the database setup on our SQL server instance. Let's go ahead and close this tab down and I'm not going to save any changes to the script and we'll do the same thing for our [[PostgreSQL]]. First, I'll right click on the database servers name and choose new query. Then we'll create a database again. I'll press the run button that'll create the database and then I can right click on the databases folder and choose refresh to see it right there. Then once again, we'll go out to our exercise files and I'll copy everything to my clipboard. I'll go back into Azure Data Studio, paste all of that in and then switch my database context to the new two trees DBF three database. I'll press the run button and this time I'm actually getting some errors and that's because there's some slight differences in syntaxes that we need to pay attention to for PostgreSQL. So let me go back up to the very top of the script. Here, it tells me that for PostgreSQL I need to make some changes. We need to comment out lines 23, 25 and 27. If I scroll down to the script, we'll find those right here and these are the go commands that SQL server needs but PostgreSQL does not use. So I'm going to type in two hyphens here on line 23.
>
> **[4:42](https://www.linkedin.com/learning/database-foundations-database-management/create-the-two-trees-database?u=76281980&t=282)** We'll do the same thing for line 25 and line number 27. The other thing that I need to do is make a change to the way that identity values are defined. If I scroll back up here to the top, it tells me that I need to also modify line 63 and 76. If I scroll down to line number 63 and 76 we'll see them right here in sequel server, we use the syntax identity, 100 comma one, to automatically assign identity values for the different order IDs. And PostgreSQL uses a different syntax and I have that over here on the right. Instead of just identity in PostgreSQL we need generated always as identity, start with 100 increment by one. I'm going to highlight this and copy it to my clipboard. Then I'll scroll back here to the left and I'll replace this value here, identity 100 comma one with all of that text. This is the way that PostgreSQL needs it written out. We'll also do the same thing on line number 76. Here, I'll scroll down and instead of identity one comma one, we need generated always as identity, start with one, increment by one. So once again, I'm going to copy this bit of text and I'll paste it over the identity one comma one value. Now we should be able to run through the entire script. So make sure nothing is selected. In fact, I can go ahead and scroll back up here to the very top and click my mouse [[Cursor]] here
>
> **[6:15](https://www.linkedin.com/learning/database-foundations-database-management/create-the-two-trees-database?u=76281980&t=375)** at the beginning of line number one. Then I'll press the run button and this time I get the expected results. All the different data tables were created and the values were filled in. If I come back over to the connection sidebar and right-click and choose refresh on the two trees database we can then expand the tables folder and there are all the different tables. Once again, if I go back to my script, scroll down to the very bottom, I can run through the different select statements. So there are my inventory categories. Here are my inventory products. Here are my sales dot customers values. The sales dot orders values and the sales dot order line values. So now we have a number of data tables to work with as we explore some of the different management objects and techniques that are available when building a relational database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL]] (7), [[Microsoft Products|Products]] (6), [[Databases]] (3), [[Microsoft Azure|Azure]] (3), [[Microsoft SQL Server|Sql server]] (3)
> **UI Navigation:** click on (5), scroll down (4), dropdown (2), right-click (1)
> **CLI Commands:** make (6), find (1)
> **Env Vars:** sql (3), dbf (2), txt (1)
> **Exercise Files:** exercise files (2), exercise file (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** setup (1)


### 1. Database Views

[↑ Back to Table of Contents](#table-of-contents)

#### [Save queries as database view objects](https://www.linkedin.com/learning/database-foundations-database-management/save-queries-as-database-view-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/save-queries-as-database-view-objects?u=76281980&t=0)** - [Instructor] When it comes to the types of objects that reside in a database, tables tend to get all of the attention, but there is another object type that's equally important, and they're called views. You know that old saying that if it looks like a duck, walks like a duck, and quacks like a duck, then it's a duck. Well, that actually does not apply to database views. View objects look like tables, can be queried like tables, return result sets like tables, but they're definitely not tables. Views are virtualized tables that pull records in rows out of your existing data tables and reconfigures them to suit a variety of needs. When you run a view, the server fetches the requested columns and rows from the underlying database tables, and it returns the values in the form of a record set. Now if you're thinking to yourself, that sounds a lot like what a query does, then you're absolutely correct. Views are simply queries. The same select queries that you've been working with that have been saved and turned into database objects. The main differentiator between tables and views is that tables store data and views do not. Views create a virtual table made up of rows and columns from one or more of your [[Databases]] tables. So what are the benefits of using views? First, views function like tables
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-database-management/save-queries-as-database-view-objects?u=76281980&t=94)** in that they can be queried against or joined to other tables for further refinement of the information that they return. Second, they don't take up very much space in the database since they don't actually store any data. They merely [[Fetch]] the requested data from the original tables when they're called, and third, views benefit security and development tasks by creating a bridge between the user that's requesting information from the database and the data itself. This allows you to change or mask the internal structure of the database in ways that are easy to manage with a minimum of disruption to the users of your database. In a well-designed database, it's often the case that no user ever actually queries a table directly, but is always funneled through view objects for all of their data retrieval needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Fetch]] (1)
> **Speakers:** - [instructor] (1)

#### [Create a database view](https://www.linkedin.com/learning/database-foundations-database-management/create-a-database-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/create-a-database-view?u=76281980&t=0)** - [Instructor] When it comes down to it, views are simply saved queries that are stored in the database and they provide a quick and secure way of exploring your data in various configurations. This gives you a big clue as to how to add them to your database. First, we need to start with our good friend, the standard select query. The file CreateView-Start in the exercise files includes this query that pulls information from a number of tables in the two trees database. The syntax is exactly the same on both the [[Microsoft SQL Server|SQL server]] and [[PostgreSQL|Postgres]] platforms. So we can run this on either database successfully. I'm going to demonstrate this on the Postgres [[SQL]] database. So right click on the two trees database in the Postgres server, choose new query, and then paste in the text from the exercise files. Let's run this query to see what it returns. This data provides a detailed look at each line of every order that's been placed. We can see the order ID number, a row for each line item in the order, who placed the order and when, and some information about the [[Microsoft Products|products]] that were ordered over here on the right. This query can be really useful in exploring the data that split up across four different data tables in the two trees database. But it's a lot to write out every time you need it. You can save the text of the query to an external file as I've already done with the exercise files. But then you're managing external resources alongside of your database. The best option is to save this query inside of the database.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-database-management/create-a-database-view?u=76281980&t=93)** And that's exactly what a view does. To turn this select query into a database view, we need to add a single line to the beginning. I'll click my mouse [[Cursor]] here, the very beginning of line number one, and move everything down so I have some room to type. To turn this into a view, we need the create view command. Next, we'll provide a name for the view. We named the view following the same rules as when we named data tables. And we want to continue organizing our database objects using schemas. Since this query is currently returning detailed information about all of the products ordered by each customer, it makes sense to put this view in the same sales schema with the data tables about our orders. So I'll create the view in the sales schema and I'm going to call it order details. Views can contain almost all of the same clauses as a select query. The only clause that you should not include in a view is the order by clause. Since the sequence that rows are returned in will be determined later. So make sure that you omit any order by clauses from your select queries when you turn them into a view. So online number one, I've got the command create view. I've named the view, and then I need the keyword AS. After that, we follow it with the entire contents of our select statement. This time when you run the command, we don't get a results grid because we're no longer asking for information to be returned.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-database-management/create-a-database-view?u=76281980&t=185)** We get the message that the object was created instead. To find the view in the sidebar, expand the views folder underneath your database. You'll see that new view listed right there. You'll see that it gets presented just like a data table. And in fact, we also have a columns folder that lists out all the different columns that the view is collecting from our main data tables. But we know that these are just virtual pointers back to the original data sources. If you ever need to remind yourself how the view is created, you can right click on the name and choose script as create from the dropdown menu. That will open up the command that created the view so that you can see what tables and columns are used and how they were related in the views definition. You can also remove a view from the database with a simple command if you want to get rid of it. I'm going to right click on the view again, and this time choose script as drop. This will show you the one line command that'll remove it from the database. It's simply drop view, and the name of the view. Okay, so let's close both of these tabs and return back to our original script. Now we can make use of this view. Let me come down here and give myself some more room, and come down to line number 19. First, we can pull all of the columns and rows from the view with select star from sales.order_details.
>
> **[4:40](https://www.linkedin.com/learning/database-foundations-database-management/create-a-database-view?u=76281980&t=280)** If I run just line number 19 by highlighting it first, you'll see that we get back exactly the same information that we got with the much longer select query. That's because this view is doing all of the hard work of gathering the requested rows and joining the tables together. Just like when querying tables directly, we can use a where clause on the view to filter the rows that are returned. For instance, if I'm only interested in seeing the items purchased on a specific order ID, I can add a where clause to our select statement here that says, where the order ID is equal to 105. This time when I query the view, we'll see that order number 105 had three different line items on. Or if I'm interested in seeing all of the order details for a specific company in a reverse chronological order, we can change the where clause to say where the company is equal to Wild Rose, for example,
>
> **[5:43](https://www.linkedin.com/learning/database-foundations-database-management/create-a-database-view?u=76281980&t=343)** and I can add an order by clause. Let's order by the order date, descending.
>
> **[5:54](https://www.linkedin.com/learning/database-foundations-database-management/create-a-database-view?u=76281980&t=354)** This will make it easy to see that Wild Rose's most recent order was number 114. It included a single product. There's only one line for order number 114. This included five bottles of the Extra Virgin Olive Oil in the 128 ounce size. So that's how views work. So they don't store data on their own, they only point back to the original data source. And they'll always present the most up-to-date values stored in your tables. They allow you to save complex select queries right inside of the structure of your database so that they're easily accessible by any of your database users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (3), [[Microsoft Products|Products]] (2), [[Microsoft SQL Server|Sql server]] (1), [[SQL]] (1)
> **UI Navigation:** click on (3), in the sidebar (1), dropdown (1)
> **CLI Commands:** make (3), find (1)
> **Analogies:** just like (2), for instance (1), for example (1)
> **Exercise Files:** exercise files (3)
> **Env Vars:** sql (2)
> **Code Identifiers:** order_details (1)
> **Speakers:** - [instructor] (1)

#### [Views and database maintenance](https://www.linkedin.com/learning/database-foundations-database-management/views-and-database-maintenance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/views-and-database-maintenance?u=76281980&t=0)** - [Instructor] When you create a view object, the views definition binds it to the names of your data tables and columns. Depending on your RDBMS platform this can have consequences for changes that you might want to make to your database's design down the road. For instance, special care will need to be taken if you want to rename a column after you've created views that include it. Let's take a look at the two trees database in the PostgresSQL instance where we previously created a view called sales.order details. First, I want to select a couple of columns from this view. So I'm going to right click on this database and choose new query, then we can do a select statement.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-database-management/views-and-database-maintenance?u=76281980&t=58)** We'll select the order ID, order date and company columns from that view. Now this view is piecing together data from two different data tables here. The company names are coming from these sales.customer's table and the order ID and dates are coming from the sales.orders table. But since we are querying a view that join between those two tables is handled by the views definition. And we don't need to include the join here in the select statement. But what happens if we rename a column in one of the original data tables. In the sales.customer's table if we take a look at that over here by expanding the tables folder in the two trees database in the PostgresSQL server and then we'll find the sales.customer's table and expand the columns folder. Now the company data that we're viewing here in the view is coming from this company column in the customer's table. Let's rename this column to something more descriptive. In PostgresSQL you can rename a column with the alter table statement.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-database-management/views-and-database-maintenance?u=76281980&t=135)** I'm going to alter the table sales.customers and we'll rename column company to company name. This'll just be a little bit more descriptive about the data that's in this actual column. So let me highlight line seven and eight and execute them in order to make that change to the structure of the database. And then in my sidebar, if I come back over here to the columns folder and right-click and choose refresh we should see that update right there. Okay, now the table column has been renamed, let's see how that affects our view. I'm going to query the view with the exact same syntax that we ran just a moment ago. We'll select the order ID, order date and company column from sales.order details. Now you might be surprised that we actually get results. We're still asking for the company column in the select statement and the results are showing a company column here. But we also know that there actually is no column in the customer's table called company anymore, we just renamed it. So what's going on? If I scroll down on my sidebar to find that view again and then right click on the sales.order details view and choose script as create, we can see what's happening. Look in the views definition to where it points to the company column, right here on line number nine. Notice that the line has changed from what we originally typed in the previous movie. Now it's referencing the company name column
>
> **[3:49](https://www.linkedin.com/learning/database-foundations-database-management/views-and-database-maintenance?u=76281980&t=229)** which is correct and it's added an alias with the AS keyword to return that column with the original name company. PostgresSQL was smart enough to recognize that the column renaming process would break the view, so it fixed it here as well. This behavior with the alias doesn't actually occur in [[Microsoft SQL Server|SQL Server]] though. So if you rename a table column on that platform you'll actually break the view and it'll have to be recreated using the correct names manually. So this behavior of having the view refer to columns using an alias that's different from the actual column names being used can be useful. You can change the design of your database and end users that make use of the view object won't necessarily need to update their queries. With aliases in the view definition they can continue requesting columns by their old names and the view will reroute the request to the new column names automatically. Now, if you do want to refer to this column by the new name in the view as well, you'll need to drop the view and recreate it with the current column name without the alias. Now, if I try and just remove this alias from this view definition, let me get rid of the AS alias portion and just rename this to customers.company name. If I try and run this script right now you're going to see this error,
>
> **[5:21](https://www.linkedin.com/learning/database-foundations-database-management/views-and-database-maintenance?u=76281980&t=321)** that it can't change the name of the view column company to company name. What we need to do is drop the view entirely and then recreate it. So here at the script I'm going to get rid of the comment here on line number three that'll enable the drop view command and then it'll create the script. Let's run it this time and the command was completed successfully. Now, if I go back to the other tab and try and select the order ID, order date and company columns from that view again, this time we're going to get an error. It says that the column company does not exist. At this point we have to refer to the column name by its current name, its company underscore name. Now, if I query the view again we get the results we expected. So that's what happens when we make changes to the names of a column with an attached view. PostgresSQL will attempt to keep the change in sync and slightly modify the views definition for you. SQL Server on the other hand won't make that kind of change. So things are slightly different on the SQL Server platform. Either way though you'll almost certainly want to go through your view objects and update them to continue pointing to the correct table names and columns after changes are made to the design of your database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (3)
> **CLI Commands:** make (5), find (2)
> **UI Navigation:** select the (3), click on (2), right-click (1), scroll down (1)
> **Env Vars:** sql (3), rdbms (1)
> **Cross-References:** go back to (1)
> **Analogies:** for instance (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Views and database security](https://www.linkedin.com/learning/database-foundations-database-management/views-and-database-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/views-and-database-security?u=76281980&t=0)** - [Instructor] Relational database view objects can play an important role in the security of your data. Instead of giving end users direct access to all of the data contained in a database, you can limit them to just the rows and columns that are relevant to their work. Here's a couple of different ways that you can leverage view objects to help add a layer of security to your valuable information. First, views can restrict access to data in a number of ways, they can expose only the rows and columns that you specify. For instance, a specialized view can be created that pulls only relevant columns from the underlying data table. By granting users permission to access only the view, and not the full table, you can effectively keep them from interacting with information that they shouldn't be able to see or modify. In this regard, views provide a level of security on your database by creating an intermediary filter that operates between the raw data and your database users. Second, they can be configured to only provide an aggregated summary of anonymous data while masking individual data points. For instance, a data table could be used to store test scores for individual students in a class. A view based off of that table then uses a group by clause with some aggregate functions. Researchers would then query the view to access summary [[Statistics]], such as the minimum, maximum, and average test score without revealing the sensitive details
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-database-management/views-and-database-security?u=76281980&t=95)** about each student's individual grades. And third, views can provide a base for other queries eliminating the need to reveal all of your data tables and columns while still giving users the ability to construct the queries that meet their changing needs. Because of the security benefits, there's one thing that you should always avoid when creating a view. And that's the use of the asterisks character in the select statement. Because views are meant to control access to the underlying data tables, you want to explicitly declare which columns will be revealed instead of taking a shortcut of selecting everything with the asterisk character. If an asterisk is used such as in select star from the table name, and the original table later grows, you might accidentally reveal sensitive information in the view without realizing it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1)
> **Analogies:** for instance (2), such as (2)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a view](https://www.linkedin.com/learning/database-foundations-database-management/challenge-create-a-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/challenge-create-a-view?u=76281980&t=0)** - [Instructor] Views are an important object used in the management of your database, but they're really just queries that are saved to the system. If you can write a query, then it's a fairly straightforward process to convert it into a view. So any exercises that test your ability to create a view is really a query exercise in disguise with one added step. With that said, I do want to challenge you to create a couple of useful views for the Two Trees database that'll make exploring the data that it contains a little bit easier. The first one should be an aggregate view that displays the number of orders placed by each company. The second view needs to display a calculation that will multiply the quantity of a product ordered by its price for each order line. This challenge should take about 10 minutes or less to complete. In the next movie, I'll show you the steps that I take to create both of these views in the database. Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create a view](https://www.linkedin.com/learning/database-foundations-database-management/solution-create-a-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/solution-create-a-view?u=76281980&t=0)** - [Instructor] I hope you were able to add in the two requested views for the two trees database. Let's walk through the solution together. I'm going to continue working on the two trees database. That's in my [[PostgreSQL]] server, since that's the one I've been working on and making changes to. So let's go ahead and right click on that and choose new query and get started here. I'm goona make a couple of notes at the top just so I can remember what it is that we're trying to do. And so the first part of the challenge asked to aggregate the number of orders placed by each company. Just going to create that as a little note here at the top there. And then the second part of the challenge asked to multiply the quantity times the price for each of the order lines. So that is the two things that we're trying to do. So let's go ahead and get started with this first one. We're going to aggregate the number of orders placed for each company. So let's take a look at the orders table here, the sales.orders table and get a feel for the data that it contains. So let's select everything from the sales.orders table and select star from sales.orders. We're off to a great start there. All right, select everything from sales.orders. And there is the orders table. Now we want to aggregate the number of orders placed by each company. And each company does have a unique customer ID.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-database-management/solution-create-a-view?u=76281980&t=92)** So we could use this column here but to get some more interesting information, let's actually combine this information with the sales.customers table and that'll give us the customer's actual name and not just their ID number. So let's select everything from sales.customers. And we'll take a look at both tables together. So here is the orders table and here is the customers table at the bottom. And you can see if there's a relationship between these two based off of this customer ID column. And that'll give us the full company name which will be a little bit more easy to read if we include that in our view. So let's go ahead and start creating the view. The first thing I need to do is select the order ID from the orders table. And I also want the company name from the customers table. And that's going to be from the sales.orders table and there's going to be a joint of the customers table. And I just noticed, not that this matters, but I just noticed there's extra space up there, so let's get rid of that. Okay, come back down here to line number six. From the sales.orders table we're going to join sales.customers. And that relationship is on the customer ID field in both of those tables. So orders.customer ID is equal to customers.customer ID. All right, let's test out this select statement.
>
> **[3:07](https://www.linkedin.com/learning/database-foundations-database-management/solution-create-a-view?u=76281980&t=187)** I should merge columns from both tables. All right, there we go. There's our order IDs and the company named that placed each of these orders. So we're almost there. The challenge said that we want to aggregate the number of orders for each company. So we want to count up how many orders are for each company. So in order to do that, we need to add in a group by clause. So we're going to group by the company name. And we also need to include an aggregate function or the count function to count up the number of order IDs. So I'll come back up here to line number five. We'll throw in a count function. We'll count the order IDs. And we should also give this in alias. So let's call this new column as number of orders.
>
> **[4:01](https://www.linkedin.com/learning/database-foundations-database-management/solution-create-a-view?u=76281980&t=241)** Okay, let's go ahead and run just this portion of the query. And there is our query. It's counting up the number of orders for each company. So now all we need to do is turn this into a view. So we'll create, and let's call this view sales schema. So we'll put it in the sales schema. It'll be order counts AS. So we create the view sales.order counts AS and then everything that's in this select statement. Let's go ahead and run all of that. Execute it, okay, that creates the view. And now we can test it out. So we'll select everything from the view and there it is. And then we can actually take this one step further and order the results that are in the view by adding in an order by clause. So order by the number of orders. And let's do a descending so that the companies with the highest number of orders will appear at the top of the results. And so there we go. We can see the Green Gardens, Blue Vine and Bread Express all have four orders. And the other three companies only have three orders each. And so that creates the view for the first part of the challenge. Let's turn our attention to part number two. Multiply the quantity times price for each order line. All right, let's go ahead and get that first part off the screen. So we need to take a look at some different tables here. We want to take a look at the order lines table first. Yeah, that's good.
>
> **[5:35](https://www.linkedin.com/learning/database-foundations-database-management/solution-create-a-view?u=76281980&t=335)** And right in line 16. Okay, so there's our order lines table and it gets going to give me the quantity of each product that was ordered on each line but it doesn't tell me anything about price. And so for the price information, we need to take a look at the [[Microsoft Products|products]] table. Let's pick in that one real quick. And that's in the inventory schema. Okay, so let's select everything. Let's do both of these at once now. Okay, so here is the order lines and at the bottom is the products. And so we need to multiply the quantity column times the price column in this other table. And that'll give us the line price for each order line. So we can combine that together. Which columns for this first table do we want? Let's just pull the line ID. And that's from the order lines table. And then, we also need the quantity from the order lines table. And then from the products table, we just need the price. And that's going to be from sales.order lines. And we're going to join that to inventory.products. And the relationship is based off of this sku column. So thus has the unique sku for each of our products. So order lines.sku is equal to products.sku
>
> **[7:11](https://www.linkedin.com/learning/database-foundations-database-management/solution-create-a-view?u=76281980&t=431)** All right, let's run the select statement. All right, so that's showing me the quantity of products that was ordered and the price of that individual product. But what we need to do is multiply this quantity times the price. So let's go back up here and continue making some changes. I'm just going to space these out again. Now the challenge didn't ask for the quantity and the price columns so we can actually get rid of both of those. And in fact, I'm just going to turn this right into my multiplication calculation. So I'll take order lines.quantity and multiply it by products.price now. And we should also give us an alias while we're doing that calculation. So let's call this AS line total price. Okay, let's run this again. Okay, so there's a line ID and the total price for that line that takes into account the number of individual products that were ordered. And so that finishes the challenge. Now, all I need to do is turn this into a view.
>
> **[8:15](https://www.linkedin.com/learning/database-foundations-database-management/solution-create-a-view?u=76281980&t=495)** And let's put this in the sales schema and let's call it total price. Remember to put the AS keyword at the end of that. So create view sales.total price AS and then everything from that select statement. And run that. Okay, that created the view and let's test it out. So I'll select star from the view sales.total price.
>
> **[8:43](https://www.linkedin.com/learning/database-foundations-database-management/solution-create-a-view?u=76281980&t=523)** And there is the same information, again that we're getting it out of the view now without having to do all this typing up here. And we actually take this one step further and combine the results from this view with the order details view that we earlier in the course to get lots of detailed information. So I can say something like this, select star from sales.order details, which is the first view that we made in this course. And we want to join all of that to the sales.total price view. And the relationship between those two can be made on the line ID because this column is contained in both of these views. Both the total price view and the order details view. So we can say order details.line ID is equal to total price.line ID. And this gets a little bit long lead, break this out just so you can see it all on the screen at once. In fact, I'm just going to move this from clause down. Okay, so select star from the first view. Join it to the second view base off of this relationship there, that's good. Select all of this and run it. And there is some expanded details. So now we're seeing everything from the first view, the order details view, get all that information here. And then if we scroll over here to the right we can find the line total that's being calculated in the second view.
>
> **[10:15](https://www.linkedin.com/learning/database-foundations-database-management/solution-create-a-view?u=76281980&t=615)** So I can see that the first line item was for two products at 15.99 and there is the total price for the line. And we had two products at 26.99 and there is a total price for that line. So that completes my solution to this challenge. And the two views that I came up with are here. And I'm going to go ahead and scroll this up so we can see everything on the screen a little bit better. Let's see, here is the second create view statement and here is the first view statement. So if you came up with a different solution that still gets the same relevant information then that's still really all that's important. I'm going to save my [[SQL]] commands as solution-views-complete in the exercise files so that you can compare your code against mine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (11), [[PostgreSQL]] (1), [[SQL]] (1)
> **CLI Commands:** make (1), find (1)
> **Versions:** 15.99 (1), 26.99 (1)
> **UI Navigation:** click on (1), select the (1)
> **Env Vars:** sql (1)
> **Cross-References:** earlier in (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)


### 2. Query Performance

[↑ Back to Table of Contents](#table-of-contents)

#### [The query optimizer](https://www.linkedin.com/learning/database-foundations-database-management/the-query-optimizer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/the-query-optimizer?u=76281980&t=0)** - [Instructor] The process of querying your tables and retrieving information from the database is almost certainly the most common activity that your system is going to perform. Optimizing query performance is a critical component of developing a database, and it all starts with understanding how queries are actually executed. Query optimization becomes critically important as the size of your database grows and as the number of simultaneous users that it supports increases. If you can shave half a second off the time that it takes a frequently accessed query to return results, then it's worth the effort to find those gains. Half a second might not seem like much but multiply that out times a million requests in a day and it quickly adds up to a significant savings in time, resources, and ultimately money. One technique for speeding up queries is to throw more [[Hardware]] at the problem. Upgrading to faster memory or hard disks, splitting data tables and indexes across additional drives that can be read and written to simultaneously, adding additional processor cores. These things will certainly help a database server run faster. But this is an expensive option and it often only provides a bandage over larger problems with the database's design. With more database operations moving to cloud hosting platforms, scaling up and down with elastic server capacity makes those kinds of hardware changes easier than ever. However, it's always going to be better
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-database-management/the-query-optimizer?u=76281980&t=95)** to address query performance in software first by understanding what happens when you execute a query and how the database engine processes your request. One of the things that makes the [[SQL]] language popular is that you use it to describe the end result that you want. Compare that to most other programming languages where you explicitly script out every step in a process. When querying a database with SQL, you largely don't care about all of the steps that the database engine needs to perform in order to find the information in your data tables. Filter and join rows together and return the result set that you asked for. In other words, you say what you want and the database engine figures out how to do it. To understand how this works, let's start with the structure of a select query. When you write out a query, you list out the clauses in a specific order. Select, from, join, where, group by, having, and finally, order by. The written query starts with the select clause which lists the columns that you want returned. Then the from and join clauses that establish which tables they can be found in. The where clause filters rows. The group by and having clauses are used to aggregate the remaining rows together. The final rows are returned in a sequence dictated by the order by clause. The actual execution of the query is a little bit different. The sequence that the database engine goes through
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-database-management/the-query-optimizer?u=76281980&t=190)** to return your requested results moves the select command down to the second to last step. The initial operations, from, join, where, group by, and having all work together to gather and filter requested rows from the database. It's not until all of that is processed that these specific columns that you've asked for are selected and the order by clause finalizes the sequence that the rows are displayed. The component of the database engine that figures out how to best satisfy a query and perform all of these steps is called the query processor or the query optimizer. It's the optimizer that determines how to actually do what you're requesting. For any given query, there are going to be multiple different ways that the query optimizer can go about the process of returning the requested result. If you ask for all of the rows from two tables. Table A and table B, and you want them joined together, it's the optimizer that attempts to figure out if it's faster to get all of the rows from table A first and then join them to B or get all the rows from table B first and join those to A. Depending on how many rows are in each table and the types of data that they include, one method might be faster than the other and it's up to the optimizer to choose the best, shortest, and fastest path through the data to the final result. But sometimes the query optimizer gets it wrong.
>
> **[4:44](https://www.linkedin.com/learning/database-foundations-database-management/the-query-optimizer?u=76281980&t=284)** If incorrect assumptions are made about your data, it may choose a path that's not optimal or fastest. In the end, making sure that your queries perform well is all about helping the optimizer make the best choice from all of the available paths that it can go down.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[SQL]] (2)
> **Definitions:** is a  (2), is an  (1), in other words (1), is called (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** sql (2)
> **Speakers:** - [instructor] (1)

#### [Reading execution plans](https://www.linkedin.com/learning/database-foundations-database-management/reading-execution-plans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/reading-execution-plans?u=76281980&t=0)** - [Instructor] When processing queries, the database servers query optimizer determines how to perform the task at hand. Which exact steps to take, in which sequence are needed to best arrive at the final solution. The path that's chosen is known as the queries execution plan. And these plans are available to look at anytime that you want. Reviewing execution plans can give you critical insight into what the database query processor is actually doing behind the scenes. This information can guide optimization efforts and help you write more performant queries. The important thing to know about an execution plan, is that it's developed before any actual data is read from your data tables. So the optimizer knows basic information about the structure of the table and whether any particular columns have indexes. It will also sometimes know and approximate number of data rows that the table contains and some additional [[Statistics]] about the distribution of values. But it doesn't know anything about the actual values that the table contains. And it has to estimate the number of rows returned by intermediate steps in the query. You could say that the query optimizer chooses an execution plan based largely on a system of educated guesses. So when you ask for all of the customers with the first name of Jeremy, the optimizer doesn't know ahead of time whether that's likely to return just a single row of data, or if all of your customers happen to be named Jeremy,
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-database-management/reading-execution-plans?u=76281980&t=96)** and every row in the table will need to be returned. And if the query goes on to join to other data, then it might make a big difference in the techniques employed, depending on whether there's just one row or 1000 rows that need to be joined together. Each relational database platform has a different secret sauce for how their execution plans are developed, evaluated, and ultimately chosen by the query optimizer. Some platforms generate a new plan from scratch every time a query is executed. Other platforms keep a record or a cache of old plans for later review. [[Microsoft SQL Server|SQL server]], for example, can choose one plan the first time a query is executed, deliberately choose a different plan the second time the same query is executed, and then compare the results of each method. Over time, this internal and automatic AB testing can guide the optimizer to make even better execution plan choices. Every database will benefit from a unique blend of optimizations. And each RDBMS platform will have its own techniques for implementing those optimizations. This makes it difficult to give specific recommendations here, but it's worth spending a few minutes to understand the query execution plan in broad strokes. And see the kinds of things that you'll run across when viewing an execution plan, no matter what RDBMS platform you're working with. So let's learn some of the vocabulary that you'll encounter when viewing an execution plan. First, we need to know the difference
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-database-management/reading-execution-plans?u=76281980&t=192)** between a scan and a seek. A scan occurs when the database engine reads through all of the rows in a table from top to bottom. A seek on the other hand occurs when the query processor can jump directly to a subset of specific rows. Generally this occurs when you can locate rows with the aid of an index that points to the exact pages on disk that are of interest to the query processor. And it's able to skip over data that is irrelevant for the task at hand. When rows are located using a seek operation, less data needs to be read which leads to faster processing times. But even when a column does include an index, it doesn't mean that the query processor will always choose to use it. If the optimizer determines that the majority of table rows will be required, or if the full table is very small, the query processor can choose to ignore the index and perform a full table scan anyway. This is one of the reasons why reading through the query execution plans can provide beneficial information when evaluating database performance. Just because you do have an index on a table and your queries include those index columns, doesn't mean that the index is actually being used by the query processor. You need to review the actual execution plans for the query that you're commonly executing to determine whether indexes are providing a net benefit to the RDBMS. The other common operations that you'll find
>
> **[4:44](https://www.linkedin.com/learning/database-foundations-database-management/reading-execution-plans?u=76281980&t=284)** when reading execution plans, occurs when rows are joined from multiple tables. The most common joint operation is called a nested loop. This occurs when the query processor performs a full scan through all of the rows in the first table once for every row in the second table. Matches are found for each row, one at a time by comparing each row to every other row in the related table. For two tables with lots of rows, this can be a time consuming operation, but it doesn't require any indexes. And it'll ensure that every matching row between the two tables are located. For tables with a few rows though, a nested loop could be a very efficient process. When indexes are available or tables are large, a merge join can occur. This operation first sorts both tables, and then they can be scanned at the same time, matching rows together as it goes. This operation is much faster than a nested loop join since both tables are only scanned once but it requires that data be sorted first which you can add some additional preparation time depending on how the data is originally structured. Finally, there's a hash join. Hash join reads in all of the contents of one table, and creates an in-memory hash table, sort of like an index. Then the second table is read in and keys are matched up. They're efficient in large table joins and for intermediate steps in the execution process. And they can create outputs that can be reused
>
> **[6:17](https://www.linkedin.com/learning/database-foundations-database-management/reading-execution-plans?u=76281980&t=377)** by other joint operations in the same query. So those are some of the common query processing steps or what's referred to as nodes that you'll find when you read through an execution plan. Scans and seeks are used to locate rows. Joins are used to merge tables and intermediate datasets. You'll also find sorting operations and calculations mixed in as additional node types in the final plan. Each of these nodes represent a single operation in the process of moving from your query request to the final result set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **CLI Commands:** find (3), make (2), node (1)
> **Env Vars:** rdbms (3), sql (1)
> **Definitions:** known as (1), is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [View a SQL Server execution plan](https://www.linkedin.com/learning/database-foundations-database-management/view-a-sql-server-execution-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/view-a-sql-server-execution-plan?u=76281980&t=0)** - [Instructor] Different relational [[Database Management]] systems will have different capabilities when it comes to displaying information about query plans. And each RDBMS will decide on different plans by the internal optimizers even when given the exact same query on the exact same data. So, specific [[Performance Tuning]] strategies are highly variable. It'll be unique for every database and platform. But most platforms will allow you to review the query plan so that you can see what's happening behind the scenes and how your queries progress from the written command to the final result. I want to take a look first at how query plan information is exposed in [[Microsoft SQL Server|SQL server]]. And then we can compare to how [[PostgreSQL]] displays the same plan information. I currently have the text from the ExecutionPlan-Start file here in a new query window that's connected to my SQL server database. To get here, just right click on the [[Databases]] name and your connection sidebar, choose new query and then paste in the text from the exercise files. Now, before we get too far, I need to make one small change to the structure of this database. In the PostgreSQL version of the two trees database, we renamed a column in the customer's table and I want to make the same change here just to keep both databases in a consistent state. To do that in SQL server, you use a store procedure called sp_rename. And I have the text of this command on line number six. So we're going to execute sp_rename
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-database-management/view-a-sql-server-execution-plan?u=76281980&t=94)** and we're going to rename these sales.customers.company COLUMN to company_name. Let me make sure that line six is highlighted and press run to make that change to the database and if I explore my tables folder and expand the customer's table, and we'll see that it's updated here. In fact, I actually need to right click on the columns folder and choose Refresh, and there is the new name. So now both of our databases are the same again and we can turn our attention to the query that I have written out starting on line number 10. In fact, let's just highlight everything from line 10 down to 19 and run it so we can see the result. Now, this query pulls information from four different data tables and then it aggregates all of the individual order data into some useful [[Statistics]] about each customer. We get the company name as well as a count of how many orders they've placed and the total amount of money that they spent with two trees [[Microsoft Products|products]]. In order to view the query plan that allowed the RDBMS to translate our query into these results, we can use the explained button up here on the top of the toolbar. What appears on the bottom of the screen is a diagram that outlines all of the individual steps or nodes that it takes to process our query. The diagram is read from right to left. So you can see that it ends with a select command over here on the far left node. Let's scroll over to the right to see where everything begins. The query processor starts with a scan
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-database-management/view-a-sql-server-execution-plan?u=76281980&t=189)** of the clustered index of all of the rows in the orders table. And you can see that in this node in the upper right-hand corner This makes sense because the query needs all of the rows from the entire orders table for this query. So there's no need to seek to a specific row. It just scans everything. If you hover your mouse over each node, you'll see detailed information about the step. In fact, let me scroll down on my screen a little bit more so I can see the full details. At the bottom, it says what database object this step is working with. In this case, these sales.orders table. It also shows information about performance costs in terms of IO capacity and CPO load. I can see those values listed right here. In fact, let me scroll over to the right a little bit and there are the estimated costs. The estimated operator cost shows how much this step contributes to the overall query. So on my system, it says that this step alone represents 7% of the entire queries load on my system. Once the orders table scan is complete, that information is passed to the next node. In this case, it's a sorting node. This node costs twenty-five percent of the query's full load. So in other words, it takes more than three times the system resources to sort the values than it does to perform the initial scan. If you review the sorting nodes details, you'll find at the bottom that the sort
>
> **[4:41](https://www.linkedin.com/learning/database-foundations-database-management/view-a-sql-server-execution-plan?u=76281980&t=281)** is organizing the order information by the customer ID values ascending. After the sort, we move over to a nested loop join. This will merge these rows with the rows coming from a Sikh that was performed on the customer's table with this node here. Since the customer's table has a clustered index on the customer ID values, they're already in the same sequence as the newly sorted order data. And because the data rows are in the same sequence now, the join represents a negligible load on system resources. This step actually has almost zero cost. You can continue exploring each node to see how the data is read out of each table, and how it's merged into the final result. Taking a look at the bigger picture, you can see that the first sorting operation represents the node with the highest cost. In the case of this query, it's a full quarter or 25% of this query's cost in terms of time and energy. So if you want it to try and increase performance of this query, this node is a good place to start for the largest potential gains. Maybe we can pre-sort the orders data by storing it differently on desk or creating an index on the customer ID column. That way the query doesn't need to spend time sorting those values every time it's run. In any case, exploring the query plan is where those kinds of insights are going to come from. Now, PostgreSQL has a slightly different take
>
> **[6:15](https://www.linkedin.com/learning/database-foundations-database-management/view-a-sql-server-execution-plan?u=76281980&t=375)** on the same kind of information, so let's take a look at that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (3), [[PostgreSQL]] (3), [[Databases]] (3), [[Database Management]] (1), [[Performance Tuning]] (1)
> **CLI Commands:** node (10), make (4), find (1)
> **Env Vars:** sql (3), rdbms (2), column (1), cpo (1)
> **Code Identifiers:** sp_rename (2), company_name (1)
> **Definitions:** is a  (2), in other words (1)
> **UI Navigation:** click on (1), scroll down (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** picture (1)

#### [View a PostgreSQL execution plan](https://www.linkedin.com/learning/database-foundations-database-management/view-a-postgresql-execution-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/view-a-postgresql-execution-plan?u=76281980&t=0)** - [Instructor] We just reviewed the query execution plan, as it's displayed for a [[Microsoft SQL Server|SQL Server]] database. Now let's take a look at the same information in [[PostgreSQL]]. I'm going to move this down on my screen a little bit, and copy all of the exercise file scripts to my clipboard. And then I'm going to collapse my SQL Server database and come over the the [[PostgreSQL|Postgres]] version. Let's right click on it, choose new query, and paste in all of that text. Now we don't need to do any column renaming. So I'm going to highlight all of this on line one, down to eight, and get rid of it. And we'll just start with this line that says explain. Now in the Postgres database, you'll notice that we don't get the same explain button up here on the toolbar. But Postgres does have an explained command that we can add to the beginning of a query. I'm going to uncomment this portion here on line number one. So instead of just running the select command, I'm going to start with explain, analyze, and then the query itself. Now when I run this query, instead of getting the queries results, I get it's actual query plan. This is the same sort of information that we got in SQL Server, though it's not in a graphical diagram. We need to actually read through each of these lines, in order to see the full step that needs to happen in order to process this query. I'm going to rearrange this on the screen a little bit, so we can see all of the steps. Now at the very bottom, we get details on how long it took to generate the plan, and how long the query takes to execute. Each line with an arrow, is a node.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-database-management/view-a-postgresql-execution-plan?u=76281980&t=95)** So it starts at the bottom on line 15 here, with this index scan. This is occurring on the customer's table. Any lines below a line with an arrow, for instance, this one right here, are additional information about that node. Inside of the node, we have some information about the cost of each node, and time spent, listed out here in the parentheses. After the index scan, we generate some hash keys from a scan of the [[Microsoft Products|products]] table, here on line number 12. Eventually, this all gets fed into a hash join, up on line number four. This will merge the hash that's coming out of the products table, with information coming out of all the other tables. And at the very top, we have the aggregate function, that returns the final data. So as you can see, there's similar information presented here, about the query plan in PostgreSQL, though it might be a little bit more difficult to read than the diagram that we get in SQL Server. In any case, this is the raw information that we'll need to understand, when it comes time to really fine tune the performance of your most active queries. Every database is different, and every platform takes a different approach. So my best advice here, is to seek performance optimization advice, that's specific to your platform. Either direct, from the RDBMS vendor, or through user forums that are dedicated to your platform. Review these query plans regularly, and start to get a feel for the baseline performance
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-database-management/view-a-postgresql-execution-plan?u=76281980&t=189)** on a typical workload. Then you can develop potential enhancements, and then test, test, test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (4), [[PostgreSQL|Postgres]] (3), [[PostgreSQL]] (2), [[Microsoft Products|Products]] (2)
> **Env Vars:** sql (4), rdbms (1)
> **CLI Commands:** node (4)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Control query plans with hints](https://www.linkedin.com/learning/database-foundations-database-management/control-query-plans-with-hints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/control-query-plans-with-hints?u=76281980&t=0)** - [Instructor] The query optimizers included with each relational [[Database Management]] system have gotten really good over the years. A lot of engineering resources have been poured into making sure that they operate at the highest levels, and choose the most optimal execution plans. So the best practice is to just let them do their job in determining how best to [[Fetch]] your data and return the results that you've asked for in your queries. However, some RDBMS platforms do allow you to override the query optimizer, and force a particular technique. This involves adding hints into the syntax of your query. To review, let's start with the same query that we executed in the prior movie on [[Microsoft SQL Server|SQL server]]. I'm going to highlight lines two through 11 in the script here, and then press the explain button. When I view the execution plan, SQL server determines that the best way to proceed with this query is to use a couple of nested loop joins between the various tables. We can force the optimizer to choose a different method here. Let me scroll down in the script a little bit to the query that starts on line number 15. Here I have the exact same query again, but this time, instead of just saying to join our tables together, I'm forcing an inner hash join on lines 21, 22, and 23. This will override the query processor's choice, and enforce my own decision
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-database-management/control-query-plans-with-hints?u=76281980&t=93)** on how this query is to be processed. If I highlight lines 15 down to 24 and press the explain button again, you'll see the difference. The internal processes that we move through are very different now. Now we have hash matched joins, and a few of the other nodes have been rearranged or modified to accommodate this different approach. However, if we press the run button on this query, you'll see that we get the exact same results in the end. So forcing a hash join doesn't have any effect on the final output. We can also force a different type of join with a merge hint. I've got that scripted out, starting on line 28, and you can see that this query includes inner merged joints for each of the three joints. Once again, I'll select everything from line 28 down to 37 and press the explain button. And you'll see that this query plan includes merge joins at every step. Once again, the execution plan is forced into using this method for joining our tables together. So there are three different ways that we can get to the same final result. Which way is best though? The only way to figure that out is to run lots of tests on your own data. The vast majority of the time, it's best to let the query optimizer choose the best method from all available choices. But occasionally, and very rarely, you might find that your query performs consistently better with a different approach. If that ever occurs, you can hard-code that method
>
> **[3:07](https://www.linkedin.com/learning/database-foundations-database-management/control-query-plans-with-hints?u=76281980&t=187)** into the syntax of your query with hints.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (2), [[Database Management]] (1), [[Fetch]] (1)
> **Env Vars:** sql (2), rdbms (1)
> **Best Practices:** best practice (1), it's best to (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)


### 3. Transactions

[↑ Back to Table of Contents](#table-of-contents)

#### [Transactions and data consistency](https://www.linkedin.com/learning/database-foundations-database-management/transactions-and-data-consistency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/transactions-and-data-consistency?u=76281980&t=0)** - [Instructor] When modifying data that's stored in your tables, it's often the case that certain changes will have to be made at the same time in order to keep values in a consistent state across your data tables. For instance, when a customer places a product into their online shopping cart, you need to add the item to their cart and simultaneously remove the item from your inventory. If you don't do both steps at exactly the same moment, it could be possible for two different customers to put the same item in their carts at the same time, and that would cause you to oversell the item and potentially upset one of your customers when you're unable to fulfill their order. We need a way to ensure that multiple changes to the database happen at the same time. The way that we do that is by combining several commands together in a single operation called a transaction. Transactions create a single unit of work out of many different commands. The nice thing about transactions are that the entire batch of commands are evaluated together as a whole. If all of the commands inside of the transaction finish successfully, the entire transaction will complete and update the database all at once. On the other hand, if one of the statements inside of the transaction fail for any reason, say the command is interrupted or violates a table constraint or the database becomes unresponsive halfway through. If there's a failure of any command
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-database-management/transactions-and-data-consistency?u=76281980&t=92)** within the transaction at all, the entire transaction fails. This means that any database changes that were successful are undone, a process that's called a rollback. This leaves the database in the same state that it was in before the transaction even began. Wrapping batch of related commands into a single transaction helps ensure that the state of the data remains consistent and trustworthy whenever you're creating new rows, deleting rows, or modifying existing rows in your data tables. That's because the entire batch will either succeed or fail together.

> [!info]- Semantic Content
>
> **Definitions:** means that (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [ACID properties](https://www.linkedin.com/learning/database-foundations-database-management/acid-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/acid-properties?u=76281980&t=0)** - [Instructor] In order to make sure that transactions maintain the consistency of your data, they need to follow a group of properties that go by the wonderful acronym ACID. Transactions must adhere to the following properties. First, they must be atomic. Transactions either fully complete or entirely fail. There is no middle ground where some actions within a transaction are made to the database and others are not. It's all or nothing. Transactions must also be consistent. This refers to the correctness or the trustworthiness of the data. In a bank's financial system for example, when transferring money from one account to another, the total amount of money needs to be the same before and after. If extra money suddenly appears or money went missing then that would certainly be a problem for the bank. A consistent transaction would mean that there would be no net gain or net loss of funds across all of the accounts involved. Transactions also must be isolated from other transactions. This means that the changes that they're attempting to make to the data are not visible to other transactions while they're still processing. Only after a transaction completes, will other users be able to see the full set of changes. This prevents users from reading intermediate values. Before it's known, whether it will actually be a success or a failure. And finally transactions must be durable. This occurs when a transactions changes
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-database-management/acid-properties?u=76281980&t=94)** are permanently written to system storage and are able to withstand a system failure. While all of these properties of transactions are important to the integrity of your data, they're not actually something that you'll typically need to worry about. All relational [[Database Management]] systems, automatically enforce these four principles on all of the transactions that you create in your [[Databases]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Management]] (1), [[Databases]] (1)
> **CLI Commands:** make (2)
> **Definitions:** refers to (1), means that (1)
> **Env Vars:** acid (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Commit and rollback transactions](https://www.linkedin.com/learning/database-foundations-database-management/commit-and-rollback-transactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/commit-and-rollback-transactions?u=76281980&t=0)** - [Narrator] A database transaction bundles a number of different commands into a single routine that either completes successfully or is entirely reversed. In order to create a transaction, we need to tell the server when the batch of commands is starting and when we've reached the end. The commands to do this are the same on both [[Microsoft SQL Server|SQL server]] and [[PostgreSQL]]. And in fact, they're pretty standard across most RDBMS platforms. So you can follow along on either platform. I'm going to demonstrate on the PostgreSQL servers two-tree's database. Let's right click on it and choose new query. First, let's take a look at the current state of our categories table. We'll just select everything from that table. Now, right now we have three product categories. I want to add two more, but wrap the commands in the transaction so that the change is finalized in the database at the same time. To do this, we first need to open or start the transaction. We do this with a command begin transaction. This opens something called a transaction block. Now, any commands that are written inside of this block will get bundled together. Let's write out to insert commands to add rows to the categories table.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-database-management/commit-and-rollback-transactions?u=76281980&t=104)** So there are the two insert commands, we're going to insert a row for gift baskets and a row for party platters. Now we need to close the transaction. To do this, we have two options, either the success state or the fail state. If our commands complete successfully, we can commit the transaction. The other option that we have is to effectively cancel the transaction. To do this and undo all of the changes, we can use a rollback transaction command. So that's the basic structure of a transaction. You open the transaction block with begin transaction then perform whatever actions you want. At the end of the process, you can either commit those changes or roll them back. This will put the database back into its original state. Either way, the transaction is complete and you've closed the transaction block. So let's test this out by running each step one at a time. We'll first begin the transaction. I'll highlight line number three and press the run button. It tells me that the command is completed successfully and we are now inside of our transaction. Next we'll send those to insert commands. I'll highlight lines five down to eight and run those. Okay, looks good. Our two rows were inserted into the table. Now at this point, we've performed those two row inserts in the transaction. If we take a look at the current state of the data by running the select statement at the top again,
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-database-management/commit-and-rollback-transactions?u=76281980&t=197)** it'll appear that both rows are in the database. We can see that both right there. But this result is effectively for our eyes only. This change does not really exist for any other database users. To prove the point, let's open up a second query window by right clicking on the database again and choosing new query. That'll give us a brand new query tab. When you do this, it creates a separate connection to the database server and it treats us like a another user. If we try and select the same data by saying select star from inventory.categories and run the query over here, you're only going to get the original three rows. Remember the third asset property of transactions? Transactions are isolated and their actions are not published to the database until they're officially completed. That's why we're not seeing the same change from this other perspective. They haven't officially occurred yet. Okay, let's go back and finish up our transaction. Now, at this point, we can either commit those changes and make them available for everyone or roll back the data to the starting state. Let's do a rollback first. I'll highlight line number 12 and press the run button. Once again, it tells me that that completed successfully and we have now closed the transaction block. Now, when we review the tables contents by writing a select statement again,
>
> **[4:50](https://www.linkedin.com/learning/database-foundations-database-management/commit-and-rollback-transactions?u=76281980&t=290)** we only see the original three rows again. Even though we didn't need to issue delete statements, the rows have disappeared from existence because of the rollback. So let's run through this all again. I'm going to begin a transaction then we'll insert those two rows again and this time we'll commit those changes by committing the transaction. Now, the data changes are made durable. Remember that's the D in acid and all users will now see the same values in this table. If I select everything out of the categories table again, I'll see all five rows there and if I switch back to the other tab and then run this query again, I'll see all five rows here. And because we've made the change inside of a transaction there was never a point in time when a user might have snuck in the middle of the process and retrieved only one of these new rows, but not the other. They were both added to the database at the exact same instant. This fulfills the second property of transactions, consistency. Every other database would have gotten a consistent look of the data while the transaction was processing. So that's how transactions work. In a typical database application, programming logic would control when the commit and when the rollback would occur. It's not typical for a user to send those commands manually, but the concept of bundling related changes to the database inside of a transaction is important to maintaining a database
>
> **[6:23](https://www.linkedin.com/learning/database-foundations-database-management/commit-and-rollback-transactions?u=76281980&t=383)** that presents a consistent data story to every user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL]] (2), [[Microsoft SQL Server|Sql server]] (1)
> **UI Navigation:** click on (1), open the (1), select the (1)
> **Env Vars:** sql (1), rdbms (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Understanding concurrency and locks](https://www.linkedin.com/learning/database-foundations-database-management/understanding-concurrency-and-locks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/understanding-concurrency-and-locks?u=76281980&t=0)** - [Instructor] When you start working with transactions, two important concepts come into play. Let's spend a few minutes and understand how [[Relational Databases]] deal with multiple concurrent users and data access locks. Concurrent access occurs when two or more users are performing activities with the same row of data at the same time. Without careful consideration, a number of inconsistency errors can develop which can corrupt the data that you've carefully stored. The first concurrency issue that can occur is when two users attempt to write to the same row in a table at the same time. This is called the lost update problem. Let's say that you're running an online shoe store and you have one pair left of the most popular new sneaker. A user on your site views your inventory and sees that there's one pair left. A second user on their own computer sees the same information. Both users add the sneaker into their shopping cart and attempt to check out. In a lost update scenario, the inventory system would subtract one pair of sneakers from the inventory from what the first user saw and also subtract one from inventory for the second user. Both operations would update the inventory level to zero when in reality, two pairs were actually sold. The problem comes when both shoppers we're allowed to read and write to the same database at the same time. To fix this,
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-database-management/understanding-concurrency-and-locks?u=76281980&t=93)** the database should force one user to wait while the other transaction completes then reread the inventory level for the second purchase to verify inventory levels again before the second transaction can proceed. You've probably experienced this if you've ever tried to buy a popular item online and added it to your cart only to be told later that it was actually sold out. The other three concurrency issues arise during table reads by multiple users. A dirty read occurs when user is allowed to read uncommitted data from another transaction. Without knowing whether that transaction will complete with a final commit or a rollback, the user won't be able to fully trust that the values that they see are accurate. Nonrepeatable reads occur when the data changes between two reads of the same value while in a transaction, no other operations should be able to modify values. And finally, a phantom read occurs when rows seemingly disappear during a transaction. This happens when a transaction reads a table twice but another process sneaks in and removes or adds new rows in between both of those reads. In order to combat all of these problems, relational [[Database Management]] systems employ a number of table and row locking strategies to prevent simultaneous access from occurring by concurrent users.
>
> **[3:07](https://www.linkedin.com/learning/database-foundations-database-management/understanding-concurrency-and-locks?u=76281980&t=187)** Locks prevent two different transactions from accessing the same data resources at the same time either at the entire table level or at the individual row level. The problem with row and table locks is that they hold resources from being accessed which is actually kind of their entire point. But this slows down database performance. Ultimately the best and most secure way to handle these concurrency problems is to only allow serial execution of transactions. That means that a second transaction can begin only after the first one completes. Obviously this creates a lot of downtime while users wait around for other users to finish their work. So the goal of the RDBMS with this approach is to create a lock only when required and then release the lock as soon as it's safe to do so. This approach can only go so far though. Alternatively RDBMSs can also allow parallel execution of simultaneous transactions under certain circumstances. As long as precautions are taken to isolate the effects of these transactions from affecting each other The [[SQL]] specification outlines four isolation levels that could be applied to transactions depending on the kinds of concurrency issues that need to be mitigated against. These give database managers some agency in deciding which trade-offs between performance and reliability are acceptable and which ones aren't.
>
> **[4:42](https://www.linkedin.com/learning/database-foundations-database-management/understanding-concurrency-and-locks?u=76281980&t=282)** Here are the four isolation levels that you can choose from. Serializable will prevent all concurrency issues including dirty reads, nonrepeatable reads and Phantom reads. This isolation level forces transactions to run one at a time. The repeatable read isolation level prevents dirty reads and nonrepeatable reads. But it will allow simultaneous transactions to create new rows or remove existing rows. For transactions that are only concerned with values that are already stored in the table, this might not be much of a problem. Next we can choose to employ a read committed isolation level. This strategy only prevents dirty reads. So values can't be seen by a transaction in progress and before they're committed or rolled back. And finally there is the read uncommitted isolation level which does not prevent any concurrency issues from occurring and transactions are allowed to execute simultaneously as fast as the server's resources will allow. Different RDBMS platforms will have different levels of support for some or all of these isolation levels. And the specifics in how they're implemented in your transactions will vary from platform to platform. But just know that performance trade-offs can be made when developing your transactions depending on how sensitive your data is to concurrency anomalies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Relational Databases]] (1), [[Database Management]] (1), [[SQL]] (1)
> **Env Vars:** rdbms (2), sql (1)
> **Definitions:** is called (1), means that (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)


### 4. Data and Object Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore the system tables](https://www.linkedin.com/learning/database-foundations-database-management/explore-the-system-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/explore-the-system-tables?u=76281980&t=0)** - [Instructor] One of the more interesting aspects about relational [[Database Management]] systems at least to me, is that they use internal system [[Databases]] and tables to manage your personal databases and tables. The thing that I find interesting is that it's exactly the same database objects that are used. System tables are just regular relational tables made up of columns and rows that store attributes about how your databases are built. So when you create a table, that information is saved into a system table. When you update the data type that I a column holds, that information is also saved into a system table. System tables hold the building blocks for the [[Relational Databases]] that you develop. The wonderful thing about this is that these tables are often available for you to read through and they can provide a wealth of information about how your database is constructed and the settings and options that are enabled. This can be done with standard select queries as long as you know the table names and the columns that hold the information that you're after. Reading the information they contain is usually pretty safe. But at no point, should you ever try and insert, update or delete any information that a system table contains. Doing so can irreparably corrupt your database. These tables should only be modified by the RDBMS itself. Now each RDBMS platform is going to have its own system
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-database-management/explore-the-system-tables?u=76281980&t=96)** tables that it uses. And this is one of the few areas of learning about relational databases that's going to be completely unique for each platform. You can find documentation on the tables that [[Microsoft SQL Server|SQL Server]] uses at this URL. In fact, SQL Server uses view objects to provide access to the underlying information. So here on this page, they're called system catalog views. In any case, this page links to a wealth of information about the catalog views that are available and what each column in the view represents. [[PostgreSQL]] has similar functionality. They call these tables system catalogs and they're all listed out at this URL. You'll notice a common naming system. They all start with PG underscore. If you click on one of these links, for example, PG underscore database, it'll show what information the catalog contains. This one in particular lists out all of the databases that are on the server and their basic attributes. In this table, at the bottom of the page, it lists out the information about every column that the view returns. To view a system table, or a catalog view, you just issue the same select statements that you've been writing. Let's take a look at one in SQL Server. I'm going to right click on our SQL Server database and choose New Query. Then I'll take out the command select star from sys.databases.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-database-management/explore-the-system-tables?u=76281980&t=189)** This'll pull all of the columns and all of the rows from the sys.databases system catalog view. This shows me basic details about every database on the server. Column includes the database's name, its creation date, and the language that it uses for sorting in the coalition name column. If you scroll across, you'll see that there are dozens of different columns of information present in this view. And just like with regular select queries on your own data, you can pull specific columns or use filtering criteria with where clauses to isolate the results to just the information that you're trying to find. We can perform a similar operation in PostgreSQL. Let's create a new query window on that database. This time I'll issue the command select star from PG_database.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-database-management/explore-the-system-tables?u=76281980&t=249)** Make sure you use database singular here, whereas on SQL Server, it used databases, plural. When I run this command, you'll see a similar result. We get a table that lists out one row for every database on the server and some interesting information about their current settings. For detailed information about what each of these columns means, I'll refer you back to the online documentation that I showed just a moment ago. So every relational database management system uses these kinds of internal system tables or views to manage your personal database. Because they all use different structures and names, it'll be worth your while to seek out and bookmark the relevant documentation for your chosen platform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (7), [[Microsoft SQL Server|Sql server]] (5), [[Database Management]] (2), [[Relational Databases]] (2), [[PostgreSQL]] (2)
> **Env Vars:** sql (5), rdbms (2), url (2)
> **CLI Commands:** find (3), make (1)
> **Analogies:** for example (1), just like (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Duplicate tables](https://www.linkedin.com/learning/database-foundations-database-management/duplicate-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/duplicate-tables?u=76281980&t=0)** - [Instructor] You may occasionally want to create a copy of a table in your database. This may be to gather rows for an analysis by a third-party contractor, or for a temporary reporting exercise, or just to experiment with alternative designs without impacting the current workload of day-to-day activities. When this happens, you don't need to create an empty table and then write in all of the insert statements yourself. You can create the table structure and populate the rows with information by duplicating an existing table. Let's take a look at how this works in the [[PostgreSQL]] server. I'll create a new query window attached to that database server. First, I want to review the current contents of the inventory.[[Microsoft Products|products]] table.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-database-management/duplicate-tables?u=76281980&t=52)** Now, as you can see, there are lots of products in this table. One of the attributes is a category_id number. At the bottom of this result set, you'll find a number of products in category number 3. This corresponds to our bath and beauty product category. Now, let's suppose that I want to make a new table that contains just these products. I accomplish this goal with a creative use of the CREATE TABLE command. We'll start with the basic example: CREATE TABLE inventory.beauty_products. Now, instead of listing out the columns that I want the table to contain, I'll use the AS keyword instead. Then, we provide a SELECT statement that will create the table structure and fill in all of the data at once. So we'll create our data from the original products table. I'll select everything from inventory.products, where The category_id is equal to 3. Let's execute this CREATE TABLE command. It tells me that it was completed successfully, and now we can take a look at its contents. I'll select everything from our new beauty_products table.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-database-management/duplicate-tables?u=76281980&t=141)** And here are our duplicated values, ready for a report, or whatever other use you may have for it. Keep in mind that these rows are a duplicate of the original source and are completely separate data rows, so changes to one table won't be reflected in the other. We can do the same thing in [[Microsoft SQL Server|SQL Server]] with a slightly different syntax. Let's open up a new query window attached to that database server. This time, we start with the SELECT statement to pull the columns that we want. We want all of the columns from the products table, So I'll say SELECT *. Next, we create the new table with the INTO keyword. I'll say INTO the schema inventory and the new table name, beauty_products. After that, we add the FROM clause that provides the current data source and the WHERE clause to filter the original rows to just the ones we want in the new table. So we'll say FROM inventory.products, WHERE the category_id is equal to 3. I'll execute the command to create the new table and fill in the rows, and we get the message that seven rows were affected, and now we can take a look. We'll select everything from the new table.
>
> **[3:56](https://www.linkedin.com/learning/database-foundations-database-management/duplicate-tables?u=76281980&t=236)** And once again, there is the new duplicated values in a brand-new data table. And that's how you can use a little bit of [[SQL]] to create a duplicate table object in your [[Relational Databases]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (8), [[PostgreSQL]] (1), [[Microsoft SQL Server|Sql server]] (1), [[SQL]] (1), [[Relational Databases]] (1)
> **Env Vars:** create (3), table (3), select (3), sql (2), into (2)
> **SQL:** create table (3), select (3), where (2)
> **Code Identifiers:** category_id (3), beauty_products (3)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Delete data with TRUNCATE](https://www.linkedin.com/learning/database-foundations-database-management/delete-data-with-truncate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/delete-data-with-truncate?u=76281980&t=0)** - [Instructor] Earlier in this series, we learned that you can remove data rows from a table with a DELETE command. For instance, let's review the beauty_products table that we just created in a prior movie in the [[PostgreSQL|Postgres]] [[SQL]] database.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-database-management/delete-data-with-truncate?u=76281980&t=21)** This table currently contains seven rows of data. Now, if I wanted to remove the first row, the one with the sku OGEC004, I can write out the command like this. We'll DELETE FROM the inventory.beauty_products table WHERE the sku = OGEC004. If I run this command and then take a look at the table's contents again, we'll see that we're down to six rows of information. The WHERE clause in a DELETE statement is incredibly important. That's because if you omit it and just said DELETE FROM inventory.beauty_products, that command would go through and delete every row from the table. The end result would be an empty table with just the column structure left in tact. But what if that is your goal? What if you do want to completely clear out all data from a table? Well, you could send that DELETE command, but the operation is kind of slow on large tables since it removes rows one at a time. In order to quickly clear out all data from a table, you should use the TRUNCATE command instead. The command has a simple syntax. It's just TRUNCATE TABLE and the name of the table you want to empty. I'll clear out all the information
>
> **[1:54](https://www.linkedin.com/learning/database-foundations-database-management/delete-data-with-truncate?u=76281980&t=114)** from the inventory.beauty_products table. When I run line number six, then it quickly remove all the rows of data from the table. If I select everything out of the table again, you'll see it's completely empty. The TRUNCATE TABLE command goes through and throws away all of the data in one quick sweep. It's not often that you'll need to empty out a data table, but when you're experimenting with table designs, it can be a fast way to clear out some data so that you can start fresh all over again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (1), [[SQL]] (1)
> **Env Vars:** delete (5), truncate (3), ogec004 (2), where (2), table (2)
> **API Endpoints:** delete  (5)
> **Code Identifiers:** beauty_products (4)
> **SQL:** delete from (2), where (2)
> **Cross-References:** earlier in (1)
> **Analogies:** for instance (1)
> **Prerequisites:** you'll need (1)

#### [Remove database objects with DROP](https://www.linkedin.com/learning/database-foundations-database-management/remove-database-objects-with-drop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/remove-database-objects-with-drop?u=76281980&t=0)** - [Instructor] When tables become obsolete or are otherwise no longer needed in the database, you can get rid of them entirely with a single line of code. In the prior movie, we created a copy of some data and then stored it in a new table called beauty [[Microsoft Products|products]]. Let's take a look at it by expanding the two trees database in the [[PostgreSQL]] server and then open up the tables folder. Now I'm not seeing it here, so I'm going to right-click and choose refresh, and there is the table that we created in the last movie. Let's go ahead and remove it from the database now. I'm going to right-click on the two trees database and choose new query. In order to get rid of the table, all we need to do is issue the command drop table. Then we list out what table we want to remove. In this case, it's the inventory.beautyproducts table. After the statement is executed, the table is removed from the database and that's all there is to it. The drop command is the exact opposite of the create command, and you can use it on any other database object that you add into your system. Views, user accounts, the store procedures that we'll look at in the next chapter, and so on. Anything that you add with create, you can remove with drop. Now sometimes you'll try and drop a table and you'll get an error message that the system can't remove it due to a constraint. For instance, if we try and drop the table, sales.orders.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-database-management/remove-database-objects-with-drop?u=76281980&t=92)** This time when I press the run button, we get an error, and it says that it can't drop the table, sales.orders, because other objects depend on it. In this case, you would need to remove the relationships from the tables first, and sometimes, that operation will require another step or two in order to resolve any further conflicts. In this specific case, there's a foreign key relationship between the orders table and the order lines table. If we remove the orders table, then the order lines data would get orphaned, and it would be impossible to know what line items go to what customers. So there's some issues with dropping tables that have these kinds of interconnections that have been established in the database, but as long as all of those are resolved, the drop command will quickly remove objects from your database and structure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[PostgreSQL]] (1)
> **UI Navigation:** right-click (2), go to (1)
> **Cross-References:** in the last (1), in the next (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Create temporary tables](https://www.linkedin.com/learning/database-foundations-database-management/create-temporary-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/create-temporary-tables?u=76281980&t=0)** - [Narrator] It's possible for individual users to create their own temporary sets of data tables in a database. This can be helpful for gathering data for personal projects or analysis work or moving items to temporary staging tables for processing before finalizing rights to more permanent data tables. These temporary tables are not accessible by other users. They can only be read and written to by the user that created them. To see how this works, let's once again, create a new query window connected to the [[PostgreSQL|Postgres]] servers to tree database. Postgres uses the create temporary table command to well create a temporary table. Other than the inclusion of the temporary keyword the [[Representational State Transfer (REST)|rest]] of the command is exactly the same as creating a standard permanent data table. We can create a temporary table here that's populated with data about all of the infused oil [[Microsoft Products|products]] by copying it out of the products table. I'll name this table, infused oils temp. Then we use our as keyword followed by the select command that pulls the information from the products table.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-database-management/create-temporary-tables?u=76281980&t=89)** For the infused oils, we're going to target all of the products that have a category ID of two. When I press the run button, it'll create the table and I can select everything out of it.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-database-management/create-temporary-tables?u=76281980&t=107)** When I say select star from infused oils temp, I get back this following results set. The table works just like any other data table in the database. Here's the difference. Take a look inside of the connection sidebar, expand the tables folder and you're not going to find it here. Now you might think, okay, I just need to refresh the display. So you right click on tables and choose refresh but nope, it doesn't show up. Temporary tables don't get saved into the same location as the rest of the [[Databases]] tables. In fact, if you were paying very close attention you might have realized that we didn't include the typical schema inventory in the create temporary table command. Temporary tables in [[PostgreSQL]] cannot include schemas but we just viewed the tables contents. So it has to exist somewhere, right? Indeed, it does. You'll actually find it if you open up these system folder underneath the tables folder. Now there's lots of stuff in here so you need to scroll through. What we're looking for is the schema PG underscore temp and here it is right here at my System, it automatically got the number PG temp 15 but there's the table, infused oils temp. So this is where our temporary table is stored inside of the PostgreSQL server. If I scroll back up to my server and right click on the two trees database and open up another new query window, you'll see that
>
> **[3:20](https://www.linkedin.com/learning/database-foundations-database-management/create-temporary-tables?u=76281980&t=200)** if I try and select everything out of the table, again we're going to get an error. This table simply is not available for any other users to even know that it exists. Now let's go back to our original query window. Here we can continue working with the temporary table. We can change its structure. We can add or remove rows of data. Anything that we want to do, we can do to this table as long as we stay connected. We can even drop it just like any other table with the command drop table, infused oils temp. The other option that we have is to simply close out of this queries tab. I'll do that now and not save any changes. We can also close the second tab that we opened up. This disconnects from all of our sessions and the temporary table is automatically removed from the system right along with it. If we right click on the system folder and choose refresh and then scroll through the list again. You're not going to find that PG underscore tab schema any longer. You'll notice that it's been removed from the database. Now, [[Microsoft SQL Server|SQL Server]] has similar functionality when it comes to temporary tables. There is a difference in syntax though. So let me scroll up to the top and we'll take a look at that. I'm going to right click on the two trees database inside of SQL server and choose new query. Next, I'm going to write out the full command that'll create the temporary table and then we can take a closer look at it.
>
> **[5:04](https://www.linkedin.com/learning/database-foundations-database-management/create-temporary-tables?u=76281980&t=304)** When I press the run command SQL server will create my temporary table. The difference is, is that SQL server doesn't use the temporary keyword in a create table command. Instead, any table that uses a hash symbol or the pound symbol as the first character in the name will automatically become a temporary table. Other than that, their behavior is exactly the same in SQL server, as it is in PostgreSQL. Now that the table is created, we can select the data out of it.
>
> **[5:42](https://www.linkedin.com/learning/database-foundations-database-management/create-temporary-tables?u=76281980&t=342)** Again this hash symbol right here is the indication that this is a temporary table. Let me go ahead and highlight line five here and press run and there is all the data that it contains but just like in PostgreSQL, if I open up a new query window and try that statement again,
>
> **[6:08](https://www.linkedin.com/learning/database-foundations-database-management/create-temporary-tables?u=76281980&t=368)** the server isn't going to understand what I'm talking about. For this particular user session that object does not exist and finally, just like in PostgreSQL here in SQL server as soon as you disconnect all of your connections that temporary table is removed from the system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (6), [[PostgreSQL]] (5), [[Microsoft Products|Products]] (4), [[PostgreSQL|Postgres]] (2), [[Representational State Transfer (REST)|Rest]] (2)
> **Env Vars:** sql (6)
> **Analogies:** just like (4)
> **CLI Commands:** find (3)
> **UI Navigation:** click on (1), scroll up (1), select the (1)
> **Definitions:** is a  (2)
> **Speakers:** - [narrator] (1)


### 5. Functions and Stored Procedures

[↑ Back to Table of Contents](#table-of-contents)

#### [Add programming elements to the database](https://www.linkedin.com/learning/database-foundations-database-management/add-programming-elements-to-the-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/add-programming-elements-to-the-database?u=76281980&t=0)** - [Instructor] Functions and stored procedures are two additional types of database objects that are supported across the majority of RDBMS platforms. They'll be useful when you want to integrate more traditional programming routines into your [[Databases]] and will greatly expand the capabilities of these systems that you design. Functions are the simpler of the two objects. They typically take some input values that are passed in by a user, and then the function processes that value and returns a new value. For instance, a function could be written that processes date values. The user sends in a calendar date to the function, and the function returns the corresponding day of the week. Now, if you've ever used a spreadsheet app like [[Microsoft Excel|Excel]], then you've almost certainly used functions before. Like Excel, relational [[Database Management]] systems come with dozens of built-in functions that can handle common tasks, and if those aren't enough, you can create and save your own custom functions right inside of your database. This makes it possible to write functions that are unique for your specific needs and data, and because they're stored on the server, every user of your database has access to the same set of functions and will get the same results when they use them. When it comes time to update the function, you change it once on the server, and every user will immediately benefit from the update. Compare this to a situation where every end user is working with their own private set of routines,
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-database-management/add-programming-elements-to-the-database?u=76281980&t=95)** and you'll realize how storing them server-side eliminates a huge maintenance nightmare. Stored procedures are the other common programming routine that can be saved on the database server. While they can return values like a function, they're more commonly used to perform actions, such as adding or updating data in a table or creating or removing other objects. The difference between a stored procedure and a function is that functions just return a value, whereas stored procedures can actually make changes to the database and the server. Just like with functions, stored procedures allow you to store programming code directly on the database server as their own standalone objects, and then other users can execute that code with a simple call to that object. The languages that are supported in a stored procedure will vary from platform to platform. Some, like [[Microsoft]] Access, only allow a single language, like Microsoft Visual Basic. Other RDBMS platforms are wide open and allow programs to be written in a number of languages, such as C, Pearl, or [[Python (Programming Language)|Python]]. They do this by passing code to external handlers, which interpret and execute the commands in the procedure and then pass results and status messages back to the database engine. And finally, stored procedures support user-customizable parameters. These allow end users to pass in variables
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-database-management/add-programming-elements-to-the-database?u=76281980&t=189)** that can alter the output of the procedure, making them more flexible for a wider set of use cases. Now, a full review of stored procedures will quickly get into advanced programming topics, and there's a lot of variability between platforms for how procedures are initially written and later called and executed. Because of that, I can only touch on them briefly here in this chapter. However, integrating a procedural language and stored procedures will certainly increase the capabilities of your system, and for those of you with the appropriate background, I would highly suggest that you seek out resources that discuss integrating your chosen RDBMS platform with the programming languages that you feel comfortable with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[Microsoft]] (2), [[Databases]] (1), [[Database Management]] (1), [[Python (Programming Language)|Python]] (1)
> **Analogies:** such as (2), for instance (1), compare this to (1), just like (1)
> **Env Vars:** rdbms (3)
> **CLI Commands:** make (1), python (1)
> **Speakers:** - [instructor] (1)

#### [Create a function](https://www.linkedin.com/learning/database-foundations-database-management/create-a-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/create-a-function?u=76281980&t=0)** - [Instructor] Functions take one or more input values, process them and then output some new value. We can use a function to help us navigate the two_trees database and make queries on the data a little bit easier to write. Let's first review the data that's currently stored in the customers and the orders table by running the select statement that I have here in the script on lines four and five. We'll just select everything out of sales.customers and sales.orders. Now the orders information is stored based off of the customer ID. And you can see that in this column right over here. But it's unlikely that any database user will have all of these ID values memorized. When they want to look up orders for a customer they most likely know the company name. The problem is, is that end users will have to do a search first in order to get the appropriate customer ID number for the company that they're interested in. We can streamline this process by creating a function that takes the company name as an input and returns the corresponding ID number. I've written out these scripts to do this on both the [[Microsoft SQL Server|SQL Server]] and the [[PostgreSQL]] platform. The syntax is a little bit different. So if you're working on PostgreSQL, like I am right now, you'll use the version that starts on line number nine. If you're on SQL Server then you use the version of the function that starts on line number 21. Even though they use a slightly different syntax, the main concepts are identical. So the first thing that we're going to do
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-database-management/create-a-function?u=76281980&t=95)** is create a new function object and give it a name. I'm calling the function, fetch_id. Inside of parentheses, we can specify some information about the input variable that will be passed in. I'll give that variable a name, I'll call it search_name and it'll be a varchar(100) data type. This corresponds to the data type associated with our company name values in the database. Next, we say what the function will return. It's going to return a char five data type which corresponds to the data type of our customer ID numbers. Next we have the code that's needed to find the ID based off of the name that we pass in. That's done with a select query to the customer's table and we're finding the ID where the company name in the table is equal to the name that we pass in through the input variable. Remember we named that search_name up here at the very beginning. And that finishes the routine. PostgreSQL needs this extra bit here at the very end on line number 17 that defines the language that the function is written in. If you take a look at the SQL Server version, it's pretty similar. The main differences are that variable names in SQL Server begin with an @ symbol and functions need to get put in a schema in SQL Server. So I'm putting this into the sales schema. Other than that
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-database-management/create-a-function?u=76281980&t=188)** these functions are identical across both platforms. Okay, let's go ahead and test it out. I'm working on PostgreSQL. So I'm going to execute lines nine down through 17. That'll create the new function inside of my server. Now we can test it out. I'm going to scroll down on the script here until I get down to line number 36. To use a function, you just type in its name and then inside a parentheses you'll pass in the variables value that you want the function to process. So in order to find the ID number that's associated with the company Flavorville, we can say select the fetch_id function applied to the text Flavorville. I'll highlight lines 36 and press run. And I can see that the ID for Flavorville is FV418. If I want to do the same thing and find the ID for Blue Vine, I can run this line and I can see that Blue Vines ID is BV446. Now we can even use the function in the where clause of a query, which makes them extremely flexible. To find all of the orders for Green Gardens, if you don't know their ID number, you can use the new function instead in the where clause. So we'll select everything from the sales.orders table where the customer_id is, well I don't know the ID number so I'll use the function. We'll use select fetch_id, Green Gardens to get that number. And then it'll put it in to this where clause. Let's run lines 39 through 41 and I can see all of the orders for Green Gardens even though I don't know, Green Gardens ID number. And there's your first database function.
>
> **[4:43](https://www.linkedin.com/learning/database-foundations-database-management/create-a-function?u=76281980&t=283)** With some careful planning, they can add a great new layer of usability enhancements for all of your [[Databases]] end users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (5), [[PostgreSQL]] (4), [[Databases]] (1)
> **Code Identifiers:** fetch_id (3), search_name (2), two_trees (1), customer_id (1)
> **Env Vars:** sql (5), fv418 (1), bv446 (1)
> **CLI Commands:** find (4), make (1)
> **UI Navigation:** scroll down (1), select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Create a stored procedure in PostgreSQL](https://www.linkedin.com/learning/database-foundations-database-management/create-a-stored-procedure-in-postgresql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/create-a-stored-procedure-in-postgresql?u=76281980&t=0)** - [Instructor] Stored procedures can incorporate loops, error handling, and other programming logic to consistently perform repeated operations on the server. Unlike functions, they can make changes to the structure of the database by creating or removing other objects, or adding and updating data in a table. They can even move data between platforms, export data snapshots and reports, or perform routine maintenance and backup operations. When a customizable parameter is incorporated and passed into a store procedure, the flexibility of the routine is increased. Let's create a custom procedure in [[PostgreSQL]] to store some data in a new temporary table. Now I've got the script from the exercise files already attached to a query window that's attached to my PostgreSQL database. Now, the first thing I want to do is create that new temporary table. And I'm going to call it my names. This table will contain just a single column called my name that'll store a var char 50 data type. So let me execute line number four to create the temporary table, and then we can turn our attention to creating the store procedure. In PostgreSQL, we use create procedure command and then name the new routine. I'm going to call this insert name. In parentheses, we list out any input parameters that we want to pass into the procedure when we run it. I'm going to pass in one value.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-database-management/create-a-stored-procedure-in-postgresql?u=76281980&t=93)** I'll call it first name and it'll be a var char 50 data type. Next, PostgreSQL needs to know what language the [[Representational State Transfer (REST)|rest]] of the script is written in. I'm just using standard [[SQL]] code but you could also use something like [[Python (Programming Language)|Python]], or some other language if you want it. After that, the code that you want the procedure to execute is listed here on line number 10. This store procedure isn't very complicated. It's just taking whatever value I pass in through the input parameter, and storing it in our new temporary table. So that will create my procedure. Let me run line seven down through 11 to create that procedure, and then we can test it out. I'm going to call the procedure insert name and pass in the text, Amos. Then we can verify the results by selecting everything from the my name's table. And there is the name that we passed in using the insert name store procedure. What's really valuable about this from a security perspective is that I'm now able to add data to the database without knowing anything about the structure of the system. I don't need to know the table name. I don't need to know the column names. If I was using a stored procedure to insert rows into multiple related tables, I wouldn't even need to know how those relationships are connected. All of those details reside inside of the programming logic that the store procedure contains. All the end user needs is the name of the procedure,
>
> **[3:07](https://www.linkedin.com/learning/database-foundations-database-management/create-a-stored-procedure-in-postgresql?u=76281980&t=187)** and the values that they want it to process. And if the structure of the database changes in any way, if a table is renamed for example, the store procedure can be updated to match. And the end user doesn't have to modify anything about how they interact with the database. Now it might be handy to review all of the procedures that are created in your database server. For this, you'll want to turn to these system tables. In PostgreSQL, you can query a system catalog called PG_proc. Now this catalog contains detailed information on all functions and procedures. And most of them are functions that are created and used by PostgreSQL. To limit the results to just store procedures, you can specify a where condition and filter the results to just the rows where the pro kind value is P. Let me highlight lines 20 and 21 and execute them and you'll see the result. So this lists out our single store procedure that we just created. It's the only one that's currently on this server. And that's a basic store procedure that can be used to help end users add data to a table. By storing all of the business logic in a procedure, you can simplify the process for end users and make management of the database easier for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL]] (6), [[Representational State Transfer (REST)|Rest]] (1), [[SQL]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (2), python (1)
> **Env Vars:** sql (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Create a stored procedure in SQL Server](https://www.linkedin.com/learning/database-foundations-database-management/create-a-stored-procedure-in-sql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/create-a-stored-procedure-in-sql-server?u=76281980&t=0)** - [Instructor] In the prior movie, we created a stored procedure on the [[PostgreSQL]] platform. And I thought it might be valuable to run through that exact same example again on the [[Microsoft SQL Server|SQL server]] database. That way, you can see that the overall technique is the same, even if there are slight variations in syntax that's required. So once again, I have the script from the exercise files loaded into a new query window that's connected to my SQL server database this time. We can create a temporary table called my names with this command on line number four. Let's go ahead and highlight that and run it to create the temporary table. The only difference on this line is that in SQL server, we use this pound symbol or the hash sign as the first character in the name in order to create a temporary table. Next, we can create the stored procedure. Just like in PostgreSQL, SQL server uses the standard create procedure command. The only thing different here is that SQL server uses the at symbol for a variable names, like we have here for the first name of the input parameter. PostgreSQL also has a couple of dollar signs before and after the programming logic. Other than that, the create procedure command is almost identical. So let's highlight lines eight through 11 and run them to create that stored procedure. Next, we can test it out. In SQL server, we use the execute command to run a stored procedure, which differs from the call command used in PostgreSQL.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-database-management/create-a-stored-procedure-in-sql-server?u=76281980&t=98)** So I'm going to execute the stored procedure insert name and we'll pass in the parameter Timothy. That tells me that one row is affected, and that I can now select everything out of the my name's temporary table. And there is the value that we put into the table using our stored procedure. So the procedure works and it's able to give us the exact same end result. Just like in PostgreSQL, I don't need to know anything about the internal structure of the table to be able to use the procedure and successfully enter values. If you want to review all of the procedures on the server, SQL server has the sys.objects catalog view that we can query against. Limit the results using a where clause to just the ones with type P in order to see the procedure that we just created. And here it is listed out of the sys.objects catalog view. And that's the process on SQL server. As you can see, both platforms share a lot in common, and the concepts and major components of a stored procedure will be similar across all RDBMSs that you're likely to use. Though they differ in the specifics of their creation and execution, once you understand the concepts, you'll be able to apply that knowledge no matter where your career takes you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (8), [[PostgreSQL]] (5)
> **Env Vars:** sql (8)
> **Analogies:** just like (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Write a stored procedure](https://www.linkedin.com/learning/database-foundations-database-management/challenge-write-a-stored-procedure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/challenge-write-a-stored-procedure?u=76281980&t=0)** (lively music)
>
> **[0:06](https://www.linkedin.com/learning/database-foundations-database-management/challenge-write-a-stored-procedure?u=76281980&t=6)** - [Instructor] Before we wrap up this course, I'd like to finish with one last challenge. In order to help end users add new customers into the Two Trees database, I'd like you to create a stored procedure that'll take input parameters and save them into a new row. I didn't demonstrate this in the course, but stored procedures can take multiple input parameters. Just list them out separated by commas when you create the stored procedure. And when it comes time to test the stored procedure out, just pass in the new customer values in the same order as they're listed in the stored procedure. You can use whatever database platform you prefer. I'll demonstrate the solution on both platforms in the next movie. I estimate that this challenge should take about 10 to 15 minutes to complete. Good luck.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### [Solution: Write a stored procedure](https://www.linkedin.com/learning/database-foundations-database-management/solution-write-a-stored-procedure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/solution-write-a-stored-procedure?u=76281980&t=0)** - [Instructor] I hope you were able to create the store procedure for filling in new rows, into the customer's table. Let's walk through the solution here in [[PostgreSQL]] first, and then I'm going to show how the syntax changes when you move over to [[Microsoft SQL Server|SQL server]]. So let's right click on the two trees database and the PostgreSQL database server and choose New Query. And the first thing I want to do is just take a quick look at the existing data that we have. So I'm going to select everything from the sales.customers table. And I'm going to run that. So I can see that I have six customers already in there and this gives me an easy access to view all of the different column names that we have to work with in our store procedure. So let's go ahead and start the store procedure. So we're going to CREATE PROCEDURE and let's call it insert_customer. And this insert_customer procedure is going to take a number of different parameters. We need a different parameter for each column in the table that we want to insert into. So I'm going to open up my parentheses and because we have our OCTA parameters, I'm just going to move this down on the screen a little bit and it'll make it a little bit easier to write all of this out. So the first column we need to give a value for is the customer_id. So I'll just call them the same as the columns that we're putting them into. That'll make it easy to name these different parameters here in the store procedure. And for the data types, we can refer back to the original script
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-database-management/solution-write-a-stored-procedure?u=76281980&t=92)** where we created the database. Unfortunately here inside of [[Microsoft Azure|Azure]] Data Studio we don't have easy access to see what the different columns are. It just tells me it's pvchar, varchar and so on. So for the exact data types, we can either refer back to the original script. I'm actually going to take a look inside of the SQL server database because I know that they're listed out over here in a way that allowed me to access them. Open that up, open the tables, open up the customer's table, and that'll give me an easy way to see what the different data types are just by referring to this other database. So, the customer_id is a CHAR five data type and what type of a comma here and fill in the next parameter, which is company_name. And that is a VARCHAR 100 data type and then we'll list out the address which is also a VARCHAR 100. Next one, city VARCHAR 50 then we have the state is a CHAR two, and finally we have the zip column and that is a CHAR five. So that lists out all of the different parameters that I need. So we can come down here after the closing parentheses here to make sure that this closing parentheses closes off this list of parentheses. It opens up in the create procedure line and then we'll just close it way down here at the end. All of the different parameters
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-database-management/solution-write-a-stored-procedure?u=76281980&t=186)** that we're going to pass into this procedure. And now we just need to say what we want to do with those parameters when we run the procedure. So, PostgreSQL needs a language line. So I'm going to say LANGUAGE [[SQL]] and then we say, AS followed by $2 signs then we are going to insert those values into the sales.customers table. And we're going to pass in the values of whatever our parameters are. So we just list out all those names again. So customer_id, company or the company name, the address, the city, state and zip. Finish out the parentheses there, have a semi-colon at the end of that and then we need two more dollar signs here at the very end to finish off the programming logic of our create procedure command and that finishes the entire statement. So I'll finish that off with a semi-colon and that is the command to create the store procedure here in PostgreSQL. So let me go ahead and run this. Completed this successfully. So I didn't have any typos in there and let's go ahead and test it out. So we're going to CALL the start procedure and I called it insert_customer and we're just going to pass it in some new values and we can make up whatever values you want for a customer. I'm going to do WF100 for the ID, the name Whitney Fields,
>
> **[4:47](https://www.linkedin.com/learning/database-foundations-database-management/solution-write-a-stored-procedure?u=76281980&t=287)** it'll be 100 Main Street, for the address city my hometown Bellingham, State of Washington and a zip of 98225. So that is our insert_customer store procedure. So we're going to call that store procedure and pass in these different parameters. Let's go ahead and run that whole line, completed successfully. And now we can review the table again. So select everything from sales.customers and hopefully we should see there is our new data row that was inserted using this call to our store procedure. So that is the solution here inside of PostgreSQL and the syntax is almost identical for SQL server. So what I want to do is actually just copy all of this to my clipboard, and we'll pop over here to SQL server I'm going to open up a new query attached to that database. It'll now take a second for it to connect. Now I'll paste everything in and I do need to make a couple of changes here. Well, we run the select statement exactly the same. We're getting data out of the SQL server database that's good. We need to modify the create procedure command a little bit inside of CQL server parameters all start with an @ symbol. I'll put that at the very beginning of each of these lines here for the parameter names and then we need to make reference to those same parameters with the same app symbol here in our insert line.
>
> **[6:23](https://www.linkedin.com/learning/database-foundations-database-management/solution-write-a-stored-procedure?u=76281980&t=383)** So I'll add those over here as well. So at customer_id, add company name, add address, add city, add state and add zip. And the only other thing we need to do is remove this LANGUAGE SQL line. We'll keep the AS keyword, but we get rid of the dollar signs and change that there. So it's underlying everything, because it tells me that the create procedure must be the only statement in the batch. And that's because we have these other commands above and below. We can actually fix that just by issuing GO commands on either side of this, they'll get rid of those under squiggles. But other than that, the syntax was actually correct. So as long as we just run it by itself, it shouldn't really matter. So we highlight all of this and press run, complete this successfully. So that creates the store procedure. Now we need to run it. And the only difference here is that instead of the call command, we use execute and we don't list things out inside of parentheses in SQL server. So we get rid of that. So we're going to execute the insert_customer store procedure, we're going to pass it in the same values. Let's go ahead and highlight all of line 17 and run that. All right, one row was effected, we're looking good. Select everything out of sales.customers. And it jumped out because of the alphabetical order but it's this one right here, Whitney fields is the value that we just entered in and that uses these script in SQL server.
>
> **[7:55](https://www.linkedin.com/learning/database-foundations-database-management/solution-write-a-stored-procedure?u=76281980&t=475)** So that's the process on both systems. I'll go ahead and save all of this inside of the exercise files so that you can review it and I'll call the file Solution-Procedures-Complete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (7), [[PostgreSQL]] (5), [[SQL]] (2), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** sql (9), char (3), varchar (3), language (2), create (1)
> **Code Identifiers:** insert_customer (5), customer_id (4), company_name (1)
> **CLI Commands:** make (6)
> **Definitions:** is a  (4)
> **SQL:** varchar (3)
> **UI Navigation:** click on (1), open the (1)
> **Cross-References:** in the next (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/database-foundations-database-management/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-database-management/next-steps?u=76281980&t=0)** - [Instructor] Congratulations on reaching the end of Database Foundations, [[Database Management]]. I hope you now have a better understanding of some of the technologies and systems that are available to you when developing and maintaining your [[Relational Databases]]. Next up in this series, we're going to be diving into the topic of [[Database Administration]] and tackle topics around backup and recovery techniques, user accounts and security, and much more. So look for that course soon in the [[LinkedIn]] Learning Library. Until then, you might want to take a look at a few other related courses for more specific information about working with transactions and store procedures on the [[Microsoft SQL Server|SQL server]] platform. Take a look at my course, Programming [[Databases]] with [[Transact-SQL (T-SQL)|Transact-SQL]]. If you want to explore concepts that will help you begin to integrate databases into an application, I'd recommend starting with the course from author Scott Simpson called Foundations of Programming, Databases. Until next time, I've been Adam Wilbert. Thank you again for joining me, and I hope you have a fantastic day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (3), [[Database Management]] (1), [[Relational Databases]] (1), [[Database Administration]] (1), [[LinkedIn]] (1)
> **Env Vars:** sql (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Adam Wilbert]]

## Resources

- Exercise files available

## Skills Covered

- Database Administration

## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Management]]
**1 of 6** | [[Data Management Essential Training]] →

### In [[Database Foundations- From Concepts to Applications]]
← [[Database Foundations- Data Structures]] | **3 of 5** | [[Database Foundations- Administration]] →

### In [[Advance Your Database Administration Skills]]
← [[Database Foundations- Data Structures]] | **3 of 11** | [[Database Foundations- Administration]] →

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Management]]
- [[Database Foundations- From Concepts to Applications]]
- [[Advance Your Database Administration Skills]]

## Related Courses

_Courses sharing skills:_

- [[Database Foundations- Administration]] — Database Administration

---

[↑ Back to top](#)