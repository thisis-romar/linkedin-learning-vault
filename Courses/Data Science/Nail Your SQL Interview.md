---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: nail-your-sql-interview
url: "https://www.linkedin.com/learning/nail-your-sql-interview"
duration_minutes: 60
duration: 1h
level: Beginner
updated: 4/19/2022
learners: 15115
skills:
  - Interview Preparation
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQHuW_atKGwa5A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1650041965675?e=2147483647&amp;v=beta&amp;t=2x83z68lrSu2_IcKFxSLBnuoPsSnXGVZS2Ei2sTYkxk"
linkedin_topic: Data Science
learning_paths:
  - '[[Explore a Career in SQL Development]]'
prev_courses:
  - '[[SQL Hands-On Practice- Solve Business Problems]]'
next_courses:
  - '[[Finding New Career Paths with SQL]]'
path_nav: '[{"path":"Explore a Career in SQL Development","position":7,"total":8,"prev":"SQL Hands-On Practice- Solve Business Problems","next":"Finding New Career Paths with SQL"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/interview-preparation
  - skill/sql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Nail%20Your%20SQL%20Interview.md)

![Nail Your SQL Interview](https://media.licdn.com/dms/image/v2/C4D0DAQHuW_atKGwa5A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1650041965675?e=2147483647&amp;v=beta&amp;t=2x83z68lrSu2_IcKFxSLBnuoPsSnXGVZS2Ei2sTYkxk)

# Nail Your SQL Interview

> Are you looking for a new job but terrified about having to prove your skills? Worry not. A coding interview may be intimidating, but it shouldn’t stand in the way of your growth and professional development. Even if you’re new to a language like SQL, with the right preparation and the right tools, you can turn the challenge into a learning opportunity that boosts your career. Join instructor Nich

> [LinkedIn Learning](https://www.linkedin.com/learning/nail-your-sql-interview) | 1h | Beginner | 15K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Build confidence for your SQL interview](#build-confidence-for-your-sql-interview)
  - [Common SQL terminology](#common-sql-terminology)
  - [What an SQL interview is like](#what-an-sql-interview-is-like)
- [**1. Data Definition Language Review**](#1-data-definition-language-review) (3 videos)
  - [Create and seed a table with data](#create-and-seed-a-table-with-data)
  - [Modify existing tables with ALTER](#modify-existing-tables-with-alter)
  - [Working with the TRUNCATE and DROP command](#working-with-the-truncate-and-drop-command)
- [**2. Data Query Language Review and Logical Operators**](#2-data-query-language-review-and-logical-operators) (5 videos)
  - [Querying the table with logical operator LIKE](#querying-the-table-with-logical-operator-like)
  - [Querying the table with logical operators IN and BETWEEN](#querying-the-table-with-logical-operators-in-and-between)
  - [Working with the COALESCE command](#working-with-the-coalesce-command)
  - [Challenge: End of year raises with COALESCE](#challenge-end-of-year-raises-with-coalesce)
  - [Solution: End of year raises with COALESCE](#solution-end-of-year-raises-with-coalesce)
- [**3. Data Manipulation Language Review**](#3-data-manipulation-language-review) (2 videos)
  - [Update the table with UPDATE or ALTER](#update-the-table-with-update-or-alter)
  - [Delete data using transactions](#delete-data-using-transactions)
- [**4. Transaction Control Language**](#4-transaction-control-language) (1 videos)
  - [Creating savepoints and commits in SQL](#creating-savepoints-and-commits-in-sql)
- [**Conclusion**](#conclusion) (1 videos)
  - [Be prepared for your interview](#be-prepared-for-your-interview)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Build confidence for your SQL interview](https://www.linkedin.com/learning/nail-your-sql-interview/build-confidence-for-your-sql-interview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nail-your-sql-interview/build-confidence-for-your-sql-interview?u=76281980&t=0)** - Whether you've just landed that first [[SQL]] interview or you're just starting out, I want to extend a heartfelt congratulations and let you know, you've got this. We're going to expand on your background and what you already know, and get you ready for your first SQL interview. In this course, I'll walk you through some practical examples of common SQL concepts so they feel more fluid to you during the interview. These walkthroughs include useful tips on how to remember what you studied when you need it most. I'll also give you a few challenges, code alongs and quizzes to reinforce the topics. Hello, my name is Nicole Pulley and I'm a self-taught SQL enthusiast. I now work as a senior systems test engineer for prominent insurance company after attending a software bootcamp. I came from a completely non-technical background. But during my bootcamp, I fell in love with SQL. I hope to share my passion for SQL with all of you. So if you're ready to enhance your skills and get ready for your interview, let's begin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6)
> **Env Vars:** sql (6)
> **Speakers:** - whether (1)

#### [Common SQL terminology](https://www.linkedin.com/learning/nail-your-sql-interview/common-sql-terminology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nail-your-sql-interview/common-sql-terminology?u=76281980&t=0)** - Hello, and welcome to [[SQL]] Terminology and Concepts. During your SQL interview, it's likely that you'll be asked some basic questions about terminology or concepts related to SQL. If you're like me, perhaps you know how to do something and why it's important, but you may struggle to define or describe what it is. This section will help you tackle this problem before heading interview. Let's start with some common, and not so common questions, and answers to get us started. Feel free to grab a pen and paper, pause the video after each question and write down your answer. Unpause when you're ready to go. Also make sure to visit the exercise files for a handout of all of these concepts and terminology, points we'll be discussed thing here. All right, first up, when and how might we use an alias? Pause the video and try it on your own. So to answer the question, when and how might we use an alias? As you can see bolded here, we have an S which is an alias for a table, and then we have the AS keyword and total students which is an alias for a column. We can use aliases on columns as well as tables. Aliases save us some typing, as well as produce new columns that show the output of an aggregate function, for example. Aliases for the table do not use the keyword AS. All right, great job. Let's move on to the next question. What are the three relationship types in SQL? Give a brief example of each.
>
> **[1:34](https://www.linkedin.com/learning/nail-your-sql-interview/common-sql-terminology?u=76281980&t=94)** Pause the video here and try it on your own. So there is a one to one relationship, for example, one teacher can teach one subject. One teacher may teach math. That's a one-to-one relationship. There's a one to many relationship, wherein keeping with the example, one teacher can have many students. And then there's a many to many relationship where many can be enrolled in many courses. I hope that little example helped you to remember the three types of SQL relationships. You are well on your way, let's continue. What is the difference between a union and a union all? Pause the video now. So the main difference between a union and a union all is that a union must have the same number of columns when queried. They must use compatible data types in the select statement and columns must also be queried in the same order. The union all in contrast, will preserve any duplicates on the table. So it will not remove any duplicate value. All right, our next question. How many main clauses are there to a SQL query and what are they? Pause the video now. So there are six main clauses to a SQL query. We have the SELECT which selects the columns
>
> **[3:08](https://www.linkedin.com/learning/nail-your-sql-interview/common-sql-terminology?u=76281980&t=188)** that we'll be working with. We have FROM which tells us where the data is coming from, what table. WHERE is used to filter out the data. ORDER BY which shows us what column we'll be using to sort the data. HAVING, having what characteristics, usually used with an aggregate function. And, GROUP BY which always follows the having clause, and it's how the data is grouped together. How does you do? Did you get it all six? All right, let's continue. So, what is the order of execution for a query? Note, this is not the order in which you might type the query as we just saw previously. Take a moment and answer the question now. So what is the order of execution for a query? So we have FROM, we'll execute first. Where is the data's coming from. What table is it coming from? WHERE, the filter for what is returned. GROUP BY, a column by which the data is grouped. HAVING, data exhibiting what characteristics. SELECT, what data what columns are being returned. And, ORDER BY, the column upon which the data is sorted. So, FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY. That is the order of execution, not necessarily the order in which you might type your query. Onto our next question, what is a constraint? Give at least one example. Pause the video here. What is a constraint?
>
> **[4:39](https://www.linkedin.com/learning/nail-your-sql-interview/common-sql-terminology?u=76281980&t=279)** A constraint controls what type of data is allowed into a table. And you might be familiar with the examples of constraints, primary keys, foreign keys, as well as the keywords UNIQUE and NOT NULL. So if you came up with any one of these or any combination of these, I think you're well on your way. Now, take a moment and name five aggregate functions and what do they do? Pause now. So what are our five aggregate functions and what do they do? Well first, I have.. SUM() which returns a total. I have AVG() which returns the average of numbers entered into the function. MIN() which returns the lowest or if you're using it for date, the oldest date. MAX() which returns the highest, or if you're using it for the date, the newest date. And, COUNT() which returns the number of values. Now for our final category, what are the five categorizations of SQL commands? Pause and write these down on your own. Extra points if you can say what they do. So there are five categorizations of SQL command. We'll explore what they are at a high level and go into more detail as we move through this course. First, we have the data definition language which defines the table structure. So think of create, drop, and altering the table. When we execute these commands, we are altering the way the table exists, or if it exists. [[Data Manipulation]] language is the way
>
> **[6:13](https://www.linkedin.com/learning/nail-your-sql-interview/common-sql-terminology?u=76281980&t=373)** in which we modify or manipulate the data within a table. When we insert, update, or delete, we are modifying the table or manipulating it. Next, we have data control language. This command controls who has access through granting and revoking permission to the database. Transaction control language. This is used in concert with data manipulation language. We use this to group related transactions. For example, we may create a safe point to roll back to during a series of transactions. Last but certainly not least is data query language or how we query the data or information that we need. The last is probably the most commonly recognized statement in SQL. I hope you got something out of this section, but I did want to note that we will not be covering data control language in this SQL interview course. This is not a topic I'm well versed in, so I don't want to lead you down a bad path. Thank you very much for embarking on this journey with me, and I hope to see you soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (11), [[Data Manipulation]] (2)
> **Env Vars:** sql (11), select (3), where (3), order (3), having (3)
> **SQL:** select (3), where (3), order by (3), having (3), group by (3)
> **Non-Speech:** (upbeat music) (8)
> **Definitions:** is a  (3), is an  (2)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)

#### [What an SQL interview is like](https://www.linkedin.com/learning/nail-your-sql-interview/what-an-sql-interview-is-like?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nail-your-sql-interview/what-an-sql-interview-is-like?u=76281980&t=0)** - [Instructor] So you've been studying and working with [[Databases]] using your preferred server, whether it's [[MySQL]] or [[Microsoft SQL Server]], and you feel pretty confident walking into the interview. Your code is solid. You've practiced. But wait, there's no computer waiting for you, just a pen and a piece of paper. What do you do? This may seem odd, but most [[SQL]] interviews I've had have been paper and pen or an interviewer asking me questions. It can catch you off guard, even if you prepared and reviewed thoroughly. The good news is you'll be able to prepare yourself with four simple steps. There's no particular order, but I think they are good instructions to build a base for your study routine. Step one, study your terminology. This isn't just limited to what we covered previously, but really get curious about what it all means. How does this greater concept fit together? There's no worse feeling to me than knowing how to do something practically but not knowing how to articulate what it means. Doing this before the interview will ensure that you come into the room with confidence and with a good direction. You may not always answer the question 100% correctly. But if an interviewer can follow your train of thought, you'll be on the right track. There are several options for where to find reliable information, whether that's in a book or on the internet for free. The two points I'd focus on is is my definition clear, and could I provide a clear example if asked. Step two, comment, comment, comment. Get used to commenting your steps while working. We will delve into this in our practical example. Documenting what you're doing while you're doing it may seem unnecessary at the time. But when you're not able to work with software
>
> **[1:34](https://www.linkedin.com/learning/nail-your-sql-interview/what-an-sql-interview-is-like?u=76281980&t=94)** that will give you error messages and intelligence, it'll come in handy. Remember, it's not about getting it right once. It's about not being able to get it wrong. So some things to think about in this section. Could I reproduce this verbally? Do I understand why I'm doing what I'm doing? Step three, find your good enough. No, I'm not advocating for mediocrity. But if you want to prepare for every eventuality before you get started, you may never get started. Start small, know it inside and out, then make small progressions. You don't need to be a SQL master overnight, just open and willing to be a continuous learner. A common mistake we make when learning anything is that we want to learn everything because we are interested and excited. Excitement and interests are wonderful, but they can quickly lead to being overwhelmed with the sheer amount of information that there is to learn and increase pressure to be perfect before getting yourself out there. A few points to think about. Do I have a solid foundation? Do I know where to go to learn more? Is this integral to the position I am seeking? Step four, ask for clarification. Don't be too proud to ask for clarification. Maybe something isn't worded clearly or you don't fully understand what the interviewer is asking of you. And this will happen. Ask follow-up questions or clarifying questions that will help you put your best foot forward. Ask yourself, do I understand the question entirely? Do I have enough information to give a clear and cohesive answer? If the answer to any of those is no, please ask for clarification. So thank you for embarking on this journey toward a successful interview. I wish you the best of luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Databases]] (1), [[MySQL]] (1), [[Microsoft SQL Server]] (1)
> **CLI Commands:** find (2), make (2), mysql (1)
> **Env Vars:** sql (3)
> **Cross-References:** we covered (1)
> **UI Navigation:** go to (1)
> **Warnings:** common mistake (1)
> **Speakers:** - [instructor] (1)


### 1. Data Definition Language Review

[↑ Back to Table of Contents](#table-of-contents)

#### [Create and seed a table with data](https://www.linkedin.com/learning/nail-your-sql-interview/create-and-seed-a-table-with-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nail-your-sql-interview/create-and-seed-a-table-with-data?u=76281980&t=0)** - [Instructor] When starting your journey with [[SQL]], you get used to having the ID supplying hints and error messaging to give you insight into syntax and typos. Since some SQL interviews are actually written, most that I've encountered actually, you may not have the ability to use intelligence when answering specific questions in your interview. Because of this, let's look at some techniques. As a reminder, you use two dashes in [[Microsoft SQL Server]] for comments. Comments are a good way to keep track of what you need to do and when. So let's work through an example together. What keyword do we need to produce our table? That would be the create keyword of course. And what are we creating? A table and the table needs a name. Now let's talk about the structure of the table. What are the important columns? Are null values allowed? Do we need any constraints like for example, a primary key? And what are our data types? Let's put this into practice within an example of creating a table. We start here with the keyword create table, and we'll call this employee_info. We'll open and close the parentheses and give ourselves some room to work. And we'll start off with the ID, which will be our primary key. This will be a integer, as we want it to increment as we go along. Make sure it's not null. We'll add the identity.
>
> **[1:37](https://www.linkedin.com/learning/nail-your-sql-interview/create-and-seed-a-table-with-data?u=76281980&t=97)** We'll start at one and we'll increment by one, and this is our primary key. Input a comma here. So let's keep it simple and use the first name and make this nvachar.. We'll give it a character limit of 75 for good measure and then we'll continue with the last name, also nvachar of 75. And lastly, we'll have an email, also data type of nvachar, we'll make this 125. So there we have a table that we've created. We've given it a primary key, we've given the table some columns in which we can put data. We've made sure that we have the correct data types and all the syntax, it looks correct. So let's go ahead and execute this. All right. Now, we're ready to move on to seeding our table with data. In order to seed our table with data, we're going to use the insert into keywords. Let's start with insert into employee info. So I am cheating a little bit in using the intelligence in terms of auto completing some information, but I will try not to rely on it too heavily in order for us to continue with our documentation through our notes and through our comment.
>
> **[3:11](https://www.linkedin.com/learning/nail-your-sql-interview/create-and-seed-a-table-with-data?u=76281980&t=191)** So what information are we inserting into the table? We're going to insert into the table, data that corresponds to the data types that we set up when we created the table. First, we'll input the first name, last name and email address. And remember, we do not have to put in the ID because it will auto-increment for us, that's what the identity function does. We have the columns that we'll be putting data into here. What is the value? What do we actually want to show up when we query our table? For that, we need to input value and open and close our parentheses. And I like to put in all of my quotation marks at the very beginning and go back and just input the data. The very first, go with [[John the Ripper|John]] Arthur.
>
> **[4:16](https://www.linkedin.com/learning/nail-your-sql-interview/create-and-seed-a-table-with-data?u=76281980&t=256)** Let's give him an email address. And for this, since we do want to have a few rows of data, I'm just going to copy and paste this for the sake of our demonstration. In order to expedite this a little bit, I'm going to copy and paste some data that I already have ready for us, it won't affect too much. We'll go ahead and execute this code, in order to insert data into our table. Lastly, we'll go query the data by selecting all from employee info
>
> **[5:00](https://www.linkedin.com/learning/nail-your-sql-interview/create-and-seed-a-table-with-data?u=76281980&t=300)** and then we'll execute. And here we have our table with our IDs that are auto-incrementing for us. We have our first name, our last name and our email addresses just as we would expect them. I probably don't need to tell you that you can apply this methodology to a wide variety of tasks. The important takeaway here is to comment what you are doing and why you are doing it. It will help you fill in the gaps for yourself in the long run. Thank you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Microsoft SQL Server]] (1), [[John the Ripper|John]] (1)
> **CLI Commands:** make (3)
> **Env Vars:** sql (3)
> **Code Identifiers:** employee_info (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Modify existing tables with ALTER](https://www.linkedin.com/learning/nail-your-sql-interview/modify-existing-tables-with-alter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nail-your-sql-interview/modify-existing-tables-with-alter?u=76281980&t=0)** - [Instructor] In [[SQL]], as in life, we don't always get it right the first time. Perhaps you didn't create a column you meant to create or you gave it the wrong data type. Well, that's where the ALTER command comes in handy. Remember, the ALTER command alters the structure and relationships of a table. When I say structure, I mean data types, column names and whether or not a column exists within a table. As you can see on screen, I've made some comments about the ALTER command and its functionality. So let's apply this in a few examples. For the very first one, we're going to use the employee info table and we're going to alter the employee_info table and drop the email column. As you can see below, we have a first name, a last name and an email column. We're going to go ahead and get rid of this email column. So we're going to DROP column email. So now that that's all in there, let's select everything and execute and now we have the before with the email column and the after with the email column gone. Let's move on to our second example. So here we're going to alter the table named table. We're going to add a column named country and then give it a data type of integer. If you'd like to, you can go ahead and pause the video here and do this, and come back and check your work or you can continue to code along with me. So we will add a column named country
>
> **[1:39](https://www.linkedin.com/learning/nail-your-sql-interview/modify-existing-tables-with-alter?u=76281980&t=99)** and the data type will be int. So we'll select all and execute. As you can see the columns here, it's null for now but it is present on our table. Next, because we input the wrong data type, we're going to alter the country column that we just created and give it the correct data type, which is nvarchar. So we're going to ALTER the column named country and update the data type to nvarchar. I'm going to give it a pretty high character limit for the purposes of this exercise. Select it all and execute. It all went through successfully. So as you can see, we're using the ALTER column, not only to remove columns and add them but to also correct perhaps some oversights or mistakes we've made along the way. So let's continue to the next example, and here is a mini challenge for you. So continuing to use the employee info table, go ahead and add two more columns at the same time using the ALTER command. They can be a phone number and an email, a city and a country, whichever columns you like. Pause the video, add those, give it a shot and then come back and we'll code along together. So welcome back.
>
> **[3:11](https://www.linkedin.com/learning/nail-your-sql-interview/modify-existing-tables-with-alter?u=76281980&t=191)** If you're joining us again after attempting the mini challenge on your own, we're going to go ahead and add two columns to the table. So I've chosen city and department. So I'm going to add city, give it a data type. And I'm going to separate the columns with a comma for now. And I'm going to input department nvarchar.
>
> **[3:44](https://www.linkedin.com/learning/nail-your-sql-interview/modify-existing-tables-with-alter?u=76281980&t=224)** And I'm going to highlight everything and execute. And as you can see, I now have three additional columns, the country we added at the beginning and the city and department that we added just now, or whatever two columns you chose as a part of your mini challenge. I hope you are feeling more comfortable using the ALTER command.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** alter (7), sql (1), drop (1)
> **Code Identifiers:** employee_info (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Working with the TRUNCATE and DROP command](https://www.linkedin.com/learning/nail-your-sql-interview/working-with-the-truncate-and-drop-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nail-your-sql-interview/working-with-the-truncate-and-drop-command?u=76281980&t=0)** - [Narrator] You may remember what truncate does. But do you remember how it differs from drop? When should we use it? Well, we will attempt to answer those questions with an example in this portion of the course. Let's start with why we use truncate. We use truncate to remove data from a table while retaining the table structure. So you'll still have the column headings in their associated constraints available should you want to insert new data but the old data will be gone. Keep in mind the constraints can pose potential issues when attempting to truncate a table. Let's explore this more with an example. These comments here at the top of the screen are a reminder of what we hope to gain from this video. What does truncate do? When should we use it? And how is it different to drop? In order to understand this let's create a couple of tables. So on our first table, which is very basic. We'll create the department table. The department table just contains an ID and the department name. So let's select all and execute. And we'll create our second table which has the employee information in it. First name, last name and ID. Again selecting all and executing. And finally we'll query the tables to see what we have. So as you can see, we have the department table as well as the employee table with the data we input. So now that we have our two tables already created
>
> **[1:34](https://www.linkedin.com/learning/nail-your-sql-interview/working-with-the-truncate-and-drop-command?u=76281980&t=94)** and let's go ahead and try to execute the truncate command, which we have here. So we're going to truncate the table which is called department. Let's select and execute. Oops, it looks like we got an error message. So you won't have this error message in an actual interview but since we do have it let's explore it. So our error message says cannot truncate table department because it's being referenced by a foreign key constraint. So let's go back up and see if we can find the foreign key. Oh, and there we have it this is the foreign key that's referenced on our department table. Now let's see how we can get around that. In order to get past this error message we need to drop the constraint on the table first and then we'd be able to truncate our table. So let's understand this with an example. So we're going to alter the table employee departmental info where the foreign key exists. Where we're going to just simply drop the constraint and then we'll be able to truncate our table. And we're going to select all from the table to make sure that everything is gone. So let's do that now. Let's execute this part first.
>
> **[3:08](https://www.linkedin.com/learning/nail-your-sql-interview/working-with-the-truncate-and-drop-command?u=76281980&t=188)** So in order to truncate the table, we need to first drop the constraint, in order to remove this error we need to use the drop command. Drop is one of those commands that can seem very scary because it feels so final and in some cases it is but we use it here to correct our error. To reiterate we needs to drop all constraints before we can truncate the table. We'll use the alter command to modify the employee departmental info table, drop the foreign key constraint and then we'll be able to truncate the table. So I am going to drop constraint. In order to find the exact foreign key name, I navigate it through the database, where this table lives and went through the folder that contains the keys and I can right click and if I click and modify
>
> **[4:09](https://www.linkedin.com/learning/nail-your-sql-interview/working-with-the-truncate-and-drop-command?u=76281980&t=249)** I'll get this foreign key relationships pop up and I'll be able to copy the foreign key name so I don't have to type all of that. And I'll come back to my query and paste that name in there, select all and execute. Then I'll try once again to truncate the table and then I'll select all from the department table. Now I see that I have the column names but I don't have any of the data that was previously associated with those columns. Now let's move on to another example of how to drop columns. We are using alter to begin our statement. We then type the name of the table to be affected the drop command and then the keyword. Finally, we'll type the name of the column to be dropped. We can use a select statements to ensure that the column has been removed. You can see that that's been done here. So let's select and execute. Now let's query the table. And as we can see, the manager column is gone. Finally, we will drop our employee departmental info table as well as the department table. This time we will not employ the alter command since we are not altering the table but dropping it entirely. So to sum up truncate removes data from the table while drop demolishes the structure as well as the data.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Definitions:** is called (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)


### 2. Data Query Language Review and Logical Operators

[↑ Back to Table of Contents](#table-of-contents)

#### [Querying the table with logical operator LIKE](https://www.linkedin.com/learning/nail-your-sql-interview/querying-the-table-with-logical-operator-like?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nail-your-sql-interview/querying-the-table-with-logical-operator-like?u=76281980&t=0)** - [Instructor] Let's start this video with a mini challenge. Name five keyword comparison operators and what they do. Pause the video here and write down your answers. Welcome back. I hope you were able to remember at least a few and what they do. If not, let's go through them now. So there are five basic keyword operators. The first is BETWEEN. So, BETWEEN returns data that is within a range of values. IN returns data that is within a list of values. LIKE returns data that is similar to a given pattern. The use of wildcards is common with this one. IS or IS NOT NULL returns values that are or are not null, depending on which keyword is utilized. And lastly, EXISTS. This is used to determine if a sub query returns values or not. So before we begin with reviewing and working keyword operators, we should probably review wildcards. First, we have the well known wildcard, which is a percent sign, and this will bring back anything that has any amount of characters preceding the specified string. So in our example here, we have a select statement that will return any string that has any amount of characters preceding the letters "AMES" So the percent sign is not very picky. So, what do we do if we want our data to be a bit more precise?
>
> **[1:33](https://www.linkedin.com/learning/nail-your-sql-interview/querying-the-table-with-logical-operator-like?u=76281980&t=93)** Let's look at our next wildcard to answer that question. This wildcard, the underscore, will return one character per underscore within the specified string. So here you can see, I am selecting a code of some kind from a table, where the code has a character followed by two, followed by a character, followed by six. And the last one we'll cover today are the square braces. This wildcard helps us match one character or another within a given string. Let's explore the utility of this one with an example. You can see here from our output that we'll bring back anything that starts with a "Wi" and is followed by an L or a K, and ends with any sequence of characters since we used a percent sign from our first example. So now that we've had a refresher, let's put this to use in our own table. Let's use this code to create a table or you can use your own. Let me scroll down here. So I'm going to select all of this and I'm going to execute the code. And now that I have that, I can query the code. Make sure our table came across the way we wanted it to. If you're creating your own table, make sure your table has at least 10 rows of data, just to give yourself something to work with. So remember, "like" is a comparison operator. So we'll compare the parameters you give it to what exists within your table for a match.
>
> **[3:05](https://www.linkedin.com/learning/nail-your-sql-interview/querying-the-table-with-logical-operator-like?u=76281980&t=185)** How specific that match is, is up to you. Now let's use each of our wildcards to return some data. We will have three exercises. You can pause the video to work through it on your own if you like. First, we're going to select the first name and email from the table where the email starts with anything before a number six and ends with "@[gmail.com](https://gmail.com)". So here's my select statement for you, if you need it. And I'm going to go ahead and run this query. And I see that my data looks correct. There's a six and then "@[gmail.com](https://gmail.com)", and I have a varying amount of data being returned before that six. For the second query, I want you, if you feel so inclined, to pause the video and work on this one. Select the first and last name from the table where the first name does not have exactly one character followed by the characters A and R, and ending with any string. Let's look at my query. I'm selecting the first name and the last name from my table, where the first name is not like one character followed by "ar" and anything else. So I'm going to execute. Now let's see what that would look like if I brought in all of the contents of the table for comparison.
>
> **[4:40](https://www.linkedin.com/learning/nail-your-sql-interview/querying-the-table-with-logical-operator-like?u=76281980&t=280)** Let's run these two together. So it looks like I lost about three rows. So, I lost Martha, Mary, and Marianna. So I know that this one is working correctly. Last but not least, select the first name and city from the table where the first name starts with a B and is followed by an I, an R, or an O, and the city does not have any number of characters before or after the characters "UL". Go ahead and pause the video now and work on that query. So here's my query if you need it. So here, I've selected the first name and the city from my table, where the first name is like a letter B, followed by an I, an R, or an O, and any number of characters after that, and the city does not have "UL" in between any number of characters. Let's go ahead and run this query. Okay, I have two people. So let's see what would happen if I ran this query alongside querying the entire table. All right, it looks like I lost about seven people. So I have a B followed by an R, and I have a B followed by an I. So the first name was filtered correctly. And for the city, I filtered out everything that does not have "UL" in between any number of characters. So, fantastic work here.
>
> **[6:17](https://www.linkedin.com/learning/nail-your-sql-interview/querying-the-table-with-logical-operator-like?u=76281980&t=377)** To sum up, we reviewed some basic keyword operators, wildcards, and how to filter our data using the like operators specifically. Thank you for taking the time to improve your knowledge and more importantly, usage of these materials.

> [!info]- Semantic Content
>
> **Env Vars:** between (2), null (1), exists (1), ames (1)
> **UI Navigation:** select the (3), scroll down (1)
> **Non-Speech:** (upbeat music) (3)
> **CLI Commands:** make (2)
> **URLs:** [gmail.com](https://gmail.com) (2)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Querying the table with logical operators IN and BETWEEN](https://www.linkedin.com/learning/nail-your-sql-interview/querying-the-table-with-logical-operators-in-and-between?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nail-your-sql-interview/querying-the-table-with-logical-operators-in-and-between?u=76281980&t=0)** - [Instructor] In this video we're going to cover BETWEEN and IN which are two more keyword operators. BETWEEN returns data that is within a range of values. Whereas IN returns data that is within a list of values. Let's explore these with some examples. So as you can see here, we have code that has our friends' first name, birthdate, clothing sizes, and favorite colors. So we can go ahead and execute this code if you haven't already done so. But I've already done it, and we have our table here that we'll be working with for these exercises. So let's continue down to our first exercise. So, feel free to pause the video at any time to do these exercises on your own and rejoin me when you're ready. So exercise number one, query the entire table, and we've done that already. We're going to return the first name and shirt size, where the shirt size is in the range of medium, large, extra large, and XXL. And we're going to order that list alphabetically. Now pause the video and come back. If you're back, welcome back. Let's go ahead and complete our query. I'll show you how I did it. So I'm selecting the first name and shirt size from my table. Where the shirt size is in in medium, large, extra large, and XXL. Don't forget your quotes. And we're going to order by shirt size ascending.
>
> **[1:35](https://www.linkedin.com/learning/nail-your-sql-interview/querying-the-table-with-logical-operators-in-and-between?u=76281980&t=95)** Let's go ahead and do that now, execute. And I see, I have my first name and shirt size, and they're in alphabetical order so I know I've done it correctly. Let's move on to exercise number two. So for this exercise, we're going to query the entire table. We're going to select the birth month, the non-numeric birth month from our friends table. And we're going to look for dress sizes between two and 16 and pant size with an L, or large in it, and we're going to order by birth month alphabetically Go ahead and do that now. So first, I'm going to set up my query to select all from the friends table. And here, is where I do everything else. So I'm selecting the first name, pretty standard, and the pant size, and I'm going to use a DATENAME function, and I'm going to extract the month from the date that I input for everyone's birthday. And I'm going to rename this column "birthmonth", and I'm pulling all of that out of our friends table. And if you've never worked with the DATENAME function, you can use it to convert a date to any interval of your choosing pretty much, you can use month, day, year, even weekday. And finally, I want to pull out data for the dress size between two and 16, where their pant size,
>
> **[3:11](https://www.linkedin.com/learning/nail-your-sql-interview/querying-the-table-with-logical-operators-in-and-between?u=76281980&t=191)** they have a wildcard here, as something before the [[Microsoft Word|word]], or before the letter L. And I'm going to order by birth month. I'll select all and execute. So I see that I have three people returned, pant size looks correct, birth month looks correct. And you may be wondering, this person has a three XL, why weren't they returned? Well, their dress size is outside of the range and we did an "and" not an "or". So, that's why that person was not included. Let's move on to our next example, final one for this section. So finally, we're going to query the table if we need to, and we're going to select the first name and birth year of our friends form between 1980 and 1982, and we'll order them from young to oldest. Go ahead and do that now and rejoin me when you're ready. All right. So for our last one, we have the first name and we're going to use that datename function again, but this time instead of month, we're going to use year. That's the part of the date we want to extract this time. And we're going to name that column "birthyear". Pulling from the friends table where the birthday is between 1980 and 1982, and we're going to order by birth year descending. We want the youngest on top, let's execute.
>
> **[4:45](https://www.linkedin.com/learning/nail-your-sql-interview/querying-the-table-with-logical-operators-in-and-between?u=76281980&t=285)** And sure enough, we have Mark born in 1982, Bobby in 1981 and Tiana in 1980. That wasn't too bad, right? The knowledge is there and it always comes back the more you do it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Env Vars:** between (2), xxl (2), datename (2)
> **Non-Speech:** (upbeat music) (3)
> **UI Navigation:** select the (2)
> **Best Practices:** don't forget (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Working with the COALESCE command](https://www.linkedin.com/learning/nail-your-sql-interview/working-with-the-coalesce-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nail-your-sql-interview/working-with-the-coalesce-command?u=76281980&t=0)** - Welcome, or welcome back to this video on the Coalesce Function. Let's talk about how to use it and how it works, shall we? We're going to start by creating a table called Company Shirts. These are a table of all of our employees, their first name, their shirt size and their favorite color. And of course, a unique ID. To get it started we're going to insert some data. Doesn't have to be a lot, just two or three individuals just to get us started. Once you've done that, select everything and execute it. Now you see that I have three employees, their shirt size and their favorite color. So it looks like we have a new employee and they've only given us their first name and their favorite color. So we're just are going to put that information into our table and figure out the [[Representational State Transfer (REST)|rest]] when we need to. And let's select this and insert Jenny into our table. We see we have a null value for her shirt size. So we just got the email that we have to order the shirts. So we're going to use the Coalesce Function to insert a value for any nulls that we find on the table. So the Coalesce Function wants to return the first non-null value or failing that is going to return a specified value. We're going to set up the select with the first name, the favorite color and the Coalesce Function. I'm going to ask the Coalesce Function to return the shirt size. And if the shirt size is null, insert four XL into the table. Let's go ahead and do that now, see what we get.
>
> **[1:38](https://www.linkedin.com/learning/nail-your-sql-interview/working-with-the-coalesce-command?u=76281980&t=98)** So now we see that three people we started out with have retained the values that we originally put in the table, they were not overwritten. And Jenny, because she did not provide us with a shirt size, her shirt is now a four XL, which is the value that we gave it as a default. Now that we've rolled back the modifications that we've made to the table and we've queried the table to make sure we just have the null for Jenny in the shirt size column, let's explore how sometimes a Coalesce Function can be analogous to a Case Statement. So let's look at this with an example. So we can accomplish the same exact thing that we just did with a Case Statement. So here I have another transaction. I have a select statement, selecting the first name, the favorite color. And now, I'm going to say if it is the case that the shirt size is null, insert four XL. Otherwise, use a shirt size that's already in the table and then we're going to rename this new column Shirt Size. And we're getting all of this from the Company Shirts table. Let's go ahead and try this. And we see that we have the exact same table. Except we have a column name here, we didn't have one in the other example, that's my fault. So we have the same employees, we have their favorite colors and we have Jenny with the four XL because she did not provide a shirt size for us. The Case Statement is more human readable, but it adds a bit more in terms of code.
>
> **[3:12](https://www.linkedin.com/learning/nail-your-sql-interview/working-with-the-coalesce-command?u=76281980&t=192)** Whereas the Coalesce Function is more succinct but a little bit less intuitive. But here they're performing the exact same task.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** analogous to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - welcome (1)

#### [Challenge: End of year raises with COALESCE](https://www.linkedin.com/learning/nail-your-sql-interview/challenge-end-of-year-raises-with-coalesce?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nail-your-sql-interview/challenge-end-of-year-raises-with-coalesce?u=76281980&t=0)** - [Instructor] Welcome to this challenge video on the COALESCE function. I think this is a good place for a challenge. You've done some good work so far. By completing this challenge, you will have some good practice working with longer scenarios and also working with the COALESCE function. But here are your instructions. Your table should contain an ID, a first name, last name, country, starting salary, and current salary, and all of their associated data types. You're not limited to these columns, but these are the minimum requirements. You should have two sets of employees. The first set will be new hires with only a starting salary. The second set will be veteran hires with a starting salary and a current salary. Make sure the salaries are varied. Query the table using the COALESCE function. Give everyone whose current salary is less than or equal to $35,000 a 10% raise in a new column called salary rise or new salary, something of the like. If they don't have a current salary, AKA the new hires, then their starting salary should be in the new salary column. Depending on your previous experience with [[SQL]], this can take you anywhere from 10 to 30 minutes to complete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** coalesce (3), aka (1), sql (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: End of year raises with COALESCE](https://www.linkedin.com/learning/nail-your-sql-interview/solution-end-of-year-raises-with-coalesce?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nail-your-sql-interview/solution-end-of-year-raises-with-coalesce?u=76281980&t=0)** - [Instructor] Thank you for putting your knowledge to the test with the coalesce challenge. In this video, we're going to go through my solution. As we do that, please note that you may have done things a little differently but doesn't mean that you've done anything wrong. It's different. So let's begin by reviewing the instructions one step at a time. So first we were supposed to create a table with an ID, a first name, last name, country, a starting salary and a current salary. And we've done that here. And let's go ahead and execute this. Next set of instructions. You will have two sets of employees, new hires with only a starting salary, veteran hires with a starting salary and a current salary. Make sure the salaries are varied. We want a little bit of variety in terms of people's pay. So, I have my veteran employees first. And I am going to highlight and execute this. And I have my new hires right below. I'm going to also highlight and execute that. Lastly, we were supposed to query the table. And I see that I have four null values for my new hires current salary. So, let's move on to the next part. Using the coalesce function,
>
> **[1:32](https://www.linkedin.com/learning/nail-your-sql-interview/solution-end-of-year-raises-with-coalesce?u=76281980&t=92)** give everyone whose current salary is less than or equal to $35,000 a 10% raise in a new column called salary rise or new salary. If they don't have a current salary then their starting salary should be in the new salary column. So let's see how I did that. So I'm selecting all of the columns from my table. And then right before the end I am going to use the coalesce function to say if there's a current salary that's not null, add 10% to it and name it new salary. If not, use a starting salary in the new salary column. I'm getting all of that from the employee salary, where the employees are making less than or equal to $35,000. Let's go ahead and execute this. So let's look and see if we got it right. So these folks were making less than $35,000, so we gave them a 10% raise. We can see that here in the new salary column, the first four folks, and the last two people that we hired are new hires. So they didn't have a current salary. So we just took this starting salary and transport it right here into the new salary column. I hope you surpassed your expectations in this challenge. And if not, if something was a little bit difficult for you, maybe go back and watch some of the other videos or look forward to more resources
>
> **[3:05](https://www.linkedin.com/learning/nail-your-sql-interview/solution-end-of-year-raises-with-coalesce?u=76281980&t=185)** that might help you get to where you need to be. Thank you, and good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Data Manipulation Language Review

[↑ Back to Table of Contents](#table-of-contents)

#### [Update the table with UPDATE or ALTER](https://www.linkedin.com/learning/nail-your-sql-interview/update-the-table-with-update-or-alter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nail-your-sql-interview/update-the-table-with-update-or-alter?u=76281980&t=0)** - [Instructor] So, by this point in the course, if you've been following since the first video, you've had plenty of exercise in creating scripts and filtering data. Now, we'll take that a little bit further by using the employee salary table that you either just created, or you've gotten from the exercise files included with this video. We'll continue to use the same cadence of pausing the video, trying the exercise on your own, and then rejoining when you're ready. So, just as a refresher, we update data, and alter the structure of a table. So, those are the two important keywords to keep in mind. So, our first exercise for this activity is going to be updating the table to increase the salary, either current salary or starting salary, your choice, by $1,000, where the country is equal to any country you choose, any country in your table. So, go ahead and try that now. (jazzy upbeat music) All right. So, welcome back if you're coming back. So, this is the way I've chosen to do it. So, I've selected all from the table. So, I can compare the table before modifications and the table after. I'm using the update keyword here for my employee salary table. I'm adding $1,000 to the starting salary, where the country is Egypt. So, let's go ahead and run this. See what we have, and make the table a little longer. So, we have one person in Egypt, and they had $55,000 here and now they have $56,000.
>
> **[1:36](https://www.linkedin.com/learning/nail-your-sql-interview/update-the-table-with-update-or-alter?u=76281980&t=96)** So, this is extremely useful if you want to update given certain criteria, you can do that with the update keyword. So, for exercise number two, we're going to update the table, and where we have a country that says United States of America, we're going to set it to be USA. So, pause the video and work through that now. (jazzy piano music) All right, welcome back if you're coming back. So, I have the select here to compare and contrast, and I have my commented instructions. I still have my update keyword on the same table, and I'm going to set the country to USA using this keyword here, where the country is already equal to United States of America. So, let's do that now. So, this is our table pre. We had couple of people from the US, and now this says USA. So, I take it that that worked out well for us. I hope you got the same answer. Let's move on to our third exercise. So, we have our third exercise where we're going to add a new column to the table called retirement contribution, and we're going to use a datatype money. Pause the video, and try this on your own. (jazzy piano music) So, in this case, we are altering the structure of the table. So, remember we update data, alter the structure of the table.
>
> **[3:09](https://www.linkedin.com/learning/nail-your-sql-interview/update-the-table-with-update-or-alter?u=76281980&t=189)** So, now I need to use the alter keyword, and I'm altering what? The table. And I'm going to add a new column, so I'm adding retirement contribution is the name of the column, and the data type is money. And then I'm going to select all from the table. So, let's do that now. So, now I have a retirement contribution column, and it's null because we didn't provide it with a value, right? And for our final activity, let's get rid of that column. Actually it was supposed to go in a different table, so let's go ahead and get rid of it. Try it on your own. (jazzy music) All right, so welcome back for our last activity in this video. So, we are going to alter the table once again, 'cause we're changing the structure. We're getting rid of a column. And we're going to drop column retirement contribution, let's do that, and let's query the table one last time.
>
> **[4:11](https://www.linkedin.com/learning/nail-your-sql-interview/update-the-table-with-update-or-alter?u=76281980&t=251)** And there we have it, the column is gone. I hope this is starting to feel a little bit more comfortable and intuitive to you now. You're making great progress, and whether you are popping in for just this video, or if you've seen all of them up to this point, thank you very much, and good luck in your interview.

> [!info]- Semantic Content
>
> **Non-Speech:** (jazzy piano music) (2), (jazzy upbeat music) (1), (jazzy music) (1)
> **Env Vars:** usa (3)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Delete data using transactions](https://www.linkedin.com/learning/nail-your-sql-interview/delete-data-using-transactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nail-your-sql-interview/delete-data-using-transactions?u=76281980&t=0)** - [Instructor] There's a fear in [[SQL]] that's in life that will make a mistake that we can't recover from. We'll delete something that we weren't meant to delete. Alter something that wasn't meant to be altered. The good news is that SQL has some built-in functionality that will save you the heartache. We can use transactions to safely make updates or modifications to our database. So let's begin this video with a mini challenge. We're going to continue to use the employee salary table. We're going to start a transaction. We're going to delete an employee from the employee salary table. I'll let you choose the criteria by which they'll be deleted. And then we're going to select all from the table. Give it a try. (cheerful music) You may find it useful to query the table with a SELECT statement and view the fields before you make the deletion. Give it a try. (cheerful music) I'm using [[Microsoft SQL Server]]. So I'm using, begin transaction. Your syntax may be a little bit it different, if you're using something else, like [[MySQL]] for example. We're going to select all from the employee salary table where the last name is like lm or ei. And then we're going to select all from the employee salary table again. So the second one is not really meaningful for us right now but once we change the select all to a delete from, it'll make more sense. So let's give this a try. All right, so that got rid of most of our table.
>
> **[1:37](https://www.linkedin.com/learning/nail-your-sql-interview/delete-data-using-transactions?u=76281980&t=97)** So now you can go ahead and change the wording. I'm going to take this out and just replace it with a delete. And I'm going to go ahead and run this again. Okay. So let's move on in the next set of instructions. So we're going to roll this back and query the table again. So we have eight entries as of right now. So just going to simply type, rollback. I'm going to select all from employee salary. So as you can see here, I just went ahead and rolled back my changes, just simply using rollback. Then I query the table once again. My two rows are back and let's move on to the next step. We're going to start a transaction, delete from the employee salary table, where the employee makes greater than or equal to $50,000. Go ahead and give it a try now. (cheerful music) So here, you can see. I'm going to delete from the employee salary, where the current salary is greater than or equal to $50,000. But I think I'm missing something. All right, I need to begin my transaction. (keyboard clicking) And now I can execute my query. I'm going to query the table. (keyboard clicking)
>
> **[3:16](https://www.linkedin.com/learning/nail-your-sql-interview/delete-data-using-transactions?u=76281980&t=196)** All right, so I've gotten rid of three people and it looks like I'm down to seven entries.
>
> **[3:33](https://www.linkedin.com/learning/nail-your-sql-interview/delete-data-using-transactions?u=76281980&t=213)** (keyboard clicking)
>
> **[3:53](https://www.linkedin.com/learning/nail-your-sql-interview/delete-data-using-transactions?u=76281980&t=233)** And finally, I'm going to roll back my changes were at the table for the last time. So the main takeaways for this video are to make sure that you know the syntax for your Relational [[Database Management]] System to start a transaction. The syntax may vary. And if you don't feel comfortable, make sure you query your table with the SELECT statement to ensure that you are making the changes you intend to make. Thank you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Microsoft SQL Server]] (1), [[MySQL]] (1), [[Database Management]] (1)
> **CLI Commands:** make (7), find (1), mysql (1)
> **Non-Speech:** (cheerful music) (3), (keyboard clicking) (3)
> **Env Vars:** sql (3), select (2)
> **SQL:** select (2)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. Transaction Control Language

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating savepoints and commits in SQL](https://www.linkedin.com/learning/nail-your-sql-interview/creating-savepoints-and-commits-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nail-your-sql-interview/creating-savepoints-and-commits-in-sql?u=76281980&t=0)** - [Instructor] We've reached the last section in this course, and in this lesson, we're going to talk about savepoints and commits. Savepoints do exactly what the name would imply and save a point in time that we can roll back to should we need to do so. We'll be making multiple changes and creating savepoints that we can roll back to along the way. So we're going to start this video with a mini challenge. We're going to begin a transaction, delete a group of people using the where clause, save the transaction with a unique name, select all from the table, but don't commit yet. Pause the video and give it a try. All right. Welcome back if you are back. So we're going to begin the transaction. You see that here. I'm deleting, from the employee table, where the last name is like lm, so these two characters, and ei and anything following it, I'm going to save this as transaction sp1 and then I'm going to query my table. So let's run this now. All right. So it looks like two rows are missing. So let's move on and look to the second exercise. So I'm just going to have you choose something to modify on your own. Give it a unique savepoint name, but don't commit it just yet. So this how I did part two, I'm going to delete from the employee salary table
>
> **[1:34](https://www.linkedin.com/learning/nail-your-sql-interview/creating-savepoints-and-commits-in-sql?u=76281980&t=94)** where the country is Indonesia or the last name is like anything li and then followed by anything. I'm going to save this as savepoint 2, then I'm going to query the table. Now, for the final part, we're going to make one last modification of your choosing. It could be as big or as small as you like. So for my third query, I decided to delete anyone from the table that made less than or equal to $50,000, and I'm saving that as savepoint 3. Let's do that. Okay. I'm down to four people. So now let's roll back to our second savepoint and query the table. So this is the syntax to roll back your transaction to number two, a rollback transaction, sp2, that's what I named mine, so whatever you named yours, that's also fine, and then we're going to go ahead and execute that. So now I have four of my people back. So let's go ahead and commit these changes, I think we are done. All right. That is successful. So now that we've committed our changes, there's no going back. For fun though, let's try to roll back to one of our savepoints and see what happen. So for fun, let's try to see what happens if we try to roll back to let's say savepoint 3.
>
> **[3:29](https://www.linkedin.com/learning/nail-your-sql-interview/creating-savepoints-and-commits-in-sql?u=76281980&t=209)** So you see, what we've lost is our ability to undo prior changes. Savepoints in transactions give us a latitude to make adjustments before we get to this point. This was the last module for this course. If you've been here since the beginning, or if this was your first video, I appreciate you being here. I hope that you were able to take away some useful information that will aid you in your [[SQL]] interview.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **CLI Commands:** make (2)
> **Non-Speech:** (upbeat music) (2)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Be prepared for your interview](https://www.linkedin.com/learning/nail-your-sql-interview/be-prepared-for-your-interview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nail-your-sql-interview/be-prepared-for-your-interview?u=76281980&t=0)** - [Narrator] Congratulations and good luck. Normally, the good luck comes first and then the congratulations after you've completed something great. I want to congratulate you on believing in yourself enough to take the first step. You are brave and capable of great thing. I'm sure I don't need to tell you that, though. We've covered a lot in our time together, but there is more still to learn. I encourage you to take a look around [[LinkedIn]] Learning to explore some other courses that may pique your interest. In addition to that, there are myriad videos, books and other mediums of information regarding [[SQL]] that'll help you along your way. You don't need to learn it all today, but never stop acquiring knowledge. Here are a few of my favorites. So O'Reilly has the "SQL Pocket Guide," which is a nice little compact guide to all the things you'll need in SQL. Very concise explanations. Very, very good book. There's a "SQL Cookbook," which gives you a little bit more depth, but it doesn't explain it too much. It lets you do a little bit of the critical thinking for yourself. I highly recommend this book. And last in terms of books is the "[[Database Design]] for Mere Mortals." This will give you a really good primer on how [[Databases]] are constructed, why they're useful, and a lot of other background information that'll be really, really helpful to you as you go about your daily life in SQL. And lastly, I love W3Schools. It has a lot of different topics that you can see, but SQL is very robust, and it gives you a good way to play around with some different concepts
>
> **[1:32](https://www.linkedin.com/learning/nail-your-sql-interview/be-prepared-for-your-interview?u=76281980&t=92)** and brush up on specific things that you may be struggling with. So with that, this is not a goodbye, but a see you later. Remember, you don't have to be perfect, you just have to be prepared.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[LinkedIn]] (1), [[Database Design]] (1), [[Databases]] (1)
> **Env Vars:** sql (6)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Nichole Pulley]]

## Resources

- Exercise files available

## Skills Covered

- Interview Preparation
- SQL

## Path Context

### In [[Explore a Career in SQL Development]]
← [[SQL Hands-On Practice- Solve Business Problems]] | **7 of 8** | [[Finding New Career Paths with SQL]] →

## Appears In

- [[Explore a Career in SQL Development]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)