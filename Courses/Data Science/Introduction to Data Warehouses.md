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
  - '[Data Engineering Foundations Professional Certificate by Astronomer](../../Paths/Data%20Science/Professional%20Certificates/Data%20Engineering%20Foundations%20Professional%20Certificate%20by%20Astronomer.md)'
  - '[Introduction to Fundamental Skills for Data Work- Data Storage](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Storage.md)'
  - '[Explore a Career in Data Engineering](../../Paths/Cloud%20Computing/Learning%20Paths/Explore%20a%20Career%20in%20Data%20Engineering.md)'
prev_courses:
  - '[Learning Apache Airflow](Learning%20Apache%20Airflow.md)'
  - '[Relational Databases Essential Training](Relational%20Databases%20Essential%20Training.md)'
  - '[Hands-On Introduction- Data Engineering](Hands-On%20Introduction-%20Data%20Engineering.md)'
next_courses:
  - '[Learning Data Governance](Learning%20Data%20Governance.md)'
  - '[NoSQL Essential Training](../Database%20Management/NoSQL%20Essential%20Training.md)'
  - '[Learning SnowflakeDB](../Cloud%20Computing/Learning%20SnowflakeDB.md)'
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
created: 2026-05-03
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

#### [Introduction to data warehouses](https://www.linkedin.com/learning/introduction-to-data-warehouses/introduction-to-data-warehouses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/introduction-to-data-warehouses?u=76281980&t=0)** - [Deepak] Do you want to become a data engineer or a data scientist? Then you want to start by understanding what a data warehouse is. In this course, I will teach you the basics of data warehouse, how to use it, and explain how data warehouses fit into the cloud world. Hi, I'm Deepak Goyal. I'm a certified cloud solution architect with 15 years of experience as a data professional. The great thing about this course is you just need a very basic computer knowledge when you start, but you will leave with the foundations you need to become a data warehouse practitioner. So let's start your journey into the data world by kick-starting this course.

> [!info]- Semantic Content
>
> **Speakers:** - [deepak] (1)


### 1. Introduction to Data Warehouses

