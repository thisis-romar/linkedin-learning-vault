---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: hands-on-introduction-sql
url: "https://www.linkedin.com/learning/hands-on-introduction-sql"
level: Intermediate
updated: 4/19/2024
learners: 102153
skills:
  - SQL
exercise_files: false
github: "https://github.com/LinkedInLearning/hands-on-sql-3086685/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFce8T-RjMmAg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667324559752?e=2147483647&amp;v=beta&amp;t=FiYoxpiVs6Llxkp2UZOQZPHtpSMbiNmw2i1UESIeMpg"
linkedin_topic: Data Science
learning_paths:
  - '[SQL Hands-On Practice](../../Paths/Data%20Science/Learning%20Paths/SQL%20Hands-On%20Practice.md)'
next_courses:
  - '[SQL Practice- Basic Queries](SQL%20Practice-%20Basic%20Queries.md)'
path_nav: '[{"path":"SQL Hands-On Practice","position":1,"total":9,"prev":null,"next":"SQL Practice- Basic Queries"}]'
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

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Hands%20On%20Introduction%20Sql.md)

![Hands On Introduction Sql](https://media.licdn.com/dms/image/v2/D560DAQFce8T-RjMmAg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667324559752?e=2147483647&amp;v=beta&amp;t=FiYoxpiVs6Llxkp2UZOQZPHtpSMbiNmw2i1UESIeMpg)

# Hands On Introduction Sql

> Join instructor Deepa Maddala as she uses hands-on lessons to teach you the tools, techniques, and know-how that you need to start using SQL from day one. Deepa guides you through using the Select statement to fetch and filter data, creating and adding to tables and data, modifying existing tables, and what to use in different scenarios. She includes simple examples with each topic she covers.The 

> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql) | Intermediate | 102K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Introduction to SQL](#introduction-to-sql)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. The Select Statement**](#1-the-select-statement) (5 videos)
  - [Fetch data](#fetch-data)
  - [Filtering data](#filtering-data)
  - [Types of functions, part 1](#types-of-functions-part-1)
  - [Types of functions, part 2](#types-of-functions-part-2)
  - [Using multiple tables](#using-multiple-tables)
- [**2. New Tables and Data**](#2-new-tables-and-data) (5 videos)
  - [Create new tables](#create-new-tables)
  - [Change table structure](#change-table-structure)
  - [Add new rows to a table](#add-new-rows-to-a-table)
  - [Delete rows in a table](#delete-rows-in-a-table)
  - [Commit and rollback](#commit-and-rollback)
- [**3. Modifying Existing Tables**](#3-modifying-existing-tables) (4 videos)
  - [Modify rows and columns in tables](#modify-rows-and-columns-in-tables)
  - [Merge rows in a table](#merge-rows-in-a-table)
  - [Drop or truncate a table](#drop-or-truncate-a-table)
  - [Rename a table](#rename-a-table)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to SQL](https://www.linkedin.com/learning/hands-on-introduction-sql/introduction-to-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/introduction-to-sql?u=76281980&t=0)** - [Deepa] You've probably heard of [Databases](../../Skills/Software%20Development/Databases.md) since you were in grade school, and maybe you already know databases are used to store data. But how does the data get there? What can you do with the data that's stored there? If you don't know the answers to those questions but want to learn, that's where I can help you. Hi, my name is Deepa Maddala. I'm a database developer. I've designed this course to get you up and running with database tables using the [SQL](../../Skills/Data%20Science/SQL.md) language. I'll show you how to use the common statements in order to manipulate data within tables. This includes modifying, deleting, merging, and creating data, along with tips on transaction controls. While this isn't a fully comprehensive primer on SQL, it should help you get started and maybe answer some of your immediate questions regarding databases. So if you're ready to dive in, let's go ahead and get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **Env Vars:** sql (2)
> **Speakers:** - [deepa] (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=0)** - [Instructor] On your course interface, find the [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md) Open button. Click on it to go to GitHub. You then click on Create Codespace on Main button and wait for it to fully load. This might take some time. Now once it's fully loaded, we can see an Install button. Click on that. Once it's installed, navigate to File Explorer. This is where we have all the files that are needed for our project. I will be adding all the [SQL](../../Skills/Data%20Science/SQL.md) queries here under the queries folder. These three are example SQL statements. This is just for your reference. Currently we are on the Main branch. We will have to navigate to chapter one, video one branch. So I click on Main and let's try to find 01_01 branch. There it is, chapter one, video one branch. So this is the one, I click on it, and now we can see that there are two folders here. The first one is to create the entire database that is needed for our course. So we will not be looking into that. The folder that we will be looking into is 01_01, which corresponds to our video.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=95)** So I click on that and we have all the SQL statements that are needed for this specific video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **UI Navigation:** click on (6), navigate to (2), go to (1)
> **Env Vars:** sql (3)
> **CLI Commands:** find (2)
> **Tools:** github (2)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. The Select Statement

[↑ Back to Table of Contents](#table-of-contents)

#### [Fetch data](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=0)** - [Facilitator] The first thing we need to learn is how to [Fetch](../../Skills/Web%20Development/Fetch.md) data from different tables in our database. We use the SELECT statement to fetch data from the tables. We can fetch data by columns. That means we can fetch one single column or multiple columns from the table by specifying it in the SELECT statement. We can fetch data by filtering the rows in a table by specifying a condition. We can also fetch data from one or multiple tables by using joints, which we learn later. [SQL](../../Skills/Data%20Science/SQL.md) statements are not case sensitive, but the best practice is to write the keywords in uppercase and the table names, column names, and all others in lowercase. Keywords cannot be abbreviated or cannot be split across lines. We can write the complete SQL statement in one line. However, we use indentation to improve readability, especially when we are writing long SQL statements. Now this is the syntax for the SELECT statement. If we give star, it'll fetch all the columns from the table, but if I specify the column names explicitly, only those columns data will be fetched. DISTINCT keyword is optional. It is used only when we need to fetch distinct values in a particular column. We can also ask to fetch an expression instead of a column name. We give the alias name if we do not want the expression name to be shown as the column name. We'll understand this better when we look at an example.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=95)** Then we give the FROM keyword followed by the table name. So now let's look at a few examples in codespace. On your codes interface, find the [GitHub](../../Skills/Software%20Development/GitHub.md) codespace's open button. Click on it to go to GitHub. You then click on create codespace on main button and wait for it to fully load. This might take some time. Now once it's fully loaded, we can see an install button. Click on that. Once it's installed, navigate to File Explorer. This is where we have all the files that are needed for our project. I will be adding all the SQL queries here under the queries folder. These three are example SQL statements. This is just for your reference. Currently, we are on the main branch. We will have to navigate to chapter one, video one branch. So I click on main and let's try to find 0101 branch. That is, chapter one, video one branch. So this is the one, I click on it. And now we can see that there are two folders here. The first one is to create the entire database that is needed for our course. So we will not be looking into that.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=188)** The folder that we will be looking into is 0101, which corresponds to our video. So I click on that and we have all the SQL statements that are needed for this specific video. So since we are in chapter one, video one, so I go there and click on the SELECT statement .SQL. So this is a basic SELECT statement, where I'm fetching all the rows and columns from EMP tab. So when I run this, I right click and go to run selected query. Click on that and it fetches all the rows and all the columns from EMP tab table. Now in the second SELECT statement, I am specifying the columns that I want to fetch. I want only EMP number and name columns from EMP tab table. So when I run this, it only fetches those two columns. Now, if I want to give an expression along with the column names and want to fetch that data, I give the column names first, followed by an expression where I want to calculate the annual salary for all employees. So I'm multiplying it with 12 and then I run this. So now we got the annual salary, but the column name looks a little weird like salary times 12. So for it to look a little nicer, we give, suppose I give it as salary
>
> **[4:44](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=284)** and run this, it shows it as salary. But if you want to give a more appropriate name, I would like to call it as annual salary. Now if I run this, it's going to throw me an error because there are two words in the alias name. When there are multiple words in the alias name, we have to put them in quotes. So now when I run this, it shows it annual salary and this looks much more nicer. Now let's learn about the different operators that we have. We have arithmetic operators and character operators. Any arithmetic expression uses arithmetic operators. That is, plus, minus, multiplication, and division. The order of precedence is multiplication, division, addition, and then finally, subtraction. The parenthesis overrides the order of precedence, which means that anything in the parenthesis will be calculated first and then the other operators outside the parenthesis in the order of precedence. Character strings use character operators. Those are two pipelines that is for contamination and single quotes and double quotes for giving character strings. So here we have learned about the basic SELECT statements, how to use alias names,
>
> **[6:18](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=378)** and about arithmetic and character operators.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (11), [SQL](../../Skills/Data%20Science/SQL.md) (7), [GitHub](../../Skills/Software%20Development/GitHub.md) (2)
> **Env Vars:** select (7), sql (7), emp (4), distinct (1)
> **UI Navigation:** click on (8), go to (2), navigate to (2)
> **SQL:** select (7)
> **CLI Commands:** find (2)
> **Tools:** github (2)
> **Definitions:** is a  (1), means that (1)
> **Best Practices:** best practice (1)

#### [Filtering data](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=0)** - [Instructor] We do not need the entire tables data every single time. So let's learn how to filter the data from tables based on our requirement. We use the WHERE condition to filter the data. This is the syntax for the WHERE. Alias names cannot be given in the WHERE condition. If we have character values or date values in the conditions, then we need to give those in single quotes. Let's look at some examples to understand this better. Let's go to chapter 1 video 2, and go to WHERE condition. So here, I'm trying to SELECT empno, name, and salary from emp_tab WHERE salary&gt;2500. So it's going to retrieve all the employees whose salaries are greater than 2,500. So when I run this, gets all the employees whose salaries are greater than 2,500. In the second SELECT statement, the condition is using a character value. So I have to enclose those in single quotes. So here we are checking if an employee's name is KING and getting their details. So when I run this, there is an employee named KING and these are his details. There are two types of conditions, one is comparison and the other is logical. Comparison conditions, as the name implies,
>
> **[1:33](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=93)** are used to compare the table data with the values that we provide. These are the different comparison operators. = to checks if the column value is equal to a specific value, &lt;&gt; to check if they're not equal to a specific value. Similarly, we have &lt;, &gt;, &lt;=, and &gt;=. LIKE checks for a specific character pattern. IN checks if the column value matches with any value in our set. BETWEEN AND checks if the column value is between a range of values. And IS NULL checks for null values in column. So let's look at some examples for these. Now that we are on chapter 1 video 2, we will have to navigate to the corresponding branch. We will have to do this step once we start a new video so that we have the appropriate [SQL](../../Skills/Data%20Science/SQL.md) statements. So let's navigate to 01_02 Branch. I click on this and let's find 01_02 branch. And I click on that. So now, we have a new folder, 01_02, which has all the SQL statements that are needed for this particular video. So these are all the SQL statements that we will cover in this video. So this is a very important step to navigate to the correct branch before we start working on a specific video.
>
> **[3:07](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=187)** Let's go to ComparisonConditions. Here, we are checking for the name to match this specific pattern. So _ represents one single character and % represents multiple characters. So we are trying to look for this pattern and we'll see if it returns any employee details with that pattern. So ADAMS is a name which matches this pattern because the first letter is A, it could be any letter so that doesn't really matter, but the second letter has to be an uppercase D, which matches, and then we have other letters. So it matches the pattern so it returns this employee details. IN checks for this column value to be in this set of values. So it checks if the deptno is in this set of values and gets those employee details for us. So now let's run this. And these are all the employees who belong to department 30 and 40.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=267)** Now BETWEEN AND is used to check for a column value to be between a range of values, including these values as well. So when I run this, these employees' salaries are within the range 2,000 and 6,000, so that's fetched for us. Now here, we are checking if the manager column IS NULL and we are getting those employee records so that we can update that manager details for that employee. Only empno 7001 manager is set to null. So that's been returned for us. Now let's take a look at the logical conditions. We use these when we have multiple comparison conditions in WHERE. AND returns true only if both the conditions are true, otherwise, it returns a false. Let's take an example. Let's go to LogicalConditions. Here, we have two conditions, WHERE name has to match this pattern AND the deptno has to be 30. So only if both the conditions are true, only then the rows will be fetched. So when I run this, this is the only employee whose name matches with the pattern here
>
> **[6:01](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=361)** and who belongs to department number 30. So that has been fetched for us. Now OR works in a different way. So even if one of these conditions satisfies, we will get a row fetched. So let's see how the output changes when we use OR in between. As we can see, we have multiple rows and not just the single row that we got in the first SELECT statement because even if one of these satisfies, we get some output. So here, there are two employees whose names start with S and there are employees whose deptno is 30. This one has been fetched because the name pattern matches. So that's the reason why we have that record fetched. NOT checks for the department not to be in this set of values. So when I run this, it checks for any employees who are not in this specific departments that is 30 or 40. So since it belongs to department 70, we got that record. So this is the order of precedence for all the operators.
>
> **[7:36](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=456)** The order of precedence can be changed by using parenthesis. Let's look at some examples. So here, when I run this particular SELECT statement, it first checks for AND because AND has a higher order of precedence than OR. So it checks for these two conditions first and then looks for this deptno 30. So it checks for deptno 40, and also checks if the salaries are greater than 2,500. So those rows will be fetched, and we will also have employees who belong to department 30 as well. So let's see. Here, as we can see, the only employee who has a salary greater than 2,500 in department 40 is KING. So that row has been fetched. And then it also looked for deptno 30 and fetched all the employees who belong to that particular department. So first, these two are considered, and then the OR. Now, if I want to do it in a slightly different way, I have to put the department numbers in parenthesis if I want to consider the departments first and then check for the salaries.
>
> **[9:11](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=551)** So it first checks for all employees who belong to either deptno 30 or deptno 40, and then it looks for the salaries if they are greater than 2,500. So now when I run this, it gets all the employees whose salaries are greater than 2,500 and those who belong to departments 40 and 30. So that's how we can change the order of precedence. We can sort data in ascending or descending order. If we do not specify the order, then the default would be taken as ascending. Let's look at an example here. Let's go to ORDERBY. So here, I'm fetching all the employees who belong to deptno 30, and I'm going to sort them by salary. And since I haven't specified in which order I want, it's going to take it as ascending by default. So when I run this, here, these are all the employees who belong to deptno 30 and their salaries are sorted from minimum to maximum in ascending order.
>
> **[10:37](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=637)** And we can also sort by two different columns as well. So when we do that, it first sorts by deptno in ascending order because we haven't specified anything here, and then it looks for the salaries in descending order. So let's look at the output to understand this better. So here, if we see, it first sorted by the deptno in ascending order, that is starting from 30 all the way up to 70. And then, in each department, it sorted the salaries in descending order, that is from the highest to the lowest. That is if we look at department 30, it started from 3,000 all the way to 800. And then it moves to department 40, 5,000 to 1,100. And then department 70, which has only one employee with salary 3,000. This is how we can sort by multiple columns as well. So this is about the WHERE condition, the types of conditions, order of precedence, and the ORDER BY clause.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3)
> **Env Vars:** where (8), select (4), king (3), sql (3), between (2)
> **SQL:** where (8), select (4), order by (1)
> **UI Navigation:** go to (5), navigate to (3), click on (2)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** emp_tab (1)
> **Prerequisites:** before we start (1)

#### [Types of functions, part 1](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=0)** - Now let's learn about the types of functions. There are two types of functions that can be applied on rows in a table, single row and multiple row functions. Single row functions work with one row at a time and returns one result for every row. Multiple row functions work with a group of rows at a time and return one result for every group. Let's take a look at different single row functions. First one is number functions. Number functions perform arithmatic operations on the data. Let's look at an example for this. So let's go to number functions, SELECT ROUND(92.427,2), this is how I've given it. This rounds to 2 decimal places because I've given 2 as the second argument. Since 7 is greater than 5, it rounds off the decimal places to 92.43. So let me run this. So it rounds off to 92.43 and if this is a value lower than 5, suppose it is 92.423 then when it rounds off, it would just be 92.42 because the last value is less than 5. The next one is conditional functions. Now let's take a look at how case function works. Let's go to conditional functions
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=95)** and here, we are trying to change the salary based on the job of an employee. So here what we did is, select and we are trying to [Fetch](../../Skills/Web%20Development/Fetch.md) name, job, salary and the fourth column would be revised salary because that is being given as the alias name here and what content would be there in that column is we are trying to check for the job of the employee that is whether he's a manager, analyst, clerk or something else and then calculating the revised salary for every employee and displaying that in the fourth column. So let me run this. So here, we have all the employees and the revised salaries for all of them based on their job. So these were their original salaries and now after making these changes, these are the revised salaries based on their job. Next, let's look at the character functions. UPPER converts the entire string to upper case, LOWER converts everything to lower case and SUBSTR extracts a string from a starting position to fetch a certain number of characters from that character value.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=188)** Let's look at an example for that one. So let's go to character functions and here UPPER will convert everything to upper case and LOWER would convert everything to lower case and then here, in SUBSTR, starting from the sixth position, I want to extract 10 characters from this character value. So it extracts 'world12345' from this statement.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=229)** So when I run this, it gives us 'world12345'. LENGTH is used to calculate the length of the character value. Since there are 10 characters, our output would be 10. INSTR is used to search for an expression and identify its position in the actual character value. So here it looks for the first occurrence of E and gets that as the output for us. So since it's in the second place, our output would be 2. TRIM trims 'World' from the 'Hello World' string, so what's left is 'Hello', so that'll be our output. REPLACE replaces 'Hello' with 'Good morning', so this is our character value and this is the one which we want to replace and this is the new string that we want to replace it with. So instead of 'Hello', it's going to replace it with 'Good morning' in our character value. So it changes to 'Good morning World', that would be our output. So when I run this, it gives us 'Good morning World'.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (2)
> **Env Vars:** upper (2), lower (2), substr (2), select (1), round (1)
> **Versions:** 92.43 (2), 92.427 (1), 92.423 (1), 92.42 (1)
> **UI Navigation:** go to (3)
> **SQL:** select (1)
> **Definitions:** is a  (1)
> **Speakers:** - now (1)

#### [Types of functions, part 2](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=0)** - [Instructor] Now that we've learned about single row functions, let's take a look at GROUP BY clause and GROUP functions. What are multiple row functions? These are also called group functions. These functions work on a group of rows and give one output for every group. The columns in the SELECT statement that are not used in the group function must be in the GROUP BY clause. These are the various multiple row functions. SUM returns the sum of all n values. AVG returns the average. MAX and MIN return maximum and minium values within a group of values pulled by an expression. COUNT returns the count of number of rows that we need. VARIANCE and STDDEV functions are used to calculate the variance and standard deviation for a set of values. Let's look at some examples. Let's head to chapter one, video four, GroupFunctions. So this fetches the SUM of all salaries in emp_tab table.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=73)** This fetches the average of all salaries. Now, this gets us the lowest and highest salaries from emp_tab where department number is 30. So it's going to check for the highest and lowest salaries of employees belonging to department number 30. So that's the lowest and the highest salaries of employees belonging to department number 30.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=113)** Now, when I give MIN of hiredate and MAX of hiredate, it's going to get us the oldest and the most recently joined employees hire dates in emp_tab table. So this is the hiredate of the employee who's been there the longest tenure and this gives us the employee who's joined most recently.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=142)** Then this gives us the first and last names in the list if the names are sorted in alphabetical order. So the MIN gives us the first name and MAX gives us the last names if they're sorted in alphabetical order. So when I run this, Adams is the first name in the list because it begins with A. And the last name in the list is Smith as there are no other names after Smith.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=183)** COUNT of star counts the number of rows that are there in the table. There are eight rows in the table. So this is going to count the number of employees reporting to manager 7330 since we have given the WHERE condition as well. So we can give the column name in the COUNT function as well. So there are three employees reporting to manager 7003.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=224)** The DISTINCT keyword is to eliminate any duplicate values. So if there are any duplicate employee number values, then those will be eliminated and it counts the distinct values in emp_tab table. So there are eight distinct employee numbers. So that's what's being fetched. So these are a few examples of our group functions. The GROUP BY clause is used to group multiple rows. So instead of using the entire table, sometimes we need small groups of rows to perform operations individually. So we can use the GROUP BY clause to do so. We can only use column names and not alias names in the GROUP BY clause. We have to keep in mind that any columns in the SELECT statement that are not used in the group functions must be given in the GROUP BY clause. Now, HAVING clause is used to filter the groups' results. This is because we cannot restrict groups by using the WHERE condition the way we do for a regular SELECT statement. So we have to give the group functions in the HAVING clause. Now, this is the syntax for the GROUP BY clause. The GROUP BY clause comes after the WHERE condition and before the ORDER BY clause. First, we write the SELECT columns from table name.
>
> **[5:19](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=319)** Then the WHERE condition. Then GROUP BY, followed by HAVING and group_conditions if needed. And finally, ORDER BY to sort the filter data. This order is always the same for any SELECT statement. Everything that is enclosed in square brackets is optional and used only as needed. So now let's take a look at some examples for understanding this better. So we just now saw how to find the employee with highest and lowest salaries in every department. Now I want to find out the employee with the highest salary under every manager. To do this, we need to group rows in the table by using GROUP BY clause. And we use the GROUP BY clause with the manager. So when I run this, it's going to give me the highest salaries under every manager and then it is also sorting these salaries in descending order because I have given ORDER BY MAX salary in descending order. So that's the reason why the salaries are sorted in descending order. Now as I mentioned earlier, we cannot give the group functions in a WHERE condition,
>
> **[6:54](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=414)** like we did over here. If I give a group function like this, it's going to throw us an error. So let me just run this. It says that we cannot use the MAX function in the WHERE condition. So instead of giving this condition here in the WHERE condition, we have something called HAVING clause, which we can use to give these group functions conditions. So first of all, let's try to [Fetch](../../Skills/Web%20Development/Fetch.md) the highest salary in every department. So for that, I give SELECT department number, MAX salary from emp_tab, GROUP BY department number because I want the highest salary in every department. So that's the reason why I'm grouping them by departments and getting the maximum salary in every department. So when I run this, it's getting the department number and the maximum salary in each department. So now if I want to get the highest salary in every department, and then I also want to check if that MAX salary is greater than 3,000. So I also have a group function condition over here. So I need to put that group function condition in the HAVING clause and not in the WHERE condition. So I give SELECT department number, maximum salary
>
> **[8:30](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=510)** from emp_tab GROUP BY department number, which is exactly the same as we did earlier but since I have a condition to check if the maximum salary is greater than 3,000, I give the HAVING clause and put the condition in there. And I run this. So there is only one department, which has a maximum salary greater than 3,000. So this is about GROUP BY and group functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** group (15), where (8), select (7), max (7), having (6)
> **SQL:** group by (14), where (8), select (7), having (6), order by (3)
> **Code Identifiers:** emp_tab (6), group_conditions (1)
> **CLI Commands:** find (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Using multiple tables](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=0)** - [Instructor] Now let's learn about the different kinds of joins and subqueries. Joins are used to [Fetch](../../Skills/Web%20Development/Fetch.md) data from one or more tables at a time. Based on the data we need, joins are categorized into four types: inner, right, left and full outer join. This is the syntax for using joins. Now let's take a look at each of these. Inner join retrieves all rows matching in both tables. So here in this example, it's going to get the matching rows from country_tab and states_tab. Let's look at an example for this. Let's go to chapter one, video five. Joins. So this is the join. I'm using the INNER JOIN first. So here, I give SELECT * FROM country_tab c. C is the alias name that I'm giving for the table name because I don't want to give the table name every single time I'm using it in any condition because that's going to make it very lengthy. So I just want to use the alias name instead of the table name. So I give that. So country_name, followed by the alias name for the table. And then the join name and the second table. And its alias name. ON keyword, followed by the join condition. So here we are comparing the country_ids from country_tab and states_tab. So let's run these three to understand the join output better.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=98)** So this is the country_tab and this is the states_tab. So here if we see, we are trying to retrieve only the matching rows from country_tab and states_tab. So in country_tab, we have three country_ids but we have matching states only for one and two but not three. So Canada does not have any associated states over here. So that would be excluded from our output. And similarly, in the states_tab. Texas, California and Baja California have associated country_ids while Kerala does not. So Kerala also does not have a matching value. So that's the reason why Kerala also would be excluded. So in our output, we will have USA and Mexico. And we will have all the states, that is Texas, California and Baja California. And Canada and Kerala have been excluded. This is because it's the inner join. Now let's go take a look at the other outer joins. Now, [SQL](../../Skills/Data%20Science/SQL.md) supports three kinds of outer joins, that is left, right and full outer joins. But SQLite supports only left join, so we will take a look at that first, and then I'm going to explain how the right and full outer join would work like. So if we take a look at the left outer join, it gets all the rows from left table
>
> **[3:12](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=192)** and only the matching rows from the right table. So if we look at this example here, I'm using the left outer join and I run this. So it's going to get all the rows from the left table and only the matching rows from the right table. The reason I say this is the left table is because when I put it like this, the country_tab is to the left side so that's the left table, and states_tab is to the right, so that's the right table. I just indented it like this for readability purpose. So here we retrieve all the rows from the left table. So in our output, we would have USA, Mexico and Canada. And only the matching rows from the right table. That is Texas, California and Baja California. And Kerala is excluded because it does not have an associated country_id. And since Canada does not have any state associated to it, those columns are set to null. Now if I give RIGHT JOIN here, then it would change to something like this. We'll get only the matching rows from the left table and all the rows from the right table. So we will have USA and Mexico, and we'll have all the states from the states_tab.
>
> **[4:47](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=287)** Only Canada will be excluded because that's from the left table. And that doesn't have any matching rows here. And if I'm using the OUTER JOIN, it fetches all the rows from both the tables irrespective of whether they have matching rows or not. So we will have USA, Mexico, Canada and all the four states. When we write a SELECT statement in a clause of another SELECT statement, it is known as a subquery. It's also called inner SELECT or nested SELECT. The inner SELECT statement will be executed first. Then its output is taken as input for the outer SELECT to retrieve data. Subqueries must be enclosed in parenthesis. Let's look at an example. So in the first example, this is my outer SELECT. And the one in the parenthesis here is my subquery. So this gets executed first. So it gets the department number for employee 7001. And then it fetches all the employees who belong to that particular department number. So when I run this, since 7001 belongs to department 40, it has fetched all the employees belonging to that particular department. So this is another example where we are using the same tables in both the outer and the inner join.
>
> **[6:20](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=380)** So here we are getting the country_id for California and then we are trying to fetch all the states associated with that particular country_id. So when I run this, these are the two states that are associated with this country. So since the inner query gets executed first, when we get the country_id for California, it returns an output of one. And then the outer query gets executed. So we get the states associated with that particular country_id. We can also use different tables in the outer and inner queries. Here I'm using the country_tab and inside, I'm using states_tab. So what I do is I get the country_id for California from the states_tab, which is one. And then I am running the outer SELECT statement, that is SELECT * FROM country_tab. So it's going to fetch the country details for this particular country_id. So depending on our requirement, we can use different kinds of subqueries. So when I run this. It's going to get me the country details from the country_tab based on the country_id of California. There are two types of subqueries: single row and multiple row. Single row subqueries return single rows and we use single row comparison operators,
>
> **[7:54](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=474)** like equals to, not equals to, less than, less than, equals to, greater than, greater than, equals to. We can have multiple single row subqueries. That is inner queries, unlike what we have seen in our examples. As we have seen, inner and outer queries can fetch data from different tables. Now, when it comes to multiple row subqueries, we can use operators like IN, ANY, and ALL. And we can also use group functions in subqueries. So let's look at some examples for these. So here's how we can use a group function. In the inner query, I'm using MAX function. So it's going to fetch the maximum salary from the emp_tab. And then it's going to populate the employee details for that particular salary. So when I run this, this is the employee with the highest salary. So that's what's going to be fetched because it's going to get the max salary from emp_tab, that is 5,000 and then it's going to run this outer SELECT statement. Now, this is how we can use IN, ANY or ALL. In this example, we are taking IN. So here, first the inner SELECT statement gets executed. So here we get the salaries of all employees who belong to department 30. So when this gets executed, we get these salaries and then, once we have the list of salaries,
>
> **[9:29](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=569)** we are going to run the SELECT statement, that is the outer SELECT statement. So it's going to fetch all the employee details whose salaries are in this set of values. So when I run this, these are the employees whose salaries are in this set of values. So this is all about joins and subqueries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (6), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Code Identifiers:** country_tab (10), states_tab (9), country_id (8), country_ids (3), emp_tab (2)
> **Env Vars:** select (14), usa (4), join (3), inner (1), sql (1)
> **SQL:** select (14), join (2), inner join (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 2. New Tables and Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Create new tables](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=0)** - [Instructor] Now that we have learned how to [Fetch](../../Skills/Web%20Development/Fetch.md) and filter data from existing tables, let's learn how to create new tables. For this, we use the create statement. It is a DDL statement, that is, DDL stands for Data Definition Language, and all DDL statements are auto commit, which means that once they are executed the changes will be permanent and cannot be reverted back. This is the syntax for the create statement. We can check if the table is created by giving describe table name or desc table name. Tables which do not belong to this user are not in this user's schema. If we are creating a table in a different schema, we will need to specify the schema name in the create statement. We can also create a table using a sub query. We use this method when we want to create a table by using another table's data. But this feature is available in a few [Databases](../../Skills/Software%20Development/Databases.md) like Oracle. If column specifications are given, then number of column specifications and number of columns in the sub query must be equal. When using sub query method, column definition can contain only column names and default values, but no constraints. Now, let's understand what are constraints. Constraints are like rules to follow at table level or column level. We can define these constraints
>
> **[1:34](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=94)** at the time of creation of the table, or after the table has been created. Constraints that are defined must be satisfied to completely execute the statements. Otherwise, the statements will not be executed and it throws some errors. We have to name the constraints for easy identification. Now, let's take a look at some of the constraints. Primary key is a unique and not null value for every row. This helps identify every row in the table. Not null constrained, as the name implies, specifies that a column cannot contain a null value. Let's look at an example. Let's go to chapter two, video one. So here, we are giving create table countries and then we are giving all the column names. Here, if we observe carefully, the not null constraint is given with the column specification, as it is a column level constraint. If we see here, we are giving it along with the column. So, we gave it the column name as country code, the data type, followed by the constraint, the constraint name, and what kind of constraint it is. So, we are defining it near the column specification. So, it is a column level constraint. The primary constraint is a table level constraint,
>
> **[3:09](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=189)** as it is specified after all the column specifications. If we notice carefully here in the code, this constraint, which is the primary key constraint, is given all the way after the column specifications are done, and not like the not null constraint, as we give with the column specification. So, the primary key constraint is a table level constraint. The third constraint is foreign key or referential integrity constraint. This assigns one or more columns as foreign key and establishes a connection with the primary key of the same or different table. Foreign key values must match with a value in the parent table or must be null. Let's look at an example for the foreign key. So here, for this table, the primary key is the state ID. The foreign key is defined on country ID. If you take a look over here, the primary key for states table is state ID, and the foreign key here is imposed on the country ID.
>
> **[4:37](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=277)** So, this establishes a connection between the country ID from this table and the country ID from the countries table. So if we see, it is referencing the country ID from countries table. So, this means that we can insert a country ID in the states table only if that country ID is in the countries table. Otherwise, it throws an error. Similarly, we cannot delete a country ID from the country table while that country ID is mapped with some states in the states table. It again throws an error, since there are some dependencies on that country ID in the states table. So, we call countries table as the parent table and states table as the child table. So, this is how primary key and foreign key work hand in hand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Definitions:** is a  (6), means that (2), stands for (1)
> **Env Vars:** ddl (3)
> **Documentation:** specification (3)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Change table structure](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=0)** - Let's learn how to change the table structure by adding or modifying columns, renaming them, defining a default value for the new column, dropping columns from a table. We can do this by using the ALTER statement. ALTER statement is a DDL statement like "create" so it auto commits. This is the syntax for ALTER statement to add new columns. If you think that there is a need for a new column at a later point of time then we can use this ALTER statement to do so. Let's try to add a new column to "states" table. Let's go to chapter two, video two. Here, ALTER TABLE states, that's the table name, ADD COLUMN, this is the new column that I want to add, and the data type for it. Before running this I would like to show you how it looks like in the database first. Let's go to "states" table. And if you take a look at the columns, we do not have test column present. So now let's try to add this new column there. So we have that column added. Let's go to the database again, go to "states" table. And if we scroll all the way to the right, we can see our new column. This is how we can add a new column.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=95)** This is the syntax to rename a column name. This is to rename a table name and this one is to drop a column. Let's look at some examples for these in Codespace. To rename the table, I give something like this. ALTER TABLE, table name, RENAME TO, and this is the new table name, that is "new states." So now when I run this, so the table name has changed. Let's go to the database and if we take a look over here, we can see that the table name has changed to "new states." Let's go back to our [SQL](../../Skills/Data%20Science/SQL.md) file. Now, if I want to rename the column name, I have to ALTER TABLE, and since we have modified the table name to "new states" I give that name, RENAME COLUMN. This is the column name which I want to modify, TO, and this is the new column name, that is "testing." So we have to see if the column name has renamed to "testing" or not. So first, let's run this. Let's go to the database. And under "new states,"
>
> **[3:13](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=193)** the column name has been renamed to "testing." The drop feature is not supported in SQLite but we can use the syntax to use with other [Databases](../../Skills/Software%20Development/Databases.md). So this is the syntax, it's ALTER TABLE, table name, DROP, and the column name. So this is how it works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** alter (8), table (4), column (2), rename (2), ddl (1)
> **UI Navigation:** go to (6)
> **SQL:** alter table (4)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Speakers:** - let (1)

#### [Add new rows to a table](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=0)** - [Instructor] Now that we know how to create tables, let's learn how to add new rows into the table. We use the INSERT statement to do that. There are three approaches to insert rows into a table. The first one is to insert one row at a time using the INSERT statement. The second approach is by using a script. So we can insert multiple rows at a time by using ampersand substitution in the INSERT statement to prompt for runtime values. We'll understand this a little better in the next slides. The third approach is to copy rows from an existing table to a new table. This way, we can copy multiple rows at a time by using a subquery. Now let's take a look at each approach. The syntax to insert one row at a time is INSERT INTO table_name, followed by the columns names, VALUES keyword, followed by the values corresponding to the columns that we list down here. So now let's take a look at a few examples for this. Let's head to the folder chapter two, video three, and here let's take a look at the table first. If we observe, these are the column names, department number, department name, manager ID and location_id. So now when I try to insert a row into the table, if I'm not changing the order of the columns,
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=95)** and leaving them as is in the table, then we don't have to specify the column names explicitly here in the INSERT statement. I can just give the values and it is intelligent enough to identify that these values belong to those columns. So when I run this, the row has been inserted. And now when I run the SELECT statement, we can see that row has been inserted over here. Now in this INSERT statement, I'm changing the default order of the column names. So after department number, instead of giving department name, I have put location_id. So I have to explicitly mention the column names for it to understand that these are the values for these column names. And I'm giving the values also corresponding to this columns. So now when I run this, it's been inserted. Let's look at the table. The new row has been inserted. Now, the third example is to add null values. So when I run this,
>
> **[3:11](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=191)** the new row has been inserted. And here we are trying to insert some NULL values in some of the columns. So when I run this, the new row has been inserted with some null values over here. And also remember that null value is not the same as a blank space. So when there is no value specified for a column, it is taken as a null value as well. Now this is the syntax for inserting multiple rows at a time using a script. So when I run this particular statement, it'll ask us to enter values for these columns at runtime. So in the second approach, we are trying to insert multiple rows at a time by using a script. So let's take a look at the syntax. INSERT INTO table_name VALUES, followed by the column names. But if you observe, we have given the ampersand symbol before the column name. So what this implies is it's going to prompt us to enter values for these column names at runtime. So all we need to do is give the values at runtime, and it takes multiple rows, values at a time and it inserts those into the table.
>
> **[4:48](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=288)** So this is going to save us a lot of time because we don't have to type the INSERT statement over and over again. Instead, we run the same INSERT statement and just type in the values every single time. And we should be able to add more rows in the same amount of time. The other way to do so is by creating a script file. A script file is nothing but a collection of [SQL](../../Skills/Data%20Science/SQL.md) statements put together and stored in a file. And that file is executed whenever it's needed. The third approach is to copy multiple rows from another table by using a subquery. When we are using a subquery in the INSERT statement, we do not have to give VALUES keyword. Number of columns in the subquery must be equal to the number of columns in the INSERT. For example, if we want to create an exact replica of an existing table, we just give INSERT INTO new_table SELECT * FROM old_table_name and WHERE condition. The WHERE condition is optional. If we do not give the WHERE condition, all rows from the old table are copied to the new table. But if a condition is specified, only those rows which satisfy that criteria will be copied to the new table. INSERT statement is a [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) Language statement, also known as a DML statement. We need to commit the INSERT statement changes
>
> **[6:23](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=383)** to make them permanent. So this is about the INSERT statement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1)
> **Env Vars:** insert (15), into (3), values (3), where (3), select (2)
> **SQL:** insert into (3), where (3), select (2)
> **Code Identifiers:** table_name (2), location_id (2), new_table (1), old_table_name (1)
> **Definitions:** is a  (1), known as (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)

#### [Delete rows in a table](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=0)** - [Instructor] In this video, we will learn about the DELETE statement. It is used to delete rows from a table. There are two approaches to delete rows. One is a simple WHERE condition. Just like other DML statements, if we give the WHERE condition, it's going to delete only specific rows which satisfy that criteria. Otherwise, all the rows in the tables will be deleted. So this is how we will give it, DELETE FROM table_name WHERE condition. The second approach is by using subqueries. When we want to delete rows based on another table, we use subqueries. Like, DELETE FROM table_name WHERE column name equals a subquery in the parenthesis. It need not be an equals to sign. It can be any other operators that we have learned earlier. So let's take a look at few examples for this. Let's go to chapter 02, video 04, Delete.[SQL](../../Skills/Data%20Science/SQL.md). Click here and run the SELECT statement. So this is our table emp_tab. Now here, I'm trying to delete the employee with employee number 7,007. So it's executed. Now let's take a look at emp_tab table. So that row has been deleted. Now, to understand the subqueries, let's take a look at an example. So here, SELECT * FROM old_emp_tab.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=94)** This is another table which is an exact replica of emp_tab table. So it has all these row. Now I'm using the employee_tab table to get the salary which is less than thousand. And then I want to delete that particular row from old_emp_tab, and not from emp_tab. I'm going to run this. So there's only one record and that record has been deleted. There was only one salary which was less than thousand. That was employee 7,006. So that row has been deleted now. If we try to delete a row which contains a primary key that is being used as a foreign key in another table, it's going to return an integrity constraint error. It does not allow us to delete departments if some employees are already assigned to that department number, as there are some dependencies for that department number in other tables. So that is about integrity constraint error. DELETE statement is also a DML statement, so it needs to be committed explicitly, and it does not auto commit by itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** delete (4), where (4), dml (2), select (2)
> **Code Identifiers:** emp_tab (4), table_name (2), old_emp_tab (2), employee_tab (1)
> **SQL:** where (4), delete from (2), select (2)
> **API Endpoints:** delete  (4)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** delete.sql (1)
> **UI Navigation:** go to (1)

#### [Commit and rollback](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=0)** - [Instructor] Now we learn about Transaction Control Language or also called as TCL. There are three TCL statements; that is Commit, Rollback, and Savepoint. A transaction is a set of statements which begin when the DML statement is executed and ends when Commit or Rollback is issued, or when a DDL or a DCL statement is executed, auto commit will occur, or if the user exits the system or the system crashes. So these are the possible scenarios when a transaction ends. Now let's learn about the first TCL statement, that is Commit. Commit ends the current transaction and saves all the data changes, thus, making them permanent. For DML statements, we need to give Commit in order to save the changes, unlike DDL and DCL statements, which are auto committed. Auto commit also occurs when the user exits the system normally without explicitly executing a Commit statement. Now let's compare the data before and after Commit. Before Commit, the data changes can be reverted back to the previous state. After Commit, all data changes are made permanent and cannot be reverted back. Before Commit, the current user can view results by using the SELECT statements, but others cannot view these changes made by the user.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=94)** After Commit, all the users can view the changes made irrespective of who makes the changes. Before Commit, affected rows are logged, which does not allow other users to make any changes to the affected rows. After Commit, locks on affected rows are released and those rows are available to other users to make any other changes. The next one is Rollback and Savepoint. They both work hand in hand. Rollback discards all data changes and ends the current transaction. Savepoint creates a marker point within a transaction. By using Commit and Rollback, we can preview the data changes before making them permanent. Auto rollback occurs when there is a system failure or abnormal termination of the system. By using Commit and Rollback, we can preview data changes before making them permanent. Now as we can see in this diagram, first I issued a Commit to save all the pending changes. Now I start a new transaction. I give a DELETE statement followed by Savepoint A. Then I give a DML statement and then give Savepoint B as a marker at that point. After that, I give a few other DML statements. If I just give Rollback, it'll end this current transaction
>
> **[3:07](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=187)** and discard all the changes. If I give Rollback to Savepoint A, then it'll rollback current transaction to the Savepoint. Thereby discarding all changes made after Savepoint A. Similarly, if I give Savepoint B, it'll discard all changes made after Savepoint B. Now here is a comparison of the data before and after Rollback. Before Rollback, changes made cannot be reverted. After Rollback, data changes can be discarded. Before Rollback, the affected rows are logged so that other users cannot make any changes to data within the affected rows. After Rollback, all locks on affected rows are released. Before Rollback, the current user can review results on data changes by using SELECT statements. Other users cannot view the results of the data changes made by this user. After Commit, since the data changes are discarded, nobody can see those changes in their database.

> [!info]- Semantic Content
>
> **Env Vars:** dml (4), tcl (3), ddl (2), dcl (2), select (2)
> **CLI Commands:** make (3)
> **Definitions:** is a  (3)
> **SQL:** select (2)
> **API Endpoints:** delete  (1)
> **Speakers:** - [instructor] (1)


### 3. Modifying Existing Tables

[↑ Back to Table of Contents](#table-of-contents)

#### [Modify rows and columns in tables](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=0)** - [Instructor] In this video, we will learn about UPDATE statement. It's a DML statement. We use this to modify data in a table. Now, this is the syntax for UPDATE statement. UPDATE table_name SET column_name equals to some value. And if you're trying to update multiple columns, then we give column names and assign some values to them, separated by commas. And then the WHERE condition. Just like other DML statements, if we specify the WHERE condition, then it updates only those rows that satisfy that criteria. If we do not give the WHERE condition, it updates all the rows in that particular table. So now let's try to modify one row in emp_tab table. We are trying to update emp_tab table by setting the salary to 8,000 for emp number 7001. First, let's take a look at the table. I give SELECT * FROM emp_tab.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=72)** Run this. So if you take a look at the first record, that is emp number 7001, he has a salary of 5,000. Now I want to update that salary to 8,000. So I run this. And when I take a look at the table now, his salary has updated to 8,000. Now when we are updating only one row, it's always important to identify the row with the column value that is unique for that specific row. In this case, we are using the emp number as it is unique for every employee. Instead of employee number, if we are trying to find by the name, it might update multiple rows at a time because names cannot be unique for all employees. There might be more people with the same name. So it is very important that we identify the unique value for every row. We can modify multiple columns at a time using subqueries in the SET clause. First, let's take a look at the emp_tab table. So now this is our emp_tab table. And if we observe the first two rows, we will be modifying Clark's manager and salary to King's manager and salary.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=168)** So here, if we take a look at the UPDATE statement, I'm trying to modify multiple columns in emp_tab table for employee number 7002. That is for Clark. And I want to modify them to the manager and salary of employee number 7001, that is King's manager and salary. So when I run this UPDATE statement, and we go to the table, so now when we take a look at Clark's manager, it's set to the same value as King's manager. And the salary is also set to the same as King's salary. So now we have modified Clark's manager and salary. We can modify rows in same tables or another table as well by using these subqueries. So here, in this example that we've already seen, we are using the same table here, as well as in the subqueries. In the next example, we'll be using two tables, that is old_emp_tab table and emp_tab tables. So first, let's take a look at our old_emp_tab table. SELECT * FROM old_emp_tab table. And I run this.
>
> **[4:26](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=266)** So if we take a look at the first row, King belongs to department number 10. It hasn't been updated for quite some time. So now I would like to update it to the latest department to which he is assigned, which is in emp_tab table. So what I do is I give something like this. UPDATE old_emp_tab table SET department number to. We are fetching the department number for King from the new table and we are assigning it to the department number in the old table. So now when I run this, and now let's take a look at our old_emp_tab table. For King, the department number is now set to 40, which is the latest department to which he belongs currently. Now, if we try to modify a row to a value that does not exist in the parent table, it returns integrity constraint error. For example, if I'm trying to update emp_tab table and I want to set the department number to 500 where the department number is 10, it throws an error. This happens because department number 500 is not there in the ept_tab table,
>
> **[6:02](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=362)** which is the parent table for department in the emp_tab. This is about the UPDATE statement.

> [!info]- Semantic Content
>
> **Code Identifiers:** emp_tab (10), old_emp_tab (5), table_name (1), column_name (1), ept_tab (1)
> **Env Vars:** update (7), set (3), where (3), dml (2), select (2)
> **SQL:** update (7), where (3), select (2)
> **Analogies:** just like (1), for example (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Merge rows in a table](https://www.linkedin.com/learning/hands-on-introduction-sql/merge-rows-in-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/merge-rows-in-a-table?u=76281980&t=0)** - [Instructor] In this video, we will be learning about the last DML statement. That is merge. It updates or inserts data in tables based on a condition. If the row is already there in the table, it updates it, otherwise it inserts a new row in the table. Instead of giving loops, we just use one merge statement. Hence, it improves performance. It's useful in data warehouse systems. As the data comes from various sources and there is a possibility for duplicate records to be inserted into the table. To prevent that, we use the merge statement. This is the syntax. This table name is the table where all the rows must be inserted or updated. This is the source from where we get the data to be inserted or updated. ON clause has the condition which determines whether to insert or update. When matched or when not matched clause instructs the server what to do when the condition is matched or not matched. So this is how the merge works.

> [!info]- Semantic Content
>
> **Env Vars:** dml (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Drop or truncate a table](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=0)** - [Instructor] Let's learn about the three DDL statements that is drop, truncate, and rename. The first one is DROP statement. DROP statement will delete everything, the data and the structure of the table. It's auto committed, so changes made will be permanent. A person should have drop any table or he should be the creator of the table to drop the table. Now let's try one of these examples. Here, I want to drop the table dept_copy_tab table. First, let's take a look at the table in our database. So we have a table, empty table, which is dept_copy_tab. It does not have any rows. So now, I try to drop this particular table. Now let's take a look at the database. If we see, dept_copy_tab has been dropped. The next one is TRUNCATE statement. It'll delete all the rows from the table and it'll also release the storage space that was used by the table. You might say that we can just use the DELETE statement to delete the rows. Why use TRUNCATE? TRUNCATE is a DDL statement
>
> **[1:33](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=93)** and the changes made are permanent, and the previous state cannot be recovered. But when we use DELETE, we can still revert back the changes by using rollback. The other difference between TRUNCATE and DELETE is that TRUNCATE will release the storage space that was used by the table, but DELETE does not do so. It just deletes all the rows from the table.

> [!info]- Semantic Content
>
> **Env Vars:** truncate (5), delete (4), ddl (2), drop (2)
> **Code Identifiers:** dept_copy_tab (3)
> **API Endpoints:** delete  (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Rename a table](https://www.linkedin.com/learning/hands-on-introduction-sql/rename-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/rename-a-table?u=76281980&t=0)** - [Instructor] We will be learning about the last DDL statement that is rename statement. Using this, we can change the name of a table, view, synonym, or sequence, but to do so, we should be the owner of the object. So this is the syntax for rename. It says: RENAME table1 TO table2. So this is the name, original name of the table, which I want to change to this one. So this is going to be syntax for the rename statement.

> [!info]- Semantic Content
>
> **Env Vars:** ddl (1), rename (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/hands-on-introduction-sql/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/next-steps?u=76281980&t=0)** - [Instructor] Thank you so much for joining me for this course. I hope you enjoyed learning about [SQL](../../Skills/Data%20Science/SQL.md) statements and how they can be used to create, edit and retrieve information from [Databases](../../Skills/Software%20Development/Databases.md). If you wish to continue your database journey, I suggest you learn a bit more about database objects other than tables, such as views, synonyms, index, et cetera. You could also dive deep and learn more about constraints. I recommend checking out some books like, "Getting Started with SQL", by Thomas Neild and "SQL Practice Problems", by Sylvia Moestl Vasilik, which helps you practice more. Thanks again and I hope you have a wonderful day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** sql (3)
> **Analogies:** such as (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)


## Resources

- [GitHub Repository](https://github.com/LinkedInLearning/hands-on-sql-3086685/codespaces)

## Skills Covered

- SQL

## Path Context

### In [SQL Hands-On Practice](../../Paths/Data%20Science/Learning%20Paths/SQL%20Hands-On%20Practice.md)
**1 of 9** | [SQL Practice- Basic Queries](SQL%20Practice-%20Basic%20Queries.md) →

## Appears In

- [SQL Hands-On Practice](../../Paths/Data%20Science/Learning%20Paths/SQL%20Hands-On%20Practice.md)

## Related Courses

_Courses sharing skills:_

- [Advanced SQL Project- Design and Manage a Database](Advanced%20SQL%20Project-%20Design%20and%20Manage%20a%20Database.md) — SQL
- [Practical Database Design- Implementing Responsible Data Solutions with SQL Querying](Practical%20Database%20Design-%20Implementing%20Responsible%20Data%20Solutions%20with%20SQL%20Querying.md) — SQL
- [SQL Server Fundamentals- Master Basic Query Techniques](SQL%20Server%20Fundamentals-%20Master%20Basic%20Query%20Techniques.md) — SQL
- [Advanced SQL for Data Science- Time Series](Advanced%20SQL%20for%20Data%20Science-%20Time%20Series.md) — SQL
- [Intermediate SQL- Data Reporting and Analysis](Intermediate%20SQL-%20Data%20Reporting%20and%20Analysis.md) — SQL

---

[↑ Back to top](#)