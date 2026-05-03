---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: level-up-advanced-sql
url: "https://www.linkedin.com/learning/level-up-advanced-sql"
duration_minutes: 37
duration: 37m
level: Advanced
updated: 12/4/2024
learners: 34543
skills:
  - Database Queries
  - SQL
exercise_files: true
github: "https://github.com/LinkedInLearning/level-up-advanced-sql-4311094/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHtM4L47HiTTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1678834688263?e=2147483647&amp;v=beta&amp;t=7CBLHsw2w23u97x8-tYOP5jk2qRXptwQ3xTm2n8Y7xU"
linkedin_topic: Data Science
learning_paths:
  - '[[Master SQL Development]]'
  - '[[SQL Hands-On Practice]]'
prev_courses:
  - '[[Advanced SQL for Data Scientists]]'
  - '[[SQL Hands-On Practice- Solve Business Problems]]'
path_nav: '[{"path":"Master SQL Development","position":8,"total":8,"prev":"Advanced SQL for Data Scientists","next":null},{"path":"SQL Hands-On Practice","position":9,"total":9,"prev":"SQL Hands-On Practice- Solve Business Problems","next":null}]'
path_count: 2
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

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Level%20Up-%20Advanced%20SQL.md)

![Level Up: Advanced SQL](https://media.licdn.com/dms/image/v2/C4E0DAQHtM4L47HiTTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1678834688263?e=2147483647&amp;v=beta&amp;t=7CBLHsw2w23u97x8-tYOP5jk2qRXptwQ3xTm2n8Y7xU)

# Level Up: Advanced SQL

> Want to test out your advanced SQL skills? This course was designed for you. These concise challenges let you stretch your brain and push your talents to the next level. Join Microsoft MVP and SQL expert Jess Pomfret to find out more about what it takes to become a master SQL user. Learn how to execute some of the more sophisticated SQLite queries, including complex join types, grouping, advanced 

> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-advanced-sql) | 37m | Advanced | 35K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Advanced SQL code challenges](#advanced-sql-code-challenges)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
  - [How to execute SQLite queries](#how-to-execute-sqlite-queries)
- [**1. Joins**](#1-joins) (3 videos)
  - [Create a list of employees and their immediate managers](#create-a-list-of-employees-and-their-immediate-managers)
  - [Find salespeople who have zero sales](#find-salespeople-who-have-zero-sales)
  - [List all customers and their sales, even if some data is gone](#list-all-customers-and-their-sales-even-if-some-data-is-gone)
- [**2. Grouping**](#2-grouping) (3 videos)
  - [How many cars have been sold per employee?](#how-many-cars-have-been-sold-per-employee)
  - [Find the least and most expensive car sold by each employee](#find-the-least-and-most-expensive-car-sold-by-each-employee)
  - [Display a report for employees who have sold more than five cars](#display-a-report-for-employees-who-have-sold-more-than-five-cars)
- [**3. Advanced Select Options**](#3-advanced-select-options) (3 videos)
  - [Summarize sales per year by using a CTE](#summarize-sales-per-year-by-using-a-cte)
  - [Display the number of sales for each employee by month for 2021](#display-the-number-of-sales-for-each-employee-by-month-for-2021)
  - [Find the sales of cars that are electric by using a subquery](#find-the-sales-of-cars-that-are-electric-by-using-a-subquery)
- [**4. Windowing Functions**](#4-windowing-functions) (3 videos)
  - [For each salesperson, rank the car models they've sold the most](#for-each-salesperson-rank-the-car-models-theyve-sold-the-most)
  - [Create a report showing sales per month and an annual total](#create-a-report-showing-sales-per-month-and-an-annual-total)
  - [Display the number of cars sold this month and last month](#display-the-number-of-cars-sold-this-month-and-last-month)
- [**Conclusion**](#conclusion) (1 videos)
  - [Keep learning](#keep-learning)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Advanced SQL code challenges](https://www.linkedin.com/learning/level-up-advanced-sql/advanced-sql-code-challenges-25062252?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-advanced-sql/advanced-sql-code-challenges-25062252?u=76281980&t=0)** - We all know that data makes the world go round, so it's definitely worth leveling up your [[SQL]] skills. In this advanced SQL Challenges course, we'll team up with Cars for All, a fictional dealership that has been selling high-quality used cars for over a hundred years. Gabriela will assign code challenges for us to solve with SQL to find the information we need to run the business. As we work through this course, we'll explore employee, customer, and sales data, and we'll cover some more advanced SQL techniques that we can use to answer questions. I'm Jess Pomfret, my pronouns are she and her, and I've worked with [[Microsoft SQL Server|SQL Server]] [[Databases]] for over 10 years. I'm a [[Microsoft]] MVP, and I also love [[Powershell]] and automation. We'll use [[GitHub]] code spaces for this course, so open up the repo and follow along. If you aren't familiar with code spaces, the next movie will get you up to speed. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Microsoft SQL Server|Sql server]] (1), [[Databases]] (1), [[Microsoft]] (1), [[Powershell]] (1)
> **Env Vars:** sql (5), mvp (1)
> **Tools:** powershell (1), github (1)
> **CLI Commands:** find (1)
> **Speakers:** - we (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/level-up-advanced-sql/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-advanced-sql/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Ray] This is Ray Villalobos, senior staff instructor at [[LinkedIn]] Learning, and I'm going to show you how to work with LinkedIn Learning courses using [[GitHub]] [[Codespaces]]. Codespaces is a code editor in the cloud with the full power of Visual Studio Code. It allows for real world hands-on practice that mirrors [[Software Development]] in the workplace. This course was created using GitHub Codespaces. Using Codespaces, you have everything you need to get going without needing complex installations or build tools. One click and you're ready to g. To practice along with the course, you can create a Codespace directly from the course overview page First, click Open next to GitHub Codespaces. If you're already logged in, you'll be directed to a Getting Started with GitHub Codespaces page. If you're not logged in, you'll be prompted to log in or create a free GitHub account first. From this page, click on Create codespace on main. The first time you open up a Codespace it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code this is a special version of that editor running on GitHub's servers. Your course can have one or more extensions pre-installed based on the course you're taking. Those can be found in the extensions panel. Because this is a browser, it's easy to inadvertently close the browser window and lose the editor. If you do that, don't panic.
>
> **[1:33](https://www.linkedin.com/learning/level-up-advanced-sql/using-github-codespaces-with-this-course?u=76281980&t=93)** Codespaces saves everything you're doing on a virtual machine. You can always get the Codespace back for this repo right here. Notice that it even remembered that I had opened the extensions panel. An alternate way to create a Codespace is directly from one of our courses GitHub repositories. From here, click Code and then Create codespace on main. You can also restart a previous Codespace from this location. GitHub Codespaces is compatible on devices with smaller screen sizes, like mobile phones or tablets, but it is optimized for larger screens so we recommend that you practice along with this course on a laptop or desktop computer. The sample course I'm looking at is what is known as a flat branch repository. You can tell because there's a single branch when you click on the branch icon on the status bar. You can also tell because there are different folders for each of the videos in the course. This is a sample of what a multi-branch repository looks like, which is more common when you're working with web frameworks. If you go to the branch icon on the status bar you can see that there's more than one branch. You can switch to the different branches using this menu. The branches are named with the chapter and the video number you're watching. If you see a B at the end of the branch, that's how the code looked at the beginning. If you see an E, that's how the code looked at the end. Let's switch to how the code looked
>
> **[3:07](https://www.linkedin.com/learning/level-up-advanced-sql/using-github-codespaces-with-this-course?u=76281980&t=187)** on chapter two and the third video. I'll choose the beginning branch. As you work through a course you might make some changes on a branch. I'm going to make a minor edit on the index.[[HTML]] file right here. I'm going to go ahead and save that and you can see that I've modified this file because there's an M right here and the branch name now has an asterisk on it. If I try to switch to another branch that causes major changes, like, say, 07_03e, I may see a dialog box like this. If you don't care about saving your changes, you can simply hit the Force Checkout button. It will let you switch to that branch. You can then choose to discard the changes on this file. Your instructor will let you know what the folder structure is for your course. Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made even if you've deleted the codespace. TO create your own fork, you can click on the fork button on the repository. I'm going to hit Create fork. I don't have my own copy of this repository, and if I want to, I can start a new codespace on that fork.
>
> **[4:39](https://www.linkedin.com/learning/level-up-advanced-sql/using-github-codespaces-with-this-course?u=76281980&t=279)** This forked version is almost exactly like the original repository but it will let you push your own changes. Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/level-up-advanced-sql/using-github-codespaces-with-this-course?u=76281980&t=300)** I'm going to save it. You'll note that there is an M right here as well as an asterisk on this branch. In the source control panel, you can also see a 1 for the change that we just made. Let's go ahead and try to commit this change. I'm going to hit the Commit button and I'll ask it to go ahead and stage the changes, and then I'm going to hit this button here. I'll hit okay. You can also let it go ahead and run getFetch. That way it'll automatically sync with your forked repo. Now that change will be stored in your own version of this repository. Don't worry if you forget to fork a repo and then try to push changes. Codespaces will also ask you if you want to create a fork automatically. Look for additional core specific tips from the instructor. Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (9), [[GitHub]] (8), [[LinkedIn]] (2), [[Software Development]] (1), [[HTML]] (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (4), click on (1), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3)
> **File Paths:** index.html (1)
> **Code Identifiers:** getfetch (1)
> **Env Vars:** url (1)

#### [How to execute SQLite queries](https://www.linkedin.com/learning/level-up-advanced-sql/how-to-execute-sqlite-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-advanced-sql/how-to-execute-sqlite-queries?u=76281980&t=0)** - [Instructor] All right. Now we know all about [[Codespaces]] and how to get our environment set up, there is one final piece to the puzzle. We need a database to execute our queries against. With the magic of Codespaces, we can actually embed a SQLite database inside the repo. So once you have connected to your Codespace, you'll have everything you need to craft your queries and solve the challenges that Gabriela will set throughout this course. Inside the repo, there is a folder of scripts. These contain my answers for the challenges. Don't peek ahead of time, instead have a go yourself at solving the challenge and then you can review my answers as we go through them in the course videos. The easiest way to start crafting your queries is to create a new [[SQL]] file. You can do this by navigating to the top left hand corner, choosing File, and then New File. You can provide the file name, query.sql for example, and then press Enter. Finally, confirm where that file should be placed. Within the Scripts folder is fine, so press Okay.
>
> **[1:02](https://www.linkedin.com/learning/level-up-advanced-sql/how-to-execute-sqlite-queries?u=76281980&t=62)** You can also use the command palette, a really neat Visual Studio Code and therefore Codespaces feature. Pressing Ctrl + Shift + P or F1 on [[Windows]] will bring up the command palette. Then you can search for Create New file, and again enter the name and confirm the location.
>
> **[1:30](https://www.linkedin.com/learning/level-up-advanced-sql/how-to-execute-sqlite-queries?u=76281980&t=90)** Now we have a file, let's write a simple query. We'll do a quick select for our employee table and limit the results to five rows. Once we have the query written, we can execute it by right clicking on the file and choosing Run Query. Since this is the first query we're executing, you'll get a prompt asking which database to use. Select the CarsForAll.db from the dropdown. In the bottom of our window, you'll see the query results returned. We can continue adding queries to this file. This time, we'll select the first five rows from the model table. I could, again, right click to run the query. Or instead, I could use the command palette by pressing Control + Shift + P and then searching for SQLite Run Query.
>
> **[2:27](https://www.linkedin.com/learning/level-up-advanced-sql/how-to-execute-sqlite-queries?u=76281980&t=147)** You'll notice that both our queries in the file will execute. If we're working on building queries, we might just want to run part of the code in our file. For that, we can select the query we want to run. Right click or use the command palette, but this time choose Run Selected Query. Now you can see the results for just the query you ran against the model table. One final thing before you're ready to get started and tackle your first challenge, let's take a look at the structure for the cars for all database. You can see there are five tables within our database and some relationships between those tables. This image is available within the repo. So if you need to refer back as you're figuring out your solutions, it is available. You could also review the schema for the tables within the database by running a query against the SQLite schema table. Here I'm getting the schema for the employee table, so I can see the data types and primary key details. With that information, you're ready to start the challenges. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (3), [[SQL]] (2), [[Windows]] (1)
> **UI Navigation:** select the (3), dropdown (1)
> **File Paths:** query.sql (1)
> **Env Vars:** sql (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)


### 1. Joins

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a list of employees and their immediate managers](https://www.linkedin.com/learning/level-up-advanced-sql/create-a-list-of-employees-and-their-immediate-managers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-advanced-sql/create-a-list-of-employees-and-their-immediate-managers?u=76281980&t=0)** (bouncy playful music)
>
> **[0:09](https://www.linkedin.com/learning/level-up-advanced-sql/create-a-list-of-employees-and-their-immediate-managers?u=76281980&t=9)** - For this first challenge, Gabriela needs to gather some employee information. She wants us to retrieve a list of employees, including their first and last names, and the first and last names of their immediate managers. All the information needed for this challenge is included within the employee table. So think about solving this with a join type that will allow you to join back to the same table more than once within your query. Pause the video at this point and craft your query against the CarsForAll database. (bouncy playful music) I used the self-join technique to solve this challenge. Let's first look at our join. Our from clause is targeting the employee table, and we've aliased that as EMP to represent employees. We then have an inner join to the same employee table. Alias this time is MNG to represent managers. The joint criteria is connecting the manager ID for the employer record with the employee ID for the second instance of the employee table. This will give us the information for the manager record. Finally, if we review the column list that we're selecting, we can choose the first name and last name columns from the EMP table, which is our employee information, and then the first name and last name columns from the MNG table, which is our manager information. I've used AS to rename the column's display name for the information we've retrieved from the manager's table, to make it more clear. Once we run this query against the CarsForAll database, you can see that we've got a list of employees and their managers returned.

> [!info]- Semantic Content
>
> **Env Vars:** emp (2), mng (2)
> **Non-Speech:** (bouncy playful music) (2)
> **CLI Commands:** make (1)
> **Speakers:** - for (1)

#### [Find salespeople who have zero sales](https://www.linkedin.com/learning/level-up-advanced-sql/find-salespeople-who-have-zero-sales?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-advanced-sql/find-salespeople-who-have-zero-sales?u=76281980&t=0)** (digital music)
>
> **[0:09](https://www.linkedin.com/learning/level-up-advanced-sql/find-salespeople-who-have-zero-sales?u=76281980&t=9)** - [Instructor] For our next [[SQL]] challenge, Gabriela has tasked us with getting a list of salespeople with zero sales. These folks are going to need some extra training, so we can boost sales across the entire Cars For All enterprise. Sometimes, we need to join on data that isn't there. The solution for this video will include a left join, which helps us to find where rows in one table don't have matches in another table. Pause the video here and craft your query against the Cars For All database. (digital music) The most important part of this query is the left join. We're targeting the employee table in the from clause to get the employee information, and then using that left join to bring in data from the sales table. The left join will include all the rows from the employee table whether they have any matching sales data or not. For this challenge, we're looking for employees with no sales data. So with that left join, we also need to add a clause for where salesId is null. This brings back just the rows where we have an employee record that hasn't matched with any sales data. Finally, we'll add another where clause to filter just the sales people so employee title should equal 'Sales Person'. In this challenge, we haven't specified which fields to return. However, it's best practice to not use Select star. So choose some appropriate fields from the employee table. Once we run this query against the database, you can see we've got two employees returned and we can target them with some extra training in the new year.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Non-Speech:** (digital music) (2)
> **CLI Commands:** find (1)
> **Code Identifiers:** salesid (1)
> **Env Vars:** sql (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [List all customers and their sales, even if some data is gone](https://www.linkedin.com/learning/level-up-advanced-sql/list-all-customers-and-their-sales-even-if-some-data-is-gone?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-advanced-sql/list-all-customers-and-their-sales-even-if-some-data-is-gone?u=76281980&t=0)** (bright upbeat music)
>
> **[0:10](https://www.linkedin.com/learning/level-up-advanced-sql/list-all-customers-and-their-sales-even-if-some-data-is-gone?u=76281980&t=10)** - [Instructor] All right, great work so far, but Gabriela now wants to analyze all our sales and the customer data relating to those sales. Due to database cleanup, we don't keep data indefinitely. Based on local regulations, we have cleanup jobs that remove both sales and customer data based on the relevant retention periods. Because of this, there may be customers without sales data or sales data without the respective customer data. Gabriela wants to see a list of all sales and all customers even if some of that data has been removed. Pause the video here and craft your query against the cars for all database. (bright upbeat music) For this query, we're looking to join the customer and sales tables together, but when we use an inner join there has to be a match for the rows to shop in the results set. With the database cleanup we mentioned earlier, this inner join would filter out some of the data we're interested in seeing. In some flavors of [[SQL]], for example, T-SQL and [[Microsoft SQL Server|SQL Server]] there is a full outer join. This type of join allows you to bring in all the rows that match but also all rows from either table that don't have a matching row in the other tables. Unfortunately, in SQL Lite, the database system we are using full outer joins are not supported. However, there is often more than one way to solve a problem and in this case, we can instead use a union. The union keyword allows us to combine multiple queries results into one result set. So now we can break this down into three separate queries. For the first part, we'll use an inner join to join the customer and sales tables. We're specifying the join criteria as where the customer ID
>
> **[1:43](https://www.linkedin.com/learning/level-up-advanced-sql/list-all-customers-and-their-sales-even-if-some-data-is-gone?u=76281980&t=103)** in the customer table matches the customer ID in the sales table. This will bring back all the rows where there is both customer data and sales data. We can run just this query to test it. For the second part of the query, we will again join the customer and sales tables together. This time with a left join. We've also specified where the sales ID is now. This will return all the rows from the customer data where there is no sales data. Finally, we need any rows where there is sales data but we no longer have the customer data. For this final section of the query, we'll start with the sales table and then do a left join to the customer table, and we'll also specify where the customer ID is null. As you can see we have one row returned that has sales data but no customer data relating to it. All three of these queries can be executed separately, but if we add union between them, we'll end up with one results then. There is also the union all operator that could be used. This, however, does not remove duplicate rows, so in our case, union is preferred. However, if you know the data set and there can't be duplicates, union all will give you better performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** sql (4)
> **Non-Speech:** (bright upbeat music) (2)
> **Cross-References:** we mentioned (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Grouping

[↑ Back to Table of Contents](#table-of-contents)

#### [How many cars have been sold per employee?](https://www.linkedin.com/learning/level-up-advanced-sql/how-many-cars-have-been-sold-per-employee?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-advanced-sql/how-many-cars-have-been-sold-per-employee?u=76281980&t=0)** (upbeat chiptune music)
>
> **[0:10](https://www.linkedin.com/learning/level-up-advanced-sql/how-many-cars-have-been-sold-per-employee?u=76281980&t=10)** - [Instructor] Often, requests for data require it to be summarized in order for information and patterns to be extracted more easily from it. So far, we've been pulling raw data from across our database, using different kinds of joins to pull that data together. In our next challenge, Gabriela is asking if we can pull together a report that totals the number of cars sold by each employee. As we've already discussed, best practice suggests we avoid using SELECT star, so specify the employee ID, first and last names, and the sum of cars they've sold. Pause the video here and craft your query against the cars for all database. (upbeat chiptune music) Welcome back! This is a reasonably simple example to demonstrate the use of the GROUP BY clause. Let's first focus on the join, though. We need data from both the employee and sales tables. We'll use an inner join and specify the join criteria as the employee ID from each table. Once we have the join, we can slot in the columns we need. We know we need employee ID, first name, and last name from the employee table. Running this query, we can see that information is returned, but we haven't aggregated anything at this point. In order to summarize the data by employee, we can take those three columns from the select and add them to the GROUP BY clause. Now we're able to aggregate data per employee. We can easily count the rows per group with COUNT star. This will equate to the sales per customer, and we'll add as number of cars sold to give the column a name. Finally, we can add an ORDER BY clause to display the data in the order of employees who have sold the most cars.
>
> **[1:46](https://www.linkedin.com/learning/level-up-advanced-sql/how-many-cars-have-been-sold-per-employee?u=76281980&t=106)** Once we run the query, you can see who our top employees are by total cars sold. There are many options for working with aggregate data, once you apply the GROUP BY clause to define how the data should be grouped. We'll look at a couple of other options in the next challenge.

> [!info]- Semantic Content
>
> **Env Vars:** group (3), select (1), count (1), order (1)
> **SQL:** group by (3), select (1), order by (1)
> **Non-Speech:** (upbeat chiptune music) (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Find the least and most expensive car sold by each employee](https://www.linkedin.com/learning/level-up-advanced-sql/find-the-least-and-most-expensive-car-sold-by-each-employee?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-advanced-sql/find-the-least-and-most-expensive-car-sold-by-each-employee?u=76281980&t=0)** (upbeat videogame music) (videogame chiming) (upbeat videogame music) (videogame whirling) (videogame chiming) (videogame whirling)
>
> **[0:09](https://www.linkedin.com/learning/level-up-advanced-sql/find-the-least-and-most-expensive-car-sold-by-each-employee?u=76281980&t=9)** - [Narrator] Following along nicely from the previous challenge where we aggregated data and counted the rows returned, there are also other aggregate calculations we can make use of. We'll need those for Gabriela's Next challenge. She would again like us to produce a report, but that this time lists the least and most expensive cars sold by each employee this year. Pause the video here and craft your query against the CarsForAll database. (videogame whirling) (videogame music) (videogame cheerful music) (videogame whirling) Welcome back. To solve this challenge, we first need to join together our sales and employee tables. Here we are using an inner join, and the joint criteria is where the employee ID from the tables matches. One of the requirements for this report was that it only contained results for this year. So we'll need to add a WHERE clause that includes only rows where the sold date is greater than or equal to the 1st of January of this year. We can avoid hard-coding the date into this query by using a date function. The first parameter is the time value of now, and then the second parameter modifies the date to the start of the year. This means that if we're in 2023, this query will only show sales for 2023, and once we get to 2024, the query will then return rose for 2024 sales. The SQLite documentation has other great examples on how to use the date and time functions in your queries. Now that we've filtered our data to get all the roads we need, we can now apply the aggregation with our GROUP BY clause. We can select the same columns as in the previous challenge. So those will be the columns we add to the GROUP BY. Here we have employeeId, firstName and lastName. To get the least and most expensive car sold
>
> **[1:43](https://www.linkedin.com/learning/level-up-advanced-sql/find-the-least-and-most-expensive-car-sold-by-each-employee?u=76281980&t=103)** for each employee, we can use two built-in functions, MIN and MAX. If we apply those to the salesAmount column, then we'll be able to get the required data for Gabriela's report. Finally, you'll notice I've added aliases to the column names so that MIN, salesAmount will show us MinSalesAmount and MAX, salesAmount will return as MaxSalesAmount in the results. Running that query, and we can see the data is returned, and we can see the least and most expensive car each employee has sold this year.

> [!info]- Semantic Content
>
> **Env Vars:** group (2), min (2), max (2), where (1)
> **Code Identifiers:** salesamount (3), employeeid (1), firstname (1), lastname (1)
> **Non-Speech:** (upbeat videogame music) (2), (videogame music) (1), (videogame cheerful music) (1)
> **SQL:** group by (2), where (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Definitions:** means that (1)
> **Speakers:** - [narrator] (1)

#### [Display a report for employees who have sold more than five cars](https://www.linkedin.com/learning/level-up-advanced-sql/display-a-report-for-employees-who-have-sold-at-least-five-cars?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-advanced-sql/display-a-report-for-employees-who-have-sold-at-least-five-cars?u=76281980&t=0)** (digital music)
>
> **[0:09](https://www.linkedin.com/learning/level-up-advanced-sql/display-a-report-for-employees-who-have-sold-at-least-five-cars?u=76281980&t=9)** - [Instructor] At Cars For All, we pride ourselves on providing excellent customer service and having the best salespeople around. Every year, we offer our top salespeople some extra incentives. This year, we're looking to highlight our salespeople who have sold more than five cars this year. Gabriela is going to again, help us with this project, and she's requested similar data to the last video. But only for the employees who have made more than five sales. In previous challenges, we filtered the data before we've aggregated it. However, in this challenge, you'll need to think about filtering based on that aggregated data. Pause the video here and craft your query against the Cars For All database. (digital music) This query is going to build on the one you wrote for the previous video. Firstly, we need to filter the data again so we get just the results for this year. We'll use the date function again to specify where the sold date is greater than or equal to the start of this year. We'll also add our group by clause for the same columns that we have in our select. Here, it's employeeId, first name and last name. This time though, we need to also filter results based on the aggregated data. When we use the where clause, we filter the data before it's aggregated, so those rows aren't included in any calculations. But to filter after the aggregation, we'll need to use a having clause. Here, you can see we specify where the count is greater than five, meaning, that more than five cars were sold. This having clause can't reference the alias we've given to the column in the select because although we've written the select line first, the engine will actually process it after the having. Running this query, and you can see
>
> **[1:44](https://www.linkedin.com/learning/level-up-advanced-sql/display-a-report-for-employees-who-have-sold-at-least-five-cars?u=76281980&t=104)** our top salespeople and their stats.

> [!info]- Semantic Content
>
> **Non-Speech:** (digital music) (2)
> **Code Identifiers:** employeeid (1)
> **Cross-References:** previous video (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 3. Advanced Select Options

[↑ Back to Table of Contents](#table-of-contents)

#### [Summarize sales per year by using a CTE](https://www.linkedin.com/learning/level-up-advanced-sql/summarize-sales-per-year-by-using-a-cte?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-advanced-sql/summarize-sales-per-year-by-using-a-cte?u=76281980&t=0)** (computerized music)
>
> **[0:09](https://www.linkedin.com/learning/level-up-advanced-sql/summarize-sales-per-year-by-using-a-cte?u=76281980&t=9)** - [Instructor] Now that you've mastered joins and grouping, it's time to get more advanced. As we're writing more complicated queries against our data, it makes sense for us to break it down into more manageable chunks. As with a lot of these challenges, there are multiple ways to solve the problem. However, for this challenge, we're going to try and think about using a [[CTE|common table expression]], or [[CTE]]. A common request for businesses is to look at sales data across the year to ensure things are trending in the right direction. It's no different at Cars For All. For today's challenge, Gabriela would like us to create a report showing our total sales per year. Pause the video here, and craft your query against the Cars For All database. (computerized music) As we mentioned in the introduction to this challenge, we're going to look to use a common table expression, or CTE, to solve this puzzle. This technique allows us to break the queries we need to write down into sections. If we look at the first part of this query, we're pulling all the required data from the sales table. We're using a function to format the sold date into just showing the year, and we're also pulling back the sales amount. We'll need this in our final calculations. In the second part of the query, instead of selecting from the sales table, we'll instead reference the CTE. In this case, I've named it CTE. We can now aggregate this data by sold year and sum the sales amount. By using the CTE, we don't have to handle both the manipulation of sold date to sold year and the aggregation in one step. In this case, the query within the CTE is reasonably simple. But as things get more complex, using a CTE can make troubleshooting
>
> **[1:43](https://www.linkedin.com/learning/level-up-advanced-sql/summarize-sales-per-year-by-using-a-cte?u=76281980&t=103)** and ensuring accuracy much easier. Running the query, you can see the results displayed showing our sales total per year. It's worth noting that different [[SQL]] flavors allow different options for formatting. With SQLite, we can use this format pattern to add dollar signs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE]] (7), [[CTE|Common table expression]] (2), [[SQL]] (1)
> **Env Vars:** cte (7), sql (1)
> **Non-Speech:** (computerized music) (2)
> **CLI Commands:** make (1)
> **Cross-References:** we mentioned (1)
> **Speakers:** - [instructor] (1)

#### [Display the number of sales for each employee by month for 2021](https://www.linkedin.com/learning/level-up-advanced-sql/display-the-number-of-sales-for-each-employee-by-month-for-2021?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-advanced-sql/display-the-number-of-sales-for-each-employee-by-month-for-2021?u=76281980&t=0)** (techno sounds)
>
> **[0:09](https://www.linkedin.com/learning/level-up-advanced-sql/display-the-number-of-sales-for-each-employee-by-month-for-2021?u=76281980&t=9)** - [Instructor] Excellent stuff so far. Gabriela has been very thankful for the data we've extracted from the cars for all database for her. She now has another challenge for us, though. It's been requested that we create a report that shows the amount of sales per employee for each month across 2021. The goal is for the output to be organized in rows per employee showing their first name and last name. Then each column along the top will represent a month. The values in the grid will show the total sales for that employee in that month. For this challenge, I'd recommend thinking about using case statements to meet the objective. Pause the video here and craft your query against the cars for all database. (techno sounds) This is quite a complicated query to write so we'll start off by looking at the data we'll need to retrieve. To get the employee and sales data for the report we'll need to join these two tables together. We'll use an inner join and the join criteria is where employee ID matches in each table. We'll choose the first name and last name columns from the employee table and the sold date and sales amount from the sales table. Also, since this is a report for 2021 data we'll want to include an appropriate where clause. Here I'm saying whether sold date is greater than or equal to January 1st, 2021, and also less than but not including January 1st, 2022. This is all the data that we need to create the report. Let's run that query and have a look. Running this query, you can see that although we have all the data returned it's not showing total sales
>
> **[1:42](https://www.linkedin.com/learning/level-up-advanced-sql/display-the-number-of-sales-for-each-employee-by-month-for-2021?u=76281980&t=102)** per month per employee just yet. What we need to do is pivot the data so we have each month represented as an individual column and then we'll group by the employee first name and last name to roll that data up. To complete this in SQLite we'll use a case statement to select just that month's data for each column. For each month, we'll specify the needed case statement. Looking at the Jan Sales month column we're saying that when the month of sold date is zero one then return the sales amount. For any rows that don't meet that requirement, we won't count the sales amount in this column as that sale didn't happen in January. Once you've populated all 12 case statements run the query again and see how the data is looking.
>
> **[2:30](https://www.linkedin.com/learning/level-up-advanced-sql/display-the-number-of-sales-for-each-employee-by-month-for-2021?u=76281980&t=150)** We now have our employee names followed by 12 monthly sales columns. It's looking good, but if we order by employee first name and last name, you'll notice that we have multiple rows returned per employee. The final piece of this puzzle is to group the data by employee name. We'll add the group by clause and wrap each column's case statement with a sum so that all sales amounts for the month are totaled up in our aggregated results. Running the final query, you can clearly see how much each employee has sold per month in the 2021 year.

> [!info]- Semantic Content
>
> **Non-Speech:** (techno sounds) (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Find the sales of cars that are electric by using a subquery](https://www.linkedin.com/learning/level-up-advanced-sql/find-the-sales-of-cars-that-are-electric-by-using-a-subquery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-advanced-sql/find-the-sales-of-cars-that-are-electric-by-using-a-subquery?u=76281980&t=0)** (bright music) (video game beeping)
>
> **[0:09](https://www.linkedin.com/learning/level-up-advanced-sql/find-the-sales-of-cars-that-are-electric-by-using-a-subquery?u=76281980&t=9)** - [Instructor] Another useful technique we can use as things get more complicated are subqueries. As it sounds by the name, these subqueries can be used to split our complicated sequel into smaller chunks. We'll look at using subqueries to solve Gabriela's latest challenge for us. We've noticed at Cars For All that more and more people are buying electric cars. We want to look into this data and analyze the trends. So we'll need to find all sales where the car purchased was electric. Now, as always, there are many solutions, but try to solve this one by using a subquery. Pause the video here and craft your query against the Cars For All database. (bright music) Here, we're going to need data from three different tables. Firstly, let's perform an inner join between sales and inventory so we can get the details on the cars we've sold. Here, the join criteria for these two tables is where the inventory ID matches. This gives us part of the story. We now have the year and color of the car for each sale. But the engine type is stored within the model table. We could add an additional join to that table, but let's test it out instead using a subquery. The model table contains the model ID, the model name, and the engine type. So we can effectively perform a lookup of the model ID within this table to see whether the engine type is electric. This query will make up our subquery. It returns any model ID where the engine type is electric. We can add that onto our first query into the WHERE clause. So rows will be filtered where the model ID from inventory is in the model IDs
>
> **[1:43](https://www.linkedin.com/learning/level-up-advanced-sql/find-the-sales-of-cars-that-are-electric-by-using-a-subquery?u=76281980&t=103)** returned from our subquery against model. Running that query, we are presented with all the sales for electric cars.

> [!info]- Semantic Content
>
> **Non-Speech:** (bright music) (2), (video game beeping) (1)
> **CLI Commands:** find (1), make (1)
> **SQL:** where (1)
> **Env Vars:** where (1)
> **Speakers:** - [instructor] (1)


### 4. Windowing Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [For each salesperson, rank the car models they've sold the most](https://www.linkedin.com/learning/level-up-advanced-sql/for-each-salesperson-rank-the-car-models-they-ve-sold-the-most?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-advanced-sql/for-each-salesperson-rank-the-car-models-they-ve-sold-the-most?u=76281980&t=0)** (upbeat 8-bit music) (screen drones) (stars dinging) (screen drones)
>
> **[0:09](https://www.linkedin.com/learning/level-up-advanced-sql/for-each-salesperson-rank-the-car-models-they-ve-sold-the-most?u=76281980&t=9)** - [Instructor] Great work so far, folks. Now it's time for the final chapter of Code Challenges. We're going to focus on using window functions. Gabriela has set us a complicated problem in this challenge. She would like a list of salespeople and for us to rank the cars they've sold the most of. A window function allows us to partition the results of a query and then apply analysis that just considers the rows within that window or partition. Pause the video here and craft your query against the cars for all [[Databases]]. (screen drones) (upbeat 8-bit music) (screen drones) All right, let's dig into my solution. First, we need to join quite a lot of tables together to get the necessary data. Here we're joining the employee and inventory tables to sales, matching on their respective IDs. And we're also joining the model table to inventory. Running this query brings us back all the necessary data, so we can move on to the next step in the process, and that's aggregating this data. As we want to display employee first and last names, as well as the model of the cars sold, these columns will go both in our SELECT statement and in the GROUP BY. We are now able to count the number of each model sold by each employee. Running this query, and you can see that aggregated data. Most rows are showing one sale, but we can see some records where an employee has sold multiples of one model. The next step is to sort and rank the sales per employee, and that's where our window function comes in. There are three parts of any window function to consider.
>
> **[1:43](https://www.linkedin.com/learning/level-up-advanced-sql/for-each-salesperson-rank-the-car-models-they-ve-sold-the-most?u=76281980&t=103)** First is the PARTITION BY. This separates the results into partitions. In our example, we want to partition by employee ID. The second part is the ORDER BY. If we're going to rank rows, we need to know which order to arrange them in. Here, in our example, the ORDER BY clause is specifying the count, which is the number sold of the model. The third and final part to implement is the function to apply. In this case, we're using the rank function to apply a rank order to the results within each partition. Running the final query, we can see that our first employee has sold two Bednar cars, so that is rank 1. The [[Representational State Transfer (REST)|rest]] of the models, they've sold only one car, and so those rank as 2. Window functions are complicated but provide a lot of great options when we're reporting on our data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** order (2), select (1), group (1), partition (1)
> **SQL:** order by (2), select (1), group by (1)
> **Non-Speech:** (upbeat 8-bit music) (2)
> **Speakers:** - [instructor] (1)

#### [Create a report showing sales per month and an annual total](https://www.linkedin.com/learning/level-up-advanced-sql/create-a-report-showing-sales-per-month-and-an-annual-total?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-advanced-sql/create-a-report-showing-sales-per-month-and-an-annual-total?u=76281980&t=0)** (bouncy playful music) (stars clinking)
>
> **[0:09](https://www.linkedin.com/learning/level-up-advanced-sql/create-a-report-showing-sales-per-month-and-an-annual-total?u=76281980&t=9)** - Alright, that last one was a tough one. But we'll use those same patterns again to answer a similar query to refine our skills. For this challenge, Gabriela would like a sales report showing total sales per month, and an annual running total. Again, think about how window functions can help to partition this data to answer the question at hand. Pause the video here and craft your query against the CarsForAll database. (bouncy playful music) This time, we only need data from the sales table, which means our initial query starts off simple. We do, however, need to use a built-in function to format the sold date to get sold year and sold month. These two formatted columns plus the sales amount will form the basis of our report. The next step is to apply the grouping so that we aggregate this data by month. As [[SQL]] processes the select statement before the group by statement, we can refer to the alias column names of sold year and sold month. We'll then apply the sum function to the sales amount column. And if we run this query we can see that we've got total sales per month displayed. We're also going to utilize a [[CTE|common table expression]], or [[CTE]] here to simplify our final query. The CTE is going to contain the query we crafted in the last step. Then finally, we'll add the window function to create the running total column for annual sales. The function will again be sum, as we're looking for total sales for the year so far. We'll partition over the sold year, as we want our running total to be per year.
>
> **[1:44](https://www.linkedin.com/learning/level-up-advanced-sql/create-a-report-showing-sales-per-month-and-an-annual-total?u=76281980&t=104)** And finally, we'll order by sold year and sold month to finish off our window function. Let's execute that query against our database, and we can see that the sales amount column shows the total sales for that particular month, and the annual sales running total column shows the total so far for that year. Window functions can definitely take a second to get your head around. But once you do, they can open up a lot of opportunities for executing complicated queries against your data set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE]] (2), [[SQL]] (1), [[CTE|Common table expression]] (1)
> **Env Vars:** cte (2), sql (1)
> **Non-Speech:** (bouncy playful music) (2)
> **Cross-References:** in the last (1)
> **Speakers:** - alright (1)

#### [Display the number of cars sold this month and last month](https://www.linkedin.com/learning/level-up-advanced-sql/display-the-number-of-cars-sold-this-month-and-last-month?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-advanced-sql/display-the-number-of-cars-sold-this-month-and-last-month?u=76281980&t=0)** (upbeat electronic music) (graphics whooshing) (graphics blipping) (graphics chiming) (graphics blipping) (graphics chiming) (graphics blipping)
>
> **[0:09](https://www.linkedin.com/learning/level-up-advanced-sql/display-the-number-of-cars-sold-this-month-and-last-month?u=76281980&t=9)** - [Instructor] All right, folks, we've made it to the final code challenge of this course, and Gabriela has one final request for us. She would like to create a report that shows the number of cars sold this month and last month. This will help us to track whether we're increasing our sales each month. Once again, a window function will be your friend here. Pause the video, and craft your query against the cars for all database. (graphics blipping) (upbeat electronic music) (graphics blipping) Welcome back! Let's take a look at how I solved this problem. As we've already mentioned in this course, there are often many ways of solving a problem. I'm going to use a slightly different way of writing the window function in this example, as it could be useful to you to know in the future. But first step, let's get the data we need from the sales table. We can again use a built-in function to format the date as year dash month, and then account function to get the number of cars sold. We'll group that by the same formatted date column to get the sum of cars sold per year dash month. This time, to add in the window function, I've opted to define it separately. You can see I've specified the window clause. Named it calMonth, and specified that the data will be ordered by that same formatted date dash month column. Then, in the select statement, I will refer back to that calMonth window for my window function. There are a couple of benefits of defining the window separately. Firstly, you can refer to that window multiple times in your query. You can also get more complicated and implement window chaining, where you build another window on top of the first
>
> **[1:42](https://www.linkedin.com/learning/level-up-advanced-sql/display-the-number-of-cars-sold-this-month-and-last-month?u=76281980&t=102)** window that you've defined. For our report, we need to get the previous month's data, so we can use the lag function, which will return a calculation from the values in the previous window. There are three parameters for the lag function, the first being the calculation. So, in this case, I want to count the rows in the previous window. The second parameter is how many [[Windows]] back. So, in this example, I want just the proceeding window, so I entered one. Finally, we can specify the default value if no will be returned. So here, I've chosen zero. Running this query, we can see that we get a list of months, number of cars sold that month, and then the number of cars sold last month. You'll notice for the first row, we've returned our default value of zero, since there were no previous windows to evaluate. Excellent work, folks, that was a challengin' one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2)
> **Code Identifiers:** calmonth (2)
> **Non-Speech:** (upbeat electronic music) (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Keep learning](https://www.linkedin.com/learning/level-up-advanced-sql/keep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-advanced-sql/keep-learning?u=76281980&t=0)** - [Jess] Well, folks, that brings us to the end of this advanced [[SQL]] Level-Up course. I hope the challenges presented have made you think, demonstrated some new techniques, and helped to improve your SQL skills. It doesn't have to end here though. There's a Q&A section under these videos. If you have any questions, feel free to post them there, and also you're welcome to help other learners with their questions while you're there. Our hope is that this course will spark some discussions on the best way to accomplish certain tasks with SQL. So let us know what you think below. Also, as you complete the course make sure you share the certificate, and add the Level-Up SQL hashtag so we can keep in touch. Finally, head over to the [[LinkedIn]] learning catalog, and look for your next adventure. Thanks so much for watching. Again, my name is Jess Pomfret, and I hope you've enjoyed this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[LinkedIn]] (1)
> **Env Vars:** sql (4)
> **CLI Commands:** make (1)
> **Speakers:** - [jess] (1)


## Instructor

- [[Jess Pomfret]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/level-up-advanced-sql-4311094/codespaces)

## Skills Covered

- Database Queries
- SQL

## Path Context

### In [[Master SQL Development]]
← [[Advanced SQL for Data Scientists]] | **8 of 8**

### In [[SQL Hands-On Practice]]
← [[SQL Hands-On Practice- Solve Business Problems]] | **9 of 9**

## Appears In

- [[Master SQL Development]]
- [[SQL Hands-On Practice]]

## Related Courses

_Courses sharing skills:_

- [[SQL Practice- Intermediate Queries]] — SQL, Database Queries
- [[Advanced SQL- Logical Query Processing, Part 1]] — SQL, Database Queries
- [[SQL Queries Made Easy]] — SQL, Database Queries
- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL

---

[↑ Back to top](#)