---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: using-sql-with-python
url: "https://www.linkedin.com/learning/using-sql-with-python"
duration_minutes: 99
duration: 1h 39m
level: Intermediate
updated: 7/12/2021
learners: 65707
skills:
  - Python (Programming Language)
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGiI_t79dOGAw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1625163615628?e=2147483647&amp;v=beta&amp;t=pQr5XOi4Bk-rNA3MbfDDQrBd78EvZXnYNWPe3jjmR-g"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Skills in SQL]]'
prev_courses:
  - '[[Data Analysis- Investigate with SQL]]'
next_courses:
  - '[[Hands-On SQL Challenges- Test Your Knowledge]]'
path_nav: '[{"path":"Advance Your Skills in SQL","position":4,"total":5,"prev":"Data Analysis- Investigate with SQL","next":"Hands-On SQL Challenges- Test Your Knowledge"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/python-programming-language
  - skill/sql
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Using%20SQL%20with%20Python.md)

![Using SQL with Python](https://media.licdn.com/dms/image/v2/C560DAQGiI_t79dOGAw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1625163615628?e=2147483647&amp;v=beta&amp;t=pQr5XOi4Bk-rNA3MbfDDQrBd78EvZXnYNWPe3jjmR-g)

# Using SQL with Python

> Are you familiar with SQL? Do you know Python? Are you interested in understanding how these two languages work together? Then join Bill Weinman in this course as he shows the power of these two languages combined. Bill starts with some basics—connecting to a database, performing simple queries, and reading rows from a table. He covers how to use prepared statements and cursors, how to build a wra

> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python) | 1h 39m | Intermediate | 66K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (4 videos)
- **2. 1. Common Interface** (8 videos)
- **3. 2. A CRUD Class** (6 videos)
- **4. 3. Final Project: URL Shortener** (6 videos)
- **5. Conclusion** (1 videos)

### 1. Introduction

