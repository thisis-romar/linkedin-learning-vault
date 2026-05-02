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
created: 2026-05-02
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

#### Restricting user access in PHP applications
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/restricting-user-access-in-php-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/restricting-user-access-in-php-applications?u=76281980&t=0)** - [Kevin] This course will teach you how to write user authentication code in PHP so that you can restrict access to webpages and other website features to users who are logged in.
>
> **[0:10](https://www.linkedin.com/learning/php-user-authentication/restricting-user-access-in-php-applications?u=76281980&t=10)** You can follow right along with me or sit back and watch.
>
> **[0:13](https://www.linkedin.com/learning/php-user-authentication/restricting-user-access-in-php-applications?u=76281980&t=13)** Along the way, I'll share my advice on best practices.
>
> **[0:17](https://www.linkedin.com/learning/php-user-authentication/restricting-user-access-in-php-applications?u=76281980&t=17)** You will immediately be able to add user authentication to your own projects.
>
> **[0:20](https://www.linkedin.com/learning/php-user-authentication/restricting-user-access-in-php-applications?u=76281980&t=20)** My name is Kevin Skoglund.
>
> **[0:22](https://www.linkedin.com/learning/php-user-authentication/restricting-user-access-in-php-applications?u=76281980&t=22)** I'm a web developer who's been using PHP for over 20 years.
>
> **[0:25](https://www.linkedin.com/learning/php-user-authentication/restricting-user-access-in-php-applications?u=76281980&t=25)** I'm excited to show you how to use PHP to add user logins and access control.
>
> **[0:30](https://www.linkedin.com/learning/php-user-authentication/restricting-user-access-in-php-applications?u=76281980&t=30)** Let's get started learning with PHP: User Authentication.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4), web (1)
> **CLI Commands:** php (4)
> **Env Vars:** php (4)
> **Speakers:** - [kevin] (1)

#### How to use the exercise files on GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980&t=0)** - [Instructor] All of the exercise files for this course are available in a GitHub repository.
>
> **[0:05](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980&t=5)** You can find it at this URL.
>
> **[0:07](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980&t=7)** It's a project hosted by the LinkedIn Learning account called php-user-authentication-2892138.
>
> **[0:15](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980&t=15)** The repository on GitHub has branches that correspond to each of the videos in the course.
>
> **[0:20](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980&t=20)** You can use the branch pop-up menu to switch to a specific branch and review the code for a specific video, for example, the branch titled 02_01b, which show you the code for chapter two and the first video.
>
> **[0:36](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980&t=36)** Branch names with a B at the end indicate that they contain code as it is at the beginning of the video.
>
> **[0:42](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980&t=42)** Branch names that end with an E contain its state at the end of the video.
>
> **[0:46](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980&t=46)** You can also download the code to work along with me.
>
> **[0:49](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980&t=49)** If you're a Git user, you can clone the repository by clicking on the code button and then click on the clipboard icon to copy the URL.
>
> **[0:57](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980&t=57)** Then you can type git clone and paste in the URL that you copied to your clipboard.
>
> **[1:03](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980&t=63)** You'll also notice it's the same URL as the GitHub repository, but with .git at the end.
>
> **[1:09](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980&t=69)** Then you can navigate into the cloned project and check out the branch you want.
>
> **[1:13](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980&t=73)** The branch 01_01b is the start of the course.
>
> **[1:18](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980&t=78)** You don't need to know Git or have a GitHub account to follow along.
>
> **[1:21](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980&t=81)** If you choose the branch that you want, you can click the code button and then choose to download a zip file, which will contain the code for that branch only.
>
> **[1:30](https://www.linkedin.com/learning/php-user-authentication/how-to-use-the-exercise-files-on-github?u=76281980&t=90)** Once it downloads, you can decompress the file and open the project in a text editor to get started.

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

#### Identification and access control
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=0)** - [Instructor] Let's begin with an overview of user authentication.
>
> **[0:03](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=3)** Authentication is a process which confirms a user's identity.
>
> **[0:08](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=8)** We make sure that they're authentic, that they are who they say they are.
>
> **[0:11](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=11)** We usually authenticate a user before we grant access to privileged content or actions.
>
> **[0:16](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=16)** We want to identify the user so we can control the access that we give them to system resources.
>
> **[0:22](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=22)** This is true online, but it's also true in the real world.
>
> **[0:25](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=25)** In fact, a simple key to a house, a car, or a filing cabinet is one of the simplest forms of authentication.
>
> **[0:31](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=31)** Anyone who possesses the key is considered an authorized user who should be granted access.
>
> **[0:36](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=36)** User authentication is essential in any modern web application because protected areas are common.
>
> **[0:42](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=42)** It might be a content management system where admins are able to update content that the public sees.
>
> **[0:48](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=48)** Or a website might have an area for VIP's, for registered members, or for paying customers.
>
> **[0:54](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=54)** In all those cases, we'd want to protect those pages so that only authenticated users are able to access that content.
>
> **[1:02](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=62)** Credentials are evidence that you are who you say you are.
>
> **[1:05](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=65)** In the real world, if you go to the border of another country and show your passport, you're presenting credentials to establish your right to pass into that country.
>
> **[1:13](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=73)** On the web, when we talk about credentials, we usually mean your username and password.
>
> **[1:18](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=78)** It's by far the most common way that you access privileged web pages.
>
> **[1:21](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=81)** It's important to understand and to follow best practices in this area because mistakes can be extremely costly.
>
> **[1:28](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=88)** Our development choices can have a major impact on security.
>
> **[1:31](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=91)** Security and development are closely intertwined topics.
>
> **[1:35](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=95)** I want to give you an analogy to explain how user authentication on the web works.
>
> **[1:39](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=99)** It may help you to hold it all in your head.
>
> **[1:41](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=101)** Imagine that you're going to be purchasing tickets for a concert or an event.
>
> **[1:45](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=105)** You then go to pick up the tickets.
>
> **[1:46](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=106)** You wait in line, you show your ID, and they let you in.
>
> **[1:50](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=110)** They also stamp your hand as you're going in the door, making it clear that you've been allowed into the concert.
>
> **[1:55](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=115)** Now you can go into the event.
>
> **[1:57](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=117)** You can move around into different rooms, go in and out, and all the time, they know that you've already given your ticket and that you're allowed to be there because you have that hand stamp that says so.
>
> **[2:07](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=127)** If you wash away the hand stamp, then you would lose your access.
>
> **[2:11](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=131)** User authentication is similar.
>
> **[2:13](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=133)** The admin is going to create a user in the database.
>
> **[2:16](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=136)** That's like purchasing tickets for a concert.
>
> **[2:18](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=138)** At that point, we have the ability to attend, even though we haven't attended yet.
>
> **[2:22](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=142)** Then, when the user comes to the site, they log in via a web form.
>
> **[2:26](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=146)** The application authenticates the user by confirming that their username and password are valid.
>
> **[2:31](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=151)** And then it gives them an ID to remember them.
>
> **[2:34](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=154)** When the user requests additional password protected pages, it shows that ID, just like showing a hand stamp.
>
> **[2:40](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=160)** And then finally, when a user logs out, it's like washing away that hand stamp.
>
> **[2:45](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=165)** You would need to log in to start the process again.
>
> **[2:48](https://www.linkedin.com/learning/php-user-authentication/identification-and-access-control?u=76281980&t=168)** This analogy provides a good overview of the kind of code we're going to be building in the following chapters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** web (4), [[Security]] (2), [[Forms]] (1), web application (1), [[Content Management]] (1)
> **Analogies:** imagine (1), just like (1), it's like (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Env Vars:** vip (1)
> **Definitions:** is a  (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### Hashing and storing passwords
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=0)** - [Instructor] Passwords are not the only way to authenticate users.
>
> **[0:03](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=3)** A system might use biometrics or a physical device, but on the internet, passwords remain the most popular type of user credentials by far.
>
> **[0:11](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=11)** They're the key to entry, and we need to think about how to handle them securely.
>
> **[0:15](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=15)** The single most important rule about passwords is to never store them in plain text.
>
> **[0:21](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=21)** If passwords are stored in plain text, then anyone with access to the database would have access to every user's password.
>
> **[0:28](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=28)** That could be hackers who are stealing your database.
>
> **[0:31](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=31)** It could be authorized employees with database access.
>
> **[0:34](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=34)** It could be leaked from a database backup or recovered off a decommissioned hard drive.
>
> **[0:39](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=39)** It's not theoretical, it happens all the time.
>
> **[0:42](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=42)** It puts your users at risk, and because usernames and passwords are often reused on multiple sites, it puts other sites at risk too.
>
> **[0:51](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=51)** So please, as a favor to other developers, never store passwords in plain text.
>
> **[0:57](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=57)** We also won't be encrypting passwords to prevent anyone from decrypting later.
>
> **[1:02](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=62)** That might surprise you, but it's because there's a better technique that we can use.
>
> **[1:06](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=66)** We can use a hashing algorithm instead of encryption.
>
> **[1:09](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=69)** A hashing algorithm is one way and not reversible.
>
> **[1:13](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=73)** It won't be possible for anyone to decrypt the password and get the original string, including us.
>
> **[1:19](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=79)** The reason is that information is lost during hashing, which would be needed to reverse the process.
>
> **[1:25](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=85)** A good analogy is to imagine removing all of the vowels from a book and then sorting the remaining letters alphabetically.
>
> **[1:32](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=92)** We could not reverse that process and reconstruct the book text.
>
> **[1:36](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=96)** We would be missing too much important data, the vowels and the original positions of the letters.
>
> **[1:41](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=101)** Hashing algorithms follow a different process, but they also discard important information along the way.
>
> **[1:47](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=107)** So how do we compare the password during a log-in attempt with a hashed version?
>
> **[1:52](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=112)** It works because if the same inputs are given to the same hashing algorithm, it will always have the same output.
>
> **[2:00](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=120)** In our analogy, the same book text and the same vowel removing and sorting process would have the same results every single time.
>
> **[2:08](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=128)** We'll take the user's password, and we'll hash it and store that string in the database.
>
> **[2:13](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=133)** And then when a user tries to log in, we'll take their attempted password, pass it into the hashing algorithm.
>
> **[2:19](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=139)** If we get the same output, then we know that the input must have been correct.
>
> **[2:23](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=143)** If the encrypted strings are different, then we know that the input wasn't correct.
>
> **[2:28](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=148)** What about the rare case when two passwords have the same hash?
>
> **[2:31](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=151)** In our analogy, it's possible though unlikely, that we would have two books where the remove vowels and sort process has the same result.
>
> **[2:39](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=159)** We will choose good hash algorithms so that we ensure that such false positives, also known as collisions, are rare.
>
> **[2:46](https://www.linkedin.com/learning/php-user-authentication/hashing-and-storing-passwords?u=76281980&t=166)** As we'll see in the next chapter, PHP has built in functions that make this whole process easy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (5), [[Algorithms]] (2), data (1), next (1), [[PHP]] (1)
> **CLI Commands:** php (1), make (1)
> **Env Vars:** php (1)
> **Cross-References:** in the next (1)
> **Definitions:** known as (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 2. Implementing User Authentication in PHP

[↑ Back to Table of Contents](#table-of-contents)

#### Creating the database table
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=0)** - [Instructor] If you want to work along with me, then you'll need a database table to store the usernames and passwords.
>
> **[0:06](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=6)** And to do that, you'll first need a database.
>
> **[0:09](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=9)** You can use an existing project that you have, or I'm going to be using a sample database.
>
> **[0:13](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=13)** I'm going to call globe underscore bank.
>
> **[0:16](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=16)** So this is a project for the Globe Bank, Inc, that we're going to be working on.
>
> **[0:20](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=20)** And you'll also need to grant privileges to my SQL user on that database.
>
> **[0:25](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=25)** Once you have that, you'll be ready to create the table that we need on the database.
>
> **[0:31](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=31)** The create table command can do that.
>
> **[0:33](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=33)** I'm going to call mine admins.
>
> **[0:35](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=35)** And the key part is that it's storing the username and the password, which I've called hashed password.
>
> **[0:41](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=41)** But you'll see, I've also got a primary key there of ID, which is an integer, not an auto increment.
>
> **[0:47](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=47)** And then I've also got first name, last name and email, as well as username and hashed password.
>
> **[0:54](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=54)** All of those are just going to be strings, they're varchar 255.
>
> **[0:58](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=58)** The hash password we're storing will always be 60 characters long, but we're going to go ahead and use 255, just in case we use something different in the future.
>
> **[1:06](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=66)** Let's go to the command line and I'll demonstrate.
>
> **[1:09](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=69)** Inside the exercise files, I've included the same commands.
>
> **[1:12](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=72)** You can see, this is a comment.
>
> **[1:14](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=74)** This is actually a bit of SQL here, and you can pull that out of the exercise files from the globe bank database folder.
>
> **[1:21](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=81)** I'm going to go to the command line to get to my SQL.
>
> **[1:24](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=84)** And I'm going to log in as root to start with because I need to create the database table.
>
> **[1:28](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=88)** So I'll log in.
>
> **[1:29](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=89)** It'll ask for my password.
>
> **[1:32](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=92)** And then when I'm here, I'll say show databases.
>
> **[1:35](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=95)** You'll see that I don't really have any.
>
> **[1:37](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=97)** And so I'm going to create database globe underscore bank, and then let's grant all privileges on globe underscore bank dot and the asterisk, and then two, and then inside single quotes, the user that we want to use, I'm going to use PHP user at local host, and then let's flush the privileges.
>
> **[2:05](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=125)** P R I V I L G E S.
>
> **[2:07](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=127)** There we go.
>
> **[2:08](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=128)** And then if we wanted to go ahead and create the table, we could use use globe bank.
>
> **[2:15](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=135)** Now we'd be on that database table ready to go.
>
> **[2:19](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=139)** We could take this, copy it, and just paste it in.
>
> **[2:21](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=141)** Or what I'm going to do instead is I'm going to exit out of my SQL and from the regular command line, I'm going to change this to be PHP user with a P for my password option.
>
> **[2:33](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=153)** And I'm going to specify the globe bank database that I just created.
>
> **[2:37](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=157)** And then I'm going to use the less than sign to send input from a file into my SQL.
>
> **[2:43](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=163)** And I'm going to use this file that's right here.
>
> **[2:45](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=165)** So I could type out the path to the file where I can actually just drag it in there as a shortcut on Mac.
>
> **[2:50](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=170)** And when I hit return they ask me for my password and that's it.
>
> **[2:56](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=176)** It worked now, it's in there.
>
> **[2:57](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=177)** If we were to log into my SQL... I'll do that with my SQL dash U PHP underscore user dash P, and we say use globe bank, show tables.
>
> **[3:15](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=195)** You can see there's my table.
>
> **[3:16](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=196)** And if I say show fields from admins, you can see the list of the fields that it created.
>
> **[3:25](https://www.linkedin.com/learning/php-user-authentication/creating-the-database-table?u=76281980&t=205)** Now that we have our database set up, we're ready to look at the PHP code we'll be using.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (11), [[SQL]] (7), [[PHP]] (4), [[Databases]] (1), hit (1)
> **Env Vars:** sql (7), php (4)
> **CLI Commands:** php (4)
> **Tools:** command line (3)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** go to (2)
> **Exercise Files:** exercise files (2)
> **Prerequisites:** you'll need (1), set up (1)

#### Introducing the sample project
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=0)** - [Instructor] In this movie, we'll introduce the sample PHP project that we'll be working with.
>
> **[0:05](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=5)** You can certainly use code from one of your own projects, but if you don't have it, this'll get you jump-started and on the right path.
>
> **[0:11](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=11)** The key pages we're going to be looking at are in a directory called staff, in a directory called admins, and there's a number of pages to help us manage the admins.
>
> **[0:21](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=21)** So this would be an index page to list off the admins that are in the database, a show page to look at a particular admin, and then new edit and delete pages to manipulate those database records.
>
> **[0:32](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=32)** The starter project in the exercise files has all of these pages.
>
> **[0:36](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=36)** It also includes some query functions we'll need to work with the database, some data validation functions, and some other helper functions.
>
> **[0:44](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=44)** These are all based on topics that I cover in my courses, PHP with MySQL Essential Training.
>
> **[0:50](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=50)** Let's take a look.
>
> **[0:51](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=51)** So inside the exercise files, there's a directory called globe bank.
>
> **[0:55](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=55)** You can see that there's three directories inside there, database, private, and public.
>
> **[0:59](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=59)** And I've got those open in the atom text editor.
>
> **[1:01](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=61)** Let's look at public first.
>
> **[1:03](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=63)** Public has an index page.
>
> **[1:05](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=65)** That's just a basic home page.
>
> **[1:07](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=67)** And then there's the staff area.
>
> **[1:09](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=69)** We click on staff, we have an index page there that is just a menu, and then the homepage for the staff area.
>
> **[1:15](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=75)** And then there's this admins directory, which has those pages that we just talked about.
>
> **[1:19](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=79)** So for example, if we look at index.PHP, you can see that it has require once to initialize.
>
> **[1:26](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=86)** We'll take a look at that in a minute.
>
> **[1:27](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=87)** That's in the private directory.
>
> **[1:28](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=88)** Then it finds all the admins and then it goes through and just creates a table of the different properties of those admins, and then just lists them all out on the page.
>
> **[1:38](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=98)** For something like new, you can see we've got a form.
>
> **[1:41](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=101)** It checks to see if something is a post request.
>
> **[1:43](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=103)** This is one of the helper functions that we'll look at.
>
> **[1:45](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=105)** And then you can see that it comes in here and it calls insert admin to insert the admin parameters that have been sent in by the form.
>
> **[1:53](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=113)** We'll take a look at that as well.
>
> **[1:55](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=115)** And then down here you can see it actually displays the form and has some nice things like showing errors and things like that.
>
> **[2:00](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=120)** These are all topics that I cover in the PHP with MySQL Essential Training.
>
> **[2:05](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=125)** If we go to the private directory, we can see where a lot of those are defined.
>
> **[2:09](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=129)** Initialize is the jumping-off point.
>
> **[2:11](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=131)** So pages load initialize, and it sets everything up for them.
>
> **[2:15](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=135)** So it turns on output buffering and starts up the session.
>
> **[2:18](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=138)** It defines some constants that we might need.
>
> **[2:20](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=140)** And then down here you can see it requires a bunch of other pages and then connects to the database with the variable DB.
>
> **[2:27](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=147)** So we're ready to go.
>
> **[2:29](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=149)** The functions.PHP is here, that loads in some basic functions like URL for, and some sanitization helpers, some things that'll display some errors, redirect, redirect to when we want to go to a new location, there's is post requests that we just saw to check and see if we're getting back a post request, and display errors.
>
> **[2:48](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=168)** Again, these are all pretty simple and straightforward.
>
> **[2:50](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=170)** They're just there to help make things easier.
>
> **[2:53](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=173)** Then initialize calls database.
>
> **[2:56](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=176)** We go to database, you'll see it loads up the credentials.
>
> **[2:58](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=178)** The credentials are the credentials that you would use to log into the database.
>
> **[3:02](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=182)** These are mine.
>
> **[3:03](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=183)** If you are using different credentials or a different database, you'll want to modify these to match yours.
>
> **[3:09](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=189)** Once database is loaded in the credentials, we've got some functions here to help us to connect the database, to disconnect, something to escape strings so that they're safe to put in the database, confirm the database connection, and confirm that we got a result set back.
>
> **[3:24](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=204)** We go back to initialize again, we have query functions and that has functions to help us to query the database.
>
> **[3:30](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=210)** I'm just going to fold these up so we can see them all.
>
> **[3:34](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=214)** And you can see it finds all admins, finds a particular admin by ID or by username.
>
> **[3:39](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=219)** It inserts an admin, updates an admin, or deletes an admin.
>
> **[3:42](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=222)** And then there's validate admin, which is a validation function.
>
> **[3:45](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=225)** We'll take a look at insert admin.
>
> **[3:47](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=227)** You'll see it calls validate admin here to make sure it's valid.
>
> **[3:51](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=231)** That makes sure for example, that the first name is not blank.
>
> **[3:54](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=234)** And then once it confirms that it's valid, it inserts it in.
>
> **[3:57](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=237)** Now at the moment hash password is just a empty string.
>
> **[4:01](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=241)** We're going to have to work on that.
>
> **[4:02](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=242)** But this is the code that sort of gives us the skeleton for us to work from.
>
> **[4:06](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=246)** Now, some of these validations are stored in validation function.
>
> **[4:10](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=250)** So is blank, has presence, has length.
>
> **[4:13](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=253)** Those are the kinds of things that are stored in here, and they're just handy helpers to help us perform common validations.
>
> **[4:19](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=259)** So you can spend some time looking through the code that's inside the private directory.
>
> **[4:23](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=263)** If you're not already familiar with it, I think it's all pretty straightforward.
>
> **[4:27](https://www.linkedin.com/learning/php-user-authentication/introducing-the-sample-project?u=76281980&t=267)** The goal in giving the sample project was to get you jump-started on the path and not to have us spend a lot of time building some of these tools so that we could focus on user authentication.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (14), [[PHP]] (5), [[MySQL]] (2), data (1)
> **CLI Commands:** php (5), mysql (2), make (2)
> **Env Vars:** php (5), url (1)
> **UI Navigation:** go to (3), click on (1)
> **Exercise Files:** exercise files (2), starter project (1)
> **File Paths:** index.php (1), functions.php (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)

#### Adding new users
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=0)** - [Instructor] We have our sample project.
>
> **[0:02](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=2)** Now we need to improve the code that adds new admin users to the system.
>
> **[0:06](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=6)** We have code to add a user, but it doesn't hash the user's password yet.
>
> **[0:10](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=10)** The password will be submitted on the web form in plain text.
>
> **[0:14](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=14)** We need to hash it and then use the hashed value in the SQL insert statement.
>
> **[0:19](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=19)** To do that, we'll use a php function called password hash.
>
> **[0:24](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=24)** If you give it a password, it returns a hash.
>
> **[0:27](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=27)** The second argument specifies what type of hash algorithm to use.
>
> **[0:31](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=31)** If you use the constant password default, it will use php's default setting which is currently bcrypt.
>
> **[0:38](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=38)** That's a terrific choice so we don't need to change it.
>
> **[0:41](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=41)** However, I usually specify the algorithm which you can do using the constant password bcrypt.
>
> **[0:47](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=47)** You can also send in options as a third argument, such as setting the cost factor that bcrypt will use.
>
> **[0:53](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=53)** The default cost factor is 10 and that's also a good choice, so you can leave it out unless you know that you want something different.
>
> **[1:00](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=60)** In the project, if we click on create new admin, we get a form for adding a new admin user, and it has a password field as well as a confirm password field here.
>
> **[1:10](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=70)** Let's go to staff admins new.php and look at that code.
>
> **[1:15](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=75)** If it's a post request, then it tries to submit the user of the database.
>
> **[1:19](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=79)** If the page is a get request, which was normally would be when we first go to the page, it'll just display the blank form.
>
> **[1:26](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=86)** Let's drop down here and right below where it says create admin, let's just add in a bit of temporary php code here that will echo back the results of password_hash and let's pass in just a string.
>
> **[1:39](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=99)** It can be anything you want.
>
> **[1:40](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=100)** I'll put in password, 1, 2, 3, 4 and then I'll use password_bcrypt, semi-colon, and close our php tags.
>
> **[1:50](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=110)** Now let's just try this out and see what we get when we echo back the results of this password hash function.
>
> **[1:56](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=116)** We'll come back over here, we'll reload the page, and there it is.
>
> **[2:00](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=120)** That's our hash.
>
> **[2:01](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=121)** That's the result of hashing that single string.
>
> **[2:05](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=125)** Now you'll remember, I told you at the beginning that every time we run the string through our algorithm, we always get the same result.
>
> **[2:14](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=134)** Let's try that and see if it's true, let's reload the page.
>
> **[2:17](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=137)** We got a different result.
>
> **[2:19](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=139)** Every time we do it, we get a different result again.
>
> **[2:22](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=142)** You may think that I've somehow lied to you, right?
>
> **[2:24](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=144)** Well, it's because there's a little bit more going on that we haven't talked about.
>
> **[2:27](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=147)** The string that's output here includes not only the output of the hash, it also includes some configuration settings.
>
> **[2:35](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=155)** The first part tells it that it is the bcrypt cipher.
>
> **[2:38](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=158)** It has a cost of 10 and then there's about 22 characters here that are the salt.
>
> **[2:43](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=163)** That's a random bit of data that it generates to go with the data that we're inputting as the password.
>
> **[2:50](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=170)** It comes up with the result for that, which is the last part here, and then it appends it all together into one thing so that it has settings that it needs to run again.
>
> **[3:01](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=181)** So, when it takes these 22 characters plus the same string, it will give the same result.
>
> **[3:09](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=189)** But every time we run it, it comes up with a new set of 22 characters.
>
> **[3:13](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=193)** It's a new set of input, it's called a salt, and it's a good way of making sure that the password is more secure.
>
> **[3:18](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=198)** So don't let that throw you off.
>
> **[3:20](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=200)** It does return a different result every time we run it, but when we ask php to compare it, it'll use the same set of settings and the output will be the same in that case.
>
> **[3:31](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=211)** Okay, so let's go back in and let's take this back out, but I'm actually going to just go right here and cut that part out 'cause I'm going to need it.
>
> **[3:40](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=220)** I'll save this.
>
> **[3:41](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=221)** Let's go back up here and when we submit the form, you'll see that when it's a post request, it creates an array called admin and it takes all of these post values and sets them into values here, including password and confirm password, and then it passes that into insert admin.
>
> **[3:57](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=237)** An insert admin does the heavy lifting on inserting this admin in the database.
>
> **[4:01](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=241)** It checks for errors.
>
> **[4:02](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=242)** If there are errors, it'll display them to the user so they can fix them.
>
> **[4:06](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=246)** If it returns true, then it goes ahead and says admin created and redirects to a different page.
>
> **[4:13](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=253)** So let's look at insert admin, that's in the query_functions.php file, and let's just fold these up so we can get to it.
>
> **[4:20](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=260)** We got validated admin, here's the insert admin.
>
> **[4:22](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=262)** So the first thing it does, it takes that array that we pass in.
>
> **[4:25](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=265)** It passes it to validate admin which checks different features to make sure things aren't blank, and if they're long enough and such.
>
> **[4:32](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=272)** We'll come back to that in a moment.
>
> **[4:34](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=274)** If there's no errors there, then it comes down here and it comes up with a hash password and then creates SQL with that hash password to submit to my SQL.
>
> **[4:44](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=284)** So right now, hash password is an empty string.
>
> **[4:45](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=285)** What we want instead is to paste in this bit here, but instead of using a static string, what do we want to use?
>
> **[4:53](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=293)** We want to use admin and then password, right?
>
> **[4:57](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=297)** That's what got passed in right here, so we'll take that value, pass the bcrypt, we'll get back a password hash, and that'll be our hash password.
>
> **[5:06](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=306)** Then that's what we'll get saved into the database.
>
> **[5:09](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=309)** Now before we go on from there, let's just jump up here to the validate admin and see what we've got.
>
> **[5:14](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=314)** We've got validation on the first name, on the last name, on email, on the username, but nothing on the password yet.
>
> **[5:20](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=320)** So let's add one for the password.
>
> **[5:22](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=322)** I'll just copy this right here for the username and let's just say that if the password is blank and it's going to say, "password cannot be blank," and let's add another one here that says, if, actually let me just copy this one.
>
> **[5:43](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=343)** There we go.
>
> **[5:45](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=345)** I have another one here that says, "If confirm password is blank, then it can't be blank, confirm password."
>
> **[5:53](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=353)** And we should also confirm that they're the same, right?
>
> **[5:56](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=356)** So let's add one more.
>
> **[5:57](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=357)** If we do have a confirm password, if it's not blank, we'll do else if, and let's just leave that as a placeholder for now, and let's grab this value here, and copy it.
>
> **[6:12](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=372)** If password is not equal to, exactly equal, to confirm password, then we need to put another error here, and I'll just copy this one as a starting place, and the error is password and confirm password must match.
>
> **[6:37](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=397)** Okay, so now we're going to check on that to make sure that the password was typed correctly and confirm password matches.
>
> **[6:43](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=403)** That's a good way to just double check ourselves.
>
> **[6:45](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=405)** All right, so that's it.
>
> **[6:46](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=406)** Let's go back here now and let's try it all out.
>
> **[6:48](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=408)** We'll reload the create admin page.
>
> **[6:51](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=411)** Our hash goes away, that was just temporary.
>
> **[6:53](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=413)** Let's create a user.
>
> **[6:54](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=414)** It could be anything you want, it can be yourself.
>
> **[6:56](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=416)** I'm going to create one here for me.
>
> **[6:59](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=419)** My email would be someone@[nowhere.com](https://nowhere.com) and the password, I will just make password 1, 2, 3, 4 for now, and then password 1, 2, 3, 4.
>
> **[7:12](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=432)** Create admin, oh, password and confirm password did not match.
>
> **[7:15](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=435)** Let me try it one more time.
>
> **[7:17](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=437)** 1, 2, 3, 4, P-A-S-S-W-O-R-D, 1, 2, 3, 4.
>
> **[7:23](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=443)** Okay, that time I got it, it created the user successfully.
>
> **[7:26](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=446)** We could go into my SQL and we could look at it there or we can actually just come over here to show.
>
> **[7:33](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=453)** And we've got a username here.
>
> **[7:36](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=456)** I wouldn't leave this in there permanently, but let's just so we can take a peek at it, let's just add in a BR tag.
>
> **[7:44](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=464)** And then, we'll ask it just to show us what it's got for the hashed password.
>
> **[7:49](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=469)** So we'll save it, reload the page, and there you go.
>
> **[7:53](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=473)** You see, I've got that password.
>
> **[7:54](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=474)** That's now stored in the database.
>
> **[7:56](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=476)** It has both the hashed value as well as all of the configuration settings it needs to go with the plain text password to get that same result.
>
> **[8:06](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=486)** So when we go to login, we'll be able to compare it and find out if they match.
>
> **[8:11](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=491)** Let's just go back in here.
>
> **[8:12](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=492)** We don't want to actually leave that in our code because you don't normally need to see that anywhere.
>
> **[8:17](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=497)** We'll just leave it in the database.
>
> **[8:20](https://www.linkedin.com/learning/php-user-authentication/adding-new-users?u=76281980&t=500)** Now that we can create new users in the database with hashed passwords, we're ready to learn how to log those users in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (7), database (6), [[SQL]] (4), data (2), web (1)
> **CLI Commands:** php (7), make (3), find (1)
> **Env Vars:** sql (4)
> **UI Navigation:** go to (3), click on (1)
> **Code Identifiers:** password_hash (1), password_bcrypt (1), query_functions (1)
> **File Paths:** new.php (1), query_functions.php (1)
> **Definitions:** is a  (1), is an  (1)
> **URLs:** [nowhere.com](https://nowhere.com) (1)

#### Logging in users
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=0)** - [Instructor] Now that we have a database, we're ready to log in that user.
>
> **[0:04](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=4)** The steps for login are that the user will go to a login form and submit their username and password.
>
> **[0:11](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=11)** The application will search for the username in the database.
>
> **[0:15](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=15)** And if the username is found, it will hash the submitted password and compare it with the hashed password that came from the database.
>
> **[0:22](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=22)** If those passwords match, then it's going to set that hand stamp for the user.
>
> **[0:27](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=27)** It's going to set a value in the session to the user's ID, and then redirect to a post login page.
>
> **[0:33](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=33)** One recommendation I would make is that, regardless of whether it's the username that's not found or the password that doesn't match, both types of failure should show the same response.
>
> **[0:44](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=44)** So that if someone's trying to guess the username, they don't get information letting them know whether they got a right username or not. Right?
>
> **[0:51](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=51)** They have to give the combination of both has to be correct.
>
> **[0:53](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=53)** Otherwise it just says, sorry, it's not working.
>
> **[0:57](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=57)** PHP has a function that can help us with this.
>
> **[0:59](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=59)** It's the companion to password hash, it's password verify, and it takes two arguments.
>
> **[1:05](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=65)** The first is a plain text password.
>
> **[1:07](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=67)** That's the one being submitted by the login form.
>
> **[1:10](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=70)** The second is a hashed password, the one that we stored in the database.
>
> **[1:14](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=74)** That means that we have to retrieve the admins record first, so we have that value to pass in.
>
> **[1:20](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=80)** Then we can use this function and it will return true or false.
>
> **[1:23](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=83)** It's that easy.
>
> **[1:25](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=85)** No configurations are needed in this case.
>
> **[1:27](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=87)** We don't need to set the algorithm or the cost factor because as we discussed, those are actually stored with the hashed password.
>
> **[1:34](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=94)** So it already has the configurations it needs to set things up and do the comparison.
>
> **[1:39](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=99)** In our project, I've added a couple of new files.
>
> **[1:42](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=102)** The first is login dot php.
>
> **[1:44](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=104)** You can pause the movie and copy it down, or you can find it in the exercise files.
>
> **[1:49](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=109)** It's just basic form processing.
>
> **[1:50](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=110)** If it's a post request, then it attempts the login.
>
> **[1:53](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=113)** But if not, then it's a get request and it'll just show the form that's down here.
>
> **[1:57](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=117)** It has the username and the password and the submit button.
>
> **[2:01](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=121)** When we submit it, then it will be a post request.
>
> **[2:04](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=124)** It'll take those, the username and password, and then it will try to find the admin user by their username.
>
> **[2:10](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=130)** Finding admin by username is defined in that query functions over here.
>
> **[2:14](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=134)** Find admin by username.
>
> **[2:17](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=137)** It's just checking to see, select from admins where username equals whatever's passed in.
>
> **[2:22](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=142)** And then if it finds that admin, if the admin returns something, then we're going to try to log in and we have to write that code.
>
> **[2:30](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=150)** But before we do, let's jump over here and let's look also at auth functions that I've added.
>
> **[2:35](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=155)** This is just an empty placeholder file inside the private directory.
>
> **[2:39](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=159)** And I told the initialize dot php that it should load it up.
>
> **[2:43](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=163)** So any functions related to authentication, we can put in this file and we know that they'll be available to us.
>
> **[2:49](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=169)** So, inside auth functions, let's write a function to do this.
>
> **[2:53](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=173)** I'm going to call it function log in admin, and we'll pass in an admin.
>
> **[3:01](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=181)** And if we do, we want to log them in.
>
> **[3:05](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=185)** This is going to, I'll just make a note here, performs all actions necessary to log in an admin.
>
> **[3:14](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=194)** Now there might be a lot of things that we want to do here.
>
> **[3:16](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=196)** There might be some additional logging we want to do, and it could be very complex.
>
> **[3:21](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=201)** For now, we're going to keep it very simple though.
>
> **[3:22](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=202)** And we're just going to store in the session, inside admin ID, we're going to store value of admin ID.
>
> **[3:34](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=214)** That's it. And let's also go ahead while we're here.
>
> **[3:38](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=218)** Let's store one other thing.
>
> **[3:40](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=220)** Let's go ahead and take the username out of there as well.
>
> **[3:44](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=224)** This is handy because then we don't have to go back to the database every time we need the username, it's always there in the session.
>
> **[3:49](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=229)** We have a currently logged in user.
>
> **[3:51](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=231)** We have their username nice and handy for us.
>
> **[3:54](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=234)** And then at the end, let's just return true.
>
> **[3:57](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=237)** That's it. This is putting the hand stamp on the user.
>
> **[4:01](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=241)** That's what this step does. It says, remember this user.
>
> **[4:05](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=245)** So let's go back over here to login dot php.
>
> **[4:08](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=248)** If we find the admin, right?
>
> **[4:10](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=250)** That's step one, find them in the database.
>
> **[4:12](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=252)** If they're found, now we need to check their password and then do that login if it matches.
>
> **[4:19](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=259)** So let's try to login if password verify and we're going to pass in the first value, which is just going to be password, scroll back up here, you'll see that that's what I set it to, just the variable password.
>
> **[4:34](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=274)** So variable password.
>
> **[4:36](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=276)** And then the second thing, we found the admin.
>
> **[4:39](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=279)** So we're going to use its hashed password.
>
> **[4:43](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=283)** So if password verify returns true, then we'll do one thing.
>
> **[4:50](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=290)** Password matches.
>
> **[4:53](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=293)** If not, then let's do something else, in this case, username found, but password does not match.
>
> **[5:06](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=306)** And so in that case, we're just going to add to the errors our login failure message.
>
> **[5:13](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=313)** See, I've got that right here.
>
> **[5:16](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=316)** And that's the same one I'm using down here if no username was found, they both return the same message in both cases, login unsuccessful.
>
> **[5:23](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=323)** It doesn't need to tell them why, the credentials didn't work.
>
> **[5:26](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=326)** All right. So if the password matches, what do we want to do?
>
> **[5:29](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=329)** We want to call that new function we just wrote, login admin, pass it in the value of admin.
>
> **[5:34](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=334)** And then after we've put that, let's redirect to the URL for, and we'll make it to staff index dot php.
>
> **[5:45](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=345)** So that'll go to the menu.
>
> **[5:47](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=347)** Now, this redirect to and URL for, those are custom helper methods that I had defined.
>
> **[5:52](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=352)** Here's URL for.
>
> **[5:53](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=353)** You can see what it's doing.
>
> **[5:54](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=354)** It's just making sure that it goes to the root of the website and then redirect to is down here.
>
> **[6:00](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=360)** It's just setting the header like a redirect would.
>
> **[6:05](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=365)** All right. So that's it.
>
> **[6:06](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=366)** We've now got our login code.
>
> **[6:08](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=368)** Let's try it out.
>
> **[6:09](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=369)** Let's save this and let's open up Firefox.
>
> **[6:12](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=372)** Here I am. Let's go- It's going to be a page, we don't have a link to it yet.
>
> **[6:17](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=377)** So we're going to go to staff login dot php There's my login form.
>
> **[6:23](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=383)** Let's try it with something wrong first.
>
> **[6:25](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=385)** I'll just type in something garbage and I'll hit submit.
>
> **[6:28](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=388)** Password can't be blank.
>
> **[6:29](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=389)** All right, let's try something there.
>
> **[6:31](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=391)** Submit, login was unsuccessful.
>
> **[6:34](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=394)** All right, now let's try my real one.
>
> **[6:37](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=397)** I'll try it with a bad password first.
>
> **[6:41](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=401)** Login unsuccessful.
>
> **[6:42](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=402)** And let's try it with the correct password.
>
> **[6:46](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=406)** I put in password1234 and it worked.
>
> **[6:49](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=409)** And we know it worked because it didn't take us back to the login page.
>
> **[6:53](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=413)** It redirected us to the staff index page.
>
> **[6:56](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=416)** Now, if we were to go in and look, we would find out that the session value for admin ID and username had also been set.
>
> **[7:03](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=423)** We can also make one other improvement here.
>
> **[7:06](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=426)** Let's just go into the shared staff header.
>
> **[7:10](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=430)** And right here, we have navigation.
>
> **[7:13](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=433)** Let's just add a line here that says li user colon php echo, and then let's put the value of that username.
>
> **[7:26](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=446)** Session, username.
>
> **[7:30](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=450)** And if there's not a username, then we'll just default to an empty string, and then li.
>
> **[7:39](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=459)** All right, let's go back and reload our page.
>
> **[7:42](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=462)** And there we are, look at that.
>
> **[7:44](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=464)** It's got my username because I'm logged in.
>
> **[7:46](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=466)** So those are the steps to the login process.
>
> **[7:49](https://www.linkedin.com/learning/php-user-authentication/logging-in-users?u=76281980&t=469)** The key part is really right here with this password verify and all we're doing is taking whatever the user gave us and comparing it to the hashed password that we had previously stored in the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (7), [[PHP]] (7), application (1), [[Search]] (1), hit (1)
> **CLI Commands:** php (7), find (6), make (4)
> **Env Vars:** url (3), php (1)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2), means that (1)
> **Cross-References:** we discussed (1)
> **Tools:** firefox (1)
> **Exercise Files:** exercise files (1)

#### Logging out users
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=0)** - [Instructor] Now that users can log in, let's learn how to log them out.
>
> **[0:04](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=4)** You can probably guess how to do it.
>
> **[0:05](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=5)** It's pretty simple.
>
> **[0:07](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=7)** Like our ticket analogy, we just need to wash off the hand stamp that we created, and we do that by removing the user ID that we stored in the session.
>
> **[0:16](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=16)** I've added another placeholder file to our project called logout.php.
>
> **[0:21](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=21)** You can see it's inside the staff directory alongside login.
>
> **[0:24](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=24)** So we visit this page, this will log us out.
>
> **[0:27](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=27)** So it does all of the setup with initialize, then we're going to need to have some logout code, and then at the end, after it's done with that, this page will just redirect the user back to the login page, 'cause now they're logged out.
>
> **[0:39](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=39)** Maybe they want to log in again, maybe they want to log in as a different user, so we send them to the login page.
>
> **[0:46](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=46)** So what are we going to do for our logout code here?
>
> **[0:49](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=49)** Well, we're just going to call a function that's going to handle all the logging out for us, log_out_admin.
>
> **[0:55](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=55)** We don't need to pass it anything, just going to have a function that will tell it to do the opposite of log_in_admin.
>
> **[1:01](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=61)** So let's do that here.
>
> **[1:02](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=62)** Function log_out_admin, don't need to pass it anything.
>
> **[1:09](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=69)** And inside here, what's it going to do?
>
> **[1:10](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=70)** Well, it's going to do the reverse of logging in.
>
> **[1:13](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=73)** It will use unset on the session for admin ID
>
> **[1:22](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=82)** and then underscore ID.
>
> **[1:23](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=83)** And let's copy that, 'cause it'll do the same thing for username.
>
> **[1:30](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=90)** And then at the end, return true.
>
> **[1:34](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=94)** Now, these are super simple right now, but like I said before, you could do very complex things in here.
>
> **[1:39](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=99)** You might want to do some additional logging.
>
> **[1:42](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=102)** You might want to, you know, keep track in a database of how many times a user has logged in for the month.
>
> **[1:48](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=108)** There's all sorts of things that could be done here, we're just keeping it to the absolute minimum version, which is just to simply mark them as logged in or mark them as logged out.
>
> **[1:58](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=118)** All right, so let's save it, and we need a way to actually execute this logout, so let's go to the staff header, and right down here, below where we have the menu link, let's add another blank.
>
> **[2:10](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=130)** I'll copy and paste it in.
>
> **[2:12](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=132)** But this one is going to be to the logout page, and the text for it will be "logout".
>
> **[2:21](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=141)** We'll save it, and now let's go to Firefox.
>
> **[2:24](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=144)** Let's reload our page.
>
> **[2:25](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=145)** I'm still logged in, so here's logout.
>
> **[2:28](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=148)** So when I click on logout, it logged me out.
>
> **[2:33](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=153)** Took me to the login page, I'm no longer there.
>
> **[2:35](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=155)** So we know that the logout worked.
>
> **[2:38](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=158)** If we were to go back to index.php, you can see that it does not give us a username anymore, because our hand stamp is gone.
>
> **[2:46](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=166)** Now, we shouldn't be able to go to the index page and be able to see this admins area, right?
>
> **[2:52](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=172)** That was the whole point of having authorization, was to have access control.
>
> **[2:57](https://www.linkedin.com/learning/php-user-authentication/logging-out-users?u=76281980&t=177)** So in the next movie, let's talk about how we can control access to these pages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), database (1), next (1)
> **UI Navigation:** go to (3), click on (1)
> **Code Identifiers:** log_out_admin (2), log_in_admin (1)
> **File Paths:** logout.php (1), index.php (1)
> **CLI Commands:** php (2)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** firefox (1)
> **Prerequisites:** setup (1)

#### Controlling access to pages and functions
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=0)** - [Instructor] A user can now log in and log out to our website, but we're not yet controlling access to pages or functions.
>
> **[0:08](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=8)** In other words, we know if someone should be allowed to see something, but we're not preventing them from seeing something if they're not allowed to.
>
> **[0:16](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=16)** The steps for controlling access is that once a user is logged in, they're going to make additional requests to the website for password-protected pages.
>
> **[0:24](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=24)** When they do, the application is going to check and see if that session data contains the user's ID.
>
> **[0:31](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=31)** That's looking for the hand stamp in our analogy.
>
> **[0:34](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=34)** If it's there, then we know that they've been previously authenticated and we'll return the requested page, no problem.
>
> **[0:41](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=41)** But if it's absent, then we know that they have not been authorized.
>
> **[0:45](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=45)** So we redirect them to the login form so that they can authenticate themselves.
>
> **[0:49](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=49)** Let's try adding this to our application.
>
> **[0:52](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=52)** Let's start by going into the auth functions that we've got here and I'm going to actually just paste in a bit of code so you don't have to watch me type out all of this explanation.
>
> **[0:59](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=59)** But I've got a bit in here just noting that this function is_logged_in is going to contain the logic for figuring out whether someone is logged in or not.
>
> **[1:07](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=67)** And the logic is fairly simple, but it's done in a way so that we have is_logged_in.
>
> **[1:12](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=72)** But then we're going to also have another function which we're going to call it require_login that will check it to see if it's true.
>
> **[1:20](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=80)** So we can always check and find out is the user logged in?
>
> **[1:23](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=83)** And that just returns is that set?
>
> **[1:25](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=85)** If that session variable's been set, then they're logged in.
>
> **[1:28](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=88)** We don't even have to check what it is.
>
> **[1:30](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=90)** We know by its mere presence that it is a logged in user.
>
> **[1:35](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=95)** We also have the value of that login which we can use to look up their admin record anytime we want to.
>
> **[1:41](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=101)** But we don't have to.
>
> **[1:42](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=102)** We already know this person has been authenticated.
>
> **[1:45](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=105)** Require_login is going to go a little bit further.
>
> **[1:48](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=108)** Let me just make a note here.
>
> **[1:50](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=110)** We're going to call require_login at the top of any page which needs to require a valid login before granting access to the page.
>
> **[2:09](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=129)** All right, so what are we going to do here?
>
> **[2:11](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=131)** Well, we're going to check and see if the person's logged in.
>
> **[2:14](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=134)** If the person is not is_logged_in, then that test fails.
>
> **[2:22](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=142)** Then we know that they need to be redirected.
>
> **[2:26](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=146)** So it's going to be a redirect to url_for and we'll make it staff/login.php.
>
> **[2:40](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=160)** Otherwise do nothing, let the rest of the page proceed.
>
> **[2:49](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=169)** Okay, so that's it.
>
> **[2:50](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=170)** So is_logged_in is something we can always test and require_login will actually do that test to see if they're logged in or not.
>
> **[2:57](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=177)** And if not, it will redirect them.
>
> **[3:00](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=180)** So we can just put require_login at the top of any page we want to require a login for.
>
> **[3:05](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=185)** So let's start by putting at the top of our index.php page.
>
> **[3:10](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=190)** That's a page where we want to require a login.
>
> **[3:12](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=192)** You can put it anywhere after initialize.
>
> **[3:15](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=195)** You can go absolutely anywhere.
>
> **[3:17](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=197)** PHP, require_login, and that's it.
>
> **[3:21](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=201)** So let's save it.
>
> **[3:22](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=202)** Let's go and try it out.
>
> **[3:24](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=204)** Come over here to Firefox.
>
> **[3:26](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=206)** I'm in my staff area now.
>
> **[3:27](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=207)** Let's click on Menu.
>
> **[3:28](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=208)** That takes me to index and look at that.
>
> **[3:32](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=212)** Anytime I try and go to index.php, it takes me to the login page instead.
>
> **[3:37](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=217)** Now the other pages that I was just on in the admin area I can still move around.
>
> **[3:43](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=223)** Those aren't password protected.
>
> **[3:45](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=225)** So I need to add this same line of code to those pages as well.
>
> **[3:49](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=229)** So let's go to delete.php and right after initialize.
>
> **[3:53](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=233)** I don't need PHP tags here 'cause I'm inside PHP tags.
>
> **[3:58](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=238)** Let's go to edit, same thing here.
>
> **[4:00](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=240)** I think probably more often than not I won't need the PHP tags, so let me just copy that line without them, we have index.
>
> **[4:09](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=249)** And save it and go to new.
>
> **[4:14](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=254)** Save it, we'll go to show.
>
> **[4:17](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=257)** Save it and login of course it doesn't get it because you're not logged in when you have the login page, Log out, you could put it, it's perfectly fine, but it doesn't hurt to do anything here.
>
> **[4:28](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=268)** So there's no reason to put it.
>
> **[4:30](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=270)** I'm going to leave it off of this.
>
> **[4:31](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=271)** Now other pages here outside the staff area, those are public pages.
>
> **[4:36](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=276)** They don't need to have this.
>
> **[4:37](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=277)** It's only the staff area that we're interested in protecting.
>
> **[4:40](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=280)** So I'll save that.
>
> **[4:41](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=281)** Let's come back over here and let's just reload this page.
>
> **[4:44](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=284)** Boom, sent me to the login.
>
> **[4:46](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=286)** I'm no longer able to go to any of those pages, staffadmin/index.php.
>
> **[4:54](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=294)** Oh, gave me an error there, staff admins, plural.
>
> **[4:59](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=299)** There it is, takes me to the login page every time.
>
> **[5:02](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=302)** Now let's try logging in.
>
> **[5:05](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=305)** My password was password1234 and there I am.
>
> **[5:11](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=311)** Now every page I request, it's not a problem.
>
> **[5:14](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=314)** Every page starts out by checking to see whether or not it's been authenticated, whether or not I have that user ID in my session that acts as a hand stamp.
>
> **[5:24](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=324)** Now if we click Logout, you'll see that it says here User, Menu, Logout.
>
> **[5:29](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=329)** That's sort of weird to have that up there, so let's make use of the fact that we can call this function here is_logged-in and let's just check that.
>
> **[5:38](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=338)** Let's come over here to the staff header and let's only show that stuff if the user's logged in.
>
> **[5:45](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=345)** So PHP, if is_logged_in, then and I'll close my PHP tag.
>
> **[5:55](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=355)** And then this will also be inside PHP tags, PHP.
>
> **[6:01](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=361)** Close the curly brace and close the PHP tag.
>
> **[6:05](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=365)** And I'll just move this down to here and take away this space.
>
> **[6:10](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=370)** So now it checks to see if the user is logged in, it shows this bit.
>
> **[6:14](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=374)** If not, it leaves it out.
>
> **[6:16](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=376)** Come back, now it's gone.
>
> **[6:18](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=378)** That looks a little nicer.
>
> **[6:20](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=380)** If I log in, kscoglund, password 1234, and there I am.
>
> **[6:27](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=387)** Now I see it again.
>
> **[6:28](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=388)** It comes and goes.
>
> **[6:29](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=389)** So you see now how we can require login on pages and we can also check the user's logged in state at any point we want even on the public pages.
>
> **[6:38](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=398)** In addition to checking the logged in state of the user, we can also check the different permissions the user might have.
>
> **[6:44](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=404)** We're not setting up complex permissions here, but we could check to see for example if the username is something.
>
> **[6:50](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=410)** Then treat the page differently than it normally would.
>
> **[6:54](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=414)** Or if the user has an access level that's set to a certain amount or if their account has a certain type.
>
> **[7:00](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=420)** Or you could do something fancier where you actually set individual privileges on different users.
>
> **[7:05](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=425)** So you could check and see if a user has a privilege to delete for example.
>
> **[7:11](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=431)** You can be as fine grained with the permissions as you want and the pages can behave different ways depending on these circumstances.
>
> **[7:17](https://www.linkedin.com/learning/php-user-authentication/controlling-access-to-pages-and-functions?u=76281980&t=437)** For example, the search page might return different results depending on what access level the user had or the page might include or exclude certain information based on characteristics of the user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (14), application (2), data (1), [[Representational State Transfer (REST)|Rest]] (1), [[Search]] (1)
> **CLI Commands:** php (14), make (4), find (1)
> **Code Identifiers:** is_logged_in (5), require_login (5), url_for (1), is_logged (1)
> **Env Vars:** php (9)
> **UI Navigation:** go to (5), click on (1)
> **File Paths:** index.php (2), staff/login.php (1), delete.php (1), staffadmin/index.php (1)
> **Analogies:** for example (3)
> **Definitions:** in other words (1), is a  (1)

#### Challenge: Editing users
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=0)** - [Instructor] It's time for a challenge assignment.
>
> **[0:08](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=8)** In our code, we've created a way to add new users, but we need to also think about editing users.
>
> **[0:15](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=15)** When you create a new admin, you click this link and it takes you to a form that allows you to submit first name, last name, username, email, and then password.
>
> **[0:24](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=24)** Confirm password.
>
> **[0:25](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=25)** And we saw how to do that.
>
> **[0:27](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=27)** Once we have an admin, if we click edit, we get back an edit admin page, which has the exact same form fields on it.
>
> **[0:35](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=35)** But there's two problems.
>
> **[0:37](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=37)** One, we haven't added any password hashing.
>
> **[0:39](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=39)** So if you were to enter a password here, it would not hash it and store it in the database.
>
> **[0:45](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=45)** Back to the moment.
>
> **[0:46](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=46)** It's just set up to store an empty string, which would have the effect of locking out the user.
>
> **[0:51](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=51)** The second problem though, is that even when we come to edit the admin, we might not be wanting to edit the password.
>
> **[0:58](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=58)** Let's imagine that we come in here and this user has called me up on the phone and said, you know what, my email address is changed.
>
> **[1:05](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=65)** Can you change it?
>
> **[1:06](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=66)** So instead of someone@[nowhere.com](https://nowhere.com), it's someone@[somewhere.com](https://somewhere.com).
>
> **[1:11](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=71)** Now when I click edit admin, but when I do it says password cannot be blank.
>
> **[1:16](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=76)** Confirm password cannot be blank.
>
> **[1:17](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=77)** The validations are checking to see if something has been submitted.
>
> **[1:21](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=81)** But if I change it to something, well, then it's going to change this person's password.
>
> **[1:25](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=85)** And that's probably not what I want.
>
> **[1:27](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=87)** I probably don't know what that password is.
>
> **[1:30](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=90)** I shouldn't know, at least.
>
> **[1:32](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=92)** So in addition to hashing the password, we also need to handle the fact that we may not even want to update it in some cases.
>
> **[1:39](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=99)** There are a couple of strategies.
>
> **[1:40](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=100)** that you often see use to deal with a scenario.
>
> **[1:43](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=103)** The first is you make it so that the admin simply cannot update user passwords.
>
> **[1:48](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=108)** You just take it off the form field.
>
> **[1:50](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=110)** You make it so that it has a separate validation and you don't include it in the SQL.
>
> **[1:54](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=114)** Or you can have separate forms for editing the user's details.
>
> **[1:59](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=119)** And then another form for editing the user's password.
>
> **[2:03](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=123)** It's also possible to make it only hash and update password if a password was sent.
>
> **[2:08](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=128)** So if you leave those two form fields blank, it doesn't object.
>
> **[2:12](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=132)** It updates the rest of the user and ignores the password fields completely.
>
> **[2:16](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=136)** But if you did type in something in the password fields, then it would hash and update it correctly.
>
> **[2:21](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=141)** And then the fourth possibility is that you might make it so that users are only able to update their passwords by using a password reset process.
>
> **[2:31](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=151)** Often that takes the form of telling the website that you've forgotten your password.
>
> **[2:35](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=155)** So it emails you some kind of a link.
>
> **[2:38](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=158)** You click on the link and then you enter your new password in order to update it.
>
> **[2:42](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=162)** There may be other variations on these as well.
>
> **[2:44](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=164)** Your challenge assignment is to try and implement the third one, make it so that it will hash and update the password if a password is sent in the form.
>
> **[2:53](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=173)** But if it's left blank, then don't worry about it.
>
> **[2:56](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=176)** Skip the hashing, leave the password out of the update.
>
> **[3:00](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=180)** I'll give you a hint.
>
> **[3:01](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=181)** You're going to need to modify both the SQL that's being submitted to the database and the validation code as well.
>
> **[3:08](https://www.linkedin.com/learning/php-user-authentication/challenge-editing-users?u=76281980&t=188)** Once you've got it hashing the passwords when it ought to and not when it shouldn't, meet me in the next movie and I'll show you how I did it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (2), [[SQL]] (2), [[Forms]] (1), [[Representational State Transfer (REST)|Rest]] (1), next (1)
> **CLI Commands:** make (5)
> **URLs:** [nowhere.com](https://nowhere.com) (1), [somewhere.com](https://somewhere.com) (1)
> **Env Vars:** sql (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)

#### Solution: Editing users
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=0)** (intro music)
>
> **[0:05](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=5)** - [Instructor] I hope you did well with the challenge assignment.
>
> **[0:07](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=7)** In this movie I'll show you the solution that I came up with.
>
> **[0:10](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=10)** So we already saw that we had the admins.
>
> **[0:13](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=13)** We want to click on edit. We have the form.
>
> **[0:15](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=15)** And what we want is for this to allow us to update this information up here in the first four fields, without having to submit a password.
>
> **[0:23](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=23)** And if we do submit a password and confirm password, we want it to be validated and to be hashed and updated.
>
> **[0:30](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=30)** So it should work two different ways depending on whether this is entered or not.
>
> **[0:34](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=34)** So if we come over here to update admin inside query functions, I've added a bit of code here to see if password is sent.
>
> **[0:43](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=43)** So I've got a variable password is sent and if it's not blank, is blank is something I've defined over here in my validation functions, just checks to see if it's not set, or if we trim the value, is it equal to an empty string?
>
> **[0:58](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=58)** And it'll check to see if it's not blank, then the password was sent.
>
> **[1:03](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=63)** That's all it's doing is checking to see whether or not if we were given a value.
>
> **[1:07](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=67)** Down here, you can see inside the SQL, when it's assembling the SQL, it checks to see if the password was sent.
>
> **[1:15](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=75)** And if it was, then it calls the exact same hash password line we had up here inside insert admin, and then adds that line to the SQL.
>
> **[1:25](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=85)** But if not, then it just skips that part.
>
> **[1:28](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=88)** It just does first name, last name, email, and then username.
>
> **[1:32](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=92)** Now be mindful of the fact, this has a comma at the end of the line which makes it go nicely between two, if this had been the last item and username, for example, had been up here, then it might have caused us problems by that trailing comma some of the time and it wouldn't work out, right?
>
> **[1:50](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=110)** We take it away. It wouldn't always flow correctly.
>
> **[1:53](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=113)** The syntax wouldn't be correct.
>
> **[1:54](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=114)** So I've put username as the last argument so that that's never a problem.
>
> **[1:58](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=118)** This will just be one of the elements being submitted, not the last one.
>
> **[2:02](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=122)** All right. Another change that I made is that validate admin also passes in a set of options here.
>
> **[2:08](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=128)** It passes in the value of our password required as being whether password was sent.
>
> **[2:14](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=134)** So if we scroll up here, you'll see that validate admin already had in place that would take some options.
>
> **[2:20](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=140)** And so I just checked to see if an option was passed for password required.
>
> **[2:25](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=145)** If it wasn't passed, it'll default to true.
>
> **[2:29](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=149)** That's what these double question marks do, uses this default value instead.
>
> **[2:34](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=154)** And then we have password required.
>
> **[2:35](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=155)** So then we can know while we're validating, is a password required.
>
> **[2:39](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=159)** Scroll down here.
>
> **[2:41](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=161)** If a password is required, then do the validations for it.
>
> **[2:45](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=165)** If not, then it just skips those validations.
>
> **[2:48](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=168)** That's it. Those are the two changes that we have to make.
>
> **[2:51](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=171)** So let's save all of that.
>
> **[2:52](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=172)** Let's come back over and let's try it out.
>
> **[2:54](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=174)** Let's first try without entering a password.
>
> **[2:57](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=177)** Let's just change it from someone@[nowhere.com](https://nowhere.com) to someone@[somewhere.com](https://somewhere.com).
>
> **[3:01](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=181)** Click edit admin and it worked, it updated.
>
> **[3:04](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=184)** It did not object to the fact that I left those fields blank and it didn't update the SQL.
>
> **[3:10](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=190)** Let's change it back to nowhere.
>
> **[3:12](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=192)** And let's also change our password.
>
> **[3:14](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=194)** Our password before, mine was password1234.
>
> **[3:17](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=197)** Let's make it 123- oops 1234password, 1234password.
>
> **[3:26](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=206)** Now I click edit admin.
>
> **[3:28](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=208)** It says it worked. It says that the admin was updated.
>
> **[3:31](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=211)** Let's log out and try it.
>
> **[3:32](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=212)** I'll log back in, kskoglund, and the password, I'll try first, my old one password1234, unsuccessful.
>
> **[3:42](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=222)** I'll try my new one, 1234password.
>
> **[3:46](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=226)** And it worked.
>
> **[3:47](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=227)** So now when we're creating a new user, it will always require password and hash it.
>
> **[3:52](https://www.linkedin.com/learning/php-user-authentication/solution-editing-users?u=76281980&t=232)** When we're editing a user, it'll check to see whether or not we've included that password in these form fields or not to decide whether it should validate it and include in the update.

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

#### Password requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=0)** - [Instructor] In this chapter we'll discuss how to work with strong passwords and we'll begin by discussing password requirements.
>
> **[0:07](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=7)** You've likely encountered password requirements many times yourself.
>
> **[0:11](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=11)** Let's take a look at the ideas behind them.
>
> **[0:13](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=13)** You should require user passwords to be of a minimum length.
>
> **[0:17](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=17)** The ideal length varies according to your needs, but I would suggest a minimum of 10 to 12 characters, but there should not be a maximum length.
>
> **[0:25](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=25)** If users want to create a password that's double the length you require, why not let them pick one that's more secure?
>
> **[0:31](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=31)** After all, there's not a technical reason if we're going to be hashing the password.
>
> **[0:35](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=35)** Almost all hashing algorithms return output that is the same length, regardless of how long the input was.
>
> **[0:43](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=43)** bcrypt output is always 60 characters long.
>
> **[0:47](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=47)** So we can let the user give us input that's as long as they like.
>
> **[0:51](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=51)** You should also allow and encourage character variety or complexity.
>
> **[0:55](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=55)** That means at least allowing uppercase, lowercase, numbers, and symbols.
>
> **[1:00](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=60)** It's up to you if you want to require that complexity or not.
>
> **[1:03](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=63)** Many sites require using at least one of each.
>
> **[1:06](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=66)** Whatever you decide, be sure to communicate the requirements at the start.
>
> **[1:10](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=70)** Nothing is more frustrating than to submit a password and then learn it's not long enough, and then submit a longer password to find out that you should have included a symbol.
>
> **[1:19](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=79)** If the user understands the requirements at the start, they're more likely to submit a valid password on their first attempt.
>
> **[1:25](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=85)** Keep in mind that, in general, long, simple passwords are more secure than short complex ones.
>
> **[1:32](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=92)** Why is that?
>
> **[1:33](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=93)** It's because of the way that attackers would try to brute force a password.
>
> **[1:38](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=98)** That is that they would try all possible input combinations looking for the correct password.
>
> **[1:43](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=103)** They're not going to try and guess it or look it up somewhere.
>
> **[1:47](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=107)** They're going to just go through and try every single possibility.
>
> **[1:50](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=110)** They try aaaa, aaab, aaac, aaad, and so on.
>
> **[1:57](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=117)** It's very repetitive, but computers are very fast.
>
> **[2:00](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=120)** They can try all the combinations.
>
> **[2:02](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=122)** And attackers don't have to try them in order.
>
> **[2:05](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=125)** They know that passwords are generated by people and people like to use words that are familiar to them.
>
> **[2:10](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=130)** So they can use a dictionary to prioritize words that people might use, like pizza, love, and sunshine.
>
> **[2:18](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=138)** They would use those words first in their attempts, before they resorted to all the random combinations.
>
> **[2:24](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=144)** They have a lot of combinations to try and they'll try them all.
>
> **[2:27](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=147)** But they're going to start with the ones that are most likely first.
>
> **[2:31](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=151)** When we look at the key space, or the amount of things that they have to try, it's defined by a formula, which is the types of characters that can be in each position of the password.
>
> **[2:41](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=161)** So uppercase letters, lowercase letters, numbers, symbols, and it goes to the exponent raised to the power of the length of the password, that's the key length.
>
> **[2:52](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=172)** And the length matters more than the amount of characters that we're going to have.
>
> **[2:57](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=177)** And that's because it's an exponential increase.
>
> **[3:00](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=180)** You can run some numbers if you don't believe me, if you want to try it out.
>
> **[3:03](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=183)** The character diversity is still important though, because it helps protect against dictionary attacks.
>
> **[3:09](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=189)** Mostly it helps users break bad habits of using simple words.
>
> **[3:13](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=193)** That's try adding some requirements to our project.
>
> **[3:16](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=196)** So where we're going to add these is in the validate_admin function.
>
> **[3:20](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=200)** And if we scroll down here, if a password is required, we check and make sure that it is not blank.
>
> **[3:26](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=206)** And we check and make sure that confirm_password matches.
>
> **[3:29](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=209)** It's present and it's matched.
>
> **[3:31](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=211)** I want to add some more here.
>
> **[3:32](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=212)** If we're going to check and see, is it blank?
>
> **[3:35](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=215)** And if so, we'll complain about that.
>
> **[3:36](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=216)** But then I'm also going to paste in a bit more here.
>
> **[3:39](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=219)** Let me just format this a little better.
>
> **[3:42](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=222)** Just move these over and you can pause the movie and copy it down if you want, or it will be in the exercise files.
>
> **[3:49](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=229)** But it goes through and it checks.
>
> **[3:50](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=230)** Here's it's using the has_length function that's defined in the validation functions, to see if the password has a length of a minimum of 12.
>
> **[3:59](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=239)** If not, it'll put an error.
>
> **[4:01](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=241)** It must contain 12 or more characters.
>
> **[4:03](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=243)** And then I'm using preg_match for a lot of these.
>
> **[4:05](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=245)** This is checking for a regular expression.
>
> **[4:08](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=248)** So I'm going to pass in a regular expression here as a string and it will then check to see if it is present inside that password.
>
> **[4:16](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=256)** Now this says, check to see if there is any capital letter A to Z inside there.
>
> **[4:23](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=263)** And if there's not, because it has this exclamation point at the beginning, it'll say, "Sorry, I scanned through it.
>
> **[4:29](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=269)** I didn't see any capital letters."
>
> **[4:31](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=271)** Then it does the same thing for lowercase letters, does the same thing for numbers.
>
> **[4:34](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=274)** And then it does the same thing here for anything that is not a uppercase letter, lowercase letter, a number, or a white space, right?
>
> **[4:45](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=285)** This is a not in front of it.
>
> **[4:47](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=287)** That's a regular expression symbol that means not.
>
> **[4:50](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=290)** So anything that's not one of those things would be considered a symbol and it must have at least one of those.
>
> **[4:56](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=296)** So this change to our validation will require some amount of complexity when we're creating the passwords.
>
> **[5:02](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=302)** You can modify these or add others if you want.
>
> **[5:05](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=305)** We also need to communicate this to the user.
>
> **[5:08](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=308)** So let's go to the forms where this occurs on the new.php page, and let's go down here to the form.
>
> **[5:18](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=318)** And right before the password, let's add in a P tag and inside that P tag, let's put Passwords should be at least 12 characters and include at least one uppercase letter, lowercase letter, number, and symbol.
>
> **[5:48](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=348)** All right. So there we've got that.
>
> **[5:49](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=349)** Let's just make sure that looks good.
>
> **[5:51](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=351)** Let's go back to the list. We'll click on Create New Admin.
>
> **[5:54](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=354)** So that's what it'll look like. That's great.
>
> **[5:56](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=356)** And then let's take that same thing and copy it.
>
> **[6:00](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=360)** And we'll go over to the edit page.
>
> **[6:02](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=362)** We'll find the same spot here and add in that as well.
>
> **[6:07](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=367)** Let's go back and just make sure that looks good.
>
> **[6:09](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=369)** And there it is, "Password should be at least."
>
> **[6:12](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=372)** Now we've told the user that they need to provide a password that has length and complexity to it.
>
> **[6:17](https://www.linkedin.com/learning/php-user-authentication/password-requirements?u=76281980&t=377)** And we've also required that in our validations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), power (1), [[Forms]] (1), [[PHP]] (1)
> **CLI Commands:** make (4), find (2), php (1)
> **Code Identifiers:** validate_admin (1), confirm_password (1), has_length (1), preg_match (1)
> **UI Navigation:** scroll down (1), go to (1), click on (1)
> **File Paths:** new.php (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### Preventing weak passwords
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=0)** - [Instructor] Besides requiring certain aspects of passwords, there's some things we can do to prevent users from choosing weak passwords.
>
> **[0:07](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=7)** And I want to look at those in this movie.
>
> **[0:09](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=9)** The first is that we could prohibit certain words.
>
> **[0:13](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=13)** For example, you might say that a user can't use the word password in their password or login or letmein.
>
> **[0:20](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=20)** Those might be just on their own, or you might scan the string to make sure that it's not password1234.
>
> **[0:26](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=26)** You could also look up a list of the most commonly used passwords.
>
> **[0:30](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=30)** There are lots of lists out there that say what the most commonly used passwords are.
>
> **[0:34](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=34)** You could put that in your code and make sure that a user doesn't use one of them.
>
> **[0:38](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=38)** You might also want to restrict them from using other common terms, like your company name.
>
> **[0:43](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=43)** Things that would be easily discoverable.
>
> **[0:45](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=45)** One easy one you can add, is to make sure that the password is not simply the username.
>
> **[0:50](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=50)** Let's go to our project and add that one.
>
> **[0:52](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=52)** So, in our validations, we're just going to add one more validation here to the end.
>
> **[0:56](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=56)** We're just going to do elseif and then in parentheses admin username, if that is exactly equal to admin password, well, then we've got a problem and we want to have an error there, I'm just going to copy this, save some typing, and let's say the user name and password must be different.
>
> **[1:29](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=89)** There we are.
>
> **[1:30](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=90)** So we'll just check and see, does admin username exactly equal admin password.
>
> **[1:34](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=94)** If it does, we'll raise an error.
>
> **[1:37](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=97)** And you could add your own customizations in this same way, in the same part of the code.
>
> **[1:41](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=101)** I want to give you two other ideas, but we won't actually add these to our project.
>
> **[1:45](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=105)** First, you could prohibit the reuse of passwords that the user has used in the past.
>
> **[1:51](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=111)** This has to be done carefully though, since we don't want to store passwords in plain text, even if they're old passwords.
>
> **[1:58](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=118)** Instead, you would store the hash of each previous password in the database.
>
> **[2:04](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=124)** Before a password can be updated, you would query that table, get back all previous passwords, or just the first 10 or first 20, whatever your rules are, and then run password verify using each one to see if any of them match, just like we did when someone was logging in.
>
> **[2:23](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=143)** If one does, then you would return an error like "Password can't be a password that you've used before" or "Password can't be one of the last five passwords you've used before".
>
> **[2:34](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=154)** Another idea is to prohibit using passwords that can be found in prior data breaches.
>
> **[2:40](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=160)** There's a website called "Have I Been Pwned?"
>
> **[2:43](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=163)** that's run by security researcher Troy Hunt.
>
> **[2:45](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=165)** Whenever a website is breached and those databases then show up on the dark web for people to use, Troy goes and gets a copy and uploads it to his database.
>
> **[2:55](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=175)** He has over 500 million passwords in his database, and he's given access to it to everyone by using an API.
>
> **[3:04](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=184)** You can go to this URL and find out more about how it works.
>
> **[3:07](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=187)** The basic idea is that you would take a potential password, you would hash it with a different hashing algorithm called SHA-1.
>
> **[3:16](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=196)** Then you would send the first five characters of that to his API, and it will return back results for passwords that have those same first five characters.
>
> **[3:26](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=206)** You'll probably get back about 500 different possibilities.
>
> **[3:30](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=210)** You'll then sort through those possibilities to see if any of those matched the full hash that you're working with.
>
> **[3:37](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=217)** It's a way of you not having to send the whole hash to him.
>
> **[3:40](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=220)** You just have to send a little bit of it.
>
> **[3:42](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=222)** He sends back what he has and you can, in privacy, go through them to see if there are any matches.
>
> **[3:48](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=228)** If you do find a match, it means that that password is in that set of 500 million passwords.
>
> **[3:55](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=235)** And why is that important?
>
> **[3:56](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=236)** Because those passwords are out there for hackers to use as a dictionary, to try those 500 million passwords first anytime they want to try and break into a website.
>
> **[4:07](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=247)** So you're going to be essentially on the list of frequent passwords if you use one of those.
>
> **[4:13](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=253)** There is one prevention that's not recommended, at least not anymore.
>
> **[4:17](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=257)** And that's not to require rotating passwords at certain periods of time.
>
> **[4:22](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=262)** Once a month, once every three months or so on.
>
> **[4:25](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=265)** It used to be recommended, but it's not anymore.
>
> **[4:28](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=268)** The reason lies that studies have been done that showed that it incentivizes creating weak passwords and there's little security gain to it.
>
> **[4:35](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=275)** Instead, let your users pick strong passwords and then stick with them.
>
> **[4:40](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=280)** Of course, you still do want to force a password change if there's any evidence of a compromise, but don't require it if there's not a reason to.
>
> **[4:48](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=288)** And last, I want to give you a good resource if you want to read more about this topic.
>
> **[4:52](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=292)** The National Institute of Standards and Technology, also known as NIST, has put out a report called "The Digital Identity Guidelines" that walks through all of these issues and talks about things like password complexity and password rotation.
>
> **[5:05](https://www.linkedin.com/learning/php-user-authentication/preventing-weak-passwords?u=76281980&t=305)** It's a great source if you want to read more on this topic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (3), [[Security]] (2), api (2), [[Microsoft Word|Word]] (1), data (1)
> **CLI Commands:** make (3), find (2)
> **Env Vars:** api (2), url (1), sha (1), nist (1)
> **UI Navigation:** go to (2)
> **Definitions:** means that (1), known as (1)
> **Analogies:** for example (1), just like (1)
> **Best Practices:** recommended (2)
> **Speakers:** - [instructor] (1)

#### Resetting forgotten passwords
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=0)** - [Instructor] In this movie, I want to talk about how you would reset someone's forgotten password.
>
> **[0:05](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=5)** The whole idea behind user authentication, as we've seen from the start, is about proving someone's identity online.
>
> **[0:12](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=12)** And we've established that credentials are one way that we can do that, the username and the password.
>
> **[0:17](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=17)** But if they've forgotten their password, then they've lost the ability to show that they are who they say they are.
>
> **[0:24](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=24)** So how do we know that they are who they say they are in order to let them pick a new password?
>
> **[0:30](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=30)** We still need to somehow authenticate them.
>
> **[0:34](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=34)** One way that some sites do that is with security challenge questions.
>
> **[0:38](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=38)** For example, what was the name of your first teacher?
>
> **[0:40](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=40)** What street did you live on?
>
> **[0:42](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=42)** These kinds of questions are not great.
>
> **[0:45](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=45)** First of all, they're often reused on multiple sites and it's often information that someone could research and figure out about someone.
>
> **[0:53](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=53)** So it's not a great way to prove that someone is who they say they are.
>
> **[0:57](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=57)** One way that some sites handle it is that they assume that the person's email is their identity.
>
> **[1:03](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=63)** If they have access to the email account, then they are who they say they are.
>
> **[1:07](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=67)** Now that's an assumption and it's not always a great one, but it's become very commonplace to assume that having access to your email is proof of who you say you are.
>
> **[1:16](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=76)** So we can send the user email in order to help them reset their forgotten password.
>
> **[1:22](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=82)** Don't send email with the new password though.
>
> **[1:26](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=86)** First of all, that would send out the password in plain text.
>
> **[1:30](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=90)** It could be intercepted, but even if it's not, the user may file that email away somewhere in their email system and that would keep a plain text copy in their email account.
>
> **[1:41](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=101)** Also, if we send them a new password, it means we probably have changed the existing password and they would lock out that old password immediately.
>
> **[1:51](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=111)** That's no big deal if you're using it legitimately, but imagine if I go and reset your password and it sends you an email, but it also immediately locks you out.
>
> **[2:02](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=122)** So you can't access it.
>
> **[2:04](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=124)** I could sit there and keep resetting your password over and over and over again.
>
> **[2:08](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=128)** And you would constantly be forced to go and change your password in order to have access again.
>
> **[2:14](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=134)** A better way to do it is to send email with a reset token.
>
> **[2:18](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=138)** This is very common, you've probably done it yourself many times.
>
> **[2:21](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=141)** They idea works like this.
>
> **[2:23](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=143)** The user makes a request to reset the password for a particular username.
>
> **[2:28](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=148)** The website should always respond positively because we don't even want to acknowledge if that username exists or not.
>
> **[2:34](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=154)** So we just say, yes, I will reset that username.
>
> **[2:37](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=157)** Now behind the scenes, if the username does exist, then we'll generate a unique token and we'll store it in the database with that user.
>
> **[2:46](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=166)** So we'd need an additional column in our database table to be able to do that.
>
> **[2:51](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=171)** We can also store the information like the time that the token was generated so that we could limit the time for its use.
>
> **[2:57](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=177)** So if it's only good for let's say an hour or only good for one day, and after that, the tokens no good.
>
> **[3:05](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=185)** Then we would send the user an email and that email would include a URL that has the token in it.
>
> **[3:12](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=192)** So it might be reset_password.php, question mark token equals, and then it would have a token string after it.
>
> **[3:21](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=201)** And clicking on that link would take us to the website to a special page that was all set up for resetting our password to something different.
>
> **[3:29](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=209)** So that URL wouldn't have any authentication control on it.
>
> **[3:33](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=213)** It would already know who the user is based on that token and would give them one time access to set their password.
>
> **[3:40](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=220)** The nice thing about this is that the account still keeps functioning up until the reset.
>
> **[3:45](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=225)** That token is there to give permission to reset.
>
> **[3:49](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=229)** But if the user comes and suddenly remembers their password and logs in no big deal, the account hasn't been locked out, the password hasn't been changed.
>
> **[3:57](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=237)** Another nice feature is that it is self serve.
>
> **[4:00](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=240)** It doesn't require customer service staff to help a user when they want to reset their password.
>
> **[4:06](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=246)** We're not going to implement this in php because parts like emailing are a little more complex than we can cover in this tutorial.
>
> **[4:12](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=252)** But I do want to just show you that if you want to create a security token, one good way to use it is to generate a random number, pass it into unique ID and pass that to the md5 hash algorithm.
>
> **[4:24](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=264)** You'll get back a string that looks something like this.
>
> **[4:27](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=267)** And you can then put that in the database.
>
> **[4:30](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=270)** And also in the URL that you send in an email to the user.
>
> **[4:34](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=274)** I'm sure there are some scenarios where this is not enough proof that authenticate that a user is who they say they are and should be allowed to reset their password.
>
> **[4:42](https://www.linkedin.com/learning/php-user-authentication/resetting-forgotten-passwords?u=76281980&t=282)** But in most cases, this pattern works really well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (3), [[Security]] (2), [[PHP]] (2), [[Tokens]] (1), feature (1)
> **Env Vars:** url (3)
> **CLI Commands:** php (2)
> **Analogies:** for example (1), imagine (1)
> **File Paths:** reset_password.php (1)
> **Code Identifiers:** reset_password (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Securing User Authentication

[↑ Back to Table of Contents](#table-of-contents)

#### Preventing IDOR
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=0)** - [Instructor] In this chapter, we're going to talk about how to secure user authentication and we're going to start by learning how to prevent IDOR.
>
> **[0:07](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=7)** IDOR is an abbreviation that's short for insecure direct object reference.
>
> **[0:12](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=12)** It's a fancy way for saying that we've forgotten to control access to a page or to a resource.
>
> **[0:18](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=18)** One example might be that if we had a store and at the end of the checkout process, we gave users a receipt and that URL for the receipt might look something like this.
>
> **[0:28](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=28)** Notice at the end it has RGB_59226.pdf.
>
> **[0:32](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=32)** That identifies my receipt.
>
> **[0:35](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=35)** What if I changed that last digit to be a five instead?
>
> **[0:39](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=39)** Would I see someone else's receipt?
>
> **[0:41](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=41)** Hopefully not, that would be an insecure direct object reference.
>
> **[0:46](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=46)** It doesn't just apply to e-commerce.
>
> **[0:48](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=48)** It can also apply to assets that are on the server or posted in the cloud and it will apply to our access control pages.
>
> **[0:56](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=56)** The reason why it's a problem is because it's easy to forget to add access control to a page.
>
> **[1:01](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=61)** Sure, we've got access controls on our pages right now, but what about when we add new pages to our site a few months from now?
>
> **[1:07](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=67)** Will we still remember to add the access control every single time?
>
> **[1:11](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=71)** There are a few strategies we can adopt to try to prevent IDOR.
>
> **[1:15](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=75)** One is simply to create processes, tests, and checklists to try to make sure that we don't forget.
>
> **[1:21](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=81)** You also can put your access control higher up in your code.
>
> **[1:25](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=85)** What I mean by that is instead of putting it on each page, have those pages inherit from something and you can put then your access control in that parent element so that they inherit the access control by default.
>
> **[1:40](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=100)** You can also implement an the allow list design.
>
> **[1:43](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=103)** Right now in our sample project, we've got a deny list design.
>
> **[1:47](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=107)** Our pages allow access by default.
>
> **[1:50](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=110)** They only deny access if we've remembered to put that access control on them.
>
> **[1:55](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=115)** An allow list design flips it around.
>
> **[1:57](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=117)** It denies access to pages by default and it only makes exceptions when we've listed them.
>
> **[2:03](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=123)** Let me show you what I mean.
>
> **[2:05](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=125)** So in our sample project in index.php, you can see we've got this require_login at the top that will make sure that someone is logged in.
>
> **[2:12](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=132)** And we've added the same thing to the admins, to index, and to new, and to show.
>
> **[2:17](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=137)** They all have this one little bit of code that will require a login.
>
> **[2:21](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=141)** That's our access control.
>
> **[2:23](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=143)** But if we create a new page, we might forget to put that there.
>
> **[2:27](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=147)** So let's take this code and let's move it higher up in the design.
>
> **[2:31](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=151)** Let's have it in an element that all of these pages are inheriting from.
>
> **[2:36](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=156)** There's a number of ways we could do that.
>
> **[2:37](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=157)** We could put it in initialize.php, that's one possibility.
>
> **[2:42](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=162)** But in that case, anything we put in the public area might also be subject to it.
>
> **[2:48](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=168)** We could make a special staffinitialize.php that might have it and that's certainly a valid approach.
>
> **[2:54](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=174)** I'm going to go with something simpler here.
>
> **[2:56](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=176)** They all are going to inherit from the staff header.
>
> **[2:59](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=179)** So right here at the top of the staff header, I'm just going to paste that line in.
>
> **[3:03](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=183)** So now anything that loads the staff header is going to require a login, it's that simple.
>
> **[3:09](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=189)** So let's save it.
>
> **[3:11](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=191)** Let's come back over here.
>
> **[3:12](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=192)** Let's go down here to index.php first and let's take this away.
>
> **[3:17](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=197)** So now it's not in index.php anymore.
>
> **[3:19](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=199)** Here we are in index.php.
>
> **[3:22](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=202)** Now I'm logged in so that wasn't a problem, let's log out.
>
> **[3:26](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=206)** Now we ran into an error there and we'll talk about that error in a minute.
>
> **[3:29](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=209)** For now, ignore it and let's just go back to index.php, and you'll see that it redirected us to login.php.
>
> **[3:36](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=216)** So it did still have an access control.
>
> **[3:39](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=219)** Even though we took it away, the fact that it was in the header redirected us to this page.
>
> **[3:44](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=224)** So why did we get this error?
>
> **[3:46](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=226)** Well, that's because the login page is also loading that staff header.
>
> **[3:50](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=230)** So the login page sees that you're not logged in and redirect you to the login page which sees that you're not logged in and redirects you to the login page, and you're stuck in an infinite loop.
>
> **[4:00](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=240)** So what we want to do now that we've moved it higher up is adopt this allow list approach.
>
> **[4:06](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=246)** Let's go to auth_functions.php and right here above require_login, let's add another function.
>
> **[4:14](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=254)** We're going to call it page_exempt_from_auth.
>
> **[4:21](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=261)** And what it will do is returns true if a page is in the allow list and is exempt from user authentication.
>
> **[4:37](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=277)** And I'm just going to make a simple array in here called no_auth_pages.
>
> **[4:42](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=282)** And inside that array, I'll put /staff/login.php.
>
> **[4:50](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=290)** And then we can check to see whether the current page is listed in that list.
>
> **[4:54](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=294)** If it is, we'll know it's exempt from the login.
>
> **[4:57](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=297)** So I'm eventually going to want to have return in_array and we'll test to see if the current page is in no_auth_pages, that's pretty straightforward.
>
> **[5:10](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=310)** It'll just return the result of that check.
>
> **[5:13](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=313)** So if it is in the array, it is not restricted.
>
> **[5:20](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=320)** Okay, but current page doesn't exist.
>
> **[5:22](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=322)** We've got to come up with that.
>
> **[5:23](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=323)** So what is the current page?
>
> **[5:26](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=326)** We could use a value that's in the server super global called script_name, and that will return back this part of the name.
>
> **[5:39](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=339)** Everything from here all the way to here.
>
> **[5:41](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=341)** That's the name of this script.
>
> **[5:43](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=343)** If it had a question mark after it, something equals true, right?
>
> **[5:48](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=348)** It would ignore that.
>
> **[5:49](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=349)** It would still just be this part.
>
> **[5:51](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=351)** So that's what script_name gives us, but I don't want a whole script_name.
>
> **[5:56](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=356)** What I want is just portion.
>
> **[5:58](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=358)** And over here in the private directory in initialize, WWW_ROOT is being defined is everything but that.
>
> **[6:08](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=368)** It's just this part.
>
> **[6:09](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=369)** So what we want to do is just go to auth_functions And on current page, what we want to do is use str_replace.
>
> **[6:18](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=378)** And we're going to target that string, but we're going to search for WWW_ROOT.
>
> **[6:23](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=383)** Replace it with nothing and then this is what we'll search.
>
> **[6:28](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=388)** So that's it, it's essentially just taking the bit of text we know is at the beginning, removing it so we get something that looks like this.
>
> **[6:35](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=395)** It'll check and see if it matches.
>
> **[6:36](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=396)** So let's save it and let's come down here and let's use it.
>
> **[6:39](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=399)** Now when a page is exempt_from_auth, come down here and we'll say and not exempt_from_auth.
>
> **[6:48](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=408)** So require_login if not is_logged_in and not page_exempt_from_auth.
>
> **[6:55](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=415)** If they are logged in, no problem.
>
> **[6:57](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=417)** If the page is exempt_from_auth, no problem.
>
> **[7:00](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=420)** It's only when both of those, when they're not logged in and it's not exempt_from_auth, we're going to send them to the login page.
>
> **[7:06](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=426)** Let's come back over here and reload it, and it works.
>
> **[7:09](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=429)** And if we go and actually log back in, 1234 password, it works there as well.
>
> **[7:17](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=437)** So now I've implemented an allow list model.
>
> **[7:19](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=439)** Everything is going to require the login if it requires that staff header.
>
> **[7:25](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=445)** The only exceptions will be ones that are explicitly listed inside no auth pages.
>
> **[7:31](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=451)** You could go through and you could remove the require_login from all of these the pages, but the way we implemented this isn't perfect.
>
> **[7:40](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=460)** You'll notice that staff header is actually called down here.
>
> **[7:43](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=463)** So that's where it's actually checking for the login.
>
> **[7:46](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=466)** It is possible to send a post request and submit a new admin to the database before it even checks that code.
>
> **[7:53](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=473)** So because of the way we did it, I'm actually going to leave the require_login here.
>
> **[7:57](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=477)** We could do something a little fancier, maybe something like staff_initialized.php where we said all right, anything that's in the staff area is always going to get it and it will do it right at the top of the page.
>
> **[8:09](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=489)** So instead some of these pages will just have some double protection on them.
>
> **[8:12](https://www.linkedin.com/learning/php-user-authentication/preventing-idor?u=76281980&t=492)** Hopefully you understand the concept and why we made these changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (11), [[Search]] (2), [[E-Commerce]] (1), cloud (1), database (1)
> **Code Identifiers:** require_login (5), exempt_from_auth (4), script_name (3), auth_functions (2), page_exempt_from_auth (2)
> **CLI Commands:** php (11), make (4)
> **File Paths:** index.php (5), initialize.php (1), staffinitialize.php (1), login.php (1), auth_functions.php (1)
> **Env Vars:** idor (3), www_root (2), url (1), rgb_59226 (1)
> **UI Navigation:** go to (2)
> **Definitions:** is an  (1), short for (1)
> **Best Practices:** remember to (1), don't forget (1)

#### Using HTTPS
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=0)** - [Instructor] Let's talk about the importance of using HTTPS.
>
> **[0:04](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=4)** HTTPS is HTTP that also uses a TLS or SSL certificate when communicating with a remote server, you may know it as the lock that you see on your browser when you visit many websites, it's purpose is to provide communication security.
>
> **[0:20](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=20)** It helps to verify the authenticity of the remote server and it encrypts all data that's exchanged with that server, which prevents snooping and prevents session hijacking.
>
> **[0:30](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=30)** It's easy to think about the connection between a browser and server as being a simple connection between two computers, but it doesn't work that way.
>
> **[0:37](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=37)** The internet is much more complex.
>
> **[0:40](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=40)** Instead when you send a request to a server, it travels through many computers on its way there.
>
> **[0:47](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=47)** And if the data that's being sent is not encrypted, it can allow someone along the way to spy on the information being sent such as the credentials that we're sending when we're logging in.
>
> **[0:58](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=58)** And when the server responds, it doesn't even respond along the same path.
>
> **[1:01](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=61)** It may take a different path And again, there's a spying opportunity here to see the data that the server is sending such as a session ID, which includes information about how to find the file that has our hand stamp in it.
>
> **[1:15](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=75)** The thing that shows that we're logged in.
>
> **[1:18](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=78)** So if someone were to capture that, they might be able to impersonate us.
>
> **[1:22](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=82)** HTTPS is essential for user authentication access control, but you really should be using it for all your pages and not just the login pages.
>
> **[1:30](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=90)** And there's no reason not to.
>
> **[1:31](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=91)** It's not that difficult to set up.
>
> **[1:33](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=93)** And very soon browsers are going to require it of all websites.
>
> **[1:38](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=98)** One way that you can set it up is to use let's encrypt.
>
> **[1:42](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=102)** This is an organization that's tried to make it as simple as possible to implement SSL certificates so that you can have HTTPS.
>
> **[1:49](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=109)** So they have a website that walks you through the process and the certificates are completely free.
>
> **[1:55](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=115)** So it's free and they try and take the pain out of as much as possible.
>
> **[1:59](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=119)** I also have a title in the library called SSL certificates for web developers that explains these issues and also walks you through it.
>
> **[2:07](https://www.linkedin.com/learning/php-user-authentication/using-https?u=76281980&t=127)** HTTPS is a good way to secure your user authentication as well as every page on your website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), [[Security]] (1), web (1)
> **Env Vars:** https (5), ssl (3), http (1), tls (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Protecting access tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=0)** - [Instructor] In this movie, let's talk about how to protect access tokens.
>
> **[0:04](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=4)** When I talk about access tokens, I'm talking about that hand stamp that we use to indicate that a user is logged in.
>
> **[0:10](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=10)** We store that indicator of authenticated access inside the session.
>
> **[0:16](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=16)** And that's typically data that's stored in a file on the server.
>
> **[0:20](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=20)** The way that the user is able to find that file is that we also store a file identifier in the user's browser cookie.
>
> **[0:27](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=27)** So every time a user makes a request to the website, it uses that identifier to find the session file and looks in the session file to see is this user logged in or not?
>
> **[0:36](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=36)** Well, because it's in the session, it's vulnerable to two types of attacks called session hijacking and session fixation.
>
> **[0:44](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=44)** I'm not going to go into detail about how those hacks work, but the bottom line is that an attacker could use the session to impersonate, a logged in user, essentially to piggyback on their logged in state.
>
> **[0:56](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=56)** So we want to protect our access tokens to make sure that doesn't happen.
>
> **[1:00](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=60)** One great way to do that is to use HTTPS.
>
> **[1:03](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=63)** Like we just talked about in the last movie.
>
> **[1:05](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=65)** Another thing we can do is to secure the cookies, used to store the session identifier by setting some configurations in our php.ini file.
>
> **[1:14](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=74)** We can set the session cookie lifetime to zero.
>
> **[1:17](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=77)** And that means that the cookie will only be good until the user's browser is closed.
>
> **[1:21](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=81)** We can set session cookie secure equals one.
>
> **[1:24](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=84)** And that means that the cookie will only be sent.
>
> **[1:26](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=86)** If the connection is using HTTPS, session.cookie HTTP only sounds like it might apply to that HTTP versus HTTPS, but it doesn't.
>
> **[1:38](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=98)** What that's saying is that Javascript should not have access to these cookies.
>
> **[1:43](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=103)** One way that they can get stolen is by letting JavaScript, get a hold of them.
>
> **[1:47](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=107)** And then session use only cookies set to one means that we want to only be able to get session identifiers from the cookies, not from a get variable or a post variable or anywhere else.
>
> **[1:59](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=119)** These are good settings to have as default in your php.ini file.
>
> **[2:03](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=123)** Another thing we can do is we can regenerate the session identifier before every login, because if someone else has somehow stolen our session identifier with every login, we'll create a new one and we'll give that to the user.
>
> **[2:17](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=137)** So the old one's no good anymore.
>
> **[2:19](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=139)** Let's see how to add that to our project.
>
> **[2:21](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=141)** The place that we want to do that is going to be inside auth functions when the user logs in.
>
> **[2:27](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=147)** So right here is a great place to do it.
>
> **[2:29](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=149)** When a user logs in, we call login admin.
>
> **[2:31](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=151)** So right there, before we do anything else, before we start working with a session let's call session regenerate ID, that's a built-in PHP method, and that will regenerate the session ID and prevent session fixation attacks.
>
> **[2:49](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=169)** That's it, that's all we have to do.
>
> **[2:51](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=171)** It's a simple but powerful fix.
>
> **[2:53](https://www.linkedin.com/learning/php-user-authentication/protecting-access-tokens?u=76281980&t=173)** Now, as soon as we log in that ID is no longer being used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (3), [[PHP]] (3), [[JavaScript]] (2), data (1)
> **CLI Commands:** php (3), find (2), make (1)
> **Env Vars:** https (3), http (2), php (1)
> **Definitions:** means that (3), is a  (1)
> **File Paths:** php.ini (2)
> **Cross-References:** in the last (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### Keeping track of logins
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=0)** - [Instructor] Another way you can secure your user authentication is by keeping track of logins.
>
> **[0:06](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=6)** For example, you might record the successful logins, the failed login attempts, and then the user log outs.
>
> **[0:13](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=13)** You could log those to a simple file that you could review, especially if things went wrong, you could try and figure out who was logged in at the time or even more useful.
>
> **[0:22](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=22)** It's probably to log it to a database so that you could actually query for particular users, particular time periods.
>
> **[0:28](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=28)** You could get really fancy and write code to see who's currently logged in.
>
> **[0:33](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=33)** Who's logged in for a certain amount of time, and who's not yet logged out.
>
> **[0:37](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=37)** You also could keep track of failed login attempts so that you can impose a waiting period before the user can try again.
>
> **[0:44](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=44)** So let's say that a user tries to enter a password and they failed 10 times.
>
> **[0:49](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=49)** After the 10th time, we might be start to be concerned that this is actually someone trying to attack the website and guess so let's make them wait five or 10 minutes before we let them try again.
>
> **[1:00](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=60)** It doesn't have to be a lot of times I wouldn't make it longer 30 minutes or an hour.
>
> **[1:04](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=64)** It doesn't need to be.
>
> **[1:05](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=65)** The idea is just to add a cost to an attacker, but at the same time, not make it an unreasonable amount of time.
>
> **[1:12](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=72)** If it's a legitimate user, who's just having trouble.
>
> **[1:16](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=76)** You also could require re-authentication after a certain time period.
>
> **[1:20](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=80)** To do that, you'd have to keep track of when the user logged in.
>
> **[1:23](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=83)** So you'd know how long they'd been logged in.
>
> **[1:25](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=85)** You might force them to re-log in once a day, once a week, once a month, every quarter, it's really up to you.
>
> **[1:33](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=93)** And along those same lines, you can require re-authentication before you allow users to perform highly sensitive actions.
>
> **[1:40](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=100)** I wouldn't overuse this.
>
> **[1:41](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=101)** Most of the time, a regular login should be enough, but let's say you've got a website and there's some destructive option that lets you just delete a whole lot of information.
>
> **[1:51](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=111)** Maybe it's a whole project, and there's all sorts of stuff attached to it.
>
> **[1:55](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=115)** That's a pretty significant thing.
>
> **[1:56](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=116)** And that's the kind of thing where we might want to stop and say is this person really who we think it is before we let them do this?
>
> **[2:02](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=122)** Let's have them re-authenticate.
>
> **[2:05](https://www.linkedin.com/learning/php-user-authentication/keeping-track-of-logins?u=76281980&t=125)** Keeping track of log-ins and information about those logins is a good way to give you visibility into your app, and also control the activities of the users that are currently working in it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Expiring logins
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980&t=0)** - It's time for another challenge assignment.
>
> **[0:07](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980&t=7)** And this challenge is based on something we talked about in the last movie.
>
> **[0:11](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980&t=11)** The challenge is to expire user log ins, after a certain period of time.
>
> **[0:16](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980&t=16)** To do that, when a user logs in, you need to either record the time that they log in, or you need to set an expiration time which the login will no longer be good.
>
> **[0:27](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980&t=27)** And then your code should answer the question, is the user logged in and is that login, within the allowed time still?
>
> **[0:36](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980&t=36)** That's what you want to be able to test.
>
> **[0:38](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980&t=38)** I'll give you a hint.
>
> **[0:39](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980&t=39)** You'll be working in the file of function.php.
>
> **[0:43](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980&t=43)** That's enough for you to complete the challenge assignment, but I want to give you one more thing to think about.
>
> **[0:48](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980&t=48)** What if the time expires while a user is working?
>
> **[0:53](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980&t=53)** Imagine for example, that a worker comes and logs into your website at eight o'clock in the morning, and it expires one day later.
>
> **[1:02](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980&t=62)** The next day they come in just a few minutes earlier and they start working at 7.55.
>
> **[1:06](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980&t=66)** They're still logged in because 24 hours haven't expired.
>
> **[1:10](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980&t=70)** What happens if five minutes later while they're working, the time suddenly ticks over so that now it's past the time of their login?
>
> **[1:18](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980&t=78)** Just give us some thought as you're designing the site.
>
> **[1:21](https://www.linkedin.com/learning/php-user-authentication/challenge-expiring-logins?u=76281980&t=81)** We'll talk about that in the next movie where I will also show you the solution that I came up with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), [[PHP]] (1)
> **Cross-References:** we talked about (1), in the last (1), in the next (1)
> **Analogies:** imagine (1), for example (1)
> **File Paths:** function.php (1)
> **CLI Commands:** php (1)
> **Versions:** 7.55 (1)
> **Speakers:** - it (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Expiring logins
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=0)** - [Instructor] I hope that you were able to complete this challenge assignment.
>
> **[0:08](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=8)** Now, let me show you the solution that I came up with.
>
> **[0:11](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=11)** The first thing I knew I needed to do was record the time that the user was logging in, so log_in_admin is a great place to do that.
>
> **[0:18](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=18)** While I'm setting the admin_id and the username, I'm also going to go ahead and just store the last_login in the session, as well, and I can just use PHP's time to do that.
>
> **[0:28](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=28)** I also wanted to adopt a second strategy, which was to set a value for when the login ought to expire.
>
> **[0:35](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=35)** And to do that, I used a different time method from PHP, strtotime.
>
> **[0:40](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=40)** So it takes a simple plain text explanation of the time and converts it into a timestamp that resembles the time.
>
> **[0:47](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=47)** Here, I said one day later at midnight.
>
> **[0:50](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=50)** So that would be tonight, essentially, tonight at midnight.
>
> **[0:54](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=54)** Then the next thing I did was I went to log_out_admin, and I just cleared those two values out and unset them whenever the user logs out.
>
> **[1:01](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=61)** We don't need them anymore if they're logged out.
>
> **[1:04](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=64)** Then I implemented two methods here.
>
> **[1:06](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=66)** The first is last_login_is_recent, and it returns true if the last_login is still inside that allowed time.
>
> **[1:15](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=75)** So I set max_elapsed = 60 X 60 X 24, so that's 60 seconds, 60 minutes, 24 hours, and that equals 1 day.
>
> **[1:26](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=86)** Now, if it's not set at all, we return false because the last_login is obviously not recent.
>
> **[1:31](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=91)** If it is set, though, then we'd take that value of the last_login, plus the maximum time elapsed and see, is it greater than or equal to the current time, the time that this is being called.
>
> **[1:44](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=104)** If it is, then we know that the last_login is still recent.
>
> **[1:48](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=108)** Time now has not gone past that max_elapsed time.
>
> **[1:53](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=113)** The other approach is to check and see if the login is still valid by checking this login_expires.
>
> **[1:59](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=119)** If it's not set, then we return false, but if not, then we just check to see, is login_expires greater than the current time.
>
> **[2:06](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=126)** Is it greater being further in the future, and if it is, then we know we haven't reached the expiration yet.
>
> **[2:12](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=132)** Now, we could use either one of these inside our logic that figures out whether someone is logged in or not, and I'm going to do that inside is_logged_in.
>
> **[2:22](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=142)** I chose login_is_still_valid, and the reason why is the thing that I alluded to in the challenge, which is that if we just use last_login_is_recent, it's a hard stop.
>
> **[2:33](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=153)** 24 hours after the moment that the user logged in, they're logged out.
>
> **[2:38](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=158)** By using the login_ expires, I was able to put it at a more friendly hour.
>
> **[2:43](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=163)** I said, "You know, it's not 24 hours.
>
> **[2:46](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=166)** It's whatever it takes to get to midnight."
>
> **[2:48](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=168)** And I could have easily set it to be 2 AM or 4 AM or something else.
>
> **[2:53](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=173)** But I tried to pick a friendly time when the user was not working.
>
> **[2:57](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=177)** Now, it's still possible the user would be working at midnight and would suddenly find themselves logged out and have to log back in.
>
> **[3:04](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=184)** But I decided that that was a better approach than maybe having someone logged out suddenly at 10 AM in the morning.
>
> **[3:10](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=190)** So this is going to put it at a friendly time at midnight, and so that's what I'm going to use here.
>
> **[3:15](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=195)** So is_logged_in is if the hand stamp is there and the login is still valid.
>
> **[3:21](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=201)** If those things are true, then we're going to consider them logged in.
>
> **[3:26](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=206)** Especially down here, require_login, when it checks to see is_logged_in.
>
> **[3:30](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=210)** If those aren't both true, if it's not set, or if the login is not valid, then we're going to get redirected to that login page, and we'll have to reauthenticate.
>
> **[3:40](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=220)** There are other ways that you could approach this problem, I think these are probably two of the simplest and most commonly used ones.
>
> **[3:46](https://www.linkedin.com/learning/php-user-authentication/solution-expiring-logins?u=76281980&t=226)** I find this one to be a little bit more user-friendly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), next (1)
> **Code Identifiers:** last_login (5), is_logged_in (3), last_login_is_recent (2), max_elapsed (2), login_expires (2)
> **CLI Commands:** php (2), find (2)
> **Env Vars:** php (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/php-user-authentication/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-user-authentication/next-steps?u=76281980&t=0)** - [Kevin] I would like to thank you for taking PHP user authentication with me.
>
> **[0:04](https://www.linkedin.com/learning/php-user-authentication/next-steps?u=76281980&t=4)** I hope that you've learned new skills and you're able to add user authentication and access controls to your own projects.
>
> **[0:10](https://www.linkedin.com/learning/php-user-authentication/next-steps?u=76281980&t=10)** There's more you can do to improve the security of your website.
>
> **[0:13](https://www.linkedin.com/learning/php-user-authentication/next-steps?u=76281980&t=13)** I have some other courses in the library that can help.
>
> **[0:16](https://www.linkedin.com/learning/php-user-authentication/next-steps?u=76281980&t=16)** Web security user authentication and access control, programming foundations web security, and PHP creating secure websites.
>
> **[0:25](https://www.linkedin.com/learning/php-user-authentication/next-steps?u=76281980&t=25)** The first two are general discussions, suitable for any programming language.
>
> **[0:29](https://www.linkedin.com/learning/php-user-authentication/next-steps?u=76281980&t=29)** The third one is specific to PHP and includes code examples.
>
> **[0:33](https://www.linkedin.com/learning/php-user-authentication/next-steps?u=76281980&t=33)** I wish you luck in all your projects.
>
> **[0:35](https://www.linkedin.com/learning/php-user-authentication/next-steps?u=76281980&t=35)** And until next time, happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), [[Security]] (3), web (2), [[Programming Foundations]] (1), [[Programming]] (1)
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