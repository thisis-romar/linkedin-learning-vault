---
type: course
slug: sql-for-data-analysis-22645200
url: "https://www.linkedin.com/learning/sql-for-data-analysis-22645200"
duration_minutes: 70
duration: 1h 10m
level: Intermediate
updated: 7/17/2023
learners: 33486
skills:
  - Data Analysis
  - SQL
exercise_files: true
github: "https://github.com/LinkedInLearning/sql-for-data-analysis-3271025/codespaces"
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/data-analysis
  - skill/sql
status: not-started
created: 2026-04-17
---

# SQL for Data Analysis

> If you’re looking to use Structured Query Language in your application development but your story is more prequel than SQL, you need to build a solid foundational knowledge of SQL analysis. In this course, instructor Nikiya Simpson starts with a quick review of SQL basics, then focuses on fundamental SQL queries used in beginning data analysis. Nikiya explains the importance of asking the right qu

> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200) | 1h 10m | Intermediate | 33K learners

## Instructor

- [[Nikiya Simpson]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/sql-for-data-analysis-3271025/codespaces)

## Skills Covered

- Data Analysis
- SQL

## Table of Contents

### Introduction

#### Using SQL for data analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-sql-for-data-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-sql-for-data-analysis?u=76281980&t=0)** - SQL is the most widely used language for managing data from a relational database.
>
> **[0:05](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-sql-for-data-analysis?u=76281980&t=5)** It's also essential in organizing and accessing data to get insights into your business.
>
> **[0:11](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-sql-for-data-analysis?u=76281980&t=11)** I'm Nikiya Simpson.
>
> **[0:12](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-sql-for-data-analysis?u=76281980&t=12)** I'm a full stack engineer and consultant.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-sql-for-data-analysis?u=76281980&t=15)** And this LinkedIn Learning course, we'll focus on building fundamentals to get you started with data analysis.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-sql-for-data-analysis?u=76281980&t=21)** We'll cover SQL skills like using various data types like dates and strings, utilizing keywords and clauses and a few easy SQL functions like count and averages, so you can get started on analysis right away.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3)
> **Speakers:** - sql (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we begin, let's discuss some skills you may need to know first.
>
> **[0:05](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-you-should-know?u=76281980&t=5)** This is an introductory course for relational databases.
>
> **[0:07](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-you-should-know?u=76281980&t=7)** However, you may be more comfortable with this course if you have some previous experience working with data.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-you-should-know?u=76281980&t=13)** For example, if you have experience working with Excel, that can be helpful for understanding the concepts in this course.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-you-should-know?u=76281980&t=21)** During this course, we'll use Visual Studio Code and GitHub Codespaces to practice writing queries that will demonstrate the concepts in each section.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-you-should-know?u=76281980&t=30)** The tools and database needed for the course will populate for you in the Codespace environment.
>
> **[0:35](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-you-should-know?u=76281980&t=35)** We'll also use the MariaDB version of MySQL as the database management system for this course.
>
> **[0:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-you-should-know?u=76281980&t=41)** You won't need to be specifically familiar with MariaDB.
>
> **[0:45](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-you-should-know?u=76281980&t=45)** There will be some commands used that will be specific to this database management system, but mostly the queries used in this course can be performed in any relational database management system.
>
> **[0:56](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-you-should-know?u=76281980&t=56)** Before starting the practice materials in this course, I'm going to hand it over to Ray Villalobos to discuss how to use Codespaces.
>
> **[1:04](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-you-should-know?u=76281980&t=64)** Then, I'll be back for more on this course.

> [!info]- Semantic Content
>
> **Tools:** visual studio (1), github (1)
> **CLI Commands:** mysql (1)
> **Code Keywords:** let (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Setting up Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=0)** - [Ravi] This is Ravi De Lobos, senior staff instructor at LinkedIn Learning, and I'm going to show you how to work with LinkedIn Learning courses using GitHub Codespaces.
>
> **[0:09](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=9)** Codespaces is a code editor in the cloud with the full power of Visual Studio Code.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=15)** It allows for real-world hands-on practice that mirrors software development in the workplace.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=21)** This course was created using GitHub Codespaces.
>
> **[0:23](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=23)** Using Codespaces, you have everything you need to get going without needing complex installations or build tools.
>
> **[0:31](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=31)** One click and you're ready to go.
>
> **[0:34](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=34)** First, make sure you've signed up for a free GitHub account and that you've logged in.
>
> **[0:38](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=38)** You just see your profile icon right here.
>
> **[0:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=41)** When you go to the repository for one of our courses, look for the Code button.
>
> **[0:49](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=49)** Click on Create codespace.
>
> **[0:51](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=51)** The first time you open up a codespace, it might take a few minutes to create the virtual machine.
>
> **[0:57](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=57)** Once it's done, you'll enter the code editor environment.
>
> **[1:01](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=61)** If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers.
>
> **[1:08](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=68)** The cloud editor's menu lives in a hamburger icon inside the activity bar.
>
> **[1:13](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=73)** The menu will let you see the keyboard shortcuts for your operating system.
>
> **[1:17](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=77)** Let's find the shortcut for the command palette.
>
> **[1:20](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=80)** Look in the hamburger menu under View, and then look for the keyboard shortcut for your operating system.
>
> **[1:28](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=88)** The activity bar has the most common tools you'll need to work with projects.
>
> **[1:32](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=92)** You can, for example, show or hide the Explorer, do a search and replace for content, manage features of the repository, and much more.
>
> **[1:45](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=105)** By the way, if for any reason, you lose the activity bar, you can get it back using the command palette.
>
> **[1:55](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=115)** Your course can have one or more extensions pre-installed based on the course you're taking.
>
> **[2:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=120)** Those can be found in the Extensions panel.
>
> **[2:06](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=126)** Because this is a browser, it's easy to inadvertently close the browser window and lose the editor.
>
> **[2:12](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=132)** If you do that, don't panic.
>
> **[2:14](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=134)** Codespaces saves everything you're doing on a virtual machine.
>
> **[2:18](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=138)** You can always get the codespace back for this repo by going to the Code menu and finding your codespace right here.
>
> **[2:31](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=151)** Notice that it even remembered that I had opened the Extensions panel.
>
> **[2:39](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=159)** The sample course I'm looking at is what is known as a flat branch repository.
>
> **[2:44](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=164)** You can tell because there is a single branch when you click on the branch icon on the status bar.
>
> **[2:49](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=169)** You can also tell because there are different folders for each of the videos in the course.
>
> **[2:55](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=175)** Your instructor will let you know what the folder structure is for your course.
>
> **[3:01](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=181)** Forking let's you create your own copy of the repository on your account so that you can keep any changes that you've made even if you've deleted the codespace.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=190)** To create your own fork, you can click on the Fork button on the repository.
>
> **[3:17](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=197)** I'm going to hit Create fork.
>
> **[3:21](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=201)** Now, I have my own copy of this repository.
>
> **[3:24](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=204)** And if I want to, I can start a new codespace on that fork.
>
> **[3:33](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=213)** This fork version is almost exactly like the original repository, but it will let you push your own changes.
>
> **[3:40](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=220)** Notice that the URL of the repository is slightly different.
>
> **[3:44](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=224)** Let's go ahead and make a simple change to this file right here.
>
> **[3:54](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=234)** I'm going to save it.
>
> **[3:57](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=237)** You'll note that there is an M right here as well as an asterisk on this branch.
>
> **[4:03](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=243)** In the Source Control panel, you can also see a 1 for the change that we just made.
>
> **[4:08](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=248)** Let's go ahead and try to commit this change.
>
> **[4:14](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=254)** I'm going to hit the Commit button and I'll ask it to go ahead and state the changes.
>
> **[4:22](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=262)** And then I'm going to hit this button here to commit this onto my own version of the repo.
>
> **[4:30](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=270)** I'll hit OK.
>
> **[4:32](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=272)** You can also let it go ahead and run git fetch.
>
> **[4:35](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=275)** That way, it'll automatically sync with your forked repo.
>
> **[4:39](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=279)** Now, that change will be stored in your own version of this repository.
>
> **[4:44](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=284)** Don't worry, if you forget to fork a repo and then try to push changes, Codespaces will also ask you if you want to create a fork automatically.
>
> **[4:53](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=293)** Look for additional course specific tips from the instructor.
>
> **[4:56](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/setting-up-codespaces?u=76281980&t=296)** Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9)
> **Tools:** github (4), visual studio (2)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (2), find (1), git (1)
> **UI Navigation:** click on (2), go to (1)
> **Env Vars:** url (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)

#### Getting started with a database in Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-a-database-in-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-a-database-in-codespaces?u=76281980&t=0)** - [Instructor] Now that we know how to use Codespaces, let's get you familiar with how to access the database we'll use in this course.
>
> **[0:08](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-a-database-in-codespaces?u=76281980&t=8)** Start by opening your Codespace from GitHub.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-a-database-in-codespaces?u=76281980&t=13)** Go to Code, we'll go to Codespaces, and click on Create a new codespace on main.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-a-database-in-codespaces?u=76281980&t=21)** After loading the repository in the Codespace, you'll notice lots of options here on the left hand side of your browser.
>
> **[0:27](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-a-database-in-codespaces?u=76281980&t=27)** Let's click on SQL Tools.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-a-database-in-codespaces?u=76281980&t=30)** Under Connections, you should see H+ Sport and this is the database we'll use within this course.
>
> **[0:35](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-a-database-in-codespaces?u=76281980&t=35)** You can click on arrows or carets next to H+ Sport to explore the database tables.
>
> **[0:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-a-database-in-codespaces?u=76281980&t=41)** We'll get into more about how to use this extension as we go along with the course, but feel free to pause the video and look around.
>
> **[0:49](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-a-database-in-codespaces?u=76281980&t=49)** Now that we have our database ready, let's get started with learning more about SQL for data analysis.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), go to (2)
> **Code Keywords:** let (3)
> **Env Vars:** sql (2)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)


