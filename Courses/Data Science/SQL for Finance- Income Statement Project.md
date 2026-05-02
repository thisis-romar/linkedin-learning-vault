---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: sql-for-finance-income-statement-project
url: "https://www.linkedin.com/learning/sql-for-finance-income-statement-project"
duration_minutes: 140
duration: 2h 20m
level: Intermediate
updated: 9/9/2024
learners: 154813
skills:
  - Financial Data
  - SQL
exercise_files: true
github: "https://github.com/LinkedInLearning/sql-for-finance-income-statement-project-4477127/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQE8r3Ie8UIPRQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726595619202?e=2147483647&amp;v=beta&amp;t=MnOPE2PxFxri-Y6olLZt3LphEnQ1RhZdySEppuOMT5U"
linkedin_topic: Data Science
learning_paths:
  - '[[SQL for Data Professionals in Finance]]'
prev_courses:
  - '[[From Excel to SQL]]'
path_nav: '[{"path":"SQL for Data Professionals in Finance","position":4,"total":4,"prev":"From Excel to SQL","next":null}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/financial-data
  - skill/sql
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/SQL%20for%20Finance-%20Income%20Statement%20Project.md)

![SQL for Finance: Income Statement Project](https://media.licdn.com/dms/image/v2/D560DAQE8r3Ie8UIPRQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726595619202?e=2147483647&amp;v=beta&amp;t=MnOPE2PxFxri-Y6olLZt3LphEnQ1RhZdySEppuOMT5U)

# SQL for Finance: Income Statement Project

> SQL is a powerful tool to have in your toolkit, when you need to create financial reports. How do you get started, though? In this course, data analytics expert Gabriela Baldivia Soncini guides you through the fundamental concepts of financial accounting via an income statement project. Learn how to extract data from a relational database, manipulate data using SQL queries, and transform the data.

> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-finance-income-statement-project) | 2h 20m | Intermediate | 155K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [The power of SQL in financial reports](#the-power-of-sql-in-financial-reports)
- [**1. Balance Sheets and Assets Accounts**](#1-balance-sheets-and-assets-accounts) (13 videos)
  - [Financial reports](#financial-reports)
  - [Understanding the project's data](#understanding-the-projects-data)
  - [Exploring the user case](#exploring-the-user-case)
  - [Cash Account, part 1: Using CTE](#cash-account-part-1-using-cte)
  - [Cash Account, part 2: Using CTE](#cash-account-part-2-using-cte)
  - [Cash Account, part 3: Union](#cash-account-part-3-union)
  - [Cash Account, part 4: Window function and materialized view](#cash-account-part-4-window-function-and-materialized-view)
  - [Creating the Accounts Receivable Account](#creating-the-accounts-receivable-account)
  - [Understanding Property Land and Equipment Account](#understanding-property-land-and-equipment-account)
  - [Window function and depreciation](#window-function-and-depreciation)
  - [Completing the depreciation transaction](#completing-the-depreciation-transaction)
  - [Challenge: Inventory Account](#challenge-inventory-account)
  - [Solution: Inventory Account](#solution-inventory-account)
- [**2. Balance Sheets: Liability and Owner's Equity Accounts**](#2-balance-sheets-liability-and-owners-equity-accounts) (5 videos)
  - [Building the Loan Account](#building-the-loan-account)
  - [Retained Earnings Account, part 1](#retained-earnings-account-part-1)
  - [Retained Earnings Account, part 2](#retained-earnings-account-part-2)
  - [Challenge: Retained Earnings Account](#challenge-retained-earnings-account)
  - [Solution: Retained Earnings Account](#solution-retained-earnings-account)
- [**3. Building the Balance Sheet**](#3-building-the-balance-sheet) (5 videos)
  - [Building the Assets section](#building-the-assets-section)
  - [Building the Liabilities section](#building-the-liabilities-section)
  - [Building the Owner's Equity section](#building-the-owners-equity-section)
  - [Challenge: Balance sheet year 1](#challenge-balance-sheet-year-1)
  - [Solution: Balance sheet year 1](#solution-balance-sheet-year-1)
- [**4. Income Statement**](#4-income-statement) (3 videos)
  - [Understanding the income statement](#understanding-the-income-statement)
  - [Challenge: Income statement](#challenge-income-statement)
  - [Solution: Income statement](#solution-income-statement)
- [**Conclusion**](#conclusion) (2 videos)
  - [Balance sheet and income statement considerations](#balance-sheet-and-income-statement-considerations)
  - [Your SQL journey](#your-sql-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The power of SQL in financial reports](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/the-power-of-sql-in-financial-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/the-power-of-sql-in-financial-reports?u=76281980&t=0)** - [Instructor] One of the most important reports in the financial world is the income statement.
>
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/the-power-of-sql-in-financial-reports?u=76281980&t=5)** Not only can an income statement shows a company's finances, but it helps a company and its employees plan for the future and scale their business for the long run.
>
> **[0:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/the-power-of-sql-in-financial-reports?u=76281980&t=16)** In this course, we will discover which reports and formats are required by the US general accepted accounting principles.
>
> **[0:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/the-power-of-sql-in-financial-reports?u=76281980&t=24)** We will create a balance sheet and an income statement and sharpen our knowledge of [[SQL]]'s incredible capabilities.
>
> **[0:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/the-power-of-sql-in-financial-reports?u=76281980&t=31)** Let's start this journey of learning how to create some of the most important financial reports that all companies needs.
>
> **[0:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/the-power-of-sql-in-financial-reports?u=76281980&t=38)** I am Gabriela Baldivia Soncini, I've been working with data, especially with SQL for over 10 years.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Env Vars:** sql (2)
> **Speakers:** - [instructor] (1)


### 1. Balance Sheets and Assets Accounts

[↑ Back to Table of Contents](#table-of-contents)

#### [Financial reports](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=0)** - [Instructor] Do you know what are the main accounting financial reports?
>
> **[0:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=4)** It's important to know that reporting has been standardized by US GAAP.
>
> **[0:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=10)** That stands for General Accepted Accounting Principles.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=14)** As opposed to cash-based accounting, US GAAP uses accrual accounting.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=21)** Accrual accounting records transactions when they happened, regardless of when they affect cash flow.
>
> **[0:28](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=28)** This difference will be essential when we define which records we will use.
>
> **[0:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=34)** So let's go through the main required [[Financial Statements]].
>
> **[0:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=38)** The first one, balance sheet.
>
> **[0:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=41)** The balance sheet shows the financial position at a specific point in time.
>
> **[0:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=47)** Income statement.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=48)** Income statement shows the result of operations over a period of time.
>
> **[0:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=54)** Third one, statement of cash flow.
>
> **[0:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=58)** The statement of cash flow shows the sources and uses of cash over a period of time.
>
> **[1:06](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=66)** Our course will cover the balance sheet and the income statement.
>
> **[1:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=72)** Our course will cover the balance sheet and the income statement.
>
> **[1:17](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=77)** Also, you'll be able to generate the cash flow on your own after this project.
>
> **[1:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=84)** You can find an example of a balance sheet in the course Exercise Files.
>
> **[1:28](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=88)** So let's start with understanding the balance sheet.
>
> **[1:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=92)** This is perhaps the most important financial statement that a company prepares.
>
> **[1:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=98)** Whenever we analyze a company's finances, we must specify a period of time.
>
> **[1:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=104)** Periods have beginnings and endings.
>
> **[1:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=107)** In a balance sheet, the company is pictured at the start of a chosen period.
>
> **[1:53](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=113)** A balance sheet summarizes the information about the company that has been accumulated since the inception.
>
> **[2:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=121)** The sections of the balance sheet are assets.
>
> **[2:06](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=126)** It is stuff that the company owns that's going to be beneficial to it at some point in time, for instance, buildings, cash, inventory.
>
> **[2:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=138)** Second, liability.
>
> **[2:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=141)** These are the company's debts, for instance, the amount owned to suppliers and loans from banks.
>
> **[2:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=149)** Last one, owner's equity.
>
> **[2:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=154)** It's the capital raised by the company.
>
> **[2:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=157)** It can be two types, capital stock, the amount of fund that the investors have invested in the company by giving the company cash in return of some stocks and returned earnings.
>
> **[2:50](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=170)** The company generates some earnings and retains the equity in its own business instead of paying it out to shareholders in dividends.
>
> **[3:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=181)** And we have the balance sheet equation.
>
> **[3:03](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=183)** We can tell wherever the company got its funds to invest in those assets by looking at liabilities and equity.
>
> **[3:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=192)** This is because a company's assets are equal to liabilities plus owner's equity.
>
> **[3:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=200)** After each transaction is logged in, the equation, assets equal liability plus owner's equity, must always be respected.
>
> **[3:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=211)** If the balance between the variables is not true, it means that something is wrong in the log transaction.
>
> **[3:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=218)** Now let's understand the income statement.
>
> **[3:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=221)** It shows the difference between the balance sheet at the beginning and the end of the period of time being analyzed.
>
> **[3:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=229)** The sections of the balance sheets are revenues, all cash receipts, expenses, all cash-out flows, and net earnings, which is revenue minus expenses, and result in increasing of owner's equity from the company's operation activities.
>
> **[4:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=251)** These reports are generally generated in the end of each year.
>
> **[4:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=256)** So we have covered the key elements of the balance sheet and income statement and all it sections as well.
>
> **[4:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=264)** Next, we will understand our fictitious case that will be setting for our project.
>
> **[4:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=272)** See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Financial Statements]] (1)
> **Env Vars:** gaap (2)
> **Definitions:** stands for (1), means that (1)
> **Analogies:** for instance (2)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Understanding the project's data](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=0)** - [Instructor] Through this course, we are going to work on a project together.
>
> **[0:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=4)** This is a practical project because I believe that learning needs to come together with practice.
>
> **[0:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=11)** And to [[Jetpack Compose|compose]] our business scenario, I created a department store, and in our database, we'll see [[Microsoft Products|products]] such as t-shirts, blouses and sweaters.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=21)** To illustrate the inputs and outputs of items, we have two tables.
>
> **[0:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=26)** The first of this is purchases with the record of purchases we make with product suppliers.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=32)** This way, we have products to sell.
>
> **[0:36](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=36)** The second table is sales, where all sales of products that we make to our customers are records, but a company cannot exist just by buying and selling goods.
>
> **[0:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=49)** So to support our company, in the first few years, we took out some loans.
>
> **[0:55](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=55)** To illustrate this, we have the loan table.
>
> **[0:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=59)** In addition, we have to make payments such as the sellers of our employees, the rent for the space we're using.
>
> **[1:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=67)** We can see these records in the payments table.
>
> **[1:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=72)** In this user case, we'll build a balance sheet and income statement reports, like we covered in our previous video.
>
> **[1:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=81)** First, we need to identify where the assets, liabilities, and owners' equity are in our tables, so that we can build the balance sheet sections.
>
> **[1:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=92)** To help us separate all the records in our database in a way that makes sense, we need to create accounts for which type of transaction.
>
> **[1:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=101)** For example, fiscal money is a specific type of asset, so to make it easier to identify the transactions involving physical money, we need to create an account called cash account.
>
> **[1:57](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=117)** We'll do this for each type of transaction within each section of the balance sheet.
>
> **[2:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=124)** We also need to understand when to consider a transaction to be added or to be reduced from each account.
>
> **[2:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=131)** To do this, we need to follow four guidelines.
>
> **[2:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=136)** The first one, the accounts that are affected.
>
> **[2:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=140)** We need to understand which accounts are being affected.
>
> **[2:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=143)** The second is the type of account that we are talking about.
>
> **[2:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=147)** Either it's asset liability or owner's equity.
>
> **[2:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=151)** The third, whether the accounts increase or decrease.
>
> **[2:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=157)** And fourth, the dollar amount.
>
> **[2:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=160)** These four guidelines are extremely important since we will revisit them later in the course.
>
> **[2:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=167)** Now, that we understand the types of transactions and when they should be records, in the next video, we'll understand the scenario and all the transactions we need to consider and how these transactions affected the accounts.
>
> **[3:02](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=182)** See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[Jetpack Compose|Compose]] (1)
> **CLI Commands:** make (4)
> **Cross-References:** we covered (1), previous video (1), later in (1), in the next (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Exploring the user case](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/exploring-the-user-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/exploring-the-user-case?u=76281980&t=0)** - [Narrator] For this course, we will explore a scenario of a fictional company.
>
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/exploring-the-user-case?u=76281980&t=5)** Let's take some time to understand this scenario.
>
> **[0:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/exploring-the-user-case?u=76281980&t=8)** We have five large blocks of transactions.
>
> **[0:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/exploring-the-user-case?u=76281980&t=12)** First, we take out loans from the bank to start the company.
>
> **[0:17](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/exploring-the-user-case?u=76281980&t=17)** When we take out loans, two accounts are affected.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/exploring-the-user-case?u=76281980&t=22)** First, a cash account is created to receive the money from the loan.
>
> **[0:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/exploring-the-user-case?u=76281980&t=25)** The cash is an asset type of account.
>
> **[0:28](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/exploring-the-user-case?u=76281980&t=28)** Then a loan type account, which is a liability, is created to signal that a loan has been made and we owe that money to the bank.
>
> **[0:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/exploring-the-user-case?u=76281980&t=38)** When we pay the loan, we have a reduce in the cash and a reduce in the loan account.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [narrator] (1)

#### [Cash Account, part 1: Using CTE](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=0)** - [Instructor] The time has come to learn about one of the most powerful statements in [[SQL]], the [[CTE]].
>
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=5)** I personally love this statement because it helps me to solve the most complex problems.
>
> **[0:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=11)** The strategy I use is to break something complex into small, easy parts.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=15)** When I first learned it, it changed my life.
>
> **[0:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=18)** And in this course, it will change your life too, believe me.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=21)** So let's start with the what.
>
> **[0:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=24)** What is CTE?
>
> **[0:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=26)** CTE stands for [[CTE|common table expression]].
>
> **[0:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=29)** And what is important for you to understand is that subqueries only exist during the process.
>
> **[0:36](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=36)** In other words, after securing our query, all subqueries that are created in CTE structured are deleted, leaving only the output.
>
> **[0:45](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=45)** And the key point of CTE is to help you divide queries.
>
> **[0:50](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=50)** This way you can break the process into parts to make it easier to build a large and complex query.
>
> **[0:56](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=56)** So let's start to build the cash account.
>
> **[1:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=60)** Remember that basically all the transactions affect the cash account.
>
> **[1:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=64)** In our scenario, we have five events: loan in, purchase of inventory, purchase of equipment, sale of [[Microsoft Products|products]], and payments of expenses such as rent, loans, interest of loans, and so on and so forth.
>
> **[1:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=80)** Another fundamental point is to define the time range that our reports will cover.
>
> **[1:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=85)** As financial reports are normally made at the end of the year, let's define a calendar year.
>
> **[1:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=91)** Perhaps your thoughts have already started thinking about the steps necessary to bring this report.
>
> **[1:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=97)** To facilitate our train of thought, allowing us to break down data process into stages, we'll use CTE.
>
> **[1:45](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=105)** The CTE will allow us to create several queries which we'll use to deal with the particularities of all the tables that make up the cash account.
>
> **[1:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=114)** So let's start by treating the products we buy from suppliers.
>
> **[1:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=118)** This information is in the purchase table.
>
> **[2:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=121)** We need to process the purchase date before entering the data into the purchase account.
>
> **[2:06](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=126)** This is because when we buy or sell something, you can buy or sell it using cash or credit card.
>
> **[2:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=133)** When we sell or buy using credit card, payment is generally in the following month.
>
> **[2:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=139)** So to understands the cash outflow, we first need to adjust the payment date to the actual date the money left, or enter our cash register, which is the month following payment.
>
> **[2:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=150)** So let's go and get to the code because I'm sure you'll be as fascinated as I was when I learned CTE.
>
> **[2:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=157)** Okay, let's start by creating a SQL file, clicking here.
>
> **[2:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=162)** Okay, now let's start the CTE with the with command, with.
>
> **[2:50](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=170)** Okay, now we put the name we want for our first CTE query.
>
> **[2:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=174)** In our case, let's call it purchase_dates.
>
> **[2:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=179)** Okay, and then call as, and open and close parentheses together is a very good tip because everything that opens has to close.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=190)** And after opening many parentheses, it can get confusion, which one we already close, which one are still open.
>
> **[3:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=196)** So to avoid confusion, it's best to open and close together.
>
> **[3:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=200)** Okay, so after that, let's go back inside the parentheses, press Enter to make it clear where we are, and then we can continue our query.
>
> **[3:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=209)** First, we need to select the month, but we need to process it according to the type of payment method.
>
> **[3:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=218)** To do this, we'll use the case expression.
>
> **[3:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=222)** So we start case, then we put the first conditional: when payment_method is equal cash.
>
> **[3:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=234)** Okay, then we want the payment_at.
>
> **[4:02](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=242)** As we only have two types of payment here, let's go straight to the else.
>
> **[4:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=247)** So if the payments type is not cash, if the payments type is credit card, then we have the payment_at and it needs to be increased by an interval of one month.
>
> **[4:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=265)** Okay, and to finish the case, we add end in the end.
>
> **[4:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=271)** And now we can name this column as actual_payment_at.
>
> **[4:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=278)** Perfect.
>
> **[4:39](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=279)** Now remember that when we buy inventory, this is an outflow of money from our cash flow.
>
> **[4:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=286)** So the sign here is negative.
>
> **[4:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=289)** Now, let's sum the quantity plus the amount, and let's call this field as total_amount.
>
> **[5:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=300)** Okay, all these fields are from the table purchases.
>
> **[5:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=307)** Great.
>
> **[5:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=309)** Okay, as we have one of the five mathematical aggregation functions, in our case, the sum here, we must use the group by.
>
> **[5:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=321)** So group by and what we're going to group our sum by.
>
> **[5:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=326)** Let's group by all the fields that are in the select that does not have an aggregation function on it, which is in our case, the case extraction.
>
> **[5:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=338)** So let's copy this code until here.
>
> **[5:43](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=343)** Remember not to rename the fields in the where or in the group by.
>
> **[5:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=347)** So let's copy the case until the end.
>
> **[5:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=351)** Copy and paste in the group by.
>
> **[5:55](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=355)** Okay, now to see our query running, let's go outside the parenthes and let's select all the fields from purchase_dates.
>
> **[6:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=365)** 'Cause now within the CTE, we can reuse this to be query purchase dates and any other we create whenever want in the CTE.
>
> **[6:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=373)** So now let's select all the code with Control + A and with Control + Enter let's run the query.
>
> **[6:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=380)** Perfect, we have the actual payment_at and the total_amount.
>
> **[6:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=385)** But what we want here is to group the total amount per year.
>
> **[6:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=390)** So let's continue this query in the next video where we build others sub queries in the same CTE structure.
>
> **[6:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=397)** See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE]] (13), [[SQL]] (2), [[Microsoft Products|Products]] (2), [[CTE|Common table expression]] (1)
> **Env Vars:** cte (13), sql (2)
> **Code Identifiers:** payment_at (3), purchase_dates (2), total_amount (2), payment_method (1), actual_payment_at (1)
> **Definitions:** stands for (1), in other words (1), is a  (1), is an  (1)
> **CLI Commands:** make (3)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)

#### [Cash Account, part 2: Using CTE](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=0)** - [Instructor] In this video, we will continue building the cash account using [[CTE]].
>
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=5)** In the last video, we started treating the inventory purchased.
>
> **[0:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=8)** We identified when the payment was made by credit card and added one month to find the correct month the money left our account.
>
> **[0:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=16)** Now, we need to group the total amount by year.
>
> **[0:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=20)** So, let's go get to the code.
>
> **[0:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=23)** Okay, now we need to create a new subquery.
>
> **[0:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=25)** To do that, let's add a comma, go to the next row, and our new subquery will be called purchase.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=32)** Okay, as, open and close parentheses, and go to the next row.
>
> **[0:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=37)** Now, we will select the date_part of actual_payment_at, and let's call that period_year.
>
> **[0:50](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=50)** Oh, I have a typo here, actual_payment_at.
>
> **[0:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=54)** Okay, now let's add a comma here to signalize that we have a new column in the select.
>
> **[1:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=60)** And now, let's sum the total_amount and call this field total_amount.
>
> **[1:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=68)** All these fields are from the table, purchase_dates.
>
> **[1:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=74)** Okay, and now, we have a mathematical aggregation function.
>
> **[1:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=78)** And so, we are forced to add the group by.
>
> **[1:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=83)** We need to add a group by with all the fields that are in the select and do not have a mathematical aggregation function, which is the date_part.
>
> **[1:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=92)** Always remember to remove the name of the fields in the where and in the group by.
>
> **[1:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=97)** So, we are going to copy the fields just until the parenthesis.
>
> **[1:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=102)** Copy and paste here in the group by.
>
> **[1:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=106)** Now, let's see how it's going.
>
> **[1:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=109)** Let's call the purchase_table.
>
> **[1:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=111)** Control + A and and Control + Enter to run the query.
>
> **[1:55](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=115)** Oh, we have a issue here in the purchase.
>
> **[1:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=119)** Oh, we need to call here the year of the actual_payment_at.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=127)** So here and here, we need the year.
>
> **[2:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=131)** Again, select all and Control + Enter.
>
> **[2:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=136)** Okay, this is the output of our query.
>
> **[2:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=139)** We have the total_amount grouped by period_year.
>
> **[2:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=143)** Excellent.
>
> **[2:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=146)** Now, let's close these tabs.
>
> **[2:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=150)** And now, let's copy these two temporary tables, purchase_dates and purchase.
>
> **[2:36](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=156)** I will add a comma here and I will paste these two tables in the next row.
>
> **[2:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=161)** Now, let's make some changes in the pasted tables.
>
> **[2:45](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=165)** This is because the sales table will require exactly the same treatment, but some names will change.
>
> **[2:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=171)** So, let's make the small changes.
>
> **[2:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=174)** First, we need to change the names from purchase to revenue in both table, so I will change to revenue here.
>
> **[3:03](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=183)** I will copy and I will paste here and here.
>
> **[3:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=188)** I will also paste here.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=190)** Okay.
>
> **[3:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=191)** Now, in revenue_dates, let's delete the negative sign in the total_amount field, since revenue is an inflow of money into the cash account.
>
> **[3:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=201)** And in addition, in the total_amount, we will change the name of the amount field to price.
>
> **[3:28](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=208)** So, let's change here to price.
>
> **[3:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=211)** Now, all that's left is to change the name of the table in the from, from purchase to sales.
>
> **[3:39](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=219)** Wonderful.
>
> **[3:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=220)** We already handle both inventory transactions of purchase and sales.
>
> **[3:45](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=225)** Let's run the query to see our revenue.
>
> **[3:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=229)** Great, that's exactly what we need.
>
> **[3:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=232)** Let's close this tab again.
>
> **[3:55](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=235)** Now, let's move on to our next transaction that affect the cash account.
>
> **[4:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=240)** The next transaction is the acquisition of money for loan, so we will call our next big query as loan_in.
>
> **[4:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=251)** Okay.
>
> **[4:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=252)** The loan treatment is very similar to the treatment of revenue and purchases.
>
> **[4:17](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=257)** To begin, let's select the date_part of year of loan_at, and let's call this field period_year.
>
> **[4:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=271)** Let's add a comma to signalize that we have another field in the select.
>
> **[4:36](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=276)** And now, let's sum the field value, and call it total_amount.
>
> **[4:43](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=283)** These fields are from the table loans.
>
> **[4:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=286)** We have a sum, so we must use now the group by.
>
> **[4:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=292)** We will copy the date_part in the select and paste in the group by since it's the only field besides the sum in the select.
>
> **[5:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=301)** Now, let's see what the loan_in table looks like.
>
> **[5:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=304)** So, let's put loan_in, Control + A and Control + Enter.
>
> **[5:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=311)** Again, that's our table.
>
> **[5:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=314)** It looks exactly how we need it.
>
> **[5:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=316)** Great.
>
> **[5:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=318)** Now, we can close this tab.
>
> **[5:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=320)** Our last big query will be called expenses.
>
> **[5:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=326)** This is because we are going to include here all the expenses we have in the payments table.
>
> **[5:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=332)** So let's copy the loan_in query and paste here in the expenses to make some changes.
>
> **[5:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=341)** To start, let's change the loan_at to payment_date.
>
> **[5:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=346)** So, payment_date.
>
> **[5:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=349)** I will copy here and paste here.
>
> **[5:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=352)** Now, let's change the sign of the metric to negative, since expenses is money leaving our company.
>
> **[6:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=360)** And also, let's change from value to amount here in the total_amount field.
>
> **[6:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=367)** Great.
>
> **[6:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=368)** Our next change is change from table loans to table payments.
>
> **[6:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=375)** Now, let's also add a filter and the condition to the filter is where payment_type is in.
>
> **[6:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=387)** We have some types here.
>
> **[6:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=390)** Equipment, wage, rent, utility, tax, loan, and finally, interest.
>
> **[6:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=407)** That's it.
>
> **[6:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=409)** We've finished dealing with expenses.
>
> **[6:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=411)** Let's take a look at the table.
>
> **[6:55](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=415)** Great work.
>
> **[6:56](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=416)** Now that we have structured tables of all transactions that affect the cash account, in the next video, we will learn how to unite all this data using union all.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE]] (1)
> **Code Identifiers:** total_amount (7), date_part (4), loan_in (4), actual_payment_at (3), period_year (3)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** go to (2), select the (2)
> **Cross-References:** in the next (2), in the last (1)
> **Env Vars:** cte (1)
> **Definitions:** is an  (1)
> **Best Practices:** remember to (1)

#### [Cash Account, part 3: Union](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=0)** - [Instructor] Now we'll learn how to use and how to differentiate the UNION and UNION ALL.
>
> **[0:06](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=6)** We'll use it to build the cash account.
>
> **[0:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=9)** Now we have the table purchase, revenue, loan, and expenses.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=14)** And we'll use [[SQL]]'s UNION statements to unify all those tables to create the cash account.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=21)** The UNION statement joins the rows of one table and stacks the rows of the second table at the end.
>
> **[0:28](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=28)** Let's understand the difference between JOIN and UNION statement.
>
> **[0:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=33)** In JOIN, we add new columns to the table.
>
> **[0:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=37)** We take columns from one table and add them to the other as if we are adding more details to already existing data.
>
> **[0:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=47)** There is a particular type of JOIN called CROSS JOIN that increase the number of rows as well, but we'll handle that later.
>
> **[0:56](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=56)** On the other hand, UNION doesn't increase the number of columns.
>
> **[1:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=61)** That is the amount of details in each rows remains the same.
>
> **[1:06](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=66)** What we do here is increase the number of total rows in the table and there is two different types of UNION.
>
> **[1:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=74)** The UNION itself and the UNION ALL.
>
> **[1:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=78)** Let's dive to better understand it.
>
> **[1:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=81)** So let's create a SELECT of two fields here.
>
> **[1:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=85)** The first field is number one and I will call it as number_x.
>
> **[1:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=92)** The second field will be the letter A, and I will call it letter_x.
>
> **[1:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=100)** Now, I will copy the SELECT and I will paste here after the UNION.
>
> **[1:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=109)** All right, now, if you run this query, you can see that we have only one row, but we have two SELECTs so we should have two rows.
>
> **[2:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=121)** Where is the second row?
>
> **[2:03](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=123)** Well, the UNION keeps only different rows.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=127)** Let's try to change the letter_x in the second SELECT by B.
>
> **[2:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=136)** Let's run it again.
>
> **[2:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=139)** Now we can see that we have two rows and that's because in one of the columns, the content is different.
>
> **[2:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=146)** So now it is clear that the entire row in all columns must be equal to be considered just one by the UNION statement.
>
> **[2:35](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=155)** Let's close these tabs.
>
> **[2:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=158)** Okay, now in this same query, let's add ALL here.
>
> **[2:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=164)** And also, let's go back the letter B to A and let's run this query again.
>
> **[2:53](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=173)** Now our output has two identical rows.
>
> **[2:57](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=177)** This is because UNION ALL joins all rows regardless of whether they're repeated or not.
>
> **[3:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=184)** Perfect, we need to understand that to finish our cash account.
>
> **[3:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=188)** Okay, let's close the tab and the script.
>
> **[3:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=192)** We don't need to save it and let's go back to our cash account.
>
> **[3:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=196)** Now let's create a new subquery called cash_union.
>
> **[3:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=203)** We'll do exactly what we just learned.
>
> **[3:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=207)** Now let's select all the fields from loan-in.
>
> **[3:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=214)** Now we need to UNION ALL with the SELECT of all fields from expenses.
>
> **[3:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=224)** Okay at this point, we can copy the UNION and the SELECT so you don't have to type everything over and over again.
>
> **[3:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=232)** So now let's UNION ALL with SELECT of all fields from the table purchase.
>
> **[4:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=240)** And again, let's UNION ALL SELECT of all fields from the table revenue.
>
> **[4:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=248)** Let's visualize this table.
>
> **[4:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=250)** So let's SELECT here all tables from cash_union.
>
> **[4:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=255)** Select all code, Control + A, and Control + Enter to run the query.
>
> **[4:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=261)** Amazing, now we can close this tab and go back to our query.
>
> **[4:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=266)** Okay, now we can create a new SPID query and call it cash_amount.
>
> **[4:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=273)** Okay, now what we want to do here is summarize the values by period_year from all these different tables.
>
> **[4:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=282)** So let's select period_year, and let's sum(total_amount) and call it total_amount from the table cash_union.
>
> **[4:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=299)** And since you have a sum, we need to group by period_year.
>
> **[5:06](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=306)** Okay, now let's see how this table is doing.
>
> **[5:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=310)** Let's select all from cash amount and run it.
>
> **[5:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=314)** Great, now we have all the values summarized by period_year.
>
> **[5:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=319)** So in a nutshell, we just learned the difference between UNION and JOINs.
>
> **[5:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=324)** While JOINs, with the exception of CROSS JOIN, should only add columns to the table, UNION only add rows.
>
> **[5:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=334)** And we also learned that UNION ALL joins all rows together and UNION only joins rows with different content.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** union (21), select (8), join (5), cross (2), sql (1)
> **SQL:** select (8), join (5)
> **Code Identifiers:** period_year (4), cash_union (3), total_amount (2), cash_amount (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Cash Account, part 4: Window function and materialized view](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=0)** - [Instructor] We have now reached the end where we'll finish building the cash account.
>
> **[0:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=4)** I know the treatment's quite extensive, but the cash account is the most extensive account.
>
> **[0:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=9)** I wanted to start with this one because I wanted to show you the power of the CT.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=13)** In last video, we ended up with the value summarized by year period, but there is a big leap here.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=21)** In the first year, the balance starts with zero, so just use the amount transacted in that period to find the account value.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=30)** But in all the other periods, we need to consider the value resulting from the previous period, and iterate it to the current transactions to reach the correct value for the cash account.
>
> **[0:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=42)** Always remember that balance sheet is a photo from the company's conception to the current moment, so the entire past must be considered.
>
> **[0:53](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=53)** And there is an easy way to iterate values, which is using window function.
>
> **[1:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=60)** We have a hypothetical table with three fields, year, client and value.
>
> **[1:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=68)** Here we are creating a field with the sum of the value over order by year.
>
> **[1:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=75)** In other words, the table is ordered by the year field, and then it sends row by row according to the year field.
>
> **[1:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=83)** After sorting, the sum resulting is the sum of the result of the previous line with the value of the current line.
>
> **[1:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=90)** So for example here, the first row is seven.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=95)** Since there's not a previous one to be combined with, the result is itself seven.
>
> **[1:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=101)** For Chris's line, the result of the top line is seven, the seven is added to the Chris 2, and result is nine.
>
> **[1:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=111)** In Joel's line, the result of the previous line, which is nine, the nine is added to five, the current value, and the result is 14.
>
> **[2:02](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=122)** This is exactly what we need to do in our cash account.
>
> **[2:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=125)** So let's go to the code.
>
> **[2:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=129)** As we are now building our final table, we don't need to create a temporary table, we go straight to the final query.
>
> **[2:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=136)** So let's erase this part here.
>
> **[2:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=139)** So let's select period_year, and let's add a manual field here called cash, and call it account.
>
> **[2:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=149)** Also, I will bring the field total amount and call it original.
>
> **[2:36](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=156)** And now we need to sum the total amount, total amount, but we need to sum over a specific order, which is iterating over, order by, period_year.
>
> **[2:57](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=177)** Let's call that total_amount.
>
> **[3:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=181)** These fields are from the table cash_amount.
>
> **[3:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=187)** Okay, now let's select our query and run it.
>
> **[3:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=191)** Okay, now you can compare the original and the total amount, where the total amount is iterating the original value.
>
> **[3:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=201)** So now can you see that the value from the year 2021 has been added to the year 2022 in the total_amount field?
>
> **[3:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=210)** Now that we can compare the results, I hope that it became easier to understand what [[SQL]] is doing here.
>
> **[3:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=217)** In 2021, the original value is 320,000.
>
> **[3:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=222)** As there is no previous value, our new field, the total amount, receives the same value.
>
> **[3:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=228)** In 2022, we have 104,000, in 2022, which is added to the 328,000, and the result is 432,000.
>
> **[4:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=244)** Incredible, isn't it?
>
> **[4:06](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=246)** You just learned an advanced and widely used SQL too, the window function.
>
> **[4:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=251)** And important to tell you is that when we use the over function, we cannot use the group by, since the over function is indicating how the aggregation function, sum, will behave.
>
> **[4:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=265)** So, let's close this tab, and let's erase this original field, because we don't need it.
>
> **[4:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=271)** Here, we add the long process of setting up the cash account.
>
> **[4:35](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=275)** This took more than 60 lines of code.
>
> **[4:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=278)** I hope you're proud of having made it this far.
>
> **[4:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=282)** And now, let's transform this results table that we created into a materialized view.
>
> **[4:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=288)** The difference between a view and a materialized view, is that every time we call a view, it's rebuilt at the query time.
>
> **[4:56](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=296)** So, if you use a view in the from, or in the join, it's calculated all over again.
>
> **[5:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=304)** The materialized view, it stores the query data and does not run new data, unless you ask it to run it again and update the data.
>
> **[5:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=313)** So, to create the materialized view, let's go to the first line of our file before the width command, and here, let's type, create, materialized, view, account_cash, as.
>
> **[5:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=333)** That's it.
>
> **[5:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=334)** Now we can select all and run over again, and successful, we have now created a new materialized view, account_cash.
>
> **[5:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=349)** And now that we finished the cash account script, let's hit the X here, and the VS code, it will ask us if we want to save the script.
>
> **[5:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=358)** Yes, let's save it.
>
> **[6:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=360)** Now let's rename it account_cash and hit okay.
>
> **[6:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=367)** And now if you came here in the explorer, you can see the account_cash script.
>
> **[6:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=374)** Awesome.
>
> **[6:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=376)** Now let's do this to create all the accounts we need.
>
> **[6:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=379)** From now on, the next treatments will be much simpler and easier, the difficult part's over.
>
> **[6:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=386)** In the next video, we will build the missing assets account.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Code Identifiers:** account_cash (4), period_year (2), total_amount (2), cash_amount (1)
> **Definitions:** is a  (2), is an  (1), in other words (1)
> **Env Vars:** sql (2)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Tools:** vs code (1)

#### [Creating the Accounts Receivable Account](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=0)** - [Instructor] We will now create our second asset account, which we'll refer to the sales we made, but we have not yet received the money for the [[Microsoft Products|products]] delivered, which is the account receivable.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=13)** In our scenario, we only have this type of case in December when we make sales via credit card.
>
> **[0:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=20)** This query is so small that we don't even need a [[CTE]].
>
> **[0:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=24)** This query is very direct.
>
> **[0:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=27)** So, let's go to the code.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=30)** Let's create a new file here in PL/[[SQL]].
>
> **[0:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=34)** Yeah, now we have a new file, and let's start selecting the date_part of payment_at, and let's call that period_year.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=48)** Okay.
>
> **[0:50](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=50)** And now, we will add a manual field here called Accounts Receivable, and lets call that account.
>
> **[0:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=59)** And for our last field, lets sum price multiplied by quantity, and let's.
>
> **[1:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=70)** Oh, price. I have a typo here, it's price.
>
> **[1:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=75)** And let's call that total_amount.
>
> **[1:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=79)** All these fields are from the table, sales.
>
> **[1:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=85)** And now, we need to make a filter because we don't want the entire table, just the records where payment method is different from cash.
>
> **[1:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=94)** So, where payment_method is different from cash.
>
> **[1:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=102)** And also, we want the date_part of month of payment_at to be equal 12, which is December.
>
> **[1:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=118)** And now, we need to group by all the fields that are in the select and that do not have a mathematical aggregation function.
>
> **[2:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=128)** That is, the date_part.
>
> **[2:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=130)** So, let's copy it here.
>
> **[2:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=132)** Copy the date_part year of payment_at.
>
> **[2:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=139)** So, let's copy this part here and let's paste here.
>
> **[2:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=144)** We don't need to group the manual field, Accounts Receivable.
>
> **[2:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=149)** That's because this field does not exist in the table, sales, so it's not a problem for us.
>
> **[2:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=157)** Okay, now we're ready.
>
> **[2:39](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=159)** Let's select all with Control + A and Control + Enter to run.
>
> **[2:45](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=165)** Perfect. We have our accounts receivable.
>
> **[2:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=169)** Now, we just need to close this tab and go to the first line of our code to create our materialized view.
>
> **[2:57](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=177)** So, create materialized view account_accounts_receivable as.
>
> **[3:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=187)** Let's select all the code and let's run.
>
> **[3:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=191)** Sweet, we have just created our second asset account.
>
> **[3:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=194)** Great work.
>
> **[3:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=196)** And now that we've finished the accounts receivable account script, let's click in the X to close the script, and the VS Code will ask us if you want to save the script.
>
> **[3:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=206)** Let's hit yes.
>
> **[3:28](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=208)** Now, let's rename it to account_accounts_receivable and let's hit OK.
>
> **[3:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=217)** Now, our script is saved.
>
> **[3:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=220)** Now if you came here to explorer, you can see the account_accounts_receivable script.
>
> **[3:45](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=225)** Awesome.
>
> **[3:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=226)** Let's move on to our next video where we will create the proper planning equipment account together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[CTE]] (1), [[SQL]] (1)
> **Code Identifiers:** date_part (4), payment_at (3), account_accounts_receivable (3), period_year (1), total_amount (1)
> **CLI Commands:** make (2)
> **Env Vars:** cte (1), sql (1)
> **UI Navigation:** go to (2)
> **Cross-References:** next video (1)
> **Tools:** vs code (1)
> **Speakers:** - [instructor] (1)

#### [Understanding Property Land and Equipment Account](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=0)** - [Instructor] We have just created our second asset account.
>
> **[0:03](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=3)** So now it's time for the property, land, and equipment account.
>
> **[0:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=8)** When we buy equipment, or properties from the company, they became assets.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=13)** However, we need to consider the depreciation of the equipment.
>
> **[0:17](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=17)** That is, how much money we lose within the depreciation of that product.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=22)** So we have some points to consider here.
>
> **[0:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=26)** The transactions, we need to consider the purchase and the sale of land and equipment.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=32)** And the depreciation, we need to consider the depreciation of the equipment.
>
> **[0:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=37)** Land property is not considered depreciation because the value of land or property can even increase over time.
>
> **[0:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=44)** Unlike a machine that has a useful lifespan.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=48)** We will work again with [[CTE|CTEs]] to develop this query, which will be more extensive and we'll have to consider several aspects.
>
> **[0:57](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=57)** Here we'll need to use cross join.
>
> **[1:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=61)** What cross join does is add all rows from one table to each row of another.
>
> **[1:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=68)** So in this example, we have the table of clients and the table of movies.
>
> **[1:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=74)** When we cross join them we have every movie to every client.
>
> **[1:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=79)** This is what we will do in the depreciations treatment.
>
> **[1:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=84)** So let's just start dealing with depreciation.
>
> **[1:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=87)** This is the most complex part of the query.
>
> **[1:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=90)** So let's go to the code.
>
> **[1:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=93)** To calculate depreciation, we first need to understand how long the equipment be analyzed will last.
>
> **[1:39](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=99)** In our scenario let's imagine that we expect the equipment to last 10 years before needing a replacement.
>
> **[1:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=107)** So we need each piece of equipment to be duplicated to have one line per month.
>
> **[1:53](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=113)** To do this, we cross join the purchase table with the calendar table.
>
> **[1:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=119)** The calendar table is a table that has the first date of each month and it has 50 years of dates.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=127)** So let's start by creating a new [[SQL]] file.
>
> **[2:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=131)** Let's click here.
>
> **[2:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=133)** Okay, now let's start our [[CTE]] with the width.
>
> **[2:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=139)** Now let's rename our first query depreciation dates.
>
> **[2:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=147)** So let's start by selecting the ID field, which refers to the purchase code.
>
> **[2:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=154)** Now we have the payment date, which is the purchase date.
>
> **[2:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=161)** Now let's add calendar at to compare the days between payments and the calendar table.
>
> **[2:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=168)** And to finish, let add year from the table calendar, and let's rename this field as period year.
>
> **[2:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=179)** Okay, let's select from calendar table.
>
> **[3:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=185)** And now let's cross join with payment table.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=190)** Let's also filter the ID one so we can see what's happening with the table.
>
> **[3:17](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=197)** Now let's select all the fields from depreciation dates and let's run this query.
>
> **[3:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=206)** Depreciation dates.
>
> **[3:28](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=208)** Okay, so we are filtering here the ID one, which means that we should have only one row, but we can see that one payment row from the payments table turn it into 360 rows here.
>
> **[3:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=227)** That's because it's the numbers of row from the calendar table.
>
> **[3:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=232)** We can see that we have just one payment date to all the calendar dates.
>
> **[3:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=239)** This is not what we want.
>
> **[4:02](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=242)** So let's close this tab and let's filter the year so that we only have month and year within the 10 years range of depreciation.
>
> **[4:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=250)** And of course, filter the payment type equal equipment because we don't have property here in depreciation.
>
> **[4:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=258)** Let's start doing that.
>
> **[4:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=260)** Let's filter calendar at greater or equal to payment date and calendar at less or equal to payment date plus interval of 10 years.
>
> **[4:43](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=283)** And also, let's add here a filter of payment type equal equipment.
>
> **[4:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=291)** Now let's run the query again.
>
> **[4:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=294)** Great.
>
> **[4:55](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=295)** We have here the ID 66 and 67.
>
> **[4:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=299)** Let's filter also the ID 66.
>
> **[5:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=305)** Run again.
>
> **[5:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=307)** Okay, now you can see that this unique equipment has only 120 rows instead of 360.
>
> **[5:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=318)** That's great.
>
> **[5:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=319)** This is exactly what we want.
>
> **[5:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=321)** Perfect.
>
> **[5:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=322)** Let's close the tabs and continue our query.
>
> **[5:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=327)** Another resource we need is a flag so we know when is the end of the year or the last month of usage of the equipment.
>
> **[5:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=334)** So let's create this flag here.
>
> **[5:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=338)** This is because if I buy equipment in March, its depreciation in the first year is equal to nine months, which is the difference in months between March and December.
>
> **[5:50](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=350)** In the following years, the depreciation will be 12 months until the year in which the equipment turns 10 years old, which will be two months referring to January and February, as in March, it values zero and it's unusable, its extinguished.
>
> **[6:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=369)** To create this flag, we'll use the case statement.
>
> **[6:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=374)** So when year is equal date part, year of payment date plus interval of 10 years, and here and month equal date part month of payment date, then we mark 1.
>
> **[6:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=407)** because this is the last cycle of depreciation.
>
> **[6:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=411)** The second case is to point out that every month, 12, before the last year must be indicated as the month of effective depreciation.
>
> **[7:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=421)** So when month is equal to 12, then 1.
>
> **[7:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=431)** the other cases are months in the middle of the cycle.
>
> **[7:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=435)** And for all those cases, we'll point to zero, so else zero.
>
> **[7:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=441)** And then, and to finish this case, and let's call this field flag 1 year.
>
> **[7:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=450)** Also, let's bring the amount field.
>
> **[7:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=454)** Now let's select our query and run it again to see the result.
>
> **[7:39](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=459)** Okay, now let's close this tab.
>
> **[7:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=461)** And now that you understood the dynamic of the dates, I'm going to remove this payments date here from the select because we don't need it anymore and we'll focus on the metric.
>
> **[7:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=472)** Right, we are ready to work on the depreciation metric, and that's what we're going to do in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE|Ctes]] (1), [[SQL]] (1), [[CTE]] (1)
> **Definitions:** is a  (2), refers to (1), means that (1)
> **Env Vars:** sql (1), cte (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Window function and depreciation](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=0)** - [Instructor] In this video, we'll work on the depreciation metric.
>
> **[0:03](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=3)** We'll calculate it from scratch, and to do this, we'll use window function again.
>
> **[0:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=10)** Let's take a look at our table and remember what it looks like.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=14)** So let's go to our code.
>
> **[0:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=18)** The table has the interval we need to calculate depreciation, which is every month between the purchase date and completing 10 years and one month.
>
> **[0:28](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=28)** What is depreciation?
>
> **[0:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=30)** Let's go back to the slides.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=32)** Well, depreciation is the total value of the item divided by the time we expected to be able to use it.
>
> **[0:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=40)** As we expect to use our item for 10 years.
>
> **[0:43](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=43)** This means that in 10 years and one month, the purchase price minus the depreciation value will be equal to zero.
>
> **[0:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=51)** In other words, the item will no longer be worth anything and will no longer be useful to us.
>
> **[0:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=58)** So now we need to know how many rows are in each equipment purchase.
>
> **[1:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=65)** Knowing how many months we have, we can use this to divide by the amount paid and identify how much value each equipment lose per month.
>
> **[1:17](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=77)** To do this, we'll learn how to use the partition by command, which is used with the over to define the behavior of the aggregation function.
>
> **[1:28](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=88)** So let's take this table as an example.
>
> **[1:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=91)** In the over partition by year tab.
>
> **[1:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=94)** Here, you can see a table with year customer value and the sum of the value over partition by year.
>
> **[1:45](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=105)** This means that only the values from the same year will be added together, and this result will be in all rows for that specific year.
>
> **[1:55](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=115)** So here, for example, we have the year 2021, and we have seven for Jess, two for Chris and five for Joel.
>
> **[2:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=125)** If we sum seven with two, we have nine.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=127)** If we sum nine with five, we have 14 and we have 14 to all rows for 2021 independently if it's Jess, Chris, or Joel, the sum is for the year.
>
> **[2:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=143)** The same process will occur for all other years.
>
> **[2:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=147)** Now thinking about our problem, let's go back to our code.
>
> **[2:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=152)** Let's close this tab here.
>
> **[2:35](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=155)** Now thinking about our problem, what we need to do is count all the rows over partition by ID for each equipment.
>
> **[2:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=169)** Then we have the number of months.
>
> **[2:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=174)** To understand the money we lose for each equipment for month, we need to divide the amount per this entire formula, which is the number of months.
>
> **[3:06](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=186)** This means we want to count all rows that have the same ID.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=190)** When the ID changes, we reset the counter and start counting over again.
>
> **[3:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=195)** Now that we understand what's doing, let's call this field installments.
>
> **[3:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=202)** Okay, now let's run our query, perfect.
>
> **[3:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=206)** So we have the amount of this equipment and how much this equipment depreciate per month.
>
> **[3:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=213)** Our query is exactly the way we want.
>
> **[3:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=217)** Now we can see we have $125 of depreciation per month in this equipment 66.
>
> **[3:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=226)** Now let's close our tab and let's create a new common table called depreciation sum, where it will sum the value of the rows by curating the month.
>
> **[3:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=238)** It's a similar treatment that we did in the cash account.
>
> **[4:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=241)** Let's select all rows as it was in the depreciation dates, and then we'll add a field that will be the sum of installments over partition by ID,
>
> **[4:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=261)** because we need to understand the depreciation by equipment.
>
> **[4:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=265)** And now to define the order of the iteration of the sum, we'll add order by calendar.
>
> **[4:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=274)** At this way, the value of monthly installments will be added for each piece of equipment.
>
> **[4:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=282)** Let's call this field total amount.
>
> **[4:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=286)** Now let's call depreciation sum here, and let's run our query.
>
> **[4:55](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=295)** Oh, yeah, we have here all these fields from the table.
>
> **[5:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=300)** Depreciation dates, okay, let's run again.
>
> **[5:06](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=306)** Okay, now you can see that we have the month iterating and adding the value.
>
> **[5:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=313)** Great, we know function are great, aren't they?
>
> **[5:17](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=317)** We can use partition by order by and the two combined.
>
> **[5:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=322)** Okay, now let's close the tabs and I will change this name to depreciation amount.
>
> **[5:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=332)** Now let's run the query again.
>
> **[5:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=334)** If we use the amount column to help us situate ourselves, we see that the first row, we have 125.
>
> **[5:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=342)** If we add another 125, we have 250.
>
> **[5:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=349)** That's what the window function is doing.
>
> **[5:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=352)** This will be done for the ID 66, and when there rows for the ID 66 run out, the sum resets to zero and starts counting again to the next ID.
>
> **[6:03](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=363)** This because we used partition by, okay, now we can erase this amount column from our select.
>
> **[6:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=373)** Let's run our query again.
>
> **[6:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=375)** Wonderful. We're almost there.
>
> **[6:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=378)** Now we just need to bring the original purchase amount and subtract them from the depreciation.
>
> **[6:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=384)** This way we'll know how much of the equipment is left in each year.
>
> **[6:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=390)** But we'll do that in the next video, see you there.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (2), in the next (1)
> **Definitions:** means that (2), in other words (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Completing the depreciation transaction](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=0)** - [Instructor] In this video, we'll finish building the depreciation metric.
>
> **[0:03](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=3)** We're almost at the end, so let's go directly to the code.
>
> **[0:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=8)** So far, we found the depreciation value of each piece of equipment.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=13)** Now, we need to add up the values of all equipment to understand what's the total annual depreciation value is.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=22)** So let's go to our code and let's create our new table called depreciation.
>
> **[0:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=31)** Let's select the period_year.
>
> **[0:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=37)** And now, let's sum the total amount and let's call it total amount.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=48)** All these fields are from the table depreciation_sum.
>
> **[0:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=54)** Also, since we have aggregation function, let's add a group by year, period_year.
>
> **[1:03](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=63)** Great, we finally finished building the depreciation.
>
> **[1:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=69)** Let's see result, total amount.
>
> **[1:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=75)** Oh yeah, here is depreciation amount now.
>
> **[1:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=80)** So let's change it.
>
> **[1:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=83)** Great, this is exactly what we needed.
>
> **[1:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=87)** Now, let's close these tabs and let's continue our query.
>
> **[1:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=92)** Okay, depreciation only exists because equipment exists.
>
> **[1:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=97)** So now, we need to bring the purchase of this equipment that depreciated into our query.
>
> **[1:43](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=103)** So let's start by creating a new temp table called ple_purchase.
>
> **[1:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=112)** This table receives the same treatment as the cash account expense table.
>
> **[1:56](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=116)** So let's open the cash account file.
>
> **[1:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=119)** Let's came here to explore, and then account_cash.
>
> **[2:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=124)** Now, let's scroll down to expenses and let's copy this code here.
>
> **[2:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=130)** Let's copy here and let's base here in ple_purchase.
>
> **[2:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=133)** Let's copy here and let's base here in ple_purchase.
>
> **[2:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=136)** Here, we just need to do some changes.
>
> **[2:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=139)** First, let's delete this negative sign here.
>
> **[2:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=143)** That's because the purchase of equipment enters positively in the inventory account.
>
> **[2:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=151)** And the second change is delete here in the where everything besides equipment, great.
>
> **[2:39](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=159)** Now that we have the assets input and the depreciation output, we need to join these two tables to find the annual value of proper cleaning equipment.
>
> **[2:50](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=170)** So let's start by creating a new table called ple_union.
>
> **[2:57](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=177)** And this table will be the all fields from depreciation, union all, then select of all fields from ple_purchase.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=190)** then select of all fields from ple_purchase.
>
> **[3:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=195)** And now, we have everything we need in a single table.
>
> **[3:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=199)** Let's see it, ple_union, great.
>
> **[3:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=206)** Now, let's close this tab and let's create a new table called ple_sum table to add the annual total between ple_purchase and depreciation.
>
> **[3:39](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=219)** So in this query, we will select period_year, and let's sum total_amount.
>
> **[3:50](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=230)** And let's call this fields total_amount.
>
> **[3:53](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=233)** This fields are from the table ple_union.
>
> **[3:56](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=236)** This fields are from the table ple_union.
>
> **[3:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=239)** And since you have aggregation function sum here, we need to add the group by with the period_year.
>
> **[4:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=248)** Great, let's take a look.
>
> **[4:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=252)** Awesome, it's close enough what we need.
>
> **[4:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=255)** Let's close this tab now.
>
> **[4:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=260)** Okay, now, let's create a new temp table called property_equipment.
>
> **[4:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=269)** Let's select the period_year and let's create a manual field called Property, Land & Equipment.
>
> **[4:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=282)** That's called field account.
>
> **[4:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=286)** Now, let's iterate the annual result.
>
> **[4:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=289)** So let's sum the total_amount over order by period_year, and let's call this field total_amount.
>
> **[5:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=304)** These fields are from the table ple_sum.
>
> **[5:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=307)** These fields are from the table ple_sum.
>
> **[5:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=311)** Okay, let's take a look in this table, property and equipment, awesome, but the numbers are really big here.
>
> **[5:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=324)** So let's round.
>
> **[5:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=326)** Let's close this tab and let's round this formula here with two decimal places.
>
> **[5:36](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=336)** Oh, it's here, okay.
>
> **[5:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=338)** Now, let's run again.
>
> **[5:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=340)** Perfect, much greater.
>
> **[5:43](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=343)** Great, let's close this tab, great.
>
> **[5:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=346)** Now, we just have to create our materialized view.
>
> **[5:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=351)** So let's go to the first line and type create materialized view account_property_equipment as our query.
>
> **[6:03](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=363)** account_property_equipment as our query.
>
> **[6:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=367)** So let's run.
>
> **[6:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=370)** Great, executed successfully.
>
> **[6:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=373)** So let's copy this name and let's click in the X, let's save.
>
> **[6:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=379)** Let's add the same name, account_property_equipment, and let's hit OK.
>
> **[6:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=385)** Okay, now we saved our script here as well and we have completed the treatment of property, land, and equipment.
>
> **[6:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=393)** Until now, we are able to learn the concepts of [[CTE]], union, cross join, and window functions.
>
> **[6:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=401)** In the next video, we'll face your first challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE]] (1)
> **Code Identifiers:** period_year (6), ple_purchase (6), ple_union (4), total_amount (4), ple_sum (3)
> **UI Navigation:** go to (2), select the (2), open the (1), scroll down (1)
> **CLI Commands:** find (1)
> **Env Vars:** cte (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Inventory Account](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-inventory-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-inventory-account?u=76281980&t=0)** - [Narrator] Hi, the time has come for you to put all the knowledge you acquired during our use case and building inventory account on your own.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-inventory-account?u=76281980&t=14)** Here are some key points to consider.
>
> **[0:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-inventory-account?u=76281980&t=16)** To begin with, we need to consider the dates where the money actually enter or left our company.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-inventory-account?u=76281980&t=22)** Also, we need to deduct from the purchase inventory the [[Microsoft Products|products]] that were sold.
>
> **[0:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-inventory-account?u=76281980&t=27)** But the issue here is that the amount to be deducted from the sale cannot have a profit.
>
> **[0:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-inventory-account?u=76281980&t=34)** If I buy a product for 10 and sell it for 20, I cannot have minus 10 in inventory.
>
> **[0:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-inventory-account?u=76281980&t=40)** So, we need to deduct the original 10.
>
> **[0:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-inventory-account?u=76281980&t=44)** Also, don't forget to iterate the result by period.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-inventory-account?u=76281980&t=48)** So, that is your first challenge.
>
> **[0:50](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-inventory-account?u=76281980&t=50)** Building an inventory account with those considerations in mind.
>
> **[0:53](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-inventory-account?u=76281980&t=53)** Give it a try.
>
> **[0:55](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-inventory-account?u=76281980&t=55)** I'll see you in the next video to go through the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Cross-References:** in the next (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Inventory Account](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=5)** - [Instructor] How did your first challenge go?
>
> **[0:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=7)** I hope you had a great success.
>
> **[0:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=9)** Let's now move on to the solution together.
>
> **[0:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=12)** Let's start creating a [[SQL]] file.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=15)** Okay, now let's start with the width.
>
> **[0:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=19)** Now we need to do here the same purchase process that we did in the cash account table.
>
> **[0:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=24)** So let's go to the file and let's open the cash account.
>
> **[0:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=29)** Now let's copy the purchase dates and the purchase table here and paste in our script, perfect.
>
> **[0:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=40)** The difference here is that purchase inventory is positive to the inventory account, so let's erase this negative sign.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=48)** That's it, the entry processing is ready.
>
> **[0:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=52)** Now we need to handle the outputs, but let's take a look first.
>
> **[1:02](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=62)** Purchase.
>
> **[1:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=65)** Okay, perfect.
>
> **[1:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=69)** Now to handle the outputs, we need to identify the quantity of sales but multiply this value by the purchase value of the product.
>
> **[1:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=79)** Since we cannot bring the profit here, let's create a common table called product_price.
>
> **[1:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=89)** Now let's select distinct, the product name, and bring the amount.
>
> **[1:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=100)** All fields are from the table purchases.
>
> **[1:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=106)** This way we know the unit value of each product.
>
> **[1:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=111)** Let's see this table, products_price.
>
> **[1:57](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=117)** Yeah, that's it, we have 88 rows here.
>
> **[2:02](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=122)** Okay, let's close this tab.
>
> **[2:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=124)** Now it's time to create the sale table.
>
> **[2:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=129)** Here we will select the date_part, year, from the field payment_at and let's call that period_year.
>
> **[2:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=143)** This field is from the table sales which we will call s and now we will use the left join.
>
> **[2:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=152)** This way we can join the table product_price and let's call this table p.
>
> **[2:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=160)** The key that joined these two tables is the product_name.
>
> **[2:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=164)** So on s.product_name is equal p.product_name.
>
> **[2:55](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=175)** Now that we have joined the table, let's create the metric.
>
> **[3:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=180)** So as product_sales means product leaving inventory, this metric is negative.
>
> **[3:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=187)** Now let's sum the field.
>
> **[3:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=191)** s.quantity which means quantities from the sales table multiplied by p.amount which means that amount field is from the product_price table, and let's call this field total_amount.
>
> **[3:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=212)** Since we renamed our table to s and p, we can now use those letters to point to each table a field belongs to.
>
> **[3:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=222)** And now as we have aggregation function in the select, we need to add the group by.
>
> **[3:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=229)** So group by, and we need to put in group by the date_part, so let's copy and paste here in the group by.
>
> **[4:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=240)** Perfect, let's take a look.
>
> **[4:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=245)** Perfect, so let's combine those two tables into a common table called inventory_union.
>
> **[4:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=255)** In this square, we will select all the fields from purchase, union all, select of all fields from sale.
>
> **[4:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=269)** Let's run it and see the table, so inventory_union.
>
> **[4:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=277)** Great, we have all information together.
>
> **[4:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=281)** Now we need to add those values together so that 2021 sales are deducted from 2021 purchases.
>
> **[4:50](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=290)** Let's close this tab, and now let's create a new temporary table called inventory_sum.
>
> **[5:02](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=302)** Now let's select the period_year and let's sum the total_amount and call this field total_amount.
>
> **[5:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=316)** These fields are from the table inventory_union.
>
> **[5:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=322)** Okay, let's take a look.
>
> **[5:28](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=328)** Oh, now we have a mathematical aggregation function here, so we must do group by period_year, great.
>
> **[5:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=338)** That's it, now we summarized the values by year.
>
> **[5:45](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=345)** Let's close these tabs.
>
> **[5:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=348)** Okay, we saw that now we have already the information of inventory per year.
>
> **[5:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=354)** However we must remember that the value left from one year's inventory is not thrown away.
>
> **[6:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=361)** It must be added to the value of the following year's inventory.
>
> **[6:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=365)** So the last step is to create a new common table called inventory where we will select the period_year and we'll iterate our metric.
>
> **[6:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=380)** Now we've already seen a few times in this project that it's possible to iterate the metric using Window functions.
>
> **[6:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=389)** Here we will sum the total_amount field over, order by period_year, and let's called this field total_amount.
>
> **[6:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=407)** These fields are from the table inventory_sum.
>
> **[6:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=412)** Now let's run ECR table inventory.
>
> **[6:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=419)** Perfect, that's our table.
>
> **[7:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=421)** Now we just need to create a manual field here and let's call this field account.
>
> **[7:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=427)** Okay, let's run this code again.
>
> **[7:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=431)** Even perfect, that's what we need.
>
> **[7:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=433)** So now let's just close this tab and this tab, let's scroll up to the first row, and let's create our materialized view.
>
> **[7:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=441)** So create materialized view account_inventory as our query.
>
> **[7:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=451)** Let's run this again.
>
> **[7:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=453)** Okay, perfect, now we have our table.
>
> **[7:36](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=456)** Now let's just close this tab and close the script so we can save it, let's hit Save.
>
> **[7:43](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=463)** Now I will call this script account_inventory and okay, now our script is saved, and sweet, that's it.
>
> **[7:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=474)** I hope you have put your knowledge into use and that you had fun in this process.
>
> **[7:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=478)** So now that we've finished creating all assets type accounts, let's create the missing accounts in the next chapter, see you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Code Identifiers:** period_year (5), total_amount (5), product_price (3), product_name (3), inventory_union (3)
> **UI Navigation:** select the (3), go to (1), open the (1), scroll up (1)
> **Env Vars:** sql (1), ecr (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 2. Balance Sheets: Liability and Owner's Equity Accounts

[↑ Back to Table of Contents](#table-of-contents)

#### [Building the Loan Account](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=0)** - [Instructor] In the last chapter, we completed the construction of all assets type accounts.
>
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=5)** Let's remember that the balance sheet is made up of assets, liabilities, and owner's equities account.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=13)** Liability is money we owe someone.
>
> **[0:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=16)** For example, it could be a purchase you made.
>
> **[0:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=19)** You have already received the product, but we will only pay in the next month.
>
> **[0:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=24)** In our scenario, we do not have this type of purchase.
>
> **[0:28](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=28)** If we did, we would have to create an account for accounts payable.
>
> **[0:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=33)** This is not our case, but we contracted that for loans.
>
> **[0:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=38)** Because of this, we need to create a loan account, which is a liability, which to sign that we have this debt.
>
> **[0:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=46)** This account will have both the acquired loans and the loans payment.
>
> **[0:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=51)** There's a catch here.
>
> **[0:53](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=53)** We should only consider the loan payment amount without adding interest.
>
> **[0:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=59)** This is because the amount paid in interest is not repaying the amount borrowed.
>
> **[1:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=65)** It's interest, and it must be taken from the returned earnings account, which we will build later.
>
> **[1:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=73)** A good part of this treatment has already been carried out in the cash account, so instead of type everything again, we will just copy a snippet of this code.
>
> **[1:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=83)** So to open the cash account, let's navigate to the files, and now let's click in the account cache.
>
> **[1:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=91)** Great. Here's our table.
>
> **[1:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=94)** Now let's scroll to the common table loan in, and when we reach that, let's copy loan in and the expenses table as well.
>
> **[1:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=104)** Okay, great.
>
> **[1:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=106)** Now we can close this code.
>
> **[1:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=109)** Let's open our table and let's create a new [[SQL]] file.
>
> **[1:53](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=113)** Great.
>
> **[1:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=114)** Let's start with the width, and now let's paste the loan in and the expenses table.
>
> **[2:02](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=122)** The common table loan in is treating the period in which the loan was made and summarizing the loan in value, and it's already exactly what we need.
>
> **[2:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=133)** Luckily for us, the payments table has already separated into the loan payment and what is interest payment.
>
> **[2:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=141)** So for the expenses table, let's change the name from expenses to loan payment.
>
> **[2:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=147)** Loan payment.
>
> **[2:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=150)** Okay, and let's select the filter where only the type loan.
>
> **[2:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=158)** Okay, let's erase this part.
>
> **[2:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=160)** Great. Only loan here.
>
> **[2:43](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=163)** And that's it. Most of our loan account handling is over.
>
> **[2:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=168)** We can take a look in the loan payment, for instance.
>
> **[2:50](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=170)** Select all from loan payment, and let's run this code.
>
> **[2:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=178)** Okay.
>
> **[2:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=178)** Yeah, that's it. That's all you need.
>
> **[3:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=181)** Now let's close this step.
>
> **[3:03](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=183)** Okay, and let's go back to our code.
>
> **[3:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=187)** And now, we need to combine the rows of those two tables.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=190)** So for this, we will create a new common table called loan union, where we will select all the fields from the table loan in and union all with the select of all the fields from the table loan payment.
>
> **[3:36](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=216)** Okay, let's take a look at this table as well, loan union.
>
> **[3:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=221)** Select all and run again.
>
> **[3:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=224)** Great, now we have all the rows from loan and all the roles from loan payments in the same table.
>
> **[3:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=231)** Let's close this tab.
>
> **[3:53](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=233)** Perfect.
>
> **[3:55](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=235)** So now what do we need to do is to send inputs with the outputs, so let's create a new common table to do that.
>
> **[4:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=244)** Let's create a table called loan amount.
>
> **[4:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=248)** Okay, the loan amount table.
>
> **[4:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=250)** Here, we will select the period year, and let's sum with the total amount.
>
> **[4:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=262)** Total amount.
>
> **[4:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=263)** Let's call that total amount.
>
> **[4:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=267)** Great. These fields are from the loan union table.
>
> **[4:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=271)** And since we have a mathematical aggregation function here, let's group by our query period year.
>
> **[4:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=280)** Great. Let's take a look at this table.
>
> **[4:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=286)** Okay, let's close this tab.
>
> **[4:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=288)** Now we have the loan amount per period.
>
> **[4:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=291)** What we need to do is iterate the value.
>
> **[4:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=294)** Remember that the ending value of one period is the starting value of the next period.
>
> **[5:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=300)** So to do this, we will create our last common table called loan.
>
> **[5:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=305)** So now, loan, and in the loan, we will select the period year.
>
> **[5:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=314)** Let's create a manual field called loan here, and let's call this field account, and now let's sum the total amount over order by period year, and let's call this field total amount.
>
> **[5:36](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=336)** Total amount.
>
> **[5:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=338)** Okay, these fields are from the table loan amount, and that's it.
>
> **[5:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=346)** Excellent. This is what we need.
>
> **[5:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=348)** Let's select this table and see our output.
>
> **[5:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=352)** Okay, perfect, now we have the loan accumulated, iterated by period year.
>
> **[6:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=360)** Great. That's what we need.
>
> **[6:02](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=362)** Now let's create a materialized view.
>
> **[6:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=364)** So let's close this tab and let's scroll to the first line here, and let's type create materialized view account loan as,
>
> **[6:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=378)** and select everything and run again.
>
> **[6:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=381)** It's not appearing the output.
>
> **[6:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=382)** Let's take a look at materialized view.
>
> **[6:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=384)** Oh, great. We have our account loan here.
>
> **[6:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=387)** Perfect, that's what we need.
>
> **[6:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=389)** Excellent.
>
> **[6:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=391)** And now let's save our code.
>
> **[6:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=393)** So let's hit the X.
>
> **[6:36](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=396)** Let's hit save.
>
> **[6:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=398)** Let's hit reboot a name, maybe call it account loan.
>
> **[6:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=402)** Let's erase this part and let's hit save.
>
> **[6:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=407)** Okay, now we have our script saved here.
>
> **[6:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=411)** We have now finished our liability account.
>
> **[6:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=414)** In the next video, we will start to build our retained earnings account.
>
> **[6:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=418)** See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **UI Navigation:** select the (3), open the (1), navigate to (1)
> **Cross-References:** in the next (2), in the last (1), go back to (1)
> **Analogies:** for example (1), for instance (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Retained Earnings Account, part 1](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=0)** - [Instructor] Now that we have completed the assets and liabilities type accounts, we now come to the last section, which is owner's equity.
>
> **[0:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=9)** Within owner's equity, we can only have two types of accounts: capital stock, and retained earnings.
>
> **[0:17](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=17)** Capital stock is the money that shareholders put in our company.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=21)** However, our company has started with loans, and not with equity, so we will not have a capital stock account, only a retained earnings account.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=32)** In this account, we have money coming in through the sales of the company [[Microsoft Products|products]] and services, while the expenses necessary for the company's operation is a type of expenses.
>
> **[0:43](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=43)** This table will be a little different from the others we have built so far, this is because we need to break down each transaction that was recorded, and at the same time, we need to add up the sales from the previous year to the next year's transactions.
>
> **[0:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=58)** This is a little more complex, but we'll do it together.
>
> **[1:02](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=62)** And we are also going to take advantage of the accounts we've already built so we don't have to redo everything from scratch.
>
> **[1:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=71)** So, copying previously written code, and knowing how to reuse it, is a really good part of a developer.
>
> **[1:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=78)** It doesn't matter the language, it could be a programming, a lookup, or a database.
>
> **[1:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=83)** So, let's go to our code.
>
> **[1:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=87)** Let's create a file here, so let's create a new [[SQL]] file, and let's start with the with.
>
> **[1:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=94)** Okay, here, what we need to do is the sales of the products we've made.
>
> **[1:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=101)** So, let's call the first big query revenue.
>
> **[1:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=106)** Okay, this treatment will be very similar for what we did in the cash account table, but we do not need to deal with the payment date.
>
> **[1:55](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=115)** This is because, here, it's very similar from what we did in the cash account table, but we don't need to deal with the payment date here.
>
> **[2:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=124)** And this is because, here, we are talking about the interest of items into the inventory, and not about the cash itself.
>
> **[2:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=132)** So, let's consider the entry data as the payment date.
>
> **[2:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=138)** Let's start selecting the date_part('year', payment_at),
>
> **[2:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=149)** and let's call that period_year.
>
> **[2:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=151)** Okay, now let's create a manual field called Revenue, and let's call this field here transaction_type.
>
> **[2:43](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=163)** Additionally, I will create a field 1, and call this field order_process.
>
> **[2:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=174)** Okay.
>
> **[2:56](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=176)** This order_process field will be essential for us to indicate the iteration order in the final sum.
>
> **[3:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=184)** Now let's sum the quantity and multiply by the price field, and let's call this total amount.
>
> **[3:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=198)** These fields are from the table, sales, and now we just need to group our data by the date_part, so let's copy here.
>
> **[3:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=210)** Okay, now let's take a look in our table.
>
> **[3:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=217)** Great. Here is our revenue.
>
> **[3:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=220)** Let's close this tab.
>
> **[3:43](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=223)** Now what we need to do is deduct the cost of the products we sell.
>
> **[3:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=228)** We did this treatment on the inventory account, so let's navigate to the files, and let's click on the account inventory.
>
> **[3:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=238)** Now let's scroll down to the product_price, and let's copy this, and the sale as well.
>
> **[4:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=244)** Now, let's close this code.
>
> **[4:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=247)** Let's go back here, put a comma, and then enter this copied code.
>
> **[4:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=252)** And now the only changes we need to do here is enter some manual fields here.
>
> **[4:17](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=257)** Okay, so let's create the first one, which is Cost of Goods Sold.
>
> **[4:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=266)** And let's call this field here transaction_type.
>
> **[4:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=272)** Perfect.
>
> **[4:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=274)** Now let's insert 2, and call this order_process.
>
> **[4:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=282)** Let's organize this comma in the end of the field.
>
> **[4:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=287)** Okay, it's better now.
>
> **[4:50](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=290)** We'll also change the name of this last query from sales to cogs, which stands for cost of the goods sold.
>
> **[5:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=301)** Let's remember what this piece of code is doing.
>
> **[5:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=304)** As the price of the product does not change in our database, we are first finding the value of each item that we have in the purchase table, and then, using the product name, we joined this table with the sales to identify the cost of each product sold, and we bring this cost to our result.
>
> **[5:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=327)** This is what we're doing here, multiplying the quantity from sales with the amount from product price.
>
> **[5:35](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=335)** Okay, now we have the cost of the products as well.
>
> **[5:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=338)** Let's take a look in the cost of goods sold.
>
> **[5:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=341)** Oh, we have an unnecessary comma here, so let's raise it and run again.
>
> **[5:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=347)** Perfect. Now we have the cost of goods sold per year.
>
> **[5:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=351)** In the next video, we'll cover the depreciation and other expenses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (4), [[SQL]] (1)
> **Code Identifiers:** order_process (3), date_part (2), transaction_type (2), payment_at (1), period_year (1)
> **UI Navigation:** go to (1), navigate to (1), click on (1), scroll down (1)
> **Definitions:** is a  (3), stands for (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Retained Earnings Account, part 2](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=0)** - [Instructor] At this point, we already have the sales value and the cost of [[Microsoft Products|products]] sold.
>
> **[0:06](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=6)** To continue building the retained earnings account, we'll need to consider equipment depreciation and expenses by type.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=14)** The extensive depreciation treatment has already been carried out in the proper lending equipment account.
>
> **[0:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=20)** So let's go to our code.
>
> **[0:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=24)** The extensive depreciation treatment has already been carried out in the property lending equipment account.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=30)** So let's navigate to the files, then let's click in the account_property_equipment.
>
> **[0:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=37)** Okay, now let's navigate until the depreciation_dates and copy the depreciation_dates, depreciation_sum, and depreciation.
>
> **[0:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=46)** Let's copy, close the script, and now put a comma here and let's paste the code.
>
> **[0:55](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=55)** Okay, now let's remember, watch this piece of code, this.
>
> **[1:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=61)** First, we are combining all the rows from calendar table and all the rows from the payment table.
>
> **[1:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=68)** Additionally, we're filtering the duration of the equipment.
>
> **[1:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=71)** Also, we are dividing the value of the equipment by the numbers of the months that this equipment is expected to be useful.
>
> **[1:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=80)** This way we find the depreciation amount per month.
>
> **[1:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=84)** We also created a flag to understand the anniversary of use of this equipment.
>
> **[1:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=90)** Scrolling down to the depreciation_sum, here we add the monthly value to understand what the accumulated amount will be for each year.
>
> **[1:39](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=99)** This is fundamentally important for the first and last year, since, to all the other years in the middle, the equipment will have 12 months of depreciation.
>
> **[1:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=109)** Remember that up until now, the treatment is carried out in the equipment level.
>
> **[1:56](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=116)** But in our last BigQuery, the depreciation, what we are doing is add the depreciation value of all the equipment to find the total annual depreciation value.
>
> **[2:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=129)** In this step, we also need to filter the flag one year equal to one, to have the exact value on the report closing date.
>
> **[2:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=139)** We'll make some changes here in depreciation query.
>
> **[2:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=143)** So let's do that.
>
> **[2:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=145)** We'll need two manual fields.
>
> **[2:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=147)** The first one will be depreciation, and let's call this field, transaction_type.
>
> **[2:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=157)** The second field will be the number 3, and we'll call this field, order_process.
>
> **[2:45](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=165)** Now, the next step is to separate each type of expenses and group them according to the US GAAP.
>
> **[2:53](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=173)** The next BigQuery is also very similar to one we created in the cash account.
>
> **[2:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=179)** And now, since we are already in the file tab, let's open the cash account.
>
> **[3:06](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=186)** Okay, now let's scroll down until the expenses table, and let's copy this table here.
>
> **[3:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=196)** Okay, I close the code and I'll paste this code here in my new query.
>
> **[3:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=204)** Let's add this.
>
> **[3:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=207)** Here in this query, we'll have some changes.
>
> **[3:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=211)** First, we need to add the transaction_type, written one by one.
>
> **[3:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=217)** So let's create a case here.
>
> **[3:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=220)** So case when the payment_type is equal 'tax',
>
> **[3:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=232)** then we'll have 'Tax Expenses', when the payment_type is equal 'interest', then we'll have 'Interest Expenses', when the payment_type is equal 'wage', then we have 'Wage Expenses'.
>
> **[4:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=261)** And when the payments_type is in 'rent' or 'utility'
>
> **[4:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=274)** then we will have 'Operational Expenses'.
>
> **[4:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=280)** And let's close this case with the end.
>
> **[4:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=284)** And let's call this field, transaction_type, great.
>
> **[4:50](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=290)** And now we also need to create a case to sign the order process.
>
> **[4:56](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=296)** So let's copy the same case since it's really similar.
>
> **[5:03](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=303)** Let's add a comma here in the end.
>
> **[5:06](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=306)** Okay, and now let's paste the case.
>
> **[5:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=310)** Here we will change 'Tax Expenses' for 4.
>
> **[5:17](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=317)** Let's remember to not use quotes in the numbers because we need integers here.
>
> **[5:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=323)** The interest will receive 5, the wage will receive 6, and rent and utility will receive 7.
>
> **[5:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=333)** And now we can call this field, order_process.
>
> **[5:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=340)** Perfect, now we need to add these two fields in the group by.
>
> **[5:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=344)** So let's copy this case here, and let's add this in the group by.
>
> **[5:53](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=353)** Let's remember to not rename the fields in the group by, so let's erase this as.
>
> **[6:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=360)** Now let's run this expenses table and see how it is.
>
> **[6:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=365)** Mm, we have a problem here, let's take a look.
>
> **[6:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=372)** Oh, it's missing a comma here.
>
> **[6:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=376)** Okay, let's run again.
>
> **[6:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=378)** I guess we are missing a comma here.
>
> **[6:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=380)** Yeah, we are missing the comma here as well.
>
> **[6:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=383)** Let's run again.
>
> **[6:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=385)** Oh, there's one type null here.
>
> **[6:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=389)** Hmm, okay, I guess it's loan.
>
> **[6:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=393)** Loan shouldn't be here.
>
> **[6:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=394)** Let's run it again.
>
> **[6:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=398)** We neither should have equipment, let's erase this too.
>
> **[6:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=402)** Let's run again.
>
> **[6:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=404)** Okay, now it's perfect.
>
> **[6:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=407)** Wonderful, great job following these steps.
>
> **[6:50](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=410)** We now have all the transactions we need to build retained earnings.
>
> **[6:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=414)** See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Code Identifiers:** transaction_type (3), payment_type (3), depreciation_dates (2), depreciation_sum (2), order_process (2)
> **UI Navigation:** go to (1), navigate to (1), open the (1), scroll down (1)
> **CLI Commands:** find (2), make (1)
> **Best Practices:** remember to (2)
> **Env Vars:** gaap (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)

