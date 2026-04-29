---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced
url: "https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced"
duration_minutes: 431
duration: 7h 11m
level: Intermediate
updated: 10/24/2025
learners: 47802
skills:
  - Data Engineering
  - SQL
exercise_files: true
github: "https://github.com/LinkedInLearning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced-3338018/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFg6SQDsanfjA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008940216?e=2147483647&amp;v=beta&amp;t=5uhqANuKdTmalL1zRQxfHPK2hgoYHyCoPU1vhpS2XMc"
linkedin_topic: Data Science
learning_paths:
  - '[[Master Data Engineering]]'
  - '[[Data Engineering Hands-On Practice]]'
prev_courses:
  - '[[Advanced Snowflake- Deep Dive Cloud Data Warehousing and Analytics]]'
  - '[[ETL in Python and SQL]]'
next_courses:
  - null
  - '[[End-to-End Data Engineering Project]]'
path_nav: '[{"path":"Master Data Engineering","position":8,"total":8,"prev":"Advanced Snowflake- Deep Dive Cloud Data Warehousing and Analytics","next":null},{"path":"Data Engineering Hands-On Practice","position":6,"total":7,"prev":"ETL in Python and SQL","next":"End-to-End Data Engineering Project"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/web-development
  - topic/database-management
  - skill/data-engineering
  - skill/sql
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Complete%20Guide%20to%20SQL%20for%20Data%20Engineering-%20from%20Beginner%20to%20Advanced.md)

![Complete Guide to SQL for Data Engineering: from Beginner to Advanced](https://media.licdn.com/dms/image/v2/D560DAQFg6SQDsanfjA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008940216?e=2147483647&amp;v=beta&amp;t=5uhqANuKdTmalL1zRQxfHPK2hgoYHyCoPU1vhpS2XMc)

# Complete Guide to SQL for Data Engineering: from Beginner to Advanced

> Are you looking to get up and running with SQL as a data engineer, but not sure where to begin? In this course, instructor Deepak Goyal provides a comprehensive overview of SQL specifically targeted at data engineers, from basic queries and analytic tasks to advanced functions and data management.Find out why SQL is one of the most frequently and widely used programming languages for data engineer

> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced) | 7h 11m | Intermediate | 48K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (3 videos)
- **[[#2. 1. SQL Introduction]]** (4 videos)
- **[[#3. 2. SQL Basics]]** (7 videos)
- **[[#4. 3. Data Manipulation]]** (6 videos)
- **[[#5. 4. Advanced Data Querying]]** (11 videos)
- **[[#6. 5. SQL Functions]]** (8 videos)
- **[[#7. 6. SQL Analytical Functions]]** (9 videos)
- **[[#8. 7. Views and Stored Procedures]]** (6 videos)
- **[[#9. 8. Indexes and Performance]]** (6 videos)
- **[[#10. 9. Database Security and User Management]]** (8 videos)
- **[[#11. 10. Debugging: Common Mistakes and SQL Errors]]** (4 videos)
- **[[#12. 11. ETL Overview]]** (3 videos)
- **[[#13. 12. Real-World Project]]** (2 videos)
- **[[#14. Conclusion]]** (1 videos)

### 1. Introduction

#### SQL for data engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-for-data-engineering-25582464?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-for-data-engineering-25582464?u=76281980&t=0)** - Do you want to become a data engineer?
>
> **[0:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-for-data-engineering-25582464?u=76281980&t=2)** Then, SQL is the most important skills to have.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-for-data-engineering-25582464?u=76281980&t=6)** This course is designed to prepare you to develop the SQL skills needed to become a successful data engineer.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-for-data-engineering-25582464?u=76281980&t=14)** You will learn SQL basics, DDL, DML operations, window functions, index performance, and data security, along with practical examples.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-for-data-engineering-25582464?u=76281980&t=25)** Hi, I'm Deepak Goyal, a senior certified Microsoft Solution architect and trainer.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-for-data-engineering-25582464?u=76281980&t=31)** Join me to accelerate your career in data world.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-for-data-engineering-25582464?u=76281980&t=35)** Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), ddl (1), dml (1)
> **Code Keywords:** let (1)
> **Speakers:** - do (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-you-should-know?u=76281980&t=0)** - [Deepak] It is important to understand that, what is the prerequisite knowledge needed to learn this SQL for Data Engineering course?
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-you-should-know?u=76281980&t=9)** The good news is that you don't need any prerequisite knowledge as such, either about the SQL, or about the data engineering.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-you-should-know?u=76281980&t=18)** In this course, we are going to start from SQL basics, and we try to build all that knowledge needed to learn SQL from the data engineering perspective.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-you-should-know?u=76281980&t=33)** Although, if you have any database knowledge then it'll be a plus for you, but again, it is not mandatory.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-you-should-know?u=76281980&t=42)** From the data engineering side also, we try to cover the basics of data engineering whenever and wherever needed throughout the course, as this course is not just a theory, but a practical-driven course.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-you-should-know?u=76281980&t=60)** So for this, we are going to need the PostgreSQL.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-you-should-know?u=76281980&t=65)** If you have any idea about the PostgreSQL, it will be good.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-you-should-know?u=76281980&t=70)** And if you are hearing this term in itself for the first time, then rest assured, we have covered how you can download and set up PostgreSQL right from the basics, and we have a quick tour of explaining how you can use that tool for practicing your SQL.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-you-should-know?u=76281980&t=92)** There is also the option to follow along using GitHub Codespaces, if you prefer.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-you-should-know?u=76281980&t=98)** I will go over codespaces in the next movie.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5)
> **Prerequisites:** prerequisite (2), set up (1)
> **Code Keywords:** this, (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Speakers:** - [deepak] (1)

#### Using Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-codespaces?u=76281980&t=0)** - [Instructor] This code takes the advantage of GitHub Codespaces to make the learning experience more interactive and practical.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-codespaces?u=76281980&t=8)** With GitHub Codespaces, you get to code and immediately see your code in action on a virtual machine.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-codespaces?u=76281980&t=16)** It's a safe space where you can experiment with the exercises shown in this video without worrying about messing up your own computer setting.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-codespaces?u=76281980&t=27)** Alongside this video, we have a GitHub repo set up.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-codespaces?u=76281980&t=32)** This repo is packed with the latest code, snippets, and exercise for you to follow along, including the setups needed before and after each action.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-codespaces?u=76281980&t=43)** You can kick off your own GitHub Codespace from any branch in the repo.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-codespaces?u=76281980&t=49)** To start your own Codespace, hit the Open Codespace button on the Code page.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-codespaces?u=76281980&t=56)** This brings you to the setup page.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-codespaces?u=76281980&t=59)** To set up your Codespace, hover over the Create Codespace on main button.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-codespaces?u=76281980&t=65)** Click the dropdown, and make sure it's set to configure, and create if it isn't already, Then hit the green button.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-codespaces?u=76281980&t=74)** On the next page, pick the branch you want from the dropdown and click the Create Codespace.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-codespaces?u=76281980&t=83)** This kicks off your Codespace setup.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-codespaces?u=76281980&t=86)** Codespace is a fantastic tool for diving into this course hands-on.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-codespaces?u=76281980&t=91)** I really recommend trying it out as you go through the videos.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-codespaces?u=76281980&t=95)** All right, let's dive in.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (2), setup (2), configure (1)
> **Tools:** github (4)
> **CLI Commands:** make (2)
> **UI Navigation:** dropdown (2)
> **Code Keywords:** let (1)
> **Exercise Files:** github repo (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. 1. SQL Introduction

#### What is SQL and why learn it?
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=0)** - [Instructor] Whenever you want to share thoughts with your loved ones or you want to communicate with them, you use your own native language.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=9)** Similarly, whenever you want to communicate with database, the language for communication is SQL, which stands for structured query language.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=22)** It allows you to talk to databases, to store information, retrieve information, and perform powerful operations on your data.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=35)** To appreciate what SQL brings to the table, I thought we should delve into a bit of history as to how we used to store and retrieve the data before it came into picture.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=49)** Before SQL, the data was stored as either a paper files, or a flat files, or hierarchical databases, or in the form of network database.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=62)** Imagine that you are running a successful online store and your inventory is growing faster than ever.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=71)** You started with simple spreadsheet.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=74)** Maybe you are using Microsoft Excel to put all your order, product, all those information into an Excel.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=83)** But as your store is growing, it's become a nightmare to keep track of everything in terms of an Excel.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=94)** Orders are getting lost, and customer are frustrated because you might not able to pull out the correct information.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=102)** Or you might find it very difficult to manage all of these things.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=107)** That's where the SQLs comes to the rescue.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=110)** So such kind of a problem exist before the start of the SQL.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=116)** Now, coming back again to the SQL, SQL is a programming language which is used for controlling and manipulating the structured data, which is present in your databases.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=132)** SQL allows Juniper to manipulate the data present in databases with the help of queries.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=141)** And the good thing is that these queries is a kind of an high-level language.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=146)** That means it's a very human friendly.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=149)** It is not as complex as writing the programming language, for example, C, C++, Java.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=157)** So SQL, it's quite easy to comprehend.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=162)** SQL serves as standard database language for many relational database management systems.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=169)** For example, MySQL, MS Access, Oracle, and many more.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=176)** Now as the name comes in, RBDMS, a question might have popped up in your brain that what does this RBDMS stands for?
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=188)** So RBDMS, it stands for relational database management system.
>
> **[3:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=196)** A relational database is a form of a database that stores the data in terms of a table so that it can be used in relationship with other tables.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=209)** So in RDBMS, you create multiple tables, and this table have some kind of relationship between them, and that's why this entire system is called as RBDMS, that is relational database management system.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=229)** For example, imagine that you are holding the information about a company.
>
> **[3:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=236)** Now in a company, you have an entities like employee.
>
> **[4:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=242)** In that case, you store the information of the employee in an employee table.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=247)** Similarly, you will have a department also in the company, and department table keeps a track of all the departments.
>
> **[4:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=257)** Now every employee is a part of a sum department, right?
>
> **[4:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=263)** So it belongs to a specific department, and that's why there is a relationship between employee and department table, and that's how the relationship is built.
>
> **[4:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=275)** So this is about the SQL.
>
> **[4:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=278)** Now the question comes in why you should learn SQL.
>
> **[4:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=283)** So SQL is a universal language.
>
> **[4:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=287)** The best part with the SQL is SQL is not a database specific, as we saw in the previous slide.
>
> **[4:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=295)** That SQL is common for multiple databases, whether it is MS SQL, or either MySQL or IBM Db2 or Postgres.
>
> **[5:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=309)** So SQL is quite similar everywhere.
>
> **[5:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=313)** Hence, knowing an SQL helps you to work with any kind of databases.
>
> **[5:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=320)** SQL is very efficient in handling the huge amounts of data.
>
> **[5:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=326)** Your databases holds the structured data, the data which has a sum fixed schema.
>
> **[5:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=333)** For example, when you store the data into the database, you define the tables, and table has a sum fixed format, like every table have some specific set of column and their data types.
>
> **[5:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=349)** So handling such kind of an structured data is very easy to do with SQL.
>
> **[5:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=356)** And even SQL can manage such a structured data even without worrying about the size of this data.
>
> **[6:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=365)** So whether you have a small size of a data or you have a bigger size of a data, SQL can handle all these types of data.
>
> **[6:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=376)** Another advantage of learning the SQL is business application implementation.
>
> **[6:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=381)** Many business applications and software systems rely on databases to store and retrieve the data.
>
> **[6:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=391)** SQL is the language that facilitates that seamless connections between applications and databases and making it essential for the developers and IT professionals.
>
> **[6:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=405)** Another reason could be is scalability.
>
> **[6:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=409)** As the data volumes grows, the importance of having the scalable solution is important.
>
> **[6:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=416)** SQL knowledge helps in writing efficient queries and optimizing database performance, ensuring that the system can scale to handle increased amounts of data.
>
> **[7:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=431)** Last but not the least, it helps in the job opportunities.
>
> **[7:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=436)** Many job roles in the field of data analysis, business intelligence, web development, and software engineering, all of them requires SQL proficiency.
>
> **[7:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=449)** Learning SQL opens up a wide range of career opportunities and enhances your marketability in the job market.
>
> **[7:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=459)** So by now you have understood the very important role of the SQL.
>
> **[7:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=465)** Now in the next session, we are going to deep dive into an importance of SQL in the world of the data engineering.
>
> **[7:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-sql-and-why-learn-it?u=76281980&t=474)** And we will see how SQL can play a significant role in making your career in data engineering.

> [!info]- Semantic Content
>
> **Env Vars:** sql (30), rbdms (4), rdbms (1), ibm (1)
> **Definitions:** is a  (6), stands for (3), is called (1)
> **Analogies:** for example (4), imagine (2), picture (1)
> **CLI Commands:** mysql (2), find (1)
> **Cross-References:** as we saw (1), in the next (1)
> **Code Keywords:** case, (1)
> **Speakers:** - [instructor] (1)

#### Role of SQL in data engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=0)** - [Instructor] Before understanding the use of SQL in data engineering, we first need to understand what is the role of data engineer, why it is important for them.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=13)** So let's understand the day in, day out responsibilities of the data engineer.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=19)** The first and foremost important role of a data engineer is to finding the key insights.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=27)** Data engineers are expected to find the insights from the data which is available to them in the form of databases.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=37)** They have to write a queries to get the analytics out of it.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=44)** Another important role of a data engineer is to interpret the data.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=50)** Data is always try to tell some kind of a story.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=55)** The work of a data engineer is to interpret that story and identify what this data is trying to tell, but doing so they need to do a lot of things.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=68)** Sometimes the data which is given to them is not of a very good form.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=73)** It may have a lot of null values, it might have a lot of duplicate values, it might have a lot of unwanted columns, so data engineer has to clean this data before doing any analytics on it.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=91)** So another aspect of a data engineer is to use the SQL to do these kind of cleaning and analytics.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=102)** Another important role of a data engineer is to design the ETL process.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=109)** Now, when the word comes ETL process, a question pops up in the mind, what is ETL?
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=115)** You might have heard of it, this ETL, or aware of it, but let's have our quick revision of what is this ETL process.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=124)** ETL process is stands for extract, transform, and load.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=130)** In data world, many times you get into a situation where you have been asked to move the data from one source to another data source.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=141)** A pretty good example is moving the data from your transactional databases to the data warehouses.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=150)** Now, whenever you move the data from this transaction data source to a data warehouse data source, you design an ETL pipeline or ETL process.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=163)** That's first, extract the data from the source, you might clean, you might transform, and then you save the result into the destination.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=175)** That entire process is called as ETL.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=181)** There are a lot of ETL tools available in the market, for example, Informatica, SSIS, Azure Data Factory.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=190)** SQL is the backbone of the data engineers.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=194)** SQL plays a very crucial role in managing and manipulating the large volumes of the data.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=202)** And as data engineers has to play with data, the SQL is of a prime importance for them.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=209)** If you go a little deeper down, you will find that data engineers has to do the database designing as well.
>
> **[3:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=217)** When I say database designing, they have to form the data models, they have to decide what are the number of tables, what could be the name of these tables, how could they relate these multiple tables?
>
> **[3:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=231)** So again, they will use the SQL to design this database solution.
>
> **[3:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=238)** Sometimes they have to do the data ingestion.
>
> **[4:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=241)** It's not always that the source is your SQL system.
>
> **[4:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=246)** Sometimes they have a variety of different system, maybe CSV file, maybe JSON file, maybe data from SFTP server.
>
> **[4:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=255)** How you can ingest the data into the database from this variety of data sources?
>
> **[4:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=262)** Again, all of these will require the SQL knowledge.
>
> **[4:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=266)** As we already talked, they need to do the transformations as well, right?
>
> **[4:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=271)** Change the data from one form to another form.
>
> **[4:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=273)** For example, you have a normal table and they might have to create another table, which is of an aggregated form.
>
> **[4:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=281)** For example, you have a sales table, which has the sales for every day, but you want to showcase the sales on a monthly basis, so you might going to do the data transformation where you aggregate the data.
>
> **[4:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=297)** Sometimes they have to integrate the data from variety of sources, or they might have to do the performance optimization so that the queries which is running in the system might run faster.
>
> **[5:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=311)** Hence, overall, the SQL plays a very critical role for the data engineers as data engineer has to play with the data.
>
> **[5:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=321)** Hence for knowing an SQL and having the proficiency in the SQL is of prime importance for the data engineers.
>
> **[5:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=330)** In the next session, we are going to start installing our test environment where we can go and play with our SQL.
>
> **[5:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/role-of-sql-in-data-engineering?u=76281980&t=340)** If you are using GitHub Codespaces, you can skip the next two movies in the course and move directly to the chapter two, Introduction to the Database and Tables.

> [!info]- Semantic Content
>
> **Env Vars:** sql (12), etl (10), ssis (1), csv (1), json (1)
> **Code Keywords:** let (2), require (1)
> **Analogies:** for example (3)
> **CLI Commands:** find (2)
> **Definitions:** stands for (1), is called (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### Setting up the SQL environment: Install PostgreSQL
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=0)** - [Instructor] Imagine you are a chef and has been asked to prepare food for feast.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=6)** To do so, you'll definitely need a kitchen set up.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=10)** Similarly, for mastering SQL, you need a LocalDB setup to practice.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=19)** Postgres is an free open source database system that supports both relational SQL as well as it supports a non-relational JSON queries also.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=33)** Postgres is a backend database for a dynamic websites and web application, quite popular.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=41)** Postgres also supports multiple programming languages, for example, Python, Java, C, C++, C#, Node.js, and many more.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=55)** So for this entire course, we are going to use PostgreSQL as our database to practice and learn our SQL for data engineering.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=68)** Now let's just go to the browser and see how we can download the PostgreSQL software and how we can install it.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=78)** For this purpose, I'm using a Microsoft Windows machine.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=84)** Now go to the [google.com](https://google.com) and search PostgreSQL download.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=90)** Now click on the first link.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=93)** Now here it gives you the multiple option.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=96)** Now based upon the type of machine you have in the operating system it has, you can pick the installer based upon that.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=105)** For example, if you have a Linux machine, you could choose this first option.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=111)** If you have a Apple machine, you can choose this macOS version.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=115)** Or if you have a Windows machine, you can choose this Windows version.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=120)** I have a Windows machine, so I will choose this Window option.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=125)** Now this has taken me to another portal.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=128)** Now here on the first link, you can see that Download the installer.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=133)** Now this download installer is hosted on a different portal, that is EDB, enterprise database portal.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=140)** When you click on this download installer, it will take you this EnterpriseDB portal.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=146)** Now here you can see the multiple versions of the PostgreSQL.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=152)** Now based upon your choice, you can pick any one of them.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=157)** At this point of a time, while I record this, the 16.2 is the latest one, so I'm downloading this.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=165)** It may be possible that when you try, by then a new version has been come.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=171)** So it is completely fine, you can download the latest version, whatever is available to you.
>
> **[2:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=178)** Now here, click on this Windows.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=182)** And it will say that a download will get started.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=185)** Now, here on the top, my download is started.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=188)** It will take a while to download.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=191)** Let me fast forward this.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=194)** Now you can see that the installer has been appear, and it is trying to install something on my machine, that is PostgreSQL 16.2.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=204)** I said it, yes.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=207)** Now the setup has been started.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=209)** It will ask you a couple of options.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=211)** For example, right now you don't have to select anything.
>
> **[3:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=215)** Just click Next.
>
> **[3:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=217)** It will ask you the installation directory.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=220)** It means where exactly this PostgreSQL will get downloaded and installed.
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=226)** So if you want to install it into some different folder, you can choose here a different installation directory.
>
> **[3:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=234)** Otherwise, you can keep it as by default.
>
> **[3:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=237)** For now, I'm keeping it as a default only. Click Next.
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=243)** So now you can see that there are multiple options coming.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=247)** The PostgreSQL comes with server as well as a GUI, that is graphical user interface, to connect with your server.
>
> **[4:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=257)** Here, the post case PostgreSQL server is your server which holds the data.
>
> **[4:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=263)** And to interact with server, you need a interface.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=268)** So that interface is pgAdmin4.
>
> **[4:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=271)** Now if you have earlier worked into the SQL server, there also you have seen a UI-based interface.
>
> **[4:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=279)** That is the SSMS.
>
> **[4:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=281)** So similarly, when you wanted to connect to PostgreSQL, you need an interface, and that interface automatically comes with PostgreSQL.
>
> **[4:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=292)** So for now, you can also connect it via command line and other thing, but let's click on Next for now because we want all of these options to be available on our machine.
>
> **[5:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=304)** Now this time it is asking where the data will get saved, like whenever you save some information, where the data will get saved.
>
> **[5:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=313)** Again, if you want to change the directory path for that, you can choose the path accordingly.
>
> **[5:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=319)** Otherwise, you can keep it default.
>
> **[5:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=322)** Click Next. Now this is asking the password.
>
> **[5:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=326)** So when you login into the server, you need the database username and password.
>
> **[5:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=332)** By default, the username you can see on the top is postgres.
>
> **[5:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=337)** Now the password, you can type of your own.
>
> **[5:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=341)** Let me type a one password.
>
> **[5:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=345)** And click Next.
>
> **[5:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=347)** This is the default code number on which the PostgreSQL works.
>
> **[5:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=352)** If you want to change this port number, you can change it.
>
> **[5:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=356)** Otherwise you can keep it as default.
>
> **[6:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=361)** Click Next.
>
> **[6:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=363)** Now here it is asking you to select the locale.
>
> **[6:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=367)** Let's say if you belongs to a different country and you have a different language and locale, if you want to use it, based on your country specific, you can choose something specific locale, otherwise you can keep a default.
>
> **[6:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=382)** Say Next.
>
> **[6:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=384)** Now you can see that all the directory it is showing, that once you click on the next button and try to install, these are all the directory parts.
>
> **[6:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=393)** So if you want to note it down, you can note it down.
>
> **[6:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=396)** Otherwise, it's fine.
>
> **[6:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=397)** You can simply go and click on the Next button.
>
> **[6:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=403)** Now setup is ready to install.
>
> **[6:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=405)** Click Next one more time to start the installation.
>
> **[6:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=409)** Now installation is getting started.
>
> **[6:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=412)** It will take a while based upon the size of your machine and the configuration of your machine.
>
> **[6:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=418)** It will take a couple of minutes.
>
> **[7:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=421)** And once it is get ready, we'll be ready to start using it.
>
> **[7:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=426)** So let me fast forward this.
>
> **[7:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=430)** So now you can see that our PostgreSQL installation has been completed.
>
> **[7:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=437)** Now automatically if you want to open that Stack Builder, as soon as you click on Finish, it will open it.
>
> **[7:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=445)** If you uncheck this, it will be fine.
>
> **[7:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=447)** So let's for now uncheck that option and click Finish.
>
> **[7:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=451)** So we have installed our PostgreSQL server as well as we have installed the pgAdmin4, a UI to connect to the database server.
>
> **[7:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=462)** So in the next video we will see how we can use pgAdmin4 to connect to the database server and we will have a walkthrough of this interface.
>
> **[7:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/setting-up-the-sql-environment-install-postgresql?u=76281980&t=473)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), interface (7), default. (4), this. (3), this, (2)
> **UI Navigation:** click on (7), go to (2), select the (1)
> **Prerequisites:** install (5), setup (3), set up (1), getting started (1)
> **Env Vars:** sql (4), json (1), edb (1), gui (1), ssms (1)
> **Code Identifiers:** pgadmin4 (3), macos (1)
> **Analogies:** for example (3), imagine (1)
> **Exercise Files:** download the (3)
> **CLI Commands:** python (1), node (1)

#### Walkthrough: PostgreSQL
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=0)** - [Instructor] In the previous movie, we have installed the PostgreSQL server, along with pgAdmin 4.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=7)** That is the UI interface.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=9)** Now let's just go to our pgAdmin 4, the UI interface, to have a quick walkthrough to understand what it contains.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=19)** This is our window for pgAdmin 4.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=23)** On the left-hand side, top corner, here you see Server.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=28)** If you click on this server, it's asking you the password.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=33)** Now here you can see that it is asking the password for the user postgres and to connect to the PostgreSQL 16.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=43)** Remember, this password is the same password which you have given at the time of the installation.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=49)** So I just type in the same password.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=52)** If in case you don't want always to give this password and you want to save it, you can click on save password and the next time when you log in or when you come to the screen, it won't ask you.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=66)** So click OK and you will be allowed to log in.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=70)** Now, once you log in, you start seeing the information.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=75)** Here on the top you can see that this PostgreSQL 16 is your server name and under the server, you have the databases.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=86)** This is login/group roles, so it contains all the users, and this is Tablespaces.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=95)** For example, if I click on this databases, I will see the default databases, which come with the PostgreSQL.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=105)** So far we have not created any of the database.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=109)** So here you can see that we have a default database that is Postgres.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=115)** In the database, you can see here schemas.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=119)** When you click on the schema, under the schema, you will find there are option to create tables, to views, functions and many more things.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=131)** If you go to this database only, and you right click on this, you see the option to create the database of your own choice as well.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=140)** So you can click on the database and you can create your database as well.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=148)** Or, for example, you're already onto this database.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=152)** When you select this database, and on the top, if you call this Query Tool, Query Tool will open up a window where you can write the SQL query.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=163)** For example, if you have any SQL query, if you understand the SQL query, like select * from table, if you give your table name, then this will try to pull the data out of this table.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=179)** You can click execute script here, and in the bottom window, you will see the output.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=186)** So this is the window through which you can write the queries and you can see the output here itself.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=193)** In fact, even if you want to save this query, you can click on the save file and your file at a specific location can be saved.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=201)** So you can save your queries as well.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=204)** If you already have some queries written in some file, and if you want to open it, you can click on this icon to open that specific SQL file.
>
> **[3:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=215)** Besides this, whenever you click on any of the item here, for example, Postgres, which is the database, here you see couple of properties associated with it.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=225)** Here you see dashboard.
>
> **[3:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=227)** So this give information about the databases, like how many sessions of this database is going on, what is the speed, what is the tuples in and out.
>
> **[3:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=237)** If you want to see more properties, you can click on this and that will show you the properties of this databases.
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=243)** If you want to see the query regarding this database, like we call it like a DDL query or like a declaration query of creating the database.
>
> **[4:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=253)** So you can find this, this query is coming for this database.
>
> **[4:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=257)** If you can copy this query, and if you run this query, this will going to create the database with this Postgres name and with all this information.
>
> **[4:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=266)** All this is coming to you automatically.
>
> **[4:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=269)** If you want to see some more statistics about the database, you can find it here.
>
> **[4:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=273)** If you have a dependencies, which you want to identify for all your objects, you can find it here.
>
> **[4:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=280)** In fact, here you see this option, search objects.
>
> **[4:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=284)** If you click on the search objects, and let's say in your database, there are multiple tables, maybe hundreds of the tables, and out of that, you are trying to find out a specific table, what you can do is you can find in here table name, whatever it is, and under the all type, you can select the tables and it will search the tables for you.
>
> **[5:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=308)** So that's how you can use this object search to search either the tables, either functions, views, all the database objects you can search from here on.
>
> **[5:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=320)** If you want to create the tables, you can go to this table section under this schema here, and you can right click on this table option.
>
> **[5:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=329)** And again, you see this option of create table.
>
> **[5:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=332)** So that's how you can create the tables using the UI as well.
>
> **[5:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=342)** Similarly, if you want to create the views, you can create the views also.
>
> **[5:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=347)** Go to the views section, right click on this and create view.
>
> **[5:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=351)** So there are two ways of creating all these tables, views or functions, or stored procedure.
>
> **[5:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=358)** Either you right click here and do through a GUI, that is graphical user interface.
>
> **[6:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=364)** Or you just simply go down to that our SQL query section here, and here you write the query on your own to create the tables, views or the functions of your own choice.
>
> **[6:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=380)** Besides the database, here in the bottom, you see the login as well.
>
> **[6:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=385)** So this login group contains all the users.
>
> **[6:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=388)** For example, here in the bottom, you can see postgres user.
>
> **[6:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=392)** Remember, this is the same user which we have created while installing the PostgreSQL.
>
> **[6:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=400)** So when we were installing the server, that time, it has created this user and we have logged in right now with this user only.
>
> **[6:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=408)** So if you want to see some information about this user, you can click on this and in the dashboards, you will see the information related to this user.
>
> **[6:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=418)** For example, if you click on the SQL, you'll see the query for the creation of this Postgres role for you.
>
> **[7:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=428)** So this is just a beginning.
>
> **[7:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/walkthough-postgresql?u=76281980&t=429)** As we move forward in this course, we'll go in using this tool a lot and you will find it very familiar by the end of this course using this pgAdmin 4.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (15), go to (3), select the (1)
> **Code Keywords:** interface (3), this, (3), let (2), type, (1)
> **Env Vars:** sql (6), ddl (1), gui (1)
> **CLI Commands:** find (7)
> **Analogies:** for example (6)
> **Code Identifiers:** pgadmin (4)
> **Speakers:** - [instructor] (1)


### 3. 2. SQL Basics

#### Introduction to databases and tables
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=0)** - [Instructor] What is database?
>
> **[0:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=2)** I know you must have this question in your mind.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=5)** A database is like a well-organized digital filing cabinet.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=11)** There, we store information.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=14)** It's like a place to keep our data in an orderly manner, so that we can easily find, manage, and update it whenever needed.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=27)** If we talk in more technical terms, a database is a structured collection of a data that is organized and stored in a way that facilitates efficient retrieval, management, and updation of information.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=47)** Let's take a one real life example to understand the database.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=52)** Imagine that if we have a one smart shopping application where people are buying their grocery items using this online app.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=62)** Now, this online app can have a database that is a smart shopping database.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=69)** In this database we can have tables.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=72)** Tables is used to organize your data in a relational manner.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=79)** Here, imagine that you have a different products.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=83)** For example, you have fruit juice, you have electronic items, you have clothes, you have toys.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=92)** It'll have multiple variety of items.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=94)** So a customer can buy any of these product.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=98)** Now you must be thinking, what about the rows inside this table?
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=103)** Because a table ideally should have rows, right?
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=107)** So imagine that a food juice can be a for multiple type.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=111)** It could be apple juice, it could be pineapple juice, it could be orange juice.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=115)** Similarly, you could have a clothes for mens, for womens, for kids.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=121)** So you have a variety of the clothes available.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=124)** So all these clothes probably a part of a clothe table.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=127)** Similarly, all these variety of a fruit juice would be part of this fruit table.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=134)** And then what about the columns?
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=137)** So every table will have a columns, right?
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=140)** So similarly, all these item have some properties.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=143)** For example, every fruit juice have some color, some weight, some price, some ingredients list, et cetera.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=153)** So whatever be the properties of your item is, you will put it as a column in your table.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=161)** So overall you can understand that, how your online shopping store can have a database representation in terms of tables, rows, and columns.
>
> **[2:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=174)** Now let's just go to our pgAdmin 4 and create our first database, and create some tables.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=185)** Now on our pgAdmin 4, let's first create our database.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=190)** To create the database, what we will do is we'll right click on this Database options, and Create, Database.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=199)** Now give the name of your database.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=201)** I just give a name as OnlineStore, and I say Save.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=209)** So now you can see that our online store database got created.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=214)** Now in this online data store, we're going to create the tables.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=220)** So in this online data store, click on Schemas, and under the Schemas, for creation of the tables, right click on this Tables and say Create, Table.
>
> **[3:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=233)** Now we're going to create the table for our online store.
>
> **[3:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=237)** Let's say we have a table called FruitJuice.
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=243)** Now in this table of a fruit juice, we have to add couple of columns.
>
> **[4:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=249)** Now you can give the column name, say Plus.
>
> **[4:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=254)** First column name, let's have id, which will representing the unique id corresponding to every fruit juice we're going to add under this table.
>
> **[4:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=265)** I say this should be of a type of an integer.
>
> **[4:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=271)** If you want to say it's a primary key, select Primary key.
>
> **[4:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=275)** Remember, primary key is a column which uniquely identify every row.
>
> **[4:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=282)** For example, if we have a one table where we're going to store all the people information in the US, then the primary key could be our social security number.
>
> **[4:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=295)** Because the social security number or the SSN would be unique for all the individuals, right?
>
> **[5:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=304)** So similarly, whenever you create a table, generally you have a one primary key.
>
> **[5:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=310)** Primary key helps to identify the unique rules inside the table.
>
> **[5:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=316)** So this id column is representing the fruit juice ID.
>
> **[5:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=320)** That will be a unique one.
>
> **[5:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=323)** And for that I said Primary key is true.
>
> **[5:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=327)** Now let's add one more column that is the name column.
>
> **[5:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=331)** Here we are trying to save the name of fruit juice.
>
> **[5:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=336)** Now for this, the datatype could be the varchar.
>
> **[5:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=339)** Varchar is a variable character.
>
> **[5:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=343)** Now directly, there is no varchar option coming here.
>
> **[5:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=347)** It's character varying is equal to varchar.
>
> **[5:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=350)** So if you have any exposure to any of the databases, a varchar is here.
>
> **[5:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=355)** You can represent it like character varying.
>
> **[5:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=359)** You can give the precision, let's say a hundred character length.
>
> **[6:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=363)** Let's have a one more column.
>
> **[6:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=365)** This time, let's say I have a price column.
>
> **[6:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=368)** Again, price, I want it to be of an integer type.
>
> **[6:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=371)** So it's an integer, and this cannot be a null.
>
> **[6:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=376)** And name also I want to be a not null, means is I want that every fruit juice, which you are trying to store, have at least a name and have a price.
>
> **[6:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=388)** So that's why we are saying the column name here is as a not null.
>
> **[6:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=395)** And let's say Save.
>
> **[6:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=398)** Now this has created a table called FruitJuice.
>
> **[6:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=403)** And here you can see a corresponding query for the same.
>
> **[6:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=408)** Now on the FruitJuice, right click and you can see Count Rows.
>
> **[6:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=414)** Now as soon as you try to do a count rows, on the right side bottom corner, you can see that the total row count is zero.
>
> **[7:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=424)** Because we have just created the table, we have not stored any rows inside it.
>
> **[7:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=431)** Select this table and click on this All Rows option.
>
> **[7:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=437)** Here you can see that a query comes up, which is trying to select from the table and showcase all the rows.
>
> **[7:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=448)** Many times you're going to utilize this window a lot.
>
> **[7:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=453)** Reason is this is a very popular way of writing the queries and accessing the tables.
>
> **[7:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=462)** If you want to add the rows through a UI, what you can do is you can click here, Add Rows, and you can add some rows.
>
> **[7:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=471)** Say ID is 1.
>
> **[7:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=474)** The name of a fruit juice, let's say I call it like OrangeJuice.
>
> **[8:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=481)** And the price for the OrangeJuice is let's say $100.
>
> **[8:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=485)** Let's have add a one more row.
>
> **[8:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=489)** I call the ID as 2.
>
> **[8:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=491)** And this is something like AppleJuice, and the price is, let's say $200, and done.
>
> **[8:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=502)** Now click on this Save Data Change, so that the rows which you have inserted get saved.
>
> **[8:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=509)** Now if you run again this query, you will see the two rows got printed.
>
> **[8:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=516)** That is OrangeJuice and the AppleJuice.
>
> **[8:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=520)** So that's how you can create the tables, create the databases, and insert the rows into our PostgreSQL database server.
>
> **[8:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=532)** This forms the foundation of data storage in SQL.
>
> **[8:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=536)** Let's dive into the basic SQL syntax and how to write queries to fetch data in the next video.
>
> **[9:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-databases-and-tables?u=76281980&t=544)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), type. (2), this, (1)
> **Analogies:** imagine (3), for example (3), it's like (1)
> **UI Navigation:** click on (5), go to (1)
> **Definitions:** is a  (5)
> **Env Vars:** sql (2), ssn (1)
> **Code Identifiers:** pgadmin (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)

