---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: hands-on-sql-challenges-test-your-knowledge
url: "https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge"
duration_minutes: 39
duration: 39m
level: Intermediate
updated: 3/7/2025
learners: 69594
skills:
  - SQL
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQE6InISQKXVRQ/learning-public-crop_675_1200/B4DZU_uFWkGkAc-/0/1740530800297?e=2147483647&amp;v=beta&amp;t=v-UM2D7RGMmbAEZouV7Lqesawp6Sg_Gyf6XTHiDQ01o"
linkedin_topic: Data Science
learning_paths:
  - '[SQL Hands-On Practice](../../Paths/Data%20Science/Learning%20Paths/SQL%20Hands-On%20Practice.md)'
  - '[Advance Your Skills in SQL](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Skills%20in%20SQL.md)'
prev_courses:
  - '[Practice It- SQL Joins](Practice%20It-%20SQL%20Joins.md)'
  - '[Using SQL with Python](Using%20SQL%20with%20Python.md)'
next_courses:
  - '[Data Analysis- Investigate with SQL](Data%20Analysis-%20Investigate%20with%20SQL.md)'
  - null
path_nav: '[{"path":"SQL Hands-On Practice","position":6,"total":9,"prev":"Practice It- SQL Joins","next":"Data Analysis- Investigate with SQL"},{"path":"Advance Your Skills in SQL","position":5,"total":5,"prev":"Using SQL with Python","next":null}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/sql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Hands-On%20SQL%20Challenges-%20Test%20Your%20Knowledge.md)

