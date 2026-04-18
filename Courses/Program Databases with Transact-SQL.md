---
type: course
slug: program-databases-with-transact-sql
url: "https://www.linkedin.com/learning/program-databases-with-transact-sql"
duration_minutes: 167
duration: 2h 47m
level: Intermediate
updated: 1/9/2024
learners: 73284
skills:
  - Transact-SQL (T-SQL)
exercise_files: true
tags:
  - course
  - topic/software-development
  - skill/transact-sql-t-sql
status: not-started
created: 2026-04-17
---

# Program Databases with Transact-SQL

> This course focuses on a single category of objects within a SQL Server database: Programmability objects. With these objects, database developers can automate systems with triggers, ensure consistent user experiences with stored procedures, protect database integrity with transactions, and implement error-handling routines that enhance the database’s functionality. Join instructor Adam Wilbert as

> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql) | 2h 47m | Intermediate | 73K learners

## Instructor

- [[Adam Wilbert]]

## Resources

- Exercise files available

## Skills Covered

- Transact-SQL (T-SQL)

## Table of Contents

### Introduction

#### Program databases with SQL Server
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/program-databases-with-sql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/program-databases-with-sql-server?u=76281980&t=0)** - [Adam] Early on in the development process of a SQL server database, it becomes clear that manually typing commands and sending them to the server one at a time is not going to be a longterm sustainable practice.
>
> **[0:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/program-databases-with-sql-server?u=76281980&t=12)** By leveraging programmability objects and techniques, you can improve the reusability of your code and the consistency of the actions that you want the server to perform.
>
> **[0:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/program-databases-with-sql-server?u=76281980&t=22)** Hi, I'm Adam Wilbert and I've been helping people better leverage databases for over a decade.
>
> **[0:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/program-databases-with-sql-server?u=76281980&t=28)** In this course, I'll show you how to transition from writing one-off queries to creating repeatable code elements.
>
> **[0:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/program-databases-with-sql-server?u=76281980&t=35)** These will make the database easier to interact with, reduce the possibility of encountering user errors, and make the processes that you execute more predictable.
>
> **[0:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/program-databases-with-sql-server?u=76281980&t=44)** So fire up your database server and get ready to explore views, functions, store procedures, transactions, and more.
>
> **[0:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/program-databases-with-sql-server?u=76281980&t=53)** I'm excited that you've joined me. Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** let (1)
> **Env Vars:** sql (1)
> **Speakers:** - [adam] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, I'll expect that you have some familiarity with SQL Server and the graphical interface, Management Studio.
>
> **[0:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-you-should-know?u=76281980&t=9)** You should be able to write Transact-SQL commands and have an understanding about how tables and keys work in a relational database.
>
> **[0:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-you-should-know?u=76281980&t=17)** I'll be using SQL Server 2019 and Management Studio version 18, but you shouldn't have any problems following along if you're on an older or a newer version.
>
> **[0:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-you-should-know?u=76281980&t=28)** The concepts that we'll be looking at have been pretty stable over the years and I don't expect them to change in meaningful ways anytime soon.
>
> **[0:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-you-should-know?u=76281980&t=36)** If you feel like you do need an introduction or a refresher on SQL Server first, then I'd highly recommend that you take a look at my SQL Server 2019 essential training course first, as it'll give you everything that you need to be successful here.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5)
> **Code Keywords:** interface (1)
> **Versions:** version 18 (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=0)** - [Instructor] All of the scripts that I'll be executing throughout this course can be downloaded from the course's overview page, so that you can follow along.
>
> **[0:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=8)** Just look for the link for the exercise files.
>
> **[0:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=10)** I've gone ahead and downloaded them and placed them here on my desktop, and inside of that folder is a folder for each chapter of the course, and inside of there are the individual scripts that we'll execute throughout each movie.
>
> **[0:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=20)** Now these are SQL files.
>
> **[0:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=22)** You can open them up in any sort of text editor, such as Notepad or you can open up directly inside of Management Studio.
>
> **[0:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=29)** This will allow us to execute the scripts against our databases.
>
> **[0:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=32)** Now the one thing you notice here on the screen is that I have line numbers turned on on my system, and that'll help you follow along.
>
> **[0:38](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=38)** If you want to turn on line numbers on your system, just go up to the tools menu, come down to options, then we'll go into the text editor settings.
>
> **[0:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=47)** Then transact SQL, general, and you'll find a checkbox here to turn on line numbers.
>
> **[0:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=53)** The other thing that we need is a database to execute our scripts against.
>
> **[0:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=56)** And we're going to be using a sample database from Microsoft called Wide World Importers.
>
> **[1:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=61)** Now I've already got it installed on my system, but I'll show you how to get it.
>
> **[1:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=64)** First, we need to go out to Microsoft's GitHub page at this URL.
>
> **[1:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=69)** Here, you'll find a link for the WideWorldImporters-Full.bak file.
>
> **[1:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=74)** Go ahead and download that, that's a database backup file, and we'll install it on our SQL server instance.
>
> **[1:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=81)** Once it's done downloading we can go ahead and find it inside of our downloads folder on our computer.
>
> **[1:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=86)** It's right here, I'll go ahead and right click on it and choose Cut.
>
> **[1:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=88)** Then we'll go into the SQL server backup folder, which you can find on your C Drive typically.
>
> **[1:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=93)** Inside of program files, Microsoft SQL server, the folder that corresponds to your server name and version number, and mine is MSSQL15.MSSQL SERVER.
>
> **[1:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=105)** We'll go inside of there, then inside of the MSSQL folder, and finally backup.
>
> **[1:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=110)** Now at this point you might get a message saying that you don't have permission to enter this folder.
>
> **[1:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=113)** And you can just press the continue button, and you should be let in.
>
> **[1:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=117)** Then, just right click and paste a copy of that backup file there.
>
> **[2:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=120)** Next, we'll go back inside of Management Studio.
>
> **[2:03](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=123)** From here, we'll right click on the databases folder in the Object Explorer window and choose restore database.
>
> **[2:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=130)** Then, we're going to pull our restore from a device.
>
> **[2:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=132)** We'll turn on this button here, and press the ellipses button over on the far right.
>
> **[2:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=136)** We'll press the add button on this window and that should bring us into that backup folder where we can choose our backup file that we just downloaded.
>
> **[2:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=144)** Go ahead and select it, press okay, okay again, and okay one more time to restore that backup onto your system.
>
> **[2:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=151)** Once you're done, you should have the Wide World Importers database here inside of your Object Explorer window.
>
> **[2:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=155)** You might need to right click databases and choose refresh if you don't see it automatically.
>
> **[2:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/using-the-exercise-files?u=76281980&t=159)** And this will give us all the data that we need to explore programmability features inside a SQL server.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6), mssql (2), url (1), mssql15 (1), server (1)
> **CLI Commands:** find (4)
> **UI Navigation:** click on (2), checkbox (1)
> **Code Keywords:** continue (1), let (1)
> **Definitions:** is a  (2)
> **Tools:** github (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)


### 1. Create Views of the Data

#### Save a query as a view object
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=0)** - When the development of your database, moves beyond the basic structure of the tables and relationships, the first additional object that's generally created, is a view.
>
> **[0:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=10)** Views are essentially saved select queries, and they return virtual tables that display attribute columns and rows of data from your main database tables.
>
> **[0:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=20)** Views don't generally store data themselves.
>
> **[0:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=23)** Instead they fetch the current state of the data, from the requested tables, every time the view is called.
>
> **[0:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=29)** So there's no need to keep them updated or maintained, as the data that you're storing changes.
>
> **[0:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=34)** If you can write a select query, then you can create a view.
>
> **[0:38](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=38)** Let's take a look by exploring the contact details for the suppliers that Wide World Importers uses.
>
> **[0:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=44)** On line number two, I'm going to make sure that we're targeting this, to the Wide World Importers database, and then we're going to run three select statements.
>
> **[0:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=51)** The first one pulls a single row from the purchasing.suppliers table, then we'll get related details from purchasing.supplier categories and application.people.
>
> **[1:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=60)** So let's go ahead and run everything from line 1 to 11, and we'll see the results here below.
>
> **[1:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=65)** So this first table here at the very top, represents a single row from purchasing.suppliers.
>
> **[1:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=71)** Here we can see the related details.
>
> **[1:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=73)** So the supplier category for a data corporation, is supplier category ID number two.
>
> **[1:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=79)** We can take that to the purchasing.supplier categories table, and we can see that that corresponds to the novelty goods supplier and then we also have the contact information for the primary contact, as well as the alternate contact.
>
> **[1:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=91)** These are numbers 21 and 22, in the people table, and we can see those details here, and here.
>
> **[1:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=97)** So in order to view all of these specific details and not just the ID numbers stored in the suppliers table, we can write out a couple of queries.
>
> **[1:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=105)** Let's go ahead and minimize this results window and we'll take a look at the query that starts on line number 16.
>
> **[1:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=112)** The first query, we'll organize the information in columns.
>
> **[1:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=115)** Here, we're going to output three columns for the primary contact, and we have those rows here.
>
> **[1:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=119)** So we have the primary contact, full name, their phone number and their email address.
>
> **[2:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=124)** Then we have an additional three columns, for the alternate contact name, phone number, and email address.
>
> **[2:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=130)** This is achieved by creating two separate joints between the supplier's table and the people table.
>
> **[2:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=135)** The first one will get the alias as primary contact and the second joint, we'll get the alias as alternate contact.
>
> **[2:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=143)** So let's go ahead and highlight line 16, all the way down to 33 and execute it to see what this result looks like.
>
> **[2:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=150)** And here we have all that information split out into different columns.
>
> **[2:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=154)** So we have the primary contact information, and then the alternate contact information.
>
> **[2:38](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=158)** Now this is quite a few lines that we need to have written out, and we can save all of that effort in the database by turning this query into a view.
>
> **[2:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=166)** To do that, backup here on line number 14 and 15, I have two commented lines that I'm going to un-comment.
>
> **[2:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=173)** This will allow me to turn this select statement into a view and all we need is the keywords, Create View, the name of the view that we want to create, and then the keyword, As.
>
> **[3:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=182)** In this case, the view is going to be in the purchasing schema, and the view will be called Supplier Detail Columns.
>
> **[3:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=189)** Creating a view requires that your user account has a couple of allowable permissions.
>
> **[3:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=193)** First, you need to have create view permission in the database, and second, you need to have the alter permission on the schema in which the view is being created.
>
> **[3:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=202)** In this case, the purchasing schema.
>
> **[3:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=208)** Assuming you have been granted the require permissions, let's go ahead and highlight lines 14 all the way down to 33 and execute the statement to create the view.
>
> **[3:38](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=218)** Now, before we run it, let's go ahead and take a look at a different arrangement of the same information that we can see from the database.
>
> **[3:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=223)** I'm going to scroll down here on two line number 37.
>
> **[3:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=227)** Here we have two different queries, that'll return the different information.
>
> **[3:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=231)** Starting on line 37, we have another select statement and this one deals with just the primary contact information.
>
> **[3:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=237)** It has a single joint of the people table, and adds in a column called Contact Type, that's just going to get filled in with a text, primary contact for every row.
>
> **[4:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=246)** Then we do the same thing with the alternate contact, filling in again, another column called Contact Type.
>
> **[4:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=253)** When we merge both of these queries together using the union keyword here online number 49, we'll wind up with a result that looks like this.
>
> **[4:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=261)** Let's highlight everything from 37 down to 63 and execute it, and we'll see the results here.
>
> **[4:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=268)** This time, we get two different rows for each company.
>
> **[4:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=270)** We have a Datum Corporation here, and a second row for Datum Corporation, and you can see that same pattern going down the list.
>
> **[4:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=277)** This will separate out the different contact information between the alternate contact and the primary contact for each company.
>
> **[4:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=284)** So let's go ahead and turn this alternate view of the same information into a view.
>
> **[4:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=288)** Once again I'm going to scroll back up here onto slide number 35, and we'll uncomment out these two lines that'll create this as a view.
>
> **[4:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=295)** This view is going to be in the purchasing schema again, but we'll call it supplier detail rows.
>
> **[5:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=300)** This time I'll highlight 35 down to 63 and execute it.
>
> **[5:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=304)** Then I'll go ahead and create the view, and now we can test everything out.
>
> **[5:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=308)** On line number 66, I'm going to select everything or every column from purchasing.supplier detail columns.
>
> **[5:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=314)** That's the view that we created first.
>
> **[5:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=316)** I'll press execute and we'll see we get these results, with the primary information and the alternate contact information, all listed out in columns.
>
> **[5:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=324)** If I want to see these same information separated by rows, I'll go ahead and run these select statement against this second view, the supplier detail rows view.
>
> **[5:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=333)** And here we have the alternate view of the same data.
>
> **[5:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/save-a-query-as-a-view-object?u=76281980&t=336)** So with these two views in place, we can save a lot of typing, no matter which orientation of the data is best suited for a particular task.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), case, (2), this, (1), require (1), type, (1)
> **Prerequisites:** you need to have (2), assuming you have (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - when (1)

#### Explore existing views
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=0)** - [Instructor] Once you've created a view, you can find them in a couple of different ways.
>
> **[0:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=4)** If you're using a graphical interface like we have here, inside of management studio, then you can find them by expanding the database and then finding the views folder, and you'll find them inside of here.
>
> **[0:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=14)** This shows me that we have three views inside of the website schema, and these are the ones that come installed with the backup of the WideWorldImporters database, and then we have the two views that we created in the purchasing schema in the prior movie.
>
> **[0:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=27)** Now if you're not using a graphical interface, or you'd rather just use a T-SQL command to get this information, you can query a system catalog view called sys.objects.
>
> **[0:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=37)** I have that query here on line number six.
>
> **[0:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=40)** We're going to select everything, or all the columns, from sys.objects, where the type description equals view.
>
> **[0:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=47)** Let's highlight this and execute it to view the results.
>
> **[0:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=49)** And here is the same information that we're seeing over here in the folder structure, inside of the object explorer window.
>
> **[0:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=56)** Now, sys.objects doesn't store the schema names, and it might be useful to see that as well, so we can join these results here to the sys.schemas catalog view in order to see the fully qualified view name, including the schema, in a compact little table.
>
> **[1:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=71)** I have that code starting on line number nine.
>
> **[1:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=74)** We're going to select three columns, object.object_id, schemas.name, and object.name.
>
> **[1:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=80)** We're going to pull them from two different tables, the sys.objects view, and the sys.schemas view.
>
> **[1:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=85)** Once again, we're going to filter this to just the objects where the type description is equal to view.
>
> **[1:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=91)** I'll highlight lines nine through 14 and execute them, and now we can see the object ID, the schema name, and the view name, for all the views in the database.
>
> **[1:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=100)** So that's how you can find out what views are in your database, either using the graphical interface, or using T-SQL commands.
>
> **[1:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=108)** You can also find out about specific details about existing views by querying sys.SQL underscore modules.
>
> **[1:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=116)** I have that code on the screen here, let me just scroll down to line number 17.
>
> **[2:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=120)** This time we'll select all the columns from sys.SQL_modules and I'm going to target a specific object ID.
>
> **[2:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=127)** The view that I want to look at is for Website.Suppliers, and you can see that it has an object ID starting at 1678 and all these numbers here.
>
> **[2:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=135)** I've copied that up here into the script.
>
> **[2:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=138)** So you can either say where object_id is equal to that number, or if you don't know that number, you can use the object_id function to pull it right out of the name.
>
> **[2:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=147)** If I go ahead and highlight this number and the two hyphens here, we'll see what it looks like using the function instead.
>
> **[2:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=153)** I'm going to highlight this and execute it, and now I can see all the different information about that specific view.
>
> **[2:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=159)** The most useful piece of information here is the full text of the select statement that the view is made from, you can see that in the definition column.
>
> **[2:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=166)** There's also a number of columns that contain bit flags to denote which settings have been applied to the view, where one means true, and zero means false.
>
> **[2:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=176)** So this view does use ansi_nuls, does use quoted identifier, and is not schema bound.
>
> **[3:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=182)** Having the view definition in a single cell of the results might be hard to read, like we have here in the definition column.
>
> **[3:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=189)** So for another way to display this information, the sp_helptext stored procedure might be a better option.
>
> **[3:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=195)** I have that on line number 23 here.
>
> **[3:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=198)** This is a stored procedure, so we need to execute it, so execute sp underscore helptext, and then the name of the view, Website.Suppliers, inside of single quotation marks.
>
> **[3:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=207)** I'm going to run line 23, and we can see what that looks like.
>
> **[3:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=211)** This shows each line of the definition in its own row in the results.
>
> **[3:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=216)** Here and there, this might be an easy way to quickly read through the full definition when you're not using a graphical interface.
>
> **[3:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=222)** When you are, though, an easier way would be to simply right click on it over here inside of the object explorer window, come down to script view as, create to, and then say new query editor window.
>
> **[3:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=236)** That'll give you the same information here on the screen.
>
> **[4:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/explore-existing-views?u=76281980&t=240)** So that's how you can find out what views already exist in your database and, find out the details about exactly what information they display.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), let (2), function (2), from, (1)
> **CLI Commands:** find (7)
> **Code Identifiers:** object_id (3), ansi_nuls (1), sp_helptext (1)
> **Env Vars:** sql (3)
> **UI Navigation:** scroll down (1), click on (1)
> **File Paths:** sys.sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### SchemaBind a view
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=0)** - Views are defined with select statements that reference database tables.
>
> **[0:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=5)** This can cause issues if the structure of the underlying table changes after the view is created.
>
> **[0:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=10)** For instance if a table is dropped or a column is renamed.
>
> **[0:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=14)** Database designers can prevent this disconnect from happening with an the additional option called schema binding.
>
> **[0:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=21)** I'm going to create a view that shows some information from the Sales.CustomerTransactions table.
>
> **[0:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=27)** We're going to call this view Sales.OutstandingBalance.
>
> **[0:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=31)** I'm using a WHERE clause here to only return transactions that have a balance due.
>
> **[0:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=37)** This occurs when the customer hasn't fully yet paid their bill.
>
> **[0:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=41)** Then we can test out the view by selecting everything from the Sales.OutstandingBalance view.
>
> **[0:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=46)** So I'm going to run line six through 22.
>
> **[0:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=50)** So this is our starting point, we have 84 rows returned for all of the transactions with a balance due.
>
> **[0:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=56)** Now let's suppose that a structural change is made to the database.
>
> **[0:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=59)** I'm going to scroll down on my script here and find the line on number 25, that starts with this execute statement.
>
> **[1:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=66)** Using the sp_rename stored procedure, I'm going to rename the AmountExcludingTax column to a new name called PreTaxTotal.
>
> **[1:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=76)** Let's execute line number 25 to make that change to our database table.
>
> **[1:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=81)** SQL Server allows this change to be made but notice that it does give a little information a warning in the messages window.
>
> **[1:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=88)** It says that changing any part of an object name could break scripts and stored procedures.
>
> **[1:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=92)** And in our case, it's actually breaking the view.
>
> **[1:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=96)** To confirm that the change was made, let's take a look inside of the Wide World Importers and I'll expand the tables folder over here inside of the Object Explorer.
>
> **[1:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=103)** Then we'll go down to the sales schema, and we'll find the customer transactions table right there.
>
> **[1:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=108)** I'll expand the columns and we'll see that we have the new column name of PreTaxTotal there.
>
> **[1:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=114)** Now it should come as no surprise that this causes issues with our view.
>
> **[1:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=119)** If we try and run it again, I've got it here on line number 28 to select everything from the view, this time we get an error, and specifically it says it's because of binding errors.
>
> **[2:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=129)** The view can no longer locate all of the columns in the Select definition.
>
> **[2:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=135)** To fix this, we can alter the view.
>
> **[2:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=137)** I'm going to scroll down here to line number 32.
>
> **[2:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=141)** Unlike a table where you can simply add or remove columns, with a view, you need to redefine the entire thing in the ALTER statement.
>
> **[2:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=149)** This means that the ALTER statement will include everything that's not changing as well.
>
> **[2:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=153)** I'm going to put the new column here into the statement, so we're going to target the PreTaxTotal column but I can actually take this one step further by using an alias to return the original column name back to the end user when they query the view.
>
> **[2:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=167)** So we'll say PreTaxTotal, as and then the original name, AmountExcludingTax.
>
> **[2:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=173)** This demonstrates one of the security benefits of using views is that the physical structure of the database the table names and column column names can be masked from the end user when the view just returns aliases and not the actual names.
>
> **[3:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=187)** This helps limit the ability of end users from snooping through the database to try and gain access to information that they are otherwise not authorized to see.
>
> **[3:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=197)** So let's go ahead and alter our review with the new column names in place.
>
> **[3:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=201)** And now if I select everything out of it again, we'll see that we get the original information along with the original column name here, even though that's no longer the name that's in the actual table.
>
> **[3:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=211)** So altering the view to keep end users unaware of structural changes to the database is one convenient benefit to using views.
>
> **[3:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=219)** We can also use the view to prevent structural changes from the tables that will break the view in the first place.
>
> **[3:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=225)** Let's alter the view one more time.
>
> **[3:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=227)** We'll start another ALTER statement on line number 50.
>
> **[3:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=232)** This time I'll add the, with schema binding option right after the name and before the keyword, as.
>
> **[3:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=238)** This will lock the view and the table together so that changes to the table that would break the view will no longer be allowed.
>
> **[4:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=246)** In order to make a change like that the view would need to be altered or dropped first.
>
> **[4:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=250)** This added step can prevent database developers from accidentally breaking a view that they didn't know had a dependency.
>
> **[4:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=258)** While altering this view, I've also gone ahead and given each name a column alias to further mask the structure of the original table.
>
> **[4:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=264)** So now customer transaction ID will display as transaction number, customer ID will display as customer number, and so on for every column in the view.
>
> **[4:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=274)** I'll alter the view one more time.
>
> **[4:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=275)** And then again, we'll test it out.
>
> **[4:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=279)** And here I can see the masked column names from the views output.
>
> **[4:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=284)** Now that the view and the table are schema bound, if I try and change the column name back to its original name, you're going to see we get an error.
>
> **[4:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=293)** SQL Server tells me that it can't be renamed because the object participates in an enforced dependency.
>
> **[4:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=299)** If you're trying to make this change to your table and don't know which views are dependent, you can query a dynamic management view called dm_sql_referencing_entities.
>
> **[5:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=309)** I've got that starting on line number 74.
>
> **[5:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=312)** We're going to pull out a couple of different columns.
>
> **[5:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=313)** And we're going to join it to the sql modules view that we saw in the prior movie.
>
> **[5:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=319)** I'll highlight all of this on 74 down to 80, and execute it.
>
> **[5:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=323)** And it shows me the different objects that are dependent on the Sales.CustomerTransactions table.
>
> **[5:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=329)** Here I can see our view Sales.OutstandingBalance is schema bound to that table.
>
> **[5:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=334)** So now that we know what view is causing the enforced dependency error, we can go ahead and drop it.
>
> **[5:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=340)** To drop a view we just say drop view and the name of the view.
>
> **[5:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=345)** That'll drop the view from the database and now we can return the table column back to its original name.
>
> **[5:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=350)** I'll execute sp_rename on the Sales.CustomerTransactions table and we'll rename PreTaxTotal back to AmountExcludingTax.
>
> **[6:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=360)** This time it executes successfully.
>
> **[6:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=362)** And if I go over here into the Object Explorer window and refresh our Sales.CustomerTransactions table, we'll see that we have the column name is back to its original state.
>
> **[6:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=374)** So with column aliases built into the view, you can keep end users unaware of structural changes to the database, while simultaneously protecting the actual names of objects from being revealed.
>
> **[6:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/schemabind-a-view?u=76281980&t=385)** And with the schema binding option, you can prevent changes to the database that will break your views.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (1), this, (1)
> **Env Vars:** alter (3), sql (2), where (1)
> **CLI Commands:** make (3), find (2)
> **Code Identifiers:** sp_rename (2), dm_sql_referencing_entities (1)
> **UI Navigation:** scroll down (2)
> **SQL:** where (1)
> **Definitions:** means that (1)
> **Analogies:** for instance (1)