### 1. SQL Introduction and Asking the Right Questions

#### A quick review of Structured Query Language (SQL)
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=0)** - In this course, we'll focus on building fundamentals to get you started with using a database for a project.
>
> **[0:06](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=6)** But, what is a database anyways?
>
> **[0:10](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=10)** Well, a database is simply a collection of data arranged for retrieval of the data by a computer system.
>
> **[0:18](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=18)** Let's say you're a business owner and you're selling a product.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=21)** Most likely, you want to keep track of the amount of orders you receive.
>
> **[0:26](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=26)** You may also want to know the dates of these orders, so that you can see trends or know how many orders you get each quarter.
>
> **[0:33](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=33)** You should also keep track of your customers so that you can see what they like and what they don't like.
>
> **[0:40](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=40)** A database is often organized as a collection of tables.
>
> **[0:43](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=43)** A table is a two-dimensional grid consisting of rows and columns.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=48)** A row is also known as an instance or a record.
>
> **[0:52](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=52)** A row can be a student, a product, a customer, or an order.
>
> **[0:58](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=58)** The column is also known as a field or an attribute, as it describes something about the row.
>
> **[1:04](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=64)** In the case of a product, it could be the product's size, color, product name, or category.
>
> **[1:12](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=72)** The most widely used language for managing data from a relational database is known as SQL.
>
> **[1:18](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=78)** Structured Query Language, or SQL, or S-Q-L, is the primary language we use to manage and access structured data in a Relational Database Management System.
>
> **[1:30](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=90)** It's how we communicate with the database.
>
> **[1:33](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=93)** A Database Management System, or DBMS, is a software application that helps us store, load, and update data.
>
> **[1:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=101)** We can also use the DBMS to retrieve data or query directly.
>
> **[1:45](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=105)** In addition to the relational database model, there are different types of database models.
>
> **[1:52](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=112)** Some of the models include the entity-relationship, or ER model, and object-oriented relationship models that we'll discuss later in another section.
>
> **[2:03](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=123)** Time for a brief history review.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=127)** The SQL language was first developed in the 1970s by IBM researchers Raymond Boyce and Donald Chamberlain based on the relational model developed by Edgar F. Codd in 1970.
>
> **[2:19](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=139)** He wrote the paper, "A Relational Model of Data for Large Shared Data Banks," which provided a theoretical base for working with structured data.
>
> **[2:29](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=149)** This research led to the first Commercial Relational Database Management Systems, Oracle in 1979, SQL/DS in 1981, and DB2 in 1983.
>
> **[2:42](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=162)** As you can see, SQL is an old programming language, so why is it still relevant and why do I need to learn it?
>
> **[2:50](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=170)** There's an easy answer to this.
>
> **[2:52](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=172)** Many companies still use it.
>
> **[2:56](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=176)** According to the 2020 Insights from Stack Overflow, SQL is the third most commonly used programming language behind JavaScript and HTML and CSS.
>
> **[3:08](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=188)** Having a good database understanding is essential in today's job market.
>
> **[3:14](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=194)** And it's not standing still.
>
> **[3:17](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=197)** New concepts in database technology include processing big data.
>
> **[3:21](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=201)** Big data is a concept of collecting, organizing, and analyzing massive amounts of data from a variety of sources.
>
> **[3:31](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=211)** You may have heard of technologies, such as Hadoop MapReduce, NoSQL, and NewSQL.
>
> **[3:38](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=218)** Big data concepts involve analyzing and extracting information from enormous data sets that will require multiple servers and lots of compute power to process.
>
> **[3:49](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=229)** As application developers, we develop code that calls the Database Management System to perform operations or retrieve data from the database, and this course will help H+ Sport display their sales dashboards and give you essential SQL skills to put in your toolbox.
>
> **[4:06](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/a-quick-review-of-structured-query-language-sql?u=76281980&t=246)** Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7), dbms (2), ibm (1), db2 (1), html (1)
> **Definitions:** is a  (4), known as (3), is an  (1)
> **Code Keywords:** let (2), this. (1), require (1)
> **Cross-References:** later in (1)
> **Documentation:** stack overflow (1)
> **Analogies:** such as (1)
> **Speakers:** - in (1)

#### What is a relational database?
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=0)** - A relational database is a type of database that stores and provides access to data points that are related to one another.
>
> **[0:07](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=7)** In most instances, tables are organized by entities.
>
> **[0:11](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=11)** An entity is a single object, like a person, place, or thing.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=15)** This could be a customer, a store, an employee, or a product.
>
> **[0:20](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=20)** The key is that each entity is unique.
>
> **[0:23](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=23)** We infer relationships between the different entities to gain insights into our data.
>
> **[0:28](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=28)** Let's use a cake example. Who doesn't like cake?
>
> **[0:32](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=32)** Topsy Turvy Baking Company sells beautiful custom cakes that ship all across the United States.
>
> **[0:38](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=38)** They have many customers, and I'm one of them.
>
> **[0:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=41)** I want to order a birthday cake for my friend.
>
> **[0:44](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=44)** They ship me a cake, and it's so good.
>
> **[0:46](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=46)** I think I'll order another one for me too.
>
> **[0:49](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=49)** So I place a different order.
>
> **[0:51](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=51)** So we can see the relationship between customer and orders.
>
> **[0:56](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=56)** Each customer can make more than one order.
>
> **[0:59](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=59)** A cake can also have many different flavors.
>
> **[1:02](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=62)** The company can have one or more locations to pick up orders in person.
>
> **[1:07](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=67)** There are lots of different relationships between the entities, as we see here.
>
> **[1:11](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=71)** When we talk about relationships between entities, there are three main different types.
>
> **[1:17](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=77)** One-to-one, one-to-many, and many-to-many.
>
> **[1:22](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=82)** A one-to-one relationship may be a customer and the username they use to log into your website.
>
> **[1:28](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=88)** The customer name may be Mary Smith, and their username is Mary Smith without any spaces.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=95)** They both refer to the same person or entity.
>
> **[1:38](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=98)** Therefore, the relationship is one-to-one.
>
> **[1:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=101)** A one-to-many relationship is more like a relationship between a customer and an order.
>
> **[1:47](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=107)** One customer can have many orders.
>
> **[1:49](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=109)** So that relationship is one-to-many.
>
> **[1:51](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=111)** And a many-to-many relationship is like the relationship between salespersons and customers.
>
> **[1:57](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=117)** A salesperson can serve many customers.
>
> **[1:59](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=119)** And a customer can request orders for more than one salesperson.
>
> **[2:03](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=123)** Many-to-many relationships can be difficult to work with sometimes.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=127)** If each salesperson and customer can work with anyone, we can't really define that relationship.
>
> **[2:14](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=134)** So we usually use some type of entity in between to help clarify what that relationship is.
>
> **[2:20](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=140)** For example, if we want to define the relationship between a salesperson and a customer, we can look back at the order they placed.
>
> **[2:28](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=148)** This order clarifies that the salesperson worked with a specific customer, and vice versa.
>
> **[2:34](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=154)** The order is the intermediary between the two.
>
> **[2:37](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=157)** Clearly, we can see that things can get complicated really fast.
>
> **[2:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=161)** So how do we visualize these relationships?
>
> **[2:44](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=164)** Well, we use what's called an entity-relationship diagram, or ERD.
>
> **[2:50](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=170)** This is a graphical representation of entities and their relationships to each other.
>
> **[2:56](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=176)** It provides the guide to our data, and a quick view of what data is available to us.
>
> **[3:01](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=181)** To see an example, check out the GitHub repo for the ERD in the H+ Sport database.
>
> **[3:08](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=188)** Just so you know, some people call this entity-relationship model.
>
> **[3:12](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=192)** Both are fine, but I like the diagram better, so that's what we're using.
>
> **[3:16](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=196)** Each entity has a unique identifier called a primary key.
>
> **[3:20](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=200)** The primary key is used to identify that specific record.
>
> **[3:25](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=205)** It doesn't contain null values, and there has to be something there to identify the record.
>
> **[3:30](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=210)** It can also be a combination of more than one field, which is also known as a composite key.
>
> **[3:36](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=216)** Again, this has to be a unique identifier, so some composite keys might seem like the easiest option, but would actually cause some problems.
>
> **[3:48](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=228)** Let's say a developer is wanting to use first name and last name as the composite key.
>
> **[3:53](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=233)** This might seem simple, but it wouldn't work if you have two John Smiths.
>
> **[3:58](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=238)** However, a composite key with the last name and address may work, if there is only one customer per household.
>
> **[4:05](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=245)** Deciding on how you want to make your primary key is really up to how complicated you think your database is going to be.
>
> **[4:13](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=253)** It's not really about if it works now.
>
> **[4:16](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=256)** You have to look at the future, and how complicated you think your database is going to get.
>
> **[4:21](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=261)** Trust me, it's a real pain to change a primary key.
>
> **[4:25](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=265)** You don't want to do that.
>
> **[4:27](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=267)** Let's look at the ERD for H+ Sport.
>
> **[4:31](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=271)** Some examples of a primary key include the CustomerID, a ProductID, and the OrderID.
>
> **[4:39](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=279)** Each table can refer to another table using a key called a foreign key.
>
> **[4:45](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=285)** The foreign keys refer to the primary keys of another table.
>
> **[4:50](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=290)** Let's take a look at this example.
>
> **[4:52](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=292)** Customer 101 makes a purchase on January 1st.
>
> **[4:55](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=295)** It has an Order ID of #123.
>
> **[4:58](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=298)** The order table shows us the Customer ID of the customer who purchased the order, and the Salesperson ID of the person who sold the order.
>
> **[5:08](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=308)** We can join the order table to the order item table by Order ID, and see that the customer ordered Product ID A, along with the quantity that they ordered.
>
> **[5:19](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=319)** Then we can join the Product ID A to the product table to find out the product name, and other attributes as associated with the product.
>
> **[5:28](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=328)** From the order table, I can join the salesperson table by Salesperson ID.
>
> **[5:33](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=333)** Then get more information, like the name and address of the person who sold the order.
>
> **[5:39](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=339)** Each foreign key must have a matching primary key.
>
> **[5:43](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=343)** This is known as referential integrity.
>
> **[5:46](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=346)** It ensures the accuracy and consistency of data with your database.
>
> **[5:51](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=351)** It also maintains the relationship between the two tables.
>
> **[5:55](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/what-is-a-relational-database?u=76281980&t=355)** Database administrators and programmers work together by putting constraints in place to ensure the integrity of the data.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), known as (2)
> **Code Keywords:** let (4)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** erd (3)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Analogies:** for example (1)
> **Best Practices:** the key is (1)