#### SQL syntax and basic queries
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=0)** - [Instructor] It's important to understand the SQL syntaxes and write some few queries.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=6)** Now before moving forward, we need to set our stage.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=11)** We have already created a database that is online store.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=17)** Let's have some meaningful tables get created.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=20)** Inside this database, we'll have a table like categories, which will store the type of products.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=29)** For example, it could be electronics, it could be clothing, it could be household stuff, something like that.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=37)** Then we create one more table that is for product.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=40)** It will store the product like the cloths, the electronics items, etc.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=47)** And all this product is a part of some category.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=52)** Then we have a customers who's going to buy this product and the order which capture which customer has bought which product.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=62)** So let's have this meaningful tables it created, which we're going to use throughout this entire course.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=68)** Now, once we created this table, let's insert some dummy data inside it and then we start fetching the data and playing with it.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=78)** So before getting late, let's jump to our PG admin four and start creating these tables.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=87)** Now this is our PG admin four.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=90)** We are already into our online store database.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=94)** Inside this, we have tables.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=96)** Now this time let's start writing the SQL to create all those tables and insert the data.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=103)** For that, I have selected this online store and click on top of this query tool.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=110)** Now a query window will get up here.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=113)** I'm going to write all the queries here.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=116)** So whenever you want to create the table, the command is create table and you have to give the table name.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=124)** For example, the first table which we want to create is categories.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=129)** Now this categories table will have a two column.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=132)** One is we call it id, and this will be let's say have a serial primary key.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=142)** Now you must be thinking what is the serial primary key?
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=147)** Now this serial primary key is like autogenerated IDs.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=153)** So this will be an autogenerated ID.
>
> **[2:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=156)** Whenever you insert any new row into this category table, automatically, a sequential number get started.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=163)** For example, for first row, the ID will become one.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=167)** For second row, it'll become two, and so on, so forth.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=172)** So instead of this just id, let me give this name as category_id.
>
> **[2:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=178)** Now, I want to have a one more column and let's say column name is name, which is storing the category name.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=186)** And the data type is varchar.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=189)** Now, varchar is a variable character.
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=192)** It means that if there 100 characters you try to store as the name, it'll take the space of 100 characters.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=201)** But if you have a less number of characters in your name, then it will occupy less space.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=209)** We are restricting that, the maximum width would be 100 characters and that's it.
>
> **[3:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=216)** Now click on this execute script button.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=220)** What it's saying, there is one error.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=223)** The error is, I forget to put the comma here.
>
> **[3:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=228)** Done.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=230)** So our table got created.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=232)** This is first table get done.
>
> **[3:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=235)** Let's create the next table for the product.
>
> **[3:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=238)** To save the time, I have copied the product table query here.
>
> **[4:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=244)** In this, we have a product_id, which is again like a serial primary key.
>
> **[4:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=250)** We have a product name that is again, varchar.
>
> **[4:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=254)** We have product price.
>
> **[4:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=256)** I have selected it of type decimal because product price can be of a decimal type, right?
>
> **[4:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=262)** I mean, you can have a value which is a point in itself like 20.5, 20.6, something like that.
>
> **[4:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=271)** That's why we have the price is decimal description again as a varchar.
>
> **[4:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=281)** Tags, varchar.
>
> **[4:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=283)** And this time, I said it, right?
>
> **[4:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=286)** That a product belongs to a category.
>
> **[4:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=290)** Every product is a part of some category, right?
>
> **[4:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=293)** So how we references that, we have a category_id column here and we are enforcing the integrity constraint that is a foreign key.
>
> **[5:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=302)** We're saying that whatever be the category_id, you will put this category_id should be available in this category table.
>
> **[5:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=312)** So I'm saying that I have a foreign key that is a category_id which is referencing the category table and category-id column.
>
> **[5:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=324)** So if at any point of a time, you try to insert any row into the product table where the category_id does not exist in the category table, it'll not allow you to insert.
>
> **[5:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=338)** That is what the foreign key constraint here.
>
> **[5:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=342)** And then we have just a one more column, that is a supplier column.
>
> **[5:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=347)** I'll just select this query and say execute.
>
> **[5:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=352)** Now one more table got created.
>
> **[5:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=355)** Now let's create one more table that is the customer.
>
> **[5:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=359)** So this is the query for the customer table.
>
> **[6:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=362)** Customer, customer_id.
>
> **[6:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=365)** Again, I give it like a serial primary key so that customer-id will automatically generated and like an incremental manner, customer_name, email, phone_number, address, and the city.
>
> **[6:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=381)** Let's just run this and this will create our customer table.
>
> **[6:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=388)** Now lastly, we have to create our orders table.
>
> **[6:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=392)** And this is the query for orders table.
>
> **[6:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=394)** Create table orders, and then we give order_id, customer_id, all information about the order like total_quantity, total_amount, order_rating.
>
> **[6:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=406)** If you notice here we have added this customer_id and product_id because order cannot get created without the customer_id and the product_id.
>
> **[7:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=420)** A customer is buying something, right?
>
> **[7:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=422)** That is the order.
>
> **[7:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=425)** Let's add the foreign key constraint here as well.
>
> **[7:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=428)** How we can do that?
>
> **[7:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=429)** We say comma, FOREIGN KEY customer_id is referencing customer table, right?
>
> **[7:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=441)** So you can see that in customer table, we have this customer column.
>
> **[7:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=448)** Similarly for product, I want that the product_id should be referencing the product table.
>
> **[7:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=455)** So I'd say FOREIGN KEY product_id.
>
> **[7:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=458)** Let me copy this, paste it here.
>
> **[7:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=463)** And this is belonging to nothing but a products table.
>
> **[7:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=467)** So I'm saying that whatever be the product_id, you will put it here.
>
> **[7:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=471)** That should belongs to the products table.
>
> **[7:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=475)** Now let me just run this query so that our final table that is the order table also get created.
>
> **[8:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=485)** Done.
>
> **[8:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=485)** So we have created the four tables.
>
> **[8:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=488)** All the tables which we have created so far is empty.
>
> **[8:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=492)** So let's just go and insert some data inside it.
>
> **[8:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=496)** How?
>
> **[8:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=497)** Let me just write a query.
>
> **[8:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=500)** Query would be something like this where I'm seeing that insert into categories table column named name.
>
> **[8:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=511)** The value is electronics, clothing, home and kitchen.
>
> **[8:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=515)** Let me run this.
>
> **[8:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=518)** You can see that three rows got inserted.
>
> **[8:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=521)** If you look at the table, table has two columns.
>
> **[8:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=524)** One is serial primary key, that is category_id and other one is name.
>
> **[8:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=530)** I don't have to worry about this category_id because this automatically get generated, so I have to just insert only the name.
>
> **[8:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=539)** How you will do that?
>
> **[9:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=541)** You write a command INSERT into table name, exact name, the column name, and values, you give all the possible options.
>
> **[9:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=552)** Done.
>
> **[9:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=553)** Now, similarly, let's insert quickly for other tables.
>
> **[9:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=557)** So this is for the product table.
>
> **[9:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=559)** Now, in the product table, I'm saying that my laptop does not have a price.
>
> **[9:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=565)** So I just say null for now.
>
> **[9:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=568)** Description, tags, category_id is one and then the supplier name.
>
> **[9:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=573)** So I just try to insert these five rows inside it and then just say execute.
>
> **[9:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=583)** A five rows will get inserted into our product stable.
>
> **[9:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=591)** Now quickly insert the data into the customer table.
>
> **[9:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=596)** How?
>
> **[9:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=597)** Insert into customer, then all the customer column names.
>
> **[10:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=600)** And under the values, you are providing every row information.
>
> **[10:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=605)** So this is every row information followed by comma so that this second row, then third row like that.
>
> **[10:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=612)** So let's just select all this and say execute.
>
> **[10:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=617)** Our data got inserted into the customer table as well.
>
> **[10:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=621)** Now finally, we have to just insert the data for our orders table.
>
> **[10:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=626)** I have a query.
>
> **[10:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=628)** Again, query written in the very similar manner, insert into orders, that is a table name.
>
> **[10:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=633)** Then you give all the column names.
>
> **[10:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=636)** And after the values, you just provide all the default values for those columns.
>
> **[10:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=643)** And just say execute.
>
> **[10:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=645)** Now you can see that the four rows got inserted.
>
> **[10:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=650)** Now let's just quickly see what is in our table.
>
> **[10:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=654)** For that, you have to just write select * from tables.
>
> **[10:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=659)** So let's start from categories table.
>
> **[11:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=662)** So I will say select * from categories.
>
> **[11:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=665)** When you run that, you will see the information in the category table.
>
> **[11:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=670)** Similarly, let's just quickly see in the rest of the table.
>
> **[11:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=675)** In the orders table, in the customer table, and in our products table.
>
> **[11:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=687)** So you just write the command, select * from products.
>
> **[11:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=690)** You see product information.
>
> **[11:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=693)** You do it for the customer.
>
> **[11:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=695)** You see customer information.
>
> **[11:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=698)** And you do for the orders table.
>
> **[11:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=700)** So you see the orders information.
>
> **[11:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=703)** Hence, we have loaded the data successfully into our tables.
>
> **[11:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=709)** Now you must be thinking that every time, it doesn't make sense to pull out all the data.
>
> **[11:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=715)** You are not looking to fetch all the data all the time.
>
> **[11:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=719)** You are completely right.
>
> **[12:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sql-syntax-and-basic-queries?u=76281980&t=721)** So in the next video, we will see how we can filter these records and fetch only the information which we are looking for.

> [!info]- Semantic Content
>
> **Code Keywords:** let (22), this, (3), type, (1), this. (1), finally, (1)
> **Code Identifiers:** category_id (9), product_id (6), customer_id (5), customer_name (1), phone_number (1)
> **Definitions:** is a  (8), means that (1)
> **Env Vars:** sql (2), foreign (2), key (2), insert (1)
> **Analogies:** for example (3)
> **SQL:** foreign key (2)
> **Versions:** 20.5 (1), 20.6 (1)
> **UI Navigation:** click on (2)

#### Selecting and filtering data
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=0)** - [Narrator] Sometimes, as a business owner, you are not only interested in identifying all the information, but you might be interested in getting a curated information.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=13)** For example, you might just want to only know the product name and product prices.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=20)** You don't worry about the other informations.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=25)** Or maybe you might want to identify all the orders which has been generated for a specific category.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=34)** Or maybe you are looking for all the items which start with some specific name.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=42)** In those cases, you can utilize the power of the SQL by using the filtration.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=51)** Let us just see how we can use it.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=55)** We have all of our tables already got created.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=58)** Let's click on this query tool again and let's have another window, or a clean window.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=65)** Now, if we want to see only the product's name and the price, what we can do is we can select, instead of doing select star from product, which will show you all the columns, we can select only the specific column.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=87)** Example, we can just say name, price.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=93)** Now, when you run this query, you will see only the relevant columns.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=99)** So sometimes you don't want a full list of column to be printed out.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=105)** You want only a certain column list.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=108)** In that case, you can pass all those columns by separating by commas like this.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=115)** Maybe, let's say for example, we are interested in identifying all the orders where the order amount is greater than some specific number.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=129)** How we can do that?
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=131)** If we just look at this entire table of the order, this looks something like this.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=140)** Now, in this, we have a column called total amount.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=144)** What we can do is we can say select star from orders where my total amount is greater than, let's say, 100.
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=158)** So I may be interested in identifying all the orders where the total amount is greater than 100.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=169)** Now you can see that here we have used the where clause.
>
> **[2:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=174)** Where clause in the SQL is used to filter out the things.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=180)** If you use the where condition in that, you can pass a condition statement and all the records will get filtered out based on that condition.
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=192)** In this example, all the records filtered out based on the condition of total amount greater than 100.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=201)** Now let's just see little more around the customer table.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=207)** Let's print select star from customer.
>
> **[3:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=210)** Let's have all the rows first.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=214)** Now, out of this customer, let's say I am running some lucky draw, and there I am looking for all the people whose name is starting with A.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=225)** How I can find it?
>
> **[3:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=227)** I can see select star from customer, where my customer_name, that is my column name.
>
> **[3:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=239)** I misspelled it.
>
> **[4:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=241)** Customer_name like.
>
> **[4:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=244)** So whenever you have some kind of a string format and there you try to do the matching, you can use the keyword called like, and there you can say something like a person.
>
> **[4:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=258)** So person is a wild character.
>
> **[4:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=261)** You are saying that let's find out all the records where the name starts with A, and after that it doesn't matter.
>
> **[4:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=270)** Now, if I run this query, if you look at it, we get only one record.
>
> **[4:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=276)** And here it is.
>
> **[4:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=277)** So there are a lot of variety of conditions you can put, and through this, you can manipulate of which type of data you want to get it back from your tables.
>
> **[4:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=292)** Now, this maybe looks cool, but imagine that your requirement is you want to find out all the records in a specific order, not just a name, but in a specific order.
>
> **[5:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=308)** How would you do it?
>
> **[5:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/selecting-and-filtering-data?u=76281980&t=309)** In the next video, we talk about how we can fetch the records from the tables in an orderly manner.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), pass (2), this. (2), this, (2), case, (1)
> **CLI Commands:** find (3)
> **Analogies:** for example (2), imagine (1)
> **Env Vars:** sql (2)
> **Code Identifiers:** customer_name (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### Sorting data with ORDER BY
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=0)** - [Instructor] Your inventory might get a bit messy sometimes.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=5)** Sorting data is like arranging your products on the shelf in logical order.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=11)** For example, assume that in your e-commerce store, you want to identify all the product based on their prices.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=21)** Maybe you are interested into finding the product which are most expensive and products which are most affordable.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=31)** In that case, probably you are looking for and help from the SQL to get this order using the order by.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=41)** Let's just go to our pgAdmin 4 and see how we can achieve this business use case in SQL using the order by.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=53)** Let's just click again on this query tool to open a new window.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=58)** Now we wanted to find out all the product but based on their price from low to high.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=68)** So what you can do, you can say select * from product and here you say order by and you give the column name on basis of which you want to do the ordering.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=85)** For example, I want to order by or sort this table result based on this price column.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=94)** I will just execute this and you can see that.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=98)** The prices is coming something like this: 49, 79, 129 Forget about these last two records, but because it's a null, so when something is null is there, they don't know whether it could be a greater or a lesser.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=115)** So that is not getting come onto the top.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=118)** It has been considered towards the last.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=123)** Similarly, let's say you wanted to find out all the customer name, but you wanted to sort the customer name list based on the alphabetical order.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=136)** So what we can do is, we can do select * from customer and we say order by customer_name.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=153)** If you forget what is the correct column name, what you can do on the left-hand side, you can expand this customer table, expand this column, and here you can see the column name is customer_name.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=169)** So let's run this.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=172)** It'll display all the customer records in an increasing order, that is, first customer name is A, B, C, D, E, F.
>
> **[3:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=183)** So you can see that all the customer name is coming in an alphabetical order.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=190)** Now, sometimes you will say, I am not interested in identifying this customer name in an alphabetical order.
>
> **[3:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=200)** I want it in the reverse order.
>
> **[3:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=203)** How I can do that?
>
> **[3:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=205)** So for doing so, you can just make a simple twist.
>
> **[3:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=212)** You just say here select * from customer order by customer_name.
>
> **[3:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=218)** And then you say desc.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=222)** desc stands for descending order.
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=226)** By default, everything is in the ascending order.
>
> **[3:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=231)** So even when you were not giving any ordering technique, it is considered as ascending order, but now you have explicitly given it as desc.
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=243)** So this is nothing but a descending order.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=247)** Now if you try to execute this, you will see exactly the same result but in the reverse order.
>
> **[4:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=256)** Now you can see that it start from the Frank and ends with the Alice.
>
> **[4:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=262)** Now you might have one more requirement.
>
> **[4:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=264)** You will say that debug, I want to find out the order not on just a one column basis, I want on a multiple column basis.
>
> **[4:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=274)** For example, I want the product information based on the price as well as the product name.
>
> **[4:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=281)** How I can get the ordering based on two columns.
>
> **[4:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=285)** So SQL support ordering based on two columns as well.
>
> **[4:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=290)** What you have to do in the product, we have a column called name and price.
>
> **[4:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=294)** If you want to do the ordering based on these two columns, you can just say simply order by price, name.
>
> **[5:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=304)** What it'll do is it'll first order based on the price and then based on the name, just run this and then you'll see the orders accordingly.
>
> **[5:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=318)** So it's even possible to have a two or more columns to be a part of your order by clause.
>
> **[5:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=326)** In fact, sometimes you might be feeling that when I am trying to get all this sorted information, I don't want this information on the entire data set.
>
> **[5:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=340)** I have some condition and I want to do the ordering based on that condition only.
>
> **[5:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=347)** For example, I want to do the ordering for only for the price of the products where price is more the hundred dollars.
>
> **[5:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=359)** I don't want to sort any product which is lesser than this hundred dollars, how I can do it?
>
> **[6:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=367)** This is also pretty easy.
>
> **[6:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=369)** What you need to do is you can combine the where clause with the order by clause, how?
>
> **[6:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=377)** Just see that select * from products where price is greater than hundred.
>
> **[6:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=385)** And then you see order by based on price or any other column.
>
> **[6:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=391)** So let's say if you run this query, there's a typo in the price spelling, so it's price.
>
> **[6:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=400)** Now if I run this query again, you will see that there is only one record available whose price is greater than a hundred.
>
> **[6:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=410)** So we just see this one.
>
> **[6:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=412)** So it's not like that, that sorting can only be done on the entire set of records.
>
> **[6:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=418)** You can done sorting even on the batch of the records or some small filtered set of the records as well by combining the where clause along with the order by clause.
>
> **[7:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=432)** And another question might have come in your mind.
>
> **[7:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=435)** It would be like, imagine if I want to put more than one condition, maybe like I'm looking for all the products whose prices greater than 50, and product name has to start with some specific character or maybe product has to belongs to some specific category.
>
> **[7:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=456)** How I can do that?
>
> **[7:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/sorting-data-with-order-by?u=76281980&t=458)** So in the next video we'll talk about how you can use the AND and OR condition along with your where clause.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (1), this: (1), this. (1), default, (1)
> **Analogies:** for example (4), imagine (1)
> **CLI Commands:** find (3), make (1)
> **Code Identifiers:** customer_name (3), pgadmin (1)
> **Env Vars:** sql (3)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Definitions:** stands for (1)

#### Combining conditions with AND and OR
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=0)** - [Instructor] Assume that you want to study, but whenever you want to study, you want to have the free time and a course available.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=12)** If both of these things are available to you, a free time and course, then only you will study.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=19)** Now this is nothing but a situation of a logical conditioning.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=25)** Exactly, many times in your business you get into those conditioning and at that time, SQL can help you to retrieve the data based on those conditions.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=40)** And it can be done using logical operators.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=44)** The two most common logical operators in SQL is AND and OR.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=50)** As the name suggests, AND operator, it's something which try to pull the values or become true when the left hand side condition and the right hand side condition, both condition are true.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=68)** For example, you say you study when course is available and when free time is also available.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=78)** Now imagine that in this situation, if you have a free time but course is not available or you have course but free time is not available.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=90)** In both of these situations, you will not study.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=93)** You will only and only study when both of these two things are available or both of these two things are true.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=102)** Similarly, there is one more logical operator, that is OR.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=108)** OR operator says that it will become true if even one of a condition is true.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=117)** For example, imagine that you have a situation where you will say, I will go to the office on weekend only if my manager calls me or my team member calls me.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=135)** If any one of them calls me, I will go to the office.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=140)** Now this situation is an OR situation.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=145)** Here, either your manager is calling or your team member is calling or both of them calls.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=154)** In all these three situations, you will go to the office.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=159)** This could be a simple example of OR operator.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=163)** So whenever you get into a situation where you have to do something, even any one of the condition is true, you can choose a logical operator that is OR.
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=177)** Now you must be waiting on seeing how we can use this into our SQL world.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=185)** So let's just go to our PGAdmin4 and see how we can club it with our SQL.
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=192)** Let's click on a new query tool.
>
> **[3:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=196)** Now imagine that I want to pull out all the product whose price is about, let's say 100 and category is belongs to one.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=211)** So what I can do, I can say select star from product where price is about 100 and then I will use a logical AND operator by saying and, and then I put in another condition.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=230)** That is, I will say category_id is equal to one.
>
> **[3:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=238)** If there is any possible option which is matching this condition, you will see the result.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=247)** We have a products table, so it was just a typo.
>
> **[4:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=250)** Let's just rerun this.
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=252)** Now you can see that we got a one record where the product price is about 100 and category ID is one.
>
> **[4:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=262)** Now imagine that if I just say instead of one, if I say select star from products where price is greater than 100 and category equal to two.
>
> **[4:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=275)** Now there might be possibility that there might not be any records available which have this combination.
>
> **[4:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=283)** In that case it'll give the result as an empty.
>
> **[4:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=287)** Why?
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=288)** Because for few records might be this condition is true, for the few records, this condition will be true, but there is none of the record where both of these condition are true.
>
> **[5:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=300)** Got it?
>
> **[5:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=301)** So this is how an AND operator can be utilized.
>
> **[5:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=305)** Now let's say if we twist this way out, we say that, okay, if both of these condition is not matching, let me pull out all the products where either the product is greater than 100 or the category ID equal to two.
>
> **[5:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=324)** So I will just change this AND operator with the OR operator.
>
> **[5:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=329)** Now if I just run and execute this, now you see you got two records.
>
> **[5:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=337)** Record number first has a price greater than 100, but category ID is one.
>
> **[5:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=344)** If you see the record two, the price is less than 100 but category is equal to two.
>
> **[5:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=350)** So in the first case, condition one is true, condition second is false.
>
> **[5:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=356)** In the second case, condition one is false and condition two is true.
>
> **[6:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=362)** But if any one of the condition is true, this will appear.
>
> **[6:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=366)** Reason is we are choosing the OR operator instead of the AND operator.
>
> **[6:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=372)** If it was an AND operator, we got nothing.
>
> **[6:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=378)** This can be combined either with your text-based column as well.
>
> **[6:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=383)** So far we are checking on the numerical columns.
>
> **[6:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=386)** You can similarly check with the text-based column, like a wildcard character-based column or any other type of column.
>
> **[6:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=395)** In fact, along with this, you can also use order by as well.
>
> **[6:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=400)** You can say that order by product_id.
>
> **[6:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=407)** So whatever be the result comes, it'll have this sorting as well.
>
> **[6:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=412)** So whatever we are learning, we can combine all of these clauses of this SQL in a single query as well.
>
> **[7:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=420)** So, so far we have just touched the surface of the SQL only.
>
> **[7:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=425)** There is a lot to more learn.
>
> **[7:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=427)** In the next video we are going to talk about an interesting thing in the SQL that is the data manipulation.
>
> **[7:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=434)** So far we are just trying to retrieve the information.
>
> **[7:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/combining-conditions-with-and-or?u=76281980&t=438)** In the next video, we will see how we can do the data manipulation in the SQL.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (2), case, (2), this. (1)
> **Env Vars:** sql (8)
> **Analogies:** imagine (4), for example (2)
> **UI Navigation:** go to (4), click on (1)
> **Code Identifiers:** category_id (1), product_id (1)
> **Cross-References:** in the next (2)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Combine filter and ORDER BY
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-combine-filter-order-by?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-combine-filter-order-by?u=76281980&t=0)** - [Instructor] Assume that your retail store is distributing a Christmas gift, and for that, they are looking for all the customers who belongs to the New York region, and they want to get the list of all the customer in their alphabetical order, so that they can arrange some special gift for the Christmas for them and distribute.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-combine-filter-order-by?u=76281980&t=29)** So your task is to find out this list for the customers.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Combine filter and ORDER BY
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-combine-filter-order-by?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-combine-filter-order-by?u=76281980&t=0)** - [Instructor] We have to find all the customer who lives in New York City.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-combine-filter-order-by?u=76281980&t=9)** So how we can do that, just for now, I say select star from the customer and I would say where, the city for them is equal to New York.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-combine-filter-order-by?u=76281980&t=25)** And I also wanted to arrange them based on their name.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-combine-filter-order-by?u=76281980&t=30)** So I would say order by the customer name.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-combine-filter-order-by?u=76281980&t=36)** And that's it.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-combine-filter-order-by?u=76281980&t=37)** So if we execute this, we get all customers who lives inside New York.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** this, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. 3. Data Manipulation

#### Introduction to data manipulation
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=0)** - [Instructor] Data manipulation is an art of altering and playing with the data within your database.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=8)** We use it to add, update, or delete the records, which gives us the power to keep our database dynamic and responsive to changing needs.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=22)** Let's take a very real world example of our e-commerce store.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=27)** Imagine a situation.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=30)** A guy is sitting onto the order punching table, where he is punching the order.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=37)** By mistake, if he has entered a wrong amount in the order, what do you want?
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=44)** You will definitely want a functionality where you can go and change this wrong value.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=53)** Or maybe taking another situation.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=55)** A guy who is entering all the products available into your warehouse.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=62)** By mistake, he has entered the product two times.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=67)** In that case, you want to delete one of the entry, right?
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=72)** So there are a lot of real world situation where you want to make changes in your database.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=80)** Hence, it's very critical to have the data manipulation power with you, and that's come with the SQL.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=91)** Basically, there are three main data manipulation work you do.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=97)** First is insert.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=100)** Imagine a situation, whenever a new product arrives in your warehouse and you want to put this information into your inventory.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=112)** In this case, probably you are looking for inserting the data.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=118)** Similarly, imagine there is a change in the price of the product.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=125)** Earlier you were selling this product at price X.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=129)** Now you want to sell this product as price Y.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=134)** In this case, instead of inserting the new record, you want to change the existing record.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=142)** This can be done through an SQL update statement.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=147)** And another situation.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=150)** Imagine there is one product, which now we have stopped selling, and you want to remove this product out of your inventory.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=160)** In this case, probably, you want to delete this record.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=164)** This can easily be done by using the SQL delete statement.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=171)** Hence, the data manipulation is a pretty important step and plays a very vital role in your database management system.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=182)** Mastering this technique of data manipulation in database world will make you a smart SQL guy.
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=192)** Now let's just go down to the next video, where we'll go and understand how you can use this insertion in different ways.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-data-manipulation?u=76281980&t=202)** Stay tuned, see you there.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (4), case, (4), let (2)
> **Env Vars:** sql (4)
> **Analogies:** imagine (4)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (2)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### Inserting data into tables
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=0)** - [Instructor] Insertion is a technique through which we can add new rows into our tables.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=7)** It can be done in two ways.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=9)** Either you use the pgAdmin 4 GUI or you can write the command.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=17)** Majorly writing through a SQL command is the most popular way of inserting the records, and as a data engineer, it is expected out of you that you must be aware of managing this insertion SQL command.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=35)** Let's just go to our pgAdmin and see how we can do it.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=41)** Let me open up a new query window.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=45)** Imagine that we have a situation.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=49)** A new product has arrived.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=52)** Now we want to add this new product into our inventory of products.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=58)** How we can do that?
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=60)** We will going to use an insert command.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=63)** An inset command has to have a keyword called INSERT, INTO, and then we need to have the table name.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=74)** For example, right now we are trying to insert the data into product table.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=81)** That's why we have mentioned it as Products.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=85)** In case if we were looking to insert the data into the customer table, we might have written the customer here.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=94)** After the table name, we give the list of column names.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=100)** These column names are the name of the column available within the table.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=105)** The good thing is that this column name define the order.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=111)** Here it is not mandatory that you have to give column name exactly in the same order.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=119)** You can give here the column name in any order, but the order between the column name you give here and the values which you provide need to be the same.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=133)** For example, in this case, the first column name which I gave is name.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=138)** So I expect that when I use this values keyword and start giving the information about the new record, this first column should be the name column.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=152)** Second column should be something denoting the price.
>
> **[2:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=156)** The third column should be something denoting the description.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=160)** If there is a mismatch here, then either the wrong value will get inserted or else an error will occur because the column data type might not be compatible.
>
> **[2:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=174)** So let's say for example, I want to store a new laptop.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=179)** I call it like, let's say Ipad.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=184)** And the price for this Ipad is, let's say a hundred dollars description is 'high performance ipad for professionals', the tag is electronics, which I kept electronics, portable, tech, and category is category ID here.
>
> **[3:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=203)** Now remember this category ID 1 is basically the foreign key, you remember?
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=211)** At the time of creation of this table, we have given the category ID as the foreign key.
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=219)** That means if I'm saying 1 category ID, it means that this category ID 1 need to exist in the category table.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=229)** If it does not exist in the category table, it'll cause an error.
>
> **[3:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=235)** And lastly, we provide the supplier information.
>
> **[3:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=239)** Imagine that, let me give a random number, which is, let's say 11.
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=243)** I know that this specific category ID does not exist in the category table.
>
> **[4:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=251)** Now if I just go down here and if I execute this query, you will see an error is occurred.
>
> **[4:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=261)** Although right now this is an error because of a comma, let me rerun this.
>
> **[4:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=267)** Now here you can see that the error comes, insert or update violates the foreign key constraint, it means say, it says that the category ID, which you expect does not exist in the category table.
>
> **[4:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=285)** So what we need to do is, we need to give the category ID something which exists in category table.
>
> **[4:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=292)** If I just come here and if I show you what exists in our category table, let's just see.
>
> **[5:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=303)** In our categories table you will see there are only three records with category 1, 2, 3.
>
> **[5:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=310)** It means I can here give just either 1, 2, or 3.
>
> **[5:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=315)** If I give anything else beside this, it'll be going to cause an error.
>
> **[5:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=321)** Earlier I was trying with 11, which was not exist in category table.
>
> **[5:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=327)** Let's just remove that 11 and gives 1 and try.
>
> **[5:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=335)** This time it works perfectly well.
>
> **[5:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=337)** Even if you want to see, we'll just say select star from products and we should be able to see our newly added record.
>
> **[5:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=351)** Execute.
>
> **[5:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=352)** Here you can see at the end, ID also get automatically added because we have made it like a serial primary key and rest of the information goes as we have added here in the insert statement.
>
> **[6:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=367)** So remember, whenever you want to insert the data into any table, you going to use the INSERT command.
>
> **[6:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=375)** You type INSERT INTO, then table name.
>
> **[6:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=379)** This is not mandatory.
>
> **[6:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=382)** If you want to give the column name, orders, you can define the column name, orders and under the values you can give the values exactly in the same order.
>
> **[6:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=394)** Now let's go quickly and understand what things you need to keep in mind while you do the insertion.
>
> **[6:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=403)** First data types.
>
> **[6:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=405)** Whenever you are inserting, you need to ensure that the values which you are passing should be compatible with the data type defined for that specific column.
>
> **[6:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=418)** For example, if column expect a string, you should pass a string.
>
> **[7:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=423)** If column, expect integer, you cannot pass a string into that integer.
>
> **[7:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=429)** Second thing, you need to consider column matching.
>
> **[7:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=433)** If you are not sure of the column names in the table, take a pause and just check what are the column orders there, using select star from table, you might get the ordering of all those column names and then you can write your insert query matching to that.
>
> **[7:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=453)** Primary key constraint.
>
> **[7:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=456)** Ensure that whatever the values you are inserting for a primary key column has to be unique.
>
> **[7:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=463)** If the value you're inserting for primary key column, if already exist, this insertion will give an error.
>
> **[7:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=472)** Foreign key constraint.
>
> **[7:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=473)** We just saw when we were trying to add the record with a value which does not exist in our foreign table, that is category ID, it was not working.
>
> **[8:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=486)** So ensure that whenever you are inserting, if the table has a foreign key constraint, it should be respected.
>
> **[8:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=495)** Not null constraint.
>
> **[8:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=497)** Sometimes there are few columns which you can set at the time of creation of table as a not null.
>
> **[8:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=504)** And if you try to insert the record and if you keep that column as a null, it would allow you to insert.
>
> **[8:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=512)** So ensure that all the not null columns has a value provided.
>
> **[8:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=518)** Check constraint.
>
> **[8:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=519)** There is a technique where when you define the table that time you can define what condition this column should have using check constraint.
>
> **[8:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=530)** For example, in my product table, I don't want any price should be less than zero.
>
> **[8:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=537)** And if I try to insert any record with value less than zero, it won't allow because in this case the check constraint got violated.
>
> **[9:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=550)** Default values.
>
> **[9:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=552)** Sometimes, like a not null, you can also set the default value.
>
> **[9:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=557)** If you feel that somebody will not insert the column value for this column, an automatically default value should get assigned.
>
> **[9:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=566)** So you can set the default value.
>
> **[9:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=569)** So if you miss to set the column value for that specific column, in that case a record will get updated with the default value.
>
> **[9:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=579)** So these are the some of the important points which you can keep in mind while you are doing insertion.
>
> **[9:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inserting-data-into-tables?u=76281980&t=587)** In the next video, we are going to talk about the updation.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), pass (2), case, (1), this. (1), this, (1)
> **Env Vars:** insert (3), sql (2), into (2), gui (1)
> **Analogies:** for example (5), imagine (2)
> **Definitions:** is a  (3), means that (1), is an  (1)
> **Warnings:** keep in mind (2), be aware (1)
> **Code Identifiers:** pgadmin (2)
> **SQL:** insert into (1)
> **Cross-References:** in the next (1)

#### Updating existing records
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=0)** - [Instructor] Updation.
>
> **[0:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=2)** Sometimes you have the records available in your table and you don't want to insert the entirely new record, but you want to change some specific column value for some specific rules.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=17)** In that case, you can do the updation or you can use the power of update statement in SQL.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=28)** Let's just go to our pgAdmin and see how we can do that.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=33)** Let's open up a new query tool.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=36)** Now, in the previous video, we have added a new record that was an iPad, and if I still show you the value which we have given for that iPad, the price which we have given for that iPad was a $100.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=56)** Now I feel that $100 is a wrong price, right?
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=61)** A iPad should cost somewhere around $500.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=65)** Let us see how I can make this error correction using the update statement.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=75)** There is a keyword called update, or you call update clause.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=79)** So you say update, you give the table name.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=83)** So here the table name is products, and then you use another keyword called set, and then you give the column name.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=95)** For example, here, just want to change the price column only.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=102)** So I would say update products and I will say set price is equal to 500.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=114)** Now, if I execute this query, what it will do, it'll set the price equal to 500 for all the rows available in the table.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=128)** Here, you have to be very careful.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=130)** You have to use the fair condition so that it get updated only to a selected rows only.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=139)** How I can do that?
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=141)** I will say where the product ID equals to seven, because I don't want to change for everyone.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=153)** I just want to change for the row, which having a product ID equal to seven.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=160)** In the bottom you can see that the iPad has a product ID seven.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=166)** Now, if I execute this query, this query will execute the price equal to 500 for only a single row.
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=177)** Let me execute.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=179)** Done.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=180)** And if I just rerun my select statement, you can see that the price has been changed for iPad.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=188)** Now the price for the iPad is $500.
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=192)** Sometimes you don't only want to change a one column value, you also want to change multiple column values.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=201)** In that case also, this statement remains the same.
>
> **[3:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=205)** Assuming we want to change the price as well as the category ID, how would I do it?
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=213)** I will say update products.
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=219)** Set price is equal to let's say 700, and then for the second column, I give comma and the second column name.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=230)** I will say category under score ID is equal to two.
>
> **[3:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=236)** And again, I will say fair product underscore ID equal to seven.
>
> **[4:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=246)** Now if I execute, this will going to make two changes.
>
> **[4:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=250)** First, it'll change the price.
>
> **[4:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=254)** Secondly, it has changed the category ID as well.
>
> **[4:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=258)** Earlier, the category of the product was one.
>
> **[4:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=262)** Now the product category will become two.
>
> **[4:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=266)** But remember, even when you're doing the update, the referential integrity or the foreign integrity constraint need to be respected. \ Here even in the case of update, I cannot give any random value to category ID.
>
> **[4:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=283)** I still have to give the category ID, which is available into the category table.
>
> **[4:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=291)** So that's how it is easy to update any existing record into the table.
>
> **[4:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=297)** Now let's just quickly see what things you need to keep in mind while you do the updation.
>
> **[5:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=305)** The first and the foremost thing, which you need to keep in mind is the where clause.
>
> **[5:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=310)** This is a pretty common error which lot of developers do, which I have seen in front of my long 16 years of career.
>
> **[5:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=319)** When people execute the update query on the fly, they forget to add the where clause, and the problem happens, instead of a one record, it will update all the record in the table.
>
> **[5:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=332)** So ensure before executing update, you have the where clause added.
>
> **[5:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=338)** Next is data type compatibility.
>
> **[5:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=341)** Again, for example, we were setting the price equal to 500.
>
> **[5:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=346)** Here again, you have to ensure that the column value which you're providing is as per the column data type.
>
> **[5:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=354)** If in the price column I would try to a string value, it will give me an error.
>
> **[6:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=360)** So remember, every time you set the value, you have to ensure it is complying the data type.
>
> **[6:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=370)** Next is constraint adherence.
>
> **[6:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=373)** Remember when we were adding the category ID, I said we have to ensure that whatever be the value you are changing, the new value should still follow the constraint.
>
> **[6:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=385)** For example, the foreign key constraint, ensuring that even the new value which you're inserting in the column has to be available into the foreign table Impact assessment.
>
> **[6:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=399)** This is a very good point.
>
> **[6:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=402)** Whenever you are making the change using update, remember that it could have an impact.
>
> **[6:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=408)** So before executing an update statement, calculate what impact it could have.
>
> **[6:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=414)** There may be multiple people reading the value of this specific row, and if you change it, it can impact multiple systems.
>
> **[7:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=423)** So proper impact assessment need to be done before updating any specific record.
>
> **[7:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=431)** Backup consideration.
>
> **[7:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=432)** Sometimes you feel that when you try to run this update query, something can go wrong.
>
> **[7:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=440)** So to avoid any chances of that, you want to take a prior backup of it.
>
> **[7:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=446)** So what you can do before executing update statement, you can take the backup of it.
>
> **[7:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=453)** Performance implication.
>
> **[7:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=455)** Imagine that if you have to update all the rules for millions of records in a table, then it has a performance implication.
>
> **[7:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=465)** So before executing your update statement, also consider what performance impact it can bring.
>
> **[7:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=473)** Consider that and then accordingly take a call.
>
> **[7:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=478)** Now after insertion and updation, it's time to understand how you can remove the records from the table entirely.
>
> **[8:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/updating-existing-records?u=76281980&t=488)** In the next video, we're going to talk about how you can delete records from the table.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), type. (2), case, (1), delete (1)
> **Code Identifiers:** ipad (7), pgadmin (1)
> **Definitions:** is a  (4)
> **Analogies:** for example (3), imagine (1)
> **Warnings:** keep in mind (2), common error (1)
> **CLI Commands:** make (2)
> **Cross-References:** previous video (1), in the next (1)
> **Env Vars:** sql (1)

