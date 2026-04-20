---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: introduction-to-spark-sql-and-dataframes
url: "https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes"
duration_minutes: 114
duration: 1h 54m
level: Intermediate
updated: 4/1/2024
learners: 70428
skills:
  - Apache Spark
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGjxRntuIsp3A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568662046264?e=2147483647&amp;v=beta&amp;t=T3jrCRC7bcGiNBzFTvrHYVcrrIJVn9IMln_Z3FTupAo"
linkedin_topic: Data Science
learning_paths:
  - Advance Your Data Skills in Apache Spark
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/apache-spark
  - skill/sql
status: not-started
created: 2026-04-20
---

![Introduction to Spark SQL and DataFrames](https://media.licdn.com/dms/image/v2/C4E0DAQGjxRntuIsp3A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568662046264?e=2147483647&amp;v=beta&amp;t=T3jrCRC7bcGiNBzFTvrHYVcrrIJVn9IMln_Z3FTupAo)

# Introduction to Spark SQL and DataFrames

> Explore DataFrames, a widely used data structure in Apache Spark. DataFrames allow Spark developers to perform common data operations, such as filtering and aggregation, as well as advanced data analysis on large collections of distributed data. With the addition of Spark SQL, developers have access to an even more popular and powerful query language than the built-in DataFrames API. In this cours

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes) | 1h 54m | Intermediate | 70K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Dan Sullivan]]

## Resources

- Exercise files available

## Skills Covered

- Apache Spark
- SQL

## Table of Contents

### Introduction

#### Apache Spark SQL and data analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/apache-spark-sql-and-data-analysis-21043116?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/apache-spark-sql-and-data-analysis-21043116?u=76281980&t=0)** - [Dan] Apache Spark and SQL are both widely used for data analysis and data science.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/apache-spark-sql-and-data-analysis-21043116?u=76281980&t=5)** Hello and welcome to this course, Introduction to Spark SQL and DataFrames.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/apache-spark-sql-and-data-analysis-21043116?u=76281980&t=10)** In this course, we're going to introduce dataframes, a foundational data structure in Apache Spark, as well as in the widely used Pandas library and Python.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/apache-spark-sql-and-data-analysis-21043116?u=76281980&t=19)** You'll learn about basic operations like filtering and aggregating, using both the Dataframe API and SQL.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/apache-spark-sql-and-data-analysis-21043116?u=76281980&t=26)** You'll also learn more advanced techniques like joining data, eliminating duplicates, and understanding how to work with null values.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/apache-spark-sql-and-data-analysis-21043116?u=76281980&t=32)** We'll also develop techniques for exploratory data analysis, including analyzing time series data, using clustering, and applying linear regression.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/apache-spark-sql-and-data-analysis-21043116?u=76281980&t=41)** So join us now to learn about Apache Spark, SQL, and how to do data analysis with the two of them together.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4), api (1)
> **CLI Commands:** apache (3), python (1)
> **Speakers:** - [dan] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/what-you-should-know?u=76281980&t=0)** - [Instructor] Now, I make some assumptions about background knowledge.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/what-you-should-know?u=76281980&t=3)** I assume that you're familiar with SQL, at least the SELECT statement within SQL.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/what-you-should-know?u=76281980&t=8)** We'll be using that quite a bit and I won't go into a lot of introductory comments about the structure of SELECT statements.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/what-you-should-know?u=76281980&t=14)** I also assume you're familiar with Python programming or at least able to read Python code.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/what-you-should-know?u=76281980&t=19)** And then finally, I assume you're comfortable working with the command line, in particular, navigating between directories, running commands and using an editor.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), select (2)
> **CLI Commands:** python (2), make (1)
> **SQL:** select (2)
> **Code Keywords:** finally, (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Spark DataFrames

#### Introduction to DataFrames
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=0)** - [Instructor] In this course we'll be using Spark, which is a platform for distributed data processing.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=6)** And it's particularly well-suited for dealing with very large data sets, such as data sets that are so large they don't readily fit within the memory or capacity of a single server.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=16)** Spark has a modular architecture.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=19)** There's the core platform, which is called Apache Spark Core.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=22)** And then there are a number of modules, which run on top of the core platform.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=27)** We're going to talk mostly about Spark SQL.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=30)** In the last section of the course, we'll also look at a couple of machine learning libraries.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=35)** Spark Streaming and GraphX are other modules in the Spark architecture, but they're outside the scope of this course.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=41)** Now, Spark supports multiple languages, including Scala, Java, Python, and R.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=48)** We'll be using Python here.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=50)** We are particularly interested in a data structure called DataFrames, and DataFrames are basically sets of data that are organized into columns.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=59)** The columns have names, and the rows have a schema.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=63)** So in this way, they're very similar or analogous to tables in relational databases.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=68)** Here's an example of some data in a DataFrame.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=71)** In this case, we have time series data.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=74)** And that means we have a date time associated with each row, and then we have certain measurements that were taken at that particular time.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=83)** Now this time series data shows some basic performance monitoring data.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=87)** For example if you were monitoring a server, you might want to know its CPU utilization, the amount of free memory, and the number of sessions connected to a particular server.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=97)** And you'd also want a server ID.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=99)** And that's the kind of data that we have in this example, and we'll be seeing more of this data in upcoming videos.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=105)** Now, another thing we want to keep in mind, is that DataFrames have a specific structure.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=110)** So again, like relational database tables, there's a formal structure.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=114)** And here is the structure, or schema, for the time series data we just saw.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=119)** And like with database tables, we can have a mix of data types.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=123)** In this case, we have doubles, which are a type of floating point.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=127)** We have strings for the date time.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/introduction-to-dataframes?u=76281980&t=129)** And we have some logs, for example the server ID, and the counts.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), such as (1), analogous to (1)
> **CLI Commands:** python (2), apache (1)
> **Code Keywords:** case, (2)
> **Env Vars:** sql (1), cpu (1)
> **Definitions:** is a  (1), is called (1)
> **Cross-References:** in the last (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### SQL for DataFrames
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=0)** - [Instructor] There are a couple of different ways of working with DataFrames.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=3)** One way is to use the DataFrame API.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=6)** And basically that is structured around using methods on DataFrame objects.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=11)** For example, let's assume we have a DataFrame called df for short.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=16)** There is a method on the DataFrame object called select.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=19)** And I can select a column by putting the column name in double quotes, and passing that to the select method.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=26)** So in this example, I have a DataFrame called df, I'm calling the select method, and I'm asking for the CPU utilization column.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=35)** Now I also want to display the results, so I use the .show method.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=40)** Now, like in SQL, you can do things like group by a particular column.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=44)** So in this example, I have a DataFrame called df, I'm applying the group by method, and I'm telling PySpark that I want to group by the server ID.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=53)** And after I do the grouping, I'd like to do a count, so I'd like to count the number of rows in each group.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=60)** And then I'd like to show the results.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=62)** So these are similar to the kinds of things you can do with a SQL statement.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=66)** And that's the second way of working with DataFrames.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=69)** And that's by using Spark SQL.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=71)** Now, Spark SQL allows you to enter SQL queries, which are executed on DataFrames.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=77)** And those DataFrames are registered as tables.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=81)** So here's an example.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=82)** We have an explicit string that says, select CPU utilization from a table called utilization.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=89)** And we pass that to a function called spark.sql.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=92)** Here's another example.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=94)** This is similar to what we saw in the previous slide.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=97)** Here's a select statement that returns the count of the number of rows in each group where a group is grouped by the server ID.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=106)** So you have the option when working with the DataFrames to use a more object oriented approach, using methods and functions on the objects, or you can use SQL, by passing in strings of select statements.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sql-for-dataframes?u=76281980&t=120)** We'll be using both in this course.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6), cpu (2), api (1)
> **Code Keywords:** let (1), pass (1), function (1)
> **Analogies:** similar to (2), for example (1)
> **File Paths:** spark.sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Installing Spark

#### Install Spark
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=0)** - [Instructor] Okay, let's download Apache Spark.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=2)** Now, on this page we can download Apache Spark and it's a couple step process.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=7)** First thing we need to do is choose a Spark release.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=10)** There are currently two releases available, 3.50 and 3.42, and this will change over time.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=16)** I'm just going to select the latest version and then there's also a package type and there are several different package types.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=24)** I'm going to select the one that is enabled by default and those two options, when we choose the Spark release and the package type, that will provide us then with a link to download a particular version of Apache Spark, and we can just click on the download.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=41)** And so what happened was I downloaded a G-zipped file which contains Apache Spark and I double clicked on it, or when I clicked on it after it downloaded, that triggered an unpacking or an unzipping of that file, and now I have a folder called Spark 3.5.0 bin Hadoop 3.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=62)** That's a pretty long-winded name so I'm going to rename this simply to Spark.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=66)** And let's take a look inside Spark.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=69)** What we'll see is that we have a bin directory and in the bin directory we have commands like Py Spark and Spark Shell so that's where all of our commands are located.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=79)** Now I want to put Spark into my home directory, which is simply called Dan, so I'm going to move it over there.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=85)** And this I no longer need, so I'll move that to the trash.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=88)** And so now what I've done is I have placed Spark into my home directory and I'm now going to go to a terminal window and I'm going to print my working directory and I'm in my home directory, so I should be able to CD into Spark and list, and yep, I see this looks like the Spark distribution.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=107)** I CD into bin, I should see the commands.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=111)** Okay, so we have basically installed the software we need to run Spark at this point.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=116)** One other thing I'd like to do is set up some environment variables for use with Spark and with Py Spark.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=122)** So to do that I am going to edit a file that's in my home directory called Bash Profile.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=128)** If I do a CD back to my home directory using the tilde shortcut.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=133)** And if I do a list on Bash profile, I'll see that I have a Bash profile and that file I've opened in an editor.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=144)** And so this Bash profile currently just has some information about how to set up my Anaconda environment, which I use for Python.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=152)** What I'd like to do is add some environment variables to make it easier to work with Py Spark and with Spark.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=161)** Now I have provided in the exercise files environment variables.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=166)** And so what I'm going to do is simply copy the environment variables from the file that I've shared.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=172)** It defines four environment variables for Spark Home.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=176)** It updates the path.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=177)** So the path is probably already defined, but it adds Spark home to the path.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=181)** Also, it defines variables for Py Spark driver Python, and for a Py Spark driver Python options.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=188)** So I'm going to simply copy that over to my Bash profile and I'll save the Bash profile.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=196)** Now if I go back to my home directory and I'll just clear the screen to make it a little easier to see and I'll just cat or catalog my Bash profile.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=206)** I want to make sure I have everything.
>
> **[3:29](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=209)** Yep.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=210)** So my four environment variables are defined.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=213)** Now I haven't executed or triggered the Bash profile running, so I'm going to do that with the source command.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=218)** And I'm going to say Bash profile, source Bash profile, that will run that.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=225)** Okay.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=226)** So now what I want to do is see my environment variables and I want to look for anything with Spark in it.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=232)** And so I'm going to use the grip command and I'll look for Spark, the source actually executed.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=238)** So now I have different environment variables to find so that I can work with and run Spark from here.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-spark-21043117?u=76281980&t=245)** So that's how we install Spark, and now we're ready to install Py Spark and we'll do that in our next video.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (4), cd (3), python (3), make (3), cat (1)
> **Tools:** bash (10), terminal (1), anaconda (1)
> **UI Navigation:** select the (2), click on (1), go to (1)
> **Prerequisites:** set up (2), install (2)
> **Code Keywords:** let (2), type, (1)
> **Versions:** 3.50 (1), 3.42 (1), 3.5.0 (1)
> **Cross-References:** go back to (1), next video (1)
> **Exercise Files:** exercise files (1)