#### Common SQL structures
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=0)** - Now let's take a look at how to ask the right questions to get the results you want using some common SQL syntax.
>
> **[0:07](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=7)** Let's start by opening up your code space environment and going to visual studio code.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=13)** Let's make sure we are connected to the H plus Sport database, and can view the tables in the explore window.
>
> **[0:23](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=23)** I see all five of the tables from the entity relationship diagram, customers, orders order item, product, and salesperson tables.
>
> **[0:34](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=34)** When developing a good SQL query, it's important to determine a detailed question that you want to ask of the data.
>
> **[0:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=41)** If not, you may end up with the wrong results.
>
> **[0:45](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=45)** This could be the difference between asking about the number of times a customer has been to your website, and the number of times a customer has ordered from your website.
>
> **[0:55](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=55)** Questions that can help you develop a more detailed query are, what tables do you need to access?
>
> **[1:03](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=63)** What are the fields of interest?
>
> **[1:05](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=65)** What data do we need to filter out, or is there a specific time period that we're looking for?
>
> **[1:11](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=71)** Do we need to order our data in a specific way to get the right results?
>
> **[1:15](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=75)** Let's start with the basic syntax for retrieving data.
>
> **[1:19](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=79)** SQL statements are structured in subsections known as a clause, and each clause contains at least one SQL syntax keyword.
>
> **[1:28](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=88)** The select keyword is part of the select clause, where we define the fields that we want to be returned back to us.
>
> **[1:37](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=97)** From is a keyword that is part of the from clause that identifies the tables in which we're pulling data from, like the order table, or the customer table.
>
> **[1:47](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=107)** The foundation of a simple query looks like this.
>
> **[1:50](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=110)** Select your field name from a table name.
>
> **[1:54](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=114)** Let's look at how we can use the SQL tools and Visual Studio code.
>
> **[2:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=120)** I'll demonstrate the code here, and feel free to pause and work in the code space along with me.
>
> **[2:06](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=126)** Let's start by going to menu.
>
> **[2:08](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=128)** Go to view and command palette.
>
> **[2:11](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=131)** We'll type in SQL tools, colon, and then space, new SQL file.
>
> **[2:18](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=138)** You can just push in, and go down to new SQL file.
>
> **[2:23](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=143)** In the editor, you'll have a new SQL window to start writing your queries.
>
> **[2:27](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=147)** All these options have shortcuts as well, but this should help you get started with knowing how to access all the commands.
>
> **[2:34](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=154)** So, how do I retrieve all the information from the customer table?
>
> **[2:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=161)** I'll start by typing in select star from customer,
>
> **[2:50](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=170)** and then I end with the semicolon here.
>
> **[2:54](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=174)** I can click on run on active connection, and the results should appear on the right side of your screen.
>
> **[3:04](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=184)** This retrieves all the rows and attributes from the customer table.
>
> **[3:08](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=188)** So, what if I just want to select the state for all customers?
>
> **[3:14](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=194)** Then, instead of using the star here, I can hit select state from customer, leave everything the same.
>
> **[3:26](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=206)** Note, this doesn't give me a unique list of states where our customers live.
>
> **[3:31](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=211)** It gives me the state field for every row in the customer table, and we'll go over creating a unique list later.
>
> **[3:38](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=218)** Let's say the company website wants to display a map of customers from around the country.
>
> **[3:44](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=224)** Instead of manually entering each location in the code for our website, we can add a call to the database to display the total amount of customers in each state.
>
> **[3:54](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=234)** There are also great geographic information systems that use SQL to perform visualizations like this.
>
> **[4:01](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=241)** Most likely, we'll need to join tables together to gain more insights.
>
> **[4:06](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=246)** A join statement will return the records or the keys on the tables in the join match.
>
> **[4:12](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=252)** There are different types of joins.
>
> **[4:14](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=254)** Some join types include inner join, left join, and outer join.
>
> **[4:19](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=259)** The inner join returns only data that matches both tables.
>
> **[4:24](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=264)** The left join returns all the data from the left table, and the data for the matching rows on the right.
>
> **[4:30](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=270)** The full outer join returns the rows from both the left and right tables.
>
> **[4:36](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=276)** There are more join types that are available depending on your database system.
>
> **[4:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=281)** We'll use these join types depending on the relationships between entities and the question that is being asked to make sure our query returns the correct information.
>
> **[4:52](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=292)** We will focus on the inner join for now.
>
> **[4:56](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=296)** Let's look at another example.
>
> **[4:58](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=298)** So we want to find all of our order IDs by the customer's last name.
>
> **[5:02](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=302)** So we're going to start by hitting select, last name, order ID, and we'll use our from clause, type in customer for our table, join to our orders table, and when we join we're going to join on the key.
>
> **[5:24](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=324)** So we're going to use customer dot customer ID equals orders dot customer ID.
>
> **[5:34](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=334)** This gives us our last name, the order ID from the orders table, and we can click on run on active connection.
>
> **[5:44](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=344)** And this will give us all the order IDs by last name.
>
> **[5:49](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-structures?u=76281980&t=349)** To further define our queries, we can add on additional clauses like where, order by, group by, having, and limit, and the additional clauses help us to further define our query so that we can display the correct information.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this. (2), from, (1), match. (1)
> **Env Vars:** sql (10)
> **UI Navigation:** click on (2), go to (1), select the (1)
> **CLI Commands:** make (2), find (1)
> **Tools:** visual studio (2)
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - now (1)


### 2. Using Data Types

