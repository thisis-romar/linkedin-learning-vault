---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: sql-for-healthcare-professionals
url: "https://www.linkedin.com/learning/sql-for-healthcare-professionals"
duration_minutes: 134
duration: 2h 14m
level: Intermediate
updated: 10/20/2025
learners: 59960
skills:
  - Healthcare Information Technology (HIT)
  - Data Analysis
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEFQQ9GdEwkMA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1721949636556?e=2147483647&amp;v=beta&amp;t=AkxGz98sHDaIiuPIfx5MwIlJ4_HN903kK97E9kLwlAc"
linkedin_topic: Data Science
learning_paths:
  - '[[Hands-On Healthcare Analytics]]'
prev_courses:
  - '[[Python Data Analysis for Healthcare]]'
next_courses:
  - '[[Descriptive Healthcare Analytics in R]]'
path_nav: '[{"path":"Hands-On Healthcare Analytics","position":5,"total":8,"prev":"Python Data Analysis for Healthcare","next":"Descriptive Healthcare Analytics in R"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/devops
  - topic/network-and-system-administration
  - topic/software-development
  - skill/healthcare-information-technology-hit
  - skill/data-analysis
  - skill/sql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/SQL%20for%20Healthcare%20Professionals.md)

![SQL for Healthcare Professionals](https://media.licdn.com/dms/image/v2/D560DAQEFQQ9GdEwkMA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1721949636556?e=2147483647&amp;v=beta&amp;t=AkxGz98sHDaIiuPIfx5MwIlJ4_HN903kK97E9kLwlAc)

# SQL for Healthcare Professionals

> In this course, healthcare data analyst Thais Cooke shows you how to integrate SQL in the field of healthcare. With the use of electronic records and the integration required to treat an individual as a whole, a strong understanding of computer languages, combined with an awareness of the challenges in healthcare, can help create better outcomes for patients, as well as solutions for problems with

> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-healthcare-professionals) | 2h 14m | Intermediate | 60K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [SQL for healthcare: Transforming data into insights](#sql-for-healthcare-transforming-data-into-insights)
  - [What you need to know](#what-you-need-to-know)
  - [Installing the SQL exercise files](#installing-the-sql-exercise-files)
- [**1. A Brief Overview of SQL**](#1-a-brief-overview-of-sql) (7 videos)
  - [Why use SQL in healthcare?](#why-use-sql-in-healthcare)
  - [How to gather data for analysis using SQL](#how-to-gather-data-for-analysis-using-sql)
  - [Using aggregate functions to manipulate the data](#using-aggregate-functions-to-manipulate-the-data)
  - [Using a CASE statement for data classification](#using-a-case-statement-for-data-classification)
  - [Date manipulation in SQL](#date-manipulation-in-sql)
  - [What are relational databases?](#what-are-relational-databases)
  - [How to gather data from different tables using JOINS](#how-to-gather-data-from-different-tables-using-joins)
- [**2. Patient Care Management**](#2-patient-care-management) (3 videos)
  - [How SQL is used in patient care management](#how-sql-is-used-in-patient-care-management)
  - [Using SQL to recommend individualized treatment](#using-sql-to-recommend-individualized-treatment)
  - [Patient safety monitoring](#patient-safety-monitoring)
- [**3. Population Health Management**](#3-population-health-management) (6 videos)
  - [How to use SQL to manage population health](#how-to-use-sql-to-manage-population-health)
  - [Risk stratification in SQL](#risk-stratification-in-sql)
  - [Predictive analytics in population health](#predictive-analytics-in-population-health)
  - [Social determinants of health (SDOH) and SQL](#social-determinants-of-health-sdoh-and-sql)
  - [Challenge: Risk stratification](#challenge-risk-stratification)
  - [Solution: Risk stratification](#solution-risk-stratification)
- [**4. Clinical Research**](#4-clinical-research) (4 videos)
  - [Using SQL in clinical research](#using-sql-in-clinical-research)
  - [Cohort identification using SQL](#cohort-identification-using-sql)
  - [Descriptive analytics using SQL in clinical research](#descriptive-analytics-using-sql-in-clinical-research)
  - [Outcome analysis techniques with SQL](#outcome-analysis-techniques-with-sql)
- [**5. Healthcare Administration**](#5-healthcare-administration) (5 videos)
  - [How to use SQL to analyze workflow](#how-to-use-sql-to-analyze-workflow)
  - [Data exchange using SQL](#data-exchange-using-sql)
  - [Quality improvement initiatives](#quality-improvement-initiatives)
  - [Challenge: Appointment analysis](#challenge-appointment-analysis)
  - [Solution: Appointment analysis](#solution-appointment-analysis)
- [**6. Final Project: Healthcare Analytics**](#6-final-project-healthcare-analytics) (8 videos)
  - [Assignment: Healthcare analytics scenario](#assignment-healthcare-analytics-scenario)
  - [Walkthrough: Demographics scenario](#walkthrough-demographics-scenario)
  - [Walkthrough: Demographics and diagnosis scenario](#walkthrough-demographics-and-diagnosis-scenario)
  - [Walkthrough: Appointments scenario](#walkthrough-appointments-scenario)
  - [Walkthrough: Laboratory scenario](#walkthrough-laboratory-scenario)
  - [Walkthrough: Laboratory with risk scenario](#walkthrough-laboratory-with-risk-scenario)
  - [Walkthrough: Risk scenario](#walkthrough-risk-scenario)
  - [Walkthrough: Readmission scenario](#walkthrough-readmission-scenario)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [SQL for healthcare: Transforming data into insights](https://www.linkedin.com/learning/sql-for-healthcare-professionals/sql-for-healthcare-transforming-data-into-insights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/sql-for-healthcare-transforming-data-into-insights?u=76281980&t=0)** - When thinking about data, what is the first thing that comes to mind? You might picture everyday transactions or [[Business Analytics]], but what about healthcare? Healthcare data can be used to improve patient outcomes to research treatments, or in medical demonstration. Learning how to manage all the information has become crucial to making informed decisions. [[SQL]] is the language that we use to store, retrieve and manipulate data into meaningful information. Hello, my name is Thais Cooke, a healthcare professional journey data analyst. Join this course in SQL for healthcare and [[LinkedIn]] Learning, and I'll guide you on how to use the power of SQL to get insights and make impactful data-driven decisions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Business Analytics]] (1), [[LinkedIn]] (1)
> **Env Vars:** sql (3)
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Speakers:** - when (1)

#### [What you need to know](https://www.linkedin.com/learning/sql-for-healthcare-professionals/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/what-you-need-to-know?u=76281980&t=0)** - The primary goal of this course is to show how [[SQL]] can be used in the [[Healthcare Industry]]. This course is useful for healthcare professionals who want to transition to [[Healthcare Analytics]] and data professionals who want to learn about how SQL can be used in the healthcare industry. There'll be a final project at the end to practice the concepts learned throughout the course, which includes critical examples in a healthcare scenario to enhance your learning. So if you're ready to get it started, let's jump in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Healthcare Industry]] (2), [[Healthcare Analytics]] (1)
> **Env Vars:** sql (2)
> **Speakers:** - the (1)

#### [Installing the SQL exercise files](https://www.linkedin.com/learning/sql-for-healthcare-professionals/installing-the-sql-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/installing-the-sql-exercise-files?u=76281980&t=0)** - [Instructor] For this course, we're going to be using [[Microsoft SQL Server]]. Feel free to use any type of [[SQL]] that you'll feel more comfortable with. So I'm going to show how to import this data into Microsoft SQL server. First, we're going to create a database and we're going to name this database Healthcare_Database. Go, going to Execute, right click, Refresh, and here's our database. Next, we're going to get the server's name. So we're going to write Select Server name, Execute, and it's going to show your server name. You're going to copy the server name, you're going to right click Healthcare Database, Tasks. You're going to import your data. So I'm going to click next, and our data source is going to be [[Microsoft Excel]]. That's where your exercise files are. You're going to browse and here are your exercise files. Let's choose hospital records. You're going to open, I'm going to click next. Now I'm going to choose a destination. In this case, we're going to choose [[Microsoft]] All Lead DB Driver for [[Microsoft SQL Server|SQL Server]]. You're going join Properties.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-healthcare-professionals/installing-the-sql-exercise-files?u=76281980&t=95)** In here you're going to paste the server name. You're going to use [[Windows]] Authentication, and we're going to choose the database that we just created. You can test your connection. You click okay. Next, next, next.
>
> **[1:59](https://www.linkedin.com/learning/sql-for-healthcare-professionals/installing-the-sql-exercise-files?u=76281980&t=119)** All the way to finish. So now your data should be transferring to Microsoft SQL Server. You're going to right click on the database, refresh, open it, open the tables, and you're going to see hospital records. We're going to right click, rename. You going to delete the dollar sign and the single quotation. So if you want to see those records, you can right click. And here are all your records transferring to Microsoft SQL Server. Now you'll go into your exercise files, and if you want to see the first query, you can click SQLOverview 010 to begin and here is going to be the first query. If you want to see the results, go here and your answer is going to be here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server]] (4), [[SQL]] (1), [[Microsoft Excel]] (1), [[Microsoft]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** sql (6)
> **Exercise Files:** exercise files (3)
> **UI Navigation:** click on (1), open the (1)
> **Speakers:** - [instructor] (1)


### 1. A Brief Overview of SQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Why use SQL in healthcare?](https://www.linkedin.com/learning/sql-for-healthcare-professionals/why-sql-in-healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/why-sql-in-healthcare?u=76281980&t=0)** - Imagine you work at a hospital and think about the amount of medical data generated daily. You have data about admissions, medications, procedures, demographic data, and so on. Now, imagine all the data being collected and stored in a spreadsheet. That document would need to be updated daily for new information, and multiple data analysts are trying to work on the same spreadsheet at the same time. Sounds confusing, right? There's a limit to how much data the spreadsheets can handle, and that's when [[SQL]] comes in. SQL stands for structured query language. It is a computer language developed in the 1970s and one of the most widely used languages. It enables its users to pull data from the [[Databases]] and manipulate it using queries to gather insights. With SQL, multiple data analysts can query the database at the same time, and data engineers can now update the database using automation. If you want to work as a healthcare data analyst, you'll be expected that you know the basics of SQL to pull the data out of the database and do some data prep. The knowledge of SQL not only helps in handling healthcare data, but it also opens up opportunities for more advanced analytics and insights, which will lead to better decision making
>
> **[1:33](https://www.linkedin.com/learning/sql-for-healthcare-professionals/why-sql-in-healthcare?u=76281980&t=93)** in the [[Healthcare Industry]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Databases]] (1), [[Healthcare Industry]] (1)
> **Env Vars:** sql (5)
> **Definitions:** stands for (1), is a  (1)
> **Analogies:** imagine (2)
> **Speakers:** - imagine (1)

#### [How to gather data for analysis using SQL](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-gather-data-for-analysis-using-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-gather-data-for-analysis-using-sql?u=76281980&t=0)** - [Instructor] A query is how we retrieve the data from the database. Think of it as how you would speak the language of your database to ask a question. And in return, the database provides the answer. Just like communicating in another language using the correct grammar vocabulary, writing effective [[SQL]] queries is crucial in gathering the insights you're looking for. The most common clauses you use in SQL are SELECT, FROM, and WHERE. SELECT is used to pull the data. You can pull all the data from a table by using the command SELECT * where * is the same as everything, or specific data by using SELECT and the name of the column. FROM tells the database where to pull the desired data from. That's the name of your table and the source of where the columns are coming from. WHERE filters the data that was selected from a database to certain records that satisfy a condition. Let's apply this knowledge in example. You are looking for all the patient's records and appointments. You can use SELECT * FROM [Healthcare_Database].[dbo].Appointments.
>
> **[1:28](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-gather-data-for-analysis-using-sql?u=76281980&t=88)** And if you highlight and execute, you're going to get all the records from that table. Now, if you only look for the patient ID of patients who had an appointment in the pediatrics department, you can modify your query by typing SELECT patient_id, department_name FROM the table, [Healthcare_Database].[dbo].Appointments WHERE department_name = 'pediatrics'.
>
> **[2:12](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-gather-data-for-analysis-using-sql?u=76281980&t=132)** I'm going to highlight this query and click execute. And here you have it. You have a list of all the patients that belong to the pediatrics department. Now that you know how to gather the information you're looking for, let's look at aggregate functions to learn how to get deeper insights from the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Env Vars:** select (6), where (3), sql (2)
> **SQL:** select (6), where (3)
> **Code Identifiers:** department_name (2), patient_id (1)
> **Analogies:** think of it as (1), just like (1)
> **Speakers:** - [instructor] (1)

#### [Using aggregate functions to manipulate the data](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-aggregate-functions-to-manipulate-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-aggregate-functions-to-manipulate-the-data?u=76281980&t=0)** - [Instructor] When working in [[Healthcare Analytics]], it is common to have questions that require calculations with the data. [[SQL]] has built in functions that allow different types of calculations to be performed. Let's discuss some of the most common aggregate functions. Aggregate functions return the basic [[Statistics]] on a group of records. Average, count, maximum and minimum are some examples of those types of functions. As the name indicates, average calculates the arithmetic means of a set of values in the column. Count returns the number of records in a data set or the number of non null values in a column. Maximum returns the highest value in a column of numeric or date-time data types. It's useful for finding the maximum value of a certain parameter, such as the highest blood pressure reading among patients. Minimum returns the smallest value in a column of numeric or date-time data types. It's handy identifying the minimum value of a parameter like the lowest body temperature recorded for patients. As a healthcare data analyst, you'll be using those functions quite frequently. Here are some examples of how to apply those functions to manipulate the data in a meaningful way. You want to know how many patients on average
>
> **[1:37](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-aggregate-functions-to-manipulate-the-data?u=76281980&t=97)** the patient spent in the cardiology department of the hospital. The following query will filter your results to show only records relevant to the cardiology department. You're going to write SELECT AVG, which is the shortcut for average days_in_the_hospital, and you're going to name this column AS average_days_cardiology
>
> **[2:13](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-aggregate-functions-to-manipulate-the-data?u=76281980&t=133)** from the table Healthcare_Database.[Dbo].[Hospital Records]
>
> **[2:25](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-aggregate-functions-to-manipulate-the-data?u=76281980&t=145)** and you're going to filter by using the WHERE clause, WHERE department_name = 'Cardiology'.
>
> **[2:39](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-aggregate-functions-to-manipulate-the-data?u=76281980&t=159)** If you run the query, you're going to see the average number of days the patient are spending in the cardiology department. Now, what if you want to compare the average number of days the patients are spending in each department of the hospital? In that case, you can use the GROUP BY clause. The key with GROUP BY is to declare which column you want to group your data by in your SELECT statement. Your query will now look like this. SELECT department_name, AVG(days_in_the_hospital).
>
> **[3:26](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-aggregate-functions-to-manipulate-the-data?u=76281980&t=206)** You're going to name this column, avg_days_per_department
>
> **[3:36](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-aggregate-functions-to-manipulate-the-data?u=76281980&t=216)** from the table Healthcare_Database.[Dbo].[Hospital Records]
>
> **[3:45](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-aggregate-functions-to-manipulate-the-data?u=76281980&t=225)** and you're going to group this data by department name. You can also do an option of using ORDER BY, and you can order this data by the average days per department in descending order. And if you highlight this query and click Execute, it is going to give you each department's name with each average day per department and is ordering from the highest value to the lowest value. This query will give you the average number of days in the hospital per department, which enable you to make comparisons with your data. You can also use multiple aggregate functions on the same query. There is no limit when it comes to aggregating of data to get insights. Go ahead and think about some of the challenges you have and how using aggregate functions would help you get those answers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Healthcare Analytics]] (1), [[SQL]] (1), [[Statistics]] (1)
> **Env Vars:** select (3), avg (2), where (2), group (2), sql (1)
> **SQL:** select (3), where (2), group by (2), order by (1)
> **Code Identifiers:** days_in_the_hospital (2), department_name (2), average_days_cardiology (1), avg_days_per_department (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Using a CASE statement for data classification](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-case-statement-for-data-classification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-case-statement-for-data-classification?u=76281980&t=0)** - [Instructor] One of the challenges that you might face as a healthcare analyst is how to classify your data correctly when meeting certain conditions. That's the perfect scenario to apply the CASE statement. If you're familiar with [[Microsoft Excel|Excel]], think about how you do use the If function. They have some similarities. The CASE statement enables the users to use logic to categorize and label data in a meaningful way. Uses the warrants CASE When to specify the condition, Then to specify the output, End to finish the CASE statement and an optional As to give an alias to the new column. For instance, if you want to categorize patients based on their length of stay in the hospital, you can write a query as follows. Select patient ID, days in the hospital, and then we're going to build our CASE statement. I'm going to say CASE, when the days in the hospital
>
> **[1:16](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-case-statement-for-data-classification?u=76281980&t=76)** are less or equal to three, then those records are going to be considered short. When the days in the hospital is less or equal to five, then those records are going to be considered medium. Anything else that doesn't fall into those categories are going to be considered long. I'm going to end the CASE statement as stay_category. We're getting those records from the table. HealthCare_Database, dot-dbo, dot-Hospital Records.
>
> **[2:06](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-case-statement-for-data-classification?u=76281980&t=126)** And if you highlight and execute, you're going to see each patient categorized by the states medium, long, or short based on how many days each patient spent in the hospital. You can also add aggregate functions to your CASE statement. In this example, we'll use count to count the number of patients in each category. In that case, all you must do is add the aggregate function, Count, to the query. So let's build a query by saying select, and we're going to copy and paste the CASE statement and we're going to add the column, count is star, which means everything. And I'm going to alias this column as number of records. Since we have an aggregate function, we have to group our data by our CASE statement. And if you run this query, which I forgot to put in here, where we're pulling this data from, which is a very common error to do. Dot-Hospital Records. Now it should be ready to go. We're going to highlight this query, click Execute, and here you have it. You're going to have each state category, long, medium, short, and how many records belong to each category.
>
> **[3:43](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-case-statement-for-data-classification?u=76281980&t=223)** In the [[Healthcare Industry]], it is crucial to know how to correctly classify your data. The CASE statement combined with aggregate functions is a very powerful resource that will help reveal new insights.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1), [[Healthcare Industry]] (1)
> **Env Vars:** case (11)
> **Definitions:** is a  (2)
> **Code Identifiers:** stay_category (1)
> **Analogies:** for instance (1)
> **Warnings:** common error (1)
> **Speakers:** - [instructor] (1)

#### [Date manipulation in SQL](https://www.linkedin.com/learning/sql-for-healthcare-professionals/date-manipulation-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/date-manipulation-in-sql?u=76281980&t=0)** - [Instructor] Healthcare analysts use dates quite frequently. Measurements such as tracking dates of patient encounters, monitoring treatment progress and analyzing trends over time relies heavily on [[Data Manipulation]]. [[SQL]] has data functions that offer simple approach to working with date and time data effectively. Let's look into different SQL functions and how to use each of them. First, let's look into the function, get date. This function enables the SQL user to retrieve and make calculations using the current date and time from the system. You can type, select, get date, and let's name this column, "Today." If you highlight and run this query, this will give you the current date and time when you're running this command. The next function is called date part. This function enable the SQL user to extract integer values, represent specific parts of a date or time, such as year, month, hour, minute, and so on. Let's take a look. In this example, we are using date part of the select statement. So we're going to write select, appointment, date, and then we're going to build our date part function. Date part uses two augments.
>
> **[1:36](https://www.linkedin.com/learning/sql-for-healthcare-professionals/date-manipulation-in-sql?u=76281980&t=96)** The first one is the output that you want the query to retrieve. In this case, we'll use weekdays. The second argument is the column that you're using to retrieve the information from. In this case, we want the day of the week from the appointment date column, and we're going to name this column, "Date of the week." Now we're going to specify the table that we want this from. So this is going to come from healthcare database, dot, dbo, dot, Appointments. And if you run this query, it's going to give you each appointment date with the day of the week. Remember that in this case, SQL signs the value one to Sunday, two to Monday and so on. Here's another example, but now we want the hour from the appointment time column. So for this, we can write select, appointment time. We're going to build a function, date part. Now we want the output to be ours. So we're going to write our, the column that we want data from which it is appointment time. And we're going to name this column, "Appointment hour." And this is going to come from the same table,
>
> **[3:12](https://www.linkedin.com/learning/sql-for-healthcare-professionals/date-manipulation-in-sql?u=76281980&t=192)** Healthcare database dot, dbo, dot, appointments. And if you run this query, you're going to see the appointment time and the appointment tower. So in here is our eight, our nine, our 11, and so on. So as you can see, date part enables the SQL user to easily retrieve the useful part of a date. But now what if you need to retrieve the date in a name format? For instance, if you wanted the name January instead of one or the name Monday instead of two, that's when date name comes into play. Date name is very similar to date part. You also use similar augments. So let's start by writing select appointment date, and instead of date part, we're going to use date name. We also want week date, appointment date. We're going to name this column as day of the week. And this is also coming from the same table. Healthcare database, dot, DBO, dot, appointments. And you highlight and run, you can see that the day of the week now says the actual date, Saturday, Tuesday, Thursday, and so on. Let's see how we can make calculations using dates. The function date add allows for adding or subtracting specified time interval to a given date.
>
> **[4:48](https://www.linkedin.com/learning/sql-for-healthcare-professionals/date-manipulation-in-sql?u=76281980&t=288)** So for example, to add five days short date, we're going to write SELECT, DATEADD, and we want the number of days. We want to add five days to a specific date. So let's say that we want to add five days from 2024, October 1st, and we're going to call this new date. If you run this command, you're going to see that instead of October 1st, now into October 6th, yet the five days to this date. Now, let's say that we want to subtract two months from date. Now, we're going to write select. Also date add. We want subtract months. So since we want to subtract, we have to put minus, minus two. Let's use the same date 20, 24, October 1st. Let's name this again new date. And if you run this query, you're going to see that went from October to August is subtracted two months from this date. Go ahead and explore this function, [[Microsoft SQL Server|SQL server]]. It's a great way to practice date manipulation. Now, we're going to go to date diff. Date diff is a function that enables the calculation
>
> **[6:23](https://www.linkedin.com/learning/sql-for-healthcare-professionals/date-manipulation-in-sql?u=76281980&t=383)** of the difference between two dates, returning value, representing the interval between them in a specified unit, which can be dates, months, and so on. So data diffuse is three parts. So let's say select, date diff. And now we want the number of days between 2024, January 1st, and 2024, January 10th.
>
> **[6:57](https://www.linkedin.com/learning/sql-for-healthcare-professionals/date-manipulation-in-sql?u=76281980&t=417)** And let's name this column date difference. If you run this query, you're going to see that there is nine days between January 1st and January 10th. Let's look at another example. Now you want to retrieve the number of months between January 1st, 2023 and May 10th, 2024. So we're going to write select, date diff. We want to know number of months between 2023, January 1st and 2024, May 1st.
>
> **[7:43](https://www.linkedin.com/learning/sql-for-healthcare-professionals/date-manipulation-in-sql?u=76281980&t=463)** I'm going to name this column date difference. So if you run this, you're going to see that there are 16 months between January 1st, 2023 and May 1st, 2024. You can also calculate the difference between two given columns. In this final example, we want to calculate the difference between the arrival time and the appointment time in hours from the appointment table. So let's write the following syntax. Select, appointment time, arrival time.
>
> **[8:24](https://www.linkedin.com/learning/sql-for-healthcare-professionals/date-manipulation-in-sql?u=76281980&t=504)** Let's build a date diff function. Now we want this to come out as minutes, and the difference is going to be between appointment time and arrival time. I'm going to name this column as minutes difference, and we're going to pull those records from the table. Healthcare database, dot, dbo, dot, appointments. Now if you this query, it's going to give you each appointment time, each arrival time, and how many minutes of difference there was between them. Some of the positive values, some of the negative values depends on how those records are. Those are some of the most common functions for manipulating during calculations using dates. Whether calculating patient waiting times or measuring treatment effectiveness over time, SQL date functions enables healthcare analysts to extract meaningful information from the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Data Manipulation]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** sql (8), dbo (1), select (1), dateadd (1)
> **Analogies:** such as (2), for instance (1), similar to (1), for example (1)
> **CLI Commands:** make (2)
> **Definitions:** is called (1), is a  (1)
> **SQL:** select (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [What are relational databases?](https://www.linkedin.com/learning/sql-for-healthcare-professionals/what-are-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/what-are-relational-databases?u=76281980&t=0)** - When thinking about a table in a database, what comes to mind? Think of a table in the same format as a spreadsheet. You have your columns and rows, but most of the time the information needs is stored on different tables. To get information together, you make use of common keys. Each table has common keys that work as links, which allows you to create connections between two or more tables. For example, think about a table that contains the patient demographics, such as name and gender, and another one that contains the patient's medications. You can connect those tables by using a common key, such as patient ID. This allows you to use the database to quickly connect the patient with the respective medication. The [[Databases]] I structure through normalization, which is the technique that divides the tables into smaller tables and connects them via relationships. These will prevent redundancy and increase [[Data Integrity]]. By organizing data into normalized tables, sensitive patient formation can be segmented and restricted, reducing the risk of unauthorized access. This approach helps enforce security measures, safeguarding patient confidentiality, and complying with regulatory standards such as HIPPA. If you're interested in learning more about normalization, feel free to explore all the courses
>
> **[1:33](https://www.linkedin.com/learning/sql-for-healthcare-professionals/what-are-relational-databases?u=76281980&t=93)** in the [[LinkedIn]] Learning Library. In the next video, let's look at how to connect information from different tables using Joins.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Data Integrity]] (1), [[LinkedIn]] (1)
> **Analogies:** such as (3), for example (1)
> **CLI Commands:** make (1)
> **Env Vars:** hippa (1)
> **Cross-References:** in the next (1)
> **Speakers:** - when (1)

#### [How to gather data from different tables using JOINS](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-gather-data-from-different-tables-using-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-gather-data-from-different-tables-using-joins?u=76281980&t=0)** - [Instructor] When answering questions using data, most of the time, the necessary information will exist in different tables. That's when joins comes in. [[SQL]] joins are used to query data coming from multiple tables, allowing you to link all the information together. In this video, we'll discuss the most common types of joins, inner joins, left joins, right joins, and outer joins. The inner join will only return records that are common to both tables. A left join returns all the rows from the left table, which is the table mentioned first in the query, and the matching rows from the right table based on the join condition. If there are no matching rows in the right table, no values are returned. The right join works like the left join, but you will return all the records that are present in the right table and the matching records from the left table. In practice, this is rarely used since we can just use a left join and switch the order of the left and right tables. Full or outer join returns all rows from both tables, matching rows from both tables available and no values for non-matching rows in either table. This means includes all rows from both tables regardless of whether there's a match or not.
>
> **[1:37](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-gather-data-from-different-tables-using-joins?u=76281980&t=97)** Let's apply those concepts to answer the following question. Find out which patients on the patients table were hospitalized and for how many days. This is how we're going to write the query. We're going to start by doing our join. We're going to write FROM [Healthcare_Database].[dbo].[patients]
>
> **[2:07](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-gather-data-from-different-tables-using-joins?u=76281980&t=127)** and we're going to alias this table AS p. We're going to join, INNER JOIN, on the table [Healthcare_Database].[dbo].[Hospital Records].
>
> **[2:31](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-gather-data-from-different-tables-using-joins?u=76281980&t=151)** We're going to alias this table AS hr. We're going to specify which key we're joining these tables on, so we're going to write ON p.patient_id = hr.patient_id.
>
> **[2:48](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-gather-data-from-different-tables-using-joins?u=76281980&t=168)** This means we're going to use the column patient_id that belongs to each of those tables to join them together. Now that our join's complete, we can go ahead and select our columns. I'm going to write SELECT patient_id, Days_in_the_hospital. There is just one problem, patient_id column is present in patients and Hospital Records. So to specify exactly where this column is coming from, we have to put a prefix. In this case, I want to put p.patient_id. And this way, I'm indicating that the patient_id column is coming from the patients table. I'm going to highlight this and execute. And here you have it. Those are the patients on the patients table that were hospitalized and how many days each one of them spent in the hospital. Now, what if you want to see all the patients from the patients table to verify who were not admitted to the hospital? You can verify who has a hospital record. So, what we can do is we can modify this previous query by doing a LEFT JOIN So, let's copy and paste this query. Instead of INNER, We're going to do a LEFT JOIN. And what we're looking for are the patients that don't have a Days_in_the_hospital record. So, we're going to filter by using the WHERE clause, WHERE Days_in_the_hospital is going to be NULL,
>
> **[4:24](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-gather-data-from-different-tables-using-joins?u=76281980&t=264)** so you write IS NULL. You highlight and execute. And those are the patients that don't have a record in the Days_in_the_hospital column, indicating that those patients were not hospitalized. This ends our brief review of SQL. Feel free to come back to this chapter since we'll be using those concepts often. Now, let's dive into how to apply SQL in the [[Healthcare Industry]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Healthcare Industry]] (1)
> **Env Vars:** sql (3), join (3), inner (2), left (2), where (2)
> **Code Identifiers:** patient_id (7)
> **SQL:** left join (2), where (2), inner join (1), select (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 2. Patient Care Management

[↑ Back to Table of Contents](#table-of-contents)

#### [How SQL is used in patient care management](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-sql-is-used-in-patient-care-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-sql-is-used-in-patient-care-management?u=76281980&t=0)** - Remember the last time you went to the doctor and think about all the generated data. You find information about your appointments, lab results, medications, and a lot more. In the past, all this information be inside your physical medical folder, which would be stored in physical cabinet files. Today, those same records can be stored digitally in tables within the database. This change has created a big impact, not only how those records are stored, but also in the possibilities of managing the patient's health, creating predictions of future outcomes, and opening the doors to early interventions in preventative care. [[SQL]]'s a very popular [[Data Management]] system used in healthcare because of its ability to store and manage large amounts of data while maintaining patient [[Privacy]] and [[Data Integrity]]. It also enables healthcare professionals to retrieve patient data quickly and efficiently using SQL queries. Those queries will enable the healthcare analysts to analyze patterns and trends to gather insights about the patient. Until recently, medical professionals used mostly paper documents. If all the treatment took place within one facility, that was doable. Nowadays, however, many treatments and tests take place at different locations,
>
> **[1:33](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-sql-is-used-in-patient-care-management?u=76281980&t=93)** which means that data comes from different sources besides your doctor's [[Microsoft Office|office]]. Think about how many times we refer to a lab for blood work, for instance. Those results can easily be integrated into a database. Electronic health records are faster and more reliable than paper records, especially if the medical professionals need immediate access to the patient's records. Suppose a healthcare organization wants to integrate all the information, including electronic health records, laboratory systems, administrative systems, and billing systems, to create a comprehensive patient profile. By integrating data from multiple sources using SQL, healthcare organizations can create a unified and comprehensive view of patient information, which unlocks multiple possibilities and different angles to approach and prevent problems that might arise related to the patient's health. As you can see, when integrating patient data into a database, SQL plays a crucial role in helping organizations to store and manage patient data effectively, maintaining patient privacy and enhancing patient outcomes. In knowing how to use SQL, healthcare professionals can use patient data to deliver personalized and high quality care.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Privacy]] (2), [[Data Management]] (1), [[Data Integrity]] (1), [[Microsoft Office|Office]] (1)
> **Env Vars:** sql (5)
> **CLI Commands:** find (1)
> **Definitions:** means that (1)
> **Analogies:** for instance (1)
> **Speakers:** - remember (1)

#### [Using SQL to recommend individualized treatment](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-sql-to-recommend-individualized-treatment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-sql-to-recommend-individualized-treatment?u=76281980&t=0)** - What makes a medical treatment successful? For some simple conditions, it is only a matter of having a test result and a medication therapy prescribed. Other conditions, however, can be complex and other factors, such as genetic markers. lifestyle and contraindications must be taken into consideration when deciding on which treatment's the best one for the specific group of patients. That's why [[SQL]] can help in making that decision. Imagine a scenario where a healthcare organization is treating patients with hypertension. While traditional patient guidelines provides general recommendations for medication lifestyle changes, individual patient characteristics influence how effective the treatment is. For instance, some patients may have genetic predispositions or take certain medications, while others may have all the lifestyle factors such as stress level, a specific diet that impacts their blood pressure control. When the patient's data is integrated into a SQL database, that information can be analyzed with SQL queries to identify patterns, trends, and correlations that can form treatment recommendations in depth of patients. For example, SQL queries can analyze the relationship between genetic markers and medication response. Identify lifestyle factors associated with blood pressure control, and access impacts of multiple medical conditions on the same patient on treatment outcomes. Consider patient with hypertension, who has a family history of cardiovascular disease and a genetic predisposition to respond to particular type of medication.
>
> **[1:34](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-sql-to-recommend-individualized-treatment?u=76281980&t=94)** Based on this patient's profile, SQL queries can identify the most effective treatment considering genetic factors, family history, and potential drug interactions. SQL combined with clinical knowledge is a powerful resource, and healthcare organizations can use the power of patient data to generate personalized recommendations and take a more holistic approach, improving the patient's quality of care.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6)
> **Env Vars:** sql (6)
> **Analogies:** such as (1), imagine (1), for instance (1), for example (1)
> **Definitions:** is a  (1)
> **Speakers:** - what (1)

#### [Patient safety monitoring](https://www.linkedin.com/learning/sql-for-healthcare-professionals/patient-safety-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/patient-safety-monitoring?u=76281980&t=0)** - [Instructor] One of the challenges in the [[Healthcare Industry]] is how to prevent medical errors and ensure patient safety. Leveraging [[SQL]] for patient safety monitoring can address those challenges by analyzing patient data and identifying potential issues before they escalate. SQL enables healthcare organizations to integrate and analyze vast amounts of data from several sources. By querying this data, healthcare providers can identify high-risk patients and implement targeted interventions to mitigate safety risks. Imagine you're working as a healthcare data analyst for a large hospital. One day, you receive a request to help identify potential risks associated with medication interactions in patients who smoke. You dive into the hospital's database to uncover insights that could improve patient care. As you explore the data, you find a concerning trend. Patients who have prescribed certain medications, such as lisinopril, metformin, and insulin, are also identified as smokers in their patient records. Knowing that smoking can interfere with the effectiveness of these medications, you realize the importance of identifying those patients and intervening to ensure their safety. You can craft a query in SQL to flag patients who are at risk due to the interaction between their medication and smoking status.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-healthcare-professionals/patient-safety-monitoring?u=76281980&t=95)** So we're going to write by selecting our columns, patient_id, diagnosis, medication_prescribed, smoker_status. And then we're going to build a CASE statement based on the conditions of those patients. So we're going to say CASE, and when the smoker_status is positive, and in this case is Y, and the medication_prescribed is in, and in here you're going to list all the medications mentioned, which were insulin, metformin, and lisinopril. Then, in this CASE, those records are going to have the flag, "Potential Safety Concern: Smoking and Medication Interactions." Anything else that doesn't fall into this category is going to say, "No Safety Concern Identify."
>
> **[2:55](https://www.linkedin.com/learning/sql-for-healthcare-professionals/patient-safety-monitoring?u=76281980&t=175)** You're going to end this CASE statement, and we're going to name this column, safety_concern. And we're going to put this data, from the table healthcare dataset, [Healthcare_Database].[dbo].[Outpatient Visits].
>
> **[3:23](https://www.linkedin.com/learning/sql-for-healthcare-professionals/patient-safety-monitoring?u=76281980&t=203)** Now, let's run this query, and here are your results. So every time this patient is on either insulin or metformin and they are also smokers, you can see that the safety_concern flag showed up. You'll share these findings with the patient safety team who will notify healthcare providers to review and adjust treatment plans as needed. Thanks to your proactive approach using SQL, potential risks are identified and mitigated, ultimately improving patient outcomes and safety within the hospital.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Healthcare Industry]] (1)
> **Env Vars:** sql (4), case (4)
> **Code Identifiers:** medication_prescribed (2), smoker_status (2), safety_concern (2), patient_id (1)
> **Analogies:** imagine (1), such as (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 3. Population Health Management

[↑ Back to Table of Contents](#table-of-contents)

#### [How to use SQL to manage population health](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-use-sql-to-manage-population-health?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-use-sql-to-manage-population-health?u=76281980&t=0)** - In today's healthcare landscape, the focus has shifted from treating individual patients to improve the health outcomes of entire populations. Population health management has emerged to help achieve this goal, by leveraging data analytics to identify health trends, assess risk factors, and implement target interventions. [[SQL]] is well known for its ability to store, organize, and analyze large amounts of data, making it a pivotal tool in population health management. The process begins with acquiring data from various sources, including electronic health records, claims data, [[Public Health]] [[Databases]], social determinants of health, and so on. SQL is used to integrate those diverse data sources into a unified database, ensure that data is standardized, structured, and accessible for analysis. Next, SQL is employed to design and optimize databases for population health management. [[Data Modeling]] techniques are utilized to define relationships between different data elements. Healthcare organizations can create databases that tailor to their specific health objectives, whether it is identifying high-risk patients or tracking health outcomes. Once the data is securely stored in the database, SQL queries are used to extract, transform, and analyze this data. It is important to remember to protect patient [[Privacy]] and ensure [[Data Security]] during this process. SQL databases are designed with security features to safeguard sensitive health information from unauthorized access or breaches.
>
> **[1:36](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-use-sql-to-manage-population-health?u=76281980&t=96)** Access controls and encryption are implemented to maintain compliance with regulatory requirements. SQL serves as a powerful tool for managing population health, enabling healthcare organizations to improve health outcomes and enhance patient care using data. With good practice in place for [[Data Acquisition]], integration, analysis, and insights generation, healthcare organizations can use SQL to drive meaningful change in population health management, leading to healthier communities and better outcomes for all.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Databases]] (4), [[Public Health]] (1), [[Data Modeling]] (1), [[Privacy]] (1)
> **Env Vars:** sql (7)
> **Best Practices:** remember to (1), good practice (1)
> **Speakers:** - in (1)

#### [Risk stratification in SQL](https://www.linkedin.com/learning/sql-for-healthcare-professionals/risk-stratification-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/risk-stratification-in-sql?u=76281980&t=0)** - [Instructor] Population health management is a complex subject. To help healthcare organizations deliver personalized care, it is crucial to identify which individuals are at higher risk of getting sick. Risk certification is a method used by healthcare providers to categorize individuals into different risk groups based on factors such as age, medical history, social determinants of health, and lifestyle habits. It helps prioritize interventions and resources for those who are at higher risk of developing certain health conditions, allowing healthcare organizations to make better strategies when managing population health. In this video, we will explore how [[SQL]] can be used to conduct risk stratification. Once the data is centralized in a database, and the [[Data Modeling]]'s completed. SQL queries are utilized to sift through this information and identify potential risks factors associated with different conditions. These risk factors may include demographic characteristics, chronic health conditions, or lifestyle behaviors. By analyzing the data using SQL, healthcare providers can uncover hidden correlations and patterns which might indicate elevated risk within the population. By grouping individuals into low,
>
> **[1:34](https://www.linkedin.com/learning/sql-for-healthcare-professionals/risk-stratification-in-sql?u=76281980&t=94)** moderate, and high risk categories, targeted interventions can be directed towards those who will benefit from the interventions the most. Imagine the following scenario. In a local healthcare system, a team of healthcare providers notices the incidence of cardiovascular diseases is on the rise, and they want to implement interventions in the population that is at risk the most. You can leverage SQL by calculating risk scores based on selective risk factors. You can classify patients with certain conditions such as high BMI and family history of hypertension, as having a higher risk of developing cardiovascular diseases. This information can be used by healthcare providers to prioritize interventions and resources for patients based on their level of risk. That's why the definitions for classifying each cohort are so important, to ensure that each individual falls within the right category. Let me show you how to do this in SQL. In your example, we want to classify patients into high, medium, or low risk categories based on the BMI and family history of hypertension. So we can write SELECT patient_id, patient_name, bmi, family_history_of_hypertension,
>
> **[3:13](https://www.linkedin.com/learning/sql-for-healthcare-professionals/risk-stratification-in-sql?u=76281980&t=193)** and now we're going to build a case statement. So we're going to say is CASE, and when this BMI is more or equal than 30 and the family history of hypertension equals yes,
>
> **[3:37](https://www.linkedin.com/learning/sql-for-healthcare-professionals/risk-stratification-in-sql?u=76281980&t=217)** then those patients are going to be considered high risk. When the BMI is more or equal than 25 and the family history of hypertension equals yes,
>
> **[4:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/risk-stratification-in-sql?u=76281980&t=240)** then those patients are going to be considered medium risk. Anything else that doesn't fall into those categories are going to be considered low risk. We're going to end this case statement by naming this column risk_category, and we're going to get those records from the table, [Healthcare Database].[dbo].[Hospital Records].
>
> **[4:35](https://www.linkedin.com/learning/sql-for-healthcare-professionals/risk-stratification-in-sql?u=76281980&t=275)** Now we're going to highlight and execute this query, and this is going to give us an idea on which category each patient falls. Some will be low risk, others medium risk, others high risk. With the population segmented into different risk categories, the healthcare team can tailor interventions to the specific needs of each group. In your example, individuals at a high risk of cardiovascular diseases may receive intensive lifestyle counseling, medication management, and regular follow-up visits with their healthcare provider. By targeting interventions to those at the highest risk, the healthcare team can intervene early to prevent or delay the development of certain conditions to improve health outcomes and reduce healthcare costs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Data Modeling]] (1)
> **Env Vars:** sql (5), bmi (4), select (1), case (1)
> **Code Identifiers:** patient_id (1), patient_name (1), family_history_of_hypertension (1), risk_category (1)
> **Analogies:** such as (2), imagine (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **SQL:** select (1)
> **Speakers:** - [instructor] (1)

#### [Predictive analytics in population health](https://www.linkedin.com/learning/sql-for-healthcare-professionals/predictive-analytics-in-population-health?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/predictive-analytics-in-population-health?u=76281980&t=0)** - [Instructor] Predictive analytic techniques are powerful tools in addressing questions within the [[Healthcare Industry]]. From predicting hospital admissions to assessing healthcare facility capacity, these analysis offering sites into future health outcomes, resource location, and intervention planning. [[SQL]] plays a crucial role in [[Predictive Analytics]] workflows by pre-processing and preparing data and organizing data sets for analysis. To implement predictive analytics in population health, it's important to recognize that while SQL excels in managing querying data, it does not perform predictive analytics on its own. This is where the integration of complementary tools such as [[Python (Programming Language)|Python]] and R becomes essential. By combining SQL with these tools, data professionals can implement various techniques such as [[Time Series Analysis]] and machine learning [[Algorithms]] to build predictive models. Let's look at a case scenario. A healthcare organization wants to use predictive analytics to predict the likelihood of patients to develop hypertension. SQL can help build a simple predictive model focusing on predicting the likelihood of hypertension based on a patient's age, BMI, and whether they have a family history of hypertension.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-healthcare-professionals/predictive-analytics-in-population-health?u=76281980&t=95)** We don't want to include the children in your dataset since BMI is interpreted differently for children and teens. For this purpose, we will only include patients over 18 years old. In this query, we'll create a series of case statements to categorize our patients and create some binary values when applicable. So we're going to start by selecting the columns. P.patient_id. Remembering the p, the prefix is specifying where the patient_id column is coming from. p.patient_name. And then we're going to build our case statement. So we're going to say CASE and WHEN, the family_history_of_hypertension = 'Yes',
>
> **[2:39](https://www.linkedin.com/learning/sql-for-healthcare-professionals/predictive-analytics-in-population-health?u=76281980&t=159)** THEN, we're going to give the value 1. Binary numerical values make it easier for the predictive model to work. And WHEN the family_history_of_hypertension = 'No',
>
> **[3:02](https://www.linkedin.com/learning/sql-for-healthcare-professionals/predictive-analytics-in-population-health?u=76281980&t=182)** THEN 0. We're going to end our case statement and name this column as family_history_of_hypertension.
>
> **[3:19](https://www.linkedin.com/learning/sql-for-healthcare-professionals/predictive-analytics-in-population-health?u=76281980&t=199)** Now we're going to build a second case statement where we're going to classify our patients based on their BMI. So we're going to write CASE and WHEN their BMI &lt; 18.5,
>
> **[3:40](https://www.linkedin.com/learning/sql-for-healthcare-professionals/predictive-analytics-in-population-health?u=76281980&t=220)** THEN those records are going to be considered 'Underweight'. WHEN the BMI &gt;= 18.5,
>
> **[3:55](https://www.linkedin.com/learning/sql-for-healthcare-professionals/predictive-analytics-in-population-health?u=76281980&t=235)** AND the BMI &lt; 25, THEN those records are going to be considered normal. WHEN the BMI &gt;= 25 and the BMI &lt; 30, THEN those records are going to be considered 'Overweight'. ELSE, we're going to consider those records as 'Obese'. And we're going to end this case statement and name this column bmi_category. Now for next case statement, we're going to flag the patients that are over 50 years old, which we're going to use CASE, WHEN, and we don't have an age column, which means we have to use the DATEDIFF function to calculate this patient's age. So I'm going to write DATEDIFF. We want our output to be years and we're going to calculate the difference between the column date of birth and our current date. So we have to use the function getdate, and any of those records, they're more or equal than 50 are going to be flagged as 1. Anything else that doesn't fall into this category
>
> **[5:32](https://www.linkedin.com/learning/sql-for-healthcare-professionals/predictive-analytics-in-population-health?u=76281980&t=332)** is going to be considered 0. We're going to end this case statement and we're going to name this column age_over_50. Finally, for our last case statement, we're going to classify those patients between high, medium, or low risk. So we're going to write CASE and WHEN the family_history_of_hypertension = 'Yes'
>
> **[6:07](https://www.linkedin.com/learning/sql-for-healthcare-professionals/predictive-analytics-in-population-health?u=76281980&t=367)** OR the age of the patient, and remember using the DATEDIFF function to calculate the age of the patient. So we can just grab all of these, copy and paste. And if this age is more or equal than 50 and the patient's BMI &gt;= 30,
>
> **[6:36](https://www.linkedin.com/learning/sql-for-healthcare-professionals/predictive-analytics-in-population-health?u=76281980&t=396)** THEN those records I'm going to consider 'High Risk'. WHEN the family_history_of_hypertension = 'Yes'
>
> **[6:56](https://www.linkedin.com/learning/sql-for-healthcare-professionals/predictive-analytics-in-population-health?u=76281980&t=416)** OR the patient's age, which is the DATEDIFF function, is &gt;= 50 AND the patient's BMI is &gt;= 25 AND the BMI &lt; 30,
>
> **[7:20](https://www.linkedin.com/learning/sql-for-healthcare-professionals/predictive-analytics-in-population-health?u=76281980&t=440)** THEN those records are going to be considered 'Medium Risk'. Just a typo here. Anything else that doesn't fall into these categories, are going to be considered 'Low Risk'. I'm going to end our case statement and I'm going to call this column hypertension_prediction. And now we're going to join our tables, patients with hospital records. So we're going to write FROM [Healthcare_Database].[dbo].Patients.
>
> **[8:07](https://www.linkedin.com/learning/sql-for-healthcare-professionals/predictive-analytics-in-population-health?u=76281980&t=487)** Remember to alias this column AS p. And we want all the matching records, so we're going to do an INNER JOIN on [Healthcare_Database].[dbo].[Hospital Records].
>
> **[8:29](https://www.linkedin.com/learning/sql-for-healthcare-professionals/predictive-analytics-in-population-health?u=76281980&t=509)** Going to alias this table AS hr and we're going to use the common key patient_id. It's going to be p.patient_id = hr.patient_id.
>
> **[8:46](https://www.linkedin.com/learning/sql-for-healthcare-professionals/predictive-analytics-in-population-health?u=76281980&t=526)** And now remember that we don't want to include children in this dataset. So we're going to filter and we're going to use our DATEDIFF function to tell SQL what is the patient's age and all that we want are the records that more or equal than 18 years old. And if you highlight and you run this query, you're going to have in here the family_history_of_hypertension in binary values, the bmi_category is categorized into normal, obese, overweight, age_over_50, also binary values, and the hypertension prediction is also between medium, low, and high risk. By incorporating this feature into a predictive model, we can identify patients who are more likely to develop hypertension based on age, BMI, and family history of hypertension. Now, onto model development. We export or prepared data to [[Statistical Analysis]] tools, like Python or R, where we craft models such as [[Logistic Regression]] or time series analysis. Once the model is ready, SQL can help you assess in the model's performance by facilitating the calculation of metrics to evaluate the efficiency of our models in predicting the development of hypertension. Finally, we deploy our models into the healthcare's electronic health record system.
>
> **[10:21](https://www.linkedin.com/learning/sql-for-healthcare-professionals/predictive-analytics-in-population-health?u=76281980&t=621)** SQL queries integrated the models into clinical workflows, providing healthcare providers with [[Real-Time]] risk scores for individual patients, enabling healthcare organizations to anticipate outcomes and make data-driven decisions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Predictive Analytics]] (4), [[Python (Programming Language)|Python]] (2), [[Time Series Analysis]] (2), [[Healthcare Industry]] (1)
> **Env Vars:** bmi (12), sql (7), datediff (5), case (4), else (1)
> **Code Identifiers:** family_history_of_hypertension (6), patient_id (5), bmi_category (2), patient_name (1), hypertension_prediction (1)
> **CLI Commands:** python (2), make (2)
> **Analogies:** such as (3)
> **Versions:** 18.5 (2)
> **SQL:** inner join (1)
> **Best Practices:** remember to (1)

#### [Social determinants of health (SDOH) and SQL](https://www.linkedin.com/learning/sql-for-healthcare-professionals/social-determinants-of-health-sdoh-and-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/social-determinants-of-health-sdoh-and-sql?u=76281980&t=0)** - When dealing with population health management, it's essential to consider the influence of socioeconomic and environmental factors in healthcare data analysis. Barriers to care such as food deserts or transportation barriers can influence the access to healthcare for individuals and entire populations. For instance, let's take two hypothetical neighborhoods, Neighborhood A and Neighborhood B. In Neighborhood A, residents have easy access to fresh fruits and vegetables through local farmer's markets and grocery stores, (indistinct) parks and low pollution levels. Neighborhood B, however, access to healthy foods options is limited. Green spaces are scarce and poorly maintained, and pollution levels are high due to nearby industrial activity. These disparities in social determinants of health significantly shape healthcare population management strategies. SQ is a powerful tool for integrating external datasets alongside clinical and demographic data, enabling us to paint a comprehensive picture of population health dynamics. By incorporating aggregate measures such as median household income, poverty rates, educational levels, and unemployment rates and housing conditions, we gain sites into the unique challenges faced by each neighborhood. Raw data can be transformed to put into context the social, economic and environmental realities
>
> **[1:35](https://www.linkedin.com/learning/sql-for-healthcare-professionals/social-determinants-of-health-sdoh-and-sql?u=76281980&t=95)** where individuals live and work. These variable serve as predictive factors in reaching analysis enhancing risk stratification models. Using [[SQL]] cooperating those factors into analysis is like playing detective with data. It help us uncover how different things like access to healthy foods or pollution levels are linked to patient's health. Integrating social determinants of health into population management practice enables healthcare organizations to gain a more holistic understanding of health disparities and implement target interventions to address underlying social factors. This approach faves the way for promoting health equity across diverse populations, ensuring that all individuals have access to the resources and support needed for optimal health and wellbeing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Analogies:** such as (1), for instance (1), picture (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - when (1)

#### [Challenge: Risk stratification](https://www.linkedin.com/learning/sql-for-healthcare-professionals/challenge-risk-stratification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/challenge-risk-stratification?u=76281980&t=0)** - [Instructor] To put into practice what you have learned, here's a challenge for you to try on your own. We want to identify individuals at high risk of developing diabetes within a population based on smoking status and glucose levels. The tables we're going to use in this challenge are Outpatient Visits and Lab Results. Build A [[SQL]] query to categorize individuals into different risk groups and show how many patients are in each risk category. Here are the criteria: Individuals who are smokers and have a glucose level of more or equal to 126 are consider a high risk. Individuals who are smokers and have a glucose level of more or equal to 100 but less than 126 are consider medium risk. Everyone else is low risk. As a hint, the test name you're looking for is fasting blood sugar, and you can use a case statement here. Good luck, and join me in the next video to see how I would have solved this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Risk stratification](https://www.linkedin.com/learning/sql-for-healthcare-professionals/solution-risk-stratification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/solution-risk-stratification?u=76281980&t=0)** (bouncy music)
>
> **[0:05](https://www.linkedin.com/learning/sql-for-healthcare-professionals/solution-risk-stratification?u=76281980&t=5)** - [Narrator] How did you do with this challenge? Here's how I would have solved. I would've start by joining the relevant tables. So, we're going to pull the table. (keyboard typing) Healthcare Database dot dbo dot Outpatient Visits. And we're going to alias this table as, ov. We're going to join, inner join, on the table. Healthcare Database dot dbo dot Lab Results. And we're going to alias this table as, lr. We're going to join them on the common key, visit id. So we're going to say ov dot visit id equals lr dot visit id. Now that our joins are ready, we can select the relevant columns and build our case statement. So, we're going to start by writing select, and we're going to build a case statement and we're going to say, case, when the smoker status is positive. So, the smoker status equals Y, (keyboard typing) or the result value is more or equal than 126.
>
> **[1:42](https://www.linkedin.com/learning/sql-for-healthcare-professionals/solution-risk-stratification?u=76281980&t=102)** Then those patients are going to be considered High Risk for Diabetes. When the smoker status is positive, equals y, or the result value is more or equal than 100 and the result value is less than 126, then those records are going to be considered Medium Risk for Diabetes. Note that I put this into parenthesis. The reason why is because [[SQL]] is going to first calculate this, to then join this results with the smoker status. Anything else that doesn't fall into this category is going to be considered Low Risk for Diabetes. We're going to end our case statement by naming this column, risk category. Now the case statement is ready, we're going to count how many records are in each one of those categories. For this, we're going to use the function, count everything, and let's name this column population count.
>
> **[3:17](https://www.linkedin.com/learning/sql-for-healthcare-professionals/solution-risk-stratification?u=76281980&t=197)** (keyboard typing) Now that this part is ready, we're going to filter results to only show the test name, fasting blood sugar. So we're going to write, test name equals (keyboard typing) fasting blood sugar. And since we're using an aggregate function, we have to group our data. So we're going to write, group by, and we're going to copy our case statement. Let's highlight and see what the results are. And here you have it. Seems like some of our patients are a Medium or High risk for developing diabetes. With this knowledge, our medical team can now jump into action. Creating strategies to help those patients avoid this health issue altogether. This is how I solve this challenge, but remember that there might be different ways to solve this. It doesn't matter if your syntax differs from mine, as long as the results are the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Non-Speech:** (keyboard typing) (4), (bouncy music) (1)
> **Env Vars:** sql (1)
> **UI Navigation:** select the (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)


### 4. Clinical Research

[↑ Back to Table of Contents](#table-of-contents)

#### [Using SQL in clinical research](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-sql-in-clinical-research?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-sql-in-clinical-research?u=76281980&t=0)** - When talking about healthcare and medical sciences, we cannot forget to mention clinical research. This area of medical sciences focuses on the safety and effectiveness of medications, devices, and treatments intended for human use. Here are a few ways in which [[SQL]] can help. [[Data Management]]. In clinical research, managing data effectively is key to ensuring the success of our studies. SQL provides a powerful framework for storing and managing clinical trial data. With SQL, we can create structured [[Databases]] that organize patient demographics, medical histories, treatment regimens, and research outcomes in a secure and effective manner. These databases can handle complex relationships between different data entities, ensuring [[Data Integrity]] and security throughout our research process. [[Data Validation]] and analysis. It is crucial to ensure the accuracy of our data in clinical research. SQL queries can be used to identify and correct data inconsistencies, errors, and missing values within our datasets. By preforming data validation checks using SQL, we can improve the validity of our study findings and make sure research is based on reliable data. Once we have our data organized and integrated, SQL's querying capabilities allow us to extract a specific subset of data for analysis.
>
> **[1:37](https://www.linkedin.com/learning/sql-for-healthcare-professionals/using-sql-in-clinical-research?u=76281980&t=97)** We can write SQL queries to preform various analyses, including group identification, outcome assessments, and trend analysis. SQL also enables us to transform data to support statistical analyses and reporting, helping us look over meaningful insights from our research data. Longitudinal studies. Longitudinal studies, which track patient's health outcomes overtime, are common in clinical research. SQL databases are well suited for organizing longitudinal data and analyzing treatment effectiveness and disease progression over extended periods. With SQL, we can track changes in patient status, identify trends, and make informed decisions about patient care based on long-term outcomes. Collaboration. SQL databases make collaboration easy. They provide a centralized platform for storing and sharing data, enabling researchers from different areas to access analyzed shared datasets. This collaboration drives scientific advancements and improves healthcare outcomes worldwide. As you can see, SQL plays an important role in clinical research. The use of SQL enables researchers to make evidence-based decisions, drives scientific advancements, and improve healthcare outcomes for patients.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (13), [[Databases]] (4), [[Data Validation]] (2), [[Data Management]] (1), [[Data Integrity]] (1)
> **Env Vars:** sql (13)
> **CLI Commands:** make (4)
> **Speakers:** - when (1)

#### [Cohort identification using SQL](https://www.linkedin.com/learning/sql-for-healthcare-professionals/cohort-identification-using-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/cohort-identification-using-sql?u=76281980&t=0)** - [Instructor] Cohort identification is the process of defining and selecting a group of individuals from a larger population based on specific criteria such as demographics, medical history, treatment exposure, or outcomes. This is an essential step in clinical research as it [[Forms]] the basis for conducting studies. This is how [[SQL]] can help. SQL can be utilized for cohort identification by querying patient [[Databases]] to select specific group of individuals based on predefined criteria. It starts by defining the characteristics or conditions that define your target group. Once you have defined the criteria, SQL queries will specify the conditions that must be met for a patient to be included in the group. This may include demographic information such as age or gender, medical history, geographic location, disease or conditions, or other relevant factors. The data can be retrieved from the patient database by executing SQL queries. The results will be a list of individuals who meet the specified criteria, forming the identified cohort. You can review the results of the SQL queries and refine the criteria if necessary. Adjustments may be required to ensure that you capture the desired patient population. Due to its flexibility, SQL allows cohorts
>
> **[1:36](https://www.linkedin.com/learning/sql-for-healthcare-professionals/cohort-identification-using-sql?u=76281980&t=96)** to have adjustments done based on evolving research questions and requirements. Let's look an example. A research team at a healthcare organization is conducting a study to evaluate the effectiveness of a new integrated care model for patients with chronic diseases, including hypertension, hyperlipidemia, and diabetes. The team needs to identify a cohort of patients with these conditions for this study, and the interesting patients who have visited the clinic within the last year. This is how you can find the patients that fit this criteria. We're going to select the columns, patient ID, diagnosis, visit date, from the table healthcaredatabase.dbo.outpatient visits,
>
> **[2:40](https://www.linkedin.com/learning/sql-for-healthcare-professionals/cohort-identification-using-sql?u=76281980&t=160)** and we're going to filter by the diagnosis. So I'm going to say where the diagnosis is in this list. Hypertension, hyperlipidemia, diabetes, and the visit date. So we only want to include patients who have visited the clinic within the last year. So to find those records for the last year, the visit date has to be more or equal. And to find the last year, we're going to use the date add function. We want our hotspot to be in years. We want last year, so we're going to extract one year from the current date. And we just want the records that are less or equal than our current date. Now if you highlight and you execute, you have the results. This query will provide you with a list of patients who meet the criteria as a control group for the study. SQL makes it easy to refine the criteria if necessary. For example, you may adjust the timeframe or the enclosure criteria for diagnosis. By following these steps
>
> **[4:15](https://www.linkedin.com/learning/sql-for-healthcare-professionals/cohort-identification-using-sql?u=76281980&t=255)** and using SQL for cohort identification, Researchers can can select specific groups of patients for their studies, enabling more targeted analysis in clinical research.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), [[Forms]] (1), [[Databases]] (1)
> **Env Vars:** sql (8)
> **CLI Commands:** find (3)
> **Analogies:** such as (2), for example (1)
> **UI Navigation:** select the (1)
> **Definitions:** is an  (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Descriptive analytics using SQL in clinical research](https://www.linkedin.com/learning/sql-for-healthcare-professionals/descriptive-analytics-using-sql-in-clinical-research?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/descriptive-analytics-using-sql-in-clinical-research?u=76281980&t=0)** - [Instructor] Descriptive analytics involves examining historical data to gain insights and understanding patterns and trends within the data. As the name suggests, our analysis describes what happened. [[SQL]] enables its users to conduct descriptive analysis in clinical research by summarizing key [[Statistics]] and metrics. Using SQL, researchers can utilize aggregate functions such as Count, Sum, Average, Minimal, and Maximum to make calculations with numerical data. These functions provide a quantitative summary of the data, enabling researchers to understand the distribution and characteristics of clinical variables. Let's consider a scenario where a clinical researcher is conducting a study on the effectiveness of a new medication for managing diabetes. They have collected data from medical visits of diabetic patients over the past year and now want to perform descriptive analytics to understand the characteristics of their patient population. The researcher can analyze the data with SQL to gain insights into various aspects of the diabetic patient population. The researcher begins by examining the demographic characteristics of diabetic patients. They use SQL to calculate a distribution of patients by gender and age group.
>
> **[1:36](https://www.linkedin.com/learning/sql-for-healthcare-professionals/descriptive-analytics-using-sql-in-clinical-research?u=76281980&t=96)** So we're going to start by selecting gender, and remember that we don't have an age column. So when we write CASE When to calculate our age, we have to use the DateDiff function, the output being years, and it's going to calculate the difference between date of birth and our current date. And when the age is between 18 and 30,
>
> **[2:15](https://www.linkedin.com/learning/sql-for-healthcare-professionals/descriptive-analytics-using-sql-in-clinical-research?u=76281980&t=135)** then those patients are going to be considered 18 to 30. When the age, so the DateDiff function, we can just copy this, is between 31 and 50,
>
> **[2:36](https://www.linkedin.com/learning/sql-for-healthcare-professionals/descriptive-analytics-using-sql-in-clinical-research?u=76281980&t=156)** then those patients are going to be considered 31 to 50. When the DateDiff is between 51 and 70,
>
> **[2:54](https://www.linkedin.com/learning/sql-for-healthcare-professionals/descriptive-analytics-using-sql-in-clinical-research?u=76281980&t=174)** then those patients are going to be between 51 and 70 years old. Anything else is going to be considered 71 and plus. We're going to end our CASE statement and call this column Age Group. Now we're going to use the count function to calculate how many patients are in each category. So I'm going to put count everything, As. Patient count and we're joining the tables, Patient throughout Patient Visits. So I'm going to write from HealthCare_Database, dot-DBO, dot-patients. Let's alias this column as P. We're going to do an inner join on HealthCare_Database, dot-DBO, dot-Outpatient Visits. Let's alias this table As OV. We're going to join those tables in the patient ID column. So on P-dot, patient ID, equals OV-dot, patient ID. We're going to filter this data to just show us patients where the diagnosis is diabetes.
>
> **[4:31](https://www.linkedin.com/learning/sql-for-healthcare-professionals/descriptive-analytics-using-sql-in-clinical-research?u=76281980&t=271)** Since we're using aggregate function, we have to group our data. So we're going to group our data by the gender and by our CASE statement. Now, when we run this query, we're going to have the number of patients in each age group and each gender. Next, the research is going to examine the most common reasons for diabetic patients to visit the hospital. They're going to use SQL to indicate the main reason for diabetic patients to visit the hospital. So we're going to write select, the reason for the visit. We're going to count all the records. I'm going to alias this column as Visit Count. From the table, HealthCare_Database, dot-DBO,
>
> **[5:31](https://www.linkedin.com/learning/sql-for-healthcare-professionals/descriptive-analytics-using-sql-in-clinical-research?u=76281980&t=331)** dot-Outpatient Visits. Once again, we just want the patients where the diagnosis is diabetes, and we're going to group our data by reason for visit. We can also as an option, order-by data, by visit count, in descending order. So if you run this query, you're going to have what was the reason for each visit for the diabetic patients and how many visits each one was. Lastly, the researcher is going to investigate the distribution of smoker status among diabetic patients by gender. So we're going to write, select gender, a smoker status. We're going to count our records. I'm going to alias the column as Patient Count, from the table, HealthCare_Database, dot-DBO, dot-Outpatient Visits. Going to alias this table as OV. We're going to inner join this table with the Patients table. So we're going to write HealthCare_Database, dot-DBO, dot-Patients.
>
> **[7:08](https://www.linkedin.com/learning/sql-for-healthcare-professionals/descriptive-analytics-using-sql-in-clinical-research?u=76281980&t=428)** Going to alias this column as P. We're going to join those tables, OV-dot, patient ID, equals P-dot, patient ID. We're going to filter patients by using the Where clause. Diagnosis equals diabetes. And we're going to group our data by gender and smoker status. And here you have it. As you can see, by performing descriptive analytics with SQL, the clinical researcher against valuable insights into the diabetic patient population, including their demographic characteristics, reasons to look for care, and behavior patterns. This information can form further research studies and treatment protocols, improving diabetes management and patient outcomes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Statistics]] (1)
> **Env Vars:** sql (6), dbo (5), case (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Outcome analysis techniques with SQL](https://www.linkedin.com/learning/sql-for-healthcare-professionals/outcome-analysis-techniques-with-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/outcome-analysis-techniques-with-sql?u=76281980&t=0)** - [Instructor] In clinical research, outcome analysis techniques are essential for evaluating the effectiveness and impact of treatments, interventions, or healthcare practices on patient outcomes, disease progression, and overall health. These techniques allow researchers to assess the success or failure of various healthcare interventions, guiding [[Decision-Making]] and improving patient care. With its ability to retrieve, aggregate, analyze vast amounts of patient data, [[SQL]] enables researchers to calculate and analyze various outcome measures, such as survival rates, disease progression, and treatment performance. SQL also facilitates comparative analysis by allowing researchers to compare outcomes between different patient groups, variables, or time periods. Let's look at a case scenario. A researcher at a hospital noticed that diabetes prevalence is on the rise and wants to uncover insights into diabetes management. Through outcome analysis and data-driven research, clinical data can be used to optimize patient care practices. In this case, the analysis of focus is specifically on fasting blood sugar levels or glucose levels as a key outcome measure among diabetic patients.
>
> **[1:36](https://www.linkedin.com/learning/sql-for-healthcare-professionals/outcome-analysis-techniques-with-sql?u=76281980&t=96)** Let's look at how we can develop a query that will allow the researchers to explore different relationships between age, gender, medication prescribed, and blood sugar control among diabetic patients who had a fasting blood sugar test. We're going to start by joining our relevant tables. So I'm going to write From, Healthcare_Database, dot-DBO, dot-Patients, As P. We are going to do an inner join on HealthCare_Database, dot-DBO, dot-Outpatient Visits, As OV. And we're going to join those two tables using the common key, patient ID. So On P-dot, patient ID, equals OV-dot, patient ID. Now in this case, we also have to inner join the lab results to join the visit ID from the outpatient visits with the visit ID from lab results. So we're going to do inner join of HealthCare_Database, dot-DBO, dot-Lab Results,
>
> **[3:15](https://www.linkedin.com/learning/sql-for-healthcare-professionals/outcome-analysis-techniques-with-sql?u=76281980&t=195)** As LR, On OV-dot, visit ID, equals LR-dot, visit ID. Now we can start selecting our relevant columns. So I'm going to right-select P-dot, patient ID. We're also going to select the patient name, the gender, the age. So going to use the DateDiff function to calculate the outcome in years between the date of birth and our current date. We're going to name this column as Age. We want also draw a result value, and we're going to call this column Fasting Blood Sugar. We also want to put our medication prescribed, the date of the test, and the diagnosis. So OV diagnosis. We're going to name this column as Diabetes Status. Remember that we only want the patients where the diagnosis was diabetes and those patients had the test Fasting Blood Sugar.
>
> **[4:50](https://www.linkedin.com/learning/sql-for-healthcare-professionals/outcome-analysis-techniques-with-sql?u=76281980&t=290)** So we're going to filter by using Where, the diagnosis equals diabetes, and those patients had the test name, Fasting Blood Sugar. So if you run this query, here are the results. You can notice differences in the blood sugar levels among diabetic patients, prescribe different medications and fluctuations on the blood sugar levels on the same patient on different dates. Remember that this is only the beginning of this analysis, and other variables could be brought into play. When analyzing treatment's efficacy, evaluating risk factors, or assessing healthcare outcomes, SQL empowers researchers to conduct comprehensive outcome analysis, facilitating the improvement of patient care practices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Decision-Making]] (1)
> **Env Vars:** sql (3), dbo (3)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 5. Healthcare Administration

[↑ Back to Table of Contents](#table-of-contents)

#### [How to use SQL to analyze workflow](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-use-sql-to-analyze-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-use-sql-to-analyze-workflow?u=76281980&t=0)** - [Instructor] One of the challenges in healthcare is how to set up an efficient clinical workflow. Clinical workflow relates to how activities in the healthcare setting are carried out by whom, in what order, and so on. Think about the last time you went to the doctor. You can break the workflow into different processes such as patient registration, information checking, waiting to be seen, visiting with the clinician, ordering tests, and many more. [[SQL]] can help with clinical workflows by monitoring KPIs that are related to healthcare administration, such as patient wait times, appointment scheduling efficiency, and resource utilization. By analyzing those KPIs, healthcare administrators can identify areas for improvement and implementing initiatives to improve workflow efficiency. SQL can also be combined with other tools to develop predictive models that forecast future demands for healthcare services, optimizing resource allocation. Let's take a look at how SQL can be used in healthcare administration with a practical example. A medical center wants to reduce patient wait times. The administration decides to use SQL to analyze appointment data and identify opportunities for improvement. We build a query that retrieves the appointment data from the appointment table,
>
> **[1:36](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-use-sql-to-analyze-workflow?u=76281980&t=96)** focusing on patient arrival times and when the patient was admitted across different departments. By analyzing this data, the administration gains insights into average waiting times for patients, and the total volume of appointments within each department. Let's take a look at how SQL can be used in healthcare administration for practical example. A medical center wants to reduce patient wait times. The administration decides to use SQL to analyze appointment data and identify opportunities for improvement. We'll build a query that retrieves the appointment data, focusing on patient arrival times and when the patients are admitted across different departments. By analyzing this data, the administration gains insights into average waiting times for patients and the total volume of appointments within each department. So we're going to start by selecting the department_name. We're going to use the aggregate function, AVG, and the DATEDIFF function to give us the insights in minutes and the difference between arrival_time and admission_time.
>
> **[2:57](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-use-sql-to-analyze-workflow?u=76281980&t=177)** I'm going to name this column avg_wait_time. We also want to know the minimum amount of time those patients are waiting. So we're going to choose the aggregate function MIN, and we're going to also use the DATEDIFF to calculate in minutes the arrival_time and the admission_time. We're going to name this column min_waiting_time. Now let's see what is the maximum amount of time that the patients have been waiting. We use the MAX aggregate function, and we calculate the difference in minutes using DATEDIFF minute, arrival_time, admission_time. And we're going to name this column max_waiting_time. Now I'm going to count everything to know how many records are going to fall within each aggregate function. So COUNT(*) everything AS total_appointments FROM the table [Healthcare_Database].[Dbo].Appointments.
>
> **[4:25](https://www.linkedin.com/learning/sql-for-healthcare-professionals/how-to-use-sql-to-analyze-workflow?u=76281980&t=265)** Now we have to group our data by the department_name, since we're using aggregate functions. And let's see what this query shows us. Here we have it. The query reviews that certain departments experience longer waiting times than others, indicating potential scheduling problems or resource constraints. The administration can implement measures such as adjusting appointment schedules or improving patient communication to reduce waiting times and enhance the patient experience. By leveraging SQL's capabilities to integrate and analyze data, healthcare organizations can deliver better quality care.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7)
> **Env Vars:** sql (7), datediff (3), avg (1), min (1), max (1)
> **Code Identifiers:** arrival_time (3), admission_time (3), department_name (2), avg_wait_time (1), min_waiting_time (1)
> **Analogies:** such as (3)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Data exchange using SQL](https://www.linkedin.com/learning/sql-for-healthcare-professionals/data-exchange-using-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/data-exchange-using-sql?u=76281980&t=0)** - [Instructor] Imagine all the healthcare data from a hospital being collected and stored in spreadsheets. Now, imagine if you also have to add data with different lab results and data from different specialists. Think about how hard it would be to put the data together when it is time to analyze it. Healthcare organizations often store data in multiple [[Databases]] or systems, such as electronic health records, billing systems, and administrative data. [[SQL]] bridges the gaps between disparate data sources to offer a unified view of patient records, financial transactions, and operational metrics. They enable SQL users to generate reports for various stakeholders in the healthcare organization. From financial reports that provide insights for executives, to clinical outcome reports that drive quality improvement initiatives, SQL streamlines the reporting process, saving time and minimizing errors associated with manual data extraction. Let's take a look at an example when it's time to analyze this data. The administrative team at our hospital wants to explore the relationship between medical appointments and lab tests. The team wants to ensure the patients are getting the lab tests done on the same day as their visit. The challenge is the disparate sources of patient data scattered across multiple systems.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-healthcare-professionals/data-exchange-using-sql?u=76281980&t=95)** Medical visit records reside in the hospital's electronic health records system, while lab test results are stored in a separate laboratory information management system. Those siloed databases pose a barrier to seamless data exchange, and make it difficult for the administrative team to analyze patient care pathways holistically. However, with SQL as their tool of choice, those disparate sources can be integrated for meaningful analysis. Once the data is integrated, the solution to this question can be achieved by writing the following query. We're going to SELECT the columns, ov.visit_id, ov.visit_date, ov.doctor_name, lr.test_name, lr.test_date. Now we're going to calculate how many days of difference between the visit date that lives in the outpatient visit table, to the test date, which lives in the lab results table. So we're going to use the DATEDIFF function, we want the outcome in days, we're going to retrieve the column ov.visit_date, lr.test_date.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-healthcare-professionals/data-exchange-using-sql?u=76281980&t=190)** And we're going to name this column days_between_visit_and_test.
>
> **[3:22](https://www.linkedin.com/learning/sql-for-healthcare-professionals/data-exchange-using-sql?u=76281980&t=202)** Now we're going to draw on joins from the table. [Healthcare_Database].[dbo].[Outpatient Visits].
>
> **[3:35](https://www.linkedin.com/learning/sql-for-healthcare-professionals/data-exchange-using-sql?u=76281980&t=215)** We're going to alias this column AS ov, and we're going to INNER JOIN with [Healthcare_Database].[dbo].[Lab Results].
>
> **[3:52](https://www.linkedin.com/learning/sql-for-healthcare-professionals/data-exchange-using-sql?u=76281980&t=232)** And we're going to alias this column AS lr. We're going to join those tables on the common key visit_id, ov.visit_id = lr.visit_id.
>
> **[4:10](https://www.linkedin.com/learning/sql-for-healthcare-professionals/data-exchange-using-sql?u=76281980&t=250)** Here's a typo, visit_date. We're going to execute. And this is the table. As you can see, integrating different data sources in SQL can facilitate the analysis and ensure all aspects of healthcare are being taken into consideration when creating solutions for day-to-day problems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Databases]] (2)
> **Code Identifiers:** visit_id (4), visit_date (3), test_date (2), doctor_name (1), test_name (1)
> **Env Vars:** sql (5), select (1), datediff (1), inner (1), join (1)
> **Analogies:** imagine (2), such as (1)
> **SQL:** select (1), inner join (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Quality improvement initiatives](https://www.linkedin.com/learning/sql-for-healthcare-professionals/quality-improvement-initiatives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/quality-improvement-initiatives?u=76281980&t=0)** - [Instructor] In the [[Healthcare Industry]], quality improvement initiatives are essential for enhancing patient care and organizational performance. Think of ways where workflow can improve. [[SQL]] enables its users to get information from diverse sources within the data healthcare ecosystem. And with this data in hand, the areas for improvements can be identified. KPIs related to quality improvements can be analyzed such as readmission rates, patient satisfaction scores, and clinical outcomes. Leverage SQL to extract actionable insights. Let's look into the following scenario. One of the challenges faced by healthcare organizations is reducing readmission rates. High readmission rates not only indicate poor patient outcomes, but also contribute to increased healthcare costs, strain on resources, and diminished patient satisfaction. The quality improvement team of a hospital utilize SQL to identify the readmission rates for department. Here's a query they developed to access hospital readmission rates. We're going to start by writing SELECT, the department_name. We're going to COUNT (patient_id) AS total_patients. Now we're going to draw an expression that combines the COUNT aggregate function with the (CASE WHEN).
>
> **[1:35](https://www.linkedin.com/learning/sql-for-healthcare-professionals/quality-improvement-initiatives?u=76281980&t=95)** So we're going to say COUNT CASE WHEN days_in_the_hospital &gt; 1.
>
> **[1:45](https://www.linkedin.com/learning/sql-for-healthcare-professionals/quality-improvement-initiatives?u=76281980&t=105)** Then we're going to count the patient_id. And we're going to END. And call this column readmitted_patients. This expression is counting the number of patient_ids for whom the days_in_the_hospital is greater than one, which indicates readmitted patients. Now, we're going to take this expression, you're going to calculate the readmission rate by each department. So we're going to do this by multiplying this for (100.0) And we're going to /COUNT (patient_id).
>
> **[2:28](https://www.linkedin.com/learning/sql-for-healthcare-professionals/quality-improvement-initiatives?u=76281980&t=148)** And this is going to give us the readmission_rate. We're getting this data from [Healthcare_Database].[dbo].[Hospital Records].
>
> **[2:42](https://www.linkedin.com/learning/sql-for-healthcare-professionals/quality-improvement-initiatives?u=76281980&t=162)** And we're going to GROUP BY the department_name. This query is going to provide insights in which departments have higher readmissions rates, allowing the quality improvement team to focus their efforts on reducing readmissions in those areas. SQL can also help uncovering insights on the patients being readmitted. So we can modify this query above to bring in factors that show the profile of those patients being readmitted. We can copy this query. And we're going to add different columns, such as gender, the AVG(bmi). And we're going to name this column avg_bmi. We're going to calculate the AVG age. So remember, we have to do the (DATEDIFF) function without putting (year). The difference between the date_of_birth and the current date (GETDATE). And this column is going to be called avg_age. Now those new columns are not going to be in the Hospital Records table. So we're going to alias the Hospital Records as hr. And we're going to do an INNER JOIN with the patients table. So we're going to put [Healthcare_Database].[dbo].Patients
>
> **[4:21](https://www.linkedin.com/learning/sql-for-healthcare-professionals/quality-improvement-initiatives?u=76281980&t=261)** ON the key hr.patient_id = p.patient_id. Don't forget to alias the table as p. Since patient_id column is present in both Hospital Records and Patients table, we have to specify where this column is coming from. In this case, all the patient_id columns are going to come from the patients table, so we have to prefix with the p. in each one of those. We're going to group by the department_name and by the gender. Here we have it. In this example, we added gender, age, and bmi to help guide the departments on the profile of the patients that are being readmitted. Those insights can help the departments with continuous improvement. From here, they can conduct root cause analysis and implement interventions. As you can see, SQL is a powerful resourcing in driving quality improvement initiatives, transforming data into actionable insights and shaping the future of healthcare.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Healthcare Industry]] (1)
> **Env Vars:** sql (5), count (4), case (2), avg (2), select (1)
> **Code Identifiers:** patient_id (7), department_name (3), days_in_the_hospital (2), total_patients (1), readmitted_patients (1)
> **SQL:** select (1), group by (1), inner join (1)
> **Analogies:** such as (2)
> **Versions:** 100.0 (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)

#### [Challenge: Appointment analysis](https://www.linkedin.com/learning/sql-for-healthcare-professionals/challenge-appointment-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/challenge-appointment-analysis?u=76281980&t=0)** - [Instructor] Time for another challenge. This time we want to find out what is the distribution of appointments across different days of the week in the hospital. Your query should be the total number of appointments on each day, including weekends. Good luck and see the next video for the solution.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Appointment analysis](https://www.linkedin.com/learning/sql-for-healthcare-professionals/solution-appointment-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/solution-appointment-analysis?u=76281980&t=0)** - [Instructor] How did you do with this challenge? Here's how I would have solved. I would start by writing SELECT, use the function DATENAME. We want the output to be weekday from the column appointment_date. We're going to name this column weekday. We're going to count everything. We're going to name this column as appointment_count. It's going to give us the number of appointments each day from the table Healthcare_Database.dbo.Appointments.
>
> **[0:51](https://www.linkedin.com/learning/sql-for-healthcare-professionals/solution-appointment-analysis?u=76281980&t=51)** We're going to group this data by the weekday, so we have to use our expression DATENAME. And we can, as an option, order data by appointment_count in descending order.
>
> **[1:11](https://www.linkedin.com/learning/sql-for-healthcare-professionals/solution-appointment-analysis?u=76281980&t=71)** This query will show the busy days of the week in the hospital, allowing proper staffing on those days.

> [!info]- Semantic Content
>
> **Code Identifiers:** appointment_count (2), appointment_date (1)
> **Env Vars:** datename (2), select (1)
> **SQL:** select (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Final Project: Healthcare Analytics

[↑ Back to Table of Contents](#table-of-contents)

#### [Assignment: Healthcare analytics scenario](https://www.linkedin.com/learning/sql-for-healthcare-professionals/assignment-healthcare-analytics-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/assignment-healthcare-analytics-scenario?u=76281980&t=0)** - Imagine this scenario. As a healthcare data analyst, you're guiding strategic decisions at a local hospital. Recently, the hospital's management team expressed concerns about resource allocation and patient care efficiency across different departments. They need actionable insights into patients' demographics, diagnosis, and visit patterns to optimize service delivery and enhance patient outcomes. The stakeholders recognize the importance of data-driven [[Decision-Making]], but require support in transforming raw data into actionable insights. They approach the data analytics team to help answer some questions. First, what is the demographic profile of the patient population, including age and gender distribution? Keep in mind that patients less than 17 years old will be considered pediatric, patients between 18 and 64 will be considered adult, and patients more than 65 will be considered senior. Next, which diagnoses are most prevalent among patients and how do they vary across the different demographic groups, including gender and age? Here's a tip. You can slightly modify the previous query to bringing the diagnosis. What are the most common appointment times throughout the day and how does the distribution
>
> **[1:34](https://www.linkedin.com/learning/sql-for-healthcare-professionals/assignment-healthcare-analytics-scenario?u=76281980&t=94)** of appointment times vary across different hours? What are the most commonly ordered lab tests? When investigating the lab dataset, checks the patients' blood sugar levels. Typically, fasting blood sugar levels fall between 70 to 100 milligrams per deciliter. Our goal is to identify patients whose lab results are outside this normal range to implement early interventions. How would you write a query to identify those patients? Cardiovascular disease is linked to smoking, among other conditions. The hospital management wants to prevent cardiovascular disease, and they need to access how many patients are considered high, medium, and low risk. Here's how we need to categorize patients into high, medium, and low risk groups. High risk, patients who are smokers and have been diagnosed with either hypertension or diabetes. Medium risk, patients who are non-smokers and have been diagnosed with either hypertension or diabetes. Low risk, patients who do not fall into the high or medium risk categories. This includes patients who are non-smokers and do not have a diagnosis of hypertension or diabetes. Lastly, the hospital administration's interested
>
> **[3:10](https://www.linkedin.com/learning/sql-for-healthcare-professionals/assignment-healthcare-analytics-scenario?u=76281980&t=190)** in finding out information about the patients who are readmitted within 30 days of their previous medical visit. They want to know the reason for the initial visit and the readmission visit. Write a query to identify those patients, the date of the initial visit, the reason for the initial visit, the readmission date, the reason for readmission, and the number of days between the initial visit and readmission. Here's a tip. You only need the table Outpatient Visit for this challenge joined with itself. Please ensure that only patients with at least one readmission within 30 days of the previous visit are included in the results set, and that their admission visit recorded happened after the initial visit. So go ahead and give this a try, and I'll see you in the next few videos to walk through how I would approach these assignments. If you need a reference to the questions, check out the guide in the exercise files. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision-Making]] (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** imagine (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - imagine (1)

#### [Walkthrough: Demographics scenario](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-demographics-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-demographics-scenario?u=76281980&t=0)** - [Instructor] I hope you enjoyed this project in answering the hospital management's team's questions. Let's walk through each one to see how I went about getting the answers they needed. First, what is the demographic profile of the patient population, including age and gender distribution? So, we're going to start by selecting the columns, gender, and we're going to do a CASE statement to classify our patients according to their age. So, we're going to use CASE WHEN, and remember that we don't have an age column, so we have to use the DATEDIFF function. We want the outcome to be in years, and it's going to calculate the difference between the date of birth and the current date. So, what we're going to say here is CASE WHEN, their age is between zero and 17, then those patients are going to be considered pediatric. When they age, or the DATEDIFF function is between 18 and 64. Then those patients are going to be considered adults. Anything else is going to be considered senior. We're going to end this column and we're going to END AS age_group.
>
> **[1:36](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-demographics-scenario?u=76281980&t=96)** Next, we're going to use the aggregate function COUNT. We're going to count all the records. We're going to END AS this column, patient_count. Now, the table where we're pulling these records from is Healthcare_Database .dbo .Patients And since we're using an aggregate function, we have to group our data. We're going to group our data by gender and by our CASE statement and here you have it. This query gives us an overview of how many patients we have, each gender and age group category, helping us understand the demographics of our patient population.

> [!info]- Semantic Content
>
> **Env Vars:** case (4), datediff (2), end (2), count (1)
> **Code Identifiers:** age_group (1), patient_count (1)
> **Speakers:** - [instructor] (1)

#### [Walkthrough: Demographics and diagnosis scenario](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-demographics-and-diagnosis-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-demographics-and-diagnosis-scenario?u=76281980&t=0)** - [Instructor] Next, which diagnosis are most prevalent among patients, and how do they vary across the different demographic groups, including gender and age? And remember tip, we can slightly modify the previous query to bring in the diagnosis. So we're going to start with our previous query, and we're going to add the column diagnosis. Since the diagnosis column does not exist in the patient's table, we have to join the patient's table with the outpatient visits to bring in the diagnosis column. So, we're going to alias the patient's table as p, and we're going to join in a join on Outpatient Visits, Healthcare_Database.dbo.Outpatient Visits.
>
> **[0:52](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-demographics-and-diagnosis-scenario?u=76281980&t=52)** We're going to alias this column as ov. We're going to join those tables in the common key, patient_id. So p.patient_id, equals ov.patient_id. And since we added the diagnosis column in our main query, we also have to add the diagnosis column on the GROUP BY. And here are the results. Adding the diagnosis to the query adds more insights into this population's needs. This information can aid in [[Capacity Planning]], staffing decisions, and resource allocation to ensure that the healthcare facility can adequately serve its patient population.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Capacity Planning]] (1)
> **Code Identifiers:** patient_id (3)
> **SQL:** group by (1)
> **Env Vars:** group (1)
> **Speakers:** - [instructor] (1)

#### [Walkthrough: Appointments scenario](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-appointments-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-appointments-scenario?u=76281980&t=0)** - [Instructor] What are the most common appointment times throughout the day, and how does the distribution of appointment times vary across different hours? We're going to start by selecting, and we're going to use the function DATEPART to pull the hour portion of the appointment time column. So we're going to say hour, and this should come from appointment_time. We're going to alias this column as appointment_hour. Then we're going to count the amount of records. We're going to count the amount of records and going to alias this column as appointment_count. We're going to pull our records from the table, Healthcare_Database.dbo.Appointments. Don't forget that we have to group our data since we're using aggregate function. And we're going to group by the DATEPART. And we have the option of order data by the appointment_count in descending order. And here you have it. It seems the most of our appointments occur around noon, around nine o'clock. So this will allow proper staffing on those hours.

> [!info]- Semantic Content
>
> **Code Identifiers:** appointment_count (2), appointment_time (1), appointment_hour (1)
> **Env Vars:** datepart (2)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Walkthrough: Laboratory scenario](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-laboratory-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-laboratory-scenario?u=76281980&t=0)** - [Instructor] What are the most commonly ordered lab tests? So, we're going to start by selecting the test_name. We're going to count all the records, and we're going to name this column test_count. We're pulling those records from the table, [Healthcare_Database].[dbo].[Lab Results].
>
> **[0:30](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-laboratory-scenario?u=76281980&t=30)** We're going to group our data by the test_name and we have the option of adding ORDER BY test_count in descending order to sort the number of tests from the most common test to the less common test. When you execute, here are the results. Asking about the most commonly ordered lab tests provides insights in healthcare administration patient care. It helps in resource allocation, quality improvement, [[Cost Management]], and clinical decision support.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cost Management]] (1)
> **Code Identifiers:** test_name (2), test_count (2)
> **SQL:** order by (1)
> **Env Vars:** order (1)
> **Speakers:** - [instructor] (1)

#### [Walkthrough: Laboratory with risk scenario](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-laboratory-with-risk-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-laboratory-with-risk-scenario?u=76281980&t=0)** - [Instructor] We're investigating the lab dataset to exam patients' blood sugar levels. Typically, fasting blood sugar levels fall between 70 to 100 milligrams per deciliter. Our goal is to identify patients whose lab results are outside this normal range to implement early interventions. How would you write a query to identify those patients? We are going to start by selecting the columns patient_id, patient_name, and result_value. result_value is in Lab Tests, and patient_id is in the Patients table. The problem is that those tables don't have a common key. In this case, we can use the table Outpatient Visit which contains both fields, patient_id and visit_id, to work as a link between those tables. So we're going to start by selecting [Healthcare_Database].[dbo].Patients.
>
> **[1:07](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-laboratory-with-risk-scenario?u=76281980&t=67)** We're going to alias this table, AS p. We're going to join, INNER JOIN, on [Healthcare_Database].[dbo].[Outpatient Visits].
>
> **[1:25](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-laboratory-with-risk-scenario?u=76281980&t=85)** We're going to alias this table, AS ov. We're going to use the common key patient_id, so p.patient_id = ov.patient_id. And now we can go ahead and bring the Lab Results table. We're going to do another INNER JOIN on [Healthcare_Database].[dbo].[Lab Results].
>
> **[2:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-laboratory-with-risk-scenario?u=76281980&t=120)** We're going to alias this table, AS lr. And we're going to join ov.visit_id = lr.visit_id.
>
> **[2:16](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-laboratory-with-risk-scenario?u=76281980&t=136)** Now that this portion's complete, we can filter results. We're going to use the WHERE clause to filter by the test_name 'Fasting Blood Sugar'. And we wanted those result_value should be within a certain range. So we're going to write lr.result_value is less than 70 OR lr.result_value is more than 100. And those are the results. By identifying those with abnormal results, we can intervene early, preventing the development of serious health conditions like diabetes or cardiovascular diseases.

> [!info]- Semantic Content
>
> **Code Identifiers:** patient_id (6), result_value (5), visit_id (3), patient_name (1), test_name (1)
> **Env Vars:** inner (2), join (2), where (1)
> **SQL:** inner join (2), where (1)
> **Speakers:** - [instructor] (1)

#### [Walkthrough: Risk scenario](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-risk-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-risk-scenario?u=76281980&t=0)** - [Instructor] Cardiovascular disease is linked to smoking, among other conditions. The hospital management wants to prevent cardiovascular disease and they need to access how many patients are considered High, Medium, and Low Risk. Here's how we need to categorize patients into High, Medium, and Low Risk groups. High Risk are patients who are smokers and have been diagnosed with either hypertension or diabetes. Medium Risk are patients who are non-smokers and have been diagnosed with either hypertension or diabetes. Low Risk are patients who do not fall into the High or Medium Risk categories. This includes patients who are non-smokers and do not have a diagnosis of hypertension, diabetes. So, we're going to start by building our CASE statement. We're going to write SELECT, CASE, WHEN, and let's look into the High Risk patients. So, WHEN smoker_status = 'Y' AND (diagnosis = 'Hypertension' OR diagnosis = 'Diabetes'),
>
> **[1:22](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-risk-scenario?u=76281980&t=82)** then those patients are going to be considered 'High Risk'. Remember to put the diagnosis in between parentheses. This way, [[SQL]] is going to first do this condition, and then combine with this smoker_status. Next, we're going to stratify the Medium Risk patients. So, we're going to say, WHEN smoker_status = 'N' AND (diagnosis = 'Hypertension' OR diagnosis = 'Diabetes'),
>
> **[2:02](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-risk-scenario?u=76281980&t=122)** then those patients are going to be considered 'Medium Risk'. Anything else is going to be considered 'Low Risk'. We're going to END in this CASE statement, and we're going to alias this as Risk_category. Then, we're going to use an aggregate function, COUNT the number of patient IDs, and we're going to alias this column as num_patients. We're pulling this data from [Healthcare Database].[dbo].[Outpatient Visits],
>
> **[2:46](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-risk-scenario?u=76281980&t=166)** and, remember, to group our data by the CASE statement. Now, we're going to execute. And here's the number of patients stratified by cardiovascular disease risk.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** case (4), select (1), sql (1), end (1), count (1)
> **Code Identifiers:** smoker_status (3), num_patients (1)
> **SQL:** select (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Walkthrough: Readmission scenario](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-readmission-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-readmission-scenario?u=76281980&t=0)** - The hospital administration is interested in finding out information about the patients who had multiple visits within 30 days of their previous medical visit. Write a query to identify those patients, the date of the initial visit, the reason for the initial visit, the readmission date, the reason for readmission, and the number of days between the initial visit, and readmission. We only need the table outpatient_visits for this challenge, which can be joined with itself to get the necessary information. We're asked to ensure that only patients with at least one readmission within 30 days of their previous visits, are in the results set, and that the readmission visits recorded happened after the initial visit. So we're going to start by joining the tables Healthcare_database.dbo, Outpatient Visits, with itself.
>
> **[1:06](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-readmission-scenario?u=76281980&t=66)** So we're going to label the table as of the ov_initial, and we're going to join it with itself. And we're going to label this table ov_readmit. We're going to use the common key patient id. So we're going to write ON ov_initial.patient_id = ov_readmit.patient_id.
>
> **[1:45](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-readmission-scenario?u=76281980&t=105)** Now that this join's complete, let's select our relevant columns. We're going to start by selecting the columns from our ov_initial table. So we're going to SELECT ov_initial.patient_id ov_initial.visit date. And we're going to name this column initial_visit_date,
>
> **[2:17](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-readmission-scenario?u=76281980&t=137)** to distinguish from the readmission_visit_date. We're going to go ahead and SELECT ov_initial.reason_for_visit. And once again, we're going to label this column AS reason_for_visit_initial_visit.
>
> **[2:41](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-readmission-scenario?u=76281980&t=161)** Next we're going to go to the readmission table. So we're going to say ov_readmit.visit_date.
>
> **[2:55](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-readmission-scenario?u=76281980&t=175)** And we're going to label this column AS readmission_date. We're going to say ov_readmit.reason_for_visit.
>
> **[3:12](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-readmission-scenario?u=76281980&t=192)** And this is going to be the reason_for_readmission. Now we want to calculate the number of days between the initial visit, and the readmission visit. So for that, we're going to use the DATEDIFF function. We want the amount in days. we're going to put the ov_initial.visit_date,
>
> **[3:43](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-readmission-scenario?u=76281980&t=223)** and we're going to compare to the ov_readmit.visit_date. And we're going to name this column AS dates_between_initial_and_readmission.
>
> **[4:03](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-readmission-scenario?u=76281980&t=243)** Now that this portion is ready, we can go ahead and filter our data to just show the relevant results. So all that we want are the patients where the days between the initial visit and readmission date are less than or equal than 30. So we can copy this. There's going to be less or equal to 30, and the readmission visit must have occurred after the initial visit date. So I'm going to say ov_readmit.visit_date &gt; ov_initial.visit_date.
>
> **[4:43](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-readmission-scenario?u=76281980&t=283)** So I'm going to run this query, and here have it.
>
> **[4:54](https://www.linkedin.com/learning/sql-for-healthcare-professionals/walkthrough-readmission-scenario?u=76281980&t=294)** I'm going to run this query. And here you have it. In the results, we can see the patients that were readmitted within 30 days from the initial visit, and the reason for the readmission. These are showing sites on why those readmissions are happening, and any potential problems can be addressed. Congratulations on completing these assignments. I hope the practical exercises have helped you put the theoretical knowledge into action. Remember that while the final projects may have specific requirements, it's okay if your queries differ from the walkthrough, as long as you get the same results. This is also true if you use another flavor of [[SQL]], and not [[Microsoft SQL Server]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Microsoft SQL Server]] (1)
> **Code Identifiers:** ov_initial (8), ov_readmit (6), visit_date (5), patient_id (3), reason_for_visit (2)
> **Env Vars:** select (2), sql (2), datediff (1)
> **SQL:** select (2)
> **UI Navigation:** go to (1)
> **Speakers:** - the (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/sql-for-healthcare-professionals/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-healthcare-professionals/next-steps?u=76281980&t=0)** - Congratulations on finishing the course. We cover a lot of ground from understanding [[SQL]] fundamentals to solving problems using queries. Each step of this course has helped you grow as a SQL practitioner in the [[Healthcare Industry]]. As we learn the use of data in the healthcare field is growing. If you're coming from healthcare, I encourage you to take more courses in data analytics. You might want to learn more about advanced functions in SQL and explore different ways you can extract insights from your data. If you're coming from the data realm, and advise you to look into different aspects of the healthcare industry, such as loss and policies that govern data. The healthcare industry has its standards, and it's going to change based on which kind of data you are working with. Networking with healthcare professionals can also bring value in understanding the challenges in the future. Either way, I hope this course has helped you better prepare for the next steps in your career. Keep learning, exploring, and pushing the boundaries of what's possible. You've got this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Healthcare Industry]] (3)
> **Env Vars:** sql (3)
> **Analogies:** such as (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Thais Cooke]]

## Resources

- Exercise files available

## Skills Covered

- Healthcare Information Technology (HIT)
- Data Analysis
- SQL

## Path Context

### In [[Hands-On Healthcare Analytics]]
← [[Python Data Analysis for Healthcare]] | **5 of 8** | [[Descriptive Healthcare Analytics in R]] →

## Appears In

- [[Hands-On Healthcare Analytics]]

## Related Courses

_Courses sharing skills:_

- [[Intermediate SQL- Data Reporting and Analysis]] — SQL, Data Analysis
- [[Data Analysis- Investigate with SQL]] — SQL, Data Analysis
- [[Advanced SQL for Data Scientists]] — SQL, Data Analysis
- [[Intermediate Sql For Data Scientists]] — SQL, Data Analysis
- [[SQL for Data Analysis]] — SQL, Data Analysis

---

[↑ Back to top](#)