#### Leverage view objects with indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=0)** - Earlier I mentioned that user don't generally store data, and that's true in most cases.
>
> **[0:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=5)** But there is a way to have a view store its own copy of your data in addition to the copy that's in the original tables.
>
> **[0:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=12)** You do this by adding an index to the view.
>
> **[0:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=15)** Let's first explore why you would want to do this.
>
> **[0:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=18)** I'm going to review the data that's currently stored in two different tables, Warehouse.StockItems and Purchasing.Suppliers.
>
> **[0:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=26)** Let's go ahead and run these queries on line one through eight to see these two different tables.
>
> **[0:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=31)** The WideworldImporters database is properly normalized.
>
> **[0:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=34)** Meaning that information is split across multiple tables with key values that connect the rows of data together.
>
> **[0:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=41)** So from the StockItems table that we have here at the top, we can find the ProductSupplier by matching the SupplierID in both tables.
>
> **[0:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=50)** This pattern repeats itself over and over again in the database.
>
> **[0:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=54)** We have the ColorID, the UnitPackageID, we also have the SupplierCategoryID and the PrimaryContactPersonID columns.
>
> **[1:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=62)** All of these point to additional rows in different tables.
>
> **[1:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=66)** To make this information easier to digest for the end user, we use a select statement to pull it all together.
>
> **[1:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=72)** I've got an example of one starting on line number 15.
>
> **[1:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=76)** This will join information from Warehouse.StockItemStockGroups, Warehouse.StockGroups, Warehouse.StockItems, Warehouse.Colors, and Warehouse.StockItemHoldings.
>
> **[1:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=87)** We got a lot of different inner joints here and the different columns that we want to view up above.
>
> **[1:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=92)** Let's go ahead and run all of this to see the results.
>
> **[1:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=95)** Now, this is much more useful information from an end user's perspective.
>
> **[1:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=99)** Instead of the ID numbers, we have the actual values that they represent.
>
> **[1:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=104)** Now we can save this as a view in order to save the select statement into the database.
>
> **[1:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=109)** I'm going to un-comment lines, 12, 13, and 14 to turn the select statement into a create view statement.
>
> **[1:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=118)** We'll create a view in the warehouse schema, and I'll call it StockItemDetails.
>
> **[2:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=122)** We're going to use the WITH SCHEMABINDING option here, and then we have the AS keyword followed by the same SELECT statement.
>
> **[2:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=128)** Let's go ahead and run this to create the view.
>
> **[2:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=131)** Now we can go ahead and test the view and we'll see that we get the exact same results as we had a moment ago.
>
> **[2:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=137)** Now, every time this view is run, the database engine needs to perform all of these joins that we have up here in the definition.
>
> **[2:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=145)** This can potentially be an expensive operation in terms of the impact on hardware resources, especially if this is a view that's used often by a lot of different users.
>
> **[2:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=155)** By adding an index to this view, we can permanently store a duplicate redundant copy of the data already joined or de normalized so that we can query it and not have to perform all of the joints every time.
>
> **[2:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=169)** This is called a materialized view.
>
> **[2:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=172)** Now there's a couple of caveats that we have to go through before we do this.
>
> **[2:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=176)** First, the view needs to be deterministic.
>
> **[2:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=179)** A deterministic view will always return the same values when given the same input.
>
> **[3:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=185)** So for instance the random function, returns a different number every time it's run.
>
> **[3:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=190)** If your view includes the random function, then it would no longer be deterministic.
>
> **[3:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=196)** We'll talk about this more in depth in a later chapter when we explore database functions, but for now just know that non-deterministic functions can not be included in an index view.
>
> **[3:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=208)** Second, the view needs to be schema bound to the underlying tables, which we've already done up here at the top when we created our view.
>
> **[3:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=216)** The view must also be created against tables in the same database and not other views.
>
> **[3:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=221)** It cannot contain a top class to limit rows, aggregate functions, such as count, mean or max or any outer joins.
>
> **[3:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=230)** Another restriction is that any columns that use the float or real data types, cannot be part of the index.
>
> **[3:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=237)** Those two columns store approximate numbers and the exact value can change depending on the specific configurations of your server hardware.
>
> **[4:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=245)** Now those are the most commonly encountered restrictions, but there are additional restrictions on when you can create an index view.
>
> **[4:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=252)** So if you do encounter any errors, you'll want to read through the error message closely to see if you've hit one of those less common restrictions.
>
> **[4:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=259)** Our view meets all of the basic restrictions so we should be able to add an index to it.
>
> **[4:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=264)** You add an index to a view just like you add an index to a table.
>
> **[4:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=268)** We're going to create a unique clustered index and I'll name it IDX_StockItemDetails.
>
> **[4:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=274)** Then it'll be on the Warehouse.StockItemDetails view, and it'll include these columns, StockItemStockGroupID, StockItemName, and the SupplierID columns.
>
> **[4:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=284)** Let's go ahead and create that index.
>
> **[4:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=287)** Now, if we take a look at the view inside of the WideworldImporters database over here in the Object Explorer, let's go ahead and minimize the tables folder and expand views.
>
> **[4:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=295)** All right, click on the views folder and choose refresh.
>
> **[4:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=299)** And here is the Warehouse.StockItemDetails view, and we should be able to find the index right there.
>
> **[5:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=305)** So now we can query the view and add any additional information to the results by merging the data with additional tables.
>
> **[5:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=311)** For instance, I'll select all of the columns from the Warehouse.StockItemDetails view and merge it with all of the columns from the supplier's table, from the purchasing schema.
>
> **[5:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=321)** We're going to filter the results to just where the SupplierID is equal to five.
>
> **[5:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=325)** I'll run this query and we'll see these results.
>
> **[5:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=329)** Now that the view has an index, anytime and update to the base tables is made, those changes are automatically saved to the view as well.
>
> **[5:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=337)** This could impact the right operation speed in your database.
>
> **[5:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=340)** So you'll want to monitor it for performance to ensure that having the index view is a net positive gain.
>
> **[5:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=347)** But with the index in place, the SQL server query optimizer has another option for determining the best way to approach retrieving information from the database.
>
> **[5:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/leverage-view-objects-with-indexes?u=76281980&t=356)** It can pull information from the original tables, or it can pull it from the view.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (2), function (2)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** for instance (2), such as (1), just like (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** schemabinding (1), select (1), sql (1)
> **SQL:** select (1)
> **UI Navigation:** click on (1)
> **Speakers:** - earlier (1)


### 2. Create User-Defined Functions

#### Deterministic vs. nondeterministic functions
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=0)** - [Instructor] SQL Server ships with a ton of built-in functions that are useful for exploring and analyzing your data.
>
> **[0:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=7)** Like in other programming languages, SQL Server's functions usually take a set of input parameters or arguments, and then run those values through their programming logic and return a result.
>
> **[0:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=19)** Some functions don't take any arguments though.
>
> **[0:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=21)** For instance, the get date function or the RAND function don't have any arguments.
>
> **[0:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=26)** You still need to include the open and closed parentheses though when you execute them.
>
> **[0:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=31)** Get date will return the current system date and time, and RAND returns a random number.
>
> **[0:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=37)** In order to see their results, I'm going to put them into a select statement.
>
> **[0:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=40)** So we'll select get date as today and select RAND as random.
>
> **[0:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=45)** This will return two result windows, and I can see that the get date function is returning the current system date and time on my computer.
>
> **[0:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=52)** And the random function is simply returning a random number between zero and one.
>
> **[0:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=58)** Now most functions do require at least one argument.
>
> **[1:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=61)** If I query out the cold room temperatures dash archives table from the warehouses schema, not to select the top 1000 rows.
>
> **[1:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=69)** You'll see that this table includes a column for the temperatures that are recorded.
>
> **[1:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=74)** Now we're just taking a look at the first 1000 rows from this table, but there are actually over a million different records that we could take a look at.
>
> **[1:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=81)** If you just wanted to find the highest, lowest, and the average temperature recorded, you can use the max, min or average functions against the temperature column from the table.
>
> **[1:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=93)** Let's go ahead and run this select statement on line 11 through 15, to select the maximum temperature, minimum temperature and average temperature from warehouse dot cold room temperatures underscore archive.
>
> **[1:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=105)** These aggregate calculations will quickly give us an idea of the scale of the data.
>
> **[1:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=110)** We can see that the highest temperature recorded is five degrees.
>
> **[1:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=113)** The lowest temperature is three degrees with an average of 3.99 degrees.
>
> **[1:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=118)** Other functions will take multiple arguments for processing.
>
> **[2:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=122)** On line number 18, we're going to take a look at the function called format.
>
> **[2:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=127)** The format function can be used to return a date as a text string.
>
> **[2:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=131)** Here, we're going to format the dates that are stored in the invoice date column of the sales dot invoices table.
>
> **[2:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=138)** That provides the first argument for the format function.
>
> **[2:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=142)** This function also requires a second argument, and I can see that here after the comma and the second argument, I'm just specifying a lowercase D.
>
> **[2:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=150)** The lowercase D tells the function that I want the date to be formatted to the standard for my server's region.
>
> **[2:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=157)** For me, that's the month number slash day slash year.
>
> **[2:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=162)** If you're working in a different region, it's possible that you'll see a different result when you execute this function.
>
> **[2:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=168)** Here, I can see the original invoice dates that are stored in the wide world importers database.
>
> **[2:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=173)** And here is the result of the formatted date after it's run through the format function.
>
> **[2:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=179)** Now you can also nest functions inside of other functions.
>
> **[3:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=182)** On line number 24 I'm doing that, again with the format function, but instead of processing data from the database, I'm going to process the current system date and time that's coming out of the get date function.
>
> **[3:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=194)** This time for the second parameter, I'm supplying a pattern to a format that dates with so that everyone that runs this function will see the same result.
>
> **[3:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=202)** Let's go ahead and highlight this and execute it.
>
> **[3:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=204)** And here I can see the result.
>
> **[3:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=205)** It's formatting the date with the name of the month, the two digit day, the four digit year and then we have the time after that.
>
> **[3:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=214)** Now, as I said, there are lots of different built-in functions that are useful for analyzing and manipulating your data, and you owe it to yourself to explore their capabilities.
>
> **[3:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=223)** The documentation at this page is a good place to start to explore the different categories of available functions.
>
> **[3:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=229)** Over here, on the left hand sidebar, we have links for aggregate functions, analytic functions, correlation functions, and all of these down the list.
>
> **[3:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=237)** But these are just the start.
>
> **[3:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=239)** SQL Server allows developers to create their own functions that are custom written to work with their own unique sets of requirements.
>
> **[4:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=246)** Before we take a look at that, though, we need to talk about function determinism.
>
> **[4:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=251)** Deterministic functions always return the same value for the same set of inputs.
>
> **[4:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=256)** Now, given this definition, can you go through the functions that we just looked at and figure out which ones are deterministic and which ones are non-deterministic?
>
> **[4:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=266)** Well, the max, min and average functions will return the same value every time I run this query.
>
> **[4:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=275)** When I execute this select statement again, we get these same values of five, three and 3.99 again.
>
> **[4:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=281)** The get date and RAND functions on the other hand that we have up here at the top, return different values every time I execute the statement.
>
> **[4:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=289)** This time, you can see that the time is a little bit later than it was a moment ago and the random number is completely different.
>
> **[4:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=296)** This is even though I'm executing them in exactly the same way.
>
> **[4:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=299)** So these two are non-deterministic functions.
>
> **[5:03](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=303)** The format function is also non-deterministic.
>
> **[5:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=307)** If you remember, I mentioned that this parameter, the lowercase D in this case returns a value depending on the cultural region of the server, and it can change depending on where the code is executed.
>
> **[5:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=317)** Even if you process these same values specified in the first parameter.
>
> **[5:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=323)** Now, as we saw in the last chapter, non-deterministic functions can prevent us from doing certain things in the database.
>
> **[5:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=330)** You cannot create an index view for example, if the view definition includes a non-deterministic function.
>
> **[5:38](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=338)** Functions that call stored procedures are also non-deterministic, since the stored procedure has the ability to make changes to the data while the function is executing.
>
> **[5:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=349)** So the determinism of your functions is something to keep in mind when adding programmability objects to your database's design.
>
> **[5:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/deterministic-vs-nondeterministic-functions?u=76281980&t=357)** Just to remember that there may be side effects down the line if you incorporate non-deterministic functions into your system.

> [!info]- Semantic Content
>
> **Code Keywords:** function (18), let (2), require (1)
> **Env Vars:** rand (4), sql (3)
> **CLI Commands:** find (1), make (1)
> **Versions:** 3.99 (2)
> **Cross-References:** as we saw (1), in the last (1)
> **UI Navigation:** select the (2)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1), for example (1)

#### Scalar-valued user-defined functions
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=0)** - [Instructor] Developers can write their own functions to extend the capabilities of their SQL Server databases.
>
> **[0:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=6)** These are called User Defined Functions or UDF.
>
> **[0:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=10)** User defined functions can fall into two categories.
>
> **[0:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=13)** Functions that return a single value are called scalar functions, and functions that return rows and columns are called table valued functions.
>
> **[0:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=23)** Let's take a look at writing a custom scalar function that returns the square of an input number.
>
> **[0:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=29)** Make sure that we're using the wide world importers database either by running this use statement or switching it over here using the drop down menu.
>
> **[0:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=36)** And then we'll write a basic function to square a number.
>
> **[0:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=39)** Functions are created with a create function statement.
>
> **[0:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=42)** Next, we need to name the function and place it inside of a schema.
>
> **[0:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=46)** In the wide world importers database, if I expand the tables folder, you'll see that one of our existing schemas is called application.
>
> **[0:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=53)** So I'll just save our function inside of the application schema.
>
> **[0:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=57)** I'm going to call this function square a number.
>
> **[1:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=60)** Next inside of parentheses, we pass in any input parameters that we want the function to process.
>
> **[1:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=66)** We do that by using a SQL Server variable.
>
> **[1:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=69)** And in SQL Server, variables are named with the app symbol.
>
> **[1:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=74)** You can name your input variables, whatever you'd like.
>
> **[1:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=76)** I'll call mine input number.
>
> **[1:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=79)** Next, we need to specify what type of data this input variable will accept.
>
> **[1:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=84)** We do that with the as keyword followed by the data type.
>
> **[1:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=88)** In this case, we're going to pass in an integer value as the input value.
>
> **[1:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=93)** If you wanted to list multiple parameters as inputs, you would just list them out in a comma separated list.
>
> **[1:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=99)** For instance, I could say comma at second variable, and we might say that this is a char datatype.
>
> **[1:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=109)** I only need the one variable for this function.
>
> **[1:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=111)** So let's go ahead and erase all of that.
>
> **[1:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=114)** After the input parameters, you specify what the function is going to return.
>
> **[1:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=117)** And you do that with the keyword returns and the data typed the output will be.
>
> **[2:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=122)** In the case of this function, this is going to return an integer value.
>
> **[2:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=126)** Next, we have the us keyword followed by begin, then we have any programming logic that we want the function to run through, followed by the end keyword and the closing semicolon.
>
> **[2:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=137)** So let's focus on lines ten, 11 and 12.
>
> **[2:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=139)** This is what we actually want the function to do.
>
> **[2:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=142)** Inside of here, you can use any of the programming constructs that SQL Server supports.
>
> **[2:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=147)** One thing that we can do is declare new variables inside of the function.
>
> **[2:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=152)** So I'll declare a new variable called output and it will be an integer datatype.
>
> **[2:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=156)** Then we can set the value of the output variable equal to the input number multiplied by itself.
>
> **[2:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=165)** This input number is whatever we pass into the function when we run it.
>
> **[2:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=170)** So once we've done this multiplication, and we've set the output variable, this output variable value is what the function is going to return.
>
> **[2:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=179)** It's important to note here that on line number 12, we use the return value to specify what value the function is going to output.
>
> **[3:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=187)** But up here on line number seven, we say returns with an S.
>
> **[3:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=192)** It's really easy to get those two mixed up.
>
> **[3:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=195)** So that's our basic function.
>
> **[3:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=196)** Let's go ahead and run line six through 14 and that'll create the function in our server.
>
> **[3:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=202)** If you wanted to find it in the object explorer window, let's go ahead and minimize the tables folder and go into the programmability folder for the wide world importers database.
>
> **[3:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=210)** Then inside of the functions folder, and finally find these scalar valued functions folder.
>
> **[3:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=216)** I'll right click on it and choose refresh and there is the function that we just created.
>
> **[3:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=221)** Now let's go ahead and use it in a couple of different ways.
>
> **[3:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=224)** First, I can use it in a print statement.
>
> **[3:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=227)** This will print a message to the messages window down here at the bottom.
>
> **[3:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=230)** I'll say application.square number.
>
> **[3:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=232)** The name of our function, and I'll use it to process the number five.
>
> **[3:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=235)** When I run line number 17 I get the correct message here that the value of five squared is 25.
>
> **[4:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=245)** We can also output it to a results grid by using a select statement.
>
> **[4:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=248)** So I'll select application.squarenumber, and this time process the number three.
>
> **[4:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=254)** In the result set, I'll name the column result.
>
> **[4:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=259)** When I run line 19, I get the column result, and the correct answer of three squared which is nine.
>
> **[4:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=266)** You can also use the function with data from the database.
>
> **[4:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=268)** I'm going to go back into the tables folder, and I need to find a table that just has some integer numbers that I can pass into it and I've chosen to use the sales.orders table.
>
> **[4:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=279)** Here we have a column called order ID that is just an integer value.
>
> **[4:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=282)** And I'm just going to use these for the numbers that it contains.
>
> **[4:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=286)** So I'll select the top 10 order ID, and I'm just going to call this column a number.
>
> **[4:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=291)** Then we'll have a second column.
>
> **[4:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=293)** And we'll use our application.squared number function applied to the order ID numbers.
>
> **[4:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=299)** We'll call this column the number squared.
>
> **[5:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=302)** Then we have our front clause that says from sales orders to point to this table.
>
> **[5:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=307)** If I run this, we'll see what the result looks like.
>
> **[5:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=310)** Here we have the original numbers that are coming out of the sales.orders table.
>
> **[5:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=314)** And here we have the result of that value squared.
>
> **[5:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=317)** So one squared is one, 16 squared is 256, 18 squared is 324 and so on.
>
> **[5:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=324)** By using the function in this way, we're processing each row separately from every other row.
>
> **[5:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=330)** Now whenever you create a function, it's important to test it out for unexpected bugs.
>
> **[5:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=336)** When we created this function, we said that we're going to be passing in an integer value.
>
> **[5:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=339)** But what happens when we process a number that isn't an integer?
>
> **[5:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=344)** For instance, I'm going to select the function and process the number 5.9.
>
> **[5:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=350)** When I run this, you might be surprised at the result that we get 25.
>
> **[5:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=354)** Because we told SQL server that this function will only accept an integer, it's actually dropping the 0.9 portion of this number and just evaluating the square of five.
>
> **[6:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=365)** So if you wanted to accept decimal values, you might have to go back up to the function and redefine it in order to accept that type of input.
>
> **[6:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=374)** When you're done playing around with your function, you can remove it from the database by running a simple drop function and then the name of the function.
>
> **[6:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=380)** Let's go ahead and run this to remove that function from the system.
>
> **[6:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=384)** So that's how you create a basic function inside of SQL Server.
>
> **[6:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=388)** You say create function, you name the function, you define any input parameters, then you say what it returns.
>
> **[6:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/scalar-valued-user-defined-functions?u=76281980&t=395)** Finally, you have us begin any programming logic and then the key word end.