#### Using data types and identifying the wrong data types
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=0)** - Now, let's take a look at what data types are and how we can prevent storing and processing the wrong data.
>
> **[0:06](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=6)** Let's review.
>
> **[0:08](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=8)** A relational database is an organization of related tables.
>
> **[0:11](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=11)** A table consists of rows and columns with each row representing a record or an instance.
>
> **[0:17](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=17)** A column represents an attribute of each instance.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=22)** However, all fields are not made the same.
>
> **[0:26](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=26)** The data type of a column defines what value the column can hold.
>
> **[0:31](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=31)** Much like other programming languages, each attribute or column has a data type that helps the system and the programmer know how to interpret the value and how to process it.
>
> **[0:43](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=43)** Here's an example.
>
> **[0:44](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=44)** Let's say I want to order a pet carrier.
>
> **[0:47](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=47)** Depending on the type of pet I have, like a dog, cat or bird and the size of my pet, I'm going to buy the carrier that best fits.
>
> **[0:57](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=57)** Also, depending on their needs I might need different features.
>
> **[1:01](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=61)** Data types work the same.
>
> **[1:03](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=63)** They help us store the right value to make sure the application works correctly.
>
> **[1:08](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=68)** There are many different data types to choose from, and depending on the system, data types and their corresponding functions can perform differently.
>
> **[1:16](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=76)** Some common data types in SQL are INT or integer, a VARCHAR, or you see NVARCHAR as a derivative of that, DATE, DATETIME, FLOAT, Decimal and DOUBLE.
>
> **[1:29](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=89)** Also note that different systems offer different data types.
>
> **[1:34](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=94)** When defining a column's data type, for some systems, you can include the maximum number of characters or digits allowed in the column.
>
> **[1:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=101)** These restrictions are known as constraints.
>
> **[1:45](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=105)** This is defined when the table is created.
>
> **[1:47](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=107)** The developer or administrator can also define additional column constraints.
>
> **[1:53](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=113)** When defining tables, we can define whether the data can be NULL or NOT NULL in each column.
>
> **[1:59](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=119)** We can also ensure that all values in the column are UNIQUE.
>
> **[2:03](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=123)** This is also where we define PRIMARY KEYs, FOREIGN KEYs and set DEFAULT values for each column.
>
> **[2:09](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=129)** Here's an example of a CREATE TABLE statement.
>
> **[2:12](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=132)** Don't worry about the syntax for right now.
>
> **[2:15](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=135)** We'll go over that in more detail later.
>
> **[2:17](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=137)** Let's look at the table's data types and constraints.
>
> **[2:21](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=141)** Here we have the CustomerID column.
>
> **[2:23](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=143)** You can specify an integer of 4 data type for CustomerID.
>
> **[2:28](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=148)** That'll be good for about 9,999 customer IDs.
>
> **[2:33](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=153)** If the system tries to auto increment greater than 9,999 or a customer ID has more than four digits, the process will error.
>
> **[2:44](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=164)** It's important to work with the database team to ensure enough space for customer IDs that are larger than four digits, such as an INT or a SMALLINT data type.
>
> **[2:54](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=174)** For example, in my SQL, the constraints on our integer values are TINYINT, SMALLINT, MEDIUMINT and BIGINT.
>
> **[3:02](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=182)** Data types and constraints ensure that the data is kept consistent and has good quality.
>
> **[3:09](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=189)** Let's look at some more examples.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=190)** I want to calculate the total amount a customer has ever spent with H+ Sport.
>
> **[3:15](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=195)** I've typed out a query in advance so we can go over the main concepts you need to know for now.
>
> **[3:20](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=200)** If there are some key words you don't recognize, it's okay.
>
> **[3:23](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=203)** I've selected the CustomerID, FirstName, LastName from the Customer table, and the TotalDue from the Orders table.
>
> **[3:32](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=212)** And the results from that query gives us the total due for each customer.
>
> **[3:38](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=218)** However, that's not exactly the question we want to answer.
>
> **[3:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=221)** We need to apply a function called SUM to add the total due for each customer ID.
>
> **[3:47](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=227)** We can call this function using the GROUP BY clause and the SUM function.
>
> **[3:51](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=231)** This allows us to aggregate the total due for each customer ID.
>
> **[3:56](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=236)** Again, we'll cover aggregates in a minute.
>
> **[3:58](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=238)** It's a great feature, and I won't forget to come back to this.
>
> **[4:02](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=242)** Let's click on Run on active connection, and here are our query results.
>
> **[4:08](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=248)** Be sure that when using the SUM operator, that you're working with a number data type.
>
> **[4:13](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=253)** Let's try the same query with a text data type like customer email.
>
> **[4:24](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=264)** Looks like we didn't encounter an error, but let's look at the results.
>
> **[4:29](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=269)** We have zeros for the value for some email.
>
> **[4:31](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=271)** The data type for email will not error but will also not give us the correct results.
>
> **[4:37](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=277)** In up database management systems such as SQL Server, this would result in an error.
>
> **[4:43](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=283)** The data type character does not allow for the use of the SUM function.
>
> **[4:47](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=287)** There are other functions we can use to count the number of emails in this case.
>
> **[4:52](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=292)** I'll click on the Top10Customers, that SQL file.
>
> **[4:57](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=297)** I'm going to close this query result.
>
> **[5:02](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=302)** I'll add some additional code to select the top 10 customers by adding the LIMIT 10 and order by keywords.
>
> **[5:10](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=310)** Scroll over a little bit to see the results.
>
> **[5:13](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=313)** It works.
>
> **[5:14](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=314)** We have our top 10 customers ordered by total due.
>
> **[5:18](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=318)** Also note the IDs that we used to join the data together should also be of the same data type.
>
> **[5:23](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=323)** For example, you can store customer ID 001 as VARCHAR or INT.
>
> **[5:30](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=330)** Whatever you decide, the data type needs to be consistent across tables to prevent any future errors that might occur.
>
> **[5:37](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/using-data-types-and-identifying-the-wrong-data-types?u=76281980&t=337)** Take a look at a few of the links for data types for MySQL and SQL Server for more information on data types that best fit the data that you are working with.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5), sum (4), int (3), varchar (2), null (2)
> **Code Keywords:** let (8), function (4), type. (3), from, (1), type, (1)
> **SQL:** varchar (2), create table (1), group by (1)
> **Analogies:** such as (2), for example (2)
> **CLI Commands:** cat (1), make (1), mysql (1)
> **UI Navigation:** click on (2), select the (1)
> **Definitions:** is an  (1), known as (1)
> **Warnings:** note that (1)

#### Finding missing values
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=0)** - [Instructor] Next, we'll take a look at how we can identify missing data in our database.
>
> **[0:05](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=5)** Missing data can have major implications for your development project, affecting your customer's experience and your organization's reputation.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=13)** Let's look at some ways to identify data that may be missing.
>
> **[0:18](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=18)** I'm going to go to the chapter two directory finding missing values, and first we're going to take a look at the salesperson's table.
>
> **[0:26](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=26)** The database team has added a new column called Status.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=30)** Here's a script we can run to add that new column to the salesperson table.
>
> **[0:35](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=35)** Let's click on Run on Active Connection again, that adds the column to our table.
>
> **[0:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=41)** Now, when we run select status from salesperson, we see that all the values for status are listed as null.
>
> **[0:49](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=49)** Null represents an empty value.
>
> **[0:51](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=51)** The value could be null upon creation of the record or it can be assigned a null value from the program.
>
> **[0:58](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=58)** Of course, that depends on if our column allows null values as we discussed before in the column constraints.
>
> **[1:05](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=65)** Null is not the same as a zero value or even a blank value.
>
> **[1:09](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=69)** Sometimes data values can contain spaces and the value may look like it's empty, but it's really not.
>
> **[1:17](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=77)** The WHERE clause is used to help us filter records to a specific set of data that we want to explore based on what we specify in select.
>
> **[1:26](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=86)** The WHERE clause also comes after the FROM clause.
>
> **[1:30](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=90)** To find values that contain blank spaces, we can use the keyword LIKE.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=95)** we use LIKE along with a wildcard, which is the percent sign to find characters like blank spaces within the text.
>
> **[1:43](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=103)** It takes the place of the equal sign.
>
> **[1:46](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=106)** The percent sign is used in place of any character string that we want to search for.
>
> **[1:51](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=111)** The wildcards are enclosed in single quotation marks.
>
> **[1:55](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=115)** Searches within the text are not case sensitive, so searching for capital MW can return MW or lowercase MW or even a mixed case in the string.
>
> **[2:09](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=129)** And the wildcard with space SQL file, let's open that.
>
> **[2:13](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=133)** In this example, let's look at the following query.
>
> **[2:16](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=136)** We select first name on line one from customer, our customer table on line two, where a first name looks like and you see the percent signs with a space in the middle on line three.
>
> **[2:30](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=150)** Let's click on run on active query, and the following query returns zero records.
>
> **[2:36](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=156)** So we don't have any records that contain a space in the first name.
>
> **[2:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=161)** Let's look at the products table.
>
> **[2:43](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=163)** The company has a new orange mineral water.
>
> **[2:46](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=166)** Let's run a script that will add a new product to the product table.
>
> **[2:50](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=170)** We'll go to our AddNewProduct.sql file.
>
> **[2:54](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=174)** This is syntax we haven't covered yet, but will help us set up for the next part of the analysis.
>
> **[3:01](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=181)** Let's click on Run.
>
> **[3:04](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=184)** Now it's just been entered into our products table and the product is now available in the database.
>
> **[3:12](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=192)** Let's click on our SelectNewProduct.sql file.
>
> **[3:16](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=196)** Let's click on Run.
>
> **[3:18](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=198)** You'll notice that we can't see a name for the product, so let's go to our SelectBlankProduct.sql file.
>
> **[3:26](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=206)** Let's try to run this one.
>
> **[3:29](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=209)** There is one record that returns that lets us know that the product code contains spaces and is not a null value.
>
> **[3:37](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=217)** There is a record for product ID 17 listed, but how much does it cost?
>
> **[3:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=221)** There also looks like there may be some data missing.
>
> **[3:45](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=225)** Let's go back to the SelectNewProduct.sql file, we can see that the product name is still null and the cost is listed at $0.
>
> **[3:55](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=235)** Let's perform some queries that find null values using the WHERE clause.
>
> **[4:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=240)** You can filter records by adding is null or is not null to the WHERE criteria.
>
> **[4:06](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=246)** Let's go to our StateIsNull.sql file.
>
> **[4:11](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=251)** To identify customer records with a missing state value, we can select customer ID, first name, last name, first customer, and on line five, we have where state is null.
>
> **[4:25](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=265)** Let's run this.
>
> **[4:26](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=266)** This query should return zero records since the column state does not allow null values.
>
> **[4:32](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=272)** If it does return records, we can take this information to our team to identify any issues that may be causing missing values and impose a proper constraints.
>
> **[4:42](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=282)** Next, let's go to the StateIsNotNull.sql.
>
> **[4:45](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=285)** As a check, we can also run this following query on line five, you see, where state is not null.
>
> **[4:52](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=292)** We will want this number to be the same number as the records in the customer table.
>
> **[4:58](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=298)** That means that no state values are null.
>
> **[5:01](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=301)** Again, it's still important to look at the data to make sure that there are no blanks or spaces and values in the state column, as they will not be identified as null.
>
> **[5:12](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-missing-values?u=76281980&t=312)** This is a great practice for enforcing quality in your data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), for. (1), this. (1)
> **UI Navigation:** go to (5), click on (5)
> **File Paths:** selectnewproduct.sql (2), addnewproduct.sql (1), selectblankproduct.sql (1), stateisnull.sql (1), stateisnotnull.sql (1)
> **Env Vars:** where (4), sql (1)
> **CLI Commands:** find (3), make (1)
> **SQL:** where (4)
> **Definitions:** is a  (2), means that (1)
> **Cross-References:** we discussed (1), go back to (1)

