---
type: course
slug: php-object-oriented-programming-with-databases
url: "https://www.linkedin.com/learning/php-object-oriented-programming-with-databases"
duration_minutes: 244
duration: 4h 4m
level: Intermediate
updated: 1/30/2018
learners: 75878
skills:
  - PHP
exercise_files: true
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/php
status: not-started
created: 2026-04-17
---

# PHP: Object-Oriented Programming with Databases

> Learn how to interact with databases using object-oriented PHP code. In this intermediate course, Kevin Skoglund teaches powerful PHP techniques that streamline interactions with MySQL databases. PHP developers will benefit from the efficient, well-organized, reusable, and easy-to-understand code that object-oriented programming (OOP) offers. Kevin shows how OOP techniques can optimize database qu

> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases) | 4h 4m | Intermediate | 76K learners

## Instructor

- [[Kevin Skoglund]]

## Resources

- Exercise files available

## Skills Covered

- PHP

## Table of Contents

### Introduction

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/welcome?u=76281980&t=0)** - [Kevin] Welcome to PHP Object-Oriented Programming with Databases.
>
> **[0:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/welcome?u=76281980&t=4)** My name is Kevin Skoglund and I'm excited to teach you how to use PHP's object-oriented programming techniques to work with databases.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/welcome?u=76281980&t=12)** In this course we will learn the object-oriented syntax for PHP's built-in MySQL adapter.
>
> **[0:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/welcome?u=76281980&t=20)** We will learn about the active record design pattern and use it to create objects and database rows which interact seamlessly, and we'll build a content management system to make it easy to create, read, update, and delete records using HTML pages and forms.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/welcome?u=76281980&t=36)** We'll use object-oriented techniques to implement user authentication so that only administrators with a valid username and password will be able to access and update records and we'll break up tables which has many records into pages by using a pagination class to simplify handling of the variables, calculation, and links that we need to display for the user.
>
> **[1:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/welcome?u=76281980&t=60)** This is an intermediate course which will assume that you already know the basics of PHP.
>
> **[1:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/welcome?u=76281980&t=65)** If you need to review your skills, PHP Essential Training, PHP with MySQL Essential Training parts one and two, and PHP Object-Oriented Programming will prepare you with everything you need to know for this course.
>
> **[1:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/welcome?u=76281980&t=78)** Once you're ready, let's get started learning PHP Object-Oriented Programming with Databases.

> [!info]- Semantic Content
>
> **CLI Commands:** php (8), mysql (2), make (1)
> **Env Vars:** php (8), html (1)
> **Code Keywords:** delete (1), let (1)
> **Definitions:** is an  (1)
> **Speakers:** - [kevin] (1)

#### How to use the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=0)** - [Narrator] This course includes exercise files in order to make use of these exercise files you'll want to first make sure that you have PHP and Mysql installed and working.
>
> **[0:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=10)** The exercise files are arranged by chapter and by movie and you can find the exercise files that correspond to the movie that you're watching by first looking for the chapter number and then the movie number.
>
> **[0:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=22)** You should copy the exercise files into your web document root directory.
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=26)** That is the location where your web server will look for files when a browser requests them.
>
> **[0:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=31)** On my Mac that will be inside my User Directory in my Sites Directory.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=36)** It's always a good idea to make a copy of the exercise files so that you still have the original to refer back to if you make changes.
>
> **[0:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=42)** I will option drag files into my Sites Directory to create a new copy.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=48)** Our project will also use a database and for the exercise files to work, your database needs to match what the files expect.
>
> **[0:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=54)** In many of the exercise files you will find a database file that you can load into Mysql to put your database into the same state as mine.
>
> **[1:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=63)** If you don't already have a database, the first few movies of chapter one will get you started.
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=68)** You can load that file directly into a MySQL database either by using a tool such as PHP My Admin or by going to a command line application and typing Mysql-u and then root for the root user or another user that has privileges on the database.
>
> **[1:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=86)** We'll use -p to say we want to provide our password and the name of the database.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=92)** In this case it will be Chain gang.
>
> **[1:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=94)** And then we'll use a less than sign followed by the path to the SQL file.
>
> **[1:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=100)** If you're on a Mac, you may just be able to drag the file into the directory to avoid having to type it all out.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=107)** Once we hit return it will ask for my password and now my database should be in the correct state.
>
> **[1:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=112)** Note that the import will remove all old database data at the same time as it imports new data.
>
> **[1:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=119)** Importing can also be useful if you do a lot of experimenting on your own but then want to get your data back in sync with mine.
>
> **[2:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=126)** Once you have the files in place you'll be able to follow along with me.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=129)** Everything that is in the exercise files we're going to create together during the tutorials so you can just work along with me and your files will mirror what's in the exercise files.
>
> **[2:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=138)** Remember that you can pause the video or rewind it if you need more time to copy something down.
>
> **[2:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/how-to-use-the-exercise-files?u=76281980&t=144)** You can also use the exercise files to check your work or to get back in sync if you decide to experiment on your own.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), mysql (4), php (2), find (2)
> **Exercise Files:** exercise files (11)
> **Env Vars:** php (2), sql (1)
> **Tools:** command line (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=0)** - [Narrator] There are a few things that you need to know before you start taking this course.
>
> **[0:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=5)** The first is that there are several prerequisites.
>
> **[0:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=8)** You want to make sure that you understand the fundamentals of working with the PHP language.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=13)** I cover these fundamentals in my course, 'PHP: An Essential Training.'
>
> **[0:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=17)** You also should be able to use PHP to connect to and interact with a MySQL database, as we demonstrate in 'PHP with MySQL Essential Training.'
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=26)** That is, you're able to connect to the database, to create records, to read records, to update them, and to delete them.
>
> **[0:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=33)** And, you also should already have the fundamentals of working with PHP in an object-oriented way.
>
> **[0:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=40)** I covered these concepts in 'PHP: Object-Oriented Programming,' and you can refer back to that if you need some extra help.
>
> **[0:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=47)** You don't have to take these exact courses, but you should be fluent in all of the concepts that are there, because this course is going to merge those concepts, the concepts of working with PHP and a database, along with the concepts of working with PHP in an object-oriented way.
>
> **[1:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=63)** And that's going to be very powerful, because object-oriented programming is going to offer us many benefits when we're working with databases, and that's what we want to explore in this course.
>
> **[1:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=73)** There are also some preparations you should have in advance, you should make sure that you have a web server that's running, you should be able to identify your web document root, that is the place that you can put your files so that your web server will serve them out to you, you should ensure that PHP is installed and working.
>
> **[1:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=88)** I'm going to be using PHP version 7, and you should either have that version or something later than that.
>
> **[1:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=94)** And you should ensure that MySQL is installed and working.
>
> **[1:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=97)** And of course, you'll need a web browser, and text editor.
>
> **[1:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=100)** I'm going to be using Firefox and the Atom text editor for myself.
>
> **[1:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=105)** For me, my web document root is going to be inside my user directory, and inside my sites directory.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=110)** So that's where I'm going to be putting my project files.
>
> **[1:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=113)** One good way to confirm that you have a web server, and PHP running, that you correctly identified your web document root, is to put a test file into this directory and make sure that it loads up and runs PHP.
>
> **[2:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=124)** So I'm going to do that by opening up the Atom text editor, and I'll just put in a little bit of PHP here, with a special PHP function, PHP info, and then I'll close my PHP tags.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=134)** And I'm going to save that, into that sites directory.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=137)** I'm just going to call it 'my_phpinfo.php.'
>
> **[2:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=143)** And now I can actually close that up, I don't need that anymore, you can see that it's here inside that sites directory, and then I'll go into a web browser and I'll load up 'localhost,' and for me it's going to be '~kevinskoglund.'
>
> **[2:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=157)** You may not have that portion that you have to add, you might just be able to type 'localhost,' and then for my web document root, I'll type 'my_phpinfo.php.'
>
> **[2:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=168)** You should get back a page of info about PHP, and it should say that you're running PHP version 7, or something later.
>
> **[2:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=176)** Now that I know that I have all of that running, let's also confirm that we have MySQL running, I can go to the command line, and I can type 'mysql --version,' and it'll tell me that I have my MySQL version 5.7, that version or anything later is fine.
>
> **[3:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=190)** The versions don't matter as much with MySQL.
>
> **[3:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=193)** And then, I can actually log into it with 'mysql -u' as the root user, with ' -p' option to provide the password, and I should be able to enter my password here, and then I can log in.
>
> **[3:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=206)** Now I'm inside MySQL, ready to create a new database.
>
> **[3:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=210)** When we're done with that, we can simply type 'quit.'
>
> **[3:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/what-you-need-to-know?u=76281980&t=213)** Once you've confirmed that you've met all the prerequisites, and you have all the parts that you need, you'll be ready to learn PHP object-oriented programming with databases.

> [!info]- Semantic Content
>
> **CLI Commands:** php (21), mysql (9), make (3)
> **Env Vars:** php (19)
> **Tools:** atom (2), firefox (1), command line (1)
> **Code Keywords:** delete (1), function (1), let (1)
> **Versions:** version 7 (2), version 5 (1)
> **File Paths:** my_phpinfo.php (2)
> **Code Identifiers:** my_phpinfo (2)
> **UI Navigation:** go to (1)


### 1. Overview and Project Setup

#### Project overview
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=0)** - [Narrator] Let's begin by getting an overview of the project that we're going to be working on throughout this course.
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=6)** The project is going to be a website called chain gang.
>
> **[0:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=10)** It's a PHP website for a used bicycle store.
>
> **[0:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=14)** If you took the PHP object oriented programming course then this project is going to look very familiar because it's the same project that we were working on in that course.
>
> **[0:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=23)** In fact, the code at the beginning of this course is going to be exactly the code that we ended with at the end of that course.
>
> **[0:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=30)** But we're going to be making some changes and improvements to it.
>
> **[0:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=34)** At the end of the last course where we left things off was that the chain gang website is displaying an inventory of used bicycles by looking at a flat file.
>
> **[0:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=43)** A simple text file.
>
> **[0:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=45)** And instead we will now want to convert that so it's using a database to store the inventory of bicycles instead.
>
> **[0:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=51)** But we're not going to stop there.
>
> **[0:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=52)** We're also going to add a full content management system with user authentication.
>
> **[0:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=58)** This will allow the staff at the bicycle store to login with their username and password and then manage the inventory.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=64)** They can add new bicycles, edit bicycles, delete bicycles, and so on.
>
> **[1:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=70)** And we'll see how to use the power of object oriented programming to interact with the database while we do it.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=75)** Lets take a look at the project in it's current state.
>
> **[1:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=78)** So this is the public Chain Gang website.
>
> **[1:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=80)** There is no staff area yet, we're going to have to create that.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=84)** For now, there's a basic homepage, there's an about us page which has some simple information on it, but most of the public functionality is in this bicycle inventory.
>
> **[1:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=93)** If you go here you'll see that it's listing off a bunch of used bicycles as a table.
>
> **[1:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=98)** And it's reading those from a flat file.
>
> **[1:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=100)** A comma separated value file.
>
> **[1:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=103)** That approach might have worked well when Chain Gang was small, but now that they've started to grow, they want to have something that's more full featured that will allow them more flexibility.
>
> **[1:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=112)** And so it's time for them to graduate from just using a simple strategy like a flat file to something that supports some more complexity like a database.
>
> **[2:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-overview?u=76281980&t=121)** So lets start that process in the next movie by creating the initial project database that we'll need.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), let (1), delete (1)
> **CLI Commands:** php (2)
> **Env Vars:** php (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### Create a project database
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=0)** - In this movie, we will create the MySQL database that our project is going to use to store its data.
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=6)** There are three MySQL commands we'll be using.
>
> **[0:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=8)** The first is to create the database using CREATE DATABASE and then the name of the database.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=12)** I'm going to call it chain_gang.
>
> **[0:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=15)** Second, we want to make sure that we have a user that has the ability to access that database.
>
> **[0:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=20)** Now, by default, our root MySQL user has access to all of the databases, but it's a much better security practice for us to create a new user that our application can use, instead of using that root user.
>
> **[0:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=33)** That root user's just simply too powerful, and can do too much damage to our database.
>
> **[0:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=37)** So, we're going to create a new user called webuser and give it privileges.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=41)** So I do that with GRANT ALL PRIVILEGES ON, and then I have the database name, followed by a period and an asterisk.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=48)** That's a shorthand for all tables on the chain_gang database, and I'm going to assign those to the webuser at localhost.
>
> **[0:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=56)** Using localhost ensures that connections can only be made from the local computer, not from some remote IP address somewhere else.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=64)** And then, IDENTIFIED BY and the password you want to use.
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=68)** I'm using secretpassword.
>
> **[1:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=69)** I hope that you'll choose something much better because that's not a very good password.
>
> **[1:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=73)** And then, finally, once we've done that, we can actually choose to use our newly created database by typing USE and then the database name, chain_gang.
>
> **[1:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=82)** Let's try these three out.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=84)** So, from our command line, I'm going to go into MySQL.
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=87)** I'm going to do that using my root user to begin with.
>
> **[1:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=90)** I'm not going to use my web app user to do this; I want my root user that has all of the powers and privileges to create new databases.
>
> **[1:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=97)** So I'll log in with that password, and once I'm inside, then I can CREATE DATABASE chain_gang.
>
> **[1:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=109)** Okay, it says it created the database.
>
> **[1:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=111)** We can actually confirm that with SHOW DATABASES.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=115)** We'll see a few of the basic databases that MySQL needs, but we'll most importantly see that database there, chain_gang, so we know it was created.
>
> **[2:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=123)** So now, let's grant privileges on it.
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=125)** So we'll do that with GRANT ALL PRIVILEGES, make sure you spell that right, ON chain_gang.*, because we want all tables.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=137)** And then you can go to a new line here, or you can just keep typing, it doesn't matter.
>
> **[2:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=141)** Space, webuser@localhost, and then another space, go ahead and go to a new line here, IDENTIFIED BY and then secretpassword will be mine, but hopefully you'll choose something better.
>
> **[2:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=159)** And then the semicolon at the end lets it know that the command is done.
>
> **[2:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=163)** Now we have privileges for our webuser, which is great, now we'll be able to log in as the webuser from our PHP code.
>
> **[2:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=170)** And then, last of all, let's type USE chain_gang.
>
> **[2:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-project-database?u=76281980&t=176)** And that will actually switch to the database, so now we can issue all of our commands directly to that database from the command line.

> [!info]- Semantic Content
>
> **Env Vars:** create (2), database (2), grant (2), privileges (2), identified (2)
> **CLI Commands:** mysql (5), make (2), php (1)
> **Code Keywords:** let (3), default, (1), else. (1), finally, (1), this; (1)
> **Code Identifiers:** chain_gang (7)
> **UI Navigation:** go to (2), switch to (1)
> **Tools:** command line (2)
> **Speakers:** - in (1)

#### Create a database table
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=0)** - [Instructor] Now that we have a database and we have a user that has the ability to access that database from our application, we're ready to create a database table that's going to store the data about the different bicycles that the chain gang bicycle shop is going to be selling.
>
> **[0:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=15)** To do that, we'll need to create a new table, using the SQl syntax.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=19)** So this is what the table structure is going to look like.
>
> **[0:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=22)** We're going to have a number of different attributes, beginning with ID.
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=26)** Every record is going to have an auto incrementing ID, that's going to be its primary key.
>
> **[0:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=30)** And then we're going to have columns that correspond to the data that we saw in the table for each bicycle.
>
> **[0:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=35)** So we'll have brand, model, year, category, gender, color, price, weight_kg for kilograms, condition_ID, and description.
>
> **[0:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=45)** Now I know this is a lot of typing.
>
> **[0:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=47)** So rather than having to type all of this in, I've provided you with a couple of snippets in the exercise files that you can use to save yourself some time.
>
> **[0:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=57)** So if you open up create_table_bicycles.sql, you'll see that you get that same SQL.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=64)** And then there's also another one right here, which is insert bicycles.sql, and it has a bit of data that we can insert after we create the tables, so that you'll have a couple of bicycles in the database ready to go.
>
> **[1:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=78)** So let's switch to the first one of these.
>
> **[1:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=80)** And let's just copy and paste all of that into the My SQL terminal.
>
> **[1:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=85)** So I've created my new table bicycles.
>
> **[1:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=88)** I can type show tables and I can now see that that table is there.
>
> **[1:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=94)** And I can say show fields from bicycles to actually see the list of columns that we have.
>
> **[1:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=104)** Now that we have our table there, let's go ahead and populate it with some initial data.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=108)** So I'm going to insert some bicycles.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=110)** I'll copy that and let's just go back into the My SQL terminal and paste those both in.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=115)** So that should have created two bicycles for us, and we can check that those are there using SQL's select statements.
>
> **[2:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=121)** Select all from bicycles, and you'll see we get back a long table that just has all the different values that we just input.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=129)** So now we know that we have two different bicycles in the database.
>
> **[2:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=133)** The first one has ID of number one, it's Trek Emonda 2017.
>
> **[2:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=138)** The second one has ID at number two, it's a Cannondale Synapse 2016.
>
> **[2:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=144)** You can feel free to put in other data if you want.
>
> **[2:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=146)** I just wanted to make sure that we had some initial data in our database so that we can work on reading that data back.
>
> **[2:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=152)** Once we've got our database, our table, and some data in it, we're done with My SQL command line for now.
>
> **[2:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-database-table?u=76281980&t=159)** You can go ahead and exit out of it, because from now on, we're going to be working with our database from PHP.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5), php (1)
> **Code Keywords:** let (4), switch (1)
> **Tools:** terminal (2), command line (1)
> **File Paths:** create_table_bicycles.sql (1), bicycles.sql (1)
> **CLI Commands:** make (1), php (1)
> **Code Identifiers:** weight_kg (1), create_table_bicycles (1)
> **UI Navigation:** switch to (1)
> **Exercise Files:** exercise files (1)

#### Project files
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=0)** - [Instructor] Now that we have our database squared away, we're ready to start working with the actual PHP code that we're going to be using.
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=6)** And we have some initial starter project files that we'll be working with.
>
> **[0:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=10)** As I said earlier, these project files are the exact same ending state from the PHP object oriented programming class.
>
> **[0:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=18)** So if you finished that class and you still have those files, you can use those.
>
> **[0:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=22)** If not, I've provided that same set of files in the exercise files for this course.
>
> **[0:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=27)** And you can simply grab that folder and drag it into your web document route directory.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=32)** I'm going to take that folder now and open it up inside my text editor so that we can look at it in project view.
>
> **[0:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=38)** Let's take a look at how it's structured and review a few points.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=41)** First, you'll notice that there are two main directories: private and public.
>
> **[0:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=46)** And you'll remember that the fundamental idea is that when we actually launch this, on a production server, we're going to tell the web server to serve files from the public directory.
>
> **[0:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=55)** That will be its web document route directory.
>
> **[0:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=57)** That means that users won't be able to use their browser and navigate anything that's in the private directory.
>
> **[1:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=63)** But our code will be able to access it, because we have access to the file system.
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=68)** So, for example, as a starter point, the user would come to the homepage of the website, which is index.php.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=75)** The first thing that the index.php page does is it navigates the file system to go into that private directory and call initialized.php.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=84)** All of the pages are going to work in a similar way.
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=87)** It's also going to load in some shared header and footer information, and that header is actually going to load in some style sheets, and there's going to be some images that we're going to use throughout the site as well that are stored in the image directory.
>
> **[1:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=98)** Let's take a look in that private directory at this initialize file, initialize.php.
>
> **[1:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=105)** Here it is.
>
> **[1:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=106)** You'll see that it turns on output buffering at the start.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=108)** We're establishing a few convenience constants that we can use to navigate in the file system.
>
> **[1:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=114)** And it's figuring out what the root url ought to be, so it can assign it as a php constant.
>
> **[2:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=120)** You can either hard code this value, or you can find it dynamically like I'm doing here.
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=125)** And once I've done that, I'm going to load in the functions.php page, which is some default functions that we'll be using.
>
> **[2:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=131)** Let's take a quick look over there.
>
> **[2:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=132)** You'll see it just contains some basic functions to make life easier for us.
>
> **[2:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=136)** And then after that you'll see that we're loading in the class definitions that are in our classes directory.
>
> **[2:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=143)** And we have an auto load declared, that can also load classes which don't get loaded automatically.
>
> **[2:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=148)** So we can either load them all at one time, by loading them all, or we can have auto load do it for us.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=154)** We talked about that in the previous course.
>
> **[2:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=156)** So once we've fired up this initialized.php, everything should be ready to go.
>
> **[2:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=160)** And the page should have everything that it needs to finish working from there on.
>
> **[2:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=166)** So let's close those up, and now let's take a look at this bicycle class.php.
>
> **[2:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=171)** We spent a lot of time in the previous course building this bicycle class, and learning how to work with the different properties that are declared up here, and the different methods that we've defined down here.
>
> **[3:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=181)** This is the exact same class definition that we were working with there.
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=185)** If we take a look at bicycles.php, you'll see that it's displaying a list of these bicycles and it's doing it by creating a new bicycle.
>
> **[3:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=194)** But the way it gets the data for each of these bicycles is by looking at this CSV file that's declared right here.
>
> **[3:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=200)** Usedbicycles.csv.
>
> **[3:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=202)** If we open that up, you can see it just has comma separated values.
>
> **[3:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=205)** This CSV file contains the data that's currently being displayed on the website for each of these bicycles.
>
> **[3:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=211)** It's how that table of bicycles is being generated.
>
> **[3:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=214)** Our primary goal in this course is to switch from using this CSV file to instead using a database.
>
> **[3:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=221)** Let's go back to that bicycles.php and you'll see that we created a special class called parse.csv, which is store here, which is what allows us to parse that CSV file and then come up with an array of the properties and take those properties and pass them in to creating a new bicycle so that we can then display each one.
>
> **[3:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/project-files?u=76281980&t=239)** So our goal is to modify this process, so that it no longer uses parse.csv and the CSV file and instead reaches out to the My SQL database to retrieve its data from there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), private (4), class. (2), public (2), this, (1)
> **CLI Commands:** php (12), find (1), make (1)
> **File Paths:** index.php (2), initialized.php (2), bicycles.php (2), parse.csv (2), initialize.php (1)
> **Env Vars:** csv (5), php (2), sql (1)
> **Cross-References:** we talked about (1), go back to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)


### 2. The Database Connection

#### Database credentials
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=0)** - [Instructor] In this chapter we're going to learn how to use object-oriented code to connect and to query the database.
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=6)** If we're going to use a database then our application's going to need to know about our database credentials so that it can log out.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=12)** Let's start by providing those to our application.
>
> **[0:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=15)** So let's start by creating a new file inside the private directory.
>
> **[0:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=22)** And I'm going to call that file db_credentials.php.
>
> **[0:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=29)** And let's start out by just opening our PHP tags.
>
> **[0:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=33)** We'll close them, and let's start by adding a comment here to the top.
>
> **[0:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=37)** I'm going to have keep database credentials in a separate file.
>
> **[0:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=45)** And the reason why we want to do that is one, it's easy to exclude this file from source code managers.
>
> **[0:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=55)** The second reason is because it allows us to have unique credentials on development and production servers.
>
> **[1:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=66)** And also if we're working with multiple developers it allows us to have unique credentials for each of those developers.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=75)** Misspelled multiple there.
>
> **[1:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=77)** There we go.
>
> **[1:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=78)** So that's just a reminder why we want to keep these in a separate file.
>
> **[1:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=81)** This gives us one file and then we can just exclude that file, everyone can have a unique version of it.
>
> **[1:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=86)** Everything else in the application can be identical; it's just this one file that has to be different.
>
> **[1:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=91)** Okay, so now let's get about the business of actually setting those values so we can use them.
>
> **[1:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=96)** I'm going to do that by setting some constants.
>
> **[1:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=99)** DB_SERVER is going to be the first one, and I'm just going to be connecting from local host.
>
> **[1:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=104)** If we were connecting remotely that would be an IP address.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=107)** And then define db user, and that's going to be the user that I created that has access to the MySQL table.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=115)** For me that was webuser.
>
> **[1:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=117)** And let's define another one for db pass, which is going to be the password that we used.
>
> **[2:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=124)** Mine was secretpassword.
>
> **[2:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=126)** Yours hopefully was something different and better.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=129)** And then define db name, and that's the name of the database that we want to connect to, which is just chain_gang.
>
> **[2:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=140)** Okay, so there it is.
>
> **[2:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=141)** I now have defined these four constants, and then I'll be able to use them globally throughout my application.
>
> **[2:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=147)** So let's save that and let's make sure now that that file gets loaded.
>
> **[2:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=151)** So to do that we'll need to go to initialize.php.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=154)** And right here we have require once functions.
>
> **[2:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=157)** Let's just add another line, require once, and then db credentials.php.
>
> **[2:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=167)** And that's it; that's all there is to it.
>
> **[2:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/database-credentials?u=76281980&t=168)** Now our application will load up our database credentials and make sure that they're available to us so that we can use them to connect to the database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), require (2), private (1), pass (1)
> **CLI Commands:** php (4), make (2), mysql (1)
> **File Paths:** db_credentials.php (1), initialize.php (1), credentials.php (1)
> **Code Identifiers:** db_credentials (1), chain_gang (1)
> **Env Vars:** php (1), db_server (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### Connect to the database
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=0)** - [Instructor] Now that we have our database credentials installed, let's see how we connect to the database using object-oriented programming.
>
> **[0:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=7)** First, let's begin by reviewing the procedural version which we've used to connect to the databases with PHP up until now.
>
> **[0:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=15)** To do that, we used a function called mysqli_connect and we passed in several arguments for the server, the user, the password, and the database name.
>
> **[0:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=24)** That function returns back a database handle which can then be used to connect to the database in the future.
>
> **[0:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=31)** It opens up a connection and we're able to then work with that connection going forward.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=36)** So for example if we want to query the database, we can call another function mysqli_query.
>
> **[0:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=42)** We pass in that database handle as well as the SQL that we want to query.
>
> **[0:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=47)** This is a procedural style.
>
> **[0:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=49)** There's no object-oriented programming here, and we're just calling basic PHP functions.
>
> **[0:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=54)** The mysqli adapter also has an object-oriented version as well as the procedural version.
>
> **[1:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=61)** In order to create a new database connection, you create a new mysqli object and you do that by using the new keyword, followed by mysqli, and then passing in those same arguments for server, user, password, and database name.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=75)** Instead of simply getting back a database handle, it's actually an object and that allows us to work with that database object in an object-oriented way, which means that we can call properties and methods on that object.
>
> **[1:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=89)** So for example if we want to perform a query, we can call the query method on that object.
>
> **[1:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=95)** So I have my database connection, I use my arrow notation, followed by the name query for the method, and then in parenthesis the SQL that I want to pass in.
>
> **[1:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=104)** Notice the parallel structure between the two of these.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=107)** They are similar, but there are some important differences.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=110)** One critical difference is the fact that in the procedural style, we're constantly having to pass this database connection in as one of the arguments.
>
> **[1:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=119)** In the object-oriented style, we don't have to do that.
>
> **[2:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=121)** The object already knows what its connection is.
>
> **[2:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=124)** We've already identified if this is the connection that we're using, we just want to perform a query on that connection.
>
> **[2:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=130)** Let's try adding this to our application.
>
> **[2:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=133)** There are a number of different places where we could create this database connection, but I'm going to do it at the bottom of initialize so that way I'll be able to have a database connection from anywhere inside my program.
>
> **[2:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=143)** If I call initialize, I'll have that database connection available.
>
> **[2:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=147)** So again, we do that by saying new mysqli, that's all lowercase, most of the time when we work with objects in classes they tend to be uppercase, this is actually all lowercase, and then we want to provide those values from our credentials, DB_SERVER, DB_USER, DB_PASS, and DB_NAME.
>
> **[2:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=174)** Okay, so that will create the connection for me and it will assign it to this variable database.
>
> **[2:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=179)** So from then on, I can work with this database.
>
> **[3:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=182)** Now, that does it for me, that does the job, but I want to make a slightly improved version of this that allows us to perform some error checking as well so that if for some reason this connection isn't created correctly, we can display an error that the user is able to see.
>
> **[3:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=197)** So to do that, I'm actually going to create a new file and I'm going to call it database_functions.php.
>
> **[3:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=209)** And inside that file, I'm going to define a couple of functions.
>
> **[3:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=213)** The first one, let's go back over to initialize.php and I'll just copy this as a starting point, database functions, I'm going to create a function called db_connect and inside there we'll just put that first line.
>
> **[3:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=229)** It's just going to connect the database.
>
> **[3:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=230)** And I'm going to change this so instead of database, I'm just going to call it connection.
>
> **[3:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=235)** And then I'm going to have another function here, this is a procedural function but that's okay, called db_connect, confirm_db_connect, and I'm going to pass in that connection and that's just going to confirm that it's there.
>
> **[4:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=248)** And then if that passes, then we'll just return the connection.
>
> **[4:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=253)** Okay, so now we need another function called confirm_db_connect which is going to receive a connection as its argument, there we go, and let's add some lines here that are similar to what we did in the PHP with MySQL essential training.
>
> **[4:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=273)** We're going to check to see if there is a connection error.
>
> **[4:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=276)** So we can do that by using the connection which is now an object so we can just ask for its connect_errno.
>
> **[4:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=287)** That is a property that is on this object.
>
> **[4:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=291)** So if there was an error, that property will have a value.
>
> **[4:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=294)** So if it's there, then let's have a message.
>
> **[4:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=299)** Our message is going to say database connection failed and then let's say what went wrong as best we can so let's append to our message the connection and we'll use connect_error,
>
> **[5:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=322)** that's another property, this is errno, this is error, that's going to be a text description of the error stored in the object if it had a problem, and I'm just going to copy this line, save me some typing.
>
> **[5:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=333)** This one is going to be the error number and let's also just put some parenthesis around it, space, there we go, and parenthesis at the end so it tells us what the error number was as well, and then let's exit with the message.
>
> **[5:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=353)** So that's it.
>
> **[5:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=354)** So you'll see here we're already getting the benefits of working with an object because we're able to call its properties for connect_errno and connect_error and use those when we're returning it back to the user.
>
> **[6:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=365)** Okay, so now that I have these functions created, I need to make sure that initialize knows about them so let's come back over here and let's add a require_once line for database_functions.php.
>
> **[6:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=380)** And once we have those functions, we don't want to call this anymore.
>
> **[6:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=383)** We want to call our new and improved version which is just db_connect and that's it.
>
> **[6:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=389)** So now it's going to call db_connect, db_connect is going to do that same step of actually creating a mysqli object, but it's also going to check and make sure that there weren't any errors on the connection in the process before it returns it back to us.
>
> **[6:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=402)** Notice here that I'm mixing both procedural functions with object-oriented programming.
>
> **[6:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=407)** That's not a problem.
>
> **[6:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/connect-to-the-database?u=76281980&t=407)** And in fact, you'll find that it's common and often useful.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (7), pass (4)
> **Code Identifiers:** db_connect (5), database_functions (2), confirm_db_connect (2), connect_errno (2), connect_error (2)
> **CLI Commands:** php (6), make (3), mysql (1), find (1)
> **Env Vars:** php (3), sql (2), db_server (1), db_user (1), db_pass (1)
> **Definitions:** is a  (4), means that (1)
> **File Paths:** database_functions.php (2), initialize.php (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### MySQLi methods and properties
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=0)** - [Instructor] Once we have a database connection object, we can then ask that object for information or to perform tasks for us.
>
> **[0:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=7)** After all, that's what object properties and methods are designed to do, to ask for information or to perform tasks.
>
> **[0:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=14)** Let's see what some of the methods and properties that are available to us are.
>
> **[0:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=17)** The database connection object has many properties and methods, but there are really just four which are most frequently used.
>
> **[0:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=24)** The first and certainly the one we use the most often is the one to query the database.
>
> **[0:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=28)** The procedural version of this uses mysqli_query.
>
> **[0:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=33)** The object-oriented version is just simply called query and you're going to see this as a common pattern.
>
> **[0:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=38)** What used to be called mysqli_ is now whatever comes after that underscore as the method name.
>
> **[0:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=45)** So here we have the database object, we use the arrow notation, the dash and the greater than sign, and then the name of the method we want to call, which in this case is just query.
>
> **[0:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=55)** Another common method we use is mysqli_real_escape_string which is a very long function name.
>
> **[1:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=65)** In the object-oriented version, we have a much shorter option for us.
>
> **[1:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=69)** We can just simply call escape_string.
>
> **[1:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=71)** Now real_escape_string also works, but why would you type those extra five characters when you can just simply tell it that it's escaping the string?
>
> **[1:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=79)** We use this whenever we want to escape a string so that we can use it to construct an SQL query.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=84)** It helps us to prevent SQL injection attacks.
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=87)** Another one is mysqli_affected_rows and that allows us to know how many rows were affected by the last query or last operation.
>
> **[1:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=96)** Unlike the first two, this is not a method on the object, it is a property.
>
> **[1:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=101)** Whenever the database connection performs an operation, it automatically stores the number of affected rows from that operation into one of its properties.
>
> **[1:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=111)** So it's right there waiting for us and we can tell that it's a property and not a method because it doesn't have parenthesis after it.
>
> **[1:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=117)** We have to have a parenthesis if we're talking about a method.
>
> **[1:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=119)** We don't have it when we're talking about a property.
>
> **[2:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=122)** Another useful property is when we create a new record in the database.
>
> **[2:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=126)** We can find out what ID was automatically assigned to it if it was auto incremented.
>
> **[2:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=132)** And we normally would do that using the procedural function mysqli_insert_id.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=137)** But instead of calling a function, we have a property again that automatically is populated with the value from the last created record.
>
> **[2:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=146)** So these are the four primary methods and properties on the database object.
>
> **[2:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=151)** Now if we call a mysqli_query, we know that we get back a result, right?
>
> **[2:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=157)** So the result is what we get back.
>
> **[2:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=159)** The result is also an object and it also has properties and methods that we can call on the result object.
>
> **[2:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=167)** So like the database object, there are many of them, but there are really just three that are most frequently used.
>
> **[2:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=173)** When we want to get back the values from the result, normally in the procedural version we would use mysqli_fetch_assoc for associative array and then provide the result as an argument.
>
> **[3:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=184)** Instead, in the object-oriented version, we take the result and we tell it to call its fetch_assoc method.
>
> **[3:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=192)** This will return the first row of data from the result set as an associative array.
>
> **[3:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=197)** Once we are done working through all the different rows in that result that we want, then it's good practice for us to free up the result.
>
> **[3:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=204)** So normally we'd use mysqli_free_result.
>
> **[3:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=209)** The shorter version of that when we're working with object-oriented programming is just result and then call its free method and that will free the result.
>
> **[3:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=217)** If we want to know the number of rows that are in the result, we can do that by asking for one of its properties which is num_rows.
>
> **[3:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=224)** Again, this is automatically populated when the result is retrieved so it's a property that's there waiting for us.
>
> **[3:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=232)** Overall, I find that working with the database connection and the database results in an object-oriented way is much simpler and often requires a lot less typing as well.
>
> **[4:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=242)** Before we leave this topic and try out some of these methods, I want to note that fetch_assoc is not the only way to retrieve a row of data.
>
> **[4:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=251)** There's also fetch_row which returns just a basic array instead of an associative array.
>
> **[4:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=255)** That's going to be integer indexed instead of being labeled with the column name.
>
> **[4:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=260)** And then there's fetch_array which can return either an associative array, a row, a basic array, or both which is its default.
>
> **[4:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=268)** And then there's one more which you may have seen before and wondered about which is fetch_object.
>
> **[4:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=274)** Now even though we're using object-oriented programming, I do not recommend using fetch_object.
>
> **[4:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=281)** It does let you work with the results in an object-oriented style, but the objects that it builds are really simple and crude.
>
> **[4:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=288)** They're just a set of properties with values and that's rarely useful.
>
> **[4:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=292)** As we're going to see throughout the rest of this course, it's much better to get an array of values and then to use that array to build our own custom objects which can have more complex behaviors.
>
> **[5:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/mysqli-methods-and-properties?u=76281980&t=303)** So that's the approach we're going to take.

