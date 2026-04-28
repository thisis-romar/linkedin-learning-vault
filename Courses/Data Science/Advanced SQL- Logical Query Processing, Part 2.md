---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-sql-logical-query-processing-part-2
url: "https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2"
duration_minutes: 127
duration: 2h 7m
level: Advanced
updated: 12/4/2024
learners: 70428
skills:
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQGzhdYQOA6pDw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1600371493000?e=2147483647&amp;v=beta&amp;t=j16eNmCAb2IkLECpQhb4ARcIFu-l0Ds-2Q6YE9xZl0k"
linkedin_topic: Data Science
learning_paths:
  - '[[Master SQL Development]]'
prev_courses:
  - '[[Advanced SQL- Logical Query Processing, Part 1]]'
next_courses:
  - '[[Advanced SQL – Window Functions]]'
path_nav: '[{"path":"Master SQL Development","position":3,"total":8,"prev":"Advanced SQL- Logical Query Processing, Part 1","next":"Advanced SQL – Window Functions"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/sql
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Advanced%20SQL-%20Logical%20Query%20Processing%2C%20Part%202.md)

![Advanced SQL: Logical Query Processing, Part 2](https://media.licdn.com/dms/image/v2/C4D0DAQGzhdYQOA6pDw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1600371493000?e=2147483647&amp;v=beta&amp;t=j16eNmCAb2IkLECpQhb4ARcIFu-l0Ds-2Q6YE9xZl0k)

# Advanced SQL: Logical Query Processing, Part 2

> Without an understanding of the underlying concepts behind SQL, developers will encounter a number of challenges that slow down their workflow. This course—the second installment in a series—was designed to help you avoid these common pitfalls and understand SQL's processing limitations. Join instructor Ami Levin as he continues to delve into logical query processing. Learn how expression, table, 

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2) | 2h 7m | Advanced | 70K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. Subqueries and Set Operators** (4 videos)
- **3. 2. Advanced Joins** (4 videos)
- **4. 3. More on Grouping** (4 videos)
- **5. 4. Recursions and Cursors** (2 videos)
- **6. Conclusion** (1 videos)

### 1. Introduction

#### Course introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/course-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/course-introduction?u=76281980&t=1)** (upbeat uplifting music)
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/course-introduction?u=76281980&t=14)** - [Instructor] I recently published a course titled "Advanced SQL Logical Query Processing."
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/course-introduction?u=76281980&t=21)** You liked this course so much that you've been asking me in the Q and A section, in the feedback and in personal messages for more.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/course-introduction?u=76281980&t=30)** And the truth is, I was planning to do a part two anyway.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/course-introduction?u=76281980&t=33)** Leaving good materials from part one on the editing room floor is a huge incentive for people like me to do a sequel.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/course-introduction?u=76281980&t=41)** Pun intended.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/course-introduction?u=76281980&t=43)** So it's with great pride and joy that I present to you "Advanced SQL Logical Query Processing Part Two."
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/course-introduction?u=76281980&t=52)** You will learn new techniques and language constructs, subqueries, set operators, lateral joins, grouping sets, recursive WITH clauses, ordered set functions, and more.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/course-introduction?u=76281980&t=64)** You will learn how and when to use them, and I'll warn you of the common pitfalls.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/course-introduction?u=76281980&t=70)** It'll be educational and fun.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/course-introduction?u=76281980&t=73)** Well fun, at least, for me.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/course-introduction?u=76281980&t=75)** If you haven't watched part one yet, please go do it now.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/course-introduction?u=76281980&t=80)** Go, go, don't worry; I can wait.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/course-introduction?u=76281980&t=83)** I'll be here when you come back.
>
> **[1:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/course-introduction?u=76281980&t=84)** I promise.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/course-introduction?u=76281980&t=85)** (upbeat uplifting music)

> [!info]- Semantic Content
>
> **Env Vars:** sql (2)
> **Non-Speech:** (upbeat uplifting music) (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Agenda
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=1)** - [Ami] I suggest you get yourself some coffee, tea, water, soda, scotch, or snacks, whatever floats your boat.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=7)** We have a long way to go and I need you fully focused and undistracted.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=13)** The introduction is what we're doing right now.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=16)** Hi, nice to meet you. I'm Ami.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=19)** I think we've met before, didn't we?
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=21)** I'll give you three guesses what will be in our first chapter?
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=26)** You got it. Subqueries are the epitome of SQL composability.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=32)** We will learn about scalar row and table expression subqueries and I'll show you a neat trick that'll help you remember how correlations work.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=41)** Set operators are one of my favorite features of SQL, extremely powerful yet easy.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=48)** And unfortunately, I don't see them used often for reasons that are beyond me.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=55)** Our second chapter will be about advanced joins.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=59)** You'll learn about self joins and how they're used to traverse graphs.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=63)** We'll cover some non-equality predicates and see some practical use cases.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=68)** Lateral joins are somewhat of an exception to the normal processing operation of join but nothing groundbreaking.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=76)** After the subquery chapter, they should not be too much of a challenge.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=81)** Chapter three will blow your mind with a feature called grouping sets, yet another extremely powerful feature that I rarely see used.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=92)** Ordered set functions are standard aggregate functions with a twist.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=98)** Their main use is for statistical analysis.
>
> **[1:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=101)** So they may not appeal to the less stats-savvy among you.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=106)** Recursions are considered black magic by many.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=110)** So we'll break these apart and reveal their essential simplicity and efficiency.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=116)** I will spend the last section ranting about cursors and how ANSI would have done the world a whole lot of good by banning them from SQL.
>
> **[2:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=125)** It will be fun.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=127)** For dessert, we will briefly review what we've learned.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=131)** I'll solicit your feedback and give you some advice about which of my other courses to watch.
>
> **[2:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=136)** And if you'll be nice, maybe, maybe I'll even recommend some other authors.
>
> **[2:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/agenda?u=76281980&t=142)** We'll see about that.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), ansi (1)
> **Code Keywords:** self (1)
> **Speakers:** - [ami] (1)

#### Setting expectations
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=1)** - [Instructor] So, joking aside, I really meant it when I said you should watch part one first.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=7)** Even if you watched it just a few weeks ago, but don't feel 100% confident or don't remember everything, it really won't hurt to go through the chapters you found challenging one more time.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=20)** I'm not going to repeat the materials from part one.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=24)** And this also includes the introductory chapters about the terminology, the demo database, using the code files, the GitHub repo and DB fiddle.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=33)** But we must keep things interesting, so there are a few exceptions.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=39)** First, I'm going to use my new favorite IDE, Microsoft's open source, Azure Data Studio.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=47)** I like that it has a minimalist user interface and that it supports both SQL Server and Postgres so I can show you the differences easily side by side.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=56)** It's an awesome tool, give it a try.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=59)** In part one, I typed most of the demo queries as I was demoing them.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=65)** Now, they were relatively short, but now we're going to use more complex and longer queries.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=70)** So I reserve the right to copy paste the code sections to save valuable time.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=76)** I will highlight the important sections, but I'm not going to spoon feed you each character.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=82)** And if you find it harder to follow, feel free to pause the video as frequently as you need and read the code at your own pace.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=92)** Second, as promised in the introduction video, I have turned the difficulty level up one notch.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=100)** No pain, no gain.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=103)** Third, get ready for a bit more of relational theory, not much.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=109)** In part one, I touched briefly on some aspects of the relational model but now we're going to take it a little bit further and I'm going to give you the broader picture.
>
> **[1:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=118)** I'm sure this will help you remember the subtleties much better.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=123)** The key to success is understanding, not memorizing.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=127)** So, be patient with the theoretical parts, it will pay off.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=132)** Forgive me students for I have sinned.
>
> **[2:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=136)** In previous courses, I've used the term common table expressions or CTE.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=143)** I recently had the pleasure of reading the ANSI SQL standard for this feature, and was surprised to learn that the term that I've been using all these years simply isn't correct.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=155)** Although SQL Server, Postgres, and a few major vendors use it, the correct term according to the standard is the with clause.
>
> **[2:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=165)** So that's what I'm going to use from now on.
>
> **[2:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=168)** And this isn't all, but I've spent enough time for the introduction, so we'll cross the remaining bridges when we reach them.
>
> **[2:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/setting-expectations?u=76281980&t=176)** Now, let's get down to business.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), ide (1), cte (1), ansi (1)
> **Code Keywords:** interface (1), try. (1), let (1)
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Subqueries and Set Operators

#### Subqueries
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=1)** - [Tutor] Subqueries specify a table expression, a row expression, or a scalar expression.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=7)** They're all derived from a query expression.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=11)** In simple terms, it's a query that returns either a table, or a row, or a single value.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=19)** A subquery may contain any clause except for order by, which is only allowed when used in conjunction with a limit or an offset clause.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=28)** We'll see an example.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=30)** Subqueries return a set, and a set has no order.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=36)** A table subquery may return any number of rows and columns, and I will use the term derived table to refer to table expression subqueries.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=47)** A row expression subquery may return only one row with one or more column.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=53)** And lastly, a scalar subquery may return only one row and only one column, and that's why we can treat it as if it was a scalar expression.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=65)** Trivia fact, a scalar is an element of a field which is used to define a vector space.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=72)** A quantity described by multiple scalars, such as having both direction and magnitude, is called a vector.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=82)** Logical query processing works exactly the same way for all types of subqueries.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=88)** The same as normal queries, with a few exceptions.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=93)** Each of the three subquery types can be either correlated or non-correlated.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=99)** Non-correlated subqueries are standalone queries.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=103)** They are independent of the query that they are contained in, which is often called their parent or the outer query.
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=112)** Correlated subqueries do not stand alone.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=116)** They include an expression that references a value from the outer or parent query.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=123)** Example.
>
> **[2:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=126)** This sub query has no dependency or correlation to the parent query from FooBar.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=133)** It stands by itself and returns the same result for all rows of the outer query.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=140)** Although average foot will be returned for each row of Foobar, most databases will execute it just once and use the result for all rows to improve performance.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=153)** But once per row or once per statement, it doesn't really matter.
>
> **[2:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=158)** You can think of it any way that makes you happy.
>
> **[2:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=163)** This sub query is correlated.
>
> **[2:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=167)** There where predicate references Foo, a value that does not exist in the scope of the subquery.
>
> **[2:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=174)** The result of this subquery depends on the current outer query row value of Foo, so the database must execute it again for each and every row.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=187)** Well, if databases were a bit smarter, there could have executed the sub query for each unique value of Foo, but things are not always as simple as they seem.
>
> **[3:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=200)** We need to show all adoptions, with their fees, the maximum fee that was ever paid, and the discount of the current fee from the maximum in percent.
>
> **[3:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=212)** Select max adoption fee from adoptions finds the maximum fee ever.
>
> **[3:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=217)** Now we can take it, put it in parentheses, and use that as an expression subquery inside the outer query that selects all rows from adoptions.
>
> **[3:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=229)** These are two independent queries.
>
> **[3:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=232)** The outer query select all adoptions, and the sub query always returns the max fee.
>
> **[3:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=239)** It also happens to be from the same adoptions table.
>
> **[4:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=243)** The maximum fee of $100 is returned for all rows.
>
> **[4:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=249)** The discount percent for X from Y is calculated as Y minus X multiplied by a hundred and divided by Y.
>
> **[4:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=261)** Now, Y is the max, and it appears twice in the formula, so we must repeat the sub query twice more.
>
> **[4:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=270)** Let's execute, and we can see that Patrick got a 42% discount.
>
> **[4:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=276)** He paid only $58 instead of a hundred.
>
> **[4:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=280)** Diane came in driving a Ferrari and got no discount.
>
> **[4:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=285)** Now we need to calculate the maximum fee for each species instead of overall.
>
> **[4:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=291)** We need to correlate each fee to their respective adoption rows.
>
> **[4:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=295)** And as promised, here is a cool way to visualize how correlations work.
>
> **[5:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=301)** For dogs, we need a where that filters only for dogs.
>
> **[5:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=307)** For cats, the literal value needs to be changed to a cat, and the same for rabbits.
>
> **[5:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=313)** Now, instead of using static literal filter values, we can use a reference from the outer query so that the value of the filter will dynamically change based on the species for the current row from the outer query.
>
> **[5:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=331)** Since both the query and the subquery select from the same table, we must provide unique aliases to distinguish between the species of the outer query, A1 species, and that of the subquery, A2 species.
>
> **[5:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=347)** At runtime, A1 species will be replaced with the species from the outer row, and the max from A2 will be picked among the rows only for that same species in the second instance of the table A1.
>
> **[6:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=369)** Next we need to show all attributes for people who adopted at least one animal.
>
> **[6:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=376)** Persons are identified by their email, and their attributes are stored in the person's table.
>
> **[6:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=382)** Select star from persons reveals we have 120 persons total.
>
> **[6:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=388)** Select star from adoptions reveals we have 70 adoptions.
>
> **[6:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=393)** You already know how to use an inner join between persons and adoptions to do that filter.
>
> **[6:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=401)** Select from persons inner join adoptions on adopter email equals email will give us the correct result.
>
> **[6:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=410)** Just don't forget the distinct set quantifier, or you will get the same person multiple times in case they adopted more than one animal.
>
> **[7:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=421)** Great, we have 49 adopters in total.
>
> **[7:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=426)** Another technique to do that would be to add a filter.
>
> **[7:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=430)** Select from persons where email in, select email from adoptions, and here is a triple bonus points mini challenge.
>
> **[7:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=442)** Let's execute this query and oops, something is wrong.
>
> **[7:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=448)** We get all 120 persons back.
>
> **[7:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=452)** How is that possible?
>
> **[7:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=454)** This is a sneaky, hard to find, bug.
>
> **[7:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=457)** Take more than one minute for this one.
>
> **[7:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=460)** Pause the video for a few minutes and see if you can find the bug.
>
> **[7:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=466)** If you found it, pat yourself twice on the back, because few people do.
>
> **[7:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=472)** And the easiest way to show it is to execute the subquery by itself.
>
> **[7:57](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=477)** And we get an error that email is an invalid column.
>
> **[8:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=482)** There is no email column in adoptions.
>
> **[8:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=486)** The email in adoptions is called adopter email.
>
> **[8:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=491)** So how come this query ran successfully?
>
> **[8:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=495)** When evaluating column references of a sub query, the database first tries to match aliases in the scope of the sub query.
>
> **[8:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=505)** If it can't find a match, it will assume that this is a correlation to a column from the outer query, and will try to match it there.
>
> **[8:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=516)** What happened here is that when email was not found in adoptions, the email from persons was used.
>
> **[8:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=524)** Since the end predicate compares the same email to itself, it will always be true, and all persons are returned.
>
> **[8:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=535)** Be very careful with aliases in subqueries.
>
> **[8:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=539)** This bug has bitten many smart and experienced developers.
>
> **[9:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=544)** The correct subquery is select adopter email from adoptions, and with this one, we now get the correct result of 49 adopters.
>
> **[9:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=556)** Now, for another cool predicate called exists.
>
> **[9:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=561)** Exists is typically used in the where clause, and is followed by a correlated subquery.
>
> **[9:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=568)** It is evaluated for each row and the rows for which the sub query we turns at least one row will evaluate to true.
>
> **[9:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=577)** Nothing prevents us from using a non-correlated subquery in exists, but it doesn't make much sense, since, if we do that, all rows will either evaluate to true or false.
>
> **[9:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=590)** For example, where exists select from adoptions where species equal dog will return all 120 persons.
>
> **[10:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=600)** The subquery always returns at least one row, since we do have dogs that were adopted, and the predicate will evaluate to true for all rows from the outer query.
>
> **[10:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=612)** But if we change dog to elephant, all rows will evaluate to false.
>
> **[10:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=620)** Exists only makes sense when it's evaluated per row.
>
> **[10:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=624)** So that's why we need the correlation.
>
> **[10:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=627)** To find people who adopted animals using exists, we will correlate their emails.
>
> **[10:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=633)** That's alias persons as P, adoptions as A, and correlate where A adopter email equals P email.
>
> **[10:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=642)** Let's execute, and voila, our 49 adopters show up.
>
> **[10:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=648)** One more thing.
>
> **[10:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=650)** Some find it confusing that I write a select null inside the exist sub query.
>
> **[10:57](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=657)** The truth is that it doesn't matter.
>
> **[11:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=660)** You can write null, star, or your full name.
>
> **[11:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=664)** The select clause doesn't return anything when it's used with exists, it's there just to make the syntax valid.
>
> **[11:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=673)** The reason I use nulls is mostly historical.
>
> **[11:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=678)** Back in the days when SQL server was still Sybase, this actually had a performance impact, as the expressions were evaluated by the database, even though they weren't going anywhere.
>
> **[11:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=690)** It also serves as a visual indicator that the subquery is part of an exists.
>
> **[11:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/subqueries?u=76281980&t=697)** Old habits die hard.

