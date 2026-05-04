---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: data-analysis-investigate-with-sql
url: "https://www.linkedin.com/learning/data-analysis-investigate-with-sql"
duration_minutes: 60
duration: 1h
level: Beginner
updated: 6/25/2025
learners: 300467
skills:
  - Data Analysis
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEW7lWItY5MAw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1682442844043?e=2147483647&amp;v=beta&amp;t=tN9bxL5mCKMSFV-uyBK2V-6bidoy53ohxPN0kiPVp70"
linkedin_topic: Data Science
learning_paths:
  - '[SQL Hands-On Practice](../../Paths/Data%20Science/Learning%20Paths/SQL%20Hands-On%20Practice.md)'
  - '[Advance Your Skills in SQL](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Skills%20in%20SQL.md)'
prev_courses:
  - '[Hands-On SQL Challenges- Test Your Knowledge](Hands-On%20SQL%20Challenges-%20Test%20Your%20Knowledge.md)'
  - '[SQL Hands-On Practice- Solve Business Problems](SQL%20Hands-On%20Practice-%20Solve%20Business%20Problems.md)'
next_courses:
  - '[SQL Hands-On Practice- Solve Business Problems](SQL%20Hands-On%20Practice-%20Solve%20Business%20Problems.md)'
  - '[Using SQL with Python](Using%20SQL%20with%20Python.md)'
path_nav: '[{"path":"SQL Hands-On Practice","position":7,"total":9,"prev":"Hands-On SQL Challenges- Test Your Knowledge","next":"SQL Hands-On Practice- Solve Business Problems"},{"path":"Advance Your Skills in SQL","position":3,"total":5,"prev":"SQL Hands-On Practice- Solve Business Problems","next":"Using SQL with Python"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/data-analysis
  - skill/sql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Analysis-%20Investigate%20with%20SQL.md)

