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
  - '[[SQL Hands-On Practice]]'
  - '[[Advance Your Skills in SQL]]'
prev_courses:
  - '[[Practice It- SQL Joins]]'
  - '[[Using SQL with Python]]'
next_courses:
  - '[[Data Analysis- Investigate with SQL]]'
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
created: 2026-04-29
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
  - SQL challenges to test your knowledge
  - Exploring the databases
  - CoderPad tour
- [**1. In the Restaurant**](#1-in-the-restaurant) (12 videos)
  - Solution: Create invitations for a party
  - Solution: Create a table to store information
  - Solution: Print a menu
  - Solution: Sign a customer up for your loyalty program
  - Solution: Update a customer's personal information
  - Solution: Remove information from the database
  - Solution: Log customer responses to an invitation
  - Solution: Look up reservations
  - Solution: Take a reservation
  - Solution: Take a delivery order
  - Solution: Track your customer's favorite dishes
  - Solution: Prepare a report of your top customers
- [**2. At the Library**](#2-at-the-library) (8 videos)
  - Solution: Check book availability
  - Solution: Add new books to the library
  - Solution: Check out books
  - Solution: Check for books due back
  - Solution: Return books to the library
  - Solution: Encourage patrons to check out books
  - Solution: Find books to feature for an event
  - Solution: Book statistics
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps in your SQL journey

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### SQL challenges to test your knowledge
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/sql-challenges-to-test-your-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/sql-challenges-to-test-your-knowledge?u=76281980&t=0)** - [Scott] When we're learning how to use SQL, it's useful to practice with real world examples.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/sql-challenges-to-test-your-knowledge?u=76281980&t=5)** We'll use two databases that represent real world situations.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/sql-challenges-to-test-your-knowledge?u=76281980&t=9)** First, we'll perform some practical tasks with a database that a restaurant might use, and then we'll shift our focus to common operations that we might perform in a library setting.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/sql-challenges-to-test-your-knowledge?u=76281980&t=18)** I'm Scott Simpson, and I hope you'll join me for this course where I'll challenge you to complete some hands-on tasks with SQL.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/sql-challenges-to-test-your-knowledge?u=76281980&t=24)** Let's go.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2)
> **Code Keywords:** let (1)
> **Speakers:** - [scott] (1)

#### Exploring the databases
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=0)** - [Instructor] For the challenges in this course, we'll be using two databases, one for a small local restaurant and one for a community library.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=7)** In each challenge, I'll provide you with information about what tables I expect you to use to solve the challenges, but I'd like to give you a high level overview of what these databases look like before we start.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=17)** The restaurant database starts out with eight tables, but that'll change as we move through the challenges.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=23)** This is a simplified diagram of all the tables, though we won't be using all of them in each challenge.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=28)** I'll give you more focused diagrams in each challenge to show which tables are going to be used.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=33)** Some of the tables in the restaurant database contain information about the restaurant's customers and about the dishes the restaurant serves.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=39)** Other tables are linking tables, associating customer and dishes values with each other in various ways, like to represent the items in a takeout or delivery order.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=48)** I've labeled the primary keys in each table with PK and where you see field names that correspond to those in other tables, those values are being used as foreign keys there.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=57)** So for example, customer ID in the orders table refers to the customer ID in the customer's table.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=63)** Order ID in the orders dishes table refers to order ID in the orders table, and dish ID in the orders dishes table refers to dish ID in the dishes table.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=73)** So an order belongs to a customer and includes one or more dishes represented as records in the orders dishes table.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=80)** Some of the other tables are used to associate customers with attendance at special events, for records about dining reservations and so on.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=88)** The library database contains three tables.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=91)** One of these tables contains records for the 200 books our library has in its collection.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=95)** Another table contains information about 100 library patrons, and the third table contains records for 2000 loans or instances when someone borrowed a book.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=105)** In the loans table, books and patrons are referred to by their ID number, which are the primary keys for records in the books and patrons tables respectively.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=114)** I don't expect you to memorize the structure of these databases.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=117)** As I said, I'll provide you diagrams of the relevant tables in each challenge.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=121)** When you're working on a challenge, feel free to write your own select queries to explore the database.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=126)** If you do, you'll see a message about a wrong answer, but that's fine because all that really matters is whether you get to a solution that matches what's expected when you're done working on each challenge.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=135)** Additionally, each time you run your code, the database starts out in its initial state, so changes that you make won't persist across multiple times that you run a query.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=144)** You could drop all the tables if you want to, and the database will be right there waiting for you the next time you click to try your code.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=150)** So don't worry about accidentally making changes that will get you out of sync with what the challenge evaluation software expects.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/exploring-the-databases?u=76281980&t=156)** In the next video, we'll spend some time exploring the challenge interface.

> [!info]- Semantic Content
>
> **Definitions:** refers to (2), is a  (1)
> **CLI Commands:** make (1)
> **Code Keywords:** interface (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### CoderPad tour
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/coderpad-tour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/coderpad-tour?u=76281980&t=0)** - [Instructor] This course consists of automated code challenges that appear when you click the challenge links in the courses table of contents.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/coderpad-tour?u=76281980&t=6)** Each challenge includes instructions and a code editor you can use to create and test your own solution to the challenge.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/coderpad-tour?u=76281980&t=12)** These challenges are hosted by Coder Pad and they appear in the same area of the course page where you watch the courses videos.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/coderpad-tour?u=76281980&t=18)** We recommend using a desktop browser for the best experience with code challenges, but you can use the LinkedIn Learning mobile app if you prefer.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/coderpad-tour?u=76281980&t=25)** The code challenge has three areas, instructions in the top left, a console for output in the bottom left and a code editor for your answer on the right.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/coderpad-tour?u=76281980&t=34)** You can use these drag handles to allocate space as you'd like.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/coderpad-tour?u=76281980&t=38)** To get even more horizontal space for the code editor, you can collapse the courses table of contents on the left.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/coderpad-tour?u=76281980&t=43)** Each challenge has instructions that include a description of the challenge and the challenge's desired result.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/coderpad-tour?u=76281980&t=49)** Create your answer in the code editor.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/coderpad-tour?u=76281980&t=54)** When you click test my code, you'll see a message indicating whether your code returned a correct result and a text-based version of the return data.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/coderpad-tour?u=76281980&t=64)** If your answer doesn't create a correct result, you'll see a message telling you the code is incorrect and showing the data that was returned.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/coderpad-tour?u=76281980&t=70)** If any messages are too long to fit in the console, you can scroll sideways to see all of the text.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/coderpad-tour?u=76281980&t=75)** When you finish each code challenge, return to the courses table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)