#### Deleting records from tables
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=0)** - [Presenter] To make any space for a new data to come, sometimes you want to delete the old items and whenever you want to delete the old items from your table, you can use the delete statement.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=18)** We have seen insertion, we have seen updation.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=22)** Now let's see the deletion on how you can delete the specific records from the table.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=29)** Let's go back to our pgAdmin.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=32)** For deleting any records from your table, you can use the delete command.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=38)** So you use delete, and then you have to tell from which table you want to delete.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=46)** So you will say delete from and then you will use table name.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=52)** Now the table name here is Products.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=57)** Now if you just execute this specific statement, what it will do is it will try to delete all the items from the table or all the records from the table.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=72)** And I'm sure you don't want to do that, right?
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=75)** So if you want to delete a specific item from the table, you need to use the where clause because with the help of where clause, you filter the data only which you want to delete.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=90)** So you will say, where my product_id = 7.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=98)** Now what it will do, it will first try to search all the record, which is matching this condition, and then it will delete all of these records.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=110)** For example, in this case, for product_id = 7, we have just one record.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=118)** So when you try to execute this statement, it will go into delete only one record.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=125)** Let me click on this Execute button and see.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=129)** In the bottom you can see that it is mentioned, DELETE 1.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=134)** Hence, it is mentioning that there is only one record which got deleted.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=140)** There may be a situation occurs where you want to delete all the records.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=148)** And whenever you want to delete all the records from the table, you can use something like delete from table name.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=157)** Let's remember in the very first session, we have added the FruitJuice table.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=163)** Let's delete that.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=165)** When I try to execute the statement, it will say that fruit juice does not exist.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=172)** Let me just refresh this table here and see.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=176)** Do we still have this FruitJuice?
>
> **[3:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=183)** Let me pull up the exact name.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=185)** Maybe I'm giving a little wrong name and let me run this.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=191)** Now you can see that it has deleted the two rows from the FruitJuice table.
>
> **[3:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=198)** But here, you have to ensure one thing.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=201)** Whenever you try to delete all the records from the table, instead of using the delete statement, you should use truncate.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=211)** So you could have been called something like this, truncate,
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=230)** and give the table name.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=232)** This will truncate your entire table.
>
> **[3:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=236)** Now there is a shuttle difference between the truncate and the delete.
>
> **[4:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=242)** Delete takes more time compared to the truncate.
>
> **[4:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=246)** Truncate is much faster than the delete.
>
> **[4:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=250)** So imagine that if you have a millions of recording of one table and you have been asked to delete all the record from this table, in this case, it makes sense to use truncate command instead of delete command, because truncate command will delete all the records to a table in fastest manner compared to the delete statement.
>
> **[4:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=275)** There is also a one more command that is a drop command.
>
> **[4:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=280)** Delete command, remove only the record, but it doesn't delete the table.
>
> **[4:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=286)** That means the table structure still exists.
>
> **[4:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=290)** Even if you go and insert the record into this table, you can do it, but once you drop the table, you cannot insert new record into the table because dropping the table will delete the data as well as the structure of the table.
>
> **[5:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=309)** For example, we have delete and truncated the data from this FruitJuice table.
>
> **[5:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=315)** Even when I... On the left hand side, if I refresh this table list, I still can see a FruitJuice table.
>
> **[5:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=323)** But instead of that, if I execute this command, drop table, and if I just give this table name, and when I execute this command, this will delete the table as well.
>
> **[5:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=344)** Now if I come down here on table and I refresh, my FruitJuice table has been gone because drop command not only delete all the records from the table, but also delete the structure of the table.
>
> **[6:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=360)** So remember, whenever you want to delete only the records, use delete command, and when you have to remove the entire table itself, then you have to choose the drop command.
>
> **[6:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=372)** Deleting or dropping is a very critical steps because this can have a big impact on your database.
>
> **[6:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=381)** So you have to consider a couple of things before doing this operation.
>
> **[6:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=387)** So things to consider.
>
> **[6:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=389)** Again, the first thing and the most important, put a where clause because if you don't put the where clause along with the delete command, it will delete all the records.
>
> **[6:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=402)** Another is referential integrity.
>
> **[6:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=405)** Sometimes you are deleting few records which is referenced by any other table.
>
> **[6:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=412)** For example, let's say you trying to delete the category records from category table, but in the product table there are few records which is pointing to this category records.
>
> **[7:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=425)** In this case, wherever you make a deletion of this main table, ensure that all that child table does not have those record referenced.
>
> **[7:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=438)** Third, impact assessment.
>
> **[7:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=440)** If you are removing something out of your database, ensure that what impact it will have.
>
> **[7:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=446)** So we do proper impact analysis.
>
> **[7:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=450)** Backup consideration, because once you delete the data, you cannot recover it.
>
> **[7:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=456)** So ensure that you take the manual backup and then you delete it.
>
> **[7:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=462)** So that in case if you want to revert it, you have the option to revert.
>
> **[7:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=468)** Lastly, another technique people uses is soft delete.
>
> **[7:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=474)** In the soft delete.
>
> **[7:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=475)** Instead of actually removing the record from the table, they keep a one extra column into the table and they will mark that column as a true or false.
>
> **[8:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=488)** If this active flag or a delete flag column, it's set to be true.
>
> **[8:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=493)** It means that this record is actually deleted, but it's a soft delete.
>
> **[8:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=500)** So by this, we have finished our data manipulation strategies.
>
> **[8:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=506)** We have covered insertion, updation, and deletion, and you have got the power to play with your database and make it clean and healthy.
>
> **[8:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=519)** Now the time has come to shift the gears.
>
> **[8:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=522)** In the next video, we are going to step you into the advanced part of this SQL.
>
> **[8:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/deleting-records-from-tables?u=76281980&t=529)** There, we are going to talk about the joins.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (45), let (9), case, (3), this, (2), this. (1)
> **Definitions:** is a  (3), means that (1)
> **Analogies:** for example (3), imagine (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** product_id (2), pgadmin (1)
> **Env Vars:** delete (1), sql (1)
> **Cross-References:** go back to (1), in the next (1)
> **API Endpoints:** delete  (1)

#### Challenge: Delete records
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-delete-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-delete-records?u=76281980&t=0)** - [Instructor] It has been detected that one order with the ID #10 has been poached into the system, which is an incorrect order, and this order has to be removed from our order list.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-delete-records?u=76281980&t=19)** And your task is to remove this order ID #10 from our orders table.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Delete records
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-delete-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-delete-records?u=76281980&t=0)** - Remove the order.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-delete-records?u=76281980&t=7)** With ID 10, we can just say, "delete from orders where order_id = 10."
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-delete-records?u=76281980&t=19)** Now, if any order with this ID exists, we'll get delete.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (2)
> **Code Identifiers:** order_id (1)
> **Speakers:** - remove (1)
> **Non-Speech:** (upbeat music) (1)


### 5. 4. Advanced Data Querying

#### Introduction to joins
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=0)** - [Instructor] We're trying to complete a puzzle but found that pieces are spread all over the place.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=8)** It can be pretty tricky to keep the big picture when everything's scattered, right?
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=15)** Well, in the world of handling information, SQL joins are like our best friends that help us bring all the puzzle pieces together in one neat picture.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=28)** Let's understand with a real-world example.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=32)** That is a pizza party.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=34)** Imagine you are planning the perfect pizza party.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=38)** In one corner, you have a list of guests, and in the other, a menu with dishes.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=45)** Now, wouldn't it be amazing to combine these lists and know exactly who is craving for what?
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=54)** That's what SQL joins do.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=56)** They bring your tables together, like the perfect pairing of guest and their favorite dishes.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=63)** In the nutshell, SQL joins are used to combine data or rows from two or more tables based on common fields between them.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=74)** The relationship between the tables are established using keys, which can be primary or foreign keys.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=82)** Overall, there are four types of joins.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=86)** First one is inner join.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=89)** Inner join, it's something when you do, it'll try to written the records that have matches values in both the tables.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=99)** Left join.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=101)** Left join is something when you do on two tables, it will try to get all the records from the left hand side plus the records which are matching in both the side of the table.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=115)** Right join.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=116)** Right join will try to pull the records which are matching in both the tables plus all the records which are there in the right hand side table.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=127)** And full outer join, it will try to get all the records which are matching plus all the records which are there in the left side table, and all the records which is there in the right hand side table, irrespective whether they are matching or not matching.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=146)** So at this point, we have just talked about all these four types of join at a very high level.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=152)** As we move forward in this course, we are going to talk about all of these joins and we'll see the practical implementation of the same.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=160)** Now before moving towards the implementation of the joins, let's understand few important aspects about the join.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=170)** Why everybody's talking about the joins and why it is critical.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=175)** Joins actually combines the data.
>
> **[2:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=178)** Join allows you to merge the data from two or more table based on a related column.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=185)** It helps you to create a single output table with combined information that could be pretty crucial in many of the business aspects.
>
> **[3:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=196)** Joins helps you to do the analysis.
>
> **[3:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=200)** It increases the power of your analysis.
>
> **[3:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=203)** By combining the data from multiple tables, you will get the detailed analysis and get the deeper insights of the business.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=214)** Join helps in establishing the relationship between different tables in the databases, which is crucial for maintaining the data integrity and understanding how different data element interact with each other.
>
> **[3:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=231)** Joins improve the efficiency of the database queries as well.
>
> **[3:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=235)** Imagine that if you want to retrieve the data by joining the two tables together and without using the join, if let's say you are using some form of a query or some form of sub-query, or maybe you are fir multiple queries and then joining in some custom way, probably that might not be an efficient solution.
>
> **[4:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=258)** So join will help you to get that information in an efficient manner.
>
> **[4:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=265)** Last but not the least, real-world application.
>
> **[4:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=269)** Joins are widely used in real-world applications, such as generating reports, combining user data with transaction data in e-commerce or in insurance company, or you can take any use case.
>
> **[4:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=284)** This can be applicable almost in all the industry examples.
>
> **[4:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=290)** So what are you waiting for?
>
> **[4:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-joins?u=76281980&t=292)** In the next video, we are going to dive deep into understanding how we can run the inner join and take the advantage of it.

> [!info]- Semantic Content
>
> **Analogies:** picture (2), imagine (2), such as (1)
> **Code Keywords:** let (3), case. (1)
> **Env Vars:** sql (3)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Inner join explained
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=0)** - [Instructor] An inner join is like a selective friend who introduce you to the people only if they have common interest with you.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=11)** In the world of databases, it connects two tables but only share the information where there is match in both of them.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=22)** If a row in table A has no matching record in table B, that data won't make it to the final table created by inner join.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=35)** Inner join basically tries to get the intersection of two tables.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=40)** It tried to find out the common records between both of these two table based on the condition which you have provided.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=50)** Inner join also helps you to eliminate all the unmatching rows.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=56)** You want to combine two tables and want to eliminate the unmatched rows.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=61)** That can also be done using the inner join.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=66)** Inner join also helps for the efficient retrieval.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=71)** Remember that.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=72)** If you don't use the join and maybe you have a custom solution build where you put your own multiple queries to get the match data, probably that will not be an efficient way.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=86)** However, if you go ahead with using the inner join, it will be an efficient way.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=94)** Many times when you see the query, few people write INNER JOIN and few people just write JOIN.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=104)** JOIN is same as INNER JOIN, so it's a shortcut for INNER JOIN.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=110)** So when you look at somebody's code, don't get confused that it has just written a join and not an inner join.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=119)** Now let's go back to our PG Admin 4 and see how we can write the join queries and get the advantage of this.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=130)** Click on the query tool and open a new query window.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=135)** Let's imagine a use case.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=138)** We already have an order data.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=140)** You can see on the left-hand side order tables have order ID, customer ID, product ID, and further columns.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=149)** So let's say we want to find out what are the products which has been bought?
>
> **[2:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=156)** Now if any product which has been bought, it means that the product ID, which is available in the Product table, should match with the product ID which is available in the Orders table, because when we combine Orders table and Product table, then we can get to know that for these product IDs, the order has been placed.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=182)** It means these are the products which has been sold.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=187)** So let's start writing a query.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=188)** We'll say select, and assume that I'm only interested in getting the product name only.
>
> **[3:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=196)** So I will say, let's go to this product table on the left hand side and see what are the columns in this product table.
>
> **[3:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=205)** So the column name is name only.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=207)** So I will say just name, comma.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=211)** I want the description as well, so I will say description, and let's say I also wanted to know what is the total amount for this.
>
> **[3:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=224)** So I will here say total_amount.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=230)** From which table I want to find it out?
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=232)** I want to find it out from the join of Orders, and I will say INNER JOIN with Products table on,
>
> **[4:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=245)** and then you say on.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=247)** So here what we say Orders table we'll give an alias, so we'll say O for orders, and alias P for products, and then I will say p.product_id is equal to o.product_id.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=268)** Now in this case, you can see that Orders table and Product table is joining based on the column product_id.
>
> **[4:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=278)** Now if I just execute this query, I will get the name of all the products which has been bought along with their names, description, and total amount.
>
> **[4:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=294)** So that's how easy it is to join two tables, and we got this advantage of inner join to identify the product which has been bought along with their amount.
>
> **[5:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=307)** Similarly, I can see the relationship between the Customer table and the Order table as well.
>
> **[5:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=314)** I can join this with the Customer table as well.
>
> **[5:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=318)** Let's say I want to find out the name of the customers who has placed some order.
>
> **[5:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=323)** So similarly what I can do is I can get the customer names.
>
> **[5:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=329)** I will write a query here, saying select customer_name, comma, total amount from orders o and this time, instead of inner join, I just say join, and I will say customer on customer c, I'll give an alias, and then I will say c.customer_id equal to o.customer_id.
>
> **[6:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=360)** Just change this, and that's it.
>
> **[6:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=364)** Now, if I run this, I can see that.
>
> **[6:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=369)** These are the four people who has booked the order and total order amount correspondingly is this.
>
> **[6:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=377)** That's it.
>
> **[6:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=378)** I hope you understand how we have did this join and got the data as an intersection from these two table.
>
> **[6:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=388)** There's a twist in the story.
>
> **[6:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=390)** Imagine that if I give you a problem statement that let's find out all the customer name along with the total amount they have paid for the order plus if they have not purchased anything, I still want to get their name, but the total amount say zero.
>
> **[6:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=411)** Got it?
>
> **[6:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=412)** So now your inner join probably will not work here because inner join will try to find only the records which is matched.
>
> **[7:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=422)** So you are wondering how to solve this problem.
>
> **[7:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=425)** Don't worry.
>
> **[7:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/inner-join-explained?u=76281980&t=426)** In the next video, we're going to talk about it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this. (3), this, (2), case. (1), case, (1)
> **Env Vars:** join (6), inner (4)
> **CLI Commands:** find (7), make (1)
> **Code Identifiers:** product_id (3), customer_id (2), total_amount (1), customer_name (1)
> **SQL:** inner join (4), join (2)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** click on (1), go to (1)
> **Analogies:** imagine (2)

#### Left and right joins explained
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=0)** - [Instructor] Left join, as the name suggests, it is a join which has a biasing towards left-hand side Whenever you try to left join two tables, the result will be all the records which matched on the left-hand side and the right-hand side, plus you will still going to get all the records from the left-hand side, which are not even matched with the right-hand side table.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=28)** So here the intention is we want to get all the records out of the left side, irrespective of whether it got matched on the right-hand side.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=39)** If it got matched, we will get the values for those matched right-hand side table.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=47)** If it is not matched, we get the nulls for those unmatched rows.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=53)** Similarly, we have a right-hand side join as well, which we call it as a right joint.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=60)** Right join has a biasing towards the right-hand side.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=64)** Right join will try to fetch all the records, which is matching on both the side of the table and it has a biasing towards right.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=75)** So it pulls all the record of the right-hand side table as well, irrespective of whether it is matching on the left-hand side or not.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=85)** For the matched record, you get the left-hand side column values but otherwise, you will get the nulls.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=93)** Let's go back to our pgAdmin and see how we can use this left side and right side join.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=102)** Let me open up a new window.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=105)** Now, imagine that this use case scenario is we want to get all the customer name, along with the total amount for the orders which they have placed.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=118)** But the caveat is we don't want to lose any of the customer.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=124)** If customer has not bought anything, the total amount you can showcase zero or null in place of it.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=133)** So overall, if you understand, we need a left join here.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=139)** How?
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=140)** What we'll do, we'll say that select customer_name, total_amount
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=149)** from customer c left join.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=155)** So what I'm trying to do, I'm doing left join with orders table, orders o on c.customer_id = o.customer_id.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=172)** Now, in this case, what is happening, all the records which is matching in both the tables will eventually come.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=182)** Plus, all the records from the left-hand side table also come because this is a left join.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=189)** And on the left-hand side, we have a customer and on the right-hand side, we have orders.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=195)** Now let's just execute this query and see what is the output.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=202)** You can see that the output is coming, customer_name, along with the total_amount.
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=208)** Now, the strange thing here is imagine these records are matching.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=214)** That's why you are getting the total amount.
>
> **[3:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=217)** But these records, which is from the customer table and it has no matching available on the right-hand side table.
>
> **[3:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=228)** But still they are coming to the result.
>
> **[3:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=231)** Reason is we have used the left join and on the left-hand side, we have the customer table.
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=240)** That's why all the customer will come.
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=243)** But if no matching found for the right-hand side, right-hand side table column will be replaced with just null values.
>
> **[4:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=253)** So that's how you get all the customer with their total amount if exist.
>
> **[4:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=260)** Now let's see about the product.
>
> **[4:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=264)** We want to identify all the product which has been sold and if they have sold, we want to see the total quantity of these product got sold.
>
> **[4:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=276)** How we can do that?
>
> **[4:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=277)** So remember, we have our orders table and in the order table, you have this total quantity.
>
> **[4:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=285)** So we'll do, we will join our product table with the orders table to get the product quantity sold.
>
> **[4:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=297)** Now, I will say select name, total_quantity.
>
> **[5:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=301)** So I'll say total_quantity from orders right join product.
>
> **[5:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=314)** And let's give the alias as well.
>
> **[5:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=316)** So I give the o for orders and p for products, and I will say right join on p.product_id is equal to o.product_id, and that's it.
>
> **[5:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=334)** Now, if I just go and execute this, you can see I got all the products and I can see the total quantity which has been sold for all of these product.
>
> **[5:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=346)** But you can see that the Fitness Tracker, this is the product, it still came even though there is nothing order available for this.
>
> **[5:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=358)** This happens because we have kept the product on the right-hand side and we are doing right join.
>
> **[6:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=366)** So that's why all the things come first, which is matching.
>
> **[6:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=370)** And then you have coming all the unmatched records from the product table as well.
>
> **[6:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=376)** In fact, if I just change this to left and execute, you will see this fitness tracker will gone because this time, we are doing the left join.
>
> **[6:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=389)** Now, you see, because for that order, there was no matching and you were trying to pull all the orders, not all the products.
>
> **[6:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=399)** So that's the beauty of this left join and right join.
>
> **[6:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=403)** Both of them will do the work exactly in similar manner, but you have to just keep remembering that which table is on the left side, which table is on the right-hand side and accordingly, you will see the change in the result.
>
> **[6:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=417)** So left join and right join you understand.
>
> **[7:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=421)** Now, imagine, you don't want this biasing, you want left table as well, you want right table as well, and all the matching record also.
>
> **[7:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=431)** How would you go forward?
>
> **[7:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=433)** So the answer to this lies into the next video.
>
> **[7:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/left-and-right-joins-explained?u=76281980&t=437)** I'll see you there.

> [!info]- Semantic Content
>
> **Code Identifiers:** customer_name (2), total_amount (2), customer_id (2), total_quantity (2), product_id (2)
> **Code Keywords:** let (5), case, (1), this, (1), this. (1)
> **Analogies:** imagine (3)
> **Cross-References:** go back to (1), next video (1)
> **Definitions:** is a  (2)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### Full outer joins
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=0)** - [Instructor] Full outer join.
>
> **[0:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=2)** As the name suggests it's full.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=5)** So far we were talking about left and right.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=8)** So left was pulling the left side, right was pulling the right side.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=14)** Full outer join says, it'll pull the records from both the tables which are matching and the records which are not matching.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=23)** So it would be like a detailed joining across to table.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=29)** It is used when you have to handle the unmatched rules from both of the tables.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=36)** Imagine a scenario that I want to pull out all the records from the customer table where they have placed some order or they have not placed an order.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=49)** Similarly, I have to pull all the records from the order tables and we have to even find all the orders for which there is no customer matched.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=60)** Let's see how we can do this using full outer join.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=65)** When you wanted to do outer join, the way you going to write the statement will almost remain the same.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=73)** You going to write a query.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=76)** Let's take a previous example of joining the customer and order itself.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=81)** So I will say customer_name, total_quantity
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=89)** from customer c and this time I will say full outer join, and I am doing the join on orders table.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=100)** So it's orders and I've given alias o, and then I give the condition on what basis this joining will happen.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=108)** So I will say c.customer_id, which going to match with o.customer_id and that's it.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=120)** I can just go and simply execute this query.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=127)** Now I can see that I am getting all the customer names and the total_quantity.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=134)** There are few rows for which the total_quantity is coming null.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=139)** These are the records for which you can say that the left hand side table is coming and the right hand side has nothing.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=147)** So here we haven't used the left, but we have used the full outer join.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=152)** So full outer is like the combination of left plus right together.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=157)** In fact, there is also a way to connect more than two tables, how?
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=164)** Let just see.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=166)** Imagine that this orders table have a customer_id as well as the product_id.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=172)** And I want to find out the customer name, the product_name and the total_quantity it has but or the total amount he has paid.
>
> **[3:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=183)** How I can do it.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=185)** So in that case I have to do a join on three tables.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=190)** Now whenever you want to do a join on more than two tables, you will join two tables at a time and then whatever be the result come you will do the join of that result with the another table.
>
> **[3:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=205)** For example, let's say I want to do a join on customer orders and product.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=214)** So I will write something like this.
>
> **[3:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=216)** I will say I need customer_name, I need name of the product, I need total_quantity from, I will say customer c.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=230)** Then let's say we are doing a full outer join.
>
> **[3:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=233)** So I will say full outer join orders o on c.customer_id and o.customer_id.
>
> **[4:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=245)** Now this is a one result.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=247)** Now whatever is coming on after this result, I'm doing an another join.
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=252)** Then I will say this, whatever be the output is coming again, we do full outer join on full outer join with the product p, and p on, we'll say it's products, p on p.product_id is equal to o.product_id.
>
> **[4:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=289)** Now if I try to run this query, there is a small typo of this customer_name.
>
> **[5:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=300)** Here you can see that I am getting all the customer_name and the product_name which they have bought and the total_quantity.
>
> **[5:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=310)** If you look at the first four records, these are the records which is available in all these three tables.
>
> **[5:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=318)** But these are the customer for which there is no order and if there is no order, there is no product and this is one of a product for which there is no customer and no order.
>
> **[5:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=333)** All this is possible because you have kept this full outer join.
>
> **[5:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=338)** So here first we did the join between the customer and the orders using this condition.
>
> **[5:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=348)** Now whatever be the output come on that, again we are doing a join using this product_id.
>
> **[5:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=356)** So this will combine three tables together and you will get the result.
>
> **[6:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=362)** In the real world, it is quite common that people uses three, four, five joins in a continuity.
>
> **[6:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=369)** When there are multiple tables to join and they need the full information across this table, then it is common to join more than two tables.
>
> **[6:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=381)** Now let's just go back to our slides and understand there are few important thing you need to keep in the mind while you play with the joins.
>
> **[6:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=393)** So the first thing which you need to keep in mind is the data model understanding.
>
> **[6:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=400)** You need to be aware of your tables which are joining.
>
> **[6:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=404)** You need to know the structure of those tables.
>
> **[6:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=407)** You need to know what could be the columns on which the joining can be done, what could be the exact column name.
>
> **[6:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=416)** So you need to be aware of all those things while you are playing with the join.
>
> **[7:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=422)** In the join condition, you provide the join condition properly.
>
> **[7:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=427)** For example, when we were joining the tables, we were saying that join on product_id equal to product_id from another table.
>
> **[7:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=438)** So you need to be aware of the join condition which you wanted to put.
>
> **[7:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=442)** If you misplace here that probably you will get the wrong result.
>
> **[7:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=448)** Be aware of nulls.
>
> **[7:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=450)** It's a very tricky part.
>
> **[7:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=452)** When you are joining two tables on the column which contains the null value, then you see little abstract result because null can be matched with anything, right?
>
> **[7:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=464)** So you need to keep track of all the nulls record or while you doing a join you can say that where might this column is not null.
>
> **[7:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=475)** So that you are not picking out all the columns where the specific column is null.
>
> **[8:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=483)** Performance consideration.
>
> **[8:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=485)** Join sometimes could be a very heavy operation.
>
> **[8:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=490)** Imagine that you are joining two tables which is a millions of records.
>
> **[8:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=495)** So when you join two tables which is way large in the size, then you need to understand the performance head before doing that.
>
> **[8:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=505)** Maybe you can think of using the where clause or filter to reduce down the number of the records which you are trying to pull and then maybe you can perform.
>
> **[8:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=519)** Filtering data, that is what the part of the same thing that whenever you are doing join you can still put the conditions, you can use the where clause, whatever be the results come on that you can apply the join.
>
> **[8:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=534)** So sometimes along with the join, you can filter the data as well.
>
> **[8:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=539)** Ambiguous column name.
>
> **[9:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=541)** Sometimes the column name could be a problem.
>
> **[9:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=544)** For example, when we were writing the join our product_id was same in the order table as well as we have product_id column in the order table.
>
> **[9:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=557)** Now both of these two table has the same column_name, product_id.
>
> **[9:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=561)** In those cases, using the table alias and accessing the column using the table alias will help.
>
> **[9:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=570)** Another one is data redundancy.
>
> **[9:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=573)** Sometimes you try to pull out all the columns from both side of the tables and both the tables might have some common columns.
>
> **[9:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=582)** So probably you can think of whether you want to have that redundant data or not.
>
> **[9:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=588)** So you can keep in mind while doing the join that you try to pull out the columns which is not redundant until and unless this is the requirement.
>
> **[10:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=601)** Last but not least, test your queries.
>
> **[10:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=604)** So before moving to the production and before running it onto a very big dataset, you can try your joins query with a some short piece of a data so that if it is working fine or it has some challenges, you get to know early.
>
> **[10:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=622)** That's it.
>
> **[10:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=623)** By this we have covered one of the most interesting functionality in the SQL world that is the join.
>
> **[10:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=632)** But life doesn't stop here.
>
> **[10:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=635)** There is another important functions coming in.
>
> **[10:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/full-outer-joins?u=76281980&t=639)** One of them is the UNION.

> [!info]- Semantic Content
>
> **Code Identifiers:** product_id (9), total_quantity (6), customer_id (5), customer_name (4), product_name (2)
> **Code Keywords:** let (6), this. (1), from, (1), this, (1), abstract (1)
> **Analogies:** imagine (3), for example (3)
> **Warnings:** be aware (4), keep in mind (2)
> **Definitions:** is a  (3)
> **CLI Commands:** find (2)
> **Env Vars:** sql (1), union (1)
> **Cross-References:** go back to (1)

#### Using the UNION operator
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=0)** - [Presenter] You have learned how to combine different tables using JOINs in our previous videos.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=7)** Now, isn't it amazing to see we can combine results set of different SQL queries as well?
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=16)** We can do that using the UNION operator, with which if you have more than one query, you can get the result of these queries as a single result.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=31)** Now you must be thinking what could be the use case.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=35)** Let's say the use case says, imagine you have a lot of products in your product table which belongs to a specific category.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=47)** Let's say you want to find out all the records which belongs to a specific category.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=55)** Let's say I want to find out all the products from the electronics category.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=61)** Plus I also wanted to find out all the product which has been sold in more than 10 quantity.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=71)** Now imagine I need only the name of the products, but I have a two different condition altogether.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=79)** One, I need all the product names under the category, that is electronics.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=84)** Plus I need all the products for which the order quantity is more than 10.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=92)** How I can do that?
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=94)** Let's just go to our pgAdmin and see how we can take the leverage of this UNION to get this two different problem statement joined together.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=107)** Let's talk about the first thing.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=109)** If I want to find out the name of all the product for which the category ID is equal to electronics, how I can do that?
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=124)** So quickly just check, select * from categories.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=132)** You will get to know that the category electronics has a category ID one.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=139)** So I write something like this, select name from products where category_id = to 1.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=153)** Now this will give me name of all the products which is of category type electronics.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=162)** Now I want to know the name of all the products for which the order quantity is more than 10.
>
> **[2:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=174)** Order quantity exists where order quantity exists in order table.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=179)** So in this case I joined product with the order.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=184)** How?
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=185)** Let's do a simple inner join.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=187)** I will say, select name from products p inner join orders o on o.product_id = p.product_id
>
> **[3:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=203)** and I will add the condition, where o., the product, total quantity, I would say, total_quantity &gt;10.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=220)** Now you can see here what is the condition arrived.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=225)** You are getting all the product name for which there is order exists because we are using inner join and for that order, the order quantity is more than 10.
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=240)** So if I execute this, there is nothing like that.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=247)** So there is no record.
>
> **[4:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=248)** Let's say I reduce it to just one.
>
> **[4:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=253)** Are we getting some record?
>
> **[4:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=254)** Yes, there are four records.
>
> **[4:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=257)** Now I want a combination of both of these things together.
>
> **[4:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=262)** So what I can do, I can say UNION.
>
> **[4:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=266)** Now when we have a two different set of queries and we want to combine two different set of queries, we can do that using a UNION.
>
> **[4:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=276)** But the most important thing which you need to keep in mind when you are combining two queries, the number of the columns and the type of the columns should remain the same.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=288)** So a first query is getting one column, second query has to also give only one column.
>
> **[4:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=295)** This number of columns and type of column need to be exactly same because you do a UNION between the same people.
>
> **[5:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=305)** So let's just execute this and now you can see that.
>
> **[5:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=311)** You got the record for the combination of both of them.
>
> **[5:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=316)** In the category, if I execute, for the category, there are three products for a product for which order, quantity is more than one, there are four and if I combine them I will get all the product name which belongs to either of this query.
>
> **[5:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=337)** Now another thing you need to notice is by default this UNION removes the duplicate because there were few records or the few product name which was there in the query one as well and which was there in the query two as well.
>
> **[5:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=355)** UNION remove all those duplicacy as well.
>
> **[5:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=359)** If you want to get all that duplicate also, you can say something like this, UNION ALL.
>
> **[6:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=367)** When you do UNION all and try to run it, you going to get all the records in the repetitive manner.
>
> **[6:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=375)** So here you can see that we are getting the headphones two times, right, because headphone is matching in both the condition.
>
> **[6:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=384)** Similarly laptop, that is also matching in both of the condition and that's why it is appearing for two times.
>
> **[6:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=393)** So let's quickly understand there is a small difference between the UNION and the JOIN.
>
> **[6:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=399)** UNION tried to join two queries with each other.
>
> **[6:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=403)** However, the JOIN tried to join two tables with each other.
>
> **[6:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=409)** So that's the one big difference between these two.
>
> **[6:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=414)** Another one is result structure.
>
> **[6:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=417)** With the UNION, the final result is set of rules combined vertically, whereas JOINs combines the data horizontally to add more columns to the results set.
>
> **[7:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=433)** If you understand in the JOIN, the column from both the table can come and that's why it's a horizontal.
>
> **[7:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=440)** However, in the UNION you try to copy the value from both of the result into a same column.
>
> **[7:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=449)** That is like vertical one.
>
> **[7:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=452)** Relationship requirement.
>
> **[7:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=454)** JOIN operation requires a defined relationship between the tables.
>
> **[7:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=458)** For example, we are joining orders and the product.
>
> **[7:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=462)** For this joining we expect that the order ID or the product ID should have some kind of, you know, relationship between these two.
>
> **[7:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=472)** If I JOIN order with the category, it will not going to work out because I'm not storing the category ID under the order table, neither I'm storing order ID into the category table.
>
> **[8:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=484)** So for the JOIN, relationship has to exist.
>
> **[8:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=488)** However, for the UNION it doesn't matter because UNION is try to combine the query output.
>
> **[8:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=498)** Use context.
>
> **[8:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=499)** You should use UNION when you need to aggregate similar data from different tables of the queries.
>
> **[8:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=507)** However, JOIN you going to use when you need to retrieve the information from multiple tables which are related with some common relationship.
>
> **[8:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=522)** I hope you are enjoying the power of the SQL and the variety of option which is coming along your way.
>
> **[8:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=531)** In the next video we going to talk about the case statement.
>
> **[8:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-union-operator?u=76281980&t=536)** It is an another interesting tool in the SQL world.

> [!info]- Semantic Content
>
> **Env Vars:** union (16), join (7), sql (3)
> **Code Keywords:** let (9), this, (3), case. (1)
> **SQL:** join (7)
> **Code Identifiers:** product_id (2), pgadmin (1), category_id (1), total_quantity (1)
> **CLI Commands:** find (4)
> **Analogies:** imagine (2), for example (1)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** in the next (1)

