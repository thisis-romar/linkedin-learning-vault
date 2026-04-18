---
type: course
slug: hands-on-introduction-sql
url: "https://www.linkedin.com/learning/hands-on-introduction-sql"
level: Intermediate
updated: 4/19/2024
learners: 102153
skills:
  - SQL
exercise_files: false
github: "https://github.com/LinkedInLearning/hands-on-sql-3086685/codespaces"
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/sql
status: not-started
created: 2026-04-17
---

# Hands On Introduction Sql

> Join instructor Deepa Maddala as she uses hands-on lessons to teach you the tools, techniques, and know-how that you need to start using SQL from day one. Deepa guides you through using the Select statement to fetch and filter data, creating and adding to tables and data, modifying existing tables, and what to use in different scenarios. She includes simple examples with each topic she covers.The 

> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql) | Intermediate | 102K learners

## Resources

- [GitHub Repository](https://github.com/LinkedInLearning/hands-on-sql-3086685/codespaces)

## Skills Covered

- SQL

## Table of Contents

### Introduction

#### Introduction to SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql/introduction-to-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/introduction-to-sql?u=76281980&t=0)** - [Deepa] You've probably heard of databases since you were in grade school, and maybe you already know databases are used to store data.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-introduction-sql/introduction-to-sql?u=76281980&t=9)** But how does the data get there?
>
> **[0:11](https://www.linkedin.com/learning/hands-on-introduction-sql/introduction-to-sql?u=76281980&t=11)** What can you do with the data that's stored there?
>
> **[0:14](https://www.linkedin.com/learning/hands-on-introduction-sql/introduction-to-sql?u=76281980&t=14)** If you don't know the answers to those questions but want to learn, that's where I can help you.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-introduction-sql/introduction-to-sql?u=76281980&t=20)** Hi, my name is Deepa Maddala.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-introduction-sql/introduction-to-sql?u=76281980&t=23)** I'm a database developer.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-introduction-sql/introduction-to-sql?u=76281980&t=25)** I've designed this course to get you up and running with database tables using the SQL language.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-introduction-sql/introduction-to-sql?u=76281980&t=32)** I'll show you how to use the common statements in order to manipulate data within tables.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-introduction-sql/introduction-to-sql?u=76281980&t=38)** This includes modifying, deleting, merging, and creating data, along with tips on transaction controls.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-introduction-sql/introduction-to-sql?u=76281980&t=47)** While this isn't a fully comprehensive primer on SQL, it should help you get started and maybe answer some of your immediate questions regarding databases.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-introduction-sql/introduction-to-sql?u=76281980&t=58)** So if you're ready to dive in, let's go ahead and get started.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2)
> **Code Keywords:** let (1)
> **Speakers:** - [deepa] (1)

#### Using GitHub Codespaces with this course
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=0)** - [Instructor] On your course interface, find the GitHub Codespaces Open button.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=5)** Click on it to go to GitHub.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=8)** You then click on Create Codespace on Main button and wait for it to fully load.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=16)** This might take some time.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=20)** Now once it's fully loaded, we can see an Install button.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=25)** Click on that.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=28)** Once it's installed, navigate to File Explorer.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=32)** This is where we have all the files that are needed for our project.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=37)** I will be adding all the SQL queries here under the queries folder.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=43)** These three are example SQL statements.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=48)** This is just for your reference.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=51)** Currently we are on the Main branch.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=54)** We will have to navigate to chapter one, video one branch.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=59)** So I click on Main and let's try to find 01_01 branch.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=67)** There it is, chapter one, video one branch.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=71)** So this is the one, I click on it, and now we can see that there are two folders here.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=78)** The first one is to create the entire database that is needed for our course.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=85)** So we will not be looking into that.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=88)** The folder that we will be looking into is 01_01, which corresponds to our video.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-sql/using-github-codespaces-with-this-course-23832714?u=76281980&t=95)** So I click on that and we have all the SQL statements that are needed for this specific video.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), navigate to (2), go to (1)
> **Env Vars:** sql (3)
> **CLI Commands:** find (2)
> **Code Keywords:** interface (1), let (1)
> **Tools:** github (2)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. The Select Statement