#### [Challenge: Retained Earnings Account](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-retained-earnings-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-retained-earnings-account?u=76281980&t=0)** - [Instructor] Welcome to our second challenge.
>
> **[0:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-retained-earnings-account?u=76281980&t=7)** In this challenge, we'll continue coding from the retained earnings code we have built so far.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-retained-earnings-account?u=76281980&t=13)** You already handle all the transactions that impact the retained earnings account.
>
> **[0:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-retained-earnings-account?u=76281980&t=18)** Now your challenge is iterate the total amount value of the retained earnings account so that the result of the sum of the transactions from the one year is transferred to the next year.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-retained-earnings-account?u=76281980&t=30)** This is the same treatment we applied to the other's accounts.
>
> **[0:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-retained-earnings-account?u=76281980&t=33)** But remember that in this particular account, it's essential to maintain descriptions of all transactions.
>
> **[0:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-retained-earnings-account?u=76281980&t=40)** This way, if all transactions result in plus 20, in the following year, this account needs to start with the plus 20, and we need to have the summarized value of plus 20 as our result of the previous year.
>
> **[0:57](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-retained-earnings-account?u=76281980&t=57)** So, give this challenge a try and I will meet you in the next video for the solution.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Retained Earnings Account](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=0)** (punchy music)
>
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=5)** - [Instructor] So, how was the challenge?
>
> **[0:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=7)** I hope you were able to achieve the goal.
>
> **[0:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=10)** In any case, let's do it together, now we understand the logic behind this challenge.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=15)** As I said, let's follow the code we made together in the retained earnings account part two video.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=21)** We have, already, all the transactions ready to work.
>
> **[0:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=25)** The first step is to place all transactions within a single table.
>
> **[0:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=29)** Let us start by creating a new subquery called re_union, and re stands for retained earnings.
>
> **[0:39](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=39)** Okay so, let's start with our traditional union.
>
> **[0:43](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=43)** So, select * from revenue union all select * from cogs, which is cost of goods sold.
>
> **[0:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=59)** Now let's copy this part here.
>
> **[1:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=61)** Let's paste it here.
>
> **[1:03](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=63)** And union all select * from depreciation, and union all select * from expenses.
>
> **[1:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=74)** Now I have an ace up on my sleeve, as we already know, we'll need to iterate this result so that we have the total retained earnings per year.
>
> **[1:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=86)** So, to do this, we will create a manual record in the table to help us with this process.
>
> **[1:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=91)** So, union all, but now let's select the date_part('year', calendar_at),
>
> **[1:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=104)** and let's call this field period_year.
>
> **[1:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=109)** We'll also create a manual field called 'Retained Earnings - Beginning Balance', and let's call this field transaction_type.
>
> **[2:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=124)** And also, let's create another manual field with 0, and call this field order_process.
>
> **[2:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=133)** And to unite the select with the [[Representational State Transfer (REST)|rest]], we need to have exact the same fields, so I'm going to create a field 0 and call it total_amount.
>
> **[2:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=145)** These fields are from the table, calendar.
>
> **[2:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=149)** In the same way we create a record for the initial value, we will also create a record for the final value.
>
> **[2:36](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=156)** So, to make it easier, let's copy this union here and paste it.
>
> **[2:43](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=163)** The logic is the same, but instead of being Beginning Balance, it will be just Retained Earnings, so let's erase this part here.
>
> **[2:53](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=173)** And also the order_process, instead of 0, it will be 999, because this row will be the last one to be iterated before turning the year.
>
> **[3:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=185)** Now let's run this table, re_union, and let's add here an order by period_year, order_process.
>
> **[3:17](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=197)** Let's select and run.
>
> **[3:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=202)** There's a yeat in some point here.
>
> **[3:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=205)** Okay, it's here, here.
>
> **[3:28](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=208)** Ear here, and ear here.
>
> **[3:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=210)** Let's run again.
>
> **[3:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=213)** Okay, we have to add a distinct here, and here.
>
> **[3:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=220)** Let's run again.
>
> **[3:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=224)** Okay, now we can see the exact execution order we need for this table.
>
> **[3:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=229)** We have the beginning balance, all the transactions that impact the retained earnings, and finally, the retained earnings.
>
> **[3:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=239)** Next step is to iterate this value.
>
> **[4:02](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=242)** So, let's close this tab, and let's go back to our query.
>
> **[4:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=247)** And to do this, let's create a new select query, re_details.
>
> **[4:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=254)** Here, we will select the period_year, we will also select transaction_type, the total_amount, to help us to compare this total amount with the new column that we're about to create.
>
> **[4:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=270)** Let's call this total amount original.
>
> **[4:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=274)** Now, remember that we need to iterate the values.
>
> **[4:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=277)** The treatment is very similar to what we did in other accounts.
>
> **[4:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=282)** Let's sum(total_amount) over(order by period_year, order process),
>
> **[4:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=294)** and let's call this field new_total_amount.
>
> **[5:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=300)** Now let's run it and see how this table turned out.
>
> **[5:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=308)** Oh, of course, we need to have a table in the front.
>
> **[5:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=312)** So these fields are from the table re_union.
>
> **[5:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=318)** Let's run again.
>
> **[5:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=321)** order_process.
>
> **[5:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=326)** Oh yeah, we don't have here anymore, so.
>
> **[5:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=331)** Okay.
>
> **[5:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=333)** Now pay attention to the original and new_total_amount fields.
>
> **[5:36](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=336)** I will scroll here so we can see better.
>
> **[5:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=340)** You can see the original field with the value corresponding to what was transacted during the year, and the new_total_amount with the value that was iterated, and at the end of the year, showing all the retained earnings as a result of the transactions.
>
> **[5:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=358)** It's very cool, but now we need to transform those two columns into just one.
>
> **[6:03](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=363)** This is because the retained earnings value needs to be accumulated, but the individual values of the transactions cannot be iterated.
>
> **[6:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=374)** Let's close this tab, and let's go back to our query.
>
> **[6:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=380)** Now we will do this treatment using the help of a case expression.
>
> **[6:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=386)** So, case when order_process = 0 or order_process = 999,
>
> **[6:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=400)** then we'll use this formula in new_total_amount, so this formula here.
>
> **[6:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=408)** In other cases, or else, we'll use the original, which is the total amount.
>
> **[6:56](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=416)** Now, to end the case, let's type end, and let's call this field total_amount.
>
> **[7:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=424)** Now let's run the query again.
>
> **[7:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=427)** Just scroll here.
>
> **[7:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=429)** Now we can see that the total_amount_field shows all the input and output, and then, in retained earnings, and in the beginning balance, it shows the accumulated amount.
>
> **[7:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=441)** Great, this is what we need.
>
> **[7:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=443)** But now let's erase these two fields, because we don't need it anymore.
>
> **[7:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=447)** Okay, let's run it again.
>
> **[7:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=450)** Great. It's cleaner.
>
> **[7:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=453)** But the math is still with several decimal cases, let's round this field here.
>
> **[7:39](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=459)** So, let's apply the round, beginning the case, and ending the case.
>
> **[7:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=466)** And let's say that we have two decimal places.
>
> **[7:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=471)** Okay, now it's prettier, with just two decimal cases, great.
>
> **[7:57](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=477)** So now what we need to do is create our materialized view.
>
> **[8:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=481)** So, let's scroll up.
>
> **[8:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=484)** And in the first row, let's type here, create materialized view, and let's call this view account_retained_earnings_details
>
> **[8:28](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=508)** as our query.
>
> **[8:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=511)** Let's run it again.
>
> **[8:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=513)** Great. Now we have our query, our materialized view.
>
> **[8:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=517)** It's here.
>
> **[8:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=518)** And with the end of the creation of the retained earnings, we also complete the creation of all necessary accounts to now create the sections of the balance sheet in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** order_process (6), period_year (4), total_amount (4), new_total_amount (4), re_union (3)
> **Cross-References:** go back to (2), in the next (1)
> **UI Navigation:** select the (2), scroll up (1)
> **CLI Commands:** make (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (punchy music) (1)


### 3. Building the Balance Sheet

[↑ Back to Table of Contents](#table-of-contents)

#### [Building the Assets section](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=0)** - [Instructor] Now that we have all the tables of accounts that make up the balance sheet ready, let's build the sections of the balance sheet.
>
> **[0:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=7)** Remember that the balance sheet is made up of three sections: assets, liabilities, and owner's equity.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=15)** In assets we have four accounts: cash account, accounts receivable account, inventory account, and property, land, and equipment account.
>
> **[0:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=26)** Now, let's get to the code.
>
> **[0:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=29)** Let's start by creating a [[SQL]] document.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=32)** Okay, and we'll use a [[CTE]] to build the assets account.
>
> **[0:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=37)** So let's start with the with.
>
> **[0:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=41)** The first step is to combine all the accounts tables into one.
>
> **[0:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=46)** So let's create our first step table assets_union to unite all the tables that make up the assets account.
>
> **[0:57](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=57)** And just like in retained earnings, we will create a record to summarize the annual accumulated value to assets.
>
> **[1:06](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=66)** So let's start by selecting everything and then create a field with one and call it order_process from the account_cash table.
>
> **[1:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=82)** Now let's union all with the select all the columns and now two as order_process from account_accounts_receivable.
>
> **[1:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=100)** Receivable. Yeah, that's it.
>
> **[1:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=104)** And now I will copy union all and select all, so I don't have to type this again and again and again.
>
> **[1:53](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=113)** And now union all with select of all columns, three as order process from the account_inventory.
>
> **[2:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=128)** And now again, union all, select all the fields four as order_process from the table account_property_equipment.
>
> **[2:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=144)** And now we have to create our manual record to summarize this value from assets per year.
>
> **[2:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=152)** So union all select of date_part, year from calendar_at, and let's call this field period_year.
>
> **[2:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=168)** Also, let's create a field here called assets and called this field account.
>
> **[2:57](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=177)** Oh, I missed the coma here. Great.
>
> **[3:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=181)** Now we have zero as total_amount, and we have 999 as order_process.
>
> **[3:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=192)** This fields are from the table calendar, and we cannot forget to group by everything by the date_part field.
>
> **[3:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=203)** Great.
>
> **[3:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=204)** And now let's take a look at this table.
>
> **[3:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=206)** So let's select everything from assets_union.
>
> **[3:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=214)** Oh, I am missing here a in assets.
>
> **[3:39](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=219)** Great, now select everything and run.
>
> **[3:45](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=225)** Account_accounts, I believe it's_account accounts_receivable, Account_inventory. Oh, now it's right, account.
>
> **[3:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=238)** Great, now we have our table ready.
>
> **[4:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=241)** We just need to sum up to have the total by year in the assets record.
>
> **[4:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=249)** So let's close these tabs and let's continue building our query.
>
> **[4:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=255)** Okay.
>
> **[4:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=258)** So now let's sum up the fields.
>
> **[4:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=260)** Let's start by selecting the period_year.
>
> **[4:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=265)** Also, let's create a field here called Assets, and let's call this field section_bs.
>
> **[4:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=274)** Section_bs, where bs stands for balance sheet.
>
> **[4:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=281)** Now let's bring the total amount and let's call it original.
>
> **[4:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=288)** Also, let's create a sum of the total amount over the partition by period_year, and order by order_process.
>
> **[5:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=305)** And let's call this field new_total_amount.
>
> **[5:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=310)** New_total_amount, okay.
>
> **[5:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=313)** Now all these fields are from the table assets_union.
>
> **[5:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=319)** Let's select everything and run.
>
> **[5:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=322)** Okay, now we have the original field and the new_total_amount field.
>
> **[5:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=327)** We can see that in the new_total_amount, we have the values accumulated.
>
> **[5:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=331)** And in the original is the original.
>
> **[5:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=334)** And what we need to do here is combine these two columns and also bring the account.
>
> **[5:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=341)** So let's do that first.
>
> **[5:43](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=343)** Let's bring the account after the section.
>
> **[5:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=347)** Let's run again.
>
> **[5:50](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=350)** Great, now we can see better what's happening.
>
> **[5:53](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=353)** Let's scroll here.
>
> **[5:55](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=355)** Okay, now we need to preserve the original value to the accounts, but we need the sum up value to the assets role.
>
> **[6:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=367)** So let's treat that using the case expression.
>
> **[6:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=372)** Okay, so, let's go here and let's create a case, when the order_process is equal 999, then we need the new total value.
>
> **[6:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=386)** So this expression here, let's paste.
>
> **[6:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=391)** But if the order process is not 999, which means else, then we need to use the original value, which means the total amount.
>
> **[6:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=401)** And to close the case, let's close with the end and let's call this field total_amount.
>
> **[6:50](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=410)** Now let's run again.
>
> **[6:53](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=413)** Okay, let's scroll here and now we can see the values original to the accounts.
>
> **[7:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=420)** And in the asset, we have the accumulated.
>
> **[7:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=424)** Yeah, our table is finished.
>
> **[7:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=427)** So now let's just close this tab and let's erase this original field, and then new total mount because you don't need it.
>
> **[7:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=436)** Let's erase as well this coma.
>
> **[7:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=439)** And now let's scroll into the first row and let's create our materialized view.
>
> **[7:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=445)** So let's create materialized view section now as section_assets as our query.
>
> **[7:36](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=456)** Okay, let's select everything and run again.
>
> **[7:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=460)** Yeah, success. Sweet.
>
> **[7:43](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=463)** Now let's save our document.
>
> **[7:45](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=465)** So let's close this tab.
>
> **[7:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=467)** Let's close our script and hit Save.
>
> **[7:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=471)** Now I'll call that section assets.
>
> **[7:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=474)** Let's erase this part here.
>
> **[7:56](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=476)** Section assets. Perfect.
>
> **[7:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=479)** And now hit OK.
>
> **[8:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=481)** Now we have our file.
>
> **[8:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=484)** Sweet, we created the first of three sections of the balance sheet.
>
> **[8:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=489)** In the next video, we'll build the liability section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[CTE]] (1)
> **Code Identifiers:** order_process (6), assets_union (3), period_year (3), new_total_amount (3), date_part (2)
> **CLI Commands:** make (2)
> **Env Vars:** sql (1), cte (1)
> **Cross-References:** in the next (1)
> **Definitions:** stands for (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Building the Liabilities section](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=0)** - [Instructor] The handling of liabilities will be very similar to asset section we just completed.
>
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=5)** So, let's start by creating a [[SQL]] file.
>
> **[0:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=9)** And we'll use [[CTE]].
>
> **[0:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=11)** So, let's just start with the with.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=14)** So, with.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=15)** So let's start by creating a temporary table called liabilities_union.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=22)** Okay.
>
> **[0:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=24)** Here in the liability section, we only have the account_loan table, but we'll need to create a separated field called liability as well.
>
> **[0:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=34)** This is because if other liability accounts appear in the future, the treatment to fit this new account is ready.
>
> **[0:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=42)** So, let's start by selecting all the fields.
>
> **[0:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=47)** And 1 as order_process.
>
> **[0:53](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=53)** From the table account_loan.
>
> **[0:57](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=57)** Now union all with our manual record.
>
> **[1:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=64)** So let's select the date_part, year of calendar_at, and let's call this field period_year.
>
> **[1:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=76)** Now let's add a manual field called Liabilities, and let's call this field account.
>
> **[1:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=85)** Also, let's create a field 0, and call that total_amount.
>
> **[1:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=91)** And also, let's create a field 999, and call that order_process.
>
> **[1:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=98)** Great. All these fields are from the table calendar.
>
> **[1:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=102)** And we cannot forget to group by the date_part field.
>
> **[1:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=107)** So let's copy here and paste it.
>
> **[1:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=111)** Let's take a look in this table.
>
> **[1:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=112)** So select all from liabilities_union.
>
> **[1:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=118)** Let's select and run.
>
> **[2:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=121)** Great, this is what we need.
>
> **[2:02](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=122)** And as we did in the assets table, now we need to sum up the total of the year in the liabilities account.
>
> **[2:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=131)** Let's do that with the case field.
>
> **[2:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=136)** So, let's select the period_year.
>
> **[2:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=140)** Now let's create a manual field called Liabilities.
>
> **[2:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=145)** And let's call this field section_bs from balance sheet.
>
> **[2:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=152)** Now let's bring the field account.
>
> **[2:35](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=155)** And let's create a case.
>
> **[2:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=157)** So, when the order_process is equal 999, then we'll use the sum of total_amount over partition by period_year and order by order_process.
>
> **[3:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=180)** Okay, and when the order_process is not 999, which means else, then we just need the total-amount field.
>
> **[3:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=192)** Now let's type here end to signalize that we finish our case, and let's call the field total_amount.
>
> **[3:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=200)** Now let's run it again.
>
> **[3:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=203)** Sweet.
>
> **[3:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=204)** We have now finished the liability section.
>
> **[3:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=207)** Now let's make the query materialized view.
>
> **[3:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=210)** So let's close the tab and let's go to the first row, and let's type here create materialized view, and let's call that section_liabilities, and as.
>
> **[3:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=226)** Let's select our query, and let's run again.
>
> **[3:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=231)** Great. View created.
>
> **[3:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=234)** Now we just have to save the script.
>
> **[3:57](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=237)** So let's close here.
>
> **[3:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=238)** Hit Save.
>
> **[4:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=240)** Now I'll call that section_liabilities.
>
> **[4:06](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=246)** And let's hit OK.
>
> **[4:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=250)** Great. We have our script saved.
>
> **[4:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=252)** Very good.
>
> **[4:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=253)** We have already created two out of three sections.
>
> **[4:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=256)** See you in the next video, where we're going to build the owner's equity section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[CTE]] (1)
> **Code Identifiers:** order_process (5), period_year (3), total_amount (3), liabilities_union (2), account_loan (2)
> **UI Navigation:** select the (2), go to (1)
> **Env Vars:** sql (1), cte (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Building the Owner's Equity section](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=0)** - [Instructor] Now let's create the third and final section of the balance sheet, the owner's equity section.
>
> **[0:06](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=6)** As the structure of the retained earnings is different from the orders, the query in this section will be as well.
>
> **[0:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=12)** Let's start by creating a [[SQL]] document.
>
> **[0:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=16)** Okay, and we'll use a [[CTE]], so with, and let's start by creating the oe_union temp table.
>
> **[0:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=26)** OE stands for owner's equity.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=30)** Now remember that in the table retained earnings details, we have already done this work of having a record that summarized the annually account result, so we will select the summarized record only.
>
> **[0:45](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=45)** So let's select, period year, also the transaction type,
>
> **[0:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=54)** and let's call that account.
>
> **[0:57](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=57)** Let's select the total amount as well, and let's create a field one and call that order process.
>
> **[1:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=67)** These fields are from the table account retained earnings details, and since we just need one record from the table, let's filter where transaction type is equal retained earnings.
>
> **[1:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=89)** Now we have only the record we need.
>
> **[1:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=91)** Let's select all from oe_union so we can see the result.
>
> **[1:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=98)** Perfect.
>
> **[1:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=100)** And as the owner's equity section may have one more account, the capital stock, we will also leave it ready for a possible future edition.
>
> **[1:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=111)** So let's first close this tab, and now we will create our union.
>
> **[1:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=119)** Union all, and now let's create a manual record to receive the owner's equity total by year.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=127)** So select date part, year, of calendar at,
>
> **[2:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=136)** and let's call this field period year.
>
> **[2:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=141)** Also, let's create a manual field called owner's equity, and let's call this field account.
>
> **[2:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=151)** Now let's create field zero as total amount, and let's create a field 999 as order process.
>
> **[2:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=160)** There fields are from the table calendar, and before I run, I forgot the N here, so calendar, and now let's run.
>
> **[2:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=171)** Great.
>
> **[2:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=172)** We have the retained earnings, and we have the owner's equity.
>
> **[2:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=178)** Okay, let's close this tab and let's continue our treatment.
>
> **[3:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=184)** So now let's select the period year.
>
> **[3:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=188)** Also, let's create here a manual field, owner's equity, and let's call that section_bs.
>
> **[3:17](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=197)** Also, let's bring here the field account, and the metric will be our case.
>
> **[3:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=205)** So case when the order process is equal 999,
>
> **[3:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=214)** then we have the sum of total amount over partition by period year and order by order process.
>
> **[3:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=231)** Okay, and when the order process is not 999, then else, we have the total amount field.
>
> **[4:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=240)** Now, end to symbolize that we close this case statement, and let's call this field total amount, great.
>
> **[4:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=249)** These fields are from the table oe_union.
>
> **[4:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=254)** Let's select everything and run again.
>
> **[4:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=258)** Excellent.
>
> **[4:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=259)** Now we have by year.
>
> **[4:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=263)** We have 2021 a bunch of times here.
>
> **[4:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=269)** I think that here, we need a distinct Let's run again.
>
> **[4:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=277)** Perfect. Now we have 2021 and 2022.
>
> **[4:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=282)** One row to the retained earnings, and another row with the summarized of owner's equity for that year.
>
> **[4:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=291)** Excellent.
>
> **[4:53](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=293)** Now let's close this tab and let's create our materialized view.
>
> **[4:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=298)** Let's came to the first row and type create materialized view, and let's call this view section owner's equity.
>
> **[5:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=312)** I just missed the O here, section owner's equity.
>
> **[5:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=316)** Perfect.
>
> **[5:17](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=317)** Now let's select everything and run again.
>
> **[5:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=322)** Sweet, we have just created our materialized view.
>
> **[5:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=326)** Now let's close this tab here and let's save the script.
>
> **[5:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=330)** So let's hit X, save.
>
> **[5:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=334)** Now I will call this section owner's equity, and let's hit, oh, that's... There's just a space here.
>
> **[5:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=346)** Okay, now okay, and we just save the script.
>
> **[5:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=351)** Now that we have created the three sections of the balance sheet, we can now create the balance sheet itself.
>
> **[5:57](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=357)** See you in the next challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[CTE]] (1)
> **Code Identifiers:** oe_union (3), section_bs (1)
> **UI Navigation:** select the (3)
> **Env Vars:** sql (1), cte (1)
> **Cross-References:** in the next (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Balance sheet year 1](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-balance-sheet-year-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-balance-sheet-year-1?u=76281980&t=0)** - [Instructor] We're almost at the end of our journey.
>
> **[0:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-balance-sheet-year-1?u=76281980&t=8)** We covered all the accounts, how they're divided, and everything that must be considered in each account.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-balance-sheet-year-1?u=76281980&t=15)** Besides that, we created the balance sheet sections.
>
> **[0:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-balance-sheet-year-1?u=76281980&t=19)** Your challenge now is to assemble the balance sheet itself.
>
> **[0:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-balance-sheet-year-1?u=76281980&t=23)** You need to build the balance sheet for the first year.
>
> **[0:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-balance-sheet-year-1?u=76281980&t=26)** That is for the year 2021.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-balance-sheet-year-1?u=76281980&t=30)** Remember that the balance sheet is made up of three sections, assets, liabilities, and owners equity.
>
> **[0:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-balance-sheet-year-1?u=76281980&t=38)** Now the ball is in your court.