#### Using the CASE statement for conditional logic
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=0)** - [Instructor] Imagine we are making a movie about our data, and the case statement is like our script writer telling the characters what to do based on certain situations.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=13)** So you have explored the vibrant world of joins, union.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=18)** Now we are diving into the magic of the case statements.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=23)** In SQL, the case statement is like a decision-making tool that allows you to perform conditional logic within your queries.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=34)** It's similar to a switch statement in the programming language.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=39)** The case expression goes through conditions and return a value.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=45)** When the first condition is met, it will return the first.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=48)** If the second condition is matching, it will return the result as per the second condition.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=53)** And if none of the condition become true, it will return the else part.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=60)** And in certain cases when there is no else part returned or no condition are mentioned, if in certain cases when there is no else part returned and no conditions are true, this case statement is going to return the null value.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=81)** Let's look at the syntax of this case expression.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=86)** So the case expression syntax look like, it starts with the case, using the when keyword, you will put on your condition, when condition one, and then you use a keyword called then, and then you write a statement which you want to return.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=105)** So that would be let's say result one.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=108)** Then you have another condition.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=110)** Again, you will write that another condition using the when keyword, put your condition, again, then you use then keyword, and you will write the result which you wanted to return if this condition too becomes true.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=127)** Here, this can be multiple condition based on your need.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=131)** Lastly, you will put like else part.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=135)** and once you write this else keyword, in this, you will write the result which you wanted to return in case none of the condition met.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=146)** And lastly, you end your case using the end keyword.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=152)** If you want to give some alias for whatever be the output comes, so you can say as and then alias name.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=161)** So that's how you can put the case expression.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=166)** Now let's take a very real world example.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=169)** Assume that we have our product table, which we have seen so far in that there are a lot of products.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=176)** Some product might be cheap, some product might be affordable, some product might be very costly.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=185)** What we do is let's write up a query which will check the price of every product and return that whether it is cheap, whether it is affordable, or whether it is expensive.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=201)** Let's go to our pgAdmin 4 and see how we can do this.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=207)** Now here, like always, let's open up our query tool.
>
> **[3:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=212)** And if you look at our product table, we have this price column here.
>
> **[3:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=218)** So let's say we'll say something like this, select, name of the product, comma, description of the product.
>
> **[3:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=227)** And then what we do is we're going to write a case statement here.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=232)** We'll say that case when my price is less than 100,
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=243)** then I call it like a cheap product, right?
>
> **[4:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=250)** Then let's say I have another condition.
>
> **[4:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=253)** I will say when price is greater than 100, and price is less than 500.
>
> **[4:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=266)** I call it like an affordable range.
>
> **[4:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=270)** So I will say that here, affordable.
>
> **[4:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=275)** So in this case, if my price belongs to 100 to 500 range, we will treat that product as affordable one.
>
> **[4:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=285)** And then I will say else, if none of this is matching, we will say that else, the product is very expensive.
>
> **[4:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=299)** And lastly, we call end as ProductType, okay?
>
> **[5:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=307)** I just give an alias as ProductType.
>
> **[5:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=311)** And let's say we are doing select all this from our product table.
>
> **[5:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=319)** Now let me execute this and see.
>
> **[5:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=325)** So we have a table name as products.
>
> **[5:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=328)** So let's run it again.
>
> **[5:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=330)** And now you can see that the laptop is coming out to be expensive, headphones is coming affordable, cheap.
>
> **[5:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=338)** Let's do one more thing.
>
> **[5:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=339)** Let's have this price as well.
>
> **[5:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=342)** So you'll get to know what exactly is coming.
>
> **[5:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=347)** So you can see the first row is null.
>
> **[5:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=350)** So null is not matching anywhere.
>
> **[5:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=352)** So it goes to the end, that is the expensive.
>
> **[5:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=357)** But when our headphones, which price is 129, this comes under the affordable range, because it is more than 100 and less than 500.
>
> **[6:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=367)** Similarly, backpack, you can see it is priced 49, which is less than 100.
>
> **[6:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=374)** And we have this condition saying if less than 100, then it comes as cheap, great.
>
> **[6:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=381)** And similarly for this, last, fitness tracker as well.
>
> **[6:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=386)** So that is the power of our case statement.
>
> **[6:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=390)** Whenever you want to have multiple conditions and you want to get the result based on this multiple condition, then in those cases, you can use the power of the case statement, which works exactly, either you call it like if, else if, or you call it like a switch case in some of the programming language.
>
> **[6:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=415)** In the next video, we're going to talk about how you can aggregate the rows or how you can aggregate the data in your table based on some specific column using a very popular mechanism that is group by.
>
> **[7:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-case-statement-for-conditional-logic?u=76281980&t=431)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), this, (3), switch (2), case, (2), else, (2)
> **Analogies:** imagine (1), similar to (1)
> **Code Identifiers:** pgadmin (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Using GROUP BY to aggregate data
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=0)** - [Instructor] Imagine you are hosting a party and you have got a list of items you have bought, for example, sodas, chip cupcakes and so on along with their quantities and cost.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=16)** Using Group By, you could quickly summarize your spending by item category, helping you manage your budgets more effectively.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=28)** Let's understand Group By.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=31)** Group By statements groups the rows that have the same values into the summary rows like find the number of customer in each country.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=43)** It helps you to categorize the data.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=46)** For example, in your dataset of let's say, the product dataset.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=52)** Now, in this product dataset, if you have product belongs to every category, now you want to identify one category has how many number of items.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=65)** Then probably what you can do is you can group by this product table based on the category.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=73)** Or maybe let's take another example.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=76)** Let's say we have a cover customer data.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=78)** Now our customer belongs to the various cities from different parts of the world, and if you want to identify how many customers are there from each city or each country, then you can group this customer data based on either city or based on the country.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=100)** It'll help you to reduce the data.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=103)** Sometimes you don't want to know the entire data or you're not looking for the entire information, you are looking for the concise or the summarize information.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=116)** In those cases, Group By can help you to summarize the data and it'll help you to report your data or do the data reporting in a very effective manner.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=131)** There are a lot of aggregation functions which exist or works along with the Group By.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=138)** Some of them are like count, max, min sum, average.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=146)** Let's just go back to our PG admin and see how we can apply a Group By on basic SQL queries.
>
> **[2:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=156)** Let me reopen the new SQL sheet.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=161)** Let's say we were talking about the example where you've trying to identify the customers based on the city.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=170)** So what I can do is I can say select city, count of customer ID
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=182)** from customer table and we say group by based on the city.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=190)** Now understand what we are trying to do here is, we are saying, let's for this entire customer data set, group it by based on a city column.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=202)** So now in the result set, you will see a unique list of city and for every city what we want, we want the count of customers.
>
> **[3:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=215)** So we'll see for every city, how many number of customers are there.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=220)** Now if I execute this query, you will see the result like New York has one customer, Townsville has one customer, Big Apple has one, and all other cities.
>
> **[3:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=238)** Our data is not too vast right now, but imagine when you have a millions of records and then you want to try to identify the customer based on a specific city, then it'll be very effective query to run.
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=252)** Because probably you have a just a 100, 200 cities in which your entire data is spread across and then you can get the list of customers or the count of the customers belongs to a specific city.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=268)** So sometimes this Group By is very useful when you go into the data visualization part.
>
> **[4:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=275)** The very practical aspect of Group By would come when you create kind of a dashboards.
>
> **[4:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=281)** So when you create some kind of a dashboards, there, you want to show the summarized data and when you want to show the summarized data, then Group By would be very effective because it summarizes data based on some grouping and then it'll showcase the data to you.
>
> **[5:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=301)** Let's understand what are the different things which we need to consider while we go with the Group By.
>
> **[5:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=309)** So the first thing which we'll need to consider properly is the column selection.
>
> **[5:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=314)** You need to be very clear on what column basis you want to do this aggregation.
>
> **[5:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=320)** For example, in our last example, we want to aggregate this customer data based on the city.
>
> **[5:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=328)** So in that case, my column selection would be of a city.
>
> **[5:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=332)** If I have wanted to do the aggregation based on the country, then probably I choose the column as country.
>
> **[5:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=341)** So you have to understand what kind of analysis you are doing and based on that, you choose the specific column.
>
> **[5:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=352)** Another thing you need to consider is aggregate function.
>
> **[5:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=357)** Sometimes you are not only concerned with finding out the total count, you might be worried about taking the average or maximum or minimum.
>
> **[6:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=369)** For example, assume that I have a data for last 10 years where it is showing me the temperature for each day.
>
> **[6:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=378)** Now maybe I am interested in finding the maximum temperature for a specific city or I am might be interested in finding the minimum temperature for every city.
>
> **[6:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=391)** In that case, my aggregate function would be maximum or minimum instead of the cow.
>
> **[6:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=399)** Then comes the another aspect, multiple columns.
>
> **[6:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=404)** Sometimes you not only concern of grouping the data based on one column, you won't to combine the data based on multiple columns.
>
> **[6:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=414)** In that case, you can group the result based on multiple columns.
>
> **[6:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=419)** Another thing you need to consider is order of the column.
>
> **[7:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=423)** The order in which you specify the column in the Group By clause can affect the grouping and the final result, especially when you are using the multiple columns to group your data.
>
> **[7:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=436)** For example, I want to group based on city and country or I want to group by based on country or city.
>
> **[7:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=444)** So this order will make a little difference in the outcome.
>
> **[7:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=448)** So ensure that you are putting the right ordering.
>
> **[7:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=453)** Null values.
>
> **[7:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=455)** Be aware that Group By treats all the null values as the same value and groups them together.
>
> **[7:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=463)** So imagine I was grouping the data based on city and there are a hundred records for which the city is null.
>
> **[7:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=471)** So all those a hundred records will group into a one category, that is city equal to null.
>
> **[7:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=478)** So if you have a null data and you are doing a Group By based on a column which has a null values, please understand it before executing the query.
>
> **[8:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=491)** Performance consideration.
>
> **[8:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=493)** Grouping sometimes can be resource intensive, particularly when you have a large data set.
>
> **[8:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=501)** Ensure that your database is properly indexed, especially on the column which you are using in the Group By clause.
>
> **[8:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=510)** That can improve the performance.
>
> **[8:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=514)** So we got a understanding about this group by clause, but we have not explored the aggregated function so far.
>
> **[8:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-group-by-to-aggregate-data?u=76281980&t=523)** So in the next video, we are going to talk about couple of aggregate functions and see how they can combine with the Group By clause.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), case, (3), function (3)
> **Analogies:** for example (5), imagine (3)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** sql (2)
> **Cross-References:** go back to (1), in the next (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Common aggregation functions: SUM, AVG, COUNT, etc.
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=0)** - [Instructor] Aggregate function effectiveness comes along with the GROUP BY.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=5)** Similarly, GROUP BY will become more effective when we use aggregate functions along with it.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=13)** So aggregate function and GROUP BY goes hand in hand.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=18)** There are couple of common aggregate functions, like COUNT, SUM, AVERAGE, MAX, MIN, STDDEV.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=28)** Now let's just go to our pgAdmin and see how we can use all these aggregate functions and what they do.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=36)** Now let me open another sheet.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=39)** Let's say for example, first, we use our COUNT aggregate function.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=44)** We can say select count(*) from customer table.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=52)** Now, what it will do is it will try to give me the total row count for this customer table.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=61)** In case if I don't give any alias, you can see that the result comes like count and the count number is six.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=70)** In a more readable manner, I can say count(*) as Total_Row_Count.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=80)** Now you will get an output which is having more readability.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=85)** It's giving a proper column name and Total_Row_Count.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=90)** You can also, instead of saying count(*), you can also say that count(customer_id).
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=100)** Now, there is one difference between these two.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=104)** Even when you do something like select count column name as Total_Row_Count from table, you still see the same result.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=114)** But under the hood, when you use a star or when you use a column name, there is a one small difference.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=122)** If you use a column name and if the index is there based on this column into the table, then probably this count, along with the column name, give the result much faster.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=138)** So the performance of this would be little better than the performance of the statement.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=147)** Something like this.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=149)** The condition is that the column which you are putting under this count has to have the index.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=157)** So table have an index available based on this column.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=161)** If it's there, then the performance of this query statement would be better compared to this.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=168)** In fact, if sometimes you might be putting the column and you are interested only in identifying the unique rows.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=179)** So you can say distinct.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=181)** So I can say select count distinct customer_id.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=186)** So all the rows which is having the distinct customer_id will get counted and you will get the count based on the distinct.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=197)** At this point, this table does not have any duplicate based on customer_id.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=202)** That's why we saw the result exactly same.
>
> **[3:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=205)** But in general, if you're putting the distinct on a column for which there is a duplicate value exists, then this statement will give you only the distinct row count.
>
> **[3:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=218)** Let's talk about another function, say sum.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=222)** So let's say I want to do this sum of all the order total amount.
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=226)** So I say total_amount.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=230)** So this is, I'm summing up the total amount for all the orders.
>
> **[3:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=236)** Now, what it will do is when you try to go and execute this, it will give you the sum of all the orders which has been booked under this table.
>
> **[4:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=250)** If instead of this sum, let's say if you wanted to find out what is the maximum order price.
>
> **[4:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=258)** So what we can say, we say, instead of the sum of total_amount, we'll say max of the total_amount.
>
> **[4:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=266)** Now, this will going to give you the order with having the maximum total_amount.
>
> **[4:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=272)** Sometimes you probably want to understand what is the lowest order price.
>
> **[4:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=278)** So if you wanted to find out what is the lowest order price, the lowest order price, you can find using the min.
>
> **[4:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=287)** So you say select minimum of total_amount.
>
> **[4:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=292)** Now, once you run this, you will get the minimum of that.
>
> **[4:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=297)** Similarly, there is another function.
>
> **[5:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=300)** Let's say you don't want to know the max, you don't want to know the minimum.
>
> **[5:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=305)** You want to know the average order price.
>
> **[5:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=308)** So if you want to know the average order price, you can say avg.
>
> **[5:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=314)** That is average order price.
>
> **[5:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=320)** Now you can get the average order price for per order.
>
> **[5:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=324)** You can say that, on an average, every order is bringing in $114 for you.
>
> **[5:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=332)** There is another aggregation function exists that is called as the standard deviation.
>
> **[5:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=338)** For standard deviation, you can do select stddev.
>
> **[5:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=343)** That is a short form for standard deviation, and then you give in your column name.
>
> **[5:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=349)** That is total_amount, and then you say from orders.
>
> **[5:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=355)** Now, this will try to find out the standard deviation for your total amount.
>
> **[6:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=362)** So there are a lot of, lot of functions exist like this.
>
> **[6:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=366)** You can use them as per your need.
>
> **[6:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=371)** This is all about aggregation function in SQL.
>
> **[6:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=374)** These functions are critical for data analysis and for data engineering in SQL.
>
> **[6:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-aggregation-functions-sum-avg-count-etc?u=76281980&t=382)** In our next video, we're going to deep dive into a having clause, which is going to use to filter the GROUP BY result to achieve the specific data summarization and analysis.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (7), this. (3), this, (2)
> **Env Vars:** group (4), count (2), sql (2), sum (1), average (1)
> **Code Identifiers:** total_amount (6), customer_id (4), pgadmin (1)
> **CLI Commands:** find (4)
> **SQL:** group by (4)
> **Definitions:** is a  (3), is called (1)
> **Cross-References:** next video (1)
> **UI Navigation:** go to (1)

#### Filtering GROUP BY results with the HAVING clause
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=0)** - [Instructor] The HAVING clause in SQL is used to filter the groups of a data written by the GROUP BY operation.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=9)** Think like that.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=10)** You use the GROUP BY.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=12)** GROUP BY categorize the data based on a specific column, whatever you give.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=18)** Now, it will give you all the rows for that grouping, but you don't want all the rows even while you do the grouping or summarization.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=30)** You want a summary for a very specific information.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=35)** In that case, when you want to filter out this grouping, you can use the HAVING clause.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=43)** And when you use this HAVING clause along with GROUP BY, many times you end up with using the aggregate functions also along with it.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=53)** Overall, this will give you the fine grain control over the results which you get by grouping.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=62)** Let's take a simple example.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=64)** Imagine that your customers is located across the world and you said that, okay, I will group by my customer based on the city and I will get to know all the cities which has a specific number of customers.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=82)** But I want to focus for my marketing.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=85)** I don't want to focus on the cities where my customer count is less than 100 because that is a very small market.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=94)** So now in this situation, when I wanted to know all my customer cities where the customer count is more than 100, probably I'm going to utilize the HAVING clause because I group the data and then I'm going to filter it using the HAVING clause.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=117)** Let's just go back to our pgAdmin and see if I have to write such a query, how I can write it.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=125)** So I want the cities, so I will say: "select city from customer" and then I will say "group by" based on the city.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=140)** If I execute this one, I probably will see all the cities, right?
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=146)** And in fact, if I just say like this: "city, count", so it will try to find me all this customer count in that specific city, which is one, one for everything.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=164)** Imagine I wanted to find out the cities where it is more than one or like more than 100.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=171)** I would have been using: "having count of star is greater than 100"
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=181)** and then I will execute.
>
> **[3:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=183)** Probably here, I will not get any output at this point, but I hope you're getting the intent.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=190)** So if you got anything from this GROUP BY result, and if you want to filter that out, you can use the HAVING clause.
>
> **[3:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=200)** If I use a WHERE clause here, in general whenever you have to filter, you generally use a WHERE clause.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=207)** But the problem with the WHERE clause is WHERE clause works before the GROUP BY.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=213)** So if I was doing something where I should have to use the WHERE before the GROUP BY class, so it could filter out the record and then we're doing a grouping based on that.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=225)** But once you've done the GROUP BY, if you try to filter on the group data, then you have to use the HAVING clause.
>
> **[3:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=236)** So remember this simple small trick.
>
> **[3:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=239)** The HAVING will come after the GROUP BY, and GROUP BY always come after the WHERE clause.
>
> **[4:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=246)** So it should not be that you using the GROUP BY first and then you are using the WHERE.
>
> **[4:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=253)** That will be a problem.
>
> **[4:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=254)** So WHERE filter the record based on the rows.
>
> **[4:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=258)** HAVING filter the record based on the group data.
>
> **[4:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=263)** Let's take in another example.
>
> **[4:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=265)** Imagine that we have a product and product has a category, right?
>
> **[4:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=271)** I wanted to find out all the categories for which the product count is more than one.
>
> **[4:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=277)** How would I do that?
>
> **[4:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=279)** I will say that: "select name, category.Id from categories c join",
>
> **[4:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=292)** our products table, on, let's give an alliance to products, "SP", "on c.category.id equal to p.category.id."
>
> **[5:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=308)** And then we say once you join this, we'll say group by based on category ID.
>
> **[5:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=318)** And I say, "having the count of product_id should be greater than one."
>
> **[5:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=328)** Now when I execute this query, let's say here use the c.name and c.category and here we'll use p.product_id.
>
> **[5:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=345)** Let's say, c.category_id here as well.
>
> **[5:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=350)** Now you will find out that there is only one category exist where the product ID or the number of product count is greater than one.
>
> **[6:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=362)** If you want to see all the list, probably instead of running this, I would've been using this query.
>
> **[6:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=371)** If I run the half of this piece, you can see that there is a three category: category one, category two, category three.
>
> **[6:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=378)** And even if I add this here, product count, you will see the total number of product count for each category.
>
> **[6:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=392)** You can see that for home and kitchen, the product category count is one.
>
> **[6:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=396)** For electronics, it's three.
>
> **[6:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=398)** And for clothing, it's one.
>
> **[6:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=400)** So in case when I want the product category where the total product count is more than one, I would be using this HAVING clause.
>
> **[6:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=412)** Why?
>
> **[6:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=413)** Because I joined this two table and then I'm grouping everything based on the category.
>
> **[6:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=419)** Once I group based on the category, and if I have to find out the filtered record from this group data, I have to use this HAVING clause.
>
> **[7:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=431)** Correct?
>
> **[7:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=431)** So once I use this entire query, I will get only the product category where the number of records or where the number of the product count is more than one.
>
> **[7:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=444)** So remember, HAVING clause is used to filter out the group data and WHERE clause is used to filter out the non-group data.
>
> **[7:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=456)** By this, we have mastered the variety of joints, unions, and various aggregation technique.
>
> **[7:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/filtering-group-by-results-with-the-having-clause?u=76281980&t=464)** In the next video, we will going to deep dive into another interesting set of SQL function.

> [!info]- Semantic Content
>
> **Env Vars:** having (12), group (11), where (9), sql (2)
> **SQL:** having (12), group by (11), where (9)
> **Code Keywords:** let (6), this, (3), case, (1), this: (1), class, (1)
> **CLI Commands:** find (5)
> **Code Identifiers:** product_id (2), pgadmin (1), category_id (1)
> **Analogies:** imagine (3)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** is a  (2)

#### Challenge: Joins
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-joins?u=76281980&t=5)** - [Instructor] This time, the challenge is in front of you to find out all the product name with their IDs and the condition is they have to belong to a very specific category that is electronics and we are doing this exercise because a sale is about to come and we have a summer special offer we have to put for this electronic item.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-joins?u=76281980&t=30)** So help the team to find out all these product IDs along with their name.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### Solution: Joins
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-joins?u=76281980&t=0)** - [Instructor] Now, to find out all the product name along with the category, what we need to do is we need to do a join between the product table and the category table.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-joins?u=76281980&t=17)** So for now, I just say select star from products P, join category C on p.category_id is equal to c.category_id,
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-joins?u=76281980&t=34)** and our condition was where the c.category name is equal to electronics.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-joins?u=76281980&t=46)** And also one thing, I don't want to get all the items from this table.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-joins?u=76281980&t=52)** I just want product ID, comma, product name, comma, category name.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-joins?u=76281980&t=63)** So I will say c.category name, and p.product name and p.product type.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-joins?u=76281980&t=72)** Now, let's just execute this.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-joins?u=76281980&t=77)** Now, you can see that the product, one, two, five, these are the product ID.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-joins?u=76281980&t=82)** All of these names are headphones, laptop, fitness tracker, and all of them belongs to electronics.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-joins?u=76281980&t=89)** Now, we got to know that, okay, all these rules are belongs to this a specific electronics category only, and as per the question where it has not been asked to display the category name, you can remove this and execute.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-joins?u=76281980&t=108)** That's it.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (1), let (1), this. (1)
> **Code Identifiers:** category_id (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. 5. SQL Functions

#### Introduction to SQL functions
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=0)** - [Instructor] Imagine you have a magical kitchen tool called a Chop-O-Matic.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=6)** This tool takes vegetable as input, chops them up, and gives you a neatly diced salad as an output.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=16)** You don't need to know how it works inside.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=20)** You just know that when you use it, you get the result you want.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=27)** In the world of programming, a function is like your Chop-O-Matic.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=32)** It's a predefined set of instructions that takes something in, does something with it, and gives you the result.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=42)** You can use this function whenever you need that a specific task done without worrying about the nitty gritty details.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=53)** So, in the technical terms, a function is a reusable piece of a code that performs a specific task.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=62)** For example, when you use calculator, you just give the two numbers to sum that up.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=70)** You don't care how it do the sum.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=73)** If you want to do the multiplication, you just pass two numbers and say multiply.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=79)** It gives you the result.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=81)** You don't care how it works internally.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=85)** Functions helps you to modularize your code.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=90)** Function gives you the modularity.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=93)** It also provides kind of an abstraction, because what is going on inside you don't care.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=100)** So, for you, it's like an abstraction.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=103)** Sometimes using a function can optimize the performance as well, because one work you might need to do multiple times, and if you have written some query or a code which is an optimized one, then you can use that optimized thing again and again and again without worrying about that every time somebody is writing that functionality is optimized or not.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=133)** Also, when you write your code or queries in terms of a function, the code is easy to maintain.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=141)** So function brings in the maintainability in your code.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=146)** There are a lot of built in functions there in the SQL world.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=150)** Like any programming language, when you want to do something related to the mathematics, there are mathematical functions there, for example, radians, absolute, many more.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=163)** Their main aim is to give you the functionality to do the numerical analysis.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=170)** There are certain types of functions available specifically for the date and time.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=176)** Sometimes you want to get only the year from the date, or maybe you want to get month from the date, you want to convert time to the date.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=184)** There are a lot of things which you wanted to play around with date and time.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=189)** For all of that, there is a date and time functions there.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=194)** All these built in functions you can use to get the specific information out of your date or time column.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=204)** Last but not the least, string functions.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=207)** String is a most important ingredient of any data.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=213)** Majority of your data is in terms of a text, and when you want to play with this text data, you use a lot of string functions.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=223)** Maybe you want to change the lowercase to uppercase, or from upper case to lowercase.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=229)** You want to split the text, you want to count the length of the text.
>
> **[3:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=236)** There are a lot of things which you want to do along with your strings.
>
> **[4:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=241)** All this can be done using variety of string functions provided by the SQL itself.
>
> **[4:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=249)** I know by hearing all of these variety of functions, you might feeling excited and willing to implement all of that in your pgAdmin.
>
> **[4:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-sql-functions?u=76281980&t=260)** So in the next session, we go and we'll see how you can implement all these functions in your PostgreSQL.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), pass (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** for example (2), imagine (1), it's like (1)
> **Env Vars:** sql (2)
> **Code Identifiers:** pgadmin (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Using mathematical functions
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=0)** - [Instructor] Mathematical function in SQL are like magical tools that help you perform various calculation on numeric data.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=10)** Some of the most common numerical functions are like, ABS, CEIL, FLOOR, ROUND, SQRT.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=18)** Let's just get down to our pgAdmin, and see how we can use all of them.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=25)** For example, let's start with absolute.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=29)** I said select abs, and I pass a value, let's say call, 2.6.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=35)** Now, if I execute this, I will get a output 2.6.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=42)** This output is nothing but a positive number.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=45)** Remember, absolute is trying to give you the positive value or the absolute value of a number.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=54)** Whether the number is negative or positive with absolute, you always get the positive value.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=61)** Even if I run this with select absolute 2.6, I will get the positive result only.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=71)** Similarly, let's say for example, if I want to know the ceiling, so I say ceil(2.3).
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=80)** So ceil is basically try to find out the maximum or the higher integer nearby this number.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=89)** 2.3 ceil would become 3 because the highest integer nearby this would be 3, and the lowest is 2.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=97)** Even if I say 2.7, my answer will still remain the same, that is 3.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=105)** Similarly, we have another function that is called floor.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=110)** Now floor is exactly opposite of ceiling.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=114)** Ceilings give highest integer near that decimal number.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=119)** Floor gives you the lowest number near to that decimal point.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=126)** If I run this, I will get the answer is 2, because floor try to give you the lowest integer.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=135)** We also have a one more function call rounding function.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=140)** In the round function, if you have some number, and you want to round up this number to a certain place, you can do that.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=148)** For example, I have something number like this.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=152)** And I want to round it off to two decimal places.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=157)** So I can say the function called round, and then I pass a numerical value along with the number of the places up to which I want to round it off.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=169)** You can see this has been rounded off of two, two decimal places.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=175)** While this rounding has been done, rounding will be done based upon the five.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=181)** Let's execute this.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=185)** Here, we get an output like 2.34 because this number 1 is rounded off to zero.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=194)** If it was five or more than five, then the rounding of two decimal places will become up to 2.35.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=206)** On the similar lines, we have a one more function that is square root.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=211)** If at any point of a time you want to find out the square root of a number, you can use the square root function.
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=219)** Let's say if I pass 4, the square root of 4 is nothing but 2, so you get the square root.
>
> **[3:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=228)** Now square root give a very long number.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=230)** If you want to get only the integer part out of it, you probably might be doing either the round.
>
> **[3:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=239)** You see, round, square root up to 0.
>
> **[4:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=249)** A change, there is a typo.
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=252)** You see, we did the rounding to a zero decimal place, so we got an integer out it.
>
> **[4:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=259)** So these are some of the available mathematical function in the SQL.
>
> **[4:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=265)** Beside this also, there are a lot of SQL mathematical functions.
>
> **[4:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=270)** For example, cos, sin, if you want to do the radiance.
>
> **[4:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=277)** All those mathematical functions are out there.
>
> **[4:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=281)** The knowledge of this mathematical function will enhance your data analysis skill.
>
> **[4:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-mathematical-functions?u=76281980&t=287)** In the next video, we're going to deep dive into one of the most important built in function that is around the date and time.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), let (6), pass (3), this, (2), this. (2)
> **Env Vars:** sql (3), abs (1), ceil (1), floor (1), round (1)
> **Versions:** 2.6 (3), 2.3 (2), 2.7 (1), 2.34 (1), 2.35 (1)
> **Analogies:** for example (4)
> **CLI Commands:** find (2)
> **Definitions:** is called (1), is a  (1)
> **Code Identifiers:** pgadmin (1)
> **Cross-References:** in the next (1)

#### Working with date functions
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=0)** - [Instructor] You have understood the different mathematical functions.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=4)** Now imagine if you want to manipulate different dates in your database or want to know today's date, extract a specific portion of the date, or you want to do some additional subtraction in the date.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=20)** Then there is a lot of built-in functions available for this purpose.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=24)** Let's go down to PG admin and see how we can play with this date.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=31)** To get the current date, there is a function called current date.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=35)** You can say select current_date.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=39)** This function will give you the current date.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=44)** Now maybe possible that from a date column you have, you want to extract some specific month, year, or day from this date.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=57)** So to extract a specific piece out of this date, there is a function exists.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=62)** The function is called extract.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=65)** You use extract and you tell the extract what you want to extract out of it.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=70)** For example, you want to extract day from your current date.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=78)** When you execute this, this will going to extract the DPS.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=82)** So DPS here is 18th.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=86)** Similarly, there might be a possibility that instead of the day you might want it to extract the month.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=94)** For the month you are to just type in here month from your date column you will get the month.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=104)** Here I'm using the current date.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=106)** If you have a sum date column, you can use that date column and say from that specific table.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=114)** If you want to extract the year, similarly, you can just say simple extract year from your date column and you will get the year from that.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=127)** Similar to the extract function, there is a one more function that is called as date part function.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=134)** That will give you the parts of the date.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=136)** Here, also you can say date part and say day, from your date column.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=144)** This will also give you the day from your date column.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=149)** Just miss the column.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=154)** This date part, you can work with all the variety.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=157)** You can say day, you can say for the month and you can say for the year as well.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=165)** So for example, let me run it for the month.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=168)** You will get the month and if you run it for the year, you will get the year as well.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=179)** Sometimes you might be entrusted in truncating the date.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=184)** For example, right now when I got the date, it giving me the full date.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=189)** Let's say I don't want to get the full date.
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=192)** I want to trunc the date up to let's say a month.
>
> **[3:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=196)** So for example, if I truncate the date to the month, that means if I'm into the march month, the truncated date would be, is it called 1st of March?
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=207)** So I will say like date_trunc, let's say you say month and then you see current_date.
>
> **[3:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=218)** Now when you try to execute this, this will give you the truncated date for this month.
>
> **[3:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=224)** So for this month, the truncated date will be 1st of March.
>
> **[3:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=228)** Let's say instead of the truncated by a month, I want to truncate by year.
>
> **[3:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=235)** When I do it truncated by a year, you will get the start date of the year.
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=240)** For example, I'd say year.
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=243)** And then I execute this and you see this has coming the 1st of January as my start year date.
>
> **[4:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=256)** So date truncate will truncate the date based on the parameters you provided.
>
> **[4:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=261)** It could be month, it could be year, it could be day in terms of the time.
>
> **[4:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=266)** Now another would be is let's say sometimes you are playing with the date of birth and you want to identify the age.
>
> **[4:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=277)** So there is a direct function given.
>
> **[4:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=280)** You can find out the age how, let's see, you just say like select, age, and you give the constant as timestamp and then you give a date.
>
> **[4:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=292)** For example, I give the date as like 2024-01-01.
>
> **[5:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=300)** When I run this age function, what it'll do is it'll go and try to calculate the age between the date I have given and today's date.
>
> **[5:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=311)** So the age will come around two months, 17 days.
>
> **[5:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=316)** If I want to calculate the age between the two specific dates instead of the date and the now, I can give both the dates here as well.
>
> **[5:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=327)** I can select age and then I can say timestamp 2024-01-01, and I given another column saying timestamp and then I give another date.
>
> **[5:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=343)** Let's say 2024-31-01.
>
> **[5:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=349)** It should be 01 and 31 like this.
>
> **[5:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=354)** And let's see, so you can see that the difference between these two date is minus 30 days because the first date is like 30 days before.
>
> **[6:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=365)** So that's how you can calculate the age between the two date.
>
> **[6:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=369)** Also, another would be is like you want to convert a string into the date.
>
> **[6:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=376)** So when you want to convert a string into the date, you see select to_date and then whatever be the string you pass.
>
> **[6:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=384)** Let's say you pass something like this, 01-01-2024.
>
> **[6:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=389)** And then you can give the format.
>
> **[6:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=391)** What format is this?
>
> **[6:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=393)** So this format is something like DD/MM/YY.
>
> **[6:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=399)** If you do this, this will go and convert your string of any format into this specific format of date.
>
> **[6:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=409)** This specific format tells that the string is of this format and that helps to convert string into the date.
>
> **[6:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=418)** In the real world scenarios, in the data engineering world, this is a pretty important function because many times you read the file and the file has some date column.
>
> **[7:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=428)** Now when you read the file, you probably push it as a string.
>
> **[7:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=433)** Now once you receive the date as a string, you want to convert it into date so that you can play with all date functions.
>
> **[7:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=441)** So there this two under date function would come very handy.
>
> **[7:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=446)** There is a one more function.
>
> **[7:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=448)** Let's say you want to represent date into a specific type of string.
>
> **[7:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=454)** So there you can use to_char function.
>
> **[7:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=458)** To_char function, you can pass the date and then you define how you want to see that.
>
> **[7:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=466)** For example, I want to see in this specific format, DD/MM/YY.
>
> **[7:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=473)** Now my date will be printed in this specific format because I word date into a string format using to_char function.
>
> **[8:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=483)** So there are a lot of functions available around the date and we have seen most of the function, which you're going to use as a data engineer.
>
> **[8:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=493)** So let's have one quick recap of how many functions we have seen.
>
> **[8:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=497)** We saw current date.
>
> **[8:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=499)** To get the current date extract will extract the specific part of the date from the date column itself.
>
> **[8:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=507)** It could be day, month, year.
>
> **[8:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=509)** Similarly, you have a date but function, you can get the truncated date based on month or a year.
>
> **[8:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=517)** You can find out the age between the two dates using the age function.
>
> **[8:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=524)** You can convert string into a specific date format.
>
> **[8:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=528)** You can convert a date into a specific string format.
>
> **[8:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=532)** All this is possible through these variety of functions.
>
> **[8:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-date-functions?u=76281980&t=536)** In the next video, we are going to play all these game with the date time column.

> [!info]- Semantic Content
>
> **Code Keywords:** function (18), let (13), this, (4), pass (3), this. (1)
> **Definitions:** is a  (7), is called (2)
> **Analogies:** for example (7), imagine (1), similar to (1)
> **Code Identifiers:** current_date (2), to_char (2), date_trunc (1), to_date (1)
> **CLI Commands:** find (2)
> **Env Vars:** dps (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Working with time functions
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=0)** - [Instructor] You have learned the date function, similarly, time also plays a very important role in data analysis.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=8)** Many of your column is of a datetime column.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=12)** So let's understand how you can play with datetime column or the timestamp column.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=19)** To get the current time you can use the function call current_time function.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=25)** This function specifically give you the current time.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=30)** Now, this is not a timestamp.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=32)** If you want a date with the time, you have to use a function called select current_timestamp, because timestamp will give you the date and time, both.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=46)** Let's say for example, if you want to know the local time, because current_time gives you the time for the time zone.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=53)** If you want to get to know the current time, you can just select localtime.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=58)** This will give you the time without the time zone.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=65)** Similarly, if you want to get datetime as per the local time zone, you can select localtimestamp.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=75)** This will give you the local datetime without any time zone.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=81)** Now, maybe you are interested to extract the specific piece of information from your timestamp.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=89)** In our order example table, we have our order_timestamp column.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=94)** Let's imagine that you want to identify the hours from those order timestamp.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=102)** So for that you can say select extract, this time we are extracting what?
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=109)** We are extracting hour, so we say hour, and we provide our column name, that is hour from order_timestamp.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=123)** and then we say select extract from orders table.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=129)** When you execute this, you get the order_timestamp hour part for all the rows.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=138)** So this is showing that all the orders has been executed at this specific hour of the day.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=146)** Maybe instead of this hour, if you are interested in the minutes, you can simply select here, the minute.
>
> **[2:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=156)** This will give you the minute part of your timestamp column.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=161)** You can also get the second part of your timestamp column.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=166)** You can get it via extract and then you will say, second.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=172)** So this will give you the second part of your timestamp column.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=180)** On the similar pattern, the way we have seen into the date functions, here also, you have a date truncate function.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=189)** In this date truncate function, you can truncate the timestamp column based on some day, month, or you can truncate based on the year as well.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=201)** You just say, select date_truncate and then you define on what basis you want to truncate.
>
> **[3:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=210)** So let's say I want to truncate based on the day, I will say day, comma, order_timestamp from orders.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=225)** Now, in this case, for every order, I will just get the date part.
>
> **[3:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=231)** I have truncated the order timestamp time thing because I've truncated that order timestamp column by a day.
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=240)** Let's say you might be interested in finding when your order got punched and you want to find out the age of that order.
>
> **[4:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=249)** So how you can do that, you just say, select age, and then you just pass the column, that is.
>
> **[4:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=256)** Order_timestamp, and then you say from orders.
>
> **[4:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=265)** You can see that you will now see the age of every order.
>
> **[4:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=269)** You can see that my first order is one year, two months, and two days old.
>
> **[4:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=273)** Second order is one year, one month, 14 days old.
>
> **[4:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=277)** So this is the beauty of this age function.
>
> **[4:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=279)** Using this age function, you can identify the age.
>
> **[4:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=285)** Let's say we have two columns, right?
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=288)** Order_timestamp and the delivery_timestamp.
>
> **[4:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=291)** Lets find out the age between the delivery and the order.
>
> **[4:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=295)** So you can use the function age again, and this time you will say, find out the age between the delivery_timestamp, comma, order_timestamp.
>
> **[5:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=313)** And you can see that the delivery age, you are now able to get it.
>
> **[5:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=319)** Your timestamp column is attached with some time zone.
>
> **[5:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=323)** Imagine that you want to get the time based on some specific time zone.
>
> **[5:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=328)** That also would be possible.
>
> **[5:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=330)** You can say select current_timestamp, select current_timestamp at TimeZone, and then you give it the time zone.
>
> **[5:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=344)** For example, I give America.
>
> **[5:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=352)** There is a gap between Time Zone.
>
> **[5:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=358)** America/New York.
>
> **[6:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=362)** So this is a valid time zone.
>
> **[6:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=366)** So this time, what I am getting right now, this timestamp is based on the time zone that is America and New York.
>
> **[6:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=375)** So there are variety of functions available to play with your time and timestamp column.
>
> **[6:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=381)** You can combine all these functions and you can enrich your data analysis to next level.
>
> **[6:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=390)** Remember, date is a pretty important column.
>
> **[6:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=393)** Even when we talk about the dimensional modeling, the date dimension is one of the most common dimension.
>
> **[6:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=399)** So if you are going to do the data analysis, one thing would be very sure that you will going to be play a lot with the datetime column.
>
> **[6:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=410)** Similar to the datetime, there is a one more data type, which is pretty popular, that is a string.
>
> **[6:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=417)** In the next video, we will see how we can play with this string and do the string manipulation.
>
> **[7:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/working-with-time-functions?u=76281980&t=425)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), let (6), this, (1), case, (1), pass (1)
> **Code Identifiers:** order_timestamp (5), current_timestamp (3), current_time (2), delivery_timestamp (2), date_truncate (1)
> **Definitions:** is a  (5)
> **Analogies:** for example (2), imagine (2), similar to (1)
> **CLI Commands:** find (3)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### String functions: Concatenation and trimming
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=0)** - [Instructor] So you have covered different mathematical and daytime function.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=6)** Now, it's time to play with the words.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=9)** Consider a messy signup sheet, where some people accidentally added extra spaces, or some people has put the junk characters.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=21)** Trimming those spaces and cleaning that sheet is a prime work to do.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=27)** So string functions will be a big help here to clean and transform this data in the database.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=39)** These functions help you deal with the text data in a way that mirrors how we manipulate words and phrases in our daily life.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=50)** Let's deep dive into string concatenation and trimming.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=55)** For example, we have our customer table.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=59)** And in our customer table, we have two columns, like city and address.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=65)** If I want to join these two columns together and get the data, I can get it using the string concatenation.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=76)** I say column city, and then I use this two pipe characters and I will use another column and then I say, let's pull it from customer table.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=90)** You will see that the city and the address got combined, although this combination doesn't look very good.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=98)** So what I can do is I can say, let's have a character involved in between them.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=107)** And we'll say, ---.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=111)** And now if I run this, you can see that city is coming and then we have a one kind of a separator, and then we are getting the address column.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=123)** Besides using this pipe character, there is a function also exist.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=128)** The function is called concat function.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=131)** In the concat function, you can pass the column or the string which you want to concat.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=138)** For example, like above, we want to concat two columns, so I just said select concat city and address.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=150)** Now this will get combined, but again, the problem remains the same.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=154)** This look is not very good.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=157)** So there is another function, which is called as concat with separator.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=163)** In the with separator you can provide the separation string, and then you provide the list of the strings which you want to concatenate.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=175)** And then we say select from customer.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=180)** Now you will see, again, the result where the two columns, city and address, got combined with a separator that is two dash.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=191)** Sometimes there is a lot of extra spaces in your string.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=197)** You can remove those spaces using the function called trim.
>
> **[3:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=203)** So you have a trim function, select trim.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=206)** And let's say I have a space, something like hello, and this.
>
> **[3:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=212)** If I use a trim function, trim will automatically remove these extra spaces from the left hand side, as well as from the right hand side.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=223)** If I execute this, I will get a simple hello without any extra spaces.
>
> **[3:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=231)** Sometimes instead of the spaces, you have a character, for example, you are pulling the data for some PIA, or personal identification data.
>
> **[4:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=244)** In that case, sometimes you feel data is coming like this, XXXHello, and then you have some XXX.
>
> **[4:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=254)** If you want to remove something like this, you can say, remove X from this.
>
> **[4:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=264)** Now, in this case, this character X will get removed from your left hand side, as well as from the right hand side.
>
> **[4:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=274)** On the similar lines, we have left trim and the right trim also there.
>
> **[4:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=278)** What you can do is, if you don't want to remove from the both the side, you can use select ltrim.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=288)** That will remove the spaces only from the left hand side.
>
> **[4:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=296)** If you want to remove it from the right hand, you can use the function as rtrim.
>
> **[5:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=302)** So rtrim, we're going to remove it from the right hand side.
>
> **[5:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=307)** Similarly, there is one more function, although it works exactly same like a trim, that is called as the btrim.
>
> **[5:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=315)** So what btrim do is it's trim from both the side.
>
> **[5:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=319)** So whether you use trim function or you use a btrim function, both will do the exactly same.
>
> **[5:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=327)** It'll remove the extract spaces from left and right side both.
>
> **[5:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=333)** This will sort out lot of your problems with your string.
>
> **[5:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-concatenation-and-trimming?u=76281980&t=338)** In the next video, we're going to talk about some more functions around the string, see you there.