#### Fetch data
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=0)** - [Facilitator] The first thing we need to learn is how to fetch data from different tables in our database.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=6)** We use the SELECT statement to fetch data from the tables.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=10)** We can fetch data by columns.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=12)** That means we can fetch one single column or multiple columns from the table by specifying it in the SELECT statement.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=20)** We can fetch data by filtering the rows in a table by specifying a condition.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=25)** We can also fetch data from one or multiple tables by using joints, which we learn later.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=32)** SQL statements are not case sensitive, but the best practice is to write the keywords in uppercase and the table names, column names, and all others in lowercase.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=44)** Keywords cannot be abbreviated or cannot be split across lines.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=48)** We can write the complete SQL statement in one line.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=52)** However, we use indentation to improve readability, especially when we are writing long SQL statements.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=60)** Now this is the syntax for the SELECT statement.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=63)** If we give star, it'll fetch all the columns from the table, but if I specify the column names explicitly, only those columns data will be fetched.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=73)** DISTINCT keyword is optional.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=76)** It is used only when we need to fetch distinct values in a particular column.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=81)** We can also ask to fetch an expression instead of a column name.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=85)** We give the alias name if we do not want the expression name to be shown as the column name.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=91)** We'll understand this better when we look at an example.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=95)** Then we give the FROM keyword followed by the table name.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=99)** So now let's look at a few examples in codespace.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=103)** On your codes interface, find the GitHub codespace's open button.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=109)** Click on it to go to GitHub.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=112)** You then click on create codespace on main button and wait for it to fully load.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=120)** This might take some time.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=123)** Now once it's fully loaded, we can see an install button.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=127)** Click on that.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=130)** Once it's installed, navigate to File Explorer.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=134)** This is where we have all the files that are needed for our project.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=140)** I will be adding all the SQL queries here under the queries folder.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=146)** These three are example SQL statements.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=150)** This is just for your reference.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=153)** Currently, we are on the main branch.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=156)** We will have to navigate to chapter one, video one branch.
>
> **[2:41](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=161)** So I click on main and let's try to find 0101 branch.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=168)** That is, chapter one, video one branch.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=173)** So this is the one, I click on it.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=176)** And now we can see that there are two folders here.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=179)** The first one is to create the entire database that is needed for our course.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=186)** So we will not be looking into that.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=188)** The folder that we will be looking into is 0101, which corresponds to our video.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=196)** So I click on that and we have all the SQL statements that are needed for this specific video.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=203)** So since we are in chapter one, video one, so I go there and click on the SELECT statement .SQL.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=212)** So this is a basic SELECT statement, where I'm fetching all the rows and columns from EMP tab.
>
> **[3:39](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=219)** So when I run this, I right click and go to run selected query.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=224)** Click on that and it fetches all the rows and all the columns from EMP tab table.
>
> **[3:50](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=230)** Now in the second SELECT statement, I am specifying the columns that I want to fetch.
>
> **[3:56](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=236)** I want only EMP number and name columns from EMP tab table.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=242)** So when I run this, it only fetches those two columns.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=246)** Now, if I want to give an expression along with the column names and want to fetch that data, I give the column names first, followed by an expression where I want to calculate the annual salary for all employees.
>
> **[4:20](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=260)** So I'm multiplying it with 12 and then I run this.
>
> **[4:26](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=266)** So now we got the annual salary, but the column name looks a little weird like salary times 12.
>
> **[4:35](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=275)** So for it to look a little nicer, we give, suppose I give it as salary and run this, it shows it as salary.
>
> **[4:49](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=289)** But if you want to give a more appropriate name, I would like to call it as annual salary.
>
> **[4:59](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=299)** Now if I run this, it's going to throw me an error because there are two words in the alias name.
>
> **[5:07](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=307)** When there are multiple words in the alias name, we have to put them in quotes.
>
> **[5:13](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=313)** So now when I run this, it shows it annual salary and this looks much more nicer.
>
> **[5:21](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=321)** Now let's learn about the different operators that we have.
>
> **[5:26](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=326)** We have arithmetic operators and character operators.
>
> **[5:31](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=331)** Any arithmetic expression uses arithmetic operators.
>
> **[5:35](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=335)** That is, plus, minus, multiplication, and division.
>
> **[5:40](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=340)** The order of precedence is multiplication, division, addition, and then finally, subtraction.
>
> **[5:46](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=346)** The parenthesis overrides the order of precedence, which means that anything in the parenthesis will be calculated first and then the other operators outside the parenthesis in the order of precedence.
>
> **[6:01](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=361)** Character strings use character operators.
>
> **[6:03](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=363)** Those are two pipelines that is for contamination and single quotes and double quotes for giving character strings.
>
> **[6:13](https://www.linkedin.com/learning/hands-on-introduction-sql/fetch-data?u=76281980&t=373)** So here we have learned about the basic SELECT statements, how to use alias names, and about arithmetic and character operators.

> [!info]- Semantic Content
>
> **Env Vars:** select (7), sql (7), emp (4), distinct (1)
> **Code Keywords:** this, (5), let (3), interface (1), this. (1), throw (1)
> **UI Navigation:** click on (8), go to (2), navigate to (2)
> **SQL:** select (7)
> **CLI Commands:** find (2)
> **Tools:** github (2)
> **Definitions:** is a  (1), means that (1)
> **Best Practices:** best practice (1)

#### Filtering data
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=0)** - [Instructor] We do not need the entire tables data every single time.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=4)** So let's learn how to filter the data from tables based on our requirement.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=9)** We use the WHERE condition to filter the data.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=12)** This is the syntax for the WHERE.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=15)** Alias names cannot be given in the WHERE condition.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=18)** If we have character values or date values in the conditions, then we need to give those in single quotes.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=25)** Let's look at some examples to understand this better.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=28)** Let's go to chapter 1 video 2, and go to WHERE condition.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=35)** So here, I'm trying to SELECT empno, name, and salary from emp_tab WHERE salary&gt;2500.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=45)** So it's going to retrieve all the employees whose salaries are greater than 2,500.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=51)** So when I run this, gets all the employees whose salaries are greater than 2,500.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=61)** In the second SELECT statement, the condition is using a character value.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=67)** So I have to enclose those in single quotes.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=70)** So here we are checking if an employee's name is KING and getting their details.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=77)** So when I run this, there is an employee named KING and these are his details.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=85)** There are two types of conditions, one is comparison and the other is logical.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=90)** Comparison conditions, as the name implies, are used to compare the table data with the values that we provide.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=97)** These are the different comparison operators.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=100)** = to checks if the column value is equal to a specific value, &lt;&gt; to check if they're not equal to a specific value.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=108)** Similarly, we have &lt;, &gt;, &lt;=, and &gt;=.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=114)** LIKE checks for a specific character pattern.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=117)** IN checks if the column value matches with any value in our set.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=123)** BETWEEN AND checks if the column value is between a range of values.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=128)** And IS NULL checks for null values in column.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=132)** So let's look at some examples for these.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=135)** Now that we are on chapter 1 video 2, we will have to navigate to the corresponding branch.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=143)** We will have to do this step once we start a new video so that we have the appropriate SQL statements.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=150)** So let's navigate to 01_02 Branch.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=155)** I click on this and let's find 01_02 branch.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=160)** And I click on that.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=163)** So now, we have a new folder, 01_02, which has all the SQL statements that are needed for this particular video.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=173)** So these are all the SQL statements that we will cover in this video.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=178)** So this is a very important step to navigate to the correct branch before we start working on a specific video.
>
> **[3:07](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=187)** Let's go to ComparisonConditions.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=191)** Here, we are checking for the name to match this specific pattern.
>
> **[3:18](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=198)** So _ represents one single character and % represents multiple characters.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=206)** So we are trying to look for this pattern and we'll see if it returns any employee details with that pattern.
>
> **[3:35](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=215)** So ADAMS is a name which matches this pattern because the first letter is A, it could be any letter so that doesn't really matter, but the second letter has to be an uppercase D, which matches, and then we have other letters.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=232)** So it matches the pattern so it returns this employee details.
>
> **[3:58](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=238)** IN checks for this column value to be in this set of values.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=245)** So it checks if the deptno is in this set of values and gets those employee details for us.
>
> **[4:13](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=253)** So now let's run this.
>
> **[4:15](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=255)** And these are all the employees who belong to department 30 and 40.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=267)** Now BETWEEN AND is used to check for a column value to be between a range of values, including these values as well.
>
> **[4:37](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=277)** So when I run this, these employees' salaries are within the range 2,000 and 6,000, so that's fetched for us.
>
> **[4:51](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=291)** Now here, we are checking if the manager column IS NULL and we are getting those employee records so that we can update that manager details for that employee.
>
> **[5:07](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=307)** Only empno 7001 manager is set to null.
>
> **[5:13](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=313)** So that's been returned for us.
>
> **[5:15](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=315)** Now let's take a look at the logical conditions.
>
> **[5:19](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=319)** We use these when we have multiple comparison conditions in WHERE.
>
> **[5:24](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=324)** AND returns true only if both the conditions are true, otherwise, it returns a false.
>
> **[5:32](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=332)** Let's take an example.
>
> **[5:34](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=334)** Let's go to LogicalConditions.
>
> **[5:37](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=337)** Here, we have two conditions, WHERE name has to match this pattern AND the deptno has to be 30.
>
> **[5:47](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=347)** So only if both the conditions are true, only then the rows will be fetched.
>
> **[5:53](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=353)** So when I run this, this is the only employee whose name matches with the pattern here and who belongs to department number 30.
>
> **[6:05](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=365)** So that has been fetched for us.
>
> **[6:10](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=370)** Now OR works in a different way.
>
> **[6:13](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=373)** So even if one of these conditions satisfies, we will get a row fetched.
>
> **[6:20](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=380)** So let's see how the output changes when we use OR in between.
>
> **[6:25](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=385)** As we can see, we have multiple rows and not just the single row that we got in the first SELECT statement because even if one of these satisfies, we get some output.
>
> **[6:39](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=399)** So here, there are two employees whose names start with S and there are employees whose deptno is 30.
>
> **[6:55](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=415)** This one has been fetched because the name pattern matches.
>
> **[7:01](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=421)** So that's the reason why we have that record fetched.
>
> **[7:06](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=426)** NOT checks for the department not to be in this set of values.
>
> **[7:12](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=432)** So when I run this, it checks for any employees who are not in this specific departments that is 30 or 40.
>
> **[7:25](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=445)** So since it belongs to department 70, we got that record.
>
> **[7:32](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=452)** So this is the order of precedence for all the operators.
>
> **[7:36](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=456)** The order of precedence can be changed by using parenthesis.
>
> **[7:40](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=460)** Let's look at some examples.
>
> **[7:43](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=463)** So here, when I run this particular SELECT statement, it first checks for AND because AND has a higher order of precedence than OR.
>
> **[7:56](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=476)** So it checks for these two conditions first and then looks for this deptno 30.
>
> **[8:04](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=484)** So it checks for deptno 40, and also checks if the salaries are greater than 2,500.
>
> **[8:13](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=493)** So those rows will be fetched, and we will also have employees who belong to department 30 as well.
>
> **[8:22](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=502)** So let's see.
>
> **[8:25](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=505)** Here, as we can see, the only employee who has a salary greater than 2,500 in department 40 is KING.
>
> **[8:36](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=516)** So that row has been fetched.
>
> **[8:38](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=518)** And then it also looked for deptno 30 and fetched all the employees who belong to that particular department.
>
> **[8:47](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=527)** So first, these two are considered, and then the OR.
>
> **[8:55](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=535)** Now, if I want to do it in a slightly different way, I have to put the department numbers in parenthesis if I want to consider the departments first and then check for the salaries.
>
> **[9:11](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=551)** So it first checks for all employees who belong to either deptno 30 or deptno 40, and then it looks for the salaries if they are greater than 2,500.
>
> **[9:27](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=567)** So now when I run this, it gets all the employees whose salaries are greater than 2,500 and those who belong to departments 40 and 30.
>
> **[9:39](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=579)** So that's how we can change the order of precedence.
>
> **[9:44](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=584)** We can sort data in ascending or descending order.
>
> **[9:48](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=588)** If we do not specify the order, then the default would be taken as ascending.
>
> **[9:53](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=593)** Let's look at an example here.
>
> **[9:56](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=596)** Let's go to ORDERBY.
>
> **[10:00](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=600)** So here, I'm fetching all the employees who belong to deptno 30, and I'm going to sort them by salary.
>
> **[10:08](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=608)** And since I haven't specified in which order I want, it's going to take it as ascending by default.
>
> **[10:15](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=615)** So when I run this, here, these are all the employees who belong to deptno 30 and their salaries are sorted from minimum to maximum in ascending order.
>
> **[10:37](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=637)** And we can also sort by two different columns as well.
>
> **[10:43](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=643)** So when we do that, it first sorts by deptno in ascending order because we haven't specified anything here, and then it looks for the salaries in descending order.
>
> **[10:56](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=656)** So let's look at the output to understand this better.
>
> **[11:03](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=663)** So here, if we see, it first sorted by the deptno in ascending order, that is starting from 30 all the way up to 70.
>
> **[11:16](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=676)** And then, in each department, it sorted the salaries in descending order, that is from the highest to the lowest.
>
> **[11:26](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=686)** That is if we look at department 30, it started from 3,000 all the way to 800.
>
> **[11:32](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=692)** And then it moves to department 40, 5,000 to 1,100.
>
> **[11:40](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=700)** And then department 70, which has only one employee with salary 3,000.
>
> **[11:48](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=708)** This is how we can sort by multiple columns as well.
>
> **[11:53](https://www.linkedin.com/learning/hands-on-introduction-sql/filtering-data?u=76281980&t=713)** So this is about the WHERE condition, the types of conditions, order of precedence, and the ORDER BY clause.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), this, (7), this. (1), default. (1)
> **Env Vars:** where (8), select (4), king (3), sql (3), between (2)
> **SQL:** where (8), select (4), order by (1)
> **UI Navigation:** go to (5), navigate to (3), click on (2)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** emp_tab (1)
> **Prerequisites:** before we start (1)

#### Types of functions, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=0)** - Now let's learn about the types of functions.
>
> **[0:03](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=3)** There are two types of functions that can be applied on rows in a table, single row and multiple row functions.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=10)** Single row functions work with one row at a time and returns one result for every row.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=16)** Multiple row functions work with a group of rows at a time and return one result for every group.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=23)** Let's take a look at different single row functions.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=27)** First one is number functions.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=30)** Number functions perform arithmatic operations on the data.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=33)** Let's look at an example for this.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=36)** So let's go to number functions, SELECT ROUND(92.427,2), this is how I've given it.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=46)** This rounds to 2 decimal places because I've given 2 as the second argument.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=52)** Since 7 is greater than 5, it rounds off the decimal places to 92.43.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=59)** So let me run this.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=64)** So it rounds off to 92.43 and if this is a value lower than 5, suppose it is 92.423 then when it rounds off, it would just be 92.42 because the last value is less than 5.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=86)** The next one is conditional functions.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=88)** Now let's take a look at how case function works.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=92)** Let's go to conditional functions and here, we are trying to change the salary based on the job of an employee.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=102)** So here what we did is, select and we are trying to fetch name, job, salary and the fourth column would be revised salary because that is being given as the alias name here and what content would be there in that column is we are trying to check for the job of the employee that is whether he's a manager, analyst, clerk or something else and then calculating the revised salary for every employee and displaying that in the fourth column.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=142)** So let me run this.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=148)** So here, we have all the employees and the revised salaries for all of them based on their job.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=156)** So these were their original salaries and now after making these changes, these are the revised salaries based on their job.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=166)** Next, let's look at the character functions.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=170)** UPPER converts the entire string to upper case, LOWER converts everything to lower case and SUBSTR extracts a string from a starting position to fetch a certain number of characters from that character value.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=188)** Let's look at an example for that one.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=190)** So let's go to character functions and here UPPER will convert everything to upper case and LOWER would convert everything to lower case and then here, in SUBSTR, starting from the sixth position, I want to extract 10 characters from this character value.
>
> **[3:41](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=221)** So it extracts 'world12345' from this statement.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=229)** So when I run this, it gives us 'world12345'.
>
> **[3:55](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=235)** LENGTH is used to calculate the length of the character value.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=239)** Since there are 10 characters, our output would be 10.
>
> **[4:07](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=247)** INSTR is used to search for an expression and identify its position in the actual character value.
>
> **[4:15](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=255)** So here it looks for the first occurrence of E and gets that as the output for us.
>
> **[4:23](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=263)** So since it's in the second place, our output would be 2.
>
> **[4:30](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=270)** TRIM trims 'World' from the 'Hello World' string, so what's left is 'Hello', so that'll be our output.
>
> **[4:46](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=286)** REPLACE replaces 'Hello' with 'Good morning', so this is our character value and this is the one which we want to replace and this is the new string that we want to replace it with.
>
> **[5:01](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=301)** So instead of 'Hello', it's going to replace it with 'Good morning' in our character value.
>
> **[5:08](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=308)** So it changes to 'Good morning World', that would be our output.
>
> **[5:16](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-1?u=76281980&t=316)** So when I run this, it gives us 'Good morning World'.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this. (3), this, (2), function (1), case, (1)
> **Env Vars:** upper (2), lower (2), substr (2), select (1), round (1)
> **Versions:** 92.43 (2), 92.427 (1), 92.423 (1), 92.42 (1)
> **UI Navigation:** go to (3)
> **SQL:** select (1)
> **Definitions:** is a  (1)
> **Speakers:** - now (1)