#### Finding possible inaccurate data values
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=1)** - [Presenter] Next, we'll take a look at using SQL functions to find some possible bad data values.
>
> **[0:07](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=7)** Sometimes, we'll run across data that doesn't look right at all, like a misspelled word or a product that was giving the wrong product code.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=15)** A great tip in application development is to search for possible anomalies in our data and be prepared for dealing with it in our app.
>
> **[0:24](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=24)** There are several different operators you can use to gain more insights about your data.
>
> **[0:29](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=29)** To do this, we'll look at three types of SQL operator: comparison, logical, and arithmetic.
>
> **[0:38](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=38)** Comparison operators compare values and return a true or false to evaluate the statement.
>
> **[0:45](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=45)** Some common comparison operators in SQL are equal, not equal, greater than or greater than or equal to, less than or less than or equal to.
>
> **[0:57](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=57)** If I compare an apple and an orange by color and taste, would they be the same?
>
> **[1:03](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=63)** No, so the operation would turn a result of false.
>
> **[1:07](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=67)** We compare two values to evaluate whether or not we want to return the record.
>
> **[1:12](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=72)** In this code example, we can return all the orders where the order date is greater than January 6, 2016.
>
> **[1:20](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=80)** Depending on the date of format that your data is stored in, the structure and format of the date value may vary slightly.
>
> **[1:28](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=88)** Logical operators combine multiple Boolean values and return a single Boolean output of true or false.
>
> **[1:36](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=96)** Some common logical operators in SQL are listed here including and, or, like, and between.
>
> **[1:44](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=104)** Say you want to check for multiple conditions, such as if a product variety is Blueberry and the price is below $2.
>
> **[1:52](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=112)** In this example, we selected all the records from the product table where the variety is Blueberry and the price is less than $2.
>
> **[2:02](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=122)** We can see a simple example of the use of and as a logical operator here.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=127)** Now, let's take a look at arithmetic operators.
>
> **[2:10](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=130)** These are our operations that we use to perform calculations.
>
> **[2:13](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=133)** We can use basic arithmetic operators to our data like addition, subtraction, multiplication, division, and modulo, which we'll find the remainder.
>
> **[2:25](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=145)** Let's check the total due column by also checking the product price and quantity in the order item table.
>
> **[2:32](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=152)** Let's open our check order total SQL file.
>
> **[2:36](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=156)** We'll have to join the order item and product tables by the product ID, and we'll multiply the quantity and price.
>
> **[2:45](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=165)** Next, to get the total for the orders, we will use the sum function to aggregate the order item records by order ID.
>
> **[2:53](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=173)** In order to aggregate, we have to use a group-by clause that allows us to group data that is similar.
>
> **[3:01](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=181)** When we look at our results, our total due is the same as our new total due that we have calculated from multiplying quantity and price.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=190)** We want to see if there are any discrepancies here that we may need to discuss with our team.
>
> **[3:16](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=196)** Are we missing some additional calculations that we should consider, such as sales tax or discounts?
>
> **[3:22](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=202)** This is all part of making sure that we're asking the right questions or let someone know that we have some bad data.
>
> **[3:29](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=209)** A couple of things to note here: This is where good data documentation comes into play.
>
> **[3:35](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=215)** Most databases will also come with a definition of what is in each column.
>
> **[3:39](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=219)** It's also good to document where the data originally comes from and how it's derived if it's a calculated field.
>
> **[3:47](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=227)** It's also great to list or define valid values for the column.
>
> **[3:52](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=232)** This could be a list or a range like store A, store B, and store C.
>
> **[3:58](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-possible-inaccurate-data-values?u=76281980&t=238)** Good documentation is essential in identifying bad data that can mess up the integrity of your application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (1), function (1)
> **Env Vars:** sql (5)
> **CLI Commands:** find (2)
> **Analogies:** such as (2)
> **Speakers:** - [presenter] (1)

#### Finding duplicate rows
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=0)** - [Instructor] Let's look at some ways to use SQL to identify duplicate values in our data, as well as how to prepare a summary that will give us even more insight.
>
> **[0:09](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=9)** Now let's add two new clauses.
>
> **[0:12](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=12)** They are the GROUP BY and HAVING clauses.
>
> **[0:16](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=16)** The GROUP BY clause allows us to introduce aggregation to our SQL query.
>
> **[0:20](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=20)** By using GROUP BY, we can group together rows that have the same values and summarize those groups with aggregate functions, as we have seen in some previous examples.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=30)** Aggregate functions include COUNT, SUM, AVG, MIN, and MAX functions.
>
> **[0:37](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=37)** We will look at some of those functions a little later in this course.
>
> **[0:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=41)** For now, let's focus on the COUNT function that will help us identify the duplicate records.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=48)** Let's start by going to duplicate 1 dot SQL.
>
> **[0:51](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=51)** All of fields in the select statement must also be in the group by.
>
> **[0:55](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=55)** Now, here's an example of a summary.
>
> **[0:57](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=57)** I want to count the number of orders for each customer.
>
> **[1:01](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=61)** I'll use the customer ID from the customer table.
>
> **[1:04](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=64)** Next, in our select statement, I'll add the COUNT function.
>
> **[1:09](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=69)** Inside the COUNT function, you can add a field that you want to count the number of values as seen on line 4.
>
> **[1:14](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=74)** A common practice, we'll write count one, and that will count the number of values in the first column.
>
> **[1:22](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=82)** We can also use an alias to rename our calculated field to something else like num underscore orders.
>
> **[1:29](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=89)** Next, I'll include some more information from the customer table by joining by customer ID.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=95)** We'll go over more about joins here soon.
>
> **[1:38](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=98)** However, this is a simple join.
>
> **[1:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=101)** I'll add the group by clause and add customer ID, first name, and last name.
>
> **[1:46](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=106)** You can also add order by to order the account in ascending or descending order.
>
> **[1:52](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=112)** Let's run this query to see what's returned.
>
> **[1:59](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=119)** Now we have a summary that contains the number of orders for each customer.
>
> **[2:04](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=124)** As you can see here, we have some num orders that have two and some that have one.
>
> **[2:11](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=131)** A duplicate row happens if the record is not unique.
>
> **[2:15](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=135)** This means that all the attributes for a row are the same.
>
> **[2:18](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=138)** This can cause the application to count something twice or overestimate.
>
> **[2:23](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=143)** Let's add the HAVING clause.
>
> **[2:25](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=145)** The HAVING clause allows us to use some additional filtering based on the results of the aggregate functions.
>
> **[2:31](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=151)** It will always come after the group by.
>
> **[2:35](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=155)** Let's take a look at duplicate 2 dot SQL.
>
> **[2:39](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=159)** On line 4, we add the following, having count of one greater than one.
>
> **[2:46](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=166)** Let's run this, and ah, we have some duplicate values.
>
> **[2:54](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=174)** By checking if the count is greater than one, we can identify where there may be one or more rows that are the same.
>
> **[2:59](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=179)** Of course, first and last name combinations can be very common.
>
> **[3:03](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=183)** However, if we were to add address, city, state, and zip code that makes it more likely that these are different people and less likely that it's a duplicate record unless you have two people at your address with the same name.
>
> **[3:16](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=196)** If that's the case, we can try to add even more fields to help us identify the truly unique records.
>
> **[3:23](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=203)** Let's go to duplicate 3 dot SQL.
>
> **[3:25](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=205)** Here, we've added city, state, and zip code to our existing query.
>
> **[3:30](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=210)** Let's run that.
>
> **[3:31](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=211)** No duplicate values there.
>
> **[3:34](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=214)** Some key points to remember, the WHERE clause allows us to filter non aggregate data columns.
>
> **[3:40](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=220)** The HAVING clause is only used to filter aggregated data like SUM and COUNT, and has to be accompanied by the GROUP BY clause that's listed first.
>
> **[3:51](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=231)** Identifying duplication in our data can save us database space.
>
> **[3:55](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/finding-duplicate-rows?u=76281980&t=235)** It also helps us to prevent errors in our application or in our data analysis, ultimately leading to better decision making and a better customer experience.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5), count (5), group (4), having (4), sum (2)
> **Code Keywords:** let (10), function (3), this, (1), case, (1)
> **SQL:** group by (4), having (4), where (1)
> **Definitions:** is a  (1), means that (1)
> **Cross-References:** later in (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 3. Working with Dates

#### Working with dates
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=0)** - Most database management systems will allow for many different data types for dates, so let's look at some different methods.
>
> **[0:08](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=8)** In MySQL, you have DATE, DATETIME, TIMESTAMP, and YEAR.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=13)** There are lots of different options.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=15)** They may seem very similar, but there are some unique differences.
>
> **[0:19](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=19)** In MySQL, the DATE datatype will store the value as YYYY-MM-DD.
>
> **[0:26](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=26)** While the TIMESTAMP stores both the date and time that includes the hour, minute, and second of the time.
>
> **[0:34](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=34)** With most business applications, the timestamp in SQL will be more than enough precision.
>
> **[0:40](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=40)** Datatypes allow the database to have different levels of precision based on the needs of the application.
>
> **[0:46](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=46)** Let's take a look at the order date.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=48)** Let's open the SelectOrderDate.sql file.
>
> **[0:53](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=53)** Date is in both the name of the field and the datatype, and sometimes that may be confusing.
>
> **[0:59](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=59)** In practice, make sure that the fields used are not the same as keywords.
>
> **[1:04](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=64)** In this instance, we use CreationDate instead of Date.
>
> **[1:08](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=68)** This query returns the date for every order in the database.
>
> **[1:11](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=71)** Let's add some more to this query.
>
> **[1:14](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=74)** Open the SeparateDates.sql file.
>
> **[1:17](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=77)** Here, we'll separate the month, day, and year of the order date into three separate columns.
>
> **[1:22](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=82)** The Year returns a year in an integer, Month returns an integer 1 through 12 for the month of the date, and Day returns an integer that represents the day of the month.
>
> **[1:33](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=93)** I can also add aliases to make my columns easier to read for my audience.
>
> **[1:38](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=98)** Open the SeparateDatesAlias.sql file for an example.
>
> **[1:42](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=102)** Let's click on run.
>
> **[1:44](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=104)** Now we have successfully created three columns of data from one.
>
> **[1:48](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=108)** There's also a couple of ways to capture the current date and time.
>
> **[1:52](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=112)** Let's again look at a few DBMS methods to do that.
>
> **[1:56](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=116)** In MySQL, let's use the NOW function.
>
> **[1:58](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=118)** We'll open the CurrentDateTime.sql file.
>
> **[2:03](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=123)** The value is derived from the operating system where the database is running.
>
> **[2:08](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=128)** These functions are great for when you're ready to insert a new order into the order table.
>
> **[2:13](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=133)** There are so many date functions available to make the most of our data.
>
> **[2:18](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=138)** Each database management system will contain documentation that is useful for helping us.
>
> **[2:24](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=144)** There are so many date functions available to make the most of our data.
>
> **[2:28](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/working-with-dates?u=76281980&t=148)** Each database management system will contain documentation that's useful in helping us query effectively.