### 1. In the Restaurant

> [↑ Back to Table of Contents](#table-of-contents)

#### Solution: Create invitations for a party
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-invitations-for-a-party?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-invitations-for-a-party?u=76281980&t=0)** - [Instructor] To solve this challenge, here's what I did.
>
> **[0:03](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-invitations-for-a-party?u=76281980&t=3)** I know I need to get information from the database, and to do that, I'll use the SELECT keyword.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-invitations-for-a-party?u=76281980&t=8)** Then I need to specify the fields that I want information from, and in this case I'll use FirstName, LastName, and Email.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-invitations-for-a-party?u=76281980&t=15)** I need to tell the database which table to read information from, so I'll use the FROM keyword and provide the Customers table.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-invitations-for-a-party?u=76281980&t=21)** Finally, I need to tell the database how to sort the results that we get back.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-invitations-for-a-party?u=76281980&t=25)** Customers weren't entered into this table in alphabetical order, and the order that records are stored in a database doesn't guarantee that we'll get them back in any particular order anyway, so I'll need to use the ORDER BY keyword and provide a field to use to sort the results.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-invitations-for-a-party?u=76281980&t=38)** That'll be the LastName field.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-invitations-for-a-party?u=76281980&t=40)** I'll run this.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-invitations-for-a-party?u=76281980&t=43)** And there we go.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-invitations-for-a-party?u=76281980&t=44)** We have a list of customers' names and emails, sorted by the customer's last name.

> [!info]- Semantic Content
>
> **Code Keywords:** from, (2), finally, (1), this. (1)
> **SQL:** select (1), order by (1)
> **Env Vars:** select (1), order (1)
> **Speakers:** - [instructor] (1)

#### Solution: Create a table to store information
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=0)** - [Instructor] Here's how I solve this challenge.
>
> **[0:02](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=2)** In order to create a table, we'll use the CREATE keyword, and provide a name for the table we're creating.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=8)** So I'll write CREATE TABLE AnniversaryAttendees.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=11)** We know that this table needs two columns, one for the CustomerID, and one for the number of people.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=16)** To create those columns or fields, I'll provide the name of the field and the data type of the field within a set of parentheses.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=23)** What's important is that these values are integers, not floating-point numbers, because, for example, we don't have decimal places in our IDs, and it's also important to match the type to the type used in the Customer's table in this case.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=35)** So we don't have to do type conversions back and forth when we use this table.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=38)** The same thing goes for the PartySize.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=40)** We're not going to have fractional people.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=43)** And we may need to do some calculations with this field later, like, adding them all up.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=46)** So storing this information as a text type isn't a good idea.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=50)** Writing INT here will turn into integer 10 in this particular database.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=54)** So, when we see that in this solution, that specific length doesn't really matter.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=58)** The important part is that we have an integer type for each of these fields.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=62)** The challenge also required that we make sure that these fields can't contain null values.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=66)** So, for each one, I wrote NOT NULL.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=68)** I'll finish my CREATE statement with a semicolon, and I've kept this SHOW COLUMNS line here that was provided.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=74)** And this is what's going to show how we set up the table, so we can check it against what the challenge expects.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=80)** I'll run this.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=83)** And I can see that the table has been created.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=85)** Now we have a place to store information about our customer's responses.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-create-a-table-to-store-information?u=76281980&t=88)** In another challenge, we'll add data to this new table.

> [!info]- Semantic Content
>
> **Env Vars:** create (3), table (1), int (1), null (1), show (1)
> **Code Keywords:** case. (1), this. (1)
> **CLI Commands:** make (1)
> **SQL:** create table (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Solution: Print a menu
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-print-a-menu?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-print-a-menu?u=76281980&t=0)** - [Instructor] To solve this challenge, I used the select keyword.
>
> **[0:03](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-print-a-menu?u=76281980&t=3)** The challenge asked for four specific fields, so I'll use those here in my select clause.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-print-a-menu?u=76281980&t=8)** These are Type, Name, Description, and Price.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-print-a-menu?u=76281980&t=11)** All of these fields come from the dishes table, so I'm using From Dishes Here to make that happen.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-print-a-menu?u=76281980&t=17)** The challenge asked for this information about dishes whose price was $6 or less, so to filter the results on that criteria, I wrote where price is less than or equal to six, and then we were asked to sort the output, not by one field, but by two.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-print-a-menu?u=76281980&t=32)** So in my order by clause, I have the first field we're sorting by which is type, and then a comma, and then name.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-print-a-menu?u=76281980&t=38)** This means that if there are records that come back with the same type, then the name field will be used to sort these.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-print-a-menu?u=76281980&t=44)** By using logic inequality operators in our query, we can narrow down the results that we get by specifying a condition and that lets us target the information we need.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-print-a-menu?u=76281980&t=53)** So I'll run this and there we go.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-print-a-menu?u=76281980&t=57)** It looks like this solves the challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (3)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Solution: Sign a customer up for your loyalty program
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=0)** - [Instructor] Here's how I solved this challenge.
>
> **[0:02](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=2)** I'll paste my solution in here and then we'll go through it piece by piece.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=6)** When we create records, the first thing we need to do is specify which table information is going to.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=11)** So I'll start my insert statement with insert into customers.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=15)** Then we need to specify the columns for which we're adding data.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=18)** We don't need to put data into all of the columns, but I'll use most of them here.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=22)** The information we have contains a first name, a last name, an email address, a mailing address with a city and state, a phone number and a birthday.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=31)** I've separated those out onto their own lines here to make this a little easier to read in this small window, but of course, you could put them all on the same line as long as they're separated by commas.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=40)** These go in a set of parentheses and the column names will match up with values we'll add in another set of parentheses.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=46)** To add the values, I'll use the values keyword here and in the second set of parentheses, I'll provide values for each field.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=54)** These are positional, meaning that if first name is the first column name in the list, then the value, Anna, will go into first name because that value is first in the list.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=64)** And I'll end this insert statement with a semicolon.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=67)** Then we'll write a select statement to take a look at the state of the customer's table sorted with the latest customer ID first and then we'll trim the results to only show the five most recently added customers based on the customer ID that's automatically assigned to new customer records by the database.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=82)** To do that, I'll write select star from customers, order by customer ID, descending, limit five.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=89)** I'll run this.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=92)** And there we go.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=93)** As I mentioned, this record was assigned an ID automatically.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=97)** It also recognized way over here on the right that because we didn't specify a value for the favorite dish, that value has been left empty.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-sign-a-customer-up-for-your-loyalty-program?u=76281980&t=105)** Great, our new customer has been added and we've verified that their record has its automatically assigned ID number.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** this. (1)
> **Speakers:** - [instructor] (1)