#### Types of functions, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=0)** - [Instructor] Now that we've learned about single row functions, let's take a look at GROUP BY clause and GROUP functions.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=7)** What are multiple row functions?
>
> **[0:09](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=9)** These are also called group functions.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=12)** These functions work on a group of rows and give one output for every group.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=17)** The columns in the SELECT statement that are not used in the group function must be in the GROUP BY clause.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=24)** These are the various multiple row functions.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=27)** SUM returns the sum of all n values.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=30)** AVG returns the average.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=32)** MAX and MIN return maximum and minium values within a group of values pulled by an expression.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=39)** COUNT returns the count of number of rows that we need.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=43)** VARIANCE and STDDEV functions are used to calculate the variance and standard deviation for a set of values.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=51)** Let's look at some examples.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=53)** Let's head to chapter one, video four, GroupFunctions.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=58)** So this fetches the SUM of all salaries in emp_tab table.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=73)** This fetches the average of all salaries.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=77)** Now, this gets us the lowest and highest salaries from emp_tab where department number is 30.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=92)** So it's going to check for the highest and lowest salaries of employees belonging to department number 30.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=101)** So that's the lowest and the highest salaries of employees belonging to department number 30.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=113)** Now, when I give MIN of hiredate and MAX of hiredate, it's going to get us the oldest and the most recently joined employees hire dates in emp_tab table.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=128)** So this is the hiredate of the employee who's been there the longest tenure and this gives us the employee who's joined most recently.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=142)** Then this gives us the first and last names in the list if the names are sorted in alphabetical order.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=155)** So the MIN gives us the first name and MAX gives us the last names if they're sorted in alphabetical order.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=164)** So when I run this, Adams is the first name in the list because it begins with A.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=170)** And the last name in the list is Smith as there are no other names after Smith.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=183)** COUNT of star counts the number of rows that are there in the table.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=191)** There are eight rows in the table.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=196)** So this is going to count the number of employees reporting to manager 7330 since we have given the WHERE condition as well.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=207)** So we can give the column name in the COUNT function as well.
>
> **[3:33](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=213)** So there are three employees reporting to manager 7003.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=224)** The DISTINCT keyword is to eliminate any duplicate values.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=229)** So if there are any duplicate employee number values, then those will be eliminated and it counts the distinct values in emp_tab table.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=242)** So there are eight distinct employee numbers.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=246)** So that's what's being fetched.
>
> **[4:10](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=250)** So these are a few examples of our group functions.
>
> **[4:14](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=254)** The GROUP BY clause is used to group multiple rows.
>
> **[4:18](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=258)** So instead of using the entire table, sometimes we need small groups of rows to perform operations individually.
>
> **[4:26](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=266)** So we can use the GROUP BY clause to do so.
>
> **[4:29](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=269)** We can only use column names and not alias names in the GROUP BY clause.
>
> **[4:34](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=274)** We have to keep in mind that any columns in the SELECT statement that are not used in the group functions must be given in the GROUP BY clause.
>
> **[4:43](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=283)** Now, HAVING clause is used to filter the groups' results.
>
> **[4:48](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=288)** This is because we cannot restrict groups by using the WHERE condition the way we do for a regular SELECT statement.
>
> **[4:57](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=297)** So we have to give the group functions in the HAVING clause.
>
> **[5:04](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=304)** Now, this is the syntax for the GROUP BY clause.
>
> **[5:07](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=307)** The GROUP BY clause comes after the WHERE condition and before the ORDER BY clause.
>
> **[5:15](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=315)** First, we write the SELECT columns from table name.
>
> **[5:19](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=319)** Then the WHERE condition.
>
> **[5:22](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=322)** Then GROUP BY, followed by HAVING and group_conditions if needed.
>
> **[5:30](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=330)** And finally, ORDER BY to sort the filter data.
>
> **[5:35](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=335)** This order is always the same for any SELECT statement.
>
> **[5:41](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=341)** Everything that is enclosed in square brackets is optional and used only as needed.
>
> **[5:48](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=348)** So now let's take a look at some examples for understanding this better.
>
> **[5:54](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=354)** So we just now saw how to find the employee with highest and lowest salaries in every department.
>
> **[6:00](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=360)** Now I want to find out the employee with the highest salary under every manager.
>
> **[6:07](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=367)** To do this, we need to group rows in the table by using GROUP BY clause.
>
> **[6:13](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=373)** And we use the GROUP BY clause with the manager.
>
> **[6:20](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=380)** So when I run this, it's going to give me the highest salaries under every manager and then it is also sorting these salaries in descending order because I have given ORDER BY MAX salary in descending order.
>
> **[6:39](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=399)** So that's the reason why the salaries are sorted in descending order.
>
> **[6:47](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=407)** Now as I mentioned earlier, we cannot give the group functions in a WHERE condition, like we did over here.
>
> **[6:57](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=417)** If I give a group function like this, it's going to throw us an error.
>
> **[7:04](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=424)** So let me just run this.
>
> **[7:07](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=427)** It says that we cannot use the MAX function in the WHERE condition.
>
> **[7:13](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=433)** So instead of giving this condition here in the WHERE condition, we have something called HAVING clause, which we can use to give these group functions conditions.
>
> **[7:27](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=447)** So first of all, let's try to fetch the highest salary in every department.
>
> **[7:32](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=452)** So for that, I give SELECT department number, MAX salary from emp_tab, GROUP BY department number because I want the highest salary in every department.
>
> **[7:44](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=464)** So that's the reason why I'm grouping them by departments and getting the maximum salary in every department.
>
> **[7:52](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=472)** So when I run this, it's getting the department number and the maximum salary in each department.
>
> **[8:01](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=481)** So now if I want to get the highest salary in every department, and then I also want to check if that MAX salary is greater than 3,000.
>
> **[8:14](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=494)** So I also have a group function condition over here.
>
> **[8:18](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=498)** So I need to put that group function condition in the HAVING clause and not in the WHERE condition.
>
> **[8:25](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=505)** So I give SELECT department number, maximum salary from emp_tab GROUP BY department number, which is exactly the same as we did earlier but since I have a condition to check if the maximum salary is greater than 3,000, I give the HAVING clause and put the condition in there.
>
> **[8:45](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=525)** And I run this.
>
> **[8:47](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=527)** So there is only one department, which has a maximum salary greater than 3,000.
>
> **[8:56](https://www.linkedin.com/learning/hands-on-introduction-sql/types-of-functions-part-2?u=76281980&t=536)** So this is about GROUP BY and group functions.

> [!info]- Semantic Content
>
> **Env Vars:** group (15), where (8), select (7), max (7), having (6)
> **SQL:** group by (14), where (8), select (7), having (6), order by (3)
> **Code Keywords:** let (6), function (6), this, (5), this. (2), finally, (1)
> **Code Identifiers:** emp_tab (6), group_conditions (1)
> **CLI Commands:** find (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Using multiple tables
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=0)** - [Instructor] Now let's learn about the different kinds of joins and subqueries.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=4)** Joins are used to fetch data from one or more tables at a time.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=8)** Based on the data we need, joins are categorized into four types: inner, right, left and full outer join.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=16)** This is the syntax for using joins.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=19)** Now let's take a look at each of these.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=21)** Inner join retrieves all rows matching in both tables.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=26)** So here in this example, it's going to get the matching rows from country_tab and states_tab.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=33)** Let's look at an example for this.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=35)** Let's go to chapter one, video five.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=38)** Joins.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=39)** So this is the join.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=42)** I'm using the INNER JOIN first.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=44)** So here, I give SELECT * FROM country_tab c.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=50)** C is the alias name that I'm giving for the table name because I don't want to give the table name every single time I'm using it in any condition because that's going to make it very lengthy.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=63)** So I just want to use the alias name instead of the table name.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=66)** So I give that.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=68)** So country_name, followed by the alias name for the table.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=72)** And then the join name and the second table.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=77)** And its alias name.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=78)** ON keyword, followed by the join condition.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=83)** So here we are comparing the country_ids from country_tab and states_tab.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=88)** So let's run these three to understand the join output better.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=98)** So this is the country_tab and this is the states_tab.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=101)** So here if we see, we are trying to retrieve only the matching rows from country_tab and states_tab.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=110)** So in country_tab, we have three country_ids but we have matching states only for one and two but not three.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=122)** So Canada does not have any associated states over here.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=126)** So that would be excluded from our output.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=129)** And similarly, in the states_tab.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=131)** Texas, California and Baja California have associated country_ids while Kerala does not.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=138)** So Kerala also does not have a matching value.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=142)** So that's the reason why Kerala also would be excluded.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=146)** So in our output, we will have USA and Mexico.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=150)** And we will have all the states, that is Texas, California and Baja California.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=156)** And Canada and Kerala have been excluded.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=160)** This is because it's the inner join.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=163)** Now let's go take a look at the other outer joins.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=168)** Now, SQL supports three kinds of outer joins, that is left, right and full outer joins.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=175)** But SQLite supports only left join, so we will take a look at that first, and then I'm going to explain how the right and full outer join would work like.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=186)** So if we take a look at the left outer join, it gets all the rows from left table and only the matching rows from the right table.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=196)** So if we look at this example here, I'm using the left outer join and I run this.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=206)** So it's going to get all the rows from the left table and only the matching rows from the right table.
>
> **[3:33](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=213)** The reason I say this is the left table is because when I put it like this, the country_tab is to the left side so that's the left table, and states_tab is to the right, so that's the right table.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=229)** I just indented it like this for readability purpose.
>
> **[3:54](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=234)** So here we retrieve all the rows from the left table.
>
> **[3:58](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=238)** So in our output, we would have USA, Mexico and Canada.
>
> **[4:03](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=243)** And only the matching rows from the right table.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=246)** That is Texas, California and Baja California.
>
> **[4:08](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=248)** And Kerala is excluded because it does not have an associated country_id.
>
> **[4:14](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=254)** And since Canada does not have any state associated to it, those columns are set to null.
>
> **[4:21](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=261)** Now if I give RIGHT JOIN here, then it would change to something like this.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=271)** We'll get only the matching rows from the left table and all the rows from the right table.
>
> **[4:39](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=279)** So we will have USA and Mexico, and we'll have all the states from the states_tab.
>
> **[4:47](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=287)** Only Canada will be excluded because that's from the left table.
>
> **[4:53](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=293)** And that doesn't have any matching rows here.
>
> **[4:56](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=296)** And if I'm using the OUTER JOIN, it fetches all the rows from both the tables irrespective of whether they have matching rows or not.
>
> **[5:06](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=306)** So we will have USA, Mexico, Canada and all the four states.
>
> **[5:11](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=311)** When we write a SELECT statement in a clause of another SELECT statement, it is known as a subquery.
>
> **[5:17](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=317)** It's also called inner SELECT or nested SELECT.
>
> **[5:20](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=320)** The inner SELECT statement will be executed first.
>
> **[5:23](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=323)** Then its output is taken as input for the outer SELECT to retrieve data.
>
> **[5:27](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=327)** Subqueries must be enclosed in parenthesis.
>
> **[5:30](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=330)** Let's look at an example.
>
> **[5:32](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=332)** So in the first example, this is my outer SELECT.
>
> **[5:37](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=337)** And the one in the parenthesis here is my subquery.
>
> **[5:44](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=344)** So this gets executed first.
>
> **[5:46](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=346)** So it gets the department number for employee 7001.
>
> **[5:53](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=353)** And then it fetches all the employees who belong to that particular department number.
>
> **[5:58](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=358)** So when I run this, since 7001 belongs to department 40, it has fetched all the employees belonging to that particular department.
>
> **[6:12](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=372)** So this is another example where we are using the same tables in both the outer and the inner join.
>
> **[6:20](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=380)** So here we are getting the country_id for California and then we are trying to fetch all the states associated with that particular country_id.
>
> **[6:31](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=391)** So when I run this, these are the two states that are associated with this country.
>
> **[6:39](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=399)** So since the inner query gets executed first, when we get the country_id for California, it returns an output of one.
>
> **[6:49](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=409)** And then the outer query gets executed.
>
> **[6:54](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=414)** So we get the states associated with that particular country_id.
>
> **[6:58](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=418)** We can also use different tables in the outer and inner queries.
>
> **[7:02](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=422)** Here I'm using the country_tab and inside, I'm using states_tab.
>
> **[7:08](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=428)** So what I do is I get the country_id for California from the states_tab, which is one.
>
> **[7:15](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=435)** And then I am running the outer SELECT statement, that is SELECT * FROM country_tab.
>
> **[7:21](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=441)** So it's going to fetch the country details for this particular country_id.
>
> **[7:27](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=447)** So depending on our requirement, we can use different kinds of subqueries.
>
> **[7:33](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=453)** So when I run this.
>
> **[7:36](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=456)** It's going to get me the country details from the country_tab based on the country_id of California.
>
> **[7:44](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=464)** There are two types of subqueries: single row and multiple row.
>
> **[7:48](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=468)** Single row subqueries return single rows and we use single row comparison operators, like equals to, not equals to, less than, less than, equals to, greater than, greater than, equals to.
>
> **[7:59](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=479)** We can have multiple single row subqueries.
>
> **[8:02](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=482)** That is inner queries, unlike what we have seen in our examples.
>
> **[8:06](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=486)** As we have seen, inner and outer queries can fetch data from different tables.
>
> **[8:11](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=491)** Now, when it comes to multiple row subqueries, we can use operators like IN, ANY, and ALL.
>
> **[8:18](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=498)** And we can also use group functions in subqueries.
>
> **[8:21](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=501)** So let's look at some examples for these.
>
> **[8:24](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=504)** So here's how we can use a group function.
>
> **[8:28](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=508)** In the inner query, I'm using MAX function.
>
> **[8:31](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=511)** So it's going to fetch the maximum salary from the emp_tab.
>
> **[8:36](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=516)** And then it's going to populate the employee details for that particular salary.
>
> **[8:42](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=522)** So when I run this, this is the employee with the highest salary.
>
> **[8:48](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=528)** So that's what's going to be fetched because it's going to get the max salary from emp_tab, that is 5,000 and then it's going to run this outer SELECT statement.
>
> **[9:02](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=542)** Now, this is how we can use IN, ANY or ALL.
>
> **[9:05](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=545)** In this example, we are taking IN.
>
> **[9:09](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=549)** So here, first the inner SELECT statement gets executed.
>
> **[9:13](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=553)** So here we get the salaries of all employees who belong to department 30.
>
> **[9:19](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=559)** So when this gets executed, we get these salaries and then, once we have the list of salaries, we are going to run the SELECT statement, that is the outer SELECT statement.
>
> **[9:34](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=574)** So it's going to fetch all the employee details whose salaries are in this set of values.
>
> **[9:41](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=581)** So when I run this, these are the employees whose salaries are in this set of values.
>
> **[9:50](https://www.linkedin.com/learning/hands-on-introduction-sql/using-multiple-tables?u=76281980&t=590)** So this is all about joins and subqueries.

> [!info]- Semantic Content
>
> **Code Identifiers:** country_tab (10), states_tab (9), country_id (8), country_ids (3), emp_tab (2)
> **Env Vars:** select (14), usa (4), join (3), inner (1), sql (1)
> **Code Keywords:** let (8), this, (5), this. (4), function (2)
> **SQL:** select (14), join (2), inner join (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 2. New Tables and Data

#### Create new tables
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=0)** - [Instructor] Now that we have learned how to fetch and filter data from existing tables, let's learn how to create new tables.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=8)** For this, we use the create statement.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=11)** It is a DDL statement, that is, DDL stands for Data Definition Language, and all DDL statements are auto commit, which means that once they are executed the changes will be permanent and cannot be reverted back.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=27)** This is the syntax for the create statement.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=30)** We can check if the table is created by giving describe table name or desc table name.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=39)** Tables which do not belong to this user are not in this user's schema.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=44)** If we are creating a table in a different schema, we will need to specify the schema name in the create statement.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=51)** We can also create a table using a sub query.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=55)** We use this method when we want to create a table by using another table's data.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=61)** But this feature is available in a few databases like Oracle.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=65)** If column specifications are given, then number of column specifications and number of columns in the sub query must be equal.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=75)** When using sub query method, column definition can contain only column names and default values, but no constraints.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=85)** Now, let's understand what are constraints.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=87)** Constraints are like rules to follow at table level or column level.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=93)** We can define these constraints at the time of creation of the table, or after the table has been created.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=99)** Constraints that are defined must be satisfied to completely execute the statements.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=106)** Otherwise, the statements will not be executed and it throws some errors.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=111)** We have to name the constraints for easy identification.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=115)** Now, let's take a look at some of the constraints.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=119)** Primary key is a unique and not null value for every row.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=123)** This helps identify every row in the table.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=127)** Not null constrained, as the name implies, specifies that a column cannot contain a null value.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=134)** Let's look at an example.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=136)** Let's go to chapter two, video one.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=140)** So here, we are giving create table countries and then we are giving all the column names.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=147)** Here, if we observe carefully, the not null constraint is given with the column specification, as it is a column level constraint.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=158)** If we see here, we are giving it along with the column.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=163)** So, we gave it the column name as country code, the data type, followed by the constraint, the constraint name, and what kind of constraint it is.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=177)** So, we are defining it near the column specification.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=182)** So, it is a column level constraint.
>
> **[3:05](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=185)** The primary constraint is a table level constraint, as it is specified after all the column specifications.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=193)** If we notice carefully here in the code, this constraint, which is the primary key constraint, is given all the way after the column specifications are done, and not like the not null constraint, as we give with the column specification.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=212)** So, the primary key constraint is a table level constraint.
>
> **[3:38](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=218)** The third constraint is foreign key or referential integrity constraint.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=224)** This assigns one or more columns as foreign key and establishes a connection with the primary key of the same or different table.
>
> **[3:54](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=234)** Foreign key values must match with a value in the parent table or must be null.
>
> **[4:01](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=241)** Let's look at an example for the foreign key.
>
> **[4:04](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=244)** So here, for this table, the primary key is the state ID.
>
> **[4:11](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=251)** The foreign key is defined on country ID.
>
> **[4:16](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=256)** If you take a look over here, the primary key for states table is state ID, and the foreign key here is imposed on the country ID.
>
> **[4:37](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=277)** So, this establishes a connection between the country ID from this table and the country ID from the countries table.
>
> **[4:49](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=289)** So if we see, it is referencing the country ID from countries table.
>
> **[4:55](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=295)** So, this means that we can insert a country ID in the states table only if that country ID is in the countries table.
>
> **[5:04](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=304)** Otherwise, it throws an error.
>
> **[5:06](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=306)** Similarly, we cannot delete a country ID from the country table while that country ID is mapped with some states in the states table.
>
> **[5:17](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=317)** It again throws an error, since there are some dependencies on that country ID in the states table.
>
> **[5:24](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=324)** So, we call countries table as the parent table and states table as the child table.
>
> **[5:32](https://www.linkedin.com/learning/hands-on-introduction-sql/create-new-tables?u=76281980&t=332)** So, this is how primary key and foreign key work hand in hand.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (1), type, (1), delete (1)
> **Definitions:** is a  (6), means that (2), stands for (1)
> **Env Vars:** ddl (3)
> **Documentation:** specification (3)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Change table structure
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=0)** - Let's learn how to change the table structure by adding or modifying columns, renaming them, defining a default value for the new column, dropping columns from a table.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=11)** We can do this by using the ALTER statement.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=15)** ALTER statement is a DDL statement like "create" so it auto commits.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=20)** This is the syntax for ALTER statement to add new columns.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=25)** If you think that there is a need for a new column at a later point of time then we can use this ALTER statement to do so.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=33)** Let's try to add a new column to "states" table.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=37)** Let's go to chapter two, video two.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=40)** Here, ALTER TABLE states, that's the table name, ADD COLUMN, this is the new column that I want to add, and the data type for it.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=50)** Before running this I would like to show you how it looks like in the database first.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=58)** Let's go to "states" table.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=60)** And if you take a look at the columns, we do not have test column present.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=70)** So now let's try to add this new column there.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=74)** So we have that column added.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=77)** Let's go to the database again, go to "states" table.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=85)** And if we scroll all the way to the right, we can see our new column.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=91)** This is how we can add a new column.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=95)** This is the syntax to rename a column name.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=99)** This is to rename a table name and this one is to drop a column.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=105)** Let's look at some examples for these in Codespace.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=110)** To rename the table, I give something like this.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=114)** ALTER TABLE, table name, RENAME TO, and this is the new table name, that is "new states."
>
> **[2:05](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=125)** So now when I run this, so the table name has changed.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=133)** Let's go to the database and if we take a look over here, we can see that the table name has changed to "new states."
>
> **[2:25](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=145)** Let's go back to our SQL file.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=149)** Now, if I want to rename the column name, I have to ALTER TABLE, and since we have modified the table name to "new states" I give that name, RENAME COLUMN.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=164)** This is the column name which I want to modify, TO, and this is the new column name, that is "testing."
>
> **[2:54](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=174)** So we have to see if the column name has renamed to "testing" or not.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=181)** So first, let's run this.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=184)** Let's go to the database.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=189)** And under "new states," the column name has been renamed to "testing."
>
> **[3:17](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=197)** The drop feature is not supported in SQLite but we can use the syntax to use with other databases.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=206)** So this is the syntax, it's ALTER TABLE, table name, DROP, and the column name.
>
> **[3:33](https://www.linkedin.com/learning/hands-on-introduction-sql/change-table-structure?u=76281980&t=213)** So this is how it works.

> [!info]- Semantic Content
>
> **Env Vars:** alter (8), table (4), column (2), rename (2), ddl (1)
> **Code Keywords:** let (11), this. (2), this, (1)
> **UI Navigation:** go to (6)
> **SQL:** alter table (4)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Speakers:** - let (1)

#### Add new rows to a table
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=0)** - [Instructor] Now that we know how to create tables, let's learn how to add new rows into the table.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=6)** We use the INSERT statement to do that.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=9)** There are three approaches to insert rows into a table.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=13)** The first one is to insert one row at a time using the INSERT statement.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=18)** The second approach is by using a script.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=22)** So we can insert multiple rows at a time by using ampersand substitution in the INSERT statement to prompt for runtime values.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=32)** We'll understand this a little better in the next slides.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=36)** The third approach is to copy rows from an existing table to a new table.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=42)** This way, we can copy multiple rows at a time by using a subquery.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=48)** Now let's take a look at each approach.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=50)** The syntax to insert one row at a time is INSERT INTO table_name, followed by the columns names, VALUES keyword, followed by the values corresponding to the columns that we list down here.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=65)** So now let's take a look at a few examples for this.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=69)** Let's head to the folder chapter two, video three, and here let's take a look at the table first.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=77)** If we observe, these are the column names, department number, department name, manager ID and location_id.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=87)** So now when I try to insert a row into the table, if I'm not changing the order of the columns, and leaving them as is in the table, then we don't have to specify the column names explicitly here in the INSERT statement.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=105)** I can just give the values and it is intelligent enough to identify that these values belong to those columns.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=116)** So when I run this, the row has been inserted.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=122)** And now when I run the SELECT statement, we can see that row has been inserted over here.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=133)** Now in this INSERT statement, I'm changing the default order of the column names.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=141)** So after department number, instead of giving department name, I have put location_id.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=148)** So I have to explicitly mention the column names for it to understand that these are the values for these column names.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=158)** And I'm giving the values also corresponding to this columns.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=164)** So now when I run this, it's been inserted.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=172)** Let's look at the table.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=177)** The new row has been inserted.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=182)** Now, the third example is to add null values.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=189)** So when I run this, the new row has been inserted.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=195)** And here we are trying to insert some NULL values in some of the columns.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=203)** So when I run this, the new row has been inserted with some null values over here.
>
> **[3:35](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=215)** And also remember that null value is not the same as a blank space.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=220)** So when there is no value specified for a column, it is taken as a null value as well.
>
> **[3:48](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=228)** Now this is the syntax for inserting multiple rows at a time using a script.
>
> **[3:54](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=234)** So when I run this particular statement, it'll ask us to enter values for these columns at runtime.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=242)** So in the second approach, we are trying to insert multiple rows at a time by using a script.
>
> **[4:09](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=249)** So let's take a look at the syntax.
>
> **[4:12](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=252)** INSERT INTO table_name VALUES, followed by the column names.
>
> **[4:18](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=258)** But if you observe, we have given the ampersand symbol before the column name.
>
> **[4:25](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=265)** So what this implies is it's going to prompt us to enter values for these column names at runtime.
>
> **[4:34](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=274)** So all we need to do is give the values at runtime, and it takes multiple rows, values at a time and it inserts those into the table.
>
> **[4:48](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=288)** So this is going to save us a lot of time because we don't have to type the INSERT statement over and over again.
>
> **[4:55](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=295)** Instead, we run the same INSERT statement and just type in the values every single time.
>
> **[5:02](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=302)** And we should be able to add more rows in the same amount of time.
>
> **[5:07](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=307)** The other way to do so is by creating a script file.
>
> **[5:11](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=311)** A script file is nothing but a collection of SQL statements put together and stored in a file.
>
> **[5:18](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=318)** And that file is executed whenever it's needed.
>
> **[5:22](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=322)** The third approach is to copy multiple rows from another table by using a subquery.
>
> **[5:28](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=328)** When we are using a subquery in the INSERT statement, we do not have to give VALUES keyword.
>
> **[5:35](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=335)** Number of columns in the subquery must be equal to the number of columns in the INSERT.
>
> **[5:40](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=340)** For example, if we want to create an exact replica of an existing table, we just give INSERT INTO new_table SELECT * FROM old_table_name and WHERE condition.
>
> **[5:56](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=356)** The WHERE condition is optional.
>
> **[5:59](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=359)** If we do not give the WHERE condition, all rows from the old table are copied to the new table.
>
> **[6:05](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=365)** But if a condition is specified, only those rows which satisfy that criteria will be copied to the new table.
>
> **[6:12](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=372)** INSERT statement is a Data Manipulation Language statement, also known as a DML statement.
>
> **[6:20](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=380)** We need to commit the INSERT statement changes to make them permanent.
>
> **[6:26](https://www.linkedin.com/learning/hands-on-introduction-sql/add-new-rows-to-a-table?u=76281980&t=386)** So this is about the INSERT statement.

> [!info]- Semantic Content
>
> **Env Vars:** insert (15), into (3), values (3), where (3), select (2)
> **Code Keywords:** let (7), this, (4), this. (1)
> **SQL:** insert into (3), where (3), select (2)
> **Code Identifiers:** table_name (2), location_id (2), new_table (1), old_table_name (1)
> **Definitions:** is a  (1), known as (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)

#### Delete rows in a table
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=0)** - [Instructor] In this video, we will learn about the DELETE statement.
>
> **[0:03](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=3)** It is used to delete rows from a table.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=6)** There are two approaches to delete rows.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=8)** One is a simple WHERE condition.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=10)** Just like other DML statements, if we give the WHERE condition, it's going to delete only specific rows which satisfy that criteria.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=18)** Otherwise, all the rows in the tables will be deleted.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=21)** So this is how we will give it, DELETE FROM table_name WHERE condition.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=25)** The second approach is by using subqueries.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=29)** When we want to delete rows based on another table, we use subqueries.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=35)** Like, DELETE FROM table_name WHERE column name equals a subquery in the parenthesis.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=43)** It need not be an equals to sign.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=46)** It can be any other operators that we have learned earlier.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=50)** So let's take a look at few examples for this.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=53)** Let's go to chapter 02, video 04, Delete.sql.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=61)** Click here and run the SELECT statement.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=64)** So this is our table emp_tab.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=67)** Now here, I'm trying to delete the employee with employee number 7,007.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=76)** So it's executed.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=77)** Now let's take a look at emp_tab table.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=80)** So that row has been deleted.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=85)** Now, to understand the subqueries, let's take a look at an example.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=90)** So here, SELECT * FROM old_emp_tab.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=94)** This is another table which is an exact replica of emp_tab table.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=100)** So it has all these row.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=103)** Now I'm using the employee_tab table to get the salary which is less than thousand.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=113)** And then I want to delete that particular row from old_emp_tab, and not from emp_tab.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=123)** I'm going to run this.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=124)** So there's only one record and that record has been deleted.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=133)** There was only one salary which was less than thousand.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=138)** That was employee 7,006.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=142)** So that row has been deleted now.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=145)** If we try to delete a row which contains a primary key that is being used as a foreign key in another table, it's going to return an integrity constraint error.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=156)** It does not allow us to delete departments if some employees are already assigned to that department number, as there are some dependencies for that department number in other tables.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=170)** So that is about integrity constraint error.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-introduction-sql/delete-rows-in-a-table?u=76281980&t=175)** DELETE statement is also a DML statement, so it needs to be committed explicitly, and it does not auto commit by itself.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (13), let (4), this. (2)
> **Env Vars:** delete (4), where (4), dml (2), select (2)
> **Code Identifiers:** emp_tab (4), table_name (2), old_emp_tab (2), employee_tab (1)
> **SQL:** where (4), delete from (2), select (2)
> **API Endpoints:** delete  (4)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** delete.sql (1)
> **UI Navigation:** go to (1)