> [!info]- Semantic Content
>
> **CLI Commands:** find (5), make (2), cat (1)
> **Definitions:** is a  (4), is an  (2), is called (2)
> **Code Keywords:** let (3), static (1), match, (1)
> **Analogies:** such as (1), for example (1)
> **Env Vars:** sql (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [tutor] (1)

#### Set operators
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=1)** - [Instructor] You've heard me often complain about features of SQL that are being abused.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=6)** Set operators are on the opposite side.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=10)** They seem to be underutilized, and that's a shame, because they're one of the most powerful features of SQL, yet they're very easy to use and understand.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=22)** The ANSI SQL standard defines three Set operators; UNION, EXCEPT and INTERSECT.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=30)** Each of these has two variants; ALL and DISTINCT.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=35)** Many of you have used or at least heard of UNION and UNION ALL, but did you know that UNION is just a shortcut for UNION DISTINCT?
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=46)** And how about EXCEPT or INTERSECT ALL?
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=50)** All means that the result may contain duplicates.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=54)** The default is DISTINCT, which groups or eliminates duplicates.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=60)** Side note: The DINSTINCT set quantifier used in the SELECT clause also has an old variant.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=67)** For SELECT, ALL is the default.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=70)** And you can try it, SELECT ALL * FROM Foo, and see for yourself.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=77)** Moreover, the ANSI SQL standard defines an additional MULTISET variant for all Set operators.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=86)** But as far as I know, MULTISETS are supported only by Oracle, so we're not going to deal with them here.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=94)** Sub queries were processed in the context of a parent query.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=99)** Set operators work differently.
>
> **[1:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=101)** They stand between two independent queries that are processed prior to the Set operator itself.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=110)** Set operators result in a table expression that can be either a Set or a Multiset based on the data, queries and the operator that we use.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=121)** The result can be used with additional Set operators as a derived table and a FROM clause, or anywhere else where a table expression is allowed.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=132)** It's important not to confuse Set operators with Joins.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=137)** Joins combine two table expressions horizontally.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=141)** The result rows depend on the type of Join, but may contain attributes from one or both sources.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=150)** This isn't the case with Set operators.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=153)** Set operators combine two table expressions vertically.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=159)** The result consists of the matching attributes from both sets, and typically these are the same attributes.
>
> **[2:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=166)** Email and breed don't make sense in this context, as they are unrelated attributes.
>
> **[2:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=173)** You can't say show me customer emails except for the colors of the rainbow.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=179)** Well, you can, but you might find yourself being rushed to the ER with a suspected stroke.
>
> **[3:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=185)** UNION ALL returns all elements from the blue and yellow sources.
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=190)** The green result Multiset.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=193)** Blue is also a Multiset as it contains two airplanes.
>
> **[3:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=198)** The result contains both yellow and blue airplanes, and their respective colors represent their origin.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=206)** UNION DISTINCT or just UNION, eliminates duplicate airplanes.
>
> **[3:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=213)** The result contains one airplane, and I painted it black since we can no longer tell if it came from the blue or the yellow set, it came from both.
>
> **[3:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=225)** You can think of it as a grouping operation similar to group by, and that will be very close to the truth.
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=233)** INTERSECT returns elements that are common to both sets, and here, only airplanes exist in both the blue and the yellow sources.
>
> **[4:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=243)** There is a tricky and somewhat unintuitive aspect to INTERSECT ALL.
>
> **[4:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=249)** The ANSI SQL standard defines that when an element exists M times in one source and N times in another, INTERSECT ALL returns the minimum of M and N.
>
> **[4:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=263)** Here we have two airplanes in blue and one in yellow, and the minimum of two when one is one, so one is returned.
>
> **[4:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=271)** If there were two airplanes in yellow, two would have been returned.
>
> **[4:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=277)** But even if there were three in yellow, the result would still have only two.
>
> **[4:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=284)** The intersection is the number of overlapping elements.
>
> **[4:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=289)** And the minimum of two and three in this case is still two.
>
> **[4:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=293)** The only databases that I know of that currently support INTERSECT ALL are PostgreSQL and MariaDB.
>
> **[5:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=301)** So if you're not using either of these, don't worry about it, you only have INTERSECT DISTINCT.
>
> **[5:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=309)** INTERSECT DISTINCT or just INTERSECT is supported by most mainstream databases.
>
> **[5:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=315)** It eliminates the duplicates and returns just one airplane, regardless if there were two or 2,000 in one or both sets.
>
> **[5:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=326)** If an element exists in both sets no matter how many times, the result will have one of it.
>
> **[5:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=334)** EXCEPT ALL returns the ship and the spaceship, which exists in the blue set, but not in the yellow.
>
> **[5:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=342)** And here too, there is a tricky, somewhat less intuitive aspect.
>
> **[5:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=348)** The result of EXCEPT ALL contains one blue airplane as well.
>
> **[5:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=353)** The ANSI SQL standard defines that when an element exists M times in one source and N times in the other, EXCEPT ALL returns either M minus N, or zero.
>
> **[6:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=368)** If we had two yellow airplanes, the result would have none.
>
> **[6:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=373)** Like INTERSECT, the only databases that I know of that currently support EXCEPT ALL are PostgreSQL and MariaDB.
>
> **[6:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=382)** So if you're not using either, don't worry about it, you only have EXCEPT DISTINCT.
>
> **[6:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=390)** EXCEPT DISTINCT or just EXCEPT is widely supported and is much more intuitive.
>
> **[6:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=397)** It returns one of each of the blue elements that don't exist in yellow.
>
> **[6:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=403)** And here, it doesn't matter if there are two, three or 5000 airplanes, it's enough that one exists in yellow for the result not to have any.
>
> **[6:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=414)** Even if we had two or 20 blue ships, the result would still contain only one.
>
> **[7:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=421)** Out of the three, EXCEPT is the only directional set operator.
>
> **[7:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=427)** So if we swap the sets around, yellow EXCEPT DISTINCT blue is only the motorcycle, yellow EXCEPT ALL blue is still the motorcycle.
>
> **[7:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=441)** Set operators treat NULLS as not being distinct from each other.
>
> **[7:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=447)** This is the same way as grouping treats NULL, not the way where predicates do.
>
> **[7:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=453)** And you'll see that this is a huge advantage in some cases, as will be evident in this chapter's challenge.
>
> **[7:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=461)** If you don't remember the difference between expressions being equal to each other versus being not distinct from each other, go back and watch part one, chapters three and four again.
>
> **[7:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=474)** Here it means that NULLS are treated just like any known value.
>
> **[8:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=481)** A UNION ALL of two NULLS will result in two NULLS.
>
> **[8:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=486)** A UNION DISTINCT will result in just one exactly like a known value, and the same is true for both variants of EXCEPT and INTERSECT.
>
> **[8:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=500)** Let's see a code example.
>
> **[8:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=503)** We need to find animals that were not adopted.
>
> **[8:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=508)** The relational operator that corresponds to this request is called an anti-join.
>
> **[8:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=514)** SQL Server documentation wrongly calls it an Anti-semi join, and they invented a term that doesn't exist in relational algebra.
>
> **[8:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=525)** It's a hybrid between an anti-join and a semi-join.
>
> **[8:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=529)** A semi-join represents a join that returns attributes from only one source, and the second source is used as a filter.
>
> **[8:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=538)** This represents animals that were not adopted, Anti-semi join doesn't sound very politically correct, and it's doubly so for an erroneous term.
>
> **[9:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=549)** SQL offers several ways to perform anti-joins.
>
> **[9:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=553)** One technique is to use an OUTER JOIN and a filter only for rows that didn't qualify.
>
> **[9:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=560)** Where, name, from adoptions is NULL.
>
> **[9:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=564)** Don't forget that with this technique, we need a distinct set quantifier in the select.
>
> **[9:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=571)** The key of the adoptions table is name, species, which represents the animal and the adopter.
>
> **[9:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=579)** This means that the same animal can be adopted more than once.
>
> **[9:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=584)** It may be adopted, returned, and then adopted again by a different person.
>
> **[9:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=590)** The sample data doesn't contain any such animals, but we should always consider the possibility, because if we have any in the future, the same animal would be returned once per adoption.
>
> **[10:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=605)** Always validate the schema and the keys.
>
> **[10:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=610)** Another technique is to use NOT EXIST.
>
> **[10:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=614)** Select name, species, from animals, where, NOT EXIST.
>
> **[10:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=619)** Select something, from adoptions, where name equals name and species equals species.
>
> **[10:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=626)** Here we don't need DISTINCT.
>
> **[10:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=628)** Duplicates are not possible as the sub query will be evaluated only once per animal.
>
> **[10:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=635)** So each animal can only be returned either once or not at all.
>
> **[10:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=641)** Who needs all these techniques when we can use the magical Set operators?
>
> **[10:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=648)** Select name and species from animals, EXCEPT those that appear in adoptions.
>
> **[10:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=655)** This returns all animals except those that were adopted.
>
> **[11:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=661)** And this is SQL at its best.
>
> **[11:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=664)** Simple, concise, efficient and crystal clear.
>
> **[11:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=670)** It reads like plain English.
>
> **[11:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/set-operators?u=76281980&t=672)** You can't beat it.