#### Install PySpark
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-pyspark-21042116?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-pyspark-21042116?u=76281980&t=0)** - [Instructor] Okay, we've already installed Spark, but we also need to install PySpark and to do that we can use the Python package installer, pip.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-pyspark-21042116?u=76281980&t=9)** So we can save pip, install PySpark and this will give us the Python environment that we will use to work with Spark.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-pyspark-21042116?u=76281980&t=21)** Now this can take a few minutes depending on the speed of your connection of course.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-pyspark-21042116?u=76281980&t=24)** So we'll just let this run through.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-pyspark-21042116?u=76281980&t=27)** So it's gone through the build and now we have successfully installed PySpark.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/install-pyspark-21042116?u=76281980&t=31)** So that's really all there is to PySpark so now we're ready to actually get going and start working with Spark and PySpark.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), pip (2)
> **Prerequisites:** install (2)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Using Jupyter notebooks with PySpark
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=0)** - [Instructor] Now let's install Jupyter Notebook and to do that, we open a terminal and then we enter the command $ pyton3 -m pip install jupyter.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=13)** Now I already have it installed, but if you don't, then this would download and install the Jupyter files for you.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=20)** Okay, let's work with PySpark.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=22)** So I've opened a terminal window and I've navigated to my working directory, which in this case, is in my home directory under LinkedIn Learning and I simply call it Spark SQL.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=30)** I can start PySpark by typing the PySpark command and this will start Jupyter Notebook for me and you'll notice when Jupyter Notebooks open, it lists the contents of the directory, so there are some data files and some IPYNB files.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=48)** IPYNB is a suffix used for Jupyter Notebooks and that comes from an earlier version of Jupyter Notebooks which were called iPython Notebooks.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=58)** That's why it's called IPYNB.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=61)** What I would like to do is just show you what a basic Jupyter Notebook looks like.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=65)** So I'm going to mouse over to the upper right and I'm going to click on the new button and I'm going to select Python 3.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=71)** Now, Jupyter Notebooks also work with Scylla, so if you have Scylla installed, you might see it in the list.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=77)** If you don't see Scylla as an option, that's not a problem.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=81)** We're only going to be working with Python 3.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=83)** So I'm going to create a Python 3 notebook.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=85)** What you'll notice is that Jupyter Notebooks work with the basic concept of a cell and this is where you can type in a command or actually multiple commands.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=94)** For example, let's do a simple arithmetic expression.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=97)** Let's add 2 plus 3 and I'm going to hit shift, return, and that executes.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=102)** Now I can also enter multiple commands.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=104)** I could enter 2 plus 3 and then hit return and now I can type in another command like print("Hello Spark") and when I hit shift enter, it'll execute and it'll show the output of the last command.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=119)** Now these two cells that I have worked with are code cells.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=123)** Sometimes, it helps to have documentation or embedded comments in your notebooks and for tht, we can change the type of cell that we're working with by navigating up to the top of the up menu bar and then clicking in the code window and selecting markdown.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=139)** And here we can simply type in documentation or notes or anything else we'd like.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=144)** So for example, this is an example of a comment in a Jupyter Notebook
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=155)** and when I hit shift enter, it treats it as a comment and so it just prints it.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=161)** It's not an actual piece of executable code, but now I have a cell and you'll notice here at the top, this cell the code, so I can enter some other piece of code.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/using-jupyter-notebooks-with-pyspark?u=76281980&t=171)** So for example, I could enter 8 divided by 4 and execute and it'll print the output, so that's the basics of working with a Jupyter Notebook.

> [!info]- Semantic Content
>
> **Tools:** jupyter (12), terminal (2)
> **Code Keywords:** let (4), case, (1), return, (1)
> **CLI Commands:** python (3), pip (1)
> **Env Vars:** ipynb (3), sql (1)
> **Versions:** python 3 (3)
> **Analogies:** for example (3)
> **Prerequisites:** install (3)
> **Definitions:** is a  (1), is an  (1)


### 3. Getting Started with Spark DataFrames

#### Set up a Jupyter notebook
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/set-up-a-jupyter-notebook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/set-up-a-jupyter-notebook?u=76281980&t=0)** - [Instructor] All right, I have opened a terminal, and I've navigated to my working directory, which is just in my Spark SQL directory, I've created one called work.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/set-up-a-jupyter-notebook?u=76281980&t=8)** And I'll just list the files, showing it's empty right now.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/set-up-a-jupyter-notebook?u=76281980&t=12)** So now I'm going to run PySpark, this will start a Jupyter notebook for me.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/set-up-a-jupyter-notebook?u=76281980&t=18)** Now because the directory's empty, I don't have any notebooks here, so I'm going to create a new notebook, and I'm going to use Python3, and the first thing I want to do is load some data.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/set-up-a-jupyter-notebook?u=76281980&t=29)** Before I can start working the data, I need to do a little setup work.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/set-up-a-jupyter-notebook?u=76281980&t=33)** First thing I need to do is import the PySpark SQL package from pyspark.sql, I want to import the one thing that I needed for this example, is called SparkSession, so let's load that.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/set-up-a-jupyter-notebook?u=76281980&t=49)** Now I want to actually create a Spark context, and that's basically a pointer to a data structure that represents the cluster and allows me to send commands to the cluster and receive information back.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/set-up-a-jupyter-notebook?u=76281980&t=61)** So to do that, I'm going to create a variable called spark, then I'm going to create a SparkSession using the builder, and a method called getOrCreate.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/set-up-a-jupyter-notebook?u=76281980&t=75)** And now if we evaluate spark, we'll get some information, basically some information, for example we're using Spark version 2.4, and that we're running in the PySpark shell.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/set-up-a-jupyter-notebook?u=76281980&t=85)** So that's what we would expect.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/set-up-a-jupyter-notebook?u=76281980&t=88)** Now I've set up a data path for myself, so I'm going to define data path as a variable, and that's simply going to be a string, which points to my working directory for data, and that's under users/danielsullivan/LinkedIn_Learning/...
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/set-up-a-jupyter-notebook?u=76281980&t=112)** Now, you should use whatever directory you saved your exercise files to, and in particular the data files that were in the exercise folder.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2)
> **Tools:** terminal (1), jupyter (1)
> **Prerequisites:** setup (1), set up (1)
> **File Paths:** pyspark.sql (1)
> **CLI Commands:** python3 (1)
> **Code Keywords:** let (1)
> **Code Identifiers:** getorcreate (1)
> **Versions:** version 2 (1)

#### Load data into DataFrames: CSV Files
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=0)** - [Instructor] First thing I'm going to do is load a CSV file.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=3)** And I have a file called location_temp, which is a time series file which contains locations of sensors and the temperatures taken at particular periods of time.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=12)** So I'm going to create another variable called file_path, which is equal to my data_path plus the name of my file, which is location_temp.csv.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=27)** And I'm just going to hit Return, so notice it does not execute that command yet.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=31)** Now, I'm going to create a data frame, which I'll call df1.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=34)** And I'm going to set df1 to the results of reading that file and I'm going to use a Spark read command called spark.read.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=42)** And I'm going to specify the format and I'm going to specify CSV.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=48)** Now, there are a number of different ways of expressing how to read from a CSV file.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=53)** I'm using this particular format right now.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=56)** And I'm going to pass in an option, which says the header is true.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=64)** And I want to load from my file path.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=68)** So that's going to read a file, which is in CSV format and has a header, and it's going to put the data into a data frame called df1.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=77)** So let's hit Shift-Return for that.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=80)** Now, when you see the star in the brackets next to the cell, that means the command is executing.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=86)** As soon as a number appears, that means that it is done executing.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=90)** So now, I have a variable called df1.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=93)** And I can use the method called head to show the heading of this data frame.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=97)** Let's say I want to show the first 10 rows.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=100)** Then I could specify df1.head, parentheses, 10, and I'll hit Shift-Return.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=105)** And you'll notice that we have 10 rows and the columns are event_date, location_id, and then temp_celsius.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=113)** Now, this is a little bit hard to read.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=115)** I prefer a more tabular format.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=116)** So I'm going to use another method called df1.show and I'm not going to pass any parameters in and so by default, it'll show 20 rows.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=125)** So here's 20 rows of our time series data.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=128)** And we have a time stamp called event_date.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=131)** We have a location_id and then we have the temperature at that particular location at that time.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=136)** Now, another thing we commonly want to do with data frames is know the number of rows in there.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=140)** And to do that, we specify the data frame and then call the method count and this will actually perform a count.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=147)** So we have 500,000 rows in that table.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=150)** Now, let's load another file.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=152)** I have another file called utilization.csv.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=156)** This one doesn't have a header row, so I'm going to specify slightly differently.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=161)** Now, I'm going to create a file path and I'm going to call this file_path_no_header and it's going to be on my data path.
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=173)** And then I'm just going to add the file name, which is utilization.csv.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=180)** And again, I'm going to hit Return instead of Shift-Return, so it's not executing.
>
> **[3:04](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=184)** And now, I'm going to create data frame two or df2.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=187)** And I'm going to use the same command, spark.read.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=192)** And I'm going to specify the format as CSV.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=197)** And I'm going to specify that it does not have a header, so I call option, header, and I'm going to specify false.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=206)** And I want to do something else.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=207)** I don't have a header, but I want it to infer a schema.
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=211)** So I'm going to say option, inferSchema, true.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=221)** And then I'll have Spark make best guesses about what the actual data types are.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=225)** And then finally, I want to load the file and so I specify load and then the name of the file, which is in the variable file_path_no_header.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=238)** So I'll just navigate back.
>
> **[3:59](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=239)** So we have df2, we're reading using spark.read format.
>
> **[4:03](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=243)** We're reading a CSV file, which does not have a header, but we do want it to infer the schema or the data types.
>
> **[4:09](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=249)** And the file can be found at file_path_no_header.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=252)** So I'll hit Shift-Return to execute that.
>
> **[4:15](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=255)** Now, let's do a count.
>
> **[4:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=257)** Df2.count, let's see how many rows we have.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=261)** And Shift-Enter.
>
> **[4:22](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=262)** Again, we have 500,000.
>
> **[4:25](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=265)** Now, let's look at the first 10 rows and I can do that with df2.head and specify 10.
>
> **[4:33](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=273)** And you can see that we have 10 rows, but we don't have column names because we did not specify a header.
>
> **[4:41](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=281)** So Spark just created column names.
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=283)** Basically, it used the pattern _c, followed by a number.
>
> **[4:46](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=286)** So in this case, _c0, _c1, _c2, and _c3, followed by _c4.
>
> **[4:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=294)** I'd like to have something more mnemonic.
>
> **[4:56](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=296)** So to do that, I'm going to use the withColumnRenamed command.
>
> **[5:01](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=301)** And I'm going to say the data frame two or df2 is equal to data frame two withColumnRenamed.
>
> **[5:12](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=312)** And the column I want to rename is _c0 and I want to call it event_datetime.
>
> **[5:23](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=323)** Now, I'd like to rename all of the columns at once, so I'm going to use a continuation character and go down to the next line and I just hit Return there.
>
> **[5:32](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=332)** And I'm going to have another withColumnRenamed and this time, I'm going to rename column _c1 and I'm going to rename that to server_id.
>
> **[5:48](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=348)** And we'll continue on the next line.
>
> **[5:51](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=351)** WithColumnRenamed.
>
> **[5:57](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=357)** And we'll continue with column two.
>
> **[5:59](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=359)** Excuse me, I'm just going to clean that up.
>
> **[6:02](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=362)** Column two, comma.
>
> **[6:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=365)** And this one, we're going to name cpu_utilization and we'll continue with that.
>
> **[6:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=377)** WithColumnRenamed and we'll go to column _c3 and we'll rename that one free_memory.
>
> **[6:30](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=390)** And then we'll do one more.
>
> **[6:37](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=397)** And that's column _c4, which we're going to call session_count.
>
> **[6:45](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=405)** There, I'll just make sure my syntax is correct here.
>
> **[6:48](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=408)** Looks good.
>
> **[6:50](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=410)** Now, let's run the df2.head command again and we'll specify 10 again.
>
> **[6:57](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=417)** And you'll notice now we've changed the names from names like _c1 and _c2 to the more mnemonic named columns.
>
> **[7:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=425)** Now, again, I prefer to have more tabular format, so I'm going to use the df2.show command to show the contents of data frame two.
>
> **[7:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=437)** That's better.
>
> **[7:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=438)** So those are the first 20 rows of the df2 data frame.
>
> **[7:21](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-csv-files?u=76281980&t=441)** So those are some examples of how to load data into a data frame from a file.