> [!info]- Semantic Content
>
> **Code Identifiers:** mysqli_query (2), fetch_assoc (2), fetch_object (2), mysqli_real_escape_string (1), escape_string (1)
> **Code Keywords:** function (3), let (2), default. (1)
> **CLI Commands:** find (2)
> **Env Vars:** sql (2)
> **Definitions:** is a  (2)
> **Best Practices:** good practice (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Query using OOP
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=0)** - [Narrator] Now that we have a database connection, let's try executing an object oriented query over that connection.
>
> **[0:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=7)** So the place that we want to do this is inside that public bicycles.php page.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=12)** You remember that page already lists off the inventory, and right now it's doing that by parsing a CSV file.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=19)** Right, so it's going and getting that CSV, parsing the data that's in it, and using that to create new bicycles.
>
> **[0:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=25)** Eventually what we want to do is replace that with our database driven version.
>
> **[0:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=29)** For right now, lets just drop down to the bottom of the page and after our table, lets just have another bit of PHP code that's going to just try and get back values from the database and then we'll just display them below the table.
>
> **[0:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=43)** So we'll be doing both for a little while.
>
> **[0:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=44)** We'll be doing the comma separated value parsing and the database.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=48)** And then eventually we can remove other one when we have this one working.
>
> **[0:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=51)** So the first thing we need to do is we need to figure out what our SQL is going to look like.
>
> **[0:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=56)** So the SQL is going to be equal to select all from the bicycles table.
>
> **[1:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=62)** Okay, so that's simple enough.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=64)** So now we need to execute that query, that SQL query.
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=68)** We know that we already have the database object set as the variable database, right?
>
> **[1:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=74)** That's an initialize.php and all pages are loading that.
>
> **[1:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=77)** You can see the very top here, it's calling initialize.php, and over in initialize.php at the bottom we're creating this variable database which has our database connection.
>
> **[1:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=86)** So that means that I can just come down here and I should be able to call on that database for a query of the SQL.
>
> **[1:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=95)** And of course that's going to return a results object, so we want to cache that in the variable result, and then we know how to work with that result object in an object oriented way as well.
>
> **[1:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=105)** We want to get back the first row of data so we're going to call result and then fetch_assoc and then that's it, we just call the fetch assoc method and it will return back a result as an array.
>
> **[1:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=119)** I'm going to call that row.
>
> **[2:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=121)** It's the first row of data that it's returning and then let's go ahead and tell the result at that point that we're done with it.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=129)** At which point we can call free, which is a method that will free up the result, and then finally lets take that row and lets just output something so we can take a look at it.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=137)** Lets do echo brand colon space, and then lets output the value from the row of data and the brand column.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=149)** So we'll see what the first brand of the first row is.
>
> **[2:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=152)** It'll just echo it back here at the bottom.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=154)** So that should be enough so that we can at least take a peak and see if we were able to successfully connect to the database, make a query, fetch the row of data from the result object, free it up, and then use those results on our page.
>
> **[2:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=166)** Let's go to our browser, and here I am on the same page the Chain_gang/public/bicycles.php, hit return and we get the same comma separated value table.
>
> **[2:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=177)** But notice here at the bottom, the important part is the new data that we've added.
>
> **[3:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=181)** This is coming from the database right?
>
> **[3:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=183)** I've got brand, colon, and then there it is, right?
>
> **[3:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=186)** That's the value that's coming back, so that's actually being pulled from the database.
>
> **[3:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=190)** So if we get that, we know that the whole process is working.
>
> **[3:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=193)** We know that we created our table successfully and assigned privileges to it, our credentials are good that we provided the application, we're able to create a new My SQL connection object, work within an object oriented way, we get back a result object, work with that in an object oriented way, and then are able to echo back the results to this page.
>
> **[3:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/query-using-oop?u=76281980&t=213)** There's a lot more than we can learn, but this is the fundamental process of working with databases in an object oriented way.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5), csv (2), php (1)
> **CLI Commands:** php (6), make (1)
> **Code Keywords:** let (3), public (2), while. (1)
> **File Paths:** initialize.php (3), bicycles.php (1), chain_gang/public/bicycles.php (1)
> **Definitions:** means that (1), is a  (1)
> **Code Identifiers:** fetch_assoc (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### Disconnect from the database
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=0)** - [Instructor] We've seen how we can connect to the database, and we've seen how we can use that database connection.
>
> **[0:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=5)** Now let's complete the cycle by talking about how we can disconnect from the database.
>
> **[0:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=10)** So the way that we create a new database connection is with that new mysqli object command and then we can work with it, when we're finally done we want to close it.
>
> **[0:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=18)** In the past you would do that with mysqli_close and pass it in the database connection.
>
> **[0:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=23)** But as we've seen so often before, there's a close method that is on that database object that we can simply call and it will close the connection.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=32)** Now this is completely optional.
>
> **[0:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=34)** It's not something that you have to do.
>
> **[0:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=37)** If you forget to do it, then once your PHP script exits, PHP will close the connection.
>
> **[0:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=42)** When that object goes away, it knows that it's time to close the connection.
>
> **[0:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=46)** But it is a good practice to go ahead and do it anyway.
>
> **[0:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=49)** So we want to be good programmers and follow the best practices.
>
> **[0:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=53)** In order to close the connection, once we're done using it, we can simply call database and then close, just like that.
>
> **[1:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=62)** But I think an even better way to do it, to make sure that it's closed all the time is to put it in the footer.
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=68)** You see that all of my pages are going to end with this public footer.
>
> **[1:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=71)** So what I'd like to do is just go in to that shared directory, into public footer and down here at the very bottom, then we can just simply put some PHP tags and we'll call database close.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=84)** Now this would work, however, we would have a problem if for some reason we had a page that was not database enabled.
>
> **[1:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=91)** If for some reason we had a page that didn't use the database, and still included this footer, this would raise an error because this variable doesn't exist.
>
> **[1:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=99)** So one improvement that I like to make to this is copy this and let's go back into our database functions.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=107)** I like to write another function here, that's just called db disconnect.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=115)** It does the exact same thing.
>
> **[1:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=118)** We're going to pass in a connection as a value, and then I'm going to rename this as connection as well.
>
> **[2:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=127)** But then I can just do a little error checking.
>
> **[2:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=128)** I can just say if is set, connection, then connection close.
>
> **[2:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=139)** And that avoids the error, right.
>
> **[2:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=140)** If it's not set, then it won't try and close it.
>
> **[2:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=142)** It won't give me an error.
>
> **[2:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=143)** If it is set, then it will close it.
>
> **[2:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=145)** So now I have this new function I can call instead.
>
> **[2:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=147)** I'll just copy that.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=149)** Let's save it.
>
> **[2:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=150)** We'll switch back over to public footer and I'll just change this to be db disconnect and pass in database.
>
> **[2:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=158)** So both of them will do the same thing.
>
> **[2:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=160)** One is just a little bit more error resistant, so that's the one that I'm going to use.
>
> **[2:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=165)** Let's go back to our page, make sure that everything still works, reload the page, and it does.
>
> **[2:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=170)** So our database connection opened.
>
> **[2:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/disconnect-from-the-database?u=76281980&t=172)** We executed our queries, and then when it loaded the footer, which is down here at the bottom, at that point it closed the database connection as its last task.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (3), public (3), function (2), raise (1)
> **CLI Commands:** php (3), make (3)
> **Env Vars:** php (3)
> **Code Identifiers:** mysqli_close (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Best Practices:** good practice (1)


### 3. Define a Database-Driven Class

#### Active record design patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=0)** - [Instructor] In this chapter, we're going to learn how to define a database driven class.
>
> **[0:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=5)** There are a number of different techniques that we could use to do this, but I think that the best one is to use something called the Active Record Design Pattern.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=13)** The Active Record Design Pattern is a very popular design pattern for using databases with OOP.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=19)** PHP frameworks like Laravel, CakePHP, Yii, and CodeIgniter all use this Active Record Design Pattern.
>
> **[0:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=28)** The idea is that the in-memory objects, that is the instances of a class that we create are going to correspond to a single row in our database table.
>
> **[0:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=39)** The object's properties are going to match the table columns, and the object is also going to have methods to allow it to easily perform the basic database operations of create, read, update, and delete.
>
> **[0:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=52)** Let me illustrate.
>
> **[0:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=54)** Let's say that we have a table called bicycles that's in our database and it has columns for brand, model, year, et cetera.
>
> **[1:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=61)** What we want to be able to do is to retrieve a row from that database so that we have the values that are stored there, and then take those values and automatically populate them into a instance of a class.
>
> **[1:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=76)** So, if we have the bicycle class and it has properties for brand, model, year, et cetera, we would take the values from the database row and use them to create a new instance that has properties with the same values.
>
> **[1:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=88)** Because this happens automatically, it feels almost like we're working directly with the database row.
>
> **[1:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=94)** The same process also works in reverse.
>
> **[1:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=97)** Let's imagine that we create a new instance of the bicycle class, and we assign values for its brand, its model, its year, et cetera.
>
> **[1:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=104)** Then, we can take those and we can tell it to save them back to the database.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=110)** So, then our in-memory object looks exactly the same as the row in the database.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=115)** All of those properties in the object get translated into values in a database row.
>
> **[2:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=123)** The same thing works with update.
>
> **[2:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=124)** You retrieve values out of the database, you make changes to them after they've been created as an object instance, and then you save them back to the database again.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=134)** Delete works the same way.
>
> **[2:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=135)** There's essentially two processes.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=137)** The first is that we take database records, retrieve them, and their values are used to populate the properties of objects.
>
> **[2:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=144)** Second, an object's properties are used to craft SQL statements that we can submit to the database.
>
> **[2:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=151)** In PHP code it looks something like this.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=154)** Let's say that we create a new instance of a customer object, and then we assign values to several of its properties.
>
> **[2:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=161)** At this point, this is just simply a PHP object that has some values assigned to its properties.
>
> **[2:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=166)** But the active record portion is that when we call save on that object, it's able to take those properties and convert them into an insert statement that can be submitted to the database all by just calling one single method.
>
> **[3:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=180)** The same thing works in reverse.
>
> **[3:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=182)** Let's say that we want to find a customer from the database.
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=185)** We can ask it to retrieve a customer.
>
> **[3:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=187)** It would create a new object and automatically populate all of the properties for that object with the values that were stored in the database.
>
> **[3:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=196)** We can make changes to them by simply setting new values to the property and calling save again.
>
> **[3:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=203)** It's a powerful, intuitive way for us to work with the rows of data that are in a database.
>
> **[3:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=208)** We're first going to implement the Active Record Design Pattern by learning to find records and to create instances on them.
>
> **[3:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=215)** That first process that we talked about.
>
> **[3:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/active-record-design-patterns?u=76281980&t=217)** Then in the next chapter, we'll work on creating, updating, and deleting records.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), class. (2), delete (2), this, (1), class, (1)
> **CLI Commands:** php (3), make (2), find (2)
> **Env Vars:** php (3), oop (1), sql (1)
> **Cross-References:** we talked about (1), in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Set the database
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=0)** - [Instructor] I want to start implementing the active record design pattern by first telling our object about the database connection that it should be using.
>
> **[0:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=7)** In the code that we've already implemented where we're using a database connection, you can see right here that we're calling database query.
>
> **[0:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=14)** So this is just simply inside a PHP file.
>
> **[0:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=17)** This is not inside a class.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=19)** What I want to do is I want to be able to move queries like this inside my class, and to do that I need to tell the bicycle class about the database connection.
>
> **[0:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=29)** Now I could come over here to my bicycle class and I could do something like use global in order to bring in that variable so that we could use it inside our class.
>
> **[0:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=39)** But that's not ideal for a couple of reasons.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=41)** It means that every time I have a method that's going to use the database, I have to first remember to tell that method to bring in the database variable from the global scope.
>
> **[0:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=51)** A better approach is just to tell this class about its database connection.
>
> **[0:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=55)** So we can just simply have a variable called public database and assign a value to it.
>
> **[1:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=62)** Now we learned about the difference between instance variables and static variables in object oriented programming.
>
> **[1:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=67)** What we want here is a static variable.
>
> **[1:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=70)** That means that it's going to be one value that's going to be shared among all instances of the class.
>
> **[1:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=76)** We don't need to have a separate database connection for every single instance.
>
> **[1:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=80)** Instead we can just have one, and the class as a whole knows about it, and any of its instances can refer to it whenever it's needed.
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=87)** Now eventually I'm going to make this into a protected method.
>
> **[1:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=91)** I'm going to change its visibility from public to protected, but right now we're going to start out with it being public, and I'm going to add another method here, which I'm going to call set database, so function, set database.
>
> **[1:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=104)** We'll pass it in a database, and all it's going to do is set that variable for database equal to whatever we pass in.
>
> **[1:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=117)** Now this also needs to be a static function, so I'm going to make it a static public function as well, and I'm also going to just add a little code comment here, just to say that this is the start of active record code, and the reason why is because I want to keep it separate from everything else.
>
> **[2:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=140)** I'm going to keep all of my active record code a little bit separate from now.
>
> **[2:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=143)** This is end of active record code.
>
> **[2:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=146)** Okay, so now I have this set database that allows me to set it, so now all I need to do is come back over here to initialize, and right here, after I set the database, I just need to tell the bicycle class to set database to database.
>
> **[2:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=165)** That's it.
>
> **[2:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=166)** Now my bicycle class knows about this database connection.
>
> **[2:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=170)** That's going to be there for it to refer to and for it to use.
>
> **[2:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=173)** We can go ahead and start using that since we didn't make it protected.
>
> **[2:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=176)** We can actually start using that here.
>
> **[2:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=177)** Let's just change this to be bicycle, colon, colon, and then dollar sign database.
>
> **[3:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=184)** That's going to do the same thing.
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=185)** It's going to basically say, hey bicycle class, go to your public database variable, and there you should find a database connection, and then we're going to tell that database connection, perform this query.
>
> **[3:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=197)** Let's try it out just to confirm that it's working.
>
> **[3:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=198)** Let's save this, make sure you've saved everything.
>
> **[3:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=201)** Let's come back over here and let's reload the page, and sure enough, we get the same thing, brand Trek.
>
> **[3:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/set-the-database?u=76281980&t=206)** It's still working.

> [!info]- Semantic Content
>
> **Code Keywords:** public (5), let (5), static (4), class. (3), protected (3)
> **CLI Commands:** make (4), php (1), find (1)
> **Definitions:** means that (2), is a  (1)
> **Env Vars:** php (1)
> **UI Navigation:** go to (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### Define query methods
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=0)** - [Instructor] Now that our bicycle class knows what database connection it should use, we're ready to start defining query methods on the bicycle class.
>
> **[0:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=8)** In the previous movie, we used that database connection inside the bicycle class to execute a query.
>
> **[0:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=14)** What I want to do now is move that query inside the class.
>
> **[0:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=18)** The reason why is that it makes sense that a bicycle class ought to know how to retrieve all of the bicycles that are stored in the database.
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=26)** So what we essentially want to do is move these two lines into our class.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=32)** So I'm just going to copy those two lines, and what I want to have instead here is I just want to be able to call find all, right?
>
> **[0:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=40)** If I just call find all on the bicycle class, it ought to be able to turn back a result to me.
>
> **[0:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=46)** Now notice that I'm calling this as a class method, not an instance method.
>
> **[0:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=51)** I don't have an instance of bicycle.
>
> **[0:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=53)** I haven't found any yet.
>
> **[0:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=54)** I'm telling the class that it should use find all.
>
> **[0:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=58)** All right, so let's save that.
>
> **[0:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=59)** Remember, I already copied those lines that we were missing.
>
> **[1:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=62)** I want to move them over here, and I will put them also in a static public function called find all, and I'll just paste those in there.
>
> **[1:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=74)** Now we do need to make a couple modifications to this.
>
> **[1:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=76)** The first is now it's inside a method, so just setting result equals is not good.
>
> **[1:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=81)** Instead, we need to actually return back the result.
>
> **[1:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=85)** Another change that we should make is that before I had my database property as a public property.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=92)** I don't need to have that anymore.
>
> **[1:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=94)** Before I had this code right here outside the class.
>
> **[1:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=98)** So it was necessary for it to be public, but it's better if I can make this protected.
>
> **[1:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=102)** Nobody needs to know about this database connection that the bicycle class is going to use except for the bicycle class.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=108)** Now, this won't work anymore.
>
> **[1:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=109)** I can't access the database this way, but I can use self, and I can access this property still from inside the class using self.
>
> **[2:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=120)** So now that we've made those changes, let's save both of those files, and let's go try it out.
>
> **[2:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=124)** Come back over here and reload the page, and it still works.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=129)** Now before we move on from this, there are a couple of improvements that I want to make.
>
> **[2:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=133)** The first is that I notice when I'm doing this find all, I'm setting some SQL, then I'm calling query on it.
>
> **[2:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=139)** Now it seems to me that this is the kind of thing that we might want to do in more than one case.
>
> **[2:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=144)** This is not the only kind of find we're going to be executing.
>
> **[2:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=147)** For example, later we're going to be looking to find a single bicycle in the database.
>
> **[2:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=151)** So we're going to be executing more than one kind of query like this.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=154)** So I'm going to make an all-purpose function public function which I'm going to call find by SQL, and I'll be able to pass SQL into it at all, and it will then execute that SQL.
>
> **[2:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=167)** So I'm just going to take this line, I'll copy it, and let's paste it in up here, and now instead of telling the database to query with that SQL, we're going to call that find by SQL function.
>
> **[2:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=179)** So that's all I did.
>
> **[2:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=179)** I basically just moved it into its own function, so it should work exactly the same now, but now it's multipurpose.
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=185)** Now I can use this SQL with it, but I could also have another method which had different SQL that would get passed into it.
>
> **[3:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=192)** Another improvement that I can make to this then is that I can also put some error checking into find by SQL, because we want to check and make sure that we did get a result, and if we did, we're going to return the result, but in between, let's check and make sure that we actually got a result.
>
> **[3:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=208)** So if there's not a result, then let's exit with database query failed.
>
> **[3:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=221)** So there we go.
>
> **[3:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=222)** So we also have a little bit of error checking in here, and any find by SQL statement that we do is going to execute the query and confirm that it did get back something valid; that the database query didn't fail.
>
> **[3:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-query-methods?u=76281980&t=234)** Now that we've got that, let's save it all, and one last time, let's go over into Firefox and make sure that everything still works and that we are still able to retrieve this value of Trek from the database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), class. (5), function (5), public (4), this. (2)
> **CLI Commands:** find (11), make (9)
> **Env Vars:** sql (10)
> **Tools:** firefox (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Build objects using record values
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=0)** - [Instructor] In this movie, we're going to learn to build objects using the values that we pull back from records in the database.
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=6)** This is the first part of the active record process.
>
> **[0:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=10)** Database records are retrieved, which we've already done, but then their values are going to be used to populate the properties of objects.
>
> **[0:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=18)** And this process needs to happen automatically.
>
> **[0:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=21)** That's why it's called active record.
>
> **[0:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=22)** It feels like there's an active relationship between the database data and our object.
>
> **[0:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=28)** So as soon as we pull those values back, we want to immediately populate a new instance of bicycle with them.
>
> **[0:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=35)** At the moment, we don't have the active record pattern.
>
> **[0:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=38)** What we have is a result set, and then we're able to go through and fetch associative arrays out of that result set, which we can then use.
>
> **[0:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=46)** Instead, what we want is for find_all to return an array of objects to us, objects that are already populated with the correct values.
>
> **[0:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=55)** So in order to do that, what we want to do is take these two lines, 55 and 56, and we want to cut those, because we're going to be moving those over into our class.
>
> **[1:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=65)** Right here, where we have find_by_sql, as soon as we've finished checking that the result is there, before we return the result, what we want to do is turn it into objects.
>
> **[1:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=76)** We want to convert the results into objects.
>
> **[1:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=82)** I'm going to paste in my two lines now.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=84)** I'm going to free the result as soon as I am done with it, and what I want to return back is not the result.
>
> **[1:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=90)** I want to return back an object array.
>
> **[1:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=93)** Okay, so how do we get from fetching the association into the object array?
>
> **[1:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=98)** So let's start with an empty object array first.
>
> **[1:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=104)** And then, let's create a loop.
>
> **[1:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=106)** So let's say while, let's take this away and let's put parentheses around it, so I'm going to make a while loop here.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=115)** So while we're able to continue fetching rows out of here, I'm actually going to change this, instead of row, let's make it record.
>
> **[2:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=122)** Alright, so while I've gotten a record, then I want to take the object array, and at the end of it, I want to append the record, but I need to instantiate it.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=134)** I need to take it and convert its properties.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=137)** So I'm going to create a new function that'll do that.
>
> **[2:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=140)** A new method.
>
> **[2:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=141)** It's going to be a static method, so I'm going to use self, and then I'm going to call it instantiate.
>
> **[2:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=148)** And I'm going to pass in the record.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=149)** So this is going to do all the heavy lifting for me.
>
> **[2:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=152)** It's going to basically take the values that are in the record, and it's going to return back an object.
>
> **[2:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=157)** And then that object will get set to my object array, I can free the result, and then I can return back that object array.
>
> **[2:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=163)** So I'll get back an array of objects now, instead.
>
> **[2:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=165)** Okay, but what about this instantiate function?
>
> **[2:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=168)** We need to write that.
>
> **[2:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=169)** So let's drop down here, below find_all, and let's create static protected function.
>
> **[2:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=178)** And I'm going to call it instantiate.
>
> **[3:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=181)** It's going to take a record as its argument, and we know that we want to create a new object, in this case new, and it would be bicycle, but we can also just make it self, right?
>
> **[3:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=196)** That's going to create a new instance of itself.
>
> **[3:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=200)** Now, I could manually assign the values.
>
> **[3:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=203)** Could manually assign values to properties, could do that in a very hand-way, I could go through, and every single one of these properties that are here, for brand, model, year, category, et cetera, I could assign a value to it.
>
> **[3:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=217)** But, automatic assignment is going to be faster, call it easier, and reusable.
>
> **[3:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=228)** And we're going to be reusing this later.
>
> **[3:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=230)** So I'm going to go ahead and do this automatically.
>
> **[3:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=232)** So how can we do that?
>
> **[3:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=233)** Well, for each, let's go through the record, right?
>
> **[3:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=236)** It's going to be a associative array, so I'm saying go through each pair that's in there.
>
> **[4:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=242)** I'm going to call the first one the property, and the second one the value, so loop through there, and then let's check and see, if the property exists, we'll use property_exists on the object that I'm working with, property, the second value, so if it exists, then let's set its value.
>
> **[4:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=267)** Object, and then dollar sign property, equals dollar sign value.
>
> **[4:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=275)** Notice that I'm using a dollar sign here.
>
> **[4:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=277)** This is dynamic, right?
>
> **[4:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=278)** So whatever that property value is will be here.
>
> **[4:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=281)** It'll be brand, the first time, then it'll be model, et cetera, right?
>
> **[4:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=286)** That second dollar sign is important.
>
> **[4:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=289)** Property, there we go.
>
> **[4:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=292)** So that's going to set each one of them.
>
> **[4:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=293)** And at the end, we're just going to return back the object.
>
> **[4:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=297)** So take a moment to realize how that works.
>
> **[4:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=299)** It's going to loop through all of the different columns that are in the row that I just pulled back, and for every one, it's going to see if that column exists as a property on this object, then assign the value.
>
> **[5:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=310)** If not, it'll just get skipped.
>
> **[5:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=313)** Now I notice that I am actually missing one value right now, which is public ID.
>
> **[5:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=319)** Right, that's one that I added to my database that I did not originally have in my bicycle class.
>
> **[5:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=325)** So I'm going to add that as well.
>
> **[5:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=327)** So all these properties are here.
>
> **[5:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=329)** I also have columns for them, so it should do the work for me.
>
> **[5:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=332)** So now instantiate should handle the process of converting those values in the row into a new object with properties that have the same values.
>
> **[5:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=343)** Let's try all of this out.
>
> **[5:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=344)** Let's save it, go back to Bicycles, and now, I'm not getting back a result anymore.
>
> **[5:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=349)** Instead, I'm getting back an array of bikes.
>
> **[5:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=352)** So now, I should be able to loop through all of those bikes, and output their information.
>
> **[5:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=357)** Now I could do that here as a test, but this is actually what I was shooting for the whole time.
>
> **[6:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=361)** I've now got an array of the bikes.
>
> **[6:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=363)** So let's cut that, and let's stop doing this test code down at the bottom, and let's actually go up here, and let's replace where we're getting a bike array, right, up here using the parser, let's replace that with our actual bikes.
>
> **[6:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=377)** And I don't need to instantiate a new bike anymore here, on line 35, I can cut that line out, and now, instead, for each of the bikes, as dollar sign bike, now I have an object.
>
> **[6:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=391)** See how that works?
>
> **[6:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=392)** Take a second to look at it.
>
> **[6:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=392)** Find_all is returning back an array of objects that automatically been populated, with the values that were in the database.
>
> **[6:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=401)** And then, I can just loop through those and display them on the page.
>
> **[6:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=404)** Let's save this, go back, reload our page, and look at that.
>
> **[6:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=409)** Now I'm not getting the values that are coming from that CSV file.
>
> **[6:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=412)** Now these are the values that are in my database.
>
> **[6:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/build-objects-using-record-values?u=76281980&t=415)** That's what I'm seeing instead.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), function (3), class. (2), this, (2), static (2)
> **Code Identifiers:** find_all (2), find_by_sql (1), property_exists (1)
> **CLI Commands:** make (3)
> **Env Vars:** csv (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Find a single record
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=0)** - [Instructor] In the previous movie, we retrieved all bicycle records from the database and built new objects whose properties had those same values.
>
> **[0:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=8)** In this movie, we're going to learn how to retrieve a single record from the database.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=12)** This is very common, to want to be able to review all records and then also to be able to focus in on a single record.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=19)** Let's switch over to our bicycle class and we already have find all.
>
> **[0:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=24)** What I want to write now is another method, static public function, and it's going to be called find by ID.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=32)** So the idea is that we're going to pass in the ID of the record that we want to it, and it's going to retrieve only that record.
>
> **[0:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=38)** So let's start by writing the SQL that we're going to need.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=41)** So I'll write SQL equals and this is also going to be a select all from bicycles.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=48)** I'm going to put a space at the end, because I'm going to keep this line going.
>
> **[0:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=51)** I'm going to just append it to a new line.
>
> **[0:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=54)** And this one is going to be where ID equals and then inside single quotes I'm going to put the ID that we want to retrieve.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=64)** Now, that value's going to be dynamic, so I'm going to also put double quotes here, and it's going to be ID like that, and a semicolon at the end.
>
> **[1:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=72)** Now we don't want to just take any ID because this ID could be coming from anywhere.
>
> **[1:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=76)** We're constructing an SQL statement out of it so what we really want to do is be able to escape the string to prevent SQL injection.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=84)** We can do that by using the database connection to escape the string.
>
> **[1:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=89)** So we know the database connection is stored here.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=92)** And then, the method that we want there is called escape string and then I'll just put parentheses around it.
>
> **[1:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=100)** So that's it.
>
> **[1:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=102)** Self colon colon dollar sign database, that's going to be the database connection stored up here.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=108)** Right, it's stored way up here.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=110)** And we're going to tell that database connection to call its escape string method passing in that ID as a value.
>
> **[1:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=116)** And that'll then get escaped for us.
>
> **[1:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=118)** Okay, so that gives me the SQL I can use.
>
> **[2:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=120)** So now, what do we want to do?
>
> **[2:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=122)** Well, we want to get a result by calling self colon colon find by SQL and pass in our SQL to it, just like we did here with find all.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=134)** Now, let's stop and appreciate what happens here.
>
> **[2:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=136)** When I call find by SQL, it goes ahead and it instantiates a new object.
>
> **[2:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=142)** That is, it takes all of the values that are stored in the database row, and converts them into values for the properties on our object.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=149)** So we're going to get back an array of objects here as the result.
>
> **[2:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=156)** So I'm going to actually change this to be object array, just so that we remember that's what it is.
>
> **[2:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=161)** And then let's put in a test here.
>
> **[2:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=163)** If it's not empty, then we'll know that we got a value back, right?
>
> **[2:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=169)** So if the object array is not empty, then we'll know we have a result.
>
> **[2:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=174)** Else, we didn't find anything.
>
> **[2:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=176)** And there's a number of things we could return, an empty value or whatever, but I'm going to return false.
>
> **[3:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=180)** Right, so if it returns false if it doesn't find it.
>
> **[3:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=182)** If it finds it, it'll return it.
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=185)** Now this is an array, we don't want to just return the object array, that's no good.
>
> **[3:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=190)** What we want to actually return is going to be the first item that's in there, right?
>
> **[3:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=196)** A good way to do that is with array shift.
>
> **[3:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=200)** Array shift'll just take the first item that's in the array and send it back.
>
> **[3:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=204)** It basically just pulls the object off the front.
>
> **[3:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=206)** So it returns either an object or it returns false, whereas find all is going to return an array of objects.
>
> **[3:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=212)** So the behavior'll be just a little bit different.
>
> **[3:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=214)** But there's no reason to return an array, if it only has one object inside of it.
>
> **[3:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-a-single-record?u=76281980&t=219)** Now that we've defined our function, in the next movie, we'll create a new PHP page that can make use of it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (2), pass (2), self (2), switch (1)
> **CLI Commands:** find (8), php (1), make (1)
> **Env Vars:** sql (8), php (1)
> **Definitions:** is called (1), is an  (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Display a detail page
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=0)** - [Instructor] In the last movie, we created a new method which would find a record by its ID.
>
> **[0:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=5)** I want to build on that and in this movie, I want to take that object that we've just instantiated and use it to display a detail page for the bicycle.
>
> **[0:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=15)** In your exercise files, I've included a new file called detail.php which we can just drag into the public directory and then when we go into our project, it'll show up right there and you can see that it just has the same kind of thing we've been working with on other pages.
>
> **[0:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=29)** It's got initialize.php, page title.
>
> **[0:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=33)** It's got a public header.
>
> **[0:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=34)** There's a footer at the bottom.
>
> **[0:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=35)** It's got a link to go back to the inventory and then it's got code to display the details of a bicycle so we have to have a bicycle object and once we have that, it'll display its properties, the bike brand, the bike model, the year, the category, and so on all the way down the line so it's going to just display all the different properties of the bicycle.
>
> **[0:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=54)** We first have to find the bicycle though so that's going to be up here in the top.
>
> **[0:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=58)** We've got to fill that in.
>
> **[1:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=60)** Before we do that, let's jump back over here to bicycles.php and let's make a link to that page.
>
> **[1:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=67)** So what I'm thinking is that I'll add a new column.
>
> **[1:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=71)** In the header I'll just put nbsp and then down here we'll make a new table data row and it's going to say view, all right, but it's going to be a link so we've got to put an href around it and what is that link going to point to?
>
> **[1:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=90)** Let's point that to detail.php and then a question mark id equals and then we have to set what the ID is going to be.
>
> **[1:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=97)** We'll do that using php.
>
> **[1:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=99)** We're going to echo back the bike object's ID property and that should do it.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=107)** Let's save it.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=107)** Let's go to Firefox and take a look.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=110)** So we've got view here and if you look down in the lower left, you'll see that it has ID equals one and then ID equals two so that's working.
>
> **[1:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=118)** This is getting a little wide here and we're about to go click and see details for the bicycle so I'm going to actually remove a couple of these.
>
> **[2:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=123)** I'm going to remove the weight and the condition.
>
> **[2:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=128)** There's no reason we need to have those here and they will save us some space so let's click out of there and go back, reload our page, there we go so it's a little less crowded now.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=137)** We see just the top-line details about each of these bicycles.
>
> **[2:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=140)** And then when we click view, which I'll do right now, it should take us over and show us information about each one of these.
>
> **[2:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=146)** Now right now it says undefined variable bike 'cause we haven't set that yet.
>
> **[2:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=150)** So let's switch back over to detail.php and let's do that.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=154)** We're going to need to find a bicycle.
>
> **[2:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=156)** So the first thing we need to do is we need to get the requested ID.
>
> **[2:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=159)** We know how to do that with php.
>
> **[2:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=161)** Let's do id equals and then we're going to ask for get id and then I'm going to use the PHP 7's null coalescing operator to make it false if for some reason we didn't get an ID and then let's just say if there was no ID, then let's redirect to and redirect to is one of my special functions inside the functions file that allows me to redirect.
>
> **[3:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=188)** Let's have bicycles.php.
>
> **[3:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=192)** All right, so that'll just send me back to the index page if I don't have an ID and now we need to find a bicycle so let's have bike equals bicycle colon colon and our new method find_by_id and we'll pass in that ID to it and that's it.
>
> **[3:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=207)** Now we should have a bike instance.
>
> **[3:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=210)** That find by SQL is going to automatically instantiate a new object that has all of the properties set to the same values as the database row for this bicycle.
>
> **[3:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=222)** So that'll be set to this.
>
> **[3:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=223)** We'll get back an object.
>
> **[3:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=224)** And then down here, we'll display the object brand, the object model, and so on.
>
> **[3:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=229)** Let's save it and try it all out.
>
> **[3:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=230)** Come back over here and let's reload our page and there you go.
>
> **[3:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=234)** I click back to inventory.
>
> **[3:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=236)** I can click on the Cannondale bike and I can see the Cannondale's details.
>
> **[4:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=240)** See how that works?
>
> **[4:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=242)** We're now able to read records back from the database either all of them or a specific record.
>
> **[4:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=247)** And in both cases, it's going to have this active record feel because those values that are in the database are automatically going to populate the properties of our objects.
>
> **[4:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=258)** So there's one last thing that I want us to do before we move on.
>
> **[4:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=261)** When I click on view, it comes up here and it just says that the page title is called detail.
>
> **[4:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=265)** I think it's better if the page title actually had the name of the bicycle here so what I want to have is bike name.
>
> **[4:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=275)** Now, I don't have name as an attribute.
>
> **[4:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=278)** What I want to do is create a new method over here.
>
> **[4:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=281)** Let's go to our bicycle class and down here below our active record code, let's go even below that and let's write a new one a public function called name and this can return anything that you want, but I'm going to make mine return back this brand and then a space curly braces this model and then a space curly braces this year and that's what I'm going to say that the name of each of these is.
>
> **[5:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=317)** So let's go back and let's just reload that page and there we go.
>
> **[5:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=320)** Now it says Detail: Track Emonda 2017.
>
> **[5:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/display-a-detail-page?u=76281980&t=324)** Click back to inventory, click on the Cannondale, and that'll just give me a little better page title which shows up in things like your history and your bookmarks and things like that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (20), public (3), switch (1), pass (1), this. (1)
> **CLI Commands:** php (9), find (5), make (4)
> **File Paths:** detail.php (3), bicycles.php (2), initialize.php (1)
> **UI Navigation:** click on (3), go to (2)
> **Env Vars:** php (1), sql (1)
> **Cross-References:** in the last (1), go back to (1)
> **Code Identifiers:** find_by_id (1)
> **Versions:** php 7 (1)