#### Solution: Update a customer's personal information
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=0)** - [Instructor] Here's my solution to this challenge.
>
> **[0:02](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=2)** There's a few ways to approach this challenge.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=4)** You might have explored the database to find the customer ID for the customer whose information we're asked to update.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=10)** Or you might use the information that was provided to focus in on the record that needs updating.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=14)** That's what I did here.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=16)** To change information in the database table, we'll use the UPDATE keyword and we'll provide the name of the table that we're updating information within.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=23)** Then we'll provide the new information for the fields that we want to update.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=27)** But it's important to limit our updating just to records that we want to update.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=32)** If we don't provide a WHERE clause with some parameters to limit the records that we're updating, we'll end up making changes to every record in the database.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=39)** And unless all of our customers are moving in with Taylor, that's not what we want.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=43)** That would make delivery orders a lot easier, though.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=46)** So, I'm using the information that was provided to target the record for the correct Taylor.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=51)** If you explored the database, you might have noticed that there's another customer with the same name, but with different personal details.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=58)** When we're dealing with names, it's pretty common to end up with customers or employees or contacts or similar kinds of records that have the same name.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=66)** So we don't want to use just a name as a unique identifier in most cases.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=70)** As I mentioned, you might have found the customer's ID number, and you might have used that in the criteria here instead of the customer's old address information.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=77)** That's fine if you did.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=79)** I'll end my update clause with a semi-colon.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=82)** The challenge also asked us to return a report of customers with this name, FirstName Taylor, LastName Jenkins.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=88)** So I wrote a select statement here to show all the fields with star from the Customers table where the FirstName and LastName are the values provided.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=99)** I'll run this.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=102)** And I have two records.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=103)** Two Taylor Jenkins's. Or Taylor's Jenkins?
>
> **[1:46](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=106)** Either way, we can confirm that we only updated the information for the one we intended.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=110)** Here's that new address in New York for that customer.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-update-a-customer-s-personal-information?u=76281980&t=113)** It looks like this solves the challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **SQL:** update (1), where (1)
> **Env Vars:** update (1), where (1)
> **Code Keywords:** this. (1)
> **Speakers:** - [instructor] (1)

#### Solution: Remove information from the database
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=0)** - [Instructor] Here's how I solved this challenge.
>
> **[0:02](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=2)** I'll paste my solution in here, and then let's take a look at each part.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=6)** When we delete information from our database, it's a good idea to double check that our query is targeting the records that we expect it to.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=13)** To check my delete statement before I run it, I'll convert this delete into a SELECT star to test the logic of our statement before we remove data.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=24)** And for now, I'll comment out this part too.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=27)** This statement, which is now a SELECT statement, is working within the reservations table.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=32)** That table uses the customer ID value.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=34)** And we were provided a name and a phone number, so I'm using a subquery here on the customers table to get that value using the information that was given to us.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=42)** In this specific case, either the name or the phone number would be sufficient to locate this customer.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=47)** But we never know.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=48)** There could be more than one Loretta Hundey or more than one person that shares the same number.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=52)** And so we want to be specific when working with this kind of data.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=55)** I'm also searching for a reservation record with a date of 2024-05-15 and then a percent sign.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=63)** The customer didn't say what time the reservation was, so we don't know that information, so we'll need to use the LIKE keyword and a percent sign to match anything with the date information that we do know.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=73)** The part of the date field that we're leaving off here is the time, and it's pretty unlikely that this customer has two reservations on the same day.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=79)** So we'll just match based on date.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=81)** I'll run this.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=84)** And here's the result.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=86)** There's one reservation that matches the information we know.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=89)** So we found the reservation, and now we'll need to remove this now incorrect information.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=94)** In our database, deleting this record doesn't really affect that much.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=97)** The reservation ID, for example, isn't used anywhere else in the database.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=101)** But for records with more complex relationships, for example, a customer record, we might not simply want to delete the record because that would break consistency with other data in the database.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=111)** So we might want to keep the records key but blank out specific information if they request we take that action.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=117)** How you handle data in your database is a function both of business choices and whatever other kinds of responsibilities you have.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=124)** To remove the requested record, I'll switch my statement back to a delete statement.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=129)** And I'll un-comment my SELECT query here.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=134)** The SELECT query that we were asked to build shows the customer's reservations since the beginning of 2024, and we're asked to return these four fields here.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=142)** Those fields are on different tables, so we're joining the reservations and customers tables to get what we need.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=148)** And in this case, I'm just using the customer's name to find records.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=152)** Like I said, I happen to know there's only one Loretta Hundey in this database.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=156)** But what we're really looking for is that that specific reservation we deleted is in fact gone.
>
> **[2:41](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=161)** I'll make sure that my condition here looks for a reservation date greater than or equal to 2024-01-01, the first of that year.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=171)** I'll run this.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=173)** And there we go.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=174)** I can see Loretta's reservations, the reservations for customer ID 70 for the year 2024, and I can see that the one that we wanted to remove for May 15th is not in this list.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-remove-information-from-the-database?u=76281980&t=186)** If you got the correct result too, congratulations.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (5), case, (2), this. (2), let (1), function (1)
> **SQL:** select (4)
> **Env Vars:** select (4)
> **CLI Commands:** find (1), make (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Solution: Log customer responses to an invitation
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980&t=0)** - [Instructor] Here's how I solved this challenge.
>
> **[0:03](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980&t=3)** In order to add information to the AnniversaryAttendees table, we'll need to use the INSERT INTO keyword and tell the database which table to use.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980&t=10)** Then we'll need to provide columns that we'll put data into, and those go in a set of parentheses.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980&t=15)** In this case, we'll use the CustomerID and PartySize fields.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980&t=19)** Next, we need to tell the database what to store in those fields for each record we add.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980&t=24)** Those are the values, so I'll use the VALUES keyword and another set of parentheses to contain the values.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980&t=30)** The first value, the CustomerID, will contain information from another table.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980&t=34)** In order to find this information, we could write a SELECT statement to look up the ID by email address, write that ID down, and then type it into the query.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980&t=43)** But we can be a little bit more efficient about the process and save a step by putting the SELECT statement right into this query.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980&t=49)** This is a subquery, and it needs to go inside a set of parentheses so the database knows to evaluate it and use its result as the value in the outer query.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980&t=58)** So I've added that query inside a set of parentheses in the first position in the VALUES clause.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980&t=63)** This query gets the CustomerID that corresponds with the email address that we were provided, and then I set the second value to the number of people in the party.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980&t=71)** We were also asked to write a query that returns the records in the AnniversaryAttendees table.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980&t=76)** So to do that, I'll write SELECT * FROM AnniversaryAttendees.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980&t=81)** I'll run this, and I can see the information that I added.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-log-customer-responses-to-an-invitation?u=76281980&t=85)** This solves the challenge, and now we're ready to add information for any other customers who reply to us as well.