> [!info]- Semantic Content
>
> **Code Identifiers:** file_path_no_header (3), withcolumnrenamed (3), location_temp (2), event_date (2), location_id (2)
> **Code Keywords:** let (7), continue (3), return, (2), pass (2), return. (1)
> **Env Vars:** csv (6)
> **File Paths:** utilization.csv (2), location_temp.csv (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Load data into DataFrames: JSON Files
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=0)** - [Instructor] Now, I'm back in my Jupyter Notebook homepage and I saved out that last workbook that we were working with.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=6)** I called it simply 03.01 Loading csv files into dataframes.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=11)** And now I'm going to create a new Notebook, also with Python 3.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=16)** And, in this example, I'd like to show you how to read a json file.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=20)** Now, the formats going to be pretty similar.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=22)** For example, the first thing we want to do is import from pyspark.sql and we want to import SparkSession
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=34)** and then we want to create a spark context which is the variable again that gives us a reference point for communicating and manipulating the cluster.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=43)** And, to do that we call SparkSession and we call the builder and within the builder we want to call the getOrCreate command.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=54)** Now, we also want it to find our data path and that's the same thing I used before.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=65)** And again, you'll change this to wherever you happen to store the data files.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=70)** And, also I just want to point out when I'm hitting Return, I'm actually hitting Shift + Return so it actually executes the command.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=75)** And now, I'm going to define a variable called json_df1_path and this is simply going to be the data path variable plus the name of a file.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=89)** And, I'm going to load utlization.json and I'm just hitting Return there 'cause I want one more command.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=95)** I want to define data frame one to be the data frame that's produced by reading a file.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=102)** And, in this case, the format is json.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=105)** You may remember from the last video I specified format csv, so here I'm specifying it as json and then I'm simply going to load the file and the file I'm going to load is the file that's in the variable json_df1_path and I'll hit Shift + Return that will load the file.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=126)** And, while that's loading I'm just going to type in df1.count() and let's see how large that is.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=133)** 500,000 which is kind of what we'd expect.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=135)** That's what we had in the other, in the csv file.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=139)** So, let's show the structure.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=141)** Now, what you'll notice here is we did not have to change column names.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=145)** That's because in json, you specify key value pairs.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=150)** So, for example, there was a row that had cpu_utilization equal to .077, that corresponds with the first row.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=157)** First row also had a key value pair with free_memory equal to 0.22 and server_id equal to 115.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=165)** So, that's an example, of how you load json.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=168)** Again, it's very similar to loading cvs.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=170)** We're just changing the read format.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=172)** Now, if you want to save this Notebook, you can come up to this Untitled name of the file, click on it, and that'll allow us to rename the Notebook.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=179)** And, I'm going to call this 03.02 Reading Json Files
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=188)** and I'll hit Rename, and then I'll go to File, Save and Checkpoint.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/load-data-into-dataframes-json-files?u=76281980&t=194)** And that will save the file up for me.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), return, (1), case, (1)
> **Code Identifiers:** getorcreate (1), cpu_utilization (1), free_memory (1), server_id (1)
> **Versions:** 03.01 (1), python 3 (1), 0.22 (1), 03.02 (1)
> **Analogies:** for example (2), similar to (1)
> **File Paths:** pyspark.sql (1), utlization.json (1)
> **CLI Commands:** python (1), find (1)
> **Tools:** jupyter (1)
> **UI Navigation:** click on (1)

#### Basic DataFrame operations
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=0)** - [Instructor] Now let's look at some other basic Dataframe operations.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=3)** Now from here on out, I will start by having the data already loaded.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=8)** Now we could do all of these exercises in a single notebook.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=13)** But I am separating them out so that you can jump into any lesson without having to depend on steps from previous lessons.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=20)** So each of the exercise files will have all of the commands that are needed to load the data that is required for that particular exercise.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=28)** In this case, I have our JSON file with the utilization data already loaded.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=33)** Let's just take a quick look at that.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=35)** I've loaded the data into a Dataframe called df2.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=38)** And I want to show the first 10 rows.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=42)** So again, this has our event date time, free memory, cpu utilization and so on.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=47)** And let's just check the count.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=52)** And there's 500,000, which we expected.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=54)** Now sometimes you might want to work with or view the list of column names.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=58)** To do that, you can specify the name of the Dataframe, in this case df2.columns.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=66)** And then shift+return.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=68)** Now notice I did not put parentheses after columns.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=72)** That's because columns is an attribute of the Dataframe.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=76)** It's not a method or a function.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=78)** And attributes have values assigned to them, so we're simply printing out whatever the value of that attribute is.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=84)** In this case, it's the list of the five column names.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=87)** Now sometimes you might want to work with a subset of your data.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=91)** For example, we have 500,000 rows here.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=94)** Now that's not too many rows but it may be more than you want to work with at any particular time and you'd rather work with a sample of the data.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=101)** And to do that, you can use the sample command.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=106)** Let's create new Dataframe called df2 sample and let's sample from the Dataframe df2.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=114)** And we'll do that by calling the sample method.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=117)** And with sampling, there's two ways to sample.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=120)** We can sample with replacement or without replacement.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=124)** I want to sample without replacement so I'm going to specify the Boolean false and all that means is every time we draw a row out, we don't put it back in so there's no chance we're going to draw it again.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=136)** And now, we also need to specify the fraction.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=141)** And in this case, I think I'll take 10%.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=144)** And I specify that as 0.1.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=148)** Hit shift+return.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=150)** Now if I specify df2 sample.show,
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=158)** we'll see a subset of the data that we had seen before.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=162)** Notice we have 20 rows all with server ID 115.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=168)** Now in addition to sampling a Dataframe, we can also sort it.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=172)** So let's create a df2 sorted version and I'll call that df2_sort.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=177)** And I do that by specifying the name of the Dataframe, followed by the sort command and then the column you want to sort by.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=185)** I want to sort by event date time.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=188)** And now what I've done is I've sorted that sample I just drew.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=191)** Let's take a look at that.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=198)** And here you'll notice that we have an increasing order of event date time.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-dataframe-operations?u=76281980&t=202)** So those are some of the basic commands you can do with Dataframes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (3), return. (2), function (1)
> **Env Vars:** json (1)
> **Versions:** 0.1 (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Filter data with DataFrame API
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=0)** - [Instructor] Now let's take a look at how we can use the Dataframe API to filter some of the rows in our Dataframe.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=7)** I uploaded the location temp csv file and again that's time series data that has a location ID and a temperature measurement at a particular point and time.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=18)** Now we have a number of different locations.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=20)** So, for example, if we wanted to see all of a particular location, we could specify a Dataframe name in this case df1, and we want to apply the filter command or filter method.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=32)** And what we want to do is we want to specify that the Dataframe 1 location ID column should be equal to, let's call it loc0, location 0.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=47)** And that'll return some results and let's make sure we show those results.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=52)** And what you'll notice here is we got 20 rows of location 0 but how many are there?
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=58)** Let's take a look at how we can get a count for the results of a filter.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=63)** So let's filter Dataframe 1 using the filter method.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=66)** And then we want to specify the column we're working with.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=69)** In this case, it's location ID column in df1.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=73)** And it might seem a little odd, but we do have to specify the Dataframe name within the filter clause here.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=78)** And then we specify the equal equals.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=81)** We want to count all the rows that are equal to location 0.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=84)** So we specify the count command.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=88)** And there are a thousand that have location 0.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=90)** Now let's copy and paste this and let's check another row.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=94)** Let's check location 1.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=98)** And I'm executing.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=99)** And we also have a thousand there.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=102)** Let's take a look and just see what it looks like.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=104)** So we'll apply show to location 1.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=111)** And here again, we're obviously filtering location 1 here and showing just those locations.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=117)** So the filter method on Dataframes allows you to specify essentially a where clause.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=123)** And you do that by specifying the column in the Dataframe and then a value.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filter-data-with-dataframe-api?u=76281980&t=127)** And like with some programming languages, we need double equals sign to do an equal comparison.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), case, (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Aggregate data with DataFrame API
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=0)** - [Instructor] Now let's take a look at aggregating using the DataFrame API.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=5)** Now, I've opened a new Jupyter notebook and as I mentioned in an earlier video, I'm going to start with the data loaded.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=11)** Now, if you have access to the exercise files, you'll have these commands in each individual chapter's exercise.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=18)** So in the first step, I defined a string which has a data path.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=23)** In the second step, I built on that data path and created a file path and pointed to a data file which has some location and temperature information and then I read that into a data frame.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=33)** And then here in step three, I'm simply showing the first 10 rows.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=37)** So we have a data frame called df1 and it has location and temperature information where the temperature is measured in Celsius.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=47)** Now what I'd like to do is I would like to count how many different measurements we have for each location.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=54)** So to do that I'm going to reference the data frame and I'm going to use the groupBy operation and I want to group by the location_id.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=64)** And then after I group it, I want to apply an aggregate function.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=68)** Now in this case I simply want to count the number of measurements with each location.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=73)** And I'll use the show method to actually print the results.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=78)** And what we'll see here is that we have 1,000 measurements for each location.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=83)** Now this comes in a sort of a random order so why don't I show you how to order by and we can do that by referencing the data frame df1 and here instead of groupBy we'll use orderBy and let's order by the location_id.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=101)** And we'll show the results.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=105)** And here you'll notice it's ordered by location_id so all the locations are, in this case, location zero or loc0.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=113)** Now, let's do another kind of aggregation.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=115)** Let's see how we can find, say the average temperature at each location.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=120)** I'll do that by referencing the data frame, df1.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=125)** Now I'd like to get the average by location_id so I'm going to groupBy location_id so that tells PySpark how I want to group the data.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=135)** And now I want to give it an aggregate function and I specify the aggregate method or agg.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=141)** Now for this I want to pass it a key value pair.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=145)** And the first thing I want to pass in is the name of the column I want to operate on, in this case, it's temp.celsius.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=154)** And the thing that I want to do to temp.celsius is find the average or the mean.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=158)** Now in the case of PySpark we use the word mean so I'm going to specify that.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=163)** So now what I've done is, on the data frame df1, I've said that I want to group by the location_id and then for each one of those individual groups of locations, I want to find the mean of the column called temperature Celsius.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=176)** And of course I want to show my results.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=179)** And so what you'll notice here is we basically have our average of all of the measurements by each location.
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=186)** We can apply different kinds of aggregate measures in that aggregate function.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=191)** So, for example, I'm just going to copy this to save a little typing.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=195)** And we'll paste it down here and then instead of mean, how about if we use max.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=201)** So let's find the maximum temperature at each location.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=205)** And here we have the maximum temperature at each location.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=208)** So the aggregate function or the agg method is how we apply aggregate functions and when we use the aggregate function, we specify the column that we want to operate on and the operation we want to apply, such as mean or max or min.
>
> **[3:44](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregate-data-with-dataframe-api?u=76281980&t=224)** And we specify that as a key value pair.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (5), case, (2), pass (2)
> **Code Identifiers:** location_id (6), groupby (3), orderby (1)
> **CLI Commands:** find (4)
> **Analogies:** for example (1), such as (1)
> **Env Vars:** api (1)
> **Tools:** jupyter (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Sample data from DataFrames
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=0)** - [Instructor] Now in this lesson, we're going to take a look at sampling.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=3)** Now we may want to use sampling sometimes, particularly when we have very large data sets, and we're doing kind of an exploratory analysis, we just want to get kind of an understanding at a high level of what the data is like.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=16)** Sampling can be really useful for doing quick operations.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=19)** So let me just get the kernel.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=22)** I'm going to restart and clear the output just so we can start fresh here.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=28)** And what I'm going to do is load the data.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=31)** There, so this is our location temperature data set that we've been working with, and the first thing I want to do is check the data frame to find out how many rows are in there.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=42)** So I'll just do a simple count, and we see there are 500,000 rows.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=47)** So let's see how we can take a sample, or a subset of that, but randomly select a subset.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=53)** So I'm going to create a new data frame, and I'm going to call it data frame one underscore S one for sample one, and that's going to be built off data frame one, and I'm going to apply the sample function, and I'm going to specify the fraction size that we want to sample.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=69)** Let's say we want to take 10%, so I'll specify 0.1 as that amount we want, and then I'm going to say with replacement equals false, and what that means is each time we pull a row out in our sampling, we don't put it back in, so that way we'll never get duplicates, we'll always get unique values.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=93)** And so we'll run this.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=95)** Df1_s1 is the data frame that now has whatever rows we drew from our sample, so let's see how many we got.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=104)** So we got 50,201, so it's not exactly 10%, which is what we specified in our fraction, but it's pretty close, so you can just keep that in mind, this is approximate, not an exact count when you specify a fraction.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=117)** So let's run some simple descriptive statistics on our sample.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=121)** Use df1_s1, and let's group by location ID.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=131)** So for each location, let's find out what the mean is, or the average, and as you may recall from the previous video, we specify our aggregate function by sending it a key value pair which consists of the name of the column, in this case it's temp_celsius, and the thing we want to apply to that is the mean, and then we want to show.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=158)** So what we'll see here is that we have our sample values, and then we have the average of these samples that we drew.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=168)** These averages are based on the 50,201 rows that we extracted.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=174)** Now let's make this a little bit easier to track by adding an order by clause.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=180)** So I'm going to copy this, so we have or exact same aggregate operation, but now I'm going to add an order by operation, and I'm going to order by location ID.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=198)** And we're going to show, let's show the top 10 rows.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=204)** And now what we have is our sample, and we've applied the mean or average function, and then we've ordered them simply by location ID, so we have location zero, one, 10, and so on because it's a lexical ordering.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=217)** Now what I'd like to do is compare these results to the results of the original data set, the data frame df1, which has 500,000 rows.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=228)** So for that I'm going to specify df1, and I want to group by location ID, and I want to find the mean aggregate, so I'm going to use the aggregate function and specify a pair, which includes the name of the column, in this case it's temp_celsius, and I want to apply the mean function to that group, and I want to order by the location ID, and I'm doing that so I'm going to get the same rows in the same order as I have up above.
>
> **[4:27](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=267)** And I will simply show 10 of those.
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=271)** And now what we'll see here, as I'll scroll up a little bit, is that when we did the sampling and took 10%, or about 10%, when we took the average temperature for location zero, we got something that was about 29.34.
>
> **[4:47](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=287)** Well, the actual is about 29.18 or so.
>
> **[4:51](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=291)** For location one, our sample average was about 28.14, for our actual, the full population, the average is about 28.24, .25, excuse me.
>
> **[5:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=305)** So you can see by sampling, we get very close to what the average is for the actual population.
>
> **[5:12](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=312)** Now, one of the things to consider is the size of the sample that you're drawing.
>
> **[5:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/sample-data-from-dataframes?u=76281980&t=317)** The smaller the sample, the more you're likely to vary from the actual aggregate value of the entire population.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (5), this. (1), this, (1)
> **Versions:** 0.1 (1), 29.34 (1), 29.18 (1), 28.14 (1), 28.24 (1)
> **CLI Commands:** find (3), make (1)
> **Code Identifiers:** temp_celsius (2)
> **Cross-References:** previous video (1)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [instructor] (1)