![Data Analysis: Investigate with SQL](https://media.licdn.com/dms/image/v2/D560DAQEW7lWItY5MAw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1682442844043?e=2147483647&amp;v=beta&amp;t=tN9bxL5mCKMSFV-uyBK2V-6bidoy53ohxPN0kiPVp70)

# Data Analysis: Investigate with SQL

> Are you looking to enhance your skills in data analysis and become a valuable asset in today's data-driven business world? Learning SQL, the widely used language for managing relational databases, can be a game changer for you.In this course, you will learn the fundamental skills needed to navigate and analyze data effectively. Discover the basic structure of relational databases, how they work, a

> [LinkedIn Learning](https://www.linkedin.com/learning/data-analysis-investigate-with-sql) | 1h | Beginner | 300K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Why learn SQL today?](#why-learn-sql-today)
  - [What you should know](#what-you-should-know)
  - [Solve a crime with SQL](#solve-a-crime-with-sql)
- [**1. Starting the Investigation with SQL Query**](#1-starting-the-investigation-with-sql-query) (3 videos)
  - [Data analysis: First steps](#data-analysis-first-steps)
  - [SQL core concepts: Data types, tables, columns, and records](#sql-core-concepts-data-types-tables-columns-and-records)
  - [First query: Comments, aliases, and sorting](#first-query-comments-aliases-and-sorting)
- [**2. Filter Data for Refined Results**](#2-filter-data-for-refined-results) (4 videos)
  - [Adding criteria to SQL queries](#adding-criteria-to-sql-queries)
  - [Second query: WHERE clause, operators, date, and texts](#second-query-where-clause-operators-date-and-texts)
  - [Query composition: More operators for refining results](#query-composition-more-operators-for-refining-results)
  - [Third query: Operators and context understanding](#third-query-operators-and-context-understanding)
- [**3. Performing Manual Data Analysis**](#3-performing-manual-data-analysis) (2 videos)
  - [Logical deduction by observing results](#logical-deduction-by-observing-results)
  - [Crime-solving SQL analysis recap](#crime-solving-sql-analysis-recap)
- [**4. Exploring Related Table Data**](#4-exploring-related-table-data) (4 videos)
  - [Examining the evidence in related tables](#examining-the-evidence-in-related-tables)
  - [Fourth query breakdown: BETWEEN operator and date ranges](#fourth-query-breakdown-between-operator-and-date-ranges)
  - [Finding supporting evidence to align objectives](#finding-supporting-evidence-to-align-objectives)
  - [Fifth query breakdown: Using the IN and AND operators](#fifth-query-breakdown-using-the-in-and-and-operators)
- [**5. Conclusive Analysis for Data-Driven Action**](#5-conclusive-analysis-for-data-driven-action) (3 videos)
  - [Solving the case with data-driven insights](#solving-the-case-with-data-driven-insights)
  - [Project: The art of disguise](#project-the-art-of-disguise)
  - [Project: Solution walkthrough](#project-solution-walkthrough)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continue enhancing your SQL data-driven skills](#continue-enhancing-your-sql-data-driven-skills)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why learn SQL today?](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/delete-why-learn-sql-today?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/delete-why-learn-sql-today?u=76281980&t=0)** - The ability to leverage and act on data has made a powerful difference in today's business world. In this course, we'll learn how to think strategically as data analysts by using [SQL](../../Skills/Data%20Science/SQL.md) commands like SELECT, FROM, WHERE, ORDER BY, and LIMIT in order to solve the case of a stolen painting. Hi, I'm Walter Shields. Join me as we put on our detective hats to investigate the crime and crack the case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** sql (1), select (1), where (1), order (1), limit (1)
> **SQL:** select (1), where (1), order by (1)
> **Speakers:** - the (1)

#### [What you should know](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=0)** - [Instructor] Before we dive in, let me walk you through exactly what you need to know to succeed in this course. First, no background in coding, no database knowledge, not even a working definition of [SQL](../../Skills/Data%20Science/SQL.md). If you're curious, focused, and ready to learn by doing, you're exactly in the right place. Second, this course is designed with one clear goal, to help you learn SQL by solving a case, the theft of a valuable painting. Why a case? Because learning with a story gives every lesson a purpose. You're not just memorizing commands, you're investigating a mystery, and that's what real analysts do. They ask focused questions like, who did it? What happened? Where's the proof? Every SQL concept we cover is tied directly to that mission. Here's how the course is structured. In each lesson, I'll first show you a SQL query without explaining it yet. That's your cue to pause the video, type it yourself, and run it in the editor. Then, in the very next video, we'll go over that query line by line so you understand exactly how and why it works. This method helps you build real fluency, not just by watching, but by writing and thinking in SQL. You'll be using a tool called the WSDA SQL Editor, built specifically for this course.
>
> **[1:36](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=96)** It runs 100% in your browser. There's nothing to install and no setup required. It works on any device with an internet connection. Now, inside the Editor, you'll see a screen like this, a left panel with all your database tables, a center workspace where you'll write and run your queries, and a right panel where the Walter AI provides real time feedback on your SQL queries. Now, a quick heads up. The editor you see in most of the videos is the original version recorded in 2023, but, you now have access to the updated WSDA SQL Editor, which includes this cleaner layout, improved speed, and a powerful AI assistant. So even if the visuals look slightly different later, [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) assured you're using the latest and best version of the tool. Now, a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) on practice. Yes, you'll have access to every query in the exercise files, but I strongly encourage you to type them out yourself. That hands-on experience is what makes the learning stick. You'll also be using a built-in course notebook to track clues, write notes, and organize your findings, just like an analyst working a real case. And finally, don't go it alone. If you have questions along the way, drop them in the Q and A section. I respond personally and I'm here to help. That's it.
>
> **[3:12](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=192)** You are ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (8), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** sql (8), wsda (2)
> **Prerequisites:** install (1), setup (1)
> **Cross-References:** next video (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Warnings:** heads up (1)
> **Speakers:** - [instructor] (1)

#### [Solve a crime with SQL](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=0)** - [Instructor] Before we jump into writing our first query, I want to introduce you to a tool I built specifically for this course, the WSDA [SQL](../../Skills/Data%20Science/SQL.md) Editor. Think of this as your personal SQL lab. It's a space where you can practice, experiment, and learn without needing to install anything or set anything up. It works entirely on your browser, whether you're using a [Windows](../../Glossary/Service/Windows.md) PC, a Mac, a Chromebook, or [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). All you need is an internet connection. Let me walk you through what you'll see when you open it up at the following address. Now, starting with the left, the database schema section here. Now this panel shows you all the tables in our investigation database, like customer details, bank accounts, flight details, and more. Every table is like a spreadsheet. The name of the table is listed here, and when you click on the small arrow next to it, you'll see all the fields inside. For bank transactions, which I have open here, you can see the account number FK, bank transaction PK, the trans date, and so forth. Now, this is your reference guide. It helps you know what kind of information is available to query. You'll use this consistently as you write your SQL queries. Now in the center, which is the query editor,
>
> **[1:35](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=95)** this is where you'll be writing your SQL query. You can type right into this space and you'll see that it's designed for clarity, just enough room to focus without distractions. Right beneath the editor, you'll find the action buttons. You have your run query button and clicking on it executes whatever SQL code you've written. The results will show up right below in this area here. Now the Review My Query button, this is where the magic happens. When you click this button, your code is sent to Walter AI, your built-in SQL Assistant. It'll review your query and offer helpful personalized feedback, kind of like having a tutor sitting right next to you. You'll see that feedback appear to the panel on the right here. Now, this is a space where your feedback from Walter AI appears after each review, it might highlight something you can improve, explain a part of your query, or confirm that everything looks great. Now, this type of real time coaching helps reinforce what you're learning and builds your confidence as you go. In the next video, we'll write your very first query and start piecing together the crime. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (6), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Env Vars:** sql (6), wsda (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Documentation:** reference guide (1)
> **UI Navigation:** click on (1)
> **Analogies:** kind of like (1)


### 1. Starting the Investigation with SQL Query

[↑ Back to Table of Contents](#table-of-contents)

#### [Data analysis: First steps](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=0)** - [Instructor] All right, now it's time to begin the investigation. As with any case, we start simple. We want to know, where did the crime take place? We've been told it took place in New York City, so let's look into our data to see who might be connected to that location. Now this is your very first real [SQL](../../Skills/Data%20Science/SQL.md) query. Think of it as the opening move in a larger strategy, the first clue on the board. From here on out, every line of SQL you write will bring us closer to solving the case. So, go ahead and open up the WSDA SQL editor in your browser. You can get to it by navigating to this address. Once you get there, you'll see the same tables we'll be using throughout the course here. Now, once you're in, you'll notice a table called customer details. That's where we'll start. And here's your task. Let's ask the database to show us anyone whose city is listed as New York City. It's a small query, but a powerful one, because in the real world, data analysis often begins with filtering down to just what matters. Ready to give it a try? Pause the video now and type the query exactly as I do.
>
> **[1:40](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=100)** Once you're done, click on Run Query to see the results.
>
> **[1:49](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=109)** Now let's walk through what just happened. You ran your very first SQL query in response to a very specific question. Who in our database lives in New York City? Now let's take a moment to scroll through our results here, keeping our eye on the city column, which is now sorted in alphabetical order. If I scroll down past the C's, D's, E's, and go down to where New York is, we can see that we have two records here. And these two records identify folks that are residing in New York City. And just like that, we've got two people who live in the city where the painting was stolen. Now are they connected? We don't know yet, but they just became persons of interest. In the next video, you'll visit some core SQL concepts that will help you better understand this query and the results it produced. Let's keep going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (5)
> **Env Vars:** sql (5), wsda (1)
> **UI Navigation:** click on (1), scroll down (1)
> **Analogies:** think of it as (1), just like (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [SQL core concepts: Data types, tables, columns, and records](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=0)** - In the last video, we composed and ran our first query and we saw that we had two records with New York City displayed in the city column. Now, let's get some high level technical basics out of the way. So first up, let's talk about data. What is it? Well, if I'm being technical a datum is defined as a piece of information, and data is just the plural of datum. So first name, last name, city, and age values you see in our result here are all considered data. A table is nothing more than a grid of rows and columns. Think [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) spreadsheet, with rows going left to right and columns up and down. Starting with our table here, we can see that we have data or pieces of information housed in a table of rows and columns. Columns are also called fields, and each row is called a record. Looking closer at the columns of our table, we can see that there are different types of data. For example, first name, last name, and city are all text data, and age is integer or numeric data, in other words, numbers.
>
> **[1:33](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=93)** So if data is housed in tables, then what houses the table you might ask. Well, that's what's called a database, which is a collection of data arranged for easy and speedy searching by a computer. Okay, now that we've gone through the technical basics, in the next video we'll revisit the query we've composed, break down each line, and understand exactly what it's doing. We'll also take a look at the result our query produced and see if it has given us the answer to our question, which was, do we have anyone in our database who resides in New York City? See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **Cross-References:** in the next (2), in the last (1)
> **Definitions:** is called (1), in other words (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)

#### [First query: Comments, aliases, and sorting](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=0)** - In the last video, we took a look at some high level technical basics of data terms and types. Let's now take a look at the query we composed earlier and step through each line. First up, we've got comments, which are just a plain and simple way of describing what your query is doing. They come in two [Forms](../../Skills/Web%20Development/Forms.md), single line comments and comment blocks. Single line comments are created when you place two dashes back to back and whatever follows these two dashes becomes a comment. Comment blocks are created by typing a front slash followed by a star. Hit Enter a couple times, then flip them around and type a star, followed by a front slash. Whatever you type between the comment block becomes a comment. In both cases, comments allow us to describe what our query is doing in plain language. It's non [SQL](../../Skills/Data%20Science/SQL.md) code and it's ignored by the editor whenever we hit Run. Next, let's look at ours, SQL query and focus on the words that are capitalized. These are SQL keywords called clauses. Starting with the from clause, here we specify the table we're interested in querying. It's like telling SQL, "Go to this table."
>
> **[1:38](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=98)** Now that we are at that table, we use the select clause, which comes above the from clause to specify the columns we want to display in our result. To see what columns are available in the table we've specified, we can have a look in the database tables area over here, and click on the triangle icon to show the columns available in this table. In our query, we've included the id, first name, last name, city, and age fields in our "SELECT" clause. The ID field is referred to as a primary key and its purpose is to uniquely identify each row or record in our customer details table. In other words, it gives each row a unique number, which is never repeated. We've also renamed or aliased each column with the "AS" keyword. This helps us format or better describe the names of each column. Brackets are used for names with spaces and no brackets are needed if your alias has no spaces. Each column is also separated by a comma. Next, in order to sort our results, we included the "ORDER BY" clause, which is sorting our results in ascending order,
>
> **[3:12](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=192)** which is the default sort order by the column we specify. In our case, it's the city column. Lastly is the "LIMIT" clause, which limits the number of records displayed by the number you specify. We've limited our results to the first 100 records. Now let's take a look at the results our query generated and scroll down our records that are sorted in ascending order by city. We can observe the two records that have people who reside in New York City. These people are Barry Allen and Opra Baker. Be sure to make a note of these two records by typing them in the Notebook feature of this page to reference them later. You can also click on the export results button which downloads the result of our query. Now that we've figured out who resides in New York City, what might be another question we can ask that gets us closer to our goal of finding the thief? Well, keeping this goal in mind, it's beneficial for us to know if there was anyone who flew to New York City before the day the painting was stolen. Let's find out in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Env Vars:** sql (4), select (1), order (1), limit (1)
> **UI Navigation:** click on (2), go to (1), scroll down (1)
> **CLI Commands:** make (1), find (1)
> **SQL:** select (1), order by (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** in other words (1)
> **Analogies:** it's like (1)


### 2. Filter Data for Refined Results

[↑ Back to Table of Contents](#table-of-contents)

#### [Adding criteria to SQL queries](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=1)** - Remember, our objective is performing an investigation through data analysis, and our approach is zooming in on a list of viable suspects from the total number of people on our digital evidence file. So let's think about it. If someone flew to New York City before the date of the crime, there's a possibility that they could have been involved in the theft. In the previous video, we used the SELECT, FROM, ORDER BY, and LIMIT clauses to identify who resided in New York City. Remember, we found two people: Barry Allen and Oprah Baker. Let's now take a look and see if we could find out who flew to New York City before the date of the crime, October 23rd, 2021. Navigate to the Walter Shields Data Academy [SQL](../../Skills/Data%20Science/SQL.md) Editor at the following link. Are you with me? Do you have the WSDA SQL Editor open in a new tab as I do? Now let's take a look at our database tables. We're now interested in people who flew to New York City. Looking at our table names, we can make a logical assumption that the table that houses data about flight information is the flight_details table. Let's expand this table and have a look at its columns.
>
> **[1:37](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=97)** We can see the following fields: id, customer_id, start_city, dest_city, flightDate, customer first name and customer last name. Based on these field names, this table does indeed look like it contains flight data. Now that we've done this preliminary check, let's target this table to build a new SQL query around to perform some more data analysis. Just as I said before, we're in this thing together. So follow along and let's start typing. Pause the video if you need to. Then hit Run to get your final query result, just as I do. We'll then walk through the query we're about to write step by step and break down exactly what it's doing.
>
> **[2:40](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=160)** Hit the Run button once you've done composing your query.
>
> **[2:51](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=171)** Excellent work, if I do say so myself. In the next video, let's take a closer look and break down exactly what query number two is doing to help us find out who flew to New York City before the date of the crime. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3)
> **Env Vars:** sql (3), select (1), order (1), limit (1), wsda (1)
> **Code Identifiers:** flight_details (1), customer_id (1), start_city (1), dest_city (1), flightdate (1)
> **CLI Commands:** find (2), make (1)
> **SQL:** select (1), order by (1)
> **Cross-References:** previous video (1), in the next (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - remember (1)

#### [Second query: WHERE clause, operators, date, and texts](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=0)** - We just composed our second query, which was designed to help us find anyone who flew to New York City before the date of the crime. Are you with me? Okay. Now, if we take a close look at our current query we can see some of the same items that we created in the very first query we composed, like comments, clauses, and aliases. In addition, with this query, we've introduced a new clause called the WHERE clause. This clause allows us to filter for specific data that's in our table. The WHERE keyword is followed by a field name, an operator, and the value you're interested in. This filter is also referred to as criteria, and it is possible to filter for one or multiple values from multiple fields. If you look, we're doing just that, here, with this query. With the syntax, Destination City = 'New York City', we're looking for values in the destination city field of our flight details table that are equal to New York City. Notice, we surround New York City with single quotes. This is the way we filter for text data.
>
> **[1:37](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=97)** We then added the AND keyword to add a second criteria to our WHERE clause. This criteria, flightdate less than or equal to 2021-10-23
>
> **[1:55](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=115)** is looking at another column, the flight date column, and using the less than or equal to operators to look for values that are less than or equal to October 23rd, 2021. In other words, dates that come before or are equal to this date. Because of the AND keyword, only records that meet both conditions will be displayed in our results. Now let's take a look at the results that our query generated. We can see that we have three records that show the people who flew to New York City before the date of the crime. These people are Bruce Fisher, Aleana Jordan, and Brenda Reynolds. Be sure to make a note of these three records by typing them in the notebook feature of this page to reference them later. You can also click on the export results button, which downloads the result of your query. Now that we figured out who flew to New York City before the date of the crime, what might be another question we can ask that gets us even closer to our goal of finding the thief? So, keeping this in mind, it might be beneficial for us to know if there was anyone who flew from New York City
>
> **[3:31](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=211)** after the day that the painting was stolen. These will also be people of interest or worth speaking to. So let's find out.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **SQL:** where (3)
> **Env Vars:** where (3)
> **UI Navigation:** click on (1)
> **Definitions:** in other words (1)
> **Speakers:** - we (1)

#### [Query composition: More operators for refining results](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/query-composition-more-operators-for-refining-results-25842465?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/query-composition-more-operators-for-refining-results-25842465?u=76281980&t=1)** - In the last video, we composed query number two, which allowed us to identify three people who flew to New York City before October 23rd, 2021. These people were: Bruce Fisher, Aleana Jordan and Brenda Reynolds. Now, let's identify if anyone flew from New York City after the day the painting was stolen. Just as we've done before, let's dive in and start typing. Pause the video if you need to. Then hit run to execute the final query to get your result just as I do.
>
> **[0:55](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/query-composition-more-operators-for-refining-results-25842465?u=76281980&t=55)** Nicely done. In the next video, we'll walk through query number three step-by-step and explain these changes we've made. See you there.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (1), in the next (1)
> **Speakers:** - in (1)

#### [Third query: Operators and context understanding](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=1)** - [Instructor] So let's take a look at query number three, which we just composed in the last video. This query gave us a list of people who flew from New York City after October 23rd, 2021. On the surface, it looks almost identical to query number two, which gave us a list of people who flew to New York City before the crime. We've made some field and operator changes to get the list of people who flew from New York City after the date of the crime. The start city field is now used as we are interested in people who left New York City. So the syntax, start city equal "New York City" is filtering these values in this field that meets this criteria. We then use the and operator again to include a second field, flight date. But this time, the operators have been changed to the greater than or equal to operators, which filters for flight dates on or later than the date of the crime, which is October 23rd, 2021. This little change produced very different results. Now let's take a closer look at the results that our query generated.
>
> **[1:35](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=95)** We can see that we have four records that show the people who flew from New York City after the date of the crime. These people are Bruce Fisher, Aleana Jordan, Brenda Reynolds, and Hajrah Burns. Be sure to make a note of these four records by typing them in the notebook feature of this page to reference them later. You can also click on the export results button, which downloads the results of our query. Now that we've figured out who flew from New York City after the date of the crime, now is a good time to take a look back and understand all the analysis we've performed through the queries we've composed thus far. Let's see if we can put it all together to form a complete list of suspects. We'll take a look at how we can achieve this with manual analysis in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (1), in the next (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Performing Manual Data Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Logical deduction by observing results](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=1)** - Up to this point, we've composed three queries which allowed us to analyze the data in our database in a systematic way to get us closer to who committed the theft. In this exercise, we're going to piece together the results of the queries we've written thus far with the goal of compiling a list of suspects we can pass to the authorities for questioning. We'll be looking at the list of names reproduced from query number three and query number two. Starting with query number three, pause the video and do the following. Open a new browser and navigate to the [wsdalearning.ai/sqleditor](https://wsdalearning.ai/sqleditor). Next, go to your Exercise File folder and open the CSV file. Copy query number three and paste it into the WSDA [SQL](../../Skills/Data%20Science/SQL.md) Editor. Finally, hit Run to execute your query. Are you with me? We [compose](../../Glossary/Framework/Jetpack%20Compose.md) this query to find out who flew from New York City after the date of the crime, which was October 23rd, 2021. When we referenced these results, we had the following people listed: Bruce Fisher, Aleana Jordan, Brenda Reynolds, and Hajrah Burns. Next, let's take a look at query number two. Pause the video and do the following.
>
> **[1:38](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=98)** Open a new tab and navigate to [wsdalearning.ai/sqleditor](https://wsdalearning.ai/sqleditor). Go to your Exercise File folder and open the CSV file. Copy and paste query number two into the WSDA SQL editor. Then hit Run to execute query number two. Are you with me? We composed this query to find out who flew to New York City before the date of the crime. When we referenced these results, we had the following people listed: Bruce Fisher, Aleana Jordan, and Brenda Reynolds. Now, let's compare these two results. When we compare the names from both these results, we can see that some names appear on both. These are Bruce Fisher, Aleana Jordan, and Brenda Reynolds. Now, what does this tell us? Well, it tells us that Bruce Fisher, Aleana Jordan and Brenda Reynolds all traveled to New York City before the date of the crime and they all left after the date of the crime. This means that they were all physically present at the time and place that the crime took place. Then, they all left shortly after. Because of this, we're going to take note
>
> **[3:13](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=193)** of these folks as persons of interest. Go ahead and type them in the Notebook feature to reference them later. Now, let's return to query number one. Pause the video and do the following. Open a new tab and navigate to the [wsdalearning.ai/sqleditor](https://wsdalearning.ai/sqleditor). Next, go to your Exercise File folder and open the CSV file. Copy query number one and paste it in to the [wsdalearning.ai/sqleditor](https://wsdalearning.ai/sqleditor). Next, hit Run to execute query number one. Are you with me? If you recall, we compose this query to find the folks that resided in New York City. Let's scroll on down to New York City, looking at the City column. If you recall, these folks were Barry Allen and Opra Baker. Go ahead and add these two names to the list you started earlier in the notebook. Because of their place of residence, New York City, these people were all physically present at the location that the crime took place. Our manual analysis shows that these two groups of people all have something in common and these groups were, group number one,
>
> **[4:47](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=287)** the results from our query number one, and if you recall, these were Barry Allen and Opra Baker. Group number two were the names we identified when we compared the names from both query number two and query number three and these folks were Bruce Fisher, Aleana Jordan and Brenda Reynolds. Both the folks identified in these two groups were present at the time and place that the crime took place. Out of all the people that we have stored on our digital evidence file, the people we've identified here have the highest [Probability](../../Skills/Data%20Science/Probability.md) to have committed the crime. It would be worthwhile to have the authorities speak to them as our analysis has found that they are viable persons of interest. Let's list them out and include each person's ID. If you recall, this field is referred to as a primary key and its purpose is to uniquely identify each row or record in our customer details table. We're including this field in our list of suspects so that we have a unique ID number of each person, just in case we need it for further analysis. Through our manual analysis, critical thinking, and deductive reasoning, we now have a short list of suspects we can pass to the authorities. Excellent work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (2), [Probability](../../Skills/Data%20Science/Probability.md) (1)
> **Env Vars:** csv (3), wsda (2), sql (2)
> **UI Navigation:** go to (3), open the (3)
> **URLs:** [wsdalearning.ai](https://wsdalearning.ai) (4)
> **CLI Commands:** find (3)
> **Exercise Files:** exercise file (3)
> **Cross-References:** earlier in (1)
> **Definitions:** means that (1)

#### [Crime-solving SQL analysis recap](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=1)** - All right. Let's take a moment to pause and review what we've done. So far, we've gotten a short list of suspects that we've handed off to the authorities. To get to this point, we analyzed data in two tables, the customer details table and the flight details table. We first looked at the customer details table and strategically focused on the people who lived in New York City, the location that the crime took place. We did this because the people stored on our file who live in New York City are already at the location that the crime took place and are worth identifying for questioning. Our query gave us a list of all the people who were stored in the customer details table sorted by city in ascending order, which allowed us to simply scroll down the list and find the people who reside in New York City. One thing to note, we now know that we could have refined this query and added a where clause to filter for the value New York City, which would've limited our results to the two records we found. In other words, by including a where clause, we would not have had to scroll down the entire list of results to find that Barry Allen and Oprah Baker were the people who reside in New York City. Secondly, we looked at the flight details table
>
> **[1:39](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=99)** and wrote a query searching for people who flew to New York City before the date of the crime. Why did we do this? Well, anyone flying to New York City before the date of the crime would've been in the right location to steal the painting. Next, we wrote a third query to search for people who flew from New York City after the date of the crime. We did this because if someone left New York City after the crime took place, then there is a chance they may have been involved in the theft. We then took a look at the results of the two queries we wrote against the flight details table and looked for people who appeared in both result sets. This is where we found that Bruce Fisher, Aleana Jordan, and Brenda Reynolds all appeared in both result sets of these two queries. We did this because if someone flew to New York City before the crime then left New York City shortly after, then there is a higher possibility that they may have been involved in the theft. Finally, we added to this list the people we found who lived in New York City. We did this because altogether this formed a complete list of people with the highest [Probability](../../Skills/Data%20Science/Probability.md) of being involved in the theft. In the next video, we'll start looking
>
> **[3:15](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=195)** at the other tables we have access to in our digital evidence file. We'll see if we can find any supporting evidence to compliment or add to the analysis we've done so far. Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (1)
> **CLI Commands:** find (3)
> **Definitions:** is a  (2), in other words (1)
> **UI Navigation:** scroll down (2)
> **Cross-References:** in the next (1)
> **Speakers:** - all (1)


### 4. Exploring Related Table Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Examining the evidence in related tables](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980&t=0)** - As great data analyst, we know it's important to take a look at all the data that we have available to us in a logical and strategic way. So let's explore some more tables in our digital evidence database. Let's navigate back to the WSDA [SQL](../../Skills/Data%20Science/SQL.md) Editor and take a look at the database tables available to us on our digital evidence file. Are you with me? Okay. If we look at our database tables, we can see that we have other tables available to us. Let's take a look at the table called text_messages. If we expand the table by clicking on the triangle to the right of it, we can see the columns, also known as fields, that it houses. Now, it would make sense for us to have a look at the conversations that were sent back and forth around the date of the crime. Let's start by composing a query that will give us a view of how many messages were sent between October 20th and October 25th, which is a couple days before and after the date of our crime on October 23rd. We're already here at the WSDA Editor and just as we did before, let's type in our query in the query writing area. Pause the video if you need to. Then hit Run to execute the final query
>
> **[1:34](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980&t=94)** to get your result, just as I do.
>
> **[1:52](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980&t=112)** Very well done. Meet me in the next video where we'll walk through each line and understand exactly what this query is doing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** wsda (2), sql (1)
> **Definitions:** known as (1), is a  (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** text_messages (1)
> **Cross-References:** in the next (1)
> **Speakers:** - as (1)

#### [Fourth query breakdown: BETWEEN operator and date ranges](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=1)** - So here we are back at the WSDA [SQL](../../Skills/Data%20Science/SQL.md) Editor with query number four, which we composed in the last video. Are you with me? All right. Now let's zero in on our query. We can see some more items that we should be getting a bit more familiar with at this point. We have our clauses, select, from, where, and order by. If we look at our where clause, we have a brand new operator called the between operator, which is being used in conjunction with the and operator. Together, they allow us to filter for results that fall between the date range we've specified. The dates we've specified are surrounded in single quotes and formatted as year, followed by month, followed by date. Specifically, it's year dash month dash day. So two points to note on this. First, date data types need to be surrounded by single quotes, similar to text. Secondly, we must pay attention to how the dates are stored within our table, so we can format them in the same way in our query. From one database to another, dates can be stored in multiple formats. For example, dates can be stored
>
> **[1:34](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=94)** as month dash day dash year or day dash month dash year,
>
> **[1:44](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=104)** as it's done in European formatting, as well as other formats. So it's important to format them in our query the same way they're stored in our table. With this criteria in our where clause, we're able to get a sense of how many messages were sent during this timeframe, as well as take a high level look at the data that is contained in the fields of our text messages table. We included the sent field in our order by clause, and this sorts our results in ascending order. This allows us to see the messages in chronological order and makes reading the messages that appear much more understandable. Now that we have a view of this, let's get a bit more specific and narrow down our results further. In the next video, we'll filter our results down to only the text messages that were sent by the people on our short list of suspects. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** wsda (1), sql (1)
> **Cross-References:** in the last (1), in the next (1)
> **Analogies:** similar to (1), for example (1)
> **Speakers:** - so (1)

#### [Finding supporting evidence to align objectives](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/finding-supporting-evidence-to-align-objectives-25844464?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/finding-supporting-evidence-to-align-objectives-25844464?u=76281980&t=1)** - Let's kick things off with a fresh copy of the WSDA [SQL](../../Skills/Data%20Science/SQL.md) editor. Open a new browser tab and navigate to the link. In our last query, we got a list of the text messages that were sent and received within a few days before and after the date of the crime, October 23rd, 2021. In this query, our goal is to further refine these results by seeing if any of these messages were sent by anyone we've identified as a person of interest from the analysis we performed earlier. You probably know what I'm going to say at this point, but I'll say it again. Just as we did before, let's start typing in our query writing area. Pause the video if you need to. Then hit Run to get the final result from our query just as I do.
>
> **[1:05](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/finding-supporting-evidence-to-align-objectives-25844464?u=76281980&t=65)** Fantastic. I'll see you in the next video where we'll cover the modification we've made to this query and explain exactly what it's doing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** wsda (1), sql (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - let (1)

#### [Fifth query breakdown: Using the IN and AND operators](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980&t=1)** - Let's take a closer look at query number five, which we composed in the last video, and focus on the where clause. If you recall, this query gave us only the messages that were sent by the people we identified on our short list of suspects. We're focused on the where clause because this is where we've made a modification in our criteria. We included the AND operator, and introduced a brand new operator called the IN operator. So, this area I've highlighted is saying, in addition to the messages that we sent between 10-20 and 10-25, I'm only interested in those sent by a specific set of people, the persons of interest we identified earlier. We specified these people using the IN operator, which contains the primary key numbers of each person on our suspect list. The sender ID field corresponds to the people who sent text messages, and by specifying the numbers, 32, 38, 100, 105, and 106,
>
> **[1:23](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980&t=83)** we are limiting our results to only these people. The IN operator allows us to filter for multiple values all at once. Note, each value is separated by a comma and all values are surrounded by parenthesis. So our criteria in the where clause filters for records that fall between this specified date range, 10-20 through 10-25, and were sent by the five people identified as persons of interest. As we did in our last query, sorting our results in ascending order allows us to see the messages in a chronological order and makes reading the messages that appear much more understandable. Let's keep the results of our query here. In the next video, we'll step through these results and manually read each message to see if we can uncover any useful information. See you there.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (1), in the next (1)
> **Speakers:** - let (1)


### 5. Conclusive Analysis for Data-Driven Action

[↑ Back to Table of Contents](#table-of-contents)

#### [Solving the case with data-driven insights](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=1)** - Welcome to the final step of our analytical journey. In the last video, we refined our query results and zeroed in on the text messages sent by the people we identified on our short list of suspects. What we're about to do in this video is called manual analysis, which will clue us in to any additional evidence that pinpoints who stole the painting. If you recall, we did a bit of this earlier when we composed our list of suspects. Now we're about to do it once again. So if you're not already there, head on back to query number five in the WSDA [SQL](../../Skills/Data%20Science/SQL.md) editor. Are you with me? Okay. Our focus here is on the results that our query produced. Let's shrink our query writing area so we can see more of the records. Our results here are the text messages that were sent between October 25th by the people we have identified on our list of suspects. So we're going to step through each record, keeping our eye on the text message field, the sender first name, the recipient first name, and the date sent fields. These fields will tell us who sent the message, who received it, what was said, and when. In the first record, we see
>
> **[1:36](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=96)** that Bruce messaged Brenda on October 20th, two days before the date of the crime at 9:00, telling her that he just landed in JFK, which is New York's international airport. Stepping down to the second record, Aleana messaged Leonardo on October 21st, saying she arrived in New York and was headed to her hotel room before meeting up with him. Nothing unusual so far, but let's keep analyzing. In the next record, Brenda replies to Bruce's message the next day on October 21st at 9:01, saying that she also arrived in New York and will meet him at the museum at 10:00 PM that night to quote unquote, run through the plan again. Now this message seems a bit suspicious because Brenda and Bruce are meeting at the location of the crime to quote unquote, run through a plan. Added to this, both Brenda and Bruce are on our lists of suspects we created from our previous analysis. So let's take note of these two and keep on analyzing our records. In the next record, Aleana messages Leonardo again on October 21st at 9:15, asking where to meet and mentions that her hotel is close to the museum. Now, this may be of interest,
>
> **[3:10](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=190)** seeing that her hotel is close to the museum. It may also be completely unrelated to the crime we're investigating, so let's note it and keep on analyzing. In the next record, Aleana messages Leonardo again at 9:30 to say that she's going to meet him there. Now we're seeing Aleana's messages to Leonardo, but we don't seem to have Leonardo's messages to her, but the message itself isn't particularly unusual or telling with regard to the crime we're investigating. Also neither of these two were on our suspect list. Let's keep going. The message in the next record is from Bruce to Brenda on October 21st at 9:40, where he's confirming to see Brenda at the museum. Moving to the next record, we can see that we have a very suspicious message from Bruce to Brenda on October 21st at 9:41, confirming that he found a buyer for $1 million. Now, this is a very telling message and somewhat confirms suspicions about both Bruce and Brenda. Having a buyer for this large sum of money would be exactly what is needed to fence a stolen piece of art. Brenda confirms that finding a buyer is great in her next message to Bruce on October 21st at 10:10. The next message is a message from Bruce
>
> **[4:47](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=287)** to Brenda again, on October 24th at 9:10, where he's boasting about a great score and even mentioning that he would've loved to keep the art. This message was sent one day after the painting was stolen and is probably the most telling messages of all the messages we've analyzed. It gives us some solid evidence that Bruce and Brenda are indeed our prime suspects and most likely responsible for stealing the painting. In the last record, Brenda sends Bruce a message on October 24th at 9:12, wishing him a safe flight back. This record again, gives us additional evidence that they took a flight leaving New York after the date of the crime. We can now conclude based on our manual analysis, that Bruce and Brenda are indeed the thieves responsible for the theft of Mr. Kehinde Wiley's infamous painting. We can now pass the conclusive results of our analysis to the police authorities who now have enough evidence to make an arrest. What an amazing job. You used your critical reasoning, problem solving, and analytical skills in SQL to gather evidence, find the thieves, and retrieve the stolen painting. Congratulations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **Ports:** :00 (2), :10 (2), :01 (1), :15 (1), :30 (1)
> **Cross-References:** in the next (4), in the last (2)
> **Env Vars:** sql (2), wsda (1), jfk (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - welcome (1)

#### [Project: The art of disguise](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-the-art-of-disguise-25843466?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-the-art-of-disguise-25843466?u=76281980&t=0)** - [Instructor] Now that we've wrapped up our investigation, it's time for your final mission. This project is called The Art of Disguise, and it challenges you to dig into the data one last time to figure out what happened to the stolen money. You'll be analyzing a series of suspicious artwork transactions that took place after the theft. Your job is to find out who made them, when they happened, and whether the pattern suggests something more, like money laundering or a hidden accomplice. Now, everything you need is right here in the project file, displayed on the screen. You can find a downloadable version in the Exercise Files folder located in the Related to This Course section. Take your time, work through it carefully, and when you're ready, we'll go over the full solution together.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Project: Solution walkthrough](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=0)** - [Instructor] All right, you've made it to the final project. Let's walk through the solution together step by step. We were investigating what happened after the painting was stolen. Specifically, we wanted to know were there any suspicious transactions labeled as artwork shortly after the theft. Now let's start with the select portion of this query here. We're selecting the customer ID, first name and last name from the customer table. Then we're grabbing the amount, date, and description of each transaction from the bank transactions table. Now, each of these fields will help us understand who made a payment, what it was for and when it happened. Now, let's zero in on this second portion of our [SQL](../../Skills/Data%20Science/SQL.md) response. Taking a look at the from clause here. Now this is the core of the investigation. We're starting from bank transactions, which is where the money movement happens. Then we join bank accounts to connect each transaction to an account holder. And finally, we join customer details to get the person behind that account, their name, their ID, and everything else. I'm just going to scroll across so you see the full code of our from clause here. Okay, now let's go down to our Where clause. Just want to highlight only the Where clause.
>
> **[1:36](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=96)** Now these are your filters. We only care about transactions labeled as artwork, and only if they happen on or after October 24th, 2021, the day after the painting was stolen. Now this helps us zero in on what might be money laundering activity, suspicious art purchases shortly after the theft. And finally, we end with our order by resorting the results by date so we can spot patterns whether the purchases were spread out or tightly grouped. Now let's run our statement here and observe our results. I'm going to click on Run Query. I'm going to give ourselves some more real estate by dragging the screen up so we could take a closer look at our results. Now, running this query, two names stand out, Brenda Reynolds and Pierre Henderson. You'll notice that they each made multiple artwork purchases, and each one is exactly for $1,000. They were made one after the other, often just minutes apart. This is a classic sign of structuring when someone splits a large sum of money into smaller, repeatable transactions to avoid setting off alarms in the financial system. And what's really interesting is Pierre Henderson, until now, he hadn't been on our radar. These transactions connect him directly
>
> **[3:09](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=189)** to suspicious spending right after the theft, possibly as a buyer, launderer or accomplice. Now let's move on to the second part of our challenge here.
>
> **[3:26](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=206)** Now, if you took the challenge further and wrote this second query, it's one that groups the artwork purchases by customer and calculates how many transactions they made and how much they spent in total. Now here's what it might look like. We have our select statement. Now, key in here is our count, which we're performing to calculate the number of transactions and the sum, which gives us our total amount for the transactions for each of these folks. Down here, we have the group by, which is grouping by all of the non aggregated fields, and that's the first name, ID and last name. So we could see that we have the ID, the first name and last name, columns not being aggregated, and that's why it ends up in our group by statement. All right. Now this query gives you a summary view. You'll see that Brenda and Pierre each made multiple artwork purchases, totaling tens of thousands of dollars. So let's go ahead and run our query now. In our results set here, we can see that both Pierre and Brenda each made multiple artwork purchases. Now, this is powerful because you're not just spotting individual transactions, you're identifying behavioral patterns. Now this is how analysts work in fields
>
> **[4:59](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=299)** like fraud detection, [Cybersecurity](../../Topics/Cybersecurity.md), and law enforcement. It's about finding signals in the noise. All right, now with this final project, you brought together everything you've learned from filtering data with the wear clause, joining related tables, sorting and grouping results, and interpreting patterns in the data. You didn't just write queries, you followed the money and uncovered a deeper layer of the story. And that's exactly what great analysts do. Nice work and case closed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1), [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **Env Vars:** sql (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continue enhancing your SQL data-driven skills](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=0)** - [Instructor] What a journey! You didn't just complete a course, you followed the data, uncovered the truth, and traced a financial trail most would've missed. That's more than [SQL](../../Skills/Data%20Science/SQL.md), that's data-driven thinking, and it's exactly what today's most impactful professionals do. So here's what you learned. How to ask focused, real-world questions, how to apply just the right SQL tools at the right time, and most importantly, how to think like an analyst, not just a coder. From filtering with WHERE to joining tables and sorting results, you used SQL to investigate a real case layer by layer. This is the kind of skill employers value, the ability to explore data, make sense of it, and act on what you find. You now have access to the WSDA SQL Practice Editor, a browser-based playground built just for learners like you. It works with any SQLite Database, not just the one from this course. So you can practice on your own, on your own data projects, revisit lessons from this course, or explore real-world [Databases](../../Skills/Software%20Development/Databases.md) all from your browser. And don't forget, the built-in AI assistant gives instant feedback, just like having me as your personal SQL coach, right by your side. If you're ready to level up,
>
> **[1:32](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=92)** I've got more courses for you on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. We go deeper into aggregations and subqueries, [Windows](../../Glossary/Service/Windows.md) functions, real-world [Data Cleaning](../../Skills/Data%20Science/Data%20Cleaning.md) and transformation, and advanced analysis techniques. These courses build right on the foundation you've built here, and they're just as hands-on and beginner-friendly. Before you go, don't forget, download your certificate of completion and share it on LinkedIn. Let others know you are leveling up. Explore more tools on WSDA Learning and connect with me on LinkedIn. It's been an honor being your guide. Keep practicing, keep growing, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (5), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Data Cleaning](../../Skills/Data%20Science/Data%20Cleaning.md) (1)
> **Env Vars:** sql (5), wsda (2), where (1)
> **CLI Commands:** make (1), find (1)
> **Best Practices:** don't forget (2)
> **SQL:** where (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Walter Shields](../../Instructors/Data%20Science/Walter%20Shields.md)

## Resources

- Exercise files available

## Skills Covered

- Data Analysis
- SQL

## Path Context

### In [SQL Hands-On Practice](../../Paths/Data%20Science/Learning%20Paths/SQL%20Hands-On%20Practice.md)
← [Hands-On SQL Challenges- Test Your Knowledge](Hands-On%20SQL%20Challenges-%20Test%20Your%20Knowledge.md) | **7 of 9** | [SQL Hands-On Practice- Solve Business Problems](SQL%20Hands-On%20Practice-%20Solve%20Business%20Problems.md) →

### In [Advance Your Skills in SQL](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Skills%20in%20SQL.md)
← [SQL Hands-On Practice- Solve Business Problems](SQL%20Hands-On%20Practice-%20Solve%20Business%20Problems.md) | **3 of 5** | [Using SQL with Python](Using%20SQL%20with%20Python.md) →

## Appears In

- [SQL Hands-On Practice](../../Paths/Data%20Science/Learning%20Paths/SQL%20Hands-On%20Practice.md)
- [Advance Your Skills in SQL](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Skills%20in%20SQL.md)

## Related Courses

_Courses sharing skills:_

- [Intermediate SQL- Data Reporting and Analysis](Intermediate%20SQL-%20Data%20Reporting%20and%20Analysis.md) — SQL, Data Analysis
- [Advanced SQL for Data Scientists](Advanced%20SQL%20for%20Data%20Scientists.md) — SQL, Data Analysis
- [Intermediate Sql For Data Scientists](Intermediate%20Sql%20For%20Data%20Scientists.md) — SQL, Data Analysis
- [SQL for Healthcare Professionals](SQL%20for%20Healthcare%20Professionals.md) — SQL, Data Analysis
- [SQL for Data Analysis](SQL%20for%20Data%20Analysis.md) — SQL, Data Analysis

---

[↑ Back to top](#)