> [!info]- Semantic Content
>
> **Code Keywords:** function (35), let (7), pass (4), return. (2), this, (2)
> **Env Vars:** sql (6), udf (1)
> **CLI Commands:** find (3), make (1)
> **UI Navigation:** select the (2), click on (1)
> **Versions:** 5.9 (1), 0.9 (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** for instance (2)
> **Speakers:** - [instructor] (1)

#### IF ELSE and CASE statements
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=0)** - When developing scalar valued, user-defined functions, there are two constructs that you'll probably find most helpful in arriving at a desired output.
>
> **[0:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=9)** The first one that I want to take a look at is called an if else statement.
>
> **[0:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=13)** If else could be used to evaluate a condition and return one value, if the condition is true, and a different value if the condition is false.
>
> **[0:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=23)** I'm going to create a function that will evaluate whether a number is even or odd.
>
> **[0:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=28)** The function will be in the application schema, and it'll be called EvenOdd.
>
> **[0:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=33)** It's going to take a single input parameter, and I'm going to use the variable name @InputNumber here, and it'll store an integer data type.
>
> **[0:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=41)** This function will return a char 10 data type, and then we have the as keyword, and begin, and finally the end the create function statement down here on line number 16.
>
> **[0:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=51)** Inside of this function, we're going to create a new variable called output and its data type is just going to match what the function will return, so a char 10 data type.
>
> **[1:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=60)** Next, we have this, if else block.
>
> **[1:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=64)** On line number 11, we start with begin if, and we evaluate a condition.
>
> **[1:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=69)** The condition that I want to evaluate is input number percent two is equal to zero.
>
> **[1:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=75)** The percent sign here is modulo division.
>
> **[1:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=78)** Modulo division only returns the remainder from a standard division operation.
>
> **[1:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=83)** So if the remainder of a number divided by two is zero, then that means that the number is even.
>
> **[1:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=90)** When that's the case, the if statement evaluates to true, and we get this line here, that says set the output variable equal to the text even.
>
> **[1:38](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=98)** When the condition evaluates to false, when the input number modulo two is not equal to zero, then that means that it's an odd number.
>
> **[1:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=105)** This if statement evaluates to false, we come down here to the else line, that says else, set the output variable equal to the text of odd.
>
> **[1:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=114)** So using the if else block, we're able to evaluate a condition, and if it's true, will return one set of text, and if it's false will return an alternate piece of text.
>
> **[2:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=124)** At the end of this, we'll have set our output variable either to the text even or odd, and then it'll return that text at the end of the function.
>
> **[2:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=132)** So let's go ahead and create this function and we can test it out.
>
> **[2:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=136)** I'm going to create a small result set that'll apply this function to the number two and to the number three.
>
> **[2:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=143)** Let's run lines 20 through 22, and the result of our function applied to the number two returns the text even, and the result of our function applied to the number three returns the text odd.
>
> **[2:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=154)** We can also apply this function to the numbers that are stored in our database.
>
> **[2:38](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=158)** Once again, I'm going to return to the sales.orders table, just because it has an easy way to get some integer values out of the database.
>
> **[2:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=165)** This function doesn't have actually anything to do with orders, we're just using it for the numbers that this table contains.
>
> **[2:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=170)** So I'm going to select the order ID value, and I'm going to save this as a column called input number.
>
> **[2:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=177)** The second column in this statement is going to take our function and apply it to that order ID number, and this column will be called even or odd.
>
> **[3:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=185)** Let's go ahead and run lines 24 through 27 to see the results.
>
> **[3:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=189)** And here we have the input numbers and an evaluation of whether the number is odd or even.
>
> **[3:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=195)** This makes it easy to evaluate all of the numbers in that entire table.
>
> **[3:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=199)** So that's the first statement that might be useful in determining an output for your functions.
>
> **[3:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=204)** Let's take a look at another one called a case statement.
>
> **[3:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=208)** For this function, we're going to evaluate whether a day name is a weekend or not.
>
> **[3:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=214)** I'll call the function application.weekend.
>
> **[3:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=217)** This function will take a char 10 data type as its input, and it'll return a char three.
>
> **[3:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=223)** Inside of the function, we're going to do the same thing by declaring an output variable that matches our return here, so it will be a char three as the output variable.
>
> **[3:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=231)** Then we're going to set its value using a case statement that we start on line 37.
>
> **[3:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=239)** Case statements will go through a sequence of evaluations and it'll return the first one that it gets to that is true.
>
> **[4:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=245)** So when the day that we pass in from the top of the function, when that day text is equal to the text Saturday, then the output will get set to the value of yes.
>
> **[4:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=257)** When the day is equal to the text Sunday, then the output will get the text of yes as well.
>
> **[4:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=262)** In all other cases, when the text is not Saturday or Sunday, it'll evaluate this else line, and the output will get set to the value of no.
>
> **[4:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=272)** Let's run lines 31 through 43 to create this function, and then we can test it out.
>
> **[4:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=279)** Once again, we'll just test this function and create a small result set with a couple of different inputs.
>
> **[4:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=284)** So I'll apply the function to the text Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday and see what happens.
>
> **[4:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=291)** When I execute it, I get this table here at the bottom and it tells me that Sunday is yes, it's a weekend, Saturday also says yes, it's a weekend, but Monday through Friday are not weekends.
>
> **[5:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=301)** So those are two different constructs that you can use in developing your functions.
>
> **[5:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/if-else-and-case-statements?u=76281980&t=305)** Use if else to evaluate a condition as true or false and output a value accordingly, and use a case statement when you want to evaluate a number of different conditions and return the first one that it gets to that's true.

> [!info]- Semantic Content
>
> **Code Keywords:** function (22), let (5), type. (2), this, (2), type, (1)
> **Definitions:** means that (2), is called (1), is a  (1)
> **CLI Commands:** find (1)
> **UI Navigation:** select the (1)
> **Speakers:** - when (1)

#### Table-valued user-defined functions
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=0)** - [Instructor] Unlike a scalar valued function that only returns a single value, a table-valued function returns an entire table, or more specifically a result set that's made up of columns and rows.
>
> **[0:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=13)** In this regard , table- valued functions can act just like a view, but here's the difference.
>
> **[0:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=19)** A table -valued function can include input parameters that modify the output.
>
> **[0:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=24)** Let's take a look at some order data from the Wide World Importers database.
>
> **[0:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=28)** I'm going to run the three select statements online six, seven, and eight to view some order details.
>
> **[0:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=35)** This shows me that we have a sales order for a customer ID number 803, and taking a look in the sales that customer's table, I can see who that corresponds to it's this person here, Bala Dickson.
>
> **[0:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=47)** I can also see that the order ID number two, included two line items, and I can see them both right here.
>
> **[0:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=53)** Line ID number three, and line ID number six.
>
> **[0:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=57)** For a joke mug, and a USB flash drive.
>
> **[1:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=61)** So that's the structure of the data that we're going to work with.
>
> **[1:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=64)** Now I'd like to write a table-valued function that makes it easy to retrieve all of the line items, on the most recent order for a specific customer.
>
> **[1:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=73)** The process of writing a table-valued function begins just like writing a view.
>
> **[1:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=78)** First, we need to work out the select statement, that will serve as the model.
>
> **[1:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=83)** Let me go ahead and collapse this results window down, so we can see the full select statement that we're about to work with.
>
> **[1:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=89)** Here I'm going to select a number of different columns from the sales dot orders table, joined to the sales dot order lines table, and also joined to these sales dot customers table.
>
> **[1:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=100)** Now I only want details on the most recent order, for the customer of interest.
>
> **[1:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=106)** One way to get that is using a subquery.
>
> **[1:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=108)** This query here inside of the WHERE clause, finds the most recent order number, for customer ID number one, two, three.
>
> **[1:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=117)** We'll just use this customer to get us started.
>
> **[2:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=120)** So we'll find the order ID that's at the top when all of their orders are sorted descending.
>
> **[2:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=125)** When I execute just this portion of the query, we'll see that that returns order ID number 73041.
>
> **[2:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=133)** This is customer ID number one, two threes, most recent order number.
>
> **[2:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=138)** Now that we know this number, we can take it and use it in the WHERE clause , to find all of the details where the order ID matches the most recent ID.
>
> **[2:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=148)** If I run this entire select statement, starting at line 17, down to 34, you'll see the result here.
>
> **[2:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=154)** This shows me that the most recent order for a customer, one, two, three included three different items.
>
> **[2:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=161)** So the select statement is working for this specific customer.
>
> **[2:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=165)** Now let's turn it into a more flexible table-valued function.
>
> **[2:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=170)** To do that I'm going to uncomment the text that I have online is 14, 15 and 16.
>
> **[3:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=181)** That'll turn this select statement into a create statement for a new function in the Sales Schema called last order.
>
> **[3:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=188)** Just like our scalar valued functions, we can pass in parameters to a table-valued function.
>
> **[3:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=194)** I'm going to pass in a single parameter called customer ID, and it'll be an Integer data type .
>
> **[3:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=200)** For a table-valued function, our returns line just as returns table we don't need to specify a data type here.
>
> **[3:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=206)** It's just returning a table.
>
> **[3:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=208)** Then we say as, and we jumped right to the RETURN clause.
>
> **[3:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=212)** This is because a table-valued function doesn't include any programming logic.
>
> **[3:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=217)** It just jumps right to the return, and then we have the contents of the select statement.
>
> **[3:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=222)** The only other change that we need to do, is to make use of the parameter that we're passing in.
>
> **[3:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=227)** I named it at customer ID, and for this function, we're no longer interested in just customer ID number one, two, three, like we have done here in the WHERE clause.
>
> **[3:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=235)** So I'm going to replace this with a reference to our input parameter.
>
> **[3:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=239)** I'll change it to add customer ID.
>
> **[4:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=244)** That's the only change I need to make to the select statement.
>
> **[4:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=246)** So let's go ahead and now run lines 14 through 34 to create the table valued function.
>
> **[4:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=252)** And now we can test it out.
>
> **[4:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=254)** Let's select everything from our function last order for customer ID number one, two, three again.
>
> **[4:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=260)** This should return these same three lines that we saw previously and there they are.
>
> **[4:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=264)** Now if I want to check a different customer, for instance, customer 828, I can easily find that information.
>
> **[4:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=271)** This customer also placed an order for three items in their most recent order.
>
> **[4:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/table-valued-user-defined-functions?u=76281980&t=276)** So now I have an easy way to review all of the items included on any customers, most recent order, thanks to this table-valued function.