> [!info]- Semantic Content
>
> **Env Vars:** select (3), values (2), insert (1), into (1)
> **SQL:** select (3), insert into (1)
> **Code Keywords:** case, (1), this, (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Solution: Look up reservations
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-look-up-reservations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-look-up-reservations?u=76281980&t=0)** - [Instructor] Here's how I solved this challenge.
>
> **[0:02](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-look-up-reservations?u=76281980&t=2)** We were asked to prepare a report of reservations within a specific date range.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-look-up-reservations?u=76281980&t=6)** The challenge asked us for four fields, so I'm using select to get those from the reservations table joined to the customer's table, based on the relationship between the customer ID field in both tables.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-look-up-reservations?u=76281980&t=17)** The condition that I'm using is a range of dates.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-look-up-reservations?u=76281980&t=20)** So I'm getting any records with dates between 2024/06/09, and 2024/06/15, and the between operator here is inclusive, so that'll get any records on those days as well.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-look-up-reservations?u=76281980&t=33)** We were also asked to sort the records by date.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-look-up-reservations?u=76281980&t=36)** I put ASC in here for ascending order, even though that's the default behavior, but it's usually best to be explicit where we can.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-look-up-reservations?u=76281980&t=44)** I'll run this.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-look-up-reservations?u=76281980&t=46)** Okay, there's the results.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-look-up-reservations?u=76281980&t=48)** The order by clause here is making sure that our results are returned in chronological order, which is what the challenge asked us to do.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-look-up-reservations?u=76281980&t=55)** The entries in the reservations table are mostly, but not fully, in chronological order, so it's useful for us to change the sequence of the results to guarantee that each reservation in the list will be at the same time as or later than the one above it.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-look-up-reservations?u=76281980&t=68)** It looks like we solved the challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1)
> **Env Vars:** asc (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Solution: Take a reservation
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-reservation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-reservation?u=76281980&t=0)** - [Instructor] Here's how I solved this problem.
>
> **[0:02](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-reservation?u=76281980&t=2)** To make a reservation, we'll add or insert a record into the Reservations table, with a CustomerID, a Date, and Time and a PartySize.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-reservation?u=76281980&t=11)** As we've seen in other challenges, the CustomerID is something we'll need to look up in the Customers table, and I'm using a subquery again here to do that, returning the CustomerID value to my insert statement in the CustomerID position.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-reservation?u=76281980&t=23)** The other two fields here that I'm using are given values that the challenge supplied, this date and time, 6:00 PM on April 12th, 2025, and a party size of 7.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-reservation?u=76281980&t=33)** The challenge asked us to write a query to return some information about the reservation that was most recently added to the table.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-reservation?u=76281980&t=39)** In some DBMS tools, we can get a value back from an insert statement, like a reservation ID, but we can also just use the highest value in the Reservations table in this case as well.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-reservation?u=76281980&t=48)** We could write a query using the max function, or we could use an order by clause in descending order and limit the responses to just one record.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-reservation?u=76281980&t=55)** That's what I did here.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-reservation?u=76281980&t=57)** But if you used a more efficient query and got the expected result, good job.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-reservation?u=76281980&t=61)** I'll run this and see if it satisfies the challenge.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-reservation?u=76281980&t=65)** Looks like it does.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-reservation?u=76281980&t=67)** There are often many ways to solve a problem using SQL, and some are more efficient than others, but don't spend your time over optimizing if you don't have to.

> [!info]- Semantic Content
>
> **Env Vars:** dbms (1), sql (1)
> **CLI Commands:** make (1)
> **Code Keywords:** function (1)
> **Ports:** :00 (1)
> **Speakers:** - [instructor] (1)

