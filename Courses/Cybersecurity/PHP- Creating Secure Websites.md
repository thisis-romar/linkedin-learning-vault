---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: php-creating-secure-websites-8399320
url: "https://www.linkedin.com/learning/php-creating-secure-websites-8399320"
duration_minutes: 82
duration: 1h 22m
level: Advanced
updated: 3/23/2021
learners: 35332
skills:
  - PHP
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFFV2cGNYia4A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1616177761384?e=2147483647&amp;v=beta&amp;t=Y_crBk_mMH-JmxD_gjR55O4Zu2wl4_lQkWLDpLZZ03E"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Advance Your PHP Skills]]'
prev_courses:
  - '[[PHP Techniques- Working with Files and Directories]]'
next_courses:
  - '[[PHP- User Authentication]]'
path_nav: '[{"path":"Advance Your PHP Skills","position":4,"total":7,"prev":"PHP Techniques- Working with Files and Directories","next":"PHP- User Authentication"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/software-development
  - topic/web-development
  - skill/php
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/PHP-%20Creating%20Secure%20Websites.md)

![PHP: Creating Secure Websites](https://media.licdn.com/dms/image/v2/C4E0DAQFFV2cGNYia4A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1616177761384?e=2147483647&amp;v=beta&amp;t=Y_crBk_mMH-JmxD_gjR55O4Zu2wl4_lQkWLDpLZZ03E)

# PHP: Creating Secure Websites

> Hackers target PHP web applications more often than other sites because most PHP code is written by developers with little security experience. Protecting web applications from these attacks has become an essential skill for all PHP developers. PHP: Creating Secure Websites shows you how to meet the most important security challenges when developing websites with PHP. Instructor Kevin Skoglund cov

> [LinkedIn Learning](https://www.linkedin.com/learning/php-creating-secure-websites-8399320) | 1h 22m | Advanced | 35K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [The need for security with PHP](#the-need-for-security-with-php)
- [**1. Security Overview**](#1-security-overview) (3 videos)
  - [What is security?](#what-is-security)
  - [Security and PHP](#security-and-php)
  - [General security principles](#general-security-principles)
- [**2. Securing Your PHP Installation**](#2-securing-your-php-installation) (5 videos)
  - [Keeping versions up to date](#keeping-versions-up-to-date)
  - [phpinfo and phpMyAdmin](#phpinfo-and-phpmyadmin)
  - [Configure error reporting and logging](#configure-error-reporting-and-logging)
  - [Other configuration options](#other-configuration-options)
  - [PHP on a shared host](#php-on-a-shared-host)
- [**3. Filtering Input and Controlling Output**](#3-filtering-input-and-controlling-output) (5 videos)
  - [Validating input](#validating-input)
  - [Sanitizing data](#sanitizing-data)
  - [Keeping code private](#keeping-code-private)
  - [Smart logging](#smart-logging)
  - [Cookie configuration](#cookie-configuration)
- [**4. Defending the Most Common Attacks**](#4-defending-the-most-common-attacks) (6 videos)
  - [Cross-site scripting (XSS)](#cross-site-scripting-xss)
  - [Cross-site request forgery (CSRF)](#cross-site-request-forgery-csrf)
  - [SQL injection](#sql-injection)
  - [Session hijacking and fixation](#session-hijacking-and-fixation)
  - [Remote system execution](#remote-system-execution)
  - [PHP code injection](#php-code-injection)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The need for security with PHP](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/the-need-for-security-with-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/the-need-for-security-with-php?u=76281980&t=0)** - [Kevin] All developers should learn the fundamentals of security.
>
> **[0:03](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/the-need-for-security-with-php?u=76281980&t=3)** This course will teach developers how to think about security in [[PHP]] and will provide practical solutions to protect PHP websites from the most common security threats.
>
> **[0:12](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/the-need-for-security-with-php?u=76281980&t=12)** This course is intended for developers who already know the fundamentals of PHP and want to learn how to avoid common and costly mistakes in their code.
>
> **[0:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/the-need-for-security-with-php?u=76281980&t=20)** We'll begin with an overview of the general security principles that should guide PHP development.
>
> **[0:24](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/the-need-for-security-with-php?u=76281980&t=24)** Then we'll learn about best practices for configuring PHP and for securing the input and output to a web application.
>
> **[0:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/the-need-for-security-with-php?u=76281980&t=30)** And we will walk through the most common types of attacks so that we can look at strategies and actual PHP code to prevent them from doing harm.
>
> **[0:38](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/the-need-for-security-with-php?u=76281980&t=38)** You can incorporate these strategies and functions into your PHP projects as we go along or just sit back and watch.
>
> **[0:44](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/the-need-for-security-with-php?u=76281980&t=44)** My name is Kevin Skoglund.
>
> **[0:46](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/the-need-for-security-with-php?u=76281980&t=46)** I'm a web developer who's been using PHP for over 20 years.
>
> **[0:49](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/the-need-for-security-with-php?u=76281980&t=49)** Let's get started learning how to create more secure websites with PHP.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (9)
> **CLI Commands:** php (9)
> **Env Vars:** php (9)
> **Speakers:** - [kevin] (1)


### 1. Security Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [What is security?](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=0)** - [Instructor] Before we dive into learning how to secure our [[PHP]] code, let's first talk about what security is.
>
> **[0:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=6)** For [[Web Development]], security means keeping your web server and its applications protected or safe from harm.
>
> **[0:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=13)** Who are we trying to protect it from?
>
> **[0:15](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=15)** Well, mostly hackers.
>
> **[0:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=16)** Now it's important to clarify that the term hacker does not have to have a negative meaning.
>
> **[0:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=20)** Hackers can also be good guys.
>
> **[0:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=22)** There are people who like to tinker with things and try to modify them to build something new.
>
> **[0:26](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=26)** But those aren't the hackers we need to protect our code from.
>
> **[0:28](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=28)** We're going to be concerned with the kind of hacker who has malicious intentions.
>
> **[0:32](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=32)** They want to break into our site to get private data.
>
> **[0:34](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=34)** They may want a free subscription to your service or to harvest email addresses and credit card numbers or maybe they want to take control of your web server so that it can do their bidding.
>
> **[0:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=43)** There are many security issues associated with keeping a web server safe.
>
> **[0:47](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=47)** Security is a really big topic.
>
> **[0:49](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=49)** Most of those general security issues are going to be beyond the scope of this course.
>
> **[0:53](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=53)** We're going to focus exclusively on how developers can secure PHP applications.
>
> **[0:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=58)** Our goal is for our PHP code not to be the weak link in our server security.
>
> **[1:03](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=63)** And it's a great place to start improving security because the application code is the cause of many security breaches.
>
> **[1:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=69)** In order to protect against something, we need to first be aware of all of the risks and the pitfalls.
>
> **[1:14](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=74)** That's the only way we can assert that something is secure once we've surveyed the potential problems and we know that we have the proper safeguards in place.
>
> **[1:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=82)** This can be expressed as a simple equation, awareness plus protection equals security.
>
> **[1:28](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=88)** Awareness and protection are equally important parts.
>
> **[1:31](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=91)** What you don't know can hurt you.
>
> **[1:34](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=94)** In this training, we will briefly review the security challenges that you'll face before we focus our efforts on crafting solutions in PHP.
>
> **[1:41](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=101)** Two other training titles in the library can provide a deeper explanation of the how and why hackers use certain attacks, [[[[Programming Foundations]]- Web Security]] and Web Security: User Authentication and Access Control.
>
> **[1:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=114)** These courses focus on awareness of the security issues.
>
> **[1:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=118)** This course focuses on the solutions to protect you all written for PHP.
>
> **[2:02](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=122)** You need both for security.
>
> **[2:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=124)** You need knowledge and you need action, awareness and protection.
>
> **[2:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=129)** So how much security do you need?
>
> **[2:11](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=131)** First, it's important to keep in mind that total security is unachievable but we don't actually need 100% security.
>
> **[2:17](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=137)** Our level of security should be in proportion to our needs and goals.
>
> **[2:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=142)** As an example, if I have a $100 bill, I don't need to construct a high security vault to protect it.
>
> **[2:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=147)** I can put it in my house, lock the doors and be happy with that level of security.
>
> **[2:31](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=151)** But if I have $100 million, then I probably wouldn't just trust the locks on my house.
>
> **[2:35](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=155)** I'd want to install a top of line security system and I'd be willing to invest time and money to set that up.
>
> **[2:41](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=161)** I also recommend executing the security that you actually need really well rather than thinking about a breadth of coverage.
>
> **[2:48](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=168)** Having coverage in more areas instead of focused strong security in the areas that matter the most is a bad trade off.
>
> **[2:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=174)** Security is measured by the weakest link in the chain not by the length of the chain.
>
> **[2:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=178)** So you'll need to decide what levels of security you need and then you'll want to reevaluate that level periodically.
>
> **[3:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=184)** Our security has to evolve.
>
> **[3:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=186)** The world evolves and our own usage and goals will evolve.
>
> **[3:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=189)** Computer power is increasing.
>
> **[3:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=190)** Connectivity between systems is increasing.
>
> **[3:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=193)** More valuable information and processes are being moved online.
>
> **[3:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=196)** And as a result, security measures that were considered strong five or 10 years ago are considered weak today.
>
> **[3:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=202)** It's important to realize that security isn't something that you can just address once and never have to think about again.
>
> **[3:28](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/what-is-security?u=76281980&t=208)** It has to become part of your mindset, something that you think about all the time while you're writing your code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (5), [[Web Development]] (1), [[Programming Foundations]] (1)
> **CLI Commands:** php (5)
> **Env Vars:** php (5)
> **Definitions:** is a  (2)
> **Warnings:** be aware (1), keep in mind (1)
> **Prerequisites:** install (1), you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Security and PHP](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=0)** - [Instructor] Security is an essential skill for all [[PHP]] developers to learn.
>
> **[0:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=4)** Hackers can target any server, but web applications are the most frequently targeted.
>
> **[0:08](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=8)** That's because most websites are available to the general public and that makes them visible and accessible.
>
> **[0:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=13)** If we could simply lock the doors to the public, it sure would make it easier to keep the hackers out.
>
> **[0:17](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=17)** Plus many modern websites are backed by [[Databases]], which collect and store personal data, names, addresses, emails, credit cards, date of birth.
>
> **[0:25](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=25)** All that personal data is valuable.
>
> **[0:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=27)** There's a large black market for buying and selling personal information, and that makes web applications a juicy target.
>
> **[0:33](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=33)** PHP applications are often targeted because PHP is a popular language used worldwide.
>
> **[0:39](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=39)** It's used in popular open source applications like [[WordPress]].
>
> **[0:42](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=42)** Another problem is that PHP is also an easy programming language for beginners to learn.
>
> **[0:47](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=47)** Many beginners graduate from [[HTML]] and CSS to using little bits of PHP code.
>
> **[0:52](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=52)** I know that I did, but these beginners may not appreciate the security concerns that PHP code adds.
>
> **[0:57](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=57)** That was me too.
>
> **[0:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=58)** I learned PHP long before I learned about security.
>
> **[1:01](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=61)** Hackers can count on those beginners to make beginner mistakes, and PHP has some easy mistakes to exploit.
>
> **[1:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=67)** Just a simple configuration setting in your PHP.INI file can leave a door open to a hacker.
>
> **[1:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=73)** If you run a small, low profile website, please don't think that security is a minor concern for you.
>
> **[1:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=79)** Small sites are targeted almost as often as large sites.
>
> **[1:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=82)** Hackers know that security can be weaker on small sites, and many hacking attempts are not even made by a live person, they're made by an automated script, which doesn't discriminate.
>
> **[1:32](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=92)** Often, the script just moves through a series of IP addresses looking for any site that might be vulnerable.
>
> **[1:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=97)** PHP frameworks are one way to help.
>
> **[1:40](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=100)** A framework is a library of PHP code that has many common behaviors already built-in.
>
> **[1:45](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=105)** That built-in code often follows security best practices.
>
> **[1:50](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=110)** A good framework will force you to code in a safe way and discourage you from creating vulnerabilities.
>
> **[1:56](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=116)** A framework is also used by many people, which usually means that the code has been better tested than any code that you write yourself.
>
> **[2:03](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=123)** It's less likely to have hidden security problems.
>
> **[2:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=126)** I'm not saying you need to use a PHP framework.
>
> **[2:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/security-and-php?u=76281980&t=129)** They don't do anything that you can't do for yourself, but a framework is a good way for beginners to get off on the right foot and to benefit from the experience of others, whether you use a framework or whether you choose to write your own code In this course, we're going to talk about the real-world solutions that you can use to make sure you're writing smart PHP code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (13), [[Databases]] (1), [[WordPress]] (1), [[HTML]] (1)
> **CLI Commands:** php (13), make (3)
> **Env Vars:** php (13), html (1), css (1), ini (1)
> **Definitions:** is a  (4), is an  (1), means that (1)
> **File Paths:** php.ini (1)
> **Speakers:** - [instructor] (1)

#### [General security principles](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=0)** - [Narrator] Let's quickly review the primary security principles.
>
> **[0:03](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=3)** These principles are covered in more depth in the course I mentioned earlier, [[[[Programming Foundations]]- Web Security]].
>
> **[0:08](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=8)** The first principle is called least privilege.
>
> **[0:11](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=11)** The principle of least privilege means giving a user account only those privileges that are essential to that user's work and nothing more.
>
> **[0:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=19)** Users in [[Human Resources (HR)|human resources]] shouldn't be able to see accounting information, and users in accounting shouldn't be able to see human resources information.
>
> **[0:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=27)** But we're not just talking about user privileges.
>
> **[0:29](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=29)** Code has access privileges too.
>
> **[0:31](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=31)** Code should limit which functions are exposed for other code to use.
>
> **[0:36](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=36)** The second principle is that simple is more secure.
>
> **[0:39](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=39)** The larger and more complex that a system becomes, the harder it becomes to secure it.
>
> **[0:44](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=44)** Larger systems have more areas of concern, and more complex systems increase the likelihood of bugs or making mistakes.
>
> **[0:51](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=51)** The third principle is never to trust users.
>
> **[0:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=54)** You should be paranoid.
>
> **[0:55](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=55)** Most users aren't hackers, but some are, and it's tough to tell the difference.
>
> **[0:59](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=59)** That applies to the general public as well as to employees, admin users, and contractors.
>
> **[1:05](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=65)** The fourth principle is to expect the unexpected.
>
> **[1:08](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=68)** Security's not reactive.
>
> **[1:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=70)** Our goal is to try and prevent the crime before it happens.
>
> **[1:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=73)** In order to do that, you're going to want to consider all the unexpected things that might happen.
>
> **[1:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=78)** What might a user try to do?
>
> **[1:21](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=81)** How might users try and get around your security?
>
> **[1:23](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=83)** You want to be creative as you try to expect the unexpected.
>
> **[1:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=87)** The next principle is defense in depth.
>
> **[1:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=90)** You want layers of defenses, redundant security.
>
> **[1:33](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=93)** Then, if one of your security layers is breached, there's another layer behind it to offer protection.
>
> **[1:38](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=98)** It includes thinking about how your organization's people, technology, and operations can work together to create a secure environment.
>
> **[1:46](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=106)** The next principle is security through obscurity.
>
> **[1:49](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=109)** More information benefits hackers who are trying to get into your site, so you want to limit the amount of exposed information.
>
> **[1:55](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=115)** Limit the amount of feedback that you give them.
>
> **[1:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=118)** A good example is a website's log-in form.
>
> **[2:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=120)** If a user submits a wrong username and password, saying which one is wrong can help a hacker to find a working username and then find a working password.
>
> **[2:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=130)** It's better to keep those clues to yourself.
>
> **[2:12](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=132)** Of course, you don't want to ever depend on security through obscurity alone.
>
> **[2:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=136)** It's just one layer of your defense in depth.
>
> **[2:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=138)** Allow and deny lists are important security tools.
>
> **[2:21](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=141)** An allow list is a list of what's permitted, and a deny list is a list of what's forbidden.
>
> **[2:28](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=148)** If a database server is only expecting connections from the web server, the IP address of the web server can be checked against an allow list.
>
> **[2:35](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=155)** If a hacker keeps attacking a website, then their IP address can be added to a deny list.
>
> **[2:41](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=161)** These two concepts are opposites, but they're not equal.
>
> **[2:44](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=164)** An allow list restricts most actions by default.
>
> **[2:48](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=168)** A deny list allows most actions by default and only rejects the few that match select cases.
>
> **[2:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=174)** Using an allow list is going to be the more secure approach.
>
> **[2:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=178)** Last of all, you want to map the exposure points and data passageways in your application.
>
> **[3:03](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=183)** Think about the incoming data through URLs, [[Forms]], cookies, sessions, and the outgoing data, what goes out to the user as [[HTML]] or [[JavaScript]].
>
> **[3:12](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=192)** Consider what paths data takes as it travels from a user through the application and into the database and the path that takes back from the database to the application and to the user.
>
> **[3:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=202)** Remember our equation: awareness plus protection equals security.
>
> **[3:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=207)** We need awareness of an application to know where our points of vulnerability might be.
>
> **[3:32](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/general-security-principles?u=76281980&t=212)** These general security principles are the underpinning that's going to guide the choices we'll make in the upcoming chapters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Human Resources (HR)|Human resources]] (2), [[Programming Foundations]] (1), [[Forms]] (1), [[HTML]] (1), [[JavaScript]] (1)
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** html (1)
> **Speakers:** - [narrator] (1)


### 2. Securing Your PHP Installation

[↑ Back to Table of Contents](#table-of-contents)

#### [Keeping versions up to date](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=0)** - [Instructor] The first step in securing your [[PHP]] installation is to keep all of your software versions up to date.
>
> **[0:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=6)** Keeping software versions up to date is the easiest and most important security measure that you can take.
>
> **[0:11](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=11)** It's easy to do but that doesn't mean it will be easy to stay on top of it.
>
> **[0:15](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=15)** It requires an ongoing commitment from you.
>
> **[0:17](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=17)** You can't simply install all the software, launch the website, and then walk away and have it be secure.
>
> **[0:23](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=23)** There are most likely bugs in the software that you're using that you don't know about and that you can't know about.
>
> **[0:28](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=28)** Those bugs will be discovered over time, either by the good guys or by the bad guys.
>
> **[0:33](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=33)** And when they are, those bugs will get fixed.
>
> **[0:36](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=36)** That's why updating to the new version matters so much.
>
> **[0:39](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=39)** New versions include bug fixes and security patches that you need.
>
> **[0:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=43)** By the time these security issues get fixed, I guarantee you that the bad guys know about them and are ready to use them against you if you haven't upgraded.
>
> **[0:50](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=50)** This applies to PHP as well as to other software that you're using.
>
> **[0:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=54)** Your web server, database, libraries of code, and code from third parties, especially frameworks or open source applications like [[WordPress]].
>
> **[1:02](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=62)** You should also make sure that all of your servers are kept on the same latest versions of the [[Hardware]].
>
> **[1:08](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=68)** Of course, you'll test new versions on a development server before you put them into production.
>
> **[1:11](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=71)** But as quickly as possible, you want all of the servers using the same patched version.
>
> **[1:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=76)** It'd be a real shame if you had a security issue in production that you didn't notice because your development server was running a newer version with that issue fixed.
>
> **[1:24](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=84)** It's more advanced but if you write good software tests, they can also make upgrading versions easier and it's a good idea to find ways to find out about updates.
>
> **[1:33](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=93)** Maybe you subscribe to email lists or you follow Twitter users and then you'll know when new versions become available.
>
> **[1:40](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=100)** The best way to find the latest version of PHP is on the [php.net](https://php.net) website.
>
> **[1:45](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=105)** The latest version and information about upgrading is in the upper right hand corner.
>
> **[1:49](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=109)** The homepage also has information about each release.
>
> **[1:52](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=112)** If you click on the change log, you can see a list of all of the improvements and fixes that were made.
>
> **[1:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=118)** Remember, hackers can see this list too.
>
> **[2:01](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=121)** So if you haven't upgraded, you may be vulnerable.
>
> **[2:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=124)** Before you do anything else to improve your security, make it a regular habit to keep your PHP installation updated.
>
> **[2:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-versions-up-to-date?u=76281980&t=130)** It may sound simple but it has a big impact on your security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (5), [[WordPress]] (1), [[Hardware]] (1)
> **CLI Commands:** php (5), make (3), find (3)
> **Env Vars:** php (4)
> **URLs:** [php.net](https://php.net) (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [phpinfo and phpMyAdmin](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=0)** - [Instructor] phpinfo and phpMyAdmin are useful tools, but it's essential that you keep them secure.
>
> **[0:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=7)** A phpinfo file is simply a [[PHP]] file that calls the built-in function phpinfo.
>
> **[0:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=13)** When accessed through the browser, it reports a lot of useful information about how the server has been set up, what's installed, and all the configurations that PHP uses.
>
> **[0:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=22)** When we're first setting everything up, it can be really useful.
>
> **[0:24](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=24)** What you don't want is for this information to stick around so that others have access to it besides you.
>
> **[0:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=30)** Leaving the file where the public can get to it is a rookie mistake.
>
> **[0:34](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=34)** You also need to be careful with phpMyAdmin.
>
> **[0:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=37)** phpMyAdmin is a third-party application that gives access to a [[MySQL]] database using a browser.
>
> **[0:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=43)** I mention PHP admin here, even though it's a third-party application, because it's very popular.
>
> **[0:49](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=49)** Some PHP installations come with it built-in.
>
> **[0:52](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=52)** It should be obvious why you want to keep this hidden.
>
> **[0:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=54)** It gives access to all of your database data through a browser.
>
> **[0:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=58)** My web server access logs show many attempts to find these two items.
>
> **[1:02](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=62)** You may use them for development, but try to keep both of them off your production server.
>
> **[1:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=67)** If you must use them on a public server, then at a minimum, a password should be required.
>
> **[1:12](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=72)** If you're using Apache as your web server, you could use a htaccess file in order to protect an entire directory, or phpMyAdmin includes an HTTP authentication mode that requires a username and password before you can get access to phpMyAdmin.
>
> **[1:28](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=88)** The phpMyAdmin documentation also includes helpful tips on how to secure your installation.
>
> **[1:35](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=95)** I recommend that you take a look.
>
> **[1:36](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=96)** The first of the main steps are to remove the setup directory after the initial setup.
>
> **[1:41](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=101)** Then you'll choose the authentication method that you want to use, and the site gives you information about each of the authentication methods and some guidelines for why you might choose one over another.
>
> **[1:50](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=110)** You can also set up MySQL allow and deny rules to keep people from having access to the entire MySQL database, and you can configure it to use an authentication proxy, which is like the htaccess files that we were discussing before.
>
> **[2:03](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=123)** And last of all, you can enable a Captcha if you want to prevent automated requests and require that only requests from humans can be used.
>
> **[2:11](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=131)** Again, the most secure approach is to leave both of these tools off of your production server so that the public simply can't access them.
>
> **[2:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/phpinfo-and-phpmyadmin?u=76281980&t=138)** But if you absolutely must have them, then take the extra time to make sure that you secure them properly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4), [[MySQL]] (3)
> **CLI Commands:** php (4), mysql (3), find (1), apache (1), make (1)
> **Code Identifiers:** phpmyadmin (6)
> **Env Vars:** php (4), http (1)
> **Prerequisites:** set up (2), setup (2), configure (1)
> **Definitions:** is a  (2)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Configure error reporting and logging](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=0)** - [Instructor] In this movie, we'll learn how to configure error reporting in [[PHP]] with security in mind.
>
> **[0:05](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=5)** There are four primary configurations for error reporting.
>
> **[0:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=9)** The first is display_errors, which controls whether errors should be displayed in a browser for the user to see.
>
> **[0:14](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=14)** Log_errors is similar but it controls whether errors should be logged to a log file.
>
> **[0:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=20)** Error_reporting controls what errors are worthy of PHP's attention and error_log sets the path to the log file where we want PHP to log any errors.
>
> **[0:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=30)** Ideally set each of these values in your php.ini file.
>
> **[0:34](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=34)** They can also be set inside your PHP code itself but if there's an error before those values get set, it might not get handled the way you expect.
>
> **[0:42](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=42)** How do we tell PHP what errors are worthy of attention?
>
> **[0:45](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=45)** We can use some predefined error constants.
>
> **[0:47](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=47)** A full list is available in the [php.net](https://php.net) website but I'm going to cover the most important ones.
>
> **[0:52](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=52)** All of these constants are in all capital letters and begin with a capital E and an underscore.
>
> **[0:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=58)** Error is for fatal errors.
>
> **[1:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=60)** Those are errors that PHP was not able to recover from.
>
> **[1:03](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=63)** It means the PHP script did not finish running.
>
> **[1:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=66)** A parse error is when there's a bug in the code that prevents PHP from understanding and processing the code.
>
> **[1:11](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=71)** Warning is for non-fatal errors.
>
> **[1:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=73)** PHP found a big problem but it was able to keep going with the [[Representational State Transfer (REST)|rest]] of the script anyway.
>
> **[1:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=78)** Notice allows PHP to give you notices about potential issues.
>
> **[1:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=82)** Strict reports suggested improvements.
>
> **[1:25](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=85)** The code works fine but you didn't follow best practices somewhere.
>
> **[1:29](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=89)** It's a good way to keep your code in top shape.
>
> **[1:31](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=91)** Deprecated gives warnings about code which has been scheduled for future removal.
>
> **[1:35](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=95)** There's no problem with your code today but there will be in the future.
>
> **[1:39](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=99)** It helps you to plan ahead and all includes all of these categories.
>
> **[1:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=103)** Which errors we want to see depends entirely on the circumstances.
>
> **[1:46](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=106)** It's a good idea to have two sets of configurations.
>
> **[1:49](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=109)** One for development and one for production.
>
> **[1:51](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=111)** When we're first developing our PHP code, we want to see all errors right in the browser so that we can address them right away.
>
> **[1:59](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=119)** Here I've set display_errors to on, log_errors to off, and error_reporting to E_ALL.
>
> **[2:05](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=125)** All you could log the errors too.
>
> **[2:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=127)** It just might not be a file that you ever look at.
>
> **[2:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=129)** When we deploy our PHP code to our production server, we don't want to show errors in the browser.
>
> **[2:14](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=134)** We shouldn't give the public any clues about what went wrong.
>
> **[2:17](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=137)** Those error notices may include valuable information about our code.
>
> **[2:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=140)** So here I have display_errors in the browser set to off but I am going to log_errors to a file instead.
>
> **[2:26](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=146)** So log_errors is set to on.
>
> **[2:28](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=148)** Then the developers will know what's wrong to fix it.
>
> **[2:31](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=151)** In production, you can log all errors and some developers do or you can configure it to just log the critical ones.
>
> **[2:38](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=158)** For example, imagine that you have some code that has a deprecation error or a strict error.
>
> **[2:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=163)** The error won't keep your code from functioning as expected.
>
> **[2:46](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=166)** If 1,000 users access a page that has that code, it will log the same warning message 1,000 times.
>
> **[2:53](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=173)** I think that makes it harder to find the real errors when they occur.
>
> **[2:57](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=177)** We could tell production to log errors only when they are error, parse, and warning errors.
>
> **[3:02](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=182)** Notice the upright line or pipe character.
>
> **[3:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=184)** That means or and it just joins them together.
>
> **[3:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=187)** So error or parse or warning.
>
> **[3:11](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=191)** Or we can tell production to log all errors but not the deprecations.
>
> **[3:15](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=195)** The caret symbol means not.
>
> **[3:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=198)** So it says all but not deprecated.
>
> **[3:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=200)** And we can make combinations using parentheses.
>
> **[3:23](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=203)** This says all errors but not an error which is strict or deprecated or a notice.
>
> **[3:29](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=209)** If we're going to log errors, then we should also tell PHP where that error log is located.
>
> **[3:34](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=214)** You can provide a path to a log file.
>
> **[3:36](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=216)** I've used as an example /path/to/errors.log.
>
> **[3:40](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=220)** It should be the full and complete path to find that file on the hard drive.
>
> **[3:44](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=224)** If you're on [[Windows]], you would use C: at the start.
>
> **[3:47](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=227)** Another option is to use the syslog keyword.
>
> **[3:51](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=231)** In this case, PHP would use the log file path that's set by the operating system.
>
> **[3:56](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=236)** It would be up to you to configure or find out what the operating system is using.
>
> **[4:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=240)** The PHP info function can tell you the location of the current error log.
>
> **[4:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/configure-error-reporting-and-logging?u=76281980&t=244)** It's important to configure your errors so that in development you can find errors and fix them and then in production, those errors are there for you to see but not for the public.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (17), [[Representational State Transfer (REST)|Rest]] (1), [[Windows]] (1)
> **CLI Commands:** php (17), find (4), make (1)
> **Env Vars:** php (15), e_all (1)
> **Code Identifiers:** display_errors (3), log_errors (3), error_log (1), error_reporting (1)
> **Warnings:** warning (4)
> **Prerequisites:** configure (4)
> **Analogies:** for example (1), imagine (1)
> **File Paths:** php.ini (1)

#### [Other configuration options](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=0)** - [Instructor] Let's take a look at a few other configurations in your [[PHP]].ini file.
>
> **[0:05](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=5)** Many of these are optional configurations, and many of them will depend on how you use php.
>
> **[0:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=10)** The first configuration is expose_php.
>
> **[0:15](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=15)** It controls whether or not php's version number is sent in the response headers to the browser.
>
> **[0:21](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=21)** Remember, one of our principles was security through obscurity.
>
> **[0:24](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=24)** We don't want to give away extra information.
>
> **[0:26](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=26)** It might let a hacker know that we're vulnerable to certain security issues.
>
> **[0:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=30)** Let me demonstrate.
>
> **[0:31](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=31)** I'll show you what a header looks like using the Unix curl command.
>
> **[0:35](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=35)** Curl can be used to retrieve a webpage at a URL.
>
> **[0:38](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=38)** If you don't have the curl command available, don't worry, just watch my demonstration.
>
> **[0:42](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=42)** You can see I've got curl, and then I'm using the dash dash head option.
>
> **[0:46](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=46)** That will request a web page, but only return the head information that comes back.
>
> **[0:51](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=51)** I will demonstrate with a simple php page on my local computer.
>
> **[0:55](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=55)** When I hit return, it makes a request for that php page, and shows the head information sent in the response.
>
> **[1:02](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=62)** Notice that fourth line, X powered by php 7.3.11.
>
> **[1:08](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=68)** Turning off the configuration for exposed php would remove that line.
>
> **[1:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=73)** Notice the php version is also listed in the line right above that.
>
> **[1:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=78)** That information is being included by the web server, which is Apache in my case.
>
> **[1:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=82)** That's something we would need to turn off in the [[Web Servers]] configuration.
>
> **[1:26](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=86)** That's beyond the scope of this course, but you could do it for Apache by setting the configuration for server signature to off.
>
> **[1:34](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=94)** We also have the ability to set some limiting configurations.
>
> **[1:38](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=98)** We can set the memory limit.
>
> **[1:40](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=100)** Here I've got it set to eight megabytes.
>
> **[1:42](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=102)** We can set the post max size.
>
> **[1:44](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=104)** That's the maximum size that a post request can send.
>
> **[1:48](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=108)** The maximum execution time for a request, and the maximum input time.
>
> **[1:52](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=112)** Typically, these default values are good, and you should not need to change them.
>
> **[1:56](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=116)** But if you do change them, be mindful of your server's resources.
>
> **[2:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=120)** Make sure you still have enough memory available to other server processes, even in peak periods of usage.
>
> **[2:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=126)** You have the ability to disable some features.
>
> **[2:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=129)** The disabled functions directive allows you to specify functions that should not be allowed to run under any circumstances.
>
> **[2:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=136)** If you aren't using powerful functions, you can turn them off to prevent anyone from using them, especially things that target the underlying operating system, like exec and system.
>
> **[2:26](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=146)** I've given you a default list here of some good ones, but you can modify it to fit your needs.
>
> **[2:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=150)** You can also turn off DL, which is short for dynamic loading.
>
> **[2:35](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=155)** It determines whether the web server can dynamically load php extensions.
>
> **[2:39](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=159)** If you don't need dynamic loading, turn it off.
>
> **[2:42](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=162)** There are also a number of file configuration options you can set.
>
> **[2:45](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=165)** File uploads is typically on.
>
> **[2:47](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=167)** The default setting allows you to create [[HTML]] [[Forms]] which can upload files.
>
> **[2:51](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=171)** But if you don't need file uploads, you can turn it off.
>
> **[2:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=174)** You can configure the number of maximum file uploads allowed, as well as the maximum file upload size.
>
> **[3:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=180)** It's not directly related to file uploading, but you should also have the ability to configure open base DIR.
>
> **[3:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=186)** This directive limits the files that can be accessed by php to just the specified directory.
>
> **[3:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=193)** It affects php functions like include and require.
>
> **[3:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=196)** It's a way of using an allow list for the files and directories that php can work with.
>
> **[3:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=202)** If you allow uploading files, then you can specify the upload temp directory.
>
> **[3:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=207)** This is where php will store uploaded files at first, until you decide what you want to do with them.
>
> **[3:32](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=212)** We can configure whether or not php is allowed to open or to include remote files.
>
> **[3:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=217)** The options are allow_url_fopen, and allow_url_include.
>
> **[3:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=223)** These allow php to grab code from somewhere else on the internet.
>
> **[3:47](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=227)** You generally want to leave both of these directives off.
>
> **[3:49](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=229)** You don't want to be loading code from somewhere else.
>
> **[3:52](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=232)** We reviewed the most important php.ini directives for security.
>
> **[3:56](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/other-configuration-options?u=76281980&t=236)** You can get a complete list of all the directives and a full explanation by going to the [php.net](https://php.net) website, to the manual page for ini.php.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (18), [[Web Servers]] (1), [[HTML]] (1), [[Forms]] (1)
> **CLI Commands:** php (18), curl (4), apache (2), make (1)
> **File Paths:** php.ini (2), ini.php (1)
> **Code Identifiers:** expose_php (1), allow_url_fopen (1), allow_url_include (1)
> **Env Vars:** url (1), html (1), dir (1)
> **Prerequisites:** configure (3)
> **Versions:** php 7 (1), 3.11 (1)
> **URLs:** [php.net](https://php.net) (1)

#### [PHP on a shared host](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-on-a-shared-host?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-on-a-shared-host?u=76281980&t=0)** - [Instructor] In this movie, we'll talk about how to configure [[PHP]] when it's being used on a shared host.
>
> **[0:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-on-a-shared-host?u=76281980&t=6)** The best place to configure PHP is via the php.ini file.
>
> **[0:11](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-on-a-shared-host?u=76281980&t=11)** If you have control over your web server, then that's what you should do.
>
> **[0:15](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-on-a-shared-host?u=76281980&t=15)** But on a shared hosting server, you may not have the ability to configure php.ini.
>
> **[0:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-on-a-shared-host?u=76281980&t=20)** The ISP may have control over that file.
>
> **[0:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-on-a-shared-host?u=76281980&t=22)** If that's the case, you can use a PHP function called ini_set to configure PHP at runtime.
>
> **[0:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-on-a-shared-host?u=76281980&t=30)** This will allow you to have a different configuration from other PHP users on the same server.
>
> **[0:35](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-on-a-shared-host?u=76281980&t=35)** I suggest putting your configurations in one PHP file that gets required at the beginning of every script.
>
> **[0:41](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-on-a-shared-host?u=76281980&t=41)** That will keep them consistent, it will make them easy to manage, and it will ensure that they get set at the start of every web request.
>
> **[0:48](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-on-a-shared-host?u=76281980&t=48)** Here's an example using ini_set to configure error reporting.
>
> **[0:53](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-on-a-shared-host?u=76281980&t=53)** Inside a set of PHP tags we call ini_set, and then in parentheses two arguments, the option to configure and the setting you want.
>
> **[1:01](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-on-a-shared-host?u=76281980&t=61)** You can configure most settings like this, but there are a few settings which can't be changed using ini_set, such as disable functions.
>
> **[1:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-on-a-shared-host?u=76281980&t=69)** Over the last decade, shared hosting has largely been replaced by virtual private servers.
>
> **[1:15](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-on-a-shared-host?u=76281980&t=75)** On a virtual private server, users share [[Hardware]], but everybody gets their own operating system.
>
> **[1:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-on-a-shared-host?u=76281980&t=80)** If you sign up for a server and it feels like you have your own [[Linux]] server all to yourself, then you're using a virtual private server.
>
> **[1:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-on-a-shared-host?u=76281980&t=87)** It gives you a lot more freedom to manage the server the way you want, but it means that you're more responsible for configuration and maintenance, but it does give you the freedom to manage your PHP installation using the php.ini file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (11), [[Hardware]] (1), [[Linux]] (1)
> **CLI Commands:** php (11), make (1)
> **Env Vars:** php (8), isp (1)
> **Prerequisites:** configure (7)
> **Code Identifiers:** ini_set (4)
> **File Paths:** php.ini (3)
> **Definitions:** means that (1)
> **Analogies:** such as (1)


### 3. Filtering Input and Controlling Output

[↑ Back to Table of Contents](#table-of-contents)

#### [Validating input](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=0)** - [Instructor] In this chapter, we will learn real-world techniques to secure the input to [[PHP]] and the output from PHP.
>
> **[0:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=7)** We'll start by using PHP to validate that input data matches our expectations.
>
> **[0:12](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=12)** This is about securing the data that comes into your website through expected pathways.
>
> **[0:17](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=17)** It's a little bit like the security screening at an airport.
>
> **[0:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=20)** We want to inspect what's coming in so we can stop problems before they get inside.
>
> **[0:25](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=25)** To recognize bad data, we need to give some thought to what good data looks like.
>
> **[0:29](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=29)** It will vary for every project that you work on.
>
> **[0:32](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=32)** For example, imagine PHP code to create new user accounts.
>
> **[0:36](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=36)** On one project, usernames might be 10 lowercase letters and numbers.
>
> **[0:40](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=40)** On another project, usernames might be any valid email address.
>
> **[0:44](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=44)** And on another project, usernames might have capital letters, dashes and underscores, but not numbers.
>
> **[0:50](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=50)** For each project, for every data input, we need to determine the format and the values that are allowed.
>
> **[0:56](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=56)** With that, we can write validation code.
>
> **[0:59](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=59)** You also want to reject unexpected data.
>
> **[1:01](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=61)** If you have a web form that should send in values for a user's first name, last name, and email then those should be the only data allowed.
>
> **[1:08](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=68)** If the form sends more data then your code should either ignore it or reject the request.
>
> **[1:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=73)** I'll show you some PHP code to do this in a moment.
>
> **[1:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=76)** One useful technique is to set default values and then only replace them if a request gives you valid alternatives.
>
> **[1:23](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=83)** Otherwise the defaults remain in place and other data is ignored.
>
> **[1:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=87)** Let's take a look at some PHP code.
>
> **[1:29](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=89)** Here's an example of a function called extract get params.
>
> **[1:33](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=93)** It takes an array of parameters and returns only those values from PHP's built-in get array.
>
> **[1:38](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=98)** It works like an allow list.
>
> **[1:39](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=99)** Inside the function, you can see that it loops through the list of allowed parameters and either copies the value or sets it to null.
>
> **[1:46](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=106)** Anything not on the list will be skipped over.
>
> **[1:49](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=109)** When it returns an array of the allowed values, I can safely use the variable params and know that it contains only the values I expect.
>
> **[1:56](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=116)** Nothing extra.
>
> **[1:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=118)** I've added var_dump at the end so we can see the contents of the new array when we try it out.
>
> **[2:02](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=122)** As a comment, I've included an example URL.
>
> **[2:05](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=125)** Of course your URL would be different than mine.
>
> **[2:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=129)** In Firefox, I'll visit that URL.
>
> **[2:12](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=132)** And if you look here you can see I've got several parameters: username kskoglund, and password equals secret, and logged in equals one.
>
> **[2:21](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=141)** But you can see that I only allowed username and password, so that's all that's going to be inside this params array.
>
> **[2:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=150)** This demonstration uses the superglobal get but you could do the same thing for post to allow only certain form fields.
>
> **[2:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=157)** There are common validations you will use frequently.
>
> **[2:40](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=160)** We can validate whether data is present or not.
>
> **[2:42](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=162)** We can make sure that the length of a string is not too short or too long.
>
> **[2:46](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=166)** We can check to see if data is of the right type.
>
> **[2:49](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=169)** For example, is a data a number or a string?
>
> **[2:52](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=172)** We can check to see if data is in the right format.
>
> **[2:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=174)** That's useful for validating things like email addresses.
>
> **[2:57](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=177)** We can check if data is within a set of values, if a value should be between the numbers one and nine or the user must respond with yes or no.
>
> **[3:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=186)** We can make sure that data is in that allowed set.
>
> **[3:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=189)** And last of all, uniqueness.
>
> **[3:11](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=191)** A good example is when a user must pick a username.
>
> **[3:14](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=194)** Each username should be unique in the system.
>
> **[3:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=196)** So we need to check and see whether that username picked is allowed.
>
> **[3:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=200)** Let's look at PHP code to help with all of this.
>
> **[3:24](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=204)** In the validation_functions.php file, I've given you some core validation functions.
>
> **[3:29](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=209)** They're meant to be used with other code.
>
> **[3:31](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=211)** As an example up here, I have in the comments a function called validate presence on, which loops through a set of required fields and checks to make sure that the post superglobal has those values.
>
> **[3:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=223)** If not, it sets an error message.
>
> **[3:45](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=225)** This is one way you might use the has presence function that's down here.
>
> **[3:50](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=230)** Has presence takes a value and returns true if it's considered present, or false otherwise.
>
> **[3:57](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=237)** You can see that it trims out any leading or trailing white space so that spaces don't count as being present.
>
> **[4:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=244)** Then it checks to see if the value is set and equal to something besides an empty string.
>
> **[4:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=250)** Next, we have has length, which checks the length of a string.
>
> **[4:14](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=254)** You can provide an array of options to set min, max or exact.
>
> **[4:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=259)** If an option for max is included, it returns false if the length is greater than that maximum.
>
> **[4:25](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=265)** If an option for min is included, it returns false if the length is less than the minimum.
>
> **[4:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=270)** If an option for exact is included, it returns false if the length is not the same.
>
> **[4:35](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=275)** It only returns true if all conditions that are in those options are met.
>
> **[4:40](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=280)** Next, we can validate format with has format matching.
>
> **[4:44](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=284)** It checks the format of a string using a regular expression.
>
> **[4:47](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=287)** You can provide any regular expression, but be careful.
>
> **[4:50](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=290)** It's easy to make mistakes and either to reject or to accept more than you intend.
>
> **[4:55](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=295)** For example, the comments that I've provided give some hints about using anchor tags in your regular expression.
>
> **[5:01](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=301)** Next, the has number function checks if a value is a number or not.
>
> **[5:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=306)** Remember, all values coming from the superglobals get or post or coming from cookies are always going to be strings.
>
> **[5:14](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=314)** So we use the PHP function is numeric, which tests whether a value is a number or a numeric string.
>
> **[5:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=322)** This function also accepts options.
>
> **[5:23](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=323)** It can test if the value is a number that is above or below maximum and minimum values.
>
> **[5:29](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=329)** Next we have has inclusion in and has exclusion from.
>
> **[5:35](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=335)** These functions are really just repackaging PHP's built-in in array function.
>
> **[5:40](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=340)** Has inclusion in checks if the value is in an array, like an allow list.
>
> **[5:45](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=345)** Has exclusion from makes sure a value is not in an array, like a deny list.
>
> **[5:51](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=351)** And finally, we have validating uniqueness.
>
> **[5:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=354)** It's tricky to demonstrate a generic validation for uniqueness.
>
> **[5:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=358)** It depends on whether you're checking a database and what kind of database you're using.
>
> **[6:02](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=362)** You might be using [[MySQL]], PDO objects or prepared statements.
>
> **[6:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=366)** Instead, I've just given you a mock-up of the concept so that you can implement it yourself.
>
> **[6:11](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=371)** In my example, has uniqueness takes a value as well as a table and a column.
>
> **[6:17](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=377)** That's where you would find similar values in the database.
>
> **[6:21](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=381)** It escapes that value, which we'll discuss more later, and it constructs a database query.
>
> **[6:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=387)** However you write it, you'll want to get back a count of items in the database that match the value.
>
> **[6:32](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=392)** If the count is greater than zero, the value is not unique and it returns false.
>
> **[6:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=397)** Let's try an example that uses some of these validations.
>
> **[6:40](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=400)** I have a PHP script here called validation_tests.php.
>
> **[6:45](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=405)** At the top, it requires the validation_functions file we just looked at, and then it uses a value that's in the URL called test.
>
> **[6:55](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=415)** And then I use that value to run some validations.
>
> **[6:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=418)** You can see I have a check for whether it has presence.
>
> **[7:01](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=421)** It returns present or not present.
>
> **[7:03](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=423)** Has length to see if it is within the minimum of three and the maximum of five.
>
> **[7:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=429)** Has format matching.
>
> **[7:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=430)** And you see I've got a regular expression here that says any four digits.
>
> **[7:14](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=434)** Has number to check whether or not there is a number that is 100 or greater or 1000 or less.
>
> **[7:21](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=441)** And has inclusion of checks to see if it's in the set of odd numbers one, three, five, seven, nine, or whether it's not in the set of odd numbers one, three, five, seven, and nine.
>
> **[7:31](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=451)** Let's go to Firefox and try it out.
>
> **[7:34](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=454)** So here I am at the URL and I'm just going to start with test being equal to S.
>
> **[7:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=457)** We'll hit return.
>
> **[7:38](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=458)** And you can see that comes back and tells us that it is present, but it is an invalid length, it's an invalid format, invalid number not included in the set, excluded from the set.
>
> **[7:48](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=468)** Now, if we, for example, take away the S you'll see now it's not present anymore.
>
> **[7:55](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=475)** Let's try adding %20, which is how we would type a space in a URL.
>
> **[8:01](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=481)** So %20 represents space, still not present.
>
> **[8:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=484)** If we do %20 followed by S now it is present, right?
>
> **[8:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=489)** You see there is a space there that lets us know that it is counting because it does have something there.
>
> **[8:14](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=494)** But it's still not long enough.
>
> **[8:15](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=495)** Let's try Kevin.
>
> **[8:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=498)** You can see now it says that it is present and the length suddenly became valid.
>
> **[8:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=502)** But it's an invalid format.
>
> **[8:24](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=504)** We go back here.
>
> **[8:25](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=505)** Our format was four digits.
>
> **[8:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=507)** So let's try something with that.
>
> **[8:28](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=508)** Let's try nine-nine-nine-nine.
>
> **[8:32](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=512)** Now it is present, has a valid length, it is a valid format, but it's not a valid number.
>
> **[8:38](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=518)** Because has numbers said it had to be in this range.
>
> **[8:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=523)** So let's try making it something that's in that range.
>
> **[8:46](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=526)** Let's make it zero-nine-nine-nine.
>
> **[8:49](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=529)** And now it is a valid number, but it's not included in the set or excluded in the set.
>
> **[8:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=534)** To try that, let's just try putting in the number nine.
>
> **[8:57](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=537)** We know that's going to fail our number of validations but you can see it is included in the set, right?
>
> **[9:03](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=543)** But it's not excluded from the set.
>
> **[9:05](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=545)** If we try eight, you can see it is excluded from the set.
>
> **[9:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=550)** It's not in the set anymore.
>
> **[9:12](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=552)** So this is a simple example, just to give us an easy way to play with the validations and get a feel for how they work.
>
> **[9:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/validating-input?u=76281980&t=558)** Using these kinds of common validations as well as your own custom validations will help you to secure your site and regulate the data that comes in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (13), [[MySQL]] (1)
> **CLI Commands:** php (13), make (5), mysql (1), find (1)
> **Env Vars:** php (11), url (6), pdo (1)
> **Definitions:** is a  (9), is an  (1)
> **Analogies:** for example (4), imagine (1)
> **Code Identifiers:** validation_functions (2), var_dump (1), validation_tests (1)
> **File Paths:** validation_functions.php (1), validation_tests.php (1)
> **Tools:** firefox (2)

#### [Sanitizing data](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=0)** - [Presenter] In addition to writing validations, we also want to sanitize the data that comes into your [[PHP]] code.
>
> **[0:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=6)** Many common types of hacks, pass in data that's carefully constructed to cause harm.
>
> **[0:12](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=12)** Special strings can be used to affect many parts of the code, from the database to [[JavaScript]], to [[HTML]] and more.
>
> **[0:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=20)** Sanitizing the input will convert harmful data into harmless data.
>
> **[0:25](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=25)** In general, we don't want to try to detect every possible type of harmful data.
>
> **[0:29](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=29)** It's simply too easy to miss something.
>
> **[0:32](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=32)** Instead, we will run a sanitization process on the data to neutralize or remove powerful characters.
>
> **[0:39](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=39)** How we sensitize the data depends on how we plan to use it.
>
> **[0:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=43)** For putting the data into the database then we need to sanitize it for the database.
>
> **[0:47](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=47)** If we're going to output a string to the browser page then we need to sanitize it for HTML.
>
> **[0:53](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=53)** If it's going to be used in JavaScript it must be first made safe for JavaScript.
>
> **[0:57](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=57)** Each one of these types has different characters that have special meaning.
>
> **[1:02](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=62)** You can perform sanitization in two ways.
>
> **[1:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=64)** You can either encode characters or escape them.
>
> **[1:08](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=68)** Encoding characters means replacing those powerful characters with harmless equivalent characters.
>
> **[1:14](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=74)** Escaping characters means looking for the powerful characters in the string and adding an escape character before them that renders them harmless.
>
> **[1:23](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=83)** I don't recommend that you write your own custom sanitization functions.
>
> **[1:26](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=86)** Instead, it's much better to use the well-tested PHP specific functions.
>
> **[1:31](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=91)** It's very hard to get sanitizations right and account for all of the possible cases.
>
> **[1:36](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=96)** And do not try to remove or correct invalid data in a string.
>
> **[1:39](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=99)** It becomes a game of cat and mouse.
>
> **[1:41](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=101)** You pull out data that looks incorrect but then when the string is joined back together without that data that string now is also harmful.
>
> **[1:48](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=108)** Fortunately, you don't have to write your own custom function because PHP gives you some good sanitization functions and filters.
>
> **[1:56](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=116)** The first of these, HTML special chars, looks for characters that have special meaning to HTML and renders them harmless by encoding them into HTML entities.
>
> **[2:05](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=125)** The HTML entities function is similar but goes a little further.
>
> **[2:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=129)** Instead of just encoding characters that have special power, it encodes anything that has an equivalent HTML entity.
>
> **[2:15](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=135)** For example, the copyright symbol doesn't have any special meaning to HTML so HTML special chars would leave it alone but HTML entities would replace it with an entity.
>
> **[2:25](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=145)** The function strip tags removes anything that's an HTML tag or PHP tag.
>
> **[2:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=150)** I realized that I said not to remove content from strings but this is an exception because strip tags does it effectively.
>
> **[2:36](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=156)** The PHP function URL encode will encode a string so that it can be used in a link or a URL.
>
> **[2:42](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=162)** [[JSON]] encode will encode a string so that it's safe for use in JavaScript or JSON.
>
> **[2:47](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=167)** If you're using a database, you'll need to escape strings before you use them with the database both for inserting data into the table as well as for querying a table.
>
> **[2:56](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=176)** Most [[Databases]] offer some kind of functions with them that will escape data specifically for that database type.
>
> **[3:02](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=182)** If you're using [[MySQL]] then you can use MySQLi real escape string.
>
> **[3:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=187)** If you don't have a database specific function available, PHP also offers add slashes which is a generic function that escapes key characters that are typically associated with databases; primarily quotation marks.
>
> **[3:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=199)** But the database specific function is still going to be better.
>
> **[3:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=202)** In this chart, I have a third column called filter.
>
> **[3:26](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=206)** We'll come back to those.
>
> **[3:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=207)** First, let's see the PHP functions listed in the first column in action.
>
> **[3:31](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=211)** In the file Sanitizing HTML.php, I have a variable called sanitize which allows me to easily turn on and off the sanitization features.
>
> **[3:40](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=220)** After that, there's an HTML string which contains HTML tags.
>
> **[3:44](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=224)** You should think of it as a placeholder for any data that allows a user to change the look of the HTML page.
>
> **[3:49](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=229)** Here the user is able to style the text even if we don't want it to be styled.
>
> **[3:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=234)** There's a JavaScript string which includes JavaScript tags and a JavaScript alert.
>
> **[4:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=240)** You should think of that as a placeholder for any malicious JavaScript code.
>
> **[4:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=244)** If I'm not sanitizing, it will output those to the browser.
>
> **[4:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=247)** Let's take a look.
>
> **[4:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=249)** Click over here and let's just load this page and you can see it pops up with a gotcha alert and then we have this styled HTML text that outputs.
>
> **[4:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=260)** Let's turn on sanitization by setting this to true.
>
> **[4:26](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=266)** Come back over and let's reload the page.
>
> **[4:29](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=269)** We didn't get a JavaScript pop-up this time and we just got text output on the page.
>
> **[4:34](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=274)** The powerful characters have been rendered harmless.
>
> **[4:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=277)** If you take a look at the page source, you'll see why.
>
> **[4:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=283)** You can see that the less than sign was replaced by an HTML character entity, &lt; and the quote characters and the greater than characters have also been replaced.
>
> **[4:55](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=295)** These HTML entities don't have the same meaning for HTML.
>
> **[4:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=298)** I'll go back to the PHP code page and you'll see that I've also got some other examples here with HTML entities and strip tags.
>
> **[5:05](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=305)** Let's try strip tags.
>
> **[5:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=307)** I'll just uncomment that one and comment this one out.
>
> **[5:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=313)** Let me take away that and remove that one.
>
> **[5:17](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=317)** Now let's come back.
>
> **[5:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=319)** I'll close the page source and let's reload the page.
>
> **[5:23](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=323)** Now, you can see that it completely removed the tags and if you were to view source you'll see that they're completely gone.
>
> **[5:29](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=329)** It's a different approach.
>
> **[5:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=330)** It's stripped out the tags instead.
>
> **[5:32](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=332)** Next let's look at the Sanitizing URLs page.
>
> **[5:36](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=336)** It gets a parameter called title from the URL.
>
> **[5:40](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=340)** If it's not set, it will be the string nothing yet.
>
> **[5:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=343)** The variable URL string is being set to something that has an ampersand in it.
>
> **[5:48](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=348)** The ampersand has special meaning in a URL.
>
> **[5:50](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=350)** When sanitizing is enabled, it will call a URL encode on the string and then output the result.
>
> **[5:56](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=356)** Right now sanitization set to false.
>
> **[5:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=358)** Let's go to Firefox and try it out.
>
> **[6:02](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=362)** So right now it says title is nothing yet.
>
> **[6:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=364)** If I click add title link, you'll see that now it says title is URL encoding working?
>
> **[6:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=370)** That's the string that's right here.
>
> **[6:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=373)** But notice this ends try it and see but here we've got try it and then nothing after it.
>
> **[6:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=379)** And that's because that ampersand is used to separate different values.
>
> **[6:25](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=385)** So this, as far as the URL is concerned, is the beginning of a new attribute.
>
> **[6:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=390)** If we instead turn on sanitization, true, come back.
>
> **[6:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=397)** Now let's clear title and add title again.
>
> **[6:40](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=400)** Now you see we get the whole thing because it encoded it for the URL.
>
> **[6:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=403)** The spaces have become plus signs.
>
> **[6:46](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=406)** You can see that some of the other things like the question mark and the ampersand have also been encoded into their percent entities that URLs use.
>
> **[6:55](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=415)** And let's look at the file Sanitizing_sql to get an idea of how we would sanitize something for a database.
>
> **[7:03](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=423)** You see that it takes a string from the URL, here it is name, and if sanitization is turned on, it will call it an escape function on it.
>
> **[7:11](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=431)** It can use add slashes but if we had a database, it would be better to use the database specific function like MySQLi real escape string.
>
> **[7:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=439)** Then I'm going to use that string to construct some [[SQL]].
>
> **[7:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=442)** So you can see I'm dropping it in right here.
>
> **[7:25](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=445)** This is SQL that I would normally send to a database.
>
> **[7:28](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=448)** Let's look at Firefox to see some examples.
>
> **[7:31](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=451)** Here I've got name equals Kevin and so this is the SQL it would send to the database.
>
> **[7:35](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=455)** That's perfectly appropriate.
>
> **[7:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=457)** It would search for all customers where the name is Kevin but imagine if the user constructed something malicious.
>
> **[7:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=463)** Let's say, instead, they changed this to be name equals %27+OR+1=1;--.
>
> **[7:56](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=476)** Now look at the SQL that it generated.
>
> **[7:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=478)** This is in fact something that's malicious because where name equals now has two single quotes after it because that was an encoded entity that was right there.
>
> **[8:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=489)** And so it's quote, quote that ends the name so where name is equal to nothing or where one equals one.
>
> **[8:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=496)** Well, one always equals one so that returns true.
>
> **[8:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=499)** So this will always return true.
>
> **[8:21](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=501)** The dash dash is an SQL comment that says ignore everything that comes after that.
>
> **[8:25](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=505)** So the [[Representational State Transfer (REST)|rest]] of it is irrelevant.
>
> **[8:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=507)** This would match every single customer in the database.
>
> **[8:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=510)** If we did this to a login script, we might be able to trick it into giving us access.
>
> **[8:34](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=514)** Or a user might try submitting, just replace this part here with a semi-colon and then a plus, drop, plus, table, plus, customers.
>
> **[8:50](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=530)** And now I have two SQL statements.
>
> **[8:53](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=533)** Select from customers where name equals this and then right after that drop table customers.
>
> **[9:01](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=541)** This is a new SQL command which would destroy the customers database completely.
>
> **[9:05](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=545)** Let's sanitize the data instead.
>
> **[9:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=547)** Let's come back over here, let's turn on true.
>
> **[9:12](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=552)** Let's reload that same page and you can see now it put a slash in front of that first single quote mark.
>
> **[9:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=560)** So now it doesn't have the same meaning.
>
> **[9:23](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=563)** So now this is the string.
>
> **[9:25](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=565)** So it's going to look where customers where name is equal to a literal single quote and then semi-colon and so on.
>
> **[9:33](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=573)** This single quote doesn't have the same effect as this one does.
>
> **[9:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=577)** These PHP functions have been around for a long time but starting in PHP 52 some new filter methods were added and the name of these filters is in the third column.
>
> **[9:47](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=587)** We use them with the PHP function filter var.
>
> **[9:50](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=590)** The arguments or the string you want to filter and the filter you want to apply.
>
> **[9:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=594)** A full list of all those filter types is on the [php.net](https://php.net) website.
>
> **[9:59](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=599)** Let me give you an example.
>
> **[10:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=600)** This string contains a JavaScript alert.
>
> **[10:02](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=602)** We can filter var on the string with filter sanitize string.
>
> **[10:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=607)** It strips out the tags just like strip tags did.
>
> **[10:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=610)** I'm not crazy about these filters.
>
> **[10:12](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=612)** They have long names that are hard to remember and I don't see much gain over the other functions.
>
> **[10:17](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sanitizing-data?u=76281980&t=617)** You can pick the style that you prefer but both sets are available to sanitize your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (20), [[PHP]] (13), [[JavaScript]] (10), [[SQL]] (7), [[JSON]] (2)
> **Env Vars:** html (20), php (11), url (10), sql (7), json (2)
> **CLI Commands:** php (13), cat (1), mysql (1)
> **Definitions:** is an  (2), is a  (2)
> **Analogies:** for example (1), think of it as (1), imagine (1), just like (1)
> **Tools:** firefox (2)
> **File Paths:** html.php (1)
> **URLs:** [php.net](https://php.net) (1)

#### [Keeping code private](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=0)** - [Instructor] Controlling output also means controlling visibility.
>
> **[0:03](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=3)** And there are parts of our application we choose to show users like the [[HTML]] output, but even more parts that we want to keep hidden like our application logic, functions, and database passwords.
>
> **[0:14](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=14)** Because of that, you should always organize your code into public and private areas.
>
> **[0:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=19)** The public directory can be accessible to the web server.
>
> **[0:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=22)** It would contain mostly your presentation code, page templates, content that you are going to show the user anyway.
>
> **[0:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=30)** You still want to be smart about the code that you put in public pages though.
>
> **[0:33](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=33)** Keep them minimal.
>
> **[0:34](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=34)** For more complicated code, the public pages can call classes and functions, which are stored in private libraries.
>
> **[0:41](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=41)** Those private libraries could be in a directory that's not accessible to the web server, but would still be accessible to your code because your code has access to the file system.
>
> **[0:53](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=53)** Most [[PHP]] frameworks use this type of public private code organization, so that you don't have to worry about it.
>
> **[0:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=58)** But if you're not using a framework, it's a smart way to organize your code.
>
> **[1:03](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=63)** The most sensitive information is credentials: usernames and passwords.
>
> **[1:08](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=68)** For example, a web application probably needs a username and password to log into a database.
>
> **[1:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=73)** It might have credentials to send emails or credentials to use third-party APIs.
>
> **[1:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=78)** Often these credentials are stored in plain text.
>
> **[1:21](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=81)** There's nothing wrong with that, as long as you keep them private and secure.
>
> **[1:25](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=85)** Storing credentials in a single file separated from your code makes it easier to treat them with care.
>
> **[1:31](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=91)** It also makes it easier to exclude that file from [[Version Control]] systems, like [[Git]] or SVN, where you wouldn't want them shared and permanently archived.
>
> **[1:39](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=99)** And it's a good idea to keep as few copies of the credentials around as you can.
>
> **[1:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=103)** Use unique credentials for different servers and for different developers.
>
> **[1:47](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=107)** It's a smart idea to protect your directories by keeping an index.php file in every single directory.
>
> **[1:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=114)** Index.php is the default file the web server will look for when someone specifies a directory without specifying a file.
>
> **[2:01](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=121)** If you don't have an index.php file, then the web server could return a list of the directory contents instead.
>
> **[2:08](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=128)** And index.php page also gives you the opportunity to redirect the user to the homepage, or to return a 404 Page Not Found error.
>
> **[2:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=136)** Let me show you a sample application that makes use of these techniques.
>
> **[2:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=139)** Inside my sites directory, you see I have a directory called sample_app.
>
> **[2:24](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=144)** And inside that there are two other directories: public and private.
>
> **[2:28](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=148)** It's really clear.
>
> **[2:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=150)** Pages in the public directory are pages the public will access.
>
> **[2:33](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=153)** Some of those pages may require user to be logged in, but at least some part of the public will be using these pages.
>
> **[2:40](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=160)** Inside, it contains index.php, which is just a basic home page.
>
> **[2:46](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=166)** This page makes a call to private pages.
>
> **[2:50](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=170)** Here it's using require_once.
>
> **[2:52](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=172)** The dot dot tells it to go up one directory.
>
> **[2:55](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=175)** So it goes up out of the public directory into the sample_app directory, and then down into the private directory where it finds initialize.php.
>
> **[3:05](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=185)** It has access to that file by using the file system.
>
> **[3:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=189)** It doesn't need to go through the web server.
>
> **[3:11](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=191)** The public directory also has an assets directory, which has a place where I would put images, JavaScripts, and style sheet.
>
> **[3:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=198)** Those need to be public because HTML pages will tell the browser to make additional web request to retrieve them.
>
> **[3:25](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=205)** You would set it up so that public users can't access the pages in the private directory.
>
> **[3:29](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=209)** This includes that initialize.php file.
>
> **[3:32](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=212)** You can see that it defines some constants, and it requires other files by using the constant private path.
>
> **[3:38](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=218)** It loads passwords.php, database connection, and a file with functions in it.
>
> **[3:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=223)** Let's take a look at passwords.php.
>
> **[3:46](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=226)** My credentials are being stored in a single file.
>
> **[3:49](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=229)** We can take good care of this file and we can exclude it from source code managers.
>
> **[3:53](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=233)** These are the credentials that I would use to log into the database.
>
> **[3:56](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=236)** You can see that the next thing initialize does is it loads in db_connection, which would actually connect to the database.
>
> **[4:03](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=243)** I've commented that out because I don't have a database set up here.
>
> **[4:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=246)** And then finally it loads functions.php, which is the place I would put general functions I want to have available.
>
> **[4:11](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=251)** In a real-world application, you might have these broken up into further differentiated files.
>
> **[4:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=256)** You can see that I've also got an index.php page in the private directory, which just performs a simple redirect to the root of the website.
>
> **[4:24](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=264)** Let's go over to Firefox.
>
> **[4:26](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=266)** I've brought up sample_app directly here, so that we can take a look at it.
>
> **[4:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=270)** And you'll see the default behavior when I don't have an index.php file.
>
> **[4:34](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=274)** You'll see that it gives me a listing of the directories.
>
> **[4:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=277)** That's what we don't want the public to see.
>
> **[4:38](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=278)** That's why we use that index.php page.
>
> **[4:41](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=281)** If, for example, I click on private, you'll see I did get redirected back to the root of local host because this kicked in right here and it redirected me back to the root.
>
> **[4:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=294)** That's what we want to use that index.php page for, is to prevent us from being able to see this.
>
> **[4:59](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=299)** When I deploy my code to the world, I would configure the web server to point directly inside this public directory.
>
> **[5:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=306)** The public would never be able to see the sample-app directory and the contents inside of it.
>
> **[5:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=310)** So after we divide up our code, we need to do an additional step and configure the web server to respect this boundary.
>
> **[5:17](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=317)** If you're using Apache, set the DocumentRoot to the public directory, and then it will return only files that are inside that directory.
>
> **[5:26](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=326)** Nothing above it, nothing beside it.
>
> **[5:28](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=328)** So the private directory will not be reachable by the web server.
>
> **[5:32](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=332)** If you're using NGINX, set the root to the public directory to get the same effect.
>
> **[5:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=337)** If you're using a different web server, you can probably search the documentation for root or DocumentRoot to learn how to configure it.
>
> **[5:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/keeping-code-private?u=76281980&t=343)** Keeping your code private may take some reorganization and configuration, but the extra security it brings is worth the extra effort.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (15), [[HTML]] (2), [[Version Control]] (1), [[Git]] (1)
> **CLI Commands:** php (15), git (1), make (1), apache (1), nginx (1)
> **File Paths:** index.php (9), initialize.php (2), passwords.php (2), functions.php (1)
> **Env Vars:** html (2), php (1), git (1), svn (1), nginx (1)
> **Code Identifiers:** sample_app (3), require_once (1), db_connection (1)
> **Prerequisites:** configure (3), set up (1)
> **Analogies:** for example (2)
> **Documentation:** the documentation (1)

#### [Smart logging](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=0)** - [Instructor] Logging plays an important role in keeping your application secure.
>
> **[0:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=4)** Logs can alert you to problems and provide clues when something goes wrong.
>
> **[0:08](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=8)** There are three main things you want to be logging.
>
> **[0:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=10)** You want to log errors.
>
> **[0:12](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=12)** You want to log sensitive actions whenever they're performed, and you want to log possible attacks.
>
> **[0:17](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=17)** [[PHP]] will log major errors for you already.
>
> **[0:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=20)** In the configuration chapter, we learned how to configure which errors are shown and logged, but there could be application errors that aren't PHP errors.
>
> **[0:28](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=28)** For example, a user might try to assign a blog post to a category that no longer exists in the database.
>
> **[0:35](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=35)** Your application can write errors and other events to a database table or to a log file.
>
> **[0:40](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=40)** I've created a simple file called logger.php that we can use for demonstration.
>
> **[0:45](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=45)** The file errors.log is going to be a blank file where our log entries will go.
>
> **[0:52](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=52)** I've made sure that errors.log is writable, and you can see here I've provided a tip that in UNIX, you can use chimad777errors.log in order to make sure that it is.
>
> **[1:03](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=63)** In my logger code, you can see I've defined a function called logger and it takes two arguments, the log level and the message.
>
> **[1:11](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=71)** It puts those together with a colon between and adds a line return at the end.
>
> **[1:14](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=74)** It uses the file put contents function to write to a file.
>
> **[1:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=78)** The first option after it is going to make sure that it appends new content to the end of the existing file and not erase content, and it will also lock the file so that other people can't write to it while we're in the process of logging.
>
> **[1:33](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=93)** And then down below, I'm going to use it to log an error, and something that I want to use for debugging.
>
> **[1:39](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=99)** Let's try it in Firefox.
>
> **[1:41](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=101)** I'll go to Firefox.
>
> **[1:42](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=102)** Here, I'm at logger.php.
>
> **[1:45](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=105)** When I hit return, it just comes up and says logged.
>
> **[1:48](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=108)** We come back over here and we take a look at errors.log.
>
> **[1:51](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=111)** You can see it says error, an unknown error occurred and debug x is one.
>
> **[1:55](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=115)** We can log anything that we want to this file.
>
> **[1:57](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=117)** Anything that we think would be useful for knowing what's happening in our application and for troubleshooting problems.
>
> **[2:03](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=123)** Now this is a simple logger.
>
> **[2:05](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=125)** There are fancier ones.
>
> **[2:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=127)** I've given you a list here that you can check out in the comments.
>
> **[2:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=130)** There's monolog, there's log for PHP, keylogger, and analog.
>
> **[2:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=136)** All of those you can find on [[GitHub]].
>
> **[2:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=138)** If you're using a PHP framework, most of them have their own logging tools.
>
> **[2:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=142)** [[Laravel]] and Symfony incorporate monolog.
>
> **[2:26](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=146)** [[Drupal]], Zend, Magento all use built-in classes.
>
> **[2:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/smart-logging?u=76281980&t=150)** Whether you use one of these or you write your own, logging will help you to monitor your application and detect problems that could impact your website security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (6), [[GitHub]] (1), [[Laravel]] (1), [[Drupal]] (1)
> **CLI Commands:** php (6), make (2), find (1)
> **Env Vars:** php (4), unix (1)
> **Tools:** firefox (2), github (1)
> **File Paths:** logger.php (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Cookie configuration](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=0)** - [Instructor] In this movie, we'll learn how to configure cookies to make them more secure.
>
> **[0:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=4)** We'll begin by learning how to configure cookies securely.
>
> **[0:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=7)** Cookies are not very secure by default.
>
> **[0:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=10)** When a cookie is set, the cookie data is stored in the user's browser, where it may be visible to the user.
>
> **[0:15](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=15)** In many browsers, a user can simply go into the browser preferences to inspect their cookies.
>
> **[0:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=20)** We also already discussed that cross-site scripting attacks can use [[JavaScript]] to access and steal cookie data.
>
> **[0:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=27)** If a website is not using HTTPS exclusively, then cookie data is also visible in transit from the browser to the web server and vice versa.
>
> **[0:36](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=36)** Because of this, it's a good practice to limit cookies to data that is not sensitive.
>
> **[0:41](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=41)** It's fair to store information, like a user's language preference, but it would not be suitable for storing any kind of ID to give access to password protected areas.
>
> **[0:49](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=49)** A few simple configurations can make cookies more secure.
>
> **[0:53](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=53)** You can set the cookie expiration date so it doesn't linger for months or even years.
>
> **[0:57](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=57)** You can set the cookies domain and path so that it's only available to domains in areas of your code that need it.
>
> **[1:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=64)** You should use HttpOnly cookies to prevent JavaScript from accessing them.
>
> **[1:08](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=68)** You should use HTTPS for all your web pages and then use secure cookies, which are sent only if the connection is encrypted.
>
> **[1:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=76)** In [[PHP]], we can do all of this using the set cookie function.
>
> **[1:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=79)** The first two arguments are the cookie name and value.
>
> **[1:23](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=83)** They're the only ones that are required.
>
> **[1:25](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=85)** After that, you can set the expiration time, the path, the domain, whether it should be a secure cookie, if you're using HTTPS, and whether it should be HTTP only.
>
> **[1:35](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=95)** Let's look at an example.
>
> **[1:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=97)** In the file, cookies_setcookie_example.php, I've put an example using set cookie.
>
> **[1:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=103)** I've listed the default values.
>
> **[1:45](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=105)** For expiration, the default value is zero, which means it expires when the browser closes.
>
> **[1:51](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=111)** For path, the default is the current directory.
>
> **[1:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=114)** For domain, it defaults to the current domain, and by default, secure and HttpOnly are set to false.
>
> **[2:01](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=121)** Instead of those defaults, I will use custom values.
>
> **[2:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=124)** The name I'm using is Lang, short for language, and the value is EN, short for English.
>
> **[2:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=130)** I set the expiration to be one week from now by adding the current time, which is a unix timestamp, plus one week expressed in seconds.
>
> **[2:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=139)** I get the number of seconds by multiplying 60 seconds by 60 minutes by 24 hours by seven days.
>
> **[2:25](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=145)** For the path, I've set it to only apply to URLs that start with store, and the domain is only for ww.[mysite.com](https://mysite.com).
>
> **[2:35](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=155)** If I also had another sub-domain called blog.[mysite.com](https://mysite.com), this cookie would not be sent with any requests that went to it.
>
> **[2:42](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=162)** Then I set secure by asking PHP if HTTPS has been set.
>
> **[2:48](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=168)** You could also simply set it to be true or false if you knew the answer, and I'll set HTTP only to true, which is a good idea, unless you know JavaScript is going to need to access this cookie.
>
> **[2:59](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=179)** Then I pass those values in as arguments to set cookie.
>
> **[3:02](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cookie-configuration?u=76281980&t=182)** The set cookie function would work just with the name and value, but these additional options create a cookie with better security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[PHP]] (3)
> **Env Vars:** https (4), php (2), http (2)
> **CLI Commands:** php (3), make (2)
> **Definitions:** short for (2), is a  (2)
> **URLs:** [mysite.com](https://mysite.com) (2)
> **Prerequisites:** configure (2)
> **File Paths:** cookies_setcookie_example.php (1)
> **Code Identifiers:** cookies_setcookie_example (1)


### 4. Defending the Most Common Attacks

[↑ Back to Table of Contents](#table-of-contents)

#### [Cross-site scripting (XSS)](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=0)** - [Instructor] In this chapter, we will discuss defenses against the most common attacks on web applications.
>
> **[0:05](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=5)** We will review each attack briefly, but we're going to focus primarily on solutions.
>
> **[0:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=9)** We'll begin by looking at cross-site scripting, or XSS for short.
>
> **[0:14](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=14)** Cross-site scripting is when a hacker is able to inject arbitrary [[JavaScript]] code into someone else's webpage.
>
> **[0:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=20)** It's used to trick users of that webpage into running that JavaScript code.
>
> **[0:24](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=24)** It can even be used to steal cookies from their browser.
>
> **[0:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=27)** An example of a cross-site scripting attack would be getting a user to click a malicious link which includes a URL parameter containing JavaScript.
>
> **[0:35](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=35)** When the page loads, if the parameter is included in the [[HTML]], it will include the JavaScript and the code will execute.
>
> **[0:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=43)** This example just pops up a harmless alert box that says, "Gotcha!"
>
> **[0:46](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=46)** but it could be any JavaScript.
>
> **[0:48](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=48)** It could access the browser's cookie data or send data to another server that a hacker controls.
>
> **[0:53](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=53)** There are many variations, but the basic idea is that a page is tricked into running someone else's JavaScript.
>
> **[0:59](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=59)** The attack is successful because the browser trusts the JavaScript that's already on the HTML page.
>
> **[1:05](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=65)** We defend against cross-site scripting attacks by sanitizing any dynamic text that gets output to the browser.
>
> **[1:12](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=72)** It could be HTML, JavaScript, [[JSON]], XML.
>
> **[1:15](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=75)** It doesn't matter.
>
> **[1:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=76)** Any dynamic data used in the response needs to be sanitized.
>
> **[1:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=80)** You should certainly sanitize data that comes directly from users via URLs or submitted [[Forms]], but you should also sanitize data that comes from the database: From files, from cookies or from sessions.
>
> **[1:33](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=93)** It may have originally come from a user, or it may have been modified since it was stored.
>
> **[1:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=97)** We learned sanitization techniques in the last chapter, so I won't go over them again but I will give you some functions to streamline the sanitization process.
>
> **[1:45](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=105)** In the file xss_sanitize_functions.[[PHP]], I've given you three functions for sanitizing data.
>
> **[1:52](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=112)** Each function name is a single letter which I've borrowed from Ruby's ERB.
>
> **[1:57](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=117)** I believe that if sanitizing is easy, you'll do it more often.
>
> **[2:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=120)** In the first one if you pass a string to the H function, it will call HTML special chars on it and return the result.
>
> **[2:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=127)** You can see how it would be much easier to type the single letter H than it would be to remember and to type out the entire function name.
>
> **[2:15](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=135)** To make text suitable for JavaScript use, we can use the J function to call JSON and code on it.
>
> **[2:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=139)** To encode text for URLs, the U function would call URL in code.
>
> **[2:24](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=144)** You can un-comment the usage examples that are down here at the bottom in order to try it out.
>
> **[2:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=150)** I'll save the file and let's go over here.
>
> **[2:34](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=154)** Now you'll see that it sanitized each one so that it's safe.
>
> **[2:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=157)** I'm going to leave them commented out because that way this file can be included in your projects so that you have H, J and U available to you.
>
> **[2:46](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-scripting-xss?u=76281980&t=166)** If you use these functions to sanitize all of your dynamic data, then cross-site scripting attacks won't be effective.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (9), [[HTML]] (4), [[JSON]] (2), [[Forms]] (1), [[PHP]] (1)
> **Env Vars:** html (4), url (2), json (2), xss (1), xml (1)
> **CLI Commands:** php (1), ruby (1), make (1)
> **File Paths:** xss_sanitize_functions.php (1)
> **Code Identifiers:** xss_sanitize_functions (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Warnings:** gotcha (1)

#### [Cross-site request forgery (CSRF)](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=0)** - [Instructor] In this movie, we'll learn how to use [[PHP]] to protect against cross-site request forgery, which is also known as CSRF.
>
> **[0:08](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=8)** Cross-site request forgery is when a hacker tricks a user into making a request to a third-party website.
>
> **[0:15](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=15)** In this case, your website.
>
> **[0:17](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=17)** They can do it to generate fraudulent requests, request that the user did not intend to make.
>
> **[0:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=22)** But most concerning, it can take advantage of a user's logged in state to perform privileged actions.
>
> **[0:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=27)** Let's take a look at an example from the user's point of view.
>
> **[0:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=30)** Imagine that you, as a user, are logged into your bank account.
>
> **[0:33](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=33)** And once you're done with your [[Banking]], you navigate away from the window, but you don't actually click log out.
>
> **[0:38](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=38)** That means you're logged in session with the bank is still open.
>
> **[0:42](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=42)** The bank doesn't know that you've moved on to other websites.
>
> **[0:44](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=44)** As far as they're concerned, you may click another link at any moment to perform another action.
>
> **[0:49](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=49)** As you surf around and look at other websites, let's say you load a webpage which contains a specially crafted image tag.
>
> **[0:56](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=56)** The source of this image tag is not an image file, but is a URL for your bank to transfer money from one account to another.
>
> **[1:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=64)** You can see why this would be a problem.
>
> **[1:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=66)** If you're not logged in, this request would fail.
>
> **[1:08](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=68)** But when you're logged in, then the bank sees it as a new request coming from a logged in user.
>
> **[1:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=73)** It doesn't have to be a bank.
>
> **[1:15](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=75)** It could be any website that wants users to be logged in to perform certain actions.
>
> **[1:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=79)** There are several ways to protect against CSRF attacks.
>
> **[1:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=82)** The first is that get requests should always be idempotent.
>
> **[1:26](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=86)** Idempotent means they make no changes.
>
> **[1:29](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=89)** They can be called many times and nothing will change.
>
> **[1:32](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=92)** Only use post request whenever a page is making changes.
>
> **[1:36](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=96)** Typically, a get request is from a link or URL, and a post request is from a web form.
>
> **[1:41](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=101)** Why does the request method matter?
>
> **[1:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=103)** Because those image source URLs are always get requests.
>
> **[1:47](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=107)** It's possible to generate a post request without actually having a web form, but it's harder to trick someone into accidentally sending a secret post request.
>
> **[1:55](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=115)** Once post methods are required for changes, then we can add protections to ensure that the form data comes from legitimate [[Forms]] that the website generated, and not from a fake version.
>
> **[2:05](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=125)** A token can be generated and stored in the user session.
>
> **[2:08](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=128)** It can also be added to a hidden field in the form.
>
> **[2:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=133)** Then when the form is submitted, the token will be included and we can compare it with the version stored in the session.
>
> **[2:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=139)** If they match, we know that the form was generated by the website for this specific user.
>
> **[2:24](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=144)** We can also track the token generation time to make sure that it was created recently.
>
> **[2:28](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=148)** Let's take a look at how we can do this in PHP.
>
> **[2:31](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=151)** In the file, CSRF requests type functions.
>
> **[2:34](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=154)** I've included two functions, which make it easy to check if a request is a get request or a post request.
>
> **[2:40](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=160)** You can use it to make sure that only post requests add, edit or delete data.
>
> **[2:45](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=165)** In the file CSRF token functions, I've included functions to help you generate and work with CSRF [[Tokens]].
>
> **[2:52](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=172)** The CSRF token function will generate a unique token that we can use for our CSRF protection.
>
> **[2:59](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=179)** There are other ways to generate a token like this, but this is a common one.
>
> **[3:02](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=182)** The create CSRF token function, will create that token and store it in the session along with the current time.
>
> **[3:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=190)** The destroy CSRF token function does the opposite.
>
> **[3:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=193)** It removes the data from the session.
>
> **[3:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=196)** The CSRF token tag returns an [[HTML]] tag that includes a newly generated and stored token.
>
> **[3:24](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=204)** It's calling those functions up above.
>
> **[3:26](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=206)** When a form with the CSRF token is submitted, the CSRF token is valid function will compare the submitted token, and the stored token, to see if they're the same, and return true or false.
>
> **[3:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=217)** If it fails, you can handle that in many ways.
>
> **[3:40](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=220)** One way is simply to tell PHP to die on token failure.
>
> **[3:44](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=224)** The function die on CSRF token failure does exactly that.
>
> **[3:48](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=228)** I usually prefer to handle it in a more graceful user-friendly way.
>
> **[3:52](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=232)** And finally, the CSRF token is recent function will check the session to see if the token is still considered recent enough for us to consider it valid.
>
> **[4:01](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=241)** The file csrfdemo.php, puts all of these pieces together into an example.
>
> **[4:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=247)** At the top, it starts the session.
>
> **[4:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=249)** We'll need that to be able to store the token.
>
> **[4:11](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=251)** And then it requires those CSRF function files.
>
> **[4:14](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=254)** If a request is a post request, it will do some processing.
>
> **[4:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=258)** If not, it will just display the HTML form at the bottom.
>
> **[4:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=262)** Let's get down there first.
>
> **[4:23](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=263)** You can see this is just a basic HTML form, and it includes CSRF token tag.
>
> **[4:29](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=269)** Notice I'm calling echo on it, so that I actually output the tag once it's created.
>
> **[4:33](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=273)** Remember, this function generates a token, stores it in the session, and outputs the HTML tag with the value.
>
> **[4:39](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=279)** Let's load it in the browser to see.
>
> **[4:42](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=282)** Here's my basic form.
>
> **[4:44](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=284)** And when I go to developer page source, you'll see there's now a hidden input that we don't see called CSRF token.
>
> **[4:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=294)** And here's the value that has been assigned.
>
> **[4:57](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=297)** Back in the code, you'll see that when the form is submitted, and it is a post request, it'll check to see if the token is valid.
>
> **[5:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=304)** If it's not, then it will simply return a message, and return that back with the form.
>
> **[5:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=309)** If it is valid, we'll also get a message, and then it will check to see if the token is considered recent or not, and flag that as well.
>
> **[5:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=316)** We can try that out in Firefox.
>
> **[5:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=318)** Don't worry about typing in a username and password.
>
> **[5:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=320)** We just submit the form.
>
> **[5:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=322)** You'll see it says that it is a valid form submission, and it was recent.
>
> **[5:26](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=326)** These CSRF functions can be included into your own projects.
>
> **[5:29](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/cross-site-request-forgery-csrf?u=76281980&t=329)** If you require post requests for making changes, and you generate tokens to protect your web forms, then CSRF attacks will no longer be a threat.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4), [[HTML]] (4), [[Forms]] (2), [[Tokens]] (2), [[Banking]] (1)
> **Env Vars:** csrf (19), html (4), php (3), url (2)
> **CLI Commands:** make (5), php (4)
> **Definitions:** is a  (6), known as (1)
> **File Paths:** csrfdemo.php (1)
> **Tools:** firefox (1)
> **UI Navigation:** go to (1)
> **Analogies:** imagine (1)

#### [SQL injection](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=0)** - [Instructor] In this movie, we will learn to prevent [[SQL]] injection as our [[PHP]] code interacts with an SQL database.
>
> **[0:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=7)** SQL injection is when a hacker is able to execute arbitrary SQL requests.
>
> **[0:12](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=12)** It can be used to steal database data or to add, delete or change data that's in the database.
>
> **[0:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=18)** Let's look at an example.
>
> **[0:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=19)** Imagine I have a login form.
>
> **[0:21](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=21)** When the form is submitted, my PHP code will query the database to see if the username and password match.
>
> **[0:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=27)** It starts by assembling an SQL statement which will be sent to the database.
>
> **[0:31](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=31)** Notice that the values for username and password are just being dropped into the string, suppose that a malicious user submits carefully crafted data designed to affect the database.
>
> **[0:41](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=41)** You can see how the SQL would be altered.
>
> **[0:44](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=44)** Everything after the two dashes will be ignored.
>
> **[0:47](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=47)** This query will return all users instead of only users that have a matching username and password.
>
> **[0:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=54)** SQL injection is primarily a problem with single quotes, but not exclusively.
>
> **[0:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=58)** There are other things that can be injected.
>
> **[1:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=60)** Let's see how we can protect against SQL injection attacks.
>
> **[1:03](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=63)** On the database side, you can limit the database privileges granted to the application.
>
> **[1:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=69)** If the PHP code doesn't need to be able to drop or truncate tables, then the principle of least privilege says we should not grant those privileges.
>
> **[1:17](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=77)** It won't prevent SQL injection, but it may limit the types of harm that can be done.
>
> **[1:21](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=81)** On the PHP side, there are two strategies.
>
> **[1:24](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=84)** We can sanitize the input before we send it to SQL.
>
> **[1:28](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=88)** We talked about that in the last chapter or even better, we can use prepared statements.
>
> **[1:32](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=92)** In a prepared statement, the query is not just a string of text.
>
> **[1:36](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=96)** Instead, it's more like a program or function which has designated inputs that have to be of a specific type.
>
> **[1:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=103)** Let's take a look at both of these in PHP.
>
> **[1:45](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=105)** In the file sqli_escape_function.php.
>
> **[1:49](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=109)** I've placed a function called sql_prep.
>
> **[1:52](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=112)** It's much shorter to type than the function it calls, mysqli_real_escape_string and it also falls back on using add slashes if a database connection hasn't been set.
>
> **[2:03](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=123)** You can use this to sanitize data before you construct an SQL string.
>
> **[2:08](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=128)** In the file, sqli_prepared_statement.php, I've given you an example of a step-by-step guide to using prepared statements using the mysqli class.
>
> **[2:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=138)** Prepared statements are also part Of PDO, pair and some frameworks.
>
> **[2:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=142)** Prepared statements are a better approach than sanitizing the data.
>
> **[2:26](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=146)** It starts by creating a new database connection, then it prepares the statement by using an SQL string as a template.
>
> **[2:34](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=154)** Notice, that it has two question marks in it.
>
> **[2:36](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=156)** Those are placeholders for data.
>
> **[2:38](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=158)** Then after we've prepared a statement, we can bind parameters to the template we prepared.
>
> **[2:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=163)** For each data input, we'll include the expected data type as a value.
>
> **[2:48](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=168)** The data types use single letter codes.
>
> **[2:50](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=170)** We have S for string, I for integer and so on.
>
> **[2:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=174)** In line 26 you'll see that the first argument is a string with S, S in it.
>
> **[2:59](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=179)** So it declares that the two following values are both going to be treated as strings.
>
> **[3:03](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=183)** So we have username and we have password as values.
>
> **[3:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=187)** These are not merely dropped into a string.
>
> **[3:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=190)** They're going to be put into predefined data slots and they can't alter the overall SQL at all.
>
> **[3:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=196)** Then, it executes the prepared statement to get a result and then we can work with that result data, clean up and close the connection.
>
> **[3:24](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=204)** The [php.net](https://php.net) website has more documentation on how prepared statements work, but this gives you a basic structure to follow.
>
> **[3:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/sql-injection?u=76281980&t=210)** Prepared statements are the best way to defend against SQL injection attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (14), [[PHP]] (8)
> **Env Vars:** sql (14), php (5), pdo (1)
> **CLI Commands:** php (8)
> **Code Identifiers:** sqli_escape_function (1), sql_prep (1), mysqli_real_escape_string (1), sqli_prepared_statement (1)
> **File Paths:** sqli_escape_function.php (1), sqli_prepared_statement.php (1)
> **Cross-References:** we talked about (1), in the last (1)
> **Exercise Files:** template (2)
> **URLs:** [php.net](https://php.net) (1)

#### [Session hijacking and fixation](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=0)** - [Instructor] In this movie, we'll learn how to protect against session hijacking and session fixation attacks.
>
> **[0:05](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=5)** First, recall that sessions work by storing information on the server and then giving a user's browser a cookie that contains the session ID to reference that information.
>
> **[0:15](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=15)** In general, storing the information on the server is safer because it's never sent to the browser.
>
> **[0:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=20)** You can't view that information in the cookie and you can't observer it in transit.
>
> **[0:24](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=24)** However, the session ID is sent to the browser.
>
> **[0:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=27)** An attacker can steal that session ID.
>
> **[0:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=30)** Once they have it, they can include it with future requests to impersonate a user.
>
> **[0:34](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=34)** If the user's currently logged in, the hacker will be logged in too without needing to have any credentials.
>
> **[0:40](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=40)** The attacker can use that account, steal personal information, and even change the password to lock the legitimate user out of the account.
>
> **[0:47](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=47)** Session IDs are often discovered through network eavesdropping, such as on open wireless networks at coffee shops and airports.
>
> **[0:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=54)** Session fixation is a different attack.
>
> **[0:56](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=56)** It turns session hijacking on its head.
>
> **[0:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=58)** Instead of an attacker taking a user session, an attacker gives the user a session to use.
>
> **[1:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=64)** It's successful if the user takes the session identifier and uses it, for example, to log into a website.
>
> **[1:11](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=71)** The result is the same as session hijacking.
>
> **[1:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=73)** The user and the attacker both possess the same session identifier.
>
> **[1:17](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=77)** If the user is considered logged in, then the attacker is too.
>
> **[1:21](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=81)** Session fixation is often performed by including the session identifier in a URL string or added using [[JavaScript]].
>
> **[1:28](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=88)** Session hijacking and fixation have similar solutions, so we'll cover them together.
>
> **[1:33](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=93)** First, never accept session identifiers from anywhere besides cookies.
>
> **[1:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=97)** [[PHP]] can be configured to accept IDs sent in from the GET and POST variables too.
>
> **[1:41](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=101)** It was even a default setting early on.
>
> **[1:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=103)** Keep that feature off and it'll prevent most sessions fixation attacks.
>
> **[1:47](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=107)** You want to use HttpOnly cookies to prevent JavaScript from having access if an attacker manages to find a cross-site scripting vulnerability.
>
> **[1:56](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=116)** You should be using HTTPS for all your web pages, especially pages that require authentication.
>
> **[2:02](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=122)** Not only will the pages be encrypted during transit but the cookies can be too.
>
> **[2:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=126)** Most of these items can be addressed using settings in the php.ini file.
>
> **[2:11](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=131)** Setting the session.cookie_lifetime to zero will only keep it alive until the browser is closed.
>
> **[2:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=136)** Setting use_cookies to one ensures that session IDs only come from the cookie, never from GET or POST requests.
>
> **[2:23](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=143)** Setting cookie_httponly prevents JavaScript access and thwarts cross-site scripting attempts to steal cookies using JavaScript.
>
> **[2:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=150)** Setting cookie_secure will only allow access to the session ID if you're using HTTPS.
>
> **[2:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=157)** If you're still using HTTP, you should upgrade.
>
> **[2:40](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=160)** If not, you'll have to turn this off and user cookies will be visible to anyone watching the requests in transit.
>
> **[2:45](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=165)** Setting cookie_samesite to Lax prevents the browser from sending session cookies with cross-site requests.
>
> **[2:52](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=172)** The choices are none, lax or strict, so lax is the medium setting.
>
> **[2:57](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=177)** It's only available in PHP 7.3 or higher and not all browsers respect it but it's still a good idea.
>
> **[3:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=184)** You can also set some of these values in your code using session_set_cookie_params and you can provide the expiration, the path, the domain and whether it should be set to sure or httponly.
>
> **[3:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=196)** But configuration isn't the only protection against session hijacking and fixation.
>
> **[3:21](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=201)** You should regenerate the session identifier periodically.
>
> **[3:24](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=204)** If you do it right after a user logs in, then that user will have a brand new session ID and any other identifiers out in the world are now invalid.
>
> **[3:32](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=212)** It prevents session fixation almost entirely and puts an end to any hijacked sessions.
>
> **[3:38](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=218)** You should also remove and expire old session files regularly.
>
> **[3:41](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=221)** You can do that by keeping track of the last activity or the last user login.
>
> **[3:46](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=226)** You can also track and compare the browser's user_agent string or the IP address to check if requests appear to be from the same computer.
>
> **[3:53](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=233)** If not, force the user to log in again.
>
> **[3:55](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=235)** These aren't enough on their own but they add defense and depth.
>
> **[3:59](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=239)** Let's take a look at some PHP code to demonstrate.
>
> **[4:02](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=242)** In the file session_hijacking_functions.php, there are functions to help prevent these attacks.
>
> **[4:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=247)** End_session wipes out the current session.
>
> **[4:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=250)** Then there are three functions that check the IP address, the user_agent string, and the last_login to see if it's recent or not.
>
> **[4:21](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=261)** Down here is_session_valid makes use of all three of these if these variables are all set to true.
>
> **[4:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=267)** So it just returns false if they don't pass any one of those tests, true if it passes all three of them.
>
> **[4:34](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=274)** Confirm_session_valid calls is_session_valid and if it's not true, it ends the session and redirects to a login page.
>
> **[4:42](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=282)** I've also demonstrated how you might check if a user's already logged in in confirm_user_logged_in.
>
> **[4:48](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=288)** After every successful login, you could call a function like after_successful_login.
>
> **[4:53](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=293)** It regenerates the session ID, marks the user as logged in and stores the IP address, the user_agent and the time so we can use them for later comparisons.
>
> **[5:02](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=302)** And then after every successful logout, we'll log out the user and also in the session, and the function before every protected page, we'll make sure that the user is logged in and that the session is valid.
>
> **[5:15](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=315)** If not, you probably want to redirect the user to a login page.
>
> **[5:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=319)** This set of functions is meant to give you ideas that you can work from in your own projects.
>
> **[5:23](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=323)** You may want to make different choices than what I've made here.
>
> **[5:26](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/session-hijacking-and-fixation?u=76281980&t=326)** But my hope is that you now have the tools that you need to keep your sessions safe from hijacking and fixation attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (5), [[JavaScript]] (4)
> **Code Identifiers:** user_agent (3), is_session_valid (2), cookie_lifetime (1), use_cookies (1), cookie_httponly (1)
> **Env Vars:** php (3), post (2), https (2), url (1), http (1)
> **CLI Commands:** php (5), make (2), find (1)
> **API Endpoints:** get  (2), post  (2)
> **File Paths:** php.ini (1), session_hijacking_functions.php (1)
> **Analogies:** such as (1), for example (1)
> **Versions:** php 7 (1)

#### [Remote system execution](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=0)** - [Instructor] In this movie, we'll learn to protect our [[PHP]] code from the most powerful attack of all, remote system execution.
>
> **[0:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=6)** Remote system execution is when an attacker gains the ability to run operating system commands on the web server.
>
> **[0:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=13)** If they have that ability, they can run any command that the underlying operating system knows how to run.
>
> **[0:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=18)** It's the most powerful hack.
>
> **[0:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=20)** Fortunately, it's also typically the hardest one to achieve, unless you open up a security hole that allows it.
>
> **[0:26](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=26)** PHP's system execution functions are what allow a code to access the underlying operating system.
>
> **[0:32](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=32)** There are several of them.
>
> **[0:33](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=33)** There's exec, passthru, popen, proc_open, shell_exec, the back tic, and then system.
>
> **[0:42](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=42)** These are powerful commands that break out of PHP to use features of the operating system.
>
> **[0:47](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=47)** Using any one of them is considered a security red flag.
>
> **[0:51](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=51)** The easiest way to stay safe is to avoid using system execution functions at all.
>
> **[0:56](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=56)** If you feel you must use one, make sure you've exhausted all other possibilities, and then use it with extreme caution.
>
> **[1:02](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=62)** Make sure that you understand the function and its syntax completely.
>
> **[1:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=66)** This is a case where what you don't know can hurt you.
>
> **[1:09](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=69)** Try not to use any dynamic data that could be manipulated, and if you absolutely must, then sanitize it carefully, and add additional data validations.
>
> **[1:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=78)** PHP has functions to help sanitize dynamic data for use with system commands.
>
> **[1:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=82)** Escapeshellcmd is for escaping commands that you plan to pass to the system.
>
> **[1:28](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=88)** Escapeshellarg is for escaping the arguments to be passed to system commands.
>
> **[1:33](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=93)** Let's see an example in PHP.
>
> **[1:35](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=95)** In the file system_exec_example.php, I've given you some notes on using escapeshellcmd and escapeshellarg.
>
> **[1:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=103)** At the bottom is an example.
>
> **[1:45](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=105)** Let's pretend that this string here is user input.
>
> **[1:48](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=108)** In this case, it's echo hello.
>
> **[1:50](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=110)** That echo is a bash echo, not a PHP echo.
>
> **[1:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=114)** Ignore the commented outlines for now.
>
> **[1:56](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=116)** Down here, the page will show me the command, and then it will use exec in order to execute the command in the underlying operating system, and it will capture the result and show it to me on the page.
>
> **[2:08](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=128)** Let's take a look in Firefox.
>
> **[2:12](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=132)** When I run the page, you can see that it shows me the command.
>
> **[2:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=136)** Then it shows me the result.
>
> **[2:18](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=138)** The command is being sent from PHP to Unix.
>
> **[2:21](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=141)** And the result is coming back from Unix to PHP.
>
> **[2:25](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=145)** Let's imagine that the user adds another command after hello.
>
> **[2:29](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=149)** I'll remove this, and we'll have another example.
>
> **[2:33](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=153)** In this case, the second command is going to be echo gotcha.
>
> **[2:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=157)** And it's separated by a semicolon.
>
> **[2:39](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=159)** Let's try and load it again.
>
> **[2:42](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=162)** This time PHP is sending two commands to Unix with a semi-colon between them, and the result is only coming from the second one.
>
> **[2:50](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=170)** That second command is a placeholder for anything an attacker wants to add.
>
> **[2:54](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=174)** For example, the attacker might want to add a command like this.
>
> **[3:01](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=181)** This is going to return the first two lines out of my Unix master password file.
>
> **[3:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=186)** Save the file, and let's go back and try it.
>
> **[3:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=190)** The result that you're seeing is actually the second line from my Unix master password file.
>
> **[3:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=196)** This script has exposed information that should be kept very private.
>
> **[3:20](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=200)** That's why we need to escape the value.
>
> **[3:23](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=203)** Let's go down here and let's uncomment this line, then we'll use escapeshellcmd on that user input.
>
> **[3:30](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=210)** We'll save it.
>
> **[3:31](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=211)** We'll come back and reload the page.
>
> **[3:33](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=213)** This time it escapes the data so that it's safe, and you can see that I don't get the same result here.
>
> **[3:39](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=219)** Now, it's one command and one command only, and that command is echo followed by everything that comes after it.
>
> **[3:46](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=226)** You can even see that it added a backslash in front of that semicolon to take away its special power.
>
> **[3:52](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=232)** Again, the best advice is not to use PHPs system execution commands at all.
>
> **[3:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=238)** If you must use them, avoid using them with dynamic data.
>
> **[4:02](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/remote-system-execution?u=76281980&t=242)** And if you really must do that, then sanitize the data by using escapeshellcmd or escapeshellarg.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (10)
> **CLI Commands:** php (10), make (2)
> **Env Vars:** php (9)
> **Definitions:** is a  (3), is an  (1)
> **Code Identifiers:** proc_open (1), shell_exec (1), system_exec_example (1)
> **Tools:** bash (1), firefox (1)
> **Analogies:** imagine (1), for example (1)
> **Warnings:** caution (1), gotcha (1)

#### [PHP code injection](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=0)** - [Narrator] In this movie, we'll learn about [[PHP]] code injection and how to protect your code from it.
>
> **[0:05](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=5)** PHP code injection is when a hacker is able to execute arbitrary PHP code on the web server.
>
> **[0:11](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=11)** It's similar to remote system execution, but it affects PHP, not the servers operating system.
>
> **[0:17](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=17)** The most common way it happens is when you use the PHP function eval in the code.
>
> **[0:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=22)** Eval executes a string as if it were PHP.
>
> **[0:25](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=25)** It's powerful and it can be dangerous.
>
> **[0:27](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=27)** Injection can also be done using a technique called remote file inclusion, where they include or require functions to be tricked into loading a file that contains an attacker's PHP code.
>
> **[0:38](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=38)** The eval function is rarely used but include and require are pretty common.
>
> **[0:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=43)** Let's look at some examples for eval.
>
> **[0:45](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=45)** Let's imagine that I'm using eval I'm going to pass in some kind of a string that I've built up.
>
> **[0:49](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=49)** The most common reason that developers think they need to use eval is they either want to build up a string throughout some other part of the code, or they want to pull it back from a database and execute it.
>
> **[1:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=60)** So you might have something like approve comment 3991 that's developed as a string, and then you want to run it.
>
> **[1:07](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=67)** But a hacker could potentially run something like PHP info instead or they could ask PHP to echo back the results of a system command.
>
> **[1:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=76)** Here, I'm asking for that super secret password file that we looked at in the last movie or you can append something on.
>
> **[1:23](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=83)** So for example, let's say we're going to have PHP that echoes some code to the [[HTML]], the hacker could close the PHP tag then insert some [[JavaScript]] and then reopen the PHP tag again.
>
> **[1:35](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=95)** Let's take a look at some examples using include.
>
> **[1:37](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=97)** Here we might have include and we want to load up some kind of a template.
>
> **[1:41](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=101)** Maybe we want to load up the report template.
>
> **[1:43](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=103)** We want to make it dynamic so that the user can pick the template that they load while a user can also submit something we're not expecting like asking to go backwards a couple of directories and into a private directory where we have secret information like administrative functions to find.
>
> **[1:58](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=118)** Or it might be even including a PHP file that's stored on a remote website or some file that the hacker has been able to upload through FTP to the web server and include, would now run that file.
>
> **[2:10](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=130)** The best of fence against PHP code injection is not to use eval at all.
>
> **[2:15](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=135)** It's rarely necessary and code using it can usually be rewritten.
>
> **[2:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=139)** Try to avoid using dynamic data with eval, include or require.
>
> **[2:23](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=143)** Remember that in the configuration chapter, we learned that we can disable PHP functions we don't need like system execution functions.
>
> **[2:31](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=151)** This can limit the actions that a PHP code injection can perform.
>
> **[2:34](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=154)** You can create an allow list to make sure that the dynamic data, is part of a predefined set before calling include or require.
>
> **[2:42](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=162)** For example, I can list templates that a user can choose from.
>
> **[2:46](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=166)** If a user submits a value that's not included in that array it would be rejected.
>
> **[2:51](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=171)** You can also use an allow list or a deny list to filter out characters with special meaning to PHP.
>
> **[2:56](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=176)** The first example uses the PHP function, preg replace and a regular expression to remove any character which is not alphanumeric or an underscore.
>
> **[3:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=186)** The second example is using string replace, to remove characters which are listed in the array of invalid characters.
>
> **[3:13](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=193)** That acts as a deny list.
>
> **[3:16](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=196)** Again, the best advice is not to use eval and not to use dynamic data with include or require.
>
> **[3:22](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/php-code-injection?u=76281980&t=202)** But if you must, these should give you some strategies that you can use to protect your website from a PHP code injection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (19), [[HTML]] (1), [[JavaScript]] (1)
> **CLI Commands:** php (19), make (2), find (1)
> **Env Vars:** php (19), html (1), ftp (1)
> **Analogies:** for example (2), similar to (1), imagine (1)
> **Exercise Files:** template (3)
> **Cross-References:** in the last (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/next-steps?u=76281980&t=0)** - [Instructor] I would like to thank you for taking [[PHP]], creating secure sites with me.
>
> **[0:04](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/next-steps?u=76281980&t=4)** We've covered a lot of ground in this course.
>
> **[0:06](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/next-steps?u=76281980&t=6)** Security is a very deep topic, but my hope is that you now have smart strategies and usable code.
>
> **[0:12](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/next-steps?u=76281980&t=12)** That can be a solid foundation that you can build on.
>
> **[0:14](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/next-steps?u=76281980&t=14)** Remember that improving security is an ongoing regular process of PHP development.
>
> **[0:19](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/next-steps?u=76281980&t=19)** You should regularly audit your code for security concerns and allow both time and budget and your development cycle to address them.
>
> **[0:26](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/next-steps?u=76281980&t=26)** Perfect security may not be achievable, but we should continually strive to do better, to reduce vulnerabilities to common attacks and to raise the threshold required to do us harm.
>
> **[0:36](https://www.linkedin.com/learning/php-creating-secure-websites-8399320/next-steps?u=76281980&t=36)** I wish you luck, and I hope that you stay safe and secure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2)
> **CLI Commands:** php (2)
> **Env Vars:** php (2)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Kevin Skoglund]]

## Resources

- Exercise files available

## Skills Covered

- PHP

## Path Context

### In [[Advance Your PHP Skills]]
← [[PHP Techniques- Working with Files and Directories]] | **4 of 7** | [[PHP- User Authentication]] →

## Appears In

- [[Advance Your PHP Skills]]

## Related Courses

_Courses sharing skills:_

- [[Essential Statamic for PHP and Laravel Developers]] — PHP
- [[Essential Jigsaw for PHP and Laravel Developers]] — PHP
- [[Advanced PHP- Debugging Techniques]] — PHP
- [[PHP Techniques- Pagination]] — PHP
- [[PHP- User Authentication]] — PHP

---

[↑ Back to top](#)