> [!info]- Semantic Content
>
> **Code Keywords:** function (14), let (5), pass (2), type . (1), return, (1)
> **CLI Commands:** find (3), make (2)
> **Env Vars:** where (3), usb (1), return (1)
> **Analogies:** just like (3), for instance (1)
> **SQL:** where (3)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a function
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-function?u=76281980&t=0)** - [Illustrator] We've spent some time exploring functions, and I'd like to challenge you to write one on your own.
>
> **[0:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-function?u=76281980&t=11)** In the Wide World Importers database in the warehouse.coldroomtemperatures table, we have some temperature measurements.
>
> **[0:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-function?u=76281980&t=19)** I'd like you to create a function that evaluates these temperatures and returns a text description.
>
> **[0:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-function?u=76281980&t=25)** If the temperature is less than 3.5 degrees, the function should return the text to cold.
>
> **[0:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-function?u=76281980&t=32)** If the temperature is above four degrees, that it should return the text too hot.
>
> **[0:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-function?u=76281980&t=37)** And if the temperature is within the range of 3.5 to four, then the function should return just right.
>
> **[0:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-function?u=76281980&t=44)** See if you can create the function to evaluate a single number that you pass in as a parameter, then apply that function to analyze the values stored in the cold room temperatures table.
>
> **[0:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-function?u=76281980&t=56)** I estimate that this challenge should take about 10 minutes to complete.
>
> **[0:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-function?u=76281980&t=59)** In the next movie, I'll walk through the process that I would take to arrive at a solution.
>
> **[1:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-function?u=76281980&t=64)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), pass (1)
> **Versions:** 3.5 (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [illustrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create a function
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=0)** - [Instructor] I hope you were able to write out a function that took a look at temperature data inside of the Wide World Importers database.
>
> **[0:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=11)** So let's walk through the solution together.
>
> **[0:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=14)** I've just gone ahead and opened up a new query window and put in some comments here at the top to remind ourselves what it is that we're trying to do here.
>
> **[0:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=21)** We're going to create a function that analyzes temperatures and the conditions that we placed on this is that we wanted to evaluate temperature values and if the temperature was less than 3.5, we want it to say too cold.
>
> **[0:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=34)** If it's above four, we'll say too hot and everything else is just right.
>
> **[0:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=39)** So let's take a look at the data that we want to work with first.
>
> **[0:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=43)** And we were working with the warehouse.ColdRoomTemperatures data.
>
> **[0:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=46)** So let's just see what's in there first.
>
> **[0:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=51)** So I select everything out of the warehouse.ColdRoomTemperatures table, and it looks like there's four rows right now.
>
> **[0:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=57)** And we have some temperature values that span that range of below three, all the way up to over four.
>
> **[1:03](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=63)** So that'll give us a good range so we can see these different values here.
>
> **[1:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=67)** So that's what we're going to work with.
>
> **[1:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=68)** And we can start working with our function.
>
> **[1:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=71)** So I'm going to create a new function, and let's go ahead and place it in the warehouse schema, and we'll call it, how about TempDescription since we're going to be using it to describe our temperature values.
>
> **[1:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=87)** We need to pass in a parameter and I might as well just call this @temperature.
>
> **[1:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=93)** Now, the parameter that we're passing in, I'm naming a temperature and we're going to be evaluating the temperature column.
>
> **[1:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=99)** These two names obviously don't have to match.
>
> **[1:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=101)** It's just going to be convenient for us that they actually do, but we could name this whatever we wanted to, it doesn't have to make reference to this specific column.
>
> **[1:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=109)** So we're going to be passing in a parameter called temperature, and we need to specify what data type it is, so I should make sure that it matches whatever the temperature data type is from this table.
>
> **[2:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=121)** So let's go ahead and expand this columns folder and take a look for that.
>
> **[2:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=125)** So we can see that the temperature data is currently being stored as a decimal, ten two data type so I'll make sure that my function can accept that as the input.
>
> **[2:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=136)** So I'll pass that in as a decimal ten two data type, and that finishes the create function statement.
>
> **[2:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=142)** Next, we need to specify what we're doing with it.
>
> **[2:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=144)** So we're going to return and we want to output text, so we want it to say too cold, too hot or just right.
>
> **[2:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=152)** So I can specify that this is going to return just a character data, and how about just 10 characters.
>
> **[2:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=156)** That should be plenty.
>
> **[2:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=159)** Next we need as, begin.
>
> **[2:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=162)** I like to come down here and just put the end at the very end, just so I don't forget it.
>
> **[2:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=167)** And that finishes the create a function statement.
>
> **[2:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=169)** So now all we need to do is fill in what it is that we're doing.
>
> **[2:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=172)** And incidentally, you'll notice here that I'm starting to get some red squiggly lines here.
>
> **[2:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=177)** And that's just the text helper here inside of Management Studio telling me that I might have incorrect statements.
>
> **[3:03](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=183)** And when I hover my mouse over it, it tells me that the create function must be the only statement in the batch.
>
> **[3:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=189)** And now the reason this is getting confused is because I have a select statement up here at the top.
>
> **[3:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=193)** And so it thinks that I'm trying to run select star from warehouse.ColdRoomTemperatures and then the create function all at once and that's not what I'm trying to do, so I'm going to come here and I'm going to type it in the go keyword.
>
> **[3:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=203)** And then I'll separate it out into two different batches so I don't start getting that red underline under everything.
>
> **[3:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=209)** The other thing here is telling me that this is an error.
>
> **[3:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=212)** It says the last statement included within a function must be a return statement.
>
> **[3:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=216)** We haven't gotten there yet, so this will fix itself as we go on.
>
> **[3:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=219)** So let's jump in here into line number 13 and start filling out with this function is going to do.
>
> **[3:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=225)** So let's start by creating a variable that'll hold the text description.
>
> **[3:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=232)** So we'll declare a new variable, just call it description.
>
> **[3:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=237)** And let's make sure that this matches our return type.
>
> **[4:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=240)** So char10 is what I specified up here on my number 10.
>
> **[4:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=245)** So we'll create a variable there called description, char10, and now we need to set its value.
>
> **[4:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=251)** So we'll set @description and we'll set it equal to, well, what do we want to say?
>
> **[4:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=257)** in this case, we could use an if statement.
>
> **[4:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=259)** We can say, if the temperature is in this range, or if it's in that range, then we can return different things.
>
> **[4:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=264)** It's actually going to be easier to use a case statement in this case.
>
> **[4:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=268)** So we could just run through and evaluate the different temperatures as a case statement.
>
> **[4:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=273)** So I'm going to do that.
>
> **[4:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=273)** So I'll say case when, and then the temperature that we're passing in through the parameter.
>
> **[4:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=279)** So the parameter was @temperature.
>
> **[4:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=282)** So when the temperature is less than 3.5, then we want to set the description's value to too cold.
>
> **[4:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=294)** And let's do another when statement here.
>
> **[4:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=296)** So when the temperature is greater than four, then that's too hot.
>
> **[5:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=307)** And for everything else, it's going to be just right.
>
> **[5:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=315)** And that finishes our case statement, so we need an end here to end the case statement and then finally we need to return the description.
>
> **[5:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=327)** And as soon as I do that, you'll notice that that red squiggly underline up here disappears because we now have our return line.
>
> **[5:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=333)** And let's see, let's fix this indentation a little bit, so that works out a little better.
>
> **[5:38](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=338)** So we begin, we declare our variable.
>
> **[5:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=340)** Then we set its contents here.
>
> **[5:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=342)** So we set the description equal to too cold, too hot or just right, and then we return whatever the variable is currently holding at the very end of the function.
>
> **[5:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=352)** And that finishes the function.
>
> **[5:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=354)** Let's go ahead and highlight all of this and execute it.
>
> **[5:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=357)** All right, we've got our function created and now we can test it out.
>
> **[6:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=362)** Just let me scroll back up a little bit so you can see the whole thing at once.
>
> **[6:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=366)** All right, so let's test it out.
>
> **[6:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=369)** Let's just work with an individual value first.
>
> **[6:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=371)** So let's run our function and we're just going to pass it in the temperature of five.
>
> **[6:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=378)** So that should be too hot. Let's execute that.
>
> **[6:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=380)** And yes, it says too hot.
>
> **[6:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=381)** So let's see with three, execute that.
>
> **[6:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=385)** It says too cold, and a temperature of four.
>
> **[6:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=390)** This is greater than four, so it doesn't include four.
>
> **[6:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=394)** So a temperature of exactly four is just right.
>
> **[6:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=397)** It looks like our function is working.
>
> **[6:38](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=398)** Let's go ahead and use it to help analyze some information that's stored in the cold room temperatures table over here.
>
> **[6:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=405)** So let's select the, let's see, we've got a couple of columns here.
>
> **[6:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=409)** Let's select the cold room temperature ID, the cold room sensor number, the temperature, and our function.
>
> **[7:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=427)** Applied to, and I don't want a static value here.
>
> **[7:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=429)** I want it to evaluate our temperature data.
>
> **[7:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=432)** So this is going to pull the temperature column, the values that are stored in the temperature column, and it's going to put them into this function to evaluate them as too hot, too cold, or just right.
>
> **[7:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=443)** And let's give us an alias here.
>
> **[7:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=447)** It has temperature description.
>
> **[7:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=450)** So that finishes all the columns that I want.
>
> **[7:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=451)** And let's specify our from class.
>
> **[7:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=453)** So from warehouse.ColdRoomTemperatures and let's run it.
>
> **[7:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=461)** So there we go.
>
> **[7:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=462)** As our cold room temperature ID, sensor number, the current temperature, and whether it's just right, too hot, too cold.
>
> **[7:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=468)** And this one was also just right.
>
> **[7:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=469)** So that's one way that we can use our function to help us analyze this data and make it easy to see the range of different temperatures that are currently set in the cold room.
>
> **[7:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=479)** Another way that we could use this though is in a where clause.
>
> **[8:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=482)** So let's try that out.
>
> **[8:03](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=483)** So let's select another set of columns here.
>
> **[8:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=486)** In fact, let's just copy what I've got up here and paste that in.
>
> **[8:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=491)** So select same columns.
>
> **[8:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=493)** I'm not going to select this column here, though.
>
> **[8:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=494)** Let's get that out of there.
>
> **[8:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=497)** So we'll just select the cold room temperature ID, cold room sensor number and the temperature from the warehouse.ColdRoomTemperatures table, but this time we'll include a where clause and I can use the function in the where clause.
>
> **[8:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=510)** So we'll say where the warehouse.TempDescription applied to our temperature data is equal to too hot.
>
> **[8:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=525)** So we're going to filter out to just the rows where the temperature is too hot.
>
> **[8:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=529)** I don't know exactly what the temperature is, I just know that it's too hot.
>
> **[8:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=532)** Let's see it, and there is the one row where the temperature is too hot.
>
> **[8:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=536)** And if I want to find all the rows where the temperature is just right, again, don't have to know exactly what the temperature is.
>
> **[9:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=542)** I just want to make sure that it's in the range.
>
> **[9:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=544)** And sensors number one and four are currently just right.
>
> **[9:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=548)** So that's a couple of different ways that we can use a function or a scalar function written against our temperature data.
>
> **[9:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=555)** I'm going to go ahead and save this whole text in the exercise files as 02_06_challengecomplete.SQL.
>
> **[9:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-function?u=76281980&t=564)** And you can open up that file if you want to compare my answer against yours.

> [!info]- Semantic Content
>
> **Code Keywords:** let (30), function (22), pass (3), match. (1), type, (1)
> **CLI Commands:** make (6), find (1)
> **UI Navigation:** select the (3)
> **Versions:** 3.5 (2)
> **File Paths:** 02_06_challengecomplete.sql (1)
> **Env Vars:** sql (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)


### 3. Work with Stored Procedures

#### Write and execute a stored procedure
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=0)** - [Instructor] After views and user defined functions the next step up in programmability object capabilities is a stored procedure.
>
> **[0:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=9)** Stored procedures can perform many of the same tasks as views and functions.
>
> **[0:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=14)** They can perform select queries against the database, just like a view.
>
> **[0:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=18)** They can also take input parameters like a function.
>
> **[0:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=21)** What sets them apart is that store procedures can perform multiple tasks in a single routine and they can modify the data that's stored in your database.
>
> **[0:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=30)** To create and manage stored procedures, you'll use the same create, alter or drop syntax that we use for other objects inside of the database.
>
> **[0:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=40)** Just like a function and a view, you'll name the procedure using a two part naming convention that'll place it in a specific schema of the database.
>
> **[0:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=48)** Here I'm creating a stored procedure inside of the application schema of the wide world importers database.
>
> **[0:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=55)** I'm going to call this procedure uspViewEmployees.
>
> **[1:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=61)** Now we haven't talked about naming conventions in this course yet, but it's a good concept to always keep in mind when developing a database.
>
> **[1:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=68)** So let's take a quick aside and think for a moment about how we name our objects.
>
> **[1:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=74)** As you develop your database, it's likely that you'll ultimately have lots of different programmability objects that all perform different tasks, because they all get saved into database schemas it can start to get confusing when you see them in code.
>
> **[1:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=88)** For example, if you see Warehouse.InventoryLevels, you're not able to instantly recognize whether this is a table, a view, a function or a stored procedure.
>
> **[1:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=99)** So a consistent naming convention will help developers understand what type of objects are being referenced when they see them in code.
>
> **[1:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=107)** Most often this takes the form of a consistently applied prefix.
>
> **[1:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=111)** Now your organization might already have a naming convention in place if you're working in an existing database.
>
> **[1:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=117)** If that's the case then you should stick with whatever pattern has already been adopted.
>
> **[2:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=122)** If you're working in your own projects, then here are some common prefixes that you can use.
>
> **[2:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=128)** For stored procedures, it's common to use the usp prefix before the name or usp underscore.
>
> **[2:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=136)** This abbreviation stands for user stored procedure.
>
> **[2:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=139)** The prefix sp underscore is used by SQL servers own built-in stored procedures and should not be used for any procedures that you create yourself.
>
> **[2:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=149)** For functions, it's common to see the ufn or fn underscore prefix before the function name and for views consider prefixing the name with a single lowercase v or vw underscore.
>
> **[2:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=164)** When you apply naming conventions consistently across your database's design, it makes it much easier to quickly understand what's going on.
>
> **[2:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=173)** With that aside out of the way, we can get back to writing our stored procedure.
>
> **[2:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=177)** We have the create or alter command followed by the procedure's name here on line number six.
>
> **[3:03](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=183)** Next we have the, as keyword, then we'll have any actions that you want the procedure to perform.
>
> **[3:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=189)** This procedure is performing a select query by pulling a couple of columns from the Application.People table.
>
> **[3:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=196)** We are then filtering the results to just the rows that correspond to employees.
>
> **[3:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=201)** In this specific example, the stored procedure is acting much like a view.
>
> **[3:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=205)** Let's go ahead and highlight line six through 11 and we'll execute it to create the stored procedure on our system.
>
> **[3:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=212)** Now to run the procedure, the syntax is a little bit different than using a view or a function.
>
> **[3:38](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=218)** We can see the syntax that we'll use on line 14.
>
> **[3:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=221)** Stored procedures don't get incorporated into a select statement.
>
> **[3:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=225)** They are their own standalone thing.
>
> **[3:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=228)** We use the execute command or you can abbreviate it to just EXEC and drop the Ute part of it and we'll execute and then we just name the stored procedure.
>
> **[3:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=237)** So Application.uspViewEmployees.
>
> **[4:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=241)** Let's go ahead and highlight line 14 and execute it and there is the result.
>
> **[4:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=246)** Stored procedures give us another opportunity to place an abstraction layer between the end user and the database's actual structure.
>
> **[4:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=254)** This can help secure the database and make maintenance and changes easier to accommodate.
>
> **[4:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=259)** If you change a table or a column name, you can update the procedure to match the new names and end users won't need to update their applications to interface with the updated design.
>
> **[4:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=271)** In the case of our procedure here, if you want to use the procedure to mask column names then it's just a matter of adding column aliases to our select statement.
>
> **[4:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=280)** I've got an example of that starting on line number 18.
>
> **[4:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=284)** So here we're going to alter the same procedure name but I'm going to start adding in column aliases.
>
> **[4:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=290)** So the PersonID column will get renamed to ID Number.
>
> **[4:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=294)** The FullName column will get renamed to just Name, the IsEmployee column can be handled a little bit differently.
>
> **[5:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=301)** We know because of the where clause that the IsEmployee column will always contain a one for every row that this stored procedure returns.
>
> **[5:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=310)** So we can actually just hard code that into the procedure and clarify what that means.
>
> **[5:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=315)** I'll just add the text employee in a new column that I'll call status.
>
> **[5:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=320)** Then for the IsSalesperson column, we can add a case statement to again clarify what the zero or the one numeric code actually means.
>
> **[5:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=330)** So here I'll say when the case is, IsSalesperson equal to one then we'll put it in the text salesperson and when salesperson is equal to zero, then we'll put in the text, not salesperson.
>
> **[5:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=342)** We'll call this new column, position.
>
> **[5:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=345)** We'll still select all of these rows from the Application.People table and we'll still apply the same where clause.
>
> **[5:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=349)** So where IsEmployee is equal to one.
>
> **[5:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=352)** Let's highlight lines 18 through 28 and execute it to alter the procedures configuration and now we can run it again just by executing these same line up here on number 14.
>
> **[6:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=362)** So I'll say EXEC Application.uspViewEmployees and now here in the results, I can see the updated look.
>
> **[6:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=371)** So now that the store procedure has been altered, running it using the exact same command as before gives us an improved result.
>
> **[6:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=378)** So if this execute statement was incorporated into an end user application, you can see how you can easily change the output that the application receives without having to modify the application itself.
>
> **[6:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=391)** So that's an example of how a stored procedure can mimic the output of a view.
>
> **[6:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=396)** Here's something that a view can't do.
>
> **[6:38](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=398)** A view cannot perform multiple actions.
>
> **[6:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=401)** In the next example, starting on line number 31, we're going to perform three select statements inside of a single procedure.
>
> **[6:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=409)** We'll just pull the first row from each of these tables, Applications.People, Sales.Customers and Warehouse.Colors.
>
> **[6:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=416)** We'll create the procedure and I'll put it in the application schema and I'll call it uspViewData.
>
> **[7:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=422)** Let's create the procedure and then I'll execute Application.uspViewData and here we get three different results sets.
>
> **[7:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=432)** This returns the three rows that I asked for in a single command and this illustrates one of the performance benefits of using stored procedures.
>
> **[7:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=441)** I only had to send one command and the server was able to perform three different actions.
>
> **[7:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=446)** If I were doing this with views or a standard select query, I would have to send three separate commands over the network to the server to get the same result.
>
> **[7:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/write-and-execute-a-stored-procedure?u=76281980&t=456)** For complex procedures that may contain hundreds of actions, this could dramatically improve the performance of the database.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (5), fn (1), interface (1)
> **Code Identifiers:** uspviewemployees (3), uspviewdata (2)
> **Definitions:** is a  (3), stands for (1)
> **Env Vars:** exec (2), sql (1)
> **Analogies:** just like (2), for example (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Stored procedure input parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=0)** - [Instructor] Like functions, stored procedures can include input parameters to alter the actions that these stored procedure performs.
>
> **[0:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=8)** Unlike functions and views though, stored procedures can write data to our existing tables, rather than just returning existing values.
>
> **[0:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=16)** Let's take a look at both capabilities by exploring the data and adding rows to the Wideworldimporters warehouse.colors table.
>
> **[0:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=25)** Let's first take a look at its current content.
>
> **[0:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=27)** By selecting everything from Warehouse.Colors, and I'm going to order by the color ID, descending.
>
> **[0:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=34)** This table has five columns.
>
> **[0:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=36)** But to add a new row, we only need to supply values for the first three.
>
> **[0:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=42)** The valid from and valid to columns, are automatically populated by SQL server since this is a system version or a temporal table that keeps a record for when rows are added and modified.
>
> **[0:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=55)** So let's focus on the first three columns.
>
> **[0:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=58)** The color ID is the primary key for the table.
>
> **[1:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=61)** Integer values here are all one larger than the previous row.
>
> **[1:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=66)** Notice that the highest value right now is 36.
>
> **[1:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=69)** This will be important in a moment.
>
> **[1:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=71)** The color name column has a unique index on it so that names can't be repeated.
>
> **[1:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=76)** And the last edited by column links to the application.people table and is meant to keep track of who added each color.
>
> **[1:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=85)** Now it looks like all of these rows were input by the same person, the person with the ID number one.
>
> **[1:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=90)** So we're going to use this number for all of the rows that we'll add in this example.
>
> **[1:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=95)** Now, normally you need to perform an insert command and name each of the columns in order, in order to add a row to the table.
>
> **[1:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=102)** If you're trying to keep end users from interacting directly with the databases structure, then that becomes a problem.
>
> **[1:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=108)** Since they need to know the column names in order to successfully perform the insert.
>
> **[1:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=113)** By wrapping the commands inside a base store procedure, we can make the process easier and more secure.
>
> **[2:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=120)** So let's create a stored procedure that'll allow an end user to input a new row into this table.
>
> **[2:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=125)** I start that on line number 11.
>
> **[2:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=128)** We're going to create or alter a procedure in the warehouse schema called uspInsertColor.
>
> **[2:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=134)** Now just like functions, we can add input parameters that the end user will use to pass values to the store procedure.
>
> **[2:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=141)** Inside the parenthesis, you'll name each variable and give it a data type.
>
> **[2:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=146)** Here, I'm going to add an input parameter called @Color and it'll store an end var char 100 value.
>
> **[2:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=153)** Then we have the, AS keyword , followed by the things that we want the procedure to do.
>
> **[2:38](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=158)** To describe what's happening here, let's look at the routine backwards.
>
> **[2:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=162)** Ultimately, we want to insert a row into the colors table.
>
> **[2:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=165)** Then we can see that on lines 15 and 16.
>
> **[2:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=169)** We'll need to supply the three values for color ID, colored name, and last edited by.
>
> **[2:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=176)** The last edited by value is easy.
>
> **[2:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=178)** We're just going to use the number one for every row that we insert.
>
> **[3:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=182)** So this one is done already.
>
> **[3:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=185)** The color name will come directly from the parameter that the user supplies, when they run the procedure, we named it @Color up here.
>
> **[3:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=193)** So we'll just place that down here into the value statement.
>
> **[3:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=197)** That just leaves the color ID value to work with.
>
> **[3:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=200)** This one's a little bit trickier.
>
> **[3:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=201)** We need to get the color ID to be one larger than the existing highest number in the table.
>
> **[3:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=207)** To get this all, first declare a new variable called @Color ID on this line, by number 13, it'll store an integer value.
>
> **[3:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=217)** Then on line 14, we'll set its value.
>
> **[3:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=220)** We'll do that by selecting the current highest color ID from Warehouse.Colors.
>
> **[3:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=224)** To do that, we'll use the max function applied to the color ID column, then whatever number, this returns, we're going to add one, to it.
>
> **[3:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=234)** Finally, we'll take this result and we'll store it in the @Color ID variable, and finally use it down here in the values clause.
>
> **[4:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=242)** So that finishes the steps to insert a new row.
>
> **[4:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=245)** We can have the store procedure go one step further and show us the result of our insert as a second operation in the same procedure.
>
> **[4:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=253)** So after the insert command I have a select command where we're going to select everything or all of the columns from Warehouse.Colors, where the color ID is equal to the color ID that we just inserted.
>
> **[4:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=265)** Also notice that since our procedure is performing two different and complete actions.
>
> **[4:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=269)** Make sure that you include the semi-colon at the end of each one.
>
> **[4:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=273)** So here we have a semi-colon, that completes the select clause.
>
> **[4:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=276)** And here we have a semi-colon, that completes the insert statement.
>
> **[4:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=281)** So let's go ahead and create the procedure.
>
> **[4:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=283)** By highlighting lines 11 down to 21 and executing them.
>
> **[4:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=286)** That will create the procedure and now we can test it out.
>
> **[4:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=290)** We'll execute the store procedure,Warehouse.uspInsertColor, and then we need to pass in the parameter.
>
> **[4:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=297)** In order to pass a parameter to a store procedure, you can either specifically identify the parameter's name.
>
> **[5:03](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=303)** For instance, I have @Color equals periwinkle blue here, or, you can remove the variables name and supply the values in the same order that they were declared, when you first created the store procedure up here.
>
> **[5:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=316)** Now we only have one variable in our store procedure called @Color.
>
> **[5:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=319)** So I don't need to actually name it down here.
>
> **[5:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=321)** I can just say, execute Warehouse.uspInsertColor periwinkle blue SQL server will understand that this is the variable color.
>
> **[5:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=331)** So let's go ahead and execute line number 24.
>
> **[5:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=336)** That performs the insert, and then also selects the data back out of the table.
>
> **[5:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=339)** And I can see that we get the color ID 37 and the color name periwinkle blue has been added to the table.
>
> **[5:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=346)** Now here is what's important about executing this stored procedure.
>
> **[5:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=350)** Let's assume that we're performing this task, as an end user.
>
> **[5:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=353)** We don't need to know anything about the database in order to successfully add the color.
>
> **[5:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=358)** We don't need to know the table's name.
>
> **[6:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=360)** We don't need to know the column name, where the value is ultimately getting stored.
>
> **[6:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=364)** We don't need to know anything about the primary key column for the table.
>
> **[6:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=368)** We don't need to know any other columns exist in the table, and we don't need to know anything about the structure of this database, and yet we're still able to add the new row.
>
> **[6:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=377)** All we need to do is execute these store procedure and pass it the color name, that we want added.
>
> **[6:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=383)** If we put our developer hat back on again, we can provide another store procedure that removes the last row from the table.
>
> **[6:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=390)** I've got that illustrated on line number 31, this is a pretty straightforward row delete statement starting on 33 and 34.
>
> **[6:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=399)** But if there were other changes that need to be made in your database to accommodate the rows deletion, you could code all of that in the store procedure.
>
> **[6:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=407)** So perhaps the deletion of the row causes other information in other tables to get updated, or the action needs to be logged, in an audit table or, the deletion triggers the website storefront, to refresh.
>
> **[7:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=420)** Whatever complex actions that need to be performed, could be included in these store procedure.
>
> **[7:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=424)** And none of that needs to be revealed to the end user.
>
> **[7:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=429)** If I create this procedure, all I need to do is execute Warehouse.uspRemoveLastColor and the rows are moved from the table.
>
> **[7:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=438)** To verify, it I can select everything from Warehouse.Colors and I'll see them back to the highest value of 36.
>
> **[7:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-input-parameters?u=76281980&t=445)** So all the end user needs to do is execute the warehouse.uspRemoveLastColor stored procedure, and the stored procedure will handle all of the complex actions that need to be performed in order to accommodate that task.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), pass (4), type. (1), var (1), function (1)
> **Code Identifiers:** uspinsertcolor (3), uspremovelastcolor (2)
> **CLI Commands:** make (2)
> **Env Vars:** sql (2)
> **Definitions:** is a  (2)
> **Analogies:** just like (1), for instance (1)
> **Speakers:** - [instructor] (1)

#### Stored procedure output parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=0)** - [Instructor] Sequel servers stored procedures can pass information back through the use of output parameters.
>
> **[0:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=6)** This is mostly used when a front end application is used to interface with the database server.
>
> **[0:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=11)** And it allows the stored procedure to communicate success messages or other important status updates to the application.
>
> **[0:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=19)** Since we're not in an environment where we're actually writing a custom application for the database, output parameters are a little bit tricky to demonstrate, but we can write a small example to show how they work.
>
> **[0:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=32)** When you create a stored procedure, that includes an output parameter, you name it just like you would with input parameters.
>
> **[0:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=39)** I'm going to create a sample procedure called USP simple procedure, and it's going to have an output parameter called output message.
>
> **[0:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=48)** We still need to give it a data type.
>
> **[0:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=50)** So I'll give this one the nvarchar200 data type, and then we need to make sure that we include the keyword output at the end.
>
> **[0:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=57)** This tells sequel server that the value of this variable will get sent back to the calling application at the end of the routine.
>
> **[1:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=65)** Inside the body of the stored procedure, we execute whatever commands that you want.
>
> **[1:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=70)** Somewhere along the way though, you need to give the output variable a value.
>
> **[1:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=74)** And I do that here on line number eight.
>
> **[1:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=77)** I'll set the value of our variable to this text string that says this message was returned by the stored procedure on, and then it depends today's current date.
>
> **[1:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=87)** And that's all that needs to happen inside of the stored procedure.
>
> **[1:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=90)** So let's go ahead and finalize the procedure on the server by running lines six through 10.
>
> **[1:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=95)** Next, we need to call the procedure.
>
> **[1:38](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=98)** In order to do this and be able to receive the output variables contents, we need to have a place to put it.
>
> **[1:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=104)** The calling application needs to have its own variable created in order to catch the value, when it comes back from the stored procedure.
>
> **[1:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=112)** I'll declare a value here in management studio called my local message.
>
> **[1:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=117)** We'll set its data type to the same as the output variable, so nvarchar200.
>
> **[2:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=122)** Then as part of the same batch of commands, I'll execute the stored procedure.
>
> **[2:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=127)** We'll tell it to send whatever the output variable contains to our local variable.
>
> **[2:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=132)** That happens down here on line 14.
>
> **[2:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=135)** The output message coming out of the stored procedure will get sent into the my local message variable.
>
> **[2:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=142)** Finally, we could do something with that value, now that it's been sent back to us.
>
> **[2:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=146)** For instance, we can print it to the messages window like I have here on line 15.
>
> **[2:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=151)** Now, if you run all three of these commands at once, you'll see the message that gets sent back from the stored procedure and we get it right here.
>
> **[2:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=157)** This message was returned by the stored procedure on 7/26/2020.
>
> **[2:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=162)** It's important to note that the local variable only exists while the batch of commands is running.
>
> **[2:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=168)** If I try and print just the message again, by running just line 15, you're going to get an error.
>
> **[2:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=174)** Sequel server has no idea what the my local message variable is anymore.
>
> **[2:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=178)** It no longer exists.
>
> **[3:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=180)** So all three commands need to be executed at the same time.
>
> **[3:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=184)** The local variable needs to be created, the stored procedure needs to be executed to populate the local variable, and then you need to do something with that value.
>
> **[3:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=194)** All three of these need to be run at the same time.
>
> **[3:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=197)** And that's how the output variables work.
>
> **[3:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=200)** Like I said earlier, this technique is most useful for front end application development.
>
> **[3:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=204)** So that status and error messages can be passed back from the database server to the calling application.
>
> **[3:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/stored-procedure-output-parameters?u=76281980&t=211)** It's then up to the programming in the calling application to actually do something with the value that's returned.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (1), interface (1), type. (1), type, (1), let (1)
> **Analogies:** just like (1), for instance (1)
> **CLI Commands:** make (1)
> **Env Vars:** usp (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Create a database trigger
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=0)** - [Narrator] Database triggers are a special kind of stored procedure.
>
> **[0:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=4)** Instead of running when they're manually executed, triggers automatically fire when a specific activity, occurs on the server.
>
> **[0:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=12)** You can attach triggers to data manipulation events, such as insert, update, and delete commands, or you can have them fire when the database processes a data definition command, such as create or alter table.
>
> **[0:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=26)** Let's see how triggers work by setting up a system that will automatically log changes to the colors table, in a new audit table.
>
> **[0:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=35)** First, I'm going to create a table for the audit, I'll place it inside of the warehouse schema, and I'll call the table color audit, it's going to have three columns, the first column, Audit ID will be an integer value, it'll be the identity column, and it will be the primary key for the table, then we'll add a column for the color name, as well as a date time column called time added.
>
> **[0:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=59)** So let's go ahead and create that color audit table, and now we can turn our attention to creating a trigger.
>
> **[1:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=65)** Triggers get attached to specific events, on specific objects.
>
> **[1:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=70)** In this case, we're going to create a trigger in the warehouse schema called color change log.
>
> **[1:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=75)** It's attached to the warehouse dot colors table and we'll fire anytime that table receives an insert command, then after the as keyword, we outline what we want the trigger to do.
>
> **[1:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=88)** Whenever an insert happens in the colors table, the trigger will insert another row into the new audit table that we just created.
>
> **[1:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=97)** It's going to add a new row there with the color name, that's being processed by the insert command, as well as the current system date.
>
> **[1:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=105)** Let's create the trigger by running lines 14 through 23, and now it's ready and waiting just to be activated.
>
> **[1:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=113)** You can't activate a trigger manually though, it's just a stored procedure that fires automatically when certain actions or conditions are met, so let's go ahead and set it off.
>
> **[2:03](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=123)** Earlier in the chapter we created a stored procedure, that accepts an input parameter, to add new colors to the color table.
>
> **[2:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=130)** I have it listed out here, starting on line number 31.
>
> **[2:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=134)** If you've been following along though, your wide world importers database should already have this procedure in place.
>
> **[2:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=139)** If not, just go ahead and run lines 31 to 41 to create it, and then we'll move down to line number 44.
>
> **[2:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=147)** We'll execute the store procedure in order to add a new color into the colors table, we're going to pass it, the parameter banana yellow, I'll execute the statement, and that adds the new row to the colors table.
>
> **[2:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=160)** But behind the scenes, the trigger also fired, and it also wrote a new line into the audit table.
>
> **[2:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=167)** Notice that there's no indication to the end user that anything else happened.
>
> **[2:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=171)** That's one of the neat things about triggers, is that they're fairly invisible and non-intrusive.
>
> **[2:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=177)** But if we review the contents of the color auditable, by running a select statement against it, we'll see that a row was added there that logged, and timestamped our activity.
>
> **[3:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=188)** Now I think triggers are pretty cool and they make it possible to automate a whole range, of actions in the database.
>
> **[3:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=194)** Once they're set up the server can automatically perform actions for you without any supervision, or manual intervention.
>
> **[3:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=202)** If you want to find out more about how to integrate triggers into your database, then you might be happy to hear that, I recently created an entire course on just this topic.
>
> **[3:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-database-trigger?u=76281980&t=211)** Just search the Linkedin learning library, for SQL server triggers to find it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), delete (1), case, (1), pass (1)
> **CLI Commands:** find (2), make (1)
> **Analogies:** such as (2)
> **Env Vars:** sql (1)
> **Cross-References:** earlier in (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### Challenge: Use function in a stored procedure
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-use-function-in-a-stored-procedure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-use-function-in-a-stored-procedure?u=76281980&t=0)** - [Illustrator] For the second challenge of this course, I'd like you to try your hand at writing and executing a stored procedure.
>
> **[0:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-use-function-in-a-stored-procedure?u=76281980&t=12)** In the chapter three folder of the exercise files is a file called 03_06_Challenge-start.sql.
>
> **[0:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-use-function-in-a-stored-procedure?u=76281980&t=20)** This file will get you started and it will contain a command to create a new table called Sales.customerAccountAudit.
>
> **[0:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-use-function-in-a-stored-procedure?u=76281980&t=28)** Once you've created that table, I'd like you to write a stored procedure with an input parameter that allows end users to search for customer records.
>
> **[0:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-use-function-in-a-stored-procedure?u=76281980&t=37)** The stored procedure should do three things.
>
> **[0:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-use-function-in-a-stored-procedure?u=76281980&t=40)** First, it'll return some information from these sales.customers table for a customer identified by the input parameter.
>
> **[0:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-use-function-in-a-stored-procedure?u=76281980&t=48)** Second, return some information from the sales.orders table for the same customer.
>
> **[0:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-use-function-in-a-stored-procedure?u=76281980&t=54)** Finally, write a new row to the customer account audit table that we just created that logs the activity.
>
> **[1:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-use-function-in-a-stored-procedure?u=76281980&t=61)** The end user should not be alerted that the search activity that they just performed has been logged.
>
> **[1:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-use-function-in-a-stored-procedure?u=76281980&t=68)** For this challenge, these specific columns that you retrieved from sales.customers and sales.orders isn't really important.
>
> **[1:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-use-function-in-a-stored-procedure?u=76281980&t=74)** Just pick a few columns that you think provide some good descriptive details.
>
> **[1:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-use-function-in-a-stored-procedure?u=76281980&t=79)** This challenge should take about 10 minutes to complete, and I'll share my solution in the next movie.
>
> **[1:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-use-function-in-a-stored-procedure?u=76281980&t=84)** Good luck.

