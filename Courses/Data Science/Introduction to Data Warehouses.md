---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: introduction-to-data-warehouses
url: "https://www.linkedin.com/learning/introduction-to-data-warehouses"
duration_minutes: 49
duration: 49m
level: Beginner
updated: 12/11/2024
learners: 45715
skills:
  - Data Warehousing
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEFPcdVUWRPlw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687299300554?e=2147483647&amp;v=beta&amp;t=2VHEbZZtyLZUhAgU_e8_SDFKsH78sYOJM2cFgpzlC74"
linkedin_topic: Data Science
learning_paths:
  - '[[Data Engineering Foundations Professional Certificate by Astronomer]]'
  - '[[Introduction to Fundamental Skills for Data Work- Data Storage]]'
  - '[[Explore a Career in Data Engineering]]'
prev_courses:
  - '[[Learning Apache Airflow]]'
  - '[[Relational Databases Essential Training]]'
  - '[[Hands-On Introduction- Data Engineering]]'
next_courses:
  - '[[Learning Data Governance]]'
  - '[[NoSQL Essential Training]]'
  - '[[Learning SnowflakeDB]]'
path_nav: '[{"path":"Data Engineering Foundations Professional Certificate by Astronomer","position":5,"total":6,"prev":"Learning Apache Airflow","next":"Learning Data Governance"},{"path":"Introduction to Fundamental Skills for Data Work- Data Storage","position":3,"total":6,"prev":"Relational Databases Essential Training","next":"NoSQL Essential Training"},{"path":"Explore a Career in Data Engineering","position":3,"total":7,"prev":"Hands-On Introduction- Data Engineering","next":"Learning SnowflakeDB"}]'
path_count: 3
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - topic/cloud-computing
  - skill/data-warehousing
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Introduction%20to%20Data%20Warehouses.md)