> [!info]- Semantic Content
>
> **Code Keywords:** function (13), let (4), this, (4), this. (2), case, (2)
> **Definitions:** is a  (3), is called (3)
> **Analogies:** for example (3)
> **Env Vars:** pia (1), xxx (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### String functions: Changing case and extracting substrings
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=0)** - [Instructor] Assume you are managing a list of your favorite books.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=5)** Some titles are in all uppercase to grab your attention while others are in lowercase to make you feel more relaxed.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=16)** We can change the text case and extract a surface string using lot of string functions available in the SQL.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=28)** Let's just go back to pgAdmin and see how we can play with these strings.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=36)** Let's say I want to see the name of all my customers in a capital letter.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=43)** I can say select, upper.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=48)** I pass the name of my customer, say customer_name from customer table.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=59)** Now this upper function will give all the names into the uppercase letters.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=68)** Maybe that sounds too much right?
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=72)** Maybe if I want it into the lowercase.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=76)** So there is a function exist called lower function.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=81)** When you run this, it'll give you the result in the lower form or the case of all the result would be of lower case.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=92)** Upper will be too much.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=94)** Lower will be too lower.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=95)** You want something like an init cap where you want every first word of your string would be of capital and rest, all the letters of that word would be spawn.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=109)** In that case, you can use select init cap.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=116)** Now in this case, all the first letter would be the capital.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=123)** Let me execute this.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=127)** Now you see Alice, A is capital, rest all small.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=133)** Johnson, J is capital, rest, all is small.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=137)** That is the init cap function for you.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=140)** So it'll initialize the capital letter for every word.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=146)** Sometimes you want to split the string and you want to get a specific substring out of it.
>
> **[2:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=156)** You can do that using the substring function.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=161)** You can say substring, and let's say you have "hello from Deepak".
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=169)** Now in this case, if I want the first four characters or five characters, I would say from this string, I want from first character and I want up to five characters.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=189)** It means it'll take out from the first position and total five characters.
>
> **[3:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=196)** So when I execute this, it'll give me hello.
>
> **[3:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=200)** If I similarly say something here, let's say start from seven.
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=208)** So the seventh character would be five here, one is a space and seven will be from.
>
> **[3:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=215)** Now, in this case, if I execute, this will give me from here the index is starting from one.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=223)** In many of the programming language, which you have might learn earlier, have the index starting from zero.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=232)** If you want to use this substring in a shorter way, you have an option.
>
> **[3:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=237)** You can say select left.
>
> **[4:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=241)** Now in the left, what it'll do is whatever be the string that you pass, it'll give you the number of characters from that lefthand side.
>
> **[4:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=253)** So let's say here I am saying left string five.
>
> **[4:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=259)** So from the left first five characters, it'll pull out that is hello.
>
> **[4:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=266)** If on similar lines, if I say right and if I say pull out the six character from the right hand side, it means it'll start from the end and it'll pull out this word Deepak, because in the right it'll pick out from the right hand side, that is the end of the string.
>
> **[4:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=291)** In the left, it'll pull out from the start of the string.
>
> **[4:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=294)** Sometimes you want to identify whether a specific word exists in some set of words or in a string or not.
>
> **[5:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=304)** For example, here in this example, I want to check whether the Deepak word exists within this specific string or not.
>
> **[5:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=314)** I can do that using the position function.
>
> **[5:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=318)** In the position function, you can pass whatever you are looking for.
>
> **[5:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=325)** Let's say I am looking for this word Deepak inside this string.
>
> **[5:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=333)** So if this Deepak a keyword exists inside this, it'll give me the location.
>
> **[5:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=341)** It's saying that it is available at the 12th position if it was not exist, for example, instead of Deepak, I will say that Alice, now Alice does not exist in this string.
>
> **[5:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=358)** So if I try to find out the position of the Alice in this string, it'll give me zero that represent that this substring or set of character is not available in the string.
>
> **[6:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=374)** So if you get into a situation where you have to find out, let's say you get into a situation where you might be doing some analysis and you want to check a specific word has been there in the string or not, then you can use this position function.
>
> **[6:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=392)** Last but not the least, Maybe you wanted to identify the size of the characters.
>
> **[6:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=401)** You can say length and you can run this.
>
> **[6:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=404)** This will give you the number of characters in your string.
>
> **[6:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=409)** So there are variety of functions available, which we have seen from joining or dreaming.
>
> **[6:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=417)** Changing the cases like upper, lower initialization gap or maybe splitting the string using substring or identifying the size of the string.
>
> **[7:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=428)** We have covered almost all the important functions in the string world.
>
> **[7:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=434)** Now time has come to dig down into an analytical functions of the SQL.
>
> **[7:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/string-functions-changing-case-and-extracting-substrings?u=76281980&t=440)** Stay tuned.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (8), case, (4), pass (3), this, (3)
> **CLI Commands:** find (2), make (1)
> **Code Identifiers:** pgadmin (1), customer_name (1)
> **Env Vars:** sql (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** initialization (1)

#### Challenge: Play with strings
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-play-with-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-play-with-strings?u=76281980&t=0)** (bubbly electronic music)
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-play-with-strings?u=76281980&t=5)** - [Instructor] If you closely look up our Product Tags column, you will find that the tags contain the multiple tag value, which is separated by a comma.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-play-with-strings?u=76281980&t=15)** However, when team was analyzing, they find that the names are very improper.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-play-with-strings?u=76281980&t=21)** Some of them is uppercase, some of them is lowercase, so this does not look very professional.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-play-with-strings?u=76281980&t=28)** So, for a reporting purpose, team has been asked to print all these tag values along with the product ID in such a manner that it will look more decent, like your normal title case.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-play-with-strings?u=76281980&t=46)** Let's do that.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Code Keywords:** case. (1), let (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bubbly electronic music) (1)

#### Solution: Play with strings
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-play-with-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-play-with-strings?u=76281980&t=0)** - [Instructor] Let's first see how the tags looks like.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-play-with-strings?u=76281980&t=8)** I will say select * from products.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-play-with-strings?u=76281980&t=13)** And it specifically, let's say, select tags from the products.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-play-with-strings?u=76281980&t=21)** You can see that this is not looking correct.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-play-with-strings?u=76281980&t=24)** All of them are look like in a lower case.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-play-with-strings?u=76281980&t=27)** So to change this, we just say that initcap.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-play-with-strings?u=76281980&t=33)** So there is a function called initcap that will make the first letter as a capital one.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-play-with-strings?u=76281980&t=39)** Now, if I execute this again, you will see Electronics, Portable, Tech, all the words' first letter is coming as capital.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case. (1), this, (1), function (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. 6. SQL Analytical Functions

#### Introduction to analytical functions
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=0)** - [Instructor] As you are managing an e-commerce platform, now imagine you want to analyze the performance of each customer by comparing their order amounts with an average order amount within a specific timeframe.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=16)** Here's where SQL analytical functions come into the play.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=22)** By leveraging analytical functions, you can gain deeper insights into customer behavior, identify trends, and make data-driven decision in your e-commerce business.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=35)** Analytical, which also known as window functions in SQL, are powerful tools that provide advanced data manipulation capabilities.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=46)** Let just see all them in more detail.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=50)** Efficient data manipulation, analytical functions allows for complex calculation across sets of rows that are related to the current row.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=61)** With functions like ROW_NUMBER, SUM, or LEAD and LAG, you can perform data manipulations that would be cumbersome or inefficient with traditional SQL.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=76)** Analytical function helps to enhance the readability as well.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=80)** Instead of writing these subqueries or complex joins, analytical functions let you accomplish the same task within a single query.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=91)** This make the code more simpler and easier to understand for anyone.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=100)** For instance, calculating the running totals or calculating the ranking rows does not require self joins or any subqueries.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=112)** It also helps for performance optimization by operating over partitions of the data and avoiding multiple scans of the same table.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=123)** Analytical function can optimize the performance.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=127)** For example, calculating the moving average or finding the cumulative sums with window function can be faster than if you do the same thing using either the cell join or some other subquery way.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=145)** Scalability.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=147)** Analytical function often improves scalability as well.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=152)** And how they do it?
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=153)** They actually reduce the need for resource-intensive operations, like correlated subqueries, and as your data size grow over a period of time, this function can handle large dataset very efficiently when you manage your tables' indexes properly.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=175)** Another benefit this gives you is the windowing capability.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=181)** These analytical functions, for example, like RANK, DENSE_RANK, they can leverage the windowing capability by providing you insights that are not just row specific, but make you a specific set of rows or based on some context.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=201)** They allow you to divide your results set into logical segments or the partitions, which we sometimes call as windows, and then you can perform the calculation on those segment of the data.
>
> **[3:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=216)** These are some of the most common analytical functions.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=220)** First of them, ranking functions.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=223)** In the ranking functions, you have a function like RANK or a DENSE_RANK.
>
> **[3:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=228)** RANK assigns a unique rank to each distinct row within the results set.
>
> **[3:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=234)** Similarly, DENSE_RANK also gives the rank to each row, but without having the gaps between the rank values.
>
> **[4:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=244)** Next window functions, there's a LEAD and LAG.
>
> **[4:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=249)** These are two popular window functions that access the data for subsequent or the preceding rows within the result set.
>
> **[4:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=258)** We will see all of these in more detail as we move forward in the course.
>
> **[4:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=263)** We also have an aggregated function with OVER.
>
> **[4:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=267)** You can apply the aggregate functions, like SUM, AVERAGE, MAX, MIN, et cetera, over a specified set of rows, which you got under the window.
>
> **[4:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=280)** We also have a ROW_NUMBER function that assigns a specific row number to each row, which you got in the result set.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=288)** We also have a cumulative distribution function that can calculate the cumulative distribution of a value within a certain group.
>
> **[5:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=300)** These functions add analytical capabilities to your SQL queries, allowing you to gain deeper insight into your data.
>
> **[5:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=309)** This is almost certain that you're going to get drilled on these analytical functions, so this plays a very crucial role, not only in the SQL world but also into the world of your SQL interviews.
>
> **[5:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=322)** So focus on all of these.
>
> **[5:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=325)** In the next video, we go deep down into the RANK function.
>
> **[5:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-analytical-functions?u=76281980&t=329)** See you there.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6), rank (4), dense_rank (3), row_number (2), sum (2)
> **Code Keywords:** function (10), let (2), require (1), self (1)
> **Analogies:** for example (2), imagine (1), for instance (1)
> **CLI Commands:** make (3)
> **Cross-References:** in the next (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Using the RANK() function
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=0)** - [Instructor] RANK function in PostgreSQL is a window function that assigns a rank to each row within a partition of a result set.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=11)** The rank of a row is one plus the number of ranks that comes before it.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=18)** For example, like in an school, or in your college when you have an exam and the exam results go out, based on the marks every student get, there is a rank assigned to each of these student.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=33)** Similarly, in the SQL world also, when you are trying to analyze something and based on your need, you want to rank something, there a RANK function can be utilized.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=46)** It is particularly useful in the scenarios where you want to compare items across some ordered groups.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=55)** Let us see how RANK function works.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=59)** RANK assigns a unique rank to each row.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=63)** Maybe you decide the order, let's say, for example, if we talk about our product table.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=70)** Now, in the product table, if I want to identify the product ranks based on the amount of this product, or the price of this product, so I can say that I'm doing a ranking of this product based on the price of the product in either ascending order or in descending order.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=90)** Ranks are not consecutive.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=92)** Sometimes imagine that if two rows, or two product price having exact the same price.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=99)** In that case, both of them will got the same rank and the next item or the next row will got a rank which is a gap.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=108)** So for example, let's say we have a product price one, then two product has like a same price.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=115)** So we'll say rank one for the product one and for rest of the two product, it will be rank two, two, but the next product rank would become four.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=124)** So you will find that there is the gap.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=127)** So whenever there is a collide two or more rows having these same values or having got the same rank, then whatever be the next rank comes will have that difference.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=138)** So it'll be like one, two, two, four, something like that.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=143)** Now, let's take a very real-world example.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=147)** Consider a scenario where you want to analyze customer orders from the order table.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=154)** Specifically, you are interested in ranking these orders for each customer based on the total amount.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=164)** For example, a customer has generated five orders.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=168)** Then you want to rank these order based on the total order amount all these order have for each customer.
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=177)** Now, if something, this needed to be done, how you can do it using the RANK function?
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=182)** For this, let's just go back to our pgAdmin 4 and see how we can apply this.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=189)** So we want to have our order get ranked based on the order amount.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=195)** For now, let's just say that like select just a customer_id for a time being.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=202)** Comma.
>
> **[3:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=203)** Now, I wanted to find out the rank, right?
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=206)** So how I would say?
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=208)** I would say a function called RANK function and I'm doing ranking on, I will say over and then in the bracket, I will say partition by, because I'm doing ranking for each customer.
>
> **[3:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=224)** So I will say that just partition my data based on the customer_id.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=229)** So I will say that partition by customer_id and this customer_id, when I'm partitioning, the ordering needed to be done by total_amount desc.
>
> **[4:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=246)** So this will take out the customer and the total number of orders for that and whatever be the number of rows comes, it will sort that number of rows based on the total_amount.
>
> **[4:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=259)** And then we just say it like an alias that is called as let's say order_rank.
>
> **[4:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=266)** And let's for every one of them, let's print the order amount as well.
>
> **[4:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=270)** So I just print the order amount, so that is nothing but a total_amount.
>
> **[4:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=276)** So I'll just print the total_amount as well along with it.
>
> **[4:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=280)** And I will say that from orders.
>
> **[4:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=283)** Now let me execute this query and then I'll explain it again.
>
> **[4:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=289)** I have to say here comma.
>
> **[4:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=293)** Now, in the bottom, you can see that.
>
> **[4:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=295)** You see it got clubbed based on the customer_id because we did here partition by customer_id.
>
> **[5:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=303)** So we have a customer_id 1.
>
> **[5:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=306)** For this customer, there are five records for this customer.
>
> **[5:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=309)** Now, out of these five records, you see these two have the first rank, second rank, but row number three and row number four have the exact same order amount.
>
> **[5:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=321)** In that case, both of them got the rank three, three and the next order amount got the rank five.
>
> **[5:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=328)** So this is what we were talking about.
>
> **[5:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=329)** When you do the ranking using the RANK function, you see a gap because if two ranks are having the same value or the same rank comes, the next row will have a gap.
>
> **[5:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=342)** So it's like ideally someone has to be four, but two got combined or like have the exactly same result.
>
> **[5:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=348)** So we skip that rank number four, and the next row will become rank number five.
>
> **[5:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=353)** So that is the basically RANK function is.
>
> **[5:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=357)** You can see for the customer two, there are only two records.
>
> **[6:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=361)** So here it's a order rank one and order rank two based on the total_amount.
>
> **[6:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=367)** Similarly, if you go down, you will see that for this customer_id 31 also, there is only two record, customer_id 1, id 2.
>
> **[6:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=377)** So one more time.
>
> **[6:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=379)** If we quickly look at the query, what we did, we see use a RANK function using over.
>
> **[6:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=385)** We try to partition it, and how we are partitioning?
>
> **[6:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=388)** We are partitioning based on the customer_id.
>
> **[6:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=392)** For one customer, there will be multiple orders.
>
> **[6:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=394)** How you decide this order to come?
>
> **[6:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=396)** So we say that order by total_amount.
>
> **[6:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=399)** So whatever be the real amount come, we want it to be decreasing order so that the highest amount will get the rank one and subsequent will get the lower rank.
>
> **[6:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=410)** This kind of query is useful in business when you're trying to identify your top performing products or you wanted to identify the top orders or you wanted to make some business decision based on it.
>
> **[7:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=426)** In the next video, we're going to talk about the DENSE_RANK and then we'll see how this gap in the rank problem can be solved.
>
> **[7:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-rank-function?u=76281980&t=434)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), let (10), case, (2), this, (1), this. (1)
> **Code Identifiers:** customer_id (10), total_amount (6), pgadmin (1), order_rank (1)
> **Env Vars:** rank (9), sql (1), dense_rank (1)
> **Analogies:** for example (4), imagine (1), it's like (1)
> **Definitions:** is a  (4), is called (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** go back to (1), in the next (1)
> **Speakers:** - [instructor] (1)

#### Using the DENSE_RANK() function
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=0)** - [Instructor] DENSE_RANK function in PostgreSQL assign a rank to each row within a partition of a result set.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=9)** The most important thing is it provides no gaps in the ranking values.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=16)** This means that if two or more rows have the same value in the order by clause, then they will going to receive the same rank, but the subsequent rank will not be skipped because we have seen in the case of the rank function, if the two rows have the same rank, the next row will have a skip in the ranking value.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=43)** DENSE_RANK will not do that.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=46)** That is the major difference between the rank and the DENSE_RANK.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=52)** Let's take a real world use case.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=55)** Imagine that you want to analyze your sales data to understand the ranking of orders for each customer, but this time you want to ensure a continuous sequence of the rank will come even when there are ties.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=73)** That is orders with the same total amount whenever occur, you should not skip the rank.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=80)** For example, this could be an effective or important analysis you wanted to do because you might be assigning some rewards or points based on the rank somebody achieve and therefore you don't want to skip any levels because of these ties.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=101)** Let's just go back to the PG admin and see how we can apply this 10 strength function.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=108)** Let's take the same use case where we want to analyze the customer ranking based on the order amount.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=117)** I would say select customer ID.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=119)** Then this time I will say DENSE_RANK.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=124)** Last time we did was like rank function, this time we going to do the DENSE_RANK function.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=130)** I will say DENSE_RANK over.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=133)** Then again, we want to divide it based on what we want to divide it based on the customer ID.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=140)** So I would say partition by customer ID and ordering I want to do it based on the total amount.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=152)** So I would say order by total amount DESC and assign a 1ES to that.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=161)** So we call it like order rank.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=164)** Also, let's print our total amount as well, so we get to know what exactly the order amount is coming in, how the rank is getting assigned.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=175)** Now this time you will see the magic.
>
> **[2:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=178)** Last time when we do this using the rank function, we got the skip in the rank, but this time just see here.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=187)** The row number three and row number four have a customer ID one, and your rank is three because there is a tie between the total amount, 120.50.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=199)** But if you look at the row number five, even though there was a tie at the row number three and row number four, even in that case, the rank has not skipped.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=211)** When we have used the rank function, the rank got skipped and the rank was coming like five.
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=219)** See here, this was the result of the rank function.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=223)** In the rank function, the row number five was coming five because there was a tie and rank skipped the rank.
>
> **[3:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=234)** But here when we do it with the DENSE_RANK, the skip is not there.
>
> **[3:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=239)** So that is a major difference between the rank function and the DENSE_RANK function.
>
> **[4:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=245)** So if you have a situation where you wanted to showcase all the rank without skipping any of them, even in case of ties, that you go ahead and use the DENSE_RANK function.
>
> **[4:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=261)** In the next video, we talk about zero function.
>
> **[4:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-the-dense-rank-function?u=76281980&t=265)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** function (13), let (4), case. (1), case, (1)
> **Env Vars:** dense_rank (9), desc (1)
> **Definitions:** is a  (2), means that (1)
> **Cross-References:** go back to (1), in the next (1)
> **Analogies:** imagine (1), for example (1)
> **Versions:** 120.50 (1)
> **Speakers:** - [instructor] (1)

#### Exploring the ROW_NUMBER() function
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=0)** - [Narrator] Imagine you are at airport eagerly waiting for your flight.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=5)** In the crowd, you noticed a display board indicating the boarding order for passengers.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=12)** Each person is assigned a unique number, determining when they get to board the plane.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=19)** In the world of databases, the SQL function row number serves a similar purpose, providing a distinctive identifier to each row within your result set.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=34)** The row number function in PostgreSQL is a window function that assigns a unique number to each row in the result set according to the specified order.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=48)** Unlike the rank and the dense rank function, row number function does not assign the same value for duplicate rows.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=58)** Remember, row number is not a ranking function.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=64)** Even if two rows are identical based on the ordering, each row will get a distinct row number starting from 1 within each partition.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=77)** Let's take a one real-world use case.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=80)** Imagine you want to analyze the sequence of orders placed by each customer to identify which was their first order, second order, third order, like that.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=93)** This can be insightful for understanding customer behavior, such as how quickly they place the order, or when they place the last order, what is the gap between these multiple orders and what could be the pattern?
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=112)** Let us go back to our pgAdmin and see how we can do this.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=118)** In this case, we wanted to assign the unique number for every order which has been placed by every customer, right?
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=130)** But a customer has placed five orders or 10 orders, and we want to set an order for each customer.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=136)** So in that case, we're going to use this row number and we will partition this row number again by customer IDs.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=146)** How will we do it?
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=147)** Let's just say this, we'll say we'll have an order ID, maybe we are entrusted in knowing the customer ID as well, and let's have our order timestamp, because this time, we wanted to give this row number based on the time of the order.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=169)** So I would say row number, and this row number function, I will say that over, partition by.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=182)** We are doing partitioning on customers.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=185)** So we'll say partition by customer ID.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=188)** And the ordering would be, we'll say, order by order_timestamp, because we want to order based on when they have generated the order.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=202)** And let's have this asc, because we want it to be an ascending order.
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=208)** And let's give an alias to this saying order, sequence, number from orders.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=220)** Now, when we execute this query, we'll have one comma missing here, and let's just run this.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=229)** Now you will see that for customer one, we have these five orders.
>
> **[3:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=234)** And here you can see the timestamp.
>
> **[3:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=237)** The first order was on 15th of January, then 5th April, then 9th January 2024, 27, and then 13th fab.
>
> **[4:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=249)** And here you see the order sequence number.
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=252)** It is coming one, two, three, four, five.
>
> **[4:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=254)** There is no duplication.
>
> **[4:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=256)** Even though if you remember, our row number three and four probably in last case was having the rank.
>
> **[4:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=263)** So rank was coming same, but this time in the row number, you're always going to get exactly the unique values for each row.
>
> **[4:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=276)** Even if I just go back to the previous query here in the dense rank, instead of the dense rank, if I just try to see the row number, and if I do it, you will find that the row number will come like one, two, three, four, five.
>
> **[4:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=295)** Even though we are doing partitioning on customer ID order by total amount, these two total amount is exactly the same.
>
> **[5:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=304)** But still, this row number comes to be a unique, because we are not checking based on what uniqueness is there or not.
>
> **[5:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=315)** We are checking that the numbering one, two, three, four, five, six, seven.
>
> **[5:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=319)** So it's a sequence.
>
> **[5:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=320)** So row number gives you the sequential and it is not skipping any value, plus not giving the duplicate to any of the row.
>
> **[5:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=331)** Generally, this row number probably could be particularly useful for customer journey analysis.
>
> **[5:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=340)** It allows businesses to track and understand the progression of each customer's engagement over time through their order history.
>
> **[5:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=351)** So by looking at this, you can say that, okay, earlier my customer was buying the product once in a year or putting an order like once in a year, but from last three months, he's regularly ordering.
>
> **[6:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=364)** So that is something has been changed.
>
> **[6:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=367)** Now, you might be interested in knowing what customer has ordered previously or what customer is going to order the next.
>
> **[6:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=376)** So you want to be particular about the recent or the upcoming orders or the next orders.
>
> **[6:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=384)** So this can be done through lead and lag.
>
> **[6:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=388)** In the next video, we're going to dive deep into the lead and lag.
>
> **[6:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/exploring-the-row-number-function?u=76281980&t=391)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (7), this. (2), case, (2), this, (2)
> **Cross-References:** go back to (2), in the next (1)
> **Analogies:** imagine (2), such as (1)
> **Code Identifiers:** pgadmin (1), order_timestamp (1)
> **CLI Commands:** find (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Understanding the LAG() and LEAD() functions
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=0)** - [Instructor] Considering our e-commerce database, imagine if we want to analyze whether the demand for a specific product is increasing or decreasing or it is kind of unstable.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=15)** It can be understand by analyzing the change in total quantity of our successive or the consecutive orders.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=26)** That's where the LAG and the LEAD function can be applied to track the changes in sequential order data.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=36)** In technical terms, LAG allows you to access the value of a specific column from the previous row in that specific results end.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=50)** For example, it could be a very handy when you wanted to compare the current row's value with its preceding row.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=61)** Like you wanted to check today's stock price with the yesterday's stock price.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=68)** There is also another function that is the LEAD function that lets you access the value of a specific column from the next row within the result set.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=81)** LAG get you the previous one, LEAD gets you the next one.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=87)** So imagine that you have a sales data and maybe you are trying to forecasting these sales for the next period that could be using through the LEAD.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=100)** Let's take our e-commerce database an example.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=104)** Consider we are trying to analyze the order table to understand the time gap between the consecutive orders.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=115)** Sometimes you have a customer which is ordered today, then wait for 10 days, maybe 20 days, and then order the next.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=122)** So you trying to analyze the customer buying pattern based on the timestamp on which he has ordered and that we are going to use the LEAD and LAG indicators.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=138)** Let's just go to the PG Admin and see how we can do it.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=143)** We wanted to find out the orders based on the order_timestamp for each customer.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=149)** So I would say select customer_id, select order_id, and let's have our order_timestamp as well.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=160)** Now I wanted to identify for every order what was the previous order date?
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=167)** So I would use the LAG indicator.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=170)** I will use the LAG function.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=173)** I will say lag order_timestamp.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=179)** And I am looking for just a one row previous, so I just say comma one and this, I want to do it over partition by customer_id.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=195)** And we say order by order_timestamp and we call it as previous order.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=209)** And finally I will say from our orders table.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=213)** Now when I execute this table, let's just see.
>
> **[3:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=218)** What it'll do is let's say for this customer_id one, for order, I did this, the previous row or the previous row before that is this one.
>
> **[3:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=231)** So when I got the second row, you will see that it is telling us the order_timestamp for the previous row here.
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=240)** So this is telling me that customer has put the order on 5th of April and before that he has ordered on 15th of January.
>
> **[4:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=251)** In the third row, you will see the next order comes on 9th of January and it'll get this previous order timestamp from a one row before it.
>
> **[4:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=263)** So this order_timestamp is coming here.
>
> **[4:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=269)** So that's how you can get the LAG indicator.
>
> **[4:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=273)** Now there is a one problem.
>
> **[4:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=275)** When you do this kind of using a LAG function, the boundary condition comes.
>
> **[4:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=281)** For the first order, in this case, there is nothing previous to it.
>
> **[4:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=286)** So you will find that it is going to give you the null because if it is the start, then there is no previous exist before it.
>
> **[4:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=297)** So in that case, specifically null will come.
>
> **[5:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=300)** In those cases where you are doing some kind of an analysis, in that case, you go and use the null handling properly so that, if these kind of null values come because of this boundary, then you can filter them out correctly.
>
> **[5:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=318)** Now on the very similar lines, if we wanted to understand when somebody ordered and what was his next order timestamp, then instead of the LAG, we will just use the LEAD.
>
> **[5:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=334)** So if we do that and execute the query, I'll just change this previous order to the next order because LEAD give me the next thing.
>
> **[5:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=343)** So I just say next_order and re-execute this.
>
> **[5:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=350)** Now here you can see that by the first row it say the times is this, and once you've done it, the first order on 15th of January, the next he did on 5th of April.
>
> **[6:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=362)** So you can see that what will be the next row, that value for this order_timestamp will come in this column here.
>
> **[6:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=372)** So this LEAD function is telling me that the value from the next row.
>
> **[6:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=379)** Now, similarly here also a null condition achieved when you have the last order.
>
> **[6:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=384)** So when you have this last order here, you don't have any other order beside this.
>
> **[6:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=390)** So in that case, the next order will come out to be null.
>
> **[6:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=394)** So overall LEAD and LAG function tells you either the previous row value or the next row value.
>
> **[6:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=404)** In both of these cases, you eventually will have to handle the null because there is an boundary condition.
>
> **[6:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=412)** So whenever you use this LEAD or LAG function, just keep this thing in the mind that is the boundary condition or the edge cases.
>
> **[7:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=421)** Another thing could be is that it can have the (indistinct) performance issues as well, because if you are table size is too large and there you are applying this LEAD or LAG function, then it could have the performance impact because the column which you might be using is not properly indexed.
>
> **[7:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=442)** And if the column is not indexed, then it could have a problem of performance.
>
> **[7:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=449)** So beside having these small limitations, LEAD and LAG is very popularly used for data analysis.
>
> **[7:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=457)** And data analysis is incomplete without using these functions.
>
> **[7:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=464)** Now it's time to do a deep dive into another interesting function that is calculating the running total.
>
> **[7:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-the-lag-and-lead-functions?u=76281980&t=473)** See you into the next video.

> [!info]- Semantic Content
>
> **Env Vars:** lag (13), lead (12)
> **Code Keywords:** function (10), let (5), case, (4), this, (3), this. (2)
> **Code Identifiers:** order_timestamp (7), customer_id (3), order_id (1), next_order (1)
> **Analogies:** imagine (2), for example (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** next video (1)
> **UI Navigation:** go to (1)

#### Running totals with SUM() OVER()
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=0)** - [Instructor] Let's understand running total first.
>
> **[0:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=3)** Assume that you start the month with a certain amount of money in your wallet.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=9)** Let's call it your monthly budget.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=13)** Now, throughout the month, you make various purchases, called the expenses.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=19)** And each have their own price, you can call them as your daily expenses.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=27)** Now, here would be your running total will look like.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=33)** On day one, you spend $20 on buying some groceries for your household purpose.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=41)** Your running total will become $20.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=44)** On next day, you buy a coffee for your friend.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=48)** $5, I know it's quite cheap, but assume it's a $5.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=54)** Your running total will become $25.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=58)** On day three, you go for dine out, and you spend around $30 on dinner.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=66)** Your running total will become $55, and so on.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=71)** Each day, your running total reflects the cumulative amount you have spent up to that point of time.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=80)** It's like keeping a running tally of your expenses, and showing you how your budget is being used over a time.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=90)** In the world of SQL in databases, running total using SUM and OVER function work exactly in similar way.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=100)** They provide a running sum of specific column as you go through the dataset.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=107)** It's a dynamic way to understand cumulative values over a sequence of events.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=114)** To calculate the running total, SUM function is used to add the value.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=120)** And use of OVER function will help you to partition the data and create a segment of a data over your entire dataset.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=130)** And then the sum will happen on this specific subset of data only.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=137)** Let's take a real-world use case.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=140)** Imagine you want to analyze the cumulative total of orders placed by each customer over a time.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=150)** This can help you in understanding customer spending pattern and identifying the key customers, based on their order history.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=162)** Let's just go back to our PG admin and see what I'm exactly talking about.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=167)** We'll say select customer_id, our order_id, and let's say total_amount, and our order_timestamp.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=185)** Now, all of these I wanted to get my running total average.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=190)** And how I get that? I will say sum.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=193)** Sum of what? Sum of total amount, and I want this sum over, I want this to be partitioned by our customer id.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=209)** And we do the order by based on our order timestamp, so that as the user is, you know, spending, we get to know the total running amount he has spent on ordering.
>
> **[3:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=228)** And I will say this from orders.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=232)** Now, let me execute this.
>
> **[3:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=234)** Here, you see this running total.
>
> **[3:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=237)** See, this is the first order.
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=240)** When this customer has put the first order, my running total was one 120.50.
>
> **[4:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=246)** When he put out this second order, my running total will become 241.
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=252)** When he put out this third order, the total money spent by this specific customer on our orders is 752.
>
> **[4:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=261)** Then the fourth one, he ordered another, and then finally he ordered another.
>
> **[4:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=267)** So now you can see this, how the customer spending is increasing.
>
> **[4:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=274)** Imagine that you have a dashboard, where you are showcasing a specific customer journey.
>
> **[4:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=280)** Then you can have this specific running total function, which could play a very crucial role in presenting that customer journey of how much he has spent on our e-commerce portal so far.
>
> **[4:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=296)** On a similar lines, let's take another example.
>
> **[4:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=298)** This time, we want to track how the total quantity of each product got sold.
>
> **[5:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=306)** So that we can identify, like, which product are moving fast and which product are not?
>
> **[5:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=312)** So that we can order that from our vendor accordingly, right?
>
> **[5:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=318)** So let's say, I will say here, select product_id, _timestamp, total_quantity.
>
> **[5:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=331)** And then I will see the sum of this total quantity.
>
> **[5:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=337)** But that is a running total quantity.
>
> **[5:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=341)** So I will say sum of this total quantity.
>
> **[5:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=344)** And I will do this over partition by product_id, and we will say order by on our order_timestamp.
>
> **[6:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=360)** And I call this column name as running quantity from our orders table.
>
> **[6:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=369)** Now, when I execute this query, you'll see there's three orders has been done for product ID one.
>
> **[6:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=378)** And you can see that the total quantity order was five initially, so running quantity is five.
>
> **[6:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=383)** The next one is three, total quantity order is eight.
>
> **[6:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=387)** The next one 10, and the total running quantity is 18.
>
> **[6:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=391)** So similarly, for every product you can see this journey.
>
> **[6:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=396)** You can see for every product, that total running quantity based on every order it is going through.
>
> **[6:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=404)** This probably can help me to understand my sales velocity, right, of every product.
>
> **[6:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=413)** I can understand, like, which product is selling fast?
>
> **[6:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=416)** Which product is selling slow?
>
> **[6:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=419)** And maybe I can adjust my upcoming offers and promotions based on this.
>
> **[7:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=428)** In a nutshell, a running total can be helpful for analyzing the trends, identifying point of interest, or understanding the cumulative impact of values over time.
>
> **[7:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/running-totals-with-sum-over?u=76281980&t=441)** Let's deep dive into calculate moving averages in the next video, see you there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (4), this. (2), case. (1), this, (1)
> **Code Identifiers:** order_timestamp (2), product_id (2), customer_id (1), order_id (1), total_amount (1)
> **Env Vars:** sum (2), sql (1)
> **Analogies:** imagine (2), it's like (1)
> **Cross-References:** go back to (1), in the next (1)
> **CLI Commands:** make (1)
> **Versions:** 120.50 (1)
> **Definitions:** is a  (1)

#### Calculating moving averages
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=0)** - [Instructor] Moving Averages.
>
> **[0:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=2)** Assume that you want to understand the trend in daily temperatures in your city.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=9)** To figure out whether it is getting warmer or cooler over time, you collect the temperature data every day for a month.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=19)** Now, instead of looking at the raw daily temperature, you decide to calculate a seven-day moving average.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=27)** This means, for each day, you take the average of temperature on that day and the temperature of the six preceding days.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=38)** This smoothens out the daily fluctuation, and you can get the trend line.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=45)** Here how it works.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=47)** On day one, let's say your temperature is 75 degree Fahrenheit.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=53)** Now the seven-day moving average for day one will become 75.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=58)** On day two, the temperature was 78, so your seven-day average will become 76.5.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=67)** On day three, imagine the temperature is 80 degree Fahrenheit.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=74)** Now the seven-day moving average will now become equals to 77.67.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=82)** And similarly, it will go on for 30 days.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=87)** By calculating the moving averages, you get a smoother line.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=92)** That shows the overall trend in the temperature rather than you focus on daily fluctuation.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=100)** Because imagine, if you just look at the everyday number, probably you will not get something, good info about it.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=108)** If the seven-day moving average is consistently going up, you can say that the trend is that weather is getting warmer, and if it is decreasing, the trend indicating that the winter is coming.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=123)** In other words, moving averages is a statistical calculation which is used to analyze data over a certain period of time by creating the series of average of different segment of your full data set.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=144)** It is commonly used in various fields, which includes finance, economics, signal processing, insurance, and many more, where to identify the trends and patterns in time series is important.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=163)** Let's take a one real-world use case from our e-commerce system.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=168)** Assume that you want to analyze the trend of order amounts over time for a specific product or category to understand the sales performance.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=181)** A moving average can help you to find out that trend.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=188)** How we can do it?
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=189)** Let us move to our BG Admin and see how we can do that.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=194)** This time, let's have our, we call it like a three-order moving average.
>
> **[3:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=200)** So we don't have many number of orders, so we'll just take three orders and take an average of every three orders.
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=208)** How we do it, let's just see.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=211)** I will say select our order_id, comma, customer_id and have our order_timestamp.
>
> **[3:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=224)** And let's have our total_amount as well.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=230)** Now, we wanted to have the moving average.
>
> **[3:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=234)** In the previous movie, we have seen the moving sum.
>
> **[3:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=239)** This time we are seeing moving average.
>
> **[4:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=242)** So I will say average of my total amount.
>
> **[4:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=248)** Then I wanted to do it on subset of data, so I will say over, and then I will say partition by, and I'm doing the partitioning based on the customer_id.
>
> **[4:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=263)** And then I will say order by, and I will say order_timestamp, order by timestamp.
>
> **[4:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=273)** And now there is a slight difference we have to do.
>
> **[4:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=277)** We wanted to have an average, right?
>
> **[4:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=279)** So we'll say it take an average of rows between 2 preceding and current row.
>
> **[4:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=291)** And we call it like as moving average.
>
> **[4:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=296)** We are saying that take a current row, add two rows before it, so we combine three rows together and form our average.
>
> **[5:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=305)** If I want to do just an average based on the two rows, I would have been saying that rows between 1 preceding and the current row, okay?
>
> **[5:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=316)** And let us have execute this query.
>
> **[5:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=321)** I forget to add here from orders table.
>
> **[5:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=326)** Now let's just execute.
>
> **[5:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=329)** Now you can see here moving average.
>
> **[5:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=332)** When your first order is out, the moving average is equal to total amount.
>
> **[5:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=337)** When second order gets out, the moving average still remain the same because coincidentally the price for both of these orders are exactly same.
>
> **[5:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=348)** Now, when you place the third order, now you can see that average got change.
>
> **[5:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=355)** And in the fourth row, if you see, the order amount has 369, and now my moving average again got change.
>
> **[6:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=364)** And for the fifth row, again, this got change.
>
> **[6:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=367)** So that's how you can go ahead and you can calculate your moving average.
>
> **[6:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=372)** But every time you see this moving average, this moving average is, as per our query, is for this current row and our one previous.
>
> **[6:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=382)** If you want to have an average of like all the rows or some specific number of rows, whatever it is in your mind, you can keep that number here, and based on that, it will take an average of that specific set of rows.
>
> **[6:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=399)** The biggest advantage of using this moving average in the world of deep trend analysis, with the help of this, you can do the trend analysis much better.
>
> **[6:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=410)** But, again, be aware of the edge cases because for the first row, you will always get the same value as of average because there's nothing to start.
>
> **[7:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=420)** And keep the performance thing in the mind, and if you have so many row you want to clump together for this moving purpose, then it have some performance impact.
>
> **[7:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=433)** Otherwise, moving average is an awesome functionality for doing this trend analysis.
>
> **[7:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=440)** That's how we have covered the most popular analytical function in the SQL world as far as the data engineering is concerned.
>
> **[7:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=449)** In the next video, we're going to talk about the views.
>
> **[7:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/calculating-moving-averages?u=76281980&t=452)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (1), function (1)
> **Code Identifiers:** customer_id (2), order_timestamp (2), order_id (1), total_amount (1)
> **Definitions:** is a  (2), in other words (1), is an  (1)
> **Versions:** 76.5 (1), 77.67 (1)
> **Analogies:** imagine (2)
> **CLI Commands:** find (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)