#### Solution: Take a delivery order
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=0)** - [Instructor] Here's how I approach this problem.
>
> **[0:03](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=3)** First, we need to add items to an order by adding one row for each dish or item in the order to the orders dishes table.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=10)** We know the order ID because the challenge provided that to us.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=14)** In a situation where an app was handling the whole order processing workflow, that software would create the order and either give us the ID of the order or use it itself internally.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=23)** But in this case, the order record has already been created for us.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=27)** So first, we'll add items to the order, which has the ID of 1001.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=31)** That's what this insert statement does here, and I'm telling it which fields in the orders dishes table to put values in.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=37)** Each row is also going to be getting an automatically assigned id, but we don't need to worry about that for this challenge.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=42)** For each entry, we'll use the name of an item in a subquery to look up the appropriate dish id because the orders dish linking table only uses keys from other tables to store information.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=53)** And we know that our dishes table doesn't have any duplicate names.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=56)** It wouldn't make sense to sell different dishes with the same name, so we can just use the name here to get the dish id.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=63)** After the items are added, we'll need to generate the summary that the challenge asked for.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=67)** We need to display four fields, all of which are supposed to have human readable names.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=71)** So it'll use the as keyword to set aliases for those.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=74)** The fields are the order number, the customer's name, account of items in the order and the total price, which we'll use the sum function to get.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=82)** We'll need to get information from four different tables for this query.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=86)** We'll start from the orders table, which I've given the alias O to keep things a bit more concise.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=91)** To that, we'll join the orders dishes table, so we can access the ID numbers of items in each order.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=96)** We'll also join the customer's table based on information in the orders table, so we can access the customer's name, which is one of the fields that the challenge requested, and we'll join the dishes table to get information about each dish based on its ID in the orders, dishes, or OD table.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=111)** Because we're using aggregate functions in our select clause, we ought to have a group by clause also to make sure that our aggregate functions are aggregating records the way we expect them to.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=121)** So, I also have a group by-clause here at the end, so each order will just have one row.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=126)** That's not strictly necessary here, because we have just one record being returned.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=130)** There's only one order number 1001, and that order only has one customer.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=135)** But if we took off this matching condition here and wanted to get this information for all the orders, the group by clause would keep things organized.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=143)** But again, in this case, it doesn't affect the output of this specific query.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=147)** I'll run this.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=149)** And there we go.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=150)** We've solved the challenge.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-take-a-delivery-order?u=76281980&t=152)** It's time to get started cooking that burger.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), for. (1), function (1), this. (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### Solution: Track your customer's favorite dishes
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-track-your-customer-s-favorite-dishes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-track-your-customer-s-favorite-dishes?u=76281980&t=0)** - [Instructor] Here's how I solve this challenge.
>
> **[0:03](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-track-your-customer-s-favorite-dishes?u=76281980&t=3)** We'll want to return the name of each popular dish with a column header or alias of Item, and we'll count up the records for each dish and call that frequency.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-track-your-customer-s-favorite-dishes?u=76281980&t=11)** We're using information from the Customer table and the Dishes table, even though we're only going to be displaying information from the Dishes table.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-track-your-customer-s-favorite-dishes?u=76281980&t=19)** Using GROUP BY here will allow us to get the count for each item in the FavoriteDish field, so we have a total number of times that each dish is ordered.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-track-your-customer-s-favorite-dishes?u=76281980&t=27)** We'll sort that by frequency, the count of people who had each dish listed as their favorite, with the highest count at the top.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-track-your-customer-s-favorite-dishes?u=76281980&t=34)** That's descending order.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-track-your-customer-s-favorite-dishes?u=76281980&t=36)** And we'll limit the results to the top two results by count or frequency.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-track-your-customer-s-favorite-dishes?u=76281980&t=41)** I'll run this, and it looks like we've solved the challenge.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-track-your-customer-s-favorite-dishes?u=76281980&t=44)** Now, in this scenario, I know that there are only two dishes that are the most popular and that the next most popular dishes have seven customers that like them.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-track-your-customer-s-favorite-dishes?u=76281980&t=52)** But it's always good to look around when you're using a limit like this to make sure that you're not artificially cutting off data.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-track-your-customer-s-favorite-dishes?u=76281980&t=58)** For example, if eight people also liked our miniature cheeseburgers, how could we say what the two most popular dishes are when there are two dishes tied for second place?
>
> **[1:06](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-track-your-customer-s-favorite-dishes?u=76281980&t=66)** When we're writing our queries, we need to have some awareness of the data that we're working with so we can make informed choices about things like grouping and limits.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** this, (1)
> **SQL:** group by (1)
> **Env Vars:** group (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Solution: Prepare a report of your top customers
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980&t=0)** - [Instructor] Here's how I solve this challenge.
>
> **[0:02](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980&t=2)** I started with the fields that I know I need to display, the count of orders and the customer's first name, last name, and email.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980&t=10)** The order ID field is on the Orders table.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980&t=12)** And I need to join customers here to get the other fields.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980&t=16)** Simply counting the orders might not give me the results I expect.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980&t=20)** I need to group my results by the customer ID to count up how many orders each customer has placed.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980&t=25)** That's critical, so I added GROUP BY Orders.CustomerID.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980&t=29)** Otherwise, we just get one count including all of the orders.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980&t=33)** The challenge asked for the customers who have ordered from us 15 or more times.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980&t=37)** And because COUNT is an aggregate function, we can't simply use its result in a WHERE clause.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980&t=42)** So we have to use a method that's aware of aggregate results, and that's the HAVING statement.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980&t=48)** So I'm using the alias for the count of orders here with HAVING to return only the grouped records that have 15 or more orders.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980&t=55)** Then with ORDER BY, I'm sorting the results with the largest number of orders at the top.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980&t=60)** I'll run this.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980&t=62)** And there's my report of the customers who have ordered from us 15 or more times.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-prepare-a-report-of-your-top-customers?u=76281980&t=67)** It looks like we've solved the challenge.