[↑ Back to Table of Contents](#table-of-contents)

#### [Data warehouse key concepts](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=0)** - [Instructor] Do you ever feel like you are drowning in data? Do you struggle to make sense of it all and turn it into available insights? That's where the data warehouse comes into play. In layman terms, a data warehouse is a large warehouse that's filled with data rather than physical [products](../../Skills/Software%20Development/Microsoft%20Products.md). It's basically like a normal database, but very large in size. However, it's important to note that a data warehouse is different from database. A data warehouse is typically built on top of some type of database so you can think of a data warehouse as a platform built with help of a database. Here is an example. Assume that you go to an [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) website to buy a product. Once you buy something, a transactional order gets generated. That's typically when an entry gets inserted into an e-commerce database. Later on, this entry from a database will move to a data warehouse by a process popularly known as the extract, transform, and load process or ETL. Data warehouse gets data from variety of [Databases](../../Skills/Software%20Development/Databases.md). In an organization, multiple departments and projects might have their own databases. For example, sales, operations, and customer service, all these databases in general are known as OLTP.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-warehouse-key-concepts?u=76281980&t=97)** That is online transaction processing database because they are attached to some application or website and are intended for fast read/write of small size data. Using these databases, we are creating a data warehouse. All these databases will write back their data in one common big database also known as the data warehouse, and that's why they are considered an OLAP, that is online and analytical processing system. This data warehouse will be used for reading and analyzing large amounts of data. Many data warehouse have dozens of data sources and you can also assume that there is a linear relationship here. The more sources, the more complex the overall environment. Another important point is that data is copied, not moved. In other words, the data remains in our server system, that is OLTP, and then copies are made and sent into the data warehouse; that is OLAP. In our next video, we will discuss why you should use a data warehouse. Come join me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (5), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Definitions:** is a  (2), known as (2), is an  (1), in other words (1)
> **Env Vars:** oltp (2), olap (2), etl (1)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Importance of data warehouses](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=0)** - [Instructor] In today's world businesses are collecting more data than ever before. From sales figure to customer information the amount of data being generated is overwhelming, but how do we make sense of all this data? That's where the data warehouse comes in play. Data warehouses are designed to help organizations make sense of their data and use it to make better decisions. It also makes it easier to access the data. Instead of having to search through multiple [Databases](../../Skills/Software%20Development/Databases.md) and systems, all of the is stored in one place. This makes it easier for the team to find the information they need quickly and easily. Another benefit of using a data warehouse is that it allows for better data analysis. With all of your data in one place, it's easier to spot trends and patterns that can help your business make better decisions. For example, a retail store might use data from data warehouse to identify which [products](../../Skills/Software%20Development/Microsoft%20Products.md) are selling well and which aren't so they can adjust their inventory accordingly. Additionally, analyzing the data from data warehouse will eliminate the reporting load from the transactional database and avoid slowing it down. [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md) also allows for better [Data Security](../../Skills/Data%20Science/Data%20Security.md). With all of your data in one place it's easier to protect it from unauthorized access and keep it safe from cyber threats.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-data-warehouses/importance-of-data-warehouses?u=76281980&t=96)** And since a data warehouse is optimized for reporting analysis, it can handle large amount of data without slowing it down or crashing. By using a data warehouse, businesses can make better decisions, improve their operations, and stay competitive in today's fast paced business environment. Now let's understand another popular concept in data world that is a data lake. In our next video, we will define what it is and explain how it's different from a data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md) (1), [Data Security](../../Skills/Data%20Science/Data%20Security.md) (1)
> **CLI Commands:** make (5), find (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Data lake vs. data warehouse](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=0)** - [Instructor] Data lake and data warehouse are two popular terms that can be a little confusing. Let's look at their core differences. A data lake is a centralized repository that allows businesses to store all their data, structured and unstructured, at any scale. It's designed to store data in its raw format and provide a single source of truth for all the data within an organization. An example could be customer data in an enterprise system, available at multiple applications and database levels. A data lake can help you find the latest one. Now, let's define structured data. It is a type of data with a well-defined schema. For example, tables in [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). There, we have fixed number of columns and data types for every row, while [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) has no fixed schema. Examples include a plain text file, image, audio, or a video file. One key difference between a data lake and a data warehouse is the type of data it can store. A data lake can store any type of data, while a data warehouse typically stores structured data. This means that a data lake is better suited for storing raw data, while a data warehouse is better for storing data that has been cleaned, transformed, and organized for analysis. Another difference is the way the data is processed. In a data lake, data is only processed when needed. This allows for faster [Data Ingestion](../../Skills/Software%20Development/Data%20Ingestion.md)
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-lake-vs-data-warehouse?u=76281980&t=96)** and greater flexibility. In a data warehouse, data is typically transformed and organized before it is stored, which can take longer, but allows for faster querying and analysis. Now, here is a challenge for you. Imagine you worked at an ecommerce organization and had to analyze sales data. Would you use a data warehouse or a data lake? The answer is data warehouse. The reason is sales data is a structured data. Whenever you have to analyze structured data, the best way is to use a data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1), [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) (1), [Data Ingestion](../../Skills/Software%20Development/Data%20Ingestion.md) (1)
> **Definitions:** is a  (4), means that (1)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Data mart vs. data warehouse](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980&t=0)** - [Instructor] In this video, we will talk about the difference between the data warehouse and the data mart. Let's understand these two concepts along with real-world examples to help you understand when to use each one. So let's dive in. A data mart is a smaller, more focused version of a data warehouse. It is designed to provide specific, targeted information to a specific department or group within an organization. Think of data mart as a specialized collection of books within a library tailored to the needs of a specific group of users. For example, imagine a retail company that has a data warehouse that stores all of its sales data. The finance department might have a data mart that is focused on [Financial Data](../../Skills/Software%20Development/Financial%20Data.md), such as sales by store. While the marketing department might have a data mart that is focused on customer data, such as demographics and purchasing habits. Another example, a hospital might have a data warehouse that stores all of its patient's information, including medical history, lab results, and billing information. The cardiology department might have a data mart that is focused on cardiac data, such as ECG results and medications. While the neurology department might have a data mart that is focused on neurological data, such as MRI results and patient symptoms. In summary,
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-data-warehouses/data-mart-vs-data-warehouse?u=76281980&t=93)** a data warehouse is a large centralized repository of data. While a data mart is a smaller, more focused version of a data warehouse, which is targeted to a specific department or a group within an organization. Now that you understand the difference between a data warehouse and a data mart, try applying this knowledge to a real-world scenario. Think of an organization you're familiar with and brainstorm example of how a data warehouse and data mart might be used to support [Decision-Making](../../Skills/Data%20Science/Decision-Making.md) and analysis within that organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Financial Data](../../Skills/Software%20Development/Financial%20Data.md) (1), [Decision-Making](../../Skills/Data%20Science/Decision-Making.md) (1)
> **Analogies:** such as (4), for example (1), imagine (1)
> **Definitions:** is a  (3)
> **Env Vars:** ecg (1), mri (1)
> **Speakers:** - [instructor] (1)