> [!info]- Semantic Content
>
> **File Paths:** 03_06_challenge-start.sql (1)
> **Code Keywords:** finally, (1)
> **Code Identifiers:** customeraccountaudit (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [illustrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Use function in a stored procedure
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=0)** - [Instructor] So I hope you are able to create a stored procedure that allows end users to easily review customer account information.
>
> **[0:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=12)** I currently have the starting file up here on the screen.
>
> **[0:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=15)** So the first thing we need to do is just make sure that we're using the Widewer Importers database, which I already am, and then I'm going to create this table here that'll get me started and if I wanted to, I can review some existing information from sales.customers and sales.order so I'll just go ahead and run these two lines.
>
> **[0:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=31)** So I could have both of these tables on the screen so they're easy to reference.
>
> **[0:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=35)** So let's scroll down here on the script and here is a reminder of what it is that we're trying to accomplish.
>
> **[0:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=41)** So we need to write a store procedure, that's going to view some information from sales.customers, view information from sales.orders, which is the bottom table here, and then write a row to the new table that we just created.
>
> **[0:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=54)** So let's get started.
>
> **[0:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=55)** I'm going to create a new procedure, and I like to use the create or alter statement just in case if I need to go back and make changes to it it's already an alter statement I don't need to make any changes up here to the top.
>
> **[1:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=70)** So we'll create or alter a procedure.
>
> **[1:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=74)** It'll will be helpful if I spell it correctly and everything else is in the sales schema.
>
> **[1:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=79)** So I'm going to put this in the sales schema as well.
>
> **[1:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=82)** Let's call it sales info.
>
> **[1:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=85)** You can obviously choose whichever name you'd like, and we're going to pass in an input parameter that allows the end user to select the customer that they're interested in seeing and if I review the two tables, we've got the customer ID column here that we can filter by as well as the customer ID column in the sales.orders table that we could filter on.
>
> **[1:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=104)** So let's create a new variable, just call it customer @customer as and these are integer values that I need to use to filter on so create that as an integer.
>
> **[1:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=115)** So as, and what are we going to do?
>
> **[1:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=118)** So the first thing we need to do is view information from sales.customer so that tells me we're going to do a select statement I wasn't specific about what columns I was interested in, so let's just go ahead and pick a couple of them that gives us some information that's interesting to look at so we'll select the customer name and let's see, we should probably add the customer ID in here just to have that as well.
>
> **[2:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=145)** So customer ID, customer name, and let's see the bill, to customers, all these are ID numbers that aren't that interesting.
>
> **[2:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=153)** Let's see, Is there anything else in here?
>
> **[2:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=154)** How about a phone number?
>
> **[2:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=155)** We can pull out the phone number.
>
> **[2:38](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=158)** We'll add that one in as well.
>
> **[2:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=161)** So phone number from, and that's sales.customers, but I only want the customer from the parameter that the end user passes in.
>
> **[2:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=173)** So it tells me I need a where clause here.
>
> **[2:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=176)** So where customer ID is equal to @customer and I misspelled number there phone number, So that looks good and it should be able to, if I want to just test it, I could highlight just these two rows and that's getting good information back.
>
> **[3:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=193)** So the where clause will just filter this down.
>
> **[3:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=195)** So let me go ahead and run select store from sales.orders again, so I can have that on the screen.
>
> **[3:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=200)** So this select statement will satisfy the first step to view information from sales.customers, so now we can turn our attention to the second step, which is view information from sales.orders.
>
> **[3:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=213)** So let's see which information do we want from this table?
>
> **[3:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=216)** How about the order ID, the customer ID, and let's see what else is in here?
>
> **[3:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=225)** How about the order dates?
>
> **[3:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=228)** Is there anything else interesting in here?
>
> **[3:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=229)** A bunch of nulls that'll do it.
>
> **[3:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=233)** Okay.
>
> **[3:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=233)** So we'll just add those three columns from sales.orders, and again, we need to filter this down so where customer ID is equal to our parameter.
>
> **[4:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=248)** And that should finish.
>
> **[4:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=249)** Let me just run this just to be sure.
>
> **[4:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=252)** There's a couple of columns from the sales.orders table and that finishes part two.
>
> **[4:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=257)** So we're done with that.
>
> **[4:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=258)** And the last thing we need to do is write a row to sales.customer account audit, and that's going to log the activity.
>
> **[4:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=266)** So that tells me we need an insert 'cause we're going to insert a new row, so our third command, if it makes a little more sense, I can actually break this out.
>
> **[4:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=274)** So we can say select from, move this over, maybe that makes it a little bit easier to read.
>
> **[4:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=280)** So we can see that we've got three distinct actions that this store procedure is doing.
>
> **[4:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=285)** So insert into the sales.customeraccountaudittable and let's go review that table real quick.
>
> **[4:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=297)** Let me get rid of this.
>
> **[5:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=301)** If we come up, the audit ID is an identity column, so this is going to be autopopulated by SQL server.
>
> **[5:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=307)** And this is going to fill in a serial number for us so we don't need to fill that in.
>
> **[5:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=310)** I do need to give it a customer ID and the review date, which will just be a date stamp.
>
> **[5:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=315)** So the columns I need to fill in for my insert statement are going to be customer ID and the review date and then we're going to insert the values.
>
> **[5:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=329)** The customer ID is just going to be coming from the parameter again, so @customer and the review date will be the current system date and time, which we get with the get date function.
>
> **[5:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=342)** So finish that and that finishes the insert into statement, and with that, that is the third component of the challenge so that finishes our stored procedure so I'll be closing semi-colon to finish off the stored procedure and just to keep the screen clean, I'll add the go command here at the very bottom.
>
> **[6:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=362)** So let's execute all of that, completed successfully So I created our stored procedure and now we can test it out.
>
> **[6:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=370)** So execute sales.salesinfo, and we'll pass it a customer ID.
>
> **[6:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=378)** I should have looked at this.
>
> **[6:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=380)** We'll just randomly pick a number and see if there's a customer that is ID number 915, and there is all right, so we've got there're single row from the customer's table So 915 corresponds to Ana Florea and then we have a whole bunch of information here about all these different orders that she has placed.
>
> **[6:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=399)** So that is that let's do another one.
>
> **[6:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=402)** Let's tap out some more numbers.
>
> **[6:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=403)** How about 874 Is there a customer here?
>
> **[6:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=405)** And there is all right, 4242 So we've got another customer name and their order information.
>
> **[6:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=412)** So we're able to use the stored procedure to search for information from the database, but silently behind the scenes it should also be filling in some rows into our customer account audit table.
>
> **[7:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=426)** So let's take a look at that.
>
> **[7:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=427)** So let's start from sales.customeraccountaudit let's pick into this table and sure enough, it's right in those rows down so we we're automatically getting an audit ID number every time we execute the stored procedure, it's telling me what customer I searched for and giving the exact time and date when I perform the search.
>
> **[7:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-use-function-in-a-stored-procedure?u=76281980&t=448)** So that is my solution to the challenge and I'll go ahead and save all of this inside of the exercise files as zero three, zero six, challenge complete.SQL, and you can review your solution against mine.

> [!info]- Semantic Content
>
> **Code Keywords:** let (20), pass (2), from, (2), this. (2), function (1)
> **CLI Commands:** make (3)
> **UI Navigation:** select the (2), scroll down (1)
> **Env Vars:** sql (2)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** complete.sql (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 4. Create Transactions

#### Ensure data consistency with transactions
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=0)** - When you need to ensure that multiple actions are successfully performed on the database in order to maintain the consistency of the data, then those actions should be grouped together as a transaction.
>
> **[0:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=12)** Transactions create a wrapper that surrounds a batch of commands that you send to the database server.
>
> **[0:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=18)** This wrapper allows you to treat the entire batch as a single unit of work.
>
> **[0:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=23)** And you can choose to finalize or undo the entire transaction all at once.
>
> **[0:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=30)** This allows you to perform multi-step processes without having to worry about the data being in an inconsistent state.
>
> **[0:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=37)** To illustrate what I mean let's take a look at an example.
>
> **[0:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=41)** Suppose we have two bank accounts, a checking account with $500 in it and a savings account that has a zero balance.
>
> **[0:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=49)** If we want to transfer $200 from checking to savings, that requires two separate operations in the database.
>
> **[0:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=57)** First, we need to deduct $200 from the checking balance.
>
> **[1:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=61)** Then we need to add $200 to the savings balance.
>
> **[1:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=65)** If everything finishes successfully, we should have 300 in checking and 200 in savings at the end of the process.
>
> **[1:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=74)** But we all know that procedures don't always complete as expected.
>
> **[1:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=77)** Network errors might interrupt the process.
>
> **[1:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=80)** A fire might break out in your server room.
>
> **[1:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=82)** A memory module might suddenly become corrupt.
>
> **[1:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=85)** Any number of things may happen during the process that causes one activity to finish successfully, but causes the other one to fail.
>
> **[1:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=94)** And if that happens, then the data would be left in an inconsistent state.
>
> **[1:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=99)** For instance, if the deduction from checking happens, but the addition to savings did not, the total across both accounts would be short $200.
>
> **[1:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=108)** Or the other way around, if the addition to savings was successful but the deduction from checking was interrupted, then $200 would seem to have appeared out of thin air.
>
> **[1:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=119)** Obviously neither outcome is acceptable.
>
> **[2:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=122)** The solution to this problem is to wrap both processes, the deduction from checking and the addition to savings as a single transaction.
>
> **[2:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=132)** When combined together as a transaction, the server can better control the outcome.
>
> **[2:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=137)** As a single unit of work, both actions must complete successfully in order to transfer money from one account to the other.
>
> **[2:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=146)** When a transaction completes successfully, it's called a commit, any new values are permanently written to disk.
>
> **[2:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=153)** But if any portion of the transaction fails, then both statements are undone and the account balances are reverted back to their initial state.
>
> **[2:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=162)** This process of undoing all of the actions performed within the transaction is called a rollback.
>
> **[2:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/ensure-data-consistency-with-transactions?u=76281980&t=169)** So wrapping a batch of related commands in a transaction helps ensure that the state of the data remains consistent and trustworthy, whenever you're creating new rows, deleting rows, or modifying existing rows in your data tables.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), module (1)
> **Definitions:** is called (1)
> **Analogies:** for instance (1)
> **Speakers:** - when (1)

#### Create a transaction
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=0)** - To explore how transactions work in SQL server, let's return to the colors table that we've worked with previously.
>
> **[0:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=7)** In a prior movie, we created a stored procedure called USP Insert Color to help us enter new color names into that table.
>
> **[0:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=16)** Now, if you've been following along, then you'll already have this stored procedure, but if not, you can run lines six through 16 in order to create it now.
>
> **[0:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=24)** Okay. Let's turn our attention to transactions.
>
> **[0:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=28)** In order to wrap a batch of commands into a transaction, we need to start the transaction at the beginning and end the transaction at the end.
>
> **[0:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=37)** Starting a transaction is easy.
>
> **[0:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=39)** Just run the begin transaction command, or you can abbreviate it to just simply Begin Tran.
>
> **[0:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=46)** You can provide a name for the transaction, but that's optional.
>
> **[0:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=49)** Naming your transactions can help you later on when it's time to close the transaction so that it's easy to see which lines correspond to which transaction name.
>
> **[0:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=58)** I naming this transaction first transaction.
>
> **[1:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=62)** If you do name a transaction, then you have another optional component called with mark.
>
> **[1:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=68)** When you mark a transaction, a record of the transaction's name is added to the databases transaction log, which can be helpful if you ever need to restore the database to a prior state.
>
> **[1:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=79)** The named mark makes it much easier to identify the exact point in time when this transaction was committed if it finishes successfully.
>
> **[1:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=89)** So, let's go ahead and run line number 19 in order to open up a new transaction.
>
> **[1:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=95)** Once the transaction is open, then any commands that you perform are included within the transaction's wrapper and constitutes a single unit of work.
>
> **[1:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=104)** So, let's add two colors to our table using our stored procedure.
>
> **[1:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=109)** We'll answer the colors sunset orange and tomato red.
>
> **[1:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=114)** Now, if you view the contents of the colors table by running the select statement on 26 and 27, it'll look like those two rows have been added into the table.
>
> **[2:03](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=123)** But we're still inside of the transaction.
>
> **[2:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=125)** And this data is actually not yet finalized on the server.
>
> **[2:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=129)** In fact, if I copy the select statement to my clipboard and open up a new query window, then paste it in and run the select statement again, you'll notice that we actually don't get any results.
>
> **[2:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=140)** In fact, if you look at the message bar at the very bottom of the screen, you'll notice that this query is still running.
>
> **[2:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=146)** We're kind of in a holding pattern over here because the new query tab acts as a separate session and the open transaction in the other tab has created a lock on the colors table that prevents anyone else from accessing it until we finalize the operation over there.
>
> **[2:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=163)** So, let's leave this query running in this tab and go back to our transaction.
>
> **[2:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=167)** At this point, we have two different options, on line 31 or 32.
>
> **[2:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=172)** We can choose to roll back the transaction, which will undo the commands within the transaction.
>
> **[2:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=177)** Both rows that we just added would disappear and the state of the color's table would return to its original state before we begin the transaction, or we can commit the transaction.
>
> **[3:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=188)** This would cause both rows to be finalized and written to the table.
>
> **[3:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=192)** In either case, the lock would then be removed so that the query running in the other tab would complete.
>
> **[3:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=199)** Let's choose to roll back this transaction first.
>
> **[3:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=202)** I'll execute line 31.
>
> **[3:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=204)** That undoes our new rows and removes the table lock.
>
> **[3:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=207)** If we switch back over to the other tab, we'll see that the query was allowed to complete and neither of our new colors appear in the results.
>
> **[3:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=217)** As far as this query is concerned, our actions in the other tab never took place.
>
> **[3:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=223)** So, let's go back over to the first tab and run through this process one more time.
>
> **[3:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=228)** I'm going to begin another transaction by running line 19.
>
> **[3:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=232)** Then I'll insert the two colors again.
>
> **[3:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=236)** I'll come back to the second tab and I'll start the query again.
>
> **[4:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=240)** Once again, the table is locked, so we're not getting any results immediately, but if I switch back to the first tab and this time commit the transaction, it'll finalize those two colors in the table.
>
> **[4:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=251)** Now, we'll switch back to the second tab one more time and I'll see that the query completed, and there are the two final rows added into the colors table.
>
> **[4:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=260)** So, that's how transactions work, by wrapping a number of commands in a transaction, you can choose to either finalize them all at once or roll them all back.
>
> **[4:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=271)** In this example, we manually chose which outcome we wanted, either a commit or a rollback.
>
> **[4:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/create-a-transaction?u=76281980&t=277)** The next step in the process is to automate which outcome occurs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), switch (3), case, (1)
> **Env Vars:** sql (1), usp (1)
> **Cross-References:** go back to (1)
> **Speakers:** - to (1)

#### Transaction savepoints
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=0)** - [Instructor] Within a transaction, you can create save points that allow you to roll back just a portion of the transaction while committing other portions of the transaction.
>
> **[0:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=10)** To do this, I first want to introduce the @@TRANCOUNT system variable.
>
> **[0:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=15)** Let's see what it currently contains by running this statement on line number six.
>
> **[0:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=19)** We'll select @@TRANCOUNT and I'll give it a column name as "Open Transactions."
>
> **[0:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=26)** This variable is used to track whether you're currently working inside of a transaction or not.
>
> **[0:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=31)** The number zero here indicates that we're not in a transaction at this moment.
>
> **[0:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=36)** If you begin a transaction by running line number nine, and then selecting that variable again, you'll see that that number has incremented up to one.
>
> **[0:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=46)** We're now inside of a single transaction.
>
> **[0:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=49)** Now it is possible to create transactions within transactions, or what's referred to as "nested transactions."
>
> **[0:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=56)** And this can be helpful to manage complex programming routines.
>
> **[1:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=61)** If a rollback is encountered at any level within a nested transaction, all of the transactions are rolled back from the inside out and TRANCOUNT is reset to zero.
>
> **[1:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=73)** In order to roll back just a portion of a transaction, you need to create save points along the way.
>
> **[1:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=80)** So now that we're working inside of a transaction, I'm going to use our stored procedure to insert a new color into the colors table.
>
> **[1:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=87)** I'll insert the color lemon grass green.
>
> **[1:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=91)** Oh, and it looks like I get an error here because I forgot to switch my context over to the Wide World Importers database.
>
> **[1:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=96)** So let's go ahead and switch that over and press "execute now" to create that color inside of the colors table.
>
> **[1:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=103)** Next I'll create a save point.
>
> **[1:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=105)** We'll do that on line number 18 and run "save transaction" and give it a name.
>
> **[1:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=110)** I'll call it "Save Point One."
>
> **[1:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=112)** Just like in a video game, the save point will give us the option to return to this state at a later point if we choose to.
>
> **[2:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=121)** I'll execute that to create the save point.
>
> **[2:03](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=123)** And now if I check TRANCOUNT again by running line number 21, we'll see that we're still inside the first transaction.
>
> **[2:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=131)** Okay, let's go ahead and do some more work.
>
> **[2:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=134)** I'm going to insert another color and this time it'll be galaxy purple.
>
> **[2:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=139)** If you view the temporary data table that's inside of the transaction here, you'll see that it looks like both of these rows will be added to the table if we were to commit this transaction right now.
>
> **[2:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=151)** Instead, let's go back to the save point.
>
> **[2:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=154)** To do that, we'll roll back the transaction and make sure to include the save point's name, SavePointOne.
>
> **[2:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=161)** If you omit the save point name, the entire transaction is rolled back all the way to the beginning.
>
> **[2:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=167)** When the save point is referenced, only the portion of work that we performed after the save point's creation is rolled back.
>
> **[2:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=174)** So execute that to return back to our save point.
>
> **[2:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=178)** Additionally, we can double check that TRANCOUNT is still set at number one.
>
> **[3:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=182)** And, sure enough, we're still inside of a transaction.
>
> **[3:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=186)** At this point, I'm going to commit our transaction.
>
> **[3:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=189)** If I select TRANCOUNT again, this time we should see it back to zero.
>
> **[3:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=193)** So now we are outside of all of our transactions.
>
> **[3:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=198)** Now, if all of that worked as intended, if I select all of the final data from Warehouse.Colors, I should see lemon grass, but not galaxy purple, in this table.
>
> **[3:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=207)** And sure enough, we just see that one color there.
>
> **[3:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=211)** The step where we added galaxy purple to this table was rolled back within the transaction, but the first insert was completed successfully.
>
> **[3:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/transaction-savepoints?u=76281980&t=219)** So with save points, you can create named positions that can be returned to during the flow of your transaction.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), switch (2), this, (1)
> **Env Vars:** trancount (6)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Automatically roll back transactions
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=0)** - [Instructor] In the previous examples, we've manually chosen whether to commit, or roll back a transaction.
>
> **[0:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=7)** But we haven't yet looked at what happens when a transaction includes a command that generates an error.
>
> **[0:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=12)** A common misconception about transactions is that they automatically revert the database, to the state that it was in, when an error is encountered, but that isn't always the case.
>
> **[0:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=22)** And knowing what to look for can help you better understand what's happening on your system, when you've implemented transactions.
>
> **[0:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=29)** First, let's take a look at the default behavior of SQL Server.
>
> **[0:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=33)** I'm going to stick with the colors table again, and take a quick look at the contents to review the starting state of our data.
>
> **[0:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=40)** I'll run the SELECT statement on line three through five, and I can see that the most recent color that we just added was color ID number 40, and it was lemon grass green.
>
> **[0:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=49)** So let's go ahead and start a transaction.
>
> **[0:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=52)** I'll run line number eight, and then I'm going to insert a new color called burnished bronze using our store procedure.
>
> **[0:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=59)** So far everything's working fine, but I know that the color table has a unique constraint on the color name.
>
> **[1:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=66)** And you can see that by opening up the Wide World Importers database, expanding tables, coming down to warehouse.colors, then we'll expand the indexes folder.
>
> **[1:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=76)** And here you can see that we have a unique constraint on the color name column, and that's what's constraining the color so that we can't insert the same color twice.
>
> **[1:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=85)** So if I try and add another row with the same burnished bronze color name, I'm going to get an error.
>
> **[1:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=91)** And here it is, it says the duplicate key value is burnished bronze.
>
> **[1:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=95)** Now, at this point, I'm going to commit this transaction.
>
> **[1:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=99)** Now, what do you think just happened in the colors table?
>
> **[1:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=103)** We know that burnished bronze can't appear twice, but will there be one row with that color or no rows with that color?
>
> **[1:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=111)** Well, let's find out.
>
> **[1:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=112)** Let's select everything from warehouse.colors, and order by the color ID descending.
>
> **[1:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=117)** Here I see that I get just a single row that says burnished bronze.
>
> **[2:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=121)** The error that occurred during our transaction, didn't automatically roll the whole thing back.
>
> **[2:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=127)** It just wasn't able to preform this second insert action.
>
> **[2:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=131)** The first insert completed just fine.
>
> **[2:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=133)** And it was committed to the table when we close the transaction.
>
> **[2:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=137)** So that's SQL Server default behavior, but we can change that if we want to.
>
> **[2:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=143)** Let's go ahead and scroll down on the script a little bit, until I get to line number 20.
>
> **[2:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=148)** Now there's a server level setting called XACT_ABORT, or maybe it's called transact abort.
>
> **[2:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=153)** I'm not really sure how to pronounce this.
>
> **[2:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=155)** But in any case this setting, when it's enabled will tell SQL Server to automatically roll transactions back, when a runtime error is encountered.
>
> **[2:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=165)** We can see the current server setting by running this SELECT statement on line 23 to 25.
>
> **[2:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=172)** This tells me that on my server XACT_ABORT is currently turned off, and I'd expect it, that was probably the case for you too.
>
> **[2:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=179)** Let's turn it on with SET XACT_ABORT ON.
>
> **[3:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=184)** Now we can run through the same exercise and see the difference in behavior.
>
> **[3:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=188)** Once again, we'll begin another transaction.
>
> **[3:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=191)** I'll insert a new color called glittering gold, and I'll try and insert the same color again.
>
> **[3:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=198)** Once again, we get an error in the duplicate key value and that's expected.
>
> **[3:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=202)** And I'll go ahead and try and commit the transaction.
>
> **[3:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=206)** This time I get another error, saying there is no transaction.
>
> **[3:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=210)** That's because it was rolled back and closed, as soon as I got the error when I tried to enter in the duplicate color.
>
> **[3:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=217)** And because the entire transaction was rolled back, nothing was committed.
>
> **[3:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=221)** If I query the colors table again, by running the SELECT statement, we'll see that I get no rows that say glittering gold.
>
> **[3:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=229)** If you want to disable XACT_ABORT, you can turn it off with this study here, SET XACT_ABORT OFF.
>
> **[3:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=235)** But be aware that this setting only applies to the current session.
>
> **[4:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=240)** If you scroll back up on the script a little bit , and find line 23 through 25, I'm going to go ahead and copy this to my clipboard.
>
> **[4:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=248)** Then I'll start a new query window.
>
> **[4:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=250)** And that opens up a new session.
>
> **[4:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=253)** I'll paste it in and press execute.
>
> **[4:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=255)** Here you'll find that it defaults back to off, for each new session.
>
> **[4:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=259)** So this isn't a setting that you'll really need to manage or worry about leaving on for all users of the server.
>
> **[4:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=267)** So that's how the XACT_ABORT setting works to automatically roll back transactions, when they encounter a runtime error.
>
> **[4:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/automatically-roll-back-transactions?u=76281980&t=274)** For more control over when transactions are committed or rolled back, we'll need to dive into the concept of error handling, and we'll do that in the next chapter.

