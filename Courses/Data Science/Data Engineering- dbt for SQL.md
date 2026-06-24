---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: data-engineering-dbt-for-sql
url: "https://www.linkedin.com/learning/data-engineering-dbt-for-sql"
duration_minutes: 91
duration: 1h 31m
level: Advanced
updated: 9/26/2023
learners: 54969
skills:
  - Data Engineering
  - SQL
  - Data Build Tool (DBT)
exercise_files: true
github: "https://github.com/LinkedInLearning/advance-your-sql-skills-for-data-engineering-3315012/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHyyrhbhSEAOg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1695671472229?e=2147483647&amp;v=beta&amp;t=8xdAfDbipieM8f2bx4ZpUCrBRheDNq5YqT1rnaKVIVM"
linkedin_topic: Data Science
learning_paths:
  - '[Master Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Master%20Data%20Engineering.md)'
prev_courses:
  - '[Complete Guide to Python for Data Engineering- From Beginner to Advanced](Complete%20Guide%20to%20Python%20for%20Data%20Engineering-%20From%20Beginner%20to%20Advanced.md)'
next_courses:
  - '[Advanced Snowflake- Deep Dive Cloud Data Warehousing and Analytics](Advanced%20Snowflake-%20Deep%20Dive%20Cloud%20Data%20Warehousing%20and%20Analytics.md)'
path_nav: '[{"path":"Master Data Engineering","position":6,"total":8,"prev":"Complete Guide to Python for Data Engineering- From Beginner to Advanced","next":"Advanced Snowflake- Deep Dive Cloud Data Warehousing and Analytics"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/web-development
  - skill/data-engineering
  - skill/sql
  - skill/data-build-tool-dbt
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Engineering-%20dbt%20for%20SQL.md)

