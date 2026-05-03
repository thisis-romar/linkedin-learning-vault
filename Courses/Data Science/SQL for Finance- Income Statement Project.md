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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/the-power-of-sql-in-financial-reports?u=76281980&t=0)** - [Instructor] One of the most important reports in the financial world is the income statement. Not only can an income statement shows a company's finances, but it helps a company and its employees plan for the future and scale their business for the long run. In this course, we will discover which reports and formats are required by the US general accepted accounting principles. We will create a balance sheet and an income statement and sharpen our knowledge of [[SQL]]'s incredible capabilities. Let's start this journey of learning how to create some of the most important financial reports that all companies needs. I am Gabriela Baldivia Soncini, I've been working with data, especially with SQL for over 10 years.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=0)** - [Instructor] Do you know what are the main accounting financial reports? It's important to know that reporting has been standardized by US GAAP. That stands for General Accepted Accounting Principles. As opposed to cash-based accounting, US GAAP uses accrual accounting. Accrual accounting records transactions when they happened, regardless of when they affect cash flow. This difference will be essential when we define which records we will use. So let's go through the main required [[Financial Statements]]. The first one, balance sheet. The balance sheet shows the financial position at a specific point in time. Income statement. Income statement shows the result of operations over a period of time. Third one, statement of cash flow. The statement of cash flow shows the sources and uses of cash over a period of time. Our course will cover the balance sheet and the income statement. Our course will cover the balance sheet and the income statement. Also, you'll be able to generate the cash flow on your own after this project. You can find an example of a balance sheet in the course Exercise Files. So let's start with understanding the balance sheet. This is perhaps the most important financial statement
>
> **[1:35](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=95)** that a company prepares. Whenever we analyze a company's finances, we must specify a period of time. Periods have beginnings and endings. In a balance sheet, the company is pictured at the start of a chosen period. A balance sheet summarizes the information about the company that has been accumulated since the inception. The sections of the balance sheet are assets. It is stuff that the company owns that's going to be beneficial to it at some point in time, for instance, buildings, cash, inventory. Second, liability. These are the company's debts, for instance, the amount owned to suppliers and loans from banks. Last one, owner's equity. It's the capital raised by the company. It can be two types, capital stock, the amount of fund that the investors have invested in the company by giving the company cash in return of some stocks and returned earnings. The company generates some earnings and retains the equity in its own business instead of paying it out to shareholders in dividends. And we have the balance sheet equation. We can tell wherever the company got its funds to invest in those assets
>
> **[3:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/financial-reports?u=76281980&t=188)** by looking at liabilities and equity. This is because a company's assets are equal to liabilities plus owner's equity. After each transaction is logged in, the equation, assets equal liability plus owner's equity, must always be respected. If the balance between the variables is not true, it means that something is wrong in the log transaction. Now let's understand the income statement. It shows the difference between the balance sheet at the beginning and the end of the period of time being analyzed. The sections of the balance sheets are revenues, all cash receipts, expenses, all cash-out flows, and net earnings, which is revenue minus expenses, and result in increasing of owner's equity from the company's operation activities. These reports are generally generated in the end of each year. So we have covered the key elements of the balance sheet and income statement and all it sections as well. Next, we will understand our fictitious case that will be setting for our project. See you there.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=0)** - [Instructor] Through this course, we are going to work on a project together. This is a practical project because I believe that learning needs to come together with practice. And to [[Jetpack Compose|compose]] our business scenario, I created a department store, and in our database, we'll see [[Microsoft Products|products]] such as t-shirts, blouses and sweaters. To illustrate the inputs and outputs of items, we have two tables. The first of this is purchases with the record of purchases we make with product suppliers. This way, we have products to sell. The second table is sales, where all sales of products that we make to our customers are records, but a company cannot exist just by buying and selling goods. So to support our company, in the first few years, we took out some loans. To illustrate this, we have the loan table. In addition, we have to make payments such as the sellers of our employees, the rent for the space we're using. We can see these records in the payments table. In this user case, we'll build a balance sheet and income statement reports, like we covered in our previous video. First, we need to identify where the assets, liabilities, and owners' equity are in our tables, so that we can build the balance sheet sections. To help us separate all the records in our database
>
> **[1:35](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-project-s-data?u=76281980&t=95)** in a way that makes sense, we need to create accounts for which type of transaction. For example, fiscal money is a specific type of asset, so to make it easier to identify the transactions involving physical money, we need to create an account called cash account. We'll do this for each type of transaction within each section of the balance sheet. We also need to understand when to consider a transaction to be added or to be reduced from each account. To do this, we need to follow four guidelines. The first one, the accounts that are affected. We need to understand which accounts are being affected. The second is the type of account that we are talking about. Either it's asset liability or owner's equity. The third, whether the accounts increase or decrease. And fourth, the dollar amount. These four guidelines are extremely important since we will revisit them later in the course. Now, that we understand the types of transactions and when they should be records, in the next video, we'll understand the scenario and all the transactions we need to consider and how these transactions affected the accounts. See you there.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/exploring-the-user-case?u=76281980&t=0)** - [Narrator] For this course, we will explore a scenario of a fictional company. Let's take some time to understand this scenario. We have five large blocks of transactions. First, we take out loans from the bank to start the company. When we take out loans, two accounts are affected. First, a cash account is created to receive the money from the loan. The cash is an asset type of account. Then a loan type account, which is a liability, is created to signal that a loan has been made and we owe that money to the bank. When we pay the loan, we have a reduce in the cash and a reduce in the loan account.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [narrator] (1)