### 4. Object-Oriented CRUD

#### CRUD operations
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=0)** - In this chapter, we'll be learning to perform the remaining database operations so that we can implement the object oriented active record design pattern.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=9)** We're going to be looking at four main operations, and the abbreviation for these is CRUD, c-r-u-d.
>
> **[0:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=16)** C is for create, R is for read, U is for update, and D is for delete.
>
> **[0:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=21)** Those are the four primary ways that we interact with the database.
>
> **[0:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=24)** We create new records, we read existing records, we update existing records, or we delete records.
>
> **[0:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=29)** So far, we've already seen how we can read from the database when we learned how to do find all and find by ID.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=36)** Now we need to learn how to implement the other three.
>
> **[0:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=39)** The way that we're going to add that to our project is that we're going to create a staff area, a content management system that'll allow the Chain Gang staff to log in and be able to update the inventory of bicycles using a web interface.
>
> **[0:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=54)** They'll be able to create records, update records, delete records, and so on.
>
> **[0:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=58)** So the code work that lies ahead of us to implement the active record part of this is we need to be able to take the properties that are an existing object, and we need to be able to transfer those to the database.
>
> **[1:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=70)** So if we have a object that's not save the database, it has properties for brand, model, year, etc., we want to be able to take that and call save on it and have it save to the database, to save a row in the database that matches.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=84)** Which means we have to translate all those properties into data that can be submitted as an SQL statement.
>
> **[1:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=91)** Let's review those SQL statements that we would normally use for these three primary operations.
>
> **[1:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=96)** When we want to create, we use insert.
>
> **[1:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=98)** INSERT INTO has a comma separated list of columns followed by a comma separated list of values.
>
> **[1:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=104)** UPDATE uses a different format.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=107)** Each column is followed by an equal sign and then its value.
>
> **[1:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=111)** It also has a WHERE clause, and I'm using a LIMIT 1 as a safety check so that I don't accidentally update more than one record.
>
> **[1:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=118)** DELETE just has a WHERE clause so my SQL knows which record we want to delete.
>
> **[2:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=123)** Notice that both for DELETE and UPDATE I'm putting the indenture inside single quotes.
>
> **[2:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=128)** That's not necessary for SQL, but it is a best practice because it helps prevent SQL injection attacks.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=134)** And I'm also using LIMIT 1 here so that I don't accidentally delete more than one record.
>
> **[2:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=140)** One final point, notice that when I insert a record I am not including its ID.
>
> **[2:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=145)** That's because the ID collum uses auto increment so SQL will automatically assign the next available ID when the record is created, And when I want to update the record, I use its ID to find the record, but I do not need to include it in the values that are being updated.
>
> **[2:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=162)** So even though ID is a property of the object and it has a collum in the database, I'm going to want to omit that property when I'm assembling the properties that I send to both insert and to update.
>
> **[2:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=174)** So let's keep that in mind.
>
> **[2:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=175)** ID is a little bit special in that way.
>
> **[2:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=178)** Before we can implement the CRUD, we need to do a little bit of setup in our project.
>
> **[3:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=180)** Rather than have you create all of the different HTML files we're going to need, I wanted to give you a jumpstart by giving you some starter code.
>
> **[3:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=188)** Inside the exercise files, you'll find a directory called Staff. We're going to drag that into the public directory and inside there you'll see that there are a number of files...there's index.php page and another directory called bicycles, and then there are files that will allow us to list, show, create, update, and delete bicycle records.
>
> **[3:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=209)** Those are the main operations that we're going to be performing on our bicycles.
>
> **[3:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=213)** I've also got a staff header and a staff footer files.
>
> **[3:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=216)** We can take those into the private directory and put them inside shared so they exist in here.
>
> **[3:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=223)** Let me just move this over a little bit so that you can see the names of these files that's right along side public footer and public header, and now it's staff footer and staff header.
>
> **[3:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=230)** And I've got some CSS here, so I'll drag that into my public style sheets directory so that now I have some special styles for the staff area.
>
> **[3:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=238)** And then I've got another set of functions here, we use these in the PHP with my SQL essential training, but we didn't use them in the object oriented training, where we first created the Chain Gang website.
>
> **[4:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=248)** So these are missing from our project right now so I'm just going to drag these up into the private directory, and we'll need to go into our project and also go to initialize and make sure that those get added here.
>
> **[4:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=259)** So, right after functions.
>
> **[4:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=261)** Going to copy this line.
>
> **[4:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=264)** I'm going to add one here.
>
> **[4:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=265)** For the status_ error_functions.
>
> **[4:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=270)** So that's this file right here, and you can see it just contains some basic functions for displaying errors, for getting and displaying the session messages back to the user.
>
> **[4:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=279)** Once that's done, let's try it out, let's take a look.
>
> **[4:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=282)** So I'm going to go into Firefox, and I'm going to change the URL here it's still the public directory but now it's going to go into the staff directory and I can just hit return now or I can type index.php, they both go to the same place.
>
> **[4:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=297)** And you'll see I get back my Menu.
>
> **[4:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=299)** I now can click on Bicycles.
>
> **[5:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=302)** I get a list of bicycles that are in the database.
>
> **[5:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=304)** That's using the exact same code that we just learned, let's just go take a look at that real quick.
>
> **[5:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=310)** Inside staff, inside bicycles, inside index.php we're calling find all to get an array of the bicycles, and then down here I'm just looping through that array to display each of the different properties of the bicycle.
>
> **[5:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=324)** And then each one of those has a link you can see I've got a link here for View, which will take me to a detail page.
>
> **[5:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=330)** Again, that's using those same principles we just saw in the last chapter using find by ID, to find the bicycle.
>
> **[5:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=336)** And then I click Back to List, and then I've got pages for Add a Bicycle, which right now is just a blank form, and Edit a Bicycle, which right now is also just a blank form, and Delete a Bicycle.
>
> **[5:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=350)** So those are the three primary pages we're going to be learning how to implement in this chapter.
>
> **[5:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/crud-operations?u=76281980&t=355)** In the next movie, let's get started by learning how we create a record.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (9), let (7), public (5), private (2), interface (1)
> **Env Vars:** sql (7), crud (2), update (2), where (2), limit (2)
> **CLI Commands:** find (7), php (4), make (1)
> **SQL:** update (2), where (2), insert into (1)
> **File Paths:** index.php (3)
> **UI Navigation:** go to (2), click on (1)
> **Definitions:** is a  (3)
> **API Endpoints:** delete  (2)

#### Create a record
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=0)** - [Instructor] In this movie we will learn to create a database record using the properties of an existing PHP object.
>
> **[0:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=7)** In order to do that we are going to enable the Add Bicycle page in the content management system we are creating.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=13)** We already have a form here.
>
> **[0:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=15)** We want to be able to fill out this form and click Create Bicycle and have PHP gather up all of the form values that we've just submitted, create and object from it in PHP, and then tell that object that it should save itself to the database.
>
> **[0:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=30)** That's that active record design pattern that we've talked about.
>
> **[0:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=33)** Let's go to the code and let's take a look at that new.php page.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=36)** You can see that's is already got code in here that's going to call initialize.php so we will have a database connection and our bicycle object will know about that database connection, and then we've got code here that says if it's a post request, if we're getting back form parameters, then let's build an associative array called args and it's going to go through each of the post parameters and it's going to set the brand equal to whatever value was submitted in the form for brand, and same thing for model, year, et cetera all the way down the line.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=64)** So then we're going to have a set of arguments.
>
> **[1:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=66)** Right now I just have a place holder here for bicycle.
>
> **[1:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=69)** Bicycle equals an empty array.
>
> **[1:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=71)** That's now what we want.
>
> **[1:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=72)** What we want is to create a new object from it.
>
> **[1:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=74)** We know how to create a new object.
>
> **[1:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=76)** We just have new, and then bicycle.
>
> **[1:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=79)** So that'll create a new bicycle object.
>
> **[1:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=81)** Now what we want to do is have the bicycle object have its properties set to these same values that are in our argument associative array.
>
> **[1:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=89)** If you remember, our bicycle class has that ability already.
>
> **[1:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=93)** If we scroll down 'til you get to construct, you'll see that when we wrote our construct function in the object oriented programming class, we allowed it to take an argument that is an array.
>
> **[1:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=105)** That's called args.
>
> **[1:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=106)** So it's going to take those args that are passed in and it's going to set the property for brand equal to whatever value is in that associative array.
>
> **[1:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=114)** So we have this functionality already built into here.
>
> **[1:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=116)** All we have to do is use it.
>
> **[1:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=118)** So if we come back over to new.php, put parentheses after bicycle, and pass in that array of args, then that'll automatically be sent to our construct method, and it will set all the properties that we need all the way down the line.
>
> **[2:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=133)** Okay, so at that point we now have a PHP object in memory that has the correct properties.
>
> **[2:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=140)** But that doesn't implement the active record pattern that we've been talking about.
>
> **[2:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=144)** What we want to do now is take that in memory object and tell it to save itself to the database as a row in the database.
>
> **[2:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=151)** And we want to do that by just simply calling bicycle and then call create.
>
> **[2:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=158)** So there's this create method that'll be on bicycle, and it will know how to take all of those properties of the bicycle and turn them into an SQL query that can be submitted.
>
> **[2:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=169)** So we've got to write this method called create.
>
> **[2:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=171)** Let's save this, let's switch over to the bicycle class, let's scroll back up to where we've got our active record code, and right here at the end let's create a new public function called create.
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=185)** Now this is an instance function.
>
> **[3:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=187)** We have an instance of the bicycle here.
>
> **[3:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=189)** We created a new bicycle, so it's an instance method, not a static method.
>
> **[3:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=194)** When we were working with find all and find by id we didn't have an instance yet, so we had a static method.
>
> **[3:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=200)** This time it's just going to be an instance method, a method on the instance that we've already created.
>
> **[3:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=205)** So how are we going to create this?
>
> **[3:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=207)** What does it need to do?
>
> **[3:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=208)** What's the process that we need to go through?
>
> **[3:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=210)** Well if you think about it we need some SQL, and then we need to send that SQL to the database.
>
> **[3:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=217)** So let's have our result equals self database.
>
> **[3:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=222)** The bicycle class knows about the database because it has it stored in the database property.
>
> **[3:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=229)** And then we can tell that database that it ought to query using our SQL.
>
> **[3:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=234)** So if we can construct a good SQL for this, that's all we need to do.
>
> **[3:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=238)** And then last of all, let's just return back the result.
>
> **[4:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=241)** The result for an insert operation will either be true or false.
>
> **[4:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=244)** So our create will either return true or false, depending on whether or not it succeeded or not.
>
> **[4:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=250)** So now how do we write that SQL?
>
> **[4:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=253)** Just as a quick review, remember that this is the structure of an SQL insert statement when we want to create something.
>
> **[4:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=260)** So we've got insert into and then our table name followed by a comma separated list of the columns.
>
> **[4:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=267)** And then after that we have values, and then a comma separated list of the values that we want to put in each of those columns.
>
> **[4:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=274)** And they have to be in the same order as we define the columns.
>
> **[4:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=277)** It's going to match them up.
>
> **[4:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=279)** So let's start writing it.
>
> **[4:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=280)** We've got insert into bicycles space.
>
> **[4:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=284)** I'm going to go to a new line here.
>
> **[4:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=285)** I'm going to pend SQL onto it.
>
> **[4:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=288)** And we're going to have all of these different properties.
>
> **[4:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=291)** I'm going to leave off id.
>
> **[4:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=293)** I don't need to add id.
>
> **[4:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=294)** But all the other ones, brand, model, year, et cetera, those all need to be in here.
>
> **[4:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=297)** So brand comma space model, comma space year, comma space category, comma space color.
>
> **[5:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=306)** And the order doesn't exactly matter.
>
> **[5:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=308)** I'm actually going to leave description 'til the end.
>
> **[5:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=310)** Gender price wait underscore kg condition underscore id, and then description at the end.
>
> **[5:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=322)** Again, the order doesn't matter as long as it matches up with what we've got in the values.
>
> **[5:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=326)** Now, those need to be inside parentheses.
>
> **[5:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=328)** I like to put my parenthesis, start it on this line, and then SQL, and I'll end it on this line, and then we've got values.
>
> **[5:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=340)** And I'll start my parentheses there for the values, and I'll just go ahead and put the ending parentheses here before I forget.
>
> **[5:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=347)** And then in between I need to have SQL that has all the different values.
>
> **[5:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=352)** So what does one of those values look like?
>
> **[5:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=354)** So the first one is brand.
>
> **[5:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=356)** So I need to have brand.
>
> **[5:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=358)** And I know that this brand is the way that I access that property.
>
> **[6:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=363)** It needs to be inside single quotes, so I'm going to put a single quote at the beginning here, just one, and also add a single quote at the end.
>
> **[6:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=375)** That'll pend those together.
>
> **[6:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=377)** And then it should have a comma after it because I'm going to have another one following.
>
> **[6:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=381)** So that's what each one of these looks like.
>
> **[6:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=383)** So now I can just take that line and paste it a whole bunch of times.
>
> **[6:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=387)** And I've got model, year, I need to do these in the same order as they are above.
>
> **[6:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=393)** Category, color, gender, price, and I need three more.
>
> **[6:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=404)** Weight kg, condition id, and description.
>
> **[6:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=411)** And the last one should not have a comma after it because it's the last one.
>
> **[6:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=417)** So that is the key step in this.
>
> **[6:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=419)** The ability for my object to have enough intelligence to know, how do I translate my properties into an insert statement so that I can submit it to SQL, so that I can have that active record feeling between my object and my database record.
>
> **[7:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=436)** We're not quite done with this, though.
>
> **[7:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=438)** Because if you remember, when we create new records in the database, we don't submit id because SQL is going to automatically assign an id to it.
>
> **[7:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=446)** So, the database record is now going to have an id once it's created but my object is not.
>
> **[7:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=452)** They're actually going to be out of sync.
>
> **[7:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=454)** I need to get that id from the database.
>
> **[7:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=456)** And SQL provides a way for me to do that.
>
> **[7:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=459)** So I'm just going to add a line here that says if we got back a result then let's find out what that id was and let's assign this id equal to that value.
>
> **[7:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=470)** An the way we do that is by asking the database connection for the property insert id.
>
> **[7:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=478)** We talked about that in the last chapter.
>
> **[7:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=479)** That's one of those properties that's built into the database object.
>
> **[8:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=482)** What is the last insert id.
>
> **[8:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=484)** So that'll set it and now my two objects will be in sync.
>
> **[8:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=487)** And then I'll return back the result.
>
> **[8:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=489)** Let's save that.
>
> **[8:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=490)** Let's switch back over to new.php and finish up over here, because we don't want to just create it, we want to also find out what the result was.
>
> **[8:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=498)** Result equals, now I don't need this result.
>
> **[8:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=503)** If the result is equal to true, then what is my new id?
>
> **[8:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=507)** Well, my new id is going to be the bicycle id that I just found out.
>
> **[8:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=513)** And then it will store a message for the bicycle was created successfully, and it should redirect me back to that detail page.
>
> **[8:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=520)** Let's save it and let's try it all out, see if it's working.
>
> **[8:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=523)** Let's go back over to our page.
>
> **[8:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=525)** Let's first reload it to make sure that everything's still working.
>
> **[8:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=527)** It is.
>
> **[8:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=529)** And now let's try entering some data.
>
> **[8:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=530)** So we've got Schwinn, Cutter, and I'm going to choose 2016 from the list.
>
> **[9:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=540)** The category's going to be city.
>
> **[9:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=543)** The gender is going to be unisex.
>
> **[9:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=545)** The color will be white.
>
> **[9:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=546)** The condition is going to be great.
>
> **[9:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=548)** And the weight is going to be 18.
>
> **[9:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=551)** And the price is going to be 450.
>
> **[9:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=554)** I'm not going to put in a description for now.
>
> **[9:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=556)** Let's hit create bicycle.
>
> **[9:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=558)** And there you go.
>
> **[9:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=559)** It added it, and we know that it added it because it redirected us to that show page which is reading back values from the database.
>
> **[9:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=566)** If we click on back to list, you'll see there it is in our list as well.
>
> **[9:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=570)** So that does the trick.
>
> **[9:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-a-record?u=76281980&t=572)** In the next movie let's see how we can improve this a bit.

> [!info]- Semantic Content
>
> **Code Keywords:** let (21), new. (3), function (3), this, (3), class, (2)
> **Env Vars:** sql (13), php (4)
> **CLI Commands:** php (8), find (4), make (1)
> **File Paths:** new.php (3), initialize.php (1)
> **UI Navigation:** go to (2), scroll down (1), click on (1)
> **Cross-References:** we talked about (1), in the last (1), in the next (1)
> **Definitions:** is an  (2)
> **Speakers:** - [instructor] (1)