#### Commit and rollback
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=0)** - [Instructor] Now we learn about Transaction Control Language or also called as TCL.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=6)** There are three TCL statements; that is Commit, Rollback, and Savepoint.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=12)** A transaction is a set of statements which begin when the DML statement is executed and ends when Commit or Rollback is issued, or when a DDL or a DCL statement is executed, auto commit will occur, or if the user exits the system or the system crashes.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=33)** So these are the possible scenarios when a transaction ends.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=39)** Now let's learn about the first TCL statement, that is Commit.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=44)** Commit ends the current transaction and saves all the data changes, thus, making them permanent.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=51)** For DML statements, we need to give Commit in order to save the changes, unlike DDL and DCL statements, which are auto committed.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=61)** Auto commit also occurs when the user exits the system normally without explicitly executing a Commit statement.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=69)** Now let's compare the data before and after Commit.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=73)** Before Commit, the data changes can be reverted back to the previous state.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=78)** After Commit, all data changes are made permanent and cannot be reverted back.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=84)** Before Commit, the current user can view results by using the SELECT statements, but others cannot view these changes made by the user.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=94)** After Commit, all the users can view the changes made irrespective of who makes the changes.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=100)** Before Commit, affected rows are logged, which does not allow other users to make any changes to the affected rows.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=108)** After Commit, locks on affected rows are released and those rows are available to other users to make any other changes.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=117)** The next one is Rollback and Savepoint.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=122)** They both work hand in hand.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=124)** Rollback discards all data changes and ends the current transaction.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=129)** Savepoint creates a marker point within a transaction.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=133)** By using Commit and Rollback, we can preview the data changes before making them permanent.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=140)** Auto rollback occurs when there is a system failure or abnormal termination of the system.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=148)** By using Commit and Rollback, we can preview data changes before making them permanent.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=154)** Now as we can see in this diagram, first I issued a Commit to save all the pending changes.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=162)** Now I start a new transaction.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=165)** I give a DELETE statement followed by Savepoint A.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=170)** Then I give a DML statement and then give Savepoint B as a marker at that point.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=179)** After that, I give a few other DML statements.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=183)** If I just give Rollback, it'll end this current transaction and discard all the changes.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=190)** If I give Rollback to Savepoint A, then it'll rollback current transaction to the Savepoint.
>
> **[3:19](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=199)** Thereby discarding all changes made after Savepoint A.
>
> **[3:24](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=204)** Similarly, if I give Savepoint B, it'll discard all changes made after Savepoint B.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=212)** Now here is a comparison of the data before and after Rollback.
>
> **[3:37](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=217)** Before Rollback, changes made cannot be reverted.
>
> **[3:41](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=221)** After Rollback, data changes can be discarded.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=224)** Before Rollback, the affected rows are logged so that other users cannot make any changes to data within the affected rows.
>
> **[3:53](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=233)** After Rollback, all locks on affected rows are released.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=237)** Before Rollback, the current user can review results on data changes by using SELECT statements.
>
> **[4:04](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=244)** Other users cannot view the results of the data changes made by this user.
>
> **[4:09](https://www.linkedin.com/learning/hands-on-introduction-sql/commit-and-rollback?u=76281980&t=249)** After Commit, since the data changes are discarded, nobody can see those changes in their database.

> [!info]- Semantic Content
>
> **Env Vars:** dml (4), tcl (3), ddl (2), dcl (2), select (2)
> **CLI Commands:** make (3)
> **Code Keywords:** let (2), delete (1)
> **Definitions:** is a  (3)
> **SQL:** select (2)
> **API Endpoints:** delete  (1)
> **Speakers:** - [instructor] (1)


### 3. Modifying Existing Tables

#### Modify rows and columns in tables
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=0)** - [Instructor] In this video, we will learn about UPDATE statement.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=4)** It's a DML statement.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=6)** We use this to modify data in a table.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=9)** Now, this is the syntax for UPDATE statement.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=11)** UPDATE table_name SET column_name equals to some value.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=17)** And if you're trying to update multiple columns, then we give column names and assign some values to them, separated by commas.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=25)** And then the WHERE condition.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=28)** Just like other DML statements, if we specify the WHERE condition, then it updates only those rows that satisfy that criteria.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=38)** If we do not give the WHERE condition, it updates all the rows in that particular table.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=43)** So now let's try to modify one row in emp_tab table.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=49)** We are trying to update emp_tab table by setting the salary to 8,000 for emp number 7001.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=57)** First, let's take a look at the table.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=61)** I give SELECT * FROM emp_tab.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=72)** Run this.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=73)** So if you take a look at the first record, that is emp number 7001, he has a salary of 5,000.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=84)** Now I want to update that salary to 8,000.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=87)** So I run this.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=90)** And when I take a look at the table now, his salary has updated to 8,000.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=99)** Now when we are updating only one row, it's always important to identify the row with the column value that is unique for that specific row.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=109)** In this case, we are using the emp number as it is unique for every employee.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=116)** Instead of employee number, if we are trying to find by the name, it might update multiple rows at a time because names cannot be unique for all employees.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=131)** There might be more people with the same name.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=134)** So it is very important that we identify the unique value for every row.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=141)** We can modify multiple columns at a time using subqueries in the SET clause.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=146)** First, let's take a look at the emp_tab table.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=150)** So now this is our emp_tab table.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=155)** And if we observe the first two rows, we will be modifying Clark's manager and salary to King's manager and salary.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=168)** So here, if we take a look at the UPDATE statement, I'm trying to modify multiple columns in emp_tab table for employee number 7002.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=182)** That is for Clark.
>
> **[3:05](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=185)** And I want to modify them to the manager and salary of employee number 7001, that is King's manager and salary.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=197)** So when I run this UPDATE statement, and we go to the table, so now when we take a look at Clark's manager, it's set to the same value as King's manager.
>
> **[3:34](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=214)** And the salary is also set to the same as King's salary.
>
> **[3:39](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=219)** So now we have modified Clark's manager and salary.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=224)** We can modify rows in same tables or another table as well by using these subqueries.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=232)** So here, in this example that we've already seen, we are using the same table here, as well as in the subqueries.
>
> **[4:03](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=243)** In the next example, we'll be using two tables, that is old_emp_tab table and emp_tab tables.
>
> **[4:13](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=253)** So first, let's take a look at our old_emp_tab table.
>
> **[4:17](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=257)** SELECT * FROM old_emp_tab table.
>
> **[4:23](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=263)** And I run this.
>
> **[4:26](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=266)** So if we take a look at the first row, King belongs to department number 10.
>
> **[4:36](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=276)** It hasn't been updated for quite some time.
>
> **[4:40](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=280)** So now I would like to update it to the latest department to which he is assigned, which is in emp_tab table.
>
> **[4:49](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=289)** So what I do is I give something like this.
>
> **[4:53](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=293)** UPDATE old_emp_tab table SET department number to.
>
> **[4:58](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=298)** We are fetching the department number for King from the new table and we are assigning it to the department number in the old table.
>
> **[5:11](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=311)** So now when I run this, and now let's take a look at our old_emp_tab table.
>
> **[5:19](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=319)** For King, the department number is now set to 40, which is the latest department to which he belongs currently.
>
> **[5:32](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=332)** Now, if we try to modify a row to a value that does not exist in the parent table, it returns integrity constraint error.
>
> **[5:41](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=341)** For example, if I'm trying to update emp_tab table and I want to set the department number to 500 where the department number is 10, it throws an error.
>
> **[5:55](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=355)** This happens because department number 500 is not there in the ept_tab table, which is the parent table for department in the emp_tab.
>
> **[6:07](https://www.linkedin.com/learning/hands-on-introduction-sql/modify-rows-and-columns-in-tables?u=76281980&t=367)** This is about the UPDATE statement.

> [!info]- Semantic Content
>
> **Code Identifiers:** emp_tab (10), old_emp_tab (5), table_name (1), column_name (1), ept_tab (1)
> **Env Vars:** update (7), set (3), where (3), dml (2), select (2)
> **SQL:** update (7), where (3), select (2)
> **Code Keywords:** let (5), this. (4), case, (1), this, (1)
> **Analogies:** just like (1), for example (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)

#### Merge rows in a table
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql/merge-rows-in-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/merge-rows-in-a-table?u=76281980&t=0)** - [Instructor] In this video, we will be learning about the last DML statement.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-introduction-sql/merge-rows-in-a-table?u=76281980&t=4)** That is merge.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-introduction-sql/merge-rows-in-a-table?u=76281980&t=6)** It updates or inserts data in tables based on a condition.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-introduction-sql/merge-rows-in-a-table?u=76281980&t=10)** If the row is already there in the table, it updates it, otherwise it inserts a new row in the table.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-introduction-sql/merge-rows-in-a-table?u=76281980&t=17)** Instead of giving loops, we just use one merge statement.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-introduction-sql/merge-rows-in-a-table?u=76281980&t=21)** Hence, it improves performance.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-introduction-sql/merge-rows-in-a-table?u=76281980&t=23)** It's useful in data warehouse systems.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-introduction-sql/merge-rows-in-a-table?u=76281980&t=26)** As the data comes from various sources and there is a possibility for duplicate records to be inserted into the table.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-introduction-sql/merge-rows-in-a-table?u=76281980&t=33)** To prevent that, we use the merge statement.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-introduction-sql/merge-rows-in-a-table?u=76281980&t=36)** This is the syntax.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-introduction-sql/merge-rows-in-a-table?u=76281980&t=37)** This table name is the table where all the rows must be inserted or updated.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-introduction-sql/merge-rows-in-a-table?u=76281980&t=44)** This is the source from where we get the data to be inserted or updated.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-introduction-sql/merge-rows-in-a-table?u=76281980&t=50)** ON clause has the condition which determines whether to insert or update.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-introduction-sql/merge-rows-in-a-table?u=76281980&t=56)** When matched or when not matched clause instructs the server what to do when the condition is matched or not matched.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-introduction-sql/merge-rows-in-a-table?u=76281980&t=67)** So this is how the merge works.