#### [Cash Account, part 1: Using CTE](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=0)** - [Instructor] The time has come to learn about one of the most powerful statements in [[SQL]], the [[CTE]]. I personally love this statement because it helps me to solve the most complex problems. The strategy I use is to break something complex into small, easy parts. When I first learned it, it changed my life. And in this course, it will change your life too, believe me. So let's start with the what. What is CTE? CTE stands for [[CTE|common table expression]]. And what is important for you to understand is that subqueries only exist during the process. In other words, after securing our query, all subqueries that are created in CTE structured are deleted, leaving only the output. And the key point of CTE is to help you divide queries. This way you can break the process into parts to make it easier to build a large and complex query. So let's start to build the cash account. Remember that basically all the transactions affect the cash account. In our scenario, we have five events: loan in, purchase of inventory, purchase of equipment, sale of [[Microsoft Products|products]], and payments of expenses such as rent, loans, interest of loans, and so on and so forth. Another fundamental point is to define the time range that our reports will cover. As financial reports are normally made at the end of the year, let's define a calendar year. Perhaps your thoughts have already started thinking about
>
> **[1:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=94)** the steps necessary to bring this report. To facilitate our train of thought, allowing us to break down data process into stages, we'll use CTE. The CTE will allow us to create several queries which we'll use to deal with the particularities of all the tables that make up the cash account. So let's start by treating the products we buy from suppliers. This information is in the purchase table. We need to process the purchase date before entering the data into the purchase account. This is because when we buy or sell something, you can buy or sell it using cash or credit card. When we sell or buy using credit card, payment is generally in the following month. So to understands the cash outflow, we first need to adjust the payment date to the actual date the money left, or enter our cash register, which is the month following payment. So let's go and get to the code because I'm sure you'll be as fascinated as I was when I learned CTE. Okay, let's start by creating a SQL file, clicking here. Okay, now let's start the CTE with the with command, with. Okay, now we put the name we want for our first CTE query. In our case, let's call it purchase_dates. Okay, and then call as, and open and close parentheses together is a very good tip because everything that opens has to close.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=190)** And after opening many parentheses, it can get confusion, which one we already close, which one are still open. So to avoid confusion, it's best to open and close together. Okay, so after that, let's go back inside the parentheses, press Enter to make it clear where we are, and then we can continue our query. First, we need to select the month, but we need to process it according to the type of payment method. To do this, we'll use the case expression. So we start case, then we put the first conditional: when payment_method is equal cash. Okay, then we want the payment_at. As we only have two types of payment here, let's go straight to the else. So if the payments type is not cash, if the payments type is credit card, then we have the payment_at and it needs to be increased by an interval of one month. Okay, and to finish the case, we add end in the end. And now we can name this column as actual_payment_at. Perfect. Now remember that when we buy inventory, this is an outflow of money from our cash flow.
>
> **[4:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=286)** So the sign here is negative. Now, let's sum the quantity plus the amount, and let's call this field as total_amount. Okay, all these fields are from the table purchases. Great. Okay, as we have one of the five mathematical aggregation functions, in our case, the sum here, we must use the group by. So group by and what we're going to group our sum by. Let's group by all the fields that are in the select that does not have an aggregation function on it, which is in our case, the case extraction. So let's copy this code until here. Remember not to rename the fields in the where or in the group by. So let's copy the case until the end. Copy and paste in the group by. Okay, now to see our query running, let's go outside the parenthes and let's select all the fields from purchase_dates. 'Cause now within the CTE, we can reuse this to be query purchase dates and any other we create whenever want in the CTE. So now let's select all the code with Control + A and with Control + Enter let's run the query.
>
> **[6:20](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-1-using-cte?u=76281980&t=380)** Perfect, we have the actual payment_at and the total_amount. But what we want here is to group the total amount per year. So let's continue this query in the next video where we build others sub queries in the same CTE structure. See you there.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=0)** - [Instructor] In this video, we will continue building the cash account using [[CTE]]. In the last video, we started treating the inventory purchased. We identified when the payment was made by credit card and added one month to find the correct month the money left our account. Now, we need to group the total amount by year. So, let's go get to the code. Okay, now we need to create a new subquery. To do that, let's add a comma, go to the next row, and our new subquery will be called purchase. Okay, as, open and close parentheses, and go to the next row. Now, we will select the date_part of actual_payment_at, and let's call that period_year. Oh, I have a typo here, actual_payment_at. Okay, now let's add a comma here to signalize that we have a new column in the select. And now, let's sum the total_amount and call this field total_amount. All these fields are from the table, purchase_dates. Okay, and now, we have a mathematical aggregation function. And so, we are forced to add the group by. We need to add a group by with all the fields that are in the select and do not have a mathematical aggregation function, which is the date_part.
>
> **[1:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=92)** Always remember to remove the name of the fields in the where and in the group by. So, we are going to copy the fields just until the parenthesis. Copy and paste here in the group by. Now, let's see how it's going. Let's call the purchase_table. Control + A and and Control + Enter to run the query. Oh, we have a issue here in the purchase. Oh, we need to call here the year of the actual_payment_at. So here and here, we need the year. Again, select all and Control + Enter. Okay, this is the output of our query. We have the total_amount grouped by period_year. Excellent. Now, let's close these tabs. And now, let's copy these two temporary tables, purchase_dates and purchase. I will add a comma here and I will paste these two tables in the next row. Now, let's make some changes in the pasted tables. This is because the sales table will require exactly the same treatment, but some names will change. So, let's make the small changes. First, we need to change the names from purchase to revenue in both table, so I will change to revenue here. I will copy and I will paste here and here.
>
> **[3:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=188)** I will also paste here. Okay. Now, in revenue_dates, let's delete the negative sign in the total_amount field, since revenue is an inflow of money into the cash account. And in addition, in the total_amount, we will change the name of the amount field to price. So, let's change here to price. Now, all that's left is to change the name of the table in the from, from purchase to sales. Wonderful. We already handle both inventory transactions of purchase and sales. Let's run the query to see our revenue. Great, that's exactly what we need. Let's close this tab again. Now, let's move on to our next transaction that affect the cash account. The next transaction is the acquisition of money for loan, so we will call our next big query as loan_in. Okay. The loan treatment is very similar to the treatment of revenue and purchases. To begin, let's select the date_part of year of loan_at, and let's call this field period_year. Let's add a comma to signalize that we have another field in the select. And now, let's sum the field value, and call it total_amount.
>
> **[4:43](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=283)** These fields are from the table loans. We have a sum, so we must use now the group by. We will copy the date_part in the select and paste in the group by since it's the only field besides the sum in the select. Now, let's see what the loan_in table looks like. So, let's put loan_in, Control + A and Control + Enter. Again, that's our table. It looks exactly how we need it. Great. Now, we can close this tab. Our last big query will be called expenses. This is because we are going to include here all the expenses we have in the payments table. So let's copy the loan_in query and paste here in the expenses to make some changes. To start, let's change the loan_at to payment_date. So, payment_date. I will copy here and paste here. Now, let's change the sign of the metric to negative, since expenses is money leaving our company. And also, let's change from value to amount here in the total_amount field. Great. Our next change is change from table loans to table payments. Now, let's also add a filter
>
> **[6:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-2-using-cte?u=76281980&t=378)** and the condition to the filter is where payment_type is in. We have some types here. Equipment, wage, rent, utility, tax, loan, and finally, interest. That's it. We've finished dealing with expenses. Let's take a look at the table. Great work. Now that we have structured tables of all transactions that affect the cash account, in the next video, we will learn how to unite all this data using union all.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=0)** - [Instructor] Now we'll learn how to use and how to differentiate the UNION and UNION ALL. We'll use it to build the cash account. Now we have the table purchase, revenue, loan, and expenses. And we'll use [[SQL]]'s UNION statements to unify all those tables to create the cash account. The UNION statement joins the rows of one table and stacks the rows of the second table at the end. Let's understand the difference between JOIN and UNION statement. In JOIN, we add new columns to the table. We take columns from one table and add them to the other as if we are adding more details to already existing data. There is a particular type of JOIN called CROSS JOIN that increase the number of rows as well, but we'll handle that later. On the other hand, UNION doesn't increase the number of columns. That is the amount of details in each rows remains the same. What we do here is increase the number of total rows in the table and there is two different types of UNION. The UNION itself and the UNION ALL. Let's dive to better understand it. So let's create a SELECT of two fields here. The first field is number one and I will call it as number_x. The second field will be the letter A,
>
> **[1:36](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=96)** and I will call it letter_x. Now, I will copy the SELECT and I will paste here after the UNION. All right, now, if you run this query, you can see that we have only one row, but we have two SELECTs so we should have two rows. Where is the second row? Well, the UNION keeps only different rows. Let's try to change the letter_x in the second SELECT by B.
>
> **[2:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=136)** Let's run it again. Now we can see that we have two rows and that's because in one of the columns, the content is different. So now it is clear that the entire row in all columns must be equal to be considered just one by the UNION statement. Let's close these tabs. Okay, now in this same query, let's add ALL here. And also, let's go back the letter B to A and let's run this query again. Now our output has two identical rows. This is because UNION ALL joins all rows regardless of whether they're repeated or not. Perfect, we need to understand that to finish our cash account. Okay, let's close the tab and the script. We don't need to save it and let's go back to our cash account. Now let's create a new subquery called cash_union. We'll do exactly what we just learned. Now let's select all the fields from loan-in. Now we need to UNION ALL with the SELECT of all fields from expenses. Okay at this point, we can copy the UNION and the SELECT so you don't have to type
>
> **[3:50](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=230)** everything over and over again. So now let's UNION ALL with SELECT of all fields from the table purchase. And again, let's UNION ALL SELECT of all fields from the table revenue. Let's visualize this table. So let's SELECT here all tables from cash_union. Select all code, Control + A, and Control + Enter to run the query. Amazing, now we can close this tab and go back to our query. Okay, now we can create a new SPID query and call it cash_amount. Okay, now what we want to do here is summarize the values by period_year from all these different tables. So let's select period_year, and let's sum(total_amount) and call it total_amount from the table cash_union.
>
> **[4:59](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-3-union?u=76281980&t=299)** And since you have a sum, we need to group by period_year. Okay, now let's see how this table is doing. Let's select all from cash amount and run it. Great, now we have all the values summarized by period_year. So in a nutshell, we just learned the difference between UNION and JOINs. While JOINs, with the exception of CROSS JOIN, should only add columns to the table, UNION only add rows. And we also learned that UNION ALL joins all rows together and UNION only joins rows with different content.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=0)** - [Instructor] We have now reached the end where we'll finish building the cash account. I know the treatment's quite extensive, but the cash account is the most extensive account. I wanted to start with this one because I wanted to show you the power of the CT. In last video, we ended up with the value summarized by year period, but there is a big leap here. In the first year, the balance starts with zero, so just use the amount transacted in that period to find the account value. But in all the other periods, we need to consider the value resulting from the previous period, and iterate it to the current transactions to reach the correct value for the cash account. Always remember that balance sheet is a photo from the company's conception to the current moment, so the entire past must be considered. And there is an easy way to iterate values, which is using window function. We have a hypothetical table with three fields, year, client and value. Here we are creating a field with the sum of the value over order by year. In other words, the table is ordered by the year field, and then it sends row by row according to the year field. After sorting, the sum resulting is the sum of the result of the previous line with the value of the current line. So for example here, the first row is seven.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=95)** Since there's not a previous one to be combined with, the result is itself seven. For Chris's line, the result of the top line is seven, the seven is added to the Chris 2, and result is nine. In Joel's line, the result of the previous line, which is nine, the nine is added to five, the current value, and the result is 14. This is exactly what we need to do in our cash account. So let's go to the code. As we are now building our final table, we don't need to create a temporary table, we go straight to the final query. So let's erase this part here. So let's select period_year, and let's add a manual field here called cash, and call it account. Also, I will bring the field total amount and call it original. And now we need to sum the total amount, total amount, but we need to sum over a specific order, which is iterating over, order by, period_year. Let's call that total_amount. These fields are from the table cash_amount. Okay, now let's select our query and run it.
>
> **[3:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=191)** Okay, now you can compare the original and the total amount, where the total amount is iterating the original value. So now can you see that the value from the year 2021 has been added to the year 2022 in the total_amount field? Now that we can compare the results, I hope that it became easier to understand what [[SQL]] is doing here. In 2021, the original value is 320,000. As there is no previous value, our new field, the total amount, receives the same value. In 2022, we have 104,000, in 2022, which is added to the 328,000, and the result is 432,000. Incredible, isn't it? You just learned an advanced and widely used SQL too, the window function. And important to tell you is that when we use the over function, we cannot use the group by, since the over function is indicating how the aggregation function, sum, will behave. So, let's close this tab, and let's erase this original field, because we don't need it. Here, we add the long process of setting up the cash account. This took more than 60 lines of code. I hope you're proud of having made it this far. And now, let's transform this results table that we created
>
> **[4:45](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=285)** into a materialized view. The difference between a view and a materialized view, is that every time we call a view, it's rebuilt at the query time. So, if you use a view in the from, or in the join, it's calculated all over again. The materialized view, it stores the query data and does not run new data, unless you ask it to run it again and update the data. So, to create the materialized view, let's go to the first line of our file before the width command, and here, let's type, create, materialized, view, account_cash, as. That's it. Now we can select all and run over again, and successful, we have now created a new materialized view, account_cash. And now that we finished the cash account script, let's hit the X here, and the VS code, it will ask us if we want to save the script. Yes, let's save it. Now let's rename it account_cash and hit okay. And now if you came here in the explorer, you can see the account_cash script. Awesome. Now let's do this to create all the accounts we need.
>
> **[6:19](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/cash-account-part-4-window-function-and-materialized-view?u=76281980&t=379)** From now on, the next treatments will be much simpler and easier, the difficult part's over. In the next video, we will build the missing assets account.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=0)** - [Instructor] We will now create our second asset account, which we'll refer to the sales we made, but we have not yet received the money for the [[Microsoft Products|products]] delivered, which is the account receivable. In our scenario, we only have this type of case in December when we make sales via credit card. This query is so small that we don't even need a [[CTE]]. This query is very direct. So, let's go to the code. Let's create a new file here in PL/[[SQL]]. Yeah, now we have a new file, and let's start selecting the date_part of payment_at, and let's call that period_year. Okay. And now, we will add a manual field here called Accounts Receivable, and lets call that account. And for our last field, lets sum price multiplied by quantity, and let's. Oh, price. I have a typo here, it's price. And let's call that total_amount. All these fields are from the table, sales. And now, we need to make a filter because we don't want the entire table, just the records where payment method is different from cash.
>
> **[1:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=94)** So, where payment_method is different from cash. And also, we want the date_part of month of payment_at to be equal 12, which is December. And now, we need to group by all the fields that are in the select and that do not have a mathematical aggregation function. That is, the date_part. So, let's copy it here. Copy the date_part year of payment_at. So, let's copy this part here and let's paste here. We don't need to group the manual field, Accounts Receivable. That's because this field does not exist in the table, sales, so it's not a problem for us. Okay, now we're ready. Let's select all with Control + A and Control + Enter to run. Perfect. We have our accounts receivable. Now, we just need to close this tab and go to the first line of our code to create our materialized view. So, create materialized view account_accounts_receivable as. Let's select all the code and let's run.
>
> **[3:11](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/creating-the-accounts-receivable-account?u=76281980&t=191)** Sweet, we have just created our second asset account. Great work. And now that we've finished the accounts receivable account script, let's click in the X to close the script, and the VS Code will ask us if you want to save the script. Let's hit yes. Now, let's rename it to account_accounts_receivable and let's hit OK. Now, our script is saved. Now if you came here to explorer, you can see the account_accounts_receivable script. Awesome. Let's move on to our next video where we will create the proper planning equipment account together.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=0)** - [Instructor] We have just created our second asset account. So now it's time for the property, land, and equipment account. When we buy equipment, or properties from the company, they became assets. However, we need to consider the depreciation of the equipment. That is, how much money we lose within the depreciation of that product. So we have some points to consider here. The transactions, we need to consider the purchase and the sale of land and equipment. And the depreciation, we need to consider the depreciation of the equipment. Land property is not considered depreciation because the value of land or property can even increase over time. Unlike a machine that has a useful lifespan. We will work again with [[CTE|CTEs]] to develop this query, which will be more extensive and we'll have to consider several aspects. Here we'll need to use cross join. What cross join does is add all rows from one table to each row of another. So in this example, we have the table of clients and the table of movies. When we cross join them we have every movie to every client. This is what we will do in the depreciations treatment. So let's just start dealing with depreciation. This is the most complex part of the query. So let's go to the code.
>
> **[1:33](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=93)** To calculate depreciation, we first need to understand how long the equipment be analyzed will last. In our scenario let's imagine that we expect the equipment to last 10 years before needing a replacement. So we need each piece of equipment to be duplicated to have one line per month. To do this, we cross join the purchase table with the calendar table. The calendar table is a table that has the first date of each month and it has 50 years of dates. So let's start by creating a new [[SQL]] file. Let's click here. Okay, now let's start our [[CTE]] with the width. Now let's rename our first query depreciation dates. So let's start by selecting the ID field, which refers to the purchase code. Now we have the payment date, which is the purchase date. Now let's add calendar at to compare the days between payments and the calendar table. And to finish, let add year from the table calendar, and let's rename this field as period year. Okay, let's select from calendar table. And now let's cross join with payment table.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=190)** Let's also filter the ID one so we can see what's happening with the table. Now let's select all the fields from depreciation dates and let's run this query. Depreciation dates. Okay, so we are filtering here the ID one, which means that we should have only one row, but we can see that one payment row from the payments table turn it into 360 rows here. That's because it's the numbers of row from the calendar table. We can see that we have just one payment date to all the calendar dates. This is not what we want. So let's close this tab and let's filter the year so that we only have month and year within the 10 years range of depreciation. And of course, filter the payment type equal equipment because we don't have property here in depreciation. Let's start doing that. Let's filter calendar at greater or equal to payment date and calendar at less or equal to payment date plus interval of 10 years. And also, let's add here a filter of payment type
>
> **[4:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=288)** equal equipment. Now let's run the query again. Great. We have here the ID 66 and 67. Let's filter also the ID 66. Run again. Okay, now you can see that this unique equipment has only 120 rows instead of 360. That's great. This is exactly what we want. Perfect. Let's close the tabs and continue our query. Another resource we need is a flag so we know when is the end of the year or the last month of usage of the equipment. So let's create this flag here. This is because if I buy equipment in March, its depreciation in the first year is equal to nine months, which is the difference in months between March and December. In the following years, the depreciation will be 12 months until the year in which the equipment turns 10 years old, which will be two months referring to January and February, as in March, it values zero and it's unusable, its extinguished. To create this flag, we'll use the case statement. So when year is equal date part, year of payment date
>
> **[6:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-property-land-and-equipment-account?u=76281980&t=386)** plus interval of 10 years, and here and month equal date part month of payment date, then we mark 1. because this is the last cycle of depreciation. The second case is to point out that every month, 12, before the last year must be indicated as the month of effective depreciation. So when month is equal to 12, then 1. the other cases are months in the middle of the cycle. And for all those cases, we'll point to zero, so else zero. And then, and to finish this case, and let's call this field flag 1 year. Also, let's bring the amount field. Now let's select our query and run it again to see the result. Okay, now let's close this tab. And now that you understood the dynamic of the dates, I'm going to remove this payments date here from the select because we don't need it anymore and we'll focus on the metric. Right, we are ready to work on the depreciation metric, and that's what we're going to do in the next video.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=0)** - [Instructor] In this video, we'll work on the depreciation metric. We'll calculate it from scratch, and to do this, we'll use window function again. Let's take a look at our table and remember what it looks like. So let's go to our code. The table has the interval we need to calculate depreciation, which is every month between the purchase date and completing 10 years and one month. What is depreciation? Let's go back to the slides. Well, depreciation is the total value of the item divided by the time we expected to be able to use it. As we expect to use our item for 10 years. This means that in 10 years and one month, the purchase price minus the depreciation value will be equal to zero. In other words, the item will no longer be worth anything and will no longer be useful to us. So now we need to know how many rows are in each equipment purchase. Knowing how many months we have, we can use this to divide by the amount paid and identify how much value each equipment lose per month. To do this, we'll learn how to use the partition by command, which is used with the over to define the behavior of the aggregation function. So let's take this table as an example. In the over partition by year tab.
>
> **[1:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=94)** Here, you can see a table with year customer value and the sum of the value over partition by year. This means that only the values from the same year will be added together, and this result will be in all rows for that specific year. So here, for example, we have the year 2021, and we have seven for Jess, two for Chris and five for Joel. If we sum seven with two, we have nine. If we sum nine with five, we have 14 and we have 14 to all rows for 2021 independently if it's Jess, Chris, or Joel, the sum is for the year. The same process will occur for all other years. Now thinking about our problem, let's go back to our code. Let's close this tab here. Now thinking about our problem, what we need to do is count all the rows over partition by ID for each equipment.
>
> **[2:49](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=169)** Then we have the number of months. To understand the money we lose for each equipment for month, we need to divide the amount per this entire formula, which is the number of months. This means we want to count all rows that have the same ID. When the ID changes, we reset the counter and start counting over again. Now that we understand what's doing, let's call this field installments. Okay, now let's run our query, perfect. So we have the amount of this equipment and how much this equipment depreciate per month. Our query is exactly the way we want. Now we can see we have $125 of depreciation per month in this equipment 66. Now let's close our tab and let's create a new common table called depreciation sum, where it will sum the value of the rows by curating the month. It's a similar treatment that we did in the cash account. Let's select all rows as it was in the depreciation dates, and then we'll add a field that will be the sum of installments over partition by ID,
>
> **[4:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=261)** because we need to understand the depreciation by equipment. And now to define the order of the iteration of the sum, we'll add order by calendar. At this way, the value of monthly installments will be added for each piece of equipment. Let's call this field total amount. Now let's call depreciation sum here, and let's run our query. Oh, yeah, we have here all these fields from the table. Depreciation dates, okay, let's run again. Okay, now you can see that we have the month iterating and adding the value. Great, we know function are great, aren't they? We can use partition by order by and the two combined. Okay, now let's close the tabs and I will change this name to depreciation amount. Now let's run the query again. If we use the amount column to help us situate ourselves, we see that the first row, we have 125. If we add another 125, we have 250. That's what the window function is doing. This will be done for the ID 66,
>
> **[5:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/window-function-and-depreciation?u=76281980&t=354)** and when there rows for the ID 66 run out, the sum resets to zero and starts counting again to the next ID. This because we used partition by, okay, now we can erase this amount column from our select. Let's run our query again. Wonderful. We're almost there. Now we just need to bring the original purchase amount and subtract them from the depreciation. This way we'll know how much of the equipment is left in each year. But we'll do that in the next video, see you there.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=0)** - [Instructor] In this video, we'll finish building the depreciation metric. We're almost at the end, so let's go directly to the code. So far, we found the depreciation value of each piece of equipment. Now, we need to add up the values of all equipment to understand what's the total annual depreciation value is. So let's go to our code and let's create our new table called depreciation. Let's select the period_year. And now, let's sum the total amount and let's call it total amount. All these fields are from the table depreciation_sum. Also, since we have aggregation function, let's add a group by year, period_year. Great, we finally finished building the depreciation. Let's see result, total amount. Oh yeah, here is depreciation amount now. So let's change it. Great, this is exactly what we needed. Now, let's close these tabs and let's continue our query.
>
> **[1:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=92)** Okay, depreciation only exists because equipment exists. So now, we need to bring the purchase of this equipment that depreciated into our query. So let's start by creating a new temp table called ple_purchase. This table receives the same treatment as the cash account expense table. So let's open the cash account file. Let's came here to explore, and then account_cash. Now, let's scroll down to expenses and let's copy this code here. Let's copy here and let's base here in ple_purchase. Let's copy here and let's base here in ple_purchase. Here, we just need to do some changes. First, let's delete this negative sign here. That's because the purchase of equipment enters positively in the inventory account. And the second change is delete here in the where everything besides equipment, great. Now that we have the assets input and the depreciation output, we need to join these two tables to find the annual value of proper cleaning equipment. So let's start by creating a new table called ple_union. And this table will be the all fields from depreciation, union all, then select of all fields from ple_purchase.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=190)** then select of all fields from ple_purchase. And now, we have everything we need in a single table. Let's see it, ple_union, great. Now, let's close this tab and let's create a new table called ple_sum table to add the annual total between ple_purchase and depreciation. So in this query, we will select period_year, and let's sum total_amount. And let's call this fields total_amount. This fields are from the table ple_union. This fields are from the table ple_union. And since you have aggregation function sum here, we need to add the group by with the period_year. Great, let's take a look. Awesome, it's close enough what we need. Let's close this tab now. Okay, now, let's create a new temp table called property_equipment. Let's select the period_year and let's create a manual field called Property, Land & Equipment. That's called field account.
>
> **[4:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=286)** Now, let's iterate the annual result. So let's sum the total_amount over order by period_year, and let's call this field total_amount. These fields are from the table ple_sum. These fields are from the table ple_sum. Okay, let's take a look in this table, property and equipment, awesome, but the numbers are really big here. So let's round. Let's close this tab and let's round this formula here with two decimal places. Oh, it's here, okay. Now, let's run again. Perfect, much greater. Great, let's close this tab, great. Now, we just have to create our materialized view. So let's go to the first line and type create materialized view account_property_equipment as our query. account_property_equipment as our query. So let's run. Great, executed successfully. So let's copy this name and let's click in the X, let's save. Let's add the same name,
>
> **[6:21](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/completing-the-depreciation-transaction?u=76281980&t=381)** account_property_equipment, and let's hit OK. Okay, now we saved our script here as well and we have completed the treatment of property, land, and equipment. Until now, we are able to learn the concepts of [[CTE]], union, cross join, and window functions. In the next video, we'll face your first challenge.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-inventory-account?u=76281980&t=0)** - [Narrator] Hi, the time has come for you to put all the knowledge you acquired during our use case and building inventory account on your own. Here are some key points to consider. To begin with, we need to consider the dates where the money actually enter or left our company. Also, we need to deduct from the purchase inventory the [[Microsoft Products|products]] that were sold. But the issue here is that the amount to be deducted from the sale cannot have a profit. If I buy a product for 10 and sell it for 20, I cannot have minus 10 in inventory. So, we need to deduct the original 10. Also, don't forget to iterate the result by period. So, that is your first challenge. Building an inventory account with those considerations in mind. Give it a try. I'll see you in the next video to go through the solution.

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
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=5)** - [Instructor] How did your first challenge go? I hope you had a great success. Let's now move on to the solution together. Let's start creating a [[SQL]] file. Okay, now let's start with the width. Now we need to do here the same purchase process that we did in the cash account table. So let's go to the file and let's open the cash account. Now let's copy the purchase dates and the purchase table here and paste in our script, perfect. The difference here is that purchase inventory is positive to the inventory account, so let's erase this negative sign. That's it, the entry processing is ready. Now we need to handle the outputs, but let's take a look first. Purchase. Okay, perfect. Now to handle the outputs, we need to identify the quantity of sales but multiply this value by the purchase value of the product. Since we cannot bring the profit here, let's create a common table called product_price. Now let's select distinct, the product name, and bring the amount.
>
> **[1:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=100)** All fields are from the table purchases. This way we know the unit value of each product. Let's see this table, products_price. Yeah, that's it, we have 88 rows here. Okay, let's close this tab. Now it's time to create the sale table. Here we will select the date_part, year, from the field payment_at and let's call that period_year. This field is from the table sales which we will call s and now we will use the left join. This way we can join the table product_price and let's call this table p. The key that joined these two tables is the product_name. So on s.product_name is equal p.product_name.
>
> **[2:55](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=175)** Now that we have joined the table, let's create the metric. So as product_sales means product leaving inventory, this metric is negative. Now let's sum the field. s.quantity which means quantities from the sales table multiplied by p.amount which means that amount field is from the product_price table, and let's call this field total_amount. Since we renamed our table to s and p, we can now use those letters to point to each table a field belongs to. And now as we have aggregation function in the select, we need to add the group by. So group by, and we need to put in group by the date_part, so let's copy and paste here in the group by. Perfect, let's take a look. Perfect, so let's combine those two tables into a common table called inventory_union. In this square, we will select all the fields from purchase, union all, select of all fields from sale. Let's run it and see the table, so inventory_union.
>
> **[4:37](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=277)** Great, we have all information together. Now we need to add those values together so that 2021 sales are deducted from 2021 purchases. Let's close this tab, and now let's create a new temporary table called inventory_sum. Now let's select the period_year and let's sum the total_amount and call this field total_amount. These fields are from the table inventory_union. Okay, let's take a look. Oh, now we have a mathematical aggregation function here, so we must do group by period_year, great. That's it, now we summarized the values by year. Let's close these tabs. Okay, we saw that now we have already the information of inventory per year. However we must remember that the value left from one year's inventory is not thrown away. It must be added to the value of the following year's inventory. So the last step is to create a new common table called inventory
>
> **[6:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=372)** where we will select the period_year and we'll iterate our metric. Now we've already seen a few times in this project that it's possible to iterate the metric using Window functions. Here we will sum the total_amount field over, order by period_year, and let's called this field total_amount. These fields are from the table inventory_sum. Now let's run ECR table inventory. Perfect, that's our table. Now we just need to create a manual field here and let's call this field account. Okay, let's run this code again. Even perfect, that's what we need. So now let's just close this tab and this tab, let's scroll up to the first row, and let's create our materialized view. So create materialized view account_inventory as our query. Let's run this again. Okay, perfect, now we have our table. Now let's just close this tab and close the script so we can save it, let's hit Save. Now I will call this script account_inventory
>
> **[7:48](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-inventory-account?u=76281980&t=468)** and okay, now our script is saved, and sweet, that's it. I hope you have put your knowledge into use and that you had fun in this process. So now that we've finished creating all assets type accounts, let's create the missing accounts in the next chapter, see you there.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=0)** - [Instructor] In the last chapter, we completed the construction of all assets type accounts. Let's remember that the balance sheet is made up of assets, liabilities, and owner's equities account. Liability is money we owe someone. For example, it could be a purchase you made. You have already received the product, but we will only pay in the next month. In our scenario, we do not have this type of purchase. If we did, we would have to create an account for accounts payable. This is not our case, but we contracted that for loans. Because of this, we need to create a loan account, which is a liability, which to sign that we have this debt. This account will have both the acquired loans and the loans payment. There's a catch here. We should only consider the loan payment amount without adding interest. This is because the amount paid in interest is not repaying the amount borrowed. It's interest, and it must be taken from the returned earnings account, which we will build later. A good part of this treatment has already been carried out in the cash account, so instead of type everything again, we will just copy a snippet of this code. So to open the cash account, let's navigate to the files, and now let's click in the account cache. Great. Here's our table.
>
> **[1:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=94)** Now let's scroll to the common table loan in, and when we reach that, let's copy loan in and the expenses table as well. Okay, great. Now we can close this code. Let's open our table and let's create a new [[SQL]] file. Great. Let's start with the width, and now let's paste the loan in and the expenses table. The common table loan in is treating the period in which the loan was made and summarizing the loan in value, and it's already exactly what we need. Luckily for us, the payments table has already separated into the loan payment and what is interest payment. So for the expenses table, let's change the name from expenses to loan payment. Loan payment. Okay, and let's select the filter where only the type loan. Okay, let's erase this part. Great. Only loan here. And that's it. Most of our loan account handling is over. We can take a look in the loan payment, for instance. Select all from loan payment, and let's run this code. Okay. Yeah, that's it. That's all you need. Now let's close this step. Okay, and let's go back to our code. And now, we need to combine the rows of those two tables.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=190)** So for this, we will create a new common table called loan union, where we will select all the fields from the table loan in and union all with the select of all the fields from the table loan payment. Okay, let's take a look at this table as well, loan union. Select all and run again. Great, now we have all the rows from loan and all the roles from loan payments in the same table. Let's close this tab. Perfect. So now what do we need to do is to send inputs with the outputs, so let's create a new common table to do that. Let's create a table called loan amount. Okay, the loan amount table. Here, we will select the period year, and let's sum with the total amount. Total amount. Let's call that total amount. Great. These fields are from the loan union table. And since we have a mathematical aggregation function here, let's group by our query period year. Great. Let's take a look at this table.
>
> **[4:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=286)** Okay, let's close this tab. Now we have the loan amount per period. What we need to do is iterate the value. Remember that the ending value of one period is the starting value of the next period. So to do this, we will create our last common table called loan. So now, loan, and in the loan, we will select the period year. Let's create a manual field called loan here, and let's call this field account, and now let's sum the total amount over order by period year, and let's call this field total amount. Total amount. Okay, these fields are from the table loan amount, and that's it. Excellent. This is what we need. Let's select this table and see our output. Okay, perfect, now we have the loan accumulated, iterated by period year. Great. That's what we need. Now let's create a materialized view. So let's close this tab and let's scroll to the first line here, and let's type create materialized view account loan as,
>
> **[6:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-loan-account?u=76281980&t=378)** and select everything and run again. It's not appearing the output. Let's take a look at materialized view. Oh, great. We have our account loan here. Perfect, that's what we need. Excellent. And now let's save our code. So let's hit the X. Let's hit save. Let's hit reboot a name, maybe call it account loan. Let's erase this part and let's hit save. Okay, now we have our script saved here. We have now finished our liability account. In the next video, we will start to build our retained earnings account. See you there.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=0)** - [Instructor] Now that we have completed the assets and liabilities type accounts, we now come to the last section, which is owner's equity. Within owner's equity, we can only have two types of accounts: capital stock, and retained earnings. Capital stock is the money that shareholders put in our company. However, our company has started with loans, and not with equity, so we will not have a capital stock account, only a retained earnings account. In this account, we have money coming in through the sales of the company [[Microsoft Products|products]] and services, while the expenses necessary for the company's operation is a type of expenses. This table will be a little different from the others we have built so far, this is because we need to break down each transaction that was recorded, and at the same time, we need to add up the sales from the previous year to the next year's transactions. This is a little more complex, but we'll do it together. And we are also going to take advantage of the accounts we've already built so we don't have to redo everything from scratch. So, copying previously written code, and knowing how to reuse it, is a really good part of a developer. It doesn't matter the language, it could be a programming, a lookup, or a database. So, let's go to our code. Let's create a file here, so let's create a new [[SQL]] file, and let's start with the with.
>
> **[1:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=94)** Okay, here, what we need to do is the sales of the products we've made. So, let's call the first big query revenue. Okay, this treatment will be very similar for what we did in the cash account table, but we do not need to deal with the payment date. This is because, here, it's very similar from what we did in the cash account table, but we don't need to deal with the payment date here. And this is because, here, we are talking about the interest of items into the inventory, and not about the cash itself. So, let's consider the entry data as the payment date. Let's start selecting the date_part('year', payment_at),
>
> **[2:29](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=149)** and let's call that period_year. Okay, now let's create a manual field called Revenue, and let's call this field here transaction_type. Additionally, I will create a field 1, and call this field order_process. Okay. This order_process field will be essential for us to indicate the iteration order in the final sum. Now let's sum the quantity and multiply by the price field, and let's call this total amount. These fields are from the table, sales, and now we just need to group our data by the date_part, so let's copy here. Okay, now let's take a look in our table. Great. Here is our revenue. Let's close this tab. Now what we need to do is deduct the cost of the products we sell. We did this treatment on the inventory account, so let's navigate to the files, and let's click on the account inventory. Now let's scroll down to the product_price, and let's copy this, and the sale as well.
>
> **[4:04](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=244)** Now, let's close this code. Let's go back here, put a comma, and then enter this copied code. And now the only changes we need to do here is enter some manual fields here. Okay, so let's create the first one, which is Cost of Goods Sold. And let's call this field here transaction_type. Perfect. Now let's insert 2, and call this order_process.
>
> **[4:42](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-1?u=76281980&t=282)** Let's organize this comma in the end of the field. Okay, it's better now. We'll also change the name of this last query from sales to cogs, which stands for cost of the goods sold. Let's remember what this piece of code is doing. As the price of the product does not change in our database, we are first finding the value of each item that we have in the purchase table, and then, using the product name, we joined this table with the sales to identify the cost of each product sold, and we bring this cost to our result. This is what we're doing here, multiplying the quantity from sales with the amount from product price. Okay, now we have the cost of the products as well. Let's take a look in the cost of goods sold. Oh, we have an unnecessary comma here, so let's raise it and run again. Perfect. Now we have the cost of goods sold per year. In the next video, we'll cover the depreciation and other expenses.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=0)** - [Instructor] At this point, we already have the sales value and the cost of [[Microsoft Products|products]] sold. To continue building the retained earnings account, we'll need to consider equipment depreciation and expenses by type. The extensive depreciation treatment has already been carried out in the proper lending equipment account. So let's go to our code. The extensive depreciation treatment has already been carried out in the property lending equipment account. So let's navigate to the files, then let's click in the account_property_equipment. Okay, now let's navigate until the depreciation_dates and copy the depreciation_dates, depreciation_sum, and depreciation. Let's copy, close the script, and now put a comma here and let's paste the code. Okay, now let's remember, watch this piece of code, this. First, we are combining all the rows from calendar table and all the rows from the payment table. Additionally, we're filtering the duration of the equipment. Also, we are dividing the value of the equipment by the numbers of the months that this equipment is expected to be useful. This way we find the depreciation amount per month. We also created a flag to understand the anniversary of use of this equipment. Scrolling down to the depreciation_sum,
>
> **[1:32](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=92)** here we add the monthly value to understand what the accumulated amount will be for each year. This is fundamentally important for the first and last year, since, to all the other years in the middle, the equipment will have 12 months of depreciation. Remember that up until now, the treatment is carried out in the equipment level. But in our last BigQuery, the depreciation, what we are doing is add the depreciation value of all the equipment to find the total annual depreciation value. In this step, we also need to filter the flag one year equal to one, to have the exact value on the report closing date. We'll make some changes here in depreciation query. So let's do that. We'll need two manual fields. The first one will be depreciation, and let's call this field, transaction_type. The second field will be the number 3, and we'll call this field, order_process. Now, the next step is to separate each type of expenses and group them according to the US GAAP. The next BigQuery is also very similar to one we created in the cash account. And now, since we are already in the file tab, let's open the cash account.
>
> **[3:06](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=186)** Okay, now let's scroll down until the expenses table, and let's copy this table here. Okay, I close the code and I'll paste this code here in my new query. Let's add this. Here in this query, we'll have some changes. First, we need to add the transaction_type, written one by one. So let's create a case here. So case when the payment_type is equal 'tax',
>
> **[3:52](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=232)** then we'll have 'Tax Expenses', when the payment_type is equal 'interest', then we'll have 'Interest Expenses', when the payment_type is equal 'wage', then we have 'Wage Expenses'. And when the payments_type is in 'rent' or 'utility'
>
> **[4:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=274)** then we will have 'Operational Expenses'. And let's close this case with the end. And let's call this field, transaction_type, great. And now we also need to create a case to sign the order process. So let's copy the same case since it's really similar. Let's add a comma here in the end. Okay, and now let's paste the case. Here we will change 'Tax Expenses' for 4. Let's remember to not use quotes in the numbers because we need integers here. The interest will receive 5, the wage will receive 6, and rent and utility will receive 7. And now we can call this field, order_process. Perfect, now we need to add these two fields in the group by. So let's copy this case here, and let's add this in the group by. Let's remember to not rename the fields in the group by, so let's erase this as. Now let's run this expenses table and see how it is. Mm, we have a problem here, let's take a look.
>
> **[6:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/retained-earnings-account-part-2?u=76281980&t=372)** Oh, it's missing a comma here. Okay, let's run again. I guess we are missing a comma here. Yeah, we are missing the comma here as well. Let's run again. Oh, there's one type null here. Hmm, okay, I guess it's loan. Loan shouldn't be here. Let's run it again. We neither should have equipment, let's erase this too. Let's run again. Okay, now it's perfect. Wonderful, great job following these steps. We now have all the transactions we need to build retained earnings. See you in the next video.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-retained-earnings-account?u=76281980&t=0)** - [Instructor] Welcome to our second challenge. In this challenge, we'll continue coding from the retained earnings code we have built so far. You already handle all the transactions that impact the retained earnings account. Now your challenge is iterate the total amount value of the retained earnings account so that the result of the sum of the transactions from the one year is transferred to the next year. This is the same treatment we applied to the other's accounts. But remember that in this particular account, it's essential to maintain descriptions of all transactions. This way, if all transactions result in plus 20, in the following year, this account needs to start with the plus 20, and we need to have the summarized value of plus 20 as our result of the previous year. So, give this challenge a try and I will meet you in the next video for the solution.

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
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=5)** - [Instructor] So, how was the challenge? I hope you were able to achieve the goal. In any case, let's do it together, now we understand the logic behind this challenge. As I said, let's follow the code we made together in the retained earnings account part two video. We have, already, all the transactions ready to work. The first step is to place all transactions within a single table. Let us start by creating a new subquery called re_union, and re stands for retained earnings. Okay so, let's start with our traditional union. So, select * from revenue union all select * from cogs, which is cost of goods sold. Now let's copy this part here. Let's paste it here. And union all select * from depreciation, and union all select * from expenses. Now I have an ace up on my sleeve, as we already know, we'll need to iterate this result so that we have the total retained earnings per year. So, to do this, we will create a manual record in the table to help us with this process. So, union all, but now let's select the date_part('year', calendar_at),
>
> **[1:44](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=104)** and let's call this field period_year. We'll also create a manual field called 'Retained Earnings - Beginning Balance', and let's call this field transaction_type. And also, let's create another manual field with 0, and call this field order_process. And to unite the select with the [[Representational State Transfer (REST)|rest]], we need to have exact the same fields, so I'm going to create a field 0 and call it total_amount. These fields are from the table, calendar. In the same way we create a record for the initial value, we will also create a record for the final value. So, to make it easier, let's copy this union here and paste it. The logic is the same, but instead of being Beginning Balance, it will be just Retained Earnings, so let's erase this part here. And also the order_process, instead of 0, it will be 999, because this row will be the last one to be iterated before turning the year. Now let's run this table, re_union, and let's add here an order by period_year, order_process. Let's select and run.
>
> **[3:22](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=202)** There's a yeat in some point here. Okay, it's here, here. Ear here, and ear here. Let's run again. Okay, we have to add a distinct here, and here. Let's run again. Okay, now we can see the exact execution order we need for this table. We have the beginning balance, all the transactions that impact the retained earnings, and finally, the retained earnings. Next step is to iterate this value. So, let's close this tab, and let's go back to our query. And to do this, let's create a new select query, re_details. Here, we will select the period_year, we will also select transaction_type, the total_amount, to help us to compare this total amount with the new column that we're about to create. Let's call this total amount original. Now, remember that we need to iterate the values. The treatment is very similar to what we did in other accounts. Let's sum(total_amount) over(order by period_year, order process),
>
> **[4:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=294)** and let's call this field new_total_amount. Now let's run it and see how this table turned out.
>
> **[5:08](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=308)** Oh, of course, we need to have a table in the front. So these fields are from the table re_union. Let's run again. order_process. Oh yeah, we don't have here anymore, so. Okay. Now pay attention to the original and new_total_amount fields. I will scroll here so we can see better. You can see the original field with the value corresponding to what was transacted during the year, and the new_total_amount with the value that was iterated, and at the end of the year, showing all the retained earnings as a result of the transactions. It's very cool, but now we need to transform those two columns into just one. This is because the retained earnings value needs to be accumulated, but the individual values of the transactions cannot be iterated. Let's close this tab, and let's go back to our query. Now we will do this treatment using the help of a case expression. So, case when order_process = 0 or order_process = 999,
>
> **[6:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=400)** then we'll use this formula in new_total_amount, so this formula here. In other cases, or else, we'll use the original, which is the total amount. Now, to end the case, let's type end, and let's call this field total_amount. Now let's run the query again. Just scroll here. Now we can see that the total_amount_field shows all the input and output, and then, in retained earnings, and in the beginning balance, it shows the accumulated amount. Great, this is what we need. But now let's erase these two fields, because we don't need it anymore. Okay, let's run it again. Great. It's cleaner. But the math is still with several decimal cases, let's round this field here. So, let's apply the round, beginning the case, and ending the case. And let's say that we have two decimal places. Okay, now it's prettier, with just two decimal cases, great. So now what we need to do is create our materialized view. So, let's scroll up. And in the first row, let's type here, create materialized view, and let's call this view
>
> **[8:18](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=498)** account_retained_earnings_details
>
> **[8:28](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-retained-earnings-account?u=76281980&t=508)** as our query. Let's run it again. Great. Now we have our query, our materialized view. It's here. And with the end of the creation of the retained earnings, we also complete the creation of all necessary accounts to now create the sections of the balance sheet in the next chapter.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=0)** - [Instructor] Now that we have all the tables of accounts that make up the balance sheet ready, let's build the sections of the balance sheet. Remember that the balance sheet is made up of three sections: assets, liabilities, and owner's equity. In assets we have four accounts: cash account, accounts receivable account, inventory account, and property, land, and equipment account. Now, let's get to the code. Let's start by creating a [[SQL]] document. Okay, and we'll use a [[CTE]] to build the assets account. So let's start with the with. The first step is to combine all the accounts tables into one. So let's create our first step table assets_union to unite all the tables that make up the assets account. And just like in retained earnings, we will create a record to summarize the annual accumulated value to assets. So let's start by selecting everything and then create a field with one and call it order_process from the account_cash table. Now let's union all with the select all the columns and now two as order_process from account_accounts_receivable.
>
> **[1:40](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=100)** Receivable. Yeah, that's it. And now I will copy union all and select all, so I don't have to type this again and again and again. And now union all with select of all columns, three as order process from the account_inventory. And now again, union all, select all the fields four as order_process from the table account_property_equipment.
>
> **[2:24](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=144)** And now we have to create our manual record to summarize this value from assets per year. So union all select of date_part, year from calendar_at, and let's call this field period_year. Also, let's create a field here called assets and called this field account. Oh, I missed the coma here. Great. Now we have zero as total_amount, and we have 999 as order_process. This fields are from the table calendar, and we cannot forget to group by everything by the date_part field. Great. And now let's take a look at this table. So let's select everything from assets_union. Oh, I am missing here a in assets. Great, now select everything and run. Account_accounts, I believe it's_account accounts_receivable, Account_inventory. Oh, now it's right, account. Great, now we have our table ready.
>
> **[4:01](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=241)** We just need to sum up to have the total by year in the assets record. So let's close these tabs and let's continue building our query. Okay. So now let's sum up the fields. Let's start by selecting the period_year. Also, let's create a field here called Assets, and let's call this field section_bs. Section_bs, where bs stands for balance sheet. Now let's bring the total amount and let's call it original. Also, let's create a sum of the total amount over the partition by period_year, and order by order_process. And let's call this field new_total_amount. New_total_amount, okay. Now all these fields are from the table assets_union. Let's select everything and run. Okay, now we have the original field and the new_total_amount field. We can see that in the new_total_amount, we have the values accumulated. And in the original is the original.
>
> **[5:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=334)** And what we need to do here is combine these two columns and also bring the account. So let's do that first. Let's bring the account after the section. Let's run again. Great, now we can see better what's happening. Let's scroll here. Okay, now we need to preserve the original value to the accounts, but we need the sum up value to the assets role. So let's treat that using the case expression. Okay, so, let's go here and let's create a case, when the order_process is equal 999, then we need the new total value. So this expression here, let's paste. But if the order process is not 999, which means else, then we need to use the original value, which means the total amount. And to close the case, let's close with the end and let's call this field total_amount. Now let's run again. Okay, let's scroll here and now we can see the values original to the accounts. And in the asset, we have the accumulated. Yeah, our table is finished.
>
> **[7:07](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-assets-section?u=76281980&t=427)** So now let's just close this tab and let's erase this original field, and then new total mount because you don't need it. Let's erase as well this coma. And now let's scroll into the first row and let's create our materialized view. So let's create materialized view section now as section_assets as our query. Okay, let's select everything and run again. Yeah, success. Sweet. Now let's save our document. So let's close this tab. Let's close our script and hit Save. Now I'll call that section assets. Let's erase this part here. Section assets. Perfect. And now hit OK. Now we have our file. Sweet, we created the first of three sections of the balance sheet. In the next video, we'll build the liability section.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=0)** - [Instructor] The handling of liabilities will be very similar to asset section we just completed. So, let's start by creating a [[SQL]] file. And we'll use [[CTE]]. So, let's just start with the with. So, with. So let's start by creating a temporary table called liabilities_union. Okay. Here in the liability section, we only have the account_loan table, but we'll need to create a separated field called liability as well. This is because if other liability accounts appear in the future, the treatment to fit this new account is ready. So, let's start by selecting all the fields. And 1 as order_process. From the table account_loan. Now union all with our manual record. So let's select the date_part, year of calendar_at, and let's call this field period_year. Now let's add a manual field called Liabilities, and let's call this field account. Also, let's create a field 0, and call that total_amount. And also, let's create a field 999,
>
> **[1:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=94)** and call that order_process. Great. All these fields are from the table calendar. And we cannot forget to group by the date_part field. So let's copy here and paste it. Let's take a look in this table. So select all from liabilities_union. Let's select and run. Great, this is what we need. And as we did in the assets table, now we need to sum up the total of the year in the liabilities account. Let's do that with the case field. So, let's select the period_year. Now let's create a manual field called Liabilities. And let's call this field section_bs from balance sheet. Now let's bring the field account. And let's create a case. So, when the order_process is equal 999, then we'll use the sum of total_amount over partition by period_year and order by order_process. Okay, and when the order_process is not 999, which means else, then we just need the total-amount field.
>
> **[3:12](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-liabilities-section?u=76281980&t=192)** Now let's type here end to signalize that we finish our case, and let's call the field total_amount. Now let's run it again. Sweet. We have now finished the liability section. Now let's make the query materialized view. So let's close the tab and let's go to the first row, and let's type here create materialized view, and let's call that section_liabilities, and as. Let's select our query, and let's run again. Great. View created. Now we just have to save the script. So let's close here. Hit Save. Now I'll call that section_liabilities. And let's hit OK. Great. We have our script saved. Very good. We have already created two out of three sections. See you in the next video, where we're going to build the owner's equity section.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=0)** - [Instructor] Now let's create the third and final section of the balance sheet, the owner's equity section. As the structure of the retained earnings is different from the orders, the query in this section will be as well. Let's start by creating a [[SQL]] document. Okay, and we'll use a [[CTE]], so with, and let's start by creating the oe_union temp table. OE stands for owner's equity. Now remember that in the table retained earnings details, we have already done this work of having a record that summarized the annually account result, so we will select the summarized record only. So let's select, period year, also the transaction type,
>
> **[0:54](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=54)** and let's call that account. Let's select the total amount as well, and let's create a field one and call that order process. These fields are from the table account retained earnings details, and since we just need one record from the table, let's filter where transaction type is equal retained earnings. Now we have only the record we need. Let's select all from oe_union so we can see the result. Perfect. And as the owner's equity section may have one more account, the capital stock, we will also leave it ready for a possible future edition. So let's first close this tab, and now we will create our union. Union all, and now let's create a manual record to receive the owner's equity total by year. So select date part, year, of calendar at,
>
> **[2:16](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=136)** and let's call this field period year. Also, let's create a manual field called owner's equity, and let's call this field account. Now let's create field zero as total amount, and let's create a field 999 as order process. There fields are from the table calendar, and before I run, I forgot the N here, so calendar, and now let's run. Great. We have the retained earnings, and we have the owner's equity. Okay, let's close this tab and let's continue our treatment. So now let's select the period year. Also, let's create here a manual field, owner's equity, and let's call that section_bs. Also, let's bring here the field account, and the metric will be our case. So case when the order process is equal 999,
>
> **[3:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=214)** then we have the sum of total amount over partition by period year and order by order process.
>
> **[3:51](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=231)** Okay, and when the order process is not 999, then else, we have the total amount field. Now, end to symbolize that we close this case statement, and let's call this field total amount, great. These fields are from the table oe_union. Let's select everything and run again. Excellent. Now we have by year. We have 2021 a bunch of times here. I think that here, we need a distinct Let's run again. Perfect. Now we have 2021 and 2022. One row to the retained earnings, and another row with the summarized of owner's equity for that year. Excellent. Now let's close this tab and let's create our materialized view. Let's came to the first row and type create materialized view, and let's call this view section owner's equity. I just missed the O here, section owner's equity. Perfect. Now let's select everything and run again. Sweet, we have just created our materialized view.
>
> **[5:26](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/building-the-owner-s-equity-section?u=76281980&t=326)** Now let's close this tab here and let's save the script. So let's hit X, save. Now I will call this section owner's equity, and let's hit, oh, that's... There's just a space here. Okay, now okay, and we just save the script. Now that we have created the three sections of the balance sheet, we can now create the balance sheet itself. See you in the next challenge.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-balance-sheet-year-1?u=76281980&t=0)** - [Instructor] We're almost at the end of our journey. We covered all the accounts, how they're divided, and everything that must be considered in each account. Besides that, we created the balance sheet sections. Your challenge now is to assemble the balance sheet itself. You need to build the balance sheet for the first year. That is for the year 2021. Remember that the balance sheet is made up of three sections, assets, liabilities, and owners equity. Now the ball is in your court.

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
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=5)** - [Instructor] How was the challenge? Let's go for the solution together. Most of our work was already been done. We already have the accounts built. We have already divided by section, and we have also built each section individually. Now we just need to put all the sections together. Let's start by creating a [[SQL]] file and we'll use [[CTE]]. So since then, let's start with the with. Now let's create a temporary table called balance_sheet. Okay, let's start by selecting all the columns from the view section_assets. Now let's union all with the selection of all the columns from the view section_liabilities. Now let's create a union all with the select of all the fields from the view section_owners_equity. Perfect. Let's go outside the parenthesis and let's select everything from the balance_sheet. Perfect. And now let's close this tab and to have the balance sheet of the year we want, we just need to add a filter here where period_year = 2021 and run again. Awesome. Now we have the section_assets, the section_liability
>
> **[1:39](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-balance-sheet-year-1?u=76281980&t=99)** and the section_owners_equity, where you have the accounts that impact this section and the total by the section. Everything we built together was to have this final report. Now we can download this report if you want, and deliver it to the finance team. And to avoid to having to set up this query again, let's materialize the view. So let's close this tab and let's erase this filter so we have all the information in the balance_sheet. And now let's create the materialized view and call it balance_sheet. Okay, let's run it. Yep. We have the base table for our annual balance sheet report. Now we just need to save the file. So let's close this tab and let's hit the X. Let's hit save. I will call that balance sheet. And let's erase this part here and hit okay again. And now we have our script saved. Sweet. I'm very happy that we have come this far with me. Let's go together to the next chapter where we'll conclude the income statement. I see you there.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-income-statement?u=76281980&t=0)** - [Instructor] After building a balance sheet, it's time to build the income statement. But to do this, we need to understand what income statement is. Unlike the balance sheet, which analyzes the company from the years of analysis until its founding, the income statement makes an annual analysis of income. That's why when we care out the income statement for the years after the first year, we say that the income statement is an analysis between two balance sheets. In the diagram below, it is clear that the Year 1 balance sheet is a snapshot of the company from the end of the Year 1 to the finding of the company, just like the Year 2 balance sheet is an analysis for the end of the Year 2 to the beginning of the company. But the income statement for Year 2 is the analysis of the changes in income between the balance sheet of Year 1 and the balance sheet of Year 2. In other words, what happened to income during just the second year. Now that the period that is analyzed by the income statement is clear, let's understand what the sections of this finance report are. Unlike the balance sheet, which analyzes any and all financial movement, the income statement analyzes the company's revenue and expenses. As we have already seen during the construction of the balance sheet, revenue and expenses
>
> **[1:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/understanding-the-income-statement?u=76281980&t=94)** are in the retained earnings account, where the sales of [[Microsoft Products|products]] and services are revenue and cash outflow are expenses. Also, it is essential that all expenses are detailed in the report income statement. Besides the revenue and expenses, in the income statement we need to present a metric called net earnings, which is the difference between the inputs and the outputs, which means the difference between revenue and all the expenses. So the net earnings formula is equal revenue minus expenses. In conclusion, the income statement has three sections: revenues, all detailed expenses, and the net earnings. Now that we understand the content of the income statement, let's get to work.

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
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/challenge-income-statement?u=76281980&t=5)** - [Presenter] Now that we've covered what the income statement is and what the section are, it's time to get down to business and put together this report. Remember that the retained earnings is the net income. I'm sure you are capable to do it. Try. So, I will see you in the next video to show you how to build income statement.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Speakers:** - [presenter] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Income statement](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=0)** - [Instructor] How did this challenge go for you? Let's go over the solution together. Remember that the retained_earnings_detail table was constructed in a different way. This happened because the retained_earnings table itself generates the Income Statement report. Retained_earnings has the record with revenue, a record for each expenses. And at the end of the year, we have a record called, Retained Earnings. And what is the Retained Earnings record? It is exactly the revenue subtract from all expenses for the year. So to issue the report to our finance team, according to the US GAAP, all we need to do is replace the name Retained Earnings with Net Income. Let's do that. It's so simple that we don't even need the CT since the logic is very straightforward. So let's go to our code and let's create a [[SQL]] file. Now let's select the period_year. And now, let's create a case field to deal with the name assignment to the field. So case when the transaction_type is equal "Retained Earnings", we just need to replace that by "Net Income". And if the transaction type,
>
> **[1:36](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=96)** it's not equal "Retained Earnings", which means else transaction_type itself. and now, end to finalize that the case ended. And let's call this field transaction type. And lastly, let's select also the field total_amount. And all these fields are from the table, account_retained_earnings_details. And now let's run this query. Perfect. We have the retained earnings, which is the Income Statement report. And now, to issue the reports to our finance team, we just need to select the period of which we want this report. In our case, the first year of our company. So now, let's create a filter here where the period_year is equal 2021. And let's run it again. Perfect. Now we have exactly the income statement report for the year 2021. And now we can also create a materialized table with this report. So let's erase this filter here, and let's go to the first row of this query, and let's create MATERIALIZED view income_statement
>
> **[3:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/solution-income-statement?u=76281980&t=190)** as our query, and let's run. Sweet. We have just created our Income Statement report materialized table. Now let's save our script. So let's close this tab and let's close our script. And it will ask us if we want to save. So let's hit Yes, and let's call that income_statement. Perfect. Statement. Now, hit OK to save. And we have the script saved. Excellent. We have just finished our second and last report. See you in the next chapter with some technical and non-technical considerations for this project.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=0)** - [Tutor] Before we finish this course, I believe it's important to bring some considerations about the maintenance and the insights we can take from the balance sheet and the income statement. To start, let's think about the technical aspects that involve developing the reports that are also learned in this project. When you think about maintenance, we need to think how easy it is to others and to ourselves in the future to understand what was done. Since we are using [[CTE]], it's really easy to read the code. Also, it's easy to build new accounts and just add new views in the sections by adding the views in the union. And the risk is about the dependencies we have between the views. We develop the accounts views based only on the tables from the database. On the other hand, when we build the sections views, we use the accounts views as our data source. And finally, to build the balance sheet, we use the sections views as data sources. This way, we need to have a process to guarantee that the accounts views will update before the sections views, which must be updated before the balance sheet report. Although the income statement has a lower risk, since it's using accounts instead of sections, there is still a risk since the account retained earnings details table, that is the source for this report, is a materialized view. Usually this process should be automated by a team,
>
> **[1:34](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=94)** like [[Data Engineering]], that would orchestrate the order of the updates and set up alerts when the process fails for whatever reason. But, for those things that do not have data engineers, for example, it's even more important to have this process mapped and documented so that when you deliver reports to the business areas, you do so with the certainty that the data has been updated correctly. This way you can rely on the data you present, year after year. Since we covered the risk of this project, now we should move forward to understand the insights and the metrics we can create from these reports. From our balance sheet, we can answer questions, like, what are the company's primary assets? How is the company financing the purchase of assets? How much earnings is the company managing to retain through its existence? Additionally, you can extract metrics, such as current ratio, which is current assets divided by current abilities. It measures a company's ability to pay short-term obligations; all those due within one year. Debt to assets ratio, which is the total liabilities in year X divided by total assets in year X. This is a metric commonly used to make inferences about the company's financial decisions in which it's possible to conclude
>
> **[3:10](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=190)** whether the company chose to rely on debt or assets for funds, for instance. And net current assets, which is calculated by subtracting current liability from current assets. This way we can identify how much money the company has to purchase inventory and pay inventory on its loans. And so many other metrics. Like the balance sheet, the income statement also allows us to answer a series of questions. For instance, how much has the company grown since last year? How profitable is the company? What is the relationship between revenue and individual costs? And the three common metrics you can discover from income statements includes gross margin, which is the revenue of year X minus the cost of goods sold of year X. This analyzes the company efficiency in using labor and suppliers to produce goods or services. And we have growth of revenue from year X to year epsilon, which is revenue year X minus revenue year X minus one, divided by revenue year X. It helps to understand how the company has been growing in revenue all over the years. And we have ROS, which stands for return over sales, which is net income of year X divided by revenue of year X. This measures how efficiently a company converts sales
>
> **[4:46](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/balance-sheet-and-income-statement-considerations?u=76281980&t=286)** into profits. This can be useful when comparing companies operating in the same industry and within roughly a similar size. Not only do you now know how to generate two of the most important financial reports for companies, you're also able to generate metrics that help stakeholders understand the business in more depth and make better decisions.

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
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-income-statement-project/your-sql-journey?u=76281980&t=0)** - [Instructor] I'd like to thank you for having the courage and commitment to get here. Through this course, we went in depth on two of the main financial reports that all companies need to issue. The balance sheet and the income statement. The knowledge you gain will help you in any profession. For example, if you work on a data team, now you have a strong understanding of how company's transactions affect the accounting accounts and how a company operates through those reports. Or maybe you work on a finance team. You now have tools to manipulate data using [[SQL]] and create materialized views. No matter your role or profession, I hope the journey has been as uplifting for you as it has been for me. And above all, I hope you can apply this knowledge to help you and your company became increasingly data-driven. If you have any questions or want to better understand the world of SQL, contact me on [[LinkedIn]]. Now, the ball is in your court. Good luck.

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