#### Dynamic attribute list
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=0)** - [Instructor] In the previous movie, we learned to create a new record using an existing PHP object.
>
> **[0:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=5)** In this movie, we're going to learn how we can improve that process by creating a dynamic list of the attributes.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=13)** The part of the code that I want us to focus on is right here where we're listing off all of the different columns that are in the database and then going through and listing by hand each and every one of the properties that we want to assign to those columns.
>
> **[0:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=27)** We could do this and it does work, but there are a couple of problems with it.
>
> **[0:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=30)** The first is that I'm eventually going to want to make this code reusable.
>
> **[0:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=35)** That's one of our goals later on is to make this code reusable for any database class that we have.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=41)** It doesn't matter whether it's bicycles, whether it's administrators or customers, we should be able to have some reusable code that's able to just create a record in the database regardless of what columns it might have.
>
> **[0:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=52)** So I want to create something that's a little more flexible.
>
> **[0:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=55)** The other thing is we're going to be reusing these again when we go to update in our database.
>
> **[1:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=60)** So I'm also thinking about the fact that we're going to have to list all of those out one more time when we create an update.
>
> **[1:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=67)** So what I want to do, the improvement that I want to make here is I want to create a list of these attributes to figure out what they are so that we can use them dynamically in our insert statement.
>
> **[1:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=79)** So one improvement we can make for that is we can jump up here at the top and right after database, let's add static protected and then db_columns.
>
> **[1:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=95)** This is going to be an array of the database columns.
>
> **[1:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=98)** We'll have a list of them so that we'll know what they are.
>
> **[1:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=100)** We can then loop through that list.
>
> **[1:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=102)** So let's list out our columns.
>
> **[1:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=104)** A good starting place, we can jump down here to our code, we can copy everything from brand to description.
>
> **[1:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=112)** Let's go up here.
>
> **[1:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=113)** That'll save us a little typing.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=115)** And I know I want ID at the beginning and I know that I want quotes around all of these so brand and I can type a single quote or I can do it this way.
>
> **[2:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=124)** It might be actually easier with the arrow key and just put single quotes around everything and then a semicolon at the end and now I have a list of the database columns.
>
> **[2:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=135)** The bicycle class knows what its database columns are and that's useful and it makes sense that this class ought to have that information.
>
> **[2:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=143)** So now that I have that defined, I can use it.
>
> **[2:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=146)** So I could for example use it right here.
>
> **[2:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=150)** Let me just fold some of these up to get them out of our way.
>
> **[2:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=157)** There we go.
>
> **[2:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=158)** Instantiate, all right, here we are on create.
>
> **[2:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=161)** I could use it right here, right?
>
> **[2:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=163)** My list of columns could just simply be joined together with a comma and a space, a list of all of the self::db_columns.
>
> **[2:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=178)** That's a lot easier, right?
>
> **[3:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=180)** But what about here?
>
> **[3:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=181)** What about when I want to actually go and get each one of these?
>
> **[3:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=184)** I'm going to write a special method that's going to account for that for us.
>
> **[3:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=188)** It's going to loop through the columns and figure out what all these values are for us.
>
> **[3:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=191)** The way that I'm going to do that is by creating another public function called attributes.
>
> **[3:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=198)** Attributes is sort of a synonym for properties.
>
> **[3:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=201)** It's a little bit more commonly used with the active record pattern than the name properties that PHP uses and it's useful to use something different so that I can tell the difference.
>
> **[3:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=209)** And what I want attributes to be is an array that's an associative array that has both the key and the value so it has both the property name and the value associated with it.
>
> **[3:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=220)** So let's have attributes, it's going to start out just being an empty array, and then foreach and I know right here self::db_columns foreach self::db_columns as column and I'm going to create a loop.
>
> **[3:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=239)** I'm going to loop through all the columns and I'm going to just say that the attributes, the key for the column ought to be equal to whatever this object's current value is for that column.
>
> **[4:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=253)** Now, that has to have a dollar sign in front of it because it's a dynamic value.
>
> **[4:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=257)** It's whatever the name of the column is, right?
>
> **[4:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=259)** The first time through, it's going to be brand, model, year, et cetera.
>
> **[4:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=264)** So dollar sign column will do that.
>
> **[4:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=268)** And then at the end, I'm also going to have it return back the attributes.
>
> **[4:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=273)** Now, I went ahead and added id in here as one of the columns because it is, it is one of the columns, but I don't want id to show up in this list of attributes.
>
> **[4:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=282)** So I'm also going to add one line here that just says if the column that we're looking at if it's called id, well then we want to skip it, continue.
>
> **[4:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=293)** That's the way we do that.
>
> **[4:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=294)** We just skip to the next one so it will not add column column.
>
> **[4:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=297)** It gets skipped over each and every time.
>
> **[4:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=299)** So attributes is going to be, let's make a note here, the properties which have the database columns excluding id.
>
> **[5:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=317)** Okay, so now that I have attributes, I can actually use that.
>
> **[5:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=320)** So up here in create, let's get the attributes.
>
> **[5:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=324)** It's going to be equal to this attributes.
>
> **[5:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=328)** And then now that I have them there, I can use them.
>
> **[5:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=332)** After values, let's put in another join sql equals join, again with a comma, and what we want here are the array_values of our attributes.
>
> **[5:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=348)** Now, we can actually do the same thing here.
>
> **[5:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=350)** We were using the database columns.
>
> **[5:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=352)** It's the same thing.
>
> **[5:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=353)** We also can just use the array_keys on that.
>
> **[5:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=358)** It gives a little more of a parallel structure to it.
>
> **[6:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=360)** So the array_keys from the attributes, the array_values go here.
>
> **[6:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=364)** Now, this isn't going to quite work out because I do need those single quotes around each one of those values.
>
> **[6:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=369)** So to make that work out, I'm going to put a single quote here at the beginning and I'm going to put a single quote here.
>
> **[6:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=376)** Let me actually change this.
>
> **[6:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=377)** It's going to be double quotes with a single quote comma and then a space and then a single quote to start the next one and then I'll need a single quote at the end.
>
> **[6:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=386)** I can erase all of these and right here just a single quote at the end.
>
> **[6:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=392)** That will make it all work out.
>
> **[6:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=393)** I'll have a single quote, followed by the first value, and then single quote comma space single quote and then another value and then single quote comma space single quote.
>
> **[6:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=404)** And then when I get to the end, I'll have a value followed by a final single quote.
>
> **[6:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=409)** So as you can see, this code is much, much simpler.
>
> **[6:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=411)** It saves me a lot of typing and it's something that's now a bit more reusable because depending on what the attributes are on the object, it's going to dynamically find them and generate the SQL that it needs.
>
> **[7:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=423)** Now, it's not completely reusable yet.
>
> **[7:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=425)** We'll come back to that a little later on.
>
> **[7:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=427)** For now, let's just save everything and let's try it out to make sure we didn't break anything.
>
> **[7:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=431)** Let's click add bicycle and let's try a new brand.
>
> **[7:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=434)** Mongoose, the model is going to be Switchback Sport.
>
> **[7:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=442)** The year 2015, there we go.
>
> **[7:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=446)** The category will be a mountain bike.
>
> **[7:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=450)** The gender will be men's and then the color will be blue.
>
> **[7:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=454)** The condition is going to be decent and the weight will be 24 and the price is going to be 399.
>
> **[7:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=463)** Create the bicycle and it worked.
>
> **[7:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=466)** Look at that.
>
> **[7:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=467)** Click back to list and it shows up now in our list of different bicycles.
>
> **[7:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/dynamic-attribute-list?u=76281980&t=473)** We now have simpler dynamic code and eventually it's going to pay dividends because it's reusable.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), self (3), static (1), protected (1), public (1)
> **CLI Commands:** make (8), php (2), find (1)
> **Code Identifiers:** db_columns (4), array_values (2), array_keys (2)
> **Env Vars:** php (2), sql (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Sanitize values for database
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=0)** - [Instructor] Eagle-eyed observers may have noticed that we have a problem inside our project.
>
> **[0:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=5)** That is, that we've not been sanitizing the data before we submit it to the database and our SQLSTATE.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=12)** That's an important step.
>
> **[0:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=14)** Let's say, for example, that I had an insert statement that looked something like this.
>
> **[0:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=18)** I've got values for brand, model, and year that are Faker, Mike's Bike, and 2017.
>
> **[0:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=24)** There's a problem with that second value, Mike's Bike.
>
> **[0:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=27)** Notice that Mike's Bike is being delimited on either end by single quotes, but it also contains a single quote inside of it.
>
> **[0:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=34)** SQL is going to think that the value that's being submitted is everything from the first single quote up until the single quote that's between the e and the s.
>
> **[0:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=42)** Instead, we need to escape that value, so that SQL will know that it's not a meaningful character, that it's not a delimiter, that it's actually part of the text.
>
> **[0:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=52)** We do that by putting a backslash in front of it.
>
> **[0:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=55)** That escapes the single quote, and renders it harmless.
>
> **[0:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=58)** Now, this is just a simple example, and we certainly would want to take care of this in our application, but there are also a lot worse things that could happen as well.
>
> **[1:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=66)** A hacker could use this technique in order to inject other SQL that we don't intend.
>
> **[1:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=71)** It's called an SQL injection attack, and we talk about it in the PHP with MySQL Essential Training.
>
> **[1:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=77)** So, I'm not going to go back into it again here.
>
> **[1:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=79)** Just know that we need to always escape the values before we submit them to the database.
>
> **[1:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=83)** And right now, we're not doing that.
>
> **[1:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=86)** We are using a dynamic list of the attributes.
>
> **[1:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=90)** So that's where we're getting our values from.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=92)** So what we need is for these attributes to be sanitized.
>
> **[1:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=96)** Now, we could just do that by sanitizing the value here before we add it into the attributes, but I don't want to do that to the attributes, I want to leave the attributes as an unsanitized version, so that we could potentially use it in other contexts as well.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=110)** But I am going to create a new method, which is going to sanitize them.
>
> **[1:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=113)** I'm going to make that a protected function called sanitized_attributes... And what it's going to do is it's going to take the attributes, loop through them, and sanitize the values.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=129)** So let's create a new array called sanitized, and I'm going to use that array to store these sanitized values, so we'll use a foreach loop, using this attributes as, and we're going to have both their key and their value.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=149)** So we'll loop through with both a key and their value, for everything that's inside attributes, and for each one, we'll sanitize it.
>
> **[2:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=155)** And we'll add the sanitized value into the sanitized array with the same key.
>
> **[2:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=162)** But this time, the value is going to be sanitized.
>
> **[2:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=164)** And the way we sanitize is by telling the database connection to call its method escape_string.
>
> **[2:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=171)** So I'll have self::$database, that's my database connection.
>
> **[2:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=176)** And then I'll tell it to call escape_string, and I'll pass it in the value.
>
> **[3:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=182)** Then the value will be escaped, it puts backslashes in front of single spaces, but escape_string actually does even more than that.
>
> **[3:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=188)** It checks for other problems as well.
>
> **[3:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=190)** So, it's going to escape the string, make sure that it's safe, and put it back in this array, then at the end let's return back the sanitized version, oops I misspelled sanitized there, make sure I have an extra i, make sure you've got it spelled right.
>
> **[3:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=202)** Alright, so that should return the sanitized version back.
>
> **[3:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=204)** So now that I have sanitized attributes, I'll just copy that, and instead of working with just the raw attributes, let's work with the sanitized version.
>
> **[3:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=212)** That's all it takes.
>
> **[3:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=213)** So now I'm using the sanitized attributes for getting both my keys and my values for my create statement.
>
> **[3:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=220)** Let's save it, make sure everything's still working.
>
> **[3:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=223)** So let's switch our browser, and let's try it out, make sure we didn't break anything.
>
> **[3:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=226)** So let's click on Add Bicycle.
>
> **[3:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=229)** I'm going to add new bicycle that's going to be a Diamondback, model will be Overdrive, and, just so that we have something in here with a single quote, let's make it Bob's Overdrive.
>
> **[4:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=240)** So that's going to be the name of it, is Bob's Overdrive, it has a single quote in it, now, that hopefully will not break anything.
>
> **[4:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=246)** We're going to make it a 2016 bike.
>
> **[4:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=249)** Category will be Mountain, gender will be Unisex, color will be dark green, condition is going to be just Good, the weight is 23.7, and the price'll be $565.
>
> **[4:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=264)** No description.
>
> **[4:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=265)** Let's click Create Bicycle, and see if it worked.
>
> **[4:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=269)** It did.
>
> **[4:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=270)** See, we were able to submit Bob's Overdrive.
>
> **[4:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=272)** Click back to list.
>
> **[4:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/sanitize-values-for-database?u=76281980&t=274)** Alright, it did submit it correctly, it didn't have a problem, because we sanitized the value.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this. (1), from. (1), protected (1), function (1)
> **CLI Commands:** make (8), php (1), mysql (1)
> **Env Vars:** sql (4), sqlstate (1), php (1)
> **Code Identifiers:** escape_string (3), sanitized_attributes (1)
> **Versions:** 23.7 (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Find record to update
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=0)** - [Narrator] Now that we've learned how to create records, we're ready to move to the next part of CRUD, which is updating.
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=6)** Updating in the CMS is a two-step process.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=9)** The first thing we need to do is we need to find a record in the database and get it's current data and then display it for the user in a form that they can edit.
>
> **[0:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=18)** That's similar to the process that we've had for reading records so far.
>
> **[0:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=21)** We're going to read back a record from the database, turn it into a PHP object, and use it to present a form to the user.
>
> **[0:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=27)** And then, when the form is submitted with the user's edits, we want to update the record values that are in the database using an object.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=36)** So we've got to have both parts of that process.
>
> **[0:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=38)** In this movie we're going to be looking at the first one, how we can retrieve data and put it on a form for the user to edit.
>
> **[0:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=44)** And then in the next movie, we'll look at how we can actually update it in the database.
>
> **[0:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=49)** So what we're going to be working on is this edit page.
>
> **[0:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=51)** If I click on ID number five and I click edit, we get a form here and what we want is to actually have the existing values populate this form for us.
>
> **[1:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=60)** We don't have that right now.
>
> **[1:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=62)** So let's go into our code and let's look at edit .PHP you can see it's calling initalize.php so it is database enabled and everything.
>
> **[1:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=69)** It's going to make sure that it has an ID being passed in as part of the GET request.
>
> **[1:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=74)** And if we look over here you'll see that it is there, ID equals five.
>
> **[1:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=77)** So we know that we're working with record number five.
>
> **[1:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=80)** And if it doesn't get that it'll redirect but if it does have it, then that's what it's going to set ID equal to.
>
> **[1:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=85)** Now we have a bit here that says if it's a post request, we're going to skip over that for now, because we're not dealing with a post request which is when we submit a form.
>
> **[1:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=93)** We're dealing with a get request.
>
> **[1:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=95)** So let's go down here, it's not a get request, but what do we want to do?
>
> **[1:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=99)** We want to display the form.
>
> **[1:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=100)** And that form is going to be able to show the current bicycle.
>
> **[1:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=104)** So right now this just has an empty place-holder with an array in it.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=108)** Instead, what we want to do is we want to find the bicycle that's in the database.
>
> **[1:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=112)** And we know how to do that.
>
> **[1:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=113)** We wrote a method for it: bicycle::find by ID and pass it in the ID that was set at the top of the page.
>
> **[2:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=121)** That will find the bicycle.
>
> **[2:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=123)** Now there's a chance that it won't find it, that we were given an ID but it wasn't found in the database.
>
> **[2:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=127)** So let's add a little error-checking in here.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=129)** If bicycle is equal to false, that's what find ID will return false if it doesn't find it, if it's false then let's redirect to, we'll use another one of our functions, URL four/staff/bicycles/index.php we'll just go back to the list of bicycles.
>
> **[2:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=153)** Okay, so we should have a bicycle at this point.
>
> **[2:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=156)** We were given a valid ID, it found it in the database, we now have that bicycle.
>
> **[2:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=160)** But it's not going to show up on the form yet.
>
> **[2:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=162)** Let's go down here and take a look, you'll see that it's including a file called form field.php all of the form field that we're using are in that file.
>
> **[2:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=171)** And the reason it's in a separate file is so that we can share it between both edit.php and new.php.
>
> **[2:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=176)** So that the form fields are the same in both of them.
>
> **[3:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=180)** The actual form action is different on both and the form buttons are different, but the fields that are in between are going to be shared.
>
> **[3:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=186)** So let's go over here and take a look at that.
>
> **[3:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=189)** So the first thing it does, it just makes sure that it does have a bicycle object before it even loads up.
>
> **[3:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=194)** So I make sure that we're only able to access this file when it's include, right?
>
> **[3:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=198)** Someone can't access it directly because this won't be set.
>
> **[3:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=201)** And then we need to go down here and for each one of these, we need to have the existing values.
>
> **[3:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=205)** Right now those are blank.
>
> **[3:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=207)** So let's add that in.
>
> **[3:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=208)** Let's add PHP tags, and inside their going to have echo bicycle and we want it's brand property.
>
> **[3:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=218)** And I'll put a semi-colon at the end.
>
> **[3:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=219)** And we want to make sure we escape that value to make it safe for HTML.
>
> **[3:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=222)** And we have a special function that can help us with that called HTML special charts on it.
>
> **[3:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=230)** So let's just copy that.
>
> **[3:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=233)** Onto the end of the PHP tags.
>
> **[3:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=235)** And for everything that is a input of typed text.
>
> **[3:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=238)** Let's add that in there.
>
> **[3:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=239)** So for the value here, it's going to be model.
>
> **[4:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=244)** And let's scroll passed those color, let's put one down here.
>
> **[4:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=250)** Color.
>
> **[4:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=251)** Let's do the same thing for weight.
>
> **[4:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=257)** W E I G H T_kg and price.
>
> **[4:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=265)** And inside the text area for description we can paste it as well.
>
> **[4:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=269)** Description.
>
> **[4:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=272)** Alright let's save that and let's just check that out so far.
>
> **[4:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=274)** Let's come back and just reload our page.
>
> **[4:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=277)** And look at that.
>
> **[4:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=277)** Oh, we had a problem here.
>
> **[4:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=279)** Bicycle weight kg is not accessible.
>
> **[4:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=282)** That is because, if we take a look at our bicycle class.
>
> **[4:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=286)** We made it protected.
>
> **[4:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=288)** Let's go ahead and change that real quick.
>
> **[4:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=290)** Protected, let's make it public.
>
> **[4:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=292)** Okay.
>
> **[4:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=293)** We had originally done something different there and condition ID, we're going to make public as well.
>
> **[4:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=297)** Those are all going to be public properties.
>
> **[5:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=300)** Let's come back here and reload our page.
>
> **[5:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=301)** There we go, now we're getting a lot of our data.
>
> **[5:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=303)** So we can see the existing data.
>
> **[5:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=306)** Our select option though, are still not showing up.
>
> **[5:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=308)** So let's go back and revisit those on our form field.
>
> **[5:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=311)** Let's scroll up to the top there and for year, the way we do this with select options is in the option, right here before the end of it, if it's selected it should be space selected.
>
> **[5:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=322)** But we only want it to be true if it is the one that has the current value, right.
>
> **[5:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=326)** If it matches that property.
>
> **[5:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=327)** So we've got to write a little bit of PHP here.
>
> **[5:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=330)** PHP, and that's going to say if the bicycles year is going to be equal to the year variable as we're looping through, then we're going to echo back selected.
>
> **[5:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=348)** And let's just copy all of that.
>
> **[5:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=352)** Save it.
>
> **[5:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=353)** Let's go over to Firefox and let's try it out.
>
> **[5:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=355)** I'm not just going to reload the page because I don't want a cashed version.
>
> **[5:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=358)** I'm actually going to go up here and hit return in the URL bar.
>
> **[6:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=361)** And there it is.
>
> **[6:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=362)** Now you see it says year, 2016.
>
> **[6:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=364)** Okay so now that we've got that.
>
> **[6:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=366)** Let's copy this bit of PHP.
>
> **[6:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=370)** And I'll just copy that and let's jump down to category and let's add the same thing here.
>
> **[6:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=375)** So I put a space, paste in my PHP, but this time I'm going to check whether the bicycle category is equal to the current $category.
>
> **[6:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=390)** And let's jump down here to gender.
>
> **[6:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=393)** Put a space and then my PHP code.
>
> **[6:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=396)** And lets do gender going to be equal to current gender that I'm looping through and last of all condition.
>
> **[6:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=406)** So right here put a space, and then I'll drop in my code.
>
> **[6:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=410)** And then let's check for a condition_ID and then the variable I'm using as I'm looping though is cond_id.
>
> **[7:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=420)** So there we go.
>
> **[7:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=421)** Let's go back over and reload our page and see if it's all working.
>
> **[7:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=424)** Again let's don't get a cash version let's go up here and hit return and there it is.
>
> **[7:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=428)** Now you see I have 2016, mountain, unisex and good.
>
> **[7:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=431)** It did fill in all the correct values for them.
>
> **[7:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=434)** Now that I'm able to display all those values, let's just go back, and let's click back to list and let's click add a bicycle.
>
> **[7:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=441)** Because I want to show you that we now have a problem.
>
> **[7:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=443)** Right?
>
> **[7:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=444)** Because our form is being reused in two places and it now expects to have a bicycle object in all cases.
>
> **[7:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=450)** Let's go back to new.php and see what's going on there.
>
> **[7:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=454)** So we handled when it's a post request before, that's when we're actually creating a new record.
>
> **[7:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=458)** But under the get request, we actually don't have a bicycle here.
>
> **[7:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=461)** So what kind of bicycle should it be?
>
> **[7:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=463)** Well just any bicycle will do.
>
> **[7:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=464)** We just need to have a basic bare bones bicycle when we're creating a new one to start out with.
>
> **[7:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=470)** Let's go back over, let's reload our page.
>
> **[7:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=473)** And now we don't get an error.
>
> **[7:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=475)** Right now it works just as we would expect.
>
> **[7:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=477)** We even get condition good here, which if you remember in bicycle class, in construct, that's the default condition right?
>
> **[8:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=486)** It defaults to three if no other condition has been passed in.
>
> **[8:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=489)** So it's even allowing us to set default values inside our constructor, and to display those on the form as well.
>
> **[8:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=495)** Which is kind of nice.
>
> **[8:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=497)** So now that we have our form working, so that we can view the information.
>
> **[8:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=501)** Now the user has the opportunity to make changes to it.
>
> **[8:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=504)** And then, when they're ready, they can submit the button at the bottom and we'll need to take that information and update the database with it.
>
> **[8:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-record-to-update?u=76281980&t=512)** Let's see how to do that in the next movie.

> [!info]- Semantic Content
>
> **Code Keywords:** let (40), public (3), new. (2), protected (2), pass (1)
> **CLI Commands:** php (15), find (7), make (7)
> **Env Vars:** php (9), url (2), html (2), crud (1), cms (1)
> **File Paths:** new.php (2), initalize.php (1), four/staff/bicycles/index.php (1), field.php (1), edit.php (1)
> **Cross-References:** in the next (2), go back to (2)
> **UI Navigation:** click on (1), scroll up (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** cond_id (1)

#### Update a record
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=0)** - [Instructor] In this movie, we're going to finish learning to update a record, using object oriented programming and our active record design pattern.
>
> **[0:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=7)** So far, we've completed the first part of the update process, which is that we've retrieved a row of data from the database, and turned it into an object, so that we can present it as a form for the user, so the user can edit its properties.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=19)** Now we need to do the second part, which is we need to take the values that the user submits, and we need to update a row in the database, using SQL.
>
> **[0:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=30)** So here's the form that we created in the last movie, what we want now is when we click Edit Bicycle, and it submits a post_request, we want it to update the values in the database.
>
> **[0:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=40)** So let's go to our code on edit.php, and you can see down here we took care of when we have a get request, that's the else down here, up here is if it's a post_request, if this form is being submitted.
>
> **[0:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=52)** And you can see that we're getting all of the different values that we need from the form.
>
> **[0:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=56)** We're putting them into this associative array for args.
>
> **[0:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=59)** Now what we need to do is update our bicycle with them.
>
> **[1:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=62)** So the first thing we need to do is get the bicycle again.
>
> **[1:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=65)** Right, we need to get the current values out of the database.
>
> **[1:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=69)** So that's the same process that we did down here.
>
> **[1:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=72)** So I could just take this code and I could copy it and paste it a second time.
>
> **[1:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=76)** But that would be repeating myself.
>
> **[1:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=77)** If I'm going to always need the bicycle, whether it's a get request or a post_request, then let's just move it outside of the conditional.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=84)** I'm going to cut those lines, and then let's just go up here to the top, and above the conditional, let's just find the bicycle.
>
> **[1:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=91)** So I get the id and then I find the bicycle object by its id.
>
> **[1:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=95)** If there is no bicycle, it redirects.
>
> **[1:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=97)** Otherwise, we check to see, do we just display the form, or do we update the values using post_request variables.
>
> **[1:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=105)** How do we update the values inside our object?
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=108)** I have bicycle equals down here.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=110)** I'm going to take that away.
>
> **[1:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=112)** What I want instead, is I want to tell this bicycle that it should merge _attributes with the arguments.
>
> **[2:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=122)** That will update them.
>
> **[2:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=123)** Now that's a method on bicycle that doesn't exist yet.
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=125)** We're going to have to write that.
>
> **[2:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=126)** But at that point, then, our bicycle object will have the form values, not the database values anymore.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=134)** And then we can tell our bicycle that it ought to update.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=137)** And it will save those values back to the database.
>
> **[2:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=140)** So let's write these two methods.
>
> **[2:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=142)** First, let's start with merge_attributes.
>
> **[2:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=145)** Save this.
>
> **[2:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=146)** We'll switch back over to bicycle class.
>
> **[2:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=148)** And right here, after create, I'm going to create another public function.
>
> **[2:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=153)** Let's go ahead and create a placeholder for update.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=154)** We'll come back to that in a second.
>
> **[2:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=156)** But I'm going to make another one then below it, called public function merge_attributes.
>
> **[2:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=166)** And we know that it's going to take args, as its argument.
>
> **[2:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=171)** And what do we want to do when we're inside of there?
>
> **[2:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=173)** Well, we want to go through each of the arguments that are being passed in, and we want to update the properties for this object accordingly.
>
> **[2:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=179)** So for each of the args as key and dollar sign value, let's update them.
>
> **[3:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=189)** If the property exists, good idea to just check and make sure the property is there, the property exists on this instance.
>
> **[3:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=198)** Let's check the key to see if the property is there.
>
> **[3:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=201)** And if it is, then let's set this key, going to be equal to the value.
>
> **[3:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=208)** Notice that I'm using dollar sign key here, because it's a dynamic.
>
> **[3:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=212)** I don't actually mean a property called key, I want it to change each time I go through the loop to be brand, model, year, et cetera.
>
> **[3:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=219)** So that's going to have a dynamic property as I go through them.
>
> **[3:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=223)** And I'm also going to add one more thing here.
>
> **[3:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=224)** Not only am I going to check to see if the property exists, but let's also check and make sure that the value that we're being sent is not null.
>
> **[3:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=232)** If it's null, then we won't do anything.
>
> **[3:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=234)** If it's false or zero or something else, we will set it, but only in the case when it's null, we're going to ignore it.
>
> **[4:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=241)** So if a property didn't show up on the form for some reason, or over here, on edit.php, if we ended up defaulting to null, because it wasn't set for some reason, it's not going to update the attribute.
>
> **[4:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=252)** So that means that we'll still get the existing attributes, but we'll just get updates from the form.
>
> **[4:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=259)** All right, so now that we have our attributes merged in, we can now have an object that's in memory, ready to be saved to the database.
>
> **[4:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=265)** And we can do that with update.
>
> **[4:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=267)** So let's start writing our update.
>
> **[4:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=270)** We know that we're going to need some sql for that, and we know that we're going to get back a result from calling self::$database, and telling the database that it should query using that sql.
>
> **[4:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=282)** And we're going to return back the result, which is just going to be true or false.
>
> **[4:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=286)** All right, so now we need to actually write the sql update statement.
>
> **[4:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=291)** This is an example of an sql update statement.
>
> **[4:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=293)** Notice that it has update, and then the table name.
>
> **[4:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=296)** Then set followed by the columns that we want to update and each one of them has an equals sign and the value that it should be set to.
>
> **[5:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=304)** It's a little different than what we had with create, where we had the columns and the values separated.
>
> **[5:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=309)** Here they are one after another.
>
> **[5:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=311)** So brand equals trek, model equals Emonda, year equals 2017.
>
> **[5:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=314)** And then I've got where, it's going to say which record I want to update.
>
> **[5:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=319)** So it's going to be id equals and then whatever id of the bicycle I'm looking to update is, followed by limit one.
>
> **[5:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=326)** So let's try writing that.
>
> **[5:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=327)** So let's have update bicycles.
>
> **[5:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=330)** And then I'm going to put set on this line with a space after it, because on the next line is where I'm going to start putting those pairs.
>
> **[5:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=337)** Now for now I'm just going to leave a placeholder here.
>
> **[5:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=341)** Let's just call it attribute_pairs.
>
> **[5:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=345)** Those are going to be the pairs that I'm going to come up with.
>
> **[5:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=347)** And then I'm going to have more sql after that, which is going to be the where clause.
>
> **[5:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=352)** But I want to make sure also that I have a space before the where clause, after my attribute_pairs.
>
> **[5:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=356)** So I'll put a space at the beginning of it where id equals and then single quotes.
>
> **[6:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=361)** And then inside those single quotes, I'm going to want to put the id, and make sure that I escape it.
>
> **[6:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=366)** So I'll just break those single quotes up.
>
> **[6:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=368)** It's going to be this id, but then I need to make sure that I escape that value.
>
> **[6:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=374)** And I do that with self::$database, escape_string and pass in the id as a value to it.
>
> **[6:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=384)** So that will escape the value.
>
> **[6:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=385)** It'll then drop it in an inside double quotes, let's put a space at the end, semicolon and then the last line is just going to be that limit one, which is a good sanity check.
>
> **[6:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=396)** All right, so I've got most of it here, but these attribute_pairs I punted on for now.
>
> **[6:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=400)** Now, you could go through and construct that string, step-by-step, but I think a better way to do it is like we did with create, where we used our attributes, and to dynamically come up with this list.
>
> **[6:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=410)** So we know that our attributes that we're going to be using are going to be equal to this object's sanitized_attributes.
>
> **[7:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=421)** That'll give us sanitized versions that we can use.
>
> **[7:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=425)** So now that I have those attributes, what I want to come up with is a set of these attribute pairs.
>
> **[7:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=430)** I'm just going to copy that, put it up here with the dollar sign in front of it.
>
> **[7:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=434)** The attribute_pairs is going to start out as an empty array, but I'm going to fill it up with the key value pairs.
>
> **[7:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=440)** So for each of the attributes that I just found from sanitized_attributes, as a key and a value, I'm going to loop through and I'm going to add to attribute_pairs, just append to the end, a string.
>
> **[7:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=459)** And that string is going to have curly braces for the dollar sign key, and then equals and then single quotes, and then inside those single quotes, more curly braces with the value.
>
> **[7:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=475)** So that's going to be the string that I need for each one of these.
>
> **[7:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=477)** Now that's an array of these.
>
> **[7:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=479)** I also need to join them together with commas.
>
> **[8:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=481)** So down here, instead of just attribute_pairs, I'm going to use join.
>
> **[8:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=487)** I'll put a dollar sign on attribute_pairs, and I'm going to join them together with a comma.
>
> **[8:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=494)** So it's going to join together the sets of attribute_pairs with a comma in between.
>
> **[8:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=500)** Okay, so now we've been able to merge in the attributes, and we've been able to call save, and to construct the right sql that we need.
>
> **[8:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=507)** That's the active record portion of it.
>
> **[8:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=508)** It's what allows us to go directly from the object's properties, to create sql that will update the database values.
>
> **[8:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=516)** Let's save it and let's switch back over to edit.php.
>
> **[8:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=518)** And let's just make a few changes over here.
>
> **[8:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=521)** We're going to need to get the result from that, which is going to be true or false.
>
> **[8:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=525)** And then if it's true, we'll say bicycles updated correctly, if not we're eventually going to show the errors.
>
> **[8:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=531)** Let's don't worry about that too much for now.
>
> **[8:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=533)** We'll come back and work on the errors a little later on.
>
> **[8:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=536)** For now let's save this page, and let's go try it out.
>
> **[8:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=538)** So go back to our page.
>
> **[9:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=540)** And before we had Bob's Overdrive as the model, let's take out Bob's and just make it Overdrive.
>
> **[9:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=545)** Let's click Edit Bicycle.
>
> **[9:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=548)** And look at that, it worked.
>
> **[9:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=549)** Click Back to List.
>
> **[9:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=550)** There it is.
>
> **[9:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=552)** Click Edit and let's make sure that our sanitized_values worked.
>
> **[9:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=554)** We put in Bob's Overdrive, again.
>
> **[9:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=557)** Edit Bicycle.
>
> **[9:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=558)** It still works.
>
> **[9:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=559)** And I'll just hit Back one last time so that we can take Bob's back out.
>
> **[9:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=563)** And there we are.
>
> **[9:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=565)** So that completes it.
>
> **[9:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=566)** Now we're able to both create new records, and we're able to update records.
>
> **[9:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=571)** Hopefully, you're able to see the power of wrapping up this record functionality into these methods for create and update.
>
> **[9:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=577)** They contain all of the logic necessary to take what's in an object and to put it into the database.
>
> **[9:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=584)** And instantiate does the same thing in reverse.
>
> **[9:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=586)** It takes the information that's in the database and converts it into an object.
>
> **[9:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=589)** There's one last thing that I want to do here.
>
> **[9:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=591)** I want to add another public function which is going to be called save.
>
> **[9:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=596)** So the thing about creating and updating records is that it's really the same process.
>
> **[10:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=602)** I'm saving to the database.
>
> **[10:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=603)** How are they different?
>
> **[10:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=605)** Well, if a record doesn't exist, then we want to call create.
>
> **[10:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=609)** If it already exists, we want to call update.
>
> **[10:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=611)** So wouldn't it be great if we could tell the difference and know whether a record exists or not?
>
> **[10:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=615)** Well, we can, because we know whether or not this record has an id.
>
> **[10:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=619)** So a new record will not have an ID yet.
>
> **[10:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=627)** So we can check in our code to see whether or not there's an id.
>
> **[10:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=631)** We can have if is set, dollar sign this id.
>
> **[10:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=637)** And then put an else.
>
> **[10:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=640)** Now if the id is set, then we know it's an existing record.
>
> **[10:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=644)** So we can have return this update.
>
> **[10:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=648)** But if it's not set, then we know it's a new record, and we can return what we get back from the results of this create.
>
> **[10:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=655)** See how that works?
>
> **[10:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=656)** So now instead of calling create or update, we can simply call save.
>
> **[10:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=659)** And in fact, I'm going to change these to be protected so that they can't be called anymore.
>
> **[11:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=665)** And let's go to the two places where we're calling them.
>
> **[11:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=669)** And instead of update, let's just call save there.
>
> **[11:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=672)** And on new.php, same thing.
>
> **[11:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=676)** We'll just simply call save.
>
> **[11:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=678)** And it'll sort out whether or not it's a new record or not.
>
> **[11:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=680)** We don't need to worry about that and call the right one.
>
> **[11:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=682)** We just say save this, and it will save it, whether it's new or not, it will save it to the database.
>
> **[11:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/update-a-record?u=76281980&t=687)** It will essentially sync the two together.

> [!info]- Semantic Content
>
> **Code Keywords:** let (27), public (3), function (3), switch (2), self (2)
> **Code Identifiers:** attribute_pairs (8), post_request (4), merge_attributes (2), sanitized_attributes (2), escape_string (1)
> **CLI Commands:** make (9), php (4), find (2)
> **File Paths:** edit.php (3), new.php (1)
> **Definitions:** is a  (2), means that (1), is an  (1)
> **Cross-References:** in the last (1), go back to (1)
> **UI Navigation:** go to (2)
> **Env Vars:** sql (1)

#### HTML forms for OOP
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=0)** [Instructor] In this movie, I want to show you a technique for working with form data that's very useful when we're working with object-oriented programming.
>
> **[0:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=7)** This technique does not use php at all.
>
> **[0:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=10)** It really just uses plain HTML, but I think that it's helpful enough that we should cover it here.
>
> **[0:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=16)** So far, when we've been creating our form data, we've been creating our form tags, such as input.
>
> **[0:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=23)** We have typed text, and then we've been giving it a name, and the name is just the property that we want to be associated with.
>
> **[0:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=29)** We have brand, model, year, et cetera.
>
> **[0:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=31)** Altogether our code, we have 10 different form elements and they're and not all input tags, but you get the idea.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=36)** When we submit our form, it's going to submit values for each one of those properties, and then when we go to process the form values, we're going to take each one of those values that's been submitted in the post data and we're going to create an associative array where we also assign it to a key by the same name.
>
> **[0:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=53)** So we have our args and we have a key for brand, and we're going to set it equal to the value that was submitted in the form for brand and so on.
>
> **[1:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=61)** Then once we have our associative array of args built up, we're going to pass that into the object to create a new bicycle object with those values.
>
> **[1:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=69)** Okay, so that's how we're doing things so far.
>
> **[1:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=71)** Now let's talk about how we can improve this.
>
> **[1:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=74)** In HTML, we have the ability to name one of our form fields using square bracket notation, and if we do that, what HTML will do is it will submit a series of values as an array.
>
> **[1:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=89)** So, name bicycle and then in square brackets brand means that the HTML form will submit bicycle as the value and it will be an array with the key brand, and then the value of whatever the user has submitted.
>
> **[1:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=103)** And the same thing for model, year, and so on.
>
> **[1:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=106)** So what that means is when we go to process the form, we're looking at an array of values instead of a bunch of single values that we have to go retrieve.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=115)** So we can just simply go to the post super global and ask for one item: that is bicycle.
>
> **[2:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=123)** And what we get back is an associative array.
>
> **[2:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=126)** So instead of having to build up that array by going and retrieving all those values one at a time, we're instantly given an array, just because we named our form fields differently.
>
> **[2:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=135)** It's a super useful technique.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=137)** You can see how much it simplifies things.
>
> **[2:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=139)** Now instead of having to go and retrieve 10 different values and assign them to our associative array and build that up, we can just simply ask for one value in the post variables, and we've got our associative array, ready to go, ready to create a new bicycle.
>
> **[2:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=153)** Let's try it in our application.
>
> **[2:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=156)** So, you'll want to open up the form fields in bicycle because what we're going to be doing is changing the name here.
>
> **[2:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=161)** So for each and every one of these, we're just going to put bicycle and then square brackets are going to go around what was the previous name.
>
> **[2:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=169)** I'm just going to copy this so I can paste it a bunch of times, save myself from typing.
>
> **[2:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=176)** And I'm going to do it even to the select option here.
>
> **[2:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=178)** Doesn't matter what we do it to.
>
> **[2:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=179)** There's year.
>
> **[3:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=182)** Here's category.
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=185)** Everywhere we have a name, gender.
>
> **[3:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=189)** Come down here to color.
>
> **[3:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=193)** And condition id.
>
> **[3:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=196)** Now if we ever wanted something to not be included in the array, then we could just simply leave it out, but what this will do is that all of these values we're submitting will now all be inside an array of values.
>
> **[3:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=208)** Okay, I think I've got them all.
>
> **[3:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=210)** Let me just scroll back up and make sure I didn't miss any.
>
> **[3:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=217)** Yes, I got them all.
>
> **[3:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=218)** Okay good.
>
> **[3:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=219)** So now let's save it.
>
> **[3:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=221)** We can go back over here and let's click on add a bicycle.
>
> **[3:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=225)** Our form still comes up just fine.
>
> **[3:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=227)** If we actually inspect the form, we can do that with our Firefox tools, web developer, and there's a view page source down here.
>
> **[3:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=238)** You can scroll down; you can see what these look like.
>
> **[4:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=240)** So that's what it's going to look like.
>
> **[4:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=241)** Now before we submit it, let's go back over and let's change the way that we're working with these on a new dot php.
>
> **[4:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=247)** Instead of doing all of this work right here, we can simply change this to just be args is going to be equal to, and I'll make it post, bicycle.
>
> **[4:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=259)** And then we'll put a semicolon.
>
> **[4:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=262)** We'll take all of these lines out, and that's all we have to do.
>
> **[4:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=265)** It's that simple.
>
> **[4:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=267)** In fact, I'll take that line out as well.
>
> **[4:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=268)** I'll copy this.
>
> **[4:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=270)** Let's save the page.
>
> **[4:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=271)** We'll go to edit dot php and do the same thing.
>
> **[4:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=273)** All of this code here, it's just going to be reduced down to this.
>
> **[4:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=278)** Just ask for the contents of this bicycle array, an HTML associative array.
>
> **[4:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=283)** So let's take that and let's go back to our page, and let's try it out.
>
> **[4:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=287)** Let's try a new bicycle.
>
> **[4:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=289)** This one's going to be a Schwinn.
>
> **[4:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=292)** The model is 21 Speed Suburban CS.
>
> **[4:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=298)** The year, we'll make it 2015.
>
> **[5:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=302)** The category will be a hybrid.
>
> **[5:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=306)** This will be a women's bike.
>
> **[5:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=308)** Color is going to be burgundy.
>
> **[5:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=312)** The condition, we'll just make it good.
>
> **[5:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=315)** And the weight, we'll make it 20 kilograms, and the price will be $299.
>
> **[5:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=320)** All right, let's click create bicycle, and look at that.
>
> **[5:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=323)** It still worked.
>
> **[5:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=325)** We still got our bicycle.
>
> **[5:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=326)** The same thing is true when we go to edit.
>
> **[5:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=328)** The only difference we made is just the way that HTML is going to send those values to the post variable and the way that we retrieve them.
>
> **[5:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/html-forms-for-oop?u=76281980&t=336)** It's a super handy technique.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), this. (3), super (3), pass (1)
> **CLI Commands:** make (5), php (3)
> **UI Navigation:** go to (5), click on (1), scroll down (1)
> **Env Vars:** html (6)
> **Definitions:** means that (1), is an  (1)
> **Cross-References:** go back to (1)
> **Tools:** firefox (1)
> **Analogies:** such as (1)