#### Use SQL with Python
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/use-sql-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/use-sql-with-python?u=76281980&t=0)** - [Bill] Hi, I'm Bill Weinman and welcome to Using SQL with Python.
>
> **[0:05](https://www.linkedin.com/learning/using-sql-with-python/use-sql-with-python?u=76281980&t=5)** The goal of this course is to provide you with a working understanding of how to use SQL with Python.
>
> **[0:13](https://www.linkedin.com/learning/using-sql-with-python/use-sql-with-python?u=76281980&t=13)** We'll start with the basics; connecting to a database, performing simple queries, reading rows from a table.
>
> **[0:21](https://www.linkedin.com/learning/using-sql-with-python/use-sql-with-python?u=76281980&t=21)** I'll explain how to use prepared statements and cursors.
>
> **[0:25](https://www.linkedin.com/learning/using-sql-with-python/use-sql-with-python?u=76281980&t=25)** I'll show you how to build a wrapper class to streamline the SQL interface and support multiple different database engines.
>
> **[0:33](https://www.linkedin.com/learning/using-sql-with-python/use-sql-with-python?u=76281980&t=33)** And finally, we'll build a C.R.U.D. class and a full featured web application using what you've learned.
>
> **[0:40](https://www.linkedin.com/learning/using-sql-with-python/use-sql-with-python?u=76281980&t=40)** Python is a powerful language for database applications and its DB-API interface is an excellent tool for using SQL.
>
> **[0:49](https://www.linkedin.com/learning/using-sql-with-python/use-sql-with-python?u=76281980&t=49)** So let's get started with using SQL in Python.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5), api (1)
> **CLI Commands:** python (4)
> **Code Keywords:** interface (2), finally, (1), let (1)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [bill] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/using-the-exercise-files?u=76281980&t=0)** - [Instructor] The exercise files for this course are included with your membership.
>
> **[0:05](https://www.linkedin.com/learning/using-sql-with-python/using-the-exercise-files?u=76281980&t=5)** Copy the exercise files folder to a location where you can find it on your system.
>
> **[0:11](https://www.linkedin.com/learning/using-sql-with-python/using-the-exercise-files?u=76281980&t=11)** I've copied it to the desktop on this system.
>
> **[0:13](https://www.linkedin.com/learning/using-sql-with-python/using-the-exercise-files?u=76281980&t=13)** Wherever you put it, just make sure you can find it.
>
> **[0:17](https://www.linkedin.com/learning/using-sql-with-python/using-the-exercise-files?u=76281980&t=17)** The exercise files are organized into chapters which correspond with the chapters of the lesson videos.
>
> **[0:25](https://www.linkedin.com/learning/using-sql-with-python/using-the-exercise-files?u=76281980&t=25)** Each of the chapters contain Python files for following along with the exercises in that chapter.
>
> **[0:33](https://www.linkedin.com/learning/using-sql-with-python/using-the-exercise-files?u=76281980&t=33)** The db folder contains example databases in SQLite format, and the SQL folder contains SQL commands for creating the example databases in both SQLite and MySQL.
>
> **[0:49](https://www.linkedin.com/learning/using-sql-with-python/using-the-exercise-files?u=76281980&t=49)** I'll be using PyCharm Community Edition as my development environment for demonstrating the exercises.
>
> **[0:55](https://www.linkedin.com/learning/using-sql-with-python/using-the-exercise-files?u=76281980&t=55)** See the installation video for instructions on installing PyCharm on Windows or MacOS.
>
> **[1:03](https://www.linkedin.com/learning/using-sql-with-python/using-the-exercise-files?u=76281980&t=63)** The exercise files are here to make your learning experience easier and more powerful.
>
> **[1:08](https://www.linkedin.com/learning/using-sql-with-python/using-the-exercise-files?u=76281980&t=68)** Take your time, experiment a lot and happy learning.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (2), python (1), mysql (1)
> **Exercise Files:** exercise files (4)
> **Env Vars:** sql (2)
> **Tools:** pycharm (2)
> **Speakers:** - [instructor] (1)

#### What do you need for this course?
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/what-do-you-need-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/what-do-you-need-for-this-course?u=76281980&t=0)** - [Instructor] In order to get the most out of this course, there's a few things you'll need to know, and a few things you'll need to have.
>
> **[0:06](https://www.linkedin.com/learning/using-sql-with-python/what-do-you-need-for-this-course?u=76281980&t=6)** You'll need a good knowledge of Python 3.
>
> **[0:09](https://www.linkedin.com/learning/using-sql-with-python/what-do-you-need-for-this-course?u=76281980&t=9)** All of the examples are in Python 3.
>
> **[0:12](https://www.linkedin.com/learning/using-sql-with-python/what-do-you-need-for-this-course?u=76281980&t=12)** You'll need to understand basic Python syntax, Python containers, like lists, tuples, and dictionaries, Python classes and objects, and how to use Python modules.
>
> **[0:26](https://www.linkedin.com/learning/using-sql-with-python/what-do-you-need-for-this-course?u=76281980&t=26)** For more information about Python, please see my course, Python 3 Essential Training.
>
> **[0:31](https://www.linkedin.com/learning/using-sql-with-python/what-do-you-need-for-this-course?u=76281980&t=31)** You'll need to understand SQL.
>
> **[0:34](https://www.linkedin.com/learning/using-sql-with-python/what-do-you-need-for-this-course?u=76281980&t=34)** You don't need to have a lot of advanced SQL, we won't be using many advanced features.
>
> **[0:41](https://www.linkedin.com/learning/using-sql-with-python/what-do-you-need-for-this-course?u=76281980&t=41)** You'll just need some basics.
>
> **[0:43](https://www.linkedin.com/learning/using-sql-with-python/what-do-you-need-for-this-course?u=76281980&t=43)** You'll need to understand databases and tables, and some simple relational concepts.
>
> **[0:50](https://www.linkedin.com/learning/using-sql-with-python/what-do-you-need-for-this-course?u=76281980&t=50)** For more information about SQL, please see my course [[SQL Essential Training]].
>
> **[0:55](https://www.linkedin.com/learning/using-sql-with-python/what-do-you-need-for-this-course?u=76281980&t=55)** You'll need to understand how to install and manage software on your operating system, whether you're on Windows, Mac OS, Linux, or whatever, you should know how to get around, how to install software, and how store and find files in your file system.
>
> **[1:12](https://www.linkedin.com/learning/using-sql-with-python/what-do-you-need-for-this-course?u=76281980&t=72)** You'll need the latest Python install.
>
> **[1:14](https://www.linkedin.com/learning/using-sql-with-python/what-do-you-need-for-this-course?u=76281980&t=74)** You'll need the latest MySQL installed, or access to a MySQL server, and you'll need PyCharm or some other working editor for Python.
>
> **[1:24](https://www.linkedin.com/learning/using-sql-with-python/what-do-you-need-for-this-course?u=76281980&t=84)** Python is a great language for database applications, and I look forward to showing you how to use it effectively for both systems and web applications.

> [!info]- Semantic Content
>
> **CLI Commands:** python (11), mysql (2), find (1)
> **Prerequisites:** you'll need (10), install (3)
> **Env Vars:** sql (4)
> **Versions:** python 3 (3)
> **Tools:** pycharm (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Installing the tools
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=0)** - [Instructor] To follow along with the exercises in this course, you'll need a working installation of Python with SQL Lite and MySQL.
>
> **[0:10](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=10)** You'll also need a working development environment for Python.
>
> **[0:13](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=13)** And for this purpose I'm using PyCharm.
>
> **[0:17](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=17)** You can download Python from the [python.org](https://python.org) website.
>
> **[0:21](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=21)** I recommend that you install the latest version for your platform.
>
> **[0:26](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=26)** And if you bring up their webpage under their downloads link, it'll usually just give you a good big link for the latest version for your platform.
>
> **[0:37](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=37)** You can download the latest MySQL Community Server from the MySQL website at [devmysql.com/downloads/mysql](https://devmysql.com/downloads/mysql).
>
> **[0:51](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=51)** You may choose to run a MySQL server on your development machine, or on a remote machine.
>
> **[0:57](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=57)** I run mine on an old Mac mini separate from my development machine, and that works fine.
>
> **[1:03](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=63)** If you need help setting up MySQL, please see my course, MySQL Installation and Configuration.
>
> **[1:12](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=72)** You can download PyCharm from the [jetbrains.com](https://jetbrains.com) website at [jetbrains.com/pycharm/download](https://jetbrains.com/pycharm/download).
>
> **[1:22](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=82)** The free community edition has all we need.
>
> **[1:26](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=86)** And so I'll be using that.
>
> **[1:29](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=89)** I've already installed these components on both my PC and my Mac.
>
> **[1:35](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=95)** Once you've installed these components, you can open the exercise files directly in PyCharm.
>
> **[1:41](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=101)** You don't want to open it as a new project.
>
> **[1:44](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=104)** You want to just select Open.
>
> **[1:47](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=107)** And here I've got on my desktop, my exercise files folder, and I select Open.
>
> **[2:00](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=120)** You'll notice that it's gone ahead and configured my Python.3.9, which is the latest version of Python.
>
> **[2:07](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=127)** As I record this, your version may be later, that I just installed on this machine.
>
> **[2:13](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=133)** On the Mac, usually it does that automatically.
>
> **[2:18](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=138)** On the PC, it's a little bit different.
>
> **[2:21](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=141)** So here I am on my PC.
>
> **[2:23](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=143)** And I'm going to select Open.
>
> **[2:25](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=145)** And my exercise files from the desktop, I'm just going to say, OK.
>
> **[2:32](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=152)** And you notice it says, No interpreter.
>
> **[2:34](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=154)** It did not configure my interpreter for me.
>
> **[2:37](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=157)** And so I'm going to show you how to configure the interpreter.
>
> **[2:40](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=160)** And this works both on the Mac and on the PC in pretty much the same way.
>
> **[2:45](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=165)** You just come over here and you click on this.
>
> **[2:47](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=167)** And you say, Add interpreter.
>
> **[2:51](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=171)** And you notice that it starts up in this virtual environment.
>
> **[2:55](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=175)** And that is not what you want.
>
> **[2:57](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=177)** It's useful for some purposes, especially where you may want to test your code and different versions of Python.
>
> **[3:04](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=184)** But it is not useful for us.
>
> **[3:05](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=185)** And it adds a layer of complexity that we do not want.
>
> **[3:09](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=189)** And so I'm going to select System Interpreter instead.
>
> **[3:12](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=192)** And it just found my Python Interpreter.
>
> **[3:15](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=195)** And that's where my Python Interpreter is.
>
> **[3:18](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=198)** And I just say, OK.
>
> **[3:21](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=201)** And give this a minute while it does its thing down there.
>
> **[3:26](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=206)** And it has now configured my Python Interpreter.
>
> **[3:31](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=211)** Now, again on both the Mac and the PC, we're not quite done configuring PyCharm.
>
> **[3:37](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=217)** And you know, if you've already been using PyCharm and your PyCharm has already set up and you know how to use it, even if you're using a virtual environment, whatever.
>
> **[3:45](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=225)** As long as it's working, that's all we need.
>
> **[3:48](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=228)** But for our purposes, if you're just setting up PyCharm just for this course, this is the way to do it.
>
> **[3:54](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=234)** Now, if I bring up my from chapter one here, my hello version.py.
>
> **[4:00](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=240)** And I try to run it with shift control F10, or if you're on a Mac, it's shift control R.
>
> **[4:07](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=247)** But here I'm going to press shift control F10.
>
> **[4:10](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=250)** And it's going to just run my Python in the System Interpreter.
>
> **[4:15](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=255)** It's going to run this code.
>
> **[4:16](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=256)** You notice it says, No module MySQL.
>
> **[4:19](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=259)** And here, sometimes this starts out as collapsed.
>
> **[4:22](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=262)** But if you expand this, you see I import mysql.connector as MySQL.
>
> **[4:27](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=267)** And it's not finding that.
>
> **[4:29](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=269)** Because we have not loaded the module.
>
> **[4:31](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=271)** So we need to go and load the module.
>
> **[4:33](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=273)** And there's a couple of ways to do this.
>
> **[4:35](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=275)** You can come up here to File, Settings.
>
> **[4:38](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=278)** And you can select Project Exercise and Python Interpreter.
>
> **[4:42](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=282)** Or you can take this little shortcut down here.
>
> **[4:44](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=284)** If you just click on the Python 3.9 down here and select Interpreter Settings, you get to exactly the same place.
>
> **[4:52](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=292)** And it's a little bit simpler.
>
> **[4:53](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=293)** Okay?
>
> **[4:54](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=294)** And you notice these are all the modules that are loaded in the Python system.
>
> **[4:59](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=299)** Again, we're not using a virtual environment here.
>
> **[5:02](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=302)** And I just want to add one.
>
> **[5:03](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=303)** I want to add mysql-connector-python.
>
> **[5:10](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=310)** This one here.
>
> **[5:11](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=311)** You notice there's a lot of choices here.
>
> **[5:14](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=314)** This is the one that you want.
>
> **[5:16](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=316)** It says version 8.023 for me.
>
> **[5:18](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=318)** It'll probably be a later version for you by the time that you're watching this, and that's fine.
>
> **[5:23](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=323)** But it's the one that says MySQL connector Python.
>
> **[5:27](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=327)** And you need to make sure that you check this box down here that says, Install to user's site packages directory.
>
> **[5:35](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=335)** And again, if you don't select that box, it's not going to work.
>
> **[5:40](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=340)** That sets up this module for the site Python, the system Python on your machine, which is the one that you're using.
>
> **[5:48](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=348)** So I click Install Package.
>
> **[5:52](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=352)** And it says it's done, but it doesn't close the box.
>
> **[5:55](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=355)** So we need to close the box.
>
> **[5:56](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=356)** Then you see it here and you just say, OK.
>
> **[5:59](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=359)** And now when I run this code again, I'm going to close this and I'm going to shift control F10 on the PC.
>
> **[6:05](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=365)** And it's shift control R on the Mac.
>
> **[6:10](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=370)** And you notice that now it runs properly.
>
> **[6:11](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=371)** And it gives me version numbers.
>
> **[6:13](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=373)** This is just my hello world.
>
> **[6:15](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=375)** This is just is my environment working for the development of this project and work purposes for following along with these exercise files.
>
> **[6:24](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=384)** And you notice that I get version numbers for all of these.
>
> **[6:27](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=387)** The version numbers are correct.
>
> **[6:28](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=388)** Yours will probably be different.
>
> **[6:30](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=390)** They'll be a little later.
>
> **[6:31](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=391)** They should be at least these numbers.
>
> **[6:33](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=393)** I've got Python 3.9.4, which is the latest as of the time I'm recording this.
>
> **[6:38](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=398)** SQLite 3.34, that's the version that is coming with the Python as of my recording this.
>
> **[6:47](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=407)** And MySQL connector 8.0.23.
>
> **[6:50](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=410)** Again, the latest version as I record this.
>
> **[6:52](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=412)** Now, if I go back over to the Mac, here I am back on my Mac.
>
> **[6:57](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=417)** And you'll notice if I open up my chapter one and open my hello version.py.
>
> **[7:02](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=422)** And now I'm on the Mac, here I'm going to expand this.
>
> **[7:06](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=426)** It sometimes opens up with that collapsed for some reason.
>
> **[7:10](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=430)** Now my Mac, I'm going to say shift control R.
>
> **[7:13](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=433)** It's shift control F10 on a PC.
>
> **[7:15](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=435)** But it's shift control R on a Mac.
>
> **[7:18](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=438)** It goes ahead and it runs this, and I get the same error, No module MySQL.
>
> **[7:22](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=442)** Okay.
>
> **[7:23](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=443)** I know what to do.
>
> **[7:24](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=444)** I come down here.
>
> **[7:24](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=444)** I click on my interpreter.
>
> **[7:26](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=446)** I say, Interpreter Settings.
>
> **[7:29](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=449)** And you notice I don't have MySQL connector.
>
> **[7:33](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=453)** Again, if you come to your settings, it's right here under your Project Exercise Files and your Python Interpreter.
>
> **[7:40](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=460)** And I'm just going to go ahead and add it.
>
> **[7:41](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=461)** I press this plus here.
>
> **[7:43](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=463)** And I say, mysql-connector, and I have to spell it right, or it does not work.
>
> **[7:50](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=470)** And we find the one that says MySQL connector Python.
>
> **[7:54](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=474)** That all looks correct.
>
> **[7:55](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=475)** I need to check this box.
>
> **[7:57](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=477)** It says, Install to user's site packages.
>
> **[8:00](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=480)** You won't get that checkbox if you're using a virtual environment.
>
> **[8:03](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=483)** That's only when you're using the System Interpreter.
>
> **[8:05](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=485)** But you need to check it and say, Install Package.
>
> **[8:11](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=491)** Again, I get the little green down there.
>
> **[8:13](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=493)** I have to close this and we see that it's installed.
>
> **[8:17](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=497)** And I say, OK.
>
> **[8:18](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=498)** You know, the buttons are on the other side on a Mac.
>
> **[8:21](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=501)** And then I can close this.
>
> **[8:22](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=502)** And now when I run it again, shift control R on my Mac, I get my correct version numbers.
>
> **[8:29](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=509)** That just tells me that our environment is set up and that our environment is working.
>
> **[8:36](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=516)** So just to recap, I can close this down here to run the Python that's opening your window here.
>
> **[8:45](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=525)** On a Mac, it shift control R, and on a PC back over here on my PC it's shift control F10.
>
> **[8:55](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=535)** And that runs your code.
>
> **[8:56](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=536)** So now you're all set up.
>
> **[8:58](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=538)** And you're ready to follow along with the exercise files.
>
> **[9:02](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=542)** PyCharm IDE is flexible and powerful.
>
> **[9:05](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=545)** It has many features and options.
>
> **[9:07](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=547)** I encourage you to explore and learn.
>
> **[9:09](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=549)** It's got a lot of great stuff in it.
>
> **[9:11](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=551)** And you may decide as I have, that this is an editor worth keeping.
>
> **[9:15](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=555)** And I do most of my Python work in PyCharm now.

> [!info]- Semantic Content
>
> **CLI Commands:** python (24), mysql (17), make (1), find (1)
> **Code Keywords:** this. (7), module (5), this, (4)
> **Prerequisites:** install (5), set up (3), configure (2), you'll need (1)
> **Tools:** pycharm (10)
> **Env Vars:** f10 (5), sql (1), ide (1)
> **Versions:** python 3 (2), 3.9 (1), version 8 (1), 9.4 (1), 3.34 (1)
> **Exercise Files:** exercise files (6), download the (1)
> **UI Navigation:** click on (3), open the (1), checkbox (1)


### 2. 1. Common Interface

#### The Python DB-API
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980&t=0)** - [Instructor] Python uses a standard interface called DB-API to communicate with the database.
>
> **[0:06](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980&t=6)** The current version of the standard is DB-API 2.0, and you can find the full documentation for it here on the [python.org](https://python.org) website.
>
> **[0:18](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980&t=18)** The purpose of the DB-API is to promote commonality among interfaces so that each database management system uses more or less the same code to access data from Python.
>
> **[0:32](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980&t=32)** The DB-API is feature complete, including support for all common relational database operations.
>
> **[0:39](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980&t=39)** You'll need to use the SQL syntax specific for each specific DBMS.
>
> **[0:47](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980&t=47)** This common interface includes a connection object for holding the credentials and parameters of the database connection, a cursor object for maintaining context in a sequence of query responses, common hooks for committing and rolling back transactions, and a common set of exceptions for catching errors from the DBMS.
>
> **[1:13](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980&t=73)** Each DBMS has its own implementation, which may include different connection details.
>
> **[1:19](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980&t=79)** SQLite requires only a file name as the database is entirely contained in one file.
>
> **[1:26](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980&t=86)** Client server databases require more connection information and usually some security credentials.
>
> **[1:33](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980&t=93)** Cursors in the DB-API serve two purposes.
>
> **[1:37](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980&t=97)** They act as iterators keeping track of a position in the database.
>
> **[1:41](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980&t=101)** This allows your code to step through a query result without the need to hold more than one row at a time in active memory.
>
> **[1:50](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980&t=110)** In the DB-API implementation, cursors also act as prepared statements.
>
> **[1:56](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980&t=116)** This allows you to use placeholders in a query, provides automatic sanitation of parameters and significant performance improvements.
>
> **[2:06](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980&t=126)** The rest of this chapter provides simple examples of connecting to a database and executing SQL statements in both SQLite and MySQL.

> [!info]- Semantic Content
>
> **Env Vars:** api (6), dbms (3), sql (2)
> **CLI Commands:** python (3), find (1), mysql (1)
> **Code Keywords:** interface (2), require (1)
> **URLs:** [python.org](https://python.org) (1)
> **Versions:** 2.0 (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Creating a connection
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=0)** - [Narrator] The first step in using the Python DB-API is to connect to the database.
>
> **[0:06](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=6)** This is db-connect.py from chapter one of the exercise files.
>
> **[0:11](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=11)** Notice the import line at the top here, where I import the sqlite3 module.
>
> **[0:16](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=16)** That module, of course, comes with Python, you don't need to add it to your installation.
>
> **[0:21](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=21)** And then down here in line 9, I call connect on that sqlite3 module to connect to the database.
>
> **[0:30](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=30)** Now in parentheses here, normally there is a file name because SQLite stores all of its database information in a single file.
>
> **[0:40](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=40)** And so you'll usually get a file name there.
>
> **[0:42](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=42)** In this case I'm using the word memory enclosed in colons to get the special SQLite in memory database.
>
> **[0:51](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=51)** And it operates just the same as if I had specified a database file, except that there's no file involved, it's just in memory.
>
> **[1:00](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=60)** This returns an instance of the database interface.
>
> **[1:04](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=64)** And in this case, we're connecting to an in-memory database.
>
> **[1:08](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=68)** And this instance, I tend to call it db.
>
> **[1:12](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=72)** Some people call it c-o-n for con because it's a connection, whatever you choose to call it, just be consistent.
>
> **[1:19](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=79)** I call it db.
>
> **[1:21](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=81)** Once I'm connected, I can create a cursor object.
>
> **[1:24](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=84)** And I do this with the cursor method off the db object.
>
> **[1:29](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=89)** We'll use this cursor object to query the database.
>
> **[1:33](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=93)** And so down here, I have an execute method off the cursor object, and that submits a query to the database and returns a row of results as a tuple.
>
> **[1:43](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=103)** And so, in this case, I'm passing it this bit of SQL here, which just says, it's just a select statement that selects a value with the special function that's specific to SQLite, sqlite_version.
>
> **[2:00](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=120)** And this just returns the version number of the SQLite interface as an element in a row.
>
> **[2:07](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=127)** And it's really just a one column row.
>
> **[2:10](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=130)** And so we call fetchone to get one row from our query.
>
> **[2:16](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=136)** And you notice that I subscript it here with the zero to get the first element of that tuple.
>
> **[2:24](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=144)** And then I print that out with the print statement.
>
> **[2:26](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=146)** So let's go ahead and run this.
>
> **[2:29](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=149)** And this is shift-control-R on a Mac or shift-control-F10 on a PC, and you notice it runs it and it returns that value 3.34.0, which is the version of sqlite3 that came with Python that I installed on this machine.
>
> **[2:48](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=168)** So this looks pretty simple, right?
>
> **[2:52](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=172)** And what's cool about this is it works almost exactly the same for MySQL or for any database.
>
> **[3:00](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=180)** So I'm just going to change this import and I'm going to mysql.connector, and we'll say as mysql so I don't have to type all of that out every time.
>
> **[3:09](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=189)** And instead of sqlite3.connect, I'm going to say mysql.connect.
>
> **[3:15](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=195)** And instead of memory here, I need to give it enough information to actually connect to a MySQL database.
>
> **[3:21](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=201)** So I have my MySQL database on a different host.
>
> **[3:25](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=205)** So I'm going to to say host="pluto.local", which is where my SQL database is.
>
> **[3:32](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=212)** If your MySQL database is on your local machine, you just write localhost here.
>
> **[3:40](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=220)** But be sure to spell it right.
>
> **[3:42](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=222)** So it'll look like that.
>
> **[3:43](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=223)** In my case, it's on pluto.local, and then you need to give it your credentials.
>
> **[3:49](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=229)** I have a special user set up for this purpose called appuser.
>
> **[3:54](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=234)** And it has a very simple password, don't ever do this in real life.
>
> **[4:02](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=242)** Spartacus.
>
> **[4:04](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=244)** And I have now connected to my database.
>
> **[4:08](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=248)** And I clearly have a syntax error here.
>
> **[4:13](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=253)** That should clear all that up.
>
> **[4:16](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=256)** Now, obviously this select statement is specific to SQLite and it won't work with MySQL.
>
> **[4:22](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=262)** Instead in MySQL, you can get exactly the same thing by just calling the version function with your SQL.
>
> **[4:31](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=271)** And obviously here instead of SQLite here, I want to say MySQL.
>
> **[4:38](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=278)** And now I can just save this and run it.
>
> **[4:42](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=282)** And it works exactly the same.
>
> **[4:44](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=284)** So all I changed was the connection.
>
> **[4:47](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=287)** Well, I imported the right module and I changed the connection string because that's different for every database system.
>
> **[4:54](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=294)** And I changed the SQL to get the version.
>
> **[4:57](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=297)** In this case, it gets the version of the server and not the version of the interface.
>
> **[5:03](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=303)** And it prints out that 8.0.23, which is the version of the server that I'm running on Pluto.
>
> **[5:08](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=308)** So as you can see, Python's DB-API makes it easy to connect to a variety of different relational database systems with virtually the same code.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (10), python (4), sqlite3 (4)
> **Code Keywords:** module (4), case, (4), interface (3), function (2), let (1)
> **Env Vars:** sql (4), api (2), f10 (1)
> **Versions:** 3.34.0 (1), 8.0.23 (1)
> **File Paths:** db-connect.py (1)
> **Code Identifiers:** sqlite_version (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### Simple queries
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=0)** - [Instructor] Let's look at some simple queries that fetch rows from a table.
>
> **[0:04](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=4)** This is database.query.py from Chapter One of the exercise files.
>
> **[0:09](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=9)** For this example, I'm using SQLite3 and I'm using the scratch database in the exercise files.
>
> **[0:16](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=16)** So you notice that I'm running this in the Chapter One folder in the exercise files and there's a DB folder in the same exercise files that has these .db files.
>
> **[0:28](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=28)** These .db files are SQLite databases.
>
> **[0:33](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=33)** SQLite stores an entire database in one platform-independent file.
>
> **[0:38](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=38)** The same file will work on a PC, it'll work on a Mac, it'll work on Linux, work on many, many different systems because the file itself is actually platform-independent, and that's the way the database is written.
>
> **[0:53](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=53)** And so this is one of the many reasons why SQLite3 is so convenient and so simple to use.
>
> **[1:01](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=61)** Any event, I open with SQLite3.connect and I give it that filename.
>
> **[1:07](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=67)** You notice the whole file path ../db/scratch.db, that same string will work on both a PC and a Mac and Linux.
>
> **[1:18](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=78)** The PC, Windows, will normally use backslashes but it will optionally also understand these forward slashes.
>
> **[1:27](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=87)** So this works just fine.
>
> **[1:29](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=89)** So the same piece of code works on all these different platforms.
>
> **[1:33](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=93)** We grab a cursor and then we execute some SQL.
>
> **[1:37](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=97)** We drop the table if it already exists because this is just temporary table.
>
> **[1:42](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=102)** We create a table with three columns, all of them text columns, just for simplicity, and we insert values into these columns.
>
> **[1:52](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=112)** One two three, four five six, seven eight nine.
>
> **[1:55](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=115)** We do a commit, and then we select, asterisk.
>
> **[2:02](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=122)** Select everything from this database and we get one row from fetchone and then we print that row and then we get another one.
>
> **[2:15](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=135)** And if we still have a row, then we continue with the while loop and we exit the while loop when there's no more rows.
>
> **[2:22](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=142)** So we're getting one row at a time with a while loop.
>
> **[2:26](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=146)** And then we drop the table if it exists.
>
> **[2:29](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=149)** We close the cursor, and we close the database connection, 'cause that's how you clean up.
>
> **[2:36](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=156)** And I'm just going to go ahead and I'm going to run this code now, and you notice that there's our results.
>
> **[2:42](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=162)** Our three rows from the table, each of them with three columns, one two three, four five six, seven eight and nine.
>
> **[2:48](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=168)** So we actually created a table, we added some rows to the table, and then we selected every row from the table.
>
> **[2:59](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=179)** So let's talk a little about cur.execute.
>
> **[3:02](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=182)** It executes an SQL statement, but it does not return any values.
>
> **[3:09](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=189)** It takes one string as an argument and that one string is an SQL statement.
>
> **[3:15](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=195)** Many statements, like create table, insert into, drop, many statements like this, they don't return any values.
>
> **[3:22](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=202)** It's really only the select statements, and some systems, a few special statements that aren't part of standard SQL.
>
> **[3:30](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=210)** They'll overturn any value.
>
> **[3:32](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=212)** And so if we execute a statement that returns a value, we then have to fetch that value.
>
> **[3:37](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=217)** We use fetchone to return a row from that currently executed value.
>
> **[3:44](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=224)** There's another way we can do this instead of using fetchone.
>
> **[3:47](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=227)** We can actually use the cursor as an iterator.
>
> **[3:51](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=231)** And that looks like this.
>
> **[4:02](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=242)** That's a lot simpler, isn't it?
>
> **[4:03](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=243)** And when I run this, you'll notice that I get exactly the same result here.
>
> **[4:09](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=249)** I'm going to go ahead close that run window so we can see more of the code.
>
> **[4:12](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=252)** Another alternative is to use fetchall instead of fetchone, or using the cursor as an iterator.
>
> **[4:22](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=262)** I can say, rows=cur.fetchall,
>
> **[4:31](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=271)** and then I can say for row in rows.
>
> **[4:40](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=280)** And that works exactly the same also.
>
> **[4:44](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=284)** The difference here is that fetchall will return all the rows in the table and you have to have enough memory to hold all of that at once.
>
> **[4:53](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=293)** And so more commonly, you're going to want to do this one row at a time.
>
> **[4:57](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=297)** And you'll notice that down here I close the cursor and I close the database.
>
> **[5:03](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=303)** It's just always a good practice to clean up.
>
> **[5:06](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=306)** So these are some simple queries and in the next lesson we're going to talk about prepared statements.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (2), continue (1), this. (1)
> **Env Vars:** sql (4)
> **Exercise Files:** exercise files (4)
> **CLI Commands:** sqlite3 (3)
> **File Paths:** database.query.py (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Best Practices:** good practice (1)

#### Prepared statements
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=0)** - [Instructor] Prepared queries are a powerful tool in most relational database applications.
>
> **[0:06](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=6)** Let's take a quick look at how this works.
>
> **[0:09](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=9)** This is db_prepared.py from chapter one of the exercise files.
>
> **[0:14](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=14)** A prepared statement is a statement that is parsed once by the database engine and then used over and over even with different values.
>
> **[0:24](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=24)** Here, we're using MySQL and you notice I have MY_HOST, USER and PASSWORD as Constance that makes the connection line a lot cleaner.
>
> **[0:34](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=34)** And then you notice that when I create my cursor, I have this option in here prepared=True.
>
> **[0:43](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=43)** MySQL by default does not provide prepared statements and you always want to use prepared statements.
>
> **[0:51](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=51)** And so by setting this prepared flag in the cursor object, you can now use prepared statements.
>
> **[0:59](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=59)** So every time you use MySQL, you're always going to want to set prepared=True.
>
> **[1:06](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=66)** Let's take a look at why.
>
> **[1:10](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=70)** Down here you notice we drop the table, create the table, we're doing exactly the same thing as we did in the last lesson and then we select everything.
>
> **[1:21](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=81)** But now we want to just select rows where a equals a value.
>
> **[1:26](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=86)** And in this case, we're giving it the value four as a string.
>
> **[1:30](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=90)** And so we only want the rows where a is four, which would be the second row here.
>
> **[1:36](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=96)** So we have this question mark.
>
> **[1:39](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=99)** This question mark is called a bind variable, and it's essentially a template placeholder for value to be used in the query.
>
> **[1:50](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=110)** The database engine first compiles the query and runs its optimizations without the value.
>
> **[1:57](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=117)** And then the database engine sanitizes the actual value that's passed to prevent SQL injection and other attacks.
>
> **[2:05](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=125)** And this is not to be underestimated its value.
>
> **[2:08](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=128)** This is extremely valuable and it's the most important reason to always use prepared statements because that value will now be sanitized and any potential attacks will be thwarted.
>
> **[2:22](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=142)** It then plugs in whatever values are provided for however many question marks you have in your query.
>
> **[2:28](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=148)** It plugs those values in during the fetch operations, making this far more safe and efficient than non prepared statements.
>
> **[2:37](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=157)** And then we have this execute statement and you notice that we're giving it another parameter here.
>
> **[2:44](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=164)** And this parameter is a tuple and you notice we have this stray comma here.
>
> **[2:48](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=168)** This is a Python thing.
>
> **[2:50](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=170)** In order to provide a tuple of literals, if you only have one value in the tuple, you need that comma to make it actually create a tuple to pass to the query.
>
> **[3:04](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=184)** So this is select star from temp, where a equals question mark and for this query, the question mark will be replaced by four, which will be sanitized and then passed to the database engine and then we have the result is, and however many rows that's true four which in this case will be one.
>
> **[3:22](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=202)** So let's go ahead and run this.
>
> **[3:24](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=204)** And we see here's the result of our select star from temp and then here is the result of select star from temp where eight equals four, and we have that four string right there.
>
> **[3:39](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=219)** So you're starting to see the value of prepared statements.
>
> **[3:43](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=223)** Let's take a look at prepared2.py and you see here, I'm actually using a prepared statement for my insert.
>
> **[3:52](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=232)** And so I have this insert statement once and it gets compiled by the database engine here, I call execute many, which takes a tuple of tuples.
>
> **[4:03](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=243)** And so here's my tuple of tuples, I've got all these rows, 1, 2, 3, 2, 3, 4, blah, blah, blah, to 9, 10, 11.
>
> **[4:10](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=250)** And so I have nine rows that I'm adding to our table with insert into temp values, just three question marks for the three columns, and then I'm passing it this tuple of tuples and that inserts all of these rows into the table in the one statement.
>
> **[4:29](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=269)** And this statement gets compiled once by the database and reused, which is a great efficiency.
>
> **[4:37](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=277)** And now we can select where a equals four and again, we'll just get that one row there, that fourth row.
>
> **[4:45](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=285)** And I'll go ahead and I'll run this and you see here's our nine rows.
>
> **[4:51](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=291)** I can expand this a little bit so we can see all of this.
>
> **[4:53](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=293)** Here's our nine rows and there's the result of our select with the question mark.
>
> **[5:00](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=300)** So we're starting to see the value here of prepared statements, and we're going to see a lot more of this as we go through the rest of the course, but I really want you to understand how these work and to get a sense of their value.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (2), case, (1), pass (1)
> **CLI Commands:** mysql (3), python (1), make (1)
> **Definitions:** is a  (4), is called (1)
> **Env Vars:** my_host (1), user (1), password (1), sql (1)
> **File Paths:** db_prepared.py (1), prepared2.py (1)
> **Exercise Files:** exercise files (1), template (1)
> **Code Identifiers:** db_prepared (1)
> **Cross-References:** in the last (1)

#### Hello, SQLite
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=0)** - This example is called, hello-sqlite.py because it serves much of the same purpose as a traditional hello world program.
>
> **[0:08](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=8)** A traditional hello world program is short and simple, and it's commonly used to validate a tool chain to make sure all the pieces are in place. In this case, it is a bit more than that.
>
> **[0:19](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=19)** I'll also use it to show you how various parts of the Python DB API works.
>
> **[0:26](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=26)** This version uses the SQL Lite database system.
>
> **[0:30](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=30)** SQL Lite is a full featured relational database system that has a few unique properties that make it especially suitable for many purposes.
>
> **[0:40](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=40)** Unlike most database systems as SQL Lite does not use a client server architecture.
>
> **[0:45](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=45)** All the code for the database is contained in the driver.
>
> **[0:50](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=50)** All of the data for each database is contained in a simple platform, independent file.
>
> **[0:56](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=56)** It's a powerful and robust system it's used in a great number of applications that don't require a client server architecture SQL Lite is free and open source.
>
> **[1:08](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=68)** It's included in most Python distributions.
>
> **[1:11](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=71)** So there's no need to download anything.
>
> **[1:14](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=74)** And this is hello-sqlite.py from chapter one of the exercise files.
>
> **[1:20](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=80)** I'm just going to close this sidebar here.
>
> **[1:23](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=83)** So we get a little more room for our code.
>
> **[1:27](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=87)** Of course, here at the top, I import the SQL Lite three module print a little hello, have to predefine these variables to, as I call it "satisfy the warnings monster" code works without that. It just generates warnings.
>
> **[1:44](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=104)** And here we are connecting to the in-memory database system, create a cursor, and I print the word connected.
>
> **[1:51](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=111)** Do you notice that all of this is in a tri block and we're using the SQL Lite exception class for the exceptions.
>
> **[2:02](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=122)** And then down here in another tri block, we create create a table.
>
> **[2:06](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=126)** You notice I'm using Python's triple quote so that we can format this create table statement to make just a little bit more easy to read.
>
> **[2:17](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=137)** And I execute that and print table created.
>
> **[2:20](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=140)** And then down here at another tri block, we're going to insert some rows.
>
> **[2:25](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=145)** And again, here we're using prepared statements.
>
> **[2:28](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=148)** And so we're actually going to insert these nine rows three times.
>
> **[2:33](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=153)** So we should have 27 rows and here it'll print the count.
>
> **[2:39](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=159)** You notice that we get a row count from the cursor.
>
> **[2:42](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=162)** Every time we call execute, many, the row count from the cursor will tell you how many rows were affected by the last statement.
>
> **[2:52](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=172)** And so that should add up to 27.
>
> **[2:56](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=176)** And I'm just going to ahead and run this here.
>
> **[2:57](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=177)** And we can see that we add all of these rows it says inserting rows, 27 rows added, and then it counts that there's 27 rows of the table and it gives us our column names.
>
> **[3:12](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=192)** And so we have the statement here, select count from hello and it prints the number of rows on the table.
>
> **[3:22](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=202)** And then we use this Pragma, every database system does this differently.
>
> **[3:27](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=207)** This is how you do this in SQL Lite to get table info.
>
> **[3:31](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=211)** We get the column names and we print out those column names.
>
> **[3:36](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=216)** And if we look here, over here, the column names are ID AB and C, which matches what we had in our create table statement there.
>
> **[3:52](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=232)** Then we fetch rows using an iterator.
>
> **[3:57](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=237)** And you notice that I say limit five.
>
> **[4:01](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=241)** So we're just going to get the first five rows.
>
> **[4:04](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=244)** And there we are fetching using iterator, getting the first five rows, and then we're going to use a row factory.
>
> **[4:11](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=251)** And this is a special construct that is specific to the SQL Lite driver.
>
> **[4:16](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=256)** The My SQL driver does not have this, but it allows us using this row factory, which we initialize here.
>
> **[4:25](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=265)** Then each of our rows can be read as either a tuple or as a dictionary using this row factory.
>
> **[4:33](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=273)** And so here we have it as a tuple and as a dictionary for each of the rows, we can also fetch in groups of five using fetch many and fetch many is just another fetch method where you can specify how many rows you want to get at once and manage your memory that way. And so using fetch many, getting five at a time, and with 27, we can expect that there'll be a remainder of two down there at the end.
>
> **[5:09](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=309)** So this is just an example of how to do this in SQL Lite and how to do these various common database actions, these common database functionalities in SQL Lite.
>
> **[5:23](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=323)** We drop table with exists, close our cursor, close our database, and we're done.
>
> **[5:32](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=332)** And so this is an example, doing all of these common actions in SQL Lite and in the next movie, we'll do exactly the same thing using My SQL.

> [!info]- Semantic Content
>
> **Env Vars:** sql (13), api (1)
> **CLI Commands:** make (3), python (3)
> **Definitions:** is a  (3), is called (1), is an  (1)
> **Code Keywords:** case, (1), require (1), module (1), this, (1)
> **File Paths:** hello-sqlite.py (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - this (1)

#### Hello, MySQL
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=0)** - [Instructor] This is the MySQL version of our hello database script.
>
> **[0:04](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=4)** It serves much the same purpose as a traditional hello world program, but for a database interface.
>
> **[0:10](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=10)** A traditional hello world is short and simple.
>
> **[0:13](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=13)** It's commonly used to validate a tool chain, make sure all the pieces are in place.
>
> **[0:18](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=18)** In this case, it's a bit more than that.
>
> **[0:20](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=20)** Also use it to show you how various parts of the Python DB API works in the MySQL context.
>
> **[0:28](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=28)** MySQL is a free and open source relational database system.
>
> **[0:33](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=33)** This example, presumes you've already installed MySQL server on your system and if you need help doing that, you may see my course, MySQL Installation and Configuration.
>
> **[0:44](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=44)** In this case, you'll notice that I have my database server on a different machine at pluto.local.
>
> **[0:51](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=51)** This would say local hosts, like this.
>
> **[0:57](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=57)** If you have the database on the same machine, as you're running your Python.
>
> **[1:03](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=63)** In any event, this is hello mysql.py from chapter one of the exercise files.
>
> **[1:08](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=68)** I'm going to go ahead and close the project pain.
>
> **[1:11](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=71)** So we have a little bit more room here for our code and you notice I have these constants and you see them down here in the connect, statement in the connect call that helps us keep all of this clean.
>
> **[1:24](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=84)** Much of this if you watch the previous movie with SQL Lite three example, you notice this is much of the same code and we're doing pretty much the same things.
>
> **[1:35](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=95)** Notice again, here on line 20, my cursor is being initialized with prepared = True and that's so that we can use prepared statements.
>
> **[1:44](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=104)** You will always put prepared, equals true when you're using MySQL, you always want prepared statements.
>
> **[1:51](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=111)** There's no circumstance where you won't want to use them and it should be a default, but it's not.
>
> **[1:56](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=116)** So you need to switch it on and that's how you do it.
>
> **[2:00](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=120)** Again, we're using exceptions in this case, we're using the mysql.Error and again, MySQL is this my sql.connector alias.
>
> **[2:15](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=135)** So here's starting in line 27, we have another try block.
>
> **[2:19](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=139)** We dropped table if it exists, we use a triple quote for our CREATE_TABLE string, again, just to format it and make it pretty and then we execute it and we say, TABLE_CREATED.
>
> **[2:33](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=153)** Again, we're inserting all of these rows using prepared statements.
>
> **[2:39](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=159)** And we're using execute many and we call it three times with nine rows that should give us 27.
>
> **[2:46](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=166)** So down here where I say print count rows added, it should say 27 rows added.
>
> **[2:51](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=171)** I'm going to go ahead and run this and show you the result here.
>
> **[2:56](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=176)** There we have a 27 rows added and then we use select count and we get a result that says there's 27 rows, in the table, our column names.
>
> **[3:09](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=189)** In this case, there's no pragma in MySQL to get the column names.
>
> **[3:15](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=195)** So you have to get the column names from a cursor.
>
> **[3:17](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=197)** So we select just one row from the table, select asterisk from, with limit one, we get one row.
>
> **[3:26](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=206)** We fetch them all just so that our cursor is executed and then we get our column names.
>
> **[3:33](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=213)** Simple as that and our column names come back as a tool bar.
>
> **[3:38](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=218)** We can fetch rows using an iterator.
>
> **[3:41](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=221)** For a row in cursor, that works just the same as it does in SQL lite.
>
> **[3:47](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=227)** MySQL does not have a dictionary option for the rows and so here we use the Python zip function to zip together a tuple of column names and rows so that we can look at them with the, it says your dictionary work around.
>
> **[4:06](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=246)** So that we can look out the rows either as a tuple or as a dictionary.
>
> **[4:11](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=251)** And that works pretty well.
>
> **[4:13](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=253)** And it's just a simple one line of code and that zip is pretty efficient in Python.
>
> **[4:20](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=260)** We can use fetch many to get five rows at a time.
>
> **[4:24](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=264)** And here we are getting five rows at a time with fetch many.
>
> **[4:31](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=271)** And drop and close the connection.
>
> **[4:33](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=273)** You can see that this is very very much the same code.
>
> **[4:38](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=278)** I mean, there are some distinctions, but it's very, very much the same code in both SQL Lite and MySQL.
>
> **[4:46](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=286)** And MySQL is a very popular database system and it works great with Python.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (13), python (5), make (2)
> **Code Keywords:** case, (4), interface (1), this. (1), default, (1), switch (1)
> **Env Vars:** sql (3), api (1), create_table (1), table_created (1)
> **Definitions:** is a  (2)
> **File Paths:** mysql.py (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/challenge-13976721?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/challenge-13976721?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/using-sql-with-python/challenge-13976721?u=76281980&t=5)** - [Instructor] Congratulations!
>
> **[0:06](https://www.linkedin.com/learning/using-sql-with-python/challenge-13976721?u=76281980&t=6)** If you've been following along, you now have enough knowledge to write a useful utility.
>
> **[0:11](https://www.linkedin.com/learning/using-sql-with-python/challenge-13976721?u=76281980&t=11)** For this challenge, you will copy all the rows of data from a table on a MySQL database to a table on an SQLite database.
>
> **[0:20](https://www.linkedin.com/learning/using-sql-with-python/challenge-13976721?u=76281980&t=20)** In your script, you'll need to create connections to both MySQL and SQLite.
>
> **[0:26](https://www.linkedin.com/learning/using-sql-with-python/challenge-13976721?u=76281980&t=26)** You'll need to create tables on both systems.
>
> **[0:29](https://www.linkedin.com/learning/using-sql-with-python/challenge-13976721?u=76281980&t=29)** Then you'll add rows of data to the table on MySQL.
>
> **[0:34](https://www.linkedin.com/learning/using-sql-with-python/challenge-13976721?u=76281980&t=34)** Then you'll copy that data from the MySQL table to the SQLite table.
>
> **[0:40](https://www.linkedin.com/learning/using-sql-with-python/challenge-13976721?u=76281980&t=40)** You'll close both the connections, and for bonus points, write another version that copies from SQLite to MySQL.
>
> **[0:48](https://www.linkedin.com/learning/using-sql-with-python/challenge-13976721?u=76281980&t=48)** Expect this project to take you about 30 minutes to an hour.
>
> **[0:52](https://www.linkedin.com/learning/using-sql-with-python/challenge-13976721?u=76281980&t=52)** Take your time, experiment a lot.
>
> **[0:55](https://www.linkedin.com/learning/using-sql-with-python/challenge-13976721?u=76281980&t=55)** Don't worry if you spend a lot of time on this, that's good, it just means you're learning a lot.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (5)
> **Prerequisites:** you'll need (2)
> **Code Keywords:** this, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=0)** - Here's my solution for the chapter one challenge.
>
> **[0:08](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=8)** This is 01-solution1.py from chapter one of the exercise files.
>
> **[0:15](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=15)** Up the top here, I import my modules.
>
> **[0:19](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=19)** I set up my constants for my SQL inside of main.
>
> **[0:26](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=26)** You notice I define my database and cursor objects outside of the tri blocks. This is just good practice.
>
> **[0:34](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=34)** It works if you do it inside the tri blocks, but Python will throw warnings about it.
>
> **[0:40](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=40)** So this is just good practice. First, we connect to SQLI three.
>
> **[0:45](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=45)** You notice that we have the path to the database.
>
> **[0:49](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=49)** We get the version, we report the version.
>
> **[0:52](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=52)** We set up the cursor, of course, and then we connect to my SQL, same thing.
>
> **[0:58](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=58)** Notice the prepared = true. We always want to do that.
>
> **[1:03](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=63)** And then we create and populate the My SQL table.
>
> **[1:08](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=68)** So I drop table if exists. I create the table, I've got a bunch of row data here and, you know, so I'm using a prepared statement with execute many for my row data.
>
> **[1:21](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=81)** And that works just great.
>
> **[1:28](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=88)** Then I print the data from the My SQL table, and now I create the SQL Lite table.
>
> **[1:34](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=94)** It's got a compatible schema.
>
> **[1:37](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=97)** You'll notice that the syntax for the different data types is a little bit different between My SQL and SQL Lite.
>
> **[1:47](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=107)** And that's just the way that it is, but it works.
>
> **[1:48](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=108)** We can read directly from one and into the other, and then we do the copy.
>
> **[1:55](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=115)** So we select everything from the My SQL table.
>
> **[2:02](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=122)** And then we set up the insert SQL for SQL Lite and for each row in the My SQL cursor, we execute the insert for SQL Lite you'll notice these slice here.
>
> **[2:16](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=136)** That simply takes us past that first column.
>
> **[2:21](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=141)** We don't want to copy that first column because that's the primary key.
>
> **[2:25](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=145)** We want to let SQL Lite create its own primary key.
>
> **[2:28](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=148)** So we're just doing the ABC columns here.
>
> **[2:32](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=152)** And so that's why we have the slice there in the insert.
>
> **[2:37](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=157)** Then we select from the SQL Lite table and we clean up.
>
> **[2:41](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=161)** So we'll go ahead and we'll run this and we can see here, we insert the rows. There's the My SQL table data.
>
> **[2:52](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=172)** We copy the data to SQL Lite and we query the SQL Lite data and it works just fine.
>
> **[2:59](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=179)** Now for the extra credit, here's my solution number two,
>
> **[3:10](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=190)** and I kind of, modularizes just a little bit.
>
> **[3:12](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=192)** I created a copy table function and I give it a little mode string that it would go one direction or the other direction.
>
> **[3:19](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=199)** So my solution will actually copy in either direction.
>
> **[3:25](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=205)** And so this is all in that function.
>
> **[3:28](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=208)** And then down here in Main, all we do, we have a little input.
>
> **[3:32](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=212)** We ask if we're going this way or that way.
>
> **[3:35](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=215)** And then we connect to the databases,
>
> **[3:44](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=224)** create the tables, the SQL Lite table, the My SQL table.
>
> **[3:47](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=227)** And then we do the copy. We simply copy.
>
> **[3:51](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=231)** We call the copy function and up here in the copy function, if we're copying from My SQL to SQL Lite, we set up all of the, you know, source DB, destination DB.
>
> **[4:06](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=246)** We set up all of these variables for which direction we're going.
>
> **[4:14](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=254)** And we create the row data.
>
> **[4:16](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=256)** And we use the same SQL for both of these, because these are the standard, you know, insert into, select from... those don't vary between database systems.
>
> **[4:26](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=266)** So in the source, we insert the data and then we select from the source.
>
> **[4:35](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=275)** And then we do the copy thing.
>
> **[4:39](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=279)** For row in source, we execute the insert.
>
> **[4:43](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=283)** And so when I run this one, which way do I want to go?
>
> **[4:49](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=289)** I want to go SQL Lite to My SQL, right?
>
> **[4:52](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=292)** So I'm going to go number two, and it does it.
>
> **[5:01](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=301)** So that's my solution.
>
> **[5:02](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=302)** Feel free to take your time and look through this code.
>
> **[5:06](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=306)** And I hope this challenge was fun for you.
>
> **[5:10](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=310)** And you learned a lot.

> [!info]- Semantic Content
>
> **Env Vars:** sql (24), sqli (1), abc (1)
> **Code Keywords:** function (4), throw (1), let (1), from. (1)
> **Prerequisites:** set up (5)
> **Best Practices:** good practice (2)
> **File Paths:** 01-solution1.py (1)
> **CLI Commands:** python (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)


### 3. 2. A CRUD Class

#### The essential four
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/the-essential-four?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/the-essential-four?u=76281980&t=0)** - [Instructor] The four essential functions of a database system are create, read, update, and delete.
>
> **[0:07](https://www.linkedin.com/learning/using-sql-with-python/the-essential-four?u=76281980&t=7)** The scatological acronym is intended to be pronounced C.R.U.D.
>
> **[0:12](https://www.linkedin.com/learning/using-sql-with-python/the-essential-four?u=76281980&t=12)** These four functions translate to the SQL statements; insert, select, update, and delete.
>
> **[0:20](https://www.linkedin.com/learning/using-sql-with-python/the-essential-four?u=76281980&t=20)** The Python DB-API was designed to provide a uniform interface for as many database systems as possible and has all the functionality necessary to take full advantage of most any relational database management system, but most of the time, all you need is a simple way to issue SQL statements, and sometimes, it makes sense to have an interface more closely tailored to a given application.
>
> **[0:47](https://www.linkedin.com/learning/using-sql-with-python/the-essential-four?u=76281980&t=47)** In this chapter, we will create a Python module that acts as a wrapper to the DBA-API interface to provide a simpler, more useful SQL interface, as well as a C.R.U.D. interface.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), delete (2), module (1)
> **Env Vars:** sql (3), api (2), dba (1)
> **CLI Commands:** python (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### SQL Wrapper
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=0)** - [Instructor] The first step in creating our module is to encapsulate the most common SQL methods.
>
> **[0:06](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=6)** Then we can build on that to create our crud methods.
>
> **[0:10](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=10)** So this is BWDB-SQL.PY from chapter two of the exercise files.
>
> **[0:16](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=16)** And probably the first thing you'll notice about this is that it's much bigger than any of the other Python files we've worked on so far.
>
> **[0:24](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=24)** And that's because it's a module and it has a lot of methods in it.
>
> **[0:27](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=27)** And so, to help us navigate around those, I'm going to open up this structure tab down here.
>
> **[0:33](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=33)** You can get this by pressing command seven on a Mac or alt seven on a PC.
>
> **[0:39](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=39)** You notice it opens up here on the left.
>
> **[0:41](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=41)** I can close my projects and navigate around this like this.
>
> **[0:45](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=45)** Or what I prefer to do is to take this structure tab and just move it over to the right side at the top.
>
> **[0:52](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=52)** And alternately, you can right click on it and say, move to right top and you get exactly the same effect.
>
> **[1:00](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=60)** But this helps me to navigate around.
>
> **[1:03](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=63)** If this isn't already opened, you can open your class here with the disclosure triangle.
>
> **[1:08](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=68)** And it just helps me to navigate around.
>
> **[1:10](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=70)** If I want to go to a specific method, boom, there I am.
>
> **[1:14](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=74)** So with larger files, I can also close my project tab over there because I'm working on a fairly small screen.
>
> **[1:20](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=80)** Your screen is probably larger, but for demonstration purposes, the screen tends to be smaller.
>
> **[1:27](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=87)** And so, that helps us navigate around.
>
> **[1:29](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=89)** So, the first thing I want to show you though is way down here at the bottom.
>
> **[1:34](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=94)** And you'll notice this line here, if name equals main, we call main, you've seen this a million times.
>
> **[1:40](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=100)** It's very common in Python.
>
> **[1:41](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=101)** But here it serves a little bit of a different purpose because we're in a module.
>
> **[1:46](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=106)** If this module is opened through an import statement in another file, instead of saying main here, this name variable will be the name of the module.
>
> **[1:58](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=118)** So that way because we're opening it directly and we're running it directly, it's named main.
>
> **[2:05](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=125)** And then we can call our main, but this main only gets called when we're running it directly.
>
> **[2:09](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=129)** And so, that's pretty convenient.
>
> **[2:12](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=132)** So here's our main function.
>
> **[2:15](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=135)** And it's really just here to test all of the methods inside of the BWDB class.
>
> **[2:22](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=142)** And so, here we have the SQL do.
>
> **[2:24](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=144)** We have begin transaction, SQL do many, no commit, things like that.
>
> **[2:30](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=150)** And it kind of tests everything, so that as I'm developing the module, I can test things.
>
> **[2:37](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=157)** And also, once it's all done and I want to add other things, I still have all of these tests in here.
>
> **[2:42](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=162)** It's very much like unit tests, although a little bit more specific.
>
> **[2:45](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=165)** All right, so going back into our class, I want to show you actually at the very top, before we actually get into the class, these import statements.
>
> **[2:55](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=175)** So I'm importing SQLite three and my SQL connector, like we've seen before, except you'll notice these are in tribe blocks.
>
> **[3:03](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=183)** That way, if one of these modules is not actually available, then what happens here is instead of have my SQL true, we get the exception, we have my SQL equals false.
>
> **[3:17](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=197)** And we set my SQL equals none, so that we don't get errors and warnings.
>
> **[3:23](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=203)** So this way we can conditionally import these if we have them and have our module act rationally, if we don't.
>
> **[3:32](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=212)** All right, I want to go down here and I want to show you set DBMS and get DBMS.
>
> **[3:37](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=217)** You notice these have a little P's here.
>
> **[3:40](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=220)** These are properties and they have the little arrows for the setters and getters.
>
> **[3:44](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=224)** And in a knit, you notice that I use these keyword arguments so that when I initialize, I can initialize with different arguments for the different database management systems.
>
> **[3:57](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=237)** And we'll see that when we get down to main.
>
> **[3:59](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=239)** But for example, if we have DBMS, I set self.DBMS.
>
> **[4:04](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=244)** Yet the property itself is named _DBMS.
>
> **[4:08](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=248)** And that's because we're using these setters and getters.
>
> **[4:12](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=252)** These are declared down here under properties, using the property function, instead of using a decorator.
>
> **[4:21](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=261)** You can use a decorator for this.
>
> **[4:23](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=263)** I find using a decorator for this to be a little bit more confusing, probably because I don't write in Python all the time.
>
> **[4:29](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=269)** I do a lot of work in C++ and other languages.
>
> **[4:32](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=272)** And every time I see decorators and property, I have to look them up.
>
> **[4:35](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=275)** But this is really obvious and clear to me.
>
> **[4:38](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=278)** So I set the gather to get DBMS and the setter to set DBMS.
>
> **[4:43](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=283)** And this reads really clearly for me.
>
> **[4:45](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=285)** And then, when I assign something to that DBMS, .DBMS variable, like we did up here, then the setter gets called automatically as a property setter.
>
> **[4:59](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=299)** As property setters and getters.
>
> **[5:01](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=301)** All right, so if the DBMS equals my SQL, I check if I have it first.
>
> **[5:06](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=306)** With my SQL variable and if not, I can throw an error.
>
> **[5:12](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=312)** And I can do the same with SQLite.
>
> **[5:15](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=315)** And then when I set the database itself, there's a bunch of work I can do.
>
> **[5:21](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=321)** In this case, I call the actual connect on SQLite three connect or on my SQL connect with the user password, with the credentials.
>
> **[5:31](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=331)** And I'm setting these up properly for which database they are.
>
> **[5:37](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=337)** All right, let's take a look at the SQL methods themselves.
>
> **[5:41](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=341)** I have SQL do.
>
> **[5:44](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=344)** And you notice that SQL do simply calls SQL do no commit and then calls a commit.
>
> **[5:49](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=349)** So, in the DBA API, in the specification, it specifies that auto commit must be off by default.
>
> **[5:58](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=358)** And this is so that it works as expected for people who are used to just working directly with SQL and not necessarily through an interface.
>
> **[6:08](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=368)** Many of the interfaces, the C interfaces actually, have auto commit turned on by default.
>
> **[6:13](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=373)** But the people who develop Python wanted consistency.
>
> **[6:18](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=378)** And so, they specify that it must be turned off by default and I leave it off and I simply do commits when I need them.
>
> **[6:26](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=386)** And so, for this SQL do, where we basically take an SQL statement and whatever parameters and then pass those on to the execute on the cursor, I have a no commit version and I have a version that's by default with commit.
>
> **[6:42](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=402)** And this way I can choose which one or I can do my commits manually if I prefer to do that.
>
> **[6:49](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=409)** And so, I have the same with do many, which simply calls execute many.
>
> **[6:53](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=413)** And query, which calls execute.
>
> **[6:57](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=417)** And because this is for queries that actually returned values, these do methods are for queries that do not return values.
>
> **[7:05](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=425)** Things like insert, update and like that.
>
> **[7:08](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=428)** But queries do return values, like select statements, we want it to return the values.
>
> **[7:14](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=434)** So I have one that'll just return a single value.
>
> **[7:18](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=438)** And so, it returns the first parameter of the row.
>
> **[7:22](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=442)** And so, that's for things like the count function and things like that, where you want one specific value.
>
> **[7:28](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=448)** You just want to call this method and get that value.
>
> **[7:31](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=451)** I have one little get a single row and it gets fetch one, it signs out to the row and then calls fetch all to just clear out anything else that the query might be returning.
>
> **[7:40](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=460)** And then it returns to the row.
>
> **[7:43](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=463)** And the query by itself returns an iterator through the yield statement in Python.
>
> **[7:49](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=469)** And if you're not familiar with yield, take a look at my SQL central training and I go over how that works.
>
> **[7:56](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=476)** So if we come down here to main, I'm going to close this and come down here to main, here's how we use it.
>
> **[8:04](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=484)** This calls the constructor, the underscore underscore admit underscore underscore.
>
> **[8:08](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=488)** And we can construct it either with SQLite or with my SQL works exactly the same.
>
> **[8:14](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=494)** We call SQL do to drop the table if exists.
>
> **[8:19](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=499)** And then we set up our, depending on the DBMS, we set up our create table, which has different syntax.
>
> **[8:27](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=507)** And then we call SQL do with the create table statement.
>
> **[8:30](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=510)** So I'm just going to go ahead and run this.
>
> **[8:34](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=514)** And you can see there at the top, we created the table.
>
> **[8:38](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=518)** We populate the table and you notice, I have two versions of the populate.
>
> **[8:43](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=523)** One, it says not adding because I do a roll back instead of commit.
>
> **[8:49](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=529)** And another one we're actually adding.
>
> **[8:51](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=531)** And so, if we look up here at the top, we have the not adding rollback and then adding.
>
> **[8:56](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=536)** And then when we're all done, we have query value, select count.
>
> **[9:02](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=542)** There are this many rows and it says there are six rows.
>
> **[9:05](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=545)** And so, the rest of this is pretty simple.
>
> **[9:07](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=547)** We have a SQL query and we print row.
>
> **[9:09](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=549)** We use it as an iterator and we get these rows down here.
>
> **[9:15](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=555)** We have update row, add a row, delete a row, print the remaining rows and clean up.
>
> **[9:23](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=563)** So I know that's a lot of stuff, but it's actually pretty straightforward.
>
> **[9:28](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=568)** When you look at this code, it's all just really simple wrappers around the SQL statements.
>
> **[9:34](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=574)** Now that we have the SQL part, we can go ahead and add our crud methods in the next lesson.

> [!info]- Semantic Content
>
> **Env Vars:** sql (25), dbms (10), bwdb (2), dba (1), api (1)
> **Code Keywords:** module (7), this. (3), function (3), class, (2), default. (2)
> **CLI Commands:** python (5), find (1)
> **UI Navigation:** click on (1), go to (1)
> **Prerequisites:** set up (2)
> **File Paths:** bwdb-sql.py (1)
> **Cross-References:** in the next (1)
> **Documentation:** specification (1)

#### Adding CRUD methods
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=0)** - [Instructor] Now that we have a library of SQL methods it's time to add our CRUD methods.
>
> **[0:05](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=5)** This is BWDB.py from chapter two of the EerciseFiles.
>
> **[0:10](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=10)** And we've already gone through a lot of this in the previous movie, if you haven't watched that one, I strongly suggest that you do before you watch this one.
>
> **[0:18](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=18)** Over here on the right, I have my structure opened up.
>
> **[0:21](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=21)** We can get this by pressing Command + Y on a Mac or Alt + Y on a PC and I'm just going to open up my BWDB class here to help us navigate around.
>
> **[0:32](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=32)** We're going to start with the init and you notice we've added a couple of properties here for table and column_names that's because with the way that the CRUD methods work, as they depend on particular tables being created in a particular way and so if we come down here to Main, you'll notice when we create our tables, our tables have an ID column, which is a primary key and it auto increments.
>
> **[1:03](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=63)** And this is essential for the CRUD methods because the CRUD methods depend on a relational structure.
>
> **[1:09](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=69)** So we're going to do things where like we're going to search for something and it will return an ID and then we need to be able to use that ID to fetch the data.
>
> **[1:17](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=77)** So these methods up here in a init, or rather these properties up here in a init, include a table_name and column_names, because those are central to how our CRUD methods work.
>
> **[1:29](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=89)** All right, and if we look at, for example, table, we have again, properties for table, set_table, which calls sanitize_string on the table_name that's because when we get down into our CRUD methods, like for example, GET_row, I'm going to close this project, give us a little bit more room.
>
> **[1:55](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=115)** We have to actually include that table_name in the SQL and so it needs to be standardized first.
>
> **[2:01](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=121)** And so we have some methods down here at the bottom for doing things like sanitizing a string.
>
> **[2:09](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=129)** You notice it has the static method decorator, which simply tells Python that this is a static method and it does not access or change any object values and so that allows Python do a little bit of optimization with that.
>
> **[2:24](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=144)** And this method is very straightforward it simply takes the string, iterates through it, compares each character to this acceptable characterset.
>
> **[2:35](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=155)** If the character is not in the characterset, it replaces it with an underscore, very very simple and straightforward.
>
> **[2:43](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=163)** We have other static methods for things like creating a string of colnames, separated by commas and value, question marks separated by columns and an update_string which is basically colnames with equals question mark.
>
> **[2:58](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=178)** And these are used when we add_rows and update_rows.
>
> **[3:03](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=183)** So if I look at add_row, nocommit, you notice I'm using colnames_string, and value_string, a name_string, and a values_string.
>
> **[3:13](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=193)** For the INSERT statement, the INSERT statement in SQL is INSERT INTO table name and then a list of column names separated by commas, and then a list of values, which in this case will be question marks separated by commas.
>
> **[3:30](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=210)** So my values_string, I tell it how many, and it'll give me that many question marks separated by commas and my colnames_string, I pass it the column names typo, and it will return a string with those colnames separated by commas.
>
> **[3:47](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=227)** So again, these are very straightforward.
>
> **[3:52](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=232)** Here's colnames and here's values_string, very straightforward and simple.
>
> **[3:58](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=238)** You notice in colnames, I ignore if the first one is named ID, 'cause we don't use that in our update_strings.
>
> **[4:06](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=246)** Again, we're depending on that specific structure for our tables.
>
> **[4:11](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=251)** And then the update_string is a little bit more complex.
>
> **[4:15](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=255)** Come back here to update_row, nocommit.
>
> **[4:19](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=259)** You notice the SQL is UPDATE table name, SET and then it's a list of colname equals value, colname equals value, which is the SQL syntax for that.
>
> **[4:30](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=270)** And so our update_string, it takes each of the colnames it adds equals question mark, because again, these are going to be prepared statements and then it takes all of that and it joins it with the comma using the join function.
>
> **[4:49](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=289)** So very straightforward.
>
> **[4:53](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=293)** Most of the rest of these are very simple Wrappers around the SQL.
>
> **[4:58](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=298)** So we have, count_rows, which has a SELECT COUNT star.
>
> **[5:04](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=304)** GET_row, SELECT statement and it returns that convenient iterator or rather get_rows returns the iterator get_row returns a single row.
>
> **[5:14](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=314)** We also have get_rows with a limits, you can pass it a limit and an offset optionally offset defaults to zero.
>
> **[5:23](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=323)** Add_row, which we've looked at, update_row, which we looked at, delete_row, Simple Wrapper.
>
> **[5:29](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=329)** Most of these are Simple Wrappers, even find_row is just a Simple Wrapper.
>
> **[5:34](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=334)** We have a few more convenience methods down here at the bottom, have_db checks to see if we have a Database already set up, have_cursor, have_table, you can actually, hasad a table name and it will query the database and depending on if it's MySQL or SQLite, it'll query the Master Database and say does this table exist?
>
> **[5:56](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=356)** Lastrowid, begin_transaction rollback, commit and disconnect, which is called by the destructor.
>
> **[6:05](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=365)** So I know this is a lot and we've gone through it pretty quickly the code is all here.
>
> **[6:09](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=369)** Feel free to take your time and experiment with all of this, there's testing code down here, which I'll go ahead and I'll run for you.
>
> **[6:16](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=376)** It's pretty much the same as the one for the SQL, except in this case, we're using these CRUD Wrappers, add_row, nocommit, and then call commit, add_row, nocommit and call rollback.
>
> **[6:30](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=390)** We use count_rows.
>
> **[6:31](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=391)** So we're not using the SQL in here we're actually using the CRUD methods in the testing.
>
> **[6:37](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=397)** Now that we have this working module, let's take a look at how to use it in the next lesson.

> [!info]- Semantic Content
>
> **Code Identifiers:** table_name (3), update_string (3), add_row (3), values_string (3), column_names (2)
> **Env Vars:** sql (8), crud (8), insert (3), bwdb (2), select (2)
> **Code Keywords:** static (3), pass (2), function (1), this, (1), case, (1)
> **Definitions:** is a  (4), is called (1)
> **SQL:** select (2), insert into (1), update (1)
> **CLI Commands:** python (2), mysql (1)
> **Analogies:** for example (2)
> **File Paths:** bwdb.py (1)

#### Using the module
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=0)** - [Instructor] It's simple to import and use this module.
>
> **[0:04](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=4)** You'll notice down here on line five, I say from BwDB import, and then our two classes, BwDB, and BWErr.
>
> **[0:13](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=13)** And then I simply use the class.
>
> **[0:18](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=18)** Like I would any other class, here I am initializing an object with the BwDB connected to SQLite, or if I like I can do it connected to SQL.
>
> **[0:34](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=34)** and either one works.
>
> **[0:37](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=37)** Once it's connected, I can use it just as we did in the test code, here I use SQL do to drop a table if exists and here I use SQL do to create a table.
>
> **[0:51](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=51)** Once I've created this temp table, it's named temp, I can set the table name to temp, and then I can use all of the crud methods.
>
> **[1:01](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=61)** So I can say column names, I can use add row with or without the commit.
>
> **[1:07](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=67)** But here since I'm adding a bunch of rows at once, I use no commit and I hit commit down below.
>
> **[1:15](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=75)** I can use get rows as an iterator.
>
> **[1:19](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=79)** I can use find rows to find all the rows that have an S in them.
>
> **[1:24](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=84)** And then I get a list of row IDs, and then I can iterate through the list of row IDs to print them.
>
> **[1:36](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=96)** I can find a particular row with Bird in it.
>
> **[1:41](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=101)** And once I have that row ID, I can update that row and change the name.
>
> **[1:48](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=108)** I can add a row using add row.
>
> **[1:51](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=111)** I can delete a row using find, and then passing that row ID to delete row and I can add a bunch more rows.
>
> **[2:02](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=122)** And then I can page through the rows using limit and offset.
>
> **[2:07](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=127)** I can change the table to a different table and get those rows and I can change it back and just get those rows.
>
> **[2:16](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=136)** Drop table if exists and the close of the database handle and the cursor is handled by the destructor in the class.
>
> **[2:27](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=147)** So I'll just go ahead and run it this, and you'll see all of these things happening here.
>
> **[2:36](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=156)** We create the table.
>
> **[2:38](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=158)** There's the table column names, populate the table, find the rows with an S in them, search just for Bird , change it from Charlie Bird to The Bird .
>
> **[2:53](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=173)** We can add a row.
>
> **[2:55](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=175)** We can delete a row, print the remaining rows.
>
> **[2:59](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=179)** You'll notice there that three, which was Billy Cobham has gone.
>
> **[3:03](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=183)** Add more rows, we have 13 more rows, and then we can page through them five at a time.
>
> **[3:10](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=190)** We change our table and here's our items table, change it back and drop the table.
>
> **[3:19](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=199)** And if we like, I can run that same code against my SQL.
>
> **[3:30](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=210)** And it works exactly the same, little slower because SQLite is all in one compact little file.
>
> **[3:39](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=219)** And this is actually running on a server in my office.
>
> **[3:43](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=223)** So you can see here that this module is easy and convenient to use.
>
> **[3:48](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=228)** And in the next chapter, we'll use it for a practical application.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), module (2), class. (2), import, (1), class, (1)
> **CLI Commands:** find (5)
> **Env Vars:** sql (4)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=5)** - [Narrator] The challenge for this chapter is to manage a simple table of domain names and descriptions.
>
> **[0:11](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=11)** For this purpose, I've created a starting place so you can focus on the practical database parts and you'll use the crud library for this challenge.
>
> **[0:20](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=20)** So here we have zero to challenge dot P Y from chapter two of the exercise files.
>
> **[0:26](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=26)** And you notice I import the BW DB class from the module, and I have a number of functions here.
>
> **[0:34](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=34)** So I'm going to just close that and open the structure.
>
> **[0:37](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=37)** And we can look at the functions, we'll start with main.
>
> **[0:41](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=41)** So it main does is it calls connect, which connects to the database, just like that.
>
> **[0:46](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=46)** Very simple.
>
> **[0:50](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=50)** And it stores the database handle in this globals and this globals is just a handy little dictionary for keeping a few global variables.
>
> **[1:00](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=60)** I may just have that one.
>
> **[1:01](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=61)** I don't know.
>
> **[1:02](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=62)** It's a way that I've done this in Python for years and years.
>
> **[1:05](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=65)** It's a simple trick.
>
> **[1:07](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=67)** I do this in a lot of scripting languages.
>
> **[1:09](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=69)** It keeps the namespace nice and clean.
>
> **[1:12](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=72)** In any event, back in main here, we create the table, we set the table name and then we have this wild loop.
>
> **[1:19](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=79)** And if the response is Q for quit, we quit and exit.
>
> **[1:22](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=82)** Otherwise we call this jump response.
>
> **[1:25](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=85)** Do menu displays the menu.
>
> **[1:29](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=89)** Right?
>
> **[1:29](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=89)** And so it looks like this when I run it.
>
> **[1:32](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=92)** You see here's our little menu and if I say add, we've got stubs for each of these find edit list, delete X for drop table and exit and Q for quit.
>
> **[1:45](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=105)** And it quits right out.
>
> **[1:47](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=107)** And so that's our menu there, in 'Do' menu.
>
> **[1:50](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=110)** And here's our little jump table, very simple.
>
> **[1:54](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=114)** And we have little stubs for add domain, find domain, edit domain, et cetera.
>
> **[1:59](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=119)** And you're going to fill these in with the code, using the crud library to do these functions.
>
> **[2:06](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=126)** So you're also getting an idea of a framework of what I build command line applications, I use a framework like this.
>
> **[2:12](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=132)** It's very, very simple.
>
> **[2:13](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=133)** I'll do this in whatever language I'm doing.
>
> **[2:16](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=136)** I'll jump table and little functions for each functions off the jump table.
>
> **[2:21](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=141)** Very, very simple.
>
> **[2:23](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=143)** I expect this challenge will take you about one or two hours and I'll show you my solution in the next lesson.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), python (1)
> **Code Keywords:** module (1), delete (1), this. (1)
> **Cross-References:** in the next (1)
> **Tools:** command line (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** we call this (1)
> **Analogies:** just like (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=0)** - [Instructor] Let's take a look at my solution for the challenge.
>
> **[0:08](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=8)** Keep in mind, your solution may be different, and that's fine.
>
> **[0:12](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=12)** This is 02-solution.py from chapter two of the exercise files.
>
> **[0:16](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=16)** Let's just start out by running it.
>
> **[0:19](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=19)** And you see, I get my little menu here.
>
> **[0:21](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=21)** And if I type L to list domains, you see I have no domains in the database.
>
> **[0:26](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=26)** I can add a domain, let's add [bw.org](https://bw.org) or I'll just say international geek of mystery.
>
> **[0:37](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=37)** And I've added that now to the database.
>
> **[0:40](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=40)** And if I list domains, now, I get that one.
>
> **[0:45](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=45)** I can add another one. I'll add [lynda.com](https://lynda.com).
>
> **[0:54](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=54)** And I'll add another one for, say Google.
>
> **[1:02](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=62)** And now, when I list domains, I've got these three.
>
> **[1:05](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=65)** So I can find one.
>
> **[1:07](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=67)** If I want to find, I can say [lynda.com](https://lynda.com) and find that one.
>
> **[1:10](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=70)** And you'll notice that it finds that just fine.
>
> **[1:14](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=74)** I can edit a domain.
>
> **[1:16](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=76)** Let's say I want to edit [bw.org](https://bw.org), and I'll just change the description to say Bill Weinman.
>
> **[1:23](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=83)** And now, when I list domains, you see those have changed.
>
> **[1:27](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=87)** I can delete a domain.
>
> **[1:28](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=88)** Let's delete Google because that's certainly useless.
>
> **[1:33](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=93)** And delete row? Yes, no?
>
> **[1:35](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=95)** I say yes and it deletes the row.
>
> **[1:38](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=98)** And now, when I list them, I've just got the two.
>
> **[1:41](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=101)** And I can X to drop table and exit.
>
> **[1:44](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=104)** And boom! We're done.
>
> **[1:46](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=106)** So let's take a look at the code that does this.
>
> **[1:48](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=108)** Of course, we've seen the connect function, we've seen do_menu, we've seen jump response.
>
> **[1:59](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=119)** So here's add_domain, all right? So print out add domain.
>
> **[2:03](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=123)** It gets the database object from the globals, raises an error if it doesn't have a database object.
>
> **[2:09](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=129)** It prompts for the domain name and the description, calls add row.
>
> **[2:14](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=134)** It checks the count that's returned from add row to see if it's less than one.
>
> **[2:19](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=139)** And it gets the last row ID.
>
> **[2:20](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=140)** And it uses that to print the row so you can see what you added.
>
> **[2:25](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=145)** Find_domain, I have a little trick here.
>
> **[2:29](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=149)** I added the keyword arguments with no prompt so that I only print this find_domain header if I don't have that so that I can reuse this code for things like edit_domain.
>
> **[2:41](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=161)** You notice that edit_domain calls find_domain.
>
> **[2:44](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=164)** And delete calls find_domain, right?
>
> **[2:48](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=168)** And so that just makes it a little bit more flexible.
>
> **[2:50](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=170)** It asks for domain_name, it calls find_row, it gets row_ID, and if found, it prints it; and it also returns the row_ID for those functions that might call it.
>
> **[3:03](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=183)** So we have edit, again, we call find_domain, we get a row_ID, we ask for the description because we're just going to add the description, and that's fine; and we update row with the new description.
>
> **[3:16](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=196)** List_domain is very simple.
>
> **[3:18](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=198)** Listing count rows domains and we list them.
>
> **[3:23](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=203)** Delete_domain calls find_domain.
>
> **[3:26](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=206)** It asks, yes or no?
>
> **[3:27](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=207)** If you're going to delete, if you really want to delete the row.
>
> **[3:32](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=212)** And drop_db this calls. Drop table if exists and exits.
>
> **[3:39](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=219)** And main, we've already seen that.
>
> **[3:42](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=222)** And that's my solution. It's pretty simple actually.
>
> **[3:45](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=225)** But the whole thing is under 200 lines of code.
>
> **[3:48](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=228)** Very simple and straightforward, especially using this CRUD library that we've created.
>
> **[3:54](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=234)** So I hope you've enjoyed this challenge.
>
> **[3:57](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=237)** I hope you've found it useful.
>
> **[3:58](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=238)** I hope you've learned a lot.
>
> **[4:00](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=240)** And in the next chapter, we'll build a practical web applications.
>
> **[4:04](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=244)** So fasten your seatbelts.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), delete (6), for, (1), this. (1), function (1)
> **Code Identifiers:** find_domain (5), edit_domain (2), do_menu (1), add_domain (1), domain_name (1)
> **URLs:** [bw.org](https://bw.org) (2), [lynda.com](https://lynda.com) (2)
> **CLI Commands:** find (3)
> **File Paths:** 02-solution.py (1)
> **Env Vars:** crud (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)


### 4. 3. Final Project: URL Shortener

#### Defining the project
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=0)** - [Instructor] Our final project is a simple, short URL service for personal or private use.
>
> **[0:06](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=6)** I wanted a short URL service, but I didn't want to use one of the public services.
>
> **[0:11](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=11)** I didn't like their privacy policies.
>
> **[0:13](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=13)** I didn't want to leave my traffic in the control of an unknown entity.
>
> **[0:16](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=16)** And frankly, it just seemed like a fun little project.
>
> **[0:20](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=20)** I've been using this code for about 10 years now, and it's worked well for me.
>
> **[0:25](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=25)** The code revolves around a simple one-table database that has rows for the short name and the destination URL.
>
> **[0:33](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=33)** I call the app JURL for jump URL.
>
> **[0:36](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=36)** So I named the table JURL.
>
> **[0:38](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=38)** It's really just a name, no reason to overthink it.
>
> **[0:41](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=41)** It would be easy to add support for click counts, referral URLs, and other statistical information.
>
> **[0:47](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=47)** But for my purposes, this simple schema has served me well for many years.
>
> **[0:53](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=53)** There are two significant components to the system, a simple CRUD application for managing the database and a jump script that intercepts the short URLs and redirects the browser to the destination URL.
>
> **[1:08](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=68)** When I built the system, I chose to build a web-based CRUD application to manage the database.
>
> **[1:15](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=75)** This requires a few parts to work properly.
>
> **[1:18](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=78)** A series of HTML files, some CSS to make it look pretty, a templating system to assemble the HTML with the various data filled in, and code to manage all of that, to keep state, and to handle the CGI.
>
> **[1:36](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=96)** CGI is, in this context, the common gateway interface.
>
> **[1:41](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=101)** It's one of the original web protocols dating back to the early 1990s.
>
> **[1:46](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=106)** CGI is how we pass information back and forth between a web browser and a web server.
>
> **[1:53](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=113)** I wrote a book about CGI back in '95.
>
> **[1:56](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=116)** If you're interested in understanding the subject, you may be able to find a copy in a used bookstore or online.
>
> **[2:02](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=122)** it's still relevant, and the protocol hasn't changed since I wrote it.
>
> **[2:06](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=126)** Keep in mind that the web is inherently stateless.
>
> **[2:10](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=130)** This means that each time a web browser submits information back to the web server, it does not know what just happened unless your script keeps track.
>
> **[2:20](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=140)** This script uses a simple jump table along with a series of CGI variables to keep track of state.
>
> **[2:28](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=148)** Keeping state with CGI can be confusing.
>
> **[2:30](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=150)** This is one of the reasons that modern web apps use so much JavaScript.
>
> **[2:36](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=156)** Finally, a separate script handles the actual redirection from short URL to destination URL.
>
> **[2:43](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=163)** This part of the system is very small and simple and requires no user interface.
>
> **[2:49](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=169)** It uses the HTTP 307 response code to direct the browser to the target URL.
>
> **[2:57](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=177)** Response codes are part of the HTTP specification and are issued by the server before the MIME headers.
>
> **[3:04](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=184)** The response code is immediately followed by a location header with the full target URL.
>
> **[3:10](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=190)** Note that CGI scripts run by the built-in Python server class cannot execute redirects because response code 200, the OK response, is sent before the CGI script is called.
>
> **[3:25](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=205)** In order to test a web application, we will need a web server.
>
> **[3:28](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=208)** And in the next lesson, we'll look at how we can create a simple Python web server for testing our code.

> [!info]- Semantic Content
>
> **Env Vars:** url (9), cgi (8), jurl (2), crud (2), html (2)
> **Code Keywords:** interface (2), private (1), public (1), pass (1), finally, (1)
> **CLI Commands:** python (2), make (1), find (1)
> **Definitions:** is a  (1), means that (1), is called (1)
> **Warnings:** keep in mind (1), note that (1)
> **Cross-References:** in the next (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)

#### Testing a web application
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=0)** - [Instructor] Our final project is a web application, which means that we need to test it in a web server.
>
> **[0:06](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=6)** You could use a free or low-cost server from a cloud company and that would work fine or you may prefer this simple, convenient alternative.
>
> **[0:14](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=14)** Python comes with a functional web server that's ideal for testing.
>
> **[0:18](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=18)** It's not something you would use in production, but it works for our purposes.
>
> **[0:22](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=22)** This is webserver.py, from chapter three of the exercise files.
>
> **[0:27](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=27)** It's a simple web server using the HTTP server module, and this module is included with the default Python distribution.
>
> **[0:36](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=36)** You notice down here on line six, I import two classes from the HTTP server module.
>
> **[0:43](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=43)** These two classes are the server itself and a request handler for CGI and then I set up a class that inherits that request handler and I give it the directories where we're going to run CGI.
>
> **[0:55](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=55)** These directories are relative to the server route, which by default is the directory where you're running this web server code, which in this case is our exercise files, which is on the desktop, and chapter three.
>
> **[1:11](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=71)** And you notice we have web-server, we have this cgi-test, which we'll look at in a moment, and the solution to our exercise for our challenge for this chapter.
>
> **[1:22](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=82)** The way that this is organized in the window, it might look like this is under jURL, jURL is a separate directory, so we'll look at that later, but for right now, we're running this web server here.
>
> **[1:33](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=93)** We set its port number to 9999 and we set up a object based on the server class, we print out a message, and we call serve_forever.
>
> **[1:45](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=105)** And so when I run this code, you'll notice it says serving at port 9999 and if I switch to my web browser and I type in localhost:9999/cgi-test.py,
>
> **[2:03](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=123)** when I run that, I get this output and that cgi-test.py, it's just a test CGI... I'm just going to fold this down here.
>
> **[2:14](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=134)** It's just a little test CGI script and it imports a couple of things, it puts out a CGI header, which in this case is for the text plane.
>
> **[2:27](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=147)** If we're serving HTML, we'd put out a text/html header and then some text, and that text, you'll notice, is showing up here in our browser.
>
> **[2:41](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=161)** And so, if your output looks something like this, it means that it's working.
>
> **[2:46](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=166)** Of course, your Python version might be different and some of this stuff might be a little different, but if you get an output that looks much like that, that means that this is working.
>
> **[2:57](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=177)** So there's our web server and we're actually going to leave this web server running in this terminal tab for the rest of this chapter and you'll notice that we get little logs here.
>
> **[3:11](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=191)** You'll probably also get a 404 because the negative response was already cached in my browser, we don't see it here, but if I shift-reload from here, you'll see I get this 404, no such CGI script for favorite icon, because all web browsers, all the time, look for that in the root directory of the server so they can display that little icon, which you'll notice is not being displayed in my tab here.
>
> **[3:40](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=220)** All right, so this looks very much like a web server log, and this is the output from our default web server, and we're just going to leave this running for the rest of the chapter.

> [!info]- Semantic Content
>
> **Env Vars:** cgi (6), http (2), html (1)
> **Code Keywords:** module (3), class, (1), switch (1), this, (1)
> **Definitions:** means that (3), is a  (2)
> **File Paths:** webserver.py (1), 9999/cgi-test.py (1), cgi-test.py (1)
> **CLI Commands:** python (3)
> **Code Identifiers:** jurl (2), serve_forever (1)
> **Ports:** port 9999 (1), :9999 (1)
> **Exercise Files:** exercise files (2)

#### Code demonstration
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=0)** - In this movie, we're going to take a look at how the application works.
>
> **[0:04](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=4)** And in the next movie we're going to actually tour the code.
>
> **[0:08](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=8)** For now I'm just going to minimize this terminal.
>
> **[0:11](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=11)** You see I can just hit this minimize and it leaves it running.
>
> **[0:14](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=14)** So the web server is still running and you'll notice this "JURL folder" has got a bunch of things in it.
>
> **[0:20](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=20)** We'll look at these in detail in a little bit.
>
> **[0:23](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=23)** For now we're going to be running this code, but we're not going to run it from inside of PyCharm.
>
> **[0:29](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=29)** We're going to run it in the browser.
>
> **[0:31](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=31)** So here we are in Chrome and this JURL db.PY code.
>
> **[0:38](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=38)** So that's in the JURL folder and it's this db.py code.
>
> **[0:43](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=43)** This is what's running in the browser and it's actually a lot of stuff.
>
> **[0:49](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=49)** Later in this chapter for the challenge, you're going to create a command line version of this.
>
> **[0:55](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=55)** But for now, let's just take a look at how this works.
>
> **[0:58](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=58)** I have a few records in here already.
>
> **[1:00](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=60)** You notice I have a message, "There are 4 records in the database. Add some more!"
>
> **[1:03](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=63)** So we're going to do that. We're going to add one.
>
> **[1:05](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=65)** I'm going to say the target URL (inhales) let's say it's "[google.com](https://google.com)" and my short URL is going to be "ggl".
>
> **[1:16](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=76)** And so I'm going to add the record, and there it is, it says, "Record (ggl) added.
>
> **[1:20](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=80)** There are five records in the database."
>
> **[1:23](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=83)** It's still begging me to add more.
>
> **[1:25](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=85)** Here is ggl and you notice it's underlined, which is a little hard to see on this screen because of the descenders.
>
> **[1:33](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=93)** But what's interesting is when I click on it, you'll notice it's now running jurl.py/ggl.
>
> **[1:45](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=105)** It's sending this redirect, which as I've mentioned before, does not work in this web server.
>
> **[1:51](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=111)** On a normal web server, it would have taken this location, right?
>
> **[1:56](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=116)** I'm just going to copy that and paste it in here, and it would have sent us there.
>
> **[2:03](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=123)** But because of the limitations of the web server that we're using, what we get instead is this redirect on the screen, which isn't really a bad thing, because in actuality, it actually helps us a little bit with the debugging process, so we can actually see what's going on.
>
> **[2:21](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=141)** So it's not that bad of a thing.
>
> **[2:23](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=143)** But in any event, we've added a record.
>
> **[2:26](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=146)** We can edit that record here.
>
> **[2:28](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=148)** We can change the URL.
>
> **[2:30](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=150)** So say maybe I want it to go to images.[google.com](https://google.com) and I can update the record.
>
> **[2:38](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=158)** And now when I click on that, it sends me to images.[google.com](https://google.com), instead of just [google.com](https://google.com).
>
> **[2:45](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=165)** I can also of course delete it.
>
> **[2:47](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=167)** And when I press delete, I get a little confirmation.
>
> **[2:50](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=170)** I say "confirm delete" and the record is gone.
>
> **[2:53](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=173)** So we have the four functions of a CRUD database.
>
> **[2:57](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=177)** We've got create, read, update and delete.
>
> **[3:01](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=181)** All right.
>
> **[3:02](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=182)** So this is what it looks like on the screen.
>
> **[3:04](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=184)** As I mentioned before, there's a number of components to this.
>
> **[3:08](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=188)** There's little HTML files.
>
> **[3:10](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=190)** There's modules that do things like read those HTML files and add variables to them and insert them in to do things like displaying these rows.
>
> **[3:20](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=200)** It's fairly complex.
>
> **[3:22](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=202)** All of the code is here and you can go through this code and learn from it as much as you like.
>
> **[3:27](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=207)** And in the next movie, we're going to take a little tour through the code, not in a lot of detail, but in enough, so that you can see how it's all working.

> [!info]- Semantic Content
>
> **Env Vars:** jurl (3), url (3), html (2), crud (1)
> **Code Keywords:** delete (4), this. (2), let (2)
> **URLs:** [google.com](https://google.com) (4)
> **File Paths:** db.py (2), jurl.py (1)
> **Cross-References:** in the next (2), later in (1)
> **Tools:** terminal (1), pycharm (1), command line (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is a  (1)

#### Touring the code
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=0)** - [Instructor] Let's take a look at how this works.
>
> **[0:02](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=2)** Because it's a web application, it's got a few moving parts that you may not be accustomed to.
>
> **[0:07](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=7)** Here in PyCharm, this is db.py from chapter three of the exercise files, under the JURL folder.
>
> **[0:17](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=17)** And this is the main code that manages this whole web application that you see here in the browser.
>
> **[0:26](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=26)** You notice at the top here, it imports a few libraries.
>
> **[0:29](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=29)** Of course, you're familiar with the BWDB library.
>
> **[0:32](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=32)** BW CGI and BW template and BW config file, these are libraries that I wrote literally 10 years ago or more that manage a few things that you can config, library, managers, a simple config file with names and values, separated by an equal sign.
>
> **[0:54](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=54)** The BWC CGI library manages the CGI connection.
>
> **[0:58](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=58)** It takes care of reading CGI variables from the browser and cookies and headers and a few things like that.
>
> **[1:06](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=66)** The BWTPL for a templating system manages these HTML files.
>
> **[1:13](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=73)** You'll notice, I've got these HTML files here.
>
> **[1:16](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=76)** For example, main.html and you see, they have these tokens in them that have dollar signs around them, like dollar message, dollar error, dollar.
>
> **[1:25](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=85)** It's got a dollar before and after the token.
>
> **[1:28](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=88)** Dollar hiddens, dollar.
>
> **[1:30](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=90)** And these are read and written by this very simple templating system.
>
> **[1:35](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=95)** Again, code that I wrote many years ago.
>
> **[1:38](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=98)** So there's a few moving parts here, but most of it is actually pretty straightforward.
>
> **[1:45](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=105)** Here in the Python code, I've got a dictionary that I use for all of my global variables.
>
> **[1:50](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=110)** A dictionary is basically just a name value database that is kept in memory.
>
> **[1:57](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=117)** And this makes it really easy to keep track of a few values that are shared amongst the entire scope of the file.
>
> **[2:07](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=127)** I've opened up this structure over here on the right.
>
> **[2:11](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=131)** And here I've got an init function, which initializes things that gets the database from the global variables.
>
> **[2:18](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=138)** It sends a header from the CGI module.
>
> **[2:21](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=141)** It gets the variables from the CGI module and it sets a linkback link.
>
> **[2:26](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=146)** The linkback link is very important because every time you do anything on the web, every time you press a button, it actually runs the whole script all over again.
>
> **[2:37](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=157)** And so, the only way to keep context is to have little tokens that go back and forth.
>
> **[2:45](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=165)** And this linkback variable allows it, every time you do this, to again, link back and call this CGI script again.
>
> **[3:00](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=180)** This dispatch function.
>
> **[3:04](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=184)** It's like a jump table.
>
> **[3:06](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=186)** It gets the context from the CGI variables and it knows what button you pressed and where you were, where you're going to and what the action is that you need to take.
>
> **[3:18](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=198)** And then, for each of these different conditions, one of these actions will be taken.
>
> **[3:26](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=206)** Let's see if we can get down to the actions here.
>
> **[3:28](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=208)** There we are.
>
> **[3:30](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=210)** For adding a record into the database, we've got add row here.
>
> **[3:35](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=215)** And then the rest of this is just logic to handle the context and the HTML pages and all of that.
>
> **[3:42](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=222)** Edit, you notice it called set form variables.
>
> **[3:45](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=225)** When I press edit on any of these, all of these fields are informed variables and they have context variables and things that help to keep track of where we are.
>
> **[3:56](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=236)** And once you actually have edited something and you press the update record button, I'm going to press cancel here, but if you press the update record button, then it'll come down here and it'll call update.
>
> **[4:10](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=250)** And that's where the actual update row call into the database library is made.
>
> **[4:15](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=255)** And so, if we go through this, we've got things like delete confirm, which again is just a page.
>
> **[4:22](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=262)** If I select one of these and I say, delete, I get this confirmation page.
>
> **[4:26](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=266)** And again, that's a whole different call to the Python script.
>
> **[4:29](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=269)** For each one of these buttons that we press, it has to call that Python script again and it needs to keep track of its context.
>
> **[4:37](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=277)** It's worth looking also here at list recs, which lists the records on the page and you see that here.
>
> **[4:45](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=285)** Oh, did I go and delete BW?
>
> **[4:47](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=287)** I certainly did.
>
> **[4:48](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=288)** Well, I'm going to put it back here.
>
> **[4:50](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=290)** [HTTPS://bw.org](https://HTTPS://bw.org) and we'll call it BW and we'll add the record and there we are.
>
> **[4:59](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=299)** You'll notice that I'm displaying four here.
>
> **[5:02](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=302)** And you'll notice that I have this next page, previous page and I have this whole thing here, list page bar, which is these links down here, which you're not seeing because we haven't hit.
>
> **[5:13](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=313)** I think I have it set to 10 in my configuration file.
>
> **[5:18](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=318)** So if I come down here into my configuration file, you'll notice my records for page is set to 10.
>
> **[5:23](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=323)** If I set that to three and save that and then we come back out here, you'll notice when I reload this, that's now just showing three and I have a second page.
>
> **[5:35](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=335)** So I can click on that second page and it's actually paging.
>
> **[5:39](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=339)** It's only going to show up to three on a page.
>
> **[5:43](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=343)** And so I have links for end, I have links for each page, like that because I've set that to three.
>
> **[5:49](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=349)** So I'm going to set it back to 10.
>
> **[5:51](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=351)** And there we are.
>
> **[5:54](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=354)** And all of this is managed here in list recs and in list page bar.
>
> **[6:01](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=361)** We have a bunch of HTML files.
>
> **[6:03](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=363)** I showed you main dot HTML.
>
> **[6:04](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=364)** And again, let me just make some room here, so you can see this again.
>
> **[6:10](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=370)** I wrote all this HTML many, many years ago.
>
> **[6:12](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=372)** It's all good HTML, but it's ten-year-old HTML from when we all thought that XHTML was going to be the big thing.
>
> **[6:20](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=380)** There's very little JavaScript in here.
>
> **[6:22](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=382)** Just this one set, the focus, so that the first time you come in here and I'm just going to get rid of these.
>
> **[6:31](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=391)** So the first time you come in here, it automatically sets the focus.
>
> **[6:34](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=394)** It puts the cursor in that field.
>
> **[6:36](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=396)** That's really the only thing I'm using any JavaScript for here, everything else is just done in HTML.
>
> **[6:43](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=403)** We have this edit HTML, which is used by several different things in the system, but this is the form.
>
> **[6:52](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=412)** I mean, if I say edit here or add a record, you're going to get this form that has the fields in it for updating and adding and deleting the record.
>
> **[7:02](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=422)** There's simple headers and footers to set up the HTML.
>
> **[7:05](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=425)** And a footer with the copyright information and such.
>
> **[7:10](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=430)** And you see that here, you know, here's the footer.
>
> **[7:13](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=433)** The header doesn't have anything to display.
>
> **[7:16](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=436)** Well, it does have the title and a few things like that.
>
> **[7:21](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=441)** But that's basically it.
>
> **[7:22](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=442)** All the formatting is done in CSS.
>
> **[7:24](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=444)** And here's the CSS.
>
> **[7:25](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=445)** Again, this is very old, but it works and it looks for something that's designed by a programmer.
>
> **[7:32](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=452)** It's pretty functional and it looks pretty decent.
>
> **[7:36](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=456)** I'm happy with it.
>
> **[7:37](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=457)** So this is the gist of the system.
>
> **[7:39](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=459)** And as you can see, it requires cooperation between a number of different related technologies.
>
> **[7:44](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=464)** You've got HTML, you've got CSS, you've got Python, of course, you've got SQL, little bit of Java script, all of these different technologies working together.
>
> **[7:53](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=473)** And all of that is really just about making it look pretty.
>
> **[7:57](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=477)** Perhaps a little more accessible to administrators.
>
> **[7:59](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=479)** And for my purposes, if I were doing this again today, I would just make a simple command line program.
>
> **[8:06](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=486)** And that's exactly what we're going to do for our challenge in the next movie.

> [!info]- Semantic Content
>
> **Env Vars:** html (12), cgi (8), css (3), jurl (1), bwdb (1)
> **Code Keywords:** let (3), this, (3), delete (3), function (2), module (2)
> **CLI Commands:** python (4), make (2)
> **File Paths:** db.py (1), main.html (1)
> **Tools:** pycharm (1), command line (1)
> **Exercise Files:** exercise files (1), template (1)
> **Analogies:** for example (1), it's like (1)
> **URLs:** [https://bw.org](https://bw.org) (1)

#### Challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/challenge?u=76281980&t=0)** - [Instructor] The challenge for this chapter is to create a command-line script to manage our short URL database.
>
> **[0:12](https://www.linkedin.com/learning/using-sql-with-python/challenge?u=76281980&t=12)** If you did the challenge for the crud class in the previous chapter, this should be fairly simple for you.
>
> **[0:18](https://www.linkedin.com/learning/using-sql-with-python/challenge?u=76281980&t=18)** I wrote this web-based interface many years ago and it's certainly convenient and I still use it to this day, but if I were writing it today, I'd probably just write a simple command-line script.
>
> **[0:29](https://www.linkedin.com/learning/using-sql-with-python/challenge?u=76281980&t=29)** This challenge should take you about 15 to 30 minutes.
>
> **[0:33](https://www.linkedin.com/learning/using-sql-with-python/challenge?u=76281980&t=33)** I'll show you my solution in the next lesson.

> [!info]- Semantic Content
>
> **Cross-References:** previous chapter (1), in the next (1)
> **Code Keywords:** interface (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=0)** - Let's take a look at my solution for the challenge.
>
> **[0:07](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=7)** Keep in mind that your solution may be different and that's fine.
>
> **[0:11](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=11)** This is zero three solution.py from chapter three of the exercise files.
>
> **[0:16](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=16)** And you'll notice that this solution looks very much like my solution for the previous challenge.
>
> **[0:22](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=22)** In this case, there's no need to create or destroy a table.
>
> **[0:25](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=25)** You notice that I'm initializing the database with dot slash data slash JURL dot db.
>
> **[0:33](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=33)** That's the database for our jump URL application.
>
> **[0:38](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=38)** I have a simple menu, add, find, edit, list, delete and quit.
>
> **[0:44](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=44)** And if I go ahead and run this, you see that this works just like our other cred application.
>
> **[0:52](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=52)** In fact, most cred applications work pretty much the same, don't they?
>
> **[0:56](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=56)** And so I can list domains.
>
> **[0:58](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=58)** You see we have the same domains that we had in our web interface.
>
> **[1:02](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=62)** I can add a domain, the short name, we'll call this one GGL for Google.
>
> **[1:08](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=68)** And I'll put HTTPS colon slash slash [google.com](https://google.com) and it's added the row.
>
> **[1:16](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=76)** And now when I list them, you'll see that it's got that fifth row in it.
>
> **[1:20](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=80)** I can add a domain, I can edit the record for GGL and it found it.
>
> **[1:26](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=86)** And I can change it if I want to, to say images.[google.com](https://google.com).
>
> **[1:35](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=95)** And there it is, it's updated.
>
> **[1:36](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=96)** I can list them again and there it is in our database.
>
> **[1:40](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=100)** I can find one if I want, I can search for SQL, there's my SQL link.
>
> **[1:45](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=105)** And I can delete one if I want, I'll delete GGL and I'll say yes, and it deletes it and I can list them and there they are.
>
> **[1:54](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=114)** I press Q to quit and we've quit.
>
> **[2:00](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=120)** So we've got do menu, which is very simple.
>
> **[2:03](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=123)** We've got our jump table, very simple, add rec, this is all very much like we've seen before.
>
> **[2:11](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=131)** Find rec, edit rec, list recs, delete rec, and main.
>
> **[2:20](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=140)** I do actually have a create table statement, but I don't have a destroy table.
>
> **[2:25](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=145)** So I hope you found this challenge useful.
>
> **[2:28](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=148)** You can see it's a whole lot simpler than that whole complex web based thing.
>
> **[2:33](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=153)** Feel free to play around with it, make it work for another database system.
>
> **[2:37](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=157)** Add features.
>
> **[2:38](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=158)** Experimenting is always valuable.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (4), let (1), case, (1), this, (1), interface (1)
> **Env Vars:** ggl (3), sql (2), jurl (1), url (1), https (1)
> **CLI Commands:** find (3), make (1)
> **URLs:** [google.com](https://google.com) (2)
> **File Paths:** solution.py (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Warnings:** keep in mind (1)


### 5. Conclusion

#### Thank you
> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python/thank-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/thank-you?u=76281980&t=0)** - [Bill] In this course, my goal was to give you a good understanding of how to use SQL with Python.
>
> **[0:06](https://www.linkedin.com/learning/using-sql-with-python/thank-you?u=76281980&t=6)** I've shown you how to connect to a database, how to submit queries, including adding, editing, and deleting data, and how to read from a database.
>
> **[0:15](https://www.linkedin.com/learning/using-sql-with-python/thank-you?u=76281980&t=15)** You've seen examples of common use cases, including libraries for interacting with simple SQL queries and creating a custom creditor phase.
>
> **[0:26](https://www.linkedin.com/learning/using-sql-with-python/thank-you?u=76281980&t=26)** I suggest you experiment a lot with the example code.
>
> **[0:29](https://www.linkedin.com/learning/using-sql-with-python/thank-you?u=76281980&t=29)** Tear it apart, break it, expand it, learn from it.
>
> **[0:33](https://www.linkedin.com/learning/using-sql-with-python/thank-you?u=76281980&t=33)** Python is a rich and powerful environment for working with databases.
>
> **[0:37](https://www.linkedin.com/learning/using-sql-with-python/thank-you?u=76281980&t=37)** Take full advantage.
>
> **[0:39](https://www.linkedin.com/learning/using-sql-with-python/thank-you?u=76281980&t=39)** I hope this course has helped you to gain a deeper understanding of how to use SQL in Python and I look forward to seeing what you create with your own applications.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3)
> **Env Vars:** sql (3)
> **Definitions:** is a  (1)
> **Speakers:** - [bill] (1)


## Instructor

- [[Bill Weinman]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- SQL

## Path Context

### In [[Advance Your Skills in SQL]]
← [[Data Analysis- Investigate with SQL]] | **4 of 5** | [[Hands-On SQL Challenges- Test Your Knowledge]] →

## Appears In

- [[Advance Your Skills in SQL]]

## Related Courses

_Courses sharing skills:_

- [[ETL in Python and SQL]] — Python (Programming Language), SQL
- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL

---

[↑ Back to top](#)