> [!info]- Semantic Content
>
> **Cross-References:** we covered (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Balance sheet year 1](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=0)** (jazzy music)
>
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=5)** - [Instructor] How was the challenge?
>
> **[0:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=7)** Let's go for the solution together.
>
> **[0:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=9)** Most of our work was already been done.
>
> **[0:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=12)** We already have the accounts built.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=14)** We have already divided by section, and we have also built each section individually.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=21)** Now we just need to put all the sections together.
>
> **[0:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=25)** Let's start by creating a [[SQL]] file and we'll use [[CTE]].
>
> **[0:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=30)** So since then, let's start with the with.
>
> **[0:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=34)** Now let's create a temporary table called balance_sheet.
>
> **[0:39](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=39)** Okay, let's start by selecting all the columns from the view section_assets.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=48)** Now let's union all with the selection of all the columns from the view section_liabilities.
>
> **[0:58](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=58)** Now let's create a union all with the select of all the fields from the view section_owners_equity.
>
> **[1:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=69)** Perfect.
>
> **[1:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=70)** Let's go outside the parenthesis and let's select everything from the balance_sheet.
>
> **[1:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=79)** Perfect.
>
> **[1:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=79)** And now let's close this tab and to have the balance sheet of the year we want, we just need to add a filter here where period_year = 2021 and run again. Awesome.
>
> **[1:36](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=96)** Now we have the section_assets, the section_liability and the section_owners_equity, where you have the accounts that impact this section and the total by the section.
>
> **[1:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=109)** Everything we built together was to have this final report.
>
> **[1:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=114)** Now we can download this report if you want, and deliver it to the finance team.
>
> **[1:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=119)** And to avoid to having to set up this query again, let's materialize the view.
>
> **[2:06](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=126)** So let's close this tab and let's erase this filter so we have all the information in the balance_sheet.
>
> **[2:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=133)** And now let's create the materialized view and call it balance_sheet.
>
> **[2:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=142)** Okay, let's run it. Yep.
>
> **[2:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=146)** We have the base table for our annual balance sheet report.
>
> **[2:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=151)** Now we just need to save the file.
>
> **[2:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=153)** So let's close this tab and let's hit the X.
>
> **[2:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=157)** Let's hit save. I will call that balance sheet.
>
> **[2:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=162)** And let's erase this part here and hit okay again.
>
> **[2:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=167)** And now we have our script saved. Sweet.
>
> **[2:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=171)** I'm very happy that we have come this far with me.
>
> **[2:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=174)** Let's go together to the next chapter where we'll conclude the income statement.
>
> **[2:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=179)** I see you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[CTE]] (1)
> **Code Identifiers:** balance_sheet (4), section_assets (2), section_owners_equity (2), section_liabilities (1), period_year (1)
> **Env Vars:** sql (1), cte (1)
> **Cross-References:** next chapter (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (jazzy music) (1)


### 4. Income Statement

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding the income statement](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-income-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-income-statement?u=76281980&t=0)** - [Instructor] After building a balance sheet, it's time to build the income statement.
>
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-income-statement?u=76281980&t=5)** But to do this, we need to understand what income statement is.
>
> **[0:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-income-statement?u=76281980&t=10)** Unlike the balance sheet, which analyzes the company from the years of analysis until its founding, the income statement makes an annual analysis of income.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-income-statement?u=76281980&t=22)** That's why when we care out the income statement for the years after the first year, we say that the income statement is an analysis between two balance sheets.
>
> **[0:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-income-statement?u=76281980&t=33)** In the diagram below, it is clear that the Year 1 balance sheet is a snapshot of the company from the end of the Year 1 to the finding of the company, just like the Year 2 balance sheet is an analysis for the end of the Year 2 to the beginning of the company.
>
> **[0:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-income-statement?u=76281980&t=52)** But the income statement for Year 2 is the analysis of the changes in income between the balance sheet of Year 1 and the balance sheet of Year 2.
>
> **[1:03](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-income-statement?u=76281980&t=63)** In other words, what happened to income during just the second year.
>
> **[1:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-income-statement?u=76281980&t=68)** Now that the period that is analyzed by the income statement is clear, let's understand what the sections of this finance report are.
>
> **[1:17](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-income-statement?u=76281980&t=77)** Unlike the balance sheet, which analyzes any and all financial movement, the income statement analyzes the company's revenue and expenses.
>
> **[1:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-income-statement?u=76281980&t=89)** As we have already seen during the construction of the balance sheet, revenue and expenses are in the retained earnings account, where the sales of [[Microsoft Products|products]] and services are revenue and cash outflow are expenses.
>
> **[1:45](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-income-statement?u=76281980&t=105)** Also, it is essential that all expenses are detailed in the report income statement.
>
> **[1:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-income-statement?u=76281980&t=112)** Besides the revenue and expenses, in the income statement we need to present a metric called net earnings, which is the difference between the inputs and the outputs, which means the difference between revenue and all the expenses.
>
> **[2:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-income-statement?u=76281980&t=131)** So the net earnings formula is equal revenue minus expenses.
>
> **[2:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-income-statement?u=76281980&t=138)** In conclusion, the income statement has three sections: revenues, all detailed expenses, and the net earnings.
>
> **[2:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-income-statement?u=76281980&t=149)** Now that we understand the content of the income statement, let's get to work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Definitions:** is an  (2), is a  (1), in other words (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Income statement](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-income-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-income-statement?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-income-statement?u=76281980&t=5)** - [Presenter] Now that we've covered what the income statement is and what the section are, it's time to get down to business and put together this report.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-income-statement?u=76281980&t=14)** Remember that the retained earnings is the net income.
>
> **[0:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-income-statement?u=76281980&t=18)** I'm sure you are capable to do it.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-income-statement?u=76281980&t=21)** Try.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-income-statement?u=76281980&t=22)** So, I will see you in the next video to show you how to build income statement.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Speakers:** - [presenter] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Income statement](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=0)** - [Instructor] How did this challenge go for you?
>
> **[0:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=7)** Let's go over the solution together.
>
> **[0:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=10)** Remember that the retained_earnings_detail table was constructed in a different way.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=14)** This happened because the retained_earnings table itself generates the Income Statement report.
>
> **[0:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=20)** Retained_earnings has the record with revenue, a record for each expenses.
>
> **[0:27](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=27)** And at the end of the year, we have a record called, Retained Earnings.
>
> **[0:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=33)** And what is the Retained Earnings record?
>
> **[0:35](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=35)** It is exactly the revenue subtract from all expenses for the year.
>
> **[0:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=41)** So to issue the report to our finance team, according to the US GAAP, all we need to do is replace the name Retained Earnings with Net Income.
>
> **[0:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=52)** Let's do that.
>
> **[0:53](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=53)** It's so simple that we don't even need the CT since the logic is very straightforward.
>
> **[1:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=60)** So let's go to our code and let's create a [[SQL]] file.
>
> **[1:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=65)** Now let's select the period_year.
>
> **[1:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=70)** And now, let's create a case field to deal with the name assignment to the field.
>
> **[1:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=76)** So case when the transaction_type is equal "Retained Earnings", we just need to replace that by "Net Income".
>
> **[1:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=94)** And if the transaction type, it's not equal "Retained Earnings", which means else transaction_type itself.
>
> **[1:47](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=107)** and now, end to finalize that the case ended.
>
> **[1:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=111)** And let's call this field transaction type.
>
> **[1:55](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=115)** And lastly, let's select also the field total_amount.
>
> **[2:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=121)** And all these fields are from the table, account_retained_earnings_details.
>
> **[2:09](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=129)** And now let's run this query.
>
> **[2:13](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=133)** Perfect.
>
> **[2:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=134)** We have the retained earnings, which is the Income Statement report.
>
> **[2:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=139)** And now, to issue the reports to our finance team, we just need to select the period of which we want this report.
>
> **[2:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=146)** In our case, the first year of our company.
>
> **[2:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=150)** So now, let's create a filter here where the period_year is equal 2021.
>
> **[2:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=160)** And let's run it again.
>
> **[2:43](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=163)** Perfect.
>
> **[2:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=164)** Now we have exactly the income statement report for the year 2021.
>
> **[2:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=171)** And now we can also create a materialized table with this report.
>
> **[2:55](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=175)** So let's erase this filter here, and let's go to the first row of this query, and let's create MATERIALIZED view income_statement
>
> **[3:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=190)** as our query, and let's run.
>
> **[3:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=195)** Sweet.
>
> **[3:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=196)** We have just created our Income Statement report materialized table.
>
> **[3:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=201)** Now let's save our script.
>
> **[3:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=202)** So let's close this tab and let's close our script.
>
> **[3:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=206)** And it will ask us if we want to save.
>
> **[3:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=209)** So let's hit Yes, and let's call that income_statement.
>
> **[3:35](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=215)** Perfect.
>
> **[3:36](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=216)** Statement.
>
> **[3:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=218)** Now, hit OK to save.
>
> **[3:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=221)** And we have the script saved.
>
> **[3:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=224)** Excellent.
>
> **[3:45](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=225)** We have just finished our second and last report.
>
> **[3:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=229)** See you in the next chapter with some technical and non-technical considerations for this project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Code Identifiers:** period_year (2), transaction_type (2), income_statement (2), retained_earnings_detail (1), retained_earnings (1)
> **UI Navigation:** go to (2), select the (2)
> **Env Vars:** gaap (1), sql (1), materialized (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Balance sheet and income statement considerations](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=0)** - [Tutor] Before we finish this course, I believe it's important to bring some considerations about the maintenance and the insights we can take from the balance sheet and the income statement.
>
> **[0:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=10)** To start, let's think about the technical aspects that involve developing the reports that are also learned in this project.
>
> **[0:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=18)** When you think about maintenance, we need to think how easy it is to others and to ourselves in the future to understand what was done.
>
> **[0:28](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=28)** Since we are using [[CTE]], it's really easy to read the code.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=32)** Also, it's easy to build new accounts and just add new views in the sections by adding the views in the union.
>
> **[0:41](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=41)** And the risk is about the dependencies we have between the views.
>
> **[0:45](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=45)** We develop the accounts views based only on the tables from the database.
>
> **[0:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=51)** On the other hand, when we build the sections views, we use the accounts views as our data source.
>
> **[0:57](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=57)** And finally, to build the balance sheet, we use the sections views as data sources.
>
> **[1:03](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=63)** This way, we need to have a process to guarantee that the accounts views will update before the sections views, which must be updated before the balance sheet report.
>
> **[1:15](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=75)** Although the income statement has a lower risk, since it's using accounts instead of sections, there is still a risk since the account retained earnings details table, that is the source for this report, is a materialized view.
>
> **[1:31](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=91)** Usually this process should be automated by a team, like [[Data Engineering]], that would orchestrate the order of the updates and set up alerts when the process fails for whatever reason.
>
> **[1:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=104)** But, for those things that do not have data engineers, for example, it's even more important to have this process mapped and documented so that when you deliver reports to the business areas, you do so with the certainty that the data has been updated correctly.
>
> **[2:03](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=123)** This way you can rely on the data you present, year after year.
>
> **[2:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=128)** Since we covered the risk of this project, now we should move forward to understand the insights and the metrics we can create from these reports.
>
> **[2:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=138)** From our balance sheet, we can answer questions, like, what are the company's primary assets?
>
> **[2:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=145)** How is the company financing the purchase of assets?
>
> **[2:28](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=148)** How much earnings is the company managing to retain through its existence?
>
> **[2:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=154)** Additionally, you can extract metrics, such as current ratio, which is current assets divided by current abilities.
>
> **[2:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=164)** It measures a company's ability to pay short-term obligations; all those due within one year.
>
> **[2:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=172)** Debt to assets ratio, which is the total liabilities in year X divided by total assets in year X.
>
> **[3:02](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=182)** This is a metric commonly used to make inferences about the company's financial decisions in which it's possible to conclude whether the company chose to rely on debt or assets for funds, for instance.
>
> **[3:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=196)** And net current assets, which is calculated by subtracting current liability from current assets.
>
> **[3:23](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=203)** This way we can identify how much money the company has to purchase inventory and pay inventory on its loans.
>
> **[3:30](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=210)** And so many other metrics.
>
> **[3:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=213)** Like the balance sheet, the income statement also allows us to answer a series of questions.
>
> **[3:39](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=219)** For instance, how much has the company grown since last year?
>
> **[3:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=224)** How profitable is the company?
>
> **[3:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=226)** What is the relationship between revenue and individual costs?
>
> **[3:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=232)** And the three common metrics you can discover from income statements includes gross margin, which is the revenue of year X minus the cost of goods sold of year X.
>
> **[4:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=244)** This analyzes the company efficiency in using labor and suppliers to produce goods or services.
>
> **[4:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=251)** And we have growth of revenue from year X to year epsilon, which is revenue year X minus revenue year X minus one, divided by revenue year X.
>
> **[4:25](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=265)** It helps to understand how the company has been growing in revenue all over the years.
>
> **[4:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=273)** And we have ROS, which stands for return over sales, which is net income of year X divided by revenue of year X.
>
> **[4:43](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=283)** This measures how efficiently a company converts sales into profits.
>
> **[4:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=288)** This can be useful when comparing companies operating in the same industry and within roughly a similar size.
>
> **[4:56](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=296)** Not only do you now know how to generate two of the most important financial reports for companies, you're also able to generate metrics that help stakeholders understand the business in more depth and make better decisions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE]] (1), [[Data Engineering]] (1)
> **Analogies:** for instance (2), for example (1), such as (1)
> **Definitions:** is a  (2), stands for (1)
> **CLI Commands:** make (2)
> **Env Vars:** cte (1), ros (1)
> **Cross-References:** we covered (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [tutor] (1)

#### [Your SQL journey](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/your-sql-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/your-sql-journey?u=76281980&t=0)** - [Instructor] I'd like to thank you for having the courage and commitment to get here.
>
> **[0:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/your-sql-journey?u=76281980&t=4)** Through this course, we went in depth on two of the main financial reports that all companies need to issue.
>
> **[0:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/your-sql-journey?u=76281980&t=11)** The balance sheet and the income statement.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/your-sql-journey?u=76281980&t=14)** The knowledge you gain will help you in any profession.
>
> **[0:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/your-sql-journey?u=76281980&t=18)** For example, if you work on a data team, now you have a strong understanding of how company's transactions affect the accounting accounts and how a company operates through those reports.
>
> **[0:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/your-sql-journey?u=76281980&t=29)** Or maybe you work on a finance team.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/your-sql-journey?u=76281980&t=32)** You now have tools to manipulate data using [[SQL]] and create materialized views.
>
> **[0:38](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/your-sql-journey?u=76281980&t=38)** No matter your role or profession, I hope the journey has been as uplifting for you as it has been for me.
>
> **[0:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/your-sql-journey?u=76281980&t=44)** And above all, I hope you can apply this knowledge to help you and your company became increasingly data-driven.
>
> **[0:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/your-sql-journey?u=76281980&t=51)** If you have any questions or want to better understand the world of SQL, contact me on [[LinkedIn]].
>
> **[0:57](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/your-sql-journey?u=76281980&t=57)** Now, the ball is in your court.
>
> **[0:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/your-sql-journey?u=76281980&t=59)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[LinkedIn]] (1)
> **Env Vars:** sql (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Gabriela Baldivia Soncini]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/sql-for-finance-income-statement-project-4477127/codespaces)

## Skills Covered

- Financial Data
- SQL

## Path Context

### In [[SQL for Data Professionals in Finance]]
← [[From Excel to SQL]] | **4 of 4**

## Appears In

- [[SQL for Data Professionals in Finance]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)