#### Challenge: Find out the sum
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-find-out-the-sum?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-find-out-the-sum?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-find-out-the-sum?u=76281980&t=5)** - [Instructor] Let's find out the cumulative sales volume of each product over the time.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-find-out-the-sum?u=76281980&t=12)** Now, understand, the cumulative sales volume means we are seeing here the cumulative sales volume would be like the running total of your quantity for each product ID and that you have to do based on your order timestamp column.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-find-out-the-sum?u=76281980&t=31)** Let's do that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### Solution: Find out the sum
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-find-out-the-sum?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-find-out-the-sum?u=76281980&t=0)** - [Instructor] To find out the sales volume, this could be the answer.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-find-out-the-sum?u=76281980&t=10)** So here, let's see what I have did.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-find-out-the-sum?u=76281980&t=13)** I'm saying that select product_id, order_timestamp and total_quantity, and I'm saying sum of this total_quantity, partition by product_id.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-find-out-the-sum?u=76281980&t=25)** And we have sorted it based on the order_timestamp.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-find-out-the-sum?u=76281980&t=29)** And I just given alias as running_qty.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-find-out-the-sum?u=76281980&t=33)** So this will exactly solve our problem.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-find-out-the-sum?u=76281980&t=36)** If I execute this, you will get the running_qty and based on the order timestamp.

> [!info]- Semantic Content
>
> **Code Identifiers:** product_id (2), order_timestamp (2), total_quantity (2), running_qty (2)
> **Code Keywords:** let (1), this, (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 8. 7. Views and Stored Procedures

#### Introduction to views
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=0)** - [Instructor] Visualize your scenario.
>
> **[0:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=3)** You have a job where you need to get the information from different places to create a report.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=11)** Each time you want data, you have to go to the multiple places, combine the things, and then make sense of it.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=20)** It's like doing a puzzle each time.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=23)** Without using views, doing the puzzle can be hard.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=27)** If things change, or you need to update your report, it's get even trickier.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=33)** It's like rearranging the pieces of the puzzle every time you want to see the full picture.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=40)** Using view is like putting together your puzzle without starting from scratch each time.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=47)** In the context of the relational databases and SQL, a view is a virtual table derived from the result of SELECT query.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=57)** It doesn't store data by itself, but gives a way to look at the data in more organized and simple manner.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=67)** Assume you have a messy room with lots of toys scattered around.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=72)** A view is like a clear glass box that need to display a specific group of toys, making it easier for you to see and play with them without having to deal with the mess directly.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=87)** Let's understand the benefits of using the views in a real-life scenarios.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=93)** It helps you to make your reporting very simplified.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=97)** Viewers provide a simplified and organized way to access the complex data structure, making report generation more straightforward.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=109)** It also helps to make your data more secure because you can control the access to a specific data while using the views.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=119)** You can allow the user to query the view without exposing all the details of the underlying tables.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=127)** So now you can imagine if, let's say, you have an order table or a product table and you don't want to showcase to the user that you have an order table or a product table, you just showcase a one view and all the columns of these table, you can hide it under this view.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=147)** Another advantage is adaptability.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=150)** Views offer a layer of abstraction, enabling changes to the underlying data structure without affecting the queries using the views.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=160)** Imagine that something got changed at that table level.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=165)** Now, you might not get directly affected because you might be using the view and somebody can go and just change that view.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=173)** For you, everything else will remain exactly the same because you might not be pulling the data using the same exact column name of the table.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=182)** You are pulling the data through the views so that make the things more adaptable.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=189)** Views promote code reusability by encapsulating the logic that might be useful in multiple reports or analysis.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=199)** Your views can be optimized by the database engine, potentially leading to a better query execution plans.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=207)** This can result in faster data retrieval for a certain scenarios.
>
> **[3:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=212)** In short, using views in the SQLs offer a range of benefits from simplifying queries and enhancing security to promoting code reusability and performance.
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=226)** These advantages contribute to a better data management and make it easier to work with complex database structure.
>
> **[3:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=235)** Now, we have understood the views.
>
> **[3:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=237)** Now, it's time to see how you can create the views in the real-time environments.
>
> **[4:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=244)** Let's dive in into the next session where we're going to see how to create the views.
>
> **[4:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-views?u=76281980&t=249)** See you there.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Analogies:** it's like (2), imagine (2), picture (1)
> **Code Keywords:** let (3), if, (1)
> **Env Vars:** sql (1), select (1)
> **SQL:** select (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Creating and using views
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=0)** - Let's just quickly see how you can create the views.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=4)** The syntax for view creation is, you use create view as a keyword.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=9)** You give the name of the view and then AS and after that you have a SQL query, whatever you want it to generate the view upon.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=21)** Now let's go back to what pgAdmin 4 and have a one real world use case and see how we can create there.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=29)** Suppose you want to create a view to summarize the orders for each customer, which shows the total number of orders and the total amount spent.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=40)** Now this view could simplify the reporting and analysis probably for the sales team members who might not be very familiar with the SQL queries.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=52)** So how we can do it? Let's just see.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=54)** Let's create the view saying create view, and then we give the view name.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=61)** Let's give the view name as customer_order_summary.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=70)** And then we give the keyword call AS and after this AS whatever you're going to write will become your select statement.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=78)** So here what I want, I want the customer id and for every customer I want total orders and total the amount he has spent.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=89)** So I would say that select customer_id, count(order_id), we want sum right?
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=102)** So I would say sum(total_amount) and then I will say from my orders table.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=115)** But if I do, it'll not give me the total sum.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=119)** Why? Because I wanted to do total sum for every customer.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=124)** So remember what we need to do, we need to do this group by.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=129)** So we have to do this grouping based upon this customer_id.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=136)** Now if I just execute this, this has created a one view, which is giving me the customer ID and total number of orders this customer has placed and the total amount.
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=151)** Now if I want to use this view, now I can say select * from this customer_order_summary.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=166)** So now I'm selecting not from the table, but I'm selecting from my view, which I have just created.
>
> **[2:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=174)** And when I execute this, you will see the result.
>
> **[2:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=178)** So now you can understand the complexity of writing this query got hidden under this view.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=186)** Now, later on whenever we need this information, instead of calling this query again and again we just go and call this view.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=195)** We just say select * from this view.
>
> **[3:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=198)** Now when I do this and say execute, I get this data.
>
> **[3:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=203)** So here I got it, like this customer ID has total number of orders one, and he has spent this much amount of money.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=211)** In fact, let's say I am looking for a specific customer.
>
> **[3:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=215)** Here I can add the where clause on top of this view itself.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=220)** I could say something like that.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=222)** I'm looking only for customer ID that is one.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=225)** So I will say that, give me this summary for customer_id =1 and I execute this.
>
> **[3:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=233)** And I will get the view detail for a specific customer ID.
>
> **[3:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=239)** So that's the beauty of this view.
>
> **[4:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=241)** It hides all this complexity.
>
> **[4:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=244)** You can reuse the view again and again and every time you run this view under the hood, the query get execute, you get the result, and on top of it you can do further more filtration if you need it.
>
> **[4:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=259)** Now let's understand the types of the view.
>
> **[4:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=262)** There are basically two types of the view.
>
> **[4:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=265)** One is your standard views or the view which we have seen.
>
> **[4:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=270)** This is one of the most basic type, which is just like you are saving the SQL query.
>
> **[4:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=277)** It provide a very simplified way where instead of running that complex query, you just go to that view and you call that view.
>
> **[4:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=286)** Every time you call the view under the hood, the query will get execute again and again and again.
>
> **[4:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=294)** On the other hand, we have the materialized view.
>
> **[4:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=298)** Unlikely to the standard view, the materialized view store the result of the query onto the disk.
>
> **[5:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=306)** So it means if you run the materialized view again and again, instead of executing that query again and again, materialized view just get the information, give you back from the previous execution itself.
>
> **[5:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=322)** It will not going to execute your view again and again.
>
> **[5:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=326)** So it'll be fast compared to the standard because query execution need not to be done.
>
> **[5:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=333)** But at the same time the problem is, if your source data is keep on changing, then materialized view might give you the stale data or the data which is not very latest one.
>
> **[5:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=348)** So if you have a table which is not keep on updating or changing very frequently you can have a materialized view and whenever somebody execute this materialized view, they will get the result faster compared to the standard views.
>
> **[6:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=365)** Let's talk about the limitations of this view.
>
> **[6:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=369)** One of the limitations of using the views are performance.
>
> **[6:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=373)** Since views are essentially just storing the queries and every time you access a view, the query has to execute if it is like a standard view.
>
> **[6:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=384)** In that case, the performance issue is there because you are re-executing the query again and again.
>
> **[6:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=392)** Another thing is your normal views or your standard views cannot be directly indexed.
>
> **[6:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=398)** This can affect the performance further wherever you have the large data set.
>
> **[6:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=404)** However, PostgreSQL offers the materialized view, as we saw.
>
> **[6:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=410)** You can use that.
>
> **[6:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=412)** That can improve the performance and you can even create the index on the materialized view.
>
> **[6:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=419)** Views do not store the data themselves, so they only store the query, hence they don't have any ownership to the data.
>
> **[7:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=428)** If your actual tables got deleted, in that case, view will not going to return you the result because the ownership of the data lies with the table, not with the views.
>
> **[7:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=441)** If you are overusing the views or creating the nested views where one view calls in another one, that can make the database schema more complex and that will be a little harder to maintain or debug.
>
> **[7:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=455)** So if you are using the views, keep these things in the mind.
>
> **[7:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=459)** Otherwise, views are very frequently used in the SQL world and when you work as a data engineer, there's a almost surety that you are going to encounter the views a lot.
>
> **[7:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=472)** Similar to the views, there are procedures as well, which we call store procedure.
>
> **[7:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=478)** In the next video we are going to talk about them.
>
> **[8:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-using-views?u=76281980&t=480)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (2), case, (2), this. (1), type, (1)
> **Code Identifiers:** customer_id (3), customer_order_summary (2), pgadmin (1), order_id (1), total_amount (1)
> **Env Vars:** sql (4)
> **Cross-References:** go back to (1), as we saw (1), in the next (1)
> **Analogies:** just like (1), similar to (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - let (1)

#### Introduction to stored procedures
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=0)** - [Instructor] Imagine you have a magic recipe that cooks a delicious dish.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=6)** Stored procedures are like those recipes.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=9)** Once created, anyone can use them by following the steps.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=15)** It's like cooking the same testy meal without having to figure out the recipe each time.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=22)** Another example, think of a chef who prepares a dish regularly.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=28)** They get faster each time because they know the steps well.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=34)** Similarly, when you use a stored procedure, the server figures out the best way to do the things first time.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=43)** After that, it keeps a quick way to do it again.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=47)** It's like having a chef who gets faster and more efficient with every cooking session.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=55)** Stored procedures are prepared SQL code that you save so you can reuse it over and over again.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=63)** So if you have any SQL query that you write over and over again, you can save it as a stored procedure and call it to run whenever needed.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=74)** It's quite similar to the functions which you see in the programming world.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=80)** Stored procedures are created to perform one or more data manipulation operations on databases.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=89)** It is nothing but a group of SQL statement that accepts some input in the form of parameters and perform some task and may or may not return a value.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=103)** The advantages or the benefits of using the stored procedures are many.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=109)** Let's understand some of them.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=112)** Reusable, as I mentioned earlier as well, multiple users and multiple application can easily use and reuse stored procedure by just calling them, just like we do in normal programming functions.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=130)** So you have a functions, you can call those functions again and again.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=135)** Stored procedures are easy to modify.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=139)** You can quickly change the statements in that procedures, and whenever you want to do this, you have the ALTER command through which you can go and change the stored procedure definition.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=153)** Another interesting benefit which comes along with the procedure is the security.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=159)** They enhance your database security.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=161)** By controlling the access of the data, you're not directly exposing your tables or columns.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=170)** What you are exposing, your procedure.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=172)** If somebody wanted to play with your table, they have to just call your procedure, and you give the user an access for procedure level.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=182)** Now procedure can change the table data as per the defined logic only, so you can secure your data up to quite certain limit from getting corrupted from having the inconsistent value or some junk data.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=201)** When a stored procedure is called, only the name of the procedure and the parameter needed to be sent over the network.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=209)** Hence, it reduces the amount of data that needed to be transmitted over the network.
>
> **[3:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=217)** This could result in improving the performance, especially in the scenarios where we have a very limited bandwidth.
>
> **[3:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=227)** Procedures undergo a process that is called as query optimization.
>
> **[3:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=233)** When they are first time executed, the database engine generates and store an optimal execution plan for these procedures.
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=243)** Subsequent invocations of the same procedure reuse this plan, leading to the faster execution times.
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=252)** The optimization contribute to the improved performance over time.
>
> **[4:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=258)** In nutshell, stored procedures are the database objects that offer efficiency, security, and adaptability.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=268)** They provide a level of abstraction, allowing developers to work with modular and reusable code, ensuring data integrity and optimization.
>
> **[4:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=282)** Theory is done.
>
> **[4:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=283)** Now it's time to jump to our pgAdmin and see how you can go and create your stored procedure.
>
> **[4:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=292)** We're going to see this into the next video.
>
> **[4:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-stored-procedures?u=76281980&t=295)** Stay tuned.

> [!info]- Semantic Content
>
> **Analogies:** it's like (2), imagine (1), similar to (1), just like (1)
> **Env Vars:** sql (3), alter (1)
> **Code Keywords:** let (1), this, (1)
> **Definitions:** is called (2)
> **Code Identifiers:** pgadmin (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### Creating and executing stored procedures
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=0)** - [Instructor] Now it's time to create the stored procedure.
>
> **[0:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=3)** Let's go to our pgAdmin and see how we can create the stored procedure.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=9)** To create the stored procedure, we need to write create procedure, and we need to give the name of the procedure.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=20)** For the time being, let's understand that we have products, categories, customers, and orders.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=27)** Let's have a procedure where we're going to call this procedure which will insert a new record into my category table.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=37)** So I give this procedure as a name called add_category.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=44)** Now, when I'm trying to go and add the category, I need to pass two things, one is category ID, other one is category name.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=55)** So let's say we have a procedure with two arguments.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=59)** The first argument, I call it like cat_id, which is of type integer.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=66)** And then I have the category name, which I call it like cat_name, and that is of type varchar.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=75)** Now, after this, I have to say the language.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=81)** Whenever you create the procedure, you have to define the language.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=85)** There are multiple types of languages there, like an SQL, Programmable SQL, and another one here, which is popular is PL/pgSQL.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=97)** That is Programmable PostgreSQL.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=100)** So we are using this language.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=103)** Then we use keyword called AS.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=106)** And then, to define the body of this procedure, we have to use $$.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=114)** So we add two times $, and then we start writing our procedure body.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=120)** So I say BEGIN.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=123)** And under that BEGIN, I will type the query.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=126)** So, as a part of this procedure, I want to add the category to the category table.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=134)** So it'll be like an insert statement.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=137)** So I would say insert into categories table, and I have to say values.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=148)** Now, I don't want to fix the values here, I want, whenever the procedure get called, based on the parameters which has been passed to this procedure, accordingly the row will get insert into it.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=162)** So here I will pass the value, whatever I'm getting from the parameter.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=168)** So I use here the parameters.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=171)** I say cat_id, cat_name.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=176)** So what happens is, if somebody called this procedure using category ID 5 and name, let's say, mobile, so then the value will come here, and this will insert the row into the category table based on those values.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=195)** Our query is done, so I can just put the semicolon, and I can say END;.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=202)** And then I can say $$.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=206)** And that's it.
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=208)** Now, if I execute this, the procedure is created successfully.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=214)** Now, procedure creation is not the only thing.
>
> **[3:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=217)** We need to call this procedure, right?
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=220)** To get an advantage of this.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=222)** How I can call this procedure?
>
> **[3:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=224)** To call this procedure, I have to use call, and then I have to use the procedure name.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=232)** So procedure name is add_category.
>
> **[3:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=237)** And then I have to pass two parameters.
>
> **[3:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=239)** For example, let's say I want to add (6, 'fashion').
>
> **[4:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=245)** So what it'll do is, if this procedure calling becomes successful, and if I go back to my table of categories, I should see a new row inserted with ID equal to 6, and name is equal to Fashion.
>
> **[4:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=264)** So I just say select * from categories, and let's just see.
>
> **[4:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=273)** You can see that a new category has been added, that is category 6.
>
> **[4:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=278)** And the name is Fashion.
>
> **[4:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=281)** That's how easy it is to create the store procedure within the PostgreSQL.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=288)** Once the procedure get created, even if you want to change it, you can change it.
>
> **[4:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=293)** Or if you feel that you don't need this procedure anymore, so you can delete this procedure as well.
>
> **[5:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=300)** For deleting this procedure, you can say drop procedure, and then you give the procedure name.
>
> **[5:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=308)** This will go to delete the procedure.
>
> **[5:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=315)** You can see that the procedure got deleted successfully.
>
> **[5:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=320)** So, so far, we have seen many functionality, now it's time to talk about the performance of these SQL queries.
>
> **[5:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=329)** In the next video, we are going to touch base upon a new topic that is indexes, which plays a key role in deciding the performance of your quiz.
>
> **[5:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-executing-stored-procedures?u=76281980&t=340)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (3), this, (2), delete (2), this. (1)
> **Code Identifiers:** add_category (2), cat_id (2), cat_name (2), pgadmin (1), pgsql (1)
> **Env Vars:** sql (3), begin (2), end (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** go to (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Select via view
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-select-via-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-select-via-view?u=76281980&t=0)** (gentle music)
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-select-via-view?u=76281980&t=5)** - [Instructor] This problem statement is quite simple.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-select-via-view?u=76281980&t=8)** You have been asked to create a view, and the view is to get the product name along with category name, and once you have that view ready, you have to use the select command to display all the product with their corresponding category name.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (gentle music) (1)

#### Solution: Select via view
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-select-via-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-select-via-view?u=76281980&t=0)** (upbeat synth music)
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-select-via-view?u=76281980&t=5)** - [Lecturer] To get the product name along with the category name, we need to do the join again.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-select-via-view?u=76281980&t=10)** I will say p.name, c.name from products p join categories c and I will doing this join ON p.category_id =c.category_id.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-select-via-view?u=76281980&t=35)** Now if you just see the result, this looks like name for product and name for categories coming fine.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-select-via-view?u=76281980&t=45)** Let's just give an alias.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-select-via-view?u=76281980&t=47)** I say it as Product_name and I call it like as category name.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-select-via-view?u=76281980&t=57)** And let's run it again. So this is coming fine.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-select-via-view?u=76281980&t=62)** Now what we do is let's create a view on top of it.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-select-via-view?u=76281980&t=69)** To create the view out of this, I have to just say create view.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-select-via-view?u=76281980&t=76)** I call it like prod_cat view as.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-select-via-view?u=76281980&t=81)** Now if we execute this, this will create a view, because in this view we are selecting something.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-select-via-view?u=76281980&t=89)** So this is our view.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-select-via-view?u=76281980&t=91)** And now to get the things from the view, what we need to just say, we just say select * from prod_cat view.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-select-via-view?u=76281980&t=109)** Now just let me comment this and execute.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-select-via-view?u=76281980&t=114)** Now you can see that we are able to get the information out of this view as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (2)
> **Code Identifiers:** category_id (2), prod_cat (2)
> **Speakers:** - [lecturer] (1)
> **Non-Speech:** (upbeat synth music) (1)


### 9. 8. Indexes and Performance

#### Introduction to indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=0)** - [Instructor] Imagine you have a vast library with thousands of the books.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=6)** You want to find a specific book; for instance, "The Great Gatsby".
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=12)** Now, think of the library catalog as an index.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=17)** Without the catalog, you might have to go through each shelf, check each book title, and waste a lot of time until you find the one which you want.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=29)** If the library has an organized catalog, that the list of the books, along with the titles and the shelf numbers, it will make your lookup quite easy, because you can just reference that index and you can grab the book from a specific shelf.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=54)** Or maybe take in another example, think of a restaurant menu.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=58)** Without having any categories, now, it would be hard to find the dish which you're looking for.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=65)** An index acts like a categorized menu, making it easy for the waiter to quickly locate and serve the dish you ordered.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=76)** In SQL, an index do the exactly the same purpose.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=82)** An index in database structure provides a quick and efficient way to look up and retrieve the data from a table.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=92)** It works much like an index in a book, where you have a list of keywords, and each keywords point to the pages where you can find information related to that keyword.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=107)** An index helps you to organize the data, accelerate the data retrieval, and improves the overall efficiency of searching for a specific information within a large dataset.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=122)** It helps the database quickly pinpoint the desired information, making data retrieval faster and enhancing the user experience.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=134)** Let's dive into the types of the indexes.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=138)** There are variety of indexes.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=141)** The single-column index: Sometimes, you create the index based on one column only.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=148)** In those cases, the indexes are termed as single-column index.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=153)** However, sometimes you might have a requirement where you want to make a combination of multiple columns to form an index.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=163)** In that case, the index is termed as composite index.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=167)** It is made up of two, or more than two, columns.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=173)** Unique index: Ensure that an index column does not the duplicate values.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=181)** So, if you have any column which you feel that contains a unique value, you probably try to create a unique index on it.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=190)** Clustered index: This determines the physical order of the data rules in the table.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=197)** Non-clustered index: This creates a separate structure for the index, and the table data remains are noted.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=206)** Ideally, you should use an index on a column that is frequently used in your where-clause for filtering.
>
> **[3:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=215)** You can also use the indexes on the column, which are very frequently involved in your joint operation.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=223)** Or maybe you can try to create the index on the column which you use for your order-by, or a group-by clause.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=232)** In nutshell, an index in a SQL acts as a performance optimization tool, which allows the database engine to quickly locate and retrieve specific data from a table, especially when dealing with a large data set.
>
> **[4:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=251)** It plays a crucial role in enhancing the overall speed and efficiency of database queries.
>
> **[4:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-indexes?u=76281980&t=261)** Let's deep dive into creating and managing these indexes in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4), make (2)
> **Code Keywords:** let (2), for. (1), case, (1)
> **Env Vars:** sql (2)
> **Analogies:** imagine (1), for instance (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Creating and managing indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=0)** - [Instructor] Let's look at the syntax to create the index.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=4)** To create an index, you have to use CREATE keyword along with the INDEX keyword.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=11)** So we'll say CREATE INDEX, and then we have to give the name of the index, and after that, you say ON, and then you have to give the table name, along with the columns on which you want to create the index.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=30)** Let's just go to our pgAdmin and see how we can create these indexes.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=36)** Let's take in a real-world example In our e-commerce application, customer often log in using their email address.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=46)** Create an index on email column of the customer table can speed up these login operations.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=54)** So let's create an index on the customer table with the column email ID.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=61)** So I say create index, and then I give a name, let's say idx_customer_email,
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=73)** and then I want to create the index on customer table, and my column name would be email.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=84)** Let's just quickly check.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=85)** Yeah, so column name is email only.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=88)** So just say this and execute the command.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=94)** You can see that the index has been created successfully on this column.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=99)** Now, going forward, if somebody do a search on customer table based on this email ID column, the search would be faster because we have an index already available on this column name.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=114)** In product, we have the categories, right?
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=117)** And many times when you filter out the product, you do the product filtering based on the category ID column.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=124)** So let's add an index there.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=127)** So I will say create index, and then I give it onto the product category.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=134)** So I say prod_ca, and then I say on my product table and my column name would be category_id.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=148)** Now, this will going to create a index on the products table based on this category_id column.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=157)** There is another type of index there, which is unique index.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=162)** To prevent the duplicate entries and ensure the data integrity for all the products, you can create a unique index on the name column of the product table.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=175)** Let's say we call it create unique index, and then I provide the index name, idx_prod_name,
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=189)** and then I give the column name and table name using on clause.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=194)** I say on products, and under the brackets, I give the column name that is the name.
>
> **[3:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=203)** Let's execute this as well.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=206)** Here, we don't have these brackets.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=209)** Let's execute again, and then you will see our unique index has been created successfully.
>
> **[3:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=217)** You can also create the composite index.
>
> **[3:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=221)** Remember, composite index was when we have a multiple column combination on which we want to create the index.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=230)** Sometimes there's a lot of searches happens onto order table based on the customer ID and the timestamp.
>
> **[3:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=239)** So we can create the composite index based on these two columns.
>
> **[4:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=245)** I say create index, and then I say idx_cust_order on orders table, and this time, I provide the two column, instead of just one column.
>
> **[4:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=260)** I say customer_id and I will say order_timestamp.
>
> **[4:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=266)** Now, this time, the index which is created is composite index.
>
> **[4:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=274)** Whenever we create the indexes, there are some of the best practices which we can always consider.
>
> **[4:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=283)** For example, we should analyze the query pattern.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=288)** Indexes should be created based on common query pattern to ensure that most of the common query get benefited out of it.
>
> **[4:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=299)** We also need to monitor the performance.
>
> **[5:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=302)** We can use the tools like explain to analyze the query plans and identify which indexes are being used effectively.
>
> **[5:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=312)** Sometimes we need to balance between the reads and the writes.
>
> **[5:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=317)** While indexes can dramatically improve the read operations, they can also slow down the write operations, like your insert, update, delete, because the indexes need to be updated.
>
> **[5:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=332)** Hence, we should balance the number of indexes based on our application's read-write ratio.
>
> **[5:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=340)** Creation of index is not only the way.
>
> **[5:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=344)** You need to maintain it as well.
>
> **[5:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=346)** Periodically, you need to review and maintain your indexes to ensure they remain effective as your data grows and evolve.
>
> **[5:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=358)** After this indexes, now it's time to talk about our query performance.
>
> **[6:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=364)** In the next video, we're going to talk about it.
>
> **[6:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-and-managing-indexes?u=76281980&t=368)** Stay tuned.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), delete (1)
> **Code Identifiers:** category_id (2), pgadmin (1), idx_customer_email (1), prod_ca (1), idx_prod_name (1)
> **Env Vars:** create (2), index (2)
> **SQL:** index (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Understanding query performance
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=0)** - [Instructor] Have you ever experienced the frustration of waiting for your favorite app to load or a website to respond?
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=9)** Just like the impatience they feel in the digital world, imagine standing in a line at coffee shop where each query is like placing an order.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=21)** Today we are not just going to understand query performance.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=27)** We are going to supercharge it, ensuring that your SQL queries moves at the speed of your favorite fast food drive-through.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=39)** Assessing SQL query optimization in PostgreSQL is crucial for optimizing your database queries and ensure efficient data retrieval.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=51)** Let's explore the essential steps to assess and enhance SQL query performance.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=60)** The first step would be enable query execution statistics.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=66)** In PostgreSQL, you can enable the collection of query execution statistics by setting the track_activities and track_counts parameters in postgresql.conf file.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=81)** You can find the Postgres configuration file under the PostgreSQL folder on which you have install your PostgreSQL.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=93)** There you go into your version, and data, and there you see a file like postgresql.conf.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=102)** You right click, and you can open this in any of your Notepad.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=109)** And there you can see this specific track activity, just search track.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=118)** Here you see track_activities.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=121)** You can enable this track_activities, and you can enable the track_counts.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=128)** This will help you to enable these statistics.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=133)** Using this, you can gather the information about the active queries, their query execution time, and many more details.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=142)** Another thing which you can do to assess these query performance, you can utilize the explain and analyze command.
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=151)** When you use this explain and analyze command, it will tell you that how long it'll going to actually take to execute a specific query.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=162)** This will help you to identify the areas of optimization.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=167)** For example, let's go to pgAdmin.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=170)** Let me try, explain and analyze both on a specific query where select * from, let's say, orders table.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=185)** And I say where order_id=1.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=191)** Now what I'm trying to do here is I am trying to analyze this specific piece of a query.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=199)** I'm executing the select query, but if I execute it along with explain and analyze, there is a typo.
>
> **[3:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=210)** Let me execute it again.
>
> **[3:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=212)** Now you can see that it will tell you how much time it took for planning, how much time it took for execution, how many rows got filtered out, how many scans has been done, et cetera.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=225)** You can analyze your queries by using the explain and analyze command.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=232)** This could be very tricky in a very big complex query.
>
> **[3:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=236)** There you can identify like what place you can do some performance optimization.
>
> **[4:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=244)** Next would be check query execution time.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=247)** Monitor query execution time to identify your slow performing queries, could be very beneficial.
>
> **[4:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=256)** PostgreSQL provides you a way to do this using pg_stat_statements.
>
> **[4:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=266)** This is a way to go and capture the execution time.
>
> **[4:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=271)** Another way is using pgBadger for log analysis.
>
> **[4:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=277)** This is a kind of a tool that helps you to analyze the logs of the PostgreSQL.
>
> **[4:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=284)** Now, this pgBadger is specific to the PostgreSQL.
>
> **[4:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=289)** Similarly, other databases has some different log analysis tools out there.
>
> **[4:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=294)** You can choose the tool based on your database.
>
> **[4:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=299)** You can also check the index usage.
>
> **[5:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=302)** You can verify if your queries are utilizing the indexes efficiently.
>
> **[5:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=309)** There is a view exist which can provide you the insights into the index usage.
>
> **[5:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=317)** For example, you can run something like this.
>
> **[5:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=320)** You can say select * from pg_stat_user_indexes.
>
> **[5:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=333)** Now you can give your table name.
>
> **[5:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=336)** Let's say I give a table name called orders.
>
> **[5:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=340)** Now execute this.
>
> **[5:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=343)** You can see that it will tell you what are the different indexes out there on this table, and what are the different usage of this indexes has been done.
>
> **[5:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=357)** You can see you have a customer order, an order index, and then you can have a last index scan, timestamp, last index read, fetch, et cetera.
>
> **[6:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=370)** So you can see that when this index has been utilized.
>
> **[6:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=375)** You can also analyze only the query execution plan.
>
> **[6:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=379)** If you want to analyze only the query execution plan, you can use simple explain command itself.
>
> **[6:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=388)** Instead of this specific analyze command, you can just say, explain, and then your specific command.
>
> **[6:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=400)** That will also give you the information about your query.
>
> **[6:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=407)** However, these are the few tips which you can use to assess your query performance, and based on that, you can take some steps.
>
> **[6:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=417)** Some of the recommendation, which generally provided, would be is think about using the materialized view.
>
> **[7:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=425)** If you remember, materialized view are the pre-compiled and pre-calculated one.
>
> **[7:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=432)** So whenever somebody tried to hit the materialized view, the query does not execute again and again, the data is already stored for those query result, and it'll just fetch you the result from that stored output.
>
> **[7:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=450)** However, keep in mind, materialized view is not a good solution if your data is keep on changing.
>
> **[7:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=459)** Another point, which you can consider is reviewing your SQL queries.
>
> **[7:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=466)** You can consider using appropriate indexes, rewriting complex queries, or breaking down the subqueries, into the simpler one.
>
> **[7:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=476)** This could also enhance your query performance.
>
> **[8:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=481)** These are some basic tip, but in the next video, we're going to deep dive and talk about some specific performance tuning technique.
>
> **[8:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-query-performance?u=76281980&t=491)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (2), this, (1), try, (1), from, (1)
> **Code Identifiers:** track_activities (3), track_counts (2), pgbadger (2), pgadmin (1), order_id (1)
> **Env Vars:** sql (4)
> **Definitions:** is a  (4)
> **Analogies:** for example (2), just like (1), imagine (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)

#### Basic performance tuning techniques
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=0)** - [Instructor] What if you are the manager of a popular restaurant and you are constantly striving to enhance the dining experience for your customers?
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=10)** Think of your menu as a database.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=13)** Just like the customers want to find their favorite dishes quickly, database queries need to locate data efficiently.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=24)** Optimizing SQL queries in PostgreSQL involves various strategies to enhance the performance and ensure efficient data retrieval.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=36)** Here are some key ways to optimize your SQL queries.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=42)** Use indexes.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=45)** Imagine a scenario where you want to retrieve the latest order for a specific customer from the database.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=53)** How are we going to write that?
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=56)** Probably we will write something like this, saying select start from orders and we just put in our customer ID equal to someone and then we say order by order timestamp desc.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=81)** Great, now this is not a very optimized query.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=86)** The reason is, here, you are trying to find out based on the customer ID and ordering is done on order timestamp, if there were an index created using your customer ID and order date.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=105)** Probably this query will return the result in a most fastest manner.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=111)** So what we can do here is we can add the index, maybe something like this.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=118)** Create index and then we give it index name and we do it something like a composite index.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=130)** So we'll say, orders and then I say customer ID, comma, our order timestamp.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=139)** So this is going to make my above query works faster, because now index is there.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=147)** Another technique you can apply would be choosing the appropriate data types.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=153)** Sometimes, using an unnecessary large data types can impact the performance.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=160)** If you choose the appropriate data type, which is maybe shorter than the size, may perform efficient.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=170)** For example, let's say if just to store the order ID, if you are using a big integer, and you don't have more than 1,000 or 10,000 orders, then instead of using the big int, you could use the integer.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=188)** That will make the things faster.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=191)** Another ninja technique would be is to avoid doing select star.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=197)** Select star retrieves all the columns, which is inefficient and sometimes, you don't need all those columns as well, and unnecessary people do select star.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=211)** So, whenever you write select query, be mindful of it that you are pulling out the columns which you need actually.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=222)** Another technique would be is, limit the data returned.
>
> **[3:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=227)** We are used to say select star from table and we leave this empty.
>
> **[3:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=233)** We can put the limit as well.
>
> **[3:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=236)** For example, in this above query, we are trying to pull out all the records and maybe I was just concerned with two records or three records only.
>
> **[4:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=248)** I could have said it like limit two.
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=252)** So in this case, this will only pull out the two records, rather than the entire set of record.
>
> **[4:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=259)** This would be very efficient way where the table size is too high and you might be just scanning the tables to get an idea what kind of a data it is there.
>
> **[4:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=270)** In those cases, if you don't limit it, it will try to pull out all the rules, which will make this query works very slow.
>
> **[4:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=281)** So keep in mind, whenever you're trying to retrieve the data, if you can minimize this retrieval, do that.
>
> **[4:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=290)** Another ninja technique would be is optimize the subquery using the CTE.
>
> **[4:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=296)** CTE stands for common table expression.
>
> **[5:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=301)** Now, sometimes you use these subqueries, a query within a query, to get the result.
>
> **[5:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=309)** Subqueries is not the right way.
>
> **[5:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=312)** Subqueries makes the things work slow.
>
> **[5:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=315)** So, whenever you encounter the subquery, instead of using the subquery, you can create the CTEs or common table expression and then use that CTE to do the work.
>
> **[5:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=329)** If you do this way, you're going to have the better performance.
>
> **[5:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=334)** Optimization has multiple advantages.
>
> **[5:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=338)** It's reduced the redundancy.
>
> **[5:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=341)** Optimized query, eliminate the redundancy by fetching only the necessary things.
>
> **[5:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=348)** For example, if your query is optimized, eventually it has a lower redundancy, it has, instead of all the columns, probably it'll pull out only the relevant columns.
>
> **[6:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=360)** Instead of all the rows, it might be pulling only the relevant rows.
>
> **[6:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=366)** Optimization also improves self readability.
>
> **[6:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=370)** Let's say instead of subquery, if you are trying CTEs, then CTE enhances the readability of the query.
>
> **[6:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=378)** Make it easier to understand and maintain.
>
> **[6:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=383)** Scalability.
>
> **[6:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=385)** The optimized query may scales better.
>
> **[6:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=389)** As it separates the logic into the distinct parts, maybe in terms of a join using CTE, et cetera, this makes it more adaptable to the changes.
>
> **[6:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=402)** Always assess the specific requirements and structure of your database to choose the most suitable strategy.
>
> **[6:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=412)** If your queries are optimized, your efficiency would be high.
>
> **[6:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=416)** Probably the cost would be less.
>
> **[7:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=420)** Besides the performance, security is also another aspect that we should look into it.
>
> **[7:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=428)** In the next video, we are going to talk about the database security.
>
> **[7:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=434)** We'll also understand how we can do the user management.
>
> **[7:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/basic-performance-tuning-techniques?u=76281980&t=438)** See you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1), this. (1), type, (1), case, (1)
> **Env Vars:** cte (5), sql (2)
> **CLI Commands:** make (4), find (2)
> **Analogies:** for example (3), just like (1), imagine (1)
> **Cross-References:** in the next (2)
> **Definitions:** stands for (1)
> **Best Practices:** avoid doing (1)
> **Warnings:** keep in mind (1)

#### Challenge: Indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-indexes?u=76281980&t=0)** - [Tutor] Another challenge.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-indexes?u=76281980&t=8)** The team was trying to figure out all the orders based on the timestamp.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-indexes?u=76281980&t=14)** Now, the challenge which is coming for them is that it is working very slow.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-indexes?u=76281980&t=20)** Now, as a database developer, what could you suggest to improve this performance?
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-indexes?u=76281980&t=26)** And if you think that the index is something which can solve, write a code that helps to improve this performance.

> [!info]- Semantic Content
>
> **Speakers:** - [tutor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-indexes?u=76281980&t=0)** - [Instructor] To improve the performance of the order search on a specific column, order_timestamp, we need to create an index.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-indexes?u=76281980&t=13)** So what we'll do, we create an index, create index.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-indexes?u=76281980&t=18)** We call it order_idx on order table.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-indexes?u=76281980&t=27)** And we have to give the column name.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-indexes?u=76281980&t=29)** So we'll give like order_timestamp.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-indexes?u=76281980&t=33)** Now, that's how you can go ahead and create an index on order_timestamp column for order table.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-indexes?u=76281980&t=40)** And now, if somebody do the search based on this order_timestamp column, it will be much faster.