#### Validations and errors
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=0)** - [Narrator] Before we leave the topic of creating and updating records in the database, I want us to talk about validations and errors.
>
> **[0:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=7)** This is a concept that we talked about in the PHP with MySQL essential training.
>
> **[0:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=11)** The fundamental idea is that we want to have control over the quality of data that gets saved to the database.
>
> **[0:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=17)** Not all data is necessarily acceptable, and we want to be able to control that so that we have control over what goes in and comes out of our application.
>
> **[0:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=25)** One way to do that is with validations.
>
> **[0:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=27)** We check to see if data meets our standards before we put it in the database.
>
> **[0:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=31)** And if it doesn't, then we want to know what went wrong, and we want to tell the user about it so that they can fix the problem, and try to submit it again.
>
> **[0:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=38)** So that's where validations and errors come in.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=41)** The basic structure that we've been using for our validations is just that we're going to keep a list of the errors.
>
> **[0:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=46)** So to start with, we'll have an array of errors, that's going to be empty, because there are no errors yet, and then we'll perform a series of validations.
>
> **[0:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=54)** And validations are just conditional statements where we check to see if something is true or not.
>
> **[0:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=58)** And we can really do just about anything in those validations that we want.
>
> **[1:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=62)** We also saw that we can write some functions that can help us to perform common validations.
>
> **[1:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=67)** But the end result is the same, either it's true, or it's false.
>
> **[1:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=71)** The data either meets that requirement, or it doesn't, and if it doesn't, then we want to simply add some kind of an indication to our errors array to let us know what the problem was.
>
> **[1:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=81)** Then, after we've performed all of our validations, we'll be able to look at that errors array and see.
>
> **[1:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=86)** If it's empty, then we know that it passed all of its validations, and the data's good to be sent to the database.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=92)** But if not, then we don't want to save the record.
>
> **[1:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=94)** Instead, we want to display errors back to the user.
>
> **[1:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=98)** This technique can be used both in procedural programming, or in our object-oriented programming.
>
> **[1:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=103)** Let's see how we can add it to our bicycle class.
>
> **[1:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=106)** To begin with, I've got a file in the Exercise Files called validation_functions.php.
>
> **[1:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=111)** I'm just going to drag that into my private directory of my project.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=115)** And then we'll go into the project and take a look.
>
> **[1:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=118)** It just contains those basic validation functions that we commonly use, whether something is blank, whether it has a presence, whether it has a length greater than a certain amount, whether it has a length less than a certain amount, whether it has a length exactly amount, whether the length is, and you can provide an associative array of options.
>
> **[2:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=135)** And then whether it's included or excluded from an array, whether something has a string inside of it, whether it's a valid email format, and then eventually we'll work on having a unique username.
>
> **[2:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=146)** So those are just some basic validation functions, you can write others that you use as well.
>
> **[2:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=151)** Let's make sure our application knows about those by switching to initialize.php, and right here, just going to copy this line.
>
> **[2:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=158)** And let's just change this to be validation functions, so now those will be loaded up and ready for us to use.
>
> **[2:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=165)** Okay so now let's switch to the bicycle class.
>
> **[2:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=168)** The first thing I want to do is I need to have a way for my bicycle to know what errors are there?
>
> **[2:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=174)** Now I could just have a simple array anywhere, but I might as well have the array inside the class, right?
>
> **[2:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=179)** How many errors are there on this instance, on this object, what are the problems that this object has?
>
> **[3:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=186)** So I'm going to do that by just having a new property here for errors, which is going to be set to an empty array by default.
>
> **[3:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=194)** So that's where I'm going to store all the errors on a bicycle instance before I try and save it.
>
> **[3:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=199)** So now, before I try to create it, or, before I try to update it, I need to first check and see, is it valid?
>
> **[3:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=207)** Run its validations.
>
> **[3:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=209)** So I'm going to need to have a new method here, I'm going to call it protected function validate.
>
> **[3:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=216)** It doesn't need to take any argument because it's just going to use the existing instance's properties.
>
> **[3:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=222)** And then, right here, in create, let's just call this validate.
>
> **[3:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=229)** And then, it'll check and see, after it calls that method, that method should add any errors to the errors array.
>
> **[3:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=236)** So we can just check and see.
>
> **[3:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=237)** If it's not empty at the end, this errors then we'll know there was a problem, and we can simply just return false.
>
> **[4:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=249)** That's it.
>
> **[4:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=250)** We won't do anything else, we won't sanitize the attributes, or assemble our SQL, we'll just simply return false right away.
>
> **[4:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=255)** We weren't able to create it.
>
> **[4:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=257)** Let's take those same two lines and copy it.
>
> **[4:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=259)** Let's come down here to update, and we'll do the same thing.
>
> **[4:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=262)** First thing I'll do is run the validations and then check to see did the validations result in adding any errors to the error array?
>
> **[4:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=270)** Okay so now we've got those both in there, now we need to actually write the validation function.
>
> **[4:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=274)** So our validation function can be anything we want, I'm going to keep it really simple for now.
>
> **[4:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=280)** And I'm just going to use is blank.
>
> **[4:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=283)** So, if is blank, this brand, if the property brand is blank, then we're going to add to our errors array this errors.
>
> **[4:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=294)** And then we're going to use the square bracket to append to the end.
>
> **[4:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=297)** And then brand cannot be blank.
>
> **[5:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=303)** And I'll do the same thing, I'll just copy that, we'll make another one here.
>
> **[5:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=307)** This one is going to be model, and we'll say model cannot be blank.
>
> **[5:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=312)** So I'm just going to check and see, make sure that brand and model have values.
>
> **[5:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=316)** Now you'd probably want to write validations for all of the different properties to make sure that they all meet the requirements.
>
> **[5:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=322)** For now I'm just going to keep it simple and just have these two.
>
> **[5:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=325)** Now my validations are the same here for both create and update, that's usually true.
>
> **[5:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=330)** You could write something fancier that allowed you to have different validations in each case, but most of the time, if we're really checking to see if the data meets a certain set of standards, the standard is the same, whether we're creating or updating, so that's okay.
>
> **[5:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=342)** And then, right before this, when I call the validation, it's also a good practice to just make sure that errors starts out being empty.
>
> **[5:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=350)** So errors is going to be set to an empty array, and that way, if I call it more than once, it'll always reset itself back to an empty array before it runs all its validations, I won't accidentally add the same errors twice.
>
> **[6:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=362)** And then, as a good practice, at the end, I'm just going to return back the value of this errors.
>
> **[6:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=368)** I don't have to do that, you can see I'm not even catching a value that this is being returned from, but it's a good idea, just to go ahead and have a return value back out of this validate function if I wanted them.
>
> **[6:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=377)** Okay so now that I have my validation in place, let's save it, and let's go try it out.
>
> **[6:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=382)** Let's go back to Firefox.
>
> **[6:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=385)** Let's try adding a new bicycle.
>
> **[6:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=387)** Before we do that, actually, let's make sure we have the ability to display the errors, I forgot that.
>
> **[6:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=392)** Let's go to new.php.
>
> **[6:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=394)** And let's scroll down here, and you can see I comment it out before.
>
> **[6:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=398)** We're going to un-comment that line right after create bicycle, before we display the form, it's going to show the error.
>
> **[6:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=403)** So now the errors are not just in an errors array anymore, now it's going to be inside the object, right, remember up here, we have the bicycle object.
>
> **[6:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=412)** So it's going to be bicycle.
>
> **[6:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=415)** And then it's public, so we can just ask for its errors.
>
> **[6:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=418)** And I'm just going to copy that line.
>
> **[7:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=421)** Then switch over to edit.
>
> **[7:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=423)** And let's find the spot there where we have the errors.
>
> **[7:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=425)** Here it is.
>
> **[7:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=427)** Let's past that line in there as well.
>
> **[7:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=429)** Okay, so now it should display the errors, let's go back and reload our page.
>
> **[7:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=434)** Okay, works, there's no errors right now.
>
> **[7:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=436)** Now let's try just submitting it, create bicycle.
>
> **[7:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=438)** Nope, it didn't work, please fix the following errors.
>
> **[7:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=441)** And it told us what the errors are.
>
> **[7:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=442)** Notice that we had two errors, the brand can't be blank, and the model cannot be blank.
>
> **[7:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=447)** So now, let's try adding one, and let's fill in each of one of those, let's try a Schwinn.
>
> **[7:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=454)** It's going to be a Sanctuary seven-speed.
>
> **[7:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=461)** And the year will be a 2016.
>
> **[7:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=464)** Category, it's going to be a Cruiser.
>
> **[7:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=467)** The gender is a Women's.
>
> **[7:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=469)** It's going to be purple.
>
> **[7:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=472)** Condition is good.
>
> **[7:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=473)** The weight will be 19.5 kilograms.
>
> **[7:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=476)** And the price will be 190.
>
> **[7:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=478)** Alright, now, let's click submit.
>
> **[8:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=481)** And look at that, it worked this time.
>
> **[8:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=483)** Let's go back to list, and let's just try editing it.
>
> **[8:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=486)** Let's just try taking away the brand, let's click edit bicycle.
>
> **[8:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=490)** Nope, sorry, Brand cannot be blank.
>
> **[8:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=492)** We need to fix that.
>
> **[8:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=493)** See how that works?
>
> **[8:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/validations-and-errors?u=76281980&t=494)** So in both cases, it runs our validations before it tries to save or update the record and if there are problems, it shows them back to the user.

> [!info]- Semantic Content
>
> **Code Keywords:** let (27), function (4), class. (2), switch (2), private (1)
> **CLI Commands:** make (6), php (4), mysql (1), find (1)
> **File Paths:** validation_functions.php (1), initialize.php (1), new.php (1)
> **Cross-References:** go back to (2), we talked about (1)
> **UI Navigation:** switch to (1), go to (1), scroll down (1)
> **Env Vars:** php (1), sql (1)
> **Definitions:** is a  (2)
> **Best Practices:** good practice (2)

#### Delete a record
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=0)** - [Instructor] Now that we've talked about how to create, read, and update using the active record pattern, we have one more operation to talk about.
>
> **[0:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=7)** And that is delete.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=9)** Delete is by far the simplest of all the four major operations.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=12)** We don't have to worry about getting any form data to submit to the database, and we don't have to worry about working with any data that we get back from the database.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=19)** We just simply tell the database to delete a specific record, and it either does or it doesn't.
>
> **[0:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=24)** It's that simple.
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=26)** Let's remind ourselves what an SQL delete statement looks like.
>
> **[0:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=30)** It's also very simple.
>
> **[0:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=31)** We just have DELETE FROM, and then the table name, and in this case, bicycles.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=36)** And then we have to tell it how to find the record or records that it should delete.
>
> **[0:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=39)** Most of time we just want to delete a single record, and we're going to use it's primary key, which is its id.
>
> **[0:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=45)** So I have a WHERE clause, where id='1'.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=48)** I'm putting that inside single quotes to help prevent SQL injection.
>
> **[0:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=51)** And then I'm also using a LIMIT clause after that just to make sure that I don't accidentally delete more records than I intend.
>
> **[0:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=58)** This will insure that this delete is only going to delete one and only one record.
>
> **[1:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=61)** Let's try adding that to our bicycle class.
>
> **[1:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=65)** So in the bicycle class, inside our active record code here down at the bottom let's add a new public function for Delete.
>
> **[1:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=74)** So the idea here is that I've gone to the database.
>
> **[1:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=77)** I've already found this object so I have the object, and I can call a method on it called Delete.
>
> **[1:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=82)** And Delete is going to have all the information that it needs to know how to delete this object from the database.
>
> **[1:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=88)** So we know that we're going to need to write some SQL.
>
> **[1:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=90)** For now I'll just put a placeholder for that.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=92)** And then we know we're going to want to run that SQL by telling our database, database, it needs a dollar sign in front of it, that it's going to query using our SQL, And it'll get back a result.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=108)** And for delete statements the result is just true or false.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=110)** So let's just turn back that result.
>
> **[1:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=113)** It either succeeded or it didn't.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=115)** So now let's write the SQL.
>
> **[1:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=118)** We just saw that in the slide.
>
> **[2:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=120)** It's, DELETE FROM bicycles, space, and I'll go to a new line, SQL append WHERE id=, and then inside single quotes, we're going to have the id.
>
> **[2:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=136)** I'm going to put a space; I'm going to go to the next line, SQL, it's going to be, LIMIT 1.
>
> **[2:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=144)** Now inside these single quotes I need to put the id for this object.
>
> **[2:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=148)** So I'll do that by appending this id inside there.
>
> **[2:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=152)** But we don't want to just use it as is, we also want to escape the value before we submit it to the database.
>
> **[2:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=158)** We know how to do that with self, dollar sign, database, and call it escape_string method.
>
> **[2:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=167)** We'll pass in this id as an argument. So that'll sanitize the value, and drop it in.
>
> **[2:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=172)** Alright, so now we've written an SQL statement.
>
> **[2:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=174)** So when we have an object, we can call the delete method and it will delete the underlying record.
>
> **[3:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=180)** Now the object is still going to to be there for a little while at least for the duration of this PHP script.
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=185)** And that can be useful.
>
> **[3:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=187)** In fact, I'm going to make a note down here at the bottom that just says, after deleting the instance of the object will still exist, even though the database record does not.
>
> **[3:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=209)** This can be useful as in: let's give a little code example here, I can echo back, let's say I have a user and I want to say the first name of the user, space, was deleted, right.
>
> **[3:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=228)** I can use that object still in my PHP code because I still have it's property value, even though there's no underlying database record.
>
> **[3:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=236)** But we do have to be careful of that for example, we can't call dollar sign user update, after we just finished calling dollar sign user delete.
>
> **[4:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=256)** So we'll have to be careful about that, and make sure that we can use it in limited cases because there is no underlying record.
>
> **[4:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=262)** We know that the underlying record is gone now because we just deleted it.
>
> **[4:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=265)** But we still have an object in PHP's memory that we can use at least temporarily.
>
> **[4:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=271)** Alright, so now that we have our delete function, let's save that and let's go use it.
>
> **[4:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=275)** Let's go to delete.php, that's the page I created for this.
>
> **[4:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=279)** And to begin with, it's just going to get the id, then if it's a get request, we're going to show a page that it says are you sure you want to delete this bicycle?
>
> **[4:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=288)** It's just a confirmation page, and if they post to it and say yes I do want to delete it, then we're we're actually going to execute the delete.
>
> **[4:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=295)** So the delete's going to happen here as a post request.
>
> **[4:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=298)** So in either case, we want to to find the bicycle, just like we did when we were updating the record.
>
> **[5:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=305)** Let's go to edit.php and here it is right here at the top I'm just going to copy these lines because we ought to be able to find the bicycle to know whether or not we are going to delete it or not.
>
> **[5:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=314)** So let's copy those lines and go back to delete.php, there it is.
>
> **[5:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=319)** And right after we find the id, we're going to find the bicycle, now we have an instance, we have an object, cause we're using active record to find it and read from the database.
>
> **[5:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=327)** If we don't find it for some reason, we'll just go back to the index page, but, if we did find it, then let's go down here instead of just bike name, we'll have a placeholder instead we want to say bicycle and let's put in it's name.
>
> **[5:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=345)** That'll just display the name of the bicycle so the user can decide if they want to delete it or not.
>
> **[5:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=350)** And then, if they do delete it right here, then we just need to tell that bicycle object to call it's delete method.
>
> **[6:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=360)** Delete.
>
> **[6:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=364)** And let's get back it's result, it will return true or false.
>
> **[6:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=368)** We could do some error checking here to see if it return false for some reason, we could try to display the errors for why that was false, but that's pretty rare.
>
> **[6:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=375)** Most of the time, if we tried to delete it, it's going to delete successfully, so I'm going to leave this and keep it simple and just say it was deleted, and let's redirect them.
>
> **[6:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=383)** Alright, so let's try it.
>
> **[6:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=385)** Let's save this, let's go back, let's start by creating a bicycle that we can destroy.
>
> **[6:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=389)** I'm going to make this a junk bike, model is going to be delete me.
>
> **[6:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=396)** The year, I'll just pick something, the category, the gender, color, condition is fine, weight, I'll make it one, and the price will be two.
>
> **[6:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=407)** Alright, create bicycle, there it is.
>
> **[6:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=410)** Now I've got my junk bicycle, back to list.
>
> **[6:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=412)** Here it is, I see the junk bike down here, and I want to delete it, so I click on delete.
>
> **[6:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=416)** It opens up the delete page, you can see it's passing in the id of eight.
>
> **[7:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=421)** It goes and finds that bicycle, so it has the name.
>
> **[7:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=423)** Now we want to click delete bicycle, now it's going to be a post request.
>
> **[7:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=427)** And that post request is going to send that same id, it goes and finds the object, calls the delete method, which sends the SQL, then it redirects us back to the list page.
>
> **[7:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/delete-a-record?u=76281980&t=438)** And you can see that the record is gone from the database.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (39), let (20), case, (2), function (2), from, (1)
> **CLI Commands:** find (8), php (6), make (5)
> **Env Vars:** sql (10), php (3), delete (2), where (2), limit (2)
> **UI Navigation:** go to (4), click on (1)
> **File Paths:** delete.php (2), edit.php (1)
> **SQL:** where (2), delete from (1)
> **API Endpoints:** delete  (1), delete
 (1)
> **Cross-References:** go back to (2)

#### Create inheritable code
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=0)** - [Narrator] We have successfully been able to implement the active record design pattern on our bicycle class.
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=6)** Our bicycle class is able to create, read, update, and delete records in the database.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=12)** So it allows us to work with those database records in an object oriented way.
>
> **[0:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=16)** That's what the active record design pattern is all about.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=19)** In the next chapter we're going to start working with user authentication.
>
> **[0:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=22)** And we're going to want to have a table of the admin users, so the store their username and password, and know who's able to log in.
>
> **[0:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=29)** We're also going to want to have a content management system for those, so that we have the ability to create, read updated and delete our admin users.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=36)** So we could take all of the code we just worked on, in our bicycle class, we could take it and copy it, and paste it into an admin class, so we'd have that same behavior there.
>
> **[0:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=47)** And then if our application gets more robust and the start adding more features, we have more tables, we want to implement it again, we could take that code and copy it and paste it into those classes as while.
>
> **[0:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=58)** This violates a fundamental principle of programming.
>
> **[1:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=62)** Which is don't repeat yourself.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=64)** It's a good idea to have code in one place, so that it gets edited only one time, and it helps you to maintain the code, and also keeps you from making careless mistakes.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=75)** So a much better approach to this would be to have all of this behavior in one place and allow the bicycle class, the admin class, and any other class that needs it, to be able to use it.
>
> **[1:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=86)** We can do that using class inheritance.
>
> **[1:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=89)** That's the techniques we talked about in the PHP object oriented programming course.
>
> **[1:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=94)** The idea is that we have a parent class, in this case database object, and then we have subclasses that inherit those behaviors from that parent class.
>
> **[1:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=103)** Bicycle class, and admin class.
>
> **[1:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=105)** They can both share the behaviors, and we don't have to repeat ourselves.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=110)** We will have to make some modifications to our code though, because the code in database object has to be a bit more abstract.
>
> **[1:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=116)** We have to be able to use it for both the bicycle class, which has a bicycles table, that has its own unique set of columns, and the admin class, which has its own table, and in its own unique set of columns.
>
> **[2:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=128)** So we need to have code that's a bit abstract in the parent class so that all the sub classes can use it.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=134)** Let's add this database object class to our project.
>
> **[2:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=138)** So inside the classes directory let's add a new file, I'm going to call it database object.class.PHP.
>
> **[2:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=146)** And we'll just put PHP tags in there.
>
> **[2:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=150)** And class definition for database, object.
>
> **[2:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=155)** We'll just make it empty for now.
>
> **[2:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=157)** And we'll save that file let's go over to bicycle class.
>
> **[2:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=160)** and it is going to inherit from it, so we use the extends key word and then the name of the class database, object.
>
> **[2:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=168)** And that's it!
>
> **[2:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=169)** We'll save our file, and now are bicycle class is inheriting from the database object class.
>
> **[2:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=174)** So now we just need to move the properties and methods that are appropriate into the parent class.
>
> **[3:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=180)** Let's go over the parent class and let's think about what some of those might be.
>
> **[3:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=183)** To begin with, we know that we're going to want to have a database connection.
>
> **[3:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=187)** All of our objects that are going to be database objects are going need to have that.
>
> **[3:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=191)** So we'll have static, protected, dollar sign, database.
>
> **[3:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=197)** And we know that each one of our classes is going to need to have its table name, right?
>
> **[3:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=202)** It's going to need to specify what the table name is.
>
> **[3:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=205)** So I'll have static, protected, dollar sign, table, name.
>
> **[3:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=211)** So each one will be able to keep track of it, but to start with it's going to just be empty.
>
> **[3:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=215)** And we know that each one of them is also going to have columns protected, dollar sign, columns.
>
> **[3:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=222)** Now each one will specify its own, so let's just make it an empty array to start with.
>
> **[3:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=227)** And then we know that we're going to want to also have those errors.
>
> **[3:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=230)** All of our objects are going to be able to keep track of their errors.
>
> **[3:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=234)** So we're going to set that as an initial property as well.
>
> **[3:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=237)** Alright so now let's switch over to the bicycle class.
>
> **[4:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=240)** We don't need to specify the database anymore because we just set that there, but we do need to change this to be table name, 'cause we need to specify that the table name is going to be bicycles.
>
> **[4:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=253)** Then we're going to need a list of the columns that we're going to have, the errors we don't have to include anymore, and then all of these methods that are down here.
>
> **[4:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=261)** Let's just select all of them, I'm going to just like that first line and then scroll down to the bottom.
>
> **[4:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=267)** Down where have indirect or code.
>
> **[4:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=269)** And I'm just going to cut all of that.
>
> **[4:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=272)** There we go and I can actually remove this start of active record code up here at the top.
>
> **[4:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=276)** Let's save it and let's switch over database class, and I'm going to paste all of those in here, every single one of them.
>
> **[4:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=283)** Don't need this at the end anymore.
>
> **[4:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=285)** Because now this is all active record code.
>
> **[4:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=288)** Now it's not abstract enough for us to be able to use yet.
>
> **[4:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=291)** But right now this should allow the bicycle class to use it, right, it should still inherit it, we haven't changed anything so it's going to inherit those methods as is and they should still work.
>
> **[5:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=301)** You can try out if you want, but I'm going to set about the task of making it more abstract first.
>
> **[5:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=306)** The first thing any do is I need to find all occurrences of the word bicycle, and I instead need to abstract that to be whatever the table name is that's been specified.
>
> **[5:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=315)** So let's scroll down 'til we get to find all and you'll see its select all from bicycles.
>
> **[5:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=320)** Well its not select all from bicycles anymore, now it needs to append on self colon colon dollar sign table underscore name.
>
> **[5:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=330)** That's now going to use that new property, the table name, instead of being a hard coded value, and that will allow this to be inherited.
>
> **[5:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=337)** However, there is an issue.
>
> **[5:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=339)** In the object orienting programming course, we talked about the difference between early static bindings and late static bindings.
>
> **[5:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=346)** When we use this self keyword, it's going to say that it's bound to the class in which its defined.
>
> **[5:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=353)** That is the database object class.
>
> **[5:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=355)** It's essentially the same thing as if we had actually typed database object.
>
> **[6:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=360)** Instead of using self, what we want to use is static .
>
> **[6:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=364)** That's going to determine the class name at run time, so we call find all it's going to see what class is this inside of.
>
> **[6:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=371)** If its inside the bicycle class, then this will be asking for the bicycle table name.
>
> **[6:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=377)** If it's the admin class it'll be asking for the admin table name, and that's what we want, so we want to change that to be static.
>
> **[6:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=384)** So everywhere we have bicycles, I'm just going to copy this, we're going to put that in there, let's append it together actually, I still need a space at the end.
>
> **[6:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=394)** So it's up to you how you add that space, but I do need a space after the table name and before the where clause.
>
> **[6:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=399)** So let's make sure that still gets in there, in fact I'm going to copy everything including those double quotes, and let's just scroll down, to the next instance a bicycle, here it is an insert.
>
> **[6:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=413)** I'll drop it in there, and update, I'll paste it in there, and scroll down to delete there we go.
>
> **[7:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=422)** And again, just make sure you have that space after the table name.
>
> **[7:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=426)** Okay so now I have abstracted the table name, so this would work with any class based on the table name.
>
> **[7:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=432)** But this late static binding is actually going to be an issue in other cases as well.
>
> **[7:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=436)** There other times in our code where we call self.
>
> **[7:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=439)** Let's scroll up to the top, let's click and then I'll do a search for self.
>
> **[7:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=444)** Now here, we're finding self in front of the database.
>
> **[7:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=448)** I think that it's actually okay for us to use a single reference for the database.
>
> **[7:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=452)** One they gets defined on the database object at the beginning.
>
> **[7:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=456)** In fact, I'm going to go over to initialize.PHP.
>
> **[7:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=460)** And right here, where we're setting it on the bicycle class, I'm going to change that to sell on the database object class.
>
> **[7:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=467)** So it get sat right at the beginning, and then all of my classes that inherit will be using that same property, the one that's defined on the debates object class.
>
> **[7:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=477)** I think that's okay, but every other time we use self, like here, when we call instantiate, we want to be calling it on the static version, the one at run time, right, the sub class.
>
> **[8:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=488)** Alright so lets do another find self, find by SQL should also be static.
>
> **[8:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=495)** Here's another one here, static, let's do another find.
>
> **[8:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=500)** This one's very important and instantiate, we want to make sure that we're getting our static version, so that we're getting the current class, not the database object class.
>
> **[8:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=510)** And that one's okay.
>
> **[8:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=512)** That one's okay.
>
> **[8:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=514)** Anything that references the database is fine, but anything that reference to something else, we want to change.
>
> **[8:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=521)** So I'm going through all of them, lets just a quick check back at the top.
>
> **[8:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=525)** Make sure I got 'em all database, database.
>
> **[8:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=532)** And yes, I did get 'em all.
>
> **[8:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=534)** Okay, I've changed those all so now they use the correct bindings, late static bindings in most cases.
>
> **[9:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=540)** There's one more change that we should make, which is to the validations.
>
> **[9:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=545)** Let me just fold these up, until we get to the validate function.
>
> **[9:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=551)** validations are going to be specific to each one of our classes.
>
> **[9:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=555)** So I'm actually going to take that, and I'm going to copy it, and let's go back to the bicycle class for a moment, and let's add that back in.
>
> **[9:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=563)** Now instead of putting it at the top, I'm actually going to drop down and put it the very bottom of the class, so there's my validations, right?
>
> **[9:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=570)** So that's going to be unique to each class.
>
> **[9:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=573)** The database object class can just have a generic validation here.
>
> **[9:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=577)** Say add custom validations.
>
> **[9:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=581)** Alright so we'll override that in the sub class.
>
> **[9:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=584)** The sub class will have its own way of handling the validations.
>
> **[9:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=588)** If we don't to do any validations, if don't write them, it still does exist, it still does get inherited.
>
> **[9:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=594)** Alright, so I think that takes care everything, let's save this, let's go back to the bicycle class.
>
> **[9:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=598)** Just going to shoot to the top and make sure I've got everything.
>
> **[10:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=600)** The table name, the database columns, the errors is already provided somewhere else, so I'm good.
>
> **[10:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=606)** Let's go back over make sure we didn't break anything in the process of doing all of that.
>
> **[10:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=609)** Go to Firefox let's add a new bicycle, and I'll call this junk bicycle again.
>
> **[10:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=616)** Delete me, and I'll just pick a year.
>
> **[10:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=620)** I'll pick a category, pick a gender, pick a color, condition good, weight one, price one create a bicycle.
>
> **[10:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=626)** And it worked.
>
> **[10:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=629)** Click back to list, and it reads it back just fine.
>
> **[10:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=632)** Let's try edit.
>
> **[10:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=634)** I'll just change delete me to be capital M.
>
> **[10:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=638)** Edit bicycle, that worked as well.
>
> **[10:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=641)** And last of all let's try deleting it.
>
> **[10:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=643)** Delete the bicycle.
>
> **[10:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=645)** And it deletes it as we would expect.
>
> **[10:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=647)** And now we have something that's abstract.
>
> **[10:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=649)** We have all of that behavior, wrapped up into this database object class.
>
> **[10:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=654)** And any new class can inherit that behavior the same way the bicycle class does.
>
> **[10:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=658)** It just calls extends on it, it defines its table name, and its database column, and then if you want validations, you need to define those.
>
> **[11:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/create-inheritable-code?u=76281980&t=666)** That's all it takes for us to be able to have a reusable set of active record behaviors.

> [!info]- Semantic Content
>
> **Code Keywords:** let (26), class. (17), class, (13), static (12), self (8)
> **CLI Commands:** make (10), find (6), php (4)
> **UI Navigation:** scroll down (4), scroll up (1), go to (1)
> **Env Vars:** php (4), sql (1)
> **Cross-References:** we talked about (2), go back to (2), in the next (1)
> **File Paths:** object.class.php (1), initialize.php (1)
> **Definitions:** is an  (2)
> **Tools:** firefox (1)


### 5. Object-Oriented Authentication

