---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: sql-practice-intermediate-queries
url: "https://www.linkedin.com/learning/sql-practice-intermediate-queries"
duration_minutes: 11
duration: 11m
level: Intermediate
updated: 9/13/2023
learners: 16529
skills:
  - Database Queries
  - SQL
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHwJxEZODK75Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692902130493?e=2147483647&amp;v=beta&amp;t=ywuBJw3sYDK7dQ7jicKvYjhFu5JlKqstCma-1MVjiBs"
linkedin_topic: Data Science
learning_paths:
  - '[[SQL Hands-On Practice]]'
prev_courses:
  - '[[SQL Practice- Basic Queries]]'
next_courses:
  - '[[SQL Practice- Window Functions]]'
path_nav: '[{"path":"SQL Hands-On Practice","position":3,"total":9,"prev":"SQL Practice- Basic Queries","next":"SQL Practice- Window Functions"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/database-queries
  - skill/sql
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/SQL%20Practice-%20Intermediate%20Queries.md)

![SQL Practice: Intermediate Queries](https://media.licdn.com/dms/image/v2/D560DAQHwJxEZODK75Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692902130493?e=2147483647&amp;v=beta&amp;t=ywuBJw3sYDK7dQ7jicKvYjhFu5JlKqstCma-1MVjiBs)

# SQL Practice: Intermediate Queries

> Looking to boost your skills writing queries in SQL? This course was made for you. Join senior LinkedIn Learning staff instructor Scott Simpson in this hands-on, interactive, skills-first coding course designed uniquely for intermediate SQL developers. Explore techniques for writing queries in SQL to boost your technical know-how or prepare for an interview to land a new role. This course includes

> [LinkedIn Learning](https://www.linkedin.com/learning/sql-practice-intermediate-queries) | 11m | Intermediate | 17K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Try your SQL programming skills](#try-your-sql-programming-skills)
  - [What you should know](#what-you-should-know)
  - [Exploring the lab environment](#exploring-the-lab-environment)
- [**1. Code Challenges**](#1-code-challenges) (5 videos)
  - [Solution: Who are your top customers?](#solution-who-are-your-top-customers)
  - [Solution: List items in each order](#solution-list-items-in-each-order)
  - [Solution: Which days did people order pizza?](#solution-which-days-did-people-order-pizza)
  - [Solution: Seasonal sale](#solution-seasonal-sale)
  - [Solution: Vendor integration](#solution-vendor-integration)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Try your SQL programming skills](https://www.linkedin.com/learning/sql-practice-intermediate-queries/try-your-sql-programming-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-intermediate-queries/try-your-sql-programming-skills?u=76281980&t=0)** - [Scott] Data drives our world, and [[SQL]] is the language we often use to work with that data.
>
> **[0:04](https://www.linkedin.com/learning/sql-practice-intermediate-queries/try-your-sql-programming-skills?u=76281980&t=4)** Querying [[Databases]] with SQL gives us the ability to explore, analyze, and most importantly, use all kinds of data.
>
> **[0:10](https://www.linkedin.com/learning/sql-practice-intermediate-queries/try-your-sql-programming-skills?u=76281980&t=10)** In this code challenge course, you can test your knowledge of intermediate-level queries in SQL to build your confidence working with the various data analysis and reporting tools that many SQL-compatible relational [[Database Management]] systems provide.
>
> **[0:21](https://www.linkedin.com/learning/sql-practice-intermediate-queries/try-your-sql-programming-skills?u=76281980&t=21)** I'm Scott Simpson, Senior Staff Instructor at [[LinkedIn]] Learning, and I've put together five code challenges that cover a variety of intermediate level SQL concepts that allow us to use and transform data.
>
> **[0:31](https://www.linkedin.com/learning/sql-practice-intermediate-queries/try-your-sql-programming-skills?u=76281980&t=31)** Build and test your solutions to these challenges in the built-in interactive coding environment.
>
> **[0:36](https://www.linkedin.com/learning/sql-practice-intermediate-queries/try-your-sql-programming-skills?u=76281980&t=36)** No special software required.
>
> **[0:38](https://www.linkedin.com/learning/sql-practice-intermediate-queries/try-your-sql-programming-skills?u=76281980&t=38)** And when you finish your solution to each challenge, take a look at my solution videos to see how I solve them.
>
> **[0:42](https://www.linkedin.com/learning/sql-practice-intermediate-queries/try-your-sql-programming-skills?u=76281980&t=42)** If you're ready to try out your SQL query skills, let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Databases]] (1), [[Database Management]] (1), [[LinkedIn]] (1)
> **Env Vars:** sql (6)
> **Speakers:** - [scott] (1)

#### [What you should know](https://www.linkedin.com/learning/sql-practice-intermediate-queries/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-intermediate-queries/what-you-should-know?u=76281980&t=0)** - [Tutor] In this Code Challenge Course, I expect you to be familiar with writing queries in [[SQL]].
>
> **[0:04](https://www.linkedin.com/learning/sql-practice-intermediate-queries/what-you-should-know?u=76281980&t=4)** We'll spend time grouping and filtering data, joining tables, and transforming values.
>
> **[0:09](https://www.linkedin.com/learning/sql-practice-intermediate-queries/what-you-should-know?u=76281980&t=9)** These challenges each combine a couple of intermediate difficulty concepts, that are often used in [[Data Reporting]] and [[Data Preparation]].
>
> **[0:16](https://www.linkedin.com/learning/sql-practice-intermediate-queries/what-you-should-know?u=76281980&t=16)** If you need to refresh your SQL knowledge, take a look at these courses in the [[LinkedIn]] Learning Library.
>
> **[0:22](https://www.linkedin.com/learning/sql-practice-intermediate-queries/what-you-should-know?u=76281980&t=22)** In the challenges, we provide a database that describes a small neighborhood restaurant.
>
> **[0:26](https://www.linkedin.com/learning/sql-practice-intermediate-queries/what-you-should-know?u=76281980&t=26)** We'll see tables like employees, reservations, orders, dishes, and so on.
>
> **[0:31](https://www.linkedin.com/learning/sql-practice-intermediate-queries/what-you-should-know?u=76281980&t=31)** Each challenge will give you an entity relationship diagram to describe the table or tables being used.
>
> **[0:35](https://www.linkedin.com/learning/sql-practice-intermediate-queries/what-you-should-know?u=76281980&t=35)** And feel free to SELECT * on the tables to look at the actual data.
>
> **[0:39](https://www.linkedin.com/learning/sql-practice-intermediate-queries/what-you-should-know?u=76281980&t=39)** If you do, the interface will show that output is a wrong answer.
>
> **[0:42](https://www.linkedin.com/learning/sql-practice-intermediate-queries/what-you-should-know?u=76281980&t=42)** But don't worry, there's no points or time, or anything like that, that you'll lose or risk having taken away.
>
> **[0:48](https://www.linkedin.com/learning/sql-practice-intermediate-queries/what-you-should-know?u=76281980&t=48)** To work on these challenges, you don't need to install any separate software.
>
> **[0:51](https://www.linkedin.com/learning/sql-practice-intermediate-queries/what-you-should-know?u=76281980&t=51)** The Coding Challenge environment is part of the LinkedIn Learning COurse Page.
>
> **[0:55](https://www.linkedin.com/learning/sql-practice-intermediate-queries/what-you-should-know?u=76281980&t=55)** We'll explore how that works in the next video!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[LinkedIn]] (2), [[Data Reporting]] (1), [[Data Preparation]] (1)
> **Env Vars:** sql (2), select (1)
> **SQL:** select (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [tutor] (1)

#### [Exploring the lab environment](https://www.linkedin.com/learning/sql-practice-intermediate-queries/exploring-the-lab-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-intermediate-queries/exploring-the-lab-environment?u=76281980&t=0)** - [Instructor] This course consists of automated code challenges that appear when you click on the challenge links in the course's table of contents.
>
> **[0:06](https://www.linkedin.com/learning/sql-practice-intermediate-queries/exploring-the-lab-environment?u=76281980&t=6)** Each challenge includes instructions and a code editor you can use to create and test your own solution to the challenge.
>
> **[0:12](https://www.linkedin.com/learning/sql-practice-intermediate-queries/exploring-the-lab-environment?u=76281980&t=12)** These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the course's videos.
>
> **[0:18](https://www.linkedin.com/learning/sql-practice-intermediate-queries/exploring-the-lab-environment?u=76281980&t=18)** We recommend using a desktop browser for the best experience with code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer.
>
> **[0:24](https://www.linkedin.com/learning/sql-practice-intermediate-queries/exploring-the-lab-environment?u=76281980&t=24)** The code challenge has three areas, instructions in the top left, a console for output in the bottom left and a code editor for your answer on the right.
>
> **[0:33](https://www.linkedin.com/learning/sql-practice-intermediate-queries/exploring-the-lab-environment?u=76281980&t=33)** You can use these drag handles to allocate space as you like.
>
> **[0:37](https://www.linkedin.com/learning/sql-practice-intermediate-queries/exploring-the-lab-environment?u=76281980&t=37)** To get even more horizontal space for the code editor, you can collapse the course's table of contents on the left.
>
> **[0:43](https://www.linkedin.com/learning/sql-practice-intermediate-queries/exploring-the-lab-environment?u=76281980&t=43)** Each challenge has instructions that include a description of the challenge and the challenge's desired result.
>
> **[0:48](https://www.linkedin.com/learning/sql-practice-intermediate-queries/exploring-the-lab-environment?u=76281980&t=48)** Create your answer in the code editor.
>
> **[0:52](https://www.linkedin.com/learning/sql-practice-intermediate-queries/exploring-the-lab-environment?u=76281980&t=52)** (keyboard clicks) When you click Test my code, you'll see a message indicating whether your code returned a correct result and a text-based version of the returned data.
>
> **[1:08](https://www.linkedin.com/learning/sql-practice-intermediate-queries/exploring-the-lab-environment?u=76281980&t=68)** If your answer doesn't create a correct result, you'll see a message telling you the code is incorrect and showing the data that was returned.
>
> **[1:15](https://www.linkedin.com/learning/sql-practice-intermediate-queries/exploring-the-lab-environment?u=76281980&t=75)** If any of the messages are too long to fit in the console, you can scroll sideways to see all of the text.
>
> **[1:20](https://www.linkedin.com/learning/sql-practice-intermediate-queries/exploring-the-lab-environment?u=76281980&t=80)** When you've finished each code challenge, return to the course's table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 1. Code Challenges

[↑ Back to Table of Contents](#table-of-contents)

#### [Solution: Who are your top customers?](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=0)** - [Instructor] Here is how I solved this challenge.
>
> **[0:03](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=3)** I start out returning the customer ID, their first and last name, and the sum of the dishes that the customer has ordered.
>
> **[0:09](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=9)** That's made possible by joining the orders table, which I'm calling O in the CTE notation, with orders dishes, which I'm naming OD.
>
> **[0:17](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=17)** And I'm matching up the order ID on each table.
>
> **[0:19](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=19)** This lets me get each item that was part of each order.
>
> **[0:22](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=22)** The orders dishes table stores dish IDs, and to get a dishes price, we need to join the dishes table, which I'm calling D.
>
> **[0:28](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=28)** Based on matching the dish ID on orders dishes and dishes, that completes the set of things we need to get prices of dishes and orders.
>
> **[0:36](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=36)** We also need to join the customer's table because we want to know the names of the customers.
>
> **[0:40](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=40)** The orders table contains a customer ID, and so does the customer's table, so we match those up to give us access to the customer's name fields.
>
> **[0:47](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=47)** We group these results by customer ID since we're adding up the total price of items spent by each customer.
>
> **[0:52](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=52)** So we need to have just one row per customer.
>
> **[0:55](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=55)** Without a condition, this would represent all our customers, but the challenge asked for only those customers who spent more than $450.
>
> **[1:02](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=62)** So we need to evaluate each customer's total spend.
>
> **[1:05](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=65)** Total spend is an aggregate value based on more than one row's values, not a single row value.
>
> **[1:10](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=70)** So we need to use HAVING to check its value instead of where.
>
> **[1:14](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=74)** We could still have a where clause in here to check some other individual row value, like the customer's home state or something like that, but we don't need a where for this particular solution.
>
> **[1:23](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=83)** Finally, I order the table by total spend descending to put our top spender at the top of the list.
>
> **[1:28](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=88)** I'll run this and see if it works. It does.
>
> **[1:33](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-1-who-are-your-top-customers?u=76281980&t=93)** Here's a list of our top spenders of all time.

> [!info]- Semantic Content
>
> **Env Vars:** cte (1), having (1)
> **SQL:** having (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: List items in each order](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-2-list-items-in-each-order?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-2-list-items-in-each-order?u=76281980&t=0)** - [Instructor] To solve this challenge, I used GROUP_CONCAT, a function in [[MySQL]] and similar DBMSs that concatenates items based on their grouping.
>
> **[0:08](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-2-list-items-in-each-order?u=76281980&t=8)** [[Microsoft]] [[SQL]] has a similar function called STRING_AGG, short for string aggregation, that works in the same way.
>
> **[0:14](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-2-list-items-in-each-order?u=76281980&t=14)** If you use that, you'll need to have provided a separator, which to make the output match with the challenge request, should be a comma with no space following it.
>
> **[0:22](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-2-list-items-in-each-order?u=76281980&t=22)** This function works together with a grouping term, which in this case is GROUP BY OrderID.
>
> **[0:28](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-2-list-items-in-each-order?u=76281980&t=28)** Here we can see the different versions of MySQL and MS SQL syntax that have the same result that we're looking for.
>
> **[0:33](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-2-list-items-in-each-order?u=76281980&t=33)** The challenge also asked for the list of items to be sorted alphabetically, and here with this MySQL syntax, I'm doing that with the ORDER BY D.Name in the GROUP BY function.
>
> **[0:43](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-2-list-items-in-each-order?u=76281980&t=43)** Ascending is the default order here, so I can leave that off.
>
> **[0:45](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-2-list-items-in-each-order?u=76281980&t=45)** But if I wanted to be explicit, I could add ASC as well.
>
> **[0:48](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-2-list-items-in-each-order?u=76281980&t=48)** With MS SQL, that would be a bit different, including A within GROUP clause where the order by D.Name would be.
>
> **[0:55](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-2-list-items-in-each-order?u=76281980&t=55)** Back here in my solution, we can see that I've joined the three provided tables, Dishes, OrdersDishes, and Orders, so that I can resolve an order ID to the names of the dishes included in it.
>
> **[1:05](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-2-list-items-in-each-order?u=76281980&t=65)** And as the challenge asked for, I'm only interested in the orders from May 1st, 2022, or 2022-05-01 and later.
>
> **[1:14](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-2-list-items-in-each-order?u=76281980&t=74)** Then, when these names are returned, they're listed altogether, in alphabetical order, separated by commas, by each order ID.
>
> **[1:22](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-2-list-items-in-each-order?u=76281980&t=82)** Let's see if my solution works.
>
> **[1:24](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-2-list-items-in-each-order?u=76281980&t=84)** I'll click Test my code, and it looks like my output is correct.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (3), [[SQL]] (3), [[Microsoft]] (1)
> **Env Vars:** sql (3), group (3), group_concat (1), string_agg (1), order (1)
> **CLI Commands:** mysql (3), make (1)
> **SQL:** group by (2), order by (1)
> **Definitions:** short for (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Which days did people order pizza?](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-3-which-days-did-people-order-pizza?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-3-which-days-did-people-order-pizza?u=76281980&t=0)** - [Instructor] To solve this challenge, I'm using the Orders, OrdersDishes, and Dishes tables to find all the orders that include the dish called "Handcrafted Pizza."
>
> **[0:08](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-3-which-days-did-people-order-pizza?u=76281980&t=8)** The challenge asked for the quantity of pizzas sold and the date, let's start out with the date.
>
> **[0:13](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-3-which-days-did-people-order-pizza?u=76281980&t=13)** Each order in our database has a Datetime value associated with it, but we only want the date portion of that, the year, month, and day.
>
> **[0:19](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-3-which-days-did-people-order-pizza?u=76281980&t=19)** Having this date value will allow us to group the count of our pizza orders by day, but right now those values still have a time value attached.
>
> **[0:27](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-3-which-days-did-people-order-pizza?u=76281980&t=27)** So if we tried to group by the current value, we'd only really ever have one pizza ordered at a specific time on a specific day.
>
> **[0:35](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-3-which-days-did-people-order-pizza?u=76281980&t=35)** So, we'll use the CAST keyword and tell the database to reinterpret the OrderDate value as a date type that gets us only the date portion without the time portion, and we'll call that Day.
>
> **[0:45](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-3-which-days-did-people-order-pizza?u=76281980&t=45)** We'll group our results by Day and order them by Day as well.
>
> **[0:49](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-3-which-days-did-people-order-pizza?u=76281980&t=49)** And we'll use the COUNT aggregate function to tell us how many pizzas were sold by day, and we'll call that NumSold.
>
> **[0:56](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-3-which-days-did-people-order-pizza?u=76281980&t=56)** I'll run this to see if it works.
>
> **[0:58](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-3-which-days-did-people-order-pizza?u=76281980&t=58)** And there we go, for each day there was one or more pizza ordered, we have that date and the count of pizzas just like the challenge asked.

> [!info]- Semantic Content
>
> **Env Vars:** cast (1), count (1)
> **CLI Commands:** find (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Seasonal sale](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=0)** - To solve this challenge, we need to use some logic that handles different situations, or cases.
>
> **[0:05](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=5)** We'll start out with some pretty straightforward things, like the name of the dish as dish name, and the price as original price.
>
> **[0:12](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=12)** These fields come from dishes and we'll order our results by dish name.
>
> **[0:16](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=16)** What the challenge asks for though is two more columns; the discount percent and the discounted price.
>
> **[0:22](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=22)** To get the discount percent, which has three conditions to match, I use a case statement and provide those three conditions.
>
> **[0:28](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=28)** When the price of a dish is less than seven the statement returns the text string 5%.
>
> **[0:34](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=34)** When the price is between seven and 10 the statement returns the string 10%.
>
> **[0:38](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=38)** And in any other case, which for us here means any price larger than exactly 10, the statement returns the string 15%.
>
> **[0:46](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=46)** That gets us our discount percent values.
>
> **[0:48](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=48)** So next we need to actually calculate the prices for our items with those discount amounts applied.
>
> **[0:54](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=54)** Here I'll use another case statement with the same conditions, but this time I'll return numbers instead of strings.
>
> **[1:00](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=60)** 0.05, 0.1, and 0.15, to represent 5%, 10%, and 15%.
>
> **[1:07](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=67)** That number will be subtracted from one, giving us the portion of the remaining price to charge.
>
> **[1:13](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=73)** So that would be 0.95% or 95%, 0.9 or 90%, and 0.85 or 85%.
>
> **[1:21](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=81)** Then we multiply that value by the price of an item and round it so we don't get long decimal values that we won't be able to make change for.
>
> **[1:28](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=88)** We're rounding this value to two decimal places as the challenge requested, and we'll call this value discounted price.
>
> **[1:35](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=95)** Let's run this and see how it goes.
>
> **[1:37](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=97)** Great, it works.
>
> **[1:38](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-4-seasonal-sale?u=76281980&t=98)** Now we're ready to print out our seasonal sale menu.

> [!info]- Semantic Content
>
> **Versions:** 0.05 (1), 0.1 (1), 0.15 (1), 0.95 (1), 0.9 (1)
> **CLI Commands:** make (1)
> **Speakers:** - to (1)

#### [Solution: Vendor integration](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=0)** - [Instructor] To solve this challenge, we'll focus on string manipulation.
>
> **[0:03](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=3)** My solution returns some values from the employee's table, ordered by name.
>
> **[0:07](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=7)** Without a where condition we'll get all the records and that's what we want.
>
> **[0:11](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=11)** The first item in the challenge asked for a strictly five digit employee ID, with leading zeros to fill empty spaces at the beginning of the string.
>
> **[0:19](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=19)** To create this, I used the LPAD or left pad function, which takes three arguments, the field to include, the number of digits to pad to, and the digit or character to use for that padding.
>
> **[0:30](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=30)** I'll call this ID.
>
> **[0:32](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=32)** The next item in the challenge is to provide the employee names in the format last comma first with a space in the middle.
>
> **[0:39](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=39)** So I use the concat or concatenation function to return one string made out of the last name value, a string value comma space, and the first name value, and I'll call this name.
>
> **[0:49](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=49)** Third, I need to generate usernames that are no longer than eight characters, and which include the employee's first initial and whatever part of their last name fits in the remaining seven characters.
>
> **[0:59](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=59)** That all needs to be lowercase.
>
> **[1:01](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=61)** So I start out using substring to slice a specific piece of the string's first name and last name.
>
> **[1:06](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=66)** For first name, I start at character one and return one character.
>
> **[1:10](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=70)** That's the first character in the string.
>
> **[1:11](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=71)** For last name, I start at character one again and I return seven characters from that point.
>
> **[1:16](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=76)** If a string is longer than seven characters, I just get the first seven characters.
>
> **[1:19](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=79)** And if it's shorter than seven characters, I'll get the full string.
>
> **[1:22](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=82)** Then I use the concat function to stick these two strings together with the first initial first.
>
> **[1:28](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=88)** And then I use the lower function to convert that all to lowercase, and we'll call that value login.
>
> **[1:34](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=94)** And finally, we'll generate email addresses at which our employees can be reached.
>
> **[1:38](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=98)** Our employees have a username in our system, but unfortunately that's different than the logins that we needed to generate for them on this other system.
>
> **[1:45](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=105)** For example, our founder and head chef have their first name as a username in our system, instead of a regular username like the other employees.
>
> **[1:52](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=112)** So we'll use concat again to stick each user's real username to this string here that represents our email domain, and we'll call that value email.
>
> **[2:00](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=120)** I'll run this and let's see what we get.
>
> **[2:04](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=124)** Great, this passes the challenge.
>
> **[2:05](https://www.linkedin.com/learning/sql-practice-intermediate-queries/solution-5-vendor-integration?u=76281980&t=125)** We'll often need to transform data from our [[Databases]] in some way instead of just returning it verbatim.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1)
> **Env Vars:** lpad (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/sql-practice-intermediate-queries/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-intermediate-queries/next-steps?u=76281980&t=0)** - [Scott] If you we're able to solve these challenges, congratulations, and if not, take some time to refresh your knowledge of intermediate level [[SQL]] queries and come back and try again.
>
> **[0:09](https://www.linkedin.com/learning/sql-practice-intermediate-queries/next-steps?u=76281980&t=9)** If you're ready to move on and solve more challenges, take a look at our other interactive SQL code challenge courses here on [[LinkedIn]] Learning.
>
> **[0:16](https://www.linkedin.com/learning/sql-practice-intermediate-queries/next-steps?u=76281980&t=16)** See you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[LinkedIn]] (1)
> **Env Vars:** sql (2)
> **Speakers:** - [scott] (1)


## Instructor

- [[Scott Simpson]]

## Skills Covered

- Database Queries
- SQL

## Path Context

### In [[SQL Hands-On Practice]]
← [[SQL Practice- Basic Queries]] | **3 of 9** | [[SQL Practice- Window Functions]] →

## Appears In

- [[SQL Hands-On Practice]]

## Related Courses

_Courses sharing skills:_

- [[Level Up- Advanced SQL]] — SQL, Database Queries
- [[Advanced SQL- Logical Query Processing, Part 1]] — SQL, Database Queries
- [[SQL Queries Made Easy]] — SQL, Database Queries
- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL

---

[↑ Back to top](#)