![Introduction to Data Warehouses](https://media.licdn.com/dms/image/v2/D560DAQEFPcdVUWRPlw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687299300554?e=2147483647&amp;v=beta&amp;t=2VHEbZZtyLZUhAgU_e8_SDFKsH78sYOJM2cFgpzlC74)

# Introduction to Data Warehouses

> Data analytics skills are in high demand these days, and you can’t afford to fall too far behind. Regardless of your current level of experience or technical background, you need to be conversant with the latest tools in the field. Join instructor Deepak Goyal in this course, designed for aspiring IT professionals, to get an introduction to data warehouses, how they work and differ from other solu

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses) | 49m | Beginner | 46K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Introduction to data warehouses](#introduction-to-data-warehouses)
- [**1. Introduction to Data Warehouses**](#1-introduction-to-data-warehouses) (6 videos)
  - [Data warehouse key concepts](#data-warehouse-key-concepts)
  - [Importance of data warehouses](#importance-of-data-warehouses)
  - [Data lake vs. data warehouse](#data-lake-vs-data-warehouse)
  - [Data mart vs. data warehouse](#data-mart-vs-data-warehouse)
  - [ETL process](#etl-process)
  - [Traditional data warehouse options](#traditional-data-warehouse-options)
- [**2. Dimension Modeling**](#2-dimension-modeling) (6 videos)
  - [Dimensional modeling](#dimensional-modeling)
  - [Dimensional modeling vs. a traditional approach](#dimensional-modeling-vs-a-traditional-approach)
  - [Facts](#facts)
  - [Dimensions](#dimensions)
  - [Star schema](#star-schema)
  - [Snowflake schema](#snowflake-schema)
- [**3. Create Your First Data Warehouse**](#3-create-your-first-data-warehouse) (3 videos)
  - [How to install SQL Server](#how-to-install-sql-server)
  - [How to connect SSMS to SQL Server](#how-to-connect-ssms-to-sql-server)
  - [How to create a data warehouse using SQL Server](#how-to-create-a-data-warehouse-using-sql-server)
- [**4. Modern Data Warehouses**](#4-modern-data-warehouses) (3 videos)
  - [Cloud data warehouse](#cloud-data-warehouse)
  - [Cloud vs. on-premises data warehouse](#cloud-vs-on-premises-data-warehouse)
  - [Cloud data warehouse options](#cloud-data-warehouse-options)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to data warehouses
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/introduction-to-data-warehouses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/introduction-to-data-warehouses?u=76281980&t=0)** - [Deepak] Do you want to become a data engineer or a data scientist?
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-data-warehouses/introduction-to-data-warehouses?u=76281980&t=4)** Then you want to start by understanding what a data warehouse is.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-data-warehouses/introduction-to-data-warehouses?u=76281980&t=9)** In this course, I will teach you the basics of data warehouse, how to use it, and explain how data warehouses fit into the cloud world.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-data-warehouses/introduction-to-data-warehouses?u=76281980&t=20)** Hi, I'm Deepak Goyal.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-data-warehouses/introduction-to-data-warehouses?u=76281980&t=21)** I'm a certified cloud solution architect with 15 years of experience as a data professional.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-data-warehouses/introduction-to-data-warehouses?u=76281980&t=28)** The great thing about this course is you just need a very basic computer knowledge when you start, but you will leave with the foundations you need to become a data warehouse practitioner.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-data-warehouses/introduction-to-data-warehouses?u=76281980&t=40)** So let's start your journey into the data world by kick-starting this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), cloud (2)
> **Speakers:** - [deepak] (1)


### 1. Introduction to Data Warehouses

[↑ Back to Table of Contents](#table-of-contents)

#### Data warehouse key concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=0)** - [Instructor] Do you ever feel like you are drowning in data?
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=3)** Do you struggle to make sense of it all and turn it into available insights?
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=8)** That's where the data warehouse comes into play.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=12)** In layman terms, a data warehouse is a large warehouse that's filled with data rather than physical products.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=19)** It's basically like a normal database, but very large in size.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=24)** However, it's important to note that a data warehouse is different from database.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=31)** A data warehouse is typically built on top of some type of database so you can think of a data warehouse as a platform built with help of a database.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=43)** Here is an example.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=46)** Assume that you go to an e-commerce website to buy a product.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=50)** Once you buy something, a transactional order gets generated.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=55)** That's typically when an entry gets inserted into an e-commerce database.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=62)** Later on, this entry from a database will move to a data warehouse by a process popularly known as the extract, transform, and load process or ETL.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=76)** Data warehouse gets data from variety of databases.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=80)** In an organization, multiple departments and projects might have their own databases.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=87)** For example, sales, operations, and customer service, all these databases in general are known as OLTP.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=97)** That is online transaction processing database because they are attached to some application or website and are intended for fast read/write of small size data.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=110)** Using these databases, we are creating a data warehouse.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=116)** All these databases will write back their data in one common big database also known as the data warehouse, and that's why they are considered an OLAP, that is online and analytical processing system.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=133)** This data warehouse will be used for reading and analyzing large amounts of data.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=139)** Many data warehouse have dozens of data sources and you can also assume that there is a linear relationship here.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=148)** The more sources, the more complex the overall environment.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=151)** Another important point is that data is copied, not moved.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=156)** In other words, the data remains in our server system, that is OLTP, and then copies are made and sent into the data warehouse; that is OLAP.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=170)** In our next video, we will discuss why you should use a data warehouse.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=174)** Come join me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (22), database (8), [[Databases]] (5), [[E-Commerce]] (2), [[Microsoft Products|Products]] (1)
> **Definitions:** is a  (2), known as (2), is an  (1), in other words (1)
> **Env Vars:** oltp (2), olap (2), etl (1)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Importance of data warehouses
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=0)** - [Instructor] In today's world businesses are collecting more data than ever before.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=4)** From sales figure to customer information the amount of data being generated is overwhelming, but how do we make sense of all this data?
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=14)** That's where the data warehouse comes in play.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=17)** Data warehouses are designed to help organizations make sense of their data and use it to make better decisions.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=25)** It also makes it easier to access the data.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=29)** Instead of having to search through multiple databases and systems, all of the is stored in one place.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=37)** This makes it easier for the team to find the information they need quickly and easily.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=44)** Another benefit of using a data warehouse is that it allows for better data analysis.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=51)** With all of your data in one place, it's easier to spot trends and patterns that can help your business make better decisions.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=60)** For example, a retail store might use data from data warehouse to identify which products are selling well and which aren't so they can adjust their inventory accordingly.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=73)** Additionally, analyzing the data from data warehouse will eliminate the reporting load from the transactional database and avoid slowing it down.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=83)** Data warehousing also allows for better data security.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=87)** With all of your data in one place it's easier to protect it from unauthorized access and keep it safe from cyber threats.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=96)** And since a data warehouse is optimized for reporting analysis, it can handle large amount of data without slowing it down or crashing.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=106)** By using a data warehouse, businesses can make better decisions, improve their operations, and stay competitive in today's fast paced business environment.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=117)** Now let's understand another popular concept in data world that is a data lake.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=123)** In our next video, we will define what it is and explain how it's different from a data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (23), business (2), [[Search]] (1), [[Databases]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (5), find (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Data lake vs. data warehouse
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=0)** - [Instructor] Data lake and data warehouse are two popular terms that can be a little confusing.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=5)** Let's look at their core differences.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=8)** A data lake is a centralized repository that allows businesses to store all their data, structured and unstructured, at any scale.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=17)** It's designed to store data in its raw format and provide a single source of truth for all the data within an organization.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=25)** An example could be customer data in an enterprise system, available at multiple applications and database levels.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=33)** A data lake can help you find the latest one.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=36)** Now, let's define structured data.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=40)** It is a type of data with a well-defined schema.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=42)** For example, tables in relational databases.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=46)** There, we have fixed number of columns and data types for every row, while unstructured data has no fixed schema.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=55)** Examples include a plain text file, image, audio, or a video file.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=60)** One key difference between a data lake and a data warehouse is the type of data it can store.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=66)** A data lake can store any type of data, while a data warehouse typically stores structured data.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=73)** This means that a data lake is better suited for storing raw data, while a data warehouse is better for storing data that has been cleaned, transformed, and organized for analysis.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=86)** Another difference is the way the data is processed.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=90)** In a data lake, data is only processed when needed.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=94)** This allows for faster data ingestion and greater flexibility.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=99)** In a data warehouse, data is typically transformed and organized before it is stored, which can take longer, but allows for faster querying and analysis.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=111)** Now, here is a challenge for you.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=113)** Imagine you worked at an ecommerce organization and had to analyze sales data.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=120)** Would you use a data warehouse or a data lake?
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=125)** The answer is data warehouse.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=128)** The reason is sales data is a structured data.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=131)** Whenever you have to analyze structured data, the best way is to use a data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (36), database (1), [[Relational Databases]] (1), [[Unstructured Data]] (1)
> **Definitions:** is a  (4), means that (1)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Data mart vs. data warehouse
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980&t=0)** - [Instructor] In this video, we will talk about the difference between the data warehouse and the data mart.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980&t=6)** Let's understand these two concepts along with real-world examples to help you understand when to use each one.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980&t=13)** So let's dive in.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980&t=15)** A data mart is a smaller, more focused version of a data warehouse.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980&t=19)** It is designed to provide specific, targeted information to a specific department or group within an organization.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980&t=28)** Think of data mart as a specialized collection of books within a library tailored to the needs of a specific group of users.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980&t=36)** For example, imagine a retail company that has a data warehouse that stores all of its sales data.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980&t=44)** The finance department might have a data mart that is focused on financial data, such as sales by store.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980&t=52)** While the marketing department might have a data mart that is focused on customer data, such as demographics and purchasing habits.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980&t=61)** Another example, a hospital might have a data warehouse that stores all of its patient's information, including medical history, lab results, and billing information.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980&t=73)** The cardiology department might have a data mart that is focused on cardiac data, such as ECG results and medications.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980&t=82)** While the neurology department might have a data mart that is focused on neurological data, such as MRI results and patient symptoms.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980&t=92)** In summary, a data warehouse is a large centralized repository of data.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980&t=96)** While a data mart is a smaller, more focused version of a data warehouse, which is targeted to a specific department or a group within an organization.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980&t=108)** Now that you understand the difference between a data warehouse and a data mart, try applying this knowledge to a real-world scenario.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980&t=116)** Think of an organization you're familiar with and brainstorm example of how a data warehouse and data mart might be used to support decision-making and analysis within that organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (23), [[Financial Data]] (1), [[Decision-Making]] (1)
> **Analogies:** such as (4), for example (1), imagine (1)
> **Definitions:** is a  (3)
> **Env Vars:** ecg (1), mri (1)
> **Speakers:** - [instructor] (1)