#### Save data from DataFrames
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=0)** - [Instructor] Now sometimes after we've been working with DataFrames, and creating new DataFrames, and running calculations, and doing sampling and so forth, we might want to save our results out.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=10)** It's very simple way to do that.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=12)** Now, here, I've started with a DataFrame already loaded, df1 has our location temperature data.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=17)** If I want to save that out, I can simply specify the name of the DataFrame, that's df1, and then use the write method and specify the csv method within that, and then specify a name for what I'd like to save.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=32)** In this case, it's df1.csv.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=38)** And I'll execute that.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=40)** So what that's done is it has saved the DataFrame out to disk using the csv format.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=46)** So let's take a look at the directory.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=49)** So, to execute a shell command from within the Jupyter notebook, you can use the exclamation mark, and that basically tells Jupyter notebook, everything that's going to follow is basically a shell command.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=60)** So I can do things like ls for list, and then specify df1.csv.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=67)** And in Windows, you would use the D-I-R command.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=71)** And then we'll return.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=72)** Now, what you'll notice here is that df1.csv is not a single file.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=77)** It's actually a directory.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=79)** And what is in that directory is four different files with csv extensions.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=85)** And that's because of the way Spark works internally.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=88)** Spark can break up DataFrames into partition subsets.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=94)** And in this case, there were four partitions.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=97)** And each partition has its own file.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=99)** And then there's also a success flag that was written out.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=102)** So, now let's list the contents of one of these files.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=105)** So to do that, I'm going to execute a shell command, and the shell command I'm going to use is called head.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=110)** And that's simply is a command for listing the top few rows of a file.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=115)** And so I'm going to specify I want to list a file in the directory df1.csv, and the file I want to use is the first one.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=124)** So I will just copy this.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=127)** And what this says is basically list the top two rows of the file that's mentioned.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=133)** And what we see here is that we have our data, a timestamp, a location, and a measurement, and it's in comma-separated format.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=142)** Now, if we want to use JSON as our format, that is just as simple to write out by using the name of the DataFrame, specifying the write method, and then using the JSON method.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=156)** And let's call this df1.json.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=160)** And execute that.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=162)** And let's do a similar listing operation.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=165)** So let's list the contents of df1.json.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=169)** And what we'll see here is we have a similar structure.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=172)** We have four partitions, so we have four files that were output, and let's take a look at what that looks like.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=180)** So again, we'll use a shell command, and we'll use the head command again.
>
> **[3:04](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=184)** And we're going to list a file that's in the df1.json directory.
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=190)** And the file we're going to list is the first one again.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=195)** And as you'll notice, this is now in JSON format.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/save-data-from-dataframes?u=76281980&t=198)** So basically the DataFrame dot write, followed by either csv or a JSON, is a really simple, quick way to save your DataFrames.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (2), return. (1), this. (1)
> **File Paths:** df1.csv (4), df1.json (3)
> **Env Vars:** json (4)
> **Definitions:** is a  (2), is called (1)
> **Tools:** jupyter (2)
> **CLI Commands:** ls (1)
> **Speakers:** - [instructor] (1)


### 4. SQL for DataFrames

#### Querying DataFrames with SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=0)** - [Instructor] Up to now, we've been using the Spark DataFrame API to work with DataFrames.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=6)** Now, we're going to switch gears and we're going to work with SQL.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=10)** In particular, we're going to use Spark SQL for working with DataFrames.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=14)** As in previous videos, I'm started with data already loaded.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=18)** Let's just quickly go through the steps that are involved with that.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=21)** First, I import a pyspark library that allows us to work with SQL.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=26)** I create a Spark session global variable which allows us to work with a distributed Spark session.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=32)** Then I've defined a string that points to my directory which holds my data.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=36)** And then, I create another string which points to the file I want to load, and then I execute a Spark read command specifying the JSON format.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=46)** And then finally, I've listed out the first 10 rows of this DataFrame, which I called df.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=51)** Let me briefly explain some of the columns.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=54)** In this DataFrame, we have utilization data about fictional servers.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=58)** And so we measure things like CPU utilization, the amount of free memory at a particular point in time, and then the number of sessions that are currently connected to the server at that particular point in time.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=69)** So, those are the measures that we have, and we identify those measures by the event datetime, and a server ID.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=77)** So those are in total the five columns that we have.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=80)** So let's do a quick count, so I'll specify df count, and we have 500,000 rows here.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=90)** Now, to work with SQL within Spark, we have to create a temporary view.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=96)** And to do that, we specify the DataFrame, and then we call the method createOrReplaceTempView.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=106)** And now, we specify a name for this table that we want to call this.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=111)** Now, our DataFrame is simply called df, but let's give this a more mnemonic name.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=116)** So we'll call it utilization.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=120)** And now what we have is the ability to query on a table called utilization.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=125)** So let's create a DataFrame called df_sql, and we'll create that by executing a SQL command in our Spark session.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=135)** And the command we're going to execute is SELECT * FROM utilization LIMIT 10.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=145)** So, this utilization that we specify in the FROM clause is the same utilization that we specified in our createOrReplaceTempView command.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=155)** So we'll execute that Spark SQL.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=159)** And now let's show the results.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=166)** And what you'll see is we have 10 rows, and it's basically the same structure that we saw above when we listed the contents of the DataFrame.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=174)** And let's just make sure there's only 10 rows.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=181)** And there is.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=182)** So that all was expected.
>
> **[3:04](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=184)** So now if we do a show, we'll see that we have the two columns that we selected, server_id and session_count.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=196)** Now, as with SQL in a database, we can change the names of these columns by specifying an alias.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=204)** So let's do that.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=206)** Let's create a new DataFrame, we'll call this df_sql again, and that's going to be the results of a Spark SQL command.
>
> **[3:36](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=216)** And that Spark SQL command is SELECT server_id, and let's change this to AS sid, we'll use a shorter version.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=225)** And then we'll also select session_count, and let's create that AS sc.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=234)** And we'll specify FROM utilization.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=238)** And let's also just do the show right here.
>
> **[4:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=246)** There.
>
> **[4:07](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=247)** So what you'll see is basically we're getting the same data, but we're using for column names, sid and sc, the aliases, instead of the original column names.
>
> **[4:16](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=256)** And you'll also notice that we're showing 20 rows here.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/querying-dataframes-with-sql?u=76281980&t=259)** That's because I did not put a limit of 10 when I created the latest DataFrame.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), switch (1), finally, (1), this. (1)
> **Env Vars:** sql (9), select (2), api (1), json (1), cpu (1)
> **Code Identifiers:** createorreplacetempview (2), df_sql (2), server_id (2), session_count (2)
> **SQL:** select (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Filtering DataFrames with SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=0)** - [Instructor] Next, we're going to take a look at how to filter data frames using Spark SQL.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=6)** So I've started a new workbook, I've imported the SQL library from PySpark, I've created a Spark session, and then loaded my data from the JSON file.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=15)** Again, we're using the utilization data, which includes measurements on CPU utilization, free memory, and session count, and that's organized by time and by server ID.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=26)** So the first thing I want to do, since I want to work with SQL, is to create or replace a temp view based on the data frame.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=34)** So I'll specify the data frame, df, and then specify create or replace temp view, and specify the name of the table that I'd like to use.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=48)** In this case we'll use utilization again.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=52)** Now I can execute a Spark SQL statement, and I'm going to save the results as another data frame, and I'll call that df_sql, and to create that data frame, I will invoke Spark SQL with a SQL command, and I'm going to use select star from utilization
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=78)** where, and let's stick with rows where the server ID is equal to 120.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=86)** And then once we create that data frame, let's show the top rows.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=92)** So what you'll see here is something very similar to what we had above.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=96)** We have basically the same structure.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=99)** So we have our event time and server ID, and then we have our measurements, CPU utilization, free memory, and session count.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=106)** So what we've done here is we have filtered by using a where clause, which is what we would expect when we're working with SQL.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=113)** So let's just do a quick count to see how many rows we have in our data frame.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=122)** And it looks like we have 10,000 rows.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=124)** Okay.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=126)** And let's show another kind of filter.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=128)** Let's use a greater than operation and a quality operation.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=131)** So for that I'm going to redefine the df_sql data frame, and I'm going to create a new SQL statement using Spark SQL.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=140)** And the statement we'll use here is select, and we'll select a server ID, and the session count from utilization where session count is greater than 70.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=162)** So this is exactly the kind of SQL statement you would put into a relational database if you wanted to filter a table called Utilization, and have it show sessions greater than 70.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=174)** And we'll just show the results.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=179)** And you'll see, yep, as we expect, the session counts are all greater than 70 here.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=185)** And let's just see how many there are.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=192)** Almost 24,000.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=194)** So let's try and narrow that down.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=197)** Let's show how we can use multiple conditions in our where clause.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=201)** So we'll define df_sql and go to the results of the Spark SQL statement, and that statement's simply going to be select server ID and session count from utilization where session count is greater than 70 and server ID is equal to 120.
>
> **[3:55](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=235)** So again, this is the same syntax you would expect to see when working with a relational database.
>
> **[4:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=240)** And we'll show the results as well.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=245)** And again, as we would expect, all the server IDs are 120, and all the session counts are greater than 70.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=252)** And let's just do a quick count here.
>
> **[4:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=257)** And yeah, about 2,700, 2,733.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=261)** Now we can do other things as well.
>
> **[4:24](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=264)** For example, we can add order by clauses, so let's show an example of that.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=268)** Here I'm just going to copy this statement to save a little typing, and then I'll just paste it in here, and one of the things I want to do is show you how to work with longer lines, and to split them up we can use the slash operator.
>
> **[4:47](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=287)** So for example, we can create a select statement that has multiple lines, and we can organize it the way we might organize if we were working with a SQL query tool in a relational database.
>
> **[4:59](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=299)** And so you'll notice, each time I put in put in a carriage return, I also put in a slash.
>
> **[5:04](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=304)** And now let's add an order by clause.
>
> **[5:09](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=309)** And we'll order by session count.
>
> **[5:12](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=312)** And let's make it descending, so we'll start at the top and work our way down.
>
> **[5:16](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=316)** So again, what we have here is we have a Spark SQL statement, and rather than stringing it out across on a single line, we split it up into four lines, and the trick to using that is just making sure you put a slash at the end of each line before you hit the carriage return of the new line.
>
> **[5:33](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=333)** And now we'll execute that, and we'll see that we have all of our servers, in this case, the session counts are all 80.
>
> **[5:41](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/filtering-dataframes-with-sql?u=76281980&t=341)** So what we've seen in this lesson, is that we can construct SQL statements that have where clauses with multiple conditions, and that we can also add other clauses, such as order by, within those SQL statements.