> [!info]- Semantic Content
>
> **Env Vars:** except (14), intersect (11), distinct (11), union (10), sql (9)
> **Definitions:** means that (3), is a  (3), is called (1)
> **SQL:** select (3), join (1)
> **CLI Commands:** find (2), make (1)
> **Analogies:** think of it as (1), similar to (1), just like (1)
> **Code Keywords:** default. (1), let (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=1)** - [Instructor] Your challenge for this chapter is to show breeds that were never adopted.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=7)** It is not the animals that were not adopted.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=10)** It's the breeds that were not adopted.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=13)** And this may sound like a minor change but trust me, it is not.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=18)** There is a fundamental logical difference between these two questions.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=23)** Breed isn't an animals identifier.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=27)** We have more than one animal of the same breed.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=30)** Moreover, none breed animals have null for breed, which throws another monkey wrench into the query.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=40)** A few tips. We have none breed dogs and none breed cats.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=45)** So remember, you must consider species as well.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=49)** Breed alone is not enough.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=53)** I'll give you the answer for the sample data.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=55)** The only breed that was not adopted is a Turkish Angora cat.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=60)** This is going to help you a lot identify any wrong solutions.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=67)** Before you attempt to use set operators, I ask that you try some of the techniques we just used to find animals that were never adopted and see whether or not these techniques work.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=80)** This should be an instructional exercise on what to do and not to do and how things can easily go wrong.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=90)** The code file for video two has all the queries.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=94)** So you can copy them and try to adjust them to the new requirement.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=98)** The code file for this video has all the requirements and the helpful tips.
>
> **[1:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-3?u=76281980&t=105)** Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (1), find (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=0)** - [Instructor] Let's start with a naive approach.
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=3)** I'm going to use the exact same queries that returned the animals that were never adopted and try to just change name to breed.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=12)** What could go wrong, right?
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=14)** First, the outer join.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=17)** Change name to breed and execute, nice.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=21)** I do get the correct breed result, Turkish Angora cat, but it's buried in a pile of wrong ones.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=29)** Let's see what this query really does.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=32)** And to do that, I'll follow query execution order.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=36)** Animals left outer join adoptions on species and name returns all animals and for those that were adopted, we also get their adoption attributes.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=48)** The ones that were not adopted will have null for all adoption attributes and the where filter keeps only those.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=57)** We get a list of all animals that were never adopted.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=61)** So far, same as before.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=64)** This set of 30 animals now moves on to the select clause, in which we do two things.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=71)** We select only species and breed attributes and remove duplicates with distinct.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=78)** And what did we get?
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=79)** All the species and breeds of all animals that were never adopted.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=86)** Let me add name to the list to make it clearer and execute.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=90)** Do you see why this isn't the same as breeds who were never adopted?
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=96)** The fact that Angel, who happens to be a non-breed dog wasn't adopted doesn't mean that all non-breed dogs were not adopted.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=107)** Let's see if that's the case.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=109)** Select star from animals, inner join adoptions on name and species and yes, here is Abby, a non-breed dog that was adopted by Patrick Hughes on August 30th, 2018.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=122)** And yet, non-breed dog still shows up in the previous query results because Angel, a different dog, was not adopted.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=134)** All dogs have four legs, but that doesn't mean that everything with four legs is a dog.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=140)** So this query won't do.
>
> **[2:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=142)** Let's trash it.
>
> **[2:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=145)** The query with a not exist suffers from the same issue.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=149)** Show me the breed and species for animals that weren't adopted isn't the same as show me all breeds that were never adopted.
>
> **[2:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=157)** Trash that one too.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=160)** The not in techniques suffers from a slightly different issue.
>
> **[2:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=165)** And I'm going to use the postgres version and use the row constructor just to keep it shorter.
>
> **[2:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=172)** I'll replace name with breed and execute.
>
> **[2:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=176)** And now, something funny happens.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=179)** I get back an empty set.
>
> **[3:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=182)** Can you see why that is?
>
> **[3:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=184)** Pause the video for a minute and try to figure it out.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=192)** It's enough to have one row with a null breed for the whole not in expression to evaluate to unknown and for all rows to be eliminated.
>
> **[3:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=204)** The in predicate can be written as multiple equality predicates.
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=208)** Let's break it down.
>
> **[3:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=210)** The pair of expressions, A and one species and breed should be equal to the pair of A and two species and breed.
>
> **[3:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=219)** For any two pairs where their species is equal, but the breed is null, this comparison evaluates to unknown.
>
> **[3:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=229)** True and unknown is unknown.
>
> **[3:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=234)** For any two pairs where the species is different and the breed is null, this comparison evaluates to false, false and unknown is false.
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=247)** If you don't remember these logical evaluations, go back to part one, chapter three, video two.
>
> **[4:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=254)** In checks each pair from the outer query against all pairs from the inner query and you can think about it as if it has an or operator between them.
>
> **[4:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=266)** The outer pair should be equal to at least one of the inner pairs for the predicate to evaluate to true and for all comparisons to be false, in order to evaluate to false.
>
> **[4:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=280)** Now this cannot happen here.
>
> **[4:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=282)** The result can never be false because it's enough that we have one unknown and the comparison evaluates to unknown and not unknown is also unknown, so not a single row will qualify.
>
> **[5:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=301)** We can work around it by eliminating null breads from the inner query and execute.
>
> **[5:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=309)** And this gives me the correct result.
>
> **[5:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=312)** Only Turkish Angora cats were never adopted.
>
> **[5:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=316)** But do you think this query is correct?
>
> **[5:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=320)** Would you use it in your production environment?
>
> **[5:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=322)** What do you think will happen if I add another animal?
>
> **[5:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=327)** Ferris, the non-breed ferret, for which I know has not been adopted because I haven't put a row in adoptions for it.
>
> **[5:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=336)** Will it show up or not?
>
> **[5:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=338)** Pause the video for a minute and think about it.
>
> **[5:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=344)** Well, the answer is yes.
>
> **[5:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=348)** I got you there, didn't I?
>
> **[5:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=351)** Ferris is returned as it should.
>
> **[5:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=354)** This query also works for non-breed animals who were never adopted.
>
> **[5:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=359)** Let's see why.
>
> **[6:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=361)** Not in evaluates to true where the comparison is against an empty row expression.
>
> **[6:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=369)** And this may sound counterintuitive at first, but if you think about it for a while, it does make sense.
>
> **[6:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=376)** For example, the answer to the question, is John not one of the persons who are in an empty room is yes.
>
> **[6:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=387)** John is not one of these persons.
>
> **[6:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=391)** There are no persons in an empty room, so John is not one of them.
>
> **[6:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=397)** And I can easily verify this.
>
> **[6:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=400)** Select works where one not in select one doesn't return any rows.
>
> **[6:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=408)** Adding where false to the subquery returns an empty set and now the works string is returned.
>
> **[6:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=418)** And the same thing happened for Ferris.
>
> **[7:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=422)** For her row, the inner set is empty and the not in evaluated to true and Ferris was returned.
>
> **[7:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=431)** So this query will work.
>
> **[7:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=434)** But with all these fancy techniques and mind-bending null logic is completely unwarranted because we have the magic of set operators on our side.
>
> **[7:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=447)** The whole trick here was to realize that unlike the previous exercise, we need to access the animal tables twice to solve it with a set operator.
>
> **[7:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=459)** The first select returns all species and breeds.
>
> **[7:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=463)** And the second one returns this species and breeds who were not adopted.
>
> **[7:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=468)** And all we need to do is add an except between them and that's it.
>
> **[7:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=475)** This solution doesn't force us to deal with the null, as they are not compared, but they are treated as not being distinct from each other.
>
> **[8:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=485)** See how powerful set operators are?
>
> **[8:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=489)** Now, I'm sure you'll start using them more in your code.
>
> **[8:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=492)** It just works.
>
> **[8:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=494)** Simple, concise, efficient and crystal clear.
>
> **[8:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=498)** It's SQL at its best.
>
> **[8:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=501)** For the adventurous among you, I have included another solution to this challenge at the bottom of the code file.
>
> **[8:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=509)** Now, I don't think it's better than the set operator solution.
>
> **[8:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=513)** On the contrary, I like the set operators better, but that solution does enable some interesting query techniques that I plan to cover in a future course that can be used when set operators can not.
>
> **[8:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=529)** I'm not going to review that query here, but I recommend that you try and figure it out for yourself.
>
> **[8:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=535)** It's pretty cool.
>
> **[8:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution?u=76281980&t=536)** And let me know what you think in the course's Q&A section.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), case. (1), while, (1), this. (1)
> **CLI Commands:** make (2), cat (1)
> **Env Vars:** sql (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Advanced Joins

#### Self and inequality joins
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=1)** - [Narrator] The same table expression can be used multiple times in a FROM clause, as long as each instance of it is uniquely aliased.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=10)** We call it a self join.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=13)** All the rules we learned regarding join processing hold true for self joins.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=18)** Each instance of the table expression is completely independent of the other.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=24)** One of the most common use cases for self joins is querying adjacency list.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=31)** This is the definition of an adjacency list, go ahead, read it, I'll be waiting.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=39)** Adjacency lists are commonly used to represent employee hierarchies, bill of materials, post threads and other types of graphs.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=48)** They are very intuitive, but not necessarily the most efficient or flexible.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=54)** And don't worry, I'm not going to make you suffer through another employee hierarchy example, I'm sure you've seen a gazillion of these.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=64)** Practically every book and every article on joins has one.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=70)** There are other techniques, such as enumerated paths and nested sets that can also be used to represent graphs and SQL.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=79)** Let me know in the Q and A section, if you would like to see a course about them, they're really cool.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=85)** Most joins use equality, qualification predicates.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=89)** The most common join is between a parent and it's child rows.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=94)** Customers with orders, orders with items or animals with adoptions.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=100)** Non-equality joins are joins that use non-quality qualification operators.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=106)** There's nothing complex about them if we follow join processing order.
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=112)** Now, despite my earlier promise, a quick review of join order will be very helpful here.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=119)** Every join begins with a Cartesian product where every element from the blue set is matched with every element from the orange set.
>
> **[2:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=129)** Cross joins end here.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=131)** All other join types proceed to a qualification phase where each row of the Cartesian product is evaluated using the qualification predicate.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=141)** And this is true, regardless what qualification predicate we use.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=146)** It can be an equality operator and non equality, or even a constant Boolean expression.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=153)** If the qualification predicate uses an equality operator, only the row with a two twos qualifies.
>
> **[2:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=161)** For a different than operator, all the rows except the previous one qualify, and for a larger than operator, only the row with a blue three and orange two qualifies.
>
> **[2:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=175)** These are best explained with a code demo, and I remind you that it's perfectly okay to pause the video as many times as needed if you feel it's going a little too fast for you.
>
> **[3:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=188)** Our task is to report adopters who adopted two animals on the same day.
>
> **[3:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=194)** The report should show the adopter, both adopted animals in separate columns and the adoption date.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=201)** I said two animals, not more than one for a reason.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=206)** And you can try and solve it for three or more animals, and I would love to see your solution in the Q and A, we're not going to cover it here.
>
> **[3:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=215)** Let's begin by joining two instances of the adoption's table, alias them A1 and A2 respectively, and use an equality predicate, where both the adopter email and the adoption date are the same.
>
> **[3:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=230)** I'll add an order by just for convenience.
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=233)** We can immediately see a few issues.
>
> **[3:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=236)** First, each adoption row is matched with itself, and of course we need to filter these out.
>
> **[4:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=243)** So, let's add a predicate, A1 name different than A2 name and execute it.
>
> **[4:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=251)** Success.
>
> **[4:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=253)** The second challenge, is that we get two rows for each date for the same animals, only where their positions swapped.
>
> **[4:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=262)** A row for Gus and Sam, another for Sam and Gus.
>
> **[4:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=266)** There is a cool trick to get rid of these duplicate easily.
>
> **[4:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=271)** Pause the video for a minute and try to find it.
>
> **[4:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=279)** One way is to change the different than operator to a larger than.
>
> **[4:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=285)** Only one of the rows we'll evaluate to true, and the duplicate will be eliminated.
>
> **[4:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=291)** There was no requirement to show a specific animal on either of the columns, so name order is as good as any other.
>
> **[5:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=300)** But we're not done yet.
>
> **[5:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=302)** There's a hidden bug lurking in the solution.
>
> **[5:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=306)** Even though it doesn't show with this data, do you think you can spot it?
>
> **[5:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=311)** Pause the video once again for a minute, and see if you can spot the lurking bug.
>
> **[5:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=320)** Comparing the animal's name between A1 and A2, just isn't enough.
>
> **[5:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=327)** An animal's identifier is species and name.
>
> **[5:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=332)** And someday, we may have two animals with the same name, but of a different species.
>
> **[5:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=338)** Let's try to demonstrate it.
>
> **[5:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=340)** I'll add two animals of a different species with the same name.
>
> **[5:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=345)** Duplicate sounds like a nice name.
>
> **[5:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=348)** Let's get them adopted on the same day, execute the query again, and indeed duplicate doesn't show up.
>
> **[5:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=358)** Can you think of a solution, so that duplicate the dog and duplicate the rabbit do show up.
>
> **[6:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=365)** Once again, pause the video for a minute and see if you can find a solution.
>
> **[6:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=372)** You might have been tempted to use a predicate for either name is larger, or the species is different.
>
> **[6:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=381)** Let's try this, execute, and now duplicate does show up, but this change had an unfortunate side effect.
>
> **[6:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=391)** The trick we previously used with A1 name larger than A2 name, no longer works.
>
> **[6:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=398)** We get back duplicate rows for adoptions of animals, with a different name and a different species.
>
> **[6:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=404)** Sam the cat and Gus the dog, but also Gus the dog and Sam the cat.
>
> **[6:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=411)** The OR causes the predicates to evaluate to true for both.
>
> **[6:57](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=417)** If this isn't perfectly clear, you can execute the query without the last predicate, scroll down to Francis rows, and evaluate the predicate for each row in your head.
>
> **[7:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=429)** If you're attempted to change the species predicates to larger than, that's not going to help either.
>
> **[7:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=435)** As dog is larger than cat, but Sam is larger than Gus.
>
> **[7:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=440)** So, if we're going to try this, both are returned.
>
> **[7:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=446)** How would you solve it?
>
> **[7:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=448)** Once again, pause the video for a minute, and see if you can find a solution.
>
> **[7:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=456)** We have three possible conditions for an animal.
>
> **[7:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=461)** Either their names are the same, but the species is different, or their species is the same, but the names are different, or both their names and their species are different.
>
> **[7:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=474)** And we must account for all three possibilities.
>
> **[7:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=478)** So, let's write these down as individual predicates separated by OR, and execute once again.
>
> **[8:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=488)** Now something else has gone wrong.
>
> **[8:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=491)** Where did the adoptions of Gus and Sam and Archie and Abby disappear.
>
> **[8:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=497)** And for the last time, pause the video for a minute and see if you can find what's wrong.
>
> **[8:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=507)** The last predicate is wrong.
>
> **[8:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=510)** There is no guarantee that both the name and the species from A1 will be larger than those from A2.
>
> **[8:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=518)** Even though Sam is larger than a Gus, cat isn't larger than dog.
>
> **[8:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=524)** And the same is true for Archie and Abby.
>
> **[8:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=527)** We cannot have both predicates use the larger than operator, and in order to fix this query, we must one of them back to being a different than, and it doesn't matter which one.
>
> **[9:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=541)** Let's change it, execute again, and now we get the correct result.
>
> **[9:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=547)** If this still doesn't make sense, execute the query without the last predicates and evaluated in your head like before.
>
> **[9:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=556)** Can you think of another way to solve this challenge?
>
> **[9:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/self-and-inequality-joins?u=76281980&t=559)** I invite you to post your suggested solutions in the Q and A section.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), self (3), this, (2)
> **CLI Commands:** find (4), cat (4), make (2)
> **Env Vars:** sql (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Lateral joins
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=0)** - [Instructor] One of the limitation of joins is that each table expression that's being joined must stand alone and be independent of any other.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=11)** So this query is valid.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=14)** Each table expression is complete and independent.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=18)** But if we introduce a correlation between the two, we're going to get an error.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=24)** F1 Bar is an unknown expression.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=28)** And the reason is that it does not exist in the context of the sub query.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=34)** Introducing such correlations could have been very useful for several types of challenges.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=40)** And the most common one is known as the top end per group challenge.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=46)** We need to show all animals with their most recent vaccination.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=52)** Let's start with the animal attributes, names, species, color, and breed, and all that's missing is the last vaccine.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=61)** I often see developer use correlated expression sub-queries for these types of challenges.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=68)** Select vaccine from vaccinations.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=71)** Predicate for the same animal, and add a limit to the result to get only the latest one.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=79)** By the way, this is the only case when order by is allowed in a sub-query.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=86)** Following processing order.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=88)** The entire animals table is evaluated by the outer query and for each animal, the sub-query returns the most recent vaccination.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=99)** This approach works, but it is limited and inefficient.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=104)** For those who are not vaccinated like Ace and April the sub-query returns an empty set, which produces an nul expression.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=115)** The sub-query can only return one expression.
>
> **[2:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=120)** So if we want to show the vaccination time as well, we can't just add it to the same sub query.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=127)** This will return an error.
>
> **[2:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=129)** Only one expression can be specified.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=132)** We have no choice, but to repeat the entire sub query for each additional expression.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=140)** One expression per sub query.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=143)** And this can get very ugly very quickly.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=148)** This approach fails if we need to retrieve not just one, but let's say we want to retrieve the three most recent vaccinations.
>
> **[2:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=157)** And if I try it, I'm going to get an error.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=160)** Sub query returned more than one value.
>
> **[2:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=164)** It would be nice if we could prepare our source set in the from clause with each animal already matched with as many vaccination and attributes as we desire.
>
> **[2:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=178)** Let's try it.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=179)** Animals cross join select vaccine and vaccination time.
>
> **[3:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=184)** With a predicate for that animal and limit to three rows.
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=190)** Unfortunately, this doesn't work.
>
> **[3:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=194)** Standard joins, as we said, must use stand alone table expressions.
>
> **[3:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=199)** And the correlation to A name and A species, isn't allowed.
>
> **[3:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=205)** But there was a way around it.
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=208)** The ANSI SQL 99 introduced a feature called lateral derived tables.
>
> **[3:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=215)** PostgreSQL, partially support it, SQL I doesn't.
>
> **[3:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=219)** Oracle and my SQL do.
>
> **[3:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=222)** SQL servers product team, decided it would be a good idea to invent their own proprietary syntax.
>
> **[3:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=230)** And they called it cross apply and outer apply.
>
> **[3:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=234)** We'll get back to SQL server shortly.
>
> **[3:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=236)** but let's start with PostgreSQL.
>
> **[3:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=239)** With PostgreSQL, all we need to do to make this query valid is to add the keyword lateral after the join and execute.
>
> **[4:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=250)** And now it works like a charm.
>
> **[4:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=253)** Lateral processing invokes the sub query for each row of the animal's table and accumulates the result.
>
> **[4:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=262)** So you can see for Abby, we got only two rows as she only had two vaccinations.
>
> **[4:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=268)** Angel had at least three and the most recent ones are return.
>
> **[4:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=274)** Pretty cool, isn't it?
>
> **[4:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=276)** And no don't answer.
>
> **[4:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=277)** It's a rhetorical question.
>
> **[4:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=280)** Note that I'm using a cross join.
>
> **[4:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=283)** And that means that animals that were never vaccinated, the sub query returns an empty set for them.
>
> **[4:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=291)** And these rows are eliminated from the result.
>
> **[4:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=295)** If we want to include animals that were never vaccinated, we must use a left outer lateral join.
>
> **[5:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=304)** And here things start to get a little bit funky.
>
> **[5:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=308)** Unlike normal joins, there's no logical qualification predicate here.
>
> **[5:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=314)** The derive table is evaluated for each animal row.
>
> **[5:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=318)** And the correlation predicate is what determines which rows will qualify.
>
> **[5:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=324)** In a sense, the correlation is the qualification.
>
> **[5:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=329)** To overcome this syntax challenge, we need to use a bullion true expression as the join qualification predicate.
>
> **[5:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=338)** And yes, I know this looks weird and confusing, but it will grow on you with practice.
>
> **[5:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=345)** This ugly looking syntax does allow us to return Ace, April and Arya, which were never vaccinated.
>
> **[5:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=355)** Back to SQL server.
>
> **[5:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=356)** Here we can use cross apply to eliminate animals that were never vaccinated.
>
> **[6:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=362)** Similar to the cross join and outer apply to designate the animals table as reserved, similar to the outer joint.
>
> **[6:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=372)** Unlike the lateral joint syntax, a ply does not require or even allow us to specify a qualification.
>
> **[6:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=380)** When I think about it now, maybe the fact that SQL server does not support bullion types at all, is the reason they chose not to use the standard syntax.
>
> **[6:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/lateral-joins?u=76281980&t=392)** And now it's time for another challenge.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7), ansi (1)
> **Code Keywords:** let (4), return. (1), require (1)
> **Definitions:** is an  (1), known as (1), means that (1)
> **Analogies:** similar to (2)
> **CLI Commands:** make (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge?u=76281980&t=1)** - [Instructor] Our shelter has been experiencing financial difficulties.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge?u=76281980&t=5)** The board of directors decided to explore additional revenue sources and came up with the following idea.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge?u=76281980&t=12)** Instead of spaying and neutering all animals, the shelter should consider responsible breeding of purebred animals.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge?u=76281980&t=22)** Your challenge is to figure out which animals are breeding candidates.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge?u=76281980&t=28)** Candidates should be male and female of the same species and breed and you may use any database that you wish.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge?u=76281980&t=36)** In the next video I'll review my suggested solutions for both SQL server and Postgres.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge?u=76281980&t=42)** You will find the requirements, expected results and some helpful tips and the code file for this chapter.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge?u=76281980&t=50)** Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=1)** - [Instructor] As always, I'll follow execution order and begin with a FROM clause.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=6)** Since I need to match two animals, I'm going to need two instances of the Animals table.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=12)** As a starting point, I'll execute SELECT * FROM Animals AS A1 CROSS JOIN Animals AS A2; and this query returns each animal matched with every other animal.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=27)** I need to match only animals of the same species and breed, and only purebreds.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=33)** So, I'll change the CROSS JOIN to an INNER JOIN and add a qualification predicate ON A1.Species = A2.Species AND A1.Breed = A2.Breed; the visual clutter of all these redundant columns from the * is kind of a distraction so let's change it and include only the columns that we need.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=56)** A1.Species, A1.Breed, A1.Name, AS Male, and A2.Name AS Female.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=63)** I chose to get species, breed, and male from A1, but it's completely arbitrary.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=69)** You're welcome to do it the other way around.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=72)** I'll add an ORDER BY for convenience and execute.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=76)** I'm not done yet.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=78)** But let's examine what I have so far.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=81)** First thing that I notice is that all non-breed animals were eliminated.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=87)** Do you see why that is?
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=89)** The A1.Breed = A2.Breed predicate caused all animals with a null breed to evaluate to unknown.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=98)** And in this case, it's a desirable effect.
>
> **[1:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=101)** There's nothing wrong with leaving it as is.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=104)** But if you're concerned with future developers getting confused, you're welcome to add a redundant predicate, AND A1.Breed IS NOT NULL or simply add a comment.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=116)** Another obvious issue is that every animal is matched with itself.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=123)** If I add the predicate AND A1.Name is different than A2.Name, I solve only half the problem.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=130)** Pearl no longer shows up, but Nova is matched with Salem, and Salem is matched back with Nova.
>
> **[2:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=138)** And since I already committed my aliases for the male to be from A1 and the female from A2, I can add two predicates AND A1.Gender = 'M' AND A2.Gender = 'F'.
>
> **[2:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=154)** This is perfectly fine, and if you find this way to be clearer, go ahead and do it.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=160)** For this solution, I'll make the query slightly shorter and kill two birds with one stone by using the same trick I showed you earlier.
>
> **[2:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=169)** A1.Gender &gt; A2.Gender will take care of both as 'M' for male is larger than 'F' for female.
>
> **[3:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=180)** A word of caution.
>
> **[3:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=182)** If you decide to use this shortcut for strings, make sure your collations use dictionary sort order and that the string casing is consistent.
>
> **[3:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=194)** If you use a binary sort order or a case sensitive collation, a non-capital 'f' will have a higher sort order than a capital 'M', which is going to fail this query.
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-3?u=76281980&t=208)** And with that, the solution is complete.