> [!info]- Semantic Content
>
> **Env Vars:** having (2), group (1), count (1), where (1), order (1)
> **SQL:** having (2), group by (1), where (1), order by (1)
> **Code Keywords:** function (1), this. (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 2. At the Library

> [↑ Back to Table of Contents](#table-of-contents)

#### Solution: Check book availability
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-book-availability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-book-availability?u=76281980&t=0)** - [Instructor] In order to find out how many copies of the book are still available in our library, we need to know the total number of copies the library has and subtract from that the number of copies that are currently loaned out.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-book-availability?u=76281980&t=11)** To get the total, I'll use a SELECT statement with a COUNT function.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-book-availability?u=76281980&t=15)** I'll use the Title field, but you could use any of the fields on the Books table for this operation.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-book-availability?u=76281980&t=20)** I know I'll be looking in the Books table, so I'll use FROM books, and then I'll set a condition with a WHERE keyword to match the book title we're looking for.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-book-availability?u=76281980&t=28)** That will give us the total number of copies of "Dracula" that are in our library's database, but some of those copies might be in the hands of our patrons, so we'll need to subtract the number of copies with active loans in the Loans table.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-book-availability?u=76281980&t=39)** To do that, I'll write a SELECT statement to find how many copies of "Dracula" have active loans.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-book-availability?u=76281980&t=44)** An active loan is one that has a returned date of NULL, meaning that it's out and hasn't been checked back in.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-book-availability?u=76281980&t=50)** So I'll do a COUNT of the title, which I can get through joining the book's title to the Loans table, and I'll match up the book IDs in each table so I can find how many books with the title "Dracula" have records in the Loans table with a returned date of NULL.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-book-availability?u=76281980&t=63)** Remember that when we work with NULL values, we have to ask if a value is or is not NULL, not whether it's equal to or not equal to NULL.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-book-availability?u=76281980&t=70)** The result of this query will be subtracted from the first one with a minus sign here.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-book-availability?u=76281980&t=75)** So even though this is a pretty long query, it only really has two terms, the total count of this book and the count of those which are checked out, and to keep the result fairly clean, we'll give that whole big select statement an alias with AS AvailableCopies.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-book-availability?u=76281980&t=90)** Otherwise, the result column header might be really long.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-book-availability?u=76281980&t=93)** I'll run this, and there we go.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-book-availability?u=76281980&t=96)** It looks like we count two copies of "Dracula" available for checkout.

> [!info]- Semantic Content
>
> **Env Vars:** null (5), select (2), count (2), where (1)
> **CLI Commands:** find (3)
> **Code Keywords:** function (1), for. (1), this, (1)
> **SQL:** select (2), where (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Solution: Add new books to the library
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=0)** - [Instructor] This challenge asked us to add two donated books to our library's collection.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=4)** To do that, we'll need to add records to the Books table.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=8)** With the schema of the Books table in mind, I used an INSERT statement to add both of these books at the same time.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=14)** I'll start with INSERT INTO, which is the keyword we'll use to tell the database we want to add new information to a table, and then I'll use the table name, Books.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=22)** After that, I'll add the names of fields that I want to put information in.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=26)** That's Title, Author, Published, and Barcode.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=30)** The table will take care of adding a book ID for us.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=33)** Then I'll add the values in two sets of parentheses because there are two books.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=38)** And because this title has an apostrophe, which is usually used to indicate the beginning or end of a text string, I'll need to double that up to tell the database that I want this apostrophe to be interpreted as part of the string, not as a delimiter between strings.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=51)** We were provided barcodes that each book will have, so we can put those values in as well.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=56)** In an automated book management system, the barcode value would be generated and handled automatically according to whatever set of rules our barcode system follows.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=64)** That system would need to ensure that the barcodes are unique.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=67)** When I run this, two records will be added to the Books table.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=70)** We can check this with a quick SELECT query, showing the most recent five books to be added to the database, which the challenge also asked for.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=78)** We need to sort the results in descending order to get the most recently added books at the top based on their automatically assigned book ID.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=85)** And we'll limit the results to the most recent five with a LIMIT clause.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=89)** I'll run this.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=91)** And there's our five most recently added books.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=93)** And here, I can see the two copies that we just added.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-add-new-books-to-the-library?u=76281980&t=96)** Great, we've solved the challenge.

> [!info]- Semantic Content
>
> **Env Vars:** insert (2), into (1), select (1), limit (1)
> **Code Keywords:** this, (1), for. (1), this. (1)
> **SQL:** insert into (1), select (1)
> **Speakers:** - [instructor] (1)

#### Solution: Check out books
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=0)** - [Instructor] Let's check out how I solved this challenge.
>
> **[0:03](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=3)** I used an insert statement, providing the values for each book loan.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=6)** For each book that we loan out, we'll add a record to the loans table, and we can do that with separate statements or all in one.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=13)** I chose to do this with just one statement.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=16)** I'll insert into loans, and then I'll set the fields I want to work with.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=19)** That's book ID, patron ID, loan date, and due date.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=24)** We won't set a return date, because the books haven't been returned yet, and the way the database is set up, those values will be null if we don't provide a value.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=32)** So these fields are in a set of parentheses, and now we need to provide values with the values keyword and a set of parentheses for the relevant values for each book.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=40)** For the first book, I'll provide an ID by using a subquery to get that value based on the barcode, which is the information we'd have available if we were using a barcode scanner to scan each book during the checkout process.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=52)** I'll provide the patron ID using another subquery that uses the email address from the patron's library card.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=58)** And I'll put in the loan date and due date in SQL date format, with a year first, a dash, the month, another dash, and the day.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=67)** In an automated system, this would be generated by the software according to whatever rules we might have set up, but here, we're using explicitly provided values.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=76)** Then I do the same thing for the second book.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=78)** With this statement, the loans will be added to the system.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=81)** We can verify this information by looking up the patron's loans.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=86)** For that, I'll write a select statement returning the four fields that the challenge requested, loan ID, title, due date, and return date.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=93)** To get this information, I need values from the books table and the loans table.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=98)** And then to look up the loans for this particular customer based on the information we have, which is their email address, I need to use a subquery here to look up the patron ID from the patrons table so I can use that to set my condition for the results from the loans table.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=111)** Then I'll sort the results with the most recent loan based on the automatically generated loan ID at the top, with order by loan ID descending.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=120)** I'll run this, and here I can see those two new loans with their null return date.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-out-books?u=76281980&t=127)** Now we can hand the books over to the patron and wish them happy reading.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1)
> **Prerequisites:** set up (2)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### Solution: Check for books due back
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=0)** - [Instructor] This challenge asked us to prepare a report of books that are due to be returned or which are overdue on a specific day.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=7)** In order to find which books are due back on a given day, we'll use a select statement and we'll need to use the due date field from the loans table.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=14)** We'll also need the book title and some patron information.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=18)** The first field I'm using is from the loans table, so I'll add from loans.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=22)** You don't have to use the first table you reference as the from condition, but it helps keep things organized.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=28)** And depending on how you prefer to write queries, you might use aliases to provide shorter names for each table here.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=34)** In this query, I've left the table names alone, so we can see what we're doing more easily.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=39)** We'll also need information from the books table, so I'll join that and set the book ID field in the loans table to match up with the book ID field in the books table.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=49)** And then we'll need patron information as well.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=51)** So I'll add join patrons and say that the patron ID on the loans table and on the patrons table, will be the field that we associate on.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=59)** And then we'll use a condition to match the given due date.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=62)** We have other loans that are out, but they're not due back yet.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=65)** Their due date is after the date we're looking at.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=68)** So we'll limit our search to just the date range, the challenge specified.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=72)** And we'll need to make sure that the results we get back are only for those books which haven't already been returned.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=77)** If there's no date in the return date field, that'll be null.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=81)** So I need to use "is null" as my condition here.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=84)** Remember, we don't use equals when we're working with null.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=87)** And then I'll sort the results by the due date in descending order.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=92)** I'll run this.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=94)** Okay, there's my list of books that are due back as of the specific date, which have haven't already been returned.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-check-for-books-due-back?u=76281980&t=99)** Now it's time to write some reminder emails.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** this. (1)
> **Speakers:** - [instructor] (1)

