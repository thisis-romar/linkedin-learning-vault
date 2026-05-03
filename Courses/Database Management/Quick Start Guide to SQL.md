---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: quick-start-guide-to-sql
url: "https://www.linkedin.com/learning/quick-start-guide-to-sql"
duration_minutes: 88
duration: 1h 28m
level: Beginner
updated: 9/24/2024
learners: 387843
skills:
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFZHulkzmFrnA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1725659883685?e=2147483647&amp;v=beta&amp;t=Zv-n-OcfMOZpNfyII_x1d-EXdvI4lsPEwYXG-QrDDHY"
linkedin_topic: Database Management
learning_paths:
  - '[[Explore a Career in Database Development]]'
prev_courses:
  - '[[Programming Foundations Databases]]'
next_courses:
  - '[[Learning SQL Programming]]'
path_nav: '[{"path":"Explore a Career in Database Development","position":2,"total":5,"prev":"Programming Foundations Databases","next":"Learning SQL Programming"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/sql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Quick%20Start%20Guide%20to%20SQL.md)

![Quick Start Guide to SQL](https://media.licdn.com/dms/image/v2/D560DAQFZHulkzmFrnA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1725659883685?e=2147483647&amp;v=beta&amp;t=Zv-n-OcfMOZpNfyII_x1d-EXdvI4lsPEwYXG-QrDDHY)

# Quick Start Guide to SQL

> Are you looking to take a deeper dive into the fundamentals of structured query language (SQL)? This short, beginner-friendly course is just the place to start. Join instructor Deepa Maddala as she walks you through the basics of SQL and how to make it work seamlessly with large Oracle datasets.Learn about relational database management systems, SQL, and how it works. Explore strategies that you c

> [LinkedIn Learning](https://www.linkedin.com/learning/quick-start-guide-to-sql) | 1h 28m | Beginner | 388K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Introduction to RDBMS and SQL](#introduction-to-rdbms-and-sql)
  - [How to use the exercise files](#how-to-use-the-exercise-files)
- [**1. Fetch Data from Tables**](#1-fetch-data-from-tables) (3 videos)
  - [Basic select statements](#basic-select-statements)
  - [Operators](#operators)
  - [Data types](#data-types)
- [**2. Filtering Data**](#2-filtering-data) (4 videos)
  - [Comparison conditions](#comparison-conditions)
  - [Logical conditions](#logical-conditions)
  - [Order of precedence](#order-of-precedence)
  - [Sorting data](#sorting-data)
- [**3. Single Row Functions**](#3-single-row-functions) (5 videos)
  - [Types of functions and number functions](#types-of-functions-and-number-functions)
  - [Character functions](#character-functions)
  - [Date functions](#date-functions)
  - [Data type conversion functions](#data-type-conversion-functions)
  - [Conditional expressions](#conditional-expressions)
- [**4. Multiple Row Functions/ Group Functions**](#4-multiple-row-functions-group-functions) (3 videos)
  - [Types of group functions](#types-of-group-functions)
  - [Creating groups and nested groups](#creating-groups-and-nested-groups)
  - [Filtering group results](#filtering-group-results)
- [**5. Joins and Subqueries**](#5-joins-and-subqueries) (3 videos)
  - [Types of joins](#types-of-joins)
  - [Uses of subqueries](#uses-of-subqueries)
  - [Types of subqueries](#types-of-subqueries)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to RDBMS and SQL](https://www.linkedin.com/learning/quick-start-guide-to-sql/introduction-to-rdbms-and-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/introduction-to-rdbms-and-sql?u=76281980&t=0)** - [Instructor] Did you ever wonder how to work with [[Databases]] or how to retrieve data from various tables using [[SQL]]? If so, I'm here to help you. Hi, my name is Deepa Maddala and I'm a database developer with years of expertise, working with tables and databases. In this course, we will take a deep dive into the fundamentals of SQL so that you can seamlessly work on large databases from day one. We will learn how to easily work with multiple tables at a time and understand how easy it can be to [[Fetch]] data using SQL. This is your quick start guide to SQL. So let's jump in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Databases]] (3), [[Fetch]] (1)
> **Env Vars:** sql (4)
> **Speakers:** - [instructor] (1)

#### [How to use the exercise files](https://www.linkedin.com/learning/quick-start-guide-to-sql/how-to-use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/how-to-use-the-exercise-files?u=76281980&t=0)** - [Instructor] In this course we'll be using livesql.[oracle.com](https://oracle.com) for coding. Here we can run scripts or also write our own [[SQL]] statements and run them to view the output. The best part is that it is absolutely free. In the beginning of the course, we need to make sure to follow two important steps. First step is to sign up with an email address in livesql.[oracle.com](https://oracle.com). Once you do that, then we log in using our credentials. I'm logging in first. Now that we have logged in, the second step is to run the initial script file. This will help us to get started working on data from day one. For that, first go to the menu on the top left corner. You can actually see the menu now. But if you cannot, just click on this and it'll show you the menu. Now click on my scripts. There is an option to upload scripts. Here, select the file from exercise folder 00_02 and then choose. Now give it a name as initial code. If you want, you can give it a detailed description or you could just give initial code again and then upload the script. Now it shows script uploaded. Once it has been uploaded, run the script file. Just click run script.
>
> **[1:34](https://www.linkedin.com/learning/quick-start-guide-to-sql/how-to-use-the-exercise-files?u=76281980&t=94)** This might take a while. Once you get the message saying success, you can just close this and it's as simple as that. Now, as the course progresses, we writing more code to understand the various concepts. I will be providing the exercise files in the exercise folder, which will look like this. These are the exercise files. Now you can make use of these files either to directly run them as scripts like I have shown you earlier or just follow along with me and write the code with me and use these exercise files for future reference.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **UI Navigation:** click on (2), go to (1), select the (1)
> **Exercise Files:** exercise files (3)
> **CLI Commands:** make (2)
> **URLs:** [oracle.com](https://oracle.com) (2)
> **Env Vars:** sql (1)
> **Definitions:** is an  (1)
> **Best Practices:** make sure to (1)


### 1. Fetch Data from Tables

[↑ Back to Table of Contents](#table-of-contents)

#### [Basic select statements](https://www.linkedin.com/learning/quick-start-guide-to-sql/basic-select-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/basic-select-statements?u=76281980&t=0)** - [Instructor] Let's learn how to write a basic select statement and how it is used in various scenarios. First of all, why do we need a select statement? What does it do? In a database, there are multiple tables containing huge sets of data. So the main functionality of a select statement is to [[Fetch]] the data based on our criteria. These are the three scenarios in which we use a select statement. The first scenario is when we need to fetch data from any number of columns in a table, it could be from just one column or multiple columns or all columns in the table. The second scenario when we use a select statement is to fetch data from one or multiple tables. If it's from one table, it's a simple select statement. But if we are fetching data from multiple tables then we make use of joints which we will learn in the later sections of this course. The third scenario when we use a select statement is to filter out the of row that are fetched from the table based on our search criteria. Now, here is the syntax for the select statement. We give select followed by * if you want to fetch all the columns from the table, or we give specific column names, or we give some expressions if you want to perform some kind of mathematical operations or if we want it to be displayed in a certain format, followed by FROM keyword, and then the table names. We will learn about distinct and alias column names
>
> **[1:37](https://www.linkedin.com/learning/quick-start-guide-to-sql/basic-select-statements?u=76281980&t=97)** in the later sections. Select identifies the columns that are retrieved from the table, and FROM keyword identifies the tables from where this data is being fetched. To understand this better, we will look at a few examples in Live [[SQL]]. Here, I will give SELECT * FROM emp_tab to retrieve all the column and all the rows from emp_tab table. So now to run this statement, I can click on this run button and if I'm using a Mac system, I will give Command + Enter, if I'm using a [[Windows]] system, I'll give Control + Enter. So I run this and it fetches all the rows and columns from emp_tab table. If I want to fetch only two columns in specific, maybe emp number and name, I'll give SELECT empno,name FROM emp_tab;
>
> **[2:47](https://www.linkedin.com/learning/quick-start-guide-to-sql/basic-select-statements?u=76281980&t=167)** and I run this. It fetches only those two columns. The best part about SQL is that there are very few rules to follow and we are good to go. SQL statements are not case sensitive, we can write them either in uppercase, lowercase, or even camel case, and it doesn't throw any errors. However, the standard that is followed across all the organizations is to use uppercase for keywords and lowercase for the [[Representational State Transfer (REST)|rest]] of the code. Keywords cannot be abbreviated or split across lines. We can write the entire select statement in just one line, but the SQL statement which has proper indentation helps with readability especially when we are writing very long select statements. This is about a base six statement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (5), [[SQL]] (4), [[Windows]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** sql (4), select (2)
> **Code Identifiers:** emp_tab (4)
> **SQL:** select (2)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Operators](https://www.linkedin.com/learning/quick-start-guide-to-sql/operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/operators?u=76281980&t=0)** - [Instructor] Let's learn about the different types of operators. There are two types of operators: arithmetic operators and character string operators. Arithmetic operators are used in mathematical expressions, like plus sign, minus, asterisk and slash. Character string operators are used with strings, like concat symbol, which is two pipelines, single quotes and double quotes. Order of precedence for arithmetic operators is multiplication, then division, then addition, and finally, subtraction. As shown in the example, multiplication is performed first and then the addition but if we are using a parenthesis, it overrides the rules of precedence as shown in the second example. So in this scenario, first, the addition is performed because it is in the parenthesis and then the multiplication is done. If an expression has two operators of same precedence, then it is evaluated from left to right as shown in the third example. Let's compare the outputs for these two. Here I have written those three examples and let's run these three statements. Here as we can see, the output for KING is 50,100. In the second scenario, it is 51,000. This is because this part is executed first and then this is taken care of. And this is the output for the third SELECT statement.
>
> **[1:36](https://www.linkedin.com/learning/quick-start-guide-to-sql/operators?u=76281980&t=96)** Now if there is a NULL value in an expression, then the result also will be a NULL value. Keep in mind that NULL values are not equal to zero or a blank space. It's just written as N-U-L-L, NULL. We can change the column heading by giving an alias name in the SELECT statement. Let's take an example. I clear this first. And I give SELECT emp number AS ID, name AS Employee Name. These are the alias names I'm giving for those two columns FROM emp_tab. We run this. And here emp number and name are the columns and ID and Employee Name are the alias names given to these columns. So these are the headings for those two columns. If there is a space in the alias name, like in this example, Employee Name has a space in between, so we have to give them in double quotes. If there is no space or anything like that, then you can just give the alias name without any quotes. If we are using literals, they need to be enclosed in single quotes. Let's take an example for that. I give SELECT name, concat. Now, these are the literals I'm using. Belongs to. I give them in single quotes.
>
> **[3:10](https://www.linkedin.com/learning/quick-start-guide-to-sql/operators?u=76281980&t=190)** Concat symbol, dept number, concat again and in quotes I'm giving the text I want to be displayed. Close it. FROM emp_tab. And I run this. So it gives me the output like this. Instead of giving them in separate columns, I've given it like a format by using single quotes. KING belongs to so and so department. But I do not really like this heading, so I give the alias name here as Employee Department
>
> **[3:52](https://www.linkedin.com/learning/quick-start-guide-to-sql/operators?u=76281980&t=232)** in double quotes because there is a space in between and then I run this. So this is how our output looks like. Now DISTINCT keyword is used to eliminate duplicate rows. Usually if I have to find the department numbers in an organization, we give dept number FROM emp_tab. And this displays the complete list of departments but there are duplicates too. So when I want to avoid that, I use DISTINCT keyword, which eliminates duplicates and display only unique department numbers for me which is these three departments. So this is how we can use operators as needed.

> [!info]- Semantic Content
>
> **Env Vars:** select (4), null (4), king (2), distinct (2)
> **SQL:** select (4)
> **Code Identifiers:** emp_tab (3)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Data types](https://www.linkedin.com/learning/quick-start-guide-to-sql/data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/data-types?u=76281980&t=0)** - [Instructor] Let's learn about the various data types we can define for columns and tables. We will also understand which data type to use in which scenario. A data type specifies the kind of values that are inserted into each column. First one is VARCHAR2. We use this when we have character data, but with variable length. The size specifies the maximum number of characters that can be given in that column. Minimum size can be one and maximum size can be 4,000. The size has to be specified. Next one is CHAR. This is used again for character data but the length fixed. Minimum size is one and maximum size is 2000. If the size is not specified it takes the default value as one, we generally use VARCHAR2 when we are uncertain about the number of characters in the data that is entered in the table. Number is for numeric data with variable length. P stands for precision, and S stands for scale. P specifies the number of decimal digits and S specifies the digits to the right of the decimal point. Date is used for date and time values. Long is for variable length character data up to 2GB. We can use this for long text strings. CLOB is character data up to 4GB. RAW is for raw binary data of length size.
>
> **[1:35](https://www.linkedin.com/learning/quick-start-guide-to-sql/data-types?u=76281980&t=95)** Size needs to be specified. Maximum size can be 2000. RAW is for binary data or byte oriented data like graphics, audio files, documents, or arrays of binary data. This data can be queried or inserted but cannot be manipulated. LONG RAW is similar to raw but raw binary data of variable length up to 2GB. BLOB is an object data type, which is short form for binary large object. It is a reference or pointer to an object. It could be a file, image, audio file, or video file or any large object. It can hold binary data up to 4GB. BFILE is a data type, which is used to store the location or link to an external file, which is outside the database. This external file can be up to 4 GB. ROWID is a 64 base number system representing the unique address of a row in its table. Every row will have a unique row ID. Now, here we have learned about all the data types we can use based on our requirements.

> [!info]- Semantic Content
>
> **Env Vars:** raw (3), varchar2 (2), char (1), clob (1), blob (1)
> **Definitions:** is a  (3), stands for (2), is an  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 2. Filtering Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Comparison conditions](https://www.linkedin.com/learning/quick-start-guide-to-sql/comparison-conditions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/comparison-conditions?u=76281980&t=0)** - [Instructor] Let's learn about the comparison conditions. Usually there are large sets of data but we do not need the entire data every single time. Based on the requirement, we filter our data using the WHERE conditions. We can have one or multiple conditions in the WHERE. Let's take a look at an example to understand the WHERE condition and how it is used. I give SELECT emp number, name, salary FROM emp_tab WHERE salary greater than 3,000 and I run this. By giving this WHERE condition, we are eliminating all the unnecessary information and just fetching the data we need. In this case, we are fetching employee salaries that are greater than 3,000 only. Alias names cannot be given in the WHERE condition. If we give a condition value in the condition, then we need to keep the value in single quotes as it is case sensitive. If we are using dates, then we need to keep them in single quotes too as they are format specific. If the format is not specified, then it takes it as DD-MON-RR. That is the default format. Let's look at a few examples. If I just give the condition here as name equals SCOTT, I need to keep this in single quotes
>
> **[1:33](https://www.linkedin.com/learning/quick-start-guide-to-sql/comparison-conditions?u=76281980&t=93)** because the name is completely uppercase. If I give it as camel case, it might not recognize that name. Let's try this first. It displays the row over here. Now suppose I change it to this case and try it. It says no data found. So it is very important that we have the correct case when it comes to character strings. Now if I have to compare dates, then I give hiredate equals 09-JUN-81 and I'll include that here because I need to see the date column as well. So now I run this. I have this row pulled up for me. I kept these also in single quotes because we need to specify the format of the date. Suppose I give it as 1981. It still pulls up the row. If I give a different date, which actually doesn't even exist, then it just says no data found. So we always need to specify the format of the date, so we need to use single quotes for dates as well. Now these are the various comparison conditions that we can use. Equals to will check if the column value is equal to another specific value and if yes, then it fetches only those rows.
>
> **[3:09](https://www.linkedin.com/learning/quick-start-guide-to-sql/comparison-conditions?u=76281980&t=189)** Similarly, the other comparisons like greater than, greater than equal to, less than, less than equal to, and not equals to work. There are other comparisons like BETWEEN, AND, which checks if the column value is between a range of values including those two values as well. This is an example. If I give SELECT * FROM emp_tab WHERE salary BETWEEN 2000 AND 5000
>
> **[3:49](https://www.linkedin.com/learning/quick-start-guide-to-sql/comparison-conditions?u=76281980&t=229)** and I run this, here it pulled up all the employees whose salaries are between 2000 and 5000, including these two values as well. So that's why we have this row fetched too. Now the next one is IN. By using IN, we can check if the column value matches with any value in a set. This is an example for that. I can give SELECT * FROM emp_tab WHERE dept number IN 30 and 70. And I run this. It retrieves all the employees who belong to these two departments, 30 and 70. LIKE checks for a specific character pattern. This is how it works. I'll just copy this and make the changes here. WHERE name LIKE, in single quotes I give an underscore, capital I, percentage symbol, and single quotes closed and this is done. So here we are trying to [[Fetch]] only those rows where the employee name begins with some letter and then the second letter is an uppercase I, followed by other letters. If this pattern matches for any employee names,
>
> **[5:23](https://www.linkedin.com/learning/quick-start-guide-to-sql/comparison-conditions?u=76281980&t=323)** then only those rows will be displayed. Let's run this. As we can see, since only these two employee names match this pattern, only those two rows are fetched. The beginning letter, it could be any letter. The second one is capital I, which is this and this, followed by any number of letters. So only these two rows satisfy that condition. IS NULL is used to check for any null values in the column. We can either use IS NULL or IS NOT NULL. Let's look at an example for this. If I give SELECT emp number, dept number FROM emp_tab WHERE dept number IS NULL, and I run this. So here what have I done? Here I'm trying to pull all the employees whose departments are set to null so that I can allocate the appropriate department. But looks like there is no employee whose department number is set to null. So that's the reason why it shows no data found. Let's look at our original table by fetching all the rows and just to confirm that there are no departments set to null. Emp_tab, run this.
>
> **[7:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/comparison-conditions?u=76281980&t=420)** As we can see, all the departments are filled. There is no null in any of the rows. That's why we got no data found. This is all about the comparison conditions that we can use to filter data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1)
> **Env Vars:** where (10), select (4), null (4), between (2), mon (1)
> **SQL:** where (10), select (4)
> **Code Identifiers:** emp_tab (4)
> **Definitions:** is an  (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Logical conditions](https://www.linkedin.com/learning/quick-start-guide-to-sql/logical-conditions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/logical-conditions?u=76281980&t=0)** - [Instructor] Now let's learn about the logical conditions that can be applied in WHERE. There are three logical conditions: AND, OR, NOT. There are used when we give multiple conditions in WHERE. If we are taking two or more conditions and they are separated by AND, it returns true only if both conditions are true or otherwise it returns a false. This is the table for AND. As we see, true and true returns a true. If one or more conditions are false, then it returns a false, like in this example, it's a false and the other one is a true. Then it returns false. Or if both of them are false, then the output would be a false and it does return any row. Now if it's a true and the other one is a null, then it returns null. But if it's a false, and a null, then it returns a false. Now, let's take an example to understand this better. Let's head to Live [[SQL]]. Here let's take a look at a table. SELECT * FROM emp_tab and I run this. This is our table. Now if I want to retrieve all those rows where name begins with S, and the department number is 30, then it has to [[Fetch]] only one row for me.
>
> **[1:36](https://www.linkedin.com/learning/quick-start-guide-to-sql/logical-conditions?u=76281980&t=96)** It has to fetch this row where the name begins with S and department number is equal to 30. So I write this SELECT statement like this. I give SELECT * FROM emp_tab WHERE name LIKE, it begins with S and a percentile, and dept number is equal to 30. Now when I run this, it displays only one row here. Now it displays only one row because both the conditions needs to satisfy. Only then it retrieves those rows. Now if we are using OR in between two or more conditions, then it returns true even if one of the conditions is true. And it returns false only when both conditions are false. This is the table for OR. As we see, when there is at least one true, irrespective of the other condition, whether it is false or null, it just returns true. If there is a null in one of the conditions, and a false in the other, then it returns null. And if it's a null and null, then it again returns null. Now let's take an example for this. If I give SELECT * FROM emp_tab WHERE salary is greater than 6,000
>
> **[3:13](https://www.linkedin.com/learning/quick-start-guide-to-sql/logical-conditions?u=76281980&t=193)** or department number is greater then 50. Now let's see the expected output. First, look at our original table. This is our original table. Now I want to fetch all the employee details whose salary is either greater than 6,000 or department number is greater than 50. Here there is only one employee whose department is greater than 50. All others are below that. So this is the only employee there but his salary is not greater than 6,000. But still this row will be retrieved because it is satisfying one of the conditions in these two. And since we are using OR, that is more than enough for us. If it is an AND, then both conditions need to satisfy. But since it's an OR, only one condition satisfying should be good. So now when I run this, it fetches that row. Now, if I'm using NOT, then it returns true if the condition is false and vice versa. It's pretty straightforward. This is the table for NOT. If the condition is true, it returns false. If it's a false, then it returns true. And if it's null, then it just returns null. Let's look at an example for this. If I give SELECT * FROM emp_tab
>
> **[4:51](https://www.linkedin.com/learning/quick-start-guide-to-sql/logical-conditions?u=76281980&t=291)** WHERE dept number NOT IN 40, 70.
>
> **[5:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/logical-conditions?u=76281980&t=300)** So now this is going to fetch all the employee details of employees who do not belong to departments 40 and 70. So when I run the statement, it fetches all employees that do not belong to 40 and 70. So this is about the logical operators.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (4), [[SQL]] (1)
> **Env Vars:** where (5), select (5), sql (1)
> **SQL:** where (5), select (5)
> **Code Identifiers:** emp_tab (4)
> **Definitions:** is a  (3), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Order of precedence](https://www.linkedin.com/learning/quick-start-guide-to-sql/order-of-precedence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/order-of-precedence?u=76281980&t=0)** - [Instructor] Let's understand the order of precedence of all the conditions which we are using in, where. First, it's arithmetic operators, like multiplication, division, addition, and subtraction. Then it's the concatenation operator, which is two pipelines, then comes the comparison like equals, not equals, greater than, less than, greater than equals, less than equals. Then comes IS NULL, IS NOT NULL, LIKE, IN, NOT IN, followed by BETWEEN, NOT BETWEEN. Then comes the logical operators, NOT, and then AND, and finally, OR. Just like how we change the precedence of operators in the same way, we can change the precedence of conditions that we use in the where by using parenthesis. Let's look at a few examples. I'll write these select statements in Live [[SQL]] and then we will compare the two outputs. I give select EMP number, name, DPT number, salary from EMP tab where DPT number equals 30, or DPT number equals 40. And salary is greater than 3000. Now I'll copy this select statement, and then I'll make a few changes to it here by adding parenthesis for these two conditions.
>
> **[1:35](https://www.linkedin.com/learning/quick-start-guide-to-sql/order-of-precedence?u=76281980&t=95)** And now I'll run both the select statements and we'll compare the outputs. Now, in the first select statement, it's going to check these two conditions because AND has a higher precedence than OR. So it checks for employees who are from department number 40 and who have salaries greater than 3000. So only King has these two conditions satisfied, so that row is displayed. And then, we have the third condition where department number is equal to 30. So it displays all the employees who belong to department number 30. So, this is our output for the first select statement. Now, when we take a look at the output for the second select statement, it's going to be different. This is because we have used a parenthesis and put these two conditions within that. So first, it's going to compare these two conditions because parenthesis has precedents over any other operators. So it checks for all employees who belong to either department number 30 or 40, and then it checks for their salaries, if they are greater than 3000 or not. So only one employee matches all these criteria. So only one row is fetched. So by adding parenthesis, the condition inside them will be executed first in the second select statement.
>
> **[3:09](https://www.linkedin.com/learning/quick-start-guide-to-sql/order-of-precedence?u=76281980&t=189)** So this is about the order of precedence of different operators.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** dpt (3), null (2), between (2), emp (2), sql (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Sorting data](https://www.linkedin.com/learning/quick-start-guide-to-sql/sorting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/sorting-data?u=76281980&t=0)** - [Instructor] Now let's learn how to sort the data that is fetched from a select statement. Sorting data is very important when we need data in a specific order. We can sort data either in ascending or descending order. The default order is ascending, like in this example, since I haven't specified it as ascending or descending, it takes it as ascending. To display the results in descending order, I need to explicitly mention it as descending. Let's look at this example in Live [[SQL]]. Here, I give SELECT, empno, name, salary FROM emp..tab
>
> **[0:42](https://www.linkedin.com/learning/quick-start-guide-to-sql/sorting-data?u=76281980&t=42)** ORDER BY salary, and then run this, it sorts the data based on the salary from least to greatest. If I include descending, then it displays from the highest to the least salaries. Now here, ORDER BY clause always comes last in the SELECT statement, so first we [[Fetch]] the data using SELECT statement, filter out the data, using the WHERE conditions, and then we sort the filtered data. As we have learned earlier, the default order is ascending order, so when we are trying to sort columns of different data types, the sorting mechanism would change slightly for each data type. Let's understand how this works in each scenario for ascending order. Numeric values are sorted from least to greatest, like we have seen in the examples. character values or words are sorted in alphabetical order from A to Z. Let's take an example. Suppose I'm trying to sort the data using name column. It'll sort all the rows based on the name column from A to Z. If I give it as descending, it sorts in the reverse order, that's from Z to A. Dates are sorted for earliest to the latest, like here, if I include date column, and if I try to sort it by the date column,
>
> **[2:18](https://www.linkedin.com/learning/quick-start-guide-to-sql/sorting-data?u=76281980&t=138)** then it's displayed from earliest dates to the latest ones. If there are any null values and if it's ascending, then null values will be shown last, and if it is a descending order, then the null values will be shown first. This is the syntax for an order by clause. The ones in the square brackets are the optional sections. We can sort the data by giving the column name or the alias name. We can sort by multiple columns as well. Let's take a look at an example to get a better understanding. If I give SELECT * FROM emp..tab ORDER BY by dptno,
>
> **[3:03](https://www.linkedin.com/learning/quick-start-guide-to-sql/sorting-data?u=76281980&t=183)** and also by salary in descending order, here I have given two columns to sort. Here, we are first sorting by department number and then by salary from highest to lowest in each department. So this is all about the order by clause.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Fetch]] (1)
> **Env Vars:** select (4), order (3), sql (1), where (1)
> **SQL:** select (4), order by (3), where (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Single Row Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Types of functions and number functions](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-functions-and-number-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-functions-and-number-functions?u=76281980&t=0)** - [Instructor] Let's understand the types of functions that we can apply on rows in tables. Before that, let's understand what a function is. A function performs a specific action. It takes some arguments as input and always returns a value as output. They can perform different kinds of actions like calculations, manipulating the output rows as per the requirement, working with dates, converting data types and many more. Functions are broadly categorized into two types: single row and multiple row functions. The main difference between single row and multiple row functions is that single row functions work on one row at a time and returns one result for every row. While multiple row functions work on a group of rows and return one result for every group. Now let's look at all the single row functions. Number functions perform various arithmetic operations or calculations on the data. Character functions work with character values to manipulate or modify the output as needed. Date functions, as the name implies, works with dates like adding a few months to the actual date and so on. We will learn more in detail about all these functions in the upcoming videos. The next one is data type conversion functions,
>
> **[1:36](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-functions-and-number-functions?u=76281980&t=96)** which are used when we need to change data types to achieve some functionality. The last but not the least is the conditional expressions, which make it easy to use if then else logic in [[SQL]]. These are then number functions that we use most often. ROUND, TRUNC and MOD. Let's take some examples to understand this. Let's head to Live SQL. Here if I give SELECT ROUND of 92.427, 2
>
> **[2:15](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-functions-and-number-functions?u=76281980&t=135)** FROM DUAL. Now, DUAL is a one row and one column table that is present by default in all Oracle [[Databases]]. It's used to get pseudo column values or to calculate some mathematical expressions and so on. So now by using this SELECT statement, it rounds the value to a specified decimal place. It rounds it to the second decimal place here because we have given two as the second argument, which is the number of decimal places that we want it to be rounded off to. Since seven is greater than five, it rounds the second decimal place to three, which is it rounds off this two to three. So let's take a look at the output. We get 92.43. Now let's use TRUNC instead of ROUND. Now this is what has happened here. It truncates the value to a specified decimal. That means it just cuts off the remaining decimal places and gives 92.42. It just doesn't care about what digits are in here. It just cuts it off and gives 92.42. The third one is MOD. It returns the remainder when dividing two numbers. Let's give SELECT MOD 2100, 500
>
> **[3:49](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-functions-and-number-functions?u=76281980&t=229)** FROM DUAL. Now, this returns a remainder that is 100. Keep in mind that it's not going to return the quotient but the remainder. So when I run this SELECT statement, I get 100 because that is the remainder when I divide 2100 by 500. So these are the most commonly used number functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Databases]] (1)
> **Env Vars:** select (4), round (3), mod (3), dual (3), sql (2)
> **SQL:** select (4)
> **Versions:** 92.42 (2), 92.427 (1), 92.43 (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Character functions](https://www.linkedin.com/learning/quick-start-guide-to-sql/character-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/character-functions?u=76281980&t=0)** - [Instructor] Now let's learn about the various character functions. There are two types of character functions. Case manipulation and character manipulation functions. Case manipulation functions are LOWER, UPPER and INITCAP. Character manipulation functions are CONCAT, SUBSTRING, LENGTH, INSTRING LPAD/RPAD, TRIM and Replace. First, let's take a look at the case manipulation functions. LOWER is a function which converts the alpha character values to lowercase letters and then returns it. UPPER converts them to uppercase and returns those. INITCAP converts them to camel case and then returns it. Camel case means first letter is uppercase and the remaining letters are in lowercase. Let's take a few examples for these. If I give SELECT LOWER, HELLO World FROM DUAL and I run this, it converts all the letters to lowercase. Similarly, if I give UPPER here, it converts everything to uppercase. And if I'm giving INITCAP, it converts them to camel case. Now let's head to the character manipulation functions. The first one is CONCAT. CONCAT function concatenates the first character value with the second one. It acts similar to the CONCAT operator,
>
> **[1:33](https://www.linkedin.com/learning/quick-start-guide-to-sql/character-functions?u=76281980&t=93)** which is the two pipelines. SUBSTRING returns a specific number of characters from a character value starting from a specific start point. Let's take some examples for these functions. If I give SELECT CONCAT Hello, and World
>
> **[1:55](https://www.linkedin.com/learning/quick-start-guide-to-sql/character-functions?u=76281980&t=115)** FROM DUAL and I run this, these two different strings will be concatenated together like this. The next one is SELECT SUBSTRING of HelloWorld, 6 and 10
>
> **[2:16](https://www.linkedin.com/learning/quick-start-guide-to-sql/character-functions?u=76281980&t=136)** from DUAL, and I run this. Here SUBSTRING extracts a string of specific length that is starting at the sixth position and it's ending at the 10th position. So in HelloWorld, in the sixth position, we have W and in the 10th position, we have D. So it starts from the sixth position and goes all the way up to the 10th position and extracts this part from the string and returns that. So hence, we have got World as the output here. The next one is LENGTH. LENGTH counts and returns the number of characters in the expression. INSTRING returns the position of a named expression. Let's look at some examples and get a better understanding. Here if I give SELECT LENGTH of HelloWorld FROM DUAL, and I run this, it gives the total number of characters in this expression. There are 10 alphabets in here. So it counted those and it displays the output here as 10. The next one is SELECT INSTRING of HelloWorld and I am looking for e in HelloWorld and I want its position to be returned.
>
> **[3:54](https://www.linkedin.com/learning/quick-start-guide-to-sql/character-functions?u=76281980&t=234)** So I give this and I run this. Since E is in the second position in HellowWorld, it returned its position value. That is two. If there are multiple Es in the string, then it looks for the first occurrence of this expression and it returns that. The next one is RPAD and LPAD. RPAD pads a specific character value to the right of an expression to a total width of n character positions. LPAD pads it to the left side. TRIM function trims the beginning or trailing characters or both from a character value. REPLACE searches for a specific character expression and replaces it with another expression. Let's take some examples and get a better understanding of these functions. Here, if I give SELECT LPAD 5000, 8, asterisk FROM DUAL.
>
> **[5:03](https://www.linkedin.com/learning/quick-start-guide-to-sql/character-functions?u=76281980&t=303)** And I run this. Here we are using LPAD. So it is padding 5000 with asterisk and the total number of characters needs to be eight. Since 5000 is a four-digit number, it padded with only four asterisks here on the left side of 5000. If there is a five-digit number, suppose it's 10,000, and I run this, only three asterisks will be padded to the left of this number as we can see here. If I'm using RPAD, then it pads it to the right of this number. The next one is SELECT TRIM d FROM HelloWorld FROM DUAL. Now this is going to trim this expression from the actual expression over here. That is the HelloWorld. So since we have HelloWorld here, it's trimming D from here and returning only HelloWorld to us. The next one is REPLACE. I give REPLACE HelloWorld and now I want to replace Hello with Bye. So I give these, close the quotes and then close the brackets. FROM DUAL.
>
> **[6:37](https://www.linkedin.com/learning/quick-start-guide-to-sql/character-functions?u=76281980&t=397)** And then I run this. So I get ByeWorld. So this is what is happening here. So here we have the syntaxes for all the character functions, LOWER, UPPER, INITCAP, CONCAT, SUBSTRING, LENGTH, INSTRING, RPAD/LPAD, TRIM and Replace. So this is about all of the character functions that we use most often.

> [!info]- Semantic Content
>
> **Env Vars:** select (7), dual (7), concat (6), lpad (6), substring (5)
> **SQL:** select (7)
> **Definitions:** is a  (3)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Date functions](https://www.linkedin.com/learning/quick-start-guide-to-sql/date-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/date-functions?u=76281980&t=0)** - [Instructor] Let's learn about date functions. SYSDATE function returns the current date. So if I give SELECT SYSDATE FROM DUAL, it'll display the current date. We can perform different arithmetic operations on dates. These are some of the date functions that are most commonly used, MONTHS_BETWEEN, ADD_MONTHS, NEXT_DAY. Let's look at some examples to learn about these functions. If I want to calculate the number of months between two dates, I give MONTHS_BETWEEN followed by both the dates, and then I run this. Now it displays the number of months in between these two dates. If I change the order and give 1st of March here, and 3rd of December, this side, then it gives me a negative value. Now if I want to add a set of months to a specific date, then I can give ADD_MONTHS, the date, followed by the number of months to be add. So, now, when I run this, it returns the new date by adding four months to 5th of June, 2021, so the new value is 5th of October, 2021. NEXT_DAY is used to find the next TUESDAY or any day after this specified date. So since I'm looking for TUESDAY here, it looks for the next TUESDAY after this date. So when I run this, it's stating that the next TUESDAY after 3rd of July is on 6th July, 2021.
>
> **[1:36](https://www.linkedin.com/learning/quick-start-guide-to-sql/date-functions?u=76281980&t=96)** Few other date functions are LAST_DAY, ROUND, and TRUNC. Let's look at some examples for these date functions too. Now if I want to find the last day of a month, I can give LAST_DAY followed by a specific date. And then when I run this it's going to give me the last day as 28th February, 2021. If I give it as 2020 here, then it's going to give me 29th FEB, 2020 because that's a leap year. Now let's understand the difference between ROUND and TRUNCATE functions. ROUND function rounds the date to the nearest month or year. So if the date is greater than 15, then it rounds it to the first of the next month, otherwise it rounds it to the first of the current month. So when I run this SELECT statement, since today's date is 13th, it has rounded to 1st of December, 2021. If it was a date greater than 15, then it would round to 1st of January, 2022. Now TRUNCATE is different from ROUND. This is how it is different. TRUNCATE truncates to the nearest month or year, irrespective of the day, whether it is greater than or less than 15, it just truncates it to the first of the month that is specified here. So when I run this, it just returns 1st of December, 2021.

> [!info]- Semantic Content
>
> **Env Vars:** tuesday (4), round (4), truncate (3), sysdate (2), select (2)
> **CLI Commands:** find (2)
> **SQL:** select (2)
> **Speakers:** - [instructor] (1)

#### [Data type conversion functions](https://www.linkedin.com/learning/quick-start-guide-to-sql/data-type-conversion-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/data-type-conversion-functions?u=76281980&t=0)** - [Instructor] Let's learn about some data type conversion and some general functions. There are two types of data type conversion functions, implicit and explicit conversions. Sometimes Oracle Server uses data of one data type where it is expected to have data of a different data type, then the Oracle Server implicitly converts one data type to another as needed. Though the implicit conversion feature is available, it is always advisable to use explicit conversions as it makes the [[SQL]] code more reliable. In explicit data conversions, we use some conversion functions like TO_CHAR, TO_NUMBER, and TO_DATE. These are the syntaxes for the three functions. TO_CHAR converts a number or date to a character format. Using this, we can convert the date format from its default format to our own format as needed. Let's take an example. If I give SELECT name,TO_CHAR hiredate,
>
> **[1:10](https://www.linkedin.com/learning/quick-start-guide-to-sql/data-type-conversion-functions?u=76281980&t=70)** I want it to be displayed like this, just the year of joining, so I give it like this, and I want an alias name for this as "Year Of Joining" FROM emp_tab, and I run this.
>
> **[1:26](https://www.linkedin.com/learning/quick-start-guide-to-sql/data-type-conversion-functions?u=76281980&t=86)** So here, it's displaying all the employees and their year of joining. Instead of displaying the hire date, the complete hire date, it's displaying just the Year Of Joining. So, based on our requirement, we can use TO_CHAR, or TO_NUMBER, or TO_DATE and change the formats as needed. TO_NUMBER converts a character to a number format, and TO_DATE converts a character to a date format. Now let's take a look at some general functions. NVL function converts a null value to an actual value. This is the syntax. Both expr1 and expr2 must be the same data type. Let's take an example for this. We do not have any null values in our table, but I'll just show you how we can write this. If I give SELECT NVL name, and if there is no name available and if it is set as null, then I want to change that value to Unavailable FROM emp_tab. Here, we can see that all the names are already there, and there is no null value for a name. So that's why we don't have to replace it with Unavailable, Unavailable. But if it is set to null, for or any of them in this particular column, then it converts it to Unavailable by using NVL function. Now NULLIF function compares two expressions
>
> **[3:04](https://www.linkedin.com/learning/quick-start-guide-to-sql/data-type-conversion-functions?u=76281980&t=184)** and checks if they are equal or not. If they are equal, it returns a NULL, otherwise it returns the first expression. The other general function that we use is COALESCE. COALESCE function checks if the first expression is NULL. If it is not NULL it returns it, otherwise it does a COALESCE on the remaining expressions. This is the syntax for that. So these are the various data type conversion and general functions that we use often.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** to_char (4), to_number (3), to_date (3), nvl (3), null (3)
> **Code Identifiers:** emp_tab (2)
> **SQL:** select (2)
> **Speakers:** - [instructor] (1)

#### [Conditional expressions](https://www.linkedin.com/learning/quick-start-guide-to-sql/conditional-expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/conditional-expressions?u=76281980&t=0)** - [Instructor] Now let's learn about conditional functions. These are CASE and DECODE. They both act like IF-THEN-ELSE in [[SQL]]. Typically to use IF-THEN-ELSE, we need to write a procedure but by using these functions, we can avoid that. Here in case expression, we compare our expression with different comparison expressions and return the corresponding return expressions. This is the syntax for case. Let's look at an example. Now, based on an employee's designation, I want to increase their salary accordingly, so I give SELECT name, job, salary and I'm going to write this in multiple lines for better understanding. I start the CASE function. CASE, since I'm comparing the job, I give job WHEN, WHEN the job title is MANAGER, I want the salary to increase by 20%.
>
> **[1:09](https://www.linkedin.com/learning/quick-start-guide-to-sql/conditional-expressions?u=76281980&t=69)** WHEN the job is ANALYST, then I want the salary to increase by 15%. And WHEN his job title is CLERK, then I want it to increase by 10%. And WHEN the job doesn't match with any of these rows, then I just want to leave it as is. Now I end the case function and I do not want this entire text to be displayed in the column heading. So I'll give an alias name as Revised Salary. And then get FROM emp_tab because that's where we are fetching this data from. And now I run this. We have all four columns, name, job, salary, and the revised salary based on their designations. Similarly, we can use DECODE to achieve the same functionality. Let's take a look at the syntax first. Now, this is the syntax for DECODE. Here DECODE function decodes the expression by first comparing it with the search expression and then returning the corresponding DECODE expression. Let's look at an example for a better understanding. We can achieve the same functionality as the case function by giving the code like this.
>
> **[2:45](https://www.linkedin.com/learning/quick-start-guide-to-sql/conditional-expressions?u=76281980&t=165)** I give SELECT name, salary. We want the job as well. Now I begin the DECODE. Since I am checking for the job, I give that first. This is the search expression. MANAGER. And this is the return expression. That is the new revised salary. And if job is ANALYST, this is the new salary. If it's a CLERK, then salary is increased by 10%. Otherwise, the salary just remains as is. Now, I'll close this. The function is done. Now I give the alias name, Revised Salary, and give from emp_tab. And now I run this. We get the exact same output. Just like how we got with the case function. So these are the two conditional statements that we have, CASE and DECODE.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** decode (7), case (4), else (2), select (2), manager (2)
> **Code Identifiers:** emp_tab (2)
> **SQL:** select (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 4. Multiple Row Functions/ Group Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Types of group functions](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-group-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-group-functions?u=76281980&t=0)** - Let's learn about the group functions and the types of group functions that we can use. First of all, what is a group function? A group function works with a group of rows from a table and returns a value for each group. This is the syntax for group functions. The GROUP BY clause comes after the WHERE condition and before the ORDER BY clause. Everything that is enclosed in square brackets is optional and is used as needed. We will see some examples in the next slides. These are some of the group functions to achieve different functionalities. SUM, AVERAGE, COUNT, MAX and MIN, VARIANCE and standard deviation. SUM returns the sum of all n values. AVG returns the average of n values in a table. Max and min return maximum and minimum values within a group of values pulled by an expression. Let's take a look at few examples. If I give SELECT SUM of salary FROM emp_tab, and I run this, it gives me the sum of all salaries of all employees in emp_tab table. If I give SELECT AVG of NVL of salary, zero FROM emp_tab, and I run this,
>
> **[1:34](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-group-functions?u=76281980&t=94)** this displays the average of all the salaries. By using NVL, I'm replacing all the null values in salary column to zero and then calculating the average. Now let's take a look at all the salaries of employees who belong to department number 30. So I give SELECT salary FROM emp_tab where dept number is equal to 30. Now it's going to pull up all the salaries of employees who belong to this department. Now I want to get the minimum and maximum salaries in this department. So I give MIN of salary and MAX of salary. And I run this. So it has to pull up 800 and 3,000. So the minimum is 800 and maximum is 3,000. The next one is COUNT function. This returns the number of rows in a group or a table. Here if I give SELECT * FROM emp_tab, it's going to pull up all the rows in this table. Since there are only eight rows, we are able to count it manually. But if there are large sets of data, we will need to use the COUNT function. So when I give something like this, it just gives me the total number of rows that are pulled up.
>
> **[3:07](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-group-functions?u=76281980&t=187)** If I want to get the count of employees who report to a particular manager, then I can give SELECT COUNT of names or I can give employee number as well because that is more unique. FROM emp_tab WHERE manager equals 7003. It says that there are three employees who report to this manager. Let's cross check. I'll just remove the COUNT here and see if we get three rows pulled up here. So these are the three employees who are reporting to manager ID 7003. Now if I give SELECT COUNT of DISTINCT emp number
>
> **[4:06](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-group-functions?u=76281980&t=246)** from emp_tab, now this avoids any duplicate emp numbers and just pulls out a count of all the unique values. Now let's take a look at this table here. These are the data types on which group functions can operate. We can perform all these group functions on numeric data type. Now, MIN, MAX and COUNT can be used with other data types like date and char values too. COUNT function can take arguments of any data type. Now let's look at MIN and MAX for date data types. Suppose I give SELECT MIN of hiredate and MAX of hiredate from emp_tab. Now, this returns the hire date of employees who joined earliest and most recently. So MIN will return the hire date of the employee who joined long time back and MAX returns the employee who has joined most recently. If I give something like SELECT MIN of name and MAX of name, this is to check for character values. FROM emp_tab and I run this, this is going to return the first
>
> **[5:39](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-group-functions?u=76281980&t=339)** and the last values in alphabetical order.

> [!info]- Semantic Content
>
> **Env Vars:** count (8), select (8), max (7), min (7), sum (3)
> **SQL:** select (8), where (2), group by (1), order by (1)
> **Code Identifiers:** emp_tab (9)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - let (1)

#### [Creating groups and nested groups](https://www.linkedin.com/learning/quick-start-guide-to-sql/creating-groups-and-nested-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/creating-groups-and-nested-groups?u=76281980&t=0)** - [Instructor] Let's learn how to group rows in a table. Instead of using the entire table, sometimes we need small groups of rows to perform operations individually. In the previous video, we saw how to find the employee with highest salary under one manager, 7,003. But now I need to find the employee with the highest salary under every manager. To do this, we group rows in the table by using GROUP BY clause based on manager. Let's look at an example. If I give SELECT manager, MAX(salary) FROM emp_tab
>
> **[0:43](https://www.linkedin.com/learning/quick-start-guide-to-sql/creating-groups-and-nested-groups?u=76281980&t=43)** GROUP BY manager ORDER BY MAX(salary), and they want it in descending. If I run this, this is going to give me the manager and the employees with highest salaries who are reporting to them, as well. The syntax for GROUP BY clause is select column names, group functions, and include the columns in the braces. And the group functions could be like min, max, count, any of those functions from table name, where condition, and then GROUP BY, and then finally ORDER BY clause. This order will always be the same for every SELECT statement. We have to keep in mind that any columns in the select statement that are not used in the group functions must be given in the GROUP BY clause. We can only use column names and not alias names in the GROUP BY clause. We can also group by multiple columns.

> [!info]- Semantic Content
>
> **Env Vars:** group (6), select (2), max (2), order (2)
> **SQL:** group by (6), select (2), order by (2)
> **CLI Commands:** find (2)
> **Code Identifiers:** emp_tab (1)
> **Cross-References:** previous video (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Filtering group results](https://www.linkedin.com/learning/quick-start-guide-to-sql/filtering-group-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/filtering-group-results?u=76281980&t=0)** - [Instructor] Let's learn how to restrict groups and display only those group results that are needed. We cannot give GROUP_FUNCTIONS in the Where condition, it'll throw an error. So instead of giving the group_condition in the Where, we use another clause that is the Having clause. This is the syntax for it. SELECT, column names, if there are any GROUP_FUNCTIONS we give them here, FROM table_name, WHERE condition, then GROUP BY any group_by_expressions, followed by HAVING group_conditions. This is where we will give any conditions related to GROUP_FUNTIONS. And, finally, ORDER BY clause to sort defiltered data. Let's take an example for this. So, now, if I want to display only highest salaries in all departments that are greater than 4,000. If I try to give something like this, SELECT deptno,MAX salary FROM emp_tab WHERE MAX of salary &gt;= 4000 GROUP BY deptno; I have given the GROUP_FUNCTION here in the WHERE condition. It looks pretty good, but it actually throws an error because we are not supposed to use any GROUP_FUNTIONS here in the WHERE condition. So instead of that, there is another clause
>
> **[1:37](https://www.linkedin.com/learning/quick-start-guide-to-sql/filtering-group-results?u=76281980&t=97)** called HAVING clause where we can give our group_conditions. So this is where I'll put our group_condition, and I'll remove the WHERE condition here. We can also have the WHERE condition, if you want to, but, as of now, in our select statement we do not have anything so I just removed the WHERE, and now I run this. So, now, it has displayed only the highest salaries in all departments, which is greater than 4,000.

> [!info]- Semantic Content
>
> **Env Vars:** where (7), group_functions (2), select (2), group (2), having (2)
> **SQL:** where (7), select (2), group by (2), having (2), order by (1)
> **Code Identifiers:** group_condition (2), group_conditions (2), table_name (1), group_by_expressions (1), emp_tab (1)
> **Speakers:** - [instructor] (1)


### 5. Joins and Subqueries

[↑ Back to Table of Contents](#table-of-contents)

#### [Types of joins](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-joins?u=76281980&t=0)** - [Instructor] Now let's learn all about joins. We use joins to [[Fetch]] data from one or more tables at a time. This is the syntax for joins: select columns from table_name1 followed by the joint_name, that is the type of join we use. Then table_name2 on. On is a keyword here followed by the join conditions. Now based on the data we need, joins are categorized into four types: inner join, right join, left join and full outer join. Let's look at each of these with examples. The first one is the inner join. Inner join retrieves all rows matching in both the tables. Like here in this example, the two tables that we are trying to join are country_tab table and states_tab table. So here, it's going to retrieve only those rows that match in both the tables. So this is how the Venn diagram looks for the inner join. Let's look at this example in Live [[SQL]]. I've written the same example over here and I've also written the country_tab and states_tab select statements too just to understand it better. So now when I run this, first I'll have the country_tab table followed by the states_tab table. And finally, we'll have the joins table over here. So here, since we are using inner join,
>
> **[1:34](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-joins?u=76281980&t=94)** it's going to retrieve only those rows that match in both these two tables. So as we can see here, for this country_ID, we have two states mapped to this country_ID. Similarly, for this country_ID, for this country_ID two, we have a state mapped to it as well. But for country_ID three, we do not have any states mapped over here. And similarly, this state does not have a country_ID that is mapped to it. So, this row and this row have been excluded and only the matching rows in both these tables would be displayed which is these three rows along with the country details which gives us this output. So this is how the inner join would work. The next one is left join. Left join retrieves all rows from the left table and only the matching rows from the right table. Let's look at this example. Here, instead of inner join, if I give left join over here and I run this, we have our country_tab followed by the states_tab and then we have the left join. Here, all the rows from the left table that is country_tab table would be fetched and only the matching rows from the states table would be fetched.
>
> **[3:09](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-joins?u=76281980&t=189)** So all these three rows should be there in our joins table. We have USA, Mexico and Canada here and only the matching rows from the states table which is these three rows and Kerala would be excluded because it does not have any mapped country_ID. So, that's the one which is excluded and we have the other three states here. So that's how the left join works. The third one is the right join. This works exactly the opposite of it. Here, it retrieves all rows from the right table and only the matching rows from the left table. So if I give right join over here and I run this, now it's going to pull up all the rows from states_tab and only the matching rows from the country_tab which gives us these four states along with the country_IDs. So we have these four states along with country_IDs but since Kerala does not have any country_ID over here, it still pulls it up because all rows from the right table would be pulled up. So, it just leaves the columns blank if it does not have that information. But when it comes to the left table, it only pulls up those rows which have matching rows in the other table. So only USA and Mexico would be pulled up and Canada would be excluded because there are no states mapped to Canada. So this is about the right join. The fourth one is full outer join. Here, if you're joining two tables using full outer join,
>
> **[4:45](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-joins?u=76281980&t=285)** it pulls up all the rows from the left table as well as all the rows from the right table irrespective of whether they match or not. So let's take an example. Here, if I give full outer join and run this, we will have all these rows from the country_tab and all these rows from states_tab in our output. So as we see, we have all four states here and all three countries too. So this is how the full outer join works. So based on our requirements, we use these different types of joins.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1), [[SQL]] (1)
> **Code Identifiers:** country_tab (7), states_tab (6), joint_name (1)
> **Env Vars:** usa (2), sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Uses of subqueries](https://www.linkedin.com/learning/quick-start-guide-to-sql/uses-of-subqueries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/uses-of-subqueries?u=76281980&t=0)** - [Instructor] Let's learn about subqueries. First of all, what is a subquery? When we write a select statement in a clause of another select statement it is known as a sub query. It is also called inner select or nested select. The inner select statement will be executed first and then its output is taken as input for the outer select and retrieves the data. We'll understand this better when we look at some examples in the next videos These are some of the rules that we need to follow when writing subqueries. Subqueries must be enclosed in parentheses. Subqueries must always come on the right side of the comparison condition. Here when we look at this example, it has been written on the right side of the comparison condition. We cannot give it on this side of the condition and as we see it has been enclosed in parenthesis over here. So these are some simple rules that we need to follow when writing subqueries.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), known as (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Types of subqueries](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-subqueries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-subqueries?u=76281980&t=0)** - [Instructor] Now let's learn about the types of subqueries. There are two types of subqueries, single row and multiple row. Single row subqueries return a single row or single value. And we use single row comparison operators like equals to not equals to, less than, less than equals to, greater than, and greater than equals to. Multiple row subqueries return multiple rows. And we use multiple row comparison operators like in, any, and all. We learn about these operators in a little while. Let's look at some examples for both these types of subqueries. This is an example for single row subqueries. As we have seen it's enclosed in parenthesis and it's on the right side of the comparison condition. So now let's look at this example in Live [[SQL]]. Here, I've already written returned this example here. Since the inner query gets executed first, let's run that first. This the inner query, I've copied it already. When I run this, the output is one. So the country ID for California state is one. So now, since this is the output for the inner query that is passed as input for the outer query. And when I run this outer query, I get the states associated with the country ID one from states tab. So now, instead of writing two separate statements I'm going to club this by using subqueries.
>
> **[1:35](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-subqueries?u=76281980&t=95)** So when I run this select statement I get the exact same output. So this is how subqueries work. In this example, we have taken only one inner query but we can have multiple inner queries too. Here, we have used states tab table for both the outer and the inner queries but we can have different tables if needed. Like here I have changed from states tab to country tab over here, instead of giving states tab I've changed it to country tab because I like to know the details of the country that has been retrieved from the inner query. So when I run this, I will get the details of our country over here. Now also use group functions in subqueries. As we know we have group functions like count, min, max, sum, average. So now let's try by using max over here. So here in our sub query I have used max salary over here which retrieve the maximum salary of an employee in the employee tab. So once we have the maximum salary from this table that is passed as input to our outer query and we'll have the employee details fetched over here. So when I run this this is the employee with the highest salary.
>
> **[3:10](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-subqueries?u=76281980&t=190)** So this is how we can use group functions in subqueries. This is an example of multiple row subqueries. Let's look at this exam in Live SQL. In the first example here I have used in operator here. So once the inner query gets executed, it pulls up all the salaries of employees from department number 30, so these are the salaries. So once we have this list of values, now it checks if this salary is matching with any of these values over here and pulls up those rows since we are using in operator, that's how in works. So when I run this, it pulls up all the rows where the salary is matching with one of these values. So all these salaries are matching. So that's how the in operator works. The next one is any. Now, once we have the list of values pulled up from the inner query then since I've used any over here, it checks if the salary is less than at least one of these values over here. So if it's less than 2975, it pulls up the row over here. Or if it is less than 3000, it pulls it up. If it's less than 800, it pulls it up. And if it is less than 1300, then also it pulls it up. So at least one of the values it check.
>
> **[4:44](https://www.linkedin.com/learning/quick-start-guide-to-sql/types-of-subqueries?u=76281980&t=284)** Unlike all operator where it checks for all the values and only if the salary is greater than all of these values only then it fetches the employee details. So here, when I run this select statement, using any operator, as we can see it just retrieves all the employees salaries if they are less than at least one of these values. Now here, when I run this using the all operator then it retrieves only if the salary is greater than all of these values which technically means is greater than 3000 because that is the highest value in this set of values. So only one employee has a salary greater than 3000, so that's what has been fetched. So this is all about the types of subqueries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Env Vars:** sql (2)
> **Definitions:** is an  (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/quick-start-guide-to-sql/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quick-start-guide-to-sql/next-steps?u=76281980&t=0)** - [Narrator] Thank you so much for joining me for this course, I hope you enjoyed learning how to write different kinds of select statements using [[SQL]]. Till now we have learned how to [[Fetch]] data from existing tables. If you wish to continue your database journey, I would highly recommend another course that I have tailor made just for you, it's called [[SQL Queries Made Easy]]. This is a quick guide on how to create new tables, alter them and even drop them as needed. We will also learn how to add, manipulate and delete data from these tables. It's a great course to advance after this one. Thanks again, and happy learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Fetch]] (1)
> **Env Vars:** sql (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Deepa Maddala]]

## Resources

- Exercise files available

## Skills Covered

- SQL

## Path Context

### In [[Explore a Career in Database Development]]
← [[Programming Foundations Databases]] | **2 of 5** | [[Learning SQL Programming]] →

## Appears In

- [[Explore a Career in Database Development]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)