> [!info]- Semantic Content
>
> **Env Vars:** join (3), cross (2), select (1), inner (1), order (1)
> **SQL:** join (2), select (1), inner join (1), order by (1)
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** let (2), case, (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)


### 4. 3. More on Grouping

#### Ordered set functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=0)** - [Instructor] Most aggregate functions don't rely on any order.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=4)** MIN, MAX, COUNT, and SUM are inherently order-agnostic.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=9)** The result will be the same regardless of any order of the individual elements.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=16)** Ordered set functions are aggregate functions but ones that are effected by element order.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=23)** They are processed like any other aggregate function except for the order significance.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=31)** This is the general syntax for ordered set functions.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=35)** The ANSI SQL standard defines two types of ordered set functions, hypothetical set functions, and inverse distribution functions.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=45)** If you watched my window functions course, the hypothetical set functions should look familiar and it's no coincidence.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=53)** We'll get back to these shortly.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=56)** Most databases support additional proprietary ordered set functions.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=61)** And one of the most familiar and loved are the string aggregation functions that can concatenate individual string values within a group into a single longer string.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=75)** These are not defined by the ANSI SQL standard, so each database vendor can choose whatever name it likes.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=82)** So that's how we ended up with string aggregate in SQL Server, GROUP_CONCAT in MySQL and SQLite, and list aggregate in Oracle.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=94)** Here is a query that groups adoptions by date and filters for groups that have more than one adoption on the same day.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=103)** Aggregate functions return a single value per group.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=107)** The SUM function aggregates all individual fees into a single daily total.
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=114)** What if we want to show all animals that were adopted on that day?
>
> **[2:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=120)** Obviously, SUM won't work for strings.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=124)** The animals identifier is name and species.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=127)** So I'm going to use CONCAT function to create a single string from both the animals identifying attributes.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=137)** Name and species are expressions from the same row, but there's potentially more than one row per each date group.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=146)** And to concatenate all rows within a group, we need to use a function like SUM but one that works for strings.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=155)** And string aggregate is our friend.
>
> **[2:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=158)** Unlike SUM, which didn't care about any order, now, the order has significance, hence, it's called an ordered set function (indistinct).
>
> **[2:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=170)** We specify the expression to be aggregated, the result of the concatenation of name, the word, the, and species, followed by the separator character, comma, and space.
>
> **[3:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=184)** Lastly, the sort order is defined in the WITHIN GROUP clause.
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=189)** Note that we have two different levels of concatenation here.
>
> **[3:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=194)** The CONCAT function worked per row and the string aggregate on top of it for all rows within each date group.
>
> **[3:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=204)** A word of caution.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=206)** If you use SQL server's plus operator to concatenate a null string, the result will be null.
>
> **[3:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=214)** CONCAT, on the other hand, converts nulls to empty string.
>
> **[3:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=219)** String aggregate like any aggregate function ignores nulls.
>
> **[3:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=224)** So for example, if we add breed to the string, we must join to animals, add breed, and alias to avoid ambiguity.
>
> **[3:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=234)** Now, if we use the CONCAT function, all animals show up and just the breed will be missing.
>
> **[4:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=242)** But if you choose to use the plus operator, the non-breed animals will be missing all together as the string aggregate will ignore them as they are nulls.
>
> **[4:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=255)** Disclaimer, if you have little experience with statistical analysis functions, feel free to skip this video.
>
> **[4:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=265)** You will find these functions confusing at first, everybody does, so don't feel bad.
>
> **[4:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=273)** As I mentioned earlier, if you've watched my window functions course, you should remember, RANK , DENSE_RANK, PERCENT_RANK, and cumulative distributions when they were used as window functions.
>
> **[4:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=286)** For those of you who don't remember or God forbid, haven't yet watched it, put it in your queue.
>
> **[4:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=294)** It will be very helpful to briefly revisit what these functions did as window functions.
>
> **[5:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=302)** RANK and DENSE_RANK window functions assigned rank to each row.
>
> **[5:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=307)** For example, the RANK window function ordered by name, evaluates the relative rank of each names dictionary sort order.
>
> **[5:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=316)** Window functions are evaluated per row.
>
> **[5:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=319)** And so we get the relative ranks for all rows, Abby first and Winston last.
>
> **[5:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=326)** These are not aggregates.
>
> **[5:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=329)** As a grouped aggregate function, this same functionality doesn't make any sense.
>
> **[5:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=337)** Here is the same animal set, grouped by species.
>
> **[5:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=341)** Name is a non-aggregate expression.
>
> **[5:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=344)** And theoretically, and even if this syntax was valid, which it isn't, name wouldn't be valid in the context of a grouped query.
>
> **[5:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=355)** Aggregate functions must return one value per group.
>
> **[6:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=360)** A rank within a group only makes sense relative to other ranks.
>
> **[6:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=366)** So, let's throw away this nonsense.
>
> **[6:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=369)** RANK functions make sense as hypothetical set functions.
>
> **[6:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=374)** Hypothetical means we ask the database a what if question regarding a specific values rank within the group.
>
> **[6:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=384)** What would be the rank of the name Ami, if it was in this group.
>
> **[6:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=391)** This makes perfect sense as it will return a single value per group.
>
> **[6:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=396)** The rank of Ami, if it was one of the elements within the group.
>
> **[6:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=402)** So, if Ami were a cat, which isn't far from the truth, what rank would his name get?
>
> **[6:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=409)** Ami starts with an A, which happens to be smaller than the current smallest cat name Calvin.
>
> **[6:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=416)** So, it would rank number one, yay.
>
> **[7:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=421)** If Ami were a dog, which also isn't far from the truth, he would rank number two.
>
> **[7:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=427)** Abby starts with an A as well, but her second character B, has a lower dictionary sort order than Ami's second character M.
>
> **[7:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=437)** As a rabbit, which is pretty far from the truth this time, Ami would rank number one again.
>
> **[7:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=444)** The second type of ordered set functions are called inverse distribution functions.
>
> **[7:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=451)** These are the percentile continuous and percentile discreet.
>
> **[7:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=455)** Oracle, Postgres, and others support these functions as the ANSI SQL standard intendant, but not SQL Server.
>
> **[7:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=466)** SQL Server implemented something that resembles inverse distribution functions, but instead of following the standard in implementing these as ordered set functions, which they should be, the product team decided it would be a good idea to implement them as if they were window functions.
>
> **[8:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=488)** And this doesn't make any sense whatsoever.
>
> **[8:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=491)** And every time I need to explain that to a class, I get nervous, irritated, and start to shiver.
>
> **[8:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=499)** After not much debate with myself, I have decided unanimously that I am not going to cover SQL Server's bizarre implementation of inverse distribution functions.
>
> **[8:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=510)** It will only confuse you.
>
> **[8:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=513)** In the code file, you will find links to good articles that attempt to explain it.
>
> **[8:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=519)** And I recommend that you take a look at it after watching my window functions course and after you feel comfortable with ordered set functions.
>
> **[8:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=529)** In some sense, inverse distribution functions work in a similar manner as a hypothetical set functions, they, too, suggest a hypothetical value evaluated from the group.
>
> **[9:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=542)** Unlike the hypothetical set functions, where we provided a value and got back the hypothetical rank, inverse distribution functions do kind of the opposite.
>
> **[9:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=555)** We specify the percentile and get back the value that corresponds to it using either a continuous or a discrete model.
>
> **[9:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=564)** They don't work for strings.
>
> **[9:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=566)** So my PowerPoint example breaks here, but it will be easier to show what they do in a code anyway.
>
> **[9:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=574)** We need to rank our animals based on the number of vaccinations they're received.
>
> **[9:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=579)** Let's start with a simple grouped query that counts the number of vaccinations per animal, sorted by species and number of vaccinations in descending order, and the animal with the most vaccinations wins.
>
> **[9:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=593)** Yeah, I know it's kind of backwards, but stay with me here.
>
> **[9:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=598)** Tigger is first of all cats with a record number of six vaccinations, followed by Oscar with three.
>
> **[10:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=606)** In the dog's group, Aspen leads with five vaccinations, followed closely by Thor with four.
>
> **[10:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=613)** And in the rabbits division, Bon bon is first, followed by Humphrey.
>
> **[10:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=618)** So far so good.
>
> **[10:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=621)** Let's take this query, wrap it in a WITH clause, call it Vaccination_Ranking, and embark on our statistical analysis quest.
>
> **[10:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=631)** This query is grouped by animal, but that's not going to be relevant.
>
> **[10:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=635)** So I'm going to collapse the first query just to avoid distractions.
>
> **[10:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=640)** Think of it as the source for the following query.
>
> **[10:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=644)** Now, let's select from Vaccination_Ranking and group by species.
>
> **[10:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=650)** As you know, after we group by species, we can only refer to the GROUP BY expression, species, and use aggregate functions for all other expressions.
>
> **[11:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=661)** Let's add MIN, MAX, and average vaccination of individual animals for each species.
>
> **[11:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=668)** Postgres average returns along numeric for averages.
>
> **[11:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=672)** So let's cast it to a more readable decimal with two digit after the decimal point.
>
> **[11:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=679)** Yeah, this is better.
>
> **[11:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=681)** And here are the max, min, and average number of vaccinations per animal for each species.
>
> **[11:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=689)** Pretty cool, right?
>
> **[11:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=693)** The hypothetical set functions come in handy if we need to know what the rank of a hypothetical animal would be.
>
> **[11:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=701)** One that had allegedly received X number of vaccinations.
>
> **[11:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=707)** So to minimize confusion, I'm not going to show you all four hypothetical set functions, I'll focus just on DENSE_RANK and PERCENT_RANK.
>
> **[11:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=716)** And this is an arbitrary choice.
>
> **[11:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=718)** The other two, RANK and cumulative distributions are calculated slightly differently, but they were processed exactly the same way.
>
> **[12:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=728)** My focus is on how they are processed, not the specific details of each one's algorithm.
>
> **[12:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=736)** DENSE_RANK seven WITHIN GROUP ORDER BY number of vaccinations descending, shows that if we had a hypothetical animal that received seven vaccinations, it would have ranked first for all species.
>
> **[12:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=753)** Seven is higher than the maximum number of vaccinations for all species.
>
> **[12:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=759)** But if we change the seven to a five, a dog with five vaccination would still rank first as it would have the same number of vaccinations as Aspen.
>
> **[12:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=771)** But for cats and rabbits, it would now rank second, since we have cats and rabbits with more than five vaccinations.
>
> **[13:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=782)** PERCENT_RANK works in a similar way, but instead of an integer rank between one and n, it assigns a percentile rank between zero and one.
>
> **[13:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=791)** A PERCENT_RANK for a hypothetical animal with seven vaccinations would fall into the top 0%, as seven is higher than the number of vaccinations of any other animal.
>
> **[13:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=804)** A PERCENT_RANK with a hypothetical animal with only five vaccinations would fall into the top 8% of all cats.
>
> **[13:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=813)** It would still be the top dog of all dogs, pun intended, and at around the top 33% for all rabbits.
>
> **[13:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=824)** The inverse distribution functions do the opposite.
>
> **[13:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=830)** Instead of supplying a value and getting the rank this value would have gotten, we provide a percentile and these return the value that corresponds to that percentile.
>
> **[14:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=844)** The difference between the two functions is that the continuous model interpolates values that may or may not exist in the original group, and the discrete model picks the closest value, which has higher than the interpolated one, but only among the existing values within the group.
>
> **[14:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=866)** Let's see how it works.
>
> **[14:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=869)** For the top percentile zero, both return the maximum number of vaccinations per species.
>
> **[14:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=876)** And for one, they return the minimum.
>
> **[14:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=879)** For half, they return the value that falls right in the middle of the range, with an equal number of values above and below, also known as the median.
>
> **[14:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=891)** Here, they happen to be the same, but the third percentile, inverse distribution for rabbits using a continuous model is four plus change.
>
> **[15:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=904)** And you can see that this value was interpolated.
>
> **[15:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=907)** There is no rabbit with 4.002 vaccinations.
>
> **[15:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=912)** The same percentile using a discrete model returns a six.
>
> **[15:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=917)** And this is the closest value from the existing ones that is higher than the one generated by the continuous model.
>
> **[15:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=926)** This is Bon bon's number of vaccinations.
>
> **[15:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/ordered-set-functions?u=76281980&t=930)** Well, that wasn't that bad, or was it?