> [!info]- Semantic Content
>
> **Env Vars:** date (2), timestamp (2), datetime (1), year (1), yyyy (1)
> **Code Keywords:** let (7), function (1)
> **CLI Commands:** make (4), mysql (3)
> **UI Navigation:** open the (4), click on (1)
> **File Paths:** selectorderdate.sql (1), separatedates.sql (1), separatedatesalias.sql (1), currentdatetime.sql (1)
> **SQL:** timestamp (2)
> **Speakers:** - most (1)

#### Filtering data by dates
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=0)** - In a larger database, we wouldn't want to return all of the orders.
>
> **[0:04](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=4)** For one, it could get pretty inefficient; and 2, we most likely aren't interested in every record.
>
> **[0:12](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=12)** Instead, we're going to identify a subset of the data by using dates.
>
> **[0:17](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=17)** I need to show the sales team a list of all the orders from May 2016.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=22)** Let's incorporate both logical and comparison operators and the date functions from our previous section.
>
> **[0:29](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=29)** Let's open the ComparisonOperators.sql file.
>
> **[0:33](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=33)** We have the following query, SELECT OrderID and CreationDate FROM Orders, where the month is equal to 5 and the year is equal to 2016.
>
> **[0:43](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=43)** A couple of things to note here.
>
> **[0:45](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=45)** Month and year are returned as integers, and the values can be noted in single quotes or not.
>
> **[0:51](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=51)** That doesn't matter, since they are integers.
>
> **[0:55](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=55)** Also, we use the AND operator so that both conditions must be true in order for the records to be returned.
>
> **[1:02](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=62)** If either condition is false, we will not get the records we want.
>
> **[1:08](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=68)** Let's click on run, and we see a order ID and creation date.
>
> **[1:15](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=75)** We can also use BETWEEN to get a section of orders in a specified time period.
>
> **[1:20](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=80)** Let's look at the same question of returning orders for May 2016.
>
> **[1:26](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=86)** Let's open the BetweenDates.sql query.
>
> **[1:32](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=92)** Close this result.
>
> **[1:36](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=96)** Notice the WHERE clause that has the BETWEEN keyword.
>
> **[1:40](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=100)** In line 4, you see "BETWEEN '2016-05-01' and '2016-05-31'".
>
> **[1:52](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=112)** Click on run.
>
> **[1:55](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=115)** The query returns 17 records.
>
> **[1:57](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=117)** We'll also order the results by adding an ORDER BY clause that sorts our data by the order date in ascending order.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=127)** By adding the DESCENDING keyword in our ORDER BY clause, we can order the order date in descending order.
>
> **[2:14](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=134)** The ascending order keyword is ASC, but is also the default method in ORDER BY and does not need to be implied.
>
> **[2:24](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=144)** We can also use comparison operators together with date functions to filter the results by dates.
>
> **[2:30](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=150)** Let's select dates greater than today's date.
>
> **[2:33](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=153)** Open the WithCurrentDate.sql file.
>
> **[2:40](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=160)** Yep.
>
> **[2:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=161)** Let's move this over here, and we'll close out the old result set.
>
> **[2:53](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=173)** In the where clause, you'll see where we're comparing the creation date with the current date using the now function.
>
> **[2:59](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=179)** Let's run this.
>
> **[3:04](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=184)** No records are returned, which is what we expect, since we don't have any data in 2023 or in the future.
>
> **[3:11](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=191)** Instead, let's find an order date where it's greater than 10 years.
>
> **[3:15](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=195)** So let's open the WithCurrentDateMinus10years.sql file.
>
> **[3:21](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=201)** Here we also add some arithmetic operators to our where clause.
>
> **[3:25](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=205)** Let's run this query.
>
> **[3:28](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=208)** The query now returns 200 orders with a order date greater than 10 years ago.
>
> **[3:35](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=215)** Next, let's try to return our order data from 2015 by month and year along with our other order information.
>
> **[3:45](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=225)** Open the CompareYear.sql file.
>
> **[3:48](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=228)** Let's close out our previous results.
>
> **[3:52](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=232)** On line 6 and 7, in the where clause, you'll see the year function and we pass in the creation date as a parameter.
>
> **[4:01](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=241)** We've used our year function to filter by just a year, and we're able to use our column alias to order our date by month and year in ascending order.
>
> **[4:10](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=250)** Let's run this query.
>
> **[4:13](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=253)** We have 87 records returned with the dates between June and December of 2015.
>
> **[4:19](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=259)** We're also able to use our alias in the ORDER BY clause.
>
> **[4:23](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/filtering-data-by-dates?u=76281980&t=263)** This is allowed because of the order in which SQL processes each clause.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), function (3), this. (1), pass (1)
> **Env Vars:** order (4), between (3), select (1), where (1), descending (1)
> **UI Navigation:** open the (5), click on (2)
> **SQL:** order by (4), select (1), where (1)
> **File Paths:** comparisonoperators.sql (1), betweendates.sql (1), withcurrentdate.sql (1), withcurrentdateminus10years.sql (1), compareyear.sql (1)
> **CLI Commands:** find (1)
> **Speakers:** - in (1)


### 4. Easy SQL Functions

#### Common SQL string functions
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=0)** - [Instructor] Different relational database management systems offer built-in SQL functions that allow us to retrieve data for our applications.
>
> **[0:07](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=7)** This is especially helpful when working with text.
>
> **[0:11](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=11)** Now let's take a step back for a moment and talk about what is a function.
>
> **[0:16](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=16)** SQL functions are built into the database system and return values based on the operation, functions within SQL work much like functions in other programming languages they can take in one or more arguments and return a value.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=32)** Some functions are specific to a data type and some functions can cross different data types.
>
> **[0:38](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=38)** For example, we can use the MIN function to find the minimum total of products ordered and we can also use the minimum order date which would be the oldest date in the results.
>
> **[0:50](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=50)** However, the sum function is for adding numerical values.
>
> **[0:55](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=55)** You won't be able to use the sum of apples and oranges.
>
> **[0:59](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=59)** The sum function will not work on strings Let's look at some common string functions.
>
> **[1:05](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=65)** String functions are used to modify character and text space data.
>
> **[1:10](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=70)** Some common string functions are CONCAT UPPER, LOWER, TRIM, REPLACE, and SUBSTRING.
>
> **[1:18](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=78)** Using these functions within our select statement temporarily changes how the values are returned to us without actually changing the data in the underlying database.
>
> **[1:28](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=88)** The SUBSTRING function in this case takes three arguments.
>
> **[1:32](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=92)** The value of the field to use, the first position of where you want the substring to begin and the number of characters to include in the substring.
>
> **[1:43](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=103)** Some examples would be where, substring of the last name one for the first position, and three for the number of characters to include in the substrate.
>
> **[1:54](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=114)** Will return last name that begins with Smi.
>
> **[1:58](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=118)** Like Smith.
>
> **[2:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=120)** The CONCAT function allows us to join strings together.
>
> **[2:03](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=123)** In this example, we can add the first and last name together to get the customer's full name.
>
> **[2:09](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=129)** The upper function will return your string in all capital letters, and the lower function will return the whole character string in lowercase.
>
> **[2:19](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=139)** These functions are great for standardizing the result set.
>
> **[2:22](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=142)** For instance, if you want to standardize a mailing address this is a great method to do that.
>
> **[2:30](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=150)** The replace function can quickly replace all of the occurrences of a substring within a string with another substring.
>
> **[2:37](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=157)** Let's take a look at these functions in action.
>
> **[2:42](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=162)** Let's open the CONCAT and a upper.SQL file.
>
> **[2:45](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=165)** This is a quick example for listing mailing address.
>
> **[2:48](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=168)** We will use the CONCAT and upper functions to show the customer's full mailing address.
>
> **[2:55](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=175)** Let's run this query and check out the results of the concatenated new address.
>
> **[3:01](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=181)** Notice, we combine two string functions here along with the limit 10 to only include the first 10 records in our result set.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=190)** The trim function will remove spaces from the beginning or the end of a string.
>
> **[3:15](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=195)** This is extremely helpful if we have some users that may enter text in a web input field and forget that there is an extra space at the end.
>
> **[3:24](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=204)** The trim function can be used to remove these trailing spaces.
>
> **[3:28](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=208)** The trim function can also remove specified characters from a string, for instance, with the dollar sign in a total due field in our invoices table.
>
> **[3:39](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=219)** Let's look at the trim.SQL file.
>
> **[3:43](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=223)** Let's close our previous query results.
>
> **[3:48](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=228)** We can remove the M in front of a product code with a trim function with a following code.
>
> **[3:58](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=238)** So clearly this is a lot easier to try to implement than the substring function with trimming characters from text.
>
> **[4:09](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=249)** Some derivatives of the trim function include LTRIM which is a function that can remove leading spaces from the character on the left side and the RTRIM function which will remove the trailing spaces.
>
> **[4:21](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=261)** The REPLACE function will replace a set of specified characters with another set of characters similar to find and replace in excel.
>
> **[4:29](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=269)** Let's open the replace.SQL file.
>
> **[4:32](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=272)** Let's close this previous query result and let's say I'm interested in replacing product code B-L-U with B-L-E, you see on line two, we use replace, product code with BLU to BLE and an alias of new product code.
>
> **[4:55](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=295)** Let's run this query.
>
> **[4:58](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=298)** We can see the original product codes with the new product codes using the replace function.
>
> **[5:03](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=303)** Of course these are not all the string functions available to us.
>
> **[5:08](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-string-functions?u=76281980&t=308)** Find more useful string functions on document websites like MySQL for more string manipulation options.