> [!info]- Semantic Content
>
> **Env Vars:** xact_abort (6), sql (3), select (3), set (2), off (1)
> **Code Keywords:** let (6), case. (1), this. (1)
> **CLI Commands:** find (3)
> **SQL:** select (3)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a transaction
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-transaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-transaction?u=76281980&t=0)** - [Illustrator] For the third challenge of this course, I'd like to pull from what we've seen about creating stored procedures and combine it with some of our new knowledge about transactions.
>
> **[0:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-transaction?u=76281980&t=15)** This will be a two part challenge.
>
> **[0:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-transaction?u=76281980&t=17)** We'll start building a solution now and then finish it up at the end of the next chapter.
>
> **[0:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-transaction?u=76281980&t=23)** So what is it that we want to do?
>
> **[0:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-transaction?u=76281980&t=25)** In the 04_06_Challenge-Start.sql file is some code to build a Bank accounts table, and then add a couple of rows of data.
>
> **[0:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-transaction?u=76281980&t=34)** Your goal is to write a stored procedure that'll allow you to easily transfer money from one account to the other.
>
> **[0:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-transaction?u=76281980&t=42)** Your solution should include parameters that you can pass into the store procedure, and then wrap the commands inside of a transaction so that the database will always be in a consistent state.
>
> **[0:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-transaction?u=76281980&t=53)** Finally, test out your solution by transferring $50 from account number one to account number three.
>
> **[1:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-transaction?u=76281980&t=60)** This solution should take about 10 minutes or less to complete.
>
> **[1:03](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-create-a-transaction?u=76281980&t=63)** In the next movie I'll share my solution, and in the next chapter, we'll add additional functionality to this procedure.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (2), next chapter (1)
> **Code Keywords:** pass (1), finally, (1)
> **File Paths:** 04_06_challenge-start.sql (1)
> **Speakers:** - [illustrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create a transaction
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=0)** - [Instructor] I hope you were able to create the stored procedure to transfer money from different bank accounts.
>
> **[0:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=10)** Let's go ahead and walk through the solution.
>
> **[0:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=12)** I have right now, on the screen, the 04_06_Challenge-Start.sql file.
>
> **[0:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=17)** And let's just run through what this does real quick.
>
> **[0:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=19)** It's going to drop a table if it exists, and that's the bank accounts table.
>
> **[0:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=23)** So if that table is already in your system for some reason then we're going to drop it and then just recreate it again fresh.
>
> **[0:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=28)** So we'll create the table "bank accounts", and it's going to have two columns.
>
> **[0:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=33)** Account ID will be an integer, and then we have our balance as a decimal ten-two data type.
>
> **[0:38](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=38)** Next, we're going to insert a couple of rows into the table and then we'll select everything out of it just so we can see what our starting point is.
>
> **[0:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=45)** So let's go ahead just execute all of this.
>
> **[0:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=48)** And here's our little table.
>
> **[0:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=49)** So we've got our account ID.
>
> **[0:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=50)** So account one has $100, account two has $200, and account three has $300.
>
> **[0:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=56)** So what we need to do here is outlined here on lines 14 and 15.
>
> **[0:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=59)** We need to create a stored procedure that contains a transaction for transferring funds between one account and another.
>
> **[1:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=66)** And then we're going to use the stored procedure to transfer $50 from account one, and deposit it into account three.
>
> **[1:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=75)** So, let's go ahead and get started.
>
> **[1:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=76)** I'm going to come down to line number 17.
>
> **[1:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=78)** And let's go ahead and move this down so I have some room.
>
> **[1:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=82)** So we're going to create a procedure.
>
> **[1:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=85)** And once again, I just like to say create or alter in case I want to come back and make changes to it, it's already an alter procedure statement without me having to make any changes to this line.
>
> **[1:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=94)** So I'll create or alter a procedure.
>
> **[1:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=96)** It's going to go into a schema and our table is in the DBO schema.
>
> **[1:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=100)** So it makes sense just to put this procedure in the same schema.
>
> **[1:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=103)** We don't have anything else in the DBO schema inside of the wide world importers database, So we could have put it in one of those schemas, but it really doesn't matter.
>
> **[1:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=111)** I'll just use the same one that the table is using.
>
> **[1:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=113)** So DBO, and let's call this procedure... Well, it's being used to transfer funds, so I'll just call it "transfer funds".
>
> **[2:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=121)** Alright, that's naming our procedure.
>
> **[2:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=122)** And we want to have a couple of input parameters.
>
> **[2:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=125)** So what are the things that we need to know in order to transfer money?
>
> **[2:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=128)** Well, we need to know what account the money is coming out of.
>
> **[2:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=133)** So I'll set that up as a parameter, we'll call it 'from account'.
>
> **[2:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=137)** And our account numbers are integers that we establish in the table up here.
>
> **[2:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=142)** So this parameter should also be an integer.
>
> **[2:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=145)** We also need to know where the money is going to, So I'll set up another parameter called 'to account' and that's also going to be an integer.
>
> **[2:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=152)** And we need to know how much money we want to transfer.
>
> **[2:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=155)** So let's set up a parameter for that, we'll call that "amount" and our balances are being stored as a decimal ten-two here in this column.
>
> **[2:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=165)** So let's also pass that in.
>
> **[2:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=167)** So that finishes the parameters that we're adding into our stored procedure.
>
> **[2:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=172)** And also notice that I'm not using the 'as' keywords here.
>
> **[2:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=175)** The 'as' is actually optional, so when I define the datatype for each of our parameter, I'm just saying the name of the parameter followed by the data type.
>
> **[3:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=184)** 'As' is optional here.
>
> **[3:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=186)** You could just type this in as well and that would be exactly the same thing.
>
> **[3:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=190)** So that just flushes that out a little bit more.
>
> **[3:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=192)** So next, this 'as' is required, though, so what our stored procedure is going to do, so we have 'as' here followed by all of the commands that we're going to do.
>
> **[3:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=201)** So we're going to have a couple of commands.
>
> **[3:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=204)** We need to move money out of one account and then put it into another account.
>
> **[3:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=208)** And we're going to wrap all of that in a transaction.
>
> **[3:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=211)** Now in the next chapter, we're going to talk about error handling, which is going to help us out with the transaction a little bit.
>
> **[3:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=217)** So it can control when things commit and when things rollback, but we haven't gotten there yet.
>
> **[3:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=222)** So for now I'm just going to turn on the 'X act abort' option.
>
> **[3:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=227)** And we'll turn that on as part of our stored procedure.
>
> **[3:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=230)** And that will automatically rollback the transaction if it encounters an error inside of here.
>
> **[3:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=235)** But later on, we're going to come back and we're going to alter this to put in some better error handling routines, but we'll do that in the next chapter.
>
> **[4:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=242)** So maybe something you did in yours, maybe it's not, it doesn't really matter at this point.
>
> **[4:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=247)** So then we're going to begin our transaction.
>
> **[4:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=250)** And now we can start moving some money.
>
> **[4:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=253)** So to do that, I need to update some data.
>
> **[4:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=256)** So update the DBO.bank account stable.
>
> **[4:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=261)** And we're going to set the balance column.
>
> **[4:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=265)** Let's do this as the moving money out first.
>
> **[4:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=268)** So we're going to move money out of an account and then in the next step we'll move the money into an account.
>
> **[4:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=273)** So this one's going to be subtracting money.
>
> **[4:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=275)** So we could, say, set the balance equal to the current balance minus whatever we're passing in as the amount.
>
> **[4:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=282)** So that's one way that we could do it.
>
> **[4:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=283)** So it's going to pull the parameter that we're passing in and just take the current balance, subtract the amount, and set that as the new balance.
>
> **[4:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=291)** Another way that we can do this, though, is a little bit simpler.
>
> **[4:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=294)** We can say, set balance, minus equals amount, and this is just a way to decrement the current balance by whatever this amount is.
>
> **[5:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=302)** So that makes it a little bit clearer, a little bit easier to read.
>
> **[5:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=305)** Essentially, they say exactly the same thing, though.
>
> **[5:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=307)** So balance equals balance minus add amount, or balance minus equals add amount is exactly the same thing.
>
> **[5:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=316)** So we're going to set our balance to be decremented by the amount and we only want to do it where the account ID is the 'from account'.
>
> **[5:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=324)** So we're going to subtract the money from the 'from account', so where account ID is equal to at 'from account'.
>
> **[5:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=332)** So that finishes the first statement.
>
> **[5:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=334)** And the next statement is going to be basically the same thing.
>
> **[5:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=336)** We're just going to be putting money into the 'to' account.
>
> **[5:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=340)** So next we'll update DBO.bank accounts again.
>
> **[5:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=346)** And we're going to set the balance of that account.
>
> **[5:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=350)** And this time, we can say plus equals add amount.
>
> **[5:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=354)** And that's going to be where your account ID is equal to our 'to account'.
>
> **[6:03](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=363)** This is the money that we're sending the money into.
>
> **[6:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=366)** So we're taking money out of the 'from account' and we're putting money in to the 'to' account.
>
> **[6:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=372)** And that finishes that statement.
>
> **[6:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=374)** So we can go ahead and commit the transaction at this point.
>
> **[6:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=379)** Both of these statements have to happen together.
>
> **[6:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=381)** I don't want to do one and not the other.
>
> **[6:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=383)** So we want to make sure that this is wrapped in the transaction clauses.
>
> **[6:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=386)** And at this point, we can turn exact abort back off again.
>
> **[6:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=391)** So we could do that right inside of our procedure as well.
>
> **[6:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=394)** So set, turn that back off again.
>
> **[6:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=396)** So our stored procedure will turn it on, do the transaction and then turn it off again at the very end.
>
> **[6:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=402)** And I need a semicolon here after the 'commit transaction', semicolon here to close the 'create procedure' statement, and we'll call that good.
>
> **[6:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=412)** Let's come down one more line, just putting 'go' for good measure.
>
> **[6:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=415)** And let's go ahead and highlight all this and create a procedure.
>
> **[6:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=418)** All right, that's made.
>
> **[7:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=420)** So now, the moment of truth.
>
> **[7:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=421)** We need to use the stored procedure to transfer $50 from account one to account three.
>
> **[7:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=427)** All right, so go down to 35 and we can say we're going to execute our store procedure, so DBO.transfer funds, and we're going to pass in our parameters.
>
> **[7:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=438)** And the little IntelliSense pop-up menu is already telling me what the parameters are.
>
> **[7:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=442)** So the first one is our 'from account' as an integer.
>
> **[7:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=445)** So I want to move the money out of account number one, type in a comma- that tells me that the second parameter is our 'to account' and we move that into account number three, type in a comma, and then it tells me that the third parameter is the amount that I want to transfer, in which case, this is $50.
>
> **[7:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=462)** So let's go ahead and execute this.
>
> **[7:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=466)** Alright, one row is affected.
>
> **[7:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=467)** It actually tells me twice.
>
> **[7:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=468)** So this is the row where we were subtracting the money and then this one corresponds to the row where we're adding the money.
>
> **[7:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=475)** And let's select everything.
>
> **[8:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=481)** Select 'star' from DBO.bank accounts.
>
> **[8:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=484)** And there we go.
>
> **[8:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=485)** So account number one started at $100.
>
> **[8:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=487)** It's now $50.
>
> **[8:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=489)** Account three started at $300 and is now $350.
>
> **[8:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=492)** So the money came out of this one and went into that one.
>
> **[8:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=495)** And so that is my solution to the problem.
>
> **[8:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=497)** Now, there are some issues with this, and we're going to fix this up in the next chapter.
>
> **[8:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=503)** For instance, if you try to transfer funds out of an account into an account that doesn't exist, then you're going to have some weird things happen with our balances.
>
> **[8:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=511)** So there are some issues with the way that this is set up, but we will fix it in the next chapter.
>
> **[8:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=516)** So stay tuned for that.
>
> **[8:38](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-create-a-transaction?u=76281980&t=518)** I'll go ahead and save my solution here into the 04-06_Challenge-Complete file and you can compare this to mine and we'll see you in the next chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), type. (2), this. (2), pass (2), this, (2)
> **Env Vars:** dbo (7)
> **Cross-References:** in the next (6)
> **CLI Commands:** make (3)
> **Analogies:** just like (1), for instance (1), compare this to (1)
> **Prerequisites:** set up (3)
> **File Paths:** 04_06_challenge-start.sql (1)
> **Definitions:** is a  (1)


### 5. Implement Error Handling

#### What is error handling?
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-is-error-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-is-error-handling?u=76281980&t=0)** - [Instructor] In a perfect world all of our interactions with the database, every command or transaction would occur flawlessly, man, exactly as expected every time.
>
> **[0:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-is-error-handling?u=76281980&t=10)** But we know that that's not the case.
>
> **[0:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-is-error-handling?u=76281980&t=11)** And it's important to plan ahead for potential errors to disrupt the programs that we write.
>
> **[0:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-is-error-handling?u=76281980&t=17)** The process of building in graceful responses to these disruptions is called error handling.
>
> **[0:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-is-error-handling?u=76281980&t=24)** Whenever you write a program or send instructions, you're telling the computer to basically do some things.
>
> **[0:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-is-error-handling?u=76281980&t=30)** Error handling adds an extra step.
>
> **[0:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-is-error-handling?u=76281980&t=33)** Here, We'll add on an extra bit that says, "If an error occurs, do different things."
>
> **[0:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-is-error-handling?u=76281980&t=39)** So with error handling, we're rerouting or interrupting the execution of a routine and telling it to perform a different set of tasks instead.
>
> **[0:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-is-error-handling?u=76281980&t=48)** In a SQL Server Database, this could look like this, you instruct the server to insert a new row in a table.
>
> **[0:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-is-error-handling?u=76281980&t=54)** The error handling routine might say, "If that doesn't work for any reason, "wait five minutes and try again."
>
> **[1:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-is-error-handling?u=76281980&t=62)** When adding in error handling routines, it's important to think through the potential sources of problems, what's likely to go wrong.
>
> **[1:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-is-error-handling?u=76281980&t=69)** What kind of failures would be catastrophic to the routine and which ones are just annoying?
>
> **[1:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-is-error-handling?u=76281980&t=74)** It's important to think about the mechanical errors that could be caused by server or network issues, but also you need to think about to the problems introduced by human errors.
>
> **[1:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-is-error-handling?u=76281980&t=84)** What happens when someone supplies text when the program expects an integer, for example?
>
> **[1:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-is-error-handling?u=76281980&t=89)** And finally, when an error is encountered, is there a way to work around and potentially fix the problem rather than just failing the entire thing?
>
> **[1:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-is-error-handling?u=76281980&t=99)** Not all error handling needs to result in the procedure ending prematurely.
>
> **[1:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/what-is-error-handling?u=76281980&t=103)** Sometimes there's a way to get the train back on the tracks to continue on so that the end user doesn't even know that a problem occurred.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1), this, (1), finally, (1), continue (1)
> **Env Vars:** sql (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Capture errors with TRY and CATCH
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=0)** - [Instructor] In your SQL server programs, error handling is most often implemented using Try and Catch blocks.
>
> **[0:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=7)** The basic syntax is fairly simple.
>
> **[0:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=9)** I've got an outline of what that looks like starting on line six and going down to line number 12.
>
> **[0:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=16)** At the beginning of the routine, that you want to execute, add BEGIN TRY, then include all of the code you want to run.
>
> **[0:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=22)** Assuming that it executes without any problems.
>
> **[0:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=25)** After that, you'll have a line that says END TRY followed immediately by a BEGIN CATCH.
>
> **[0:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=33)** If any errors are encountered in the TRY block, then the code in the CATCH block is executed.
>
> **[0:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=39)** If the TRY block doesn't encounter any errors, then this portion is skipped over, finish the CATCH block with END CATCH .
>
> **[0:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=46)** And then you can continue on with other code you want to execute after that.
>
> **[0:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=50)** To put this into practice, let's try and execute an insert statement where we don't supply the values that we need for the required fields in a table.
>
> **[0:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=59)** I've got that outlined here on line number 18, where I'm going to insert into application.people, and I'm just going to try and fill in a value for the full name column.
>
> **[1:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=69)** If I execute just this line, you'll see what the basic error the SQL server generates looks like.
>
> **[1:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=74)** It tells me that the table does not allow NOLS in the column for preferred name.
>
> **[1:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=80)** There's actually many more columns that require values in the application.people table, but this is just the first error that SQL server encountered.
>
> **[1:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=89)** Now if I include the TRY and CATCH blocks around this routine, starting online, number 17, and going down to 22, we can capture this error and do something different.
>
> **[1:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=100)** In this case, I'll just print a message that simply says that the row was not added to the table.
>
> **[1:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=105)** I'll run lines 17 through 22, and you'll see the difference.
>
> **[1:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=109)** Now it's important to note here that the code completed successfully this time.
>
> **[1:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=113)** The error that was encountered in the Trial block activated the CATCH block and the print command was able to complete.
>
> **[2:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=120)** And I get the message here.
>
> **[2:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=122)** So even though there was an error inside of the code, the ultimate outcome is considered a success.
>
> **[2:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=128)** Now there's a number of different functions, specifically made for a TRY CATCH error handling routine, and they contain some useful information about the error that caused the program to jump into the CATCH BLOCK.
>
> **[2:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=140)** I've got them outlined here, starting on line number 31.
>
> **[2:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=145)** I'm going to output them into a result set by including them inside of a select statement inside of the CATCH block of the TRY CATCH construct.
>
> **[2:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=153)** We're going to trigger it using the same insert into application people error that we just generated.
>
> **[2:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=159)** And when I execute it, we'll see the results of all the different error messages.
>
> **[2:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=163)** So now that breaks out to the error number, separate from the error message, from the error severity and so on.
>
> **[2:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=170)** This makes it easy to use this information, to decide how to respond to different kinds of errors.
>
> **[2:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=176)** One method would be to use the same if else and case statements that we explored earlier in the course.
>
> **[3:03](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=183)** Using these, you can build a branching logic tree that responds differently to different kinds of errors.
>
> **[3:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=189)** Inside of the CATCH block in this example, I have started a new if block, this will run through different possible outcomes.
>
> **[3:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=198)** In this case, if the error number is equal to 515, we'll return this message.
>
> **[3:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=203)** Otherwise, if the error number is 8134, we'll return a different message.
>
> **[3:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=208)** If that's not the case, we'll check and see if the error message is number 2627.
>
> **[3:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=212)** And if so, will return this message.
>
> **[3:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=215)** And if none of those are the case, then we'll return a generic error message.
>
> **[3:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=219)** We can test this out by deliberately causing different kinds of errors.
>
> **[3:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=223)** I'm willing to uncomment line number 44, and that will trigger it to generate that insert into the people table again, with the area that we've been looking at.
>
> **[3:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=231)** So let's run all of this and I'll see the output message that says, please supply values for all required columns.
>
> **[3:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=238)** If I trigger a different error, let's go ahead and re add the comment in here and uncomment line 45, This is going to generate a divide by zero error.
>
> **[4:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=247)** When I run this, I get a different message in the messages window, and it says you cannot divide a number by zero, which is the code that I put right here on 52.
>
> **[4:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=256)** Finally, if we trigger the third error, let's go ahead and comment that again.
>
> **[4:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=260)** And uncomment 46.
>
> **[4:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=263)** This line is going to use our insert color store procedure, but try insert a color that already exists in the table.
>
> **[4:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=271)** Let's run this and this time I get the message that the color is already in the table.
>
> **[4:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=276)** So those are some techniques that you can use to incorporate TRY and CATCH blocks into your SQL server programs.
>
> **[4:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/capture-errors-with-try-and-catch?u=76281980&t=283)** Think about the kinds of errors that might be encountered and develop responses that address the error, or that return useful information back to the calling application or user.