> [!info]- Semantic Content
>
> **Code Identifiers:** order_timestamp (4), order_idx (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 10. 9. Database Security and User Management

#### Introduction to database security
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=0)** - [Instructor] Imagine your PostgreSQL database as a secret vault where you store all your valuable information.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=10)** Now just like you wouldn't want unauthorized people getting into your secret vault, you need to secure your PostgreSQL database to keep your data safe and sound.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=23)** Or you can also assume your SQL database is like a VIP club and each user is a guest.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=32)** You decide who gets an invitation.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=36)** In technical terms, database security refers to implementation of measures and protocols to protect a database system, its data and its infrastructure from unauthorized access, misuse, and other potential threats.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=56)** The primary objective of database security is to ensure the confidentiality, integrity, and availability of your data.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=67)** Let's understand these objective in more detail.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=72)** Confidentiality is kind of keeping your secret safe.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=77)** In data terms, it means making sure only authorized people can access sensitive information like passwords or your private details.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=90)** Confidentiality is like the lock on your bank wallet.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=94)** Only you or the one to whom you trust have the key to access what's inside.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=102)** In the digital world, it means safeguarding the personal information like credit card details, debit card details from your unauthorized eyes.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=113)** Just as you wouldn't want someone snooping in your world, you don't want unauthorized access to sensitive data.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=123)** Integrity is about trustworthiness of information.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=129)** It is like ensuring that your data remains accurate and untampered.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=136)** Imagine if your grades were changed in your school's database, that's an integrity concern.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=145)** Availability is like your favorite streaming service, always ready to play your favorite show.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=152)** If it suddenly went offline or took forever to load, that would be frustrating.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=159)** In the data world, availability ensures that your information is accessible when you need it.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=166)** For example, you want e-commerce website to always load swiftly so customer can purchase data without delays or maybe you want to ensure that this website is available 24 across seven.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=186)** Here are the benefits of the database security, protecting the sensitive information.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=193)** Database security shields personal and confidential data from unauthorized access.
>
> **[3:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=200)** For example, imagine you are holding the sensitive data of the patient's health in the hospital.
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=208)** Now, you don't want this information to be shared to the outside world, or maybe we talk about the credentials information or the account details of the customers of the bank.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=220)** You don't want all these to be exposed to outside people.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=225)** Preventing unauthorized access, it ensures that only authorized user can enter the digital premises, preventing data breaches.
>
> **[3:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=236)** For example, only admin should be allowed to go and see and change some information.
>
> **[4:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=245)** However, there are people who is low into the hierarchy should not have an privilege to go and see the information or change the information.
>
> **[4:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=257)** Maintaining data integrity.
>
> **[4:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=260)** Database security safeguards against tampering, deletion or corruption, preserving the accurate information.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=268)** You don't want that if your password is stored in the database, it got changed automatically, or maybe somebody play with your personal information and change that, you don't want it.
>
> **[4:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=281)** That is about keeping your data integrity.
>
> **[4:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=286)** Ensuring the business continuity.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=288)** It prevents downtime, ensuring uninterrupted services and transaction.
>
> **[4:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=296)** Meeting compliance requirement, database security ensures adherence to the legal and industry standard to avoid any penalties.
>
> **[5:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=307)** There is a lot of data compliances needed to be taken care based on some country or geography.
>
> **[5:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=315)** For example, if we talk about the European system, in the European countries, you will find that there is strict norms about the data, so database security helps you to comply to those compliances.
>
> **[5:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=331)** Safeguarding against cyber threats.
>
> **[5:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=334)** These database security measures acts as a digital security system, protecting against the hackers and malware.
>
> **[5:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=345)** Let's deep dive into the database security in the SQL world and see how you can apply all this.
>
> **[5:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/introduction-to-database-security?u=76281980&t=353)** See you into the next video.

> [!info]- Semantic Content
>
> **Analogies:** for example (4), imagine (3), just like (1)
> **Code Keywords:** let (2), private (1), this. (1)
> **Env Vars:** sql (2), vip (1)
> **Definitions:** is a  (2), refers to (1)
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### Understanding users and roles in SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=0)** - [Instructor] Users and roles are the key to controlling who gets in and what they can do in your SQL database.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=9)** Imagine users are like individual employees, each with a unique digital identity, such as user IDs, your employee IDs like that.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=19)** Meanwhile, roles are comparable to the project team, such as they're part of a sales team, marketing team, operations, et cetera.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=31)** Just as you assign an employee to a project for efficient task management, similarly, in the SQL, you give roles to specific users.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=43)** For example, to user one, you give the roles of a sales team.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=48)** For user two, you might give roles of admin.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=52)** In SQL, a user is a distinct entity that can connect to a database.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=60)** User have individual identities and credential for authentication.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=65)** For example, when you have an employee in your team, it has its own user ID and password to log into the database, right?
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=74)** That could be a user.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=77)** In SQL, a role is a named group of privileges that can be assigned to the user.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=85)** Sometimes, instead of giving different permissions to different people, you can create the roles and what roles can do is roles you create based on a reader, a writer, or an admin, or those kind of way you can create the roles and then you can assign these type of roles to a user.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=108)** So then a user can become a reader, a user have the writing privileges or user might have the admin privileges like that.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=118)** By assigning users the roles, you can efficiently manage the access control.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=124)** Changes to the role privileges automatically applies to all the associate users.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=130)** For example, imagine that there are 10 people who has a role as an admin.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=136)** Now, if you change the access control of this admin level, then all the 10 people access control will get changed.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=145)** Let's understand the benefits of creating users and assigning role in context to the database.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=152)** The granular access control.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=155)** If you have users and roles, then you can have a very granular level of access to the databases.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=163)** You can give a very specific permission to a specific user, what he can do and what he cannot.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=170)** So this can add another layer of security to your database.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=176)** Streamlined privilege management.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=179)** Instead of adjusting access for each person, what we're going to do is you can assign the roles to each people and you can give the permission at the role level so that if at any point of a time you want to update these permissions or privileges, you can do through the role itself.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=202)** You don't have to separately do it for every user.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=206)** Simplified user administration.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=209)** User and roles make it easy to add new user or change access for a group, keeping user management pretty straightforward.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=220)** It also helps to enhance the security.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=223)** How?
>
> **[3:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=224)** Users and roles make sure only the right people can access the sensitive data.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=230)** It's not only about having the username and password, even if the user has the correct username and password, but if it does not have the correct permissions, he cannot still see the data.
>
> **[4:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=245)** So users and role can help to enhance the security to next level.
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=252)** It also helps to improve the maintenance.
>
> **[4:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=255)** With users and roles, tasks like updating access rules or removing privileges becomes simpler, making database maintenance much smoother.
>
> **[4:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=267)** We already talked too much.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=268)** Now it's time to go and see the technical implementation of it, how you can create the users and how you can assign the roles.
>
> **[4:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=277)** In the next video, we're going to talk about the same.
>
> **[4:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-users-and-roles-in-sql?u=76281980&t=280)** Stay tuned.

> [!info]- Semantic Content
>
> **Analogies:** for example (3), imagine (2), such as (2)
> **Env Vars:** sql (4)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Creating users and assigning roles
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=0)** - [Lecturer] In SQL, creating a user is essentially about creating a new role with login capabilities.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=8)** There are several ways to create users depending upon the specific need such as the privileges and the access control you want to assign.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=19)** Let's just go back to our PG admin and see how we can create these users and assign roles.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=29)** Let's see the simplest form of creating the user.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=33)** You can say create role.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=38)** Now let me give a role name, something like role mike.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=44)** So I'm creating a user with the name mike and I am giving him the login capability.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=51)** So I'm saying that create role mike with login.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=57)** If I execute this command, now I have a one user there with the name mike.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=66)** If you go down to this Login and Group Roles here, you can see there is a user exist now with name called mike.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=78)** Sometimes for security purpose, it's crucial to set a password for the user who can log in.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=87)** We can assign the password at the time of creation of the user itself.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=92)** For example, I can say create role tom with login
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=102)** and we can also set the password, which is tom@123.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=108)** And now whatever be the password you give, just give it in single quotes.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=113)** And you can say Execute.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=119)** It worked perfectly well.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=123)** You can also create a user with some specific privileges.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=128)** So far, the user which we have created does not have the permissions.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=133)** We can create the role something like this.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=137)** We can say create role John, and we can say it has a login capability by saying with login.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=148)** We also assign a one password to it, just a default password, and we can say that this will be a user who has all the access.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=163)** And if I want to give him the all the access, I can give him the super user privilege.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=171)** The moment I give anybody as a super user, he can do everything.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=176)** He will have all the privileges assigned to him automatically.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=181)** He can delete, he can create, he can update, he can view, he can do everything.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=188)** Sometimes you don't want to create the user with having such a full access.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=195)** You want some limited access or you want to create a user which can create its own database.
>
> **[3:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=203)** So you can give another user, let's say John1 with login, and then you give the password.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=214)** You can say the privilege here as createdb.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=220)** Now, this createdb is the privilege you are assigning to the John1.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=225)** If John1 tries to log in with this username and this password, he will be allowed to create the database of his own choice.
>
> **[3:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=235)** Why?
>
> **[3:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=236)** Because we are explicitly giving this permission to John1.
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=240)** If it was the mike or the tom, probably mike and tom does not have the privilege to create the database, because they are just a role got created, they don't have that permission.
>
> **[4:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=256)** In fact, you can create another role with the permission who can give the access to other people as well.
>
> **[4:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=264)** So we can say it has a login and with some password capability and we can add explicitly in saying that he can create the role.
>
> **[4:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=279)** Now, this user John2 can assign the roles to others by he can create the roles.
>
> **[4:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=290)** Sometimes you want to create the role which is having some limited purpose.
>
> **[4:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=297)** So what we can do is we can create the role with some validity of time.
>
> **[5:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=303)** We can say that create role John3 with login, password.
>
> **[5:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=313)** We give just a default password.
>
> **[5:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=316)** And we can say that this is valid until, let's say, 2024-05-31.
>
> **[5:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=327)** So this role which we going to create here, this role will be valid till 31st May.
>
> **[5:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=336)** This role will not be applicable at all.
>
> **[5:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=340)** You can also create the roles where you want to restrict this role with the number of connections they can create.
>
> **[5:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=349)** So for example, what I can say is I can say create another role, let's say John4 with login capability and I can say that connection limit for this specific role is limited to 10.
>
> **[6:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=365)** It means that there can be parallel 10 connection possible for this specific role.
>
> **[6:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=375)** Sometimes you might want to create a new user with the same privileges as an existing user.
>
> **[6:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=383)** In that case, you have the functionality to create the clone of the existing user.
>
> **[6:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=391)** You can do that using this specific command.
>
> **[6:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=397)** You say create role to this new user that is John5.
>
> **[6:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=404)** You say with login password, given default password, and then you can say in role John4.
>
> **[7:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=420)** Now in this case, John5 will have exactly the same role the way it has for John4.
>
> **[7:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=429)** So you're trying to create the clone of John4 and you name it like John5.
>
> **[7:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=436)** Instead of this create role, you can use this specific command saying create user and you can give the username with password.
>
> **[7:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=449)** This is just another way of creating the user.
>
> **[7:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=453)** You can use the way we were doing in the above lines or you can use this way of creating the user.
>
> **[7:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=463)** Both of them will do the same work.
>
> **[7:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=468)** Even once you have created all the user, if you want to change some of the permissions to this user or maybe you wanted to remove this user, all this is possible.
>
> **[8:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=480)** If you want to change the permissions, you are going to use the alter command.
>
> **[8:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=485)** In case if you want to remove the user completely, you can say drop user to delete those users.
>
> **[8:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=494)** So we have seen how we can create the users and roles in the SQL.
>
> **[8:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=502)** Now it's time to grant them these specific permissions and see how we can play with the privileges management.
>
> **[8:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=510)** In the next video, we are going to talk about the same.
>
> **[8:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/creating-users-and-assigning-roles?u=76281980&t=513)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), super (2), delete (2), case, (2), this. (1)
> **Analogies:** for example (2), such as (1)
> **Env Vars:** sql (2)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - [lecturer] (1)

#### Granting and revoking permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=0)** - [Instructor] Granting permissions are like giving keys to specific doors in a building while revoking the permissions is like taking back the keys from someone who no longer needs access.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=15)** In SQL, permissions control what action users or role can perform on specific database objects.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=25)** There are multiple types of permissions available in the SQL world.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=30)** Let's see some of them and understand what are these permissions.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=37)** Select.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=39)** The Select permission allows someone to run the select query.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=43)** It allows you to read the data from a specific table or a specific view.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=50)** Insert permissions grants the ability to add new rules to a table.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=57)** Let's say if you want to add new rules to a table, you need to have that insert permission available on that table for your role.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=68)** Update.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=69)** As the name suggest update is the permission which helps you to change any specific row within a table.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=79)** If you want to change a specific column value, you'll need to have an update privileges attached to your role.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=88)** Delete.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=89)** Delete allows the removal of rules from a table.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=93)** If you feel that there are some rules which you want to remove from the table, you can only do it if you have this delete permission.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=104)** Execute.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=106)** Execute permission helps you to execute these stored procedure.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=111)** If you are running any SQL query, which is having an stored process execution needed, then you can only execute that query if you have the execute permission.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=126)** Connect.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=128)** it helps you to connect to a database.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=132)** If you don't have the correct permission on your role, you cannot connect to a database.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=139)** Create.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=141)** Create grants the ability to create new objects within a database or a schema such as your tables, Temporary or Temp.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=153)** That allows you to create the temporary tables within a session.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=159)** Now you understand the variety of permission options available in the SQL.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=164)** Now it's time to go back to where PG admin and see how we can grab these specific permissions or how we can revoke these kind of permission to a specific user or role.
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=177)** Let's go there.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=180)** Permissions can be granted on various database objects.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=184)** For example, in the previous video, we have created multiple roles.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=190)** For example, John1, John2, John3.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=194)** Let's take one of the role and assign him some specific permissions.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=201)** How we can do it.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=202)** We can say grant select on customer table.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=209)** So I say customer and then I say two and then I have to give the role name.
>
> **[3:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=216)** For example, I want to give this permission to John1, so I will say, grant select on customer to John one.
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=226)** Now you can see that the select permission has been granted to user John1 on customer table.
>
> **[3:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=234)** Here it is very specific, select permission on the customer table.
>
> **[3:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=239)** If John one tried to select the data from orders table or maybe from category table, he will not able to do so.
>
> **[4:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=248)** Reason, we have just grant these select privileges on only the customer table.
>
> **[4:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=255)** Similarly, you can also grant the insert operation, so you can say that you can grant, insert and delete.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=268)** Both of these permissions on customer table to the John1 user.
>
> **[4:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=275)** So it's not like that, you can only assign one permission at a time.
>
> **[4:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=280)** You can write multiple permissions separated by comma, and you can assign multiple permissions to a specific table to a specific user.
>
> **[4:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=294)** Sometimes this could be a very cumbersome process.
>
> **[4:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=297)** You might have hundreds of the table in your database and you want to give select permission to all of those tables.
>
> **[5:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=305)** In that case, what you can do is you can give the select permission on all the tables in your schema.
>
> **[5:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=313)** How? You can say something like this.
>
> **[5:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=317)** Grant select on all tables in the schema, and then you give the schema name.
>
> **[5:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=328)** Let's say we have a public schema to a specific role, John1.
>
> **[5:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=335)** Now, if I execute this, now John1 will have a select permission on all the tables, which is available inside the schema called public.
>
> **[5:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=348)** Sometimes you have a situation, imagine that John is a manager.
>
> **[5:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=354)** You want to give permission to the John, but John will have some trainees under him as well, and you want to give privilege to the John that whenever any trainee want the same access, John can grant the same permission to them also.
>
> **[6:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=372)** This can be possible when we give the John a permission of grant option.
>
> **[6:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=380)** How? Let's see.
>
> **[6:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=381)** We say grant select on customer table to John1 with grant option.
>
> **[6:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=396)** Now this with grant option gives the John1 capability to give this select permission to other people as well.
>
> **[6:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=406)** So now if you execute this, John will have that capability to give the select permission on customer table to all of its trainee under him.
>
> **[6:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=418)** But we need to be very careful when we give anyone a permission with the grant option because once you give that permission, you have no control to whom he's giving all these permissions.
>
> **[7:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=433)** It's like you are making another admin, so you need to be very careful.
>
> **[7:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=440)** Now, let's talk about a scenario where you given the permission, now you feel that this user or employee is leaving the organization and I want to remove some of his permissions, or I want to revoke those permissions, which I have given to this user.
>
> **[7:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=460)** How you can do that.
>
> **[7:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=462)** For that you can use the revoke command.
>
> **[7:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=465)** Revoke is just opposite of the grant.
>
> **[7:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=469)** How you can do that?
>
> **[7:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=471)** Exactly you can do just like grant.
>
> **[7:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=474)** Instead of the grant, you will say revoke, select on customer from John1.
>
> **[8:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=484)** Now this will revoke the select permission on customer table from the John1 role.
>
> **[8:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=491)** Similar to grant, you can revoke multiple permission at a time.
>
> **[8:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=496)** You can say revoke, select comma, insert on customer from John1.
>
> **[8:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=509)** Typo, let me just change the spelling again and re-execute.
>
> **[8:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=515)** Now, in this case, I'm removing the select as well as the insert privilege on the customer table from the John1 role.
>
> **[8:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=526)** You can also revoke all the permission in a one shot itself.
>
> **[8:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=530)** For that, you can just say revoke all.
>
> **[8:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=534)** So revoke will remove all the permissions on this customer table from this John1 role.
>
> **[9:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=544)** This will remove all the permission, whatever you have granted to the John1 role.
>
> **[9:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=551)** That's how you can manage your database with multiple rules and multiple users by giving them a specific permission using grant, or you can revoke the permission as soon as the work is done.
>
> **[9:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=567)** In the next video, we are going to talk more detail around the rules.
>
> **[9:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/granting-and-revoking-permissions?u=76281980&t=571)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), delete (4), case, (2), public (2), this, (2)
> **Analogies:** for example (3), such as (1), imagine (1), it's like (1), just like (1)
> **Env Vars:** sql (4)
> **Cross-References:** go back to (1), previous video (1), in the next (1)
> **Prerequisites:** you need to have (1), you'll need (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Using roles for permission management
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=0)** - [Instructor] Rules in SQL are powerful entities that combine the concept of user accounts and groups from traditional database systems.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=11)** They are pivotal in managing permissions efficiently, especially in complex databases like an e-commerce store.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=22)** Let's understand how we can create these rules.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=28)** So far the rules which we have created, we created from the angle of the user creation.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=35)** Now let's just create the rules in terms of like creating a group.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=41)** We say create, role, and I call it like "sales team"
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=49)** and execute.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=51)** Now, this role is something which is representing the role of a sales team.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=58)** Here, the role can be represented at different access levels or a job function within your e-commerce platform.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=68)** We can also create in terms of like read only roles, write, admin, operations, something like that.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=78)** We can say something like that.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=80)** Create role and we call it like "admins".
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=85)** So this role is something which is having the admin privileges.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=89)** At this point, these are just rules.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=92)** They don't have the permissions.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=94)** In next few minutes, we will give them the specific permissions as well.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=100)** Generally, the best practice is that you should choose the clear and descriptive names for your roles.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=108)** Example, sales team, admins, product manager.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=113)** You can also add sometimes read only or write those kinds of things as well.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=120)** Generally, you organize the rules around the functions or departments who is going to do the permission management.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=130)** It should align with your organization structure.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=133)** For example, let's say to the sales team, "I want "all the read permission to be granted."
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=141)** So I could say that "grant select on all tables
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=150)** "in the schema public to sales team."
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=157)** Now, this role, sales team, can view the data from any table in my schema.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=164)** Right now, this is not an individual user.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=166)** Sales team here is just a role.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=169)** Later on when you hire a new people under the sales team for all those new hire people, you can assign them the role called "sales team", and as soon as they got the role as a sales team, all of them will get the permission to select any of the data from any of the table in the schema called "public".
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=192)** In case, let's say you are trying to create an admin staff, so you can say that "grant all the privileges."
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=202)** Now this time I'm giving someone the all the accesses on all tables in my schema that is public to admins.
>
> **[3:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=218)** Now, this admin rule group will have the permission to do anything on any table in the public schema.
>
> **[3:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=228)** Now, let's say if you hire a new admins, you can assign them the role as an admins, so automatically all those employee will get these privileges.
>
> **[3:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=239)** The basic advantage of having these kind of a role management is it gives you this scalability.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=247)** It makes the things easier to manage even you have a large team.
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=252)** It helps you to onboard new employee and giving them the correct permissions in the fastest manner possible.
>
> **[4:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=261)** It also help you to centralize the permission management.
>
> **[4:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=265)** So from one place you can control the access of all the users.
>
> **[4:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=271)** Now, there is a way where a role can have a hierarchy.
>
> **[4:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=276)** For example, if you look at our organizational structure, we have the junior sales team, then we have our senior folks within the team, then we have a manager, we have the directors like that.
>
> **[4:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=292)** Similarly, in the roles also, we can create the hierarchies.
>
> **[4:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=297)** There is possibility to create the hierarchy.
>
> **[5:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=300)** How you can create the hierarchy, you can create the hierarchy by saying, let's say, "create role sales managers".
>
> **[5:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=312)** Now sales managers are someone who should have all the capability of the sales team plus something of their own.
>
> **[5:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=320)** So how we can do that, we can say, "create role sales manager, in role sales team".
>
> **[5:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=331)** Now, this new role, there is a typo.
>
> **[5:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=335)** Let me just change this and re-execute.
>
> **[5:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=340)** Now this role, sales manager, have all the permission exactly that is of the sales team.
>
> **[5:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=348)** Plus, even if you want to grant few more privileges to sales manager, you can separately give it to them as well.
>
> **[5:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=356)** So even in the role you have the hierarchy possible the way you have within your organization.
>
> **[6:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=364)** Using roles for permission management in SQL offers us significant advantages in terms of scalability, maintainability, and security.
>
> **[6:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=378)** You should leverage the rules to create an efficient and manageable permission system that enhance the overall security and the functionality of your database system.
>
> **[6:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/using-roles-for-permission-management?u=76281980&t=392)** See you into the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), public (4), function (1), case, (1)
> **Env Vars:** sql (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Cross-References:** next video (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Best practices for managing roles and permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=0)** - Managing rules and permission in SQL, or any database system, is critical for ensuring database security, maintaining efficient access control, and ensuring that user have the appropriate level of access needed for their task.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=20)** Here are some detailed best practices for managing roles and permissions.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=27)** Principle of least privileges.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=30)** This ensures that the users and roles have only the minimum level of access necessary to perform their function.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=40)** For example, imagine that you have one team member.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=45)** Now this team member only look for the customer problems and look at the customer data.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=52)** Then you should only grant the customer table permissions to this person.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=59)** You should not give him the permission to do something on the product, or on order data, because this person is not dealing with those tables.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=71)** This is how you can implement the least privileges.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=75)** You try to give only the lowest level of access to every person.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=81)** Another best practice would be the role hierarchies.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=86)** Role hierarchies involve creating roles with a specific set of permissions, and then assigning these roles to other roles or users.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=97)** This effectively grouping permissions into manageable units.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=103)** Remember our previous example we created the sales team.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=108)** Now we have the sales manager, which is having the same hierarchy, right?
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=114)** So based on your organizational hierarchy, you can similarly create the rule hierarchies.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=121)** This will separate out who is getting what kind of an access.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=125)** So this is also very popular based practice mechanism where your actual role is quite similar to your organizational roles.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=137)** Another best practice would be use a schema-based access control.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=142)** Sometimes instead of putting all your tables into a one common schema, like we have done it under the public schema, in our examples, we can create these separate schemas.
>
> **[2:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=156)** We can say that there is a one customer schema, one product schema, one order schema.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=162)** Now you might have a multiple tables related to customer like customer address, customer liking, customer feedbacks.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=172)** You can keep all those customer data under the customer schema.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=176)** Similarly, all product related multiple tables, you keep it under the product schema, and then you can assign the users access at the schema level.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=189)** This will ensure that they are not interfering into someone else table, and that will keep the things quite secure.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=199)** Another best practice would be is doing regular audits and review.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=204)** Ideally, every team should periodically review the rules and permissions, and ensure that the rule assignments are up to the date with the current policies and user responsibilities.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=220)** They should also scrutiny and check is there any deviation or if they find any inconsistency in the privileges granted to specific roles or the users.
>
> **[3:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=234)** Segregation of duties is also one of the best practices where you divide the responsibilities among the different roles and users to reduce the risk of unauthorized access for any kind of fraudulent activities.
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=252)** For example, you have a separate rules for a data entry team and data approval can prevent unauthorized data modification.
>
> **[4:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=264)** Another best practice would be using the NOINHERIT.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=268)** Now this NOINHERIT attribute prevents the role from automatically inheriting the permissions from the roles it is member of.
>
> **[4:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=277)** Users must explicitly set their role to one they are member of to use its permissions.
>
> **[4:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=287)** Limit superuser role usage.
>
> **[4:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=290)** You remember what superuser do?
>
> **[4:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=292)** Superuser permission will grant you the full access that this user can do anything.
>
> **[5:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=301)** Now, the moment you give someone a super user, you are breaking the least privilege rule.
>
> **[5:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=308)** So ideally you should limit while giving the super user role to someone.
>
> **[5:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=315)** You don't want everyone to have the full access.
>
> **[5:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=319)** This could have a significant security risk.
>
> **[5:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=324)** Utilize application-specific roles.
>
> **[5:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=327)** Sometimes it's not just a user who is connecting to your database.
>
> **[5:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=332)** Maybe you have a website, you have a mobile application, you have another desktop based application.
>
> **[5:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=339)** Those application directly connecting to the database to get or push the information.
>
> **[5:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=347)** In that case, you should have a specific role assigned to them because this is something of a programmatic way.
>
> **[5:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=356)** You give them only the least privilege based access control.
>
> **[6:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=362)** You can also think of using the data encryption and data masking.
>
> **[6:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=366)** Sometimes when you store the PII, that is personal identification information like account numbers, card details, or some medical data, probably you can use the masking where every user cannot see that data directly.
>
> **[6:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=385)** By following these best practices, you can create a robust security model for your post grade SQL database that protects sensitive data, ensures users have appropriate access level, and helps maintaining the integrity and confidentiality of your database environment.
>
> **[6:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=408)** After securing the database, now it's time to understand what can go wrong in your database and how we can recover from that.
>
> **[6:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=417)** So in the next video we are going to talk about the basic common errors which can come in the SQL or database world and how you can get rid of them.
>
> **[7:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/best-practices-for-managing-roles-and-permissions?u=76281980&t=428)** See you there.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), noinherit (2), pii (1)
> **Code Keywords:** super (2), function (1), public (1), case, (1)
> **Best Practices:** best practice (4)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - managing (1)

#### Challenge: Create a role
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-create-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-create-role?u=76281980&t=0)** (bubbly electronic music)
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-create-role?u=76281980&t=5)** - [Instructor] Our retail store have hired a new team member, and the name of that team member is Bob.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-create-role?u=76281980&t=13)** Our retail store team wants to give Bob some specific permissions to view the product details.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/challenge-create-role?u=76281980&t=21)** Let's create a user for Bob and grant him the select permission.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bubbly electronic music) (1)

#### Solution: Create a role
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-create-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-create-role?u=76281980&t=0)** - [Instructor] To create the user for bob, we can use the command create role bob with this login credential saying that it has a login capability, and the password is bob@123.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-create-role?u=76281980&t=23)** If you execute this command, this will create a user called bob.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-create-role?u=76281980&t=28)** Now, as per the challenge, we have to give the select permission to bob on product table as well.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-create-role?u=76281980&t=36)** So for that, we will say grant select on product table
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-create-role?u=76281980&t=44)** to user called bob.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-create-role?u=76281980&t=47)** And that's it.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/solution-create-role?u=76281980&t=49)** Now, if we just go and execute this, this will grant this permission for selection on product table to bob.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 11. 10. Debugging: Common Mistakes and SQL Errors

#### Understanding SQL syntax errors
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=0)** - [Instructor] Assume you are instructing a chef to prepare a complex recipe and you need to provide step-by-step instructions.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=10)** SQL syntax error can be exactly similar to a kind of having a miscommunication or mistake in those instructions that results in confusion or inability to carry out the cooking process correctly.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=29)** Similarly, understanding SQL syntax error is crucial for anyone working with the database as these are the common mistakes or issues, which arises when you write and execute SQL queries.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=46)** Syntax error occur when the SQL statement does not conform to the rules of the SQL language grammar.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=55)** These error can prevent your SQL statement from executing.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=61)** Let's just look at some of the common SQL errors, which can come and how we can solve them.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=68)** Many times, SQL error comes something like this.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=72)** I am selecting the rules from customer table.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=76)** Now the moment I'm trying to execute this, this query is not going to work.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=82)** The reason is typo.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=84)** I have not correctly given the select spelling.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=90)** SQL engine expect that select would be given properly, using the proper spelling.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=98)** Now I have just removed that typo and it is going to work.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=104)** Now see, it is working perfectly fine.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=108)** Sometimes, people do these kind of mistakes as well.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=112)** They say, "I want to select a specific city."
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=118)** I would say like select star where city is equal to City1
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=127)** from customer table.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=130)** Now this query will also give me an error.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=133)** The reason is here, the placement of the different keywords are wrong.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=140)** Ideally, I should not use the where clause before the from clause.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=145)** So I should have been saying something like this.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=149)** Now if I execute this, it'll work perfectly fine.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=155)** So the point is either sometimes, you have a casual spelling mistake, a typo error, or sometimes, you are using the clauses in an inappropriate manner.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=169)** Sometimes, the problem can happen in this manner as well.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=175)** You have written almost right query, but you might not be using the single quotes wherever it is needed.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=184)** You feel that "I'm matching the city with City1.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=187)** What is the problem?"
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=189)** The problem here is the single quotes.
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=192)** So sometimes, when you are doing the string comparison, in that time, you need to ensure that the strings are capped within the proper quotes.
>
> **[3:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=203)** Sometimes, if you have using the multiple parenthesis, ensure that the parenthesis has a proper open and close.
>
> **[3:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=212)** For example, I was saying something, select star from table where city is inside the City1 or City2.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=232)** Now in this case, if I execute, this will also not work.
>
> **[3:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=237)** Reason is I have not have a proper open and closed parenthesis.
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=243)** Now if I try to execute, this will going to work.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=247)** Sometimes, you are doing the operation on a wrong data type.
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=252)** For example, if I say select average of the name from customer, now if I do this, this is not going to work at all.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=268)** It is saying that name column does not exist.
>
> **[4:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=271)** Even though if I give the correct name column, that is customer_name and if I try to execute, still it is a problem.
>
> **[4:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=280)** Reason is customer_name is not an integer, or a decimal value.
>
> **[4:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=287)** It is a string type or a VARCHAR type.
>
> **[4:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=291)** On VARCHAR or the string, you cannot do the averaging.
>
> **[4:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=296)** Average needs a numeric.
>
> **[4:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=298)** So sometimes, when you apply these SQL queries, you are not putting the right data type at the right place.
>
> **[5:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=308)** Sometimes, when you do the joining, you not join the two tables on the correct column.
>
> **[5:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=316)** That will also cause sometimes an error.
>
> **[5:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=319)** Maybe let's say you are doing orders join customer on wrong columns.
>
> **[5:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=327)** That could also be the cause of an error.
>
> **[5:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=331)** So these common causes of the SQL syntax would be anything.
>
> **[5:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=336)** If you follow the proper syntax, then SQL engine would be able to pass your query and execute it.
>
> **[5:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=347)** Now let's just see how you can diagnose the SQL syntax error.
>
> **[5:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=352)** The first important thing, which you can do is seeing the error message.
>
> **[5:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=357)** Most of the time, SQL databases system provides you a detailed error message that you can see and that gives you the clue about where and what the syntax error problem it could be.
>
> **[6:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=372)** For example, now here, if you see this error, what this error is saying?
>
> **[6:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=377)** "No function matches the given name and argument type."
>
> **[6:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=381)** So it means that this is saying that average function, does not have this specific argument type.
>
> **[6:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=389)** Here, you are giving customer_mame, which is of character type.
>
> **[6:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=394)** And there is no function exist with average, which is having a character type.
>
> **[6:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=399)** So this give you some hint that "Okay, there is problem with this data type of the column."
>
> **[6:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=407)** To diagnose the SQL error, you can use the formatter or the SQL linters.
>
> **[6:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=414)** There are some tools exist, which can help you to check your SQL code.
>
> **[7:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=420)** Sometimes, when you write that code, automatically you see a kind of a red line below it.
>
> **[7:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=427)** That gives you a suggestion that probably this is the wrong keyword you may be using, or there is some problem in that specific SQL statement.
>
> **[7:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=438)** Sometimes, breaking down the query into a smaller piece can also help you to find out the SQL error.
>
> **[7:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=447)** If you have a one-page, two-page long query and finding an error in such a long query would be difficult, you can cut down the query into a small parts and then probably it'll be easy to find out the specific error.
>
> **[7:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=463)** Sometimes, your message of the error is not very clear.
>
> **[7:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=468)** In those cases, you can consult the documentation.
>
> **[7:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=472)** That can give you a specific clue, which can help you to sort out the problem.
>
> **[7:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=479)** To avoid most of these problem, you can have a some certain checklist or best practices.
>
> **[8:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=486)** For example, wherever you write the queries, you should have a careful review, either you or your peer (indistinct) should do a review of the query which you have written.
>
> **[8:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=499)** And it helps you to find out the errors upfront.
>
> **[8:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=504)** You can ensure that all the SQL keywords are spelled correctly and used in the right syntax.
>
> **[8:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=512)** You can also review the identifiers, verify that the table names or the column names, which you're trying to use are exist or not.
>
> **[8:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=523)** You can validate the parenthesis, ensures that all the parenthesis, which you have started or opened has been properly closed, or not.
>
> **[8:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=533)** You can also verify that all the columns, which you're using are having a comma separated or not.
>
> **[9:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=540)** You can also check the data types, so you can confirm you're using the right data types.
>
> **[9:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=547)** And lastly, you can have a syntax reference from the database itself.
>
> **[9:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=552)** So maybe let's say you are using PostgreSQL.
>
> **[9:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=557)** You can have the PostgreSQL documentation with you to verify the syntax.
>
> **[9:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/understanding-sql-syntax-errors?u=76281980&t=564)** Understanding and fixing SQL syntax error, require attention to detail, a good understanding of SQL grammar and sometimes, a bit of a detective work with practice and experience can help you to solve the problem in fastest manner.

> [!info]- Semantic Content
>
> **Env Vars:** sql (22), varchar (2)
> **Code Keywords:** type. (6), let (4), this, (3), function (3), this. (2)
> **Analogies:** for example (4)
> **CLI Commands:** find (3)
> **Code Identifiers:** customer_name (2), customer_mame (1)
> **Definitions:** is a  (2), means that (1)
> **SQL:** varchar (2)
> **Documentation:** the documentation (1)

#### Logical errors in SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=0)** - [Instructor] Logical error in SQL are mistakes that happen when your instruction to the database don't achieve what you intended.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=10)** It's like telling someone to make a sandwich, but instead of putting the peanut butter and jelly together, they put peanut butter and the mayonnaise.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=20)** Their steps may be correct, but the result is not what you wanted.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=26)** Logical errors in SQL refers to mistakes or flaws in the logic of SQL query that lead to unintended results.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=37)** Unlike syntax errors which are caught by the SQL parser and prevent the query from executing, logical errors allows the query to run, but the result is incorrect, and it is not what you are expecting out of the query.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=55)** These kind of errors sometimes is more challenging to identify and resolve because they often requires a deep understanding of both the data and the problem statement that you're trying to solve.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=72)** Let's talk about some common types of logical errors in SQL and strategies to address them, Incorrect join.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=83)** You might find that logical error can occur when the JOIN condition between the tables is incorrect or maybe the wrong type of join is used.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=94)** For example, instead of using the LEFT JOIN, you might have used the RIGHT OUTER JOIN, so sometimes using the incorrect join, putting the wrong condition, could be the reason of your logical error.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=109)** To solve this problem, you can review the JOIN conditions and ensure that you're using the correct type of the join and correct condition as per the problem statement.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=122)** Another reason could be is misuse of aggregate function.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=128)** Aggregating data incorrectly can lead to logical error.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=132)** For an example, including non-aggregated column in the SELECT without including them in the GROUP BY could be a problem.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=142)** For example, you are trying to do the sum, average, or count.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=148)** Another reason of logical error could be using incorrect WHERE and HAVING clause.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=154)** You need to be very clear that WHERE clause should be used before the GROUP BY condition.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=161)** If you use the WHERE clause incorrectly, that can filter out the rules in an unexpected manner.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=168)** If you have some GROUP BY or aggregated values and you are trying to filtering it out, then you have to use the HAVING after the GROUP BY only.
>
> **[2:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=178)** So a proper knowledge of the WHERE and HAVING clause is needed to get the correct filtered data.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=186)** Incorrect subquery can also be another reason of your logical errors.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=190)** A lot of times when you have a complex requirement, you tend to use the subqueries, which is a query inside a query.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=199)** If the output of these subqueries are not properly formatted, probably this could create some kind of a logical problem.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=209)** So ensure that if your query has some logical errors, and if it is having a subqueries, check that subquery portion as well.
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=219)** Handling NULL values could be one of our biggest problem of the logical error.
>
> **[3:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=224)** Sometimes you misunderstood the NULL with 0 or some default value.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=229)** NULL is actually representing unknown or missing values.
>
> **[3:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=233)** If you are doing any comparison along with the NULL, ensure that NULL comparison will never comes out to be the true because NULL is always something which is unknown.
>
> **[4:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=245)** So if you have done any of the condition based on the NULL, you need to ensure that you are using proper NULL handling, like using IS NULL, IS NOT NULL, or the functions like COALESCE or NVL.
>
> **[4:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=262)** Assuming data integrity without considering the impact of the constraint, like foreign key, unique key, or some constraint, can also lead to the problem of logical errors.
>
> **[4:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=277)** So you need to ensure that whatever be the primary key, foreign key, or unique key that you are assuming is exactly like that as per the schema also.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=288)** Many times, you use the UNION, INTERSECT and ACCEPT.
>
> **[4:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=293)** These are called as generally the set operations.
>
> **[4:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=296)** If you are using these kind of a set operations into the query, this could also result into some kind of a logical errors if they have not been implemented in the right way.
>
> **[5:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=308)** So if these are also involved in your query, ensure that you are using them correctly.
>
> **[5:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=315)** and you have a proper understanding of how to use these set operations.
>
> **[5:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=321)** Let's talk about the strategies which you can apply to identify and resolve these kind of a logical error.
>
> **[5:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=329)** The first and foremost thing which you can do is review and test.
>
> **[5:33](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=333)** Ideally, you should break down your complex query into smaller parts as far as possible.
>
> **[5:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=339)** Review each part individually and then test with known dataset to verify its correctness.
>
> **[5:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=348)** Many times, many projects employ this best practice of doing the peer review.
>
> **[5:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=354)** You write one piece of a query, and then you have your teammate who is going to review this piece of query so that the fresh piece of eyes when see your code, probably they might see some errors.
>
> **[6:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=371)** You can also use SQL linkers and formatters.
>
> **[6:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=374)** They help you to make your queries more readable, and once your query is more readable, sometimes it is easy to catch those logical errors.
>
> **[6:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=385)** Data and requirement cross-verification.
>
> **[6:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=388)** Sometimes you don't know what kind of data is available in the table, and you are also not very sure about the requirement.
>
> **[6:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=396)** So sometimes if you understand the requirement properly, and you do the cross-verification, that will help you to resolve those logical errors because sometimes the problem is not in your query.
>
> **[6:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=412)** The problem could be in your understanding of the requirement.
>
> **[6:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=416)** If you understand the requirement properly, probably you can put the logic accordingly into your query and get the expected output.
>
> **[7:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=427)** Logical error requires a thorough understanding of both the SQL knowledge and the specific database schema on which you are working.
>
> **[7:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=438)** Addressing these errors often involves careful review, testing, and sometimes rethinking the approach to query the data.
>
> **[7:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=449)** In the next video, we're going to talk about the debugging skills in SQL.
>
> **[7:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/logical-errors-in-sql?u=76281980&t=454)** See you there.