> [!info]- Semantic Content
>
> **Code Keywords:** function (19), let (11)
> **Env Vars:** sql (6), concat (4), replace (2), substring (2), min (1)
> **Definitions:** is a  (5), is an  (1)
> **CLI Commands:** find (3), mysql (1)
> **Analogies:** for instance (2), for example (1), similar to (1)
> **File Paths:** upper.sql (1), trim.sql (1), replace.sql (1)
> **UI Navigation:** open the (2)
> **Speakers:** - [instructor] (1)

#### Common SQL aggregate functions
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=0)** - [Instructor] Now let's look at the many mathematical functions we have available in SQL to translate our data into some meaningful information.
>
> **[0:09](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=9)** Some common aggregate functions include count, average, min, max, and sum.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=15)** Count is a commonly used function within SQL to find the frequency of values in a data set.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=21)** For example, we may want to know how many customers we have.
>
> **[0:27](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=27)** We can perform that calculation in the Count Customers.sql file.
>
> **[0:31](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=31)** Let's take a look at that syntax, which should be familiar.
>
> **[0:36](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=36)** Let's run this query.
>
> **[0:40](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=40)** This query will return the number of customers in our database.
>
> **[0:43](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=43)** Here, we see that we have a thousand customers in our database.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=48)** We can also count the number of customers that have made purchases by counting the number of customer IDs in the order table.
>
> **[0:57](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=57)** Let's go to Count Orders.sql.
>
> **[1:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=60)** Run this query, I get a count of 200.
>
> **[1:03](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=63)** However, we know that customers can make more than one order, so that will not give us a unique count of customers.
>
> **[1:10](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=70)** In order to get the unique count of customers from our order table, we can use the distinct keyword.
>
> **[1:18](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=78)** Let's open the Count Distinct.sql file.
>
> **[1:21](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=81)** We'll click on Run.
>
> **[1:24](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=84)** Now I get a count of 179, which is really the number of customers that have actually ordered something from our company.
>
> **[1:31](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=91)** Let's say we also want to find the average amount of orders.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=95)** The average function finds the average of a set of numbers.
>
> **[1:39](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=99)** In order to provide account summary for a group of similar rows, again, we can use the Group By statement.
>
> **[1:46](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=106)** Let's work with some code examples.
>
> **[1:48](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=108)** Open the Min Max Functions.sql file.
>
> **[1:51](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=111)** We can join the customer table to the orders table to find the average total due by state.
>
> **[1:56](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=116)** Let's build on this query to add some additional aggregate functions.
>
> **[1:59](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=119)** We'll add the max function to find the maximum order amount, and the min function to find the minimum total due.
>
> **[2:08](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=128)** And we'll also add the sum function to add all the orders for each state.
>
> **[2:13](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=133)** Let's run this query.
>
> **[2:18](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=138)** You can see in the results, all the aggregate values are the same for Utah.
>
> **[2:23](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=143)** That's because there's only one order recorded in Utah.
>
> **[2:27](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=147)** If we scroll down to Florida, we can see an average, minimum, maximum and some that are different.
>
> **[2:34](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=154)** This is great summary information about the H+ Sport customers.
>
> **[2:38](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=158)** Let's save this query as a view.
>
> **[2:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=161)** Open the Create Views.sql file.
>
> **[2:44](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=164)** Let's get this over here.
>
> **[2:47](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=167)** Close out our previous SQL results.
>
> **[2:53](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=173)** We'll call this view V_CustomerOrderSummary, and we can use it to incorporate into our web app for later.
>
> **[2:59](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/common-sql-aggregate-functions?u=76281980&t=179)** Just remove the Order By Class to prevent errors in the Create View statement.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (5)
> **CLI Commands:** find (5), make (1)
> **UI Navigation:** open the (3), go to (1), click on (1), scroll down (1)
> **File Paths:** customers.sql (1), orders.sql (1), distinct.sql (1), functions.sql (1), views.sql (1)
> **Env Vars:** sql (3)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Introduction to data manipulation
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=0)** - [Instructor] All of the syntax we've covered so far in this course are geared toward data retrieval.
>
> **[0:05](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=5)** We've mainly used the select statement to retrieve data that we want to display.
>
> **[0:10](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=10)** As a developer, you'll also have to create processes for creating, updating, and removing data.
>
> **[0:16](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=16)** This is part of the SQL language called data manipulation.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=21)** Data manipulation language or DML allows you as a developer to change the actual values of the data that is stored within the database tables.
>
> **[0:31](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=31)** Common data manipulation functions include insert, update, and delete.
>
> **[0:36](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=36)** The insert, update, and delete operations, along with select, are used to do CRUD operations, create, read, update, and delete.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=48)** The select statement is a read or retrieval operation.
>
> **[0:51](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=51)** We have used this operation in several examples already.
>
> **[0:54](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=54)** It returns a result set of data from our database.
>
> **[0:58](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=58)** The insert statement allows us to add new records to our tables, like adding a customer or adding a new order.
>
> **[1:06](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=66)** Insert is one of the keywords in our create operation.
>
> **[1:09](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=69)** We also use the create keyword when creating new tables or views in the data definition language.
>
> **[1:16](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=76)** The update statement updates an existing row or set of rows in a table, like updating a customer's address or phone number.
>
> **[1:25](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=85)** The update keyword is the keyword for our update operation.
>
> **[1:29](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=89)** The delete statement allows us to delete rows of data.
>
> **[1:32](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=92)** For example, if we need to delete an old customer or user from our database.
>
> **[1:37](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=97)** The delete keyword is used for our delete operations.
>
> **[1:41](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=101)** Let's look at some examples.
>
> **[1:42](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=102)** Let's start with the insert operation.
>
> **[1:45](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=105)** We're going to add a new customer to our customer table.
>
> **[1:49](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=109)** The syntax for inserting a new record is insert into the table name, the columns, and then they use the values keyword and we enter the values.
>
> **[2:02](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=122)** To add a customer, we'll add the following code from the insert.sql file.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=127)** You see we have insert into our customer table, our column names and the values for each column.
>
> **[2:14](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=134)** Let's click on run, no errors in the console, but we can check the table to make sure the record was added.
>
> **[2:21](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=141)** Let's open confirm.sql.
>
> **[2:23](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=143)** Let's click on run.
>
> **[2:25](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=145)** We can see that there's one record added here, to let us know that the row has been inserted into the table.
>
> **[2:32](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=152)** I want to update the same record with an updated address, we'll use the update statement and also include a where clause to identify the record that we want to update.
>
> **[2:43](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=163)** We'll also introduce the keyword set that sets the new value of the attributes that we're updating.
>
> **[2:50](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=170)** Let's open the update.sql file.
>
> **[2:54](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=174)** Here, we're updating the customer table, we're setting the phone number where customer ID is 9999.
>
> **[3:03](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=183)** Here's the old phone number.
>
> **[3:05](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=185)** Click on run.
>
> **[3:09](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=189)** There are no errors here.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=190)** Let's run the select statement again to confirm that the record is updated with the new phone number.
>
> **[3:17](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=197)** Notice if we do not include a where clause here, we'll update the attribute for every row in our database and most likely that's not what we want to do.
>
> **[3:30](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=210)** Say our customer decides to no longer do business with us, we may want to delete that customer's record.
>
> **[3:36](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=216)** Note that we don't have to include the field names here as the entire row will be deleted, depending on what is in the where clause.
>
> **[3:45](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=225)** Let's open the delete.sql file.
>
> **[3:48](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=228)** We'll delete from customer where customer ID is 9999.
>
> **[3:54](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=234)** You can include the quotation marks or not.
>
> **[3:58](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=238)** Let's click on run.
>
> **[4:02](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=242)** We'll go back to confirm.
>
> **[4:06](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=246)** Click on run and confirm that the record has been deleted.
>
> **[4:14](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=254)** We can also run account check to make sure that we are only down one row.
>
> **[4:21](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=261)** If we delete more than one record here, we'd be in some serious trouble.
>
> **[4:28](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=268)** Luckily, in SQL, we can perform transactions.
>
> **[4:31](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=271)** Transactions are a single unit of work where data modifications can be made and committed to the database By default, when we perform SQL modification transactions, they are automatically committed to the database.
>
> **[4:45](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=285)** However, you can explicitly run a transaction by adding begin transaction to the beginning of the statement and to the end of the statement with either commits or rollback.
>
> **[4:58](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=298)** If an error occurs, we can rollback changes to what they were before the statement.
>
> **[5:03](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=303)** If everything is good, we can commit and continue with the next set of processes.
>
> **[5:09](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=309)** This is known as transact SQL and is an important part of the development process, especially when dealing with large transactions that involve cascading changes across the database.
>
> **[5:19](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/introduction-to-data-manipulation?u=76281980&t=319)** Transact SQL is helpful in ensuring the integrity of the database by preventing processes from continuing if an error has occurred in our data processing.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (12), let (10), default, (1), continue (1)
> **Env Vars:** sql (5), dml (1), crud (1)
> **UI Navigation:** click on (5), open the (2)
> **File Paths:** insert.sql (1), confirm.sql (1), update.sql (1), delete.sql (1)
> **Definitions:** is a  (1), known as (1), is an  (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)


