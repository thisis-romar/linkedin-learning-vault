---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: php-user-authentication
url: "https://www.linkedin.com/learning/php-user-authentication"
duration_minutes: 88
duration: 1h 28m
level: Intermediate
updated: 9/7/2021
learners: 35332
skills:
  - Digital Authentication
  - PHP
exercise_files: true
github: "https://github.com/LinkedInLearning/php-user-authentication-2892138"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFloSykEzyuZw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1630601162735?e=2147483647&amp;v=beta&amp;t=IMAwMAd1iIz9kPfdmDaShrr20m40ryqsJvlAa9tVz7U"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Advance Your PHP Skills]]'
prev_courses:
  - '[[PHP- Creating Secure Websites]]'
next_courses:
  - '[[PHP Techniques- Pagination]]'
path_nav: '[{"path":"Advance Your PHP Skills","position":5,"total":7,"prev":"PHP- Creating Secure Websites","next":"PHP Techniques- Pagination"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/software-development
  - topic/web-development
  - skill/digital-authentication
  - skill/php
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/PHP-%20User%20Authentication.md)

![PHP: User Authentication](https://media.licdn.com/dms/image/v2/C4E0DAQFloSykEzyuZw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1630601162735?e=2147483647&amp;v=beta&amp;t=IMAwMAd1iIz9kPfdmDaShrr20m40ryqsJvlAa9tVz7U)

# PHP: User Authentication

> Do you need to know how to apply best practices for user authentication in PHP? This course walks you through a series of best practices that you can apply to your own PHP projects to avoid costly security pitfalls. Instructor Kevin Skoglund gives you an overview of user authentication in PHP, then dives into how you can implement it. He steps through creating the database table, adding new users,

> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication) | 1h 28m | Intermediate | 35K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Restricting user access in PHP applications](#restricting-user-access-in-php-applications)
  - [How to use the exercise files on GitHub](#how-to-use-the-exercise-files-on-github)
- [**1. User Authentication Overview**](#1-user-authentication-overview) (2 videos)
  - [Identification and access control](#identification-and-access-control)
  - [Hashing and storing passwords](#hashing-and-storing-passwords)
- [**2. Implementing User Authentication in PHP**](#2-implementing-user-authentication-in-php) (8 videos)
  - [Creating the database table](#creating-the-database-table)
  - [Introducing the sample project](#introducing-the-sample-project)
  - [Adding new users](#adding-new-users)
  - [Logging in users](#logging-in-users)
  - [Logging out users](#logging-out-users)
  - [Controlling access to pages and functions](#controlling-access-to-pages-and-functions)
  - [Challenge: Editing users](#challenge-editing-users)
  - [Solution: Editing users](#solution-editing-users)
- [**3. Working with Strong Passwords**](#3-working-with-strong-passwords) (3 videos)
  - [Password requirements](#password-requirements)
  - [Preventing weak passwords](#preventing-weak-passwords)
  - [Resetting forgotten passwords](#resetting-forgotten-passwords)
- [**4. Securing User Authentication**](#4-securing-user-authentication) (6 videos)
  - [Preventing IDOR](#preventing-idor)
  - [Using HTTPS](#using-https)
  - [Protecting access tokens](#protecting-access-tokens)
  - [Keeping track of logins](#keeping-track-of-logins)
  - [Challenge: Expiring logins](#challenge-expiring-logins)
  - [Solution: Expiring logins](#solution-expiring-logins)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Restricting user access in PHP applications](https://www.linkedin.com/learning/php-user-authentication/restricting-user-access-in-php-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/restricting-user-access-in-php-applications?u=76281980&t=0)** - [Kevin] This course will teach you how to write user authentication code in [[PHP]] so that you can restrict access to webpages and other website features to users who are logged in. You can follow right along with me or sit back and watch. Along the way, I'll share my advice on best practices. You will immediately be able to add user authentication to your own projects. My name is Kevin Skoglund. I'm a web developer who's been using PHP for over 20 years. I'm excited to show you how to use PHP to add user logins and access control. Let's get started learning with PHP: User Authentication.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4)
> **CLI Commands:** php (4)
> **Env Vars:** php (4)
> **Speakers:** - [kevin] (1)

#### [How to use the exercise files on GitHub](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980&t=0)** - [Instructor] All of the exercise files for this course are available in a [[GitHub]] repository. You can find it at this URL. It's a project hosted by the [[LinkedIn]] Learning account called [[PHP]]-user-authentication-2892138. The repository on GitHub has branches that correspond to each of the videos in the course. You can use the branch pop-up menu to switch to a specific branch and review the code for a specific video, for example, the branch titled 02_01b, which show you the code for chapter two and the first video. Branch names with a B at the end indicate that they contain code as it is at the beginning of the video. Branch names that end with an E contain its state at the end of the video. You can also download the code to work along with me. If you're a [[Git]] user, you can clone the repository by clicking on the code button and then click on the clipboard icon to copy the URL. Then you can type git clone and paste in the URL that you copied to your clipboard. You'll also notice it's the same URL as the GitHub repository, but with .git at the end. Then you can navigate into the cloned project and check out the branch you want. The branch 01_01b is the start of the course. You don't need to know Git or have a GitHub account to follow along. If you choose the branch that you want, you can click the code button and then choose to download a zip file, which will contain the code for that branch only. Once it downloads, you can decompress the file
>
> **[1:33](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980&t=93)** and open the project in a text editor to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (4), [[Git]] (4), [[LinkedIn]] (1), [[PHP]] (1)
> **CLI Commands:** git (4), find (1), php (1)
> **Env Vars:** url (4)
> **Tools:** github (4)
> **UI Navigation:** switch to (1), click on (1), open the (1)
> **Exercise Files:** exercise files (1), download the (1), zip file (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. User Authentication Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Identification and access control](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=0)** - [Instructor] Let's begin with an overview of user authentication. Authentication is a process which confirms a user's identity. We make sure that they're authentic, that they are who they say they are. We usually authenticate a user before we grant access to privileged content or actions. We want to identify the user so we can control the access that we give them to system resources. This is true online, but it's also true in the real world. In fact, a simple key to a house, a car, or a filing cabinet is one of the simplest [[Forms]] of authentication. Anyone who possesses the key is considered an authorized user who should be granted access. User authentication is essential in any modern web application because protected areas are common. It might be a [[Content Management]] system where admins are able to update content that the public sees. Or a website might have an area for VIP's, for registered members, or for paying customers. In all those cases, we'd want to protect those pages so that only authenticated users are able to access that content. Credentials are evidence that you are who you say you are. In the real world, if you go to the border of another country and show your passport, you're presenting credentials to establish your right to pass into that country. On the web, when we talk about credentials, we usually mean your username and password. It's by far the most common way that you access privileged web pages. It's important to understand and to follow best practices in this area because mistakes can be extremely costly. Our development choices can have a major impact on security. Security and development are closely intertwined topics.
>
> **[1:35](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=95)** I want to give you an analogy to explain how user authentication on the web works. It may help you to hold it all in your head. Imagine that you're going to be purchasing tickets for a concert or an event. You then go to pick up the tickets. You wait in line, you show your ID, and they let you in. They also stamp your hand as you're going in the door, making it clear that you've been allowed into the concert. Now you can go into the event. You can move around into different rooms, go in and out, and all the time, they know that you've already given your ticket and that you're allowed to be there because you have that hand stamp that says so. If you wash away the hand stamp, then you would lose your access. User authentication is similar. The admin is going to create a user in the database. That's like purchasing tickets for a concert. At that point, we have the ability to attend, even though we haven't attended yet. Then, when the user comes to the site, they log in via a web form. The application authenticates the user by confirming that their username and password are valid. And then it gives them an ID to remember them. When the user requests additional password protected pages, it shows that ID, just like showing a hand stamp. And then finally, when a user logs out, it's like washing away that hand stamp. You would need to log in to start the process again. This analogy provides a good overview of the kind of code we're going to be building in the following chapters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Content Management]] (1)
> **Analogies:** imagine (1), just like (1), it's like (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Env Vars:** vip (1)
> **Definitions:** is a  (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Hashing and storing passwords](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=0)** - [Instructor] Passwords are not the only way to authenticate users. A system might use biometrics or a physical device, but on the internet, passwords remain the most popular type of user credentials by far. They're the key to entry, and we need to think about how to handle them securely. The single most important rule about passwords is to never store them in plain text. If passwords are stored in plain text, then anyone with access to the database would have access to every user's password. That could be hackers who are stealing your database. It could be authorized employees with database access. It could be leaked from a database backup or recovered off a decommissioned hard drive. It's not theoretical, it happens all the time. It puts your users at risk, and because usernames and passwords are often reused on multiple sites, it puts other sites at risk too. So please, as a favor to other developers, never store passwords in plain text. We also won't be encrypting passwords to prevent anyone from decrypting later. That might surprise you, but it's because there's a better technique that we can use. We can use a hashing algorithm instead of encryption. A hashing algorithm is one way and not reversible. It won't be possible for anyone to decrypt the password and get the original string, including us. The reason is that information is lost during hashing, which would be needed to reverse the process. A good analogy is to imagine removing all of the vowels from a book and then sorting the remaining letters alphabetically. We could not reverse that process
>
> **[1:34](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=94)** and reconstruct the book text. We would be missing too much important data, the vowels and the original positions of the letters. Hashing [[Algorithms]] follow a different process, but they also discard important information along the way. So how do we compare the password during a log-in attempt with a hashed version? It works because if the same inputs are given to the same hashing algorithm, it will always have the same output. In our analogy, the same book text and the same vowel removing and sorting process would have the same results every single time. We'll take the user's password, and we'll hash it and store that string in the database. And then when a user tries to log in, we'll take their attempted password, pass it into the hashing algorithm. If we get the same output, then we know that the input must have been correct. If the encrypted strings are different, then we know that the input wasn't correct. What about the rare case when two passwords have the same hash? In our analogy, it's possible though unlikely, that we would have two books where the remove vowels and sort process has the same result. We will choose good hash algorithms so that we ensure that such false positives, also known as collisions, are rare. As we'll see in the next chapter, [[PHP]] has built in functions that make this whole process easy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[PHP]] (1)
> **CLI Commands:** php (1), make (1)
> **Env Vars:** php (1)
> **Cross-References:** in the next (1)
> **Definitions:** known as (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 2. Implementing User Authentication in PHP

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating the database table](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=0)** - [Instructor] If you want to work along with me, then you'll need a database table to store the usernames and passwords. And to do that, you'll first need a database. You can use an existing project that you have, or I'm going to be using a sample database. I'm going to call globe underscore bank. So this is a project for the Globe Bank, Inc, that we're going to be working on. And you'll also need to grant privileges to my [[SQL]] user on that database. Once you have that, you'll be ready to create the table that we need on the database. The create table command can do that. I'm going to call mine admins. And the key part is that it's storing the username and the password, which I've called hashed password. But you'll see, I've also got a primary key there of ID, which is an integer, not an auto increment. And then I've also got first name, last name and email, as well as username and hashed password. All of those are just going to be strings, they're varchar 255. The hash password we're storing will always be 60 characters long, but we're going to go ahead and use 255, just in case we use something different in the future. Let's go to the command line and I'll demonstrate. Inside the exercise files, I've included the same commands. You can see, this is a comment. This is actually a bit of SQL here, and you can pull that out of the exercise files from the globe bank database folder. I'm going to go to the command line to get to my SQL. And I'm going to log in as root to start with because I need to create the database table. So I'll log in. It'll ask for my password. And then when I'm here, I'll say show [[Databases]].
>
> **[1:35](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=95)** You'll see that I don't really have any. And so I'm going to create database globe underscore bank, and then let's grant all privileges on globe underscore bank dot and the asterisk, and then two, and then inside single quotes, the user that we want to use, I'm going to use [[PHP]] user at local host, and then let's flush the privileges. P R I V I L G E S. There we go. And then if we wanted to go ahead and create the table, we could use use globe bank. Now we'd be on that database table ready to go. We could take this, copy it, and just paste it in. Or what I'm going to do instead is I'm going to exit out of my SQL and from the regular command line, I'm going to change this to be PHP user with a P for my password option. And I'm going to specify the globe bank database that I just created. And then I'm going to use the less than sign to send input from a file into my SQL. And I'm going to use this file that's right here. So I could type out the path to the file where I can actually just drag it in there as a shortcut on Mac. And when I hit return they ask me for my password and that's it. It worked now, it's in there. If we were to log into my SQL... I'll do that with my SQL dash U PHP underscore user dash P, and we say use globe bank, show tables.
>
> **[3:15](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=195)** You can see there's my table. And if I say show fields from admins, you can see the list of the fields that it created. Now that we have our database set up, we're ready to look at the PHP code we'll be using.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[PHP]] (4), [[Databases]] (1)
> **Env Vars:** sql (7), php (4)
> **CLI Commands:** php (4)
> **Tools:** command line (3)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** go to (2)
> **Exercise Files:** exercise files (2)
> **Prerequisites:** you'll need (1), set up (1)

#### [Introducing the sample project](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=0)** - [Instructor] In this movie, we'll introduce the sample [[PHP]] project that we'll be working with. You can certainly use code from one of your own projects, but if you don't have it, this'll get you jump-started and on the right path. The key pages we're going to be looking at are in a directory called staff, in a directory called admins, and there's a number of pages to help us manage the admins. So this would be an index page to list off the admins that are in the database, a show page to look at a particular admin, and then new edit and delete pages to manipulate those database records. The starter project in the exercise files has all of these pages. It also includes some query functions we'll need to work with the database, some [[Data Validation]] functions, and some other helper functions. These are all based on topics that I cover in my courses, PHP with [[MySQL]] Essential Training. Let's take a look. So inside the exercise files, there's a directory called globe bank. You can see that there's three directories inside there, database, private, and public. And I've got those open in the atom text editor. Let's look at public first. Public has an index page. That's just a basic home page. And then there's the staff area. We click on staff, we have an index page there that is just a menu, and then the homepage for the staff area. And then there's this admins directory, which has those pages that we just talked about. So for example, if we look at index.PHP, you can see that it has require once to initialize. We'll take a look at that in a minute. That's in the private directory. Then it finds all the admins and then it goes through and just creates a table
>
> **[1:33](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=93)** of the different properties of those admins, and then just lists them all out on the page. For something like new, you can see we've got a form. It checks to see if something is a post request. This is one of the helper functions that we'll look at. And then you can see that it comes in here and it calls insert admin to insert the admin parameters that have been sent in by the form. We'll take a look at that as well. And then down here you can see it actually displays the form and has some nice things like showing errors and things like that. These are all topics that I cover in the PHP with MySQL Essential Training. If we go to the private directory, we can see where a lot of those are defined. Initialize is the jumping-off point. So pages load initialize, and it sets everything up for them. So it turns on output buffering and starts up the session. It defines some constants that we might need. And then down here you can see it requires a bunch of other pages and then connects to the database with the variable DB. So we're ready to go. The functions.PHP is here, that loads in some basic functions like URL for, and some sanitization helpers, some things that'll display some errors, redirect, redirect to when we want to go to a new location, there's is post requests that we just saw to check and see if we're getting back a post request, and display errors. Again, these are all pretty simple and straightforward. They're just there to help make things easier. Then initialize calls database. We go to database, you'll see it loads up the credentials. The credentials are the credentials that you would use to log into the database. These are mine. If you are using different credentials
>
> **[3:05](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=185)** or a different database, you'll want to modify these to match yours. Once database is loaded in the credentials, we've got some functions here to help us to connect the database, to disconnect, something to escape strings so that they're safe to put in the database, confirm the database connection, and confirm that we got a result set back. We go back to initialize again, we have query functions and that has functions to help us to query the database. I'm just going to fold these up so we can see them all. And you can see it finds all admins, finds a particular admin by ID or by username. It inserts an admin, updates an admin, or deletes an admin. And then there's validate admin, which is a validation function. We'll take a look at insert admin. You'll see it calls validate admin here to make sure it's valid. That makes sure for example, that the first name is not blank. And then once it confirms that it's valid, it inserts it in. Now at the moment hash password is just a empty string. We're going to have to work on that. But this is the code that sort of gives us the skeleton for us to work from. Now, some of these validations are stored in validation function. So is blank, has presence, has length. Those are the kinds of things that are stored in here, and they're just handy helpers to help us perform common validations. So you can spend some time looking through the code that's inside the private directory. If you're not already familiar with it, I think it's all pretty straightforward. The goal in giving the sample project was to get you jump-started on the path and not to have us spend a lot of time building some of these tools so that we could focus on user authentication.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (5), [[MySQL]] (2), [[Data Validation]] (1)
> **CLI Commands:** php (5), mysql (2), make (2)
> **Env Vars:** php (5), url (1)
> **UI Navigation:** go to (3), click on (1)
> **Exercise Files:** exercise files (2), starter project (1)
> **File Paths:** index.php (1), functions.php (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)

#### [Adding new users](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=0)** - [Instructor] We have our sample project. Now we need to improve the code that adds new admin users to the system. We have code to add a user, but it doesn't hash the user's password yet. The password will be submitted on the web form in plain text. We need to hash it and then use the hashed value in the [[SQL]] insert statement. To do that, we'll use a [[PHP]] function called password hash. If you give it a password, it returns a hash. The second argument specifies what type of hash algorithm to use. If you use the constant password default, it will use php's default setting which is currently bcrypt. That's a terrific choice so we don't need to change it. However, I usually specify the algorithm which you can do using the constant password bcrypt. You can also send in options as a third argument, such as setting the cost factor that bcrypt will use. The default cost factor is 10 and that's also a good choice, so you can leave it out unless you know that you want something different. In the project, if we click on create new admin, we get a form for adding a new admin user, and it has a password field as well as a confirm password field here. Let's go to staff admins new.php and look at that code. If it's a post request, then it tries to submit the user of the database. If the page is a get request, which was normally would be when we first go to the page, it'll just display the blank form. Let's drop down here and right below where it says create admin, let's just add in a bit of temporary php code here that will echo back the results of password_hash
>
> **[1:37](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=97)** and let's pass in just a string. It can be anything you want. I'll put in password, 1, 2, 3, 4 and then I'll use password_bcrypt, semi-colon, and close our php tags. Now let's just try this out and see what we get when we echo back the results of this password hash function. We'll come back over here, we'll reload the page, and there it is. That's our hash. That's the result of hashing that single string. Now you'll remember, I told you at the beginning that every time we run the string through our algorithm, we always get the same result. Let's try that and see if it's true, let's reload the page. We got a different result. Every time we do it, we get a different result again. You may think that I've somehow lied to you, right? Well, it's because there's a little bit more going on that we haven't talked about. The string that's output here includes not only the output of the hash, it also includes some configuration settings. The first part tells it that it is the bcrypt cipher. It has a cost of 10 and then there's about 22 characters here that are the salt. That's a random bit of data that it generates to go with the data that we're inputting as the password. It comes up with the result for that, which is the last part here, and then it appends it all together into one thing so that it has settings that it needs to run again. So, when it takes these 22 characters plus the same string, it will give the same result. But every time we run it,
>
> **[3:10](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=190)** it comes up with a new set of 22 characters. It's a new set of input, it's called a salt, and it's a good way of making sure that the password is more secure. So don't let that throw you off. It does return a different result every time we run it, but when we ask php to compare it, it'll use the same set of settings and the output will be the same in that case. Okay, so let's go back in and let's take this back out, but I'm actually going to just go right here and cut that part out 'cause I'm going to need it. I'll save this. Let's go back up here and when we submit the form, you'll see that when it's a post request, it creates an array called admin and it takes all of these post values and sets them into values here, including password and confirm password, and then it passes that into insert admin. An insert admin does the heavy lifting on inserting this admin in the database. It checks for errors. If there are errors, it'll display them to the user so they can fix them. If it returns true, then it goes ahead and says admin created and redirects to a different page. So let's look at insert admin, that's in the query_functions.php file, and let's just fold these up so we can get to it. We got validated admin, here's the insert admin. So the first thing it does, it takes that array that we pass in. It passes it to validate admin which checks different features to make sure things aren't blank, and if they're long enough and such. We'll come back to that in a moment. If there's no errors there, then it comes down here and it comes up with a hash password and then creates SQL with that hash password to submit to my SQL.
>
> **[4:44](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=284)** So right now, hash password is an empty string. What we want instead is to paste in this bit here, but instead of using a static string, what do we want to use? We want to use admin and then password, right? That's what got passed in right here, so we'll take that value, pass the bcrypt, we'll get back a password hash, and that'll be our hash password. Then that's what we'll get saved into the database. Now before we go on from there, let's just jump up here to the validate admin and see what we've got. We've got validation on the first name, on the last name, on email, on the username, but nothing on the password yet. So let's add one for the password. I'll just copy this right here for the username and let's just say that if the password is blank and it's going to say, "password cannot be blank," and let's add another one here that says, if, actually let me just copy this one. There we go. I have another one here that says, "If confirm password is blank, then it can't be blank, confirm password." And we should also confirm that they're the same, right? So let's add one more. If we do have a confirm password, if it's not blank, we'll do else if, and let's just leave that as a placeholder for now, and let's grab this value here, and copy it. If password is not equal to, exactly equal, to confirm password,
>
> **[6:21](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=381)** then we need to put another error here, and I'll just copy this one as a starting place, and the error is password and confirm password must match.
>
> **[6:37](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=397)** Okay, so now we're going to check on that to make sure that the password was typed correctly and confirm password matches. That's a good way to just double check ourselves. All right, so that's it. Let's go back here now and let's try it all out. We'll reload the create admin page. Our hash goes away, that was just temporary. Let's create a user. It could be anything you want, it can be yourself. I'm going to create one here for me. My email would be someone@[nowhere.com](https://nowhere.com) and the password, I will just make password 1, 2, 3, 4 for now, and then password 1, 2, 3, 4. Create admin, oh, password and confirm password did not match. Let me try it one more time. 1, 2, 3, 4, P-A-S-S-W-O-R-D, 1, 2, 3, 4. Okay, that time I got it, it created the user successfully. We could go into my SQL and we could look at it there or we can actually just come over here to show. And we've got a username here. I wouldn't leave this in there permanently, but let's just so we can take a peek at it, let's just add in a BR tag. And then, we'll ask it just to show us what it's got for the hashed password. So we'll save it, reload the page, and there you go. You see, I've got that password. That's now stored in the database. It has both the hashed value as well as all of the configuration settings it needs to go with the plain text password to get that same result. So when we go to login, we'll be able to compare it and find out if they match.
>
> **[8:11](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=491)** Let's just go back in here. We don't want to actually leave that in our code because you don't normally need to see that anywhere. We'll just leave it in the database. Now that we can create new users in the database with hashed passwords, we're ready to learn how to log those users in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (7), [[SQL]] (4)
> **CLI Commands:** php (7), make (3), find (1)
> **Env Vars:** sql (4)
> **UI Navigation:** go to (3), click on (1)
> **Code Identifiers:** password_hash (1), password_bcrypt (1), query_functions (1)
> **File Paths:** new.php (1), query_functions.php (1)
> **Definitions:** is a  (1), is an  (1)
> **URLs:** [nowhere.com](https://nowhere.com) (1)

#### [Logging in users](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=0)** - [Instructor] Now that we have a database, we're ready to log in that user. The steps for login are that the user will go to a login form and submit their username and password. The application will search for the username in the database. And if the username is found, it will hash the submitted password and compare it with the hashed password that came from the database. If those passwords match, then it's going to set that hand stamp for the user. It's going to set a value in the session to the user's ID, and then redirect to a post login page. One recommendation I would make is that, regardless of whether it's the username that's not found or the password that doesn't match, both types of failure should show the same response. So that if someone's trying to guess the username, they don't get information letting them know whether they got a right username or not. Right? They have to give the combination of both has to be correct. Otherwise it just says, sorry, it's not working. [[PHP]] has a function that can help us with this. It's the companion to password hash, it's password verify, and it takes two arguments. The first is a plain text password. That's the one being submitted by the login form. The second is a hashed password, the one that we stored in the database. That means that we have to retrieve the admins record first, so we have that value to pass in. Then we can use this function and it will return true or false. It's that easy. No configurations are needed in this case. We don't need to set the algorithm or the cost factor because as we discussed, those are actually stored with the hashed password.
>
> **[1:34](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=94)** So it already has the configurations it needs to set things up and do the comparison. In our project, I've added a couple of new files. The first is login dot php. You can pause the movie and copy it down, or you can find it in the exercise files. It's just basic form processing. If it's a post request, then it attempts the login. But if not, then it's a get request and it'll just show the form that's down here. It has the username and the password and the submit button. When we submit it, then it will be a post request. It'll take those, the username and password, and then it will try to find the admin user by their username. Finding admin by username is defined in that query functions over here. Find admin by username. It's just checking to see, select from admins where username equals whatever's passed in. And then if it finds that admin, if the admin returns something, then we're going to try to log in and we have to write that code. But before we do, let's jump over here and let's look also at auth functions that I've added. This is just an empty placeholder file inside the private directory. And I told the initialize dot php that it should load it up. So any functions related to authentication, we can put in this file and we know that they'll be available to us. So, inside auth functions, let's write a function to do this. I'm going to call it function log in admin, and we'll pass in an admin. And if we do, we want to log them in. This is going to, I'll just make a note here,
>
> **[3:07](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=187)** performs all actions necessary to log in an admin. Now there might be a lot of things that we want to do here. There might be some additional logging we want to do, and it could be very complex. For now, we're going to keep it very simple though. And we're just going to store in the session, inside admin ID, we're going to store value of admin ID.
>
> **[3:34](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=214)** That's it. And let's also go ahead while we're here. Let's store one other thing. Let's go ahead and take the username out of there as well. This is handy because then we don't have to go back to the database every time we need the username, it's always there in the session. We have a currently logged in user. We have their username nice and handy for us. And then at the end, let's just return true. That's it. This is putting the hand stamp on the user. That's what this step does. It says, remember this user. So let's go back over here to login dot php. If we find the admin, right? That's step one, find them in the database. If they're found, now we need to check their password and then do that login if it matches. So let's try to login if password verify and we're going to pass in the first value, which is just going to be password, scroll back up here, you'll see that that's what I set it to, just the variable password. So variable password. And then the second thing, we found the admin. So we're going to use its hashed password. So if password verify returns true, then we'll do one thing. Password matches. If not, then let's do something else, in this case, username found, but password does not match. And so in that case,
>
> **[5:07](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=307)** we're just going to add to the errors our login failure message. See, I've got that right here. And that's the same one I'm using down here if no username was found, they both return the same message in both cases, login unsuccessful. It doesn't need to tell them why, the credentials didn't work. All right. So if the password matches, what do we want to do? We want to call that new function we just wrote, login admin, pass it in the value of admin. And then after we've put that, let's redirect to the URL for, and we'll make it to staff index dot php. So that'll go to the menu. Now, this redirect to and URL for, those are custom helper methods that I had defined. Here's URL for. You can see what it's doing. It's just making sure that it goes to the root of the website and then redirect to is down here. It's just setting the header like a redirect would. All right. So that's it. We've now got our login code. Let's try it out. Let's save this and let's open up Firefox. Here I am. Let's go- It's going to be a page, we don't have a link to it yet. So we're going to go to staff login dot php There's my login form. Let's try it with something wrong first. I'll just type in something garbage and I'll hit submit. Password can't be blank. All right, let's try something there. Submit, login was unsuccessful. All right, now let's try my real one. I'll try it with a bad password first. Login unsuccessful.
>
> **[6:42](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=402)** And let's try it with the correct password. I put in password1234 and it worked. And we know it worked because it didn't take us back to the login page. It redirected us to the staff index page. Now, if we were to go in and look, we would find out that the session value for admin ID and username had also been set. We can also make one other improvement here. Let's just go into the shared staff header. And right here, we have navigation. Let's just add a line here that says li user colon php echo, and then let's put the value of that username. Session, username. And if there's not a username, then we'll just default to an empty string, and then li. All right, let's go back and reload our page. And there we are, look at that. It's got my username because I'm logged in. So those are the steps to the login process. The key part is really right here with this password verify and all we're doing is taking whatever the user gave us and comparing it to the hashed password that we had previously stored in the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (7)
> **CLI Commands:** php (7), find (6), make (4)
> **Env Vars:** url (3), php (1)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2), means that (1)
> **Cross-References:** we discussed (1)
> **Tools:** firefox (1)
> **Exercise Files:** exercise files (1)

#### [Logging out users](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=0)** - [Instructor] Now that users can log in, let's learn how to log them out. You can probably guess how to do it. It's pretty simple. Like our ticket analogy, we just need to wash off the hand stamp that we created, and we do that by removing the user ID that we stored in the session. I've added another placeholder file to our project called logout.[[PHP]]. You can see it's inside the staff directory alongside login. So we visit this page, this will log us out. So it does all of the setup with initialize, then we're going to need to have some logout code, and then at the end, after it's done with that, this page will just redirect the user back to the login page, 'cause now they're logged out. Maybe they want to log in again, maybe they want to log in as a different user, so we send them to the login page. So what are we going to do for our logout code here? Well, we're just going to call a function that's going to handle all the logging out for us, log_out_admin. We don't need to pass it anything, just going to have a function that will tell it to do the opposite of log_in_admin. So let's do that here. Function log_out_admin, don't need to pass it anything. And inside here, what's it going to do? Well, it's going to do the reverse of logging in. It will use unset on the session for admin ID
>
> **[1:22](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=82)** and then underscore ID. And let's copy that, 'cause it'll do the same thing for username. And then at the end, return true. Now, these are super simple right now, but like I said before, you could do very complex things in here. You might want to do some additional logging. You might want to, you know, keep track in a database of how many times a user has logged in for the month. There's all sorts of things that could be done here, we're just keeping it to the absolute minimum version, which is just to simply mark them as logged in or mark them as logged out. All right, so let's save it, and we need a way to actually execute this logout, so let's go to the staff header, and right down here, below where we have the menu link, let's add another blank. I'll copy and paste it in. But this one is going to be to the logout page, and the text for it will be "logout". We'll save it, and now let's go to Firefox. Let's reload our page. I'm still logged in, so here's logout. So when I click on logout, it logged me out. Took me to the login page, I'm no longer there. So we know that the logout worked. If we were to go back to index.php, you can see that it does not give us a username anymore, because our hand stamp is gone. Now, we shouldn't be able to go to the index page and be able to see this admins area, right? That was the whole point of having authorization,
>
> **[2:55](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=175)** was to have access control. So in the next movie, let's talk about how we can control access to these pages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2)
> **UI Navigation:** go to (3), click on (1)
> **Code Identifiers:** log_out_admin (2), log_in_admin (1)
> **File Paths:** logout.php (1), index.php (1)
> **CLI Commands:** php (2)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** firefox (1)
> **Prerequisites:** setup (1)

#### [Controlling access to pages and functions](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=0)** - [Instructor] A user can now log in and log out to our website, but we're not yet controlling access to pages or functions. In other words, we know if someone should be allowed to see something, but we're not preventing them from seeing something if they're not allowed to. The steps for controlling access is that once a user is logged in, they're going to make additional requests to the website for password-protected pages. When they do, the application is going to check and see if that session data contains the user's ID. That's looking for the hand stamp in our analogy. If it's there, then we know that they've been previously authenticated and we'll return the requested page, no problem. But if it's absent, then we know that they have not been authorized. So we redirect them to the login form so that they can authenticate themselves. Let's try adding this to our application. Let's start by going into the auth functions that we've got here and I'm going to actually just paste in a bit of code so you don't have to watch me type out all of this explanation. But I've got a bit in here just noting that this function is_logged_in is going to contain the logic for figuring out whether someone is logged in or not. And the logic is fairly simple, but it's done in a way so that we have is_logged_in. But then we're going to also have another function which we're going to call it require_login that will check it to see if it's true. So we can always check and find out is the user logged in? And that just returns is that set? If that session variable's been set, then they're logged in. We don't even have to check what it is. We know by its mere presence that it is a logged in user.
>
> **[1:35](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=95)** We also have the value of that login which we can use to look up their admin record anytime we want to. But we don't have to. We already know this person has been authenticated. Require_login is going to go a little bit further. Let me just make a note here. We're going to call require_login at the top of any page which needs to require a valid login before granting access to the page. All right, so what are we going to do here? Well, we're going to check and see if the person's logged in. If the person is not is_logged_in, then that test fails. Then we know that they need to be redirected. So it's going to be a redirect to url_for and we'll make it staff/login.[[PHP]]. Otherwise do nothing, let the [[Representational State Transfer (REST)|rest]] of the page proceed.
>
> **[2:49](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=169)** Okay, so that's it. So is_logged_in is something we can always test and require_login will actually do that test to see if they're logged in or not. And if not, it will redirect them. So we can just put require_login at the top of any page we want to require a login for. So let's start by putting at the top of our index.php page. That's a page where we want to require a login. You can put it anywhere after initialize. You can go absolutely anywhere. PHP, require_login, and that's it. So let's save it. Let's go and try it out. Come over here to Firefox. I'm in my staff area now. Let's click on Menu. That takes me to index and look at that. Anytime I try and go to index.php, it takes me to the login page instead. Now the other pages that I was just on in the admin area I can still move around. Those aren't password protected. So I need to add this same line of code to those pages as well. So let's go to delete.php and right after initialize. I don't need PHP tags here 'cause I'm inside PHP tags. Let's go to edit, same thing here. I think probably more often than not I won't need the PHP tags, so let me just copy that line without them, we have index. And save it and go to new. Save it, we'll go to show. Save it and login of course it doesn't get it
>
> **[4:22](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=262)** because you're not logged in when you have the login page, Log out, you could put it, it's perfectly fine, but it doesn't hurt to do anything here. So there's no reason to put it. I'm going to leave it off of this. Now other pages here outside the staff area, those are public pages. They don't need to have this. It's only the staff area that we're interested in protecting. So I'll save that. Let's come back over here and let's just reload this page. Boom, sent me to the login. I'm no longer able to go to any of those pages, staffadmin/index.php. Oh, gave me an error there, staff admins, plural. There it is, takes me to the login page every time. Now let's try logging in. My password was password1234 and there I am. Now every page I request, it's not a problem. Every page starts out by checking to see whether or not it's been authenticated, whether or not I have that user ID in my session that acts as a hand stamp. Now if we click Logout, you'll see that it says here User, Menu, Logout. That's sort of weird to have that up there, so let's make use of the fact that we can call this function here is_logged-in and let's just check that. Let's come over here to the staff header and let's only show that stuff if the user's logged in. So PHP, if is_logged_in, then and I'll close my PHP tag. And then this will also be inside PHP tags, PHP.
>
> **[6:01](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=361)** Close the curly brace and close the PHP tag. And I'll just move this down to here and take away this space. So now it checks to see if the user is logged in, it shows this bit. If not, it leaves it out. Come back, now it's gone. That looks a little nicer. If I log in, kscoglund, password 1234, and there I am. Now I see it again. It comes and goes. So you see now how we can require login on pages and we can also check the user's logged in state at any point we want even on the public pages. In addition to checking the logged in state of the user, we can also check the different permissions the user might have. We're not setting up complex permissions here, but we could check to see for example if the username is something. Then treat the page differently than it normally would. Or if the user has an access level that's set to a certain amount or if their account has a certain type. Or you could do something fancier where you actually set individual privileges on different users. So you could check and see if a user has a privilege to delete for example. You can be as fine grained with the permissions as you want and the pages can behave different ways depending on these circumstances. For example, the search page might return different results depending on what access level the user had or the page might include or exclude certain information based on characteristics of the user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (14), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** php (14), make (4), find (1)
> **Code Identifiers:** is_logged_in (5), require_login (5), url_for (1), is_logged (1)
> **Env Vars:** php (9)
> **UI Navigation:** go to (5), click on (1)
> **File Paths:** index.php (2), staff/login.php (1), delete.php (1), staffadmin/index.php (1)
> **Analogies:** for example (3)
> **Definitions:** in other words (1), is a  (1)

#### [Challenge: Editing users](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=0)** - [Instructor] It's time for a challenge assignment. In our code, we've created a way to add new users, but we need to also think about editing users. When you create a new admin, you click this link and it takes you to a form that allows you to submit first name, last name, username, email, and then password. Confirm password. And we saw how to do that. Once we have an admin, if we click edit, we get back an edit admin page, which has the exact same form fields on it. But there's two problems. One, we haven't added any password hashing. So if you were to enter a password here, it would not hash it and store it in the database. Back to the moment. It's just set up to store an empty string, which would have the effect of locking out the user. The second problem though, is that even when we come to edit the admin, we might not be wanting to edit the password. Let's imagine that we come in here and this user has called me up on the phone and said, you know what, my email address is changed. Can you change it? So instead of someone@[nowhere.com](https://nowhere.com), it's someone@[somewhere.com](https://somewhere.com). Now when I click edit admin, but when I do it says password cannot be blank. Confirm password cannot be blank. The validations are checking to see if something has been submitted. But if I change it to something, well, then it's going to change this person's password. And that's probably not what I want. I probably don't know what that password is. I shouldn't know, at least.
>
> **[1:32](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=92)** So in addition to hashing the password, we also need to handle the fact that we may not even want to update it in some cases. There are a couple of strategies. that you often see use to deal with a scenario. The first is you make it so that the admin simply cannot update user passwords. You just take it off the form field. You make it so that it has a separate validation and you don't include it in the [[SQL]]. Or you can have separate [[Forms]] for editing the user's details. And then another form for editing the user's password. It's also possible to make it only hash and update password if a password was sent. So if you leave those two form fields blank, it doesn't object. It updates the [[Representational State Transfer (REST)|rest]] of the user and ignores the password fields completely. But if you did type in something in the password fields, then it would hash and update it correctly. And then the fourth possibility is that you might make it so that users are only able to update their passwords by using a password reset process. Often that takes the form of telling the website that you've forgotten your password. So it emails you some kind of a link. You click on the link and then you enter your new password in order to update it. There may be other variations on these as well. Your challenge assignment is to try and implement the third one, make it so that it will hash and update the password if a password is sent in the form. But if it's left blank, then don't worry about it. Skip the hashing, leave the password out of the update. I'll give you a hint. You're going to need to modify both the SQL that's being submitted to the database
>
> **[3:05](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=185)** and the validation code as well. Once you've got it hashing the passwords when it ought to and not when it shouldn't, meet me in the next movie and I'll show you how I did it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Forms]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (5)
> **URLs:** [nowhere.com](https://nowhere.com) (1), [somewhere.com](https://somewhere.com) (1)
> **Env Vars:** sql (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)

#### [Solution: Editing users](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=0)** (intro music)
>
> **[0:05](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=5)** - [Instructor] I hope you did well with the challenge assignment. In this movie I'll show you the solution that I came up with. So we already saw that we had the admins. We want to click on edit. We have the form. And what we want is for this to allow us to update this information up here in the first four fields, without having to submit a password. And if we do submit a password and confirm password, we want it to be validated and to be hashed and updated. So it should work two different ways depending on whether this is entered or not. So if we come over here to update admin inside query functions, I've added a bit of code here to see if password is sent. So I've got a variable password is sent and if it's not blank, is blank is something I've defined over here in my validation functions, just checks to see if it's not set, or if we trim the value, is it equal to an empty string? And it'll check to see if it's not blank, then the password was sent. That's all it's doing is checking to see whether or not if we were given a value. Down here, you can see inside the [[SQL]], when it's assembling the SQL, it checks to see if the password was sent. And if it was, then it calls the exact same hash password line we had up here inside insert admin, and then adds that line to the SQL. But if not, then it just skips that part. It just does first name, last name, email, and then username. Now be mindful of the fact, this has a comma at the end of the line which makes it go nicely between two,
>
> **[1:38](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=98)** if this had been the last item and username, for example, had been up here, then it might have caused us problems by that trailing comma some of the time and it wouldn't work out, right? We take it away. It wouldn't always flow correctly. The syntax wouldn't be correct. So I've put username as the last argument so that that's never a problem. This will just be one of the elements being submitted, not the last one. All right. Another change that I made is that validate admin also passes in a set of options here. It passes in the value of our password required as being whether password was sent. So if we scroll up here, you'll see that validate admin already had in place that would take some options. And so I just checked to see if an option was passed for password required. If it wasn't passed, it'll default to true. That's what these double question marks do, uses this default value instead. And then we have password required. So then we can know while we're validating, is a password required. Scroll down here. If a password is required, then do the validations for it. If not, then it just skips those validations. That's it. Those are the two changes that we have to make. So let's save all of that. Let's come back over and let's try it out. Let's first try without entering a password. Let's just change it from someone@[nowhere.com](https://nowhere.com) to someone@[somewhere.com](https://somewhere.com). Click edit admin and it worked, it updated. It did not object to the fact that I left those fields blank and it didn't update the SQL. Let's change it back to nowhere.
>
> **[3:12](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=192)** And let's also change our password. Our password before, mine was password1234. Let's make it 123- oops 1234password, 1234password. Now I click edit admin. It says it worked. It says that the admin was updated. Let's log out and try it. I'll log back in, kskoglund, and the password, I'll try first, my old one password1234, unsuccessful. I'll try my new one, 1234password. And it worked. So now when we're creating a new user, it will always require password and hash it. When we're editing a user, it'll check to see whether or not we've included that password in these form fields or not to decide whether it should validate it and include in the update.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4)
> **Env Vars:** sql (4)
> **UI Navigation:** click on (1), scroll up (1), scroll down (1)
> **CLI Commands:** make (2)
> **URLs:** [nowhere.com](https://nowhere.com) (1), [somewhere.com](https://somewhere.com) (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Working with Strong Passwords

[↑ Back to Table of Contents](#table-of-contents)

#### [Password requirements](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=0)** - [Instructor] In this chapter we'll discuss how to work with strong passwords and we'll begin by discussing password requirements. You've likely encountered password requirements many times yourself. Let's take a look at the ideas behind them. You should require user passwords to be of a minimum length. The ideal length varies according to your needs, but I would suggest a minimum of 10 to 12 characters, but there should not be a maximum length. If users want to create a password that's double the length you require, why not let them pick one that's more secure? After all, there's not a technical reason if we're going to be hashing the password. Almost all hashing [[Algorithms]] return output that is the same length, regardless of how long the input was. bcrypt output is always 60 characters long. So we can let the user give us input that's as long as they like. You should also allow and encourage character variety or complexity. That means at least allowing uppercase, lowercase, numbers, and symbols. It's up to you if you want to require that complexity or not. Many sites require using at least one of each. Whatever you decide, be sure to communicate the requirements at the start. Nothing is more frustrating than to submit a password and then learn it's not long enough, and then submit a longer password to find out that you should have included a symbol. If the user understands the requirements at the start, they're more likely to submit a valid password on their first attempt. Keep in mind that, in general, long, simple passwords are more secure than short complex ones. Why is that?
>
> **[1:33](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=93)** It's because of the way that attackers would try to brute force a password. That is that they would try all possible input combinations looking for the correct password. They're not going to try and guess it or look it up somewhere. They're going to just go through and try every single possibility. They try aaaa, aaab, aaac, aaad, and so on. It's very repetitive, but computers are very fast. They can try all the combinations. And attackers don't have to try them in order. They know that passwords are generated by people and people like to use words that are familiar to them. So they can use a dictionary to prioritize words that people might use, like pizza, love, and sunshine. They would use those words first in their attempts, before they resorted to all the random combinations. They have a lot of combinations to try and they'll try them all. But they're going to start with the ones that are most likely first. When we look at the key space, or the amount of things that they have to try, it's defined by a formula, which is the types of characters that can be in each position of the password. So uppercase letters, lowercase letters, numbers, symbols, and it goes to the exponent raised to the power of the length of the password, that's the key length. And the length matters more than the amount of characters that we're going to have. And that's because it's an exponential increase. You can run some numbers if you don't believe me, if you want to try it out. The character diversity is still important though,
>
> **[3:06](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=186)** because it helps protect against dictionary attacks. Mostly it helps users break bad habits of using simple words. That's try adding some requirements to our project. So where we're going to add these is in the validate_admin function. And if we scroll down here, if a password is required, we check and make sure that it is not blank. And we check and make sure that confirm_password matches. It's present and it's matched. I want to add some more here. If we're going to check and see, is it blank? And if so, we'll complain about that. But then I'm also going to paste in a bit more here. Let me just format this a little better. Just move these over and you can pause the movie and copy it down if you want, or it will be in the exercise files. But it goes through and it checks. Here's it's using the has_length function that's defined in the validation functions, to see if the password has a length of a minimum of 12. If not, it'll put an error. It must contain 12 or more characters. And then I'm using preg_match for a lot of these. This is checking for a regular expression. So I'm going to pass in a regular expression here as a string and it will then check to see if it is present inside that password. Now this says, check to see if there is any capital letter A to Z inside there. And if there's not, because it has this exclamation point at the beginning, it'll say, "Sorry, I scanned through it. I didn't see any capital letters." Then it does the same thing for lowercase letters, does the same thing for numbers. And then it does the same thing here for anything that is not a uppercase letter,
>
> **[4:41](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=281)** lowercase letter, a number, or a white space, right? This is a not in front of it. That's a regular expression symbol that means not. So anything that's not one of those things would be considered a symbol and it must have at least one of those. So this change to our validation will require some amount of complexity when we're creating the passwords. You can modify these or add others if you want. We also need to communicate this to the user. So let's go to the [[Forms]] where this occurs on the new.[[PHP]] page, and let's go down here to the form. And right before the password, let's add in a P tag and inside that P tag, let's put Passwords should be at least 12 characters and include at least one uppercase letter, lowercase letter, number, and symbol. All right. So there we've got that. Let's just make sure that looks good. Let's go back to the list. We'll click on Create New Admin. So that's what it'll look like. That's great. And then let's take that same thing and copy it. And we'll go over to the edit page. We'll find the same spot here and add in that as well. Let's go back and just make sure that looks good. And there it is, "Password should be at least." Now we've told the user
>
> **[6:13](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=373)** that they need to provide a password that has length and complexity to it. And we've also required that in our validations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Forms]] (1), [[PHP]] (1)
> **CLI Commands:** make (4), find (2), php (1)
> **Code Identifiers:** validate_admin (1), confirm_password (1), has_length (1), preg_match (1)
> **UI Navigation:** scroll down (1), go to (1), click on (1)
> **File Paths:** new.php (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Preventing weak passwords](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=0)** - [Instructor] Besides requiring certain aspects of passwords, there's some things we can do to prevent users from choosing weak passwords. And I want to look at those in this movie. The first is that we could prohibit certain words. For example, you might say that a user can't use the [[Microsoft Word|word]] password in their password or login or letmein. Those might be just on their own, or you might scan the string to make sure that it's not password1234. You could also look up a list of the most commonly used passwords. There are lots of lists out there that say what the most commonly used passwords are. You could put that in your code and make sure that a user doesn't use one of them. You might also want to restrict them from using other common terms, like your company name. Things that would be easily discoverable. One easy one you can add, is to make sure that the password is not simply the username. Let's go to our project and add that one. So, in our validations, we're just going to add one more validation here to the end. We're just going to do elseif and then in parentheses admin username, if that is exactly equal to admin password, well, then we've got a problem and we want to have an error there, I'm just going to copy this, save some typing, and let's say the user name and password must be different. There we are. So we'll just check and see, does admin username exactly equal admin password.
>
> **[1:34](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=94)** If it does, we'll raise an error. And you could add your own customizations in this same way, in the same part of the code. I want to give you two other ideas, but we won't actually add these to our project. First, you could prohibit the reuse of passwords that the user has used in the past. This has to be done carefully though, since we don't want to store passwords in plain text, even if they're old passwords. Instead, you would store the hash of each previous password in the database. Before a password can be updated, you would query that table, get back all previous passwords, or just the first 10 or first 20, whatever your rules are, and then run password verify using each one to see if any of them match, just like we did when someone was logging in. If one does, then you would return an error like "Password can't be a password that you've used before" or "Password can't be one of the last five passwords you've used before". Another idea is to prohibit using passwords that can be found in prior data breaches. There's a website called "Have I Been Pwned?" that's run by security researcher Troy Hunt. Whenever a website is breached and those [[Databases]] then show up on the dark web for people to use, Troy goes and gets a copy and uploads it to his database. He has over 500 million passwords in his database, and he's given access to it to everyone by using an API. You can go to this URL and find out more about how it works. The basic idea is that you would take a potential password,
>
> **[3:11](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=191)** you would hash it with a different hashing algorithm called SHA-1. Then you would send the first five characters of that to his API, and it will return back results for passwords that have those same first five characters. You'll probably get back about 500 different possibilities. You'll then sort through those possibilities to see if any of those matched the full hash that you're working with. It's a way of you not having to send the whole hash to him. You just have to send a little bit of it. He sends back what he has and you can, in [[Privacy]], go through them to see if there are any matches. If you do find a match, it means that that password is in that set of 500 million passwords. And why is that important? Because those passwords are out there for hackers to use as a dictionary, to try those 500 million passwords first anytime they want to try and break into a website. So you're going to be essentially on the list of frequent passwords if you use one of those. There is one prevention that's not recommended, at least not anymore. And that's not to require rotating passwords at certain periods of time. Once a month, once every three months or so on. It used to be recommended, but it's not anymore. The reason lies that studies have been done that showed that it incentivizes creating weak passwords and there's little security gain to it. Instead, let your users pick strong passwords and then stick with them. Of course, you still do want to force a password change if there's any evidence of a compromise,
>
> **[4:45](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=285)** but don't require it if there's not a reason to. And last, I want to give you a good resource if you want to read more about this topic. The National Institute of Standards and Technology, also known as [[NIST]], has put out a report called "The Digital Identity Guidelines" that walks through all of these issues and talks about things like password complexity and password rotation. It's a great source if you want to read more on this topic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Databases]] (1), [[Privacy]] (1), [[NIST]] (1)
> **CLI Commands:** make (3), find (2)
> **Env Vars:** api (2), url (1), sha (1), nist (1)
> **UI Navigation:** go to (2)
> **Definitions:** means that (1), known as (1)
> **Analogies:** for example (1), just like (1)
> **Best Practices:** recommended (2)
> **Speakers:** - [instructor] (1)

#### [Resetting forgotten passwords](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=0)** - [Instructor] In this movie, I want to talk about how you would reset someone's forgotten password. The whole idea behind user authentication, as we've seen from the start, is about proving someone's identity online. And we've established that credentials are one way that we can do that, the username and the password. But if they've forgotten their password, then they've lost the ability to show that they are who they say they are. So how do we know that they are who they say they are in order to let them pick a new password? We still need to somehow authenticate them. One way that some sites do that is with security challenge questions. For example, what was the name of your first teacher? What street did you live on? These kinds of questions are not great. First of all, they're often reused on multiple sites and it's often information that someone could research and figure out about someone. So it's not a great way to prove that someone is who they say they are. One way that some sites handle it is that they assume that the person's email is their identity. If they have access to the email account, then they are who they say they are. Now that's an assumption and it's not always a great one, but it's become very commonplace to assume that having access to your email is proof of who you say you are. So we can send the user email in order to help them reset their forgotten password. Don't send email with the new password though. First of all, that would send out the password in plain text. It could be intercepted, but even if it's not, the user may file that email away
>
> **[1:35](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=95)** somewhere in their email system and that would keep a plain text copy in their email account. Also, if we send them a new password, it means we probably have changed the existing password and they would lock out that old password immediately. That's no big deal if you're using it legitimately, but imagine if I go and reset your password and it sends you an email, but it also immediately locks you out. So you can't access it. I could sit there and keep resetting your password over and over and over again. And you would constantly be forced to go and change your password in order to have access again. A better way to do it is to send email with a reset token. This is very common, you've probably done it yourself many times. They idea works like this. The user makes a request to reset the password for a particular username. The website should always respond positively because we don't even want to acknowledge if that username exists or not. So we just say, yes, I will reset that username. Now behind the scenes, if the username does exist, then we'll generate a unique token and we'll store it in the database with that user. So we'd need an additional column in our database table to be able to do that. We can also store the information like the time that the token was generated so that we could limit the time for its use. So if it's only good for let's say an hour or only good for one day, and after that, the [[Tokens]] no good. Then we would send the user an email and that email would
>
> **[3:08](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=188)** include a URL that has the token in it. So it might be reset_password.[[PHP]], question mark token equals, and then it would have a token string after it. And clicking on that link would take us to the website to a special page that was all set up for resetting our password to something different. So that URL wouldn't have any authentication control on it. It would already know who the user is based on that token and would give them one time access to set their password. The nice thing about this is that the account still keeps functioning up until the reset. That token is there to give permission to reset. But if the user comes and suddenly remembers their password and logs in no big deal, the account hasn't been locked out, the password hasn't been changed. Another nice feature is that it is self serve. It doesn't require customer service staff to help a user when they want to reset their password. We're not going to implement this in php because parts like emailing are a little more complex than we can cover in this tutorial. But I do want to just show you that if you want to create a security token, one good way to use it is to generate a random number, pass it into unique ID and pass that to the md5 hash algorithm. You'll get back a string that looks something like this. And you can then put that in the database. And also in the URL that you send in an email to the user. I'm sure there are some scenarios where this is not enough proof that authenticate that a user is who they say they are and should be allowed to reset their password.
>
> **[4:42](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=282)** But in most cases, this pattern works really well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[Tokens]] (1)
> **Env Vars:** url (3)
> **CLI Commands:** php (2)
> **Analogies:** for example (1), imagine (1)
> **File Paths:** reset_password.php (1)
> **Code Identifiers:** reset_password (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Securing User Authentication

[↑ Back to Table of Contents](#table-of-contents)

#### [Preventing IDOR](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=0)** - [Instructor] In this chapter, we're going to talk about how to secure user authentication and we're going to start by learning how to prevent IDOR. IDOR is an abbreviation that's short for insecure direct object reference. It's a fancy way for saying that we've forgotten to control access to a page or to a resource. One example might be that if we had a store and at the end of the checkout process, we gave users a receipt and that URL for the receipt might look something like this. Notice at the end it has RGB_59226.pdf. That identifies my receipt. What if I changed that last digit to be a five instead? Would I see someone else's receipt? Hopefully not, that would be an insecure direct object reference. It doesn't just apply to [[E-Commerce]]. It can also apply to assets that are on the server or posted in the cloud and it will apply to our access control pages. The reason why it's a problem is because it's easy to forget to add access control to a page. Sure, we've got access controls on our pages right now, but what about when we add new pages to our site a few months from now? Will we still remember to add the access control every single time? There are a few strategies we can adopt to try to prevent IDOR. One is simply to create processes, tests, and checklists to try to make sure that we don't forget. You also can put your access control higher up in your code. What I mean by that is instead of putting it on each page, have those pages inherit from something and you can put then your access control
>
> **[1:34](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=94)** in that parent element so that they inherit the access control by default. You can also implement an the allow list design. Right now in our sample project, we've got a deny list design. Our pages allow access by default. They only deny access if we've remembered to put that access control on them. An allow list design flips it around. It denies access to pages by default and it only makes exceptions when we've listed them. Let me show you what I mean. So in our sample project in index.[[PHP]], you can see we've got this require_login at the top that will make sure that someone is logged in. And we've added the same thing to the admins, to index, and to new, and to show. They all have this one little bit of code that will require a login. That's our access control. But if we create a new page, we might forget to put that there. So let's take this code and let's move it higher up in the design. Let's have it in an element that all of these pages are inheriting from. There's a number of ways we could do that. We could put it in initialize.php, that's one possibility. But in that case, anything we put in the public area might also be subject to it. We could make a special staffinitialize.php that might have it and that's certainly a valid approach. I'm going to go with something simpler here. They all are going to inherit from the staff header. So right here at the top of the staff header, I'm just going to paste that line in. So now anything that loads the staff header is going to require a login, it's that simple.
>
> **[3:09](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=189)** So let's save it. Let's come back over here. Let's go down here to index.php first and let's take this away. So now it's not in index.php anymore. Here we are in index.php. Now I'm logged in so that wasn't a problem, let's log out. Now we ran into an error there and we'll talk about that error in a minute. For now, ignore it and let's just go back to index.php, and you'll see that it redirected us to login.php. So it did still have an access control. Even though we took it away, the fact that it was in the header redirected us to this page. So why did we get this error? Well, that's because the login page is also loading that staff header. So the login page sees that you're not logged in and redirect you to the login page which sees that you're not logged in and redirects you to the login page, and you're stuck in an infinite loop. So what we want to do now that we've moved it higher up is adopt this allow list approach. Let's go to auth_functions.php and right here above require_login, let's add another function. We're going to call it page_exempt_from_auth. And what it will do is returns true if a page is in the allow list and is exempt from user authentication. And I'm just going to make a simple array in here called no_auth_pages. And inside that array,
>
> **[4:44](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=284)** I'll put /staff/login.php. And then we can check to see whether the current page is listed in that list. If it is, we'll know it's exempt from the login. So I'm eventually going to want to have return in_array and we'll test to see if the current page is in no_auth_pages, that's pretty straightforward. It'll just return the result of that check. So if it is in the array, it is not restricted. Okay, but current page doesn't exist. We've got to come up with that. So what is the current page? We could use a value that's in the server super global called script_name, and that will return back this part of the name. Everything from here all the way to here. That's the name of this script. If it had a question mark after it, something equals true, right? It would ignore that. It would still just be this part. So that's what script_name gives us, but I don't want a whole script_name. What I want is just portion. And over here in the private directory in initialize, WWW_ROOT is being defined is everything but that. It's just this part. So what we want to do is just go to auth_functions And on current page, what we want to do is use str_replace.
>
> **[6:18](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=378)** And we're going to target that string, but we're going to search for WWW_ROOT. Replace it with nothing and then this is what we'll search. So that's it, it's essentially just taking the bit of text we know is at the beginning, removing it so we get something that looks like this. It'll check and see if it matches. So let's save it and let's come down here and let's use it. Now when a page is exempt_from_auth, come down here and we'll say and not exempt_from_auth. So require_login if not is_logged_in and not page_exempt_from_auth. If they are logged in, no problem. If the page is exempt_from_auth, no problem. It's only when both of those, when they're not logged in and it's not exempt_from_auth, we're going to send them to the login page. Let's come back over here and reload it, and it works. And if we go and actually log back in, 1234 password, it works there as well. So now I've implemented an allow list model. Everything is going to require the login if it requires that staff header. The only exceptions will be ones that are explicitly listed inside no auth pages. You could go through and you could remove the require_login from all of these the pages, but the way we implemented this isn't perfect. You'll notice that staff header is actually called down here. So that's where it's actually checking for the login. It is possible to send a post request and submit a new admin to the database
>
> **[7:51](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=471)** before it even checks that code. So because of the way we did it, I'm actually going to leave the require_login here. We could do something a little fancier, maybe something like staff_initialized.php where we said all right, anything that's in the staff area is always going to get it and it will do it right at the top of the page. So instead some of these pages will just have some double protection on them. Hopefully you understand the concept and why we made these changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (11), [[E-Commerce]] (1)
> **Code Identifiers:** require_login (5), exempt_from_auth (4), script_name (3), auth_functions (2), page_exempt_from_auth (2)
> **CLI Commands:** php (11), make (4)
> **File Paths:** index.php (5), initialize.php (1), staffinitialize.php (1), login.php (1), auth_functions.php (1)
> **Env Vars:** idor (3), www_root (2), url (1), rgb_59226 (1)
> **UI Navigation:** go to (2)
> **Definitions:** is an  (1), short for (1)
> **Best Practices:** remember to (1), don't forget (1)

#### [Using HTTPS](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=0)** - [Instructor] Let's talk about the importance of using HTTPS. HTTPS is HTTP that also uses a TLS or SSL certificate when communicating with a remote server, you may know it as the lock that you see on your browser when you visit many websites, it's purpose is to provide communication security. It helps to verify the authenticity of the remote server and it encrypts all data that's exchanged with that server, which prevents snooping and prevents session hijacking. It's easy to think about the connection between a browser and server as being a simple connection between two computers, but it doesn't work that way. The internet is much more complex. Instead when you send a request to a server, it travels through many computers on its way there. And if the data that's being sent is not encrypted, it can allow someone along the way to spy on the information being sent such as the credentials that we're sending when we're logging in. And when the server responds, it doesn't even respond along the same path. It may take a different path And again, there's a spying opportunity here to see the data that the server is sending such as a session ID, which includes information about how to find the file that has our hand stamp in it. The thing that shows that we're logged in. So if someone were to capture that, they might be able to impersonate us. HTTPS is essential for user authentication access control, but you really should be using it for all your pages and not just the login pages. And there's no reason not to.
>
> **[1:31](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=91)** It's not that difficult to set up. And very soon browsers are going to require it of all websites. One way that you can set it up is to use let's encrypt. This is an organization that's tried to make it as simple as possible to implement SSL certificates so that you can have HTTPS. So they have a website that walks you through the process and the certificates are completely free. So it's free and they try and take the pain out of as much as possible. I also have a title in the library called SSL certificates for web developers that explains these issues and also walks you through it. HTTPS is a good way to secure your user authentication as well as every page on your website.

> [!info]- Semantic Content
>
> **Env Vars:** https (5), ssl (3), http (1), tls (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Protecting access tokens](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=0)** - [Instructor] In this movie, let's talk about how to protect access [[Tokens]]. When I talk about access tokens, I'm talking about that hand stamp that we use to indicate that a user is logged in. We store that indicator of authenticated access inside the session. And that's typically data that's stored in a file on the server. The way that the user is able to find that file is that we also store a file identifier in the user's browser cookie. So every time a user makes a request to the website, it uses that identifier to find the session file and looks in the session file to see is this user logged in or not? Well, because it's in the session, it's vulnerable to two types of attacks called session hijacking and session fixation. I'm not going to go into detail about how those hacks work, but the bottom line is that an attacker could use the session to impersonate, a logged in user, essentially to piggyback on their logged in state. So we want to protect our access tokens to make sure that doesn't happen. One great way to do that is to use HTTPS. Like we just talked about in the last movie. Another thing we can do is to secure the cookies, used to store the session identifier by setting some configurations in our [[PHP]].ini file. We can set the session cookie lifetime to zero. And that means that the cookie will only be good until the user's browser is closed. We can set session cookie secure equals one. And that means that the cookie will only be sent. If the connection is using HTTPS, session.cookie HTTP only sounds like it might apply to that HTTP versus HTTPS,
>
> **[1:37](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=97)** but it doesn't. What that's saying is that [[JavaScript]] should not have access to these cookies. One way that they can get stolen is by letting JavaScript, get a hold of them. And then session use only cookies set to one means that we want to only be able to get session identifiers from the cookies, not from a get variable or a post variable or anywhere else. These are good settings to have as default in your php.ini file. Another thing we can do is we can regenerate the session identifier before every login, because if someone else has somehow stolen our session identifier with every login, we'll create a new one and we'll give that to the user. So the old one's no good anymore. Let's see how to add that to our project. The place that we want to do that is going to be inside auth functions when the user logs in. So right here is a great place to do it. When a user logs in, we call login admin. So right there, before we do anything else, before we start working with a session let's call session regenerate ID, that's a built-in PHP method, and that will regenerate the session ID and prevent session fixation attacks. That's it, that's all we have to do. It's a simple but powerful fix. Now, as soon as we log in that ID is no longer being used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (3), [[PHP]] (3), [[JavaScript]] (2)
> **CLI Commands:** php (3), find (2), make (1)
> **Env Vars:** https (3), http (2), php (1)
> **Definitions:** means that (3), is a  (1)
> **File Paths:** php.ini (2)
> **Cross-References:** in the last (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### [Keeping track of logins](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=0)** - [Instructor] Another way you can secure your user authentication is by keeping track of logins. For example, you might record the successful logins, the failed login attempts, and then the user log outs. You could log those to a simple file that you could review, especially if things went wrong, you could try and figure out who was logged in at the time or even more useful. It's probably to log it to a database so that you could actually query for particular users, particular time periods. You could get really fancy and write code to see who's currently logged in. Who's logged in for a certain amount of time, and who's not yet logged out. You also could keep track of failed login attempts so that you can impose a waiting period before the user can try again. So let's say that a user tries to enter a password and they failed 10 times. After the 10th time, we might be start to be concerned that this is actually someone trying to attack the website and guess so let's make them wait five or 10 minutes before we let them try again. It doesn't have to be a lot of times I wouldn't make it longer 30 minutes or an hour. It doesn't need to be. The idea is just to add a cost to an attacker, but at the same time, not make it an unreasonable amount of time. If it's a legitimate user, who's just having trouble. You also could require re-authentication after a certain time period. To do that, you'd have to keep track of when the user logged in. So you'd know how long they'd been logged in. You might force them to re-log in once a day, once a week, once a month, every quarter, it's really up to you. And along those same lines,
>
> **[1:34](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=94)** you can require re-authentication before you allow users to perform highly sensitive actions. I wouldn't overuse this. Most of the time, a regular login should be enough, but let's say you've got a website and there's some destructive option that lets you just delete a whole lot of information. Maybe it's a whole project, and there's all sorts of stuff attached to it. That's a pretty significant thing. And that's the kind of thing where we might want to stop and say is this person really who we think it is before we let them do this? Let's have them re-authenticate. Keeping track of log-ins and information about those logins is a good way to give you visibility into your app, and also control the activities of the users that are currently working in it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Expiring logins](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980&t=0)** - It's time for another challenge assignment. And this challenge is based on something we talked about in the last movie. The challenge is to expire user log ins, after a certain period of time. To do that, when a user logs in, you need to either record the time that they log in, or you need to set an expiration time which the login will no longer be good. And then your code should answer the question, is the user logged in and is that login, within the allowed time still? That's what you want to be able to test. I'll give you a hint. You'll be working in the file of function.[[PHP]]. That's enough for you to complete the challenge assignment, but I want to give you one more thing to think about. What if the time expires while a user is working? Imagine for example, that a worker comes and logs into your website at eight o'clock in the morning, and it expires one day later. The next day they come in just a few minutes earlier and they start working at 7.55. They're still logged in because 24 hours haven't expired. What happens if five minutes later while they're working, the time suddenly ticks over so that now it's past the time of their login? Just give us some thought as you're designing the site. We'll talk about that in the next movie where I will also show you the solution that I came up with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (1)
> **Cross-References:** we talked about (1), in the last (1), in the next (1)
> **Analogies:** imagine (1), for example (1)
> **File Paths:** function.php (1)
> **CLI Commands:** php (1)
> **Versions:** 7.55 (1)
> **Speakers:** - it (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Expiring logins](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=0)** - [Instructor] I hope that you were able to complete this challenge assignment. Now, let me show you the solution that I came up with. The first thing I knew I needed to do was record the time that the user was logging in, so log_in_admin is a great place to do that. While I'm setting the admin_id and the username, I'm also going to go ahead and just store the last_login in the session, as well, and I can just use [[PHP]]'s time to do that. I also wanted to adopt a second strategy, which was to set a value for when the login ought to expire. And to do that, I used a different time method from PHP, strtotime. So it takes a simple plain text explanation of the time and converts it into a timestamp that resembles the time. Here, I said one day later at midnight. So that would be tonight, essentially, tonight at midnight. Then the next thing I did was I went to log_out_admin, and I just cleared those two values out and unset them whenever the user logs out. We don't need them anymore if they're logged out. Then I implemented two methods here. The first is last_login_is_recent, and it returns true if the last_login is still inside that allowed time. So I set max_elapsed = 60 X 60 X 24, so that's 60 seconds, 60 minutes, 24 hours, and that equals 1 day. Now, if it's not set at all, we return false because the last_login is obviously not recent. If it is set, though,
>
> **[1:33](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=93)** then we'd take that value of the last_login, plus the maximum time elapsed and see, is it greater than or equal to the current time, the time that this is being called. If it is, then we know that the last_login is still recent. Time now has not gone past that max_elapsed time. The other approach is to check and see if the login is still valid by checking this login_expires. If it's not set, then we return false, but if not, then we just check to see, is login_expires greater than the current time. Is it greater being further in the future, and if it is, then we know we haven't reached the expiration yet. Now, we could use either one of these inside our logic that figures out whether someone is logged in or not, and I'm going to do that inside is_logged_in. I chose login_is_still_valid, and the reason why is the thing that I alluded to in the challenge, which is that if we just use last_login_is_recent, it's a hard stop. 24 hours after the moment that the user logged in, they're logged out. By using the login_ expires, I was able to put it at a more friendly hour. I said, "You know, it's not 24 hours. It's whatever it takes to get to midnight." And I could have easily set it to be 2 AM or 4 AM or something else. But I tried to pick a friendly time when the user was not working. Now, it's still possible the user would be working at midnight and would suddenly find themselves logged out and have to log back in. But I decided that
>
> **[3:05](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=185)** that was a better approach than maybe having someone logged out suddenly at 10 AM in the morning. So this is going to put it at a friendly time at midnight, and so that's what I'm going to use here. So is_logged_in is if the hand stamp is there and the login is still valid. If those things are true, then we're going to consider them logged in. Especially down here, require_login, when it checks to see is_logged_in. If those aren't both true, if it's not set, or if the login is not valid, then we're going to get redirected to that login page, and we'll have to reauthenticate. There are other ways that you could approach this problem, I think these are probably two of the simplest and most commonly used ones. I find this one to be a little bit more user-friendly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2)
> **Code Identifiers:** last_login (5), is_logged_in (3), last_login_is_recent (2), max_elapsed (2), login_expires (2)
> **CLI Commands:** php (2), find (2)
> **Env Vars:** php (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/php-user-authentication/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/next-steps?u=76281980&t=0)** - [Kevin] I would like to thank you for taking [[PHP]] user authentication with me. I hope that you've learned new skills and you're able to add user authentication and access controls to your own projects. There's more you can do to improve the security of your website. I have some other courses in the library that can help. Web security user authentication and access control, [[Programming Foundations]] web security, and PHP creating secure websites. The first two are general discussions, suitable for any programming language. The third one is specific to PHP and includes code examples. I wish you luck in all your projects. And until next time, happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), [[Programming Foundations]] (1)
> **CLI Commands:** php (3)
> **Env Vars:** php (3)
> **Speakers:** - [kevin] (1)


## Instructor

- [[Kevin Skoglund]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/php-user-authentication-2892138)

## Skills Covered

- Digital Authentication
- PHP

## Path Context

### In [[Advance Your PHP Skills]]
← [[PHP- Creating Secure Websites]] | **5 of 7** | [[PHP Techniques- Pagination]] →

## Appears In

- [[Advance Your PHP Skills]]

## Related Courses

_Courses sharing skills:_

- [[Essential Statamic for PHP and Laravel Developers]] — PHP
- [[Essential Jigsaw for PHP and Laravel Developers]] — PHP
- [[Advanced PHP- Debugging Techniques]] — PHP
- [[PHP Techniques- Pagination]] — PHP
- [[PHP- Creating Secure Websites]] — PHP

---

[↑ Back to top](#)