#### ETL process
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980&t=0)** - [Instructor] You have heard the term ETL a couple of times in this course.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980&t=5)** ETL stands for extract, transform, and load.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980&t=9)** It is a process that is used to get the data from a variety of sources, clean and transform the data and then load it into a destination such as a data warehouse or a data mart.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980&t=22)** Let's take the insurance industry as an example.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980&t=25)** An insurance company may have policyholder information stored in different system, such as their website, call center, and agents.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980&t=33)** The ETL process would extract the data from these different systems, clean and transform the data and then load into our data warehouse.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980&t=43)** This would give the company a single view of policyholder information which can be used for reporting and analytics.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980&t=52)** Similarly, take another example of banks.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980&t=55)** A bank may have customer information stored in different systems, such as an online banking which could be one database.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980&t=63)** ATM transaction might have another database and branches might have their own separate database.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980&t=70)** The ETL process would extract the data from these different systems, clean and transform the data and then load it into a data warehouse.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980&t=79)** This will give the bank a single view of customer information which could be used for reporting and analytics, such as identifying patterns and trends in the customer behavior.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980&t=92)** In addition, ETL can be used in both industries to detect and prevent fraud.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980&t=98)** By extracting data from various sources, cleaning and transforming it, and loading it into a data warehouse, an insurance company or bank can analyze the data to identify suspicious activity such as multiple claims from the same IP address or numerous account opening from the same person.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980&t=119)** There are variety of tools such as SSIS and Informatica which are specifically used for ETL purpose.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980&t=126)** Next, let's explore different popular data warehousing options and see which one is best for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (14), etl (6), database (3), [[Analytics]] (2), [[Banking]] (1)
> **Env Vars:** etl (6), atm (1), ssis (1)
> **Analogies:** such as (6)
> **Definitions:** stands for (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### Traditional data warehouse options
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=0)** - [Instructor] So far, we have talked a lot about what a data warehouse is and how it helps an organization.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=8)** Now, you might be wondering what data warehouses solutions are available in the market and which one I can choose.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=15)** Let's explore the variety of data warehouse used commonly across the industry.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=21)** When it comes to, specifically, traditional data warehousing, some of the most popular options include Teradata, IBM Db2, Oracle Database, Microsoft SQL Server and MySQL.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=34)** Starting with Teradata, this is a relational database management system known for its scalability and high performance.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=43)** It's a popular choice for large enterprises, particularly those in telecommunication and finance.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=50)** IBM Db2 is another relational database management system known for its robustness and reliability.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=57)** It is a popular choice for businesses in a variety of industries, including retail and healthcare.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=64)** Oracle Database is a relational database management system that is known for its flexibility and scalability.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=71)** It's a popular choice for the businesses in a variety of industries, including finance and manufacturing.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=78)** Microsoft SQL Server is another relational database management system.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=83)** It is known for its ease of use and integration with other Microsoft products.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=88)** It's a popular choice for small and medium sized businesses.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=93)** MySQL is a popular open-source relational database management system that is known for being cost-effective and easy to use.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=103)** It's a popular choice for small and medium-sized businesses, particularly those in ecommerce and web development industries.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=112)** In addition to these options, there are also other traditional data warehousing options available on the market, such as PostgreSQL and SQLite.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=123)** Now that you have a better understanding of some of the popular traditional data warehouse options, research some of the options and see which one fits your data warehousing needs.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=134)** Then, join me in the next chapter as we explore dimensional modeling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), database (7), management (5), [[Microsoft SQL Server]] (2), [[MySQL]] (2)
> **Env Vars:** ibm (2), sql (2)
> **Definitions:** is a  (4)
> **CLI Commands:** mysql (2)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Dimension Modeling