#### Admin class
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=0)** - [Instructor] In this chapter, we will add user authentication to the staff area of our project.
>
> **[0:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=5)** We discussed user authentication in the PHP with MySQL Essential Training course, so we won't revisit all of the fundamental concepts.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=13)** However, we will learn to use object-oriented programming techniques instead of the procedural programming that we learned before.
>
> **[0:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=20)** The first step is to create our admin class.
>
> **[0:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=23)** To do that, we'll first need to create a database table to store our admins, so I'm going to call that admins and it's going to have a number of columns on it.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=32)** Obviously, it will need an ID column for its primary key, but we'll also have first_name, last_name, email, username, and hashed_password as columns.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=41)** The hashed_password will store an encrypted version of the password.
>
> **[0:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=44)** Once we have database table defined, then we can define our admin class, being sure to inherit behavior from the DatabaseObject class so that we have all of the active record behavior we created in the last chapter.
>
> **[0:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=57)** You can refer to the bicycle class if you need guidance on how to do that.
>
> **[1:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=61)** And then we'll need to write PHP pages in our staff admins directory that will allow us to manage the admins that are in the database.
>
> **[1:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=70)** That is, to be able to create, read, update, and delete the records that are there.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=75)** Typically, those pages are called index, show, new, edit, and delete.
>
> **[1:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=80)** And a good way to get started on it is to make a copy of the bicycle content management pages that we created and then use find and replace so that it becomes pages for managing admins instead of bicycles.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=92)** Now, if you feel comfortable with the techniques that we've learned so far, it can be a really good challenge to try to do this work completely on your own.
>
> **[1:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=100)** Because it repeats much of the work we've already covered, I'm going to include this code in the exercise files and then walk through them with you.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=107)** If you want to try it on your own first, then you should pause the movie now.
>
> **[1:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=112)** Okay, let's start by looking at the database table that we'll need.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=115)** The admins table is going to have a primary key of id.
>
> **[1:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=119)** You can see that's an INTEGER size 11, AUTO_INCREMENT PRIMARY KEY, and then we've got different columns for first_name, last_name, email, username, and hashed_password.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=129)** All of those are VARCHAR (255) fields.
>
> **[2:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=132)** Then you'll notice that after I've created the table, I have another SQL command which is going to add an index to this table.
>
> **[2:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=140)** By default, all SQL tables have an index on their primary key and that allows looking up the records by their primary key very quickly.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=149)** We're also frequently going to be looking up admins by their username.
>
> **[2:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=153)** And for any column that we use frequently for look ups, you want to also add an index so that it's also quick to look up those records.
>
> **[2:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=161)** So we're going to add an index on the username column with ALTER TABLE admins ADD INDEX and then the name of the index which can be anything we want and then in parenthesis the column that we want to actually index and that's going to be username.
>
> **[2:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=174)** Rather than make you type all of that out, I've included it in the exercise files in create_table_admins.sql.
>
> **[3:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=181)** If you open that up, you'll see those exact lines and I'm just going to select all and copy them and then I'm going to switch over to my console and open up mysql using my root user with a password to the chain_gang database.
>
> **[3:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=197)** Once I've got my password in there, I can just paste in those lines, hit return, and it will create the table as well as the index.
>
> **[3:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=204)** I can type SHOW TABLES to see all of them and SHOW FIELDS FROM admins will show me what the admins table looks like.
>
> **[3:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=215)** Then I can quit out of mysql because now I have my admins table ready to store my admin records.
>
> **[3:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=221)** Now before we go into the code, I also just want to add a couple of files here.
>
> **[3:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=225)** I've got admin.class.php which is going to go to in my classes directory and then I've got admins which is designed to go in my staff directory.
>
> **[3:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=235)** So right here I'll drag that into staff and let's take a look at those.
>
> **[3:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=239)** Let's go in the Atom text editor, I can close this file up.
>
> **[4:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=242)** Let's look at the admin.class.php.
>
> **[4:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=244)** You can see class admin.
>
> **[4:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=245)** It extends DatabaseObject so it inherits all of those active record behaviors we created in the last chapter.
>
> **[4:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=252)** Because of that, we need to define the table_name and the db_columns that it's going to have just like we did with bicycle.
>
> **[4:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=259)** And then I'm listing off all of the different properties of the admin class and those for the most part correspond to the database columns.
>
> **[4:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=267)** You'll notice though that I've made hashed_password protected so that code outside this class doesn't have access to it and I've created two new ones here which don't have database columns password and confirm_password.
>
> **[4:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=278)** We'll come back to those in the next movie.
>
> **[4:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=281)** Then I've got a construct function which is just a convenience so that I can simply pass in an associative array of arguments and it will set those properties equal to the values that get passed in.
>
> **[4:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=292)** And then I've also added one for full_name.
>
> **[4:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=294)** That just allows me to have first name and last name together and that's a common method that we use when we have a first_name and a last_name column.
>
> **[5:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=301)** Okay, so now that we have those, let's take a look at the admins directory.
>
> **[5:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=305)** Admins directory has index.php.
>
> **[5:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=309)** It's going to call admin find_all, remember it inherited this method so it has it available to us right off the bat.
>
> **[5:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=316)** So I've got all my admins.
>
> **[5:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=318)** Those are actual objects that have been instantiated and I just need to go through them, so foreach admins as admin and I've got objects and I can call their properties so I can list off the id, the first_name, the last_name, and so on.
>
> **[5:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=330)** It's not going to display the password of course.
>
> **[5:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=333)** And then I've got links for show, edit, and delete.
>
> **[5:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=336)** Let's take a look first at show.
>
> **[5:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=338)** Show is going to use find_by_id.
>
> **[5:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=340)** Again, another one of those methods that we inherited.
>
> **[5:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=343)** And then it's going to come down here and just output those values so we can see what a user looks like.
>
> **[5:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=348)** So we've got new, if new is a get request, it's just going to create a new blank admin object and display the form.
>
> **[5:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=355)** When that form is submitted, then it's going to take those POST parameters, turn them into arguments to create a new admin from, and then tell it to save, again another one of those inherited behaviors.
>
> **[6:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=366)** And edit's going to work in a very similar way.
>
> **[6:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=368)** The only difference being that edit is going to always find the existing record in the database before we have the opportunity to edit it.
>
> **[6:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=376)** If you scroll down, you'll see that both new and edit are going to make use of form_fields.php.
>
> **[6:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=382)** Let's just open that up and take a look.
>
> **[6:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=384)** You'll notice that I'm using that array naming that we talked about so it's admin and then in square brackets first_name, admin and then in square brackets last_name, and so on.
>
> **[6:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=394)** Basically the same thing we did with bicycle.
>
> **[6:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=396)** And then of course I've got delete.php and delete.php just finds the record and then asks whether we want to delete it or not.
>
> **[6:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=403)** And if we post the request, then it will actually call the delete method so that it deletes it.
>
> **[6:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=409)** One last thing that we need to do here is let's go into our staff area, the main index.php, this one that's right here, and we need to add a link here to get to our new admin area that we've added in.
>
> **[7:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=421)** So I'm just going to copy the line for bicycles, we'll paste it, and instead of going to bicycles, it's going to go to admins and admins.
>
> **[7:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=430)** There we go.
>
> **[7:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=431)** Now let's try it on our browser.
>
> **[7:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=433)** Go to Firefox.
>
> **[7:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=434)** I'll click on menu.
>
> **[7:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=436)** Here's my new admins area.
>
> **[7:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=438)** Here I am.
>
> **[7:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=439)** It's ready for me to add an admin.
>
> **[7:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=441)** I don't have any other admins to list there, but it's ready for us to create an admin.
>
> **[7:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=445)** Now, I'm not going to actually go through the process of creating an admin yet because I don't have the ability to hash passwords yet.
>
> **[7:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=453)** I need to be able to encrypt passwords and at the moment, that's not a feature I have.
>
> **[7:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-class?u=76281980&t=457)** So in the next movie, let's look at how we do that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), delete (7), class. (3), new, (2), class, (1)
> **Code Identifiers:** first_name (5), last_name (5), hashed_password (4), create_table_admins (1), chain_gang (1)
> **Env Vars:** php (2), sql (2), show (2), integer (1), auto_increment (1)
> **CLI Commands:** php (9), mysql (3), make (3), find (2)
> **File Paths:** admin.class.php (2), index.php (2), delete.php (2), create_table_admins.sql (1), form_fields.php (1)
> **Cross-References:** in the last (2), in the next (2), we discussed (1), we talked about (1)
> **SQL:** integer (1), primary key (1), varchar (1), alter table (1), index (1)
> **UI Navigation:** go to (3), scroll down (1), click on (1)

#### Hashing passwords
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=0)** - [Instructor] Now that we have the basics of our admin class and the PHP pages that we're going to use to manage it, we're ready to talk about how we hash passwords before we storm in the database and we're going to do it using object-oriented programming.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=12)** You may remember that PHP offers us a function that makes password hashing very easy.
>
> **[0:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=18)** It's very secure and it uses best practices.
>
> **[0:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=22)** All we have to do is call password_hash and pass in the password to it.
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=26)** That's it.
>
> **[0:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=27)** As a second argument, we can specify the kind of algorithm that we should use.
>
> **[0:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=31)** By default, that's going to be PASSWORD_BCRYPT that uses BCRYPT and the blowfish cipher, which is very secure and good for this purpose.
>
> **[0:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=39)** So that's all there is to it.
>
> **[0:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=40)** We pass in a string to this function and it returns back a hashed version of the password that's suitable for being stored in the database.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=48)** Now, what I have in mind for the way this is going to work is that we have one property here called password and that's what's going to be set on the form.
>
> **[0:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=58)** That's the value that's actually going to be passed into us.
>
> **[1:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=60)** It doesn't have a database column, it's just a property on our object.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=64)** So let's take a look at admins, here.
>
> **[1:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=66)** Look at form fields and you'll see me scroll down here.
>
> **[1:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=69)** It's got password, right, so that's what we're going to be passing it is just password.
>
> **[1:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=73)** So that value is going to be sent in and, for example, when we create a new object it's going to be in the post parameters, it will become an arg, it will be passed in to the admin object and then, in the admin object, when it constructs it, it's going to set that value, right.
>
> **[1:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=89)** So it's going to take the argument password and set it to password.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=92)** Not hash password.
>
> **[1:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=94)** Hash password is going to be something that's only used internally.
>
> **[1:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=98)** This class is going to be able to use it, it's going to be able to encrypt the password and set it, but we're not going to be sending in an encrypted version of the password, right?
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=107)** That's going to happen behind the scenes.
>
> **[1:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=109)** So the way that I think we should do that, is let's create a new method here called public function set hash password.
>
> **[2:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=121)** So if I call set hash password, it's going to set that value of hash password equal to, and what do we want it to be equal to?
>
> **[2:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=130)** We want it to be equal to this password once it's been encrypted.
>
> **[2:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=133)** So we'll call password hash and we'll pass in this password.
>
> **[2:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=139)** And we could leave it just like that, but I'm going to go ahead and specify that the algorithm is password bcrypt, just in case that ever changes as the default, I'll have it specified there.
>
> **[2:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=150)** So that's it.
>
> **[2:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=151)** Now I have this public function called set hash password.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=154)** So I could at any point call this and it would do the encryption.
>
> **[2:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=158)** And then I would have the right value for the hash password and I could save it to the database.
>
> **[2:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=163)** So for example on new dot php, right here before I save it, I could just call admin and then set hash password, right?
>
> **[2:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=174)** So I'll set it, and then I'm ready to save it.
>
> **[2:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=177)** And once I go to save it, it will then save that hash version because that's how we program the active record, right?
>
> **[3:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=183)** All that work we did in the last chapter, it's automatically going to save that property for hash password to the database.
>
> **[3:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=188)** It won't save the other one for password because it's not listed up here in our DV column, so it'll get ignored.
>
> **[3:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=195)** So we could do it that way.
>
> **[3:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=197)** However, I don't love this idea of having to remember to always do this.
>
> **[3:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=201)** I would have to do it for creating a new one as well as for updating.
>
> **[3:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=205)** I would rather if that could just happen automatically behind the scenes, and it can.
>
> **[3:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=210)** I'm going to cut that line out of there, let's go back over here, I'll close up my form fields.
>
> **[3:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=215)** Let's go back over to the admin class.
>
> **[3:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=217)** Now, we have in our database object class, if you remember, we wrote one here called create, right?
>
> **[3:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=225)** We wrote another one here called update.
>
> **[3:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=228)** What I really want is before those functions get called, to have the encryption happen automatically so that it hashes it and then it calls these methods.
>
> **[3:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=239)** So we're inheriting those into our admin class.
>
> **[4:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=242)** So stop and think for a second, how can we perform an action and then have that action that's in the inherited behavior take place?
>
> **[4:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=250)** We have the ability to do that.
>
> **[4:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=252)** We can do it by overriding the original, create and I'll just do another one here, public function update, and I can override the behavior so that now it calls this set hash password, and then once it's done, it can call the parent version of create.
>
> **[4:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=277)** Remember this from the object oriented programming class?
>
> **[4:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=280)** Where we talked about how we can call the parent object?
>
> **[4:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=283)** So I'm saying do your own version of create, and then call the parent's version of create.
>
> **[4:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=288)** And we also want to make sure that we have a return back after that because this is going to return a value, true or false, and we want to make sure we return that back from our overridden method as well.
>
> **[4:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=299)** So this is just going to basically hash the password and then call the original version.
>
> **[5:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=304)** We can do the same thing here, let's copy this and put it down here in update.
>
> **[5:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=310)** And it'll do the exact same thing.
>
> **[5:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=312)** Now I actually made a small mistake here.
>
> **[5:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=314)** If I go back to database class dot php, you'll see that these were protected functions, which means I do have access to them, but I need to keep the same visibility.
>
> **[5:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=323)** Those need to be protected.
>
> **[5:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=325)** I'll copy that.
>
> **[5:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=327)** And because set hash password is now only being called internally to this class, it no longer needs to be public.
>
> **[5:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=334)** I can actually make it protected as well.
>
> **[5:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=336)** So now it's a protected function, these are protected functions.
>
> **[5:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=339)** When I call save, it will automatically do this process for us.
>
> **[5:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=344)** Now that we're hashing the password, let's try it out.
>
> **[5:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=347)** Let's come back over here, let's create a new admin.
>
> **[5:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=349)** You can feel free to use your name.
>
> **[5:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=351)** I'll do mine, Kevin Skoglund.
>
> **[5:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=353)** Email, I'm going to just say Kevin at nowhere dot com.
>
> **[5:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=358)** Username, for me it's going to be kskoglund, and password, and I'll just put in something like secretpassword.
>
> **[6:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=366)** Not the best password, but it'll get us by for now.
>
> **[6:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=368)** Now create admin, and look at that.
>
> **[6:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=371)** It created the admin for us.
>
> **[6:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=373)** Now we don't see the password there, we're not showing it anywhere, but we can go into our consul and log into mysql.
>
> **[6:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=384)** And let's take a look.
>
> **[6:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=385)** Let's say select all from admins.
>
> **[6:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=390)** And you should see an encrypted password here, right?
>
> **[6:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=393)** Seeing this dollar sign in front, that lets you know that this is a blowfish or bcrypted password.
>
> **[6:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=400)** And then we can exit back out of mysql.
>
> **[6:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=402)** Now we have more work to do still, we actually aren't logging in the users or anything like that, so we've got more work ahead of us, but we now have the ability to hash passwords when we create admins in the database.
>
> **[6:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/hashing-passwords?u=76281980&t=414)** I think we were able to do it in a pretty slick way by using this call to the parent class.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (6), protected (5), public (4), pass (3)
> **CLI Commands:** php (4), make (3), mysql (2)
> **Env Vars:** php (2), password_bcrypt (1), bcrypt (1)
> **Cross-References:** in the last (1), we talked about (1), go back to (1)
> **Analogies:** for example (2), just like (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Code Identifiers:** password_hash (1)
> **Definitions:** is a  (1)

#### Admin validations
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=0)** - [Instructor] In this movie, we'll talk about how to add validations to our admin class in an object-oriented way.
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=6)** You'll recall that in the last chapter, we gave our DatabaseObject class a method called validate and it just has a real skeleton of a method there, just sets errors equal to nothing, and then returns those errors.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=19)** What we need to do is add custom validations to the admin class that inherits from DatabaseObject.
>
> **[0:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=25)** So, in admin.class.php, we want to add a new method down here which is also going to be the same type of method, protected function called validate, and it's going to override that behavior with its own behavior.
>
> **[0:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=39)** I've included that in the exercise files for you.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=41)** Let's open that file up.
>
> **[0:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=44)** You can take all of these lines from protected function validate down to the bottom, and make sure I get that final curly brace.
>
> **[0:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=52)** Let's copy all of that and let's go into admin and let's paste it in.
>
> **[0:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=56)** Now, these validations are the exact same validations that we talked about in the PHP with MySQL essential training.
>
> **[1:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=62)** So these are exactly the same.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=64)** The one difference here is that it's inside a class now.
>
> **[1:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=67)** So I've got protected called on the function, it's not just a simple function, and I'm not having to pass in an object or an associative array, or anything else.
>
> **[1:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=76)** I'm calling it on this object, and I have access to its properties.
>
> **[1:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=80)** So instead of referring to this as just first name or as part of an associative array, which is I think what we did in the essential training, like this, instead I can just reference those properties on the object using this this and the arrow notation.
>
> **[1:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=96)** So if first_name is blank, then add this string to the errors array, and so on.
>
> **[1:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=102)** I'm using has_length, further down here I'm checking to see if something has a valid email format.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=107)** I'm checking the username, and then I've got some checks on the password.
>
> **[1:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=111)** The password checks that we have here are going to require that the password be 12 characters long, that it have an uppercase letter, and that it have a lowercase letter, that it have one number, and one symbol.
>
> **[2:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=123)** We talked about how to implement each of these validations and why we might need them in the previous course, so I won't go over them again.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=129)** You can feel free to comment out or edit these if you want something that's different.
>
> **[2:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=133)** And then you'll see that I've also got one here for confirm password.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=137)** Confirm password is a property that needs to match password.
>
> **[2:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=141)** The reason why is because we have that form and at the bottom of our form, we have our password, and then the user has to retype the password and they must type it the same.
>
> **[2:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=150)** And that way we make sure that they didn't mistype the password the first time.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=154)** It's just a sanity check to make sure they don't accidentally lock themselves out with a wrong password.
>
> **[2:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=159)** They have to type it twice and it has to match.
>
> **[2:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=162)** Once we've got that, we can go back and let's just save this file so that we have our validations in place and now we should have validation.
>
> **[2:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=171)** If I go and just edit my admin here and I put in a password, let's just try submitting it with no password.
>
> **[2:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=177)** Edit admin comes up and says, "Nope, password cannot be blank."
>
> **[3:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=181)** Same thing if I take out first name.
>
> **[3:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=183)** "First name cannot be blank."
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=185)** And let's change the password to something else.
>
> **[3:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=187)** I'll just put in XYZ for now, and I'll put in ZYX down here.
>
> **[3:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=194)** You'll see password must be 12 or more characters, password and confirm, password must match.
>
> **[3:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=199)** Now let's try a good one here.
>
> **[3:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=200)** I'm going to put in capital Password, pound sign, one, two, three, four.
>
> **[3:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=205)** Again, not a very secure password, but it allows me to quickly put something in here.
>
> **[3:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=210)** Now I'll click edit admin, and it accepted it.
>
> **[3:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=213)** So now it was able to meet the validations and to save the record.
>
> **[3:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=218)** We also, in the essential training, talked about the fact that we don't always want to run those validations on the password.
>
> **[3:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=225)** Now, if I'm adding a new admin, then of course I do.
>
> **[3:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=228)** I always want to have a password, and I always want to validate it.
>
> **[3:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=232)** But, when I have an existing admin, I don't always want to run it.
>
> **[3:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=235)** What if I just wanted to make a change to the user's name?
>
> **[3:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=238)** What if I had misspelled the user's first name, or if I needed to change their email address to something else?
>
> **[4:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=244)** Let's say it was email@[somewhere.com](https://somewhere.com).
>
> **[4:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=248)** Well, I don't want to change their password, right?
>
> **[4:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=249)** This is potentially a live user, and they have a password that they know about.
>
> **[4:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=253)** I don't want to set it to something else.
>
> **[4:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=254)** I don't know what their password is.
>
> **[4:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=256)** So if I click edit admin, it won't let me submit it.
>
> **[4:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=259)** So I need to make these validations optional when I'm updating.
>
> **[4:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=263)** If there's a password there, I want to validate it.
>
> **[4:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=266)** If there's not a password being submitted, then it should assume that we're not updating the password.
>
> **[4:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=271)** The way that we'll do that is I'm going to add a property up here at the top which is going to be a protected property.
>
> **[4:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=280)** It's going to be called password_required, and by default it's going to be true.
>
> **[4:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=285)** A password is normally going to be required.
>
> **[4:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=287)** However, when we go to update, we want to check and see whether the password has been set or not to know whether we should set that to false.
>
> **[4:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=295)** So let's add a check here that says if this password is not set, meaning that it's equal to nothing, it's equal to an empty string which is the default that it would have, that would mean that we have a password and we want to validate it.
>
> **[5:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=315)** But if not, then we don't want to and so we would do that by changing set password_required equal to false, all right?
>
> **[5:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=326)** So now with password_required equal to false, let's jump back down here to our validation and let's just add a check around all of this password validation that says if this password_required, if it's required, then we're going to do all of these validations.
>
> **[5:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=344)** I'm going to copy all of these and let's move them up and they get inserted like that.
>
> **[5:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=350)** So now we have the ability to turn those on and off.
>
> **[5:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=353)** Now before we actually do it, there's one other consideration we need to make though.
>
> **[5:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=356)** If the password is not being updated, then we don't want to hash the password.
>
> **[6:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=361)** We don't want to take the empty string and override their password in that case so we also need to take this bit of code here and move it up here.
>
> **[6:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=370)** We want to validate the password and set the hash password, right?
>
> **[6:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=374)** Otherwise, we're going to skip hashing and validation, password not present, being updated we'll say.
>
> **[6:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=389)** So let's go back and let's try that out.
>
> **[6:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=390)** Let's save it.
>
> **[6:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=392)** We'll go back to our page and now I should be able to edit something on here like the email address from nowhere to somewhere.
>
> **[6:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=400)** I should be able to click edit admin and it works.
>
> **[6:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=403)** Now I'm able to update that without updating the password.
>
> **[6:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=406)** However, if I go back and I edit it and I try to update the password with something, then my validations kick in and it must be 12 characters and must match the password.
>
> **[6:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=417)** There's actually one validation that's missing and one more that we should add and that is that we don't currently have a validation to make sure that the username is unique.
>
> **[7:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=426)** We're checking to make sure it's not blank.
>
> **[7:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=428)** We're making sure that it has the right length, but we're not validating that each username is unique.
>
> **[7:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/admin-validations?u=76281980&t=433)** So in the next movie, let's see how we can do that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), protected (4), function (4), else. (3), override (2)
> **CLI Commands:** make (8), php (2), mysql (1)
> **Code Identifiers:** password_required (4), first_name (1), has_length (1)
> **Cross-References:** we talked about (2), in the last (1), go back to (1), in the next (1)
> **Env Vars:** php (1), xyz (1), zyx (1)
> **File Paths:** admin.class.php (1)
> **URLs:** [somewhere.com](https://somewhere.com) (1)
> **UI Navigation:** go to (1)

#### Find by username
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=0)** - [Narrator] In this movie, we're going to learn how to find admin records using the Username column, and then use that as a validation to confirm that a username is unique before we accept it into the database.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=12)** We already have a validation function placeholder for this, go to our validation functions.php.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=19)** There's has unique username, and that's what we had before when we were working in php with mySQL essential training.
>
> **[0:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=25)** But we need to now rewrite that using object oriented programming.
>
> **[0:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=29)** So, let's think about how we would do that.
>
> **[0:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=31)** The first thing we need to do, is we need to get an admin, and we would do that by asking the adman to return a user to us.
>
> **[0:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=39)** So we would need to have admin class and then find the user, so we can't use Find all, and we can't use find by ID, we're going to need to write a new one, which is find by username.
>
> **[0:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=52)** And we'll need to pass in the username that's been sent in to this validation, so that we can then pass that on to the class and see if we find this user by username, do we get a user back or not.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=64)** So then once we have that admin we can check and see, did it return something to us?
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=68)** Let's write a conditional statement here.
>
> **[1:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=70)** If we got back False then we'll know that the admin didn't exist, so Admin, if it is exactly equal to False, or if we get it back and the admin ID is equal to the current ID.
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=87)** Right, it's possible that we're updating a record in which case it does exist in the database, we would expect it to, but we want to make sure that it's not a different record, right?
>
> **[1:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=96)** We can change the user's username as long as it's not in use by someone else, and the ID is a way to check that.
>
> **[1:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=102)** So we're going to pass that in as an argument for has unique username in the case when we're doing an update.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=107)** And we'll check for it here.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=108)** So, if that's the case, then we'll say is unique And so we can return true.
>
> **[1:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=117)** Otherwise, we'll know that it's not unique, and we will return false.
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=125)** Okay, so this is our validation for has unique username, we need to write this method now, find by username.
>
> **[2:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=131)** With passing in the username as an argument.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=134)** I'm going to copy all of that, going to save this, and let's go over to our admin class and let's just go up here, let's do it right below the validation.
>
> **[2:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=147)** Now this is going to be a static public method, going to be called find by username, and it's going to take a username as an argument And, what is it going to do?
>
> **[2:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=159)** Well it's going to find all records using the username.
>
> **[2:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=163)** Now previously in database class, we found all records by their ID.
>
> **[2:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=168)** That's a good starting place for us, let's just take this code and copy it.
>
> **[2:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=173)** And go over here to admin class.php, and we'll paste it.
>
> **[2:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=176)** Now I'm not moving this find by username into the database object class, because it's not shared.
>
> **[3:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=181)** It is unique to this class, so there's some inherited find methods, and there's some that are unique just to this class, this is one of those.
>
> **[3:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=189)** So it's going to work the exact same way, all this code is the same except instead of finding it where ID equals, we're going to say where username equals, and then instead of passing in the ID, we're going to pass in the username.
>
> **[3:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=205)** Then it will execute the find by SQL, it'll check and see whether it's empty, and it'll return back a record, single record to us.
>
> **[3:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=212)** So it's just going to find a single record, but either we're going to get back that record, letting us know that it exists, or it's going to be false.
>
> **[3:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=219)** Alright, let's save it, and let's add this validation into our actual validations.
>
> **[3:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=224)** So let's fold this up, and inside the validate method we scroll down here to username, we can add a new one here, that says else if, and then parentheses not, and the name of our validation, if we come over here, is has unique username, so I'll copy that, and let's go over here and paste it in, has unique username, and we're going to pass in this username, see whether it's unique, and then as a second argument we're going to pass either this ID, if it's there, or pass in zero, if it's not there for some reason, hasn't been set, pass in zero, and that'll allow us to write an SQL statement with zero as an ID, obviously, where ID is not equal to zero,
>
> **[4:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=272)** it's going to not return anything.
>
> **[4:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=275)** And then, if that's not the case, if it's not a unique username, then let's add something to the errors, I'm just going to copy this line, save me some time, and username, let's change this text to say not allowed, try another.
>
> **[4:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=293)** Okay, now that we've got our validation, let's try it out.
>
> **[4:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=296)** Let's save it, let's come back over here, let's try adding an admin with the same username, (unintelligible) I can just make it anything up here, bob Smith, email b at b dot com, and let's just create admin.
>
> **[5:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=312)** Username not allowed, try another.
>
> **[5:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=313)** You can see my validation is now working.
>
> **[5:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=316)** Now if I tried it with something else that is different, Bob Smith, create admin, Now I don't get that anymore, Right, I still get problems because I don't have a password, but I no longer get my It's not unique message anymore, so I know that my unique validation is working.
>
> **[5:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=332)** What's handy about the new method that we just added here, with this find by username, is that we can reuse this same method again when a user's trying to login.
>
> **[5:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=342)** Right, that allows us to take the username on the login form and look for the user in the database by that indexed column.
>
> **[5:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/find-by-username?u=76281980&t=350)** So it'll perform double duty, it'll work both in our validation, and when we're performing our logins.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), pass (8), class, (4), this, (2), case, (2)
> **CLI Commands:** find (14), php (3), make (2), mysql (1)
> **File Paths:** functions.php (1), class.php (1)
> **Env Vars:** sql (2)
> **UI Navigation:** go to (1), scroll down (1)
> **Code Identifiers:** mysql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Verify password
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=0)** [Instructor] We learned how to create new admins in our database and how to hash their password while we were creating them.
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=6)** We also learned in the last movie with validations how to look up a user by their username.
>
> **[0:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=11)** So we're ready to start the process of building a login form.
>
> **[0:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=14)** The idea is that the user would submit their username and password, will find that user by the username, and then verify that the password is correct.
>
> **[0:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=22)** The way that we verify passwords are correct is with a handy peach p function called password underscore verify, and it makes it really simple because we just pass in the new password that's being tried, and match it with the hashed or encrypted password that's stored in the database.
>
> **[0:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=39)** And php will handle all the work behind the scenes to see if they match or not, and it will return a boolean: true or false.
>
> **[0:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=47)** Now it doesn't actually decrypt the hashed password during this process.
>
> **[0:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=51)** What it does is it encrypts the new password using the same algorithm, and if it's the same password going through the same algorithm, then it should return the same results so that it can compare the two hashed versions and know whether or not they match.
>
> **[1:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=65)** I've gone ahead and given you starting php pages for login and logout, so let's just grab both of those pages from the exercise files, and let's put those into the staff directory right at the root of the directory.
>
> **[1:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=77)** Now let's go into the text editor and take a look at those.
>
> **[1:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=81)** Close up admins and let's look at login dot php, and you can see that it initializes.
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=87)** It sets an errors array.
>
> **[1:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=88)** Username and password are blank.
>
> **[1:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=90)** If it's a post request, it'll try to process the login, but if it's not a post request, it'll just display the login form.
>
> **[1:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=97)** You can see it submits to itself, and it just has a username and a password field and a submit to it.
>
> **[1:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=102)** If it is a post request, and we've just submitted the form, then it's going to get those post values for username and password.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=108)** It's going to perform some very simple validations on them, just to make sure that they're not blank, and then we're going to try to login.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=115)** If there is no errors so far, we're going to try to login.
>
> **[1:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=118)** If there were errors, then none of this will take place.
>
> **[2:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=120)** It'll just redisplay the form again, and the user will see those errors right here with display errors.
>
> **[2:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=126)** So, if there were no errors, we want to use our new find by username method.
>
> **[2:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=132)** So on admin, we call find by username, and it will either return false or it'll return an admin to us.
>
> **[2:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=139)** Now if we have an admin, we were able to get one, so admin is not equal to false, then we want to verify that the password is correct.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=149)** So we need to use that verify password method.
>
> **[2:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=151)** I'm going to actually put that method inside the admin class.
>
> **[2:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=156)** We have set hashed password right here.
>
> **[2:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=159)** Right below it, I'm going to put another one that is going to be public function, which is going to be called verify password.
>
> **[2:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=170)** I'm just going to reverse the order, pass in a password we want to try, and then it's going to call the password verify function that's built into php.
>
> **[3:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=181)** It's going to pass in the password that we just sent in, as well as test it against the current hashed password.
>
> **[3:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=190)** So it'll tell us whether it's true or not, and then we need to return that value back.
>
> **[3:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=193)** Is it true or false?
>
> **[3:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=195)** Does the password that we're trying match the one that this object has stored?
>
> **[3:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=200)** Make sure that it's a public function because we're going to need to call it.
>
> **[3:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=202)** We're going to go back over to login dot php, and we're going to add after this whether or not admin is false and and check to see if the admin verify password for the password they just gave us is correct.
>
> **[3:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=219)** That should return true or false, and if it is, then we want to mark the admin as being logged in.
>
> **[3:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=224)** Now right now we're not doing that, so we can just test and see whether it works or not, whether or not we're able to find a user and verify the password.
>
> **[3:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=232)** Either we should see the page again if there was a problem, or we should be redirected to staff index dot php.
>
> **[3:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=239)** So let's just try it.
>
> **[4:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=240)** We'll go to Firefox and let's go to our new login page.
>
> **[4:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=245)** So it's staff slash login dot php.
>
> **[4:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=248)** There we are.
>
> **[4:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=248)** I'm on the login page.
>
> **[4:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=249)** It wants a username and a password.
>
> **[4:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=251)** So my username, let's just try putting in some garbage first.
>
> **[4:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=253)** I'll just type some random characters.
>
> **[4:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=255)** Submit.
>
> **[4:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=257)** It says password can't be blank, so let's type some random characters there.
>
> **[4:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=260)** Submit.
>
> **[4:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=261)** Login was unsuccessful, right?
>
> **[4:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=263)** It wasn't able to find the username is why.
>
> **[4:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=265)** So now, I know that I have a user.
>
> **[4:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=267)** Make sure you know your user's name, right?
>
> **[4:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=270)** My username is kskogland.
>
> **[4:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=272)** I'll hit the back arrow a couple times to get back here.
>
> **[4:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=274)** Let's try kskogland with some junk password.
>
> **[4:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=279)** Submit.
>
> **[4:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=280)** Login was unsuccessful, but it's unsuccessful because the password was wrong this time.
>
> **[4:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=284)** Let's try putting in the correct password.
>
> **[4:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=285)** For me that was capital p a s s w o r d, pound sign one two three four.
>
> **[4:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=292)** You may have used something different.
>
> **[4:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=293)** And it worked.
>
> **[4:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=294)** Now I was able to get past that page.
>
> **[4:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=296)** I didn't get errors.
>
> **[4:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=297)** Instead I got redirected to the page.
>
> **[4:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=298)** So we know that it worked.
>
> **[5:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=300)** Now it doesn't remember that we're logged in yet.
>
> **[5:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/verify-password?u=76281980&t=302)** That's something we're going to have to work on in the next movie.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (4), pass (3), public (2), match. (1)
> **CLI Commands:** php (7), find (5), make (3)
> **Cross-References:** in the last (1), in the next (1)
> **UI Navigation:** go to (2)
> **Tools:** firefox (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### Define a session class
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=0)** - [Instructor] In this movie, we're going to define a new class called session.
>
> **[0:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=3)** And we're going to use it to help us manage our php sessions.
>
> **[0:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=7)** We're mostly going to use it so that we can keep track of whether a user is logged in in the session or not.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=13)** Let's remember that the way that we're keeping track of a user being logged in, is that we're going to store their id in the session.
>
> **[0:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=21)** So for example, we have a function called log_in.
>
> **[0:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=24)** We pass in an id, and it sets a variable in the session and then we can keep track of that variable from then on.
>
> **[0:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=31)** On all subsequent page loads, we can check that variable and see if it's been set, we know the user is logged in.
>
> **[0:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=38)** So we have another function called is_logged_in that will report back whether it's set or not.
>
> **[0:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=42)** And then when we want the user to log out, we simply unset that variable.
>
> **[0:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=46)** So that variable acts like a hand stamp, letting us know on each of the subsequent page requests after logging in, we know this user is already logged in and we don't need to ask them to log in again.
>
> **[0:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=58)** It keeps track of their authenticated state.
>
> **[1:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=61)** But that's the procedural way to do it.
>
> **[1:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=63)** We're going to do that with a class.
>
> **[1:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=65)** So we're going to create a new class, inside the Classes directory, New File, which I will call session.class.php.
>
> **[1:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=74)** It's going to need to have some php tags.
>
> **[1:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=78)** And we know that it's going to also be a class called Session.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=84)** And the most important part of this class is that it's going to have that property for the id.
>
> **[1:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=89)** So I'm going to make a private property called admin_id.
>
> **[1:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=93)** It can't be accessed from outside the class, it's private, but we can access it inside the class using a couple of different methods.
>
> **[1:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=100)** We know we're going to need one method that's public function login.
>
> **[1:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=105)** We'll pass in an admin object.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=107)** We don't have to just pass in an id, we'll pass in the whole admin object.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=110)** And then we'll make another public function that's going to be called is_logged_in, that'll test whether or not the user is currently logged in.
>
> **[2:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=121)** And one more called logout.
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=125)** And that will logout any currently logged in user.
>
> **[2:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=128)** So the way that we login a user is we check to see if we've been given a user, first of all, just as a good safety check.
>
> **[2:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=135)** And if we have, then we want to call session, admin_id equals whatever the admin id we were given was.
>
> **[2:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=148)** Now we don't want to just store it there, though.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=149)** We also want to make a copy of this line, because we have a property now, and we want it to also exist in that property.
>
> **[2:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=157)** So we don't have to go back to the session.
>
> **[2:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=158)** It's stored in the session, but it's also stored in our property of the session class.
>
> **[2:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=163)** If we have an instance of the session class, it will have that.
>
> **[2:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=167)** And then I'm going to have it return true.
>
> **[2:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=170)** One security feature is here we want to always call session_regenerate_id, that's going to protect against session fixation attacks.
>
> **[2:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=179)** Session fixation attacks, better say prevent.
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=185)** There we go, prevent session fixation attacks with session_regenerate_id.
>
> **[3:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=189)** So it'll regenerate the session every time that someone logs in again.
>
> **[3:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=193)** Okay, so once we've got a user logged in, we've stored the fact that they're logged in in the session, and we're keeping track of it in the property, as well.
>
> **[3:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=200)** Now we can check to see is the user logged in.
>
> **[3:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=203)** Well, is the user logged in?
>
> **[3:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=204)** We just check and see, is that property set?
>
> **[3:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=206)** Isset this admin_id.
>
> **[3:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=213)** Right, we don't even have to look at the session file.
>
> **[3:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=215)** We just look at the object's property to see whether or not it's been set.
>
> **[3:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=219)** And then for logout, we want to logout someone, we need to unset those values.
>
> **[3:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=224)** So we use unset, and I'll just copy this up here so I don't have to retype it.
>
> **[3:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=230)** Then we'll unset that.
>
> **[3:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=231)** Then let's unset this admin_id, as well.
>
> **[3:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=236)** So we'll unset it both in the session, where we're keeping track of it, and also in the property.
>
> **[4:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=241)** And then let's just return true.
>
> **[4:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=243)** Okay, so that will allow us to log in.
>
> **[4:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=246)** We'll be able to tell if someone is logged in, and they're able to log out.
>
> **[4:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=249)** But on subsequent page loads, we need to also take a look at the session to see whether they were logged in previously.
>
> **[4:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=256)** So let's make another function.
>
> **[4:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=258)** This one's going to be private.
>
> **[4:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=260)** And this one's going to be called check_stored_login.
>
> **[4:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=266)** And what it's going to do is it's going to check and see if that value is set in the session.
>
> **[4:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=269)** So if isset, and I'll paste it in there, I still have it on my clipboard.
>
> **[4:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=276)** And then if it is set, then what do I want to do?
>
> **[4:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=278)** Well, I want to set this admin_id, the property, equal to it.
>
> **[4:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=283)** Right, there's a new page.
>
> **[4:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=284)** I have a new object.
>
> **[4:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=285)** This is nothing set in the past, right, I haven't just recently hit the form and called login.
>
> **[4:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=290)** So I need to set that value there, and then I need to call this automatically, whenever a new page loads.
>
> **[4:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=297)** Now I could put that in initialize, but I think a better thing to do is to add a public constructor here, public function construct.
>
> **[5:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=309)** And whenever I create a new session object, a new instance, let's automatically perform this.
>
> **[5:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=315)** Let's automatically do this, check_stored_login.
>
> **[5:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=319)** So I have to go down here.
>
> **[5:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=320)** Copy it, this check_stored_login function happens automatically.
>
> **[5:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=324)** Now if we're going to use the session, we need to also have a session.
>
> **[5:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=328)** So we need to make sure that sessions are enabled.
>
> **[5:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=331)** And in initialize.php, we already have a line here, session_start, it will do that, but it's commented out.
>
> **[5:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=336)** I'm going to actually copy that part and take the line out of the initialize and put it in my session class.
>
> **[5:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=343)** I'm even going to put it inside the constructor.
>
> **[5:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=345)** So as soon as I call a new session object, and try and create a new object, it'll start the sessions for me, and then immediately go check and see if the user is logged in or not.
>
> **[5:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=354)** Let's save all that.
>
> **[5:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=355)** Now I just need to create a new session object.
>
> **[5:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=357)** So let's go back to initialize.php.
>
> **[5:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=359)** And down here at the bottom, after we have our DatabaseObject, let's create a new Session Object.
>
> **[6:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=363)** Session equals new Session.
>
> **[6:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=366)** That's all we have to do.
>
> **[6:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=368)** Now I have a session object that I can talk to, I can tell it to login, to logout, find out whether a user is logged in.
>
> **[6:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=374)** Once we have that, we can go to login.php, and when we want to mark the user is logged in, what do we do?
>
> **[6:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=381)** Well, we tell the session instance to call its login method, and pass in the admin object.
>
> **[6:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=390)** That's all there is to it.
>
> **[6:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=391)** We just tell the session, hey, login this user.
>
> **[6:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=393)** I'm going to copy that and then save the file, because I also want to go over to logout, and let's do the same thing.
>
> **[6:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=400)** But instead of calling login on the admin, we're just going to call logout, with no arguments at all.
>
> **[6:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=407)** Does the exact same thing, so that will call the logout method on the session.
>
> **[6:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=411)** So now we're ready to try it out.
>
> **[6:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=413)** But we don't have any good way to indicate whether we're logged in or logged out, yet.
>
> **[6:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=418)** So let's add something here.
>
> **[6:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=419)** Let's go to the shared staff header page, right, so inside private, inside shared, the staff_header.
>
> **[7:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=426)** And on that page where we have some navigation, let's actually put a conditional statement around this li tag.
>
> **[7:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=432)** So let's do php tags if the session is_logged_in,
>
> **[7:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=445)** then we're going to perform one set of actions, otherwise, php we're going to perform another one.
>
> **[7:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=455)** So that'll show menu and then let's also just duplicate this line, and add this as a link to logout.
>
> **[7:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=464)** Logout, there we go.
>
> **[7:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=467)** Now we should see these two links when we're logged in and we won't see them when we're logged out.
>
> **[7:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=471)** So let's save that.
>
> **[7:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=473)** So let's go back to our menu page, just to start with, and you'll see that we don't have those items up here.
>
> **[7:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=479)** All right, so now let's go back to the login page, login.php, and let's try it.
>
> **[8:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=485)** Let's login, my username was kskoglund, my password was capital P, lower case a-s-s-w-o-r-d, pound sign 1, 2, 3, 4.
>
> **[8:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=495)** Click Submit.
>
> **[8:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=496)** And now I'm logged in.
>
> **[8:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=498)** Menu and Logout.
>
> **[8:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=499)** If I click logout, now I'm logged out again.
>
> **[8:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=502)** So those give us a sort of temporary way to tell whether or not we're logged in or not.
>
> **[8:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-session-class?u=76281980&t=507)** Eventually what we want to do is we want to have page access controls where we're actually not able to go to some pages if we're not logged in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (20), function (7), pass (5), class. (4), private (4)
> **Code Identifiers:** admin_id (5), is_logged_in (3), check_stored_login (3), session_regenerate_id (2), log_in (1)
> **CLI Commands:** php (9), make (5), find (1)
> **File Paths:** initialize.php (2), login.php (2), session.class.php (1)
> **Cross-References:** go back to (4)
> **UI Navigation:** go to (3)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Add page access control
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=0)** - [Instructor] Now that we have the ability for users to log in and log out and we're able to remember in our session whether or not they've logged in or not, we're able to now add access control to our pages.
>
> **[0:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=11)** That is, that we can restrict the pages in our staff area to only allow logged in users to see them.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=19)** The way we can do that is just simply to go to one of our staff area pages like index.php and right here at the top, we can just check to see.
>
> **[0:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=29)** Put php tags and we'll just test to see if not dollar sign session
>
> **[0:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=40)** is logged in.
>
> **[0:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=44)** Then I'm going to redirect to url_for staff/login.php.
>
> **[0:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=57)** And if they're not for some reason, then let's just do nothing, let the rest of the page proceed.
>
> **[1:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=70)** So that's it, that's the process.
>
> **[1:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=71)** It's going to check and see if the session says that the user is logged in.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=75)** If they're not, then it will redirect them.
>
> **[1:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=77)** If so, then they'll do nothing.
>
> **[1:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=79)** Let's save it and try it out.
>
> **[1:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=80)** Now at the moment, I am logged in.
>
> **[1:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=82)** Let's reload our page here on index.php.
>
> **[1:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=85)** Yup, I am still logged in.
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=87)** If I click logout, now I'm not logged in.
>
> **[1:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=90)** Let's try and go to that index.php.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=92)** Index.php, nope, it sent me back to the log in page.
>
> **[1:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=95)** See how it rejected me?
>
> **[1:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=97)** Every time it just sends me back there because I hit that redirect because it's not logged in.
>
> **[1:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=102)** So this is pretty common and you can put this and it's just a simple three-line little bit of code at the top of your pages.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=108)** But even better is if I just take this and I cut it and let's go over and put it in one of our functions.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=115)** Your status_error_functions.php, let's put it in here.
>
> **[1:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=119)** Right here at the top, I'm going to make a new function which I'm going to call require_login and inside there I'll just paste in that code.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=129)** So now with this function, all I have to do is call this require_login function and it should do it.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=134)** I'll save it.
>
> **[2:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=135)** Let's go back over to index.php and I'll just put in require_login.
>
> **[2:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=139)** Now it's not going to work just yet and the reason why is because I've now put this session variable inside a function and this doesn't have scope inside the function.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=149)** So in order to have it have scope, I have to call global on it to bring in the session variable from the global scope so that I have access to it and then it'll be able to check and see whether it's logged in or not.
>
> **[2:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=161)** Okay, let's go back and let's save it and let's try it one last time to make sure it's still working.
>
> **[2:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=166)** Let's go to index.php.
>
> **[2:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=169)** Nope, still didn't work.
>
> **[2:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=171)** Let's now take that same bit require_login.
>
> **[2:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=175)** I'll just copy that line and we don't need it on our login or logout pages, but all of our bicycle pages should get it.
>
> **[3:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=182)** So let's open up delete and right after we initialize that's where we want to do it.
>
> **[3:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=187)** I don't need php tags here because I'm still inside php tags.
>
> **[3:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=192)** And let's see, edit, same thing, I don't need the php tags.
>
> **[3:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=197)** Those will just break it so let's remove those.
>
> **[3:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=201)** And form fields, won't need it.
>
> **[3:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=203)** Index.php, I can put it right here.
>
> **[3:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=207)** On new.php, put it right after initialize and remove those php tags.
>
> **[3:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=215)** And I'll do it for show right here.
>
> **[3:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=218)** And then very quickly let's go to admins, I can do this for show and index, those are the ones I think that had the ability to just paste it.
>
> **[3:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=229)** On the other ones delete, have to remove the php tags.
>
> **[3:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=233)** So let me do that this time and then I'll copy this line as is and we'll go to edit, paste it in, and new, paste it in.
>
> **[4:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=243)** Okay, so now I have those access controls on all those pages.
>
> **[4:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=246)** I'm going to just close up a whole bunch of pages here.
>
> **[4:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=249)** Let's quickly close those back up.
>
> **[4:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=251)** Now let's go back over and let's try it.
>
> **[4:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=253)** So if I go to staff/admins now index.php, I shouldn't be able to get this page.
>
> **[4:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=260)** Nope, sent me back to the log in page and that should be true for all of my pages.
>
> **[4:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=263)** But if I log in, kskoglund with Password#1234, submit it, now I am able to go around and browse the different pages.
>
> **[4:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=276)** Now it works as expected because I'm logged in.
>
> **[4:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=278)** It remembers that I was logged in.
>
> **[4:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=281)** We've successfully implemented user authentication using our object-oriented programming techniques.
>
> **[4:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/add-page-access-control?u=76281980&t=286)** And now we have a password-protected staff area for managing our admins and our bicycles.