#### [ETL process](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980&t=0)** - [Instructor] You have heard the term ETL a couple of times in this course. ETL stands for extract, transform, and load. It is a process that is used to get the data from a variety of sources, clean and transform the data and then load it into a destination such as a data warehouse or a data mart. Let's take the insurance industry as an example. An insurance company may have policyholder information stored in different system, such as their website, call center, and agents. The ETL process would extract the data from these different systems, clean and transform the data and then load into our data warehouse. This would give the company a single view of policyholder information which can be used for reporting and analytics. Similarly, take another example of banks. A bank may have customer information stored in different systems, such as an online [Banking](../../Skills/Software%20Development/Banking.md) which could be one database. ATM transaction might have another database and branches might have their own separate database. The ETL process would extract the data from these different systems, clean and transform the data and then load it into a data warehouse. This will give the bank a single view of customer information which could be used for reporting and analytics, such as identifying patterns and trends in the customer behavior. In addition, ETL can be used in both industries
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-data-warehouses/etl-process?u=76281980&t=95)** to detect and prevent fraud. By extracting data from various sources, cleaning and transforming it, and loading it into a data warehouse, an insurance company or bank can analyze the data to identify suspicious activity such as multiple claims from the same IP address or numerous account opening from the same person. There are variety of tools such as SSIS and Informatica which are specifically used for ETL purpose. Next, let's explore different popular [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md) options and see which one is best for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Banking](../../Skills/Software%20Development/Banking.md) (1), [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md) (1)
> **Env Vars:** etl (6), atm (1), ssis (1)
> **Analogies:** such as (6)
> **Definitions:** stands for (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Traditional data warehouse options](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=0)** - [Instructor] So far, we have talked a lot about what a data warehouse is and how it helps an organization. Now, you might be wondering what data warehouses solutions are available in the market and which one I can choose. Let's explore the variety of data warehouse used commonly across the industry. When it comes to, specifically, traditional [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md), some of the most popular options include Teradata, IBM Db2, Oracle Database, [Microsoft SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) and [MySQL](../../Skills/Software%20Development/MySQL.md). Starting with Teradata, this is a relational [Database Management](../../Topics/Database%20Management.md) system known for its [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and high performance. It's a popular choice for large enterprises, particularly those in telecommunication and finance. IBM Db2 is another relational database management system known for its robustness and reliability. It is a popular choice for businesses in a variety of industries, including retail and healthcare. Oracle Database is a relational database management system that is known for its flexibility and scalability. It's a popular choice for the businesses in a variety of industries, including finance and manufacturing. Microsoft SQL Server is another relational database management system. It is known for its ease of use and integration with other [Microsoft Products](../../Skills/Software%20Development/Microsoft%20Products.md). It's a popular choice for small and medium sized businesses. MySQL is a popular open-source
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-data-warehouses/traditional-data-warehouse-options?u=76281980&t=96)** relational database management system that is known for being cost-effective and easy to use. It's a popular choice for small and medium-sized businesses, particularly those in ecommerce and [Web Development](../../Topics/Web%20Development.md) industries. In addition to these options, there are also other traditional data warehousing options available on the market, such as [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) and SQLite. Now that you have a better understanding of some of the popular traditional data warehouse options, research some of the options and see which one fits your data warehousing needs. Then, join me in the next chapter as we explore dimensional modeling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Database Management](../../Topics/Database%20Management.md) (5), [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md) (3), [Microsoft SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (2)
> **Env Vars:** ibm (2), sql (2)
> **Definitions:** is a  (4)
> **CLI Commands:** mysql (2)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Dimension Modeling