> [!info]- Semantic Content
>
> **Env Vars:** null (10), sql (8), join (4), group (4), where (4)
> **SQL:** group by (4), where (4), join (3), having (3), left join (1)
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** let (2), function (1)
> **Analogies:** for example (2), it's like (1)
> **Definitions:** refers to (1), is a  (1)
> **Cross-References:** in the next (1)
> **Best Practices:** best practice (1)

#### Debugging NULL values
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=0)** - [INstructor] Debugging null values in SQL is a crucial aspect of database management.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=7)** It is important because null represent the absence of a value in a column.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=14)** Null is not same as empty string or zero.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=19)** It signifies unknown or not applicable.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=24)** Misunderstanding or mishandling of null values can relate to unexpected results or logical errors in your SQL queries.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=35)** Let's go back to over PG admin and see how we can handle the null values.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=42)** Let's say I want to find out all the products for which the price is null.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=49)** If I say something like that, select start from products where price equal to null and I do this.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=58)** This will not going to work because you cannot compare null with the null.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=64)** Null is a kind of unknown.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=66)** You cannot say one unknown is equal to another unknown.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=70)** If you do this, you will not get any result, but if you say something like this, where price is null and then you execute, you see the two result where price column is null.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=85)** So whenever you are comparing the null, you should use a function called is null or if you don't want a null values, you should say is not null.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=96)** This will give you all the records where that column is not null or else sometimes you do the logical operator, you say like one condition is null, another condition is something else.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=111)** Similarly, when you do the logical comparison of two conditions, in that case also you need to be very careful when using the null.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=121)** For example, if I say select true and null.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=128)** So if true and true ideally should give true.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=131)** But when you have a one condition coming out as true and other condition is null, your output will still going to come as null.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=141)** Reason is null is consider as unknown.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=145)** So even when you are doing just like a direct checking or you are using some kind of a conditional, and, or, or these kind of a logical operator, every time you have to be careful that if you are dealing with the nulls, nulls cannot compare directly.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=164)** You have to use isnull, isnotnull like that.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=170)** You also need to be very careful that when you are using the aggregate functions.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=175)** So the functions like average, max, min, all these function does not include the null values.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=182)** They exclude the null, but the aggregate function like count star.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=187)** This is something which going to include the null values as well.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=191)** So remember, except count function, all the aggregate function does not consider the null but count function consider the null as well.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=202)** Let's talk about some of the common debugging scenarios.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=207)** For example, unexpected empty results set.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=211)** A common issue is when queries written empty sets because the query condition involves comparison within null values.
>
> **[3:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=221)** For instance, filtering a data set with column equal to null will not yield any result as we have seen in the previous example.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=232)** Similarly, sometimes an incorrect aggregation could also be a problem because you have not considered that max, min, sum, average will not count your null values.
>
> **[4:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=245)** However, your count will count in the null values as well.
>
> **[4:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=251)** Another could be is join condition.
>
> **[4:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=253)** When you join two tables and if one of the join key has null values, in that case, the rows with null in both the tables will not going to match.
>
> **[4:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=264)** You cannot say that null of this one table could match with the null of another table.
>
> **[4:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=270)** This could potentially leading to a fever join results than what you anticipated.
>
> **[4:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=276)** To sort out this null problem, there is some debugging strategies which you can think of.
>
> **[4:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=283)** For example, using is null or is not null.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=288)** This example we have already seen.
>
> **[4:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=291)** Another one is using COALESCE.
>
> **[4:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=293)** COALESCE function handle the null values by providing an alternative value.
>
> **[5:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=300)** In the COALESCE function, you can pass some default value.
>
> **[5:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=304)** If this column is having a null value instead of coming the null, it'll give you that default value.
>
> **[5:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=311)** You can think of using the NULLIF functions that will return null if two expressions are equal.
>
> **[5:19](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=319)** You can also have the conditional aggregation.
>
> **[5:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=323)** When you aggregate the data, consider whether you need to count null values or treat them differently.
>
> **[5:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=331)** Outer joins, if you need to include rows that have a null values in the join key, consider using the outer joins like left join, right join, or full outer join.
>
> **[5:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=345)** When working with the data that can contain null values, you can include a specific test to ensure that query logic correctly handles these cases.
>
> **[5:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=356)** Ideally, you should do proper testing and validation.
>
> **[6:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=360)** In a complex queries involving multiple handling of null values, documentation and comment can help someone to understand the query in much easier way and it'll make your code more maintainable.
>
> **[6:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=377)** By carefully considering, how null values are handled in your SQL queries and employing appropriate functions and condition to manage them, you can avoid common pitfalls and ensure that query returns the expected results.
>
> **[6:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=396)** Now in the next video, we are going to talk about some more practical problem, which can come when you write an SQL queries and we'll see how you can debug them.
>
> **[6:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/debugging-null-values?u=76281980&t=407)** Stay tuned.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), let (3), this, (2), this. (1), else. (1)
> **Env Vars:** sql (4), coalesce (3), nullif (1)
> **Analogies:** for example (3), just like (1), for instance (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** is a  (2)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Practical example: Debugging real SQL issues
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=0)** - [Instructor] Let's walk through a practical example of debugging a real SQL issue using our e-commerce database.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=9)** Let's just move to our pgAdmin.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=13)** Assume that we are analyzing our monthly sales figure, but the reported number which we are seeing is unexpectedly low.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=24)** You suspect there might be an issue with the SQL query, which we are using to analyze our monthly sales.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=32)** Now see, what could be the problem?
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=35)** Now, this is of a sample query.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=38)** Let's execute this.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=40)** Now, when we execute this query, we will see the monthly sales data for every month.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=47)** What I have done is I used a date truncate function that is getting the month from my timestamp, that is order_month.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=58)** The SUM is total_quantity multiplied by the price, and then we don't have the price of the item into our order table.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=67)** So I just try to do the JOIN, and I say JOIN with the product table.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=73)** And then the condition we have kept is like between 1st January 23 to 1st April 25.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=82)** And we did a GROUP BY based on the order month.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=86)** Now, the total sales is coming less, the reason is here you see two null values.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=94)** Now, this two null is coming.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=97)** Ideally, your total sales amount should not be null, right?
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=102)** What could be the reason?
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=103)** Let's try to find out what could be the reason in this case which causes this null value.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=109)** Now, to identify this, first understand which column is getting the value as null.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=116)** So column second is causing the null value.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=119)** So this column looks fine.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=121)** The second column is a problem.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=123)** Now, in the second column, if this is coming as null, the reason is here you are doing SUM.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=130)** So either any one of them is null, because of that, this is coming null.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=137)** So maybe for this specific month, either the total quantity is null, or the price is null, right?
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=147)** Because when you multiply one null with another null or a specific value, the output will come as null only.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=155)** Now, we can quickly come down here and we can check it, select * from our orders table and say that where this total_quantity is null,
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=170)** we'll just try to check.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=172)** Do we have any rows in our orders table where the total quantity is null for something?
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=179)** Let's just see.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=181)** We don't find any row which has this problem of null.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=186)** So the total_quantity is not null for all those.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=191)** Okay. Now then, it's time to check for the price.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=195)** So do the same thing here again.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=197)** This time we'll say select * from our products table, and we have to check where the price is null.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=209)** Now, when you execute this, you will find that there are two product IDs, ID one, and ID four, which is coming out as null.
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=219)** This could be the problem.
>
> **[3:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=221)** We can just do one more thing here.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=223)** We just say select * from orders where our product_id is in (1, 4).
>
> **[3:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=238)** So I'm just checking whether the product_id is equal to one or four.
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=243)** So you can see that we got the order timestamp.
>
> **[4:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=248)** So these are the order timestamp for the first month, that is the January 23.
>
> **[4:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=254)** We got some product which has a null here, and we have a few other months as well.
>
> **[4:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=261)** So this could be the reason that when we are seeing our monthly report, we see two specific rows coming out to be null, and that's why our total sales quantity is coming null.
>
> **[4:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=274)** And the reason of this total sales quantity null or less is because for some of the product, our system has a wrong price.
>
> **[4:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=284)** Ideally, you should not have a zero price for any product.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=288)** Got it?
>
> **[4:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=289)** So we can go back and we can put down the correct price for these product and then our analysis will come perfectly fine.
>
> **[4:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=297)** We could just go down and say that update products table, and we can set some price, let's say the price =100 where my product_id =1.
>
> **[5:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=322)** And similarly, let me do it for product_id for the price is 200.
>
> **[5:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=331)** Let me just execute this.
>
> **[5:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=335)** And then if we just go down and see our monthly report, we will get the specific amounts.
>
> **[5:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=347)** Got it?
>
> **[5:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=347)** So that's how you can sometimes go back and analyze in your real world what could be the problem.
>
> **[5:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=355)** Go step by step and check each and every line and identify where it could be possibly the problem is.
>
> **[6:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=363)** So we have extensively covered what could be the problems which we can face while writing the SQL queries.
>
> **[6:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=371)** And by now, you got the understanding how you can get rid of those errors.
>
> **[6:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=376)** In the next video, we're going to talk about the next level in the SQL world, that is the ETL.
>
> **[6:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/practical-example-debugging-real-sql-issues?u=76281980&t=384)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this. (2), this, (2), function (1)
> **Env Vars:** sql (4), sum (2), join (2), group (1), etl (1)
> **Code Identifiers:** product_id (4), total_quantity (3), pgadmin (1), order_month (1)
> **CLI Commands:** find (3)
> **SQL:** join (2), group by (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 12. 11. ETL Overview

#### What is ETL and its importance
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=0)** - [Lecturer] ETL stands for extract, transform, and load.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=5)** This concept is at the heart of data warehousing, business intelligence and data integration strategies across the industries.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=15)** Today let's explore what ETL is and why it's crucial and how it empowers businesses to make informed decisions.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=27)** ETL is a three step process used in the database management systems and data warehousing world.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=37)** Let's understand each one of them.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=40)** Extract.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=42)** The first steps involve extracting the data from variety of sources.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=48)** These sources can range from RDBMS system.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=51)** It could be CRM system.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=53)** It could be CSV file, JSON file.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=57)** It could be SFTP.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=58)** It could be FTP.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=60)** It could be any data source possible.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=63)** The goal here is to gather all the necessary data from these data sources regardless of the format or the type of data source.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=78)** Now the transformation, which is the second step where we try to transform the data which we have extracted in the step one.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=89)** This stage is all about turning raw data into something meaningful.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=96)** You try to do this transformation like you remove the null values.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=101)** You might remove the duplicate, you remove the outliers, you put on the business rules, you do some kind of a validation check, and then you transform the data which is in more digestible form, which is more accurate, and help to solve some kind of a business problem.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=123)** The third step is load.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=125)** The final step is loading this transformed data into the target system, which is in general, most of the time you will find it as a data warehousing solution.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=138)** So the idea is you pull the data from your data sources.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=143)** That could be generally your old TP databases or CRM system or those kind of different sources.
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=151)** You extract, you transform, and then you load it into data warehousing, all the OLAP systems.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=161)** And later on, the data analyst, your BI team or your SQL analyst folks will query this data warehouse to get some meaningful information.
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=177)** Let's understand the importance of the ETL process.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=182)** ETL is more than just a data processing pipeline.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=187)** It is a foundational component for effective data management.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=193)** It is important for data consolidation.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=197)** ETL allows businesses to consolidate the data from multiple sources into a single coherent repository.
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=208)** This helps you to form a unified view, which is sometimes very important when you are doing the comprehensive analysis and reporting.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=220)** ETL is important to improve the data quality as well.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=225)** The transformational step in the ETL world try to make your data more cleaner and more meaningful to the business.
>
> **[3:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=235)** It tries to do all sort of validations, applying business rules and clean the data.
>
> **[4:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=244)** That's why ETL process helps to improve the data quality.
>
> **[4:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=250)** ETL process is many times is very automatic and repetitive.
>
> **[4:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=253)** So if some process runs automated way, it can save a lot of time.
>
> **[4:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=263)** You can set the ETL process which can run at a fixed defined frequency, maybe every hour, every minute, every once in a day, like that.
>
> **[4:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=275)** ETL process also helps in the historical data management.
>
> **[4:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=280)** This process enables businesses to store historical data very efficiently.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=288)** This is historical perspective is important when you are doing some kind of a trend analysis or forecasting or you might be doing some strategic planning.
>
> **[5:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=302)** ETL process are common across multiple industries.
>
> **[5:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=308)** In the real world, if we talk about the retail industry there also ETL is very popular.
>
> **[5:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=315)** ETL can integrate your customer, sales, inventory and all variety of your operational data to provide insights into the customer behavior and supply chain efficiency.
>
> **[5:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=331)** ETL can be very useful in the financial institutions as well, where you can have consolidated transaction data from multiple system which help for the fraud detection or maybe from compliance reporting purpose.
>
> **[5:48](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=348)** In healthcare domain ETL process can merge patients record from variety of systems, improving, care coordination and patient's outcome.
>
> **[6:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=360)** To sum up, ETL is a critical process for any data-driven organization.
>
> **[6:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=366)** It enables efficient, accurate and timely use of data and helps the business to take the informed decision based on that data.
>
> **[6:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=380)** Stay tuned for our next video where we will keep dive into ETL process flow.
>
> **[6:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/what-is-etl-its-importance?u=76281980&t=387)** See you there.

> [!info]- Semantic Content
>
> **Env Vars:** etl (19), crm (2), rdbms (1), csv (1), json (1)
> **Definitions:** is a  (3), stands for (1)
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** let (3)
> **Cross-References:** next video (1)
> **Speakers:** - [lecturer] (1)

#### ETL process flow
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=0)** - [Instructor] In the last video, you understood the concept of ETL.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=4)** Now it's time to get into ETL process flow and understand each stage in a little more detail.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=11)** Let's start that.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=12)** Our first stop is the extraction stage.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=16)** That is called extract.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=18)** This is the stage where data is gathered from variety of data sources.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=23)** These data sources could be of any type, and it could be of any format.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=29)** For example, the data could be the relational data from the RDBMS databases or the data source could be something like a file type, where the data might be in CSV, JSON, Parquet or any other file format.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=47)** The primary goal here is to accurately and efficiently extract the required data without compromising its integrity.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=57)** Extraction could be of multiple type.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=61)** It could be either full extraction, where sometimes we call it like a full load, where we try to extract the full data, that is, the entire table, entire file, or entire database.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=78)** Sometimes the extraction could be of an incremental one.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=83)** In the incremental extraction, we retrieve only the latest data, or sometimes we call it like the delta portion, only the new records or the new data, which is came after our last pull.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=100)** The next stage is the transformation stage.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=104)** This is the stage where your raw data undergoes a specific type of metamorphosis to become more meaningful and actionable.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=115)** This stage is where the heavy lifting occurs.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=119)** This involves a lot of types of operation.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=123)** For example, the cleaning.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=126)** You try to clear out all the unwanted data.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=130)** Maybe you filter out couple of rows, you may be removing all unwanted columns, you may be removing null values, you may be removing duplicate values, like that.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=142)** A lot of normalization or standardization can also occur at this stage.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=148)** Where you try to bring in disparate data formats into a harmony, trying to make your data more consistent across the data sets.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=160)** You try to do the augmentation of data with additional insights.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=165)** That is like you're trying to do the enrichment of more information by having the data from other external data sources.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=175)** Here, you also try to aggregate the data so that it helps you to form the summarized detail of your large dataset.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=185)** Maybe in this step, you also trying to do the validation as well, based on some business rules and constraints.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=195)** Overall, this stage is tailor the data to fit the analytical or your operational need of the business to ensure that the data you have would be useful for insightful analysis.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=209)** The last stage in this ETL journey is the load stage.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=214)** This is the stage where exactly your data get dumped or copied into the destination data source.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=222)** Or we call it, you load your transformed data into the target data source.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=229)** Now, when you try to do this loading of data into the target data source, it could also be of a variety type.
>
> **[3:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=237)** It could also be of a batch loading, or it could be kind of a real-time loading.
>
> **[4:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=244)** The batch loading is where data is loaded in a batches at a scheduled intervals.
>
> **[4:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=251)** Maybe this is quite suitable for a non-time sensitive data.
>
> **[4:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=257)** This method is efficient, but can result in data being slightly outdated.
>
> **[4:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=265)** However, the real-time loading is the type of load where data is loaded continuously as it is become available.
>
> **[4:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=275)** This approach is ideal for time-sensitive applications, but requires more robust system and infrastructure.
>
> **[4:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=285)** The choice between the batch and the real-time loading depends upon your specific need of the business or how much balance you want to make between your resource utilization.
>
> **[4:59](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=299)** To summarize, ETL process flow is a carefully choreographed dance that transforms raw data into a structured, meaningful format, which is ready for analysis.
>
> **[5:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=316)** Now, you must be thinking, how you can apply this ETL?
>
> **[5:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=320)** What are the different tools out there?
>
> **[5:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=323)** In the next video, we are going to talk about the variety of ETL tools.
>
> **[5:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/etl-process-flow?u=76281980&t=328)** Stay tuned.

> [!info]- Semantic Content
>
> **Env Vars:** etl (6), rdbms (1), csv (1), json (1)
> **Code Keywords:** type, (2), type. (2), let (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Common ETL tools
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=0)** - It's time to explore the ETL tools.
>
> **[0:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=3)** These tools are the workhorses that automate and manage the extract, transform and load cycle, making the data more accessible and useful for the business.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=18)** ETL tools are software applications, which is designed to facilitate the ETL process.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=26)** It helps to extract data from variety of sources, helps to transforming it according to the business tools and requirement and helps to loading it into a destination, like a data warehouse for analysis.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=46)** The choice of a ETL tools can significantly impact the efficiency of your data operations, the scalability of data process, and ultimately the insights which you can derive from the data.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=62)** If you talk there are broadly, ETL tools can be divided into three categories.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=68)** The first one is traditional on premises tools.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=72)** Now, as the name suggests, these are the little older ones and mostly works at on premises environment.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=80)** These are something which is installed and run on your organization hardware.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=87)** They offer some robust features but may require some significant upfront investment and maintenance.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=98)** Second type of ETL tool category could be is cloud-based tools.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=102)** There are a lot of cloud-based ETL tools, which is quite popular these days and the advantage which come along with these cloud-based tools, is the scalability and the flexibility.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=117)** Another important thing is it does not require a huge investment because most of these cloud-based ETL tools are pay-as-you go pricing, which helps you to start at a low cost itself.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=134)** Another category is open source tool.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=138)** Open source ETL tools are highly customizable and very cost effective also.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=145)** They are supported by the communities of developers, but they require some more in-house expertise to manage.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=155)** Now this might confuse you that which specific type of ETL tool you should choose.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=163)** So to sort out this problem of choosing the right ETL tool, let's understand what specific features you should look for.
>
> **[2:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=174)** The first and foremost feature is connectivity to diverse data source.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=180)** Through ETL tools, you try to move the data from your one data source to another data source.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=188)** The most important thing you need in your ETL tool is the connectivity option available for your choice of data sources.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=197)** For example, if you are trying to move the data from Dynamic 365 or SQL server and you try to store the data into Azure Data Lake storage, or maybe you want to store this data in some SFTP server or FTP server, ideally you should choose an ETL tool which provides the connectivity to all these source and destination data source.
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=226)** Another important feature you probably need is transformation capability.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=232)** You may doing a more complex transformation, so you should choose an ETL tool which provide all those kind of transformations you are looking for.
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=243)** Another good feature you are looking for is user friendliness.
>
> **[4:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=248)** There are a lot of ETL tools available in the market, which is having a very good graphical user interface that makes the learning and doing very easy and fun.
>
> **[4:21](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=261)** In the ETL world, many times you deal with a very huge data set, hence your ETL tool would be of such a quality that it has the scalability and the performance options.
>
> **[4:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=274)** As your data size grows, this ETL tool should be smart enough to handle that huge load and still performs better.
>
> **[4:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=285)** Data quality feature is also the something which you should look for because you have to manage your data quality.
>
> **[4:53](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=293)** And if you have a ETL tool which support this along with the monitoring and logging, that will make your life much easier.
>
> **[5:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=304)** Let's talk about some of the common popular ETL tools.
>
> **[5:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=309)** The first one is Informatica PowerCenter.
>
> **[5:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=313)** Informatica PowerCenter is a robust traditional ETL tool, which is known for its extensive features and it is very popular for strong data integration capabilities.
>
> **[5:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=328)** Another tool is Talend.
>
> **[5:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=330)** Talend offers both open source and commercial version.
>
> **[5:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=335)** This is also popular for flexible and allows broader connectivity option with variety of data sources.
>
> **[5:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=345)** AWS Glue, this is fully managed, cloud-based ETL service that makes it easy to prepare and load data for analytics.
>
> **[5:56](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=356)** Similar to the AWS Glue, you also have an Azure Data Factory ETL tool, which is coming from the Microsoft Azure Cloud.
>
> **[6:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=367)** This is also a fully managed cloud-based ETL service and it has a very smooth integration with lots of data sources and Azure ecosystem.
>
> **[6:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=378)** In the Google Cloud, you have the Google Cloud Dataflow ETL service.
>
> **[6:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=383)** It is also a type of cloud service, which is managed service for stream and batch processing.
>
> **[6:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=391)** This seamlessly integrate with all the variety of Google Cloud services and ecosystem.
>
> **[6:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=398)** There is one more tool that is Apache NiFi.
>
> **[6:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=402)** It is an open source tool, which is designed for automated data flow management with user-friendly web UI.
>
> **[6:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=411)** Each of these tool has its strengths and best choice, depends upon your specific data requirement, infrastructure, and budget.
>
> **[7:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=423)** In conclusion, the right ETL tool can streamline your data processes, enhance data quality, and unlock valuable insights.
>
> **[7:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=433)** Consider your organization's unique need and complexity of your data.
>
> **[7:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/common-etl-tools?u=76281980&t=438)** You can choose the ETL tool which fits best for you.

> [!info]- Semantic Content
>
> **Env Vars:** etl (28), aws (2), sql (1), sftp (1), ftp (1)
> **Code Keywords:** require (3), let (2), for. (2), interface (1)
> **CLI Commands:** aws (2), make (1), apache (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1), similar to (1)
> **Speakers:** - it (1)


### 13. 12. Real-World Project

#### Final project: Insurance claims analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=0)** - [Instructor] Now it's a time to implement all our learning into a project.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=5)** Let's understand our project.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=9)** Our project is insurance claim analysis.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=13)** Now let's understand what are the objectives of this project?
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=18)** The main objective of these projects are creating database schema for our insurance data, populating the databases with sample insurance data, analyzing the claim data for insights, creating index for better performance, and setting up rules and permission for database security.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=41)** Now let's understand our each and every task in more detail.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=47)** Our first task is to create the database schema.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=52)** We have four tables to create customers, policies, claims, and policy types, and these are some of the fields which you can include like CustomerID, PolicyID, Claim, PolicyType.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=67)** While you create this table, keep the kind of relationship in the mind that how the policy is connected with the policy type, how the claim is connected with the customers or policy.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=83)** Second task would be the data population.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=86)** So right now the tables which you have created probably is empty.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=91)** So the step two is to put some sample data inside it, ensure that this data would be of variety of types, so that when we do some analysis, we get better results.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=106)** The third task is writing some analytical queries.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=111)** So you need to write a query to calculate the total number of claims per policy type.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=118)** Another one is use analytical functions to determine, the monthly claim frequency, and average claim amount.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=130)** Once you write your analytical queries, it's time to optimize the performance.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=136)** Discuss the creation of indexes on any column which you think is used mostly in the WHERE clause and would be the right choice for creation of the indexes.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=150)** The last task would be to manage the roles and permission, create two roles, ClaimsAnalyst and ClaimsManager.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=159)** ClaimsAnalyst would be something which has a read-only access to claims and policy data.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=167)** ClaimsManager would be the role, which is having the full access on all the claims data along with the ability to update your policy information.
>
> **[2:58](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-insurance-claims-analysis?u=76281980&t=178)** So let's just see how we can implement in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), type, (1), type. (1)
> **SQL:** where (1)
> **Env Vars:** where (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Final project solution: Insurance claims analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=0)** - [Instructor] Let's create our database.
>
> **[0:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=2)** Click on the Database here and say Database.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=6)** I give the database name as Claiminsurance.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=13)** And say Save.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=20)** Now, let's just see what was our first task.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=23)** Our first task was to create the tables for the customers, for policies, claims, and policy type.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=32)** Here is the query for our Customer table.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=35)** I have a CustomerID as a column.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=38)** I set it like a serial, primary key, so that whenever a new customer you try to add in this table, automatically a primary key get assigned to CustomerID.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=50)** FirstName, LastName, both are of type of VARCHAR, DateOfBirth, Gender, Address, City, State, and ZipCode.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=62)** So let's execute this query.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=66)** This will create our Customer table.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=70)** Now, the next table is about the policy types.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=75)** So we have PolicyID, PolicyTypeName, and some Description.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=82)** Let's execute this.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=86)** PolicyType table also get created.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=89)** Now, the third table is Policies, which has PolicyID and CustomerID and PolicyTypeID.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=97)** Now, understand the relationship here.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=100)** When you book a policy, a policy belongs to a specific policy type.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=105)** Also, a policy is sold to a specific customer.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=109)** So your policy should have a PolicyTypeID as well as the CustomerID.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=115)** So here this CustomerID is referencing the Customer table and this policy type ID is referencing PolicyType table.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=125)** And policy have some start date, end date, and premium.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=130)** Let's execute this.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=132)** Now in the Claim table, you do claim on what, you book the claim based on some policy, right?
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=140)** So here the Claim table has a referencing with the Policy table, that is the PolicyID.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=148)** So you can see that PolicyID is references to Policies table with column PolicyID.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=155)** And then this Claim table will have ClaimDate, ClaimAmount, some Description, and what is the status of the claim at this point.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=166)** Let's execute.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=167)** Now, our four tables has been created.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=170)** At this point of a time, if you go down and if you select anything from these tables, you will find that right now all these tables are empty.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=181)** So let's move to our next task, which is about inserting the data into these tables.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=189)** We have created our four tables.
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=192)** Let's start inserting some data inside this table.
>
> **[3:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=196)** Starting with the PolicyType table, I use the INSERT command saying INSERT INTO PolicyType.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=204)** I give the name of the column and have some dummy values.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=209)** Let's have a policy of Auto type, Home, Life, and Health.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=214)** Let's execute this.
>
> **[3:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=218)** This will add the four rows in our PolicyType table.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=222)** Now, let's register some customer.
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=226)** I have just again used the INSERT command, INSERT INTO Customers.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=232)** And then column names and values for all those customer rows.
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=240)** And let's say execute.
>
> **[4:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=242)** This will insert all the customer dummy data inside Customer table.
>
> **[4:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=248)** Now it's time to create the policy rows.
>
> **[4:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=253)** Remember, policy row has the referencing to the Customer table as well as to the PolicyType table.
>
> **[4:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=260)** So when you give the policy's dummy data here, this CustomerID and PolicyTypeID has to be something which exists in those table, right?
>
> **[4:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=272)** Let's insert the policy information as well.
>
> **[4:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=277)** And lastly, we have the Claims table.
>
> **[4:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=281)** For the claims, again, remember Claim is having the dependency on the Policy table.
>
> **[4:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=287)** So here, PolicyID is referencing to the Policies table.
>
> **[4:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=292)** So ensure whatever the PolicyID you give here, correspondingly policy should exist in the Policies table.
>
> **[5:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=300)** Let's execute this.
>
> **[5:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=304)** And rows also get inserted into our Claim table.
>
> **[5:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=309)** So, so far we have created a claim insurance database.
>
> **[5:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=314)** We have added four tables and we have added some dummy data.
>
> **[5:20](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=320)** In this example, I am just putting only four rows, five rows.
>
> **[5:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=325)** If you want, you can add more data as well.
>
> **[5:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=329)** Now, let's go to our task three.
>
> **[5:32](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=332)** Our task three was to run some analytical queries.
>
> **[5:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=337)** The first question which was in front of us was, we have to write a query that can calculate the total number of the claims per policy type.
>
> **[5:50](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=350)** Now, understand you want to calculate the total number of claims per policy type.
>
> **[5:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=357)** Now, where is the number of claims there?
>
> **[6:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=360)** The number of the claims you can find in the Claim table.
>
> **[6:04](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=364)** So we'll say under the Claims table.
>
> **[6:06](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=366)** But in the Claims table what we have, in the Claims table, we just have the policies.
>
> **[6:12](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=372)** So we join claims with the policy and inside the policy table, we have the PolicyTypeID, right?
>
> **[6:24](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=384)** So we join Claim table with the Policy table because in the Claim table we have PolicyID and in Policies table also we have PolicyID.
>
> **[6:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=394)** Now, we want this total claim numbers based on the policy type.
>
> **[6:41](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=401)** If we join this reserve with the policy type also, then we can say that PolicyTypeID from the Policies table combined with the PolicyTypeID from PolicyTypes table.
>
> **[6:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=417)** If you do this, then you can get the data based on the policy types.
>
> **[7:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=423)** And now, finally, you can just say GROUP BY PolicyTypeName and ORDER BY TotalClaims.
>
> **[7:11](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=431)** If you execute this query, you will get the total claims number based on every policy type.
>
> **[7:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=442)** Another question which was in front of you was, use analytical function to determine monthly claim frequency and average claim amount.
>
> **[7:35](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=455)** So what you want, you want the number of claims per month plus the claim average amount.
>
> **[7:44](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=464)** What we do, we just go to the Claims table saying Claims table.
>
> **[7:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=469)** In the Claim table, we just say DATE_TRUNK it because we just want on the monthly basis.
>
> **[7:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=477)** So we say Date_Trunk it to the month, right?
>
> **[8:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=482)** And we want claim frequency that is total number of claim count, so we say COUNT(*).
>
> **[8:10](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=490)** And we also need the average claim amount, so I said AVG(ClaimAmount).
>
> **[8:17](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=497)** Now, all these we are doing based on every month, right?
>
> **[8:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=502)** So that's why we say GROUP BY this ClaimMonth.
>
> **[8:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=508)** And that's it.
>
> **[8:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=510)** If I execute this, I will get the claim month.
>
> **[8:36](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=516)** And based on that claim month, I get the claim frequency and average claim amount.
>
> **[8:42](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=522)** So it is saying that for the June month, we got one, for the July month, August, September, and October, we got one, one, one for each.
>
> **[8:54](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=534)** If you put more it up, probably you will see little different frequency here.
>
> **[9:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=540)** But that's how you can calculate the monthly claim frequency and average claim amount.
>
> **[9:08](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=548)** Coming to the next task of this project, it was about the optimization.
>
> **[9:15](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=555)** It is about how you can create the indexes or how we can improve the performance.
>
> **[9:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=562)** So always remember, whenever you try to create the indexes, it should be created on the column, which is more frequently expected to come in your queries.
>
> **[9:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=577)** So far, we have not executed many queries, but in general, your date column could be a very good fit where you can create index.
>
> **[9:47](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=587)** Because lot of time when you do a claim analysis in your insurance domain, you do many things based on the date, right?
>
> **[9:57](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=597)** So date column could be a right fit here to have an index on it.
>
> **[10:03](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=603)** How you can create the index, you can create the index using CREATE INDEX and then you give index name on a specific table and the column name.
>
> **[10:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=616)** Just execute that.
>
> **[10:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=618)** This will create the index on claim date column of Claims table.
>
> **[10:23](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=623)** Now, going forward, whenever you write any query on Claims table, which is filtering based on claim date, you will have a better performance.
>
> **[10:37](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=637)** Last task was about the rules and permission.
>
> **[10:40](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=640)** It is more or less about your database security.
>
> **[10:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=645)** It has been asked to create two roles, claim analyst and claims manager.
>
> **[10:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=652)** Claim analyst is the role which just have only the read permissions on claim and policy data.
>
> **[11:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=660)** Claims manager is someone who has the read as well as the full access, that is update, delete, insert ability on your claim and policy data.
>
> **[11:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=674)** How we can do that.
>
> **[11:16](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=676)** You can create the role using CREATE ROLE ClaimsAnalyst, and you will say LOGIN capability with having PASSWORD sub, password1.
>
> **[11:28](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=688)** Let's execute that.
>
> **[11:30](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=690)** Similarly, you can create the claims manager using CREATE ROLE ClaimsManager, and then you have a login password and you can execute this.
>
> **[11:45](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=705)** Now, so far we just created the role.
>
> **[11:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=709)** Now, it's time to give them the permissions.
>
> **[11:52](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=712)** How you can give them the permission.
>
> **[11:55](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=715)** For ClaimsAnalyst, I just only want select permission, all the read-only permission.
>
> **[12:01](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=721)** So I set GRANT SELECT ON Claims, Policy, PolicyType to ClaimAnalyst.
>
> **[12:09](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=729)** And for the ClaimsManager, we want full access.
>
> **[12:14](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=734)** So I said SELECT, INSERT, UPDATE, DELETE on these tables to ClaimManager.
>
> **[12:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=742)** Let's execute.
>
> **[12:25](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=745)** So that's how we have added the multiple roles along with the variety of privileges to these roles.
>
> **[12:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=754)** You can also do a lot of more analysis in this project.
>
> **[12:38](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=758)** Maybe you can add few more roles, you can create hierarchy, you can create views, you can create more analytical queries.
>
> **[12:49](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/capstone-project-solution-insurance-claims-analysis?u=76281980&t=769)** All this you can do on your own as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), type. (6), this. (5), this, (2), delete (2)
> **Env Vars:** insert (5), create (3), into (2), group (2), role (2)
> **SQL:** insert into (2), group by (2), select (2), varchar (1), order by (1)
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** find (2)
> **API Endpoints:** delete
 (1)
> **Speakers:** - [instructor] (1)


### 14. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/next-steps?u=76281980&t=0)** - [Instructor] And that's a wrap.
>
> **[0:02](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/next-steps?u=76281980&t=2)** You have done a solid job picking up SQL for data engineering.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/next-steps?u=76281980&t=7)** Remember, we have just dipped our toes into the vast ocean of data.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/next-steps?u=76281980&t=13)** This is definitely not where your learning should stop.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/next-steps?u=76281980&t=18)** I urge you to keep pushing, keep learning.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/next-steps?u=76281980&t=22)** And why not jump into my next live course which is "Mission 100 Azure Data Engineer."
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/next-steps?u=76281980&t=29)** You will find all the details about this on my LinkedIn page.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/next-steps?u=76281980&t=34)** Once again, I'm Deepak Goyal, and teaching you SQL for data engineering has been a real privilege and joy for me.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced/next-steps?u=76281980&t=43)** A big thank you for tuning in, investing in your growth, and letting me a part of your learning adventure.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Deepak Goyal]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/complete-guide-to-sql-for-data-engineering-from-beginner-to-advanced-3338018/codespaces)

## Skills Covered

- Data Engineering
- SQL

## Path Context

### In [[Master Data Engineering]]
← [[Advanced Snowflake- Deep Dive Cloud Data Warehousing and Analytics]] | **8 of 8**

### In [[Data Engineering Hands-On Practice]]
← [[ETL in Python and SQL]] | **6 of 7** | [[End-to-End Data Engineering Project]] →

## Appears In

- [[Master Data Engineering]]
- [[Data Engineering Hands-On Practice]]

## Related Courses

_Courses sharing skills:_

- [[Data Engineering- dbt for SQL]] — SQL, Data Engineering
- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL

---

[↑ Back to top](#)