[↑ Back to Table of Contents](#table-of-contents)

#### Dimensional modeling
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=0)** - [Instructor] Have you ever wondered how companies like Amazon and Walmart are able to analyze and make sense of their vast amounts of data?
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=8)** The answer is dimensional modeling.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=11)** Dimensional modeling is a data modeling technique used to organize and structure a data in a data warehouse.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=18)** Dimensional modeling helps organize data in a way that solves a business problem by creating a model that is optimized for querying and analysis.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=29)** A dimensional model is made up of two types of data: facts and dimensions.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=35)** Facts are usually things that can be measured and aggregated, such as profit, sales, et cetera.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=44)** Dimensions provide additional context to these measurements.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=48)** For example, a dimension could be the year, month, or product category.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=54)** Dimension tables and fact tables are connected through a relationship to form a dimensional model.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=60)** Now let's look at how dimensional modeling can be used in a real world example.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=66)** Assume that a retailer wants to trick its sales data.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=69)** With dimensional modeling, the retailer could create separate tables for the following.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=75)** Date table has information about the date of the sale, example, year, quarter, month, and day.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=82)** Product table has the product name, category, and manufacturer.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=86)** Customer table includes things like the customer name, address, and age.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=92)** Sales table has the actual sales transactions with foreign keys to the date, product, and customer tables.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=99)** The way the facts in the dimensions are organized creates a visual image that looks like a star, which is why this method of organization data is called a star schema.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=111)** Using a dimensional model in a data warehouse is a beneficial because it's optimized for performance and usability.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=120)** This is important when you want to get data fast, which is essential for reporting and analysis.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=128)** In our next video, I will tell you why dimensional modeling is popular and compare it to a traditional approach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), product (4), business (1), next (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### Dimensional modeling vs. a traditional approach
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=0)** - [Instructor] Do you know why dimensional modeling is more popular than a traditional approach?
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=5)** The short answer is high performance and better usability.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=8)** Let me explain.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=10)** Assume that a bank wants to track information about this customer and their accounts.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=16)** A traditional approach to storing this information would be to create a single table that contains all the customer and account information.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=25)** The traditional approach will have three basic problems.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=28)** First, a wider table that is putting all the columns within one table makes it slower.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=36)** Second, a lot of data becomes redundant.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=40)** Third, it's difficult to answer questions such as, how many customer does the bank have?
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=47)** How many checking account does the bank have?
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=49)** How many saving accounts does the bank have?
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=52)** By using dimensional bonding, the bank could create separate tables for the following.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=58)** Customer table contains information about the customer.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=62)** Example, name, address, age.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=65)** Account table contains information about the account.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=69)** Example, account type balance.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=73)** Customer account table contains information about the relationship between the customers and accounts, with foreign keys to the customer and account tables.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=84)** To find out how many customers the bank has, you would simply query the customer table and count the number of rules in the customer table.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=94)** To find out how many checking accounts the bank has, you would query the account table for all the rows where account type is checking, and then count the number of rows.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=107)** Stay with me for the next video where we'll take a deeper look into the facts and dimension tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1), next (1)
> **CLI Commands:** find (2)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Facts
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=0)** - [Narrator] Facts are individual pieces of data or information that we want to store and analyze in our data warehouse.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=8)** These facts can be numerical or quantitative values.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=12)** A fact could be the number of products sold, the total sales amount, or the number of customer complaints.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=18)** To make these facts meaningful and useful, we organize them into facts tables.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=25)** A fact table is a central table in a data warehouse that contains the facts of the businesses, usually in the form of numerical values.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=34)** The fact table is the center of the data warehouse schema, and is often surrounded by dimensions tables, which categorize the facts.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=43)** Here is an example of how you would use one.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=46)** A retail store may have a fact table that contains information about sales.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=52)** This table would have columns for the date of the sale, the product sold, the number of units sold, and the total sales amount.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=61)** In the manufacturing industry, a company can have facts table that contain information about production levels, inventory levels, and material cost.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=71)** This gives manufacturer the information they need to optimize operations and reduced costs.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=79)** Facts are usually, not always, additive in nature.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=83)** Also, termed as aggregable.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=86)** For example, facts such as unit sold can be aggregable.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=91)** We add them all up to find the total amounts of sold units.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=96)** Facts are also measurable in nature.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=98)** For example, a customer name in a table would be a descriptive in nature, while the order amount by the customer would be a fact that can be measurable.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=109)** Identify a business process that you are familiar with, and think about the facts would be important to track in a data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Microsoft Products|Products]] (1), product (1), business (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [narrator] (1)

#### Dimensions
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensions?u=76281980&t=0)** - [Instructor] A dimension in the data warehousing is a way of categorizing facts or information in your data.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensions?u=76281980&t=7)** Imagine having a bunch of puzzle pieces and each piece represent a fact about your business such as the number of products sold or total sales amount.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensions?u=76281980&t=18)** The dimensions provide the context for these puzzle pieces, allowing you to categorize and group them in a meaningful ways.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensions?u=76281980&t=27)** A dimension table is a table in a data warehouse that contains the dimension data.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensions?u=76281980&t=33)** Think of dimension table as a collection of categories or attributes that describes the facts in your data.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensions?u=76281980&t=40)** For example, a dimension table could contain information about customers such as their names, addresses, and cities.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensions?u=76281980&t=49)** This information will be used to categorize the facts in your fact table, such as sales or total order by a customer.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensions?u=76281980&t=58)** Let's look at real world example to see how this works in practice.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensions?u=76281980&t=63)** A bank has a fact table that contains information about customer account transactions.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensions?u=76281980&t=69)** The fact table has column for the date of the transaction, the type of transaction, for example, deposits and withdrawals, the amount of the transaction, and the customer account number.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensions?u=76281980&t=82)** Bank also has a dimension table that contains information about time.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensions?u=76281980&t=87)** This table has column for the date, quarter, year, and fiscal period.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensions?u=76281980&t=93)** The time dimension is used to categorize the facts in the customer account transaction fact table based on time.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensions?u=76281980&t=102)** Now, in the next video we will understand the popular dimensional model techniques based on facts and dimensions table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), business (1), [[Microsoft Products|Products]] (1), next (1)
> **Analogies:** such as (3), for example (2), imagine (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Star schema
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=0)** - [Instructor] A star schema is a data modeling technique used in data warehousing.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=5)** It's called a star schema because the diagram of the schema look like a star with one center table, which we call the fact table, surrounded by multiple tables, which we call the dimension table.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=19)** The fact table contains the data that you want to analyze, and the dimension table provides the context of the data.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=27)** Let's take a closer look at how a star schema works for an insurance company.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=32)** Imagine you have a large database of policy information for all of your customers.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=38)** This database contains information such as policy numbers, the start dates, end dates, policyholder names, address, ages, premiums, and coverage amounts.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=50)** Now, let's say you want to analyze the data to find out how many policy holders are in each age group and how much premium is being corrected from each age group.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=62)** To do this analysis, you will need to organize the data into a star schema.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=68)** A star schema for this insurance data would look something like this.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=74)** The fact table would contain the policy information.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=76)** In this case, it would contain columns for policy numbers, start date, end date, policyholder, age, premium, and coverage amount.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=87)** The dimension table would provide context for the data in the fact table.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=92)** In this case, we could have a separate dimension table for policyholder information, policy information, and age group information.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=103)** By organizing the data into a star schema, you can easily analyze the data to find out how many policyholders are in each age group and how much premium is being collected from each age group.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=117)** This information can then be used by the various stakeholders to make better decisions about the company.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=125)** The benefit of using a star schema in a data warehouse includes, number one, improved data organization.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=134)** A star schema organize your data into facts and dimensions, making it easier to understand and analyze.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=141)** Number two, improved query performance.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=145)** Star schema are optimized for querying, making it faster and easier to extract the information you need from your data.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=154)** Third, better data aggregation.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=157)** A star schema makes it easy to aggregate your data, such as finding the total sales for a particular time period or location.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=166)** In the next video, we will look into where the star schema might not be the right answer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (16), database (2), next (1)
> **CLI Commands:** find (2), make (1)
> **Analogies:** such as (2), imagine (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Snowflake schema
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=0)** - [Instructor] A snowflake schema is a multi-dimensional data model that is used in data warehousing.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=6)** It's called a snowflake schema because of its unique structure that looks like a snowflake.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=12)** Unlike the star schema, which is also a multi-dimensional data model, a snowflake schema is more normalized and has a more complex structure.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=22)** So why use a snowflake schema?
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=25)** Because they're efficient at storing and retrieving data and querying.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=31)** A snowflake schema provides a clear and organized structure for data warehousing and makes it easier to handle large amounts of data.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=40)** It also helps eliminate data redundancy and increase consistency.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=45)** Here's how a restaurant can apply this concept.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=49)** The main fact table in our restaurant would be the order table, which stores information about each order placed.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=57)** The dimension table in the snowflake schema would be ingredients, customers, and payments.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=64)** The dimensions tables are related to the fact table through keys.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=69)** For example, the ingredient table would be related to the order table through a key that links the specific ingredients used in each order.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=80)** In general, a snowflake schema is better for complex data warehousing solutions with large amounts of data, while a star schema is suitable for small data warehousing solutions.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=93)** A snowflake schema is a great solution for organizing and managing data.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=97)** However, it's important to keep in mind its limitations, like its slower querying performance.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=105)** Now that we understand the different types of data models, join me in the next chapter as we get into the hands-on demos.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=113)** In the next video, I will show you how to create your own data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (13), [[Snowflake]] (9), next (2)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 3. Create Your First Data Warehouse

