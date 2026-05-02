---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: sql-practice-window-functions
url: "https://www.linkedin.com/learning/sql-practice-window-functions"
duration_minutes: 12
duration: 12m
level: Advanced
updated: 9/13/2023
learners: 69594
skills:
  - SQL
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHD2DqQXzb5HQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692901619138?e=2147483647&amp;v=beta&amp;t=V3kzKoN0L9o8eXAtpwF8Kc24vu36UdIu3pU9IdExX9A"
linkedin_topic: Data Science
learning_paths:
  - '[[SQL Hands-On Practice]]'
prev_courses:
  - '[[SQL Practice- Intermediate Queries]]'
next_courses:
  - '[[Practice It- SQL Joins]]'
path_nav: '[{"path":"SQL Hands-On Practice","position":4,"total":9,"prev":"SQL Practice- Intermediate Queries","next":"Practice It- SQL Joins"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/sql
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/SQL%20Practice-%20Window%20Functions.md)

![SQL Practice: Window Functions](https://media.licdn.com/dms/image/v2/D560DAQHD2DqQXzb5HQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692901619138?e=2147483647&amp;v=beta&amp;t=V3kzKoN0L9o8eXAtpwF8Kc24vu36UdIu3pU9IdExX9A)

# SQL Practice: Window Functions

> Test your knowledge of Window Functions in SQL in this edition of Code Challenges. Instructor Scott Simpson provides five challenges—and his solutions—that reflect real-world data analysis use cases, including calculating a running total, ranking employees of a company by pay, and comparing order totals over time. It’s a data-driven world, and SQL is the language often used to work with that data.

> [LinkedIn Learning](https://www.linkedin.com/learning/sql-practice-window-functions) | 12m | Advanced | 70K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Try your SQL programming skills](#try-your-sql-programming-skills)
  - [What you should know](#what-you-should-know)
  - [Explore the lab environment](#explore-the-lab-environment)
- [**1. Code Challenges**](#1-code-challenges) (5 videos)
  - [Solution: Calculate a running total](#solution-calculate-a-running-total)
  - [Solution: Summarize weekly pay by department](#solution-summarize-weekly-pay-by-department)
  - [Solution: Rank department employees by pay](#solution-rank-department-employees-by-pay)
  - [Solution: Compare order totals over time](#solution-compare-order-totals-over-time)
  - [Solution: Moving average](#solution-moving-average)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Try your SQL programming skills](https://www.linkedin.com/learning/sql-practice-window-functions/try-your-sql-programming-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-window-functions/try-your-sql-programming-skills?u=76281980&t=0)** - [Scott] Data drives our world and [[SQL]] is the language we often use to work with that data.
>
> **[0:05](https://www.linkedin.com/learning/sql-practice-window-functions/try-your-sql-programming-skills?u=76281980&t=5)** Querying [[Databases]] with SQL gives us the ability to explore, analyze, and most importantly, use all kinds of data.
>
> **[0:12](https://www.linkedin.com/learning/sql-practice-window-functions/try-your-sql-programming-skills?u=76281980&t=12)** In this code challenge course, you can test your knowledge of window functions in SQL to build your confidence working with the various data analysis and reporting tools that many SQL-compatible relational [[Database Management]] systems provide.
>
> **[0:24](https://www.linkedin.com/learning/sql-practice-window-functions/try-your-sql-programming-skills?u=76281980&t=24)** I've put together five code challenges that cover commonly used SQL window functions which help form the foundation of [[Data Reporting]] and other data-driven tasks.
>
> **[0:33](https://www.linkedin.com/learning/sql-practice-window-functions/try-your-sql-programming-skills?u=76281980&t=33)** Build and test your solutions to these challenges in the built-in interactive coding environment.
>
> **[0:37](https://www.linkedin.com/learning/sql-practice-window-functions/try-your-sql-programming-skills?u=76281980&t=37)** No special software required.
>
> **[0:39](https://www.linkedin.com/learning/sql-practice-window-functions/try-your-sql-programming-skills?u=76281980&t=39)** And when you finish your solution to each challenge, take a look at my solution videos to see how I solve them.
>
> **[0:45](https://www.linkedin.com/learning/sql-practice-window-functions/try-your-sql-programming-skills?u=76281980&t=45)** I'm Scott Simpson, senior staff instructor at [[LinkedIn]] Learning.
>
> **[0:48](https://www.linkedin.com/learning/sql-practice-window-functions/try-your-sql-programming-skills?u=76281980&t=48)** If you're ready to try out your SQL window function skills, let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Databases]] (1), [[Database Management]] (1), [[Data Reporting]] (1), [[LinkedIn]] (1)
> **Env Vars:** sql (6)
> **Speakers:** - [scott] (1)

#### [What you should know](https://www.linkedin.com/learning/sql-practice-window-functions/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-window-functions/what-you-should-know?u=76281980&t=0)** - [Narrator] In this Code Challenge course, I expect you to be familiar with using window functions in [[SQL]].
>
> **[0:05](https://www.linkedin.com/learning/sql-practice-window-functions/what-you-should-know?u=76281980&t=5)** We'll explore a couple of common window functions that are widely used in data analysis and reporting.
>
> **[0:10](https://www.linkedin.com/learning/sql-practice-window-functions/what-you-should-know?u=76281980&t=10)** The challenges start out with some fundamentals, and become more involved as the course moves on.
>
> **[0:15](https://www.linkedin.com/learning/sql-practice-window-functions/what-you-should-know?u=76281980&t=15)** If you need to refresh your SQL knowledge, take a look at these courses in the [[LinkedIn]] Learning Library.
>
> **[0:21](https://www.linkedin.com/learning/sql-practice-window-functions/what-you-should-know?u=76281980&t=21)** In the challenges, we provide a database that describes a small neighborhood restaurant.
>
> **[0:25](https://www.linkedin.com/learning/sql-practice-window-functions/what-you-should-know?u=76281980&t=25)** We'll see tables like employees, reservations, orders, dishes, and so on.
>
> **[0:30](https://www.linkedin.com/learning/sql-practice-window-functions/what-you-should-know?u=76281980&t=30)** Each challenge will give you an Entity Relationship Diagram to describe the table or tables being used.
>
> **[0:36](https://www.linkedin.com/learning/sql-practice-window-functions/what-you-should-know?u=76281980&t=36)** And feel free to select star on the tables to look at the actual data.
>
> **[0:40](https://www.linkedin.com/learning/sql-practice-window-functions/what-you-should-know?u=76281980&t=40)** If you do, the interface will show that the output is a wrong answer, but don't worry there's no points or time or anything like that that you'll lose, or risk having taken away.
>
> **[0:49](https://www.linkedin.com/learning/sql-practice-window-functions/what-you-should-know?u=76281980&t=49)** To work on these challenges you don't need to install any separate software.
>
> **[0:53](https://www.linkedin.com/learning/sql-practice-window-functions/what-you-should-know?u=76281980&t=53)** The Coding Challenge environment is part of the LinkedIn learning course page.
>
> **[0:57](https://www.linkedin.com/learning/sql-practice-window-functions/what-you-should-know?u=76281980&t=57)** We'll explore how that works in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[LinkedIn]] (2)
> **Env Vars:** sql (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### [Explore the lab environment](https://www.linkedin.com/learning/sql-practice-window-functions/explore-the-lab-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-window-functions/explore-the-lab-environment?u=76281980&t=0)** - [Instructor] This course consists of automated code challenges that appear when you click on the challenge links in the course's table of contents.
>
> **[0:06](https://www.linkedin.com/learning/sql-practice-window-functions/explore-the-lab-environment?u=76281980&t=6)** Each challenge includes instructions and a code editor you can use to create and test your own solution to the challenge.
>
> **[0:12](https://www.linkedin.com/learning/sql-practice-window-functions/explore-the-lab-environment?u=76281980&t=12)** These challenges are hosted by CoderPad and they appear in the same area of the course page where you watch the course's videos.
>
> **[0:19](https://www.linkedin.com/learning/sql-practice-window-functions/explore-the-lab-environment?u=76281980&t=19)** We recommend using a desktop browser for the best experience with code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer.
>
> **[0:26](https://www.linkedin.com/learning/sql-practice-window-functions/explore-the-lab-environment?u=76281980&t=26)** The code challenge has three areas; instructions in the top left, a console for output in the bottom left, and a code editor for your answer on the right.
>
> **[0:35](https://www.linkedin.com/learning/sql-practice-window-functions/explore-the-lab-environment?u=76281980&t=35)** You can use these drag handles to allocate space as you like.
>
> **[0:39](https://www.linkedin.com/learning/sql-practice-window-functions/explore-the-lab-environment?u=76281980&t=39)** To get even more horizontal space for the code editor, you can collapse the course's table of contents on the left.
>
> **[0:45](https://www.linkedin.com/learning/sql-practice-window-functions/explore-the-lab-environment?u=76281980&t=45)** Each challenge has instructions that include a description of the challenge and the challenge's desired result.
>
> **[0:52](https://www.linkedin.com/learning/sql-practice-window-functions/explore-the-lab-environment?u=76281980&t=52)** Create your answer in the code editor.
>
> **[0:55](https://www.linkedin.com/learning/sql-practice-window-functions/explore-the-lab-environment?u=76281980&t=55)** When you click test my code, you'll see a message indicating whether your code returned a correct result and a text-based version of the return data.
>
> **[1:03](https://www.linkedin.com/learning/sql-practice-window-functions/explore-the-lab-environment?u=76281980&t=63)** If your answer doesn't create a correct result, you'll see a message telling you the code is incorrect and showing the data that was returned.
>
> **[1:12](https://www.linkedin.com/learning/sql-practice-window-functions/explore-the-lab-environment?u=76281980&t=72)** If any of the messages are too long to fit in the console, you can scroll sideways to see all of the text.
>
> **[1:17](https://www.linkedin.com/learning/sql-practice-window-functions/explore-the-lab-environment?u=76281980&t=77)** When you finish each code challenge, return to the course's table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 1. Code Challenges

[↑ Back to Table of Contents](#table-of-contents)

#### [Solution: Calculate a running total](https://www.linkedin.com/learning/sql-practice-window-functions/solution-1-calculate-a-running-total?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-window-functions/solution-1-calculate-a-running-total?u=76281980&t=0)** - [Instructor] To calculate a running sum, I added SUM PartySize OVER ORDER BY Date as Total.
>
> **[0:05](https://www.linkedin.com/learning/sql-practice-window-functions/solution-1-calculate-a-running-total?u=76281980&t=5)** The sum of PartySize will count up how many people were in each reservation party as rows are returned from the database.
>
> **[0:12](https://www.linkedin.com/learning/sql-practice-window-functions/solution-1-calculate-a-running-total?u=76281980&t=12)** Using OVER, we set the window that we want the aggregate function to work on, and we'll ensure that the items in that window are sorted by date.
>
> **[0:19](https://www.linkedin.com/learning/sql-practice-window-functions/solution-1-calculate-a-running-total?u=76281980&t=19)** Here we would also have the opportunity to tell the database to only calculate the sum over specific groups and other things like that.
>
> **[0:26](https://www.linkedin.com/learning/sql-practice-window-functions/solution-1-calculate-a-running-total?u=76281980&t=26)** But we'll see that later on.
>
> **[0:27](https://www.linkedin.com/learning/sql-practice-window-functions/solution-1-calculate-a-running-total?u=76281980&t=27)** Without specifying a partition or range or anything, we'll just operate on the whole set of data as one unit sorted by date, one row at a time.
>
> **[0:35](https://www.linkedin.com/learning/sql-practice-window-functions/solution-1-calculate-a-running-total?u=76281980&t=35)** So the first row of our result will have the first value for PartySize.
>
> **[0:39](https://www.linkedin.com/learning/sql-practice-window-functions/solution-1-calculate-a-running-total?u=76281980&t=39)** The second row will have its own plus the previous value, and so on, adding up the PartySize field as rows are returned from the database.
>
> **[0:46](https://www.linkedin.com/learning/sql-practice-window-functions/solution-1-calculate-a-running-total?u=76281980&t=46)** And the last row returned will have the grand total.
>
> **[0:50](https://www.linkedin.com/learning/sql-practice-window-functions/solution-1-calculate-a-running-total?u=76281980&t=50)** I'll run this to see if it works.
>
> **[0:53](https://www.linkedin.com/learning/sql-practice-window-functions/solution-1-calculate-a-running-total?u=76281980&t=53)** Looks like it does. Great.
>
> **[0:55](https://www.linkedin.com/learning/sql-practice-window-functions/solution-1-calculate-a-running-total?u=76281980&t=55)** I can see how that aggregate function is operating row by row.
>
> **[0:58](https://www.linkedin.com/learning/sql-practice-window-functions/solution-1-calculate-a-running-total?u=76281980&t=58)** Without using OVER, I'd just get back one row with a total of the PartySize field, and that's not what the challenge asked for.
>
> **[1:05](https://www.linkedin.com/learning/sql-practice-window-functions/solution-1-calculate-a-running-total?u=76281980&t=65)** It asked for the running total, and that's what I have here.

> [!info]- Semantic Content
>
> **Env Vars:** sum (1), order (1)
> **SQL:** order by (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Summarize weekly pay by department](https://www.linkedin.com/learning/sql-practice-window-functions/solution-2-summarize-weekly-pay-by-department?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-window-functions/solution-2-summarize-weekly-pay-by-department?u=76281980&t=0)** - [Instructor] This challenge asked us to return the total of the weekly pay values for each department as we return rows in the table.
>
> **[0:07](https://www.linkedin.com/learning/sql-practice-window-functions/solution-2-summarize-weekly-pay-by-department?u=76281980&t=7)** To solve this, I started out with the fields that the challenge asks for and then I used a sum function for the weekly pay values and set my window to partition by department.
>
> **[0:18](https://www.linkedin.com/learning/sql-practice-window-functions/solution-2-summarize-weekly-pay-by-department?u=76281980&t=18)** So when summing up the weekly pay values, the database keeps that activity constrained to records that have the same department value.
>
> **[0:24](https://www.linkedin.com/learning/sql-practice-window-functions/solution-2-summarize-weekly-pay-by-department?u=76281980&t=24)** Records with different department values are treated separately and have their own sum.
>
> **[0:29](https://www.linkedin.com/learning/sql-practice-window-functions/solution-2-summarize-weekly-pay-by-department?u=76281980&t=29)** So for each record with a department field of hospitality, for example, we get the sum of the weekly pay for all the records in that department in our new field, and records in the marketing department will have a separate total.
>
> **[0:40](https://www.linkedin.com/learning/sql-practice-window-functions/solution-2-summarize-weekly-pay-by-department?u=76281980&t=40)** I named this field DeptTotal as the challenge requests, and I'm sorting the results first by department and then by weekly pay.
>
> **[0:47](https://www.linkedin.com/learning/sql-practice-window-functions/solution-2-summarize-weekly-pay-by-department?u=76281980&t=47)** I'll run this, and let's see if my result matches the expected output.
>
> **[0:52](https://www.linkedin.com/learning/sql-practice-window-functions/solution-2-summarize-weekly-pay-by-department?u=76281980&t=52)** It does.
>
> **[0:53](https://www.linkedin.com/learning/sql-practice-window-functions/solution-2-summarize-weekly-pay-by-department?u=76281980&t=53)** Great.
>
> **[0:53](https://www.linkedin.com/learning/sql-practice-window-functions/solution-2-summarize-weekly-pay-by-department?u=76281980&t=53)** We've solved the challenge.

> [!info]- Semantic Content
>
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Rank department employees by pay](https://www.linkedin.com/learning/sql-practice-window-functions/solution-3-rank-employees-by-pay-in-their-department?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-window-functions/solution-3-rank-employees-by-pay-in-their-department?u=76281980&t=0)** - [Instructor] To solve this challenge, I used dense rank.
>
> **[0:03](https://www.linkedin.com/learning/sql-practice-window-functions/solution-3-rank-employees-by-pay-in-their-department?u=76281980&t=3)** Dense rank ensures that the ranking won't have any skipped values.
>
> **[0:06](https://www.linkedin.com/learning/sql-practice-window-functions/solution-3-rank-employees-by-pay-in-their-department?u=76281980&t=6)** If there's a tie, those values will be assigned the same rank next in the counting order.
>
> **[0:11](https://www.linkedin.com/learning/sql-practice-window-functions/solution-3-rank-employees-by-pay-in-their-department?u=76281980&t=11)** The regular rank function still assigns tied values the same rank though, but it leaves a gap in the counting.
>
> **[0:17](https://www.linkedin.com/learning/sql-practice-window-functions/solution-3-rank-employees-by-pay-in-their-department?u=76281980&t=17)** I'll rank over a partition by department which is ordered by weekly pay.
>
> **[0:21](https://www.linkedin.com/learning/sql-practice-window-functions/solution-3-rank-employees-by-pay-in-their-department?u=76281980&t=21)** That means that within each department, I'll have a separate set of rankings and those rankings will be determined by the field weekly pay in descending order.
>
> **[0:29](https://www.linkedin.com/learning/sql-practice-window-functions/solution-3-rank-employees-by-pay-in-their-department?u=76281980&t=29)** That order is important because that's how we'll get the higher paid people with higher ranks.
>
> **[0:34](https://www.linkedin.com/learning/sql-practice-window-functions/solution-3-rank-employees-by-pay-in-their-department?u=76281980&t=34)** The highest paid position should have rank number one in each department.
>
> **[0:38](https://www.linkedin.com/learning/sql-practice-window-functions/solution-3-rank-employees-by-pay-in-their-department?u=76281980&t=38)** Without specifying descending order, we'll get ascending order and that would not satisfy the requirements of the challenge.
>
> **[0:45](https://www.linkedin.com/learning/sql-practice-window-functions/solution-3-rank-employees-by-pay-in-their-department?u=76281980&t=45)** I named this field "dept rank," and then I sort the output by department and then by dept rank.
>
> **[0:51](https://www.linkedin.com/learning/sql-practice-window-functions/solution-3-rank-employees-by-pay-in-their-department?u=76281980&t=51)** I'll run this and see if I solved the challenge.
>
> **[0:55](https://www.linkedin.com/learning/sql-practice-window-functions/solution-3-rank-employees-by-pay-in-their-department?u=76281980&t=55)** It looks like I did.
>
> **[0:56](https://www.linkedin.com/learning/sql-practice-window-functions/solution-3-rank-employees-by-pay-in-their-department?u=76281980&t=56)** Here, I can see the departments in order, and within each, a ranking with the highest paid person at the top of the ranking.
>
> **[1:03](https://www.linkedin.com/learning/sql-practice-window-functions/solution-3-rank-employees-by-pay-in-their-department?u=76281980&t=63)** And where there's a tie, the records with the same value are assigned the same rank without any gaps in the counting sequence.

> [!info]- Semantic Content
>
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Compare order totals over time](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=0)** - [Instructor] In this solution, I'm using CTE or common table expression notation to save some typing, because this challenge requires joining across three tables.
>
> **[0:08](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=8)** You don't have to, though.
>
> **[0:09](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=9)** I just think it makes things easier to type and to read.
>
> **[0:12](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=12)** Let's start in the middle of the query and work toward the end.
>
> **[0:15](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=15)** I start out here by selecting from the orders table, which I've named O, and then I joined the orders dishes table, which I'm calling OD to it, so that the order ID on the orders table matches up with the order ID on the orders dishes table.
>
> **[0:29](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=29)** That lets us associate the items in an order with the order they belong to.
>
> **[0:33](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=33)** Then I join the dishes table, which I'm calling D, so that the dish ID field on the dishes table matches up with a dish ID field on the orders dishes table.
>
> **[0:41](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=41)** This way, I associate the dishes contained in each order, and most importantly for our challenge, I can get the price of each dish in each order.
>
> **[0:50](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=50)** Up here at the top of the query, I'm returning order ID from the orders table, and at the end, I'm grouping my results by that same value.
>
> **[0:59](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=59)** This allows me to have one row per order, and then I can rely on aggregation functions to operate on each order in turn.
>
> **[1:06](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=66)** The second item I return is the sum of the prices from the dishes table for each order, and I'm calling that this order price, as the challenge required.
>
> **[1:15](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=75)** And the final item that I return is the difference between the price of the current order and the previous one.
>
> **[1:22](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=82)** Sum D price is the same value we return up here, the total of the current order.
>
> **[1:30](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=90)** I subtract from that this value here.
>
> **[1:32](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=92)** This represents a lag of one row within a window ordered by order ID from the orders table.
>
> **[1:38](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=98)** So this sum of prices will be the order total of the row right above whatever the current row is.
>
> **[1:44](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=104)** For the first row, this value will be null, because there isn't a row above the first row.
>
> **[1:49](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=109)** When we get to the second row, our difference becomes more apparent.
>
> **[1:53](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=113)** The difference will be this row's total minus the total from the first row.
>
> **[1:57](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=117)** And for the third row, we'll subtract the total from the second row, and so on.
>
> **[2:00](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=120)** This is how we calculate the difference between two adjacent rows, or in our database here, the difference in total between one order and the next.
>
> **[2:09](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=129)** I've named this value as the challenge requested, and as the challenge requested, we're only looking at orders with dates from the beginning of 2022 and later.
>
> **[2:19](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=139)** All right, there's kind of a lot going on here, so let's run this and see if my solution solves the challenge.
>
> **[2:26](https://www.linkedin.com/learning/sql-practice-window-functions/solution-4-compare-order-totals-over-time?u=76281980&t=146)** It looks like it does, and looking at the results here, I can see this offset of one and the difference between each pair of rows as we go down the table.

> [!info]- Semantic Content
>
> **Env Vars:** cte (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Moving average](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=0)** - [Instructor] Here's how I solve this challenge.
>
> **[0:02](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=2)** As with the previous solution, I'm using CTE notation here to save on typing.
>
> **[0:06](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=6)** And just like in that one, we're using our three tables here to get the values we need for this challenge.
>
> **[0:12](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=12)** We're joining orders with dishes through the orders dishes linking table.
>
> **[0:16](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=16)** That's the same as before.
>
> **[0:17](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=17)** So, I won't spend time here going through all that again.
>
> **[0:20](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=20)** Let's focus on what's different in this challenge.
>
> **[0:23](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=23)** At the beginning, we're returning the customer ID, the order ID, and the order total for each order from the orders table as the challenge requested.
>
> **[0:32](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=32)** And here, we're taking the average of the sum of the prices of the dishes in the window we define down here.
>
> **[0:41](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=41)** That's being rounded to two decimal places which the challenge also asked for and it's called moving average.
>
> **[0:49](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=49)** We're partitioning the table by customer ID so we treat each group of records for the same customer ID together.
>
> **[0:56](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=56)** And within each of those partitions, we're sorting by order ID.
>
> **[0:59](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=59)** We get ascending order as the default, which makes sense if we're basing this on order IDs through time.
>
> **[1:05](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=65)** As we take orders, the order ID increases.
>
> **[1:08](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=68)** So higher order ID numbers are more recent and it will appear lower down in the table than older orders.
>
> **[1:15](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=75)** And we're using the window of rows between 2 preceding and current row.
>
> **[1:20](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=80)** That is we're getting the price value of the current row, the one above it, and the one above that in order ID sequence for each customer ID.
>
> **[1:27](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=87)** Here's what that looks like using a little piece of the table.
>
> **[1:30](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=90)** Partitioning by customer ID puts all the records that have the same customer ID together and then sorting by order ID ascending makes them appear in numeric order per customer.
>
> **[1:41](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=101)** That happens to be in chronological order because of the way our database creates the records for our orders.
>
> **[1:45](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=105)** And our window looks like this.
>
> **[1:48](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=108)** Well, not exactly just yet, but it will.
>
> **[1:51](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=111)** That's the 2 preceding and current row from the query.
>
> **[1:54](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=114)** Let's start with just the first record, though.
>
> **[1:56](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=116)** When we start working with a new customer window whether that's customer ID 1 or customer ID 77, our window starts at the top of each partition.
>
> **[2:04](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=124)** The result here for the first row of each customer will be the first order total divided by one because there's only one row in our window so far and that will return the same price.
>
> **[2:14](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=134)** The second row will be the current row plus the previous row divided by two because now there's two rows in our window.
>
> **[2:20](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=140)** And when we get to the third row, this value will be the price for the current row plus the price for the previous row plus the price for the row above that divided by three.
>
> **[2:28](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=148)** At this point, we have three rows in the window and this pattern will continue with a window of three rows for the [[Representational State Transfer (REST)|rest]] of each customer's orders.
>
> **[2:36](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=156)** When we reach the end of a customer's order records, we move on to the next customer and start the process again.
>
> **[2:42](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=162)** Back here in the query, we finish up by grouping and ordering by the same values in our window to keep the results organized how they should be.
>
> **[2:49](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=169)** Okay, I'll run this and we'll see if it matches the solution.
>
> **[2:53](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=173)** It does.
>
> **[2:54](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=174)** That's good.
>
> **[2:55](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=175)** Window functions are useful in certain scenarios and can be a little bit tricky to think about.
>
> **[2:59](https://www.linkedin.com/learning/sql-practice-window-functions/solution-5-moving-average?u=76281980&t=179)** But with knowledge of window functions, you'll be able to dive into data analysis and other advanced database tasks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** cte (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/sql-practice-window-functions/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-practice-window-functions/next-steps?u=76281980&t=0)** - [Scott] If you are able to solve these challenges, congratulations.
>
> **[0:03](https://www.linkedin.com/learning/sql-practice-window-functions/next-steps?u=76281980&t=3)** And if not, take some time to refresh your knowledge of [[SQL]] Window functions and come back and try again.
>
> **[0:09](https://www.linkedin.com/learning/sql-practice-window-functions/next-steps?u=76281980&t=9)** If you're ready to move on and solve more challenges, take a look at our other interactive SQL Code Challenge courses here on [[LinkedIn]] Learning.
>
> **[0:15](https://www.linkedin.com/learning/sql-practice-window-functions/next-steps?u=76281980&t=15)** See you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[LinkedIn]] (1)
> **Env Vars:** sql (2)
> **Speakers:** - [scott] (1)


## Instructor

- [[Scott Simpson]]

## Skills Covered

- SQL

## Path Context

### In [[SQL Hands-On Practice]]
← [[SQL Practice- Intermediate Queries]] | **4 of 9** | [[Practice It- SQL Joins]] →

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