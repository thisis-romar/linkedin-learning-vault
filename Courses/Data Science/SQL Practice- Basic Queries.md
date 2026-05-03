---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: sql-practice-basic-queries
url: "https://www.linkedin.com/learning/sql-practice-basic-queries"
duration_minutes: 17
duration: 17m
level: Beginner
updated: 9/13/2023
learners: 35011
skills:
  - SQL
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHwLhX7mciAFw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692902085725?e=2147483647&amp;v=beta&amp;t=-nbo6ggJgU5zG_My0xWIsSSv9W9xfSpBXhKRVQ3hrHc"
linkedin_topic: Data Science
learning_paths:
  - '[[SQL Hands-On Practice]]'
prev_courses:
  - '[[Hands On Introduction Sql]]'
next_courses:
  - '[[SQL Practice- Intermediate Queries]]'
path_nav: '[{"path":"SQL Hands-On Practice","position":2,"total":9,"prev":"Hands On Introduction Sql","next":"SQL Practice- Intermediate Queries"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/sql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/SQL%20Practice-%20Basic%20Queries.md)

![SQL Practice: Basic Queries](https://media.licdn.com/dms/image/v2/D560DAQHwLhX7mciAFw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692902085725?e=2147483647&amp;v=beta&amp;t=-nbo6ggJgU5zG_My0xWIsSSv9W9xfSpBXhKRVQ3hrHc)

# SQL Practice: Basic Queries

> In this hands-on, interactive course, join instructor David Gassner to practice writing basic queries in SQL, the popular programming language that’s widely used for relational databases. This course includes Code Challenges powered by CoderPad. Code Challenges are interactive coding exercises with real-time feedback, so you can get hands-on coding practice to advance your coding skills. David hel

> [LinkedIn Learning](https://www.linkedin.com/learning/sql-practice-basic-queries) | 17m | Beginner | 35K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Talking to your database in SQL](#talking-to-your-database-in-sql)
  - [What you should know](#what-you-should-know)
  - [Exploring the lab environment](#exploring-the-lab-environment)
- [**1. Code Challenges**](#1-code-challenges) (7 videos)
  - [Solution: Get sorted data from a table](#solution-get-sorted-data-from-a-table)
  - [Solution: Retrieve data from multiple tables](#solution-retrieve-data-from-multiple-tables)
  - [Solution: Retrieve data filtered on a range](#solution-retrieve-data-filtered-on-a-range)
  - [Solution: Retrieve aggregated data](#solution-retrieve-aggregated-data)
  - [Solution: Get data filtered with a string pattern](#solution-get-data-filtered-with-a-string-pattern)
  - [Solution: Find the most expensive order](#solution-find-the-most-expensive-order)
  - [Solution: Find the average of orders](#solution-find-the-average-of-orders)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Talking to your database in SQL](https://www.linkedin.com/learning/sql-practice-basic-queries/talking-to-your-database-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-basic-queries/talking-to-your-database-in-sql?u=76281980&t=0)** - [David] [[SQL]] or structured query language is used by everyone from software developers to business analysts. It's the universal language for accessing and manipulating data in a relational database, and it's an essential tool for anyone who works with data. SQL is supported by everything from enterprise server-based [[Microsoft Products|products]] to tiny file-based systems. This course will help you test your SQL knowledge. In each challenge, you'll be given a data set and instructions, and then it's up to you to write your own [[Database Queries]] right in your browser. Good luck and have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Microsoft Products|Products]] (1), [[Database Queries]] (1)
> **Env Vars:** sql (3)
> **Speakers:** - [david] (1)

#### [What you should know](https://www.linkedin.com/learning/sql-practice-basic-queries/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-basic-queries/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is designed for anybody using a relational database, that is, a database that can support multiple tables that can be joined at runtime using queries. Different database [[Microsoft Products|products]] use different versions of [[SQL]]. This particular course is built around code challenges that run on something called the H2 Database Engine. This is an open source database product that can mimic the behavior of various database products. These code challenges work with H2 Database Engine in its compatibility mode, which means that its syntax is the same as with the product [[MySQL]] and MariaDB. When working through these code challenges, you'll be using a database schema, a set of tables that are designed to link together. They're built for a fictional restaurant brand, and so you have customers of the restaurant, dishes that the restaurant serves, orders, a table that links the orders and dishes tables together, and then reservations and events. None of the code challenges are going to use all of these tables, and at the beginning of each challenge, I'll show you which tables in this schema will be used. Before you try these challenges, you may want to watch some instructional content, and I highly recommend the course [[SQL Essential Training]], which takes you through the basic concepts of SQL and the most common commands that you'll use when you work with [[Relational Databases]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Microsoft Products|Products]] (2), [[MySQL]] (1), [[Relational Databases]] (1)
> **Env Vars:** sql (3)
> **Definitions:** is an  (1), means that (1)
> **CLI Commands:** mysql (1)
> **Speakers:** - [instructor] (1)

#### [Exploring the lab environment](https://www.linkedin.com/learning/sql-practice-basic-queries/exploring-the-lab-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-basic-queries/exploring-the-lab-environment?u=76281980&t=0)** - [Instructor] This course consists of automated code challenges that appear when you click on the challenge links in the course's table of contents. Each challenge includes instructions and a code editor you can use to create and test your own solution to the challenge. These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the course's videos. We recommend using a desktop browser for the best experience with code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer. The code challenge has three areas. Instructions in the top left, a console for output in the bottom left, and a code editor for your answer on the right. You can use these drag handles to reallocate space for the code editor or any other content. To get even more horizontal space for the code editor, you can collapse the course's table of contents on the left. Each challenge has instructions that include a description of the challenge and the challenge's desired result. In this example, the desired result has a single value named price. Create your answer in the code editor. When you click Test my code, you'll see a message indicating whether your code returned a correct result. If you don't see that result immediately, make sure that you've allocated enough space. In this example, I'm seeing incorrect output because I'm querying everything from a particular table in the database.
>
> **[1:35](https://www.linkedin.com/learning/sql-practice-basic-queries/exploring-the-lab-environment?u=76281980&t=95)** Now, I'm going to change this to the correct answer. I'll use the max function and pass in price and then I'll rename the result price. I'll test the code again and this time I'll see that I got the correct output. If any messages are too long to fit in the console, you can scroll sideways to see all of the text. And when you finished each code challenge, return to the course's table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)


### 1. Code Challenges

[↑ Back to Table of Contents](#table-of-contents)

#### [Solution: Get sorted data from a table](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-retrieve-sorted-data-from-a-specific-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-retrieve-sorted-data-from-a-specific-table?u=76281980&t=0)** - [Instructor] This code challenge uses just one of the tables in this database, the Customers table. This table has many columns, starting with the primary key of CustomerID and continuing with a whole bunch of different columns for first name, last name, and so on. In this challenge, you're asked to return just a few of the columns sorted by the last name and then the first name. The beginning code selects everything from the Customers table, and when you test the code with this solution, you'll get incorrect output and it'll show that you're returning everything in that database table sorted by the primary key, the CustomerID. Now I'm going to paste in my solution. This time, I'm only returning three columns: the FirstName, the LastName, and the Email column. I'm getting the data from the same table, the Customers table, but now I'm sorting the data by the LastName and then the FirstName columns. Notice that I specify asc for ascending on both columns. That isn't actually necessary because that's the default, but if you want to be explicit, you can put those in. And when I test my code, I get back the expected response, the same data but now sorted alphabetically. And this time, I'm only getting back to three requested columns: FirstName, LastName, and Email. So that's my solution to this challenge.
>
> **[1:33](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-retrieve-sorted-data-from-a-specific-table?u=76281980&t=93)** What's yours?

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Solution: Retrieve data from multiple tables](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-retrieve-data-from-multiple-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-retrieve-data-from-multiple-tables?u=76281980&t=0)** - [Instructor] This code challenge is going to use two tables for my database, the Customers table and the Reservations table. The tables are linked on a foreign key, a one-to-many relationship where each customer can have one or more reservations. In the beginning code, I'm just selecting from the Reservations table, and when I click Test my code, I get back a whole lot of data, but not too much context. Now, I'm going to paste in my solution. First of all, I'm getting data from two different tables, the Reservations and the Customers table, and I'm using an INNER JOIN, meaning I'm connecting the two parts of the foreign key together, and I'm connecting on the CustomerID columns of each of the two tables. I'm sorting the return to data by the Date in descending order, so I'll see the newest reservation first. And I'm only going to retrieve two reservations. That's done with the TOP 2 clause in the SELECT statement. Now let's test that code. As instructed, I retrieve two rows. These are the newest reservations, and because I have the inner joins, I'm connecting that data to the data from the Customers table, and retrieving the FirstName, LastName and Email address of each customer. So that's how I solved this code challenge. What was your solution?

> [!info]- Semantic Content
>
> **Env Vars:** inner (1), join (1), top (1), select (1)
> **SQL:** inner join (1), select (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Retrieve data filtered on a range](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-retrieve-data-filtered-on-a-range-of-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-retrieve-data-filtered-on-a-range-of-values?u=76281980&t=0)** - [Instructor] This code challenge uses just one table from my restaurant's database, the dishes table. This table has a primary key column, and then three string columns for name, description, and type, and a decimal column for the price. This challenge asks you to filter the data so you only retrieve dishes where the price is between a value of eight and nine, and only to show the dish's name and price. Here's my solution. The beginning code just retrieves everything from the dish's table, so if I run that code, I'll see incorrect output and I'll see that there are 22 rows in the table. Now I'm going to paste in my solution. I'm only retrieving the dish ID, that is the primary key, the name, and the price. And I'm filtering using the between keyword. This means get everything with a value greater than or equal to eight, and less than or equal to nine. And I'm sorting the results by the name column. This results in retrieving six rows from the table, and they're alphabetized by the dish's name, starting with A and ending with P. That's my solution to this code challenge. Now, you could've solved this in a couple of different ways. Instead of the between keyword, you could've said the price has to be greater than or equal to eight. and less than or equal to nine, but the between keyword is a great way to filter
>
> **[1:33](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-retrieve-data-filtered-on-a-range-of-values?u=76281980&t=93)** for a range of values using [[SQL]]. It's more concise and it gets the job done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Retrieve aggregated data](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-retrieve-aggregated-data-with-an-sql-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-retrieve-aggregated-data-with-an-sql-function?u=76281980&t=0)** - [Instructor] In this code challenge, you're asked to find the three customers that have the most orders historically over time. You'll work with two tables in this database, the customers table and the orders table. These two tables are linked together by the CustomerID columns. That's the primary key in the customers table and the second column in the orders table. The initial [[SQL]] statement just selects data from the customers table. I'll test the code and see, incorrect output, which is expected but see that the customer table has those three columns. CUSTOMERID, FIRSTNAME, and LASTNAME. Now I'm going to select everything from the orders table.
>
> **[0:48](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-retrieve-aggregated-data-with-an-sql-function?u=76281980&t=48)** The orders table has 1,000 rows and only some of them are displayed here. But you'll see that there's an ORDERID, a CUSTOMERID and an ORDERDATE. Now I'll show you my solution to this challenge. The challenge asked me to return the three customers who have made the most orders. So I'm starting with the TOP 3 clause. That's an easy way to get the three top rows of a result set. And then I'm retrieving the CustomerID, the Customer.FirstName and the Customer.LastName. To get the CustomerOrderCount, I'm using an INNER JOIN to link the two tables together on their CustomerID columns. And then to get the aggregate, that is the total count per customer, I'm using the GROUP BY clause and I'm grouping on the CustomerID. And then finally, to make sure I'm getting the three customers with the most orders, I'm sorting by CustomerOrderCount in descending order. And notice that CustomerOrderCount is the name that I've assigned to that result column. So now when I test my code, I get a correct output and I see the four columns that were requested, the CUSTOMERID, the FIRSTNAME, the LASTNAME and the CUSTOMERORDERCOUNT, which is the result of the count of the OrderID. That's my solution to this code challenge. How did you solve it?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** customerid (3), firstname (2), lastname (2), sql (1), orderid (1)
> **CLI Commands:** find (1), make (1)
> **SQL:** inner join (1), group by (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Get data filtered with a string pattern](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-retrieve-data-filtered-with-a-string-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-retrieve-data-filtered-with-a-string-pattern?u=76281980&t=0)** - [Instructor] This code challenge is only going to use one table from this dataset, the Customers table. This table has a primary key of a CustomerID, an integer, and then a number of string-based columns including first name, last name, and for this exercise, the city. The task in this challenge is to retrieve all customers who live in a city where the name of the city starts with the letter R. The initial query retrieves everything from the Customers table. So when I click Test my code, I see that this table has 100 rows. Only 12 of them are displayed but I'm seeing all of the columns from the table. Now I'll paste in my solution to this challenge. My solution retrieves just four columns, the CustomerID, the first name and last name, and the city, and then the filter is in the WHERE clause. And I'm using the LIKE operator. The LIKE operator allows me to use a wild card. So I start with a pair of single quotes. Then the starting letter that I'm filtering on and the percent character as the wild card. The filtered data will come back and then I want to sort it. So I use the ORDER BY clause and say that I want to sort by city. So now when I test my code, I get back five rows and four columns, and all of these customers live in cities starting with the letter R. That's my solution to this challenge.

> [!info]- Semantic Content
>
> **SQL:** where (1), order by (1)
> **Env Vars:** where (1), order (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Find the most expensive order](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-find-the-most-expensive-restaurant-order?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-find-the-most-expensive-restaurant-order?u=76281980&t=0)** - [Instructor] In this code challenge, you're asked to retrieve the most expensive order in this dataset and display the result including the name of the customer who made the order. The Orders table in this dataset doesn't have any information about the value of the order, so you have to calculate it on the fly. And I'm going to do that by linking to the Dishes table that has a price through the OrdersDishes table that has foreign keys for both the OrderID and the DishID. Now, there isn't any information in this data set about the quantity of dishes in each order so we're going to assume for this challenge that each dish in an order has a quantity of one. And then I'm going to link from the Orders table to the Customers table by the CustomerID from Orders to Dishes through the OrdersDishes table and calculate the total value returning the most expensive order. Here's my solution to this challenge. Notice that I start with a TOP 1. So I'm only going to retrieve one row from this resulting dataset. I'm linking from the Orders table to all the other tables using INNER JOINS. and then I'm grouping by the OrderID so I'm summing the total of the price for each order. And then to make sure that I'm only getting back the most expensive order, I'm going to order by and I'll sort by the order total column in descending order. So the largest number that is the most expensive order will be at the top of the dataset and my top one clause means that's all I'm going to display.
>
> **[1:36](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-find-the-most-expensive-restaurant-order?u=76281980&t=96)** So when I test my code, I get back a single row showing that this customer had an order total of 58.95. And if I go back and look at the entire dataset, I'll find that that is indeed the most expensive order. That's my solution to this code challenge. How did you solve it?

> [!info]- Semantic Content
>
> **Env Vars:** top (1), inner (1), joins (1)
> **CLI Commands:** make (1), find (1)
> **Versions:** 58.95 (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Find the average of orders](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-find-the-average-of-all-restaurant-orders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-find-the-average-of-all-restaurant-orders?u=76281980&t=0)** - [Instructor] In this code challenge, you're asked to retrieve the average of all of the orders in this dataset. To do this, I'm going to use three tables, orders, dishes, and orders dishes as an intermediary table, because it has foreign keys to the other two tables. The initial code retrieves everything from the dishes table, and when I test that code, I see that there are 22 rows, and these are all the individual dishes. But if I select everything from orders dishes, I see that there are many more items, over 4,000, because there's a one to many relationship from order to dish. Here's my solution to this challenge. Notice that I have two select statements, one nested within the other, and I'm going to start with the nested select statement that retrieves the sum of all dishes for all orders. The nested select retrieves two columns, an order ID and the sum of the price from the dishes table. I'm joining the tables from orders to dishes through the orders dishes table as I described, but then I'm grouping by the order ID, and that's going to result in a dataset that has one column for the order ID and then the sum of the price for that order, named order total. Next, I use an outer select, and I get the average of that order total column, and the result will be a single row
>
> **[1:37](https://www.linkedin.com/learning/sql-practice-basic-queries/solution-find-the-average-of-all-restaurant-orders?u=76281980&t=97)** that has a numerical value that's the average order for everything in the dataset. If you prefer, you could rename that column, I'll say as order average, and then I'd get back an order average column, and that would satisfy the requirements of this code challenge just as well. So that's my solution to this more complex challenge. How did you solve this one?

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/sql-practice-basic-queries/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-basic-queries/next-steps?u=76281980&t=0)** - [Narrator] Thank you for joining me for this set of [[SQL]] Code Challenges. If you liked this course, you can watch more code challenge courses. There's one on intermediate queries and a more advanced course on the topic of SQL Window functions. To learn more about the topic, you can watch one of many available courses on SQL. [[SQL Essential Training]] takes you through the basics of the language and then to keep up-to-date with new ideas, you could keep track of the serial course, SQL Weekly Tips and then this course on [[Data Reporting]] and analysis is one of many courses available on this topic. These courses and more are available as you continue to build your SQL skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Data Reporting]] (1)
> **Env Vars:** sql (6)
> **Speakers:** - [narrator] (1)


## Instructor

- [[David Gassner]]

## Skills Covered

- SQL

## Path Context

### In [[SQL Hands-On Practice]]
← [[Hands On Introduction Sql]] | **2 of 9** | [[SQL Practice- Intermediate Queries]] →

## Appears In

- [[SQL Hands-On Practice]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)