> [!info]- Semantic Content
>
> **Code Keywords:** let (21), function (5), delete (2), new. (1), new, (1)
> **CLI Commands:** php (17), make (2)
> **File Paths:** index.php (8), staff/login.php (1), status_error_functions.php (1), new.php (1)
> **Code Identifiers:** require_login (4), url_for (1), status_error_functions (1)
> **UI Navigation:** go to (6)
> **Speakers:** - [instructor] (1)

#### Improve the session class
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=0)** - [Instructor] Before we leave this topic completely, I want us to make a few improvements to our session class.
>
> **[0:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=5)** Hopefully this will help to illustrate why it's useful to wrap up some of that session functionality into a class in the first place.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=13)** Putting all of that code into the session class allowed us to have it all in one place, but it also allows us to be able to extend this class and to do more work on it in the future, so it would become more complex over time and helps us to manage that complexity.
>
> **[0:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=27)** For example, let's say that we wanted to have the current user's username displayed up here at the top, so it would just say who you're logged in as.
>
> **[0:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=35)** Well, we could add that feature by simply adding a new public attribute for username.
>
> **[0:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=44)** Let's say that we also wanted to keep track of when the user last logged in.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=48)** We'll make a private attribute for their last_login.
>
> **[0:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=51)** The idea might be that we don't want to allow users to stay logged in forever.
>
> **[0:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=56)** At a certain point, we want their login to expire.
>
> **[0:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=59)** So let's add those two features in.
>
> **[1:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=61)** When a user first logs in, we need to keep track of their username, so we're going to set this username equal to the admin username.
>
> **[1:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=73)** And we know that we also want to keep track of the last_login which is going to be equal to the current time.
>
> **[1:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=80)** Now, we don't want to just store those in the properties.
>
> **[1:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=82)** We also want to store them in the session just like we did here.
>
> **[1:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=85)** So I'm actually going to take this and we can actually do a double assignment here where we just assign one and then right away assign the other one.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=92)** This one's going to be username and this one's going to be last_login, so it'll assign it both to the session and to the property in sequence.
>
> **[1:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=102)** We can actually do the same thing here if we wanted just to keep these parallel.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=107)** I'll put that up there and now those all look the same.
>
> **[1:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=111)** Okay, so that's when you first log in.
>
> **[1:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=112)** It's going to keep track of them.
>
> **[1:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=114)** When you log out, we also know that we want to get rid of them, so we want to unset those values so I'll copy this line and just paste it in, username and last_login.
>
> **[2:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=126)** And same thing for this, we want to remove the property values as well, so this is username and last_login.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=137)** And then when we go to check a stored login to see if a user has previously logged in, we also need to get those values at that point as well, so let's put those in.
>
> **[2:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=146)** It's also going to be username username and last_login last_login.
>
> **[2:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=159)** Okay, so now as soon as we log in, we should be keeping track of that additional information, and that means that then we have the ability to use it.
>
> **[2:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=166)** So let's trying using it.
>
> **[2:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=167)** Let's go to our staff header and right after where we see if the user's logged in or not, let's just output their username.
>
> **[2:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=175)** I'll make a new line here, a new li, list item, and then we'll do user colon and then inside php tags, we will echo back the session username.
>
> **[3:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=192)** Now, we should have that value because the user is logged in at that point.
>
> **[3:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=195)** So let's just save that.
>
> **[3:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=196)** Let's go try that out.
>
> **[3:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=197)** We need to log out first because it won't store it until I log in for the first time so let's do that, kskoglund and then capital Password#1234 and submit
>
> **[3:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=211)** and there we are, User: kskoglund.
>
> **[3:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=213)** So now on each and every page, it remembers what my username is.
>
> **[3:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=216)** It doesn't have to go to the database and look it up.
>
> **[3:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=218)** It's stored in the session and it's managed by my session class.
>
> **[3:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=222)** It makes it nice and easy.
>
> **[3:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=224)** What about that last_login?
>
> **[3:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=226)** Let's say that we wanted to check and see whether the last_login was recent or not.
>
> **[3:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=229)** Our session class can be given that ability.
>
> **[3:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=232)** We can add another method here.
>
> **[3:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=233)** We'll make it a private function called last_login_is_recent.
>
> **[4:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=243)** And then inside here, let's check and see what the last_login was.
>
> **[4:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=246)** So if there is not a login, if it's not set, well then we know that it's obviously not recent.
>
> **[4:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=253)** That's just a good error checking thing.
>
> **[4:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=255)** So if there's no last_login, then let's return false, elseif and we'll do a test here to see whether it's over the maximum age.
>
> **[4:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=268)** But before I do, I'm just going to finish my thought here and just say that the last one, this is going to return false if it's too old.
>
> **[4:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=276)** Otherwise, the last thing is return true.
>
> **[4:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=280)** It passed both of our tests.
>
> **[4:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=281)** It was present and it was not too old.
>
> **[4:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=284)** So how do we check and see if it's too old?
>
> **[4:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=285)** Well, we check that value of last_login and we need to add a value to it.
>
> **[4:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=291)** So the value I'm going to say up here is a constant.
>
> **[4:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=295)** I'm going to put it in here.
>
> **[4:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=297)** We'll make it a public const.
>
> **[5:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=300)** We'll call it MAX_LOGIN_AGE and then we can set this to a value, 60 times 60 times 24, that'll be one day.
>
> **[5:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=313)** If you want, you could multiply it by more if you wanted to have the number of seconds in one week or three days.
>
> **[5:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=318)** You can choose what that would be.
>
> **[5:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=320)** So I'm going to say one day is the maximum login age.
>
> **[5:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=322)** I'll copy that constant that I've defined.
>
> **[5:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=325)** It's a class constant so I'm going to say the last_login plus self colon colon and then the MAX_LOGIN_AGE and then I can check to see whether that value is less than the current time.
>
> **[5:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=340)** Let's just put another set of parenthesis around this addition.
>
> **[5:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=344)** There we go, so we'll take the last_login time.
>
> **[5:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=346)** We'll add the number of seconds for the maximum login.
>
> **[5:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=349)** And if it's less than the current time, we'll know we've already passed that time, right?
>
> **[5:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=353)** We'll know that we've already gone past it.
>
> **[5:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=354)** We have already achieved more seconds than that represents and so it's false.
>
> **[6:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=360)** So then maybe you have last_login as recent, then add it up here to checking whether the user is logged in or not.
>
> **[6:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=366)** And let's just copy this line.
>
> **[6:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=369)** I'm going to comment this one out so we still have it if you want to go back to it.
>
> **[6:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=373)** But just to show you what that might look like, we could say well if the user is set and the this, and what's the name of our method down here, last_login_is_recent, so if the user is set and last_login_is_recent, then the user returns true.
>
> **[6:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=393)** So if we save this, let's go back over here, let's see if our page still loads, click on the menu, oops we have a parse error, session class on line 11.
>
> **[6:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=401)** What mistake did I make?
>
> **[6:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=403)** Line 11, I forgot a semicolon here.
>
> **[6:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=406)** There we go.
>
> **[6:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=407)** Let's come back and reload it.
>
> **[6:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=409)** Okay, it still works.
>
> **[6:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=410)** I'm on my menu page.
>
> **[6:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=411)** I'm able to move around because my login is still recent enough.
>
> **[6:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=414)** If we change this so that the login time was much less, let's just temporarily make it one second, now I come back and when I go and reload the page, it says nope, you got to log in again.
>
> **[7:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=426)** I'll change this back to say it's long enough.
>
> **[7:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=429)** We'll reload index.php and we're able to get back there again, so we have the ability to control the maximum login age.
>
> **[7:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=437)** The fundamental idea I'm getting at is that we can add more complexity over time to this class and it makes sense where it goes.
>
> **[7:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=444)** It's easy to manage this complexity.
>
> **[7:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=446)** For example in the future, you might want to check and see when a user logs in what their IP address is or what the user agent string is that they're using and you might want to use those in some way as well.
>
> **[7:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/improve-the-session-class?u=76281980&t=456)** And the session class becomes the perfect place for you to do that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), this, (3), class. (2), public (2), private (2)
> **Code Identifiers:** last_login (15), last_login_is_recent (3)
> **CLI Commands:** make (7), php (2)
> **UI Navigation:** go to (3), click on (1)
> **Analogies:** for example (2), just like (1)
> **Env Vars:** max_login_age (2)
> **Definitions:** means that (1), is a  (1)
> **File Paths:** index.php (1)

#### Session messages
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=0)** - [Instructor] In this movie, we'll look at how we can improve our session class by allowing it to manage our session messages.
>
> **[0:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=7)** When I talk about session messages, what I'm referring to is the fact that in some of our pages like edit.php, once we have successfully updated one of these records, we have session message equals the admin was updated successfully.
>
> **[0:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=22)** And then we want to display that on future pages as well.
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=26)** So the way that we do that is with the staff header, we need to have something here that says display_session_messages and that will tell us those reports of whether or not something has been added to the session.
>
> **[0:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=38)** We have this function already existing, display_session_message exists inside our status and error functions.
>
> **[0:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=46)** And if we scroll down here, you'll see what it does.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=48)** It calls get_and_clear_session_message.
>
> **[0:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=51)** If it's set, then it displays some HTML with the message inside of it.
>
> **[0:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=54)** Get and clear it both finds out if it's there, retrieves it, and unsets it from the session.
>
> **[1:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=60)** Now that all works just fine and we could leave it as is.
>
> **[1:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=63)** But now that we have this session class, that seems like a better place to put these messages so let's add them there.
>
> **[1:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=70)** I'm going to go into the session class and let's just fold up some of these so they're out of our way.
>
> **[1:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=79)** There we go and I'm going to make a new method down here which is going to be a public function and I'm going to call it message and it's going to take an argument.
>
> **[1:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=93)** And the thing is I want to be able to call message either by passing in a string to set a message or if I call this method without any value sent in, it'll default to the empty string and I will read back the message instead of setting it.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=108)** It's going to serve a dual purpose.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=110)** So if it's empty message, msg, then this is a set message.
>
> **[2:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=122)** It's not empty and else will know then this is a get message.
>
> **[2:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=133)** Okay, so if it's a set message, then what do we want it to do?
>
> **[2:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=136)** Well, we just tell it that the session message is going to be equal to whatever message was passed in and we can just return back true at the end.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=149)** Now if it's a get message, then we want to get the value that was set there so I'll just copy this and we'll just return whatever the session had.
>
> **[2:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=158)** So that allows us just to use one method to both set and retrieve the messages.
>
> **[2:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=164)** So we can go for example to our admins edit.php page and here where before we had session message equals, we can instead change this to be session object to set its message equal to this.
>
> **[3:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=182)** That's the argument we pass in.
>
> **[3:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=184)** Let's take that, I'll copy it.
>
> **[3:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=186)** Let's go to new.
>
> **[3:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=187)** We do the same thing there.
>
> **[3:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=188)** I'll paste it and then the admin was created successfully.
>
> **[3:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=193)** That'll make it look the same.
>
> **[3:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=195)** And I think we did it with delete.
>
> **[3:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=197)** Yup, was deleted successfully.
>
> **[3:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=203)** And then I've got the same thing on bicycles.
>
> **[3:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=207)** I'll paste it in here, the bicycle was deleted successfully.
>
> **[3:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=214)** I'll copy that one so that I can use that again on edit.php, it was updated successfully.
>
> **[3:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=224)** It was created successfully.
>
> **[3:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=232)** Okay, so that takes care of setting the message.
>
> **[3:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=234)** In each of those cases, I'm now using my new method to do that.
>
> **[3:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=238)** Let's save all those.
>
> **[3:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=239)** Let's make sure I save them as I go.
>
> **[4:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=241)** Some of those weren't saved as I went.
>
> **[4:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=245)** Okay, so now what about this get_and_clear_session_message business that I was doing before?
>
> **[4:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=251)** I can rearrange this a bit now because I have that method there.
>
> **[4:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=255)** Instead of getting and clearing the session message here, let's just get the message by calling dollar sign session and then message.
>
> **[4:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=265)** Now remember, I don't have access to this variable inside this function unless I call global dollar sign session.
>
> **[4:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=273)** That'll bring it in so that I have access to it.
>
> **[4:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=275)** Now I have my message and then I can use the message so if the message is set and it's not equal, then we'll display it.
>
> **[4:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=283)** We also need to clear it, right?
>
> **[4:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=286)** We also need to make sure that we're clearing it.
>
> **[4:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=287)** We were doing that before inside get_and_clear_session_message.
>
> **[4:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=291)** I'm going to take this line right here and just copy it.
>
> **[4:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=294)** I'll go back to session class and let's write another method here.
>
> **[4:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=299)** It's going to be called public function clear_message and all it's going to do is just call that unset on the message to make sure that it's clear.
>
> **[5:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=310)** All right, so now I can go back to my error functions and I can just tell it to clear the message.
>
> **[5:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=316)** So if we get it and it's not empty, then clear message.
>
> **[5:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=321)** There we go.
>
> **[5:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=322)** That should work.
>
> **[5:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=323)** I can now remove this function completely and it should just work as is because I'm already making calls to this existing function.
>
> **[5:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=331)** So let's go back here, let's reload our page to make sure this is still working.
>
> **[5:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=336)** Whoops, I have a problem, undefined index message in session class on line 67.
>
> **[5:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=342)** Let's go back here to session class line 67, session message, I just need to check and see whether it's set or not first.
>
> **[5:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=353)** So let's just put a null coalesce operator after that and make it an empty string if it's not there.
>
> **[5:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=359)** Let's go back and see if that fixes it.
>
> **[6:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=361)** Reload our page and it solves the problem for us.
>
> **[6:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=365)** All right, so let's try editing something.
>
> **[6:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=367)** Let's go to our bicycles.
>
> **[6:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=368)** Let's take this last bike here and let's just change the price to be 199 instead.
>
> **[6:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=375)** Edit bicycle, there we are, and the bicycle was updated successfully.
>
> **[6:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=379)** It worked.
>
> **[6:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=380)** Click back and now the message is gone.
>
> **[6:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=382)** It's no longer in the session so it only displays one time and then it disappears after that.
>
> **[6:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/session-messages?u=76281980&t=388)** My hope is that you see how objects allow you to group similarly-themed code together into one area and also how it allows you to manage complexity as that code continues to grow.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), function (6), public (2), class, (1), this. (1)
> **CLI Commands:** make (7), php (3)
> **Code Identifiers:** get_and_clear_session_message (3), display_session_messages (1), display_session_message (1), clear_message (1)
> **File Paths:** edit.php (3)
> **UI Navigation:** go to (2), scroll down (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (2)
> **Env Vars:** html (1)


### 6. Object-Oriented Pagination

#### Pagination concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=0)** - In this chapter we're going to learn how to do object-oriented pagination.
>
> **[0:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=4)** We will begin by talking about some of the underlying concepts that make pagination work.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=9)** The reason we need pagination is to manage large sets of data.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=13)** Let's imagine that instead of having just 10 bicycles in our database, we had 1,000, or even 10,000, or 100,000.
>
> **[0:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=20)** We probably would not want to view all of those bicycles on a single page at one time.
>
> **[0:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=25)** It would be visually overwhelming, but it also requires server to do a lot of work to retrieve that many records from the database, and then to instantiate them, and turn them into PHP objects.
>
> **[0:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=35)** It would take a lot of time and a lot of memory.
>
> **[0:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=38)** We probably don't want to do that.
>
> **[0:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=39)** So instead, pagination allows us to just show a subset of records, and then, when we want to see more records, there are links that will take us to other pages of the results.
>
> **[0:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=50)** Typically you would have previous or next to take you to the previous or next pages of results, or you might have a list of numbers showing you the different pages so that you could jump directly to page seven.
>
> **[1:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=61)** It's also common to display some information to the user about how the complete set compares to the subset that they're seeing.
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=68)** You might tell them how many records there are, how many total pages there are, or how many records they're viewing per page.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=75)** You've certainly come in contact with pagination before, if you've ever searched for anything online.
>
> **[1:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=79)** Here I've searched for the word pagination on Google, and you can see it tells me there are 71 million results.
>
> **[1:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=85)** Now I certainly don't want to see all 71 million results in one long scrolling page.
>
> **[1:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=90)** Instead I'm just going to see a subset of those records.
>
> **[1:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=93)** We scroll down, and once we get to the bottom of the current page, you can see that we have pagination links down here at the bottom.
>
> **[1:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=99)** If I click Next, it takes me to the next page.
>
> **[1:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=102)** Then it tells me that I'm on page two of those records.
>
> **[1:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=106)** If I scroll down again, you'll see that now I have a Previous link, and I also have numbered links that'll let me jump directly to a page further down the line, and it indicates my current page here by making one of the o's in Google a red color.
>
> **[1:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=119)** This is the basic idea, and it's a common way to handle pagination on the web.
>
> **[2:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=123)** In order to code pagination, we're going to need to keep track of three variables.
>
> **[2:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=128)** We're going to need to know the current page, the number of records per page, and the total record count.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=134)** If we have those three pieces of information, we'll be able to calculate everything else that we need to know for pagination.
>
> **[2:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=140)** For example, the previous and next pages would be the current page plus or minus one.
>
> **[2:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=146)** The total number of pages is going to be the total count of records divided by the records per page, and knowing the total number of pages will let us create links to numbered pages, and tell us if we've reached the last page or not.
>
> **[2:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=159)** We're also going to need to make use of a couple of features of SQL.
>
> **[2:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=162)** We're going to need to use SQL's limit in order to set the number of maximum records that should be returned by the query.
>
> **[2:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=169)** That's essentially the number of records we want per page.
>
> **[2:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=172)** We just want SQL to return a page of results.
>
> **[2:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=174)** We don't want everything, just what we're going to be putting on the current page.
>
> **[2:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=179)** And then we're also going to use SQL's offset in order to skip over records that we don't want.
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=185)** That allows us to see pages beyond the first page.
>
> **[3:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=188)** There's a formula for figuring out the offset.
>
> **[3:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=191)** It's the number of records per page, times the current page, minus one.
>
> **[3:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=197)** Let me demonstrate how that works.
>
> **[3:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=199)** Let's say that we have per page equal to 20.
>
> **[3:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=202)** That would mean that then the formula for offset is per page, which is 20, times whatever our current page is, minus one.
>
> **[3:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=209)** So if our current page is one, we plug it into that formula.
>
> **[3:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=213)** One minus one is zero.
>
> **[3:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=214)** 20 times zero is zero, so the offset becomes zero, so the records being returned would just be one through 20, a page of results.
>
> **[3:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=222)** When we go to the second page, though, now current page is two, so it's two minus one, which is one, times 20 for the per page, gives us an offset of 20.
>
> **[3:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=233)** So now we're going to skip over the first 20 records.
>
> **[3:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=237)** We're going to skip those.
>
> **[3:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=237)** We've already seen those on the first page, so we're going to tell SQL ignore the first 20 records, and start giving me records at 21, so we'll see 21 to 40.
>
> **[4:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=248)** If current page is three, the offset becomes 40, and the records returned are 41 to 60, and so on.
>
> **[4:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=254)** And this makes sense when you look at the fact that at the end, on page five, we're at records 81 to 100.
>
> **[4:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=261)** We have 100 records, 20 records per page, spread across five different pages.
>
> **[4:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=267)** Limit and offset are what allow this to happen.
>
> **[4:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=270)** So the SQL is going to look something like this.
>
> **[4:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=272)** To retrieve a page of results, select all from bicycles, and then we provide the limit, and we provide the offset.
>
> **[4:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=280)** We're also going to need to use one other part of SQL, which is in order to get a record count, we're not going to get back all of the records.
>
> **[4:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=287)** We're going to use count, so select, and then you write the word count with parentheses around the asterisk, and then we don't get back records, we tell SQL to count them for us, and we just get back a row that contains the count.
>
> **[5:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=301)** So those are the underlying concepts.
>
> **[5:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/pagination-concepts?u=76281980&t=303)** Now let's start writing the code to make this happen in an object-oriented way.

> [!info]- Semantic Content
>
> **Env Vars:** sql (8), php (1)
> **Code Keywords:** let (6), this. (1)
> **CLI Commands:** make (3), php (1)
> **UI Navigation:** scroll down (2), go to (1)
> **Analogies:** imagine (1), for example (1)
> **Speakers:** - in (1)

