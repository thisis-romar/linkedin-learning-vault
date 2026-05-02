---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: nosql-essential-training
url: "https://www.linkedin.com/learning/nosql-essential-training"
duration_minutes: 45
duration: 45m
level: Beginner
updated: 6/17/2024
learners: 16135
skills:
  - NoSQL
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGDAZgolayHEQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1613158104255?e=2147483647&amp;v=beta&amp;t=qvsFRZs41z_HFa1q7QEMqNVLaplFZEGnzEx4gvGS0D0"
linkedin_topic: Database Management
learning_paths:
  - '[[Introduction to Fundamental Skills for Data Work- Data Storage]]'
  - '[[Become a Full-Stack Web Developer]]'
  - '[[Develop Your NoSQL Skills]]'
  - '[[Advance Your Database Administration Skills]]'
prev_courses:
  - '[[Introduction to Data Warehouses]]'
  - '[[SQL Essential Training]]'
  - '[[Introduction To Nosql]]'
  - '[[Cloud Architecture- Core Concepts]]'
next_courses:
  - '[[Complete Guide to Data Lakes and Lakehouses]]'
  - '[[Learning Rest Apis]]'
  - '[[Learning MongoDB]]'
  - null
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Storage","position":4,"total":6,"prev":"Introduction to Data Warehouses","next":"Complete Guide to Data Lakes and Lakehouses"},{"path":"Become a Full-Stack Web Developer","position":10,"total":12,"prev":"SQL Essential Training","next":"Learning Rest Apis"},{"path":"Develop Your NoSQL Skills","position":2,"total":10,"prev":"Introduction To Nosql","next":"Learning MongoDB"},{"path":"Advance Your Database Administration Skills","position":11,"total":11,"prev":"Cloud Architecture- Core Concepts","next":null}]'
path_count: 4
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - topic/web-development
  - skill/nosql
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/NoSQL%20Essential%20Training.md)