> [!info]- Semantic Content
>
> **Env Vars:** dml (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Drop or truncate a table
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=0)** - [Instructor] Let's learn about the three DDL statements that is drop, truncate, and rename.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=8)** The first one is DROP statement.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=10)** DROP statement will delete everything, the data and the structure of the table.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=17)** It's auto committed, so changes made will be permanent.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=21)** A person should have drop any table or he should be the creator of the table to drop the table.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=29)** Now let's try one of these examples.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=33)** Here, I want to drop the table dept_copy_tab table.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=41)** First, let's take a look at the table in our database.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=46)** So we have a table, empty table, which is dept_copy_tab.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=52)** It does not have any rows.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=55)** So now, I try to drop this particular table.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=65)** Now let's take a look at the database.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=69)** If we see, dept_copy_tab has been dropped.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=74)** The next one is TRUNCATE statement.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=77)** It'll delete all the rows from the table and it'll also release the storage space that was used by the table.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=84)** You might say that we can just use the DELETE statement to delete the rows.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=89)** Why use TRUNCATE?
>
> **[1:31](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=91)** TRUNCATE is a DDL statement and the changes made are permanent, and the previous state cannot be recovered.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=98)** But when we use DELETE, we can still revert back the changes by using rollback.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=104)** The other difference between TRUNCATE and DELETE is that TRUNCATE will release the storage space that was used by the table, but DELETE does not do so.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-introduction-sql/drop-or-truncate-a-table?u=76281980&t=114)** It just deletes all the rows from the table.