[↑ Back to Table of Contents](#table-of-contents)

#### [Dimensional modeling](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=0)** - [Instructor] Have you ever wondered how companies like Amazon and Walmart are able to analyze and make sense of their vast amounts of data? The answer is dimensional modeling. Dimensional modeling is a [Data Modeling](../../Skills/Data%20Science/Data%20Modeling.md) technique used to organize and structure a data in a data warehouse. Dimensional modeling helps organize data in a way that solves a business problem by creating a model that is optimized for querying and analysis. A dimensional model is made up of two types of data: facts and dimensions. Facts are usually things that can be measured and aggregated, such as profit, sales, et cetera. Dimensions provide additional context to these measurements. For example, a dimension could be the year, month, or product category. Dimension tables and fact tables are connected through a relationship to form a dimensional model. Now let's look at how dimensional modeling can be used in a real world example. Assume that a retailer wants to trick its sales data. With dimensional modeling, the retailer could create separate tables for the following. Date table has information about the date of the sale, example, year, quarter, month, and day. Product table has the product name, category, and manufacturer. Customer table includes things like the customer name, address, and age. Sales table has the actual sales transactions
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling?u=76281980&t=95)** with foreign keys to the date, product, and customer tables. The way the facts in the dimensions are organized creates a visual image that looks like a star, which is why this method of organization data is called a star schema. Using a dimensional model in a data warehouse is a beneficial because it's optimized for performance and usability. This is important when you want to get data fast, which is essential for reporting and analysis. In our next video, I will tell you why dimensional modeling is popular and compare it to a traditional approach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Modeling](../../Skills/Data%20Science/Data%20Modeling.md) (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### [Dimensional modeling vs. a traditional approach](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=0)** - [Instructor] Do you know why dimensional modeling is more popular than a traditional approach? The short answer is high performance and better usability. Let me explain. Assume that a bank wants to track information about this customer and their accounts. A traditional approach to storing this information would be to create a single table that contains all the customer and account information. The traditional approach will have three basic problems. First, a wider table that is putting all the columns within one table makes it slower. Second, a lot of data becomes redundant. Third, it's difficult to answer questions such as, how many customer does the bank have? How many checking account does the bank have? How many saving accounts does the bank have? By using dimensional bonding, the bank could create separate tables for the following. Customer table contains information about the customer. Example, name, address, age. Account table contains information about the account. Example, account type balance. Customer account table contains information about the relationship between the customers and accounts, with foreign keys to the customer and account tables. To find out how many customers the bank has, you would simply query the customer table and count the number of rules in the customer table. To find out how many checking accounts the bank has,
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensional-modeling-vs-a-traditional-approach?u=76281980&t=98)** you would query the account table for all the rows where account type is checking, and then count the number of rows. Stay with me for the next video where we'll take a deeper look into the facts and dimension tables.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Facts](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=0)** - [Narrator] Facts are individual pieces of data or information that we want to store and analyze in our data warehouse. These facts can be numerical or quantitative values. A fact could be the number of [products](../../Skills/Software%20Development/Microsoft%20Products.md) sold, the total sales amount, or the number of customer complaints. To make these facts meaningful and useful, we organize them into facts tables. A fact table is a central table in a data warehouse that contains the facts of the businesses, usually in the form of numerical values. The fact table is the center of the data warehouse schema, and is often surrounded by dimensions tables, which categorize the facts. Here is an example of how you would use one. A retail store may have a fact table that contains information about sales. This table would have columns for the date of the sale, the product sold, the number of units sold, and the total sales amount. In the manufacturing industry, a company can have facts table that contain information about production levels, inventory levels, and material cost. This gives manufacturer the information they need to optimize operations and reduced costs. Facts are usually, not always, additive in nature. Also, termed as aggregable. For example, facts such as unit sold can be aggregable. We add them all up to find the total amounts of sold units.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-data-warehouses/facts?u=76281980&t=96)** Facts are also measurable in nature. For example, a customer name in a table would be a descriptive in nature, while the order amount by the customer would be a fact that can be measurable. Identify a business process that you are familiar with, and think about the facts would be important to track in a data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [narrator] (1)