> [!info]- Semantic Content
>
> **Env Vars:** catch (12), try (8), sql (4), begin (2), end (2)
> **Code Keywords:** let (5), case, (4), try, (1), catch. (1), catch . (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### Generate errors with THROW
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=0)** - Sometimes SQL server is perfectly happy, executing in instruction that doesn't actually make sense for your specific database.
>
> **[0:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=8)** For instance, a user sends a command to perform a task, that's technically valid SQL, but the end result doesn't correspond to the business rules that your organization needs to follow.
>
> **[0:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=19)** In these cases, you can create your own custom error messages, using a command called throw.
>
> **[0:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=26)** The nice thing about throw is that you can insert it anywhere that you want.
>
> **[0:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=29)** It doesn't have to be attached to any actual database or a server errors to see how this can be helpful, I've done a tri catch statement set up here on line seven through 13.
>
> **[0:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=42)** The first thing that I'm doing is requesting a row from the people's table.
>
> **[0:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=46)** Now this select statement should work just fine and is not going to generate any errors.
>
> **[0:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=50)** Then on line number nine, we have our throw command, which will create an error that transfers execution into the catch block.
>
> **[0:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=59)** The throw command has three parts to it.
>
> **[1:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=62)** First we have a custom error number.
>
> **[1:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=65)** This number needs to be above 50,000 and below about 2 billion.
>
> **[1:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=69)** Within that range, you can choose any number that you'd like.
>
> **[1:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=73)** Typically you'll see programmers use 50,001 like I have here or 51,000 or something like that.
>
> **[1:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=80)** Then we have a custom error message.
>
> **[1:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=83)** This is text so rapid inside of single quotes and it needs to be less than 2048 characters long.
>
> **[1:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=90)** Finally, we have a number that indicates the arrow state.
>
> **[1:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=94)** This is almost always going to be one, unless you have a specific reason to change it.
>
> **[1:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=99)** The error state allows you to differentiate between multiple causes of the same error.
>
> **[1:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=105)** So when SQL server reaches this throw command in the program, it'll immediately jump down into the catch block.
>
> **[1:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=111)** Here I'm printing a short bid of text to the messages window.
>
> **[1:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=115)** The error number is returned as an integer value.
>
> **[1:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=118)** So I need to convert it into a var char in order to combine it into the text string, then I'm concatenating or joining pieces of text together using these plus symbols.
>
> **[2:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=129)** So the final message will read error, then it'll have the error number followed by a colon, and then the error message.
>
> **[2:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=138)** So let's execute lines seven through 13 and see what happens.
>
> **[2:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=142)** Here I get the result of the select statement online number eight, but if I switch over to the messages, we'll see that I have my custom error message.
>
> **[2:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=149)** It says error 50,001, colon, throw sent this message to the catch block.
>
> **[2:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=154)** So the errors that are created by throw have the same effects on the flow of your programs as the regular SQL server errors, when you use them in a try block.
>
> **[2:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=164)** There's one other use for throw and that's to repeat the last error message that was encountered or what SQL server refers to as raising an exception again.
>
> **[2:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=173)** I have an example of this starting on line 18.
>
> **[2:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=177)** On line 19, I'm trying to insert row into the application that's people table, but I'm not providing enough values for all of the required columns.
>
> **[3:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=185)** This we already know will create an error, which jumps the execution down into the catch block.
>
> **[3:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=191)** But if there is nothing in this block, for instance, if I get rid of line number 22 here and execute the statement, you'll see what happens.
>
> **[3:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=199)** SQL server just says that zero rows were affected, but there is no errors indicating what happened.
>
> **[3:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=205)** That's because the catch block isn't really doing anything here.
>
> **[3:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=208)** So let me undo that change by pressing controls here on my keyboard, And that'll put the keyword throw back on line number 22.
>
> **[3:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=215)** Now, when you add the throw command into the catch block without any arguments, then it simply repeats the last error.
>
> **[3:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=222)** This time, when I run the command, I still get the message that zero rows were affected, but I actually get the syntax of the error message, that was defined from the insert statement up here on line 19.
>
> **[3:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=234)** So that's how you use the throw command to create your own messages, when and where you want them.
>
> **[4:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/generate-errors-with-throw?u=76281980&t=241)** And since you specify your own error codes, throw immediately transfers execution of the routine into the catch block, or you can respond to them just as you would a normal SQL server error.

> [!info]- Semantic Content
>
> **Code Keywords:** throw (12), let (2), finally, (1), var (1), switch (1)
> **Env Vars:** sql (7)
> **Analogies:** for instance (2)
> **CLI Commands:** make (1)
> **Definitions:** refers to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - sometimes (1)

#### Manage transaction control
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=0)** - [Instructor] We've seen a number of techniques for managing the flow of a program using error handling with try-catch blocks.
>
> **[0:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=8)** Now it's time to combine that with what we learned in the previous chapter about transactions.
>
> **[0:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=13)** If you remember we saw that transactions need to be closed by either finalizing the data with commit transaction or undoing the changes with rollback transaction.
>
> **[0:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=24)** But in that chapter we had to manually decide which route to take and either send the commit command or the rollback command ourselves.
>
> **[0:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=32)** The last piece of that puzzle is to combine all of this knowledge and have the try-catch blocks control when a commit is sent, and when a rollback is sent.
>
> **[0:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=41)** So let's go back to the prior transaction example.
>
> **[0:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=45)** When we last saw the warehouse.colors table, we had just inserted a row called burnished bronze.
>
> **[0:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=51)** We also wrote this transaction on lines 11 through 16.
>
> **[0:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=56)** This transaction is used to insert two new colors and then commit the change to the table all at once.
>
> **[1:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=61)** But we found that if you try and insert the same color twice, even though it's in a transaction, one row was committed and the other one was not.
>
> **[1:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=70)** That's because we had no way of sending a rollback command when there was an error.
>
> **[1:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=75)** It always hit this commit transaction command.
>
> **[1:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=78)** Now we can better control what happens by placing this transaction inside of a try block.
>
> **[1:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=84)** To do that I'm going to come here to the beginning and we'll type in the text, begin try.
>
> **[1:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=89)** Then we'll go down to the very end and type in, end try.
>
> **[1:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=94)** So everything inside of that suddenly becomes inside of a try block.
>
> **[1:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=99)** I'm going to tab this out a little bit, just to make it a little bit clearer where the blocks begin and end.
>
> **[1:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=105)** Now we can go ahead and scroll down and enter in our catch block.
>
> **[1:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=111)** I like to leave space here and just type in the end catch right at the end so that I don't forget it.
>
> **[1:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=117)** And then we can come back up and define what we want to do inside of this block.
>
> **[2:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=121)** Now the first thing that we want to do is roll back the transaction.
>
> **[2:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=126)** If the code in the catch block is executing, then something has gone wrong and I want to make sure that the database is reset to the beginning state.
>
> **[2:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=134)** Then we should also tell the end user that something happened.
>
> **[2:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=139)** We could use the throw command to pass back the error message or we can do it in a friendlier way by printing a custom message.
>
> **[2:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=147)** I'll choose to print a message and it'll say the transaction was rolled back and no rows were saved.
>
> **[2:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=154)** I'll also append to the text of the error message that comes out if we end up going into the catch block.
>
> **[2:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=162)** And that's all we need to do to turn this transaction and incorporate it into a begin and catch error handling routine.
>
> **[2:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=169)** So let's go ahead and try it out.
>
> **[2:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=170)** We're going to execute the warehouse.uspInsertColor routine and we're going to pass it two different colors, unicorn pink and Kracken blue.
>
> **[2:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=178)** I'll run lines 11 down to 22 and everything looks like it entered in successfully.
>
> **[3:03](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=183)** So let's select everything from the warehouse.colors table.
>
> **[3:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=186)** All right and there are the two colors successfully entered into the table.
>
> **[3:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=190)** So now what happens when we enter in the same color twice.
>
> **[3:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=194)** I'll change these both to hydro green.
>
> **[3:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=198)** This time when I execute the statement it at first looks like everything is happening correctly.
>
> **[3:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=203)** I'm getting a little results table here and that's because it's coming out of the first execute statement up here on line number 14.
>
> **[3:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=210)** But because this is actually generating an error, when we get to line 15, we're jumping down into the catch block where it's rolling back the entire transaction.
>
> **[3:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=219)** Also if I switch over to the messages window, I'll get my custom message down here that says the transaction was rolled back and no rows were saved.
>
> **[3:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=227)** If I select everything from warehouse.colors, you'll see that that color actually doesn't appear in the table at all.
>
> **[3:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/manage-transaction-control?u=76281980&t=233)** And with that we have made our transaction a little bit better by having the error handling in place to selectively send to the commit or the rollback command, depending on the results of the routine.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), try. (2), pass (2), throw (1), switch (1)
> **CLI Commands:** make (2)
> **Cross-References:** previous chapter (1), go back to (1)
> **Code Identifiers:** uspinsertcolor (1)
> **UI Navigation:** scroll down (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Add error handling to a stored procedure
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-add-error-handling-to-a-stored-procedure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-add-error-handling-to-a-stored-procedure?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-add-error-handling-to-a-stored-procedure?u=76281980&t=5)** - [Instructor] For the last challenge of this course, I'd like you to return to the stored procedure that was developed at the end of the previous chapter.
>
> **[0:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-add-error-handling-to-a-stored-procedure?u=76281980&t=13)** If you remember, we created a procedure that contained a transaction that would help transfer money from one bank account to another.
>
> **[0:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-add-error-handling-to-a-stored-procedure?u=76281980&t=21)** Now it's time to add some error handling to the procedure.
>
> **[0:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-add-error-handling-to-a-stored-procedure?u=76281980&t=24)** You can either continue developing your own procedure or use the 05_06_Challenge-Start.sql file to pick up with a solution that I came up with.
>
> **[0:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-add-error-handling-to-a-stored-procedure?u=76281980&t=35)** The goal of the challenge is to gracefully handle three different situations.
>
> **[0:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-add-error-handling-to-a-stored-procedure?u=76281980&t=39)** First, make sure that the account that the money is coming from won't fall below a zero balance.
>
> **[0:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-add-error-handling-to-a-stored-procedure?u=76281980&t=45)** We don't want to allow anyone to overdraft their account.
>
> **[0:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-add-error-handling-to-a-stored-procedure?u=76281980&t=49)** Second, make sure that the money is coming from an account that actually exists.
>
> **[0:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-add-error-handling-to-a-stored-procedure?u=76281980&t=55)** And third, it's probably a good idea that the account the money is going into also exists.
>
> **[1:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-add-error-handling-to-a-stored-procedure?u=76281980&t=61)** Only complete the transfer once all three of these conditions are met.
>
> **[1:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/challenge-add-error-handling-to-a-stored-procedure?u=76281980&t=65)** I estimate that this challenge should take about 10 minutes to complete, and I'll share my solution in the next movie.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Cross-References:** previous chapter (1), in the next (1)
> **File Paths:** 05_06_challenge-start.sql (1)
> **Code Keywords:** continue (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution: Add error handling to a stored procedure
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=0)** - [Narrator] I hope you are able to integrate the error handling that's required in order to ensure that we have a couple of conditions that are met before transferring money from one account to another using our stored procedure.
>
> **[0:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=17)** Let's go through how I would approach the solution.
>
> **[0:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=20)** Now the first few lines inside of the study file just set it up again in case you weren't following along with the previous challenge, but I already have all of this, I'm just going to select everything from the Bank Accounts table, just so we can see where we're at.
>
> **[0:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=31)** And so right now we have our three accounts and the balance after the transfer that we did at the end of the last challenge.
>
> **[0:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=37)** So account one has 50, two has 200 and three has $350.
>
> **[0:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=42)** So it's got to squeeze this down to the bottom and we'll get that out of the way.
>
> **[0:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=46)** So what we want to do is start working with this procedure and add in some error handling.
>
> **[0:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=53)** Now in the solution that I came up with at the end of the last chapter was to use this 'set xact abort on' in order to do kind of a rudimentary error handling.
>
> **[1:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=62)** And we have a much better approach to doing that now, so I'm actually going to get rid of that line there and the same line on line 32 and that just turned the setting on and then back off again at the end.
>
> **[1:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=74)** So, inside of our procedure, we want to wrap everything that I've already written here.
>
> **[1:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=78)** The begin transaction all the way down to commit transaction.
>
> **[1:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=81)** We want to wrap that inside of a BEGIN TRY block.'
>
> **[1:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=86)** So type 'BEGIN TRY' at the beginning and 'END TRY' at the end.
>
> **[1:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=91)** And then we also know that I need a 'BEGIN CATCH' and an 'END CATCH' at the end of this, that sets up the two blocks that we're going to put in here and let me just tab this over, just to get it a little bit clearer.
>
> **[1:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=106)** So, let's focus on setting up the conditions up here at the very top and then we'll come back down and fill in the 'CATCH' block at the end.
>
> **[1:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=114)** So, the three things that we need to do, let's give myself some more room here, I'm just going to write some notes in here.
>
> **[1:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=119)** The three things that we need to do, we need to make sure that the sending account exists, we need to make sure that the receiving account exists.
>
> **[2:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=131)** and we also wanted to make sure that the sending account has enough money.
>
> **[2:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=136)** So those are the three things that we want to test for and so now it's just a matter of figuring out the code to actually perform these tests.
>
> **[2:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=144)** And we could do this with IF statements we can check using IF and then if a condition is met, then we could generate an error.
>
> **[2:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=154)** So let's say 'BEGIN IF' and the first thing I want to do is make sure that the sending account exists.
>
> **[2:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=160)** And one way we can do that is to make a selection against the table.
>
> **[2:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=167)** So let's see, let's select account ID.
>
> **[2:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=172)** May refer back up here to the very top we have our table.
>
> **[2:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=176)** Okay, so the first column was account ID.
>
> **[2:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=178)** So select account ID from the table, which was dbo.BankAccounts WHERE the account ID is equal to... And we're checking if the sending account exist, so that's our FromAccount parameter that we're passing in through the procedure.
>
> **[3:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=194)** So, I'm going to say is equal to @FromAccount.
>
> **[3:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=198)** So this is going to either return a number, the account ID if the number exists, and if the FromAccount doesn't exist in that table, this is going to return a NULL value.
>
> **[3:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=211)** In fact, we could just test this out, so if I say select account ID from dbo.BankAccounts WHERE account ID equals one, if I were just to run this, just select that statement, I get back one obviously.
>
> **[3:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=222)** If I change this to account three and run this, I get back account three.
>
> **[3:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=228)** Now, if I change this to a number that doesn't exist, for instance, account 10 and run this again, I don't get anything back.
>
> **[3:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=237)** And that's because this is still a valid select statement is just there are no accounts where the account ID is equal to 10, so it actually returns a NULL value.
>
> **[4:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=245)** So, what we can do is use that fact and check and see if we're getting a NULL back out of this.
>
> **[4:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=252)** So I can say is NULL.
>
> **[4:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=254)** So that's one way so if all of this is NULL, then we know that that account doesn't exist.
>
> **[4:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=262)** And knowing that we can throw an error.
>
> **[4:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=266)** So we'll throw an error and here we get to pick a number anything above 50,000, I'm just stick to 51,000 and we can send a custom error message.
>
> **[4:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=276)** So this error indicates that the sending account does not exist.
>
> **[4:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=281)** So that's the end of our text message and then we also need the status which is almost always going to be one.
>
> **[4:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=286)** So that finishes our test, and so we need to end the 'if' statement.
>
> **[4:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=292)** And that is our first test, so we'll make sure the sending account exists.
>
> **[4:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=295)** We're going to test that using this IF statement.
>
> **[4:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=299)** So that should finish that first one.
>
> **[5:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=301)** The next thing we need to do is make sure that the receiving account exists.
>
> **[5:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=304)** That's basically going to be the same thing.
>
> **[5:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=305)** It's the same question, We're just checking instead of the FromAccount, we're checking the existence of the 'ToAccount.
>
> **[5:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=313)** So I could just copy all of this out and then paste it in.
>
> **[5:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=316)** Change this over here to ToAccount and let's throw a different error just so we can customize the error message for each one.
>
> **[5:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=326)** So I can say the receiving account does not exist.
>
> **[5:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=330)** So that's one way we could do it.
>
> **[5:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=332)** Another way that we could do this is to check if a row exists.
>
> **[5:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=337)** So instead of checking if it's no, when we do this select statement, we could say 'BEGIN IF' 'NOT EXISTS' and then run the select statement.
>
> **[5:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=352)** So if this doesn't return anything, it's no, but it also doesn't exist.
>
> **[5:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=356)** So 'BEGIN IF' 'NOT EXISTS,' will do the exact same thing.
>
> **[6:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=360)** So that's another way that we could approach that same sort of question.
>
> **[6:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=364)** And that should answer the second condition.
>
> **[6:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=367)** So if that doesn't exist, then we'll throw error 52,000 and that error just says, "The receiving account doesn't exist."
>
> **[6:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=374)** And the last thing we need to do is figure out if the sending account has enough money or enough funds.
>
> **[6:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=381)** So let's do another IF statement here, 'BEGIN IF', and if... let's say we need to check the balance of the sending account.
>
> **[6:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=389)** So I can say, let's do another select statement.
>
> **[6:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=392)** So select the side with the balance column.
>
> **[6:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=394)** I believe it's called balance, let's double check that.
>
> **[6:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=397)** Yes, out in the table, the table was created with a balanced column for that.
>
> **[6:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=401)** So we'll select 'balance' FROM dbo.BankAccounts, WHERE the account ID is equal to.
>
> **[6:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=410)** And we're checking the account of the From idea.
>
> **[6:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=413)** I really don't care what the balance of the ToAccount is it could be zero when we start this.
>
> **[6:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=417)** It doesn't matter what the ToAccount is.
>
> **[6:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=419)** So we're only checking the FromAccount here.
>
> **[7:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=422)** So we'll check the balance of the FromAccount, and I want to make sure that it has enough money to transfer out.
>
> **[7:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=429)** So if we subtract the amount that we want to to transfer out, so if I say, minus add amount, if that is... and I will make sure that it's greater than zero, actually I want to check if it's less than zero.
>
> **[7:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=445)** So if this amount, that's in the account currently, minus the amount that we're transferring out becomes less than zero, Then we want to throw the error, we don't want to allow that to continue.
>
> **[7:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=457)** So we'll say less than zero and if that's the case, then we'll throw another error.
>
> **[7:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=464)** And remember this is 53,000 and the error message can say "The standing account balance "is too low to perform the transfer."
>
> **[7:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=475)** And then we need to pass them the status.
>
> **[7:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=479)** Alright, so there's our throw there is our error number there is our custom message and our status.
>
> **[8:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=484)** So that finishes the third check.
>
> **[8:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=487)** And I think that finishes the three verifications that we need to do.
>
> **[8:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=493)** So if any of these are true, then it's going to throw an error and we're going to jump out of this whole thing and come into the BEGIN CATCH block.
>
> **[8:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=503)** We're not even going to get to this portion where we're actually updating rows inside of the data table.
>
> **[8:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=511)** And if all of these are false so if none of these trigger up, all of them are false, then we'll get down to here and we'll actually perform the transfer.
>
> **[8:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=519)** And at the end of the transfer, then we'll commit the transaction.
>
> **[8:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=522)** But if any of these are true, we skip all of this.
>
> **[8:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=525)** We don't commit the transaction, we jump into the BEGIN CATCH block.
>
> **[8:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=529)** At this point, we want to roll back the transaction, even though we really haven't done anything.
>
> **[8:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=533)** but because we are opening a transaction we're beginning a transaction up here we want to make sure that we roll back the transaction at some point.
>
> **[9:03](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=543)** So roll back the transaction and then let's also print a message just so we know that something happened, let's print 'ERROR' And we might as well pass in since we coded in some custom messages up here in our throw lines.
>
> **[9:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=560)** We can just use that error message and send that back to the messages window.
>
> **[9:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=564)** Alright, so we'll print the word 'ERROR': and then a space And then the text that we put in up here.
>
> **[9:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=571)** and that should finish everything.
>
> **[9:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=573)** So let's highlight all of this.
>
> **[9:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=575)** We'll start up here, a little higher create or alter procedure, and we'll scroll all the way down to line 52, or have that go command at the very end.
>
> **[9:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=589)** Execute that.
>
> **[9:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=590)** Oh, let's see, I got a syntax error here, so let's see what am I missing END CATCH, turn the silicone there and try to BEGIN CATCH and CATCH Oh, I'm missing an END after these IF statements, there we go.
>
> **[10:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=609)** Alright, so each 'BEGIN IF' should have its own 'END', 'BEGIN IF' 'END', 'BEGIN IF' 'END'.
>
> **[10:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=614)** Alright, let's try that now.
>
> **[10:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=619)** Alright, we've created our store procedure, we've altered the store procedure anyway.
>
> **[10:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=623)** Alright, let's test it out first let's select everything from bank accounts.
>
> **[10:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=627)** Alright, so there's our starting balance again, let's transfer some money just to make sure that it works, so I'm going to transfer from account number two to account number three will transfer $50, execute that.
>
> **[10:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=639)** Alright, everything works let's select everything out of the bank account table again and great, so now account number two, was it 200 now 150, number three was at 350 and is now four, so it's working when we send it all valid inputs.
>
> **[10:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=653)** So let's start testing out invalid inputs let's transfer out of account number 10, to which is an account that doesn't exist and execute it oh, I get my error It says 'The sending account does not exist."
>
> **[11:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=665)** Alright, that's exactly what I wanted to see.
>
> **[11:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=668)** Let's test this out with the two accounts that doesn't exist and there we go okay, the receiving account does not exist great and let's verify what our Maths are again.
>
> **[11:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=682)** Okay, so account number one only has $50, so if I try and transfer from one, two, three, but I try and transfer a $100 this should give me my last error that says the sending account balance is too low to perform the transfer, so everything is working great.
>
> **[11:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=700)** We've got our error handling built in that looks, for some common mistakes or some common errors that might happen with our transfer.
>
> **[11:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/solution-add-error-handling-to-a-stored-procedure?u=76281980&t=707)** and it accounts for those it passes everything into the CATCH block and so we can get custom messages sent to our end user and it doesn't affect anything in the database if an error is encountered, so that is my solution to the challenge and I'll go ahead and save all of this, so that you can review it if you'd like as 05_06_Challenge-Complete.sql

> [!info]- Semantic Content
>
> **Code Keywords:** let (26), throw (9), this, (5), this. (4), pass (2)
> **Env Vars:** begin (13), catch (9), end (7), null (5), try (3)
> **CLI Commands:** make (11)
> **SQL:** where (3)
> **File Paths:** 05_06_challenge-complete.sql (1)
> **UI Navigation:** select the (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)


### 6. Data Type Conversions and NULLs