![NoSQL Essential Training](https://media.licdn.com/dms/image/v2/C4E0DAQGDAZgolayHEQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1613158104255?e=2147483647&amp;v=beta&amp;t=qvsFRZs41z_HFa1q7QEMqNVLaplFZEGnzEx4gvGS0D0)

# NoSQL Essential Training

> As the shiny new object in the data world, you might have heard a lot of people talk excitedly about NoSQL and all the things it can do. It’s great in terms of flexibility, speed, and is easy to work with. It’s super scalable, so it can accommodate increased numbers of users as websites and applications grow. But will it replace SQL? Will it make relational databases obsolete? In this course, Mel 

> [LinkedIn Learning](https://www.linkedin.com/learning/nosql-essential-training) | 45m | Beginner | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Get to know NoSQL](#get-to-know-nosql)
  - [What you should know](#what-you-should-know)
  - [2024 update](#2024-update)
- [**1. What Is NoSQL?**](#1-what-is-nosql) (7 videos)
  - [Why the hype over NoSQL?](#why-the-hype-over-nosql)
  - [NoSQL compared to traditional relational databases](#nosql-compared-to-traditional-relational-databases)
  - [CAP theorem](#cap-theorem)
  - [Explore a NoSQL database](#explore-a-nosql-database)
  - [Query a NoSQL database](#query-a-nosql-database)
  - [Challenge: NoSQL query](#challenge-nosql-query)
  - [Solution: NoSQL query](#solution-nosql-query)
- [**2. Different Types of NoSQL Databases**](#2-different-types-of-nosql-databases) (7 videos)
  - [Overview of NoSQL database types](#overview-of-nosql-database-types)
  - [NoSQL key-value store type](#nosql-key-value-store-type)
  - [NoSQL document store type](#nosql-document-store-type)
  - [NoSQL wide column store type](#nosql-wide-column-store-type)
  - [NoSQL graph data store type](#nosql-graph-data-store-type)
  - [Challenge: Which NoSQL database is right for the job](#challenge-which-nosql-database-is-right-for-the-job)
  - [Solution: Common jobs for each type of NoSQL store](#solution-common-jobs-for-each-type-of-nosql-store)
- [**3. Pros and Cons of NoSQL**](#3-pros-and-cons-of-nosql) (4 videos)
  - [Where NoSQL thrives](#where-nosql-thrives)
  - [Where NoSQL fails](#where-nosql-fails)
  - [Challenge: Relational or NoSQL](#challenge-relational-or-nosql)
  - [Solution: Relational or NoSQL](#solution-relational-or-nosql)
- [**4. Is NoSQL Right for Your Job?**](#4-is-nosql-right-for-your-job) (3 videos)
  - [Is NoSQL right for you?](#is-nosql-right-for-you)
  - [Database considerations](#database-considerations)
  - [Choosing between NoSQL databases](#choosing-between-nosql-databases)
- [**5. Vector Databases**](#5-vector-databases) (2 videos)
  - [Introduction to vector databases](#introduction-to-vector-databases)
  - [Benefits and use cases of vector databases](#benefits-and-use-cases-of-vector-databases)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Get to know NoSQL](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=0)** - [Melanie] I'm pretty excited to help you get started on [[NoSQL]] Essentials.
>
> **[0:04](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=4)** I remember back trying to hook up my first database to the web in the 90s.
>
> **[0:08](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=8)** It's before I graduated on to [[SQL]].
>
> **[0:10](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=10)** My first couple of attempts were with an Access database.
>
> **[0:14](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=14)** I mean, can you even imagine?
>
> **[0:16](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=16)** I think the website supported maybe three or four users at a time.
>
> **[0:20](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=20)** I'm not kidding and I might even be exaggerating here.
>
> **[0:24](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=24)** The [[Scalability]] was pathetic.
>
> **[0:26](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=26)** People would get locked out and the very young me would be frantically restarting services at three am.
>
> **[0:32](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=32)** We've come a very long way.
>
> **[0:35](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=35)** Hi, there I'm Mel McGee, CEO and Founder of We Can Code IT, an award-winning coding boot camp championing social equity through technology.
>
> **[0:45](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=45)** I've been a software developer and data geek for over 20 years.
>
> **[0:49](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=49)** NoSQL was made for the web and insane amounts of concurrent users and massive volumes of data.
>
> **[0:55](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=55)** It's remarkably [[Agile Development|agile]] and it fits right into place for most development teams, allowing coders to stay inside their development environments and away from designing SQL database, like I used to.
>
> **[1:07](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=67)** Throughout this course, I'll introduce you to NoSQL, explain how it's different from traditional [[Relational Databases]], and talk a little bit about the theory behind it, too.
>
> **[1:17](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=77)** You'll learn that NoSQL isn't just a single technology and I'll explain the different types of NoSQL [[Databases]] on a high level.
>
> **[1:25](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=85)** You'll even get a shot at playing with a popular NoSQL database, [[MongoDB]], before moving on to explore the pros and cons of NoSQL and closing out the course by learning how to pick the right solution for your needs.
>
> **[1:39](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=99)** Ready to get started on your learning adventure?
>
> **[1:42](https://www.linkedin.com/learning/nosql-essential-training/get-to-know-nosql?u=76281980&t=102)** Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (7), [[SQL]] (2), [[Scalability]] (1), [[Agile Development|Agile]] (1), [[Relational Databases]] (1)
> **Env Vars:** sql (2), ceo (1)
> **Analogies:** imagine (1)
> **Speakers:** - [melanie] (1)

#### [What you should know](https://www.linkedin.com/learning/nosql-essential-training/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/what-you-should-know?u=76281980&t=0)** - [Instructor] I know you've been waiting for this video.
>
> **[0:02](https://www.linkedin.com/learning/nosql-essential-training/what-you-should-know?u=76281980&t=2)** It's what you should know.
>
> **[0:06](https://www.linkedin.com/learning/nosql-essential-training/what-you-should-know?u=76281980&t=6)** So this course is a big picture.
>
> **[0:09](https://www.linkedin.com/learning/nosql-essential-training/what-you-should-know?u=76281980&t=9)** It's a mile high view of [[NoSQL]].
>
> **[0:12](https://www.linkedin.com/learning/nosql-essential-training/what-you-should-know?u=76281980&t=12)** It doesn't get down into the nitty-gritty.
>
> **[0:15](https://www.linkedin.com/learning/nosql-essential-training/what-you-should-know?u=76281980&t=15)** If you're a developer who's trying to gain a general understanding of NoSQL, it's for you.
>
> **[0:21](https://www.linkedin.com/learning/nosql-essential-training/what-you-should-know?u=76281980&t=21)** If you're an entrepreneur learning about your product's options, it's for you.
>
> **[0:27](https://www.linkedin.com/learning/nosql-essential-training/what-you-should-know?u=76281980&t=27)** If you're a business executive or a manager or even if you're just plain nosy and want to understand what NoSQL is, then this course is for you.
>
> **[0:37](https://www.linkedin.com/learning/nosql-essential-training/what-you-should-know?u=76281980&t=37)** This course won't train you fully in any particular NoSQL query language, nor will it talk about the details of a given solution, but it will give you a sneak peek and a lay of the land so you can plan your NoSQL journey intelligently.
>
> **[0:53](https://www.linkedin.com/learning/nosql-essential-training/what-you-should-know?u=76281980&t=53)** At the very least, you'll learn some new words.
>
> **[0:55](https://www.linkedin.com/learning/nosql-essential-training/what-you-should-know?u=76281980&t=55)** Maybe I'll even bring a smile to your face here and there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (5)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [2024 update](https://www.linkedin.com/learning/nosql-essential-training/2024-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/2024-update?u=76281980&t=0)** - [Narrator] In this 2024 update of [[NoSQL]] Essentials, I felt it important to discuss [[Artificial Intelligence (AI)|artificial intelligence]] and NoSQL, and although it may be more of a NewSQL, it's important to mention [[Vector Databases]]: what they do and how they relate to AI.
>
> **[0:18](https://www.linkedin.com/learning/nosql-essential-training/2024-update?u=76281980&t=18)** You'll get to see examples of vector databases and gain a big-picture understanding of their use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (2), [[Vector Databases]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Analogies:** picture (1)
> **Speakers:** - [narrator] (1)


### 1. What Is NoSQL?

[↑ Back to Table of Contents](#table-of-contents)

#### [Why the hype over NoSQL?](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=0)** - [Narrator] What is [[NoSQL]]?
>
> **[0:02](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=2)** Well, let's get one thing out of the way quickly.
>
> **[0:05](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=5)** It stands for Not Only [[SQL]].
>
> **[0:08](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=8)** Not literally no never, ever SQL, NoSQL's a way to store data that compliments aspects of speed, flexibility, and [[Scalability]] needed in many modern web applications.
>
> **[0:20](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=20)** So as a new kid in the data world, a lot of people have become really excited about NoSQL and you might've heard amazing claims and wondered what this superhero database is all about.
>
> **[0:30](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=30)** I mean, I've even heard folks say that it will replace SQL, or that it will make [[Relational Databases]] obsolete.
>
> **[0:35](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=35)** What's the truth?
>
> **[0:36](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=36)** Well like anything else in life, NoSQL has its pros and cons and can live side-by-side with relational.
>
> **[0:43](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=43)** Overall, NoSQL does a phenomenal job at flexibility, scalability, and speed.
>
> **[0:49](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=49)** And for most developers, it's really easy to work with.
>
> **[0:52](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=52)** You'll often hear about it being associated with [[Agile Development|agile]] development or [[Big Data]], and it certainly suits agile development.
>
> **[0:59](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=59)** And although NoSQL is not synonymous with big data, it is often used with it.
>
> **[1:04](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=64)** So is NoSQL all that?
>
> **[1:06](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=66)** Is it everything we've ever hoped for?
>
> **[1:08](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=68)** Well, let's take a look at the big kid on campus, relational databases, to get perspective here.
>
> **[1:14](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=74)** Relational databases are strong in integrity and consistency.
>
> **[1:18](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=78)** They're structured and organized, but they're not necessarily fast and nimble.
>
> **[1:22](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=82)** So they're great for certain jobs, and they're not great for others.
>
> **[1:26](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=86)** Think about it this way.
>
> **[1:27](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=87)** Who do you want as a bookkeeper?
>
> **[1:28](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=88)** The fast and nimble, or the steady and reliable?
>
> **[1:31](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=91)** I'll take reliability when it comes to any sort of accounting, thank you.
>
> **[1:35](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=95)** And relational databases are great for such things.
>
> **[1:38](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=98)** Like making sure the online deposit you made makes it into your checking account.
>
> **[1:43](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=103)** So will NoSQL replace SQL in relational databases?
>
> **[1:47](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=107)** Why would we do that?
>
> **[1:49](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=109)** They do different things and can be used for different purposes.
>
> **[1:52](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=112)** And at times the two can even team up.
>
> **[1:54](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=114)** NoSQL's strengths lend it to a variety of modern applications including things like big data analysis, social networking, website personalization, user profiles and more.
>
> **[2:07](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=127)** It's super scalable.
>
> **[2:08](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=128)** So it can operate as applications and websites grow to accommodate millions of users.
>
> **[2:13](https://www.linkedin.com/learning/nosql-essential-training/why-the-hype-over-nosql?u=76281980&t=133)** And it's flexible nature allows programmers to use agile methodology easily without needing to go through the paces of specifically modeling relational databases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (9), [[Relational Databases]] (6), [[SQL]] (4), [[Agile Development|Agile]] (3), [[Big Data]] (3)
> **Env Vars:** sql (4)
> **CLI Commands:** make (1)
> **Definitions:** stands for (1)
> **Speakers:** - [narrator] (1)

#### [NoSQL compared to traditional relational databases](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=0)** - [Instructor] [[NoSQL]] [[Databases]] are designed differently than relational ones.
>
> **[0:04](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=4)** In this video, we'll compare the strict schemas of [[Relational Databases]] to the more fluid nature of NoSQL data stores at a high level.
>
> **[0:13](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=13)** So relational databases have historically been a great fit for enterprise organizations.
>
> **[0:18](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=18)** They're very structured and this leads to high reliability and consistent results.
>
> **[0:24](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=24)** They are well-suited for most business transactions.
>
> **[0:28](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=28)** Relational databases have strict schemas designed for purposes of [[Data Integrity]].
>
> **[0:33](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=33)** And this diagram shows how a person could be represented along with this joining table called EmailAddress.
>
> **[0:40](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=40)** It's a one to many relationship, meaning one person could have multiple email addresses.
>
> **[0:46](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=46)** Each email address is associated with a person using the BusinessEntityID field, is a key that joins the two tables together.
>
> **[0:54](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=54)** Notice that each column is defined and filled out, even if there's a null value.
>
> **[0:59](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=59)** And if Roberto added another email address to the database, say his personal one, another row would be added to the email address table to accommodate it.
>
> **[1:10](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=70)** Let's contrast this to NoSQL.
>
> **[1:12](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=72)** In NoSQL, there aren't strongly predefined schemas like we've seen in relational databases.
>
> **[1:17](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=77)** Instead, there are more fluid descriptions, like in the example above.
>
> **[1:22](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=82)** The columns aren't defined here.
>
> **[1:24](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=84)** So if Terri in the second row doesn't have a PersonType value, it's no big deal.
>
> **[1:29](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=89)** If Ken in row one doesn't have a title, that's totally fine.
>
> **[1:33](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=93)** The columns don't need to be the same across rows.
>
> **[1:37](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=97)** NoSQL and relational databases store data differently.
>
> **[1:41](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=101)** They both have their place.
>
> **[1:43](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=103)** By understanding their strengths and weaknesses, you'll gain a better grip on which one is more suitable given a particular scenario and why.
>
> **[1:50](https://www.linkedin.com/learning/nosql-essential-training/nosql-compared-to-traditional-relational-databases?u=76281980&t=110)** And we'll discuss that more in the next section on cap theorem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (5), [[Relational Databases]] (5), [[Databases]] (1), [[Data Integrity]] (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [CAP theorem](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=1)** - [Instructor] All right, let's geek out a little bit with CAP Theorem.
>
> **[0:03](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=3)** CAP stands for Consistency, Availability, and Partition tolerance.
>
> **[0:07](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=7)** And it states, we can only have two out of three of those items.
>
> **[0:11](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=11)** Consistency here means that, data throughout the system is the same.
>
> **[0:16](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=16)** It's when accuracy is of highest importance, so you're going to think [[Banking]], high-stakes transactions, maybe online deposits to your checking account.
>
> **[0:24](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=24)** Availability relates to users being able to write and read the data regardless of failures in the network.
>
> **[0:30](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=30)** And finally, partition tolerance means that the system is up and running, working as expected even if some of the network is down.
>
> **[0:37](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=37)** Because we can only choose two out of these three very important factors, CAP Theorem helps us form intelligent decisions when choosing the right database for our needs.
>
> **[0:47](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=47)** [[Relational Databases]], overall don't offer partition tolerance, nor do they offer high availability because they keep records that beta other users during updates.
>
> **[0:57](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=57)** They do offer reliable, consistent data though.
>
> **[1:00](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=60)** [[NoSQL]] [[Databases]] offer partition tolerance, along with subspecialties related to availability or consistency in general, depending on the specific NoSQL database chosen.
>
> **[1:12](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=72)** So relational databases offer extreme consistency but since data is found on only one machine generally, the partition tolerance suffers again.
>
> **[1:24](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=84)** Also, because such systems lack records during updates, the availability isn't very high.
>
> **[1:29](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=89)** Let's look at NoSQL systems that focus on partition tolerance and availability.
>
> **[1:35](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=95)** How these systems work, is that all users can write to machine one in this case, but they read from machine two, three, four, et cetera.
>
> **[1:43](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=103)** The consistent most accurate data here is on machine one.
>
> **[1:47](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=107)** But the data, only makes it to the other machines in the systems after replication.
>
> **[1:52](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=112)** Therefore, although there could be imperfect consistency in data, eventually as the machines that replicate data, the idea is that they will be consistent.
>
> **[2:02](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=122)** So, they will have eventual consistency.
>
> **[2:05](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=125)** Examples of such systems include CouchDB, Cassandra, and DynamoDB.
>
> **[2:10](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=130)** Now, let's look at NoSQL systems that focus on partition tolerance and consistency, or CP systems.
>
> **[2:17](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=137)** In this case, users read and write to machine one, and then replication occurs.
>
> **[2:23](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=143)** The consistent, most accurate data here is on machine one.
>
> **[2:26](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=146)** This data only makes it to the other machines in the system, after replication.
>
> **[2:32](https://www.linkedin.com/learning/nosql-essential-training/cap-theorem?u=76281980&t=152)** Examples of such systems include [[MongoDB]], Hbase, and [[Redis]], along with relational databases with fail over.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (4), [[Relational Databases]] (3), [[Banking]] (1), [[Databases]] (1), [[MongoDB]] (1)
> **Env Vars:** cap (3)
> **Definitions:** stands for (1), means that (1)
> **CLI Commands:** cp (1)
> **Speakers:** - [instructor] (1)

#### [Explore a NoSQL database](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=0)** - [Instructor] So to give you a better feel for what [[NoSQL]] is like, I'm going to show you a query on a sample NoSQL database.
>
> **[0:06](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=6)** Some NoSQL [[Databases]] are more friendly when it comes to querying than others.
>
> **[0:11](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=11)** In this example, I'm using the popular document storage NoSQL database, [[MongoDB]].
>
> **[0:17](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=17)** It's pretty simple to get started with Mongo.
>
> **[0:20](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=20)** If you'd like to follow along and try this yourself, you'll want to check out the MongoDB setup document provided to you within the exercise files.
>
> **[0:29](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=29)** But in general, you're going to go to [mongodb.com](https://mongodb.com) in a browser and click Start a Free Trial or Try Free, something like that from the Home screen, and MongoDB does a great job of walking you through the setup of your account and your first sample database.
>
> **[0:44](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=44)** And once you are set up and logged in, you'll be able to explore your databases.
>
> **[0:49](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=49)** So, I'm going to head over to cloud.[mongodb.com](https://mongodb.com).
>
> **[0:55](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=55)** So, I've already joined, like I said, I've set up my sample databases.
>
> **[0:59](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=59)** I've logged in.
>
> **[1:00](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=60)** I've gone here and here.
>
> **[1:01](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=61)** You're going to see my clusters and I have a cluster called NoSQL Essentials.
>
> **[1:05](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=65)** Yours might differ.
>
> **[1:07](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=67)** I'm going to click on the Collections button to start interacting with MongoDB's online data explorer.
>
> **[1:16](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=76)** And here, you'll notice that the sample Airbnb database only has one collection called Listings and Reviews.
>
> **[1:26](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=86)** Go ahead and click that.
>
> **[1:28](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=88)** Here you can see under Find, many, many documents.
>
> **[1:33](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=93)** These are the documents in a document oriented NoSQL database.
>
> **[1:40](https://www.linkedin.com/learning/nosql-essential-training/explore-a-nosql-database?u=76281980&t=100)** They have fields, you can use the data explorer to edit these documents, copy them, clone them, delete them, up here you can even query and that's what we're going to do in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (6), [[MongoDB]] (6), [[Databases]] (3)
> **Prerequisites:** setup (2), set up (2)
> **CLI Commands:** mongo (1), find (1)
> **URLs:** [mongodb.com](https://mongodb.com) (2)
> **UI Navigation:** go to (1), click on (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Query a NoSQL database](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=0)** - [Instructor] Okay, Let's learn how to query in [[MongoDB]].
>
> **[0:03](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=3)** So we're going to use this explorer, online interface we have.
>
> **[0:07](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=7)** And we want to query some different property types, let's say.
>
> **[0:12](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=12)** How did I figure out we wanted to search for property types?
>
> **[0:15](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=15)** Well, I looked at all the fields down here and saw that there was a field called Property Type.
>
> **[0:19](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=19)** I'm assuming there's apartment, and house and others, but I can verify my assumptions simply by looking through the documents here to see different ones.
>
> **[0:28](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=28)** Or, maybe I can query it.
>
> **[0:30](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=30)** Huh. Let's check it out.
>
> **[0:34](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=34)** So to filter, we go up to the filter box.
>
> **[0:36](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=36)** We start with an open curly brace and we always end with a closing curly brace.
>
> **[0:41](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=41)** What goes in between includes, our fields in the field values we're looking for.
>
> **[0:46](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=46)** So let's go ahead and type in property type.
>
> **[0:50](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=50)** And I'm going to throw in a colon.
>
> **[0:53](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=53)** And, notice that under property type here, it has apartment in quotes.
>
> **[0:59](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=59)** Developers might be familiar with this as a string.
>
> **[1:02](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=62)** Others just know that if you see quotes in the values here you want to put quotes in the query.
>
> **[1:08](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=68)** That's all.
>
> **[1:09](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=69)** So we've put property type, colon and apartment in quotes.
>
> **[1:13](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=73)** Go ahead, and click Find.
>
> **[1:16](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=76)** And you will get in return, a bunch of documents that only, have a property type of apartment.
>
> **[1:24](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=84)** Let's try house.
>
> **[1:25](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=85)** Let's see if there are house property types.
>
> **[1:27](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=87)** I'm just going to pop this in here like that.
>
> **[1:30](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=90)** And yes, there are.
>
> **[1:33](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=93)** Very good.
>
> **[1:34](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=94)** Now, let's say we want to query on more than one field.
>
> **[1:39](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=99)** All we have to do is separate our fields and values by commas.
>
> **[1:43](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=103)** In this case, let's also search for bedrooms.
>
> **[1:46](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=106)** To figure out what field bedrooms is called, we simply again, look through the documents.
>
> **[1:51](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=111)** There it is.
>
> **[1:53](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=113)** It's not B-D-R-M-S, it's bedroom spelled out logically.
>
> **[1:56](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=116)** And the value here seems to be a number, or an integer in this case if you're a developer.
>
> **[2:00](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=120)** Notice it does not have quotes.
>
> **[2:02](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=122)** That means we do not have to put any quotes in, the query here.
>
> **[2:07](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=127)** So I'm not going to.
>
> **[2:08](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=128)** In this case, I'm going to search for property type of house and bedrooms with three bedrooms, hit Find, and we'll have our results.
>
> **[2:16](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=136)** In general, that's how you query.
>
> **[2:18](https://www.linkedin.com/learning/nosql-essential-training/query-a-nosql-database?u=76281980&t=138)** It's that simple.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (1)
> **CLI Commands:** find (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: NoSQL query](https://www.linkedin.com/learning/nosql-essential-training/challenge-nosql-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/challenge-nosql-query?u=76281980&t=0)** (bright rhythmic music)
>
> **[0:05](https://www.linkedin.com/learning/nosql-essential-training/challenge-nosql-query?u=76281980&t=5)** - [Instructor] And now it's time for your challenge.
>
> **[0:08](https://www.linkedin.com/learning/nosql-essential-training/challenge-nosql-query?u=76281980&t=8)** What I want you to do is go ahead and filter for all houses with two bedrooms and one bath, along with a minimum number of nights stay of two.
>
> **[0:20](https://www.linkedin.com/learning/nosql-essential-training/challenge-nosql-query?u=76281980&t=20)** We'll go over that solution together in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright rhythmic music) (1)

#### [Solution: NoSQL query](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=0)** - [Instructor] All right, let's see how we did.
>
> **[0:07](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=7)** Again we're looking for property types of houses with two bedrooms, one bath and a minimum night stay of two.
>
> **[0:16](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=16)** First thing you are going to do is look through the documents and browse the fields and see what field names represent what we're looking for.
>
> **[0:26](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=26)** We will start with property type.
>
> **[0:28](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=28)** So go ahead in your filter box start with an open curly brace, that's how we're going to start all our queries.
>
> **[0:35](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=35)** And then you are going to type in the property type field, property underscored type.
>
> **[0:44](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=44)** Colon separates our field from our values.
>
> **[0:48](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=48)** And in this case our value needs to be in quotes.
>
> **[0:52](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=52)** So we will follow suit, property type house.
>
> **[0:57](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=57)** Next up, we're going to move on to bedrooms now to separate our field value pairs from each other, we use commas.
>
> **[1:04](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=64)** Boom.
>
> **[1:04](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=64)** Now let's go ahead and look for bedrooms, it's represented by the [[Microsoft Word|word]] bedrooms.
>
> **[1:08](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=68)** And in this case, this is a integer or a number, a simple number.
>
> **[1:13](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=73)** So go ahead and type bedrooms and we are looking for two.
>
> **[1:17](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=77)** So we type bedrooms colon two.
>
> **[1:22](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=82)** Separate our fields value pairs with comma, next up we're looking for one bath.
>
> **[1:28](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=88)** Baths are represented by the word bathrooms shown here in this field.
>
> **[1:32](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=92)** And in this case, it's a floating point number.
>
> **[1:37](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=97)** There's no need to put a quotes around it.
>
> **[1:42](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=102)** And in this case, you don't have to put 1.0, you could simply put one, but it is a floating point because you can have one and a half baths for example or two baths, two and a half baths.
>
> **[1:55](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=115)** We're just going to put one here, you could put 1.0 that would also work.
>
> **[1:58](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=118)** And finally, minimum nights stay of two.
>
> **[2:03](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=123)** And here's the field that represents what we're looking for, minimum underscore nights.
>
> **[2:08](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=128)** And note that two in this case is in quotes.
>
> **[2:12](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=132)** So we must follow suit and put quotes in our value here as well.
>
> **[2:20](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=140)** Finish it up with a closed curly brace and click find.
>
> **[2:26](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=146)** And there you go, there are 20 results.
>
> **[2:27](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=147)** You can browse through them to verify that they are correct.
>
> **[2:31](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=151)** From this point why don't you go ahead and try different queries on your own.
>
> **[2:35](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=155)** I also tried to mess things up for example, you could remove the quotation marks around the value two to see what happens.
>
> **[2:44](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=164)** And if you do that, you'll see no query results.
>
> **[2:47](https://www.linkedin.com/learning/nosql-essential-training/solution-nosql-query?u=76281980&t=167)** Go ahead and try different things out and then join me for our next chapter on different types of [[NoSQL]] [[Databases]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[NoSQL]] (1), [[Databases]] (1)
> **Versions:** 1.0 (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Cross-References:** next chapter (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 2. Different Types of NoSQL Databases

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of NoSQL database types](https://www.linkedin.com/learning/nosql-essential-training/overview-of-nosql-database-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/overview-of-nosql-database-types?u=76281980&t=0)** - [Instructor] Let's take a look at different types of [[NoSQL]] storage.
>
> **[0:04](https://www.linkedin.com/learning/nosql-essential-training/overview-of-nosql-database-types?u=76281980&t=4)** The first thing I want you to understand very clearly is that NoSQL is an umbrella term that describes a variety of non-[[Relational Databases]].
>
> **[0:15](https://www.linkedin.com/learning/nosql-essential-training/overview-of-nosql-database-types?u=76281980&t=15)** These are alternatives to traditional [[Databases]] and there are four main types of these NoSQL databases.
>
> **[0:23](https://www.linkedin.com/learning/nosql-essential-training/overview-of-nosql-database-types?u=76281980&t=23)** These four types differ from each other.
>
> **[0:26](https://www.linkedin.com/learning/nosql-essential-training/overview-of-nosql-database-types?u=76281980&t=26)** Before we look at the differences between NoSQL types, let's look at some of the commonalities.
>
> **[0:30](https://www.linkedin.com/learning/nosql-essential-training/overview-of-nosql-database-types?u=76281980&t=30)** NoSQL was developed to handle the LinkedIns, the Facebooks, Twitters, and Amazons of the world.
>
> **[0:38](https://www.linkedin.com/learning/nosql-essential-training/overview-of-nosql-database-types?u=76281980&t=38)** These modern web applications need something that is scalable, always on.
>
> **[0:43](https://www.linkedin.com/learning/nosql-essential-training/overview-of-nosql-database-types?u=76281980&t=43)** They need to handle a ton of data and data that isn't always neat and tidy.
>
> **[0:48](https://www.linkedin.com/learning/nosql-essential-training/overview-of-nosql-database-types?u=76281980&t=48)** So they need to handle [[Unstructured Data]].
>
> **[0:51](https://www.linkedin.com/learning/nosql-essential-training/overview-of-nosql-database-types?u=76281980&t=51)** There are four main types of NoSQL databases.
>
> **[0:55](https://www.linkedin.com/learning/nosql-essential-training/overview-of-nosql-database-types?u=76281980&t=55)** These include key-value, document, wide-column, and graph.
>
> **[1:00](https://www.linkedin.com/learning/nosql-essential-training/overview-of-nosql-database-types?u=76281980&t=60)** In this module, we'll investigate these four types from a high-level perspective.
>
> **[1:06](https://www.linkedin.com/learning/nosql-essential-training/overview-of-nosql-database-types?u=76281980&t=66)** Depending on your specific need, one might be better than another, and we'll investigate these specialties throughout the remainder of this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (6), [[Databases]] (3), [[Relational Databases]] (1), [[Unstructured Data]] (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [NoSQL key-value store type](https://www.linkedin.com/learning/nosql-essential-training/nosql-key-value-store-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/nosql-key-value-store-type?u=76281980&t=0)** - [Narrator] Let's investigate key value [[NoSQL]] [[Databases]].
>
> **[0:04](https://www.linkedin.com/learning/nosql-essential-training/nosql-key-value-store-type?u=76281980&t=4)** Overall key value stores are simple ways to store [[Unstructured Data]] for fast retrieval.
>
> **[0:10](https://www.linkedin.com/learning/nosql-essential-training/nosql-key-value-store-type?u=76281980&t=10)** Key and value can be anything.
>
> **[0:13](https://www.linkedin.com/learning/nosql-essential-training/nosql-key-value-store-type?u=76281980&t=13)** It's great for storing large amounts of data for simple querying.
>
> **[0:19](https://www.linkedin.com/learning/nosql-essential-training/nosql-key-value-store-type?u=76281980&t=19)** It's useful for things like caching and user preference storage.
>
> **[0:23](https://www.linkedin.com/learning/nosql-essential-training/nosql-key-value-store-type?u=76281980&t=23)** And if you're a developer, you can think of these as hash maps, dictionaries, et cetera.
>
> **[0:28](https://www.linkedin.com/learning/nosql-essential-training/nosql-key-value-store-type?u=76281980&t=28)** Some popular use cases according to [[Redis]] include caching for faster performance, session management, leaderboards, [[Real-Time]] inventory systems, fraud mitigation, and claims processing.
>
> **[0:43](https://www.linkedin.com/learning/nosql-essential-training/nosql-key-value-store-type?u=76281980&t=43)** Popular systems for key value databases include Redis, DynamoDB, and Oracle NoSQL amongst others.
>
> **[0:51](https://www.linkedin.com/learning/nosql-essential-training/nosql-key-value-store-type?u=76281980&t=51)** In Redis, this operation sets a given key and value.
>
> **[0:55](https://www.linkedin.com/learning/nosql-essential-training/nosql-key-value-store-type?u=76281980&t=55)** It's extremely simple to program.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Redis]] (3), [[NoSQL]] (2), [[Databases]] (2), [[Unstructured Data]] (1), [[Real-Time]] (1)
> **Speakers:** - [narrator] (1)

#### [NoSQL document store type](https://www.linkedin.com/learning/nosql-essential-training/nosql-document-store-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/nosql-document-store-type?u=76281980&t=0)** - [Instructor] Next, let's touch on [[NoSQL]] document [[Databases]].
>
> **[0:05](https://www.linkedin.com/learning/nosql-essential-training/nosql-document-store-type?u=76281980&t=5)** First, let's talk about what they are.
>
> **[0:07](https://www.linkedin.com/learning/nosql-essential-training/nosql-document-store-type?u=76281980&t=7)** Document databases are similar to key value databases, but the value in this case is stored as a document.
>
> **[0:17](https://www.linkedin.com/learning/nosql-essential-training/nosql-document-store-type?u=76281980&t=17)** For example, the popular document database [[MongoDB]] stores the document in a format called BSON.
>
> **[0:24](https://www.linkedin.com/learning/nosql-essential-training/nosql-document-store-type?u=76281980&t=24)** It stands for binary [[JSON]], and as you might suspect, it's very similar to JSON.
>
> **[0:30](https://www.linkedin.com/learning/nosql-essential-training/nosql-document-store-type?u=76281980&t=30)** In fact as a developer, just think of it as JSON.
>
> **[0:33](https://www.linkedin.com/learning/nosql-essential-training/nosql-document-store-type?u=76281980&t=33)** The values within a document can be all sorts of types, from strings to objects, arrays, et cetera, akin to how developers type variables in their code.
>
> **[0:44](https://www.linkedin.com/learning/nosql-essential-training/nosql-document-store-type?u=76281980&t=44)** So it makes it very flexible and useful for [[Agile Development|agile]] development, and you should choose it when you need a ton of flexibility, but not a lot of complex queries.
>
> **[0:54](https://www.linkedin.com/learning/nosql-essential-training/nosql-document-store-type?u=76281980&t=54)** Document stores are considered general purpose in a way, Swiss Army knife types of no [[SQL]] databases, and they're useful for a wide variety of needs.
>
> **[1:06](https://www.linkedin.com/learning/nosql-essential-training/nosql-document-store-type?u=76281980&t=66)** They're often used for CMS systems, large document storage, websites, they're also useful in user profiles, as well as real time analytics and [[Big Data]].
>
> **[1:19](https://www.linkedin.com/learning/nosql-essential-training/nosql-document-store-type?u=76281980&t=79)** Popular document storage systems include Apache's CouchDB, MongoDB, and [[Microsoft Azure|Azure]] Cosmos DB.
>
> **[1:28](https://www.linkedin.com/learning/nosql-essential-training/nosql-document-store-type?u=76281980&t=88)** Finally, here's an example query in the document database MongoDB.
>
> **[1:34](https://www.linkedin.com/learning/nosql-essential-training/nosql-document-store-type?u=76281980&t=94)** You'll notice it's very similar to JSON syntax, making it simple and flexible for developers to work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (4), [[JSON]] (4), [[MongoDB]] (3), [[NoSQL]] (1), [[Agile Development|Agile]] (1)
> **Env Vars:** json (4), bson (1), sql (1), cms (1)
> **Analogies:** similar to (3), for example (1), think of it as (1)
> **CLI Commands:** apache (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [NoSQL wide column store type](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=0)** - [Instructor] Let's talk about wide-column stores.
>
> **[0:04](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=4)** So wide-column stores, or column family [[Databases]], are a subset of key-value [[NoSQL]] databases.
>
> **[0:12](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=12)** They're like [[Relational Databases]] in some ways because they use tables, rows, and columns, but unlike relational, these dynamic columns can vary from row to row, so they're very different in that sense.
>
> **[0:25](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=25)** Also, unlike relational databases, tables can be created, altered, even dropped, while the database is running.
>
> **[0:33](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=33)** It's best to use these when you know the queries and model your tables around queries, instead of how we would do it in relational database modeling, where you're modeling your tables around the data.
>
> **[0:47](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=47)** Wide-column stores can be used for very fast querying of specific parts of data, but not whole rows.
>
> **[0:56](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=56)** So you have to really understand what you're going to be querying before you build this thing out because it can go really fast, but it is very specific on how you query, typically using primary keys and indexes.
>
> **[1:11](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=71)** Overall, wide-column databases are great for dealing with extremely large amounts of data where speed is of utmost importance.
>
> **[1:20](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=80)** It's great for [[Big Data]] when you're looking fast searching over huge amounts, like petrabytes of data, inventory management, and even analytics systems.
>
> **[1:31](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=91)** Those are also popular use cases.
>
> **[1:33](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=93)** A couple popular document databases include Cassandra and HBase.
>
> **[1:38](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=98)** You'll probably run into those more often than any other.
>
> **[1:43](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=103)** And let's look at this, this is what a wide-column NoSQL query looks like in Cassandra.
>
> **[1:49](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=109)** This is Cassandra query language, CQL, not to be confused with [[SQL]].
>
> **[1:55](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=115)** Well, let's look at the bonus table.
>
> **[1:57](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=117)** See, that's a table there.
>
> **[1:59](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=119)** Note that the database model design is focused on the user's bonus, that query, versus the data as would be in a relational [[Database Management]] system.
>
> **[2:11](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=131)** And the second example here shows a query in CQL, and if you're familiar with SQL, you'll notice the similarity there.
>
> **[2:19](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=139)** Update customer set branch equals main dot dot dot, right?
>
> **[2:23](https://www.linkedin.com/learning/nosql-essential-training/nosql-wide-column-store-type?u=76281980&t=143)** Very similar to SQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (4), [[SQL]] (3), [[NoSQL]] (2), [[Relational Databases]] (2), [[Big Data]] (1)
> **Env Vars:** sql (3), cql (2)
> **Analogies:** similar to (1)
> **Best Practices:** it's best to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [NoSQL graph data store type](https://www.linkedin.com/learning/nosql-essential-training/nosql-graph-data-store-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/nosql-graph-data-store-type?u=76281980&t=0)** - [Instructor] Finally, let's talk about graph [[Databases]].
>
> **[0:03](https://www.linkedin.com/learning/nosql-essential-training/nosql-graph-data-store-type?u=76281980&t=3)** And I have to tell you, graph databases happen to be my favorite type of [[NoSQL]] data store.
>
> **[0:10](https://www.linkedin.com/learning/nosql-essential-training/nosql-graph-data-store-type?u=76281980&t=10)** And that's because they are so different than the other types.
>
> **[0:13](https://www.linkedin.com/learning/nosql-essential-training/nosql-graph-data-store-type?u=76281980&t=13)** I mean, everything is stored in the form of an node or an edge that shows relationships between the nodes or attributes.
>
> **[0:22](https://www.linkedin.com/learning/nosql-essential-training/nosql-graph-data-store-type?u=76281980&t=22)** And they are great when you want to show multidimensional relationships between different sets of data.
>
> **[0:29](https://www.linkedin.com/learning/nosql-essential-training/nosql-graph-data-store-type?u=76281980&t=29)** Not so great when you want something general purpose though.
>
> **[0:31](https://www.linkedin.com/learning/nosql-essential-training/nosql-graph-data-store-type?u=76281980&t=31)** So because they're relational nature, they're really well-suited for social networks where entities and their relationships are represented.
>
> **[0:41](https://www.linkedin.com/learning/nosql-essential-training/nosql-graph-data-store-type?u=76281980&t=41)** Other use cases include fraud detection, recommendation engines.
>
> **[0:47](https://www.linkedin.com/learning/nosql-essential-training/nosql-graph-data-store-type?u=76281980&t=47)** Some popular graph databases include [[Neo4j]] and JanusGraph.
>
> **[0:53](https://www.linkedin.com/learning/nosql-essential-training/nosql-graph-data-store-type?u=76281980&t=53)** And cipher is Neo4j's graph query language.
>
> **[0:57](https://www.linkedin.com/learning/nosql-essential-training/nosql-graph-data-store-type?u=76281980&t=57)** It allows users to store and retrieve data from the graph databases.
>
> **[1:01](https://www.linkedin.com/learning/nosql-essential-training/nosql-graph-data-store-type?u=76281980&t=61)** And if you see here, it is a very good visual representation of what's happening and that's what the creators have tried to do here.
>
> **[1:10](https://www.linkedin.com/learning/nosql-essential-training/nosql-graph-data-store-type?u=76281980&t=70)** They've made it intuitive from a visual perspective.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (4), [[Neo4j]] (2), [[NoSQL]] (1)
> **CLI Commands:** node (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Which NoSQL database is right for the job](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=0)** - [Instructor] All right, it's time to put what we learned to the test.
>
> **[0:09](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=9)** Which [[NoSQL]] database is right for the job?
>
> **[0:12](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=12)** So let's consider a few scenarios given what we now know and see if we can determine which NoSQL database might be best suited for the particular job.
>
> **[0:23](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=23)** And we're just going to assume we need a NoSQL database, because we need a fast and scalable solution.
>
> **[0:28](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=28)** So first up, we have social networking.
>
> **[0:30](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=30)** We're creating a site, we want to traverse relationships between users, their actions and the like.
>
> **[0:37](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=37)** Which NoSQL database might be right in this scenario?
>
> **[0:42](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=42)** Remember the four that we discussed.
>
> **[0:45](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=45)** We have wide-column, document, key-value, and graph.
>
> **[0:50](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=50)** Next, we want a leaderboard.
>
> **[0:53](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=53)** So you have a game site, large amounts of data, and you want a really simple look query to show a leaderboard.
>
> **[1:00](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=60)** Which of the four types might be suitable here?
>
> **[1:03](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=63)** Next, this scenario, we have huge, huge, huge amounts of data, and we already know what the queries are going to look like.
>
> **[1:11](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=71)** And you can model your data around the queries.
>
> **[1:14](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=74)** which NoSQL solution seems appropriate given this scenario?
>
> **[1:18](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=78)** And finally, we're creating a large CMS system.
>
> **[1:22](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=82)** It's a general purpose kind of CMS, wide variety of data types.
>
> **[1:27](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=87)** Which NoSQL database might likely be appropriate here?
>
> **[1:31](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=91)** Okay, join on in for the next video.
>
> **[1:34](https://www.linkedin.com/learning/nosql-essential-training/challenge-which-nosql-database-is-right-for-the-job?u=76281980&t=94)** We're going to discuss the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (6)
> **Env Vars:** cms (2)
> **Cross-References:** we discussed (1), next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Common jobs for each type of NoSQL store](https://www.linkedin.com/learning/nosql-essential-training/solution-common-jobs-for-each-type-of-nosql-store?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/solution-common-jobs-for-each-type-of-nosql-store?u=76281980&t=0)** - [Instructor] It's time for our solution.
>
> **[0:06](https://www.linkedin.com/learning/nosql-essential-training/solution-common-jobs-for-each-type-of-nosql-store?u=76281980&t=6)** The common jobs for each type of [[NoSQL]] store.
>
> **[0:10](https://www.linkedin.com/learning/nosql-essential-training/solution-common-jobs-for-each-type-of-nosql-store?u=76281980&t=10)** So what we did is we looked at a bunch of scenarios for NoSQL [[Databases]] and tried to figure out which of the four types would be right for a certain scenario, or mostly right for a certain scenario.
>
> **[0:21](https://www.linkedin.com/learning/nosql-essential-training/solution-common-jobs-for-each-type-of-nosql-store?u=76281980&t=21)** So the first one was social networking.
>
> **[0:24](https://www.linkedin.com/learning/nosql-essential-training/solution-common-jobs-for-each-type-of-nosql-store?u=76281980&t=24)** And the social networking site where we need to traverse relationships quickly is best for a graph database.
>
> **[0:33](https://www.linkedin.com/learning/nosql-essential-training/solution-common-jobs-for-each-type-of-nosql-store?u=76281980&t=33)** A graph database where we have nodes and edges and we have relationships stored there.
>
> **[0:38](https://www.linkedin.com/learning/nosql-essential-training/solution-common-jobs-for-each-type-of-nosql-store?u=76281980&t=38)** So that's the answer there.
>
> **[0:40](https://www.linkedin.com/learning/nosql-essential-training/solution-common-jobs-for-each-type-of-nosql-store?u=76281980&t=40)** Next step, did you get key-value for the leaderboard?
>
> **[0:44](https://www.linkedin.com/learning/nosql-essential-training/solution-common-jobs-for-each-type-of-nosql-store?u=76281980&t=44)** Because we're looking at some really simple, fast queries, right?
>
> **[0:47](https://www.linkedin.com/learning/nosql-essential-training/solution-common-jobs-for-each-type-of-nosql-store?u=76281980&t=47)** Keys, values, user score, right, to create a leaderboard here.
>
> **[0:52](https://www.linkedin.com/learning/nosql-essential-training/solution-common-jobs-for-each-type-of-nosql-store?u=76281980&t=52)** So key-value database would typically be the best solution for a leaderboard with simple data.
>
> **[0:59](https://www.linkedin.com/learning/nosql-essential-training/solution-common-jobs-for-each-type-of-nosql-store?u=76281980&t=59)** Now, next up, this might've been a little confusing.
>
> **[1:02](https://www.linkedin.com/learning/nosql-essential-training/solution-common-jobs-for-each-type-of-nosql-store?u=76281980&t=62)** Large amounts of data should have really set off an alarm for you in known queries.
>
> **[1:10](https://www.linkedin.com/learning/nosql-essential-training/solution-common-jobs-for-each-type-of-nosql-store?u=76281980&t=70)** When you have huge amounts of data in these known inquiries, a wide-column is typically the best solution in this scenario.
>
> **[1:19](https://www.linkedin.com/learning/nosql-essential-training/solution-common-jobs-for-each-type-of-nosql-store?u=76281980&t=79)** And finally, we have our CMS.
>
> **[1:22](https://www.linkedin.com/learning/nosql-essential-training/solution-common-jobs-for-each-type-of-nosql-store?u=76281980&t=82)** General purpose, we need some variety of general data types.
>
> **[1:28](https://www.linkedin.com/learning/nosql-essential-training/solution-common-jobs-for-each-type-of-nosql-store?u=76281980&t=88)** Typically document stores are best in this scenario.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (2), [[Databases]] (1)
> **Env Vars:** cms (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Pros and Cons of NoSQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Where NoSQL thrives](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=0)** - [Instructor] Even though [[NoSQL]] is an umbrella term for non-[[Relational Databases]], and the different NoSQL [[Databases]] are specialized to a certain extent, there are general areas where NoSQL thrives in comparison to relational.
>
> **[0:14](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=14)** And in general, these areas include when you need [[Scalability]], flexibility, and speed in your application.
>
> **[0:20](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=20)** And you might say well that's every application, but there are always trade-offs.
>
> **[0:26](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=26)** What exactly will we be trading?
>
> **[0:28](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=28)** Well remember CAP theorem in chapter one?
>
> **[0:31](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=31)** CAP stands for consistency, availability, and partition tolerance.
>
> **[0:36](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=36)** And CAP theorem states we can only have two out of three of those items.
>
> **[0:40](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=40)** Traditional relational databases don't really offer partition tolerance.
>
> **[0:45](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=45)** Only NoSQL databases offer this along with subspecialties generally related to availability or consistency depending on the NoSQL database chosen.
>
> **[0:56](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=56)** The promise of partition tolerance means our whole system won't go down even if part of it does.
>
> **[1:01](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=61)** And some scenarios lend themselves very well to this.
>
> **[1:05](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=65)** For example, NoSQL's great for caching information.
>
> **[1:09](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=69)** So users experience websites as running faster.
>
> **[1:13](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=73)** Another place where NoSQL thrives is storing user session information.
>
> **[1:17](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=77)** Again, it's information that's needed for a particular time period, but doesn't need to be stored perfectly everywhere at the same time.
>
> **[1:26](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=86)** It's not a big consistency thing, right?
>
> **[1:28](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=88)** If a user's session information isn't consistent it's not the end of the world.
>
> **[1:33](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=93)** It's more important to us that our application is running for all users even if some of the data isn't perfect at any given moment.
>
> **[1:40](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=100)** Real time inventory systems, fraud systems are two additional areas where NoSQL works well.
>
> **[1:45](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=105)** Think about it.
>
> **[1:46](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=106)** Is it more important that the data is perfect in these systems, or that the system is up and running at scale?
>
> **[1:53](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=113)** I'd argue that consistency can be traded for partition tolerance here.
>
> **[1:58](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=118)** I want my fraud detection system running.
>
> **[2:01](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-thrives?u=76281980&t=121)** Even if some nodes might have imperfect data from time to time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (8), [[Relational Databases]] (2), [[Databases]] (2), [[Scalability]] (1)
> **Env Vars:** cap (3)
> **Definitions:** is an  (1), stands for (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Where NoSQL fails](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980&t=0)** - [Instructor] Of course, [[NoSQL]] isn't right for every scenario.
>
> **[0:04](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980&t=4)** Let's investigate its weaknesses.
>
> **[0:06](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980&t=6)** In general, NoSQL fails where you need consistency of data and I'm not referring to eventual consistency or even consistency for some users but the most accurate consistency.
>
> **[0:19](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980&t=19)** What are some use cases that fit this bill?
>
> **[0:21](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980&t=21)** Well, I'm pretty certain that any of us would be tremendously upset if our [[Banking]] system wasn't consistent.
>
> **[0:27](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980&t=27)** What do you mean, bank, I have $10,000 in that account?
>
> **[0:30](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980&t=30)** You're seeing a negative balance?
>
> **[0:32](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980&t=32)** That doesn't fly for me.
>
> **[0:33](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980&t=33)** If you need your data to be consistent and really cannot tolerate trade-offs in this area then a relational database is most likely the right solution for you.
>
> **[0:43](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980&t=43)** On top of these super important data consistency transactions, If you have a need for complex [[SQL]] queries or if you have developers with strong SQL chops then NoSQL might not be the right fit.
>
> **[0:56](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980&t=56)** You might want to look at relational there.
>
> **[0:58](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980&t=58)** Sometimes you just have these small systems like I have a pet project for example or a small internal project.
>
> **[1:06](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980&t=66)** Maybe I don't need partition tolerance in this scenario then again relational might be the correct solution for you.
>
> **[1:13](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980&t=73)** In short, there's no one size fits all.
>
> **[1:16](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980&t=76)** Choose the right system based on your needs.
>
> **[1:19](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980&t=79)** Do you absolutely need accurate, consistent data?
>
> **[1:22](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980&t=82)** If so then a relational database might be right for you.
>
> **[1:25](https://www.linkedin.com/learning/nosql-essential-training/where-nosql-fails?u=76281980&t=85)** Otherwise, take a look at some of your options with NoSQL [[Databases]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (4), [[SQL]] (2), [[Banking]] (1), [[Databases]] (1)
> **Env Vars:** sql (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Relational or NoSQL](https://www.linkedin.com/learning/nosql-essential-training/challenge-relational-or-nosql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/challenge-relational-or-nosql?u=76281980&t=0)** (gentle music)
>
> **[0:04](https://www.linkedin.com/learning/nosql-essential-training/challenge-relational-or-nosql?u=76281980&t=4)** - [Instructor] So let's make use of what we've learned and see how we're doing.
>
> **[0:08](https://www.linkedin.com/learning/nosql-essential-training/challenge-relational-or-nosql?u=76281980&t=8)** I'm going to give you a few scenarios here.
>
> **[0:12](https://www.linkedin.com/learning/nosql-essential-training/challenge-relational-or-nosql?u=76281980&t=12)** Given what we've discussed so far, which solution do you think would be best for any given situation, a [[NoSQL]] or relational database one?
>
> **[0:23](https://www.linkedin.com/learning/nosql-essential-training/challenge-relational-or-nosql?u=76281980&t=23)** First up, we have an entrepreneurial drive-share app.
>
> **[0:28](https://www.linkedin.com/learning/nosql-essential-training/challenge-relational-or-nosql?u=76281980&t=28)** In this case, we're entrepreneurs with a team of [[Agile Development|agile]] developers and we're creating a new web application that allows time sharing of luxury vehicles.
>
> **[0:37](https://www.linkedin.com/learning/nosql-essential-training/challenge-relational-or-nosql?u=76281980&t=37)** Drivers rent from dealers, they review each other and the like.
>
> **[0:41](https://www.linkedin.com/learning/nosql-essential-training/challenge-relational-or-nosql?u=76281980&t=41)** The app will have an international audience and should be able to scale quickly.
>
> **[0:47](https://www.linkedin.com/learning/nosql-essential-training/challenge-relational-or-nosql?u=76281980&t=47)** What do you think, NoSQL or relational?
>
> **[0:49](https://www.linkedin.com/learning/nosql-essential-training/challenge-relational-or-nosql?u=76281980&t=49)** Next step, we have an enterprise financial app.
>
> **[0:52](https://www.linkedin.com/learning/nosql-essential-training/challenge-relational-or-nosql?u=76281980&t=52)** We work for a large enterprise bank and we're creating an internal auditing app of our [[Financial Data]] and live [[Banking]] systems.
>
> **[1:02](https://www.linkedin.com/learning/nosql-essential-training/challenge-relational-or-nosql?u=76281980&t=62)** What do you think relational or NoSQL here?
>
> **[1:05](https://www.linkedin.com/learning/nosql-essential-training/challenge-relational-or-nosql?u=76281980&t=65)** Finally, in this case, we work for consulting firm that is using vast amounts of [[Unstructured Data]] to look at consumer spending over the course of a year.
>
> **[1:15](https://www.linkedin.com/learning/nosql-essential-training/challenge-relational-or-nosql?u=76281980&t=75)** Which solution do you think would be right in this case?
>
> **[1:18](https://www.linkedin.com/learning/nosql-essential-training/challenge-relational-or-nosql?u=76281980&t=78)** We'll look at the solution in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (3), [[Agile Development|Agile]] (1), [[Financial Data]] (1), [[Banking]] (1), [[Unstructured Data]] (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (gentle music) (1)

#### [Solution: Relational or NoSQL](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980&t=0)** - [Instructor] Curious to see how you did in determining the best solution for given scenario?
>
> **[0:10](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980&t=10)** Let's take a look.
>
> **[0:11](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980&t=11)** First up, we have our Entrepreneurial Drive-Share app and [[NoSQL]], would be a great fit here.
>
> **[0:17](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980&t=17)** It's a consumer focused app.
>
> **[0:18](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980&t=18)** So focus on flexibility and [[Scalability]] with eventual consistency is very appropriate.
>
> **[0:25](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980&t=25)** We want the [[User Experience (UX)|user experience]] to be smooth and quick, and we want to help our developers who work in [[Agile Development|agile]] sprints to be able to work outside of strict schemas.
>
> **[0:35](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980&t=35)** It's an ideal NoSQL scenario.
>
> **[0:39](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980&t=39)** Next up, we have our Enterprise Financial App.
>
> **[0:42](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980&t=42)** And when you think of a financial app I hope you're thinking about transactions.
>
> **[0:45](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980&t=45)** And if high data consistency is needed.
>
> **[0:49](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980&t=49)** In addition, we know we're working internally with an enterprise bank.
>
> **[0:53](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980&t=53)** So that app won't be shared with the world.
>
> **[0:56](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980&t=56)** Scalability is not necessarily of importance here.
>
> **[0:59](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980&t=59)** Given all of these conditions a relational database with its focus on consistency over availability and scalability is what we need.
>
> **[1:08](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980&t=68)** Finally, we have our unstructured [[Big Data]] app.
>
> **[1:12](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980&t=72)** And although the fact that the app is financial might have you initially considering a relational database, this isn't so.
>
> **[1:19](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980&t=79)** In this case, it's likely way too much data for a relational database to manage.
>
> **[1:25](https://www.linkedin.com/learning/nosql-essential-training/solution-relational-or-nosql?u=76281980&t=85)** Since we're looking at vast amounts of unstructured historical data, and our data isn't transactional NoSQL would be a suitable solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (3), [[Scalability]] (3), [[User Experience (UX)|User experience]] (1), [[Agile Development|Agile]] (1), [[Big Data]] (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Is NoSQL Right for Your Job?

[↑ Back to Table of Contents](#table-of-contents)

#### [Is NoSQL right for you?](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=0)** - [Instructor] Let's take a look to see if [[NoSQL]] is right for you and your project.
>
> **[0:05](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=5)** So recall CAP theorem from chapter one.
>
> **[0:08](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=8)** It states out of consistency, availability, and partition tolerance, we can only have two out of the three in any given scenario.
>
> **[0:15](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=15)** We looked at how [[Relational Databases]] focused heavily on consistency and NoSQL [[Databases]] focus more on availability and partition tolerance.
>
> **[0:24](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=24)** So knowing we can only pick two out of the three, we're essentially choosing between what are called acid, or relational databases, and base, or NoSQL databases.
>
> **[0:33](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=33)** Consistency and isolation shown here on the left from acid databases are forgone in base databases in order to make room for performance and overall basic availability.
>
> **[0:48](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=48)** As a rule of thumb, you'll choose between different relational and NoSQL solutions based on some fundamental qualities that your specific project requires.
>
> **[0:58](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=58)** Overall, acid, or relational databases, are very defined and strict, whereas base systems, or NoSQL, are more fluid with graceful fallbacks.
>
> **[1:09](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=69)** So, in acid or relational you're looking for strong consistency, precise data.
>
> **[1:15](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=75)** You're going to have a schema.
>
> **[1:16](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=76)** Your data is going to be well, well defined before you even start the project, and availability is not as important as consistency here.
>
> **[1:24](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=84)** In base or NoSQL solutions, you're going to be looking more optimistically.
>
> **[1:29](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=89)** Weak consistency is okay.
>
> **[1:30](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=90)** It's okay to have some data that is stale, approximate data's okay.
>
> **[1:35](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=95)** The schema doesn't need to exist upfront.
>
> **[1:37](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=97)** You're going to just define the data as you go along.
>
> **[1:40](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=100)** You're going to have some [[Agile Development|agile]] development happening.
>
> **[1:42](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=102)** And availability is much more important here than in relational databases.
>
> **[1:48](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=108)** Generally, relational databases are called for when we have very well-structured data.
>
> **[1:53](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=113)** So extremely high [[Data Integrity]] is needed in these applications, like transactional applications, [[Banking]], finance, whenever we need to ensure that the data integrity and its consistency are in place.
>
> **[2:10](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=130)** [[Scalability]] and availability are of less concern than the consistency of data here.
>
> **[2:15](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=135)** Often, you'll have a team with [[SQL]] expertise, and it makes it easier for them to just deal with relational databases.
>
> **[2:23](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=143)** NoSQL is the best choice when you're working on an agile project with evolving data.
>
> **[2:28](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=148)** So you're going to think startups and consumer facing apps here.
>
> **[2:32](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=152)** Eventually, consistent data is fine.
>
> **[2:35](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=155)** And availability and/or scalability is more important than consistency.
>
> **[2:40](https://www.linkedin.com/learning/nosql-essential-training/is-nosql-right-for-you?u=76281980&t=160)** We're not talking ATM transactions with these.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (7), [[Relational Databases]] (6), [[Databases]] (4), [[Agile Development|Agile]] (2), [[Data Integrity]] (2)
> **Env Vars:** cap (1), sql (1), atm (1)
> **CLI Commands:** make (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### [Database considerations](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=0)** - [Instructor] How appropriate is a [[NoSQL]] versus relational database for your project in terms of time, money, and tech?
>
> **[0:07](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=7)** First, let's look at time.
>
> **[0:09](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=9)** Take into consideration if your team needs time to ramp up on either solution.
>
> **[0:14](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=14)** Additionally, consider if they're familiar and well trained in [[Agile Development|agile]] principles or prefer waterfall.
>
> **[0:20](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=20)** If you have strong agile developers, you might gain time savings upfront and potentially get your product to market sooner by using NoSQL.
>
> **[0:29](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=29)** Are there a lot of complex queries?
>
> **[0:31](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=31)** If so, using the more mature [[SQL]] language of [[Relational Databases]] could be a time savings in a big way.
>
> **[0:38](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=38)** NoSQL could be much more cumbersome in this case, especially since its [[Microsoft Products|products]] each have their own unique languages which developers might need to not only learn, but also potentially be forced to write custom code for because a pre-packaged solution might not be available in these immature languages.
>
> **[0:58](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=58)** Economic considerations such as the cost of training, the cost of scaling the server, and the cost of the complexity of your whole system, can play a part in the affordability of any given solution.
>
> **[1:11](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=71)** When NoSQL first came out, it was lauded for its inexpensive deployment.
>
> **[1:15](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=75)** As many a team has discovered, it's not so cut and dry, and very much depends on the number of queries you need, where relational is good in that aspect, if you're adding NoSQL into a system that already exists with relational.
>
> **[1:30](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=90)** In that case, it's going to become more expensive because of the additional complexity and obviously the cost of hiring and training for either solution.
>
> **[1:39](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=99)** Most of this course is focused on tech considerations of NoSQL.
>
> **[1:44](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=104)** And in my opinion, this should be weighted more heavily than the other considerations when making your final call.
>
> **[1:51](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=111)** Essentially, if you need transactional integrity, you will need a relational database.
>
> **[1:56](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=116)** There are other miscellaneous factors at play here like the complexity of your project and the tools you'll need.
>
> **[2:02](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=122)** If talent's available and the cost and time needed for maintenance and the like.
>
> **[2:07](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=127)** The most important aspect here is that you need to take into consideration all of the above factors prior to making a final determination.
>
> **[2:14](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=134)** There might be additional things at play here too.
>
> **[2:17](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=137)** Like maybe your venture capitalists loves NoSQL or relational, very well and need to start a project as soon as possible.
>
> **[2:25](https://www.linkedin.com/learning/nosql-essential-training/database-considerations?u=76281980&t=145)** Overall, the choice isn't cut and dry, but hopefully, you now know additional items to take into consideration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (7), [[Agile Development|Agile]] (2), [[SQL]] (1), [[Relational Databases]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Choosing between NoSQL databases](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=0)** - [Instructor] Let's assume that a [[NoSQL]] solution is right for you.
>
> **[0:03](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=3)** Now, which database should you choose?
>
> **[0:06](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=6)** In chapter two, we learned the different types of NoSQL [[Databases]], key-value, document, wide-column and graph and this is where we'll begin.
>
> **[0:15](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=15)** First, you'll want to determine if you're looking for the fast and simple key-value solution, a general-purpose document solution, a solution for vast amounts of data with pre-defined queries or if you're looking for the relationship-specific graph database.
>
> **[0:31](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=31)** Now that you know which NoSQL data store type could be appropriate, let's add on CAP theorem.
>
> **[0:37](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=37)** And the two out of the three most important factors you face.
>
> **[0:41](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=41)** So you're looking for consistency and partition tolerance.
>
> **[0:45](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=45)** In that case, [[MongoDB]], HBASE or [[Redis]] might be appropriate.
>
> **[0:50](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=50)** Redis is key-value and CP.
>
> **[0:53](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=53)** Mongo is document and CP.
>
> **[0:55](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=55)** And HBASE is wide-column and CP.
>
> **[0:59](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=59)** Similarly, if you're looking for availability in partition tolerance, you might consider CouchDB, Cassandra, or DynamoDB depending on the NoSQL data store type that is appropriate.
>
> **[1:13](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=73)** Popularity of a NoSQL solution generally corresponds to the amount of talent that knows the specific technology.
>
> **[1:20](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=80)** So let's use the previous table and add on popularity rankings.
>
> **[1:25](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=85)** You'll notice here that MongoDB is number one in this list for document CP types of databases.
>
> **[1:34](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=94)** It could be a good choice for you.
>
> **[1:36](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=96)** The right NoSQL database for your needs can be determined by storage type qualities you're looking for.
>
> **[1:42](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=102)** This, along with the two most important CAP factors, be it CP, CA or AP and the popularity of the database will give you a really strong start.
>
> **[1:54](https://www.linkedin.com/learning/nosql-essential-training/choosing-between-nosql-databases?u=76281980&t=114)** Finally, you'll want to look at your developer's preference, along with costs associated for any particular database solution you're looking at.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (6), [[Databases]] (2), [[MongoDB]] (2), [[Redis]] (2)
> **CLI Commands:** cp (5), mongo (1)
> **Env Vars:** cap (2), hbase (2)
> **Speakers:** - [instructor] (1)


### 5. Vector Databases

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to vector databases](https://www.linkedin.com/learning/nosql-essential-training/introduction-to-vector-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/introduction-to-vector-databases?u=76281980&t=0)** - [Instructor] With the rise of AI in recent years, it's important to recognize another [[NoSQL]] or NewSQL type of database, the vector database.
>
> **[0:09](https://www.linkedin.com/learning/nosql-essential-training/introduction-to-vector-databases?u=76281980&t=9)** Just like other NoSQL [[Databases]], [[Vector Databases]] handle data differently than traditional ones.
>
> **[0:17](https://www.linkedin.com/learning/nosql-essential-training/introduction-to-vector-databases?u=76281980&t=17)** A vector database manages data in a format known as vectors, which are arrays of numbers representing data points in a high dimensional space.
>
> **[0:28](https://www.linkedin.com/learning/nosql-essential-training/introduction-to-vector-databases?u=76281980&t=28)** These vectors are typically generated by machine learning models and represent complex data like images, text, and sounds in a way that machines can understand and process.
>
> **[0:41](https://www.linkedin.com/learning/nosql-essential-training/introduction-to-vector-databases?u=76281980&t=41)** Given the complexity of data in AI, vector databases have gained popularity by excelling at storing and retrieving data by distance or similarity.
>
> **[0:54](https://www.linkedin.com/learning/nosql-essential-training/introduction-to-vector-databases?u=76281980&t=54)** This is crucial for efficiently performing tasks such as searching for similar images, recommending [[Microsoft Products|products]], or even detecting anomalies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (2), [[Vector Databases]] (2), [[Databases]] (1), [[Microsoft Products|Products]] (1)
> **Analogies:** just like (1), such as (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Benefits and use cases of vector databases](https://www.linkedin.com/learning/nosql-essential-training/benefits-and-use-cases-of-vector-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/benefits-and-use-cases-of-vector-databases?u=76281980&t=0)** - [Instructor] [[Vector Databases]] are revolutionizing how we handle complex high dimensional data.
>
> **[0:07](https://www.linkedin.com/learning/nosql-essential-training/benefits-and-use-cases-of-vector-databases?u=76281980&t=7)** Benefits of vector databases over both traditional [[SQL]] as well as other no SQL [[Databases]] include their hands down efficiency in similarity search.
>
> **[0:17](https://www.linkedin.com/learning/nosql-essential-training/benefits-and-use-cases-of-vector-databases?u=76281980&t=17)** Their support for complex, multidimensional vector embeddings, and their close integration with AI.
>
> **[0:24](https://www.linkedin.com/learning/nosql-essential-training/benefits-and-use-cases-of-vector-databases?u=76281980&t=24)** They also have benefits of [[Scalability]], enhanced personalization, and more.
>
> **[0:30](https://www.linkedin.com/learning/nosql-essential-training/benefits-and-use-cases-of-vector-databases?u=76281980&t=30)** There are a ton of uses for vector search, including [[Semantic Search]], recommendation systems, image search, personalization systems, and more.
>
> **[0:42](https://www.linkedin.com/learning/nosql-essential-training/benefits-and-use-cases-of-vector-databases?u=76281980&t=42)** Let's take a quick look at a couple of these in action.
>
> **[0:47](https://www.linkedin.com/learning/nosql-essential-training/benefits-and-use-cases-of-vector-databases?u=76281980&t=47)** Recommendation systems are a popular use case.
>
> **[0:50](https://www.linkedin.com/learning/nosql-essential-training/benefits-and-use-cases-of-vector-databases?u=76281980&t=50)** You've probably used these without even knowing it on sites like Amazon or Netflix.
>
> **[0:56](https://www.linkedin.com/learning/nosql-essential-training/benefits-and-use-cases-of-vector-databases?u=76281980&t=56)** Here, this demo from Qdrant shows me foods similar to the ones I like.
>
> **[1:04](https://www.linkedin.com/learning/nosql-essential-training/benefits-and-use-cases-of-vector-databases?u=76281980&t=64)** Let's try it out.
>
> **[1:05](https://www.linkedin.com/learning/nosql-essential-training/benefits-and-use-cases-of-vector-databases?u=76281980&t=65)** Oh yep, there's a cheeseburger.
>
> **[1:07](https://www.linkedin.com/learning/nosql-essential-training/benefits-and-use-cases-of-vector-databases?u=76281980&t=67)** And behind the scenes, vector embeddings and fast vector database indexes are at work to make this possible.
>
> **[1:16](https://www.linkedin.com/learning/nosql-essential-training/benefits-and-use-cases-of-vector-databases?u=76281980&t=76)** Besides Qdrant, other popular vector databases include [[Weaviate]], [[Pinecone]], [[MongoDB]]'s Atlas Vector Search, [[ChromaDB|Chroma]], and [[Redis]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vector Databases]] (3), [[SQL]] (2), [[Databases]] (1), [[Scalability]] (1), [[Semantic Search]] (1)
> **Env Vars:** sql (2)
> **CLI Commands:** make (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/nosql-essential-training/next-steps-24076573?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/nosql-essential-training/next-steps-24076573?u=76281980&t=0)** - [Melanie] Thanks for joining me on this journey.
>
> **[0:02](https://www.linkedin.com/learning/nosql-essential-training/next-steps-24076573?u=76281980&t=2)** But why stop here?
>
> **[0:04](https://www.linkedin.com/learning/nosql-essential-training/next-steps-24076573?u=76281980&t=4)** I have a few potential next steps to offer you.
>
> **[0:07](https://www.linkedin.com/learning/nosql-essential-training/next-steps-24076573?u=76281980&t=7)** First, connect with me on [[LinkedIn]].
>
> **[0:09](https://www.linkedin.com/learning/nosql-essential-training/next-steps-24076573?u=76281980&t=9)** Drop me a note that you took this course.
>
> **[0:13](https://www.linkedin.com/learning/nosql-essential-training/next-steps-24076573?u=76281980&t=13)** Then feel free to look up We Can Code IT at [wecancodeit.org](https://wecancodeit.org).
>
> **[0:18](https://www.linkedin.com/learning/nosql-essential-training/next-steps-24076573?u=76281980&t=18)** We provide online instructor-led and asynchronous training.
>
> **[0:24](https://www.linkedin.com/learning/nosql-essential-training/next-steps-24076573?u=76281980&t=24)** Next, I encourage you to check out other courses on LinkedIn Learning in order to dive into [[NoSQL]].
>
> **[0:30](https://www.linkedin.com/learning/nosql-essential-training/next-steps-24076573?u=76281980&t=30)** How about checking our titles on [[MongoDB]], [[Redis]], [[Neo4j]], and Cassandra, depending on your interests?
>
> **[0:39](https://www.linkedin.com/learning/nosql-essential-training/next-steps-24076573?u=76281980&t=39)** Finally, if you're into AI, why not try your hand at learning [[Vector Databases]]?
>
> **[0:45](https://www.linkedin.com/learning/nosql-essential-training/next-steps-24076573?u=76281980&t=45)** I've reviewed several courses here, and they are stellar.
>
> **[0:49](https://www.linkedin.com/learning/nosql-essential-training/next-steps-24076573?u=76281980&t=49)** Regardless of your next steps, congratulations!
>
> **[0:52](https://www.linkedin.com/learning/nosql-essential-training/next-steps-24076573?u=76281980&t=52)** You've successfully completed this course.
>
> **[0:55](https://www.linkedin.com/learning/nosql-essential-training/next-steps-24076573?u=76281980&t=55)** I hope you've learned something new and had a little fun in the process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[NoSQL]] (1), [[MongoDB]] (1), [[Redis]] (1), [[Neo4j]] (1)
> **URLs:** [wecancodeit.org](https://wecancodeit.org) (1)
> **Warnings:** note that (1)
> **Speakers:** - [melanie] (1)


## Instructor

- [[Melanie McGee]]

## Skills Covered

- NoSQL

## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Storage]]
← [[Introduction to Data Warehouses]] | **4 of 6** | [[Complete Guide to Data Lakes and Lakehouses]] →

### In [[Become a Full-Stack Web Developer]]
← [[SQL Essential Training]] | **10 of 12** | [[Learning Rest Apis]] →

### In [[Develop Your NoSQL Skills]]
← [[Introduction To Nosql]] | **2 of 10** | [[Learning MongoDB]] →

### In [[Advance Your Database Administration Skills]]
← [[Cloud Architecture- Core Concepts]] | **11 of 11**

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Storage]]
- [[Become a Full-Stack Web Developer]]
- [[Develop Your NoSQL Skills]]
- [[Advance Your Database Administration Skills]]

## Related Courses

_Courses sharing skills:_

- [[Cloud NoSQL for SQL Professionals]] — NoSQL
- [[Introduction To Nosql]] — NoSQL

---

[↑ Back to top](#)