#### [Dimensions](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensions?u=76281980&t=0)** - [Instructor] A dimension in the [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md) is a way of categorizing facts or information in your data. Imagine having a bunch of puzzle pieces and each piece represent a fact about your business such as the number of [products](../../Skills/Software%20Development/Microsoft%20Products.md) sold or total sales amount. The dimensions provide the context for these puzzle pieces, allowing you to categorize and group them in a meaningful ways. A dimension table is a table in a data warehouse that contains the dimension data. Think of dimension table as a collection of categories or attributes that describes the facts in your data. For example, a dimension table could contain information about customers such as their names, addresses, and cities. This information will be used to categorize the facts in your fact table, such as sales or total order by a customer. Let's look at real world example to see how this works in practice. A bank has a fact table that contains information about customer account transactions. The fact table has column for the date of the transaction, the type of transaction, for example, deposits and withdrawals, the amount of the transaction, and the customer account number. Bank also has a dimension table that contains information about time. This table has column for the date, quarter, year, and fiscal period. The time dimension is used to categorize the facts
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-data-warehouses/dimensions?u=76281980&t=97)** in the customer account transaction fact table based on time. Now, in the next video we will understand the popular dimensional model techniques based on facts and dimensions table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Analogies:** such as (3), for example (2), imagine (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Star schema](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=0)** - [Instructor] A star schema is a [Data Modeling](../../Skills/Data%20Science/Data%20Modeling.md) technique used in [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md). It's called a star schema because the diagram of the schema look like a star with one center table, which we call the fact table, surrounded by multiple tables, which we call the dimension table. The fact table contains the data that you want to analyze, and the dimension table provides the context of the data. Let's take a closer look at how a star schema works for an insurance company. Imagine you have a large database of policy information for all of your customers. This database contains information such as policy numbers, the start dates, end dates, policyholder names, address, ages, premiums, and coverage amounts. Now, let's say you want to analyze the data to find out how many policy holders are in each age group and how much premium is being corrected from each age group. To do this analysis, you will need to organize the data into a star schema. A star schema for this insurance data would look something like this. The fact table would contain the policy information. In this case, it would contain columns for policy numbers, start date, end date, policyholder, age, premium, and coverage amount. The dimension table would provide context for the data in the fact table.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-data-warehouses/star-schema?u=76281980&t=92)** In this case, we could have a separate dimension table for policyholder information, policy information, and age group information. By organizing the data into a star schema, you can easily analyze the data to find out how many policyholders are in each age group and how much premium is being collected from each age group. This information can then be used by the various stakeholders to make better decisions about the company. The benefit of using a star schema in a data warehouse includes, number one, improved data organization. A star schema organize your data into facts and dimensions, making it easier to understand and analyze. Number two, improved query performance. Star schema are optimized for querying, making it faster and easier to extract the information you need from your data. Third, better data aggregation. A star schema makes it easy to aggregate your data, such as finding the total sales for a particular time period or location. In the next video, we will look into where the star schema might not be the right answer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Modeling](../../Skills/Data%20Science/Data%20Modeling.md) (1), [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md) (1)
> **CLI Commands:** find (2), make (1)
> **Analogies:** such as (2), imagine (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Snowflake schema](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=0)** - [Instructor] A [Snowflake](../../Skills/Data%20Science/Snowflake.md) schema is a multi-dimensional data model that is used in [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md). It's called a snowflake schema because of its unique structure that looks like a snowflake. Unlike the star schema, which is also a multi-dimensional data model, a snowflake schema is more normalized and has a more complex structure. So why use a snowflake schema? Because they're efficient at storing and retrieving data and querying. A snowflake schema provides a clear and organized structure for data warehousing and makes it easier to handle large amounts of data. It also helps eliminate data redundancy and increase consistency. Here's how a restaurant can apply this concept. The main fact table in our restaurant would be the order table, which stores information about each order placed. The dimension table in the snowflake schema would be ingredients, customers, and payments. The dimensions tables are related to the fact table through keys. For example, the ingredient table would be related to the order table through a key that links the specific ingredients used in each order. In general, a snowflake schema is better for complex data warehousing solutions with large amounts of data, while a star schema is suitable for small data warehousing solutions. A snowflake schema is a great solution
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-data-warehouses/snowflake-schema?u=76281980&t=95)** for organizing and managing data. However, it's important to keep in mind its limitations, like its slower querying performance. Now that we understand the different types of data models, join me in the next chapter as we get into the hands-on demos. In the next video, I will show you how to create your own data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (9), [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md) (4)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 3. Create Your First Data Warehouse