[↑ Back to Table of Contents](#table-of-contents)

#### How to install SQL Server
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=0)** - [Instructor] Before we get started I will be using a Windows PC for demo purposes.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=5)** Now, as you understand the concepts let's start building our first data warehouse solution.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=12)** The first step to download and install SQL Server is to go to the Microsoft website.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=18)** You will start at this URL.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=21)** We will be using the free community edition that doesn't require a license.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=26)** If you scroll down a little bit on this website you will find that there are two free editions available.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=34)** One is Developer, another one is an Express Edition.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=39)** Developer Edition is meant for development and testing the SQL Server, so if you are a student or a working professional and want to learn and practice the SQL Server then Developer Edition would be the best choice as this contains almost all the features available in the paid edition.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=58)** For our demo purpose we are going to choose Developer Edition.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=65)** As soon as we click on the Download button under the Download folders our installation package get downloaded.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=72)** Now, let's go down to the Download folder and see our downloaded file.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=77)** Now, you can see that our file SQL2022-SSEI-Dev got downloaded.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=87)** Just double-click on this installation package to start installing our SQL Server.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=95)** Now, it will ask me the confirmation, whether I really wanted to go and install this.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=100)** I'm saying that yes.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=103)** Now, you have to select whether you want to choose the Basic, Custom, or Downloaded one.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=110)** So, the installation type which we're going to choose is the Basic one.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=113)** The advantage of choosing this Basic one is that it will choose all the choices on its own.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=120)** You don't have to go and input all those option manually.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=126)** This one sets up all the basic configuration which is needed for your standard purpose.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=133)** So, let's select this Basic installation type.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=137)** Now it will ask you to accept the license terms and conditions.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=142)** Click on Accept.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=144)** Now it will ask you the installation location.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=147)** I prefer to keep the location as default, which is inside the program files.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=153)** Now let's click on the Install button.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=156)** Now, this will going to take some time, so meanwhile you can take a rest or grab a cup of coffee.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=167)** Finally, after waiting for a brief period of time, our SQL Server Developer Edition has been installed successfully.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=175)** If you look at it, here you get the instance name, MSSQLSERVER.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=181)** So, that is the name of your instance for this SQL Server.
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=186)** Here you get the SQL Server Log folder, so in case some logs get generated and you want to see it this is the exact folder location.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=198)** This is Installation Media folder location.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=201)** And finally, this is the Resource folder for the installation.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=206)** In the bottom you see the four buttons.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=208)** The first one is the Connect Now.
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=211)** So, in case when you want to access the SQL Server through a command line interface you can click on this Connect Now, and this will open up a command prompt so you can connect to your SQL Server through a command prompt.
>
> **[3:43](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=223)** So, you can see that the command line select @@Version has been executed, and that has printed the current version of this server.
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=233)** Let me close it down.
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=236)** Second option is for customization, in case you want to customize some of the installation steps you can do it from here.
>
> **[4:04](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=244)** Third is a Install SSMS option.
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=248)** So, many people love to interact with the SQL Server through SSMS.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=252)** SSMS stands for SQL Server Management Studio.
>
> **[4:17](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=257)** This is one of the popular way for connecting the SQL Server in a graphical user interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (12), prompt (2), [[Windows]] (1), data (1), [[Microsoft]] (1)
> **Env Vars:** sql (12), ssms (3), url (1), sql2022 (1), ssei (1)
> **UI Navigation:** click on (4), go to (1), scroll down (1), double-click (1)
> **Tools:** command line (2), command prompt (2)
> **Prerequisites:** install (4)
> **Definitions:** is an  (1), is a  (1), stands for (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### How to connect SSMS to SQL Server
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=0)** - Installing the SSMS status, SQL Server Management Studio can be done in multiple ways.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=6)** One way is to directly click on this install SSMS button.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=11)** That will take you to the website.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=13)** From there, you can download the SSMS.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=16)** Let me minimize this.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=18)** So this is the website or else you can type in this website on your own and you can directly download it from here.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=27)** Once you get onto this website, you have to scroll a little bit down, and there you will see the option to download the SQL Server Management Studio.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=37)** So this is the latest version at this point of time.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=41)** Maybe in future when you see this video, there might be a different version available to you.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=47)** Let's click on this link to download the SSMS.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=53)** You can see that the download has been started.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=59)** Now, as the download get completed, either open the executable file from here or go to the download folder manually and open it from there.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=68)** Let's double click this executable file.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=73)** Now, this will open up the installation menu.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=76)** Now, it is very simple.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=78)** Just click on the install button, and this will install everything on its own.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=83)** You can see that the default location is SQL Server Management Studio 19.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=89)** If in case you want to change it you can click on the change and browse a different folder.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=95)** I would recommend to keep it as it is, and let's click on the install button to get it installed.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=102)** Our SSMS is installed successfully.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=105)** Now, you can click on this close button to close down this installation window.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=110)** In the next video, we will see how we can use this SSMS to create the fax and dimension table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (3), management (3), next (1)
> **Env Vars:** ssms (6), sql (3)
> **UI Navigation:** click on (6), open the (1), go to (1)
> **Prerequisites:** install (4)
> **Exercise Files:** download the (3)
> **Cross-References:** in the next (1)
> **Speakers:** - installing (1)

