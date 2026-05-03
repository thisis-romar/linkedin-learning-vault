---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: from-excel-to-sql-26502092
url: "https://www.linkedin.com/learning/from-excel-to-sql-26502092"
duration_minutes: 84
duration: 1h 24m
level: Beginner
updated: 7/25/2025
learners: 2531
skills:
  - Microsoft Excel
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHOp8dIbBOOQw/learning-public-crop_675_1200/B56ZhCIkwsHUBg-/0/1753456201030?e=2147483647&amp;v=beta&amp;t=PSNhQ6Ydw-SLk9Ur6aE1qFVyEjmxXqTs1Orx9UKyoGs"
linkedin_topic: Data Science
learning_paths:
  - '[[SQL for Data Professionals in Finance]]'
  - '[[Master Advanced Excel Data & Analytics Skills]]'
prev_courses:
  - '[[SQL for Finance Professionals]]'
  - '[[Using Python with Excel]]'
next_courses:
  - '[[SQL for Finance- Income Statement Project]]'
  - '[[Machine Learning with Logistic Regression in Excel, R, and Power BI]]'
path_nav: '[{"path":"SQL for Data Professionals in Finance","position":3,"total":4,"prev":"SQL for Finance Professionals","next":"SQL for Finance- Income Statement Project"},{"path":"Master Advanced Excel Data & Analytics Skills","position":5,"total":7,"prev":"Using Python with Excel","next":"Machine Learning with Logistic Regression in Excel, R, and Power BI"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/microsoft-excel
  - skill/sql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/From%20Excel%20to%20SQL.md)

![From Excel to SQL](https://media.licdn.com/dms/image/v2/D560DAQHOp8dIbBOOQw/learning-public-crop_675_1200/B56ZhCIkwsHUBg-/0/1753456201030?e=2147483647&amp;v=beta&amp;t=PSNhQ6Ydw-SLk9Ur6aE1qFVyEjmxXqTs1Orx9UKyoGs)

# From Excel to SQL

> Data is powerful, and the ability to access it quickly and accurately is important. In this course, you will learn how to leverage your skills with Excel to build your understanding of MySQL and how to use it to pull key insights. As more and more companies demand their teams access their own data, skills in SQL are important to your success. Throughout this course, you will explore similarities b

> [LinkedIn Learning](https://www.linkedin.com/learning/from-excel-to-sql-26502092) | 1h 24m | Beginner | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Moving from Excel to SQL](#moving-from-excel-to-sql)
  - [Setting up your environment for SQL](#setting-up-your-environment-for-sql)
- [**1. Comparing Excel and SQL**](#1-comparing-excel-and-sql) (2 videos)
  - [Spreadsheets vs. databases](#spreadsheets-vs-databases)
  - [What is SQL?](#what-is-sql)
- [**2. SQL Basics**](#2-sql-basics) (7 videos)
  - [Viewing data in SQL](#viewing-data-in-sql)
  - [Identifying columns in SQL](#identifying-columns-in-sql)
  - [Filtering rows in SQL](#filtering-rows-in-sql)
  - [Combining filters in SQL](#combining-filters-in-sql)
  - [Limiting results in SQL](#limiting-results-in-sql)
  - [Comparison operators in SQL](#comparison-operators-in-sql)
  - [The LIKE operator in SQL](#the-like-operator-in-sql)
- [**3. Working with Functions**](#3-working-with-functions) (4 videos)
  - [Using SUM in SQL](#using-sum-in-sql)
  - [AVG, MIN, MAX, and COUNT in SQL](#avg-min-max-and-count-in-sql)
  - [Finding unique values in SQL](#finding-unique-values-in-sql)
  - [UPPER, LOWER, and LENGTH in SQL](#upper-lower-and-length-in-sql)
- [**4. Organizing Data**](#4-organizing-data) (5 videos)
  - [Sorting data](#sorting-data)
  - [Grouping data](#grouping-data)
  - [Using a pivot table in SQL](#using-a-pivot-table-in-sql)
  - [Subqueries in SQL](#subqueries-in-sql)
  - [Advanced subqueries in SQL](#advanced-subqueries-in-sql)
- [**5. Combining Data**](#5-combining-data) (3 videos)
  - [Using joins](#using-joins)
  - [The different types of joins](#the-different-types-of-joins)
  - [Using VLOOKUP, HLOOKUP, and XLOOKUP in SQL](#using-vlookup-hlookup-and-xlookup-in-sql)
- [**Conclusion**](#conclusion) (1 videos)
  - [Taking your SQL skills to the next level](#taking-your-sql-skills-to-the-next-level)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Moving from Excel to SQL](https://www.linkedin.com/learning/from-excel-to-sql-26502092/moving-from-excel-to-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/moving-from-excel-to-sql?u=76281980&t=0)** - We can all agree that [[Microsoft Excel]] is a powerful tool for manipulating and visualizing data. In fact, it's one of the most popular and important applications in business today. But what happens when the data you want is not stored in a spreadsheet? Where can you turn? If your data is stored in a database, you're going to need [[SQL]] to unlock it and get back the information you want. And that's what we're going to look at in this course, how you can make the transition from [[Microsoft Excel|Excel]] to SQL. My name is James Parkin and I'm a software engineer with over 20 years of development experience working with many different types of data. In this course, you'll learn SQL the simple way. We'll take what you already know about Excel and translate it into this new language. Along the way, you'll learn how to find, filter, sort, and combine your data using SQL. By the end of this course, my goal is to help you feel confident enough to start using SQL with your own data. So if you're ready, let's start your transition from Excel to SQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Microsoft Excel|Excel]] (3), [[Microsoft Excel]] (1)
> **Env Vars:** sql (6)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Speakers:** - we (1)

#### [Setting up your environment for SQL](https://www.linkedin.com/learning/from-excel-to-sql-26502092/setting-up-your-environment-for-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/setting-up-your-environment-for-sql?u=76281980&t=0)** - [Instructor] So, before you can dive in and start learning how to write and run [[SQL]] queries, you're going to need to do a little bit of setup. Specifically, you'll need a tool that can interpret your SQL scripts and return results from a database. The database we're going to use throughout this course is an SQLite database, and the tool we'll be using to write and interpret those scripts is called DB Browser for SQLite. DB Browser, as I refer to it throughout this course, is a free tool for working with the SQLite database engine and it works on all platforms. There are many different SQL database engines out there, including [[MySQL]], [[Microsoft SQL Server]], and Oracle [[Databases]] to name just a few. For this beginner's course, I wanted something easy to set up and use out of the box. You can download DB Browser from [SQLitebrowser.org](https://SQLitebrowser.org) and that's one L. And just go ahead and download the version appropriate for your platform and then run the installer and I'll go ahead and do that here. Next you want to download the exercise files from the course page. I went ahead and did that here and I'll open that up. Alright, so we're ready to go. So let's open DB Browser and then load the sample database from the exercise files. So firstly, I'm going to double click DB Browser on the desktop, and next I'm going to go to file, open database, and then navigate to my exercise files, which I have on the desktop.
>
> **[1:34](https://www.linkedin.com/learning/from-excel-to-sql-26502092/setting-up-your-environment-for-sql?u=76281980&t=94)** And here you can see Company Database.DB. I'm going to click it and then click open and there we go. The database is now open in DB Browser. Now that the database is loaded, let's take a moment to explore DB Browser. Along the top here you'll notice there are four tabs. The first tab is called "Database Structure", and this shows what tables this database contains. As you can see, there are three tables. You can expand each table's details using the arrow to show the column names and data types contained in each table. The next tab along is the Browse Data tab, and this tab allows you to view the contents of each of the tables by selecting the table's names from this dropdown. You can see that by selecting a table name, the area below is updated with the contents of that table. So here I have Departments and Employees. The Edit Pragmas tab is specific to SQLite and we don't need to worry about using it for this course. The final tab is the Execute SQL tab, which we'll use heavily throughout this course to write and run our SQL scripts. Don't worry too much about it now, but it's important to know it's here. The exercise files also contains a sample [[Microsoft Excel|Excel]] spreadsheet, which I'll refer to throughout the course. To be able to open the spreadsheet locally, make sure you have access to [[Microsoft Excel]]. If you have DB Browser and Microsoft Excel set up on your machine, then you're ready to go. So let's get you started learning about SQL and how it can help you work with your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Microsoft Excel]] (2), [[MySQL]] (1), [[Microsoft SQL Server]] (1), [[Databases]] (1)
> **Env Vars:** sql (7)
> **Exercise Files:** exercise files (4), download the (2)
> **Prerequisites:** set up (2), setup (1), you'll need (1), make sure you have (1)
> **UI Navigation:** go to (1), navigate to (1), dropdown (1), open the (1)
> **Definitions:** is called (2), is an  (1), is a  (1)
> **CLI Commands:** mysql (1), make (1)
> **URLs:** [sqlitebrowser.org](https://sqlitebrowser.org) (1)


### 1. Comparing Excel and SQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Spreadsheets vs. databases](https://www.linkedin.com/learning/from-excel-to-sql-26502092/spreadsheets-vs-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/spreadsheets-vs-databases?u=76281980&t=0)** - Now, I know you might want to jump right into [[SQL]] and start learning how to query a database, but before we do that, it's helpful to take a moment to understand what a database is and how it's different from a spreadsheet. This way, you can make the transition from something you're familiar with, like spreadsheets in [[Microsoft Excel|Excel]], to the next step of [[Databases]] in SQL. So let's start with how they're the same. At the core, both databases and spreadsheets store collections of information. The differences come from how that data is stored and how you can manipulate it. So let's look at an example. When you open up a spreadsheet in Excel, you're presented with rows, columns, and cells, like you see here. And each cell can independently contain any kind of information, like a piece of text, a date, or a sum function. And you can change this around as often as you like. Now let's switch gears and take a look at how a database stores its data. Let's open up DB Browser and head over to the Browse Data tab. From the tables drop down, let's select Employees. And now we're looking at the contents of the Employees table. So I know what you're thinking, when you're just looking at this quickly, this data arrangement looks very similar to a spreadsheet. And it does look similar. But with a database, you can't change the data types within individual cells. Each cell instead contains a fixed data type. So looking at this table here, the first name column has been defined as a text value, and so only text can be stored in it. I couldn't change this to a number, for example.
>
> **[1:35](https://www.linkedin.com/learning/from-excel-to-sql-26502092/spreadsheets-vs-databases?u=76281980&t=95)** The database at large stores data in tables, usually many tables actually. And these tables are made up of columns and rows, with each row representing a record within the database. This makes data access consistent, as you always know what type of data you'll get back. So why would you use a database instead of a spreadsheet? Most often, this comes down to scale. Most company databases, or a database used at a bank or a supermarket, will contain thousands and millions of items of data. This volume of data is really hard to manage with a spreadsheet. Because databases can handle huge amounts of data, they're central to any business. They allow thousands of people both inside and outside an organization to access and query the data. This would be impossible with a spreadsheet. Now, of course, both spreadsheets and databases can be useful tools, and it's not surprising that their functionality often overlaps. So think about the kind of data you need to work with. If it's stored within a database, then SQL is a language you'll need to access it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (5), [[SQL]] (3), [[Microsoft Excel|Excel]] (2)
> **Env Vars:** sql (3)
> **Definitions:** defined as (1), is a  (1)
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** make (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - now (1)

#### [What is SQL?](https://www.linkedin.com/learning/from-excel-to-sql-26502092/what-is-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/what-is-sql?u=76281980&t=0)** - So before we start to use [[SQL]], let's take a moment and spend some time looking at what SQL actually is. Firstly, SQL is a language, and it's a language you can use to talk to [[Databases]]. It gives you the ability to ask a database questions. Now, SQL has a relatively simple syntax, but don't let that fool you. You have the ability to ask really complex and powerful questions of the database. If you want to create, read, update, or delete data within a database, then you want to know how to use SQL. And this combination of create, read, update and delete is commonly known as the CRUD operations. In this course, we'll focus mainly on the read operation. This is all about writing SQL to query the database for the data that you're interested in. Some history about SQL. It's an acronym that stands for structured query language, and it's been around for a long time. In fact, it was created in the 1970s before becoming a standard in the 1980s. By the way, how you pronounce SQL is often debated, which is why you may hear other people calling it SQL. There's a history behind the difference in pronunciation and I encourage you to research it if you're interested. Ultimately though, the pronunciation is a personal preference. For this course, I'm going to stick with SQL. This is the common pronunciation when referring to the language itself. Let's take a look at the component parts of an SQL statement. We'll learn more about what this statement is doing in future lessons.
>
> **[1:32](https://www.linkedin.com/learning/from-excel-to-sql-26502092/what-is-sql?u=76281980&t=92)** SELECT * FROM Employees WHERE tshirt_size = 'S'; the SELECT, FROM and WHERE words are known as keywords and will direct the database to take some kind of action for us. SELECT tells the database you want to find records and have them return back to you. FROM Employees tells the database which table to look in for the data you want. The WHERE tshirt_size = 'S' tells the database that you only want rows returned that have the tshirt_size field equal to S. The FROM Employees and the WHERE tshirt_size = 'S' are called clauses. An SQL statement is terminated with a semicolon. This tells the database where the end of the statement is. Now some databases allow you to end the statement without one. However, it's usually a best practice to end all statements with a semicolon. You'll notice that SELECT, FROM and WHERE are typed in uppercase since that's the SQL standard. However, this is not required and the statement will still work if written all in lowercase. I'm going to use uppercase keywords throughout the course. It'll help differentiate keywords from the [[Representational State Transfer (REST)|rest]] of the statement. Whew, that was a lot of theory. The good news is you don't need to worry about the history or origins of this language to be able to use it. With SQL, you only need to learn how to write questions that the database can understand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (14), [[Databases]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** sql (14), where (5), select (4), crud (1)
> **SQL:** where (5), select (4)
> **Definitions:** is a  (2), known as (2), stands for (1)
> **Code Identifiers:** tshirt_size (4)
> **CLI Commands:** find (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** before we start (1)


### 2. SQL Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Viewing data in SQL](https://www.linkedin.com/learning/from-excel-to-sql-26502092/viewing-data-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/viewing-data-in-sql?u=76281980&t=0)** - Imagine someone sends you a spreadsheet, maybe it's a finance report or search analytics for your website. One of the first things you might do is just have a look around. You'll want to get a sense of what kind of data you're looking at. What are the different column headings, how many rows are there, how do they relate to each other, and what kind of data format are used within the individual cells. Essentially what you're doing is just exploring, and when you first start working with an [[SQL]] database, you can do the same thing. One place you can start is by inspecting the database's structure and the data it contains. So let's open up DB browser and take a look around the sample database and if you're following along, you can access this database from the exercise files. And as you may recall, the first tab here is called database structure. And we can see here the tables that make up our database. And if we click here to expand the table, we can then see the columns and column names that each table contains. So in the employee's table, we can see that it contains a column name first name, which is a type text. Switching over to the browse data tab, you can view each individual table and the data it contains. So here I have the employee's table open and we can see all the records that are contained within that table. The final tab we're going to look at is the execute SQL tab, and here's where we're going to be able to run our first SQL statement against the database. And for our first statement,
>
> **[1:36](https://www.linkedin.com/learning/from-excel-to-sql-26502092/viewing-data-in-sql?u=76281980&t=96)** we're going to use the select keyword. Select gives you the ability to ask the database for data, and that's probably going to be the most common keyword that you use when working with SQL, so you'll definitely get used to seeing it. So we're in the execute query tab, and we're going to place our cursor in this first box and then enter select star from employees, and then hit the execute all button, the play symbol here. And there you go. You've just executed your first SQL statement. If it's worked, you should see 100 rows of data returned. So let's break down what this statement means. Firstly, you've started with the select keyword. Select tells the database that you're going to be asking for some data. Next, you've used a wildcard symbol, which is a star or asterisk, and this tells the database that you want everything it has back. Finally, we tell the database which table to get the data from, and we do that using the from keyword, followed by the table name, in this case, employees. You can also see from this statement that we've made some formatting choices. For instance, select and from are in uppercase. This has been done to highlight these keywords within the select statement, and they could actually be lower case if that's what you prefer. The line ends with a semicolon. Now you could leave this off, but not all database tools will let you get away with that.
>
> **[3:10](https://www.linkedin.com/learning/from-excel-to-sql-26502092/viewing-data-in-sql?u=76281980&t=190)** So I recommend that you leave it on. It just indicates the end of the statement. Great, you've now successfully run your first SQL select query. If you want to get some more practice, then as the next step, you can try selecting all the data from the department's table. Simply replace the employee's table name with departments, and hit execute. And there you go. We can now see the contents of the department's table. And the next time you need to get data out of a database, reach for the select statement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), cursor (1)
> **Env Vars:** sql (6)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** imagine (1), for instance (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - imagine (1)

#### [Identifying columns in SQL](https://www.linkedin.com/learning/from-excel-to-sql-26502092/identifying-columns-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/identifying-columns-in-sql?u=76281980&t=0)** - So let's say you want to narrow down your data to focus on some specific information. One of the things you can do is reduce the number of columns returned by your [[SQL]] query. So you're only looking at the data you want to see. Now, if you were doing this in [[Microsoft Excel|Excel]], you might choose to hide a column of data to remove it from view. You can perform a similar operation with your SELECT statement, but instead of hiding that column, what you're actually doing is not including that column in your query. So let's look at an example to understand how this works. Let's say you want to return only the first names of the employees within this database. All you need to do is write SELECT first_name From Employees
>
> **[0:48](https://www.linkedin.com/learning/from-excel-to-sql-26502092/identifying-columns-in-sql?u=76281980&t=48)** and then execute the query. Now, you can see in the results that only the first_name column has been returned. Okay, for this next query, what we're going to do is return the first and last names of each employee, and to do that, what you would do is add the last_names column to the SELECT statement separated with a comma. So what I'm going to do is add a comma and then last_name and then execute the query again. And if you needed to also see their employee ID, for example, you can keep adding on column names to the query. So again, another comma followed by id, and then execute the query. And we see that the first_name, last_name and id have been returned in the results. So let's say you were generating a report. Chances are you probably want to list employees by their last name. So in this case, you want to view the columns in a different order. And this is also really easy to do. You can make this happen by changing the order that they appear within the SELECT statement. So if you want the last name to appear before first name, you would type last_name, first_name, and then I'll remove this duplicate, and then execute the query again. And now, we can see the last_name appears before first_name in the results. Doesn't that look better? Now, the column names we have here make sense for a database, but this probably isn't something you want to include in your report.
>
> **[2:21](https://www.linkedin.com/learning/from-excel-to-sql-26502092/identifying-columns-in-sql?u=76281980&t=141)** So right now, the column name is last_name, and you'd like to change that to make it a little more friendly for your reader. Luckily, SQL gives us a way to create an alias for a column name. This essentially renames that column in the results. So to create an alias for a column, we're going to use the AS keyword. And to use the AS keyword, all we need to do is, after our column name, is just type AS followed by the name we want to give it within single quotes. So I'll use 'Last Name' and then, execute the query again. And now, we can see in the results, the Last Name is now the heading of the last_name column. One thing you can do now is just play around with the column orders and adding aliases to get used to how this works. That way, you'll be ready if you need to apply some of these simple actions to your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Microsoft Excel|Excel]] (1)
> **Code Identifiers:** last_name (6), first_name (5), last_names (1)
> **Env Vars:** select (4), sql (2)
> **SQL:** select (4)
> **CLI Commands:** make (3)
> **Analogies:** for example (1)
> **Speakers:** - so (1)

#### [Filtering rows in SQL](https://www.linkedin.com/learning/from-excel-to-sql-26502092/filtering-rows-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/filtering-rows-in-sql?u=76281980&t=0)** - Say you're working with an [[Microsoft Excel|Excel]] spreadsheet and it's filled with thousands of rows of data, the problem is you're only interested in a small amount of that data. So what you would probably do in that case is reduce down the size of the dataset by using a filter. We can do the same thing in [[SQL]] to filter your data stored in the database. What you're going to do is add a WHERE clause to your SELECT statement. So let's head over to DB Browser and we'll take a look at how to use the WHERE clause. Before we get started, it can be a good idea to view all the table's data using a SELECT * statement. That way you can get a sense of the column names and also the data within those columns. This will help you figure out how you want to filter the data. So in this case, I'm going to use SELECT * FROM Employees and then execute the query. So we can see that we have this department column, and that's going to be useful for us. Like we did in the Excel spreadsheet, we might want to run a query to find out who are all the employees who work in the marketing department. To do that, you would write SELECT statement like so SELECT * FROM Employees WHERE department = "Marketing" and finish with a semicolon. Then run the query. Okay, you can see in the results that six rows are returned and you can see that the only department return
>
> **[1:32](https://www.linkedin.com/learning/from-excel-to-sql-26502092/filtering-rows-in-sql?u=76281980&t=92)** is the marketing department. That's exactly what we wanted it to do. To choose a different department, simply replace the string Marketing with the name of another department like Sales, and then re-execute the query. And then this time only the employees within the Sales department are returned. One thing you might notice is the use of the = within the WHERE clause. And this means the [[Microsoft Word|word]] within the quotes needs to match exactly with the word in the column, and so = is case sensitive. So you need to make sure that what you enter exists within your database. So you just want to be careful because if you were to search for sales with a lowercase s, you're not going to get any results. It must be Sales with a capital S when using the =. If instead you want to search for a case insensitive value, you can replace the = with the LIKE keyword and then execute the query. And you'll see that we get back all the employees within the sales department. So let's say you're only interested in the first_name and last_name of each employee in the marketing department. You can return that data by replacing the wildcard character with the column names. In this case, first_name, last_name, and then rerun the query. If you want to make this query more readable, you can split it into multiple rows like so. Now another thing to keep in mind is that the order
>
> **[3:06](https://www.linkedin.com/learning/from-excel-to-sql-26502092/filtering-rows-in-sql?u=76281980&t=186)** of the SELECT, FROM and WHERE clauses are important. If you try to rearrange their order, you'll end up with an error because the SQL interpreter won't understand the request. So for example, if I move the WHERE clause above the FROM clause and then move the semicolon down to the end of the line and then re-execute the query, we see we get a syntax error because it doesn't understand the location of FROM. I'll put that back the way we had it and then re-execute to get back our previous results. So make sure you stick to SELECT first, FROM next and then WHERE. So let's [[Zoom]] out a little bit and consider the data for the whole company again. Let's say you want to find out who wears a large T-shirt size. You can write the query SELECT first_name, last_name FROM Employees WHERE tshirt_size = 'L';.
>
> **[4:35](https://www.linkedin.com/learning/from-excel-to-sql-26502092/filtering-rows-in-sql?u=76281980&t=275)** Great, looks like we have 10 large T-shirts to purchase. Now so far you've filtered data using text-based matches. If you want to match a numeric value, you would specify the number, only this time you can leave out the quotes. So back to our employee table, let's find the employee with the ID of 10. And to do that, you write the query of SELECT first_name, last_name FROM Employees. So I'm going to remove tshirt_size, and then specify the WHERE clause as being id = 10; and then execute the query. And you can see that only one record is returned, and that makes sense since only one employee has that ID. So there are lots of different reasons why you want to filter your data. It's a really useful tool. So if you're working in SQL, take advantage of the WHERE clause to return only the results that you need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Microsoft Excel|Excel]] (2), [[Microsoft Word|Word]] (2), [[Zoom]] (1)
> **Env Vars:** where (10), select (9), sql (3)
> **SQL:** where (10), select (9)
> **Code Identifiers:** first_name (4), last_name (4), tshirt_size (2)
> **CLI Commands:** find (3), make (3)
> **Warnings:** be careful (1), keep in mind (1)
> **Analogies:** for example (1)
> **Speakers:** - say (1)

#### [Combining filters in SQL](https://www.linkedin.com/learning/from-excel-to-sql-26502092/combining-filters-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/combining-filters-in-sql?u=76281980&t=0)** - When you filter your data, sometimes it's really simple and you're just looking to filter by one condition. With that dataset, that might be filtering your data to find everyone in the marketing department. But more often than not, you're likely going to want to use multiple conditions to filter your data by. For example, when you're looking at your employee database and you want to find everyone in the marketing department that wears a large T-shirt. So in this case, you're going to be combining filters by using the end operator. You might also want to filter your data by finding employees within the marketing or sales teams. This would be an example of combining filters using an OR operator. When working in [[Microsoft Excel|Excel]], you might choose to use a custom filter to do this. So for instance, if I want to filter by marketing and sales in the department column, I might choose text filters, custom filter, and then enter marketing and then select all and equals sales and then click Okay. Now you can see that the department column only shows sales and marketing employees. [[SQL]] provides some similar options for filtering the rows that are returned by the database. Let's see how this works in SQL. We'll go over to DB browser and then you're going to filter for employees within the marketing or sales teams. So let's start by writing our select statement. You would write select
>
> **[1:35](https://www.linkedin.com/learning/from-excel-to-sql-26502092/combining-filters-in-sql?u=76281980&t=95)** first name, last name, department from employees where department equals marketing or department equals sales. And once we run the query, you can now see that only employees from both departments are returned. Now, if you want to use an AND clause as in finding employees in the marketing department that have a T-shirt size of large, you can do this by using the AND operator. Here's what that would look like. So select first name, last name, department from employees where department equals marketing and T-shirt size equals L. Then when we run the query, we can see we get back the employees in the marketing department that wear a large T-shirt size. Now the last operator we're going to look at is NOT, so if you want to find all employees except those in the sales department, you can use the SQL operator NOT. To do this, we'll write select first name, last name, department from employees where department is not sales,
>
> **[3:14](https://www.linkedin.com/learning/from-excel-to-sql-26502092/combining-filters-in-sql?u=76281980&t=194)** and then execute the query. And you'll see that in the department column, there's all departments apart from sales. So the power of these operators comes when you combine them. Firstly, you can chain the same operator together. For example, you can search for employees across three departments by using multiple or operators. So if you want to search for everybody in the sales, marketing, and services departments, we'll update our query like so. So it'd be department equals sales or department equals marketing or department equals services. And then run the query. And you see that only employees from the services, sales, and marketing departments are returned. You can also combine AND, OR, and NOT operators together to create more specific queries. For instance, searching for all employees in the sales or marketing department who wear a large T-shirt size and who are not named Ricky. So to write that query, I'm going to clear what we currently have by discarding the query and then starting afresh. So select first name, last name,
>
> **[4:49](https://www.linkedin.com/learning/from-excel-to-sql-26502092/combining-filters-in-sql?u=76281980&t=289)** department from employees where department equals sales or department equals marketing, and T-shirt size equals L, and first name is not Ricky.
>
> **[5:32](https://www.linkedin.com/learning/from-excel-to-sql-26502092/combining-filters-in-sql?u=76281980&t=332)** And then execute the query. You can see that we're getting nine rows returned. Now there's something important I want to show you about this last query. Let's jump over to Excel and perform a filter for the same information of employees in the sales and marketing department that wear a large T-shirt size and are not named Ricky. So in Excel, we're already filtering the department by sales and marketing. So let's add a custom filter to the first name, which does not equal Ricky. And then let's filter the T-shirt size by using another custom filter that equals L. Now here you can see we get back three results and that doesn't match with what we were getting back from SQL. So what's going on here? To help debug this issue, let's head back to SQL and add in the T-shirt size column. So to add the T-shirt size, I'm going to add it to our column list, and then execute the query. So you can see that the department column includes only employees that are either in marketing or sales. So that looks correct. However, if you look at the T-shirt sizes, you can see that we aren't restricted only to the large T-shirt size. If you look closer at the results,
>
> **[7:04](https://www.linkedin.com/learning/from-excel-to-sql-26502092/combining-filters-in-sql?u=76281980&t=424)** you can see that employees that wear a large T-shirt size are being returned to the marketing department. For instance, Thor, who's in the marketing department is returning a T-shirt size of large. However, the sales department is returning all T-shirt sizes. This result set is being generated because of how the wear clause in the SQL query is being interpreted by the database. It interprets the wear clause from left to right. So this statement is asking for all employees in the sales department or all employees in the marketing department who wear a T-shirt size of large and have a first name that is not Ricky. These last three conditions have been combined together. To control which conditions are combined, you can add parentheses to the query. If you want to return only the employees from the sales or marketing departments that wear a large T-shirt size and are not named Ricky like we did in Excel, then you would add parentheses around the sales or marketing department statement like so.
>
> **[8:12](https://www.linkedin.com/learning/from-excel-to-sql-26502092/combining-filters-in-sql?u=76281980&t=492)** Rerunning this query again now returns the same three results that we expect and that matches the same filter that we had in Excel. Filters are very powerful, especially when you combine them. They allow you to extract specific combinations of data that you need. So think about how you can combine AND, OR, and NOT in your SQL queries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Microsoft Excel|Excel]] (5)
> **Env Vars:** sql (7)
> **Analogies:** for instance (3), for example (2)
> **CLI Commands:** find (3)
> **Speakers:** - when (1)

#### [Limiting results in SQL](https://www.linkedin.com/learning/from-excel-to-sql-26502092/limiting-results-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/limiting-results-in-sql?u=76281980&t=0)** - So, generally, when you first start executing [[SQL]] queries, it's pretty normal to let the database return all the rows of results that it has available. And when you're working with a small data set, like we have in these examples, then the database isn't going to have a problem returning a few 100 rows or even a few 1000. But if you're working with a database table that stores millions of rows, this isn't going to work so well. Requesting all that data can have a performance impact on the database and how quickly your results are returned. Think of it this way, when you do a search on [[Google]], it's only showing you the first 10 results, even though there are thousands of possible results, it could show you, it controls the number of results that you see. So, to reduce the number of rows of data that's returned for your queries, you can use the limit keyword. Let's head over to DB Browser and have a look at how you can use the limit keyword. To get started, we're going to use a select statement and I'll use Select, star, from employees. (computer keys clacking) And now when we execute the query, (computer mouse clicking) you can see that we get back a 100 rows, which matches the total number of rows in this table. Now, to return the first 10 rows, we can use the limit keyword. And to do that after the from statement we type limit. (computer keys clacking) Followed by the number of records you want to return. So, in this case, that'll be 10. We run the query again,
>
> **[1:34](https://www.linkedin.com/learning/from-excel-to-sql-26502092/limiting-results-in-sql?u=76281980&t=94)** and this time you can see that we got 10 results back. And these are all the first 10 records that match our query. Let's take this a step further and add a where clause to our query. This time, let's search for employees with a T-shirt size of large. So, I'll add where, T-shirt size, (computer keys clacking) equals L. (computer keys clacking) Once again, we run the query and you can see we still got 10 results back, but this time they're all employees that wear a large T-shirt size. Now, you might be thinking it's great that you can see the first 10, but what about the [[Representational State Transfer (REST)|rest]]? What if for some reason you need to see the 11th record and find out who that employee is? You could set your limit to 11 and return 11 records, or you could combine limit with an offset. For example, setting limit to one and the offset to 10. What the offset is doing is skipping over the first 10 records and then showing you the next record that matches the query. So, again, back in DB browser, let's update the query to include an offset. The offset will appear after the limit number. Like so. (computer mouse clicking) Unlike the limit, you add a number that represents a number of records to skip, in our case 10. And I'm going to set the limit to one. We execute the query
>
> **[3:06](https://www.linkedin.com/learning/from-excel-to-sql-26502092/limiting-results-in-sql?u=76281980&t=186)** and we can see we get back one result, which is the 11th employee that wears a large T-shirt. So, think about when you might want to limit your results, It can be really useful when working with a large data set. And remember, you are not restricted. Using Offset can help you work past that limit if you need to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Google]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Non-Speech:** (computer mouse clicking) (2)
> **CLI Commands:** find (1)
> **Env Vars:** sql (1)
> **Analogies:** for example (1)
> **Speakers:** - so (1)

#### [Comparison operators in SQL](https://www.linkedin.com/learning/from-excel-to-sql-26502092/comparison-operators-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/comparison-operators-in-sql?u=76281980&t=0)** - [Instructor] When working with a WHERE clause, it's useful to know the different kinds of comparison operators you can use to filter your data. So to demonstrate them, what I've done here is create a simple query, which is going to select all information about an employee based on some criteria. So if you want to find out all those employees that have used exactly nine days of vacation, we use the = comparison operator. And so we'll write: WHERE vacation_taken = 9, and then run the query. And when we can see we've got two employees that match that criteria. Now, if you want to know who's taken greater than nine vacation days, we can change the = operator to the > operator, and rerun the query. And now we see all those who've taken more than nine days vacation. We can combine > and = together to create the >= operator. And so this will include everyone who's taken nine days and above. If we want to find out those employees that have taken less than nine days, we can use the < operator. And again, we run the query, and now we can see all those employees that have taken less than nine days vacation. And again, we can combine < with = to find those who have taken <= to nine days vacation.
>
> **[1:35](https://www.linkedin.com/learning/from-excel-to-sql-26502092/comparison-operators-in-sql?u=76281980&t=95)** It's also possible to find those employees that have not taken nine days vacation. And to do that we use, the not operator. And the not operator is represented by the <> symbols combined. Also for not, you can use the IS_NOT phrase, like so,
>
> **[2:01](https://www.linkedin.com/learning/from-excel-to-sql-26502092/comparison-operators-in-sql?u=76281980&t=121)** and run the query. So when you're looking to further filter your data, make sure you look for the comparison operators.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4), make (1)
> **Env Vars:** where (2), is_not (1)
> **SQL:** where (2)
> **Code Identifiers:** vacation_taken (1)
> **Speakers:** - [instructor] (1)

#### [The LIKE operator in SQL](https://www.linkedin.com/learning/from-excel-to-sql-26502092/the-like-operator-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/the-like-operator-in-sql?u=76281980&t=0)** - [Instructor] So, one operator you're going to find really useful when working with [[SQL]] is the LIKE operator. And the LIKE operator allows you to search for patterns within a column. So, to demonstrate this, I've set up a simple query that will search the employee's table for any employees matching a certain criteria. And for that criteria, we're going to use the LIKE operator. Now, the LIKE operator is powerful, and I'll demonstrate some of that power right now. So, let's say you want to find all employees whose last name begins with a T. To do that, we'll write the WHERE clause like this. So, WHERE last_name LIKE, and then in quotes, we'll put a T followed by the percent sign. The percent sign here represents zero, one, or multiple characters after the T, so when we were in the query, we'll see that we get back employees whose last name begin with T. We can also place multiple percent signs within a query. So if you want to find employees who have a T somewhere within their last name, we can update our query by putting a percent at the beginning after the first quote, replacing T with lowercase t, and then leaving the second percent sign. When we run the query, we can see now that we get results where a T appears somewhere in the employee's last name. You can also use an underscore with the LIKE operator,
>
> **[1:35](https://www.linkedin.com/learning/from-excel-to-sql-26502092/the-like-operator-in-sql?u=76281980&t=95)** and that matches a single character. So, for example, if you wanted to find out all the employees whose last name's second letter is an A, you could rewrite the LIKE statement like so. We replace the first percent with underscore and the t with an a, and then run the query. And now we can see that all the last names have an A as a second character. You can combine the underscore and the percent in a number of ways within the LIKE operator, so it really is a powerful function. So, the next time you need to find patterns in your data, make sure you reach for the LIKE operator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **CLI Commands:** find (5), make (1)
> **Env Vars:** where (2), sql (1)
> **SQL:** where (2)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** last_name (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)


### 3. Working with Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Using SUM in SQL](https://www.linkedin.com/learning/from-excel-to-sql-26502092/using-sum-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/using-sum-in-sql?u=76281980&t=0)** - One of the most popular functions in [[Microsoft Excel|Excel]] is a Sum function. Chances are, if you have some experience with Excel, that you've probably used it to add up the contents of a column. So to get started, let's just take a quick look at how this function works in the example Excel spreadsheet. Here on the Department sheet, we can use Sum to add up the number of desks across all departments. So you write =SUM(E2:E11).
>
> **[0:31](https://www.linkedin.com/learning/from-excel-to-sql-26502092/using-sum-in-sql?u=76281980&t=31)** And then hit Enter. And you can see the number of desks is 606. Well, it just so happens that [[SQL]] has its own Sum function that can be used to add up the numbers of a column just like you would in Excel. Let's open up DB Browser and take a look at how you can use the Sum function in SQL. You start with Select. And this time, you're going to type Sum, open parentheses, and then add the name of the column you want to sum, in this case, num_desks, and then close parentheses. Next, you add From Departments as this is the table that contains the num_desks column. So what we're doing is telling the SQL interpreter that we want to run the Sum function over the number of desks column from the Departments table. So we run the query, and there you have it. The value of num_desks is 606, and that matches what we saw in the Excel spreadsheet. So this is a good example of adding up one entire column, but what if you wanted to add together a subset of rows? In Excel, you would do this by changing the cell reference within the Sum function. So back in Excel, if I want to update the sum, I can do so by updating it in the editor and update it to be 8, and then hit Enter.
>
> **[2:08](https://www.linkedin.com/learning/from-excel-to-sql-26502092/using-sum-in-sql?u=76281980&t=128)** And you see, we get 463 as a result. In SQL, if you want to be able to add up a subset of rows from a column, you have to work it a little bit differently to how you do in Excel because there are no cell references. So what you have to do instead is add a Where clause to your query. The question you want to ask yourself at this point is, what should that Where clause look like? Because you don't have cell references, you have to figure out another way to identify the rows of data you want to include in your sum. For example, if you wanted to add up the number of desks for the first five records in the Departments table, you can use the ID column. So let's update our current Select statement by adding a Where clause. And we'll say, Where ID is greater than or equal to 1 and ID is less than or equal to 5. Run the query again to see the result, and there you have it. So the next time you want to add up the values in SQL, make sure you reach for the Sum function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (8), [[SQL]] (5)
> **Env Vars:** sql (5), sum (1), e11 (1)
> **Code Identifiers:** num_desks (3)
> **Definitions:** is a  (2)
> **Analogies:** just like (1), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - one (1)

#### [AVG, MIN, MAX, and COUNT in SQL](https://www.linkedin.com/learning/from-excel-to-sql-26502092/average-min-max-and-count-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/average-min-max-and-count-in-sql?u=76281980&t=0)** - When working with numbers in a database, [[SQL]] provides some useful functions. Let's take a look at a few of the most popular ones that might come in handy as you're analyzing your data. You've likely come across the average function in [[Microsoft Excel|Excel]]. This will calculate the numerical average of a collection of numbers. So you might use this to calculate something like the average test scores, or in sales, the average number of deals per month. In our example spreadsheet, let's use average to calculate the average number of vacation days taken by our employees. So to do that, I'm going to scroll to the bottom to the vacation column, and then type =average (keyboard clacking) G2, G101. And then you can see the average number of vacation days taken. Let's hop over to DB browser to check out the equivalent in SQL. For our example, let's create a new query that's going to find the average number of vacation days for our employees, just like we did in Excel. So like the sum function, we specify the column we wish to average in the parentheses of the average function. So we'll start with select, and the average function in SQL is called AVG. (keyboard clacking) And then we'll open parentheses and type the column name that we're interested in. In our case, it'll be vacation taken. Then close parentheses. Next we add the from employees, (keyboard clacking)
>
> **[1:34](https://www.linkedin.com/learning/from-excel-to-sql-26502092/average-min-max-and-count-in-sql?u=76281980&t=94)** as this is a table that contains vacation taken column. Then run the query, and we can see the result. So we see this number's a little low, and we might want to encourage our employees, to take more time off. Now let's say you only wanted to focus in on those employees in the marketing department. We can do this pretty easily by just adding a where clause to our query. (keyboard clacking) So in this case, we'll add where. (keyboard clacking) Department=marketing. And then rerun the query. Now we can see the average vacation taken by our marketing department. So let's now take a look at some other popular functions in SQL. You can find the minimum value within a column by using the min function. In our case, this will help you get a sense of what's the lowest number of vacation days people are taking. Let's do that by changing average to min. (keyboard clacking) And I'm going to remove the where clause because I'm interested in all the employees, and let's execute the query. And we can see here that someone has only taken .4 of a day off in vacation. Now, if you want to see the other side of the story and look at what the maximum number of vacation days our employees have used, we can do that using the max function. Let's do that by changing min to max,
>
> **[3:08](https://www.linkedin.com/learning/from-excel-to-sql-26502092/average-min-max-and-count-in-sql?u=76281980&t=188)** and then rerun the query. (keyboard clacking) And now we see the most days anyone has taken is 29.9 days. The final function we're going to look at is the count function, and count simply tells you how many rows match a certain piece of criteria. In our case, maybe we want to find out how many employees have taken off more than 20 days. To do this, you can write select, count. (keyboard clacking) And I'm going to add ID into the parentheses, from employees where (keyboard clacking) vacation taken is greater than 20. And rerun the query. And we can see that the result is 39. So as you work through your numerical data, keep each of these functions in mind. Average, min, max, and count may come in handy. And remember, you can always try adding a where clause to specify your data even more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Microsoft Excel|Excel]] (2)
> **Env Vars:** sql (4), g101 (1), avg (1)
> **CLI Commands:** find (3)
> **Definitions:** is called (1), is a  (1)
> **Versions:** 29.9 (1)
> **Analogies:** just like (1)
> **Speakers:** - when (1)

#### [Finding unique values in SQL](https://www.linkedin.com/learning/from-excel-to-sql-26502092/finding-unique-values-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/finding-unique-values-in-sql?u=76281980&t=0)** - So in our example, when we're looking at the T-shirts for our employees, we have a few different size possibilities. There might be some smalls, mediums, and larges, but there could also be some extra, extra smalls or some extra, extra large. And we want to make sure we're aware of all the possible sizes. For instance, imagine that you want to find out what the unique T-shirt sizes are that you need to purchase for a company event. You want to have an idea of the full range so that you can find a manufacturer that covers every size, but you don't necessarily want to scroll through and look at each employee individually. Now in [[Microsoft Excel|Excel]], there are multiple ways you can view the unique values within a column. One way you might choose is to use the advanced filter within the data section for Excel. So along the top here, I'll choose Data, then choose Advanced, and then I'm going to copy to a new location. And then I'm going to choose the column I'm interested in filtering, which will be tshirt_size. I'm going to set the criteria range to also be tshirt_size,
>
> **[1:09](https://www.linkedin.com/learning/from-excel-to-sql-26502092/finding-unique-values-in-sql?u=76281980&t=69)** and then I'm going to copy into I, and then select the unique records only checkbox, and then click OK. And now we can see we have the unique values for this column, and this represents the combination of T-shirt sizes that our employees wear. What we have here is now a list of the distinct values with all the duplicates removed. As we move over to [[SQL]], we can find the unique values within a column by using the DISTINCT function. So let's take a look at how to use the DISTINCT function to list the unique T-shirt sizes for our company. So let's open up DB Browser and switch to the Execute SQL tab. We can start the query with SELECT followed by DISTINCT, and then open parentheses, and then add the column name that you want to extract unique values from. And in this case, it'll be tshirt_size. Finally, close parentheses. The tshirt_size column is in the Employees table, so we'll add FROM Employees. We can now run the query. And there you have it. We now have a list of the unique values within the tshirt_size column. So you'll notice in the results that one of the unique values is listed as NULL. What this means is that some people don't have a T-shirt size specified in the table. So here NULL represents an empty record.
>
> **[2:44](https://www.linkedin.com/learning/from-excel-to-sql-26502092/finding-unique-values-in-sql?u=76281980&t=164)** Because NULL is still a unique value, it still appears in the results. If you want to remove the NULL value from the listing, you can do so by adding a WHERE clause to the query. And we can do that like this. So we add a WHERE below FROM where tshirt_size IS NOT NULL, and then rerun the query. And now you can see that the NULL value no longer appears in the results. So finding unique values within a column in SQL is pretty simple. You only need to use the DISTINCT function. And this can come in pretty handy as you explore your own data. Instead of having to scroll through the results, you can easily get a sense of whatever unique values you might need by using this simple function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Microsoft Excel|Excel]] (2)
> **Env Vars:** null (6), distinct (4), sql (3), where (2), select (1)
> **Code Identifiers:** tshirt_size (6)
> **CLI Commands:** find (3), make (1)
> **SQL:** where (2), select (1)
> **UI Navigation:** select the (1), checkbox (1), switch to (1)
> **Analogies:** for instance (1), imagine (1)
> **Speakers:** - so (1)

#### [UPPER, LOWER, and LENGTH in SQL](https://www.linkedin.com/learning/from-excel-to-sql-26502092/upper-lower-and-length-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/upper-lower-and-length-in-sql?u=76281980&t=0)** - [Instructor] So some functions you might find useful in [[SQL]], especially when working with text data, are the UPPER, LOWER, and LENGTH functions. To demonstrate how these work, I've created a simple SQL statement, and we'll update the SELECT to include these functions, so let's first look at the UPPER function. We pass UPPER a column name, and what it'll do is return that column name but with all the data inside it changed the uppercase, so let's run the query, and now you can see all the first names are now in uppercase. We can change UPPER to LOWER and then rerun the query, and we'll see now that all the first names are in lowercase. To show the LENGTH function, we just replaced LOWER with LENGTH, and now when we run the query, we find out the LENGTH of each of the first names within the column. You can also make use of these functions within the WHERE clause, so for instance, if you wanted to find out first names whose length is greater than four, we would add a WHERE clause for LENGTH (first_name) > 4; and then run the query,
>
> **[1:35](https://www.linkedin.com/learning/from-excel-to-sql-26502092/upper-lower-and-length-in-sql?u=76281980&t=95)** and now we see we have a list of all the names whose length is greater than four. If we want to shorten the list, we can search for names that are greater than eight characters in length, and there you have it, so when you're working with text data, it can be useful to reach for the UPPER, LOWER, and LENGTH functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Env Vars:** length (6), upper (5), lower (4), sql (2), where (2)
> **CLI Commands:** find (3), make (1)
> **SQL:** where (2), select (1)
> **Code Identifiers:** first_name (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 4. Organizing Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Sorting data](https://www.linkedin.com/learning/from-excel-to-sql-26502092/sorting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/sorting-data?u=76281980&t=0)** - [Instructor] Say you've run your query and you have a set of results back from the database, that's great, but the data doesn't really mean much to us yet. One of the ways we can better understand our data is by sorting it. When it comes to sorting data in an [[Microsoft Excel|Excel]] spreadsheet, it's pretty simple. You just select a column you want to sort and then choose how you want to sort it. So in the employee's worksheet, I'll select Data and then activate the filters on each column. And then if I want to sort the first name in alphabetical order, I can just click the dropdown option and Sort A to Z. And here we can see that now the names are all sorted alphabetically from A to Z. So how can you sort your results in [[SQL]]? Well, all you have to do is add an order by clause to your query. Let's take a look at how this works. So open up DB Browser, and let's start with the query select first name and last name and T-shirt size from employees, and then run the query. By default, the order of the results is based on the order that the records were inserted into the database. So let's now order these results instead by the first name of each employee. And we do that by updating our query to include the order by and it'll appear after from.
>
> **[1:33](https://www.linkedin.com/learning/from-excel-to-sql-26502092/sorting-data?u=76281980&t=93)** ORDER BY, and now we include the name of the column that we want to order the results by. And in this case, it'll be first_name. Let's rerun the query. And there you have it, you can now see that the records have been ordered in alphabetical order, starting at A. And if we scroll down to the bottom, you see that it ends at Z. Now ascending order is the default, but what if we want to see the results in reverse alphabetical order? All we need to do is tell the database that we want the results in descending order. And we can do that by updating our ORDER BY clause like so. So as part of the ORDER BY, after first_name, we add DESC. And this tells the database that we want the results in descending order. So when we rerun the query, we can now see that Yulma is at the top of the list. Great. And just to try it out, let's get this list back in ascending order. Now that's the default, but we can also explicitly specify this. All we do is replace DESC with ASC, and then rerun the query. Now our results are back in alphabetical order again. Now, you aren't just limited to ordering results by a single column, you can also easily order results by multiple columns. Let's take a look.
>
> **[3:05](https://www.linkedin.com/learning/from-excel-to-sql-26502092/sorting-data?u=76281980&t=185)** So firstly, we're going to order the results by T-shirt size, and then within each T-shirt size group, we're going to order by their first name. So let's update the ORDER BY clause and let's add tshirt_size. And I'm going to make it descending order so that we can see extra small first in the list. And then we're going to add first_name as our second ORDER BY grouping, and then rerun the query. You can now see that our results are ordered by tshirt_size and then within each tshirt_size, we can see that the names have been ordered alphabetically by their first_name. You can specify the ordering on any of the columns in the ORDER BY clause. So we can also add descending order to the first_name and rerun the query like so. And now you can see that the names have been reordered within each tshirt_size group. So there you have it. As you can see, there are lots of different ways you can sort your results, so experiment with what you've learned here to find out what's going to work best for your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1), [[SQL]] (1)
> **Env Vars:** order (6), desc (2), sql (1), asc (1)
> **Code Identifiers:** first_name (5), tshirt_size (4)
> **SQL:** order by (6)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** dropdown (1), scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Grouping data](https://www.linkedin.com/learning/from-excel-to-sql-26502092/grouping-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/grouping-data?u=76281980&t=0)** - Now we know that the power of data doesn't really come from rows and rows of results. The power of data comes from the insights we can extract from it. And organizing your data is one of the key steps you can take to better understanding it. So let's take a look at a simple way you might organize your data. Let's imagine that you're responsible for employee headcount within your company. So you want to find out how many employees each department currently has. The output we want to see is the department name followed by the number of employees in that department. To organize results in this way, we need to take advantage of the GROUP BY clause. Let's open up DB Browser and take a look at how to use the GROUP BY. So the first thing we do is specify the information we want to return from the database. So let's SELECT department, which represents the department name, and then we want to count each employee within that department. And to do that, we'll use COUNT(department), which will count each occurrence of that department within our table. Next, we write FROM Employees since this is a table that contains the data we need. Now after the FROM clause is where we specify our GROUP BY. We want the results to be grouped by department so I'll write GROUP BY department;
>
> **[1:32](https://www.linkedin.com/learning/from-excel-to-sql-26502092/grouping-data?u=76281980&t=92)** and now we can run the query. And there you have it, we can now see how many employees belong to each department. If you want to clarify your results even further, you can add an ORDER BY clause after the GROUP BY like so. So if I want to group the departments in alphabetical order, we add ORDER BY department; and then rerun the query. And now we can see the departments are in alphabetical order. Let's take our example a little further and focus on departments that have a headcount less than 10. We can do this by adding a HAVING clause to our GROUP BY. The HAVING clause works very similar to a WHERE clause. Let's update our query to include the HAVING clause. And the HAVING clause will appear after GROUP BY and before the ORDER BY. So let's add HAVING COUNT (department) less than 10, and now rerun the query. And now you can see our results have been filtered to only include departments with a headcount less than 10. Now there's one more step you can take to clean up this [[SQL]] query, and that's to remove the duplicate COUNT department condition here. We can do that by using an alias in a SELECT statement. Let's add the alias to COUNT department using AS
>
> **[3:08](https://www.linkedin.com/learning/from-excel-to-sql-26502092/grouping-data?u=76281980&t=188)** and call it NumberOfEmployees.
>
> **[3:19](https://www.linkedin.com/learning/from-excel-to-sql-26502092/grouping-data?u=76281980&t=199)** Now in the HAVING clause, we can replace COUNT(department) with NumberOfEmployees.
>
> **[3:32](https://www.linkedin.com/learning/from-excel-to-sql-26502092/grouping-data?u=76281980&t=212)** After rerunning the query, you can see that we get back the same results. That's great. And our SQL query is easier to read and understand. As you can see, this was a pretty simple example that we ran through, but you can imagine how many uses there might be for the GROUP BY clause. And it becomes especially powerful when you add a HAVING clause to dial down your data even more. So when you need to reorganize or summarize your data, GROUP BY is a tool to reach for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Env Vars:** group (9), having (7), count (5), order (3), select (2)
> **SQL:** group by (9), having (7), order by (3), select (2), where (1)
> **Analogies:** imagine (2), similar to (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Speakers:** - now (1)

#### [Using a pivot table in SQL](https://www.linkedin.com/learning/from-excel-to-sql-26502092/using-a-pivottable-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/using-a-pivottable-in-sql?u=76281980&t=0)** - So let's imagine you want to find out how many t-shirts of each size you need to purchase for all the employees in your company. In [[Microsoft Excel|Excel]], you could use a simple pivot table to put this kind of data together, and perhaps you already have some experience with [[Pivot Tables]] doing something similar. So what would this look like in [[SQL]]? In the sample spreadsheet, I provide an example of a pivot table under the pivot table Employees sheet. And you can see in this pivot table, we have the t-shirt sizes listed, and then how many of the t-shirt sizes we'd need to purchase. So let's open up DB Browser and have a look at how we might create a pivot table. Right off the bat, you'll need to know that there is no pivot table command or function in SQL, but don't worry. You can achieve similar results in SQL by making use of the GROUP BY clause. So within DB Browser, let's create a query to return the number of t-shirts in each size. We start with the SELECT, and we're going to specify tshirt_size followed by a comma, and then write COUNT(*) and then we'll add an AS clause and specify a value of Total. This will make sure the column is named Total in the results. This COUNT value will calculate the total for each t-shirt size. Now add FROM Employees to the end of the query. If you ran this query right now,
>
> **[1:38](https://www.linkedin.com/learning/from-excel-to-sql-26502092/using-a-pivottable-in-sql?u=76281980&t=98)** what would happen is you'd get back a single record with a total of 100. So let's give that a try. And now you can see we have one t-shirt size and a total of 100, and that's because we haven't added anything to actually group the t-shirt sizes together. So to tell the database that you want to group together your results, add a GROUP BY clause, followed by the column you want to group. In this case, that'll be tshirt_size. Let's run the query. Great. That's starting to look better. You now know how many t-shirts of each size to buy, but if you start to look a little closer, you can see that this first item has a t-shirt size of null. This shows that you have some employees, 18 in total in the database that don't have a t-shirt size specified for them. The null here isn't really helpful for us, so let's remove this value from our results. And you can do that by using the HAVING clause. So we'll add HAVING tshirt_size IS NOT NULL and then run the query. And there you have it. The null value is no longer shown. We will have to follow up with all those employees on their t-shirt size. So the pivot table in this example is pretty simple and we were able to easily replicate it using SQL with only a GROUP BY clause.
>
> **[3:10](https://www.linkedin.com/learning/from-excel-to-sql-26502092/using-a-pivottable-in-sql?u=76281980&t=190)** Of course, a more complicated pivot table would require more complicated SQL queries to achieve the same results. As you get more experienced, this will become more natural. So just keep at it, keep practicing, and you'll continue to develop your SQL knowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Microsoft Excel|Excel]] (1), [[Pivot Tables]] (1)
> **Env Vars:** sql (6), group (3), count (2), having (2), select (1)
> **SQL:** group by (3), having (2), select (1)
> **Code Identifiers:** tshirt_size (3)
> **CLI Commands:** find (1), make (1)
> **Analogies:** imagine (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - so (1)

#### [Subqueries in SQL](https://www.linkedin.com/learning/from-excel-to-sql-26502092/subqueries-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/subqueries-in-sql?u=76281980&t=0)** - Let's say you want to zero in on some specific information from your dataset. For example, maybe you want to find the employee that has taken the most vacation days in your company. So how can we do that? What should our [[SQL]] statement look like? Let's head over to DB Browser and see what we might do. Now, a pretty logical place to start is by selecting all the employees and ordering them by vacation days. So let's start with select, star, from employees, order by vacation taken, and then run the query. Okay. You can see here we're looking at the employee who's taken the least amount of vacation days, and that's Gilly. We'll need to flip this around. So let's return the results in descending order by using the descending keyword. And we do that by adding DESC to the order by. After we've made that change, we can rerun the query. And now we see that Basil has taken the most vacation days within the company. So we were able to find the answer, but we did get a lot of results back when we only needed one. If you want to return a single record for this question, you can use something called a subquery. A subquery is a secondary select statement to your SQL. This lets you dig in deeper
>
> **[1:32](https://www.linkedin.com/learning/from-excel-to-sql-26502092/subqueries-in-sql?u=76281980&t=92)** and be more specific with your data. Let's take a look at how you can use a subquery to find the one employee who's taken the most vacation days. So in our current query, let's replace the order by with a where clause. And the column we're interested in is vacation taken. So I'll write where vacation taken. Next, we're going to add an equal sign and then open a parentheses and then type, select max vacation taken from employees and then closed parenthesis. The second select statement that we've just added is going to return the value of the maximum number of vacation days of from the employee table. Then that value will be applied to our where clause. And that's how we get the employee who's taken the most vacation. Let's run the query. And we can see that we get back Basil again. And this time we've only returned a single record. That's great. Now, if you want to update the query to find the employee that's taken the fewest days, you can simply change max to min. And now when we rerun the query, we can see that Gilly has taken the least vacation.
>
> **[3:08](https://www.linkedin.com/learning/from-excel-to-sql-26502092/subqueries-in-sql?u=76281980&t=188)** So as you become more familiar with your database and running queries, think about the information you need to extract that's a little more specific. You can use subqueries to do just that. They're a powerful tool, and subqueries can help you narrow down or zero in on particular details from your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **CLI Commands:** find (4)
> **Env Vars:** sql (2), desc (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - let (1)

#### [Advanced subqueries in SQL](https://www.linkedin.com/learning/from-excel-to-sql-26502092/advanced-subqueries-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/advanced-subqueries-in-sql?u=76281980&t=0)** - So we know the subqueries let you drill down on specific results within a single table. In the [[SQL]] query you can see here, I'm using a subquery to find the highest number of vacation days taken by any employee, and then returning those employees that match those many days. Now we can take this a step further and make subqueries do even more by combining data from two or more tables. So let's imagine that you want to find all the employees who work in the same state, let's say California. Okay, let's use DB Browser to help us figure out how we can answer this question. Because we're going to be working with data from multiple tables, it's a good idea to just take a quick look at the relationships between those tables. So to start, let's look at the Employees table in the Browse Data tab. Now remember, we're trying to identify employees who work in California, but as you can see, there's no state information in the employee's table. What we do have is the name of the department that each employee works in. Okay, let's switch over to the Departments table and look at that data. And now you can see that a Departments table does have some state information. So you can start to think about how you might combine this data. You can use the name column of the Departments table and match it with the Departments column from the Employee table. Then we'd specify the state as California.
>
> **[1:33](https://www.linkedin.com/learning/from-excel-to-sql-26502092/advanced-subqueries-in-sql?u=76281980&t=93)** Let's go to the XQ SQL tab, and create the query. And to do so, I'm going to clear our current query by clicking the Close Tab button and then click Discard. So we'll write SELECT * FROM Employees WHERE department =, and this is where we'll start a new subquery. And we do that by opening the parentheses, and then typing (SELECT name FROM Departments WHERE state = 'CA')
>
> **[2:26](https://www.linkedin.com/learning/from-excel-to-sql-26502092/advanced-subqueries-in-sql?u=76281980&t=146)** for California, and then close parentheses. Now run the query. All right, so now we have a list of all the employees who work in the [[Business Development]] department in California. Let's verify that we're getting the right information by running the subquery on its own. And to do that, I'm going to copy this subquery with Control + C, and then I'm going to open a new tab in the XQ SQL panel. And next I'm going to paste with Control + V. Now let's run the query. And you see that we get back one department, Business Development, and that matches the department that we re-returned in our original query. So we're good to go. So let's update this query, and search for employees in Oklahoma. So our place, CA, with OK for Oklahoma, and then rerun the query. And now you can see we're getting back a list of employees in the Support department. That looks good, but let's just do a quick check to verify. So we'll do as we did before and copy the subquery, create a new tab in XQ SQL, paste the query, and then rerun it. Huh. We get back two departments. So our previous query should be returning employees
>
> **[4:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/advanced-subqueries-in-sql?u=76281980&t=240)** from both the Support and Engineering departments. However, currently, it's only returning back the Support department. So it turns out that the problem is how this work clause in the primary query has been written. The department = only considers the first value returned by the subquery. And because the subquery is returning a list of items, we're not taking into account all those items within that list. The fix is a simple one to make. You can replace = with IN. The query is now telling the database that you want employees in all departments in Oklahoma. So when we rerun the query, we can now see that we're getting back employees from both the Support and then Engineering departments. To make this even clearer, let's add an ORDER BY to the query. So we'll add ORDER BY department; and then rerun the query. And we can now see that the department column has been ordered. Great, so we've seen the subqueries not only allow you to drill down on specific pieces of data within the same table, but they also allow you to do so across multiple tables. Now, as you work with more tables, be sure to verify your queries. You can always run your subqueries by themselves to confirm
>
> **[5:35](https://www.linkedin.com/learning/from-excel-to-sql-26502092/advanced-subqueries-in-sql?u=76281980&t=335)** that they're returning the correct information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Business Development]] (2)
> **Env Vars:** sql (4), select (2), where (2), order (2)
> **SQL:** select (2), where (2), order by (2)
> **CLI Commands:** make (3), find (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - so (1)


### 5. Combining Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Using joins](https://www.linkedin.com/learning/from-excel-to-sql-26502092/using-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/using-joins?u=76281980&t=0)** - When working with a database, you might find the information you're looking for is spread across multiple tables, and this is pretty common. So let's take a look at how you can ask a question across more than one table. Let's open up DB browser and view the contents of the department's table using the Browse Data tab. You can see here that we have an office_manager Id, but what if we wanted to find out the names of the [[Microsoft Office|office]] managers for each department? Names are stored in the Employees table. Now the office_manager Id from the Department's table is related to the ID column in the Employees table. And this is important because we can use this relationship to ask the database for the names of the office managers. Let's head over to the Execute [[SQL]] tab and start our query. To start, we'll ask for the first and last names of each employee and ask for the department name. So to do that, we'll write, SELECT first_name, last_name, and name. Now we need to specify which tables will provide this information. So we'll specify FROM Employees, and this will return the first and last names of each employee.
>
> **[1:33](https://www.linkedin.com/learning/from-excel-to-sql-26502092/using-joins?u=76281980&t=93)** And then we'll add the department's table by using a JOIN clause. Let's take a look. So after the FROM clause, we'll type, JOIN followed by the name of the table that we want to add into the query, in this case it'll be Departments, and then let's run the query. Okay, we can see we're actually getting back 1,000 results, and that's not what we're looking for. We should be getting back a much smaller number of results, but instead it looks like every row in the Employees table has been combined with every row in the Departments table. So to get to the information we want, we need to be more specific with our JOIN clause. We know that we only want to return the office managers. So let's ask for them. To do so, we update our query by adding an ON clause to our JOIN. So after the JOIN, you type, ON Employees.id = Departments.office_manager_id.
>
> **[2:52](https://www.linkedin.com/learning/from-excel-to-sql-26502092/using-joins?u=76281980&t=172)** This ON statement tells our database that you're only interested in records where the Employee Id matches the office_manager Id. When you run the query now, you can see that we get back the names of each office manager within the company. So as you learn more about the relationships between the tables within your database, think about what questions you can ask that can be answered by multiple tables. The JOIN clause gives you a simple way to combine tables and provide these answers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (4), [[SQL]] (1)
> **Env Vars:** join (6), sql (1), select (1)
> **SQL:** join (6), select (1)
> **Code Identifiers:** office_manager (3), first_name (1), last_name (1), office_manager_id (1)
> **CLI Commands:** find (2)
> **Speakers:** - when (1)

#### [The different types of joins](https://www.linkedin.com/learning/from-excel-to-sql-26502092/the-different-types-of-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/the-different-types-of-joins?u=76281980&t=0)** - So when you're working with data that's spread across multiple tables, you have some options for how to combine that data. Now, when we started with the basics on the join clause, we combined two tables to find the names of the company's [[Microsoft Office|office]] managers, and here's how we wrote that query. And now let's quickly run that query again. You can see we get back 10 results and this type of join is known as an inner join and can be written as such by adding "inner" to the join clause. Like so. If we rerun the query, we get back the same results, as we would expect. So a little more about the inner join. It returns any values that exist in both the tables we're joining together, given the condition specified in the ON clause. And this is why we get back only the names of the office managers, because their ID appears in both the departments table and the employees table. If we were to remove the ON clause entirely and rerun the query, then we get back 1,000 results. This is known as a cross join. So every record in the employees table is combined with every record in the departments table, essentially multiplying them both together. The next type of join we want to take a look at is the left join. And this one's a little tricky to get your head around. So the best way to explain it is by looking at an example. So imagine you're responsible for your company's compliance training.
>
> **[1:33](https://www.linkedin.com/learning/from-excel-to-sql-26502092/the-different-types-of-joins?u=76281980&t=93)** The database has a table that tracks this for you, and we can see that in the "browse data" tab and then selecting "compliance training" from the dropdown. This table lists everyone who's completed the training, and each record in the compliance training matches the employee's ID with the date they completed the training. So what you want to do now is create a report that shows who has and who hasn't yet completed their training. To generate this report, we can use a left join. So let's head back to the XQ [[SQL]] tab and start a new query. And to start the query, I'll click close on the current query and then click discard. And now we're ready to start our new query. So for this new query, we're going to start with "SELECT first_name, last_name," and the date_complete from the compliance training table. Now we know that we can get the name information from the employees table, so we'll add "FROM Employees." And to get the date information, we'll create a left join on the compliance training table. And to do that we'll type "LEFT JOIN" and then the name of the table, "compliance training." Finally, let's specify that we want to join on the ID field
>
> **[3:05](https://www.linkedin.com/learning/from-excel-to-sql-26502092/the-different-types-of-joins?u=76281980&t=185)** from the employees' table
>
> **[3:15](https://www.linkedin.com/learning/from-excel-to-sql-26502092/the-different-types-of-joins?u=76281980&t=195)** and the employee ID field from the compliance training table.
>
> **[3:31](https://www.linkedin.com/learning/from-excel-to-sql-26502092/the-different-types-of-joins?u=76281980&t=211)** Let's run the query. And as you can see, we get back 100 rows with every employee's name listed. Now looking through the "date completed" column, we can see that some entries are null. What the left joint has done for us is compare all the records from our employees table with all the employees in the compliance training table. Remember, the compliance training table only lists those who have completed the training, but now in our results, we see a list of all employees and those who haven't completed the training have a date value of null. And if we just use an inner join, we'd only get a list of those employees who completed the training.
>
> **[4:22](https://www.linkedin.com/learning/from-excel-to-sql-26502092/the-different-types-of-joins?u=76281980&t=262)** And we can see that with the results of the inner join, we get back 46 rows. And that is everyone who has completed the compliance training. So let's put this back to a left join and rerun the query. Great. So now we have all the information we need for that report. Now there are a few other types of join available, but they aren't supported by DB Browser, so we don't really need to go into them here. So stepping back, when you're working with data across multiple tables in a database, think about what story you want your data to tell and how you want to present that data. The joins we covered here provide you with some nice options for combining your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (2), [[SQL]] (1)
> **Env Vars:** sql (1), select (1), left (1), join (1)
> **Code Identifiers:** first_name (1), last_name (1), date_complete (1)
> **SQL:** select (1), left join (1)
> **Definitions:** known as (2)
> **CLI Commands:** find (1)
> **Cross-References:** we covered (1)
> **UI Navigation:** dropdown (1)

#### [Using VLOOKUP, HLOOKUP, and XLOOKUP in SQL](https://www.linkedin.com/learning/from-excel-to-sql-26502092/using-vlookup-hlookup-xlookup-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/using-vlookup-hlookup-xlookup-in-sql?u=76281980&t=0)** - If you want to combine data from different tables and worksheets in [[Microsoft Excel|Excel]], chances are you've reached for one of the various lookup functions that Excel provides. So, we're talking about VLOOKUP, HLOOKUP, or the newer XLOOKUP. If you take a look at the sample Excel spreadsheet on the sheet called Lookup State, you can see a simple example of this. Here, the State column has been filled using a VLOOKUP on the department data. And you might have done something similar to this before. Now, the bad news is there is no function called VLOOKUP, HLOOKUP, or XLOOKUP in [[SQL]]. The good news is they can still combine data from multiple tables by using the JOIN clause. So, let's take a look at how this same VLOOKUP in Excel can be easily performed in SQL. Let's open up DB Browser and click on the Execute SQL tab. If you want to list all the employees with their state information, you would use a JOIN like this. Firstly, let's select first name and last name,
>
> **[1:04](https://www.linkedin.com/learning/from-excel-to-sql-26502092/using-vlookup-hlookup-xlookup-in-sql?u=76281980&t=64)** department and state for our columns, and then add FROM Employees. Now, we add the JOIN. We want to join with the departments' table. So, we add JOIN departments. Finally, we add the ON clause. And this will specify how the employees and departments tables are related. And in this case, it will be using the name of the department that each employee is in. So, we add ON Employees.department=Departments.name,
>
> **[1:57](https://www.linkedin.com/learning/from-excel-to-sql-26502092/using-vlookup-hlookup-xlookup-in-sql?u=76281980&t=117)** and now run the query. And there you have it. As you can see, we get back a list of the employees with the department and state that they are in, just like we did with the VLOOKUP in Excel. So, even though SQL doesn't have explicit functions like VLOOKUP, HLOOKUP, OR XLOOKUP, it does have the same power to combine multiple tables of data together to provide answers to the questions you might have.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5), [[SQL]] (4)
> **Env Vars:** vlookup (6), sql (4), join (4), hlookup (3), xlookup (3)
> **SQL:** join (4)
> **Analogies:** similar to (1), just like (1)
> **UI Navigation:** click on (1)
> **Speakers:** - if (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Taking your SQL skills to the next level](https://www.linkedin.com/learning/from-excel-to-sql-26502092/taking-your-sql-skills-to-the-next-level?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-excel-to-sql-26502092/taking-your-sql-skills-to-the-next-level?u=76281980&t=0)** - Congratulations, you've reached the end of this course, but this is not the end of your [[SQL]] journey. The truth is, it's just the beginning. You can now take what you've learned about SQL and start writing queries for your own data. And if there's one thing I want you to take away from this course, it's that anything that you can do in [[Microsoft Excel|Excel]], you can also do with SQL. It's simply a matter of knowing how. Here are a few resources to take your SQL knowledge even further. First, I recommend searching this platform for other great SQL courses like [[Learning SQL Programming]] with Scott Simpson. I also recommend the SQL Tutorial on [w3schools.com](https://w3schools.com). It's a great resource for looking up and experimenting with SQL statements and functions. You can even try out the SQL queries right there on their website. I also strongly encourage you to take some time to play with the example database. Try writing your own SQR queries. You'll be amazed at how many ways you can combine the SQR statements and functions that you've learned. Soon you'll be building even more complex and interesting queries that allow you to analyze your data in different ways. Thank you for taking this course. I hope you've enjoyed it. My best wishes to you as you continue your SQL journey and apply your new skills to your own data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (10), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** sql (10), sqr (2)
> **URLs:** [w3schools.com](https://w3schools.com) (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Madecraft]]
- [[James Parkin]]

## Resources

- Exercise files available

## Skills Covered

- Microsoft Excel
- SQL

## Path Context

### In [[SQL for Data Professionals in Finance]]
← [[SQL for Finance Professionals]] | **3 of 4** | [[SQL for Finance- Income Statement Project]] →

### In [[Master Advanced Excel Data & Analytics Skills]]
← [[Using Python with Excel]] | **5 of 7** | [[Machine Learning with Logistic Regression in Excel, R, and Power BI]] →

## Appears In

- [[SQL for Data Professionals in Finance]]
- [[Master Advanced Excel Data & Analytics Skills]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)