[↑ Back to Table of Contents](#table-of-contents)

#### [How to install SQL Server](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=0)** - [Instructor] Before we get started I will be using a [Windows](../../Glossary/Service/Windows.md) PC for demo purposes. Now, as you understand the concepts let's start building our first data warehouse solution. The first step to download and install [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) is to go to the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) website. You will start at this URL. We will be using the free community edition that doesn't require a license. If you scroll down a little bit on this website you will find that there are two free editions available. One is Developer, another one is an Express Edition. Developer Edition is meant for development and testing the SQL Server, so if you are a student or a working professional and want to learn and practice the SQL Server then Developer Edition would be the best choice as this contains almost all the features available in the paid edition. For our demo purpose we are going to choose Developer Edition. As soon as we click on the Download button under the Download folders our installation package get downloaded. Now, let's go down to the Download folder and see our downloaded file. Now, you can see that our file SQL2022-SSEI-Dev got downloaded. Just double-click on this installation package to start installing our SQL Server.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=95)** Now, it will ask me the confirmation, whether I really wanted to go and install this. I'm saying that yes. Now, you have to select whether you want to choose the Basic, Custom, or Downloaded one. So, the installation type which we're going to choose is the Basic one. The advantage of choosing this Basic one is that it will choose all the choices on its own. You don't have to go and input all those option manually. This one sets up all the basic configuration which is needed for your standard purpose. So, let's select this Basic installation type. Now it will ask you to accept the license terms and conditions. Click on Accept. Now it will ask you the installation location. I prefer to keep the location as default, which is inside the program files. Now let's click on the Install button. Now, this will going to take some time, so meanwhile you can take a [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) or grab a cup of coffee.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-install-sql-server?u=76281980&t=167)** Finally, after waiting for a brief period of time, our SQL Server Developer Edition has been installed successfully. If you look at it, here you get the instance name, MSSQLSERVER. So, that is the name of your instance for this SQL Server. Here you get the SQL Server Log folder, so in case some logs get generated and you want to see it this is the exact folder location. This is Installation Media folder location. And finally, this is the Resource folder for the installation. In the bottom you see the four buttons. The first one is the Connect Now. So, in case when you want to access the SQL Server through a command line interface you can click on this Connect Now, and this will open up a command prompt so you can connect to your SQL Server through a command prompt. So, you can see that the command line select @@Version has been executed, and that has printed the current version of this server. Let me close it down. Second option is for customization, in case you want to customize some of the installation steps you can do it from here. Third is a Install SSMS option. So, many people love to interact with the SQL Server through SSMS. SSMS stands for SQL Server Management Studio. This is one of the popular way for connecting the SQL Server in a graphical user interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (12), [Windows](../../Glossary/Service/Windows.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** sql (12), ssms (3), url (1), sql2022 (1), ssei (1)
> **UI Navigation:** click on (4), go to (1), scroll down (1), double-click (1)
> **Tools:** command line (2), command prompt (2)
> **Prerequisites:** install (4)
> **Definitions:** is an  (1), is a  (1), stands for (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [How to connect SSMS to SQL Server](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=0)** - Installing the SSMS status, [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) Management Studio can be done in multiple ways. One way is to directly click on this install SSMS button. That will take you to the website. From there, you can download the SSMS. Let me minimize this. So this is the website or else you can type in this website on your own and you can directly download it from here. Once you get onto this website, you have to scroll a little bit down, and there you will see the option to download the SQL Server Management Studio. So this is the latest version at this point of time. Maybe in future when you see this video, there might be a different version available to you. Let's click on this link to download the SSMS. You can see that the download has been started. Now, as the download get completed, either open the executable file from here or go to the download folder manually and open it from there. Let's double click this executable file. Now, this will open up the installation menu. Now, it is very simple. Just click on the install button, and this will install everything on its own. You can see that the default location is SQL Server Management Studio 19. If in case you want to change it you can click on the change and browse a different folder.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-connect-ssms-to-sql-server?u=76281980&t=95)** I would recommend to keep it as it is, and let's click on the install button to get it installed. Our SSMS is installed successfully. Now, you can click on this close button to close down this installation window. In the next video, we will see how we can use this SSMS to create the fax and dimension table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (3)
> **Env Vars:** ssms (6), sql (3)
> **UI Navigation:** click on (6), open the (1), go to (1)
> **Prerequisites:** install (4)
> **Exercise Files:** download the (3)
> **Cross-References:** in the next (1)
> **Speakers:** - installing (1)

#### [How to create a data warehouse using SQL Server](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=0)** - [Instructor] Now, as we have installed [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) and SSMS successfully, hence, it's a time to create our first data warehouse. So let me open the SSMS. For that, go down to your [Windows](../../Glossary/Service/Windows.md) search bar, type in SSMS and it'll show you SQL Server Management Studio. Click open. It'll ask you this server name and authentication. Keep everything default, because at the time of installation we have not given anything. So now on the left-hand side you can see that our database server is got connected. Now go to this database, right click and create new database. Let's take an example of a retail data warehouse. So give the database name as Retail Data Warehouse. Now we will add three tables in inside this data warehouse. For that, just expand the database, go to Retail Data Warehouse, right click on the tables and select new table. It'll ask you the column name. Give the column name as product ID, which is of type integer, and I give one more column name that is product name, and I keep it the character as reader type. Now click on save. It'll ask you to give the table name. Let's give the table name as ProductDim. Say, okay. I'm creating the table using the graphical user interface. You can also create the same table
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=93)** using the create table query. Let's right click on the tables again, and select new table. This time let's create the StoreDim table. So give the column as Store ID. I keep the data type as integer, and then next column is store name. I keep the type as character only. Click on save and give the table name as StoreDim. Now we need one fact table. So let's go to table again, right click, create new table. Give the column name as sales, data type integer, and for the connection between this fact table and the dim table, let's give two more columns like product ID. That is of type integer, and store ID, that is of integer. So we are trying to save the sales data or a sales information for every product which belong to a specific store. So that's the intention of this fact table. Now click on save, give the table name as SalesFact, and say, okay. So three tables got created. Now to view it completely, click on the database diagram and right click and say new database diagram. It will ask you whether you wish to create, say yes. It'll ask you to select all the tables,
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=187)** select all the tables, and say add. So you can see that in this canvas, you got all those three tables. Now, as we have learned in the style schema, the fact table comes in the center and your dimension table is around it in like a star schema. Now to make the connection between them, just click on this column that is a product ID column, right click, make it a primary key and just drag this column to the sales fact. So this will create the relationship. So on the left hand side our table is ProductDim table with product ID. And on the sales side our column is product ID. So it's like we are creating the foreign key relationship. We can do this either through this UI, or you can do through [SQL](../../Skills/Data%20Science/SQL.md) Query as well. And now let's say okay, and say, okay. So now you can see that a relationship has been developed between the ProductDim and SalesFact. Similarly, go to the store ID, right click, make this as a store ID as a primary key and drag this column to SalesFact. Now this will again ask you what is the foreign key? And here choose the option as store ID and say, okay, that's it. So that's how you can create the relationship
>
> **[4:42](https://www.linkedin.com/learning/introduction-to-data-warehouses/how-to-create-a-data-warehouse-using-sql-server?u=76281980&t=282)** between these two tables, and that's how you can end up with creating your first star schema dimensional model. In the next video, we will going to talk about the more advanced data warehouse solutions, that is the cloud data warehouse solutions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **UI Navigation:** click on (7), go to (4), open the (1)
> **Env Vars:** sql (3), ssms (3)
> **CLI Commands:** make (3)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)