> [!info]- Semantic Content
>
> **Env Vars:** sql (8), sum (5), rank (5), percent_rank (5), concat (4)
> **Code Keywords:** function (10), let (7), throw (1), class, (1)
> **CLI Commands:** make (3), find (2), cat (2), mysql (1)
> **Definitions:** is a  (2), is an  (1), known as (1)
> **Analogies:** for example (2), think of it as (1)
> **SQL:** group by (1), order by (1)
> **Warnings:** note that (1), caution (1)
> **Versions:** 4.002 (1)

#### Grouping sets
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=1)** - [Instructor] A very common data analysis requirement is to present data in multiple aggregation levels.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=8)** For example, how many animals do we have per species and breed, only per species, and overall?
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=17)** Oftentimes, these aggregation levels are temporal in nature.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=21)** What's our annual, quarterly, monthly, weekly, daily, hourly, and secondly revenue?
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=28)** There are several ways we can achieve this.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=31)** We can use subqueries, window functions, and even set operators.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=36)** But there's an even better way, one that unfortunately I rarely see used.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=45)** We need to write a query to show the number of annual, monthly, and overall adoptions.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=52)** Let's start with an Eve approach by writing three separate queries, one that groups by year and month, one that groups only by year, and one that counts all adoptions overall.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=66)** Typically, when we write queries that group by the whole table, we do so by simply omitting the group by clause.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=74)** Did you know it's only a shortcut?
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=77)** The correct way is to specify group by with empty parentheses.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=83)** And soon, you will see why this is very useful.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=87)** If we try to union these queries and execute, we get an error that states all queries used in set operators must have the same number of columns.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=97)** Makes sense.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=98)** For the annual adoption, we need a placeholder for month.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=102)** And for the grand total, we need one for both month and year.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=107)** If I try to use a string like all months and all years, we'll encounter another error, a data type mismatch.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=116)** With set operators, the first query is the one that determines the data types and the aliases.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=124)** Since month is an integer, it is not compatible with the string all months.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=130)** And I guess by now, you see where I'm going with this.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=134)** Year and month are missing information for the higher level aggregates.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=140)** And the correct placeholder should be null.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=143)** Remember, I told you that null isn't a value?
>
> **[2:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=147)** Null, theoretically, has no inherent data type.
>
> **[2:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=152)** Let's use null placeholders and execute, and this time it works.
>
> **[2:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=158)** This solution may seem reasonable enough for this simple case, but what if the source data isn't a single table, but a huge combination of complex joins between 50 tables and multiple filter predicates on top?
>
> **[2:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=174)** Can you think of a way to shorten the solution?
>
> **[2:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=178)** Pause the video for a minute and think about it.
>
> **[3:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=184)** With clause to the rescue.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=187)** The aggregation levels we use here are hierarchical.
>
> **[3:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=191)** We can encapsulate the query that groups by year and month in a with clause and use that as our starting point.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=201)** The second aggregate level can be built on top of the first one.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=206)** Because year and month are in a hierarchy, we can group by year on top of the group by year and month.
>
> **[3:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=215)** The same is true for grouping by the entire table.
>
> **[3:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=219)** And this syntax may look weird at first, but I promise you it's valid and correct.
>
> **[3:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=226)** The union technique is valid, but it's neither efficient nor scalable or convenient.
>
> **[3:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=234)** The queries can become very long as more aggregate dimensions are needed.
>
> **[3:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=238)** And SQL offers a much better way to do this, which is called grouping sets.
>
> **[4:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=246)** Grouping sets allow us to specify multiple grouping levels and grouping expressions in a single query without the need to repeat anything.
>
> **[4:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=258)** And it really puzzles me that very few developers use it, although it's extremely powerful, performs better in most cases, makes the code clearer and more concise, and has been around since the days of ANSI SQL 99, although not all vendors supported it since its inception.
>
> **[4:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=280)** Most of my students tell me they've never even heard of it.
>
> **[4:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=284)** And I can count on one hand the number of times I saw it used in production code.
>
> **[4:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=291)** The syntax can be slightly confusing at first, so let's try to clarify it with the best way that I know, a code example.
>
> **[5:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=301)** It would be helpful to think of the standard group by as a special case of grouping sets.
>
> **[5:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=308)** Let's copy our three grouped queries and change them to use the grouping sets syntax.
>
> **[5:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=315)** All we need to do is add the keyword grouping sets and a set the parentheses around the grouping expressions.
>
> **[5:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=324)** The query that counted all adoptions now uses a single grouping set.
>
> **[5:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=331)** This is the equivalent of a query without a group by.
>
> **[5:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=335)** Same goes for the query that groups by year.
>
> **[5:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=339)** For the query that groups by year and month, we need to be more careful.
>
> **[5:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=344)** Since it has two grouping expressions, we must make sure they are treated as a single grouping element.
>
> **[5:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=352)** And to do that, we must add a second set of parentheses.
>
> **[5:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=358)** The outer parentheses are part of the grouping set syntax.
>
> **[6:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=362)** Their inner one has a more profound meaning.
>
> **[6:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=366)** And to demonstrate it, let's duplicate the query, remove the inner parentheses, execute both, and you can see that the results are different.
>
> **[6:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=378)** Only a set of parentheses are missing, and the results are completely different.
>
> **[6:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=384)** Look at these results for a minute and see if you can figure out what's going on.
>
> **[6:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=392)** The query on the left treats year and month as a single grouping set.
>
> **[6:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=399)** This is the equivalent of our original query that did a group by year and month.
>
> **[6:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=406)** But without the parentheses, each expression is treated as a separate independent grouping set.
>
> **[6:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=415)** And this is the equivalent of two queries, one that groups by year and another that groups by month, and you can think of them as if they are unioned together.
>
> **[7:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=429)** And this is the power of grouping sets.
>
> **[7:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=434)** Unlike group by and a list of expressions, which always defines a single grouping set, grouping sets allows us to define multiple different grouping sets at once.
>
> **[7:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=448)** So to get our monthly, annual, and overall aggregates, we can list them all separated by commas inside the grouping sets clause.
>
> **[7:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=461)** And this gives us the grand total, an annual total for each year, and the monthly totals all at once and without repeating anything.
>
> **[7:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=476)** Amazing, isn't it?
>
> **[7:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=478)** Don't answer.
>
> **[7:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=479)** It's a rhetorical question.
>
> **[8:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=482)** It gets even better.
>
> **[8:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=484)** Grouping sets are not limited to related or hierarchical expressions.
>
> **[8:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=490)** For example, group by year of adoption date and by adopter email, piece of cake.
>
> **[8:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=498)** Here are the number of animals each adopter has adopted and the annual number of adoptions all at once.
>
> **[8:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=507)** One more example, select species, breed, and count(*) from animals, group by grouping sets, species, breed, and overall.
>
> **[8:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=518)** The query returns the number of animals per species, per breed, and overall, duh.
>
> **[8:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=526)** Can you see the issue with the results?
>
> **[8:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=530)** Let me add an order by and execute again, just to make it more obvious.
>
> **[8:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=535)** Pause the video for a minute and see if you can spot the issue.
>
> **[9:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=544)** We have two rows with null species and null breed, one with a count of 100, and one with a count of 68.
>
> **[9:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=555)** One of these rows represents the grand total of all animals, and the other one represents only the non-breed animals of all species.
>
> **[9:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=568)** Here, it's not hard to guess which one's which.
>
> **[9:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=571)** The null breed came from the source table and represents non-breed animals.
>
> **[9:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=577)** The other null came from the empty grouping sets and represents all breeds.
>
> **[9:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=585)** So, how can we tell them apart?
>
> **[9:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=588)** In this tiny query and dataset, it's really not hard to guess.
>
> **[9:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=592)** It won't be as obvious for more complex queries.
>
> **[9:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=596)** And what if we need to replace the nulls with the string all, for example?
>
> **[10:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=603)** Coalesce species all works, as species doesn't allow nulls to begin with.
>
> **[10:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=610)** If there's a null for species, there's no doubt what it means.
>
> **[10:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=614)** It can only come from the grouping sets.
>
> **[10:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=618)** But for breed, it isn't the case.
>
> **[10:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=621)** Both the null for all breeds and the one for non-breeds will be replaced with an all.
>
> **[10:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=627)** An all is an all is an all is an all, but don't worry.
>
> **[10:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=633)** There is a way.
>
> **[10:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=635)** SQL has a special function just for that.
>
> **[10:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=640)** The grouping function for an expression returns a one for a row where that expression is an all and zero if it is not.
>
> **[10:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=652)** First, let's add it to the select list and execute, and you can see that it returns one for the grand total.
>
> **[11:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=660)** And we can now use that to distinguish between the two types of nulls with a conditional expression.
>
> **[11:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=668)** Case when grouping breed equals one, then all else breed.
>
> **[11:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=675)** And this will maintain the original null for non-breed animals.
>
> **[11:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=681)** Pretty neat, right?
>
> **[11:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=683)** Don't answer.
>
> **[11:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=684)** It's a rhetorical question.
>
> **[11:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=687)** I wish we had unlimited time, as there's a whole lot more to grouping sets.
>
> **[11:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=692)** And if you would like to see a course dedicated to aggregations, including many more aspects of grouping sets, let me know, you know where.
>
> **[11:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=702)** I hope this tiny bite of grouping sets made you hungry for more.
>
> **[11:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=707)** I'm going to stop here, or my editor will make sure I'm not around for the next course.
>
> **[11:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=712)** Will you ever use the union technique again?
>
> **[11:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=716)** Don't answer.
>
> **[11:57](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/grouping-sets?u=76281980&t=717)** It's a rhetorical question.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this. (2), function (2), type. (1), case, (1)
> **Definitions:** is an  (5), is called (1), is a  (1)
> **Env Vars:** sql (3), ansi (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (3)
> **Speakers:** - [instructor] (1)

#### Challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-2?u=76281980&t=1)** - [Instructor] Your last challenge for this course is to write a query that returns a statistical report about vaccinations.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-2?u=76281980&t=8)** The report should include the total number of vaccinations for several dimensions.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-2?u=76281980&t=14)** How many were done and each year for each species, for each species per year, by each staff member and by each staff member per species.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-2?u=76281980&t=28)** And to make it a bit more interesting, let's throw in the latest vaccination year for each of these groups as well on top of the count.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/challenge-2?u=76281980&t=38)** You'll find their requirements, expected results and some helpful tips and the code file, good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** let (1), throw (1)
> **Speakers:** - [instructor] (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=1)** - [Instructor] Like always, I'll start with the from clause.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=4)** Obviously I need the vaccinations table and since I need the staff member's first and last name, let's call them vaccinators.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=14)** I'm going to need to join vaccinations to persons based on email.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=19)** Let's execute just for good measures and move on.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=24)** I need to group by multiple dimensions, so guess which feature I'm going to use.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=31)** From here, it's just a matter of following the required grouping sets as they are spelled out.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=38)** Empty parentheses will give us the grand total.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=42)** To get the annual total, I'll add year of vaccination time.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=47)** To get species, well you guessed it.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=51)** For the combination of year and species, I need both expressions in parentheses.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=57)** Next are the vaccinators.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=60)** Here I hope you did not fall for the trap that I set for you and used first name and last name to identify vaccinators.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=71)** With this data set, it's pretty obvious that the email addresses consist of first and last name at [animalshelter.com](https://animalshelter.com).
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=80)** So the result is not going to change if I use either email or the actual name.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=87)** But I can't rely on that.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=90)** What if someday the shelter hires another person by the same name of Ashley Flores and assigns her the email ashleyflores2@[theanimalshelter.com](https://theanimalshelter.com)?
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=103)** This solution must be logically correct and continue to work.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=107)** I cannot rely on some empirical pattern which happens to be true today, and I've witnessed applications fail miserably with devastating results because of similar assumptions.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=121)** Remember, always check the schema and look for the primary key.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=127)** The key for persons is email.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=130)** Therefore email is the only valid identifying attribute.
>
> **[2:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=136)** Next are vaccinator and species.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=140)** I just need to remember to place both of them in parentheses.
>
> **[2:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=145)** Now I'm ready to move on to the select list.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=148)** I'll start with the obvious expressions.
>
> **[2:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=151)** Year of vaccination time, species, email, first name, last name, and count star as the number of vaccinations.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=160)** These are the grouping expressions and an aggregate count.
>
> **[2:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=166)** Here comes the second trap.
>
> **[2:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=168)** The requirement asked for the latest vaccination year per group.
>
> **[2:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=173)** But we already have vaccination year both as a grouping expression and as a select expression.
>
> **[3:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=182)** How does it make sense as an aggregate expression at the same time?
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=187)** Well, it does.
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=189)** To show you why, let's switch to a simpler query for a minute.
>
> **[3:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=194)** Select species and count from animals group by species.
>
> **[3:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=200)** Here, species is the grouping expression and a select expression.
>
> **[3:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=205)** Can I put it as an aggregate expression too?
>
> **[3:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=209)** Let's try.
>
> **[3:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=211)** Add max species and execute.
>
> **[3:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=215)** Bam.
>
> **[3:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=216)** Works like a charm.
>
> **[3:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=219)** Now for this query it's nonsense, of course.
>
> **[3:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=222)** With or without max, it's the same species per group.
>
> **[3:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=227)** But that's only because this query only groups by one grouping set.
>
> **[3:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=234)** My point is that this syntax is legit and there are no logical issues with it.
>
> **[4:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=241)** Point proven.
>
> **[4:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=243)** Back to our query.
>
> **[4:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=245)** Max year vaccination time is a valid expression in this context.
>
> **[4:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=251)** And yes, sure.
>
> **[4:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=252)** For the annual groups, it won't make much sense and will repeat the same value as the non-aggregate year, but that's not going to be the case for all other grouping sets.
>
> **[4:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=266)** Let's try to execute it and oops.
>
> **[4:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=269)** Error 8120.
>
> **[4:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=271)** Okay, first name is invalid.
>
> **[4:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=273)** It's not one of the grouping set and with SQL Server, I must add a dummy aggregate to satisfy the syntax root.
>
> **[4:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=281)** Execute and now it almost works.
>
> **[4:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=286)** All that is missing is handling the nulls and to take care of the order by.
>
> **[4:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=292)** I'll add a coalesce to replace nulls with the strings from the requirements.
>
> **[4:57](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=297)** Year with all years.
>
> **[4:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=299)** Species with all species.
>
> **[5:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=302)** Email with all staff, and both first and last name with an empty string.
>
> **[5:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=307)** Oh great.
>
> **[5:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=309)** A new error.
>
> **[5:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=310)** Conversion failed for years to integer.
>
> **[5:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=313)** Right, we just saw that before.
>
> **[5:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=316)** The year function returns an integer, so replacing it with the string all years doesn't make sense.
>
> **[5:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=322)** No problem.
>
> **[5:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=323)** I'll explicitly cast it to a VARchar.
>
> **[5:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=326)** Year is only four characters but I must make sure that the length will be enough for the replacement string as well.
>
> **[5:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=333)** So VARchar 10 will do.
>
> **[5:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=336)** Let's execute and whew, no error this time.
>
> **[5:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=340)** But hold on.
>
> **[5:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=343)** Something is seriously wrong.
>
> **[5:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=346)** Look at the rows with a null email.
>
> **[5:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=349)** Those are supposed to be the grand totals for all vaccinators.
>
> **[5:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=354)** But what's up with the staff member names?
>
> **[5:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=359)** Who is Wayne Reyes?
>
> **[6:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=362)** I know who Wayne Carter is but we have no Wayne Reyes, and we have both Wanda Myers and Wanda Reyes?
>
> **[6:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=372)** I don't remember them either.
>
> **[6:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=374)** You're welcome to check the staff table.
>
> **[6:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=376)** They don't exist.
>
> **[6:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=378)** Has SQL Server completely lost its mind?
>
> **[6:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=383)** It turns out that now our seemingly harmless dummy aggregates are not so harmless after all.
>
> **[6:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=391)** While the database uses a null for expressions that represent a group like email, it doesn't do it for first name and last name.
>
> **[6:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=402)** We know that email determines first name and last name but the database doesn't.
>
> **[6:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=409)** As far as the database is concerned, these are still valid aggregate expressions and it doesn't care that we only put the max there to overcome the syntax limitation.
>
> **[7:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=421)** It doesn't know that we didn't really mean it to be a max.
>
> **[7:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=427)** We assumed each group will only have one value for first and last name which would have been true for a group by query.
>
> **[7:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=436)** But that's not true for grouping sets.
>
> **[7:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=440)** And yes, Wayne Reyes doesn't exist.
>
> **[7:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=443)** For the grand total row that treats the entire table as a single group, Wayne happens to be the first name with the largest dictionary sort order value and Reyes happens to be the largest last name.
>
> **[7:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=458)** SQL Server gladly retrieves both for us as we requested.
>
> **[7:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=464)** The same thing happened with Wanda.
>
> **[7:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=466)** In 2017, Myers happened to be the largest last name.
>
> **[7:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=471)** But in 2018 it was Reyes.
>
> **[7:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=474)** Wanda was still the largest first name.
>
> **[7:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=478)** The coalesce that I added for first name and last name is incorrect.
>
> **[8:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=484)** They will never be null as they are defined as not null in the person's table and they are not part of the grouping sets so they cannot be null because of that.
>
> **[8:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=497)** What I should do is only return max first name and max last name for rows that represent specific persons' specific emails, not for ones that treat all of them as a group.
>
> **[8:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=514)** I could use a conditional expression which will test if email is null as email is the key.
>
> **[8:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=521)** However, that may not work in other cases where the grouping set values can be null and the correct way to deal with it is to use the grouping function.
>
> **[8:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=534)** When it's zero for email, I can safely return max first name and last name.
>
> **[9:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=540)** But when it's one, I know that the row is not for a specific person.
>
> **[9:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=546)** But for a group, only these rows will need to return an empty string.
>
> **[9:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=555)** Last thing is to deal with the order by.
>
> **[9:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=558)** Order by year, species, first name and last name works like a charm.
>
> **[9:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/solution-2?u=76281980&t=563)** And with that, I conclude this solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (2), continue (1), switch (1), try. (1)
> **CLI Commands:** make (4)
> **Env Vars:** sql (3)
> **URLs:** [animalshelter.com](https://animalshelter.com) (1), [theanimalshelter.com](https://theanimalshelter.com) (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Recursions and Cursors

#### Recursions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=1)** - [Instructor] So far we've used many WITH clauses.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=4)** They helped us break down complex tasks, shorten queries, but there's much more to them than that.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=11)** WITH clauses pack a powerful and unique ability to process recursions without resorting to any type of imperative solutions.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=21)** To create a recursive WITH clause, we must specify our intent using the WITH recursive keyword, the recursive query definition consists of two parts.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=33)** The first is a standalone, ordinary select query called the anchor.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=39)** The anchor defines the initial set, the starting point for the recursion.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=45)** The anchor query is followed by either a union all or a union distinct set operator, which in turn is followed by the recursive query itself.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=57)** The recursion is indicated by referencing the WITH clause name within the query.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=64)** This may seem counterintuitive at first, as typically, we cannot reference an object within its own definition.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=73)** As for the processing, first, the anchor query is evaluated.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=78)** Here, the full bar table has one row with A and one for foo and bar respectively and this is our anchor.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=88)** And with that, the anchor query has completed its job.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=94)** The anchor set moves to the recursive query.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=98)** The recursive query is evaluated using the anchor set as its source, which produces a new result set.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=107)** For example, a row with B and two.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=110)** The original anchor set is now placed in a buffer, a temporary holding place for intermediate results.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=119)** Then you lead generated results set, B two, takes the place of the original anchor.
>
> **[2:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=126)** And now, the recursive query is evaluated once again, but this time using B two as its source data.
>
> **[2:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=135)** This in turn results in a third set, the row C three.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=141)** The previous row, B two, is added to the buffer and the most recent one takes its place.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=148)** And that's pretty much the whole deal.
>
> **[2:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=151)** The process repeats until one of the following conditions are met.
>
> **[2:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=156)** Either the recursive query results in an empty set or the maximum recursion depth is reached or the threshold time limit is exceeded, depending on the database that you're using.
>
> **[2:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=170)** The buffer now contains the full result set of our recursive WITH clause.
>
> **[2:57](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=177)** Some of the common use cases for recursive WITH are to generate series, concatenate strings and traverse hierarchical data, bill of materials, organizational hierarchies and other graphs.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=193)** As always, best explained with a code example.
>
> **[3:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=198)** Let's begin with generating a series.
>
> **[3:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=202)** Before we do it the hard way, let me introduce you to one of the postgres unique and useful functions.
>
> **[3:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=209)** Generate series is a set function, a series of rows with expressions of varying types and intervals.
>
> **[3:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=217)** Let's generate a row with a date expression for every day of 2019.
>
> **[3:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=223)** Select day from generate series, start date and date, interval, alias.
>
> **[3:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=231)** Done, piece of cake.
>
> **[3:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=234)** SQL server doesn't have an equivalent function, but with it, we get the benefit of practicing recursions.
>
> **[4:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=242)** First, let's create the anchor.
>
> **[4:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=244)** As static query as a starting point and we'll use the first day of 2019, cast to a date datatype.
>
> **[4:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=254)** Remember, the keyword recursive isn't supported in SQL server.
>
> **[4:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=259)** We won't be generating any duplicates, so we can use union all.
>
> **[4:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=264)** The recursive query uses the anchor and adds one day to it.
>
> **[4:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=269)** Every recursion we'll use the previous result until the stop condition is met when the date ad will reach January 1st, 2020.
>
> **[4:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=279)** At that point, the where will evaluate to false and empty set will be produced and their recursion will stop.
>
> **[4:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=287)** Well, at least we hope.
>
> **[4:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=290)** Let's execute and oops, here is the first wall of the default settings.
>
> **[4:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=296)** SQL servers maximum recursion depth is a hundred by default.
>
> **[5:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=301)** And since we need to generate 365 rows, we must add a query option hint to allow a recursion depth of 365.
>
> **[5:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=312)** In postgres, we can use the same technique.
>
> **[5:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=316)** Let's see, here's the postgres version, execute and it generates the same result, great.
>
> **[5:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=323)** There is a fundamental difference between SGL server's date add function and the equivalent expression in postgres.
>
> **[5:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=332)** Can you see it?
>
> **[5:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=334)** I don't mean the syntax, think fundamental.
>
> **[5:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=337)** Pause the video for a minute and see if you can spot the fundamental difference.
>
> **[5:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=344)** The difference, which we've already mentioned in this course is the interval data type.
>
> **[5:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=352)** The arguments for SQL servers date add function are the date part and integer and the date.
>
> **[6:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=361)** The date add operation generates an interval under the covers by multiplying the integer by the date part.
>
> **[6:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=371)** Only an interval makes sense as an additive argument to a temporal type.
>
> **[6:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=376)** Logically, we can't add an integer one to a date.
>
> **[6:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=381)** The same reason we can't multiply a string by pie or add two pounds to 30 degrees.
>
> **[6:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=388)** There are simply incompatible types.
>
> **[6:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=391)** We can add a day, a millisecond or a gazillion years to a date.
>
> **[6:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=396)** These are all intervals.
>
> **[6:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=399)** Intervals represent a range on the time continuum and integers represent a point on the number's axis.
>
> **[6:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=407)** They live in different universes.
>
> **[6:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=410)** SQL server doesn't support interval types.
>
> **[6:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=415)** Postgres adds day and an interval expression.
>
> **[6:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=419)** Clean, elegant, correct.
>
> **[7:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=422)** If you're thinking that this is a minor difference and asking yourself, if I lost my mind and why I'm wasting your time, trust me, it's not minor at all.
>
> **[7:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=434)** An interval data type can open doors to solving complex temporal logic easily and efficiently.
>
> **[7:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=441)** Let's do another example.
>
> **[7:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=444)** This time with our old familiar adjacency list.
>
> **[7:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=448)** Don't worry, not an employee hierarchy.
>
> **[7:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=451)** I promised and I will keep my work.
>
> **[7:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=454)** Here we have a table that contains URLs where each one points to another.
>
> **[7:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=460)** We can prevent first level sickly references with a check constraint, but not much more.
>
> **[7:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=467)** Just so you don't think I'm completely biased, I'll admit that relational databases do not excel, pun intended, in representing complex graph centuries.
>
> **[8:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=480)** Let's insert a few rows and select star from web links.
>
> **[8:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=486)** You want points to U three and U nine.
>
> **[8:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=489)** In turn, U three points to U two, four, five and nine.
>
> **[8:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=493)** Well, you get the idea.
>
> **[8:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=495)** Our task is to traverse the graph starting with U four.
>
> **[8:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=500)** Let's create the crawler WITH clause.
>
> **[8:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=504)** And first comes the anchor member.
>
> **[8:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=507)** The larger than character will be our symbol for the root node.
>
> **[8:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=512)** U four is our starting URL and I'm going to add a level, which starts with the integer zero.
>
> **[8:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=519)** The ladder is going to be useful for filtering stop conditions and just for fun, you'll see in a minute, what I mean.
>
> **[8:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=527)** We must be careful to cast the datatypes as they are determined by the anchor member for the rest of the query.
>
> **[8:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=535)** And we often use literal constants as anchor expressions.
>
> **[8:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=539)** So remember to specify the data types or it will bite you.
>
> **[9:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=545)** Union all we'll do here as well, since we're not going to generate any duplicates.
>
> **[9:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=550)** And lastly, the recursive member joins back to the original table and level plus one advances the level counter.
>
> **[9:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=559)** We must join back to the original table as the query only sees the output of the previous recursion.
>
> **[9:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=567)** This will often be the case, so remember this.
>
> **[9:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=571)** Let's execute and it works like a charm.
>
> **[9:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=576)** If we want to have a bit more fun, we can use the level indicator with a string function to draw a visual representation of the hierarchy in the result.
>
> **[9:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=586)** Zero dashes for level zero, one dash for the first, two for the second.
>
> **[9:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=591)** Pretty cool, isn't it?
>
> **[9:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/recursions?u=76281980&t=593)** Don't answer, it's a rhetorical question.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (5), type. (2), static (1), default. (1)
> **Env Vars:** sql (5), sgl (1), url (1)
> **Definitions:** is a  (5)
> **CLI Commands:** node (1)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### The cursors curse
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=0)** - [Instructor] I said once or twice before, that row processing order doesn't pose any significant logical implications.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=9)** And that for our humble human brains, it is more intuitive to think of it as if it was a row by row operation.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=17)** That's why I explained the processing of joins, where having and select all as if they were processed row by row.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=26)** It was mostly for convenience sake.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=29)** There's no row order until the order by mutilates are set and turns it into a cursor.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=36)** So any discussion of row order before that isn't even relevant.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=42)** Until Dr. Codd invented the relational model, data didn't exist.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=47)** Just kidding.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=48)** I'm trying to see if you're paying attention.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=51)** Until Dr. Codd invented the relational model.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=54)** Data was processed using a paradigm known as sequential access methods, or uncle SAM for short.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=62)** Sequential access methods are widely used even today in many programming languages.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=68)** Unfortunately, many SQL developers are still stuck in this mindset.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=74)** And the reasons may surprise you.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=77)** In the early days of computing, sequential access was mandated by available hardware.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=83)** Punched cards and magnetic tapes were linear in nature.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=88)** Punched cards had to be physically ordered and magnetic tapes were accessed using physical pointers to regions on the tape.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=97)** And this mindset is still prevalent today in many surprising areas.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=103)** One of them being the use of surrogate keys or enumerators to access rows.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=109)** Yes, this mindset dates all the way back to the age of spinning magnetic tapes.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=116)** And developers were so used to this processing paradigm that they found the radically contrasting declarative set based relational model, extremely hard to grasp and accept.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=130)** Many insisted and still insist on using the old and familiar sequential techniques.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=137)** Even though they are in sharp contrast to the very essence of the relational model and SQL.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=144)** And unknowingly, they are throwing away many of its benefits.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=149)** It is a known human conditioning.
>
> **[2:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=152)** We always try and use new technologies exactly the same way we use the previous ones.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=159)** That's why we still see occasionally, an electric vehicle pull into a gas station.
>
> **[2:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=165)** And that's the reason that early computer users tried to use wipe out or tip X for you non-Americans on their monitors to delete errors.
>
> **[2:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=176)** They are not stupid.
>
> **[2:57](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=177)** They are just conditioned and we all are.
>
> **[3:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=182)** And that my friend, is the main reason that SQL allows us not only to return cursors instead of datasets, but also to process them that way.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=193)** Row by agonizing row, instead of the lovely relations that they are.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=201)** After the order by clause is processed, the set becomes a cursor.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=206)** So please don't call it an ordered set.
>
> **[3:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=209)** That's a contradiction in terms.
>
> **[3:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=212)** Here is a query that returns a cursor and so far, nothing special about this cursor.
>
> **[3:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=217)** It can be returned to the client application using the standard APIs.
>
> **[3:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=222)** But if that's not bad enough, SQL allows us to create a cursor object on the server using the declare cursor statement.
>
> **[3:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=234)** The cursor object doesn't return any data to the client.
>
> **[3:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=238)** Well, not yet.
>
> **[4:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=240)** Oh, no.
>
> **[4:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=241)** Instead we open the cursor object server side , place a pointer to a specific row within the cursor.
>
> **[4:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=250)** And we typically start with the first one and then retrieve the values from that row into scalar variables.
>
> **[4:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=258)** Yes, you heard me right.
>
> **[4:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=261)** Imperative, scalar based logic in SQL.
>
> **[4:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=265)** God forbid!
>
> **[4:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=267)** These variables can be returned to the client or further processed on the server.
>
> **[4:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=272)** And once we are done with the first row, we can fetch the next one.
>
> **[4:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=277)** And this process repeats until the cursor is closed.
>
> **[4:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=281)** And sometimes this is what's left behind.
>
> **[4:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=285)** Just in case it wasn't clear.
>
> **[4:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=288)** I'm not a fan of cursors.
>
> **[4:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=290)** I do realize they have their place and can be useful for administrative tasks or in rare cases as a last resort solution.
>
> **[5:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=301)** This course is about SQL processing.
>
> **[5:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=304)** Cursors are for imperative fans.
>
> **[5:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=308)** Therefore I'm not going to do a cursor code demo, nor am I trying to cover the different options that most databases offer.
>
> **[5:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=317)** There are just way too many of them.
>
> **[5:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=320)** But I will draw your attention to an aspect of cursors that many don't consider, but should.
>
> **[5:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=329)** And that is isolation and concurrency.
>
> **[5:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=334)** Here is McCursy with its first row fetched.
>
> **[5:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=338)** Out of the blue, literally another transaction comes along and inserts a new row into Foo Bar.
>
> **[5:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=346)** And now McCursy tries to fetch the next row.
>
> **[5:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=350)** What do you think?
>
> **[5:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=351)** Which row should be fetched?
>
> **[5:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=353)** 1.5 Z or two Y.
>
> **[5:57](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=357)** I want ask you to think about it and the answer is it depends.
>
> **[6:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=363)** It depends on many things.
>
> **[6:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=365)** And first and foremost is the implementation of this specific database of your choice.
>
> **[6:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=373)** Let's use this opportunity to show you a section from the ANSI SQL standard that should horrify you.
>
> **[6:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=379)** Take a minute and read it.
>
> **[6:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=384)** The two phrases that should freak you out are implementation defined, and implementation dependent.
>
> **[6:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=392)** With SQL server, these are called static and dynamic cursors.
>
> **[6:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=397)** They too have variants and some funky behavior.
>
> **[6:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=401)** PostgreSQL supports only insensitive cursors.
>
> **[6:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=406)** And my SQL supports only as sensitive cursors.
>
> **[6:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=410)** Oracle rightfully considers cursors not to be part of SQL, but that of PL=SQL it's procedural sibling.
>
> **[6:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=419)** And that's just one aspect.
>
> **[7:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=422)** I have hours of horror stories to tell you about cursors, but don't worry.
>
> **[7:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=427)** Not now.
>
> **[7:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=429)** I have witnessed extremely creative ways of cursor abuse, which deserve a course or maybe even horror movie.
>
> **[7:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=438)** Cursors are a Pandora box.
>
> **[7:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=441)** I can recommend that you stay away from them if you can.
>
> **[7:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/the-cursors-curse?u=76281980&t=445)** And in most cases you can.