> [!info]- Semantic Content
>
> **Env Vars:** sql (15), cpu (2), json (1)
> **Code Keywords:** let (12), return, (1), case, (1)
> **Code Identifiers:** df_sql (3)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Aggregating Data with SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregating-data-with-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregating-data-with-sql?u=76281980&t=0)** - [Instructor] When we work with Sequel in databases, we often use Sequel to perform aggregations and the same holds true when working with Sequel in Spark.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregating-data-with-sql?u=76281980&t=8)** So once again, I've started a new Jupyter Notebook, and I've loaded data from our Utilization file, and that utilization includes CPU utilization, free memory, and session count, those are the measures, and we organize those by time and by server ID.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregating-data-with-sql?u=76281980&t=26)** So because I want to work with Sequel, the first thing I'm going to do is specify the name of the data frame that has our data and then apply the create or replace temp view and we'll call it Utilization, and let's do a very simple aggregation, let's get a count of the number of rows in the utilization table and we'll put that into a data frame called DF_Count and we'll execute a Spark Sequel statement and that statement is simply going to be Select Count star from utilization and let's show the results.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregating-data-with-sql?u=76281980&t=71)** OK, so we have 500,000 rows, now let's make it a little more complicated here, let's add a where clause, and we'll do that by specifying DF Sequel as our new data frame, and we'll execute the Spark Sequel command and that will be let's select count star, and I'm going to use a slash here, I'm going to make this a multi-line statement so it's easier to read, from utilization where session count is greater than 70, and we'll show the results of that.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregating-data-with-sql?u=76281980&t=115)** So that's about 239,000 which is a number we saw earlier when we did a similar command.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregating-data-with-sql?u=76281980&t=121)** Now let's make it a little more complicated by adding a group by clause, so I'm just going to copy this here so we don't have to re-type all that, and I will simply add after my where clause a backslash to continue on the next line followed by group by, and let's group by the server ID, and once again we'll show that.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregating-data-with-sql?u=76281980&t=152)** And so here, we have, we're seeing a list of the counts but we don't have server ID, and that's because I forgot to list server ID up above, so I'm simply going to go back to this command, add server underscore ID and a comma, and now I'm going to re-execute that command, and so you see, now we have our server ID and our counts.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregating-data-with-sql?u=76281980&t=174)** OK, let's make this a little more complicated, let's add an order by clause, so I'm going to actually copy this whole cell and I'm going to bring it down and start a new cell and now, after the group by, I'm going to extend this command and add an order by clause.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregating-data-with-sql?u=76281980&t=193)** And I'm going to order by the count and I want to start with the highest counts at the top and then go down, so I'm going to specify descending as well in the Sequel statement.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregating-data-with-sql?u=76281980&t=203)** Now if we execute that, we have our server ID and our counts and as expected, the counts are going down and so the server with the greatest number of counts is server 101, now we can do more than work with counts.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregating-data-with-sql?u=76281980&t=218)** How about, let's take a loot at the min average and max session counts, once again I'm going to copy the core Sequel statement that we have here, and I'm going to modify it, so in addition to server ID, I want to have, let's say we want the min average and max of session count, so I'll replace count with the min of session count, the average session count, and the max session count, and we'll keep all of the other clauses the same.
>
> **[4:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregating-data-with-sql?u=76281980&t=258)** So we'll query from the utilization table, we'll look for session count greater than 70, and then we'll group by server ID and we'll order it in descending order.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregating-data-with-sql?u=76281980&t=268)** And here we have it, we have the minimum session, the average session, and the max session for each server ID.
>
> **[4:36](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregating-data-with-sql?u=76281980&t=276)** Now notice the average has quite a few decimal values after the decimal point, so let's copy that, actually we don't even need to copy it, let's just edit this command and we'll add the round function and we'll specify that we want to round to two decimal places.
>
> **[4:53](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/aggregating-data-with-sql?u=76281980&t=293)** We do that by specifying round and then passing in as the first argument the results that we want to round, in this case it's the result of the average function, and then we specify the number of digits we want after the decimal point, in this case we want two and I'll add another comma so our syntax is correct for the select statement, and then we'll run this again, and there you see we have our averages but now with just two decimal points.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), function (2), continue (1)
> **CLI Commands:** make (4)
> **Env Vars:** cpu (1)
> **Cross-References:** go back to (1)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Joining DataFrames with SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=0)** - [Instructor] One of the most useful features of SQL is the ability to join tables.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=5)** We can join in Spark SQL as well.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=7)** So in this case, I've created a new Jupyter notebook and I've loaded our utilization data.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=14)** And of course, the first thing I will do is I'll create a table for working with this DataFrame using SQL.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=20)** In this case, I called it df util just to distinguish it from another DataFrame we'll create in a moment.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=26)** And using df util I will create or replace temp view utilization.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=39)** Now, I want to do a join, so I'm going to need some additional data.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=42)** So I'm going to load another file, a file with server names.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=46)** And so the first thing I'm going to do is specify a path to my data directory and I'll call that cfdf path.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=56)** And that's going to be the combination of my data path variable plus the file I want to load, which in this case is called server name.csv.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=66)** And this is included with the exercise files.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=69)** And then I'll create a data frame with this server data by specifying Spark read and it's a csv file.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=78)** And it's on the csv df path.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=82)** And this file has headers, so I'm going to specify header equals true.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=88)** And let's take a look at df server.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=93)** So this server has two columns, a server ID, which numbers that we've seen before like 100, 101, 102 and a server name.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=101)** And the server's name is simply the concatenation of the server ID and the word server.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=106)** So let's create an accessible SQL table by specifying df server create or replace temp view and we'll call this server name.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=122)** So that'll be the name of the table that we'll use in our SQL statements.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=126)** So let's quickly do a check on server ID and utilization.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=129)** For that, let's create a new DataFrame called df count which is, takes the result of the Spark SQL statement, select distinct server ID from utilization.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=148)** Order by server ID.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=153)** And let's show the results of that.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=158)** So that gives us our list of server IDs.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=162)** Now, let's just see what the maximum and minimum server ID is.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=166)** And we'll do that by executing Spark SQL and I'm not going to save this to a DataFrame.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=174)** I just want to see the results here.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=176)** Select and let's select the min server ID and the max server ID.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=185)** And that is from utilization and we'll just apply the show method right there.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=194)** Okay, so our minimum server ID is 100 and our max is 149.
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=199)** Now, let's do a join.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=202)** And we'll save the results in a DataFrame called df join.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=206)** And we'll execute the Spark SQL command which is select.
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=211)** Now, I'm going to do this in a slightly different way than normal.
>
> **[3:34](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=214)** I'm going to build out the command not quite in order.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=218)** So the first thing I'm going to do is say, I want to select.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=221)** I'll come back and specify the columns later.
>
> **[3:44](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=224)** But first I want to select from utilization and I'm going to alias that with the letter U and now I'm going to specify my join statement.
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=236)** I want to select from utilization with an inner join on server name which I'm going to alias with S-N.
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=248)** And that join is going to be on the server name, server ID equal to the utilization server ID.
>
> **[4:23](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=263)** So this looks just like a SQL statement that you would put into a Postgres database.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=268)** Now, what I'd like to do is, now that I have my aliases defined, I've showed you where they are, I'm going to just type in the names of the columns I'd like to get back.
>
> **[4:36](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=276)** So from the utilization table, I'd like to get the server ID and from the server name table, I'd like to get server name and let's also get the session count from the utilization table.
>
> **[4:52](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=292)** So now, we have a select statement which selects two columns from the utilization table.
>
> **[4:57](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=297)** From there, we're going to get server ID and session count.
>
> **[5:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=300)** And then we're going to look up the server name and the server name table.
>
> **[5:04](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=304)** And let's show the results of that.
>
> **[5:12](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=312)** Okay, there was an error, the typo.
>
> **[5:15](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=315)** So you'll see what we have here, is I've received an error here and this is actually a good example of what can happen when you have a typo.
>
> **[5:21](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=321)** In this case, I've misspelled server name.
>
> **[5:24](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=324)** So I'm going to correct that and now re-execute.
>
> **[5:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=328)** And now, I have here, I've performed the join.
>
> **[5:31](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/joining-dataframes-with-sql?u=76281980&t=331)** And what we have here is, we have server ID and session count which came from the utilization table and we have the server name which came from the server name table.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), case, (3)
> **Env Vars:** sql (9)
> **File Paths:** name.csv (1)
> **Tools:** jupyter (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is called (1)
> **Analogies:** just like (1)

#### Eliminating duplicates in DataFrames
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=0)** - [Instructor] Now, when we're working with Data Frames, Spark provides some ways to de-duplicate data.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=5)** So, let's take a look at how to do that.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=7)** Now, our data files that we've been working with the location and temperature data in our utilization files don't have any duplicate data, so we'll take this as an opportunity to also look at how we can create small data sets to work with within our Jupiter Notebook session.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=24)** So, the first thing I want to do, is import some code that we'll need from the PySpark SQL package, so I'll specify from PySpark dot SQL import the row package, and we have that.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=39)** And, now what I'm going to do, is I'm going to create a data frame and I'm going to do that by entering data manually here in the notebook and I'm going to call this data frame dup because it's going to have duplicate data in there.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=54)** And, to do that, I specify SC, which stands for Spark Context.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=59)** It's a global variable that gives us access to the Spark Context, and what I want to do is create a data frame, and to do that, I specify Parallelize.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=71)** That's going to create a parallelized data structure, and as you may recall from the lesson on writing data frames to disc, when we wrote our data frames out, there were four different files.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=83)** That's because Spark parallelized our data frame.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=86)** Now, Spark did that automatically when we read our file in, but we're creating this data manually, so we're specifying parallelized explicitly.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=96)** And, what we're going to do, is parallelize a set of rows, so I'm going to specify a row, and a row has a server name, and for our first, we'll name it 101 server, and it's going to have a CPU utilization of 85 and a session count of 80.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=124)** So, that's one row in our data frame.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=126)** I'm going to use the slash character to allow me to start typing on new a line.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=130)** And here, I'll specify another row.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=134)** In this case, it will be a row with a server name of 101 server and it will have a CPU utilization of 80 and a session count of 90.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=157)** And, we'll add another row.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=160)** This will be server equal to 102 server,
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=168)** and this server will have a CPU utilization of 85 and a session count of 80.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=182)** And, we'll have one more row.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=185)** This will be for server name equal to 102 server as well, and CPU utilization of 85 and a session count of 80.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=207)** There, and that will create a parallelized data structure, and now, I want to specify, turn that parallelized data structure into a data frame, and I do that by specifying the two data frame function.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=220)** Let's do a quick check and make sure there's no typos here, so I have two server names, 101 and 102, I have CPU utilization, which is either 80 or 85, and then, I have session count which is either 80 or 90.
>
> **[3:55](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=235)** And, I'm converting it to a data frame, so that looks correct.
>
> **[3:59](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=239)** Now, if I show the contents of this data frame, we'll see that we have four rows, with CPU utilization, server name, and session count as we would expect.
>
> **[4:14](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=254)** So, if you need to manually create a data frame or some quickly load up some test data using SC parallelized with a set of rows, is good way to do that.
>
> **[4:23](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=263)** Now, one of the things we can do with a data frame, is we can drop duplicates.
>
> **[4:27](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=267)** And, to do that, we simply specify the data frame, and then, we apply the drop duplicates function.
>
> **[4:35](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=275)** And, let's show the results.
>
> **[4:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=278)** Now, what you'll notice here, is it dropped one of the rows that was identical to one of the other rows, in this case, server 102 with CPU utilization 85 and session count of 80.
>
> **[4:52](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=292)** Now, if we want to drop any time there's a duplicate in one of the columns, we can do that as well.
>
> **[4:58](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=298)** So, for example, we can take our DF dup data frame, specify drop duplicates, and this time call it with a list of column names we want to include in our check.
>
> **[5:10](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=310)** Here, we just want to check for duplicates in the column "server name", and let's show the results of that.
>
> **[5:20](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=320)** So, what you see here, is we only have one row for each unique server name, so the other duplicated server names were dropped.
>
> **[5:29](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/eliminating-duplicates-in-dataframes?u=76281980&t=329)** So, dropped duplicates is a great way to quickly eliminate duplicate data in your data set.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (7), sql (2)
> **Code Keywords:** let (4), case, (2), function (2)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Working with NA values in DataFrames
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=0)** - [Instructor] It's not uncommon to have data missing from datasets, now when we work with Sequel, we're used to working with nulls and working around nulls.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=9)** When we work with data frames, the absence of data is indicated by an NA So in this lesson, we're going to look at how we can work with NAs and nulls using data frames and Spark Sequel.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=22)** So as I've done before, I've started with some data already loaded, so let's review what I have done already.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=28)** In this Jupyter Notebook, I have a number of import statements, so I'm importing the Row function which we used in the previous video, to create a local data frame, and then I also have Spark Session which allows us to work with Spark Sequel Now I'm also importing a couple of things we haven't seen before, I'm importing a function called lit which allows us to create a literal column for a data frame, and I'm also importing a data type called String Type which we'll use a little bit later.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=58)** Next, I create a data frame using data that I've typed in here to my Jupyter Notebook, I'm using the parallelize method, and I'm providing a series of rows, and each row has three columns, a server name, CPU utilization, and session count.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=75)** And that set of parallelized rows I convert to a data frame and I call that data frame DF, and then finally I show the data frame.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=84)** Now what I'd like to do next is, I would like to add a column and set that column's values equal to null or NA, so to do that, I'm going to create a new data frame, I'm going to call it DF_NA and I'm going to set that to the value of the data frame that we just created, DF, and I'm going to add a column, and that column is going to be called the NA-Col and for its value, I want it to be the literal value of none which is how we specify null when working with Pi Spark, and I want to cast that as a string type, and let's show the results of that operation.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=131)** So you'll see, we have the contents of DF plus another column called NA-Col and it has the null value.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=139)** Now one of the things I can do is globally replace all nulls or NAs with some value and I can do that with the fill NA function.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=148)** So on the data frame that has NAs, I'm going to call FillNA, and I'm going to specify A as the value that I want to replace all the NAs with, and let's show what happens when that function is applied.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=162)** Now you'll notice it's basically what we had above but with all nulls replaced by As.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=168)** Now let's create a data frame that has versions both with the nulls and with the As.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=174)** So I'll create a new data frame, I'll simply call it Data Frame 2 and that will be based on the contents of Data Frame NA with all of its nulls replaced by A and then I want to union that to the data frame DF_NA which has the NAs still in it.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=194)** So let's see what DF2 looks like.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=198)** First, we have five rows where the NA column is all As and that we got from this operation, so we took Data Frame NA and replaced all the nulls with As.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=210)** Now that operation didn't actually change Data Frame NA, so when we unioned Data Frame NA to that, we were unioning all the rows as they were originally.
>
> **[3:42](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=222)** Now one of the reasons I did that is so I could show how we can drop rows with NAs in them.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=228)** So if we look at DF2.NA we can simply say, for all NAs, drop and let's show the results of that.
>
> **[3:59](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=239)** So NA drop is one way to get rid of all of the nulls.
>
> **[4:04](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=244)** Now let's see how to do that with Sequel and we'll do that by creating a table that we can query.
>
> **[4:10](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=250)** So we'll specify DF2 as our data frame that we want to work with, we will create or replace temp view and let's call this NA_Table So now we can invoke Spark Sequel and specify a command Select Star from NA_Table and let's show the results of that.
>
> **[4:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=278)** Now our results are similar to just listing out or showing the contents of DF2, but now we're working with DF2 but cast as a table.
>
> **[4:47](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=287)** Now if we want to find all the rows where the NA column is null, we can do that with another Spark Sequel statement.
>
> **[4:56](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=296)** And we can simply Select Star from NA_Table where NA_Col, is null, and let's show the results of that.
>
> **[5:13](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=313)** And as you see, all of the rows are null.
>
> **[5:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=317)** Similarly, let's copy this and let's run another command and this time, let's find all the rows that are not null, and that again, works as expected.
>
> **[5:27](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/working-with-na-values-in-dataframes?u=76281980&t=327)** So when we're working with NAs or nulls, we can use the data frame API and use operations like NA fill or we can cast the data frame into a table and use standard Sequel operators like is null is not null.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (4), type, (1)
> **Env Vars:** df2 (5), df_na (2), cpu (1), api (1)
> **CLI Commands:** find (2)
> **Tools:** jupyter (2)
> **Cross-References:** previous video (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 5. Data Analysis with Spark

#### Exploratory data analysis with DataFrames
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=0)** - [Instructor] Now that we've seen, how to work with Spark data frames, using the data frame API and Spark SQL we can now start to look at how we use those tools for some higher level tasks, like exploratory data analysis and machine learning.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=17)** So in this video we'll look at how to use the data frame API for some basic exploratory data analysis with the utilization data we've looked at previously.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=27)** So, at this point I have opened a new Jupyter Notebook and I have done the preliminary specifications and data loading, so the data has been loaded.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=40)** The first thing I'd like to do is create a table which is accessible from SQL and to do that I'll specify our data frame called df util and I'll call the createOrReplaceTempView method to create a table which I'll call utilization, and let's just verify the count on df util.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=68)** It should be 500,000 and it is so we're all set.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=72)** Now the first thing I'd like to show you is an API command called describe, and you can describe a data frame by specifying the data frame name followed by describe, and show, and what this does it actually produces another data frame with summary statistics about the data frame.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=94)** For example, in this case we see that there are several columns, there's a summary column, followed by the name of a column in the original data frame.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=103)** For each of those columns in the original data frame we have the same set of statistics that are calculated, the count, the mean, the standard deviation, and the min and max.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=112)** So this is a great way to get a high level view of what a data set might be like.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=118)** Because for example we know that all of the columns have 500,000 values in them.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=124)** So we don't have any missing values, we understand what the average is across the entire population.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=130)** So for example the average CPU utilization is about 62% and we also understand importantly the standard deviation, for example with CPU utilization the standard deviation is about .15 and if you're not familiar with standard deviation, a rough way to think about it is, that if you look at the mean and then add or subtract the standard deviation probably about 66, 67% of the values will lie in that range.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=158)** If you expand from that range and go one standard deviation less, and one standard deviation more.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=164)** So in that case that would be about 30 to .32 to about .92 you expect to see close to 97% of all the values.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=174)** So that helps us understand what the bell curve kind of shape looks like.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=177)** So that's the kind of information we can get with the describe command, and that's really a useful way to get a quick idea of what a data set's like when it's in a data frame.
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=186)** Another thing we often want to know, is there a correlation between two of the variables?
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=192)** So let's look at how to do that.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=194)** We'll specify our data frame df util, and then stat corr is the method we want to use and let's see what kind of correlation there is between CPU utilization, and free memory.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=213)** So the correlation is about .470 so there's some negative correlation, .470.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=221)** If there were no correlation at all the value would be zero if as one value went up the other value always went up then the value would be one and if one value always went up and the other always went down that would be a negative one correlation.
>
> **[3:57](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=237)** So we're about negative .5 so there's some negative correlation but not a lot.
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=242)** And that shouldn't be too surprising sometimes processes are CPU bound sometimes they're more memory bound.
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=248)** But in this dataset, there's not a huge correlation.
>
> **[4:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=251)** But let's see if there might be more of a correlation between session count and free memory.
>
> **[4:15](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=255)** So to do that we'll use the same command, df util is the data frame.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=259)** The method is the stat core for statistics correlation, and we want to know about session count, and how that correlates with free memory.
>
> **[4:34](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=274)** About the same, about .5 again not a significant correlation now also sometimes we want to know how frequent are some items, what are the most frequently occurring items?
>
> **[4:45](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=285)** There is a method called freq items for frequent items which we can use with the data frame and again we'll specify our data frame df util and the stat and then freq or frequent items and let's look at the frequent items we'll pass in a list for server ID and for session count,
>
> **[5:15](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=315)** and let's show the results of that.
>
> **[5:20](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=320)** Now the frequent server ID is kind of arbitrary because in this data set all of the server IDs have the same number, however with session count that's more of a random number and so the top appearing the most frequently appearing numbers of session counts are 92, 101, 83, 104 followed by some others.
>
> **[5:40](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=340)** So if you're looking to understand what are the most frequently occurring values.
>
> **[5:44](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=344)** You want to use that frequent items method.
>
> **[5:48](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=348)** We briefly mentioned earlier how to use sample, I'll just show that one more time.
>
> **[5:51](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=351)** So if you'd like to take a subset of the full population in a data frame, you can specify the data frame in this case df util, and sample and fraction.
>
> **[6:02](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=362)** We want to specify the fraction that we want to take and then we specify a decimal value.
>
> **[6:07](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=367)** So if we wanted to take 5% of the population that's how we would specify it, and then there's another parameter withReplacement and we'll say false, and again withReplacement just means as you choose something you take it out of the pool or out of the population.
>
> **[6:25](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=385)** If you want to put it back in so that you might draw it again next time in this case we're saying no we don't want to do that.
>
> **[6:33](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=393)** Ah good example, so what happens is df util sample like many of these other commands returns a data frame.
>
> **[6:40](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=400)** So what we see here is a data frame itself.
>
> **[6:43](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=403)** So let me assign this to a new name, df util sample.
>
> **[6:51](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=411)** Now I've created a new data frame so I can work with the sample, so now I can do things like show the count, and here we have about 25,000 which would be about 5% of 500,000.
>
> **[7:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-dataframes?u=76281980&t=428)** So again it's not always exact the percentage, but it will get you pretty close.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (4), api (3), sql (2)
> **Code Keywords:** let (7), pass (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** for example (4)
> **Code Identifiers:** withreplacement (2), createorreplacetempview (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)

#### Exploratory data analysis with Spark SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=0)** - [Instructor] Now, we saw how we could get things like the count the mean standard deviation using the DataFrame API.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=7)** Let's do that with Spark SQL.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=9)** And to do that, we'll specify Spark SQL, and then we'll give it a command.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=13)** In this case it'll be SELECT; let's select min of CPU utilization and the max of CPU utilization and the standard deviation of CPU utilization.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=40)** And we'll specify from utilization, because that's the table we specified with our create or replace tempview, and let's be sure to show this, because the result is a data frame.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=55)** And so we have here our minimum CPU utilization is about 22%, max is 100%, and the standard deviation is about 15, which is what we saw up above, so no surprises there.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=68)** I am going to just copy this command and we'll make it a little easier to read; I'm going to make this multi-line.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=78)** I'll use this backslash, we'll say FROM utilization, and now we want to specify our group by clause.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=86)** So to do that I can continue in line and specify in GROUP BY, and we want to group by server ID.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=98)** And now we have those same statistics, the min, the max, and the standard deviation, but now they apply to each of the server IDs.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=107)** What I forgot to do, though, is include the server IDs.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=109)** So let me quickly go back.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=111)** Specify server... ID, add that, and then spread again.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=119)** And that right there is a good example of why Jupyter notebooks are so popular.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=123)** It's very easy to rerun and iteratively work commands.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=128)** Now, the last thing I'd like to show you is how to calculate statistics on buckets or histograms of data.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=136)** And here the idea is, rather than look at each server individually, let's bucket values according to how frequently they occur in certain ranges.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=145)** So if we want to know how often does a CPU utilization fall in the range of 1-10 or 11-20 or 21-30, all the way up to 90-91, we could put each of those CPU utilization measures into its own bucket and count how many times a CPU utilization goes into that bucket.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=165)** So I want to show you how to do that.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=166)** Now, with spark sequel, we just specify spark sequel, and of course we're going to go to select statement, and what we want to do is we want to select by server ID.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=180)** We want to calculate a floor, and floor is a kind of division, so it'll divide a number but drop off any decimal remainder, so for example 50 floor 10 is five, just like 50 divided by 10 is five.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=196)** But 51 floor 10 is also five.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=200)** 55 floor 10 is five, 61 floor 10 is six, and so on, so we use the floor function, and we'll apply that to CPU utilization.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=213)** And, since we have a decimal value, we'll multiply it by 100 and then divide by 10.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=218)** We'll alias that as bucket, this'll be from utilization, and this returns a data frame of course, so we'll use show to show the results.
>
> **[3:51](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=231)** And here we go.
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=233)** Okay, so now what we've done is we've listed for each server what bucket does that particular time CPU utilization fall into.
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=242)** Now, we might want to know overall how often does a CPU utilization fall into one of those 10 buckets.
>
> **[4:09](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=249)** So let's take a look at how to do that.
>
> **[4:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=251)** I'm just going to copy this select statement and now, we're not interested in understanding the floor by server ID, but we do want to know what the count is of the floor, which we call bucket, and we want to group by the bucket, and let's throw in an order by bucket as well.
>
> **[4:39](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=279)** And now what we see here is that we have counts that go into our various buckets, and our buckets range from bucket two to bucket 10, so we don't have any in one, but we do have a few in 10.
>
> **[4:50](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=290)** Mostly they cluster around the middle.
>
> **[4:53](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/exploratory-data-analysis-with-spark-sql?u=76281980&t=293)** Five and six have the largest values, and then the second largest values after that are four and seven, so you see we have kind of a normal bell-curve distribution here, which is what we would expect with randomly generated data.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (10), sql (2), api (1), select (1), group (1)
> **Code Keywords:** let (7), this, (1), continue (1), function (1), throw (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **SQL:** select (1), group by (1)
> **Analogies:** for example (1), just like (1)
> **Tools:** jupyter (1)
> **UI Navigation:** go to (1)

#### Timeseries analysis with DataFrames
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=0)** - [Instructor] We're going to work with our utilization data again, but instead of doing just kind of a general exploratory data analysis like we could do with any data set.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=9)** We're going to take a look at things we can specifically do with timeseries data, and timeseries data is data that has a set of measures and a timestamp associated with them.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=20)** Now in the case of the utilization data, the measurements come at regular timed intervals.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=25)** So that makes it easier to work with in some ways.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=28)** So what I'm now doing is loading the data, and I'm going to load the utilization data and I've also created the utilization table so we can work with Spark SQL right away.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=40)** Okay so we're going to start with Spark SQL and let's create a select statement and let's select the server ID and then we'll get the min of CPU utilization and the max of CPU utilization and the standard deviation of CPU utilization, and let's continue this on the next line and of course this will be from the utilization table, and let's group by server ID.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=89)** And since Spark SQL always returns a data frame, we're going to show that data frame, and so show displays the top 20 rows.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=97)** So as we expect for each server ID we have the minimum CPU utilization, the max, and then the standard deviation.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=104)** Now sometimes you might want to compare a value within a group, for example the current CPU utilization for a server you might want to compare that number to the average CPU utilization of just that server, not the entire population.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=122)** You can do that using a windowing function and in SQL the windowing functions are specified using an over partition by statement.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=130)** So let's take a look at how to use that, so I'm going to create a Spark SQL statement, and let's select the event datetime server ID
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=147)** and CPU utilization and also the average CPU utilization.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=159)** I'm going to move this to the next line.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=165)** Because that average CPU utilization is calculated over the data that's partitioned by
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=179)** server ID and I'm going to alias that as average server util
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=188)** and we'll continue on the next line and we'll say from utilization.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=194)** Okay before I run this I just want to explain again.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=197)** So we're going to select each row in the table, and for each row we're going to explain the event time, the server ID the CPU utilization, and we're also going to calculate the average CPU utilization for all instances of rows that have the same serve ID.
>
> **[3:36](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=216)** Now let's see what that looks like.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=218)** I'm just going to correct a typo here, ah I forgot to assign it to a variable, so I'm going to call this SQL window and because Spark SQL always returns a data frame, SQL window will be a data frame.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=232)** So now I'll execute this again making the assignment.
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=236)** Now we have a data frame called SQL window and I can apply the show command, and this will show the top 20 rows.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=245)** So now what we have here, you'll notice we have varying timestamps for example here's one at about 8:06, 8:11, 8:21 and so on all for server ID 112.
>
> **[4:16](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=256)** We have different CPU utilizations at those particular times but the average server utilization is always .71538 and so on for server ID 112.
>
> **[4:30](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=270)** Now, one of the things that we might want to do, is understand what's the difference of any one of these measurements of CPU utilization from the average for that server?
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=280)** Well we can do that by doing some simple arithmetic, and use the over partition by clause.
>
> **[4:46](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=286)** And now I'm going to add another column, I'm going to call it delta server utilization or util for short, and now, how will I define that?
>
> **[4:56](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=296)** Well what I want this to be is the difference between the average that we just calculated and the CPU utilization for that particular row.
>
> **[5:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=306)** So at this row we'll specify CPU utilization and now we want to subtract the average for that particular server.
>
> **[5:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=317)** Well the definition of the average is right here in this statement the average with the over partition by clause so I'm going to copy that and paste that in, so now what we have is we have a select statement with the event time.
>
> **[5:33](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=333)** The server ID and the CPU utilization.
>
> **[5:36](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=336)** That's all pretty straightforward.
>
> **[5:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=338)** Then we add the average CPU utilization by server.
>
> **[5:42](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=342)** That's the average server util column and now we've added a fifth column which is the difference between the CPU utilization on that row, and the average for that particular server.
>
> **[5:55](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=355)** So let's see what that looks like, and actually before I do that I'm going to rename this to SQL window2 and I need to add a comma here and the rest looks correct.
>
> **[6:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=368)** So now we've defined SQL window2 so let's take a look at it.
>
> **[6:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=378)** Now what we have here is an additional column, we have the event datetime, the server ID, CPU utilization, we have the average server utilization and then we also have this other number the delta of server utilization.
>
> **[6:32](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=392)** Which you can check but it's basically going to be the difference between CPU utilization and average CPU utilization.
>
> **[6:39](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=399)** So that's one thing we can do with the windowing functions where we can compare a particular value in a row to a value of some aggregate function applied to a sub-set of rows, now another thing we can do with windowing functions is look around essentially the neighborhood of a row.
>
> **[6:57](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=417)** So for example, you might want to be able to calculate what's called the sliding window.
>
> **[7:01](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=421)** So for example, look at the last three values and average them or look at the last value or current value, next value and average them.
>
> **[7:09](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=429)** Let's take a look at how to do that.
>
> **[7:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=431)** So let's create a new data frame called SQL window3 and let's make a select statement here, and we're going to make this select event datetime
>
> **[7:29](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=449)** server ID, CPU utilization, and continue on the next line.
>
> **[7:39](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=459)** Now let's get the average CPU utilization, and let's use over partition by the server ID and here we want to order by event datetime.
>
> **[8:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=480)** We don't want to average over all the measurements for this particular server, we just want the row just before and just following, and the current one and so we can say that by saying, rows between one preceding and one following
>
> **[8:25](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=505)** and we're going to call that average, average server utilization or util.
>
> **[8:37](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=517)** And this is from utilization, before I run this I just want to go over it one more time.
>
> **[8:43](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=523)** So in the first line here we're doing kind of a standard select statement and we're just pulling back event time, server ID, and CPU utilization.
>
> **[8:51](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=531)** Now the second and third line are a little trickier.
>
> **[8:55](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=535)** We're doing an average CPU utilization, and we're using the over partition by which we just saw, we're also partitioning by server ID.
>
> **[9:04](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=544)** But as I mentioned, we don't want the average over all of the CPU utilization measurements for that particular server ID.
>
> **[9:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=551)** We just want to look in the general neighborhood, the value right before our current row and the value right after the current row.
>
> **[9:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=558)** So we're going to use the phrase rows between and then we'll specify the one preceding and the one following and that's what we're going to call our average server utilization for this particular query.
>
> **[9:30](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=570)** That should be datetime and that's 20, and let's see our results.
>
> **[9:42](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=582)** So what we'll see here is for each row, for example this row we have CPU utilization of .78 over here we have a value .7866 and if you add .71, .78, .87 and divide it by three you'll get .7866.
>
> **[10:03](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=603)** So this gives us an average server utilization based on a sliding window so each time this average server utilization is calculated it looks at the row before, the current row, and the row after and those are the only values that are used in that average calculation.
>
> **[10:21](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/timeseries-analysis-with-dataframes?u=76281980&t=621)** So if you want to do comparisons between the value in a row and the value in an entire group you can use the over partition by and then specify the particular column that you want to group by, or if you want to use a sliding window and look at just a sub-set of those values, you can use the rows between preceding and following phrase to specify what range or what width of window you want to use.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (27), sql (12)
> **Code Keywords:** let (15), continue (3), function (2)
> **Analogies:** for example (5)
> **Ports:** :06 (1), :11 (1), :21 (1)
> **CLI Commands:** make (2)
> **UI Navigation:** select the (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Basic machine learning with DataFrames, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=0)** - [Instructor] A commonly used technique in exploratory data analysis is called clustering.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=5)** And here the idea is that we want to see if there are natural groupings among the data.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=12)** So for example, let's take a look at the utilization data.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=15)** Let's see if we can divide that data set into three groups that logically come together.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=22)** So to do that, we're going to use, of course, we're going to use our utilization data.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=26)** And we'll be using dataframes.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=28)** We're also going to use some code from the machine learning package.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=32)** So the first thing I did before loading the data was I imported of course, our pyspark SQL so we can have our Spark sessions.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=41)** I also imported three libraries from the ml package.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=44)** Vectors, vectors assembler and kmeans.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=48)** And I'll explain each of those as we go through.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=50)** And then I went through our usual steps to upload our utilization data from a JSON file into a dataframe called df_util.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=58)** So let's take a quick look at df_util, just so we're familiar with what the data looks like.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=66)** So the first 20 rows show we have our data by event time and by server ID, and we're measuring CPU utilization, free memory and session count.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=76)** Now, what we'd like to do is group based on CPU utilization, free memory and session count.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=82)** Now, the machine learning libraries here work with something called a vector.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=87)** And a vector is basically like an array or a single data structure that holds all the values from a particular row that the machine learning algorithm will be looking at.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=97)** So in our case, we're not going to look at all five columns.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=101)** We're only going to look at three.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=103)** So we're going to create a vector to store those three values.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=107)** And we do that by calling the vector assembler.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=114)** And we're going to specify to the vector assembler the name of the columns that we're interested in.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=119)** We pass that to the inputCols parameter.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=123)** And we're interested in CPU utilization, free memory, and session count.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=137)** And then we want that vector to be in a column, which we'll call features.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=143)** And we'll specify that with the outputCol parameter.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=147)** And we'll say, call this features.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=150)** Now, vector assemblers can return a data structure, and we're going to call that vector assembler.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=156)** Actually, I had a typo there.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=157)** Missed an L.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=158)** So I'm going to find vector assembler.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=161)** Now, we're going to create a dataframe that we can work with, and we're going to call that vcluster.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=168)** And that just simply stands for vectorized and our cluster dataframe, which we're going to be working with to build the clusters.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=174)** We're going to take the data structure that was just returned, vector assembler.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=180)** And then we're going to tell vector assembler to take that information that we had provided about input columns and output columns, and actually execute them using the df_util.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=191)** And we do that by specifying the transform method or function.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=195)** And then passing in our dataframe that we wanted to work with.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=198)** In this case it's df_util.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=200)** So again, we have our utilization dataframe.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=204)** We want the vector assembler to take the CPU utilization column, the free memory column and the session count column, combine them all into a single vector, and put that vector in a new column called features.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=217)** So let's see how that works.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=220)** So now let's show vcluster dataframe.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=228)** And what we see here is we have the same data we had before in terms of CPU utilization, event date time, free memory, server ID and session count.
>
> **[3:57](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=237)** And now we also have this new column that was output by the vector assembler called features.
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=242)** Now notice the features.
>
> **[4:04](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=244)** It's actually an array, or vector, of three values.
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=248)** In the first row of the three values, are 0.77, 0.22 and 58.0 Well those are exactly the same values of CPU utilization, free memory and session count.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=261)** So this is what we would expect.
>
> **[4:22](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=262)** We now have the data that we want to use in our clustering algorithm all combined into a single column called features.
>
> **[4:29](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=269)** And the reason we did that is because the machine learning algorithms in the Spark ml packages expect the input data to be in a single vector.
>
> **[4:39](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=279)** And now the machine learning algorithm we're going to use is called kmeans.
>
> **[4:44](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=284)** So let's create a local variable called kmeans, and let's define it as a kmeans, and we want a kmeans, and we want k.
>
> **[4:57](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=297)** K stands for the number of clusters.
>
> **[5:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=300)** So in this case we're going to set our k to three.
>
> **[5:03](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=303)** And now kmeans also takes a seed for its random value generator, so we'll use kmeans, and set it to kmeans, which we just created, and we'll set the seed to one.
>
> **[5:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=318)** So now we have kmeans and that's a data structure that is ready to run the kmeans algorithm as soon as we give it some data to run it on.
>
> **[5:28](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=328)** And to do that, we simply call kmeans, and we say fit.
>
> **[5:34](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=334)** And fit is the command that is used to actually take input data and then apply the algorithm.
>
> **[5:40](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=340)** Now, our input data is in vcluster.
>
> **[5:44](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=344)** And by default, kmeans fit will look for the input data in a column called features.
>
> **[5:50](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=350)** So we just have to specify vcluster dataframe.
>
> **[5:53](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=353)** Now, this will return a machine learning model, so let's save it.
>
> **[5:58](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=358)** So, what I'm doing here is I'm basically saying, take the features from the vcluster dataframe, fit it to the kmeans model that we just specified, and keep the results in a machine learning model called kmodel.
>
> **[6:13](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=373)** Okay, so the model's been calculated.
>
> **[6:15](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=375)** And really, the critical thing in a kmeans model is the cluster centers.
>
> **[6:19](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=379)** So let's look up what the cluster centers are.
>
> **[6:25](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=385)** What we find is we have a set of three centers, and each center is specified by three values.
>
> **[6:33](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=393)** So you can think of this almost like an X Y Z three-dimensional space.
>
> **[6:36](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=396)** Here instead of being X Y and Z, which our dimensions are CPU utilization, free memory and session count.
>
> **[6:44](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=404)** And each of these values indicate the center of one of the three clusters.
>
> **[6:49](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=409)** And all of the rows in our utilization dataframe fit or fall into one of these three clusters, and we can determine that by measuring the distance from the feature vector of each row to each of these centers.
>
> **[7:06](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=426)** Now, if you're not familiar with kmeans, and some of the things that I just explained might not be too familiar or might not be terribly clear, I suggest you look at my course on Spark and AI.
>
> **[7:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-1?u=76281980&t=437)** There's a more detailed explanation of kmeans modeling and other machine learning algorithms.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), case, (1), pass (1), function (1), default, (1)
> **Env Vars:** cpu (7), sql (1), json (1)
> **Code Identifiers:** df_util (4), inputcols (1), outputcol (1)
> **Definitions:** is called (2), stands for (2)
> **Versions:** 0.77 (1), 0.22 (1), 58.0 (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Basic machine learning with DataFrames, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=0)** - [Instructor] We're going to look at another commonly used machine learning technique or data science or statistics technique called linear regression.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=7)** Linear regression is useful when you have data in which you believe you can make predictions about one variable using knowledge about another variable.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=17)** So for example, if you believe that you think knowing CPU utilization will alow you to guess what the number of sessions are or the free memory are, then linear regression would be a good technique to use to implement that.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=30)** So once again, we'll use utilization data.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=33)** And I'll just load that.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=35)** And as in the previous video, we're uploading some code from the machine learning libraries in Spark.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=41)** And in particular, we're loading the VectorAssembler, which we have seen before, and then we're also loading the linear regression models.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=49)** So, what we want to do is create a vector with the feature columns that we're interested in.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=55)** Now for our first task, let's see if we can make predictions using CPU utilization.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=60)** So to do that, I'm going to create a VectorAssembler, which is created by calling VectorAssembler.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=72)** This is some of the code we imported.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=74)** So with VectorAssembler, we simply specify the list of columns that we're interested in working with and we pass that to the input cols parameter.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=83)** And in this case we are just interested in working with CPU utilization.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=92)** And we want that to be put into a vector and that vector should be saved into a column called features.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=100)** And let's create another data frame with the transformation applied and we'll call this data frame v util.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=110)** This'll be the result of taking that VectorAssembler we just created and asking it to transform the data inside of d f util and apply the transformation, which is to take the input columns and create an open column called features.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=127)** And let's take a look at what d f util looks like.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=133)** 'Kay, we have the data we're familiar with by now, CPU utilization, event date time, free memory, server id, and session count.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=140)** We also have a column features.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=142)** And features has a vector, or an array, with all of the values that we're interested in using in our linear prediction.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=149)** Now, there's only one CPU utilization, so that's why we have just one value in the features vector.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=156)** Now, the next thing we want to do is create a data structure that has a linear regression model, which we can then fit our data to.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=164)** So let's call our model lr.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=166)** And we're going to create lr by calling, again, some of the code that we imported.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=171)** In this case we're going to call linear regression.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=175)** And we're going to hasten the names of our features.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=179)** So in this case we're going to specify feature cols explicitly.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=185)** And we also need something called our label column.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=189)** And in this case, we want to be able to try and predict session count, so we'll pass that in as our label column.
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=199)** And label is a term that's commonly used in machine learning, that's why it's given that particular parameter name.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=204)** Oh, and actually it's features, plural, col.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=207)** So I'll correct that.
>
> **[3:29](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=209)** Now we have a model, which is basically the core structure.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=213)** And now we want to fit our particular set of data to that, and that will give us our full model, our fit model.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=219)** So we'll create a local data structure called lr model.
>
> **[3:43](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=223)** And that will take our linear regression, basic model, and fit the data that's in d f v util to build a linear regression model.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=234)** Now, lr model now has our linear regression model, and a linear regression model is specified by two things.
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=242)** The coefficients and the intercept.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=245)** If you recall, the formula of a line is y equals mx plus b.
>
> **[4:11](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=251)** Well in this case, the coefficients correspond to m in that case, or the slope of the line.
>
> **[4:17](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=257)** So if we want to know what the slope is, we could look at lr model and ask for the coefficients.
>
> **[4:24](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=264)** And it'll return, in this case, just one value.
>
> **[4:26](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=266)** So, the slope in this case is 47.02.
>
> **[4:29](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=269)** The other thing we need to know is where does the line intercept the y axis.
>
> **[4:34](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=274)** And for that, we look at the intercept.
>
> **[4:38](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=278)** And in this case, the intercept is 40.417, roughly.
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=283)** So knowing the coefficients and knowing the intercept, we can specify this line, and this line can be used to make predictions.
>
> **[4:50](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=290)** One of the things we often want to know when we're building a predictive model is what's the error that occurs when you fit that model?
>
> **[4:58](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=298)** 'Cause it's not going to fit exactly all of the data points.
>
> **[5:01](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=301)** So what we often use for a measure is something called the root means square error.
>
> **[5:05](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=305)** And to look at that in the lr model, you can specify the lr model and then look in summary and root mean squared error.
>
> **[5:16](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=316)** And this gives us a measure of the error.
>
> **[5:19](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=319)** So this is the basics of how you can go about using a data frame to create a linear model, and then use that linear model to calculate coefficients and intercepts of a line and then to understand how well that line fits the data by looking at the root mean squared error.
>
> **[5:36](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/basic-machine-learning-with-dataframes-part-2?u=76281980&t=336)** And if you'd like more information on linear models then I suggest you look up my course on advanced SQL for data science and also the course on using SQL for exploratory data analysis.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (5), let (4), pass (2), return, (1)
> **Env Vars:** cpu (5), sql (2)
> **CLI Commands:** make (3)
> **Versions:** 47.02 (1), 40.417 (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/next-steps?u=76281980&t=0)** - [Dan] Now that we've concluded our look at Spark SQL and data frames, you can continue to follow-up on both Spark and SQL with other courses in the library.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/next-steps?u=76281980&t=10)** If you're interested in Spark and machine learning, I suggest you look into my course on Spark for AI and machine learning.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/next-steps?u=76281980&t=18)** If you're interested in data science, I suggest you look at my advanced course on SQL for data science, which covers topics like windowing and other advanced SQL functions.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/next-steps?u=76281980&t=29)** Also, Spark and SQL are both commonly used for data exploration and data analysis.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-spark-sql-and-dataframes/next-steps?u=76281980&t=35)** If this is something you're interested in, then I suggest you look up the course on exploratory data analysis with SQL.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6)
> **Code Keywords:** continue (1)
> **Speakers:** - [dan] (1)


## Path Context

### In [[Advance Your Data Skills in Apache Spark]]
← [[Apache Spark Essential Training- Big Data Engineering]] | **2 of 6** | [[Azure Spark Databricks Essential Training]] →

## Appears In

- [[Advance Your Data Skills in Apache Spark]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)