### 4. Modern Data Warehouses

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud data warehouse](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse?u=76281980&t=0)** - [Instructor] A Cloud Data Warehouse is a centralized repository of data that is stored and managed in the cloud. It allows you to store and manage data from various sources in a more efficient and cost effective way. But what does this look like in a practice? Let's say you are a retail company that wants to analyze customer behavior. You might store data from your website, mobile apps, social media and in store purchase in a cloud data warehouse. Then you can use specialized tools such as [SQL](../../Skills/Data%20Science/SQL.md) or data visualization software to extract insights from it. So as you can see, a cloud data warehouse is a powerful tool for any company looking to utilize its data for analytics purposes. In our next video, we'll talk more about how to choose between the on-prem and cloud data warehouse to meet your business needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Definitions:** is a  (2)
> **Env Vars:** sql (1)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Cloud vs. on-premises data warehouse](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=0)** - [Instructor] Data is at the heart of every modern business, but where the data lives can vary greatly. Some companies choose to store their data in on-premises data warehouses, while others opt for cloud data warehouses. Let's start with on-premises data warehouses. These are physical data warehouses that are installed and maintained on a company's own servers. The biggest advantage of on-premises data warehouses is control. Companies have complete control over their data, from how it's stored to who has access to it. On-premises data warehouses also tends to be faster and more reliable as the data is stored locally and doesn't need to travel over the internet. However, there are also some downsides to an on-premise data warehouse. One, it can be expensive and time consuming to set up and maintain. Companies need to invest in [Hardware](../../Topics/Hardware.md), softwares, and IT staff to manage their own data center. On-premise data warehouses can also be limited in their [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), as the amount of data that can be stored is dependent on the physical space available in the server room. Now let's talk about cloud data warehouses. These are data warehouses that are hosted on the cloud servers rather than on-premises servers. One of the biggest advantage of cloud data warehouses
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=97)** is their scalability. Companies can easily scale up or down their [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) and processing capabilities as their needs change without the need for physical servers or additional IT staff. Cloud data warehouses are also often more cost effective as companies only pay for the storage and processing power they need rather than having to invest in expensive hardware. Another advantage of cloud data warehouse is accessibility. With data stored in the cloud, employees can access from anywhere with an internet connection, making it easier to collaborate and work remotely. Additionally, cloud data warehouses often comes with building tools for analyzing the data, such as data visualization and machine learning capabilities. This makes it easier for the companies to derive insights from their data and make more informed decisions. However, there is also some downside to cloud data warehouses. First, there can be concerns around [Data Security](../../Skills/Data%20Science/Data%20Security.md) and [Privacy](../../Skills/Data%20Science/Privacy.md) as data is stored on remote servers that may not be the under company's control. Secondly, cloud data warehouses can also be slower and less reliable as data needs to be travel over the internet and can be affected by network condition or outages. So as you can see, both on-premises and cloud data warehouses
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-vs-on-premises-data-warehouse?u=76281980&t=189)** have their pros and cons. It's up to each individual company to weigh the benefits and drawbacks and make the best decision for their specific needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (2), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1), [Data Security](../../Skills/Data%20Science/Data%20Security.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Cloud data warehouse options](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=0)** - [Instructor] Now, as we have explored the difference between the cloud and on-premises data warehouses, let's dive into some of the most popular cloud data warehouse options available on the market today. First up, we have Amazon Redshift. Amazon Redshift is a fully managed, petabyte-scale data warehouse service. Redshift is designed to handle large amounts of data and it can easily scale up or down as your business needs change. One of the biggest advantages of Amazon Redshift is its integration with other Amazon services, such as Amazon S3 and Amazon EMR. Another popular cloud data warehouse option is [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Synapse Analytics, which is a fully managed, petabyte-scale analytics service that can be handled both structured and [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md). One of the biggest advantage of [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Synapse Analytics is its integration with other Microsoft Azure services such as Azure Data Factory and [Azure Databricks](../../Skills/Data%20Science/Azure%20Databricks.md). This makes it easy to move data into and out of the Synapse Analytics and to perform [Big Data](../../Skills/Data%20Science/Big%20Data.md) processing tasks using Databricks. Next one is [Google](../../Glossary/Service/Google.md) BigQuery. It is fully managed, serverless data warehouse that can handle large amounts of data. BigQuery is designed to be fast and easy to use, with a [SQL](../../Skills/Data%20Science/SQL.md)-like interface that makes it accessible to both developers and analysts.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-data-warehouses/cloud-data-warehouse-options?u=76281980&t=94)** It can also be integrated with other Google [products](../../Skills/Software%20Development/Microsoft%20Products.md) like [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) and Data Studio. Finally, there's [Snowflake](../../Skills/Data%20Science/Snowflake.md), which is a cloud-native data warehouse that can handle both structured and semi-structured data. Snowflake is designed to be fast, flexible, and easy to use with a SQL-like interface that makes it accessible to both developers and analysts. One of the biggest advantage of Snowflake is its architecture, which separates compute and storage. This makes it easy to scale compute and storage independently, which can reduce the cost for the businesses. There are a number of popular cloud data warehouses options available to businesses today. Each option has its own unique strengths and weaknesses. So it's important to choose the one that best fits your business needs. Now that you have learned about the most popular cloud data warehouse options, take a moment to think about your own business needs. Which cloud data warehouse do you think would be the best fit for your businesses and why? Write down your thoughts and then go do some research.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (3), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Google](../../Glossary/Service/Google.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **Env Vars:** sql (2), emr (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/introduction-to-data-warehouses/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-data-warehouses/next-steps?u=76281980&t=0)** - [Deepak] That brings us to the end of the course. You did great in understanding what a data warehouse is, but we have only scratched the surface of the data world, so by no means is this the end. I encourage you to keep moving forward in your learning journey. You can start by taking my live [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) course, Mission 100 [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Data Engineer. You can find the program on my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) profile page itself. Again, my name is Deepak Goyal, and it has been both my pleasure and honor to teach you the skill of data warehouse. Thank you for watching, investing in yourself, and for allowing me to be a small part of your learning journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** find (1)
> **Speakers:** - [deepak] (1)


## Instructor

- [Deepak Goyal](../../Instructors/Software%20Development/Deepak%20Goyal.md)

## Skills Covered

- Data Warehousing

## Path Context

### In [Data Engineering Foundations Professional Certificate by Astronomer](../../Paths/Data%20Science/Professional%20Certificates/Data%20Engineering%20Foundations%20Professional%20Certificate%20by%20Astronomer.md)
← [Learning Apache Airflow](Learning%20Apache%20Airflow.md) | **5 of 6** | [Learning Data Governance](Learning%20Data%20Governance.md) →

### In [Introduction to Fundamental Skills for Data Work- Data Storage](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Storage.md)
← [Relational Databases Essential Training](Relational%20Databases%20Essential%20Training.md) | **3 of 6** | [NoSQL Essential Training](../Database%20Management/NoSQL%20Essential%20Training.md) →

### In [Explore a Career in Data Engineering](../../Paths/Cloud%20Computing/Learning%20Paths/Explore%20a%20Career%20in%20Data%20Engineering.md)
← [Hands-On Introduction- Data Engineering](Hands-On%20Introduction-%20Data%20Engineering.md) | **3 of 7** | [Learning SnowflakeDB](../Cloud%20Computing/Learning%20SnowflakeDB.md) →

## Part of

- [Data Engineering Foundations Professional Certificate by Astronomer](../../Paths/Data%20Science/Professional%20Certificates/Data%20Engineering%20Foundations%20Professional%20Certificate%20by%20Astronomer.md)

## Appears In

- [Data Engineering Foundations Professional Certificate by Astronomer](../../Paths/Data%20Science/Professional%20Certificates/Data%20Engineering%20Foundations%20Professional%20Certificate%20by%20Astronomer.md)
- [Introduction to Fundamental Skills for Data Work- Data Storage](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Storage.md)
- [Explore a Career in Data Engineering](../../Paths/Cloud%20Computing/Learning%20Paths/Explore%20a%20Career%20in%20Data%20Engineering.md)

## Related Courses

_Courses sharing skills:_

- [Implementing a Data Warehouse with SQL Server 2022](../Database%20Management/Implementing%20a%20Data%20Warehouse%20with%20SQL%20Server%202022.md) — Data Warehousing

---

[↑ Back to top](#)