#### How to create a data warehouse using SQL Server
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=0)** - [Instructor] Now, as we have installed SQL Server and SSMS successfully, hence, it's a time to create our first data warehouse.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=10)** So let me open the SSMS.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=12)** For that, go down to your Windows search bar, type in SSMS and it'll show you SQL Server Management Studio.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=22)** Click open.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=24)** It'll ask you this server name and authentication.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=27)** Keep everything default, because at the time of installation we have not given anything.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=32)** So now on the left-hand side you can see that our database server is got connected.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=39)** Now go to this database, right click and create new database.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=44)** Let's take an example of a retail data warehouse.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=47)** So give the database name as Retail Data Warehouse.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=52)** Now we will add three tables in inside this data warehouse.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=56)** For that, just expand the database, go to Retail Data Warehouse, right click on the tables and select new table.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=65)** It'll ask you the column name.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=66)** Give the column name as product ID, which is of type integer, and I give one more column name that is product name, and I keep it the character as reader type.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=80)** Now click on save.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=81)** It'll ask you to give the table name.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=83)** Let's give the table name as ProductDim.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=86)** Say, okay.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=87)** I'm creating the table using the graphical user interface.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=91)** You can also create the same table using the create table query.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=96)** Let's right click on the tables again, and select new table.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=102)** This time let's create the StoreDim table.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=105)** So give the column as Store ID.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=108)** I keep the data type as integer, and then next column is store name.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=112)** I keep the type as character only.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=115)** Click on save and give the table name as StoreDim.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=121)** Now we need one fact table.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=124)** So let's go to table again, right click, create new table.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=130)** Give the column name as sales, data type integer, and for the connection between this fact table and the dim table, let's give two more columns like product ID.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=143)** That is of type integer, and store ID, that is of integer.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=149)** So we are trying to save the sales data or a sales information for every product which belong to a specific store.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=158)** So that's the intention of this fact table.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=161)** Now click on save, give the table name as SalesFact, and say, okay.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=167)** So three tables got created.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=170)** Now to view it completely, click on the database diagram and right click and say new database diagram.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=178)** It will ask you whether you wish to create, say yes.
>
> **[3:04](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=184)** It'll ask you to select all the tables, select all the tables, and say add.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=191)** So you can see that in this canvas, you got all those three tables.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=196)** Now, as we have learned in the style schema, the fact table comes in the center and your dimension table is around it in like a star schema.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=207)** Now to make the connection between them, just click on this column that is a product ID column, right click, make it a primary key and just drag this column to the sales fact.
>
> **[3:43](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=223)** So this will create the relationship.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=226)** So on the left hand side our table is ProductDim table with product ID.
>
> **[3:51](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=231)** And on the sales side our column is product ID.
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=236)** So it's like we are creating the foreign key relationship.
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=241)** We can do this either through this UI, or you can do through SQL Query as well.
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=248)** And now let's say okay, and say, okay.
>
> **[4:11](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=251)** So now you can see that a relationship has been developed between the ProductDim and SalesFact.
>
> **[4:17](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=257)** Similarly, go to the store ID, right click, make this as a store ID as a primary key and drag this column to SalesFact.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=268)** Now this will again ask you what is the foreign key?
>
> **[4:32](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=272)** And here choose the option as store ID and say, okay, that's it.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=280)** So that's how you can create the relationship between these two tables, and that's how you can end up with creating your first star schema dimensional model.
>
> **[4:51](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=291)** In the next video, we will going to talk about the more advanced data warehouse solutions, that is the cloud data warehouse solutions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), database (7), product (7), [[Microsoft SQL Server|Sql server]] (2), next (2)
> **UI Navigation:** click on (7), go to (4), open the (1)
> **Env Vars:** sql (3), ssms (3)
> **CLI Commands:** make (3)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)