### 5. Presenting Your SQL Results in Data Visualization

#### Getting started with data visualization
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=0)** - [Instructor] Let's bring it all together using the code we've learned in this course.
>
> **[0:05](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=5)** We'll use fundamental concepts to create a simple, web-based dashboard using Jupiter Notebook and Plotly.
>
> **[0:12](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=12)** In software applications, we use the CRUD operations to create, read, update, and delete data in the application code.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=21)** Developers use a combination of these concepts with other advanced ones to create a successful data-driven application.
>
> **[0:29](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=29)** Now, let's put some of our code into practice.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=32)** I'm going to incorporate a dashboard using Plotly, an open source graphing library for Python.
>
> **[0:39](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=39)** We'll build the dashboard using Jupyter Notebook and Python and display it on a webpage that shows how each salesperson is performing.
>
> **[0:47](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=47)** If you aren't familiar with Python, no worries.
>
> **[0:50](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=50)** Python is a programming language that can be used for lots of applications from software development to data analysis.
>
> **[0:58](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=58)** Let's start by looking at the view V orders.
>
> **[1:01](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=61)** It includes the sum of the total due, the count of orders by month, year, and the salesperson's full name.
>
> **[1:09](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=69)** Let's start by opening the dashboard dot IPYNB file that contains our Jupiter notebook.
>
> **[1:16](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=76)** Let's move this down a little bit and start from the top.
>
> **[1:20](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=80)** Feel free to follow along with me as I go through each step in the Jupiter notebook.
>
> **[1:24](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=84)** We'll begin by importing the Python libraries needed to run our code and connecting to the H plus sport database in the repo.
>
> **[1:31](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=91)** Just go ahead and click on the recommended Python environment.
>
> **[1:38](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=98)** If the step is finished, you'll see that green check.
>
> **[1:40](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=100)** This says it's okay to go ahead.
>
> **[1:43](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=103)** We'll connect to the H plus sport database.
>
> **[1:48](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=108)** Let's take a quick peek at our V orders table by running DF dot head.
>
> **[1:53](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=113)** This is the head of our data frame in Python.
>
> **[1:58](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=118)** We'll see our first five records in the table.
>
> **[2:02](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=122)** Now let's plot this on a bar chart.
>
> **[2:06](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=126)** I've already created a Python script that will demonstrate the total due by order date and salesperson.
>
> **[2:13](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=133)** I also added a filter by salesperson so that the user can filter the data to show the sum of the total due for each salesperson.
>
> **[2:21](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=141)** Let's click to run.
>
> **[2:23](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=143)** You'll see a message that says your application is running on port 8050, so let's go there.
>
> **[2:30](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=150)** You can go there by scrolling down and going to dash is running on [http://127.0.0.1](http://127.0.0.1) on port 8050.
>
> **[2:43](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=163)** You can click on the link and now you should see your dashboard running in an app.
>
> **[2:48](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=168)** This could take a while to load, so be patient.
>
> **[2:51](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=171)** It took me about two or three minutes to load.
>
> **[2:55](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=175)** Here you can use your dropdown box to change the salesperson and you can see an order summary by salesperson here and interact with the data.
>
> **[3:06](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=186)** Many business intelligence tools will have embed capabilities or APIs that we can call to add visualizations to a website.
>
> **[3:15](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=195)** Some can have cost associated with it like a Tableau or Power BI.
>
> **[3:20](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=200)** Plotly is open source and you can use it just like you did today in Python and Jupiter Notebook.
>
> **[3:26](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/getting-started-with-data-visualization?u=76281980&t=206)** To learn more about Python tools, check out the other courses in the library and also documentation on [python.org/about](https://python.org/about) and [plotly.com](https://plotly.com).

> [!info]- Semantic Content
>
> **CLI Commands:** python (11)
> **Code Keywords:** let (9), delete (1)
> **URLs:** [http://127.0.0.1](http://127.0.0.1) (1), [python.org](https://python.org) (1), [plotly.com](https://plotly.com) (1)
> **Ports:** port 8050 (2)
> **Env Vars:** crud (1), ipynb (1)
> **UI Navigation:** click on (1), dropdown (1)
> **Versions:** 127.0.0 (1)
> **Tools:** jupyter (1)

#### Creating data visualization
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/creating-data-visualization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/creating-data-visualization?u=76281980&t=0)** - [Instructor] Now it's your turn to create.
>
> **[0:03](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/creating-data-visualization?u=76281980&t=3)** In the repository for the course, you'll run the code for Create a dashboard.ipynb.
>
> **[0:10](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/creating-data-visualization?u=76281980&t=10)** This Jupiter Notebook contains the code to create a new dashboard from the V customer order summary view that contains the total sales, minimum due, maximum due and average due by state.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/creating-data-visualization?u=76281980&t=22)** Run through each step in the Jupiter notebook and note how we can incorporate SQL from this course into Python, Pandas and plot with Plotly to create a new web-based dashboard.
>
> **[0:33](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/creating-data-visualization?u=76281980&t=33)** I've updated the header to H plus Sport Sales Dashboard, and you can also look at the Plotly documentation if you're more interested in more ways that we can format the dashboard and make it even more interactive.
>
> **[0:47](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/creating-data-visualization?u=76281980&t=47)** Click on the link again from Jupiter notebook, and you've created your own web-based dashboard that you can share with the sales team for H Plus Sport.
>
> **[0:56](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/creating-data-visualization?u=76281980&t=56)** We can see that our webpage now includes the dashboard with our SQL queries that we created in this course.
>
> **[1:02](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/creating-data-visualization?u=76281980&t=62)** We can also use the filters that we created in Plotly right here on the webpage.
>
> **[1:07](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/creating-data-visualization?u=76281980&t=67)** Note that I'm using Plotly and Jupiter notebooks, but you can embed a dashboard into a webpage using Power BI, Tableau, Looker and many other data visualization software systems.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1), make (1)
> **Env Vars:** sql (2)
> **UI Navigation:** click on (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Leveling up SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=0)** - We've reached the end of the course.
>
> **[0:02](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=2)** By now, we've talked about what SQL is and how to use it.
>
> **[0:07](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=7)** We've gone over some basic syntax to get information from a table and common functions to use that data.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=14)** Then we brought it all together in a web visualization project using Python.
>
> **[0:19](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=19)** We've done a lot, but this is only the beginning of incorporating SQL into your data driven web applications.
>
> **[0:27](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=27)** So where do we go from here?
>
> **[0:30](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=30)** If you're newer to data development, you should know that most calls to your data database occur on the backend.
>
> **[0:37](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=37)** So if you're interested in using SQL for web development, learning more about backend or even full stack web development may be a good idea.
>
> **[0:47](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=47)** Also, this course was a high-level overview.
>
> **[0:51](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=51)** You can create web apps to enter customers, update orders or allow customers to place their own orders but that's something we wouldn't do from a Jupyter Notebook.
>
> **[1:02](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=62)** To do that, you should learn more about how to incorporate other more advanced CRUD operations and these can get really complex.
>
> **[1:11](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=71)** Finally, there are a bunch of common relational databases used in web development.
>
> **[1:16](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=76)** There's PostgreSQL, SQLite, SQL Server, and that's not even scratching the surface.
>
> **[1:23](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=83)** Good news, most of the SQL syntax is the same in various database management systems but how you apply it changes depending on the database that you're using.
>
> **[1:33](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=93)** You can check out some of our other courses on LinkedIn Learning for a deeper dive into the differences and more advanced SQL operations.
>
> **[1:42](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=102)** SQL is still incredibly relevant and useful in both software and web development, analytics and data science.
>
> **[1:50](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=110)** Good SQL fundamentals is a must have for any developer and a great skill to add to your resume.
>
> **[1:56](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=116)** So congratulations!
>
> **[1:58](https://www.linkedin.com/learning/sql-for-data-analysis-22645200/leveling-up-sql?u=76281980&t=118)** Again, I'm Nakia Simpson and here's to many successful development projects using your new SQL skills.

> [!info]- Semantic Content
>
> **Env Vars:** sql (9), crud (1)
> **CLI Commands:** python (1)
> **Code Keywords:** finally, (1)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Speakers:** - we (1)


## Path Context

### In [[Explore a Career in SQL Development]]
← [[SQL Server Intelligence- Cracking the Code of Enterprise Data]] | **5 of 8** | [[SQL Hands-On Practice- Solve Business Problems]] →

### In [[Moving from Data Scientist to Data Analyst]]
**1 of 10** | [[R for Data Science- Analysis and Visualization]] →

### In [[Advance Your Business Analytics Skills]]
← [[Power BI Data Modeling with DAX]] | **6 of 11** | [[SQL Hands-On Practice- Solve Business Problems]] →

### In [[Advance Your Skills in SQL]]
**1 of 5** | [[SQL Hands-On Practice- Solve Business Problems]] →

## Appears In

- [[Explore a Career in SQL Development]]
- [[Moving from Data Scientist to Data Analyst]]
- [[Advance Your Business Analytics Skills]]
- [[Advance Your Skills in SQL]]

## Related Courses

_Courses sharing skills:_

- [[Intermediate SQL- Data Reporting and Analysis]] — SQL, Data Analysis
- [[Data Analysis- Investigate with SQL]] — SQL, Data Analysis
- [[Advanced SQL for Data Scientists]] — SQL, Data Analysis
- [[Intermediate Sql For Data Scientists]] — SQL, Data Analysis
- [[SQL for Healthcare Professionals]] — SQL, Data Analysis