> [!info]- Semantic Content
>
> **Env Vars:** sql (11), sam (1), ansi (1)
> **Code Keywords:** delete (1), let (1), static (1)
> **Definitions:** is a  (2), known as (1)
> **Versions:** 1.5 (1)
> **UI Navigation:** open the (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)


### 6. Conclusion

#### Conclusion
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=0)** - [Instructor] Oh, wow, another chapter of our SQL adventure is ending.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=6)** We learned about subquery processing and the extremely powerful set operators.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=11)** Don't worry too much about the subtleties of all versus distinct.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=15)** You'll likely only use these for unions, which is what most databases support anyway.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=22)** We learned how and when to join tables to themselves, how to use non-equality join qualification predicates, and how lateral joins are processed.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=32)** I hope you enjoyed the challenge of finding breeding candidates and I kindly ask you again to consider donating to your local animal shelter.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=43)** We learned how to use grouping sets, and I can tell you, I was blown away by it when I first learned about this feature.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=51)** I hope you are, too.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=53)** Many of you will use the string ordered set functions and don't worry if the hypothetical and inverse distribution ones aren't fully clear yet.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=63)** It takes some time and practice.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=66)** We moved on to recursive WITH clauses and these also take some time to get used to but can save you from the need to write evil imperative code.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=77)** And lastly, my favorite feature of SQL: cursors.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=81)** Nothing much to say about these.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=83)** Just be careful.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=85)** If you already have cursors in your database, it might be a good idea to review if they're really necessary, and you may be better off without them.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=96)** In case my subtle teasers throughout this course were not enough, I will once again offer my sincere and unbiased recommendation not to miss my "Window Functions" course.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=108)** It's a challenging course.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=110)** It's fast paced and includes much more difficult challenges.
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=114)** Now that you've completed both query processing courses, Window Functions are the natural next step to advance your SQL skills.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=123)** They are amazingly powerful, but they, too, take some effort and practice to master.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=130)** So, be patient.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=133)** I have another course on LinkedIn Learning that received less attention than the rest as it is for a specific product and version.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=141)** This was my first course for LinkedIn Learning, and while it focuses on MySQL 8.0, it is valuable for other databases, too.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=150)** The first chapter in that course is about window functions.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=155)** It's only 30 minutes long, and you can watch it as an introduction before committing to the full "Window Functions" course.
>
> **[2:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=162)** The second chapter is about standard and recursive common table expressions or, as we now correctly call them, WITH clauses.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=171)** And the third is about lateral derived tables.
>
> **[2:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=175)** I think they can be great for you to review and practice these features.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=179)** I also use a different demo database which is always a good practice.
>
> **[3:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=186)** LinkedIn offers many more courses for you to choose from, and I'm not going to mention any specific ones.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=192)** But I do recommend that you look for those that focus on foundations and theory, not just the syntax.
>
> **[3:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=200)** And stay away from those that promise instant results.
>
> **[3:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=205)** The zero to hero in two hours kind?
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=208)** You know what I mean.
>
> **[3:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=210)** Video courses are great, but I always like to complement my learning with books.
>
> **[3:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=216)** For learning foundations, I highly recommend Joe Celko's and Chris Date's books.
>
> **[3:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=223)** Joe's books are an easy and fun to read.
>
> **[3:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=226)** They flow well, they're spiced with humor, and they cover foundational aspects in a way few authors do.
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=233)** If you haven't read any foundational SQL and relational model books, Joe's books are an excellent choice.
>
> **[4:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=241)** Chris Date's books go much deeper into theory and the mathematics of the relational model.
>
> **[4:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=248)** They are very deep, very thoughtful, but a harder read.
>
> **[4:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=253)** Those of you who prefer this style can start with Chris's books.
>
> **[4:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=258)** Others will find it easier to digest after they have some initial understanding of the relational model.
>
> **[4:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=265)** And last but not least is my first SQL teacher and mentor, the one and only Itzik Ben-Gan.
>
> **[4:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=273)** I owe a lot of what I know today to Itzik.
>
> **[4:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=276)** He is to blame for inflicting me with the SQL bug nearly a quarter of a century ago.
>
> **[4:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=282)** Itzik writes exclusively about T-SQL, SQL Server's dialect, but his books are a fountain of foundational knowledge.
>
> **[4:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=292)** They are methodological, deep, yet fun to read.
>
> **[4:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=296)** His challenges and quizzes will blow you away.
>
> **[4:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=299)** You can't go wrong with either, and even better is if you read all three.
>
> **[5:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=306)** Since I haven't solicited feedback enough so far, I'm going to do it again.
>
> **[5:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=311)** Unlike my in-person courses, which are not happening for obvious reasons these days, I can't see your reactions or talk to you directly, and I really miss it.
>
> **[5:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=324)** Please let me know what you think, what you liked, what you didn't like.
>
> **[5:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=329)** It's really important to me.
>
> **[5:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=331)** I genuinely care about your experience and your success in the relational data universe.
>
> **[5:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=337)** I take your opinions seriously and I use that to improve future courses.
>
> **[5:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=342)** The Q and A section is a great place to communicate.
>
> **[5:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=346)** And if you look at the Q and A sections of my other courses, you'll see that I answer every single comment.
>
> **[5:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=354)** Even just a hi or a thank you makes me happy.
>
> **[5:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=358)** So why don't you make me happy?
>
> **[6:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=361)** And with that, once again, we say goodbye, but not for long. (upbeat uplifting music) I'm sure we'll get a chance to say another hi soon enough.
>
> **[6:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=370)** Until then, my friend, be safe and healthy and don't forget to adopt a shelter animal, and there's no better day for that than today.
>
> **[6:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-2/conclusion?u=76281980&t=380)** Yours truly, Ami.

> [!info]- Semantic Content
>
> **Env Vars:** sql (8)
> **CLI Commands:** mysql (1), find (1), make (1)
> **Code Keywords:** from, (1), let (1)
> **Best Practices:** good practice (1), don't forget (1)
> **Versions:** 8.0 (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Ami Levin]]

## Resources

- Exercise files available

## Skills Covered

- SQL

## Path Context

### In [[Master SQL Development]]
← [[Advanced SQL- Logical Query Processing, Part 1]] | **3 of 8** | [[Advanced SQL – Window Functions]] →

## Appears In

- [[Master SQL Development]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)