#### Solution: Return books to the library
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=0)** - [Speaker] Here's how I solve this challenge.
>
> **[0:02](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=2)** The way our system works, we indicate that a book has been returned and that a loan is complete by setting a return date for each record in the loans table.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=10)** The challenge provided us information about three books to return.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=13)** So we'll need to modify these loan records by putting the provided date into the return date field.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=19)** Because we're working with existing records, we'll need to use the update keyword and specify the loans table.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=25)** We want to modify the return date, so I'll set return date and make that equal to the date the book was returned.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=30)** But this update statement by itself will set that value on all the records in the loans table.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=35)** So we need to narrow down the query by adding a condition to match just this particular copy of the book, using a sub-select based on the book's barcode.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=44)** I'll add another condition to match just the unfinished loan record, which has a null in the return date column.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=50)** That's important because otherwise, we'd be setting the return date for all instances where this book was checked out, and that's not what we want to do.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=57)** In this case, I'll use an update statement for each barcode.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=61)** When we run these queries, the loan records for these books will be updated with a return date, and then the loan for each book will be complete.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=69)** The challenge also asked us to show information from the recent loan records for the three barcodes that we were provided.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=75)** So, I'll use a select statement for that.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=77)** With the return date and barcode fields as the challenge requested.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=81)** I'll need to join the books table to the loans table because the loans table uses the book ID and the book ID is associated with the barcode in the books table.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=90)** Then to restrict the results only to the three barcodes provided, I used where and in and provided a set of three values here to match.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=98)** In this way, we'll only get records whose book ID matches a barcode in this limited set of values.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=103)** Then I'll sort the results in descending order by return date, so the most recent returns will be at the top of the list, and then, I'll sort the results by barcode to enforce the same order of results that the challenge expects.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=116)** I'll limit the results to eight results, which is what the challenge asked for.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=120)** I'll run this and it looks like this solves the challenge.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=125)** Great.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-return-books-to-the-library?u=76281980&t=126)** We're done processing books and now these books are available to be loaned out again.

> [!info]- Semantic Content
>
> **Code Keywords:** return. (1), case, (1), match. (1), for. (1)
> **CLI Commands:** make (1)
> **Speakers:** - [speaker] (1)

#### Solution: Encourage patrons to check out books
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980&t=0)** - [Instructor] This challenge asked us to find information about people who checked out only one book in the year 2024.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980&t=6)** Here's how I solved this challenge.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980&t=9)** I need to return information from the database, so I used a SELECT statement.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980&t=12)** And the values that I'm returning are a count of loans with an alias LoanCount as the challenge requested.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980&t=18)** And then the patron's first name and email address to make it easy to feed these results into our email system to generate reminder emails.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980&t=25)** We'll need information from the Loans table.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980&t=27)** And I'll join this to the Patrons table to get the other two fields.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980&t=32)** To find loans that were made in 2024, I'm using my WHERE clause here with a BETWEEN statement and the first and last days of the year.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980&t=39)** This will find any record with a loan date in 2024.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980&t=43)** Because I'm counting values from the Loans table, I need to group by patron ID so I can get account of loans for each patron.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980&t=50)** The challenge asked us to look for patrons who borrowed only one book, no more, no less.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980&t=54)** So I'm using the HAVING statement here to check the value of LoanCount.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980&t=58)** I need to use HAVING because LoanCount is an aggregate value, and the check there will be = 1.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980&t=65)** The challenge also asked us to sort the result alphabetically by first name, so I'm using ORDER BY here to accomplish that.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980&t=72)** I'll run this.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980&t=74)** And it looks like we solved the challenge.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-encourage-patrons-to-check-out-books?u=76281980&t=76)** Hopefully, these patrons will visit the library more this year than they did last year.