> [!info]- Semantic Content
>
> **Env Vars:** truncate (5), delete (4), ddl (2), drop (2)
> **Code Keywords:** delete (7), let (4)
> **Code Identifiers:** dept_copy_tab (3)
> **API Endpoints:** delete  (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Rename a table
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql/rename-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/rename-a-table?u=76281980&t=0)** - [Instructor] We will be learning about the last DDL statement that is rename statement.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-introduction-sql/rename-a-table?u=76281980&t=6)** Using this, we can change the name of a table, view, synonym, or sequence, but to do so, we should be the owner of the object.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-introduction-sql/rename-a-table?u=76281980&t=15)** So this is the syntax for rename.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-introduction-sql/rename-a-table?u=76281980&t=19)** It says: RENAME table1 TO table2.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-introduction-sql/rename-a-table?u=76281980&t=24)** So this is the name, original name of the table, which I want to change to this one.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-introduction-sql/rename-a-table?u=76281980&t=31)** So this is going to be syntax for the rename statement.

> [!info]- Semantic Content
>
> **Env Vars:** ddl (1), rename (1)
> **Code Keywords:** this, (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-sql/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-sql/next-steps?u=76281980&t=0)** - [Instructor] Thank you so much for joining me for this course.
>
> **[0:03](https://www.linkedin.com/learning/hands-on-introduction-sql/next-steps?u=76281980&t=3)** I hope you enjoyed learning about SQL statements and how they can be used to create, edit and retrieve information from databases.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-introduction-sql/next-steps?u=76281980&t=13)** If you wish to continue your database journey, I suggest you learn a bit more about database objects other than tables, such as views, synonyms, index, et cetera.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-introduction-sql/next-steps?u=76281980&t=25)** You could also dive deep and learn more about constraints.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-introduction-sql/next-steps?u=76281980&t=30)** I recommend checking out some books like, "Getting Started with SQL", by Thomas Neild and "SQL Practice Problems", by Sylvia Moestl Vasilik, which helps you practice more.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-introduction-sql/next-steps?u=76281980&t=43)** Thanks again and I hope you have a wonderful day.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3)
> **Code Keywords:** continue (1)
> **Analogies:** such as (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[SQL Hands-On Practice]]
**1 of 9** | [[SQL Practice- Basic Queries]] →

## Appears In

- [[SQL Hands-On Practice]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL
