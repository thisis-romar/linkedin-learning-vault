---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: sql-queries-made-easy
url: "https://www.linkedin.com/learning/sql-queries-made-easy"
duration_minutes: 62
duration: 1h 2m
level: Beginner
updated: 9/24/2024
learners: 72860
skills:
  - Database Queries
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQF6AvXSi8LgNg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1725038985144?e=2147483647&amp;v=beta&amp;t=Jrz8IDYgc_cAvIQSccmKUhN0ZUYY8cAb6X3yK6ZElQ0"
linkedin_topic: Data Science
learning_paths:
  - '[[Explore a Career in SQL Development]]'
prev_courses:
  - '[[SQL Essential Training]]'
next_courses:
  - '[[SQL Server Intelligence- Cracking the Code of Enterprise Data]]'
path_nav: '[{"path":"Explore a Career in SQL Development","position":3,"total":8,"prev":"SQL Essential Training","next":"SQL Server Intelligence- Cracking the Code of Enterprise Data"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/database-queries
  - skill/sql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/SQL%20Queries%20Made%20Easy.md)

![SQL Queries Made Easy](https://media.licdn.com/dms/image/v2/D560DAQF6AvXSi8LgNg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1725038985144?e=2147483647&amp;v=beta&amp;t=Jrz8IDYgc_cAvIQSccmKUhN0ZUYY8cAb6X3yK6ZElQ0)

# SQL Queries Made Easy

> Get up and running with database tables using SQL. This course was designed to help beginners build a strong foundation in SQL queries, and start using common statements to manipulate data within tables. First, instructor Deepa Maddala defines what SQL is and covers some naming conventions that make the code more readable. She goes over the different types of tables used in SQL and introduces you 

> [LinkedIn Learning](https://www.linkedin.com/learning/sql-queries-made-easy) | 1h 2m | Beginner | 73K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Making a statement with SQL](#making-a-statement-with-sql)
  - [How to use the exercise files](#how-to-use-the-exercise-files)
- [**1. Creating Tables in Databases**](#1-creating-tables-in-databases) (3 videos)
  - [What is a table and naming conventions?](#what-is-a-table-and-naming-conventions)
  - [Database table types](#database-table-types)
  - [Datatypes for columns in tables](#datatypes-for-columns-in-tables)
- [**2. Manipulating Data**](#2-manipulating-data) (4 videos)
  - [Add rows in tables](#add-rows-in-tables)
  - [Modify rows and columns in tables](#modify-rows-and-columns-in-tables)
  - [Delete rows in tables](#delete-rows-in-tables)
  - [Merge rows in tables](#merge-rows-in-tables)
- [**3. Transaction Control**](#3-transaction-control) (2 videos)
  - [Committing database changes](#committing-database-changes)
  - [Rollback in database changes](#rollback-in-database-changes)
- [**4. Data Definition Language**](#4-data-definition-language) (3 videos)
  - [Different ways to create tables](#different-ways-to-create-tables)
  - [Alter tables](#alter-tables)
  - [Drop, rename, and truncate tables](#drop-rename-and-truncate-tables)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Making a statement with SQL](https://www.linkedin.com/learning/sql-queries-made-easy/making-a-statement-with-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-queries-made-easy/making-a-statement-with-sql?u=76281980&t=0)** - [Deepa] You've probably heard of [[Databases]] since you were in grade school but how does the data get there? What can you do with the data that's stored there? How can you retrieve it, modify it, delete it? If you don't know the answers to those questions but want to learn, that's where I can help you. Hi, my name is Deepa Maddala, I'm a database developer, I've designed this course to get you up and running with database tables using the sequel language. I'll show you how to use the common statements in order to manipulate data within tables along with tips on transaction controls. While this isn't a fully comprehensive primer on sequel, it should help you get started and maybe answer some of your immediate questions regarding databases. So if you're ready to dive in, let's go ahead and get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2)
> **Speakers:** - [deepa] (1)

#### [How to use the exercise files](https://www.linkedin.com/learning/sql-queries-made-easy/how-to-use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-queries-made-easy/how-to-use-the-exercise-files?u=76281980&t=0)** - [Instructor] In this course, we'll be using livesql.[oracle.com](https://oracle.com) for coding. Here, we can run scripts or also write our own [[SQL]] statements and run them to view the output. The best part is that it is absolutely free. In the beginning of the course, we need to make sure to follow two important steps. First step is to sign up with an email address in livesql.[oracle.com](https://oracle.com). Once you do that, then we log in using our credentials. I'm logging in. First. Now that we have logged in, the second step is to run the initial script file. This will help us to get started working on data from day one. For that, first go to the menu on the top left corner. You can actually see the menu now but if you cannot, just click on this and it'll show you the menu. Now click on My Scripts. There is an option to upload scripts. Here, select the file from exercise folder 00_02. And then choose. Now, give it a name as Initial Code.
>
> **[1:18](https://www.linkedin.com/learning/sql-queries-made-easy/how-to-use-the-exercise-files?u=76281980&t=78)** If you want, you can give it a detailed description or you could just give Initial Code again. And then upload the script. Now it shows script uploaded. Once it has been uploaded, run the script file. Just click Run Script. This might take a while. Once you get the message saying success, you can just close this. And it's as simple as that. Now, as the course progresses, we will be writing more code to understand the various concepts. I will be providing the exercise files in the exercise folder, which will look like this. These are the exercise files. Now, you can make use of these files either to directly run them as scripts like I have shown you earlier or just follow along with me and write the code with me and use these exercise files for future reference.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **UI Navigation:** click on (2), go to (1), select the (1)
> **Exercise Files:** exercise files (3)
> **CLI Commands:** make (2)
> **URLs:** [oracle.com](https://oracle.com) (2)
> **Env Vars:** sql (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 1. Creating Tables in Databases

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a table and naming conventions?](https://www.linkedin.com/learning/sql-queries-made-easy/what-is-a-table-and-naming-conventions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-queries-made-easy/what-is-a-table-and-naming-conventions?u=76281980&t=0)** - [Instructor] In this video, we will learn about what a table is and the naming conventions for a table name. First of all, what is a table? A table is a basic unit of storage. Tables consists of information in rows and columns. We can create a table at any time even when some other user is working on the same database. All we need is the privileges to create the tables which the administrator needs to provide. To create a table, first of all we need to give it a name for easy identification. There are some naming conventions which we need to follow for that. The name must begin with the letter, it must be one to 30 characters long, it should not be an Oracle reserved keyword. For example we cannot give a table name as insert just by itself, as that is a keyword in Oracle. We have an insert statement which we will learn in the next videos. If we give a keyword for a table name, it doesn't understand whether to take it as a keyword or as a table name. So to avoid that confusion, we are not allowed to give a keyword for a table name. No duplicate name of another object used by the same user can be given. For example, if there is a table name employee, in the database that was created by this user, he cannot create a duplicate table with the exact same name as employee. Instead, he can use something like employee_copy et cetera. Moreover, we need to give some meaning full names so that anybody can understand what information
>
> **[1:36](https://www.linkedin.com/learning/sql-queries-made-easy/what-is-a-table-and-naming-conventions?u=76281980&t=96)** is there in that table just by looking at its name. Table names should contain only uppercase alphabets a to Z, lowercase a to Z, numbers zero to nine, _, dollar and hash symbols.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4)
> **Analogies:** for example (2)
> **Code Identifiers:** employee_copy (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Database table types](https://www.linkedin.com/learning/sql-queries-made-easy/database-table-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-queries-made-easy/database-table-types?u=76281980&t=0)** - [Instructor] In this video, we will learn about the two kinds of tables in Oracle database. They are user-defined tables, or user tables, and data dictionary tables. User-defined tables are a collection of tables created and maintained by the users, unlike data dictionary tables, which are a collection of tables created and maintained by the Oracle server. User tables will contain information about the users, while data dictionary tables will contain database information. User tables are owned by different users, while data dictionary tables are owned by SYS user. Now, let's learn a little more in detail about data dictionary tables. These tables contain information about Oracle server users, privileges granted to the users, table constraints and more details about various database objects. Some of the most frequently used data dictionary tables are USER_TABLES, which is used to find out the tables that we own. The other table is USER_OBJECTS, which gives us information about the database objects that we own like tables, views, et cetera. USER_TAB_COLUMNS is another data dictionary table which gives us information about the columns in every table. USER_CONSTRAINTS tells us about the constraints
>
> **[1:36](https://www.linkedin.com/learning/sql-queries-made-easy/database-table-types?u=76281980&t=96)** in each table that we own. So, these are a few of the data dictionary tables that are very frequently used.

> [!info]- Semantic Content
>
> **Env Vars:** sys (1), user_tables (1), user_objects (1), user_tab_columns (1), user_constraints (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Datatypes for columns in tables](https://www.linkedin.com/learning/sql-queries-made-easy/datatypes-for-columns-in-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-queries-made-easy/datatypes-for-columns-in-tables?u=76281980&t=0)** - [Instructor] In this video, we will learn about the various data types we can define for columns in tables. We will also understand which data type to use in which scenario. Data type specifies the kind of values that are inserted into each column. First one is VARCHAR2. We use this when we have a character data, but with variable length. The size specifies the maximum number of characters that can be given in that column. Minimum size can be one, maximum size can be up to 4,000. The size has to be specified. CHAR is also for character data, but with fixed length. Minimum size is one, and maximum size is only 2000. If the size is not specified, it takes the default value as one. We generally use VARCHAR2 when we are uncertain about the number of characters in the data that is inserted in the table. NUMBER is for numeric data with variable length. P stands for precision, and S stands for scale. P specifies the number of decimal digits, and S specifies the digits to the right of the decimal point. DATE is used for date and time values. LONG is for variable-length character data, up to two GB. We can use this for long text strings. CLOB is a character data up to four gigabytes. RAW is for raw binary data of length size.
>
> **[1:36](https://www.linkedin.com/learning/sql-queries-made-easy/datatypes-for-columns-in-tables?u=76281980&t=96)** Size needs to be specified. Maximum size can be up to 2000. RAW is for binary data or byte oriented data like graphics, audio files, documents, or arrays of binary data. This data can be queried or inserted, but cannot be manipulated. LONG RAW is similar to RAW, but for raw binary data of variable length up to two gigabytes. BLOB is an object data type, which is short form for binary large object. It is a reference or a pointer to an object. It could be a file, image, audio file, or video file, or any large object. It can hold binary data up to four gigabytes. BFILE is a data type which is used to store the location or link to an external file, which is outside the database. This external file can be up to four gigabytes. ROWID is a 64 base number system representing the unique address of a row in its table. Every row will have a unique ROWID. In this video, we have learned about all the data types we can use based on the requirements. Now that we have learned about the different kinds of tables and the data types, in the next videos, we will start learning about the various [[SQL]] statements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** raw (4), varchar2 (2), rowid (2), char (1), number (1)
> **Definitions:** is a  (4), stands for (2), is an  (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 2. Manipulating Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Add rows in tables](https://www.linkedin.com/learning/sql-queries-made-easy/add-rows-in-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-queries-made-easy/add-rows-in-tables?u=76281980&t=0)** - [Instructor] Now that we know a lot more about tables, let's learn about the various statements in [[SQL]]. The first one is DML statements. DMS stands for [[Data Manipulation]] language. DML statements are used to modify data in the tables. This includes insert, update, delete, and merge. The first one is the insert statement. We use insert statement to add new rows to our tables. This is the syntax. Using this, we can insert one row at a time. Now let's try to insert a few rows in our tables. First, this is how our table looks like. Select star from dept_tab, that's the table we are using now. I run this. This is our table. Now let's try to insert a row, insert into dept_tab values, I'm not giving the column names explicitly because I'm giving it in the same order, department number first, then department name,
>
> **[1:13](https://www.linkedin.com/learning/sql-queries-made-easy/add-rows-in-tables?u=76281980&t=73)** manager ID and the location ID. And I run this. Now if I want to change the order of the columns, then I have to give them explicitly, department number, location ID, Manager ID, Department name. I have swapped the department name and the location ID, so I change those. So I have to give the values also corresponding to this order. So first, department number, location ID, manager ID, and then department name. And I run this. Another row has been inserted. Now let's take a look at a table and see our new rows. These are the two new rows that we have inserted. Sometimes we might not know the values for some columns, then we can insert some null values for those. Insert into dept_tab values, department number, department name, I do not know the manager ID and the location ID, so I give those values as null. And I run this.
>
> **[2:46](https://www.linkedin.com/learning/sql-queries-made-easy/add-rows-in-tables?u=76281980&t=166)** Null is not equivalent to blank space, so keep that in mind. So this is our new row. Here in live SQL, you can see them as hyphens, but in an actual database, you can see the null keyword over here because we have inserted null values for those columns. We can also insert some special functions, like sysdate to insert the current date or today's date. Let's take an example and see, insert into emp_tab, I don't have a date column in departments tables, so I'm using emp table for this, values, employee number, employee name, his job, manager ID, hiring date, I want today's date as his hiring date, so I'm giving sysdate, his salary, commission, and his department. I insert this. Now let's see how it looks like, select star from emp_tab.
>
> **[4:12](https://www.linkedin.com/learning/sql-queries-made-easy/add-rows-in-tables?u=76281980&t=252)** This is the new row that we inserted and it is showing hiring date as today's date, that's 5th October, 2020. By using this, we are inserting one row at a time. Now if I want to insert multiple rows at a time, I can use the ampersand substitution. For example, if I give insert into department tab values ampersand department number, dname and location like this, I haven't given the values for the columns but instead I'm giving ampersand substitution here. So when I execute this statement, it's going to prompt us to enter values at runtime. This is going to save us a lot of time because we don't have to type in the insert statement over and over again. Instead, we just execute the same insert statement again and again, and give different values and insert new values for our rows. The other way to do so is by creating a script file. A script file is nothing but a collection of SQL statements put together and stored in our computer as a file and executed whenever we need them. So for example, if I want to use that in Live SQL, I can do it like this. I go to My Scripts, we can insert a new file, script file over here, by selecting it here and then uploading the script. And once it has been uploaded, you can find them over here, like this. So I can go to one of the scripts and run the script. And all the SQL statements that are in that script
>
> **[5:49](https://www.linkedin.com/learning/sql-queries-made-easy/add-rows-in-tables?u=76281980&t=349)** will be executed and will be reflected in our database. So that's how we use a script file on Live SQL. Now we can copy multiple rows at a time from another table by using a subquery. When we use the subquery in an insert statement, we do not use the values clause in the insert statement. The number of columns in the subquery should be equal to the number of columns in the insert statement as well. So for example, if I want to make an exact replica of an existing table, I can give it like insert into new_table_name, select star from old_table_name where condition. This where condition is optional. If I don't give the where condition, then all the rows from the old table will be copied into a new table. But if I give a where condition, then only those rows which satisfy this condition will be copied into our new table. So this is about the insert statement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Data Manipulation]] (1)
> **Env Vars:** sql (6), dml (2), dms (1)
> **Code Identifiers:** dept_tab (3), emp_tab (2), new_table_name (1), old_table_name (1)
> **Analogies:** for example (3)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** go to (2)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [Modify rows and columns in tables](https://www.linkedin.com/learning/sql-queries-made-easy/modify-rows-and-columns-in-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-queries-made-easy/modify-rows-and-columns-in-tables?u=76281980&t=0)** - [Instructor] In this video, we will learn about Update Statement. It's a DML statement. We use this to modify data in tables. This is the syntax. Here, the WHERE clause is not mandatory. If the, WHERE clause is specified, only those rows satisfying the condition will be modified. Otherwise all the rows will be modified. Let's take an example to modify one row in our emp table. First of all, let's look at it. SELECT* FROM emp_tab: run this. Now I want to modify the salary of this employee to 8,000. So I give UPDATE emp_tab SET salary=8,000 WHERE empno-7001:
>
> **[0:56](https://www.linkedin.com/learning/sql-queries-made-easy/modify-rows-and-columns-in-tables?u=76281980&t=56)** I'm using employee number here in our WHERE clause because that is unique for every employee. I could give the name, but name is not unique for every employee, but employee number would be unique. So that's the reason why I'm taking that. So only one row is updated, which is good. Let's take a look at the table now. This is the row that we updated to 8,000. Be very cautious when you're modifying the table because we do not want to end up modifying all the rows in the table or the rows we do not want to be modified. So be very careful when doing that. Now, if I want to modify multiple columns using a sub query let's see how to do that. This is going to be the syntax UPDATE table SET column= subquery. I'm not giving the specific value here. I'm going to [[Fetch]] the values from another table or the same table. In this example, we will be doing it from this same table. UPDATE emp_tab SET manager=
>
> **[2:08](https://www.linkedin.com/learning/sql-queries-made-easy/modify-rows-and-columns-in-tables?u=76281980&t=128)** Here what I'm trying to do is I want to change the manager ID and the salary of Clark to the manager ID and salary of King. So let's see how to do that. SET manager as SELECT manager FROM emp_tab
>
> **[2:33](https://www.linkedin.com/learning/sql-queries-made-easy/modify-rows-and-columns-in-tables?u=76281980&t=153)** WHERE empno-7001. I'm fetching the manager ID and the salary of King salary= SELECT salary
>
> **[2:51](https://www.linkedin.com/learning/sql-queries-made-easy/modify-rows-and-columns-in-tables?u=76281980&t=171)** FROM emp_tab WHERE empno-7001.
>
> **[3:00](https://www.linkedin.com/learning/sql-queries-made-easy/modify-rows-and-columns-in-tables?u=76281980&t=180)** I have fetched them and now I want them in the row with employee number 7002, which is Clark's. And now I from this. Now, let's take a look at the table.
>
> **[3:26](https://www.linkedin.com/learning/sql-queries-made-easy/modify-rows-and-columns-in-tables?u=76281980&t=206)** Now as you can see, Clark's manager and salary have been updated to King's manager and salary. I have just fetched the values from the same table but from a different row and I have just copied it to this row. Now I can also do the same thing by getting the values from a different table as well. Let's see how we can do that. Now I have a table named "Old Employee Tab." Let's take a look at the table first. SELECT* FROM old_emp_tab. Just make a note of King's salary here it is 8,000 and now let's take a look at old_emp_tab. In this table, King's salary is 5,000. Now I want to modify this old table with employee tab salary, which is 8,000. So let's update that. UPDATE old_emp_tab SET salary=SELECT salary FROM emp_tab
>
> **[4:57](https://www.linkedin.com/learning/sql-queries-made-easy/modify-rows-and-columns-in-tables?u=76281980&t=297)** WHERE empno-7001 WHERE empno-7001;
>
> **[5:14](https://www.linkedin.com/learning/sql-queries-made-easy/modify-rows-and-columns-in-tables?u=76281980&t=314)** which is in the old table. And I run this one row has been updated. Let's take a look at this. As you can see, King's salary has been updated to 8,000. Now this is how we can update our tables based on the requirement. Now let's take a look at integrity constraint error. If we try to modify a row to a value that does not exist in the parent table, it returns this integrity constraint error. Let's take an example. UPDATE emp_tab SET deptno-500 WHERE depno-10;
>
> **[6:00](https://www.linkedin.com/learning/sql-queries-made-easy/modify-rows-and-columns-in-tables?u=76281980&t=360)** Now what I'm trying to do over here is I want to update all the rules with department number 10 to department numbers 500. You might think that it should be pretty easy, but it throws an error saying "Integrity constraint error." This is because there is no department number 500 in dpt table, which is the parent table of emp_tab. Will understand this parent and trial tables better in the next videos. For now, let's see our parent table which is SELECT* from dpt_tab; Let's checked that table first to see if we have 500 as department number or not. As you can see, there is no department with department numbers 500. That is the reason why it's not letting us use that department number. This is about the integrity constraint error and the update statement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1)
> **Env Vars:** where (9), select (6), set (6), update (5), dml (1)
> **SQL:** where (9), select (6), update (5)
> **Code Identifiers:** emp_tab (8), old_emp_tab (3), dpt_tab (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Delete rows in tables](https://www.linkedin.com/learning/sql-queries-made-easy/delete-rows-in-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-queries-made-easy/delete-rows-in-tables?u=76281980&t=0)** - [Instructor] In this video, we will learn about the delete statement. It is used to delete rows from our table. It's also a DML statement, and just like other DML statements, it has a WHERE condition, and if the WHERE condition is specified, only those rows satisfying the condition will be deleted. Otherwise, all the rows in the table will be deleted. Now let's look at our table, and we'll delete a few rows from that. SELECT * FROM emp.tab.
>
> **[0:32](https://www.linkedin.com/learning/sql-queries-made-easy/delete-rows-in-tables?u=76281980&t=32)** Now I want to delete this row, with emp number 7,007. So I give DELETE FROM table name, WHERE employee number is 7,007. I'm taking employee number, because that is unique for every row. So now let's see if that has been deleted or not. As you can see, that row has been deleted. This is how we can delete one row at a time, by giving a unique column to identify the rows we want to delete. Now, if I want to delete rows based on another table, I can use subqueries for that. For example, I've taken this statement, DELETE FROM old employee table, WHERE salary equals, instead of giving a specific value, I've given a subquery. A subquery is nothing but a query inside another query. Let's try to run this statement and see what happens. First, we'll take a look at our old emp table. This one is our emp table. As you can see, these are the rows. Just keep an eye on the rows which have salaries less than 1,000. We have one row here. Now we'll see old emp table.
>
> **[2:09](https://www.linkedin.com/learning/sql-queries-made-easy/delete-rows-in-tables?u=76281980&t=129)** These are the rows in old emp table. Now I'm going to use emp table values to delete rows from old emp table. Let's see how we can do that. I give DELETE FROM old emp table WHERE salary is equal to SELECT salary FROM emp table, WHERE salary is less than 1,000. Here I'm fetching data from the emp table, whose salary is less than 1,000, and if I find those rows in old emp table, I'm going to delete those rows. Now run this, only one row is satisfying this condition, and it is present in both the tables. So that's the reason why that row has been deleted. As you can see, the employee with salary 800 have been deleted. So this is how we can use another table's values to delete rows from this table by using subqueries. Now let's understand what is integrity constraint error. An integrity constraint error is returned when we try to delete a row that contains a primary key and is used as a foreign key in another table.
>
> **[3:44](https://www.linkedin.com/learning/sql-queries-made-easy/delete-rows-in-tables?u=76281980&t=224)** Let's take an example to get a better understanding. I try to delete a department from department table. This looks pretty straightforward, but it throws an integrated constraint error. It returns an error, as there are rows in the employee table which are mapped to this department number 10. Since there are rows that are already mapped to this department, we cannot delete this department number 10. Here in this case, employee table is going to be the child table, and department table is the parent table. We'll understand this more in detail in the next videos. So in this video, we have learned about how to delete one row or more rows from a table, and also how to delete based on another table by using subqueries. We've also seen about integrated constraint error.

> [!info]- Semantic Content
>
> **Env Vars:** where (6), delete (3), dml (2), select (2)
> **SQL:** where (6), delete from (3), select (2)
> **API Endpoints:** delete  (3)
> **Analogies:** just like (1), for example (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Merge rows in tables](https://www.linkedin.com/learning/sql-queries-made-easy/merge-rows-in-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-queries-made-easy/merge-rows-in-tables?u=76281980&t=0)** - [Instructor] In this video, we'll be learning about the last DML statement, that is MERGE. It updates or inserts data in tables based on a condition. If the row is already there in the table, it updates it and otherwise, it inserts a new row in the table. Instead of giving loops, we can just use one MERGE statement. Hence, we actually improve the performance by using MERGE. It's also useful in data warehouse systems because the data comes from various sources and there's a possibility for duplicate records to be inserted into the table. So in order to prevent that, we use the MERGE statement. Now this is the syntax. Here, as you can see, this table is the table where rows must be inserted or updated. This is going to be the data source from where we get the data to insert or update. ON clause has the condition which determines whether to insert or update. WHEN MATCHED or WHEN NOT MATCHED clause instruct the server what to do when the condition is matched or not matched. Now let's take an example to understand this better. We have a table named dept_copy_tab. First, let's take a look at the table. FROM dept_copy_tab. As of now, it does not have any data in it.
>
> **[1:35](https://www.linkedin.com/learning/sql-queries-made-easy/merge-rows-in-tables?u=76281980&t=95)** Now let's use the MERGE statement and see whether it inserts data or not. MERGE INTO dept_copy_tab because that's where I want the data to be inserted. If there are no rows, it has to insert, and if there are a few rows which satisfy the condition, then it has to update them. But since there are no rows in the table, it is supposed to just insert the rows. So let's see. So MERGE INTO dept_copy_tab, and I've given Anne Alia's name over here because it makes it much more easier rather than typing the entire table name every single time. So MERGE INTO dept_copy_tab USING dept_tab.
>
> **[2:28](https://www.linkedin.com/learning/sql-queries-made-easy/merge-rows-in-tables?u=76281980&t=148)** This is the source table ON and here is the condition dc.deptno=d.deptno.
>
> **[2:42](https://www.linkedin.com/learning/sql-queries-made-easy/merge-rows-in-tables?u=76281980&t=162)** We're saying that the department number in dept_copy_tab=deptno department table. Only when this condition is met then WHEN MATCHED THEN UPDATE SET dc.mgr_id-300.
>
> **[3:12](https://www.linkedin.com/learning/sql-queries-made-easy/merge-rows-in-tables?u=76281980&t=192)** If the departments match, then I'm asking the server to update the row so that the manager id is set to 300. And WHEN NOT MATCHED THEN INSERT VALUES d.deptno,
>
> **[3:39](https://www.linkedin.com/learning/sql-queries-made-easy/merge-rows-in-tables?u=76281980&t=219)** I want to insert the values from the department table only. So, I'm giving d.deptno, d.dname, d.magr_id, d.location_id.
>
> **[4:00](https://www.linkedin.com/learning/sql-queries-made-easy/merge-rows-in-tables?u=76281980&t=240)** This is the MERGE statement. Now I run this. It says, the system has been processed. Now I run this. As you can see we have all the rows inserted in dept_copy_tab and they have been copied from dept_tab. All the 26 rows have been copied. Now since dept_copy_tab was empty all the rows were satisfied with the conditions were just inserted as you can see here. Because the condition was not satisfied and there were no records in the table, the condition did not satisfy and so all the rows were just inserted. So, sofar we have learned about the various DML statement. In the next chapter we will be learning about the various transaction control statements.

> [!info]- Semantic Content
>
> **Env Vars:** merge (9), matched (4), into (3), dml (2), using (1)
> **Code Identifiers:** dept_copy_tab (8), dept_tab (2), mgr_id (1), magr_id (1), location_id (1)
> **SQL:** update (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 3. Transaction Control

[↑ Back to Table of Contents](#table-of-contents)

#### [Committing database changes](https://www.linkedin.com/learning/sql-queries-made-easy/committing-database-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-queries-made-easy/committing-database-changes?u=76281980&t=0)** - [Instructor] In this chapter, we will learn about Transaction Control Language, also called TCL. There are three TCL statements namely COMMIT, ROLLBACK, and SAVEPOINT. A transaction begins when the first DML statement is executed, and it ends in three different scenarios. When COMMIT or ROLLBACK is issued, or when a DDL or DCL statement is executed, autocommit will occur. And the third scenario is if the user exits the system or the system crashes. Now let's learn about the first TCL statement that is COMMIT. COMMIT ends the current transaction and saves all the data changes that have been made thus making them permanent. For DML statements, we need to give the COMMIT statement explicitly in order to save the changes, unlike DDL and DCL statements which are autocommited. Autocommit also occurs when the user exits the system normally without explicitly giving a COMMIT statement. Now let's compare the state of data before and after COMMIT. Before COMMIT, the changes can be reverted back, but after COMMIT, all the changes are made permanent, which means that they cannot be reverted back. Before COMMIT, the current user can view the results by using the select statement, but others cannot view these changes made by this user.
>
> **[1:36](https://www.linkedin.com/learning/sql-queries-made-easy/committing-database-changes?u=76281980&t=96)** After COMMIT, all users can view the changes that have been made by this user. Before COMMIT, affected rows are locked, which does not allow the other users to make any changes on these rows. But after COMMIT, locks on the effected rows are released, the savepoints also are released, and those rows are available to other users to make any kind of changes. This is all about COMMIT statement.

> [!info]- Semantic Content
>
> **Env Vars:** commit (14), tcl (3), rollback (2), dml (2), ddl (2)
> **CLI Commands:** make (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Rollback in database changes](https://www.linkedin.com/learning/sql-queries-made-easy/rollback-in-database-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-queries-made-easy/rollback-in-database-changes?u=76281980&t=0)** - [Narrator] In this video, we learned about two other transaction control statements, namely rollback and savepoint. They both work together. Rollback discard all pending data changes and ends the current transaction. Savepoint creates a marker point within a transaction. By using commit and rollback we can preview the data changes before making them permanent. AutoRollback occurs when there is a system failure or abnormal termination of the system. Now, let's understand by taking an example. Here, I have issued a commit to save all the pending changes that have been executed before this commit statement. Now, I start a new transaction. A new transaction begins when I execute the first DML statement. So, once I execute this insert statement, a new transaction has started. Now, after the insert statement, I've given an update statement, then I have written earth savepoint to create a marker point in this transaction. After the savepoint, I've given a few more DML statements and then another marker point or savepoint B followed by a few more DML statements. Now, if I give a rollback statement over here, all these changes will be discarded and it returns to the stage. Now, instead of just giving rollback, if I give rollback to savepoint A, then it reverts back and goes to savepoint A to this point,
>
> **[1:39](https://www.linkedin.com/learning/sql-queries-made-easy/rollback-in-database-changes?u=76281980&t=99)** and it discards only these changes that have been executed after this save point. Similarly, if I give rollback to savepoint B, then it comes back to this point and it discard all the changes that have followed savepoint B. So, this is how rollback and savepoint go hand in hand. Now, here is a comparison of the state of data before and after rollback. Before rollback changes made cannot be reverted, but after rollback, all the data changes are reverted. Before rollback the effected rules are logged, so that other users cannot make changes to data within the effected rows. But after rollback, all locked on effected rows are released. Before rollback, the current user can view the results of data changes by using select statements, but other users cannot view the results of the data changes made by this user. After rollback, since all the data changes have been discarded, nobody can see those changes in the database. So, this is about transaction control language. In the last video and this video, we have learned about commit rollback and savepoint.

> [!info]- Semantic Content
>
> **Env Vars:** dml (3)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [narrator] (1)


### 4. Data Definition Language

[↑ Back to Table of Contents](#table-of-contents)

#### [Different ways to create tables](https://www.linkedin.com/learning/sql-queries-made-easy/different-ways-to-create-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-queries-made-easy/different-ways-to-create-tables?u=76281980&t=0)** - [Instructor] In this video, we will be learning about the first DDL statement, that is CREATE statement. DDL stands for Data Definition Language. These statements are auto commit, which means once they are executed, the changes will be permanent and cannot be reverted back. This is the syntax for the CREATE statement. Tables which do not belong to this user are not in this user's schema. So we have to give schema_name.table_name instead of just giving the table_name. Schema is like owner's name. After creating a table, we can check for it by giving DESCRIBE table_name or DESC table_name. Now before we create a new table, let's understand what are constraints. Constraints are like rules to follow at table level or column level. We can define these constraints at the time of creation of a table or after the table has been created. Constraints prevent deletion of a table when there are dependencies on that table. Constraints that are defined must be satisfied for the statements to be successfully executed. Other, we'll draw error messages and the statements will not be executed. We have to name the constraints we define, otherwise Oracle Server generates a name in SYS_Cn format. Now, let's take a look at a few of the most commonly used constraints. Primary key, foreign key and not NULL.
>
> **[1:34](https://www.linkedin.com/learning/sql-queries-made-easy/different-ways-to-create-tables?u=76281980&t=94)** Primary key is unique for every row and thus helps in identifying every row in the table. It must not be a NULL value because if it is a NULL value, then it will not be unique for every row. Therefore, primary key constraint enforces a rule that the columns in the primary key must be unique and not NULL for each and every row. Foreign key constraint, also called as referential integrity constraint, assigned a column or a set of columns as a foreign key and then establishes the connection with a primary key in the same table or a different table. Foreign key value must match an existing value in the parent table or must be NULL. The third value is not NULL constraint. As the name implies, it specifies that a column cannot contain a NULL value. We define these constraints based on the requirements. Now let's create a table and also use these constraints. Here I have written the CREATE statement already because it's too lengthy and we don't have that much time for writing the entire thing now so I just wrote it already. I'll just execute it. And then we'll understand what I have actually written. I have created a table named countries with these column names, country_id with data type 10, country_name with the VARCHAR2 type and size 20. Country_code with VARCHAR2 and size 10.
>
> **[3:09](https://www.linkedin.com/learning/sql-queries-made-easy/different-ways-to-create-tables?u=76281980&t=189)** Country_region with VARCHAR2, 20. Total_customers, profit_country_level and we have two constraints on this table. As you can see, once I executed it, it says table has been created. So these are the column names and their data types. I have also given a column-level constraint for country_code. It says that I cannot give a NULL value for country_code in any of the rows. This is the other constraint and it is a table-level constraint because it is given after the column specifications as a separate constraint, instead of giving it on a specific column. It says that the primary key for this table is the country_id and this has to be unique and not NULL for every row in this table. Now, let's create another table, using the foreign key constraint. I'll just run this and then we'll understand it. It says table has been created. Now this is the other table that I have created. It is states table. It has a column name as state_id, state_name, state_region, country_id, total_customers, profit_state_level,
>
> **[4:46](https://www.linkedin.com/learning/sql-queries-made-easy/different-ways-to-create-tables?u=76281980&t=286)** and two constraints, one primary key and one foreign key constraints. Here constraint PRIMARY KEY constraint is enforced on state_id, which means that the state_id has to be unique and not NULL for every row in this table. This is the foreign key constraint that I have enforced and I'm doing that on country_id in this table and it's going to reference the country_id in countries table. So this is the connection that we have established between the country_id in states table to the country_id in the countries table. That is how foreign key and primary key go hand in hand. Now we can also create a table using a subquery. Now, this is the syntax for that. We use this technique when we want to create a table based on rows in another table. For example, if we want to create a table with all employees in department number 40, then I can create the table like this. This is the statement that I've already written. The CREATE statement here I say CREATE TABHLE, this is the table name AS and this is the subquery. SELECT employee number, ename. Its name actually, the column name, employee number, name, job, salary
>
> **[6:19](https://www.linkedin.com/learning/sql-queries-made-easy/different-ways-to-create-tables?u=76281980&t=379)** FROM employee tab where department number is 40. So it's going to [[Fetch]] all the employee details whose department number is 40 and it's going to create this new table with those values. So I just create this table. It says it has been created. Let's take a look at it. SELECT * FROM employees_dept40
>
> **[6:48](https://www.linkedin.com/learning/sql-queries-made-easy/different-ways-to-create-tables?u=76281980&t=408)** and I run this. These are the two rows that have been created in employees_dept40, which satisfy this condition and they have been added to this new table. But we do not have any constraints in this subquery method. If the column specifications are given, then the number of column specifications and the number of columns in the subquery should be equal. Here I haven't given the column names over here but if I'm giving those explicitly, then the number of columns here and the number of columns in here should be equal. And when using subquery method, column definition can contain only column names and default values but no constraints. In this method, we cannot give the constraints. In this video, we have learnt the most popular constraints, primary key, foreign key and not NULL constraint and we've also learned how to create a table using the direct method or by using a subquery.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1)
> **Env Vars:** null (11), create (5), varchar2 (3), ddl (2), select (2)
> **Code Identifiers:** country_id (7), table_name (4), state_id (3), country_code (2), schema_name (1)
> **Definitions:** is a  (2), stands for (1), means that (1)
> **SQL:** select (2), primary key (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Alter tables](https://www.linkedin.com/learning/sql-queries-made-easy/alter-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-queries-made-easy/alter-tables?u=76281980&t=0)** - [Instructor] In this video, we'll learn about the ALTER Statement. It is also a DDL statement, which means it is auto commit. They use the statement to add, modify, define a default value for a new column, or to drop columns from a table. If you want to add a new column to an existing table because we omitted that column at the time of table creation, or if you think that there is a need for a new column at a later point of time, then we can use this ALTER Statement to do so. Now this is the syntax. Now let's try to add a new column test_call to state's table, ALTER TABLE table name ADD
>
> **[0:46](https://www.linkedin.com/learning/sql-queries-made-easy/alter-tables?u=76281980&t=46)** this is the new column that I want to add. So I give VARCHAR2 size five, and I run this. It says, table has been altered. Now, how do we check that? We can use add data dictionary table like user_tab_columns to check for all the columns in that table. So I give this WHERE table_name=STATES
>
> **[1:25](https://www.linkedin.com/learning/sql-queries-made-easy/alter-tables?u=76281980&t=85)** and I run this. Using this data dictionary table, we can view all the columns in this particular table. So this is our table and these are the columns in this table. As you can see, a new column also has been added. Now, this is how we can add new columns. Now, there won't be any values in that column for the existing rows though but going forward when we insert new rows, that column will have appropriate data based on the values we assign. Now, if I want to modify the data type or size or default value of an existing column in the table, we will use this syntax. Now let's take an example. If I think that the value of this new column is going to be lane D and it won't be just five characters long and I want to change the size of this data type, then I can do it this way. I'll give ALTER TABLE, table name, MODIFY,
>
> **[2:33](https://www.linkedin.com/learning/sql-queries-made-easy/alter-tables?u=76281980&t=153)** and in brackets we'll give the column name, which we want to modify and give VARCHAR2 and I'll give the new size. Now, before executing this, just keep in mind that previously the data length was five. Now, once I do this ALTER Statement, the data length will change to 20. Now, as you can see, the data length has changed to 20. So this is how you can modify the size of a column or you can also change the data type right here if I want the test_column to have number data type. Then using the same syntax, I can just give number over here and we can change the data type. Now to delete a column from a table, we use this syntax. We can delete a column, even if there are some values in that column or not. Even if there are no values or if there are values also, we can still delete that particular column. If you think it is unnecessary, we can just go and delete it. We'll delete the new column test_call that we just created as I think it's unnecessary in states table. We just did that for explanation purpose, so I'll just delete it. We give ALTER TABLE states DROP and give the column name.
>
> **[4:06](https://www.linkedin.com/learning/sql-queries-made-easy/alter-tables?u=76281980&t=246)** And I just run this. ALTER TABLE, table name DROP and I have to give the column keyword over here and then give the column name. So that was the missing keyword there. So by looking at the error message, we should be able to identify the mistake in our code. So it says the table has been altered. Now let's take a look at our data dictionary table. Now this is our states stable. As you can see the new column that we had added, is gone now. Now keep in mind that ALTER is also a data definition language statement. So it is auto commit and the changes are permanent. And if we delete anything by mistake, it's gone forever. So in this video, we have learned how to add a new column, modify the data type, size or default value of a column and how to delete a column from a table using ALTER Statement.

> [!info]- Semantic Content
>
> **Env Vars:** alter (9), table (4), varchar2 (2), drop (2), ddl (1)
> **Code Identifiers:** test_call (2), user_tab_columns (1), table_name (1), test_column (1)
> **SQL:** alter table (4), where (1)
> **Warnings:** keep in mind (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Drop, rename, and truncate tables](https://www.linkedin.com/learning/sql-queries-made-easy/drop-rename-and-truncate-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-queries-made-easy/drop-rename-and-truncate-tables?u=76281980&t=0)** - [Instructor] In this video, we will be learning about three other DDL statements, namely DROP, RENAME, and TRUNCATE. The first one is DROP statement. DROP statement will delete everything, the data and the structure of the table. All pending transactions will be committed. It's autocommit, so changes made will be permanent. A person should have drop any table privileges, or he should be the creator of the table to remove the table. Let's drop the table department_copy_tab. I give DROP TABLE dept_copy_tab.
>
> **[0:43](https://www.linkedin.com/learning/sql-queries-made-easy/drop-rename-and-truncate-tables?u=76281980&t=43)** And then this is going to delete the table completely, and the structure as well. All the data in the table and the structure is gone. Let's try to [[Fetch]] some data from the table and see what it says. Dept_copy_tab,
>
> **[1:10](https://www.linkedin.com/learning/sql-queries-made-easy/drop-rename-and-truncate-tables?u=76281980&t=70)** and then run this. It says table or view does not exist because it's gone. Now, the second statement is RENAME statement. Using this, we can change the name of a table, view, synonym, or a sequence, but to do so, we should be the owner of the object. We'll rename states table to states_sales table, as I want the name of the table to give more details about the data in it. So let's do that. I give RENAME states table to states_sales_table. I think this is going to give more details about what content is there in that particular table, so I'm just renaming it. And it says statement has been processed. So now let's try by giving SELECT * FROM states, and let's try this. Let's see if it works. It says it does not exist, but now let's give sales_tab and see if it works. The table is still here. It's just that it does not have any data in it. That's the only thing. The next one is TRUNCATE statement. It will delete all the rows from the table, and it'll also release the storage space that was used
>
> **[2:44](https://www.linkedin.com/learning/sql-queries-made-easy/drop-rename-and-truncate-tables?u=76281980&t=164)** by the table. You might say that we can just use the DELETE statement to delete the rows. Why use TRUNCATE? TRUNCATE is a DDL statement, and the changes made are permanent, so the previous state cannot be recovered. Whereas using DELETE, we can get the previous state back by using rollback. The other difference between TRUNCATE and DELETE is that TRUNCATE will release the storage space that was used by the table, but DELETE does not do so. It just deletes all the rows from the table. So those are the differences between TRUNCATE and DELETE statements. In this video, we have learned about few more DDL statements like DROP, RENAME, and TRUNCATE, and we also understood when to use these statements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1)
> **Env Vars:** truncate (8), drop (5), delete (5), rename (4), ddl (3)
> **Code Identifiers:** department_copy_tab (1), dept_copy_tab (1), states_sales (1), states_sales_table (1), sales_tab (1)
> **API Endpoints:** delete  (3), delete
 (1)
> **SQL:** drop table (1), select (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/sql-queries-made-easy/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-queries-made-easy/next-steps?u=76281980&t=0)** - Thank you so much for joining me for this course. I hope you enjoyed learning about [[SQL]] statements and how they can be used to create, edit and retrieve information from [[Databases]]. If you wish to continue your database journey, I suggest you learn a bit more about database objects other than tables, such as views, synonyms, index, et cetera. You could also dive deep and learn more about constraints. I recommend checking out some books like "Getting Started with SQL" by Thomas Neild and "SQL Practice Problems" by Sylvia Moestl Vasilik, which helps you practice more. Thanks again and I hope you have a wonderful day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Databases]] (1)
> **Env Vars:** sql (3)
> **Analogies:** such as (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - thank (1)


## Instructor

- [[Deepa Maddala]]

## Resources

- Exercise files available

## Skills Covered

- Database Queries
- SQL

## Path Context

### In [[Explore a Career in SQL Development]]
← [[SQL Essential Training]] | **3 of 8** | [[SQL Server Intelligence- Cracking the Code of Enterprise Data]] →

## Appears In

- [[Explore a Career in SQL Development]]

## Related Courses

_Courses sharing skills:_

- [[SQL Practice- Intermediate Queries]] — SQL, Database Queries
- [[Level Up- Advanced SQL]] — SQL, Database Queries
- [[Advanced SQL- Logical Query Processing, Part 1]] — SQL, Database Queries
- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL

---

[↑ Back to top](#)