### 4. Modern Data Warehouses

[↑ Back to Table of Contents](#table-of-contents)

#### Cloud data warehouse
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse?u=76281980&t=0)** - [Instructor] A Cloud Data Warehouse is a centralized repository of data that is stored and managed in the cloud.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse?u=76281980&t=7)** It allows you to store and manage data from various sources in a more efficient and cost effective way.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse?u=76281980&t=14)** But what does this look like in a practice?
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse?u=76281980&t=18)** Let's say you are a retail company that wants to analyze customer behavior.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse?u=76281980&t=24)** You might store data from your website, mobile apps, social media and in store purchase in a cloud data warehouse.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse?u=76281980&t=32)** Then you can use specialized tools such as SQL or data visualization software to extract insights from it.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse?u=76281980&t=41)** So as you can see, a cloud data warehouse is a powerful tool for any company looking to utilize its data for analytics purposes.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse?u=76281980&t=50)** In our next video, we'll talk more about how to choose between the on-prem and cloud data warehouse to meet your business needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), cloud (5), [[SQL]] (1), [[Analytics]] (1), next (1)
> **Definitions:** is a  (2)
> **Env Vars:** sql (1)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Cloud vs. on-premises data warehouse
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=0)** - [Instructor] Data is at the heart of every modern business, but where the data lives can vary greatly.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=6)** Some companies choose to store their data in on-premises data warehouses, while others opt for cloud data warehouses.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=16)** Let's start with on-premises data warehouses.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=20)** These are physical data warehouses that are installed and maintained on a company's own servers.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=27)** The biggest advantage of on-premises data warehouses is control.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=32)** Companies have complete control over their data, from how it's stored to who has access to it.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=40)** On-premises data warehouses also tends to be faster and more reliable as the data is stored locally and doesn't need to travel over the internet.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=51)** However, there are also some downsides to an on-premise data warehouse.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=57)** One, it can be expensive and time consuming to set up and maintain.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=62)** Companies need to invest in hardware, softwares, and IT staff to manage their own data center.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=70)** On-premise data warehouses can also be limited in their scalability, as the amount of data that can be stored is dependent on the physical space available in the server room.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=83)** Now let's talk about cloud data warehouses.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=87)** These are data warehouses that are hosted on the cloud servers rather than on-premises servers.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=94)** One of the biggest advantage of cloud data warehouses is their scalability.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=99)** Companies can easily scale up or down their data storage and processing capabilities as their needs change without the need for physical servers or additional IT staff.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=112)** Cloud data warehouses are also often more cost effective as companies only pay for the storage and processing power they need rather than having to invest in expensive hardware.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=126)** Another advantage of cloud data warehouse is accessibility.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=130)** With data stored in the cloud, employees can access from anywhere with an internet connection, making it easier to collaborate and work remotely.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=140)** Additionally, cloud data warehouses often comes with building tools for analyzing the data, such as data visualization and machine learning capabilities.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=151)** This makes it easier for the companies to derive insights from their data and make more informed decisions.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=158)** However, there is also some downside to cloud data warehouses.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=162)** First, there can be concerns around data security and privacy as data is stored on remote servers that may not be the under company's control.
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=173)** Secondly, cloud data warehouses can also be slower and less reliable as data needs to be travel over the internet and can be affected by network condition or outages.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=185)** So as you can see, both on-premises and cloud data warehouses have their pros and cons.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=192)** It's up to each individual company to weigh the benefits and drawbacks and make the best decision for their specific needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (32), cloud (11), [[Hardware]] (2), [[Scalability]] (2), business (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Cloud data warehouse options
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=0)** - [Instructor] Now, as we have explored the difference between the cloud and on-premises data warehouses, let's dive into some of the most popular cloud data warehouse options available on the market today.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=13)** First up, we have Amazon Redshift.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=15)** Amazon Redshift is a fully managed, petabyte-scale data warehouse service.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=20)** Redshift is designed to handle large amounts of data and it can easily scale up or down as your business needs change.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=29)** One of the biggest advantages of Amazon Redshift is its integration with other Amazon services, such as Amazon S3 and Amazon EMR.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=40)** Another popular cloud data warehouse option is Microsoft Azure Synapse Analytics, which is a fully managed, petabyte-scale analytics service that can be handled both structured and unstructured data.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=54)** One of the biggest advantage of Azure Synapse Analytics is its integration with other Microsoft Azure services such as Azure Data Factory and Azure Databricks.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=65)** This makes it easy to move data into and out of the Synapse Analytics and to perform big data processing tasks using Databricks.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=74)** Next one is Google BigQuery.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=77)** It is fully managed, serverless data warehouse that can handle large amounts of data.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=83)** BigQuery is designed to be fast and easy to use, with a SQL-like interface that makes it accessible to both developers and analysts.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=94)** It can also be integrated with other Google products like Cloud Storage and Data Studio.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=101)** Finally, there's Snowflake, which is a cloud-native data warehouse that can handle both structured and semi-structured data.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=110)** Snowflake is designed to be fast, flexible, and easy to use with a SQL-like interface that makes it accessible to both developers and analysts.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=121)** One of the biggest advantage of Snowflake is its architecture, which separates compute and storage.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=128)** This makes it easy to scale compute and storage independently, which can reduce the cost for the businesses.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=135)** There are a number of popular cloud data warehouses options available to businesses today.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=141)** Each option has its own unique strengths and weaknesses.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=144)** So it's important to choose the one that best fits your business needs.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=150)** Now that you have learned about the most popular cloud data warehouse options, take a moment to think about your own business needs.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=159)** Which cloud data warehouse do you think would be the best fit for your businesses and why?
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=165)** Write down your thoughts and then go do some research.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (15), cloud (8), [[Analytics]] (4), business (3), [[Snowflake]] (3)
> **Env Vars:** sql (2), emr (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-data-warehouses/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/next-steps?u=76281980&t=0)** - [Deepak] That brings us to the end of the course.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-data-warehouses/next-steps?u=76281980&t=3)** You did great in understanding what a data warehouse is, but we have only scratched the surface of the data world, so by no means is this the end.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-data-warehouses/next-steps?u=76281980&t=14)** I encourage you to keep moving forward in your learning journey.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-data-warehouses/next-steps?u=76281980&t=18)** You can start by taking my live data engineering course, Mission 100 Azure Data Engineer.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-data-warehouses/next-steps?u=76281980&t=25)** You can find the program on my LinkedIn profile page itself.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-data-warehouses/next-steps?u=76281980&t=29)** Again, my name is Deepak Goyal, and it has been both my pleasure and honor to teach you the skill of data warehouse.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-data-warehouses/next-steps?u=76281980&t=38)** Thank you for watching, investing in yourself, and for allowing me to be a small part of your learning journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[Data Engineering]] (1), [[Microsoft Azure|Azure]] (1), [[LinkedIn]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - [deepak] (1)


## Instructor

- [[Deepak Goyal]]

## Skills Covered

- Data Warehousing

## Path Context

### In [[Data Engineering Foundations Professional Certificate by Astronomer]]
← [[Learning Apache Airflow]] | **5 of 6** | [[Learning Data Governance]] →

### In [[Introduction to Fundamental Skills for Data Work- Data Storage]]
← [[Relational Databases Essential Training]] | **3 of 6** | [[NoSQL Essential Training]] →

### In [[Explore a Career in Data Engineering]]
← [[Hands-On Introduction- Data Engineering]] | **3 of 7** | [[Learning SnowflakeDB]] →

## Part of

- [[Data Engineering Foundations Professional Certificate by Astronomer]]

## Appears In

- [[Data Engineering Foundations Professional Certificate by Astronomer]]
- [[Introduction to Fundamental Skills for Data Work- Data Storage]]
- [[Explore a Career in Data Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Implementing a Data Warehouse with SQL Server 2022]] — Data Warehousing

---

[↑ Back to top](#)