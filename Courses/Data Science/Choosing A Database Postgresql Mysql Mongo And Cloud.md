---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: choosing-a-database-postgresql-mysql-mongo-and-cloud
url: "https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud"
level: Intermediate
updated: 5/16/2024
learners: 45186
skills:
  - MongoDB
  - PostgreSQL
  - MySQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQE2oMuzWAT5sQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1616445994252?e=2147483647&amp;v=beta&amp;t=3MDeVHpprZVcNp5-hJPjYZzvOEbVq-YzgY56xvl9gR8"
linkedin_topic: Data Science
learning_paths:
  - '[[Explore a Career in SQL Development]]'
next_courses:
  - '[[SQL Essential Training]]'
path_nav: '[{"path":"Explore a Career in SQL Development","position":1,"total":8,"prev":null,"next":"SQL Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/mongodb
  - skill/postgresql
  - skill/mysql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Choosing%20A%20Database%20Postgresql%20Mysql%20Mongo%20And%20Cloud.md)

![Choosing A Database Postgresql Mysql Mongo And Cloud](https://media.licdn.com/dms/image/v2/C4D0DAQE2oMuzWAT5sQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1616445994252?e=2147483647&amp;v=beta&amp;t=3MDeVHpprZVcNp5-hJPjYZzvOEbVq-YzgY56xvl9gR8)

# Choosing A Database Postgresql Mysql Mongo And Cloud

> There are a lot of different databases out there with their own pros and cons. It’s important to know what your options are. In this course, instructor Amataverna Lee covers PostgreSQL, MySQL, Mongo (a NoSQL database), and several cloud-based databases, to help you choose what will be best for you. You’re likely to encounter PostgreSQL in your career, so it’s important to be familiar with this typ

> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud) | Intermediate | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Choosing the right data platform](#choosing-the-right-data-platform)
  - [Comparing database options](#comparing-database-options)
  - [Setting up the environment](#setting-up-the-environment)
- [**1. PostgreSQL**](#1-postgresql) (4 videos)
  - [PostgreSQL explore](#postgresql-explore)
  - [PostgreSQL commands](#postgresql-commands)
  - [Inheritance and data types](#inheritance-and-data-types)
  - [Features](#features)
- [**2. MySQL**](#2-mysql) (3 videos)
  - [MySQL explore](#mysql-explore)
  - [Dialect nuances in MySQL](#dialect-nuances-in-mysql)
  - [MySQL Workbench](#mysql-workbench)
- [**3. Mongo**](#3-mongo) (3 videos)
  - [Mongo explore](#mongo-explore)
  - [Dialect nuances](#dialect-nuances)
  - [Mongo tools](#mongo-tools)
- [**4. Cloud-Based Databases**](#4-cloud-based-databases) (6 videos)
  - [Snowflake](#snowflake)
  - [Snowsight by Snowflake](#snowsight-by-snowflake)
  - [Amazon Web Services](#amazon-web-services)
  - [Amazon Redshift and S3](#amazon-redshift-and-s3)
  - [Google Cloud Platform](#google-cloud-platform)
  - [Microsoft Azure](#microsoft-azure)
- [**Conclusion**](#conclusion) (1 videos)
  - [Recap](#recap)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Choosing the right data platform](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980&t=0)** - [Amataverna] [[Data Privacy]], governance, analysis, and storage are important to a business in any industry. And finding an effective way to scale data infrastructure is an important part of a company's growth. Since there's not enough time to cover all of them, I've chosen to focus on Mongo, [[MySQL]], and [[PostgreSQL|Postgres]]. I'll also provide an overview of some cloud-based options such as [[Snowflake]], AWS, and GCP. Each data platform is great in its own way. It stores the data differently which is important to understand to find one that is right for you. We'll cover querying the data and how [[SQL]] dialects can vary from data platform to data platform. And how they have their own set of unique features to choose from. We'll also look at the business reasons for picking a certain data of platform. While we focus more on data warehouses, we'll look at what these [[Microsoft Products|products]] offer as a data platform as a whole. What does their [[Data Lakes]], [[Business Intelligence (BI)|business intelligence]], and Gooey tools look like? Hi, my name is Amataverna Lee. I'm a data engineer at Hello Alfred. Responsible for maintaining our data warehouses and making the data accessible and easy to understand for everyone. In this course I'm excited to share with you some of the traditional and newer options for data platforms out there. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Privacy]] (1), [[MySQL]] (1), [[PostgreSQL|Postgres]] (1), [[Snowflake]] (1), [[SQL]] (1)
> **CLI Commands:** mongo (1), mysql (1), aws (1), find (1)
> **Env Vars:** aws (1), gcp (1), sql (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [amataverna] (1)

#### [Comparing database options](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=0)** - [Narrator] When we're looking at data platform options we need to decide what kind of data model we want. This can be separated in two different kinds. Relational and non-relational data models. In the industry a non-relational database is sometimes called a [[NoSQL]] database. NoSQL is standing for Not only [[SQL]]. Although it is called a non-relational database it does store relational data sets. As data becomes more sophisticated and less structured, NoSQL [[Databases]] provide more flexibility for developers to store data as they see fit. There are four main types. Document, key-value, wide-column, and graph databases. Document and key-value are more well know. In this course we'll be looking at [[MongoDB]]. Which is a document database. And here's an example of something we'll see later in the Mongo section. This is not to discount [[Relational Databases]]. Or also know as, SQL databases. And this is a screenshot of something we'll be looking at in the [[PostgreSQL|Postgres]] section. An older and still extremely popular data model, relational databases uses SQL to make accessing easy and organized. Since data is stored in fixed tables in columns. The fixed structure is very good for [[Data Integrity]]. Although it leaves less flexibility for scaling horizontally. We'll talk more about relational database specific assets. Such as different transactions, (inaudible), and indexing. Both come with it's own pros and cons. We'll be reviewing some of the most well known vendors of the relational and non-relational database.
>
> **[1:34](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=94)** And how to find the best fit for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (3), [[SQL]] (3), [[Databases]] (3), [[Relational Databases]] (2), [[MongoDB]] (1)
> **CLI Commands:** mongo (1), make (1), find (1)
> **Env Vars:** sql (3)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Setting up the environment](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=0)** - [Instructor] So now I'm going to show you how you can set up an environment to follow along and write [[SQL]] queries in. So there are a couple of different applications you can use for this. If you just search, you know, different IDEs, you'll come up with a lot of different options. Most of them are free, too. Or at least come with a free trial. So this one I'm using here, this is the one you'll see throughout the course. And this is the one that I like to use at work. This is called DataGrip. You can download this for free from their website and we can create a new connection like this. So you can either click here and do a new data source. And you can see there a lot of different data sources. We really only cover very few things in this course. But let's go ahead and click [[PostgreSQL|Postgres]] just because that's the next thing we're going to do in this course. And it automatically sets up Postgres to the local hosts. Meaning that all the data, everything, is connected to my computer. We're not connected to an external database. So, if you do this professionally, you'll always connect to your company's database, whether it's through like a URL, for example. You'll connect to that host. In Mongo I also created a database URL, but for Postgres, I just did it on my computer. So I'm going to go ahead and put in my username and password. You can see it automatically connected. So I had created this authentication earlier.
>
> **[1:34](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=94)** You can do that as well. And once everything looks good, you can just click "Okay". So you can see that it added a new data source. And the coolest thing about using something like DataGrip is you can work in different files at the same time. So I can work on Mongo and Redshift and Postgres all at once in this application. So we're going to go ahead and open our Postgres database. And this is completely new. What it has in here is just everything that Postgres comes with. This is actually from the course earlier that I had already built. So here, we're going to go ahead and create a new schema. So we'll just write "create schema" and we'll call it "new Postgres connection". So we're going to go ahead and run that. And you can see it automatically created a schema here. We try to open it. There's nothing inside it so we can create tables in it. We can create views, you know, all sorts of fun things in there. Which we're going to do later on in this course. So that's how you can create a connection on your computer and write in SQL as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (7), [[SQL]] (2)
> **Env Vars:** sql (2), url (2)
> **CLI Commands:** mongo (2)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. PostgreSQL

[↑ Back to Table of Contents](#table-of-contents)

#### [PostgreSQL explore](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-explore-21050360?u=76281980)

#### [PostgreSQL commands](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=0)** - [Instructor] Let's review some of the fundamentals of using [[PostgreSQL|Postgres]]. If you're familiar with [[SQL]] in general most of this will be similar information but we will note some differences in the syntax of Postgres. Postgres offers other commands in the query that are useful to know. We're going to go through them fairly quickly. First, we're going to look at the [[Fetch]] statement. The fetch is similar to a limit clause, which in my experience is used more often, but limit is actually not considered SQL standard so Postgres allows both. So we're going to do something. So this is how we would do the limit statement. If we run this, we'll see we pulled from our customer's table and there are 10 rows.
>
> **[0:53](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=53)** Now we're going to write the same thing using fetch.
>
> **[1:04](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=64)** We also need to learn how to spell select. We get the exact same results, the first 10 rows of customers. Cool. Next we're going to look at intersect. So intersect returns data that is only available in both result sets. It's similar to an inner join. So let's look at how you would do the same dataset with an inner join. So we do a select distinct of let's just look at customer's ID and we're going to do an inner join. The inner is implied when you just write, join. Okay, we write that. We see we got 15 rows and these are all the customers in the orders table and in the customer's table. Now let's do this using intersect. So same thing. And the key to note is that we're not putting the distinct in front of the ID here. And that's because we don't need to. The intersect will basically do the distinct for us. It's only counting where the customer ID occurs once.
>
> **[2:27](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=147)** So we check that out. We get the same 15 rows of the same customer IDs. So these two queries give you the exact same results. Now we're going to look at a full outer, which not every database offers. So a full outer join pulls all the data from both tables regardless of whether or not they're joined together. What that means is even though we're joining on we're going to use the same example from up here, customers and orders, who are joining on the customer ID even if they're customers with no orders or there are orders but no customers we're going to see both in our results set. So we're going to do a select star from our customers and we're going to do a full outer join.
>
> **[3:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=197)** We need to put our (indistinct). Great. So this is from the customer's table and then we have the order table here. So we can see here where the order ID is null, those are customers with no orders. You can see here where we have orders but there are no customers. That's where we're seeing where the customer table is null where we have orders and a full outer join will bring all the data together regardless of whether or not it conjoined everything. Next we're going to look at checking constraints. So let's create a fake table and we're going to call this table Christmas [[Microsoft Products|products]].
>
> **[4:09](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=249)** We're going to put an ID for the product ID, call it a text. We're going to say it can't be null. We're going to have a price in there. It's going to be an energy integer, also not nul but we're going to add another constraint on top of the not nul which is we need to check that the price is greater than zero.. So effectively it has to be a real price. And we're going to add Christmas and we're going to make that Boolean to check that it is a Christmas special product. Cool, so let's create our table. And now we're going to check if this price constraint works. So we're going to try to insert some values into this table. Insert values into Christmas products to see if constraint works. Cool. So let's do insert into Christmas products. We want to put the values of the ID. We give it, A-B-C, price. You can see that's able to connect that we're filling in this table. So it's like highlighting it. It's put $23 and yes. All right, let's see who this inserts awesome. It ran. So we can check if values... So now we're going to check if the value's actually in there
>
> **[5:50](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=350)** And we can see that value is in there. Awesome. Now we're going to add another value in the Christmas products and we're going to do insert into Christmas products, values, and we're going to do the same thing. Let's give a value of XYZ price. We're going to go with negative one. And yes. Now you see, it immediately returned an error because it fails the Christmas products price check which we had placed over here. So it won't allow us to insert this. The next thing we're going to check our Booleans. So you can already see we've added a Boolean up here to check if it's a Christmas product. And we were able to say yes, to confirm it is in our values. However, you can also, instead of saying yes or no, if you wanted to put in a different Boolean
>
> **[7:02](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=422)** you can also use true or false. Some [[Databases]] only take true or false. You can do yes or no here. Some you can do zero and one. There are different ways to look at it. So even though we do true, we are still able to add that in. And if we look inside our Christmas products table you can see that they'll both say true even though the original one we had inserted was with a yes. The last thing we're going to look at is cascade. And cascade just means you are able to drop everything that is dependent on the table. So if I'm dropping a table but there is a query or a function somewhere that's referencing it it will also drop that so that it doesn't create errors in the future. And we're just going to do a drop table. We're going to drop the Christmas products table and we just write cascade to make sure anything dependent on it will drop, which since we just built it there actually aren't that many dependencies. Cool. Now let's try to run this again, and the table doesn't exist and that's the end of our quick demonstration. No one's checked, there are a lot of other cool little tricks you can learn. You can check out the documentation on their website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (8), [[PostgreSQL|Postgres]] (4), [[Fetch]] (3), [[SQL]] (2), [[Databases]] (1)
> **Env Vars:** sql (2), xyz (1)
> **Analogies:** similar to (2), it's like (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Inheritance and data types](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=0)** - [Instructor] [[PostgreSQL|Postgres]] is known for being very feature-rich and we don't have the time to go over many of the things that makes Postgres so advanced. So, right now we're going to take a look at two quick examples of these features: Inheritance and Advanced Phenotypes. The first is Inheritance. This works the same way it does in any programming language, where you have a parent object and children objects. We can inherit the parent table to create a child table. It's useful if you are creating many similar tables but don't want to write out the same attributes multiple times. And, we're going to do a quick example of this right now by creating a dessert table that inherits the [[Microsoft Products|products]] table, and the product is food, by the way. So, let's do create table desserts. And, we're going to add an extra column here to check the dessert is chocolate. And, it's going to inherit the products table. So, what that means is that when we look at the table, it'll have all the same columns that the products table has. Awesome, So it just created. So, let's check on the desserts table
>
> **[1:18](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=78)** And then, you can see there's a note that's is, check on the desserts table, cool. So, this is all the same categories we have from our products table. You can see up here, we didn't specifically list out every single column and if we scroll to end you can see we have chocolate at the end, which is what we did list out. Now, we're going to take a look at [[JSON]] objects and I picked this one just cause we kind of go over this a lot in the Mongo sections. So I figured it'd be helpful to see now. So, there's a command you can do in Postgres called json_build_object, and what this does is you can pick from a table and you can put the columns into a JSON object through this. So, we're going to use the products table again and so where we have the product ID, we want to insert as our first value, and we're just going to call that value ID again from product name. So, that's the name and this is where we're pulling the value. We're going to do the product name, and we want to call something category that pulls from the product category from products. So, we take a look at this, we can see we have the product IDs, product name, the product categories, just like we specify. And, this is everything inside the products table that we have here. Now, how is this useful on its own? Now, we're going to put the JSON object into a table, and we're going to create
>
> **[2:53](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=173)** a table, similar like we did up with the inheritance, and we're just going to call it product_json. And, we're just going to have one value called product_names and it's going to be a json. So we created our table. Now, we're going to insert into the product table. Move that up a bit. And, we're going to do select json_build_object, which is similar to what we did up there. The key thing is to write the insert into. Do that in the comments then after that, here. And, we'll just take this exact same.
>
> **[3:44](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=224)** We forgot to specify that table. That's important. All right, great. There we go. Now, we do select * from product_json. So, where it's selecting from the table and it's the exact same thing as if we had ran that query by itself, like we did in the beginning. So, here we go. So, that's it for this section. We saw how we can create a JSON, put in a table, as well as create tables using inheritance. Now, in our next video, we'll be looking at not tables but creating an example of a function within Postgres.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (7), [[JSON]] (5), [[PostgreSQL|Postgres]] (4)
> **Code Identifiers:** json_build_object (2), product_json (2), product_names (1)
> **Env Vars:** json (4)
> **Analogies:** just like (1), similar to (1)
> **CLI Commands:** mongo (1)
> **Cross-References:** next video (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Features](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=0)** - [Instructor] In this video we're going to look at creating a function within [[PostgreSQL|Postgres]]. Postgres offers the ability to write stored procedures in different programming languages. While all [[Databases]] covered can distort procedures with their own specific languages, Postgres offers the most such as pgSQL, TCL, Perl and [[Python (Programming Language)|Python]], and more that is not within its main distribution. This offers a lot of flexibility for developers who are more comfortable in a certain programming language and/or companies who want to use the same language everywhere to write procedures for Postgres. So, because we are predominantly using [[SQL]] here we are going to use SQL to create our function. So, we're going to create a really simple function and it's just going to add two numbers. First thing we want to do is write create function and we're going to set our parameters. So the functions name is add and we want it to take to an integer and we want it to return an integer. And this is the query that's going to do it. It's going to select the first parameter and it's going to add that to the second parameter. We're going to specify the language. So the language is SQL, it's immutable and it will return something. Cool, super simple, it's only four lines. Let's run this, great,
>
> **[1:35](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=95)** our function ran and now we are going to test it and our functions called add so we write add, we see it's highlight orange, it recognizes it, and let's do one and four and let's see if it returns anything. And the important thing with SQL is you always need to select to run any kind of program. And we can see our output is five. Let's see we can do that with some more complicated numbers. Let's do negative 3. and let's do five.
>
> **[2:30](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=150)** Okay, so because we did specify it's an integer we can't do numeric types and that's something to note that there are a lot of specific data types that you need to do. So this can't run. We can change it here, if we want, to numeric and then we can do more complex numbers, not integers. Well, we'll leave it as is for now and we're going to do just a negative three, then, and five and see if that will still run. And we can see, accepted and our answer is two. So, there are a lot of ways you can take a function. You can insert dates to run a list of queries, you can put it in strings. For example, if you had a user ID you can run a user ID through a bunch of checks. There are a lot ways you can take this and really get creative with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (4), [[SQL]] (4), [[Databases]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** sql (4), tcl (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** python (1)
> **Code Identifiers:** pgsql (1)
> **UI Navigation:** select the (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 2. MySQL

[↑ Back to Table of Contents](#table-of-contents)

#### [MySQL explore](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-explore?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-explore?u=76281980&t=0)** - [Narrator] [[MySQL]] is a well know open source relational database. Built by Oracle, it's an open source product know for being a top choice for web applications since it is a standard in the LAMP stack. The LAMP stack is a term used for a set of open source software used for websites and other web applications. It includes [[Linux]], Apache, MySQL, and [[PHP]]. MySQL is know for being reliable and having fast performance speeds compared to other [[Databases]]. And of course, it's free. Unlike Mongo, which is a non-relational database, and [[PostgreSQL|Postgres]], which is an object relational database. MySQL is purely a relational database with it's sole advantages and disadvantages. The key differentiator is that the object relational database stores data and objects. Whereas relational database stores data and entities. Or tables. Because [[Relational Databases]] are designed to be more simple and naturally does not have as many features as Postgres. Some features that Postgres has, MySQL doesn't support. Such as table inheritance and more advanced data types. We'll see some examples of this now by trying to run these commands that we've seen work in the Postgres section but won't work now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (5), [[PostgreSQL|Postgres]] (4), [[Linux]] (1), [[PHP]] (1), [[Databases]] (1)
> **CLI Commands:** mysql (5), apache (1), php (1), mongo (1)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** lamp (2), php (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Dialect nuances in MySQL](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=0)** - [Amata] Now, we're going to review some fundamentals of using [[SQL]]. We're going to look at CRUD statements which is create, read, update, and delete. We are doing this in [[MySQL]] even though this is something you can do in every database. Once again, MySQL was built for simplicity and speed unless you are planning to do advanced query work in your database, the loss functionality may not even be that relevant. After we go over the CRUD statements, we will also go over two things that MySQL does that not all data warehouses cannot do, so [[PostgreSQL|Postgres]] can not do this thing. We're going to look at the if null statement and look at case sensitive. So now we're going to start by reviewing CRUD, which is create, read, update, delete. And again, this is a pretty basic concept in computer science. So first we're going to look at create and in order to create a SQL in MySQL, we do an insert. So we have a customer's table and we're going to put in the values. We're going to put in a customer ID, customer first name, we'll put it in my name, customer last name, email,
>
> **[1:29](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=89)** a phone number, an address,
>
> **[1:43](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=103)** a city, a state and a zip code.
>
> **[1:59](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=119)** Cool, and we have inserted. Now, we're going to do the read statement and reading in SQL is really what select is. I've briefly mentioned that in other videos, but to read from the database, we'll just do a read select in customers. And we'll see we have a list of customers and here's the customer we had put in earlier. Now, we're going to update this value, so we can do update customers. That's the name of our table and I'm going to set the first name. So let's reverse my name.
>
> **[2:53](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=173)** And we're finding where my name is by matching on the customer ID here. So we run that and then we check our table again, go to ID 79, we can see that the first name is now Lee
>
> **[3:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=197)** and the last name is Amata. And then we're going to remove this fake entry with our delete statement, which we can just say delete from customers where the ID is 79. Oh, we need to rerun this. Now, you can see that the ID is gone. So those are some really simple database functions that you can do. Now, to get more specific about MySQL. We can look at case sensitivity and this really differs per language, whether it is a declarative language like SQL or programming language, they all have different rules around this. So the thing is, MySQL is not case sensitive. So what does that mean? If you're writing something, let's say we're going to use the product table from our other videos and we're going to filter where the category is desserts.
>
> **[4:31](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=271)** We'll do a select star and I need to learn how to spell. So we take a look at this output, this is all the desserts that are in this table and this is the category we're filtering on. If we were to rewrite this and let's say, we lowercase this and we uppercase this part, we get the exact same results because it's not checking for case. So this can or cannot be a problem depending on what you're doing with your database. If it's important something is case sensitive, that's probably something you don't want to do in MySQL or you need to give it a different name. You don't want to be having one thing that's capitalized and something that's not capitalized and you end up pulling the wrong data. Another thing that MySQL does that not all of the different [[Databases]] do is if null statements. So what is an if null statement? We can do a really quick example here. So let's say in the customer's table if the first name is null, we want to put an error instead of null. Let's run that. So we have a list of first names and here these tables were previously null, now we see an error sign.
>
> **[6:05](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=365)** So this is a really simple way to write this query, it's three lines. You can also do this with a case one statement and that's how most databases will do it, so we can get the same results if we do select case when first name is null then we'll give it error, else we want the actual first name
>
> **[6:33](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=393)** and we'll call the column first name. And we get the same results, we have the three errors here and we have the [[Representational State Transfer (REST)|rest]] of the first names. So again, this is really just to highlight that there are differences when you're using a SQL dialect to another dialect. And the next section, when we're looking at Mongo, we won't even be looking at SQL at all. So stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (8), [[SQL]] (6), [[Databases]] (2), [[PostgreSQL|Postgres]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** mysql (8), mongo (1)
> **Env Vars:** sql (6), crud (3)
> **Definitions:** is a  (3), is an  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [amata] (1)

#### [MySQL Workbench](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=0)** - [Instructor] While [[PostgreSQL|Postgres]] has pgAdmin as its own GUI tool, created by the pgAdmin development team, [[MySQL]] has the MySQL Workbench. The MySQL Workbench like the MySQL database was developed by Oracle. It is generally considered to be a much easier to use GUI tool than pgAdmin. Both pgAdmin and MySQL only support their respective [[SQL]] dialects. Unlike other tools we'll see you later on in this course, MySQL and Postgres don't support their own BI tools or [[Business Intelligence (BI)|business intelligence]] tools. Newer data platforms have since realized the need for data visualization and try to accommodate more reporting needs. However, since MySQL and Postgres have been around for a very long time, relatively speaking, in the database world, it really doesn't matter that they don't have their own data visualization tools. There are many universal database managers such as DataGrip, Dbeaver, and JetBrains, that allow you to connect to multiple [[Databases]] at once. In fact, most of the query writing we've seen done in this course was done in DataGrip. Additionally, most popular, if not all BI tools support MySQL and Postgres in addition to many more databases. The create read, update and delete statements we reviewed in the last section we'll go over again here so you can see how you can use MySQL to make these changes without needing to write out the queries. MySQL has visual modules for SQL development, [[Data Modeling]] and server administration.
>
> **[1:36](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=96)** However, we're only going to take a look at the SQL development part. So this is a MySQL Workbench. We're already connected to the same instance that we used in the last video. The workbench was actually pretty easy for me to download and open. And we're doing this on a Mac operating system. It'll look a little different in [[Linux]] and other OS. The local instance which I created for dummy data is right over here. You can see, I had put it in the customer schema earlier. Let me move this up so you can see all the tables. So now we're going to take a look at the customers table and the way we can do that without having to write anything is we can just click on it and select all the rows. And we have our result grid here and we have all the information datas in our customer table. Awesome. So now we want to create a new row and the way we can do that here is we can do in a couple of ways, the easiest way is to just click this button and you can just put in some data. So we'll put in a fake ID, we'll put it in my name,
>
> **[2:59](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=179)** can give it a fake number. We'll use the same fake number, I will put home (indistinct) address and we'll put New York. Cool. And if you want to write this directly into the database, you can just click apply. And this is the query we would have written if we had actually written out the SQL for it but we can just click Apply and it's executed successfully and we can even check the logs, and great. So we were to rerun this query. We can see that we had added a new row here. Cool, now we're going to do the read statement which we kind of already did, but we can, again just do this to read from the table. We can do this to the other tables as well and then we can edit to filter. So we want to just look at delivered. We can do that, instead of writing where clauses we want to look at order 101, they'll automatically filter for you. Cool, now we're going to update the row that we had put in previously. So what we're going to do is we're going to do the same example I've done in an earlier video.
>
> **[4:30](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=270)** We're just going to switch the names and we can Apply and you'll see it did the update and set statement and the where statement for us. We can click Apply. It's executed, Close. Can rerun this query to make sure. Just find our name and there it is. And now we can do our delete statement which we just need to click on this and click the remove row, click apply. And if you don't want someone to be able to write to the database, if you were to give this to someone like less technical, you can also limit writing access to the database. So you can have someone only be able to read. So again, this is pretty intuitive and doesn't require writing SQL. So if you're not as comfortable with MySQL or just SQL in general, this is a great GUI tool to have. You can do most of the basic database functions you would need in here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (12), [[SQL]] (6), [[PostgreSQL|Postgres]] (4), [[Databases]] (2), [[Business Intelligence (BI)|Business intelligence]] (1)
> **CLI Commands:** mysql (12), make (2), find (1)
> **Env Vars:** sql (6), gui (3)
> **Code Identifiers:** pgadmin (4)
> **Cross-References:** in the last (2)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)


### 3. Mongo

[↑ Back to Table of Contents](#table-of-contents)

#### [Mongo explore](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=0)** - [Instructor] Mongo DB is a [[NoSQL]] database with its own query language. Again, this query language is not sequel. There are many other NoSQL [[Databases]] that we won't be covering such as [[Redis]], Cassandra, Amazon, DynamoDB, and much more. We are focused specifically on Mongo in this chapter because it is of the most widely used NoSQL databases. Having been around for a relatively long time, compared to others, Mongo is also known for having one of the most flexible data models. Within the category of NoSQL, there are different types of NoSQL databases, documented models, graph model, and key-value models. Instead of using tables and columns like relational [[Data Management]] systems, a document model uses a document storage model, usually [[JSON]], which stands for [[JavaScript]] object notation. The structure is similar to object oriented programming which some developers may prefer. [[MongoDB]] is a document model using BSON which is binary JSON, which makes it more flexible to use. However, you can think of it as a JSON database since anything in JSON can be natively stored and retrieved in Mongo. You can also think of documents as a superset of all data models because you can use that to later structured the data into the other models, explain next and more. The graph models uses data modes, edges, properties and other [[Data Structures]]. The advantage being it is easier to create relationships
>
> **[1:35](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=95)** between other parts of an application. And you can see here is the graph model. However many graph model databases require all the data to be on one machine which allows less flexibility. A key value model uses a key to update data. It is the simplest structure here thus making it easiest to scale. However, it may cause Cray complexity if you're trying to do complicated queries. Overall compared to [[Relational Databases]], the main advantage of using a NoSQL database, is that it is much easier to scale. NoSQL works better in distributed systems and it is easier to maintain given that all the data structures in relational databases such as tables and views that we went through in the [[PostgreSQL|Postgres]] section, we don't need to manage here. While [[PostgreSQL]] supports ACID transactions like we went over previously, most NoSQL databases don't support ACID by nature. However, Mongo has achieved multi document ACID transactions in 2018 when it released a version four. Mongo and other NoSQL databases can be thought of being built on the CAP theorem. The CAP theorem concept is primarily for distributed [[Database Systems]] and CAP stands for consistency, which means you are able to keep the same information in any of the nodes. Availability, anyone can quickly pull up the data or at least get a response from the system
>
> **[3:08](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=188)** even if the data is not they're outdated and partition tolerance, if there is a failure in one of the nodes, it will create a partition between nodes but the user should still be able to access the same data from another node. So CAP emphasizes data accessibility over [[Data Integrity]], data accessibility, focusing on how the data is stored and accessed instead of making sure the data is correct. When it's not necessarily better than the other but it is important to know what it's more important for your or your company's specific needs. If the purpose of your database is to just store a lot of data coming in before knowing what to do, data availability might be more important. If you're using the database to create a lot of business reports, data integrity might be your priority. In this theory, a distributed system can only have two of the three CAP attributes. Mongo has the consistency and the partition tolerance, you can see it here as one of the examples. And what that means is that it compromises on immediate availability so that the data is always accessible in other nodes even when there a system error. Mongo is well known for data consistency because it's a single master system. So for example, if you wrote to the database then try to read from it, it will assume that your write was successful and you can read the results of the write regardless of not that is true. Next we'll cover some of Mongo's dialects syntax, it's document system, and the Mongo compass GUI tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (9), [[Databases]] (6), [[JSON]] (4), [[Data Structures]] (2), [[Relational Databases]] (2)
> **Env Vars:** cap (5), json (4), acid (3), bson (1), gui (1)
> **CLI Commands:** mongo (10), node (1)
> **Definitions:** is a  (3), stands for (2)
> **Analogies:** such as (2), similar to (1), think of it as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Dialect nuances](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=0)** - [Instructor] As mentioned, [[MongoDB]] is a document oriented database. It does not use a [[SQL]] because there would be no actual data types tables to join on. Everything is stored in (indistinct) considered a semi-structured data type. This format is probably a pro to most developers who would prefer working in something that looks more like a programming language. MongoDB stores collections which in turn stores fields. We can see an example of this right now. So let's take a look at a collection. So we're not going to create a collection. Usually, I would want to go through credit statements which we will go through some of those in a bit. But if we were to create a collection, we would do DB for database, create collection and let's call it customers. We're going to look at our customer's table today. We're not going to run this because I actually created this earlier for the later examples. But if we want to see what's inside the collection, it kind of looks like a table especially in this format and a universal database manager. So we can select start essentially, by doing db.customers.find everything.
>
> **[1:21](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=81)** And we can see here, we have our customer's table. The, we have our fields and you can see it has the curly brackets. Those are the fields. And we're going to look at the key pair of values that go inside a field in a bit. But this whole thing is a collection and every row is considered a document. So now, let's insert a new document into the customer's collection which you can think of as inserting a row.
>
> **[2:05](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=125)** The way we do that is we're going to be pulling our customer's collection again. And we'll be writing insert one. And you notice that it uses camel case here. So we're just going to insert one. We can also do insert many if we want, and you don't actually need to line up the fields here with the different documents inside. So it's unlike a table. If you're going to insert a new row that has to match the data type of each column inside a table. I can put the most random thing in here and it will still insert that document into the collection. So just for consistency sake, we are not going to do that. So let's give ourselves a random ID. Here we go. Name, Amata.
>
> **[3:07](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=187)** To show you what I mean, that you can have any kind of field in here, we're just going to stop here, just to also save time. So let's insert this row. Now, we're going to do our read statement which is also our select, which is also defined statement that you saw us do earlier. So yeah, you saw me do a select all basically, but we're going to specify, and we're just going to try to find the document we just created. So we can say, we're looking for first name is Amata and that's kind of like our where clause in Mongo. Cool. And you can see, this is the exact document we created. It was only half the columns that we actually need. Great. And now, let's do an update statement and here, we're going to do the update multiple documents at once. So we're looking inside our customer's collection. We're going to do update many and we're going to update where the city equals Philadelphia
>
> **[4:29](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=269)** And we move at, and we need to add another field here and we're going to write the command set. It's basically saying everywhere where we see the city is Philadelphia, let's set it to, the city to Miami. So we ran that successfully. We can go check if we were able to do that.
>
> **[5:04](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=304)** So we look inside our collection. We can see all the cities are Miami except for the fake one we made. Cause we didn't really put a city. And I just want to show here, do we have addresses? And we don't here because we had just kept going. Oh, and another thing to know about Mongo is you always need a unique ID per document. And we actually didn't create a unique ID. It has to be with an underscore and Mongo. We created an ID without an underscore so that was added as an extra field. So that's another niche of Mongo to look out for. And finally, let's delete something and we're just going to delete our little fake value with my name in it. So again, we're calling the customers collection and it's pretty simple. It's just remove and same filter that we used to do the fine statement earlier. We're going to remove where the first name, you have to be really careful how you pick the key value pair because it has to be exact. It's case sensitive. I believe I capitalized. Yeah. Cool. Let's run that. So we removed it. Let's go see if the model is still there and it's gone. So that's a really quick intro
>
> **[6:36](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=396)** on just how to navigate around MongoDB. In the next video, we're going to take a look, if you don't want to wing all this, there's actually a really handy tool called compass.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (3), [[SQL]] (1)
> **CLI Commands:** mongo (4), find (2)
> **Definitions:** is a  (2)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### [Mongo tools](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-tools-21053178?u=76281980)


### 4. Cloud-Based Databases

[↑ Back to Table of Contents](#table-of-contents)

#### [Snowflake](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowflake-21046906?u=76281980)

#### [Snowsight by Snowflake](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=0)** - [Instructor] So, this is [[Snowflake]]. We are inside our data platform right now. And we're actually on [[Google]] Chrome, as you can see. So, this is all done online. And here, we are in our database called "Restaurant Delivery." We just clicked into it. And we have all our tables. These are all the tables we've been using. It shows you when it's created. I am the system admin. You can see what rows, how large it is. You can leave comments here. One of the great things about Snowflake is that it's very easy to share [[Databases]] and queries across other Snowflake users. You can create a table. You can create a new table with the same [[Metadata]]. You can clone the table. You can load more data into it, drop, transfer ownership. And these are all simple, like crud updates you can do. And you can see, you can do that across all the different parts of the database. So we can do the same thing here with views. And these are the views that are in the information schema that just automatically shows you what you have going on in the other schemas. Here's a list of our schemas. All our tables are stored in the public schema. And I think what's really cool is we have a staging area here, so you can create a stage. And a staging area for data is a place where you can effectively process or clean your data before you store it in a data warehouse. And of course, Snowflake has its own staging area. You can use the other popular ones such as S3 buckets,
>
> **[1:37](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=97)** [[Microsoft Azure|Azure]], [[Google Cloud Platform (GCP)|Google Cloud platform]]. You can also clone staging areas, edit, drop, all the same things as before. In the file format, you can create a new file. You can actually, once you create a file format, you can upload data into here. So you can upload CSVs. You can see there are other different file formats it accepts. You can upload it into the public schema name. Oh, actually I think it'd be cool for you to see the [[SQL]]. So let's call it test. And you can see how exactly it's being done.
>
> **[2:23](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=143)** We have a sequence one. You can create a sequence inside. You can also create a data pipe, which I think is also really cool. So the data pipe pipes your data from the staging area into your data warehouse. And you can see your warehouses are up here. So, if you have continuous data coming in, you can have it cleaned and put into your data warehouse through a data pipe. Which we don't have one right now, because we don't need to do that. But there is a great explanation here for it as well. So I think it's very beginner and user-friendly on just setting up your own database here. This took me, like a minute to like make an account and upload the data. And what I was saying earlier, how it's really easy to share data here. You can share the databases. You can share schemas across different Snowflake users. This is also really cool, the data market. So this is the data marketplace. And if you don't have your own data, you can pick from here. They have different types of categories of data. You can play with it. You can use it to like explore the different offerings Snowflake has, and just get really interested in data analysis. Cool. So this is where we can set up a warehouse. I had created one just to show how easy it is to create one. It's suspended because we aren't actually using it. Can resume it.
>
> **[3:59](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=239)** Now it's running again. The worksheet part, this is similar to data grip which we've been using to run queries. And if we run this, it'll confirm. You can also do that if you want. You can run the queries here. You'll get the row items like before. We have all our information with the different tables. Nothing unusual here. You have a history log, so you can see me like playing around with it. But I think what's really cool is the newer UI. So we go here. This is the new UI. And we go to worksheets here. We enable worksheets. So this is from what we were doing earlier. We click into this and we run this. You can click query. It shows you a lot of information here where it give you like, you know, what information is in this particular column. It says, this is 100% filled. Meaning there are no null values in these. It shows you how long it takes to run. You can click on this chart button, which it will automatically create a chart from your data. We can play around with that. We can add address, city, and see how the data changes from that. And you can pin tables here. If you need to find a certain table to like quickly compare to your query.
>
> **[5:33](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=333)** Yeah, so I think this is pretty intuitive to use. It's pretty cool. The one thing I also really like is the share function. So you can actually share this worksheet with other people who you give access to. And you can just quickly grab a link. It's like sharing a document on [[Google Drive]]. And, you know, literally mail that to someone. We go back to the home. We can see that there is a shared with me. We can see what other people have shared with us. My worksheets, you can create folders to organize. You can create [[Dashboards]] so you can have multiple worksheets with multiple queries on it and the different charts. And you can turn it into a dashboard here. You can see all your data here. Again, this goes back to the marketplace. And this is admin control. So, I think overall, you can see how easy it is to just set up some data, play with some data, share it across different users. All without, honestly, needing to know that many technical skills. It's super fast. And I think, again like I said before, fairly intuitive, and I think, you know it's great that you can just do it all from a browser. I can be on my work laptop and pull this back up or on my personal laptop. And I think that's really one of the great things about this is there's not a lot of programs you need to set up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (6), [[Databases]] (2), [[Google]] (1), [[Metadata]] (1), [[Microsoft Azure|Azure]] (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (1), similar to (1), it's like (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** go to (1), click on (1)
> **Env Vars:** sql (1)
> **Cross-References:** go back to (1)

#### [Amazon Web Services](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=0)** - [Instructor] AWS, also known as [[Amazon Web Services (AWS)|Amazon Web Services]] has increased in popularity since its launch in 2006. An infrastructure platform that only exists in the cloud. That has a pay plan in which you pay as you go. Meaning you pay for the [[Data Storage]] inquiries you've used and doesn't include upfront fees or long contracts. While many other platforms have similar pay plans, AWS probably offers the most in terms of resources, making it highly scalable and elastic. AWS has many services including many data warehouse options and applications STEM make it flexible. Therefore, if you are considering moving your data to AWS you can likely use the same programming and [[SQL]] languages you already use. Being cloud-based allows you to quickly get set up with AWS and start the point on hundreds of servers. While AWS could probably cover a whole course, I'm only going to focus on two popular services, Redshift and S3. Claiming to be the fastest and most popular cloud database. Redshift got its name by implying it's a shift from Oracle, who is informally known as Big Red. Unlike the other Amazon's hosted database Amazon RDS, Redshift is designed to handle analytic workloads on petabytes of data. A level up from terabytes which is commonly used to talk about [[Big Data]]. You can create the data warehouse on nodes which they call clusters that are easily manageable online through the command line or programmatically. It's most important use case is where [[Business Analytics]] such as fast query performance on your BI tools and operational analytics
>
> **[1:35](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=95)** where you can see how your other data warehouses and applications are performing. Amazon S3 stands for Amazon Simple Storage Service and it's really just a place for a developer to store and protect the data. Known for its durability, it's easily accessible online and has many access controls for connecting the data to other data platforms. It allows you to collect, store and analyze data from anywhere. Now we'll take a look at how we uploaded our data to Redshift and its capabilities on AWS by creating our first cluster together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon Web Services (AWS)|Amazon web services]] (1), [[Data Storage]] (1), [[SQL]] (1), [[Big Data]] (1), [[Business Analytics]] (1)
> **Env Vars:** aws (7), stem (1), sql (1), rds (1)
> **CLI Commands:** aws (7), make (1)
> **Definitions:** known as (2), stands for (1)
> **Tools:** command line (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Amazon Redshift and S3](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=0)** - [Instructor] So what we see here is this is Amazon Redshift. We can see this is all in the web browser. And to create a cluster, we're just going to click this, create cluster. You should give it a better name than me. We're going to use it in a free trial. This is all set up. You can put anything you want here. I'm going to use a user name password that I use often. Permissions, this is super important. In order to be able to connect Redshift to our data in S3 we need to allow Redshift access for S3. And this is a role that I created earlier. So we're going to add this role. Nice. This is all good. And boom, we created our cluster that quickly. So while this is happening, it only takes less than a minute to do. And sometimes you need to refresh this page to see it. But while this is happening, we're going to take a quick look at the S3 console. So this is the S3 page. And here you can see the different buckets. And I have one called [[LinkedIn]] restaurant delivery which is just the data I have from LinkedIn and in it, the different objects are the CSV files that I have gotten to upload the data, and that's the data you've been seeing throughout this course. So it's pretty easy here to upload data. You can click the upload button, you can just drag in a file, you can add a folder and immediately go into this bucket.
>
> **[1:41](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=101)** So because the cluster we just created is taking a while to create, we're just going to use this one that I had created earlier. And we can click into this. We can see it was created same day, the end point. If you want to connect it inside a different ID, you can. It has like career information here, but we haven't done anything yet 'cause this is brand new. We'll go to the query editor. We're going to go here. And we can see there are no tables here 'cause we haven't created any. So now we're going to create our table. And I had just copied this earlier. This is just the table that we've been using a lot, the customer's table. So we'll run that. And we can see the time it takes. I will say this does move slower than the other [[Databases]] we have been using but that's okay. Cool, we have our customer's table. And now to, so we're going to add data from S3.
>
> **[2:47](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=167)** So we see from before we had our S3 data here and we're able to access this through the permissions we have. So this is the role I created and it allows Redshift clusters to call AW Services which is the S3 in our case. So we're going to copy into this table from
>
> **[3:11](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=191)** and we're going to grab the name of our customer's file here. So this is our customer's file. We click on that. We have our S3 URL and the permissions are set so that only anyone within this account can use it. We're going to put that in. And you need to give the permissions, like I said, AWS is pretty secure. So we need to look at the specific role. This role that I created that does allow us to edit in Redshift. So we're going to copy this role. I'm going to put that in here. And we're looking at a delimiter because it is a CSV, a comma separated value file of comma. And we're going to add in all our data from there. I'm just going to run that. It does take some time because it is going to another place to grab the data. While there's no execution play here but it does provide an easy explain value. No visualizations 'cause all we did was populate data. Alright, if we want to see this now, so let's check in our data. (keyboard clicking) The [[SQL]] is pretty standard here. So we can just do that. And we do need a scheme of qualify here.
>
> **[4:48](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=288)** So I need to highlight this because we're doing everything in one console and we shouldn't be doing that. Cool, and there you have it, we have all the data copied over from our S3 bucket. And we can try to visualize this data but there's nothing to visualize because it's just a customer's list. We can see our history here of what we had ran. You can schedule this query. So we don't actually have a role because I didn't plan on doing that but you can create one, you can schedule it on a Cron job or as another format.
>
> **[5:38](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=338)** And yeah, that's how we're able to access Redshift. And here you can check out your cluster analysis, the node that we created earlier, it's now available. You can see the different queries we used if you save a query in here. So we can save this to use again later.
>
> **[6:04](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=364)** I can give it a name, uploading customers. And this is just everything that we have in here. And then we can say, uploading data from S3 and we can save that. Yeah, and that's one way we can manipulate things around Redshift. You can do a lot more in the editor here. We can check the number of events that has happened. It does take a snapshot of the database at a certain time, I think right now I have it doing it once an hour. And yeah, you can have alarm set, if anything looks weird, you can use CloudWatch for that. So yeah, overall like a really nice console to have and to use online. And what this does is even though we only looked at Redshift, you can use S3 to connect to any of the other databases here and you can really play around and see what you can do with the analytics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Databases]] (2), [[SQL]] (1)
> **Env Vars:** csv (2), url (1), aws (1), sql (1)
> **CLI Commands:** aws (1), node (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keyboard clicking) (1)

#### [Google Cloud Platform](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/google-cloud-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/google-cloud-platform?u=76281980&t=0)** - [Instructor] [[Google Cloud Platform (GCP)|Google Cloud Platform]], or GCP, is similar to [[Amazon Web Services (AWS)|Amazon Web Services]] in that it's a dominant suite of [[Cloud Computing]] services with over 100 [[Microsoft Products|products]]. The third major player, [[Microsoft Azure]], we won't be covering in this course, although it was referenced a few times. GCP is the youngest out of these three and considered pricier, but obviously with the [[Google]] brand name and reputation for modern innovation, it's still a strong competitor compared to the other two. We'll be looking specifically at Google BigQuery which uses ANSI [[SQL]]. If you recall from the first video, ANSI stands for the American National Standards Institute, which sets the SQL standard. They also have Cloud SQL, which provides services from [[MySQL]], [[PostgreSQL|Postgres]], and other [[Relational Databases]] we have gone over. BigQuery argues that it ultimately has a lower three-year total cost of ownership compared to the other platforms mentioned, AWS and [[Snowflake]]. Its key features include BigQuery Machine Learning, BigQuery [[Geographic Information Systems (GIS)|Geographic Information Systems]], BigQuery [[Business Intelligence (BI)|Business Intelligence]] Engine, and Connected Sheets. All these features help connect BigQuery to other platforms and analytic tools to maximize its offerings. One of the analytics tools we'll see is Data Studio, which we can easily analyze data from BigQuery and Google Sheets. So, those who are unfamiliar with SQL can still benefit from this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Google]] (3), [[Google Cloud Platform (GCP)|Google cloud platform]] (1), [[Amazon Web Services (AWS)|Amazon web services]] (1), [[Cloud Computing]] (1)
> **Env Vars:** sql (4), gcp (2), ansi (2), aws (1)
> **CLI Commands:** mysql (1), aws (1)
> **Definitions:** stands for (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Microsoft Azure](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/microsoft-azure?u=76281980)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Recap](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/recap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/recap?u=76281980&t=0)** - [Instructor] This concludes our course on choosing a data platform. We've talked about some of the factors that go into selecting one, such as price, usability, storage, and [[Database Design]]. We've talked about what it would take to actually use the database, specifically what its [[SQL]] dialect would entail and the different features that are included. And finally, we looked at some examples of different [[Databases]], some which have been standard for a while, such as [[PostgreSQL|Postgres]] and Mongo, and some which are newer, such as [[Snowflake]]. There is no one database as the best option. It really depends on what is important to you as a developer. Is [[IT Accessibility]], query performance, [[Data Integrity]], certain [[Data Storage]]? As a developer, a data platform is likely not the top priority. But this course aims to prove that even developers need to take their data platform into serious consideration. Data is the future and something every company out there is striving for more of. We need to make sure we are storing it in a place where it is optimized for utilizing it. We covered a breadth of topics surrounding data platforms, but there's still so much more out there to look at. There are hundreds of database options and so much SQL functionality that we haven't touched yet. I hope this will help you get started on your own journey of discovering data platforms and all the potential out there. Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Database Design]] (1), [[Databases]] (1), [[PostgreSQL|Postgres]] (1), [[Snowflake]] (1)
> **Analogies:** such as (3)
> **CLI Commands:** mongo (1), make (1)
> **Env Vars:** sql (2)
> **Cross-References:** we covered (1)
> **Speakers:** - [instructor] (1)


## Resources

- Exercise files available

## Skills Covered

- MongoDB
- PostgreSQL
- MySQL

## Path Context

### In [[Explore a Career in SQL Development]]
**1 of 8** | [[SQL Essential Training]] →

## Appears In

- [[Explore a Career in SQL Development]]

## Related Courses

_Courses sharing skills:_

- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — MongoDB
- [[MongoDB Essential Training]] — MongoDB
- [[Learning MongoDB]] — MongoDB
- [[PHP with MySQL Essential Training- 2 Build a CMS]] — MySQL
- [[PHP with MySQL Essential Training- 1 The Basics]] — MySQL

---

[↑ Back to top](#)