![Data Engineering: dbt for SQL](https://media.licdn.com/dms/image/v2/D560DAQHyyrhbhSEAOg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1695671472229?e=2147483647&amp;v=beta&amp;t=8xdAfDbipieM8f2bx4ZpUCrBRheDNq5YqT1rnaKVIVM)

# Data Engineering: dbt for SQL

> Are you looking for a better—and easier—way to manage SQL code? In this course, instructor Vinoo Ganesh shows you how to use dbt (data build tool) to operationalize SQL in powerful ways and make the process of transforming data simpler and faster. In each chapter, Vinoo presents a real-world situation or problem, and provides focused code examples explaining how to solve the problem. He shows you 

> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-dbt-for-sql) | 1h 31m | Advanced | 55K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Introduction](#introduction)
  - [What you should know](#what-you-should-know)
  - [Codespaces introduction](#codespaces-introduction)
- [**1. SQL for Data Engineers**](#1-sql-for-data-engineers) (5 videos)
  - [SQL as a data engineer](#sql-as-a-data-engineer)
  - [The modern data stack and SQL](#the-modern-data-stack-and-sql)
  - [Schema design](#schema-design)
  - [Challenge: Schema design](#challenge-schema-design)
  - [Solution: Schema design](#solution-schema-design)
- [**2. Modeling in SQL**](#2-modeling-in-sql) (6 videos)
  - [Supply chain outage: SQL spaghetti](#supply-chain-outage-sql-spaghetti)
  - [Data build tool (dbt)](#data-build-tool-dbt)
  - [Modeling in dbt](#modeling-in-dbt)
  - [Running dbt](#running-dbt)
  - [Challenge: Modeling taxi data](#challenge-modeling-taxi-data)
  - [Solution: Modeling taxi data](#solution-modeling-taxi-data)
- [**3. Table Materializations**](#3-table-materializations) (5 videos)
  - [Crypto cost: Materializations](#crypto-cost-materializations)
  - [Materialization terminology](#materialization-terminology)
  - [Incremental materializations](#incremental-materializations)
  - [Challenge: Materializations](#challenge-materializations)
  - [Solution: Materializations](#solution-materializations)
- [**4. Common Table Expressions vs. Subqueries**](#4-common-table-expressions-vs-subqueries) (5 videos)
  - [Construction planning: Query complexity](#construction-planning-query-complexity)
  - [Common table expressions (CTEs) vs. subqueries](#common-table-expressions-ctes-vs-subqueries)
  - [CTEs in dbt](#ctes-in-dbt)
  - [Challenge: Implementing CTEs](#challenge-implementing-ctes)
  - [Solution: Implementing CTEs](#solution-implementing-ctes)
- [**5. Testing SQL with dbt**](#5-testing-sql-with-dbt) (5 videos)
  - [Advertising: Testing SQL](#advertising-testing-sql)
  - [Unit testing using dbt](#unit-testing-using-dbt)
  - [Custom tests in dbt](#custom-tests-in-dbt)
  - [Challenge: Testing SQL](#challenge-testing-sql)
  - [Solution: Testing SQL](#solution-testing-sql)
- [**Conclusion**](#conclusion) (2 videos)
  - [Looking ahead](#looking-ahead)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/introduction?u=76281980&t=0)** - Are you tired of dealing with production outages after seemingly small [SQL](../../Skills/Data%20Science/SQL.md) changes, or are you just looking for a better way to build and manage SQL code? If so, this class is for you. In this hands-on course, we'll talk about how you can use DBT, one of the most prominent open-source technologies today, to operationalize SQL in powerful ways. You'll design and implement DBT models based on real world scenarios that I've personally encountered. Hi, my name is Vinoo and I've spent a career building critical [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) for the healthcare, defense, and financial sector using tools in this course. If you want to advance your SQL skills and learn to leverage DBT in powerful ways, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1)
> **Env Vars:** sql (4), dbt (3)
> **Speakers:** - are (1)

#### [What you should know](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980&t=0)** - [Instructor] The path to [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) is as unique as those that make up the profession. Data analysts, scientists, software engineers, and virtually every other profession have made inroads to the data engineering profession. As such, for this advanced course, it's crucial that you, as a data engineer, have the following skills. First, Experience with [SQL](../../Skills/Data%20Science/SQL.md). This course is intended to help you, as a data engineer, enhance your SQL skills. As such, it involves reading and writing SQL code. While the primary focus is the ecosystem around SQL, a solid understanding of SQL is a must. Second, Unix Commands. Some familiarity with the Bash script or Unix will be helpful. In this class, we use some basic Unix commands and utilities to navigate around the file system. We do work with some text editors as well. Third, Comfort in VS Codes or IDEs in general. In this class, we'll use a number of VS Code plugins which connect to various pieces of technology, including MariaDB. It is important to feel comfortable working in an IDE with an integrated terminal. This background should be enough to kickstart our coursework. If you have all of this background or are ready to do some minor brushing up along the way, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (5), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (2)
> **Env Vars:** sql (5), ide (1)
> **Tools:** bash (1), vs code (1), terminal (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Codespaces introduction](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=0)** - [Instructor] This course uses the [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md) feature to bring out hands-on and live coding experience to the material. GitHub Codespaces allows you to author code and live deploy that code onto a running VM. In Codespaces you are free to follow along or try any of the exercises in this video series without risk of breaking your local setup. Accompanying this series of videos is a corresponding GitHub repository. That repository contains the most up-to-date segments of code and follow along portions, as well as the relevant before and after setup. You can provision a GitHub Codespace off of one of the branches of the repository. This video series provisions the starting state of the codespace off of the video's begin branch. We'll talk a bit about branch naming conventions shortly. [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning's use of GitHub Codespaces relies on exercises that are broken down on a per branch basis with before and after states. In the accompanying GitHub repository, you will find a number of branches. The main branch corresponds to the main line of the repo and won't be used in the exercise portion of this course. Instead, you will find branches with the following convention. Chapter_video. For example, a branch that corresponds to the exercise covered in Chapter 2, Video 3 would be listed as 02_03. In some situations the videos will have before and end states.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=95)** In these situations, the branch will be suffixed with either a B for begin or an E for end. For example, a branch that corresponds to the beginning state of Chapter 2, Video 5 would be named 02_05b, and a branch that corresponds to the end state would be 02_05e. To create a codespace, you can select the Open Codespace button right from your course homepage. This will open up the Codespaces Configuration landing page for the course. To create the codespace, first, mouse over the dropdown caret of the green Create codespace on main button, and change the option to configure and create codespace if it's not already selected. From there, press the green configure and create codespace button. On the next screen, you can select from the branch dropdown which branch you wish to create a codespace off of. Once everything is properly selected, you can press Create Codespace. This will start the process of setting up your codespace. Codespace offers a powerful and interactive way to follow along and participate with this course. I'd highly encourage you to take advantage of this feature and follow along yourself. Now, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (6), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (5), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Tools:** github (6)
> **Prerequisites:** setup (2), configure (2)
> **UI Navigation:** dropdown (2), select the (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. SQL for Data Engineers

[↑ Back to Table of Contents](#table-of-contents)

#### [SQL as a data engineer](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=0)** - If you're a data engineer chances are you've been using [SQL](../../Skills/Data%20Science/SQL.md) quite extensively. Despite its age originating in the 1970s, SQL remains a critical tool in the data engineer's arsenal. In today's data-driven world, modern data engineers and analysts rely on SQL for a wide range of tasks from [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) to analysis. The resurgence of SQL can be attributed to the emergence of highly scalable platforms like [Snowflake](../../Skills/Data%20Science/Snowflake.md) and Databricks. These platforms have made SQL the go-to language for handling large scale data. So let's look at a few reasons why SQL has continued to be a favorite. SQL has been a favorite for a few reasons. First, much of the data engineer's work involves running ETL, extract transform load, operations across various [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) like [Postgres](../../Skills/Software%20Development/PostgreSQL.md) and [MySQL](../../Skills/Software%20Development/MySQL.md). SQL is a language used to interact with these [Databases](../../Skills/Software%20Development/Databases.md) and most data engineers are already familiar with it when they start their roles. Second, SQL offers a unified processing data experience. Its versatility allows data engineers to perform ingestion, transformation, aggregation and analytics all within a single language. This simplifies the maintenance and development of [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md). Third, SQL can be both scalable and efficient. It's a declarative language, meaning engineers only
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=93)** need to specify the desired [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) or retrieval leaving the query optimization engine to handle the complexities of execution. These query optimization engines have become fast and efficient, handling large data sets with ease. Fourth, SQL is user friendly and easy to learn. It's much more straightforward compared to low level programming languages or distributed computing frameworks. Its declarative nature makes it easier to read and understand further contributing to its widespread adoption. The benefits of SQL go on and on making it an essential part of every data engineer's toolkit. However, many data engineers only scratch the surface of SQL's capabilities and may not use it to the full potential. This [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course is designed to help modern data engineers like you advance your SQL skills by introducing various methods and techniques to harness its power effectively. Get ready to up your SQL game and unleash the true potential of your [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) endeavors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (15), [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) (1), [Snowflake](../../Skills/Data%20Science/Snowflake.md) (1), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1)
> **Env Vars:** sql (15), etl (1)
> **CLI Commands:** mysql (1)
> **Definitions:** is a  (1)
> **Speakers:** - if (1)

#### [The modern data stack and SQL](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=0)** - [Instructor] We'll start by exploring the modern data stack, a group of technologies that has revolutionized [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) and analytics in our current era. The modern data stack emerged in response to the ever-increasing volume and complexity of data, as well as the growing demand for faster insights and self-service analytics. Traditional data architectures relying on on-premise data warehouses and ETL tools could no longer keep up with the needs of the modern enterprise. To address these challenges, companies sought a more flexible, scalable, and cost-effective solution, capable of handling large data volumes and providing [Real-Time](../../Skills/Database%20Management/Real-Time.md) insights. Enter the modern data stack, equipped with cloud-based tools and platforms designed to meet these modern needs. So what exactly is the modern data stack? It's a term used to describe a comprehensive set of tools and technologies that have emerged in recent years to help companies collect, store, and analyze data effectively. The core components of the modern data stack typically include a data warehouse, which is a centralized repository for storing and organizing data, facilitating efficient querying and analysis, an ETL tool, which enables the movement and transformation of data from various sources into the data warehouse, a data lake, which is a storage system that allows storing large volumes of raw and [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md),
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=93)** and a BI platform, or [business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) platform, that empowers users to visualize and analyze data, gaining valuable insights for [Decision-Making](../../Skills/Data%20Science/Decision-Making.md). However, the modern data stack continues to evolve and now includes an array of additional tools and technologies, such as [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) and observability tools, [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) platforms, orchestration platforms, data catalogs, and more. [SQL](../../Skills/Data%20Science/SQL.md) plays a crucial role in the modern data stack, serving as the language for manipulating and analyzing data within the warehouse. Popular tools like [Snowflake](../../Skills/Data%20Science/Snowflake.md), Airflow, Fivetran, dbt, and Looker often integrate SQL seamlessly into their functionalities. The modern data stack offers several advantages, making it the go-to choice for modern [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md). First, flexibility and [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). It outshines traditional data architectures with its ability to adapt to changing requirements and handle massive data volumes efficiently. Second, speed and ease of setup. Setting up and using the stack is faster and more straightforward, accelerating data processing tasks. Cost effectiveness. Cloud-based tools with a pay-as-you-go model ensure efficient resource utilization and cost savings. Security. Storing data in the cloud enhances security with access granted to only authorized users.
>
> **[3:09](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=189)** And finally, easy maintenance and upgrades. Cloud-based tools offer automatic upgrades, simplifying maintenance and keeping the stack up-to-date. While there's much to explore in the modern data stack, our focus in this course will revolve around enhancing your SQL skills. We'll dive into the tools and technologies involved in the SQL ecosystem and empower you to leverage this powerful language to its full potential. Get ready to embark on a thrilling journey of data engineering and SQL development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (5), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (2), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (2), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) (1)
> **Env Vars:** sql (5), etl (2)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Schema design](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=0)** - [Instructor] To enhance your [SQL](../../Skills/Data%20Science/SQL.md) skills, it is crucial to grasp the fundamental principles of relational [Database Design](../../Skills/Software%20Development/Database%20Design.md). In this video, we'll cover two essential concepts, normal [Forms](../../Skills/Web%20Development/Forms.md) and functional dependencies. Let's say you have some example data to illustrate these concepts. Imagine you have two tables, employee with details like names, ID numbers, and departments, and department with information about different departments and their managers. Normal forms are a set of rules that organize data in a database to prevent issues like data redundancy or inconsistencies. There are different levels of normal forms with the first normal form, or 1NF, being the most basic. In the first normal form, each row in a table must be unique and each column should only contain one piece of data, no repeating data. For example, in our employee table, we can't have two rows with the same ID number, and the name column can't combine both the first and last name. The second normal form builds on the first normal form by requiring that each non-primary key column be fully dependent on the primary key. In our employee table, the primary key is the ID number, and both the name and department columns meet the 2NF requirement as they are fully dependent on the ID number.
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=93)** However, the department manager column doesn't fulfill this condition as it depends on the department column. Therefore, this table violates 2NF. The third normal form further refines the structure, disallowing transitive dependencies. A transitive dependency occurs when one column depends on another which in turn depends on a third column. For instance, if our employee table had a department manager column dependent on both the department and the employee columns, it would violate 3NF. Functional dependencies are relationships between sets of data, where one set, the dependent set, depends on another set, the independent set, for its value. The functional dependency rule relates closely to the 2NF rule, stating that if one column is dependent on another, then that column must be part of the primary key. In our employee table, the ID number is the primary key and it's dependent on both the name and department columns, complying with the functional dependency rule. However, in the same employee table, the department manager column is dependent on the department column, which is not part of the primary key, thus this table violates the functional dependency rule. By adhering to the rules of normal forms, you can ensure that your data is structured efficiently and is free from redundancies and inconsistencies. This organization enhances the efficiency and reliability of your database.
>
> **[3:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=188)** As an advanced SQL practitioner, mastering normal forms enables you to design an optimal database schema, setting the foundation for robust [Data Management](../../Skills/Software%20Development/Data%20Management.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (5), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Database Design](../../Skills/Software%20Development/Database%20Design.md) (1), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1)
> **Analogies:** imagine (1), for example (1), for instance (1)
> **Env Vars:** sql (2)
> **Speakers:** - [instructor] (1)

#### [Challenge: Schema design](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=0)** (bouncy upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=5)** - [Narrator] Let's put some of these skills to the test. In this challenge, you're going to take on the role of a company that sells [products](../../Skills/Software%20Development/Microsoft%20Products.md) online. The company wants to create a database to track its internal sales information and they have hired you for the job. They also have big plans and want you to design a schema that is extensible and stable. To kick things off, they have provided a few pieces of information that they would like to track. First, the company has a catalog of products. Each product has a name, price and current inventory count associated with it. Multiple products can have the same name, the same price and the same inventory count. Second, they would like to track sales. They have an interesting way of handling the sales too. Each sale corresponds to a single item being sold. This means that in the event that a customer buys multiple quantities of the same item, each item will be recorded as a separate sale. Third, all sales are made by individual salespeople. Each salesperson has a name, but be careful. Some of these names may not be unique. Finally, the store would like to keep track of the commissions for salespeople. Each commission is a percentage that depends both on the salesperson selling the item, as well as on the item that is sold. This means that different salespeople have different percent commissions.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=98)** For example, Alice has 20%, Bob has 15%, Charlie has 12%, and so on. Can you design an appropriate schema for this store? Please ensure that your schema design is compliant with each of the normal [Forms](../../Skills/Web%20Development/Forms.md) specified previously. There are multiple different correct answers, so don't fret about trying to find the exact perfect schema. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (3), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Definitions:** means that (2), is a  (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (bouncy upbeat music) (1)

#### [Solution: Schema design](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=5)** - [Instructor] Congratulations on completing your first challenge. Keep in mind there are multiple correct answers, so don't be too concerned if your solution doesn't match perfectly. Let's start designing. We know that the company has a catalog of [products](../../Skills/Software%20Development/Microsoft%20Products.md) and that multiple products may have the same name, the same price, and the same inventory count. So let's first design our product table with these specifications in mind. We also know that the company would like to keep track of sales and that all sales are performed by individual salespeople. Each sale of a single item will appear as a new row in our table. Next, we know that we have different salespeople and that each of them have different commissions. Let's create a table to represent that. We now have a basic version of our schema but we haven't vetted it with any of the normal [Forms](../../Skills/Web%20Development/Forms.md) yet. Let's do that now. The first normal form says that each row must be unique. Let's test our tables to ensure that this passes. It looks like right off the bat we have three violations to the 1NF rule. If products can have the same name, price, and inventory, there could be a situation where we end up with the exact same row twice. The same is true with the sales table and the salesperson table in its current form. Let's fix this. To fix this, let's add in primary keys to each row and update the references to refer to these primary keys,
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=100)** which in all cases will be the ID column. Great. Now, let's test the second NF rule, which states that each non-primary key column must be fully dependent on the primary key. In our products table, each non-primary key column is fully dependent on product ID. Looks like we passed there. The same can be said about our sales table and our salesperson table. It looks like our schema is compliant with the second normal form. Now, let's validate against the third normal form which just allows transitive dependencies. In this case, the product table does not seem to have any transitive dependencies given that each non-key attribute, namely name, price and inventory, depend only on the primary key. When we look at the sales table, we also don't see any transitive dependencies, so things are looking good so far. However, when we come to the salesperson table, we do find a problem, specifically with the department attribute. The department attribute is dependent on the salesperson's name. This creates a transitive dependency as department depends on the non-key attribute name which in turn depends on salesperson ID, which is the primary key. That creates an issue. To make our tables compliant with a third normal form, we should separate the department information into a separate table. Our final schema will look as follows. Great work completing your first challenge, and again, don't worry if your schema design
>
> **[3:13](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=193)** is slightly different than mine. As long as it's compliant with all the normal forms, you should be good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (4), [Forms](../../Skills/Web%20Development/Forms.md) (2)
> **CLI Commands:** find (1), make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 2. Modeling in SQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Supply chain outage: SQL spaghetti](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=0)** - [SQL](../../Skills/Data%20Science/SQL.md), while immensely powerful, can often become unwieldy and challenging to manage, especially as companies deal with massive amounts of data and hard-coded table and column names. Let me share a true story from my early consulting days to illustrate this point. I was hired by a supply chain company that heavily relied on a set of source tables for making distribution decisions. These tables contained inventory data for various goods and based on this information, the company would create shipping and distribution manifests. To kickstart their data pipeline, they had a mammoth SQL file with over 10,000 lines of code. The file was actually called Mammoth.SQL. This single file held all the logic and instructions to create and update inventory data sets which were then used to generate core shipping manifests through subsequent pipelines. In essence, this single file was the linchpin for all subsequent steps in the pipeline. As you can imagine, dealing with a SQL file of this magnitude was far from easy. The code was complex, error prone, and as you can imagine, universally feared within the company. Support tickets would get tossed around from one team to another as engineers tried to avoid handling it. One fateful day on November 9th, in fact, after onboarding a new inventory data set, disaster struck, the pipeline failed.
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=96)** Engineers attempted retries, but after three attempts, it remained broken. Little did they know that this marked the beginning of a 24 hour outage across the entire organization. As engineering teams toiled throughout the night, with the CEO and CTO personally getting involved. After much effort, one engineering team finally found the root cause of the issue. Unfortunately, this discovery came at the cost of a day of missed shipments and unhappy customers. In the aftermath of this incident, the engineering leadership prioritized dismantling this gigantic SQL file. It took three weeks of engineering time to revamp it. In this process, they uncovered outdated table names, references to incorrect columns, and shockingly, a reference to a staging table in production. This story is not an isolated case but rather a common scenario at many organizations. Critical pipelines are initially designed as functional masterpieces but quickly become outdated and challenging to comprehend. Only a few engineers possess the internal knowledge of these pipelines. In this chapter, we'll dive into a powerful solution to manage SQL more effectively and prevent such headaches in the future. We'll explore ways to improve SQL organization and structure, ensuring robustness, maintainability, and [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). By mastering these techniques, you'll become a SQL champion and steer your [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) efforts towards smoother waters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (8), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1)
> **Env Vars:** sql (8), ceo (1), cto (1)
> **Analogies:** imagine (2)
> **File Paths:** mammoth.sql (1)
> **Speakers:** - sql (1)

#### [Data build tool (dbt)](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=0)** - [Instructor] In the world of software engineering, principles like testing, [Version Control](../../Skills/Web%20Development/Version%20Control.md), and dependency visualization have significantly improved stability and overall quality of life. However, these beneficial features haven't always existed and been readily available to data engineers. In the past, such capabilities were often limited to large-scale enterprise platforms, making it challenging for smaller teams or firms to implement them effectively. Then, everything changed a few years ago with the introduction of dbt, or [data build tool](../../Skills/Data%20Science/Data%20Build%20Tool%20(DBT).md), by a small company called Fishtown Analytics. Dbt revolutionized the [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) landscape, providing a powerful open-source solution for building [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md). Dbt lives up to its name by helping data engineers build and transform data with ease. It allows for the modularization and centralization of analytics code, making [SQL](../../Skills/Data%20Science/SQL.md)-based [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) and testing a breeze. This tool has gained immense popularity among data analysts and data engineers who frequently deal with [Data Cleaning](../../Skills/Data%20Science/Data%20Cleaning.md) and transformation before conducting analyses. Dbt's strength lies in its model-first approach to data analytics and transformation. By leveraging dbt, you can avoid writing boilerplate [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) and definition language code as the tool handles the materialization process for you. One of dbt's key advantages
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=93)** is in its ability to enhance [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) in [Databases](../../Skills/Software%20Development/Databases.md). By defining a data model that can specify the data's structure, dbt can validate the data and ensure that it adheres to the model. Additionally, dbt enables the creation of documentation for the data model, providing valuable insights for other users. Let's put this in more practical terms. As a data engineer, you're tasked with managing vast amounts of data scattered across tables, columns, and rows in expansive data warehouses. Keeping track of all of this data can feel overwhelming. For instance, making changes to a commonly accessed table may involve a laborious process of finding and updating all of its references. With dbt, this process becomes incredibly simple. Just change a single line, and the impact is felt throughout the pipeline. Dbt brings essential features and functionality to the data engineering world, elevating your SQL skills to new heights. That's precisely why dbt will be a major focus in this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning video. Let's dive in and unlock the full potential of dbt to streamline and enhance your data engineering endeavors. Get ready to take your SQL skills to the next level with dbt as your powerful ally.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (3), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1), [Data build tool](../../Skills/Data%20Science/Data%20Build%20Tool%20(DBT).md) (1), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1)
> **Env Vars:** sql (3)
> **Exercise Files:** boilerplate (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Modeling in dbt](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=0)** - [Instructor] We're going to be working with a MariaDB [MySQL](../../Skills/Software%20Development/MySQL.md) database for these exercises. Anytime you start a new project it's always important to get a lay of the land. In VS code, we can access our running MariaDB database right from the UI. To access it, click the database button on the left side panel. You can expand the database to see the tables and views present. Now let's install DBT. To install DBT from MariaDB, we're going to install the DBT MySQL package. Type, pip install dbt-mysql. Once you've installed the DBT MySQL package, let's create our first DBT project. For ease of use, we'll call the project 'Intro'. To create a new project, type dbt init. You'll be prompted to enter a project name. Let's type in intro. Then you'll be notified that the profile for intro already exists. We'll talk about profiles in a bit, but for now enter N for no. Great. We've just bootstrapped our first DBT project. Let's open it up. Under the intro directory, you'll see a number of folders many of which are empty. These have been automatically created for you as part of the DBT Bootstrap process. You'll see analyses, macros, models, seeds, snapshots,
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=98)** target, tests, and a dbt_project.yml file. To get started, let's open up dbt_project.yml. This file is the main configuration file for your DBT project. It includes the name of the project which in our case is intro, as well as the directories and paths for DBT to look for various pieces of information. Such as models, tests, and others. You'll also notice there's a line called profile. Let's take a quick pause and talk about profiles. DBT profiles are the methods for connecting to [Databases](../../Skills/Software%20Development/Databases.md) managed by DBT, meaning in order for DBT to connect to your database, you first have to create a connection profile. For this course, I've created all of the profiles for you behind the scenes. The profiles are located in a profiles.yml file at the top level. Let's take a look at this file. The first line on the file is the name of the profile. The target line has to do with a target environment. Usually in development, this is set as dev. In production, it can be set to prod. The target functionality helps ensure that the resources are isolated between dev, staging, prod, and any other environments you may have. Underneath outputs and dev, you'll see a bunch of settings including the type, server, port, and a few others. This is all of the configuration information
>
> **[3:16](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=196)** that DBT uses to execute commands on the database on your behalf. DBT itself has a wealth of tutorials and documentation if you're interested in learning more. Now, let's take a look at our newly created projects models directory. We can see that some default models have been created for us. In this course, we're also going to make use of the DBT Power user plugin. This plugin allows you to visualize DBT models in powerful ways. Let's double click on one of the DBT model files and look at the lineage view. It is important to note the lineage view will only work if you have selected a DBT model. The power user plugin allows you to see tests, parent models, and documentation. The lineage view shows how DBT models or the tables themselves, are related to one another. Let's click on my_first_dbt_model.[SQL](../../Skills/Data%20Science/SQL.md) which we have open here. In the lineage view, you can see that this model has a child node that is my second DBT model. In normal SQL terminology, that means that my second DBT model, table, references the my first DBT model table in some way. In this case, my second DBT model selects from my first DBT model. When DBT runs these and the tables are eventually created
>
> **[4:53](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=293)** they will have a table name that is the same as the file name, including the .SQL extension. The last file to be aware of in the model's directory is a schema.yml file. This file contains the yml definition of the table schemas for each of the models. In this case, the first block has the definition for the my first DBT model including the table name, columns, and per column tests. The same is true of the second block that defines my second DBT model. Take some time independently in code spaces to navigate around to familiarize yourself with how all of these work together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** dbt (27), sql (2)
> **CLI Commands:** mysql (4), pip (1), make (1), node (1)
> **File Paths:** dbt_project.yml (2), profiles.yml (1), my_first_dbt_model.sql (1), schema.yml (1)
> **Prerequisites:** install (4)
> **Code Identifiers:** dbt_project (2), my_first_dbt_model (1)
> **UI Navigation:** click on (2)
> **Definitions:** means that (1), is a  (1)

#### [Running dbt](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=0)** - Now that we've installed dbt, let's begin the process of running dbt. There are a few commands that you'll need to know. First is the dbt seed command. The dbt seed command is used to seed or load initial data into the database tables. Seeding involves populating tables with sample data that will serve as the basis for [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) and analysis. This command is particularly useful during the development and testing phases when you need a representative data set to work with. Seeding data allows you to quickly assess the accuracy and effectiveness of your data models. Let's see this in practice. Navigate to the chapter two directory and look at the seeds directory. You'll notice a file called raw_taxi_trips.csv. As you can see, this is the csv file that contains the raw taxi information that we'll be working with today. Now from the terminal, navigate to the chapter two directory and we're going to run dbt seed.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=80)** Once the command finishes successfully, navigate to the [SQL](../../Skills/Data%20Science/SQL.md) Tools sidebar and open the chapter two dropdown. Underneath the table's directory you will see something called raw taxi trips. Right click on it and select show table records. You can see that the seed command has populated this table with the exact same contents as the CSV. This means our seed command successfully ran. Now, let's navigate back to the models directory. (keyboard clicking) You will see that our taxi_trips.SQL file has a single liner net. This line does a select star from raw_taxi_trips.csv, the table we just opened. The syntax may look a bit unfamiliar. That double curly brace wraps a reference to a file called raw_taxi_trips. This is one of the most powerful parts of the dbt syntax. This allows us to reference the raw_taxi_trips.csv file. To understand how all of this works together let's run dbt run. This is one of the most frequent commands that you will use and it actually runs dbt, meaning it runs all of the code and generates the tables defined by the model. As part of the run process,
>
> **[2:54](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=174)** the code is first compiled. In the compile step, the refs themselves are resolved into real table names and the actual SQL code that will be run is generated. Then, the runs occur. In the output, you will see that chapter2.taxi_trips was created as a table model. Navigate back to the SQL tool sidebar, open the chapter two dropdown and look under the table's directory. You should now see a number of new files called taxi trips in addition to raw trips. If you don't see it, you may have to refresh a database connection. To refresh the database connection, if you have to at any point, you can right click on the MariaDB database and select refresh. Let's right click on taxi trips and press show table records. You should see the records pop up. Congratulations. You've run your first dbt model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) (1)
> **UI Navigation:** navigate to (3), click on (3), open the (2), dropdown (2)
> **Code Identifiers:** raw_taxi_trips (4), taxi_trips (2)
> **Env Vars:** sql (4), csv (1)
> **File Paths:** raw_taxi_trips.csv (3), taxi_trips.sql (1)
> **Tools:** terminal (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - now (1)

#### [Challenge: Modeling taxi data](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-modeling-taxi-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-modeling-taxi-data?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-modeling-taxi-data?u=76281980&t=5)** - [Instructor] Let's put some of the dbt skills that you just learned to the test. For this challenge, you will take on the role of a New York City taxicab data analyst that would like to do some analysis on taxi trips. You are going to build and implement four new dbt models that will generate the tables for analysts who intend to perform some work. Open the models directory under chapter two and perform your work there. First, create a new model called over_nine_miles.[SQL](../../Skills/Data%20Science/SQL.md) which generates a table that contains all the columns of the source data with only the taxi trips with a distance of over nine miles. Second, create a new model called credit_card_count.sql that contains a breakdown of the fares paid by credit card. Third, create a new model called cross_borough.sql which generates a table that contains all of the columns of the source data with only the trips which start in one borough and end in a different borough. Fourth, create a new model called avg_num_dropoff_manhattan.sql which contains the average number of passengers on all trips with a drop-off borough that is in Manhattan. For each of these, make sure you add the necessary information to schema.yml. Ensure that dbt run works as expected, and that once the tables are generated, they look as expected. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4)
> **File Paths:** over_nine_miles.sql (1), credit_card_count.sql (1), cross_borough.sql (1), avg_num_dropoff_manhattan.sql (1), schema.yml (1)
> **Code Identifiers:** over_nine_miles (1), credit_card_count (1), cross_borough (1), avg_num_dropoff_manhattan (1)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### [Solution: Modeling taxi data](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=5)** - [Instructor] Congratulations on completing the taxi data challenge and on writing your first dbt models. Let's go through all of the steps necessary to complete this challenge. In this video, I'll present the completed solution and walk through how we arrive there. Whenever I'm writing dbt models, I always start with the schema.yml file. This helps me concretely think through the appropriate output tables and what they should look like for each of my models. We can see that the over_nine_miles model contains all of the columns of the source taxi_trips table. As you can see, this block of YAML looks exactly like the taxi_trips schema except for the name and description. The same is true for our cross_borough model. Now, let's look at our credit_card_count. As we know, this table will be the amount of fares paid by credit card. I could simply make this one column with just the count but we'll include the payment type too as an example. For that reason, this model is two columns, the payment type and the count itself. Finally, let's look at the last model. In this case, we want the average number of passengers dropped off in Manhattan. I'll only use one column this time and name it avg for average. Now, let's switch to the [SQL](../../Skills/Data%20Science/SQL.md) models themselves. To get the trips that are over nine miles, we'll simply filter to where the distance is over nine. To get the count of trips that were paid by credit card,
>
> **[1:42](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=102)** we simply do a filter where payment equals credit card and do a count of payment. To get the trips that start and end in different boroughs, filter where the pickup borough is not equal to the drop-off borough. Finally, to get the average number of passengers dropped off in Manhattan, run a simple average where the drop-off borough is in Manhattan. Once your dbt run is completed, you should be able to see the output of your models generated as tables. Click on the SQLTOOLS sidebar and under chapter2/Tables, you will see your new tables. You can click on each of them and press Show Table Records. I'll run through them quickly so you can compare your output with mine.
>
> **[2:38](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=158)** Great work completing this challenge and advancing your [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) and SQL skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1)
> **Code Identifiers:** taxi_trips (2), over_nine_miles (1), cross_borough (1), credit_card_count (1)
> **Env Vars:** sql (2), yaml (1), sqltools (1)
> **UI Navigation:** click on (2), switch to (1)
> **File Paths:** schema.yml (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 3. Table Materializations

[↑ Back to Table of Contents](#table-of-contents)

#### [Crypto cost: Materializations](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=0)** - While we advance our modeling skills in [SQL](../../Skills/Data%20Science/SQL.md), it's important to be mindful of resource consumption. To start, let's talk about strategies for storing or persisting data. To persist data, or materialize data, simply means to actually save it. This can mean saving it to a database locally or saving it to a database in the cloud. [Databases](../../Skills/Software%20Development/Databases.md) offer a number of powerful strategies to optimally use resources meaning you, as a data engineer, frequently control your overall database footprint in powerful ways. As always, I like to start with a personal story. This story involves a [Cryptocurrency](../../Skills/Data%20Science/Cryptocurrency.md) data provider. I was contracted as an independent consultant to tackle a challenging cost optimization project for a cryptocurrency company. The company had amassed an enormous amount of data on various crypto assets and exchanges, all stored within their central data systems. To make sense of it all, the team used SQL to analyze the data. Initially, everything seemed to be running smoothly but soon a significant problem arose. The team began exceeding their cloud budget each month and the overages were getting worse. If the trend continued, they would blow through their entire annual budget in no time. Recognizing the seriousness of the situation, they sought help, and that's when I was brought in. As I dug deeper into their [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) structure,
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=94)** I discovered the root of the issue. There was a perpetually growing table that held transactions related to a specific coin. The data in this table flowed through a complex pipeline, generating derivative data sets for various teams. Each time a new row was added to the parent table, it triggered the addition of the row to 10 to 15 child tables. These child tables had additional child tables themselves and the cycle continued. The multiplicative effect was astounding, with each new row corresponding to a total of 83 additional duplicate rows across the cluster. Once we discovered this, the team and I worked hand in hand to carefully optimize the data pipeline by reducing redundancy and streamlining the data storage structure. By implementing effective strategies, we significantly reduced the exponential growth in both the storage and the compute layer. As a result of our collaborative efforts, the company's [Data Management](../../Skills/Software%20Development/Data%20Management.md) became much more efficient leading to a substantial decrease in their cloud costs. With the newfound clarity and control over their data, the team could focus on their core objectives with confidence. Throughout this exercise, the team became keenly aware of the differences between tables and views, as well as the performance and cost trade-offs between the two. In this chapter, we'll talk about the world of materialization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [Cryptocurrency](../../Skills/Data%20Science/Cryptocurrency.md) (2), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1)
> **Env Vars:** sql (2)
> **CLI Commands:** make (1)
> **Speakers:** - while (1)

#### [Materialization terminology](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=0)** - [Instructor] You may already be familiar with the concept of tables versus views, but let's dive into how both of these mechanisms work. There's a lot of terminology in the materialization space that can make it difficult to understand and differentiate concepts. Let's start by breaking some of those down. Table materialization is the most common form of materialization in [SQL](../../Skills/Data%20Science/SQL.md). When a query's result set is materialized as a table, it is saved as a physical table on the database. This table can be queried and accessed just like any other table in the database. Table materialization is useful for storing intermediate or final results that need to be reused or shared among multiple queries. An alternative to table materialization is view materialization. In SQL, a view is a virtual table that is defined by a query. It does not store any data itself. Instead, it provides a convenient way to access and query data from one or more underlying tables. View materialization saves the result set of a query as a database view, which can be used as a virtual table in subsequent queries. Views act as a window-like perspective into the underlying tables, offering a convenient and secure way to access data. For example, in an employee database, a view could be created to display only the names and department information of employees from a particular division while hiding sensitive salary details.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=94)** A result set is the output of a SQL query. When a SQL query is executed against one or more tables or views, it returns the result set containing the rows and columns that match the specified criteria. Result sets are temporary collections of data that exist in memory during query executions. They do not have a persistent storage layer, like tables or reviews, and are generated on the fly when a query is executed. In DBT, a model represents a SQL query that transforms data from a source table into a new table with desired business logic. DBT allows data engineers to specify the materialization type for each model, controlling how the results of a query are saved and managed. Now let's switch to code spaces. Navigate to the example directory in the terminal. In the sidebar, open the My First DBT Model SQL file underneath the example project. We can see the top line of the file. It says config materialized equals table. The [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) table in this line implies that we're using the table materialization strategy. In terminal, let's run DBT run. Once the run has completed, navigate to the SQL tools side panel helper in VS Code, and open example. Underneath the tables dropdown, you should see My First DBT Model
>
> **[3:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=188)** and My Second DBT Model are both tables. Now let's move back to myfirstdbtmodel.sql and change the materialization strategy from table to view. Now let's rerun DBT run. Moving back to the SQL tools page, you can refresh the window and you'll see that My First DBT Model has disappeared from tables and has actually reappeared underneath views. This change may seem trivial, but it's done something very powerful behind the scenes. By changing from a table to a view, we freed up some valuable resources from the storage side. Congratulations, you've completed your first change in DBT materializations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (9), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** dbt (9), sql (8)
> **UI Navigation:** navigate to (2), switch to (1), in the sidebar (1), open the (1), dropdown (1)
> **Tools:** terminal (2), vs code (1)
> **Analogies:** just like (1), for example (1)
> **File Paths:** myfirstdbtmodel.sql (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)

#### [Incremental materializations](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=0)** - [Instructor] While table and view strategies are likely the most commonly seen strategies, there's one particular strategy that can be very powerful if used properly. That is the incremental strategy. As you know, DBT offers a few materialization strategies. These traditional materializations in DBT involve creating intermediary tables that start the results of complex [SQL](../../Skills/Data%20Science/SQL.md) queries. But let's say you have a table that's growing in perpetuity. For example, you decide to store all of your sales in a sales table. You know that this table every day will have new sales appended to it. In a regular table transformation, every child table of sales and intermediate table before the final nodes in the pipeline are updated. In DBT, these intermediate tables are materialized in their entirety. Whenever a DBT job runs, regardless of whether or not the underlying data has changed meaning you would have to reprocess and regenerate yesterday's data to process today's data. This approach can be inefficient, especially when dealing with large datasets or frequent data updates as it recompute the entire dataset each time, even if only a small portion of the data has changed. Enter the incremental strategy. Incremental materialization is a powerful technique used to optimize [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) and improve overall performance. With incremental materialization,
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=94)** DBT only processes and updates the data that has changed since the last run. This is achieved by keeping track of the incremental key or the column that uniquely identifies each row and using it to identify new or updated records. This can lead to substantial savings over time both from a performance and cost perspective. By not processing the data I've already processed, my pipeline also runs faster. To enable incremental materialization in DBT, first simply change the materialization strategy at the top to be incremental. Then you'll need to tell DBT which rows it should run a transform on for the incremental strategy. Usually, you'll want to filter on only the new rows that have been created in the source table since the last run. In DBT, you can use the curly brace, curly brace this, curly brace, curly brace command to find the timestamp of the most recent run of this model. Here is an example. Incremental transformation in DBT can result in a substantial amount of savings and it's wise to use them when needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1)
> **Env Vars:** dbt (9), sql (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Materializations](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-materializations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-materializations?u=76281980&t=0)** - [Instructor] Let's put our knowledge about all things materializations to practice and help a fictional version of our crypto company above. Open up [Codespaces](../../Skills/Software%20Development/Codespaces.md) and navigate to chapter three. You'll see a DBT project has been created for you. This project contains a data set of crypto data over a fixed period of time. It includes data across Bitcoin, [Ethereum](../../Skills/Data%20Science/Ethereum.md) and a few other coins. To get started run DBT Seed, to seed the raw crypto data table with the necessary information. Once the seed command has successfully run, you should be able to navigate [SQL](../../Skills/Data%20Science/SQL.md) tools, open up the chapter three database, right click on the raw crypto data table and select show table records to see what the data looks like. It's always wise to run some basic exploratory analysis on new data as well. From there, open up the models folder underneath chapter three and use the DBT power user plugin and lineage view to get an understanding of how all the models fit together.
>
> **[1:22](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-materializations?u=76281980&t=82)** For this challenge, I'd like you to update the materialization strategies for each of the models to ensure that the most appropriate strategy is selected. As always, there's not always a definitive correct answer. Your goal in this exercise should be to make reasonable assumptions and ensure that your code follows those assumptions. Enjoy the challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1), [Ethereum](../../Skills/Data%20Science/Ethereum.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** dbt (3), sql (1)
> **UI Navigation:** navigate to (1), click on (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Materializations](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=5)** - [Instructor] Congratulations on completing the materializations challenge. As I mentioned before, there are many correct answers and the solution I present will simply be one of many. Let's navigate to the chapter3 models directory in the UI and open up btc.[SQL](../../Skills/Data%20Science/SQL.md). Next, let's open up the lineage view in the bottom bar. We can see the btc model has a parent which is the crypto data model, and has a single child, which is another model that contains only the btc prices where a closing price is above 3K. Let's take one step up and click on the crypto data model. Once the view is open, lineage view shows us that this model reads from raw crypto data and it also shows a number of other child models, each of which corresponds to a separate coin, btc, eth, link, oxt, xlm, and xrp. Now, let's quickly look at the code for one of these files. Let's just pick btc.sql for ease. Let's take a step back and think a bit about how the system might work from the crypto perspective. It's clear that raw crypto data will be a data feed of multiple coins of crypto data. This feed will grow in perpetuity as more and more data comes in. These coins are then fed into the crypto data model which itself is materialized as a table.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=100)** The child models underneath crypto data, such as btc.sql and eth.sql, are also materialized as tables. Finally, there's another model called btc_closing_above_3k.sql which also is materialized as a table. It seems like at this point, a lot of redundant information is stored. Let's see how we can fix this. First, it seems like crypto_data.sql is going to be incrementally populated, so let's make this an incremental model. I'm going to copy and paste my solution here and we'll explain it after. I've now made this an incremental model. With an incremental model, we need to pick a value or attribute for our incremental determination. I've picked detailed date. Now, let's look at our child models. We could also make each of these incremental models but why not make them views? As a view, they won't take up much more storage space and they provide the same functionality for cheaper. Great. Now, let's look at btc_closing_above_3k. This is an interesting one, and it can go either way. I'm going to make an assumption, though, and assume that this dataset will be analyzed heavily by a bunch of different analysts. In that situation,
>
> **[3:12](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=192)** it may actually be better just to keep it as a table and so for our purposes, I'm going to keep this as a table. Great work. We've successfully rewritten our models using different materialization strategies. As mentioned, there are a number of correct answers based on the assumptions that you can make. Always remember after you change a materialization strategy, to rerun dbt run to make sure these persist in your database. Congratulations on finishing this challenge and on helping make our crypto company's life a little bit easier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (6)
> **CLI Commands:** make (7)
> **File Paths:** btc.sql (3), eth.sql (1), btc_closing_above_3k.sql (1), crypto_data.sql (1)
> **UI Navigation:** navigate to (1), click on (1)
> **Code Identifiers:** crypto_data (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 4. Common Table Expressions vs. Subqueries

[↑ Back to Table of Contents](#table-of-contents)

#### [Construction planning: Query complexity](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=0)** - One of the most powerful tools in the software engineering world lies in the use of code libraries. Libraries are like having a team of developers at your fingertips all for free. These libraries let developers share code efficiently and supercharge the development process. Now, think about SQLs built-in functions like SUM or AVERAGE. They're like libraries too. External pieces of code that speed up writing [SQL](../../Skills/Data%20Science/SQL.md) code. But what if you need custom logic specific to a unique set of transformations? SQL does have ways to specify external functions, but sometimes the logic you need is so specialized, it lives in a single SQL file. Let me illustrate this with a real-life story from my own experience. I was working with a construction company that stored equipment information in a relational database. They managed various construction jobs and manually assigned equipment to each job. In the world of construction, different pieces of equipment have specific standards that must be met before they can be used. For example, excavators need to have their oil level, air filter, coolant level, and hydraulic valves checked, among other things, to be considered ready for action. Different equipment types must have different standards, and each piece of equipment must be inspected daily and deemed ready before it can be used for a job. As you can imagine, this is a huge data problem. To handle this, the company created a massive SQL file
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=97)** like the one you see here. For each job, they appended the full list of excavator constraints to the query. The result, a query with a lengthy runtime and a lot of repeated work. Every time a new readiness metric was added, the developer had to make the same change in every block of code related to excavator readiness. This was cumbersome and error prone. And what about new developers trying to understand the file? It was incredibly challenging as you can imagine. We quickly realized that something had to be done in terms of code maintainability and readability. In this series of videos, we're going to explore an amazing SQL feature called Common Table Expressions or [CTEs](../../Glossary/Concept/CTE.md). CTEs are tools that make code easier to read and that reduce the potential for errors. They allow us to create reusable modular logic, so you can say goodbye to those monolithic SQL files. With CTEs, you can create compact, easy to read SQL code that's a breeze to maintain and understand. It's like giving your SQL skills a superpower boost. So let's dive into the world of CTEs and unlock their potential to make your code shine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (8), [Ctes](../../Glossary/Concept/CTE.md) (4)
> **Env Vars:** sql (8), sum (1), average (1)
> **Analogies:** imagine (2), for example (1), it's like (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1)
> **Speakers:** - one (1)

#### [Common table expressions (CTEs) vs. subqueries](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=0)** - [Instructor] A [common table expression](../../Glossary/Concept/CTE.md) or [CTE](../../Glossary/Concept/CTE.md) is a temporary result set that is used within a larger query. It can be thought of as a temporary view that is only accessible within the query in which it is defined. [CTEs](../../Glossary/Concept/CTE.md) are useful for breaking down complex queries into smaller, more manageable pieces. They can also be used to improve the performance of queries by allowing the database engine to reuse the results of a CTE multiple times. That is one of the biggest features of CTEs. You can think of a CTE as almost being a table that lives in line with your code. It has all of the benefits of being executed once and the ability to have those results used over and over again. There are a few benefits to using CTEs. First, readability and maintainability. CTEs make your [SQL](../../Skills/Data%20Science/SQL.md) code more readable and maintainable. By breaking down complex queries into smaller logical steps, you can easily understand the purpose of each CTE and the data it produces. This clarity helps other developers who may work on the same code base to quickly grasp the logic and make changes or enhancements without fear of introducing errors. Second, code reusability. CTEs promote code reusability by allowing you to define common subqueries once and use them in multiple parts of your main query.
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=93)** This eliminates the need to repeat complex logic, reduces redundancy and makes your code more concise. Third, recursive queries. CTEs can handle recursive queries allowing you to traverse hierarchical [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) like organizational charts or file systems. That capability is especially valuable when you're dealing with data that has a parent-child relationship. Fourth, optimization opportunities. CTEs provide optimization opportunities for database engines. Since CTEs create temporary result sets, the database optimizer can better understand the data flow and optimize the query execution. This can lead to overall improved query performance and reduced processing time. You may see CTEs used in comparison to subqueries. There are a few differences between CTEs and subqueries that are worth noting. First, CTEs are defined at the front of the query, unlike subqueries which are defined inline. Second, CTEs can be more efficient in terms of performance when compared to subqueries. Since CTEs create temporary result sets, the database optimizer can better understand the data flow and optimize the execution plan. This can lead to improved query performance and reduced processing times. Third, CTEs are ideal for handling recursive queries where a query refers back to its own result set. Subqueries cannot handle recursive queries directly
>
> **[3:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=187)** making them less suitable for scenarios that require recursive operations. As a data engineer, leveling up your SQL skills involves developing a strong understanding of software engineering principles that will help you author and design readable and extensible code. CTEs bring a degree of readability to SQL that is difficult to replicate in other ways, and incorporating them into your SQL code can significantly improve your team's quality of life.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ctes](../../Glossary/Concept/CTE.md) (15), [CTE](../../Glossary/Concept/CTE.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (4), [Common table expression](../../Glossary/Concept/CTE.md) (1), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **Env Vars:** cte (4), sql (4)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [CTEs in dbt](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=0)** - [Instructor] Let's get hands-on using [CTEs](../../Glossary/Concept/CTE.md) in dbt. In order to use a [CTE](../../Glossary/Concept/CTE.md), you'll need to define it with your dbt model. CTEs are defined using the WITH keyword, followed by the CTE name and the query that generates the results set. The syntax looks as you can see on screen. WITH the name of your CTE AS SELECT column1, column2, so on and so forth, FROM a source_table WHERE condition. You can see that this looks very similar to a normal SELECT statement in [SQL](../../Skills/Data%20Science/SQL.md), just with the additional WITH syntax. This is why I think it's helpful to think of CTEs as functions. By designing the CTE and assigning it a name, you can treat it as a function that generates a table. Once you've defined the CTE, you'll want to use it. To use a CTE, you can reference it in the main query of your dbt model and simply include its name in the main query as if it were a regular table. Let's make this more concrete. Take a look at the following SQL code. The purpose of the order_items_cte CTE is to calculate the total revenue for each order based on the data in the order_items table. Let's break down this CTE step-by-step. First, we create the CTE with the name order_items_cte. This acts as a temporary result set that is used in the subsequent query. The SELECT statement inside of the CTE
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=93)** calculates the revenue by multiplying the price and quantity columns from the order_items table and sums them up for each unique order_id. The main query then references this CTE and performs a LEFT JOIN, using the order_id column as the joining key. This allows the main query to retrieve the total revenue for each order. Now, you may be wondering why this is better than a subquery. First, this CTE is readable and maintainable. In the example, the CTE named ordered_items_cte defines a clear and named result set for calculating the order revenue. This makes the SQL code easier to understand for both the original developer and other team members who may need to review or modify this code in the future. Second, there is a performance benefit here. Since this CTE calculates the revenue for each order and stores it temporarily, the main query can access this pre-calculated data without needing to recompute it for each row in the orders table. This can result in faster execution times, especially when dealing with large data sets or complex calculations. Now that we've seen how to use CTEs in dbt, let's get hands on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CTE](../../Glossary/Concept/CTE.md) (14), [Ctes](../../Glossary/Concept/CTE.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (3)
> **Env Vars:** cte (14), select (3), sql (3), where (1), left (1)
> **Code Identifiers:** order_items_cte (2), order_items (2), order_id (2), source_table (1), ordered_items_cte (1)
> **SQL:** select (3), where (1), left join (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Implementing CTEs](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=5)** - [Instructor] In the first video of this chapter, the construction company faced complexity in identifying the maintenance work for specific excavators. Now, in this challenge, let's help them out. To begin, open [Codespaces](../../Skills/Software%20Development/Codespaces.md), and navigate to chapter4, and open up the dbt models project. Take a moment to understand the project setup, starting with the schema.yml file, and then exploring the individual models themselves. Let's dive into the models directory and click on excavators.[SQL](../../Skills/Data%20Science/SQL.md). In the bottom pane, open Lineage View. In Lineage View, you can see its connection with raw_excavators. And similarly, you can see all of its child elements. Similarly, click on jobs.sql, and you can see its relation with raw_jobs. Now let's examine maintenance.sql. Inside the file, you'll find repeated code from the construction team scripts. Our task is to simplify the construction team scripts using a [CTE](../../Glossary/Concept/CTE.md) or [common table expression](../../Glossary/Concept/CTE.md). The goal is to make the code easy and understandable. To get started, run dbt seed inside the chapter4 directory. Running dbt seed populates the raw_excavators table and the raw_jobs table with data, so you can test your code appropriately. All of your code changes should happen in maintenance_cte.sql.
>
> **[1:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=101)** As you implement the CTE, think of ways to validate its behavior to ensure it performs as expected. Good luck with the challenge. By using [CTEs](../../Glossary/Concept/CTE.md) effectively, we should be able to streamline the maintenance work identification process and make everything more readable and easy to manage for the construction team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [CTE](../../Glossary/Concept/CTE.md) (2), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1), [Common table expression](../../Glossary/Concept/CTE.md) (1), [Ctes](../../Glossary/Concept/CTE.md) (1)
> **File Paths:** schema.yml (1), excavators.sql (1), jobs.sql (1), maintenance.sql (1), maintenance_cte.sql (1)
> **Code Identifiers:** raw_excavators (2), raw_jobs (2), maintenance_cte (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (2), navigate to (1)
> **Env Vars:** cte (2)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Implementing CTEs](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=0)** - [Instructor] Congratulations on completing the implementing [CTEs](../../Glossary/Concept/CTE.md) challenge. You've experienced firsthand how CTEs can significantly improve the readability of your code. Now, let's start applying CTEs to simplify the maintenance.[SQL](../../Skills/Data%20Science/SQL.md) file. Go to chapter4, open up the models, and open up maintenance.sql. When we open maintenance.sql, we notice a lot of repeated logic, making basic maintenance operations error-prone in its entire file. To address this, we'll rewrite the code using a [CTE](../../Glossary/Concept/CTE.md). Our target CTE will be the excavator readiness evaluation, since it appears in every block. Let's open maintenance_cte.sql for our work. I've copied and pasted my solution first, and I'll begin explaining it. We'll first choose a name for our CTE. In this case, I called our CTE, failing_excavators. Next, we include the repeated information and the repeated logic, specifically the excavator readiness check, into our CTE. With the CTE successfully defined, let's focus on the main query. We'll need to collect the job IDs from maintenance.sql, which I've done here, and ensure that our job ID is in the set of these values. We'll then update the main query to reference our CTE. Of course, it's crucial to ensure
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=94)** that our code compiles and runs correctly. Let's execute dbt run to verify everything. It looks like our run is completed successfully. Now, open up the SQLTools side panel and navigate to the chapter4 database. We should see the maintenance_cte table in addition to the maintenance table. We can right-click these, and click Show Table Records to actually view the files. Let's do the same thing on the maintenance_cte table to make sure our information looks the same. Checking the results, everything looks good. Our tables match and the rewrite was successful. Well done on completing this task. By utilizing CTEs effectively, we streamlined the code and improved its overall maintainability. Keep up the great work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CTE](../../Glossary/Concept/CTE.md) (7), [SQL](../../Skills/Data%20Science/SQL.md) (5), [Ctes](../../Glossary/Concept/CTE.md) (4)
> **Env Vars:** cte (7)
> **File Paths:** maintenance.sql (4), maintenance_cte.sql (1)
> **Code Identifiers:** maintenance_cte (3), failing_excavators (1)
> **UI Navigation:** go to (1), navigate to (1), right-click (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Testing SQL with dbt

[↑ Back to Table of Contents](#table-of-contents)

#### [Advertising: Testing SQL](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=0)** - One of the most important but often overlooked components of the software engineering process is testing. Well-tested code can mean the difference between a successful software release and a production outage. As such, the testing landscape for software has grown and expanded. From unit tests to code coverage tests to full scale integration tests, there are a number of ways to test software. Testing [SQL](../../Skills/Data%20Science/SQL.md), however, involves a different set of concerns. Often the SQL code is tightly coupled with the data in the underlying system. Code that is written with the same syntax can behave drastically differently when using different kinds of data. For that reason, testing SQL frequently involves asserting the data itself is in a state that's primed for your use. To illustrate the importance of testing, I'll share a story of an ad tech company. In the mobile advertising space, each mobile device is assigned an ADID or advertising identifier. Think of this ID as a unique identifier of your individual cell phone for advertising purposes. This advertising company would take a cohort of these ADIDs and perform targeted marketing based on geospatial behavior patterns. For example, if you happen to visit bowling alleys frequently, an advertiser may send you a coupon for a bowling alley. The company would use SQL to group by a certain behavior and select all of the ADIDs that fell into a category for advertising purposes.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=94)** Usually the size of these cohorts tended to be fairly stable, so the advertisements that went out were also fairly stable. You can probably guess where this is going. One day, the company's cohort jobs started failing all over the board due to memory constraints, meaning the cohorting jobs did not have the necessary memory to actually perform the aggregations and quickly failed. This kind of situation had never occurred before. And upon investigation, the company realized that the size of the cohorts had drastically grown by over an order of magnitude. A deep investigation followed during which all advertising was paused across the firm. Eventually, the company realized that a bunch of bad test data, which produced random ADIDs, had accidentally made its way into production. This resulted in an explosion of the size of one of the cohorts, which the company at that time had no means of detecting. The company fairly quickly adopted some testing metrics to ensure that the cohort, sizes, or the count of ADIDs per cohort, existed only in a certain range. It turned out that this kind of testing and validation can be really powerful when implemented properly. In this chapter, we'll focus on how DBT can be used properly to test our data and avoid situations like this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4)
> **Env Vars:** sql (4), adid (1), dbt (1)
> **Analogies:** for example (1)
> **Speakers:** - one (1)

#### [Unit testing using dbt](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=0)** - [Tutor] [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) in dbt is a critical aspect of ensuring the accuracy, reliability, and consistency of [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) pipelines. It involves testing individual data models in isolation to verify their correctness. By writing test cases that assess the expected behavior of each data model and comparing the actual results against the expected outcomes, dbt users can quickly identify and rectify data issues. The foundation of dbt's unit testing lies in the test macro, which allows users to define test cases directly within dbt models. These tests can check various aspects of the data, such as column data types, null values, uniqueness, and specific business logic as well. When dbt is run in test mode, it automatically executes all defined tests and reports any failures. A key benefit of unit testing in dbt is in its ability to rapidly detect data discrepancies. For example, consider a data model responsible for calculating revenue based on sales transactions. By writing a unit test to ensure that the total revenue matches the sum of the individual sales amounts, any discrepancy can be flagged instantly during testing, enabling timely debugging and resolution. But let's start with the basics. There are a few tests you should know about right off the bat.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=94)** DBT ships with these built-in tests. These tests all operate on a per-column basis. Some of them are, first, not_null, which tests if a specific column in a table contains any null or missing values. Second, unique, which verifies that a specific column or combination of columns in a table contains unique values. Third, accepted values, which tests if the values in a column belong to a predefined list of values. Fourth, schema, which ensures that the table columns match what is in the schema.yml file. There are also a few others I didn't include in here. These built-in functions allow users to run assertions on top of their code easily. To include one of these assertions in a dbt model, you can modify the schema.yaml file associated with the model. Let's get hands-on and switch to [Codespaces](../../Skills/Software%20Development/Codespaces.md). Open up example/models/example and open the schema.yml file. Let's take a look at the two models in this file. The column ID in my first dbt model has two tests associated with it, unique and not_null. This means that when you run dbt test, the test will evaluate whether there are duplicate values present in the ID column and whether or not there are any null values in the ID column.
>
> **[3:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=187)** The same is true for my second dbt model. From terminal, cd into the example directory. Now, let's take a look at how to run the test option in dbt. First, run dbt run to make sure you have the tables created. Now, let's run our test. To run tests, run dbt test.
>
> **[3:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=220)** Running dbt test in the terminal will execute all of the defined tests, and any failures will be reported. For instance, the test not_null my_first_dbt_model_id fails, meaning the id column contains a null value. Let's trace this. If you open up my_first_dbt_model.[SQL](../../Skills/Data%20Science/SQL.md), you can see we select one as ID and union that with a null value. So, it makes sense why this test fails. While using the built-in dbt functions for testing is relatively straightforward, more complex testing scenarios may require custom tests. Custom tests are defined in separate SQL files and can assess specific business logic, or [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) rules that could be unique to your organization. In conclusion, unit testing in dbt is essential for maintaining [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) and ensuring the reliability of your [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md). By leveraging the built-in test functions and creating custom tests, you can confidently validate the accuracy of your data models and identify any issues early in the development process. This robust testing framework empowers data engineers to build more resilient and trustworthy data pipelines in dbt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (2), [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) (1), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **Code Identifiers:** not_null (3), my_first_dbt_model_id (1), my_first_dbt_model (1)
> **File Paths:** schema.yml (2), schema.yaml (1), my_first_dbt_model.sql (1)
> **Analogies:** such as (1), for example (1), for instance (1)
> **CLI Commands:** cd (1), make (1)
> **Env Vars:** dbt (1), sql (1)
> **Tools:** terminal (2)
> **UI Navigation:** switch to (1), open the (1)

#### [Custom tests in dbt](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=0)** - [Instructor] Let's explore how to create custom tests in dbt. The process is simple and consists of three main steps. First, we'll create a new [SQL](../../Skills/Data%20Science/SQL.md) file in the test directory of our dbt project. Then we'll write the custom logic for the custom test in the sql file. Finally, we'll reference this custom test in our dbt model. Let's dive into the details. For our purposes, we're going to recreate the not in all test on the column ID using a custom test. Step one, let's open the example slash model slash example slash schema dot yml file. Next, let's remove the not null test underneath the ID column of the My first dbt model file. As you'll remember, this test has failed in the past. Next, let's run dbt test to ensure that the test successfully run without the null check for the ID column. Great, it looks like this passed. Now let's move to step two. Navigate to the example slash test directory where generic tests are placed and create a folder named generic. Inside this folder make a custom file called custom test sql. I called mine custom underscore test that sql.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=95)** Now let's write the custom test logic. Remember, this test will be defined as a table in dbt and if the table's populated with data the test will be considered failed. I've pre-written the test. Let me copy and paste it here before I explain what it does. As I mentioned, tests in dbt are tables like everything else. If the table generated by the test in dbt is populated with data, then the test has failed. To create our custom test, we wrap the sql code in a test block and in an end test block. In this case we've mentioned we want to recreate the functionality of the not in all test. Therefore, we'll find all records where the ID column is null. If any such records exist, and if this table is populated with any rows, our test is failing. Our test is parameterized, meaning it's allowed to take in arguments. During compilation the model and column name columns will be substituted in to the compiled sql code. This parameterization makes tests more generic as we can run the same logic across multiple models and column names without having to write a custom test per model and column name. Now that we've defined our custom test we need to reference it in the schema dot yml file. Go back to the schema dot yml file and add another line underneath the test block
>
> **[3:09](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=189)** and include the name of our custom test which in this case is custom underscore test. Now that we've added the name of our custom test let's run dbt test again. As you can see with this approach we've successfully recreated the behavior of the not in all test through our custom test. Custom tests in dbt are powerful and flexible As anything expressible in sql can be translated into a dbt test. By mastering testing in dbt, you'll advance your [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) skills ensuring the accuracy and reliability of your [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md). The ability to create custom tests empowers you to validate specific business logic and [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) rules unique to your organization, enhancing the overall data testing process in dbt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (7), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** open the (1), navigate to (1)
> **Cross-References:** go back to (1)
> **Definitions:** defined as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Testing SQL](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=5)** - [Instructor] Let's go back to the example of our advertising company from the first video in this chapter. For this challenge, we're going to help the company get their testing infrastructure in order. To get started, first open up chapter5/models/adid_data.[SQL](../../Skills/Data%20Science/SQL.md) in the VS Code UI. Then open Lineage View in the DBT Power User plugin. You can see this model reads from a parent, raw_adid_data. Next, let's shift our attention to the schema.yaml file. Upon inspection, you'll notice that the schema in its current form lacks any tests. Now our mission is to add some of the essential built-in DBT tests to ensure [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) and reliability for this kind of data. Modify the schema.yaml file to add some of the built-in DBT tests that you believe would be necessary to have in this kind of data. As you contemplate the tests to add, consider the descriptions of each of the columns provided. These will provide you with valuable pointers and ideas for designing the appropriate tests. Once you've enhanced the schema with relevant tests, let's revisit the advertising company's previous predicament. They encountered a scenario where one of the cohorts ballooned significantly larger than the others. Our test now is to leverage our DBT testing skills to create a generic test
>
> **[1:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=101)** that prevents this issue from reoccurring. Use your DBT testing skills to create this generic test to ensure the issue doesn't occur. Specifically, each of the cohorts should have a maximum of 100 distinct AdIDs. With our test defined, it's time to put them to the test. Execute the DBT test command to validate the data and check for any potential failures. Did you notice any failures? If so, what test failed and what may be the reason? Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **Env Vars:** dbt (6)
> **File Paths:** schema.yaml (2), chapter5/models/adid_data.sql (1)
> **Code Identifiers:** adid_data (1), raw_adid_data (1)
> **Cross-References:** go back to (1)
> **Tools:** vs code (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Testing SQL](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=0)** - [Instructor] Congratulations on completing the testing challenge. Let's run through our solution. As always, there are likely multiple correct answers. Depending on the assumptions that you make during the challenge, I will show you a potential solution. Let's open up chapter5/models/schema.yaml. The first part of the task involved using some of DBTs built-in tests on the columns. Let's quickly run through them. In the case of adid the description mentions that each row has a distinct value and that the value is required. As such, let's apply the unique and not null tests to this column. The latitude, longitude city and event date columns are all required but nothing specifies that the values must be unique or that another built-in test may apply. For that reason, we'll simply add the not null test. Looking at cohort we can see that the cohort field is required and that there are actually a set of defined values. For this column, specifically, the values must either be the English [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) one, two, three, four, five, or six. Let's add this as an accepted values test and include the list of values that this column can contain.
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=96)** Since the field is also required we should add the not null test. There's one more test listed called Ensure cohort size max 100. Let's comment this out for now. We'll get to that shortly. Now, let's run a DBT test and make sure everything passes,
>
> **[2:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=124)** great. It seems like everything works as expected. The second part of the challenge involved creating a custom test to validate that each of the cohorts have at most 100 unique adid's. To create a generic test we open the chapter5/testdirectory and create a directory named generic. Inside the generic directory, we can create our test. I named the test Ensure cohort size max 100. Open it up. This test uses a [CTE](../../Glossary/Concept/CTE.md) to first create a table with the cohort and count the number of adid's in that cohort. Then in the main query, we filter for the cohorts that have a cohort count of greater than 100. Now let's switch back to schema.yaml and uncomment the ensure cohort size 100 max test.
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=184)** Now let's rerun DBT test.
>
> **[3:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=194)** To investigate I'm going to grab the cohort count CTE code, and run it to see the count of each of my cohorts. You can open up the [SQL](../../Skills/Data%20Science/SQL.md) Tools plugin and press this button here to create a new SQL file. You may have to use the Chapter five database by typing use chapter five, but I've already done that. Let me copy and paste my code here and press run on active connection. As you can see, cohort four and cohort one have both resulted in test failures. Cohort four has 504 unique adid's whereas cohort one has 108, we've successfully solved the fundamental problem encountered by the advertising company. Great work on completing the chapter on testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CTE](../../Glossary/Concept/CTE.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** dbt (2), cte (2), sql (2)
> **File Paths:** chapter5/models/schema.yaml (1), schema.yaml (1)
> **CLI Commands:** make (2)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Looking ahead](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/looking-ahead?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/looking-ahead?u=76281980&t=0)** - Looking ahead, I anticipate several exciting developments in the [SQL](../../Skills/Data%20Science/SQL.md) and [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) landscape. Machine learning and AI integration with SQL are poised to revolutionize how enterprises derive insights from data. With [Predictive Analytics](../../Skills/Data%20Science/Predictive%20Analytics.md) becoming an integral part of data engineering workflows. Automated [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) and [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) checks will enhance the reliability and trustworthiness of [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md), ensuring that data engineers can confidently make decisions based on high quality data. The rise of streaming and [Real-Time](../../Skills/Database%20Management/Real-Time.md) processing will drive the demand for data engineers skilled in SQL and technologies like [Apache Kafka](../../Skills/Software%20Development/Apache%20Kafka.md) and Apache Flink. This shift towards real-time data analytics will enable businesses to respond swiftly to changing market trends and customer demands. Moreover, the convergence of data engineering and [Data Science](../../Topics/Data%20Science.md) will necessitate data engineers to develop expertise in languages like [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and R alongside their SQL skills. This interdisciplinary effort will empower data engineers to collaborate effectively with data scientists and bridge the gap between [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) and [Data-driven Decision Making](../../Skills/Data%20Science/Data-driven%20Decision%20Making.md). As you wrap up this course, remember that SQL is a powerful tool that empowers data engineers to transform raw data into valuable insights. The knowledge gained in this course will serve as a strong foundation for your data engineering journey.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/looking-ahead?u=76281980&t=94)** The trends in the SQL and modern data stack ecosystem will continue to shape the future of data engineering and your adaptability to these changes will be crucial for your professional growth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (6), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (5), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (2), [Predictive Analytics](../../Skills/Data%20Science/Predictive%20Analytics.md) (1), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1)
> **Env Vars:** sql (6)
> **CLI Commands:** apache (2), make (1), python (1)
> **Definitions:** is a  (1)
> **Speakers:** - looking (1)

#### [Next steps](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980&t=0)** - Congratulations. You have successfully completed the course and advanced your [SQL](../../Skills/Data%20Science/SQL.md) skills for [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md). Throughout this comprehensive journey, you explored the powerful world of SQL and learned how to leverage the revolutionary [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) tool DBT along with best practices for data engineering. Let's reflect on the key takeaways. We explored trends in the SQL and modern data stack ecosystem and discussed some forward-looking ideas in the ever-evolving field of data engineering. In this course, you explored essential concepts like normal [Forms](../../Skills/Web%20Development/Forms.md), functional dependencies, and the principle of relational [Database Design](../../Skills/Software%20Development/Database%20Design.md). Understanding these fundamentals is vital for maintaining [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md), reducing redundancy, and optimizing the efficiency of your database schema. With DBT, you harness the capabilities of a versatile open source solution, enabling us to build and transform [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) with ease. You learned how to optimally design analytics code, making SQL-based data transformation and testing a breeze. The world of data engineering is continuously evolving and SQL remains a foundational skill in the data stack ecosystem. Similarly, if you're interested in understanding orchestration, another foundational skill, be sure to complete my hands-on data engineering course. As data continues to grow in volume and complexity,
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980&t=98)** SQL will continue to play a pivotal role in empowering data engineers to unlock valuable insights from these vast data sets. I encourage you to keep exploring, learning, and applying your skills to make a positive impact with data. As the data engineering landscape evolves, I'm confident that you are well equipped to [excel](../../Skills/Data%20Science/Microsoft%20Excel.md) in this dynamic and rewarding field. Again, I'm Vinu, and I thank you for joining me on this exciting learning journey. I wish you all the best in your future endeavors as a skilled data engineer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (6), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (6), [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Database Design](../../Skills/Software%20Development/Database%20Design.md) (1)
> **Env Vars:** sql (6), dbt (2)
> **CLI Commands:** make (1)
> **Speakers:** - congratulations (1)


## Instructor

- [Vinoo Ganesh](../../Instructors/Data%20Science/Vinoo%20Ganesh.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advance-your-sql-skills-for-data-engineering-3315012/codespaces)

## Skills Covered

- Data Engineering
- SQL
- Data Build Tool (DBT)

## Path Context

### In [Master Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Master%20Data%20Engineering.md)
← [Complete Guide to Python for Data Engineering- From Beginner to Advanced](Complete%20Guide%20to%20Python%20for%20Data%20Engineering-%20From%20Beginner%20to%20Advanced.md) | **6 of 8** | [Advanced Snowflake- Deep Dive Cloud Data Warehousing and Analytics](Advanced%20Snowflake-%20Deep%20Dive%20Cloud%20Data%20Warehousing%20and%20Analytics.md) →

## Appears In

- [Master Data Engineering](../../Paths/Data%20Science/Learning%20Paths/Master%20Data%20Engineering.md)

## Related Courses

_Courses sharing skills:_

- [Complete Guide to SQL for Data Engineering- from Beginner to Advanced](Complete%20Guide%20to%20SQL%20for%20Data%20Engineering-%20from%20Beginner%20to%20Advanced.md) — SQL, Data Engineering
- [Data Engineering With Dbt](Data%20Engineering%20With%20Dbt.md) — Data Engineering, Data Build Tool (DBT)
- [Advanced SQL Project- Design and Manage a Database](Advanced%20SQL%20Project-%20Design%20and%20Manage%20a%20Database.md) — SQL
- [Practical Database Design- Implementing Responsible Data Solutions with SQL Querying](Practical%20Database%20Design-%20Implementing%20Responsible%20Data%20Solutions%20with%20SQL%20Querying.md) — SQL
- [SQL Server Fundamentals- Master Basic Query Techniques](SQL%20Server%20Fundamentals-%20Master%20Basic%20Query%20Techniques.md) — SQL

---

[↑ Back to top](#)