#### Implicit data type conversions
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=0)** - [Instructor] When building programmability into your SQL Server databases, it is important to keep the data types that you're working with in mind.
>
> **[0:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=8)** When you pull data from a table, save the values into a parameters variables and then combined values together in a routine, all of those data types must be compatible, or you'll get inconsistent results.
>
> **[0:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=21)** SQL Server tries its best to automatically convert different data types into a compatible type for you.
>
> **[0:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=27)** This is a process called Implicit Conversion.
>
> **[0:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=31)** We can see how this works by setting up two variables.
>
> **[0:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=34)** I'll call them VAR 1 and VAR 2.
>
> **[0:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=37)** The first one will get the integer data type, and the second one will be character data.
>
> **[0:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=43)** I can then give each variable a value.
>
> **[0:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=45)** The integer the number one and the character, the text two.
>
> **[0:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=51)** Now even though these are two different datatypes, when I add them together in this select statement, that adds VAR 1 and VAR 2 together, SQL Server can still figure out what I probably intended.
>
> **[1:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=62)** Let's go ahead and run this and we'll see that SQL Server, correctly adds one and two to get the result three.
>
> **[1:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=69)** Now I'm emphasizing the word probably here because, the statement that I just executed is kind of ambiguous.
>
> **[1:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=76)** SQL Server is guessing that I want to add these two numbers together, but the plus symbol can also be used to join text strings.
>
> **[1:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=84)** If I instead wanted the character one, joined with the character two and return 12, then I need to override SQL Servers implicit conversion, and be more explicit about what I want to happen.
>
> **[1:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=97)** You can do that with two different functions and I've got those listed online 13 and 14.
>
> **[1:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=103)** These functions are convert and cast.
>
> **[1:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=106)** Both of these do exactly the same thing.
>
> **[1:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=108)** With the convert function, you specify the new data type and then the expression that you want to convert.
>
> **[1:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=115)** The result would look something like this.
>
> **[1:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=116)** Let's go ahead and comment outline number 10 and uncomment line 13.
>
> **[2:01](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=121)** Now I can run all of this again, and we'll see that I get the result 12.
>
> **[2:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=127)** That's because it's treating the one and the two as text strings now and just joining them together.
>
> **[2:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=132)** Cast function is almost identical to convert, but it lists the arguments in the reverse order.
>
> **[2:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=138)** First, you have the expression that you want to convert, in this case, our variable VAR 1, and then we have the as keyword, followed by the data type that you want it to be turned into.
>
> **[2:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=148)** To see what that one looks like, let's go ahead and comment line 13 out, and I'll uncomment line 14.
>
> **[2:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=154)** Once again, I'll run all of this, including the declarations of the variables, execute it and we get the exact same result.
>
> **[2:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=161)** So either way, SQL Server is doing the same thing.
>
> **[2:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=164)** It turns one data type into another.
>
> **[2:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=167)** Now that both variables are being treated as text, SQL server will correctly concatenate the text strings instead of trying to perform a mathematical operation.
>
> **[2:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=175)** So it's important to understand when implicit data conversion is taking place in your routines, so that you can be sure that the values are being treated as you intend.
>
> **[3:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=185)** This is especially important when pulling data from external sources, such as other database platforms or external spreadsheets, since there might not be a one to one conversion, between the data types of the external resource and the data types that SQL Server uses.
>
> **[3:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=202)** When in doubt, it's a good idea to error on the side of caution and be specific about what it is that you want to do.
>
> **[3:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=209)** Now when implicit conversion is allowed to take place, you'll want to keep data type precedence in mind.
>
> **[3:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=215)** Precedence describes the order that data types will be converted to.
>
> **[3:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=220)** For instance, if I create two new variables, on lines 19 and 20, I'm going to set one to the integer data type and the other one to a decimal data type.
>
> **[3:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=229)** Then I'll give these a value, the integer will be set to 1000 and the decimal set to 500.5.
>
> **[3:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=236)** Now if I add both of these together, what's going to happen?
>
> **[4:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=240)** Well, if both of these were converted to an integer, we'd lose precision in the calculation.
>
> **[4:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=244)** Since the fractional component of the decimal value will get dropped or rounded off.
>
> **[4:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=250)** So instead, SQL Server elevates the integer value up to a decimal data type and then performs the mathematical operation.
>
> **[4:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=259)** This is how we get the correct answer of 1500.5.
>
> **[4:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=263)** During implicit conversion, data types are always elevated up to the compatible type, never down.
>
> **[4:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=270)** To see the full sequence of data type precedence, take a look at this list at the URL here.
>
> **[4:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=276)** Data types that are at the top of the list, take precedence over data types at the bottom of the list.
>
> **[4:41](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=281)** This can help you visualize that an integer, gets elevated up to a decimal, and a decimal will get elevated up to a float.
>
> **[4:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=289)** Finally, while we're taking a look at the documentation, you might find the chart at this URL helpful to see as well.
>
> **[4:55](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=295)** It shows all of the different combinations of data types to help illustrate when implicit conversion will take place, indicated by the orange circles, and when explicit data type conversion will need to take place, indicated by the blue squares.
>
> **[5:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/implicit-data-type-conversions?u=76281980&t=310)** To read the chart, just find the data type that you're moving from on the left column and then locate the intersection with the data type that you want to go to listed across the top.

> [!info]- Semantic Content
>
> **Code Keywords:** var (5), let (3), type, (2), function (2), override (1)
> **Env Vars:** sql (10), var (5), url (2)
> **CLI Commands:** find (2)
> **Versions:** 500.5 (1), 1500.5 (1)
> **Analogies:** such as (1), for instance (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### Understand NULL values
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=0)** - [Instructor] It's common to misunderstand a null value as meaning zero or nothing.
>
> **[0:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=6)** But that isn't the case.
>
> **[0:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=7)** Null values have special meaning to SQL server.
>
> **[0:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=11)** They represent values that are unknown, missing, or not knowable.
>
> **[0:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=15)** This difference has a big impact when you start trying to compare columns that contain nulls.
>
> **[0:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=20)** For instance, when creating joints between two tables, if the columns and the join clause of a select statement include null values, then you might not actually see all of the rows and the results that you intended to see.
>
> **[0:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=34)** To illustrate how SQL server treats null values, I've set up another pair of variables called variable A and variable B.
>
> **[0:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=42)** Both of these are set to the int data type.
>
> **[0:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=45)** We can set their values on lines eight and nine, and then test the two variables for equality using a case statement.
>
> **[0:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=53)** If variable A is equal to variable B, then the results will say equal.
>
> **[0:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=58)** And if the two variables are not equal, then the results will say not equal.
>
> **[1:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=64)** So right now I have the two variables set to the numbers one and two.
>
> **[1:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=68)** No surprise when I run all of this from line six down to 14, I get the result that one and two are not equal.
>
> **[1:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=75)** But if I change variable B to the number one, and rerun all of this, we'll see it now says equal.
>
> **[1:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=85)** So let's make sense of null values here.
>
> **[1:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=87)** I'm going to change variable B to null.
>
> **[1:30](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=90)** Now I'm comparing the number one to the null value.
>
> **[1:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=94)** Let's run this again.
>
> **[1:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=95)** And it says that they're not equal.
>
> **[1:38](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=98)** And this one makes perfect sense.
>
> **[1:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=100)** But watch what happens when I ask if null is equal to null.
>
> **[1:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=105)** On first glance, it might appear that both of these are equal.
>
> **[1:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=108)** But if I run the statement, SQL server tells me that they are in fact not equal.
>
> **[1:54](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=114)** Now if you take a moment to think about what null represents, this also makes perfect sense.
>
> **[1:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=118)** A value that is unknowable cannot be the same as another value that is also unknowable.
>
> **[2:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=125)** And since join statements and a select query are matching rows from one table that share common values in another table, two rows with null values won't actually be matched up.
>
> **[2:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=136)** The best advice that I have for working with nulls is to avoid them whenever you can.
>
> **[2:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=142)** Instead of creating a table with a column that allows nulls, consider not allowing nulls and providing a default value that is far out of range of any real data.
>
> **[2:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=152)** A temperature measurement anomaly in a report that reads 999 degrees may be preferable to that same anomaly, just being left off the report if it was reported as null.
>
> **[2:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=163)** It's sometimes better to shine a bright light on an error, so that it can be addressed rather than try and hide it.
>
> **[2:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=170)** Here's another example.
>
> **[2:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=171)** In a table that stores an optional birthday column, instead of allowing a null value, you could instead set a default value that puts in January 1st, 1800.
>
> **[3:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=182)** This default value would get added for everybody, unless their actual birthday is provided.
>
> **[3:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=188)** Let's create this table and then insert two people.
>
> **[3:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=191)** Bethany will not have a birthday, but Jim will.
>
> **[3:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=194)** Then also like everything from the birthday's table.
>
> **[3:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=197)** You can see that even though we didn't provide a birthday for Bethany, it automatically put in January 1st, 1800.
>
> **[3:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/understand-null-values?u=76281980&t=204)** Not only are these kinds of wacky values easier to filter out and work with, if they accidentally do show up when you're not expecting them, they'll be much easier to recognize than a null.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case. (1), type. (1), this, (1)
> **Env Vars:** sql (3)
> **CLI Commands:** make (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### The ISNULL function
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=0)** - [Narrator] When you do have null values stored in a table, you can temporarily convert them into different values using the ISNULL function.
>
> **[0:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=8)** The function only has two requirements.
>
> **[0:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=11)** First we have the expression that you want to evaluate.
>
> **[0:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=14)** This is any value or column reference that you want the function to process.
>
> **[0:18](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=18)** After that you specify the value that you want returned if the expression is null.
>
> **[0:24](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=24)** To demonstrate how this works, if you evaluate the expression one and the replacement value 100, then the ISNULL function just returns a one again.
>
> **[0:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=33)** The same thing happens with the word kangaroo.
>
> **[0:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=36)** If I run ISNULL kangaroo 100, it returns kangaroo.
>
> **[0:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=42)** But when the function is given a null value as the expression, then the replacement value kicks in and it gets returned by the function.
>
> **[0:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=49)** So if I run ISNULL and then applied to null, 100, it's going to return 100.
>
> **[0:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=56)** If I run ISNULL applied to null, elephant, then it returns elephant.
>
> **[1:03](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=63)** So that's how the function works.
>
> **[1:05](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=65)** Let's take a look at using it with some data.
>
> **[1:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=68)** In the Wide World Importers database we have a table called purchasing.suppliers, and this gives us some information about the suppliers for the company.
>
> **[1:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=76)** We also have a table called application.delivery methods.
>
> **[1:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=79)** So I'm going to go ahead and select both of these tables so we can see what values are currently stored in these tables.
>
> **[1:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=85)** In the suppliers table that I have here at the top.
>
> **[1:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=87)** Let's go ahead and actually pull this up a little bit so we can see the whole thing.
>
> **[1:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=91)** If we expand this open, we can see that we have a total of 13 different suppliers to work with.
>
> **[1:36](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=96)** The delivery method ID column links over to the delivery method table in order to figure out what method name each supplier uses.
>
> **[1:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=104)** So for instance A.Dadum corporation uses method ID number seven which corresponds to Road Freight.
>
> **[1:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=111)** The problem is, is that some of the suppliers don't have shipping method saved, and you can see that they have null values.
>
> **[1:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=117)** We can use ISNULL to display this information with an actual number.
>
> **[2:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=122)** For instance if I go back up into my script and run this one here on line number 25 through 28, we're using ISNULL applied to the delivery method ID column and returning a number instead of null, in this case number one.
>
> **[2:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=137)** Now when I run it, I don't see the null values, thus I'll get replaced with the number one.
>
> **[2:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=141)** Now we can also use this to make joins to the delivery methods table.
>
> **[2:25](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=145)** Normally the null values would kind of mess things up, and rows would not be returned with a normal inner join.
>
> **[2:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=152)** If I run this select statement on 32 down to 38 where we're just doing inner joins, you'll see that I only get nine suppliers back, and not saying all 13.
>
> **[2:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=162)** You could change this from an inner join to a left join for example, and then re-run it.
>
> **[2:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=169)** This returns us back to all 13 suppliers but we just get nulls for both the delivery method ID and the delivery method name.
>
> **[2:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=177)** Now one way to address this is to use the ISNULL in a join clause.
>
> **[3:02](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=182)** I'm going to switch the from clause back to an inner join, and then in the from clause I can go ahead and use the ISNULL function.
>
> **[3:11](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=191)** We'll apply it to the suppliers.delivery method ID column, and we'll replace our nulls with the number one.
>
> **[3:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=199)** If I run the statement now, you'll see that we get all 13 suppliers and we now have a delivery method name that's supplied in there.
>
> **[3:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=206)** For instance everybody is now defaulting to post when they do not have a delivery method ID.
>
> **[3:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=212)** However, using functions in the join or the where clause of a select query can affect the performance of the database.
>
> **[3:39](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=219)** This is because the query optimizer can no longer use indexes to find the requested columns, and it must pass every row of the table through the function to see if it comes out as a match to the other table.
>
> **[3:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=231)** For small tables it might not be that big of a problem, but for very large tables functions in the join or where clauses should be avoided.
>
> **[4:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=240)** Instead what we can do is just rename the value up in the select clause.
>
> **[4:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=244)** I'll scroll down in the script and I have a demonstration of what that looks like.
>
> **[4:08](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=248)** So instead of using the ISNULL function in the on clause of the select statement, I've moved it up here into the column specifications.
>
> **[4:16](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=256)** We'll also change it over to a left join instead of an inner join.
>
> **[4:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=260)** When I run this query, you'll see that we get identical results to the one that we just ran.
>
> **[4:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=266)** We get all 13 suppliers and that reads post for every delivery method ID that's null.
>
> **[4:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=272)** So that's the ISNULL function.
>
> **[4:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/the-isnull-function?u=76281980&t=274)** It's easy to use since it only has two arguments, but just watch out where you apply it and avoid the temptation to place it in the where or join clauses of your queries.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), let (2), switch (1), pass (1)
> **Env Vars:** isnull (11)
> **Analogies:** for instance (3), for example (1)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** scroll down (1)
> **Warnings:** watch out (1)
> **Speakers:** - [narrator] (1)

#### Merge rows with COALESCE
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=0)** - [Instructor] The coalesce function provides another useful way for working with and replacing null values that occur within your data.
>
> **[0:07](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=7)** It takes a slightly different approach from the is null function that we just looked at.
>
> **[0:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=12)** Is null, you'll recall, takes a pair of parameters.
>
> **[0:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=15)** The first parameter is evaluated, and if it returns a null, then the second parameter is returned instead.
>
> **[0:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=22)** Coalesce on the other hand only takes expression parameters, but it could take a whole lot of them.
>
> **[0:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=27)** One expression, two expressions, three expressions, as many as you want.
>
> **[0:32](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=32)** The function will look at each expression in sequence and it'll return the first one that is not null.
>
> **[0:38](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=38)** So if we apply it to the function here, coalesce null, null kangaroo elephant, if I execute this, it returns kangaroo.
>
> **[0:46](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=46)** The first non null value.
>
> **[0:49](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=49)** If we pass it for null functions by running line number 12 here, well this time we get an error.
>
> **[0:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=56)** That's because SQL server requires at least one non null constant.
>
> **[1:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=60)** This means we need to either provide a reference to a table column or hard code a texturing or a number or something like that for at least one of those parameters.
>
> **[1:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=70)** Okay, let's apply this to some data.
>
> **[1:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=73)** Let's scroll down here to line number 14.
>
> **[1:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=75)** In the script, we can get the exact same results from coalesce that we saw from is null.
>
> **[1:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=82)** Here we're looking at the delivery method ID, again, for some suppliers, the is null function is taking the delivery method ID, and if it's null, it'll return a one.
>
> **[1:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=93)** The coalesce function is evaluating the first expression delivery method ID, and if that's null, it'll move to the second expression, which I've hard coded as one there.
>
> **[1:43](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=103)** So it will effectively return a one for the same number of rows.
>
> **[1:47](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=107)** Let me highlight lines 14 to 19 and press execute.
>
> **[1:51](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=111)** You can see we get the exact same data in both of these columns.
>
> **[1:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=116)** Anywhere the delivery method ID is null.
>
> **[1:57](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=117)** It returns a one in both cases, but that's the extent of what the is null function can do.
>
> **[2:03](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=123)** It only takes one expression to evaluate, and it only has one possible value to return.
>
> **[2:09](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=129)** Coalesce, on the other hand, could get built out to handle many more conditions.
>
> **[2:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=134)** In fact, coalesce is a shortcut for a much longer case statement.
>
> **[2:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=139)** I've got expression of those down here on lines 24 down to 30.
>
> **[2:23](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=143)** If the first expression is not null, then it returns that expression.
>
> **[2:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=147)** If it is, it evaluates the second expression and returns it if it's not null and so on for as many expressions as you give it.
>
> **[2:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=155)** Going back to the elephant and kangaroo query example, we have this case statement instead.
>
> **[2:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=160)** This is how it actually gets rewritten by the SQL query engine.
>
> **[2:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=165)** The first two conditions were hard coded to nulls.
>
> **[2:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=168)** Then we had kangaroo and elephant.
>
> **[2:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=170)** If I execute this case statement, you'll see we get the exact same results as we did a moment ago in the returns of value, kangaroo, the first non null value it came across.
>
> **[2:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=179)** This gives us an opportunity to merge several columns together when they contain null values.
>
> **[3:04](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=184)** Let me scroll down here to the next example.
>
> **[3:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=186)** Starting on line 42 in the stock items data.
>
> **[3:10](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=190)** We have some information on color, brand and sizes for these products, but as you can see, most of the products don't have all three of those values.
>
> **[3:19](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=199)** Some of 'em just have a color name.
>
> **[3:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=201)** Some of 'em just have a brand and some just have a size or some combination of all three columns.
>
> **[3:27](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=207)** In the next version of this query, starting on line number 51, I'm using the coalesce function to merge those three columns together.
>
> **[3:34](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=214)** Column name, brand and size into a single column called color brand size.
>
> **[3:40](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=220)** When I execute this query, it adds in that additional column over here on the right.
>
> **[3:45](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=225)** For any products that doesn't have any of that information, it still returns a null value.
>
> **[3:50](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=230)** If we have a color though, it'll report that.
>
> **[3:53](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=233)** If we don't have a color, but we do have a brand, for instance, down here on line number 61, we have an example of that.
>
> **[3:59](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=239)** It returns the brand North Wind here and for any products that don't have a color or a brand, but do have a size, for instance, down on line number 118, I have an example of that.
>
> **[4:12](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=252)** It returns that size instead.
>
> **[4:15](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=255)** With this method, we wind up with a column that has far fewer null values than any of the other three original columns.
>
> **[4:22](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=262)** So coalesce is good for these kinds of situations when you want to merge values from multiple columns.
>
> **[4:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=268)** However, a case statement can provide more flexibility if you need it.
>
> **[4:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=273)** It's just much longer to write out.
>
> **[4:35](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=275)** Let's take a look at the query I have starting on line number 62 and coming all the way down to the end at 78.
>
> **[4:42](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=282)** This time I'm adding in the marketing comments and I want to provide some descriptive information for a catalog based on the information that we have available in the case statement.
>
> **[4:52](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=292)** If there is a marketing comment, we'll prioritize that in the catalog.
>
> **[4:56](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=296)** Otherwise, I'll say what the color is.
>
> **[4:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=298)** If we don't have the color information, I'll say what the brand is, and if we don't have that either, I'll say what the size of the product is.
>
> **[5:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=306)** If we don't have any of that information at all, we'll be forced to return a message that says, no information available.
>
> **[5:13](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=313)** Let's execute this entire query and see the results.
>
> **[5:17](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=317)** Over here on the far right we have our catalog description column.
>
> **[5:20](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=320)** This contains the brief description based on the best information that we have available in our data set.
>
> **[5:26](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=326)** Sometimes that'll be the marketing comment.
>
> **[5:28](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=328)** Sometimes there won't be any information at all.
>
> **[5:31](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=331)** Let me scroll down here a little bit.
>
> **[5:33](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=333)** Sometimes we'll just have color information scrolling down a little bit farther.
>
> **[5:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=337)** We'll find some pieces of information where we just have a size and also some information that just has the brand.
>
> **[5:44](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=344)** Now, because of the concatenation of the text, color is, brand is, and size is, along with the data, These three when lines will never evaluate to null even when there is no color, brand or size data available.
>
> **[5:58](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=358)** So we couldn't have gotten the exact same output with the coalesce function by itself.
>
> **[6:03](https://www.linkedin.com/learning/program-databases-with-transact-sql/merge-rows-with-coalesce?u=76281980&t=363)** So those are just a couple of additional ways that you can work with null values in your database and make use of some of the built-in functionality for filling in those gaps in the data when it's appropriate.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), let (7), this, (1), pass (1), return. (1)
> **UI Navigation:** scroll down (3)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** sql (2)
> **Definitions:** is a  (2)
> **Analogies:** for instance (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/program-databases-with-transact-sql/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-databases-with-transact-sql/next-steps?u=76281980&t=0)** - [Narrator] Allow me the honor of being the first to congratulate you on reaching the end of this course.
>
> **[0:06](https://www.linkedin.com/learning/program-databases-with-transact-sql/next-steps?u=76281980&t=6)** I'd like to thank you for joining me as we explored some of the many programming capabilities available to you, as you develop databases on SQL server.
>
> **[0:14](https://www.linkedin.com/learning/program-databases-with-transact-sql/next-steps?u=76281980&t=14)** Now, there's always more to learn, so I'd like to leave you with a few course ideas that'll help you continue your journey.
>
> **[0:21](https://www.linkedin.com/learning/program-databases-with-transact-sql/next-steps?u=76281980&t=21)** My SQL Server Database Triggers course focuses entirely on adding automation to your databases in order to help you manage your data.
>
> **[0:29](https://www.linkedin.com/learning/program-databases-with-transact-sql/next-steps?u=76281980&t=29)** Triggers are an extension to the stored procedures that we looked at in this course, and would make a natural next step for extending your knowledge.
>
> **[0:37](https://www.linkedin.com/learning/program-databases-with-transact-sql/next-steps?u=76281980&t=37)** And if you're interested in additional programming topics, look into how you can leverage the R and Python programming languages in my courses on SQL Server Machine Learning Services.
>
> **[0:48](https://www.linkedin.com/learning/program-databases-with-transact-sql/next-steps?u=76281980&t=48)** Until next time I'm Adam Wilbert, and I hope you have a great day.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3)
> **CLI Commands:** make (1), python (1)
> **Code Keywords:** continue (1)
> **Speakers:** - [narrator] (1)


## Path Context

### In [[Software Development Fundamentals]]
← [[Learning Git and GitHub]] | **9 of 10** | [[Developer Career Paths and Certifications]] →

## Appears In

- [[Software Development Fundamentals]]

## Related Courses

_Courses sharing skills:_

- [[Introduction To Transact Sql]] — Transact-SQL (T-SQL)