> [!info]- Semantic Content
>
> **Env Vars:** having (2), select (1), where (1), between (1), order (1)
> **SQL:** having (2), select (1), where (1), order by (1)
> **CLI Commands:** find (3), make (1)
> **Code Keywords:** this. (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Solution: Find books to feature for an event
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-find-books-to-feature-for-an-event?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-find-books-to-feature-for-an-event?u=76281980&t=0)** - [Instructor] This challenge has a few components, and here's how I solved it.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-find-books-to-feature-for-an-event?u=76281980&t=4)** We were asked to find the quantity or count of books which were published in a specific range of years, so I'm using the COUNT of the Title with an alias of Qty for quantity, like the challenge asked, and then the Title field itself.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-find-books-to-feature-for-an-event?u=76281980&t=17)** These values come from the Books table.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-find-books-to-feature-for-an-event?u=76281980&t=20)** To find the books that were published in the 1890s, I used the BETWEEN operator to set an inclusive range of values as my WHERE condition.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-find-books-to-feature-for-an-event?u=76281980&t=28)** In our database, the published value is an integer.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-find-books-to-feature-for-an-event?u=76281980&t=31)** Next, I need to ensure that the books within that range are actually available in the library and that they're not checked out to a patron.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-find-books-to-feature-for-an-event?u=76281980&t=38)** So I'm using the AND operator here with WHERE to add another condition.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-find-books-to-feature-for-an-event?u=76281980&t=43)** That condition is that the BookID is not found in the list of books with NULL return dates.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-find-books-to-feature-for-an-event?u=76281980&t=49)** This subquery returns a list of books that aren't available in the library, and then the WHERE clause checks whether the expression BookID NOT IN that list is true.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-find-books-to-feature-for-an-event?u=76281980&t=59)** If it is true, then the book is, or at least ought to be, present in the library.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-find-books-to-feature-for-an-event?u=76281980&t=64)** Because I'm counting the number of times that a title appears in my results, I need to group the results by title for that COUNT function to work properly, so I have GROUP BY Title here.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-find-books-to-feature-for-an-event?u=76281980&t=73)** The challenge also asked us to sort the results by quantity and then by title, making it easy to make sure that we grab the right number of books.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-find-books-to-feature-for-an-event?u=76281980&t=81)** I'll run this query.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-find-books-to-feature-for-an-event?u=76281980&t=83)** And there's our books to go find.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-find-books-to-feature-for-an-event?u=76281980&t=85)** All right, it's time to get started pulling these books and setting up for the exhibit.

> [!info]- Semantic Content
>
> **Env Vars:** where (3), count (2), between (1), null (1), group (1)
> **CLI Commands:** find (3), make (1)
> **SQL:** where (3), group by (1)
> **Code Keywords:** function (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Solution: Book statistics
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=0)** - [Instructor] This challenge asked us to figure out the popularity rankings of books based on how often they've been checked out, and to show the books ranked within the top 10.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=8)** But the challenge reminds us that some books might be tied in popularity.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=12)** So, we'll need to account for that in our results.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=14)** To do this, I'll use a Window function called DENSE_RANK, which assigns a rank value to records based on a given criteria.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=22)** In this case, the criteria will be the count of loans.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=25)** DENSE_RANK assigns the same rank to records with the same value that we're evaluating.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=30)** So for example, books that each have 37 loans would all be ranked in sixth place instead of arbitrarily being assigned sixth, seventh, and eighth place or something like that.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=40)** The challenge asked for three field values.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=42)** The count, the rank, and the book title.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=45)** To get this information, we'll write a SELECT statement.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=47)** But in order to limit the results, we'll need to put our Window function in a subquery so we can treat the resulting rank value as a number to filter the most popular results.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=56)** My sub-select here provides the three fields.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=59)** And the second value is where we use the DENSE_RANK function.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=62)** We're ranking by the count of loans, which is sorted with the highest value first.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=67)** This rank for each title will be called BookRank.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=71)** The information for this query comes from the Loans and Books tables.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=75)** So, we'll join those up in the usual way with their corresponding book ID values.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=80)** And then we'll group the results by the book title.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=84)** This gives us a derived table and it has to have an alias, which I'll set as RankedBooks.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=90)** In this case, the specific name doesn't really matter, but it's working as though I'm saying SELECT * FROM RankedBooks, as though RankedBooks was a real table in my database.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=103)** You could set this alias to anything you want though, because the name isn't being referred to anywhere else in the query here.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=108)** But if it was, you'd need to be consistent, of course.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=111)** So, from this RankedBooks derived table, I'm using WHERE clause to show only the records with a BookRank that's the rank from the DENSE_RANK function that are less than or equal to 10.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=123)** The challenge asked us to sort the results by two criteria, the LoanCount, and then the Title.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=128)** So, I'll do that with ORDER BY LoanCount, which is just a value now, not an aggregate value, thanks to being a field in our derived table, and then Title.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=136)** The LoanCount isn't descending order, so the highest number of loans will be at the top, and we'll see that this corresponds with a rank of one.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=143)** Sorting by title in ascending order, we'll have our books listed alphabetically by title in case there are books that have the same loan value.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=150)** Spoiler alert, there are.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=153)** I'll run this.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=154)** And I can see my rankings here.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=156)** Some books have the same loan count, so they have the same rank.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=160)** I can also see that "Frankenstein" was the most popular book to check out with 53 loans.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/solution-book-statistics?u=76281980&t=165)** I guess you could say it's monstrously popular.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), case, (2), this, (1), this. (1)
> **Env Vars:** dense_rank (4), select (2), where (1), order (1)
> **SQL:** select (2), where (1), order by (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps in your SQL journey
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/next-steps-in-your-sql-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/next-steps-in-your-sql-journey?u=76281980&t=0)** - [Scott] We've spent some time completing hands-on challenges that put our SQL skills to the test.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/next-steps-in-your-sql-journey?u=76281980&t=5)** Now, I encourage you to challenge yourself further.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/next-steps-in-your-sql-journey?u=76281980&t=8)** If you have a database to work with, set yourself some challenges that reflect real world tasks, or spend some time with our other hands-on SQL challenge courses here on LinkedIn Learning.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/next-steps-in-your-sql-journey?u=76281980&t=17)** There's nothing like hands-on practice to improve your skills.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-sql-challenges-test-your-knowledge/next-steps-in-your-sql-journey?u=76281980&t=20)** See you next time.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2)
> **Speakers:** - [scott] (1)


## Instructor

- [[Scott Simpson]]

## Skills Covered

- SQL

## Path Context

### In [[SQL Hands-On Practice]]
← [[Practice It- SQL Joins]] | **6 of 9** | [[Data Analysis- Investigate with SQL]] →

### In [[Advance Your Skills in SQL]]
← [[Using SQL with Python]] | **5 of 5**

## Appears In

- [[SQL Hands-On Practice]]
- [[Advance Your Skills in SQL]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)