![Hands-On SQL Challenges: Test Your Knowledge](https://media.licdn.com/dms/image/v2/D4D0DAQE6InISQKXVRQ/learning-public-crop_675_1200/B4DZU_uFWkGkAc-/0/1740530800297?e=2147483647&amp;v=beta&amp;t=v-UM2D7RGMmbAEZouV7Lqesawp6Sg_Gyf6XTHiDQ01o)

# Hands-On SQL Challenges: Test Your Knowledge

> The concise SQL challenges in this course let you stretch your brain and test your talents. Instructor Scott Simpson frames the challenges in real-world scenarios you might encounter. Tasks range from creating a table to store party guest information to creating a query to find books to feature for a library event. This course includes Code Challenges powered by CoderPad. Code Challenges are inter

> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge) | 39m | Intermediate | 70K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [SQL challenges to test your knowledge](#sql-challenges-to-test-your-knowledge)
  - [Exploring the databases](#exploring-the-databases)
  - [CoderPad tour](#coderpad-tour)
- [**1. In the Restaurant**](#1-in-the-restaurant) (12 videos)
  - [Solution: Create invitations for a party](#solution-create-invitations-for-a-party)
  - [Solution: Create a table to store information](#solution-create-a-table-to-store-information)
  - [Solution: Print a menu](#solution-print-a-menu)
  - [Solution: Sign a customer up for your loyalty program](#solution-sign-a-customer-up-for-your-loyalty-program)
  - [Solution: Update a customer's personal information](#solution-update-a-customers-personal-information)
  - [Solution: Remove information from the database](#solution-remove-information-from-the-database)
  - [Solution: Log customer responses to an invitation](#solution-log-customer-responses-to-an-invitation)
  - [Solution: Look up reservations](#solution-look-up-reservations)
  - [Solution: Take a reservation](#solution-take-a-reservation)
  - [Solution: Take a delivery order](#solution-take-a-delivery-order)
  - [Solution: Track your customer's favorite dishes](#solution-track-your-customers-favorite-dishes)
  - [Solution: Prepare a report of your top customers](#solution-prepare-a-report-of-your-top-customers)
- [**2. At the Library**](#2-at-the-library) (8 videos)
  - [Solution: Check book availability](#solution-check-book-availability)
  - [Solution: Add new books to the library](#solution-add-new-books-to-the-library)
  - [Solution: Check out books](#solution-check-out-books)
  - [Solution: Check for books due back](#solution-check-for-books-due-back)
  - [Solution: Return books to the library](#solution-return-books-to-the-library)
  - [Solution: Encourage patrons to check out books](#solution-encourage-patrons-to-check-out-books)
  - [Solution: Find books to feature for an event](#solution-find-books-to-feature-for-an-event)
  - [Solution: Book statistics](#solution-book-statistics)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps in your SQL journey](#next-steps-in-your-sql-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [SQL challenges to test your knowledge](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/sql-challenges-to-test-your-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/sql-challenges-to-test-your-knowledge?u=76281980&t=0)** - [Scott] When we're learning how to use [SQL](../../Skills/Data%20Science/SQL.md), it's useful to practice with real world examples. We'll use two [Databases](../../Skills/Software%20Development/Databases.md) that represent real world situations. First, we'll perform some practical tasks with a database that a restaurant might use, and then we'll shift our focus to common operations that we might perform in a library setting. I'm Scott Simpson, and I hope you'll join me for this course where I'll challenge you to complete some hands-on tasks with SQL. Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** sql (2)
> **Speakers:** - [scott] (1)

#### [Exploring the databases](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=0)** - [Instructor] For the challenges in this course, we'll be using two [Databases](../../Skills/Software%20Development/Databases.md), one for a small local restaurant and one for a community library. In each challenge, I'll provide you with information about what tables I expect you to use to solve the challenges, but I'd like to give you a high level overview of what these databases look like before we start. The restaurant database starts out with eight tables, but that'll change as we move through the challenges. This is a simplified diagram of all the tables, though we won't be using all of them in each challenge. I'll give you more focused diagrams in each challenge to show which tables are going to be used. Some of the tables in the restaurant database contain information about the restaurant's customers and about the dishes the restaurant serves. Other tables are linking tables, associating customer and dishes values with each other in various ways, like to represent the items in a takeout or delivery order. I've labeled the primary keys in each table with PK and where you see field names that correspond to those in other tables, those values are being used as foreign keys there. So for example, customer ID in the orders table refers to the customer ID in the customer's table. Order ID in the orders dishes table refers to order ID in the orders table, and dish ID in the orders dishes table refers to dish ID in the dishes table. So an order belongs to a customer and includes one or more dishes represented as records in the orders dishes table. Some of the other tables are used to associate customers with attendance at special events, for records about dining reservations and so on. The library database contains three tables. One of these tables contains records
>
> **[1:32](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=92)** for the 200 books our library has in its collection. Another table contains information about 100 library patrons, and the third table contains records for 2000 loans or instances when someone borrowed a book. In the loans table, books and patrons are referred to by their ID number, which are the primary keys for records in the books and patrons tables respectively. I don't expect you to memorize the structure of these databases. As I said, I'll provide you diagrams of the relevant tables in each challenge. When you're working on a challenge, feel free to write your own select queries to explore the database. If you do, you'll see a message about a wrong answer, but that's fine because all that really matters is whether you get to a solution that matches what's expected when you're done working on each challenge. Additionally, each time you run your code, the database starts out in its initial state, so changes that you make won't persist across multiple times that you run a query. You could drop all the tables if you want to, and the database will be right there waiting for you the next time you click to try your code. So don't worry about accidentally making changes that will get you out of sync with what the challenge evaluation software expects. In the next video, we'll spend some time exploring the challenge interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (3)
> **Definitions:** refers to (2), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### [CoderPad tour](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/coderpad-tour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/coderpad-tour?u=76281980&t=0)** - [Instructor] This course consists of automated code challenges that appear when you click the challenge links in the courses table of contents. Each challenge includes instructions and a code editor you can use to create and test your own solution to the challenge. These challenges are hosted by Coder Pad and they appear in the same area of the course page where you watch the courses videos. We recommend using a desktop browser for the best experience with code challenges, but you can use the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning mobile app if you prefer. The code challenge has three areas, instructions in the top left, a console for output in the bottom left and a code editor for your answer on the right. You can use these drag handles to allocate space as you'd like. To get even more horizontal space for the code editor, you can collapse the courses table of contents on the left. Each challenge has instructions that include a description of the challenge and the challenge's desired result. Create your answer in the code editor. When you click test my code, you'll see a message indicating whether your code returned a correct result and a text-based version of the return data. If your answer doesn't create a correct result, you'll see a message telling you the code is incorrect and showing the data that was returned. If any messages are too long to fit in the console, you can scroll sideways to see all of the text. When you finish each code challenge, return to the courses table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)


### 1. In the Restaurant

[↑ Back to Table of Contents](#table-of-contents)

#### [Solution: Create invitations for a party](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-invitations-for-a-party?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-invitations-for-a-party?u=76281980&t=0)** - [Instructor] To solve this challenge, here's what I did. I know I need to get information from the database, and to do that, I'll use the SELECT keyword. Then I need to specify the fields that I want information from, and in this case I'll use FirstName, LastName, and Email. I need to tell the database which table to read information from, so I'll use the FROM keyword and provide the Customers table. Finally, I need to tell the database how to sort the results that we get back. Customers weren't entered into this table in alphabetical order, and the order that records are stored in a database doesn't guarantee that we'll get them back in any particular order anyway, so I'll need to use the ORDER BY keyword and provide a field to use to sort the results. That'll be the LastName field. I'll run this. And there we go. We have a list of customers' names and emails, sorted by the customer's last name.

> [!info]- Semantic Content
>
> **SQL:** select (1), order by (1)
> **Env Vars:** select (1), order (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Create a table to store information](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=0)** - [Instructor] Here's how I solve this challenge. In order to create a table, we'll use the CREATE keyword, and provide a name for the table we're creating. So I'll write CREATE TABLE AnniversaryAttendees. We know that this table needs two columns, one for the CustomerID, and one for the number of people. To create those columns or fields, I'll provide the name of the field and the data type of the field within a set of parentheses. What's important is that these values are integers, not floating-point numbers, because, for example, we don't have decimal places in our IDs, and it's also important to match the type to the type used in the Customer's table in this case. So we don't have to do type conversions back and forth when we use this table. The same thing goes for the PartySize. We're not going to have fractional people. And we may need to do some calculations with this field later, like, adding them all up. So storing this information as a text type isn't a good idea. Writing INT here will turn into integer 10 in this particular database. So, when we see that in this solution, that specific length doesn't really matter. The important part is that we have an integer type for each of these fields. The challenge also required that we make sure that these fields can't contain null values. So, for each one, I wrote NOT NULL. I'll finish my CREATE statement with a semicolon, and I've kept this SHOW COLUMNS line here that was provided. And this is what's going to show how we set up the table, so we can check it against what the challenge expects. I'll run this. And I can see that the table has been created. Now we have a place to store information about our customer's responses. In another challenge, we'll add data to this new table.

> [!info]- Semantic Content
>
> **Env Vars:** create (3), table (1), int (1), null (1), show (1)
> **CLI Commands:** make (1)
> **SQL:** create table (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Print a menu](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-print-a-menu?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-print-a-menu?u=76281980&t=0)** - [Instructor] To solve this challenge, I used the select keyword. The challenge asked for four specific fields, so I'll use those here in my select clause. These are Type, Name, Description, and Price. All of these fields come from the dishes table, so I'm using From Dishes Here to make that happen. The challenge asked for this information about dishes whose price was $6 or less, so to filter the results on that criteria, I wrote where price is less than or equal to six, and then we were asked to sort the output, not by one field, but by two. So in my order by clause, I have the first field we're sorting by which is type, and then a comma, and then name. This means that if there are records that come back with the same type, then the name field will be used to sort these. By using logic inequality operators in our query, we can narrow down the results that we get by specifying a condition and that lets us target the information we need. So I'll run this and there we go. It looks like this solves the challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Sign a customer up for your loyalty program](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=0)** - [Instructor] Here's how I solved this challenge. I'll paste my solution in here and then we'll go through it piece by piece. When we create records, the first thing we need to do is specify which table information is going to. So I'll start my insert statement with insert into customers. Then we need to specify the columns for which we're adding data. We don't need to put data into all of the columns, but I'll use most of them here. The information we have contains a first name, a last name, an email address, a mailing address with a city and state, a phone number and a birthday. I've separated those out onto their own lines here to make this a little easier to read in this small window, but of course, you could put them all on the same line as long as they're separated by commas. These go in a set of parentheses and the column names will match up with values we'll add in another set of parentheses. To add the values, I'll use the values keyword here and in the second set of parentheses, I'll provide values for each field. These are positional, meaning that if first name is the first column name in the list, then the value, Anna, will go into first name because that value is first in the list. And I'll end this insert statement with a semicolon. Then we'll write a select statement to take a look at the state of the customer's table sorted with the latest customer ID first and then we'll trim the results to only show the five most recently added customers based on the customer ID that's automatically assigned to new customer records by the database. To do that, I'll write select star from customers, order by customer ID, descending, limit five. I'll run this. And there we go.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=93)** As I mentioned, this record was assigned an ID automatically. It also recognized way over here on the right that because we didn't specify a value for the favorite dish, that value has been left empty. Great, our new customer has been added and we've verified that their record has its automatically assigned ID number.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Update a customer's personal information](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=0)** - [Instructor] Here's my solution to this challenge. There's a few ways to approach this challenge. You might have explored the database to find the customer ID for the customer whose information we're asked to update. Or you might use the information that was provided to focus in on the record that needs updating. That's what I did here. To change information in the database table, we'll use the UPDATE keyword and we'll provide the name of the table that we're updating information within. Then we'll provide the new information for the fields that we want to update. But it's important to limit our updating just to records that we want to update. If we don't provide a WHERE clause with some parameters to limit the records that we're updating, we'll end up making changes to every record in the database. And unless all of our customers are moving in with Taylor, that's not what we want. That would make delivery orders a lot easier, though. So, I'm using the information that was provided to target the record for the correct Taylor. If you explored the database, you might have noticed that there's another customer with the same name, but with different personal details. When we're dealing with names, it's pretty common to end up with customers or employees or contacts or similar kinds of records that have the same name. So we don't want to use just a name as a unique identifier in most cases. As I mentioned, you might have found the customer's ID number, and you might have used that in the criteria here instead of the customer's old address information. That's fine if you did. I'll end my update clause with a semi-colon. The challenge also asked us to return a report of customers with this name, FirstName Taylor, LastName [Jenkins](../../Skills/DevOps/Jenkins.md). So I wrote a select statement here to show all the fields with star from the Customers table
>
> **[1:34](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=94)** where the FirstName and LastName are the values provided. I'll run this. And I have two records. Two Taylor Jenkins's. Or Taylor's Jenkins? Either way, we can confirm that we only updated the information for the one we intended. Here's that new address in New York for that customer. It looks like this solves the challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (3)
> **CLI Commands:** find (1), make (1)
> **SQL:** update (1), where (1)
> **Env Vars:** update (1), where (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Remove information from the database](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=0)** - [Instructor] Here's how I solved this challenge. I'll paste my solution in here, and then let's take a look at each part. When we delete information from our database, it's a good idea to double check that our query is targeting the records that we expect it to. To check my delete statement before I run it, I'll convert this delete into a SELECT star to test the logic of our statement before we remove data. And for now, I'll comment out this part too. This statement, which is now a SELECT statement, is working within the reservations table. That table uses the customer ID value. And we were provided a name and a phone number, so I'm using a subquery here on the customers table to get that value using the information that was given to us. In this specific case, either the name or the phone number would be sufficient to locate this customer. But we never know. There could be more than one Loretta Hundey or more than one person that shares the same number. And so we want to be specific when working with this kind of data. I'm also searching for a reservation record with a date of 2024-05-15 and then a percent sign. The customer didn't say what time the reservation was, so we don't know that information, so we'll need to use the LIKE keyword and a percent sign to match anything with the date information that we do know. The part of the date field that we're leaving off here is the time, and it's pretty unlikely that this customer has two reservations on the same day. So we'll just match based on date. I'll run this. And here's the result. There's one reservation that matches the information we know. So we found the reservation, and now we'll need to remove this now incorrect information.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=94)** In our database, deleting this record doesn't really affect that much. The reservation ID, for example, isn't used anywhere else in the database. But for records with more complex relationships, for example, a customer record, we might not simply want to delete the record because that would break consistency with other data in the database. So we might want to keep the records key but blank out specific information if they request we take that action. How you handle data in your database is a function both of business choices and whatever other kinds of responsibilities you have. To remove the requested record, I'll switch my statement back to a delete statement. And I'll un-comment my SELECT query here. The SELECT query that we were asked to build shows the customer's reservations since the beginning of 2024, and we're asked to return these four fields here. Those fields are on different tables, so we're joining the reservations and customers tables to get what we need. And in this case, I'm just using the customer's name to find records. Like I said, I happen to know there's only one Loretta Hundey in this database. But what we're really looking for is that that specific reservation we deleted is in fact gone. I'll make sure that my condition here looks for a reservation date greater than or equal to 2024-01-01, the first of that year. I'll run this. And there we go. I can see Loretta's reservations, the reservations for customer ID 70 for the year 2024, and I can see that the one that we wanted to remove for May 15th is not in this list. If you got the correct result too, congratulations.

> [!info]- Semantic Content
>
> **SQL:** select (4)
> **Env Vars:** select (4)
> **CLI Commands:** find (1), make (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Log customer responses to an invitation](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980&t=0)** - [Instructor] Here's how I solved this challenge. In order to add information to the AnniversaryAttendees table, we'll need to use the INSERT INTO keyword and tell the database which table to use. Then we'll need to provide columns that we'll put data into, and those go in a set of parentheses. In this case, we'll use the CustomerID and PartySize fields. Next, we need to tell the database what to store in those fields for each record we add. Those are the values, so I'll use the VALUES keyword and another set of parentheses to contain the values. The first value, the CustomerID, will contain information from another table. In order to find this information, we could write a SELECT statement to look up the ID by email address, write that ID down, and then type it into the query. But we can be a little bit more efficient about the process and save a step by putting the SELECT statement right into this query. This is a subquery, and it needs to go inside a set of parentheses so the database knows to evaluate it and use its result as the value in the outer query. So I've added that query inside a set of parentheses in the first position in the VALUES clause. This query gets the CustomerID that corresponds with the email address that we were provided, and then I set the second value to the number of people in the party. We were also asked to write a query that returns the records in the AnniversaryAttendees table. So to do that, I'll write SELECT * FROM AnniversaryAttendees. I'll run this, and I can see the information that I added. This solves the challenge, and now we're ready to add information for any other customers who reply to us as well.

> [!info]- Semantic Content
>
> **Env Vars:** select (3), values (2), insert (1), into (1)
> **SQL:** select (3), insert into (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Look up reservations](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-look-up-reservations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-look-up-reservations?u=76281980&t=0)** - [Instructor] Here's how I solved this challenge. We were asked to prepare a report of reservations within a specific date range. The challenge asked us for four fields, so I'm using select to get those from the reservations table joined to the customer's table, based on the relationship between the customer ID field in both tables. The condition that I'm using is a range of dates. So I'm getting any records with dates between 2024/06/09, and 2024/06/15, and the between operator here is inclusive, so that'll get any records on those days as well. We were also asked to sort the records by date. I put ASC in here for ascending order, even though that's the default behavior, but it's usually best to be explicit where we can. I'll run this. Okay, there's the results. The order by clause here is making sure that our results are returned in chronological order, which is what the challenge asked us to do. The entries in the reservations table are mostly, but not fully, in chronological order, so it's useful for us to change the sequence of the results to guarantee that each reservation in the list will be at the same time as or later than the one above it. It looks like we solved the challenge.

> [!info]- Semantic Content
>
> **Env Vars:** asc (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Take a reservation](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-reservation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-reservation?u=76281980&t=0)** - [Instructor] Here's how I solved this problem. To make a reservation, we'll add or insert a record into the Reservations table, with a CustomerID, a Date, and Time and a PartySize. As we've seen in other challenges, the CustomerID is something we'll need to look up in the Customers table, and I'm using a subquery again here to do that, returning the CustomerID value to my insert statement in the CustomerID position. The other two fields here that I'm using are given values that the challenge supplied, this date and time, 6:00 PM on April 12th, 2025, and a party size of 7. The challenge asked us to write a query to return some information about the reservation that was most recently added to the table. In some DBMS tools, we can get a value back from an insert statement, like a reservation ID, but we can also just use the highest value in the Reservations table in this case as well. We could write a query using the max function, or we could use an order by clause in descending order and limit the responses to just one record. That's what I did here. But if you used a more efficient query and got the expected result, good job. I'll run this and see if it satisfies the challenge. Looks like it does. There are often many ways to solve a problem using [SQL](../../Skills/Data%20Science/SQL.md), and some are more efficient than others, but don't spend your time over optimizing if you don't have to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** dbms (1), sql (1)
> **CLI Commands:** make (1)
> **Ports:** :00 (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Take a delivery order](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=0)** - [Instructor] Here's how I approach this problem. First, we need to add items to an order by adding one row for each dish or item in the order to the orders dishes table. We know the order ID because the challenge provided that to us. In a situation where an app was handling the whole order processing workflow, that software would create the order and either give us the ID of the order or use it itself internally. But in this case, the order record has already been created for us. So first, we'll add items to the order, which has the ID of 1001. That's what this insert statement does here, and I'm telling it which fields in the orders dishes table to put values in. Each row is also going to be getting an automatically assigned id, but we don't need to worry about that for this challenge. For each entry, we'll use the name of an item in a subquery to look up the appropriate dish id because the orders dish linking table only uses keys from other tables to store information. And we know that our dishes table doesn't have any duplicate names. It wouldn't make sense to sell different dishes with the same name, so we can just use the name here to get the dish id. After the items are added, we'll need to generate the summary that the challenge asked for. We need to display four fields, all of which are supposed to have human readable names. So it'll use the as keyword to set aliases for those. The fields are the order number, the customer's name, account of items in the order and the total price, which we'll use the sum function to get. We'll need to get information from four different tables for this query. We'll start from the orders table, which I've given the alias O to keep things a bit more concise. To that, we'll join the orders dishes table,
>
> **[1:33](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=93)** so we can access the ID numbers of items in each order. We'll also join the customer's table based on information in the orders table, so we can access the customer's name, which is one of the fields that the challenge requested, and we'll join the dishes table to get information about each dish based on its ID in the orders, dishes, or OD table. Because we're using aggregate functions in our select clause, we ought to have a group by clause also to make sure that our aggregate functions are aggregating records the way we expect them to. So, I also have a group by-clause here at the end, so each order will just have one row. That's not strictly necessary here, because we have just one record being returned. There's only one order number 1001, and that order only has one customer. But if we took off this matching condition here and wanted to get this information for all the orders, the group by clause would keep things organized. But again, in this case, it doesn't affect the output of this specific query. I'll run this. And there we go. We've solved the challenge. It's time to get started cooking that burger.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Solution: Track your customer's favorite dishes](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-track-your-customer-s-favorite-dishes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-track-your-customer-s-favorite-dishes?u=76281980&t=0)** - [Instructor] Here's how I solve this challenge. We'll want to return the name of each popular dish with a column header or alias of Item, and we'll count up the records for each dish and call that frequency. We're using information from the Customer table and the Dishes table, even though we're only going to be displaying information from the Dishes table. Using GROUP BY here will allow us to get the count for each item in the FavoriteDish field, so we have a total number of times that each dish is ordered. We'll sort that by frequency, the count of people who had each dish listed as their favorite, with the highest count at the top. That's descending order. And we'll limit the results to the top two results by count or frequency. I'll run this, and it looks like we've solved the challenge. Now, in this scenario, I know that there are only two dishes that are the most popular and that the next most popular dishes have seven customers that like them. But it's always good to look around when you're using a limit like this to make sure that you're not artificially cutting off data. For example, if eight people also liked our miniature cheeseburgers, how could we say what the two most popular dishes are when there are two dishes tied for second place? When we're writing our queries, we need to have some awareness of the data that we're working with so we can make informed choices about things like grouping and limits.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **SQL:** group by (1)
> **Env Vars:** group (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Prepare a report of your top customers](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980&t=0)** - [Instructor] Here's how I solve this challenge. I started with the fields that I know I need to display, the count of orders and the customer's first name, last name, and email. The order ID field is on the Orders table. And I need to join customers here to get the other fields. Simply counting the orders might not give me the results I expect. I need to group my results by the customer ID to count up how many orders each customer has placed. That's critical, so I added GROUP BY Orders.CustomerID. Otherwise, we just get one count including all of the orders. The challenge asked for the customers who have ordered from us 15 or more times. And because COUNT is an aggregate function, we can't simply use its result in a WHERE clause. So we have to use a method that's aware of aggregate results, and that's the HAVING statement. So I'm using the alias for the count of orders here with HAVING to return only the grouped records that have 15 or more orders. Then with ORDER BY, I'm sorting the results with the largest number of orders at the top. I'll run this. And there's my report of the customers who have ordered from us 15 or more times. It looks like we've solved the challenge.

> [!info]- Semantic Content
>
> **Env Vars:** having (2), group (1), count (1), where (1), order (1)
> **SQL:** having (2), group by (1), where (1), order by (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 2. At the Library

[↑ Back to Table of Contents](#table-of-contents)

#### [Solution: Check book availability](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-book-availability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-book-availability?u=76281980&t=0)** - [Instructor] In order to find out how many copies of the book are still available in our library, we need to know the total number of copies the library has and subtract from that the number of copies that are currently loaned out. To get the total, I'll use a SELECT statement with a COUNT function. I'll use the Title field, but you could use any of the fields on the Books table for this operation. I know I'll be looking in the Books table, so I'll use FROM books, and then I'll set a condition with a WHERE keyword to match the book title we're looking for. That will give us the total number of copies of "Dracula" that are in our library's database, but some of those copies might be in the hands of our patrons, so we'll need to subtract the number of copies with active loans in the Loans table. To do that, I'll write a SELECT statement to find how many copies of "Dracula" have active loans. An active loan is one that has a returned date of NULL, meaning that it's out and hasn't been checked back in. So I'll do a COUNT of the title, which I can get through joining the book's title to the Loans table, and I'll match up the book IDs in each table so I can find how many books with the title "Dracula" have records in the Loans table with a returned date of NULL. Remember that when we work with NULL values, we have to ask if a value is or is not NULL, not whether it's equal to or not equal to NULL. The result of this query will be subtracted from the first one with a minus sign here. So even though this is a pretty long query, it only really has two terms, the total count of this book and the count of those which are checked out, and to keep the result fairly clean, we'll give that whole big select statement an alias with AS AvailableCopies. Otherwise, the result column header might be really long. I'll run this,
>
> **[1:35](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-book-availability?u=76281980&t=95)** and there we go. It looks like we count two copies of "Dracula" available for checkout.

> [!info]- Semantic Content
>
> **Env Vars:** null (5), select (2), count (2), where (1)
> **CLI Commands:** find (3)
> **SQL:** select (2), where (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Add new books to the library](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=0)** - [Instructor] This challenge asked us to add two donated books to our library's collection. To do that, we'll need to add records to the Books table. With the schema of the Books table in mind, I used an INSERT statement to add both of these books at the same time. I'll start with INSERT INTO, which is the keyword we'll use to tell the database we want to add new information to a table, and then I'll use the table name, Books. After that, I'll add the names of fields that I want to put information in. That's Title, Author, Published, and Barcode. The table will take care of adding a book ID for us. Then I'll add the values in two sets of parentheses because there are two books. And because this title has an apostrophe, which is usually used to indicate the beginning or end of a text string, I'll need to double that up to tell the database that I want this apostrophe to be interpreted as part of the string, not as a delimiter between strings. We were provided barcodes that each book will have, so we can put those values in as well. In an automated book management system, the barcode value would be generated and handled automatically according to whatever set of rules our barcode system follows. That system would need to ensure that the barcodes are unique. When I run this, two records will be added to the Books table. We can check this with a quick SELECT query, showing the most recent five books to be added to the database, which the challenge also asked for. We need to sort the results in descending order to get the most recently added books at the top based on their automatically assigned book ID. And we'll limit the results to the most recent five with a LIMIT clause. I'll run this. And there's our five most recently added books.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=93)** And here, I can see the two copies that we just added. Great, we've solved the challenge.

> [!info]- Semantic Content
>
> **Env Vars:** insert (2), into (1), select (1), limit (1)
> **SQL:** insert into (1), select (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Check out books](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=0)** - [Instructor] Let's check out how I solved this challenge. I used an insert statement, providing the values for each book loan. For each book that we loan out, we'll add a record to the loans table, and we can do that with separate statements or all in one. I chose to do this with just one statement. I'll insert into loans, and then I'll set the fields I want to work with. That's book ID, patron ID, loan date, and due date. We won't set a return date, because the books haven't been returned yet, and the way the database is set up, those values will be null if we don't provide a value. So these fields are in a set of parentheses, and now we need to provide values with the values keyword and a set of parentheses for the relevant values for each book. For the first book, I'll provide an ID by using a subquery to get that value based on the barcode, which is the information we'd have available if we were using a barcode scanner to scan each book during the checkout process. I'll provide the patron ID using another subquery that uses the email address from the patron's library card. And I'll put in the loan date and due date in [SQL](../../Skills/Data%20Science/SQL.md) date format, with a year first, a dash, the month, another dash, and the day. In an automated system, this would be generated by the software according to whatever rules we might have set up, but here, we're using explicitly provided values. Then I do the same thing for the second book. With this statement, the loans will be added to the system. We can verify this information by looking up the patron's loans. For that, I'll write a select statement returning the four fields that the challenge requested, loan ID, title, due date, and return date. To get this information,
>
> **[1:35](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=95)** I need values from the books table and the loans table. And then to look up the loans for this particular customer based on the information we have, which is their email address, I need to use a subquery here to look up the patron ID from the patrons table so I can use that to set my condition for the results from the loans table. Then I'll sort the results with the most recent loan based on the automatically generated loan ID at the top, with order by loan ID descending. I'll run this, and here I can see those two new loans with their null return date. Now we can hand the books over to the patron and wish them happy reading.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Prerequisites:** set up (2)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Check for books due back](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=0)** - [Instructor] This challenge asked us to prepare a report of books that are due to be returned or which are overdue on a specific day. In order to find which books are due back on a given day, we'll use a select statement and we'll need to use the due date field from the loans table. We'll also need the book title and some patron information. The first field I'm using is from the loans table, so I'll add from loans. You don't have to use the first table you reference as the from condition, but it helps keep things organized. And depending on how you prefer to write queries, you might use aliases to provide shorter names for each table here. In this query, I've left the table names alone, so we can see what we're doing more easily. We'll also need information from the books table, so I'll join that and set the book ID field in the loans table to match up with the book ID field in the books table. And then we'll need patron information as well. So I'll add join patrons and say that the patron ID on the loans table and on the patrons table, will be the field that we associate on. And then we'll use a condition to match the given due date. We have other loans that are out, but they're not due back yet. Their due date is after the date we're looking at. So we'll limit our search to just the date range, the challenge specified. And we'll need to make sure that the results we get back are only for those books which haven't already been returned. If there's no date in the return date field, that'll be null. So I need to use "is null" as my condition here. Remember, we don't use equals when we're working with null. And then I'll sort the results by the due date in descending order. I'll run this.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=94)** Okay, there's my list of books that are due back as of the specific date, which have haven't already been returned. Now it's time to write some reminder emails.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Return books to the library](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=0)** - [Speaker] Here's how I solve this challenge. The way our system works, we indicate that a book has been returned and that a loan is complete by setting a return date for each record in the loans table. The challenge provided us information about three books to return. So we'll need to modify these loan records by putting the provided date into the return date field. Because we're working with existing records, we'll need to use the update keyword and specify the loans table. We want to modify the return date, so I'll set return date and make that equal to the date the book was returned. But this update statement by itself will set that value on all the records in the loans table. So we need to narrow down the query by adding a condition to match just this particular copy of the book, using a sub-select based on the book's barcode. I'll add another condition to match just the unfinished loan record, which has a null in the return date column. That's important because otherwise, we'd be setting the return date for all instances where this book was checked out, and that's not what we want to do. In this case, I'll use an update statement for each barcode. When we run these queries, the loan records for these books will be updated with a return date, and then the loan for each book will be complete. The challenge also asked us to show information from the recent loan records for the three barcodes that we were provided. So, I'll use a select statement for that. With the return date and barcode fields as the challenge requested. I'll need to join the books table to the loans table because the loans table uses the book ID and the book ID is associated with the barcode in the books table. Then to restrict the results only to the three barcodes provided, I used where and in
>
> **[1:36](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=96)** and provided a set of three values here to match. In this way, we'll only get records whose book ID matches a barcode in this limited set of values. Then I'll sort the results in descending order by return date, so the most recent returns will be at the top of the list, and then, I'll sort the results by barcode to enforce the same order of results that the challenge expects. I'll limit the results to eight results, which is what the challenge asked for. I'll run this and it looks like this solves the challenge. Great. We're done processing books and now these books are available to be loaned out again.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [speaker] (1)

#### [Solution: Encourage patrons to check out books](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980&t=0)** - [Instructor] This challenge asked us to find information about people who checked out only one book in the year 2024. Here's how I solved this challenge. I need to return information from the database, so I used a SELECT statement. And the values that I'm returning are a count of loans with an alias LoanCount as the challenge requested. And then the patron's first name and email address to make it easy to feed these results into our email system to generate reminder emails. We'll need information from the Loans table. And I'll join this to the Patrons table to get the other two fields. To find loans that were made in 2024, I'm using my WHERE clause here with a BETWEEN statement and the first and last days of the year. This will find any record with a loan date in 2024. Because I'm counting values from the Loans table, I need to group by patron ID so I can get account of loans for each patron. The challenge asked us to look for patrons who borrowed only one book, no more, no less. So I'm using the HAVING statement here to check the value of LoanCount. I need to use HAVING because LoanCount is an aggregate value, and the check there will be = 1. The challenge also asked us to sort the result alphabetically by first name, so I'm using ORDER BY here to accomplish that. I'll run this. And it looks like we solved the challenge. Hopefully, these patrons will visit the library more this year than they did last year.

> [!info]- Semantic Content
>
> **Env Vars:** having (2), select (1), where (1), between (1), order (1)
> **SQL:** having (2), select (1), where (1), order by (1)
> **CLI Commands:** find (3), make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Find books to feature for an event](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-find-books-to-feature-for-an-event?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-find-books-to-feature-for-an-event?u=76281980&t=0)** - [Instructor] This challenge has a few components, and here's how I solved it. We were asked to find the quantity or count of books which were published in a specific range of years, so I'm using the COUNT of the Title with an alias of Qty for quantity, like the challenge asked, and then the Title field itself. These values come from the Books table. To find the books that were published in the 1890s, I used the BETWEEN operator to set an inclusive range of values as my WHERE condition. In our database, the published value is an integer. Next, I need to ensure that the books within that range are actually available in the library and that they're not checked out to a patron. So I'm using the AND operator here with WHERE to add another condition. That condition is that the BookID is not found in the list of books with NULL return dates. This subquery returns a list of books that aren't available in the library, and then the WHERE clause checks whether the expression BookID NOT IN that list is true. If it is true, then the book is, or at least ought to be, present in the library. Because I'm counting the number of times that a title appears in my results, I need to group the results by title for that COUNT function to work properly, so I have GROUP BY Title here. The challenge also asked us to sort the results by quantity and then by title, making it easy to make sure that we grab the right number of books. I'll run this query. And there's our books to go find. All right, it's time to get started pulling these books and setting up for the exhibit.

> [!info]- Semantic Content
>
> **Env Vars:** where (3), count (2), between (1), null (1), group (1)
> **CLI Commands:** find (3), make (1)
> **SQL:** where (3), group by (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Book statistics](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=0)** - [Instructor] This challenge asked us to figure out the popularity rankings of books based on how often they've been checked out, and to show the books ranked within the top 10. But the challenge reminds us that some books might be tied in popularity. So, we'll need to account for that in our results. To do this, I'll use a Window function called DENSE_RANK, which assigns a rank value to records based on a given criteria. In this case, the criteria will be the count of loans. DENSE_RANK assigns the same rank to records with the same value that we're evaluating. So for example, books that each have 37 loans would all be ranked in sixth place instead of arbitrarily being assigned sixth, seventh, and eighth place or something like that. The challenge asked for three field values. The count, the rank, and the book title. To get this information, we'll write a SELECT statement. But in order to limit the results, we'll need to put our Window function in a subquery so we can treat the resulting rank value as a number to filter the most popular results. My sub-select here provides the three fields. And the second value is where we use the DENSE_RANK function. We're ranking by the count of loans, which is sorted with the highest value first. This rank for each title will be called BookRank. The information for this query comes from the Loans and Books tables. So, we'll join those up in the usual way with their corresponding book ID values. And then we'll group the results by the book title. This gives us a derived table and it has to have an alias, which I'll set as RankedBooks. In this case, the specific name doesn't really matter, but it's working as though I'm saying
>
> **[1:34](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=94)** SELECT * FROM RankedBooks, as though RankedBooks was a real table in my database. You could set this alias to anything you want though, because the name isn't being referred to anywhere else in the query here. But if it was, you'd need to be consistent, of course. So, from this RankedBooks derived table, I'm using WHERE clause to show only the records with a BookRank that's the rank from the DENSE_RANK function that are less than or equal to 10. The challenge asked us to sort the results by two criteria, the LoanCount, and then the Title. So, I'll do that with ORDER BY LoanCount, which is just a value now, not an aggregate value, thanks to being a field in our derived table, and then Title. The LoanCount isn't descending order, so the highest number of loans will be at the top, and we'll see that this corresponds with a rank of one. Sorting by title in ascending order, we'll have our books listed alphabetically by title in case there are books that have the same loan value. Spoiler alert, there are. I'll run this. And I can see my rankings here. Some books have the same loan count, so they have the same rank. I can also see that "Frankenstein" was the most popular book to check out with 53 loans. I guess you could say it's monstrously popular.

> [!info]- Semantic Content
>
> **Env Vars:** dense_rank (4), select (2), where (1), order (1)
> **SQL:** select (2), where (1), order by (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps in your SQL journey](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/next-steps-in-your-sql-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/next-steps-in-your-sql-journey?u=76281980&t=0)** - [Scott] We've spent some time completing hands-on challenges that put our [SQL](../../Skills/Data%20Science/SQL.md) skills to the test. Now, I encourage you to challenge yourself further. If you have a database to work with, set yourself some challenges that reflect real world tasks, or spend some time with our other hands-on SQL challenge courses here on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. There's nothing like hands-on practice to improve your skills. See you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** sql (2)
> **Speakers:** - [scott] (1)


## Instructor

- [Scott Simpson](../../Instructors/Software%20Development/Scott%20Simpson.md)

## Skills Covered

- SQL

## Path Context

### In [SQL Hands-On Practice](../../Paths/Data%20Science/Learning%20Paths/SQL%20Hands-On%20Practice.md)
← [Practice It- SQL Joins](Practice%20It-%20SQL%20Joins.md) | **6 of 9** | [Data Analysis- Investigate with SQL](Data%20Analysis-%20Investigate%20with%20SQL.md) →

### In [Advance Your Skills in SQL](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Skills%20in%20SQL.md)
← [Using SQL with Python](Using%20SQL%20with%20Python.md) | **5 of 5**

## Appears In

- [SQL Hands-On Practice](../../Paths/Data%20Science/Learning%20Paths/SQL%20Hands-On%20Practice.md)
- [Advance Your Skills in SQL](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Skills%20in%20SQL.md)

## Related Courses

_Courses sharing skills:_

- [Advanced SQL Project- Design and Manage a Database](Advanced%20SQL%20Project-%20Design%20and%20Manage%20a%20Database.md) — SQL
- [Practical Database Design- Implementing Responsible Data Solutions with SQL Querying](Practical%20Database%20Design-%20Implementing%20Responsible%20Data%20Solutions%20with%20SQL%20Querying.md) — SQL
- [SQL Server Fundamentals- Master Basic Query Techniques](SQL%20Server%20Fundamentals-%20Master%20Basic%20Query%20Techniques.md) — SQL
- [Advanced SQL for Data Science- Time Series](Advanced%20SQL%20for%20Data%20Science-%20Time%20Series.md) — SQL
- [Intermediate SQL- Data Reporting and Analysis](Intermediate%20SQL-%20Data%20Reporting%20and%20Analysis.md) — SQL

---

[↑ Back to top](#)