#### Define a pagination class
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=0)** - [Narrator] In this movie, we will define a new class that can help us to keep track of our pagination variables and calculations.
>
> **[0:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=8)** So let's create a new class.
>
> **[0:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=10)** This is going to go inside our classes directory.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=12)** Make a new file, and I'm going to call it pagination.class.php.
>
> **[0:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=18)** It will need some php tags, and it's going to be a class definition for pagination.
>
> **[0:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=27)** So inside this class, we want to keep track of the different properties.
>
> **[0:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=31)** And we know that there are three main variables we want to keep track of.
>
> **[0:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=34)** Public current page, public per page, and public total count.
>
> **[0:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=47)** So the way that I think that we'll add those properties in here is when we create a new instance of the pagination, we can just pass those in while we're creating it and then it will set them.
>
> **[0:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=57)** So let's define a construct method that'll do that for us.
>
> **[1:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=60)** Public function__construct and then we'll pass in the page=1
>
> **[1:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=70)** and per page is going to default to 20 and $total_count=0.
>
> **[1:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=82)** Okay, so then we have this current page, should get set to the value of page, and I'm also going to make sure that this gets turned into an integer.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=92)** I'm just going to type cast that by putting int in front of it because if this is coming in from the URL string which is where we're going to be finding on our page later, it's going to be a string.
>
> **[1:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=101)** This'll just make sure it turns it into a number so we can do math with it.
>
> **[1:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=105)** And then I'm going to just paste that two more times because we're also going to have per page and total count and those values are going to be per page.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=115)** Oops, I lost the dollar sign, and total count.
>
> **[2:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=121)** There we go.
>
> **[2:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=122)** So that's going to set all of the different properties for us.
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=125)** Now lets think about some of the other methods are that we might want here.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=129)** We know we have a calculation for figuring out the offset, and it's very handy to put here public function offset.
>
> **[2:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=136)** Do you want to know what the offset is?
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=137)** Well you just ask it and it will do that formula for you.
>
> **[2:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=139)** So going to return back this and it's per page times then in parenthesis this current page minus one.
>
> **[2:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=151)** That's the formula for offset, so that'll figure that out for us.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=154)** We give it the current page and the per page and we'll know what the offset is.
>
> **[2:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=157)** We also can figure out the total number of pages.
>
> **[2:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=160)** Function total pages, and we know how to figure that out it's going to be return back dollar sign this total count divided by this per page.
>
> **[2:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=178)** Now there's the possibility that it won't divide evenly in which case we want to round up.
>
> **[3:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=183)** So we can use C-E-I-L for the ceiling.
>
> **[3:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=187)** That'll round up, always.
>
> **[3:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=188)** So it'll always round up to that last page so if we have a partial page it'll make sure that it get included as being the last page.
>
> **[3:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=196)** And then we have previous page and next page.
>
> **[3:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=199)** Lets do next page first.
>
> **[3:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=200)** Public function next page The next page we know is just going to be this current page plus one, right.
>
> **[3:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=213)** But lets not just return that value, instead lets keep track of it for a second.
>
> **[3:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=217)** Next equals, and then lets check to see, is that value greater than the total number of pages that we have?
>
> **[3:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=225)** So we can do that by saying return back if next is less than or equal to this total pages, and if it is then we're going to return back the value, right.
>
> **[4:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=240)** If it's less than the total pages we'll return the value otherwise return back false.
>
> **[4:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=246)** It's just going to be false, so there is no next page.
>
> **[4:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=248)** Right, so it's either going to return a number from one up to the total number of pages or it's going to return false.
>
> **[4:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=255)** And we can copy that to do for previous as well and I'll just put it right here.
>
> **[4:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=261)** Previous page, it's going to be a similar idea current page minus one, and then they'll catch it in a variable called prev and then we're going to test though to see whether prev is greater than zero.
>
> **[4:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=277)** If it's greater than zero then we have a previous page.
>
> **[4:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=281)** Right, if it's zero or less than zero it's going to be false there is no previous page.
>
> **[4:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=287)** So that's it.
>
> **[4:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=288)** Now we have a class that'll do some of this work for us.
>
> **[4:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=290)** Lets save that and lets open up a page that we can do some pagination on.
>
> **[4:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=295)** Lets do it on the staff area page for the bicycles.
>
> **[4:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=299)** We'll do index.php and what we're going to do is we're going to put our pagination right here at the top.
>
> **[5:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=305)** We're going to paginate these.
>
> **[5:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=306)** Right now we're finding all of them.
>
> **[5:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=307)** We're not going to do that.
>
> **[5:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=308)** Instead we're going to use pagination instead.
>
> **[5:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=312)** Use pagination instead.
>
> **[5:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=317)** So we know that we're going to want to create one of our pagination objects.
>
> **[5:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=319)** Pagination equals new pagination, and we know that we want to pass in those values to it.
>
> **[5:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=326)** We want to pass in the current page, and we want to pass in per page, and we want to pass in total count.
>
> **[5:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=334)** So we need to be able to find those values.
>
> **[5:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/define-a-pagination-class?u=76281980&t=336)** We'll work on adding that in the next movie.

> [!info]- Semantic Content
>
> **Code Keywords:** public (6), pass (6), function (3), let (2), class. (2)
> **CLI Commands:** make (4), php (3), find (1)
> **File Paths:** pagination.class.php (1), index.php (1)
> **Code Identifiers:** function__construct (1), total_count (1)
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### Paginate bicycles
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=0)** - [Instructor] Now that we've defined our pagination class, we're ready to use that class to help us to paginate our bicycles.
>
> **[0:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=7)** So where we left off in the last movie, was we had added this pagination class in here, but it's not going to work yet and the reason why is because we're parsing in arguments that don't exist, current page, per page and total count.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=19)** We need to find those values.
>
> **[0:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=21)** I'm just going to copy those and let's go up here and for each one of these, we know we need to figure out what the value's going to be equal to.
>
> **[0:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=28)** Current page, per page and total count.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=36)** So current page, we're going to get that from the URL.
>
> **[0:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=40)** The idea is that when we click on one of the links that will eventually take us to the next page or jump to a page, it's going to be the same URL as what's up here now, but it'll add a query parameter to it that looks like this.
>
> **[0:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=51)** Page equals two.
>
> **[0:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=54)** What we want to do is be able to grab this value from the URL and use that as the page.
>
> **[0:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=59)** So let's go back over here.
>
> **[1:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=61)** We know how to do that using the get super global to get page, and if there's not a page, then the page is one, we're on the first page.
>
> **[1:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=69)** So let's default to one using the double question marks.
>
> **[1:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=72)** So if there isn't a value for any reason, the page will just be one.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=75)** So that'll be our current page.
>
> **[1:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=78)** Per page can be any value we like, it's up to us, we decide how many items we want to show per page.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=84)** Normally you might pick a big number like 10, 20, 30, something like that, but because we have seven bicycles here and we want to see pagination, we want to pick a number that's less than seven, so that we get multiple pages of results.
>
> **[1:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=96)** So I'm going to pick five.
>
> **[1:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=98)** So we'll just have two pages of results, that'll be five per page; the first page should have five results on it, the second page should have two results on it.
>
> **[1:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=105)** So that gives me my per page number.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=107)** Now what about total count?
>
> **[1:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=109)** How can we get a total count on the number of bicycles?
>
> **[1:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=113)** We could use something like bicycle find all, but the problem with that is that goes and finds all the records, and there might be 10,000 of them.
>
> **[2:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=121)** And it's also going to instantiate all of those records, which would return an array with 10,000 objects in it, and that's not what we want.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=129)** Instead, we want to write that more efficient sql statement that will count the records for us.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=134)** I could just write the sql statement here one time, but it's something that I may use more than once, so I'm actually going to go ahead and add it to my database object class that gets inherited by all of my other classes, like bicycle and ad map.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=149)** So let's go to the database object class and open that up, and then right here below find all, I'm going to copy that, paste it in here, and this is going to be called count all.
>
> **[2:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=164)** So we're going to count all of the records and all of sql's going to be pretty much the same, except instead of finding all records, we want it to do a count instead.
>
> **[2:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=173)** Putting count and then parentheses around the asterisk will tell sql, just count the rows, I don't want the rows back, just count them.
>
> **[3:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=180)** So I'm going to get back a single row that has a single column with a single value in it for the count.
>
> **[3:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=188)** So I don't want to call find by sql, because that's expecting to get rows of data that I can use to instantiate objects.
>
> **[3:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=194)** Instead, I want to change this and just tell the database connection that it should execute a query.
>
> **[3:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=200)** So I'll do that with self::database and then let's tell it to do a query using that sql.
>
> **[3:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=208)** And I don't want to just return it, because again, that's a result set that I'm getting back.
>
> **[3:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=212)** So we'll call result_set and then I want to take that result_set and I want to get the first row from it.
>
> **[3:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=221)** You know how to do that.
>
> **[3:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=222)** Normally with fetch assoc, but instead here, I'm going to be doing it with fetch array.
>
> **[3:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=228)** I don't need an associative array, it's just a single value, there's no reason to have a label on it, so I'll just use fetch array to get back an array as a row and then I need to get the first value out of that array.
>
> **[4:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=240)** That's the actual count.
>
> **[4:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=242)** The number that's in there is in that first row.
>
> **[4:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=244)** So it's going to be return and we'll use array shift to grab that first value out of the row.
>
> **[4:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=250)** It's a little bit of a convoluted way to get something that's so simple like a count out of it, but that's just the way sql returns it.
>
> **[4:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=256)** It returns a result set with one row, that one row has one column and one value.
>
> **[4:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=262)** So we have to go through these steps to get to that value.
>
> **[4:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=264)** Now that we have count all defined here, we can jump back over to index.php and we can use it.
>
> **[4:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=271)** Bicycle::count all and that will return the count to us.
>
> **[4:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=276)** Now we have the three variables we need for our pagination object, now we have our pagination.
>
> **[4:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=282)** The next thing, of course, is to limit the results based on those calculations.
>
> **[4:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=287)** Now, we could do this a couple ways.
>
> **[4:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=288)** We could modify find all so that it took some parameters, and it would allow us to parse in a limit and an offset.
>
> **[4:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=295)** Instead of doing that, I'm just going to write some new sql here, that's going to select all from bicycles and I'll append it with limit space, and then we're going to drop in interpolate the per page value that we know.
>
> **[5:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=314)** Put a space at the end and then sql equals.
>
> **[5:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=318)** And now let's do offset, and now we need to provide the offset.
>
> **[5:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=323)** Well, guess what knows our offset?
>
> **[5:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=324)** Our pagination class.
>
> **[5:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=326)** Pagination offset.
>
> **[5:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=329)** It's got to have parentheses after it, because we're calling a method.
>
> **[5:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=332)** And then we have our sql.
>
> **[5:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=334)** So now we just need to use that sql.
>
> **[5:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=336)** We can do that with bicycle::find_by_sql, which is the same thing that find all users behind the scenes.
>
> **[5:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=343)** We can just run custom sql with it and it will take that sql, get back rows of data and instantiate those and turn them into bicycles.
>
> **[5:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=352)** So I get the same result.
>
> **[5:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=353)** I end up with an array of bicycle objects just like I did with find all.
>
> **[5:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=357)** But now, I'm getting a paginated version.
>
> **[6:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=360)** Let's save it and let's try it out.
>
> **[6:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=363)** Let's go back over here to this page, and before we try page two, let's just try page one.
>
> **[6:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=366)** So I'm going to erase this.
>
> **[6:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=368)** We'll just go to bicycles index.php and look at that, I get five.
>
> **[6:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=372)** That's exactly what we'd expect.
>
> **[6:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=373)** That's the first page of results.
>
> **[6:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=375)** Now there are more results, they're just on another page.
>
> **[6:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=378)** So if I do ?page=2, now I get the second page of results, six and seven.
>
> **[6:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=385)** Now what I don't have at the moment are links to make this process easy.
>
> **[6:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=389)** Instead, I'm having to go up here and type out the URL.
>
> **[6:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=391)** It's much better if we have links that allow users to navigate from page to page.
>
> **[6:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/paginate-bicycles?u=76281980&t=395)** We'll create those in the next movie.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this. (2), class, (1), super (1), self (1)
> **CLI Commands:** find (7), php (2), make (1)
> **Env Vars:** url (4)
> **Code Identifiers:** result_set (2), find_by_sql (1)
> **UI Navigation:** go to (2), click on (1)
> **File Paths:** index.php (2)
> **Cross-References:** in the last (1), in the next (1)
> **Analogies:** just like (1)

#### Previous and next page links
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=0)** - [Instructor] Now that we have a working pagination class and we're able to paginate the records we get back, we need to add some links so the user can navigate from one page to another.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=9)** And we're going to start by adding previous and next links.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=13)** So far we have pagination, but to get the pagination to work, we have to actually change the URL from page one to page two and from page two back to page one.
>
> **[0:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=23)** What we want are links that send this same URL which are here on the page for the user to click on.
>
> **[0:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=29)** So right below the Bicycles table, we're going to have previous and next links.
>
> **[0:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=34)** Let's go into our code on index.php and let's go down below the table, and let's add some php tags, and let's start trying to write the code that we want to go here.
>
> **[0:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=45)** Now we want to have this pagination, but we don't always want to have the pagination.
>
> **[0:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=49)** For example, what if we had a page that only had four bicycles on it, right?
>
> **[0:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=53)** In that case, we don't need pagination.
>
> **[0:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=55)** We don't have more than one page.
>
> **[0:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=57)** So let's wrap our code in a conditional statement.
>
> **[1:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=60)** If the pagination total pages is greater than one,
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=68)** then we want to execute our code.
>
> **[1:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=70)** So if we only have one page, no reason to show any links to navigate to a different page.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=75)** Next, let's wrap our pagination in a div.
>
> **[1:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=79)** So we'll have a nice way to address it in our CSS.
>
> **[1:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=82)** Div class equals.
>
> **[1:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=85)** I'm going to do backslash in front of double quotes like that.
>
> **[1:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=90)** And the class I'm going to use is going to be called pagination and let's go ahead before we forget and create our ending div tag.
>
> **[1:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=101)** Okay, so that will give us some div tags and then inside there we want to provide the links.
>
> **[1:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=106)** So let's do our next page link first.
>
> **[1:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=109)** So we know what that's going to look like.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=110)** It's echo, it's going to be a link, so a href equals backslash backslash and then it'll say next, right, that's the basic idea of it.
>
> **[2:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=122)** I'm also going to spruce it up a little bit by after the next I'm going to put arrows as well.
>
> **[2:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=126)** Now you could just do greater than greater than, but I'm actually going to use an HTML entity here which is ampersand raquo and then a semicolon.
>
> **[2:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=135)** That's going to give us a nice slightly smaller version of two arrows pointing to the right.
>
> **[2:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=140)** Okay, so this is what our link is going to look like.
>
> **[2:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=142)** I'm going to go ahead and break it right here.
>
> **[2:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=145)** And just go to a new line, like this.
>
> **[2:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=148)** Just so I have a little more room here for constructing this URL.
>
> **[2:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=152)** Where do we want this to go to?
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=154)** We know from the pages we were just looking at in the browser that we want it to say page equals two when we're going to page two.
>
> **[2:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=161)** So we could just put that here, and it would by default use the current page, but I'm actually going to specify the URL.
>
> **[2:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=166)** I'm going to put a URL here and I'm going to actually start by creating the URL up here on this line.
>
> **[2:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=171)** So it's going to be URL four.
>
> **[2:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=174)** I use my URL four helper function and then staff bicycles index.php.
>
> **[3:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=181)** Okay, so that's the page I want to go to.
>
> **[3:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=183)** So let's put that here.
>
> **[3:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=184)** I can use the curly braces and then I can interpolate that string.
>
> **[3:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=189)** And then for the page, it's not always going to be page two.
>
> **[3:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=192)** We want that to be dynamic.
>
> **[3:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=193)** So again let's use some curly braces and inside there let's put whatever the next page is.
>
> **[3:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=199)** We know what the next page is.
>
> **[3:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=200)** We have a method in our class here called next page.
>
> **[3:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=205)** It either returns the current page plus one or if it's greater than the number of total pages, it's going to be false.
>
> **[3:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=213)** So it's going to be either the next page or false.
>
> **[3:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=215)** So let's use that.
>
> **[3:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=216)** Let's use pagination next page.
>
> **[3:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=221)** Now there is a possibility that it will be false which means we're on the last page.
>
> **[3:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=225)** There's not a next page.
>
> **[3:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=227)** In which case we don't want a next page link to appear at all.
>
> **[3:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=230)** So let's copy this and let's wrap the whole thing in a conditional statement that if next page is not equal to false, then we want to display the link.
>
> **[4:01](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=241)** But if it's equal to false, well there is no next page, and there's no reason to display the link.
>
> **[4:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=246)** Let's try all this out.
>
> **[4:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=247)** See if it's working.
>
> **[4:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=248)** Save our page.
>
> **[4:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=250)** Let's go back over here.
>
> **[4:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=251)** We're on page one.
>
> **[4:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=252)** So let's reload our page.
>
> **[4:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=254)** And there's our next link.
>
> **[4:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=255)** When I click it, it takes me to page two.
>
> **[4:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=257)** Now I need a link that will take me back to page one.
>
> **[4:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=260)** So let's copy everything that we just did.
>
> **[4:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=263)** And let's change this to previous page and previous page and the text is going to say previous and we want the arrows to point in the opposite direction.
>
> **[4:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=276)** So I'm going to just cut that, put it at the beginning, and I'm also going to change it so that it's left-angled quotes instead of right-angled quotes.
>
> **[4:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=284)** Alright let's go back and let's try it again.
>
> **[4:47](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=287)** Reload our page and there's our previous link.
>
> **[4:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=289)** Click on it, we're back on next.
>
> **[4:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=291)** Click on that, we're back on previous.
>
> **[4:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=293)** If we had more than two pages, then we potentially would have both of these at the same time.
>
> **[4:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=298)** If we were on page two, we would have a previous link back to page one and a next link that would take us to page three.
>
> **[5:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=304)** We now have a way to navigate.
>
> **[5:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=306)** Before we move on though, I want us to consider if we want to be able to reuse this often, it probably makes sense to put it someplace that we can reuse like a function.
>
> **[5:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=316)** And since it's related to pagination, I'm actually going to take it and create it as a method on our pagination class.
>
> **[5:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=323)** Let me show you how we can do that.
>
> **[5:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=324)** I'm going to take the code for both our previous and our next page, and I'm just going to cut those out of there.
>
> **[5:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=330)** Let's go to our pagination class and I'm going to make public function and we're going to call this previous link.
>
> **[5:40](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=340)** And I'm going to paste all the code in there for now, but I'm also going to make another method down here called public function next link.
>
> **[5:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=351)** And I'm going to move this code down there.
>
> **[5:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=356)** There we go.
>
> **[5:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=357)** So now I've got a previous link and a next link.
>
> **[6:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=360)** So the idea is that I should just be able to call the pagination's previous link and it will return everything I need for this previous link.
>
> **[6:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=368)** We need to make a few modifications though.
>
> **[6:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=370)** We know that it's going to need the URL.
>
> **[6:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=372)** It doesn't know that automatically so I need to pass that in.
>
> **[6:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=375)** I'm going to give it a default value of an empty string, URL equals.
>
> **[6:20](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=380)** That will give me the URL.
>
> **[6:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=382)** And instead of using pagination now, this is going to use this.
>
> **[6:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=387)** Dollar sign this, dollar sign this, and dollar sign this because I'm inside the instance.
>
> **[6:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=395)** And I also think that instead of echoing from a class, it's a better practice to return a value and then echo it from there.
>
> **[6:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=403)** So I'm also going to change these into make it link equals and we'll make this one link.equals and then at the end we need to return back that value, return link.
>
> **[6:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=417)** I'll copy that line.
>
> **[6:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=419)** Paste it down here.
>
> **[7:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=420)** And I'll also just copy this, save myself some typing.
>
> **[7:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=424)** There we go.
>
> **[7:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=427)** So I think that's a little better practice as well.
>
> **[7:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=429)** Okay, so now let's use those.
>
> **[7:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=431)** Let's go back over here to our index page and we should just be able to say tell the pagination to output its previous link and pass in the URL.
>
> **[7:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=445)** And we'll need to echo that because we weren't doing that before inside the method so we'll do it outside and then we'll change this to be next link, alright.
>
> **[7:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=456)** Let's save it.
>
> **[7:37](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=457)** Let's take a look at it.
>
> **[7:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=459)** Reload it, oh, we have a problem, undefined variable link in pagination class line 46.
>
> **[7:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=464)** Where is my mistake here?
>
> **[7:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=466)** If previous page is false, so I need to have link equal to nothing in case there is the possibility it would be nothing and then let's append to both of that.
>
> **[7:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=478)** So now I have a value for link even if the condition is not met.
>
> **[8:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=482)** There we go.
>
> **[8:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=484)** Alright let's reload our page.
>
> **[8:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=486)** And it works.
>
> **[8:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=487)** We have previous and we have next.
>
> **[8:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=490)** Go back to previous and we have next.
>
> **[8:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/previous-and-next-page-links?u=76281980&t=492)** And now it's in a reusable method in a place that makes sense, inside our pagination class.

> [!info]- Semantic Content
>
> **Code Keywords:** let (30), function (4), this, (3), this. (2), class. (2)
> **Env Vars:** url (12), css (1), html (1)
> **CLI Commands:** make (5), php (3)
> **UI Navigation:** go to (4), click on (3), navigate to (1)
> **File Paths:** index.php (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### Numbered page links
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=0)** - [Instructor] In addition to having previous and next page links, it's very common if we have a lot of results to have numbered pages as well.
>
> **[0:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=8)** So we can jump directly to the page that we want instead of having to page through each one of the pages in sequence to get to the results we want.
>
> **[0:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=16)** In this movie, we're going to learn how to create those links.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=19)** I'm going to put my numbered links in between my previous and next link just like we saw with Google, right?
>
> **[0:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=25)** Google has all the Os in their name and they have previous and next links on either side.
>
> **[0:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=29)** That's the idea here.
>
> **[0:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=31)** So we want to make a loop.
>
> **[0:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=33)** So what is our loop going to be?
>
> **[0:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=34)** We want it to be from one all the way up to the total number of pages.
>
> **[0:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=39)** So let's write a loop that does that.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=41)** We can do that with a for loop, for i equal to one.
>
> **[0:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=45)** So it's going to start out being initialized at one.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=48)** And while i is less than or equal to pagination total pages.
>
> **[0:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=57)** So while it's less than or equal to the number of total pages, let's keep going through and we're going to increment i each time through the loop.
>
> **[1:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=65)** Alright, so that gives us a loop.
>
> **[1:07](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=67)** Now we need our loop to output a URL.
>
> **[1:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=70)** So we'll do that with echo a href equals backslash quote backslash quote and then we'll close our tag, and then let's come back and fill in what goes in that in just a moment.
>
> **[1:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=83)** Let's see, I just need one of those.
>
> **[1:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=85)** Okay, so what text is going to go inside here.
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=87)** We want it to be a number.
>
> **[1:28](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=88)** So that number is going to be i each time through here.
>
> **[1:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=91)** So let's use curly braces dollar sign i, and the URL here is going to be similar to the URL we were using for the previous link and the next link.
>
> **[1:42](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=102)** Do you remember how that worked?
>
> **[1:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=103)** We had interpolated the URL that we're setting up here and then after that we have question mark page equals and then we're going to interpolate the page that goes here.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=115)** And what is that value?
>
> **[1:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=116)** Well it's i in this case.
>
> **[1:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=117)** Right, we don't have to actually have a previous or next link.
>
> **[2:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=120)** We don't have to call a function.
>
> **[2:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=122)** It's going to just increment as we go through each one of these.
>
> **[2:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=126)** So that should give us a set of links.
>
> **[2:08](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=128)** Let's try it out.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=129)** Let's go over to our site.
>
> **[2:11](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=131)** And we're on page one.
>
> **[2:12](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=132)** Let's reload the page.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=134)** And there we go, one, two, next.
>
> **[2:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=136)** I click on next, I have previous one, two, right.
>
> **[2:19](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=139)** And if I click on one, I go back to one.
>
> **[2:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=141)** If I click on two, I go back to page two.
>
> **[2:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=144)** Now there are some problems here that could use a little bit of cleanup.
>
> **[2:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=147)** The first is that we don't have an indication of which one of these is selected.
>
> **[2:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=151)** Right now even though I'm on page two, page two is still a link that takes me to page two.
>
> **[2:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=156)** So I'm actually just going to add a conditional in here that's going to check and see if we're on the current page or not.
>
> **[2:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=161)** So if i is equal to the pagination current page,
>
> **[2:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=171)** then we will output something different than when it's not the current page which is when we'll output that link.
>
> **[3:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=180)** So what do we want to output in the case when it's the current page?
>
> **[3:03](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=183)** Well I'm going to put something with span tags around it so it will behave kind of like a link but it's also going to have a class so that we can address it in our CSS.
>
> **[3:14](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=194)** And inside there is still going to be the same thing.
>
> **[3:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=198)** We're just going to use dollar sign i.
>
> **[3:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=201)** So now it's not going to be a link any more.
>
> **[3:23](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=203)** It's just going to be a span tag that has an i.
>
> **[3:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=206)** And the class I'm going to put in here is selected.
>
> **[3:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=210)** Alright, so let's go back over here.
>
> **[3:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=211)** Let's reload our page.
>
> **[3:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=213)** And now you can see two is no longer a link.
>
> **[3:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=216)** If I click on one, now one is no longer a link.
>
> **[3:38](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=218)** So I have some indication of whether they're selected or not.
>
> **[3:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=221)** I can improve this a bit further by adding in some CSS.
>
> **[3:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=225)** So let's go to our staff CSS real quick.
>
> **[3:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=229)** And let's scroll all the way down to the bottom of it.
>
> **[3:51](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=231)** And I've included in the exercise files some very simple CSS called pagination css.
>
> **[3:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=236)** I'm going to copy all of that and I'll just paste it in down here at the bottom.
>
> **[4:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=242)** So it's just going to take that pagination, add some margin above and below it.
>
> **[4:06](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=246)** It's going to make sure that we have some spacing on either side of our links and the span tag, and it's going to style the selected span tag to be bold and black.
>
> **[4:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=256)** So let's save it, take a look.
>
> **[4:18](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=258)** So now let's reload our page.
>
> **[4:21](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=261)** And we get the new CSS.
>
> **[4:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=262)** You might have to force reload to get it to load.
>
> **[4:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=265)** So now we have our new CSS and you can see that they're spaced out a little better.
>
> **[4:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=269)** That makes it a little bit easier to use.
>
> **[4:32](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=272)** Now we did all of this again just inside index.php.
>
> **[4:36](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=276)** It's not reusable but it's the kind of thing we probably want to reuse.
>
> **[4:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=279)** So let's also take this and let's cut it and let's go to our pagination class.
>
> **[4:44](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=284)** And let's create something else for this.
>
> **[4:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=286)** Now we have previous link, we have next link.
>
> **[4:49](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=289)** Let's make another one public function.
>
> **[4:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=292)** Let's call this number underscore links.
>
> **[4:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=295)** It'll be plural.
>
> **[4:56](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=296)** It'll still take a URL as an argument, just like the other ones did.
>
> **[5:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=300)** And then let's paste our code in there.
>
> **[5:02](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=302)** Let me make a couple of modifications to it.
>
> **[5:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=305)** Instead of pagination, we're going to use this.
>
> **[5:09](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=309)** So I'll change those.
>
> **[5:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=310)** And we also know that we don't want to echo directly from this.
>
> **[5:13](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=313)** Instead let's do output equals and then each and every time we go through, we'll say dollar sign output equals.
>
> **[5:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=324)** And at the very end, of course because it is a function or a method, we need to return back the output.
>
> **[5:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=331)** So now we just need to call this number links instead.
>
> **[5:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=334)** So let's go back to index.php and I'll copy this line because it's just going to be very similar, it's just going to be number links.
>
> **[5:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=346)** Alright, see how much cleaner that is?
>
> **[5:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=348)** Let's go back and make sure we didn't break anything.
>
> **[5:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=350)** We'll reload our page.
>
> **[5:52](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=352)** Click on next.
>
> **[5:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=353)** Click on one.
>
> **[5:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=355)** Click on two.
>
> **[5:55](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=355)** Alright, it works exactly like we would expect.
>
> **[5:58](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=358)** And now it's inside this function.
>
> **[6:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=360)** Now there are also times that we may want all of this all the time.
>
> **[6:04](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=364)** So let's go one step further and let's take our URL and move it up outside of this code.
>
> **[6:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=370)** And then we'll take all of this, every single little bit of this, and for now I'm just going to copy it.
>
> **[6:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=376)** Let's go over to the pagination class and let's add one more method here which is going to output all of that for us.
>
> **[6:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=382)** We're going to call it just page links.
>
> **[6:25](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=385)** We're passing a URL to it.
>
> **[6:27](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=387)** And what will it do?
>
> **[6:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=389)** Well it's going to do that same checking.
>
> **[6:30](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=390)** It's going to check and see whether we need the pagination at all.
>
> **[6:34](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=394)** It's going to output this div and then it's going to output the results of each of those.
>
> **[6:39](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=399)** But again, instead of having this echo back, let's have output equals.
>
> **[6:45](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=405)** And everywhere we have echo, we'll just swap in this append to output line.
>
> **[6:53](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=413)** There we go.
>
> **[6:54](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=414)** And at the very bottom, we can just return the output and it will do the same things.
>
> **[6:59](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=419)** So now we go back to index.php and all of this code can just become something very simple, page links, passing in the URL and making sure that we echo those results.
>
> **[7:15](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=435)** Look how that works.
>
> **[7:16](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=436)** Nice and simple.
>
> **[7:17](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=437)** Now I'm able to output all of those page links by just calling one simple method on my pagination class.
>
> **[7:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=444)** Let's save it.
>
> **[7:24](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=444)** Let's go back and make sure it still works.
>
> **[7:26](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=446)** If I click on one, oops we have a problem.
>
> **[7:29](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=449)** Undefined variable pagination in pagination class line 67.
>
> **[7:33](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=453)** Let's see what mistake we made here.
>
> **[7:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=455)** Ah, right here, I need to change these all to be this, dollar sign this and dollar sign this.
>
> **[7:43](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=463)** Now let's go back and reload it.
>
> **[7:46](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=466)** That works, we go to page two.
>
> **[7:48](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=468)** We go back to page one.
>
> **[7:50](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=470)** All of that functionality is now wrapped up in a nice handy method that's inside our pagination class.
>
> **[7:57](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=477)** Now so far we've only paginated the bicycle class.
>
> **[8:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/numbered-page-links?u=76281980&t=480)** I'll leave it as an exercise for you to do on your own for you to go in and add pagination for your admins and even to go back to the public website and on the inventory of bicycles, to add pagination here as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (34), function (4), class. (4), this. (4), this, (3)
> **Env Vars:** url (8), css (6)
> **UI Navigation:** click on (8), go to (3)
> **CLI Commands:** make (6), php (3)
> **Cross-References:** go back to (6)
> **File Paths:** index.php (3)
> **Analogies:** just like (2), kind of like (1)
> **Exercise Files:** exercise files (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/next-steps?u=76281980&t=0)** - I would like to thank you for taking PHP object-oriented programming with databases.
>
> **[0:05](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/next-steps?u=76281980&t=5)** I hope that you've gained useful strategies for working with databases in an object-oriented way.
>
> **[0:10](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/next-steps?u=76281980&t=10)** The active record design pattern that we used to create, read, update, and delete records can be reused in other projects, and further improved to add more flexibility and more features.
>
> **[0:22](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/next-steps?u=76281980&t=22)** Most importantly, I hope that you've found that database interactivity becomes simpler and more manageable using OOP techniques.
>
> **[0:31](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/next-steps?u=76281980&t=31)** The next step is to try using these same techniques in your own projects.
>
> **[0:35](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/next-steps?u=76281980&t=35)** I look forward to seeing some of the amazing database-driven PHP projects that you develop and launch online.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-with-databases/next-steps?u=76281980&t=41)** Until then, happy coding.

> [!info]- Semantic Content
>
> **Env Vars:** php (2), oop (1)
> **CLI Commands:** php (2)
> **Code Keywords:** delete (1)
> **Speakers:** - i (1)


## Path Context

### In [[Get Started with PHP]]
← [[PHP- Object-Oriented Programming]] | **6 of 6**

## Appears In

- [[Get Started with PHP]]

## Related Courses

_Courses sharing skills:_

- [[Essential Statamic for PHP and Laravel Developers]] — PHP
- [[Essential Jigsaw for PHP and Laravel Developers]] — PHP
- [[Advanced PHP- Debugging Techniques]] — PHP
- [[PHP Techniques- Pagination]] — PHP
- [[PHP- User Authentication]] — PHP
